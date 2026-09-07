import { describe, it } from 'vitest'

import { uiLabels, uiLabelsEn } from '../ui-labels/index.js'
import { defineI18n } from './define-i18n.js'
import { defineLocale, definePartialLocale } from './define-locale.js'
import { defineTranslations } from './define-translations.js'

const en = defineTranslations({
  cart: {
    empty: 'Your cart is empty',
    items: (count: number) => `${count} items`,
  },
  common: {
    save: 'Save',
  },
})

type App = typeof en

/**
 * These assertions run in `tsc`, not in vitest. The bodies are almost empty on
 * purpose: what is being tested is whether the file compiles, and every
 * `@ts-expect-error` below fails the build if the error it names stops
 * happening. `pnpm typecheck` is the assertion runner.
 */
describe('the type contract', () => {
  it('accepts a complete locale', () => {
    defineLocale<App>({
      cart: {
        empty: 'Seu carrinho está vazio',
        // The parameter is inherited — no annotation, and it is still a number.
        items: (count) => `${count} itens`,
      },
      common: { save: 'Salvar' },
    })
  })

  it('refuses a locale with a key missing', () => {
    // @ts-expect-error — `common` is absent, and the whole object is refused
    defineLocale<App>({
      cart: { empty: 'x', items: (count) => `${count}` },
    })
  })

  it('refuses a key the base never had', () => {
    defineLocale<App>({
      cart: { empty: 'x', items: (count) => `${count}` },
      // @ts-expect-error — `discard` is not in the base
      common: { discard: 'Descartar', save: 'Salvar' },
    })
  })

  it('inherits the parameter type, so a locale never re-annotates it', () => {
    defineLocale<App>({
      cart: {
        empty: 'Seu carrinho está vazio',
        // `count` carries `number` down from the base. Proof that it is not
        // silently `any`: calling a string method on it does not compile.
        // @ts-expect-error — Property 'toUpperCase' does not exist on 'number'
        items: (count) => count.toUpperCase(),
      },
      common: { save: 'Salvar' },
    })
  })

  it('refuses a locale that re-annotates the parameter wrongly', () => {
    defineLocale<App>({
      cart: {
        empty: 'Seu carrinho está vazio',
        // @ts-expect-error — the base declared `count: number`
        items: (count: string) => `${count} itens`,
      },
      common: { save: 'Salvar' },
    })
  })

  it('lets a partial locale leave keys out', () => {
    definePartialLocale<App>({ common: { save: 'Salvar' } })
  })

  it('refuses an invented key even on a partial locale', () => {
    // @ts-expect-error — partial in depth, never in vocabulary
    definePartialLocale<App>({ common: { discard: 'Descartar' } })
  })

  it('refuses a base that has to be fetched', () => {
    defineI18n({
      // @ts-expect-error — a fetched base leaves the first frame with nothing
      base: 'es',
      locales: { en, es: () => Promise.resolve(en) },
    })
  })

  it('demands ui labels for a locale it ships no words for', () => {
    // @ts-expect-error — `de` is outside the shipped set, so `ui` is required
    defineI18n({
      base: 'en',
      locales: { de: definePartialLocale<App>({}), en },
    })
  })

  it('accepts that same locale once its ui labels are supplied', () => {
    defineI18n({
      base: 'en',
      locales: { de: definePartialLocale<App>({}), en },
      ui: { de: uiLabelsEn, en: uiLabels.en },
    })
  })

  it('needs no ui at all when every locale is one it ships', () => {
    defineI18n({
      base: 'en',
      locales: { en, 'pt-br': definePartialLocale<App>({}) },
    })
  })
})
