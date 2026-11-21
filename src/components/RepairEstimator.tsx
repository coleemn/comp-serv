import React, { useState } from 'react';
import { 
  Calculator, 
  Laptop, 
  Wrench, 
  Clock, 
  ShieldCheck, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2, 
  Phone,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { COMMON_REPAIR_ISSUES } from '../data/services';
import { buildRepairWhatsAppUrl, SHOP_INFO } from '../data/shopInfo';

export const RepairEstimator: React.FC = () => {
  const [deviceType, setDeviceType] = useState<string>('Laptop (Windows)');
  const [brand, setBrand] = useState<string>('Dell');
  const [selectedIssueId, setSelectedIssueId] = useState<string>('screen');
  const [urgency, setUrgency] = useState<'Standard' | 'Express'>('Standard');
  const [customerNotes, setCustomerNotes] = useState<string>('');

  const deviceTypes = [
    'Laptop (Windows)',
    'Apple MacBook (Pro/Air)',
    'Desktop PC / Tower',
    'Custom Gaming PC'
  ];

  const brands = [
    'Dell',
    'Apple',
    'Lenovo',
    'HP',
    'ASUS',
    'Acer',
    'Microsoft Surface',
    'Other / Custom'
  ];

  const currentIssue = COMMON_REPAIR_ISSUES.find((i) => i.id === selectedIssueId) || COMMON_REPAIR_ISSUES[0];

  // Dynamic estimate calculation
  const isMac = deviceType.includes('Apple') || brand === 'Apple';
  const baseCost = currentIssue.basePrice + (isMac ? 2500 : 0);
  const urgencyMultiplier = urgency === 'Express' ? 1.25 : 1;
  const estimatedCost = Math.round(baseCost * urgencyMultiplier);

  const turnaroundTime = urgency === 'Express' ? 'Same-Day (2-4 hrs)' : currentIssue.estTime;

  const whatsappMessageUrl = buildRepairWhatsAppUrl(
    deviceType,
    brand,
    `${currentIssue.label} ${customerNotes ? `(Notes: ${customerNotes})` : ''}`,
    urgency === 'Express' ? 'Express Same-Day' : 'Standard Turnaround'
  );

  return (
    <section id="estimator" className="py-16 border-b border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-2">
            <Calculator className="w-4 h-4" />
            <span>Instant Cost Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Repair Cost Estimator & WhatsApp Booking
          </h2>
          <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 mt-2">
            Get an instant transparent estimate for your repair and submit your booking directly to our bench technicians on WhatsApp.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form Selection (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 p-6 sm:p-8 shadow-xl space-y-6">
            
            {/* Step 1: Device Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-600 mb-2">
                1. Select Device Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {deviceTypes.map((dt) => (
                  <button
                    key={dt}
                    onClick={() => setDeviceType(dt)}
                    className={`p-3 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer ${
                      deviceType === dt
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20'
                        : 'bg-slate-950/60 light:bg-slate-100 text-slate-300 light:text-slate-700 border-slate-800 light:border-slate-300 hover:border-slate-600'
                    }`}
                  >
                    {dt}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Brand */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-600 mb-2">
                2. Select Brand / Manufacturer
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {brands.map((b) => (
                  <button
                    key={b}
                    onClick={() => setBrand(b)}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold text-center border transition-all cursor-pointer ${
                      brand === b
                        ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                        : 'bg-slate-950/60 light:bg-slate-100 text-slate-300 light:text-slate-700 border-slate-800 light:border-slate-300 hover:text-white'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Issue */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-600 mb-2">
                3. What issue are you experiencing?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {COMMON_REPAIR_ISSUES.map((issue) => (
                  <button
                    key={issue.id}
                    onClick={() => setSelectedIssueId(issue.id)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                      selectedIssueId === issue.id
                        ? 'bg-cyan-500/10 border-cyan-400 text-cyan-300 light:text-cyan-700 shadow-inner'
                        : 'bg-slate-950/60 light:bg-slate-100 text-slate-300 light:text-slate-700 border-slate-800 light:border-slate-300 hover:border-slate-600'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-xs block">{issue.label}</span>
                      <span className="text-[10px] text-slate-500">{issue.category}</span>
                    </div>
                    <span className="text-[11px] font-semibold text-cyan-400 shrink-0">
                      ~KSh {issue.basePrice.toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Urgency & Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800 light:border-slate-200">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-600 mb-2">
                  Service Speed
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setUrgency('Standard')}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      urgency === 'Standard'
                        ? 'bg-slate-800 light:bg-slate-200 text-cyan-400 border-cyan-400/50'
                        : 'bg-slate-950/60 light:bg-slate-100 text-slate-400 border-slate-800'
                    }`}
                  >
                    Standard Service
                  </button>
                  <button
                    onClick={() => setUrgency('Express')}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      urgency === 'Express'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-sm'
                        : 'bg-slate-950/60 light:bg-slate-100 text-slate-400 border-slate-800'
                    }`}
                  >
                    ⚡ Express Same-Day
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-600 mb-2">
                  Additional Notes (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Model XPS 13, coffee spill yesterday"
                  value={customerNotes}
                  onChange={(e) => setCustomerNotes(e.target.value)}
                  className="w-full bg-slate-950/80 light:bg-slate-100 text-slate-200 light:text-slate-800 text-xs rounded-xl px-3 py-2 border border-slate-700/80 light:border-slate-300 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

          </div>

          {/* Right Summary & WhatsApp Direct Booking Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 light:border-slate-300">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Estimate Breakdown
                </span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Free Diagnostic with Repair
                </span>
              </div>

              {/* Selected Specs pill summary */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Device:</span>
                  <span className="font-bold text-white light:text-slate-900">{brand} • {deviceType}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Issue:</span>
                  <span className="font-bold text-cyan-400">{currentIssue.label}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Turnaround Speed:</span>
                  <span className="font-bold text-amber-400">{turnaroundTime}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Hardware Warranty:</span>
                  <span className="font-bold text-emerald-400">12 Months Full Coverage</span>
                </div>
              </div>

              {/* Estimated Price Display */}
              <div className="p-4 rounded-2xl bg-slate-950/80 light:bg-white border border-slate-800 light:border-slate-200 text-center">
                <span className="text-xs text-slate-400 block font-medium">Estimated Starting Range</span>
                <div className="text-3xl sm:text-4xl font-black text-white light:text-slate-900 my-1">
                  KSh {estimatedCost.toLocaleString()} – KSh {(estimatedCost + 3000).toLocaleString()}
                </div>
                <span className="text-[11px] text-slate-400 block">
                  *Final price confirmed after free bench diagnostic check.
                </span>
              </div>

              {/* Big WhatsApp CTA Button */}
              <a
                href={whatsappMessageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/25 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Book Diagnostic on WhatsApp</span>
              </a>

              {/* Call telephone alternative */}
              <div className="text-center pt-2">
                <span className="text-xs text-slate-400 block mb-1">Prefer to speak with an engineer?</span>
                <a
                  href={`tel:${SHOP_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Showroom Direct: {SHOP_INFO.phone}</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
