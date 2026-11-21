import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Navigation,
  Sparkles,
  HelpCircle,
  Building
} from 'lucide-react';
import { SHOP_INFO, buildGeneralWhatsAppUrl } from '../data/shopInfo';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    contact: '',
    serviceType: 'laptop-purchase',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.contact) return;
    setSubmitted(true);
  };

  const handleCopyAddress = () => {
    const fullAddress = `${SHOP_INFO.address.street}, ${SHOP_INFO.address.suite}, ${SHOP_INFO.address.city}, ${SHOP_INFO.address.state} ${SHOP_INFO.address.zip}`;
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 border-b border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-2">
            <Building className="w-4 h-4" />
            <span>Showroom & Laboratory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Visit Our Showroom or Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 mt-2">
            Walk-ins are always welcome for on-the-spot bench evaluations, laptop hands-on testing, and express diagnostics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Business Details & Location Map Card (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Showroom Location Card */}
            <div className="rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 p-6 sm:p-8 shadow-xl space-y-6">
              
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white light:text-slate-900">
                      Physical Showroom & Repair Lab
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 mt-1">
                      {SHOP_INFO.address.street}<br />
                      {SHOP_INFO.address.suite}<br />
                      {SHOP_INFO.address.city}, {SHOP_INFO.address.state} {SHOP_INFO.address.zip}
                    </p>
                    <span className="text-[11px] text-cyan-400 light:text-cyan-600 block mt-1 font-medium">
                      📍 {SHOP_INFO.address.landmarks}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="p-2.5 rounded-xl bg-slate-800 light:bg-slate-100 hover:bg-slate-700 text-xs font-semibold text-slate-300 light:text-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                  title="Copy full address to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Operating Hours */}
              <div className="p-4 rounded-2xl bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 light:border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wide">
                  <Clock className="w-4 h-4" />
                  <span>Showroom & Bench Operating Hours</span>
                </div>
                <div className="space-y-1 text-xs text-slate-300 light:text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Monday – Friday:</span>
                    <span className="font-semibold text-white light:text-slate-900">{SHOP_INFO.hours.weekdays.replace('Monday – Friday: ', '')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Saturday:</span>
                    <span className="font-semibold text-white light:text-slate-900">{SHOP_INFO.hours.saturday.replace('Saturday: ', '')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Sunday:</span>
                    <span className="font-semibold text-emerald-400">{SHOP_INFO.hours.sunday.replace('Sunday: ', '')}</span>
                  </div>
                </div>
              </div>

              {/* Direct Hotlines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${SHOP_INFO.phoneRaw}`}
                  className="p-4 rounded-xl bg-slate-950/80 light:bg-slate-100 border border-slate-800 light:border-slate-300 hover:border-cyan-500/50 flex items-center gap-3 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Telephone</span>
                    <span className="text-xs font-bold text-white light:text-slate-900">{SHOP_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={buildGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-emerald-950/30 light:bg-emerald-50 border border-emerald-500/40 hover:border-emerald-400 flex items-center gap-3 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-400 uppercase font-bold block">WhatsApp Line</span>
                    <span className="text-xs font-bold text-emerald-300 light:text-emerald-800">{SHOP_INFO.whatsapp}</span>
                  </div>
                </a>
              </div>

              {/* Simulated Interactive Map Display */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
                {/* Clean map preview background */}
                <div 
                  className="w-full h-full bg-cover bg-center opacity-80"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80')`
                  }}
                />
                
                {/* Pin Overlay */}
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex flex-col items-center justify-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-bounce">
                    <MapPin className="w-6 h-6 fill-current" />
                  </div>
                  <h4 className="text-sm font-bold text-white mt-2">
                    {SHOP_INFO.name}
                  </h4>
                  <p className="text-xs text-slate-300 max-w-xs mt-0.5">
                    {SHOP_INFO.address.street}, {SHOP_INFO.address.city}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(`${SHOP_INFO.name} ${SHOP_INFO.address.street} ${SHOP_INFO.address.city}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors shadow-sm"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Consultation & Enquiry Form (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 p-6 sm:p-8 shadow-xl">
            
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Direct Inquiries
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white light:text-slate-900 mt-1">
                Send an Online Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 mt-1">
                Fill in your contact information below. Our technical team responds within 1 hour during store hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  Inquiry Received!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formState.name}</strong>. A Nexus technician will review your request and contact you via <strong className="text-cyan-400">{formState.contact}</strong> promptly.
                </p>
                <div className="pt-2">
                  <a
                    href={buildGeneralWhatsAppUrl(`Follow-up from website: ${formState.name} - ${formState.message}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Speed up: Message on WhatsApp now</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-600 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-slate-950/80 light:bg-slate-50 text-slate-200 light:text-slate-800 text-sm rounded-xl px-4 py-3 border border-slate-700/80 light:border-slate-300 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-600 mb-1.5">
                    Phone / WhatsApp Number or Email *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. +1 (555) 000-0000 or email@domain.com"
                    value={formState.contact}
                    onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                    className="w-full bg-slate-950/80 light:bg-slate-50 text-slate-200 light:text-slate-800 text-sm rounded-xl px-4 py-3 border border-slate-700/80 light:border-slate-300 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-600 mb-1.5">
                    Nature of Inquiry
                  </label>
                  <select
                    value={formState.serviceType}
                    onChange={(e) => setFormState({ ...formState, serviceType: e.target.value })}
                    className="w-full bg-slate-950/80 light:bg-slate-50 text-slate-200 light:text-slate-800 text-sm rounded-xl px-4 py-3 border border-slate-700/80 light:border-slate-300 focus:outline-none focus:border-cyan-400 cursor-pointer"
                  >
                    <option value="laptop-purchase">Laptops & Showroom Demo Availability</option>
                    <option value="hardware-repair">Hardware Repair / Screen / Battery</option>
                    <option value="ram-ssd-upgrade">SSD Cloning & RAM Speed Upgrade</option>
                    <option value="liquid-damage">Urgent Liquid Spill Recovery</option>
                    <option value="networking">Wi-Fi & Office Network Solutions</option>
                    <option value="other">General Technical Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-600 mb-1.5">
                    Message / Laptop Model / Issue Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide any details such as computer brand, symptoms, or which laptop from our catalogue you'd like reserved..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-slate-950/80 light:bg-slate-50 text-slate-200 light:text-slate-800 text-sm rounded-xl px-4 py-3 border border-slate-700/80 light:border-slate-300 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>

                <div className="text-center pt-2">
                  <span className="text-[11px] text-slate-500">
                    Need an immediate reply? You can also message directly on WhatsApp ({SHOP_INFO.whatsapp}).
                  </span>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
