import { Link } from 'react-router-dom'
import { company, waLink } from '../data/company'
import { socialIcons } from '../data/socialIcons'
import './Footer.css'

// Brutalist links card — Uiverse · craig_8499 (icons swapped for NXT GENZ's real channels).
const links = [
  { id: 'instagram', label: 'Instagram', href: company.instagramUrl, external: true },
  { id: 'whatsapp', label: 'WhatsApp', href: waLink('Hi NXT GENZ!'), external: true },
  { id: 'email', label: 'Email', href: `mailto:${company.email}` },
  { id: 'phone', label: 'Call', href: `tel:${company.phoneTel}` },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <img src="/images/logo-full.png" alt="NXT GENZ Solutionz" className="footer-logo" width="260" height="165" />
          <p className="footer-tag">{company.tagline}</p>
          <p className="footer-note">Prices on this site are exclusive of GST.</p>
        </div>

        <div className="footer-col">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Reach us</h3>
          <ul>
            <li><a href={waLink('Hi NXT GENZ!')} target="_blank" rel="noreferrer">WhatsApp · {company.phoneDisplay}</a></li>
            <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><a href={company.instagramUrl} target="_blank" rel="noreferrer">Instagram · {company.instagramHandle}</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <div className="brutalist-container">
            <div className="slab-bg slab-1" />
            <div className="slab-bg slab-2" />

            <div className="concrete-block">
              <div className="concrete-texture" />
              <div className="paper-texture" />

              <div className="main-content">
                <div className="title-text">LINKS</div>

                <div className="social-grid">
                  {links.map((l) => (
                    <a
                      key={l.id}
                      className="social-cell"
                      href={l.href}
                      aria-label={l.label}
                      {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    >
                      <svg viewBox={socialIcons[l.id].viewBox} className="social-icon" aria-hidden="true">
                        <path d={socialIcons[l.id].d} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              <div className="scan-effect" />

              <div className="rivet" />
              <div className="rivet" />
              <div className="rivet" />
              <div className="rivet" />
            </div>

            <div className="type-accent">SYS//SOCIAL_LINKS</div>

            <div className="corner-bracket bracket-tl" />
            <div className="corner-bracket bracket-tr" />
            <div className="corner-bracket bracket-bl" />
            <div className="corner-bracket bracket-br" />
          </div>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>© 2026 {company.legalName}. All rights reserved.</p>
        <p>Web Development · ERP · Digital Marketing</p>
      </div>
    </footer>
  )
}
