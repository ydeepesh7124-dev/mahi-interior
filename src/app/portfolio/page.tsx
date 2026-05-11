"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Using the real images extracted from the Google Business Profile
const portfolioImages = [
  "https://lh5.googleusercontent.com/p/AF1QipN0fy15M_Y5A9ahhhpJs7r4wKpVROcfbb9UTvhB=w1000-h1000-n-k-no",
  "https://lh5.googleusercontent.com/p/AF1QipMeK_L99vGMGkSx4y6bBNMtZbQufPO878UIDkzI=w1000-h1000-n-k-no",
  "https://lh5.googleusercontent.com/p/AF1QipOSt1_ZKlrHqeM_omWR9k5QAom3jZiE6h6tZah7=w1000-h1000-n-k-no",
  "https://lh5.googleusercontent.com/p/AF1QipOiM9_XuIbLkmL7gRmgwNtzK5h84U1-MTV0fyxq=w1000-h1000-n-k-no",
  "https://lh5.googleusercontent.com/p/AF1QipMCnW7L96VzaW2fBxe2RdT45PDK35Aq1b9Ziv8j=w1000-h1000-n-k-no",
  "https://lh5.googleusercontent.com/p/AF1QipNqXiuW2i-Yd_IL53-5I_0GzCPV2u2F76Lb8rnJ=w1000-h1000-n-k-no",
  // Reusing some for a fuller gallery effect
  "https://lh5.googleusercontent.com/p/AF1QipOSt1_ZKlrHqeM_omWR9k5QAom3jZiE6h6tZah7=w1000-h1000-n-k-no",
  "https://lh5.googleusercontent.com/p/AF1QipN0fy15M_Y5A9ahhhpJs7r4wKpVROcfbb9UTvhB=w1000-h1000-n-k-no",
  "https://lh5.googleusercontent.com/p/AF1QipMeK_L99vGMGkSx4y6bBNMtZbQufPO878UIDkzI=w1000-h1000-n-k-no",
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-primary pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-accent-gold uppercase tracking-widest text-sm hover:text-white transition-colors duration-300 mb-12"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Full Portfolio.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl font-light leading-relaxed"
          >
            Explore our complete collection of premium residential and commercial interior transformations. Every space is a testament to luxury, comfort, and immaculate detailing.
          </motion.p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioImages.map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative overflow-hidden group rounded-xl break-inside-avoid"
            >
              <img 
                src={src} 
                alt={`Mahi Interior Project ${idx + 1}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif tracking-widest uppercase text-sm border border-white px-6 py-2">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
