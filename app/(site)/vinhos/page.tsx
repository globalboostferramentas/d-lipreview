import type { Metadata } from "next";
import Migalhas from "@/components/Migalhas";
import { vinhos } from "@/content/catalogo";
import { negocio } from "@/content/negocio";
import { linkCardapio, linkWhatsApp, moeda, slugDe } from "@/lib/links";
import { JsonLd, migalhas } from "@/lib/dados-estruturados";

export const metadata: Metadata = {
  title: { absolute: "Vinhos com entrega no Rio | Chef Júlia Andrade" },
  description:
    "Vinhos avulsos do delivery da Chef Júlia Andrade para acompanhar o pedido, com o valor de cada um. Entrega no Rio de segunda a sábado.",
  alternates: { canonical: "/vinhos" },
};

const trilha = [
  { nome: "Início", url: "/" },
  { nome: "Delivery", url: "/delivery" },
  { nome: "Vinhos", url: "/vinhos" },
];

/**
 * Vinhos avulsos, cardapio pag. 11. Eles nao sao produto do catalogo e nao
 * tinham pagina. Ganharam esta em 23/09/2026, quando o cardapio da pagina
 * Delivery deixou de mostrar preco e passou a levar cada item para a pagina
 * onde o valor esta. Cada vinho tem ancora propria, que e para onde a lista
 * do Delivery aponta.
 */
export default function PaginaVinhos() {
  return (
    <>
      <header className="border-b border-linha">
        <div className="mx-auto max-w-[86rem] px-5 pb-bloco pt-8 lg:px-10">
          <Migalhas itens={trilha} />
          <h1 className="titulo titulo-grande mt-10 text-display text-azul">Vinhos</h1>
          <p className="subtitulo mt-7 max-w-[58ch] text-t3 leading-relaxed text-azul-suave">
            Os vinhos avulsos do cardápio do delivery, para acompanhar o pedido. O
            pedido é feito pelo WhatsApp, como o resto do cardápio.
          </p>
        </div>
      </header>

      <section>
        <div className="mx-auto max-w-[86rem] px-5 py-secao lg:px-10">
          <h2 className="sr-only">Lista de vinhos com valor</h2>
          <ul className="max-w-[60rem]">
            {vinhos.map((v) => (
              <li
                key={v.nome}
                id={slugDe(v.nome)}
                className="regua flex scroll-mt-28 items-baseline justify-between gap-x-8 py-5 target:bg-areia"
              >
                <span className="min-w-0 flex-1">
                  <span className="titulo block text-t3 text-azul">{v.nome}</span>
                  <span className="mt-2 block text-nota text-azul-suave">{v.detalhe}</span>
                </span>
                <span className="shrink-0 text-t3 font-light tabular-nums text-azul">{moeda(v.preco)}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-[60ch] text-nota text-azul-suave">
            Preços do cardápio de agosto. O valor final é confirmado no pedido.
          </p>

          <div className="regua mt-bloco flex flex-wrap items-center gap-x-8 gap-y-4 pt-10">
            <a
              href={linkWhatsApp("Olá! Queria incluir um vinho no meu pedido.", "vinhos", "rodape-vinhos")}
              className="espacado bg-azul px-8 py-4 text-etiqueta text-areia transition-colors hover:bg-azul-profundo"
            >
              Pedir pelo WhatsApp
            </a>
            <a
              {...linkCardapio("vinhos", "rodape-vinhos")}
              className="espacado border-b border-azul pb-1 text-etiqueta text-azul transition-colors hover:border-dourado hover:text-dourado"
            >
              Ver o cardápio completo
            </a>
            <p className="text-nota text-azul-suave">
              Pedido mínimo de R$ {negocio.operacao.pedidoMinimo}. Entrega de{" "}
              {negocio.operacao.entrega.diasTexto}.
            </p>
          </div>
        </div>
      </section>

      <JsonLd dados={migalhas(trilha)} />
    </>
  );
}
