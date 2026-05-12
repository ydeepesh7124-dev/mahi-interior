"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import MagneticButton from "./MagneticButton";

const testimonials = [
  {
    name: "Gyanendra Pandey",
    role: "Google Review",
    text: "Top-rated interior work, particularly in Lucknow. Professional service with high-quality, durable materials and modern designs. Best home interior in Lucknow. Must visit once for high-quality interior design services!",
    rating: 5,
    photo: "https://ui-avatars.com/api/?name=Gyanendra+Pandey&background=c5a059&color=fff&size=100"
  },
  {
    name: "Ayush Kesarwani",
    role: "Google Review",
    text: "Amazing experience with this team! They listened to our ideas and created a stunning interior design that exceeded our expectations. The attention to detail and craftsmanship are top-notch. Highly recommended for anyone looking to transform their space into something truly beautiful.",
    rating: 5,
    photo: "https://ui-avatars.com/api/?name=Ayush+Kesarwani&background=c5a059&color=fff&size=100"
  },
  {
    name: "Utkarsh Pandey",
    role: "Google Review",
    text: "Very nice and super quality work Mahi interior.",
    rating: 5,
    photo: "https://ui-avatars.com/api/?name=Utkarsh+Pandey&background=c5a059&color=fff&size=100"
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-40 bg-[#050505] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-accent-gold/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-accent-gold" />
            <span className="text-accent-gold uppercase tracking-[0.3em] text-xs font-semibold">Client Stories</span>
            <div className="w-8 h-[1px] bg-accent-gold" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-serif font-bold text-white"
          >
            Words of <span className="italic font-light text-white/80">Appreciation.</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <Quote className="absolute -top-8 -left-12 text-white/5 w-32 h-32 md:w-48 md:h-48 rotate-180 pointer-events-none" />
          
          <div className="relative min-h-[450px] sm:min-h-[350px] md:min-h-[300px]">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ 
                  opacity: activeIndex === i ? 1 : 0, 
                  filter: activeIndex === i ? "blur(0px)" : "blur(10px)",
                  pointerEvents: activeIndex === i ? "auto" : "none",
                  zIndex: activeIndex === i ? 10 : 0
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full p-8 md:p-16 flex flex-col items-center text-center"
              >
                <div className="flex gap-2 mb-8">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="text-accent-gold fill-accent-gold w-4 h-4" />
                  ))}
                </div>
                
                <p className="text-xl md:text-3xl font-serif font-light leading-relaxed mb-12 text-white/90">
                  "{testimonial.text}"
                </p>
                
                <div className="flex flex-col items-center gap-3">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover grayscale opacity-80"
                  />
                  <div>
                    <h4 className="text-sm font-semibold tracking-wide text-white uppercase">{testimonial.name}</h4>
                    <p className="text-accent-gold text-[10px] uppercase tracking-[0.2em] mt-1">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8 relative z-20">
            {testimonials.map((_, i) => (
              <MagneticButton key={i} as="button">
                <div
                  onClick={() => setActiveIndex(i)}
                  className={`w-10 h-[2px] rounded-full transition-all duration-500 hover:bg-white cursor-pointer ${
                    activeIndex === i ? "bg-accent-gold" : "bg-white/20"
                  }`}
                />
              </MagneticButton>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
