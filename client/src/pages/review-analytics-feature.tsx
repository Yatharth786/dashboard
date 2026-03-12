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

// import { useState, useEffect, useRef } from "react";
// import { useLocation } from "wouter";
// import { 
//   ArrowRight, CheckCircle2, MessageCircle, ThumbsUp, ThumbsDown, 
//   TrendingUp, Star, Heart, ChevronDown, Sparkles, Eye, Bell, Clock, Target,
//   Menu, Sun, Moon, ArrowLeft, BookOpen, Video, FileText, 
//   ShoppingBag, Store, Briefcase, Users, Code, Globe, Trophy, Package,
//   TrendingDown, Search, Zap, X,
//   Presentation,
//   Flame
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

// export default function ReviewAnalyticsFeaturePage() {
//   const [, setLocation] = useLocation();
//   const [scrolled, setScrolled] = useState(false);
//   const [openFaq, setOpenFaq] = useState<number | null>(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
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

//   const handleGetStarted = () => setLocation("/login");
//   const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

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

//   const faqs = [
//     { question: "How does AI analyze reviews?", answer: "Our AI uses NLP to extract sentiments, key complaints, and praise from every review." },
//     { question: "Can I track multiple products at once?", answer: "Yes, track all your listings in one dashboard for instant insights." },
//     { question: "Does it work for Amazon India & Flipkart?", answer: "Absolutely! Both marketplaces are fully supported." },
//     { question: "Can I get alerts for negative trends?", answer: "Yes, you receive instant notifications for negative reviews or low ratings." },
//     { question: "Is there a free plan?", answer: "Yes, our free plan includes basic review analysis for limited products." },
//     { question: "Can I export insights?", answer: "Yes, you can export summaries and charts for reporting or team sharing." }
//   ];

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-950">
//       {/* Navigation - Same as other pages */}
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg" : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
//       }`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex items-center space-x-1">
//               <button onClick={() => setLocation('/')} className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all">
//                 <ArrowLeft className="w-4 h-4" />
//                 <span className="hidden sm:inline">Back</span>
//               </button>
//               <div className="flex items-center space-x-1 group cursor-pointer" onClick={() => setLocation('/')}>
//                 <img src="/logo.png" alt="Insydz Logo" className="w-12 h-12 rounded-2xl shadow-lg object-contain" />
//                 <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//               </div>
//             </div>

//             <div className="hidden lg:flex items-center space-x-2" ref={dropdownRef}>
//               <button onClick={() => setLocation('/')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-all">Home</button>
//               {/* Solutions Dropdown - HIGHLIGHTED */}
//                             <div className="relative">
//                               <button
//                                 onMouseEnter={() => setActiveDropdown('Solutions')}
//                                 className="px-3 py-2 text-sm text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 font-semibold rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all flex items-center gap-1"
//                               >
//                                 Solutions
//                                 <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Solutions' ? 'rotate-180' : ''}`} />
//                               </button>
//                               {activeDropdown === 'Solutions' && (
//                                 <div 
//                                   onMouseLeave={() => setActiveDropdown(null)}
//                                   className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
//                                 >
//                                   {navigationMenu.Solutions.map((item, i) => (
//                                     <button
//                                       key={i}
//                                       onClick={() => handleMenuItemClick(item)}
//                                       className="w-full px-4 py-3 text-left hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors flex items-center gap-3 group"
//                                     >
//                                       <span className="text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
//                                         {item.icon}
//                                       </span>
//                                       <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 flex-1">
//                                         {item.name}
//                                       </span>
//                                     </button>
//                                   ))}
//                                 </div>
//                               )}
//                             </div>
              
//                             {/* Use Cases Dropdown */}
//                             <div className="relative">
//                               <button
//                                 onMouseEnter={() => setActiveDropdown('Use Cases')}
//                                 className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1"
//                               >
//                                 Use Cases
//                                 <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Use Cases' ? 'rotate-180' : ''}`} />
//                               </button>
//                               {activeDropdown === 'Use Cases' && (
//                                 <div 
//                                   onMouseLeave={() => setActiveDropdown(null)}
//                                   className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
//                                 >
//                                   {navigationMenu["Use Cases"].map((item, i) => (
//                                     <button
//                                       key={i}
//                                       onClick={() => handleMenuItemClick(item)}
//                                       className="w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-3 group"
//                                     >
//                                       <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
//                                         {item.icon}
//                                       </span>
//                                       <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
//                                         {item.name}
//                                       </span>
//                                     </button>
//                                   ))}
//                                 </div>
//                               )}
//                             </div>
              
//               {/* Dropdowns - Features highlighted */}
//               <div className="relative">
//                 <button onMouseEnter={() => setActiveDropdown('Features')} className="px-3 py-2 text-sm text-purple-600 dark:text-purple-500 font-semibold rounded-lg hover:bg-purple-50 transition-all flex items-center gap-1">
//                   Features <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Features' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {activeDropdown === 'Features' && (
//                   <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border py-2">
//                     {navigationMenu.Features.map((item, i) => (
//                       <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-purple-50 flex items-center gap-3">
//                         <span className="text-purple-600">{item.icon}</span>
//                         <span className="text-sm text-gray-700">{item.name}</span>
//                         {item.badge && <span className="text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <button onClick={() => setLocation('/pricing')} className="px-3 py-2 text-sm font-medium">Pricing</button>
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
              
//                             {/* Resources Dropdown */}
//                             <div className="relative">
//                               <button
//                                 onMouseEnter={() => setActiveDropdown('Resources')}
//                                 className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1"
//                               >
//                                 Resources
//                                 <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Resources' ? 'rotate-180' : ''}`} />
//                               </button>
//                               {activeDropdown === 'Resources' && (
//                                 <div 
//                                   onMouseLeave={() => setActiveDropdown(null)}
//                                   className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
//                                 >
//                                   {navigationMenu.Resources.map((item, i) => (
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
//                                     </button>
//                                   ))}
//                                 </div>
//                               )}
//                             </div>
//                             {/* About Dropdown */}
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

//               <Button onClick={() => setLocation('/login')} className="ml-2 text-sm bg-gradient-to-r from-pink-500 to-rose-500">Login</Button>
//               <button className="ml-2 p-2 rounded-full bg-gray-200" onClick={() => setIsDarkMode(!isDarkMode)}>
//                 {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400"/> : <Moon className="w-5 h-5"/>}
//               </button>
//             </div>
//             {/* Mobile Menu Button */}
//                         <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                           {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                         </button>
//                       </div>
//                     </div>
            
//                     {/* Mobile Menu */}
//                     {isMenuOpen && (
//                       <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 max-h-[calc(100vh-5rem)] overflow-y-auto">
//                         <div className="px-4 py-4 space-y-2">
//                           <button onClick={() => { setLocation('/'); setIsMenuOpen(false); }} className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
//                             <ArrowLeft className="w-4 h-4" />
//                             Back to Home
//                           </button>
            
//                           {/* Mobile Solutions */}
//                           <div>
//                             <button 
//                               onClick={() => toggleMobileMenu('Solutions')}
//                               className="flex items-center justify-between w-full px-4 py-2 text-orange-600 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg font-semibold"
//                             >
//                               Solutions
//                               <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Solutions' ? 'rotate-180' : ''}`} />
//                             </button>
//                             {mobileActiveMenu === 'Solutions' && (
//                               <div className="ml-4 mt-2 space-y-1">
//                                 {navigationMenu.Solutions.map((item, i) => (
//                                   <button 
//                                     key={i} 
//                                     onClick={() => handleMenuItemClick(item)}
//                                     className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg"
//                                   >
//                                     {item.icon}
//                                     {item.name}
//                                   </button>
//                                 ))}
//                               </div>
//                             )}
//                           </div>
//                           {/* Mobile Use Cases */}
//                                                       <div>
//                                                         <button 
//                                                           onClick={() => toggleMobileMenu('Use Cases')}
//                                                           className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                                                         >
//                                                           Use Cases
//                                                           <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Use Cases' ? 'rotate-180' : ''}`} />
//                                                         </button>
//                                                         {mobileActiveMenu === 'Use Cases' && (
//                                                           <div className="ml-4 mt-2 space-y-1">
//                                                             {navigationMenu["Use Cases"].map((item, i) => (
//                                                               <button 
//                                                                 key={i} 
//                                                                 onClick={() => handleMenuItemClick(item)}
//                                                                 className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
//                                                               >
//                                                                 {item.icon}
//                                                                 {item.name}
//                                                               </button>
//                                                             ))}
//                                                           </div>
//                                                         )}
//                                                       </div>
                                        
//                                                       {/* Mobile Features */}
//                                                       <div>
//                                                         <button 
//                                                           onClick={() => toggleMobileMenu('Features')}
//                                                           className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                                                         >
//                                                           Features
//                                                           <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Features' ? 'rotate-180' : ''}`} />
//                                                         </button>
//                                                         {mobileActiveMenu === 'Features' && (
//                                                           <div className="ml-4 mt-2 space-y-1">
//                                                             {navigationMenu.Features.map((item, i) => (
//                                                               <button 
//                                                                 key={i} 
//                                                                 onClick={() => handleMenuItemClick(item)}
//                                                                 className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
//                                                               >
//                                                                 {item.icon}
//                                                                 {item.name}
//                                                                 {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
//                                                               </button>
//                                                             ))}
//                                                           </div>
//                                                         )}
//                                                       </div>
            
//                           <button onClick={() => setLocation('/pricing')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
//                             Pricing
//                           </button>
//                           {/* Mobile Free Tools */}
//                                                       <div>
//                                                         <button 
//                                                           onClick={() => toggleMobileMenu('Free Tools')}
//                                                           className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                                                         >
//                                                           Free Tools
//                                                           <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Free Tools' ? 'rotate-180' : ''}`} />
//                                                         </button>
//                                                         {mobileActiveMenu === 'Free Tools' && (
//                                                           <div className="ml-4 mt-2 space-y-1">
//                                                             {navigationMenu["Free Tools"].map((item, i) => (
//                                                               <button 
//                                                                 key={i} 
//                                                                 onClick={() => handleMenuItemClick(item)}
//                                                                 className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
//                                                               >
//                                                                 {item.icon}
//                                                                 {item.name}
//                                                                 {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
//                                                               </button>
//                                                             ))}
//                                                           </div>
//                                                         )}
//                                                       </div>
                                        
//                                                      {/* Mobile Compare */}
//                                                                    <div>
//                                                                      <button 
//                                                                        onClick={() => toggleMobileMenu('Compare')}
//                                                                        className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                                                                      >
//                                                                        Compare
//                                                                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Compare' ? 'rotate-180' : ''}`} />
//                                                                      </button>
//                                                                      {mobileActiveMenu === 'Compare' && (
//                                                                        <div className="ml-4 mt-2 space-y-1">
//                                                                          {navigationMenu.Compare.map((item, i) => (
//                                                                            <button 
//                                                                              key={i} 
//                                                                              onClick={() => handleMenuItemClick(item)}
//                                                                              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
//                                                                            >
//                                                                              {item.icon}
//                                                                              {item.name}
//                                                                            </button>
//                                                                          ))}
//                                                                        </div>
//                                                                      )}
//                                                                    </div>
                                        
//                                                        {/* Mobile Resources */}
//                                                       <div>
//                                                         <button 
//                                                           onClick={() => toggleMobileMenu('Resources')}
//                                                           className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                                                         >
//                                                           Resources
//                                                           <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Resources' ? 'rotate-180' : ''}`} />
//                                                         </button>
//                                                         {mobileActiveMenu === 'Resources' && (
//                                                           <div className="ml-4 mt-2 space-y-1">
//                                                             {navigationMenu.Resources.map((item, i) => (
//                                                               <button 
//                                                                 key={i} 
//                                                                 onClick={() => handleMenuItemClick(item)}
//                                                                 className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
//                                                               >
//                                                                 {item.icon}
//                                                                 {item.name}
//                                                                 {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
//                                                               </button>
//                                                             ))}
//                                                           </div>
//                                                         )}
//                                                       </div>
            
            
            
//                           {/* Mobile About */}
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
            
//                           <Button onClick={() => { setLocation('/login'); setIsMenuOpen(false); }} className="w-full mt-2 bg-gradient-to-r from-pink-500 to-rose-500">
//                             Login
//                           </Button>

//             <button 
//                             className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors w-full flex justify-center items-center"
//                             onClick={() => setIsDarkMode(!isDarkMode)}
//                           >
//                             {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400"/> : <Moon className="w-5 h-5 text-gray-800"/>}
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </nav>

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:to-gray-950">
//         <div className="relative max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
//                 Review Analytics —
//                 <br />
//                 <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Understand Customers</span>
//                 <br />
//                 Without Reading 1000s of Reviews
//               </h1>
//               <p className="text-xl text-gray-700 dark:text-gray-300">
//                 AI analyzes every review to show you what customers love, hate, and want improved — 
//                 <span className="text-purple-700 dark:text-purple-400 font-semibold"> so you can fix issues before ratings drop.</span>
//               </p>
//               <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl group">
//                 👉 Start Free Review Analysis <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </div>

//             {/* Hero Visual */}
//             <div className="bg-white dark:bg-gray-900 border-2 border-purple-200 dark:border-purple-800 rounded-3xl p-8 shadow-2xl">
//               <h3 className="font-bold text-gray-900 dark:text-white mb-4">Sentiment Analysis</h3>
//               <div className="grid grid-cols-3 gap-4 mb-6">
//                 {[
//                   { label: "Positive", value: "68%", icon: <ThumbsUp className="w-6 h-6 text-green-600 mx-auto"/>, bgColor: "bg-green-50", borderColor: "border-green-200" },
//                   { label: "Neutral", value: "22%", icon: <Heart className="w-6 h-6 text-yellow-500 mx-auto"/>, bgColor: "bg-yellow-50", borderColor: "border-yellow-200" },
//                   { label: "Negative", value: "10%", icon: <ThumbsDown className="w-6 h-6 text-red-600 mx-auto"/>, bgColor: "bg-red-50", borderColor: "border-red-200" }
//                 ].map((s, i) => (
//                   <div key={i} className={`text-center p-4 ${s.bgColor} border ${s.borderColor} rounded-xl`}>
//                     {s.icon}
//                     <p className="mt-2 font-semibold text-gray-900 dark:text-white text-sm">{s.label}</p>
//                     <p className="font-bold text-lg">{s.value}</p>
//                   </div>
//                 ))}
//               </div>

//               <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-300 rounded-2xl p-4 text-center">
//                 <MessageCircle className="w-6 h-6 text-purple-600 mx-auto mb-2" />
//                 <p className="text-gray-900 dark:text-white font-semibold">Customer Highlight</p>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">"Great quality but packaging could improve."</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Problems Section */}
//       <section className="py-20 px-4 bg-white dark:bg-gray-950">
//         <div className="max-w-6xl mx-auto text-center mb-12">
//           <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white">Why Sellers Miss Key Insights</h2>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           {[
//             { icon: <Clock className="w-8 h-8"/>, title: "Manually reading 1000s of reviews" },
//             { icon: <ThumbsDown className="w-8 h-8"/>, title: "Negative trends are missed" },
//             { icon: <TrendingUp className="w-8 h-8"/>, title: "Opportunity to improve ratings is delayed" },
//             { icon: <Star className="w-8 h-8"/>, title: "Poor prioritization of improvements" }
//           ].map((item,i)=>(
//             <div key={i} className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-purple-400 hover:shadow-lg transition-all">
//               <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4 text-white shadow-md">{item.icon}</div>
//               <p className="text-gray-700 dark:text-gray-300 font-medium">{item.title}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Feature Depth */}
//       <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
//         <div className="max-w-6xl mx-auto text-center mb-12">
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">Built for Smart Review Intelligence</h2>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {[
//             { feature: "Real-Time Sentiment Analysis", benefit: "Identify negative trends immediately", icon: <Eye className="w-8 h-8"/>, color: "from-purple-600 to-pink-600" },
//             { feature: "Customer Highlight Extraction", benefit: "See key points at a glance", icon: <Sparkles className="w-8 h-8"/>, color: "from-indigo-500 to-purple-500" },
//             { feature: "Automated Alerts", benefit: "Never miss critical feedback", icon: <Bell className="w-8 h-8"/>, color: "from-red-500 to-pink-500" }
//           ].map((item,i)=>(
//             <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-purple-400 hover:shadow-xl transition-all">
//               <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>{item.icon}</div>
//               <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.feature}</h3>
//               <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2"><ArrowRight className="w-4 h-4 text-purple-600"/>{item.benefit}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FAQs */}
//       <section className="py-20 px-4 bg-white dark:bg-gray-950">
//         <div className="max-w-4xl mx-auto text-center mb-12">
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">Review Analytics – FAQs</h2>
//         </div>
//         <div className="space-y-4 max-w-4xl mx-auto">
//           {faqs.map((faq,i)=>(
//             <div key={i} className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-purple-400 transition-all">
//               <button className="w-full px-6 py-4 flex items-center justify-between text-left" onClick={()=>toggleFaq(i)}>
//                 <span className="font-bold text-gray-900 dark:text-white pr-4">{faq.question}</span>
//                 <ChevronDown className={`w-5 h-5 text-purple-600 transition-transform ${openFaq===i?'rotate-180':''}`} />
//               </button>
//               {openFaq===i && <div className="px-6 pb-4 text-gray-700 dark:text-gray-300">{faq.answer}</div>}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-950">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
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
  Flame,
  BarChart3,
  AlertCircle, LayoutGrid
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── SEO METADATA ────────────────────────────────────────────────────────────
// Page URL:        https://insydz.com/features/review-analytics
// Meta Title:      Review Analytics Software for Amazon India & Flipkart — Insydz
// Meta Description: AI-powered review analytics software for Amazon India and Flipkart sellers.
//                  Automatically analyze thousands of Hindi and English reviews.
//                  Catch rating drops before they happen. Start free — no credit card.
// Primary Keyword: Review analytics software
// Secondary:       Sentiment analysis, Amazon review analyzer, Product review analytics software,
//                  Amazon review analytics tool, Sentiment analysis checker,
//                  Flipkart review analytics tool, AI review analysis tool,
//                  Online review monitoring platform
// Long-tail:       Analyze Amazon reviews automatically India, Amazon review analyzer Hindi,
//                  product review analytics software India, how to analyze Flipkart reviews automatically
// Schema Required: FAQPage + SoftwareApplication + HowTo
// Page accent:     Violet / Purple (#7B2FBE)
// ─────────────────────────────────────────────────────────────────────────────

// ─── SCHEMA MARKUP (inject in <head> via Helmet or equivalent) ───────────────
export const schemaFAQPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does AI analyze reviews?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Insydz AI reads every review on Amazon India and Flipkart in Hindi, Hinglish, and English. It classifies sentiment, clusters complaints, and ranks issues by rating impact. No manual reading."
      }
    },
    {
      "@type": "Question",
      "name": "Does it work for Amazon India and Flipkart?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — both Amazon India and Flipkart from one dashboard, with Hindi and Hinglish review analysis and WhatsApp alerts."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a free plan for review analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Permanent free plan — 25 products, no credit card, no expiry. Sentiment analysis, complaint clustering, WhatsApp alerts included."
      }
    }
  ]
};

export const schemaSoftwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Insydz — Review Analytics Software for Indian Sellers",
  "url": "https://insydz.com/features/review-analytics",
  "description": "AI-powered review analytics for Amazon India and Flipkart. Analyze Hindi and English reviews automatically. Complaint clustering, sentiment analysis, WhatsApp alerts. Built for Indian marketplace sellers.",
  "applicationCategory": "BusinessApplication",
  "offers": [
    { "@type": "Offer", "price": "0", "priceCurrency": "INR", "name": "Free — 25 products, permanent" },
    { "@type": "Offer", "price": "1999", "priceCurrency": "INR", "billingIncrement": "P1M", "name": "Basic" },
    { "@type": "Offer", "price": "2999", "priceCurrency": "INR", "billingIncrement": "P1M", "name": "Premium" }
  ]
};

export const schemaHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Analyze Amazon India Reviews Automatically",
  "step": [
    { "@type": "HowToStep", "position": "1", "name": "Connect your listings", "text": "Add your ASINs or connect Amazon Seller Central. Insydz imports all existing reviews automatically." },
    { "@type": "HowToStep", "position": "2", "name": "Review your complaint clusters", "text": "AI groups all reviews into complaint themes ranked by frequency and rating impact — in Hindi and English." },
    { "@type": "HowToStep", "position": "3", "name": "Set your alert thresholds", "text": "Define when to receive a WhatsApp alert — e.g. when a complaint appears 10+ times or your rating drops below 4.2." },
    { "@type": "HowToStep", "position": "4", "name": "Act on the recommended fix", "text": "Each cluster includes a recommended action. Fix the highest-impact complaint first and monitor the rating recovery." }
  ]
};
// ─────────────────────────────────────────────────────────────────────────────

// ─── NAVIGATION MENU DATA ────────────────────────────────────────────────────
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
    { name: "All Features", icon: <LayoutGrid className="w-4 h-4" />, route: "/features" },
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
    { name: "Our Vision", icon: <Presentation className="w-4 h-4" />, route: "/about/our-vision" },
    { name: "Careers", icon: <Globe className="w-4 h-4" />, route: "/about/careers" },
    { name: "Contact Us", icon: <Users className="w-4 h-4" />, route: "/about/contact-us" },
  ],
};
// ─────────────────────────────────────────────────────────────────────────────

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
  const toggleMobileMenu = (menuName: string) =>
    setMobileActiveMenu(mobileActiveMenu === menuName ? null : menuName);
  const handleMenuItemClick = (item: MenuItemWithBadge) => {
    if (item.route) {
      setLocation(item.route);
      setActiveDropdown(null);
      setIsMenuOpen(false);
    }
  };

  // ─── SEO-OPTIMISED COPY FROM DOCX ─────────────────────────────────────────

  // Section 2: Pain points
  const painPoints = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Manually reading 1000s of reviews",
      description: "Takes hours every week — and still only covers a fraction of reviews.",
    },
    {
      icon: <ThumbsDown className="w-8 h-8" />,
      title: "Negative trends are missed",
      description: "Until the rating has already dropped — by which point the ranking damage is done.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Opportunity to improve ratings is delayed",
      description: "Weeks pass before the right fix is identified and implemented.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Poor prioritization of improvements",
      description: "Without data, sellers fix the last complaint they read — not the most impactful one.",
    },
  ];

  // Section 4: India-specific pain points
  const indiaPains = [
    {
      title: "Most reviews are in Hindi — and most tools can't read them",
      description:
        "60–70% of Amazon India reviews for mass-market products are written in Hindi or Hinglish. Tools built for Western markets process them incorrectly — or skip them entirely. That means the majority of your customer feedback is invisible.",
    },
    {
      title: "By the time you notice the rating drop, you've already lost the ranking",
      description:
        "Amazon India's ranking algorithm reacts to rating velocity — the speed of new reviews and sentiment shift. A wave of negative reviews during a sale event can drop your listing 10 positions before you've even opened the seller app.",
    },
    {
      title: "Flipkart review data is almost never tracked",
      description:
        "Most Amazon review analyzer tools only cover Amazon listings. Sellers running the same product on Flipkart get zero insight from reviews there — missing complaints that affect both platform rankings and product quality decisions.",
    },
    {
      title: "You fix the wrong thing — because you can't see what's most complained about",
      description:
        "Without AI clustering, sellers act on the last review they read — not the most common complaint. A product with 43 packaging complaints and 8 size complaints gets a size fix. The packaging issue keeps bleeding 1-star reviews for another 3 months.",
    },
  ];

  // Section 9: India-first advantages table
  const indiaFirstFeatures = [
    {
      feature: "Hindi + Hinglish review analysis — accurately",
      meaning: "100% of your customer feedback read and understood — not skipped or approximated. No other Indian competitor offers this.",
    },
    {
      feature: "Amazon India + Flipkart in one view",
      meaning: "Track sentiment and complaints across both major Indian marketplaces from one dashboard.",
    },
    {
      feature: "WhatsApp alerts — not email digests",
      meaning: "Review trend alerts arrive where you already are — on WhatsApp — so you act in real time, not after the damage.",
    },
    {
      feature: "Ranked by revenue impact, not just frequency",
      meaning: "Know which complaint to fix first based on its rating impact — not just how many times it appears.",
    },
    {
      feature: "Competitor review benchmarking",
      meaning: "See what customers complain about in competitor listings — and make your product the obvious fix before they do.",
    },
    {
      feature: "Tells you the fix, not just the problem",
      meaning: "Every complaint cluster includes a recommended action: packaging change, listing update, or product quality fix.",
    },
  ];

  // Section 10: Testimonials
  const testimonials = [
    {
      quote:
        "I had 800+ reviews and was manually spot-checking maybe 30. Insydz showed me in 5 minutes that 41 reviews mentioned the same delivery damage issue — all in Hindi. Fixed the packaging, rating went from 3.8 to 4.2 in 8 weeks.",
      name: "Neha S.",
      role: "Home appliances seller, Delhi · Amazon India",
    },
    {
      quote:
        "The competitor review analysis is what surprised me most. I could see exactly what customers hate about my top 3 competitors. I fixed those issues before launch and used them in my listing. My new product launched at 4.5 average.",
      name: "Vikram P.",
      role: "D2C kitchenware brand, Bengaluru · Amazon India + Flipkart",
    },
    {
      quote:
        "Managing 14 seller accounts, review monitoring used to take 3 people half a day every week. Insydz replaced that entire process — it surfaces the top issue per account each Monday morning on WhatsApp. We now act on feedback in hours, not weeks.",
      name: "Ananya K.",
      role: "E-commerce agency, Mumbai · 14 seller accounts",
    },
  ];

  // Section 11: SEO-optimised FAQs
  const faqs = [
    {
      question: "How does AI analyze reviews?",
      answer:
        "Insydz's AI reads every customer review on your Amazon India and Flipkart listings — in Hindi, Hinglish, and English. It uses natural language processing to classify each review as positive, neutral, or negative, extract main topics, and group similar complaints into ranked clusters. The AI then shows which issue has the highest impact on your star rating — so you know which fix to prioritize. Analysis runs automatically as new reviews appear, with no manual input required.",
    },
    {
      question: "Can I track multiple products at once?",
      answer:
        "Yes. Insydz tracks review analytics across all your products simultaneously — on both Amazon India and Flipkart. The free plan covers up to 25 products. Paid plans (₹1,999/month and ₹2,999/month) expand the product limit. The dashboard shows your full product catalogue sorted by sentiment score so you can see which listings need the most urgent attention at a glance.",
    },
    {
      question: "Does it work for Amazon India & Flipkart?",
      answer:
        "Yes — Insydz is one of the only review analytics tools that covers both Amazon India and Flipkart from a single dashboard. Most global review monitoring platforms cover Amazon.com only or don't support Flipkart at all. Insydz was built specifically for Indian marketplace sellers — with full support for both platforms, Hindi and Hinglish review analysis, and WhatsApp-based alerts.",
    },
    {
      question: "Can I get alerts for negative trends?",
      answer:
        "Yes. Set thresholds for negative sentiment — for example, alert when a specific complaint appears more than 10 times in 7 days, or when star rating drops below 4.2. When a threshold is crossed, Insydz sends a WhatsApp notification with the specific complaint theme, its frequency, and a recommended action. This means you act on a review problem before it becomes a rating problem.",
    },
    {
      question: "Is there a free plan?",
      answer:
        "Yes. Insydz has a permanent free plan — not a trial. It includes review sentiment analysis for up to 25 products, complaint clustering, and WhatsApp alerts. No credit card required, no expiry date. Paid plans start at ₹1,999/month and include unlimited products, competitor review analysis, and advanced trend reporting.",
    },
    {
      question: "Can I export insights?",
      answer:
        "Yes. Review analytics reports — including complaint clusters, sentiment trends, and star rating breakdowns — can be exported as PDF or CSV from the Insydz dashboard. This is particularly useful for agencies sharing monthly review performance reports with seller clients, or for brand managers presenting customer feedback data to product teams.",
    },
  ];
  const scrollToSection = (sectionId: string) => {
    setLocation('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // ──────────────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">

      {/* ─── NAVIGATION ──────────────────────────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setLocation("/")}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </button>
              <div
                className="flex items-center space-x-1 group cursor-pointer"
                onClick={() => setLocation("/")}
              >
                <div className="relative">
                  <img
                    src="/logo.png"
                    alt="Insydz Logo"
                    className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 object-contain"
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Insydz
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-2" ref={dropdownRef}>
              <button
                onClick={() => setLocation("/")}
                className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-all"
              >
                Home
              </button>

              {(["Solutions", "Use Cases", "Features", "Free Tools", "Compare", "Resources", "About"] as const).map((menuKey) => (
                <div className="relative" key={menuKey}>
                  <button
                    onMouseEnter={() => setActiveDropdown(menuKey)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1 ${
                      menuKey === "Features"
                        ? "text-purple-600 dark:text-purple-500 font-semibold hover:bg-purple-50"
                        : "text-gray-700 dark:text-gray-300 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                    }`}
                  >
                    {menuKey}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === menuKey ? "rotate-180" : ""}`} />
                  </button>
                  {activeDropdown === menuKey && (
                    <div
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                    >
                      {(navigationMenu[menuKey] as MenuItemWithBadge[]).map((item, i) => (
                        <button
                          key={i}
                          onClick={() => handleMenuItemClick(item)}
                          className="w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-3 group"
                        >
                          <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                          <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex-1">{item.name}</span>
                          {item.badge && (
                            <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <button
                onClick={() => setLocation("/pricing")}
                className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-all"
              >
                Pricing
              </button>

              <Button
                onClick={() => setLocation("/login")}
                className="ml-2 text-sm bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Login
              </Button>
              <button
                className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
              </button>
            </div>

            {/* Mobile toggle */}
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              <button
                onClick={() => { setLocation("/"); setIsMenuOpen(false); }}
                className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>

              {(["Solutions", "Use Cases", "Features", "Free Tools", "Compare", "Resources", "About"] as const).map((menuKey) => (
                <div key={menuKey}>
                  <button
                    onClick={() => toggleMobileMenu(menuKey)}
                    className={`flex items-center justify-between w-full px-4 py-2 rounded-lg font-medium ${
                      menuKey === "Features"
                        ? "text-purple-600 dark:text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                    }`}
                  >
                    {menuKey}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === menuKey ? "rotate-180" : ""}`} />
                  </button>
                  {mobileActiveMenu === menuKey && (
                    <div className="ml-4 mt-2 space-y-1">
                      {(navigationMenu[menuKey] as MenuItemWithBadge[]).map((item, i) => (
                        <button
                          key={i}
                          onClick={() => handleMenuItemClick(item)}
                          className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
                        >
                          {item.icon}
                          {item.name}
                          {item.badge && (
                            <span className="ml-auto text-xs bg-purple-600 text-white px-1.5 py-0.5 rounded-full">{item.badge}</span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <button
                onClick={() => setLocation("/pricing")}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
              >
                Pricing
              </button>
              <Button
                onClick={() => { setLocation("/login"); setIsMenuOpen(false); }}
                className="w-full mt-2 bg-gradient-to-r from-pink-500 to-rose-500"
              >
                Login
              </Button>
              <button
                className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 w-full flex justify-center items-center"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
              </button>
            </div>
          </div>
        )}
      </nav>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 1: HERO ─────────────────────────────────────────────────── */}
      {/* SEO H1: Primary keyword "review analytics software" in first 100 words */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-300 rounded-full px-4 py-2">
                <span className="text-lg">🇮🇳</span>
                <span className="text-sm font-medium text-purple-700">Built for Indian Sellers</span>
              </div>

              {/* H1 — "review analytics software" keyword in first sentence */}
              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
                Review Analytics —
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Understand Customers
                </span>
                <br />
                Without Reading 1000s of Reviews
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                AI-powered <strong>review analytics software</strong> analyzes every customer review
                across your Amazon India and Flipkart listings — in Hindi and English — to show you
                what customers love, hate, and want fixed.{" "}
                <span className="text-purple-700 dark:text-purple-400 font-semibold">
                  So you can act before ratings drop.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all group"
                >
                  🚀 Start Free Review Analysis
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => document.getElementById("feature-depth")?.scrollIntoView({ behavior: "smooth" })}
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-semibold px-8 py-6 text-lg rounded-full"
                >
                  See How It Works →
                </Button>
              </div>

              {/* Trust strip */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                {[
                  "Hindi + English analysis",
                  "Amazon India & Flipkart",
                  "WhatsApp-first alerts",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Sentiment Analysis Widget */}
            <div className="bg-white dark:bg-gray-900 border-2 border-purple-200 dark:border-purple-800 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-gray-900 dark:text-white">Sentiment Analysis</h3>
                <span className="text-xs bg-green-100 dark:bg-green-900/20 text-green-700 px-3 py-1 rounded-full font-semibold">Live</span>
              </div>

              {/* Sentiment scores */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "Positive 👍", value: "68%", icon: <ThumbsUp className="w-6 h-6 text-green-600 mx-auto" />, bg: "bg-green-50 dark:bg-green-900/20", border: "border-green-200 dark:border-green-700" },
                  { label: "Neutral 🤍", value: "22%", icon: <Heart className="w-6 h-6 text-yellow-500 mx-auto" />, bg: "bg-yellow-50 dark:bg-yellow-900/20", border: "border-yellow-200 dark:border-yellow-700" },
                  { label: "Negative 👎", value: "10%", icon: <ThumbsDown className="w-6 h-6 text-red-600 mx-auto" />, bg: "bg-red-50 dark:bg-red-900/20", border: "border-red-200 dark:border-red-700" },
                ].map((s, i) => (
                  <div key={i} className={`text-center p-4 ${s.bg} border ${s.border} rounded-xl`}>
                    {s.icon}
                    <p className="mt-2 font-semibold text-gray-900 dark:text-white text-xs">{s.label}</p>
                    <p className="font-black text-xl text-gray-900 dark:text-white">{s.value}</p>
                  </div>
                ))}
              </div>

              {/* Star rating breakdown */}
              <div className="space-y-2 mb-5">
                {[
                  { stars: "5★", pct: 62, color: "bg-green-500" },
                  { stars: "4★", pct: 18, color: "bg-green-300" },
                  { stars: "3★", pct: 9, color: "bg-yellow-400" },
                  { stars: "2★", pct: 6, color: "bg-orange-400" },
                  { stars: "1★", pct: 5, color: "bg-red-500" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 w-6">{row.stars}</span>
                    <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                      <div className={`${row.color} h-2 rounded-full`} style={{ width: `${row.pct}%` }} />
                    </div>
                    <span className="text-xs text-gray-500 w-8">{row.pct}%</span>
                  </div>
                ))}
              </div>

              {/* Top complaint highlight */}
              <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-red-700 dark:text-red-400 mb-1">Top Complaint — 23 mentions</p>
                    <p className="text-xs text-gray-700 dark:text-gray-300">"Packaging damaged during delivery" — fix to improve rating</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl px-4 py-2 shadow-xl hidden lg:block">
                <p className="text-white font-bold text-sm">AI-Powered</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 2: WHY SELLERS MISS KEY INSIGHTS ───────────────────────── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Why Sellers Miss Key Insights
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-purple-400 hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4 text-white shadow-md group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm leading-snug">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Stat callout */}
          <div className="mt-12 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-400 dark:border-purple-600 rounded-3xl p-8 text-center shadow-lg">
            <AlertCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              A 1-star rating drop on Amazon India can cost you{" "}
              <span className="text-purple-600">20–40% of organic traffic</span> overnight.
            </p>
            <p className="text-gray-600 dark:text-gray-400">Most sellers see the rating fall — but never find out which complaint caused it.</p>
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 3: BUILT FOR SMART REVIEW INTELLIGENCE ─────────────────── */}
      <section id="feature-depth" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Built for Smart Review Intelligence
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Three capabilities that work together — so you always know what customers are saying,
              which complaints matter most, and when to act.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                feature: "Real-Time Sentiment Analysis",
                description:
                  "AI reads every new review the moment it appears and updates your sentiment score — so negative trends surface in hours, not weeks.",
                benefit: "Identify negative trends immediately",
                icon: <Eye className="w-8 h-8" />,
                color: "from-purple-600 to-pink-600",
              },
              {
                feature: "Customer Highlight Extraction",
                description:
                  "AI clusters thousands of reviews into the top 5 issues customers mention most — in Hindi and English — with verbatim quotes and frequency counts.",
                benefit: "See key points at a glance",
                icon: <Sparkles className="w-8 h-8" />,
                color: "from-indigo-500 to-purple-500",
              },
              {
                feature: "Automated WhatsApp Alerts",
                description:
                  "When a complaint theme crosses a threshold you set — say, 15 mentions in 7 days — you get a WhatsApp alert with the issue and recommended fix. Not an email. WhatsApp.",
                benefit: "Never miss critical feedback",
                icon: <Bell className="w-8 h-8" />,
                color: "from-red-500 to-pink-500",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-purple-400 hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.feature}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                <p className="text-purple-600 dark:text-purple-400 flex items-center gap-2 text-sm font-semibold">
                  <ArrowRight className="w-4 h-4" /> {item.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 4: WHY INDIAN SELLERS STRUGGLE ─────────────────────────── */}
      {/* Internal link: /use-cases/analyze-customer-reviews */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Why Indian Sellers Struggle to Act on Customer Feedback
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A 1-star review drop on Amazon India can cost you 20–40% of organic traffic overnight.
              Most sellers see the rating fall — but never find out which complaint caused it, because
              reading 800 reviews manually isn't a business strategy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {indiaPains.map((pain, i) => (
              <div
                key={i}
                className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-purple-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0 mt-1">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{pain.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{pain.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 5: SENTIMENT ANALYSIS FEATURE ROW ──────────────────────── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white">
                Know in Seconds If Customers Love or Hate Your Product — Across Every Review
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Insydz's AI-powered <strong>sentiment analysis</strong> reads every customer review
                on your Amazon India and Flipkart listings in real time. Positive, neutral, or
                negative — with a live score that updates the moment new reviews appear.
                No manual reading. No sampling.
              </p>
              <ul className="space-y-3">
                {[
                  "Live sentiment score — updated with every new review",
                  "Separate scores per product, per marketplace",
                  "Trend graph — see if sentiment is improving or declining",
                  "Alert when negative sentiment crosses your threshold",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                See full use case:{" "}
                <a href="/use-cases/analyze-customer-reviews" className="text-purple-600 underline">
                  review analysis for Amazon India
                </a>
              </p>
            </div>

            {/* Review Intelligence Widget */}
            <div className="bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-700 rounded-3xl p-8 shadow-xl">
              <h3 className="font-bold text-gray-900 dark:text-white mb-6">Review Intelligence</h3>
              <div className="space-y-3 mb-6">
                {[
                  { stars: "5★", pct: 62, color: "bg-green-500", label: "Excellent" },
                  { stars: "4★", pct: 18, color: "bg-green-300", label: "Good" },
                  { stars: "3★", pct: 9, color: "bg-yellow-400", label: "Average" },
                  { stars: "2★", pct: 6, color: "bg-orange-400", label: "Poor" },
                  { stars: "1★", pct: 5, color: "bg-red-500", label: "Critical" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300 w-8">{row.stars}</span>
                    <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full h-3">
                      <div className={`${row.color} h-3 rounded-full transition-all`} style={{ width: `${row.pct}%` }} />
                    </div>
                    <span className="text-sm text-gray-500 w-8">{row.pct}%</span>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-400 rounded-xl p-4">
                <p className="text-xs font-bold text-red-700 dark:text-red-400 mb-1">🚨 Top Complaint — 23 mentions</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">"Packaging damaged during delivery" — fix to improve rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 6: AI REVIEW CLUSTERING FEATURE ROW ────────────────────── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Complaint Cluster Widget — Mixer Grinder example */}
            <div className="bg-gray-900 dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
              <h3 className="font-bold text-white mb-6">Complaint Clusters — Mixer Grinder</h3>
              <div className="space-y-4">
                {[
                  {
                    cluster: "Packaging",
                    freq: "43 mentions",
                    impact: "−0.4★",
                    example: '"Daibba tuta hua tha" / "Box damaged on arrival, product scratched"',
                    color: "border-red-500 bg-red-900/30",
                    badge: "bg-red-500",
                    label: "Fix First",
                  },
                  {
                    cluster: "Motor Noise",
                    freq: "27 mentions",
                    impact: "−0.2★",
                    example: '"Bahut shor karta hai" / "Very noisy after 2 months of use"',
                    color: "border-yellow-500 bg-yellow-900/20",
                    badge: "bg-yellow-500",
                    label: "Monitor",
                  },
                  {
                    cluster: "Value for Money",
                    freq: "61 mentions",
                    impact: "+0.3★",
                    example: '"Paise vasool" / "Best value for money in this category"',
                    color: "border-green-500 bg-green-900/20",
                    badge: "bg-green-500",
                    label: "Highlight",
                  },
                ].map((row, i) => (
                  <div key={i} className={`border-2 ${row.color} rounded-xl p-4`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold text-white ${row.badge} px-2 py-0.5 rounded-full`}>{row.label}</span>
                        <span className="text-white font-semibold text-sm">{row.cluster}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400">{row.freq}</p>
                        <p className="text-xs font-bold text-gray-300">{row.impact}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs italic">{row.example}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-purple-900/40 border border-purple-500 rounded-xl p-4">
                <p className="text-purple-300 text-xs font-semibold">
                  💡 AI: Fix packaging first — 43 complaints, highest rating impact. Estimated rating recovery: +0.4★ over 60 days.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white">
                Find the 3 Complaints Costing You 1-Star Reviews — Without Reading a Single Review
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Most sellers read reviews one at a time. Insydz reads all of them at once and groups
                similar complaints into clusters — ranked by how often they appear and how much
                they're hurting your rating. Fix the top cluster first. Watch the star rating recover.
              </p>
              <ul className="space-y-3">
                {[
                  "AI clusters complaints and praise into named themes",
                  "Each cluster shows frequency, sentiment impact, and verbatim examples",
                  "Clusters in Hindi and Hinglish — accurately, not approximated",
                  "Competitor comparison — see what their customers complain about too",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-full shadow-xl group"
              >
                👉 See Your Complaint Clusters Free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* MID-PAGE CTA BANNER */}
      <section className="py-12 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-2">Try all features free — no credit card required.</h2>
          <p className="text-purple-100 mb-6">Start free and experience real insights on your own products.</p>
          <Button
            onClick={handleGetStarted}
            size="lg"
            className="bg-white text-purple-700 hover:bg-purple-50 font-bold px-10 py-5 rounded-full shadow-2xl"
          >
            🚀 Start Free Review Analysis
          </Button>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 7: AUTOMATED REVIEW ALERTS ─────────────────────────────── */}
      {/* Internal link: /features/whatsapp-alerts */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white">
                Get Alerted When Customer Feedback Hits a Danger Level — Before It Tanks Your Rating
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Set thresholds for what matters: a complaint mentioned more than 10 times, negative
                sentiment climbing above 15%, or your star rating dropping below 4.2. The moment it
                happens, Insydz sends a{" "}
                <a href="/features/whatsapp-alerts" className="text-purple-600 underline">WhatsApp review alert</a>{" "}
                — with the specific complaint theme and a suggested action.
              </p>
              <ul className="space-y-3">
                {[
                  "WhatsApp alert when negative complaint count spikes",
                  "Alert includes the top complaint text and frequency",
                  "Suggested action: listing fix, packaging change, customer response",
                  "Covers Amazon India and Flipkart simultaneously",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Bell className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp alert mockups */}
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-400 rounded-2xl p-5 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wide">Review Alert</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Insydz:</strong> 23 reviews mention packaging damage on Mixer Grinder.
                  Sentiment −12% this week. Suggested fix: reinforce packaging with double-wall
                  box before next shipment.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-400 rounded-2xl p-5 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-bold text-purple-600 uppercase tracking-wide">Rating Alert</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Your rating dropped 4.3 → 4.1 in 5 days. Root cause: packaging cluster
                  (43 mentions). Act now to stop further decline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 8: REAL SELLER SCENARIO — KAVITA ───────────────────────── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
              What Most Review Analytics Tools Don't Tell You
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Most <strong>product review analytics software</strong> counts reviews. Insydz reads them
              — in Hindi and English — and tells you exactly which fix will recover your rating the fastest.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden shadow-xl mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
              <h3 className="text-white font-bold text-lg">
                Kavita's Mixer Grinder — The Complaint That Was Hiding in Hindi
              </h3>
              <p className="text-purple-200 text-sm">Kitchen Appliances, Amazon India + Flipkart</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="px-5 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase">Scenario</th>
                    <th className="px-5 py-3 text-center text-xs font-bold text-red-600 uppercase">Without Insydz</th>
                    <th className="px-5 py-3 text-center text-xs font-bold text-green-600 uppercase">With Insydz</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scenario: "Situation", without: "Rating dropped 4.4★ → 3.9★ over 6 weeks. Sales down 35%.", with: "Same product, same situation" },
                    { scenario: "What she saw", without: "Read 20 reviews manually — found motor noise complaints", with: "AI clustered 43 Hindi packaging complaints immediately" },
                    { scenario: "Action taken", without: "Spent ₹35,000 sourcing quieter motor variant", with: "Changed to double-wall packaging — ₹18/unit extra" },
                    { scenario: "Rating result", without: "Stayed at 3.9★ — wrong problem fixed", with: "Recovered to 4.3★ within 60 days" },
                    { scenario: "Complaint volume", without: "Packaging complaints continued at 43/month", with: "Dropped to 3/month within 60 days" },
                    { scenario: "Revenue outcome", without: "Sales remained 35% below peak", with: "₹2.8L additional revenue in Q1" },
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
                      <td className="px-5 py-3 text-sm font-medium text-gray-900 dark:text-white">{row.scenario}</td>
                      <td className="px-5 py-3 text-center">
                        <div className="flex items-start justify-center gap-1">
                          <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-600 dark:text-gray-400 text-left">{row.without}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3 text-center bg-green-50 dark:bg-green-900/10">
                        <div className="flex items-start justify-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-900 dark:text-white font-medium text-left">{row.with}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ROI Callout */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-400 rounded-3xl p-8 text-center">
            <p className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Kavita pays ₹1,999/month for Insydz. Packaging fix cost ₹18/unit (₹18,000 on 1,000 units).
              The 0.4-star recovery and ranking improvement returned ₹2.8L in Q1 revenue — a{" "}
              <span className="text-purple-600">140x return</span> on the cost of the fix.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm italic">
              "She fixed the wrong thing for 6 weeks. The real complaint was written in Hindi — and every review analytics tool she'd tried had silently skipped it."
            </p>
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 9: INDIA-FIRST ADVANTAGE ───────────────────────────────── */}
      {/* Internal links: /solutions/flipkart-sellers, /use-cases/analyze-customer-reviews */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
              How Insydz Review Analytics Is Built Differently
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Most <strong>online review monitoring platforms</strong> were built for English-language
              markets. Insydz was built for India — where most product feedback isn't in English, and
              where the platforms your customers use aren't covered by global tools.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {indiaFirstFeatures.map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-purple-400 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-black text-sm mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">{item.feature}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{item.meaning}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 dark:bg-gray-800 rounded-3xl p-8 text-center">
            <p className="text-gray-300 text-lg">
              <span className="text-purple-400 font-bold">What most Amazon review analyzer tools don't tell you:</span>{" "}
              Review volume is not the metric to optimize. Rating velocity — how quickly sentiment is
              shifting — is what determines your ranking position. Insydz tracks both, and alerts you on
              the leading indicator before the trailing one (your star rating) takes the hit.
            </p>
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 10: TESTIMONIALS ────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Indian Sellers Who Fixed Products They Didn't Know Were Broken
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-purple-400 hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed italic mb-4">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">{t.name}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 11: FAQ — Schema-optimised ─────────────────────────────── */}
      {/* FAQPage schema exported at top of file */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Review Analytics — FAQs
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Each answer leads with a direct response for Google Featured Snippet and AI Overview extraction.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-purple-400 transition-all"
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  onClick={() => toggleFaq(i)}
                >
                  <span className="font-bold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-purple-600 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-700 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 13: FINAL CTA — ICP-Segmented ──────────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              Stop Guessing Customer Feedback.
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Act Before Ratings Drop.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icp: "New Seller",
                headline: "Just starting — understand your first reviews",
                cta: "Start Free →",
                action: handleGetStarted,
                style: "from-purple-600 to-pink-600",
              },
              {
                icp: "Growing Seller",
                headline: "Improve ratings and protect ranking",
                cta: "Try Growth Plan →",
                action: () => setLocation("/pricing"),
                style: "from-pink-600 to-rose-500",
              },
              {
                icp: "Agency",
                headline: "Manage review intelligence for all clients",
                cta: "Book Demo →",
                action: handleGetStarted,
                style: "from-indigo-600 to-purple-600",
              },
            ].map((card, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center hover:shadow-xl transition-all">
                <div className={`inline-flex text-xs font-bold text-white bg-gradient-to-r ${card.style} px-3 py-1 rounded-full mb-4`}>
                  {card.icp}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-5 leading-relaxed">{card.headline}</p>
                <Button
                  onClick={card.action}
                  className={`w-full bg-gradient-to-r ${card.style} text-white font-bold rounded-full`}
                >
                  {card.cta}
                </Button>
              </div>
            ))}
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center gap-6">
            {["No credit card required", "Setup in 2 minutes", "Cancel anytime"].map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t-2 border-purple-300 dark:border-purple-700 p-4 shadow-2xl z-40">
        <Button
          onClick={handleGetStarted}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 rounded-full shadow-xl"
        >
          👉 Start Free Review Analysis
        </Button>
      </div>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer className="bg-[#0a0f1e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-14">
            {/* Brand */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="Insydz Logo" className="w-10 h-10 rounded-xl object-contain" />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Insydz</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                AI-powered ecommerce analytics solution for Indian marketplace sellers.
              </p>
              <button onClick={() => setLocation('/signup')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                Start Free →
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

            {/* Solutions */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Solutions</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Amazon Sellers', route: '/solutions/amazon-sellers' },
                  { label: 'Flipkart Sellers', route: '/solutions/flipkart-sellers' },
                  { label: 'Agencies', route: '/solutions/ecommerce-agencies' },
                  { label: 'Brand Managers', route: '/solutions/brand-managers' },
                ].map((item, i) => (
                  <li key={i}>
                    <button onClick={() => setLocation(item.route)} className="text-sm text-gray-400 hover:text-white transition-colors text-left">{item.label}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Product</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Features', route: '/features/competitor-price-tracking-feature' },
                  { label: 'Pricing', route: '/pricing' },
                  { label: 'Festive Trends', route: '/features/festive-trend-feature' },
                  { label: 'Compare', route: '/compare/insydzvshelium' },
                ].map((item, i) => (
                  <li key={i}>
                    <button onClick={() => setLocation(item.route)} className="text-sm text-gray-400 hover:text-white transition-colors text-left">{item.label}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Resources</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Blog', route: '/resources/expert-blog' },
                  { label: 'E-commerce Guides', route: '/resources/guides' },
                  { label: 'Video Tutorials', route: '/resources/videos' },
                  { label: 'Case Studies', route: '/resources/case-studies' },
                  { label: 'Free Tools', route: '/free-tools/free-amazon-product-analyzer' },
                ].map((item, i) => (
                  <li key={i}>
                    <button onClick={() => setLocation(item.route)} className="text-sm text-gray-400 hover:text-white transition-colors text-left">{item.label}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Company</h4>
              <ul className="space-y-3">
                {[
                  { label: 'About', action: () => scrollToSection('About') },
                  { label: 'Our Vision', action: () => setLocation('/about/our-vision') },
                  { label: 'Careers', action: () => setLocation('/about/careers') },
                  { label: 'Contact', action: () => setLocation('/about/contact-us') },
                ].map((item, i) => (
                  <li key={i}>
                    <button onClick={item.action} className="text-sm text-gray-400 hover:text-white transition-colors text-left">{item.label}</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm">
                © 2025 <span className="text-purple-400 font-semibold">Insydz</span>. All rights reserved. Designed & Developed in India 🇮🇳
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

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
}

