import { useState, useEffect } from 'react'

function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)
  const [stickyVisible, setStickyVisible] = useState(false)

  // Scroll Reveal Observer
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            // Option: unobserve once revealed to keep it static
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    revealElements.forEach((el) => {
      observer.observe(el)
    })

    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  // Sticky Mobile CTA Observer
  useEffect(() => {
    const heroSection = document.querySelector('.hero')
    if (!heroSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setStickyVisible(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    observer.observe(heroSection)

    return () => {
      observer.unobserve(heroSection)
    }
  }, [])

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  const faqData = [
    {
      question: 'Do I need to be a programmer?',
      answer: 'No. You need commitment, a laptop or reliable access to one, internet, and the willingness to practice. The cohort focuses on practical automation workflows and client-ready systems.'
    },
    {
      question: 'Will I get recordings?',
      answer: 'The core experience is live because accountability matters. Recordings or recap materials can support revision, but do not treat this like another course to hoard.'
    },
    {
      question: 'Can I get clients immediately after?',
      answer: 'The mentorship gives you systems, demos, and positioning. Getting clients still requires outreach and follow-through, but you will no longer be selling empty confidence.'
    },
    {
      question: 'What happens after I pay?',
      answer: 'Pay through Nestuge, then send your payment proof on WhatsApp to 07038212635 so your slot can be confirmed and onboarding details sent to you.'
    }
  ]

  return (
    <>
      {/* ═══ NAVBAR ═══ */}
      <header className="site-header" id="top">
        <a className="brand" href="#top" aria-label="AI Automation Launchpad home">
          <span className="brand-mark">AI</span>
          <span>Automation Launchpad</span>
        </a>
        <div className="reg-badge" aria-label="Enrollment status">
          <span className="pulse-dot"></span>
          Enrollment Open
        </div>
        <a className="nav-cta" href="https://nestuge.com/ai_launchpad" target="_blank" rel="noopener noreferrer">
          Register ₦50,000
        </a>
      </header>

      <main>
        {/* ═══ HERO ═══ */}
        <section className="hero dark-section">
          <div className="hero-inner">
            <div className="hero-copy reveal">
              <span className="tag">Live 4-Week Mentorship</span>
              <h1>
                Stop watching AI automation tutorials. Build systems businesses <em>can pay you for.</em>
              </h1>
              <p className="hero-lead">
                If you have been saving videos, jumping between tools, and wondering whether you are on the right track — this is the guided cohort that turns the confusion into five client-ready portfolio systems.
              </p>
              <div className="info-cards">
                <div className="info-card">
                  <span className="info-label">Duration</span>
                  <strong>4 Weeks</strong>
                </div>
                <div className="info-card">
                  <span className="info-label">Schedule</span>
                  <strong>3x Weekly, 8 PM</strong>
                </div>
                <div className="info-card">
                  <span className="info-label">Cohort Size</span>
                  <strong>20 Slots Only</strong>
                </div>
              </div>
              <div className="hero-actions">
                <a className="primary-button" href="https://nestuge.com/ai_launchpad" target="_blank" rel="noopener noreferrer">
                  Pay ₦50,000 to Secure Your Slot
                </a>
              </div>
            </div>
            <aside className="hero-panel reveal" aria-label="Mentorship flyer">
              <img src="/assets/ai-automation-launchpad.jpeg" alt="AI Automation Launchpad mentorship flyer with Elewachi Emmanuel" />
            </aside>
          </div>
        </section>

        {/* ═══ PROOF / WINS SECTION ═══ */}
        <section className="section light-section" aria-labelledby="proof-title">
          <div className="section-inner">
            <div className="section-header centered">
              <span className="section-label">— Real Results</span>
              <h2 id="proof-title">AI automation isn't a future trend. It pays <em>right now.</em></h2>
              <p className="section-desc">
                I don't just teach workflow architecture. I build these systems for real clients worldwide every single day. Here is a glimpse of what that looks like in practice.
              </p>
            </div>
            
            <div className="proof-grid">
              {/* Win 1: USDT Payment */}
              <div className="proof-card reveal">
                <div>
                  <h3>A Single Automated Workflow = $500 Client Payment</h3>
                  <p>
                    A transaction screenshot from <strong>this month, June 2026</strong>, showing a <strong>$500 USDT</strong> payment sent by a client for a single automation system. Real businesses have serious bottlenecks—and they are glad to pay premium rates when you can design workflows that eliminate them.
                  </p>
                </div>
                <div className="proof-img-container">
                  <img src="/assets/win-usdt.png" alt="WhatsApp payment screenshot showing 500 USDT transfer" />
                </div>
              </div>

              {/* Win 2: Last 3 Months Income */}
              <div className="proof-card full-width reveal">
                <h3>Consistent Monthly Cash Flow (₦850k - ₦920k+)</h3>
                <p>
                  This isn't a side gig where you make money once and wonder what is next. Because businesses need continuous optimization, they stay with you. Here is the income generated directly from my automation services over March, April, and May 2026.
                </p>
                <div className="proof-three-months">
                  <div className="month-stat-card">
                    <img src="/assets/win-mar.png" alt="March 2026 income statement" />
                  </div>
                  <div className="month-stat-card">
                    <img src="/assets/win-apr.png" alt="April 2026 income statement" />
                  </div>
                  <div className="month-stat-card">
                    <img src="/assets/win-may.png" alt="May 2026 income statement" />
                  </div>
                </div>
              </div>

              {/* Win 3: Monitor Gift */}
              <div className="proof-card reveal">
                <div>
                  <h3>How Clients Treat You When You deliver massive value</h3>
                  <p>
                    A client in Thailand asked about my screen setup, and I told him I was writing code on a 12" laptop screen. He laughed, told me I was 'suffering,' and immediately sent extra funds to buy a brand new monitor so I could work comfortably. When you solve high-value problems, you cease to be a "freelancer" and become an indispensable partner.
                  </p>
                </div>
                <div className="proof-img-container">
                  <img src="/assets/win-monitor.png" alt="Twitter tweet showing client monitor gift and setup" />
                </div>
              </div>
            </div>

            {/* Transition CTA block: "This can be you" */}
            <div className="proof-cta reveal" style={{ marginTop: '48px', textAlign: 'center', padding: '40px 30px', border: '1px solid rgba(249, 115, 22, 0.2)', background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.06), rgba(249, 115, 22, 0.01))' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', color: 'var(--white)', fontWeight: 800, marginBottom: '12px' }}>
                This can be your reality six months from now.
              </h3>
              <p style={{ maxWidth: '700px', margin: '0 auto 20px', color: 'var(--text-light-muted)', fontSize: '0.98rem', lineHeight: 1.75 }}>
                There is nothing special about me—I simply learned how to identify business bottlenecks and architect workflows that solve them. When you build systems that save businesses hundreds of hours, they will pay you in dollars, buy you monitors, and treat you like a partner. If you are tired of saving tutorials and ready to start earning, <strong>this cohort is your path to getting there.</strong>
              </p>
              <a className="primary-button" href="https://nestuge.com/ai_launchpad" target="_blank" rel="noopener noreferrer" style={{ textTransform: 'none' }}>
                Let me start building my own wins
              </a>
            </div>
          </div>
        </section>

        {/* ═══ PAIN SECTION ═══ */}
        <section className="section dark-section" aria-labelledby="pain-title">
          <div className="section-inner">
            <div className="section-header split-header">
              <div>
                <span className="section-label">— The Problem</span>
                <h2 id="pain-title">The hard part is not finding more content. It is knowing what to <em>do next.</em></h2>
              </div>
              <p className="section-desc">
                The comments were clear: people are overwhelmed, learning alone, losing focus, unsure if they are on the right track, and still wondering how to get the first client.
              </p>
            </div>
            <div className="pain-grid">
              <article className="pain-card reveal">
                <span className="card-icon">✗</span>
                <h3>No proven order</h3>
                <p>Most courses throw tools at you. This cohort gives you a sequence: understand the business problem, design the workflow, build the system, test it, demo it, and package it for clients.</p>
              </article>
              <article className="pain-card reveal">
                <span className="card-icon">✗</span>
                <h3>Learning alone</h3>
                <p>You are not left with YouTube, ChatGPT, and vibes. You get live sessions, direct guidance, accountability, and feedback while you build.</p>
              </article>
              <article className="pain-card reveal">
                <span className="card-icon">✗</span>
                <h3>Confusion at the start</h3>
                <p>The first phase is where many people quit. We slow it down, connect the dots, and help you understand why each automation step matters.</p>
              </article>
              <article className="pain-card reveal">
                <span className="card-icon">✗</span>
                <h3>No client path</h3>
                <p>Building is only half of the work. You will learn how to position these systems, explain value, run demos, and approach businesses that already need automation.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ═══ BEFORE / AFTER ═══ */}
        <section className="section light-section" aria-label="Before and after the mentorship">
          <div className="section-inner">
            <div className="ba-grid">
              <div className="ba-col ba-before reveal">
                <h3>Before the Launchpad</h3>
                <ul>
                  <li><span className="x-mark">✗</span> Saving tutorials you never finish</li>
                  <li><span className="x-mark">✗</span> Jumping between tools with no direction</li>
                  <li><span className="x-mark">✗</span> No portfolio, no demos, no confidence</li>
                  <li><span className="x-mark">✗</span> Wondering how to get your first client</li>
                  <li><span className="x-mark">✗</span> Losing motivation learning alone</li>
                </ul>
              </div>
              <div className="ba-col ba-after reveal">
                <h3>After the Launchpad</h3>
                <ul>
                  <li><span className="check-mark">✓</span> Five deployable, client-ready systems</li>
                  <li><span className="check-mark">✓</span> Clear workflow architecture skills</li>
                  <li><span className="check-mark">✓</span> Confident demos you can show businesses</li>
                  <li><span className="check-mark">✓</span> Client acquisition strategy and positioning</li>
                  <li><span className="check-mark">✓</span> Real mentorship and accountability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROMISE BAND ═══ */}
        <section className="section promise-band" aria-label="Mentorship promise">
          <div className="section-inner">
            <blockquote className="reveal">
              <p>"I automated a fully functional email workflow that processed about 2000+ mails for a conference. It was my first contract as an AI Automation Engineer and it was successful."</p>
              <cite>— Student result shared publicly</cite>
            </blockquote>
          </div>
        </section>

        {/* ═══ PROJECTS ═══ */}
        <section id="projects" className="section dark-section" aria-labelledby="projects-title">
          <div className="section-inner">
            <div className="section-header centered">
              <span className="section-label">— Portfolio-Ready Systems</span>
              <h2 id="projects-title">You will build five systems businesses <em>already understand.</em></h2>
              <p className="section-desc">These are not random assignments. They are deployable offers you can demo, improve, and sell after the mentorship.</p>
            </div>
            <div className="project-timeline">
              <article className="timeline-card reveal">
                <div className="timeline-node"><span>01</span></div>
                <div className="timeline-content">
                  <h3>AI Voice Agent</h3>
                  <p>A voice-powered AI that answers customer questions, qualifies leads, and books appointments — even when the business owner is asleep.</p>
                  <div className="card-tags">
                    <span>Voice AI</span>
                    <span>Lead Qualification</span>
                    <span>Appointments</span>
                  </div>
                </div>
              </article>
              <article className="timeline-card reveal">
                <div className="timeline-node"><span>02</span></div>
                <div className="timeline-content">
                  <h3>RAG Chatbot</h3>
                  <p>Train an AI on documents, PDFs, and internal knowledge so it responds like a trained staff member who has read everything.</p>
                  <div className="card-tags">
                    <span>Knowledge Base</span>
                    <span>Document AI</span>
                    <span>Customer Support</span>
                  </div>
                </div>
              </article>
              <article className="timeline-card reveal">
                <div className="timeline-node"><span>03</span></div>
                <div className="timeline-content">
                  <h3>Lead Generation and Outreach Automation</h3>
                  <p>Find prospects, enrich their data, and send personalized outreach automatically so businesses can create more sales conversations.</p>
                  <div className="card-tags">
                    <span>Prospecting</span>
                    <span>Data Enrichment</span>
                    <span>Outreach</span>
                  </div>
                </div>
              </article>
              <article className="timeline-card reveal">
                <div className="timeline-node"><span>04</span></div>
                <div className="timeline-content">
                  <h3>AI Content Pipeline</h3>
                  <p>Turn one idea into blog posts, LinkedIn content, emails, and captions in one workflow — for brands that need consistent content.</p>
                  <div className="card-tags">
                    <span>Content Repurposing</span>
                    <span>Multi-Channel</span>
                    <span>Workflow</span>
                  </div>
                </div>
              </article>
              <article className="timeline-card reveal">
                <div className="timeline-node"><span>05</span></div>
                <div className="timeline-content">
                  <h3>Business Operations Automation</h3>
                  <p>Connect WhatsApp, Airtable, Google Sheets, invoices, order tracking, payment follow-ups, and CRM updates into one smooth system.</p>
                  <div className="card-tags">
                    <span>Operations</span>
                    <span>CRM</span>
                    <span>Integrations</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ═══ MENTORSHIP DETAILS ═══ */}
        <section id="mentorship" className="section light-section" aria-labelledby="mentor-title">
          <div className="section-inner">
            <div className="section-header split-header">
              <div>
                <span className="section-label">— What Makes It Different</span>
                <h2 id="mentor-title">This is a guided build sprint, not a video course you abandon after <em>Module 2.</em></h2>
              </div>
              <p className="section-desc">
                You get a clear roadmap, live teaching, practical assignments, feedback, and the pressure of a small cohort where your progress is visible. The goal is not to consume more content. The goal is to build confidence through finished work.
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-card reveal">
                <span className="feature-icon">⚡</span>
                <h3>Live sessions three times a week</h3>
              </div>
              <div className="feature-card reveal">
                <span className="feature-icon">🗂️</span>
                <h3>Step-by-step workflow architecture</h3>
              </div>
              <div className="feature-card reveal">
                <span className="feature-icon">💼</span>
                <h3>Assignments that become portfolio pieces</h3>
              </div>
              <div className="feature-card reveal">
                <span className="feature-icon">🎯</span>
                <h3>Client acquisition strategy and positioning</h3>
              </div>
              <div className="feature-card reveal">
                <span className="feature-icon">🤝</span>
                <h3>Accountability so focus does not disappear</h3>
              </div>
              <div className="feature-card reveal">
                <span className="feature-icon">🧠</span>
                <h3>Mentorship from someone building these systems for real clients</h3>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WHO THIS IS FOR ═══ */}
        <section className="section dark-section" aria-labelledby="audience-title">
          <div className="section-inner">
            <div className="section-header split-header">
              <div>
                <span className="section-label">— Who This Is For</span>
                <h2 id="audience-title">Built for one type of <em>person.</em></h2>
              </div>
            </div>
            <div className="audience-grid">
              <div className="audience-card reveal">
                <div className="audience-accent"></div>
                <p>You are a beginner who needs the right order of learning before tools start making sense.</p>
              </div>
              <div className="audience-card reveal">
                <div className="audience-accent"></div>
                <p>You are already learning automation but your zeal is fading because the path feels scattered.</p>
              </div>
              <div className="audience-card reveal">
                <div className="audience-accent"></div>
                <p>You want client-ready projects, not certificates that do not prove you can solve a business problem.</p>
              </div>
              <div className="audience-card reveal">
                <div className="audience-accent"></div>
                <p>You want to move from free practice to paid automation work with a clearer offer and demo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ VALUE STACK ═══ */}
        <section className="section light-section" aria-labelledby="value-title">
          <div className="section-inner">
            <div className="section-header centered">
              <span className="section-label">— What You Are Really Paying For</span>
              <h2 id="value-title">The ₦50,000 is not for information. It is for <em>implementation.</em></h2>
            </div>
            <div className="value-stack">
              <div className="value-row reveal">
                <span>Live mentorship</span>
                <strong>₦150k value</strong>
              </div>
              <div className="value-row reveal">
                <span>Five portfolio systems</span>
                <strong>₦250k value</strong>
              </div>
              <div className="value-row reveal">
                <span>Workflow architecture training</span>
                <strong>₦100k value</strong>
              </div>
              <div className="value-row reveal">
                <span>Client acquisition direction</span>
                <strong>₦100k value</strong>
              </div>
              <div className="value-row total reveal">
                <span>Total practical value</span>
                <strong>₦600k+</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ BANK STATEMENT & FUTURE PACING SECTION ═══ */}
        <section className="section dark-section" aria-labelledby="statement-title">
          <div className="section-inner">
            <div className="section-header centered">
              <span className="section-label">— Real Proof</span>
              <h2 id="statement-title">From ₦42 to over ₦8 Million <em>and counting.</em></h2>
              <p className="section-desc">
                I started with just <strong>₦42</strong> last year on this account. I used it to collect only my salary, and I have received over <strong>₦8 Million</strong> from AI Automation and counting...
              </p>
            </div>

            <div className="proof-grid-two-cols">
              {/* Left Column: Moniepoint Statement Card */}
              <div className="proof-card reveal" style={{ gridTemplateColumns: '1fr', height: '100%' }}>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ marginBottom: '24px' }}>
                    This is the direct export of my Moniepoint bank statement summary. Opening balance: <strong>₦42.01</strong>. Total credits received: <strong>₦8,210,214.80</strong>. I used this account solely to collect my AI automation earnings. The numbers don't lie—this is the power of building automated systems that businesses desperately need.
                  </p>
                </div>
                <div className="proof-img-container" style={{ border: '1px solid var(--border-dark)', background: '#fff' }}>
                  <img src="/assets/win-statement.png" alt="Moniepoint bank statement summary showing over 8 million naira credits" style={{ width: '100%', maxHeight: '420px', objectFit: 'contain' }} />
                </div>
              </div>

              {/* Right Column: Future Pacing Card */}
              <div className="proof-card reveal" style={{ gridTemplateColumns: '1fr', height: '100%', borderLeft: '4px solid var(--orange)' }}>
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ color: 'var(--orange)' }}>Imagine what your life looks like when you hold this leverage:</h3>
                  <p style={{ marginBottom: '24px' }}>
                    Building AI automation isn't just about the bank alerts. It's about the lifestyle shift and absolute freedom that comes with a high-value skill:
                  </p>
                  
                  <ul style={{ listStyle: 'none', display: 'grid', gap: '20px' }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span className="check-mark" style={{ marginTop: '0px' }}>✓</span>
                      <div>
                        <strong style={{ display: 'block', color: 'var(--white)', fontSize: '0.95rem', marginBottom: '2px' }}>Earn in Strong Currency (USD / USDT)</strong>
                        <span style={{ fontSize: '0.88rem', color: 'var(--text-light-muted)' }}>Escape local inflation completely. Work with global business owners who think in dollars and are glad to pay premium rates.</span>
                      </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span className="check-mark" style={{ marginTop: '0px' }}>✓</span>
                      <div>
                        <strong style={{ display: 'block', color: 'var(--white)', fontSize: '0.95rem', marginBottom: '2px' }}>Absolute Schedule Freedom</strong>
                        <span style={{ fontSize: '0.88rem', color: 'var(--text-light-muted)' }}>Wake up without alarm panic. Work from your bed, a modern café, or a beach house in Thailand. All you need is a laptop and internet.</span>
                      </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span className="check-mark" style={{ marginTop: '0px' }}>✓</span>
                      <div>
                        <strong style={{ display: 'block', color: 'var(--white)', fontSize: '0.95rem', marginBottom: '2px' }}>Workflows that run 24/7</strong>
                        <span style={{ fontSize: '0.88rem', color: 'var(--text-light-muted)' }}>Build systems that do the heavy lifting. While you sleep, hang out, or travel, your automations are actively processing and saving hours.</span>
                      </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span className="check-mark" style={{ marginTop: '0px' }}>✓</span>
                      <div>
                        <strong style={{ display: 'block', color: 'var(--white)', fontSize: '0.95rem', marginBottom: '2px' }}>Indispensable Partner Status</strong>
                        <span style={{ fontSize: '0.88rem', color: 'var(--text-light-muted)' }}>You cease being a "low-tier freelancer." Clients treat you with respect, consult you as an expert, send you hardware gifts, and pay monthly retainers.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECURE YOUR SLOT (CTA) ═══ */}
        <section className="section light-section cta-section" aria-labelledby="offer-title">
          <div className="section-inner">
            <div className="section-header centered">
              <span className="section-label">— Secure Your Slot</span>
              <h2 id="offer-title">₦50,000 for four weeks of structure, mentorship, systems, and <em>client direction.</em></h2>
              <p className="section-desc">
                That is less than many people lose in a month to data, impulse spending, and random "investments" that never build a skill. One useful automation client can pay it back many times over.
              </p>
            </div>
            <div className="cta-card reveal">
              <span className="cta-meta">Limited Cohort</span>
              <div className="cta-price">₦50,000</div>
              <p className="cta-sub">20 slots only — Small on purpose so people get attention. Once it fills, enrollment closes and the next cohort will cost more.</p>
              <div className="cta-stats">
                <div><strong>20</strong><span>Slots</span></div>
                <div><strong>4</strong><span>Weeks</span></div>
                <div><strong>3x</strong><span>Weekly</span></div>
                <div><strong>5</strong><span>Projects</span></div>
              </div>
              <a className="primary-button cta-primary" href="https://nestuge.com/ai_launchpad" target="_blank" rel="noopener noreferrer">
                Claim Your Slot Now
              </a>
            </div>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section id="faq" className="section dark-section" aria-labelledby="faq-title">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">— Questions</span>
              <h2 id="faq-title">Before you <em>pay.</em></h2>
            </div>
            <div className="faq-list">
              {faqData.map((faq, index) => (
                <div key={index} className={`faq-item reveal ${openFaqIndex === index ? 'open' : ''}`}>
                  <button className="faq-header" onClick={() => toggleFaq(index)} aria-expanded={openFaqIndex === index}>
                    <span>{faq.question}</span>
                    <span className="faq-icon">{openFaqIndex === index ? '−' : '+'}</span>
                  </button>
                  <div className="faq-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="section light-section final-cta" aria-label="Final enrollment call to action">
          <div className="section-inner centered">
            <span className="section-label">— The next six months will pass either way</span>
            <h2>Be the person with working AI automation demos, not the person still saving <em>tutorials.</em></h2>
            <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '40px' }}>
              <a className="primary-button" href="https://nestuge.com/ai_launchpad" target="_blank" rel="noopener noreferrer">
                Enroll for ₦50,000
              </a>
              <a className="secondary-button" href="https://wa.me/2347038212635?text=Hello%20Elewachi%2C%20I%20want%20to%20join%20the%20AI%20Automation%20Launchpad." target="_blank" rel="noopener noreferrer">
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="site-footer">
        <span>AI Automation Launchpad Mentorship 1.0</span>
        <a href="https://nestuge.com/ai_launchpad" target="_blank" rel="noopener noreferrer">nestuge.com/ai_launchpad</a>
      </footer>

      {/* ═══ STICKY MOBILE CTA ═══ */}
      <div className={`sticky-cta ${stickyVisible ? 'visible' : ''}`} aria-label="Sticky enrollment action">
        <span>20 slots · ₦50,000</span>
        <a href="https://nestuge.com/ai_launchpad" target="_blank" rel="noopener noreferrer">Enroll</a>
      </div>
    </>
  )
}

export default App
