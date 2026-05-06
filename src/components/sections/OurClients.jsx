import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { clientLogos } from '../../data/clients_logos';
import { sectionHeadlines } from '../../data/site_content';

/**
 * Infinite scrolling logo carousel presenting corporate affiliates.
 * Uses Framer Motion to seamlessly translate the array of client imageries.
 */
export function OurClients() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the array to create a seamless infinite loop
  const duplicated = [...clientLogos, ...clientLogos];

  return (
    <section className="py-20 md:py-28 bg-obsidian relative overflow-hidden border-t border-white/5">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[200px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14 md:mb-20 relative z-10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '60px' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"
        />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-teko font-bold text-white uppercase tracking-wide"
        >
          {sectionHeadlines.clients.title}
        </motion.h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full">
        {/* Left fade edge */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-r from-obsidian to-transparent z-20 pointer-events-none" />
        {/* Right fade edge */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-l from-obsidian to-transparent z-20 pointer-events-none" />

        {/* Scrolling track */}
        <div
          className="flex overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <style>{`
            @keyframes scrollMarquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
          <div
            className="flex shrink-0 gap-10 md:gap-16 px-10 py-10"
            style={{
              animation: 'scrollMarquee 40s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
          >
            {duplicated.map((client, idx) => (
              <div
                key={`${client.id}-${idx}`}
                className="shrink-0 flex flex-col items-center gap-4 group cursor-pointer"
              >
                {/* Large circular photo container */}
                <div className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden border-2 border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.5)] group-hover:border-primary/50 group-hover:shadow-[0_0_40px_rgba(191,215,51,0.2)] transition-all duration-500 group-hover:scale-105 bg-white/5">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Client name label */}
                <span className="text-sm md:text-base font-sans text-slate-500 group-hover:text-primary transition-colors duration-300 tracking-wide font-medium">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

