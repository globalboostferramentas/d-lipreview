import Link from "next/link";

export type Migalha = { nome: string; url: string };

/**
 * Breadcrumb visivel. O JSON-LD correspondente e emitido pela pagina, a partir
 * da mesma lista, para que o dado estruturado nunca divirja do que esta na tela.
 */
export default function Migalhas({ itens }: { itens: Migalha[] }) {
  return (
    <nav aria-label="Você está em" className="text-nota">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {itens.map((i, n) => {
          const ultimo = n === itens.length - 1;
          return (
            <li key={i.url} className="flex items-center gap-2">
              {ultimo ? (
                <span aria-current="page" className="text-azul-suave">
                  {i.nome}
                </span>
              ) : (
                <Link href={i.url} className="text-azul underline-offset-4 hover:underline">
                  {i.nome}
                </Link>
              )}
              {!ultimo && (
                <span aria-hidden="true" className="text-linha">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
