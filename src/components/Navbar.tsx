"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-accent-gold shadow-lg text-white ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/logo.jpg" 
              alt="Mahi Interior Logo" 
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            />
            <span className="text-xl md:text-2xl font-serif font-bold tracking-wider hidden sm:block">
              MAHI<span className="text-white/70">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-5 py-2 border border-transparent rounded-full text-sm uppercase tracking-widest hover:border-white transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-4">
              <Link
                href="#contact"
                className="px-6 py-2 border border-white text-white hover:bg-white hover:text-accent-gold transition-all duration-300 rounded-full text-sm uppercase tracking-widest font-semibold"
              >
                Consult Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-accent-gold/95 backdrop-blur-xl flex flex-col justify-center items-center text-white"
          >
            <button
              className="absolute top-6 right-6 text-white hover:scale-110 transition-transform"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-3xl font-serif tracking-widest hover:text-white/70 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
