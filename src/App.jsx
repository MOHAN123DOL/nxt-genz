import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

// Start every page at the top when the route changes.
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Wait a tick so the target section has rendered, then scroll to it.
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 60)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
    return undefined
  }, [pathname, hash])
  return null
}

// Same filter as the Uiverse original, with the lighting constants softened so text on top of the texture stays readable.
// SVG filter used by the `.futuristic-pattern` texture (Uiverse · 3pple10). Defined once for the whole site.
function TextureFilter() {
  return (
    <svg className="texture-filter" aria-hidden="true" focusable="false">
      <filter id="advanced-texture">
        <feTurbulence type="fractalNoise" baseFrequency="0.009" numOctaves="5" result="noise" />
        <feSpecularLighting
          in="noise"
          surfaceScale="5"
          specularConstant="0.7"
          specularExponent="20"
          lightingColor="#FDFDF1"
          result="specular"
        >
          <fePointLight x="50" y="50" z="600" />
        </feSpecularLighting>
        <feComposite in="specular" in2="SourceGraphic" operator="in" result="litNoise" />
        <feBlend in="SourceGraphic" in2="litNoise" mode="overlay" />
      </filter>
    </svg>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <TextureFilter />
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
