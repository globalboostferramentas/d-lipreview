import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Migalhas from "@/components/Migalhas";
import Revelar from "@/components/Revelar";
import TourDaLoja from "@/components/TourDaLoja";
import { negocio } from "@/content/negocio";
import {
  cardsDoBalcao,
  conceitoDaCasa,
  falaDaJulia,
  fermentacaoHoras,
  fotoBalcao,
  fotoCopoDaCasa,
} from "@/content/julia";
import { hora, linkComoChegar, linkWhatsApp } from "@/lib/links";
import { JsonLd, migalhas } from "@/lib/dados-estruturados";

export const metadata: Metadata = {
  title: { absolute: "DÉLI: café e delicatessen na Barra da Tijuca" },
  description:
    "Café e delicatessen da Chef Júlia Andrade no Shopping Downtown, Barra da Tijuca. Brunch all day, consumo no local, take away e encomendas.",
  alternates: { canonical: "/a-deli" },
};

const trilha = [
  { nome: "Início", url: "/" },
  { nome: "Déli", url: "/a-deli" },
];

/**
 * Pagina Presencial. Briefing de alteracoes de 22/09/2026: o que e a DELI, a
 * experiencia na loja, endereco, horario e como chegar.
 *
 * Identidade: a DELI nao mandou manual proprio. A diferenca para o Delivery
 * vem so da mesma paleta usada ao contrario: aqui o fundo e areia e o azul
 * entra como tinta, e o cabecalho passa a assinar DELI. Ver PENDENCIAS.
 *
 * Fonte de tudo que e da loja: RELEASE de maio de 2026, em content/julia.ts.
 * Nao existe foto do salao. A pagina usa o que existe: a Julia no balcao, o
 * copo da casa e o video do espaco.
 */
export default function PaginaDeli() {
  const e = negocio.endereco;
  const loja = negocio.loja;
  const horario = `De ${loja.dias}, das ${hora(loja.abre)} às ${hora(loja.fecha)}`;
  const { cards: comFoto, semFoto } = cardsDoBalcao;

  return (
    <>
      {/* ================================================================
          ABERTURA
          Foto do balcao em coluna alta, texto a esquerda. Endereco e
          horario ja na primeira dobra, porque e o que quem procura a loja
          veio buscar.
          ================================================================ */}
      <section className="border-b border-linha bg-areia">
        <div className="mx-auto grid max-w-[86rem] lg:grid-cols-[minmax(0,1fr)_minmax(300px,38%)]">
          <div className="order-2 flex flex-col justify-center px-5 py-14 lg:order-1 lg:px-10 lg:py-20">
            <Migalhas itens={trilha} />

            <p className="espacado mt-8 text-etiqueta text-dourado">
              Presencial · {e.referencia}, {e.bairro}
            </p>
            <h1 className="mt-6 max-w-[16ch] titulo titulo-grande text-display text-azul">
              {conceitoDaCasa}, na Barra da Tijuca
            </h1>
            <p className="subtitulo mt-8 max-w-[54ch] text-corpo-g text-azul-suave">
              A DÉLI é a delicatessen e boulangerie da Chef Júlia Andrade. Dá para
              sentar e tomar café, levar para casa ou deixar uma encomenda. O café da
              manhã e o brunch ficam no cardápio o expediente inteiro.
            </p>

            <dl className="regua mt-12 grid max-w-[44rem] gap-x-10 gap-y-6 pt-8 sm:grid-cols-2">
              <div>
                <dt className="espacado text-etiqueta text-azul-suave">Endereço</dt>
                <dd className="mt-2">
                  <address className="not-italic leading-relaxed text-azul">
                    {e.logradouro}, {e.complemento}
                    <br />
                    {e.referencia}, {e.bairro}
                  </address>
                </dd>
              </div>
              <div>
                <dt className="espacado text-etiqueta text-azul-suave">Horário</dt>
                <dd className="mt-2 leading-relaxed text-azul">
                  {horario}
                  <br />
                  Domingo {loja.domingo}
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <a
                href={linkComoChegar()}
                target="_blank"
                rel="noopener noreferrer"
                className="espacado bg-azul px-8 py-4 text-etiqueta text-areia transition-colors hover:bg-azul-profundo"
              >
                Como chegar
              </a>
              <a
                href={linkWhatsApp("Olá! Queria fazer uma reserva ou encomenda na DÉLI.", "a-deli", "abertura")}
                className="espacado border-b border-azul pb-1 text-etiqueta text-azul transition-colors hover:border-dourado hover:text-dourado"
              >
                Reservas e encomendas pelo WhatsApp
              </a>
            </div>
          </div>

          <Revelar className="relative order-1 aspect-[4/5] w-full lg:order-2 lg:aspect-auto lg:min-h-[44rem]">
            <Image
              src={fotoBalcao.src}
              alt={fotoBalcao.alt}
              fill
              priority
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
            />
          </Revelar>
        </div>
      </section>

      {/* ================================================================
          A PROPOSTA DA CASA
          ================================================================ */}
      <section className="border-b border-linha">
        <div className="mx-auto max-w-[86rem] px-5 py-secao lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,10rem)_minmax(0,1fr)_minmax(0,19rem)] lg:gap-16">
            <h2 className="espacado text-etiqueta text-azul-suave">A casa</h2>

            <div className="pilha max-w-[56ch]">
              <p className="subtitulo text-t2 leading-snug text-azul">
                A DÉLI abriu em {negocio.historia.aberturaLojaFisica}, depois de seis anos
                de delivery, para servir na hora o que antes só chegava em casa.
              </p>
              <p className="text-corpo-g text-azul-suave">
                O menu é curto. No balcão ficam as focaccias de fermentação natural, com
                até {fermentacaoHoras} horas de fermentação, os bries assados, as mousses
                e os cremes autorais, os crostinis, os sanduíches e os doces clássicos da
                casa.
              </p>
              <figure className="regua pt-6">
                <blockquote className="subtitulo text-t3 leading-relaxed text-azul">
                  <p>{falaDaJulia.texto}</p>
                </blockquote>
                <figcaption className="espacado mt-4 text-etiqueta text-dourado">
                  {falaDaJulia.autoria}
                </figcaption>
              </figure>
            </div>

            <Revelar className="relative aspect-[2/3] w-full self-start">
              <Image
                src={fotoCopoDaCasa.src}
                alt={fotoCopoDaCasa.alt}
                fill
                sizes="(min-width: 1024px) 19rem, 100vw"
                className="object-cover"
              />
            </Revelar>
          </div>
        </div>
      </section>

      {/* ================================================================
          O ESPACO
          O video da loja entra aqui, depois da introducao, como prova. Ele
          so baixa quando alguem aperta Assistir.
          ================================================================ */}
      <section className="border-b border-linha bg-areia">
        <div className="mx-auto max-w-[86rem] px-5 py-secao lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(300px,34%)_minmax(0,1fr)] lg:gap-20">
            <TourDaLoja />
            <div className="max-w-[54ch]">
              <p className="espacado text-etiqueta text-dourado">O espaço</p>
              <h2 className="titulo mt-6 text-t1 leading-tight text-azul">
                Balcão, vitrine e mesas na calçada
              </h2>
              <div className="pilha mt-7">
                <p className="text-corpo-g text-azul-suave">
                  A fachada azul com o selo da Chef abre para um balcão de café e uma
                  vitrine com focaccia, croissant e éclair. As mesas ficam do lado de
                  fora. A retirada de pedido do delivery na loja é combinada pelo
                  WhatsApp.
                </p>
                <p className="text-corpo-g text-azul-suave">
                  O vídeo foi gravado na loja, sem produção. Ele mostra a entrada, a
                  vitrine e as mesas como elas são em um dia comum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          NO BALCAO
          Cards com a foto de cada carro-chefe, sem preco, pedido do cliente
          em 23/09/2026. Item sem foto confirmada nao ganha foto de outro
          produto: entra na linha de texto abaixo dos cards. Ver content/julia.ts.
          ================================================================ */}
      <section className="border-b border-linha">
        <div className="mx-auto max-w-[86rem] px-5 py-secao lg:px-10">
          <div className="max-w-[48ch]">
            <p className="espacado text-etiqueta text-dourado">No balcão</p>
            <h2 className="titulo mt-6 text-t1 leading-tight text-azul">
              Os carros-chefes da casa
            </h2>
            <p className="mt-6 text-azul-suave">
              Os destaques do cardápio da loja, para comer ali mesmo ou levar. As
              tábuas levam focaccia assada na hora e os acompanhamentos que saem no
              delivery.
            </p>
          </div>

          {/* Card so para item com foto. Os sem foto entram numa linha logo
              abaixo, e viram card sozinhos quando a foto chegar em julia.ts. */}
          <ul className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:gap-x-8">
            {comFoto.map((item) => (
              // Com tres cards, o ultimo ficaria sozinho em meia tela no celular.
              <li key={item.nome} className="last:odd:col-span-2 md:last:odd:col-span-1">
                <div className="relative aspect-[4/5] overflow-hidden bg-areia">
                  <Image
                    src={item.foto!.src}
                    alt={item.foto!.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 46vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="titulo mt-4 text-[0.8125rem] tracking-[0.05em] text-azul sm:text-t3 sm:tracking-[0.075em]">
                  {item.nome}
                </h3>
                {item.descricao && (
                  <p className="mt-2 text-nota leading-relaxed text-azul-suave">{item.descricao}</p>
                )}
              </li>
            ))}
          </ul>

          {semFoto.length > 0 && (
            <p className="regua mt-12 flex flex-wrap items-baseline gap-x-3 gap-y-2 pt-6 text-azul">
              <span className="espacado text-etiqueta text-dourado">Também no balcão</span>
              {semFoto.map((item, n) => (
                <span key={item.nome}>
                  {item.nome}
                  {item.observacao && (
                    <span className="text-azul-suave"> ({item.observacao.toLowerCase()})</span>
                  )}
                  {n < semFoto.length - 1 ? <span className="ml-3 text-linha">·</span> : null}
                </span>
              ))}
            </p>
          )}
        </div>
      </section>

      {/* ================================================================
          EVENTO NA LOJA
          ================================================================ */}
      <section className="border-b border-linha bg-azul text-areia">
        <div className="mx-auto grid max-w-[86rem] gap-10 px-5 py-bloco lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:px-10 lg:py-20">
          <div className="max-w-[56ch]">
            <p className="espacado text-etiqueta text-dourado-claro">Reservar a DÉLI</p>
            <h2 className="titulo mt-6 text-t1 leading-tight">A loja fecha para evento particular</h2>
            <p className="mt-6 text-corpo-g text-areia/85">
              O salão pode ser fechado e reservado para um brunch, uma pequena
              celebração ou um evento personalizado.
            </p>
          </div>
          <Link
            href="/eventos"
            className="espacado self-start border border-areia px-8 py-4 text-etiqueta text-areia transition-colors hover:bg-areia hover:text-azul lg:self-end"
          >
            Ver eventos
          </Link>
        </div>
      </section>

      {/* ================================================================
          COMO CHEGAR
          Endereco completo e rota. Sem mapa incorporado: ele grava cookie.
          ================================================================ */}
      <section id="como-chegar" className="scroll-mt-24 bg-areia">
        <div className="mx-auto max-w-[86rem] px-5 py-secao lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-20">
            <h2 className="titulo text-t1 leading-tight text-azul">Como chegar</h2>

            <div>
              <dl className="max-w-[46rem]">
                {[
                  ["Endereço", `${e.logradouro}, ${e.complemento}`],
                  ["Onde fica", `${e.referencia}, ${e.bairro}, ${e.cidade}, ${e.uf}`],
                  ["CEP", e.cep],
                  ["Horário", `${horario}. Domingo ${loja.domingo}.`],
                  ["Reservas e encomendas", `WhatsApp ${negocio.contato.whatsappFormatado}`],
                  ["Instagram", negocio.contato.instagram],
                ].map(([rotulo, valor]) => (
                  <div key={rotulo} className="regua grid gap-1 py-4 sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] sm:gap-8">
                    <dt className="espacado text-etiqueta text-azul-suave">{rotulo}</dt>
                    <dd className="text-azul">
                      {rotulo === "Instagram" ? (
                        <a
                          href={negocio.contato.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline-offset-4 hover:text-dourado hover:underline"
                        >
                          {valor}
                        </a>
                      ) : (
                        valor
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
                <a
                  href={linkComoChegar()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="espacado bg-azul px-8 py-4 text-etiqueta text-areia transition-colors hover:bg-azul-profundo"
                >
                  Abrir a rota no mapa
                </a>
                <a
                  href={linkWhatsApp("Olá! Queria fazer uma reserva ou encomenda na DÉLI.", "a-deli", "como-chegar")}
                  className="espacado border-b border-azul pb-1 text-etiqueta text-azul transition-colors hover:border-dourado hover:text-dourado"
                >
                  Falar pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <JsonLd dados={migalhas(trilha)} />
    </>
  );
}
