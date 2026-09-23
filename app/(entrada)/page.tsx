import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { negocio } from "@/content/negocio";
import { destaqueMesaPosta } from "@/content/vitrine";
import { hora } from "@/lib/links";

export const metadata: Metadata = {
  title: { absolute: "Chef Júlia Andrade: delivery no Rio e a DÉLI na Barra" },
  description:
    "Peça o delivery da Chef Júlia Andrade, com entradas, focaccias e kits para receber, ou visite a DÉLI, café e loja no Shopping Downtown, Barra da Tijuca.",
  alternates: { canonical: "/" },
};

/**
 * Icones das duas portas. Desenhados em linha de 1,5px, cantos retos, na cor
 * do texto. Sao objetos concretos (a sacola do pedido, a fachada da loja),
 * nao simbolo de conceito abstrato. Decorativos: o nome da opcao ao lado ja
 * diz tudo, entao ficam fora da arvore de acessibilidade.
 */
function IconeDelivery() {
  return (
    <svg viewBox="0 0 40 40" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {/* sacola */}
      <path d="M8 14h24l-2 20H10L8 14Z" strokeLinejoin="miter" />
      <path d="M15 14v-3a5 5 0 0 1 10 0v3" />
      {/* espiga da marca, simplificada no volume da sacola */}
      <path d="M20 30v-9" />
      <path d="M20 24c-2 0-3.5-1.3-4-3M20 24c2 0 3.5-1.3 4-3M20 27.5c-2 0-3.5-1.3-4-3M20 27.5c2 0 3.5-1.3 4-3" />
    </svg>
  );
}

function IconePresencial() {
  return (
    <svg viewBox="0 0 40 40" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {/* toldo */}
      <path d="M6 10h28l-2 6H8L6 10Z" strokeLinejoin="miter" />
      <path d="M13 10l-1 6M20 10v6M27 10l1 6" />
      {/* fachada, porta e vitrine */}
      <path d="M8 16v17h24V16" />
      <path d="M12 33V22h7v11" />
      <path d="M23 22h6v6h-6z" />
      <path d="M5 33h30" />
    </svg>
  );
}

/**
 * Tela de entrada. Briefing de alteracoes de 22/09/2026, com o ajuste pedido
 * em 23/09/2026: uma foto so, ocupando a coluna inteira, e as duas opcoes
 * com icone ao lado do texto.
 *
 * As opcoes ficam uma embaixo da outra, alinhadas a esquerda. Delivery vem
 * primeiro e cheio, porque e o foco da marca. Presencial vem vazado.
 *
 * As duas sao links comuns no HTML do servidor. A escolha nao fica guardada
 * no navegador: o projeto nao usa cookie nem localStorage.
 */
export default function Entrada() {
  const op = negocio.operacao;
  const end = negocio.endereco;
  const loja = negocio.loja;

  return (
    <main
      id="conteudo"
      className="grid min-h-svh bg-papel lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
    >
      {/* A foto: uma so, altura da tela inteira na tela larga. No celular ela
          vem primeiro, numa faixa baixa, para as opcoes aparecerem sem rolar. */}
      <figure className="relative h-[28svh] min-h-[11rem] lg:order-2 lg:h-auto">
        <Image
          src={destaqueMesaPosta.src}
          alt={destaqueMesaPosta.alt}
          fill
          priority
          sizes="(min-width: 1024px) 52vw, 100vw"
          className="object-cover"
        />
      </figure>

      {/* pb-24 no celular: folga para o botao flutuante de WhatsApp nao cobrir
          a ultima opcao quando a pagina chega ao fim. */}
      <div className="flex flex-col justify-center px-5 pb-24 pt-7 lg:order-1 lg:px-14 lg:py-10 xl:px-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/simbolo-espiga.svg" alt="" width={18} height={26} className="hidden h-9 w-auto self-start lg:block" />

        <p className="espacado text-etiqueta text-dourado lg:mt-6">{negocio.assinatura}</p>
        <h1 className="mt-3 max-w-[16ch] lg:mt-5 titulo titulo-grande text-display text-azul">
          Chef Júlia Andrade
        </h1>
        <p className="subtitulo mt-5 hidden max-w-[42ch] text-corpo-g text-azul-suave sm:block">
          Receba em casa pelo delivery ou venha até a DÉLI, a nossa loja na {end.bairro}.
        </p>

        <nav aria-label="Escolha como quer comprar" className="mt-6 max-w-[34rem] lg:mt-8">
          <ul className="space-y-3 lg:space-y-4">
            <li>
              <Link
                href="/delivery"
                className="group flex items-center gap-5 bg-azul px-5 py-5 lg:px-6 lg:py-6 text-areia transition-colors hover:bg-azul-profundo focus-visible:outline-offset-4 sm:px-7"
              >
                <span className="shrink-0 text-dourado-claro">
                  <IconeDelivery />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="titulo block text-t2">Delivery</span>
                  <span className="mt-1 block text-nota text-areia/80">
                    Cardápio completo e pedido pelo WhatsApp. Entrega de{" "}
                    {op.entrega.diasTexto}, mínimo de R$ {op.pedidoMinimo}.
                  </span>
                </span>
                <span aria-hidden="true" className="shrink-0 text-t2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/a-deli"
                className="group flex items-center gap-5 border border-azul px-5 py-5 lg:px-6 lg:py-6 text-azul transition-colors hover:bg-areia sm:px-7"
              >
                <span className="shrink-0 text-dourado">
                  <IconePresencial />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="titulo block text-t2">Presencial</span>
                  <span className="mt-1 block text-nota text-azul-suave">
                    DÉLI no {end.referencia}. De {loja.dias}, das {hora(loja.abre)} às{" "}
                    {hora(loja.fecha)}.
                  </span>
                </span>
                <span aria-hidden="true" className="shrink-0 text-t2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
