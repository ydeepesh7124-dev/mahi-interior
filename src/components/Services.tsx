"use client";

import { motion } from "framer-motion";

const services = [
  { id: "01", title: "Turnkey Projects", desc: "End-to-end interior design and execution with zero hassle and absolute perfection." },
  { id: "02", title: "Modular Kitchen", desc: "Sleek, highly functional kitchens tailored to modern culinary needs and aesthetics." },
  { id: "03", title: "Space Planning", desc: "Optimizing layouts for maximum utility, spatial flow, and visual appeal." },
  { id: "04", title: "Lighting Design", desc: "Creating ambiance and mood through strategic, luxury lighting solutions." },
  { id: "05", title: "Furniture Design", desc: "Custom-crafted bespoke furniture pieces that stand as functional art." },
  { id: "06", title: "False Ceiling", desc: "Architectural ceiling designs that enhance overall aesthetics and acoustics." },
];

export default function Services() {
  return (
    <section id="services" className="py-40 bg-white text-[#0a0a0a] relative z-10 overflow-hidden">
      {/* Background elegant accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fcfcfc] pointer-events-none transform skew-x-12 translate-x-32" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-accent-gold" />
            <span className="text-accent-gold uppercase tracking-[0.3em] text-xs font-semibold">Our Expertise</span>
            <div className="w-8 h-[1px] bg-accent-gold" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl font-serif font-bold text-[#0a0a0a] leading-tight"
          >
            Comprehensive Design <br/>
            <span className="italic font-light text-black/60">Solutions.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-10 bg-transparent hover:bg-[#0a0a0a] transition-all duration-700 ease-in-out border border-black/5 hover:border-transparent hover:shadow-2xl"
            >
              <div className="absolute top-6 right-6 text-5xl font-serif font-bold text-black/5 group-hover:text-white/5 transition-colors duration-700 pointer-events-none">
                {service.id}
              </div>
              
              <div className="relative z-10">
                <div className="w-8 h-[1px] bg-accent-gold mb-8 group-hover:w-16 transition-all duration-700 ease-out"></div>
                <h3 className="text-2xl font-serif text-[#0a0a0a] mb-4 group-hover:text-white transition-colors duration-700">
                  {service.title}
                </h3>
                <p className="text-black/50 font-light text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-700">
                  {service.desc}
                </p>
              </div>

              {/* Reveal gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
