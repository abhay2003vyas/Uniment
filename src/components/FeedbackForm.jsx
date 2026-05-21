import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

// ── Palette unified with Navbar + HeroSection + AboutSection ─────────────────
const RED       = "#C0392B";
const RED_DARK  = "#A93226";
const RED_TINT  = "#fff5f5";
const BORDER    = "#e5e7eb";
const GOLD      = "#F59E0B";
const TEXT_PRI  = "#111827";
const TEXT_SEC  = "#6b7280";
const BG_INPUT  = "#F5F5F7";

const STAR_LABELS = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];

// ── Star rating component ─────────────────────────────────────────────────────
function StarRating({ value, onChange }) {
  const [hovered, setHovered] = useState(0);

  return (
    <div>
      <div style={{ display:"flex", gap:5, marginBottom:6 }}>
        {[1,2,3,4,5].map(s => (
          <button
            key={s}
            type="button"
            onMouseEnter={() => setHovered(s)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => onChange(s)}
            style={{
              background:"none", border:"none", cursor:"pointer", padding:1,
              fontSize:26, lineHeight:1,
              color: s <= (hovered || value) ? GOLD : BORDER,
              transform: s <= (hovered || value) ? "scale(1.15)" : "scale(1)",
              transition:"color .13s, transform .13s",
            }}
          >★</button>
        ))}
      </div>
      <span style={{
        fontSize:11, fontWeight:600, letterSpacing:".08em",
        color: RED, minHeight:16, display:"block",
      }}>
        {(hovered || value) > 0 ? STAR_LABELS[hovered || value] : ""}
      </span>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function FeedbackForm() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name:"", email:"", rating:0, review:"" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name.trim())   { setError("Please enter your name."); return; }
    if (!form.email.trim())  { setError("Please enter your email."); return; }
    if (!form.rating)        { setError("Please select a star rating."); return; }
    if (!form.review.trim()) { setError("Please write your review."); return; }
    setError("");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name:"", email:"", rating:0, review:"" });
    }, 4000);
  };

  const labelStyle = {
    display:"block",
    fontSize:"10.5px", fontWeight:700,
    letterSpacing:".12em", textTransform:"uppercase",
    color: TEXT_SEC, marginBottom:7,
    fontFamily:"'Inter', sans-serif",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

        .fbform-root {
          background: #F5F5F7;
          border-top: 1px solid ${BORDER};
          border-bottom: 1px solid ${BORDER};
          font-family: 'Inter', -apple-system, sans-serif;
          padding: 104px 60px;
        }
        .fbform-inner { max-width: 900px; margin: 0 auto; }

        /* ── Header ── */
        .fbform-header { text-align: center; margin-bottom: 48px; }

        /* Section tag: red left border */
        .fbform-tag {
          display: inline-block;
          font-size: 10px; font-weight: 700;
          letter-spacing: .18em; text-transform: uppercase;
          color: ${RED};
          border-left: 3px solid ${RED};
          padding-left: 10px; margin-bottom: 12px;
        }
        .fbform-h2 {
          font-size: clamp(1.5rem, 2.8vw, 2rem);
          font-weight: 900; line-height: 1.12;
          letter-spacing: -.03em; color: ${TEXT_PRI}; margin: 0 0 10px;
        }
        /* Heading accent: red */
        .fbform-h2 em { color: ${RED}; font-style: normal; }
        .fbform-sub { font-size: 13.5px; color: ${TEXT_SEC}; margin: 0; }

        /* ── Card ── */
        .fbform-card {
          background: #FFFFFF;
          border: 1px solid ${BORDER};
          border-radius: 12px; overflow: hidden;
          box-shadow: 0 4px 24px rgba(17,24,39,.06);
        }
        .fbform-body { padding: 48px; }
        .fbform-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 36px;
        }
        .fbform-col { display: flex; flex-direction: column; gap: 20px; }
        .fbform-col-right { display: flex; flex-direction: column; }

        /* ── Inputs ── */
        .fb-input {
          width: 100%; padding: 10px 14px;
          border-radius: 6px; border: 1.5px solid ${BORDER};
          background: #FFFFFF; color: ${TEXT_PRI};
          font-family: 'Inter', sans-serif; font-size: 13.5px;
          outline: none; box-sizing: border-box;
          transition: border-color .18s, box-shadow .18s;
        }
        /* Focus ring: red */
        .fb-input:focus {
          border-color: ${RED};
          box-shadow: 0 0 0 3px ${RED_TINT};
        }
        .fb-input::placeholder { color: #A8B0C0; }

        /* ── Rating box ── */
        .fbform-rating-box {
          padding: 14px 16px; border-radius: 6px;
          border: 1.5px solid ${BORDER};
          background: ${BG_INPUT};
          transition: border-color .18s;
        }
        /* Focus within: red border */
        .fbform-rating-box:focus-within { border-color: ${RED}; }

        /* ── Textarea ── */
        .fb-textarea {
          flex: 1; min-height: 190px; resize: none;
          width: 100%; padding: 11px 14px;
          border-radius: 6px; border: 1.5px solid ${BORDER};
          background: #FFFFFF; color: ${TEXT_PRI};
          font-family: 'Inter', sans-serif; font-size: 13.5px;
          outline: none; line-height: 1.7; box-sizing: border-box;
          transition: border-color .18s, box-shadow .18s;
        }
        .fb-textarea:focus {
          border-color: ${RED};
          box-shadow: 0 0 0 3px ${RED_TINT};
        }
        .fb-textarea::placeholder { color: #A8B0C0; }

        /* ── Error ── */
        .fbform-error {
          font-size: 12px; color: #B91C1C;
          font-weight: 500; margin: 8px 0; min-height: 18px;
        }

        /* ── Submit button: red pill, matches site CTA style ── */
        .fb-submit-btn {
          width: 100%; margin-top: 16px; padding: 13px 28px;
          background: ${RED}; color: #FFFFFF;
          border: none; border-radius: 9999px; cursor: pointer;
          font-family: 'Inter', sans-serif;
          font-size: 13px; font-weight: 600; letter-spacing: .02em;
          box-shadow: 0 2px 8px rgba(192,57,43,.22);
          transition: background .18s, transform .12s, box-shadow .18s;
        }
        .fb-submit-btn:hover {
          background: ${RED_DARK};
          transform: translateY(-1px);
          box-shadow: 0 5px 18px rgba(192,57,43,.32);
        }

        /* ── Success state ── */
        .fbform-success {
          text-align: center; padding: 80px 32px;
          display: flex; flex-direction: column; align-items: center; gap: 14px;
        }
        /* Success icon: red tint */
        .fbform-success-icon {
          width: 62px; height: 62px; border-radius: 50%;
          background: ${RED_TINT}; border: 1.5px solid #f5c6c6;
          display: flex; align-items: center; justify-content: center;
          color: ${RED};
        }
        .fbform-success-title {
          font-size: clamp(1.4rem, 2.5vw, 1.8rem);
          font-weight: 900; color: ${TEXT_PRI}; margin: 0;
        }
        .fbform-success-sub { font-size: 13.5px; color: ${TEXT_SEC}; margin: 0; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .fbform-root { padding: 72px 28px; }
          .fbform-body { padding: 32px 24px; }
          .fbform-grid { grid-template-columns: 1fr; gap: 20px; }
        }
        @media (max-width: 600px) {
          .fbform-root { padding: 56px 20px; }
          .fbform-body { padding: 24px 20px; }
        }
      `}</style>

      <section id="feedback-form" className="fbform-root" ref={ref}>
        <div className="fbform-inner">

          {/* Header */}
          <div className="fbform-header">
            <div className="ua-reveal">
              <span className="fbform-tag">Share Your Experience</span>
            </div>
            <h2 className="fbform-h2 ua-reveal ua-d1">
              Leave a <em>Review</em>
            </h2>
            <p className="fbform-sub ua-reveal ua-d2">
              Your feedback helps us serve students better.
            </p>
          </div>

          {/* Card */}
          <div className="fbform-card ua-reveal ua-d2">
            {submitted ? (
              /* Success state */
              <div className="fbform-success">
                <div className="fbform-success-icon">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div className="fbform-success-title">Thank You!</div>
                <p className="fbform-success-sub">Your review has been submitted. We truly appreciate your feedback.</p>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="fbform-body" noValidate>
                <div className="fbform-grid">

                  {/* Left column */}
                  <div className="fbform-col">
                    <div>
                      <label style={labelStyle}>Full Name</label>
                      <input
                        className="fb-input" type="text" required
                        value={form.name}
                        onChange={e => set("name", e.target.value)}
                        placeholder="e.g. Arjun Mehta"
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address</label>
                      <input
                        className="fb-input" type="email" required
                        value={form.email}
                        onChange={e => set("email", e.target.value)}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Your Rating</label>
                      <div className="fbform-rating-box">
                        <StarRating
                          value={form.rating}
                          onChange={v => { set("rating", v); setError(""); }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className="fbform-col-right">
                    <label style={labelStyle}>Write Your Review</label>
                    <textarea
                      className="fb-textarea"
                      value={form.review}
                      onChange={e => set("review", e.target.value)}
                      placeholder="Tell us about your experience with Uniment Assignment…"
                      required
                    />
                    {error && <div className="fbform-error">{error}</div>}
                    <button type="submit" className="fb-submit-btn">
                      Submit Review &nbsp;→
                    </button>
                  </div>

                </div>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  );
}