export interface CustomerReview {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  category: 'laptop' | 'repair' | 'upgrade' | 'business';
  headline: string;
  comment: string;
  purchasedItemOrService: string;
  verifiedPurchase: boolean;
}

export const REVIEWS: CustomerReview[] = [
  {
    id: 'rev-01',
    name: 'David Mwangi',
    role: 'Software Engineer (Nairobi)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '2 weeks ago',
    category: 'laptop',
    headline: 'Saved over KSh 77,000 on a ThinkPad X1 Carbon that looks practically brand new',
    comment: 'I was hesitant about buying refurbished electronics in Nairobi, but Nexus completely changed my perspective. The ThinkPad X1 Carbon Gen 10 arrived in pristine cosmetic condition, battery health was verified at 96%, and the thermal repasting keeps it running ice-cold even under heavy Docker and compiling workloads. The 12-month local warranty gave me complete peace of mind.',
    purchasedItemOrService: 'Lenovo ThinkPad X1 Carbon Gen 10 (Refurbished Grade A+)',
    verifiedPurchase: true
  },
  {
    id: 'rev-02',
    name: 'Elena Wanjiku',
    role: 'Architect & 3D Visualizer',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '1 month ago',
    category: 'repair',
    headline: 'Saved my MacBook Pro M2 after an entire cup of black coffee spilled on it',
    comment: 'The official authorized dealer quoted me over KSh 120,000 for a logic board replacement. I brought it straight to the Nexus lab on Kimathi Street within 2 hours. Their technicians performed an ultrasonic chemical de-oxidation bath, reconstructed two corroded solder pads under the microscope, and got it fully functional the next day without losing a single project file. Pure miracle workers.',
    purchasedItemOrService: 'Liquid Spill Recovery & Ultrasonic Logic Board Clean',
    verifiedPurchase: true
  },
  {
    id: 'rev-03',
    name: 'Marcus Ochieng',
    role: 'Digital Agency Director (Westlands)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '3 weeks ago',
    category: 'business',
    headline: 'Outfitted our entire remote creative team with 5 Dell XPS and MacBook Pros',
    comment: 'We purchased a fleet of refurbished Dell XPS 15s and MacBook Airs for our expanding agency in Westlands. Every single machine came pre-tested with benchmark certificates, original chargers, and clean OS installs. The bulk showroom pricing saved our company over KSh 350,000 compared to brand new retail.',
    purchasedItemOrService: 'Fleet Purchase: 5x Dell XPS 15 & MacBook Air M2',
    verifiedPurchase: true
  },
  {
    id: 'rev-04',
    name: 'Sarah Kamau',
    role: 'Medical Student (Kenyatta National Hospital)',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'Just recently',
    category: 'upgrade',
    headline: 'SSD clone and 32GB RAM upgrade took under 45 minutes while I waited in the CBD showroom',
    comment: 'My HP laptop took almost 4 minutes to start up and was constantly freezing with 100% disk usage. The technician explained the clone process, swapped in a 1TB Samsung 990 PRO NVMe SSD and 32GB RAM. It literally boots in 6 seconds now and all my medical notes, tabs, and programs stayed 100% untouched. Incredible efficiency!',
    purchasedItemOrService: 'Bit-Exact OS Cloning & Samsung 990 PRO 1TB Upgrade',
    verifiedPurchase: true
  },
  {
    id: 'rev-05',
    name: 'Brian Kiprop',
    role: 'Game Developer & Content Creator',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '1 month ago',
    category: 'laptop',
    headline: 'Flawless ASUS ROG Zephyrus gaming setup with zero thermal throttling',
    comment: 'Walked into their Norwich Union House showroom to test the 240Hz OLED panel in person before committing. The staff was incredibly knowledgeable, didn’t try to oversell me, and helped me verify benchmark scores on the spot. Best tech shopping experience in Nairobi.',
    purchasedItemOrService: 'ASUS ROG Zephyrus G16 (2025 Edition)',
    verifiedPurchase: true
  },
  {
    id: 'rev-06',
    name: 'Rebecca Achieng',
    role: 'Consultant & Financial Auditor',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '2 months ago',
    category: 'repair',
    headline: 'Cracked screen replaced within 24 hours with an original OEM display',
    comment: 'My laptop screen cracked right down the middle when my backpack dropped. Nexus had the exact replacement panel in stock, gave me a clear upfront price with zero surprise fees, and replaced it cleanly with zero light bleed. 10/10 service.',
    purchasedItemOrService: '14" FHD IPS Display Replacement & Hinge Tension Adjustment',
    verifiedPurchase: true
  }
];

export const STORE_STATS = {
  averageRating: 4.9,
  totalReviews: 520,
  recommendedPercent: 99.4,
  repairsCompleted: '10,000+',
  laptopsSold: '3,800+'
};
