import React, { useState } from 'react';
import { ServiceSelect } from './ServiceSelect';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    email: '',
    message: ''
  });

  const businessNumber = "918081662353"; // Replace with actual number
  const businessEmail = "work.flipco@gmail.com";

  const serviceNames: Record<string, string> = {
    communication: "Communication & Customer Engagement",
    sales: "Sales & Lead Management",
    content: "Content & Marketing",
    operations: "Operations & Backend Automation",
    document: "Document & Compliance",
    industry: "Industry-Specific Solutions",
    other: "Other / Not sure"
  };

  const displayService = serviceNames[formData.service] || 'something else';

  const textMessage = `Hi Shaurya from FlipCo,
I’m ${formData.name}, and I’m interested in your ${displayService} services.

${formData.message}

I’d love to discuss this further. Looking forward to your response.${formData.email ? `\n\n(My email: ${formData.email})` : ''}`;

  const encodedMessage = encodeURIComponent(textMessage);
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(businessEmail)}&su=${encodeURIComponent("New Website Inquiry")}&body=${encodedMessage}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.service || !formData.message) {
      alert("Please fill in all required fields (Name, Service, Message).");
      return;
    }

    const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="px-4 md:px-8 max-w-7xl mx-auto py-32 border-t border-poch-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="font-season-mix text-5xl md:text-7xl leading-[1.1] mb-8">
            So, let's make some gooooood stuff together.<br/><span className="italic">Because why not?</span>
          </h2>
        </div>

        <div className="bg-poch-black border border-poch-white/20 p-8 md:p-12 rounded-[2rem] shadow-sm">
          <p className="font-inter text-lg mb-8">Fill out the form below and we'll get back to you soon!</p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input type="text" required placeholder="Name *" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-poch-black border border-poch-white/20 rounded-xl px-6 py-4 font-inter text-lg focus:outline-none focus:border-poch-white/50 transition-colors placeholder:text-poch-white/40" />
            </div>
            <div>
              <ServiceSelect value={formData.service} onValueChange={(val) => setFormData({...formData, service: val})} />
            </div>
            <div>
              <input type="email" placeholder="Email (optional)" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-poch-black border border-poch-white/20 rounded-xl px-6 py-4 font-inter text-lg focus:outline-none focus:border-poch-white/50 transition-colors placeholder:text-poch-white/40" />
            </div>
            <div>
              <textarea required placeholder="Message *" rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-poch-black border border-poch-white/20 rounded-xl px-6 py-4 font-inter text-lg focus:outline-none focus:border-poch-white/50 transition-colors placeholder:text-poch-white/40 resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-flip-blue text-poch-black px-8 py-4 rounded-xl font-inter font-bold text-lg hover:scale-[1.02] transition-transform mt-4 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
              Submit via WhatsApp
            </button>
            
            <div className="text-center mt-4">
              <a href={gmailUrl} target="_blank" rel="noopener noreferrer" className="font-inter text-poch-white/50 hover:text-white underline text-sm transition-colors">
                Don't have WhatsApp? Send us an Email instead.
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
