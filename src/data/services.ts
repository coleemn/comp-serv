import type { RepairService } from '../types';

export const REPAIR_SERVICES: RepairService[] = [
  {
    id: 'diag-troubleshoot',
    title: 'Precision Diagnostics & Troubleshooting',
    category: 'hardware',
    iconName: 'Cpu',
    shortDesc: 'Deep-dive board-level inspection for systems that will not turn on, random freezes, crash loops, or blue screens (BSOD).',
    detailedDesc: 'Our certified bench technicians utilize digital thermal cameras, multimeters, and specialized hardware diagnostic jigs to pinpoint the root cause—from power delivery IC failures to corrupt firmware—before quoting any repairs.',
    turnaroundTime: 'Same-Day / 2 to 4 Hours',
    startingPrice: 'Free with Approved Repair (or KSh 1,500 standalone)',
    warranty: '90 Days Guarantee on all Diagnostic Assessments',
    commonSymptoms: [
      'Laptop completely dead with no power LED when plugged in',
      'System turns on with spinning fans but black screen (no display)',
      'Random sudden shutdowns or restarts during Zoom or rendering',
      'Windows Blue Screen of Death (BSOD) or macOS Kernel Panics',
      'Beep codes or flashing power button diagnostics'
    ],
    includedSteps: [
      'Complete power-rail voltage and impedance measurement',
      'Comprehensive memory stress test using MemTest86+',
      'Drive health SMART telemetry and file table integrity scan',
      'Written technician diagnostic report & itemized quote before work starts'
    ]
  },
  {
    id: 'screen-replacement',
    title: 'Laptop Screen & Hinge Rebuild',
    category: 'hardware',
    iconName: 'Monitor',
    shortDesc: 'Factory OEM replacement for cracked LCDs, OLED panels, distorted lines, flickering backlights, and snapped chassis hinges.',
    detailedDesc: 'We stock and source original A+ Grade replacement screens for Dell XPS, Lenovo ThinkPad, Apple Retina MacBook, HP Envy, ASUS ROG and all major brands. Snapped hinges are rebuilt using structural epoxy and reinforced backplates.',
    turnaroundTime: '24 Hours (Many common screens in-stock same-day)',
    startingPrice: 'From KSh 8,500 (Includes installation & calibration)',
    warranty: '12 Months Replacement Warranty on All Display Panels',
    commonSymptoms: [
      'Cracked glass or ink-like bleed spots across the LCD',
      'Vertical or horizontal colored lines traversing display',
      'Screen stays black while keyboard lights up and HDMI external works',
      'Creaking, popping sound or loose lid separation when opening/closing',
      'Flickering screen when moving the lid angle'
    ],
    includedSteps: [
      'Anti-static disassembly of display assembly bezel',
      'Installation of OEM-spec high-gamut replacement panel',
      'Reinforcement and tension adjustment of left/right metal hinges',
      'Dead-pixel inspection and color-uniformity verification'
    ]
  },
  {
    id: 'battery-power-repair',
    title: 'Battery Replacement & USB-C Power Port Repair',
    category: 'hardware',
    iconName: 'BatteryCharging',
    shortDesc: 'Genuine battery replacements, bloated battery removal, and micro-soldered USB-C / DC power jack repairs.',
    detailedDesc: 'Swollen batteries are a severe fire hazard that warp trackpads and split laptop cases. We safely extract degraded cells, install fresh high-capacity OEM batteries, and fix broken, wobbly USB-C charging ports with precision micro-soldering.',
    turnaroundTime: '1 to 2 Hours',
    startingPrice: 'From KSh 4,500 + battery cost',
    warranty: '12 Months Full Battery & Port Warranty',
    commonSymptoms: [
      'Laptop shuts down immediately when unplugged from charger',
      'Battery percentage drops precipitously from 80% to 10%',
      'Trackpad is raised, bulging, or hard to click (swollen battery sign)',
      'Charger cable has to be held at an awkward angle to charge',
      'Service Battery or Replace Battery warning notification'
    ],
    includedSteps: [
      'Safe discharge and hazardous disposal of old battery cell',
      'Installation of high-cycle OEM certified replacement cell',
      'Full battery calibration cycle (0% to 100% capacity handshake test)',
      'Micro-soldered anchor reinforcement on USB-C power receptacle'
    ]
  },
  {
    id: 'ram-ssd-boost',
    title: 'NVMe SSD & High-Speed RAM Upgrades',
    category: 'hardware',
    iconName: 'HardDrive',
    shortDesc: 'Supercharge an aging laptop into a blazing-fast machine with zero data loss. Up to 10x speed boost guaranteed.',
    detailedDesc: 'Swap out sluggish mechanical hard drives or small 256GB drives for high-speed Samsung PCIe Gen4 NVMe storage. We clone your existing Windows, apps, browser bookmarks, and files bit-for-bit so everything works exactly as you left it—just lightning fast.',
    turnaroundTime: '45 Minutes to 2 Hours',
    startingPrice: 'From KSh 2,500 + component cost',
    warranty: '5 Years Manufacturer Drive Warranty + Lifetime Installation Guarantee',
    commonSymptoms: [
      'Laptop takes 3 to 5 minutes just to boot up to the desktop',
      '100% Disk Usage warning in Windows Task Manager',
      'Stuttering and lag when running Chrome tabs, Excel, or Photoshop',
      'Storage full warning preventing Windows updates from installing',
      'Slow file search and application launch delays'
    ],
    includedSteps: [
      'Bit-exact drive cloning of your existing OS, software, and documents',
      'Installation of ultra-fast Gen4 NVMe SSD and dual-channel RAM',
      'Thermal pad placement on SSD controller to prevent thermal throttling',
      'Secure formatting of old drive for use as portable external backup'
    ]
  },
  {
    id: 'liquid-spill-recovery',
    title: 'Liquid Spill Recovery & Ultrasonic Board Cleaning',
    category: 'hardware',
    iconName: 'Droplets',
    shortDesc: 'Specialized chemical decontamination, ultrasonic immersion, and SMD micro-soldering for laptops exposed to coffee, water, or wine.',
    detailedDesc: 'Never put a wet laptop in rice—it accelerates corrosive copper pitting! Bring it straight to our lab. We instantly disconnect the power, disassemble the motherboard, deoxidize corroded traces in our heated ultrasonic bath, and replace blown capacitors.',
    turnaroundTime: '24 to 48 Hours',
    startingPrice: 'From KSh 6,500',
    warranty: '90 Days Workmanship Guarantee',
    commonSymptoms: [
      'Coffee, tea, water, or soda spilled on keyboard or air vents',
      'Sticky keys or keyboard typing incorrect characters',
      'Computer worked for 10 minutes after spill then died suddenly',
      'Corrosive green/white residue visible on vents or ports',
      'Burning electrical smell after moisture contact'
    ],
    includedSteps: [
      'Immediate battery disconnect to halt electrical electrolytic erosion',
      'Immersion in Branson ultrasonic bath with specialized flux solvent',
      'Microscopic inspection under 45x stereo microscope for burnt SMD chips',
      'Trace jumper wiring and solder pad reconstruction where needed'
    ]
  },
  {
    id: 'thermal-overhaul',
    title: 'Thermal Overhaul & Fan Servicing',
    category: 'maintenance',
    iconName: 'Flame',
    shortDesc: 'Complete heatsink de-dusting, high-conductivity Arctic/Noctua thermal paste repasting, and fan motor lubrication.',
    detailedDesc: 'Clogged cooling fins and dried-out factory thermal paste cause laptops to throttle clock speeds by up to 50% while sounding like jet engines. Our complete cooling overhaul restores whisper-quiet operation and drops CPU temperatures by 15°C to 28°C.',
    turnaroundTime: '1 Hour Express Service',
    startingPrice: 'From KSh 3,500',
    warranty: '6 Months Cool & Quiet Performance Guarantee',
    commonSymptoms: [
      'Fans blowing at maximum loudness constantly even when idle',
      'Laptop bottom chassis burning hot to the touch',
      'Games or video exports dropping FPS and stuttering after 10 minutes',
      'Sudden shutoff during heavy processing without warning'
    ],
    includedSteps: [
      'High-pressure micro-filtered air jetting of copper cooling fins',
      'Removal of dried factory crust paste using high-purity isopropyl alcohol',
      'Precision application of non-conductive Arctic MX-6 or Noctua NT-H2 paste',
      'Pre-and-post synthetic thermal benchmarking report provided'
    ]
  },
  {
    id: 'software-os-virus',
    title: 'OS Clean Install, Virus Removal & Data Recovery',
    category: 'software',
    iconName: 'ShieldCheck',
    shortDesc: 'Malware & spyware purge, genuine Windows 11 / macOS re-installation, driver tuning, and corrupted drive data rescue.',
    detailedDesc: 'Whether hit by ransomware, endless popups, or a broken operating system update, our software specialists restore your device to peak performance. We also rescue photos and critical documents from non-booting drives.',
    turnaroundTime: 'Same-Day / 3 to 5 Hours',
    startingPrice: 'From KSh 2,500',
    warranty: '30 Days Software Guarantee & Remote Follow-up Support',
    commonSymptoms: [
      'Pop-up ads, browser hijacking, or unauthorized search redirects',
      'Windows stuck on "Preparing Automatic Repair" reboot loop',
      'Missing or unreadable personal files, tax documents, or family photos',
      'Driver conflicts causing audio, Wi-Fi, or Bluetooth to stop functioning'
    ],
    includedSteps: [
      'Forensic data backup prior to any software modifications',
      'Offline heuristic scanning for rootkits, trojans, and crypto-miners',
      'Clean OS installation with genuine digital license activation',
      'Installation of essential utilities, ad-blockers, and full driver stack'
    ]
  },
  {
    id: 'networking-wifi-solutions',
    title: 'Wi-Fi, Mesh & Home-Office Network Solutions',
    category: 'networking',
    iconName: 'Wifi',
    shortDesc: 'High-speed Wi-Fi 6E/7 card laptop upgrades, home office mesh Wi-Fi design, network storage (NAS), and cabling.',
    detailedDesc: 'Struggling with weak signals, zoom drops, or dead zones? We upgrade laptops with Intel Wi-Fi 6E / Wi-Fi 7 internal cards with Bluetooth 5.4, configure secure mesh networks, and deploy commercial-grade Wi-Fi routers for homes and small business offices.',
    turnaroundTime: 'Same-Day in Shop / On-Site Scheduling Available',
    startingPrice: 'From KSh 3,500 in shop / KSh 8,500 on-site setup',
    warranty: '12 Months Hardware & Connectivity Guarantee',
    commonSymptoms: [
      'Laptop frequently disconnects from Wi-Fi or cannot find 5GHz networks',
      'Extremely slow internet speeds despite paying for gigabit fiber',
      'Dropped video calls and high latency when moving around the premises',
      'Old laptop stuck on slow Wi-Fi 4 (802.11n) technology'
    ],
    includedSteps: [
      'Installation of Intel AX210 / BE200 M.2 Wi-Fi module in laptop',
      'High-gain antenna inspection and throughput speed validation',
      'Router channel optimization to eliminate neighborhood interference',
      'WPA3 encryption hardening and guest network separation'
    ]
  }
];

export const COMMON_REPAIR_ISSUES = [
  { id: 'screen', label: 'Cracked / Flickering Screen', category: 'Screen & Display', estTime: '24h', basePrice: 8500 },
  { id: 'battery', label: 'Battery Not Holding Charge / Swollen', category: 'Battery & Power', estTime: '1-2h', basePrice: 4500 },
  { id: 'power', label: 'No Power / Dead / USB-C Won\'t Charge', category: 'Board Level & Power', estTime: 'Same-Day', basePrice: 4000 },
  { id: 'slow', label: 'Sluggish / Need SSD & RAM Upgrade', category: 'Performance Upgrade', estTime: '1h', basePrice: 2500 },
  { id: 'spill', label: 'Liquid Spill (Water, Coffee, Tea)', category: 'Liquid Recovery', estTime: '24-48h', basePrice: 6500 },
  { id: 'heat', label: 'Overheating / Loud Screaming Fan', category: 'Thermal Service', estTime: '1h', basePrice: 3500 },
  { id: 'os', label: 'Blue Screen / Virus / Won\'t Boot OS', category: 'Software & Recovery', estTime: '2-4h', basePrice: 2500 },
  { id: 'hinge', label: 'Broken Hinge / Case Separating', category: 'Chassis & Hardware', estTime: '24h', basePrice: 5500 },
  { id: 'wifi', label: 'Wi-Fi Drops / Slow Wireless Card', category: 'Networking', estTime: '1h', basePrice: 3500 }
];
