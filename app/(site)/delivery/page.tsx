import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import VideoHero from "@/components/VideoHero";
import Revelar from "@/components/Revelar";
import Carrossel from "@/components/Carrossel";
import { negocio } from "@/content/negocio";
import { perguntasGerais } from "@/content/faq";
import { passos, destaqueMesaPosta, destaqueCaixa } from "@/content/vitrine";
import { categorias, produtos, produtosDaCategoria, vinhos } from "@/content/catalogo";
import { capaDaCategoria, fotoDoProduto } from "@/content/fotos";
import { linkWhatsApp } from "@/lib/links";
import { JsonLd, migalhas, paginaDePerguntas, pessoaChef } from "@/lib/dados-estruturados";

export const metadata: Metadata = {
  title: { absolute: "Delivery da Chef Júlia Andrade: entradas, kits e mesa posta" },
  description:
    "Entradas, focaccias, terrines e kits da Chef Júlia Andrade para receber em casa. Entrega no Rio de segunda a sábado, pedido pelo WhatsApp.",
  alternates: { canonical: "/delivery" },
};

const trilha = [
  { nome: "Início", url: "/" },
  { nome: "Delivery", url: "/delivery" },
];

const MENSAGEM_PEDIDO = "Olá! Cheguei pelo site e queria fazer um pedido.";

/** Produto citado por nome no texto. Se sair do catalogo, o trecho some. */
const produto = (id: string) => produtos.find((p) => p.id === id && p.publicada);

/**
 * Pagina principal do site. Briefing de alteracoes de 22/09/2026: explicar
 * como pedir, mostrar o cardapio completo e levar direto para o WhatsApp.
 *
 * A loja fisica e o video do espaco sairam daqui e vao para /a-deli, que tem
 * a identidade da DELI.
 */
export default function PaginaDelivery() {
  const op = negocio.operacao;
  const zap = negocio.contato.whatsappFormatado;

  const lista = categorias.filter((c) => c.publicada).sort((a, b) => a.ordem - b.ordem);
  const totalItens = lista.reduce((n, c) => n + produtosDaCategoria(c.id).length, 0);

  const focaccia = produto("focaccia-tradicional");
  const caixa = produto("caixa-degustacao");
  const kit = produto("kit-mais-pedidos");
  const fotoKit = fotoDoProduto("kit-mais-pedidos");

  return (
    <>
      {/* ================================================================
          HERO
          O video oficial e vertical. Ele ocupa uma coluna alta de verdade,
          no formato em que foi filmado, ao lado do texto. Nada centralizado.
          ================================================================ */}
      <section className="border-b border-linha">
        {/* A altura do cabecalho fixo esta em --altura-cabecalho, no globals.
            Descontada aqui, a primeira dobra fecha exatamente na tela. E min-h,
            nao h: em janela muito baixa a secao cresce em vez de cortar texto. */}
        <div className="mx-auto grid max-w-[86rem] gap-0 lg:min-h-[calc(100svh-var(--altura-cabecalho))] lg:grid-cols-[minmax(0,1fr)_minmax(320px,38%)]">
          <div className="order-2 flex flex-col justify-center px-5 py-14 lg:order-1 lg:px-10 lg:py-10">
            <p className="espacado text-etiqueta text-dourado">
              Delivery da Chef Júlia Andrade no Rio
            </p>

            <h1 className="mt-7 max-w-[17ch] titulo titulo-grande text-display text-azul">
              A mesa posta chega pronta. Você só recebe.
            </h1>

            <p className="subtitulo mt-8 max-w-[54ch] text-corpo-g text-azul-suave">
              Entradas, focaccias, terrines e sobremesas assinadas pela Chef Júlia
              Andrade. Você escolhe no cardápio, faz o pedido pelo WhatsApp e recebe
              em casa no horário combinado.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 lg:mt-8">
              <a
                href={linkWhatsApp(MENSAGEM_PEDIDO, "delivery", "hero-primario")}
                className="espacado inline-block bg-azul px-8 py-4 text-etiqueta text-areia transition-colors hover:bg-azul-profundo"
              >
                Pedir pelo WhatsApp
              </a>
              <a
                href="#cardapio"
                data-evento="clique_cardapio"
                data-posicao="delivery:hero-secundario"
                className="espacado border-b border-azul pb-1 text-etiqueta text-azul transition-colors hover:border-dourado hover:text-dourado"
              >
                Ver o cardápio
              </a>
            </div>

            <dl className="regua mt-12 grid max-w-[42rem] lg:mt-10 grid-cols-2 gap-x-8 gap-y-6 pt-8 lg:grid-cols-3">
              {[
                ["Pedido mínimo", `R$ ${op.pedidoMinimo}`],
                ["Pedido no mesmo dia", `até ${op.corteMesmoDia.semana}`],
                ["Entrega", op.entrega.diasTexto],
              ].map(([rotulo, valor]) => (
                <div key={rotulo}>
                  <dt className="espacado text-etiqueta text-azul-suave">{rotulo}</dt>
                  <dd className="mt-2 titulo text-t3 text-azul">{valor}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="order-1 lg:order-2">
            {/* O video e vertical e o assunto e a calda caindo na terrine, que
                fica na metade de baixo do quadro. Puxando o enquadramento para
                62% sobra menos teto e mais assunto. */}
            <VideoHero
              posicao="50% 62%"
              className="aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-0"
            />
          </div>
        </div>
      </section>

      {/* ================================================================
          SITUACOES DE USO
          As duas do briefing de alteracoes. Cada uma resolvida com produto e
          composicao reais do catalogo. Sem preco: nesta pagina o valor fica
          so na pagina de cada item, a pedido do cliente em 23/09/2026. Pesos diferentes de proposito:
          a primeira com a foto a esquerda, a segunda invertida e mais baixa.
          ================================================================ */}
      <section className="border-b border-linha" aria-labelledby="situacoes">
        <div className="mx-auto max-w-[86rem] px-5 py-secao lg:px-10">
          <h2 id="situacoes" className="espacado text-etiqueta text-dourado">
            Quando o delivery resolve
          </h2>

          {caixa && focaccia && (
            <article className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(280px,34%)_minmax(0,1fr)] lg:gap-20">
              <Revelar className="relative aspect-[3/4] w-full">
                <Image
                  src={destaqueCaixa.src}
                  alt={destaqueCaixa.alt}
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-cover"
                />
              </Revelar>
              <div className="pilha max-w-[54ch]">
                <h3 className="titulo text-t1 leading-tight text-azul">
                  Para não chegar de mãos vazias
                </h3>
                <p className="text-corpo-g text-azul-suave">
                  Reunião de trabalho, jantar na casa de uma amiga, visita de fim de
                  semana. Uma {focaccia.nome} chega inteira, pronta para abrir na mesa
                  de quem está recebendo.
                </p>
                <p className="text-corpo-g text-azul-suave">
                  A {caixa.nome} leva focaccia, soft
                  cheese, roquefort, hommus, crostini e polvilho numa caixa com o selo
                  da Chef. Ela também pode ir com vinho ou cerveja artesanal.
                </p>
                <Link
                  href="/presentes"
                  className="espacado inline-block self-start border-b border-azul pb-1 text-etiqueta text-azul transition-colors hover:border-dourado hover:text-dourado"
                >
                  Ver cestas e caixas
                </Link>
              </div>
            </article>
          )}

          {kit && (
            <article className="regua mt-secao grid items-center gap-10 pt-secao lg:grid-cols-[minmax(0,1fr)_minmax(240px,26%)] lg:gap-20">
              <div className="pilha max-w-[56ch] lg:justify-self-end">
                <h3 className="titulo text-t1 leading-tight text-azul">
                  Para sair do pedido de sempre
                </h3>
                <p className="text-corpo-g text-azul-suave">
                  Quem rola o aplicativo de entrega até cansar costuma terminar no
                  mesmo pedido da semana passada. Aqui a lista é de uma cozinha só:
                  {" "}{totalItens} itens da Chef Júlia Andrade, da focaccia de fermentação
                  natural ao filé Wellington.
                </p>
                <p className="text-corpo-g text-azul-suave">
                  Se não souber por onde começar, o {kit.nome} serve {kit.serve}:{" "}
                  {kit.acompanhamentos!.map((a) => a.toLowerCase()).join(", ").replace(/, ([^,]*)$/, " e $1")}.
                </p>
                <Link
                  href="/kits"
                  className="espacado inline-block self-start border-b border-azul pb-1 text-etiqueta text-azul transition-colors hover:border-dourado hover:text-dourado"
                >
                  Ver todos os kits
                </Link>
              </div>
              {fotoKit && (
                <Revelar className="relative aspect-[2/3] w-full lg:order-last">
                  <Image
                    src={fotoKit.src}
                    alt={fotoKit.alt}
                    fill
                    sizes="(min-width: 1024px) 26vw, 100vw"
                    className="object-cover"
                  />
                </Revelar>
              )}
            </article>
          )}
        </div>
      </section>

      {/* ================================================================
          COMO FUNCIONA
          Cada etapa tem a foto do momento correspondente, sem moldura e sem
          fundo de cartao. Frete, prazos e pagamento ficam na secao seguinte.
          ================================================================ */}
      <section id="como-funciona" className="scroll-mt-24 border-b border-linha bg-areia">
        <div className="mx-auto max-w-[86rem] px-5 py-secao lg:px-10">
          <div className="max-w-[44ch]">
            <p className="espacado text-etiqueta text-dourado">Como funciona</p>
            <h2 className="titulo mt-5 text-t1 leading-tight text-azul">
              Do cardápio até a sua mesa em três passos
            </h2>
          </div>

          <ol className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3 lg:gap-x-12">
            {passos.map((etapa, i) => {
              const texto = [
                `Você escolhe no cardápio desta página e manda o pedido pelo WhatsApp, no ${zap}. O mínimo é de R$ ${op.pedidoMinimo} e o primeiro pedido tem ${op.cupomPrimeiroPedido} de desconto.`,
                `Pedidos para o mesmo dia entram até as ${op.corteMesmoDia.semana} de segunda a sexta e até as ${op.corteMesmoDia.sabado} no sábado. Feito com antecedência, o pedido garante horário definido de entrega.`,
                `A entrega é de ${op.entrega.diasTexto}, com frete por região. Os produtos duram no mínimo ${op.validadeMinimaDias} dias e vão embalados para aguentar o transporte.`,
              ][i];

              return (
                <li key={etapa.numero}>
                  <Revelar atrasoMs={i * 160}>
                    <div className="relative aspect-[4/5] overflow-hidden bg-areia-escuro">
                      <Image
                        src={etapa.foto.src}
                        alt={etapa.foto.alt}
                        fill
                        sizes="(min-width: 640px) 30vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                  </Revelar>

                  <p className="regua mt-5 flex items-baseline gap-3 pt-4">
                    <span className="text-nota tabular-nums text-dourado">{etapa.numero}</span>
                    <span className="titulo text-t3 text-azul">{etapa.titulo}</span>
                  </p>
                  <p className="mt-3 text-nota leading-relaxed text-azul-suave">{texto}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ================================================================
          ENTREGA E PAGAMENTO
          Quatro cards informativos, pedido do cliente em 23/09/2026. Cada
          card tem o dado principal em destaque e os detalhes embaixo. Cantos
          retos, fundo solido, mesma altura, sem icone.
          ================================================================ */}
      <section id="entrega" className="scroll-mt-24 border-b border-linha" aria-labelledby="titulo-entrega">
        <div className="mx-auto max-w-[86rem] px-5 py-secao lg:px-10">
          <p className="espacado text-etiqueta text-dourado">Entrega e pagamento</p>
          <h2 id="titulo-entrega" className="titulo mt-5 max-w-[26ch] text-t1 leading-tight text-azul">
            Onde entregamos, quando chega e como pagar
          </h2>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <Card
              rotulo="Pedido"
              destaque={`R$ ${op.pedidoMinimo}`}
              legenda="pedido mínimo, sem contar o frete"
              linhas={[
                ["Como pedir", `pelo WhatsApp, no ${zap}`],
                ["Primeiro pedido", `${op.cupomPrimeiroPedido} de desconto`],
              ]}
            />
            <Card
              rotulo="Frete"
              destaque={negocio.frete[0].valor.replace(/^a partir de/, "A partir de")}
              legenda="conforme a região de entrega"
              linhas={negocio.frete.map((f) => [f.regiao, f.valor])}
            />
            <Card
              rotulo="Prazos"
              destaque={op.entrega.diasTexto.charAt(0).toUpperCase() + op.entrega.diasTexto.slice(1)}
              legenda={`mesmo dia se pedir até ${op.corteMesmoDia.semana}`}
              linhas={[
                [`De ${op.entrega.semana.dias}`, `das ${op.entrega.semana.de} às ${op.entrega.semana.ate}`],
                [`No ${op.entrega.sabado.dias}`, `das ${op.entrega.sabado.de} às ${op.entrega.sabado.ate}`],
                [
                  "Para o mesmo dia",
                  `peça até ${op.corteMesmoDia.semana}, ou até ${op.corteMesmoDia.sabado} no sábado`,
                ],
                ["Sobremesas", `${op.antecedenciaSobremesas} de antecedência`],
              ]}
            />
            <Card
              rotulo="Pagamento"
              destaque={op.pagamento.formas.join(", ").replace(/, ([^,]*)$/, " ou $1")}
              legenda="o pedido é pago antes da entrega"
              linhas={[
                ["Para o mesmo dia", op.pagamento.noDia],
                ["Antecipado", op.pagamento.antecipado],
              ]}
            />
          </ul>
        </div>
      </section>

      {/* ================================================================
          CARDAPIO
          So as categorias, em carrossel, pedido do cliente em 23/09/2026. Cada uma leva a
          sua pagina, onde estao os itens, os valores e as informacoes de cada
          um. Vinhos nao tem foto propria no acervo e entra so com texto.
          ================================================================ */}
      <section id="cardapio" className="scroll-mt-24 border-b border-linha" aria-labelledby="titulo-cardapio">
        <div className="mx-auto max-w-[86rem] px-5 py-secao lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[52ch]">
              <p className="espacado text-etiqueta text-dourado">Cardápio</p>
              <h2 id="titulo-cardapio" className="mt-5 titulo text-t1 leading-tight text-azul">
                Escolha por onde começar
              </h2>
              <p className="mt-5 text-azul-suave">
                Em cada categoria você vê os itens, os valores e o que vem em cada um.
              </p>
            </div>
            <a
              href={linkWhatsApp(MENSAGEM_PEDIDO, "delivery", "cardapio-topo")}
              className="espacado bg-azul px-8 py-4 text-etiqueta text-areia transition-colors hover:bg-azul-profundo"
            >
              Pedir pelo WhatsApp
            </a>
          </div>

          <div className="mt-14">
            <Carrossel rotulo="Categorias do cardápio">
            {lista.map((c) => {
              const capa = capaDaCategoria(c.id);
              const n = produtosDaCategoria(c.id).length;
              return (
                <li key={c.id} className="w-[64%] shrink-0 sm:w-[40%] lg:w-[calc((100%-4.5rem)/4)]">
                  <Link href={`/${c.slug}`} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-areia">
                      {capa && (
                        <Image
                          src={capa.src}
                          alt={capa.alt}
                          fill
                          sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 46vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                        />
                      )}
                    </div>
                    <span className="titulo mt-4 block text-[0.75rem] tracking-[0.05em] text-azul transition-colors group-hover:text-dourado sm:text-t3 sm:tracking-[0.075em]">
                      {c.nome}
                    </span>
                    <span className="mt-2 flex items-center justify-between gap-3 text-nota text-azul-suave">
                      {n} {n === 1 ? "item" : "itens"}
                      <VerItens />
                    </span>
                  </Link>
                </li>
              );
            })}
            <li key="vinhos" className="w-[64%] shrink-0 sm:w-[40%] lg:w-[calc((100%-4.5rem)/4)]">
              <Link href="/vinhos" className="group block">
                <div className="flex aspect-[4/5] flex-col justify-between bg-azul p-6 text-areia transition-colors group-hover:bg-azul-profundo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/simbolo-espiga-areia.svg" alt="" width={22} height={32} className="h-12 w-auto self-start opacity-80" />
                  <span>
                  <span className="espacado block text-etiqueta text-dourado-claro">Avulsos</span>
                  <span className="mt-3 block text-nota text-areia/80">
                    Tintos, brancos e espumante para acompanhar o pedido.
                  </span>
                  </span>
                </div>
                <span className="titulo mt-4 block text-[0.75rem] tracking-[0.05em] text-azul transition-colors group-hover:text-dourado sm:text-t3 sm:tracking-[0.075em]">
                  Vinhos
                </span>
                <span className="mt-2 flex items-center justify-between gap-3 text-nota text-azul-suave">
                  {vinhos.length} rótulos
                  <VerItens />
                </span>
              </Link>
            </li>
            </Carrossel>
          </div>
        </div>
      </section>

      {/* ================================================================
          MESA POSTA
          ================================================================ */}
      <section className="border-b border-linha bg-azul text-areia">
        <div className="mx-auto grid max-w-[86rem] items-stretch lg:grid-cols-2">
          <Revelar className="relative min-h-[22rem] lg:min-h-[34rem]">
            <Image
              src={destaqueMesaPosta.src}
              alt={destaqueMesaPosta.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Revelar>
          <div className="flex flex-col justify-center px-5 py-secao lg:px-16">
            <p className="espacado text-etiqueta text-dourado-claro">Mesa posta</p>
            <h2 className="mt-6 max-w-[18ch] titulo text-t1 leading-tight">
              A mesa inteira, não um prato só
            </h2>
            <div className="pilha mt-7 max-w-[50ch] text-corpo-g text-areia/85">
              <p>
                Mesa posta é a recepção resolvida de uma vez: as entradas, os pães, as
                pastas, a carne fria e a sobremesa chegam juntos, na quantidade certa
                para o número de pessoas.
              </p>
              <p>
                Como os produtos aguentam {op.validadeMinimaDias} dias e podem ser
                transportados, dá para receber o pedido antes e montar a mesa com
                calma no dia.
              </p>
            </div>
            <Link
              href="/kits"
              className="espacado mt-10 self-start border border-areia px-8 py-4 text-etiqueta text-areia transition-colors hover:bg-areia hover:text-azul"
            >
              Ver kits e seleções
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          PERGUNTAS FREQUENTES
          Conteudo visivel no HTML, sem acordeao escondendo texto.
          ================================================================ */}
      <section className="border-b border-linha bg-areia">
        <div className="mx-auto max-w-[86rem] px-5 py-secao lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-20">
            <div className="bg-azul px-8 py-10 text-areia lg:sticky lg:top-28 lg:self-start lg:px-9 lg:py-12">
              <h2 className="espacado text-etiqueta text-dourado-claro">Perguntas frequentes</h2>

              {/* Selo oficial do manual, na versao dourada sobre fundo azul. Ele
                  nomeia o que a casa vende, entao informa em vez de enfeitar. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/selo-categorias-dourado.svg"
                alt=""
                width={200}
                height={197}
                className="mx-auto mt-9 h-40 w-auto"
              />

              <p className="mt-10 max-w-[32ch] border-t border-areia/25 pt-7 leading-relaxed text-areia/85">
                Não achou o que precisava? A gente responde pelo WhatsApp, de{" "}
                {negocio.loja.dias}.
              </p>
              <a
                href={linkWhatsApp("Olá! Tenho uma dúvida sobre os pedidos.", "delivery", "perguntas-frequentes")}
                className="espacado mt-6 block border border-areia/50 px-4 py-3 text-center text-etiqueta text-areia transition-colors hover:bg-areia hover:text-azul"
              >
                Perguntar no WhatsApp
              </a>
            </div>

            <dl className="max-w-[68ch]">
              {perguntasGerais.map((p) => (
                <div key={p.pergunta} className="regua py-8 first:border-0 first:pt-0">
                  <dt className="text-t3 font-medium leading-snug text-azul">{p.pergunta}</dt>
                  <dd className="mt-3 text-azul-suave">{p.resposta}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ================================================================
          FECHAMENTO
          ================================================================ */}
      <section className="bg-papel">
        <div className="mx-auto max-w-[86rem] px-5 py-secao text-center lg:px-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/selo-assinatura.svg"
            alt=""
            width={120}
            height={120}
            className="mx-auto h-24 w-auto opacity-80"
          />
          <h2 className="mx-auto mt-10 max-w-[20ch] titulo text-t1 leading-tight text-azul">
            Escolha o que vai servir e deixe o resto com a gente
          </h2>
          <a
            href={linkWhatsApp(MENSAGEM_PEDIDO, "delivery", "fechamento")}
            className="espacado mt-10 inline-block bg-azul px-10 py-4 text-etiqueta text-areia transition-colors hover:bg-azul-profundo"
          >
            Fazer o pedido pelo WhatsApp
          </a>
          <p className="mt-5 text-nota text-azul-suave">{zap}</p>
        </div>
      </section>

      <JsonLd dados={paginaDePerguntas([...perguntasGerais])} />
      <JsonLd dados={pessoaChef()} />
      <JsonLd dados={migalhas(trilha)} />
    </>
  );
}

/**
 * Card informativo da secao de entrega e pagamento. O dado principal fica em
 * destaque e os detalhes em linhas curtas, rotulo em cima do valor, porque o
 * card e estreito na tela larga.
 */
function Card({
  rotulo,
  destaque,
  legenda,
  linhas,
}: {
  rotulo: string;
  destaque: string;
  legenda: string;
  linhas: (readonly [string, string])[];
}) {
  const inicial = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);
  return (
    <li className="flex flex-col border-t-2 border-azul bg-areia px-6 pb-7 pt-6">
      <h3 className="espacado text-etiqueta text-dourado">{rotulo}</h3>
      {/* Altura minima igual nos quatro: a regua de baixo cai na mesma linha. */}
      <div className="mt-4 xl:min-h-[6.25rem]">
        <p className="subtitulo text-t1 leading-tight text-azul xl:text-t2">
          {destaque.replace(/R\$ /g, "R$" + String.fromCharCode(160))}
        </p>
        <p className="mt-2 text-nota text-azul-suave">{inicial(legenda)}</p>
      </div>
      <dl className="mt-6 space-y-4 border-t border-linha pt-5">
        {linhas.map(([r, v]) => (
          <div key={r}>
            <dt className="text-nota font-medium text-azul">{r}</dt>
            <dd className="text-nota text-azul-suave">{inicial(v)}</dd>
          </div>
        ))}
      </dl>
    </li>
  );
}

/** Indica que o card leva para a pagina com os itens e os valores. */
function VerItens() {
  return (
    <span className="espacado flex shrink-0 items-center gap-2 text-etiqueta text-azul-suave transition-colors group-hover:text-dourado">
      Ver
      <span aria-hidden="true" className="text-t3 transition-transform group-hover:translate-x-1">
        →
      </span>
    </span>
  );
}
