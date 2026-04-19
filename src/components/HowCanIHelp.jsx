import React from 'react';
import { motion } from 'framer-motion';
import Marquee from './Marquee';
import { profileData } from '../data/projects';

export default function HowCanIHelp() {
  return (
    <section className="py-10 px-6 md:px-12 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-card text-white relative rounded-3xl overflow-hidden shadow-2xl"
      >
        {/* Abstract Squiggles Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.83-5.59 5.591L54.627 12l-1.66 1.66-4.761-4.762L41.615 15.49l-1.66-1.66 6.59-6.592-4.761-4.761L43.444 0h11.183zM22.28 0l1.66 1.66-6.591 6.59-4.76 4.762L10.927 12l-1.66-1.66 5.59-5.591L14.027 0h8.252zm37.72 23.368l-1.66-1.66-4.761 4.762-6.59-6.592-1.66 1.66 6.59 6.59-4.76 4.761 1.66 1.66 4.76-4.76 6.591 6.59 1.66-1.66-5.59-5.592 5.59-5.591zM0 36.632l1.66 1.66 4.761-4.762 6.59 6.592 1.66-1.66-6.59-6.59 4.76-4.761-1.66-1.66-4.76 4.76-6.591-6.59L0 23.368l5.59 5.592L0 34.55v2.082zm48.207 23.368l1.66-1.66-5.59-5.592 5.59-5.59-1.66-1.66-4.762 4.76-6.591-6.59-1.66 1.66 6.59 6.59-4.76 4.762 1.66 1.66 4.762-4.761 5.59 5.59zM11.793 60l-1.66-1.66 5.59-5.592-5.59-5.59 1.66-1.66 4.762 4.76 6.591-6.59 1.66 1.66-6.59 6.59 4.76 4.762-1.66 1.66-4.762-4.761-5.59 5.59H11.793zM25.405 34.594l1.66 1.66-5.59 5.591-5.59-5.59 1.66-1.66 4.761 4.76 6.59-6.59-1.66-1.66-6.59 6.59-4.761-4.76 1.66-1.66 4.761 4.76 5.59-5.591 5.59 5.59-1.66 1.66-4.76-4.761-6.591 6.59 1.66 1.66 6.591-6.59z\' fill=\'%23ffffff\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>

        <div className="relative z-10 flex flex-col items-center justify-center p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-display font-bold mb-4 drop-shadow-md">
            How Can I Help?
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-12">
            Let's turn your vision into something amazing.
          </p>

          <div className="w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] max-w-4xl opacity-90 hover:opacity-100 transition-opacity">
            <Marquee 
              items={profileData.skills} 
              className="!border-transparent bg-transparent"
              renderItem={(skill) => (
                <div className="bg-white text-black px-6 py-2.5 rounded-full text-base font-semibold tracking-wider hover:scale-105 transition-transform mx-2 shadow-xl font-display cursor-default flex items-center justify-center whitespace-nowrap">
                  {skill}
                </div>
              )}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
