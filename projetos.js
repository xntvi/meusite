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
  //  PROJETO: ATIVAÇÃO MIX MATHEUS — COCA-COLA CARNAVAL 2025
  // ──────────────────────────────────────────────────────────
  {
    slug: 'coca-cola-carnaval-2025',
    title: 'COCA-COLA CARNAVAL',
    year: '2025',
    category: 'DIREÇÃO DE ARTE',
    categorySlug: 'direcao-arte 3d design-grafico',
    role: 'DIREÇÃO DE ARTE',
    tags: ['Direção de Arte', '3D', 'Design Gráfico', 'Blender'],
    client: 'Coca-Cola Brasil',
    clientRole: 'Agência DVRGNT — Ativação Mix Matheus',
    heroImg: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/40075a231613777.688c3a9df30f1.png',
    intro: 'Em janeiro de 2025, participei deste projeto em colaboração com a equipe da Divergente, assinando a Direção de Arte, modelagem 3D e composição visual para a ativação de Carnaval da Coca-Cola no Mix Matheus.',
    body: 'A identidade visual criada seguiu fiel ao espírito vibrante do Carnaval, reforçando a presença da Coca-Cola com energia e impacto. O projeto foi essencial para testar ideias e traduzir conceitos 3D em equipe com ritmo e propósito.',
    quote: 'A identidade visual seguiu fiel ao espírito vibrante do Carnaval, reforçando a presença da Coca-Cola com energia e impacto.',
    details: [
      { label: 'ANO',         value: '2025' },
      { label: 'FERRAMENTAS', value: 'Blender 3D, Photoshop' },
      { label: 'AGÊNCIA',     value: 'DVRGNT' },
      { label: 'ÁREA',        value: 'Direção de Arte + 3D' },
      { label: 'EVENTO',      value: 'Carnaval / Mix Matheus' },
      { label: 'CLIENTE',     value: 'Coca-Cola Brasil' },
    ],
    gallery: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/40075a231613777.688c3a9df30f1.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b9cb5c231613777.688c3a9df2783.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/1f4863231613777.688c3e9cb8ca5.png',
    ],
    video: null,
  },

  // ──────────────────────────────────────────────────────────
  //  PROJETO: STU 2023 — ESPORTES DA SORTE RECIFE
  // ──────────────────────────────────────────────────────────
  {
    slug: 'stu-2023',
    title: 'STU 2023',
    year: '2023',
    category: 'EDIÇÃO DE VÍDEO',
    categorySlug: 'video-editing direcao-arte',
    role: 'DIREÇÃO DE FOTOGRAFIA',
    tags: ['Edição de Vídeo', 'Fotografia', 'VFX', 'Recife'],
    client: 'Esportes da Sorte',
    clientRole: 'Agência DVRGNT — STU Skate Total Urbe 2023',
    heroImg: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/35602a220738855.67c8620ae5a84.png',
    intro: 'Tive o prazer de contribuir no STU Skate Total Urbe 2023 como Diretor de Fotografia pela agência DVRGNT, captando as ativações da Esportes da Sorte em Recife.',
    body: 'Junto ao time — Enrico (Fotografia e Ass. Captação de Vídeos) e Junior (Jive) — toda a cobertura foi editada e montada para apresentar com impacto a energia do evento e da marca patrocinadora.',
    quote: 'Capturar o STU foi traduzir velocidade, adrenalina e marca em um único frame.',
    details: [
      { label: 'ANO',         value: '2023' },
      { label: 'FERRAMENTAS', value: 'Premiere Pro, After Effects' },
      { label: 'AGÊNCIA',     value: 'DVRGNT' },
      { label: 'EVENTO',      value: 'STU Skate Total Urbe' },
      { label: 'FUNÇÃO',      value: 'Dir. Fotografia + Edição' },
      { label: 'CLIENTE',     value: 'Esportes da Sorte' },
    ],
    gallery: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/35602a220738855.67c8620ae5a84.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/7c7bd9220738855.67c8620ae4b62.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/781f14220738855.67c8620ae5307.png',
    ],
    video: null,
  },

  // ──────────────────────────────────────────────────────────
  //  PROJETO: KALERA
  // ──────────────────────────────────────────────────────────
  {
    slug: 'kalera',
    title: 'KALERA',
    year: '2022',
    category: 'DESIGN GRÁFICO',
    categorySlug: 'design-grafico',
    role: 'DESIGN GRÁFICO',
    tags: ['Design Gráfico', 'Thumbnails', 'Social Media', 'FURIA'],
    client: 'Kalera / FURIA',
    clientRole: 'Streamer & Criadora de conteúdo — FURIA',
    heroImg: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/57c16f145289651.629b959114636.png',
    intro: 'Camila Viera "Kalera" é cantora, dubladora, desenhista e streamer da FURIA. O projeto focou em redesenhar as thumbnails do canal com identidade visual atualizada e direcionada ao público.',
    body: 'Em parceria com o designer Lucas Fonseca, desenvolvemos briefings específicos para cada peça. O resultado foi uma identidade mais coesa e chamativa — thumbnails com fotos atuais da Kalera e muito mais presença visual.',
    quote: 'Thumbnails são a primeira impressão — precisavam contar a história antes do clique.',
    details: [
      { label: 'ANO',         value: '2022' },
      { label: 'FERRAMENTAS', value: 'Photoshop, Illustrator' },
      { label: 'ÁREA',        value: 'Design Gráfico / Social Media' },
      { label: 'TIPO',        value: 'Thumbnails + Identidade Visual' },
      { label: 'PARCERIA',    value: 'Lucas Fonseca (Design)' },
      { label: 'CLIENTE',     value: 'Kalera / FURIA' },
    ],
    gallery: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/57c16f145289651.629b959114636.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/05fcfe145289651.629b95906c44a.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/ab0a8f145289651.629b95906bb86.jpg',
    ],
    video: null,
  },

  // ──────────────────────────────────────────────────────────
  //  PROJETO: GAMEPLAN | VIDEO TRAILER
  // ──────────────────────────────────────────────────────────
  {
    slug: 'gameplan',
    title: 'GAMEPLAN',
    year: '2022',
    category: 'EDIÇÃO DE VÍDEO',
    categorySlug: 'video-editing motion-design',
    role: 'VIDEO EDITING',
    tags: ['Edição de Vídeo', 'Motion Design', 'Trailer', 'GameTech'],
    client: 'GamePlan',
    clientRole: 'Gametech — mercado de jogos',
    heroImg: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/de626e144297699.628a453bd9b1a.png',
    intro: 'A GamePlan é uma gametech criada em 2014 que fornece desenvolvimento e tecnologia para empresas no mercado de jogos, com soluções de co-desenvolvimento, tecnologia, dados e inteligência.',
    body: 'O trailer foi desenvolvido para apresentar a plataforma de forma dinâmica e impactante, traduzindo em linguagem audiovisual a proposta de inovação e tecnologia da GamePlan para o setor de games.',
    quote: 'Traduzir tecnologia em narrativa audiovisual é o desafio mais estimulante.',
    details: [
      { label: 'ANO',         value: '2022' },
      { label: 'FERRAMENTAS', value: 'Premiere Pro, After Effects' },
      { label: 'TIPO',        value: 'Video Trailer' },
      { label: 'ÁREA',        value: 'Edição + Motion Design' },
      { label: 'FORMATO',     value: 'Digital / YouTube' },
      { label: 'CLIENTE',     value: 'GamePlan' },
    ],
    gallery: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/de626e144297699.628a453bd9b1a.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/495557144297699.628a42ed34ec2.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/de626e144297699.628a453bd9b1a.png',
    ],
    video: null,
  },

  // ──────────────────────────────────────────────────────────
  //  PROJETO: FLYING HIGH — 3D
  // ──────────────────────────────────────────────────────────
  {
    slug: 'flying-high',
    title: 'FLYING HIGH',
    year: '2021',
    category: 'MODELAGEM 3D',
    categorySlug: '3d',
    role: '3D',
    tags: ['3D', 'Streetwear', 'Product Visualization', 'Blender'],
    client: 'Urban Joy',
    clientRole: 'Loja de streetwear — projeto pessoal',
    heroImg: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/5dc3d0123129763.60e7d928cebdc.png',
    intro: 'Projeto pessoal de modelagem e visualização 3D desenvolvido para a Urban Joy, loja brasileira do segmento streetwear.',
    body: 'Cada cena foi construída com atenção a iluminação, texturas e composição para entregar visuais com presença de mundo real. A proposta era criar renders que traduzissem a identidade streetwear da marca em composições tridimensionais impactantes.',
    quote: 'O 3D precisava ter textura, peso e a atitude do streetwear.',
    details: [
      { label: 'ANO',         value: '2021' },
      { label: 'FERRAMENTAS', value: 'Blender 3D' },
      { label: 'TIPO',        value: 'Product Visualization' },
      { label: 'ENTREGA',     value: 'Stills + GIF animado' },
      { label: 'SEGMENTO',    value: 'Streetwear' },
      { label: 'CLIENTE',     value: 'Urban Joy' },
    ],
    gallery: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/disp/5dc3d0123129763.60e7d928cebdc.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/disp/383e44123129763.60e7d928ce0ba.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b74210123129763.60e7d928ce68f.png',
    ],
    video: null,
  },

  // ──────────────────────────────────────────────────────────
  //  PROJETO: VIDA CARA DELUXE — OROCHI
  // ──────────────────────────────────────────────────────────
  {
    slug: 'vida-cara-deluxe',
    title: 'VIDA CARA DELUXE',
    year: '2023',
    category: 'MODELAGEM 3D',
    categorySlug: '3d',
    role: '3D',
    tags: ['3D', 'Blender', 'Album Art', 'Orochi'],
    client: 'Orochi',
    clientRole: 'Colaboração criativa — arte do álbum',
    heroImg: 'img/vida-cara/cover.jpg',
    intro: 'Participação na arte do álbum "Vida Cara Deluxe" do Orochi, desenvolvendo o modelo 3D em colaboração com @chestte.r e @ferbersa.art.',
    body: 'Cada detalhe do modelo foi construído com atenção ao universo visual do projeto. Um trabalho que marcou uma etapa importante da trajetória em 3D, junto a artistas que estão em outro nível.',
    quote: 'Toda vez que olho vem aquele conforto de que o tempo investido em mim tá rendendo.',
    details: [
      { label: 'ANO',         value: '2023' },
      { label: 'FERRAMENTAS', value: 'Blender 3D' },
      { label: 'TIPO',        value: 'Album Art / 3D' },
      { label: 'COLABS',      value: '@chestte.r, @ferbersa.art' },
      { label: 'ENTREGA',     value: 'Stills' },
      { label: 'CLIENTE',     value: 'Orochi' },
    ],
    gallery: [
      'img/vida-cara/cover.jpg',
      'img/vida-cara/gallery-1.jpg',
      'img/vida-cara/gallery-2.jpg',
    ],
    video: null,
  },

  // ──────────────────────────────────────────────────────────
  //  PROJETO: CASA DA BARRA — CARLINHOS MAIA
  // ──────────────────────────────────────────────────────────
  {
    slug: 'casa-da-barra',
    title: 'CASA DA BARRA',
    year: '2024',
    category: 'EDIÇÃO DE VÍDEO',
    categorySlug: 'video-editing direcao-arte',
    role: 'EDIÇÃO / DIREÇÃO DE ARTE',
    tags: ['Edição de Vídeo', '3D', 'Direção de Arte', 'Blender'],
    client: 'Carlinhos Maia',
    clientRole: 'Agência Divergente — captação e edição',
    heroImg: 'img/casa-da-barra/cover.jpg',
    intro: 'Projeto desenvolvido para a Agência Divergente captando e editando o material da Casa da Barra do Carlinhos Maia em Maceió — uma experiência única que juntou produção audiovisual e 3D num só projeto.',
    body: 'A Terra 3D foi desenvolvida no Blender, e toda a edição final passou pelo DaVinci Resolve. Contou ainda com filmagens do @lucasg.editor para complementar a cobertura do espaço.',
    quote: 'Quão longe já fui — o tanto de gente que viu meu trabalho e curtiu.',
    details: [
      { label: 'ANO',         value: '2024' },
      { label: 'FERRAMENTAS', value: 'Blender, DaVinci Resolve' },
      { label: 'AGÊNCIA',     value: 'Divergente' },
      { label: 'FUNÇÃO',      value: 'Captação + Edição + 3D' },
      { label: 'LOCAL',       value: 'Maceió, AL' },
      { label: 'CLIENTE',     value: 'Carlinhos Maia' },
    ],
    gallery: [
      'img/casa-da-barra/cover.jpg',
      'img/casa-da-barra/gallery-1.jpg',
      'img/casa-da-barra/gallery-2.jpg',
    ],
    video: 'https://www.instagram.com/reel/C4yDdPPM79d/embed',
  },

  // ──────────────────────────────────────────────────────────
  //  PROJETO: BY NEVOA — 3D FASHION
  // ──────────────────────────────────────────────────────────
  {
    slug: 'by-nevoa',
    title: 'BY NEVOA',
    year: '2025',
    category: 'MODELAGEM 3D',
    categorySlug: '3d design-grafico',
    role: '3D / DESIGN GRÁFICO',
    tags: ['3D', 'Fashion', 'Blender', 'Product Design'],
    client: 'By Nevoa',
    clientRole: 'Coleção cápsula — Festival Noar',
    heroImg: 'img/by-nevoa/cover.jpg',
    intro: 'Colaboração com a By Nevoa para a Feira das Feiras — uma coleção cápsula de bonés customizados exclusivos para o Festival Noar, em parceria com a Futuro Black.',
    body: 'Os bonés foram visualizados em 3D, traduzindo a identidade da marca em peças únicas para o evento. Um projeto que une moda, cultura e modelagem digital.',
    quote: 'Moda, cultura e 3D se encontrando num único projeto — é exatamente nisso que acredito.',
    details: [
      { label: 'ANO',         value: '2025' },
      { label: 'FERRAMENTAS', value: 'Blender 3D' },
      { label: 'TIPO',        value: '3D Fashion / Product Design' },
      { label: 'EVENTO',      value: 'Festival Noar' },
      { label: 'PARCERIA',    value: 'Futuro Black' },
      { label: 'CLIENTE',     value: 'By Nevoa' },
    ],
    gallery: [
      'img/by-nevoa/cover.jpg',
      'img/by-nevoa/gallery-1.jpg',
      'img/by-nevoa/gallery-2.jpg',
    ],
    video: 'https://www.instagram.com/reel/DR7MWFSDYUY/embed',
  },

  // ──────────────────────────────────────────────────────────
  //  PROJETO: BIENAL PE — DIREÇÃO DE ANIMAÇÃO
  // ──────────────────────────────────────────────────────────
  {
    slug: 'bienal-pe',
    title: 'BIENAL PE',
    year: '2025',
    category: 'MOTION DESIGN',
    categorySlug: 'motion-design direcao-arte',
    role: 'DIREÇÃO DE ANIMAÇÃO',
    tags: ['Motion Design', 'Animação', 'Direção de Arte', 'TV'],
    client: 'XV Bienal Internacional do Livro de PE',
    clientRole: 'Agência Amarelo — veiculação Globo PE / TV Jornal SBT',
    heroImg: 'img/bienal-pe/cover.jpg',
    intro: 'Direção de animação do comercial da XV Bienal Internacional do Livro de Pernambuco, em colaboração com a Agência Amarelo. Veiculado na Globo Pernambuco e TV Jornal SBT.',
    body: 'Um projeto que exigiu entrar em terrenos novos: registro na ANCINE, CRT, formatos de TV e direção de narração. A narração ficou com @chocoresco_, que deu mais vida à obra. Apesar dos desafios pessoais do período, é um trabalho que carrega história e orgulho.',
    quote: 'Se você vir esse projeto animado na sua TV — eu fiz parte disso.',
    details: [
      { label: 'ANO',         value: '2025' },
      { label: 'FERRAMENTAS', value: 'After Effects, Blender' },
      { label: 'AGÊNCIA',     value: 'Agência Amarelo' },
      { label: 'VEICULAÇÃO',  value: 'Globo PE + TV Jornal SBT' },
      { label: 'FUNÇÃO',      value: 'Direção de Animação' },
      { label: 'CLIENTE',     value: 'Bienal Internacional do Livro PE' },
    ],
    gallery: [
      'img/bienal-pe/cover.jpg',
      'img/bienal-pe/gallery-1.jpg',
      'img/bienal-pe/gallery-2.jpg',
    ],
    video: 'https://www.instagram.com/p/DOly-gJlWVg/embed',
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
