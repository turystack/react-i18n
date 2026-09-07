import type { DeepPartial, TranslationTree } from '../types.js'

/**
 * Declares a locale that is complete.
 *
 * The base is named, not inferred, so the error lands here — at the file that
 * is wrong — rather than at `defineI18n`, which would only be able to say that
 * something in the set does not line up. A missing key, an invented key, or a
 * function that takes the wrong arguments all fail at this call.
 *
 * The parameters of an interpolated leaf are inherited: write `(count) => …`,
 * not `(count: number) => …`.
 */
export function defineLocale<Base extends TranslationTree>(tree: Base): Base {
  return tree
}

/**
 * Declares a locale that is still being translated. Whatever is absent is
 * served by the base at read time.
 *
 * Kept separate from `defineLocale` on purpose: a language nobody has finished
 * should say so in the code, not be discovered by a reader meeting an English
 * word in a Portuguese screen.
 */
export function definePartialLocale<Base extends TranslationTree>(
  tree: DeepPartial<Base>,
): DeepPartial<Base> {
  return tree
}
