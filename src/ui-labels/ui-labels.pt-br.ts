import type { UiLabels } from './ui-labels.types.js'

/** Por que uma linha falhou, pelos códigos que o worker e o `rowFromSchema` gravam. */
const ROW_ERRORS_PT_BR = new Map<string, string>([
  ['required', 'Obrigatório'],
  ['invalid', 'Inválido'],
  ['invalid_type', 'Tipo de valor errado'],
  ['invalid_value', 'Não é um dos valores aceitos'],
  ['invalid_format', 'Formato errado'],
  ['invalid_email', 'E-mail inválido'],
  ['invalid_url', 'URL inválida'],
  ['invalid_uuid', 'ID inválido'],
  ['too_small', 'Curto ou pequeno demais'],
  ['too_big', 'Longo ou grande demais'],
  ['column_count_mismatch', 'A linha tem o número errado de colunas'],
  ['invalid_encoding', 'Caracteres que a codificação do arquivo não lê'],
  ['invalid_json', 'JSON inválido'],
  ['invalid_row', 'Não é um objeto'],
  ['row_too_large', 'A linha é grande demais'],
  ['invalid_date', 'Data inválida'],
  ['invalid_datetime', 'Data e hora inválidas'],
  ['not_multiple_of', 'Não é um intervalo permitido'],
  ['invalid_union', 'Não corresponde a nenhum formato aceito'],
])

/**
 * Portuguese (Brazil).
 *
 * Written against how these components are actually spoken about in Brazilian
 * products, not word for word off the English. `Show document number` is
 * `Mostrar documento`, because nobody here says "número do documento" out loud.
 */
export const uiLabelsPtBr: UiLabels = {
  anchorNav: {
    label: 'Nesta página',
  },
  board: {
    add: 'Adicionar',
    cancelled: 'Movimento cancelado. O cartão voltou para onde estava.',
    dropped: (column, position, total) =>
      `Cartão solto em ${column}, posição ${position} de ${total}.`,
    instructions:
      'Pressione Espaço para pegar. Use as setas para mover, Espaço para soltar e Esc para cancelar.',
    moved: (column, position, total) =>
      `${column}, posição ${position} de ${total}.`,
    pickedUp: (column, position, total) =>
      `Cartão pego em ${column}, posição ${position} de ${total}.`,
  },
  booleanText: {
    active: 'Ativo',
    disabled: 'Desabilitado',
    enabled: 'Habilitado',
    inactive: 'Inativo',
    no: 'Não',
    yes: 'Sim',
  },
  breadcrumb: {
    label: 'Trilha de navegação',
    more: 'Mais',
  },
  bulkActions: {
    clear: 'Limpar seleção',
    more: 'Mais ações',
    selected: (count) => `${count} selecionados`,
  },
  carousel: {
    next: 'Próximo slide',
    previous: 'Slide anterior',
    slide: (index, total) => `Slide ${index} de ${total}`,
  },
  checklist: {
    done: 'Concluído',
    hideCompleted: 'Ocultar concluídos',
    progress: (done, total) => `${done} de ${total} concluídos`,
    showCompleted: (count) => `Mostrar concluídos (${count})`,
  },
  codeBlock: {
    label: 'Código',
  },
  colorPicker: {
    selectColor: 'Selecionar cor',
    transparent: 'Transparente',
  },
  colorSchemeSwitcher: {
    dark: 'Escuro',
    label: 'Esquema de cores',
    light: 'Claro',
    system: 'Sistema',
  },
  common: {
    apply: 'Aplicar',
    cancel: 'Cancelar',
    clear: 'Limpar',
    close: 'Fechar',
    copied: 'Copiado',
    copy: 'Copiar',
    copyValue: (label) => `Copiar ${label}`,
    from: (value) => `A partir de ${value}`,
    optional: '(opcional)',
    retry: 'Tentar novamente',
    upTo: (value) => `Até ${value}`,
  },
  confirm: {
    acknowledgeBlocked: 'Marque a declaração acima para continuar.',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    error: 'Não deu certo. Tente de novo.',
    otpBlocked: 'Digite o código inteiro para continuar.',
    otpLabel: 'Código de uso único',
    passwordBlocked: 'Digite sua senha para continuar.',
    passwordLabel: 'Senha',
    passwordPlaceholder: 'Sua senha',
    typedBlocked: (value) => `Digite ${value} exatamente para continuar.`,
    typedLabel: (value) => `Digite ${value} para confirmar`,
  },
  currencyInput: {
    maximum: 'Valor máximo',
    minimum: 'Valor mínimo',
    open: 'Definir faixa de valores',
    rangePlaceholder: 'Filtrar por valor',
  },
  dateInput: {
    clear: 'Limpar data',
    open: 'Abrir calendário',
  },
  dateRangeInput: {
    custom: 'Personalizado',
    last30Days: 'Últimos 30 dias',
    last7Days: 'Últimos 7 dias',
    lastMonth: 'Mês passado',
    thisMonth: 'Este mês',
    today: 'Hoje',
    yesterday: 'Ontem',
  },
  dateText: {
    today: 'Hoje',
    tomorrow: 'Amanhã',
    yesterday: 'Ontem',
  },
  documentText: {
    cnpj: 'CNPJ',
    cpf: 'CPF',
    hide: 'Ocultar documento',
    reveal: 'Mostrar documento',
  },
  durationText: {
    day: 'dia',
    dayShort: 'd',
    days: 'dias',
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
    accepted: (accept) => `Aceitos: ${accept}`,
    hint: 'Arraste arquivos aqui, ou clique para selecionar',
  },
  filterBar: {
    clear: 'Limpar filtros',
    label: 'Filtros',
  },
  filterChip: {
    remove: (label) => `Remover filtro ${label}`,
    separator: ':',
  },
  editableText: {
    edit: 'Editar',
    empty: 'Vazio',
    error: 'Não deu certo. Tente de novo.',
    save: 'Salvar',
  },
  list: {
    empty: 'Nenhum dado encontrado',
    emptyDescription: 'Quando houver algo para mostrar, aparece aqui.',
    error: 'Não foi possível carregar os dados',
    errorDescription: 'Verifique sua conexão e tente de novo.',
    loadMore: 'Carregar mais',
  },
  loader: {
    loading: 'Carregando',
  },
  loadingBar: {
    loading: 'Carregando página',
  },
  notifications: {
    categories: 'Categorias',
    empty: 'Tudo em dia',
    emptyDescription: 'Novas notificações aparecem aqui.',
    list: 'Notificações',
    markAllRead: 'Marcar todas como lidas',
    search: 'Buscar notificações',
    status: 'Mostrar',
    statusAll: 'Todas',
    statusUnread: 'Não lidas',
    title: 'Notificações',
    today: 'Hoje',
    trigger: (unread) =>
      unread === 0
        ? 'Notificações'
        : `Notificações, ${unread} ${unread === 1 ? 'não lida' : 'não lidas'}`,
    unread: 'Não lida',
    viewAll: 'Ver todas',
    yesterday: 'Ontem',
  },
  protected: {
    denied: 'Você não tem permissão para fazer isso',
  },
  phoneText: {
    call: 'Ligar',
    whatsapp: 'Abrir no WhatsApp',
  },
  pagination: {
    label: 'Paginação',
    next: 'Próxima página',
    previous: 'Página anterior',
    range: (from, to, total) => `${from}-${to} de ${total}`,
    rowsPerPage: 'Linhas por página',
  },
  passwordInput: {
    hide: 'Ocultar senha',
    medium: 'Média',
    show: 'Mostrar senha',
    strong: 'Forte',
    veryStrong: 'Muito forte',
    veryWeak: 'Muito fraca',
    weak: 'Fraca',
  },
  queryDsl: {
    boolean_too_long: ({ max }) =>
      `Este filtro de sim/não pode ter no máximo ${max} caracteres.`,
    date_invalid: 'Esta data não existe ou está fora do intervalo aceito.',
    date_range_conflicting_bounds:
      'Os limites de data se contradizem. Use um início e um fim.',
    date_range_duplicated_operator:
      'Cada limite de data só pode aparecer uma vez.',
    date_range_empty: 'Nenhuma data cabe entre esses limites.',
    date_range_invalid_format: 'Este filtro de data não é válido.',
    date_range_too_long: ({ max }) =>
      `Este filtro de data pode ter no máximo ${max} caracteres.`,
    ids_invalid_value: 'Um destes identificadores não é válido.',
    ids_too_long: ({ max }) =>
      `Esta lista de identificadores pode ter no máximo ${max} caracteres.`,
    ids_too_many: ({ max }) => `Selecione no máximo ${max} itens.`,
    list_invalid_value: ({ allowed }) =>
      `Escolha entre: ${allowed.join(', ')}.`,
    list_too_long: ({ max }) =>
      `Esta lista pode ter no máximo ${max} caracteres.`,
    money_range_conflicting_bounds:
      'Os limites de valor se contradizem. Use um mínimo e um máximo.',
    money_range_duplicated_operator:
      'Cada limite de valor só pode aparecer uma vez.',
    money_range_empty: 'Nenhum valor cabe entre esses limites.',
    money_range_invalid_format: 'Este filtro de valor não é válido.',
    money_range_too_long: ({ max }) =>
      `Este filtro de valor pode ter no máximo ${max} caracteres.`,
    pagination_conflicting_cursors:
      'Avance ou volte, não os dois ao mesmo tempo.',
    pagination_cursor_too_long: ({ max }) =>
      `Este link de página pode ter no máximo ${max} caracteres.`,
    pagination_integer_invalid:
      'Número e tamanho de página aceitam só dígitos inteiros.',
    pagination_integer_too_long: ({ max }) =>
      `Este número ou tamanho de página pode ter no máximo ${max} caracteres.`,
    pagination_mixed_modes:
      'Use um número de página ou um cursor, não os dois.',
    range_conflicting_bounds:
      'Os limites se contradizem. Use um mínimo e um máximo.',
    range_duplicated_operator: 'Cada limite só pode aparecer uma vez.',
    range_empty: 'Nenhum valor cabe entre esses limites.',
    range_invalid_format: 'Este filtro numérico não é válido.',
    range_too_long: ({ max }) =>
      `Este filtro numérico pode ter no máximo ${max} caracteres.`,
    search_empty_term: 'Digite algo para buscar.',
    search_invalid_field: ({ allowed }) =>
      `Busque em um destes campos: ${allowed.join(', ')}.`,
    search_mode_not_allowed: ({ allowed }) =>
      `Esta busca aceita: ${allowed.join(', ')}.`,
    search_too_long: ({ max }) => `Busque com no máximo ${max} caracteres.`,
    sort_conflicting_direction:
      'Um campo não pode ser ordenado nos dois sentidos.',
    sort_invalid_field: ({ allowed }) =>
      `Ordene por um destes campos: ${allowed.join(', ')}.`,
    sort_too_long: ({ max }) =>
      `Esta ordenação pode ter no máximo ${max} caracteres.`,
    sort_too_many_fields: ({ max }) => `Ordene por no máximo ${max} campos.`,
    tags_invalid_value: ({ allowed, max_length }) =>
      allowed
        ? `Escolha tags entre: ${allowed.join(', ')}.`
        : `Cada tag pode ter no máximo ${max_length} caracteres.`,
    tags_too_long: ({ max }) =>
      `Esta lista de tags pode ter no máximo ${max} caracteres.`,
    tags_too_many: ({ max }) => `Use no máximo ${max} tags.`,
    timezone_invalid: 'Este fuso horário não é reconhecido.',
    timezone_too_long: ({ max }) =>
      `Este fuso horário pode ter no máximo ${max} caracteres.`,
  },
  search: {
    filters: 'Filtros',
    less: 'Ver menos',
    more: 'Ver mais',
    placeholder: 'Buscar',
    reset: 'Limpar',
  },
  select: {
    create: (query) => `Criar "${query}"`,
    error: 'Não foi possível carregar as opções',
  },
  spotlightSearch: {
    results: 'Resultados da busca',
  },
  stepper: {
    blocked: 'Conclua a etapa atual primeiro',
    completed: 'Concluído',
    finish: 'Concluir',
    next: 'Avançar',
    previous: 'Voltar',
    step: (active, total) => `Etapa ${active} de ${total}`,
  },
  table: {
    empty: 'Nenhum registro encontrado',
    emptyDescription: 'Quando houver registros, eles aparecem aqui.',
    error: 'Não foi possível carregar os registros',
    errorDescription: 'Verifique sua conexão e tente de novo.',
    selectAll: 'Selecionar todas as linhas',
    selectRow: (row) => (row ? `Selecionar linha ${row}` : 'Selecionar linha'),
  },
  tag: {
    remove: (label) => `Remover ${label}`,
  },
  timeInput: {
    hours: 'horas',
    minutes: 'minutos',
    seconds: 'segundos',
  },
  transfer: {
    allColumns: 'Todas as colunas',
    clearFilters: 'Limpar filtros',
    columns: 'Colunas',
    columnsChosen: (chosen, total) => `${chosen} de ${total}`,
    columnsNone: 'Escolha ao menos uma coluna',
    download: 'Baixar',
    downloadTemplate: 'Baixar o modelo',
    export: 'Exportar',
    exportDescription: (entity) =>
      `Escolha quais ${entity} saem, e em qual formato.`,
    exportTitle: (entity) => `Exportar ${entity}`,
    failureFileTooLarge: 'O arquivo passou do limite de tamanho',
    failureProcessing: 'Algo deu errado ao processar o arquivo',
    fileChosen: (name) => `${name} selecionado`,
    fileColumn: 'Coluna no seu arquivo',
    fileDetails: (encoding, delimiter) =>
      delimiter === null
        ? encoding.toUpperCase()
        : `${encoding.toUpperCase()} · separado por ${delimiter === '\t' ? 'tabulação' : delimiter}`,
    fileFailed: 'Não foi possível gerar o arquivo',
    filePending: 'Preparando o arquivo…',
    fileReady: 'O arquivo está pronto',
    fileTooLarge: (max) => `Esse arquivo passa de ${max}`,
    filters: 'Filtros',
    format: 'Formato',
    formatUnsupported: (formats) => `Escolha um arquivo ${formats}`,
    ignore: 'Não importar',
    import: 'Importar',
    importDescription: (entity) => `Traga ${entity} de um arquivo.`,
    importTitle: (entity) => `Importar ${entity}`,
    jobCounts: ({ failed, processed, total }) =>
      failed > 0
        ? `${processed} de ${total} linhas processadas · ${failed} com falha`
        : `${processed} de ${total} linhas processadas`,
    jobFailed: 'Falhou',
    jobQueued: 'Na fila',
    jobRunning: 'Em andamento',
    jobSucceeded: 'Concluído',
    mappingRequired: (label) => `${label} precisa de uma coluna`,
    previewDuplicateHeader: (header) =>
      `O arquivo tem a coluna “${header}” duas vezes`,
    previewEncoding:
      'Não é possível ler a codificação do arquivo. Salve em UTF-8 e tente de novo',
    previewNotArray: 'Um arquivo JSON precisa conter uma lista de linhas',
    previewNotice:
      'Este é o começo do arquivo. Toda linha é conferida na importação; as que falharem aparecem com o motivo.',
    previewRows: (rows) =>
      rows === 1 ? 'Primeira linha' : `Primeiras ${rows} linhas`,
    previewUnreadable:
      'Não foi possível ler o arquivo: nenhum cabeçalho com linhas abaixo',
    previewWarnings: (rows) =>
      rows === 1 ? '1 com aviso' : `${rows} com aviso`,
    recordExported: 'Exportada',
    recordFailed: 'Falhou',
    recordImported: 'Importada',
    recordPending: 'Pendente',
    recordRow: 'Linha',
    recordStatus: 'Resultado',
    resultLater:
      'Isso continua em andamento depois que você fechar. Acompanhe o resultado na página:',
    rowError: (code) =>
      ROW_ERRORS_PT_BR.get(code) ?? `Não foi possível processar (${code})`,
    sending: 'Enviando a solicitação…',
    stepData: 'Dados',
    stepDone: 'Resultado',
    stepFile: 'Arquivo',
    stepMap: 'Colunas',
    stepPreview: 'Prévia',
    uploading: 'Enviando o arquivo…',
  },
  unsaved: {
    cancel: 'Seguir editando',
    confirm: 'Sair sem salvar',
    description: 'Você tem alterações não salvas. Sair agora vai descartá-las.',
    title: 'Sair sem salvar?',
  },
}
