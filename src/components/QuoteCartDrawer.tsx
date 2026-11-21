import React from 'react';
import { 
  X, 
  Trash2, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles, 
  Laptop, 
  ArrowRight,
  ShoppingBag
} from 'lucide-react';
import type { Product } from '../types';
import { SHOP_INFO } from '../data/shopInfo';

interface QuoteCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  quoteItems: Product[];
  onRemoveItem: (productId: string) => void;
  onClearQuote: () => void;
  onOpenProductModal: (product: Product) => void;
}

export const QuoteCartDrawer: React.FC<QuoteCartDrawerProps> = ({
  isOpen,
  onClose,
  quoteItems,
  onRemoveItem,
  onClearQuote,
  onOpenProductModal,
}) => {
  if (!isOpen) return null;

  const totalAmount = quoteItems.reduce((acc, item) => acc + item.price, 0);

  const formattedItemsList = quoteItems
    .map((item, index) => `${index + 1}. *${item.title}* (${item.conditionLabel}) - KSh ${item.price.toLocaleString()} [Ref: #${item.id}]`)
    .join('\n');

  const quoteWhatsAppUrl = `https://wa.me/${SHOP_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Nexus Computers Kenya! 🛒📋\n\nI have assembled a Showroom Reservation / Quote on your website:\n\n${formattedItemsList}\n\n*Total Quote Amount:* KSh ${totalAmount.toLocaleString()}\n\nCould you please check availability for in-store pickup at Nairobi CBD or courier delivery? Asante!`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="flex-1" onClick={onClose} />

      {/* Slide-over Drawer Panel */}
      <div className="w-full max-w-md h-full bg-slate-900 light:bg-white border-l border-slate-800 light:border-slate-200 shadow-2xl flex flex-col justify-between text-slate-100 light:text-slate-900 animate-in slide-in-from-right duration-300 z-10">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-800 light:border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white light:text-slate-900">
                Showroom Reservation Quote
              </h3>
              <span className="text-xs text-slate-400">
                {quoteItems.length} item{quoteItems.length !== 1 ? 's' : ''} selected
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 light:bg-slate-100 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="p-5 flex-1 overflow-y-auto space-y-3">
          {quoteItems.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base text-white light:text-slate-900">
                Your quote list is empty
              </h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Explore our laptop catalogue and click "Quick View" or "Reserve" to add items to your showroom visit quote.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
              >
                Explore Laptops & Gear
              </button>
            </div>
          ) : (
            quoteItems.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-2xl bg-slate-950/80 light:bg-slate-50 border border-slate-800 light:border-slate-200 flex items-center gap-3 justify-between"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-12 rounded-lg object-cover border border-slate-700"
                />

                <div className="flex-1 min-w-0">
                  <h4 
                    onClick={() => {
                      onClose();
                      onOpenProductModal(item);
                    }}
                    className="font-bold text-xs text-white light:text-slate-900 truncate hover:text-cyan-400 cursor-pointer"
                  >
                    {item.title}
                  </h4>
                  <span className="text-[10px] text-cyan-400 font-medium block">
                    {item.conditionLabel}
                  </span>
                  <span className="text-xs font-black text-white light:text-slate-900">
                    KSh {item.price.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  title="Remove item"
                  className="p-2 text-slate-500 hover:text-rose-400 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer & Action */}
        {quoteItems.length > 0 && (
          <div className="p-5 border-t border-slate-800 light:border-slate-200 bg-slate-950/60 light:bg-slate-50 space-y-4">
            
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal ({quoteItems.length} items):</span>
                <span className="text-white light:text-slate-900 font-bold">
                  KSh {totalAmount.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-emerald-400 font-medium">
                <span>12-Month Hardware Guarantee:</span>
                <span>Included Free</span>
              </div>
              <div className="flex justify-between text-base font-black text-white light:text-slate-900 pt-2 border-t border-slate-800 light:border-slate-200">
                <span>Total Estimated Value:</span>
                <span className="text-cyan-400 text-xl font-black">
                  KSh {totalAmount.toLocaleString()}
                </span>
              </div>
            </div>

            <a
              href={quoteWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/25"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Send Showroom Quote to WhatsApp</span>
            </a>

            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Showroom hold time: 24 Hours</span>
              <button
                onClick={onClearQuote}
                className="text-rose-400 hover:underline cursor-pointer"
              >
                Clear all items
              </button>
            </div>

          </div>
        )}

      </div>

    </div>
  );
};
