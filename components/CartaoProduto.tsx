import Image from "next/image";
import Link from "next/link";
import type { Produto } from "@/lib/tipos";
import { fotoDoProduto } from "@/content/fotos";
import { moeda } from "@/lib/links";

/**
 * Item de grade da pagina de categoria.
 *
 * Nao e um cartao com fundo, borda e sombra. E a foto, o nome e o dado que
 * existir. O que separa um item do outro e o espaco, nao a moldura.
 */
export default function CartaoProduto({
  produto,
  categoriaSlug,
  prioridade = false,
}: {
  produto: Produto;
  categoriaSlug: string;
  prioridade?: boolean;
}) {
  const foto = fotoDoProduto(produto.id);
  const serve = produto.serve ? `Serve ${produto.serve}` : null;

  return (
    <article>
      <Link href={`/${categoriaSlug}/${produto.slug}`} className="group block">
        <div className="relative aspect-[4/5] overflow-hidden bg-areia">
          {foto ? (
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              priority={prioridade}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            /* Sem foto confirmada para este produto. Melhor o vazio do que a foto errada. */
            <div className="flex h-full items-end p-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/simbolo-espiga.svg" alt="" width={18} height={26} className="h-8 w-auto opacity-25" />
            </div>
          )}
        </div>

        <h3 className="titulo mt-5 text-t3 text-azul group-hover:text-dourado">{produto.nome}</h3>
      </Link>

      {produto.descricaoCurta && (
        <p className="mt-2 max-w-[36ch] text-nota leading-relaxed text-azul-suave">
          {produto.descricaoCurta}
        </p>
      )}

      {serve && (
        <p className="mt-2 max-w-[36ch] text-nota leading-relaxed text-azul-suave">{serve}</p>
      )}

      {produto.preco && (
        <p className="mt-3">
          <span className="text-t3 font-light tabular-nums text-azul">{moeda(produto.preco.valor)}</span>
          {produto.preco.observacao && (
            <span className="mt-1 block max-w-[36ch] text-nota text-azul-suave">
              {produto.preco.observacao}
            </span>
          )}
        </p>
      )}
    </article>
  );
}
