import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Migalhas from "@/components/Migalhas";
import Revelar from "@/components/Revelar";
import { categorias, produtosDaCategoria } from "@/content/catalogo";
import { capaDaCategoria } from "@/content/fotos";
import { negocio } from "@/content/negocio";
import { linkWhatsApp, moeda } from "@/lib/links";
import { JsonLd, migalhas as migalhasLd } from "@/lib/dados-estruturados";

export const metadata: Metadata = {
  title: "Cardápio por categoria",
  description:
    "Focaccias, mousses, terrines, bries assados, quiches, carnes, sobremesas, kits e presentes da Chef Júlia Andrade, com entrega no Rio de Janeiro.",
  alternates: { canonical: "/menu" },
};

export default function PaginaMenu() {
  const lista = categorias.filter((c) => c.publicada).sort((a, b) => a.ordem - b.ordem);
  const trilha = [
    { nome: "Início", url: "/" },
    { nome: "Delivery", url: "/delivery" },
    { nome: "Cardápio", url: "/menu" },
  ];

  return (
    <>
      <header className="border-b border-linha">
        <div className="mx-auto max-w-[86rem] px-5 pb-bloco pt-8 lg:px-10">
          <Migalhas itens={trilha} />
          <h1 className="titulo titulo-grande mt-10 max-w-[16ch] text-display text-azul">Cardápio</h1>
          <p className="subtitulo mt-7 max-w-[62ch] text-t3 leading-relaxed text-azul-suave">
            O cardápio do delivery tem {lista.length} categorias e {" "}
            {lista.reduce((n, c) => n + produtosDaCategoria(c.id).length, 0)} itens, de focaccia de
            fermentação natural a terrines, bries assados e sobremesas por encomenda. Tudo chega em
            embalagem descartável, pronto para montar e servir.
          </p>
          <p className="mt-6 max-w-[62ch] text-azul-suave">
            Pedido mínimo de {moeda(negocio.operacao.pedidoMinimo)}. Entrega de{" "}
            {negocio.operacao.entrega.diasTexto}, com frete por região.
          </p>
        </div>
      </header>

      <section>
        <div className="mx-auto max-w-[86rem] px-5 pb-secao pt-bloco lg:px-10">
          <ul className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-20 xl:grid-cols-4">
            {lista.map((c, i) => {
              const capa = capaDaCategoria(c.id);
              const n = produtosDaCategoria(c.id).length;
              return (
                <li key={c.id}>
                  <Link href={`/${c.slug}`} className="group block">
                    <Revelar atrasoMs={(i % 4) * 120}>
                      <div className="relative aspect-[4/5] overflow-hidden bg-areia">
                        {capa && (
                          <Image
                            src={capa.src}
                            alt={capa.alt}
                            fill
                            sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                            priority={i < 4}
                            className="object-cover"
                          />
                        )}
                      </div>
                    </Revelar>
                    <h2 className="titulo mt-5 text-t3 text-azul group-hover:text-dourado">{c.nome}</h2>
                  </Link>
                  <p className="espacado mt-2 text-etiqueta text-azul-suave">
                    {n} {n === 1 ? "item" : "itens"}
                  </p>
                  {c.definicao && (
                    <p className="mt-3 max-w-[44ch] text-nota text-azul-suave">{c.definicao}</p>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="regua mt-secao pt-10">
            <a
              href={linkWhatsApp("Olá! Cheguei pelo site e queria fazer um pedido.", "menu", "rodape-menu")}
              className="espacado bg-azul px-8 py-4 text-etiqueta text-areia transition-colors hover:bg-azul-profundo"
            >
              Pedir pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <JsonLd dados={migalhasLd(trilha)} />
    </>
  );
}
