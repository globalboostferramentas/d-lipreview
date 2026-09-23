import type { Categoria, Produto } from "@/lib/tipos";

/**
 * CATALOGO OFICIAL.
 *
 * Origem: cardapio/cardapio.pdf, edicao de agosto, 44 paginas.
 * Cada produto anota a pagina de onde saiu.
 *
 * Nome, descricao, peso, rendimento e preco foram transcritos do PDF. Em oito
 * paginas a ordem de leitura do texto nao corresponde a ordem visual, o que
 * trocaria precos entre produtos vizinhos. Essas paginas (10, 13, 15, 16, 17,
 * 19, 20, 28, 31, 42) foram conferidas na imagem renderizada, produto a produto.
 *
 * Nada foi inferido. Onde o cardapio nao informa peso ou rendimento, o campo
 * simplesmente nao existe.
 */

export const categorias: Categoria[] = [
  {
    id: "focaccias",
    nome: "Focaccias",
    slug: "focaccias",
    definicao:
      "As focaccias da DÉLI são feitas com fermentação natural e até 36 horas de fermentação, e finalizadas com alecrim e flor de sal na hora de ir ao forno.",
    introducao:
      "Massa exclusiva e feita artesanalmente com fermentação natural. Os ingredientes são farinhas importadas, azeite extra virgem, água e levain. Uma preparação feita lentamente, com vários processos e etapas, para garantir uma fermentação diferenciada e, por isso, um sabor único. Além de qualidade e digestibilidade acima da média, graças a até 36 horas de fermentação. O cardápio começa com ela, e todos os itens foram pensados na harmonização ideal para acompanhá-la.",
    ordem: 1,
    publicada: true,
  },
  {
    id: "acompanhamentos",
    nome: "Acompanhamentos",
    slug: "acompanhamentos",
    definicao:
      "Os acompanhamentos da DÉLI são mousses, queijos de colher e caponata, servidos frios, feitos para acompanhar a focaccia e os crocantes.",
    ordem: 2,
    publicada: true,
  },
  {
    id: "especiais",
    nome: "Especiais",
    slug: "especiais",
    definicao:
      "Os especiais da DÉLI são peças de destaque para o centro da mesa: torta de figo, esfera caprese e kit burrata.",
    ordem: 3,
    publicada: true,
  },
  {
    id: "bries",
    nome: "Bries",
    slug: "bries",
    definicao:
      "Os bries da DÉLI são peças inteiras de brie assadas em massa folhada ou phyllo, finalizadas com compota ou geleia artesanal, para servir quentes com o queijo derretendo.",
    introducao:
      "Uma peça inteira de Brie, para servir quente com queijo derretendo, entregue assada em massa folhada ou phyllo, finalizada com compota ou geleia artesanal exclusiva. Com instruções detalhadas para esquentar, servir e ser o destaque na sua mesa.",
    ordem: 4,
    publicada: true,
  },
  {
    id: "terrines",
    nome: "Terrines",
    slug: "terrines",
    definicao:
      "As terrines da DÉLI são peças frias de 600 a 650 gramas, para 8 a 10 pessoas, finalizadas na hora do envio.",
    ordem: 5,
    publicada: true,
  },
  {
    id: "quiches",
    nome: "Quiches",
    slug: "quiches",
    definicao:
      "As quiches da DÉLI têm 20 centímetros e cerca de 1,5 quilo, rendem 8 a 10 fatias, e são montadas e assadas na hora de sair da cozinha.",
    introducao:
      "As clássicas, amadas e que são sucesso nos eventos, agora entram para o menu de entregas, com recheios que são os mais escolhidos no menu de buffet. Com massa artesanal, recheio fresco, montadas e assadas na hora de sair da cozinha.",
    ordem: 6,
    publicada: true,
  },
  {
    id: "carnes",
    nome: "Carnes",
    slug: "carnes",
    definicao:
      "As carnes da DÉLI são o filé Wellington, a torre de roast beef e o carpaccio de carne, todos servidos frios ou mornos.",
    ordem: 7,
    publicada: true,
  },
  {
    id: "crocantes",
    nome: "Crocantes",
    slug: "crocantes",
    definicao:
      "Os crocantes da DÉLI são o crostini de parmesão e o crocante de polvilho, feitos para acompanhar os acompanhamentos e completar a mesa posta.",
    ordem: 8,
    publicada: true,
  },
  {
    id: "delis",
    nome: "Délis",
    slug: "delis",
    definicao:
      "Os délis são os itens avulsos da DÉLI: conservas, cremes, manteigas e charcutaria, vendidos separadamente para completar a mesa.",
    ordem: 9,
    publicada: true,
  },
  {
    id: "kits",
    nome: "Kits",
    slug: "kits",
    definicao:
      "Os kits da DÉLI são seleções fechadas montadas pela Chef Júlia Andrade, de 2 a 25 pessoas, entregues em embalagens descartáveis prontas para montar e servir.",
    introducao:
      "Kits e seleções exclusivas criados pela chef para servir com elegância, praticidade e uma apresentação memorável. Os kits têm opções a partir de 2 a 25 pessoas e são entregues em embalagens e formas descartáveis, prontas para montar e servir na sua recepção. Cada um inclui orientações de armazenamento, montagem e acompanhamentos.",
    ordem: 10,
    publicada: true,
  },
  {
    id: "fondue",
    nome: "Fondue",
    slug: "fondue",
    definicao:
      "O kit fondue da DÉLI traz fonduta de queijo e ganache de chocolate belga com todos os acompanhamentos, para 2 ou 4 pessoas.",
    introducao:
      "Um menu completo com fondue de queijo e chocolate, composto com todos os itens de acompanhamento e explicação detalhada. O fondue de queijo é uma fonduta de queijos selecionados, pronta para servir, acompanhada de focaccia, crostinis, brócolis no vapor e batatas com ervas. O fondue de chocolate leva ganache de chocolate belga, morangos, uvas e suspiros.",
    ordem: 11,
    publicada: true,
  },
  {
    id: "sobremesas",
    nome: "Sobremesas",
    slug: "sobremesas",
    definicao:
      "As sobremesas da DÉLI são feitas sob encomenda, com antecedência mínima de 24 horas.",
    ordem: 12,
    publicada: true,
  },
  {
    id: "presentes",
    nome: "Presentes",
    slug: "presentes",
    definicao:
      "Os presentes da DÉLI são cestas e caixas montadas e fechadas na casa, entregues prontas para presentear.",
    ordem: 13,
    publicada: true,
  },
];

const BRL = "BRL" as const;
const p = (valor: number, observacao?: string) => ({ valor, moeda: BRL, observacao });

export const produtos: Produto[] = [
  // ===================== FOCACCIAS (cardápio pág. 13) =====================
  {
    id: "focaccia-tradicional",
    nome: "Focaccia Tradicional",
    slug: "focaccia-tradicional",
    categoriaId: "focaccias",
    descricaoCurta: "Com toque de alecrim e flor de sal.",
    observacoes: ["Pequena R$ 53, Grande R$ 79"],
    preco: p(53, "pequena. A grande sai por R$ 79"),
    publicada: true,
  },
  {
    id: "focaccia-grana-padanno",
    nome: "Focaccia Grana Padanno",
    slug: "focaccia-grana-padanno",
    categoriaId: "focaccias",
    observacoes: ["Linha Especiais", "Pequena R$ 69, Grande R$ 98"],
    preco: p(69, "pequena. A grande sai por R$ 98"),
    publicada: true,
  },
  {
    id: "focaccia-gorgonzola-com-amendoas",
    nome: "Focaccia Gorgonzola com Amêndoas",
    slug: "focaccia-gorgonzola-com-amendoas",
    categoriaId: "focaccias",
    observacoes: ["Linha Especiais", "Pequena R$ 69, Grande R$ 98"],
    preco: p(69, "pequena. A grande sai por R$ 98"),
    publicada: true,
  },
  {
    id: "focaccia-calabresa-com-provolone",
    nome: "Focaccia Calabresa com Provolone",
    slug: "focaccia-calabresa-com-provolone",
    categoriaId: "focaccias",
    observacoes: ["Linha Especiais", "Pequena R$ 68, Grande R$ 98"],
    preco: p(68, "pequena. A grande sai por R$ 98"),
    publicada: true,
  },
  {
    id: "focaccia-cogumelos-trufados",
    nome: "Focaccia Cogumelos Trufados",
    slug: "focaccia-cogumelos-trufados",
    categoriaId: "focaccias",
    observacoes: ["Linha Premium", "Pequena R$ 72, Grande R$ 99"],
    preco: p(72, "pequena. A grande sai por R$ 99"),
    publicada: true,
  },
  {
    id: "focaccia-caprese",
    nome: "Focaccia Caprese",
    slug: "focaccia-caprese",
    categoriaId: "focaccias",
    observacoes: ["Linha Premium", "Pequena R$ 72, Grande R$ 99"],
    preco: p(72, "pequena. A grande sai por R$ 99"),
    publicada: true,
  },
  {
    id: "focaccia-parma-com-brie",
    nome: "Focaccia Parma com Brie",
    slug: "focaccia-parma-com-brie",
    categoriaId: "focaccias",
    observacoes: ["Linha Premium", "Pequena R$ 72, Grande R$ 99"],
    preco: p(72, "pequena. A grande sai por R$ 99"),
    publicada: true,
  },
  {
    id: "focaccia-abobrinha-au-boursin",
    nome: "Focaccia Abobrinha au Boursin",
    slug: "focaccia-abobrinha-au-boursin",
    categoriaId: "focaccias",
    observacoes: ["Linha Premium", "Pequena R$ 72, Grande R$ 99"],
    preco: p(72, "pequena. A grande sai por R$ 99"),
    publicada: true,
  },

  // ================ ACOMPANHAMENTOS (cardápio págs. 15 e 16) ================
  {
    id: "mousse-de-chevre",
    nome: "Mousse de Chévre",
    slug: "mousse-de-chevre",
    categoriaId: "acompanhamentos",
    descricao:
      "Mousse suave, à base de queijo de cabra com recheio de figos secos. Finalizada na hora com mel e castanhas.",
    peso: "aprox. 180 g",
    serve: "2 a 4 pessoas",
    preco: p(83.6),
    publicada: true,
  },
  {
    id: "soft-cheese",
    nome: "Soft Cheese",
    slug: "soft-cheese",
    categoriaId: "acompanhamentos",
    descricao: "Creme de queijo suave recheado de geleia de pimenta e coberto com pesto.",
    peso: "aprox. 400 g",
    serve: "2 a 4 pessoas",
    preco: p(86.4),
    publicada: true,
  },
  {
    id: "mousse-de-cogumelos-trufados",
    nome: "Mousse de Cogumelos Trufados",
    slug: "mousse-de-cogumelos-trufados",
    categoriaId: "acompanhamentos",
    descricao:
      "Mousse com base de queijo de cabra, recheada de cogumelos salteados com azeite trufado. Finalizada com cogumelos e azeite de ervas.",
    peso: "aprox. 250 g",
    serve: "2 a 4 pessoas",
    preco: p(98),
    publicada: true,
  },
  {
    id: "mousse-mediterranea",
    nome: "Mousse Mediterrânea",
    slug: "mousse-mediterranea",
    categoriaId: "acompanhamentos",
    descricao:
      "Mousse à base de queijo suave, com recheio de sardella da casa, feita à base de pimentões tostados e tomates. Finalizada com tomates e castanha de caju.",
    peso: "aprox. 250 g",
    serve: "2 a 4 pessoas",
    preco: p(95.4),
    publicada: true,
  },
  {
    id: "caponata-mediterranea",
    nome: "Caponata Mediterrânea",
    slug: "caponata-mediterranea",
    categoriaId: "acompanhamentos",
    descricao:
      "Caponata de beringelas, abobrinha, pimentões e tomates assados, com passas e castanhas de caju.",
    peso: "aprox. 250 g",
    serve: "2 a 4 pessoas",
    preco: p(79.2),
    publicada: true,
  },
  {
    id: "camembert-mineiro",
    nome: "Camembert Mineiro",
    slug: "camembert-mineiro",
    categoriaId: "acompanhamentos",
    descricao:
      "Queijo tipo camembert mineiro, acompanhado de compota de damascos e nuts caramelizados.",
    peso: "aprox. 250 g",
    serve: "2 a 4 pessoas",
    preco: p(87.3),
    publicada: true,
  },
  {
    id: "gorgonzola-de-colher",
    nome: "Gorgonzola de Colher",
    slug: "gorgonzola-de-colher",
    categoriaId: "acompanhamentos",
    descricao: "Queijo mineiro artesanal cremoso, acompanhado de compota de peras.",
    peso: "aprox. 250 g, com 80 g de compota",
    preco: p(125),
    publicada: true,
  },

  // ===================== ESPECIAIS (cardápio pág. 17) =====================
  {
    id: "torta-de-figo",
    nome: "Torta de Figo",
    slug: "torta-de-figo",
    categoriaId: "especiais",
    descricao:
      "Torta de figos, feita à base de queijo de cabra, recheada de compota de figos cozidos em aceto balsâmico com pistache. Finalizada com figos frescos, nuts caramelizadas e mel.",
    peso: "aprox. 500 g",
    serve: "6 pessoas",
    modoDeServir: "Ideal para acompanhar as focaccias e os crocantes.",
    preco: p(315),
    publicada: true,
  },
  {
    id: "esfera-caprese",
    nome: "Esfera Caprese",
    slug: "esfera-caprese",
    categoriaId: "especiais",
    descricao:
      "Mousse de queijo suave, intercalada com camadas de creme gaspacho de tomate da casa. Acompanha pesto e brotos frescos.",
    peso: "média aprox. 450 g com 100 g de pesto e brotos, grande aprox. 800 g com 200 g",
    serve: "média para 4 a 6 pessoas, grande para 15 pessoas",
    preco: p(191, "média. A grande sai por R$ 378"),
    publicada: true,
  },
  {
    id: "kit-burrata",
    nome: "Kit Burrata",
    slug: "kit-burrata",
    categoriaId: "especiais",
    descricao:
      "A combinação clássica que todo mundo ama: burrata, acompanhada de tomates assados, presunto de parma e rúcula fresca.",
    peso: "pequena com 1 burrata de 200 g e 80 g de tomates e rúcula, grande com 2 burratas de 200 g e 200 g de tomates e rúcula",
    serve: "pequena para 2 pessoas, grande para 4 pessoas",
    preco: p(169, "pequena. A grande sai por R$ 289"),
    publicada: true,
  },

  // ================== BRIES (cardápio págs. 18, 19 e 20) ==================
  {
    id: "brie-nuts-caramelizadas",
    nome: "Brie Nuts Caramelizadas",
    slug: "brie-nuts-caramelizadas",
    categoriaId: "bries",
    descricao: "Trufado na massa phyllo com nuts caramelizadas e caramelo trufado.",
    peso: "padrão aprox. 400 g, grande aprox. 2 kg",
    serve: "padrão para 2 a 4 pessoas, grande para 10 a 15 pessoas",
    preco: p(198, "padrão. O grande sai por R$ 498"),
    publicada: true,
  },
  {
    id: "brie-caramelo-de-figos",
    nome: "Brie Caramelo de Figos",
    slug: "brie-caramelo-de-figos",
    categoriaId: "bries",
    descricao: "Massa phyllo com caramelo de figos.",
    peso: "padrão aprox. 400 g, grande aprox. 1,5 kg",
    serve: "padrão para 2 a 4 pessoas, grande para 10 a 15 pessoas",
    preco: p(179, "padrão. O grande sai por R$ 475"),
    publicada: true,
  },
  {
    id: "brie-damasco",
    nome: "Brie Damasco",
    slug: "brie-damasco",
    categoriaId: "bries",
    descricao: "Massa folhada com compota de damasco.",
    peso: "padrão aprox. 400 g, grande aprox. 1,5 kg",
    serve: "padrão para 2 a 4 pessoas, grande para 10 a 15 pessoas",
    preco: p(162, "padrão. O grande sai por R$ 486"),
    publicada: true,
  },
  {
    id: "brie-frutas-vermelhas",
    nome: "Brie Frutas Vermelhas",
    slug: "brie-frutas-vermelhas",
    categoriaId: "bries",
    descricao: "Massa phyllo com compota de frutas vermelhas.",
    peso: "padrão aprox. 400 g, grande aprox. 1,5 kg",
    serve: "padrão para 2 a 4 pessoas, grande para 10 a 15 pessoas",
    preco: p(179, "padrão. O grande sai por R$ 489"),
    publicada: true,
  },
  {
    id: "trio-de-mini-bries",
    nome: "Trio de Mini Bries",
    slug: "trio-de-mini-bries",
    categoriaId: "bries",
    descricao:
      "Peças de 125 g assadas inteiras nos sabores clássicos: phyllo com caramelo de figos, folhada com compota de damasco e phyllo com compota de frutas vermelhas.",
    peso: "três peças de 125 g",
    serve: "sugerido para 2 a 3 pessoas",
    preco: p(285),
    publicada: true,
  },

  // ================ TERRINES (cardápio págs. 25, 26 e 27) ================
  {
    id: "terrine-de-salmao",
    nome: "Terrine de Salmão",
    slug: "terrine-de-salmao",
    categoriaId: "terrines",
    descricao:
      "Terrine de salmão fresco e defumado, com creme de ervas e leve toque de wasabi. Refrescante e deliciosa, é finalizada na hora com salsa em pó e conserva de limão siciliano.",
    peso: "aprox. 600 g",
    serve: "8 a 10 pessoas",
    preco: p(432),
    publicada: true,
  },
  {
    id: "terrine-de-chevre",
    nome: "Terrine de Chévre",
    slug: "terrine-de-chevre",
    categoriaId: "terrines",
    descricao:
      "Terrine suave, à base de queijo de cabra com recheio de figos secos. Finalizada na hora com mel e castanhas.",
    peso: "aprox. 650 g, mais castanhas e mel",
    serve: "8 pessoas",
    preco: p(315),
    publicada: true,
  },
  {
    id: "terrine-mediterranea",
    nome: "Terrine Mediterrânea",
    slug: "terrine-mediterranea",
    categoriaId: "terrines",
    descricao:
      "Terrine à base de queijo suave, com recheio de sardella da casa, feita à base de pimentões tostados e tomates. Finalizada com tomates e castanha de caju.",
    peso: "aprox. 650 g, mais 200 g de tomates e castanhas",
    serve: "8 pessoas",
    preco: p(323),
    publicada: true,
  },
  {
    id: "terrine-cogumelos-trufados",
    nome: "Terrine Cogumelos Trufados",
    slug: "terrine-cogumelos-trufados",
    categoriaId: "terrines",
    descricao:
      "Terrine suave, à base de queijo de cabra com cogumelos trufados salteados. Coberta com azeite de ervas e cogumelos.",
    peso: "aprox. 650 g, mais 50 g de azeite de ervas e cogumelos",
    serve: "8 pessoas",
    preco: p(327),
    publicada: true,
  },

  // ================== QUICHES (cardápio págs. 21 e 22) ==================
  {
    id: "quiche-de-cogumelos",
    nome: "Quiche de Cogumelos",
    slug: "quiche-de-cogumelos",
    categoriaId: "quiches",
    descricao: "Cogumelos salteados com queijo grana padanno.",
    tamanho: "20 cm, aprox. 1,5 kg",
    serve: "8 a 10 fatias",
    preco: p(297),
    publicada: true,
  },
  {
    id: "quiche-caprese",
    nome: "Quiche Caprese",
    slug: "quiche-caprese",
    categoriaId: "quiches",
    descricao: "Muçarela de búfala fresca, tomates frescos e assados com toque de manjericão.",
    tamanho: "20 cm, aprox. 1,5 kg",
    serve: "8 a 10 fatias",
    preco: p(287),
    publicada: true,
  },
  {
    id: "quiche-de-alho-poro",
    nome: "Quiche de Alho Poró",
    slug: "quiche-de-alho-poro",
    categoriaId: "quiches",
    descricao: "Alho poró em lâminas salteado e finalizado com queijo grana padanno.",
    tamanho: "20 cm, aprox. 1,5 kg",
    serve: "8 a 10 fatias",
    preco: p(264),
    publicada: true,
  },
  {
    id: "quiche-lorraine",
    nome: "Quiche Lorraine",
    slug: "quiche-lorraine",
    categoriaId: "quiches",
    descricao: "Bacon desidratado em baixa temperatura, finalizado com queijo parmesão.",
    tamanho: "20 cm, aprox. 1,5 kg",
    serve: "8 a 10 fatias",
    preco: p(258),
    publicada: true,
  },

  // ================== CARNES (cardápio págs. 23 e 24) ==================
  {
    id: "file-wellington",
    nome: "Filé Wellington",
    slug: "file-wellington",
    categoriaId: "carnes",
    descricao:
      "Filé mignon assado envolto em creme temperado da casa e presunto parma, finalizado com massa folhada. Acompanhado de molho de mostarda e mel.",
    tamanho: "20 cm, aprox. 1 kg",
    serve: "8 a 10 pessoas",
    modoDeServir: "Sugerimos servir com salada de folhas.",
    preco: p(486),
    publicada: true,
  },
  {
    id: "torre-de-roast-beef",
    nome: "Torre de Roast Beef",
    slug: "torre-de-roast-beef",
    categoriaId: "carnes",
    descricao:
      "Camadas de roast beef de filé mignon, intercaladas com abobrinha e beringela tostadas, entremeadas com um creme suave. Finalizada na hora com mostarda da casa, pesto basílico e brotos.",
    peso: "aprox. 1 kg",
    modoDeServir: "Servir retirando camadas, sem cortar.",
    preco: p(578.6),
    publicada: true,
  },
  {
    id: "carpaccio-de-carne",
    nome: "Carpaccio de Carne",
    slug: "carpaccio-de-carne",
    categoriaId: "carnes",
    descricao:
      "Cinco porções de lâminas de carpaccio ao molho de alcaparras, lascas de grana padanno e rúcula.",
    serve: "até 4 pessoas",
    acompanhamentos: ["5 lâminas de carpaccio", "acompanhamentos", "1 focaccia tradicional de 1 kg"],
    armazenamento: "Consumo em até 10 dias após aberto.",
    preco: p(396),
    publicada: true,
  },

  // ==================== CROCANTES (cardápio pág. 14) ====================
  {
    id: "crostini-de-parmesao",
    nome: "Crostini de Parmesão",
    slug: "crostini-de-parmesao",
    categoriaId: "crocantes",
    descricao:
      "Palitinhos de crostini de parmesão, crocante e artesanal, feitos com azeite e queijo parmesão.",
    peso: "saquinho de 100 g",
    serve: "2 a 4 pessoas",
    disponibilidade: "1 kg sob encomenda para eventos, por R$ 375",
    preco: p(37.5, "saquinho de 100 g"),
    publicada: true,
  },
  {
    id: "crocante-de-polvilho",
    nome: "Crocante de Polvilho",
    slug: "crocante-de-polvilho",
    categoriaId: "crocantes",
    descricao: "Telha de polvilho crocante e artesanal.",
    peso: "saquinho de 100 g, ou caixa de 500 g com 5 placas",
    disponibilidade: "Placas grandes para eventos ou saquinhos para pedidos menores",
    preco: p(34, "saquinho de 100 g. A caixa de 500 g sai por R$ 170"),
    publicada: true,
  },

  // ===================== DÉLIS (cardápio pág. 28) =====================
  { id: "sunomono", nome: "Sunomono de Abobrinha e Castanha do Pará", slug: "sunomono-de-abobrinha-e-castanha-do-para", categoriaId: "delis", observacoes: ["Conservas"], preco: p(43), publicada: true },
  { id: "sardella", nome: "Sardella", slug: "sardella", categoriaId: "delis", observacoes: ["Conservas"], preco: p(53), publicada: true },
  { id: "hommus", nome: "Hommus", slug: "hommus", categoriaId: "delis", observacoes: ["Conservas"], preco: p(54), publicada: true },
  { id: "pesto", nome: "Pesto", slug: "pesto", categoriaId: "delis", observacoes: ["Conservas"], preco: p(52), publicada: true },
  { id: "tomates-assados", nome: "Tomates Frescos Assados com Azeite e Alecrim", slug: "tomates-frescos-assados", categoriaId: "delis", observacoes: ["Conservas"], preco: p(43.5), publicada: true },
  { id: "creme-mascarpone", nome: "Creme de Mascarpone", slug: "creme-de-mascarpone", categoriaId: "delis", observacoes: ["Cremes"], preco: p(52), publicada: true },
  { id: "creme-roquefort", nome: "Creme de Roquefort", slug: "creme-de-roquefort", categoriaId: "delis", observacoes: ["Cremes"], preco: p(51), publicada: true },
  { id: "requeijao-da-casa", nome: "Requeijão da Casa", slug: "requeijao-da-casa", categoriaId: "delis", observacoes: ["Cremes"], preco: p(49.5), publicada: true },
  { id: "manteiga-de-ervas", nome: "Manteiga de Ervas", slug: "manteiga-de-ervas", categoriaId: "delis", observacoes: ["Manteigas"], preco: p(32.5), publicada: true },
  { id: "manteiga-parma", nome: "Manteiga Parma", slug: "manteiga-parma", categoriaId: "delis", observacoes: ["Manteigas"], preco: p(34.5), publicada: true },
  { id: "manteiga-noisette", nome: "Manteiga Noisette", slug: "manteiga-noisette", categoriaId: "delis", observacoes: ["Manteigas"], preco: p(33.5), publicada: true },
  { id: "presunto-de-parma", nome: "Presunto de Parma", slug: "presunto-de-parma", categoriaId: "delis", observacoes: ["Charcutaria"], preco: p(34.2), publicada: true },
  { id: "copa", nome: "Copa", slug: "copa", categoriaId: "delis", observacoes: ["Charcutaria"], preco: p(36), publicada: true },
  { id: "salame", nome: "Salame", slug: "salame", categoriaId: "delis", observacoes: ["Charcutaria"], preco: p(28.8), publicada: true },

  // ============ KITS (cardápio págs. 30, 31, 32, 34 e 35) ============
  {
    id: "kit-mais-pedidos",
    nome: "Kit Mais Pedidos",
    slug: "kit-mais-pedidos",
    categoriaId: "kits",
    serve: "2 pessoas",
    acompanhamentos: [
      "Focaccia tradicional pequena",
      "Mousse de chévre",
      "Soft cheese",
      "Manteiga noisette",
      "Polvilho",
    ],
    preco: p(287),
    publicada: true,
  },
  {
    id: "kit-queridinhos",
    nome: "Kit Queridinhos",
    slug: "kit-queridinhos",
    categoriaId: "kits",
    serve: "2 ou 4 pessoas",
    acompanhamentos: [
      "Para 2 pessoas: focaccia tradicional P, mousse de chévre, kit burrata P, camembert mineiro 125 g e manteiga de ervas 50 g",
      "Para 4 pessoas: focaccia tradicional G, mousse de chévre, kit burrata G, camembert mineiro 250 g e manteiga de ervas 100 g",
    ],
    preco: p(382.5, "para 2 pessoas. Para 4 pessoas sai por R$ 553,50"),
    publicada: true,
  },
  {
    id: "kit-praia",
    nome: "Kit Praia",
    slug: "kit-praia",
    categoriaId: "kits",
    serve: "4 ou 6 pessoas",
    acompanhamentos: [
      "Para 4 pessoas: focaccia caprese G, mousse de chévre, soft cheese, gorgonzola de colher, camembert mineiro 250 g e caponata mediterrânea",
      "Para 6 pessoas: os mesmos itens, mais uma focaccia tradicional P",
    ],
    preco: p(557, "para 4 pessoas. Para 6 pessoas sai por R$ 595"),
    publicada: true,
  },
  {
    id: "kit-harmonia",
    nome: "Kit Harmonia",
    slug: "kit-harmonia",
    categoriaId: "kits",
    serve: "8 a 10 pessoas",
    acompanhamentos: [
      "1 focaccia tradicional G",
      "1 focaccia grana padanno G",
      "1 crostini",
      "1 polvilho",
      "1 kit burrata G",
      "1 mousse de chévre",
      "1 camembert mineiro",
      "1 mousse mediterrânea",
      "1 gorgonzola de colher",
      "1 soft cheese",
      "1 pesto",
      "1 manteiga parma",
    ],
    preco: p(964),
    publicada: true,
  },
  {
    id: "kit-sintonia",
    nome: "Kit Sintonia",
    slug: "kit-sintonia",
    categoriaId: "kits",
    serve: "8 a 10 pessoas",
    acompanhamentos: [
      "1 focaccia caprese G",
      "1 focaccia tradicional G",
      "1 crostini",
      "1 polvilho",
      "1 esfera caprese M",
      "1 soft cheese",
      "1 mousse de chévre",
      "1 camembert mineiro",
      "1 caponata mediterrânea",
      "1 mousse cogumelos trufados",
      "1 creme roquefort",
      "1 manteiga noisette",
    ],
    preco: p(917),
    publicada: true,
  },
  {
    id: "selecao-confraternizacao",
    nome: "Seleção Confraternização",
    slug: "selecao-confraternizacao",
    categoriaId: "kits",
    descricao:
      "Uma sugestão completa para reuniões de 12 a 15 pessoas, com uma combinação para uma mesa posta variada que agrada a todos os convidados.",
    serve: "12 a 15 pessoas",
    acompanhamentos: [
      "2 focaccias tradicionais grandes",
      "1 focaccia premium, escolhida no ato do pedido",
      "1 crostini 100 g",
      "1 polvilho",
      "1 esfera caprese M",
      "1 terrine, escolhida no ato do pedido",
      "1 kit burrata G",
      "1 brie padrão de 400 g, escolhido no ato do pedido",
      "1 soft cheese",
      "1 gorgonzola de colher",
      "1 camembert mineiro",
      "1 mousse de chévre",
      "1 conserva, 1 creme e 1 manteiga, escolhidos no ato do pedido",
    ],
    observacoes: ["Os itens marcados como escolhidos no ato do pedido dependem da disponibilidade"],
    preco: p(1793),
    publicada: true,
  },
  {
    id: "selecao-celebrar",
    nome: "Seleção Celebrar",
    slug: "selecao-celebrar",
    categoriaId: "kits",
    serve: "20 a 25 pessoas",
    acompanhamentos: [
      "3 focaccias tradicionais grandes",
      "2 focaccias premium, escolhidas no ato do pedido",
      "1 brie grande, de damasco ou frutas vermelhas",
      "1 polvilho 500 g",
      "2 crostini",
      "2 terrines, escolhidas no ato do pedido",
      "1 esfera caprese G",
      "1 kit caprese com 3 burratas de 200 g, muçarela de búfala, 400 g de tomates e rúcula",
      "1 pesto 200 g",
      "1 caponata",
      "2 camembert mineiro",
      "1 gorgonzola de colher",
      "1 mousse de chévre",
      "1 soft cheese",
      "2 manteigas grandes, 1 creme e 1 conserva, escolhidos no ato do pedido",
    ],
    observacoes: ["Os itens marcados como escolhidos no ato do pedido dependem da disponibilidade"],
    preco: p(3180),
    publicada: true,
  },

  // ============ FONDUE (cardápio págs. 36, 37, 38 e 39) ============
  {
    id: "kit-fondue",
    nome: "Kit Fondue",
    slug: "kit-fondue",
    categoriaId: "fondue",
    descricao:
      "Um menu completo com fondue de queijo e chocolate, com todos os itens de acompanhamento e explicação detalhada.",
    serve: "2 ou 4 pessoas",
    acompanhamentos: [
      "Para 2 pessoas: 400 ml de fonduta de queijo, batatas trufadas com ervas, brócolis no vapor, 50 g de crostini, mini focaccia tradicional de 250 g, 200 ml de ganache de chocolate belga, morangos, uvas e 1 saquinho de mini suspiros de 20 g",
      "Para 4 pessoas: 800 ml de fonduta de queijo, batatas trufadas com ervas, brócolis no vapor, 100 g de crostini, 1 focaccia tradicional P de 500 g, 400 ml de ganache de chocolate belga, morangos, uvas e 2 saquinhos de mini suspiros de 20 g",
    ],
    tamanho: "caixa de papelão de 41,5 x 31,5 x 11,5 cm",
    observacoes: [
      "Acompanha card detalhado com instrução para aquecer os itens",
      "Não estão incluídos panela, utensílios e itens de decoração",
    ],
    preco: p(358, "para 2 pessoas. Para 4 pessoas sai por R$ 648"),
    publicada: true,
  },
  {
    id: "kit-fondue-queijo",
    nome: "Kit Fondue de Queijo",
    slug: "kit-fondue-de-queijo",
    categoriaId: "fondue",
    descricao: "Fonduta de queijo, batatas trufadas com ervas, brócolis no vapor, crostini e focaccia tradicional.",
    serve: "2 ou 4 pessoas",
    acompanhamentos: [
      "Para 2 pessoas: 400 ml de fonduta, 300 g de batatas trufadas, 180 g de brócolis no vapor, 50 g de crostini e 250 g de focaccia",
      "Para 4 pessoas: 800 ml de fonduta, 600 g de batatas trufadas, 360 g de brócolis no vapor, 100 g de crostini e 500 g de focaccia",
    ],
    preco: p(225, "para 2 pessoas. Para 4 pessoas sai por R$ 399,50"),
    publicada: true,
  },
  {
    id: "fondue-de-chocolate",
    nome: "Fondue de Chocolate",
    slug: "fondue-de-chocolate",
    categoriaId: "fondue",
    descricao: "Ganache de chocolate belga, morangos, uvas e saquinho de mini suspiros.",
    serve: "2 ou 4 pessoas",
    acompanhamentos: [
      "Para 2 pessoas: 200 g de ganache de chocolate, 100 g de uvas, 100 g de morangos e 30 g de suspiros",
      "Para 4 pessoas: 400 g de ganache de chocolate, 200 g de uvas, 200 g de morangos e 60 g de suspiros",
    ],
    preco: p(144, "para 2 pessoas. Para 4 pessoas sai por R$ 289,80"),
    publicada: true,
  },
  {
    id: "fonduta-de-queijo-avulsa",
    nome: "Fonduta de Queijo Avulsa",
    slug: "fonduta-de-queijo-avulsa",
    categoriaId: "fondue",
    preco: p(89),
    publicada: true,
  },
  {
    id: "ganache-de-chocolate-avulsa",
    nome: "Ganache de Chocolate Avulsa",
    slug: "ganache-de-chocolate-avulsa",
    categoriaId: "fondue",
    preco: p(93),
    publicada: true,
  },
  {
    id: "eclair-creme-patissere",
    nome: "Éclair de Créme Pâtissère",
    slug: "eclair-de-creme-patissere",
    categoriaId: "fondue",
    descricao:
      "Caixa com 10 éclairs recheadas com créme pâtissère, para comer puras ou com a ganache de chocolate.",
    peso: "10 unidades, aprox. 100 g",
    preco: p(85),
    publicada: true,
  },

  // ========== SOBREMESAS (cardápio págs. 40, 41, 42 e 43) ==========
  {
    id: "pavlova",
    nome: "Pavlova",
    slug: "pavlova",
    categoriaId: "sobremesas",
    descricao:
      "Uma guirlanda de suspiro, finalizada com compota de frutas vermelhas, creme de confeiteiro, morangos e frutas vermelhas frescas e um toque de alecrim.",
    serve: "8 porções",
    modoDeServir: "Enviada para finalização na hora de servir, com tutorial.",
    observacoes: ["Feita sob encomenda, com antecedência mínima de 24 horas"],
    preco: p(342),
    publicada: true,
  },
  {
    id: "torta-alema",
    nome: "Torta Alemã",
    slug: "torta-alema",
    categoriaId: "sobremesas",
    descricao:
      "Uma torta de base clássica, em camadas com creme de torta alemã e biscoitos. Coberta com ganache de chocolate belga e cercada por crumble de chocolate branco.",
    serve: "10 a 12 fatias",
    observacoes: ["Feita sob encomenda, com antecedência mínima de 24 horas"],
    preco: p(368),
    publicada: true,
  },
  {
    id: "tarta-mousse",
    nome: "Tarta Mousse",
    slug: "tarta-mousse",
    categoriaId: "sobremesas",
    descricao:
      "Mousse de chocolate meio amargo assada, finalizada com caramelo salgado e nuts caramelizadas.",
    tamanho: "pequena de 16 cm com aprox. 1 kg, grande com aprox. 2,2 kg",
    serve: "pequena rende 6 fatias, grande rende 12 a 15 fatias",
    observacoes: ["Feita sob encomenda, com antecedência mínima de 24 horas"],
    preco: p(198, "pequena. A grande sai por R$ 387"),
    publicada: true,
  },
  {
    id: "tiramissu",
    nome: "Tiramissu",
    slug: "tiramissu",
    categoriaId: "sobremesas",
    descricao:
      "Um clássico italiano feito com creme de mascarpone e massa de biscoito artesanal feita na cozinha da casa, embebida em café especial. Finalizado com cacau.",
    tamanho: "pequeno de 12 cm com aprox. 600 g, grande com aprox. 1,2 kg",
    serve: "pequeno para 2 a 3 pessoas, grande para 6 a 8 pessoas",
    modoDeServir: "Servir na caixa acrílica.",
    observacoes: ["Feito sob encomenda, com antecedência mínima de 24 horas"],
    preco: p(189, "pequeno. O grande sai por R$ 298,70"),
    publicada: true,
  },
  {
    id: "cheesecake",
    nome: "Cheesecake",
    slug: "cheesecake",
    categoriaId: "sobremesas",
    descricao:
      "Cheesecake clássica, mas também receita autoral. Com massa levinha, finalizada na hora com compota de frutas vermelhas.",
    tamanho: "24 cm",
    serve: "12 a 15 fatias",
    armazenamento: "Manter na geladeira. Consumo em até 5 dias.",
    observacoes: ["Feita sob encomenda, com antecedência mínima de 24 horas"],
    preco: p(364.5),
    publicada: true,
  },
  {
    id: "torta-de-limao",
    nome: "Torta de Limão",
    slug: "torta-de-limao",
    categoriaId: "sobremesas",
    descricao:
      "A receita clássica que a Chef faz desde a infância. Massa sucrée com creme suave de limão, finalizada com merengue e flores.",
    tamanho: "24 cm",
    serve: "10 a 12 fatias",
    armazenamento: "Manter na geladeira. Consumo em até 5 dias.",
    observacoes: ["Feita sob encomenda, com antecedência mínima de 24 horas"],
    preco: p(348.3),
    publicada: true,
  },

  // ========== PRESENTES (cardápio págs. 6, 7, 8, 9 e 10) ==========
  {
    id: "cesta-cafe-da-manha",
    nome: "Cesta Café da Manhã",
    slug: "cesta-cafe-da-manha",
    categoriaId: "presentes",
    acompanhamentos: [
      "2 croissants",
      "1 bolo de limão",
      "2 cones de frios com copa, salame, brie e crostinis",
      "1 suco de laranja 500 ml",
      "Manteiga de ervas 50 g",
      "1 granola 80 g",
      "1 requeijão da casa 120 g",
      "Compota de frutas vermelhas",
      "2 iogurtes",
      "1 mini bouquet de flores",
    ],
    tamanho: "cesta caixa cartonada 25 x 25 cm",
    observacoes: [
      "As imagens são ilustrativas. As embalagens e cestas podem ser substituídas por itens de padrão semelhante, e o cliente é avisado no ato do pedido",
    ],
    preco: p(496),
    publicada: true,
  },
  {
    id: "cesta-brunch",
    nome: "Cesta Brunch",
    slug: "cesta-brunch",
    categoriaId: "presentes",
    serve: "4 pessoas",
    acompanhamentos: [
      "1 focaccia tradicional 500 g",
      "4 croissants",
      "1 bolo de limão",
      "2 cones de frios com copa, salame, brie e crostinis",
      "1 suco de laranja 500 ml",
      "Manteiga de ervas 50 g",
      "1 granola 80 g",
      "1 requeijão da casa 120 g",
      "Compota de frutas vermelhas",
      "2 iogurtes",
      "1 baby chandon",
      "1 mini bouquet de flores",
    ],
    tamanho: "cesta caixa cartonada 40 x 25 cm",
    observacoes: [
      "As imagens são ilustrativas. As embalagens e cestas podem ser substituídas por itens de padrão semelhante, e o cliente é avisado no ato do pedido",
    ],
    preco: p(585),
    publicada: true,
  },
  {
    id: "cesta-mimosa",
    nome: "Cesta Mimosa",
    slug: "cesta-mimosa",
    categoriaId: "presentes",
    serve: "2 pessoas",
    acompanhamentos: [
      "Suco de laranja 500 ml",
      "Baby chandon",
      "1 focaccia tradicional 500 g",
      "1 camembert mineiro 125 g com compota de damasco e nuts caramelizadas",
      "1 mousse de chévre 180 g com mel e castanhas caramelizadas",
      "1 roquefort 100 g",
      "Manteiga de ervas 50 g",
      "100 g de crostini",
    ],
    tamanho: "cesta caixa cartonada 25 x 25 cm",
    observacoes: [
      "As imagens são ilustrativas. As embalagens e cestas podem ser substituídas por itens de padrão semelhante, e o cliente é avisado no ato do pedido",
    ],
    preco: p(540),
    publicada: true,
  },
  {
    id: "caixa-degustacao",
    nome: "Caixa Degustação",
    slug: "caixa-degustacao",
    categoriaId: "presentes",
    acompanhamentos: [
      "1 focaccia tradicional 500 g",
      "1 soft cheese",
      "1 roquefort 80 g",
      "1 hommus 80 g",
      "100 g de crostini",
      "100 g de crocante de polvilho",
      "1 mini azeite de ervas 20 ml",
      "1 compota de damasco",
    ],
    observacoes: ["Pode ser enviada com vinho ou cerveja artesanal para harmonizar"],
    preco: p(396),
    publicada: true,
  },
  {
    id: "wine-gift",
    nome: "Wine Gift",
    slug: "wine-gift",
    categoriaId: "presentes",
    descricao:
      "Uma caixa com design exclusivo, que embala o vinho para presente e ainda tem uma gaveta de acompanhamentos, com queijos e charcutaria para degustar.",
    observacoes: [
      "Caixa avulsa, com gaveta de frios, por R$ 265. Você recebe e inclui seu vinho, ou consulta a opção de enviar a bebida",
      "Com vinho, os valores vão de R$ 346 a R$ 497, conforme o rótulo escolhido",
    ],
    preco: p(265, "caixa avulsa, sem vinho"),
    publicada: true,
  },
  {
    id: "kit-fondue-presente",
    nome: "Kit Fondue Presente",
    slug: "kit-fondue-presente",
    categoriaId: "presentes",
    descricao:
      "O kit fondue para 2 pessoas em caixa cartonada com fechamento de ímã, cartão exclusivo e apresentação diferenciada.",
    tamanho: "caixa 22 x 33 x 10 cm",
    observacoes: ["Opção disponível somente para o kit fondue de 2 pessoas"],
    preco: p(80, "adicional de caixa de presente sobre o valor do kit"),
    publicada: true,
  },
];

/** Vinhos avulsos, cardápio pág. 11. Ficam fora do catálogo de produtos. */
export const vinhos = [
  { nome: "DV Catena", detalhe: "Catena Zapata Cabernet Malbec 2020, Mendoza, Argentina", preco: 313 },
  { nome: "Angelica Zapata", detalhe: "Catena Zapata Cabernet Sauvignon 2019, Mendoza, Argentina", preco: 317 },
  { nome: "Alma Negra", detalhe: "Ernesto Zapata Tikal, Mendoza, Argentina", preco: 272 },
  { nome: "Rosso Picenzo", detalhe: "Montepulciano Sangiovese DOC, Stefano Antonucci 2019, Santa Barbara, Itália", preco: 236 },
  { nome: "Posta Pianna", detalhe: "Primitivo IGT Puglia 2019, Cantine Paradiso, Itália", preco: 216 },
  { nome: "Miral", detalhe: "Miral Nero d'Avola Sicília DOC 2023", preco: 158 },
  { nome: "Branco Stefano Antonucci", detalhe: "Pecorino DOC Offida Bio, Stefano Antonucci 2024, Itália", preco: 202 },
  { nome: "Montepulciano d'Abruzzo", detalhe: "Tenuta La Padrona Fae DOC 2024", preco: 168 },
  { nome: "Animan Terrae", detalhe: "Chardonnay Winery Selection 2023, Casa Donoso", preco: 153 },
  { nome: "Espumante Cavalier Blanc", detalhe: "Blanc de Blancs Brut, Chenin Folle Blanche Ugni Blanc Sauvignon", preco: 145 },
] as const;

// ===================== consultas =====================

export const categoriaPorSlug = (slug: string) => categorias.find((c) => c.slug === slug && c.publicada);

export const produtosDaCategoria = (categoriaId: string) =>
  produtos.filter((pr) => pr.categoriaId === categoriaId && pr.publicada);

export const produtoPorSlug = (categoriaSlug: string, produtoSlug: string) => {
  const cat = categoriaPorSlug(categoriaSlug);
  if (!cat) return undefined;
  return produtos.find((pr) => pr.slug === produtoSlug && pr.categoriaId === cat.id && pr.publicada);
};

export const categoriaDoProduto = (produto: Produto) => categorias.find((c) => c.id === produto.categoriaId);
