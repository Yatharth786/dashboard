import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import {
  ArrowRight, CheckCircle2, Target, Zap,
  Bell, TrendingUp, TrendingDown, Shield,
  BarChart3, ChevronRight, AlertCircle,
  Search, X, Check, RefreshCw, Eye,
  Sparkles, ChevronDown, LineChart, Award,
  Lightbulb, Package, DollarSign, Users,
  Brain, ShoppingCart, Filter, Layers,
  ThumbsUp, MessageCircle, Star, Activity,
  Clock, Crosshair, List, Maximize2, Gauge,
  Menu, Sun, Moon, ShoppingBag, Store,
  Briefcase, Code, Globe, Trophy, ArrowLeft,
  BookOpen, Video, FileText, Flame, CalendarDays,
  Gift, Rocket, Lock, BarChart2, Presentation
} from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function FestiveTrendFeaturePage() {
  const [, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    isDarkMode ? html.classList.add("dark") : html.classList.remove("dark");
  }, [isDarkMode]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleGetStarted = () => setLocation("/login");
  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);
  const toggleMobileMenu = (menuName: string) => setMobileActiveMenu(mobileActiveMenu === menuName ? null : menuName);

  const handleMenuItemClick = (item: MenuItemWithBadge) => {
    if (item.route) {
      setLocation(item.route);
      setActiveDropdown(null);
      setIsMenuOpen(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    setLocation('/');
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };



  const faqs = [
    { question: "When will Festive Trend Intelligence be available?", answer: "We're working hard to launch this feature before the next major festive season — Diwali 2025. Stay tuned for the announcement the moment it goes live." },
    { question: "Which festivals will be covered?", answer: "We're covering all major Indian festive seasons — Diwali, Holi, Navratri, Eid, Christmas, Pongal, Onam, and more. We'll also track regional festival trends specific to states." },
    { question: "Will it work for both Amazon and Flipkart?", answer: "Yes. Festive Trend Intelligence will cover both Amazon India and Flipkart, since both platforms see massive festive sales spikes with different category winners." },
    { question: "What kind of predictions will it make?", answer: "The feature will predict demand spikes by category and ASIN, suggest festive pricing windows, recommend inventory build-up timelines, and highlight which keywords trend during each festive period." },
    { question: "Is this available on the free plan?", answer: "Basic festive calendar and trend alerts will be available on free plans. Advanced demand forecasting and automated inventory recommendations will be on paid plans." },
    { question: "How far in advance will predictions be available?", answer: "We're targeting 4–8 weeks of advance notice before each festive season, giving you enough time to adjust inventory, pricing, and listings proactively." },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">

      {/* ── NAVIGATION ── matches ai-recommendations-feature exactly ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg" : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <div className="flex items-center space-x-3">
              
              <div className="flex items-center space-x-1 group cursor-pointer" onClick={() => setLocation('/')}>
                <div className="relative">
                  <img src="/logo.png" alt="Insydz Logo" className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Insydz</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-3" ref={dropdownRef}>

              {/* Solutions + Use Cases */}
              {(["Solutions", "Use Cases"] as const).map((menu) => (
                <div key={menu} className="relative">
                  <button onMouseEnter={() => setActiveDropdown(menu)} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all flex items-center gap-1">
                    {menu} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === menu ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === menu && (
                    <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {navigationMenu[menu].map((item, i) => (
                        <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors flex items-center gap-3 group">
                          <span className="text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                          <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 flex-1">{item.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Features — HIGHLIGHTED (this is the active page's section) */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Features')} className="px-3 py-2 text-sm text-orange-600 dark:text-orange-500 font-semibold rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all flex items-center gap-1">
                  Features <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Features' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Features' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu.Features.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 flex-1">{item.name}</span>
                        {item.badge && <span className="text-xs bg-gradient-to-r from-orange-500 to-amber-500 text-white px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => setLocation('/pricing')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all">Pricing</button>

              {/* Free Tools Dropdown */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Free Tools')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all flex items-center gap-1">
                  Free Tools <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Free Tools' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Free Tools' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu["Free Tools"].map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 flex-1">{item.name}</span>
                        {item.badge && <span className="text-xs bg-gradient-to-r from-orange-500 to-amber-500 text-white px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Compare Dropdown */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Compare')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all flex items-center gap-1">
                  Compare <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Compare' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Compare' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu.Compare.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 flex-1">{item.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Resources')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all flex items-center gap-1">
                  Resources <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Resources' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Resources' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu.Resources.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 flex-1">{item.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

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


              <Button onClick={() => setLocation('/login')} className="ml-2 text-sm bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">Login</Button>
              <button className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
              </button>
            </div>

            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              <button onClick={() => { setLocation('/'); setIsMenuOpen(false); }} className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>
              {(["Solutions", "Use Cases"] as const).map((menu) => (
                <div key={menu}>
                  <button onClick={() => toggleMobileMenu(menu)} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg font-medium">
                    {menu} <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === menu ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileActiveMenu === menu && (
                    <div className="ml-4 mt-2 space-y-1">
                      {navigationMenu[menu].map((item, i) => (
                        <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg">
                          {item.icon}{item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Features — highlighted */}
              <div>
                <button onClick={() => toggleMobileMenu('Features')} className="flex items-center justify-between w-full px-4 py-2 text-orange-600 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg font-semibold">
                  Features <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Features' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'Features' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu.Features.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg">
                        {item.icon}{item.name}
                        {item.badge && <span className="text-xs bg-orange-500 text-white px-1.5 py-0.5 rounded-full">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => setLocation('/pricing')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg font-medium">Pricing</button>

              {/* Mobile Free Tools */}
              <div>
                <button onClick={() => toggleMobileMenu('Free Tools')} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg font-medium">
                  Free Tools <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Free Tools' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'Free Tools' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu["Free Tools"].map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg">
                        {item.icon}{item.name}
                        {item.badge && <span className="ml-auto text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Compare */}
              <div>
                <button onClick={() => toggleMobileMenu('Compare')} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg font-medium">
                  Compare <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Compare' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'Compare' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu.Compare.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg">
                        {item.icon}{item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Resources */}
              <div>
                <button onClick={() => toggleMobileMenu('Resources')} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg font-medium">
                  Resources <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Resources' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'Resources' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu.Resources.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg">
                        {item.icon}{item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

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


              <Button onClick={() => { setLocation('/login'); setIsMenuOpen(false); }} className="w-full mt-2 bg-gradient-to-r from-orange-500 to-amber-500">Login</Button>
              <button className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 w-full flex justify-center items-center" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Copy */}
            <div className="space-y-8">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 rounded-full px-4 py-2">
                  <Flame className="w-4 h-4 text-orange-600" />
                  <span className="text-sm font-medium text-orange-700">Feature Spotlight</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 border border-amber-400 dark:border-amber-600 rounded-full px-4 py-2 animate-pulse">
                  <Clock className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                  <span className="text-sm font-bold text-amber-800 dark:text-amber-300">🚀 Coming Soon</span>
                </div>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
                Festive Trend Intelligence —
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">Sell Before the Season Peaks</span>
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Know which products will spike before Diwali, Holi, Eid, and every Indian festive season.
                <span className="text-orange-700 dark:text-orange-400 font-semibold"> Stock up, price right, and rank before competitors even notice the trend.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl cursor-default opacity-90">
                  🚀 Coming Soon
                </Button>
                <Button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} size="lg" variant="outline" className="border-2 border-orange-500 text-orange-700 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-semibold px-8 py-6 text-lg rounded-full">
                  See How It Works →
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                {["Diwali, Holi, Eid & 15+ festivals", "4–8 weeks advance predictions", "Amazon India & Flipkart"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual — Upcoming Dashboard Preview */}
            <div className="relative">
              <div className="relative bg-white dark:bg-gray-900 border-2 border-orange-200 dark:border-orange-800 rounded-3xl p-8 shadow-2xl">

                {/* Coming Soon overlay */}
                <div className="absolute inset-0 rounded-3xl bg-white/50 dark:bg-gray-900/70 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center gap-4">
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl px-6 py-4 shadow-xl text-center">
                    <Lock className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="text-white font-black text-lg">Coming Soon</p>
                    <p className="text-orange-100 text-sm">Feature launching soon — stay tuned</p>
                  </div>
                </div>

                {/* Blurred preview */}
                <div className="space-y-4 opacity-50">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="font-bold text-gray-900 dark:text-white">Festive Trend Dashboard</h3>
                    <span className="text-xs bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                      <Flame className="w-3 h-3" /> Live Trends
                    </span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { festival: "🪔 Diwali 2025", weeks: "8 weeks away", spike: "+340%", category: "Lights & Decor", bg: "bg-orange-50 border-orange-300" },
                      { festival: "🎨 Holi 2026", weeks: "22 weeks away", spike: "+210%", category: "Colors & Clothing", bg: "bg-pink-50 border-pink-300" },
                      { festival: "🕌 Eid 2026", weeks: "30 weeks away", spike: "+180%", category: "Apparel & Gifts", bg: "bg-green-50 border-green-300" },
                    ].map((item, i) => (
                      <div key={i} className={`${item.bg} border rounded-xl p-4`}>
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{item.festival}</p>
                            <p className="text-xs text-gray-500">{item.weeks}</p>
                          </div>
                          <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full font-bold">{item.spike} demand</span>
                        </div>
                        <p className="text-xs text-gray-600">Top category: {item.category}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">15+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Festivals tracked</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">8 wks</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Advance notice</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl px-4 py-2 shadow-xl z-20">
                  <p className="text-white font-bold text-sm flex items-center gap-1"><Rocket className="w-4 h-4" /> Launching 2026</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROBLEM SECTION ── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              Why Indian Sellers Miss <br /><span className="text-red-600">Festive Season Profits</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: <Clock className="w-8 h-8" />, title: "Stockouts during peak festive demand", color: "from-red-500 to-orange-500" },
              { icon: <BarChart3 className="w-8 h-8" />, title: "No advance warning of demand spikes", color: "from-orange-500 to-yellow-500" },
              { icon: <Brain className="w-8 h-8" />, title: "Wrong products stocked for the season", color: "from-yellow-500 to-orange-500" },
              { icon: <Target className="w-8 h-8" />, title: "Competitors rank first on festive keywords", color: "from-orange-500 to-red-500" },
            ].map((pain, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-orange-400 hover:shadow-lg transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>{pain.icon}</div>
                <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{pain.title}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-400 dark:border-red-600 rounded-3xl p-8 text-center shadow-lg">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Indian e-commerce sellers lose <span className="text-red-600">lakhs in festive revenue</span></p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">Simply because they didn't prepare in time — not because they lacked the products.</p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4"><X className="w-10 h-10 text-white" /></div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Without Festive Trend Intelligence</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">Reactive, always a step behind competitors</p>
              <div className="space-y-2 text-left">
                {["Scramble to restock when demand spikes", "Miss the keyword trend window", "Lose sales to better-prepared sellers"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-300 dark:border-orange-700 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"><Check className="w-10 h-10 text-white" /></div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">With Festive Trend Intelligence</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">Proactive, stocked up, ranked early</p>
              <div className="space-y-2 text-left">
                {["Know demand spikes 4–8 weeks early", "Rank for festive keywords before season starts", "Never miss a peak sales window again"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">How Festive Trend Intelligence Will Work</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Insydz tracks festive demand patterns across years of Indian marketplace data —
              <span className="text-orange-700 dark:text-orange-400 font-semibold"> and tells you exactly when and how to prepare, well before the season hits.</span>
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 -translate-y-1/2"></div>
            <div className="grid lg:grid-cols-4 gap-8 relative">
              {[
                { step: "1", title: "AI tracks festive demand patterns", detail: "Across years of Indian marketplace data", icon: <BarChart2 className="w-12 h-12" /> },
                { step: "2", title: "Identifies your category opportunities", detail: "Diwali lights, Holi colors, Eid apparel & more", icon: <CalendarDays className="w-12 h-12" /> },
                { step: "3", title: "Sends advance alerts", detail: "4–8 weeks before demand spikes", icon: <Bell className="w-12 h-12" /> },
                { step: "4", title: "You prepare & profit", detail: "Stock, price, and rank before competitors", icon: <Gift className="w-12 h-12" /> },
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 border-2 border-orange-300 dark:border-orange-700 rounded-2xl p-6 text-center relative z-10 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-black text-white">{item.step}</div>
                  <div className="bg-orange-100 dark:bg-orange-900/20 rounded-xl p-4 mb-4 text-orange-600 dark:text-orange-400">{item.icon}</div>
                  <p className="text-gray-900 dark:text-white font-semibold mb-2">{item.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl cursor-default opacity-90">
              🚀 Coming Soon — Stay Tuned
            </Button>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU CAN DO ── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">What You'll Be Able to Do with Festive Trend Intelligence</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <CalendarDays />, title: "Predict festive demand 4–8 weeks early", detail: "Never get caught off guard again", color: "text-orange-600" },
              { icon: <Package />, title: "Know exactly how much to stock", detail: "AI-driven inventory forecasts per category", color: "text-amber-600" },
              { icon: <Search />, title: "Rank for festive keywords before rivals", detail: "Start listing optimization 6 weeks ahead", color: "text-green-600" },
              { icon: <DollarSign />, title: "Set festive pricing windows strategically", detail: "Maximize margins at peak demand", color: "text-blue-600" },
              { icon: <Flame />, title: "Discover breakout festive products", detail: "Spot what's trending before it trends", color: "text-red-600" },
              { icon: <Maximize2 />, title: "Scale festive revenue year over year", detail: "Build a repeatable festive playbook", color: "text-purple-600" },
            ].map((outcome, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center ${outcome.color}`}>{outcome.icon}</div>
                  <ThumbsUp className="w-6 h-6 text-orange-400" />
                </div>
                <p className="text-gray-900 dark:text-white font-semibold leading-relaxed mb-1">{outcome.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{outcome.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE DEPTH ── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Festive Trend Intelligence Will Cover</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { feature: "Festival Calendar", benefit: "Diwali, Holi, Eid, Navratri, Pongal & 10+ more", icon: <CalendarDays className="w-8 h-8" />, color: "from-orange-500 to-amber-500" },
              { feature: "Demand Spike Forecasting", benefit: "Category-level demand predictions weeks in advance", icon: <TrendingUp className="w-8 h-8" />, color: "from-green-500 to-emerald-500" },
              { feature: "Inventory Recommendations", benefit: "Optimal stock levels before each festival", icon: <Package className="w-8 h-8" />, color: "from-blue-500 to-cyan-500" },
              { feature: "Festive Keyword Alerts", benefit: "Rising keywords specific to each festive season", icon: <Search className="w-8 h-8" />, color: "from-purple-500 to-pink-500" },
              { feature: "Pricing Window Signals", benefit: "Best times to raise or lower prices during peak", icon: <DollarSign className="w-8 h-8" />, color: "from-yellow-500 to-orange-500" },
              { feature: "Regional Festival Coverage", benefit: "State-specific trends for Pongal, Onam & more", icon: <Globe className="w-8 h-8" />, color: "from-red-500 to-orange-500" },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-orange-400 hover:shadow-xl transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.feature}</h3>
                <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-orange-500" />{item.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Blind Guessing vs Festive Trend Intelligence</h2>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-300">Aspect</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 dark:text-gray-300">Without It</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-orange-700 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20">With Festive Trend Intelligence</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: "Preparation Time", manual: "React when demand spikes", insydz: "Prepare 4–8 weeks in advance" },
                  { aspect: "Inventory Planning", manual: "Guess based on last year", insydz: "AI-predicted quantities per product" },
                  { aspect: "Keyword Strategy", manual: "Optimize during the festival", insydz: "Rank before the season starts" },
                  { aspect: "Pricing", manual: "React to competitor price changes", insydz: "Set optimal price windows proactively" },
                  { aspect: "Category Discovery", manual: "Stick to known categories", insydz: "AI spots emerging festive trends early" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{row.aspect}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-red-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{row.manual}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center bg-orange-50 dark:bg-orange-900/20">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-orange-500" />
                        <span className="text-sm text-gray-900 dark:text-white font-medium">{row.insydz}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl cursor-default opacity-90">
              🚀 Coming Soon
            </Button>
          </div>
        </div>
      </section>

      {/* ── COMING SOON SECTION ── */}
      <section id="coming-soon" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border-2 border-orange-300 dark:border-orange-700 rounded-3xl p-12 shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">This Feature Is Coming Soon</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Festive Trend Intelligence is currently in development and will be launching before 2026. Follow us for the announcement the moment it goes live.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              {["Diwali, Holi, Eid & 15+ festivals", "4–8 weeks advance demand alerts", "Amazon India & Flipkart support"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl px-4 py-3 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-sm text-gray-800 dark:text-white font-medium text-left">{item}</span>
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-8 py-4 rounded-full shadow-xl text-lg">
              <Clock className="w-5 h-5" /> Coming Soon — 2026
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Is Festive Trend Intelligence Right for You?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-300 dark:border-orange-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center"><Check className="w-6 h-6 text-white" /></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Perfect For</h3>
              </div>
              <ul className="space-y-4">
                {["Amazon India & Flipkart sellers in seasonal categories", "Private label brands selling gifts, décor, apparel, and food", "Sellers who've lost out during Diwali or Holi before", "Agencies managing festive campaigns for multiple clients", "Anyone wanting to plan inventory 4–8 weeks ahead"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-gray-300 dark:border-gray-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center"><AlertCircle className="w-6 h-6 text-white" /></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Less Useful For</h3>
              </div>
              <ul className="space-y-4">
                {["Sellers in non-seasonal, evergreen-only categories", "Businesses that don't sell on Amazon India or Flipkart", "Sellers who prefer reacting over planning ahead"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Festive Trend Intelligence – FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-orange-400 transition-all">
                <button onClick={() => toggleFaq(i)} className="w-full px-6 py-4 flex items-center justify-between text-left">
                  <span className="font-bold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <div className="px-6 pb-4 text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED FEATURES ── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Related Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI Recommendations", icon: <Zap />, color: "from-pink-500 to-rose-500", route: "/features/ai-recommendations-feature" },
              { title: "Price Optimization", icon: <DollarSign />, color: "from-green-500 to-emerald-500", route: "/features/price-optimization-feature" },
              { title: "Keyword & Rank Tracking", icon: <Search />, color: "from-blue-500 to-cyan-500", route: "/features/keyword-rank-tracking-feature" },
              { title: "Product Research", icon: <Package />, color: "from-orange-500 to-red-500", route: "/features/product-research-feature" },
              { title: "Competitor Price Tracking", icon: <TrendingDown />, color: "from-red-500 to-orange-500", route: "/features/competitor-price-tracking-feature" },
              { title: "WhatsApp Alerts", icon: <Bell />, color: "from-emerald-500 to-green-500", route: "/features/whatsapp-alerts-feature" },
            ].map((feature, i) => (
              <div key={i} onClick={() => feature.route && setLocation(feature.route)} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all cursor-pointer group">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors">{feature.title}</h3>
                <ArrowRight className="w-5 h-5 text-orange-500 mt-2 group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
            The Next Festive Season Is
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Closer Than You Think.</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">This feature is coming soon — be ready to sell smarter this festive season.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl">
              <Clock className="w-5 h-5" /> Coming Soon — 2026
            </div>
            <Button onClick={() => setLocation("/")} size="lg" variant="outline" className="border-2 border-orange-500 text-orange-700 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-semibold px-12 py-6 text-lg rounded-full">
              Explore All Features →
            </Button>
          </div>
        </div>
      </section>

      {/* ── STICKY MOBILE CTA ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t-2 border-orange-300 dark:border-orange-700 p-4 shadow-2xl z-40">
        <div className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-4 rounded-full shadow-xl flex items-center justify-center gap-2">
          <Clock className="w-5 h-5" /> Coming Soon — 2026
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="Insydz Logo" className="w-10 h-10 rounded-xl object-contain" />
                <span className="text-lg font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Insydz</span>
              </div>
              <p className="text-gray-400 text-sm">AI-powered intelligence for Indian sellers</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => setLocation("/")} className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">Home</button>
                <button onClick={() => setLocation("/pricing")} className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">Pricing</button>
                <button onClick={handleGetStarted} className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">Login</button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>contact@insydz.com</p>
                <p>+91 98765 43210</p>
                <p>New Delhi, India</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2025 Insydz. All rights reserved. Built for Indian sellers 🇮🇳</p>
          </div>
        </div>
      </footer>

    </div>
  );
}