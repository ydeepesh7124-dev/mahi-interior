"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "Residential",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct WhatsApp message
    const text = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Project Type:* ${formData.projectType}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/917007555810?text=${text}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    setSuccess(true);
    setFormData({ name: "", phone: "", projectType: "Residential", message: "" });
    setTimeout(() => setSuccess(false), 5000);
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-32 bg-secondary text-primary relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Details */}
          <div className="lg:w-1/2">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent-gold uppercase tracking-widest text-sm font-semibold mb-4"
            >
              Get In Touch
            </motion.h3>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-serif font-bold mb-8"
            >
              Let's Create <br /> Something Beautiful.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-8 mt-12"
            >
              <div className="flex items-start gap-4">
                <MapPin className="text-accent-gold w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-xl font-bold mb-2">Studio Location</h4>
                  <p className="text-primary/70 font-light">Khasra no. 998, Saidata Rd<br/>Near Saraswati Shishu Mandir School<br/>Arjunganj, Lucknow, UP 226002</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-accent-gold w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-xl font-bold mb-2">Contact Number</h4>
                  <p className="text-primary/70 font-light">+91 70075 55810<br/>+91 70076 09205</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-accent-gold w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-xl font-bold mb-2">Email Address</h4>
                  <p className="text-primary/70 font-light">consult@mahiinterior.in</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 mt-12"
            >
              <a href="https://www.instagram.com/mahi__interior/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16.11 7.66v-.01"/><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>
              </a>
              <a href="https://wa.me/917007555810" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-colors duration-300">
                <MessageCircle className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="bg-white p-10 md:p-14 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-2 h-full bg-accent-gold"></div>
              <h3 className="text-2xl font-serif font-bold mb-8">Book a Consultation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm uppercase tracking-widest text-primary/60 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                    className="w-full bg-secondary border-none px-6 py-4 outline-none focus:ring-1 focus:ring-accent-gold transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-widest text-primary/60 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    value={formData.phone} 
                    onChange={e => setFormData({...formData, phone: e.target.value})} 
                    className="w-full bg-secondary border-none px-6 py-4 outline-none focus:ring-1 focus:ring-accent-gold transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-widest text-primary/60 mb-2">Project Type</label>
                  <select 
                    value={formData.projectType} 
                    onChange={e => setFormData({...formData, projectType: e.target.value})} 
                    className="w-full bg-secondary border-none px-6 py-4 outline-none focus:ring-1 focus:ring-accent-gold transition-all appearance-none cursor-pointer"
                  >
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Turnkey</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-widest text-primary/60 mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    required 
                    value={formData.message} 
                    onChange={e => setFormData({...formData, message: e.target.value})} 
                    className="w-full bg-secondary border-none px-6 py-4 outline-none focus:ring-1 focus:ring-accent-gold transition-all"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-5 uppercase tracking-widest text-sm font-semibold hover:bg-accent-gold transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
                
                {success && (
                  <p className="text-green-600 text-sm mt-4 text-center">Your inquiry has been successfully submitted! We will contact you soon.</p>
                )}
              </form>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
