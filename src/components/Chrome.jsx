import { Signal, Wifi, Battery, News, Flame, Soccer, Book, Menu } from '../icons.jsx'

export function StatusBar({ dark = false }) {
  return (
    <div className="statusbar" style={{ color: dark ? '#fff' : 'var(--ink)' }}>
      <span>9:41</span>
      <span className="statusbar__icons"><Signal /><Wifi /><Battery /></span>
    </div>
  )
}

const NAV = [
  { id: 'edicao', label: 'edição', Icon: News },
  { id: 'habitos', label: 'hábitos', Icon: Flame },
  { id: 'copa', label: 'copa', Icon: Soccer },
  { id: 'livros', label: 'livros', Icon: Book },
  { id: 'mais', label: 'mais', Icon: Menu },
]

export function BottomNav({ active }) {
  return (
    <nav className="bottomnav">
      {NAV.map(({ id, label, Icon }) => (
        <div className="bottomnav__item" key={id} data-active={active === id}>
          <span className="bottomnav__ic"><Icon size={22} filled={active === id && id === 'habitos'} /></span>
          {label}
        </div>
      ))}
    </nav>
  )
}
