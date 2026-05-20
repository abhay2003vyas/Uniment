import { useScrollReveal } from "./useScrollReveal";

// ── Palette unified with full site blue system ───────────────────────────────
const BLUE      = "#0054A6";
const BLUE_DARK = "#003C7A";
const BLUE_TINT = "#EBF2FF";
const BORDER    = "#DDE1EC";
const TEXT_PRI  = "#1A1A2E";
const TEXT_SEC  = "#6B6882";

const CONTACT_INFO = [
  {
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
      </svg>
    ),
    label: "Email",
    value: "support@unimentassignment.com",
    href:  "mailto:support@unimentassignment.com",
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
      </svg>
    ),
    label: "WhatsApp",
    value: "+91 98765 43210",
    href:  "https://wa.me/919876543210",
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    label: "Availability",
    value: "24 / 7 — Always Here",
    href:  null,
  },
];

const FORM_FIELDS = [
  { label:"Your Name",                  type:"text",  placeholder:"Arjun Mehta",               name:"name"    },
  { label:"Email Address",              type:"email", placeholder:"arjun@email.com",            name:"email"   },
  { label:"Subject / Assignment Topic", type:"text",  placeholder:"e.g. Calculus integration",  name:"subject" },
];

export default function ContactSection() {
  const ref = useScrollReveal();

  const labelStyle = {
    display:"block",
    fontSize:"10px", fontWeight:700,
    letterSpacing:".12em", textTransform:"uppercase",
    color: TEXT_SEC, marginBottom:7,
    fontFamily:"'Inter', sans-serif",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

        .contact-root {
          background: #F7F8FC;
          font-family: 'Inter', -apple-system, sans-serif;
          padding: 104px 60px;
        }
        .contact-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1.2fr;
          gap: 80px; align-items: start;
        }

        /* ── Header ── */
        .contact-tag {
          display: inline-block; font-size: 10px; font-weight: 700;
          letter-spacing: .18em; text-transform: uppercase;
          color: ${BLUE}; border-left: 3px solid ${BLUE};
          padding-left: 10px; margin-bottom: 12px;
        }
        .contact-h2 {
          font-size: clamp(1.5rem, 2.8vw, 2rem);
          font-weight: 900; line-height: 1.12; letter-spacing: -.03em;
          color: ${TEXT_PRI}; margin: 0 0 14px;
        }
        .contact-h2 em { color: ${BLUE}; font-style: normal; }
        .contact-sub {
          font-size: 14px; line-height: 1.8; color: ${TEXT_SEC}; margin: 0;
        }

        /* ── Info cards ── */
        .contact-info-cards { display: flex; flex-direction: column; gap: 10px; margin-top: 32px; }
        .contact-info-card {
          display: flex; align-items: center; gap: 14px;
          padding: 16px 18px; border-radius: 8px;
          background: #FFFFFF; border: 1px solid ${BORDER};
          text-decoration: none;
          transition: border-color .2s, box-shadow .2s, transform .2s;
        }
        .contact-info-card:hover {
          border-color: ${BLUE};
          box-shadow: 0 4px 16px rgba(0,84,166,.10);
          transform: translateX(4px);
        }
        .contact-info-icon {
          width: 38px; height: 38px; border-radius: 7px; flex-shrink: 0;
          background: ${BLUE_TINT}; border: 1px solid ${BORDER};
          display: flex; align-items: center; justify-content: center;
          color: ${BLUE};
        }
        .contact-info-label {
          font-size: 9.5px; font-weight: 700;
          letter-spacing: .14em; text-transform: uppercase;
          color: ${TEXT_SEC}; margin-bottom: 3px;
        }
        .contact-info-value {
          font-size: 13.5px; font-weight: 600; color: ${TEXT_PRI};
        }

        /* ── Form card ── */
        .contact-form-card {
          background: #FFFFFF;
          border: 1px solid ${BORDER};
          border-radius: 12px; padding: 40px;
          box-shadow: 0 4px 24px rgba(0,84,166,.06);
        }
        .contact-form-title {
          font-size: 16px; font-weight: 700; letter-spacing: -.01em;
          color: ${TEXT_PRI}; margin: 0 0 26px;
        }
        .contact-fields { display: flex; flex-direction: column; gap: 18px; }

        /* ── Input shared ── */
        .contact-input {
          width: 100%; padding: 10px 14px;
          border-radius: 6px; border: 1.5px solid ${BORDER};
          background: #FFFFFF; color: ${TEXT_PRI};
          font-family: 'Inter', sans-serif; font-size: 13.5px;
          outline: none; box-sizing: border-box;
          transition: border-color .18s, box-shadow .18s;
        }
        .contact-input:focus {
          border-color: ${BLUE};
          box-shadow: 0 0 0 3px ${BLUE_TINT};
        }
        .contact-input::placeholder { color: #A8B0C0; }

        .contact-textarea { min-height: 110px; resize: none; }

        /* ── Submit ── */
        .contact-submit {
          width: 100%; padding: 13px 28px;
          background: ${BLUE}; color: #FFFFFF;
          border: none; border-radius: 6px; cursor: pointer;
          font-family: 'Inter', sans-serif;
          font-size: 13px; font-weight: 600; letter-spacing: .02em;
          box-shadow: 0 2px 8px rgba(0,84,166,.22);
          transition: background .18s, transform .12s, box-shadow .18s;
        }
        .contact-submit:hover {
          background: ${BLUE_DARK};
          transform: translateY(-1px);
          box-shadow: 0 5px 18px rgba(0,84,166,.28);
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .contact-root { padding: 72px 28px; }
          .contact-inner { grid-template-columns: 1fr; gap: 48px; }
          .contact-form-card { padding: 28px 24px; }
        }
        @media (max-width: 600px) {
          .contact-root { padding: 56px 20px; }
        }
      `}</style>

      <section id="contact" className="contact-root" ref={ref}>
        <div className="contact-inner">

          {/* ── Left info ── */}
          <div>
            <div className="ua-reveal">
              <span className="contact-tag">Get in Touch</span>
            </div>
            <h2 className="contact-h2 ua-reveal ua-d1">
              Have a <em>Question?</em>
            </h2>
            <p className="contact-sub ua-reveal ua-d2">
              Whether you need help right now or want to learn more, our team is
              always available — no question is too small.
            </p>

            <div className="contact-info-cards">
              {CONTACT_INFO.map((c, i) => {
                const Tag = c.href ? "a" : "div";
                return (
                  <Tag
                    key={i}
                    href={c.href || undefined}
                    target={c.href?.startsWith("http") ? "_blank" : undefined}
                    rel={c.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`contact-info-card ua-reveal ua-d${i + 2}`}
                  >
                    <div className="contact-info-icon">{c.icon}</div>
                    <div>
                      <div className="contact-info-label">{c.label}</div>
                      <div className="contact-info-value">{c.value}</div>
                    </div>
                  </Tag>
                );
              })}
            </div>
          </div>

          {/* ── Right form ── */}
          <div className="contact-form-card ua-reveal-right">
            <div className="contact-form-title">Send Us a Message</div>
            <div className="contact-fields">
              {FORM_FIELDS.map(f => (
                <div key={f.name}>
                  <label style={labelStyle}>{f.label}</label>
                  <input
                    className="contact-input"
                    type={f.type}
                    placeholder={f.placeholder}
                    name={f.name}
                  />
                </div>
              ))}
              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  className="contact-input contact-textarea"
                  placeholder="Tell us about your assignment or how we can help…"
                />
              </div>
              <button type="button" className="contact-submit">
                Send Message &nbsp;→
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}