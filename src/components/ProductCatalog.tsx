import React, { useState, useMemo } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  RotateCcw, 
  Laptop, 
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import type { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { buildGeneralWhatsAppUrl } from '../data/shopInfo';

interface ProductCatalogProps {
  products: Product[];
  selectedCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenModal: (product: Product) => void;
  comparedProducts: Product[];
  onToggleCompare: (product: Product) => void;
  quoteItems?: Product[];
  onToggleQuote?: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  setSearchQuery,
  onOpenModal,
  comparedProducts,
  onToggleCompare,
  quoteItems = [],
  onToggleQuote,
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedCondition, setSelectedCondition] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(300000);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);

  // Available Category Tabs
  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Catalogue' },
    { id: 'refurbished-laptops', label: 'Certified Refurbished' },
    { id: 'new-laptops', label: 'Brand New' },
    { id: 'gaming-laptops', label: 'Gaming & High FPS' },
    { id: 'business-ultrabooks', label: 'Business Ultrabooks' },
    { id: 'components-upgrades', label: 'RAM & SSD Upgrades' },
    { id: 'accessories', label: 'Peripherals & Docks' },
  ];

  // Extract unique brands
  const brands = useMemo(() => {
    const list = Array.from(new Set(products.map((p) => p.brand)));
    return ['all', ...list];
  }, [products]);

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (selectedCategory !== 'all' && p.category !== selectedCategory) {
          return false;
        }

        // Brand filter
        if (selectedBrand !== 'all' && p.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
          return false;
        }

        // Condition filter
        if (selectedCondition !== 'all') {
          if (selectedCondition === 'refurbished' && !p.condition.includes('refurbished')) return false;
          if (selectedCondition === 'brand-new' && p.condition !== 'brand-new') return false;
        }

        // Max price filter
        if (p.price > maxPrice) {
          return false;
        }

        // Search query
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const matchTitle = p.title.toLowerCase().includes(q);
          const matchBrand = p.brand.toLowerCase().includes(q);
          const matchCpu = p.specs.processor.toLowerCase().includes(q);
          const matchRam = p.specs.ram.toLowerCase().includes(q);
          const matchGpu = p.specs.graphics.toLowerCase().includes(q);
          const matchDesc = p.description.toLowerCase().includes(q);
          if (!matchTitle && !matchBrand && !matchCpu && !matchRam && !matchGpu && !matchDesc) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        // featured default
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [products, selectedCategory, selectedBrand, selectedCondition, maxPrice, searchQuery, sortBy]);

  const resetAllFilters = () => {
    onSelectCategory('all');
    setSelectedBrand('all');
    setSelectedCondition('all');
    setMaxPrice(300000);
    setSearchQuery('');
    setSortBy('featured');
  };

  const isFiltered = 
    selectedCategory !== 'all' || 
    selectedBrand !== 'all' || 
    selectedCondition !== 'all' || 
    maxPrice < 300000 || 
    searchQuery !== '';

  return (
    <section id="products" className="py-16 border-b border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-1">
              <Laptop className="w-4 h-4" />
              <span>Digital Showroom Catalogue</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
              Laptops, Upgrades & Accessories
            </h2>
            <p className="text-sm text-slate-400 light:text-slate-600 mt-1 max-w-2xl">
              Every refurbished laptop comes certified with a 30-point inspection, fresh thermal paste, and a 12-month hardware warranty.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 light:text-slate-600">
              Showing <strong className="text-white light:text-slate-900 font-bold">{filteredProducts.length}</strong> of {products.length} models
            </span>
            {isFiltered && (
              <button
                onClick={resetAllFilters}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 light:bg-slate-200 hover:bg-slate-700 text-xs font-semibold text-cyan-400 light:text-cyan-700 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Horizontal Nav Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 light:bg-slate-100 hover:bg-slate-800 light:hover:bg-slate-200 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search & Filter Toolbar */}
        <div className="p-4 rounded-2xl bg-slate-900/70 light:bg-white border border-slate-800 light:border-slate-200 shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input (5 cols) */}
            <div className="md:col-span-5 relative">
              <input
                type="text"
                placeholder="Search by title, brand, CPU (i7, M2, Ryzen), RAM..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950/80 light:bg-slate-50 text-slate-200 light:text-slate-800 text-sm rounded-xl pl-10 pr-9 py-2.5 border border-slate-700/80 light:border-slate-300 focus:outline-none focus:border-cyan-400 transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Brand Filter (2 cols) */}
            <div className="md:col-span-2">
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full bg-slate-950/80 light:bg-slate-50 text-slate-200 light:text-slate-800 text-xs sm:text-sm rounded-xl px-3 py-2.5 border border-slate-700/80 light:border-slate-300 focus:outline-none focus:border-cyan-400 cursor-pointer"
              >
                <option value="all">All Brands</option>
                {brands.filter(b => b !== 'all').map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Condition Filter (2 cols) */}
            <div className="md:col-span-2">
              <select
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="w-full bg-slate-950/80 light:bg-slate-50 text-slate-200 light:text-slate-800 text-xs sm:text-sm rounded-xl px-3 py-2.5 border border-slate-700/80 light:border-slate-300 focus:outline-none focus:border-cyan-400 cursor-pointer"
              >
                <option value="all">All Conditions</option>
                <option value="refurbished">Certified Refurbished (Grade A+)</option>
                <option value="brand-new">Brand New (Factory Sealed)</option>
              </select>
            </div>

            {/* Sort Dropdown (2 cols) */}
            <div className="md:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-slate-950/80 light:bg-slate-50 text-slate-200 light:text-slate-800 text-xs sm:text-sm rounded-xl px-3 py-2.5 border border-slate-700/80 light:border-slate-300 focus:outline-none focus:border-cyan-400 cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Price Range Slider Quick Popout (1 col) */}
            <div className="md:col-span-1 flex justify-end">
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                title="Filter by Price Range"
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  showMobileFilters || maxPrice < 300000
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                    : 'bg-slate-950/80 light:bg-slate-100 text-slate-300 light:text-slate-700 border-slate-700 light:border-slate-300 hover:text-white'
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Collapsible Price Filter Tray */}
          {showMobileFilters && (
            <div className="mt-4 pt-4 border-t border-slate-800 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in duration-200">
              <div className="w-full sm:w-80">
                <div className="flex justify-between text-xs font-semibold mb-1 text-slate-300 light:text-slate-700">
                  <span>Max Budget:</span>
                  <span className="text-cyan-400 font-bold">KSh {maxPrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="300000"
                  step="5000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Quick Budgets:</span>
                <button
                  onClick={() => setMaxPrice(70000)}
                  className="px-2.5 py-1 text-xs rounded-md bg-slate-800 light:bg-slate-200 text-slate-300 light:text-slate-800 hover:text-cyan-400"
                >
                  Under KSh 70k
                </button>
                <button
                  onClick={() => setMaxPrice(150000)}
                  className="px-2.5 py-1 text-xs rounded-md bg-slate-800 light:bg-slate-200 text-slate-300 light:text-slate-800 hover:text-cyan-400"
                >
                  Under KSh 150k
                </button>
                <button
                  onClick={() => setMaxPrice(300000)}
                  className="px-2.5 py-1 text-xs rounded-md bg-slate-800 light:bg-slate-200 text-slate-300 light:text-slate-800 hover:text-cyan-400"
                >
                  All Prices
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isCompared = comparedProducts.some((p) => p.id === product.id);
              const isQuoted = quoteItems.some((q) => q.id === product.id);
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenModal={onOpenModal}
                  isCompared={isCompared}
                  onToggleCompare={onToggleCompare}
                  isQuoted={isQuoted}
                  onToggleQuote={onToggleQuote}
                />
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="py-16 px-6 text-center rounded-2xl bg-slate-900/40 light:bg-slate-100 border border-slate-800 light:border-slate-200 max-w-xl mx-auto space-y-4">
            <div className="w-14 h-14 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto">
              <HelpCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white light:text-slate-900">
              No matching laptops found
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600">
              We frequently stock specific enterprise models upon request. Contact our shop directly on WhatsApp and our technicians will check our incoming inventory for your desired specs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={resetAllFilters}
                className="px-4 py-2 rounded-xl bg-slate-800 light:bg-slate-200 hover:bg-slate-700 text-xs font-semibold text-white light:text-slate-900 transition-colors"
              >
                Clear Search & Filters
              </button>
              <a
                href={buildGeneralWhatsAppUrl(`Inventory Request: Looking for ${searchQuery || 'custom laptop'}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Ask via WhatsApp</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
