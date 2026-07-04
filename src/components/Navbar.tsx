import React from 'react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed bottom-8 w-full flex justify-center items-center gap-1.5 z-50 pointer-events-none px-4"
    >
      <div className="pointer-events-auto bg-white/10 backdrop-blur-md border border-white/5 rounded-[2rem] px-5 py-2.5 flex items-center justify-center shadow-lg">
        <span className="font-season-sans text-white text-2xl leading-none tracking-[0.15em]">FlipCo</span>
      </div>

      <div className="pointer-events-auto bg-white/10 backdrop-blur-md border border-white/5 rounded-[2rem] px-6 py-3 flex items-center gap-5 md:gap-6 shadow-lg">
        <a href="#services" className="text-white text-[13px] font-inter font-medium hover:text-flip-blue transition-colors">Services</a>
        <a href="#pricing" className="text-white text-[13px] font-inter font-medium hover:text-flip-blue transition-colors">Pricing</a>
      </div>

      <a href="#contact" className="pointer-events-auto bg-white text-black rounded-[2rem] px-6 py-3 font-inter font-bold text-[13px] hover:scale-105 transition-transform shadow-lg">
        Get Started
      </a>
    </motion.nav>
  );
}
