

/**
 * Static content for the landing page Hero component.
 * Configures the main banner text and quantitative performance metrics.
 */



/**
 * Detailed textual content for the Software solutions page.
 * Defines section intros, standard guidelines, and service types.
 */
export const softwarePageContent = {
  intro: {
    title: "Complete Software Solutions",
    subtitle: "Built to Empower Your Business",
    description:
      "At Dream Life Products, we provide comprehensive software solutions tailored to modern business needs. From web and mobile applications to enterprise systems and digital platforms, our solutions are designed to improve efficiency, enhance user experiences, and support long-term growth."
  },
  types: {
    title: "OUR SOFTWARE DEVELOPMENT EXPERTISE",
    description:
      "We offer a wide range of development services, including web application development, mobile app solutions, enterprise software systems, and custom digital tools. Our focus is on creating scalable, reliable, and user-friendly solutions that help businesses streamline operations and achieve their goals."
  }
};
/**
 * Detailed textual content for the Hardware solutions page.
 * Defines section intros and types of physical infrastructure services.
 */
export const hardwarePageContent = {
  hero: {
    badge: "Premium Hardware Integration",
    title: "High-Performance Hardware Solutions",
    titleAccent: "For Your Needs",
    description: "At Dream Life Products, we deliver high-performance hardware solutions tailored to meet your specific needs. Our advanced components and systems are designed to enhance efficiency and reliability, ensuring optimal results for your business."
  },
  intro: {
    title: "Advanced Hardware Solutions",
    subtitle: "For Optimal Performance",
    description: "At Dream Life Products, we offer advanced hardware solutions designed to deliver optimal performance and reliability. Our range includes cutting-edge components and systems tailored to meet diverse needs, from high-performance computing to robust security setups."
  },
  types: {
    title: "WHAT ARE THE TYPES OF HARDWARE SOLUTIONS?",
    description: "Hardware solutions come in various types, each designed to address specific needs and enhance functionality. These include components for computing power, security systems to protect and monitor your infrastructure, and peripherals like printers and storage devices."
  }
};

/**
 * Narrative copy for the secondary Services page.
 * Contains introductory and hero content for the auxiliary digital services.
 */
export const servicesPageContent = {
  hero: {
    badge: "Strategic Excellence",
    title: "Unlocking Business Potential",
    titleAccent: "Through Smart Innovation",
    description: "At Dream Life Products, we specialize in delivering tailored, innovative solutions designed to elevate your business operations. With a focus on cutting-edge technology and strategic expertise, our dedicated team ensures that your business not only meets its goals but thrives in today's ever-evolving digital landscape."
  },
  intro: {
    title: "OUR SERVICES",
    description: "We are dedicated to transforming your vision into reality with our comprehensive range of services. From cutting-edge technology solutions to creative design and strategic marketing, we provide the expertise and tools necessary to drive your business forward. Explore how our tailored services can elevate your operations and achieve your goals."
  }
};

/**
 * Shared section headline configurations across the domain.
 * Centralizes the titles and badges for consistent semantic structure.
 */
export const sectionHeadlines = {
  software: {
    badge: "Digital Ecosystems",
    title: "Software Solutions"
  },
  hardware: {
    badge: "Infrastructure",
    title: "Hardware Solutions"
  },
  services: {
    badge: "Elite Capabilities",
    title: "Other Services"
  },
  clients: {
    title: "Our Clients"
  }
};

/**
 * Static navigational and informational text for the universal Footer.
 * Configures branding blurbs, internal links, and copyright notices.
 */
export const footerContent = {
  about: "At Dream Life Products, we are dedicated to providing the best software and hardware solutions. Our commitment to innovation and quality ensures that we deliver products that stand the test of time.",
  links: [
    { name: 'Softwares', href: '/softwares' },
    { name: 'Hardwares', href: '/hardwares' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' }
  ],
  copyright: `© ${new Date().getFullYear()} Dream Life Products. All rights reserved.`
};
