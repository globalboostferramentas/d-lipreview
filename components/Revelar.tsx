"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Revelacao de fotografia ao entrar na tela.
 *
 * Duas camadas em velocidades diferentes, como uma folha sendo puxada de cima
 * de uma foto sobre a mesa:
 *   a cortina, na cor areia da marca, sobe e sai de cena em 900 ms
 *   a foto sobe atras dela e assenta do aumento para o tamanho, em 1600 ms
 *
 * O contratempo entre as duas e o que faz o gesto ser percebido. Uma camada so,
 * na mesma velocidade, passa despercebida.
 *
 * Dois estados de acessibilidade, nao um:
 *   modo normal     -> cortina mais assentamento
 *   menos movimento -> so a foto surgindo, sem cortina e sem deslocamento
 *
 * Em ambos, o estado inicial escondido so entra depois que o JavaScript assume.
 * Sem script, a cortina nem existe e a foto aparece normalmente.
 */
export default function Revelar({
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
  const [suave, setSuave] = useState(false);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = alvo.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSuave(true);
    } else {
      setPronto(true);
    }

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
        { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
      );
      observador.observe(el);

      /* Rede de seguranca: se o observador nao disparar por qualquer motivo, a
         foto aparece sozinha. Foto escondida em site de cliente e pior do que
         animacao perdida. */
      rede = window.setTimeout(() => setVisivel(true), 4000);
    };

    /* O estado inicial precisa ser pintado antes de o estado final entrar. Se
       os dois caem no mesmo quadro, o navegador nao tem de onde interpolar e a
       foto pula para o lugar sem assentar. Dois quadros resolvem isso, mas o
       navegador estrangula requestAnimationFrame em aba oculta, entao existe
       uma saida por tempo para o comeco nunca ficar preso. */
    const q1 = requestAnimationFrame(() => requestAnimationFrame(comecar));
    const reserva = window.setTimeout(comecar, 250);

    return () => {
      cancelAnimationFrame(q1);
      window.clearTimeout(reserva);
      observador?.disconnect();
      if (rede) window.clearTimeout(rede);
    };
  }, []);

  return (
    <div
      ref={alvo}
      className={`revelar ${className}`}
      data-pronto={pronto || undefined}
      data-suave={suave || undefined}
      data-visivel={visivel || undefined}
      style={atrasoMs ? { transitionDelay: `${atrasoMs}ms` } : undefined}
    >
      {children}
      <span className="revelar-cortina" aria-hidden="true" />
    </div>
  );
}
