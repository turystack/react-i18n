/**
 * The shape a dictionary is allowed to take.
 *
 * A leaf is a string, or a function returning one. Interpolation is a function
 * call rather than a `{name}` placeholder because a placeholder has to be
 * parsed at runtime and typed by reading a string literal, and neither survives
 * a rename. `items: (count: number) => string` is checked by the compiler for
 * arity and for the type of every argument, and costs nothing at runtime.
 */
export type TranslationLeaf = string | ((...args: never[]) => string)

export type TranslationTree = {
  readonly [key: string]: TranslationLeaf | TranslationTree
}

/**
 * Partial down the tree, but never partial inside a leaf. A half-supplied
 * function is not a translation.
 */
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends TranslationLeaf
    ? T[K]
    : T[K] extends TranslationTree
      ? DeepPartial<T[K]>
      : never
}

/**
 * A locale that is fetched rather than bundled.
 *
 * The thunk is the caller's, never ours: Vite turns `() => import('./es')` into
 * a chunk and Metro into an async require, and a library that called `import()`
 * on a path it built itself would defeat both. Resolving to `{ default }` is
 * supported so a locale file can `export default`; a top-level group may
 * therefore not be named `default`.
 */
export type LocaleLoader<T extends TranslationTree> = () => Promise<
  T | { readonly default: T }
>

export type LocaleSource<T extends TranslationTree> =
  | T
  | DeepPartial<T>
  | LocaleLoader<T>

/**
 * The keys of `L` whose value is bundled rather than fetched.
 *
 * `base` is drawn from this set. A fetched base would leave the first frame
 * with nothing to render and no earlier locale to fall back to, so the type
 * refuses it instead of the Provider discovering it at runtime.
 */
export type EagerKeys<L> = {
  [K in keyof L]: L[K] extends (...args: never[]) => unknown ? never : K
}[keyof L]
