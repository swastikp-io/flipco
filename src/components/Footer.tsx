import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-4 md:px-8 py-[clamp(2rem,5vw,3rem)] border-t border-poch-white/10 mt-[clamp(2rem,6vw,4rem)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-[clamp(1.5rem,4vw,2rem)] relative z-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-[clamp(1rem,3vw,1.5rem)]">
          <span className="font-inter text-[clamp(0.75rem,2vw,1rem)] font-semibold tracking-[0.2em] text-white/50 uppercase">connect with us:</span>
          <div className="flex flex-wrap justify-center items-center gap-[clamp(1rem,4vw,1.5rem)] font-inter font-medium text-[clamp(1rem,2vw,1.125rem)]">
            <a href="#" className="flex items-center hover:opacity-70 transition-opacity">WhatsApp <ArrowUpRight className="w-5 h-5" /></a>
            <a href="#" className="flex items-center hover:opacity-70 transition-opacity">Instagram <ArrowUpRight className="w-5 h-5" /></a>
            <a href="#" className="flex items-center hover:opacity-70 transition-opacity">LinkedIn <ArrowUpRight className="w-5 h-5" /></a>
          </div>
        </div>
        <div className="font-inter text-poch-white/60 text-[clamp(0.875rem,2vw,1rem)]">
          FLIP Co © 2026
        </div>
      </div>
      <div className="w-full text-center mt-[clamp(3rem,8vw,6rem)] overflow-hidden">
        <h1 className="font-season-mix text-[clamp(6rem,23vw,250px)] leading-none text-flip-blue select-none">The FLIP Co.</h1>
      </div>
    </footer>
  );
}
