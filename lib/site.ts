/**
 * Endereco publico do site. Briefing de alteracoes de 22/09/2026:
 * chefjuliaandrade.com.br e o site institucional, com a tela de entrada.
 * chefjuliadelicatessen.com.br so encaminha para o delivery, ver next.config.
 *
 * Um endereco canonico so. Os dois dominios servindo as mesmas paginas
 * gerariam conteudo duplicado para o Google.
 */
export const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chefjuliaandrade.com.br";
