import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  MessageCircle, 
  Sparkles,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { FAQS, FAQItem } from '../data/faqs';
import { buildGeneralWhatsAppUrl, SHOP_INFO } from '../data/shopInfo';

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-01');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'refurbished', label: 'Refurbished Quality' },
    { id: 'warranty', label: '12-Month Warranty' },
    { id: 'repairs', label: 'Diagnostics & Repairs' },
    { id: 'upgrades', label: 'SSD / RAM Upgrades' },
    { id: 'visiting', label: 'Showroom Visit' },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    if (activeCategory !== 'all' && faq.category !== activeCategory) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 border-b border-slate-800/80 light:border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Knowledge Base & Buying Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-300 light:text-slate-600 mt-2">
            Everything you need to know about our certified refurbishment standards, warranty coverage, and repair process.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-6">
          <input
            type="text"
            placeholder="Search FAQs (e.g. warranty, water spill, cloning, visit)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900/90 light:bg-white text-slate-200 light:text-slate-800 text-sm rounded-xl pl-10 pr-4 py-3 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 shadow-sm"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
        </div>

        {/* Categories Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-sm'
                  : 'bg-slate-900/80 light:bg-white text-slate-300 light:text-slate-700 hover:text-white border border-slate-800 light:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-slate-900/80 light:bg-white border border-slate-800 light:border-slate-200 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/40 light:hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-white light:text-slate-900">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-800 light:bg-slate-100 flex items-center justify-center shrink-0 text-cyan-400">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed border-t border-slate-800/60 light:border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Card */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 text-center space-y-3 shadow-md">
          <h4 className="text-base font-bold text-white light:text-slate-900">
            Have a specific question not covered here?
          </h4>
          <p className="text-xs text-slate-400 max-w-lg mx-auto">
            Our hardware engineers and technicians are available on WhatsApp to answer questions regarding laptop compatibility, repair estimates, or inventory.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <a
              href={buildGeneralWhatsAppUrl('I have a question about laptops/repairs')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Ask a Technician on WhatsApp</span>
            </a>
            <a
              href={`tel:${SHOP_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 light:bg-slate-100 hover:bg-slate-700 text-slate-200 light:text-slate-800 text-xs font-semibold"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call Us Direct</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
