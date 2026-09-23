import type { Foto } from "@/lib/tipos";
import { fotografo } from "./negocio";

/**
 * Fotografia oficial por produto.
 *
 * Duas origens, ambas do cliente:
 *   acervo   = fotos do Rodrigo Azevedo entregues no Drive, em alta resolucao
 *   cardapio = imagem que o proprio cardapio usa ao lado daquele produto
 *
 * A segunda origem so aparece onde o acervo tem varias fotos parecidas e apenas
 * o cardapio garante qual pertence a qual sabor. Nenhum pareamento foi deduzido.
 *
 * Produto sem entrada aqui e renderizado sem foto, de proposito. Ver PENDENCIAS.
 * O alt descreve o que a foto mostra, escrito a mao, sem empilhar palavra-chave.
 */

const f = (id: string, alt: string, largura: number, altura: number): Foto => ({
  src: `/imagens/produto-${id}.webp`,
  alt,
  largura,
  altura,
  credito: fotografo,
});

export const fotosDeProdutos: Record<string, Foto> = {
  // Focaccias
  "focaccia-tradicional": f("focaccia-tradicional", "Focaccia tradicional assada, dourada e alta, com alecrim por cima", 1200, 1800),
  "focaccia-calabresa-com-provolone": f("focaccia-calabresa-com-provolone", "Focaccia coberta de rodelas de calabresa, batata e alecrim, cortada em pedaços", 1800, 1200),
  "focaccia-cogumelos-trufados": f("focaccia-cogumelos-trufados", "Focaccia na forma coberta de cogumelos fatiados e ramos de alecrim", 1800, 1200),

  // Acompanhamentos
  "mousse-de-chevre": f("mousse-de-chevre", "Mousse de chévre em formato de cone, regada com mel e cercada de castanhas caramelizadas", 1200, 1800),
  "soft-cheese": f("soft-cheese", "Soft cheese coberto de pesto verde, com o recheio de geleia de pimenta aparecendo na lateral", 1800, 1200),
  "mousse-de-cogumelos-trufados": f("mousse-de-cogumelos-trufados", "Mousse de cogumelos trufados em camadas, sobre prato verde alto, coberta de cogumelos salteados", 1200, 1800),
  "caponata-mediterranea": f("caponata-mediterranea", "Caponata mediterrânea desenformada sobre folha verde, com castanhas por cima e tomates ao lado", 1800, 1200),
  "camembert-mineiro": f("camembert-mineiro", "Camembert mineiro inteiro sobre prato verde, coberto de compota de damasco e nuts caramelizados", 1800, 1200),
  "gorgonzola-de-colher": f("gorgonzola-de-colher", "Gorgonzola de colher aberto no topo, com a colher dentro, e compota de peras ao redor", 1800, 1200),

  // Especiais
  "torta-de-figo": f("torta-de-figo", "Torta de figo com figos frescos cortados por cima, nuts caramelizadas e mel escorrendo pela lateral", 1200, 1800),
  "esfera-caprese": f("esfera-caprese", "Esfera caprese em camadas brancas e vermelhas, com brotos verdes no topo, sobre pesto", 1800, 1200),
  "kit-burrata": f("kit-burrata", "Burrata inteira sobre folha verde, com tomates assados, presunto de parma e rúcula ao lado", 1800, 1200),

  // Bries
  "brie-nuts-caramelizadas": f("brie-nuts-caramelizadas", "Brie em massa phyllo assada, coberto por uma pilha de nuts caramelizadas e caramelo", 1800, 1200),
  "brie-caramelo-de-figos": f("brie-caramelo-de-figos", "Colher despejando caramelo de figos sobre brie assado em massa phyllo", 1200, 1800),
  "brie-damasco": f("brie-damasco", "Brie assado em massa folhada, aberto no topo com compota de damasco, damascos secos ao lado", 1800, 1200),
  "brie-frutas-vermelhas": f("brie-frutas-vermelhas", "Brie em massa phyllo assada, aberto no topo com compota de frutas vermelhas", 1200, 1800),
  "trio-de-mini-bries": f("trio-de-mini-bries", "Dois mini bries em massa phyllo sobre tábua de madeira, um deles aberto", 1800, 1200),

  // Terrines
  "terrine-de-salmao": f("terrine-de-salmao", "Terrine de salmão em travessa clara, coberta de rodelas de limão siciliano e ervas", 1800, 1200),
  "terrine-de-chevre": f("terrine-de-chevre", "Terrine de chévre retangular em travessa branca, com mel e castanhas caramelizadas por cima", 1800, 1200),
  "terrine-cogumelos-trufados": f("terrine-cogumelos-trufados", "Terrine de cogumelos trufados em travessa oval, coberta de cogumelos fatiados e azeite de ervas", 1800, 1200),
  "terrine-mediterranea": f("terrine-mediterranea", "Terrine mediterrânea com tomates e castanha de caju por cima", 1026, 456),

  // Quiches
  "quiche-de-cogumelos": f("quiche-de-cogumelos", "Quiche assada inteira, com recheio dourado e massa artesanal na borda", 1568, 2352),

  // Carnes
  "file-wellington": f("file-wellington", "Filé Wellington assado em massa folhada trançada, inteiro sobre prato claro", 1800, 1200),
  "torre-de-roast-beef": f("torre-de-roast-beef", "Torre de camadas de roast beef intercaladas com legumes tostados, finalizada com brotos verdes", 1200, 1800),
  "carpaccio-de-carne": f("carpaccio-de-carne", "Lâminas de carpaccio dispostas no prato, com lascas de grana padanno e folhas de rúcula", 1800, 1200),

  // Crocantes
  "crostini-de-parmesao": f("crostini-de-parmesao", "Palitinhos finos de crostini de parmesão", 1008, 465),
  "crocante-de-polvilho": f("crocante-de-polvilho", "Telha de crocante de polvilho", 1008, 465),

  // Kits
  "kit-mais-pedidos": f("kit-mais-pedidos", "Itens do kit mais pedidos dispostos juntos, prontos para servir", 1008, 1512),
  "selecao-celebrar": f("selecao-celebrar", "Mesa montada com as entradas da seleção celebrar servidas em travessas e tábuas", 1800, 1200),

  // Fondue
  "kit-fondue": f("kit-fondue", "Mesa montada com a panela de fondue de queijo e as tigelas de acompanhamento", 1176, 1764),

  // Sobremesas
  "pavlova": f("pavlova", "Guirlanda de pavlova coberta de morangos frescos e frutas vermelhas", 1200, 1800),
  "torta-alema": f("torta-alema", "Torta alemã coberta de ganache de chocolate, com crumble de chocolate branco na base", 1200, 1800),
  "tarta-mousse": f("tarta-mousse", "Tarta mousse de chocolate com caramelo salgado desenhado por cima e nuts caramelizadas", 1800, 1200),
  "tiramissu": f("tiramissu", "Fatia de tiramissu com camadas definidas e cacau em pó por cima", 1200, 1800),
  "cheesecake": f("cheesecake", "Cheesecake inteira coberta de compota de frutas vermelhas, com morangos ao lado", 1800, 1200),
  "torta-de-limao": f("torta-de-limao", "Torta de limão coberta de merengue queimado e flores comestíveis", 1200, 1800),

  // Presentes
  "cesta-cafe-da-manha": f("cesta-cafe-da-manha", "Cesta de café da manhã em caixa azul da marca, com pães, sucos, potes e um bouquet de flores", 1200, 1800),
  "cesta-brunch": f("cesta-brunch", "Cesta brunch em caixa azul da marca, com focaccia, croissants, sucos e flores", 1200, 1800),
  "cesta-mimosa": f("cesta-mimosa", "Cesta mimosa em caixa azul da marca, com baby chandon, suco de laranja e queijos", 1200, 1800),
  "caixa-degustacao": f("caixa-degustacao", "Caixa de degustação em papel kraft com o selo da Chef Júlia Andrade, cercada dos itens que a compõem", 1200, 1800),
  "wine-gift": f("wine-gift", "Caixa Wine Gift azul aberta, com a gaveta de frios montada, ao lado de uma garrafa de vinho", 1200, 1800),
};

export const fotoDoProduto = (id: string): Foto | undefined => fotosDeProdutos[id];

/**
 * Capa de cada categoria, reaproveitando a foto de um produto dela.
 *
 * Delis fica de fora: nenhum dos quatorze produtos dessa categoria tem foto
 * pareada. A capa dela vem de `capasProprias`, logo abaixo.
 */
export const capasDeCategorias: Record<string, string> = {
  focaccias: "focaccia-tradicional",
  acompanhamentos: "mousse-de-chevre",
  especiais: "esfera-caprese",
  bries: "brie-caramelo-de-figos",
  terrines: "terrine-de-chevre",
  quiches: "quiche-de-cogumelos",
  carnes: "torre-de-roast-beef",
  crocantes: "crostini-de-parmesao",
  kits: "selecao-celebrar",
  fondue: "kit-fondue",
  sobremesas: "tiramissu",
  presentes: "cesta-cafe-da-manha",
};

/**
 * Capa que nao vem de um produto.
 *
 * A foto de Delis nao pertence a nenhum item isolado do cardapio, e sim a
 * familia inteira. O pareamento e do proprio cliente: no Drive ela estava na
 * pasta "Deli_s", como registrado em _extraido/imagens_meta.json. Nao foi
 * escolhida por semelhanca.
 */
export const capasProprias: Record<string, Foto> = {
  delis: {
    src: "/imagens/delis-pastas.webp",
    alt: "Quatro tigelinhas brancas com manteigas e pastas diferentes sobre tábua de madeira, ao lado de fatias de pão, focaccia e ervas frescas",
    largura: 2000,
    altura: 1333,
    credito: fotografo,
  },
};

/** Capa da categoria, venha ela de um produto ou do acervo. */
export const capaDaCategoria = (id: string): Foto | undefined =>
  capasProprias[id] ?? fotoDoProduto(capasDeCategorias[id] ?? "");
