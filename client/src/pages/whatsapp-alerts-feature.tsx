// import { useState } from "react";
// import { useLocation } from "wouter";
// import { ArrowRight, Bell, Smartphone } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function WhatsAppAlertsFeaturePage() {
//   const [, setLocation] = useLocation();
//   return (
//     <div className="min-h-screen bg-white">
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-green-200">
//         <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
//           <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setLocation("/")}>
//             <img src="/logo.png" alt="Insydz" className="w-12 h-12 rounded-2xl" />
//             <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Insydz</span>
//           </div>
//           <Button onClick={() => setLocation("/login")} className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full">Start Free</Button>
//         </div>
//       </nav>
//       <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-6xl font-black mb-6">WhatsApp Alerts — <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Get Notified</span> Where You Actually Look</h1>
//           <p className="text-xl text-gray-700 mb-8">Instant WhatsApp alerts for price changes, stockouts, reviews, and more — because you don't check emails.</p>
//           <Button onClick={() => setLocation("/login")} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold px-12 py-6 rounded-full shadow-2xl">
//             👉 Enable WhatsApp Alerts Free <ArrowRight className="ml-2" />
//           </Button>
//         </div>
//       </section>
//       <footer className="bg-gray-900 py-12 text-center">
//         <p className="text-gray-500 text-sm">© 2025 Insydz. 🇮🇳</p>
//       </footer>
//     </div>
//   );
// }


import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import {
  ArrowRight, CheckCircle2, Target, Zap,
  Bell, TrendingUp, TrendingDown, Shield,
  BarChart3, ChevronRight, AlertCircle,
  Search, X, Check, Eye, Sparkles,
  ChevronDown, Award, DollarSign, Users,
  Brain, Package, ThumbsUp, MessageCircle,
  Clock, Smartphone, Menu, Sun, Moon,
  ShoppingBag, Store, Briefcase, Code,
  Globe, Trophy, ArrowLeft, BookOpen,
  Video, FileText, Star, RefreshCw,
  Presentation,
  Flame
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

export default function WhatsAppAlertsFeaturePage() {
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
    { question: "How do I set up WhatsApp alerts?", answer: "Simply connect your WhatsApp number in your Insydz dashboard, choose which alerts you want, and set your thresholds. You'll start receiving alerts within minutes — no extra app needed." },
    { question: "Which alerts can I receive on WhatsApp?", answer: "Price change alerts, competitor move alerts, stockout warnings, review notifications, Buy Box loss alerts, and AI recommendations — all delivered instantly to your WhatsApp." },
    { question: "Will I be spammed with too many messages?", answer: "No! You have full control. Set minimum thresholds (e.g., only alert when price changes by 5%+), choose alert frequency, and snooze during off-hours. You decide what matters." },
    { question: "Does this work on WhatsApp Business too?", answer: "Yes! Insydz works with both personal WhatsApp and WhatsApp Business accounts. Perfect for team accounts and agencies managing multiple sellers." },
    { question: "Is WhatsApp alerts available on the free plan?", answer: "Yes! The free plan includes basic WhatsApp alerts for limited products. Upgrade for unlimited alerts, instant delivery, and custom alert templates." },
    { question: "Can multiple team members receive alerts?", answer: "Yes! On paid plans, you can add multiple WhatsApp numbers so your whole team stays informed — managers, operations staff, and more." }
  ];

  const alertTypes = [
    { emoji: "💰", title: "Price Change Alerts", desc: "Competitor dropped price by 10%+ on your top product", color: "border-green-400 bg-green-50 dark:bg-green-900/20" },
    { emoji: "📦", title: "Stockout Warnings", desc: "Only 12 units left. Reorder now to avoid stockout", color: "border-orange-400 bg-orange-50 dark:bg-orange-900/20" },
    { emoji: "⭐", title: "New Review Alerts", desc: "1-star review received on Wireless Earbuds Pro", color: "border-red-400 bg-red-50 dark:bg-red-900/20" },
    { emoji: "🎯", title: "Buy Box Lost Alert", desc: "You lost Buy Box on Phone Case Bundle — act now", color: "border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20" },
    { emoji: "🚀", title: "AI Opportunity Alert", desc: '"budget earbuds" — low competition, 18K searches/mo', color: "border-blue-400 bg-blue-50 dark:bg-blue-900/20" },
    { emoji: "📈", title: "Rank Change Alert", desc: "Your keyword rank improved from #12 to #4 today!", color: "border-purple-400 bg-purple-50 dark:bg-purple-900/20" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg" : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-1">
              <button onClick={() => setLocation('/')} className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </button>
              <div className="flex items-center space-x-1 group cursor-pointer" onClick={() => setLocation('/')}>
                <div className="relative">
                  <img src="/logo.png" alt="Insydz Logo" className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Insydz</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2" ref={dropdownRef}>
              <button onClick={() => setLocation('/')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all">Home</button>

              {(["Solutions", "Use Cases"] as const).map((menu) => (
                <div key={menu} className="relative">
                  <button onMouseEnter={() => setActiveDropdown(menu)} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all flex items-center gap-1">
                    {menu} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === menu ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === menu && (
                    <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {navigationMenu[menu].map((item, i) => (
                        <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors flex items-center gap-3 group">
                          <span className="text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                          <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 flex-1">{item.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Features Dropdown - HIGHLIGHTED */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Features')} className="px-3 py-2 text-sm text-green-600 dark:text-green-500 font-semibold rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all flex items-center gap-1">
                  Features <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Features' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Features' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu.Features.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 flex-1">{item.name}</span>
                        {item.badge && <span className="text-xs bg-gradient-to-r from-green-600 to-emerald-600 text-white px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => setLocation('/pricing')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all">Pricing</button>
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
              {/* Compare Dropdown */}
                                                        <div className="relative">
                                                          <button
                                                            onMouseEnter={() => setActiveDropdown('Compare')}
                                                            className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1"
                                                          >
                                                            Compare
                                                            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Compare' ? 'rotate-180' : ''}`} />
                                                          </button>
                                                          {activeDropdown === 'Compare' && (
                                                            <div 
                                                              onMouseLeave={() => setActiveDropdown(null)}
                                                              className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                                                            >
                                                              {navigationMenu.Compare.map((item, i) => (
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
                                                                </button>
                                                              ))}
                                                            </div>
                                                          )}
                                                        </div>

              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Resources')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all flex items-center gap-1">
                  Resources <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Resources' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Resources' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu.Resources.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 flex-1">{item.name}</span>
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


              <Button onClick={() => setLocation('/login')} className="ml-2 text-sm bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">Login</Button>
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
              <button onClick={() => { setLocation('/'); setIsMenuOpen(false); }} className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>
              {(["Solutions", "Use Cases"] as const).map((menu) => (
                <div key={menu}>
                  <button onClick={() => toggleMobileMenu(menu)} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg font-medium">
                    {menu} <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === menu ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileActiveMenu === menu && (
                    <div className="ml-4 mt-2 space-y-1">
                      {navigationMenu[menu].map((item, i) => (
                        <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg">
                          {item.icon}{item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Features - highlighted */}
              <div>
                <button onClick={() => toggleMobileMenu('Features')} className="flex items-center justify-between w-full px-4 py-2 text-green-600 dark:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg font-semibold">
                  Features <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Features' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'Features' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu.Features.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg">
                        {item.icon}{item.name}
                        {item.badge && <span className="text-xs bg-green-500 text-white px-1.5 py-0.5 rounded-full">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button onClick={() => setLocation('/pricing')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg font-medium">Pricing</button>
              {/* Mobile Free Tools */}
                                                        <div>
                                                          <button 
                                                            onClick={() => toggleMobileMenu('Free Tools')}
                                                            className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
                                                          >
                                                            Free Tools
                                                            <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Free Tools' ? 'rotate-180' : ''}`} />
                                                          </button>
                                                          {mobileActiveMenu === 'Free Tools' && (
                                                            <div className="ml-4 mt-2 space-y-1">
                                                              {navigationMenu["Free Tools"].map((item, i) => (
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
                                          
                                                       {/* Mobile Compare */}
                                                                     <div>
                                                                       <button 
                                                                         onClick={() => toggleMobileMenu('Compare')}
                                                                         className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
                                                                       >
                                                                         Compare
                                                                         <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Compare' ? 'rotate-180' : ''}`} />
                                                                       </button>
                                                                       {mobileActiveMenu === 'Compare' && (
                                                                         <div className="ml-4 mt-2 space-y-1">
                                                                           {navigationMenu.Compare.map((item, i) => (
                                                                             <button 
                                                                               key={i} 
                                                                               onClick={() => handleMenuItemClick(item)}
                                                                               className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
                                                                             >
                                                                               {item.icon}
                                                                               {item.name}
                                                                             </button>
                                                                           ))}
                                                                         </div>
                                                                       )}
                                                                     </div>
                                          
                                                         {/* Mobile Resources */}
                                                        <div>
                                                          <button 
                                                            onClick={() => toggleMobileMenu('Resources')}
                                                            className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
                                                          >
                                                            Resources
                                                            <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Resources' ? 'rotate-180' : ''}`} />
                                                          </button>
                                                          {mobileActiveMenu === 'Resources' && (
                                                            <div className="ml-4 mt-2 space-y-1">
                                                              {navigationMenu.Resources.map((item, i) => (
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

              <Button onClick={() => { setLocation('/login'); setIsMenuOpen(false); }} className="w-full mt-2 bg-gradient-to-r from-pink-500 to-rose-500">Login</Button>
              <button className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 w-full flex justify-center items-center" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 rounded-full px-4 py-2">
                <Bell className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">Feature Spotlight • NEW</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
                WhatsApp Alerts —
                <br />
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">Get Notified</span>
                <br />
                Where You Actually Look
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Instant WhatsApp alerts for price changes, stockouts, reviews, and more.
                <span className="text-green-700 font-semibold"> Because you check WhatsApp 50x a day — not your email.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-green-500/50 transition-all group">
                  👉 Enable WhatsApp Alerts Free
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} size="lg" variant="outline" className="border-2 border-green-600 text-green-700 dark:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 font-semibold px-8 py-6 text-lg rounded-full">
                  See How It Works →
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                {["Instant delivery", "No extra app needed", "Full alert control"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual - WhatsApp Mock */}
            <div className="relative">
              <div className="relative bg-white dark:bg-gray-900 border-2 border-green-200 dark:border-green-800 rounded-3xl p-6 shadow-2xl max-w-sm mx-auto">
                {/* Phone header */}
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200 dark:border-gray-700 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <Bell className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-sm">Insydz Alerts</p>
                    <p className="text-xs text-green-600">● Online</p>
                  </div>
                </div>

                {/* WhatsApp Messages */}
                <div className="space-y-3">
                  {[
                    { emoji: "💰", msg: "🚨 Price Alert!\nCompetitor dropped Wireless Earbuds to ₹999 (was ₹1,299)\nYour price: ₹1,199\nAction needed to win Buy Box!", time: "10:23 AM", urgent: true },
                    { emoji: "📦", msg: "⚠️ Low Stock Warning!\nPhone Case Bundle: Only 8 units left\nReorder ASAP to avoid stockout this weekend", time: "11:45 AM", urgent: false },
                    { emoji: "⭐", msg: "📢 New Review Alert!\n1★ review on Gaming Mouse X1\n\"stopped working after 2 weeks\"\nRespond quickly to protect rating!", time: "2:17 PM", urgent: true },
                  ].map((msg, i) => (
                    <div key={i} className={`rounded-2xl rounded-tl-sm p-3 max-w-[90%] ${msg.urgent ? 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700' : 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700'}`}>
                      <p className="text-xs text-gray-800 dark:text-gray-200 whitespace-pre-line leading-relaxed">{msg.msg}</p>
                      <p className="text-xs text-gray-400 mt-1 text-right">{msg.time} ✓✓</p>
                    </div>
                  ))}

                  <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tr-sm p-3 max-w-[80%] ml-auto">
                    <p className="text-xs text-gray-700 dark:text-gray-300">Got it! Adjusting price now 👍</p>
                    <p className="text-xs text-gray-400 mt-1 text-right">2:18 PM ✓✓</p>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl px-4 py-2 shadow-xl">
                  <p className="text-white font-bold text-sm flex items-center gap-1"><Smartphone className="w-4 h-4" /> WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Types */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">6 Types of Alerts That Save Your Business</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Never miss a critical event again — get the right alert at the right time</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alertTypes.map((alert, i) => (
              <div key={i} className={`border-2 ${alert.color} dark:border-opacity-60 rounded-2xl p-6 hover:shadow-lg transition-all`}>
                <div className="text-4xl mb-4">{alert.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{alert.title}</h3>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">"{alert.desc}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              Why Email Alerts <br /><span className="text-red-600">Don't Work for Sellers</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: <Clock className="w-8 h-8" />, title: "Emails sit unread for hours", color: "from-red-500 to-orange-500" },
              { icon: <AlertCircle className="w-8 h-8" />, title: "Critical alerts lost in spam", color: "from-orange-500 to-yellow-500" },
              { icon: <Eye className="w-8 h-8" />, title: "You check WhatsApp, not dashboards", color: "from-yellow-500 to-orange-500" },
              { icon: <TrendingDown className="w-8 h-8" />, title: "Slow reaction = lost sales", color: "from-orange-500 to-red-500" }
            ].map((pain, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-green-400 hover:shadow-lg transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>{pain.icon}</div>
                <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{pain.title}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-400 dark:border-green-600 rounded-3xl p-8 text-center shadow-lg">
            <Smartphone className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Indians open <span className="text-green-600">WhatsApp 50+ times daily</span> — but check email twice</p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">Your alerts should be where your attention already is.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">Set Up in 60 Seconds</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              No technical knowledge needed —
              <span className="text-green-700 font-semibold"> connect WhatsApp, choose alerts, and you're live.</span>
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 -translate-y-1/2"></div>
            <div className="grid lg:grid-cols-4 gap-8 relative">
              {[
                { step: "1", title: "Connect your WhatsApp", detail: "Scan a QR code — takes 10 seconds", icon: <Smartphone className="w-12 h-12" /> },
                { step: "2", title: "Choose your alerts", detail: "Pick what matters to your business", icon: <Bell className="w-12 h-12" /> },
                { step: "3", title: "Set your thresholds", detail: "Control when & how often you're notified", icon: <Shield className="w-12 h-12" /> },
                { step: "4", title: "React instantly", detail: "Take action before competitors do", icon: <Zap className="w-12 h-12" /> }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 border-2 border-green-300 dark:border-green-700 rounded-2xl p-6 text-center relative z-10 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-black text-white">{item.step}</div>
                  <div className="bg-green-100 dark:bg-green-900/20 rounded-xl p-4 mb-4 text-green-600">{item.icon}</div>
                  <p className="text-gray-900 dark:text-white font-semibold mb-2">{item.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group">
              👉 Enable WhatsApp Alerts Free
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">What WhatsApp Alerts Do for Your Business</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Zap />, title: "React in minutes, not hours", detail: "Beat competitors to every opportunity", color: "text-green-600" },
              { icon: <Shield />, title: "Protect from stockouts", detail: "Get warnings before it's too late", color: "text-blue-600" },
              { icon: <Star />, title: "Guard your reputation", detail: "Respond to bad reviews instantly", color: "text-yellow-600" },
              { icon: <TrendingUp />, title: "Win the Buy Box faster", detail: "Immediate price change notifications", color: "text-emerald-600" },
              { icon: <Users />, title: "Keep your team informed", detail: "Add multiple WhatsApp numbers", color: "text-purple-600" },
              { icon: <RefreshCw />, title: "Stay updated 24/7", detail: "AI watches while you sleep", color: "text-orange-600" }
            ].map((outcome, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center ${outcome.color}`}>{outcome.icon}</div>
                  <ThumbsUp className="w-6 h-6 text-green-500" />
                </div>
                <p className="text-gray-900 dark:text-white font-semibold leading-relaxed mb-1">{outcome.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{outcome.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Email Alerts vs WhatsApp Alerts</h2>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-300">Aspect</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 dark:text-gray-300">Email Alerts</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20">WhatsApp Alerts</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: "Open Rate", manual: "~20% (if not in spam)", insydz: "98% open rate" },
                  { aspect: "Response Time", manual: "Hours later", insydz: "Within minutes" },
                  { aspect: "Visibility", manual: "Buried in inbox", insydz: "Front & center on phone" },
                  { aspect: "Team Reach", manual: "One inbox only", insydz: "Multiple numbers" },
                  { aspect: "User Experience", manual: "Friction-heavy", insydz: "Natural & instant" }
                ].map((row, i) => (
                  <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{row.aspect}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-red-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{row.manual}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center bg-green-50 dark:bg-green-900/20">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-900 dark:text-white font-medium">{row.insydz}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl">
              👉 Switch to WhatsApp Alerts
            </Button>
          </div>
        </div>
      </section>

      {/* PLG Entry Point */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Start Free. Get Alerts Instantly.</h2>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-300 dark:border-green-700 rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-black text-green-600">₹0</span>
                <span className="text-2xl text-gray-600 dark:text-gray-400">/ Forever</span>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">Free Plan Includes:</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {["Price change alerts", "Stockout warnings", "Review notifications", "Basic Buy Box alerts"].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-bold text-green-600">Upgrade Teaser:</span> Unlock unlimited alerts, multiple WhatsApp numbers, instant delivery, and custom alert templates on paid plans.
              </p>
            </div>
            <div className="text-center">
              <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl">
                👉 Enable WhatsApp Alerts Free
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">WhatsApp Alerts – FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-green-400 transition-all">
                <button onClick={() => toggleFaq(i)} className="w-full px-6 py-4 flex items-center justify-between text-left">
                  <span className="font-bold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-green-600 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <div className="px-6 pb-4 text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Related Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Competitor Price Tracking", icon: <TrendingDown />, color: "from-orange-500 to-red-500", route: "/features/competitor-price-tracking-feature" },
              { title: "AI Recommendations", icon: <Zap />, color: "from-pink-500 to-rose-500", route: "/features/ai-recommendations-feature" },
              { title: "Price Optimization", icon: <DollarSign />, color: "from-green-500 to-emerald-500", route: "/features/price-optimization-feature" },
              { title: "Review Analytics", icon: <MessageCircle />, color: "from-purple-500 to-pink-500", route: "/features/review-analytics-feature" },
              { title: "Keyword Tracking", icon: <Search />, color: "from-blue-500 to-cyan-500", route: "/features/keyword-rank-tracking-feature" },
              { title: "Product Research", icon: <Target />, color: "from-indigo-500 to-purple-500", route: "/features/product-research-feature" }
            ].map((feature, i) => (
              <div key={i} onClick={() => feature.route && setLocation(feature.route)} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all cursor-pointer group">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 transition-colors">{feature.title}</h3>
                <ArrowRight className="w-5 h-5 text-green-600 mt-2 group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
            Stop Missing Critical Alerts.
            <br />
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Get Them on WhatsApp.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group">
              👉 Enable WhatsApp Alerts Free
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button onClick={() => setLocation("/")} size="lg" variant="outline" className="border-2 border-green-600 text-green-700 dark:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 font-semibold px-12 py-6 text-lg rounded-full">
              Explore All Features →
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t-2 border-green-300 dark:border-green-700 p-4 shadow-2xl z-40">
        <Button onClick={handleGetStarted} className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 rounded-full shadow-xl">
          👉 Enable WhatsApp Alerts Free
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="Insydz Logo" className="w-10 h-10 rounded-xl object-contain" />
                <span className="text-lg font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Insydz</span>
              </div>
              <p className="text-gray-400 text-sm">AI-powered intelligence for Indian sellers</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => setLocation("/")} className="block text-gray-400 hover:text-green-400 transition-colors text-sm">Home</button>
                <button onClick={() => setLocation("/pricing")} className="block text-gray-400 hover:text-green-400 transition-colors text-sm">Pricing</button>
                <button onClick={handleGetStarted} className="block text-gray-400 hover:text-green-400 transition-colors text-sm">Login</button>
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