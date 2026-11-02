import { useSearchParams, Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { customPricing, faqs, plans, priceTabs } from '../data/pricing'
import { offer, waLink } from '../data/company'
import './Pricing.css'

const checkPath =
  'M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z'

const rocketPath =
  'M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z'

// Plan card — Uiverse · abrahamcalsin
function PlanCard({ plan, service }) {
  const query = new URLSearchParams({ service, plan: `${plan.name} (${plan.label})` }).toString()
  return (
    <div className={`plan-card ${plan.popular ? 'is-popular' : ''}`}>
      {(plan.popular || plan.badge) && <span className="plan-badge">{plan.badge || 'MOST POPULAR'}</span>}
      <h2>
        {plan.name}
        <span>{plan.label}</span>
      </h2>
      <div className="etiquet-price">
        <p>
          {plan.price ? (
            <>
              <sup>₹</sup>
              {plan.price}
            </>
          ) : (
            plan.priceText
          )}
          <small>{plan.suffix}</small>
        </p>
        <div />
      </div>
      {plan.note && <p className="plan-note">{plan.note}</p>}
      <div className="benefits-list">
        <ul>
          {plan.perks.map((perk) => (
            <li key={perk}>
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d={checkPath} />
              </svg>
              <span>{perk}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="button-get-plan">
        <Link to={`/contact?${query}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-rocket" aria-hidden="true">
            <path d={rocketPath} />
          </svg>
          <span>START PROJECT</span>
        </Link>
      </div>
    </div>
  )
}

export default function Pricing() {
  const [params, setParams] = useSearchParams()
  const requested = params.get('tab')
  const activeId = priceTabs.some((t) => t.id === requested) ? requested : 'web'
  const tab = priceTabs.find((t) => t.id === activeId)
  const list = plans[activeId]

  return (
    <div className="pricing">
      {/* ------------------------------ Hero ------------------------------ */}
      <section className="pr-hero">
        <div className="wrap pr-hero-inner">
          <p className="eyebrow">Pricing</p>
          <h1>
            Clear prices. <span className="grad">No guesswork.</span>
          </h1>
          <p className="pr-lead">
            Choose a website package, an ERP model, a digital marketing plan or a personal branding plan. All prices are in
            Indian rupees and exclusive of GST.
          </p>
        </div>
      </section>

      {/* ------------------------------ Plans ------------------------------ */}
      <section className="section pr-plans">
        <div className="wrap">
          <div className="pr-tabs" role="tablist" aria-label="Pricing categories">
            {priceTabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={t.id === activeId}
                aria-controls="plans-panel"
                className={t.id === activeId ? 'is-active' : ''}
                onClick={() => setParams({ tab: t.id }, { replace: true })}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div id="plans-panel" role="tabpanel" aria-labelledby={`tab-${activeId}`}>
            <div className="pr-panel-head">
              <h2 className="section-title">{tab.heading}</h2>
              <p>{tab.blurb}</p>
            </div>

            <div className="plan-grid" key={activeId}>
              {list.map((plan) => (
                <PlanCard key={plan.id} plan={plan} service={tab.contactService} />
              ))}
            </div>

            {activeId === 'erp' && (
              <p className="pr-note">
                Subscription tiers are fixed steps (3 / 8 / 11 users). Contact us for custom team sizes. ERP is built in about 4
                months.
              </p>
            )}
            {activeId === 'web' && <p className="pr-note">Websites follow a 20-day development timeline. Custom builds get a timeline after requirement review.</p>}
          </div>

          {(activeId === 'dm' || activeId === 'branding') && (
            <div className="custom-rates">
              <h3>Customisation pricing</h3>
              <p>Mix and match individual services outside the fixed plans.</p>
              <dl>
                {customPricing.map((c) => (
                  <div key={c.service}>
                    <dt>{c.service}</dt>
                    <dd>{c.rate}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </section>

      {/* ------------------------------ Offer ticket (Uiverse · zeeshan_2112) ------------------------------ */}
      <section className="section pr-offer" id="offer">
        <div className="wrap pr-offer-grid">
          <Reveal className="pr-offer-copy">
            <p className="eyebrow">Special offer</p>
            <h2 className="section-title">{offer.percent}% off websites &amp; digital marketing</h2>
            <p className="section-lead">
              Start a new website or any digital marketing plan and your {offer.percent}% offer is applied to the quote. Tap the
              pass to claim it on WhatsApp — it already includes your code.
            </p>
            <ul className="offer-points">
              <li>Applies to Website Development &amp; Digital Marketing</li>
              <li>
                Mention code <strong>{offer.code}</strong>
              </li>
              <li>Prices shown are exclusive of GST</li>
            </ul>
          </Reveal>

          <Reveal delay={120} className="pr-ticket">
            <a
              href={waLink(`Hi NXT GENZ, I would like to claim the ${offer.percent}% offer (code ${offer.code}).`)}
              target="_blank"
              rel="noreferrer"
              className="ticket-canvas"
              aria-label={`Claim the ${offer.percent} percent offer on WhatsApp`}
            >
              <div className="ticket-wrapper">
                <div className="ticket">
                  <div className="t-main">
                    <div className="t-content">
                      <div className="t-header">
                        <div className="t-logo">
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          NXT GENZ
                        </div>
                        <div className="t-type">Offer Pass</div>
                      </div>
                      <div className="t-title">
                        Launch
                        <br />
                        Offer '26
                      </div>
                      <div className="t-subtitle">Next Generation, Limitless Solutionz</div>
                      <div className="t-details">
                        <div className="t-detail-item">
                          <span className="t-label">Offer</span>
                          <span className="t-value">{offer.percent}% OFF</span>
                        </div>
                        <div className="t-detail-item">
                          <span className="t-label">Code</span>
                          <span className="t-value">{offer.code}</span>
                        </div>
                        <div className="t-detail-item">
                          <span className="t-label">Applies to</span>
                          <span className="t-value">Websites</span>
                        </div>
                        <div className="t-detail-item">
                          <span className="t-label">Also on</span>
                          <span className="t-value">Digital Marketing</span>
                        </div>
                      </div>
                    </div>
                    <div className="t-perforation" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', transform: 'translateY(50%)' }}>
                      <div className="t-perf-line" />
                    </div>
                  </div>
                  <div className="t-stub">
                    <div className="t-barcode-container">
                      <div className="t-barcode" />
                      <div className="t-barcode-id">NXTGENZ-{offer.percent}-OFF</div>
                    </div>
                    <div className="t-admit">
                      <div className="t-admit-text">Save</div>
                      <div className="t-admit-num">{offer.percent}%</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ FAQ ------------------------------ */}
      <section className="section pr-faq">
        <div className="wrap pr-faq-grid">
          <Reveal>
            <p className="eyebrow">Good to know</p>
            <h2 className="section-title">Pricing questions</h2>
            <p className="section-lead">Still unsure? Message us and we will help you pick the right plan.</p>
            <Link to="/contact" className="btn btn--dark">
              Ask a question
            </Link>
          </Reveal>
          <Reveal delay={100} className="faq-list">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>
    </div>
  )
}
