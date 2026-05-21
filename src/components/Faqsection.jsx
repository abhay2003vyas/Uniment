import { useState } from "react";

const FAQS = [
  {
    q: "What is Uniment Assignments?",
    a: "Uniment Assignments is a UK-based academic support platform that has connected students with manually verified writers since 2018. Every writer on the platform has their degree certificate and identification checked by a member of our team before they are approved to take orders. We operate across 50+ academic subjects at undergraduate, postgraduate, and professional qualification levels across 8 countries.",
  },
  {
    q: "How does Uniment Assignments match students with writers?",
    a: "When you submit your brief, our team reviews your subject area, academic level, institution type, and deadline. We then identify writers from the verified pool whose documented qualifications and subject experience match your requirements. Standard matching happens within 30 minutes of payment. For urgent orders with a 6-hour deadline, matching happens within 10 minutes.",
  },
  {
    q: "Is Uniment Assignments a legitimate academic writing service?",
    a: "Uniment Assignments has operated since 2018 from our registered address in London at Suite 3456, Unit 3A, 34-35 Hatton Garden, EC1N 8DX. Every writer is ID-checked manually. Payments are processed through Stripe with full SSL encryption. No personal details or order information are shared with third parties. Our rating across Trustpilot and Google is 4.9 out of 5 based on verified student reviews.",
  },
  {
    q: "What academic subjects does Uniment Assignments cover?",
    a: "We cover more than 50 academic subjects at undergraduate, postgraduate, and professional qualification level. These include Business, Nursing, Law, Engineering, Computer Science, Psychology, Economics, Marketing, Finance, Sociology, Mathematics, History, and English Literature, as well as professional qualifications including CIPD, BTEC, QUALIFI, TEFL, IWFM, RQF, and CIM.",
  },
  {
    q: "Does Uniment Assignments use AI to write assignments?",
    a: "No. Every assignment is written from scratch by a human writer. Before delivery, all work is screened using AI detection tools and run through Turnitin. Both reports are provided with your completed order at no extra charge. The platform has maintained a zero AI policy across all orders since AI writing tools became widely available.",
  },
  {
    q: "Which countries does Uniment Assignments support students in?",
    a: "Uniment Assignments supports students in the United Kingdom, Australia, Canada, Singapore, Malaysia, Ireland, New Zealand, and the UAE. Our writers work across all relevant time zones and all deadlines are treated according to the student's local time, not UK time.",
  },
  {
    q: "How do I get a quote from Uniment Assignments?",
    a: "Fill in the order form on any page with your subject, word count, deadline, and academic level. No payment is required to receive a quote. Our team reviews your brief and responds with a price before you commit to anything. The process takes under 60 seconds from form submission to quote receipt.",
  },
  {
    q: "What is Uniment Assignments' on-time delivery rate?",
    a: "Our on-time delivery rate is 98% across all order types — from 6-hour urgent deadlines to 14-day standard orders. If we miss your confirmed deadline, you receive a full refund plus £50 in compensation. This applies to all confirmed orders without exception and is not subject to discretionary review.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .faq-section {
          background: #F5F5F7;
          padding: 80px 24px;
          font-family: 'Inter', -apple-system, sans-serif;
        }

        .faq-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        /* ── Left: sticky label column ── */
        .faq-left {
          position: sticky;
          top: 96px;
        }

        .faq-eyebrow {
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #9ca3af;
          margin-bottom: 14px;
        }

        .faq-heading {
          font-size: clamp(1.6rem, 2.6vw, 2.2rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: #111827;
          margin-bottom: 20px;
        }

        .faq-heading-accent {
          color: #C0392B;
        }

        .faq-desc {
          font-size: 14.5px;
          font-weight: 400;
          line-height: 1.75;
          color: #6b7280;
          margin-bottom: 36px;
          max-width: 400px;
        }

        /* Stats strip */
        .faq-stats {
          display: flex;
          gap: 0;
          padding-top: 28px;
          border-top: 1.5px solid #e5e7eb;
        }
        .faq-stat {
          flex: 1;
          padding-right: 24px;
          margin-right: 24px;
          border-right: 1px solid #e5e7eb;
        }
        .faq-stat:last-child {
          border-right: none;
          padding-right: 0;
          margin-right: 0;
        }
        .faq-stat-val {
          font-size: 1.4rem;
          font-weight: 900;
          letter-spacing: -0.03em;
          color: #C0392B;
          display: block;
          line-height: 1;
          margin-bottom: 5px;
        }
        .faq-stat-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.11em;
          text-transform: uppercase;
          color: #9ca3af;
        }

        /* CTA pill */
        .faq-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 32px;
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
          box-shadow: 0 2px 12px rgba(192, 57, 43, 0.22);
        }
        .faq-cta:hover {
          background: #A93226;
          border-color: #A93226;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(192, 57, 43, 0.32);
        }
        .faq-cta-arrow {
          font-size: 13px;
          transition: transform 0.18s;
        }
        .faq-cta:hover .faq-cta-arrow { transform: translateX(3px); }

        /* ── Right: accordion column ── */
        .faq-right {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* Accordion item */
        .faq-item {
          background: #ffffff;
          border: 1.5px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.22s, box-shadow 0.22s;
        }
        .faq-item.is-open {
          border-color: #C0392B;
          box-shadow: 0 4px 20px rgba(192, 57, 43, 0.09);
        }

        /* Question button */
        .faq-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: 'Inter', sans-serif;
          font-size: 14.5px;
          font-weight: 600;
          color: #111827;
          line-height: 1.4;
          transition: color 0.18s;
        }
        .faq-item.is-open .faq-btn { color: #C0392B; }

        /* Icon */
        .faq-icon {
          flex-shrink: 0;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1.5px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.22s, border-color 0.22s, transform 0.28s;
          color: #6b7280;
        }
        .faq-item.is-open .faq-icon {
          background: #C0392B;
          border-color: #C0392B;
          color: #fff;
          transform: rotate(45deg);
        }

        /* Answer panel — CSS height animation via grid */
        .faq-body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.32s cubic-bezier(0.22, 0.68, 0, 1.1);
        }
        .faq-item.is-open .faq-body {
          grid-template-rows: 1fr;
        }
        .faq-body-inner {
          overflow: hidden;
        }
        .faq-answer {
          padding: 0 20px 18px;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.78;
          color: #6b7280;
          border-top: 1px solid #f3f4f6;
          padding-top: 14px;
        }

        .faq-item.is-open .faq-answer {
          border-top-color: #fde8e6;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .faq-inner { grid-template-columns: 1fr; gap: 40px; }
          .faq-left { position: static; }
        }
        @media (max-width: 600px) {
          .faq-section { padding: 56px 16px; }
          .faq-stats { flex-wrap: wrap; gap: 20px; }
          .faq-stat { border-right: none; }
        }
      `}</style>

      <section className="faq-section" aria-label="Frequently asked questions">
        <div className="faq-inner">

          {/* ── Left column ── */}
          <div className="faq-left">
            <p className="faq-eyebrow">Got questions?</p>
            <h2 className="faq-heading">
              Common questions about{" "}
              <span className="faq-heading-accent">Uniment Assignments'</span>{" "}
              academic services
            </h2>
            <p className="faq-desc">
              Every query answered clearly — no jargon, no runaround. Can't find what you're looking for? Our team is online 24/7.
            </p>

            {/* Stats strip */}
            <div className="faq-stats">
              {[
                { val: "2018", label: "Est. London" },
                { val: "50+",  label: "Subjects" },
                { val: "8",    label: "Countries" },
                { val: "4.9★", label: "Avg Rating" },
              ].map(s => (
                <div className="faq-stat" key={s.label}>
                  <span className="faq-stat-val">{s.val}</span>
                  <span className="faq-stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="https://www.unimentassignments.solutions/faqs/" className="faq-cta">
              View all questions
              <span className="faq-cta-arrow" aria-hidden="true">→</span>
            </a>
          </div>

          {/* ── Right column: accordion ── */}
          <div className="faq-right">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  className={`faq-item${isOpen ? " is-open" : ""}`}
                  key={i}
                >
                  <button
                    className="faq-btn"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-body-${i}`}
                    id={`faq-btn-${i}`}
                  >
                    {faq.q}
                    <span className="faq-icon" aria-hidden="true">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4.75" y="0" width="1.5" height="11" rx="0.75" fill="currentColor"/>
                        <rect x="0"    y="4.75" width="11" height="1.5" rx="0.75" fill="currentColor"/>
                      </svg>
                    </span>
                  </button>

                  <div
                    className="faq-body"
                    id={`faq-body-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                  >
                    <div className="faq-body-inner">
                      <p className="faq-answer">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}