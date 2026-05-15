import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Megaphone, TrendingUp, PenTool, Globe, Target } from 'lucide-react';
import { services } from '../../data/services';
import { servicesPageContent } from '../../data/site_content';

/**
 * Abstract subcomponent controlling the ambient icon rotation and translation.
 * Supplies dynamic background texture to elevate visual retention.
 */
const FloatingIcon = ({ Icon, className, delay, duration, yRange, xRange }) => (
  <motion.div
    className={`absolute text-white/5 z-0 ${className}`}
    animate={{ y: yRange, x: xRange, rotate: [0, 90, 180, 270, 360] }}
    transition={{
      y: { repeat: Infinity, duration: duration, ease: "easeInOut", delay },
      x: { repeat: Infinity, duration: duration * 1.5, ease: "easeInOut", delay },
      rotate: { repeat: Infinity, duration: duration * 2, ease: "linear" }
    }}
  >
    <Icon size={120} strokeWidth={1} />
  </motion.div>
);

/**
 * Primary layout for the Services catalog.
 * Manages the display and animations for auxiliary digital service offerings.
 */
export default function ServicesPage() {
  const { scrollYProgress } = useScroll();
  const yElement = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="w-full bg-[#060606] selection:bg-primary selection:text-obsidian flex flex-col relative overflow-hidden">
      {/* Universal Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-[#060606] to-[#040404]"></div>
        
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(191,215,51,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(191,215,51,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
          animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        ></motion.div>

        <div className="absolute top-1/4 left-1/4 bg-orb-1 opacity-20 scale-150"></div>
        <div className="absolute bottom-1/4 right-1/4 bg-orb-2 opacity-20 scale-150"></div>
      </div>

      {/* Floating Abstract Marketing/Tech Elements spanning the whole page */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden min-h-screen">
        <FloatingIcon Icon={Megaphone} className="top-[10%] left-[10%]" delay={0} duration={12} yRange={[0, -30, 0]} xRange={[0, 20, 0]} />
        <FloatingIcon Icon={Globe} className="top-[30%] right-[15%]" delay={2} duration={14} yRange={[0, 40, 0]} xRange={[0, -20, 0]} />
        <FloatingIcon Icon={TrendingUp} className="top-[50%] left-[5%]" delay={1} duration={10} yRange={[0, 50, 0]} xRange={[0, -30, 0]} />
        <FloatingIcon Icon={Target} className="top-[70%] right-[10%]" delay={3} duration={16} yRange={[0, -40, 0]} xRange={[0, 20, 0]} />
        <FloatingIcon Icon={PenTool} className="top-[90%] left-[20%]" delay={1.5} duration={15} yRange={[0, -30, 0]} xRange={[0, 30, 0]} />
      </div>

      <div className="relative z-10 w-full flex flex-col pt-32">

      {/* Section 2: Introduction */}
      <section className="py-12 md:py-24 relative z-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10 glass-dark p-10 md:p-16 rounded-[3.5rem] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] group overflow-hidden">
          {/* Dynamic Card Glow */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-primary/20 blur-[120px] rounded-[100%]"
          ></motion.div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-10 relative z-10"
          ></motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-3xl md:text-5xl font-teko font-bold text-white mb-8 uppercase tracking-wide leading-tight relative z-10"
          >
            {servicesPageContent.intro.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed font-sans relative z-10"
          >
            {servicesPageContent.intro.description}
          </motion.p>
        </div>
      </section>

      {/* Section 3: Services Layout */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-24 md:gap-32">
            {services.map((service, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <Link
                  to={`/services/${service.id}`}
                  key={service.id}
                  className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 group/link ${!isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Image Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 w-full"
                  >
                    <div className="relative group perspective-1000">
                      {/* Decorative Background shadow */}
                      <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-90 group-hover:bg-primary/30 transition-colors duration-500"></div>

                      <div className="relative overflow-hidden shadow-2xl rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl bg-white/5 border border-white/10 transform transition-transform duration-700 group-hover:-translate-y-2">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-80 md:h-[450px] object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Text Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex-1 w-full flex flex-col justify-center"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <span className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full inline-block"></span>
                      <span className="text-slate-400 font-bold tracking-widest text-sm uppercase">Service 0{idx + 1}</span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-sans font-bold text-white mb-6 leading-tight group-hover/link:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-lg text-slate-300 font-light leading-relaxed">
                      {service.short_description}
                    </p>

                    <div className="mt-10">
                      <span className="flex items-center gap-2 text-primary font-bold group-hover/link:text-white transition-colors">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </div>
    </div>
  );
}
