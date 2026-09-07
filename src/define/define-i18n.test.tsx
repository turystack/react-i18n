import { render, screen, waitFor } from '@testing-library/react'
import { act } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { defineUiLabels } from '../ui-labels/define-ui-labels.js'
import { uiLabels } from '../ui-labels/index.js'
import { defineI18n } from './define-i18n.js'
import { defineLocale, definePartialLocale } from './define-locale.js'
import { defineTranslations } from './define-translations.js'

const en = defineTranslations({
  cart: {
    empty: 'Your cart is empty',
    items: (count: number) => `${count} items`,
  },
  common: { save: 'Save' },
})

type App = typeof en

const ptBr = defineLocale<App>({
  cart: {
    empty: 'Seu carrinho está vazio',
    items: (count) => `${count} itens`,
  },
  common: { save: 'Salvar' },
})

/** Only `common.save` is translated; `cart` has to read through to base. */
const es = definePartialLocale<App>({ common: { save: 'Guardar' } })

describe('defineI18n', () => {
  function setup(locales: Record<string, unknown> = { en, es, 'pt-br': ptBr }) {
    // biome-ignore lint/suspicious/noExplicitAny: the tests vary the locale map
    return defineI18n({ base: 'en', locales } as any)
  }

  it('serves the base locale with no provider configuration', () => {
    const { I18nProvider, useTranslations } = setup()

    function Screen() {
      const t = useTranslations() as App
      return <span>{t.common.save}</span>
    }

    render(
      <I18nProvider>
        <Screen />
      </I18nProvider>,
    )

    expect(screen.getByText('Save')).toBeDefined()
  })

  it('interpolates through the function, with the argument it was given', () => {
    const { I18nProvider, useTranslations } = setup()

    function Screen() {
      const t = useTranslations() as App
      return <span>{t.cart.items(3)}</span>
    }

    render(
      <I18nProvider defaultLocale="pt-br">
        <Screen />
      </I18nProvider>,
    )

    expect(screen.getByText('3 itens')).toBeDefined()
  })

  it('reads a partial locale through to base for what it left out', () => {
    const { I18nProvider, useTranslations } = setup()

    function Screen() {
      const t = useTranslations() as App
      return (
        <>
          <span>{t.common.save}</span>
          <span>{t.cart.empty}</span>
        </>
      )
    }

    render(
      <I18nProvider defaultLocale="es">
        <Screen />
      </I18nProvider>,
    )

    expect(screen.getByText('Guardar')).toBeDefined()
    expect(screen.getByText('Your cart is empty')).toBeDefined()
  })

  it('switches locale and moves every string at once', async () => {
    const { I18nProvider, useI18n } = setup()

    function Screen() {
      const { locale, setLocale, t } = useI18n()
      return (
        <button onClick={() => setLocale('pt-br')} type="button">
          {locale} · {(t as App).common.save}
        </button>
      )
    }

    render(
      <I18nProvider>
        <Screen />
      </I18nProvider>,
    )

    expect(screen.getByRole('button').textContent).toBe('en · Save')
    act(() => screen.getByRole('button').click())
    expect(screen.getByRole('button').textContent).toBe('pt-br · Salvar')
  })

  it('leaves the locale alone when controlled, and reports the request', () => {
    const onLocaleChange = vi.fn()
    const { I18nProvider, useI18n } = setup()

    function Screen() {
      const { locale, setLocale } = useI18n()
      return (
        <button onClick={() => setLocale('pt-br')} type="button">
          {locale}
        </button>
      )
    }

    render(
      <I18nProvider locale="en" onLocaleChange={onLocaleChange}>
        <Screen />
      </I18nProvider>,
    )

    act(() => screen.getByRole('button').click())

    // The app owns the state; the Provider must not have moved on its own.
    expect(screen.getByRole('button').textContent).toBe('en')
    expect(onLocaleChange).toHaveBeenCalledWith('pt-br')
  })

  it('lists the locales it was given', () => {
    const { I18nProvider, useLocale } = setup()

    function Screen() {
      return <span>{useLocale().locales.join(',')}</span>
    }

    render(
      <I18nProvider>
        <Screen />
      </I18nProvider>,
    )

    expect(screen.getByText('en,es,pt-br')).toBeDefined()
  })

  it('throws when a hook is used outside its own provider', () => {
    const { useI18n } = setup()

    function Orphan() {
      useI18n()
      return null
    }

    const noise = vi.spyOn(console, 'error').mockImplementation(() => {})
    expect(() => render(<Orphan />)).toThrow(/inside the I18nProvider/)
    noise.mockRestore()
  })
})

describe('fetched locales', () => {
  it('serves base while in flight, then the fetched words', async () => {
    const { I18nProvider, useI18n } = defineI18n({
      base: 'en',
      locales: { en, 'pt-br': () => Promise.resolve(ptBr) },
    })

    function Screen() {
      const { loading, t } = useI18n()
      return <span>{loading ? 'loading' : t.common.save}</span>
    }

    render(
      <I18nProvider defaultLocale="pt-br">
        <Screen />
      </I18nProvider>,
    )

    expect(screen.getByText('loading')).toBeDefined()
    await waitFor(() => expect(screen.getByText('Salvar')).toBeDefined())
  })

  it('unwraps a locale that arrived as a default export', async () => {
    const { I18nProvider, useTranslations } = defineI18n({
      base: 'en',
      locales: { en, 'pt-br': () => Promise.resolve({ default: ptBr }) },
    })

    function Screen() {
      return <span>{useTranslations().common.save}</span>
    }

    render(
      <I18nProvider defaultLocale="pt-br">
        <Screen />
      </I18nProvider>,
    )

    await waitFor(() => expect(screen.getByText('Salvar')).toBeDefined())
  })

  it('fetches a locale once and reuses it on the way back', async () => {
    const loader = vi.fn(() => Promise.resolve(ptBr))
    const { I18nProvider, useI18n } = defineI18n({
      base: 'en',
      locales: { en, 'pt-br': loader },
    })

    function Screen() {
      const { locale, setLocale, t } = useI18n()
      return (
        <button
          onClick={() => setLocale(locale === 'en' ? 'pt-br' : 'en')}
          type="button"
        >
          {t.common.save}
        </button>
      )
    }

    render(
      <I18nProvider>
        <Screen />
      </I18nProvider>,
    )

    act(() => screen.getByRole('button').click())
    await waitFor(() => expect(screen.getByText('Salvar')).toBeDefined())
    act(() => screen.getByRole('button').click())
    await waitFor(() => expect(screen.getByText('Save')).toBeDefined())
    act(() => screen.getByRole('button').click())
    await waitFor(() => expect(screen.getByText('Salvar')).toBeDefined())

    expect(loader).toHaveBeenCalledTimes(1)
  })
})

describe('useUiLabels', () => {
  it('follows the active locale into the shipped translation', () => {
    const { I18nProvider, useI18n, useUiLabels } = defineI18n({
      base: 'en',
      locales: { en, 'pt-br': ptBr },
    })

    function Screen() {
      const { locale, setLocale } = useI18n()
      const labels = useUiLabels()
      return (
        <button onClick={() => setLocale('pt-br')} type="button">
          {locale} · {labels.table.empty}
        </button>
      )
    }

    render(
      <I18nProvider>
        <Screen />
      </I18nProvider>,
    )

    expect(screen.getByRole('button').textContent).toBe(
      `en · ${uiLabels.en.table.empty}`,
    )
    act(() => screen.getByRole('button').click())
    expect(screen.getByRole('button').textContent).toBe(
      `pt-br · ${uiLabels['pt-br'].table.empty}`,
    )
  })

  it('prefers what the app supplied over what the package ships', () => {
    const { I18nProvider, useUiLabels } = defineI18n({
      base: 'en',
      locales: { en, 'pt-br': ptBr },
      ui: {
        'pt-br': defineUiLabels(uiLabels['pt-br'], {
          editableText: { save: 'Gravar' },
        }),
      },
    })

    function Screen() {
      const labels = useUiLabels()
      return (
        <span>{`${labels.editableText.save} · ${labels.editableText.edit}`}</span>
      )
    }

    render(
      <I18nProvider defaultLocale="pt-br">
        <Screen />
      </I18nProvider>,
    )

    // The override lands, and its neighbours in the same group survive it.
    expect(screen.getByText('Gravar · Editar')).toBeDefined()
  })
})
