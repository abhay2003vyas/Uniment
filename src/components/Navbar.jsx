import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

import logo from "../assets/logo.jpeg";

const navLinks = [
  { label: "Home",     href: "#home"     },
  { label: "About",    href: "#about"    },
  { label: "Services", href: "#services" },
  { label: "Blogs",    href: "#blogs"    },
  { label: "Reviews",  href: "#reviews"  },
  { label: "Contact",  href: "#contact"  },
];

const styles = {
  header: (scrolled) => ({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    width: "100%",
    backgroundColor: scrolled ? "rgba(255,255,255,0.96)" : "#ffffff",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    boxShadow: scrolled
      ? "0 2px 24px rgba(0,0,0,0.08)"
      : "0 1px 0 0 #f3f4f6",
    transition: "all 0.3s ease",
  }),

  inner: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 48px",
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    alignItems: "center",
    height: "72px",
    gap: "24px",
  },

  logoLink: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none",
    width: "fit-content",
  },

  logoIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "14px",
    backgroundColor: "#111827",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "0 4px 12px rgba(17,24,39,0.25)",
  },

  logoName: {
    fontSize: "15px",
    fontWeight: 700,
    color: "#111827",
    lineHeight: 1.2,
    margin: 0,
    letterSpacing: "-0.2px",
  },

  logoSub: {
    fontSize: "9.5px",
    fontWeight: 600,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "#9ca3af",
    margin: "3px 0 0",
  },

  nav: {
    display: "flex",
    alignItems: "center",
    gap: "32px",
  },

  navLinkBase: {
    position: "relative",
    fontSize: "14.5px",
    fontWeight: 500,
    textDecoration: "none",
    color: "#6b7280",
    paddingBottom: "2px",
    transition: "color 0.2s",
    background: "none",
    border: "none",
    cursor: "pointer",
  },

  navLinkActive: {
    color: "#111827",
  },

  underlineBase: {
    position: "absolute",
    bottom: "-2px",
    left: 0,
    height: "2px",
    borderRadius: "9999px",
    backgroundColor: "#C0392B",
    transition: "width 0.3s ease",
  },

  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "10px",
  },

  btnSignIn: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#111827",
    border: "1.5px solid #111827",
    backgroundColor: "transparent",
    padding: "8px 20px",
    borderRadius: "9999px",
    cursor: "pointer",
    textDecoration: "none",
    transition: "background 0.2s",
    display: "inline-flex",
    alignItems: "center",
  },

  btnGetHelp: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#ffffff",
    backgroundColor: "#C0392B",
    border: "1.5px solid #C0392B",
    padding: "8px 20px",
    borderRadius: "9999px",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    transition: "background 0.2s",
    boxShadow: "0 2px 10px rgba(192,57,43,0.25)",
  },

  hamburger: {
    display: "none",
    width: "40px",
    height: "40px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    backgroundColor: "transparent",
    cursor: "pointer",
    color: "#111827",
  },

  mobileMenu: (open) => ({
    backgroundColor: "#ffffff",
    borderTop: "1px solid #f3f4f6",
    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
    overflow: "hidden",
    maxHeight: open ? "500px" : "0",
    opacity: open ? 1 : 0,
    transition: "max-height 0.3s ease, opacity 0.2s ease",
  }),

  mobileInner: {
    padding: "12px 48px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  mobileLinkBase: {
    display: "block",
    padding: "12px 16px",
    borderRadius: "12px",
    fontSize: "15px",
    fontWeight: 500,
    textDecoration: "none",
    color: "#6b7280",
    transition: "background 0.15s, color 0.15s",
  },

  mobileLinkActive: {
    backgroundColor: "#f3f4f6",
    color: "#111827",
  },

  mobileBtns: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginTop: "12px",
  },

  mobileBtnSignIn: {
    textAlign: "center",
    padding: "12px",
    borderRadius: "12px",
    fontSize: "15px",
    fontWeight: 600,
    color: "#111827",
    border: "1.5px solid #111827",
    backgroundColor: "transparent",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  mobileBtnGetHelp: {
    textAlign: "center",
    padding: "12px",
    borderRadius: "12px",
    fontSize: "15px",
    fontWeight: 600,
    color: "#ffffff",
    backgroundColor: "#C0392B",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
};

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [hovered,    setHovered]    = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setMenuOpen(false);
    };
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, []);

  /* Responsive: hide desktop nav on small screens */
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header ref={menuRef} style={styles.header(scrolled)}>

      {/* ── MAIN ROW ── */}
      <div style={isMobile
        ? { ...styles.inner, gridTemplateColumns: "1fr 1fr", padding: "0 24px" }
        : styles.inner
      }>

        {/* COL 1 — LOGO */}
        <a
          href="#home"
          style={styles.logoLink}
          onClick={() => setActiveLink("Home")}
        >
          <img
            src={logo}
            alt="Uniment logo"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "14px",
              objectFit: "cover",
              border: "1px solid #e5e7eb",
              boxShadow: "0 4px 12px rgba(17,24,39,0.12)",
              flexShrink: 0,
            }}
          />
          <div>
            <p style={styles.logoName}>Uniment Assignment</p>
            <p style={styles.logoSub}>Academic Excellence</p>
          </div>
        </a>

        {/* COL 2 — NAV LINKS (centered) */}
        {!isMobile && (
          <nav style={styles.nav}>
            {navLinks.map(({ label, href }) => {
              const isActive  = activeLink === label;
              const isHovered = hovered    === label;
              return (
                <a
                  key={label}
                  href={href}
                  style={{
                    ...styles.navLinkBase,
                    ...(isActive ? styles.navLinkActive : {}),
                    color: isActive || isHovered ? "#C0392B" : "#6b7280",
                  }}
                  onClick={() => setActiveLink(label)}
                  onMouseEnter={() => setHovered(label)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {label}
                  <span style={{
                    ...styles.underlineBase,
                    width: isActive || isHovered ? "100%" : "0%",
                  background: "#C0392B",
                  }} />
                </a>
              );
            })}
          </nav>
        )}

        {/* COL 3 — BUTTONS or HAMBURGER */}
        <div style={isMobile
          ? { display: "flex", justifyContent: "flex-end" }
          : styles.buttons
        }>
          {!isMobile ? (
            <>
              <a
                href="#contact"
                style={styles.btnGetHelp}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#A93226"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#C0392B"}
              >
                Get Help <ArrowRight size={15} strokeWidth={2.5} />
              </a>
            </>
          ) : (
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              style={{ ...styles.hamburger, display: "flex" }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>

      </div>

      {/* ── MOBILE MENU ── */}
      {isMobile && (
        <div style={styles.mobileMenu(menuOpen)}>
          <div style={{
            ...styles.mobileInner,
            padding: window.innerWidth < 768 ? "12px 20px 24px" : "12px 48px 24px",
          }}>
            {navLinks.map(({ label, href }) => {
              const isActive = activeLink === label;
              return (
                <a
                  key={label}
                  href={href}
                  style={{
                    ...styles.mobileLinkBase,
                    ...(isActive ? styles.mobileLinkActive : {}),
                  }}
                  onClick={() => { setActiveLink(label); setMenuOpen(false); }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.backgroundColor = "#f9fafb";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {label}
                </a>
              );
            })}

            <div style={styles.mobileBtns}>
              <a
                href="#contact"
                style={styles.mobileBtnGetHelp}
                onClick={() => setMenuOpen(false)}
              >
                Get Help <ArrowRight size={16} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}