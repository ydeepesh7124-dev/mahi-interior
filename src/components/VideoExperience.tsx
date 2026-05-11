"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoExperience() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black group cursor-pointer">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        {/* We use an image with a dark overlay to simulate a video poster/cinematic reel if video is not available */}
        <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/30 transition-colors duration-700" />
        <img 
          src="https://lh5.googleusercontent.com/p/AF1QipOSt1_ZKlrHqeM_omWR9k5QAom3jZiE6h6tZah7=w1000-h1000-n-k-no" 
          alt="Cinematic Reel" 
          className="w-full h-full object-cover group-hover:scale-105 group-hover:blur-[2px] transition-all duration-1000"
        />
      </div>

      <div className="relative z-20 text-center flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center glassmorphism mb-8 group-hover:scale-110 group-hover:border-accent-gold transition-all duration-500"
        >
          <Play className="text-white w-8 h-8 ml-2 group-hover:text-accent-gold transition-colors duration-500" />
        </motion.div>
        
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif font-bold text-white tracking-wide"
        >
          Experience The Luxury
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 font-light mt-4 text-lg uppercase tracking-widest"
        >
          Watch Our Latest Masterpiece
        </motion.p>
      </div>
    </section>
  );
}
