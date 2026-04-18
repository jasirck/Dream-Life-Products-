/**
 * Configuration for WhatsApp integration.
 * Stores business contact number and dynamic message template for inquiries.
 */
export const whatsappConfig = {
  number: "919496455746",
  generateMessage: (productName, pageUrl) => `Hello, I am interested in ${productName}. I found it here: ${pageUrl}`
};

/**
 * Global site properties and contact information.
 * Controls centralized business specifics used in layout components like the Footer.
 */
export const globalSettings = {
  siteName: "DREAM LIFE PRODUCTS",
  contactEmail: "info@dreamlifeproducts.com",
  contactLocation: "Pala, Kottayam, Kerala",
};
