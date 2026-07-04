import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

type Project = {
  id: string;
  tags: string[];
  title: React.ReactNode;
  text1: string;
  text2: string;
  images: string[];
};

const projects: Project[] = [
  {
    id: "01",
    tags: ["AI Voice Agent", "Operations", "Integration"],
    title: (
      <>
        <span className="font-bold">Aura Health:</span> automated voice-based patient triage and appointment scheduling system
      </>
    ),
    text1: "Aura Health is a network of modern clinics aiming to reduce front-desk bottlenecks and improve patient experience. The project involved deploying a sophisticated AI voice agent capable of handling inbound calls, triaging symptoms, and booking appointments.",
    text2: "We built a natural-sounding conversational voice agent integrated directly with their EHR system, reducing missed calls to zero and saving the administrative team over 40 hours per week in manual scheduling tasks.",
    images: [
      "bg-gradient-to-br from-indigo-500 to-purple-600",
      "bg-gradient-to-tr from-slate-800 to-slate-700",
      "bg-gradient-to-bl from-blue-600 to-cyan-500",
      "bg-gradient-to-r from-emerald-500 to-teal-600",
      "bg-gradient-to-tl from-zinc-800 to-zinc-900"
    ]
  },
  {
    id: "02",
    tags: ["WhatsApp Chatbot", "Sales Automation", "CRM"],
    title: (
      <>
        <span className="font-bold">Luxe Motors:</span> an intelligent WhatsApp concierge for lead qualification and inventory matching
      </>
    ),
    text1: "Luxe Motors is a premium automotive dealership that receives hundreds of inquiries daily on WhatsApp. They needed a way to instantly engage prospects, understand their preferences, and route qualified leads to the right sales executive.",
    text2: "We developed a conversational AI agent for WhatsApp that instantly responds to inquiries, showcases available inventory based on user preferences, and seamlessly hands off high-intent buyers to the sales team, resulting in a 35% increase in conversion rate.",
    images: [
      "bg-gradient-to-r from-slate-900 to-slate-800",
      "bg-gradient-to-bl from-amber-500 to-orange-600",
      "bg-gradient-to-tr from-stone-800 to-stone-700",
      "bg-gradient-to-br from-red-600 to-rose-700",
      "bg-gradient-to-t from-gray-900 to-gray-800"
    ]
  },
  {
    id: "03",
    tags: ["Internal AI", "Knowledge Base", "HR Automation"],
    title: (
      <>
        <span className="font-bold">FinTech Global:</span> secure internal AI assistant for instant employee onboarding and policy retrieval
      </>
    ),
    text1: "FinTech Global, a rapidly growing financial institution, struggled with a fragmented internal knowledge base. Employees spent hours searching for HR policies, compliance guidelines, and technical documentation.",
    text2: "We implemented a secure, locally-hosted LLM trained on their internal documents. The AI assistant allows employees to ask questions in natural language and receive accurate, cited answers instantly, drastically cutting down onboarding time.",
    images: [
      "bg-gradient-to-br from-blue-900 to-slate-800",
      "bg-gradient-to-tl from-sky-500 to-indigo-500",
      "bg-gradient-to-r from-slate-800 to-slate-900",
      "bg-gradient-to-b from-cyan-600 to-blue-700",
      "bg-gradient-to-tr from-zinc-800 to-zinc-700"
    ]
  }
];

export default function Work() {
  return (
    <section id="work" className="px-4 md:px-8 max-w-[1400px] mx-auto py-[clamp(4rem,10vw,8rem)] bg-black text-white">
      
      <div className="flex flex-col items-center text-center mb-[clamp(4rem,8vw,6rem)] space-y-6">
        <span className="font-inter text-[clamp(0.75rem,2vw,1rem)] font-semibold tracking-[0.2em] text-white/50 uppercase">
          Projects
        </span>
      </div>

      <div className="space-y-[clamp(4rem,10vw,8rem)]">
        {projects.map((project, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            key={project.id} 
            className="flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-white/10 pt-6 mb-[clamp(2rem,5vw,3rem)]">
              <div className="flex flex-wrap items-center gap-2">
                {project.tags.map((tag, i) => (
                  <div key={i} className="px-4 py-1.5 rounded-full bg-white/10 text-white text-[clamp(0.75rem,1.5vw,0.875rem)] font-inter font-medium">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(2rem,6vw,3rem)] lg:gap-8 mb-16">
              <div className="lg:col-span-6">
                <h3 className="font-inter text-[clamp(1.875rem,4vw,2.5rem)] leading-tight tracking-tight text-white/90">
                  {project.title}
                </h3>
              </div>
              <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-[clamp(1.5rem,4vw,2rem)] text-white/80 font-inter text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed">
                <div>
                  <p>{project.text1}</p>
                </div>
                <div>
                  <p>{project.text2}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
