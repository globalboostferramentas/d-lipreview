import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Migalhas from "@/components/Migalhas";
import Revelar from "@/components/Revelar";
import { negocio } from "@/content/negocio";
import { produtos } from "@/content/catalogo";
import { fotoDoProduto } from "@/content/fotos";
import { linkWhatsApp, moeda } from "@/lib/links";
import { JsonLd, migalhas, paginaDePerguntas } from "@/lib/dados-estruturados";

export const metadata: Metadata = {
  title: { absolute: "Eventos com a Chef Júlia Andrade: encomenda e buffet" },
  description:
    "Encomende kits e seleções para servir no seu evento, ou contrate o buffet completo da DÉLI, a partir de 20 pessoas, com equipe de cozinha e garçons.",
  alternates: { canonical: "/eventos" },
};

const trilha = [
  { nome: "Início", url: "/" },
  { nome: "Eventos", url: "/eventos" },
];

/**
 * A mensagem ja chega com os campos que o orcamento precisa. Sao os mesmos do
 * formulario previsto no briefing original, secao 6: data, numero de pessoas
 * e tipo de evento. O bairro entra porque decide frete e deslocamento.
 */
const roteiro = "\nData:\nNúmero de pessoas:\nTipo de evento:\nBairro:";
const MSG_ENCOMENDA = `Olá! Queria encomendar produtos para servir num evento.${roteiro}`;
const MSG_BUFFET = `Olá! Queria um orçamento de buffet completo.${roteiro}`;

/**
 * Pagina Eventos. Briefing de alteracoes de 22/09/2026: duas formas de
 * contratar, encomenda e buffet completo, com orcamento pelo WhatsApp.
 *
 * Fontes: negocio.eventos (cardapio pag. 44), catalogo.ts para as selecoes
 * e o RELEASE para o salao da loja. Nao existe foto de evento no acervo, entao
 * o buffet fica sem imagem em vez de ganhar uma foto que nao e de buffet.
 */
export default function PaginaEventos() {
  const ev = negocio.eventos;
  const op = negocio.operacao;

  const selecoes = ["selecao-confraternizacao", "selecao-celebrar"]
    .map((id) => produtos.find((p) => p.id === id && p.publicada))
    .filter((p) => p !== undefined);
  const foto = fotoDoProduto("selecao-celebrar");

  const perguntas = [
    {
      pergunta: "Qual é a diferença entre encomenda e buffet completo na DÉLI?",
      resposta: `Na encomenda, o cliente pede produtos e kits da DÉLI, recebe tudo pronto no endereço do evento e serve por conta própria. No buffet completo, a equipe da casa executa um cardápio personalizado no local, com equipe de cozinha e garçons, a partir de ${ev.minimoPessoas} pessoas.`,
    },
    {
      pergunta: "Qual é o número mínimo de pessoas para o buffet da DÉLI?",
      resposta: `O buffet completo da DÉLI atende eventos a partir de ${ev.minimoPessoas} pessoas. Para grupos menores, a opção é a encomenda de kits, que vão de 2 a 25 pessoas.`,
    },
    {
      pergunta: "O que está incluído no buffet completo?",
      resposta: `O buffet completo é um ${ev.formato}. O serviço inclui ${ev.inclui.join(", ").replace(/, ([^,]*)$/, " e $1")}.`,
    },
    {
      pergunta: "A encomenda para evento inclui louça e montagem?",
      resposta:
        "Não. Na encomenda, os produtos chegam em embalagens e formas descartáveis, prontos para montar e servir, com orientações de armazenamento, montagem e acompanhamentos. Pratos, talheres, louças e serviço de montagem não estão incluídos na encomenda.",
    },
    {
      pergunta: "Como pedir orçamento de evento?",
      resposta: `O orçamento de evento é feito pelo WhatsApp da DÉLI, no ${negocio.contato.whatsappFormatado}. Ajuda mandar a data, o número de pessoas, o tipo de evento e o bairro.`,
    },
  ];

  return (
    <>
      {/* ================================================================
          ABERTURA
          ================================================================ */}
      <header className="border-b border-linha">
        <div className="mx-auto max-w-[86rem] px-5 pb-bloco pt-8 lg:px-10">
          <Migalhas itens={trilha} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:items-end lg:gap-20">
            <div>
              <p className="espacado text-etiqueta text-dourado">Eventos</p>
              <h1 className="mt-6 max-w-[18ch] titulo titulo-grande text-display text-azul">
                Do kit na sua mesa ao buffet com equipe
              </h1>
              <p className="subtitulo mt-8 max-w-[56ch] text-corpo-g text-azul-suave">
                A DÉLI atende evento de dois jeitos. Você encomenda os produtos e serve
                do seu jeito, ou a equipe da casa cuida do serviço inteiro. Os dois
                começam com uma conversa pelo WhatsApp.
              </p>
            </div>
            <nav aria-label="Formas de contratar" className="regua pt-6 lg:border-t-0 lg:pt-0">
              <ol className="space-y-3">
                <li>
                  <a href="#encomenda" className="flex items-baseline gap-3 text-azul hover:text-dourado">
                    <span className="text-nota tabular-nums text-dourado">01</span>
                    <span className="titulo text-t3">Encomenda</span>
                  </a>
                </li>
                <li>
                  <a href="#buffet" className="flex items-baseline gap-3 text-azul hover:text-dourado">
                    <span className="text-nota tabular-nums text-dourado">02</span>
                    <span className="titulo text-t3">Buffet completo</span>
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </header>

      {/* ================================================================
          01 ENCOMENDA
          A foto da selecao montada ocupa a largura. Abaixo, as duas
          selecoes que servem grupo de evento, com preco e rendimento.
          ================================================================ */}
      <section id="encomenda" className="scroll-mt-24 border-b border-linha" aria-labelledby="titulo-encomenda">
        {foto && (
          <Revelar className="relative aspect-[3/2] w-full overflow-hidden bg-areia lg:aspect-[16/7]">
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </Revelar>
        )}

        <div className="mx-auto max-w-[86rem] px-5 py-secao lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
            <div className="pilha max-w-[52ch]">
              <p className="flex items-baseline gap-3">
                <span className="text-nota tabular-nums text-dourado">01</span>
                <span className="espacado text-etiqueta text-azul-suave">Você serve</span>
              </p>
              <h2 id="titulo-encomenda" className="titulo text-t1 leading-tight text-azul">
                Encomenda
              </h2>
              <p className="text-corpo-g text-azul-suave">
                Você escolhe produtos e kits no cardápio e recebe tudo no endereço do
                evento, em embalagens descartáveis, com as orientações de montagem,
                armazenamento e acompanhamentos. Chega pronto para arrumar na mesa.
              </p>
              <p className="text-corpo-g text-azul-suave">
                Valem as regras do delivery: pedido mínimo de R$ {op.pedidoMinimo},
                entrega de {op.entrega.diasTexto}, frete por região e sobremesas com{" "}
                {op.antecedenciaSobremesas} de antecedência. Louça, talheres e montagem
                não estão incluídos.
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-5 pt-4">
                <a
                  href={linkWhatsApp(MSG_ENCOMENDA, "eventos", "encomenda")}
                  className="espacado bg-azul px-8 py-4 text-etiqueta text-areia transition-colors hover:bg-azul-profundo"
                >
                  Encomendar pelo WhatsApp
                </a>
                <Link
                  href="/kits"
                  className="espacado border-b border-azul pb-1 text-etiqueta text-azul transition-colors hover:border-dourado hover:text-dourado"
                >
                  Ver todos os kits
                </Link>
              </div>
            </div>

            <div>
              <h3 className="espacado text-etiqueta text-azul-suave">Seleções para grupo</h3>
              <ul className="mt-5">
                {selecoes.map((s) => (
                  <li key={s.id} className="regua py-6">
                    <Link href={`/kits/${s.slug}`} className="group block">
                      <span className="flex items-baseline justify-between gap-6">
                        <span className="titulo text-t3 text-azul group-hover:text-dourado">{s.nome}</span>
                        {s.preco && (
                          <span className="shrink-0 tabular-nums text-azul">{moeda(s.preco.valor)}</span>
                        )}
                      </span>
                      {s.serve && (
                        <span className="mt-2 block text-nota text-azul-suave">Serve {s.serve}</span>
                      )}
                      {s.acompanhamentos && (
                        <span className="mt-3 block text-nota leading-relaxed text-azul-suave">
                          {s.acompanhamentos.join(" · ")}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          02 BUFFET COMPLETO
          Sem foto: o acervo nao tem imagem de evento. O bloco azul e a
          lista do que esta incluido fazem o peso da secao.
          ================================================================ */}
      <section id="buffet" className="scroll-mt-24 border-b border-linha bg-azul text-areia" aria-labelledby="titulo-buffet">
        <div className="mx-auto max-w-[86rem] px-5 py-secao lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-20">
            <div className="pilha max-w-[54ch]">
              <p className="flex items-baseline gap-3">
                <span className="text-nota tabular-nums text-dourado-claro">02</span>
                <span className="espacado text-etiqueta text-areia/70">A casa serve</span>
              </p>
              <h2 id="titulo-buffet" className="titulo text-t1 leading-tight">
                Buffet completo
              </h2>
              <p className="text-corpo-g text-areia/85">
                A equipe da DÉLI executa no seu evento um cardápio montado para ele, com
                ilha gastronômica, canapés servidos pelos garçons e bebida volante. As
                mini porções entram se você quiser.
              </p>
              <p className="text-corpo-g text-areia/85">
                Atende evento corporativo e particular a partir de {ev.minimoPessoas}{" "}
                pessoas. O orçamento sai pelo WhatsApp, depois de saber a data, o número
                de convidados e o formato.
              </p>
              <div className="pt-4">
                <a
                  href={linkWhatsApp(MSG_BUFFET, "eventos", "buffet")}
                  className="espacado inline-block bg-areia px-8 py-4 text-etiqueta text-azul transition-colors hover:bg-dourado-claro"
                >
                  Pedir orçamento pelo WhatsApp
                </a>
              </div>
            </div>

            <dl className="self-end">
              {[
                ["A partir de", `${ev.minimoPessoas} pessoas`],
                ["Cardápio", "personalizado, executado pela equipe da casa"],
                ["Serviço", "ilha gastronômica completa, canapés e bebida volante"],
                ["Opcional", "mini porções"],
                ["Incluído", ev.inclui.join(", ").replace(/, ([^,]*)$/, " e $1")],
              ].map(([rotulo, valor]) => (
                <div
                  key={rotulo}
                  className="grid gap-1 border-t border-areia/25 py-4 sm:grid-cols-[minmax(0,9rem)_minmax(0,1fr)] sm:gap-6"
                >
                  <dt className="espacado text-etiqueta text-dourado-claro">{rotulo}</dt>
                  <dd className="text-areia">{valor}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ================================================================
          NA LOJA
          ================================================================ */}
      <section className="border-b border-linha bg-areia">
        <div className="mx-auto flex max-w-[86rem] flex-wrap items-end justify-between gap-8 px-5 py-bloco lg:px-10">
          <div className="max-w-[56ch]">
            <h2 className="titulo text-t2 text-azul">Evento dentro da DÉLI</h2>
            <p className="mt-4 text-azul-suave">
              A loja no {negocio.endereco.referencia} pode ser fechada e reservada para
              brunch, pequena celebração ou evento personalizado.
            </p>
          </div>
          <Link
            href="/a-deli"
            className="espacado border-b border-azul pb-1 text-etiqueta text-azul transition-colors hover:border-dourado hover:text-dourado"
          >
            Conhecer a loja
          </Link>
        </div>
      </section>

      {/* ================================================================
          PERGUNTAS
          ================================================================ */}
      <section>
        <div className="mx-auto max-w-[86rem] px-5 py-secao lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-20">
            {/* Selo oficial da assinatura, extraido do manual, em azul sobre
                areia. E o mesmo da fachada da loja. Nao e recriado em CSS. */}
            <div className="bg-areia px-8 py-10 lg:sticky lg:top-28 lg:self-start lg:px-9 lg:py-12">
              <h2 className="espacado text-etiqueta text-dourado">Perguntas sobre eventos</h2>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/selo-assinatura.svg"
                alt=""
                width={517}
                height={397}
                className="mx-auto mt-10 h-auto w-full max-w-[15rem]"
              />
              <p className="mt-10 border-t border-linha pt-7 leading-relaxed text-azul-suave">
                Ficou alguma dúvida sobre o seu evento? A gente responde pelo WhatsApp.
              </p>
              <a
                href={linkWhatsApp(MSG_BUFFET, "eventos", "perguntas")}
                className="espacado mt-6 block bg-azul px-4 py-3 text-center text-etiqueta text-areia transition-colors hover:bg-azul-profundo"
              >
                Pedir orçamento
              </a>
            </div>
            <dl className="max-w-[68ch]">
              {perguntas.map((p) => (
                <div key={p.pergunta} className="regua py-8 first:border-0 first:pt-0">
                  <dt className="text-t3 font-medium leading-snug text-azul">{p.pergunta}</dt>
                  <dd className="mt-3 text-azul-suave">{p.resposta}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <JsonLd dados={paginaDePerguntas(perguntas)} />
      <JsonLd dados={migalhas(trilha)} />
    </>
  );
}
