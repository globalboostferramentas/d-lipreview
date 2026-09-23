import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import Revelar from "@/components/Revelar";
import Migalhas from "@/components/Migalhas";
import CartaoProduto from "@/components/CartaoProduto";
import { categorias, categoriaPorSlug, produtosDaCategoria } from "@/content/catalogo";
import { fotoDoProduto, capaDaCategoria } from "@/content/fotos";
import { negocio } from "@/content/negocio";
import { linkCardapio, linkWhatsApp, mensagemCategoria, moeda } from "@/lib/links";
import { JsonLd, migalhas as migalhasLd } from "@/lib/dados-estruturados";

export const dynamicParams = false;

export function generateStaticParams() {
  return categorias.filter((c) => c.publicada).map((c) => ({ categoria: c.slug }));
}

type Props = { params: Promise<{ categoria: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria: slug } = await params;
  const cat = categoriaPorSlug(slug);
  if (!cat) return {};

  const n = produtosDaCategoria(cat.id).length;
  const capa = capaDaCategoria(cat.id);

  return {
    // Absoluto: com o sufixo padrao do layout, os nomes longos passavam de 60.
    title: { absolute: `${cat.nome} com entrega no Rio | Chef Júlia Andrade` },
    description: cat.definicao
      ? cat.definicao.slice(0, 155)
      : `${n} opções de ${cat.nome.toLowerCase()} da Chef Júlia Andrade, com entrega no Rio de Janeiro.`,
    alternates: { canonical: `/${cat.slug}` },
    openGraph: {
      title: `${cat.nome} | DÉLI By Chef Júlia Andrade`,
      description: cat.definicao,
      images: capa ? [{ url: capa.src, alt: capa.alt }] : undefined,
    },
  };
}

export default async function PaginaCategoria({ params }: Props) {
  const { categoria: slug } = await params;
  const cat = categoriaPorSlug(slug);
  if (!cat) notFound();

  const lista = produtosDaCategoria(cat.id);

  /**
   * Categoria em que nenhum produto tem foto pareada, hoje so Délis.
   *
   * Nesse caso a grade viraria quatorze molduras vazias em fila, que parece
   * site quebrado. A pagina passa a ser lista de precos, que e o formato do
   * proprio cardapio na pagina 28, e a foto da familia entra como faixa no
   * topo. Nenhuma foto foi atribuida a produto por semelhanca. Ver PENDENCIAS.
   */
  const algumaFoto = lista.some((pr) => fotoDoProduto(pr.id));
  const capa = capaDaCategoria(cat.id);
  const outras = categorias.filter((c) => c.publicada && c.id !== cat.id);
  const trilha = [
    { nome: "Início", url: "/" },
    { nome: "Delivery", url: "/delivery" },
    { nome: cat.nome, url: `/${cat.slug}` },
  ];

  return (
    <>
      <header className="border-b border-linha">
        <div className="mx-auto max-w-[86rem] px-5 pb-bloco pt-8 lg:px-10">
          <Migalhas itens={trilha} />

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-20">
            <div>
              <h1 className="titulo titulo-grande max-w-[16ch] text-display text-azul">{cat.nome}</h1>
              {cat.definicao && (
                <p className="subtitulo mt-7 max-w-[58ch] text-t3 leading-relaxed text-azul-suave">
                  {cat.definicao}
                </p>
              )}
            </div>

            {cat.introducao && (
              <div className="regua pt-7 lg:border-t-0 lg:pt-0">
                <p className="max-w-[52ch] text-azul-suave">{cat.introducao}</p>
              </div>
            )}
          </div>
        </div>
      </header>

      <section className="border-b border-linha">
        <div className="mx-auto max-w-[86rem] px-5 py-secao lg:px-10">
          <h2 className="sr-only">Opções de {cat.nome}</h2>

          {algumaFoto ? (
            <ul className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-20 xl:grid-cols-4">
              {lista.map((pr, i) => (
                <li key={pr.id}>
                  <CartaoProduto produto={pr} categoriaSlug={cat.slug} prioridade={i < 4} />
                </li>
              ))}
            </ul>
          ) : (
            <>
              {capa && (
                <Revelar className="relative mb-bloco aspect-[16/7] w-full overflow-hidden bg-areia">
                  <Image
                    src={capa.src}
                    alt={capa.alt}
                    fill
                    priority
                    sizes="100vw"
                    className="viva object-cover"
                  />
                </Revelar>
              )}

              <ul className="lg:grid lg:grid-cols-2 lg:gap-x-20">
                {lista.map((pr) => (
                  <li key={pr.id} className="regua">
                    <Link
                      href={`/${cat.slug}/${pr.slug}`}
                      className="group flex items-baseline justify-between gap-x-8 py-5"
                    >
                      {/* min-w-0 e flex-1: o nome comprido quebra dentro da
                          propria coluna em vez de empurrar o preco para baixo */}
                      <span className="min-w-0 flex-1 max-w-[46ch]">
                        <span className="titulo block text-t3 text-azul transition-colors group-hover:text-dourado">
                          {pr.nome}
                        </span>
                        {(pr.descricaoCurta ?? pr.serve) && (
                          <span className="mt-2 block text-nota leading-relaxed text-azul-suave">
                            {pr.descricaoCurta ?? `Serve ${pr.serve}`}
                          </span>
                        )}
                      </span>

                      {pr.preco && (
                        <span className="shrink-0 text-t3 font-light tabular-nums text-azul">
                          {moeda(pr.preco.valor)}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="regua mt-secao flex flex-wrap items-center gap-x-8 gap-y-4 pt-10">
            <a
              href={linkWhatsApp(mensagemCategoria(cat.nome), `categoria-${cat.slug}`, "rodape-categoria")}
              className="espacado bg-azul px-8 py-4 text-etiqueta text-areia transition-colors hover:bg-azul-profundo"
            >
              Pedir pelo WhatsApp
            </a>
            <a
              {...linkCardapio(`categoria-${cat.slug}`, "rodape-categoria")}
              className="espacado border-b border-azul pb-1 text-etiqueta text-azul transition-colors hover:border-dourado hover:text-dourado"
            >
              Ver o cardápio completo
            </a>
            <p className="text-nota text-azul-suave">
              Pedido mínimo de {negocio.operacao.pedidoMinimo.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 })}. Entrega de {negocio.operacao.entrega.diasTexto}.
            </p>
          </div>
        </div>
      </section>

      <nav aria-label="Outras categorias" className="bg-areia">
        <div className="mx-auto max-w-[86rem] px-5 py-secao lg:px-10">
          <h2 className="espacado text-etiqueta text-azul-suave">Continue pelo cardápio</h2>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            {outras.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/${c.slug}`}
                  className="titulo text-t3 text-azul underline-offset-[6px] hover:text-dourado hover:underline"
                >
                  {c.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <JsonLd dados={migalhasLd(trilha)} />
    </>
  );
}
