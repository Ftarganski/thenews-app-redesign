// Conteúdo das explicações de cada estado — embasamento de CX e design.
// Estrutura: problema (o que estava errado) → decisão (o que o redesign faz) →
// princípios (a teoria que sustenta a decisão, com autor).

export const SCREENS = {
  onboarding: {
    label: 'Onboarding',
    blurb: 'Onde o hábito nasce. O onboarding fecha o funil pela frente: enquadra a expectativa (edição diária + sequência) e leva o novo usuário à primeira leitura — o “aha moment” — no menor caminho possível.',
    states: [
      {
        id: 'welcome',
        name: 'Boas-vindas',
        problem: 'Apps de notícia costumam jogar o usuário direto no conteúdo ou num cadastro longo, sem comunicar o valor central. Quem não entende o “porquê” em segundos, sai.',
        decision: 'Uma abertura de marca enxuta com uma única promessa clara, “as notícias que importam, em 5 minutos por dia”, e um CTA. Nenhuma fricção antes de comunicar o valor.',
        principles: [
          ['Efeito estética–usabilidade — Kurosu & Kashimura', 'a primeira impressão calibra a percepção de facilidade e confiança no produto inteiro.'],
          ['Proposta de valor única', 'comunicar o benefício central em segundos é o que reduz o abandono na primeira tela.'],
          ['Efeito Von Restorff', 'marca (amarelo + logo) ancora o reconhecimento desde o primeiro frame.'],
        ],
      },
      {
        id: 'habit',
        name: 'O hábito',
        problem: 'A funcionalidade que retém, a sequência, só era descoberta depois. O usuário não chegava sabendo que existe um hábito a formar, nem quando.',
        decision: 'Já no onboarding enquadro a expectativa: “toda manhã, às 6:06, uma edição; leia e mantenha sua sequência”. E desarmo a culpa: falhou, recomeça. O hábito é apresentado antes de começar.',
        principles: [
          ['Implementation Intentions — Gollwitzer', 'associar a ação a um gatilho específico (“todo dia às 6:06”) aumenta drasticamente a adesão a um hábito.'],
          ['Hook Model — gatilho — Eyal', 'o onboarding instala o gatilho externo (a edição diária) que vai disparar os ciclos de hábito.'],
          ['Fresh Start Effect — Dai & Milkman', 'enquadrar como “comece hoje” aproveita o marco temporal para iniciar o comportamento.'],
        ],
      },
      {
        id: 'interests',
        name: 'Interesses',
        problem: 'Sem personalização, o primeiro feed é genérico; com personalização longa demais, o usuário desiste no meio (paradoxo da escolha).',
        decision: 'Uma seleção rápida de temas em chips, com opções agrupadas e limitadas. Investimento mínimo que gera senso de propriedade sobre o conteúdo, sem virar formulário.',
        principles: [
          ['IKEA Effect / Endowment', 'o pequeno esforço de escolher gera apego ao resultado: o feed passa a ser “meu”.'],
          ['Commitment & Consistency — Cialdini', 'um micro-compromisso inicial aumenta a probabilidade de o usuário continuar engajado.'],
          ['Lei de Hick', 'limitar e agrupar as opções evita a sobrecarga de escolha que paralisa.'],
        ],
      },
      {
        id: 'ready',
        name: 'Pronto',
        problem: 'Muitos onboardings terminam num “pronto” vazio, longe do valor, e o usuário fecha o app sem nunca viver o momento que o faria voltar.',
        decision: 'O fechamento leva direto à primeira leitura (“sua primeira edição te espera”), com o opt-in de notificação no mesmo passo. O caminho até o valor é o mais curto possível.',
        principles: [
          ['Time-to-Value / “Aha Moment”', 'quanto antes o usuário vive o valor central (ler a edição), maior a ativação e a retenção.'],
          ['Goal-Gradient + Efeito Zeigarnik', '“falta 1 passo” e a tarefa quase concluída puxam para a ação final.'],
          ['Peak-End Rule — Kahneman', 'terminar o onboarding com uma vitória e a promessa da sequência deixa memória positiva.'],
        ],
      },
    ],
  },

  habito: {
    label: 'Hábito',
    blurb: 'A tela que fabrica o hábito. Numa newsletter diária, a retenção é o produto, então a sequência precisa ser a protagonista, e o caminho para mantê-la, óbvio.',
    states: [
      {
        id: 'empty',
        name: 'Novo usuário',
        problem: 'O app recebe quem acabou de chegar com um muro de zeros, 0 dias, 0%, 0/0, gráfico vazio. Comunicar ausência logo na primeira sessão é um dos piores padrões de empty state e empurra para o abandono.',
        decision: 'Reenquadro o zero como um começo: a sequência vira um convite com os 3 passos do loop (ler → registra sozinho → volte amanhã). Em vez de vazio, um caminho já iniciado.',
        principles: [
          ['Endowed Progress Effect — Nunes & Drèze (2006)', 'as pessoas se engajam mais quando sentem que já começaram; por isso mostro o caminho, não o vazio.'],
          ['Self-Determination Theory — Deci & Ryan', 'motivação durável nasce de competência e autonomia, não de cobrança, o copy convida, não pressiona.'],
          ['Goal-Gradient — Hull / Kivetz', 'o esforço cresce conforme a meta se aproxima; explicitar a meta ativa o gradiente desde o passo 1.'],
        ],
      },
      {
        id: 'active',
        name: 'Sequência ativa',
        problem: 'No app atual a sequência aparece como terceiro bloco, abaixo de "Hábitos de Hoje" e de um gráfico, o elemento mais emocional fica enterrado. E o card usa um gradiente laranja que nem é da marca.',
        decision: 'Promovo a streak a herói: topo, número grande, chama, no amarelo da marca. A tela se resume a uma ação primária, "Ler edição de hoje", que conecta direto ao valor.',
        principles: [
          ['Hierarquia visual + Lei de Fitts', 'o que importa tem de ser o maior e o primeiro; alvos centrais e grandes são processados e alcançados mais rápido.'],
          ['Lei de Hick', 'o tempo de decisão cresce com o nº de opções, uma tela de retorno diário oferece a próxima ação óbvia, não um leque.'],
          ['Efeito Von Restorff (isolamento)', 'reservar o amarelo só para o que importa garante destaque e memória; se tudo é amarelo, nada se destaca.'],
          ['Fogg Behavior Model (B=MAP)', 'motivação (streak visível) + habilidade (um toque) + gatilho (o CTA) convergem no mesmo lugar.'],
        ],
      },
      {
        id: 'done',
        name: 'Dia concluído',
        problem: 'Ler a edição não dava nenhum sinal de que a sequência fora mantida. A recompensa, o que sustenta o hábito, era invisível.',
        decision: 'Depois de ler, o card confirma a manutenção e o CTA vira estado de sucesso. Sem ritual manual: a vitória é consequência de ter consumido valor.',
        principles: [
          ['Hook Model — recompensa — Eyal', 'o ciclo de hábito só se fecha quando a recompensa é sentida; aqui ela ganha um momento visível.'],
          ['Lei de Feedback / Limiar de Doherty', 'o sistema responde à ação do usuário de forma imediata e legível, mantendo o engajamento.'],
          ['Peak-End Rule — Kahneman', 'terminar em alta deixa uma memória positiva que puxa o retorno no dia seguinte.'],
        ],
      },
      {
        id: 'risk',
        name: 'Em risco',
        problem: 'Faltava um momento que comunicasse "você está prestes a perder algo bom", justamente o gatilho de retorno mais poderoso, ausente.',
        decision: 'Inverto para fundo escuro com um timer. Urgência sem semântica de erro: informo o tempo restante, não persigo o usuário.',
        principles: [
          ['Prospect Theory / aversão à perda — Kahneman & Tversky (1979)', 'perdas pesam ~2x mais que ganhos equivalentes; daí a força do "não perca seus 12 dias".'],
          ['Ética do design (anti dark pattern)', 'a linha entre engajar e chantagear: informo ("faltam 3h47"), com teto de frequência, sem ansiedade fabricada.'],
          ['Contraste como hierarquia emocional', 'escuro + acento quente = urgência, sem o vermelho de erro que diria "algo deu errado".'],
        ],
      },
    ],
  },

  leitura: {
    label: 'Leitura',
    blurb: 'Onde a atenção e o valor acontecem, e onde o loop deveria se fechar. É o fim da leitura que precisa creditar a sequência, sem ação manual no meio do caminho.',
    states: [
      {
        id: 'topo',
        name: 'Abertura',
        problem: 'O header empilha logo + 5 ícones + barra fina + chevron. Excesso de elementos gera carga cognitiva e faz a barra de progresso de leitura quase desaparecer.',
        decision: 'Enxugo o header ao essencial, torno a barra de progresso proeminente e mostro o tempo de leitura no topo. A mini-chama mantém a sequência presente durante toda a leitura.',
        principles: [
          ['Lei de Hick + Memória de Trabalho (Miller)', 'reduzir o nº de elementos acelera a decisão e libera atenção para o conteúdo.'],
          ['Lei de Jakob — Nielsen', 'honrar convenções de leitura (marca, categoria, tempo) reduz atrito porque o usuário já as conhece de outros contextos.'],
          ['Sinal de esforço', 'mostrar "5 min de leitura" calibra a expectativa e aumenta a taxa de conclusão.'],
        ],
      },
      {
        id: 'lendo',
        name: 'Lendo',
        problem: 'O app interrompe a leitura com um banner laranja pedindo registro manual da sequência. E o corpo em sans cansa na leitura longa.',
        decision: 'O registro vira automático, uma faixa discreta mostra o progresso conforme você avança. O corpo passa a serif (Georgia) para leitura longa. Adeus banner manual.',
        principles: [
          ['Tipografia editorial', 'serifas guiam o olho ao longo da linha e dão voz jornalística; Georgia (Matthew Carter) foi desenhada para legibilidade em tela.'],
          ['Efeito Zeigarnik', 'tarefas incompletas incomodam: a barra "quase cheia" cria a tensão que leva a concluir a leitura.'],
          ['Remoção de fricção — Fogg (habilidade)', 'a ação principal vira só "ler"; tudo o que exigia esforço extra foi eliminado do caminho.'],
        ],
      },
      {
        id: 'fim',
        name: 'Fim · recompensa',
        problem: 'A leitura terminava sem fechamento, nenhum pagamento emocional, nenhuma conexão visível com a sequência. O loop ficava aberto.',
        decision: 'Um card de conclusão credita +1 na sequência e conecta de volta ao Hábito, com opções de compartilhar ou ver a streak. O fim da edição é o momento da recompensa.',
        principles: [
          ['Peak-End Rule — Kahneman', 'avaliamos uma experiência pelo pico e pelo fim; concentro a celebração no final para deixar a melhor memória.'],
          ['Hook Model — investimento — Eyal', 'a sequência crescente é capital acumulado que o usuário não quer perder, alimentando o próximo ciclo.'],
          ['Recompensa variável', 'a conclusão celebrada reforça o comportamento e transforma leitura em hábito.'],
        ],
      },
    ],
  },
}
