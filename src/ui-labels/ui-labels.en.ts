import type { UiLabels } from './ui-labels.types.js'

/** Why a row failed, by the codes the worker and `rowFromSchema` write. */
const ROW_ERRORS_EN = new Map<string, string>([
  ['required', 'Required'],
  ['invalid', 'Not valid'],
  ['invalid_type', 'Wrong type of value'],
  ['invalid_value', 'Not one of the accepted values'],
  ['invalid_format', 'Wrong format'],
  ['invalid_email', 'Not a valid email'],
  ['invalid_url', 'Not a valid URL'],
  ['invalid_uuid', 'Not a valid ID'],
  ['too_small', 'Too short or too small'],
  ['too_big', 'Too long or too large'],
  ['column_count_mismatch', 'The row has the wrong number of columns'],
  ['invalid_encoding', 'Characters the file’s encoding cannot read'],
  ['invalid_json', 'Not valid JSON'],
  ['invalid_row', 'Not an object'],
  ['row_too_large', 'The row is too large'],
  ['invalid_date', 'Not a valid date'],
  ['invalid_datetime', 'Not a valid date and time'],
  ['not_multiple_of', 'Not an allowed step'],
  ['invalid_union', 'Does not match any accepted shape'],
])

/**
 * English, and the fallback for every other locale.
 *
 * Moved here from `react-web` so the words and the type that describes them
 * stay in one package. `react-web` imports these as its
 * built-in defaults, which is what lets a component render real text with no
 * provider above it.
 */
export const uiLabelsEn: UiLabels = {
  anchorNav: {
    label: 'On this page',
  },
  board: {
    add: 'Add',
    cancelled: 'Move cancelled. The card is back where it started.',
    dropped: (column, position, total) =>
      `Dropped in ${column}, position ${position} of ${total}.`,
    instructions:
      'Press Space to pick up. Use the arrow keys to move, Space to drop, Escape to cancel.',
    moved: (column, position, total) =>
      `${column}, position ${position} of ${total}.`,
    pickedUp: (column, position, total) =>
      `Picked up in ${column}, position ${position} of ${total}.`,
  },
  booleanText: {
    active: 'Active',
    disabled: 'Disabled',
    enabled: 'Enabled',
    inactive: 'Inactive',
    no: 'No',
    yes: 'Yes',
  },
  breadcrumb: {
    label: 'Breadcrumb',
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
  checklist: {
    done: 'Done',
    hideCompleted: 'Hide completed',
    progress: (done, total) => `${done} of ${total} complete`,
    showCompleted: (count) => `Show completed (${count})`,
  },
  codeBlock: {
    label: 'Code',
  },
  colorPicker: {
    selectColor: 'Select colour',
    transparent: 'Transparent',
  },
  colorSchemeSwitcher: {
    dark: 'Dark',
    label: 'Color scheme',
    light: 'Light',
    system: 'System',
  },
  common: {
    apply: 'Apply',
    cancel: 'Cancel',
    clear: 'Clear',
    close: 'Close',
    copied: 'Copied',
    copy: 'Copy',
    copyValue: (label) => `Copy ${label}`,
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
    open: 'Set value range',
    rangePlaceholder: 'Filter by value',
  },
  dateInput: {
    clear: 'Clear date',
    open: 'Open calendar',
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
  filterBar: {
    clear: 'Clear filters',
    label: 'Filters',
  },
  filterChip: {
    remove: (label) => `Remove ${label} filter`,
    separator: ':',
  },
  editableText: {
    edit: 'Edit',
    empty: 'Empty',
    error: 'That did not work. Try again.',
    save: 'Save',
  },
  list: {
    empty: 'No data found',
    emptyDescription: 'When there is something to show, it appears here.',
    error: 'The data could not be loaded',
    errorDescription: 'Check your connection and try again.',
    loadMore: 'Load more',
  },
  loader: {
    loading: 'Loading',
  },
  loadingBar: {
    loading: 'Loading page',
  },
  notifications: {
    categories: 'Categories',
    empty: "You're all caught up",
    emptyDescription: 'New notifications will appear here.',
    list: 'Notifications',
    markAllRead: 'Mark all as read',
    search: 'Search notifications',
    status: 'Show',
    statusAll: 'All',
    statusUnread: 'Unread',
    title: 'Notifications',
    today: 'Today',
    trigger: (unread) =>
      unread === 0 ? 'Notifications' : `Notifications, ${unread} unread`,
    unread: 'Unread',
    viewAll: 'View all',
    yesterday: 'Yesterday',
  },
  protected: {
    denied: 'You do not have permission to do this',
  },
  phoneText: {
    call: 'Call',
    whatsapp: 'Open in WhatsApp',
  },
  pagination: {
    label: 'Pagination',
    next: 'Next page',
    previous: 'Previous page',
    range: (from, to, total) => `${from}-${to} of ${total}`,
    rowsPerPage: 'Rows per page',
  },
  passwordInput: {
    hide: 'Hide password',
    medium: 'Medium',
    show: 'Show password',
    strong: 'Strong',
    veryStrong: 'Very strong',
    veryWeak: 'Very weak',
    weak: 'Weak',
  },
  queryDsl: {
    boolean_too_long: ({ max }) =>
      `This yes/no filter can have at most ${max} characters.`,
    date_invalid: 'This date does not exist or is out of range.',
    date_range_conflicting_bounds:
      'These date limits contradict each other. Use one start and one end.',
    date_range_duplicated_operator: 'Each date limit can appear only once.',
    date_range_empty: 'No date falls between these limits.',
    date_range_invalid_format: 'This date filter is not valid.',
    date_range_too_long: ({ max }) =>
      `This date filter can have at most ${max} characters.`,
    ids_invalid_value: 'One of these identifiers is not valid.',
    ids_too_long: ({ max }) =>
      `This identifier list can have at most ${max} characters.`,
    ids_too_many: ({ max }) => `Select at most ${max} items.`,
    list_invalid_value: ({ allowed }) => `Choose from: ${allowed.join(', ')}.`,
    list_too_long: ({ max }) => `This list can have at most ${max} characters.`,
    money_range_conflicting_bounds:
      'These amount limits contradict each other. Use one minimum and one maximum.',
    money_range_duplicated_operator: 'Each amount limit can appear only once.',
    money_range_empty: 'No amount falls between these limits.',
    money_range_invalid_format: 'This amount filter is not valid.',
    money_range_too_long: ({ max }) =>
      `This amount filter can have at most ${max} characters.`,
    pagination_conflicting_cursors: 'Go forward or back, not both at once.',
    pagination_cursor_too_long: ({ max }) =>
      `This page link can have at most ${max} characters.`,
    pagination_integer_invalid: 'Page number and size take whole digits only.',
    pagination_integer_too_long: ({ max }) =>
      `This page number or size can have at most ${max} characters.`,
    pagination_mixed_modes: 'Use a page number or a cursor, not both.',
    range_conflicting_bounds:
      'These limits contradict each other. Use one minimum and one maximum.',
    range_duplicated_operator: 'Each limit can appear only once.',
    range_empty: 'No value falls between these limits.',
    range_invalid_format: 'This number filter is not valid.',
    range_too_long: ({ max }) =>
      `This number filter can have at most ${max} characters.`,
    search_empty_term: 'Type something to search for.',
    search_invalid_field: ({ allowed }) =>
      `Search in one of: ${allowed.join(', ')}.`,
    search_mode_not_allowed: ({ allowed }) =>
      `This search supports: ${allowed.join(', ')}.`,
    search_too_long: ({ max }) => `Search with at most ${max} characters.`,
    sort_conflicting_direction: 'A field cannot be sorted in both directions.',
    sort_invalid_field: ({ allowed }) =>
      `Sort by one of: ${allowed.join(', ')}.`,
    sort_too_long: ({ max }) => `This sort can have at most ${max} characters.`,
    sort_too_many_fields: ({ max }) => `Sort by at most ${max} fields.`,
    tags_invalid_value: ({ allowed, max_length }) =>
      allowed
        ? `Choose tags from: ${allowed.join(', ')}.`
        : `Tags can have at most ${max_length} characters.`,
    tags_too_long: ({ max }) =>
      `This tag list can have at most ${max} characters.`,
    tags_too_many: ({ max }) => `Use at most ${max} tags.`,
    timezone_invalid: 'This time zone is not recognised.',
    timezone_too_long: ({ max }) =>
      `This time zone can have at most ${max} characters.`,
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
  spotlightSearch: {
    results: 'Search results',
  },
  stepper: {
    blocked: 'Finish the current step first',
    completed: 'Completed',
    finish: 'Finish',
    next: 'Next',
    previous: 'Back',
    step: (active, total) => `Step ${active} of ${total}`,
  },
  table: {
    empty: 'No records found',
    emptyDescription: 'When there are records, they appear here.',
    error: 'The records could not be loaded',
    errorDescription: 'Check your connection and try again.',
    selectAll: 'Select all rows',
    selectRow: (row) => (row ? `Select row ${row}` : 'Select row'),
  },
  tag: {
    remove: (label) => `Remove ${label}`,
  },
  timeInput: {
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
  },
  transfer: {
    allColumns: 'All columns',
    clearFilters: 'Clear filters',
    columns: 'Columns',
    columnsChosen: (chosen, total) => `${chosen} of ${total}`,
    columnsNone: 'Choose at least one column',
    download: 'Download',
    downloadTemplate: 'Download the template',
    export: 'Export',
    exportDescription: (entity) =>
      `Choose which ${entity} leave, and in which shape.`,
    exportTitle: (entity) => `Export ${entity}`,
    failureFileTooLarge: 'The file passed the size limit',
    failureProcessing: 'Something went wrong while processing the file',
    fileChosen: (name) => `${name} selected`,
    fileColumn: 'Column in your file',
    fileDetails: (encoding, delimiter) =>
      delimiter === null
        ? encoding.toUpperCase()
        : `${encoding.toUpperCase()} · separated by ${delimiter === '\t' ? 'tab' : delimiter}`,
    fileFailed: 'The file could not be generated',
    filePending: 'Preparing the file…',
    fileReady: 'The file is ready',
    fileTooLarge: (max) => `That file is larger than ${max}`,
    filters: 'Filters',
    format: 'Format',
    formatUnsupported: (formats) => `Choose a ${formats} file`,
    ignore: 'Do not import',
    import: 'Import',
    importDescription: (entity) => `Bring ${entity} in from a file.`,
    importTitle: (entity) => `Import ${entity}`,
    jobCounts: ({ failed, processed, total }) =>
      failed > 0
        ? `${processed} of ${total} rows processed · ${failed} failed`
        : `${processed} of ${total} rows processed`,
    jobFailed: 'Failed',
    jobQueued: 'Queued',
    jobRunning: 'Running',
    jobSucceeded: 'Finished',
    mappingRequired: (label) => `${label} needs a column`,
    previewDuplicateHeader: (header) =>
      `The file names the column “${header}” twice`,
    previewEncoding:
      'That file’s encoding cannot be read. Save it as UTF-8 and try again',
    previewNotArray: 'A JSON file must hold a list of rows',
    previewNotice:
      'This is the start of the file. Every row is checked during the import; failed rows are listed with the reason.',
    previewRows: (rows) => (rows === 1 ? 'First row' : `First ${rows} rows`),
    previewUnreadable:
      'That file could not be read: no header with rows under it',
    previewWarnings: (rows) =>
      rows === 1 ? '1 with a warning' : `${rows} with warnings`,
    recordExported: 'Exported',
    recordFailed: 'Failed',
    recordImported: 'Imported',
    recordPending: 'Pending',
    recordRow: 'Row',
    recordStatus: 'Result',
    resultLater:
      'This keeps running after you close it. Follow the result on its page:',
    rowError: (code) =>
      ROW_ERRORS_EN.get(code) ?? `Could not be processed (${code})`,
    sending: 'Sending the request…',
    stepData: 'Data',
    stepDone: 'Result',
    stepFile: 'File',
    stepMap: 'Columns',
    stepPreview: 'Preview',
    uploading: 'Uploading the file…',
  },
  unsaved: {
    cancel: 'Keep editing',
    confirm: 'Leave without saving',
    description: 'You have unsaved changes. Leaving now will discard them.',
    title: 'Leave without saving?',
  },
}
