import { negocio } from "@/content/negocio";

/**
 * Todo link de WhatsApp carrega UTM identificando a pagina de origem e a
 * posicao do botao. Briefing secao 10: o motivo comercial do projeto e saber
 * de onde vem a venda. Nunca montar essas URLs na mao.
 */

/**
 * Onde fica o cardapio completo. Briefing de alteracoes de 22/09/2026: o
 * cardapio mora dentro da pagina Delivery, e o pedido e feito pelo WhatsApp.
 */
export const CARDAPIO = "/delivery#cardapio";

/**
 * Link para o cardapio. Devolve os atributos do <a>, para espalhar com
 * {...linkCardapio(origem, posicao)}.
 *
 * O cardapio agora e pagina do proprio site, entao o link nao leva UTM: UTM em
 * link interno abre sessao nova no GA4 e apaga a origem verdadeira da visita.
 * Quem registra a origem e a posicao e o evento `clique_cardapio`, disparado
 * pelos data-atributos abaixo. Ver components/Rastreamento.tsx.
 */
export function linkCardapio(origem: string, posicao: string) {
  return {
    href: CARDAPIO,
    "data-evento": "clique_cardapio",
    "data-posicao": `${origem}:${posicao}`,
  } as const;
}

/**
 * A mensagem e diferente por pagina, conforme o briefing pede na secao 6.1.
 * Nada de "olá" generico.
 */
export function linkWhatsApp(mensagem: string, origem: string, posicao: string) {
  const p = new URLSearchParams({
    text: mensagem,
    utm_source: "site-institucional",
    utm_medium: "whatsapp",
    utm_campaign: origem,
    utm_content: posicao,
  });
  return `https://wa.me/${negocio.contato.whatsapp}?${p.toString()}`;
}

/** Mensagem pronta para a pagina de um produto. */
export function mensagemProduto(nomeDoProduto: string) {
  return `Olá! Vi o ${nomeDoProduto} no site e queria fazer um pedido.`;
}

export function mensagemCategoria(nomeDaCategoria: string) {
  return `Olá! Queria saber mais sobre as opções de ${nomeDaCategoria.toLowerCase()}.`;
}

/** Formata em real como o brasileiro escreve: R$ 83,60 e R$ 1.793. */
export function moeda(valor: number) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: Number.isInteger(valor) ? 0 : 2,
  });
}

/**
 * Rota no Google Maps ate a loja. Link comum, sem mapa incorporado: o mapa do
 * Google grava cookie, e o projeto nao usa cookie nao essencial. O clique
 * dispara `clique_como_chegar`, ver components/Rastreamento.tsx.
 */
export function linkComoChegar() {
  const e = negocio.endereco;
  const destino = `${negocio.nome} ${negocio.chef}, ${e.logradouro}, ${e.complemento}, ${e.referencia}, ${e.bairro}, ${e.cidade}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destino)}`;
}

/** "10:00" vira "10h", como o brasileiro escreve. */
export function hora(h: string) {
  return h.replace(/:00$/, "h");
}

/** "Espumante Cavalier Blanc" vira "espumante-cavalier-blanc". Para ancora. */
export function slugDe(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
