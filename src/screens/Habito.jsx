import './habito.css'
import { StatusBar, BottomNav } from '../components/Chrome.jsx'
import { Flame, ArrowRight, Check, Clock, Settings } from '../icons.jsx'

const WEEK = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D']

// fill states por variante: done | today | empty | future
const WEEK_FILL = {
  active: ['done', 'done', 'done', 'done', 'today', 'future', 'future'],
  done:   ['done', 'done', 'done', 'done', 'done', 'future', 'future'],
  risk:   ['done', 'done', 'done', 'done', 'today', 'future', 'future'],
  empty:  ['empty', 'empty', 'empty', 'empty', 'today', 'future', 'future'],
}

function Header() {
  return (
    <div className="hb__top">
      <div>
        <div className="hb__hello">quinta-feira, 25 de junho</div>
        <div className="hb__name">Sua sequência</div>
      </div>
      <div className="hb__avatar" style={{ backgroundImage: 'linear-gradient(135deg,#1d1d1d,#444)' }} aria-label="perfil" />
    </div>
  )
}

function Hero({ variant }) {
  if (variant === 'empty') {
    return (
      <section className="hero hero--empty">
        <div className="hero__flamewrap"><Flame size={30} /></div>
        <div className="hero__label">Sua sequência</div>
        <div className="hero__num"><span className="hero__big">0</span><span className="hero__unit">dias</span></div>
        <p className="hero__msg">Toda sequência começa com a leitura de hoje. Bora começar a sua? 🔥</p>
        <div className="empty-steps">
          <div className="estep"><span className="estep__n">1</span> Leia a edição de hoje</div>
          <div className="estep"><span className="estep__n">2</span> Sua sequência registra sozinha</div>
          <div className="estep"><span className="estep__n">3</span> Volte amanhã e mantenha o ritmo</div>
        </div>
      </section>
    )
  }
  if (variant === 'risk') {
    return (
      <section className="hero hero--risk">
        <span className="hero__glow" />
        <div className="hero__flamewrap"><Flame size={30} filled /></div>
        <div className="hero__label">Sua sequência</div>
        <div className="hero__num"><span className="hero__big">12</span><span className="hero__unit">dias</span></div>
        <div className="hero__timer"><Clock size={15} /> Faltam <b>3h47</b> para não perder a sequência</div>
      </section>
    )
  }
  const done = variant === 'done'
  return (
    <section className={`hero ${done ? 'hero--done' : 'hero--active'}`}>
      <span className="hero__glow" />
      <div className="hero__flamewrap"><Flame size={30} filled /></div>
      <div className="hero__label">Sua sequência {done && '· hoje registrado'}</div>
      <div className="hero__num">
        <span className="hero__big">{done ? '13' : '12'}</span><span className="hero__unit">dias</span>
      </div>
      <p className="hero__msg">
        {done ? 'Leitura de hoje registrada. Sequência mantida! Te vejo amanhã às 6:06 ☕' : 'Você está num ótimo ritmo. Faltam 2 dias para seu recorde de 14 🏆'}
      </p>
    </section>
  )
}

function PrimaryAction({ variant, onRead }) {
  if (variant === 'done') {
    return <button className="cta cta--done"><Check /> Edição de hoje concluída</button>
  }
  const label = variant === 'empty' ? 'Começar lendo a edição de hoje' : 'Ler edição de hoje'
  return (
    <button className="cta cta--primary" onClick={onRead}>
      {label} <ArrowRight />
    </button>
  )
}

export default function Habito({ variant = 'active', onRead }) {
  const fills = WEEK_FILL[variant]
  return (
    <div className="phone__screen">
      <StatusBar />
      <div className="screen-scroll">
        <div className="hb">
          <Header />
          <Hero variant={variant} />
          <PrimaryAction variant={variant} onRead={onRead} />

          <div className="card">
            <div className="card__head">
              <span className="card__title">Esta semana</span>
              <span className="card__meta">{variant === 'empty' ? '0 de 7' : variant === 'done' ? '5 de 7' : '4 de 7'}</span>
            </div>
            <div className="week">
              {WEEK.map((d, i) => (
                <div className="week__day" key={i}>
                  <div className="week__dot" data-fill={fills[i]}>
                    {fills[i] === 'done' ? <Flame size={15} filled /> : ''}
                  </div>
                  <span className="week__lbl">{d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="stats">
            <div className="stat"><div className="stat__n">{variant === 'empty' ? '—' : '14'}</div><div className="stat__l">Recorde</div></div>
            <div className="stat"><div className="stat__n">{variant === 'empty' ? '0' : variant === 'done' ? '87' : '86'}</div><div className="stat__l">Edições lidas</div></div>
            <div className="stat"><div className="stat__n">{variant === 'empty' ? '0%' : '92%'}</div><div className="stat__l">No mês</div></div>
          </div>

          <div className="calhint">
            <Settings size={16} />
            <span>{variant === 'empty' ? <>Personalize <b>outros hábitos</b> além da leitura no botão +</> : <>Veja seu <b>calendário completo</b> e outros hábitos</>}</span>
          </div>
        </div>
      </div>
      <BottomNav active="habitos" />
    </div>
  )
}
