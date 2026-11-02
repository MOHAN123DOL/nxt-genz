import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { company, offer, stats, waLink } from '../data/company'
import { reviews } from '../data/reviews'
import './Home.css'

// Icons for the stats card (Uiverse · naveenkumarr-onyx) — one per headline number.
const statIcons = {
  secure:
    'M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z',
  web: 'M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z',
  dm: 'M16 16c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm10 6c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM6 14c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm8.5-12C17.538 2 20 4.462 20 7.5S17.538 13 14.5 13 9 10.538 9 7.5 11.462 2 14.5 2zm0 2C12.567 4 11 5.567 11 7.5s1.567 3.5 3.5 3.5S18 9.433 18 7.5 16.433 4 14.5 4z',
  erp: 'M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z',
}

const services = [
  {
    id: 'web',
    title: 'Website Development',
    text: 'Fast, mobile-ready websites with SEO and WhatsApp enquiries built in — delivered in about 20 days.',
    from: 'From ₹5,999',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
      </>
    ),
  },
  {
    id: 'erp',
    title: 'ERP Software',
    text: 'A custom ERP for billing, stock and operations. Own it outright or subscribe monthly by team size.',
    from: 'From ₹1,999 / month',
    icon: (
      <>
        <path d="M12 3 3 8l9 5 9-5-9-5Z" />
        <path d="m3 13 9 5 9-5" />
      </>
    ),
  },
  {
    id: 'dm',
    title: 'Digital Marketing',
    text: 'Social pages, posters, reels, Google Business and ad campaigns — with monthly performance reports.',
    from: 'From ₹7,999 / month',
    icon: <path d="M4 20V10m6 10V4m6 16v-7m5 7H2" />,
  },
  {
    id: 'custom',
    title: 'Custom Business Solutions',
    text: 'Android apps, SAP consulting, database management and AI/ML — shaped around how your business works.',
    from: 'Quote on request',
    icon: (
      <>
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </>
    ),
  },
]

export default function Home() {
  const [paused, setPaused] = useState(false)
  const average = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <div className="home">
      {/* ------------------------------ Hero ------------------------------ */}
      <section className="hero">
        <div className="hero-texture futuristic-pattern" aria-hidden="true">
          <span className="ripple-overlay" />
        </div>

        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Next generation · Limitless solutionz</p>
            <h1>
              We build the digital engine behind <span className="grad">growing businesses.</span>
            </h1>
            <p className="hero-sub">
              Websites in 20 days, custom ERP in 4 months, and marketing that keeps your brand visible — NXT GENZ designs,
              builds and grows the digital side of your business, with prices published upfront.
            </p>

            <div className="hero-cta">
              <Link className="btn btn--primary" to="/pricing">
                View pricing
              </Link>
              <a className="btn btn--ghost" href={waLink('Hi NXT GENZ, I would like to discuss a project.')} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </div>

            <ul className="hero-chips" aria-label="What we do">
              <li>Web Development</li>
              <li>ERP</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="ring ring-a" />
            <div className="ring ring-b" />
            <div className="hero-disc">
              <img src="/images/logo-mark.png" alt="" width="300" height="213" />
            </div>
            <span className="pill pill-1">20-day websites</span>
            <span className="pill pill-2">4-month ERP</span>
            <span className="pill pill-3">1-week onboarding</span>
          </div>
        </div>
      </section>

      {/* ----------------------- Stats card (Uiverse · naveenkumarr-onyx) ----------------------- */}
      <section className="wrap stats-wrap" aria-label="NXT GENZ at a glance">
        <Reveal className="stats-card">
          {stats.map((s) => (
            <div className="stats-item" key={s.id}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path d={statIcons[s.id]} fill="currentColor" />
              </svg>
              <span className="quantity">{s.qty}</span>
              <span className="text">{s.label}</span>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ------------------------------ Services ------------------------------ */}
      <section className="section home-services">
        <div className="wrap">
          <Reveal className="head-row">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="section-title">Everything your business needs to grow online</h2>
            </div>
            <Link to="/services" className="btn btn--ghost">
              Explore all services
            </Link>
          </Reveal>

          <div className="svc-grid">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 90} className="svc-card">
                <span className="svc-no">0{i + 1}</span>
                <span className="svc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {s.icon}
                  </svg>
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="svc-foot">
                  <strong>{s.from}</strong>
                  <Link to="/services" aria-label={`Learn more about ${s.title}`}>
                    Learn more →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ Offer (Uiverse · Javierrocadev discount card) ------------------------------ */}
      <section className="section offer">
        <div className="wrap offer-grid">
          <Reveal className="offer-copy">
            <p className="eyebrow">Launch offer</p>
            <h2 className="section-title">Save {offer.percent}% on websites &amp; digital marketing</h2>
            <p className="section-lead">
              Start a new website or a digital marketing plan with NXT GENZ and the {offer.percent}% offer is applied to your
              quote. Mention code <strong>{offer.code}</strong> when you contact us.
            </p>
            <div className="hero-cta">
              <Link className="btn btn--primary" to="/pricing#offer">
                See offer details
              </Link>
              <Link className="btn btn--ghost" to="/contact?offer=1">
                Claim it now
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="offer-visual">
            <div className="disc-card">
              <svg
                className="disc-bag"
                height="100"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 100 100"
                width="100"
                aria-hidden="true"
              >
                <path
                  d="M65.8,46.1V30.3a15.8,15.8,0,1,0-31.6,0V46.1M22.4,38.2H77.6l4,47.3H18.4Z"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                />
              </svg>
              <div className="disc-top">
                <p className="disc-title">Discount</p>
                <p className="disc-upto">Up to</p>
              </div>
              <span className="disc-pct">{offer.percent}%</span>
              <Link to="/contact?offer=1" className="disc-btn">
                Claim offer
              </Link>
              <p className="disc-note">*On website &amp; digital marketing plans</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ Reviews (Uiverse · musashi-13 3D ring) ------------------------------ */}
      <section className="section reviews">
        <div className="wrap reviews-head">
          <p className="eyebrow">Client reviews</p>
          <h2 className="section-title">Trusted by businesses across Tiruchirappalli</h2>
          <p className="section-lead">
            <span className="avg">★ {average}</span> average from {reviews.length} reviews. Hover (or tap) the ring to pause it and read.
          </p>
        </div>

        <div className={`ring-stage ${paused ? 'is-paused' : ''}`}>
          {/* Visual ring — hidden from screen readers; the list below carries the same content. */}
          <div className="card-3d" style={{ '--count': reviews.length }} aria-hidden="true">
            {reviews.map((r, i) => (
              <div className="ring-card" style={{ '--i': i }} key={r.name}>
                <span className="stars">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</span>
                <p className="quote">“{r.text}”</p>
                <div className="who">
                  <strong>{r.name}</strong>
                  <span>{r.area.replace(', Tiruchirappalli', '')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ul className="sr-only">
          {reviews.map((r) => (
            <li key={r.name}>
              {r.name}, {r.area}: {r.rating} out of 5 stars. {r.text}
            </li>
          ))}
        </ul>

        <div className="wrap ring-controls">
          <button type="button" className="btn btn--ghost" onClick={() => setPaused((p) => !p)} aria-pressed={paused}>
            {paused ? '▶ Play reviews' : '❚❚ Pause reviews'}
          </button>
        </div>
      </section>

      {/* ------------------------------ CTA ------------------------------ */}
      <section className="cta">
        <div className="cta-texture futuristic-pattern" aria-hidden="true">
          <span className="ripple-overlay" />
        </div>
        <Reveal className="wrap cta-inner">
          <h2>Ready to build something limitless?</h2>
          <p>Tell us what you need — a website, an ERP or a marketing plan — and we will take it from there.</p>
          <div className="hero-cta">
            <Link className="btn btn--primary" to="/contact">
              Start a project
            </Link>
            <a className="btn btn--ghost" href={`tel:${company.phoneTel}`}>
              Call {company.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
