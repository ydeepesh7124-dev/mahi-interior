"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://lh5.googleusercontent.com/p/AF1QipN0fy15M_Y5A9ahhhpJs7r4wKpVROcfbb9UTvhB=w1000-h1000-n-k-no" 
          alt="Mahi Interior Design" 
          className="w-full h-full object-cover scale-105"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-accent-gold font-semibold">
            Welcome to Mahi Interior
          </h2>
        </motion.div>

        <div className="overflow-hidden mb-6">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight"
          >
            Designing Spaces <br />
            <span className="italic font-light text-white/90">That Feel Like Luxury.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 font-light"
        >
          Elevating lifestyles through elegant, comfortable, and powerfully minimal modern interiors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#contact"
            className="group relative px-8 py-4 bg-accent-gold text-white uppercase tracking-widest text-sm font-semibold overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Consultation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full z-0" />
          </a>
          
          <a 
            href="#projects"
            className="group px-8 py-4 border border-white/30 text-white uppercase tracking-widest text-sm font-semibold hover:border-accent-gold hover:text-accent-gold transition-colors backdrop-blur-sm"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
