"use client";

import { motion } from "framer-motion";

const services = [
  { id: "01", title: "Turnkey Projects", desc: "End-to-end interior design and execution with zero hassle." },
  { id: "02", title: "Modular Kitchen", desc: "Sleek, highly functional kitchens tailored to modern culinary needs." },
  { id: "03", title: "Space Planning", desc: "Optimizing layouts for maximum utility, flow, and visual appeal." },
  { id: "04", title: "Lighting Design", desc: "Creating ambiance and mood through strategic lighting solutions." },
  { id: "05", title: "Furniture Design", desc: "Custom-crafted bespoke furniture pieces that stand out." },
  { id: "06", title: "False Ceiling", desc: "Architectural ceiling designs that enhance aesthetics and acoustics." },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-secondary text-primary relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-gold uppercase tracking-widest text-sm font-semibold mb-4"
          >
            Our Expertise
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif font-bold"
          >
            Comprehensive Design Solutions
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-10 bg-white hover:bg-primary transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-6xl font-serif font-bold text-black/5 group-hover:text-white/5 transition-colors duration-500 pointer-events-none">
                {service.id}
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-[2px] bg-accent-gold mb-8 group-hover:w-24 transition-all duration-500"></div>
                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-primary/60 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                  {service.desc}
                </p>
              </div>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-gold/10 rounded-full blur-3xl group-hover:bg-accent-gold/20 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
