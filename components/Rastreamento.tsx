"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Um ouvinte so, no documento inteiro, para os eventos combinados com o Vitor.
 * Assim as paginas continuam renderizadas no servidor e nenhum link precisa de
 * onClick proprio.
 *
 *   data-evento no <a>        -> o evento declarado (clique_cardapio)
 *   link para wa.me           -> clique_whatsapp, posicao lida do utm_content
 *   link tel:                 -> clique_telefone
 *   link para o Google Maps   -> clique_como_chegar
 */
export default function Rastreamento() {
  useEffect(() => {
    const aoClicar = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";

      let evento = a.dataset.evento;
      let posicao = a.dataset.posicao;

      if (!evento) {
        if (href.includes("wa.me/")) {
          evento = "clique_whatsapp";
          posicao = new URL(href, location.href).searchParams.get("utm_content") ?? undefined;
        } else if (href.startsWith("tel:")) {
          evento = "clique_telefone";
        } else if (/google\.[a-z.]+\/maps|maps\.app\.goo\.gl/.test(href)) {
          evento = "clique_como_chegar";
        }
      }
      if (!evento) return;

      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({ event: evento, pagina: location.pathname, posicao });
    };

    document.addEventListener("click", aoClicar, { capture: true });
    return () => document.removeEventListener("click", aoClicar, { capture: true });
  }, []);

  return null;
}
