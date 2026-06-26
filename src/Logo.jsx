// Marca the news recriada em vetor — círculo com gradiente amarelo→laranja e a cauda à esquerda.
export const LogoMark = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="tn-grad" x1="6" y1="4" x2="26" y2="30" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FFD23F" />
        <stop offset="0.55" stopColor="#FFB31F" />
        <stop offset="1" stopColor="#FF9410" />
      </linearGradient>
    </defs>
    <rect x="1.5" y="14" width="8" height="4.4" rx="2.2" fill="#FF9F1C" />
    <circle cx="18" cy="16" r="11" fill="url(#tn-grad)" />
  </svg>
)

// Logo completo: marca + wordmark "the news"
export const Logo = ({ size = 22, gap = 8, className = '' }) => (
  <span className={`logo ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap }}>
    <LogoMark size={size} />
    <span className="logo__word">the news</span>
  </span>
)
