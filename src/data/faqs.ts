export interface FAQItem {
  id: string;
  category: 'refurbished' | 'warranty' | 'repairs' | 'upgrades' | 'visiting';
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-01',
    category: 'refurbished',
    question: 'What does "Certified Refurbished (Grade A+)" mean at Nexus?',
    answer: 'At Nexus, "Grade A+ Certified Refurbished" means the device has undergone our comprehensive 30-point hardware benchmark test, internal ultrasonic cleaning, and fresh thermal compound repasting. Visually, Grade A+ machines are indistinguishable from new units or have microscopic cosmetic signs under 1mm that are invisible at arm\'s length. All batteries are tested and guaranteed to maintain at least 90% of original OEM charge capacity, and each laptop comes loaded with a clean, licensed operating system.'
  },
  {
    id: 'faq-02',
    category: 'warranty',
    question: 'What is covered under the 12-Month Nexus Hardware Warranty?',
    answer: 'Our 12-month hardware guarantee covers all internal hardware components, including the motherboard, processor, memory, display panel, keyboard, and power delivery circuitry. If any component develops a manufacturer hardware defect under normal usage, we repair or replace it free of charge with zero diagnostic or labor fees. Accidental drops or liquid spills can also be serviced under discounted member rates.'
  },
  {
    id: 'faq-03',
    category: 'upgrades',
    question: 'Will I lose my files, apps, or Windows activation during an SSD upgrade?',
    answer: 'No! When we upgrade your laptop from a slow hard drive or smaller SSD to a high-speed Samsung PCIe Gen4 NVMe drive, our technicians perform a sector-by-sector, bit-exact disk clone. All your applications, documents, desktop layout, browser passwords, and Windows or macOS activation licenses remain 100% intact. You simply turn on the computer and continue exactly where you left off—just up to 10x faster.'
  },
  {
    id: 'faq-04',
    category: 'repairs',
    question: 'What should I do immediately if I accidentally spill water, coffee, or wine on my laptop?',
    answer: '1) Do NOT attempt to turn it on or plug in the charger. 2) If the laptop is on, immediately force power it off by holding the power button for 10 seconds. 3) Disconnect all cables and USB peripherals. 4) Place the laptop upside down in a "tent" shape on a towel to let excess liquid drain away from the motherboard. 5) Avoid putting the laptop in uncooked rice—rice starch gums up cooling fans and does nothing to stop copper corrosion. Bring the machine to our Nairobi CBD lab immediately for ultrasonic chemical neutralization.'
  },
  {
    id: 'faq-05',
    category: 'visiting',
    question: 'Can I visit the physical showroom in Nairobi to test laptops before buying?',
    answer: 'Absolutely! Our showroom at Norwich Union House on Kimathi Street is open Monday through Saturday (and Sunday for emergency pickups). Every laptop on our website is powered on and ready for hands-on evaluation. You can test keyboard tactile feel, screen color accuracy, run synthetic benchmarks, and compare models side-by-side. If you are traveling from outside Nairobi, you can message us on WhatsApp to hold any specific unit for 24 hours prior to your visit.'
  },
  {
    id: 'faq-06',
    category: 'repairs',
    question: 'How does your Free Diagnostic with Approved Repair policy work?',
    answer: 'When you bring your computer into our repair lab, our technicians examine the machine and provide a comprehensive diagnostic breakdown and itemized quote. If you approve the repair, the diagnostic assessment is 100% free! If you decide not to proceed with the repair, we only charge a modest KSh 1,500 bench diagnostic fee for our technician\'s time and equipment testing.'
  },
  {
    id: 'faq-07',
    category: 'refurbished',
    question: 'Can I trade in or sell my old computer toward a new or refurbished laptop?',
    answer: 'Yes! We offer an instant trade-in program for working, degraded, and even damaged laptops. Use our online Trade-In Calculator below or bring your laptop into our showroom for a 15-minute appraisal. You can apply the appraisal value directly as immediate store credit toward any showroom laptop or receive an instant M-Pesa / cash buyout.'
  }
];
