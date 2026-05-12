"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function VideoExperience() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a] group cursor-pointer">
      {/* Cinematic Background Video/Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Dark overlay for cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80 z-10" />
        <motion.div
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop" 
            alt="Cinematic Reel" 
            className="w-full h-full object-cover group-hover:scale-105 group-hover:blur-[2px] transition-all duration-[2s] ease-out"
          />
        </motion.div>
      </div>

      <div className="relative z-20 text-center flex flex-col items-center">
        <MagneticButton className="mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 hover:bg-white/20 transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            <Play className="text-white w-8 h-8 ml-2" />
          </motion.div>
        </MagneticButton>
        
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-serif font-bold text-white tracking-wide leading-tight"
          >
            Experience The <br/>
            <span className="italic font-light text-accent-gold/90">Luxury.</span>
          </motion.h2>
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex items-center gap-4"
        >
          <div className="w-12 h-[1px] bg-white/30" />
          <p className="text-white/60 font-medium text-xs uppercase tracking-[0.3em]">
            Watch Our Masterpiece
          </p>
          <div className="w-12 h-[1px] bg-white/30" />
        </motion.div>
      </div>
    </section>
  );
}
