import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Work from '../components/Work';
import OpenSource from '../components/OpenSource';
import Experience from '../components/Experience';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Work />
        <Experience />
        <OpenSource />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
