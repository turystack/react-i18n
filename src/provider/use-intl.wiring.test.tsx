import { act, render, screen } from '@testing-library/react'
import { type ReactNode, useState } from 'react'
import { IntlProvider, useLocale, useTranslations } from 'use-intl'
import { describe, expect, it } from 'vitest'

import { uiLabels } from '../ui-labels/ui-labels.shipped.js'
import { I18nProvider, useUiLabels } from './i18n-provider.js'

/**
 * The recommended app wiring, against use-intl's real `IntlProvider`. The
 * messages are inline here; in an app they come from `src/i18n/<locale>`
 * through a loader, and the switch awaits it before setting state.
 */
const messages = {
  en: { cart: { empty: 'Your cart is empty' } },
  'pt-br': { cart: { empty: 'Seu carrinho está vazio' } },
}

type Locale = keyof typeof messages

/** IntlProvider is controlled: the app's state is the one locale owner. */
function App({ children }: { children: (switchTo: () => void) => ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <I18nProvider>
        {children(() => setLocale(locale === 'en' ? 'pt-br' : 'en'))}
      </I18nProvider>
    </IntlProvider>
  )
}

function Screen({ onSwitch }: { onSwitch: () => void }) {
  const t = useTranslations('cart')
  const labels = useUiLabels()

  return (
    <button onClick={onSwitch} type="button">
      {`${useLocale()} · ${t('empty')} · ${labels.table.empty}`}
    </button>
  )
}

describe('wiring with a controlled IntlProvider', () => {
  it('runs use-intl hooks inside the Provider on one React copy', () => {
    render(<App>{(switchTo) => <Screen onSwitch={switchTo} />}</App>)

    expect(screen.getByRole('button').textContent).toBe(
      `en · Your cart is empty · ${uiLabels.en.table.empty}`,
    )
  })

  it('moves the app copy and the UI labels with one locale change', () => {
    render(<App>{(switchTo) => <Screen onSwitch={switchTo} />}</App>)

    const button = screen.getByRole('button')

    act(() => button.click())

    expect(button.textContent).toBe(
      `pt-br · Seu carrinho está vazio · ${uiLabels['pt-br'].table.empty}`,
    )

    act(() => button.click())

    expect(button.textContent).toBe(
      `en · Your cart is empty · ${uiLabels.en.table.empty}`,
    )
  })

  it('follows a new locale prop, since it holds no state of its own', () => {
    function Shell({ locale }: { locale: Locale }) {
      return (
        <IntlProvider locale={locale} messages={messages[locale]}>
          <I18nProvider>
            <Screen onSwitch={() => {}} />
          </I18nProvider>
        </IntlProvider>
      )
    }

    const { rerender } = render(<Shell locale="en" />)
    rerender(<Shell locale="pt-br" />)

    expect(screen.getByRole('button').textContent).toBe(
      `pt-br · Seu carrinho está vazio · ${uiLabels['pt-br'].table.empty}`,
    )
  })
})
