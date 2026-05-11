"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-secondary pt-24 pb-10 border-t border-white/10 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 inline-flex">
              <img 
                src="/logo.jpg" 
                alt="Mahi Interior Logo" 
                className="h-12 w-12 rounded-full object-cover border border-accent-gold/50 shadow-[0_0_15px_rgba(197,160,89,0.3)]"
              />
              <span className="text-3xl font-serif font-bold tracking-wider text-glow text-white">
                MAHI<span className="text-accent-gold">.</span>
              </span>
            </Link>
            <p className="text-white/60 font-light max-w-sm leading-relaxed mb-8">
              Transforming spaces into timeless masterpieces. Experience the pinnacle of luxury interior design with our turnkey solutions.
            </p>
            <div className="flex gap-4">
              {['Ig', 'Fb', 'In', 'Pt'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sm hover:bg-accent-gold hover:border-accent-gold transition-colors duration-300">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-6 text-xl">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Studio', 'Portfolio', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().split(' ')[0]}`} className="text-white/60 hover:text-accent-gold transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-6 text-xl">Services</h4>
            <ul className="space-y-4">
              {['Turnkey Projects', 'Residential Design', 'Commercial Space', 'Modular Kitchens'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-white/60 hover:text-accent-gold transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm font-light mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Mahi Interior. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/60 hover:text-accent-gold transition-colors uppercase tracking-widest text-xs"
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
