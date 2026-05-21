import {  useRef, useState } from "react";

const UNIVERSITIES = [
  {
    name: "University of Cambridge",
    img: "https://workingment.com/services-writer/1776944039-university-of-cambridge.webp",
    href: "https://workingment.com/university-of-cambridge-assignment-help/",
  },
  {
    name: "University of Alberta",
    img: "https://workingment.com/services-writer/1776943997-ua-logo.webp",
    href: null,
  },
  {
    name: "University of Greenwich",
    img: "https://workingment.com/services-writer/1776944137-university-of-greenwich.webp",
    href: "https://workingment.com/university-of-greenwich-assignment-help/",
  },
  {
    name: "University of Liverpool",
    img: "https://workingment.com/services-writer/1776944152-university-of-liverpool.webp",
    href: null,
  },
  {
    name: "University of London",
    img: "https://workingment.com/services-writer/1776944170-university-of-london.webp",
    href: "https://workingment.com/university-of-london-metropolitan-assignment-help/",
  },
  {
    name: "University of Manchester",
    img: "https://workingment.com/services-writer/1776944198-university-of-manchester.webp",
    href: null,
  },
  {
    name: "Adelphi University",
    img: "https://workingment.com/services-writer/1776944220-adelphi.webp",
    href: null,
  },
  {
    name: "University of Auckland",
    img: "https://workingment.com/services-writer/1776944237-aukland.webp",
    href: null,
  },
  {
    name: "University of Bradford",
    img: "https://workingment.com/services-writer/1776944256-bradford.webp",
    href: "https://workingment.com/university-of-bradford-assignment-help/",
  },
  {
    name: "City University of London",
    img: "https://workingment.com/services-writer/1776944278-city-university-of-london.webp",
    href: null,
  },
  {
    name: "Durham University",
    img: "https://workingment.com/services-writer/1776944296-durham-university.webp",
    href: "https://workingment.com/durham-university-assignment-help/",
  },
  {
    name: "Edinburgh Napier University",
    img: "https://workingment.com/services-writer/1776944315-edinburgh-napier-university.webp",
    href: null,
  },
  {
    name: "Newcastle University",
    img: "https://workingment.com/services-writer/1776944682-newcastle-university.webp",
    href: null,
  },
  {
    name: "Robert Gordon University",
    img: "https://workingment.com/services-writer/1776944717-RB-university.webp",
    href: null,
  },
  {
    name: "Universities UK",
    img: "https://workingment.com/services-writer/1776944021-universities-uk.webp",
    href: null,
  },
];

export default function UniversitySlider() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  // Duplicate for seamless infinite loop
  const items = [...UNIVERSITIES, ...UNIVERSITIES];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

        .us-section {
          background: #ffffff;
          padding: 56px 0 52px;
          overflow: hidden;
          font-family: 'Inter', -apple-system, sans-serif;
          border-top: 1px solid #f3f4f6;
          border-bottom: 1px solid #f3f4f6;
        }

        /* Section label — uppercase eyebrow, same pattern as h-stat-label */
        .us-eyebrow {
          text-align: center;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #9ca3af;
          margin-bottom: 6px;
        }

        /* Section headline — matches h-headline weight & color */
        .us-heading {
          text-align: center;
          font-size: clamp(1.1rem, 2.2vw, 1.4rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #111827;
          margin-bottom: 36px;
        }

        /* Red accent word — same #C0392B as accent in Hero */
        .us-heading-accent {
          color: #C0392B;
        }

        /* Track wrapper with fade masks */
        .us-track-outer {
          position: relative;
          overflow: hidden;
          cursor: grab;
        }
        .us-track-outer:active { cursor: grabbing; }

        /* Fade-out edges — same #ffffff as section bg */
        .us-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }
        .us-fade-left  { left: 0;  background: linear-gradient(to right, #ffffff, transparent); }
        .us-fade-right { right: 0; background: linear-gradient(to left,  #ffffff, transparent); }

        /* Scrolling track */
        .us-track {
          display: flex;
          gap: 14px;
          width: max-content;
          animation: usScroll 32s linear infinite;
          padding: 4px 0;
        }
        .us-track.paused { animation-play-state: paused; }

        @keyframes usScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* Individual logo card — matches .h-stat borders & neutral palette */
        .us-card {
          width: 180px;
          height: 72px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px 16px;
          background: #ffffff;
          border: 1.5px solid #e5e7eb;
          border-radius: 10px;
          transition: border-color 0.22s, box-shadow 0.22s, transform 0.18s;
        }
        .us-card:hover {
          border-color: #C0392B;
          box-shadow: 0 4px 18px rgba(192, 57, 43, 0.10);
          transform: translateY(-2px);
        }

        /* Link wrapper — no underline, fills the card */
        .us-card-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          text-decoration: none;
        }

        /* Logo image — greyscale by default, full color on hover */
        .us-card img {
          max-width: 148px;
          max-height: 48px;
          object-fit: contain;
          filter: grayscale(100%) opacity(0.55);
          transition: filter 0.22s;
          user-select: none;
          -webkit-user-drag: none;
        }
        .us-card:hover img {
          filter: grayscale(0%) opacity(1);
        }

        /* Bottom pill — mirrors h-btn-primary pill style */
        .us-pill-row {
          display: flex;
          justify-content: center;
          margin-top: 36px;
        }
        .us-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 22px;
          background: transparent;
          color: #111827;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 9999px;
          border: 2px solid #e5e7eb;
          transition: border-color 0.18s, background 0.18s, transform 0.13s;
          letter-spacing: 0.01em;
        }
        .us-pill:hover {
          border-color: #C0392B;
          background: rgba(192, 57, 43, 0.04);
          transform: translateY(-1px);
        }
        .us-pill-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #C0392B;
          flex-shrink: 0;
        }

        /* Count badge — matches h-stat-val color */
        .us-count {
          font-weight: 900;
          color: #C0392B;
        }
      `}</style>

      <section className="us-section" aria-label="Trusted universities">

        {/* Eyebrow + Heading */}
        <p className="us-eyebrow">Trusted since 2018</p>
        <h2 className="us-heading">
          Supported by students at{" "}
          <span className="us-heading-accent">leading universities</span>{" "}
          worldwide
        </h2>

        {/* Slider */}
        <div
          className="us-track-outer"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="us-fade us-fade-left"  aria-hidden="true" />
          <div className="us-fade us-fade-right" aria-hidden="true" />

          <div
            ref={trackRef}
            className={`us-track${paused ? " paused" : ""}`}
          >
            {items.map((uni, i) => (
              <div className="us-card" key={i}>
                {uni.href ? (
                  <a
                    href={uni.href}
                    className="us-card-link"
                    aria-label={`${uni.name} assignment help`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={uni.img}
                      alt={uni.name}
                      width={148}
                      height={48}
                      loading="lazy"
                      draggable={false}
                    />
                  </a>
                ) : (
                  <img
                    src={uni.img}
                    alt={uni.name}
                    width={148}
                    height={48}
                    loading="lazy"
                    draggable={false}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom pill CTA */}
        <div className="us-pill-row">
          <a href="/university-assignment-help" className="us-pill">
            <span className="us-pill-dot" aria-hidden="true" />
            <span className="us-count">50+</span>&nbsp;universities supported
          </a>
        </div>

      </section>
    </>
  );
}