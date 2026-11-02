import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { projectCategories, projects } from '../data/projects'
import './Projects.css'

const categoryService = {
  Website: 'Website Development',
  ERP: 'ERP Software',
  'Digital Marketing': 'Digital Marketing',
  'Personal Branding': 'Personal Branding',
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <div className="projects">
      <section className="pj-hero">
        <div className="wrap pj-hero-inner">
          <p className="eyebrow">Projects</p>
          <h1>
            Work that <span className="grad">moves businesses forward.</span>
          </h1>
          <p className="pj-lead">
            A look at the kinds of websites, ERP systems and marketing campaigns we deliver. Pick a category, then ask us for a
            similar build.
          </p>

          <div className="pj-filters" role="group" aria-label="Filter projects by category">
            {projectCategories.map((c) => (
              <button
                key={c}
                type="button"
                className={c === filter ? 'is-active' : ''}
                aria-pressed={c === filter}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section pj-list">
        <div className="wrap pj-grid">
          {shown.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 70} className="pj-cell">
              {/* Project card — Uiverse · andrew-demchenk0 */}
              <article className="proj-card">
                <div className={`proj-card__img cat-${p.tab}`}>
                  <span className="proj-chip">{p.category}</span>
                  <span className="proj-initial" aria-hidden="true">
                    {p.title.charAt(0)}
                  </span>
                </div>
                <div className="proj-card__descr-wrapper">
                  <h2 className="proj-card__title">{p.title}</h2>
                  <p className="proj-card__descr">{p.summary}</p>
                  <ul className="proj-tags">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <div className="proj-card__links">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="proj-svg" aria-hidden="true">
                        <path d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z" />
                      </svg>
                      <Link className="proj-link" to={`/contact?service=${encodeURIComponent(categoryService[p.category])}`}>
                        Get similar
                      </Link>
                    </div>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="proj-svg" aria-hidden="true">
                        <path d="M21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
                      </svg>
                      <Link className="proj-link" to={`/pricing?tab=${p.tab}`}>
                        Pricing
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pj-cta">
        <Reveal className="wrap pj-cta-inner">
          <h2>Your project could be next.</h2>
          <p>Share what you want to build and we will reply with the right package, price and timeline.</p>
          <Link to="/contact" className="btn btn--primary">
            Start a project
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
