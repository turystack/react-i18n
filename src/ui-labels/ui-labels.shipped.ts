import { uiLabelsEn } from './ui-labels.en.js'
import { uiLabelsEs } from './ui-labels.es.js'
import { uiLabelsPtBr } from './ui-labels.pt-br.js'

/**
 * The translations this package recommends, by locale tag.
 *
 * `resolveUiLabels` reads this when an app supplies no labels of its own, so
 * an app whose locales are drawn from these languages gets translated
 * components for free. An app with a locale outside them is asked for its
 * labels by the type rather than being quietly served English.
 */
export const uiLabels = {
  en: uiLabelsEn,
  es: uiLabelsEs,
  'pt-br': uiLabelsPtBr,
} as const
