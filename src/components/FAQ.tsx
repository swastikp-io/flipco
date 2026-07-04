import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How do we get started?",
    answer: "Pick a package — and we’ll send you a quick form to fill out. It helps us build a clear brief. Then we hop on a call to talk through the details and get started."
  },
  {
    question: "I'm not sure what I need. Can we chat first?",
    answer: "Absolutely! Book a free intro call and we can discuss your needs and find the right fit."
  },
  {
    question: "What are your payment terms?",
    answer: "We typically require a 50% deposit upfront to secure your spot in our schedule, and the remaining 50% upon project completion."
  },
  {
    question: "What about revisions?",
    answer: "Each package includes a set number of revisions. We want to ensure you are 100% happy with the final result."
  },
  {
    question: "Can I upgrade my package later?",
    answer: "Yes, you can always upgrade your package or add individual services as needed during the project."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-4 md:px-8 max-w-4xl mx-auto py-32 border-t border-poch-white/10">
      <div className="text-center mb-16">
        <span className="font-inter text-sm md:text-base font-semibold tracking-[0.2em] text-white/50 uppercase">F A Q</span>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-poch-white/10">
            <button 
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full py-6 flex items-center justify-between text-left"
            >
              <span className="font-season-sans text-xl md:text-2xl">{faq.question}</span>
              {open === idx ? <Minus className="shrink-0" /> : <Plus className="shrink-0" />}
            </button>
            <AnimatePresence>
              {open === idx && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 font-inter text-lg text-poch-white/70">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      
      <div className="mt-24 text-center">
        <h3 className="font-season-sans text-3xl mb-4">Still not sure?</h3>
        <p className="font-inter text-poch-white/70 mb-8">Book a free intro call — let's get to know each other.</p>
        <button className="bg-poch-cream text-poch-black px-8 py-4 rounded-full font-inter font-medium text-lg hover:scale-105 transition-transform">
          Book an Intro Call
        </button>
      </div>
    </section>
  );
}
