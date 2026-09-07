import type { TranslationTree } from '../types.js'

/**
 * Takes the tree out of whatever a loader resolved to.
 *
 * `() => import('./es')` on a file that `export default`s its locale resolves
 * to a module namespace, not to the locale. Unwrapping here keeps that detail
 * out of every call site — at the cost of reserving `default` as a top-level
 * group name, which the type doc states.
 */
export function unwrapLocale<T extends TranslationTree>(
  resolved: T | { readonly default: T },
): T {
  if (
    typeof resolved === 'object' &&
    resolved !== null &&
    'default' in resolved &&
    typeof (resolved as { default: unknown }).default === 'object'
  ) {
    return (resolved as { default: T }).default
  }
  return resolved as T
}
