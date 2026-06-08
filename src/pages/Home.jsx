import React from 'react';
import GuideRails from '../components/GuideRails';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import HowCanIHelp from '../components/HowCanIHelp';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col selection:bg-accent/30 selection:text-textPrimary overflow-x-hidden">
      <GuideRails />
      <Navbar />
      <main className="relative z-10 flex-1">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <HowCanIHelp />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
