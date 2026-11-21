import React from 'react';
import { ShieldCheck, Cpu, Clock, CheckCircle2, Award, Sparkles, RefreshCw } from 'lucide-react';

export const BenefitsBar: React.FC = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: '12-Month Guarantee',
      desc: 'All certified refurbished & new machines backed by complete parts & labor coverage.',
      color: 'text-cyan-400',
      border: 'border-cyan-500/20',
      bg: 'bg-cyan-500/5',
    },
    {
      icon: Cpu,
      title: '30-Point Certified Bench Test',
      desc: 'Sustained thermal stress testing, battery health certification & MemTest86 validation.',
      color: 'text-indigo-400',
      border: 'border-indigo-500/20',
      bg: 'bg-indigo-500/5',
    },
    {
      icon: Clock,
      title: 'Same-Day Diagnostics',
      desc: 'No-nonsense diagnostic reports & itemized quotes before any repair work starts.',
      color: 'text-amber-400',
      border: 'border-amber-500/20',
      bg: 'bg-amber-500/5',
    },
    {
      icon: RefreshCw,
      title: 'Eco-Smart Refurbishment',
      desc: 'Extending computer lifespan and saving up to 60% compared to MSRP without compromise.',
      color: 'text-emerald-400',
      border: 'border-emerald-500/20',
      bg: 'bg-emerald-500/5',
    },
  ];

  return (
    <section className="py-10 bg-slate-950/60 light:bg-slate-50 border-b border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl bg-slate-900/60 light:bg-white border ${item.border} backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-base font-bold text-white light:text-slate-900 mb-1.5 flex items-center gap-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 light:text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
