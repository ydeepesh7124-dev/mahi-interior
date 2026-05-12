"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Floating particles
  const particles = Array.from({ length: 20 });

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]"
    >
      {/* Cinematic Slow Zoom Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          {/* Luxury Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop" 
            alt="Cinematic Luxury Interior" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Ambient Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center gap-3 backdrop-blur-md bg-white/5 border border-white/10 px-4 py-1.5 rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
          <span className="text-xs uppercase tracking-[0.3em] text-white/80 font-medium">World-Class Design Studio</span>
        </motion.div>

        <div className="overflow-hidden mb-8">
          <motion.h1 
            initial={{ y: "100%", rotate: 2 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1]"
          >
            Crafting Timeless <br />
            <span className="italic font-light text-accent-gold/90 text-glow">Luxury Interiors</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="max-w-2xl text-base md:text-lg text-gray-300 font-light mb-12"
        >
          We transform spaces into breathtaking cinematic experiences. Elite architecture and premium interiors designed for those who demand the extraordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <MagneticButton as="a" href="#contact" className="group relative flex items-center justify-center px-8 py-4 bg-white text-black uppercase tracking-widest text-xs font-bold overflow-hidden transition-all hover:scale-[1.02]">
            <span className="relative z-10 flex items-center gap-2">
              Book Consultation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </MagneticButton>
          
          <MagneticButton as="a" href="#projects" className="group flex items-center justify-center px-8 py-4 glassmorphism text-white uppercase tracking-widest text-xs font-bold hover:bg-white/20 transition-all">
            Explore Portfolio
          </MagneticButton>
        </motion.div>
      </div>

      {/* Smooth Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Scroll to Explore</span>
        <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
