import React from 'react';

export default function Contact() {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto py-32 border-t border-poch-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="font-season-mix text-5xl md:text-7xl leading-[1.1] mb-8">
            So, let's make some gooooood stuff together.<br/><span className="italic">Because why not?</span>
          </h2>
        </div>

        <div className="bg-poch-black border border-poch-white/20 p-8 md:p-12 rounded-[2rem] shadow-sm">
          <p className="font-inter text-lg mb-8">Fill out the form below and we'll get back to you soon!</p>
          <form className="space-y-6">
            <div>
              <input type="text" placeholder="Name" className="w-full bg-poch-black border border-poch-white/20 rounded-xl px-6 py-4 font-inter text-lg focus:outline-none focus:border-poch-white/50 transition-colors placeholder:text-poch-white/40" />
            </div>
            <div>
              <input type="email" placeholder="Email" className="w-full bg-poch-black border border-poch-white/20 rounded-xl px-6 py-4 font-inter text-lg focus:outline-none focus:border-poch-white/50 transition-colors placeholder:text-poch-white/40" />
            </div>
            <div>
              <select className="w-full bg-poch-black border border-poch-white/20 rounded-xl px-6 py-4 font-inter text-lg focus:outline-none focus:border-poch-white/50 transition-colors appearance-none text-poch-white/70">
                <option value="">Package Select...</option>
                <option value="sprint">Sprint / $999</option>
                <option value="startup">Start-Up / $2000</option>
                <option value="identity">The Identity / $3000</option>
                <option value="bombastic">Bombastic / $6000+</option>
                <option value="other">I need something else</option>
              </select>
            </div>
            <div>
              <input type="text" placeholder="Messenger contact" className="w-full bg-poch-black border border-poch-white/20 rounded-xl px-6 py-4 font-inter text-lg focus:outline-none focus:border-poch-white/50 transition-colors placeholder:text-poch-white/40" />
            </div>
            <button type="button" className="w-full bg-flip-blue text-poch-black px-8 py-4 rounded-xl font-inter font-medium text-lg hover:scale-[1.02] transition-transform mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
