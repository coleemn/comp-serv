import React from 'react';
import { 
  X, 
  Scale, 
  MessageCircle, 
  Trash2
} from 'lucide-react';
import type { Product } from '../types';
import { buildProductWhatsAppUrl } from '../data/shopInfo';

interface CompareDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  comparedProducts: Product[];
  onRemoveFromCompare: (productId: string) => void;
  onClearAll: () => void;
  onOpenProductModal: (product: Product) => void;
}

export const CompareDrawer: React.FC<CompareDrawerProps> = ({
  isOpen,
  onClose,
  comparedProducts,
  onRemoveFromCompare,
  onClearAll,
  onOpenProductModal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click outside */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 light:bg-white border border-slate-800 light:border-slate-300 shadow-2xl p-5 sm:p-8 z-10 text-slate-100 light:text-slate-900">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800 light:border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white light:text-slate-900">
                Side-by-Side Laptop Comparison
              </h2>
              <p className="text-xs text-slate-400 light:text-slate-600">
                Comparing {comparedProducts.length} model{comparedProducts.length > 1 ? 's' : ''} (up to 3)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {comparedProducts.length > 0 && (
              <button
                onClick={onClearAll}
                className="px-3 py-1.5 rounded-lg bg-slate-800 light:bg-slate-100 hover:bg-rose-950/40 text-xs font-semibold text-rose-400 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 light:bg-slate-100 hover:bg-slate-700 text-slate-300 light:text-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        {comparedProducts.length === 0 ? (
          <div className="py-16 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white light:text-slate-900">
              No laptops selected for comparison
            </h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Click the scale icon (<Scale className="w-3.5 h-3.5 inline text-cyan-400" />) on any product card in the catalogue to add it here.
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
            >
              Browse Catalogue
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-800 light:border-slate-200">
                  <th className="p-3 text-xs font-bold text-slate-400 w-1/4">Specification</th>
                  {comparedProducts.map((p) => (
                    <th key={p.id} className="p-3 w-1/4 align-top">
                      <div className="space-y-2">
                        <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-950 border border-slate-800">
                          <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                          <button
                            onClick={() => onRemoveFromCompare(p.id)}
                            title="Remove"
                            className="absolute top-1 right-1 p-1 rounded-md bg-slate-950/80 text-slate-400 hover:text-rose-400"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <h4 
                          onClick={() => {
                            onClose();
                            onOpenProductModal(p);
                          }}
                          className="font-bold text-sm text-white light:text-slate-900 line-clamp-2 hover:text-cyan-400 cursor-pointer"
                        >
                          {p.title}
                        </h4>
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-black text-cyan-400">
                            KSh {p.price.toLocaleString()}
                          </span>
                          {p.originalPrice && (
                            <span className="text-xs text-slate-500 line-through">
                              KSh {p.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        <a
                          href={buildProductWhatsAppUrl(p.title, p.price, p.conditionLabel, p.id)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-current" />
                          <span>WhatsApp Inquire</span>
                        </a>
                      </div>
                    </th>
                  ))}
                  {/* Empty slots placeholders if fewer than 3 */}
                  {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => (
                    <th key={i} className="p-3 w-1/4 align-middle text-center bg-slate-950/20 light:bg-slate-50/50 rounded-lg border border-dashed border-slate-800 light:border-slate-300">
                      <div className="text-xs text-slate-500 py-12">
                        + Add another laptop to compare
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 light:divide-slate-200 text-xs">
                
                <tr>
                  <td className="p-3 font-semibold text-slate-400 bg-slate-950/30 light:bg-slate-50">Condition & Grade</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 font-medium text-slate-200 light:text-slate-800">
                      <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                        {p.conditionLabel}
                      </span>
                    </td>
                  ))}
                  {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => (
                    <td key={i} className="p-3" />
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-semibold text-slate-400 bg-slate-950/30 light:bg-slate-50">Hardware Warranty</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 font-medium text-emerald-400">
                      {p.warranty}
                    </td>
                  ))}
                  {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => (
                    <td key={i} className="p-3" />
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-semibold text-slate-400 bg-slate-950/30 light:bg-slate-50">Processor (CPU)</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 font-medium text-slate-200 light:text-slate-800">
                      {p.specs.processor}
                    </td>
                  ))}
                  {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => (
                    <td key={i} className="p-3" />
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-semibold text-slate-400 bg-slate-950/30 light:bg-slate-50">Memory (RAM)</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 font-medium text-slate-200 light:text-slate-800">
                      {p.specs.ram}
                    </td>
                  ))}
                  {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => (
                    <td key={i} className="p-3" />
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-semibold text-slate-400 bg-slate-950/30 light:bg-slate-50">Storage (SSD)</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 font-medium text-slate-200 light:text-slate-800">
                      {p.specs.storage}
                    </td>
                  ))}
                  {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => (
                    <td key={i} className="p-3" />
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-semibold text-slate-400 bg-slate-950/30 light:bg-slate-50">Display Quality</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 font-medium text-slate-200 light:text-slate-800">
                      {p.specs.display}
                    </td>
                  ))}
                  {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => (
                    <td key={i} className="p-3" />
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-semibold text-slate-400 bg-slate-950/30 light:bg-slate-50">Graphics (GPU)</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 font-medium text-slate-200 light:text-slate-800">
                      {p.specs.graphics}
                    </td>
                  ))}
                  {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => (
                    <td key={i} className="p-3" />
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-semibold text-slate-400 bg-slate-950/30 light:bg-slate-50">Tested Battery Health</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 font-bold text-emerald-400">
                      {p.specs.batteryHealth || '100% Brand New'}
                    </td>
                  ))}
                  {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => (
                    <td key={i} className="p-3" />
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-semibold text-slate-400 bg-slate-950/30 light:bg-slate-50">Weight</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 font-medium text-slate-200 light:text-slate-800">
                      {p.specs.weight || 'Standard Ultrabook'}
                    </td>
                  ))}
                  {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => (
                    <td key={i} className="p-3" />
                  ))}
                </tr>

              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
};
