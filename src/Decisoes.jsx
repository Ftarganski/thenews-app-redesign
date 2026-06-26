import './decisoes.css'

export default function Decisoes() {
  return (
    <div className="doc">
      <div className="doc__lead">
        <h2 style={{ marginBottom: 10 }}>Decisões de design</h2>
        <p>
          Telas redesenhadas: <strong>Hábito</strong> (sequência/retenção) e <strong>Leitura</strong> da edição,
          com <strong>Onboarding</strong> como bônus. Este documento responde, ponto a ponto, às perguntas do
          desafio — ancorando cada escolha em teoria de design de produto, ciência comportamental e UX.
          A premissa que guiou tudo:
        </p>
        <div className="doc__thesis">
          Decisão de design boa é decisão com hipótese — e hipótese tem teoria por trás.
        </div>
      </div>

      {/* Diagnóstico */}
      <section className="doc__section">
        <h2><span className="doc__num">0</span> Diagnóstico: onde estava o vazamento</h2>
        <p>
          Antes de redesenhar, o trabalho foi <em>entender o sistema</em>. Explorando o app, encontrei um
          desalinhamento estrutural entre as duas funcionalidades mais ligadas à retenção:
        </p>
        <div className="doc__callout doc__callout--warn">
          A sequência (o motor de retenção) estava desacoplada da leitura (a ação principal do produto).
        </div>
        <ul>
          <li>Na <strong>edição</strong>, um banner laranja gritava <em>“JÁ REGISTROU SUA LEITURA HOJE? CLIQUE AQUI E MANTENHA SUA SEQUÊNCIA!”</em> — ler a edição inteira <strong>não</strong> avançava a streak; era preciso lembrar de uma ação manual, separada, que interrompia a leitura.</li>
          <li>Na tela de <strong>Hábitos</strong>, o novo usuário era recebido por um <strong>muro de zeros</strong> (0 dias, 0%, 0/0, gráfico vazio) num <strong>gradiente laranja</strong> que sequer é a cor da marca.</li>
        </ul>
        <p>Tudo o que segue parte de uma única tese: <strong>fechar o loop — ler a edição é, por si só, avançar a sequência</strong> — e tornar a recompensa visível no momento certo.</p>
      </section>

      {/* ENTREGA 2 · PERGUNTA 1 */}
      <section className="doc__section">
        <h2><span className="doc__num">1</span> Por que essas telas — e qual o impacto</h2>
        <div className="doc__q">
          <span>Entrega 2 · Pergunta 1</span>
          <em>Por que essas telas e não outras? Qual o impacto que você acredita que elas teriam?</em>
        </div>
        <p>
          Para um produto de <strong>uso diário</strong>, a métrica que governa o crescimento não é aquisição, é
          <strong> retenção</strong> — o retorno no dia seguinte (D1) e na semana (D7). Numa newsletter, o hábito
          <em> é</em> o produto. Por isso avaliei cada funcionalidade pela pergunta “quanto isto move o retorno diário?”:
        </p>
        <table className="doc__table">
          <thead><tr><th>Tela candidata</th><th>Decisão</th><th>Por quê</th></tr></thead>
          <tbody>
            <tr><td>Hábito (streak)</td><td>✅ Escolhida</td><td>É a <strong>alavanca de retenção nº 1</strong> — o mecanismo que traz o usuário de volta todo dia.</td></tr>
            <tr><td>Leitura (edição)</td><td>✅ Escolhida</td><td>Onde o usuário <strong>passa mais tempo</strong> e onde o valor é entregue; é aqui que o loop deveria fechar.</td></tr>
            <tr><td>Onboarding</td><td>➕ Bônus</td><td>Completa o funil pela frente: leva da chegada à <strong>primeira leitura</strong> (ativação).</td></tr>
            <tr><td>Bolão da Copa</td><td>✕ Evitada</td><td><strong>Sazonal</strong> — impacto concentrado num período; menos defensável como “impacto real” perene.</td></tr>
            <tr><td>Perfil / Social</td><td>✕ Por ora</td><td>Diferencial interessante, mas <strong>secundário</strong> ao eixo de retenção diária.</td></tr>
          </tbody>
        </table>
        <p>
          A escolha já é parte da resposta: evitei o <em>óbvio vistoso</em> (o Bolão, que a Copa 2026 destaca) e fui
          aos <strong>dois pontos onde 1% de melhoria se capitaliza todos os dias</strong>. O Onboarding entra como
          bônus porque, sem ativação, não há hábito a reter — ele e as outras duas telas formam uma narrativa única.
        </p>

        <h3>Impacto esperado (hipóteses testáveis)</h3>
        <ul>
          <li><strong>Acoplar leitura → streak</strong> deve levar a razão “dias registrados / dias lidos” para perto de 100% (hoje há perda por esquecimento da ação manual). <em>Métrica:</em> % de leituras completas que registram streak.</li>
          <li><strong>Onboarding até a 1ª edição + Hábito sem muro de zeros</strong> devem melhorar a ativação. <em>Métrica:</em> D1 do novo usuário.</li>
          <li><strong>Momento de recompensa (peak-end)</strong> deve elevar a intenção de retorno. <em>Métrica:</em> D1/D7 e NPS pós-leitura.</li>
        </ul>
        <p className="doc__refs"><strong>Lentes:</strong> Hook Model (Eyal) — gatilho→ação→recompensa→investimento; o foco em D1/D7 como métrica-norte de produtos de hábito.</p>
      </section>

      {/* ENTREGA 2 · PERGUNTA 2 */}
      <section className="doc__section">
        <h2><span className="doc__num">2</span> Cor, hierarquia e tipografia</h2>
        <div className="doc__q">
          <span>Entrega 2 · Pergunta 2</span>
          <em>Por que essas escolhas de cor, hierarquia e tipografia?</em>
        </div>

        <h3>Cor — o amarelo como única cor de marca</h3>
        <p>
          Extraí os tokens reais do portal: amarelo <strong>#F9D029</strong>, preto #1D1D1D, branco e cinzas.
          A decisão central foi <strong>reservar o amarelo para significado</strong>, não decoração — apoiada no
          <strong> Efeito Von Restorff</strong> (um elemento que se distingue é mais lembrado). Se tudo é amarelo,
          nada se destaca; então ele marca <strong>a sequência, o progresso e os CTAs</strong>. Corrigi o
          <strong> gradiente laranja off-brand</strong> da streak (atende ao critério de <em>aderência à marca</em> e à
          <strong> Lei de Jakob</strong>: honrar a expectativa que o usuário traz do portal e dos e-mails). No estado
          <strong> “em risco”</strong>, inverto para fundo escuro — contraste a serviço da <em>hierarquia emocional</em>,
          não estética, e sem o vermelho de erro (que diria “algo deu errado”).
        </p>

        <h3>Hierarquia</h3>
        <ul>
          <li><strong>Streak como herói</strong> — estava no 3º bloco; promovi ao topo, grande, com a chama. <em>Hierarquia visual + Lei de Fitts:</em> o que importa é o maior e o primeiro.</li>
          <li><strong>Um único CTA</strong> por tela — <em>Lei de Hick</em> (menos opções, decisão mais rápida) + <em>Modelo de Fogg</em> (B=MAP: motivação + habilidade + gatilho convergindo no mesmo ponto).</li>
          <li><strong>Progressive disclosure</strong> — calendário e métricas detalhadas foram rebaixados, não removidos. <em>Lei de Tesler:</em> a complexidade é conservada; o design decide quem a carrega.</li>
          <li><strong>Agrupamento (Gestalt)</strong> — proximidade e região comum transformam um painel denso em unidades legíveis.</li>
        </ul>

        <h3>Tipografia — dois tipos, dois trabalhos</h3>
        <p>
          A marca usa <strong>Helvetica Now Display</strong> (sans) para UI e <strong>Georgia Pro</strong> (serif)
          para texto editorial. Mantive a divisão funcional: <strong>sans</strong> para títulos, números e interface;
          <strong> serif (Georgia)</strong> para o <strong>corpo da matéria</strong>, porque serifas guiam o olho na
          leitura longa e dão voz jornalística (Georgia foi desenhada por Matthew Carter para legibilidade em tela).
          Quando o conteúdo vira serif, o cérebro entra em <em>modo leitura</em>. Corpo a 18px e entrelinha ~1.6
          para não cansar — a leitura é o produto.
        </p>
        <div className="doc__callout">
          Nota de implementação: Helvetica Now é proprietária e sem web font livre; usei <strong>Inter</strong> como
          stand-in fiel (neogrotesca de alta legibilidade). No app nativo, usar a fonte de marca real.
        </div>
        <p>
          Por fim, o <strong>efeito estética–usabilidade</strong> (Kurosu &amp; Kashimura, 1995): interfaces
          percebidas como mais bonitas são percebidas como mais fáceis — e ganham tolerância a pequenas falhas.
        </p>
      </section>

      {/* ENTREGA 2 · PERGUNTA 3 */}
      <section className="doc__section">
        <h2><span className="doc__num">3</span> A tensão mais difícil</h2>
        <div className="doc__q">
          <span>Entrega 2 · Pergunta 3</span>
          <em>Qual era a tensão mais difícil de resolver e como você resolveu?</em>
        </div>
        <div className="doc__callout doc__callout--warn">
          Engajamento honesto vs. pressão manipulativa (dark patterns).
        </div>
        <p>
          Streaks exploram <strong>aversão à perda</strong>: na <strong>Teoria do Prospecto</strong> (Kahneman &amp;
          Tversky, 1979), perdas pesam ~<strong>2×</strong> mais que ganhos. É por isso que “não perca seus 12 dias”
          funciona — e também a porta de entrada para <strong>dark patterns</strong>: ansiedade fabricada, FOMO, a
          sensação de estar preso. A pergunta: <em>como usar a aversão à perda para ajudar o hábito sem chantagear?</em>
        </p>
        <p>Como resolvi, em decisões concretas:</p>
        <ul>
          <li><strong>A recompensa vem de ler, não de tocar.</strong> A vitória é consequência de ter consumido valor — desloca o eixo de <em>compulsão</em> para <em>competência</em>.</li>
          <li><strong>Reforço competência e autonomia.</strong> <em>Self-Determination Theory</em> (Deci &amp; Ryan): motivação durável vem de autonomia, competência e pertencimento — não de pressão. O “em risco” <strong>informa</strong> (“faltam 3h47”), não persegue.</li>
          <li><strong>Onboarding e Hábito como convite.</strong> <em>Endowed Progress Effect</em> (Nunes &amp; Drèze, 2006): as pessoas se engajam mais quando sentem que já começaram — por isso um caminho iniciado, não um vazio.</li>
          <li><strong>Recompensa no pico e no fim.</strong> <em>Peak-End Rule</em> (Kahneman): concentro a celebração no fim da edição, sem poluir a leitura no meio.</li>
        </ul>
        <div className="doc__callout doc__callout--ok">
          O resultado é uma streak que puxa pelo valor (li algo bom, mantive o ritmo) em vez de empurrar pelo medo —
          o caminho fácil sobe métrica no curto prazo e corrói confiança no longo.
        </div>
        <p>
          Tensões secundárias: densidade vs. foco (progressive disclosure); interromper vs. fluidez (registro
          automático + recompensa só no fim); e o <strong>Efeito Zeigarnik</strong> — a barra de progresso “quase
          cheia” cria a tensão que leva a concluir, e concluir é o que credita a streak.
        </p>
      </section>

      {/* ENTREGA 3 · AUTOCRÍTICA */}
      <section className="doc__section">
        <h2><span className="doc__num">4</span> Autocrítica</h2>
        <div className="doc__q">
          <span>Entrega 3 · Autocrítica</span>
          <em>O que você faria diferente com mais 1 dia? O que ficou aberto, o que não gostou, o que testaria a seguir?</em>
        </div>
        <h3>Limitações que assumo</h3>
        <ul>
          <li><strong>Substituição tipográfica.</strong> Inter no lugar da Helvetica Now real — bom proxy, mas a personalidade do display muda sutilmente.</li>
          <li><strong>Conteúdo simulado.</strong> Imagens e textos são placeholders; um teste real precisa de edições verdadeiras (longas e curtas) para estressar a hierarquia.</li>
          <li><strong>Estados de borda.</strong> Falta a política de “graça” (streak freeze) e o tratamento de fuso/viagem/leitura às 23h59 — não punir deslizes é coerente com competência &gt; punição.</li>
        </ul>
        <h3>O que eu testaria a seguir</h3>
        <ul>
          <li><strong>A/B no momento de recompensa</strong> (com/sem animação, com/sem compartilhar) medindo D1/D7.</li>
          <li><strong>O timer do “em risco”</strong> — aversão à perda é faca de dois gumes; medir se ajuda o retorno ou gera desinstalação, com teto de frequência.</li>
          <li><strong>Legibilidade</strong> — teste de leitura real (velocidade, compreensão, fadiga) serif vs. sans, em telas e idades diferentes.</li>
          <li><strong>Acessibilidade a fundo</strong> — leitor de tela, dynamic type, <em>prefers-reduced-motion</em> na animação do reward.</li>
        </ul>
        <h3>A pergunta que fica em aberto</h3>
        <p>
          A streak resolve retenção <em>de hábito</em> — mas não diz se o usuário retém <em>valor</em>. Alguém pode
          manter 60 dias “registrando leitura” sem de fato ler. O próximo passo seria distinguir <strong>presença</strong>
          de <strong>engajamento real</strong> (tempo de leitura, scroll-depth, áudio) e premiar o segundo. Caso
          contrário, otimizamos a métrica e perdemos o ponto.
        </p>
      </section>

      <section className="doc__section">
        <h3 style={{ marginTop: 0 }}>Referências (lentes usadas)</h3>
        <p className="doc__refs">
          <strong>Eyal</strong>, Hook Model · <strong>Kahneman &amp; Tversky</strong>, Prospect Theory ·
          <strong> Kahneman</strong>, peak-end rule · <strong>Fogg</strong>, Behavior Model (B=MAP) ·
          <strong> Hick–Hyman</strong>, Lei de Hick · <strong>Fitts</strong>, Lei de Fitts ·
          <strong> Nielsen</strong>, Lei de Jakob e heurísticas (NN/g) · <strong>Von Restorff</strong>, isolation effect ·
          <strong> Nunes &amp; Drèze</strong>, endowed progress · <strong>Hull / Kivetz</strong>, goal-gradient ·
          <strong> Gollwitzer</strong>, implementation intentions · <strong>Dai &amp; Milkman</strong>, fresh start effect ·
          <strong> Cialdini</strong>, commitment &amp; consistency · <strong>Deci &amp; Ryan</strong>, Self-Determination
          Theory · <strong>Kurosu &amp; Kashimura</strong>, aesthetic-usability · <strong>Zeigarnik</strong>,
          efeito Zeigarnik · princípios da <strong>Gestalt</strong> · <strong>Tesler</strong>, conservação da complexidade.
        </p>
      </section>

      <section className="doc__section">
        <h3 style={{ marginTop: 0 }}>Direitos autorais</h3>
        <p className="doc__refs">
          <strong>© 2026 Francis Targanski — Todos os direitos reservados.</strong> O design e o código são de
          autoria exclusiva do autor. É vedado a terceiros usar, copiar, reproduzir, modificar ou distribuir,
          no todo ou em parte, sem autorização prévia e expressa por escrito. Redesign conceitual produzido para
          fins de avaliação; marcas do “the news” pertencem aos seus respectivos titulares.
        </p>
      </section>
    </div>
  )
}
