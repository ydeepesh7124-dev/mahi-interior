"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

const categories = ["All", "Living Room", "Bedroom", "Modular Kitchen", "Commercial"];

const projects = [
  { id: 1, title: "Modern Living Space", category: "Living Room", img: "https://lh5.googleusercontent.com/p/AF1QipN0fy15M_Y5A9ahhhpJs7r4wKpVROcfbb9UTvhB=w1000-h1000-n-k-no", height: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto" },
  { id: 2, title: "Premium Interiors", category: "Bedroom", img: "https://lh5.googleusercontent.com/p/AF1QipMeK_L99vGMGkSx4y6bBNMtZbQufPO878UIDkzI=w1000-h1000-n-k-no", height: "col-span-1 row-span-1 aspect-[4/5]" },
  { id: 3, title: "Opulent Culinary Space", category: "Modular Kitchen", img: "https://lh5.googleusercontent.com/p/AF1QipOSt1_ZKlrHqeM_omWR9k5QAom3jZiE6h6tZah7=w1000-h1000-n-k-no", height: "col-span-1 row-span-2 aspect-[3/4]" },
  { id: 4, title: "Elegant Detailing", category: "Commercial", img: "https://lh5.googleusercontent.com/p/AF1QipOiM9_XuIbLkmL7gRmgwNtzK5h84U1-MTV0fyxq=w1000-h1000-n-k-no", height: "col-span-1 row-span-1 aspect-square" },
  { id: 5, title: "Urban Living", category: "Living Room", img: "https://lh5.googleusercontent.com/p/AF1QipMCnW7L96VzaW2fBxe2RdT45PDK35Aq1b9Ziv8j=w1000-h1000-n-k-no", height: "col-span-1 row-span-1 aspect-[4/5]" },
  { id: 6, title: "Serene Finishes", category: "Bedroom", img: "https://lh5.googleusercontent.com/p/AF1QipNqXiuW2i-Yd_IL53-5I_0GzCPV2u2F76Lb8rnJ=w1000-h1000-n-k-no", height: "md:col-span-2 row-span-1 aspect-[21/9]" },
];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-40 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div>
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-accent-gold" />
              <h3 className="text-accent-gold uppercase tracking-[0.3em] text-xs font-semibold">Portfolio</h3>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
              Selected <br/>
              <span className="italic font-light text-white/80">Works.</span>
            </h2>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 md:max-w-md justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-500 border ${
                  activeCategory === cat 
                    ? "bg-white border-white text-black font-semibold" 
                    : "border-white/10 text-white/50 hover:border-white/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style Grid using CSS Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden group cursor-pointer w-full rounded-sm ${project.height}`}
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                
                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8 md:p-10">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <span className="text-accent-gold text-[10px] uppercase tracking-[0.3em] mb-3 block">{project.category}</span>
                    <h3 className="text-3xl font-serif text-white flex justify-between items-end">
                      {project.title}
                      <motion.div 
                        whileHover={{ rotate: 45 }}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity delay-300"
                      >
                        <ArrowUpRight className="text-white w-5 h-5" />
                      </motion.div>
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-24 text-center">
          <MagneticButton as={Link} href="/portfolio" className="inline-flex px-10 py-5 border border-white/20 text-white uppercase tracking-widest text-xs font-semibold hover:bg-white hover:text-black transition-colors duration-500 rounded-sm">
            View Full Portfolio
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}
