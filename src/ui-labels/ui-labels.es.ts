import type { UiLabels } from './ui-labels.types.js'

/**
 * Spanish.
 *
 * Neutral rather than regional: `ordenador` and `computadora` split the
 * audience, so anything with a split has been written around. `CPF` and `CNPJ`
 * stay as they are — they are Brazilian document names, not words to translate.
 */
export const uiLabelsEs: UiLabels = {
  booleanText: {
    active: 'Activo',
    disabled: 'Deshabilitado',
    enabled: 'Habilitado',
    inactive: 'Inactivo',
    no: 'No',
    yes: 'Sí',
  },
  breadcrumb: {
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
  colorPicker: {
    selectColor: 'Seleccionar color',
    transparent: 'Transparente',
  },
  common: {
    apply: 'Aplicar',
    cancel: 'Cancelar',
    clear: 'Limpiar',
    close: 'Cerrar',
    copied: 'Copiado',
    copy: 'Copiar',
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
    rangePlaceholder: 'Filtrar por valor',
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
  editableText: {
    edit: 'Editar',
    empty: 'Vacío',
    error: 'No funcionó. Inténtalo de nuevo.',
    save: 'Guardar',
  },
  list: {
    empty: 'No se encontraron datos',
    error: 'No se pudieron cargar los datos',
    loadMore: 'Cargar más',
  },
  loader: {
    loading: 'Cargando',
  },
  phoneText: {
    call: 'Llamar',
    whatsapp: 'Abrir en WhatsApp',
  },
  pagination: {
    range: (from, to, total) => `${from}-${to} de ${total}`,
    rowsPerPage: 'Filas por página',
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
  stepper: {
    completed: 'Completado',
    finish: 'Finalizar',
    next: 'Siguiente',
    previous: 'Atrás',
    step: (active, total) => `Paso ${active} de ${total}`,
  },
  table: {
    empty: 'No se encontraron registros',
    error: 'No se pudieron cargar los registros',
  },
  transfer: {
    allColumns: 'Todas las columnas',
    alwaysIncluded: 'Siempre incluida',
    clearFilters: 'Limpiar filtros',
    columns: 'Columnas',
    columnsChosen: (chosen, total) => `${chosen} de ${total}`,
    downloadErrors: 'Descargar las filas que fallaron',
    downloadTemplate: 'Descargar la plantilla',
    export: 'Exportar',
    exportDescription: (entity) =>
      `Elige qué ${entity} salen, y en qué formato.`,
    exportTitle: (entity) => `Exportar ${entity}`,
    fileChosen: (name) => `${name} seleccionado`,
    fileColumn: 'Columna de tu archivo',
    filters: 'Filtros',
    format: 'Formato',
    ignore: 'No importar',
    import: 'Importar',
    importDescription: (entity) => `Trae ${entity} desde un archivo.`,
    importTitle: (entity) => `Importar ${entity}`,
    imported: (created, failed) =>
      failed > 0
        ? `${created} importados, ${failed} rechazados`
        : `${created} importados`,
    mappingRequired: (label) => `${label} necesita una columna`,
    rowsFound: (rows) => `${rows} filas encontradas`,
    rowsReady: (ready, total) => `${ready} de ${total} filas listas`,
    rowsRefused: (rows) => `${rows} rechazadas`,
    rowsTooMany: (max) => `Ese archivo tiene más de ${max} filas`,
    stepDone: 'Resultado',
    stepFile: 'Archivo',
    stepMap: 'Columnas',
    stepReview: 'Revisión',
  },
  unsaved: {
    cancel: 'Seguir editando',
    confirm: 'Salir sin guardar',
    description: 'Tienes cambios sin guardar. Si sales ahora, los perderás.',
    title: '¿Salir sin guardar?',
  },
}
