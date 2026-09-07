/**
 * Every string a turystack UI package renders on its own.
 *
 * The contract lives here, in the platform-agnostic package, rather than in
 * `react-web`. Both `react-web` and `react-mobile` render the same components
 * and therefore need the same words, and a mobile app should not have to
 * install a web package to type a label. Whoever owns the words owns the type.
 *
 * A primitive that hardcodes a word decides the product's language for the app
 * consuming it, and the app has no way to argue. The defaults are English
 * because the rest of the API is; an app wanting other words passes them once,
 * at the root, instead of per instance.
 */
export type UiLabels = {
  booleanText: {
    active: string
    disabled: string
    enabled: string
    inactive: string
    no: string
    yes: string
  }
  breadcrumb: {
    /** Names the ellipsis standing in for the crumbs that were folded away. */
    more: string
  }
  bulkActions: {
    /** Names the control that empties the selection. */
    clear: string
    /** Names the menu holding the actions that did not fit. */
    more: string
    /** How many items the actions are about to run on. */
    selected: (count: number) => string
  }
  carousel: {
    /** Names the control that moves to the next slide. */
    next: string
    /** Names the control that moves to the previous slide. */
    previous: string
    /** Names a slide and its dot — `(index, total)` are 1-based. */
    slide: (index: number, total: number) => string
  }
  colorPicker: {
    selectColor: string
    transparent: string
  }
  common: {
    apply: string
    cancel: string
    clear: string
    close: string
    /** Announced by the copy control once the value is on the clipboard. */
    copied: string
    /** Names the copy control, which is an icon and has no text of its own. */
    copy: string
    /** Reads back a range with no upper bound — `From R$ 10,00`. */
    from: (value: string) => string
    optional: string
    /** Names the control that runs a failed read again. */
    retry: string
    /** Reads back a range with no lower bound — `Up to R$ 50,00`. */
    upTo: (value: string) => string
  }
  confirm: {
    /** Why the confirm button is blocked while the statement is unticked. */
    acknowledgeBlocked: string
    cancel: string
    confirm: string
    /** Shown when a rejected confirm carries no message of its own. */
    error: string
    /** Why the confirm button is blocked while the code is incomplete. */
    otpBlocked: string
    otpLabel: string
    /** Why the confirm button is blocked while the password is empty. */
    passwordBlocked: string
    passwordLabel: string
    /** What the empty password field says. */
    passwordPlaceholder: string
    /** Why the confirm button is blocked while the text does not match. */
    typedBlocked: (value: string) => string
    /** Names the field — `(value)` is the text the user has to reproduce. */
    typedLabel: (value: string) => string
  }
  currencyInput: {
    maximum: string
    minimum: string
    rangePlaceholder: string
  }
  dateRangeInput: {
    custom: string
    last30Days: string
    last7Days: string
    lastMonth: string
    thisMonth: string
    today: string
    yesterday: string
  }
  dateText: {
    today: string
    tomorrow: string
    yesterday: string
  }
  documentText: {
    cnpj: string
    cpf: string
    /** Names the control that hides a document number again. */
    hide: string
    /** Names the control that shows a masked document number. */
    reveal: string
  }
  durationText: {
    day: string
    /** Symbol form used by the short variant — `2d 4h`. */
    dayShort: string
    days: string
    hour: string
    hourShort: string
    hours: string
    minute: string
    minuteShort: string
    minutes: string
    second: string
    secondShort: string
    seconds: string
  }
  filePicker: {
    /** Names the file types the picker takes — `(accept)` is the accept list. */
    accepted: (accept: string) => string
    /** The invitation inside the drop zone. */
    hint: string
  }
  editableText: {
    /** Names the control that opens the editor, which may be an icon alone. */
    edit: string
    /** Stands in for a value that is not set yet. */
    empty: string
    /** Shown when a save was rejected without a message of its own. */
    error: string
    save: string
  }
  list: {
    empty: string
    error: string
    loadMore: string
  }
  loader: {
    /** Names the spinner for assistive technology, which cannot see it spin. */
    loading: string
  }
  phoneText: {
    /** Names the control that dials the number. */
    call: string
    /** Names the control that opens the number in WhatsApp. */
    whatsapp: string
  }
  pagination: {
    /** Summarises the visible slice — `(from, to)` are 1-based row numbers. */
    range: (from: number, to: number, total: number) => string
    rowsPerPage: string
  }
  search: {
    /** Names the button that opens the panel holding every filter. */
    filters: string
    /** Names the control that folds the extra filters away again. */
    less: string
    /** Names the control that reveals the filters that did not fit on the row. */
    more: string
    /** Prompt in the empty search field. */
    placeholder: string
    /** Names the control that resets every filter at once. */
    reset: string
  }
  select: {
    /** What the dropdown says when the options could not be loaded. */
    error: string
    /** Offers the typed query as a new option — `(query)` is what was typed. */
    create: (query: string) => string
  }
  stepper: {
    completed: string
    finish: string
    next: string
    previous: string
    /** Announced by the live region — `(active, total)` are 1-based. */
    step: (active: number, total: number) => string
  }
  table: {
    empty: string
    /** What the table says when the rows could not be loaded. */
    error: string
  }
  transfer: {
    /** Ticks or clears every column at once. */
    allColumns: string
    /** Why a required column cannot be turned off. */
    alwaysIncluded: string
    /** Empties every filter back to nothing. */
    clearFilters: string
    columns: string
    /** How many columns are going out — `(chosen, total)`. */
    columnsChosen: (chosen: number, total: number) => string
    /** Offers the rows the import refused, with the reason on each. */
    downloadErrors: string
    /** Offers the empty file with the right headers. */
    downloadTemplate: string
    export: string
    /** What the export surface says under its title — `(entity)` is the noun. */
    exportDescription: (entity: string) => string
    /** Titles the export surface — `(entity)` is what is leaving. */
    exportTitle: (entity: string) => string
    /** Names the column in the file that feeds a field. */
    fileColumn: string
    filters: string
    format: string
    /** The choice that leaves a field unfilled. */
    ignore: string
    import: string
    importDescription: (entity: string) => string
    importTitle: (entity: string) => string
    /** Reads back what the import did — `(created, failed)`. */
    imported: (created: number, failed: number) => string
    /** Why the mapping cannot be finished — `(label)` is the field's. */
    mappingRequired: (label: string) => string
    /** Names the file the reader chose, with its size. */
    fileChosen: (name: string) => string
    /** How many rows are ready to go in, against how many the file held. */
    rowsReady: (ready: number, total: number) => string
    /** Reads back the file — `(rows)` is how many it holds. */
    rowsFound: (rows: number) => string
    /** Refuses a file with more rows than the screen was given — `(max)`. */
    rowsTooMany: (max: number) => string
    /** Reads back a refused row count. */
    rowsRefused: (rows: number) => string
    stepDone: string
    stepFile: string
    stepMap: string
    stepReview: string
  }
  unsaved: {
    cancel: string
    confirm: string
    description: string
    title: string
  }
}

/** Partial one group at a time: override a string, keep its neighbours. */
export type PartialUiLabels = {
  [Group in keyof UiLabels]?: Partial<UiLabels[Group]>
}
