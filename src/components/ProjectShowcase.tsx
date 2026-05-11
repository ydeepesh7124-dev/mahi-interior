"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Living Room", "Bedroom", "Modular Kitchen", "Commercial"];

const projects = [
  { id: 1, title: "Modern Living Space", category: "Living Room", img: "https://lh5.googleusercontent.com/p/AF1QipN0fy15M_Y5A9ahhhpJs7r4wKpVROcfbb9UTvhB=w1000-h1000-n-k-no", height: "h-[500px]" },
  { id: 2, title: "Premium Interiors", category: "Bedroom", img: "https://lh5.googleusercontent.com/p/AF1QipMeK_L99vGMGkSx4y6bBNMtZbQufPO878UIDkzI=w1000-h1000-n-k-no", height: "h-[350px]" },
  { id: 3, title: "Opulent Culinary Space", category: "Modular Kitchen", img: "https://lh5.googleusercontent.com/p/AF1QipOSt1_ZKlrHqeM_omWR9k5QAom3jZiE6h6tZah7=w1000-h1000-n-k-no", height: "h-[450px]" },
  { id: 4, title: "Elegant Detailing", category: "Commercial", img: "https://lh5.googleusercontent.com/p/AF1QipOiM9_XuIbLkmL7gRmgwNtzK5h84U1-MTV0fyxq=w1000-h1000-n-k-no", height: "h-[400px]" },
  { id: 5, title: "Urban Living", category: "Living Room", img: "https://lh5.googleusercontent.com/p/AF1QipMCnW7L96VzaW2fBxe2RdT45PDK35Aq1b9Ziv8j=w1000-h1000-n-k-no", height: "h-[350px]" },
  { id: 6, title: "Serene Finishes", category: "Bedroom", img: "https://lh5.googleusercontent.com/p/AF1QipNqXiuW2i-Yd_IL53-5I_0GzCPV2u2F76Lb8rnJ=w1000-h1000-n-k-no", height: "h-[500px]" },
];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 bg-primary text-secondary">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h3 className="text-accent-gold uppercase tracking-widest text-sm font-semibold mb-4">Portfolio</h3>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
              Selected <br/> Works.
            </h2>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm uppercase tracking-wider transition-all duration-300 border ${
                  activeCategory === cat 
                    ? "bg-accent-gold border-accent-gold text-white" 
                    : "border-white/20 text-white/60 hover:border-white hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`relative overflow-hidden group cursor-pointer w-full inline-block ${project.height}`}
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-accent-gold text-xs uppercase tracking-widest mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-serif text-white flex justify-between items-center">
                      {project.title}
                      <ArrowUpRight className="text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity delay-300" />
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <Link 
            href="/portfolio"
            className="inline-block px-8 py-4 border border-white/30 text-white uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-colors duration-300"
          >
            View Full Portfolio
          </Link>
        </div>

      </div>
    </section>
  );
}
