import type { TranslationTree } from '../types.js'

/**
 * Declares the base dictionary, whose shape becomes the contract every other
 * locale is checked against.
 *
 * It returns its argument untouched; the work is entirely in the type.
 *
 * Deliberately **not** a `const` generic. Under `const`, `save: 'Save'` infers
 * as the literal type `'Save'` rather than `string`, and the contract then says
 * every other locale must also say "Save" — `defineLocale` would reject
 * `'Salvar'`. Ordinary inference widens the leaves and keeps what actually
 * matters: the keys, the nesting, and the signature of every interpolated leaf.
 */
export function defineTranslations<T extends TranslationTree>(tree: T): T {
  return tree
}
