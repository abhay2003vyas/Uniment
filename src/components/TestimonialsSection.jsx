import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

// ── Swap these out via admin panel later ──
const PROOF_IMAGES = [
  { src: "/proofs/proof-1.jpg", label: "WhatsApp — Result" },
  { src: "/proofs/proof-2.jpg", label: "Grade: 72% — MSc" },
  { src: "/proofs/proof-3.jpg", label: "WhatsApp — Passed" },
  { src: "/proofs/proof-4.jpg", label: "Grade: 68% — BSc" },
  { src: "/proofs/proof-5.jpg", label: "WhatsApp — Thank you" },
  { src: "/proofs/proof-6.jpg", label: "Grade: 81% — MBA" },
  { src: "/proofs/proof-7.jpg", label: "WhatsApp — Result" },
  { src: "/proofs/proof-8.jpg", label: "Grade: 65% — Law" },
];

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  if (index === null) return null;
  return (
    <div
      style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.82)", zIndex:9999, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}
      onClick={onClose}
    >
      <button onClick={onClose} style={{ position:"fixed", top:18, right:22, background:"rgba(255,255,255,.15)", border:"none", color:"#fff", fontSize:20, width:38, height:38, borderRadius:"50%", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>✕</button>
      <button onClick={e => { e.stopPropagation(); onPrev(); }} style={{ position:"fixed", left:16, top:"50%", transform:"translateY(-50%)", background:"rgba(255,255,255,.15)", border:"none", color:"#fff", fontSize:22, width:44, height:44, borderRadius:"50%", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>‹</button>
      <img
        src={images[index].src}
        alt={images[index].label}
        onClick={e => e.stopPropagation()}
        style={{ maxWidth:"90vw", maxHeight:"88vh", borderRadius:10, objectFit:"contain", display:"block" }}
      />
      <button onClick={e => { e.stopPropagation(); onNext(); }} style={{ position:"fixed", right:16, top:"50%", transform:"translateY(-50%)", background:"rgba(255,255,255,.15)", border:"none", color:"#fff", fontSize:22, width:44, height:44, borderRadius:"50%", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>›</button>
      <div style={{ position:"fixed", bottom:20, left:"50%", transform:"translateX(-50%)", color:"rgba(255,255,255,.7)", fontSize:12, fontFamily:"'Inter',sans-serif" }}>
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const ref = useScrollReveal();

  const total = PROOF_IMAGES.length;
  const prev = () => setLightboxIdx(i => (i - 1 + total) % total);
  const next = () => setLightboxIdx(i => (i + 1) % total);

  // keyboard nav
  useState(() => {
    const handler = e => {
      if (lightboxIdx === null) return;
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

        .proof-root {
          background: #F7F8FC;
          font-family: 'Inter', -apple-system, sans-serif;
          padding: 104px 60px;
        }
        .proof-inner { max-width: 1200px; margin: 0 auto; }

        .proof-header { text-align: center; margin-bottom: 52px; }
        .proof-tag {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 10px; font-weight: 700;
          letter-spacing: .18em; text-transform: uppercase;
          color: #C0392B; margin-bottom: 12px;
        }
        .proof-tag-line { width: 24px; height: 2px; background: #C0392B; border-radius: 2px; }
        .proof-h2 {
          font-size: clamp(1.5rem, 2.8vw, 2rem);
          font-weight: 900; line-height: 1.1;
          letter-spacing: -.03em; color: #111827; margin-bottom: 8px;
        }
        .proof-h2 em { color: #C0392B; font-style: normal; }
        .proof-sub { font-size: 13px; color: #6b7280; line-height: 1.7; }

        .proof-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .proof-item {
          border-radius: 10px; overflow: hidden;
          border: 1px solid #e5e7eb;
          cursor: pointer; aspect-ratio: 3/4;
          position: relative; background: #f3f4f6;
          transition: transform .18s, box-shadow .18s;
        }
        .proof-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(0,0,0,.13);
        }
        .proof-item img {
          width: 100%; height: 100%; object-fit: cover; display: block;
        }
        .proof-item-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0);
          transition: background .2s;
          display: flex; align-items: center; justify-content: center;
        }
        .proof-item:hover .proof-item-overlay { background: rgba(0,0,0,.28); }
        .proof-zoom {
          opacity: 0; color: #fff; font-size: 28px;
          transition: opacity .2s;
        }
        .proof-item:hover .proof-zoom { opacity: 1; }
        .proof-label {
          position: absolute; bottom: 8px; left: 8px;
          background: rgba(0,0,0,.55); color: #fff;
          font-size: 9.5px; font-weight: 600;
          padding: 3px 8px; border-radius: 4px; letter-spacing: .04em;
        }

        @media (max-width: 960px) {
          .proof-root { padding: 72px 28px; }
          .proof-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 600px) {
          .proof-root { padding: 56px 20px; }
          .proof-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <section id="feedback" className="proof-root" ref={ref}>
        <div className="proof-inner">

          <div className="proof-header">
            <div className="ua-reveal">
              <div className="proof-tag">
                <span className="proof-tag-line" />
                Student Proof
                <span className="proof-tag-line" />
              </div>
            </div>
            <h2 className="proof-h2 ua-reveal ua-d1">
              Real Results from <em>Real Students</em>
            </h2>
            <p className="proof-sub ua-reveal ua-d2">
              Screenshots shared by our students — grades, chats & submission confirmations.
            </p>
          </div>

          <div className="proof-grid">
            {PROOF_IMAGES.map((img, i) => (
              <div
                key={i}
                className="proof-item ua-reveal"
                style={{ animationDelay: `${i * 0.05}s` }}
                onClick={() => setLightboxIdx(i)}
              >
                <img src={img.src} alt={img.label} loading="lazy" />
                <div className="proof-item-overlay">
                  <span className="proof-zoom">⊕</span>
                </div>
                <div className="proof-label">{img.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Lightbox
        images={PROOF_IMAGES}
        index={lightboxIdx}
        onClose={() => setLightboxIdx(null)}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}