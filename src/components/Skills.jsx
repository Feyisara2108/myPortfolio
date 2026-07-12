import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/projects';

// Categorized, scannable skills — recruiters check stack match in seconds.
// Every item here is demonstrated in a project or the résumé (see data/projects.js).
export default function Skills() {
  return (
    <section id="skills" className="py-10 px-6 md:px-12 max-w-4xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center md:text-left text-textPrimary">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profileData.skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-card p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-textMuted mb-4">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm font-medium text-textPrimary bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-3 py-1.5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
