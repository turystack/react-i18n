import {
  createContext,
  type PropsWithChildren,
  type ReactNode,
  useContext,
  useMemo,
} from 'react'
import { type Locale, useLocale } from 'use-intl'

import {
  resolveUiLabels,
  type UiLabelsProp,
} from '../ui-labels/resolve-ui-labels.js'
import type { UiLabels } from '../ui-labels/ui-labels.types.js'

const Context = createContext<UiLabels | undefined>(undefined)

/**
 * `L` defaults to use-intl's `Locale` — the app's own union once it registers
 * `AppConfig` in `use-intl/core`, so a locale whose language is not shipped
 * makes `labels` required in that app.
 */
export type I18nProviderProps<L extends string = Locale> = PropsWithChildren<
  UiLabelsProp<L>
>

/**
 * Serves the UI labels of the active locale — the words `@turystack/react-web`
 * renders on its own — to `useUiLabels`.
 *
 * It holds no locale and takes none. use-intl's `IntlProvider` owns it: this
 * Provider reads `useLocale()`, so it must sit inside `IntlProvider`, and the
 * one state that switches the app's messages switches the labels too.
 */
export function I18nProvider<L extends string = Locale>({
  children,
  labels,
}: I18nProviderProps<L>): ReactNode {
  const locale = useLocale() as L
  const value = useMemo(() => resolveUiLabels(locale, labels), [labels, locale])

  return <Context value={value}>{children}</Context>
}

/**
 * The labels `@turystack/react-web` renders, in the active locale — what
 * `TuryProvider` takes as `labels`.
 */
export function useUiLabels(): UiLabels {
  const value = useContext(Context)

  if (!value) {
    throw new Error('useUiLabels must be used inside an I18nProvider')
  }

  return value
}
