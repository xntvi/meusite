// ============================================================
//  PROJETOS.JS — Arquivo de configuração de projetos XNT
//  ============================================================
//  Como adicionar um novo projeto:
//  1. Copie o bloco de exemplo abaixo
//  2. Cole antes do ]; no final
//  3. Preencha os campos (veja o guia em cada campo)
//  4. Salve e recarregue a página
// ============================================================

const PROJECTS = [

  // ──────────────────────────────────────────────────────────
  //  PROJETO: COCA-COLA
  // ──────────────────────────────────────────────────────────
  {
    // IDENTIFICADOR — use apenas letras minúsculas e hífens, sem espaços
    slug: 'coca-cola',

    // TÍTULO do card e da página de projeto (MAIÚSCULAS recomendado)
    title: 'COCA-COLA',

    // ANO de realização
    year: '2025',

    // CATEGORIA exibida no topo da página de projeto
    category: 'MOTION DESIGN',

    // SLUG DA CATEGORIA — usado nos filtros. Valores disponíveis:
    // '3d' | 'motion-design' | 'design-grafico' | 'ui-ux' | 'direcao-arte' | 'video-editing'
    // Para múltiplas categorias, separe com espaço: 'video-editing direcao-arte'
    categorySlug: 'motion-design',

    // FUNÇÃO exibida no card
    role: 'MOTION DESIGN',

    // TAGS exibidas na página de projeto (array de strings)
    tags: ['Motion Design', 'After Effects', 'Cinema 4D'],

    // CLIENTE principal
    client: 'Coca-Cola Brasil',

    // SUBTÍTULO DO CLIENTE (agência, tipo de parceria, etc.)
    clientRole: 'Parceria / Agência intermediária',

    // IMAGEM PRINCIPAL — URL da imagem de capa (hero)
    // Dica: use imagens com no mínimo 1600px de largura para boa qualidade
    heroImg: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop',

    // TEXTO DE INTRODUÇÃO — primeiro parágrafo da página de projeto
    intro: 'Projeto de motion design desenvolvido para uma campanha digital da Coca-Cola Brasil, com foco em redes sociais e ativações de marca.',

    // TEXTO DO CORPO — segundo parágrafo da página de projeto
    body: 'Cada quadro foi cuidadosamente construído frame a frame, combinando elementos da identidade visual histórica da marca com tratamentos contemporâneos.',

    // CITAÇÃO — frase em destaque na página de projeto
    quote: 'A direção criativa exigiu um equilíbrio delicado entre inovação visual e respeito ao legado da marca.',

    // DETALHES TÉCNICOS — grid de informações na página de projeto
    // Máximo recomendado: 6 itens
    details: [
      { label: 'ANO',        value: '2025' },
      { label: 'FERRAMENTAS', value: 'After Effects, Cinema 4D, Illustrator' },
      { label: 'DURAÇÃO',    value: '15s / 30s' },
      { label: 'FORMATO',    value: 'Feed, Stories, Reels' },
      { label: 'ENTREGA',    value: '4K / H.264' },
      { label: 'CLIENTE',    value: 'Coca-Cola Brasil' },
    ],

    // GALERIA — array de 3 URLs de imagens (use a mesma heroImg se não tiver mais)
    gallery: [
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567529684892-09290a1b2d05?q=80&w=1200&auto=format&fit=crop',
    ],

    // VÍDEO — URL de embed do YouTube/Vimeo, ou null se não tiver
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },

  // ──────────────────────────────────────────────────────────
  //  PROJETO: CARNAVAL
  // ──────────────────────────────────────────────────────────
  {
    slug: 'carnaval',
    title: 'CARNAVAL',
    year: '2024',
    category: 'EDIÇÃO DE VÍDEO',
    categorySlug: 'video-editing',
    role: 'VIDEO EDITING',
    tags: ['Edição de Vídeo', 'Color Grading', 'Recife'],
    client: 'Prefeitura do Recife',
    clientRole: 'Cliente direto / Comunicação institucional',
    heroImg: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=1600&auto=format&fit=crop',
    intro: 'Cobertura audiovisual do Carnaval do Recife 2024, com foco em conteúdo para múltiplas plataformas.',
    body: 'A edição priorizou ritmo, energia e coerência narrativa, traduzindo o frevo e a força visual da festa em peças dinâmicas.',
    quote: 'Cobrir o Carnaval do Recife é tentar capturar movimento contínuo sem perder clareza.',
    details: [
      { label: 'ANO',       value: '2024' },
      { label: 'FERRAMENTAS', value: 'Premiere Pro, DaVinci Resolve' },
      { label: 'DURAÇÃO',   value: '60s / 90s / 3min' },
      { label: 'FORMATO',   value: 'YouTube, TV, Social' },
      { label: 'CAPTAÇÃO',  value: '4K / Sony FX3' },
      { label: 'CIDADE',    value: 'Recife, PE' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1570824104453-508955ab713e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200&auto=format&fit=crop',
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },

  // ──────────────────────────────────────────────────────────
  //  PROJETO: GUARARAPES
  // ──────────────────────────────────────────────────────────
  {
    slug: 'guararapes',
    title: 'GUARARAPES',
    year: '2025',
    category: 'EDIÇÃO DE VÍDEO',
    categorySlug: 'video-editing direcao-arte',
    role: 'DIREÇÃO DE ARTE',
    tags: ['Edição de Vídeo', 'Direção de Arte', 'Varejo'],
    client: 'Shopping Guararapes',
    clientRole: 'Agência ANDC — Cliente final: Shopping Guararapes',
    heroImg: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1600&auto=format&fit=crop',
    intro: 'Campanha audiovisual desenvolvida para o Shopping Guararapes, maior shopping de Pernambuco.',
    body: 'A proposta criativa focou em humanizar o espaço do shopping, mostrando experiências, circulação e relacionamento com o público.',
    quote: 'O desafio era mostrar o sentimento de pertencimento que um espaço como esse cria na vida das pessoas.',
    details: [
      { label: 'ANO',       value: '2025' },
      { label: 'FERRAMENTAS', value: 'Premiere, After Effects' },
      { label: 'AGÊNCIA',   value: 'ANDC' },
      { label: 'FORMATO',   value: 'TV, Digital, OOH' },
      { label: 'FUNÇÃO',    value: 'Dir. Arte + Edição' },
      { label: 'CLIENTE',   value: 'Shopping Guararapes' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop',
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },

  // ──────────────────────────────────────────────────────────
  //  PROJETO: OROCHI
  // ──────────────────────────────────────────────────────────
  {
    slug: 'orochi',
    title: 'OROCHI',
    year: '2023',
    category: 'MODELAGEM 3D',
    categorySlug: '3d',
    role: '3D',
    tags: ['3D', 'Cinema 4D', 'Octane Render', 'VFX'],
    client: 'Orochi / Mainstreet',
    clientRole: 'Colaboração criativa — coleção de streetwear',
    heroImg: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1600&auto=format&fit=crop',
    intro: 'Projeto de modelagem e visualização 3D para a coleção Mainstreet da marca Orochi.',
    body: 'Cada modelo foi construído com atenção às proporções reais das peças, com iluminação dramática e texturas realistas.',
    quote: 'O 3D precisava ter textura, peso e presença de mundo real.',
    details: [
      { label: 'ANO',        value: '2023' },
      { label: 'FERRAMENTAS', value: 'Cinema 4D, Octane, Substance' },
      { label: 'TIPO',       value: 'Product Visualization' },
      { label: 'ENTREGA',    value: 'Stills + Animation' },
      { label: 'RESOLUÇÃO',  value: '4K / 8K stills' },
      { label: 'MARCA',      value: 'Orochi x Mainstreet' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1200&auto=format&fit=crop',
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },

  // ──────────────────────────────────────────────────────────
  //  PROJETO: PROJETO C (em andamento)
  // ──────────────────────────────────────────────────────────
  {
    slug: 'projeto-c',
    title: 'PROJETO C',
    year: '—',
    category: 'DESIGN GRÁFICO',
    categorySlug: 'design-grafico',
    role: 'DESIGN GRÁFICO',
    tags: ['Design Gráfico', 'Em breve'],
    client: 'Em andamento',
    clientRole: 'NDA — Em desenvolvimento',
    heroImg: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop',
    intro: 'Projeto confidencial atualmente em desenvolvimento.',
    body: 'Detalhes completos serão revelados após o lançamento oficial da marca.',
    quote: 'Às vezes o melhor projeto é aquele que ainda não pode ser mostrado.',
    details: [
      { label: 'STATUS',    value: 'Em andamento' },
      { label: 'PREVISÃO',  value: '2025' },
      { label: 'ÁREA',      value: 'Design Gráfico' },
      { label: 'NDA',       value: 'Sim' },
      { label: 'TIPO',      value: 'Identidade Visual' },
      { label: 'CLIENTE',   value: 'Confidencial' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?q=80&w=1200&auto=format&fit=crop',
    ],
    video: null,
  },

  // ──────────────────────────────────────────────────────────
  //  PROJETO: PROJETO D (em andamento)
  // ──────────────────────────────────────────────────────────
  {
    slug: 'projeto-d',
    title: 'PROJETO D',
    year: '—',
    category: 'UI/UX',
    categorySlug: 'ui-ux',
    role: 'UI/UX',
    tags: ['UI/UX', 'Figma', 'Em breve'],
    client: 'Em andamento',
    clientRole: 'NDA — Em desenvolvimento',
    heroImg: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1600&auto=format&fit=crop',
    intro: 'Interface e experiência de usuário em desenvolvimento para uma plataforma digital.',
    body: 'O processo passa por pesquisa, wireframes e protótipos de alta fidelidade com foco em clareza e acessibilidade.',
    quote: 'UI/UX bem feito é invisível para o usuário.',
    details: [
      { label: 'STATUS',     value: 'Em andamento' },
      { label: 'PREVISÃO',   value: '2025' },
      { label: 'ÁREA',       value: 'UI/UX Design' },
      { label: 'FERRAMENTA', value: 'Figma' },
      { label: 'TIPO',       value: 'Digital Product' },
      { label: 'CLIENTE',    value: 'Confidencial' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop',
    ],
    video: null,
  },

  // ══════════════════════════════════════════════════════════
  //  ► ADICIONE NOVOS PROJETOS AQUI ◄
  //  Copie o bloco abaixo, remova os comentários e preencha:
  // ══════════════════════════════════════════════════════════

  // {
  //   slug: 'meu-novo-projeto',          // identificador único, sem espaços
  //   title: 'NOME DO PROJETO',
  //   year: '2025',
  //   category: 'MOTION DESIGN',
  //   categorySlug: 'motion-design',     // veja opções no topo do arquivo
  //   role: 'MOTION DESIGN',
  //   tags: ['Tag 1', 'Tag 2'],
  //   client: 'Nome do Cliente',
  //   clientRole: 'Tipo de parceria',
  //   heroImg: 'URL_DA_IMAGEM_PRINCIPAL',
  //   intro: 'Primeiro parágrafo descritivo.',
  //   body: 'Segundo parágrafo com detalhes do processo.',
  //   quote: 'Uma frase que resume o projeto.',
  //   details: [
  //     { label: 'ANO',         value: '2025' },
  //     { label: 'FERRAMENTAS', value: 'After Effects' },
  //     { label: 'FORMATO',     value: 'Reels' },
  //     { label: 'CLIENTE',     value: 'Nome do Cliente' },
  //   ],
  //   gallery: [
  //     'URL_IMAGEM_1',
  //     'URL_IMAGEM_2',
  //     'URL_IMAGEM_3',
  //   ],
  //   video: null,   // ou: 'https://www.youtube.com/embed/SEU_ID_AQUI'
  // },

];
