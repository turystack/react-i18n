import { render, screen } from '@testing-library/react'
import type { ReactNode } from 'react'
import { IntlProvider } from 'use-intl'
import { describe, expect, it, vi } from 'vitest'

import { defineUiLabels } from '../ui-labels/define-ui-labels.js'
import { uiLabels } from '../ui-labels/ui-labels.shipped.js'
import { I18nProvider, useUiLabels } from './i18n-provider.js'

function WithLocale({
  children,
  locale,
}: {
  children: ReactNode
  locale: string
}) {
  return (
    <IntlProvider locale={locale} messages={{}}>
      {children}
    </IntlProvider>
  )
}

function Screen() {
  return <span>{useUiLabels().table.empty}</span>
}

describe('I18nProvider', () => {
  it('serves the shipped labels of the locale IntlProvider holds', () => {
    render(
      <WithLocale locale="pt-br">
        <I18nProvider>
          <Screen />
        </I18nProvider>
      </WithLocale>,
    )

    expect(screen.getByText(uiLabels['pt-br'].table.empty)).toBeDefined()
  })

  it.each([
    ['pt-BR', 'pt-br'],
    ['pt-PT', 'pt-br'],
    ['es-MX', 'es'],
    ['en-GB', 'en'],
  ] as const)('serves %s the labels of %s', (locale, shipped) => {
    render(
      <WithLocale locale={locale}>
        <I18nProvider>
          <Screen />
        </I18nProvider>
      </WithLocale>,
    )

    expect(screen.getByText(uiLabels[shipped].table.empty)).toBeDefined()
  })

  it('prefers what the app supplied, keeping the neighbours', () => {
    function Save() {
      const labels = useUiLabels()
      return (
        <span>{`${labels.editableText.save} · ${labels.editableText.edit}`}</span>
      )
    }

    render(
      <WithLocale locale="pt-br">
        <I18nProvider
          labels={{
            'pt-br': defineUiLabels(uiLabels['pt-br'], {
              editableText: { save: 'Gravar' },
            }),
          }}
        >
          <Save />
        </I18nProvider>
      </WithLocale>,
    )

    expect(screen.getByText('Gravar · Editar')).toBeDefined()
  })

  it('serves the labels the app supplied for a locale it does not ship', () => {
    render(
      <WithLocale locale="de">
        <I18nProvider
          labels={{
            de: defineUiLabels(uiLabels.en, {
              table: { empty: 'Keine Daten' },
            }),
          }}
        >
          <Screen />
        </I18nProvider>
      </WithLocale>,
    )

    expect(screen.getByText('Keine Daten')).toBeDefined()
  })

  it('useUiLabels throws outside the Provider', () => {
    const noise = vi.spyOn(console, 'error').mockImplementation(() => {})
    expect(() => render(<Screen />)).toThrow(
      'useUiLabels must be used inside an I18nProvider',
    )
    noise.mockRestore()
  })

  it('throws outside IntlProvider, which owns the locale', () => {
    const noise = vi.spyOn(console, 'error').mockImplementation(() => {})
    expect(() =>
      render(
        <I18nProvider>
          <Screen />
        </I18nProvider>,
      ),
    ).toThrow('No intl context found')
    noise.mockRestore()
  })
})
