import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Migalhas from "@/components/Migalhas";
import CartaoProduto from "@/components/CartaoProduto";
import {
  categorias,
  categoriaPorSlug,
  produtoPorSlug,
  produtos,
  produtosDaCategoria,
} from "@/content/catalogo";
import { fotoDoProduto } from "@/content/fotos";
import { negocio } from "@/content/negocio";
import { linkCardapio, linkWhatsApp, mensagemProduto, moeda } from "@/lib/links";
import { JsonLd, migalhas as migalhasLd, produtoLd } from "@/lib/dados-estruturados";

export const dynamicParams = false;

export function generateStaticParams() {
  return produtos
    .filter((pr) => pr.publicada)
    .map((pr) => {
      const cat = categorias.find((c) => c.id === pr.categoriaId)!;
      return { categoria: cat.slug, produto: pr.slug };
    });
}

type Props = { params: Promise<{ categoria: string; produto: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria, produto } = await params;
  const pr = produtoPorSlug(categoria, produto);
  if (!pr) return {};
  const foto = fotoDoProduto(pr.id);

  const partes = [pr.descricao ?? pr.descricaoCurta, pr.serve && `Serve ${pr.serve}.`].filter(Boolean);
  const descricao =
    partes.join(" ").slice(0, 155) ||
    `${pr.nome} da DÉLI By Chef Júlia Andrade, com entrega no Rio de Janeiro.`;

  return {
    // Nome com a marca quando cabe em 60 caracteres. Se nao cabe, so o nome.
    title: {
      absolute:
        `${pr.nome} | Chef Júlia Andrade`.length <= 60 ? `${pr.nome} | Chef Júlia Andrade` : pr.nome,
    },
    description: descricao,
    alternates: { canonical: `/${categoria}/${pr.slug}` },
    openGraph: {
      type: "article",
      title: `${pr.nome} | DÉLI By Chef Júlia Andrade`,
      description: descricao,
      images: foto ? [{ url: foto.src, alt: foto.alt }] : undefined,
    },
  };
}

/** Uma linha da ficha. Rotulo a esquerda, valor a direita, regua em cima. */
function Linha({ rotulo, children }: { rotulo: string; children: React.ReactNode }) {
  return (
    <div className="regua grid gap-1 py-4 sm:grid-cols-[minmax(0,9rem)_minmax(0,1fr)] sm:gap-6">
      <dt className="espacado text-etiqueta text-azul-suave sm:pt-[0.3rem]">{rotulo}</dt>
      <dd className="max-w-[46ch] text-azul">{children}</dd>
    </div>
  );
}

export default async function PaginaProduto({ params }: Props) {
  const { categoria: catSlug, produto: prodSlug } = await params;
  const cat = categoriaPorSlug(catSlug);
  const pr = produtoPorSlug(catSlug, prodSlug);
  if (!cat || !pr) notFound();

  const foto = fotoDoProduto(pr.id);
  const relacionados = produtosDaCategoria(cat.id)
    .filter((x) => x.id !== pr.id)
    .slice(0, 3);

  const trilha = [
    { nome: "Início", url: "/" },
    { nome: "Delivery", url: "/delivery" },
    { nome: cat.nome, url: `/${cat.slug}` },
    { nome: pr.nome, url: `/${cat.slug}/${pr.slug}` },
  ];

  /** So entra na ficha o que o cardapio informa para este produto. */
  const ficha: [string, string][] = [];
  if (pr.serve) ficha.push(["Serve", pr.serve]);
  if (pr.peso) ficha.push(["Peso", pr.peso]);
  if (pr.tamanho) ficha.push(["Tamanho", pr.tamanho]);
  if (pr.modoDeServir) ficha.push(["Como servir", pr.modoDeServir]);
  if (pr.armazenamento) ficha.push(["Armazenamento", pr.armazenamento]);
  if (pr.disponibilidade) ficha.push(["Disponibilidade", pr.disponibilidade]);

  const acompanhamentos = pr.acompanhamentos ?? [];
  const observacoes = pr.observacoes ?? [];

  return (
    <>
      <article>
        <div className="mx-auto max-w-[86rem] px-5 pt-8 lg:px-10">
          <Migalhas itens={trilha} />
        </div>

        <div className="mx-auto grid max-w-[86rem] items-start gap-10 px-5 pb-bloco pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)] lg:gap-16 lg:px-10">
          {/* Fotografia primeiro na tela larga, e primeiro no celular tambem. */}
          <figure className="order-1 lg:order-none">
            {foto ? (
              <>
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-areia">
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    fill
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    priority
                    className="object-cover"
                  />
                </div>
              </>
            ) : (
              <div className="flex aspect-[4/5] w-full items-end bg-areia p-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/simbolo-espiga.svg" alt="" width={22} height={32} className="h-10 w-auto opacity-25" />
              </div>
            )}
          </figure>

          <div className="order-2 flex flex-col lg:order-none lg:pt-4">
            <p className="espacado text-etiqueta text-dourado">
              <Link href={`/${cat.slug}`} className="hover:text-azul">
                {cat.nome}
              </Link>
            </p>

            <h1 className="titulo mt-5 max-w-[18ch] text-t1 text-azul">{pr.nome}</h1>

            {(pr.descricao || pr.descricaoCurta) && (
              <p className="subtitulo mt-6 max-w-[52ch] text-corpo-g text-azul-suave">
                {pr.descricao ?? pr.descricaoCurta}
              </p>
            )}

            {pr.preco && (
              <p className="regua mt-9 pt-8">
                <span className="text-t2 font-light tabular-nums text-azul">{moeda(pr.preco.valor)}</span>
                {pr.preco.observacao && (
                  <span className="mt-2 block max-w-[40ch] text-nota text-azul-suave">
                    {pr.preco.observacao}
                  </span>
                )}
              </p>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={linkWhatsApp(mensagemProduto(pr.nome), `produto-${pr.slug}`, "principal")}
                className="espacado bg-azul px-8 py-4 text-etiqueta text-areia transition-colors hover:bg-azul-profundo"
              >
                Pedir pelo WhatsApp
              </a>
              <a
                {...linkCardapio(`produto-${pr.slug}`, "principal")}
                className="espacado border-b border-azul pb-1 text-etiqueta text-azul transition-colors hover:border-dourado hover:text-dourado"
              >
                Ver o cardápio completo
              </a>
            </div>

            {/* Ficha, o que vem e observacoes eram tres blocos com tres
                formatos. Agora sao uma lista so: rotulo a esquerda, valor a
                direita, regua de 1px entre as linhas, como as tabelas do
                manual. E o que tira a pagina da bagunca. */}
            {(ficha.length > 0 || acompanhamentos.length > 0 || observacoes.length > 0) && (
              <dl className="mt-12">
                {ficha.map(([rotulo, valor]) => (
                  <Linha key={rotulo} rotulo={rotulo}>
                    {valor}
                  </Linha>
                ))}

                {acompanhamentos.length > 0 && (
                  <Linha rotulo="O que vem">
                    <ul className="space-y-1">
                      {acompanhamentos.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </Linha>
                )}

                {/* Rotulo neutro de proposito. O campo observacoes do catalogo
                    mistura prazo de encomenda, preco por tamanho, linha do
                    produto e o que nao vem junto. Qualquer rotulo mais
                    especifico mentiria em parte dos produtos. */}
                {observacoes.length > 0 && (
                  <Linha rotulo="Observações">
                    {observacoes.map((o) => (
                      <span key={o} className="block">
                        {o}
                      </span>
                    ))}
                  </Linha>
                )}
              </dl>
            )}

            <p className="regua mt-10 pt-6 text-nota text-azul-suave">
              Pedido mínimo de {moeda(negocio.operacao.pedidoMinimo)}. Entrega de{" "}
              {negocio.operacao.entrega.diasTexto} no Rio de Janeiro.
            </p>
          </div>
        </div>
      </article>

      {relacionados.length > 0 && (
        <section className="border-t border-linha bg-areia">
          <div className="mx-auto max-w-[86rem] px-5 py-secao lg:px-10">
            <h2 className="espacado text-etiqueta text-azul-suave">Mais de {cat.nome}</h2>
            <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
              {relacionados.map((x) => (
                <li key={x.id}>
                  <CartaoProduto produto={x} categoriaSlug={cat.slug} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <JsonLd dados={migalhasLd(trilha)} />
      <JsonLd dados={produtoLd(pr, cat, foto)} />
    </>
  );
}
