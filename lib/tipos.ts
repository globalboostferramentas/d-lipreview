/**
 * Modelo de dados do catalogo.
 *
 * Todo campo opcional existe porque a informacao correspondente pode nao ter
 * sido enviada pelo cliente. Quando o campo esta ausente, a interface omite o
 * trecho inteiro. Em nenhum caso a interface preenche com texto generico.
 */

export type Foto = {
  /** Caminho em /public/imagens */
  src: string;
  /** Alt escrito por pessoa, descrevendo o que a foto mostra. */
  alt: string;
  largura: number;
  altura: number;
  credito?: string;
};

export type Categoria = {
  id: string;
  nome: string;
  slug: string;
  /** Uma frase que define a categoria sem depender do contexto da pagina (AEO). */
  definicao?: string;
  introducao?: string;
  capa?: Foto;
  ordem: number;
  /** Categoria so vai ao ar quando tiver conteudo real suficiente. */
  publicada: boolean;
};

export type Produto = {
  id: string;
  /** Nome oficial, exatamente como o cliente escreve. */
  nome: string;
  slug: string;
  categoriaId: string;

  descricaoCurta?: string;
  descricao?: string;

  foto?: Foto;
  galeria?: Foto[];

  /** Ficha. Preenchida somente com dado vindo do cardapio oficial. */
  ingredientes?: string[];
  peso?: string;
  tamanho?: string;
  serve?: string;
  acompanhamentos?: string[];
  modoDeServir?: string;
  armazenamento?: string;
  validade?: string;
  observacoes?: string[];
  disponibilidade?: string;

  /** Nunca inferir preco. So entra se vier do cardapio confirmado. */
  preco?: { valor: number; moeda: "BRL"; observacao?: string };

  relacionados?: string[];
  publicada: boolean;
};

/** Lista legivel do que falta para uma pagina sair do rascunho. */
export type Pendencia = {
  onde: string;
  falta: string;
  bloqueia: "pagina" | "secao" | "campo";
};
