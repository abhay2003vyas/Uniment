import { useEffect, useRef, useState } from "react";
import heroImg from "../assets/hero.png";

const SLIDES = [
  {
    heading: "Expert Assignment Help,",
    accent:  "Delivered On Time.",
    sub: "Connect with verified academic specialists across every subject — precise, plagiarism-free, and deadline-ready.",
  },
  {
    heading: "Original Work.",
    accent:  "Every Single Time.",
    sub: "Every submission is Turnitin-certified. Unlimited revisions included, no questions asked.",
  },
  {
    heading: "24/7 Support",
    accent:  "for Urgent Deadlines.",
    sub: "Deadline in 6 hours? Our experts are always online, handling rush assignments without compromising quality.",
  },
  {
    heading: "500+ Verified Experts.",
    accent:  "Every Subject Covered.",
    sub: "Engineering, Law, MBA, Nursing — PhD-qualified specialists matched to your exact syllabus.",
  },
];

const STATS = [
  { val: "10,000+", label: "Students Helped"  },
  { val: "500+",    label: "Verified Experts"  },
  { val: "98%",     label: "On-Time Delivery"  },
  { val: "4.9",     label: "Average Rating"    },
];

const INTERVAL = 5000;

export default function HeroSection() {
  const [idx,     setIdx]     = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const heroRef  = useRef(null);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setIdx(p => { setAnimKey(k => k + 1); return (p + 1) % SLIDES.length; });
    }, INTERVAL);
  };

  useEffect(() => { startTimer(); return () => clearInterval(timerRef.current); }, []);

  const goTo = i => {
    clearInterval(timerRef.current);
    setIdx(i); setAnimKey(k => k + 1);
    startTimer();
  };

  /* Parallax on bg image */
  useEffect(() => {
    const fn = () => {
      if (heroRef.current)
        heroRef.current.style.backgroundPositionY = `${window.scrollY * 0.14}px`;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const slide = SLIDES[idx];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Color tokens (matches Navbar: #111827 dark, white, gray tones) ── */

        .h-root {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background-color: #F5F5F7;
          background-size: cover;
          background-position: center top;
          overflow: hidden;
          font-family: 'Inter', -apple-system, sans-serif;
        }

        /* Left: solid light, right: fade to transparent to reveal bg image */
        .h-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            96deg,
            #F5F5F7 0%,
            #F5F5F7 44%,
            rgba(245,245,247,0.55) 62%,
            rgba(245,245,247,0.00) 78%
          );
        }

        /* Thin top bar — brand mark, matches navbar dark */
        .h-topbar {
          position: absolute; top: 0; left: 0; right: 0;
          height: 4px;
          background: #C0392B;
          z-index: 10;
        }

        /* Main content */
        .h-content {
          position: relative; z-index: 2;
          width: 100%; max-width: 1200px;
          margin: 0 auto;
          padding: 140px 64px 100px;
        }

        /* Headline — heavy, dark */
        .h-headline {
          font-size: clamp(2rem, 3.8vw, 3rem);
          font-weight: 900;
          line-height: 1.06;
          letter-spacing: -0.03em;
          color: #111827;
          max-width: 580px;
          margin-bottom: 0;
        }

        /* Accent line — same weight, still dark but slightly lighter */
        .h-headline-accent {
          font-size: clamp(2rem, 3.8vw, 3rem);
          font-weight: 900;
          line-height: 1.10;
          letter-spacing: -0.03em;
          color: #C0392B;
          display: block;
          margin-bottom: 28px;
        }

        /* Body */
        .h-sub {
          font-size: 15px;
          font-weight: 400;
          line-height: 1.75;
          color: #6b7280;
          max-width: 480px;
          margin-bottom: 44px;
        }

        /* CTA row */
        .h-cta-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 76px;
        }

        /* Primary button — matches navbar Get Help pill */
        .h-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 30px;
          background: #C0392B;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 9999px;
          border: 2px solid #C0392B;
          transition: background 0.18s, transform 0.13s, box-shadow 0.18s;
          box-shadow: 0 2px 12px rgba(192,57,43,0.22);
        }
        .h-btn-primary:hover {
          background: #A93226;
          border-color: #A93226;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(192,57,43,0.32);
        }

        /* Ghost button — matches navbar Sign In outline style */
        .h-btn-outline {
          display: inline-flex;
          align-items: center;
          padding: 13px 30px;
          background: transparent;
          color: #111827;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 9999px;
          border: 2px solid #111827;
          transition: background 0.18s, transform 0.13s;
        }
        .h-btn-outline:hover {
          background: rgba(17,24,39,0.05);
          transform: translateY(-2px);
        }

        /* Stats strip */
        .h-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 0;
          padding-top: 36px;
          border-top: 1.5px solid #e5e7eb;
          max-width: 560px;
        }
        .h-stat {
          flex: 1;
          min-width: 100px;
          padding-right: 32px;
          margin-right: 32px;
          border-right: 1px solid #e5e7eb;
        }
        .h-stat:last-child {
          border-right: none;
          padding-right: 0;
          margin-right: 0;
        }
        .h-stat-val {
          font-size: 1.55rem;
          font-weight: 900;
          letter-spacing: -0.03em;
          color: #C0392B;
          display: block;
          line-height: 1;
          margin-bottom: 5px;
        }
        .h-stat-label {
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.11em;
          text-transform: uppercase;
          color: #9ca3af;
        }

        /* Dot nav */
        .h-nav {
          position: absolute;
          right: 52px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 5;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
        }
        .h-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d1d5db;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.22s, transform 0.18s;
        }
        .h-dot.on {
          background: #C0392B;
          transform: scale(1.4);
        }

        /* Slide counter */
        .h-counter {
          position: absolute;
          right: 44px;
          bottom: 80px;
          z-index: 5;
          font-size: 11px;
          font-weight: 700;
          color: #9ca3af;
          letter-spacing: 0.1em;
        }

        /* Progress bar */
        .h-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: #C0392B;
          animation: hProg ${INTERVAL}ms linear;
        }

        /* Slide-in animation */
        .h-in {
          animation: hUp 0.46s cubic-bezier(0.22, 0.68, 0, 1.15) both;
        }
        @keyframes hUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes hProg { from { width: 0; } to { width: 100%; } }

        /* Bottom wave — matches page bg */
        .h-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          line-height: 0;
        }

        /* Responsive */
        @media (max-width: 960px) {
          .h-content { padding: 120px 32px 80px; }
          .h-nav, .h-counter { right: 16px; }
          .h-headline, .h-headline-accent { font-size: clamp(1.6rem, 5vw, 2.2rem); }
        }
        @media (max-width: 600px) {
          .h-content { padding: 104px 20px 68px; }
          .h-stat { border-right: none; margin-right: 0; padding-right: 0; }
          .h-stats { gap: 20px; }
          .h-nav { display: none; }
        }
      `}</style>

      <section
        id="home"
        ref={heroRef}
        className="h-root"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="h-topbar" />
        <div className="h-overlay" />

        {/* Progress bar */}
        <div className="h-progress" key={`p-${animKey}`} />

        {/* Dot nav */}
        <div className="h-nav">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`h-dot${idx === i ? " on" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div className="h-counter">
          {String(idx + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </div>

        {/* Main content */}
        <div className="h-content">

          <h1
            className="h-headline h-in"
            key={`h-${animKey}`}
            style={{ animationDelay: ".03s" }}
          >
            {slide.heading}
          </h1>

          <span
            className="h-headline-accent h-in"
            key={`a-${animKey}`}
            style={{ animationDelay: ".08s" }}
          >
            {slide.accent}
          </span>

          <p
            className="h-sub h-in"
            key={`s-${animKey}`}
            style={{ animationDelay: ".14s" }}
          >
            {slide.sub}
          </p>

          <div
            className="h-cta-row h-in"
            key={`c-${animKey}`}
            style={{ animationDelay: ".20s" }}
          >
            <a href="#contact" className="h-btn-primary">Get Expert Help</a>
            <a href="#about"   className="h-btn-outline">How It Works</a>
          </div>

          {/* Stats */}
          <div className="h-stats">
            {STATS.map(s => (
              <div className="h-stat" key={s.label}>
                <span className="h-stat-val">{s.val}</span>
                <span className="h-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom wave */}
        <div className="h-wave">
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
            <path d="M0 32 Q360 56 720 26 Q1080 0 1440 32 L1440 56 L0 56 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>
    </>
  );
}