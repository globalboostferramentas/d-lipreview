"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/**
 * Menu do briefing de alteracoes de 22/09/2026: quatro itens, Delivery
 * primeiro porque e o foco da marca. Cardapio, categorias e produtos ficam
 * dentro de Delivery.
 */
const navegacao = [
  { rotulo: "Delivery", href: "/delivery" },
  { rotulo: "Déli", href: "/a-deli" },
  { rotulo: "Eventos", href: "/eventos" },
  { rotulo: "Chef", href: "/chef-julia-andrade" },
];

/** O que nao e Déli, Eventos ou Chef e cardapio, entao pertence ao Delivery. */
function secaoAtual(caminho: string) {
  const outra = navegacao.slice(1).find((i) => caminho.startsWith(i.href));
  return outra ? outra.href : "/delivery";
}

export default function Cabecalho() {
  const [aberto, setAberto] = useState(false);
  const caminho = usePathname() ?? "/";
  const secao = secaoAtual(caminho);

  /* Cada porta tem a sua marca. Na Déli, o nome da loja vem na frente. */
  const naDeli = secao === "/a-deli";
  const marca = naDeli ? "DÉLI" : "Chef Júlia Andrade";
  const assina = naDeli
    ? "By Chef Júlia Andrade"
    : secao === "/delivery"
      ? "Delivery"
      : "Da minha casa para a sua";

  return (
    <header className="sticky top-0 z-40 border-b border-linha bg-papel/95 backdrop-blur-[6px]">
      <div className="mx-auto flex max-w-[86rem] items-center justify-between gap-6 px-5 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label={`${marca}, ir para a página inicial`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/simbolo-espiga.svg" alt="" width={18} height={26} className="h-7 w-auto" />
          <span className="leading-none">
            <span
              className={`block titulo text-azul ${naDeli ? "text-[1.35rem] tracking-[0.14em]" : "text-[1.05rem] tracking-[0.1em]"}`}
            >
              {marca}
            </span>
            <span className="espacado mt-[3px] block text-[0.5625rem] text-azul-suave">
              {assina}
            </span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navegacao.map((i) => (
              <li key={i.href}>
                <Link
                  href={i.href}
                  aria-current={secao !== i.href ? undefined : caminho === i.href ? "page" : "true"}
                  className={`espacado text-etiqueta text-azul underline-offset-[6px] transition-colors hover:text-dourado hover:underline ${secao === i.href ? "underline" : ""}`}
                >
                  {i.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-controls="menu-movel"
          className="espacado border border-azul px-4 py-2 text-etiqueta text-azul lg:hidden"
        >
          {aberto ? "Fechar" : "Menu"}
        </button>
      </div>

      {aberto && (
        <nav id="menu-movel" aria-label="Principal, celular" className="border-t border-linha lg:hidden">
          <ul className="mx-auto max-w-[86rem] px-5">
            {navegacao.map((i) => (
              <li key={i.href} className="border-b border-linha last:border-0">
                <Link
                  href={i.href}
                  onClick={() => setAberto(false)}
                  aria-current={secao !== i.href ? undefined : caminho === i.href ? "page" : "true"}
                  className="block py-4 titulo text-t3 text-azul"
                >
                  {i.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
