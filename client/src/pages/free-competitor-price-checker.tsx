import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import {
  ChevronDown, ChevronRight, ArrowRight,
  CheckCircle2, Globe, Bell, Zap,
  TrendingUp, Users, Target, AlertCircle, IndianRupee,
  BarChart3, Package, Shield,
  Menu, Sun, Moon, ShoppingBag, Store, Briefcase,
  Code, Trophy, ArrowLeft, BookOpen, Video, FileText,
  Search, MessageCircle, TrendingDown, X,
  LogIn, Lock, BarChart2, RefreshCw, ArrowDownUp, ArrowDown,
  Flame,
  Presentation
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Helmet } from 'react-helmet-async';


type MenuItemWithBadge = {
  name: string;
  icon: JSX.Element;
  badge?: string;
  route?: string;
};

type NavigationMenu = {
  Solutions: MenuItemWithBadge[];
  "Use Cases": MenuItemWithBadge[];
  Features: MenuItemWithBadge[];
  "Free Tools": MenuItemWithBadge[];
  Resources: MenuItemWithBadge[];
  Integrations: MenuItemWithBadge[];
  Compare: MenuItemWithBadge[];
  About: MenuItemWithBadge[];

};

const navigationMenu: NavigationMenu = {
  Solutions: [
    { name: "All Solutions (Overview)", icon: <ShoppingBag className="w-4 h-4" />, route: "/solutions/solutions" },
    { name: "For Amazon Sellers (India)", icon: <ShoppingBag className="w-4 h-4" />, route: "/solutions/amazon-sellers" },
    { name: "For Flipkart Sellers", icon: <Store className="w-4 h-4" />, route: "/solutions/flipkart-sellers" },
    { name: "For E-commerce Agencies", icon: <Briefcase className="w-4 h-4" />, route: "/solutions/ecommerce-agencies" },
    { name: "For Brand Managers", icon: <Users className="w-4 h-4" />, route: "/solutions/brand-managers" },
  ],
  "Use Cases": [
    { name: "All Use Cases", icon: <TrendingUp className="w-4 h-4" />, route: "/use-cases" },
    { name: "Track Competitor Prices", icon: <TrendingUp className="w-4 h-4" />, route: "/use-cases/track-competitor-prices" },
    { name: "Find Profitable Products", icon: <Target className="w-4 h-4" />, route: "/use-cases/find-profitable-products" },
    { name: "Analyze Customer Reviews", icon: <MessageCircle className="w-4 h-4" />, route: "/use-cases/analyze-customer-reviews" },
    { name: "Improve Amazon & Flipkart SEO", icon: <Search className="w-4 h-4" />, route: "/use-cases/improve-seo" },
    { name: "Avoid Stockouts & Missed Sales", icon: <Package className="w-4 h-4" />, route: "/use-cases/avoid-stockouts" },
  ],
  Features: [
    { name: "Competitor Price Tracking", icon: <TrendingDown className="w-4 h-4" />, route: "/features/competitor-price-tracking-feature" },
    { name: "Review Analytics", icon: <MessageCircle className="w-4 h-4" />, route: "/features/review-analytics-feature" },
    { name: "Price Optimization", icon: <TrendingUp className="w-4 h-4" />, route: "/features/price-optimization-feature" },
    { name: "Keyword & Rank Tracking", icon: <Search className="w-4 h-4" />, route: "/features/keyword-rank-tracking-feature" },
    { name: "Product Research", icon: <Package className="w-4 h-4" />, route: "/features/product-research-feature" },
    { name: "AI Recommendations", icon: <Zap className="w-4 h-4" />, route: "/features/ai-recommendations-feature" },
    { name: "WhatsApp Alerts", icon: <Bell className="w-4 h-4" />, badge: "NEW", route: "/features/whatsapp-alerts-feature" },
    { name: "Festive Trend Intelligence", icon: <Flame className="w-4 h-4" />, badge: "UPCOMING", route: "/features/festive-trend-feature" },

  ],
  "Free Tools": [
    { name: "Free Amazon Product Analyzer", icon: <BarChart3 className="w-4 h-4" />, route: "/free-tools/free-amazon-product-analyzer" },
    { name: "Free Review Sentiment Checker", icon: <MessageCircle className="w-4 h-4" />, route: "/free-tools/free-review-sentiment-checker" },
    { name: "Free Competitor Price Checker", icon: <TrendingDown className="w-4 h-4" />, route: "/free-tools/free-competitor-price-checker" },
    { name: "Free Keyword Rank Checker", icon: <Search className="w-4 h-4" />, badge: "NEW", route: "/free-tools/free-keyword-rank-checker" },
  ],
  Resources: [
    { name: "Expert Blog", icon: <BookOpen className="w-4 h-4" />, route: "/resources/expert-blog" },
    { name: "Success Stories", icon: <FileText className="w-4 h-4" />, route: "/resources/case-studies" },
    { name: "Video Masterclasses", icon: <Video className="w-4 h-4" />, route: "/resources/videos" },
    { name: "Strategic Playbooks", icon: <BookOpen className="w-4 h-4" />, route: "/resources/guides" },
  ],
  Integrations: [
    { name: "Amazon", icon: <ShoppingBag className="w-4 h-4" /> },
    { name: "Flipkart", icon: <Store className="w-4 h-4" /> },
    { name: "Shopify", icon: <Globe className="w-4 h-4" /> },
    { name: "API Documentation", icon: <Code className="w-4 h-4" /> },
  ],
  Compare: [
    { name: "Insydz vs Helium 10", icon: <Trophy className="w-4 h-4" />, route: "/compare/insydzvshelium" },
    { name: "Insydz vs Jungle Scout", icon: <Trophy className="w-4 h-4" />, route: "/compare/insydzvsjunglescout" },
    { name: "Insydz vs Viral Launch", icon: <Trophy className="w-4 h-4" />, route: "/compare/insydzvsvirallaunch" },
  ],
  About: [
    { name: "About Us", icon: <Presentation className="w-4 h-4" />, route: "/about/about-us" },
    { name: "Our Vision", icon: <Globe className="w-4 h-4" />, route: "/about/our-vision" },
    { name: "Careers", icon: <Users className="w-4 h-4" />, route: "/about/careers" },
  ],

};

export default function FreeCompetitorPriceCheckerPage() {
  const [, setLocation] = useLocation();
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const [asinInput, setAsinInput] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    isDarkMode ? html.classList.add('dark') : html.classList.remove('dark');
  }, [isDarkMode]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleGetStarted = () => setLocation('/signup');
  const toggleMobileMenu = (menuName: string) =>
    setMobileActiveMenu(mobileActiveMenu === menuName ? null : menuName);

  const handleMenuItemClick = (item: MenuItemWithBadge) => {
    if (item.route) {
      setLocation(item.route);
      setActiveDropdown(null);
      setIsMenuOpen(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    setLocation('/');
    setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };

  const handleCheck = () => {
    if (!isLoggedIn) { setLocation('/login'); return; }
    if (!asinInput.trim()) return;
    setAnalyzing(true);
    setTimeout(() => { setAnalyzing(false); setAnalyzed(true); }, 1800);
  };

  const faqs = [
    {
      id: 'faq-1',
      question: 'Is this competitor price checker free?',
      answer: 'Yes, completely free for logged-in Insydz users. Sign up in seconds — no credit card needed — and start checking competitor prices on Amazon India instantly.',
    },
    {
      id: 'faq-2',
      question: 'Does it work for Amazon India only?',
      answer: 'This tool is optimized for Amazon India (amazon.in). It tracks INR pricing, seller-wise price breakdowns, and category-level price benchmarks specific to the Indian marketplace.',
    },
    {
      id: 'faq-3',
      question: 'How current is the pricing data?',
      answer: 'Pricing data is refreshed regularly from live marketplace signals. For real-time daily alerts and historical price trend tracking, upgrade to the full Insydz platform.',
    },
    {
      id: 'faq-4',
      question: 'Can I check prices for competitor products too?',
      answer: 'Yes. Enter any public Amazon India ASIN — including competitor listings — to see their pricing range, seller count, and price positioning within the category.',
    },
    {
      id: 'faq-5',
      question: 'Is login required?',
      answer: 'Yes, a free Insydz account is required to use this tool. Sign up takes under a minute — no credit card needed — and gives you instant access to all four free tools.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Helmet>
        <link rel="canonical" href="https://insydz.com/free-tools/free-competitor-price-checker" />
        <title></title>
        <meta name="description" content="." />
      </Helmet>

      {/* ─── NAVIGATION ─── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo + Back */}
            <div className="flex items-center space-x-4">
              <button onClick={() => setLocation('/')} className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </button>
              <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => setLocation('/')}>
                <div className="relative">
                  <img src="/logo.png" alt="Insydz Logo" className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Insydz</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
              <button onClick={() => setLocation('/')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all">Home</button>

              {(['Solutions', 'Use Cases', 'Features'] as const).map((key) => (
                <div className="relative" key={key}>
                  <button onMouseEnter={() => setActiveDropdown(key)} className={`px-3 py-2 text-sm font-medium rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all flex items-center gap-1 ${key === 'Solutions' ? 'text-teal-600 dark:text-teal-500 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400'}`}>
                    {key} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === key && (
                    <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {(navigationMenu[key] as MenuItemWithBadge[]).map((item, i) => (
                        <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors flex items-center gap-3 group">
                          <span className="text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                          <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 flex-1">{item.name}</span>
                          {item.badge && <span className="text-xs bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <button onClick={() => setLocation('/pricing')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all">Pricing</button>
              {/* Free Tools Dropdown */}
                                          <div className="relative">
                                            <button
                                              onMouseEnter={() => setActiveDropdown('Free Tools')}
                                              className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1"
                                            >
                                              Free Tools
                                              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Free Tools' ? 'rotate-180' : ''}`} />
                                            </button>
                                            {activeDropdown === 'Free Tools' && (
                                              <div 
                                                onMouseLeave={() => setActiveDropdown(null)}
                                                className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                                              >
                                                {navigationMenu["Free Tools"].map((item, i) => (
                                                  <button
                                                    key={i}
                                                    onClick={() => handleMenuItemClick(item)}
                                                    className="w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-3 group"
                                                  >
                                                    <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                                                      {item.icon}
                                                    </span>
                                                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex-1">
                                                      {item.name}
                                                    </span>
                                                    {item.badge && (
                                                      <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded-full font-semibold">
                                                        {item.badge}
                                                      </span>
                                                    )}
                                                  </button>
                                                ))}
                                              </div>
                                            )}
                                          </div>

              {(['Compare', 'Resources'] as const).map((key) => (
                <div className="relative" key={key}>
                  <button onMouseEnter={() => setActiveDropdown(key)} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all flex items-center gap-1">
                    {key} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === key && (
                    <div onMouseLeave={() => setActiveDropdown(null)} className={`absolute top-full mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200 ${key === 'Compare' ? 'right-0' : 'left-0'}`}>
                      {(navigationMenu[key] as MenuItemWithBadge[]).map((item, i) => (
                        <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors flex items-center gap-3 group">
                          <span className="text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                          <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 flex-1">{item.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* About Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown('About')}
                  className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1"
                >
                  About
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'About' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'About' && (
                  <div 
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    {navigationMenu.About.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleMenuItemClick(item)}
                        className="w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-3 group"
                      >
                        <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                          {item.icon}
                        </span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex-1">
                          {item.name}
                        </span>
                        {item.badge && (
                          <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded-full font-semibold">
                            {item.badge}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>


              <Button onClick={() => setLocation('/login')} className="ml-2 text-sm bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Login
              </Button>

              <button className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              <button onClick={() => { setLocation('/'); setIsMenuOpen(false); }} className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>
              {(['Solutions', 'Use Cases', 'Features','Free Tools', 'Compare', 'Resources'] as const).map((menuKey) => (
                <div key={menuKey}>
                  <button onClick={() => toggleMobileMenu(menuKey)} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg font-medium">
                    {menuKey} <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === menuKey ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileActiveMenu === menuKey && (
                    <div className="ml-4 mt-2 space-y-1">
                      {(navigationMenu[menuKey] as MenuItemWithBadge[]).map((item, i) => (
                        <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg">
                          {item.icon} {item.name}
                          {item.badge && <span className="ml-auto text-xs bg-teal-500 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button onClick={() => setLocation('/pricing')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg font-medium">Pricing</button>
              {/* Mobile About */}
              <div>
                <button 
                  onClick={() => toggleMobileMenu('About')}
                  className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
                >
                  About
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'About' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'About' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu.About.map((item, i) => (
                      <button 
                        key={i} 
                        onClick={() => handleMenuItemClick(item)}
                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
                      >
                        {item.icon}
                        {item.name}
                        {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <Button onClick={() => { setLocation('/login'); setIsMenuOpen(false); }} className="w-full mt-2 bg-gradient-to-r from-teal-500 to-cyan-500">Login</Button>
              <button className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 w-full flex justify-center items-center" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-80 h-80 bg-teal-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal-100 dark:bg-teal-900/30 border border-teal-300 dark:border-teal-700 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-teal-700 dark:text-teal-400">Free Tool · Built for Indian Sellers 🇮🇳</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white mb-5">
            Free Competitor Price
            <br />
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Checker for Amazon India</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Instantly see how competitors are pricing products in your category — so you can position smarter, win the Buy Box, and protect your margins on Amazon India.
          </p>

          {/* ── LOGIN GATE ── */}
          {!isLoggedIn ? (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border-2 border-teal-200 dark:border-gray-700 p-10 flex flex-col items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/40 dark:to-cyan-900/40 rounded-2xl flex items-center justify-center shadow-inner">
                  <Lock className="w-8 h-8 text-teal-500" />
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-gray-900 dark:text-white">Sign in to use this tool</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm max-w-xs mx-auto">Create a free Insydz account or log in to start checking competitor prices instantly.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                  <button onClick={() => setLocation('/login')} className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold rounded-xl shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                    <LogIn className="w-4 h-4" /> Log In
                  </button>
                  <button onClick={() => setLocation('/signup')} className="flex-1 px-6 py-3 border-2 border-teal-300 dark:border-teal-700 text-teal-600 dark:text-teal-400 font-bold rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all flex items-center justify-center gap-2">
                    Sign Up Free
                  </button>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500">Free forever · No credit card required</p>
              </div>
            </div>
          ) : (
            /* ── TOOL INPUT (logged in) ── */
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border-2 border-teal-100 dark:border-gray-700 p-8 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={asinInput}
                  onChange={(e) => setAsinInput(e.target.value)}
                  placeholder="Enter Amazon product URL or ASIN (e.g. B09XYZ123)"
                  className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 dark:focus:border-teal-500 transition-colors text-sm"
                />
                <button
                  onClick={handleCheck}
                  disabled={analyzing}
                  className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap flex items-center gap-2"
                >
                  {analyzing
                    ? <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Checking...</>
                    : <><TrendingDown className="w-4 h-4" /> Check Prices</>}
                </button>
              </div>
              <p className="text-xs text-green-500 dark:text-green-400 mt-3 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Logged in — ready to check competitor prices.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ─── WHAT THIS TOOL DOES ─── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center text-gray-900 dark:text-white mb-4">What This Free Price Checker Shows You</h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12 max-w-xl mx-auto">Four pricing intelligence signals every seller needs to stay competitive on Amazon India.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <IndianRupee className="w-6 h-6" />, title: "Competitor Price Range", desc: "See the lowest, highest, and average ₹ pricing across all competing sellers on an ASIN.", color: "text-teal-500", bg: "bg-teal-50 dark:bg-teal-900/20", border: "hover:border-teal-200 dark:hover:border-teal-700" },
              { icon: <Users className="w-6 h-6" />, title: "Seller Count", desc: "Know how many sellers are competing on this ASIN and at which price points.", color: "text-cyan-500", bg: "bg-cyan-50 dark:bg-cyan-900/20", border: "hover:border-cyan-200 dark:hover:border-cyan-700" },
              { icon: <ArrowDownUp className="w-6 h-6" />, title: "Price Positioning", desc: "Understand where your price sits relative to the market — above, at, or below the sweet spot.", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20", border: "hover:border-blue-200 dark:hover:border-blue-700" },
              { icon: <Target className="w-6 h-6" />, title: "Pricing Opportunity", desc: "Spot gaps where a smarter price could win more sales without sacrificing your margin.", color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-900/20", border: "hover:border-indigo-200 dark:hover:border-indigo-700" },
            ].map((card, i) => (
              <div key={i} className={`bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-lg ${card.border} transition-all group`}>
                <div className={`w-12 h-12 ${card.bg} rounded-xl flex items-center justify-center ${card.color} mb-4`}>{card.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mx-8" />

      {/* ─── WHY IT MATTERS ─── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-center text-gray-900 dark:text-white mb-6">Why Competitor Price Tracking Is Critical</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">Price is one of the top factors in Amazon's Buy Box algorithm. Sellers who don't track competitor pricing consistently lose sales to better-positioned rivals.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "Lose the Buy Box to lower-priced competitors",
              "Price too high and miss high-volume sales windows",
              "Price too low and erode all your profit margins",
              "Miss price drops and promotions from rivals",
            ].map((reason, i) => (
              <div key={i} className="flex items-center gap-3 bg-white dark:bg-gray-800 border border-red-100 dark:border-red-900/30 rounded-xl px-5 py-4 shadow-sm">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOSS FRAMING ─── */}
      <section className="py-16 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-100 dark:border-red-900/40 rounded-3xl p-10">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6 text-center">What Happens When You Ignore Competitor Pricing?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                "Competitors undercut you and take your sales",
                "Your listings stagnate with no Buy Box rotation",
                "You're last to know about aggressive price drops",
                "You reprice manually — too slow, too late",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm font-medium">Most sellers only reprice after losing significant sales. Don't be that seller.</p>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mx-8" />

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-center text-gray-900 dark:text-white mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", icon: <Search className="w-7 h-7" />, title: "Enter ASIN or Product Link", desc: "Paste any Amazon India product URL or ASIN — yours or a competitor's listing." },
              { step: "02", icon: <RefreshCw className="w-7 h-7" />, title: "Insydz Scans the Market", desc: "We pull current pricing from all sellers competing on that ASIN in real time." },
              { step: "03", icon: <Zap className="w-7 h-7" />, title: "Get Instant Price Intelligence", desc: "See the full price landscape — lowest, highest, average, and seller count — immediately." },
            ].map((s, i) => (
              <div key={i} className="relative bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-teal-200 dark:hover:border-teal-700 transition-all">
                <div className="absolute -top-4 left-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-black px-3 py-1 rounded-full">{s.step}</div>
                <div className="w-14 h-14 bg-teal-50 dark:bg-teal-900/30 rounded-2xl flex items-center justify-center text-teal-500 mb-5 mt-2">{s.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{s.desc}</p>
                {i < 2 && <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 text-teal-300 dark:text-teal-700 z-10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mx-8" />

      {/* ─── EXAMPLE REPORT ─── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center text-gray-900 dark:text-white mb-3">Example Competitor Price Report</h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10">Here's what a real price intelligence snapshot looks like for an Amazon India product.</p>
          <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 px-8 py-5 flex items-center justify-between">
              <div>
                <p className="text-teal-100 text-xs font-medium uppercase tracking-wider">Competitor Price Report</p>
                <p className="text-white font-bold text-lg mt-0.5">Stainless Steel Water Bottle · B09EXAMPLE</p>
              </div>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Amazon India</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 dark:divide-gray-700">
              {[
                { label: "Lowest Price", value: "₹399", sub: "Cheapest seller on ASIN", icon: <TrendingDown className="w-5 h-5" />, color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20" },
                { label: "Highest Price", value: "₹1,299", sub: "Most expensive seller", icon: <TrendingUp className="w-5 h-5" />, color: "text-red-500", bg: "bg-red-50 dark:bg-red-900/20" },
                { label: "Avg. Market Price", value: "₹749", sub: "Category price midpoint", icon: <IndianRupee className="w-5 h-5" />, color: "text-teal-500", bg: "bg-teal-50 dark:bg-teal-900/20" },
                { label: "Seller Count", value: "14", sub: "Active sellers competing", icon: <Users className="w-5 h-5" />, color: "text-cyan-500", bg: "bg-cyan-50 dark:bg-cyan-900/20" },
              ].map((metric, i) => (
                <div key={i} className="p-6 flex flex-col gap-2">
                  <div className={`w-10 h-10 ${metric.bg} rounded-xl flex items-center justify-center ${metric.color}`}>{metric.icon}</div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider">{metric.label}</p>
                  <p className={`text-2xl font-black ${metric.color}`}>{metric.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{metric.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VISUAL PRICE SNAPSHOT ─── */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-3">Visual Price Landscape Snapshot</h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10 text-sm">See the full price spread across competitors at a glance.</p>
          <div className="bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Price Distribution */}
              <div>
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-teal-500" /> Price Distribution
                </p>
                <div className="space-y-2">
                  {[
                    { range: "₹300–₹499", count: 2, pct: 15, color: "bg-green-400" },
                    { range: "₹500–₹699", count: 3, pct: 22, color: "bg-lime-400" },
                    { range: "₹700–₹899", count: 5, pct: 38, color: "bg-teal-400" },
                    { range: "₹900–₹1,099", count: 3, pct: 20, color: "bg-cyan-400" },
                    { range: "₹1,100+", count: 1, pct: 8, color: "bg-blue-400" },
                  ].map((row) => (
                    <div key={row.range} className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 dark:text-gray-400 w-24 shrink-0">{row.range}</span>
                      <div className="flex-1 h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className={`h-full ${row.color} rounded-full`} style={{ width: `${row.pct}%` }}></div>
                      </div>
                      <span className="text-xs text-gray-400 w-4 shrink-0 text-right">{row.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buy Box Donut */}
              <div>
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                  <Target className="w-4 h-4 text-cyan-500" /> Buy Box Price Zone
                </p>
                <div className="flex items-center justify-center h-32">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 rounded-full border-8 border-gray-100 dark:border-gray-700"></div>
                    <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(#14b8a6 0% 65%, #e5e7eb 65% 100%)' }}></div>
                    <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-full flex flex-col items-center justify-center">
                      <span className="text-2xl font-black text-teal-500">65%</span>
                      <span className="text-xs text-gray-400">Win chance</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-teal-600 dark:text-teal-400 mt-2 text-center font-semibold">At ₹749 — competitive zone</p>
              </div>

              {/* 30-Day Trend */}
              <div>
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                  <ArrowDown className="w-4 h-4 text-blue-500" /> 30-Day Price Trend
                </p>
                <div className="flex items-end gap-1.5 h-20">
                  {[82, 79, 85, 78, 74, 71, 75, 72, 68, 74, 70, 69].map((h, i) => (
                    <div key={i} className="flex-1 bg-teal-400 dark:bg-teal-600 rounded-t-sm opacity-80" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <p className="text-xs text-blue-500 mt-2 font-semibold">↓ Avg. price declining 8% this month</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── LOGIN CAPTURE ─── */}
      <section className="py-14 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-10 shadow-sm text-center">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Unlock the Full Price Intelligence Report</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Sign in to access seller-level pricing breakdown, historical trend data, and Buy Box positioning insights.</p>
          {isLoggedIn ? (
            <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 font-semibold">
              <CheckCircle2 className="w-5 h-5" /> You're logged in — full report access enabled.
            </div>
          ) : (
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setLocation('/login')} className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-xl text-sm hover:from-teal-600 hover:to-cyan-600 transition-all flex items-center gap-2 shadow-lg">
                <LogIn className="w-4 h-4" /> Log In to Access
              </button>
              <button onClick={() => setLocation('/signup')} className="px-6 py-3 border-2 border-teal-300 dark:border-teal-700 text-teal-600 dark:text-teal-400 font-bold rounded-xl text-sm hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all">
                Sign Up Free
              </button>
            </div>
          )}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mx-8" />

      {/* ─── DATA CREDIBILITY ─── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-8">Powered by Real Marketplace Pricing Data</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-6">
            {[
              "Tracks pricing across all active sellers per ASIN",
              "Monitors Buy Box price changes in near-real time",
              "Built for Amazon India ₹ pricing dynamics",
              "Benchmarks pricing against category averages",
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3 bg-white dark:bg-gray-800 border border-green-100 dark:border-green-900/30 rounded-xl px-5 py-4 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300 text-left">{point}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">This is live market pricing — not estimated guesswork.</p>
          <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">Used by sellers managing pricing across Amazon India categories.</p>
        </div>
      </section>

      {/* ─── WHO SHOULD USE ─── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-center text-gray-900 dark:text-white mb-12">Who Should Use This Tool</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-100 dark:border-green-800 rounded-3xl p-8">
              <h3 className="font-black text-gray-900 dark:text-white text-xl mb-5 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" /> Best For
              </h3>
              <div className="space-y-3">
                {[
                  "Sellers who want to win the Buy Box consistently",
                  "Resellers tracking multiple competitors per ASIN",
                  "Private label brands setting launch pricing",
                  "Agencies managing pricing strategy for clients",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full shrink-0"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-3xl p-8">
              <h3 className="font-black text-gray-900 dark:text-white text-xl mb-5 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-gray-400" /> Not Ideal For
              </h3>
              <div className="space-y-3">
                {[
                  "Sellers doing only offline or non-Amazon retail",
                  "Businesses selling on marketplaces outside India",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full shrink-0"></div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mx-8" />

      {/* ─── WHY DIFFERENT ─── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Built for Indian Marketplace Reality</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto text-sm">Global repricing tools don't understand Indian pricing patterns. This one does.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Globe className="w-6 h-6" />, text: "Amazon India data focus" },
              { icon: <IndianRupee className="w-6 h-6" />, text: "₹ pricing norms & benchmarks" },
              { icon: <Target className="w-6 h-6" />, text: "Buy Box intelligence built in" },
              { icon: <Shield className="w-6 h-6" />, text: "Connected to full Insydz platform" },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-teal-100 dark:border-teal-900/30 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-teal-300 dark:hover:border-teal-700 transition-all">
                <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/30 rounded-xl flex items-center justify-center text-teal-500 mx-auto mb-3">{item.icon}</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UPGRADE PATH ─── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 border-2 border-teal-100 dark:border-teal-900/40 rounded-3xl p-12 shadow-xl">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Want Daily Pricing Alerts?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">This free checker gives you a one-time snapshot. Upgrade to get daily price movement alerts, historical trend tracking, and automated repricing recommendations.</p>
          <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold px-10 py-6 rounded-full shadow-2xl group">
            Start Free Full Access <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mx-8" />

      {/* ─── FAQ ─── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center text-gray-900 dark:text-white mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-teal-200 dark:hover:border-teal-700 transition-colors">
                <button onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)} className="w-full px-6 py-5 flex items-center justify-between text-left">
                  <span className="font-bold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                  {expandedFaq === faq.id
                    ? <ChevronDown className="w-5 h-5 text-teal-500 shrink-0" />
                    : <ChevronRight className="w-5 h-5 text-gray-400 shrink-0" />}
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SEO PARAGRAPH ─── */}
      <section className="py-8 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-400 dark:text-gray-600 text-center leading-relaxed">
            This free Amazon competitor price checker helps Indian sellers track competitor pricing, understand Buy Box dynamics, and make smarter pricing decisions before and after launching products. Ideal for Amazon India sellers, resellers, private label brands, and D2C businesses looking to price competitively and protect their margins.
          </p>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 px-4 bg-gradient-to-br from-teal-500 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-4 text-white">Stop Guessing. Know Your Competitors' Prices.</h2>
          <p className="text-teal-100 text-lg mb-10">One price check today could be the difference between winning or losing the Buy Box.</p>
          <button
            onClick={() => { if (!isLoggedIn) { setLocation('/login'); } else { window.scrollTo({ top: 0, behavior: 'smooth' }); } }}
            className="bg-white text-teal-600 font-black px-12 py-5 rounded-full shadow-2xl hover:scale-105 transition-all text-lg inline-flex items-center gap-3"
          >
            Check Competitor Prices Now <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ─── STICKY MOBILE CTA ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white dark:bg-gray-900 border-t-2 border-teal-200 dark:border-teal-800 px-4 py-3 shadow-2xl">
        <button
          onClick={() => { if (!isLoggedIn) { setLocation('/login'); } else { window.scrollTo({ top: 0, behavior: 'smooth' }); } }}
          className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2"
        >
          {isLoggedIn
            ? <><TrendingDown className="w-4 h-4" /> Check Competitor Prices — Free</>
            : <><LogIn className="w-4 h-4" /> Log In to Check Prices</>}
        </button>
      </div>

      {/* ─── FOOTER ─── */}
      <footer className="bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">© 2025 Insydz. Built for Indian sellers 🇮🇳</p>
        </div>
      </footer>

    </div>
  );
}