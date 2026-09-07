import type { UiLabels } from './ui-labels.types.js'

/**
 * English, and the fallback for every other locale.
 *
 * Moved here from `react-web` so the words and the type that describes them
 * stay in one package. `react-web` and `react-mobile` import these as their
 * built-in defaults, which is what lets a component render real text with no
 * provider above it.
 */
export const uiLabelsEn: UiLabels = {
  booleanText: {
    active: 'Active',
    disabled: 'Disabled',
    enabled: 'Enabled',
    inactive: 'Inactive',
    no: 'No',
    yes: 'Yes',
  },
  breadcrumb: {
    more: 'More',
  },
  bulkActions: {
    clear: 'Clear selection',
    more: 'More actions',
    selected: (count) => `${count} selected`,
  },
  carousel: {
    next: 'Next slide',
    previous: 'Previous slide',
    slide: (index, total) => `Slide ${index} of ${total}`,
  },
  colorPicker: {
    selectColor: 'Select colour',
    transparent: 'Transparent',
  },
  common: {
    apply: 'Apply',
    cancel: 'Cancel',
    clear: 'Clear',
    close: 'Close',
    copied: 'Copied',
    copy: 'Copy',
    from: (value) => `From ${value}`,
    optional: '(optional)',
    retry: 'Try again',
    upTo: (value) => `Up to ${value}`,
  },
  confirm: {
    acknowledgeBlocked: 'Tick the statement above to continue.',
    cancel: 'Cancel',
    confirm: 'Confirm',
    error: 'That did not work. Try again.',
    otpBlocked: 'Enter the whole code to continue.',
    otpLabel: 'One-time code',
    passwordBlocked: 'Enter your password to continue.',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Your password',
    typedBlocked: (value) => `Type ${value} exactly to continue.`,
    typedLabel: (value) => `Type ${value} to confirm`,
  },
  currencyInput: {
    maximum: 'Maximum value',
    minimum: 'Minimum value',
    rangePlaceholder: 'Filter by value',
  },
  dateRangeInput: {
    custom: 'Custom',
    last30Days: 'Last 30 days',
    last7Days: 'Last 7 days',
    lastMonth: 'Last month',
    thisMonth: 'This month',
    today: 'Today',
    yesterday: 'Yesterday',
  },
  dateText: {
    today: 'Today',
    tomorrow: 'Tomorrow',
    yesterday: 'Yesterday',
  },
  documentText: {
    cnpj: 'CNPJ',
    cpf: 'CPF',
    hide: 'Hide document number',
    reveal: 'Show document number',
  },
  durationText: {
    day: 'day',
    dayShort: 'd',
    days: 'days',
    hour: 'hour',
    hourShort: 'h',
    hours: 'hours',
    minute: 'minute',
    minuteShort: 'min',
    minutes: 'minutes',
    second: 'second',
    secondShort: 's',
    seconds: 'seconds',
  },
  filePicker: {
    accepted: (accept) => `Accepted: ${accept}`,
    hint: 'Drag & drop files here, or click to select',
  },
  editableText: {
    edit: 'Edit',
    empty: 'Empty',
    error: 'That did not work. Try again.',
    save: 'Save',
  },
  list: {
    empty: 'No data found',
    error: 'The data could not be loaded',
    loadMore: 'Load more',
  },
  loader: {
    loading: 'Loading',
  },
  phoneText: {
    call: 'Call',
    whatsapp: 'Open in WhatsApp',
  },
  pagination: {
    range: (from, to, total) => `${from}-${to} of ${total}`,
    rowsPerPage: 'Rows per page',
  },
  search: {
    filters: 'Filters',
    less: 'Show less',
    more: 'Show more',
    placeholder: 'Search',
    reset: 'Reset',
  },
  select: {
    create: (query) => `Create "${query}"`,
    error: 'The options could not be loaded',
  },
  stepper: {
    completed: 'Completed',
    finish: 'Finish',
    next: 'Next',
    previous: 'Back',
    step: (active, total) => `Step ${active} of ${total}`,
  },
  table: {
    empty: 'No records found',
    error: 'The records could not be loaded',
  },
  transfer: {
    allColumns: 'All columns',
    alwaysIncluded: 'Always included',
    clearFilters: 'Clear filters',
    columns: 'Columns',
    columnsChosen: (chosen, total) => `${chosen} of ${total}`,
    downloadErrors: 'Download the rows that failed',
    downloadTemplate: 'Download the template',
    export: 'Export',
    exportDescription: (entity) =>
      `Choose which ${entity} leave, and in which shape.`,
    exportTitle: (entity) => `Export ${entity}`,
    fileChosen: (name) => `${name} selected`,
    fileColumn: 'Column in your file',
    filters: 'Filters',
    format: 'Format',
    ignore: 'Do not import',
    import: 'Import',
    importDescription: (entity) => `Bring ${entity} in from a file.`,
    importTitle: (entity) => `Import ${entity}`,
    imported: (created, failed) =>
      failed > 0
        ? `${created} imported, ${failed} refused`
        : `${created} imported`,
    mappingRequired: (label) => `${label} needs a column`,
    rowsFound: (rows) => `${rows} rows found`,
    rowsReady: (ready, total) => `${ready} of ${total} rows ready`,
    rowsRefused: (rows) => `${rows} refused`,
    rowsTooMany: (max) => `That file holds more than ${max} rows`,
    stepDone: 'Result',
    stepFile: 'File',
    stepMap: 'Columns',
    stepReview: 'Check',
  },
  unsaved: {
    cancel: 'Keep editing',
    confirm: 'Leave without saving',
    description: 'You have unsaved changes. Leaving now will discard them.',
    title: 'Leave without saving?',
  },
}
