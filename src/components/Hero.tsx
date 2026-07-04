import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-poch-black text-white relative overflow-hidden flex flex-col items-center justify-start pt-[18vh]">
      <img src="/bg-image.png" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" />
      <div className="z-10 text-center max-w-5xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.1] tracking-tight"
        >
          <span className="font-season-sans font-semibold">We are flip, building AI</span><br/>
          <span className="font-season-mix font-normal text-white/95">
            for businesses that hate
          </span><br/>
          <span className="font-season-mix font-normal text-white/95">busywork.</span>
        </motion.h1>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-64 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-48 md:h-80 bg-gradient-to-t from-black to-transparent pointer-events-none z-10 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]" />
    </section>
  );
}
