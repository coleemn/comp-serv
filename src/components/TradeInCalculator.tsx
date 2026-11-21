import React, { useState } from 'react';
import { 
  RefreshCw, 
  Sparkles, 
  Laptop, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight, 
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { SHOP_INFO } from '../data/shopInfo';

export const TradeInCalculator: React.FC = () => {
  const [brand, setBrand] = useState('Apple');
  const [ageGroup, setAgeGroup] = useState('2021-2023');
  const [processor, setProcessor] = useState('Core i7 / Ryzen 7 / M-Series');
  const [condition, setCondition] = useState('good');
  const [hasCharger, setHasCharger] = useState(true);

  // Dynamic Valuation algorithm in Kenyan Shillings
  const baseValues: Record<string, number> = {
    Apple: 45000,
    Dell: 32000,
    Lenovo: 30000,
    HP: 28000,
    ASUS: 30000,
    Other: 22000,
  };

  const ageMultiplier: Record<string, number> = {
    '2024-2025': 1.45,
    '2021-2023': 1.1,
    '2018-2020': 0.75,
    'Pre-2018': 0.45,
  };

  const processorBonus: Record<string, number> = {
    'Apple Silicon (M1/M2/M3/M4)': 15000,
    'Core i7 / Ryzen 7 / M-Series': 10000,
    'Core i9 / Ryzen 9': 18000,
    'Core i5 / Ryzen 5': 4000,
    'Core i3 / Celeron / Entry': -4000,
  };

  const conditionMultiplier: Record<string, number> = {
    flawless: 1.15,
    good: 1.0,
    cracked: 0.6,
    dead: 0.35,
  };

  const calcBase = (baseValues[brand] || 25000) * (ageMultiplier[ageGroup] || 1.0);
  const procAdd = processorBonus[processor] || 0;
  const chargerAdd = hasCharger ? 2500 : 0;
  const condMult = conditionMultiplier[condition] || 1.0;

  const estimatedValue = Math.max(5000, Math.round((calcBase + procAdd + chargerAdd) * condMult));

  const conditionLabels: Record<string, string> = {
    flawless: 'Flawless (Grade A - No scratches, original screen)',
    good: 'Good Working Condition (Light wear, minor scuffs)',
    cracked: 'Cracked Screen or Broken Keyboard',
    dead: 'Not Turning On / Heavy Damage / Liquid Spill',
  };

  const whatsappTradeUrl = `https://wa.me/${SHOP_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Nexus Computers Kenya! 🔄\n\nI used your Trade-In Calculator on the website:\n• *Brand:* ${brand}\n• *Year/Age:* ${ageGroup}\n• *Processor:* ${processor}\n• *Condition:* ${conditionLabels[condition]}\n• *Charger Included:* ${hasCharger ? 'Yes' : 'No'}\n• *Estimated Value:* KSh ${estimatedValue.toLocaleString()} - KSh ${(estimatedValue + 5000).toLocaleString()}\n\nI would like to trade this in for store credit toward a showroom laptop or cash/M-Pesa buyout. Can I send photos for appraisal? Asante!`
  )}`;

  return (
    <section id="tradein" className="py-16 bg-slate-950/60 light:bg-slate-50 border-b border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-2">
            <RefreshCw className="w-4 h-4" />
            <span>Instant Trade-In Valuation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Trade-In or Sell Your Old Laptop
          </h2>
          <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 mt-2">
            Upgrade to a certified refurbished or new laptop for less. Get an instant valuation below and apply your credit right in our showroom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 p-6 sm:p-8 shadow-xl space-y-6">
            
            {/* Step 1: Brand */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-600 mb-2">
                1. Select Brand
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {['Apple', 'Dell', 'Lenovo', 'HP', 'ASUS', 'Other'].map((b) => (
                  <button
                    key={b}
                    onClick={() => setBrand(b)}
                    className={`p-2.5 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer ${
                      brand === b
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20'
                        : 'bg-slate-950/60 light:bg-slate-100 text-slate-300 light:text-slate-700 border-slate-800 light:border-slate-300 hover:border-slate-600'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Year / Era */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-600 mb-2">
                2. Approximate Age / Purchase Year
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['2024-2025', '2021-2023', '2018-2020', 'Pre-2018'].map((y) => (
                  <button
                    key={y}
                    onClick={() => setAgeGroup(y)}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold text-center border transition-all cursor-pointer ${
                      ageGroup === y
                        ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                        : 'bg-slate-950/60 light:bg-slate-100 text-slate-300 light:text-slate-700 border-slate-800 light:border-slate-300'
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Processor */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-600 mb-2">
                3. Processor Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Apple Silicon (M1/M2/M3/M4)',
                  'Core i7 / Ryzen 7 / M-Series',
                  'Core i9 / Ryzen 9',
                  'Core i5 / Ryzen 5',
                  'Core i3 / Celeron / Entry',
                ].map((proc) => (
                  <button
                    key={proc}
                    onClick={() => setProcessor(proc)}
                    className={`p-2.5 rounded-xl text-left border text-xs font-semibold transition-all cursor-pointer ${
                      processor === proc
                        ? 'bg-cyan-500/10 border-cyan-400 text-cyan-300 light:text-cyan-700'
                        : 'bg-slate-950/60 light:bg-slate-100 text-slate-300 light:text-slate-700 border-slate-800 light:border-slate-300'
                    }`}
                  >
                    {proc}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Condition */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-600 mb-2">
                4. Physical Condition
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: 'flawless', label: 'Flawless (Grade A - Like New)' },
                  { id: 'good', label: 'Good (Minor scratches, functional)' },
                  { id: 'cracked', label: 'Broken Screen or Damaged Hinge' },
                  { id: 'dead', label: 'Won\'t Power On or Liquid Damage' },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCondition(c.id)}
                    className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all cursor-pointer ${
                      condition === c.id
                        ? 'bg-amber-500/10 border-amber-400 text-amber-300 light:text-amber-700'
                        : 'bg-slate-950/60 light:bg-slate-100 text-slate-300 light:text-slate-700 border-slate-800 light:border-slate-300'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Charger checkbox */}
            <div className="flex items-center gap-3 pt-2">
              <label className="relative flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-300 light:text-slate-700">
                <input
                  type="checkbox"
                  checked={hasCharger}
                  onChange={(e) => setHasCharger(e.target.checked)}
                  className="w-4 h-4 rounded accent-cyan-500 cursor-pointer"
                />
                <span>Includes Original Working Charger / Power Adapter (+KSh 2,500 Value)</span>
              </label>
            </div>

          </div>

          {/* Right Valuation Output Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-indigo-500/40 p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 light:border-slate-300">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Estimated Trade-In Value
                </span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Instant Showroom Credit
                </span>
              </div>

              {/* Price display */}
              <div className="p-5 rounded-2xl bg-slate-950/80 light:bg-white border border-slate-800 light:border-slate-200 text-center">
                <span className="text-xs text-slate-400 block font-medium">Estimated Value:</span>
                <div className="text-3xl sm:text-4xl font-black text-white light:text-slate-900 my-2">
                  KSh {estimatedValue.toLocaleString()} <span className="text-lg text-slate-400 font-normal">– KSh {(estimatedValue + 5000).toLocaleString()}</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-semibold block">
                  Applicable as immediate credit toward any laptop in our showroom!
                </span>
              </div>

              {/* Summary pills */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Selected Model:</span>
                  <span className="font-bold text-white light:text-slate-900">{brand} ({ageGroup})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Condition:</span>
                  <span className="font-bold text-amber-400">{conditionLabels[condition].split('(')[0]}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Payout Option:</span>
                  <span className="font-bold text-emerald-400">Immediate Store Credit or Direct Cash</span>
                </div>
              </div>

              {/* WhatsApp Action Button */}
              <a
                href={whatsappTradeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/25 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Submit Details & Photos via WhatsApp</span>
              </a>

              <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                Bring your laptop to our physical showroom for a 10-minute on-the-spot hardware inspection and immediate payout.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
