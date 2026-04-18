import React from 'react';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { SoftwareSolutions } from '../sections/SoftwareSolutions';
import { HardwareSolutions } from '../sections/HardwareSolutions';
import { Services } from '../sections/Services';
import { OurClients } from '../sections/OurClients';

/**
 * Assembles the primary landing page interface.
 * Sequentially renders individual marketing sections to form the core user experience.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <SoftwareSolutions />
      <HardwareSolutions />
      <Services />
      <OurClients />
    </>
  );
}
