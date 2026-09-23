"use client";

import { useEffect, useRef } from "react";

/**
 * Motor de loop continuo por sobreposicao.
 *
 * O video oficial da Hero e um plano unico de calda sendo despejada sobre a
 * terrine. Ele termina no meio do movimento, entao um loop simples daria um
 * corte seco a cada 12 segundos. Duas camadas do mesmo arquivo, defasadas e
 * cruzadas por opacidade nos ultimos segundos, resolvem isso sem cortar.
 *
 * A velocidade reduzida deixa o gesto legivel: o assunto e a calda caindo.
 */
const VELOCIDADE = 0.6;
const CRUZAMENTO_S = 1.8;

export default function VideoHero({
  className = "",
  /** object-position das duas camadas. Serve para escolher que parte do quadro
      vertical sobrevive ao recorte quando a coluna e mais baixa que o video. */
  posicao = "50% 50%",
}: {
  className?: string;
  posicao?: string;
}) {
  const camadaA = useRef<HTMLVideoElement>(null);
  const camadaB = useRef<HTMLVideoElement>(null);
  const quadro = useRef<number | undefined>(undefined);

  useEffect(() => {
    const a = camadaA.current;
    const b = camadaB.current;
    if (!a || !b) return;

    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduzido.matches) return; // fica no poster, sem movimento

    let atual = a;
    let proximo = b;
    let trocando = false;

    a.playbackRate = VELOCIDADE;
    b.playbackRate = VELOCIDADE;
    a.play().catch(() => {}); // autoplay bloqueado: o poster segue visivel

    const passo = () => {
      const v = atual;
      if (v.duration && !trocando) {
        const restante = (v.duration - v.currentTime) / VELOCIDADE;
        if (restante <= CRUZAMENTO_S) {
          trocando = true;
          proximo.currentTime = 0;
          proximo.playbackRate = VELOCIDADE;
          proximo.play().catch(() => {});
          proximo.style.opacity = "1";
          v.style.opacity = "0";
          window.setTimeout(() => {
            v.pause();
            v.currentTime = 0;
            const t = atual;
            atual = proximo;
            proximo = t;
            trocando = false;
          }, CRUZAMENTO_S * 1000);
        }
      }
      quadro.current = requestAnimationFrame(passo);
    };
    quadro.current = requestAnimationFrame(passo);

    return () => {
      if (quadro.current) cancelAnimationFrame(quadro.current);
      a.pause();
      b.pause();
    };
  }, []);

  const comum =
    "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ease-in-out";

  return (
    <div className={`relative overflow-hidden bg-areia-escuro ${className}`}>
      <video
        ref={camadaA}
        className={comum}
        style={{ opacity: 1, objectPosition: posicao }}
        poster="/videos/hero-poster.jpg"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <video
        ref={camadaB}
        className={comum}
        style={{ opacity: 0, objectPosition: posicao }}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
