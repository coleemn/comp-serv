import React, { useState } from 'react';
import { 
  Laptop, 
  Wrench, 
  Sparkles, 
  ArrowRight, 
  Code, 
  Gamepad2, 
  Briefcase, 
  GraduationCap, 
  Apple, 
  Battery, 
  Monitor, 
  Zap, 
  HardDrive, 
  Droplets
} from 'lucide-react';
import type { ProductCategory } from '../types';

interface LaptopFinderWidgetProps {
  onSelectCategory: (category: ProductCategory) => void;
  onSearchChange: (search: string) => void;
  onSelectRepairIssue: (issueId: string) => void;
}

export const LaptopFinderWidget: React.FC<LaptopFinderWidgetProps> = ({
  onSelectCategory,
  onSearchChange,
  onSelectRepairIssue,
}) => {
  const [activeTab, setActiveTab] = useState<'laptops' | 'repairs'>('laptops');

  const laptopShortcuts = [
    {
      label: 'Business & Office Ultrabooks',
      desc: 'Lightweight, all-day battery, MIL-STD durability',
      icon: Briefcase,
      category: 'business-ultrabooks' as ProductCategory,
      search: 'ThinkPad'
    },
    {
      label: 'Apple Mac Ecosystem',
      desc: 'MacBook Pro & Air with M-Series Silicon',
      icon: Apple,
      category: 'all' as ProductCategory,
      search: 'Apple'
    },
    {
      label: 'Gaming & 3D Creators',
      desc: 'High FPS RTX GPUs, 144Hz+ OLED displays',
      icon: Gamepad2,
      category: 'gaming-laptops' as ProductCategory,
      search: 'Gaming'
    },
    {
      label: 'Certified Refurbished Value Deals',
      desc: 'Tested Grade A+ laptops from KSh 58,000 with 12M warranty',
      icon: Sparkles,
      category: 'refurbished-laptops' as ProductCategory,
      search: ''
    },
    {
      label: 'Software Developers & Coding',
      desc: '32GB RAM, 1TB NVMe, fast multi-core CPUs',
      icon: Code,
      category: 'all' as ProductCategory,
      search: '32GB'
    },
    {
      label: 'Student & General Computing',
      desc: 'Reliable everyday machines under KSh 70,000',
      icon: GraduationCap,
      category: 'refurbished-laptops' as ProductCategory,
      search: ''
    }
  ];

  const repairShortcuts = [
    {
      id: 'screen',
      label: 'Cracked / Flickering Screen',
      desc: 'OEM display replacements with 12M warranty',
      icon: Monitor,
      est: '24h Turnaround'
    },
    {
      id: 'battery',
      label: 'Battery Draining Fast / Swollen',
      desc: 'Genuine battery swap & safe disposal',
      icon: Battery,
      est: '1-2h Express'
    },
    {
      id: 'slow',
      label: 'Slow Laptop? 10x SSD Speed Boost',
      desc: 'Clone existing system with 0 data loss',
      icon: HardDrive,
      est: '45 mins'
    },
    {
      id: 'spill',
      label: 'Liquid Spill (Water, Coffee, Wine)',
      desc: 'Ultrasonic board de-oxidation and trace repair',
      icon: Droplets,
      est: '24-48h'
    },
    {
      id: 'power',
      label: 'Won\'t Turn On / USB-C Port Broken',
      desc: 'Board-level micro-soldering & power IC repair',
      icon: Zap,
      est: 'Same-Day'
    }
  ];

  const handleLaptopShortcut = (category: ProductCategory, search: string) => {
    onSelectCategory(category);
    onSearchChange(search);
    const element = document.querySelector('#products');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRepairShortcut = (issueId: string) => {
    onSelectRepairIssue(issueId);
    const element = document.querySelector('#estimator');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 bg-slate-900/30 light:bg-slate-100/60 border-b border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Widget Header & Tab Switcher */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Decision Guide</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900 mt-1">
              What can we help you solve today?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 mt-1">
              Select your requirement below for instant showroom filtering or immediate diagnostic assistance.
            </p>
          </div>

          {/* Toggle Pills */}
          <div className="flex items-center bg-slate-900 light:bg-white p-1 rounded-xl border border-slate-800 light:border-slate-300 shadow-md">
            <button
              onClick={() => setActiveTab('laptops')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'laptops'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900'
              }`}
            >
              <Laptop className="w-4 h-4" />
              <span>I Need a Laptop</span>
            </button>

            <button
              onClick={() => setActiveTab('repairs')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'repairs'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>My PC Needs Repair</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Laptop Shortcuts */}
        {activeTab === 'laptops' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in duration-300">
            {laptopShortcuts.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleLaptopShortcut(item.category, item.search)}
                  className="group p-4 rounded-xl bg-slate-900/80 light:bg-white hover:bg-slate-800/80 light:hover:bg-slate-50 border border-slate-800 light:border-slate-200 hover:border-cyan-500/40 text-left transition-all hover:-translate-y-0.5 cursor-pointer flex items-start gap-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 light:bg-cyan-50 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-cyan-400 light:text-cyan-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-bold text-sm text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                        {item.label}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                    <p className="text-xs text-slate-400 light:text-slate-600 mt-0.5 line-clamp-1">
                      {item.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Tab 2: Repair Shortcuts */}
        {activeTab === 'repairs' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 animate-in fade-in duration-300">
            {repairShortcuts.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleRepairShortcut(item.id)}
                  className="group p-4 rounded-xl bg-slate-900/80 light:bg-white hover:bg-slate-800/80 light:hover:bg-slate-50 border border-slate-800 light:border-slate-200 hover:border-cyan-500/40 text-left transition-all hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 light:bg-amber-50 border border-amber-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 text-amber-400 light:text-amber-600" />
                    </div>
                    <span className="font-bold text-sm text-white light:text-slate-900 block group-hover:text-cyan-400 transition-colors">
                      {item.label}
                    </span>
                    <p className="text-xs text-slate-400 light:text-slate-600 mt-1 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-slate-800 light:border-slate-200 flex items-center justify-between text-[11px]">
                    <span className="text-cyan-400 font-semibold">{item.est}</span>
                    <span className="text-slate-500 group-hover:text-white transition-colors flex items-center gap-1 font-medium">
                      Estimate <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
