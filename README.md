# @turystack/react-i18n

Typed translations for React, on any platform. A Provider, hooks, and `define*`
helpers — no DOM, no runtime parser, no codegen step.

```bash
pnpm add @turystack/react-i18n
```

## The base dictionary

Its shape becomes the contract every other locale is checked against.

```ts
export const en = defineTranslations({
  cart: {
    empty: 'Your cart is empty',
    items: (count: number) => `${count} items`,
  },
  common: { save: 'Save' },
})

export type AppTranslations = typeof en
```

Interpolation is a function call, not a `{name}` placeholder: the compiler
checks arity and argument types, and nothing is parsed at runtime. Annotate the
parameters **here only** — every other locale inherits them.

## The other locales

```ts
export const ptBR = defineLocale<AppTranslations>({
  cart: {
    empty: 'Seu carrinho está vazio',
    items: (count) => `${count} itens`, // `count` is already number
  },
  common: { save: 'Salvar' },
})

// Still being translated. What is missing reads through to base.
export const es = definePartialLocale<AppTranslations>({
  common: { save: 'Guardar' },
})
```

A missing key, an invented key, or a wrong parameter type fails at the locale
file, not three imports away.

## Wiring

```ts
export const { I18nProvider, useI18n, useTranslations, useLocale, useUiLabels } =
  defineI18n({
    base: 'en',
    locales: {
      en,                                 // bundled — the base must be
      'pt-br': ptBR,                      // bundled
      es: () => import('./es'),           // fetched on first use
    },
  })
```

The hooks come back already typed by the locales you passed. Nothing to
`declare module`, and two apps in one process never share state.

```tsx
const { t, locale, locales, setLocale, loading } = useI18n()

t.cart.items(3)
```

While a fetched locale is in flight, `t` serves the base and `loading` is true.

## Persistence

The package writes to no storage. `localStorage` does not exist under React
Native and `AsyncStorage` is a promise; swallowing that difference would mean a
hydration state only one platform can enter.

```tsx
// controlled — your router or store owns the locale
<I18nProvider locale={locale} onLocaleChange={setLocale} />

// uncontrolled — you read storage once, before mount
<I18nProvider defaultLocale={stored ?? 'en'} onLocaleChange={persist} />
```

## UI labels

The strings `@turystack/react-web` and `@turystack/react-mobile` render on their
own live here, translated, on a channel of their own — never mixed into your
`t`.

```tsx
<TuryProvider labels={useUiLabels()} />
```

`en`, `pt-br` and `es` ship translated. Declare a locale outside that set and
the type asks you for its labels rather than quietly serving English.

```ts
defineI18n({
  base: 'en',
  locales: { en, 'pt-br': ptBR },
  ui: {
    'pt-br': defineUiLabels(uiLabels['pt-br'], {
      editableText: { save: 'Gravar' },   // neighbours in the group survive
    }),
  },
})
```

## Platform

`src/` is compiled with `lib: ["ES2022"]` and no DOM, so `pnpm build` fails on a
stray `window` or `localStorage` rather than a React Native app discovering it
at runtime.
