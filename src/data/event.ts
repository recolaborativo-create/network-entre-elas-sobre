// Dados do evento — fonte única de verdade pro conteúdo da landing.
//
// Landing de autoatendimento: qualquer pessoa se inscreve e paga direto por
// aqui (checkout PagBank). O valor aparece na página, junto do lote vigente.

export interface Lote {
  id: string
  label: string
  /** Preço em reais (não em centavos) */
  price: number
  /** Momento em que esse lote termina e o próximo passa a valer */
  endsAt: string
}

export const lotes: Lote[] = [
  { id: 'lote-1', label: '1º lote', price: 139.90, endsAt: '2026-07-31T23:59:59-03:00' },
  { id: 'lote-2', label: '2º lote', price: 169.90, endsAt: '2026-08-17T23:59:59-03:00' },
  { id: 'lote-3', label: '3º lote', price: 189.90, endsAt: '2026-09-10T23:59:59-03:00' },
  { id: 'lote-4', label: '4º lote', price: 209.90, endsAt: '2026-09-26T23:59:59-03:00' },
]

// Valor "de referência" (ancoragem), mostrado riscado ao lado do preço do lote
// vigente, sempre o mesmo valor independente de qual lote estiver ativo — pedido
// do CEO pra reforçar a sensação de desconto em todos os lotes, não só no último.
export const loteAnchorPrice = 279.90

export const event = {
  name: 'Network Entre Elas',
  tagline: 'O maior encontro segmentado de mulheres do Rio Grande do Sul',
  description:
    'Um encontro presencial exclusivo para mulheres empreendedoras trocarem experiência, fecharem parcerias reais e ampliarem sua rede de negócios, sem enrolação, com quem entende do seu dia a dia.',

  dateLabel: '28 de setembro de 2026',
  startDate: '2026-09-28T19:00:00-03:00',
  endDate: '2026-09-28T23:00:00-03:00',
  credenciamentoLabel: 'credenciamento a partir das 18h15',
  timeLabel: '19h às 23h',
  locationName: 'Garden & Containers',
  locationAddress: 'Rua Açucena, 1575, Marechal Rondon',
  locationCity: 'Canoas',
  parkingLabel: 'estacionamento na rua',
  foodLabel: 'comes e bebes à venda no local',

  isFree: false, // pago via checkout PagBank, valor exibido conforme o lote vigente (ver `lotes` acima)

  stats: [
    { target: 370, label: 'mulheres na última edição', suffix: '' },
    { target: 8, label: 'anos de trajetória', suffix: '' },
  ],

  pillars: [
    {
      title: 'Conexão de verdade',
      description: 'Conversas presenciais que geram parceria, não só cartão de visita trocado.',
    },
    {
      title: 'Protagonismo',
      description: 'Espaço pra mulheres empreendedoras serem ouvidas e reconhecidas pelo que constroem.',
    },
    {
      title: 'Comunidade que já provou',
      description: '370 mulheres reunidas na última edição, resultado de 8 anos de rede sendo construída.',
    },
  ],

  // Seção final da página, CTA pro ecossistema REC via WhatsApp.
  community: {
    eyebrow: 'ecossistema REC',
    title: 'Você gostaria de saber mais sobre o nosso ecossistema empreendedor?',
    text: 'O REC é um ecossistema de empresas conectadas no Rio Grande do Sul, com eventos, rede de contatos e oportunidades reais o ano inteiro.',
    ctaLabel: 'quero saber mais',
    whatsappMessage: 'Olá, gostaria de saber mais sobre a comunidade.',
  },

  // Bloco de informações exibido junto do formulário, na seção de inscrição.
  practicalInfo: {
    items: [
      { label: 'Data', value: '28 de setembro' },
      { label: 'Horário', value: 'A partir das 19h até as 23h' },
      { label: 'Credenciamento', value: 'inicia às 18h15' },
      { label: 'Local', value: 'Garden & Containers, Rua Açucena, 1575, Marechal Rondon, Canoas' },
      { label: 'Estacionamento', value: 'Na rua' },
      { label: 'Alimentação', value: 'Comes e bebes à venda no local' },
    ],
  },

  // Texto exibido na revisão final, antes do botão de ir pro pagamento.
  terms: [
    'Sua inscrição é confirmada assim que o pagamento for aprovado pelo PagBank. Você recebe um e-mail de confirmação com os detalhes do evento.',
    'Recomendamos que você faça um print das informações preenchidas para sua referência.',
    'Ao preencher este formulário, você autoriza o uso de sua imagem (fotos e vídeos) para fins de divulgação nas redes sociais do evento.',
    'Política de cancelamento e transferência: você tem até 24h após a confirmação da compra para solicitar reembolso integral. Após esse prazo não realizamos devoluções, mas você pode vender, presentear ou repassar seu ingresso a outra pessoa, desde que solicitado até 72h antes do evento.',
  ],

  faq: [
    {
      q: 'Vou receber confirmação da inscrição?',
      a: 'Sim. Assim que o pagamento for aprovado, sua vaga é confirmada e enviamos um e-mail com os detalhes do evento.',
    },
    {
      q: 'Paguei mas ainda não recebi a confirmação, e agora?',
      a: 'Pagamentos via Pix costumam confirmar em minutos, mas pode levar um pouco mais em horários de pico. Se não chegar em algumas horas, chama a gente no WhatsApp que verificamos.',
    },
    {
      q: 'Posso cancelar ou transferir minha inscrição?',
      a: 'Sim. Você tem até 24h após a confirmação da compra pra solicitar reembolso integral. Depois desse prazo não fazemos devolução, mas dá pra transferir seu ingresso pra outra pessoa até 72h antes do evento.',
    },
    {
      q: 'Como funciona o credenciamento?',
      a: 'O credenciamento abre às 18h15, antes do início oficial às 19h. Chegar nesse horário garante que você não perca nada.',
    },
  ],
}
