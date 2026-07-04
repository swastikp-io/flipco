import React from 'react';
import { motion } from 'motion/react';

type ServiceItem = string | { heading: string; items: string[] };

interface Service {
  title: string;
  description: string;
  items: ServiceItem[];
  image: string;
}

const services: Service[] = [
  {
    title: "Communication & Customer Engagement",
    description: "AI-powered customer conversations that work 24/7 across chat, voice, and messaging platforms.",
    items: [
      "WhatsApp Business Agents",
      "AI Chatbots for Websites",
      "Voice-Based Order Taking",
      "Review & Reputation Management"
    ],
    image: "service-1.jpg"
  },
  {
    title: "Sales & Lead Management",
    description: "Automate lead capture, qualification, and sales workflows to increase conversions.",
    items: [
      "CRM & Lead Scoring for Real Estate",
      "Local SEO Content Bots",
      "Vendor & Supplier Matching"
    ],
    image: "service-2.jpg"
  },
  {
    title: "Content & Marketing",
    description: "Generate high-quality content and creative assets with AI-driven automation.",
    items: [
      "Social Content Automation",
      "AI Interior Design Mood Boards",
      "Hyperlocal Community Content Channels",
      "Real Estate Virtual Staging"
    ],
    image: "service-3.jpg"
  },
  {
    title: "Operations & Backend Automation",
    description: "Reduce manual work by automating repetitive business operations.",
    items: [
      "Invoice & Bill Data Extraction",
      "Inventory & Reorder Automation",
      "Logistics & Dispatch Optimization",
      "HR & Resume Screening Automation"
    ],
    image: "service-4.jpg"
  },
  {
    title: "Document & Compliance",
    description: "Create, organize, and automate critical business documentation securely.",
    items: [
      "Export Documentation Assistants",
      "Legal & Compliance Document Drafting",
      "Verifiable Credential Systems"
    ],
    image: "service-5.jpg"
  },
  {
    title: "Industry-Specific Solutions",
    description: "Custom AI systems built for different industries and specialized workflows.",
    items: [
      {
        heading: "Healthcare",
        items: ["Diagnostic Report & Follow-up Bots"]
      },
      {
        heading: "Education",
        items: [
          "Coaching Institute Automation",
          "School & College Admission Counseling Bots"
        ]
      },
      {
        heading: "Hospitality & Retail",
        items: [
          "Restaurant Menu & Ordering Bundles",
          "Wedding & Event Vendor Coordination"
        ]
      }
    ],
    image: "service-6.jpg"
  }
];

export default function Services() {
  return (
    <section id="services" className="px-4 md:px-8 max-w-[1400px] mx-auto py-32 bg-black text-white">
      <div className="flex flex-col items-center text-center mb-20 space-y-6">
        <span className="font-inter text-sm md:text-base font-semibold tracking-[0.2em] text-white/50 uppercase">
          Services
        </span>
        <h2 className="font-season-sans text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.1] tracking-tight">
          Everything you need<br />to automate and scale your business.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col bg-[#0B0B0B] rounded-[24px] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 p-8 cursor-pointer group"
          >
            {/* Image Placeholder */}
            <div className="w-full aspect-video bg-white/5 rounded-2xl mb-8 flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors overflow-hidden">
              <img src={import.meta.env.BASE_URL + service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>

            <h3 className="font-season-sans text-2xl md:text-3xl mb-4 text-white">
              {service.title}
            </h3>
            
            <p className="font-inter text-white/75 font-medium leading-relaxed mb-8">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
