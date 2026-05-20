/**
 * Home.jsx — Page orchestrator
 *
 * File structure:
 *   src/
 *     assets/
 *       hero.png
 *       logo.jpeg
 *     components/
 *       tokens.js            ← design tokens + global CSS
 *       useScrollReveal.js   ← IntersectionObserver hook
 *       HeroSection.jsx
 *       SubjectTicker.jsx
 *       AboutSection.jsx
 *       SpecialisationSection.jsx
 *       TestimonialsSection.jsx
 *       FeedbackForm.jsx
 *       CtaBanner.jsx
 *       ContactSection.jsx
 *       Footer.jsx
 *     pages/
 *       Home.jsx   ← this file
 */


import HeroSection           from "../components/HeroSection";
import SubjectTicker         from "../components/SubjectTicker";
import AboutSection          from "../components/AboutSection";
import SpecialisationSection from "../components/SpecialisationSection";
import TestimonialsSection   from "../components/TestimonialsSection";
import FeedbackForm          from "../components/FeedbackForm";
import CtaBanner             from "../components/CtaBanner";
import ContactSection        from "../components/ContactSection";
import Footer                from "../components/Footer";
import Navbar                 from "../components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SubjectTicker />
      <AboutSection />
      <SpecialisationSection />
      <TestimonialsSection />
      <FeedbackForm />
      <CtaBanner />
      <ContactSection />
      <Footer />
    </>
  );
}