import React, { useState, useEffect } from 'react';
import { 
  X, 
  MessageCircle, 
  ShieldCheck, 
  Check, 
  Sparkles, 
  Package, 
  CheckCircle2, 
  Calendar,
  ShoppingBag
} from 'lucide-react';
import type { Product } from '../types';
import { buildProductWhatsAppUrl, SHOP_INFO } from '../data/shopInfo';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  isCompared: boolean;
  onToggleCompare: (product: Product) => void;
  isQuoted?: boolean;
  onToggleQuote?: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  isCompared,
  onToggleCompare,
  isQuoted = false,
  onToggleQuote,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  if (!product) return null;

  const isRefurb = product.condition.includes('refurbished');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 light:bg-white border border-slate-800 light:border-slate-300 shadow-2xl p-5 sm:p-8 z-10 text-slate-100 light:text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-slate-800/80 light:bg-slate-100 hover:bg-slate-700 text-slate-300 light:text-slate-700 transition-colors cursor-pointer z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Image Gallery & Inspection Badges (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
              <img
                src={selectedImage || product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-sm text-cyan-400 text-xs font-bold px-2.5 py-1 rounded-md border border-cyan-500/30">
                {product.conditionLabel}
              </div>
            </div>

            {/* Thumbnail Switcher */}
            {product.galleryImages && product.galleryImages.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {product.galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                      selectedImage === img
                        ? 'border-cyan-400 scale-105'
                        : 'border-slate-800 hover:border-slate-600 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* 30-Point Refurbishment / Quality Report Card */}
            {isRefurb && product.refurbInspectionPoints && (
              <div className="p-4 rounded-xl bg-slate-950/70 light:bg-slate-50 border border-slate-800 light:border-slate-200 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 light:text-cyan-600 uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4" />
                  <span>30-Point Inspection Verified</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-300 light:text-slate-700">
                  {product.refurbInspectionPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Included in Box */}
            <div className="p-4 rounded-xl bg-slate-950/70 light:bg-slate-50 border border-slate-800 light:border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wide mb-2">
                <Package className="w-4 h-4" />
                <span>What's In The Box</span>
              </div>
              <ul className="text-xs text-slate-300 light:text-slate-700 space-y-1">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{product.title}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Original High-Speed OEM AC Adapter / GaN Charger</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Nexus Certified 12-Month Hardware Guarantee Certificate</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Protective Microfiber Sleeve & Setup Quickstart</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Title, Specs, Description & Action Buttons (7 cols) */}
          <div className="md:col-span-7 space-y-5">
            
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-extrabold uppercase tracking-widest text-cyan-400">
                  {product.brand}
                </span>
                <span className="text-slate-400">SKU Ref: #{product.id}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900 leading-snug">
                {product.title}
              </h2>
              <p className="text-xs text-emerald-400 font-semibold mt-1">
                {product.warranty}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-2xl bg-slate-950/80 light:bg-slate-100 border border-slate-800 light:border-slate-300 flex items-center justify-between flex-wrap gap-3">
              <div>
                <span className="text-xs text-slate-400 block font-medium">Showroom Price:</span>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-black text-white light:text-slate-900">
                    KSh {product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-slate-500 line-through">
                      KSh {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                      Save KSh {(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  )}
                </div>
              </div>

              <div className="text-right">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Ready for In-Store Demo
                </span>
                <span className="text-[11px] text-slate-400 block">Or reserve via WhatsApp</span>
              </div>
            </div>

            {/* Product Overview Text */}
            <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
              {product.description}
            </p>

            {/* Full Technical Specifications Matrix */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-600 mb-2.5">
                Technical Specifications
              </h4>
              <div className="rounded-xl border border-slate-800 light:border-slate-200 overflow-hidden divide-y divide-slate-800 light:divide-slate-200 text-xs">
                
                <div className="grid grid-cols-3 p-2.5 bg-slate-950/40 light:bg-slate-50">
                  <span className="font-semibold text-slate-400">Processor (CPU)</span>
                  <span className="col-span-2 text-slate-200 light:text-slate-800 font-medium">
                    {product.specs.processor}
                  </span>
                </div>

                <div className="grid grid-cols-3 p-2.5 bg-slate-900/50 light:bg-white">
                  <span className="font-semibold text-slate-400">Memory (RAM)</span>
                  <span className="col-span-2 text-slate-200 light:text-slate-800 font-medium">
                    {product.specs.ram}
                  </span>
                </div>

                <div className="grid grid-cols-3 p-2.5 bg-slate-950/40 light:bg-slate-50">
                  <span className="font-semibold text-slate-400">Storage (SSD)</span>
                  <span className="col-span-2 text-slate-200 light:text-slate-800 font-medium">
                    {product.specs.storage}
                  </span>
                </div>

                <div className="grid grid-cols-3 p-2.5 bg-slate-900/50 light:bg-white">
                  <span className="font-semibold text-slate-400">Display & Panel</span>
                  <span className="col-span-2 text-slate-200 light:text-slate-800 font-medium">
                    {product.specs.display}
                  </span>
                </div>

                <div className="grid grid-cols-3 p-2.5 bg-slate-950/40 light:bg-slate-50">
                  <span className="font-semibold text-slate-400">Graphics (GPU)</span>
                  <span className="col-span-2 text-slate-200 light:text-slate-800 font-medium">
                    {product.specs.graphics}
                  </span>
                </div>

                {product.specs.batteryHealth && (
                  <div className="grid grid-cols-3 p-2.5 bg-slate-900/50 light:bg-white">
                    <span className="font-semibold text-slate-400">Battery Health</span>
                    <span className="col-span-2 text-emerald-400 font-bold">
                      {product.specs.batteryHealth}
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-3 p-2.5 bg-slate-950/40 light:bg-slate-50">
                  <span className="font-semibold text-slate-400">Operating System</span>
                  <span className="col-span-2 text-slate-200 light:text-slate-800 font-medium">
                    {product.specs.os}
                  </span>
                </div>

                {product.specs.ports && product.specs.ports.length > 0 && (
                  <div className="grid grid-cols-3 p-2.5 bg-slate-900/50 light:bg-white">
                    <span className="font-semibold text-slate-400">Ports & I/O</span>
                    <span className="col-span-2 text-slate-200 light:text-slate-800 font-medium">
                      {product.specs.ports.join(' • ')}
                    </span>
                  </div>
                )}

              </div>
            </div>

            {/* Key Features Bullet List */}
            {product.keyFeatures && (
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-600">
                  Highlights
                </h4>
                <ul className="text-xs text-slate-300 light:text-slate-700 space-y-1">
                  {product.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Direct Action Row: WhatsApp Reservation + Compare Button + Quote Button */}
            <div className="pt-4 border-t border-slate-800 light:border-slate-200 flex flex-col sm:flex-row items-center gap-2.5">
              <a
                href={buildProductWhatsAppUrl(
                  product.title,
                  product.price,
                  product.conditionLabel,
                  product.id
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/25"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Pre-Filled Inquiry</span>
              </a>

              {onToggleQuote && (
                <button
                  onClick={() => onToggleQuote(product)}
                  className={`w-full sm:w-auto py-3 px-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                    isQuoted
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                      : 'bg-slate-800 light:bg-slate-100 hover:bg-slate-700 text-slate-200 light:text-slate-800 border-slate-700'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{isQuoted ? 'In Showroom Quote' : 'Add to Quote'}</span>
                </button>
              )}

              <button
                onClick={() => onToggleCompare(product)}
                className={`w-full sm:w-auto py-3 px-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                  isCompared
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                    : 'bg-slate-800 light:bg-slate-100 hover:bg-slate-700 text-slate-200 light:text-slate-800 border-slate-700'
                }`}
              >
                <span>{isCompared ? 'In Compare List' : 'Compare'}</span>
              </button>
            </div>

            {/* Store visit notice */}
            <div className="flex items-center gap-2 text-[11px] text-slate-400 light:text-slate-600 bg-slate-950/40 light:bg-slate-100 p-2.5 rounded-lg border border-slate-800/80 light:border-slate-200">
              <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>
                Want to test before purchasing? Visit our physical showroom at {SHOP_INFO.address.street} during regular hours.
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
