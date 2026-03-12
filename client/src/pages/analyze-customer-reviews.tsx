// import { useState, useEffect } from "react";
// import { useLocation } from "wouter";
// import { 
//   ArrowRight, CheckCircle2, Target, Zap, 
//   Bell, TrendingUp, MessageCircle, Search,
//   ChevronRight, Star, AlertCircle, ChevronDown,
//   ThumbsUp, ThumbsDown, Award, TrendingDown, Heart, Frown
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function AnalyzeCustomerReviewsPage() {
//   const [, setLocation] = useLocation();
//   const [scrolled, setScrolled] = useState(false);
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleGetStarted = () => {
//     setLocation("/login");
//   };

//   const toggleFaq = (index: number) => {
//     setOpenFaq(openFaq === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation */}
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-xl border-b border-purple-200 shadow-lg" : "bg-white/80 backdrop-blur-md border-b border-purple-100"}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => setLocation("/")}>
//               <div className="relative">
//                 <img src="/logo.png" alt="Insydz Logo" className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 object-contain" />
//                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full border-2 border-white animate-pulse"></div>
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <Button onClick={() => setLocation("/")} variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">← Back to Home</Button>
//               <Button onClick={handleGetStarted} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all">Start Free</Button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
//         <div className="relative max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
//                 Turn Customer Reviews Into
//                 <br />
//                 <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">Actionable Insights</span>
//               </h1>
//               <p className="text-xl text-gray-700 leading-relaxed">
//                 Insydz analyzes thousands of reviews with AI to show you what customers really want — 
//                 <span className="text-purple-700 font-semibold"> so you can improve products, fix issues, and boost ratings.</span>
//               </p>
//               <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all group">
//                 👉 Analyze Reviews Free <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </div>
//             <div className="relative bg-white border-2 border-purple-200 rounded-3xl p-8 shadow-2xl">
//               <div className="space-y-4">
//                 <h3 className="font-bold text-gray-900 mb-4">Review Sentiment Analysis</h3>
//                 <div className="grid grid-cols-3 gap-4">
//                   <div className="text-center p-4 bg-green-50 border border-green-200 rounded-xl">
//                     <ThumbsUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
//                     <div className="text-2xl font-bold text-green-600">68%</div>
//                     <div className="text-xs text-gray-600">Positive</div>
//                   </div>
//                   <div className="text-center p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
//                     <Heart className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
//                     <div className="text-2xl font-bold text-yellow-600">22%</div>
//                     <div className="text-xs text-gray-600">Neutral</div>
//                   </div>
//                   <div className="text-center p-4 bg-red-50 border border-red-200 rounded-xl">
//                     <ThumbsDown className="w-8 h-8 text-red-600 mx-auto mb-2" />
//                     <div className="text-2xl font-bold text-red-600">10%</div>
//                     <div className="text-xs text-gray-600">Negative</div>
//                   </div>
//                 </div>
//                 <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mt-4">
//                   <p className="text-sm font-bold text-gray-900 mb-2">Top Complaint:</p>
//                   <p className="text-sm text-gray-700">"Packaging could be better" - mentioned in 342 reviews</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Problem Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900">
//               Why Reading Reviews Manually <span className="text-red-600">Is Impossible</span>
//             </h2>
//           </div>
//           <div className="grid md:grid-cols-4 gap-6 mb-12">
//             {[
//               { icon: <MessageCircle />, title: "Thousands of reviews to read", color: "from-red-500 to-orange-500" },
//               { icon: <TrendingDown />, title: "Critical issues buried in noise", color: "from-orange-500 to-yellow-500" },
//               { icon: <Search />, title: "No way to spot patterns", color: "from-purple-500 to-pink-500" },
//               { icon: <AlertCircle />, title: "Competitors learn faster", color: "from-pink-500 to-red-500" }
//             ].map((pain, i) => (
//               <div key={i} className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-400 hover:shadow-lg transition-all group">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
//                   {pain.icon}
//                 </div>
//                 <p className="text-gray-700 font-medium leading-relaxed">{pain.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//               How Review Analysis Works <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">with Insydz</span>
//             </h2>
//           </div>
//           <div className="grid lg:grid-cols-3 gap-12">
//             {[
//               { step: "1", title: "Connect Your Products", desc: "Add your Amazon & Flipkart products. We pull all reviews automatically.", icon: <Target /> },
//               { step: "2", title: "AI Analyzes Everything", desc: "Our AI reads every review, identifies sentiment, complaints, and patterns.", icon: <Zap /> },
//               { step: "3", title: "Get Clear Insights", desc: "See what customers love, hate, and want improved in simple dashboards.", icon: <Award /> }
//             ].map((item, i) => (
//               <div key={i} className="bg-white border-2 border-purple-300 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all">
//                 <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">{item.step}</div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
//                 <p className="text-gray-700 leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-12">
//             <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group">
//               👉 Analyze Your First Product Free <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//             Stop Guessing What Customers Want. <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Know for Sure.</span>
//           </h2>
//           <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group">
//             👉 Analyze Reviews Free <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//           </Button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <p className="text-gray-500 text-sm">© 2025 Insydz. All rights reserved. 🇮🇳</p>
//         </div>
//       </footer>
//     </div>
//   );
// }



// import { useState, useEffect, useRef } from "react";
// import { useLocation } from "wouter";
// import { 
//   ArrowRight, CheckCircle2, Target, Zap, 
//   Bell, TrendingUp, MessageCircle, Search,
//   ChevronRight, Star, AlertCircle, ChevronDown,
//   ThumbsUp, ThumbsDown, Award, TrendingDown, Heart,X, Frown,
//   Menu, Sun, Moon, ArrowLeft, BookOpen, Video, FileText, 
//   ShoppingBag, Store, Briefcase, Users, Code, Globe, Trophy, Package,
//   Flame, Presentation
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// // Navigation Menu Data
// type MenuItemWithBadge = {
//   name: string;
//   icon: JSX.Element;
//   badge?: string;
//   route?: string;
// };

// type NavigationMenu = {
//   Solutions: MenuItemWithBadge[];
//   "Use Cases": MenuItemWithBadge[];
//   Features: MenuItemWithBadge[];
//   "Free Tools": MenuItemWithBadge[];
//   Resources: MenuItemWithBadge[];
//   Integrations: MenuItemWithBadge[];
//   Compare: MenuItemWithBadge[];
//   About: MenuItemWithBadge[];

// };

// const navigationMenu: NavigationMenu = {
//   Solutions: [
//     { name: "All Solutions (Overview)", icon: <ShoppingBag className="w-4 h-4" />, route: "/solutions" },
//     { name: "For Amazon Sellers (India)", icon: <ShoppingBag className="w-4 h-4" />, route: "/solutions/amazon-sellers" },
//     { name: "For Flipkart Sellers", icon: <Store className="w-4 h-4" />, route: "/solutions/flipkart-sellers" },
//     { name: "For E-commerce Agencies", icon: <Briefcase className="w-4 h-4" />, route: "/solutions/ecommerce-agencies" },
//     { name: "For Brand Managers", icon: <Users className="w-4 h-4" />, route: "/solutions/brand-managers" },
//   ],
//   "Use Cases": [
//     { name: "All Use Cases", icon: <TrendingUp className="w-4 h-4" />, route: "/use-cases" },
//     { name: "Track Competitor Prices", icon: <TrendingDown className="w-4 h-4" />, route: "/use-cases/track-competitor-prices" },
//     { name: "Find Profitable Products", icon: <Target className="w-4 h-4" />, route: "/use-cases/find-profitable-products" },
//     { name: "Analyze Customer Reviews", icon: <MessageCircle className="w-4 h-4" />, route: "/use-cases/analyze-customer-reviews" },
//     { name: "Improve Amazon & Flipkart SEO", icon: <Search className="w-4 h-4" />, route: "/use-cases/improve-seo" },
//     { name: "Avoid Stockouts & Missed Sales", icon: <Package className="w-4 h-4" />, route: "/use-cases/avoid-stockouts" },
//   ],
//   Features: [
//     { name: "Competitor Price Tracking", icon: <TrendingDown className="w-4 h-4" />, route: "/features/competitor-price-tracking-feature" },
//     { name: "Review Analytics", icon: <MessageCircle className="w-4 h-4" />, route: "/features/review-analytics-feature" },
//     { name: "Price Optimization", icon: <TrendingUp className="w-4 h-4" />, route: "/features/price-optimization-feature" },
//     { name: "Keyword & Rank Tracking", icon: <Search className="w-4 h-4" />, route: "/features/keyword-rank-tracking-feature" },
//     { name: "Product Research", icon: <Package className="w-4 h-4" />, route: "/features/product-research-feature" },
//     { name: "AI Recommendations", icon: <Zap className="w-4 h-4" />, route: "/features/ai-recommendations-feature" },
//     { name: "WhatsApp Alerts", icon: <Bell className="w-4 h-4" />, badge: "NEW", route: "/features/whatsapp-alerts-feature" },
//     { name: "Festive Trend Intelligence", icon: <Flame className="w-4 h-4" />, badge: "UPCOMING", route: "/features/festive-trend-feature" },

//   ],
//   "Free Tools": [
//     { name: "Free Amazon Product Analyzer", icon: <Target className="w-4 h-4" />, route: "/free-tools/free-amazon-product-analyzer" },
//     { name: "Free Review Sentiment Checker", icon: <MessageCircle className="w-4 h-4" />, route: "/free-tools/free-review-sentiment-checker" },
//     { name: "Free Competitor Price Checker", icon: <TrendingDown className="w-4 h-4" />, route: "/free-tools/free-competitor-price-checker" },
//     { name: "Free Keyword Rank Checker", icon: <Search className="w-4 h-4" />, badge: "NEW", route: "/free-tools/free-keyword-rank-checker" },
//   ],
//   Resources: [
//     { name: "Expert Blog", icon: <BookOpen className="w-4 h-4" />, route: "/resources/expert-blog" },
//     { name: "Success Stories", icon: <FileText className="w-4 h-4" />, route: "/resources/case-studies" },
//     { name: "Video Masterclasses", icon: <Video className="w-4 h-4" />, route: "/resources/videos" },
//     { name: "Strategic Playbooks", icon: <BookOpen className="w-4 h-4" />, route: "/resources/guides" },
//   ],
//   Integrations: [
//     { name: "Amazon", icon: <ShoppingBag className="w-4 h-4" /> },
//     { name: "Flipkart", icon: <Store className="w-4 h-4" /> },
//     { name: "Shopify", icon: <Globe className="w-4 h-4" /> },
//     { name: "API Documentation", icon: <Code className="w-4 h-4" /> },
//   ],
//   Compare: [
//     { name: "Insydz vs Helium 10", icon: <Trophy className="w-4 h-4" />, route: "/compare/insydzvshelium" },
//     { name: "Insydz vs Jungle Scout", icon: <Trophy className="w-4 h-4" />, route: "/compare/insydzvsjunglescout" },
//     { name: "Insydz vs Viral Launch", icon: <Trophy className="w-4 h-4" />, route: "/compare/insydzvsvirallaunch" },
//   ],
//   About: [
//     { name: "About Us", icon: <Presentation className="w-4 h-4" />, route: "/about/about-us" },
//     { name: "Our Vision", icon: <Globe className="w-4 h-4" />, route: "/about/our-vision" },
//     { name: "Careers", icon: <Users className="w-4 h-4" />, route: "/about/careers" },
//   ],
// };

// export default function AnalyzeCustomerReviewsPage() {
//   const [, setLocation] = useLocation();
//   const [scrolled, setScrolled] = useState(false);
//   const [openFaq, setOpenFaq] = useState<number | null>(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const html = document.documentElement;
//     if (isDarkMode) {
//       html.classList.add("dark");
//     } else {
//       html.classList.remove("dark");
//     }
//   }, [isDarkMode]);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setActiveDropdown(null);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleGetStarted = () => {
//     setLocation("/login");
//   };

//   const toggleFaq = (index: number) => {
//     setOpenFaq(openFaq === index ? null : index);
//   };

//   const toggleMobileMenu = (menuName: string) => {
//     setMobileActiveMenu(mobileActiveMenu === menuName ? null : menuName);
//   };

//   const handleMenuItemClick = (item: MenuItemWithBadge) => {
//     if (item.route) {
//       setLocation(item.route);
//       setActiveDropdown(null);
//       setIsMenuOpen(false);
//     }
//   };

//   const scrollToSection = (sectionId: string) => {
//     setLocation('/');
//     setTimeout(() => {
//       const element = document.getElementById(sectionId);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       }
//     }, 100);
//   };

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-950">
//       {/* Navigation */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg"
//             : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo and Back Button */}
//             <div className="flex items-center space-x-1">
//               <button
//                 onClick={() => setLocation('/')}
//                 className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
//               >
//                 <ArrowLeft className="w-4 h-4" />
//                 <span className="hidden sm:inline">Back</span>
//               </button>
              
//               <div className="flex items-center space-x-1 group cursor-pointer" onClick={() => setLocation('/')}>
//                 <div className="relative">
//                   <img 
//                     src="/logo.png" 
//                     alt="Insydz Logo" 
//                     className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain"
//                   />
//                   <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
//                 </div>
//                 <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                   Insydz
//                 </span>
//               </div>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex items-center space-x-2" ref={dropdownRef}>
//               <button 
//                 onClick={() => setLocation('/')} 
//                 className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
//               >
//                 Home
//               </button>

//               {/* Solutions Dropdown */}
//               <div className="relative">
//                 <button
//                   onMouseEnter={() => setActiveDropdown('Solutions')}
//                   className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1"
//                 >
//                   Solutions
//                   <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Solutions' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {activeDropdown === 'Solutions' && (
//                   <div 
//                     onMouseLeave={() => setActiveDropdown(null)}
//                     className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
//                   >
//                     {navigationMenu.Solutions.map((item, i) => (
//                       <button
//                         key={i}
//                         onClick={() => handleMenuItemClick(item)}
//                         className="w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-3 group"
//                       >
//                         <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
//                           {item.icon}
//                         </span>
//                         <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex-1">
//                           {item.name}
//                         </span>
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Use Cases Dropdown - HIGHLIGHTED */}
//               <div className="relative">
//                 <button
//                   onMouseEnter={() => setActiveDropdown('Use Cases')}
//                   className="px-3 py-2 text-sm text-purple-600 dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-400 font-semibold rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1"
//                 >
//                   Use Cases
//                   <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Use Cases' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {activeDropdown === 'Use Cases' && (
//                   <div 
//                     onMouseLeave={() => setActiveDropdown(null)}
//                     className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
//                   >
//                     {navigationMenu["Use Cases"].map((item, i) => (
//                       <button
//                         key={i}
//                         onClick={() => handleMenuItemClick(item)}
//                         className="w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-3 group"
//                       >
//                         <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
//                           {item.icon}
//                         </span>
//                         <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
//                           {item.name}
//                         </span>
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Features Dropdown */}
//               <div className="relative">
//                 <button
//                   onMouseEnter={() => setActiveDropdown('Features')}
//                   className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1"
//                 >
//                   Features
//                   <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Features' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {activeDropdown === 'Features' && (
//                   <div 
//                     onMouseLeave={() => setActiveDropdown(null)}
//                     className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
//                   >
//                     {navigationMenu.Features.map((item, i) => (
//                       <button
//                         key={i}
//                         onClick={() => handleMenuItemClick(item)}
//                         className="w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-3 group"
//                       >
//                         <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
//                           {item.icon}
//                         </span>
//                         <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex-1">
//                           {item.name}
//                         </span>
//                         {item.badge && (
//                           <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded-full font-semibold">
//                             {item.badge}
//                           </span>
//                         )}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <button 
//                 onClick={() => setLocation('/pricing')}  
//                 className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
//               >
//                 Pricing
//               </button>
//                {/* Free Tools Dropdown */}
//                             <div className="relative">
//                               <button
//                                 onMouseEnter={() => setActiveDropdown('Free Tools')}
//                                 className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1"
//                               >
//                                 Free Tools
//                                 <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Free Tools' ? 'rotate-180' : ''}`} />
//                               </button>
//                               {activeDropdown === 'Free Tools' && (
//                                 <div 
//                                   onMouseLeave={() => setActiveDropdown(null)}
//                                   className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
//                                 >
//                                   {navigationMenu["Free Tools"].map((item, i) => (
//                                     <button
//                                       key={i}
//                                       onClick={() => handleMenuItemClick(item)}
//                                       className="w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-3 group"
//                                     >
//                                       <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
//                                         {item.icon}
//                                       </span>
//                                       <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex-1">
//                                         {item.name}
//                                       </span>
//                                       {item.badge && (
//                                         <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded-full font-semibold">
//                                           {item.badge}
//                                         </span>
//                                       )}
//                                     </button>
//                                   ))}
//                                 </div>
//                               )}
//                             </div>
//               {/* Compare Dropdown */}
//                                                         <div className="relative">
//                                                           <button
//                                                             onMouseEnter={() => setActiveDropdown('Compare')}
//                                                             className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1"
//                                                           >
//                                                             Compare
//                                                             <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Compare' ? 'rotate-180' : ''}`} />
//                                                           </button>
//                                                           {activeDropdown === 'Compare' && (
//                                                             <div 
//                                                               onMouseLeave={() => setActiveDropdown(null)}
//                                                               className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
//                                                             >
//                                                               {navigationMenu.Compare.map((item, i) => (
//                                                                 <button
//                                                                   key={i}
//                                                                   onClick={() => handleMenuItemClick(item)}
//                                                                   className="w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-3 group"
//                                                                 >
//                                                                   <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
//                                                                     {item.icon}
//                                                                   </span>
//                                                                   <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex-1">
//                                                                     {item.name}
//                                                                   </span>
//                                                                 </button>
//                                                               ))}
//                                                             </div>
//                                                           )}
//                                                         </div>

//               {/* Resources Dropdown */}
//               <div className="relative">
//                 <button
//                   onMouseEnter={() => setActiveDropdown('Resources')}
//                   className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1"
//                 >
//                   Resources
//                   <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Resources' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {activeDropdown === 'Resources' && (
//                   <div 
//                     onMouseLeave={() => setActiveDropdown(null)}
//                     className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
//                   >
//                     {navigationMenu.Resources.map((item, i) => (
//                       <button
//                         key={i}
//                         onClick={() => handleMenuItemClick(item)}
//                         className="w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-3 group"
//                       >
//                         <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
//                           {item.icon}
//                         </span>
//                         <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex-1">
//                           {item.name}
//                         </span>
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* About Dropdown */}
//               <div className="relative">
//                 <button
//                   onMouseEnter={() => setActiveDropdown('About')}
//                   className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1"
//                 >
//                   About
//                   <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'About' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {activeDropdown === 'About' && (
//                   <div 
//                     onMouseLeave={() => setActiveDropdown(null)}
//                     className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
//                   >
//                     {navigationMenu.About.map((item, i) => (
//                       <button
//                         key={i}
//                         onClick={() => handleMenuItemClick(item)}
//                         className="w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-3 group"
//                       >
//                         <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
//                           {item.icon}
//                         </span>
//                         <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex-1">
//                           {item.name}
//                         </span>
//                         {item.badge && (
//                           <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded-full font-semibold">
//                             {item.badge}
//                           </span>
//                         )}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Button onClick={() => setLocation('/login')} className="ml-2 text-sm bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
//                 Login
//               </Button>
              
//               <button 
//                 className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
//                 onClick={() => setIsDarkMode(!isDarkMode)}
//               >
//                 {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400"/> : <Moon className="w-5 h-5 text-gray-800"/>}
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 max-h-[calc(100vh-5rem)] overflow-y-auto">
//             <div className="px-4 py-4 space-y-2">
//               <button onClick={() => { setLocation('/'); setIsMenuOpen(false); }} className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
//                 <ArrowLeft className="w-4 h-4" />
//                 Back to Home
//               </button>

//               {/* Mobile Solutions */}
//               <div>
//                 <button 
//                   onClick={() => toggleMobileMenu('Solutions')}
//                   className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                 >
//                   Solutions
//                   <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Solutions' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {mobileActiveMenu === 'Solutions' && (
//                   <div className="ml-4 mt-2 space-y-1">
//                     {navigationMenu.Solutions.map((item, i) => (
//                       <button 
//                         key={i} 
//                         onClick={() => handleMenuItemClick(item)}
//                         className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
//                       >
//                         {item.icon}
//                         {item.name}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Use Cases */}
//               <div>
//                 <button 
//                   onClick={() => toggleMobileMenu('Use Cases')}
//                   className="flex items-center justify-between w-full px-4 py-2 text-purple-600 dark:text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-semibold"
//                 >
//                   Use Cases
//                   <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Use Cases' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {mobileActiveMenu === 'Use Cases' && (
//                   <div className="ml-4 mt-2 space-y-1">
//                     {navigationMenu["Use Cases"].map((item, i) => (
//                       <button 
//                         key={i} 
//                         onClick={() => handleMenuItemClick(item)}
//                         className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
//                       >
//                         {item.icon}
//                         {item.name}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//                {/* Mobile Features */}
//                                                         <div>
//                                                           <button 
//                                                             onClick={() => toggleMobileMenu('Features')}
//                                                             className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                                                           >
//                                                             Features
//                                                             <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Features' ? 'rotate-180' : ''}`} />
//                                                           </button>
//                                                           {mobileActiveMenu === 'Features' && (
//                                                             <div className="ml-4 mt-2 space-y-1">
//                                                               {navigationMenu.Features.map((item, i) => (
//                                                                 <button 
//                                                                   key={i} 
//                                                                   onClick={() => handleMenuItemClick(item)}
//                                                                   className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
//                                                                 >
//                                                                   {item.icon}
//                                                                   {item.name}
//                                                                   {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
//                                                                 </button>
//                                                               ))}
//                                                             </div>
//                                                           )}
//                                                         </div>

//               <button onClick={() => setLocation('/pricing')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
//                 Pricing
//               </button>
//                {/* Mobile Free Tools */}
//                                                         <div>
//                                                           <button 
//                                                             onClick={() => toggleMobileMenu('Free Tools')}
//                                                             className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                                                           >
//                                                             Free Tools
//                                                             <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Free Tools' ? 'rotate-180' : ''}`} />
//                                                           </button>
//                                                           {mobileActiveMenu === 'Free Tools' && (
//                                                             <div className="ml-4 mt-2 space-y-1">
//                                                               {navigationMenu["Free Tools"].map((item, i) => (
//                                                                 <button 
//                                                                   key={i} 
//                                                                   onClick={() => handleMenuItemClick(item)}
//                                                                   className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
//                                                                 >
//                                                                   {item.icon}
//                                                                   {item.name}
//                                                                   {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
//                                                                 </button>
//                                                               ))}
//                                                             </div>
//                                                           )}
//                                                         </div>
                                          
//                                                        {/* Mobile Compare */}
//                                                                      <div>
//                                                                        <button 
//                                                                          onClick={() => toggleMobileMenu('Compare')}
//                                                                          className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                                                                        >
//                                                                          Compare
//                                                                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Compare' ? 'rotate-180' : ''}`} />
//                                                                        </button>
//                                                                        {mobileActiveMenu === 'Compare' && (
//                                                                          <div className="ml-4 mt-2 space-y-1">
//                                                                            {navigationMenu.Compare.map((item, i) => (
//                                                                              <button 
//                                                                                key={i} 
//                                                                                onClick={() => handleMenuItemClick(item)}
//                                                                                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
//                                                                              >
//                                                                                {item.icon}
//                                                                                {item.name}
//                                                                              </button>
//                                                                            ))}
//                                                                          </div>
//                                                                        )}
//                                                                      </div>
                                          
//                                                          {/* Mobile Resources */}
//                                                         <div>
//                                                           <button 
//                                                             onClick={() => toggleMobileMenu('Resources')}
//                                                             className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                                                           >
//                                                             Resources
//                                                             <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Resources' ? 'rotate-180' : ''}`} />
//                                                           </button>
//                                                           {mobileActiveMenu === 'Resources' && (
//                                                             <div className="ml-4 mt-2 space-y-1">
//                                                               {navigationMenu.Resources.map((item, i) => (
//                                                                 <button 
//                                                                   key={i} 
//                                                                   onClick={() => handleMenuItemClick(item)}
//                                                                   className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
//                                                                 >
//                                                                   {item.icon}
//                                                                   {item.name}
//                                                                   {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
//                                                                 </button>
//                                                               ))}
//                                                             </div>
//                                                           )}
//                                                         </div>

//               {/* Mobile About */}
//               <div>
//                 <button 
//                   onClick={() => toggleMobileMenu('About')}
//                   className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                 >
//                   About
//                   <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'About' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {mobileActiveMenu === 'About' && (
//                   <div className="ml-4 mt-2 space-y-1">
//                     {navigationMenu.About.map((item, i) => (
//                       <button 
//                         key={i} 
//                         onClick={() => handleMenuItemClick(item)}
//                         className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
//                       >
//                         {item.icon}
//                         {item.name}
//                         {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Button onClick={() => { setLocation('/login'); setIsMenuOpen(false); }} className="w-full mt-2 bg-gradient-to-r from-pink-500 to-rose-500">
//                 Login
//               </Button>
              
//               <button 
//                 className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors w-full flex justify-center items-center"
//                 onClick={() => setIsDarkMode(!isDarkMode)}
//               >
//                 {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400"/> : <Moon className="w-5 h-5 text-gray-800"/>}
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
//         <div className="relative max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
//                 Turn Customer Reviews Into
//                 <br />
//                 <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">Actionable Insights</span>
//               </h1>
//               <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
//                 Insydz analyzes thousands of reviews with AI to show you what customers really want — 
//                 <span className="text-purple-700 dark:text-purple-400 font-semibold"> so you can improve products, fix issues, and boost ratings.</span>
//               </p>
//               <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all group">
//                 👉 Analyze Reviews Free <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </div>
//             <div className="relative bg-white dark:bg-gray-900 border-2 border-purple-200 dark:border-purple-800 rounded-3xl p-8 shadow-2xl">
//               <div className="space-y-4">
//                 <h3 className="font-bold text-gray-900 dark:text-white mb-4">Review Sentiment Analysis</h3>
//                 <div className="grid grid-cols-3 gap-4">
//                   <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl">
//                     <ThumbsUp className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
//                     <div className="text-2xl font-bold text-green-600 dark:text-green-400">68%</div>
//                     <div className="text-xs text-gray-600 dark:text-gray-400">Positive</div>
//                   </div>
//                   <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl">
//                     <Heart className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
//                     <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">22%</div>
//                     <div className="text-xs text-gray-600 dark:text-gray-400">Neutral</div>
//                   </div>
//                   <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl">
//                     <ThumbsDown className="w-8 h-8 text-red-600 dark:text-red-400 mx-auto mb-2" />
//                     <div className="text-2xl font-bold text-red-600 dark:text-red-400">10%</div>
//                     <div className="text-xs text-gray-600 dark:text-gray-400">Negative</div>
//                   </div>
//                 </div>
//                 <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-xl p-4 mt-4">
//                   <p className="text-sm font-bold text-gray-900 dark:text-white mb-2">Top Complaint:</p>
//                   <p className="text-sm text-gray-700 dark:text-gray-300">"Packaging could be better" - mentioned in 342 reviews</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Problem Section */}
//       <section className="py-20 px-4 bg-white dark:bg-gray-950">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
//               Why Reading Reviews Manually <span className="text-red-600 dark:text-red-500">Is Impossible</span>
//             </h2>
//           </div>
//           <div className="grid md:grid-cols-4 gap-6 mb-12">
//             {[
//               { icon: <MessageCircle className="w-8 h-8" />, title: "Thousands of reviews to read", color: "from-red-500 to-orange-500" },
//               { icon: <TrendingDown className="w-8 h-8" />, title: "Critical issues buried in noise", color: "from-orange-500 to-yellow-500" },
//               { icon: <Search className="w-8 h-8" />, title: "No way to spot patterns", color: "from-purple-500 to-pink-500" },
//               { icon: <AlertCircle className="w-8 h-8" />, title: "Competitors learn faster", color: "from-pink-500 to-red-500" }
//             ].map((pain, i) => (
//               <div key={i} className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-purple-400 hover:shadow-lg transition-all group">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
//                   {pain.icon}
//                 </div>
//                 <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{pain.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
//               How Review Analysis Works <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">with Insydz</span>
//             </h2>
//           </div>
//           <div className="grid lg:grid-cols-3 gap-12">
//             {[
//               { step: "1", title: "Connect Your Products", desc: "Add your Amazon & Flipkart products. We pull all reviews automatically.", icon: <Target /> },
//               { step: "2", title: "AI Analyzes Everything", desc: "Our AI reads every review, identifies sentiment, complaints, and patterns.", icon: <Zap /> },
//               { step: "3", title: "Get Clear Insights", desc: "See what customers love, hate, and want improved in simple dashboards.", icon: <Award /> }
//             ].map((item, i) => (
//               <div key={i} className="bg-white dark:bg-gray-800 border-2 border-purple-300 dark:border-purple-700 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all">
//                 <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">{item.step}</div>
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
//                 <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-12">
//             <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group">
//               👉 Analyze Your First Product Free <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-950">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
//             Stop Guessing What Customers Want. <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Know for Sure.</span>
//           </h2>
//           <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group">
//             👉 Analyze Reviews Free <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//           </Button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-8 mb-8">
//             <div>
//               <div className="flex items-center space-x-3 mb-4">
//                 <img 
//                   src="/logo.png" 
//                   alt="Insydz Logo" 
//                   className="w-10 h-10 rounded-xl object-contain"
//                 />
//                 <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                   Insydz
//                 </span>
//               </div>
//               <p className="text-gray-400 text-sm">
//                 AI-powered review analytics for smart sellers
//               </p>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4 text-white">Quick Links</h4>
//               <div className="space-y-2">
//                 <button onClick={() => setLocation("/")} className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
//                   Home
//                 </button>
//                 <button onClick={() => setLocation("/pricing")} className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
//                   Pricing
//                 </button>
//                 <button onClick={handleGetStarted} className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
//                   Login
//                 </button>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4 text-white">Contact</h4>
//               <div className="space-y-2 text-sm text-gray-400">
//                 <p>contact@insydz.com</p>
//                 <p>+91 98765 43210</p>
//                 <p>New Delhi, India</p>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8 text-center">
//             <p className="text-gray-500 text-sm">
//               © 2025 Insydz. All rights reserved. Built for Indian sellers 🇮🇳
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }



import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { 
  ArrowRight, CheckCircle2, Target, Zap, 
  Bell, TrendingUp, MessageCircle, Search,
  ChevronRight, Star, AlertCircle, ChevronDown,
  ThumbsUp, ThumbsDown, Award, TrendingDown, Heart, X, Frown,
  Menu, Sun, Moon, ArrowLeft, BookOpen, Video, FileText, 
  ShoppingBag, Store, Briefcase, Users, Code, Globe, Trophy, Package,
  Flame, Presentation, Brain, DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from 'react-helmet-async';


// Navigation Menu Data
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
    { name: "All Solutions (Overview)", icon: <ShoppingBag className="w-4 h-4" />, route: "/solutions" },
    { name: "For Amazon Sellers (India)", icon: <ShoppingBag className="w-4 h-4" />, route: "/solutions/amazon-sellers" },
    { name: "For Flipkart Sellers", icon: <Store className="w-4 h-4" />, route: "/solutions/flipkart-sellers" },
    { name: "For E-commerce Agencies", icon: <Briefcase className="w-4 h-4" />, route: "/solutions/ecommerce-agencies" },
    { name: "For Brand Managers", icon: <Users className="w-4 h-4" />, route: "/solutions/brand-managers" },
  ],
  "Use Cases": [
    { name: "All Use Cases", icon: <TrendingUp className="w-4 h-4" />, route: "/use-cases" },
    { name: "Track Competitor Prices", icon: <TrendingDown className="w-4 h-4" />, route: "/use-cases/track-competitor-prices" },
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
    { name: "Free Amazon Product Analyzer", icon: <Target className="w-4 h-4" />, route: "/free-tools/free-amazon-product-analyzer" },
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

// ── FAQ SUB-COMPONENT ─────────────────────────────────────────────────────────
const FAQItem = ({
  q, a, index, openFaq, toggleFaq
}: {
  q: string; a: string; index: number;
  openFaq: number | null; toggleFaq: (i: number) => void;
}) => (
  <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-purple-300 dark:hover:border-purple-600 transition-all">
    <button
      onClick={() => toggleFaq(index)}
      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-colors"
    >
      <span className="font-bold text-gray-900 dark:text-white pr-4 text-lg">{q}</span>
      <ChevronDown className={`w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
    </button>
    {openFaq === index && (
      <div className="px-6 pb-5 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed pt-4">{a}</p>
      </div>
    )}
  </div>
);

export default function AnalyzeCustomerReviewsPage() {
  const [, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 20); };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) html.classList.add("dark");
    else html.classList.remove("dark");
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

  const handleGetStarted = () => { setLocation("/login"); };
  const toggleFaq = (index: number) => { setOpenFaq(openFaq === index ? null : index); };
  const toggleMobileMenu = (menuName: string) => {
    setMobileActiveMenu(mobileActiveMenu === menuName ? null : menuName);
  };
  const handleMenuItemClick = (item: MenuItemWithBadge) => {
    if (item.route) { setLocation(item.route); setActiveDropdown(null); setIsMenuOpen(false); }
  };
  const scrollToSection = (sectionId: string) => {
    setLocation('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const faqs = [
    {
      q: "How does Insydz analyse customer reviews on Amazon India and Flipkart?",
      a: "Insydz's AI reads every customer review — yours and any competitor's — groups similar feedback into clusters ranked by frequency, and delivers: sentiment breakdown (positive/neutral/negative), top complaint themes with review counts, and top praise themes. Complete analysis in under 2 minutes."
    },
    {
      q: "Can I analyse competitor product reviews with Insydz?",
      a: "Yes. Add any competitor ASIN or Flipkart listing and the AI analyses their reviews the same way it analyses yours. This is one of the most powerful ways new sellers use the tool before their first launch — building competitor weaknesses into product advantages before day one."
    },
    {
      q: "How many reviews can Insydz analyse at once?",
      a: "From 50 to 50,000+ reviews — in under 2 minutes. The more reviews a product has, the more statistically reliable the complaint clusters become. Insydz processes over 250,000 reviews across Indian marketplaces daily."
    },
    {
      q: "Does the review analysis work in Hindi and regional Indian languages?",
      a: "Yes. Insydz reads English, Hindi, Hinglish, and other Indian regional languages. Reviews in mixed language — very common among Indian buyers — are accurately processed and included in all analysis."
    },
    {
      q: "How is Insydz different from reading reviews manually?",
      a: "Manual reading samples 20–30 reviews — impressionistic and inaccurate. Insydz reads every review, groups similar feedback automatically, and ranks complaints by frequency. You get statistical insight, not impressions."
    },
    {
      q: "Can Insydz alert me when new negative review patterns appear?",
      a: "Yes. Set ongoing monitoring for any product and receive WhatsApp alerts when a new negative theme appears across more than a threshold number of reviews — before it becomes a visible rating drop and organic rank penalty."
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
     

      {/* ── NAVIGATION ───────────────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg"
            : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Back Button */}
            <div className="flex items-center space-x-3">
              
              
              <div className="flex items-center space-x-1 group cursor-pointer" onClick={() => setLocation('/')}>
                <div className="relative">
                  <img 
                    src="/logo.png" 
                    alt="Insydz Logo" 
                    className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain"
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Insydz
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-3" ref={dropdownRef}>

              {/* Solutions Dropdown */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Solutions')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1">
                  Solutions <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Solutions' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Solutions' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu.Solutions.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex-1">{item.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Use Cases Dropdown — HIGHLIGHTED */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Use Cases')} className="px-3 py-2 text-sm text-purple-600 dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-400 font-semibold rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1">
                  Use Cases <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Use Cases' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Use Cases' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu["Use Cases"].map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">{item.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Features Dropdown */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Features')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1">
                  Features <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Features' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Features' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu.Features.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex-1">{item.name}</span>
                        {item.badge && <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => setLocation('/pricing')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all">
                Pricing
              </button>

              {/* Free Tools Dropdown */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Free Tools')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1">
                  Free Tools <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Free Tools' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Free Tools' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu["Free Tools"].map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex-1">{item.name}</span>
                        {item.badge && <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Compare Dropdown */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Compare')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1">
                  Compare <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Compare' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Compare' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu.Compare.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex-1">{item.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Resources')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1">
                  Resources <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Resources' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Resources' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu.Resources.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex-1">{item.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* About Dropdown */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('About')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1">
                  About <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'About' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'About' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu.About.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex-1">{item.name}</span>
                        {item.badge && <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Button onClick={() => setLocation('/login')} className="ml-2 text-sm bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Login
              </Button>
              
              <button 
                className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400"/> : <Moon className="w-5 h-5 text-gray-800"/>}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              <button onClick={() => { setLocation('/'); setIsMenuOpen(false); }} className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>

              {/* Mobile Solutions */}
              <div>
                <button onClick={() => toggleMobileMenu('Solutions')} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                  Solutions <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Solutions' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'Solutions' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu.Solutions.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
                        {item.icon} {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Use Cases */}
              <div>
                <button onClick={() => toggleMobileMenu('Use Cases')} className="flex items-center justify-between w-full px-4 py-2 text-purple-600 dark:text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-semibold">
                  Use Cases <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Use Cases' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'Use Cases' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu["Use Cases"].map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
                        {item.icon} {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Features */}
              <div>
                <button onClick={() => toggleMobileMenu('Features')} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                  Features <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Features' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'Features' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu.Features.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
                        {item.icon} {item.name}
                        {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => setLocation('/pricing')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                Pricing
              </button>

              {/* Mobile Free Tools */}
              <div>
                <button onClick={() => toggleMobileMenu('Free Tools')} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                  Free Tools <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Free Tools' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'Free Tools' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu["Free Tools"].map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
                        {item.icon} {item.name}
                        {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Compare */}
              <div>
                <button onClick={() => toggleMobileMenu('Compare')} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                  Compare <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Compare' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'Compare' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu.Compare.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
                        {item.icon} {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Resources */}
              <div>
                <button onClick={() => toggleMobileMenu('Resources')} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                  Resources <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Resources' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'Resources' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu.Resources.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
                        {item.icon} {item.name}
                        {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile About */}
              <div>
                <button onClick={() => toggleMobileMenu('About')} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                  About <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'About' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'About' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu.About.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
                        {item.icon} {item.name}
                        {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Button onClick={() => { setLocation('/login'); setIsMenuOpen(false); }} className="w-full mt-2 bg-gradient-to-r from-pink-500 to-rose-500">
                Login
              </Button>
              
              <button 
                className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors w-full flex justify-center items-center"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400"/> : <Moon className="w-5 h-5 text-gray-800"/>}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ── SECTION 1: HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-300 rounded-full px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                </span>
                <span className="text-sm font-medium text-purple-700">250,000+ Reviews Analysed Daily 🇮🇳</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
                Turn Customer Reviews Into
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">
                  Actionable Insights
                </span>
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                India's most powerful <strong>customer review analysis tool</strong> for Amazon and Flipkart sellers. Insydz analyses thousands of reviews with AI to show you what customers really want —
                <span className="text-purple-700 dark:text-purple-400 font-semibold"> so you can improve products, fix issues, and boost ratings.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all group"
                >
                  👉 Analyse Reviews Free
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-700 dark:text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-semibold px-8 py-6 text-lg rounded-full"
                >
                  See How It Works →
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-col gap-3 pt-2">
                {[
                  "Reads Hindi, Hinglish & regional language reviews",
                  "250,000+ reviews analysed daily across Indian marketplaces",
                  "Analyse your listings and any competitor — free to start"
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual — Sentiment Dashboard */}
            <div className="relative">
              <div className="relative bg-white dark:bg-gray-900 border-2 border-purple-200 dark:border-purple-800 rounded-3xl p-8 shadow-2xl">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Review Sentiment Analysis</h3>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl">
                    <ThumbsUp className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">68%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Positive</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl">
                    <Heart className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">22%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Neutral</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl">
                    <ThumbsDown className="w-8 h-8 text-red-600 dark:text-red-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">10%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Negative</div>
                  </div>
                </div>

                {/* Top Complaint Clusters */}
                <div className="space-y-3">
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Top Complaint Clusters</p>
                  {[
                    { label: "Packaging issues", count: 342, pct: 100, color: "bg-red-500" },
                    { label: "Battery life", count: 218, pct: 64, color: "bg-orange-500" },
                    { label: "Value for money", count: 124, pct: 36, color: "bg-yellow-500" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{item.label}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{item.count} reviews</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl px-4 py-2 shadow-xl">
                  <p className="text-white font-bold text-sm">AI-Powered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHY MANUAL FAILS ─────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              Why Reading Reviews Manually
              <br />
              <span className="text-red-600 dark:text-red-500">Is Impossible</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Every Indian Amazon and Flipkart seller knows reviews matter. Most intend to read them. Almost none can keep up. Here's what manual review reading actually costs.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: <MessageCircle className="w-8 h-8" />, title: "Thousands of reviews to read", desc: "and they grow every day", color: "from-red-500 to-orange-500" },
              { icon: <TrendingDown className="w-8 h-8" />, title: "Critical issues buried in noise", desc: "one real complaint hidden among 500 reviews", color: "from-orange-500 to-yellow-500" },
              { icon: <Search className="w-8 h-8" />, title: "No way to spot patterns", desc: "you read 20 and miss the pattern in 300", color: "from-purple-500 to-pink-500" },
              { icon: <AlertCircle className="w-8 h-8" />, title: "Competitors learn faster", desc: "acting on insights you don't even know exist", color: "from-pink-500 to-red-500" }
            ].map((pain, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-purple-400 hover:shadow-lg transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
                  {pain.icon}
                </div>
                <p className="text-gray-900 dark:text-white font-semibold leading-relaxed mb-1">{pain.title}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{pain.desc}</p>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-300 dark:border-red-700 rounded-3xl p-8 shadow-lg mb-6">
            <AlertCircle className="w-10 h-10 text-red-600 dark:text-red-400 mx-auto mb-4" />
            <p className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-3">
              A product issue mentioned in <span className="text-red-600 dark:text-red-400">300 reviews</span> is actively destroying your conversion rate.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
              Right now. And you won't find it by reading reviews one by one. By the time it becomes visible as a rating drop, you've already lost months of sales momentum.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6">
            <p className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wide mb-2">What most review tools don't tell you:</p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Most sellers who do analyse reviews use a simple star-filter or keyword search — which means they find what they're already looking for, not what they're missing. The complaints that damage conversion rates most are the ones phrased in 50 different ways across 400 reviews — none loud enough to notice alone, together impossible to ignore.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: HOW IT WORKS ─────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              How Review Analysis Works
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">with Insydz</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">From product to insights in under 2 minutes. No research background required.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Connect Your Products",
                desc: "Add your Amazon India or Flipkart listing (or any competitor's ASIN). Insydz pulls all available reviews automatically. Setup: under 60 seconds.",
                icon: <Target className="w-10 h-10 text-purple-600" />,
                bg: "bg-purple-50 dark:bg-purple-900/20"
              },
              {
                step: "2",
                title: "AI Analyses Everything",
                desc: "AI reads every single review. Identifies sentiment (positive/neutral/negative), clusters similar complaints, flags praise themes, processes English + Hindi + Hinglish reviews automatically.",
                icon: <Brain className="w-10 h-10 text-pink-600" />,
                bg: "bg-pink-50 dark:bg-pink-900/20"
              },
              {
                step: "3",
                title: "Get Clear Insights",
                desc: "Plain-language ranked dashboard: 'Top complaint: Packaging could be better — 342 reviews' / 'Top praise: Excellent value for money — 487 reviews' / 'Competitor gap: Charging cable too short — their #1 complaint'",
                icon: <Award className="w-10 h-10 text-purple-600" />,
                bg: "bg-purple-50 dark:bg-purple-900/20"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-purple-300 dark:border-purple-700 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{item.desc}</p>
                <div className={`${item.bg} rounded-2xl p-4 flex justify-center`}>{item.icon}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all group"
            >
              👉 Analyse Your First Product Free
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHAT YOU DISCOVER ────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              Stop Guessing What Customers Want.
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Know for Sure.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ThumbsUp className="w-8 h-8" />,
                badge: "AI Sentiment Analysis Tool",
                title: "1. Sentiment Breakdown",
                desc: "See what percentage of reviews are positive, neutral, and negative — and compare against competitors. Track sentiment trends over time.",
                link: { text: "See how AI sentiment analysis works →", href: "/features/review-analytics-feature" },
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Frown className="w-8 h-8" />,
                badge: "Pattern Detection",
                title: "2. Top Complaint Clusters",
                desc: "AI groups similar complaints — 'packet was torn,' 'packaging damaged,' 'box came broken' all count as one problem. Most frequent issue appears first with review count and example quotes.",
                link: null,
                color: "from-red-500 to-orange-500"
              },
              {
                icon: <Star className="w-8 h-8" />,
                badge: "Listing Intelligence",
                title: "3. Top Praise Themes",
                desc: "Know which product attributes buyers love most. Use those insights to rewrite listing bullets and title — copy backed by real buyer language, not assumptions.",
                link: null,
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                badge: "Competitive Intelligence",
                title: "4. Competitor Review Gap Analysis",
                desc: "Add any competitor ASIN. Insydz surfaces their top complaints — which become your product differentiation brief. Solve a proven problem before you even launch.",
                link: null,
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Bell className="w-8 h-8" />,
                badge: "WhatsApp Alerts",
                title: "5. Review Trend Monitoring",
                desc: "Track how sentiment and complaint themes change month by month. WhatsApp alert when a new negative theme appears — before it becomes a visible rating drop.",
                link: null,
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                badge: "India-First",
                title: "6. Hindi & Hinglish Review Analysis",
                desc: "Indian buyers write reviews in English, Hindi, Hinglish, and regional languages. Insydz reads all of them — so you're not missing insights your English-only competitors can't access.",
                link: null,
                color: "from-orange-500 to-red-500"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-purple-400 hover:shadow-xl transition-all group">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-lg`}>
                  {feature.icon}
                </div>
                <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wide">{feature.badge}</span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1 mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                {feature.link && (
                  <button
                    onClick={() => setLocation(feature.link!.href)}
                    className="mt-3 text-purple-600 dark:text-purple-400 text-sm font-semibold hover:underline"
                  >
                    {feature.link.text}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: INDIA-FIRST ADVANTAGE ───────────────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              How Insydz Is Different —
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Built for Indian Marketplace Reviews</span>
            </h2>
          </div>

          {/* Real Seller Scenario */}
          <div className="bg-white dark:bg-gray-900 border-2 border-purple-200 dark:border-purple-800 rounded-3xl p-8 shadow-xl mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-3">📌 Real Seller Scenario — Personal Care Brand, Pune</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Ananya runs a premium face wash brand on Amazon India. Her product held a 4.1 rating for three months. Return rates were creeping up to 14% month-on-month. She assumed it was a listing issue. When she ran Insydz's customer review analysis tool on her 680 reviews, the AI surfaced a single dominant complaint in 3 minutes: <strong className="text-gray-900 dark:text-white">'pump dispenser leaks during delivery'</strong> — mentioned across 127 reviews in various phrasings, including Hindi reviews she had never read. No individual reviewer flagged it loudly. Together they were quietly costing her a rating point and a 14% return rate.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                  She passed the finding to her supplier. New pump mechanism. Updated packaging. Three weeks to implement. <strong className="text-gray-900 dark:text-white">Result: rating climbed 4.1 → 4.6. Returns dropped from 14% to 5%.</strong> The packaging fix cost ₹12/unit. The return problem had been costing ₹28,000/month. Research time: 3 minutes.
                </p>
              </div>
            </div>
          </div>

          {/* 3 India-First Advantages */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Multilingual Processing",
                desc: "Reads English, Hindi, Hinglish, Tamil, Telugu, and regional languages — no Indian buyer feedback lost",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Indian Complaint Pattern Recognition",
                desc: "Trained on Indian marketplace data — understands COD packaging complaints, festive gifting expectations, return behaviours",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <TrendingDown className="w-8 h-8" />,
                title: "Competitor Analysis in Minutes",
                desc: "Analyse any Amazon India or Flipkart competitor — turn their complaints into your competitive advantage",
                color: "from-orange-500 to-red-500"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 border-2 border-purple-200 dark:border-purple-700 rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg`}>{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Manual vs Insydz Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border-2 border-purple-200 dark:border-purple-800 shadow-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <th className="text-left px-6 py-4 font-bold text-base">Capability</th>
                  <th className="px-6 py-4 font-bold text-base text-center">Manual Reading</th>
                  <th className="px-6 py-4 font-bold text-base text-center">Insydz</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { capability: "Reviews covered", manual: "✗ 20–50 sample", insydz: "✓ Every single review (50–50,000+)" },
                  { capability: "Pattern detection", manual: "✗ None (impressionistic)", insydz: "✓ AI clusters similar complaints automatically" },
                  { capability: "Hindi/Hinglish reviews", manual: "✗ Usually skipped", insydz: "✓ Fully read and included" },
                  { capability: "Time to insight", manual: "✗ 4–8 hours/product", insydz: "✓ Under 2 minutes" },
                  { capability: "Competitor analysis", manual: "✗ Practically impossible", insydz: "✓ Any ASIN, 2 minutes" },
                  { capability: "Ongoing monitoring", manual: "✗ None", insydz: "✓ WhatsApp alerts for new patterns" },
                ].map((row, i) => (
                  <tr key={i} className={`border-t border-gray-200 dark:border-gray-700 ${i % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}`}>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300 font-medium">{row.capability}</td>
                    <td className="px-6 py-4 text-center text-red-500 dark:text-red-400 font-medium">{row.manual}</td>
                    <td className="px-6 py-4 text-center text-green-600 dark:text-green-400 font-semibold">{row.insydz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: ROI EXAMPLE ──────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              What One Unread Review Pattern
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Costs You Every Month</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A single undetected product quality issue — hiding across 127 reviews in varying phrasings — costs Indian sellers far more than they realise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Without Insydz */}
            <div className="bg-white dark:bg-gray-900 border-2 border-red-200 dark:border-red-800 rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-black text-red-600 dark:text-red-400 mb-6 flex items-center gap-2">
                <AlertCircle className="w-6 h-6" /> Without Insydz — Monthly Impact
              </h3>
              <div className="space-y-3">
                {[
                  { label: "14% return rate on ₹2L monthly revenue", value: "−₹28,000" },
                  { label: "4.1 vs 4.6 rating — conversion rate difference", value: "−₹18,000 lost sales" },
                  { label: "Negative review accumulation — organic ranking penalty", value: "−₹12,000 traffic lost" },
                  { label: "Extra ad spend to compensate for lower organic rank", value: "−₹9,000" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-red-100 dark:border-red-900/30 last:border-0">
                    <span className="text-sm text-gray-700 dark:text-gray-300 pr-4">{item.label}</span>
                    <span className="font-bold text-red-600 dark:text-red-400 flex-shrink-0">{item.value}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-3 border-t-2 border-red-200 dark:border-red-800">
                  <span className="font-black text-gray-900 dark:text-white text-sm">Total monthly cost of one unread complaint pattern</span>
                  <span className="font-black text-red-600 dark:text-red-400 text-xl ml-4 flex-shrink-0">−₹67,000</span>
                </div>
              </div>
            </div>

            {/* With Insydz */}
            <div className="bg-white dark:bg-gray-900 border-2 border-green-200 dark:border-green-800 rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-black text-green-600 dark:text-green-400 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" /> With Insydz — Issue Detected in 3 Minutes
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Issue detected in week 3 instead of month 4", value: "3 months earlier" },
                  { label: "₹12/unit packaging fix — implemented in 3 weeks", value: "₹12/unit investment" },
                  { label: "Returns drop 14% → 5% — monthly recovery", value: "+₹25,200/month" },
                  { label: "Rating climbs 4.1 → 4.6 — conversion uplift", value: "+₹16,000/month" },
                  { label: "Organic rank recovery — reduced ad dependency", value: "+₹9,000/month saved" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-green-100 dark:border-green-900/30 last:border-0">
                    <span className="text-sm text-gray-700 dark:text-gray-300 pr-4">{item.label}</span>
                    <span className="font-bold text-green-600 dark:text-green-400 flex-shrink-0">{item.value}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-3 border-t-2 border-green-200 dark:border-green-800">
                  <span className="font-black text-gray-900 dark:text-white text-sm">Net monthly value recovered</span>
                  <span className="font-black text-green-600 dark:text-green-400 text-xl ml-4 flex-shrink-0">+₹50,200</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-300 dark:border-purple-700 rounded-3xl p-8 text-center shadow-lg">
            <p className="text-3xl font-black text-purple-700 dark:text-purple-300 mb-2">₹3.47L saved over 6 months</p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              from catching one product issue 3 months earlier using Insydz's AI customer review analysis tool. The packaging fix cost ₹12 per unit.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FREE PLAN ────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              Start Free. Know What Customers
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Really Think.</span>
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-900 border-2 border-purple-200 dark:border-purple-800 rounded-3xl p-10 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-black text-purple-600 dark:text-purple-400">₹0</span>
              <span className="text-gray-500 dark:text-gray-400 text-lg">/ Forever — No credit card required</span>
            </div>
            <p className="text-lg font-bold text-gray-900 dark:text-white mb-6">Free Plan Includes:</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                "AI review analysis for limited products",
                "Sentiment breakdown (positive/neutral/negative)",
                "Top complaint clusters with review counts",
                "Top praise themes identified",
                "Amazon India & Flipkart listings",
                "Hindi & Hinglish review processing"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-2xl p-5 mb-8">
              <p className="text-sm font-bold text-purple-700 dark:text-purple-400 mb-2">Upgrade to unlock:</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Unlimited product analysis, competitor ASIN review analysis, continuous monitoring, WhatsApp alerts for new complaint patterns, and full 90-day review trend history.
              </p>
            </div>

            <Button
              onClick={handleGetStarted}
              size="lg"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-6 text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 group"
            >
              👉 Analyse Reviews Free — No Card Needed
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: ICP-BASED CTAs ───────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">Stop Guessing. Know for Sure.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* New Sellers */}
            <div className="bg-white dark:bg-gray-900 border-2 border-purple-200 dark:border-purple-800 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">For New Sellers</h3>
              <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-3">Free Plan</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                Before you list, analyse competitor reviews to understand what buyers already complain about. Build those fixes into your product from day one. Launch with proven differentiation — not guesswork.
              </p>
              <Button
                onClick={handleGetStarted}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full"
              >
                Start Free — No Card Needed →
              </Button>
            </div>

            {/* Growing Sellers — Most Popular */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-700 border-2 border-purple-500 rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">For Growing Sellers</h3>
              <p className="text-xs font-semibold text-purple-200 mb-3">Growth Plan</p>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Doing ₹5L+ monthly? Every 0.1 drop in star rating costs you measurable conversion. Growth Plan: unlimited analysis, continuous monitoring, WhatsApp alerts before problems become rating drops.
              </p>
              <Button
                onClick={() => setLocation('/pricing')}
                className="w-full bg-white hover:bg-gray-100 text-purple-700 font-bold rounded-full"
              >
                Try Growth Plan →
              </Button>
            </div>

            {/* D2C / Agencies */}
            <div className="bg-white dark:bg-gray-900 border-2 border-pink-200 dark:border-pink-800 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">For D2C Brands &amp; Agencies</h3>
              <p className="text-xs font-semibold text-pink-600 dark:text-pink-400 mb-3">Strategic Demo</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                Full portfolio review monitoring, cross-product sentiment comparison, competitor review mining, white-label insight reports, API access.
              </p>
              <Button
                onClick={() => setLocation('/solutions/ecommerce-agencies')}
                variant="outline"
                className="w-full border-2 border-purple-600 text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-bold rounded-full"
              >
                Book a Demo →
              </Button>
            </div>
          </div>

          <p className="text-center text-gray-500 dark:text-gray-400 mt-8 text-sm">
            ✓ No credit card required &nbsp;·&nbsp; ✓ Setup in 60 seconds &nbsp;·&nbsp; ✓ Cancel anytime
          </p>
        </div>
      </section>

      {/* ── SECTION 9: FAQ ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              Review Analysis — <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">FAQs</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} openFaq={openFaq} toggleFaq={toggleFaq} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
            Stop Guessing What Customers Want.
            <br />
            <span className="text-purple-100">Know for Sure.</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            India's most powerful customer review analysis tool for Amazon and Flipkart — free to start.
          </p>
          <Button
            onClick={handleGetStarted}
            size="lg"
            className="bg-white hover:bg-gray-100 text-purple-700 font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
          >
            👉 Analyse Reviews Free
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-white/80 mt-6 text-sm">✓ No credit card required &nbsp;·&nbsp; ✓ Setup in 60 seconds &nbsp;·&nbsp; ✓ Cancel anytime</p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer className="bg-[#0a0f1e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-14">
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="Insydz Logo" className="w-10 h-10 rounded-xl object-contain" />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Insydz</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                India's most powerful customer review analysis tool for Amazon India &amp; Flipkart sellers.
              </p>
              <button
                onClick={handleGetStarted}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                Analyse Reviews Free →
              </button>
              <div className="flex space-x-3 mt-6">
                {[
                  { title: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61586202582209', icon: '🅕' },
                  { title: 'Twitter', href: 'https://x.com/growwithinsydz', icon: '𝕏' },
                  { title: 'Instagram', href: 'https://www.instagram.com/growwithinsydz/', icon: '📷' },
                  { title: 'LinkedIn', href: 'https://www.linkedin.com/company/insydz/?viewAsMember=true', icon: 'in' },
                ].map(s => (
                  <a key={s.title} title={s.title} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-xs font-bold"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Use Cases</h4>
              <ul className="space-y-3">
                {[
                  { label: "Track Competitor Prices", route: "/use-cases/track-competitor-prices" },
                  { label: "Find Profitable Products", route: "/use-cases/find-profitable-products" },
                  { label: "Analyse Reviews", route: "/use-cases/analyze-customer-reviews" },
                  { label: "Improve SEO", route: "/use-cases/improve-seo" },
                  { label: "Avoid Stockouts", route: "/use-cases/avoid-stockouts" },
                ].map((item, i) => (
                  <li key={i}><button onClick={() => setLocation(item.route)} className="text-sm text-gray-400 hover:text-white transition-colors text-left">{item.label}</button></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Features</h4>
              <ul className="space-y-3">
                {[
                  { label: "Review Intelligence", route: "/features/review-analytics-feature" },
                  { label: "AI Sentiment Analysis", route: "/features/review-analytics-feature" },
                  { label: "Competitor Price Tracking", route: "/features/competitor-price-tracking-feature" },
                  { label: "Keyword Rank Tracker", route: "/features/keyword-rank-tracking-feature" },
                  { label: "WhatsApp Alerts", route: "/features/whatsapp-alerts-feature" },
                ].map((item, i) => (
                  <li key={i}><button onClick={() => setLocation(item.route)} className="text-sm text-gray-400 hover:text-white transition-colors text-left">{item.label}</button></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Solutions</h4>
              <ul className="space-y-3">
                {[
                  { label: "Amazon Sellers", route: "/solutions/amazon-sellers" },
                  { label: "Flipkart Sellers", route: "/solutions/flipkart-sellers" },
                  { label: "Agencies", route: "/solutions/ecommerce-agencies" },
                  { label: "Brand Managers", route: "/solutions/brand-managers" },
                ].map((item, i) => (
                  <li key={i}><button onClick={() => setLocation(item.route)} className="text-sm text-gray-400 hover:text-white transition-colors text-left">{item.label}</button></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Company</h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", action: () => setLocation("/about/about-us") },
                  { label: "Our Vision", action: () => setLocation("/about/our-vision") },
                  { label: "Careers", action: () => setLocation("/about/careers") },
                  { label: "Pricing", action: () => setLocation("/pricing") },
                ].map((item, i) => (
                  <li key={i}><button onClick={item.action} className="text-sm text-gray-400 hover:text-white transition-colors text-left">{item.label}</button></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm">
                © 2025 <span className="text-purple-400 font-semibold">Insydz</span>. All rights reserved. Built for Indian sellers 🇮🇳
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
                <span className="text-gray-700">·</span>
                <a href="/terms-service" className="hover:text-white transition-colors">Terms of Service</a>
                <span className="text-gray-700">·</span>
                <a href="/privacy-policy" className="hover:text-white transition-colors">Data Disclaimer</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}