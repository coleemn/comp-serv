import React from 'react';
import { 
  Laptop, 
  Wrench, 
  Zap, 
  ArrowRight, 
  Star,
  MessageCircle
} from 'lucide-react';
import type { Product } from '../types';
import { buildProductWhatsAppUrl, buildGeneralWhatsAppUrl } from '../data/shopInfo';

interface HeroProps {
  featuredProduct: Product;
  onOpenProductModal: (product: Product) => void;
  onBrowseLaptops: () => void;
  onGetRepairs: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  featuredProduct,
  onOpenProductModal,
  onBrowseLaptops,
  onGetRepairs,
}) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-slate-800/80 light:border-slate-200">
      {/* Background Tech Mesh and Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-cyan-500/15 via-indigo-600/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-600/10 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Value Proposition & Action CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 light:bg-slate-100 border border-cyan-500/30 text-xs font-semibold text-cyan-300 light:text-cyan-700 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Showroom Open & Active Bench Diagnostics Today</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-[1.12]">
              Next-Gen Laptops.{' '}
              <span className="block mt-1 bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Precision Repairs.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 max-w-2xl leading-relaxed">
              Explore hand-tested <strong className="text-white light:text-slate-900 font-semibold">Certified Refurbished & Brand-New Laptops</strong> backed by a genuine 12-month hardware warranty, paired with our specialized engineering lab for <strong className="text-cyan-400 light:text-cyan-700 font-semibold">same-day screen, battery, logic board, and SSD upgrades</strong>.
            </p>

            {/* Main Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onBrowseLaptops}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Laptop className="w-5 h-5 text-slate-950" />
                <span>Browse Laptops</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onGetRepairs}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/90 light:bg-slate-100 hover:bg-slate-800 light:hover:bg-slate-200 text-white light:text-slate-900 font-bold text-sm sm:text-base border border-slate-700 light:border-slate-300 hover:border-cyan-500/50 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Wrench className="w-5 h-5 text-cyan-400" />
                <span>Get Repair Services</span>
              </button>

              <a
                href={buildGeneralWhatsAppUrl('Showroom Consultation & Inquiry')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs sm:text-sm font-semibold transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-500/20" />
                <span>WhatsApp Expert</span>
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-slate-800/80 light:border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="flex items-center gap-1 text-amber-400 font-bold text-lg">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>4.9 / 5</span>
                </div>
                <div className="text-xs text-slate-400 light:text-slate-600">500+ Verified Reviews</div>
              </div>

              <div>
                <div className="text-lg font-bold text-cyan-400">12 Months</div>
                <div className="text-xs text-slate-400 light:text-slate-600">Hardware Warranty</div>
              </div>

              <div>
                <div className="text-lg font-bold text-indigo-400">10,000+</div>
                <div className="text-xs text-slate-400 light:text-slate-600">Devices Serviced</div>
              </div>

              <div>
                <div className="text-lg font-bold text-emerald-400">30-Point</div>
                <div className="text-xs text-slate-400 light:text-slate-600">Certified Inspection</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Featured Deal Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer Decorative Gradient Border Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 opacity-30 group-hover:opacity-60 blur-xl transition-all duration-500" />

              <div className="relative rounded-2xl bg-slate-900/95 light:bg-white border border-slate-700/80 light:border-slate-300 shadow-2xl overflow-hidden p-5 sm:p-6 backdrop-blur-md">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/15 text-rose-400 border border-rose-500/30">
                    <Zap className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                    Deal of the Week
                  </span>

                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    Save KSh {featuredProduct.originalPrice ? (featuredProduct.originalPrice - featuredProduct.price).toLocaleString() : '30,000'}
                  </span>
                </div>

                {/* Product Image Preview with Hover Zoom */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 mb-4 border border-slate-800">
                  <img
                    src={featuredProduct.image}
                    alt={featuredProduct.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-sm text-cyan-400 text-[11px] font-bold px-2 py-0.5 rounded border border-cyan-500/30">
                    {featuredProduct.conditionLabel}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-emerald-950/80 backdrop-blur-sm text-emerald-300 text-[11px] font-semibold px-2 py-0.5 rounded border border-emerald-500/30">
                    {featuredProduct.warranty}
                  </div>
                </div>

                {/* Title & Brand */}
                <div className="space-y-1 mb-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    {featuredProduct.brand} • Executive Flagship
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white light:text-slate-900 line-clamp-1">
                    {featuredProduct.title}
                  </h3>
                </div>

                {/* Specs Pills Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs mb-5">
                  <div className="bg-slate-950/60 light:bg-slate-100 p-2 rounded-lg border border-slate-800 light:border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Processor</span>
                    <span className="font-semibold text-slate-200 light:text-slate-800 truncate block">
                      {featuredProduct.specs.processor.split('(')[0]}
                    </span>
                  </div>

                  <div className="bg-slate-950/60 light:bg-slate-100 p-2 rounded-lg border border-slate-800 light:border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Memory & Drive</span>
                    <span className="font-semibold text-slate-200 light:text-slate-800 truncate block">
                      {featuredProduct.specs.ram.split(' ')[0]} / {featuredProduct.specs.storage.split(' ')[0]} SSD
                    </span>
                  </div>

                  <div className="bg-slate-950/60 light:bg-slate-100 p-2 rounded-lg border border-slate-800 light:border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Screen</span>
                    <span className="font-semibold text-slate-200 light:text-slate-800 truncate block">
                      {featuredProduct.specs.display.split(',')[0]}
                    </span>
                  </div>

                  <div className="bg-slate-950/60 light:bg-slate-100 p-2 rounded-lg border border-slate-800 light:border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Tested Battery</span>
                    <span className="font-semibold text-emerald-400 truncate block">
                      {featuredProduct.specs.batteryHealth || '100% Health'}
                    </span>
                  </div>
                </div>

                {/* Price & Action Row */}
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-800 light:border-slate-200">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-white light:text-slate-900">
                        KSh {featuredProduct.price.toLocaleString()}
                      </span>
                      {featuredProduct.originalPrice && (
                        <span className="text-sm text-slate-500 line-through">
                          KSh {featuredProduct.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-emerald-400 font-medium">In Showroom • 1-Day Pickup</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenProductModal(featuredProduct)}
                      className="px-3 py-2 rounded-lg bg-slate-800 light:bg-slate-200 hover:bg-slate-700 light:hover:bg-slate-300 text-xs font-semibold text-slate-200 light:text-slate-800 transition-colors cursor-pointer"
                    >
                      Quick View
                    </button>

                    <a
                      href={buildProductWhatsAppUrl(
                        featuredProduct.title,
                        featuredProduct.price,
                        featuredProduct.conditionLabel,
                        featuredProduct.id
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>WhatsApp Inquire</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
