// import { useState, useEffect } from "react";
// import { useLocation } from "wouter";
// import { ArrowRight, CheckCircle2, MessageCircle, ThumbsUp, ThumbsDown, TrendingUp, Star, Heart, ChevronDown, Sparkles } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function ReviewAnalyticsFeaturePage() {
//   const [, setLocation] = useLocation();
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-white">
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "bg-white/95 backdrop-blur-xl border-b border-purple-200 shadow-lg" : "bg-white/80 backdrop-blur-md border-b border-purple-100"}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setLocation("/")}>
//               <img src="/logo.png" alt="Insydz" className="w-12 h-12 rounded-2xl shadow-lg object-contain" />
//               <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <Button onClick={() => setLocation("/")} variant="ghost">← Back</Button>
//               <Button onClick={() => setLocation("/login")} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full">Start Free</Button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50">
//         <div className="relative max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
//                 Review Analytics —
//                 <br />
//                 <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Understand Customers</span>
//                 <br />
//                 Without Reading 1000s of Reviews
//               </h1>
//               <p className="text-xl text-gray-700">AI analyzes every review to show you what customers love, hate, and want improved — <span className="text-purple-700 font-semibold">so you can fix issues before ratings drop.</span></p>
//               <Button onClick={() => setLocation("/login")} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl group">
//                 👉 Start Free Review Analysis <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </div>
//             <div className="bg-white border-2 border-purple-200 rounded-3xl p-8 shadow-2xl">
//               <h3 className="font-bold text-gray-900 mb-4">Sentiment Analysis</h3>
//               <div className="grid grid-cols-3 gap-4 mb-6">
//                 {[
//                   { label: "Positive", value: "68%", icon: <ThumbsUp />, color: "green" },
//                   { label: "Neutral", value: "22%", icon: <Heart />, color: "yellow" },
//                   { label: "Negative", value: "10%", icon: <ThumbsDown />, color: "red" }
//                 ].map((s, i) => (
//                   <div key={i} className={`text-center p-4 bg-${s.color}-50 border border-${s.color}-200 rounded-xl`}>
//                     <div className={`w-8 h-8 text-${s.color}-600 mx-auto mb-2`}>{s.icon}</div>
//                     <div className={`text-2xl font-bold text-${s.color}-600`}>{s.value}</div>
//                     <div className="text-xs text-gray-600">{s.label}</div>
//                   </div>
//                 ))}
//               </div>
//               <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
//                 <p className="text-sm font-bold text-gray-900 mb-2">Top Issue:</p>
//                 <p className="text-sm text-gray-700">"Packaging quality" - mentioned 342 times</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 px-4 bg-white text-center">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-black mb-6">Stop Losing Sales to <span className="text-red-600">Ignored Feedback</span></h2>
//           <p className="text-xl text-gray-700 mb-8">Thousands of reviews hide critical insights. AI finds them for you.</p>
//           <Button onClick={() => setLocation("/login")} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-12 py-6 rounded-full shadow-2xl">
//             👉 Analyze Reviews Free
//           </Button>
//         </div>
//       </section>

//       <footer className="bg-gray-900 py-12 text-center">
//         <p className="text-gray-500 text-sm">© 2025 Insydz. 🇮🇳</p>
//       </footer>
//     </div>
//   );
// }



// import { useState, useEffect } from "react";
// import { useLocation } from "wouter";
// import { 
//   ArrowRight, CheckCircle2, MessageCircle, ThumbsUp, ThumbsDown, 
//   TrendingUp, Star, Heart, ChevronDown, Sparkles, Eye, Bell, Clock, Target 
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function ReviewAnalyticsFeaturePage() {
//   const [, setLocation] = useLocation();
//   const [scrolled, setScrolled] = useState(false);
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleGetStarted = () => setLocation("/login");
//   const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

//   const faqs = [
//     { question: "How does AI analyze reviews?", answer: "Our AI uses NLP to extract sentiments, key complaints, and praise from every review." },
//     { question: "Can I track multiple products at once?", answer: "Yes, track all your listings in one dashboard for instant insights." },
//     { question: "Does it work for Amazon India & Flipkart?", answer: "Absolutely! Both marketplaces are fully supported." },
//     { question: "Can I get alerts for negative trends?", answer: "Yes, you receive instant notifications for negative reviews or low ratings." },
//     { question: "Is there a free plan?", answer: "Yes, our free plan includes basic review analysis for limited products." },
//     { question: "Can I export insights?", answer: "Yes, you can export summaries and charts for reporting or team sharing." }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation */}
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/95 backdrop-blur-xl border-b border-purple-200 shadow-lg"
//           : "bg-white/80 backdrop-blur-md border-b border-purple-100"
//       }`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setLocation("/")}>
//               <img src="/logo.png" alt="Insydz Logo" className="w-12 h-12 rounded-2xl shadow-lg object-contain" />
//               <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <Button onClick={() => setLocation("/")} variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">← Back to Home</Button>
//               <Button onClick={handleGetStarted} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg">Start Free</Button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50">
//         <div className="relative max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
//                 Review Analytics —
//                 <br />
//                 <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Understand Customers</span>
//                 <br />
//                 Without Reading 1000s of Reviews
//               </h1>
//               <p className="text-xl text-gray-700">
//                 AI analyzes every review to show you what customers love, hate, and want improved — 
//                 <span className="text-purple-700 font-semibold"> so you can fix issues before ratings drop.</span>
//               </p>
//               <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl group">
//                 👉 Start Free Review Analysis <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </div>

//             {/* Hero Visual */}
//             <div className="bg-white border-2 border-purple-200 rounded-3xl p-8 shadow-2xl">
//               <h3 className="font-bold text-gray-900 mb-4">Sentiment Analysis</h3>
//               <div className="grid grid-cols-3 gap-4 mb-6">
//                 {[
//                   { label: "Positive", value: "68%", icon: <ThumbsUp className="w-6 h-6 text-green-600 mx-auto"/>, color: "green" },
//                   { label: "Neutral", value: "22%", icon: <Heart className="w-6 h-6 text-yellow-500 mx-auto"/>, color: "yellow" },
//                   { label: "Negative", value: "10%", icon: <ThumbsDown className="w-6 h-6 text-red-600 mx-auto"/>, color: "red" }
//                 ].map((s, i) => (
//                   <div key={i} className={`text-center p-4 bg-${s.color}-50 border border-${s.color}-200 rounded-xl`}>
//                     {s.icon}
//                     <p className="mt-2 font-semibold text-gray-900">{s.label}</p>
//                     <p className={`text-${s.color}-600 font-bold text-lg`}>{s.value}</p>
//                   </div>
//                 ))}
//               </div>

//               <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-2xl p-4 text-center">
//                 <MessageCircle className="w-6 h-6 text-purple-600 mx-auto mb-2" />
//                 <p className="text-gray-900 font-semibold">Customer Highlight</p>
//                 <p className="text-sm text-gray-600">"Great quality but packaging could improve."</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Problems Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-6xl mx-auto text-center mb-12">
//           <h2 className="text-4xl lg:text-5xl font-black text-gray-900">Why Sellers Miss Key Insights</h2>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           {[
//             { icon: <Clock className="w-8 h-8"/>, title: "Manually reading 1000s of reviews" },
//             { icon: <ThumbsDown className="w-8 h-8"/>, title: "Negative trends are missed" },
//             { icon: <TrendingUp className="w-8 h-8"/>, title: "Opportunity to improve ratings is delayed" },
//             { icon: <Star className="w-8 h-8"/>, title: "Poor prioritization of improvements" }
//           ].map((item,i)=>(
//             <div key={i} className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-400 hover:shadow-lg transition-all">
//               <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4 text-white shadow-md">{item.icon}</div>
//               <p className="text-gray-700 font-medium">{item.title}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Feature Depth */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto text-center mb-12">
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Built for Smart Review Intelligence</h2>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {[
//             { feature: "Real-Time Sentiment Analysis", benefit: "Identify negative trends immediately", icon: <Eye className="w-8 h-8"/>, color: "from-purple-600 to-pink-600" },
//             { feature: "Customer Highlight Extraction", benefit: "See key points at a glance", icon: <Sparkles className="w-8 h-8"/>, color: "from-indigo-500 to-purple-500" },
//             { feature: "Automated Alerts", benefit: "Never miss critical feedback", icon: <Bell className="w-8 h-8"/>, color: "from-red-500 to-pink-500" }
//           ].map((item,i)=>(
//             <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-400 hover:shadow-xl transition-all">
//               <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>{item.icon}</div>
//               <h3 className="text-lg font-bold text-gray-900 mb-2">{item.feature}</h3>
//               <p className="text-gray-600 flex items-center gap-2"><ArrowRight className="w-4 h-4 text-purple-600"/>{item.benefit}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FAQs */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-4xl mx-auto text-center mb-12">
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Review Analytics – FAQs</h2>
//         </div>
//         <div className="space-y-4 max-w-4xl mx-auto">
//           {faqs.map((faq,i)=>(
//             <div key={i} className="bg-gray-50 border-2 border-gray-200 rounded-xl overflow-hidden hover:border-purple-400 transition-all">
//               <button className="w-full px-6 py-4 flex items-center justify-between text-left" onClick={()=>toggleFaq(i)}>
//                 <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
//                 <ChevronDown className={`w-5 h-5 text-purple-600 transition-transform ${openFaq===i?'rotate-180':''}`} />
//               </button>
//               {openFaq===i && <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//             Stop Guessing Customer Feedback.
//             <br />
//             <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Act Before Ratings Drop</span>
//           </h2>
//           <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group">
//             👉 Start Free Review Analysis <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/>
//           </Button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <p className="text-gray-500 text-sm">© 2025 Insydz. All rights reserved. Built for Indian sellers 🇮🇳</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { 
  ArrowRight, CheckCircle2, MessageCircle, ThumbsUp, ThumbsDown, 
  TrendingUp, Star, Heart, ChevronDown, Sparkles, Eye, Bell, Clock, Target,
  Menu, Sun, Moon, ArrowLeft, BookOpen, Video, FileText, 
  ShoppingBag, Store, Briefcase, Users, Code, Globe, Trophy, Package,
  TrendingDown, Search, Zap, X,
  Presentation,
  Flame
} from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function ReviewAnalyticsFeaturePage() {
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
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
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

  const toggleMobileMenu = (menuName: string) => {
    setMobileActiveMenu(mobileActiveMenu === menuName ? null : menuName);
  };

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
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const faqs = [
    { question: "How does AI analyze reviews?", answer: "Our AI uses NLP to extract sentiments, key complaints, and praise from every review." },
    { question: "Can I track multiple products at once?", answer: "Yes, track all your listings in one dashboard for instant insights." },
    { question: "Does it work for Amazon India & Flipkart?", answer: "Absolutely! Both marketplaces are fully supported." },
    { question: "Can I get alerts for negative trends?", answer: "Yes, you receive instant notifications for negative reviews or low ratings." },
    { question: "Is there a free plan?", answer: "Yes, our free plan includes basic review analysis for limited products." },
    { question: "Can I export insights?", answer: "Yes, you can export summaries and charts for reporting or team sharing." }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navigation - Same as other pages */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg" : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-1">
              <button onClick={() => setLocation('/')} className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </button>
              <div className="flex items-center space-x-1 group cursor-pointer" onClick={() => setLocation('/')}>
                <img src="/logo.png" alt="Insydz Logo" className="w-12 h-12 rounded-2xl shadow-lg object-contain" />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-2" ref={dropdownRef}>
              <button onClick={() => setLocation('/')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-all">Home</button>
              {/* Solutions Dropdown - HIGHLIGHTED */}
                            <div className="relative">
                              <button
                                onMouseEnter={() => setActiveDropdown('Solutions')}
                                className="px-3 py-2 text-sm text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 font-semibold rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all flex items-center gap-1"
                              >
                                Solutions
                                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Solutions' ? 'rotate-180' : ''}`} />
                              </button>
                              {activeDropdown === 'Solutions' && (
                                <div 
                                  onMouseLeave={() => setActiveDropdown(null)}
                                  className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                                >
                                  {navigationMenu.Solutions.map((item, i) => (
                                    <button
                                      key={i}
                                      onClick={() => handleMenuItemClick(item)}
                                      className="w-full px-4 py-3 text-left hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors flex items-center gap-3 group"
                                    >
                                      <span className="text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                      </span>
                                      <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 flex-1">
                                        {item.name}
                                      </span>
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
              
                            {/* Use Cases Dropdown */}
                            <div className="relative">
                              <button
                                onMouseEnter={() => setActiveDropdown('Use Cases')}
                                className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1"
                              >
                                Use Cases
                                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Use Cases' ? 'rotate-180' : ''}`} />
                              </button>
                              {activeDropdown === 'Use Cases' && (
                                <div 
                                  onMouseLeave={() => setActiveDropdown(null)}
                                  className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                                >
                                  {navigationMenu["Use Cases"].map((item, i) => (
                                    <button
                                      key={i}
                                      onClick={() => handleMenuItemClick(item)}
                                      className="w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-3 group"
                                    >
                                      <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                      </span>
                                      <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                                        {item.name}
                                      </span>
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
              
              {/* Dropdowns - Features highlighted */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Features')} className="px-3 py-2 text-sm text-purple-600 dark:text-purple-500 font-semibold rounded-lg hover:bg-purple-50 transition-all flex items-center gap-1">
                  Features <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Features' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Features' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border py-2">
                    {navigationMenu.Features.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-purple-50 flex items-center gap-3">
                        <span className="text-purple-600">{item.icon}</span>
                        <span className="text-sm text-gray-700">{item.name}</span>
                        {item.badge && <span className="text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => setLocation('/pricing')} className="px-3 py-2 text-sm font-medium">Pricing</button>
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
              
                            {/* Resources Dropdown */}
                            <div className="relative">
                              <button
                                onMouseEnter={() => setActiveDropdown('Resources')}
                                className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1"
                              >
                                Resources
                                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Resources' ? 'rotate-180' : ''}`} />
                              </button>
                              {activeDropdown === 'Resources' && (
                                <div 
                                  onMouseLeave={() => setActiveDropdown(null)}
                                  className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                                >
                                  {navigationMenu.Resources.map((item, i) => (
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

              <Button onClick={() => setLocation('/login')} className="ml-2 text-sm bg-gradient-to-r from-pink-500 to-rose-500">Login</Button>
              <button className="ml-2 p-2 rounded-full bg-gray-200" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400"/> : <Moon className="w-5 h-5"/>}
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
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                          </button>
            
                          {/* Mobile Solutions */}
                          <div>
                            <button 
                              onClick={() => toggleMobileMenu('Solutions')}
                              className="flex items-center justify-between w-full px-4 py-2 text-orange-600 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg font-semibold"
                            >
                              Solutions
                              <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Solutions' ? 'rotate-180' : ''}`} />
                            </button>
                            {mobileActiveMenu === 'Solutions' && (
                              <div className="ml-4 mt-2 space-y-1">
                                {navigationMenu.Solutions.map((item, i) => (
                                  <button 
                                    key={i} 
                                    onClick={() => handleMenuItemClick(item)}
                                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg"
                                  >
                                    {item.icon}
                                    {item.name}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                          {/* Mobile Use Cases */}
                                                      <div>
                                                        <button 
                                                          onClick={() => toggleMobileMenu('Use Cases')}
                                                          className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
                                                        >
                                                          Use Cases
                                                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Use Cases' ? 'rotate-180' : ''}`} />
                                                        </button>
                                                        {mobileActiveMenu === 'Use Cases' && (
                                                          <div className="ml-4 mt-2 space-y-1">
                                                            {navigationMenu["Use Cases"].map((item, i) => (
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
                                        
                                                      {/* Mobile Features */}
                                                      <div>
                                                        <button 
                                                          onClick={() => toggleMobileMenu('Features')}
                                                          className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
                                                        >
                                                          Features
                                                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Features' ? 'rotate-180' : ''}`} />
                                                        </button>
                                                        {mobileActiveMenu === 'Features' && (
                                                          <div className="ml-4 mt-2 space-y-1">
                                                            {navigationMenu.Features.map((item, i) => (
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
            
                          <button onClick={() => setLocation('/pricing')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                            Pricing
                          </button>
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:to-gray-950">
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
                Review Analytics —
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Understand Customers</span>
                <br />
                Without Reading 1000s of Reviews
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                AI analyzes every review to show you what customers love, hate, and want improved — 
                <span className="text-purple-700 dark:text-purple-400 font-semibold"> so you can fix issues before ratings drop.</span>
              </p>
              <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl group">
                👉 Start Free Review Analysis <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Hero Visual */}
            <div className="bg-white dark:bg-gray-900 border-2 border-purple-200 dark:border-purple-800 rounded-3xl p-8 shadow-2xl">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Sentiment Analysis</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Positive", value: "68%", icon: <ThumbsUp className="w-6 h-6 text-green-600 mx-auto"/>, bgColor: "bg-green-50", borderColor: "border-green-200" },
                  { label: "Neutral", value: "22%", icon: <Heart className="w-6 h-6 text-yellow-500 mx-auto"/>, bgColor: "bg-yellow-50", borderColor: "border-yellow-200" },
                  { label: "Negative", value: "10%", icon: <ThumbsDown className="w-6 h-6 text-red-600 mx-auto"/>, bgColor: "bg-red-50", borderColor: "border-red-200" }
                ].map((s, i) => (
                  <div key={i} className={`text-center p-4 ${s.bgColor} border ${s.borderColor} rounded-xl`}>
                    {s.icon}
                    <p className="mt-2 font-semibold text-gray-900 dark:text-white text-sm">{s.label}</p>
                    <p className="font-bold text-lg">{s.value}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-300 rounded-2xl p-4 text-center">
                <MessageCircle className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <p className="text-gray-900 dark:text-white font-semibold">Customer Highlight</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">"Great quality but packaging could improve."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white">Why Sellers Miss Key Insights</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: <Clock className="w-8 h-8"/>, title: "Manually reading 1000s of reviews" },
            { icon: <ThumbsDown className="w-8 h-8"/>, title: "Negative trends are missed" },
            { icon: <TrendingUp className="w-8 h-8"/>, title: "Opportunity to improve ratings is delayed" },
            { icon: <Star className="w-8 h-8"/>, title: "Poor prioritization of improvements" }
          ].map((item,i)=>(
            <div key={i} className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-purple-400 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4 text-white shadow-md">{item.icon}</div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Depth */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">Built for Smart Review Intelligence</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { feature: "Real-Time Sentiment Analysis", benefit: "Identify negative trends immediately", icon: <Eye className="w-8 h-8"/>, color: "from-purple-600 to-pink-600" },
            { feature: "Customer Highlight Extraction", benefit: "See key points at a glance", icon: <Sparkles className="w-8 h-8"/>, color: "from-indigo-500 to-purple-500" },
            { feature: "Automated Alerts", benefit: "Never miss critical feedback", icon: <Bell className="w-8 h-8"/>, color: "from-red-500 to-pink-500" }
          ].map((item,i)=>(
            <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-purple-400 hover:shadow-xl transition-all">
              <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.feature}</h3>
              <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2"><ArrowRight className="w-4 h-4 text-purple-600"/>{item.benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">Review Analytics – FAQs</h2>
        </div>
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq,i)=>(
            <div key={i} className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-purple-400 transition-all">
              <button className="w-full px-6 py-4 flex items-center justify-between text-left" onClick={()=>toggleFaq(i)}>
                <span className="font-bold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-purple-600 transition-transform ${openFaq===i?'rotate-180':''}`} />
              </button>
              {openFaq===i && <div className="px-6 pb-4 text-gray-700 dark:text-gray-300">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
            Stop Guessing Customer Feedback.
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Act Before Ratings Drop</span>
          </h2>
          <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group">
            👉 Start Free Review Analysis <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">© 2025 Insydz. All rights reserved. Built for Indian sellers 🇮🇳</p>
        </div>
      </footer>
    </div>
  );
}