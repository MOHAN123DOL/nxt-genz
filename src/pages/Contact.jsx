import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { company, offer, waLink } from '../data/company'
import { socialIcons } from '../data/socialIcons'
import './Contact.css'

const SERVICES = ['Website Development', 'ERP Software', 'Digital Marketing', 'Personal Branding', 'Custom Business Solution']

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  const phone = v.phone.replace(/[\s-]/g, '')
  if (!/^(\+?91)?[6-9]\d{9}$/.test(phone)) e.phone = 'Enter a valid 10-digit Indian mobile number.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Enter a valid email address.'
  if (!v.service) e.service = 'Please choose a service.'
  if (v.message.trim().length < 10) e.message = 'Tell us a little more (at least 10 characters).'
  return e
}

export default function Contact() {
  const [params] = useSearchParams()

  // --- enquiry form -------------------------------------------------------
  const [values, setValues] = useState(() => {
    const plan = params.get('plan')
    const wantsOffer = params.get('offer')
    let message = ''
    if (plan) message = `I am interested in the ${plan} plan.`
    if (wantsOffer) message = `I would like to claim the ${offer.percent}% offer (code ${offer.code}).`
    const service = params.get('service')
    return {
      name: '',
      phone: '',
      email: '',
      service: SERVICES.includes(service) ? service : wantsOffer ? 'Website Development' : '',
      message,
    }
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [sent, setSent] = useState(null) // holds the WhatsApp link after a successful submit

  const setField = (name, value) => {
    const next = { ...values, [name]: value }
    setValues(next)
    if (touched[name]) setErrors((prev) => ({ ...prev, [name]: validate(next)[name] }))
  }

  const blur = (name) => {
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validate(values)[name] }))
  }

  const submit = (ev) => {
    ev.preventDefault()
    const found = validate(values)
    setErrors(found)
    setTouched({ name: true, phone: true, email: true, service: true, message: true })
    const firstBad = Object.keys(found)[0]
    if (firstBad) {
      document.getElementById(`f-${firstBad}`)?.focus()
      return
    }
    const text = [
      'Hi NXT GENZ,',
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Email: ${values.email.trim()}`,
      `Service: ${values.service}`,
      `Message: ${values.message.trim()}`,
    ].join('\n')
    const link = waLink(text)
    setSent(link)
    window.open(link, '_blank', 'noopener')
    setValues({ name: '', phone: '', email: '', service: '', message: '' })
    setTouched({})
    setErrors({})
  }

  // --- feedback card (Uiverse · catraco) ----------------------------------
  const [mood, setMood] = useState(null)
  const [feedback, setFeedback] = useState('')
  const [fbState, setFbState] = useState({ type: 'idle', msg: '' })

  const sendFeedback = () => {
    if (!feedback.trim() && !mood) {
      setFbState({ type: 'error', msg: 'Pick a face or write a few words first.' })
      return
    }
    const subject = 'Feedback for NXT GENZ'
    const body = `Experience: ${mood === 'happy' ? 'Happy' : mood === 'sad' ? 'Not happy' : 'Not selected'}\n\n${feedback.trim()}`
    setFbState({ type: 'ok', msg: 'Thank you! Your email app should open with your feedback ready to send.' })
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setFeedback('')
    setMood(null)
  }

  // --- thank-you envelope (Uiverse · SmookyDev) ---------------------------
  const [envOpen, setEnvOpen] = useState(false)

  const field = (name) => ({
    id: `f-${name}`,
    name,
    value: values[name],
    onChange: (e) => setField(name, e.target.value),
    onBlur: () => blur(name),
    'aria-invalid': errors[name] ? 'true' : 'false',
    'aria-describedby': errors[name] ? `e-${name}` : undefined,
  })

  return (
    <div className="contact">
      {/* ------------------------------ Hero ------------------------------ */}
      <section className="ct-hero">
        <div className="wrap ct-hero-inner">
          <p className="eyebrow">Contact</p>
          <h1>
            Let&apos;s build it <span className="grad">together.</span>
          </h1>
          <p className="ct-lead">
            Choose a website package or an ERP model that fits your team — send us the details and we will take it from there.
          </p>
        </div>
      </section>

      {/* ------------------------------ Form + details ------------------------------ */}
      <section className="section ct-main">
        <div className="wrap ct-grid">
          <Reveal className="ct-info">
            <a className="ct-card" href={waLink('Hi NXT GENZ!')} target="_blank" rel="noreferrer">
              <span className="ct-ico">
                <svg viewBox={socialIcons.whatsapp.viewBox} fill="currentColor" aria-hidden="true">
                  <path d={socialIcons.whatsapp.d} />
                </svg>
              </span>
              <span>
                <small>WhatsApp / Contact us</small>
                <strong>{company.phoneDisplay}</strong>
              </span>
            </a>
            <a className="ct-card" href={`mailto:${company.email}`}>
              <span className="ct-ico">
                <svg viewBox={socialIcons.email.viewBox} fill="currentColor" aria-hidden="true">
                  <path d={socialIcons.email.d} />
                </svg>
              </span>
              <span>
                <small>Email</small>
                <strong>{company.email}</strong>
              </span>
            </a>
            <a className="ct-card" href={company.instagramUrl} target="_blank" rel="noreferrer">
              <span className="ct-ico">
                <svg viewBox={socialIcons.instagram.viewBox} fill="currentColor" aria-hidden="true">
                  <path d={socialIcons.instagram.d} />
                </svg>
              </span>
              <span>
                <small>Instagram</small>
                <strong>{company.instagramHandle}</strong>
              </span>
            </a>

            <div className="ct-qr">
              <img src="/images/qr.png" alt="NXT GENZ QR code" width="116" height="116" />
              <p>
                <strong>Scan to connect</strong>
                <span>{company.tagline}</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="ct-form-wrap">
            {sent ? (
              <div className="ct-success" role="status">
                <span className="tick" aria-hidden="true">
                  ✓
                </span>
                <h2>Thank you — your message is ready!</h2>
                <p>WhatsApp should have opened with your details filled in. Just press send and we will reply soon.</p>
                <div className="ct-success-actions">
                  <a className="btn btn--dark" href={sent} target="_blank" rel="noreferrer">
                    Open WhatsApp again
                  </a>
                  <button type="button" className="btn btn--ghost-dark" onClick={() => setSent(null)}>
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="ct-form" onSubmit={submit} noValidate>
                <h2>Send us your enquiry</h2>

                <div className="row">
                  <label className="fld">
                    <span>Your name</span>
                    <input type="text" autoComplete="name" placeholder="e.g. Karthik R." {...field('name')} />
                    {errors.name && <em id="e-name" role="alert">{errors.name}</em>}
                  </label>
                  <label className="fld">
                    <span>Mobile number</span>
                    <input type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit number" {...field('phone')} />
                    {errors.phone && <em id="e-phone" role="alert">{errors.phone}</em>}
                  </label>
                </div>

                <div className="row">
                  <label className="fld">
                    <span>Email</span>
                    <input type="email" autoComplete="email" placeholder="you@example.com" {...field('email')} />
                    {errors.email && <em id="e-email" role="alert">{errors.email}</em>}
                  </label>
                  <label className="fld">
                    <span>Service</span>
                    <select {...field('service')}>
                      <option value="">Choose a service…</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && <em id="e-service" role="alert">{errors.service}</em>}
                  </label>
                </div>

                <label className="fld">
                  <span>Your message</span>
                  <textarea rows="5" placeholder="Tell us about your business and what you need…" {...field('message')} />
                  {errors.message && <em id="e-message" role="alert">{errors.message}</em>}
                </label>

                <button type="submit" className="btn btn--dark ct-submit">
                  Send on WhatsApp
                  <svg viewBox={socialIcons.whatsapp.viewBox} fill="currentColor" aria-hidden="true">
                    <path d={socialIcons.whatsapp.d} />
                  </svg>
                </button>
                <p className="ct-fine">Your details open in WhatsApp so you can review them before sending.</p>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ Feedback (Uiverse · catraco) ------------------------------ */}
      <section className="section ct-feedback">
        <div className="wrap fb-grid">
          <Reveal className="fb-copy">
            <p className="eyebrow">Your feedback</p>
            <h2 className="section-title">Worked with us? Tell us how we did.</h2>
            <p className="section-lead">Every message is read by the team and helps us improve our next project for you.</p>
          </Reveal>

          <Reveal delay={100} className="fb-wrap">
            <div className="fb-card">
              <h3 className="fb-title">Send Feedback</h3>
              <textarea
                className="fb-text"
                placeholder="Your feedback..."
                aria-label="Your feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <button
                type="button"
                className={`fb-mood ${mood === 'happy' ? 'is-on' : ''}`}
                aria-label="Happy"
                aria-pressed={mood === 'happy'}
                onClick={() => setMood(mood === 'happy' ? null : 'happy')}
              >
                <svg viewBox="0 0 512 512" height="20px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                </svg>
              </button>
              <button
                type="button"
                className={`fb-mood ${mood === 'sad' ? 'is-on' : ''}`}
                aria-label="Not happy"
                aria-pressed={mood === 'sad'}
                onClick={() => setMood(mood === 'sad' ? null : 'sad')}
              >
                <svg viewBox="0 0 512 512" height="20px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                </svg>
              </button>
              <span className="fb-gap" />
              <button type="button" className="fb-send" aria-label="Send feedback" onClick={sendFeedback}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10.11 13.6501L13.69 10.0601" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <p className={`fb-status ${fbState.type}`} role="status">
                {fbState.msg}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ Thank you envelope (Uiverse · SmookyDev) ------------------------------ */}
      <section className="section ct-thanks">
        <div className="wrap thanks-inner">
          <Reveal className="thanks-copy">
            <p className="eyebrow">Thank you</p>
            <h2 className="section-title">Thanks for visiting NXT GENZ</h2>
            <p className="section-lead">Hover or tap the envelope to open your note.</p>
          </Reveal>

          <div className={`envelope ${envOpen ? 'is-open' : ''}`}>
            <div className="env-letter">
              <p className="env-title">Thank You</p>
              <p className="env-line">Thanks for exploring our work</p>
              <p className="env-line env-line--serif">Wishing your business a limitless year!</p>
              <p className="env-sign">NXT GENZ SOLUTIONZ</p>
            </div>
            <button
              type="button"
              className="seal"
              aria-label={envOpen ? 'Close the thank-you note' : 'Open the thank-you note'}
              aria-expanded={envOpen}
              onClick={() => setEnvOpen((o) => !o)}
            >
              NZ
            </button>
            <div className="tp" />
            <div className="lft" />
            <div className="rgt" />
            <div className="btm" />
          </div>
        </div>
      </section>
    </div>
  )
}
