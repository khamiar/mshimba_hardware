const WA_NUMBER = "255773110509";

export const openWhatsApp = (message) => {
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${WA_NUMBER}?text=${encoded}`;

  try {
    const newWin = window.open(url, "_blank", "noopener,noreferrer");

    if (!newWin) {
      // Popup blocked — navigate in same tab as fallback
      window.location.href = url;
    }
  } catch (err) {
    console.error("Failed to open WhatsApp link", err);
    window.location.href = url;
  }
};

// Request a quote for a specific category
export const requestQuote = (category) => {
  const msg = `Hello Mshimba Hardware! 👋

I would like to get a quotation for *${category}*.

Please send me the available options, prices, and any other relevant details.

Thank you!`;

  openWhatsApp(msg);
};

// Ask about a specific product
export const productInquiry = (product) => {
  const msg = `Hello Mshimba Hardware! 👋

I'm interested in *${product}*.

Could you please send me the price, available sizes/types, and availability?

Thank you!`;

  openWhatsApp(msg);
};

// General inquiry
export const generalInquiry = () => {
  const msg = `Hello Mshimba Hardware! 👋

I'm looking for building and hardware materials and would like to know more about your available products and prices.

Can you please assist me?
Thank you!`;

  openWhatsApp(msg);
};

// Custom WhatsApp message
export const customInquiry = (message) => {
  openWhatsApp(`Hello Mshimba Hardware! 👋\n\n${message}`);
};
