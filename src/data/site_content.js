

/**
 * Static content for the landing page Hero component.
 * Configures the main banner text and quantitative performance metrics.
 */


/**
 * Copy and statistics for the general About section.
 * Renders company mission statements and numerical achievements on the home and about pages.
 */
export const aboutContent = {
  badge: "ABOUT DREAM LIFE PRODUCTS",
  titlePrefix: "SMART SYSTEMS BUILT FOR MODERN",
  titleAccent: "BUSINESSES",
  description: "DREAM LIFE PRODUCTS is focused on transforming the way businesses operate through smart technology and reliable system solutions. From billing and inventory to complete business management, we provide solutions that simplify operations, improve efficiency, and give you full control over your business. Our approach combines practical experience with modern technology to deliver systems that are fast, secure, and built for real world use.",
  checkPoints: [
    "Delivering cutting-edge solutions tailored to requirements.",
    "Maintaining industry standards with rigorous quality checks."
  ],
  stats: [
    { id: 1, iconName: 'Award', value: "10+", label: "Years of Experience" },
    { id: 2, iconName: 'Users', value: "30+", label: "Skilled Professionals" },
    { id: 3, iconName: 'TrendingUp', value: "100%", label: "Customer Satisfaction" },
    { id: 4, iconName: 'Globe', value: "1000+", label: "Clients World Wide" }
  ]
};

/**
 * Detailed textual content for the Software solutions page.
 * Defines section intros, standard guidelines, and service types.
 */
export const softwarePageContent = {
  hero: {
    badge: "Advanced Digital Arsenal",
    title: "Pioneering Software Solutions",
    titleAccent: "For Enhanced Performance",
    description: "At Dream Life Products, we pioneer software solutions designed to enhance your performance. Our innovative applications and systems are crafted to boost efficiency, streamline operations, and drive your business forward."
  },
  intro: {
    title: "Innovative Software Solutions",
    subtitle: "For Superior Performance",
    description: "At Dream Life Products, we specialize in crafting innovative software solutions designed to elevate your business’s performance. Our approach blends cutting-edge technology with deep industry insights to deliver tailored software that meets your specific needs."
  },
  types: {
    title: "WHAT ARE THE TYPES OF DEVELOPMENT?",
    description: "Development spans several key areas, each addressing unique needs and contributing to overall success. This includes creating applications to enhance functionality, building and managing websites for optimal user experiences, designing tools for mobile devices to ensure accessibility on the go, and developing complex systems to support organizational processes."
  },
  standards: {
    title: "HOW DREAM LIFE PRODUCTS SOFTWARE SERVICES SET THE STANDARD?",
    description: "Dream Life Products' software development team is highly skilled and proficient, on par with many leading software development companies. We transform complex challenges into seamless, effective solutions that power your success."
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
