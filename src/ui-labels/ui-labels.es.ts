import type { UiLabels } from './ui-labels.types.js'

/** Por qué falló una fila, según los códigos que graban el worker y `rowFromSchema`. */
const ROW_ERRORS_ES = new Map<string, string>([
  ['required', 'Obligatorio'],
  ['invalid', 'No válido'],
  ['invalid_type', 'Tipo de valor incorrecto'],
  ['invalid_value', 'No es uno de los valores aceptados'],
  ['invalid_format', 'Formato incorrecto'],
  ['invalid_email', 'Correo no válido'],
  ['invalid_url', 'URL no válida'],
  ['invalid_uuid', 'ID no válido'],
  ['too_small', 'Demasiado corto o pequeño'],
  ['too_big', 'Demasiado largo o grande'],
  ['column_count_mismatch', 'La fila tiene un número incorrecto de columnas'],
  ['invalid_encoding', 'Caracteres que la codificación del archivo no lee'],
  ['invalid_json', 'JSON no válido'],
  ['invalid_row', 'No es un objeto'],
  ['row_too_large', 'La fila es demasiado grande'],
  ['invalid_date', 'Fecha no válida'],
  ['invalid_datetime', 'Fecha y hora no válidas'],
  ['not_multiple_of', 'No es un intervalo permitido'],
  ['invalid_union', 'No coincide con ningún formato aceptado'],
])

/**
 * Spanish.
 *
 * Neutral rather than regional: `ordenador` and `computadora` split the
 * audience, so anything with a split has been written around. `CPF` and `CNPJ`
 * stay as they are — they are Brazilian document names, not words to translate.
 */
export const uiLabelsEs: UiLabels = {
  anchorNav: {
    label: 'En esta página',
  },
  board: {
    add: 'Agregar',
    cancelled: 'Movimiento cancelado. La tarjeta volvió a su lugar.',
    dropped: (column, position, total) =>
      `Tarjeta soltada en ${column}, posición ${position} de ${total}.`,
    instructions:
      'Pulsa Espacio para tomar. Usa las flechas para mover, Espacio para soltar y Escape para cancelar.',
    moved: (column, position, total) =>
      `${column}, posición ${position} de ${total}.`,
    pickedUp: (column, position, total) =>
      `Tarjeta tomada en ${column}, posición ${position} de ${total}.`,
  },
  booleanText: {
    active: 'Activo',
    disabled: 'Deshabilitado',
    enabled: 'Habilitado',
    inactive: 'Inactivo',
    no: 'No',
    yes: 'Sí',
  },
  breadcrumb: {
    label: 'Ruta de navegación',
    more: 'Más',
  },
  bulkActions: {
    clear: 'Quitar selección',
    more: 'Más acciones',
    selected: (count) => `${count} seleccionados`,
  },
  carousel: {
    next: 'Diapositiva siguiente',
    previous: 'Diapositiva anterior',
    slide: (index, total) => `Diapositiva ${index} de ${total}`,
  },
  checklist: {
    done: 'Completado',
    hideCompleted: 'Ocultar completados',
    progress: (done, total) => `${done} de ${total} completados`,
    showCompleted: (count) => `Mostrar completados (${count})`,
  },
  codeBlock: {
    label: 'Código',
  },
  colorPicker: {
    selectColor: 'Seleccionar color',
    transparent: 'Transparente',
  },
  colorSchemeSwitcher: {
    dark: 'Oscuro',
    label: 'Esquema de colores',
    light: 'Claro',
    system: 'Sistema',
  },
  common: {
    apply: 'Aplicar',
    cancel: 'Cancelar',
    clear: 'Limpiar',
    close: 'Cerrar',
    copied: 'Copiado',
    copy: 'Copiar',
    copyValue: (label) => `Copiar ${label}`,
    from: (value) => `Desde ${value}`,
    optional: '(opcional)',
    retry: 'Reintentar',
    upTo: (value) => `Hasta ${value}`,
  },
  confirm: {
    acknowledgeBlocked: 'Marca la declaración de arriba para continuar.',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    error: 'No funcionó. Inténtalo de nuevo.',
    otpBlocked: 'Escribe el código completo para continuar.',
    otpLabel: 'Código de un solo uso',
    passwordBlocked: 'Escribe tu contraseña para continuar.',
    passwordLabel: 'Contraseña',
    passwordPlaceholder: 'Tu contraseña',
    typedBlocked: (value) => `Escribe ${value} exactamente para continuar.`,
    typedLabel: (value) => `Escribe ${value} para confirmar`,
  },
  currencyInput: {
    maximum: 'Valor máximo',
    minimum: 'Valor mínimo',
    open: 'Definir rango de valores',
    rangePlaceholder: 'Filtrar por valor',
  },
  dateInput: {
    clear: 'Borrar fecha',
    open: 'Abrir calendario',
  },
  dateRangeInput: {
    custom: 'Personalizado',
    last30Days: 'Últimos 30 días',
    last7Days: 'Últimos 7 días',
    lastMonth: 'Mes pasado',
    thisMonth: 'Este mes',
    today: 'Hoy',
    yesterday: 'Ayer',
  },
  dateText: {
    today: 'Hoy',
    tomorrow: 'Mañana',
    yesterday: 'Ayer',
  },
  documentText: {
    cnpj: 'CNPJ',
    cpf: 'CPF',
    hide: 'Ocultar documento',
    reveal: 'Mostrar documento',
  },
  durationText: {
    day: 'día',
    dayShort: 'd',
    days: 'días',
    hour: 'hora',
    hourShort: 'h',
    hours: 'horas',
    minute: 'minuto',
    minuteShort: 'min',
    minutes: 'minutos',
    second: 'segundo',
    secondShort: 's',
    seconds: 'segundos',
  },
  filePicker: {
    accepted: (accept) => `Aceptados: ${accept}`,
    hint: 'Arrastra archivos aquí, o haz clic para seleccionar',
  },
  filterBar: {
    clear: 'Limpiar filtros',
    label: 'Filtros',
  },
  filterChip: {
    remove: (label) => `Quitar filtro ${label}`,
    separator: ':',
  },
  editableText: {
    edit: 'Editar',
    empty: 'Vacío',
    error: 'No funcionó. Inténtalo de nuevo.',
    save: 'Guardar',
  },
  list: {
    empty: 'No se encontraron datos',
    emptyDescription: 'Cuando haya algo para mostrar, aparecerá aquí.',
    error: 'No se pudieron cargar los datos',
    errorDescription: 'Revisa tu conexión e inténtalo de nuevo.',
    loadMore: 'Cargar más',
  },
  loader: {
    loading: 'Cargando',
  },
  loadingBar: {
    loading: 'Cargando página',
  },
  notifications: {
    categories: 'Categorías',
    empty: 'Estás al día',
    emptyDescription: 'Las nuevas notificaciones aparecerán aquí.',
    list: 'Notificaciones',
    markAllRead: 'Marcar todas como leídas',
    search: 'Buscar notificaciones',
    status: 'Mostrar',
    statusAll: 'Todas',
    statusUnread: 'No leídas',
    title: 'Notificaciones',
    today: 'Hoy',
    trigger: (unread) =>
      unread === 0
        ? 'Notificaciones'
        : `Notificaciones, ${unread} ${unread === 1 ? 'no leída' : 'no leídas'}`,
    unread: 'No leída',
    viewAll: 'Ver todas',
    yesterday: 'Ayer',
  },
  protected: {
    denied: 'No tienes permiso para hacer esto',
  },
  phoneText: {
    call: 'Llamar',
    whatsapp: 'Abrir en WhatsApp',
  },
  pagination: {
    label: 'Paginación',
    next: 'Página siguiente',
    previous: 'Página anterior',
    range: (from, to, total) => `${from}-${to} de ${total}`,
    rowsPerPage: 'Filas por página',
  },
  passwordInput: {
    hide: 'Ocultar contraseña',
    medium: 'Media',
    show: 'Mostrar contraseña',
    strong: 'Fuerte',
    veryStrong: 'Muy fuerte',
    veryWeak: 'Muy débil',
    weak: 'Débil',
  },
  queryDsl: {
    boolean_too_long: ({ max }) =>
      `Este filtro de sí/no puede tener como máximo ${max} caracteres.`,
    date_invalid: 'Esta fecha no existe o está fuera del rango aceptado.',
    date_range_conflicting_bounds:
      'Los límites de fecha se contradicen. Usa un inicio y un fin.',
    date_range_duplicated_operator:
      'Cada límite de fecha solo puede aparecer una vez.',
    date_range_empty: 'Ninguna fecha cabe entre estos límites.',
    date_range_invalid_format: 'Este filtro de fecha no es válido.',
    date_range_too_long: ({ max }) =>
      `Este filtro de fecha puede tener como máximo ${max} caracteres.`,
    ids_invalid_value: 'Uno de estos identificadores no es válido.',
    ids_too_long: ({ max }) =>
      `Esta lista de identificadores puede tener como máximo ${max} caracteres.`,
    ids_too_many: ({ max }) => `Selecciona como máximo ${max} elementos.`,
    list_invalid_value: ({ allowed }) => `Elige entre: ${allowed.join(', ')}.`,
    list_too_long: ({ max }) =>
      `Esta lista puede tener como máximo ${max} caracteres.`,
    money_range_conflicting_bounds:
      'Los límites de importe se contradicen. Usa un mínimo y un máximo.',
    money_range_duplicated_operator:
      'Cada límite de importe solo puede aparecer una vez.',
    money_range_empty: 'Ningún importe cabe entre estos límites.',
    money_range_invalid_format: 'Este filtro de importe no es válido.',
    money_range_too_long: ({ max }) =>
      `Este filtro de importe puede tener como máximo ${max} caracteres.`,
    pagination_conflicting_cursors:
      'Avanza o retrocede, no las dos cosas a la vez.',
    pagination_cursor_too_long: ({ max }) =>
      `Este enlace de página puede tener como máximo ${max} caracteres.`,
    pagination_integer_invalid:
      'El número y el tamaño de página solo aceptan dígitos enteros.',
    pagination_integer_too_long: ({ max }) =>
      `Este número o tamaño de página puede tener como máximo ${max} caracteres.`,
    pagination_mixed_modes: 'Usa un número de página o un cursor, no ambos.',
    range_conflicting_bounds:
      'Los límites se contradicen. Usa un mínimo y un máximo.',
    range_duplicated_operator: 'Cada límite solo puede aparecer una vez.',
    range_empty: 'Ningún valor cabe entre estos límites.',
    range_invalid_format: 'Este filtro numérico no es válido.',
    range_too_long: ({ max }) =>
      `Este filtro numérico puede tener como máximo ${max} caracteres.`,
    search_empty_term: 'Escribe algo para buscar.',
    search_invalid_field: ({ allowed }) =>
      `Busca en uno de estos campos: ${allowed.join(', ')}.`,
    search_mode_not_allowed: ({ allowed }) =>
      `Esta búsqueda admite: ${allowed.join(', ')}.`,
    search_too_long: ({ max }) => `Busca con un máximo de ${max} caracteres.`,
    sort_conflicting_direction:
      'Un campo no puede ordenarse en ambos sentidos.',
    sort_invalid_field: ({ allowed }) =>
      `Ordena por uno de estos campos: ${allowed.join(', ')}.`,
    sort_too_long: ({ max }) =>
      `Este orden puede tener como máximo ${max} caracteres.`,
    sort_too_many_fields: ({ max }) => `Ordena por un máximo de ${max} campos.`,
    tags_invalid_value: ({ allowed, max_length }) =>
      allowed
        ? `Elige etiquetas entre: ${allowed.join(', ')}.`
        : `Cada etiqueta puede tener como máximo ${max_length} caracteres.`,
    tags_too_long: ({ max }) =>
      `Esta lista de etiquetas puede tener como máximo ${max} caracteres.`,
    tags_too_many: ({ max }) => `Usa como máximo ${max} etiquetas.`,
    timezone_invalid: 'Esta zona horaria no se reconoce.',
    timezone_too_long: ({ max }) =>
      `Esta zona horaria puede tener como máximo ${max} caracteres.`,
  },
  search: {
    filters: 'Filtros',
    less: 'Ver menos',
    more: 'Ver más',
    placeholder: 'Buscar',
    reset: 'Restablecer',
  },
  select: {
    create: (query) => `Crear "${query}"`,
    error: 'No se pudieron cargar las opciones',
  },
  spotlightSearch: {
    results: 'Resultados de la búsqueda',
  },
  stepper: {
    blocked: 'Termina primero el paso actual',
    completed: 'Completado',
    finish: 'Finalizar',
    next: 'Siguiente',
    previous: 'Atrás',
    step: (active, total) => `Paso ${active} de ${total}`,
  },
  table: {
    empty: 'No se encontraron registros',
    emptyDescription: 'Cuando haya registros, aparecerán aquí.',
    error: 'No se pudieron cargar los registros',
    errorDescription: 'Revisa tu conexión e inténtalo de nuevo.',
    selectAll: 'Seleccionar todas las filas',
    selectRow: (row) => (row ? `Seleccionar fila ${row}` : 'Seleccionar fila'),
  },
  tag: {
    remove: (label) => `Quitar ${label}`,
  },
  timeInput: {
    hours: 'horas',
    minutes: 'minutos',
    seconds: 'segundos',
  },
  transfer: {
    allColumns: 'Todas las columnas',
    clearFilters: 'Limpiar filtros',
    columns: 'Columnas',
    columnsChosen: (chosen, total) => `${chosen} de ${total}`,
    columnsNone: 'Elige al menos una columna',
    download: 'Descargar',
    downloadTemplate: 'Descargar la plantilla',
    export: 'Exportar',
    exportDescription: (entity) =>
      `Elige qué ${entity} salen, y en qué formato.`,
    exportTitle: (entity) => `Exportar ${entity}`,
    failureFileTooLarge: 'El archivo superó el límite de tamaño',
    failureProcessing: 'Algo salió mal al procesar el archivo',
    fileChosen: (name) => `${name} seleccionado`,
    fileColumn: 'Columna de tu archivo',
    fileDetails: (encoding, delimiter) =>
      delimiter === null
        ? encoding.toUpperCase()
        : `${encoding.toUpperCase()} · separado por ${delimiter === '\t' ? 'tabulación' : delimiter}`,
    fileFailed: 'No se pudo generar el archivo',
    filePending: 'Preparando el archivo…',
    fileReady: 'El archivo está listo',
    fileTooLarge: (max) => `Ese archivo supera ${max}`,
    filters: 'Filtros',
    format: 'Formato',
    formatUnsupported: (formats) => `Elige un archivo ${formats}`,
    ignore: 'No importar',
    import: 'Importar',
    importDescription: (entity) => `Trae ${entity} desde un archivo.`,
    importTitle: (entity) => `Importar ${entity}`,
    jobCounts: ({ failed, processed, total }) =>
      failed > 0
        ? `${processed} de ${total} filas procesadas · ${failed} con error`
        : `${processed} de ${total} filas procesadas`,
    jobFailed: 'Falló',
    jobQueued: 'En cola',
    jobRunning: 'En curso',
    jobSucceeded: 'Terminado',
    mappingRequired: (label) => `${label} necesita una columna`,
    previewDuplicateHeader: (header) =>
      `El archivo tiene la columna “${header}” dos veces`,
    previewEncoding:
      'No se puede leer la codificación del archivo. Guárdalo en UTF-8 e inténtalo de nuevo',
    previewNotArray: 'Un archivo JSON debe contener una lista de filas',
    previewNotice:
      'Este es el comienzo del archivo. Cada fila se revisa durante la importación; las que fallen aparecen con el motivo.',
    previewRows: (rows) =>
      rows === 1 ? 'Primera fila' : `Primeras ${rows} filas`,
    previewUnreadable:
      'No se pudo leer el archivo: ningún encabezado con filas debajo',
    previewWarnings: (rows) =>
      rows === 1 ? '1 con aviso' : `${rows} con aviso`,
    recordExported: 'Exportada',
    recordFailed: 'Falló',
    recordImported: 'Importada',
    recordPending: 'Pendiente',
    recordRow: 'Fila',
    recordStatus: 'Resultado',
    resultLater:
      'Esto sigue en marcha después de cerrar. Sigue el resultado en su página:',
    rowError: (code) =>
      ROW_ERRORS_ES.get(code) ?? `No se pudo procesar (${code})`,
    sending: 'Enviando la solicitud…',
    stepData: 'Datos',
    stepDone: 'Resultado',
    stepFile: 'Archivo',
    stepMap: 'Columnas',
    stepPreview: 'Vista previa',
    uploading: 'Subiendo el archivo…',
  },
  unsaved: {
    cancel: 'Seguir editando',
    confirm: 'Salir sin guardar',
    description: 'Tienes cambios sin guardar. Si sales ahora, los perderás.',
    title: '¿Salir sin guardar?',
  },
}
