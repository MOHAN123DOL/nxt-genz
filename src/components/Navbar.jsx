import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

// Radial page menu — Uiverse · dexter-st (adapted: 6 pages, brand colours, router-aware).
const items = [
  {
    path: '/',
    label: 'Home',
    d: 'M3 11.5 12 4l9 7.5M5.5 10v9.5a.5.5 0 0 0 .5.5h4v-5.5h4V20h4a.5.5 0 0 0 .5-.5V10',
  },
  {
    path: '/about',
    label: 'About',
    d: 'M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.1a7.5 7.5 0 0 1 15 0A17.9 17.9 0 0 1 12 21.75c-2.7 0-5.2-.6-7.5-1.65Z',
  },
  {
    path: '/services',
    label: 'Services',
    d: 'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z',
  },
  {
    path: '/projects',
    label: 'Projects',
    d: 'm21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25',
  },
  {
    path: '/pricing',
    label: 'Pricing',
    d: 'M3.75 12.5V5.25a1.5 1.5 0 0 1 1.5-1.5h7.25a1.5 1.5 0 0 1 1.06.44l7.25 7.25a1.5 1.5 0 0 1 0 2.12l-7.25 7.25a1.5 1.5 0 0 1-2.12 0L4.19 13.56a1.5 1.5 0 0 1-.44-1.06ZM8.25 8.25h.008',
  },
  {
    path: '/contact',
    label: 'Contact',
    d: 'M3.75 6.75h16.5a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75H3.75A.75.75 0 0 1 3 16.5v-9a.75.75 0 0 1 .75-.75ZM3.4 7.4 12 13.5l8.6-6.1',
  },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  // Close the menu whenever the page changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Close on Escape or when clicking outside the menu.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onDown)
    }
  }, [open])

  return (
    <>
      <header className="site-header">
        <Link to="/" className="brand" aria-label="NXT GENZ — home">
          <img src="/images/logo-mark.png" alt="" width="56" height="40" />
          <span className="brand-text">
            <strong>NXTGENZ</strong>
            <em>SOLUTIONZ</em>
          </span>
        </Link>
        <Link to="/contact" className="btn btn--primary header-cta">
          Get a Quote
        </Link>
      </header>

      <nav className="rm" ref={menuRef} aria-label="Main navigation" style={{ '--options': items.length }}>
        <div className="rm-options" role="radiogroup" aria-label="Pages">
          {items.map((item, idx) => (
            <label className="rm-option" style={{ '--i': idx + 1 }} key={item.path}>
              <input
                className="rm-option-input"
                type="radio"
                name="page"
                value={item.path}
                aria-label={item.label}
                checked={pathname === item.path}
                tabIndex={open ? 0 : -1}
                onChange={() => navigate(item.path)}
                onClick={() => setOpen(false)}
              />
              <span className="rm-option-inner" data-tooltip={item.label}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="rm-svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.d} />
                </svg>
              </span>
            </label>
          ))}
        </div>

        <div className="rm-ring" />
        <div className="rm-light" />

        <div className="rm-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="rm-btn-svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path className="morph-line top" d="M4 7 L20 7" />
            <path className="morph-line middle" d="M4 12 L20 12" />
            <path className="morph-line bottom" d="M4 17 L20 17" />
          </svg>
          <input
            type="checkbox"
            className="rm-toggle"
            aria-label={open ? 'Close page menu' : 'Open page menu'}
            aria-expanded={open}
            checked={open}
            onChange={(e) => setOpen(e.target.checked)}
          />
        </div>
      </nav>
    </>
  )
}
