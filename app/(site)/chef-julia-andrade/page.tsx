import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Migalhas from "@/components/Migalhas";
import Revelar from "@/components/Revelar";
import { negocio } from "@/content/negocio";
import {
  anosDeCozinha,
  falaDaJulia,
  fermentacaoHoras,
  fotoBalcao,
  fotoFocacciaNaForma,
  fotoRetrato,
  linhaDoTempo,
  trajetoria,
} from "@/content/julia";
import { linkCardapio } from "@/lib/links";
import { JsonLd, migalhas as migalhasLd, pessoaChefDetalhada } from "@/lib/dados-estruturados";

const DESCRICAO_CURTA =
  "Chef mineira radicada no Rio de Janeiro, com mais de dez anos de cozinha entre casas renomadas, consultorias, eventos e ensino. Criou a mesa posta em 2020 e abriu a DÉLI em abril de 2026.";

export const metadata: Metadata = {
  title: { absolute: "Chef Júlia Andrade: carreira, cozinha e a DÉLI" },
  description:
    "Mais de dez anos de cozinha: casas renomadas e estreladas, consultorias, eventos, aulas e o The Taste Brasil, até o delivery e a DÉLI na Barra da Tijuca.",
  alternates: { canonical: "/chef-julia-andrade" },
  openGraph: {
    title: "Chef Júlia Andrade",
    description: DESCRICAO_CURTA,
    images: [{ url: fotoRetrato.src, alt: fotoRetrato.alt }],
  },
};

const trilha = [
  { nome: "Início", url: "/" },
  { nome: "Chef", url: "/chef-julia-andrade" },
];

/**
 * Pagina da chef. Briefing de alteracoes de 22/09/2026: a versao anterior
 * falava muito da jornalista que virou chef e pouco da carreira na cozinha.
 * Aqui o peso inverte. A carreira abre a pagina, o que ela cozinha vem em
 * seguida, e o jornalismo vira uma nota perto do fim.
 *
 * Fonte unica: RELEASE, via content/julia.ts. Nomes de casas e anos da
 * carreira ainda nao chegaram e nao foram escritos. Ver PENDENCIAS.
 */
export default function PaginaChef() {
  return (
    <>
      {/* ================================================================
          ABERTURA
          Retrato em coluna alta, no formato vertical em que foi feito.
          ================================================================ */}
      <section className="border-b border-linha">
        <div className="mx-auto grid max-w-[86rem] lg:grid-cols-[minmax(0,1fr)_minmax(300px,36%)]">
          <div className="order-2 flex flex-col justify-center px-5 py-14 lg:order-1 lg:px-10 lg:py-24">
            <Migalhas itens={trilha} />

            <p className="espacado mt-8 text-etiqueta text-dourado">A chef</p>
            <h1 className="mt-6 max-w-[18ch] titulo titulo-grande text-display text-azul">
              Júlia Andrade, {anosDeCozinha} de cozinha
            </h1>
            <p className="subtitulo mt-8 max-w-[56ch] text-corpo-g text-azul-suave">
              Mineira, radicada no Rio de Janeiro. Antes de ter o próprio negócio, a
              Júlia trabalhou em cozinhas renomadas e estreladas, fez consultoria,
              cozinhou para eventos, deu aulas e passou pelo The Taste Brasil.
            </p>

            <dl className="regua mt-12 grid max-w-[46rem] grid-cols-2 gap-x-8 gap-y-6 pt-8 lg:grid-cols-3">
              {[
                ["Na cozinha", anosDeCozinha],
                ["Na TV", "The Taste Brasil"],
                ["Criou", `a mesa posta, em ${negocio.historia.inicio}`],
              ].map(([rotulo, valor]) => (
                <div key={rotulo}>
                  <dt className="espacado text-etiqueta text-azul-suave">{rotulo}</dt>
                  <dd className="mt-2 titulo text-t3 text-azul">{valor}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Revelar className="relative order-1 aspect-[4/5] w-full lg:order-2 lg:aspect-auto lg:min-h-[44rem]">
            <Image
              src={fotoRetrato.src}
              alt={fotoRetrato.alt}
              fill
              priority
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover"
            />
          </Revelar>
        </div>
      </section>

      {/* ================================================================
          A CARREIRA
          O centro da pagina. Rotulo a esquerda, texto a direita, regua de
          1px entre as linhas, como as tabelas do manual.
          ================================================================ */}
      <section className="border-b border-linha">
        <div className="mx-auto max-w-[86rem] px-5 py-secao lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(260px,30%)] lg:gap-20">
            <div>
              <p className="espacado text-etiqueta text-dourado">A carreira</p>
              <h2 className="titulo mt-5 max-w-[22ch] text-t1 leading-tight text-azul">
                Antes do próprio negócio
              </h2>
              <dl className="mt-12">
                {trajetoria.map((t) => (
                  <div
                    key={t.frente}
                    className="regua grid gap-2 py-6 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:gap-10"
                  >
                    <dt className="titulo text-t3 text-azul">{t.frente}</dt>
                    <dd className="max-w-[52ch] text-azul-suave">{t.texto}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <Revelar className="relative aspect-[4/5] w-full self-end">
              <Image
                src={fotoBalcao.src}
                alt={fotoBalcao.alt}
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
              />
            </Revelar>
          </div>
        </div>
      </section>

      {/* ================================================================
          O QUE ELA COZINHA
          Peso invertido: a foto a esquerda e o texto a direita.
          ================================================================ */}
      <section className="border-b border-linha bg-areia">
        <div className="mx-auto grid max-w-[86rem] items-center gap-12 px-5 py-secao lg:grid-cols-[minmax(280px,40%)_minmax(0,1fr)] lg:gap-20 lg:px-10">
          <Revelar className="relative aspect-[3/2] w-full">
            <Image
              src={fotoFocacciaNaForma.src}
              alt={fotoFocacciaNaForma.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </Revelar>

          <div className="pilha max-w-[56ch]">
            <p className="espacado text-etiqueta text-dourado">O que ela cozinha</p>
            <h2 className="titulo text-t1 leading-tight text-azul">
              Fermentação lenta e mesa para receber
            </h2>
            <p className="text-corpo-g text-azul-suave">
              A base é a focaccia de fermentação natural, com até {fermentacaoHoras} horas
              de fermentação. Em volta dela vêm os bries assados, as mousses e os cremes
              autorais, os crostinis e as terrines.
            </p>
            <p className="text-corpo-g text-azul-suave">
              Em {negocio.historia.inicio}, no ano em que ninguém podia receber ninguém,
              ela criou a mesa posta: em vez de um prato, a recepção inteira chegando
              pronta em casa. É o que o delivery vende até hoje.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          LINHA DO TEMPO
          De 2020 ate a loja. O que vem antes de 2020 esta na carreira.
          ================================================================ */}
      <section className="border-b border-linha">
        <div className="mx-auto max-w-[86rem] px-5 py-secao lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,19rem)] lg:gap-20">
            <div>
              <p className="espacado text-etiqueta text-dourado">O negócio próprio</p>
              <h2 className="titulo mt-5 max-w-[20ch] text-t1 leading-tight text-azul">
                De 2020 até a loja da Barra
              </h2>

              <ol className="mt-12 max-w-[60rem]">
                {linhaDoTempo.map((item) => (
                  <li
                    key={item.marco}
                    className="regua grid gap-2 py-7 sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] sm:gap-10"
                  >
                    <h3 className="titulo text-t3 text-azul">{item.marco}</h3>
                    <p className="max-w-[56ch] text-azul-suave">{item.texto}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Selo oficial da assinatura, extraido do manual. O negocio
                comecou na cozinha de casa, e e isso que o selo diz. */}
            <figure className="self-center bg-areia px-10 py-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/selo-assinatura.svg"
                alt="Selo da marca: Da minha casa para a sua, por Chef Júlia Andrade"
                width={517}
                height={397}
                className="mx-auto h-auto w-full max-w-[15rem]"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ================================================================
          A FALA DELA
          ================================================================ */}
      <section className="border-b border-linha bg-azul text-areia">
        <div className="relative mx-auto max-w-[86rem] overflow-hidden px-5 py-bloco lg:px-10 lg:py-16">
          {/* Simbolo oficial do manual, em marca d'agua. E o vetor da marca,
              nao forma decorativa. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/simbolo-espiga-areia.svg"
            alt=""
            width={200}
            height={290}
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 top-1/2 hidden h-[150%] w-auto -translate-y-1/2 opacity-[0.07] lg:block"
          />
          <figure className="relative max-w-[56ch]">
            <blockquote className="subtitulo text-t1 leading-snug">
              <p>{falaDaJulia.texto}</p>
            </blockquote>
            <figcaption className="espacado mt-6 text-etiqueta text-dourado-claro">
              {falaDaJulia.autoria}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ================================================================
          ANTES DA COZINHA
          O jornalismo, como detalhe. Uma faixa estreita, sem foto.
          ================================================================ */}
      <section className="border-b border-linha bg-areia">
        <div className="mx-auto grid max-w-[86rem] gap-4 px-5 py-bloco sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:gap-10 lg:px-10">
          <h2 className="espacado text-etiqueta text-azul-suave">Antes da gastronomia</h2>
          <p className="max-w-[62ch] text-azul-suave">
            A Júlia se formou em Jornalismo pela PUC Minas. A experiência ficou no jeito
            como ela comunica a marca e explica o que está servindo.
          </p>
        </div>
      </section>

      {/* ================================================================
          FECHAMENTO
          A bagagem ligada ao que ela faz hoje.
          ================================================================ */}
      <section>
        <div className="mx-auto max-w-[86rem] px-5 py-secao lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-20">
            <div className="lg:self-start">
              <h2 className="espacado text-etiqueta text-azul-suave">A cozinha dela hoje</h2>
              {/* Selo oficial de categorias, dourado sobre azul, como nas paginas
                  de fundo colorido do manual. Nomeia o que a casa vende hoje. */}
              <div className="mt-8 max-w-[18rem] bg-azul px-9 py-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/selo-categorias-dourado.svg"
                  alt=""
                  width={387}
                  height={381}
                  className="mx-auto h-auto w-full max-w-[11rem]"
                />
              </div>
            </div>

            <div className="max-w-[62ch]">
              <p className="subtitulo text-t2 leading-snug text-azul">
                Tudo isso chega a você de três jeitos.
              </p>

              <ul className="mt-9">
                <li className="regua py-6">
                  <a
                    {...linkCardapio("chef-julia-andrade", "fechamento-cardapio")}
                    className="titulo text-t3 text-azul underline-offset-[6px] hover:text-dourado hover:underline"
                  >
                    Delivery
                  </a>
                  <p className="mt-2 text-azul-suave">
                    O cardápio completo, com entrega de {negocio.operacao.entrega.diasTexto}{" "}
                    no Rio de Janeiro e pedido mínimo de R$ {negocio.operacao.pedidoMinimo}.
                  </p>
                </li>
                <li className="regua py-6">
                  <Link
                    href="/a-deli"
                    className="titulo text-t3 text-azul underline-offset-[6px] hover:text-dourado hover:underline"
                  >
                    DÉLI
                  </Link>
                  <p className="mt-2 text-azul-suave">
                    O café e a loja no {negocio.endereco.referencia},{" "}
                    {negocio.endereco.bairro}, onde ela serve na hora o que antes só
                    chegava em casa.
                  </p>
                </li>
                <li className="regua py-6">
                  <Link
                    href="/eventos"
                    className="titulo text-t3 text-azul underline-offset-[6px] hover:text-dourado hover:underline"
                  >
                    Eventos
                  </Link>
                  <p className="mt-2 text-azul-suave">
                    Encomenda para servir ou buffet completo a partir de{" "}
                    {negocio.eventos.minimoPessoas} pessoas, com equipe da casa.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <JsonLd dados={migalhasLd(trilha)} />
      <JsonLd
        dados={pessoaChefDetalhada({
          descricao: DESCRICAO_CURTA,
          imagem: fotoRetrato.src,
          formacao: "Pontifícia Universidade Católica de Minas Gerais",
        })}
      />
    </>
  );
}
