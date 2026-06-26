import { useState } from 'react'
import Onboarding from './screens/Onboarding.jsx'
import Habito from './screens/Habito.jsx'
import Leitura from './screens/Leitura.jsx'
import Decisoes from './Decisoes.jsx'
import { Logo } from './Logo.jsx'
import { SCREENS } from './content.js'

const DEFAULT_STATE = { onboarding: 'welcome', habito: 'active', leitura: 'topo' }

const LINKS = {
  figma: 'https://www.figma.com/design/QG9ApbsQ2SJmAJdmOQMW7b',
  repo: 'https://github.com/Ftarganski/thenews-app-redesign',
}

export default function App() {
  const [view, setView] = useState('proto')
  const [screen, setScreen] = useState('onboarding')
  const [state, setState] = useState('welcome')

  const go = (sc, st) => { setScreen(sc); setState(st) }
  const current = SCREENS[screen]
  const activeState = current.states.find(s => s.id === state) ?? current.states[0]

  // fluxo conectado: onboarding → 1ª leitura; CTA de ler → Leitura; recompensa → Hábito (done)
  const onRead = () => go('leitura', 'lendo')
  const onFirstRead = () => go('leitura', 'topo')
  const onHabits = () => go('habito', 'done')

  return (
    <div className="shell">
      <header className="shell__head">
        <Logo size={22} className="shell__brandmark" />
        <h1 className="shell__title">App Redesign — Onboarding · Hábito · Leitura</h1>
        <p className="shell__sub">
          Telas redesenhadas para fechar o loop de retenção: <strong>ler a edição passa a avançar a sequência automaticamente</strong>.
          O <strong>Onboarding</strong> entra como bônus, completando o funil de quem chega até a primeira leitura.
          Cada estado vem com o problema que resolve e os princípios de CX e design que sustentam a decisão.
        </p>
        <div className="links">
          <a className="link" href={LINKS.figma} target="_blank" rel="noopener noreferrer">
            Design no Figma <span aria-hidden>↗</span>
          </a>
          <a className="link" href={LINKS.repo} target="_blank" rel="noopener noreferrer">
            Código no GitHub <span aria-hidden>↗</span>
          </a>
        </div>

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
          {screen === 'onboarding'
            ? <Onboarding variant={state} onStep={setState} onRead={onFirstRead} />
            : screen === 'habito'
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

      <footer className="copyright">
        © 2026 <strong>Francis Targanski</strong> — Todos os direitos reservados.
        Design e código de autoria do autor; uso, reprodução ou distribuição por terceiros não autorizados.
        <span className="copyright__note">Redesign conceitual para fins de avaliação. Marcas do “the news” pertencem aos seus titulares.</span>
      </footer>
    </div>
  )
}
