import { useScrollReveal } from "./useScrollReveal";

const POINTS = [
  {
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Verified Expert Network",
    desc: "Every tutor is vetted through a rigorous multi-step academic review.",
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Always On-Time",
    desc: "98% of submissions delivered before the agreed deadline.",
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75"/>
      </svg>
    ),
    title: "Transparent Pricing",
    desc: "No hidden fees. Affordable plans for every student budget.",
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
      </svg>
    ),
    title: "24 / 7 Support",
    desc: "Reach our team any time via chat, WhatsApp, or email.",
  },
];

export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

        .ab-root {
          background: #FFFFFF;
          font-family: 'Inter', -apple-system, sans-serif;
          overflow: hidden;
        }

        /* ── TOP BANNER — dark strip with red accent ── */
        .ab-banner {
          background: #111827;
          padding: 52px 64px;
          position: relative;
          overflow: hidden;
        }
        /* Red left-edge accent bar */
        .ab-banner::before {
          content: '';
          position: absolute; left: 0; top: 0; bottom: 0;
          width: 4px; background: #C0392B;
        }

        .ab-banner-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          gap: 40px; flex-wrap: wrap;
        }
        .ab-banner-left { flex: 1; min-width: 260px; }
        .ab-banner-tag {
          font-size: 10px; font-weight: 700;
          letter-spacing: .18em; text-transform: uppercase;
          color: rgba(255,255,255,.45);
          margin-bottom: 10px;
        }
        .ab-banner-title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 900; line-height: 1.12;
          letter-spacing: -.025em; color: #FFFFFF;
        }
        /* Accent text: red instead of blue */
        .ab-banner-title span { color: #C0392B; }

        .ab-banner-right {
          display: flex; gap: 40px; flex-wrap: wrap;
        }
        .ab-stat-block { text-align: center; }
        .ab-stat-num {
          display: block;
          font-size: 2rem; font-weight: 900;
          color: #FFFFFF; line-height: 1;
          letter-spacing: -.03em;
        }
        .ab-stat-lbl {
          font-size: 10px; font-weight: 600;
          letter-spacing: .12em; text-transform: uppercase;
          color: rgba(255,255,255,.45);
          margin-top: 5px; display: block;
        }
        .ab-stat-divider {
          width: 1px; background: rgba(255,255,255,.12);
          align-self: stretch;
        }

        /* ── MAIN BODY ── */
        .ab-body-wrap {
          max-width: 1200px; margin: 0 auto;
          padding: 80px 64px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: start;
        }

        /* ── LEFT: Visual stack ── */
        .ab-visual { position: relative; }

        .ab-photo-card {
          width: 100%;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid #e5e7eb;
          position: relative;
        }

        .ab-photo-svg {
          width: 100%; display: block;
          aspect-ratio: 3/2;
        }

        .ab-photo-label {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(to top, rgba(0,0,0,.82) 0%, transparent 100%);
          padding: 28px 24px 22px;
          display: flex; align-items: flex-end; justify-content: space-between;
        }
        .ab-photo-label-text {
          font-size: 13px; font-weight: 700;
          color: #FFFFFF; letter-spacing: -.01em;
        }
        .ab-photo-label-sub {
          font-size: 10px; font-weight: 500;
          color: rgba(255,255,255,.60);
          margin-top: 2px; letter-spacing: .04em;
        }
        /* Badge: red */
        .ab-photo-badge {
          background: #C0392B;
          border-radius: 4px; padding: 5px 11px;
          font-size: 10px; font-weight: 700;
          color: #fff; letter-spacing: .06em; text-transform: uppercase;
          white-space: nowrap;
        }

        .ab-card-row {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin-top: 12px;
        }
        .ab-mini-card {
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          background: #F5F5F7;
          padding: 18px;
          display: flex; align-items: flex-start; gap: 12px;
          transition: border-color .2s, box-shadow .2s;
          cursor: default;
        }
        .ab-mini-card:hover {
          border-color: #C0392B;
          box-shadow: 0 4px 16px rgba(192,57,43,.10);
        }
        /* Icon bg: red tint */
        .ab-mini-icon {
          width: 36px; height: 36px; border-radius: 5px;
          background: #fff5f5;
          display: flex; align-items: center; justify-content: center;
          color: #C0392B; flex-shrink: 0;
        }
        .ab-mini-title {
          font-size: 12px; font-weight: 700;
          color: #111827; letter-spacing: -.01em;
          margin-bottom: 3px;
        }
        .ab-mini-desc {
          font-size: 11px; line-height: 1.6;
          color: #6b7280;
        }

        /* Floating chip — red accent */
        .ab-chip {
          position: absolute;
          top: -14px; right: -14px;
          background: #FFFFFF;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          padding: 12px 16px;
          box-shadow: 0 8px 28px rgba(0,0,0,.10);
          display: flex; align-items: center; gap: 10px;
          z-index: 2;
          animation: abFloat 4s ease-in-out infinite;
        }
        .ab-chip-icon {
          width: 32px; height: 32px; border-radius: 5px;
          background: #fff5f5;
          display: flex; align-items: center; justify-content: center;
          color: #C0392B;
        }
        .ab-chip-num {
          font-size: 1.2rem; font-weight: 900;
          color: #C0392B; line-height: 1; letter-spacing: -.02em;
        }
        .ab-chip-lbl {
          font-size: 9.5px; font-weight: 600;
          letter-spacing: .1em; text-transform: uppercase;
          color: #9ca3af; margin-top: 2px;
        }

        @keyframes abFloat {
          0%,100%{ transform: translateY(0);  }
          50%    { transform: translateY(-5px); }
        }

        /* ── RIGHT: Text ── */
        /* Section tag: red left border */
        .ab-section-tag {
          display: inline-block;
          font-size: 10px; font-weight: 700;
          letter-spacing: .18em; text-transform: uppercase;
          color: #C0392B;
          border-left: 3px solid #C0392B;
          padding-left: 10px;
          margin-bottom: 16px;
        }

        .ab-h2 {
          font-size: clamp(1.5rem, 2.8vw, 2rem);
          font-weight: 900; line-height: 1.12;
          letter-spacing: -.03em; color: #111827;
          margin-bottom: 16px;
        }
        /* Heading accent: red */
        .ab-h2 span { color: #C0392B; }

        .ab-intro {
          font-size: 13.5px; line-height: 1.85;
          color: #6b7280; margin-bottom: 32px;
          max-width: 440px;
        }

        /* Feature list */
        .ab-features {
          display: flex; flex-direction: column;
          gap: 0; margin-bottom: 36px;
          border: 1px solid #e5e7eb;
          border-radius: 6px; overflow: hidden;
        }
        .ab-feature {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 16px 20px;
          border-bottom: 1px solid #e5e7eb;
          background: #FFFFFF;
          transition: background .18s;
          cursor: default;
        }
        .ab-feature:last-child { border-bottom: none; }
        .ab-feature:hover { background: #fff5f5; }
        /* Feature icon: red tint */
        .ab-feature-icon {
          width: 30px; height: 30px; border-radius: 4px;
          background: #fff5f5;
          display: flex; align-items: center; justify-content: center;
          color: #C0392B; flex-shrink: 0; margin-top: 1px;
        }
        .ab-feature-title {
          font-size: 13px; font-weight: 700;
          color: #111827; margin-bottom: 2px; letter-spacing: -.01em;
        }
        .ab-feature-desc {
          font-size: 12px; line-height: 1.6; color: #6b7280;
        }

        /* CTA buttons */
        .ab-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .ab-btn {
          display: inline-flex; align-items: center;
          padding: 12px 26px;
          background: #C0392B; color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 13px; font-weight: 600;
          letter-spacing: .03em; text-decoration: none;
          border-radius: 9999px;
          transition: background .18s, transform .13s, box-shadow .18s;
          box-shadow: 0 2px 8px rgba(192,57,43,.22);
        }
        .ab-btn:hover {
          background: #A93226;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(192,57,43,.32);
        }
        .ab-btn-ghost {
          display: inline-flex; align-items: center;
          padding: 12px 26px;
          background: transparent; color: #111827;
          font-family: 'Inter', sans-serif;
          font-size: 13px; font-weight: 600;
          letter-spacing: .03em; text-decoration: none;
          border-radius: 9999px;
          border: 2px solid #111827;
          transition: background .18s, transform .13s;
        }
        .ab-btn-ghost:hover {
          background: #f3f4f6;
          transform: translateY(-2px);
        }

        /* Responsive */
        @media(max-width:960px){
          .ab-banner { padding: 44px 28px; }
          .ab-body-wrap { grid-template-columns: 1fr; padding: 60px 28px; gap: 52px; }
          .ab-chip { top: -12px; right: 0; }
        }
        @media(max-width:600px){
          .ab-banner { padding: 36px 20px; }
          .ab-body-wrap { padding: 48px 20px; }
          .ab-banner-right { gap: 24px; }
          .ab-card-row { grid-template-columns: 1fr; }
          .ab-cta-row { flex-direction: column; }
        }
      `}</style>

      <section id="about" className="ab-root" ref={ref}>

        {/* ── Full-width dark stats banner ── */}
        <div className="ab-banner">
          <div className="ab-banner-inner">
            <div className="ab-banner-left">
              <div className="ab-banner-tag">About Uniment Assignment</div>
              <div className="ab-banner-title">
                Academic Excellence,<br/>
                <span>Backed by Numbers.</span>
              </div>
            </div>
            <div className="ab-banner-right">
              {[
                { num: "10,000+", lbl: "Students Helped"  },
                { num: "500+",    lbl: "Verified Experts"  },
                { num: "98%",     lbl: "On-Time Delivery"  },
                { num: "4.9★",    lbl: "Average Rating"    },
              ].map((s, i, arr) => (
                <>
                  <div className="ab-stat-block" key={s.lbl}>
                    <span className="ab-stat-num">{s.num}</span>
                    <span className="ab-stat-lbl">{s.lbl}</span>
                  </div>
                  {i < arr.length - 1 && <div className="ab-stat-divider" key={`d${i}`} />}
                </>
              ))}
            </div>
          </div>
        </div>

        {/* ── Main two-column body ── */}
        <div className="ab-body-wrap">

          {/* LEFT — Visual */}
          <div className="ab-visual ua-reveal-left">

            {/* Floating chip */}
            <div className="ab-chip">
              <div className="ab-chip-icon">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                </svg>
              </div>
              <div>
                <div className="ab-chip-num">98%</div>
                <div className="ab-chip-lbl">On-Time</div>
              </div>
            </div>

            {/* Main photo card with SVG scene */}
            <div className="ab-photo-card">
              <svg className="ab-photo-svg" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#111827"/>
                <defs>
                  <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                  </pattern>
                  <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C0392B" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#7B241C" stopOpacity="0.15"/>
                  </linearGradient>
                  <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#fff5f5" stopOpacity="1"/>
                  </linearGradient>
                </defs>
                <rect width="600" height="400" fill="url(#grid)"/>
                <ellipse cx="480" cy="80" rx="180" ry="140" fill="url(#glow)" opacity="0.5"/>
                <ellipse cx="120" cy="320" rx="120" ry="90" fill="#C0392B" opacity="0.10"/>

                {/* Desk */}
                <rect x="60" y="220" width="480" height="12" rx="4" fill="#1f2937"/>
                <rect x="60" y="228" width="480" height="120" fill="#111827"/>

                {/* Laptop */}
                <rect x="160" y="100" width="280" height="175" rx="8" fill="#1f2937"/>
                <rect x="165" y="105" width="270" height="163" rx="5" fill="#1a1a2e"/>
                {[0,1,2,3,4,5,6].map(i => (
                  <rect key={i} x="180" y={120 + i*18} width={i%3===0?160:i%2===0?120:90} height="6" rx="3" fill="rgba(255,255,255,0.12)"/>
                ))}
                <rect x="180" y="120" width="60" height="6" rx="3" fill="#C0392B"/>
                <rect x="248" y="120" width="40" height="6" rx="3" fill="#e87060" opacity="0.7"/>
                <rect x="145" y="272" width="310" height="10" rx="3" fill="#1f2937"/>
                <rect x="210" y="280" width="180" height="5" rx="2" fill="#111827"/>

                {/* Books */}
                <rect x="80" y="188" width="60" height="36" rx="3" fill="#C0392B"/>
                <rect x="82" y="190" width="56" height="32" rx="2" fill="#A93226"/>
                <rect x="85" y="195" width="50" height="4" rx="1" fill="rgba(255,255,255,0.35)"/>
                <rect x="85" y="202" width="38" height="3" rx="1" fill="rgba(255,255,255,0.18)"/>
                <rect x="80" y="178" width="60" height="14" rx="3" fill="#922b21"/>
                <rect x="80" y="167" width="60" height="14" rx="3" fill="#C0392B"/>

                {/* Mug */}
                <rect x="480" y="195" width="36" height="32" rx="4" fill="#1f2937"/>
                <rect x="482" y="197" width="32" height="28" rx="3" fill="#374151"/>
                <path d="M516 207 Q528 207 528 215 Q528 223 516 223" fill="none" stroke="#1f2937" strokeWidth="4" strokeLinecap="round"/>
                <ellipse cx="498" cy="197" rx="16" ry="4" fill="#4b5563"/>
                <path d="M492 190 Q494 185 492 180" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round"/>
                <path d="M499 188 Q501 183 499 178" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round"/>

                {/* Cap */}
                <polygon points="300,48 340,65 300,82 260,65" fill="#C0392B"/>
                <rect x="336" y="65" width="4" height="22" rx="2" fill="#C0392B"/>
                <circle cx="338" cy="89" r="5" fill="#e87060"/>

                {/* Floating badges */}
                <rect x="390" y="115" width="110" height="48" rx="6" fill="url(#cardGrad)" opacity="0.95"/>
                <circle cx="410" cy="139" r="10" fill="#fff5f5"/>
                <text x="410" y="143" textAnchor="middle" fontSize="11" fill="#C0392B" fontFamily="Inter,sans-serif" fontWeight="700">A+</text>
                <text x="425" y="132" fontSize="9" fill="#111827" fontFamily="Inter,sans-serif" fontWeight="700">Top Grade</text>
                <text x="425" y="146" fontSize="8" fill="#6b7280" fontFamily="Inter,sans-serif">Guaranteed Quality</text>

                <rect x="100" y="115" width="116" height="48" rx="6" fill="url(#cardGrad)" opacity="0.95"/>
                <circle cx="120" cy="139" r="10" fill="#fff5f5"/>
                <text x="120" y="143" textAnchor="middle" fontSize="9" fill="#C0392B" fontFamily="Inter,sans-serif" fontWeight="700">PhD</text>
                <text x="136" y="132" fontSize="9" fill="#111827" fontFamily="Inter,sans-serif" fontWeight="700">Expert Matched</text>
                <text x="136" y="146" fontSize="8" fill="#6b7280" fontFamily="Inter,sans-serif">500+ Specialists</text>
              </svg>

              <div className="ab-photo-label">
                <div>
                  <div className="ab-photo-label-text">Academic Support Platform</div>
                  <div className="ab-photo-label-sub">Trusted since 2019 · India's growing EdTech</div>
                </div>
                <div className="ab-photo-badge">Est. 2019</div>
              </div>
            </div>

            {/* Two mini cards */}
            <div className="ab-card-row">
              <div className="ab-mini-card">
                <div className="ab-mini-icon">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"/>
                  </svg>
                </div>
                <div>
                  <div className="ab-mini-title">200+ Universities</div>
                  <div className="ab-mini-desc">Students helped across India & abroad</div>
                </div>
              </div>
              <div className="ab-mini-card">
                <div className="ab-mini-icon">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                  </svg>
                </div>
                <div>
                  <div className="ab-mini-title">4.9 / 5 Rating</div>
                  <div className="ab-mini-desc">Average score from 10,000+ students</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Text */}
          <div className="ab-text ua-reveal ua-d1">
            <div className="ab-section-tag">Who We Are</div>

            <h2 className="ab-h2">
              About <span>Uniment Assignment</span>
            </h2>

            <p className="ab-intro">
              Uniment Assignment is your dedicated academic platform, connecting students
              with domain experts to ensure every submission is handled with precision,
              clarity, and genuine scholarly care — from undergraduate coursework to
              doctoral research.
            </p>

            <div className="ab-features">
              {POINTS.map((p, i) => (
                <div className="ab-feature" key={i}>
                  <div className="ab-feature-icon">{p.icon}</div>
                  <div>
                    <div className="ab-feature-title">{p.title}</div>
                    <div className="ab-feature-desc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="ab-cta-row">
              <a href="#contact" className="ab-btn">Get Expert Help</a>
              <a href="#services" className="ab-btn-ghost">Our Services</a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}