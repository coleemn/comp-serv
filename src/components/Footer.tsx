import React from 'react';
import { 
  Laptop, 
  Wrench, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Sparkles,
  ArrowUp
} from 'lucide-react';
import { SHOP_INFO, buildGeneralWhatsAppUrl } from '../data/shopInfo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      
      {/* Top Banner */}
      <div className="border-b border-slate-800/80 py-10 bg-gradient-to-b from-slate-900/60 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-extrabold text-white">
              Ready to upgrade your computer or need expert repairs?
            </h3>
            <p className="text-slate-400 text-xs">
              Visit our digital showroom catalogue, drop by in person, or chat directly with a technician on WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#products"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition-colors"
            >
              Explore Catalogue
            </a>
            <a
              href={buildGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-md shadow-emerald-500/20 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Laptop className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                {SHOP_INFO.name}
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed pr-6">
              Modern digital showroom and engineering laboratory specializing in certified refurbished laptops, brand-new systems, component-level micro-soldering, and rapid repairs.
            </p>

            <div className="flex items-center gap-3 text-slate-300">
              <span className="inline-flex items-center gap-1.5 bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 px-2.5 py-1 rounded-md text-[11px] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                12-Month Hardware Guarantee
              </span>
            </div>
          </div>

          {/* Column 2: Showroom Laptops */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">
              Laptop Catalogue
            </h4>
            <ul className="space-y-2">
              <li><a href="#products" className="hover:text-cyan-400 transition-colors">Certified Refurbished (Grade A+)</a></li>
              <li><a href="#products" className="hover:text-cyan-400 transition-colors">Brand-New Sealed Laptops</a></li>
              <li><a href="#products" className="hover:text-cyan-400 transition-colors">Apple MacBook Pro & Air</a></li>
              <li><a href="#products" className="hover:text-cyan-400 transition-colors">Lenovo ThinkPad Ultrabooks</a></li>
              <li><a href="#products" className="hover:text-cyan-400 transition-colors">Gaming Rigs & RTX Graphics</a></li>
              <li><a href="#products" className="hover:text-cyan-400 transition-colors">Peripherals, Docks & Displays</a></li>
            </ul>
          </div>

          {/* Column 3: Repair Lab */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">
              Repair Solutions
            </h4>
            <ul className="space-y-2">
              <li><a href="#repairs" className="hover:text-cyan-400 transition-colors">Screen & Hinge Replacement</a></li>
              <li><a href="#repairs" className="hover:text-cyan-400 transition-colors">Battery & USB-C Power Jack</a></li>
              <li><a href="#repairs" className="hover:text-cyan-400 transition-colors">Liquid Spill Ultrasonic Rescue</a></li>
              <li><a href="#repairs" className="hover:text-cyan-400 transition-colors">SSD Cloning & RAM Boost</a></li>
              <li><a href="#repairs" className="hover:text-cyan-400 transition-colors">Thermal Overhaul & Repasting</a></li>
              <li><a href="#estimator" className="hover:text-cyan-400 transition-colors">Interactive Cost Estimator</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">
              Store & Workshop
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{SHOP_INFO.address.street}, {SHOP_INFO.address.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`tel:${SHOP_INFO.phoneRaw}`} className="hover:text-white">{SHOP_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={buildGeneralWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">{SHOP_INFO.whatsapp}</a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Mon-Fri: 9am-7:30pm<br />Sat: 9:30am-6pm</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {SHOP_INFO.legalName}. All rights reserved. All brand names (Apple, Dell, Lenovo, HP, ASUS) are registered trademarks of their respective owners.
          </div>

          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-400">30-Point Inspection</a>
            <a href="#repairs" className="hover:text-slate-400">Warranty Policy</a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
