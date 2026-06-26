// Inline SVG icons — traço consistente, herdam currentColor
const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const Flame = ({ size = 24, filled = false }) => (
  filled ? (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 0.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14a8 8 0 0 0 16 0C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 24 24" {...s}>
      <path d="M12 3c.4 2.8 3 4 3 6.8A3 3 0 0 1 9 9.8c0-.5.1-1 .4-1.4C8 9.3 7 11 7 13.2A5 5 0 0 0 17 13.2C17 9 14 6 12 3z" />
    </svg>
  )
)
export const Headphone = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s}>
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <rect x="2.5" y="13" width="4" height="7" rx="2" />
    <rect x="17.5" y="13" width="4" height="7" rx="2" />
  </svg>
)
export const Settings = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H1a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 2.6 7a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H7a1.6 1.6 0 0 0 1-1.5V1a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V7a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z" />
  </svg>
)
export const ChevronRight = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s}><path d="m9 6 6 6-6 6" /></svg>
)
export const ArrowRight = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
export const Check = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s}><path d="M5 12.5 10 17l9-10" /></svg>
)
export const Clock = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
)
export const Share = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s}>
    <path d="M12 3v12M8 7l4-4 4 4" /><path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
  </svg>
)
export const Dots = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" /></svg>
)
export const News = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s}><path d="M4 5h13v14H6a2 2 0 0 1-2-2Z" /><path d="M17 8h3v9a2 2 0 0 1-2 2" /><path d="M7 9h7M7 13h7M7 17h4" /></svg>
)
export const Soccer = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9" /><path d="m12 7 3 2-1 3.5h-4L9 9z" /></svg>
)
export const Book = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s}><path d="M4 5a2 2 0 0 1 2-2h6v16H6a2 2 0 0 0-2 2Z" /><path d="M20 5a2 2 0 0 0-2-2h-6v16h6a2 2 0 0 1 2 2Z" /></svg>
)
export const Menu = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
)
export const Wifi = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 18a2 2 0 1 0 .01 0M5 12a10 10 0 0 1 14 0l-2 2a7 7 0 0 0-10 0Zm-3-3a14 14 0 0 1 20 0l-2 2a11 11 0 0 0-16 0Z"/></svg>
)
export const Battery = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="2" y="8" width="18" height="9" rx="2.5" fill="currentColor"/><rect x="21" y="11" width="2" height="3" rx="1" fill="currentColor"/></svg>
)
export const Signal = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="13" width="3.5" height="6" rx="1"/><rect x="7.5" y="9" width="3.5" height="10" rx="1"/><rect x="13" y="5" width="3.5" height="14" rx="1"/><rect x="18.5" y="9" width="3.5" height="10" rx="1" opacity=".35"/></svg>
)
