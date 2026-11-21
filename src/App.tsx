import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BenefitsBar } from './components/BenefitsBar';
import { LaptopFinderWidget } from './components/LaptopFinderWidget';
import { ProductCatalog } from './components/ProductCatalog';
import { LaptopConfigurator } from './components/LaptopConfigurator';
import { RepairServices } from './components/RepairServices';
import { RepairEstimator } from './components/RepairEstimator';
import { TradeInCalculator } from './components/TradeInCalculator';
import { ReviewsSection } from './components/ReviewsSection';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CompareDrawer } from './components/CompareDrawer';
import { QuoteCartDrawer } from './components/QuoteCartDrawer';
import { PRODUCTS } from './data/products';
import type { Product, ProductCategory } from './types';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [comparedProducts, setComparedProducts] = useState<Product[]>([]);
  const [quoteItems, setQuoteItems] = useState<Product[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  // Sync theme with document element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Featured Deal of the Week Product
  const featuredProduct = PRODUCTS.find((p) => p.isHotDeal) || PRODUCTS[0];

  // Handle adding/removing from compare
  const handleToggleCompare = (product: Product) => {
    setComparedProducts((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      if (prev.length >= 3) {
        alert('You can compare up to 3 laptops simultaneously. Please remove one first.');
        return prev;
      }
      return [...prev, product];
    });
  };

  const handleRemoveFromCompare = (productId: string) => {
    setComparedProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleClearAllCompare = () => {
    setComparedProducts([]);
  };

  // Handle Showroom Quote / Wishlist
  const handleToggleQuote = (product: Product) => {
    setQuoteItems((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const handleRemoveFromQuote = (productId: string) => {
    setQuoteItems((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleClearAllQuote = () => {
    setQuoteItems([]);
  };

  // Quick navigation handlers
  const handleBrowseLaptops = () => {
    setSelectedCategory('all');
    const el = document.querySelector('#products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetRepairs = () => {
    const el = document.querySelector('#repairs');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectRepairIssue = (_issueId: string) => {
    const el = document.querySelector('#estimator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0b0f19] text-slate-100' : 'bg-[#f8fafc] text-slate-900'}`}>
      
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        compareCount={comparedProducts.length}
        onOpenCompare={() => setIsCompareOpen(true)}
        quoteCount={quoteItems.length}
        onOpenQuote={() => setIsQuoteOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          featuredProduct={featuredProduct}
          onOpenProductModal={(p) => setModalProduct(p)}
          onBrowseLaptops={handleBrowseLaptops}
          onGetRepairs={handleGetRepairs}
        />

        {/* 2. Customer Benefits Bar */}
        <BenefitsBar />

        {/* 3. Interactive Decision & Finder Guide */}
        <LaptopFinderWidget
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onSearchChange={(search) => setSearchQuery(search)}
          onSelectRepairIssue={handleSelectRepairIssue}
        />

        {/* 4. Products & Digital Showroom */}
        <ProductCatalog
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onOpenModal={(p) => setModalProduct(p)}
          comparedProducts={comparedProducts}
          onToggleCompare={handleToggleCompare}
          quoteItems={quoteItems}
          onToggleQuote={handleToggleQuote}
        />

        {/* 5. Custom Setup Configurator */}
        <LaptopConfigurator />

        {/* 6. Repair Services Lab */}
        <RepairServices
          onSelectForEstimator={handleSelectRepairIssue}
        />

        {/* 7. Instant Repair Cost Estimator & WhatsApp Booking */}
        <RepairEstimator />

        {/* 8. Trade-In & Sell Your Laptop Calculator */}
        <TradeInCalculator />

        {/* 9. Verified Customer Reviews & Testimonials */}
        <ReviewsSection />

        {/* 10. About Us & 30-Point Inspection Commitment */}
        <AboutSection />

        {/* 11. Frequently Asked Questions & Knowledge Base */}
        <FAQSection />

        {/* 12. Showroom Location, Hours & Contact */}
        <ContactSection />
      </main>

      {/* Persistent Footer */}
      <Footer />

      {/* Floating WhatsApp Action Widget */}
      <FloatingWhatsApp />

      {/* Deep-Dive Product Detail Modal */}
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
        isCompared={modalProduct ? comparedProducts.some((p) => p.id === modalProduct.id) : false}
        onToggleCompare={handleToggleCompare}
        isQuoted={modalProduct ? quoteItems.some((q) => q.id === modalProduct.id) : false}
        onToggleQuote={handleToggleQuote}
      />

      {/* Side-by-Side Laptop Comparison Drawer / Matrix */}
      <CompareDrawer
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        comparedProducts={comparedProducts}
        onRemoveFromCompare={handleRemoveFromCompare}
        onClearAll={handleClearAllCompare}
        onOpenProductModal={(p) => setModalProduct(p)}
      />

      {/* Showroom Reservation Quote / Cart Drawer */}
      <QuoteCartDrawer
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        quoteItems={quoteItems}
        onRemoveItem={handleRemoveFromQuote}
        onClearQuote={handleClearAllQuote}
        onOpenProductModal={(p) => setModalProduct(p)}
      />

    </div>
  );
}

export default App;
