import { describe, it } from 'vitest'

import { uiLabelsEn } from '../ui-labels/ui-labels.en.js'
import { I18nProvider } from './i18n-provider.js'

/**
 * These assertions run in `tsc`, not in vitest: every `@ts-expect-error`
 * below fails `pnpm typecheck` if the error it names stops happening. The
 * type arguments stand in for the `Locale` an app registers in use-intl's
 * `AppConfig`, which is what `L` defaults to.
 */
describe('the labels contract', () => {
  it('needs no labels when every locale is a shipped language', () => {
    ;<I18nProvider<'en' | 'pt-br' | 'es'> />
    ;<I18nProvider<'en-US' | 'pt-BR' | 'pt_PT' | 'es-MX'> />
  })

  it('demands labels for a locale whose language is not shipped', () => {
    // @ts-expect-error — `de` is outside the shipped languages
    ;<I18nProvider<'en' | 'de'> />
  })

  it('accepts that locale once its labels are supplied', () => {
    ;<I18nProvider<'en' | 'de'> labels={{ de: uiLabelsEn }} />
  })

  it('refuses labels keyed by a locale the app does not have', () => {
    ;<I18nProvider<'en' | 'de'>
      // @ts-expect-error — `fr` is not one of the app's locales
      labels={{ de: uiLabelsEn, fr: uiLabelsEn }}
    />
  })

  it('cannot check a plain string, so it asks for nothing', () => {
    ;<I18nProvider />
    ;<I18nProvider<string> labels={{ fr: uiLabelsEn }} />
  })
})
