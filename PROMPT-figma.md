# Prompt para a sessão com Figma conectado

> Cole o bloco abaixo na outra sessão do Claude (a que está com o MCP do Figma ativo).
> Ela trabalha no mesmo projeto, então consegue ler os arquivos e o código React como referência.

---

Você tem o MCP do Figma conectado. Quero criar um arquivo de design no Figma a partir de um projeto
que já existe nesta pasta. **Regra inegociável: não pode aparecer em lugar nenhum (nome do arquivo,
páginas, camadas, descrições, comentários) qualquer menção a IA, Claude ou "gerado por IA". O trabalho
é de autoria do Francis.**

Antes de gerar, leia para ter contexto e fidelidade visual:
- `BRIEF-design.md` — tese, tokens de marca e estados de cada tela
- `DECISOES.md` — raciocínio de design (vira a página "Decisões")
- `src/index.css` — design tokens reais (cores, raios, sombras, tipografia)
- `src/screens/Habito.jsx` + `src/screens/habito.css` — tela Hábito e seus 4 estados
- `src/screens/Leitura.jsx` + `src/screens/leitura.css` — tela Leitura e seus 3 estados
- Se quiser conferir o render: rode `npm run dev` e veja em http://localhost:5173

Crie **um arquivo Figma** chamado **`the news — App Redesign`**, com permissão de
visualização para compartilhar, organizado em páginas:

1. **Cover** — capa do case: título "the news — App Redesign · Hábito & Leitura" e a tese em uma linha
   ("ler a edição passa a avançar a sequência automaticamente").
2. **Tokens / Estilos** — estilos de cor (amarelo `#F9D029`, preto `#1D1D1D`, branco, cinzas
   `#6B7280`/`#9CA3AF`/`#D1D5DB`, verde `#16A34A`), estilos de texto (display sans + corpo serif Georgia),
   e os componentes base (StreakCard, CategoryTag, BottomNav, CTA, ReadingProgressBar, RewardCard).
3. **Hábito** — frames mobile 390×844 nos 4 estados: Novo usuário · Sequência ativa · Dia concluído · Em risco.
4. **Leitura** — frames mobile 390×844 nos 3 estados: Abertura · Lendo · Fim (recompensa).
5. **Decisões** — transcreva as seções principais de `DECISOES.md` numa página de texto legível.

Replique fielmente o layout, espaçamentos e cores do código React (ele é a fonte de verdade visual).
Use componentes e Auto Layout onde fizer sentido, para o arquivo ficar organizado e editável.
Ao final, me devolva o **link de compartilhamento** do arquivo.

---
