import React, { useState, useEffect } from 'react';
import { 
  Laptop, 
  Phone, 
  Clock, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  MessageCircle, 
  Scale, 
  Sparkles,
  Search,
  ShoppingBag
} from 'lucide-react';
import { SHOP_INFO, buildGeneralWhatsAppUrl } from '../data/shopInfo';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  compareCount: number;
  onOpenCompare: () => void;
  quoteCount: number;
  onOpenQuote: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  compareCount,
  onOpenCompare,
  quoteCount,
  onOpenQuote,
  activeSection,
  setActiveSection,
  searchQuery,
  setSearchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'products', label: 'Laptops & Gear', href: '#products' },
    { id: 'configurator', label: 'Custom Configurator', href: '#configurator' },
    { id: 'repairs', label: 'Repair Services', href: '#repairs' },
    { id: 'estimator', label: 'Cost Estimator', href: '#estimator' },
    { id: 'tradein', label: 'Trade-In', href: '#tradein' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
    { id: 'contact', label: 'Showroom & Contact', href: '#contact' },
  ];

  const handleNavClick = (id: string, href: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification Announcement Bar */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950 text-slate-300 border-b border-cyan-900/40 py-1.5 px-4 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full text-[11px] font-semibold border border-cyan-500/30">
              <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
              12M Hardware Warranty
            </span>
            <span className="hidden sm:inline text-slate-300">
              ⚡ Certified Refurbished Laptops & Precision Express Repairs • Free Diagnostic with Repair
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="hidden md:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Mon-Sat: 9am - 7:30pm</span>
            </div>
            <a 
              href={`tel:${SHOP_INFO.phoneRaw}`} 
              className="flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-semibold">{SHOP_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-950/90 dark:bg-slate-950/95 light:bg-white/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-slate-800 light:border-slate-200' 
            : 'bg-slate-950/80 dark:bg-slate-950/90 light:bg-white/90 backdrop-blur-sm border-b border-slate-800/80 light:border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={() => handleNavClick('home', '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-0.5 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <Laptop className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent light:from-slate-900 light:to-cyan-600">
                  NEXUS
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-1.5 py-0.5 rounded">
                  Tech Labs
                </span>
              </div>
              <span className="text-[11px] text-slate-400 light:text-slate-600 tracking-wide hidden sm:block">
                Laptops • Servicing • Repairs
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id, link.href)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-500/10 light:bg-cyan-50 light:text-cyan-600 shadow-inner'
                      : 'text-slate-300 light:text-slate-700 hover:text-white light:hover:text-cyan-600 hover:bg-slate-800/50 light:hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Action Tools & CTAs */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Quick Search Input */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search laptops, RAM..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-40 lg:w-48 bg-slate-900/80 light:bg-slate-100 text-slate-200 light:text-slate-800 text-xs rounded-lg pl-8 pr-3 py-2 border border-slate-700/80 light:border-slate-300 focus:outline-none focus:border-cyan-400 transition-all"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            </div>

            {/* Compare Drawer Button */}
            <button
              onClick={onOpenCompare}
              title="Compare Laptops Side-by-Side"
              className="relative p-2 rounded-lg bg-slate-900 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-pointer"
            >
              <Scale className="w-4 h-4" />
              {compareCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-cyan-500 text-slate-950 text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {compareCount}
                </span>
              )}
            </button>

            {/* Showroom Quote Wishlist Button */}
            <button
              onClick={onOpenQuote}
              title="View Showroom Reservation Quote"
              className="relative p-2 rounded-lg bg-slate-900 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              {quoteCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-slate-950 text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {quoteCount}
                </span>
              )}
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="p-2 rounded-lg bg-slate-900 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-300 hover:text-cyan-400 transition-all cursor-pointer"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* WhatsApp Direct Action Button */}
            <a
              href={buildGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-300 light:text-slate-700 hover:bg-slate-800 light:hover:bg-slate-200 transition-all"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-slate-950/98 light:bg-white border-b border-slate-800 light:border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
            {/* Mobile Search */}
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Search laptops, specs, RAM, repairs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 light:bg-slate-100 text-slate-200 light:text-slate-800 text-sm rounded-lg pl-9 pr-3 py-2.5 border border-slate-700 light:border-slate-300 focus:outline-none focus:border-cyan-400"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id, link.href)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-cyan-400 bg-cyan-500/10 font-bold'
                      : 'text-slate-300 light:text-slate-700 hover:bg-slate-900 light:hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 light:border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Showroom Quote ({quoteCount} items)</span>
              </button>

              <a
                href={buildGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp ({SHOP_INFO.whatsapp})</span>
              </a>

              <a
                href={`tel:${SHOP_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-900 light:bg-slate-100 text-slate-300 light:text-slate-800 border border-slate-800 light:border-slate-300 text-xs font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Call Us: {SHOP_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
