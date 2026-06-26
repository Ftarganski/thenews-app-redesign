import './leitura.css'
import { StatusBar } from '../components/Chrome.jsx'
import { Logo, LogoMark } from '../Logo.jsx'
import { Flame, Headphone, Dots, Clock, Check, Share, ArrowRight } from '../icons.jsx'

const PROGRESS = { topo: 6, lendo: 62, fim: 100 }

function Bar({ variant }) {
  const done = variant === 'fim'
  return (
    <div className="rd__bar">
      <div className="rd__row">
        <Logo size={19} gap={7} className="rd__wordmark" />
        <div className="rd__actions">
          <span className="rd__streak"><Flame size={14} filled /> {done ? '13' : '12'}</span>
          <button className="rd__iconbtn"><Headphone size={19} /></button>
          <button className="rd__iconbtn"><Dots size={20} /></button>
        </div>
      </div>
      <div className="rd__progress"><span style={{ width: `${PROGRESS[variant]}%` }} /></div>
    </div>
  )
}

function AutoReg({ variant }) {
  if (variant === 'fim') {
    return <div className="rd__autoreg rd__autoreg--done"><Check size={15} /> Leitura registrada — sequência mantida</div>
  }
  if (variant === 'lendo') {
    return <div className="rd__autoreg"><Flame size={14} filled /> Registrando sua leitura conforme você avança — 62%</div>
  }
  return null
}

function Cover() {
  return (
    <div className="rd__cover">
      <div className="rd__coverbrand flame-bg"><Logo size={40} gap={12} /></div>
      <div className="rd__greeting">Quinta · 25 jun · 5 min</div>
      <h1 className="rd__covertitle">sorrir para o futuro</h1>
      <p className="rd__intro">
        bom dia. esperança é acordar sem saber o que vem — e ainda assim estar animado para descobrir.
        uma mistura de frio na barriga e otimismo que torna o mundo mais leve. com sorriso no rosto e café na mão, vamos nessa.
      </p>
    </div>
  )
}

function Article() {
  return (
    <div className="rd__article">
      <div className="rd__kicker">
        <span className="rd__cat">Mundo</span>
        <span className="rd__time"><Clock size={13} /> 5 min de leitura</span>
      </div>
      <h1 className="rd__title">O crescimento econômico do Japão é um alerta?</h1>
      <div className="rd__hero">
        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#C7402E 0%,#1f3a8a 100%)' }} />
      </div>
      <p className="rd__cap">(Imagem: Eugene Hoshiko, Pool | AP)</p>
      <div className="rd__body">
        <p>Aparentemente, <b>a economia japonesa está voltando a crescer</b>, o que pode diminuir o investimento vindo do Japão para o restante do mundo. Antes de te explicar como isso pode acontecer, <b>precisamos de um pouco de contexto:</b></p>
        <div className="rd__callout">📊 O Japão, durante muito tempo, teve uma <b>taxa de juros muito baixa</b>. Isso permitia investidores pegarem dinheiro japonês emprestado e investirem em outros países a taxas maiores. Essa dinâmica é chamada de <i>carry-trade</i>.</div>
        <p><b>Porém…</b> nesta semana, a divulgação dos PMIs indicou um crescimento mais forte do Japão, com a economia japonesa retomando fôlego depois de meses de estagnação.</p>
      </div>
    </div>
  )
}

function Reward({ onHabits }) {
  return (
    <div className="reward">
      <div className="reward__sheet">
        <div className="reward__badge flame-bg">
          <Flame size={48} filled />
          <span className="reward__plus">+1</span>
        </div>
        <div className="reward__title">Edição concluída! 🎉</div>
        <p className="reward__sub">Você manteve sua sequência sem precisar fazer nada além de ler.</p>
        <div className="reward__streakline">
          <span className="reward__streaknum">13</span>
          <span className="reward__streaklbl">dias seguidos</span>
        </div>
        <div className="reward__actions">
          <button className="reward__btn reward__btn--ghost"><Share size={18} /> Compartilhar</button>
          <button className="reward__btn reward__btn--primary" onClick={onHabits}>Ver sequência <ArrowRight size={18} /></button>
        </div>
      </div>
    </div>
  )
}

export default function Leitura({ variant = 'topo', onHabits }) {
  return (
    <div className="phone__screen">
      <StatusBar />
      <div className="rd">
        <Bar variant={variant} />
        <AutoReg variant={variant} />
        <div className="rd__scroll">
          {variant === 'topo' ? <Cover /> : <Article />}
        </div>
      </div>
      {variant === 'fim' && <Reward onHabits={onHabits} />}
    </div>
  )
}
