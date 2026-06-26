<div align="center">

<img src="public/favicon.svg" width="64" alt="the news" />

# the news — App Redesign

### Redesign do app **the news** — **Hábito** (sequência/retenção) e **Leitura** da edição, + **Onboarding** como bônus

[![Live Demo](https://img.shields.io/badge/▶_Ver_no_ar-thenews--app--redesign.vercel.app-F9D029?style=for-the-badge&labelColor=1D1D1D)](https://thenews-app-redesign.vercel.app/)

![React](https://img.shields.io/badge/React-18-1D1D1D?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-1D1D1D?style=flat-square&logo=vite)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-1D1D1D?style=flat-square&logo=vercel)
![Responsive](https://img.shields.io/badge/Mobile-responsivo-16A34A?style=flat-square)

</div>

---

> [!IMPORTANT]
> **A tese em uma linha:** a sequência (motor de retenção) estava desacoplada da leitura (ação principal).
> Este redesign **fecha o loop** — *ler a edição passa a avançar a sequência automaticamente*, com um momento
> de recompensa que alimenta o hábito.

O **the news** é a maior newsletter de notícias do Brasil (+3M assinantes), com um app de engajamento diário.
Este projeto redesenha as duas telas de **maior impacto em retenção e clareza**, com protótipo navegável,
implementação React responsiva e documentação de decisões fundamentada em teoria de design e CX.

**🔗 App no ar:** https://thenews-app-redesign.vercel.app/
&nbsp;•&nbsp; abas **Protótipo** (telas + estados) e **Decisões** (raciocínio completo).

---

## 🔎 Diagnóstico — onde estava o vazamento

Explorando o app, dois pontos minavam a retenção:

| # | Problema encontrado | Tela |
|:-:|---|---|
| 1 | Ler a edição **não** avançava a streak — era preciso lembrar de tocar num **banner laranja** manual no meio do texto | Leitura |
| 2 | O novo usuário era recebido por um **muro de zeros** (`0 dias`, `0%`, `0/0`) num **gradiente laranja off-brand** | Hábito |

A escolha de *quais* telas redesenhar já é parte da análise: evitei o óbvio/sazonal (Bolão da Copa) e fui à
**alavanca de retenção diária** (Hábito) e ao **lugar onde o usuário passa mais tempo** (Leitura) — onde 1% de
melhoria se capitaliza todos os dias.

---

## 📱 As telas e seus estados

<table>
<tr>
<th width="50%">🔥 Hábito — o motor de retenção</th>
<th width="50%">📖 Leitura — onde o valor acontece</th>
</tr>
<tr>
<td valign="top">

A streak vira **herói**: número grande, chama e o amarelo da marca. Um único CTA conecta direto à leitura.

- **Novo usuário** — convite com 3 passos (sem muro de zeros)
- **Sequência ativa** — streak no topo + CTA "Ler edição"
- **Dia concluído** — leitura registrada, sequência mantida
- **Em risco** — fundo escuro + timer, urgência sem alarme

</td>
<td valign="top">

Header enxuto, progresso proeminente e **registro automático** ao ler. Adeus banner manual.

- **Abertura** — capa da edição, tempo de leitura, mini-chama
- **Lendo** — corpo serif (Georgia), registro automático
- **Fim · recompensa** — card de conclusão com streak **+1**

</td>
</tr>
</table>

> No protótipo, os botões dentro do app seguem o **fluxo conectado**: CTA "Ler edição" → Leitura → recompensa → volta ao Hábito.

### ➕ Bônus — Onboarding (4 estados)

Uma terceira tela como PLUS, que **completa o funil pela frente**: de quem chega até a primeira leitura — o *aha moment* que inicia a sequência.

- **Boas-vindas** — abertura de marca + proposta de valor única
- **O hábito** — enquadra a expectativa (edição às 6:06 + sequência) antes de começar
- **Interesses** — personalização rápida (micro-investimento gera propriedade)
- **Pronto** — opt-in de notificação + CTA direto para a 1ª edição

> Narrativa completa: `Onboarding (nasce o hábito) → Hábito (mantém) → Leitura (entrega valor e credita a streak)`.

---

## 🧠 Decisões de design — com a teoria por trás

> A documentação completa (diagnóstico → impacto → tensão → autocrítica → referências) está na
> **[aba Decisões do app](https://thenews-app-redesign.vercel.app/)**. Resumo das lentes usadas:

| Decisão | Princípio | Autor |
|---|---|---|
| Streak acoplada à leitura (loop fechado) | **Hook Model** (gatilho→ação→recompensa→investimento) | Eyal |
| Recompensa concentrada no fim da edição | **Peak-End Rule** | Kahneman |
| Estado "em risco" com timer | **Aversão à perda** (perdas pesam ~2×) | Kahneman & Tversky |
| Onboarding como começo, não vazio | **Endowed Progress Effect** | Nunes & Drèze |
| Streak como herói + um único CTA | **Lei de Fitts** · **Lei de Hick** · **B=MAP** | Fitts · Hick · Fogg |
| Amarelo reservado ao que importa | **Efeito de isolamento (Von Restorff)** | von Restorff |
| Calendário/métricas rebaixados | **Progressive disclosure / Lei de Tesler** | Tesler |
| Corpo da matéria em serif | **Legibilidade editorial em leitura longa** | Carter (Georgia) |
| Copy que celebra, não pressiona | **Self-Determination Theory** | Deci & Ryan |
| Barra de progresso que puxa a conclusão | **Efeito Zeigarnik** | Zeigarnik |

### A tensão mais difícil
**Engajamento honesto × pressão manipulativa (dark patterns).** Streaks funcionam pela aversão à perda — a mesma
força que vira chantagem. Resolvi deslocando o eixo de *compulsão* para *competência*: a recompensa vem de **ler**
(consumir valor), não de executar um ritual; o "em risco" **informa**, não persegue.

---

## 🎨 Identidade visual (tokens reais da marca)

| | Token | Uso |
|---|---|---|
| 🟡 | `#F9D029` | Amarelo de marca — sequência, progresso, CTAs |
| ⚫ | `#1D1D1D` | Tinta / texto / fundos de alto contraste |
| ⚪ | `#FFFFFF` · `#F6F6F4` | Papel / base |
| 🟢 | `#16A34A` | Sucesso / "dia perfeito" |

**Tipografia:** **Inter** (UI, display) — substituto web da Helvetica Now da marca — + **Georgia** (corpo
editorial serif). **Logo** recriado em vetor (círculo com gradiente amarelo→laranja + cauda).

---

## 🛠️ Stack & estrutura

**React 18 + Vite 5**, sem bibliotecas de UI — **design system próprio** (tokens, componentes e ícones SVG).

```
src/
├── App.jsx            # Showcase: toggle Protótipo/Decisões, navegação de estados
├── content.js         # Conteúdo das explicações (problema/decisão/princípios)
├── Decisoes.jsx       # Página de decisões (documento completo)
├── Logo.jsx           # Marca the news em vetor
├── icons.jsx          # Ícones SVG
├── index.css          # Design tokens + shell + phone frame
├── components/
│   └── Chrome.jsx     # Status bar + bottom nav
└── screens/
    ├── Habito.jsx     # Tela Hábito (4 estados)
    └── Leitura.jsx    # Tela Leitura (3 estados)
```

### Rodar localmente

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # build de produção em dist/
```

---

## ✅ Mapeamento dos entregáveis do case

| Entregável | Status |
|---|:-:|
| Telas redesenhadas com estados principais (mín. 2) | ✅ **3 telas** |
| **PLUS:** Onboarding (funil de ativação) | ✅ |
| Documento de decisões (3 perguntas + autocrítica) | ✅ [aba Decisões](https://thenews-app-redesign.vercel.app/) |
| **Bônus:** implementação React responsiva | ✅ |
| **Bônus:** deploy com link público | ✅ [Vercel](https://thenews-app-redesign.vercel.app/) |
| Arquivo de design (Figma) | ⏳ em andamento |

---

## 🔭 Autocrítica (resumo)

Com mais 1 dia: usar a **fonte de marca real** (Helvetica Now), testar **conteúdo verdadeiro** sob estresse de
hierarquia, definir a política de **streak freeze** (não punir deslizes), e rodar **A/B no momento de recompensa**
e no timer de "em risco". A pergunta em aberto: a streak mede *presença* — o próximo passo é premiar **engajamento
real** (tempo de leitura, scroll-depth, áudio), não só o check diário. Detalhes na aba **Decisões**.

---

## ⚖️ Direitos autorais

> **© 2026 Francis Targanski — Todos os direitos reservados.**
> O design (telas, layout, sistema de componentes) e o código são de autoria exclusiva de **Francis Targanski**.
> É **vedado a terceiros** usar, copiar, reproduzir, modificar, distribuir ou criar obras derivadas, no todo ou em
> parte, sem autorização prévia e expressa por escrito do autor. Ver [`LICENSE`](LICENSE).
>
> Redesign **conceitual**, produzido para fins de avaliação em processo seletivo. Marcas, nomes e elementos de
> identidade do **the news** pertencem aos seus respectivos titulares e são referenciados apenas para demonstração,
> sem vínculo oficial.
