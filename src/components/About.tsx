"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section id="about" className="py-32 bg-secondary relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h3 className="text-accent-gold uppercase tracking-widest text-sm font-semibold mb-4">The Studio</h3>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary">
              Redefining <br/> Modern Elegance.
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-primary/70 max-w-md font-light"
          >
            At Mahi Interior, we believe that luxury is not just about expensive materials, but about the seamless integration of aesthetics, comfort, and deep emotional resonance within a space.
          </motion.p>
        </div>

        {/* Image Grid with Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <motion.div 
            style={{ y: y1 }}
            className="relative h-[60vh] w-full overflow-hidden"
          >
            <img 
              src="https://lh5.googleusercontent.com/p/AF1QipNqXiuW2i-Yd_IL53-5I_0GzCPV2u2F76Lb8rnJ=w1000-h1000-n-k-no" 
              alt="Mahi Interior Studio" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10" />
          </motion.div>

          <div className="flex flex-col gap-10">
            <motion.div 
              style={{ y: y2 }}
              className="relative h-[40vh] w-full md:w-4/5 ml-auto overflow-hidden"
            >
              <img 
                src="https://lh5.googleusercontent.com/p/AF1QipMeK_L99vGMGkSx4y6bBNMtZbQufPO878UIDkzI=w1000-h1000-n-k-no" 
                alt="Detailing" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 bg-white glassmorphism border-l-4 border-accent-gold"
            >
              <h4 className="text-2xl font-serif mb-3 text-primary">Our Philosophy</h4>
              <p className="text-primary/70 font-light leading-relaxed">
                We craft spaces that tell a story. From conceptualization to turnkey execution, every detail is meticulously curated to ensure your home or office is a true reflection of your personality and aspirations.
              </p>
            </motion.div>
          </div>

        </div>

        {/* Stats / Timeline */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 border-t border-primary/10 pt-16">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "150+", label: "Projects Completed" },
            { number: "25+", label: "Design Awards" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent-gold mb-2">{stat.number}</div>
              <div className="text-sm uppercase tracking-widest text-primary/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
