import { useState } from 'react'
import Habito from './screens/Habito.jsx'
import Leitura from './screens/Leitura.jsx'
import Decisoes from './Decisoes.jsx'
import { SCREENS } from './content.js'

const DEFAULT_STATE = { habito: 'active', leitura: 'topo' }

export default function App() {
  const [view, setView] = useState('proto')
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
          Cada estado vem com o problema que resolve e os princípios de CX e design que sustentam a decisão.
        </p>
        <div className="viewtabs">
          <button data-active={view === 'proto'} onClick={() => setView('proto')}>Protótipo</button>
          <button data-active={view === 'decisoes'} onClick={() => setView('decisoes')}>Decisões</button>
        </div>
      </header>

      {view === 'decisoes' ? <Decisoes /> : (<>

      <div className="controls">
        <div className="seg">
          {Object.entries(SCREENS).map(([id, s]) => (
            <button key={id} data-active={screen === id}
              onClick={() => go(id, DEFAULT_STATE[id])}>
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

        <aside className="rationale">
          <div className="rationale__top">
            <span className="rationale__crumb">{current.label} · {activeState.name}</span>
            <p className="rationale__blurb">{current.blurb}</p>
          </div>

          <div className="rationale__block rationale__block--problem">
            <h5>O problema</h5>
            <p>{activeState.problem}</p>
          </div>

          <div className="rationale__block rationale__block--decision">
            <h5>A decisão</h5>
            <p>{activeState.decision}</p>
          </div>

          <div className="rationale__block">
            <h5>Princípios aplicados</h5>
            <ul className="principles">
              {activeState.principles.map(([name, why], i) => (
                <li key={i} className="principle">
                  <span className="principle__name">{name}</span>
                  <span className="principle__why">{why}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <footer className="shell__foot">
        Veja o raciocínio completo na aba <strong>Decisões</strong> acima.
      </footer>

      </>)}
    </div>
  )
}
