import { useEffect, useRef, useState } from "react";
import heroImg from "../assets/hero.png";

/* ══════════════════════════════════════════════════════════
   DESIGN SYSTEM — Sage & Walnut
══════════════════════════════════════════════════════════ */
const C = {
  ivory:        "#F7F4EC",
  walnutDark:   "#6B4A35",
  walnutMid:    "#8A6245",
  walnutLight:  "#A67C5B",
  sagePrimary:  "#8F9D76",
  sageLight:    "#AEB89A",
  sageMuted:    "#C7CCBC",
  textPrimary:  "#1F2328",
  textSecond:   "#5F6660",
  btnSage:      "#8B9A73",
  btnHover:     "#74835F",
  blobSage:     "#E4E8DB",
  beige:        "#ECE6D8",
};

/* ══════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════ */
const stats = [
  { val: "10K+", label: "Students Helped" },
  { val: "500+", label: "Expert Tutors"   },
  { val: "98%",  label: "On-Time Rate"    },
  { val: "4.9",  label: "Average Rating"  },
];

const aboutPoints = [
  { icon: "✦", text: "Expert team with cutting-edge capabilities" },
  { icon: "✦", text: "Solid track record across all academic grades" },
  { icon: "✦", text: "Affordable and transparent pricing plans" },
  { icon: "✦", text: "24 / 7 student support — always responsive" },
];

const specialisations = [
  ["Dissertations","Research Proposal","Programming","Finance","Management","History","Pharmacy","Health & Social Care","Psychology"],
  ["Project Management","Thesis Statement","Calculus","Economics","International Relations","Nursing","Financial Statements","Sociology","Case Study"],
  ["Report Writing","Statistics","Accounting","Law","Marketing","Data Science","Political Science","Literature Review","Human Resources"],
];

const reviews = [
  { name:"Priya S.",  subject:"Computer Science", rating:5, avatar:"P", text:"Absolutely saved me during finals week. The explanation was crystal clear and the submission was on time!" },
  { name:"Arjun M.", subject:"Mathematics",       rating:5, avatar:"A", text:"Got my calculus assignment done overnight. The expert really knew their stuff and explained every step." },
  { name:"Sneha K.", subject:"Business Studies",  rating:5, avatar:"S", text:"Affordable, fast, and high quality. Will definitely use Uniment Assignment again for my next project!" },
  { name:"Rohan T.", subject:"Physics",           rating:4, avatar:"R", text:"Really helped me understand wave optics. Great detailed steps and clear explanations throughout." },
  { name:"Meera J.", subject:"Law",               rating:5, avatar:"M", text:"My case study was done professionally. Highly recommend for any law students needing assignment help." },
  { name:"Dev P.",   subject:"Economics",         rating:5, avatar:"D", text:"Incredibly helpful service. The economic analysis was thorough and well-referenced. 10 / 10!" },
];

const subjects = ["Mathematics","Physics","Chemistry","Computer Science","English","Business","Economics","Biology","History","Law","Psychology","Statistics"];

/* ══════════════════════════════════════════════════════════
   MICRO COMPONENTS
══════════════════════════════════════════════════════════ */

/** Thin horizontal rule with label */
function SectionLabel({ color = C.sagePrimary, children }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <span className="w-8 h-px block" style={{ background: color }} />
      <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color }}>{children}</span>
    </div>
  );
}

/** Interactive star rating */
function StarRating({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1.5">
      {[1,2,3,4,5].map(star => (
        <button
          key={star}
          type="button"
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
          style={{
            fontSize: 26,
            color: star <= (hovered || value) ? "#8A6245" : C.sageMuted,
            background: "none", border: "none", cursor: "pointer",
            transition: "color .2s, transform .15s",
            transform: star <= (hovered || value) ? "scale(1.15)" : "scale(1)",
          }}
        >★</button>
      ))}
    </div>
  );
}

/** Pill badge */
function Pill({ children, style }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "4px 14px",
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.04em",
      border: `1px solid ${C.sageMuted}`,
      color: C.textSecond,
      background: C.ivory,
      ...style,
    }}>{children}</span>
  );
}

/* ══════════════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════════════ */
export default function Home() {
  const heroRef = useRef(null);
  const [activeReview, setActiveReview] = useState(0);
  const [form, setForm] = useState({ name:"", email:"", rating:0, review:"" });
  const [submitted, setSubmitted] = useState(false);

  // Subtle parallax
  useEffect(() => {
    const fn = () => {
      if (heroRef.current) heroRef.current.style.backgroundPositionY = `${window.scrollY * 0.28}px`;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Auto-rotate reviews
  useEffect(() => {
    const t = setInterval(() => setActiveReview(p => (p + 1) % reviews.length), 4200);
    return () => clearInterval(t);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.rating || !form.review) return;
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name:"", email:"", rating:0, review:"" }); }, 3200);
  };

  /* ─── shared input style ─── */
  const inputStyle = {
    width: "100%",
    padding: "13px 18px",
    borderRadius: 10,
    border: `1.5px solid ${C.sageMuted}`,
    background: C.ivory,
    color: C.textPrimary,
    fontFamily: "inherit",
    fontSize: 14,
    fontWeight: 500,
    outline: "none",
    transition: "border-color .2s",
    boxSizing: "border-box",
  };

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', 'Palatino Linotype', Georgia, serif", background: C.ivory, color: C.textPrimary, overflowX: "hidden" }}>

      {/* ─── Google Font Import ─── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@400;500;600&display=swap');

        * { box-sizing: border-box; }

        body { margin: 0; }

        .sans { font-family: 'DM Sans', sans-serif; }

        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fade-up { animation: fadeUp .7s ease both; }
        .fade-up-2 { animation: fadeUp .7s .15s ease both; }
        .fade-up-3 { animation: fadeUp .7s .3s ease both; }
        .fade-up-4 { animation: fadeUp .7s .45s ease both; }

        .spec-chip:hover { background: ${C.beige}; border-color: ${C.sageLight}; transform: translateX(4px); }
        .spec-chip { transition: all .2s; }

        .review-card:hover { box-shadow: 0 8px 32px rgba(74,52,38,.10); transform: translateY(-2px); }
        .review-card { transition: all .25s; }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: ${C.walnutDark}; color: #fff;
          padding: 14px 32px; border-radius: 8px;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600;
          letter-spacing: .04em; text-decoration: none; border: none; cursor: pointer;
          transition: background .2s, transform .15s, box-shadow .2s;
          box-shadow: 0 2px 12px rgba(107,74,53,.25);
        }
        .btn-primary:hover { background: ${C.walnutMid}; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(107,74,53,.3); }

        .btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: ${C.walnutDark};
          padding: 13px 30px; border-radius: 8px;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600;
          letter-spacing: .04em; text-decoration: none;
          border: 1.5px solid ${C.walnutLight};
          transition: all .2s; cursor: pointer;
        }
        .btn-outline:hover { background: ${C.beige}; border-color: ${C.walnutDark}; transform: translateY(-2px); }

        .btn-sage {
          display: inline-flex; align-items: center; gap: 8px;
          background: ${C.btnSage}; color: #fff;
          padding: 13px 28px; border-radius: 8px;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600;
          letter-spacing: .04em; text-decoration: none; border: none; cursor: pointer;
          transition: all .2s;
        }
        .btn-sage:hover { background: ${C.btnHover}; transform: translateY(-2px); }

        input:focus, textarea:focus { border-color: ${C.sagePrimary} !important; }
        textarea { resize: none; }

        .stat-divider + .stat-divider::before {
          content: '';
          display: block;
          width: 1px; height: 40px;
          background: ${C.sageMuted};
          margin-right: 32px;
        }
      `}</style>

      {/* ═══════════════════════════════════════
          1.  HERO
      ═══════════════════════════════════════ */}
      <section
        id="home"
        ref={heroRef}
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Warm ivory overlay */}
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(110deg, rgba(247,244,236,.93) 0%, rgba(247,244,236,.80) 55%, rgba(247,244,236,.45) 100%)" }} />

        {/* Decorative blob */}
        <div style={{
          position:"absolute", right:"6%", top:"15%",
          width:420, height:420,
          borderRadius:"58% 42% 62% 38% / 45% 55% 45% 55%",
          background: C.blobSage, opacity:.35,
          filter:"blur(3px)",
        }} />

        <div style={{ position:"relative", zIndex:2, maxWidth:1200, margin:"0 auto", padding:"120px 48px 80px", width:"100%" }}>
          <div style={{ maxWidth:640 }}>
            <div className="fade-up">
              <Pill style={{ marginBottom:24 }}>✦ &nbsp;Trusted by 10,000+ Students Across India</Pill>
            </div>

            <h1 className="fade-up-2" style={{
              fontSize: "clamp(2.6rem,5.5vw,4rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-.01em",
              color: C.textPrimary,
              margin: "0 0 24px",
            }}>
              Your Academic Partner<br />
              <em style={{ color: C.walnutDark, fontStyle:"italic" }}>for Every Deadline.</em>
            </h1>

            <p className="fade-up-3 sans" style={{
              fontSize: 16, lineHeight: 1.75,
              color: C.textSecond, marginBottom: 36, maxWidth: 520,
            }}>
              We connect students with domain experts to deliver precise, well-researched
              assignments — on time, every time.
            </p>

            <div className="fade-up-4" style={{ display:"flex", gap:14, flexWrap:"wrap", marginBottom:56 }}>
              <a href="#signup" className="btn-primary">Get Started Free →</a>
              <a href="#about" className="btn-outline">Learn More</a>
            </div>

            {/* Stats row */}
            <div style={{ display:"flex", gap:32, flexWrap:"wrap" }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{ textAlign: i === 0 ? "left" : "left" }}>
                  <p style={{ fontSize: "1.9rem", fontWeight: 700, color: C.walnutDark, margin:0, lineHeight:1 }}>{s.val}</p>
                  <p className="sans" style={{ fontSize: 12, color: C.textSecond, margin:"4px 0 0", letterSpacing:".04em" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div style={{ position:"absolute", bottom:0, left:0, right:0, lineHeight:0 }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ display:"block" }}>
            <path d="M0 30 Q360 60 720 30 Q1080 0 1440 30 L1440 60 L0 60 Z" fill={C.ivory}/>
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TICKER
      ═══════════════════════════════════════ */}
      <div style={{ background:"#fff", borderTop:`1px solid ${C.beige}`, borderBottom:`1px solid ${C.beige}`, padding:"14px 0", overflow:"hidden" }}>
        <div style={{ display:"flex", gap:12, whiteSpace:"nowrap", width:"max-content", animation:"ticker 28s linear infinite" }}>
          {[...subjects,...subjects].map((s,i) => (
            <span key={i} className="sans" style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background: C.blobSage, border:`1px solid ${C.sageMuted}`,
              color: C.textSecond, fontWeight:500, fontSize:12,
              letterSpacing:".06em", padding:"6px 18px", borderRadius:999,
            }}>
              ● &nbsp;{s.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          2.  ABOUT
      ═══════════════════════════════════════ */}
      <section id="about" style={{ background: C.ivory, padding:"96px 48px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <SectionLabel>Who We Are</SectionLabel>
          <h2 style={{ fontSize:"clamp(2rem,4vw,2.8rem)", fontWeight:700, margin:"0 0 64px", color: C.textPrimary }}>
            About <em style={{ color:C.walnutDark }}>Uniment Assignment</em>
          </h2>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>
            {/* Visual mosaic */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gridTemplateRows:"200px 160px", gap:16 }}>
              <div style={{
                gridColumn:"1 / -1",
                borderRadius:16, background:`linear-gradient(135deg, ${C.beige}, ${C.blobSage})`,
                border:`1px solid ${C.sageMuted}`,
                display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:8,
              }}>
                <span style={{ fontSize:48 }}>🎓</span>
                <span className="sans" style={{ fontSize:13, fontWeight:600, color:C.textSecond, letterSpacing:".08em" }}>ACADEMIC EXCELLENCE</span>
              </div>
              <div style={{
                borderRadius:16, background:`linear-gradient(135deg, ${C.ivory}, ${C.beige})`,
                border:`1px solid ${C.sageMuted}`,
                display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:8,
              }}>
                <span style={{ fontSize:40 }}>📝</span>
                <span className="sans" style={{ fontSize:11, fontWeight:600, color:C.textSecond }}>EXPERT WRITING</span>
              </div>
              <div style={{
                borderRadius:16, background:`linear-gradient(135deg, ${C.blobSage}, ${C.sageMuted}30)`,
                border:`1px solid ${C.sageMuted}`,
                display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:8,
              }}>
                <span style={{ fontSize:40 }}>🏆</span>
                <span className="sans" style={{ fontSize:11, fontWeight:600, color:C.textSecond }}>TOP RESULTS</span>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="sans" style={{ fontSize:15, lineHeight:1.85, color:C.textSecond, marginBottom:36 }}>
                Uniment Assignment is your one-stop academic platform, connecting students with
                verified domain experts to ensure every submission is handled with precision,
                clarity, and genuine scholarly care.
              </p>

              <ul style={{ listStyle:"none", margin:"0 0 40px", padding:0, display:"flex", flexDirection:"column", gap:16 }}>
                {aboutPoints.map((p, i) => (
                  <li key={i} style={{ display:"flex", alignItems:"flex-start", gap:16 }}>
                    <span style={{
                      width:28, height:28, borderRadius:6,
                      background: C.blobSage, border:`1px solid ${C.sageMuted}`,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      color: C.walnutDark, fontSize:11, flexShrink:0, marginTop:1,
                    }}>✦</span>
                    <span className="sans" style={{ fontSize:14, fontWeight:500, color:C.textPrimary, lineHeight:1.6 }}>{p.text}</span>
                  </li>
                ))}
              </ul>

              <a href="#specialisation" className="btn-primary">Explore Services →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3.  SPECIALISATION
      ═══════════════════════════════════════ */}
      <section id="specialisation" style={{ background:"#fff", padding:"96px 48px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:64 }}>
            <SectionLabel color={C.sagePrimary}>
              <span style={{ margin:"0 auto" }}>What We Cover</span>
            </SectionLabel>
            <h2 style={{ fontSize:"clamp(2rem,4vw,2.8rem)", fontWeight:700, color:C.textPrimary, margin:0 }}>
              Our Areas of <em style={{ color:C.walnutMid }}>Specialisation</em>
            </h2>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
            {specialisations.map((col, ci) => {
              const accent = [C.walnutDark, C.sagePrimary, C.walnutMid][ci];
              const bg     = [C.beige, C.blobSage, `${C.sageLight}22`][ci];
              return (
                <div key={ci} style={{
                  background: bg,
                  border:`1px solid ${C.sageMuted}`,
                  borderRadius:16, padding:24,
                  display:"flex", flexDirection:"column", gap:8,
                }}>
                  <div className="sans" style={{
                    fontSize:10, fontWeight:700, letterSpacing:".16em",
                    color: accent, marginBottom:8, textTransform:"uppercase",
                  }}>
                    {["Core Disciplines","Advanced Studies","Research & Analysis"][ci]}
                  </div>
                  {col.map((subject, si) => (
                    <div key={si} className="spec-chip" style={{
                      display:"flex", alignItems:"center", gap:12,
                      background:"#fff", border:`1px solid ${C.sageMuted}`,
                      borderRadius:8, padding:"10px 14px", cursor:"default",
                    }}>
                      <span style={{ width:6, height:6, borderRadius:3, background:accent, flexShrink:0 }}/>
                      <span className="sans" style={{ fontSize:13, fontWeight:500, color:C.textPrimary }}>{subject}</span>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          <div style={{ textAlign:"center", marginTop:40 }}>
            <p className="sans" style={{ fontSize:13, color:C.textSecond, marginBottom:16 }}>Don't see your subject listed?</p>
            <a href="#contact" className="btn-outline">Contact Us — We'll Help</a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4.  TESTIMONIALS
      ═══════════════════════════════════════ */}
      <section id="feedback" style={{ background:C.ivory, padding:"96px 48px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ marginBottom:56 }}>
            <SectionLabel color={C.walnutDark}>Testimonials</SectionLabel>
            <h2 style={{ fontSize:"clamp(2rem,4vw,2.8rem)", fontWeight:700, color:C.textPrimary, margin:0 }}>
              What Students <em style={{ color:C.walnutDark }}>Say</em>
            </h2>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 2fr", gap:24 }}>
            {/* Featured card — walnut */}
            <div style={{
              background: C.walnutDark,
              borderRadius:16, padding:40,
              display:"flex", flexDirection:"column", justifyContent:"space-between",
              minHeight:340,
            }}>
              <div>
                <div style={{ display:"flex", gap:4, marginBottom:24 }}>
                  {Array.from({ length: reviews[activeReview].rating }).map((_,i) => (
                    <span key={i} style={{ color:"#D4A853", fontSize:18 }}>★</span>
                  ))}
                </div>
                <p style={{
                  fontStyle:"italic", fontSize:"1.1rem", lineHeight:1.75,
                  color:"rgba(247,244,236,.92)", margin:0,
                }}>
                  "{reviews[activeReview].text}"
                </p>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:14, marginTop:32 }}>
                <div style={{
                  width:44, height:44, borderRadius:"50%",
                  background:"rgba(247,244,236,.18)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontWeight:700, color:C.ivory, fontSize:16,
                }}>{reviews[activeReview].avatar}</div>
                <div>
                  <p style={{ fontWeight:700, color:C.ivory, margin:0, fontSize:15 }}>{reviews[activeReview].name}</p>
                  <p className="sans" style={{ color:"rgba(247,244,236,.55)", fontSize:12, margin:0, marginTop:2 }}>{reviews[activeReview].subject}</p>
                </div>
              </div>
            </div>

            {/* Grid of smaller cards */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
              {reviews.slice(0, 4).map((r, i) => (
                <div
                  key={i}
                  className="review-card"
                  onClick={() => setActiveReview(i)}
                  style={{
                    borderRadius:12,
                    border: `1.5px solid ${i === activeReview ? C.walnutLight : C.sageMuted}`,
                    background: i === activeReview ? C.beige : "#fff",
                    padding:24, cursor:"pointer",
                    display:"flex", flexDirection:"column", justifyContent:"space-between",
                  }}
                >
                  <p style={{
                    fontStyle:"italic", fontSize:"0.88rem", lineHeight:1.7,
                    color: C.textSecond, margin:"0 0 16px",
                  }}>
                    "{r.text.substring(0, 90)}…"
                  </p>
                  <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                    <div style={{
                      width:32, height:32, borderRadius:"50%",
                      background: i === activeReview ? C.walnutDark : C.blobSage,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      fontWeight:700, color: i === activeReview ? C.ivory : C.walnutDark,
                      fontSize:12,
                    }}>{r.avatar}</div>
                    <div>
                      <p className="sans" style={{ fontWeight:600, fontSize:12, color:C.textPrimary, margin:0 }}>{r.name}</p>
                      <p className="sans" style={{ fontSize:11, color:C.textSecond, margin:0 }}>{r.subject}</p>
                    </div>
                    <span style={{ marginLeft:"auto", color:"#D4A853", fontSize:12 }}>{"★".repeat(r.rating)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div style={{ display:"flex", justifyContent:"center", gap:8, marginTop:32 }}>
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveReview(i)}
                style={{
                  width: i === activeReview ? 28 : 8,
                  height:8, borderRadius:4,
                  background: i === activeReview ? C.walnutDark : C.sageMuted,
                  border:"none", cursor:"pointer",
                  transition:"all .3s", padding:0,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5.  FEEDBACK FORM
      ═══════════════════════════════════════ */}
      <section id="feedback-form" style={{ background:"#fff", padding:"96px 48px" }}>
        <div style={{ maxWidth:900, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <SectionLabel color={C.sagePrimary}><span style={{ margin:"0 auto" }}>Share Your Experience</span></SectionLabel>
            <h2 style={{ fontSize:"clamp(2rem,4vw,2.8rem)", fontWeight:700, color:C.textPrimary, margin:0 }}>
              Leave a <em style={{ color:C.walnutDark }}>Review</em>
            </h2>
          </div>

          <div style={{
            background:C.ivory, borderRadius:16,
            border:`1px solid ${C.sageMuted}`, overflow:"hidden",
            boxShadow:"0 4px 40px rgba(107,74,53,.08)",
          }}>
            {submitted ? (
              <div style={{ textAlign:"center", padding:"80px 32px" }}>
                <div style={{ fontSize:52, marginBottom:16 }}>✦</div>
                <h3 style={{ fontSize:"1.6rem", fontWeight:700, color:C.textPrimary, margin:"0 0 8px" }}>Thank You!</h3>
                <p className="sans" style={{ color:C.textSecond, fontSize:14 }}>Your review has been submitted successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ padding:"52px 48px" }}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:40 }}>
                  {/* LEFT */}
                  <div style={{ display:"flex", flexDirection:"column", gap:24 }}>
                    <div>
                      <label className="sans" style={{ display:"block", fontSize:11, fontWeight:700, letterSpacing:".12em", color:C.textSecond, textTransform:"uppercase", marginBottom:8 }}>Full Name</label>
                      <input type="text" value={form.name} onChange={e => setForm({...form, name:e.target.value})}
                        placeholder="Your full name" required style={inputStyle} />
                    </div>
                    <div>
                      <label className="sans" style={{ display:"block", fontSize:11, fontWeight:700, letterSpacing:".12em", color:C.textSecond, textTransform:"uppercase", marginBottom:8 }}>Email Address</label>
                      <input type="email" value={form.email} onChange={e => setForm({...form, email:e.target.value})}
                        placeholder="your@email.com" required style={inputStyle} />
                    </div>
                    <div>
                      <label className="sans" style={{ display:"block", fontSize:11, fontWeight:700, letterSpacing:".12em", color:C.textSecond, textTransform:"uppercase", marginBottom:10 }}>Your Rating</label>
                      <div style={{ padding:"16px 18px", borderRadius:10, border:`1.5px solid ${C.sageMuted}`, background:C.ivory }}>
                        <StarRating value={form.rating} onChange={v => setForm({...form, rating:v})} />
                        <p className="sans" style={{ fontSize:11, color:C.textSecond, margin:"8px 0 0" }}>
                          {["Tap a star to rate","Poor","Fair","Good","Very Good","Excellent ✦"][form.rating]}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div style={{ display:"flex", flexDirection:"column" }}>
                    <label className="sans" style={{ display:"block", fontSize:11, fontWeight:700, letterSpacing:".12em", color:C.textSecond, textTransform:"uppercase", marginBottom:8 }}>Your Review</label>
                    <textarea
                      value={form.review}
                      onChange={e => setForm({...form, review:e.target.value})}
                      placeholder="Tell us about your experience with Uniment Assignment..."
                      required rows={9}
                      style={{ ...inputStyle, flex:1, resize:"none" }}
                    />
                    <button type="submit" className="btn-primary" style={{ marginTop:20, justifyContent:"center", width:"100%", padding:"15px 32px" }}>
                      Submit Review ✦
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6.  CTA BANNER
      ═══════════════════════════════════════ */}
      <section style={{
        background: `linear-gradient(135deg, ${C.walnutDark} 0%, ${C.walnutMid} 100%)`,
        padding:"80px 48px", textAlign:"center",
      }}>
        <p className="sans" style={{ fontSize:11, fontWeight:700, letterSpacing:".2em", color:C.sageLight, textTransform:"uppercase", marginBottom:16 }}>Take the Next Step</p>
        <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, color:C.ivory, margin:"0 0 12px" }}>
          Ready to Ace Your Assignments?
        </h2>
        <p className="sans" style={{ color:"rgba(247,244,236,.65)", fontSize:15, marginBottom:40 }}>
          Join thousands of students already submitting with confidence.
        </p>
        <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
          <a href="#signup" style={{
            display:"inline-flex", alignItems:"center", gap:8,
            background:C.ivory, color:C.walnutDark,
            padding:"14px 32px", borderRadius:8,
            fontFamily:"'DM Sans',sans-serif", fontSize:14, fontWeight:700,
            letterSpacing:".04em", textDecoration:"none",
            transition:"all .2s",
          }}>Sign Up — It's Free ✦</a>
          <a href="#contact" style={{
            display:"inline-flex", alignItems:"center", gap:8,
            background:"transparent", color:C.ivory,
            padding:"13px 30px", borderRadius:8,
            fontFamily:"'DM Sans',sans-serif", fontSize:14, fontWeight:600,
            letterSpacing:".04em", textDecoration:"none",
            border:`1.5px solid rgba(247,244,236,.35)`,
            transition:"all .2s",
          }}>Talk to an Expert →</a>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7.  CONTACT
      ═══════════════════════════════════════ */}
      <section id="contact" style={{ background:C.ivory, padding:"96px 48px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>
          <div>
            <SectionLabel color={C.sagePrimary}>Get In Touch</SectionLabel>
            <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.6rem)", fontWeight:700, color:C.textPrimary, margin:"0 0 16px" }}>
              Have a <em style={{ color:C.walnutDark }}>Question?</em>
            </h2>
            <p className="sans" style={{ fontSize:15, lineHeight:1.8, color:C.textSecond, marginBottom:40 }}>
              Whether you need help right now or want to learn more, our team is always here for you.
            </p>

            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              {[
                { icon:"📧", label:"Email",     val:"support@unimentassignment.com" },
                { icon:"📱", label:"WhatsApp",  val:"+91 98765 43210" },
                { icon:"🕐", label:"Available", val:"24 / 7 — Always Here" },
              ].map(c => (
                <div key={c.label} style={{
                  display:"flex", alignItems:"center", gap:16,
                  padding:"16px 20px", borderRadius:10,
                  background:"#fff", border:`1px solid ${C.sageMuted}`,
                }}>
                  <span style={{ fontSize:20 }}>{c.icon}</span>
                  <div>
                    <p className="sans" style={{ fontSize:10, fontWeight:700, letterSpacing:".12em", color:C.textSecond, textTransform:"uppercase", margin:0 }}>{c.label}</p>
                    <p className="sans" style={{ fontWeight:600, color:C.textPrimary, margin:"3px 0 0", fontSize:14 }}>{c.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background:"#fff", border:`1px solid ${C.sageMuted}`,
            borderRadius:16, padding:"40px",
            boxShadow:"0 4px 40px rgba(107,74,53,.07)",
          }}>
            <h3 style={{ fontSize:"1.2rem", fontWeight:700, color:C.textPrimary, margin:"0 0 28px" }}>Send Us a Message</h3>
            <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
              {[
                { label:"Your Name",                type:"text",  placeholder:"Arjun Mehta" },
                { label:"Email",                    type:"email", placeholder:"arjun@email.com" },
                { label:"Subject / Assignment Topic",type:"text", placeholder:"e.g. Calculus integration" },
              ].map(f => (
                <div key={f.label}>
                  <label className="sans" style={{ display:"block", fontSize:11, fontWeight:700, letterSpacing:".1em", color:C.textSecond, textTransform:"uppercase", marginBottom:6 }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} style={inputStyle} />
                </div>
              ))}
              <div>
                <label className="sans" style={{ display:"block", fontSize:11, fontWeight:700, letterSpacing:".1em", color:C.textSecond, textTransform:"uppercase", marginBottom:6 }}>Message</label>
                <textarea rows={4} placeholder="Tell us about your assignment…" style={{ ...inputStyle, resize:"none" }} />
              </div>
              <button className="btn-sage" style={{ justifyContent:"center", width:"100%", padding:"14px 28px" }}>Send Message ✦</button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════ */}
      <footer style={{ background:C.textPrimary, color:C.ivory, padding:"48px 48px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", gap:24, flexWrap:"wrap" }}>
          <div style={{ display:"flex", alignItems:"center", gap:14 }}>
            <div style={{
              width:40, height:40, borderRadius:8,
              background:`linear-gradient(135deg, ${C.walnutMid}, ${C.sagePrimary})`,
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:20,
            }}>📚</div>
            <div>
              <p style={{ fontWeight:700, fontSize:15, margin:0 }}>Uniment Assignment</p>
              <p className="sans" style={{ color:"rgba(247,244,236,.45)", fontSize:11, margin:0, letterSpacing:".06em" }}>YOUR PARTNER IN SUCCESS</p>
            </div>
          </div>

          <nav style={{ display:"flex", gap:28 }}>
            {[["home","Home"],["about","About"],["feedback","Reviews"],["contact","Contact"]].map(([id,label]) => (
              <a key={id} href={`#${id}`} className="sans" style={{
                color:"rgba(247,244,236,.5)", fontSize:13, fontWeight:500,
                textDecoration:"none", transition:"color .2s",
                letterSpacing:".04em",
              }}
              onMouseEnter={e => e.target.style.color=C.ivory}
              onMouseLeave={e => e.target.style.color="rgba(247,244,236,.5)"}
              >{label}</a>
            ))}
          </nav>

          <p className="sans" style={{ color:"rgba(247,244,236,.35)", fontSize:12 }}>
            © {new Date().getFullYear()} Uniment Assignment. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}