import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-4 md:px-8 py-12 border-t border-poch-white/10 mt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <span className="font-inter text-sm md:text-base font-semibold tracking-[0.2em] text-white/50 uppercase">connect with us:</span>
          <div className="flex items-center gap-6 font-inter font-medium text-lg">
            <a href="#" className="flex items-center hover:opacity-70 transition-opacity">WhatsApp <ArrowUpRight className="w-5 h-5" /></a>
            <a href="#" className="flex items-center hover:opacity-70 transition-opacity">Instagram <ArrowUpRight className="w-5 h-5" /></a>
            <a href="#" className="flex items-center hover:opacity-70 transition-opacity">LinkedIn <ArrowUpRight className="w-5 h-5" /></a>
          </div>
        </div>
        <div className="font-inter text-poch-white/60">
          Flip Studio © 2026
        </div>
      </div>
      <div className="w-full text-center mt-24">
        <h1 className="font-season-mix text-[15vw] leading-none text-poch-cream">flip</h1>
      </div>
    </footer>
  );
}
