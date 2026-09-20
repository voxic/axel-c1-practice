import { NavLink, Outlet } from 'react-router-dom'
import { useTheme } from '../lib/theme-context'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/topics', label: 'Topics' },
  { to: '/quiz/mixed', label: 'Quiz' },
  { to: '/cards', label: 'Cards' },
  { to: '/weak', label: 'Weak' },
]

export function Layout() {
  const { theme, toggle } = useTheme()

  return (
    <div className="shell">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="topbar">
        <NavLink to="/" className="brand" aria-label="Axel C1 home">
          <span className="brand-mark" aria-hidden="true">
            C1
          </span>
          <span className="brand-text">
            <strong>Axel C1</strong>
            <em>Medeltung lastbil</em>
          </span>
        </NavLink>
        <nav className="nav" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          className="theme-btn"
          onClick={toggle}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </header>
      <main id="main" className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p>
          Practice material only — not official Trafikverket questions. Check
          Transportstyrelsen and Trafikverket before you sit the real test.
        </p>
      </footer>
    </div>
  )
}
