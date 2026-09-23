import { negocio } from "@/content/negocio";
import type { Categoria, Foto, Produto } from "@/lib/tipos";
import { SITE } from "@/lib/site";


/**
 * LocalBusiness no layout raiz. Briefing secao 6.4 e 7.
 * Sem telefone, sem horario e sem avaliacao ate o cliente confirmar:
 * dado estruturado falso gera penalidade manual do Google.
 */
export function localBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    "@id": `${SITE}/#negocio`,
    name: negocio.nomeCompleto,
    alternateName: negocio.nome,
    slogan: negocio.assinatura,
    url: SITE,
    servesCuisine: "Delicatessen",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${negocio.endereco.logradouro}, ${negocio.endereco.complemento}`,
      addressLocality: negocio.endereco.cidade,
      addressRegion: negocio.endereco.uf,
      postalCode: negocio.endereco.cep,
      addressCountry: negocio.endereco.pais,
    },
    telephone: `+${negocio.contato.whatsapp}`,
    sameAs: [negocio.contato.instagramUrl],
    openingHoursSpecification: negocio.loja.horarioEstruturado.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dias,
      opens: h.abre,
      closes: h.fecha,
    })),
    priceRange: "$$",
    founder: { "@type": "Person", name: negocio.chef },
    foundingDate: String(negocio.historia.inicio),
    areaServed: negocio.frete
      .filter((f) => f.regiao !== "Outras áreas")
      .map((f) => ({ "@type": "Place", name: f.regiao })),
  };
}

/**
 * Product por produto. Preco so e marcado porque veio do cardapio oficial.
 * Sem AggregateRating: depende de autorizacao do cliente.
 */
export function produtoLd(pr: Produto, cat: Categoria, foto?: Foto) {
  const dados: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE}/${cat.slug}/${pr.slug}#produto`,
    name: pr.nome,
    category: cat.nome,
    brand: { "@type": "Brand", name: negocio.nomeCompleto },
    url: `${SITE}/${cat.slug}/${pr.slug}`,
  };
  const descricao = pr.descricao ?? pr.descricaoCurta;
  if (descricao) dados.description = descricao;
  if (foto) dados.image = `${SITE}${foto.src}`;
  if (pr.peso) dados.weight = pr.peso;
  if (pr.preco) {
    dados.offers = {
      "@type": "Offer",
      price: pr.preco.valor,
      priceCurrency: pr.preco.moeda,
      availability: "https://schema.org/InStock",
      areaServed: { "@type": "City", name: "Rio de Janeiro" },
      seller: { "@id": `${SITE}/#negocio` },
    };
  }
  return dados;
}

export function organizacao() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE}/#organizacao`,
    name: negocio.nomeCompleto,
    url: SITE,
    founder: { "@type": "Person", name: negocio.chef },
  };
}

export function pessoaChef() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE}/#chef`,
    name: negocio.chef,
    jobTitle: "Chef",
    worksFor: { "@id": `${SITE}/#organizacao` },
  };
}

/**
 * Versao completa do Person, para a pagina /chef-julia-andrade. Mesmo @id do
 * pessoaChef(), so que com a biografia e a foto que o cliente enviou. Nada aqui
 * foi deduzido: formacao, area de atuacao e imagem tem origem declarada em
 * content/julia.ts. Sem premio e sem numero de seguidor, que ninguem confirmou.
 */
export function pessoaChefDetalhada(dados: {
  descricao: string;
  imagem: string;
  formacao: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE}/#chef`,
    name: negocio.chef,
    jobTitle: "Chef",
    description: dados.descricao,
    image: `${SITE}${dados.imagem}`,
    url: `${SITE}/chef-julia-andrade`,
    mainEntityOfPage: `${SITE}/chef-julia-andrade`,
    worksFor: { "@id": `${SITE}/#organizacao` },
    alumniOf: { "@type": "CollegeOrUniversity", name: dados.formacao },
    knowsAbout: ["Delicatessen", "Panificação", "Mesa posta", "Fermentação natural"],
    workLocation: {
      "@type": "Place",
      name: negocio.nomeCompleto,
      address: {
        "@type": "PostalAddress",
        addressLocality: negocio.endereco.bairro,
        addressRegion: negocio.endereco.uf,
        addressCountry: negocio.endereco.pais,
      },
    },
    /* O perfil pessoal da Júlia, não o da DÉLI. O da casa fica no
       LocalBusiness. Trocar os dois faz o Google ligar a pessoa ao perfil
       errado. */
    sameAs: [negocio.contato.instagramPessoalUrl],
  };
}

export function migalhas(itens: { nome: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itens.map((i, n) => ({
      "@type": "ListItem",
      position: n + 1,
      name: i.nome,
      item: `${SITE}${i.url}`,
    })),
  };
}

export function paginaDePerguntas(perguntas: { pergunta: string; resposta: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: perguntas.map((p) => ({
      "@type": "Question",
      name: p.pergunta,
      acceptedAnswer: { "@type": "Answer", text: p.resposta },
    })),
  };
}

export function JsonLd({ dados }: { dados: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }}
    />
  );
}
