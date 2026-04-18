import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, MonitorPlay, Zap, Database, Cpu } from 'lucide-react';
import { pillars, softwareProducts, devCards } from '../../data/software';
import { softwarePageContent } from '../../data/site_content';

/**
 * Abstract subcomponent controlling the ambient icon rotation and translation.
 * Supplies dynamic background texture to elevate visual retention.
 */
const FloatingIcon = ({ Icon, className, delay, duration, yRange, xRange }) => (
  <motion.div
    className={`absolute text-white/5 z-0 ${className}`}
    animate={{
      y: yRange,
      x: xRange,
      rotate: [0, 90, 180, 270, 360],
    }}
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
 * Central viewport for proprietary software products and development types.
 * Manages the presentation of software offerings and core capability pillars.
 */
export default function SoftwarePage() {
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

        {/* Floating Abstract Tech Elements */}
        <FloatingIcon Icon={Code2} className="top-[10%] left-[15%]" delay={0} duration={12} yRange={[0, -30, 0]} xRange={[0, 20, 0]} />
        <FloatingIcon Icon={Database} className="top-[60%] left-[5%]" delay={2} duration={14} yRange={[0, 40, 0]} xRange={[0, -20, 0]} />
        <FloatingIcon Icon={Zap} className="top-[20%] right-[10%]" delay={1} duration={10} yRange={[0, 50, 0]} xRange={[0, -30, 0]} />
        <FloatingIcon Icon={Cpu} className="top-[70%] right-[15%]" delay={3} duration={16} yRange={[0, -40, 0]} xRange={[0, 20, 0]} />

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
                {softwarePageContent.hero.badge}
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white mb-8 tracking-tight uppercase leading-[1.1]">
              {softwarePageContent.hero.title}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#d4eb44] to-accent inline-block mt-2 drop-shadow-[0_0_20px_rgba(191,215,51,0.3)]">
                {softwarePageContent.hero.titleAccent}
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto glass-dark p-6 md:p-8 rounded-[2rem] border border-white/5 backdrop-blur-xl shadow-2xl relative font-sans"
          >
            {softwarePageContent.hero.description}
          </motion.p>
        </motion.div>
      </section>

      {/* Section 2: Introduction */}
      <section className="py-24 md:py-32 bg-obsidian relative z-20">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-dark rounded-[3.5rem] p-10 md:p-16 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden group"
          >
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
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-10"
            ></motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-teko font-bold text-white mb-8 uppercase tracking-wide leading-tight relative z-10"
            >
              {softwarePageContent.intro.title}<br />
              <span className="text-primary mt-2 block">{softwarePageContent.intro.subtitle}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-slate-300 font-light leading-relaxed relative z-10 font-sans"
            >
              {softwarePageContent.intro.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Product Grid */}
      <section className="py-24 bg-obsidian relative overflow-hidden">
        {/* Subtle background element for grid */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="grid md:grid-cols-2 gap-12"
          >
            {softwareProducts.map((product, idx) => (
              <Link to={`/softwares/${product.id}`} key={product.id} className="block">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    show: { opacity: 1, y: 0, scale: 1 }
                  }}
                  transition={{ type: "spring", bounce: 0.4 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-dark rounded-[2.5rem] p-8 md:p-10 border border-white/10 shadow-2xl flex flex-col md:flex-row gap-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 cursor-pointer min-h-[270px]"
                >
                  {/* Glow Effect on Hover */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-[3rem]"></div>

                  <div className="shrink-0 relative z-10">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-24 h-24 glass-glow rounded-[2rem] flex items-center justify-center border border-white/5 shadow-inner bg-white/5 backdrop-blur-xl group-hover:bg-primary/20 transition-colors"
                    >
                      <img src={product.image} alt={`${product.title} icon`} className="w-14 h-14 object-contain filter drop-shadow-lg" />
                    </motion.div>
                  </div>
                  <div className="relative z-10 flex-1 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-sans font-bold text-white mb-3 group-hover:text-primary transition-colors tracking-tight flex items-center gap-3">
                      {product.title}
                      <MonitorPlay size={20} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-accent" />
                    </h3>
                    <p className="text-slate-400 font-light leading-relaxed text-base md:text-lg">
                      {product.short_description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* New Section 1: Types of Development */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-teko font-bold text-primary mb-8 uppercase"
          >
            {softwarePageContent.types.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-600 font-medium leading-relaxed font-sans"
          >
            {softwarePageContent.types.description}
          </motion.p>
        </div>
      </section>

      {/* New Section 2: Development Cards Grid */}
      <section className="py-24 bg-obsidian relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {devCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative rounded-3xl overflow-hidden h-[400px] flex flex-col justify-end p-8 md:p-10 group border border-white/10 shadow-2xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 transition-colors duration-500"></div>
                <div className="relative z-10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "40px" }}
                    viewport={{ once: true }}
                    className="h-1 bg-primary mb-6"
                  ></motion.div>
                  <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors uppercase">{card.title}</h3>
                  <p className="text-slate-300 font-light leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity font-sans">
                    {card.short_description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section 3: Setting the Standard */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-teko font-bold text-primary mb-8 uppercase"
          >
            {softwarePageContent.standards.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-600 font-medium leading-relaxed font-sans"
          >
            {softwarePageContent.standards.description}
          </motion.p>
        </div>
      </section>

      {/* New Section 4: Milestones/Pillars */}
      <section className="py-24 md:py-32 bg-obsidian relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[200px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          >
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for a premium feel
                    }
                  }
                }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative w-32 h-32 flex items-center justify-center mb-8">
                  {/* Vibrant green angled geometric shape */}
                  <motion.div
                    whileHover={{ rotate: 180, scale: 1.15 }}
                    transition={{ duration: 0.7, type: "spring" }}
                    className="absolute inset-0 bg-gradient-to-tr from-[#a8cc10] to-[#e4ff50] skew-x-12 rounded-2xl group-hover:skew-x-0 shadow-[0_0_40px_rgba(191,215,51,0.4)] transition-transform duration-500"
                  ></motion.div>
                  {/* Inner styling ring */}
                  <div className="absolute inset-2 border-2 border-white/20 rounded-xl skew-x-12 group-hover:skew-x-0 transition-transform duration-500"></div>

                  <span className="relative z-10 text-6xl font-black font-display text-obsidian drop-shadow-[0_5px_10px_rgba(0,0,0,0.3)] group-hover:text-white transition-colors duration-500">
                    {pillar.num}
                  </span>
                </div>
                <h4 className="text-white font-bold text-lg md:text-xl max-w-[200px] leading-snug group-hover:text-primary transition-colors duration-300">
                  {pillar.text}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
