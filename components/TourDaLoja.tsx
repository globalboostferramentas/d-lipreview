"use client";

import { useRef, useState } from "react";

const DESCRICAO =
  "Vídeo gravado na loja da DÉLI, mostrando a fachada azul com o selo da Chef Júlia Andrade, o balcão de café, a vitrine e as mesas na calçada";

/**
 * O video do espaco fisico. Ele nunca pode disputar banda com a primeira dobra.
 *
 * Quem garante isso e `preload="none"`: o navegador baixa so o poster, 62 KB, e
 * nao toca nos 2,9 MB de video ate alguem apertar Assistir. Antes existia aqui
 * um IntersectionObserver que trocava uma <img> por um <video> ao chegar perto
 * da tela. Fazia a mesma economia com dois problemas: o video nao existia no
 * HTML entregue pelo servidor, o que o briefing proibe, e sem JavaScript o
 * botao Assistir ficava na tela sem funcao nenhuma.
 *
 * Os data-atributos existem para que a versao empacotada, que roda sem React,
 * religue os dois botoes com poucas linhas. Ver scripts/empacotar.mjs.
 */
export default function TourDaLoja() {
  const video = useRef<HTMLVideoElement>(null);
  const [tocando, setTocando] = useState(false);
  const [comSom, setComSom] = useState(false);

  const alternar = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  const alternarSom = () => {
    const v = video.current;
    if (!v) return;
    v.muted = !v.muted;
    setComSom(!v.muted);
  };

  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden bg-azul-profundo sm:aspect-[4/5] lg:aspect-[3/4]">
      <video
        ref={video}
        data-tour-video
        className="h-full w-full object-cover"
        poster="/videos/tour-poster.jpg"
        muted
        loop
        playsInline
        preload="none"
        aria-label={DESCRICAO}
        onPlay={() => setTocando(true)}
        onPause={() => setTocando(false)}
      >
        <source src="/videos/tour.webm" type="video/webm" />
        <source src="/videos/tour.mp4" type="video/mp4" />
        Seu navegador não reproduz vídeo. A DÉLI fica na Avenida das Américas, 500,
        Loja 124, Bloco 21, no Shopping Downtown.
      </video>

      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-4 sm:p-6">
        <button
          type="button"
          onClick={alternar}
          data-tour="tocar"
          className="espacado border border-areia/40 bg-azul-profundo/70 px-4 py-2 text-etiqueta text-areia backdrop-blur-[2px] transition-colors hover:bg-azul-profundo"
        >
          {tocando ? "Pausar" : "Assistir"}
        </button>
        <button
          type="button"
          onClick={alternarSom}
          data-tour="som"
          aria-pressed={comSom}
          className="espacado border border-areia/40 bg-azul-profundo/70 px-4 py-2 text-etiqueta text-areia backdrop-blur-[2px] transition-colors hover:bg-azul-profundo"
        >
          {comSom ? "Som ligado" : "Som"}
        </button>
      </div>
    </div>
  );
}
