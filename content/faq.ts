import { negocio } from "./negocio";

/**
 * AEO: a resposta vem primeiro, em frases completas e autossuficientes, que
 * fazem sentido fora do contexto da pagina. Toda pergunta abaixo e respondida
 * com dado confirmado no briefing, no cardapio de agosto ou no arquivo de
 * contato. Pergunta sem dado confirmado nao entra aqui.
 */

const op = negocio.operacao;

export const perguntasGerais = [
  {
    pergunta: "O que é a DÉLI By Chef Júlia Andrade?",
    resposta:
      "A DÉLI é uma delicatessen e café da Chef Júlia Andrade na Barra da Tijuca, no Rio de Janeiro, com entrega em boa parte da cidade. Ela vende focaccias, mousses, terrines, bries assados, quiches, carnes, sobremesas, cestas e kits prontos para quem vai receber gente em casa. O espaço físico fica na Avenida das Américas, 500, Loja 124, Bloco 21, no Shopping Downtown.",
  },
  {
    pergunta: "Qual é o pedido mínimo da DÉLI?",
    resposta: `O pedido mínimo da DÉLI é de R$ ${op.pedidoMinimo}. O valor não inclui o frete, que varia por região do Rio de Janeiro.`,
  },
  {
    pergunta: "Até que horas dá para pedir para receber no mesmo dia?",
    resposta: `Pedidos para o mesmo dia são aceitos até as ${op.corteMesmoDia.semana} de segunda a sexta e até as ${op.corteMesmoDia.sabado} no sábado. Pedidos feitos com antecedência garantem horário definido de entrega, o que ajuda quando a comida precisa estar na mesa em um horário certo.`,
  },
  {
    pergunta: "Em quais dias e horários a DÉLI entrega?",
    resposta: `A DÉLI entrega de ${op.entrega.diasTexto}. De segunda a sexta as entregas acontecem das ${op.entrega.semana.de} às ${op.entrega.semana.ate}, e no sábado das ${op.entrega.sabado.de} às ${op.entrega.sabado.ate}.`,
  },
  {
    pergunta: "Quanto custa a entrega?",
    resposta:
      "A taxa de entrega da DÉLI começa em R$ 20 na Barra da Tijuca, R$ 30 na Zona Sul e R$ 35 no Recreio dos Bandeirantes. Tijuca, Centro e Jacarepaguá custam R$ 40. Outras áreas dependem de consulta de disponibilidade e taxa.",
  },
  {
    pergunta: "Quanto tempo os produtos duram depois da entrega?",
    resposta: `Os produtos têm validade mínima de ${op.validadeMinimaDias} dias depois da entrega e podem ser transportados. Todos vão embalados para garantir a qualidade e o tempo fora da geladeira, o que permite levar a comida para outro endereço, como uma casa de praia ou um apartamento alugado.`,
  },
  {
    pergunta: "Como funciona o pagamento?",
    resposta:
      "Pedidos para o mesmo dia são pagos integralmente antes da entrega, por Pix, transferência ou cartão de crédito. Pedidos antecipados são confirmados com 50% no ato do pedido e os outros 50% até o dia anterior. A DÉLI não faz entrega sem o pagamento integral do pedido.",
  },
  {
    pergunta: "A DÉLI monta a mesa e leva louça?",
    resposta:
      "Não. Os produtos são entregues em embalagens e formas descartáveis, prontos para montar e servir na hora da recepção, com orientações de armazenamento, montagem e acompanhamentos. Pratos, talheres, louças e serviço de montagem não estão incluídos no delivery.",
  },
  {
    pergunta: "Onde fica a loja física da DÉLI e qual é o horário?",
    resposta: `A DÉLI fica na Avenida das Américas, 500, Loja 124, Bloco 21, no Shopping Downtown, na Barra da Tijuca, Rio de Janeiro. A loja funciona de ${negocio.loja.dias}, das ${negocio.loja.abre} às ${negocio.loja.fecha}, e ${negocio.loja.domingo} aos domingos. É café, delicatessen e ponto de retirada dos pedidos.`,
  },
  {
    pergunta: "A DÉLI faz eventos?",
    resposta: `Sim. A DÉLI atende eventos a partir de ${negocio.eventos.minimoPessoas} pessoas, com ${negocio.eventos.formato}. O serviço inclui equipe de cozinha, garçons e os utensílios necessários para servir. O orçamento é solicitado pelo WhatsApp.`,
  },
  {
    pergunta: "Preciso pedir sobremesa com antecedência?",
    resposta: `Sim. Todas as sobremesas da DÉLI são feitas sob encomenda, com antecedência mínima de ${op.antecedenciaSobremesas}.`,
  },
] as const;
