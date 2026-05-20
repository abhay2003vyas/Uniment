const SUBJECTS = [
  "Mathematics", "Physics", "Chemistry", "Computer Science",
  "English", "Business Studies", "Economics", "Biology",
  "History", "Law", "Psychology", "Statistics", "Data Science",
  "Accounting", "Marketing", "Nursing",
];

export default function SubjectTicker() {
  const doubled = [...SUBJECTS, ...SUBJECTS];

  return (
    <>
      <style>{`
        .ticker-root {
          background: #F5F5F7;
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
          overflow: hidden;
          position: relative;
        }

        .ticker-root::before,
        .ticker-root::after {
          content: '';
          position: absolute; top: 0; bottom: 0; z-index: 2;
          width: 100px; pointer-events: none;
        }
        .ticker-root::before {
          left: 0;
          background: linear-gradient(to right, #F5F5F7, transparent);
        }
        .ticker-root::after {
          right: 0;
          background: linear-gradient(to left, #F5F5F7, transparent);
        }

        .ticker-track {
          display: flex;
          gap: 8px;
          padding: 14px 0;
          width: max-content;
          animation: tickerScroll 36s linear infinite;
        }
        .ticker-track:hover { animation-play-state: paused; }

        .ticker-pill {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 6px 16px;
          border-radius: 3px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          font-family: 'Inter', -apple-system, sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: .10em; text-transform: uppercase;
          color: #111827;
          white-space: nowrap;
          cursor: default;
          transition: background .18s, border-color .18s, color .18s;
        }
        .ticker-pill:hover {
          background: #fff5f5;
          border-color: #f5c6c6;
          color: #C0392B;
        }
        .ticker-pill:hover .ticker-dot {
          background: #C0392B;
        }

        .ticker-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #C0392B;
          flex-shrink: 0;
          transition: background .18s;
        }

        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <div className="ticker-root" aria-hidden="true">
        <div className="ticker-track">
          {doubled.map((s, i) => (
            <span className="ticker-pill" key={i}>
              <span className="ticker-dot" />
              {s}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}