/**
 * FONTE UNICA DE VERDADE DO NEGOCIO.
 *
 * Origem de cada dado esta anotada. Tres fontes:
 *   BRIEFING  = brieffing/BRIEFING_Site_DELI_Chef_Julia_Andrade.md
 *   CARDAPIO  = cardapio/cardapio.pdf, edicao de agosto, 44 paginas
 *   CONTATO   = informacoes/contato.txt
 *   RELEASE   = texto_feito_juliaandrade/Release DELI - Maio.docx, escrito
 *               pelo cliente. Chegou em setembro de 2026. E a fonte da
 *               biografia da Julia e dos precos da loja. Ver content/julia.ts
 *
 * Quando as fontes divergem, a divergencia esta registrada em CONFLITOS,
 * no fim deste arquivo, e o site usa o valor marcado como escolhido.
 *
 * Campo `null` significa que o cliente ainda nao enviou. O componente que
 * consome um campo nulo nao renderiza o trecho. Nunca preencher com estimativa.
 */

export const negocio = {
  nome: "DÉLI",
  nomeCompleto: "DÉLI By Chef Júlia Andrade",
  marcaRegistrada: "DÉLI Chef Júlia Andrade",
  assinatura: "Da minha casa para a sua", // MANUAL DE MARCA, versao preferencial do logotipo
  chef: "Júlia Andrade",

  /** BRIEFING secao 1, confirmado pela placa na fachada no video, pela foto
      da fachada enviada em setembro e pelo RELEASE. */
  endereco: {
    logradouro: "Av. das Américas, 500",
    complemento: "Loja 124, Bloco 21",
    referencia: "Shopping Downtown",
    bairro: "Barra da Tijuca",
    cidade: "Rio de Janeiro",
    uf: "RJ",
    cep: "22640-100",
    pais: "BR",
  },

  /**
   * CONTATO. Sao dois perfis, um para cada coisa, confirmado pelo cliente em
   * setembro de 2026:
   *   instagram        = o perfil da DELI, o negocio. Vai no LocalBusiness
   *   instagramPessoal = o perfil da propria Julia, a dona. Vai no Person
   * Nao trocar um pelo outro no dado estruturado.
   */
  contato: {
    whatsapp: "5521996554988",
    whatsappFormatado: "(21) 99655-4988",
    instagram: "@chefjuliadelicatessen",
    instagramUrl: "https://www.instagram.com/chefjuliadelicatessen/",
    instagramPessoal: "@chefjuliaandrade",
    instagramPessoalUrl: "https://www.instagram.com/chefjuliaandrade/",
  },

  /** Loja fisica. CONTATO e CARDAPIO pagina 3, valores iguais nas duas fontes. */
  loja: {
    dias: "segunda a sábado",
    abre: "10:00",
    fecha: "18:00",
    domingo: "fechado",
    /** Formato aceito pelo schema.org OpeningHoursSpecification. */
    horarioEstruturado: [
      { dias: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], abre: "10:00", fecha: "18:00" },
    ],
  },

  /** CARDAPIO pagina 3 e pagina 44. */
  operacao: {
    pedidoMinimo: 95,
    entrega: {
      diasTexto: "segunda a sábado",
      semana: { dias: "segunda a sexta", de: "09h", ate: "17h" },
      sabado: { dias: "sábado", de: "09h", ate: "15h" },
    },
    /** O corte muda no sabado. O briefing so citava as 16h. */
    corteMesmoDia: {
      semana: "16h",
      sabado: "13h",
    },
    /** BRIEFING secao 5. O cardapio confirma para itens especificos. */
    validadeMinimaDias: 5,
    capacidadeDiariaPedidos: { de: 100, ate: 120 },
    cupomPrimeiroPedido: "10%",
    fidelidade: "a cada 5 pedidos, 10% de desconto no seguinte",
    avaliacaoGoogle: 5.0,
    retirada: "consultar opção de retirada na loja",
    antecedenciaSobremesas: "24 horas",
    /** CARDAPIO pagina 44. */
    pagamento: {
      formas: ["Pix", "transferência", "cartão de crédito"],
      noDia: "pagamento integral antes da entrega",
      antecipado: "50% no ato do pedido e 50% até o dia anterior",
      regra: "não há entrega sem pagamento integral do pedido",
    },
    transporte:
      "todos os pedidos podem ser transportados e vão embalados para garantir a qualidade e o tempo fora da geladeira",
  },

  /** CARDAPIO pagina 44. Esta e a tabela que o cliente publica hoje. */
  frete: [
    { regiao: "Barra da Tijuca", valor: "a partir de R$ 20" },
    { regiao: "Zona Sul", valor: "a partir de R$ 30" },
    { regiao: "Recreio dos Bandeirantes", valor: "a partir de R$ 35" },
    { regiao: "Tijuca e Centro", valor: "R$ 40" },
    { regiao: "Jacarepaguá", valor: "R$ 40" },
    { regiao: "Outras áreas", valor: "consultar disponibilidade e taxa" },
  ],

  /** CARDAPIO pagina 44. Minimo de 20 pessoas. */
  eventos: {
    minimoPessoas: 20,
    formato:
      "cardápio personalizado executado pela equipe da casa, com ilha gastronômica completa, serviço de canapés, mini porções opcionais e serviço de bebida volante",
    inclui: ["equipe de cozinha", "garçons", "utensílios necessários para servir"],
    comoSolicitar: "orçamento pelo WhatsApp",
  },

  /** BRIEFING secao 1. */
  historia: {
    inicio: 2020,
    primeiroProduto: "focaccia",
    aberturaLojaFisica: "abril de 2026",
    frentes: ["delivery", "café e loja física", "eventos"],
  },

  /** GTM */
  rastreamento: {
    gtmId: "GTM-PJTCDWVS",
  },

  /** Ainda nao enviado pelo cliente. */
  pendente: {
    telefoneFixo: null,
    googleMeuNegocio: null,
    dominioNovo: null,
    ga4Id: null, // pode estar dentro do GTM, confirmar
    metaPixelId: null, // pode estar dentro do GTM, confirmar
    endpointGoogleSheets: null,
    // Chegaram em setembro de 2026, no RELEASE e nas oito fotos do Drive.
    // O conteudo tratado vive em content/julia.ts.
    textoHistoriaJulia: "RELEASE, ver content/julia.ts",
    fotoDaJulia: "/imagens/chef-julia-fachada.webp",
    fotoDaLoja: null,
    depoimentos: null,
    linksTutoriaisYouTube: null,
    // urlCardapioDigital saiu em 23/09/2026. chefjuliaandrade.com.br passou a
    // ser este site e o cardapio completo mora em /delivery. Ver lib/links.ts.
  },
} as const;

export const fotografo = "Rodrigo Azevedo";

/**
 * Divergencias entre as fontes oficiais. Nao apagar: servem de registro para
 * quando o cliente for consultado.
 */
export const CONFLITOS = [
  {
    assunto: "Número da loja",
    fontes: {
      "CARDAPIO pág. 3": "loja 214, bloco 21",
      "BRIEFING seção 1": "Loja 124, Bloco 21",
      "Vídeo do espaço": "placa na fachada mostra BLOCO 21 e 124",
      "RELEASE": "Av das Américas 500 bloco 21 loja 124",
      "Foto da fachada": "a placa 124 aparece ao lado do selo da Chef",
    },
    escolhido: "Loja 124",
    razao: "três fontes contra uma, e duas provas visuais diretas da fachada",
    resolvido: true,
  },
  {
    assunto: "Instagram",
    fontes: {
      "CARDAPIO pág. 2 e 3": "@chefjuliaandrade",
      "CONTATO": "@chefjuliadelicatessen",
      "RELEASE": "lista os dois perfis, começando por @chefjuliadelicatessen",
    },
    escolhido: "os dois, cada um no seu lugar",
    razao:
      "nunca foi divergência. São perfis diferentes: @chefjuliadelicatessen é da DÉLI e @chefjuliaandrade é da Júlia, a dona. O cardápio trazia o pessoal porque o negócio ainda não tinha o seu",
    resolvido: true,
  },
  {
    assunto: "Tabela de frete",
    fontes: {
      "BRIEFING seção 4.7":
        "dez faixas, com São Conrado a R$ 25, Niterói a R$ 100 fixo e Tijuca marcada como a confirmar",
      "CARDAPIO pág. 44": "seis faixas, sem São Conrado e sem Niterói, com Tijuca e Centro a R$ 40",
    },
    escolhido: "CARDAPIO",
    razao:
      "é o documento que o cliente entrega hoje. Resolve a dúvida da Tijuca. Perguntar se Niterói e São Conrado saíram da cobertura",
  },
  {
    assunto: "Validade do cardápio",
    fontes: {
      "CARDAPIO capa": "AGOSTO",
      "CARDAPIO págs. 3 e 44": "Cardápio válido até 31/07",
    },
    escolhido: "nenhum",
    razao: "parece erro de atualização no PDF de agosto. Confirmar antes de publicar preço",
  },
] as const;
