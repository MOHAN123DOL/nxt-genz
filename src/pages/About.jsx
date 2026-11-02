import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { company, team, waLink } from '../data/company'
import { socialIcons } from '../data/socialIcons'
import './About.css'

const facts = [
  { big: '20', unit: 'days', text: 'Typical website development timeline' },
  { big: '4', unit: 'months', text: 'To build a custom ERP system' },
  { big: '1', unit: 'week', text: 'Onboarding, including competitive analysis' },
  { big: '1', unit: 'year', text: 'Support included with every website package' },
]

const values = [
  {
    title: 'Pricing you can read',
    text: 'Every website, ERP, marketing and branding plan is published with its price. All prices are exclusive of GST — no surprises on the invoice.',
  },
  {
    title: 'Fixed timelines',
    text: 'We commit to a build window up front: about 20 days for websites and about 4 months for a custom ERP.',
  },
  {
    title: 'Own it or subscribe',
    text: 'Pay once and own your ERP outright, or choose a low-commitment monthly plan sized for 3, 8 or 11 users.',
  },
  {
    title: 'Built to scale',
    text: 'Start with a simple static site and grow into dashboards, ERP and full marketing — or ask for a custom scope any time.',
  },
]

const steps = [
  { title: 'Discover', text: 'We review your requirements. For marketing and branding, onboarding takes a week and includes competitive analysis.' },
  { title: 'Design & build', text: 'Our team designs and develops to the agreed timeline — about 20 days for a website, about 4 months for an ERP.' },
  { title: 'Launch', text: 'Deployment, SEO setup, WhatsApp, mobile and email integration — your product goes live ready to work.' },
  { title: 'Support & grow', text: 'One year of support on websites, monthly reports on marketing plans, and upgrades as your business grows.' },
]

// Isometric social card — Uiverse · MijailVillegas (icons swapped for NXT GENZ's real channels).
const socials = [
  { id: 'instagram', label: 'Instagram', href: company.instagramUrl, external: true },
  { id: 'whatsapp', label: 'WhatsApp', href: waLink('Hi NXT GENZ!'), external: true },
  { id: 'email', label: 'Email', href: `mailto:${company.email}` },
]

export default function About() {
  return (
    <div className="about">
      {/* ------------------------------ Hero ------------------------------ */}
      <section className="about-hero">
        <div className="wrap about-hero-grid">
          <Reveal className="about-hero-copy">
            <p className="eyebrow">About NXT GENZ</p>
            <h1>
              Next generation thinking. <span className="grad">Limitless</span> solutions.
            </h1>
            <p className="about-lead">
              NXTGENZ is a web, ERP and digital marketing team that helps businesses improve their digital presence, run their
              operations better and grow with confidence — all under one roof.
            </p>
            <div className="about-hero-cta">
              <Link className="btn btn--primary" to="/services">
                Our services
              </Link>
              <Link className="btn btn--ghost" to="/contact">
                Talk to the team
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="about-logo-card" aria-hidden="true">
            <img src="/images/logo-full.png" alt="" width="460" height="292" />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ Delivery facts ------------------------------ */}
      <section className="about-facts">
        <div className="wrap facts-grid">
          {facts.map((f, i) => (
            <Reveal key={f.text} delay={i * 80} className="fact">
              <p className="fact-num">
                {f.big}
                <small>{f.unit}</small>
              </p>
              <p className="fact-text">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------ Story ------------------------------ */}
      <section className="section about-story">
        <div className="wrap story-grid">
          <Reveal>
            <p className="eyebrow">Who we are</p>
            <h2 className="section-title">Web, mobile, cloud and ERP delivery — one team</h2>
          </Reveal>
          <Reveal delay={100} className="story-text">
            <p>
              NXTGENZ brings website development, ERP software, digital marketing and personal branding together, so your
              website, your operations and your marketing are designed to work as one system instead of three disconnected
              projects.
            </p>
            <p>
              Our team covers business analysis, web development, Android, SAP, database management, AI/ML, graphic design and
              digital marketing — which means the person who understands your problem is sitting next to the person who builds
              the solution.
            </p>
            <p className="story-quote">“{company.tagline}.”</p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ Values ------------------------------ */}
      <section className="section about-values">
        <div className="wrap">
          <Reveal className="values-head">
            <p className="eyebrow">How we work</p>
            <h2 className="section-title">What you can count on</h2>
          </Reveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="value-card">
                <span className="value-no">{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ Process ------------------------------ */}
      <section className="section about-process">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Our process</p>
            <h2 className="section-title">From first call to full launch</h2>
          </Reveal>
          <ol className="process-list">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 90} className="process-step">
                <span className="step-dot">{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------ Team ------------------------------ */}
      <section className="section about-team">
        <div className="wrap">
          <Reveal className="team-head">
            <p className="eyebrow">Our team</p>
            <h2 className="section-title">The people behind NXTGENZ</h2>
            <p className="section-lead">Web, mobile, cloud and ERP delivery — handled by specialists.</p>
          </Reveal>

          <div className="team-grid">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 80} className="team-card">
                <span className="avatar" aria-hidden="true">
                  {m.name.charAt(0)}
                </span>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ Connect (Uiverse · MijailVillegas) ------------------------------ */}
      <section className="section about-connect">
        <div className="wrap connect-grid">
          <Reveal className="connect-copy">
            <p className="eyebrow">Stay connected</p>
            <h2 className="section-title">Follow and message NXT GENZ</h2>
            <p className="section-lead">
              See our latest work on Instagram, or message us on WhatsApp and email — we reply quickly.
            </p>
            <ul className="connect-list">
              <li>
                <strong>Instagram</strong> {company.instagramHandle}
              </li>
              <li>
                <strong>WhatsApp</strong> {company.phoneDisplay}
              </li>
              <li>
                <strong>Email</strong> {company.email}
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120} className="connect-card">
            <div className="iso-card">
              <ul>
                {socials.map((s) => (
                  <li className="iso-pro" key={s.id}>
                    <span />
                    <span />
                    <span />
                    <a href={s.href} aria-label={s.label} {...(s.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                      <svg className="iso-svg" xmlns="http://www.w3.org/2000/svg" viewBox={socialIcons[s.id].viewBox} aria-hidden="true">
                        <path d={socialIcons[s.id].d} />
                      </svg>
                    </a>
                    <div className="iso-text">{s.label}</div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
