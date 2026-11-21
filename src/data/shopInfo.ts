import type { ShopInfo } from '../types';

export const SHOP_INFO: ShopInfo = {
  name: 'NEXUS Computers & Tech Labs',
  legalName: 'Nexus Tech Systems Ltd (Kenya)',
  tagline: 'Premium New & Certified Refurbished Laptops • Hardware Diagnostics • Precision Servicing',
  phone: '+254 712 940 000',
  phoneRaw: '+254712940000',
  whatsapp: '+254 712 940 000',
  whatsappNumber: '254712940000', // international format for wa.me/
  email: 'service@nexustechlabs.co.ke',
  address: {
    street: 'Kimathi Street, Norwich Union House, 3rd Floor',
    suite: 'Suite 304 (Opposite Hilton)',
    city: 'Nairobi',
    state: 'Nairobi CBD',
    zip: '00100',
    landmarks: 'Near Kencom Bus Station & Hilton Square, Secure Customer Parking Available',
  },
  hours: {
    weekdays: 'Monday – Friday: 8:30 AM – 7:30 PM',
    saturday: 'Saturday: 9:00 AM – 6:00 PM',
    sunday: 'Sunday: 10:00 AM – 4:00 PM (Emergency Drop-off & Consultations)',
  },
};

/**
 * Helper to format amounts consistently into Kenyan Shillings (KSh)
 */
export function formatKSh(amount: number): string {
  return `KSh ${amount.toLocaleString()}`;
}

/**
 * Builds a direct WhatsApp chat URL with pre-filled message for product inquiries.
 */
export function buildProductWhatsAppUrl(
  productTitle: string,
  price: number,
  condition: string,
  productId: string
): string {
  const message = `Hello Nexus Computers Kenya! 👋\n\nI am interested in this laptop from your showroom catalogue:\n• *Item:* ${productTitle}\n• *Condition:* ${condition}\n• *Price:* ${formatKSh(price)}\n• *Product Ref:* #${productId}\n\nCould you please let me know if it is currently in stock at your Nairobi showroom for immediate collection or courier delivery? Asante!`;
  return `https://wa.me/${SHOP_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a direct WhatsApp chat URL with pre-filled details for repair bookings.
 */
export function buildRepairWhatsAppUrl(
  deviceType: string,
  brand: string,
  issueDescription: string,
  urgency: string = 'Standard'
): string {
  const message = `Hello Nexus Repair Labs Nairobi! 🔧\n\nI would like to book a diagnostic / repair appointment:\n• *Device:* ${deviceType} (${brand})\n• *Issue:* ${issueDescription}\n• *Urgency:* ${urgency}\n\nPlease let me know your earliest available diagnostic slot and estimated turnaround. Asante!`;
  return `https://wa.me/${SHOP_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a direct WhatsApp chat URL for general consultations.
 */
export function buildGeneralWhatsAppUrl(subject?: string): string {
  const message = subject
    ? `Hello Nexus Computers Kenya! I have a question regarding: *${subject}*. Could someone assist me?`
    : `Hello Nexus Computers & Tech Labs Kenya! 👋 I am browsing your showroom website and would like to speak to a technician or sales specialist.`;
  return `https://wa.me/${SHOP_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
