import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { profileData } from '../data/projects';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    
    emailjs.init({ publicKey: "r8EQr7sPuPdQhaSyW" });

    emailjs.sendForm('default_service', 'template_default', formRef.current)
      .then(() => {
        setStatus('Message sent successfully!');
        setLoading(false);
        formRef.current.reset();
        setTimeout(() => setStatus(''), 5000);
      })
      .catch((error) => {
        console.error(error);
        setStatus('Failed to send message. Please email me directly.');
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-5xl mx-auto mb-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-card w-full rounded-[2rem] p-8 md:p-14 border border-black/5 dark:border-white/5 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="grid md:grid-cols-2 gap-16 text-center md:text-left relative z-10 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-textPrimary leading-tight">
              Let's build something <br className="hidden md:block"/> amazing.
            </h2>
            <p className="text-textMuted text-lg max-w-sm mx-auto md:mx-0">
              I'm always interested in exploring new opportunities, collaborating, or exchanging ideas.
            </p>
            <div className="pt-4">
              <a href={`mailto:${profileData.socials.email}`} className="text-lg font-medium hover:opacity-80 transition-opacity underline underline-offset-4 text-textPrimary">
                {profileData.socials.email}
              </a>
            </div>
          </div>
          
          <div className="bg-bg/50 rounded-[1.5rem] p-6 md:p-8 border border-black/5 dark:border-white/5 shadow-inner">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              <div className="space-y-5">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Full Name" 
                  required 
                  minLength="2"
                  className="w-full bg-card border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-textPrimary focus:ring-1 focus:ring-textPrimary transition-all font-sans"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  required
                  className="w-full bg-card border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-textPrimary focus:ring-1 focus:ring-textPrimary transition-all font-sans"
                />
              </div>
              <textarea 
                name="message" 
                placeholder="Write your Message" 
                required 
                minLength="10"
                rows="4"
                className="w-full bg-card border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-textPrimary focus:ring-1 focus:ring-textPrimary transition-all resize-none font-sans"
              ></textarea>
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-textPrimary hover:opacity-90 text-bg font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed text-lg"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              
              {status && (
                <p className={`text-sm text-center mt-4 font-medium ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
