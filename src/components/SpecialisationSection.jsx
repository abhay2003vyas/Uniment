import { useScrollReveal } from "./useScrollReveal";

const COLUMNS = [
  {
    heading: "Core Disciplines",
    count: "9 subjects",
    colorClass: "col-red",
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    items: ["Dissertations","Research Proposal","Programming","Finance","Management","History","Pharmacy","Health & Social Care","Psychology"],
  },
  {
    heading: "Advanced Studies",
    count: "9 subjects",
    colorClass: "col-slate",
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    items: ["Project Management","Thesis Statement","Calculus","Economics","International Relations","Nursing","Financial Statements","Sociology","Case Study"],
  },
  {
    heading: "Research & Analysis",
    count: "9 subjects",
    colorClass: "col-charcoal",
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    items: ["Report Writing","Statistics","Accounting","Law","Marketing","Data Science","Political Science","Literature Review","Human Resources"],
  },
];

export default function SpecialisationSection() {
  const ref = useScrollReveal();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

        .sp-root {
          background: #FFFFFF;
          font-family: 'Inter', -apple-system, sans-serif;
          padding: 104px 60px;
        }
        .sp-inner { max-width: 1200px; margin: 0 auto; }

        /* ── Header ── */
        .sp-header { text-align: center; margin-bottom: 56px; }

        .sp-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 10px; font-weight: 700;
          letter-spacing: .18em; text-transform: uppercase;
          color: #C0392B; margin-bottom: 14px;
        }
        .sp-tag-line {
          width: 28px; height: 2px;
          background: #C0392B; border-radius: 2px;
        }

        .sp-h2 {
          font-size: clamp(1.5rem, 2.8vw, 1.9rem);
          font-weight: 900; line-height: 1.1;
          letter-spacing: -.03em; color: #111827;
          margin: 0 0 12px;
        }
        .sp-h2 em { color: #C0392B; font-style: normal; }

        .sp-sub {
          font-size: 13.5px; line-height: 1.8;
          color: #6b7280; max-width: 460px; margin: 0 auto;
        }

        /* ── Grid ── */
        .sp-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .sp-col {
          border-radius: 10px; overflow: hidden;
          border: 1px solid #e5e7eb; background: #FFFFFF;
          transition: box-shadow .22s, border-color .22s, transform .18s;
        }

        /* Per-column colour skins */
        .col-red .sp-col-icon  { background: #fff5f5; color: #C0392B; }
        .col-red .sp-col-title { color: #C0392B; }
        .col-red .sp-chip-bullet { background: #C0392B; }
        .col-red.sp-col:hover {
          box-shadow: 0 10px 36px rgba(192,57,43,.10);
          border-color: #C0392B; transform: translateY(-3px);
        }
        .col-red .sp-chip:hover { border-color: #fde8e8; background: #fff5f5; }
        .col-red .sp-chip-num  { color: #C0392B; }

        .col-slate .sp-col-icon  { background: #f1f5f9; color: #334155; }
        .col-slate .sp-col-title { color: #334155; }
        .col-slate .sp-chip-bullet { background: #64748b; }
        .col-slate.sp-col:hover {
          box-shadow: 0 10px 36px rgba(100,116,139,.10);
          border-color: #94a3b8; transform: translateY(-3px);
        }
        .col-slate .sp-chip:hover { border-color: #e2e8f0; background: #f8fafc; }
        .col-slate .sp-chip-num  { color: #64748b; }

        .col-charcoal .sp-col-icon  { background: #f9fafb; color: #374151; }
        .col-charcoal .sp-col-title { color: #374151; }
        .col-charcoal .sp-chip-bullet { background: #374151; }
        .col-charcoal.sp-col:hover {
          box-shadow: 0 10px 36px rgba(55,65,81,.10);
          border-color: #9ca3af; transform: translateY(-3px);
        }
        .col-charcoal .sp-chip:hover { border-color: #e5e7eb; background: #f9fafb; }
        .col-charcoal .sp-chip-num  { color: #374151; }

        /* Column head */
        .sp-col-head {
          padding: 18px 18px 14px;
          display: flex; align-items: center; gap: 10px;
          border-bottom: 1px solid #f3f4f6;
          background: #fafafa;
        }
        .sp-col-icon {
          width: 32px; height: 32px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .sp-col-meta { flex: 1; }
        .sp-col-title {
          font-size: 11px; font-weight: 700;
          letter-spacing: .12em; text-transform: uppercase;
          line-height: 1; margin-bottom: 2px;
        }
        .sp-col-count {
          font-size: 10px; color: #9ca3af; font-weight: 500;
        }

        /* Chips */
        .sp-col-body {
          padding: 10px; display: flex; flex-direction: column; gap: 3px;
        }
        .sp-chip {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 12px; border-radius: 6px;
          border: 1px solid transparent;
          cursor: default;
          transition: all .16s;
        }
        .sp-chip:hover { transform: translateX(4px); }
        .sp-chip:hover .sp-chip-num { opacity: 1; }

        .sp-chip-bullet {
          width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0;
        }
        .sp-chip-label {
          font-size: 12.5px; font-weight: 500;
          color: #1f2937; flex: 1; line-height: 1;
        }
        .sp-chip-num {
          font-size: 10px; font-weight: 700;
          opacity: 0; transition: opacity .16s;
          letter-spacing: .04em;
        }

        /* Footer CTA */
        .sp-footer { text-align: center; margin-top: 48px; }
        .sp-footer-box {
          display: inline-flex; align-items: center; gap: 20px;
          background: #111827; border-radius: 10px;
          padding: 20px 32px; flex-wrap: wrap; justify-content: center;
        }
        .sp-footer-text {
          font-size: 13px; color: rgba(255,255,255,.7); font-weight: 500; margin: 0;
        }
        .sp-footer-text strong { color: #fff; font-weight: 700; }

        .sp-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 10px 22px;
          background: #C0392B; color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; font-weight: 700;
          letter-spacing: .04em; border-radius: 999px;
          text-decoration: none;
          transition: background .16s, transform .13s;
          white-space: nowrap;
        }
        .sp-btn:hover { background: #A93226; transform: translateY(-1px); }
        .sp-btn svg { transition: transform .16s; }
        .sp-btn:hover svg { transform: translateX(2px); }

        /* Responsive */
        @media (max-width: 900px) {
          .sp-root { padding: 72px 28px; }
          .sp-grid { grid-template-columns: 1fr; gap: 14px; }
        }
        @media (max-width: 600px) {
          .sp-root { padding: 56px 20px; }
          .sp-footer-box { padding: 16px 20px; }
        }
      `}</style>

      <section id="specialisation" className="sp-root" ref={ref}>
        <div className="sp-inner">

          {/* Header */}
          <div className="sp-header">
            <div className="ua-reveal">
              <div className="sp-tag">
                <span className="sp-tag-line" />
                What We Cover
                <span className="sp-tag-line" />
              </div>
            </div>
            <h2 className="sp-h2 ua-reveal ua-d1">
              Our Areas of <em>Specialisation</em>
            </h2>
            <p className="sp-sub ua-reveal ua-d2">
              From undergraduate coursework to doctoral research — our experts cover every academic discipline.
            </p>
          </div>

          {/* Column grid */}
          <div className="sp-grid">
            {COLUMNS.map((col, ci) => (
              <div className={`sp-col ${col.colorClass} ua-reveal ua-d${ci + 2}`} key={ci}>
                <div className="sp-col-head">
                  <div className="sp-col-icon">{col.icon}</div>
                  <div className="sp-col-meta">
                    <div className="sp-col-title">{col.heading}</div>
                    <div className="sp-col-count">{col.count}</div>
                  </div>
                </div>
                <div className="sp-col-body">
                  {col.items.map((item, ii) => (
                    <div className="sp-chip" key={ii}>
                      <span className="sp-chip-bullet" />
                      <span className="sp-chip-label">{item}</span>
                      <span className="sp-chip-num">→</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA — dark pill matching AboutSection banner */}
          <div className="sp-footer ua-reveal">
            <div className="sp-footer-box">
              <p className="sp-footer-text">
                <strong>Don't see your subject?</strong> We cover 50+ more disciplines.
              </p>
              <a href="#contact" className="sp-btn">
                Contact Us
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}