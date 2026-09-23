"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Entrada discreta de texto ao rolar: a peca sobe 14 px e assenta.
 *
 * Existe separado do Revelar porque os dois resolvem coisas diferentes. O
 * Revelar e para fotografia: tem cortina na cor areia e um leve aumento, que em
 * texto ficaria borrado. Aqui e so opacidade e deslocamento curto.
 *
 * O briefing limita movimento a duas coisas, aparecer ao rolar e mudanca de
 * estado no mouse, e proibe animacao de entrada em tudo que aparece na tela.
 * Por isso este componente e usado com parcimonia: o topo da pagina, o titulo
 * de cada secao e os marcos da linha do tempo. Paragrafo nao entra animado.
 *
 * Como no Revelar, o estado escondido so vale depois que o JavaScript assume, e
 * existe rede de seguranca por tempo. Texto invisivel em site de cliente e pior
 * do que animacao perdida.
 */
export default function Surgir({
  children,
  className = "",
  atrasoMs = 0,
}: {
  children: ReactNode;
  className?: string;
  atrasoMs?: number;
}) {
  const alvo = useRef<HTMLDivElement>(null);
  const [pronto, setPronto] = useState(false);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = alvo.current;
    if (!el) return;

    setPronto(true);

    let observador: IntersectionObserver | undefined;
    let rede: number | undefined;
    let comecou = false;

    const comecar = () => {
      if (comecou) return;
      comecou = true;

      observador = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setVisivel(true);
            observador?.disconnect();
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.02 },
      );
      observador.observe(el);
      rede = window.setTimeout(() => setVisivel(true), 3500);
    };

    const q = requestAnimationFrame(() => requestAnimationFrame(comecar));
    const reserva = window.setTimeout(comecar, 250);

    return () => {
      cancelAnimationFrame(q);
      window.clearTimeout(reserva);
      observador?.disconnect();
      if (rede) window.clearTimeout(rede);
    };
  }, []);

  return (
    <div
      ref={alvo}
      className={`surgir ${className}`}
      data-pronto={pronto || undefined}
      data-visivel={visivel || undefined}
      style={atrasoMs ? { transitionDelay: `${atrasoMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
