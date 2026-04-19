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
    <div className="min-h-screen flex flex-col selection:bg-accent/30 selection:text-white overflow-x-hidden">
      <div className="fixed inset-0 z-[-1] pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <HowCanIHelp />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
