import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="min-[100svh] bg-poch-black text-white relative overflow-hidden flex flex-col items-center justify-start pt-[15svh] md:pt-[18vh] pb-[clamp(12rem,25vh,18rem)]">
      <img src={import.meta.env.BASE_URL + "bg-image.png"} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" />
      <div className="z-20 text-center max-w-5xl mx-auto px-4 w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.1] tracking-tight"
        >
          <span className="font-season-sans font-semibold">We are FLIP, building AI</span><br/>
          <span className="font-season-mix font-normal text-white/95">
            for businesses that hate
          </span><br/>
          <span className="font-season-mix font-normal text-white/95">busywork.</span>
        </motion.h1>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[clamp(8rem,15vw,16rem)] bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-[clamp(12rem,25vw,20rem)] bg-gradient-to-t from-black to-transparent pointer-events-none z-10 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]" />
    </section>
  );
}
