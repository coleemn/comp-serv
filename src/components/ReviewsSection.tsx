import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  Laptop, 
  Wrench, 
  ShieldCheck,
  ThumbsUp,
  MessageCircle,
  X
} from 'lucide-react';
import { REVIEWS, STORE_STATS, CustomerReview } from '../data/reviews';
import { buildGeneralWhatsAppUrl } from '../data/shopInfo';

export const ReviewsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'laptop' | 'repair' | 'upgrade' | 'business'>('all');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewForm, setReviewForm] = useState({ name: '', product: '', rating: 5, comment: '' });
  const [submittedReview, setSubmittedReview] = useState(false);

  const filteredReviews = REVIEWS.filter((rev) => {
    if (selectedCategory === 'all') return true;
    return rev.category === selectedCategory;
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedReview(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setSubmittedReview(false);
      setReviewForm({ name: '', product: '', rating: 5, comment: '' });
    }, 2000);
  };

  return (
    <section className="py-16 bg-slate-900/30 light:bg-slate-100/50 border-b border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-1">
              <Star className="w-4 h-4 fill-cyan-400" />
              <span>Verified Customer Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
              Trusted by Professionals & Everyday Users
            </h2>
            <p className="text-sm text-slate-300 light:text-slate-600 mt-1 max-w-2xl">
              Real experiences from developers, creators, students, and businesses who rely on our certified laptops and repair lab.
            </p>
          </div>

          {/* Aggregate Rating Badge & Write Review Button */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 shadow-sm">
              <div className="flex items-center gap-1 text-amber-400 text-2xl font-black">
                <Star className="w-6 h-6 fill-amber-400" />
                <span>{STORE_STATS.averageRating}</span>
              </div>
              <div className="text-left border-l border-slate-800 light:border-slate-200 pl-3">
                <span className="text-xs font-bold text-white light:text-slate-900 block">
                  {STORE_STATS.recommendedPercent}% Recommendation
                </span>
                <span className="text-[11px] text-slate-400">
                  Based on {STORE_STATS.totalReviews}+ Verified Purchases & Repairs
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowReviewModal(true)}
              className="px-4 py-3 rounded-xl bg-slate-800 light:bg-slate-200 hover:bg-slate-700 text-xs font-bold text-white light:text-slate-900 transition-colors cursor-pointer"
            >
              Leave Feedback
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'laptop', label: 'Certified Laptop Purchases' },
            { id: 'repair', label: 'Hardware Repairs & Screen Fixes' },
            { id: 'upgrade', label: 'SSD & RAM Upgrades' },
            { id: 'business', label: 'Corporate & Bulk Deployments' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 light:bg-white text-slate-300 light:text-slate-700 hover:text-white border border-slate-800 light:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/80 light:bg-white border border-slate-800 light:border-slate-200 hover:border-cyan-500/40 shadow-md transition-all hover:-translate-y-1"
            >
              <div className="space-y-3">
                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500">{rev.date}</span>
                </div>

                {/* Review Headline */}
                <h4 className="text-base font-bold text-white light:text-slate-900 leading-snug">
                  "{rev.headline}"
                </h4>

                {/* Review Body */}
                <p className="text-xs text-slate-300 light:text-slate-700 leading-relaxed">
                  {rev.comment}
                </p>

                {/* Item / Service Purchased Pill */}
                <div className="p-2.5 rounded-lg bg-slate-950/60 light:bg-slate-100 border border-slate-800/80 light:border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Purchased / Serviced:</span>
                  <span className="text-xs font-semibold text-cyan-400 light:text-cyan-700 line-clamp-1">
                    {rev.purchasedItemOrService}
                  </span>
                </div>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 mt-4 border-t border-slate-800 light:border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover border border-cyan-500/40"
                  />
                  <div>
                    <span className="text-xs font-bold text-white light:text-slate-900 block">
                      {rev.name}
                    </span>
                    <span className="text-[11px] text-slate-400">{rev.role}</span>
                  </div>
                </div>

                {rev.verifiedPurchase && (
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-3xl bg-slate-900 light:bg-white border border-slate-800 light:border-slate-300 p-6 shadow-2xl text-slate-100 light:text-slate-900">
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-800 light:bg-slate-100 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-bold mb-1">Share Your Experience</h3>
            <p className="text-xs text-slate-400 mb-4">
              Your feedback helps fellow tech enthusiasts and customers make informed choices.
            </p>

            {submittedReview ? (
              <div className="p-6 text-center text-emerald-400 space-y-2">
                <CheckCircle2 className="w-10 h-10 mx-auto" />
                <h4 className="font-bold text-base">Thank You!</h4>
                <p className="text-xs text-slate-300">Your review has been submitted for moderation.</p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold mb-1 text-slate-300 light:text-slate-700">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jordan Reed"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    className="w-full bg-slate-950 light:bg-slate-50 border border-slate-700 rounded-xl p-2.5"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1 text-slate-300 light:text-slate-700">Laptop Model or Repair Performed *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ThinkPad X1 Carbon or Screen Replacement"
                    value={reviewForm.product}
                    onChange={(e) => setReviewForm({ ...reviewForm, product: e.target.value })}
                    className="w-full bg-slate-950 light:bg-slate-50 border border-slate-700 rounded-xl p-2.5"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1 text-slate-300 light:text-slate-700">Rating</label>
                  <div className="flex gap-2">
                    {[5, 4, 3, 2, 1].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setReviewForm({ ...reviewForm, rating: num })}
                        className={`flex-1 py-1.5 rounded-lg border text-center font-bold ${
                          reviewForm.rating === num
                            ? 'bg-amber-500 text-slate-950 border-amber-400'
                            : 'bg-slate-950 border-slate-800 text-slate-400'
                        }`}
                      >
                        {num}★
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-bold mb-1 text-slate-300 light:text-slate-700">Your Review *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell others how your machine is performing or how the repair went..."
                    value={reviewForm.comment}
                    onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                    className="w-full bg-slate-950 light:bg-slate-50 border border-slate-700 rounded-xl p-2.5"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors mt-2"
                >
                  Post Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
