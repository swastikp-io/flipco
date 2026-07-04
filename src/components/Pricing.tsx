import React from 'react';
import { motion } from 'motion/react';
import { Flame, Sparkles, Smile, Dices } from 'lucide-react';

type Feature = {
  text: string;
  subtext?: string;
};

type Plan = {
  name: string;
  taglineIcon: React.ReactNode;
  tagline: string;
  price: string;
  features: Feature[];
  extras?: string[];
  cardColor: string;
  textColor: string;
  dotColor: string;
  buttonText: string;
  badge?: string;
};

const plans: Plan[] = [
  {
    name: "Launch",
    taglineIcon: <Flame className="w-5 h-5 text-black/40" strokeWidth={1.5} />,
    tagline: "Perfect for your first AI workflow.",
    price: "₹15,000+",
    features: [
      { text: "Discovery & Strategy Call" },
      { text: "One AI Automation" },
      { text: "WhatsApp Business Agent OR Website Chatbot" },
      { text: "Deployment & Setup" }
    ],
    cardColor: "bg-white",
    textColor: "text-black",
    dotColor: "bg-[#0000FF]",
    buttonText: "Start Now"
  },
  {
    name: "Grow",
    taglineIcon: <Sparkles className="w-5 h-5 text-black/40" strokeWidth={1.5} />,
    tagline: "Automate the work you do every day.",
    price: "₹45,000+",
    features: [
      { text: "Everything in Launch" },
      { text: "Up to 3 AI Workflows" },
      { text: "CRM & Lead Automation" },
      { text: "Social Content Automation" },
      { text: "30 Days Support" }
    ],
    extras: ["Voice AI", "Local SEO Bots", "Review & Reputation Management"],
    cardColor: "bg-white",
    textColor: "text-black",
    dotColor: "bg-[#0000FF]",
    buttonText: "Grow Faster"
  },
  {
    name: "Scale",
    taglineIcon: <Smile className="w-5 h-5 text-black/40" strokeWidth={1.5} />,
    tagline: "Build an AI-powered business.",
    price: "₹1,20,000+",
    features: [
      { text: "Everything in Grow" },
      { text: "Operations Automation" },
      { text: "Invoice & Document Processing" },
      { text: "HR & Resume Automation" },
      { text: "AI Knowledge Base" }
    ],
    extras: ["Inventory Automation", "Logistics & Dispatch Optimization", "Custom Dashboards", "Team Training"],
    cardColor: "bg-white",
    textColor: "text-black",
    dotColor: "bg-[#0000FF]",
    buttonText: "Scale with AI"
  },
  {
    name: "Enterprise",
    badge: "MOST POPULAR",
    taglineIcon: <Dices className="w-5 h-5 text-white/60" strokeWidth={1.5} />,
    tagline: "Custom AI systems for ambitious businesses.",
    price: "Custom",
    features: [
      { text: "Custom AI Strategy" },
      { text: "Industry-Specific AI Solutions" },
      { text: "Multi-Team Automation" },
      { text: "AI Voice Agents" },
      { text: "Internal AI Assistants" },
      { text: "API Integrations" },
      { text: "Dedicated Support" },
      { text: "Ongoing Optimization" }
    ],
    cardColor: "bg-[#0000FF]",
    textColor: "text-white",
    dotColor: "bg-white",
    buttonText: "Book a Call"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-4 md:px-8 max-w-[1400px] mx-auto py-32 bg-black text-white">
      
      <div className="flex flex-col items-center text-center mb-20 space-y-6">
        <span className="font-inter text-sm md:text-base font-semibold tracking-[0.2em] text-white/50 uppercase">
          Pricing
        </span>
        <h2 className="font-season-sans text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.1] tracking-tight">
          AI solutions that grow with your business.
        </h2>
        <p className="font-inter text-lg text-white/70 max-w-2xl leading-relaxed">
          Whether you're starting with a single workflow or transforming your entire business with AI, choose the plan that fits your goals today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {plans.map((plan, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={idx} 
            className="flex flex-col h-full relative"
          >
            
            {/* Top Card */}
            <div className={`rounded-[24px] p-8 flex flex-col ${plan.cardColor} ${plan.textColor} ${idx === 3 ? 'flex-grow' : ''}`}>
              
              {plan.badge && (
                <div className="absolute top-4 right-4 bg-black text-white text-[10px] font-inter font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}

              <h3 className={`font-inter text-2xl font-bold mb-4 tracking-tight ${plan.badge ? 'pr-24' : ''}`}>{plan.name}</h3>
              
              <div className="flex items-center gap-3 mb-6">
                {plan.taglineIcon}
                <span className={`font-inter text-sm ${plan.textColor === 'text-white' ? 'text-white/80' : 'text-black/60'}`}>
                  {plan.tagline}
                </span>
              </div>

              <div className={`w-full h-px mb-8 ${plan.textColor === 'text-white' ? 'bg-white/20' : 'bg-black/10'}`} />

              <ul className="space-y-5 mb-16">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${plan.dotColor}`} />
                    <div>
                      <div className="font-inter font-semibold text-base">{feature.text}</div>
                      {feature.subtext && (
                        <div className={`font-inter text-xs mt-1.5 leading-relaxed ${plan.textColor === 'text-white' ? 'text-white/70' : 'text-black/50'}`}>
                          {feature.subtext}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4">
                <div className="font-inter text-5xl font-bold tracking-tighter">{plan.price}</div>
              </div>
            </div>

            {/* Extras Card */}
            {plan.extras && (
              <div className="mt-2 rounded-[24px] p-8 border border-white/[0.08] bg-black text-white flex-grow flex flex-col">
                <h4 className="font-inter font-semibold mb-6 text-white text-sm">Individually priced:</h4>
                <ul className="space-y-3 text-white/45 font-inter text-sm">
                  {plan.extras.map((extra, i) => (
                    <li key={i}>+ {extra}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Button */}
            <button className="mt-2 w-full py-4 rounded-full font-inter font-bold transition-transform hover:scale-[1.02] bg-white text-black text-sm">
              {plan.buttonText}
            </button>

            {/* Spacer to fill remaining space */}
            {!plan.extras && idx !== 3 && <div className="flex-grow"></div>}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
