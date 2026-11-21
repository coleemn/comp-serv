import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Award, 
  Leaf, 
  Wrench, 
  CheckCircle2, 
  Sparkles, 
  Users, 
  Target,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { buildGeneralWhatsAppUrl, SHOP_INFO } from '../data/shopInfo';

export const AboutSection: React.FC = () => {
  const inspectionChecklist = [
    'Thermal performance stress-test using synthetic Cinebench & FurMark loops',
    'RAM stability validation with zero memory parity errors (MemTest86+)',
    'Battery capacity cycle analysis (all units guaranteed ≥90% OEM health)',
    'Display colorimeter audit for zero dead pixels & backlight bleed < 2%',
    'Keyboard individual switch actuation test & haptic trackpad calibration',
    'USB-C Power Delivery, HDMI, Thunderbolt, and audio jack integrity',
    'High-pressure ultrasonic de-dusting and fresh thermal repaste applied',
    'Clean, bloatware-free OS install with genuine manufacturer activation'
  ];

  return (
    <section id="about" className="py-16 bg-slate-950/40 light:bg-slate-50/50 border-b border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-xs tracking-wider uppercase">
              <Award className="w-4 h-4" />
              <span>Engineering Craftsmanship & Integrity</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
              We engineer second chances for high-end technology.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 leading-relaxed">
              Founded by systems hardware engineers, <strong className="text-white light:text-slate-900 font-bold">{SHOP_INFO.name}</strong> was created to solve two persistent frustrations in the computer market: astronomical retail prices for new electronics, and unreliable back-alley computer repairs that use low-grade clone parts.
            </p>

            <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 leading-relaxed">
              Whether you are shopping for a certified Grade A+ business ultrabook or bringing in a liquid-damaged machine that other shops declared unfixable, our cleanroom test bench and IPC-certified micro-soldering specialists deliver uncompromising quality.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={buildGeneralWhatsAppUrl('Visiting the Showroom & Meet the Team')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-cyan-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat With Our Chief Technician</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 light:bg-slate-100 hover:bg-slate-800 text-white light:text-slate-800 border border-slate-700 light:border-slate-300 text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>Visit Showroom Bench</span>
              </a>
            </div>
          </div>

          {/* Right Image / Impact Metrics (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="Nexus Computer Repair Bench Technician"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest block">
                  Precision Cleanroom Bench
                </span>
                <p className="text-xs text-slate-200 mt-0.5 font-medium">
                  ESD-safe workstations, stereoscopic inspection microscopes & thermal imaging.
                </p>
              </div>
            </div>

            {/* Impact Badges */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xl mb-1">
                  <Leaf className="w-5 h-5 text-emerald-400" />
                  <span>5,000+ kg</span>
                </div>
                <div className="text-xs text-slate-300 light:text-slate-600 font-medium">
                  E-Waste Diverted From Landfills
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xl mb-1">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  <span>100% Genuine</span>
                </div>
                <div className="text-xs text-slate-300 light:text-slate-600 font-medium">
                  OEM Certified Display & Battery Cells
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 30-Point Inspection Transparency Checklist */}
        <div className="rounded-3xl bg-slate-900/80 light:bg-white border border-slate-800 light:border-slate-200 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800 light:border-slate-200">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                <Cpu className="w-4 h-4" />
                <span>Our Quality Commitment</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white light:text-slate-900">
                The Nexus 30-Point Certified Inspection Protocol
              </h3>
            </div>
            <span className="text-xs text-slate-400 max-w-xs">
              Every refurbished device undergoes this rigorous checklist before being placed in our showroom display.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inspectionChecklist.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 light:border-slate-200"
              >
                <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 border border-cyan-500/30">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs text-slate-200 light:text-slate-800 font-medium leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
