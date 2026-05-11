"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-primary text-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-accent-gold/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-gold uppercase tracking-widest text-sm font-semibold mb-4"
          >
            Client Stories
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white"
          >
            Words of Appreciation
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Quote className="absolute -top-10 -left-10 text-white/10 w-24 h-24 md:w-32 md:h-32 rotate-180" />
          
          <div className="relative min-h-[450px] sm:min-h-[350px] md:min-h-[300px]">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: activeIndex === i ? 1 : 0, 
                  x: activeIndex === i ? 0 : (activeIndex > i ? -50 : 50),
                  pointerEvents: activeIndex === i ? "auto" : "none"
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full glassmorphism p-8 md:p-16 rounded-2xl"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="text-accent-gold fill-accent-gold w-5 h-5 drop-shadow-[0_0_8px_rgba(197,160,89,0.8)]" />
                  ))}
                </div>
                
                <p className="text-lg sm:text-xl md:text-3xl font-light leading-relaxed mb-10 text-white/90">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-accent-gold/50"
                  />
                  <div>
                    <h4 className="text-lg md:text-xl font-serif font-bold text-white">{testimonial.name}</h4>
                    <p className="text-accent-gold text-xs md:text-sm uppercase tracking-widest mt-1">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8 md:mt-12 relative z-20">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-12 md:w-16 h-1 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "bg-accent-gold" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
