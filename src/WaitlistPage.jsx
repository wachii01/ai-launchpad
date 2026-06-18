import { useState, useEffect } from 'react'

function WaitlistPage() {
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => els.forEach((el) => observer.unobserve(el))
  }, [])

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://elewachi.herokuapp.com/webhook/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* ═══ HEADER ═══ */}
      <header className="site-header">
        <a className="brand" href="/" aria-label="Back to AI Automation Launchpad">
          <img src="/assets/wachi-logo.png" alt="Wachi Automations" className="brand-logo" />
        </a>
        <div className="reg-badge" aria-label="Cohort 2 waitlist">
          <span className="pulse-dot"></span>
          Cohort 2 — Coming Soon
        </div>
        <a className="nav-cta wl-nav-back" href="/">
          ← Main Page
        </a>
      </header>

      <main>
        {/* ═══ HERO ═══ */}
        <section className="wl-hero dark-section">
          <div className="wl-hero-inner">
            <div className="reveal">
              <div className="start-date-badge">🔥 Cohort 1.0 is underway — Cohort 2 is next</div>
              <h1 className="wl-title">
                20 slots. Cohort 1 sold out.<br />
                <em>Be first in line for Cohort 2.</em>
              </h1>
              <p className="wl-subtitle">
                AI Automation Launchpad teaches you the exact skill that generated ₦8 Million from scratch — no prior experience required. Waitlist members get priority access before slots open to the public.
              </p>
              <div className="info-cards wl-info-cards">
                <div className="info-card">
                  <span className="info-label">Program</span>
                  <strong>4 Weeks</strong>
                </div>
                <div className="info-card">
                  <span className="info-label">Sessions</span>
                  <strong>3× Weekly, 8 PM</strong>
                </div>
                <div className="info-card">
                  <span className="info-label">Cohort Size</span>
                  <strong>20 Slots Max</strong>
                </div>
                <div className="info-card">
                  <span className="info-label">Projects</span>
                  <strong>5 Real Systems</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FORM SECTION ═══ */}
        <section className="wl-form-section">
          <div className="wl-form-wrap">
            {status === 'success' ? (
              <div className="wl-success reveal">
                <div className="wl-success-icon">✓</div>
                <h2>You&apos;re on the list.</h2>
                <p>
                  We&apos;ll reach out when Cohort 2 registration opens — you&apos;ll get first access before anyone else. Keep an eye on your WhatsApp and email.
                </p>
                <a href="/" className="primary-button btn-premium wl-back-btn">
                  <span className="btn-text">← Back to Main Page</span>
                </a>
              </div>
            ) : (
              <div className="wl-card reveal">
                <div className="wl-card-label">Cohort 2 — Early Access</div>
                <h2 className="wl-card-title">Save your spot now.</h2>
                <p className="wl-card-desc">
                  Leave your details and we&apos;ll notify you the moment Cohort 2 registration opens — before slots go public.
                </p>

                <form className="wl-form" onSubmit={handleSubmit} noValidate>
                  <div className="wl-field">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                      autoComplete="name"
                    />
                  </div>

                  <div className="wl-field">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                      autoComplete="email"
                    />
                  </div>

                  <div className="wl-field">
                    <label htmlFor="whatsapp">WhatsApp Number</label>
                    <input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      placeholder="e.g. 08012345678"
                      value={form.whatsapp}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                      autoComplete="tel"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="wl-error">Something went wrong. Please check your connection and try again.</p>
                  )}

                  <button
                    type="submit"
                    className="primary-button btn-premium wl-submit"
                    disabled={status === 'loading'}
                  >
                    <span className="btn-text">
                      {status === 'loading' ? 'Saving your spot…' : 'Join the Waitlist'}
                    </span>
                    {status !== 'loading' && <span className="btn-arrow">→</span>}
                  </button>
                </form>

                <p className="trust-note wl-trust">
                  No spam. We only message when Cohort 2 opens.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ═══ WHY SECTION ═══ */}
        <section className="wl-why dark-section">
          <div className="wl-why-inner">
            <div className="section-header centered reveal">
              <span className="section-label">— What You&apos;re Signing Up For</span>
              <h2>The skill that paid me <em>₦8 Million.</em><br />Taught live, in 4 weeks.</h2>
              <p className="section-desc">
                This isn&apos;t a course. It&apos;s a live mentorship where you build 5 real AI automation systems — the kind businesses understand, need, and pay for. No prior experience required.
              </p>
            </div>

            <div className="wl-pillars reveal">
              <div className="wl-pillar">
                <span className="wl-pillar-icon">⚡</span>
                <strong>Live Sessions</strong>
                <p>3× weekly at 8 PM. Real-time building with direct feedback — not pre-recorded slides you&apos;ll never finish.</p>
              </div>
              <div className="wl-pillar">
                <span className="wl-pillar-icon">🛠</span>
                <strong>5 Portfolio Projects</strong>
                <p>Leave with real systems you can demo to businesses — not just a certificate that says you watched a video.</p>
              </div>
              <div className="wl-pillar">
                <span className="wl-pillar-icon">💰</span>
                <strong>Client-Ready Skills</strong>
                <p>Acquisition guide, pricing templates, and how to land your first paying client after the cohort ends.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ BOTTOM CTA BAND ═══ */}
        <section className="wl-bottom-cta">
          <div className="wl-bottom-cta-inner reveal">
            <p className="wl-bottom-cta-text">
              Cohort 1 filled up in days. <strong>Don&apos;t miss Cohort 2.</strong>
            </p>
            <a
              href="#form-section"
              className="primary-button btn-premium"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('.wl-form-section')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className="btn-text">Join the Waitlist</span>
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="site-footer">
        <span>AI Automation Launchpad — Built by Elewachi Emmanuel</span>
        <a href="/">launchpad.elewachi.me</a>
      </footer>
    </>
  )
}

export default WaitlistPage
