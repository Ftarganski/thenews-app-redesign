# the news — App Redesign

Redesign de duas telas do app **the news**: **Hábito** (sequência/retenção) e **Leitura** da edição.

## Tese

A sequência (motor de retenção) estava desconectada da leitura (ação principal): ler a edição
não avançava a streak — era preciso lembrar de tocar num banner manual. Este redesign **fecha o loop**:
ler a edição passa a registrar a leitura automaticamente, com um momento de recompensa que alimenta a sequência.

## Telas e estados

- **Hábito:** novo usuário · sequência ativa · dia concluído · em risco
- **Leitura:** abertura · lendo · fim (recompensa)

Toque nos botões dentro do protótipo para seguir o fluxo conectado entre as telas.

## Stack

React + Vite. Sem dependências de UI — design system próprio (tokens de marca, componentes).

## Rodar localmente

```bash
npm install
npm run dev
```

Build de produção: `npm run build` (saída em `dist/`).

## Marca

- Amarelo `#F9D029` · preto `#1D1D1D` · cinzas
- Tipografia: Inter (UI) + Georgia (corpo editorial)
