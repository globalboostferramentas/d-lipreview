"use client";

import { usePathname } from "next/navigation";
import { negocio } from "@/content/negocio";

/**
 * Botao flutuante de WhatsApp, fixo no canto da tela em todas as paginas e em
 * todos os tamanhos. Briefing de alteracoes de 22/09/2026. Delivery, loja e
 * eventos usam o mesmo numero.
 *
 * A mensagem muda por pagina: quem esta numa pagina de produto ja chega
 * falando daquele produto. Nada de "olá" generico.
 *
 * O evento `clique_whatsapp` sai de components/Rastreamento.tsx, que le a
 * posicao do utm_content.
 */

function mensagemDaRota(caminho: string) {
  const partes = caminho.split("/").filter(Boolean);

  if (partes.length === 0 || partes[0] === "delivery" || partes[0] === "menu")
    return "Olá! Cheguei pelo site e queria fazer um pedido.";
  if (partes[0] === "chef-julia-andrade") return "Olá! Cheguei pelo site da Chef Júlia Andrade.";
  if (partes[0] === "eventos") return "Olá! Queria um orçamento para um evento.";
  if (partes[0] === "a-deli") return "Olá! Queria saber mais sobre a loja da DÉLI.";
  if (partes[0] === "entrega") return "Olá! Queria confirmar se vocês entregam no meu endereço.";

  if (partes.length === 2) {
    const nome = partes[1].replace(/-/g, " ");
    return `Olá! Vi o item ${nome} no site e queria fazer um pedido.`;
  }
  if (partes.length === 1) {
    const nome = partes[0].replace(/-/g, " ");
    return `Olá! Queria saber mais sobre as opções de ${nome}.`;
  }
  return "Olá! Cheguei pelo site e queria fazer um pedido.";
}

export default function BotaoWhatsApp() {
  const caminho = usePathname() ?? "/";
  const mensagem = mensagemDaRota(caminho);

  const p = new URLSearchParams({
    text: mensagem,
    utm_source: "site-institucional",
    utm_medium: "whatsapp",
    utm_campaign: caminho === "/" ? "home" : caminho.replace(/^\//, "").replace(/\//g, "-"),
    utm_content: "botao-flutuante",
  });

  /* Canto reto e borda clara, sem sombra colorida. A borda areia separa o
     botao do rodape, que tambem e azul. */
  return (
    <a
      href={`https://wa.me/${negocio.contato.whatsapp}?${p.toString()}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar pelo WhatsApp, ${negocio.contato.whatsappFormatado}. Abre em nova aba`}
      className="espacado fixed bottom-4 right-4 z-30 flex items-center gap-3 border border-areia/60 bg-azul px-5 py-4 text-etiqueta text-areia transition-colors hover:bg-azul-profundo focus-visible:outline-azul lg:bottom-6 lg:right-6"
    >
      WhatsApp
      <span className="hidden normal-case tracking-normal text-areia/75 sm:inline">
        {negocio.contato.whatsappFormatado}
      </span>
    </a>
  );
}
