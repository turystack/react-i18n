import { resolveLocale } from '@turystack/i18n'

import { uiLabels } from './ui-labels.shipped.js'
import type { UiLabels } from './ui-labels.types.js'

/** The locale tags this package ships labels for. */
export type ShippedUiLocale = keyof typeof uiLabels

/** The languages behind those tags. */
type ShippedLanguage = 'en' | 'es' | 'pt'

const SHIPPED = Object.keys(uiLabels) as ShippedUiLocale[]

/**
 * The locales of `L` the shipped labels cannot serve: any tag whose language
 * is not `en`, `es` or `pt`. `pt-PT` and `es-MX` are served — by `pt-br` and
 * `es` — exactly as `resolveUiLabels` serves them at run time.
 */
export type UntranslatedUiLocale<L extends string> = L extends unknown
  ? Lowercase<L> extends
      | ShippedLanguage
      | `${ShippedLanguage}-${string}`
      | `${ShippedLanguage}_${string}`
    ? never
    : L
  : never

/**
 * The `labels` prop for an app whose locales are `L`: labels it supplies, by
 * its own locale tags. Required for any locale the package ships no words
 * for — serving those readers English would be a silent downgrade, so the
 * type asks instead. Optional otherwise.
 */
export type UiLabelsProp<L extends string> = string extends L
  ? { labels?: Partial<Record<string, UiLabels>> }
  : [UntranslatedUiLocale<L>] extends [never]
    ? { labels?: Partial<Record<L, UiLabels>> }
    : {
        labels: Record<UntranslatedUiLocale<L>, UiLabels> &
          Partial<Record<L, UiLabels>>
      }

/**
 * The labels for `locale`: the app's own set when it supplied one, else the
 * shipped set its language resolves to (`pt-BR` and `pt-PT` → `pt-br`), else
 * English.
 */
export function resolveUiLabels<L extends string>(
  locale: L,
  labels?: Partial<Record<L, UiLabels>>,
): UiLabels {
  return labels?.[locale] ?? uiLabels[resolveLocale(locale, SHIPPED, 'en')]
}
