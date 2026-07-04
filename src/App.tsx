/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-poch-black min-h-screen text-poch-white font-inter antialiased selection:bg-flip-blue selection:text-poch-black">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
