import { useState } from 'react'
import './onboarding.css'
import { StatusBar } from '../components/Chrome.jsx'
import { Logo, LogoMark } from '../Logo.jsx'
import { Flame, ArrowRight, Check, Headphone } from '../icons.jsx'

const ORDER = ['welcome', 'habit', 'interests', 'ready']
const TOPICS = ['Mundo', 'Brasil', 'Economia', 'Tecnologia', 'Negócios', 'Política', 'Esportes', 'Ciência', 'Cultura']

function Dots({ variant }) {
  const idx = ORDER.indexOf(variant)
  return (
    <div className="ob__dots">
      {ORDER.map((_, i) => <span key={i} className="ob__dot" data-on={i === idx} />)}
    </div>
  )
}

function Bell({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </svg>
  )
}

function Welcome() {
  return (
    <>
      <div className="ob__center">
        <div className="ob__welcomeLogo"><Logo size={44} gap={12} /></div>
        <h1 className="ob__title" style={{ textAlign: 'center' }}>As notícias que importam, em 5 minutos por dia.</h1>
        <p className="ob__text" style={{ textAlign: 'center' }}>Um resumo diário, gratuito e sem ruído, do jeito que +3 milhões de pessoas já leem.</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <span className="ob__social">
            <span className="ob__avatars"><span /><span /><span /><span /></span>
            +3 milhões de leitores
          </span>
        </div>
      </div>
    </>
  )
}

function Habit() {
  return (
    <div className="ob__center">
      <div className="ob__art">
        <div className="ob__orb ob__orb--flame flame-bg"><Flame size={52} filled /></div>
      </div>
      <div className="ob__kicker">O hábito</div>
      <h1 className="ob__title">Toda manhã, uma edição. E uma sequência pra manter.</h1>
      <p className="ob__text">Às <b>6:06</b>, sua edição chega. Leia e sua <b>sequência</b> cresce. Falhou um dia? Recomeça sem culpa.</p>
      <div className="ob__streakprev">
        {['S', 'T', 'Q', 'Q', 'S'].map((d, i) => (
          <div className="ob__pday" key={i}>
            <div className="ob__pdot" data-on={i < 3}>{i < 3 ? <Flame size={16} filled /> : ''}</div>
            <span className="ob__plbl">{d}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Interests({ picked, toggle }) {
  return (
    <div className="ob__center">
      <div className="ob__kicker">Personalize</div>
      <h1 className="ob__title">Sobre o que você quer ler?</h1>
      <p className="ob__text">Escolha alguns temas pra começar. Dá pra mudar quando quiser.</p>
      <div className="ob__chips">
        {TOPICS.map(t => (
          <button key={t} className="ob__chip" data-on={picked.includes(t)} onClick={() => toggle(t)}>
            {picked.includes(t) ? '✓ ' : ''}{t}
          </button>
        ))}
      </div>
    </div>
  )
}

function Ready() {
  return (
    <div className="ob__center">
      <div className="ob__art">
        <div className="ob__orb flame-bg"><Check size={54} /></div>
      </div>
      <div className="ob__kicker">Tudo pronto</div>
      <h1 className="ob__title">Sua primeira edição já te espera, Francis.</h1>
      <p className="ob__text">Comece agora e <b>inicie sua sequência</b> hoje mesmo.</p>
      <div className="ob__optin">
        <span className="ob__optin__ic"><Bell size={20} /></span>
        <span className="ob__optin__tx">
          <b>Avisar às 6:06</b>
          <span>Para não perder nenhuma edição</span>
        </span>
        <span className="ob__toggle" role="switch" aria-checked="true" />
      </div>
    </div>
  )
}

export default function Onboarding({ variant = 'welcome', onStep, onRead }) {
  const [picked, setPicked] = useState(['Mundo', 'Tecnologia'])
  const toggle = (t) => setPicked(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t])

  const idx = ORDER.indexOf(variant)
  const isLast = variant === 'ready'
  const next = () => isLast ? onRead?.() : onStep?.(ORDER[idx + 1])

  const ctaLabel = {
    welcome: 'Começar',
    habit: 'Continuar',
    interests: `Continuar${picked.length ? ` · ${picked.length}` : ''}`,
    ready: 'Ler edição de hoje',
  }[variant]

  const ctaDisabled = variant === 'interests' && picked.length === 0

  return (
    <div className="phone__screen">
      <StatusBar />
      <div className="ob">
        <div className="ob__bar">
          <Dots variant={variant} />
          {!isLast && <button className="ob__skip" onClick={() => onStep?.('ready')}>Pular</button>}
        </div>

        <div className="ob__body">
          {variant === 'welcome' && <Welcome />}
          {variant === 'habit' && <Habit />}
          {variant === 'interests' && <Interests picked={picked} toggle={toggle} />}
          {variant === 'ready' && <Ready />}
        </div>

        <div className="ob__foot">
          <button className="ob__cta" onClick={next} disabled={ctaDisabled}>
            {ctaLabel} {isLast ? <ArrowRight /> : <ArrowRight />}
          </button>
          {variant === 'welcome' && <p className="ob__sub">Já tem conta? <b>Entrar</b></p>}
          {isLast && <p className="ob__sub">Leva menos de <b>5 minutos</b></p>}
        </div>
      </div>
    </div>
  )
}
