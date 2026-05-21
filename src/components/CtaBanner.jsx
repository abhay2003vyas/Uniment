import { useScrollReveal } from "./useScrollReveal";

// ── Palette unified with full site ───────────────────────────────────────────
const RED      = "#C0392B";
const DARK     = "#111827";   // banner background — matches navbar
const RED_TINT = "#e87060";   // light red accent for text on dark bg

const TRUST_ITEMS = [
  { text: "No upfront payment required" },
  { text: "Free revision policy"        },
  { text: "100% plagiarism-free work"   },
];

export default function CtaBanner() {
  const ref = useScrollReveal();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

        .cta-root {
          background: ${DARK};
          font-family: 'Inter', -apple-system, sans-serif;
          padding: 88px 60px;
          position: relative; overflow: hidden;
        }

        /* Red left-edge accent bar — matches AboutSection banner */
        .cta-root::before {
          content: '';
          position: absolute; left: 0; top: 0; bottom: 0;
          width: 4px; background: ${RED};
        }

        /* Decorative circles — red tints on dark bg */
        .cta-corner-1 {
          position: absolute; top: -60px; right: -60px;
          width: 280px; height: 280px; border-radius: 50%;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.06);
        }
        .cta-corner-2 {
          position: absolute; top: 20px; right: 80px;
          width: 140px; height: 140px; border-radius: 50%;
          background: rgba(192,57,43,.08);
          border: 1px solid rgba(192,57,43,.14);
        }
        .cta-corner-3 {
          position: absolute; bottom: -40px; left: -40px;
          width: 180px; height: 180px; border-radius: 50%;
          background: rgba(255,255,255,.02);
        }

        .cta-inner {
          position: relative; z-index: 1;
          max-width: 860px; margin: 0 auto; text-align: center;
        }

        /* Eyebrow with flanking rules — red tint */
        .cta-eyebrow {
          font-size: 10px; font-weight: 700;
          letter-spacing: .2em; text-transform: uppercase;
          color: ${RED_TINT}; margin-bottom: 20px;
          display: flex; align-items: center; justify-content: center; gap: 10px;
        }
        .cta-eyebrow::before,
        .cta-eyebrow::after {
          content: ''; display: block; width: 36px; height: 1px;
          background: rgba(232,112,96,.35);
        }

        .cta-h2 {
          font-size: clamp(2rem, 4.5vw, 2.8rem);
          font-weight: 900; line-height: 1.15; letter-spacing: -.03em;
          color: #FFFFFF; margin: 0 0 14px;
        }
        /* Accent: red tint on dark bg */
        .cta-h2 em { font-style: normal; color: ${RED_TINT}; }

        .cta-sub {
          font-size: 14.5px; line-height: 1.8;
          color: rgba(255,255,255,.52);
          max-width: 480px; margin: 0 auto 44px;
        }

        /* Buttons */
        .cta-buttons {
          display: flex; gap: 12px; justify-content: center;
          flex-wrap: wrap; margin-bottom: 48px;
        }

        /* Primary: white pill — high contrast CTA */
        .cta-btn-white {
          display: inline-flex; align-items: center; gap: 7px;
          background: #FFFFFF; color: ${DARK};
          padding: 13px 32px; border-radius: 9999px;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; font-weight: 700; letter-spacing: .02em;
          text-decoration: none; border: none; cursor: pointer;
          box-shadow: 0 2px 16px rgba(0,0,0,.22);
          transition: transform .18s, box-shadow .18s, background .18s;
        }
        .cta-btn-white:hover {
          background: #f3f4f6;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,.28);
        }

        /* Ghost: translucent border pill */
        .cta-btn-ghost {
          display: inline-flex; align-items: center; gap: 7px;
          background: transparent; color: rgba(255,255,255,.70);
          padding: 12px 30px; border-radius: 9999px;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; font-weight: 600; letter-spacing: .02em;
          text-decoration: none; cursor: pointer;
          border: 1.5px solid rgba(255,255,255,.20);
          transition: border-color .18s, color .18s, transform .18s;
        }
        .cta-btn-ghost:hover {
          color: #FFFFFF;
          border-color: rgba(255,255,255,.48);
          transform: translateY(-2px);
        }

        /* Trust row */
        .cta-trust {
          display: flex; gap: 28px; justify-content: center; flex-wrap: wrap;
        }
        .cta-trust-item {
          display: flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 500;
          color: rgba(255,255,255,.40); letter-spacing: .03em;
        }
        /* Trust check: red tint circle */
        .cta-trust-check {
          width: 18px; height: 18px; border-radius: 50%;
          background: rgba(192,57,43,.18);
          border: 1px solid rgba(192,57,43,.35);
          display: flex; align-items: center; justify-content: center;
          font-size: 9px; color: ${RED_TINT}; flex-shrink: 0;
        }

        @media (max-width: 900px) { .cta-root { padding: 72px 28px; } }
        @media (max-width: 600px) {
          .cta-root { padding: 64px 20px; }
          .cta-trust { gap: 14px; flex-direction: column; align-items: center; }
        }
      `}</style>

      <section className="cta-root" ref={ref}>
        <div className="cta-corner-1" />
        <div className="cta-corner-2" />
        <div className="cta-corner-3" />

        <div className="cta-inner">
          <div className="cta-eyebrow ua-reveal">Take the Next Step</div>

          <h2 className="cta-h2 ua-reveal ua-d1">
            Ready to Ace Your<br />
            <em>Assignments?</em>
          </h2>

          <p className="cta-sub ua-reveal ua-d2">
            Join thousands of students already submitting with confidence,
            backed by verified experts and a 98% on-time guarantee.
          </p>

          <div className="cta-buttons ua-reveal ua-d3">
            <a href="#contact" className="cta-btn-white">Get Expert Help &nbsp;→</a>
            <a href="#about"   className="cta-btn-ghost">Learn More</a>
          </div>

          <div className="cta-trust ua-reveal ua-d4">
            {TRUST_ITEMS.map((t, i) => (
              <div className="cta-trust-item" key={i}>
                <span className="cta-trust-check">✓</span>
                {t.text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}