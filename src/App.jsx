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
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    revealElements.forEach((el) => { observer.observe(el) })
    return () => { revealElements.forEach((el) => { observer.unobserve(el) }) }
  }, [])

  // Sticky Mobile CTA Observer
  useEffect(() => {
    const heroSection = document.querySelector('.hero')
    if (!heroSection) return
    const observer = new IntersectionObserver(
      ([entry]) => { setStickyVisible(!entry.isIntersecting) },
      { threshold: 0 }
    )
    observer.observe(heroSection)
    return () => { observer.unobserve(heroSection) }
  }, [])

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  const faqData = [
    {
      question: 'Do I need coding experience?',
      answer: 'No. This is beginner-friendly. You\'ll focus on practical automation systems and the logic will be explained step by step. If you can use a smartphone and follow instructions, you can do this.'
    },
    {
      question: 'What tools will we use?',
      answer: 'Primarily n8n, plus AI APIs (OpenAI/Claude), Google Workspace, WhatsApp Business integrations, Airtable, and other practical business tools. You\'ll learn the tools by building with them — not in isolation.'
    },
    {
      question: 'Will sessions be recorded?',
      answer: 'Yes — recordings will be available to cohort members. But live attendance is strongly advised. The Q&A and real-time feedback is a major part of the value.'
    },
    {
      question: 'Can I join as a total beginner?',
      answer: 'Yes — but you must be willing to show up, complete assignments, and build. This is not passive learning.'
    },
    {
      question: 'What if I can\'t afford a powerful laptop?',
      answer: 'The tools we use are cloud-based. A functional laptop with stable internet is enough to participate and build.'
    },
    {
      question: 'What happens after payment?',
      answer: 'You\'ll receive onboarding details, the class schedule, WhatsApp group access, and a pre-cohort checklist within 24 hours. Send your proof of payment to 07038212635 on WhatsApp.'
    },
    {
      question: 'What will I have at the end?',
      answer: 'Five completed automation projects, a client acquisition guide, workflow architecture knowledge, and the confidence to demo what you built to a real business.'
    },
    {
      question: 'What\'s your refund policy?',
      answer: 'Full refund within 48 hours of payment — no questions asked. After that, no refunds once the cohort begins. If something serious comes up before the start date, you can defer to the next cohort once, free of charge.'
    }
  ]

  const tickerItems = [
    'AI Automation Launchpad',
    'Only 20 Seats',
    'Cohort 1.0',
    'Build Real Systems',
    'Get Client-Ready',
    '₦50,000 Entry',
    '4 Weeks · 3x Weekly · 8PM',
  ]

  return (
    <>
      {/* ═══ SCROLLING TICKER ═══ */}
      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker-item">
              {item} <span className="ticker-dot">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══ NAVBAR ═══ */}
      <header className="site-header" id="top">
        <a className="brand" href="#top" aria-label="Wachi Automations home">
          <img src="/assets/wachi-logo.png" alt="Wachi Automations" className="brand-logo" />
        </a>
        <div className="reg-badge" aria-label="Enrollment status">
          <span className="pulse-dot"></span>
          Enrollment Open
        </div>
        <a className="nav-cta" href="https://nestuge.com/ai_launchpad" target="_blank" rel="noopener noreferrer">
          Register — ₦50,000
        </a>
      </header>

      <main>
        {/* ═══ HERO ═══ */}
        <section className="hero dark-section">
          <div className="hero-inner">
            <div className="hero-copy reveal">
              <span className="tag">Live 4-Week Mentorship &nbsp;·&nbsp; 20 Slots Only</span>
              <h1>
                I built <em>₦8 Million</em> in automation income from scratch.<br />
                This cohort teaches you the exact skill behind it.
              </h1>
              <p className="hero-lead">
                A hands-on 4-week cohort where you stop consuming content and start building real systems — the kind businesses understand, need, and pay for. No prior experience required.
              </p>
              <div className="info-cards">
                <div className="info-card">
                  <span className="info-label">Duration</span>
                  <strong>4 Weeks</strong>
                </div>
                <div className="info-card">
                  <span className="info-label">Sessions</span>
                  <strong>3x Weekly, 8 PM</strong>
                </div>
                <div className="info-card">
                  <span className="info-label">Cohort Size</span>
                  <strong>20 Slots Only</strong>
                </div>
                <div className="info-card">
                  <span className="info-label">Projects</span>
                  <strong>5 Systems</strong>
                </div>
              </div>
              <div className="hero-actions">
                <a className="primary-button btn-premium" href="https://nestuge.com/ai_launchpad" target="_blank" rel="noopener noreferrer" id="hero-cta">
                  <span className="btn-text">Yes, I Want In — ₦50,000</span>
                  <span className="btn-arrow">→</span>
                </a>
              </div>
              <p className="trust-note">Full refund available within 48 hours of payment</p>
            </div>
          </div>
        </section>

        {/* ═══ TRANSITION: HERO → PROOF ═══ */}
        <div className="section-transition">
          <span>Don't take my word for it. Here's what the numbers actually look like.</span>
        </div>

        {/* ═══ PROOF SECTION ═══ */}
        <section className="section light-section" aria-labelledby="proof-title">
          <div className="section-inner">
            <div className="section-header centered">
              <span className="section-label">— Real Results</span>
              <h2 id="proof-title">This skill paid me <em>₦8 Million.</em> I'm teaching it to 20 people.</h2>
              <p className="section-desc">
                I started with ₦42 in a dedicated Moniepoint account I used only for automation income. No salary. No side hustle top-ups. Just the skill you're about to learn. That account now shows <strong style={{ color: 'var(--orange)' }}>₦8,210,214.80</strong> in total credits.
              </p>
            </div>

            <div className="proof-grid">
              {/* Bank Statement */}
              <div className="proof-card full-width reveal">
                <div>
                  <h3>From ₦42 to ₦8,210,214.80 — One Dedicated Automation Account</h3>
                  <p>
                    This is the direct export of my Moniepoint bank statement summary. Opening balance: <strong>₦42.01</strong>. Total credits received: <strong>₦8,210,214.80</strong>. I used this account solely to collect my AI automation earnings — no salary, no transfers in. The numbers don't lie.
                  </p>
                </div>
                <div className="proof-img-container" style={{ background: '#fff' }}>
                  <img src="/assets/win-statement.png" alt="Moniepoint bank statement showing ₦8 million in automation income" />
                </div>
              </div>

              {/* Win 1: USDT Payment */}
              <div className="proof-card reveal">
                <div>
                  <h3>A Single Automated Workflow = $500 Client Payment</h3>
                  <p>
                    A transaction screenshot from <strong>June 2026</strong>, showing a <strong>$500 USDT</strong> payment for a single automation system. Real businesses have serious bottlenecks — and they pay premium rates to anyone who can design workflows that eliminate them.
                  </p>
                </div>
                <div className="proof-img-container">
                  <img src="/assets/win-usdt.png" alt="$500 USDT client payment screenshot" />
                </div>
              </div>

              {/* Win 2: Last 3 Months Income */}
              <div className="proof-card full-width reveal">
                <h3>Consistent Monthly Cash Flow (₦850k – ₦920k+)</h3>
                <p>
                  This isn't a side gig where you make money once and wonder what's next. Because businesses need continuous optimization, they stay with you. Here is the income generated directly from automation services over March, April, and May 2026.
                </p>
                <div className="proof-three-months">
                  <div className="month-stat-card">
                    <img src="/assets/win-mar.png" alt="March 2026 automation income statement" />
                  </div>
                  <div className="month-stat-card">
                    <img src="/assets/win-apr.png" alt="April 2026 automation income statement" />
                  </div>
                  <div className="month-stat-card">
                    <img src="/assets/win-may.png" alt="May 2026 automation income statement" />
                  </div>
                </div>
              </div>

              {/* Win 3: Monitor Gift */}
              <div className="proof-card reveal">
                <div>
                  <h3>How Clients Treat You When You Deliver Massive Value</h3>
                  <p>
                    A client in Thailand asked about my screen setup. I told him I was writing code on a 12" laptop screen. He laughed, told me I was 'suffering,' and immediately sent extra funds to buy a brand new monitor. When you solve high-value problems, you cease to be a "freelancer" and become an indispensable partner.
                  </p>
                </div>
                <div className="proof-img-container">
                  <img src="/assets/win-monitor.png" alt="Client sending monitor gift screenshot" />
                </div>
              </div>
            </div>

            {/* Proof CTA */}
            <div className="proof-cta reveal">
              <h3>This didn't happen because I'm special.</h3>
              <p>
                It happened because businesses have serious bottlenecks and they will pay serious money to anyone who can design workflows that eliminate them. I learned that skill. I'm going to teach it to you.
              </p>
              <a className="primary-button btn-premium" href="https://nestuge.com/ai_launchpad" target="_blank" rel="noopener noreferrer" id="proof-cta">
                <span className="btn-text">Let me start building my own wins</span>
                <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ═══ TRANSITION: PROOF → PROBLEM ═══ */}
        <div className="section-transition">
          <span>But here's what the bank statement doesn't show — the exact problem I had to solve first. And it's the same problem keeping most people stuck.</span>
        </div>

        {/* ═══ PROBLEM SECTION ═══ */}
        <section className="section dark-section" aria-labelledby="pain-title">
          <div className="section-inner">
            <div className="section-header split-header">
              <div>
                <span className="section-label">— The Problem</span>
                <h2 id="pain-title">The hard part is not finding more content. It's knowing what to <em>do next.</em></h2>
              </div>
              <p className="section-desc">
                You already have YouTube. You already have ChatGPT. You already have free resources and saved videos you haven't finished. The real problem is that you don't know what to learn first, what to build next, or how to turn what you're learning into something a business will pay for.
              </p>
            </div>
            <div className="pain-grid">
              <article className="pain-card reveal">
                <span className="card-icon">✗</span>
                <h3>No proven order</h3>
                <p>Most resources throw tools at you with no structure. You end up learning to jump before you can crawl — and wondering why nothing sticks.</p>
              </article>
              <article className="pain-card reveal">
                <span className="card-icon">✗</span>
                <h3>Learning alone</h3>
                <p>Just you, YouTube, ChatGPT, and the hope that you're doing it right. No feedback. No correction. No one to tell you whether what you built actually makes sense.</p>
              </article>
              <article className="pain-card reveal">
                <span className="card-icon">✗</span>
                <h3>Confusion at the start</h3>
                <p>That phase where you know enough to know how much you don't know — and not enough to feel confident. Most people quit here. It's not weakness, it's what happens without proper structure.</p>
              </article>
              <article className="pain-card reveal">
                <span className="card-icon">✗</span>
                <h3>Zeal dying by week 3</h3>
                <p>You start hot. Then the isolation, confusion, and lack of visible progress kills the momentum. You're still showing up — but it doesn't feel like it's going anywhere.</p>
              </article>
              <article className="pain-card reveal">
                <span className="card-icon">✗</span>
                <h3>No client path</h3>
                <p>Building is only half the work. Nobody teaches you how to package what you've built, approach a business, and position yourself to get paid. You finish the tutorials with a full brain and an empty portfolio.</p>
              </article>
              <article className="pain-card reveal">
                <span className="card-icon">✗</span>
                <h3>The Nigerian reality</h3>
                <p>Bad light. Expensive data. No mentor. Figuring it out alone while managing everything else life is throwing at you. You're not behind because you're not trying hard enough. You're behind because the system wasn't built for you.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ═══ TRANSITION: PROBLEM → SOLUTION ═══ */}
        <div className="section-transition">
          <span>That's exactly what the Launchpad was built to fix.</span>
        </div>

        {/* ═══ SOLUTION SECTION ═══ */}
        <section className="section light-section" aria-labelledby="solution-title">
          <div className="section-inner">
            <div className="solution-layout">
              {/* Left: flyer */}
              <div className="solution-flyer reveal">
                <img src="/assets/ai-automation-launchpad.jpeg" alt="AI Automation Launchpad mentorship flyer with Elewachi Emmanuel" />
              </div>
              {/* Right: text + pillars */}
              <div className="solution-content">
                <div className="section-header">
                  <span className="section-label">— The Solution</span>
                  <h2 id="solution-title">A guided build sprint that takes you from <em>"learning"</em> to <em>"these are the systems I built."</em></h2>
                  <p className="section-desc">
                    The AI Automation Launchpad is not a video course. There are no 47-module libraries you'll never finish. No certificates that prove nothing.
                  </p>
                </div>
                <div className="solution-pillars">
                  <div className="solution-pillar reveal">
                    <span className="pillar-num">4</span>
                    <div>
                      <strong>Weeks. Live.</strong>
                      <p>Three sessions a week. Small group of 20 so nobody gets lost.</p>
                    </div>
                  </div>
                  <div className="solution-pillar reveal">
                    <span className="pillar-num">→</span>
                    <div>
                      <strong>Clear sequence first.</strong>
                      <p>Understand the business problem. Design the workflow. Build the system. Test it. Package it for a client. That order matters — and most courses skip it entirely.</p>
                    </div>
                  </div>
                  <div className="solution-pillar reveal">
                    <span className="pillar-num">5</span>
                    <div>
                      <strong>Portfolio systems built.</strong>
                      <p>By the end, you won't say "I attended a mentorship." You'll say: "These are the automation systems I built — and this is what they solve."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ TRANSITION: SOLUTION → PERSONAL STORY ═══ */}
        <div className="section-transition">
          <span>You might be wondering how I know this works. Here's where it started.</span>
        </div>

        {/* ═══ PERSONAL STORY / ORIGIN ═══ */}
        <section className="section dark-section" aria-labelledby="story-title">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">— The Origin</span>
              <h2 id="story-title">My first client came from a Facebook group. I'd been learning for <em>less than 2 months.</em></h2>
            </div>
            <div className="story-block reveal">
              <div className="story-text">
                <p>When I started learning automation I was posting my work on X — newbie stuff. Then I went to Facebook, searched for n8n groups, joined them, and did something most people don't do.</p>
                <p>I didn't post. I <em>observed.</em> Watched the problems people kept showing up with. Then one day someone posted needing fixes on a broken WhatsApp bot. I went straight to his DM — not the comments.</p>
                <p>He asked for a video call. I asked for the Google Meet link. He replied: <strong>"Now?"</strong></p>
                <p>I already had a portfolio ready in Google Docs. He asked how long I'd been in the industry. I said "a long time." It had been less than 2 months.</p>
                <p>I quoted $20/hr. The job ran over time. I didn't stop to renegotiate — I just delivered. He sent $70 plus a $10 tip. That turned into $100 every Monday. He later bought me a monitor so I could work faster.</p>
                <div className="story-lesson">
                  <strong>It didn't take years.</strong> It took a portfolio, the willingness to show up immediately, and knowing enough to deliver. Those are teachable things. That's what this cohort is built around.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SCREENRECORDING / EARNINGS VIDEO ═══ */}
        <section className="section light-section" aria-labelledby="video-title">
          <div className="section-inner">
            <div className="section-header centered">
              <span className="section-label">— Live Proof</span>
              <h2 id="video-title">A walkthrough of my Reanest account <em>earnings.</em></h2>
              <p className="section-desc">
                Here is a raw screen recording showing my actual Reanest (formerly Geegpay) dashboard — the direct payments and payouts generated from deploying automated systems. No screenshots — just live proof.
              </p>
            </div>
            <div className="video-container reveal">
              <video src="/assets/nestuge-earnings.mp4" controls preload="metadata" playsInline></video>
            </div>
          </div>
        </section>

        {/* ═══ PROJECTS ═══ */}
        <section id="projects" className="section dark-section" aria-labelledby="projects-title">
          <div className="section-inner">
            <div className="section-header centered">
              <span className="section-label">— What You'll Build</span>
              <h2 id="projects-title">Five systems businesses already <em>understand — and pay for.</em></h2>
              <p className="section-desc">These are not random assignments. They are deployable offers you can demo, improve, and sell after the mentorship.</p>
            </div>
            <div className="project-timeline">
              <article className="timeline-card reveal">
                <div className="timeline-node"><span>01</span></div>
                <div className="timeline-content">
                  <h3>AI Voice Agent for Lead Follow-Up</h3>
                  <p>A voice-powered AI that answers customer questions, qualifies leads, and books appointments — even when the business owner is asleep. Businesses are paying ₦150k–₦300k/month for this right now.</p>
                  <div className="card-tags">
                    <span>Voice AI</span>
                    <span>Lead Qualification</span>
                    <span>Appointments</span>
                  </div>
                  <p className="income-note">💰 One client for this = 3–6x your cohort fee back</p>
                </div>
              </article>
              <article className="timeline-card reveal">
                <div className="timeline-node"><span>02</span></div>
                <div className="timeline-content">
                  <h3>Business Knowledge Chatbot</h3>
                  <p>Train an AI on a company's documents, PDFs, and FAQs so it responds like a staff member who has read everything. Banks, schools, law firms, e-commerce stores — every business that gets repeated questions needs this.</p>
                  <div className="card-tags">
                    <span>Knowledge Base</span>
                    <span>Document AI</span>
                    <span>Customer Support</span>
                  </div>
                  <p className="income-note">💰 One client from this alone can cover your rent</p>
                </div>
              </article>
              <article className="timeline-card reveal">
                <div className="timeline-node"><span>03</span></div>
                <div className="timeline-content">
                  <h3>Lead Generation &amp; Outreach Automation</h3>
                  <p>Find prospects, enrich their data, and send personalised outreach automatically. Set it up once. It runs while you sleep. Every business that sells something is a potential client.</p>
                  <div className="card-tags">
                    <span>Prospecting</span>
                    <span>Data Enrichment</span>
                    <span>Outreach</span>
                  </div>
                  <p className="income-note">💰 Easily your most sellable skill as a freelancer</p>
                </div>
              </article>
              <article className="timeline-card reveal">
                <div className="timeline-node"><span>04</span></div>
                <div className="timeline-content">
                  <h3>AI Content Pipeline</h3>
                  <p>One idea → blog post, LinkedIn content, email newsletter, social captions — all in one automated run. Sell this to any brand currently paying a content agency ₦150k–₦200k/month to do it manually.</p>
                  <div className="card-tags">
                    <span>Content Repurposing</span>
                    <span>Multi-Channel</span>
                    <span>Workflow</span>
                  </div>
                  <p className="income-note">💰 Retainer model. Recurring income every month.</p>
                </div>
              </article>
              <article className="timeline-card reveal">
                <div className="timeline-node"><span>05</span></div>
                <div className="timeline-content">
                  <h3>Business Operations Automation</h3>
                  <p>Connect WhatsApp, Airtable, Google Sheets, invoicing, order tracking, payment follow-ups, and CRM updates into one seamless workflow. Every SME in Nigeria running manual operations is your market.</p>
                  <div className="card-tags">
                    <span>Operations</span>
                    <span>CRM</span>
                    <span>Integrations</span>
                  </div>
                  <p className="income-note">💰 Every SME in Nigeria is a potential client</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ═══ TRANSITION: PROJECTS → WHAT MAKES IT DIFFERENT ═══ */}
        <div className="section-transition">
          <span>Any course can list projects. Here's what actually makes the difference between finishing with a portfolio — and finishing with nothing.</span>
        </div>

        {/* ═══ WHAT MAKES IT DIFFERENT ═══ */}
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
                <h3>Live sessions 3x a week</h3>
                <p>Not pre-recorded. Real time. Ask questions, get answers, get unstuck immediately.</p>
              </div>
              <div className="feature-card reveal">
                <span className="feature-icon">🗂️</span>
                <h3>Proven learning sequence</h3>
                <p>You'll know exactly what to learn, in what order, and why — before touching any tool. No more jumping into the deep end.</p>
              </div>
              <div className="feature-card reveal">
                <span className="feature-icon">💼</span>
                <h3>Assignments that become portfolio pieces</h3>
                <p>Every project you build is something you can show, demo, and sell. Not throwaway exercises.</p>
              </div>
              <div className="feature-card reveal">
                <span className="feature-icon">🎯</span>
                <h3>Client acquisition strategy</h3>
                <p>How to find businesses with automation problems, package your offer, send better outreach, and use your portfolio to start conversations.</p>
              </div>
              <div className="feature-card reveal">
                <span className="feature-icon">🤝</span>
                <h3>Accountability built in</h3>
                <p>20 people. Same goal. Your progress is visible. You won't disappear after week one.</p>
              </div>
              <div className="feature-card reveal">
                <span className="feature-icon">🧠</span>
                <h3>Mentorship from someone building for real clients</h3>
                <p>Not a theoretical teacher. Someone actively deploying these systems and getting paid for them — right now.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ TRANSITION: WHAT MAKES IT DIFFERENT → WHO THIS IS FOR ═══ */}
        <div className="section-transition">
          <span>Now the important question — is this actually built for where you are right now?</span>
        </div>

        {/* ═══ WHO THIS IS FOR ═══ */}
        <section className="section dark-section" aria-labelledby="audience-title">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">— Who This Is For</span>
              <h2 id="audience-title">Built for one type of <em>person.</em></h2>
            </div>
            <div className="audience-grid">
              <div className="audience-card reveal">
                <div className="audience-accent"></div>
                <p>You've been saving tutorials for months and still have nothing you can show anyone.</p>
              </div>
              <div className="audience-card reveal">
                <div className="audience-accent"></div>
                <p>You're already learning automation but the zeal is fading because the path feels scattered and nothing feels real yet.</p>
              </div>
              <div className="audience-card reveal">
                <div className="audience-accent"></div>
                <p>You want client-ready projects — not another certificate that doesn't prove you can solve a business problem.</p>
              </div>
              <div className="audience-card reveal">
                <div className="audience-accent"></div>
                <p>You want to move from "I'm learning tech" to "this is what I built and here's what it does."</p>
              </div>
              <div className="audience-card reveal">
                <div className="audience-accent"></div>
                <p>You're tired of figuring it out alone with bad light, expensive data, and no one to tell you if you're even on the right track.</p>
              </div>
            </div>

            {/* WHO THIS IS NOT FOR */}
            <div className="not-for-block reveal">
              <h3>This cohort has standards. Read this carefully.</h3>
              <div className="not-for-grid">
                <div className="not-for-item">
                  <span className="x-mark">✗</span>
                  <p>This is not for you if you want to join quietly, collect recordings, and never show up.</p>
                </div>
                <div className="not-for-item">
                  <span className="x-mark">✗</span>
                  <p>This is not for you if you're not ready to build — not just watch.</p>
                </div>
                <div className="not-for-item">
                  <span className="x-mark">✗</span>
                  <p>This is not for you if you keep jumping from skill to skill without committing to one.</p>
                </div>
                <div className="not-for-item">
                  <span className="x-mark">✗</span>
                  <p>This is not for you if you want a shortcut to money without putting in the practice.</p>
                </div>
                <div className="not-for-item">
                  <span className="x-mark">✗</span>
                  <p>This is not for you if you need hand-holding to find the motivation — the structure is here, but the effort is yours.</p>
                </div>
              </div>
              <p className="not-for-close">The 20 people in this cohort will be the ones who show up and deliver. If that's you, you'll fit right in.</p>
            </div>
          </div>
        </section>

        {/* ═══ TRANSITION: WHO THIS IS NOT FOR → WHAT YOU'RE PAYING FOR ═══ */}
        <div className="section-transition">
          <span>Good. Then here's exactly what your ₦50,000 is buying.</span>
        </div>

        {/* ═══ VALUE STACK ═══ */}
        <section className="section light-section" aria-labelledby="value-title">
          <div className="section-inner">
            <div className="section-header centered">
              <span className="section-label">— What You're Paying For</span>
              <h2 id="value-title">The ₦50,000 is not for information. It's for <em>implementation.</em></h2>
              <p className="section-desc">
                Because free information without execution is still expensive — it keeps you stuck.
              </p>
            </div>

            {/* Pricing frame */}
            <div className="pricing-frame reveal">
              <p>My 1-on-1 mentorship starts at <strong>₦300,000</strong>. Businesses pay <strong>₦150k–₦300k/month</strong> for a Voice Agent. <strong>₦200k–₦500k</strong> for a RAG chatbot setup. <strong>₦300k–₦600k+</strong> for a full outreach automation system.</p>
              <p style={{ marginTop: '12px' }}>You're learning to build all five — for <strong style={{ color: 'var(--orange)', fontSize: '1.15rem' }}>₦50,000</strong>. The first client you land from this cohort pays it back 6x minimum.</p>
            </div>

            <div className="value-stack">
              <div className="value-row reveal">
                <span>5 automation projects in your portfolio</span>
                <strong>✓</strong>
              </div>
              <div className="value-row reveal">
                <span>Clear workflow architecture understanding</span>
                <strong>✓</strong>
              </div>
              <div className="value-row reveal">
                <span>Confidence to demo your projects to businesses</span>
                <strong>✓</strong>
              </div>
              <div className="value-row reveal">
                <span>Client acquisition guide and positioning strategy</span>
                <strong>✓</strong>
              </div>
              <div className="value-row reveal">
                <span>Live mentorship — 12 sessions across 4 weeks</span>
                <strong>✓</strong>
              </div>
              <div className="value-row reveal">
                <span>Accountability and cohort community</span>
                <strong>✓</strong>
              </div>
              <div className="value-row reveal">
                <span>Post-cohort access to resources and recordings</span>
                <strong>✓</strong>
              </div>
              <div className="value-row total reveal">
                <span>All of this</span>
                <strong>₦50,000</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ TRANSITION: WHAT YOU'RE PAYING FOR → STUDENT RESULT ═══ */}
        <div className="section-transition">
          <span>Still wondering if this actually works? Here's someone who started exactly where you are.</span>
        </div>

        {/* ═══ STUDENT RESULT / TESTIMONIAL ═══ */}
        <section className="section promise-band" aria-labelledby="testimonial-title">
          <div className="section-inner">
            <span className="section-label" id="testimonial-title">— Student Results &amp; Social Proof</span>
            <h2 style={{ marginBottom: '40px', maxWidth: '700px' }}>What people who've seen the work <em>actually say.</em></h2>

            {/* Main student testimonial */}
            <blockquote className="reveal">
              <p>"I automated a fully functional email workflow that processed 2,000+ emails for a conference. It was my first contract as an AI Automation Engineer — and it was successful. I give glory to God and to Elewachi. He inspired me."</p>
              <cite>— FUHRER (@Mein_Fuhrer001) &nbsp;·&nbsp; First paying contract secured as an AI Automation Engineer</cite>
            </blockquote>

            {/* Social screenshots row */}
            <div className="social-proof-grid">
              {/* Tweet testimony */}
              <div className="social-card reveal">
                <div className="social-card-label">Public testimonial on X (Twitter)</div>
                <img
                  src="/assets/social-testimony.png"
                  alt="Tweet from Product Growth & Marketing Automation Guru saying learning from @elewachii will give you an advantage — I've only heard good things about him"
                />
              </div>

              {/* Private student result */}
              <div className="social-card reveal">
                <div className="social-card-label">Private student — first project completed</div>
                <img
                  src="/assets/student-delani.png"
                  alt="Tweet from @AdelaniFavour showing first automation project: from not knowing anything to handling first case-study under Elewachi Emmanuel's mentorship"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ABOUT ME ═══ */}
        <section className="section dark-section" aria-labelledby="about-title">
          <div className="section-inner">
            <div className="section-header centered">
              <span className="section-label">— About the Mentor</span>
              <h2 id="about-title">Everything changed when I <em>bet on myself.</em></h2>
              <p className="section-desc">
                A few years ago I had nothing but hunger and a cheap laptop. I made one decision — to stop waiting for the perfect time and start building. Here's what that decision looked like, and what it built.
              </p>
            </div>

            <div className="about-transformation">
              {/* BEFORE */}
              <div className="about-photo-col reveal">
                <div className="about-photo-wrap about-before">
                  <div className="about-era-tag">Then</div>
                  <img
                    src="/assets/elewachi-before.jpg"
                    alt="Elewachi Emmanuel before — humble beginnings, before betting on himself"
                  />
                  <div className="about-caption">
                    <span className="about-caption-icon">📍</span>
                    <p>No clients. No portfolio. No proof. Just the belief that the skill was learnable.</p>
                  </div>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="about-divider" aria-hidden="true">
                <div className="about-divider-line"></div>
                <div className="about-divider-arrow">→</div>
                <div className="about-divider-line"></div>
              </div>

              {/* NOW */}
              <div className="about-photo-col reveal">
                <div className="about-photo-wrap about-now">
                  <div className="about-era-tag about-era-now">Now</div>
                  <img
                    src="/assets/elewachi-now.png"
                    alt="Elewachi Emmanuel now — AI automation engineer earning in dollars, mentoring others"
                  />
                  <div className="about-caption">
                    <span className="about-caption-icon">🔥</span>
                    <p>₦8M+ in automation income. Clients in multiple countries. Teaching the exact system that got me here.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The lesson */}
            <div className="about-lesson reveal">
              <p>
                I'm not a genius. I didn't have connections or capital. I had a skill I decided to take seriously — and I stacked evidence until people had no choice but to pay attention.
                That's what I'm helping the next 20 people do inside this cohort.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ TRANSITION: STUDENT RESULT → PRICING ═══ */}
        <div className="section-transition">
          <span>That result started with one decision. Here's yours.</span>
        </div>

        {/* ═══ SECURE YOUR SLOT (CTA) ═══ */}
        <section className="section light-section cta-section" aria-labelledby="offer-title">
          <div className="section-inner">
            <div className="section-header centered">
              <span className="section-label">— Secure Your Slot</span>
              <h2 id="offer-title">₦50,000 for four weeks of structure, mentorship, systems, and <em>client direction.</em></h2>
              <p className="section-desc">
                That's less than what most people lose in a month to data, impulse spending, and random "investments" that never build a skill. One automation client pays it back many times over.
              </p>
            </div>
            <div className="cta-card reveal">
              <span className="cta-meta">Limited Cohort · 20 Slots Only</span>
              <div className="cta-price">₦50,000</div>
              <p className="cta-sub">20 slots. Not 50. Not 100. Twenty — because feedback is personal and attention matters. When this fills, enrollment closes. The next cohort will cost more. Cohort 1.0 pricing doesn't come back.</p>
              <div className="cta-stats">
                <div><strong>20</strong><span>Slots</span></div>
                <div><strong>4</strong><span>Weeks</span></div>
                <div><strong>3x</strong><span>Weekly</span></div>
                <div><strong>5</strong><span>Projects</span></div>
              </div>
              <a className="primary-button btn-premium cta-primary" href="https://nestuge.com/ai_launchpad" target="_blank" rel="noopener noreferrer" id="pricing-cta">
                <span className="btn-text">Claim Your Slot Now — ₦50,000</span>
                <span className="btn-arrow">→</span>
              </a>
              <p className="cta-trust-row">
                <span>Pay via nestuge.com/ai_launchpad</span>
                <span className="trust-dot">·</span>
                <span>Full refund within 48 hours of payment</span>
              </p>
            </div>
          </div>
        </section>

        {/* ═══ TRANSITION: PRICING → FAQ ═══ */}
        <div className="section-transition">
          <span>Still have questions? Here are the ones we hear most.</span>
        </div>

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

        {/* ═══ TRANSITION: FAQ → FINAL CTA ═══ */}
        <div className="section-transition">
          <span>You've read everything. You know what this is. Now it comes down to one thing.</span>
        </div>

        {/* ═══ FINAL CTA ═══ */}
        <section className="section dark-section final-cta" aria-label="Final enrollment call to action">
          <div className="section-inner centered">
            <span className="section-label">— The next six months will pass either way</span>
            <h2>The people charging ₦200k for automation work 6 months from now are <em>registering today.</em></h2>
            <p className="section-desc" style={{ margin: '20px auto 0', maxWidth: '640px' }}>
              The ones still planning to start are still thinking about it. Stop waiting until you feel ready. Most people will spend the next few months saving tutorials, jumping between tools, and wondering if AI Automation is for them. You can do something different.
            </p>
            <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '44px' }}>
              <a className="primary-button btn-premium btn-large" href="https://nestuge.com/ai_launchpad" target="_blank" rel="noopener noreferrer" id="final-cta">
                <span className="btn-text">Secure My Slot — ₦50,000</span>
                <span className="btn-arrow">→</span>
              </a>
              <a className="secondary-button" href="https://wa.me/2347038212635?text=Hello%20Elewachi%2C%20I%20want%20to%20join%20the%20AI%20Automation%20Launchpad." target="_blank" rel="noopener noreferrer" id="whatsapp-cta">
                Ask on WhatsApp
              </a>
            </div>
            <p className="final-meta">20 slots &nbsp;·&nbsp; Cohort 1.0 &nbsp;·&nbsp; Sessions via Google Meet &nbsp;·&nbsp; 3x weekly, 8PM</p>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="site-footer">
        <span>AI Automation Launchpad — Cohort 1.0 &nbsp;·&nbsp; Built by Elewachi Emmanuel</span>
        <a href="https://nestuge.com/ai_launchpad" target="_blank" rel="noopener noreferrer">nestuge.com/ai_launchpad</a>
      </footer>

      {/* ═══ STICKY MOBILE CTA ═══ */}
      <div className={`sticky-cta ${stickyVisible ? 'visible' : ''}`} aria-label="Sticky enrollment action">
        <span>20 slots · ₦50,000</span>
        <a href="https://nestuge.com/ai_launchpad" target="_blank" rel="noopener noreferrer">Enroll Now</a>
      </div>
    </>
  )
}

export default App
