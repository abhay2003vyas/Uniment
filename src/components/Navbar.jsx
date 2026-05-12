import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Feedback / Review", href: "#feedback" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Comfortaa:wght@700&display=swap');

        .navbar-root {
          font-family: 'Nunito', sans-serif;
        }

        .logo-font {
          font-family: 'Comfortaa', cursive;
        }

        .nav-glass {
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1.5px solid rgba(255,255,255,0.6);
          box-shadow: 0 4px 32px 0 rgba(120, 180, 230, 0.13);
          transition: all 0.35s cubic-bezier(.4,0,.2,1);
        }

        .nav-glass.scrolled {
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 6px 40px 0 rgba(100, 160, 220, 0.18);
        }

        /* Animated gradient underline for logo */
        .logo-badge {
          background: linear-gradient(135deg, #f9a8d4, #fcd34d, #6ee7b7, #93c5fd);
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
          border-radius: 14px;
          padding: 6px 14px;
          box-shadow: 0 4px 16px rgba(147,197,253,0.35);
        }

        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Nav link pill hover */
        .nav-link {
          position: relative;
          padding: 7px 18px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.01em;
          color: #64748b;
          transition: color 0.2s, background 0.2s;
          cursor: pointer;
          text-decoration: none;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%) scaleX(0);
          height: 3px;
          width: 60%;
          border-radius: 99px;
          background: linear-gradient(90deg, #fb7185, #fbbf24, #34d399, #60a5fa);
          transition: transform 0.3s cubic-bezier(.4,0,.2,1);
        }

        .nav-link:hover {
          color: #1e293b;
          background: rgba(147,197,253,0.12);
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          transform: translateX(-50%) scaleX(1);
        }

        .nav-link.active {
          color: #1e293b;
          background: rgba(147,197,253,0.14);
        }

        /* CTA buttons */
        .btn-signin {
          background: white;
          color: #60a5fa;
          border: 2px solid #93c5fd;
          border-radius: 999px;
          padding: 8px 22px;
          font-weight: 800;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.22s;
          text-decoration: none;
          display: inline-block;
        }

        .btn-signin:hover {
          background: #eff6ff;
          border-color: #60a5fa;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(96,165,250,0.25);
        }

        .btn-signup {
          background: linear-gradient(135deg, #f472b6 0%, #fb923c 50%, #fbbf24 100%);
          color: white;
          border: none;
          border-radius: 999px;
          padding: 9px 24px;
          font-weight: 800;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.22s;
          text-decoration: none;
          display: inline-block;
          box-shadow: 0 4px 18px rgba(251,146,60,0.32);
        }

        .btn-signup:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(251,146,60,0.4);
          filter: brightness(1.06);
        }

        /* Mobile menu */
        .mobile-menu {
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px);
          border-top: 1.5px solid rgba(200,220,255,0.4);
          animation: slideDown 0.28s cubic-bezier(.4,0,.2,1);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Hamburger lines */
        .bar {
          display: block;
          width: 24px;
          height: 2.5px;
          border-radius: 3px;
          background: #94a3b8;
          transition: all 0.3s;
        }

        .bar-top.open    { transform: translateY(8px) rotate(45deg); background: #f472b6; }
        .bar-mid.open    { opacity: 0; transform: scaleX(0); }
        .bar-bot.open    { transform: translateY(-8px) rotate(-45deg); background: #f472b6; }

        /* Colorful dot accent in logo */
        .dot-row span {
          display: inline-block;
          width: 7px; height: 7px;
          border-radius: 50%;
          margin: 0 2px;
          animation: dotBounce 1.6s infinite;
        }
        .dot-row span:nth-child(1) { background:#fb7185; animation-delay:0s; }
        .dot-row span:nth-child(2) { background:#fbbf24; animation-delay:0.2s; }
        .dot-row span:nth-child(3) { background:#34d399; animation-delay:0.4s; }

        @keyframes dotBounce {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-4px); }
        }
      `}</style>

      <nav className={`navbar-root fixed top-0 left-0 right-0 z-50 nav-glass ${scrolled ? "scrolled" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px]">

            {/* ── LOGO ── */}
            <a href="#home" className="flex items-center gap-3 no-underline group">
              <div className="logo-badge flex items-center gap-2">
                {/* Book icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="8" height="18" rx="2" fill="white" fillOpacity="0.9"/>
                  <rect x="13" y="3" width="8" height="18" rx="2" fill="white" fillOpacity="0.7"/>
                  <line x1="7" y1="7" x2="7" y2="17" stroke="#fb923c" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="logo-font text-white text-[1.1rem] tracking-wide drop-shadow">
                  Uniment
                </span>
              </div>

              <div className="hidden sm:flex flex-col leading-tight">
                <span className="font-black text-[1.05rem] text-slate-700 tracking-tight">Assignment</span>
                <div className="dot-row flex items-center mt-[1px]">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </a>

            {/* ── DESKTOP NAV LINKS ── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`nav-link ${activeLink === link.label ? "active" : ""}`}
                  onClick={() => setActiveLink(link.label)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* ── CTA BUTTONS ── */}
            <div className="hidden md:flex items-center gap-3">
              <a href="#signin" className="btn-signin">Sign In</a>
              <a href="#signup" className="btn-signup">Sign Up ✦</a>
            </div>

            {/* ── MOBILE HAMBURGER ── */}
            <button
              className="md:hidden flex flex-col gap-[5.5px] p-2 rounded-xl hover:bg-slate-100 transition"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`bar bar-top ${menuOpen ? "open" : ""}`}></span>
              <span className={`bar bar-mid ${menuOpen ? "open" : ""}`}></span>
              <span className={`bar bar-bot ${menuOpen ? "open" : ""}`}></span>
            </button>
          </div>
        </div>

        {/* ── MOBILE DROPDOWN ── */}
        {menuOpen && (
          <div className="mobile-menu md:hidden px-4 pb-5 pt-2">
            <div className="flex flex-col gap-1 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`nav-link text-base ${activeLink === link.label ? "active" : ""}`}
                  onClick={() => { setActiveLink(link.label); setMenuOpen(false); }}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex gap-3 pt-2 border-t border-slate-100">
              <a href="#signin" className="btn-signin flex-1 text-center">Sign In</a>
              <a href="#signup" className="btn-signup flex-1 text-center">Sign Up ✦</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}