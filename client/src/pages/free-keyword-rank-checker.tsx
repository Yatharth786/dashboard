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
  LogIn, Lock, Hash, BarChart2, ArrowUp, ArrowDown,
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

export default function FreeKeywordRankCheckerPage() {
  const [, setLocation] = useLocation();
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const [asinInput, setAsinInput] = useState('');
  const [keywordInput, setKeywordInput] = useState('');
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
      question: 'Is this keyword rank checker free?',
      answer: "Yes, completely free for logged-in Insydz users. Sign up in seconds — no credit card needed — and check your product's keyword ranking on Amazon India instantly.",
    },
    {
      id: 'faq-2',
      question: 'Does it work for Amazon India only?',
      answer: 'This tool is optimized for Amazon India (amazon.in). It checks keyword rankings within the Indian marketplace search index, which behaves differently from Amazon US or UK.',
    },
    {
      id: 'faq-3',
      question: 'How accurate is the rank data?',
      answer: 'Rank data is pulled from current Amazon India search results for the keywords you enter. Results reflect the organic search position at time of check. For daily rank tracking over time, upgrade to the full Insydz platform.',
    },
    {
      id: 'faq-4',
      question: 'Can I check rankings for competitor products?',
      answer: 'Yes. Enter any public Amazon India ASIN and a keyword to see where that product ranks — including competitor listings. This is extremely useful for competitive keyword gap analysis.',
    },
    {
      id: 'faq-5',
      question: 'Is login required?',
      answer: 'Yes, a free Insydz account is required. Sign up takes under a minute and gives you access to all four free tools with no credit card needed.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Helmet>
        <link rel="canonical" href="https://insydz.com/free-tools/free-keyword-rank-checker" />
        <title></title>
        <meta name="description" content="." />
      </Helmet>

      {/* ─── NAVIGATION ─── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo + Back */}
            <div className="flex items-center space-x-4">
              <button onClick={() => setLocation('/')} className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </button>
              <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => setLocation('/')}>
                <div className="relative">
                  <img src="/logo.png" alt="Insydz Logo" className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">Insydz</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
              <button onClick={() => setLocation('/')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all">Home</button>

              {(['Solutions', 'Use Cases', 'Features'] as const).map((key) => (
                <div className="relative" key={key}>
                  <button onMouseEnter={() => setActiveDropdown(key)} className={`px-3 py-2 text-sm font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all flex items-center gap-1 ${key === 'Solutions' ? 'text-indigo-600 dark:text-indigo-500 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>
                    {key} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === key && (
                    <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {(navigationMenu[key] as MenuItemWithBadge[]).map((item, i) => (
                        <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors flex items-center gap-3 group">
                          <span className="text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                          <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex-1">{item.name}</span>
                          {item.badge && <span className="text-xs bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <button onClick={() => setLocation('/pricing')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all">Pricing</button>

              {(['Free Tools', 'Compare', 'Resources'] as const).map((key) => (
                <div className="relative" key={key}>
                  <button onMouseEnter={() => setActiveDropdown(key)} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all flex items-center gap-1">
                    {key} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === key && (
                    <div onMouseLeave={() => setActiveDropdown(null)} className={`absolute top-full mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200 ${key === 'Compare' ? 'right-0' : 'left-0'}`}>
                      {(navigationMenu[key] as MenuItemWithBadge[]).map((item, i) => (
                        <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors flex items-center gap-3 group">
                          <span className="text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                          <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex-1">{item.name}</span>
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



              <Button onClick={() => setLocation('/login')} className="ml-2 text-sm bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
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
              <button onClick={() => { setLocation('/'); setIsMenuOpen(false); }} className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>
              {(['Solutions', 'Use Cases', 'Features','Free Tools', 'Compare', 'Resources'] as const).map((menuKey) => (
                <div key={menuKey}>
                  <button onClick={() => toggleMobileMenu(menuKey)} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg font-medium">
                    {menuKey} <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === menuKey ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileActiveMenu === menuKey && (
                    <div className="ml-4 mt-2 space-y-1">
                      {(navigationMenu[menuKey] as MenuItemWithBadge[]).map((item, i) => (
                        <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg">
                          {item.icon} {item.name}
                          {item.badge && <span className="ml-auto text-xs bg-indigo-500 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button onClick={() => setLocation('/pricing')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg font-medium">Pricing</button>
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

              <Button onClick={() => setLocation('/login')} className="w-full mt-2 bg-gradient-to-r from-indigo-500 to-violet-500">Login</Button>
              <button className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 w-full flex justify-center items-center" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-80 h-80 bg-indigo-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-violet-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-300 dark:border-indigo-700 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-400">Free Tool · NEW · Built for Indian Sellers 🇮🇳</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white mb-5">
            Free Amazon Keyword
            <br />
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">Rank Checker for India</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Instantly check where your product ranks for any keyword on Amazon India — so you can optimize your listing, close visibility gaps, and outrank competitors on the search results page.
          </p>

          {/* ── LOGIN GATE ── */}
          {!isLoggedIn ? (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border-2 border-indigo-200 dark:border-gray-700 p-10 flex flex-col items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/40 dark:to-violet-900/40 rounded-2xl flex items-center justify-center shadow-inner">
                  <Lock className="w-8 h-8 text-indigo-500" />
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-gray-900 dark:text-white">Sign in to use this tool</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm max-w-xs mx-auto">Create a free Insydz account or log in to start checking keyword rankings on Amazon India instantly.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                  <button onClick={() => setLocation('/login')} className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white font-bold rounded-xl shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                    <LogIn className="w-4 h-4" /> Log In
                  </button>
                  <button onClick={() => setLocation('/signup')} className="flex-1 px-6 py-3 border-2 border-indigo-300 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 font-bold rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all flex items-center justify-center gap-2">
                    Sign Up Free
                  </button>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500">Free forever · No credit card required</p>
              </div>
            </div>
          ) : (
            /* ── TOOL INPUT (logged in) ── */
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border-2 border-indigo-100 dark:border-gray-700 p-8 max-w-2xl mx-auto">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={asinInput}
                    onChange={(e) => setAsinInput(e.target.value)}
                    placeholder="Enter ASIN (e.g. B09XYZ123)"
                    className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 transition-colors text-sm"
                  />
                  <input
                    type="text"
                    value={keywordInput}
                    onChange={(e) => setKeywordInput(e.target.value)}
                    placeholder="Enter keyword (e.g. steel water bottle)"
                    className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 transition-colors text-sm"
                  />
                </div>
                <button
                  onClick={handleCheck}
                  disabled={analyzing}
                  className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {analyzing
                    ? <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Checking Rank...</>
                    : <><Search className="w-4 h-4" /> Check Keyword Rank</>}
                </button>
              </div>
              <p className="text-xs text-green-500 dark:text-green-400 mt-3 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Logged in — ready to check keyword rankings.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ─── WHAT THIS TOOL DOES ─── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center text-gray-900 dark:text-white mb-4">What This Free Rank Checker Shows You</h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12 max-w-xl mx-auto">Four keyword intelligence signals that reveal your Amazon India search visibility.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Hash className="w-6 h-6" />, title: "Current Keyword Rank", desc: "See exactly where your product appears in Amazon India search results for a keyword.", color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-900/20", border: "hover:border-indigo-200 dark:hover:border-indigo-700" },
              { icon: <Search className="w-6 h-6" />, title: "Search Visibility Score", desc: "Understand how visible your product is for the keywords that matter most.", color: "text-violet-500", bg: "bg-violet-50 dark:bg-violet-900/20", border: "hover:border-violet-200 dark:hover:border-violet-700" },
              { icon: <TrendingUp className="w-6 h-6" />, title: "Rank Movement", desc: "See if your ranking is improving, declining, or stable compared to last week.", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20", border: "hover:border-blue-200 dark:hover:border-blue-700" },
              { icon: <Target className="w-6 h-6" />, title: "Keyword Opportunity", desc: "Discover high-traffic keywords where small rank improvements drive big results.", color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20", border: "hover:border-purple-200 dark:hover:border-purple-700" },
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
          <h2 className="text-4xl font-black text-center text-gray-900 dark:text-white mb-6">Why Keyword Rank Tracking Is Critical</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">Over 70% of Amazon shoppers never go past the first page of search results. If your product isn't ranking for the right keywords, it simply doesn't exist to most buyers.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "Products buried on page 3+ get near-zero organic traffic",
              "Listing optimizations without rank data are guesswork",
              "Competitors climb rankings while yours drops silently",
              "Missing high-volume keywords means invisible products",
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
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6 text-center">What Happens When You Don't Track Keyword Rankings?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                "You lose organic visibility without knowing why",
                "Listing changes have no measurable impact",
                "Competitors close the rank gap while you're unaware",
                "Ad spend rises as organic performance falls",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm font-medium">Sellers who track keyword rank can fix problems before they become expensive.</p>
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
              { step: "01", icon: <Search className="w-7 h-7" />, title: "Enter ASIN + Keyword", desc: "Provide the product ASIN and the keyword you want to check rank for on Amazon India." },
              { step: "02", icon: <Hash className="w-7 h-7" />, title: "Insydz Scans Search Results", desc: "We scan Amazon India's organic search results to find exactly where your product appears." },
              { step: "03", icon: <Zap className="w-7 h-7" />, title: "Get Instant Rank Position", desc: "See the current rank, page position, and visibility score — instantly." },
            ].map((s, i) => (
              <div key={i} className="relative bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-700 transition-all">
                <div className="absolute -top-4 left-6 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-xs font-black px-3 py-1 rounded-full">{s.step}</div>
                <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-500 mb-5 mt-2">{s.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{s.desc}</p>
                {i < 2 && <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 text-indigo-300 dark:text-indigo-700 z-10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mx-8" />

      {/* ─── EXAMPLE REPORT ─── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center text-gray-900 dark:text-white mb-3">Example Keyword Rank Report</h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10">Here's what a real keyword rank snapshot looks like for an Amazon India product.</p>
          <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-indigo-500 to-violet-500 px-8 py-5 flex items-center justify-between">
              <div>
                <p className="text-indigo-100 text-xs font-medium uppercase tracking-wider">Keyword Rank Report</p>
                <p className="text-white font-bold text-lg mt-0.5">Steel Water Bottle · B09EXAMPLE</p>
              </div>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Amazon India</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 dark:divide-gray-700">
              {[
                { label: "Keyword", value: "steel water bottle", sub: "Search term checked", icon: <Hash className="w-5 h-5" />, color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-900/20" },
                { label: "Current Rank", value: "#14", sub: "Page 1 — position 14", icon: <Search className="w-5 h-5" />, color: "text-violet-500", bg: "bg-violet-50 dark:bg-violet-900/20" },
                { label: "Rank Change", value: "↑ +6", sub: "Improved from #20 last week", icon: <ArrowUp className="w-5 h-5" />, color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20" },
                { label: "Visibility Score", value: "72 / 100", sub: "Above-average visibility", icon: <TrendingUp className="w-5 h-5" />, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
              ].map((metric, i) => (
                <div key={i} className="p-6 flex flex-col gap-2">
                  <div className={`w-10 h-10 ${metric.bg} rounded-xl flex items-center justify-center ${metric.color}`}>{metric.icon}</div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider">{metric.label}</p>
                  <p className={`text-xl font-black ${metric.color}`}>{metric.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{metric.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VISUAL RANK SNAPSHOT ─── */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-3">Visual Keyword Rank Snapshot</h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10 text-sm">See rank position, movement, and opportunity across multiple keywords at once.</p>
          <div className="bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Rank Trend */}
              <div>
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-indigo-500" /> Rank Trend (30 Days)
                </p>
                <div className="flex items-end gap-1.5 h-20">
                  {[60, 55, 62, 50, 48, 44, 42, 38, 35, 32, 28, 22].map((h, i) => (
                    <div key={i} className="flex-1 bg-indigo-400 dark:bg-indigo-600 rounded-t-sm opacity-80" style={{ height: `${h + 20}%` }}></div>
                  ))}
                </div>
                <p className="text-xs text-green-500 mt-2 font-semibold">↑ Climbing — rank improving steadily</p>
              </div>

              {/* Multi-keyword Table */}
              <div>
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                  <Hash className="w-4 h-4 text-violet-500" /> Top Keyword Rankings
                </p>
                <div className="space-y-3">
                  {[
                    { kw: "steel water bottle", rank: "#14", change: "+6", up: true },
                    { kw: "insulated bottle", rank: "#31", change: "-3", up: false },
                    { kw: "water bottle 1 litre", rank: "#8", change: "+12", up: true },
                    { kw: "gym water bottle", rank: "#22", change: "+1", up: true },
                  ].map((item) => (
                    <div key={item.kw} className="flex items-center justify-between text-xs">
                      <span className="text-gray-600 dark:text-gray-400 truncate max-w-[120px]">{item.kw}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-800 dark:text-gray-200">{item.rank}</span>
                        <span className={`flex items-center gap-0.5 font-semibold ${item.up ? 'text-green-500' : 'text-red-500'}`}>
                          {item.up ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}{item.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visibility Gauge */}
              <div>
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-blue-500" /> Search Visibility
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Page 1 Keywords", pct: 35, color: "bg-indigo-500" },
                    { label: "Page 2 Keywords", pct: 42, color: "bg-violet-400" },
                    { label: "Page 3+ Keywords", pct: 23, color: "bg-gray-300 dark:bg-gray-600" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                        <span>{item.label}</span><span>{item.pct}%</span>
                      </div>
                      <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-indigo-500 mt-3 font-semibold">35% of tracked keywords on Page 1</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── LOGIN CAPTURE ─── */}
      <section className="py-14 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-10 shadow-sm text-center">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Unlock the Full Keyword Intelligence Report</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Sign in to access multi-keyword rank tracking, historical trend data, and keyword opportunity scoring.</p>
          {isLoggedIn ? (
            <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 font-semibold">
              <CheckCircle2 className="w-5 h-5" /> You're logged in — full report access enabled.
            </div>
          ) : (
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setLocation('/login')} className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold rounded-xl text-sm hover:from-indigo-600 hover:to-violet-600 transition-all flex items-center gap-2 shadow-lg">
                <LogIn className="w-4 h-4" /> Log In to Access
              </button>
              <button onClick={() => setLocation('/signup')} className="px-6 py-3 border-2 border-indigo-300 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 font-bold rounded-xl text-sm hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all">
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
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-8">Powered by Real Amazon India Search Data</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-6">
            {[
              "Scans live Amazon India organic search results",
              "Tracks rank for multiple keywords per product",
              "Detects rank movements week-over-week",
              "Built for Amazon India search algorithm behaviour",
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3 bg-white dark:bg-gray-800 border border-green-100 dark:border-green-900/30 rounded-xl px-5 py-4 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300 text-left">{point}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">This is direct search result data — not keyword volume estimates.</p>
          <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">Used by sellers improving keyword visibility across Amazon India categories.</p>
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
                  "Sellers optimizing listings for better organic visibility",
                  "Brands tracking rank impact of listing changes",
                  "Agencies managing SEO for multiple seller accounts",
                  "New sellers validating keyword strategy before launch",
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
                  "Businesses selling on non-Indian Amazon marketplaces",
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
          <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto text-sm">Amazon India's A9 algorithm behaves differently from other marketplaces. This tool is calibrated for it.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Globe className="w-6 h-6" />, text: "Amazon India search index" },
              { icon: <Hash className="w-6 h-6" />, text: "Hindi + English keyword support" },
              { icon: <Target className="w-6 h-6" />, text: "Category-specific rank norms" },
              { icon: <Shield className="w-6 h-6" />, text: "Connected to full Insydz platform" },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-700 transition-all">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-500 mx-auto mb-3">{item.icon}</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UPGRADE PATH ─── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-gray-800 dark:to-gray-900 border-2 border-indigo-100 dark:border-indigo-900/40 rounded-3xl p-12 shadow-xl">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Want Daily Rank Tracking Across All Keywords?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">This free checker gives you a one-time rank snapshot. Upgrade to track dozens of keywords daily, get alerts when rankings drop, and see historical rank trends over time.</p>
          <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white font-bold px-10 py-6 rounded-full shadow-2xl group">
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
              <div key={faq.id} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-indigo-200 dark:hover:border-indigo-700 transition-colors">
                <button onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)} className="w-full px-6 py-5 flex items-center justify-between text-left">
                  <span className="font-bold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                  {expandedFaq === faq.id
                    ? <ChevronDown className="w-5 h-5 text-indigo-500 shrink-0" />
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
            This free Amazon keyword rank checker helps Indian sellers track where their products appear in Amazon India search results for specific keywords. Ideal for Amazon India sellers, private label brands, and D2C businesses looking to improve organic visibility, optimize listings, and outrank competitors on high-traffic search terms.
          </p>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 px-4 bg-gradient-to-br from-indigo-500 to-violet-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-4 text-white">Stop Flying Blind. Know Where You Rank.</h2>
          <p className="text-indigo-100 text-lg mb-10">One rank check today reveals exactly where your listing stands — and what to fix next.</p>
          <button
            onClick={() => { if (!isLoggedIn) { setLocation('/login'); } else { window.scrollTo({ top: 0, behavior: 'smooth' }); } }}
            className="bg-white text-indigo-600 font-black px-12 py-5 rounded-full shadow-2xl hover:scale-105 transition-all text-lg inline-flex items-center gap-3"
          >
            Check Keyword Rank Now <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ─── STICKY MOBILE CTA ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white dark:bg-gray-900 border-t-2 border-indigo-200 dark:border-indigo-800 px-4 py-3 shadow-2xl">
        <button
          onClick={() => { if (!isLoggedIn) { setLocation('/login'); } else { window.scrollTo({ top: 0, behavior: 'smooth' }); } }}
          className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2"
        >
          {isLoggedIn
            ? <><Search className="w-4 h-4" /> Check Keyword Rank — Free</>
            : <><LogIn className="w-4 h-4" /> Log In to Check Keyword Rank</>}
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