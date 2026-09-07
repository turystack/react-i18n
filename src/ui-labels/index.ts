import { uiLabelsEn } from './ui-labels.en.js'
import { uiLabelsEs } from './ui-labels.es.js'
import { uiLabelsPtBr } from './ui-labels.pt-br.js'

export * from './define-ui-labels.js'
export * from './ui-labels.en.js'
export * from './ui-labels.es.js'
export * from './ui-labels.pt-br.js'
export * from './ui-labels.types.js'

/**
 * The translations this package recommends, by locale tag.
 *
 * `defineI18n` reads this when an app does not pass `ui`, so an app whose
 * locales are drawn from these three gets translated components for free. An
 * app with a locale outside this set is asked for it by the type rather than
 * being quietly served English.
 */
export const uiLabels = {
  en: uiLabelsEn,
  es: uiLabelsEs,
  'pt-br': uiLabelsPtBr,
} as const

export type ShippedUiLocale = keyof typeof uiLabels
