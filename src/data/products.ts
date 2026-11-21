import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'lap-001',
    title: 'Lenovo ThinkPad X1 Carbon Gen 10 (Grade A+)',
    brand: 'Lenovo',
    category: 'refurbished-laptops',
    condition: 'refurbished-grade-a-plus',
    conditionLabel: 'Certified Refurbished (Grade A+)',
    price: 78000,
    originalPrice: 155000,
    rating: 4.9,
    reviewCount: 42,
    inStock: true,
    stockCount: 4,
    featured: true,
    isHotDeal: true,
    warranty: '12 Months Comprehensive Nexus Hardware Warranty',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'The executive gold standard for mobile productivity. Factory-certified refurbished, thermal repasted with Noctua compound, original battery at 96% health capacity, and zero cosmetic blemishes.',
    specs: {
      processor: 'Intel Core i7-1260P (12 Cores, up to 4.7GHz)',
      ram: '32GB LPDDR5 5200MHz',
      storage: '1TB PCIe Gen4 NVMe SSD (Brand New Micron Drive)',
      display: '14" 2.8K (2880 x 1800) OLED, 400 nits, 100% DCI-P3, Anti-Reflective',
      graphics: 'Intel Iris Xe Graphics',
      batteryHealth: '96% Original Capacity (Tested ~9.5 hrs battery runtime)',
      os: 'Windows 11 Pro 64-bit (Clean Licensed Install, Zero Bloatware)',
      weight: '1.12 kg (2.48 lbs)',
      ports: ['2x Thunderbolt 4 / USB-C', '2x USB-A 3.2 Gen 1', 'HDMI 2.0b', '3.5mm Audio Jack']
    },
    keyFeatures: [
      'Legendary spill-resistant ThinkPad backlit keyboard with TrackPoint',
      'FHD 1080p webcam with physical privacy shutter and Windows Hello IR face login',
      'Military-grade MIL-STD 810H durability tested magnesium alloy chassis',
      'Includes original 65W USB-C GaN rapid fast charger'
    ],
    refurbInspectionPoints: [
      'Thermal stress test: Max 72°C under sustained synthetic Cinebench load',
      'Display: Zero dead pixels, backlight bleed strictly under 2%',
      'Battery health verified at 96% with under 45 battery cycles',
      'Fresh thermal compound re-application using premium non-conductive paste',
      'Full ultrasound port cleaning and UV sanitization pass'
    ]
  },
  {
    id: 'lap-002',
    title: 'Apple MacBook Pro 14" M2 Pro (Grade A+)',
    brand: 'Apple',
    category: 'refurbished-laptops',
    condition: 'refurbished-grade-a-plus',
    conditionLabel: 'Certified Refurbished (Grade A+)',
    price: 185000,
    originalPrice: 265000,
    rating: 5.0,
    reviewCount: 58,
    inStock: true,
    stockCount: 3,
    featured: true,
    isHotDeal: true,
    warranty: '12 Months Nexus Care Hardware Warranty',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Unrivaled power-efficiency and sustained creative muscle. Space Gray finish, pristine glass Liquid Retina XDR screen with ProMotion 120Hz, and tested genuine Apple battery at 98% health capacity.',
    specs: {
      processor: 'Apple M2 Pro (10-Core CPU with 6 performance & 4 efficiency cores)',
      ram: '16GB Unified Memory (200GB/s bandwidth)',
      storage: '512GB Ultra-Fast NVMe SSD (Read up to 5,300 MB/s)',
      display: '14.2" Liquid Retina XDR (3024 x 1964), Mini-LED, 120Hz ProMotion, 1600 nits peak HDR',
      graphics: '16-Core Neural Engine & 16-Core Integrated GPU',
      batteryHealth: '98% Apple OEM Capacity (Tested ~14 hrs battery life)',
      os: 'macOS Sequoia (Factory Reset, iCloud clean, zero activation lock)',
      weight: '1.60 kg (3.5 lbs)',
      ports: ['3x Thunderbolt 4', 'HDMI 2.1 (8K 60Hz / 4K 240Hz)', 'SDXC Card Slot', 'MagSafe 3', 'High-impedance Headphone Jack']
    },
    keyFeatures: [
      'Studio-quality 6-speaker sound system with spatial audio & force-cancelling woofers',
      'MagSafe 3 magnetic breakaway charging with quick 50% top-up in 30 mins',
      'True Tone and P3 wide color gamut for color-critical photo/video editing',
      'Comes packaged with genuine Apple 67W USB-C Power Adapter and braided cable'
    ],
    refurbInspectionPoints: [
      'Apple Diagnostics hardware test: Passed 100% without error codes',
      'Battery cycle count: 28 cycles, 98% original maximum capacity',
      'Keypad and haptic Force Touch trackpad tested for zero mechanical fatigue',
      'Screen oleophobic coating inspected under UV light: Flawless'
    ]
  },
  {
    id: 'lap-003',
    title: 'Dell XPS 15 9530 Creator Edition (Grade A)',
    brand: 'Dell',
    category: 'refurbished-laptops',
    condition: 'refurbished-grade-a',
    conditionLabel: 'Certified Refurbished (Grade A)',
    price: 155000,
    originalPrice: 245000,
    rating: 4.8,
    reviewCount: 31,
    inStock: true,
    stockCount: 2,
    featured: true,
    warranty: '12 Months Nexus Hardware Warranty',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'CNC machined platinum silver aluminum with carbon fiber composite palm rest. Dedicated NVIDIA RTX graphics makes this a portable powerhouse for engineering, CAD, 4K rendering and gaming.',
    specs: {
      processor: 'Intel Core i7-13700H (14 Cores, 20 Threads, up to 5.0GHz)',
      ram: '32GB Dual-Channel DDR5 4800MHz (Upgradable to 64GB)',
      storage: '1TB M.2 PCIe NVMe SSD (Second M.2 slot open for expansion)',
      display: '15.6" 3.5K (3456 x 2160) InfinityEdge OLED Touch, 400 nits, 100% DCI-P3',
      graphics: 'NVIDIA GeForce RTX 4060 8GB GDDR6 (50W TGP)',
      batteryHealth: '92% Battery Health (86Whr 6-Cell Battery)',
      os: 'Windows 11 Pro (Activated)',
      weight: '1.92 kg (4.23 lbs)',
      ports: ['2x Thunderbolt 4', '1x USB-C 3.2 Gen 2 (with DisplayPort & Power Delivery)', 'Full-size SD Card Reader v6.0', '3.5mm Headphone Jack']
    },
    keyFeatures: [
      'Breathtaking 4-sided InfinityEdge OLED display with razor-thin 4mm bezels',
      'Upgradable RAM & dual NVMe slots for massive long-term expandability',
      'Quad-speaker design with Waves Nx 3D audio tuning',
      'Includes 130W Dell USB-C Power Adapter and USB-C to USB-A/HDMI dongle'
    ],
    refurbInspectionPoints: [
      'Dual-fan cooling assembly cleaned and re-seated with Arctic MX-6 compound',
      'OLED panel inspected for zero burn-in or color tinting',
      'Both RAM slots and PCIe lanes stress tested under AIDA64',
      'Chassis rated Grade A (microscopic shelf wear on rubber feet only)'
    ]
  },
  {
    id: 'lap-004',
    title: 'ASUS ROG Zephyrus G16 (2025 Edition - Brand New)',
    brand: 'ASUS',
    category: 'gaming-laptops',
    condition: 'brand-new',
    conditionLabel: 'Brand New (Factory Sealed)',
    price: 245000,
    originalPrice: 295000,
    rating: 4.9,
    reviewCount: 19,
    inStock: true,
    stockCount: 5,
    featured: true,
    isHotDeal: true,
    warranty: '24 Months ASUS International Manufacturer Warranty',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Precision CNC-milled aluminum chassis with Slash Lighting array. Delivers ultra-smooth AAA gaming and AI-accelerated workflows in a svelte 1.85kg chassis.',
    specs: {
      processor: 'Intel Core Ultra 9 185H (16 Cores, NPU AI Engine, up to 5.1GHz)',
      ram: '32GB LPDDR5X 7467MHz Dual Channel',
      storage: '1TB PCIe 4.0 NVMe M.2 Performance SSD',
      display: '16" 2.5K (2560 x 1600) ROG Nebula OLED, 240Hz / 0.2ms, G-Sync, 500 nits, 100% DCI-P3',
      graphics: 'NVIDIA GeForce RTX 4070 8GB GDDR6 (105W with ROG Boost)',
      batteryHealth: '100% (Brand New 90Whr Battery)',
      os: 'Windows 11 Home (Factory Sealed)',
      weight: '1.85 kg (4.08 lbs)',
      ports: ['1x Thunderbolt 4', '1x USB 3.2 Gen 2 Type-C (DP/PD)', '2x USB 3.2 Gen 2 Type-A', 'HDMI 2.1 FRL', 'SD Card Reader (UHS-II)', '3.5mm Combo Audio']
    },
    keyFeatures: [
      'ROG Intelligent Cooling with Liquid Metal on CPU and 2nd Gen Arc Flow Fans',
      'Ultra-fast 240Hz 0.2ms OLED display with VESA DisplayHDR True Black 500',
      'Customizable Slash Lighting LED bar on top lid',
      'Includes original 240W adapter and 100W compact travel Type-C charger'
    ]
  },
  {
    id: 'lap-005',
    title: 'Apple MacBook Air 15" M3 (Brand New Sealed)',
    brand: 'Apple',
    category: 'new-laptops',
    condition: 'brand-new',
    conditionLabel: 'Brand New (Factory Sealed)',
    price: 165000,
    originalPrice: 178000,
    rating: 4.9,
    reviewCount: 36,
    inStock: true,
    stockCount: 6,
    featured: false,
    warranty: '12 Months Apple Official Limited Warranty + AppleCare Eligible',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Impossibly thin 11.5mm fanless design with a expansive 15.3" Liquid Retina display. Midnight anodization seal helps reduce fingerprints.',
    specs: {
      processor: 'Apple M3 chip (8-core CPU, 10-core GPU, Hardware-accelerated ray tracing)',
      ram: '16GB Unified Memory',
      storage: '512GB Fast SSD Storage',
      display: '15.3" Liquid Retina (2880 x 1864), 500 nits, P3 Wide color, True Tone',
      graphics: '10-Core Integrated GPU',
      batteryHealth: '100% (Up to 18 hours battery life)',
      os: 'macOS Sequoia',
      weight: '1.51 kg (3.3 lbs)',
      ports: ['2x Thunderbolt / USB 4', 'MagSafe 3 Charging Port', '3.5mm Headphone Jack']
    },
    keyFeatures: [
      'Dead-silent fanless architecture – 100% quiet even under high workloads',
      'Support for up to two external displays with laptop lid closed',
      '1080p FaceTime HD camera with advanced image signal processor',
      'Includes Apple 35W Dual USB-C Port Compact Power Adapter'
    ]
  },
  {
    id: 'lap-006',
    title: 'HP EliteBook 840 G9 Business Ultrabook (Grade A+)',
    brand: 'HP',
    category: 'business-ultrabooks',
    condition: 'refurbished-grade-a-plus',
    conditionLabel: 'Certified Refurbished (Grade A+)',
    price: 58000,
    originalPrice: 115000,
    rating: 4.8,
    reviewCount: 24,
    inStock: true,
    stockCount: 7,
    featured: false,
    warranty: '12 Months Nexus Hardware Warranty',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Rugged enterprise security with HP Wolf Pro Security, whisper-quiet operation, and long battery life. Ideal for remote professionals, accountants, and software teams.',
    specs: {
      processor: 'Intel Core i5-1245U vPro (10 Cores, 12 Threads, up to 4.4GHz)',
      ram: '16GB DDR5 4800MHz (Expandable to 64GB)',
      storage: '512GB PCIe NVMe SSD',
      display: '14" WUXGA (1920 x 1200) IPS Anti-Glare, 16:10 Ratio, 400 nits, 100% sRGB',
      graphics: 'Intel Iris Xe Graphics',
      batteryHealth: '94% Original Capacity (Tested ~8.5 hrs)',
      os: 'Windows 11 Pro 64-Bit Licensed',
      weight: '1.36 kg (2.99 lbs)',
      ports: ['2x Thunderbolt 4 / USB-C', '2x USB 3.2 Gen 1 Type-A', 'HDMI 2.0', 'Headphone/Mic combo', 'SmartCard reader']
    },
    keyFeatures: [
      '5MP IR Auto-tracking webcam with dual microphones & noise reduction',
      'HP Sure Start self-healing BIOS and fingerprint reader',
      '16:10 aspect ratio provides 11% more vertical reading space',
      'Includes HP 65W Smart USB-C AC power adapter'
    ],
    refurbInspectionPoints: [
      'Keyboard tested with zero stuck switches; trackpad click feedback perfect',
      'Battery passed HP Battery Check diagnostic at 94% health',
      'Firmware updated to latest vendor security release',
      'Grade A+ chassis: Clean lid and edges'
    ]
  },
  {
    id: 'lap-007',
    title: 'Lenovo ThinkPad T14s Gen 3 AMD Edition (Grade A+)',
    brand: 'Lenovo',
    category: 'business-ultrabooks',
    condition: 'refurbished-grade-a-plus',
    conditionLabel: 'Certified Refurbished (Grade A+)',
    price: 68000,
    originalPrice: 135000,
    rating: 4.9,
    reviewCount: 38,
    inStock: true,
    stockCount: 5,
    featured: true,
    warranty: '12 Months Nexus Hardware Warranty',
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Renowned Ryzen efficiency paired with carbon-fiber reinforced durability. Runs cool and silent with exceptional multi-core performance for coding and virtualization.',
    specs: {
      processor: 'AMD Ryzen 7 PRO 6850U (8 Cores, 16 Threads, up to 4.7GHz)',
      ram: '16GB LPDDR5 6400MHz',
      storage: '512GB PCIe Gen4 NVMe Performance SSD',
      display: '14" WUXGA (1920 x 1200) Low Power IPS, 400 nits, 100% sRGB',
      graphics: 'AMD Radeon 680M Integrated Graphics (RDNA 2)',
      batteryHealth: '95% (57Whr Battery)',
      os: 'Windows 11 Pro',
      weight: '1.22 kg (2.71 lbs)',
      ports: ['1x USB-C 4 (40Gbps)', '1x USB-C 3.2 Gen 2', '2x USB-A 3.2 Gen 1', 'HDMI 2.0b', 'Audio Combo']
    },
    keyFeatures: [
      'Radeon 680M GPU offers entry gaming and smooth CAD performance',
      'Low-power display panel delivers 11+ hours of real-world office battery life',
      'Dual far-field noise-cancelling microphones with Dolby Voice',
      'Original Lenovo 65W Rapid Charge adapter included'
    ],
    refurbInspectionPoints: [
      'MemTest86 memory integrity pass with 0 errors',
      'Storage SMART telemetry verified: 100% health, 0 bad sectors',
      'Internal fans cleaned and repasted with Thermal Grizzly Kryonaut'
    ]
  },
  {
    id: 'lap-008',
    title: 'ASUS TUF Gaming A15 (New Sealed)',
    brand: 'ASUS',
    category: 'gaming-laptops',
    condition: 'brand-new',
    conditionLabel: 'Brand New (Factory Sealed)',
    price: 129000,
    originalPrice: 155000,
    rating: 4.7,
    reviewCount: 22,
    inStock: true,
    stockCount: 4,
    featured: false,
    warranty: '24 Months ASUS Official Warranty',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'High performance gaming laptop with MIL-STD-810H toughness and dedicated MUX Switch for maximum FPS in competitive esports titles.',
    specs: {
      processor: 'AMD Ryzen 7 7735HS (8 Cores, 16 Threads, up to 4.75GHz)',
      ram: '16GB DDR5 4800MHz (Supports up to 32GB)',
      storage: '1TB M.2 NVMe PCIe SSD',
      display: '15.6" FHD (1920 x 1080) 144Hz IPS, G-Sync, 250 nits',
      graphics: 'NVIDIA GeForce RTX 4060 8GB GDDR6 (140W Max TGP with MUX Switch)',
      batteryHealth: '100% (90Whr Battery)',
      os: 'Windows 11 Home',
      weight: '2.20 kg (4.85 lbs)',
      ports: ['1x Type-C USB 4', '1x USB 3.2 Gen 2 Type-C (DP/G-Sync)', '2x USB 3.2 Gen 1 Type-A', 'RJ-45 Gigabit LAN', 'HDMI 2.1']
    },
    keyFeatures: [
      'Full 140W RTX 4060 GPU with hardware MUX switch and NVIDIA Advanced Optimus',
      'Dual 84-blade Arc Flow Fans and 4 exhaust vents for cool operation',
      'RGB backlit keyboard with 20M keystroke durability',
      'Includes ASUS 240W Power Supply'
    ]
  },
  {
    id: 'part-001',
    title: 'Samsung 990 PRO 2TB NVMe PCIe 4.0 SSD',
    brand: 'Samsung',
    category: 'components-upgrades',
    condition: 'brand-new',
    conditionLabel: 'Brand New (Factory Sealed)',
    price: 24500,
    originalPrice: 32000,
    rating: 5.0,
    reviewCount: 64,
    inStock: true,
    stockCount: 15,
    featured: false,
    warranty: '5 Years Manufacturer Warranty (+ Free Nexus Migration Service Available)',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Blazing read speeds up to 7,450 MB/s. The best upgrade for slow laptops and gaming machines. Our repair workshop can clone your entire OS and files with zero data loss in under 45 minutes.',
    specs: {
      processor: 'Samsung In-House Pascal Controller',
      ram: '2GB LPDDR4 DRAM Cache',
      storage: '2TB V-NAND TLC (1,200 TBW endurance)',
      display: 'PCIe Gen 4.0 x4, NVMe 2.0 Form Factor M.2 2280',
      graphics: 'Sequential Read: Up to 7,450 MB/s | Sequential Write: Up to 6,900 MB/s',
      os: 'Universal compatibility (Windows, macOS, Linux, PS5)',
      weight: '9.0 grams',
      ports: ['M.2 2280 PCIe 4.0 Socket']
    },
    keyFeatures: [
      'Nickel coating on controller and heat spreader label for reliable thermal control',
      'Samsung Magician software suite for diagnostics and encryption management',
      'Ask in store for our KSh 2,500 Express Clone & Swap Service!'
    ]
  },
  {
    id: 'part-002',
    title: 'Crucial 32GB Kit (2x16GB) DDR5 5600MHz Laptop RAM',
    brand: 'Crucial',
    category: 'components-upgrades',
    condition: 'brand-new',
    conditionLabel: 'Brand New (Factory Sealed)',
    price: 12500,
    originalPrice: 16000,
    rating: 4.9,
    reviewCount: 30,
    inStock: true,
    stockCount: 12,
    featured: false,
    warranty: 'Lifetime Limited Manufacturer Warranty',
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Boost multitasking, eliminate browser stutter, and speed up creative renders. Compatible with all 12th/13th/14th Gen Intel and AMD 6000/7000/8000 series laptops.',
    specs: {
      processor: 'Non-ECC SODIMM 262-Pin',
      ram: '32GB Kit (2x 16GB)',
      storage: '5600MHz CL46 (Downclocks automatically to 5200MHz or 4800MHz if required)',
      display: '1.1V Low Power Draw',
      graphics: 'On-die ECC for improved signal reliability',
      os: 'Plug & Play on Windows and Linux laptops',
      weight: '25 grams',
      ports: ['DDR5 SODIMM Slot']
    },
    keyFeatures: [
      '50% faster data transfer rates than standard DDR4',
      'Direct on-die power management IC (PMIC) for high efficiency',
      'Free in-shop installation when purchased with laptop or service'
    ]
  },
  {
    id: 'acc-001',
    title: 'Dell UltraSharp 27" 4K USB-C Hub Monitor (U2723QE)',
    brand: 'Dell',
    category: 'accessories',
    condition: 'brand-new',
    conditionLabel: 'Brand New (Factory Sealed)',
    price: 68000,
    originalPrice: 85000,
    rating: 4.9,
    reviewCount: 45,
    inStock: true,
    stockCount: 8,
    featured: true,
    warranty: '3 Years Dell Advanced Exchange Warranty',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'The ultimate laptop companion. Turns any USB-C laptop into a clean single-cable workstation with 90W power delivery, RJ45 Ethernet, and revolutionary IPS Black technology with 2,000:1 contrast ratio.',
    specs: {
      processor: 'Built-in KVM Switch (Control 2 PCs with 1 keyboard/mouse)',
      ram: 'IPS Black Technology Panel',
      storage: '4K UHD (3840 x 2160) at 60Hz',
      display: '27" 4K IPS Black, 400 nits, VESA DisplayHDR 400, 100% sRGB & 98% DCI-P3',
      graphics: 'Delta E < 2 Factory Color Calibration',
      os: 'macOS & Windows fully supported',
      weight: '6.64 kg (with stand)',
      ports: ['1x USB-C (90W PD)', '1x DisplayPort 1.4', '1x HDMI 2.0', '1x RJ-45 Ethernet', '5x USB 3.2 Gen 2 ports']
    },
    keyFeatures: [
      'Single-cable USB-C connection charges laptop and routes all USB and wired internet',
      'ComfortView Plus low blue light without color shifting',
      'Fully ergonomic stand: Height, tilt, swivel, and 90° pivot'
    ]
  },
  {
    id: 'acc-002',
    title: 'Logitech MX Master 3S Wireless Performance Mouse',
    brand: 'Logitech',
    category: 'accessories',
    condition: 'brand-new',
    conditionLabel: 'Brand New (Factory Sealed)',
    price: 13500,
    originalPrice: 16500,
    rating: 5.0,
    reviewCount: 89,
    inStock: true,
    stockCount: 20,
    featured: false,
    warranty: '12 Months Manufacturer Warranty',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Quiet Click switches with 90% less click noise, 8,000 DPI sensor that tracks on glass, and MagSpeed electromagnetic scroll wheel that scrolls 1,000 lines in 1 second.',
    specs: {
      processor: 'Darkfield 8000 DPI High-Precision Sensor',
      ram: 'Pair with up to 3 devices simultaneously',
      storage: 'Logi Bolt USB Receiver + Bluetooth Low Energy',
      display: 'Ergonomic silhouette with thumb wheel and gesture button',
      graphics: '70-day battery life on full charge (USB-C rapid charge)',
      os: 'Windows, macOS, iPadOS, ChromeOS, Linux',
      weight: '141 grams',
      ports: ['USB-C Charging Port']
    },
    keyFeatures: [
      'MagSpeed wheel toggles smoothly between ratchet and hyper-fast free spin',
      'Cross-computer Logitech Flow: Copy text and images between Mac and PC effortlessly',
      'Quiet Clicks for calm office and late-night working sessions'
    ]
  }
];
