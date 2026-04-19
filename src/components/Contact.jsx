import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/projects';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profileData.socials.email}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: "New message from portfolio!"
        })
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-10 px-6 md:px-12 max-w-5xl mx-auto mb-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-card w-full rounded-[2rem] p-8 md:p-10 border border-black/5 dark:border-white/5 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="grid md:grid-cols-2 gap-12 text-center md:text-left relative z-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-textPrimary leading-tight">
              Let's build something <br className="hidden md:block"/> amazing.
            </h2>
            <p className="text-textMuted text-base md:text-lg max-w-sm mx-auto md:mx-0">
              I'm always interested in exploring new opportunities, collaborating, or exchanging ideas.
            </p>
            <div className="pt-2">
              <a href={`mailto:${profileData.socials.email}`} className="text-base md:text-lg font-medium hover:opacity-80 transition-opacity underline underline-offset-4 text-textPrimary">
                {profileData.socials.email}
              </a>
            </div>
          </div>
          
          <div className="bg-bg/50 rounded-[1.5rem] border border-black/5 dark:border-white/5 shadow-inner relative overflow-hidden">
            {/* Abstract Squiggles Background */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.83-5.59 5.591L54.627 12l-1.66 1.66-4.761-4.762L41.615 15.49l-1.66-1.66 6.59-6.592-4.761-4.761L43.444 0h11.183zM22.28 0l1.66 1.66-6.591 6.59-4.76 4.762L10.927 12l-1.66-1.66 5.59-5.591L14.027 0h8.252zm37.72 23.368l-1.66-1.66-4.761 4.762-6.59-6.592-1.66 1.66 6.59 6.59-4.76 4.761 1.66 1.66 4.76-4.76 6.591 6.59 1.66-1.66-5.59-5.592 5.59-5.591zM0 36.632l1.66 1.66 4.761-4.762 6.59 6.592 1.66-1.66-6.59-6.59 4.76-4.761-1.66-1.66-4.76 4.76-6.591-6.59L0 23.368l5.59 5.592L0 34.55v2.082zm48.207 23.368l1.66-1.66-5.59-5.592 5.59-5.59-1.66-1.66-4.762 4.76-6.591-6.59-1.66 1.66 6.59 6.59-4.76 4.762 1.66 1.66 4.762-4.761 5.59 5.59zM11.793 60l-1.66-1.66 5.59-5.592-5.59-5.59 1.66-1.66 4.762 4.76 6.591-6.59 1.66 1.66-6.59 6.59 4.76 4.762-1.66 1.66-4.762-4.761-5.59 5.59H11.793zM25.405 34.594l1.66 1.66-5.59 5.591-5.59-5.59 1.66-1.66 4.761 4.76 6.59-6.59-1.66-1.66-6.59 6.59-4.761-4.76 1.66-1.66 4.761 4.76 5.59-5.591 5.59 5.59-1.66 1.66-4.76-4.761-6.591 6.59 1.66 1.66 6.591-6.59z\' fill=\'%23ffffff\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
            
            <form onSubmit={sendEmail} className="relative z-10 space-y-5 p-6 md:p-8">
              <div className="space-y-5">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Full Name" 
                  required 
                  minLength="2"
                  className="w-full bg-card/90 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-textPrimary focus:ring-1 focus:ring-textPrimary transition-all font-sans"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  required
                  className="w-full bg-card/90 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-textPrimary focus:ring-1 focus:ring-textPrimary transition-all font-sans"
                />
              </div>
              <textarea 
                name="message" 
                placeholder="Write your Message" 
                required 
                minLength="10"
                rows="4"
                className="w-full bg-card/90 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-textPrimary focus:ring-1 focus:ring-textPrimary transition-all resize-none font-sans"
              ></textarea>
              
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-textPrimary hover:opacity-90 text-bg font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl text-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              
              {status === 'success' && (
                <p className="text-sm text-center mt-4 font-medium text-green-500">
                  Message sent successfully!
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-center mt-4 font-medium text-red-500">
                  Failed to send. Please email directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
