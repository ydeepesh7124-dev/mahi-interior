"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <section id="about" className="py-40 bg-[#0a0a0a] relative overflow-hidden" ref={containerRef}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl sticky top-32"
          >
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-accent-gold" />
              <h3 className="text-accent-gold uppercase tracking-[0.3em] text-xs font-semibold">The Studio</h3>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
              Redefining <br/> 
              <span className="italic font-light text-white/80">Modern Elegance.</span>
            </h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-10 text-lg text-white/60 max-w-md font-light leading-relaxed"
            >
              At Mahi Interior, we believe that luxury is not just about expensive materials, but about the seamless integration of aesthetics, comfort, and deep emotional resonance within a space.
            </motion.p>
          </motion.div>

          {/* Right side Images */}
          <div className="w-full md:w-1/2 flex flex-col gap-20 pt-20 md:pt-0">
            <motion.div 
              style={{ y: y1 }}
              className="relative h-[70vh] w-full overflow-hidden group rounded-sm"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop" 
                alt="Mahi Interior Studio" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
            </motion.div>

            <motion.div 
              style={{ y: y2 }}
              className="relative h-[50vh] w-4/5 ml-auto overflow-hidden group rounded-sm"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop" 
                alt="Detailing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="text-2xl font-serif mb-2 text-white">Our Philosophy</h4>
                <p className="text-white/70 font-light text-sm leading-relaxed max-w-xs">
                  We craft spaces that tell a story. From conceptualization to turnkey execution, every detail is meticulously curated.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats / Timeline */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-40 border-t border-white/10 pt-20">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "150+", label: "Projects Completed" },
            { number: "25+", label: "Design Awards" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group"
            >
              <div className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 group-hover:text-accent-gold transition-colors duration-500">
                {stat.number}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/50 group-hover:text-white/80 transition-colors duration-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
