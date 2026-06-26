import './decisoes.css'

export default function Decisoes() {
  return (
    <div className="doc">
      <div className="doc__lead">
        <h2 style={{ marginBottom: 10 }}>Decisões de design</h2>
        <p>
          Telas redesenhadas: <strong>Hábito</strong> (sequência/retenção) e <strong>Leitura</strong> da edição.
          Este documento explica o <em>raciocínio</em> por trás de cada escolha, ancorado em teoria de design de
          produto, ciência comportamental e UX. A premissa que guiou tudo:
        </p>
        <div className="doc__thesis">
          Decisão de design boa é decisão com hipótese — e hipótese tem teoria por trás.
        </div>
      </div>

      {/* 0 — Diagnóstico */}
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
        <p>
          A escolha de <em>quais</em> telas redesenhar já é uma decisão analítica: não fui ao mais vistoso
          (o Bolão da Copa, sazonal), fui à <strong>alavanca de retenção diária</strong> (Hábito) e ao
          <strong> lugar onde o usuário passa mais tempo</strong> (Leitura) — os dois pontos onde 1% de melhoria
          se capitaliza todos os dias.
        </p>
      </section>

      {/* 1 — Por que essas telas */}
      <section className="doc__section">
        <h2><span className="doc__num">1</span> Por que essas telas — e qual o impacto</h2>
        <h3>Retenção é o que importa numa newsletter diária</h3>
        <p>
          Para um produto de <strong>uso diário</strong>, a métrica que governa o crescimento não é aquisição, é
          <strong> retenção</strong> — o retorno no dia seguinte (D1) e na semana (D7). Numa newsletter, o hábito
          <em> é</em> o produto. Redesenhar a tela que <strong>fabrica o hábito</strong> e a tela que
          <strong> entrega o valor</strong> ataca as duas pontas do ciclo de retorno.
        </p>
        <h3>Hábito — o Hook Model aplicado</h3>
        <p>Usei o <strong>Hook Model</strong> (Nir Eyal, <em>Hooked</em>, 2014) como lente:</p>
        <table className="doc__table">
          <thead><tr><th>Etapa</th><th>Estava quebrado</th><th>O redesign faz</th></tr></thead>
          <tbody>
            <tr><td>Gatilho</td><td>Notificação externa genérica</td><td>A sequência ativa vira gatilho interno (“não quero perder 12 dias”)</td></tr>
            <tr><td>Ação</td><td>Tocar num banner manual</td><td>A ação vira simplesmente <strong>ler</strong></td></tr>
            <tr><td>Recompensa</td><td>Invisível</td><td>Card de conclusão com a streak +1 no fim da edição</td></tr>
            <tr><td>Investimento</td><td>Escondido</td><td>A streak crescente é capital que não se quer perder</td></tr>
          </tbody>
        </table>
        <h3>Impacto esperado (hipóteses testáveis)</h3>
        <ul>
          <li><strong>Acoplar leitura → streak</strong> deve levar a razão “dias registrados / dias lidos” para perto de 100%. <em>Métrica:</em> % de leituras completas que registram streak.</li>
          <li><strong>Onboarding sem muro de zeros</strong> deve melhorar a ativação. <em>Métrica:</em> D1 do novo usuário.</li>
          <li><strong>Momento de recompensa (peak-end)</strong> deve elevar a intenção de retorno. <em>Métrica:</em> D1/D7 e NPS pós-leitura.</li>
        </ul>
      </section>

      {/* 2 — Cor, hierarquia, tipografia */}
      <section className="doc__section">
        <h2><span className="doc__num">2</span> Cor, hierarquia e tipografia</h2>

        <h3>Cor — o amarelo como única cor de marca</h3>
        <p>
          Extraí os tokens reais do portal: amarelo <strong>#F9D029</strong>, preto #1D1D1D, branco e uma escala de
          cinzas. A decisão central foi <strong>reservar o amarelo para significado</strong>, não decoração —
          apoiada no <strong>Efeito Von Restorff</strong> (um elemento que se distingue é mais lembrado). Se tudo é
          amarelo, nada se destaca; então ele marca <strong>a sequência, o progresso e os CTAs</strong>.
        </p>
        <p>
          <strong>Correção do laranja off-brand:</strong> o gradiente laranja da streak não pertence à paleta. Troquei
          pelo amarelo da marca, usando laranja/vermelho só como acento da chama. Isso atende ao critério de
          <strong> aderência à marca</strong> e à <strong>Lei de Jakob</strong> (o usuário traz expectativas de
          outros contextos — honrá-las reduz carga cognitiva). No estado <strong>“em risco”</strong>, inverto para
          fundo escuro: contraste a serviço da <em>hierarquia emocional</em>, não estética.
        </p>

        <h3>Hierarquia</h3>
        <ul>
          <li><strong>Streak como herói</strong> — estava no 3º bloco; promovi ao topo, grande, com a chama. <em>Hierarquia visual + Lei de Fitts:</em> o que importa é o maior e o primeiro.</li>
          <li><strong>Um único CTA</strong> — <em>Lei de Hick</em> (menos opções, decisão mais rápida) + <em>Modelo de Fogg</em> (B=MAP: motivação + habilidade + gatilho no mesmo lugar).</li>
          <li><strong>Progressive disclosure</strong> — calendário e métricas detalhadas foram rebaixados, não removidos. <em>Lei de Tesler:</em> a complexidade é conservada; o design decide quem a carrega.</li>
          <li><strong>Agrupamento (Gestalt)</strong> — proximidade e região comum transformam um painel denso em unidades legíveis.</li>
        </ul>

        <h3>Tipografia — dois tipos, dois trabalhos</h3>
        <p>
          A marca usa <strong>Helvetica Now Display</strong> (sans) para UI e <strong>Georgia Pro</strong> (serif)
          para texto editorial. Mantive a divisão funcional: <strong>sans</strong> para títulos, números e interface;
          <strong> serif (Georgia)</strong> para o <strong>corpo da matéria</strong>, porque serifas guiam o olho na
          leitura longa e dão voz jornalística (Georgia foi desenhada por Matthew Carter para legibilidade em tela).
          Quando o conteúdo vira serif, o cérebro entra em <em>modo leitura</em>. Corpo a 18px e entrelinha ~1.6 para
          não cansar — a leitura é o produto.
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

      {/* 3 — Tensão */}
      <section className="doc__section">
        <h2><span className="doc__num">3</span> A tensão mais difícil</h2>
        <div className="doc__callout doc__callout--warn">
          Engajamento honesto vs. pressão manipulativa (dark patterns).
        </div>
        <p>
          Streaks exploram <strong>aversão à perda</strong>: na <strong>Teoria do Prospecto</strong> (Kahneman &amp;
          Tversky, 1979), perdas pesam ~<strong>2×</strong> mais que ganhos. É por isso que “não perca seus 12 dias”
          funciona — e também a porta de entrada para <strong>dark patterns</strong>: ansiedade fabricada, FOMO,
          a sensação de estar preso. A pergunta: <em>como usar a aversão à perda para ajudar o hábito sem chantagear?</em>
        </p>
        <p>Como resolvi, em decisões concretas:</p>
        <ul>
          <li><strong>A recompensa vem de ler, não de tocar.</strong> A vitória é consequência de ter consumido valor — desloca o eixo de <em>compulsão</em> para <em>competência</em>.</li>
          <li><strong>Reforço competência e autonomia.</strong> <em>Self-Determination Theory</em> (Deci &amp; Ryan): motivação durável vem de autonomia, competência e pertencimento — não de pressão. O copy celebra o progresso; o estado “em risco” <strong>informa</strong>, não persegue.</li>
          <li><strong>Onboarding como convite.</strong> <em>Endowed Progress Effect</em> (Nunes &amp; Drèze, 2006): as pessoas se engajam mais quando sentem que já começaram — por isso um caminho iniciado, não um vazio.</li>
          <li><strong>Recompensa no pico e no fim.</strong> <em>Peak-End Rule</em> (Kahneman): concentro a celebração no fim da edição, sem poluir a leitura no meio.</li>
        </ul>
        <div className="doc__callout doc__callout--ok">
          O resultado é uma streak que puxa pelo valor (li algo bom, mantive o ritmo) em vez de empurrar pelo medo —
          o caminho fácil sobe métrica no curto prazo e corrói confiança no longo.
        </div>
        <p>
          Tensões secundárias: densidade vs. foco (resolvida com progressive disclosure); interromper vs. fluidez
          (registro automático + recompensa só no fim); e o <strong>Efeito Zeigarnik</strong> — a barra de progresso
          “quase cheia” cria a pequena tensão que leva a concluir, e concluir é o que credita a streak.
        </p>
      </section>

      {/* 4 — Autocrítica */}
      <section className="doc__section">
        <h2><span className="doc__num">4</span> Autocrítica — com mais 1 dia</h2>
        <h3>Limitações assumidas</h3>
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
          <strong> Deci &amp; Ryan</strong>, Self-Determination Theory · <strong>Kurosu &amp; Kashimura</strong>,
          aesthetic-usability · <strong>Zeigarnik</strong>, efeito Zeigarnik · princípios da <strong>Gestalt</strong> ·
          <strong> Tesler</strong>, conservação da complexidade.
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
