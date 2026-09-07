import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { mergeTrees } from '../internal/merge.js'
import { unwrapLocale } from '../internal/unwrap.js'
import type {
  EagerKeys,
  LocaleLoader,
  LocaleSource,
  TranslationTree,
} from '../types.js'
import type { ShippedUiLocale } from '../ui-labels/index.js'
import { uiLabels as shippedUiLabels } from '../ui-labels/index.js'
import type { UiLabels } from '../ui-labels/ui-labels.types.js'

type AnyLocales = Record<string, LocaleSource<TranslationTree>>

/** The locales an app declares that this package ships no words for. */
type UntranslatedLocales<L> = Exclude<keyof L & string, ShippedUiLocale>

type UiConfig<L> = [UntranslatedLocales<L>] extends [never]
  ? { ui?: Partial<Record<keyof L & string, UiLabels>> }
  : {
      /**
       * Required, because at least one of your locales is outside the set this
       * package translates. Serving those readers English would be a silent
       * downgrade, so the type asks instead.
       */
      ui: Record<UntranslatedLocales<L>, UiLabels> &
        Partial<Record<keyof L & string, UiLabels>>
    }

export type I18nProviderProps<Locale extends string> = PropsWithChildren<{
  /**
   * Controlled. Pass it and the Provider never holds locale state of its own —
   * the app does, in a router, a store, or wherever it already keeps it.
   */
  locale?: Locale
  /** Uncontrolled starting point. Ignored when `locale` is passed. */
  defaultLocale?: Locale
  /**
   * Fires on every change, including the one `setLocale` makes.
   *
   * This is where persistence lives. The package writes to no storage of its
   * own: `localStorage` does not exist under React Native and `AsyncStorage`
   * is a promise, and swallowing that difference would mean shipping a
   * hydration state that only one of the two platforms can ever enter.
   */
  onLocaleChange?: (locale: Locale) => void
}>

export type I18nValue<Base extends TranslationTree, Locale extends string> = {
  /** The active dictionary. Anything a partial locale omits reads from base. */
  t: Base
  locale: Locale
  locales: readonly Locale[]
  setLocale: (locale: Locale) => void
  /** True while a fetched locale is in flight. `t` serves base until it lands. */
  loading: boolean
}

export type I18nInstance<
  Base extends TranslationTree,
  Locale extends string,
> = {
  I18nProvider: (props: I18nProviderProps<Locale>) => React.ReactNode
  useI18n: () => I18nValue<Base, Locale>
  useTranslations: () => Base
  useLocale: () => Omit<I18nValue<Base, Locale>, 't'>
  useUiLabels: () => UiLabels
}

function isLoader<T extends TranslationTree>(
  source: LocaleSource<T>,
): source is LocaleLoader<T> {
  return typeof source === 'function'
}

/**
 * Binds a dictionary to a Provider and a set of hooks.
 *
 * A factory rather than a pair of free exports: `useI18n()` imported from a
 * package cannot know the shape of *your* dictionary without a `declare module`
 * block, and that block is a second place to keep in sync. Returned from here,
 * every hook is already typed by the locales you passed, and two apps in one
 * process never share state.
 */
export function defineI18n<
  const L extends AnyLocales,
  const B extends EagerKeys<L> & keyof L & string,
>(
  config: {
    base: B
    locales: L
  } & UiConfig<L>,
): I18nInstance<Extract<L[B], TranslationTree>, keyof L & string> {
  type Base = Extract<L[B], TranslationTree>
  type Locale = keyof L & string

  const baseTree = config.locales[config.base] as Base
  const localeKeys = Object.keys(config.locales) as Locale[]
  const configuredUi = (config as { ui?: Record<string, UiLabels> }).ui

  const Context = createContext<I18nValue<Base, Locale> | undefined>(undefined)

  function resolveUi(locale: Locale): UiLabels {
    return (
      configuredUi?.[locale] ??
      shippedUiLabels[locale as ShippedUiLocale] ??
      shippedUiLabels.en
    )
  }

  function I18nProvider({
    children,
    defaultLocale,
    locale: controlled,
    onLocaleChange,
  }: I18nProviderProps<Locale>) {
    const [uncontrolled, setUncontrolled] = useState<Locale>(
      () => defaultLocale ?? config.base,
    )
    const locale = controlled ?? uncontrolled

    // Fetched locales, kept across switches so going back is instant.
    const [fetched, setFetched] = useState<Record<string, TranslationTree>>({})
    const [loading, setLoading] = useState(false)

    // Guards a resolve that lands after the reader has moved on again.
    const requested = useRef(locale)
    requested.current = locale

    useEffect(() => {
      const source = config.locales[locale]

      if (!isLoader(source) || fetched[locale]) {
        setLoading(false)
        return
      }

      let live = true
      setLoading(true)

      source()
        .then((resolved) => {
          if (!live) {
            return
          }
          setFetched((current) => ({
            ...current,
            [locale]: unwrapLocale(resolved),
          }))
        })
        .finally(() => {
          if (live && requested.current === locale) {
            setLoading(false)
          }
        })

      return () => {
        live = false
      }
    }, [fetched, locale])

    const t = useMemo(() => {
      if (locale === config.base) {
        return baseTree
      }

      const source = config.locales[locale]
      const tree = isLoader(source) ? fetched[locale] : source

      // A locale still in flight, or a partial one, reads through to base.
      return mergeTrees(baseTree, tree as never)
    }, [fetched, locale])

    const setLocale = useCallback(
      (next: Locale) => {
        if (controlled === undefined) {
          setUncontrolled(next)
        }
        onLocaleChange?.(next)
      },
      [controlled, onLocaleChange],
    )

    const value = useMemo<I18nValue<Base, Locale>>(
      () => ({
        loading,
        locale,
        locales: localeKeys,
        setLocale,
        t,
      }),
      [loading, locale, setLocale, t],
    )

    return <Context value={value}>{children}</Context>
  }

  function useI18n(): I18nValue<Base, Locale> {
    const value = useContext(Context)

    if (!value) {
      throw new Error(
        'useI18n must be used inside the I18nProvider it came from',
      )
    }

    return value
  }

  return {
    I18nProvider,
    useI18n,
    useLocale: () => {
      const { t: _t, ...rest } = useI18n()
      return rest
    },
    useTranslations: () => useI18n().t,
    useUiLabels: () => resolveUi(useI18n().locale),
  }
}
