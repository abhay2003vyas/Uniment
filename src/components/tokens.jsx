/* ═══════════════════════════════════════════════
   DESIGN TOKENS — Uniment Assignment
   Sage & Walnut + Slate Professional System
═══════════════════════════════════════════════ */

export const C = {
  // Core backgrounds
  ivory:       "#F7F4EC",
  white:       "#FFFFFF",
  offWhite:    "#FAFAF8",

  // Walnut browns — primary brand
  walnut900:   "#3D2314",
  walnut700:   "#6B4A35",
  walnut500:   "#8A6245",
  walnut300:   "#A67C5B",
  walnut100:   "#E8DDD4",

  // Sage greens — secondary accent
  sage700:     "#637554",
  sage500:     "#8F9D76",
  sage400:     "#AEB89A",
  sage200:     "#D4DACA",
  sage100:     "#E4E8DB",
  sage50:      "#F0F3EC",

  // Slate — neutral / professional
  slate900:    "#0F172A",
  slate800:    "#1E293B",
  slate700:    "#334155",
  slate500:    "#64748B",
  slate300:    "#CBD5E1",
  slate100:    "#F1F5F9",

  // Warm neutrals
  stone800:    "#292524",
  stone600:    "#57534E",
  stone400:    "#A8A29E",
  stone200:    "#E7E5E4",
  stone100:    "#F5F5F4",

  // Semantic
  textPrimary: "#1C1917",
  textSecond:  "#57534E",
  textMuted:   "#A8A29E",

  // Gold accent — for stars / premium feel
  gold:        "#C9993A",
  goldLight:   "#F0D078",
};

export const FONT = {
  display: "'Playfair Display', Georgia, serif",
  sans:    "'Outfit', system-ui, sans-serif",
};

// CSS string injected once at root
export const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Outfit', system-ui, sans-serif;
    background: ${C.ivory};
    color: ${C.textPrimary};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  /* ── Scroll reveal utility ── */
  .ua-reveal {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1);
  }
  .ua-reveal.ua-visible {
    opacity: 1;
    transform: translateY(0);
  }
  .ua-reveal-left {
    opacity: 0;
    transform: translateX(-32px);
    transition: opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1);
  }
  .ua-reveal-left.ua-visible { opacity:1; transform:translateX(0); }
  .ua-reveal-right {
    opacity: 0;
    transform: translateX(32px);
    transition: opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1);
  }
  .ua-reveal-right.ua-visible { opacity:1; transform:translateX(0); }

  /* Stagger delays */
  .ua-d1 { transition-delay: .05s; }
  .ua-d2 { transition-delay: .12s; }
  .ua-d3 { transition-delay: .20s; }
  .ua-d4 { transition-delay: .28s; }
  .ua-d5 { transition-delay: .38s; }

  /* ── Typography helpers ── */
  .display { font-family: 'Playfair Display', Georgia, serif; }
  .body-sans { font-family: 'Outfit', system-ui, sans-serif; }

  /* ── Shared buttons ── */
  .ua-btn-walnut {
    display: inline-flex; align-items: center; gap: 8px;
    background: ${C.walnut700}; color: #fff;
    padding: 13px 28px; border-radius: 6px;
    font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 600;
    letter-spacing: .04em; text-decoration: none; border: none; cursor: pointer;
    transition: background .22s, transform .18s, box-shadow .22s;
    box-shadow: 0 2px 12px rgba(107,74,53,.22);
  }
  .ua-btn-walnut:hover {
    background: ${C.walnut500};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(107,74,53,.30);
  }

  .ua-btn-outline {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: ${C.walnut700};
    padding: 12px 26px; border-radius: 6px;
    font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 600;
    letter-spacing: .04em; text-decoration: none;
    border: 1.5px solid ${C.walnut300};
    transition: all .22s; cursor: pointer;
  }
  .ua-btn-outline:hover {
    background: ${C.walnut100};
    border-color: ${C.walnut700};
    transform: translateY(-2px);
  }

  .ua-btn-sage {
    display: inline-flex; align-items: center; gap: 8px;
    background: ${C.sage500}; color: #fff;
    padding: 13px 28px; border-radius: 6px;
    font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 600;
    letter-spacing: .04em; text-decoration: none; border: none; cursor: pointer;
    transition: all .22s;
  }
  .ua-btn-sage:hover { background: ${C.sage700}; transform: translateY(-2px); }

  /* ── Section label ── */
  .ua-label {
    display: inline-flex; align-items: center; gap: 10px;
    font-family: 'Outfit', sans-serif;
    font-size: 11px; font-weight: 700;
    letter-spacing: .18em; text-transform: uppercase;
    color: ${C.sage700};
    margin-bottom: 14px;
  }
  .ua-label::before {
    content: '';
    display: block; width: 28px; height: 1.5px;
    background: currentColor;
  }

  /* ── Section headings ── */
  .ua-h2 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(2rem, 4vw, 2.9rem);
    font-weight: 700; line-height: 1.18;
    color: ${C.textPrimary};
    margin-bottom: 0;
  }
  .ua-h2 em {
    font-style: italic;
    color: ${C.walnut700};
  }

  /* ── Input ── */
  .ua-input {
    width: 100%; padding: 12px 16px;
    border-radius: 8px; border: 1.5px solid ${C.stone200};
    background: ${C.white}; color: ${C.textPrimary};
    font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 400;
    outline: none; transition: border-color .2s, box-shadow .2s;
  }
  .ua-input:focus {
    border-color: ${C.sage500};
    box-shadow: 0 0 0 3px ${C.sage100};
  }
  .ua-input::placeholder { color: ${C.stone400}; }

  /* ── Card base ── */
  .ua-card {
    background: ${C.white};
    border: 1px solid ${C.stone200};
    border-radius: 14px;
    transition: box-shadow .25s, transform .25s;
  }
  .ua-card:hover {
    box-shadow: 0 12px 40px rgba(28,25,23,.09);
    transform: translateY(-3px);
  }

  /* ── Ticker animation ── */
  @keyframes ua-ticker {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* ── Floating blob ── */
  @keyframes ua-blob {
    0%,100% { border-radius: 58% 42% 62% 38% / 45% 55% 45% 55%; }
    50%      { border-radius: 38% 62% 42% 58% / 55% 45% 55% 45%; }
  }

  /* ── Counter animation ── */
  @keyframes ua-count { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }

  /* ── Responsive breakpoints ── */
  @media (max-width: 900px) {
    .ua-hide-mobile { display: none !important; }
    .ua-grid-2 { grid-template-columns: 1fr !important; }
    .ua-grid-3 { grid-template-columns: 1fr !important; }
  }
  @media (max-width: 600px) {
    .ua-px { padding-left: 20px !important; padding-right: 20px !important; }
  }
`;