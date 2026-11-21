import React, { useState } from 'react';
import { 
  Sliders, 
  Cpu, 
  Layers, 
  HardDrive, 
  ShieldCheck, 
  PackageCheck, 
  MessageCircle, 
  Sparkles, 
  Check, 
  Laptop,
  ArrowRight
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { SHOP_INFO } from '../data/shopInfo';

export const LaptopConfigurator: React.FC = () => {
  // Only select laptops for configurator
  const laptops = PRODUCTS.filter((p) => p.category.includes('laptop') || p.id.startsWith('lap-'));

  const [selectedLaptopId, setSelectedLaptopId] = useState<string>(laptops[0].id);
  const [selectedRamUpgrade, setSelectedRamUpgrade] = useState<number>(0);
  const [selectedSsdUpgrade, setSelectedSsdUpgrade] = useState<number>(0);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const [selectedCarePlus, setSelectedCarePlus] = useState<boolean>(false);

  const currentLaptop = laptops.find((l) => l.id === selectedLaptopId) || laptops[0];

  const ramOptions = [
    { label: 'Factory Configuration (Included)', price: 0, desc: currentLaptop.specs.ram },
    { label: 'Boost to 32GB High-Speed RAM', price: 5500, desc: 'Ideal for heavy multi-tab Chrome, programming & VM containers' },
    { label: 'Max out to 64GB Extreme RAM', price: 12500, desc: 'For 4K/8K video editing, heavy CAD & software development' },
  ];

  const ssdOptions = [
    { label: 'Factory SSD (Included)', price: 0, desc: currentLaptop.specs.storage },
    { label: 'Upgrade to 1TB Gen4 Fast NVMe', price: 7500, desc: 'Doubles capacity with 5,000+ MB/s transfer speeds' },
    { label: 'Upgrade to 2TB Samsung 990 PRO', price: 18500, desc: 'Flagship 7,450 MB/s speed with nickel thermal coating' },
  ];

  const accessoryOptions = [
    { id: 'mouse', label: 'Logitech MX Master 3S Mouse', price: 13500, icon: '🖱️' },
    { id: 'sleeve', label: 'Nexus Water-Resistant Hard Sleeve', price: 3500, icon: '💼' },
    { id: 'charger', label: 'Anker 65W GaN Compact Travel Charger', price: 4500, icon: '⚡' },
    { id: 'hub', label: 'Dell 4K USB-C Hub 27" Monitor', price: 68000, icon: '🖥️' },
  ];

  const toggleAccessory = (id: string) => {
    if (selectedAccessories.includes(id)) {
      setSelectedAccessories(selectedAccessories.filter((item) => item !== id));
    } else {
      setSelectedAccessories([...selectedAccessories, id]);
    }
  };

  // Calculations
  const ramCost = ramOptions[selectedRamUpgrade].price;
  const ssdCost = ssdOptions[selectedSsdUpgrade].price;
  const accessoriesCost = selectedAccessories.reduce((acc, id) => {
    const item = accessoryOptions.find((a) => a.id === id);
    return acc + (item ? item.price : 0);
  }, 0);
  const careCost = selectedCarePlus ? 8500 : 0;

  const totalPackagePrice = currentLaptop.price + ramCost + ssdCost + accessoriesCost + careCost;

  const customOrderWhatsAppUrl = `https://wa.me/${SHOP_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Nexus Computers Kenya! 💻✨\n\nI configured a custom laptop bundle on your website configurator:\n\n• *Base Model:* ${currentLaptop.title} (KSh ${currentLaptop.price.toLocaleString()})\n• *RAM Tier:* ${ramOptions[selectedRamUpgrade].label} (+KSh ${ramCost.toLocaleString()})\n• *Storage Tier:* ${ssdOptions[selectedSsdUpgrade].label} (+KSh ${ssdCost.toLocaleString()})\n• *Accessories:* ${selectedAccessories.length > 0 ? selectedAccessories.join(', ') : 'None'} (+KSh ${accessoriesCost.toLocaleString()})\n• *Extended Care+ 24M:* ${selectedCarePlus ? 'Yes (+KSh 8,500)' : 'Standard 12M'}\n\n*Total Package Estimate:* KSh ${totalPackagePrice.toLocaleString()}\n\nCan you prepare this custom build for showroom pickup at Nairobi CBD or courier delivery? Asante!`
  )}`;

  return (
    <section id="configurator" className="py-16 border-b border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-2">
            <Sliders className="w-4 h-4" />
            <span>Interactive Customizer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Build & Customize Your Ideal Setup
          </h2>
          <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 mt-2">
            Tailor any laptop with verified RAM expansions, lightning-fast NVMe storage upgrades, and essential accessories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Configuration Steps (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Base Laptop Selection */}
            <div className="p-6 rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 shadow-md space-y-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-600">
                1. Select Base Laptop
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {laptops.map((lap) => (
                  <button
                    key={lap.id}
                    onClick={() => {
                      setSelectedLaptopId(lap.id);
                      setSelectedRamUpgrade(0);
                      setSelectedSsdUpgrade(0);
                    }}
                    className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex items-center gap-3 ${
                      selectedLaptopId === lap.id
                        ? 'bg-cyan-500/10 border-cyan-400 text-white shadow-inner'
                        : 'bg-slate-950/60 light:bg-slate-50 text-slate-300 light:text-slate-700 border-slate-800 light:border-slate-200 hover:border-slate-600'
                    }`}
                  >
                    <img
                      src={lap.image}
                      alt={lap.title}
                      className="w-14 h-11 object-cover rounded-lg border border-slate-700 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <span className="font-bold text-xs truncate block text-white light:text-slate-900">
                        {lap.title}
                      </span>
                      <span className="text-[11px] text-cyan-400 font-extrabold">
                        KSh {lap.price.toLocaleString()}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: RAM Upgrade */}
            <div className="p-6 rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 shadow-md space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-600 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  <span>2. Memory (RAM) Configuration</span>
                </label>
                <span className="text-[11px] text-emerald-400 font-medium">Free In-Store Installation</span>
              </div>

              <div className="space-y-2">
                {ramOptions.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedRamUpgrade(i)}
                    className={`w-full p-3 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      selectedRamUpgrade === i
                        ? 'bg-indigo-500/15 border-indigo-400 text-white shadow-inner'
                        : 'bg-slate-950/60 light:bg-slate-50 text-slate-300 light:text-slate-700 border-slate-800 light:border-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold block text-white light:text-slate-900">{opt.label}</span>
                      <span className="text-[11px] text-slate-400">{opt.desc}</span>
                    </div>
                    <span className="text-xs font-bold text-indigo-400 shrink-0">
                      {opt.price === 0 ? 'Included' : `+KSh ${opt.price.toLocaleString()}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: SSD Upgrade */}
            <div className="p-6 rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 shadow-md space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-600 flex items-center gap-1.5">
                  <HardDrive className="w-4 h-4 text-cyan-400" />
                  <span>3. NVMe Storage Capacity</span>
                </label>
                <span className="text-[11px] text-cyan-400 font-medium">OS Cloned with 0 Data Loss</span>
              </div>

              <div className="space-y-2">
                {ssdOptions.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedSsdUpgrade(i)}
                    className={`w-full p-3 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      selectedSsdUpgrade === i
                        ? 'bg-cyan-500/15 border-cyan-400 text-white shadow-inner'
                        : 'bg-slate-950/60 light:bg-slate-50 text-slate-300 light:text-slate-700 border-slate-800 light:border-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold block text-white light:text-slate-900">{opt.label}</span>
                      <span className="text-[11px] text-slate-400">{opt.desc}</span>
                    </div>
                    <span className="text-xs font-bold text-cyan-400 shrink-0">
                      {opt.price === 0 ? 'Included' : `+KSh ${opt.price.toLocaleString()}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Accessories Bundle */}
            <div className="p-6 rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 shadow-md space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-600">
                4. Select Productivity Peripherals
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {accessoryOptions.map((acc) => {
                  const isChecked = selectedAccessories.includes(acc.id);
                  return (
                    <button
                      key={acc.id}
                      onClick={() => toggleAccessory(acc.id)}
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                        isChecked
                          ? 'bg-emerald-500/15 border-emerald-400 text-white shadow-inner'
                          : 'bg-slate-950/60 light:bg-slate-50 text-slate-300 light:text-slate-700 border-slate-800 light:border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{acc.icon}</span>
                        <span className="text-xs font-semibold text-white light:text-slate-900">{acc.label}</span>
                      </div>
                      <span className="text-xs font-bold text-emerald-400">
                        +KSh {acc.price.toLocaleString()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Extended Care+ */}
            <div className="p-6 rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 shadow-md flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-bold text-white light:text-slate-900">
                    Add Nexus Care+ Extended Protection (24 Months)
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Extends warranty to 2 full years and includes 1x annual thermal overhaul & deep clean.
                </p>
              </div>

              <button
                onClick={() => setSelectedCarePlus(!selectedCarePlus)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer shrink-0 ${
                  selectedCarePlus
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-extrabold'
                    : 'bg-slate-800 text-slate-300 border-slate-700'
                }`}
              >
                {selectedCarePlus ? 'Care+ Added (+KSh 8,500)' : 'Add (+KSh 8,500)'}
              </button>
            </div>

          </div>

          {/* Right Live Itemized Invoice Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 light:border-slate-300">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Custom Setup Summary
                </span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <PackageCheck className="w-3.5 h-3.5" />
                  Bench Tested & Assembled
                </span>
              </div>

              {/* Base Laptop Card Preview */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/80 light:bg-white border border-slate-800 light:border-slate-200">
                <img
                  src={currentLaptop.image}
                  alt={currentLaptop.title}
                  className="w-16 h-12 object-cover rounded-lg"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold text-white light:text-slate-900 truncate">
                    {currentLaptop.title}
                  </h4>
                  <span className="text-[11px] text-cyan-400 font-bold block">
                    Base: KSh ${currentLaptop.price.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Itemized Line Items */}
              <div className="space-y-2 text-xs divide-y divide-slate-800/80">
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">RAM:</span>
                  <span className="font-semibold text-white light:text-slate-900">
                    {ramCost > 0 ? `+ KSh ${ramCost.toLocaleString()} (Upgrade)` : 'Factory Included'}
                  </span>
                </div>

                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">SSD Storage:</span>
                  <span className="font-semibold text-white light:text-slate-900">
                    {ssdCost > 0 ? `+ KSh ${ssdCost.toLocaleString()} (Upgrade)` : 'Factory Included'}
                  </span>
                </div>

                {accessoriesCost > 0 && (
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400">Accessories ({selectedAccessories.length}):</span>
                    <span className="font-semibold text-emerald-400">+ KSh ${accessoriesCost.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">Warranty Coverage:</span>
                  <span className="font-semibold text-cyan-400">
                    {selectedCarePlus ? '24M Nexus Care+ (+KSh 8,500)' : '12M Standard Warranty'}
                  </span>
                </div>
              </div>

              {/* Total Price readout */}
              <div className="p-5 rounded-2xl bg-slate-950/90 light:bg-white border border-slate-800 light:border-slate-200 text-center">
                <span className="text-xs text-slate-400 block font-medium">Total Showroom Package Price:</span>
                <div className="text-4xl font-black text-white light:text-slate-900 my-1">
                  KSh {totalPackagePrice.toLocaleString()}
                </div>
                <span className="text-[11px] text-emerald-400 font-semibold block">
                  Includes Free OS Cloning, Thermal Repaste & Setup
                </span>
              </div>

              {/* WhatsApp Direct Action Button */}
              <a
                href={customOrderWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/25 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Reserve Custom Build on WhatsApp</span>
              </a>

              <span className="text-[11px] text-slate-500 text-center block">
                We assemble and bench test your custom setup before pickup or delivery.
              </span>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
