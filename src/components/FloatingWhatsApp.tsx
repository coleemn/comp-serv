import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send, PhoneCall } from 'lucide-react';
import { SHOP_INFO, buildGeneralWhatsAppUrl } from '../data/shopInfo';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Floating Popup Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-2xl bg-slate-900/98 light:bg-white border border-emerald-500/40 shadow-2xl p-4 text-slate-100 light:text-slate-900 animate-in slide-in-from-bottom-3 duration-200 backdrop-blur-md">
          
          {/* Card Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 light:border-slate-200">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xs">
                <MessageCircle className="w-4 h-4 fill-current" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-300 ring-2 ring-slate-950 animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white light:text-slate-900">
                  Nexus Showroom Desk
                </h4>
                <span className="text-[10px] text-emerald-400 font-medium">Online • Typical reply &lt; 5 mins</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Prompts */}
          <div className="py-3 space-y-2">
            <p className="text-xs text-slate-300 light:text-slate-600">
              Welcome to {SHOP_INFO.name}! How can our hardware team assist you today?
            </p>

            <div className="space-y-1.5 pt-1">
              <a
                href={buildGeneralWhatsAppUrl('I would like to check current laptop showroom inventory')}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 rounded-lg bg-slate-950/60 light:bg-slate-100 hover:bg-slate-800 text-xs text-slate-300 light:text-slate-700 hover:text-cyan-400 transition-colors border border-slate-800 light:border-slate-300 font-medium"
              >
                💻 Check laptop inventory in-store
              </a>

              <a
                href={buildGeneralWhatsAppUrl('I need to book a diagnostic for my broken computer')}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 rounded-lg bg-slate-950/60 light:bg-slate-100 hover:bg-slate-800 text-xs text-slate-300 light:text-slate-700 hover:text-cyan-400 transition-colors border border-slate-800 light:border-slate-300 font-medium"
              >
                🔧 Book a repair diagnostic slot
              </a>

              <a
                href={buildGeneralWhatsAppUrl('I want to upgrade my laptop RAM and SSD')}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 rounded-lg bg-slate-950/60 light:bg-slate-100 hover:bg-slate-800 text-xs text-slate-300 light:text-slate-700 hover:text-cyan-400 transition-colors border border-slate-800 light:border-slate-300 font-medium"
              >
                ⚡ Get a quote for SSD / RAM upgrade
              </a>
            </div>
          </div>

          {/* Action button */}
          <a
            href={buildGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md shadow-emerald-500/25"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Open Direct WhatsApp Chat</span>
          </a>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-xl shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-cyan-400 animate-ping pointer-events-none" />
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden sm:inline text-xs font-extrabold tracking-wide">
          WhatsApp Us
        </span>
      </button>

    </div>
  );
};
