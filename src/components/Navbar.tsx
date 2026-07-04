import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed bottom-6 md:bottom-8 w-full flex justify-between md:justify-center items-center md:gap-1.5 z-[60] pointer-events-none px-4 md:px-0"
      >
        <div className="pointer-events-auto bg-white/10 backdrop-blur-md border border-white/5 rounded-[2rem] px-5 py-2.5 flex items-center justify-center shadow-lg">
          <span className="font-season-sans text-white text-xl md:text-2xl leading-none tracking-[0.15em]">FlipCo</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex pointer-events-auto bg-white/10 backdrop-blur-md border border-white/5 rounded-[2rem] px-6 py-3 items-center gap-5 md:gap-6 shadow-lg">
          <a href="#services" className="text-white text-[13px] font-inter font-medium hover:text-flip-blue transition-colors">Services</a>
          <a href="#pricing" className="text-white text-[13px] font-inter font-medium hover:text-flip-blue transition-colors">Pricing</a>
        </div>

        {/* Desktop Button */}
        <a href="#contact" className="hidden md:inline-block pointer-events-auto bg-white text-black rounded-[2rem] px-6 py-3 font-inter font-bold text-[13px] hover:scale-105 transition-transform shadow-lg">
          Get Started
        </a>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden pointer-events-auto bg-white/10 backdrop-blur-md border border-white/5 rounded-full w-12 h-12 flex items-center justify-center text-white shadow-lg"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            <a href="#services" onClick={closeMenu} className="text-white text-3xl font-season-sans hover:text-flip-blue transition-colors">
              Services
            </a>
            <a href="#pricing" onClick={closeMenu} className="text-white text-3xl font-season-sans hover:text-flip-blue transition-colors">
              Pricing
            </a>
            <a href="#work" onClick={closeMenu} className="text-white text-3xl font-season-sans hover:text-flip-blue transition-colors">
              Work
            </a>
            <a href="#contact" onClick={closeMenu} className="bg-white text-black rounded-full px-8 py-4 font-inter font-bold text-lg hover:scale-105 transition-transform mt-4">
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
