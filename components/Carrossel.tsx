"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

/**
 * Carrossel horizontal de fotografia, com passagem continua.
 *
 * Sem biblioteca. O deslocamento e a propria rolagem do navegador, o que da tres
 * coisas de graca: arrastar com o dedo, arrastar com o trackpad e navegar pelo
 * teclado. A passagem automatica e um laco que soma alguns pixels por quadro na
 * mesma rolagem, entao ela convive com tudo isso em vez de brigar.
 *
 * O laco e sem costura: os itens sao repetidos uma vez e, quando a rolagem
 * passa da metade, ela volta a metade exata. Como as duas metades sao iguais,
 * nao existe salto visivel. As copias saem da arvore de acessibilidade, senao o
 * leitor de tela anuncia os oito produtos duas vezes.
 *
 * A passagem para sozinha em cinco situacoes: ponteiro em cima, foco do teclado
 * dentro, dedo arrastando, secao fora da tela e sistema pedindo menos
 * movimento. Mais o botao de pausa, que existe porque conteudo em movimento
 * automatico sem controle e barreira de acessibilidade conhecida.
 *
 * Sem JavaScript a lista continua rolavel na horizontal, e todo o conteudo ja
 * esta no HTML do servidor.
 *
 * Os data-atributos existem para que a versao empacotada, que roda sem React,
 * religue tudo com poucas linhas. Ver scripts/empacotar.mjs.
 */
export default function Carrossel({
  children,
  rotulo,
  /** Pixels por segundo. Devagar: a foto e o assunto, nao o movimento. */
  velocidade = 26,
}: {
  children: ReactNode;
  rotulo: string;
  velocidade?: number;
}) {
  const trilho = useRef<HTMLUListElement>(null);
  const [pausado, setPausado] = useState(false);
  const [progresso, setProgresso] = useState(0);

  /* Fica em ref porque o laco de animacao le isso a cada quadro e nao pode
     depender de re-render para enxergar a mudanca. */
  const suspenso = useRef({ mouse: false, foco: false, dedo: false, fora: false });
  const ateQuando = useRef(0);

  /**
   * Posicao em ponto flutuante, mantida do lado de ca.
   *
   * O navegador arredonda scrollLeft para pixel inteiro. Como cada quadro anda
   * menos de meio pixel, somar direto em scrollLeft perde a fracao e o trilho
   * fica parado. Entao a conta acontece aqui e o scrollLeft so recebe o valor
   * pronto. Quando quem rola e a pessoa, esta conta se realinha.
   */
  const posicao = useRef(0);

  const medir = useCallback(() => {
    const el = trilho.current;
    if (!el) return;
    const metade = el.scrollWidth / 2;
    setProgresso(metade > 0 ? (el.scrollLeft % metade) / metade : 0);
  }, []);

  useEffect(() => {
    const el = trilho.current;
    if (!el) return;

    posicao.current = el.scrollLeft;

    const aoRolar = () => {
      /* Rolagem de fora, feita pela pessoa ou pelos botoes: realinha a conta.
         A margem de 2 px cobre o arredondamento das nossas proprias escritas. */
      if (Math.abs(el.scrollLeft - posicao.current) > 2) posicao.current = el.scrollLeft;
      medir();
    };

    el.addEventListener("scroll", aoRolar, { passive: true });
    medir();

    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observador = new IntersectionObserver(
      ([e]) => {
        suspenso.current.fora = !e.isIntersecting;
      },
      { threshold: 0.15 },
    );
    observador.observe(el);

    let quadro = 0;
    let anterior = 0;

    const passo = (agora: number) => {
      quadro = requestAnimationFrame(passo);
      const dt = anterior ? Math.min(agora - anterior, 120) : 0;
      anterior = agora;

      const s = suspenso.current;
      if (pausado || reduzido.matches || s.mouse || s.foco || s.dedo || s.fora) return;
      if (agora < ateQuando.current) return; // folga depois de um clique ou arrasto

      posicao.current += (velocidade * dt) / 1000;

      /* A volta. Como as duas metades sao identicas, o olho nao percebe. */
      const metade = el.scrollWidth / 2;
      if (metade > 0 && posicao.current >= metade) posicao.current -= metade;

      el.scrollLeft = posicao.current;
    };
    quadro = requestAnimationFrame(passo);

    return () => {
      cancelAnimationFrame(quadro);
      el.removeEventListener("scroll", aoRolar);
      observador.disconnect();
    };
  }, [medir, pausado, velocidade]);

  /** Um item por clique. Depois disso a passagem espera quatro segundos. */
  const empurrar = (sentido: 1 | -1) => {
    const el = trilho.current;
    if (!el) return;
    const primeiro = el.querySelector("li");
    const vao = parseFloat(getComputedStyle(el).columnGap || "0") || 0;
    const largura = primeiro ? primeiro.getBoundingClientRect().width + vao : el.clientWidth;
    const suave = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    ateQuando.current = performance.now() + 4000;
    el.scrollBy({ left: sentido * largura, behavior: suave ? "smooth" : "auto" });
  };

  const marcar = (chave: keyof typeof suspenso.current, valor: boolean) => () => {
    suspenso.current[chave] = valor;
    if (!valor) ateQuando.current = performance.now() + 1200;
  };

  /* As copias que fecham o laco. Saem da leitura de tela e tambem do foco: link
     que recebe Tab dentro de um trecho aria-hidden e erro de acessibilidade, e
     faria o teclado passar duas vezes pelos mesmos oito produtos. */
  const copias = Children.map(children, (filho, i) =>
    isValidElement(filho)
      ? cloneElement(filho as React.ReactElement<{ "aria-hidden"?: boolean; inert?: boolean }>, {
          key: `copia-${i}`,
          "aria-hidden": true,
          inert: true,
        })
      : filho,
  );

  return (
    <div data-carrossel-caixa>
      <ul
        ref={trilho}
        data-carrossel-trilho
        data-auto={velocidade}
        tabIndex={0}
        aria-label={rotulo}
        onMouseEnter={marcar("mouse", true)}
        onMouseLeave={marcar("mouse", false)}
        onFocus={marcar("foco", true)}
        onBlur={marcar("foco", false)}
        onPointerDown={marcar("dedo", true)}
        onPointerUp={marcar("dedo", false)}
        onPointerCancel={marcar("dedo", false)}
        className="trilho -mx-5 flex gap-6 overflow-x-auto px-5 pb-1 lg:mx-0 lg:px-0"
      >
        {children}
        {copias}
      </ul>

      {/* Barra de percurso e controles. A barra e a mesma regra de 1px que
          separa as secoes, com o trecho percorrido em azul. */}
      <div className="mt-10 flex items-center gap-8">
        <div className="relative h-px flex-1 bg-linha" aria-hidden="true">
          <span
            data-carrossel-percurso
            className="absolute inset-y-0 left-0 bg-azul"
            style={{ width: `${Math.max(8, progresso * 100)}%` }}
          />
        </div>

        <div className="flex shrink-0 gap-3">
          <BotaoPausa pausado={pausado} aoClicar={() => setPausado((v) => !v)} />
          <BotaoSeta sentido="anterior" aoClicar={() => empurrar(-1)} rotulo="Ver os produtos anteriores" />
          <BotaoSeta sentido="proximo" aoClicar={() => empurrar(1)} rotulo="Ver os próximos produtos" />
        </div>
      </div>
    </div>
  );
}

const ESTILO_BOTAO =
  "flex h-11 w-11 items-center justify-center border border-azul text-azul transition-colors hover:bg-azul hover:text-areia";

function BotaoSeta({
  sentido,
  aoClicar,
  rotulo,
}: {
  sentido: "anterior" | "proximo";
  aoClicar: () => void;
  rotulo: string;
}) {
  return (
    <button
      type="button"
      onClick={aoClicar}
      data-carrossel={sentido}
      aria-label={rotulo}
      className={ESTILO_BOTAO}
    >
      <svg
        width="17"
        height="12"
        viewBox="0 0 17 12"
        fill="none"
        aria-hidden="true"
        className={sentido === "anterior" ? "rotate-180" : undefined}
      >
        <path d="M0 6h15M10.5 1L15.5 6l-5 5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </button>
  );
}

function BotaoPausa({ pausado, aoClicar }: { pausado: boolean; aoClicar: () => void }) {
  return (
    <button
      type="button"
      onClick={aoClicar}
      data-carrossel="pausa"
      data-pausado={pausado || undefined}
      aria-label={pausado ? "Retomar a passagem dos produtos" : "Pausar a passagem dos produtos"}
      className={ESTILO_BOTAO}
    >
      <svg width="10" height="12" viewBox="0 0 10 12" aria-hidden="true" className="icone-pausa">
        <rect x="0" y="0" width="3" height="12" fill="currentColor" />
        <rect x="7" y="0" width="3" height="12" fill="currentColor" />
      </svg>
      <svg width="10" height="12" viewBox="0 0 10 12" aria-hidden="true" className="icone-play">
        <path d="M0 0l10 6-10 6z" fill="currentColor" />
      </svg>
    </button>
  );
}
