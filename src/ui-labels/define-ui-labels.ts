import { mergeTrees } from '../internal/merge.js'

import type { PartialUiLabels, UiLabels } from './ui-labels.types.js'

/**
 * Builds the label set a UI package will render.
 *
 * Two forms. Passing one complete set replaces the recommended translation
 * outright. Passing a set plus overrides keeps every string not named — which
 * is what an app renaming `Save` to `Gravar` actually wants, rather than
 * re-typing a hundred and seventeen keys to change one.
 */
export function defineUiLabels(labels: UiLabels): UiLabels
export function defineUiLabels(
  base: UiLabels,
  overrides: PartialUiLabels,
): UiLabels
export function defineUiLabels(
  base: UiLabels,
  overrides?: PartialUiLabels,
): UiLabels {
  return mergeTrees(base, overrides)
}
