import React from 'react';
import { 
  Cpu, 
  HardDrive, 
  Layers, 
  Monitor, 
  BatteryCharging, 
  MessageCircle, 
  Scale, 
  Eye, 
  Sparkles, 
  ShieldCheck, 
  Star,
  ShoppingBag,
  Check
} from 'lucide-react';
import type { Product } from '../types';
import { buildProductWhatsAppUrl } from '../data/shopInfo';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
  isCompared: boolean;
  onToggleCompare: (product: Product) => void;
  isQuoted?: boolean;
  onToggleQuote?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenModal,
  isCompared,
  onToggleCompare,
  isQuoted = false,
  onToggleQuote,
}) => {
  const discountAmount = product.originalPrice ? product.originalPrice - product.price : 0;
  const discountPercent = product.originalPrice 
    ? Math.round((discountAmount / product.originalPrice) * 100) 
    : 0;

  const isRefurbished = product.category === 'refurbished-laptops' || product.condition.includes('refurbished');

  return (
    <div className="group relative flex flex-col rounded-2xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 hover:border-cyan-500/50 light:hover:border-cyan-500 shadow-md hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden">
      
      {/* Top Image Container */}
      <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden cursor-pointer" onClick={() => onOpenModal(product)}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Condition Badge (Top Left) */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {isRefurbished ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-cyan-950/90 text-cyan-300 border border-cyan-500/40 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              {product.conditionLabel}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-indigo-950/90 text-indigo-300 border border-indigo-500/40 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              {product.conditionLabel}
            </span>
          )}

          {discountPercent > 0 && (
            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-extrabold bg-rose-600 text-white shadow-sm w-fit">
              SAVE {discountPercent}% (KSh {discountAmount.toLocaleString()})
            </span>
          )}
        </div>

        {/* Top Right Action Tools (Compare & Quote) */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          {onToggleQuote && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleQuote(product);
              }}
              title={isQuoted ? "Remove from Showroom Quote" : "Add to Showroom Quote"}
              className={`p-2 rounded-lg backdrop-blur-md transition-all cursor-pointer ${
                isQuoted
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/40'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80'
              }`}
            >
              {isQuoted ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
            </button>
          )}

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleCompare(product);
            }}
            title={isCompared ? "Remove from comparison" : "Add to side-by-side comparison"}
            className={`p-2 rounded-lg backdrop-blur-md transition-all cursor-pointer ${
              isCompared
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/40'
                : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80'
            }`}
          >
            <Scale className="w-4 h-4" />
          </button>
        </div>

        {/* In-Stock Indicator Tag (Bottom Left) */}
        <div className="absolute bottom-2.5 left-3 bg-slate-950/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-medium text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Showroom Ready</span>
        </div>
      </div>

      {/* Product Content & Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          {/* Brand & Rating Bar */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-bold uppercase tracking-wider text-cyan-400 light:text-cyan-600 text-[11px]">
              {product.brand}
            </span>
            <div className="flex items-center gap-1 text-amber-400 text-xs">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="font-semibold text-slate-200 light:text-slate-700">{product.rating}</span>
              <span className="text-slate-500 text-[11px]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onOpenModal(product)}
            className="font-bold text-base text-white light:text-slate-900 line-clamp-1 hover:text-cyan-400 light:hover:text-cyan-600 cursor-pointer transition-colors"
            title={product.title}
          >
            {product.title}
          </h3>

          {/* Core Specs Matrix Icons */}
          <div className="grid grid-cols-2 gap-2 mt-3 text-[11px]">
            {/* CPU */}
            <div className="bg-slate-950/60 light:bg-slate-100 p-2 rounded-lg border border-slate-800/80 light:border-slate-200 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="text-slate-300 light:text-slate-700 font-medium truncate">
                {product.specs.processor.split('(')[0]}
              </span>
            </div>

            {/* RAM */}
            <div className="bg-slate-950/60 light:bg-slate-100 p-2 rounded-lg border border-slate-800/80 light:border-slate-200 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span className="text-slate-300 light:text-slate-700 font-medium truncate">
                {product.specs.ram}
              </span>
            </div>

            {/* Storage */}
            <div className="bg-slate-950/60 light:bg-slate-100 p-2 rounded-lg border border-slate-800/80 light:border-slate-200 flex items-center gap-2">
              <HardDrive className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="text-slate-300 light:text-slate-700 font-medium truncate">
                {product.specs.storage.split('(')[0]}
              </span>
            </div>

            {/* Display / Battery */}
            <div className="bg-slate-950/60 light:bg-slate-100 p-2 rounded-lg border border-slate-800/80 light:border-slate-200 flex items-center gap-2">
              {product.specs.batteryHealth ? (
                <>
                  <BatteryCharging className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-emerald-400 font-medium truncate">
                    {product.specs.batteryHealth.split('(')[0]}
                  </span>
                </>
              ) : (
                <>
                  <Monitor className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="text-slate-300 light:text-slate-700 font-medium truncate">
                    {product.specs.display.split(',')[0]}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Pricing and Action Buttons */}
        <div className="pt-3 border-t border-slate-800 light:border-slate-200">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black text-white light:text-slate-900 tracking-tight">
                  KSh {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-slate-500 line-through">
                    KSh {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-cyan-400 light:text-cyan-700 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                {product.warranty.split('Nexus')[0] || '12M Warranty Included'}
              </span>
            </div>

            <button
              onClick={() => onOpenModal(product)}
              className="text-xs text-slate-300 light:text-slate-700 hover:text-cyan-400 light:hover:text-cyan-600 font-semibold flex items-center gap-1 underline underline-offset-4 cursor-pointer"
            >
              Full Specs
            </button>
          </div>

          {/* Action Row */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onOpenModal(product)}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-800 light:bg-slate-100 hover:bg-slate-700 light:hover:bg-slate-200 text-slate-200 light:text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Quick View</span>
            </button>

            <a
              href={buildProductWhatsAppUrl(
                product.title,
                product.price,
                product.conditionLabel,
                product.id
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm shadow-emerald-500/20"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
