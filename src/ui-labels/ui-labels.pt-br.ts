import type { UiLabels } from './ui-labels.types.js'

/**
 * Portuguese (Brazil).
 *
 * Written against how these components are actually spoken about in Brazilian
 * products, not word for word off the English. `Show document number` is
 * `Mostrar documento`, because nobody here says "número do documento" out loud.
 */
export const uiLabelsPtBr: UiLabels = {
  booleanText: {
    active: 'Ativo',
    disabled: 'Desabilitado',
    enabled: 'Habilitado',
    inactive: 'Inativo',
    no: 'Não',
    yes: 'Sim',
  },
  breadcrumb: {
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
  colorPicker: {
    selectColor: 'Selecionar cor',
    transparent: 'Transparente',
  },
  common: {
    apply: 'Aplicar',
    cancel: 'Cancelar',
    clear: 'Limpar',
    close: 'Fechar',
    copied: 'Copiado',
    copy: 'Copiar',
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
    rangePlaceholder: 'Filtrar por valor',
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
  editableText: {
    edit: 'Editar',
    empty: 'Vazio',
    error: 'Não deu certo. Tente de novo.',
    save: 'Salvar',
  },
  list: {
    empty: 'Nenhum dado encontrado',
    error: 'Não foi possível carregar os dados',
    loadMore: 'Carregar mais',
  },
  loader: {
    loading: 'Carregando',
  },
  phoneText: {
    call: 'Ligar',
    whatsapp: 'Abrir no WhatsApp',
  },
  pagination: {
    range: (from, to, total) => `${from}-${to} de ${total}`,
    rowsPerPage: 'Linhas por página',
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
  stepper: {
    completed: 'Concluído',
    finish: 'Concluir',
    next: 'Avançar',
    previous: 'Voltar',
    step: (active, total) => `Etapa ${active} de ${total}`,
  },
  table: {
    empty: 'Nenhum registro encontrado',
    error: 'Não foi possível carregar os registros',
  },
  transfer: {
    allColumns: 'Todas as colunas',
    alwaysIncluded: 'Sempre incluída',
    clearFilters: 'Limpar filtros',
    columns: 'Colunas',
    columnsChosen: (chosen, total) => `${chosen} de ${total}`,
    downloadErrors: 'Baixar as linhas que falharam',
    downloadTemplate: 'Baixar o modelo',
    export: 'Exportar',
    exportDescription: (entity) =>
      `Escolha quais ${entity} saem, e em qual formato.`,
    exportTitle: (entity) => `Exportar ${entity}`,
    fileChosen: (name) => `${name} selecionado`,
    fileColumn: 'Coluna no seu arquivo',
    filters: 'Filtros',
    format: 'Formato',
    ignore: 'Não importar',
    import: 'Importar',
    importDescription: (entity) => `Traga ${entity} de um arquivo.`,
    importTitle: (entity) => `Importar ${entity}`,
    imported: (created, failed) =>
      failed > 0
        ? `${created} importados, ${failed} recusados`
        : `${created} importados`,
    mappingRequired: (label) => `${label} precisa de uma coluna`,
    rowsFound: (rows) => `${rows} linhas encontradas`,
    rowsReady: (ready, total) => `${ready} de ${total} linhas prontas`,
    rowsRefused: (rows) => `${rows} recusadas`,
    rowsTooMany: (max) => `Esse arquivo tem mais de ${max} linhas`,
    stepDone: 'Resultado',
    stepFile: 'Arquivo',
    stepMap: 'Colunas',
    stepReview: 'Conferência',
  },
  unsaved: {
    cancel: 'Seguir editando',
    confirm: 'Sair sem salvar',
    description: 'Você tem alterações não salvas. Sair agora vai descartá-las.',
    title: 'Sair sem salvar?',
  },
}
