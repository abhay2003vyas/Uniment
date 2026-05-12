import { useEffect, useRef, useState } from "react";
import heroImg from "../assets/hero.png";

/* ══════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════ */

const aboutPoints = [
  "Expert team with cutting-edge capabilities",
  "Solid books in all grades",
  "Affordable and competitive pricing plans",
  "24/7 customer support",
];

const specialisations = [
  // Column 1 — pink
  ["Dissertations", "Research Proposal", "Programming", "Finance", "Management", "History", "Pharmacy", "Health & Social Care", "Psychology"],
  // Column 2 — blue
  ["Project Management", "Thesis Statement", "Calculus", "Economics", "International Relations", "Nursing", "Financial Statements", "Sociology", "Case Study"],
  // Column 3 — green
  ["Report Writing", "Statistics", "Accounting", "Law", "Marketing", "Data Science", "Political Science", "Literature Review", "Human Resources"],
];

const reviews = [
  { name: "Priya S.",  subject: "Computer Science", rating: 5, avatar: "P", text: "Absolutely saved me during finals week. The explanation was crystal clear and the submission was on time!" },
  { name: "Arjun M.", subject: "Mathematics",       rating: 5, avatar: "A", text: "Got my calculus assignment done overnight. The expert really knew their stuff and explained every step." },
  { name: "Sneha K.", subject: "Business Studies",  rating: 5, avatar: "S", text: "Affordable, fast, and high quality. Will definitely use Uniment Assignment again for my next project!" },
  { name: "Rohan T.", subject: "Physics",           rating: 4, avatar: "R", text: "Really helped me understand wave optics. Great detailed steps and clear explanations throughout." },
  { name: "Meera J.", subject: "Law",               rating: 5, avatar: "M", text: "My case study was done professionally. Highly recommend for any law students needing assignment help." },
  { name: "Dev P.",   subject: "Economics",         rating: 5, avatar: "D", text: "Incredibly helpful service. The economic analysis was thorough and well-referenced. 10/10!" },
];

const subjects = [
  "Mathematics","Physics","Chemistry","Computer Science",
  "English","Business","Economics","Biology","History","Law",
];

/* ══════════════════════════════════════════════════════════
   STAR RATING
══════════════════════════════════════════════════════════ */
function StarRating({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map((star) => (
        <button
          key={star}
          type="button"
          className={`text-3xl transition-transform hover:scale-110 ${star <= (hovered || value) ? "text-yellow-400" : "text-slate-300"}`}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
        >★</button>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   HOME
══════════════════════════════════════════════════════════ */
export default function Home() {
  const heroRef   = useRef(null);
  const [activeReview, setActiveReview] = useState(0);
  const [form,   setForm]      = useState({ name:"", email:"", rating:0, review:"" });
  const [submitted, setSubmitted] = useState(false);

  // Parallax
  useEffect(() => {
    const fn = () => { if (heroRef.current) heroRef.current.style.backgroundPositionY = `${window.scrollY*0.35}px`; };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Auto-rotate reviews
  useEffect(() => {
    const t = setInterval(() => setActiveReview(p => (p+1) % reviews.length), 3800);
    return () => clearInterval(t);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.rating || !form.review) return;
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name:"", email:"", rating:0, review:"" }); }, 3000);
  };

  return (
    <div className="font-nunito overflow-x-hidden">

      {/* ─────────────────────────────────────
          1.  HERO
      ───────────────────────────────────── */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-white/35 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full pt-28 pb-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-white/80 border border-pink-200 text-pink-500 font-bold text-sm px-4 py-1.5 rounded-full shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
              Trusted by 10,000+ Students
            </span>

            <h1 className="text-5xl lg:text-6xl font-black text-slate-800 leading-tight mb-6">
              Your Partner in{" "}
              <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Timely</span>
              <br />Assignment Completion
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-semibold max-w-xl">
              We empower students to tackle difficult assignments and gain a deeper
              understanding through personalized, expert-led assistance.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#signup" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-white font-black px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                Get Started Free ✦
              </a>
              <a href="#about" className="inline-flex items-center gap-2 bg-white text-blue-500 border-2 border-blue-300 font-black px-8 py-4 rounded-full text-lg hover:bg-blue-50 hover:-translate-y-1 transition-all duration-200">
                Learn More →
              </a>
            </div>

            <div className="flex flex-wrap gap-8 mt-12">
              {[{val:"10K+",label:"Students Helped"},{val:"500+",label:"Expert Tutors"},{val:"98%",label:"On-Time Rate"},{val:"4.9★",label:"Avg Rating"}].map(s=>(
                <div key={s.label}>
                  <p className="text-3xl font-black text-slate-800">{s.val}</p>
                  <p className="text-sm font-bold text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40 Q360 80 720 40 Q1080 0 1440 40 L1440 80 L0 80 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ─────────────────────────────────────
          TICKER
      ───────────────────────────────────── */}
      <div className="bg-white py-5 overflow-hidden border-y border-slate-100">
        <div className="flex gap-4 whitespace-nowrap w-max" style={{animation:"ticker 20s linear infinite"}}>
          {[...subjects,...subjects].map((s,i)=>(
            <span key={i} className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-50 to-blue-50 border border-slate-200 text-slate-600 font-bold text-sm px-5 py-2 rounded-full">
              📖 {s}
            </span>
          ))}
        </div>
        <style>{`@keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      </div>

      {/* ─────────────────────────────────────
          2.  ABOUT US
      ───────────────────────────────────── */}
      <section id="about" className="bg-white py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-black uppercase tracking-widest text-pink-500 mb-2">Who We Are</p>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-800 mb-16">
            About{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">Us</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left — image placeholders matching wireframe boxes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 h-52 rounded-3xl bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-50 border-2 border-pink-100 flex items-center justify-center shadow-md">
                <span className="text-6xl">🎓</span>
              </div>
              <div className="h-40 rounded-3xl bg-gradient-to-br from-blue-100 to-cyan-50 border-2 border-blue-100 flex items-center justify-center shadow-md">
                <span className="text-5xl">📝</span>
              </div>
              <div className="h-40 rounded-3xl bg-gradient-to-br from-emerald-100 to-teal-50 border-2 border-emerald-100 flex items-center justify-center shadow-md">
                <span className="text-5xl">🏆</span>
              </div>
            </div>

            {/* Right — bullets + CTA */}
            <div>
              <p className="text-slate-600 text-lg font-semibold leading-relaxed mb-8">
                Uniment Assignment is your one-stop platform for academic excellence.
                We connect students with domain experts to ensure every assignment is
                handled with precision, clarity, and care.
              </p>

              <ul className="space-y-4 mb-10">
                {aboutPoints.map((point,i)=>(
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center flex-shrink-0 shadow">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </span>
                    <span className="text-slate-700 font-bold text-base">{point}</span>
                  </li>
                ))}
              </ul>

              <a href="#specialisation" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-black px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                Explore Our Services →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          3.  OUR AREA OF SPECIALISATION
      ───────────────────────────────────── */}
      <section id="specialisation" className="py-24 px-6 lg:px-16" style={{background:"linear-gradient(135deg,#fdf2f8 0%,#eff6ff 50%,#f0fdf4 100%)"}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-black uppercase tracking-widest text-blue-500 mb-2">What We Cover</p>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-800">
              Our Area of{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Specialisation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialisations.map((col,ci)=>{
              const c = [
                {bg:"from-pink-50 to-rose-50",   border:"border-pink-100",    dot:"bg-pink-400"},
                {bg:"from-blue-50 to-cyan-50",    border:"border-blue-100",    dot:"bg-blue-400"},
                {bg:"from-emerald-50 to-teal-50", border:"border-emerald-100", dot:"bg-emerald-400"},
              ][ci];
              return (
                <div key={ci} className={`bg-gradient-to-br ${c.bg} border ${c.border} rounded-3xl p-6 space-y-3`}>
                  {col.map((subject,si)=>(
                    <div key={si} className="flex items-center gap-3 bg-white/80 rounded-2xl px-4 py-3 hover:shadow-md hover:-translate-x-1 transition-all duration-200 cursor-default group">
                      <span className={`w-2.5 h-2.5 rounded-full ${c.dot} flex-shrink-0 group-hover:scale-125 transition-transform`}/>
                      <span className="font-bold text-slate-700 text-sm">{subject}</span>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-500 font-semibold mb-4">Don't see your subject?</p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white border-2 border-blue-300 text-blue-600 font-black px-8 py-3 rounded-full hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-200 shadow">
              Contact Us — We'll Help ✦
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          4.  WHAT OUR CLIENTS SAY
          cherry-red card layout (wireframe)
      ───────────────────────────────────── */}
      <section id="feedback" className="bg-white py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-black uppercase tracking-widest text-rose-500 mb-2">Testimonials</p>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-800">
              What Our Clients{" "}
              <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">Say?</span>
            </h2>
            <p className="text-slate-500 font-semibold mt-2">Recent Feedback</p>
          </div>

          {/* Big card (left) + 2×2 grid (right) — matching wireframe */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Featured cherry-red card */}
            <div className="lg:col-span-1 bg-gradient-to-br from-rose-600 to-rose-500 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex gap-1 mb-5">
                  {Array.from({length:reviews[activeReview].rating}).map((_,i)=>(
                    <span key={i} className="text-yellow-300 text-xl">★</span>
                  ))}
                </div>
                <p className="text-white/95 font-bold text-lg leading-relaxed italic">
                  "{reviews[activeReview].text}"
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-12 h-12 rounded-full bg-white/25 flex items-center justify-center font-black text-lg">
                  {reviews[activeReview].avatar}
                </div>
                <div>
                  <p className="font-black text-white">{reviews[activeReview].name}</p>
                  <p className="text-white/70 text-sm font-semibold">{reviews[activeReview].subject}</p>
                </div>
              </div>
            </div>

            {/* 2×2 smaller cherry-red cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reviews.slice(0,4).map((r,i)=>(
                <div
                  key={i}
                  onClick={()=>setActiveReview(i)}
                  className={`rounded-3xl p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between min-h-[160px] ${
                    i===activeReview
                      ? "bg-rose-500 text-white shadow-lg scale-[1.02]"
                      : "bg-rose-50 border border-rose-100 hover:border-rose-300 hover:shadow-md"
                  }`}
                >
                  <p className={`font-bold text-sm leading-relaxed italic mb-4 ${i===activeReview?"text-white/95":"text-slate-700"}`}>
                    "{r.text.substring(0,85)}…"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs ${i===activeReview?"bg-white/25 text-white":"bg-rose-200 text-rose-700"}`}>
                      {r.avatar}
                    </div>
                    <div>
                      <p className={`font-black text-xs ${i===activeReview?"text-white":"text-slate-800"}`}>{r.name}</p>
                      <p className={`text-xs font-semibold ${i===activeReview?"text-white/70":"text-slate-500"}`}>{r.subject}</p>
                    </div>
                    <div className="ml-auto text-yellow-400 text-xs">{"★".repeat(r.rating)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2">
            {reviews.map((_,i)=>(
              <button
                key={i}
                onClick={()=>setActiveReview(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${i===activeReview?"w-8 bg-rose-500":"w-2.5 bg-slate-200 hover:bg-slate-300"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          5.  FEEDBACK FORM  (wireframe)
          Name / Email / Rating / Review / Submit
      ───────────────────────────────────── */}
      <section id="feedback-form" className="py-24 px-6 lg:px-16" style={{background:"linear-gradient(135deg,#fff1f2,#fff7ed,#fdf4ff)"}}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-black uppercase tracking-widest text-rose-500 mb-2">Share Your Experience</p>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-800">
              Feedback{" "}
              <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">Form</span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-rose-100 overflow-hidden">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-black text-slate-800 mb-2">Thank You!</h3>
                <p className="text-slate-500 font-semibold">Your review has been submitted successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* LEFT */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-wide">Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e=>setForm({...form,name:e.target.value})}
                        placeholder="Your full name"
                        required
                        className="w-full px-5 py-3.5 rounded-2xl border-2 border-rose-100 bg-rose-50/50 font-semibold text-slate-700 placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-wide">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e=>setForm({...form,email:e.target.value})}
                        placeholder="your@email.com"
                        required
                        className="w-full px-5 py-3.5 rounded-2xl border-2 border-rose-100 bg-rose-50/50 font-semibold text-slate-700 placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-wide">Add Your Rating</label>
                      <div className="bg-rose-50/50 border-2 border-rose-100 rounded-2xl px-5 py-4">
                        <StarRating value={form.rating} onChange={v=>setForm({...form,rating:v})}/>
                        <p className="text-xs text-slate-400 font-semibold mt-2">
                          {["Tap to rate","Poor","Fair","Good","Very Good","Excellent! ⭐"][form.rating]}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col">
                    <div className="flex-1 flex flex-col">
                      <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-wide">Write Your Review</label>
                      <textarea
                        value={form.review}
                        onChange={e=>setForm({...form,review:e.target.value})}
                        placeholder="Tell us about your experience with Uniment Assignment..."
                        required
                        rows={9}
                        className="flex-1 w-full px-5 py-3.5 rounded-2xl border-2 border-rose-100 bg-rose-50/50 font-semibold text-slate-700 placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:bg-white transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-6 w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-black py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-lg"
                    >
                      Submit Review ✦
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          6.  CTA BANNER
      ───────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-16" style={{background:"linear-gradient(135deg,#f472b6,#fb923c,#fbbf24)"}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 drop-shadow">Ready to Ace Your Assignments?</h2>
          <p className="text-white/90 text-lg font-semibold mb-8">Join thousands of students already getting better grades.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#signup" className="bg-white text-orange-500 font-black px-10 py-4 rounded-full text-lg shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-200">Sign Up — It's Free ✦</a>
            <a href="#contact" className="bg-white/20 backdrop-blur text-white border-2 border-white/40 font-black px-10 py-4 rounded-full text-lg hover:bg-white/30 hover:-translate-y-1 transition-all duration-200">Talk to Us →</a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          7.  CONTACT
      ───────────────────────────────────── */}
      <section id="contact" className="bg-white py-24 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-purple-500 mb-2">Get In Touch</p>
            <h2 className="text-4xl font-black text-slate-800 mb-4">
              Have a{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Question?</span>
            </h2>
            <p className="text-slate-500 font-semibold leading-relaxed mb-8">Whether you need help right now or want to learn more, we'd love to hear from you.</p>
            <div className="space-y-4">
              {[{icon:"📧",label:"Email",val:"support@unimentassignment.com"},{icon:"📱",label:"WhatsApp",val:"+91 98765 43210"},{icon:"🕐",label:"Available",val:"24 / 7 — Always Here"}].map(c=>(
                <div key={c.label} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">{c.label}</p>
                    <p className="font-bold text-slate-700">{c.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-3xl p-8 shadow-lg">
            <h3 className="text-xl font-black text-slate-800 mb-6">Send Us a Message</h3>
            <div className="space-y-4">
              {[{label:"Your Name",type:"text",placeholder:"Arjun Mehta"},{label:"Email",type:"email",placeholder:"arjun@email.com"},{label:"Subject / Assignment Topic",type:"text",placeholder:"e.g. Calculus integration"}].map(f=>(
                <div key={f.label}>
                  <label className="block text-sm font-black text-slate-600 mb-1">{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"/>
                </div>
              ))}
              <div>
                <label className="block text-sm font-black text-slate-600 mb-1">Message</label>
                <textarea rows={4} placeholder="Tell us about your assignment..." className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-300 transition resize-none"/>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">Send Message ✦</button>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          FOOTER
      ───────────────────────────────────── */}
      <footer className="bg-slate-900 text-white py-12 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-300 rounded-xl p-2.5">
              <span className="text-xl">📚</span>
            </div>
            <div>
              <p className="font-black text-lg">Uniment Assignment</p>
              <p className="text-slate-400 text-xs font-semibold">Your Partner in Success</p>
            </div>
          </div>
          <div className="flex gap-6 text-slate-400 font-semibold text-sm">
            {[["home","Home"],["about","About"],["feedback","Reviews"],["contact","Contact"]].map(([id,label])=>(
              <a key={id} href={`#${id}`} className="hover:text-white transition">{label}</a>
            ))}
          </div>
          <p className="text-slate-500 text-sm font-semibold">© {new Date().getFullYear()} Uniment Assignment. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}