# Brief de Design — Redesign App the news

> Documento para alimentar geração de telas (Figma / Claude Designs).
> Case: Processo Seletivo Dev Front-end & Design — the news.

---

## 1. Contexto e objetivo

O **the news** é a maior newsletter do Brasil (+3M assinantes). O app tem funcionalidades de
engajamento diário: **Hábito** (streak de leitura), **leitura de edições**, **Bolão da Copa**, livros e social.

Vamos redesenhar **2 telas** com maior impacto em retenção/clareza:
1. **Hábito** (tela de streak) — motor de retenção.
2. **Leitura da edição** — coração do produto.

### Tese central (o porquê)
A **streak está desconectada da leitura**. O usuário lê a edição inteira, mas a sequência só avança
se ele lembrar de tocar num banner laranja ("JÁ REGISTROU SUA LEITURA HOJE?") no meio do texto.
E a tela de Hábito recebe o novo usuário com um muro de zeros (`0 dias`, `0%`, `0/0`) num visual
laranja genérico que nem usa o amarelo da marca. Dois vazamentos de retenção claros.

**Direção:** terminar a edição **registra a leitura automaticamente** e dá um momento de recompensa
que alimenta a streak. A tela de Hábito passa a liderar pela emoção (a chama), corrige o estado
inicial e volta a ser inequivocamente "the news".

---

## 2. Marca — design tokens (extraídos do portal thenews.com.br)

**Cores**
| Token | Hex | Uso |
|---|---|---|
| Amarelo de marca | `#F9D029` | Cor de assinatura: tags, destaques, chama da streak, CTAs |
| Preto | `#1D1D1D` / `#000000` | Texto, fundos hero |
| Branco | `#FFFFFF` | Base |
| Cinza texto | `#6B7280` | Metadados, timestamps |
| Cinza médio | `#9CA3AF` | Ícones inativos |
| Cinza divisor | `#D1D5DB` / `#E5E7EB` | Linhas, bordas |
| Verde sucesso | `~#16A34A` | "Dia Perfeito" / confirmações |

> ⚠️ O app atual usa um **gradiente laranja** na streak que NÃO é da marca. Substituir pelo amarelo `#F9D029`
> (com preto para contraste), reservando laranja/vermelho só como acento da "chama" se necessário.

**Tipografia**
- **Helvetica Now Display** — títulos, números, UI (pesos: Bold/Black para títulos e números grandes).
- **Georgia Pro** (serif) — corpo de matéria / leitura longa (melhora legibilidade editorial).
- Fallback: system-ui, -apple-system, sans-serif.

**Linguagem visual:** editorial, alto contraste, P&B jornalístico, amarelo como única cor de marca.
Tags de categoria em **texto amarelo** (`MUNDO`, `NEGÓCIOS`, `BRASIL`) e marca-texto amarelo em destaques.

---

## 3. Especificações gerais (mobile)

- Frames: **iPhone 390 × 844** (base). Considerar safe areas (status bar + home indicator).
- Bottom tab bar fixa: **edição · hábitos · copa · livros · mais** (ícone ativo em amarelo).
- Grid: padding lateral 20–24px. Cantos de card: 16–20px. Toque mínimo 44px.

---

## 4. TELA 1 — Hábito (streak)

### Estado atual (diagnóstico)
- Streak ("Sequência Atual") aparece só como **3º bloco**, abaixo de "Hábitos de Hoje" e gráfico semanal.
- **Empty state hostil:** tudo zero (`0 dias`, `0%`, `0/0 completados`, gráfico vazio).
- Visual **laranja genérico** de habit-tracker — descolado da marca.
- Excesso de métricas (Dias Ativos, Dias Perfeitos, Checks, Calendário) — parece dashboard, não motivador.
- A relação **ler a edição → manter streak** não é visível aqui.

### Direção de redesign
- **Streak como herói:** chama + número grande no topo, em amarelo de marca. Emoção antes de dados.
- **CTA único e claro:** "Ler edição de hoje" conecta diretamente leitura → streak.
- **Empty state acolhedor:** em vez de zeros, um onboarding motivacional ("Comece sua sequência hoje").
- **Hierarquia:** 1) streak atual → 2) ação do dia → 3) progresso semanal simplificado → 4) calendário/recorde (secundário).
- Calendário on-brand: dia preenchido = ponto/chama amarela; hoje = contorno amarelo.

### Estados a entregar
1. **Empty / novo usuário** — 0 dias, foco em iniciar (sem muro de zeros).
2. **Streak ativa** — ex.: 12 dias, dia de hoje ainda não lido (CTA "Ler edição de hoje").
3. **Dia concluído** — leitura registrada hoje, streak +1, recompensa visível.
4. *(opcional)* **Streak em risco** — "Não perca seus 12 dias — leia até meia-noite".

---

## 5. TELA 2 — Leitura da edição

### Estado atual (diagnóstico)
- **Header poluído:** logo + 5 ícones (áudio, ❤, comentários 68, termômetro, config) + barra de progresso fina + chevron.
- **Barra de progresso de leitura** existe mas é discreta.
- **Banner laranja interrompe a leitura** ("JÁ REGISTROU SUA LEITURA HOJE? CLIQUE AQUI") — registrar a streak é
  ação manual desconectada de realmente ler.
- Corpo em sans; parágrafos de abertura centralizados e longos.
- Sem estimativa de tempo de leitura nem **momento de fim de edição** que recompense e alimente a streak.

### Direção de redesign
- **Header enxuto:** logo + barra de progresso de leitura proeminente + 1–2 ações essenciais (áudio, menu). Resto em "mais".
- **Registro automático:** ao concluir a leitura, a streak avança sozinha — sem banner manual.
- **Fim de edição = recompensa:** card de conclusão ("Edição concluída! Sequência: 13 dias 🔥") que liga ao Hábito.
- **Tipografia editorial:** título Helvetica Now Display Bold; corpo Georgia Pro; tag de categoria amarela.
- Estimativa de tempo de leitura no topo ("5 min de leitura").
- Manter recursos de marca: marca-texto amarelo em "Quick Takes", tag de categoria.

### Estados a entregar
1. **Topo da edição** — capa/intro com header limpo, tempo de leitura, tag.
2. **Lendo (meio)** — corpo Georgia Pro, imagem com legenda, barra de progresso avançando.
3. **Fim da edição** — card de recompensa + streak +1 + próxima ação (compartilhar / próxima seção).

---

## 6. Componentes a organizar (para o arquivo de design)

- **StreakCard** (chama + nº dias) — variantes: ativa / em risco / concluída / empty.
- **HabitDayCell** (calendário) — estados: vazio / preenchido / hoje / perfeito.
- **CategoryTag** (texto amarelo).
- **ReadingProgressBar** (header).
- **BottomTabBar** (5 itens, ativo amarelo).
- **EditionHeader** (logo + progresso + ações).
- **RewardCard** (fim de edição).
- **PrimaryCTA** (preto/amarelo).

---

## 7. Fluxo de navegação (conexão entre as telas)

`Hábito (streak, CTA "Ler edição")` → `Leitura (header limpo, progresso)` → `Fim da edição (recompensa +1)` → volta ao `Hábito` com streak incrementada.

Esse loop fechado é o argumento central do redesign: **ler é avançar a streak**, sem ação manual.
