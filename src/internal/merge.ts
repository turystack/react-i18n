import type { DeepPartial, TranslationTree } from '../types.js'

function isTree(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/**
 * The recursion, untyped on purpose.
 *
 * `DeepPartial<T>` cannot describe its own sub-trees to the compiler without a
 * cast at every level, and a cast per level is a cast nobody reads. One cast at
 * the boundary below, where the shape is actually known, is the honest place to
 * put it.
 */
function overlay(
  base: Record<string, unknown>,
  overrides: Record<string, unknown>,
): Record<string, unknown> {
  const merged: Record<string, unknown> = {}

  for (const key of Object.keys(base)) {
    const left = base[key]
    const right = overrides[key]

    if (right === undefined) {
      merged[key] = left
      continue
    }

    // Recursion stops at a leaf. A string or a function is taken whole: reading
    // into a function would yield an object that is not callable, and the
    // failure would surface as a blank screen at the call site, not here.
    merged[key] = isTree(left) && isTree(right) ? overlay(left, right) : right
  }

  return merged
}

/** Overlays a partial dictionary on a complete one, group by group. */
export function mergeTrees<T extends TranslationTree>(
  base: T,
  overrides: DeepPartial<T> | undefined,
): T {
  if (!overrides) {
    return base
  }

  return overlay(
    base as Record<string, unknown>,
    overrides as Record<string, unknown>,
  ) as T
}
