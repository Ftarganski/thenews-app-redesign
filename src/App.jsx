import { useState } from 'react'
import Habito from './screens/Habito.jsx'
import Leitura from './screens/Leitura.jsx'

const SCREENS = {
  habito: {
    label: 'Hábito',
    states: [
      { id: 'empty',  name: 'Novo usuário', note: 'Em vez de um muro de zeros, um convite. A sequência é enquadrada como algo que começa hoje — com os 3 passos do loop ler→registrar→voltar.' },
      { id: 'active', name: 'Sequência ativa', note: 'A streak vira herói: número grande, chama e o amarelo da marca (não o laranja genérico). Um único CTA conecta direto à leitura.' },
      { id: 'done',   name: 'Dia concluído', note: 'Depois de ler, o card confirma a manutenção da sequência. O CTA vira estado de sucesso — sem ação manual.' },
      { id: 'risk',   name: 'Em risco', note: 'Inverte o contraste (fundo escuro) e mostra um timer. Urgência sem alarme — a perda iminente é o gatilho mais forte de retorno.' },
    ],
  },
  leitura: {
    label: 'Leitura',
    states: [
      { id: 'topo',  name: 'Abertura', note: 'Header enxuto (de 5 ícones para o essencial) + barra de progresso proeminente + tempo de leitura. A mini-chama mantém a sequência presente.' },
      { id: 'lendo', name: 'Lendo', note: 'O corpo passa a serif (Georgia) para leitura longa. Uma faixa discreta mostra que a leitura registra sozinha conforme você avança — adeus banner laranja manual.' },
      { id: 'fim',   name: 'Fim · recompensa', note: 'O momento de pagamento: terminar a edição fecha o loop e incrementa a streak (+1), conectando de volta à tela de Hábito.' },
    ],
  },
}

export default function App() {
  const [screen, setScreen] = useState('habito')
  const [state, setState] = useState('active')

  const go = (sc, st) => { setScreen(sc); setState(st) }
  const current = SCREENS[screen]
  const activeState = current.states.find(s => s.id === state) ?? current.states[0]

  // fluxo conectado: CTA de ler → Leitura; recompensa → Hábito (done)
  const onRead = () => go('leitura', 'lendo')
  const onHabits = () => go('habito', 'done')

  return (
    <div className="shell">
      <header className="shell__head">
        <div className="shell__brandmark"><span className="shell__dot" /> the news</div>
        <h1 className="shell__title">App Redesign — Hábito & Leitura</h1>
        <p className="shell__sub">
          Duas telas redesenhadas para fechar o loop de retenção: <strong>ler a edição passa a avançar a sequência automaticamente</strong>.
          Navegue pelos estados ou siga o fluxo tocando nos botões dentro do app.
        </p>
      </header>

      <div className="controls">
        <div className="seg">
          {Object.entries(SCREENS).map(([id, s]) => (
            <button key={id} data-active={screen === id}
              onClick={() => go(id, SCREENS[id].states.find(x => x.id === (id === 'habito' ? 'active' : 'topo'))?.id ?? SCREENS[id].states[0].id)}>
              {s.label}
            </button>
          ))}
        </div>
        <div className="chips">
          {current.states.map(s => (
            <button key={s.id} className="chip" data-active={state === s.id} onClick={() => setState(s.id)}>
              {s.name}
            </button>
          ))}
        </div>
      </div>

      <div className="stage">
        <div className="phone">
          <div className="phone__notch" />
          {screen === 'habito'
            ? <Habito variant={state} onRead={onRead} />
            : <Leitura variant={state} onHabits={onHabits} />}
        </div>
        <aside className="note">
          <h4>{current.label} · {activeState.name}</h4>
          <p>{activeState.note}</p>
        </aside>
      </div>
    </div>
  )
}
