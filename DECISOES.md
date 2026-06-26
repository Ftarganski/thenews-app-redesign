# Decisões de Design — Redesign do app the news

> Telas redesenhadas: **Hábito** (sequência/retenção) e **Leitura** da edição.
> Este documento explica o *raciocínio* por trás de cada escolha, ancorado em teoria de
> design de produto, ciência comportamental e UX. A premissa que guiou tudo:
> **decisão de design boa é decisão com hipótese — e hipótese tem teoria por trás.**

---

## 0. Diagnóstico: onde estava o vazamento

Antes de redesenhar, o trabalho foi *entender o sistema*. Explorando o app, encontrei um
desalinhamento estrutural entre as duas funcionalidades mais ligadas à retenção:

> **A sequência (o motor de retenção) estava desacoplada da leitura (a ação principal do produto).**

Concretamente:

1. Na **edição**, um banner laranja gritava *"JÁ REGISTROU SUA LEITURA HOJE? CLIQUE AQUI E MANTENHA SUA SEQUÊNCIA!"*.
   Ou seja: ler a edição inteira **não** avançava a streak — era preciso lembrar de uma ação manual, separada,
   interrompendo a leitura.
2. Na tela de **Hábitos**, o novo usuário era recebido por um **muro de zeros** (`0 dias`, `0%`, `0/0 completados`,
   gráfico vazio) num **gradiente laranja** que sequer é a cor da marca.

Esses dois pontos são, em linguagem de CX, **fricção no loop de retenção** e **um onboarding desmotivador**.
Todo o redesign parte de uma única tese: **fechar o loop — ler a edição é, por si só, avançar a sequência** —
e tornar a recompensa visível no momento certo.

A escolha de *quais* telas redesenhar já é, portanto, uma decisão analítica: não fui ao mais vistoso
(o Bolão da Copa, sazonal), fui à **alavanca de retenção diária** (Hábito) e ao **lugar onde o usuário passa
mais tempo** (Leitura) — os dois pontos onde 1% de melhoria se capitaliza todos os dias.

---

## 1. Por que essas telas — e qual o impacto esperado

### 1.1 O enquadramento: retenção é o que importa numa newsletter diária
Para um produto de **uso diário**, a métrica que governa o crescimento não é aquisição, é **retenção**
— especificamente o retorno no dia seguinte (D1) e na semana (D7). A literatura de produto resume isso na ideia
de que *"retention is the single most important thing for growth"* (Brian Balfour; Andrew Chen). Numa newsletter,
o hábito **é** o produto. Logo, redesenhar a tela que **fabrica o hábito** (Hábito/streak) e a tela que **entrega o
valor** (Leitura) ataca exatamente as duas pontas do ciclo de retorno.

### 1.2 Hábito — o Hook Model aplicado
Usei o **Hook Model** de Nir Eyal (*Hooked*, 2014) como lente. Um produto forma hábito quando completa
ciclos de quatro etapas:

| Etapa do Hook | Onde estava quebrado | O que o redesign faz |
|---|---|---|
| **Gatilho** (trigger) | Notificação externa genérica | A própria sequência ativa vira gatilho interno ("não quero perder meus 12 dias") |
| **Ação** (action) | Ação manual extra (tocar no banner) | A ação vira simplesmente **ler** — fricção removida |
| **Recompensa variável** (variable reward) | Inexistente / invisível | Card de conclusão com a sequência incrementada (+1) no fim da edição |
| **Investimento** (investment) | Pouco acumulado e escondido | A streak crescente é capital acumulado que o usuário não quer perder |

O ponto mais importante é o terceiro: **a recompensa precisa ser sentida**. Hoje ela não existia
como momento — o redesign cria um.

### 1.3 Leitura — onde a atenção e o valor acontecem
A leitura é onde o usuário passa a maior parte do tempo e onde a marca entrega seu conteúdo. Melhorar
**clareza e legibilidade** aqui tem efeito direto na percepção de valor (e, por tabela, na vontade de voltar).
Além disso, é a tela que **fecha o loop**: é o fim da leitura que deveria creditar a sequência.

### 1.4 Impacto esperado (hipóteses testáveis)
- **Acoplar leitura → streak** deve aumentar a taxa de "dias registrados / dias lidos" para perto de 100%
  (hoje há perda por esquecimento da ação manual). Métrica: % de leituras completas que registram streak.
- **Onboarding sem muro de zeros** deve melhorar a ativação (primeiro registro). Métrica: D1 do novo usuário.
- **Momento de recompensa (peak-end)** deve elevar a intenção de retorno. Métrica: D1/D7 e NPS pós-leitura.

---

## 2. Decisões de cor, hierarquia e tipografia — com a teoria

### 2.1 Cor

**Amarelo `#F9D029` como única cor de marca (efeito de isolamento).**
Extraí os tokens reais do portal: amarelo `#F9D029`, preto `#1D1D1D`, branco e uma escala de cinzas.
A decisão central foi **reservar o amarelo para significado**, não para decoração. Isso se apoia no
**Efeito Von Restorff** (isolation effect): um elemento que se distingue dos demais é mais lembrado.
Se tudo é amarelo, nada se destaca. Então o amarelo marca **a sequência/chama, o progresso e os CTAs** —
os pontos que queremos que o olho encontre.

**Correção do laranja off-brand.** O app atual usa um gradiente laranja na streak que **não pertence à
paleta da marca**. Troquei pelo amarelo da marca (com preto para contraste), usando o laranja/vermelho
apenas como acento pontual da chama. Isso atende diretamente ao critério de **aderência à marca**:
a tela tem que parecer inequivocamente *the news*, não "qualquer app de hábitos". É também consistência
percebida — **Lei de Jakob** (Jakob Nielsen): o usuário traz expectativas de outros contextos (aqui, do
próprio portal e e-mails da marca); honrá-las reduz carga cognitiva.

**Contraste a serviço da emoção.** No estado **"em risco"**, inverto para fundo **escuro**. Não é estética:
é hierarquia emocional. Escuro + timer + acento quente comunica urgência sem usar vermelho de erro
(que carregaria semântica de "algo deu errado", quando na verdade é "você está prestes a perder algo bom").

Contraste de texto mantém **AA do WCAG** (preto sobre amarelo tem razão de contraste alta; cinzas usados só
em texto secundário/grande).

### 2.2 Hierarquia

**A streak como herói (Lei de Fitts + foco).**
No app atual, a "Sequência Atual" aparecia como **terceiro bloco**, abaixo de "Hábitos de Hoje" e de um
gráfico semanal — ou seja, o elemento mais emocional estava enterrado. Promovi a streak ao **topo**, grande,
com a chama. A **Lei de Fitts** (alvos maiores e mais centrais são mais fáceis de alcançar/processar) e a
hierarquia visual clássica (tamanho, peso, posição) dizem que **o que importa tem que ser o maior e o primeiro**.

**Um único CTA (Lei de Hick e Modelo de Fogg).**
Reduzi a tela a **uma ação primária**: *"Ler edição de hoje"*. A **Lei de Hick** diz que o tempo de decisão
cresce com o número de opções; uma tela de retorno diário não deve apresentar um leque de escolhas, deve
apresentar **a próxima ação óbvia**. O **Modelo de Comportamento de Fogg** (B=MAP: comportamento acontece
quando Motivação, Habilidade e um Gatilho convergem) reforça: a tela maximiza motivação (a streak visível),
maximiza habilidade (um toque) e serve o gatilho (o CTA) no mesmo lugar.

**Progressive disclosure / Lei de Tesler.**
O calendário mensal e as métricas detalhadas (Dias Ativos, Perfeitos, Checks) não sumiram — foram
**rebaixados** na hierarquia. A complexidade existe, mas é revelada sob demanda (**progressive disclosure**),
respeitando a **Lei de Tesler** (a complexidade é conservada; cabe ao design decidir quem a carrega — aqui,
não o usuário no primeiro olhar).

**Agrupamento (Gestalt).**
Cards com *região comum* e *proximidade* (princípios da Gestalt) agrupam o que é semanticamente relacionado:
a sequência num bloco, a semana noutro, as estatísticas num terceiro. Isso transforma um painel denso em
unidades legíveis.

### 2.3 Tipografia

**Dois tipos, dois trabalhos.**
A marca usa **Helvetica Now Display** (sans, neogrotesca) para display/UI e **Georgia Pro** (serif) para
texto editorial. Mantive essa divisão funcional:

- **Sans (Inter, como substituto web da Helvetica Now)** para títulos, números e interface — onde se quer
  neutralidade e impacto geométrico. *(Nota de implementação: Helvetica Now é proprietária e sem web font
  livre; usei Inter, uma neogrotesca de altíssima legibilidade em tela, como o stand-in mais fiel. No app
  nativo, usar a fonte de marca real.)*
- **Serif (Georgia)** para o **corpo da matéria**. Aqui a decisão é de legibilidade em **leitura longa**:
  serifas guiam o olho ao longo da linha e dão "voz" editorial — coerente com um produto de *jornalismo*.
  Georgia, especificamente, foi desenhada por Matthew Carter para legibilidade em telas. Isso reforça a
  **distinção entre "ler" e "operar"**: quando o conteúdo vira serif, o cérebro entra em modo leitura.

**Escala tipográfica e ritmo.**
Usei uma escala com saltos claros (número da streak em ~76px; títulos ~30px; corpo 18px) para criar
**hierarquia inequívoca**. Corpo a 18px com *line-height* ~1.6 respeita as recomendações de legibilidade
(medida de linha e entrelinha confortáveis) — a leitura é o produto, não pode cansar.

**Efeito estética–usabilidade.**
Por fim, o cuidado visual não é vaidade: o **efeito estética–usabilidade** (Kurosu & Kashimura, 1995)
mostra que interfaces percebidas como mais bonitas são percebidas como mais fáceis de usar — e ganham mais
tolerância a pequenas falhas. Num case sobre marca e retenção, isso é parte do argumento.

---

## 3. A tensão mais difícil — e como resolvi

> **Engajamento honesto vs. pressão manipulativa (dark patterns).**

Streaks são poderosas porque exploram **aversão à perda** — na **Teoria do Prospecto** (Kahneman & Tversky,
1979), perdas pesam psicologicamente cerca de **2x** mais que ganhos equivalentes. É exatamente por isso que
"não perca seus 12 dias" funciona. Mas essa mesma força é a porta de entrada para **dark patterns**: ansiedade
fabricada, FOMO, notificações agressivas, a sensação de estar "preso" ao app. Duolingo é o caso-limite que
todo mundo conhece — eficaz e, às vezes, ansiogênico.

A tensão: **como usar a aversão à perda para ajudar o hábito sem chantagear o usuário?**

Como resolvi, em decisões concretas:

1. **A recompensa vem de ler, não de tocar.** Ao acoplar a streak à leitura real, a "vitória" é consequência
   de ter consumido valor — não de ter executado um ritual de engajamento vazio. Isso desloca o eixo de
   *compulsão* para *competência*.
2. **Reforço a competência e a autonomia (Self-Determination Theory).** A **Teoria da Autodeterminação**
   (Deci & Ryan) diz que motivação durável vem de **autonomia, competência e pertencimento** — não de pressão
   externa. Por isso o copy celebra o progresso do usuário ("você está num ótimo ritmo", "sem precisar fazer
   nada além de ler") em vez de ameaçar. O estado "em risco" **informa** ("faltam 3h47"), não persegue.
3. **Onboarding como convite, não como cobrança (evitar o muro de zeros).** Para o novo usuário, troquei
   `0 dias / 0% / 0/0` por um enquadramento de início com 3 passos. Isso aplica o **Efeito de Progresso Dotado**
   (endowed progress effect — Nunes & Drèze, 2006): pessoas se engajam mais quando sentem que **já começaram**.
   Em vez de comunicar vazio (desmotivador, e um péssimo *empty state* segundo a NN/g), comunico **um caminho
   já iniciado**.
4. **Recompensa no pico e no fim (peak-end rule).** A **regra de pico-fim** (Kahneman) diz que avaliamos uma
   experiência pelo seu momento mais intenso e pelo seu final. Concentrei a celebração no **fim da edição** —
   o melhor lugar para deixar uma memória positiva que puxa o retorno, sem poluir a leitura no meio do caminho.

O resultado é uma streak que **puxa pelo valor** (li algo bom, mantive meu ritmo) em vez de **empurrar pelo
medo**. Essa foi a decisão mais difícil porque o caminho fácil — apertar o gatilho da perda ao máximo —
provavelmente sobe métricas no curto prazo e corrói a confiança no longo. Optei pelo design que a marca de um
veículo de *informação* pode sustentar.

Tensões secundárias que também precisei equilibrar:
- **Densidade de dados vs. foco** → resolvida com *progressive disclosure* (seção 2.2).
- **Interromper para registrar vs. fluidez da leitura** → resolvida com **registro automático** + indicador
  discreto, e recompensa só no fim (a antítese do banner atual).
- **Efeito Zeigarnik** (tarefas incompletas são lembradas e incomodam): a barra de progresso de leitura usa
  isso a favor — a leitura "quase terminada" cria a pequena tensão que leva a concluir, e a conclusão é o que
  credita a streak.

---

## 4. Autocrítica — o que eu faria com mais 1 dia

Não considero este trabalho "pronto". O que está aberto, em ordem de prioridade:

**O que eu não gostei / limitações assumidas**
- **Substituição tipográfica.** Usei Inter no lugar da Helvetica Now (proprietária). É um bom *proxy*, mas
  não é a marca real — a personalidade do display muda sutilmente. Com acesso à fonte oficial, a aderência
  subiria.
- **Conteúdo simulado.** Imagens e textos são *placeholders*. Um teste real precisa de conteúdo verdadeiro
  (inclusive edições longas e curtas) para validar a hierarquia sob estresse.
- **Estados de erro/borda não cobertos.** O que acontece com a streak num fuso diferente? Em viagem? Se o
  usuário lê às 23h59? Falta a política de "graça" (streak freeze) — que, aliás, é uma decisão de produto
  importante para *não* punir deslizes (de novo, competência > punição).

**O que eu testaria a seguir**
- **A/B no momento de recompensa.** Pico-fim sugere que o card de conclusão ajuda — mas *quanto*? Testaria
  variações (com/sem animação, com/sem compartilhamento) medindo D1/D7.
- **O timer do "em risco".** Aversão à perda é faca de dois gumes. Testaria se o timer ajuda o retorno ou
  gera ansiedade/desinstalação — provavelmente com um teto de frequência.
- **Validação de legibilidade.** Teste de leitura real (velocidade, compreensão, fadiga) comparando o corpo
  serif vs. o sans atual, em diferentes tamanhos de tela e com usuários mais velhos.
- **Acessibilidade a fundo.** Auditei contraste, mas faltam: navegação por leitor de tela, *dynamic type*,
  reduções de movimento (a animação do reward precisa respeitar `prefers-reduced-motion`).

**O que ficou fora de escopo de propósito**
- Não redesenhei o **Bolão** nem o **social**. Foi uma escolha: profundidade em duas telas de alto impacto
  vale mais, para este case, do que largura rasa em cinco.
- O **fluxo de navegação completo** entre todas as abas — fiz a conexão Hábito↔Leitura (o loop), que é a que
  sustenta a tese, mas não o mapa inteiro do app.

**A pergunta honesta que fica em aberto**
A streak resolve retenção *de hábito*. Mas ela não responde se o usuário está retendo *valor* — alguém pode
manter 60 dias "registrando leitura" sem de fato ler. O próximo passo de produto seria distinguir **presença**
de **engajamento real** (tempo de leitura, scroll-depth, áudio ouvido) e garantir que a recompensa premie o
segundo, não o primeiro. Caso contrário, otimizamos a métrica e perdemos o ponto.

---

### Referências (lentes usadas)
Eyal, *Hooked* (Hook Model) · Kahneman & Tversky, *Prospect Theory* (aversão à perda) · Kahneman,
*peak-end rule* · Fogg, *Behavior Model* (B=MAP) · Hick–Hyman, *Lei de Hick* · Fitts, *Lei de Fitts* ·
Nielsen, *Lei de Jakob* e heurísticas de usabilidade (NN/g) · Von Restorff, *isolation effect* ·
Nunes & Drèze, *endowed progress effect* · Hull/Kivetz, *goal-gradient* · Deci & Ryan, *Self-Determination
Theory* · Kurosu & Kashimura, *aesthetic-usability effect* · Zeigarnik, *efeito Zeigarnik* · princípios da
Gestalt · Tesler, *lei da conservação da complexidade*.
