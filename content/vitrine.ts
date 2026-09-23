import type { Foto } from "@/lib/tipos";
import { fotografo } from "./negocio";

/**
 * Vitrine da home.
 *
 * Cada item leva a uma categoria publicada do catalogo. O `slug` abaixo foi
 * conferido produto a produto, e nao deduzido pelo nome: "Crostini e polvilho"
 * vai para /crocantes porque a categoria tem exatamente esses dois produtos, e
 * "Cestas e caixas" vai para /presentes pelo mesmo motivo.
 *
 * O item que se chamava "Terrines e mousses" virou "Terrines". As mousses estao
 * em /acompanhamentos, entao o nome antigo prometia uma coisa e o clique
 * entregava outra.
 *
 * Cada item aqui tem duas coisas confirmadas: a fotografia oficial e o nome da
 * familia de produto, que veio da propria organizacao do cliente na entrega das
 * fotos. Descricao, composicao, peso e preco ficam de fora ate o cardapio
 * oficial chegar. Nenhum texto de produto foi escrito por suposicao.
 */

const f = (src: string, alt: string, largura: number, altura: number): Foto => ({
  src: `/imagens/${src}.webp`,
  alt,
  largura,
  altura,
  credito: fotografo,
});

export const vitrine = [
  {
    nome: "Focaccias",
    slug: "focaccias",
    foto: f("focaccia-alecrim", "Focaccia assada com alecrim, dourada, sobre pano de linho", 1333, 2000),
  },
  {
    nome: "Bries",
    slug: "bries",
    foto: f("brie-frutas-vermelhas", "Brie envolto em massa folhada assada, aberto no topo e recheado com frutas vermelhas", 1333, 2000),
  },
  {
    nome: "Terrines",
    slug: "terrines",
    foto: f("terrine-cogumelo", "Terrine branca coberta de cogumelos fatiados e azeite, em travessa oval", 1333, 2000),
  },
  {
    nome: "Quiches e tortas salgadas",
    slug: "quiches",
    foto: f("torta-bacalhau", "Torta salgada em massa folhada, cortada, com camadas visíveis do recheio", 1333, 2000),
  },
  {
    nome: "Carnes frias",
    slug: "carnes",
    foto: f("torre-roastbeef", "Torre de fatias de roastbeef intercaladas, finalizada com folhas verdes", 1333, 2000),
  },
  {
    nome: "Sobremesas",
    slug: "sobremesas",
    foto: f("sobremesa-tiramisu", "Fatia de tiramisù com camadas definidas e cacau em pó por cima", 1333, 2000),
  },
  {
    nome: "Cestas e caixas",
    slug: "presentes",
    foto: f("cesta-cafe-da-manha", "Cesta de café da manhã em caixa azul da marca, com pães, sucos, geleias e flores", 1333, 2000),
  },
  {
    nome: "Crostini e polvilho",
    slug: "crocantes",
    foto: f("polvilho-crostini", "Palitos finos de polvilho servidos em pote de vidro alto", 1333, 2000),
  },
] as const;

export const destaqueMesaPosta = f(
  "mesa-posta-selecao-celebrar",
  "Mesa montada com várias entradas da DÉLI servidas em travessas e tábuas, prontas para servir",
  2000,
  1333,
);

/** As tres etapas de "como funciona". Fotografia real de cada momento. */
export const passos = [
  {
    numero: "01",
    titulo: "Você escolhe no cardápio",
    foto: f(
      "passo-escolher",
      "Quatro potes brancos com pastas e manteigas diferentes, ao lado de focaccia e pão fatiado sobre tábua de madeira",
      1067,
      1600,
    ),
  },
  {
    numero: "02",
    titulo: "A cozinha produz",
    foto: f(
      "passo-produzir",
      "Mão baixando uma focaccia embrulhada em papel para dentro de uma cesta de palha ainda vazia",
      1067,
      1600,
    ),
  },
  {
    numero: "03",
    titulo: "Chega pronto para servir",
    foto: f(
      "passo-receber",
      "Pessoa segurando pelas alças uma cesta montada, com focaccia, potes da casa e flores",
      1067,
      1600,
    ),
  },
] as const;

export const destaqueLoja = f(
  "deli-sanduiche-focaccia",
  "Sanduíche de focaccia da DÉLI aberto, com recheio visível, sobre tábua de madeira",
  1333,
  2000,
);

export const destaqueCaixa = f(
  "caixa-degustacao",
  "Caixa de degustação em papel kraft com o selo da Chef Júlia Andrade, cercada de itens da caixa",
  1333,
  2000,
);
