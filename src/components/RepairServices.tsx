import React, { useState } from 'react';
import { 
  Wrench, 
  Cpu, 
  Monitor, 
  BatteryCharging, 
  HardDrive, 
  Droplets, 
  Flame, 
  ShieldCheck, 
  Wifi, 
  Clock, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { REPAIR_SERVICES } from '../data/services';
import { RepairService } from '../types';
import { buildRepairWhatsAppUrl } from '../data/shopInfo';

interface RepairServicesProps {
  onSelectForEstimator: (serviceId: string) => void;
}

export const RepairServices: React.FC<RepairServicesProps> = ({ onSelectForEstimator }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'hardware' | 'software' | 'networking' | 'maintenance'>('all');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  // Map icon names to components
  const iconMap: Record<string, React.ElementType> = {
    Cpu,
    Monitor,
    BatteryCharging,
    HardDrive,
    Droplets,
    Flame,
    ShieldCheck,
    Wifi
  };

  const filteredServices = REPAIR_SERVICES.filter((svc) => {
    if (selectedFilter === 'all') return true;
    return svc.category === selectedFilter;
  });

  const toggleExpand = (id: string) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    <section id="repairs" className="py-16 bg-slate-950/40 light:bg-slate-50/60 border-b border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-2">
            <Wrench className="w-4 h-4" />
            <span>State-of-the-Art Repair Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Certified Laptop & Computer Servicing
          </h2>
          <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 mt-2 leading-relaxed">
            From ultrasonic liquid decontamination to component-level micro-soldering and same-day display swaps, our certified bench technicians bring your dead or slow machine back to life.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {[
            { id: 'all', label: 'All Repair Services' },
            { id: 'hardware', label: 'Hardware & Micro-Soldering' },
            { id: 'maintenance', label: 'Thermal & Cleaning' },
            { id: 'software', label: 'Software & Data Recovery' },
            { id: 'networking', label: 'Wi-Fi & Networking' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedFilter === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 light:bg-white text-slate-300 light:text-slate-700 hover:text-white border border-slate-800 light:border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.iconName] || Wrench;
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                className="flex flex-col rounded-2xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 hover:border-cyan-500/50 light:hover:border-cyan-500 shadow-md transition-all duration-300 overflow-hidden justify-between p-5"
              >
                <div>
                  {/* Top Icon & Turnaround Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 light:bg-cyan-50 border border-cyan-500/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-cyan-400 light:text-cyan-600" />
                    </div>

                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-amber-500/15 text-amber-300 px-2.5 py-1 rounded-full border border-amber-500/30">
                        <Clock className="w-3 h-3" />
                        {service.turnaroundTime.split('(')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg font-bold text-white light:text-slate-900 mb-2 leading-snug">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-300 light:text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Price Tag & Warranty */}
                  <div className="p-3 rounded-xl bg-slate-950/60 light:bg-slate-100 border border-slate-800/80 light:border-slate-200 mb-4 space-y-1">
                    <div className="text-xs font-black text-cyan-400 light:text-cyan-700">
                      {service.startingPrice}
                    </div>
                    <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {service.warranty}
                    </div>
                  </div>

                  {/* Expandable Common Symptoms Checklist */}
                  <div className="mb-4">
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="w-full flex items-center justify-between text-xs font-semibold text-slate-400 hover:text-cyan-400 py-1 cursor-pointer transition-colors"
                    >
                      <span>Common Symptoms to Watch</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-2 space-y-1.5 pt-2 border-t border-slate-800 light:border-slate-200 animate-in fade-in duration-200">
                        {service.commonSymptoms.map((symp, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300 light:text-slate-700">
                            <span className="text-rose-400 shrink-0 font-bold">•</span>
                            <span>{symp}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Row: WhatsApp Booking + Estimator shortcut */}
                <div className="pt-3 border-t border-slate-800 light:border-slate-200 space-y-2">
                  <a
                    href={buildRepairWhatsAppUrl(
                      'Laptop / Computer',
                      'General Brand',
                      `Need assistance with: ${service.title}`,
                      'Standard Service'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm shadow-emerald-500/20"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp Repair Booking</span>
                  </a>

                  <button
                    onClick={() => {
                      onSelectForEstimator(service.id);
                      const el = document.querySelector('#estimator');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2 px-3 rounded-xl bg-slate-800 light:bg-slate-100 hover:bg-slate-700 light:hover:bg-slate-200 text-slate-200 light:text-slate-800 text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Instant Price Estimate</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Emergency Diagnostics Notice Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Spilled Water or Urgent Power Loss?
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Do not plug in the charger! Power down immediately and bring your machine to our workshop bench for urgent ultrasonic rescue.
              </p>
            </div>
          </div>

          <a
            href={buildRepairWhatsAppUrl('Urgent Laptop', 'All Models', 'URGENT: Emergency liquid spill or sudden failure', 'Express Same-Day')}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-rose-600/30 transition-all shrink-0"
          >
            <Clock className="w-4 h-4" />
            <span>Emergency WhatsApp Hotline</span>
          </a>
        </div>

      </div>
    </section>
  );
};
