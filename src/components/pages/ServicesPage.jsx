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
    <div className="w-full bg-obsidian selection:bg-primary selection:text-obsidian flex flex-col pt-16">

      {/* Section 1: Hero Banner */}
      <section className="pt-24 pb-32 relative bg-[#060606] overflow-hidden flex flex-col items-center justify-center text-center min-h-[60vh] border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-[#060606] to-[#040404]"></div>

        {/* Animated Tech Grid Background */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(191,215,51,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(191,215,51,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
          animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        ></motion.div>

        {/* Floating Abstract Marketing/Tech Elements */}
        <FloatingIcon Icon={Megaphone} className="top-[10%] left-[15%]" delay={0} duration={12} yRange={[0, -30, 0]} xRange={[0, 20, 0]} />
        <FloatingIcon Icon={Globe} className="top-[60%] left-[5%]" delay={2} duration={14} yRange={[0, 40, 0]} xRange={[0, -20, 0]} />
        <FloatingIcon Icon={TrendingUp} className="top-[20%] right-[10%]" delay={1} duration={10} yRange={[0, 50, 0]} xRange={[0, -30, 0]} />
        <FloatingIcon Icon={Target} className="top-[70%] right-[15%]" delay={3} duration={16} yRange={[0, -40, 0]} xRange={[0, 20, 0]} />

        <div className="bg-orb-1 opacity-20 scale-150"></div>
        <div className="bg-orb-2 opacity-20 scale-150"></div>

        <motion.div
          style={{ y: yElement }}
          className="max-w-5xl mx-auto px-4 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-block overflow-hidden"
            >
              <div className="inline-block py-2 px-8 rounded-full glass-dark text-primary font-bold text-xs tracking-widest uppercase mb-10 border border-primary/20 shadow-[0_0_20px_rgba(191,215,51,0.1)] backdrop-blur-2xl font-sans">
                {servicesPageContent.hero.badge}
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white mb-8 tracking-tight uppercase leading-[1.1]">
              {servicesPageContent.hero.title}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#d4eb44] to-accent inline-block mt-2 drop-shadow-[0_0_20px_rgba(191,215,51,0.3)]">
                {servicesPageContent.hero.titleAccent}
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto glass-dark p-6 md:p-8 rounded-[2rem] border border-white/5 backdrop-blur-xl shadow-2xl relative font-sans"
          >
            {servicesPageContent.hero.description}
          </motion.p>
        </motion.div>
      </section>

      {/* Section 2: Introduction */}
      <section className="py-24 md:py-32 bg-[#060606] relative z-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-10"
          ></motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-3xl md:text-5xl font-teko font-bold text-white mb-8 uppercase tracking-wide leading-tight"
          >
            {servicesPageContent.intro.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed font-sans"
          >
            {servicesPageContent.intro.description}
          </motion.p>
        </div>
      </section>

      {/* Section 3: Services Layout */}
      <section className="pb-32 bg-obsidian relative">
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
  );
}
