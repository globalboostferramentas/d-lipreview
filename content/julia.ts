import type { Foto } from "@/lib/tipos";
import { fotografo } from "./negocio";

/**
 * Conteudo factual da pagina /chef-julia-andrade.
 *
 * FONTE: RELEASE = texto_feito_juliaandrade/"Release DÉLI by Chef Júlia
 * Andrade - Maio.docx", escrito e enviado pelo cliente. E a unica fonte da
 * biografia, da fala da Julia e dos precos da casa. Onde o BRIEFING ja dizia o
 * mesmo, esta anotado no item.
 *
 * Duas regras que valem aqui:
 *
 * 1. Nenhum ano foi atribuido a fato que o release nao data. O jornalismo, as
 *    cozinhas estreladas e o The Taste Brasil aparecem sem ano porque o release
 *    nao informa nenhum. Ordem, sim. Data, nao.
 *
 * 2. Os precos abaixo sao os da LOJA, consumo no local, e nao se confundem com
 *    os do catalogo, que sao do delivery e vem do cardapio de agosto. O
 *    tiramissu da casa e uma porcao, o do delivery e a torta inteira.
 *    O release e de maio de 2026. Ver PENDENCIAS.
 */

/** Foto principal. As tres imagens vieram do cliente em setembro de 2026. */
export const fotoFachada: Foto = {
  src: "/imagens/chef-julia-fachada.webp",
  alt: "Júlia Andrade sentada em uma cadeira azul na calçada, de dólmã branco, na frente da vitrine da DÉLI com a inscrição Brunch all day e o selo da marca ao lado da porta",
  largura: 1200,
  altura: 1800,
};

export const fotoRetrato: Foto = {
  src: "/imagens/chef-julia-retrato.webp",
  alt: "Retrato de Júlia Andrade com a mão apoiada no queixo, de dólmã branco com o nome bordado, sentada em frente à loja",
  largura: 1200,
  altura: 1500,
};

export const fotoBalcao: Foto = {
  src: "/imagens/chef-julia-balcao.webp",
  alt: "Júlia Andrade de braços cruzados atrás do balcão da DÉLI, de camisa xadrez azul e avental jeans, com a vitrine de pães e as embalagens da casa na prateleira",
  largura: 1400,
  altura: 1750,
};

/**
 * Duas fotos do acervo do Rodrigo Azevedo que estavam no Drive sem uso no site.
 * Entraram aqui porque cada uma mostra exatamente o que o texto ao lado conta:
 * a focaccia na forma acompanha 2020, e o copo da casa acompanha a loja. O alt
 * descreve o que aparece, sem afirmar de que produto do cardapio se trata.
 */
export const fotoFocacciaNaForma: Foto = {
  src: "/imagens/focaccia-forma.webp",
  alt: "Focaccia recém-assada dentro da forma metálica forrada com papel, com ramos de alecrim e lascas de queijo ao redor, sobre mesa de madeira escura",
  largura: 2000,
  altura: 1333,
  credito: fotografo,
};

export const fotoCopoDaCasa: Foto = {
  src: "/imagens/deli-copo-marca.webp",
  alt: "Copo de vidro com o símbolo da espiga da marca, cheio de café gelado e cremoso, sobre mesa azul, ao lado de uma fatia de focaccia tostada",
  largura: 1333,
  altura: 2000,
  credito: fotografo,
};

/**
 * Linha do tempo pedida na secao 4.1 do briefing, que pede de 2020 ate hoje.
 *
 * Comeca em 2020 de proposito. Os dois marcos anteriores, o jornalismo e a
 * passagem pelas cozinhas, ja sao contados em prosa na secao "Antes disso" da
 * pagina. Ter os dois lugares dizendo a mesma coisa era o que mais inchava o
 * texto. O periodo do meio nao tem ano porque cobre seis anos.
 */
export const linhaDoTempo = [
  {
    marco: "2020",
    texto:
      "A primeira focaccia sai da cozinha de casa, no ano em que ninguém podia receber ninguém. A mesa posta nasce aí, como jeito de mandar a recepção inteira pronta.",
  },
  {
    marco: "Seis anos de delivery",
    texto:
      "Milhares de entregas no Rio de Janeiro, com as entradas artesanais no centro do cardápio.",
  },
  {
    marco: "Abril de 2026",
    texto:
      "A DÉLI abre no Shopping Downtown, na Barra da Tijuca. A cozinha ganha endereço, vitrine e mesas na calçada.",
  },
] as const;

/**
 * Fala da propria Julia, no release. Corrigido apenas um erro de digitacao do
 * original ("o sucessos" para "os sucessos") e cortada a segunda metade da
 * frase. Nada foi acrescentado.
 */
export const falaDaJulia = {
  texto:
    "A DÉLI foi criada para eu ter liberdade de criar. Quis trazer desde os sucessos do delivery até pratos que eu faço em casa, como o The Toast.",
  autoria: "Júlia Andrade",
};

/**
 * Carros-chefes da casa, com os precos que o cliente publicou no release.
 * Consumo na loja. Todo item aqui esta no release, com esse nome e esse valor.
 *
 * Saiu da pagina da chef em setembro de 2026, a pedido do cliente, porque
 * aquela pagina e sobre a Julia e nao sobre o cardapio. Desde 23/09/2026 vive
 * em /a-deli, secao "No balcao", em cards com foto e sem preco, a pedido do
 * cliente. Os precos continuam aqui como registro do release.
 * Ver PENDENCIAS.
 */
/**
 * Fotos dos carros-chefes. Sessao do Rodrigo Azevedo na loja, 22/05/2026,
 * pasta "Deli" do Drive. Os arquivos nao tem nome de produto: o pareamento
 * abaixo foi confirmado pela Global Boost em 23/09/2026, nao pelo cliente.
 * Confirmar com a Julia. Ver PENDENCIAS.
 *
 *   _022 -> Capuccino Gelado     _277 -> Tabuas
 *   _322 -> The Toast
 *
 * A _283 e a mesma tabua da _277, de outro angulo. Como o release diz que o
 * Pra compartilhar e "a mesma tabua, para ate 4 pessoas", nao existe foto que
 * separe os dois. Eles viram um card so, "Tabuas", em cardsDoBalcao.
 *
 * Bries assados, croissants recheados e tiramissu da casa nao aparecem na
 * sessao da loja. As fotos de brie e de tiramissu do acervo sao dos produtos
 * do delivery, que sao outros, entao ficam sem foto.
 */
const fotoLoja = (arquivo: string, alt: string, largura: number, altura: number): Foto => ({
  src: `/imagens/${arquivo}.webp`,
  alt,
  largura,
  altura,
  credito: fotografo,
});

export const carrosChefe: {
  nome: string;
  descricao?: string;
  observacao?: string;
  preco: number;
  apartirDe?: boolean;
  foto?: Foto;
}[] = [
  {
    nome: "The Toast",
    foto: fotoLoja("deli-the-toast", "Fatias de focaccia tostadas e douradas, com crosta de queijo e brotos por cima, ao lado de um café com leite em copo de vidro", 1200, 1800),
    descricao: "Duas fatias de focaccia fresca, tostadas com muito queijo grana padano.",
    preco: 28.7,
  },
  {
    nome: "Capuccino Gelado",
    foto: fotoLoja("deli-capuccino-gelado", "Copo de vidro com o símbolo da espiga, cheio de café gelado e cremoso, sobre mesa azul, com um pedaço de focaccia tostada ao lado", 1200, 1800),
    descricao: "Café gelado e cremoso.",
    preco: 27,
  },
  {
    nome: "Mini tábua",
    foto: fotoLoja("deli-mini-tabua", "Mel escorrendo de um pegador de madeira sobre uma mousse com castanhas caramelizadas, numa tábua com fatias de focaccia, creme e pimentões assados", 1200, 1800),
    descricao:
      "Focaccia fresca assada na hora e os acompanhamentos que já são sucesso no delivery. Serve 2 pessoas.",
    preco: 92,
  },
  {
    nome: "Pra compartilhar",
    descricao: "A mesma tábua, para até 4 pessoas.",
    preco: 163,
  },
  {
    nome: "Bries assados",
    preco: 83.6,
    apartirDe: true,
  },
  {
    nome: "Croissants recheados",
    observacao: "Temporada especial",
    preco: 36,
  },
  {
    nome: "Tiramissù da casa",
    preco: 31.5,
  },
];

/** Mes e ano em que o cliente informou os precos acima. Aparece junto com eles. */
export const precosInformadosEm = "maio de 2026";

/** RELEASE. O tempo de fermentacao nao aparece em nenhuma outra fonte. */
export const fermentacaoHoras = 36;

/** RELEASE. E o que esta escrito na vitrine da loja, na foto da fachada. */
export const conceitoDaCasa = "Brunch all day";

/**
 * A carreira na cozinha antes do negocio proprio. Briefing de alteracoes de
 * 22/09/2026: a pagina da chef passa a dar o peso principal a isto.
 *
 * Tudo abaixo esta no RELEASE, com estas palavras: "cozinhas renomadas",
 * "cozinhas estreladas", "consultorias", "eventos", "ensino gastronomico" e
 * "The Taste Brasil". O release nao da nome de casa, cidade nem ano, entao
 * nenhum dos tres aparece aqui. Quando a Julia mandar os marcos, cada item
 * ganha o detalhe. Ver PENDENCIAS.
 */
export const trajetoria = [
  {
    frente: "Cozinhas renomadas",
    texto: "Construiu a carreira em cozinhas renomadas, entre elas casas estreladas.",
  },
  {
    frente: "Consultorias",
    texto: "Fez consultoria gastronômica.",
  },
  {
    frente: "Eventos",
    texto: "Cozinhou para eventos, o que hoje volta no buffet completo da DÉLI.",
  },
  {
    frente: "Ensino",
    texto: "Deu aulas de gastronomia.",
  },
  {
    frente: "The Taste Brasil",
    texto: "Participou do programa de culinária The Taste Brasil.",
  },
] as const;

/** RELEASE: "Com mais de 10 anos de experiencia". */
export const anosDeCozinha = "mais de 10 anos";

const carroChefe = (nome: string) => {
  const item = carrosChefe.find((c) => c.nome === nome);
  if (!item) throw new Error(`Carro-chefe ausente: ${nome}`);
  return item;
};

/**
 * O que a secao "No balcao" de /a-deli mostra, ajuste de 23/09/2026.
 *
 * cards: itens com foto. Mini tabua e Pra compartilhar sao a mesma tabua em
 * dois tamanhos e tem uma foto so, entao dividem o card "Tabuas".
 * semFoto: itens sem foto confirmada, listados em texto abaixo dos cards.
 */
export const cardsDoBalcao = {
  cards: [
    carroChefe("The Toast"),
    carroChefe("Capuccino Gelado"),
    {
      nome: "Tábuas",
      foto: carroChefe("Mini tábua").foto,
      descricao:
        "Focaccia fresca assada na hora e os acompanhamentos que já são sucesso no delivery. Mini tábua para 2 pessoas, Pra compartilhar para até 4.",
    },
  ],
  semFoto: carrosChefe.filter(
    (c) => !c.foto && c.nome !== "Mini tábua" && c.nome !== "Pra compartilhar",
  ),
};
