/**
 * Every string a turystack UI package renders on its own.
 *
 * The contract lives here, next to the translations, rather than in
 * `react-web`. Whoever owns the words owns the type, so a label and its
 * translations change in one package and never drift apart.
 *
 * A primitive that hardcodes a word decides the product's language for the app
 * consuming it, and the app has no way to argue. The defaults are English
 * because the rest of the API is; an app wanting other words passes them once,
 * at the root, instead of per instance.
 */
export type UiLabels = {
  anchorNav: {
    /** Names the "on this page" index of a long, anchored page. */
    label: string
  }
  board: {
    /** The per-column control that adds a card; the column's name completes its accessible name. */
    add: string
    /** Announced when a lifted card is put back where it started. */
    cancelled: string
    /** Announced once a lifted card is put down — `(column, position, total)`, position 1-based. */
    dropped: (column: string, position: number, total: number) => string
    /** Read to assistive technology on every movable card: how to move it with the keyboard. */
    instructions: string
    /** Announced as a lifted card travels — `(column, position, total)`, position 1-based. */
    moved: (column: string, position: number, total: number) => string
    /** Announced when a card is lifted — `(column, position, total)`, position 1-based. */
    pickedUp: (column: string, position: number, total: number) => string
  }
  booleanText: {
    active: string
    disabled: string
    enabled: string
    inactive: string
    no: string
    yes: string
  }
  breadcrumb: {
    /** Names the breadcrumb navigation landmark. */
    label: string
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
  checklist: {
    /** Read to assistive technology beside a finished item's check mark. */
    done: string
    /** Names the control that folds the finished items away again. */
    hideCompleted: string
    /** How far along the checklist is — `(done, total)`. */
    progress: (done: number, total: number) => string
    /** Names the control that reveals the finished items — `(count)` of them. */
    showCompleted: (count: number) => string
  }
  codeBlock: {
    /** Names the scrollable code region when no title names it. */
    label: string
  }
  colorPicker: {
    selectColor: string
    transparent: string
  }
  colorSchemeSwitcher: {
    /** Names the option that turns the dark scheme on. */
    dark: string
    /** Names the group of scheme options. */
    label: string
    /** Names the option that turns the light scheme on. */
    light: string
    /** Names the option that follows the operating system's scheme. */
    system: string
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
    /** Names a copy control by what it copies — `Copy Payment ID`. */
    copyValue: (label: string) => string
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
    /** Names the control beside a currency range field that opens its bounds. */
    open: string
    rangePlaceholder: string
  }
  dateInput: {
    /** Names the control that empties the date field. */
    clear: string
    /** Names the control that opens the calendar beside the date field. */
    open: string
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
  filterBar: {
    /** Empties every active chip at once; shown only while one is active. */
    clear: string
    /** Names the row of chips for assistive technology. */
    label: string
  }
  filterChip: {
    /** Names the control that clears one chip — `(label)` is the chip's. */
    remove: (label: string) => string
    /** Stands between an active chip's name and its value — `Status: Paid`. */
    separator: string
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
    /** The line under the empty title: why the space is blank, not that it is. */
    emptyDescription: string
    error: string
    /** The line under the error title: what the reader can do about it. */
    errorDescription: string
    loadMore: string
  }
  loader: {
    /** Names the spinner for assistive technology, which cannot see it spin. */
    loading: string
  }
  loadingBar: {
    /** Names the bar across the top of the shell while a page loads. */
    loading: string
  }
  notifications: {
    /** Names the chip row that narrows the notifications by category. */
    categories: string
    /** The empty state's title: nothing is waiting for the reader. */
    empty: string
    /** The line under the empty title. */
    emptyDescription: string
    /** Names the list of notifications. */
    list: string
    /** Marks every notification as read at once. */
    markAllRead: string
    /** Prompt in the field that searches the notifications. */
    search: string
    /** Names the control that switches between every notification and the unread ones. */
    status: string
    /** The status option showing every notification. */
    statusAll: string
    /** The status option showing only the unread notifications. */
    statusUnread: string
    /** Titles the notification popover and panel. */
    title: string
    /** Heads the group of notifications that arrived today. */
    today: string
    /** Names the bell — `(unread)` is how many are waiting, 0 for none. */
    trigger: (unread: number) => string
    /** Read to assistive technology beside an unread notification's dot. */
    unread: string
    /** Opens every notification, beyond the few the popover shows. */
    viewAll: string
    /** Heads the group of notifications that arrived yesterday. */
    yesterday: string
  }
  protected: {
    /** Why a control a permission blocks is inert — the default reason. */
    denied: string
  }
  phoneText: {
    /** Names the control that dials the number. */
    call: string
    /** Names the control that opens the number in WhatsApp. */
    whatsapp: string
  }
  pagination: {
    /** Names the pagination landmark. */
    label: string
    /** Names the control that moves to the next page. */
    next: string
    /** Names the control that moves to the previous page. */
    previous: string
    /** Summarises the visible slice — `(from, to)` are 1-based row numbers. */
    range: (from: number, to: number, total: number) => string
    rowsPerPage: string
  }
  passwordInput: {
    /** Names the control that masks the typed password again. */
    hide: string
    /** Strength verdict for 3 of the 5 rules met. */
    medium: string
    /** Names the control that reveals the typed password. */
    show: string
    /** Strength verdict for 4 of the 5 rules met. */
    strong: string
    /** Strength verdict for all 5 rules met. */
    veryStrong: string
    /** Strength verdict for at most 1 of the 5 rules met. */
    veryWeak: string
    /** Strength verdict for 2 of the 5 rules met. */
    weak: string
  }
  /**
   * Why a list query was refused, keyed by the stable `params.code` that
   * `@turystack/query-dsl` writes on every issue it raises. A leaf that needs
   * more than the code takes the issue's own `params`, so one lookup serves
   * them all: `typeof leaf === 'function' ? leaf(issue.params) : leaf`.
   */
  queryDsl: {
    /** A yes/no filter longer than `max` characters. */
    boolean_too_long: (params: { max: number }) => string
    /** A date that does not exist, or one too far from now to mean anything. */
    date_invalid: string
    /** A date bound repeats a side: `>…;>=…` or `=` beside another bound. */
    date_range_conflicting_bounds: string
    /** The same date operator twice. */
    date_range_duplicated_operator: string
    /** The dates leave no moment between them. */
    date_range_empty: string
    /** A date filter that does not read as one. */
    date_range_invalid_format: string
    /** A date filter longer than `max` characters. */
    date_range_too_long: (params: { max: number }) => string
    /** One of the ids is not an id. */
    ids_invalid_value: string
    /** An id list longer than `max` characters. */
    ids_too_long: (params: { max: number }) => string
    /** More ids than the endpoint takes — `max` of them. */
    ids_too_many: (params: { max: number }) => string
    /** A value outside the declared set — `allowed` lists the set. */
    list_invalid_value: (params: { allowed: readonly string[] }) => string
    /** A value list longer than `max` characters. */
    list_too_long: (params: { max: number }) => string
    /** An amount bound repeats a side, or `=` sits beside another bound. */
    money_range_conflicting_bounds: string
    /** The same amount operator twice. */
    money_range_duplicated_operator: string
    /** The amounts leave no whole cent between them. */
    money_range_empty: string
    /** An amount filter that does not read as whole cents. */
    money_range_invalid_format: string
    /** An amount filter longer than `max` characters. */
    money_range_too_long: (params: { max: number }) => string
    /** Both a next and a previous cursor were sent. */
    pagination_conflicting_cursors: string
    /** A page cursor longer than `max` characters. */
    pagination_cursor_too_long: (params: { max: number }) => string
    /** A page number or page size that is not whole digits (`1e3`, `0x10`, `2.5`). */
    pagination_integer_invalid: string
    /** A page number or page size longer than `max` characters. */
    pagination_integer_too_long: (params: { max: number }) => string
    /** A page number and a cursor were sent together. */
    pagination_mixed_modes: string
    /** A number bound repeats a side, or `=` sits beside another bound. */
    range_conflicting_bounds: string
    /** The same number operator twice. */
    range_duplicated_operator: string
    /** The numbers leave no value between them. */
    range_empty: string
    /** A number filter that does not read as one. */
    range_invalid_format: string
    /** A number filter longer than `max` characters. */
    range_too_long: (params: { max: number }) => string
    /** A search with only its operator and no text. */
    search_empty_term: string
    /** A field the search does not cover — `allowed` lists the ones it does. */
    search_invalid_field: (params: { allowed: readonly string[] }) => string
    /** A search mode the endpoint does not offer — `allowed` lists the ones it does. */
    search_mode_not_allowed: (params: { allowed: readonly string[] }) => string
    /** A search longer than `max` characters. */
    search_too_long: (params: { max: number }) => string
    /** The same field sorted both ways. */
    sort_conflicting_direction: string
    /** A field the list cannot sort by — `allowed` lists the ones it can. */
    sort_invalid_field: (params: { allowed: readonly string[] }) => string
    /** A sort longer than `max` characters. */
    sort_too_long: (params: { max: number }) => string
    /** More sort fields than `max`. */
    sort_too_many_fields: (params: { max: number }) => string
    /**
     * A tag outside the set, or longer than `max_length` — `allowed` is absent
     * when any tag is accepted.
     */
    tags_invalid_value: (params: {
      allowed?: readonly string[]
      max_length: number
    }) => string
    /** A tag list longer than `max` characters. */
    tags_too_long: (params: { max: number }) => string
    /** More tags than `max`. */
    tags_too_many: (params: { max: number }) => string
    /** A time zone that is not an IANA name. */
    timezone_invalid: string
    /** A time zone longer than `max` characters. */
    timezone_too_long: (params: { max: number }) => string
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
  spotlightSearch: {
    /** Names the list of results when neither ariaLabel nor placeholder does. */
    results: string
  }
  stepper: {
    /** Why a step ahead of the active one cannot be opened yet (linear flow). */
    blocked: string
    completed: string
    finish: string
    next: string
    previous: string
    /** Announced by the live region — `(active, total)` are 1-based. */
    step: (active: number, total: number) => string
  }
  table: {
    empty: string
    /** The line under the empty title: why the table is blank, not that it is. */
    emptyDescription: string
    /** What the table says when the rows could not be loaded. */
    error: string
    /** The line under the error title: what the reader can do about it. */
    errorDescription: string
    /** Names the header checkbox that selects every row on the page. */
    selectAll: string
    /** Names a row's checkbox — `(row)` is the row's own text, when it has one. */
    selectRow: (row?: string) => string
  }
  tag: {
    /** Names the × that removes one tag — `(label)` is the tag's own text. */
    remove: (label: string) => string
  }
  timeInput: {
    /** Names the hours segment of a time field. */
    hours: string
    /** Names the minutes segment of a time field. */
    minutes: string
    /** Names the seconds segment of a time field. */
    seconds: string
  }
  transfer: {
    /** Ticks or clears every column at once. */
    allColumns: string
    /** Empties every filter back to nothing. */
    clearFilters: string
    columns: string
    /** How many columns are going out — `(chosen, total)`. */
    columnsChosen: (chosen: number, total: number) => string
    /** Why nothing can leave yet: every column was cleared. */
    columnsNone: string
    /** Takes the file an export produced. */
    download: string
    /** Offers the empty file with the right headers. */
    downloadTemplate: string
    export: string
    /** What the export surface says under its title — `(entity)` is the noun. */
    exportDescription: (entity: string) => string
    /** Titles the export surface — `(entity)` is what is leaving. */
    exportTitle: (entity: string) => string
    /** A job failed because the file passed the size limit (`file_too_large`). */
    failureFileTooLarge: string
    /** A job failed for any other reason (`processing_error`). */
    failureProcessing: string
    /** Names the file the reader chose. */
    fileChosen: (name: string) => string
    /** Names the column in the file that feeds a field. */
    fileColumn: string
    /** How the file was written, as the preview read it — `delimiter` is null outside CSV, `\t` for a tab. */
    fileDetails: (encoding: string, delimiter: string | null) => string
    /** The export ran and produced no file, and no reason came with it. */
    fileFailed: string
    /** The export was accepted and its file is still being built. */
    filePending: string
    /** The export's file exists and can be taken. */
    fileReady: string
    /** Refuses a file above the size limit — `(max)` is already formatted, e.g. `50 MB`. */
    fileTooLarge: (max: string) => string
    filters: string
    format: string
    /** Refuses a file in a format not offered — `(formats)` reads `CSV, JSON`. */
    formatUnsupported: (formats: string) => string
    /** The choice that leaves a field unfilled. */
    ignore: string
    import: string
    importDescription: (entity: string) => string
    importTitle: (entity: string) => string
    /** Where a job stands, under its badge — counted from its records. */
    jobCounts: (counts: {
      failed: number
      processed: number
      total: number
    }) => string
    /** A job whose run ended without finishing. */
    jobFailed: string
    /** A job accepted and not started yet. */
    jobQueued: string
    /** A job the worker is going through. */
    jobRunning: string
    /** A job that reached every row (some rows may still have failed). */
    jobSucceeded: string
    /** Why the mapping cannot be finished — `(label)` is the field's. */
    mappingRequired: (label: string) => string
    /** The file names a header twice — `(header)` — which the worker refuses. */
    previewDuplicateHeader: (header: string) => string
    /** The file is in an encoding the worker cannot read (UTF-16BE, UTF-16 JSON). */
    previewEncoding: string
    /** A JSON file whose top level is not an array of rows. */
    previewNotArray: string
    /** Says the preview is a sample and the worker checks every row. */
    previewNotice: string
    /** Counts the rows the preview read from the head of the file. */
    previewRows: (rows: number) => string
    /** The preview could not read a header and a row from the file. */
    previewUnreadable: string
    /** Counts the preview rows the schema warns about. */
    previewWarnings: (rows: number) => string
    /** An export row written to the file. */
    recordExported: string
    /** A row that failed, with its reasons under it. */
    recordFailed: string
    /** An import row the resource took in. */
    recordImported: string
    /** A row the worker has not reached yet. */
    recordPending: string
    /** Heads the column of file line numbers in the records list. */
    recordRow: string
    /** Heads the column saying what happened to each row. */
    recordStatus: string
    /** Says the work outlives the surface; the link to its page follows it. */
    resultLater: string
    /**
     * Why a row failed, from its `code` — the lib's and the schema's
     * (`required`, `invalid_email`, `column_count_mismatch` …). An unknown code
     * still reads as a sentence, with the code in it.
     */
    rowError: (code: string) => string
    /** Shown while the request that starts the transfer is in flight. */
    sending: string
    /** The export's first step: which rows, in which shape, with which columns. */
    stepData: string
    stepDone: string
    stepFile: string
    stepMap: string
    /** The import's third step: the head of the file, mapped. */
    stepPreview: string
    /** Shown while the chosen file goes up to storage. */
    uploading: string
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
