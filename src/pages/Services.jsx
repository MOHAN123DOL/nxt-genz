import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { plans } from '../data/pricing'
import { techIcons } from '../data/techIcons'
import { socialIcons } from '../data/socialIcons'
import { company, waLink } from '../data/company'
import './Services.css'

const jump = [
  { href: '#web', label: 'Websites' },
  { href: '#erp', label: 'ERP' },
  { href: '#marketing', label: 'Digital Marketing' },
  { href: '#custom', label: 'Custom Solutions' },
  { href: '#tech', label: 'Technology' },
]

// Website option cards (Uiverse · srinivasaiml) — one per website package, data comes from data/pricing.js.
const optionLook = {
  'web-basic': {
    bg: '#FDFDF1',
    short: '3 pages · SEO setup · 1-year support',
    icon: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M8.5 8h7M8.5 12h7M8.5 16h4" />
      </>
    ),
  },
  'web-standard': {
    bg: '#EC5E27',
    short: '8 pages · Admin panel · SEO optimization',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <circle cx="12" cy="14.5" r="2.2" />
      </>
    ),
  },
  'web-premium': {
    bg: '#FDFDF1',
    short: '10 pages · Admin panel · Analytics dashboard',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7.5 16v-3M12 16V9M16.5 16v-5" />
      </>
    ),
  },
  'web-custom': {
    bg: '#EC5E27',
    short: 'Scoped to your exact requirements',
    icon: (
      <>
        <path d="M12 3l1.8 4.7 4.7 1.8-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" />
        <path d="M18.5 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z" />
      </>
    ),
  },
}

const marketing = [
  { title: 'Social media page handling', text: 'Consistent posting and page management on your key platforms.' },
  { title: 'Posters & reels', text: 'Up to 30 poster designs and 8 reels a month, depending on your plan.' },
  { title: 'Google Business (GMB)', text: 'Setup and optimization so local customers find you on Maps and Search.' },
  { title: 'Meta & Google ads', text: 'Campaign setup and management with a clear service and ad-spend split.' },
  { title: 'Monthly performance report', text: 'See what worked, what it cost and what we will improve next month.' },
  { title: 'Personal branding', text: 'Strategy, profile optimization, reels, shoot + editing and content calendars for individuals.' },
]

const custom = [
  { title: 'Android apps', text: 'Mobile apps that put your service in your customers’ pockets.' },
  { title: 'SAP consulting', text: 'Guidance and implementation support from an in-house SAP consultant.' },
  { title: 'Database management', text: 'Clean, secure and well-structured data behind your ERP and website.' },
  { title: 'AI / ML solutions', text: 'Practical automation and prediction that fit real business workflows.' },
  { title: 'Business analysis', text: 'We map your process first, so the software fits the way you work.' },
]

export default function Services() {
  const [activeTech, setActiveTech] = useState(techIcons[0].id)
  const current = techIcons.find((t) => t.id === activeTech)

  return (
    <div className="services">
      {/* ------------------------------ Hero ------------------------------ */}
      <section className="svc-hero">
        <div className="wrap svc-hero-inner">
          <p className="eyebrow">Our services</p>
          <h1>
            One team for your <span className="grad">website, software and growth.</span>
          </h1>
          <p className="svc-hero-lead">
            Website development, ERP software, digital marketing, personal branding and custom business solutions — built to
            improve your digital presence, your operations and your growth.
          </p>
          <nav className="jump" aria-label="Jump to a service">
            {jump.map((j) => (
              <a key={j.href} href={j.href}>
                {j.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ------------------------------ Websites ------------------------------ */}
      <section className="section svc-web" id="web">
        <div className="wrap">
          <Reveal className="svc-section-head">
            <p className="eyebrow">Website development</p>
            <h2 className="section-title">Choose the website that fits your business</h2>
            <p className="section-lead">
              Every site is custom-built on a 20-day development timeline, mobile responsive, SEO-ready and connected to
              WhatsApp, phone and email — with one year of support.
            </p>
          </Reveal>

          <div className="opt-grid">
            {plans.web.map((p, i) => {
              const look = optionLook[p.id]
              return (
                <Reveal key={p.id} delay={i * 90} className="opt-wrap">
                  <div className="opt-container">
                    <div className="opt-effect">
                      <div className="opt-inner">
                        <div className="opt-liquid" />
                        <div className="opt-shine" />
                        <div className="opt-glow" />
                        <div className="opt-content">
                          {p.popular ? <div className="opt-badge">MOST POPULAR</div> : <div className="opt-badge opt-badge--ghost">{p.name.toUpperCase()}</div>}
                          <div className="opt-image" style={{ '--bg-color': look.bg }}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              {look.icon}
                            </svg>
                          </div>
                          <div className="opt-text">
                            <p className="opt-title">{p.label}</p>
                            <p className="opt-description">{look.short}</p>
                          </div>
                          <div className="opt-footer">
                            <div className="opt-price">{p.price ? `₹${p.price}` : p.priceText}</div>
                            <Link to="/pricing?tab=web" className="opt-button" aria-label={`See ${p.name} website plan details`}>
                              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                                <path fill="currentColor" d="M5 12H19M12 5V19" stroke="currentColor" strokeWidth="2" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <p className="price-foot">Prices exclusive of GST. Tap the + on any card to see everything included.</p>
        </div>
      </section>

      {/* ------------------------------ ERP ------------------------------ */}
      <section className="section svc-erp" id="erp">
        <div className="wrap erp-grid">
          <Reveal className="erp-copy">
            <p className="eyebrow">ERP software</p>
            <h2 className="section-title">A custom ERP your whole team can run on</h2>
            <p className="section-lead">
              Billing, stock, records and reports in one system, built around your process in about 4 months and ready to scale
              with your users.
            </p>
            <Link to="/pricing?tab=erp" className="btn btn--dark">
              See ERP pricing
            </Link>
          </Reveal>

          <div className="erp-models">
            <Reveal delay={80} className="erp-model">
              <span className="erp-tag">Model 1</span>
              <h3>Full ownership</h3>
              <p className="erp-price">
                ₹50,000 <small>upfront</small>
              </p>
              <ul>
                <li>Complete software — source, setup and deployment included</li>
                <li>No recurring licence fees</li>
                <li>Maintenance billed as hosting cost + 20%</li>
              </ul>
            </Reveal>
            <Reveal delay={160} className="erp-model erp-model--alt">
              <span className="erp-tag">Model 2</span>
              <h3>Monthly subscription</h3>
              <p className="erp-price">
                from ₹1,999 <small>per month</small>
              </p>
              <ul>
                <li>3 users ₹1,999 · 8 users ₹4,999 · 11 users ₹6,699</li>
                <li>Full ERP access, no long-term lock-in</li>
                <li>Need another team size? We will quote it</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------ Digital marketing ------------------------------ */}
      <section className="section svc-marketing" id="marketing">
        <div className="wrap">
          <Reveal className="svc-section-head">
            <p className="eyebrow">Digital marketing &amp; personal branding</p>
            <h2 className="section-title">Content, ads and reporting — handled end to end</h2>
            <p className="section-lead">
              Pick a ready-made plan or customise your own scope. Onboarding takes 1 week and includes a competitive analysis.
            </p>
          </Reveal>

          <div className="mk-grid">
            {marketing.map((m, i) => (
              <Reveal key={m.title} delay={(i % 3) * 80} className="mk-item">
                <span className="mk-check" aria-hidden="true">
                  ✦
                </span>
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mk-cta">
            <Link to="/pricing?tab=dm" className="btn btn--primary">
              Digital marketing plans
            </Link>
            <Link to="/pricing?tab=branding" className="btn btn--ghost">
              Personal branding plans
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ Custom solutions ------------------------------ */}
      <section className="section svc-custom" id="custom">
        <div className="wrap">
          <Reveal className="svc-section-head">
            <p className="eyebrow">Custom business solutions</p>
            <h2 className="section-title">When off-the-shelf does not fit, we build what does</h2>
          </Reveal>
          <div className="cu-grid">
            {custom.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 80} className="cu-card">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Reveal>
            ))}
            <Reveal delay={160} className="cu-card cu-card--cta">
              <h3>Have a different idea?</h3>
              <p>Tell us about it — the price and timeline are set after a requirement review.</p>
              <Link to="/contact?service=Custom%20Business%20Solution" className="btn btn--dark">
                Request a quote
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------ Technology orbit (Uiverse · Darlley) ------------------------------ */}
      <section className="section svc-tech" id="tech">
        <div className="wrap tech-grid">
          <Reveal className="tech-copy">
            <p className="eyebrow">Technology we use</p>
            <h2 className="section-title">Modern tools, chosen for your project</h2>
            <p className="section-lead">Tap a logo to see what we use it for.</p>

            <div className="tech-info" aria-live="polite">
              <p className="tech-name">{current.name}</p>
              <p className="tech-use">{current.use}</p>
            </div>

            <ul className="tech-legend">
              {techIcons.map((t) => (
                <li key={t.id}>
                  <button type="button" className={t.id === activeTech ? 'is-active' : ''} onClick={() => setActiveTech(t.id)}>
                    {t.name}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="orbit-wrap">
            <div className="orbit">
              <div className="orbit-ring">
                {techIcons.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    className={`orbit-item orbit-${i + 1} ${t.id === activeTech ? 'is-active' : ''}`}
                    aria-label={t.name}
                    aria-pressed={t.id === activeTech}
                    title={t.name}
                    onClick={() => setActiveTech(t.id)}
                  >
                    <span>
                      <svg viewBox={t.viewBox} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" dangerouslySetInnerHTML={{ __html: t.markup }} />
                    </span>
                  </button>
                ))}

                <Link to="/about" className="orbit-core" aria-label="About NXT GENZ">
                  <div>
                    <img src="/images/logo-mark.png" alt="" width="110" height="78" />
                  </div>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ CTA ------------------------------ */}
      <section className="svc-cta">
        <Reveal className="wrap svc-cta-inner">
          <div>
            <h2>Not sure which service you need?</h2>
            <p>Send us a quick message — we will recommend the right package for your business.</p>
          </div>
          <div className="svc-cta-actions">
            <a className="btn btn--primary" href={waLink('Hi NXT GENZ, I need help choosing a service.')} target="_blank" rel="noreferrer">
              <svg viewBox={socialIcons.whatsapp.viewBox} fill="currentColor" aria-hidden="true">
                <path d={socialIcons.whatsapp.d} />
              </svg>
              WhatsApp us
            </a>
            <a className="btn btn--ghost" href={`mailto:${company.email}`}>
              Email us
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
