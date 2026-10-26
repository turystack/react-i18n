# @turystack/react-i18n

The UI labels of `@turystack/react-web` — the words its components render on
their own — in `en`, `pt-br` and `es`, and the Provider that serves them in the
app's locale.

The app's own copy is not here: it comes from use-intl, and this package
follows the locale use-intl's `IntlProvider` holds.

```bash
pnpm add @turystack/react-i18n @turystack/i18n use-intl
```

## Wiring

`IntlProvider` owns the locale. `I18nProvider` reads it with use-intl's
`useLocale()`, so it takes no `locale` prop and must sit inside `IntlProvider`.

```tsx
import { I18nProvider, useUiLabels } from '@turystack/react-i18n'
import { TuryProvider } from '@turystack/react-web'
import { IntlProvider } from 'use-intl'

export function Ui({ locale, messages, timeZone, children }: UiProps) {
  return (
    <IntlProvider locale={locale} messages={messages} timeZone={timeZone}>
      <I18nProvider>
        <Labels>{children}</Labels>
      </I18nProvider>
    </IntlProvider>
  )
}

function Labels({ children }: { children: React.ReactNode }) {
  return <TuryProvider labels={useUiLabels()}>{children}</TuryProvider>
}
```

`IntlProvider` is controlled: switching is the app's own state. Load the next
locale's messages, then set both; the copy and the labels move together.

```ts
const next = await loadMessages('pt-br')
setIntl({ locale: 'pt-br', messages: next })
```

## Labels

A region resolves to its language: `pt-BR` and `pt-PT` get `pt-br`, `es-MX`
gets `es`. A locale whose language is not shipped makes `labels` required, so
its readers are never served English silently. The check reads the `Locale`
the app registers in use-intl's `AppConfig` (`declare module 'use-intl/core'`);
without it the locale is a plain `string` and nothing is required.

```tsx
// Module scope: an inline object is a new set on every render.
const labels = {
  'pt-br': defineUiLabels(uiLabels['pt-br'], {
    editableText: { save: 'Gravar' }, // neighbours in the group survive
  }),
}

<I18nProvider labels={labels} />
```

For the active locale itself, use use-intl's `useLocale()`.

## Platform

Nothing here needs the DOM, so `src/` is built with `lib: ["ES2022"]` and no
DOM types: a stray `window` or `localStorage` fails `pnpm build` instead of
breaking a test or a server render that imports the package.
