import React from 'react';
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
    <div className="min-h-screen flex flex-col selection:bg-accent/30 selection:text-textPrimary overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
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
