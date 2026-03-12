// import { useState, useEffect } from "react";
// import { useLocation } from "wouter";
// import { 
//   TrendingDown, ArrowRight, CheckCircle2, Target, Zap, 
//   Bell, TrendingUp, MessageCircle, Search, Package, 
//   BarChart3, ChevronRight, Star, AlertCircle, Clock,
//   ShoppingBag, IndianRupee, Smartphone, X, Check,
//   DollarSign, TrendingDownIcon, Eye, Sparkles,
//   ChevronDown, Filter, Lightbulb, Award
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function FindProfitableProductsPage() {
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

//   const faqs = [
//     {
//       question: "How does Insydz find profitable products?",
//       answer: "Insydz analyzes sales data, competition levels, pricing trends, and demand patterns across Amazon & Flipkart to identify products with high profit potential and low competition."
//     },
//     {
//       question: "Can I find products for both Amazon and Flipkart?",
//       answer: "Yes! Insydz covers both Amazon India and Flipkart, helping you discover profitable opportunities across both major Indian marketplaces."
//     },
//     {
//       question: "What makes a product 'profitable'?",
//       answer: "We look at demand (search volume), competition (number of sellers), margins (price vs cost), and sales velocity to identify products that balance profitability with market opportunity."
//     },
//     {
//       question: "Do I need product research experience?",
//       answer: "No. Insydz simplifies product research with AI-powered recommendations and clear metrics. You don't need to be an expert to find winning products."
//     },
//     {
//       question: "How often is product data updated?",
//       answer: "Product opportunity data is refreshed daily, with real-time updates on pricing and competition to ensure you're always seeing current market conditions."
//     },
//     {
//       question: "Can I save products I'm interested in?",
//       answer: "Yes. You can save products to your watchlist, add notes, and track them over time to see if they remain profitable opportunities."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white/95 backdrop-blur-xl border-b border-blue-200 shadow-lg"
//             : "bg-white/80 backdrop-blur-md border-b border-blue-100"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div 
//               className="flex items-center space-x-3 cursor-pointer group"
//               onClick={() => setLocation("/")}
//             >
//               <div className="relative">
//                 <img 
//                   src="/logo.png" 
//                   alt="Insydz Logo" 
//                   className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 object-contain"
//                 />
//                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white animate-pulse"></div>
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                 Insydz
//               </span>
//             </div>

//             <div className="flex items-center gap-4">
//               <Button
//                 onClick={() => setLocation("/")}
//                 variant="ghost"
//                 className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//               >
//                 ← Back to Home
//               </Button>
//               <Button
//                 onClick={handleGetStarted}
//                 className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all"
//               >
//                 Start Free
//               </Button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
//           <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 rounded-full px-4 py-2">
//                 <Target className="w-4 h-4 text-blue-600" />
//                 <span className="text-sm font-medium text-blue-700">AI-Powered Product Discovery</span>
//               </div>

//               <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
//                 Find Profitable Products
//                 <br />
//                 <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
//                   Before Your Competitors Do
//                 </span>
//               </h1>

//               <p className="text-xl text-gray-700 leading-relaxed">
//                 Insydz uncovers high-demand, low-competition products on Amazon & Flipkart — 
//                 <span className="text-blue-700 font-semibold"> with AI-powered insights that show you exactly what to sell next.</span>
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button
//                   onClick={handleGetStarted}
//                   size="lg"
//                   className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all group"
//                 >
//                   👉 Discover Profitable Products Free
//                   <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </div>

//               <div className="flex flex-wrap items-center gap-6 pt-4">
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>Amazon & Flipkart data 🇮🇳</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>AI profit predictions</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>Real-time opportunity alerts</span>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="relative bg-white border-2 border-blue-200 rounded-3xl p-8 shadow-2xl">
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between pb-4 border-b border-gray-200">
//                     <h3 className="font-bold text-gray-900">Top Opportunities Today</h3>
//                     <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">12 New</span>
//                   </div>

//                   {[
//                     { name: "Smart Kitchen Gadgets", demand: "High", competition: "Low", profit: "₹450", trend: "up" },
//                     { name: "Eco-Friendly Home Decor", demand: "Medium", competition: "Low", profit: "₹380", trend: "up" },
//                     { name: "Tech Accessories", demand: "High", competition: "Medium", profit: "₹290", trend: "stable" }
//                   ].map((product, i) => (
//                     <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
//                       <div className="flex items-start justify-between mb-3">
//                         <div>
//                           <h4 className="font-bold text-gray-900 text-sm">{product.name}</h4>
//                           <div className="flex items-center gap-2 mt-1">
//                             <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Demand: {product.demand}</span>
//                             <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Competition: {product.competition}</span>
//                           </div>
//                         </div>
//                         {product.trend === "up" ? (
//                           <TrendingUp className="w-5 h-5 text-green-600" />
//                         ) : (
//                           <Award className="w-5 h-5 text-blue-600" />
//                         )}
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <span className="text-xs text-gray-600">Avg. Profit/Unit:</span>
//                         <span className="text-lg font-bold text-blue-600">{product.profit}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl px-4 py-2 shadow-xl">
//                   <p className="text-white font-bold text-sm">AI Powered</p>
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
//               Why Most Sellers Pick
//               <br />
//               <span className="text-red-600">The Wrong Products</span>
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {[
//               { icon: <Eye className="w-8 h-8" />, title: "Guessing based on gut feeling, not data", color: "from-red-500 to-orange-500" },
//               { icon: <TrendingDown className="w-8 h-8" />, title: "Entering oversaturated markets too late", color: "from-orange-500 to-yellow-500" },
//               { icon: <DollarSign className="w-8 h-8" />, title: "Missing hidden profit opportunities", color: "from-blue-500 to-indigo-500" },
//               { icon: <Clock className="w-8 h-8" />, title: "Wasting weeks on manual research", color: "from-indigo-500 to-purple-500" }
//             ].map((pain, i) => (
//               <div key={i} className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all group">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
//                   {pain.icon}
//                 </div>
//                 <p className="text-gray-700 font-medium leading-relaxed">{pain.title}</p>
//               </div>
//             ))}
//           </div>

//           <div className="bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-400 rounded-3xl p-8 text-center shadow-lg">
//             <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
//             <p className="text-2xl font-bold text-gray-900 mb-2">
//               <span className="text-red-600">67% of new sellers</span> fail in their first year
//             </p>
//             <p className="text-gray-700 text-lg">
//               because they launch products without proper market research.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section id="how-it-works" className="py-20 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//               How Product Discovery Works
//               <br />
//               <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">with Insydz</span>
//             </h2>
//           </div>

//           <div className="relative">
//             <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 -translate-y-1/2"></div>

//             <div className="grid lg:grid-cols-3 gap-12 relative">
//               <div className="relative">
//                 <div className="bg-white border-2 border-blue-300 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
//                   <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
//                     1
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">Set Your Criteria</h3>
//                   <p className="text-gray-700 leading-relaxed mb-6">
//                     Tell us your budget, target margins, and preferred categories. AI filters millions of products instantly.
//                   </p>
//                   <div className="bg-blue-100 rounded-2xl p-4">
//                     <Filter className="w-12 h-12 text-blue-600 mx-auto" />
//                   </div>
//                 </div>
//               </div>

//               <div className="relative">
//                 <div className="bg-white border-2 border-blue-300 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
//                   <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
//                     2
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Analyzes Market Data</h3>
//                   <p className="text-gray-700 leading-relaxed mb-6">
//                     We analyze demand, competition, pricing trends, and profitability across Amazon & Flipkart.
//                   </p>
//                   <div className="bg-purple-100 rounded-2xl p-4">
//                     <BarChart3 className="w-12 h-12 text-purple-600 mx-auto animate-pulse" />
//                   </div>
//                 </div>
//               </div>

//               <div className="relative">
//                 <div className="bg-white border-2 border-blue-300 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
//                   <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
//                     3
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Winning Products</h3>
//                   <div className="space-y-3 text-left">
//                     <div className="flex items-start gap-2 bg-green-50 border border-green-300 rounded-lg p-3">
//                       <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
//                       <span className="text-sm text-gray-800">"High demand, low competition product found"</span>
//                     </div>
//                     <div className="flex items-start gap-2 bg-blue-50 border border-blue-300 rounded-lg p-3">
//                       <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
//                       <span className="text-sm text-gray-800">"Estimated profit: ₹450/unit"</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="text-center mt-12">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all group"
//             >
//               👉 Find Your First Profitable Product Free
//               <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* What You Get Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               What You Discover with Product Research
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               { icon: <TrendingUp className="w-8 h-8" />, title: "Trending products before saturation", color: "from-green-500 to-emerald-500" },
//               { icon: <DollarSign className="w-8 h-8" />, title: "Profit margin estimates per unit", color: "from-blue-500 to-cyan-500" },
//               { icon: <Target className="w-8 h-8" />, title: "Competition analysis & gaps", color: "from-purple-500 to-pink-500" },
//               { icon: <Search className="w-8 h-8" />, title: "Search volume & demand data", color: "from-orange-500 to-red-500" },
//               { icon: <Award className="w-8 h-8" />, title: "Best-selling categories", color: "from-indigo-500 to-purple-500" },
//               { icon: <Sparkles className="w-8 h-8" />, title: "AI opportunity score (1-100)", color: "from-yellow-500 to-orange-500" }
//             ].map((benefit, i) => (
//               <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all">
//                 <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 text-white shadow-md`}>
//                   {benefit.icon}
//                 </div>
//                 <p className="text-gray-900 font-semibold leading-relaxed">{benefit.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Product Research – FAQs
//             </h2>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, i) => (
//               <div key={i} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 transition-all">
//                 <button
//                   onClick={() => toggleFaq(i)}
//                   className="w-full px-6 py-4 flex items-center justify-between text-left"
//                 >
//                   <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
//                   <ChevronDown className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
//                 </button>
//                 {openFaq === i && (
//                   <div className="px-6 pb-4 text-gray-700 leading-relaxed">
//                     {faq.answer}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//             Stop Guessing.
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//               Start Selling Winners.
//             </span>
//           </h2>
//           <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
//             Join sellers who find profitable products with AI-powered research, not luck.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
//             >
//               👉 Discover Profitable Products Free
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Sticky Mobile CTA */}
//       <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-blue-300 p-4 shadow-2xl z-40">
//         <Button
//           onClick={handleGetStarted}
//           className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 rounded-full shadow-xl"
//         >
//           👉 Find Profitable Products Free
//         </Button>
//       </div>

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
//                 <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
//                   Insydz
//                 </span>
//               </div>
//               <p className="text-gray-400 text-sm">
//                 AI-powered product discovery for smart sellers
//               </p>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4 text-white">Quick Links</h4>
//               <div className="space-y-2">
//                 <button onClick={() => setLocation("/")} className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
//                   Home
//                 </button>
//                 <button onClick={() => setLocation("/pricing")} className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
//                   Pricing
//                 </button>
//                 <button onClick={handleGetStarted} className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
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



// import { useState, useEffect, useRef } from "react";
// import { useLocation } from "wouter";
// import { 
//   TrendingDown, ArrowRight, CheckCircle2, Target, Zap, 
//   Bell, TrendingUp, MessageCircle, Search, Package, 
//   BarChart3, ChevronRight, Star, AlertCircle, Clock,
//   ShoppingBag, IndianRupee, Smartphone, X, Check,
//   DollarSign, TrendingDownIcon, Eye, Sparkles,
//   ChevronDown, Filter, Lightbulb, Award, Menu, Sun, Moon, 
//   ArrowLeft, BookOpen, Video, FileText, Store, Briefcase, 
//   Users, Code, Globe, Trophy,
//   Flame,
//   Presentation
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
//     { name: "Free Amazon Product Analyzer", icon: <BarChart3 className="w-4 h-4" /> , route: "/free-tools/free-amazon-product-analyzer" },
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

// export default function FindProfitableProductsPage() {
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

//   const faqs = [
//     {
//       question: "How does Insydz find profitable products?",
//       answer: "Insydz analyzes sales data, competition levels, pricing trends, and demand patterns across Amazon & Flipkart to identify products with high profit potential and low competition."
//     },
//     {
//       question: "Can I find products for both Amazon and Flipkart?",
//       answer: "Yes! Insydz covers both Amazon India and Flipkart, helping you discover profitable opportunities across both major Indian marketplaces."
//     },
//     {
//       question: "What makes a product 'profitable'?",
//       answer: "We look at demand (search volume), competition (number of sellers), margins (price vs cost), and sales velocity to identify products that balance profitability with market opportunity."
//     },
//     {
//       question: "Do I need product research experience?",
//       answer: "No. Insydz simplifies product research with AI-powered recommendations and clear metrics. You don't need to be an expert to find winning products."
//     },
//     {
//       question: "How often is product data updated?",
//       answer: "Product opportunity data is refreshed daily, with real-time updates on pricing and competition to ensure you're always seeing current market conditions."
//     },
//     {
//       question: "Can I save products I'm interested in?",
//       answer: "Yes. You can save products to your watchlist, add notes, and track them over time to see if they remain profitable opportunities."
//     }
//   ];

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
//                   className="px-3 py-2 text-sm text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all flex items-center gap-1"
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
//                         className="w-full px-4 py-3 text-left hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center gap-3 group"
//                       >
//                         <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
//                           {item.icon}
//                         </span>
//                         <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
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
//                   className="flex items-center justify-between w-full px-4 py-2 text-blue-600 dark:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-semibold"
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
//                         className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg"
//                       >
//                         {item.icon}
//                         {item.name}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               {/* Mobile Features */}
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
//               {/* Mobile Free Tools */}
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
//       <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
//           <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 rounded-full px-4 py-2">
//                 <Target className="w-4 h-4 text-blue-600" />
//                 <span className="text-sm font-medium text-blue-700">AI-Powered Product Discovery</span>
//               </div>

//               <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
//                 Find Profitable Products
//                 <br />
//                 <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
//                   Before Your Competitors Do
//                 </span>
//               </h1>

//               <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
//                 Insydz uncovers high-demand, low-competition products on Amazon & Flipkart — 
//                 <span className="text-blue-700 dark:text-blue-400 font-semibold"> with AI-powered insights that show you exactly what to sell next.</span>
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button
//                   onClick={handleGetStarted}
//                   size="lg"
//                   className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all group"
//                 >
//                   👉 Discover Profitable Products Free
//                   <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </div>

//               <div className="flex flex-wrap items-center gap-6 pt-4">
//                 <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>Amazon & Flipkart data 🇮🇳</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>AI profit predictions</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>Real-time opportunity alerts</span>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="relative bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-blue-800 rounded-3xl p-8 shadow-2xl">
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
//                     <h3 className="font-bold text-gray-900 dark:text-white">Top Opportunities Today</h3>
//                     <span className="text-xs bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1 rounded-full font-semibold">12 New</span>
//                   </div>

//                   {[
//                     { name: "Smart Kitchen Gadgets", demand: "High", competition: "Low", profit: "₹450", trend: "up" },
//                     { name: "Eco-Friendly Home Decor", demand: "Medium", competition: "Low", profit: "₹380", trend: "up" },
//                     { name: "Tech Accessories", demand: "High", competition: "Medium", profit: "₹290", trend: "stable" }
//                   ].map((product, i) => (
//                     <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-4">
//                       <div className="flex items-start justify-between mb-3">
//                         <div>
//                           <h4 className="font-bold text-gray-900 dark:text-white text-sm">{product.name}</h4>
//                           <div className="flex items-center gap-2 mt-1">
//                             <span className="text-xs bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-2 py-0.5 rounded">Demand: {product.demand}</span>
//                             <span className="text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded">Competition: {product.competition}</span>
//                           </div>
//                         </div>
//                         {product.trend === "up" ? (
//                           <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
//                         ) : (
//                           <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
//                         )}
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <span className="text-xs text-gray-600 dark:text-gray-400">Avg. Profit/Unit:</span>
//                         <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{product.profit}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl px-4 py-2 shadow-xl">
//                   <p className="text-white font-bold text-sm">AI Powered</p>
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
//               Why Most Sellers Pick
//               <br />
//               <span className="text-red-600 dark:text-red-500">The Wrong Products</span>
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {[
//               { icon: <Eye className="w-8 h-8" />, title: "Guessing based on gut feeling, not data", color: "from-red-500 to-orange-500" },
//               { icon: <TrendingDown className="w-8 h-8" />, title: "Entering oversaturated markets too late", color: "from-orange-500 to-yellow-500" },
//               { icon: <DollarSign className="w-8 h-8" />, title: "Missing hidden profit opportunities", color: "from-blue-500 to-indigo-500" },
//               { icon: <Clock className="w-8 h-8" />, title: "Wasting weeks on manual research", color: "from-indigo-500 to-purple-500" }
//             ].map((pain, i) => (
//               <div key={i} className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all group">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
//                   {pain.icon}
//                 </div>
//                 <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{pain.title}</p>
//               </div>
//             ))}
//           </div>

//           <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-400 dark:border-red-600 rounded-3xl p-8 text-center shadow-lg">
//             <AlertCircle className="w-12 h-12 text-red-600 dark:text-red-500 mx-auto mb-4" />
//             <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
//               <span className="text-red-600 dark:text-red-500">67% of new sellers</span> fail in their first year
//             </p>
//             <p className="text-gray-700 dark:text-gray-300 text-lg">
//               because they launch products without proper market research.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section id="how-it-works" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
//               How Product Discovery Works
//               <br />
//               <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">with Insydz</span>
//             </h2>
//           </div>

//           <div className="relative">
//             <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 -translate-y-1/2"></div>

//             <div className="grid lg:grid-cols-3 gap-12 relative">
//               <div className="relative">
//                 <div className="bg-white dark:bg-gray-800 border-2 border-blue-300 dark:border-blue-700 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
//                   <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
//                     1
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Set Your Criteria</h3>
//                   <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
//                     Tell us your budget, target margins, and preferred categories. AI filters millions of products instantly.
//                   </p>
//                   <div className="bg-blue-100 dark:bg-blue-900/20 rounded-2xl p-4">
//                     <Filter className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto" />
//                   </div>
//                 </div>
//               </div>

//               <div className="relative">
//                 <div className="bg-white dark:bg-gray-800 border-2 border-blue-300 dark:border-blue-700 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
//                   <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
//                     2
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">AI Analyzes Market Data</h3>
//                   <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
//                     We analyze demand, competition, pricing trends, and profitability across Amazon & Flipkart.
//                   </p>
//                   <div className="bg-purple-100 dark:bg-purple-900/20 rounded-2xl p-4">
//                     <BarChart3 className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto animate-pulse" />
//                   </div>
//                 </div>
//               </div>

//               <div className="relative">
//                 <div className="bg-white dark:bg-gray-800 border-2 border-blue-300 dark:border-blue-700 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
//                   <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
//                     3
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Get Winning Products</h3>
//                   <div className="space-y-3 text-left">
//                     <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg p-3">
//                       <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
//                       <span className="text-sm text-gray-800 dark:text-gray-300">"High demand, low competition product found"</span>
//                     </div>
//                     <div className="flex items-start gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700 rounded-lg p-3">
//                       <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
//                       <span className="text-sm text-gray-800 dark:text-gray-300">"Estimated profit: ₹450/unit"</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="text-center mt-12">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all group"
//             >
//               👉 Find Your First Profitable Product Free
//               <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* What You Get Section */}
//       <section className="py-20 px-4 bg-white dark:bg-gray-950">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//               What You Discover with Product Research
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               { icon: <TrendingUp className="w-8 h-8" />, title: "Trending products before saturation", color: "from-green-500 to-emerald-500" },
//               { icon: <DollarSign className="w-8 h-8" />, title: "Profit margin estimates per unit", color: "from-blue-500 to-cyan-500" },
//               { icon: <Target className="w-8 h-8" />, title: "Competition analysis & gaps", color: "from-purple-500 to-pink-500" },
//               { icon: <Search className="w-8 h-8" />, title: "Search volume & demand data", color: "from-orange-500 to-red-500" },
//               { icon: <Award className="w-8 h-8" />, title: "Best-selling categories", color: "from-indigo-500 to-purple-500" },
//               { icon: <Sparkles className="w-8 h-8" />, title: "AI opportunity score (1-100)", color: "from-yellow-500 to-orange-500" }
//             ].map((benefit, i) => (
//               <div key={i} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all">
//                 <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 text-white shadow-md`}>
//                   {benefit.icon}
//                 </div>
//                 <p className="text-gray-900 dark:text-white font-semibold leading-relaxed">{benefit.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//               Product Research – FAQs
//             </h2>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, i) => (
//               <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-blue-400 transition-all">
//                 <button
//                   onClick={() => toggleFaq(i)}
//                   className="w-full px-6 py-4 flex items-center justify-between text-left"
//                 >
//                   <span className="font-bold text-gray-900 dark:text-white pr-4">{faq.question}</span>
//                   <ChevronDown className={`w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
//                 </button>
//                 {openFaq === i && (
//                   <div className="px-6 pb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
//                     {faq.answer}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-950">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
//             Stop Guessing.
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//               Start Selling Winners.
//             </span>
//           </h2>
//           <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
//             Join sellers who find profitable products with AI-powered research, not luck.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
//             >
//               👉 Discover Profitable Products Free
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Sticky Mobile CTA */}
//       <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t-2 border-blue-300 dark:border-blue-700 p-4 shadow-2xl z-40">
//         <Button
//           onClick={handleGetStarted}
//           className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 rounded-full shadow-xl"
//         >
//           👉 Find Profitable Products Free
//         </Button>
//       </div>

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
//                 <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
//                   Insydz
//                 </span>
//               </div>
//               <p className="text-gray-400 text-sm">
//                 AI-powered product discovery for smart sellers
//               </p>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4 text-white">Quick Links</h4>
//               <div className="space-y-2">
//                 <button onClick={() => setLocation("/")} className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
//                   Home
//                 </button>
//                 <button onClick={() => setLocation("/pricing")} className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
//                   Pricing
//                 </button>
//                 <button onClick={handleGetStarted} className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
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
  TrendingDown, ArrowRight, CheckCircle2, Target, Zap, 
  Bell, TrendingUp, MessageCircle, Search, Package, 
  BarChart3, ChevronRight, Star, AlertCircle, Clock,
  ShoppingBag, Smartphone, X, Check,
  DollarSign, Eye, Sparkles,
  ChevronDown, Filter, Lightbulb, Award, Menu, Sun, Moon, 
  ArrowLeft, BookOpen, Video, FileText, Store, Briefcase, 
  Users, Code, Globe, Trophy,
  Flame, Presentation, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from 'react-helmet-async';


// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────
const SCHEMAS = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Insydz Product Research Tool",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
    "description": "India's most powerful product profitability analysis software for Amazon and Flipkart sellers. Discover high-demand, low-competition products with real margin data in INR before you invest a single rupee in inventory.",
    "url": "https://insydz.com/use-cases/find-profitable-products"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://insydz.com" },
      { "@type": "ListItem", "position": 2, "name": "Use Cases", "item": "https://insydz.com/use-cases" },
      { "@type": "ListItem", "position": 3, "name": "Find Profitable Products", "item": "https://insydz.com/use-cases/find-profitable-products" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Find Profitable Products on Amazon India and Flipkart",
    "description": "From zero to validated product opportunity in under 10 minutes using Insydz's AI-powered product profitability analysis software.",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Set Your Criteria", "text": "Tell Insydz your budget, target margin, and preferred categories. AI filters millions of products across Amazon India and Flipkart instantly." },
      { "@type": "HowToStep", "position": 2, "name": "AI Analyses Market Data", "text": "Insydz analyses demand signals, competition density, pricing trends, profitability margins, and review gap opportunities — calibrated for Indian marketplace behaviour." },
      { "@type": "HowToStep", "position": 3, "name": "Get Winning Products", "text": "Plain-language results ranked by AI opportunity score: High demand, low competition product found / Estimated profit: ₹450/unit / Top sellers have 3.7 rating — gap to win." }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Insydz find profitable products on Amazon India and Flipkart?",
        "acceptedAnswer": { "@type": "Answer", "text": "Insydz analyses millions of products across Amazon.in and Flipkart in real time — combining demand signals, competition density, and profit margin estimates to generate an AI opportunity score from 1–100. Products with high demand, low competition, and healthy margins surface first." }
      },
      {
        "@type": "Question",
        "name": "Can I find profitable products for both Amazon India and Flipkart?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Insydz analyses product opportunities across both platforms simultaneously — comparing demand levels and competition density for the same product, so you know which marketplace has the better opportunity right now." }
      },
      {
        "@type": "Question",
        "name": "What makes a product 'profitable' according to Insydz?",
        "acceptedAnswer": { "@type": "Answer", "text": "Four factors: demand strength, competition gap (weak top sellers?), margin viability (does price support profit after fees?), and timing (growing or saturating category?). Products scoring well on all four get a high AI opportunity score." }
      },
      {
        "@type": "Question",
        "name": "Do I need product research experience to use Insydz?",
        "acceptedAnswer": { "@type": "Answer", "text": "No. Enter your budget, target margin, and preferred categories. The AI surfaces opportunities in plain language: 'High demand, low competition — estimated profit ₹450/unit.' No experience, spreadsheets, or specialist knowledge required." }
      },
      {
        "@type": "Question",
        "name": "How often is product opportunity data updated?",
        "acceptedAnswer": { "@type": "Answer", "text": "Continuously. Trending opportunities are flagged in real time. You can also set category alerts so you're notified when a new high-opportunity product appears — even when you're not actively using the dashboard." }
      },
      {
        "@type": "Question",
        "name": "Can I save products I'm interested in researching further?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Save any opportunity to your watchlist and track how demand, competition, and margin scores change over time — especially useful for validating seasonal trends before you commit to sourcing inventory for the Indian festive season." }
      }
    ]
  }
];

// ─── Navigation Menu Data ─────────────────────────────────────────────────────
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

// ─── Page Data ────────────────────────────────────────────────────────────────

const comparisonRows = [
  { feature: "Real demand on Amazon.in / Flipkart", manual: "⚠ Category browse only", insydz: "✓ Real search volume & sales velocity in INR" },
  { feature: "Competition quality", manual: "⚠ Count top sellers manually", insydz: "✓ Competition gap score, weak sellers flagged" },
  { feature: "Realistic profit margin", manual: "✗ Guesswork, no fee modelling", insydz: "✓ Profit/unit estimate including marketplace fees" },
  { feature: "Demand trend", manual: "✗ No trend data, only snapshot", insydz: "✓ Demand velocity over 30/60/90 days" },
  { feature: "Review gaps", manual: "✗ Would need to read 500+ reviews", insydz: "✓ AI review gap analysis — your differentiation brief" },
  { feature: "Research time", manual: "✗ 2–4 weeks", insydz: "✓ Under 10 minutes" },
];

const whatYouDiscover = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Trending Products Before Saturation",
    desc: "See which categories are gaining search velocity on Amazon India and Flipkart — so you can enter the market while competition is still low.",
    color: "from-green-500 to-emerald-500",
    link: "/features/demand-signals",
    linkLabel: "product demand analysis tool",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Profit Margin Estimates Per Unit",
    desc: "Insydz shows estimated profit per unit in INR — factoring in Amazon.in and Flipkart fees, typical sourcing costs, and current price ranges. Know your numbers before you place a purchase order.",
    color: "from-blue-500 to-cyan-500",
    link: "/features/margin-calculator",
    linkLabel: "product margin calculator",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Competition Analysis & Gaps",
    desc: "Insydz flags categories where top sellers have weak ratings (below 4.0), low review counts, or listing quality gaps. These are your launch advantage points.",
    color: "from-purple-500 to-pink-500",
    link: "/features/product-research",
    linkLabel: "ecommerce product research tool",
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Search Volume & Demand Data",
    desc: "Real demand signals from Indian marketplaces — including festive season demand spikes for Diwali, Navratri, and Republic Day sale events.",
    color: "from-orange-500 to-red-500",
    link: "/features/demand-signals",
    linkLabel: "product demand analysis tool",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Best-Selling Categories",
    desc: "See which categories generate the highest GMV on Amazon India and Flipkart right now — ranked by actual revenue performance.",
    color: "from-indigo-500 to-purple-500",
    link: "/features/product-research",
    linkLabel: "profitable product finder",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "AI Opportunity Score (1–100)",
    desc: "Every product opportunity gets a single AI score combining demand, competition, profitability, and timing. Higher score = stronger launch opportunity. No analysis paralysis — just a clear ranked list.",
    color: "from-yellow-500 to-orange-500",
    link: "/use-cases/find-profitable-products",
    linkLabel: "product opportunity finder",
  },
];

const roiWithout = [
  { label: "Initial inventory investment", value: "−₹3,00,000" },
  { label: "Market oversaturated — 40% dead inventory", value: "−₹1,20,000" },
  { label: "Ad spend to force visibility in competitive category", value: "−₹45,000" },
  { label: "Dead inventory carrying cost and storage fees", value: "−₹22,000" },
  { label: "Price drop required to clear stock (margin lost)", value: "−₹38,000" },
];

const roiWith = [
  { label: "Same budget — validated with demand data", value: "₹3,00,000 invested wisely" },
  { label: "Low-competition category — page 1 in 14 days", value: "+organic rank from week 2" },
  { label: "Differentiated product — 4.6★ from month 1", value: "+conversion advantage" },
  { label: "First-month sell-through (₹450 × 760 units)", value: "+₹3,42,000" },
  { label: "2× reorders placed — months 2–6", value: "+₹7,20,000" },
];

const faqs = [
  {
    id: "faq-1",
    q: "How does Insydz find profitable products on Amazon India and Flipkart?",
    a: "Insydz analyses millions of products across Amazon.in and Flipkart in real time — combining demand signals, competition density, and profit margin estimates to generate an AI opportunity score from 1–100. Products with high demand, low competition, and healthy margins surface first.",
  },
  {
    id: "faq-2",
    q: "Can I find profitable products for both Amazon India and Flipkart?",
    a: "Yes. Insydz analyses product opportunities across both platforms simultaneously — comparing demand levels and competition density for the same product, so you know which marketplace has the better opportunity right now.",
  },
  {
    id: "faq-3",
    q: "What makes a product 'profitable' according to Insydz?",
    a: "Four factors: demand strength, competition gap (weak top sellers?), margin viability (does price support profit after fees?), and timing (growing or saturating category?). Products scoring well on all four get a high AI opportunity score.",
  },
  {
    id: "faq-4",
    q: "Do I need product research experience to use Insydz?",
    a: "No. Enter your budget, target margin, and preferred categories. The AI surfaces opportunities in plain language: 'High demand, low competition — estimated profit ₹450/unit.' No experience, spreadsheets, or specialist knowledge required.",
  },
  {
    id: "faq-5",
    q: "How often is product opportunity data updated?",
    a: "Continuously. Trending opportunities are flagged in real time. You can also set category alerts so you're notified when a new high-opportunity product appears — even when you're not actively using the dashboard.",
  },
  {
    id: "faq-6",
    q: "Can I save products I'm interested in researching further?",
    a: "Yes. Save any opportunity to your watchlist and track how demand, competition, and margin scores change over time — especially useful for validating seasonal trends before you commit to sourcing inventory for the Indian festive season.",
  },
];

export default function FindProfitableProductsPage() {
  const [, setLocation] = useLocation();
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Inject JSON-LD schemas
  useEffect(() => {
    SCHEMAS.forEach((schema, i) => {
      const id = `insydz-profitable-schema-${i}`;
      if (document.getElementById(id)) return;
      const script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
    return () => {
      SCHEMAS.forEach((_, i) => {
        const el = document.getElementById(`insydz-profitable-schema-${i}`);
        if (el) el.remove();
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 20); };
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

  const handleGetStarted = () => { setLocation("/login"); };
  const toggleMobileMenu = (menuName: string) => {
    setMobileActiveMenu(mobileActiveMenu === menuName ? null : menuName);
  };
  const handleMenuItemClick = (item: MenuItemWithBadge) => {
    if (item.route) { setLocation(item.route); setActiveDropdown(null); setIsMenuOpen(false); }
  };
  const scrollToSection = (sectionId: string) => {
    setLocation("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      

      {/* ── NAVIGATION ────────────────────────────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg" : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <div className="flex items-center space-x-3">
              
              <div className="flex items-center space-x-1 group cursor-pointer" onClick={() => setLocation("/")}>
                <div className="relative">
                  <img src="/logo.png" alt="Insydz Logo" className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-3" ref={dropdownRef}>
              {/* Solutions */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown("Solutions")} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1">
                  Solutions <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "Solutions" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "Solutions" && (
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

              {/* Use Cases — highlighted blue */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown("Use Cases")} className="px-3 py-2 text-sm text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all flex items-center gap-1">
                  Use Cases <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "Use Cases" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "Use Cases" && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu["Use Cases"].map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">{item.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown("Features")} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1">
                  Features <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "Features" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "Features" && (
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

              <button onClick={() => setLocation("/pricing")} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all">Pricing</button>

              {/* Free Tools */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown("Free Tools")} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1">
                  Free Tools <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "Free Tools" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "Free Tools" && (
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

              {/* Compare */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown("Compare")} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1">
                  Compare <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "Compare" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "Compare" && (
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

              {/* Resources */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown("Resources")} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1">
                  Resources <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "Resources" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "Resources" && (
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

              {/* About */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown("About")} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1">
                  About <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "About" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "About" && (
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

              <Button onClick={() => setLocation("/login")} className="ml-2 text-sm bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">Login</Button>
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
              <button onClick={() => { setLocation("/"); setIsMenuOpen(false); }} className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>

              {(["Solutions", "Use Cases", "Features", "Free Tools", "Compare", "Resources", "About"] as (keyof NavigationMenu)[]).map((key) => (
                <div key={key}>
                  <button onClick={() => toggleMobileMenu(key)}
                    className={`flex items-center justify-between w-full px-4 py-2 rounded-lg font-medium ${
                      key === "Use Cases"
                        ? "text-blue-600 dark:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                    }`}
                  >
                    {key}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === key ? "rotate-180" : ""}`} />
                  </button>
                  {mobileActiveMenu === key && (
                    <div className="ml-4 mt-2 space-y-1">
                      {(navigationMenu[key] as MenuItemWithBadge[]).map((item, i) => (
                        <button key={i} onClick={() => handleMenuItemClick(item)}
                          className={`flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 rounded-lg ${
                            key === "Use Cases" ? "hover:bg-blue-50 dark:hover:bg-blue-900/20" : "hover:bg-purple-50 dark:hover:bg-purple-900/20"
                          }`}
                        >
                          {item.icon} {item.name}
                          {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <button onClick={() => setLocation("/pricing")} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">Pricing</button>
              <Button onClick={() => { setLocation("/login"); setIsMenuOpen(false); }} className="w-full mt-2 bg-gradient-to-r from-pink-500 to-rose-500">Login</Button>
              <button className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 w-full flex justify-center items-center" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ── SECTION 1: HERO ──────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 rounded-full px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span className="text-sm font-medium text-blue-700">India's #1 Product Profitability Analysis Software 🇮🇳</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
                Find Profitable Products
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  Before Your Competitors Do
                </span>
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                India's most powerful <strong>product profitability analysis software</strong> for Amazon and Flipkart sellers — with AI-powered insights that show you exactly what to sell next,
                <span className="text-blue-700 font-semibold"> backed by real demand data and margin calculations in INR.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleGetStarted} size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all group"
                >
                  👉 Discover Profitable Products Free
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                {[
                  "Amazon & Flipkart data — real Indian marketplace demand",
                  "AI profit predictions in INR before you source",
                  "Real-time opportunity alerts — no credit card required",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-blue-800 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="font-bold text-gray-900 dark:text-white">Top Opportunities Today</h3>
                    <span className="text-xs bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1 rounded-full font-semibold">12 New</span>
                  </div>

                  {[
                    { name: "Smart Kitchen Gadgets", demand: "High", competition: "Low", profit: "₹450", score: "88/100", trend: "up" },
                    { name: "Eco-Friendly Home Decor", demand: "Medium", competition: "Low", profit: "₹380", score: "74/100", trend: "up" },
                    { name: "Tech Accessories", demand: "High", competition: "Medium", profit: "₹290", score: "65/100", trend: "stable" },
                  ].map((product, i) => (
                    <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-sm">{product.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-2 py-0.5 rounded">Demand: {product.demand}</span>
                            <span className="text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded">Competition: {product.competition}</span>
                          </div>
                        </div>
                        {product.trend === "up" ? (
                          <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                        ) : (
                          <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600 dark:text-gray-400">Avg. Profit/Unit: <span className="font-bold text-blue-600 dark:text-blue-400 text-base">{product.profit}</span></span>
                        <span className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 px-2 py-0.5 rounded-full font-semibold">Score: {product.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl px-4 py-2 shadow-xl">
                  <p className="text-white font-bold text-sm">AI Powered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHY SELLERS PICK WRONG PRODUCTS ───────────────────────── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              Why Most Sellers Pick
              <br />
              <span className="text-red-600">The Wrong Products</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              The biggest mistake Indian Amazon and Flipkart sellers make isn't in their operations — it's in their product selection. Most sellers launch on instinct, copy competitors, or rely on outdated research methods.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: <Eye className="w-8 h-8" />, title: "Guessing based on gut feeling, not real demand data", color: "from-red-500 to-orange-500" },
              { icon: <TrendingDown className="w-8 h-8" />, title: "Entering oversaturated markets too late — after competitors are entrenched", color: "from-orange-500 to-yellow-500" },
              { icon: <DollarSign className="w-8 h-8" />, title: "Missing hidden profit opportunities that aren't obvious from browsing", color: "from-blue-500 to-indigo-500" },
              { icon: <Clock className="w-8 h-8" />, title: "Wasting weeks on manual research that still gives incomplete data", color: "from-indigo-500 to-purple-500" },
            ].map((pain, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
                  {pain.icon}
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{pain.title}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-400 dark:border-red-600 rounded-3xl p-8 text-center shadow-lg">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              <span className="text-red-600">67% of new sellers</span> fail in their first year
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              ...because they launch products without proper market research — investing in inventory before validating demand, margins, or competition levels on Indian marketplaces.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: MANUAL VS INSYDZ COMPARISON ───────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              Why Manual Product Research
              <br />
              <span className="text-red-600">Fails Indian Sellers</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Most sellers spend 2–4 weeks manually researching products before launch. Here's the critical data they miss.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border-2 border-gray-200 dark:border-gray-700 shadow-xl mb-8">
            <div className="grid grid-cols-3">
              <div className="bg-gray-100 dark:bg-gray-800 px-6 py-4 border-b-2 border-gray-200 dark:border-gray-700">
                <p className="font-bold text-gray-700 dark:text-gray-300 text-sm">What You Need to Know</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 px-6 py-4 border-b-2 border-gray-200 dark:border-gray-700">
                <p className="font-bold text-gray-500 text-sm text-center">Manual Research</p>
              </div>
              <div className="bg-blue-600 px-6 py-4 border-b-2 border-blue-500">
                <p className="font-bold text-white text-sm text-center">✓ Insydz</p>
              </div>

              {comparisonRows.map((row, i) => (
                <>
                  <div key={`f-${i}`} className={`px-6 py-4 border-b border-gray-100 dark:border-gray-800 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800/50"}`}>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{row.feature}</p>
                  </div>
                  <div key={`m-${i}`} className={`px-6 py-4 border-b border-gray-100 dark:border-gray-800 text-center ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800/50"}`}>
                    <p className="text-sm text-gray-500">{row.manual}</p>
                  </div>
                  <div key={`s-${i}`} className={`px-6 py-4 border-b border-gray-100 dark:border-gray-800 text-center ${i % 2 === 0 ? "bg-blue-50 dark:bg-blue-900/10" : "bg-blue-50/50 dark:bg-blue-900/10"}`}>
                    <p className="text-sm text-blue-700 dark:text-blue-400 font-semibold">{row.insydz}</p>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white mb-2">India-First Differentiator</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Global tools like Jungle Scout and Helium 10 are calibrated for Amazon.com — not Amazon.in. Their demand estimates, competition scores, and profitability calculations are built on US marketplace behaviour. Indian category dynamics, price sensitivity, festive demand cycles, and marketplace fee structures are completely different. Insydz is the only <strong>product opportunity finder</strong> built on Indian marketplace data from the ground up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: HOW IT WORKS ───────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              How Product Discovery Works
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">with Insydz</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From zero to validated product opportunity in under 10 minutes — no research experience needed.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 -translate-y-1/2"></div>
            <div className="grid lg:grid-cols-3 gap-12 relative">
              {[
                {
                  step: 1,
                  title: "Set Your Criteria",
                  desc: "Tell Insydz your budget, target margin, and preferred categories. AI filters millions of products across Amazon India and Flipkart instantly.",
                  visual: <Filter className="w-12 h-12 text-blue-600 mx-auto" />,
                  bg: "bg-blue-100 dark:bg-blue-900/20",
                },
                {
                  step: 2,
                  title: "AI Analyses Market Data",
                  desc: "We analyse demand signals, competition density, pricing trends, profitability margins, and review gap opportunities — calibrated for Indian marketplace behaviour.",
                  visual: <BarChart3 className="w-12 h-12 text-purple-600 mx-auto animate-pulse" />,
                  bg: "bg-purple-100 dark:bg-purple-900/20",
                },
                {
                  step: 3,
                  title: "Get Winning Products",
                  desc: "Plain-language results ranked by AI opportunity score:",
                  isResults: true,
                  bg: "bg-green-100 dark:bg-green-900/20",
                },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-white dark:bg-gray-800 border-2 border-blue-300 dark:border-blue-700 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">{step.step}</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{step.title}</h3>
                    {step.isResults ? (
                      <div className="space-y-3 text-left">
                        <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg p-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-800 dark:text-gray-300">"High demand, low competition product found"</span>
                        </div>
                        <div className="flex items-start gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700 rounded-lg p-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-800 dark:text-gray-300">"Estimated profit: ₹450/unit"</span>
                        </div>
                        <div className="flex items-start gap-2 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-300 dark:border-indigo-700 rounded-lg p-3">
                          <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-800 dark:text-gray-300">"Top sellers have 3.7 rating — gap to win"</span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{step.desc}</p>
                        <div className={`${step.bg} rounded-2xl p-4`}>{step.visual}</div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button onClick={handleGetStarted} size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all group"
            >
              👉 Find Your First Profitable Product Free
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: WHAT YOU DISCOVER ─────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              What You Discover with
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Product Research</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatYouDiscover.map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 text-white shadow-md`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">{item.desc}</p>
                <button onClick={() => setLocation(item.link)} className="text-xs font-semibold text-blue-600 hover:text-blue-700 underline">
                  See {item.linkLabel} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: INDIA-FIRST + REAL SELLER SCENARIO ────────────────────── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              How Insydz Is Different —
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Built on Indian Marketplace Data</span>
            </h2>
          </div>

          {/* Real Seller Scenario */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-3xl p-8 mb-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">📌</span>
              <div>
                <p className="text-sm font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">Real Seller Scenario</p>
                <p className="font-bold text-gray-900 dark:text-white">Home Décor Seller, Jaipur</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Priya sells home décor on Amazon India. In October, she was planning to launch LED strip lights for the Diwali season. Her instinct said "popular" — but she had no data to back up how much to source or whether the market was already crowded.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Using Insydz's <strong>product demand analysis tool</strong>, she ran a 10-minute analysis. Results: "LED strip lights for bedroom" had 340% higher search velocity in Nov–Dec. But the top 4 sellers all had ratings below 3.9, primarily due to cable quality complaints and unclear installation guides.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Priya launched with upgraded braided cables and a Hindi installation card. Her listing converted at 4.8 stars from week two.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "First Month GMV", value: "₹3.4 Lakhs" },
                { label: "Rating from Week 2", value: "4.8 ★" },
                { label: "Research Time", value: "10 minutes" },
              ].map((stat, i) => (
                <div key={i} className="bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-700 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-blue-600 dark:text-blue-400">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4 India-First Advantages */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Flame className="w-6 h-6" />,
                title: "Indian Demand Cycles",
                desc: "Calibrated for Diwali, Navratri, Republic Day — not Black Friday or Prime Day.",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: "Accurate INR Profit Modelling",
                desc: "Margin estimates factor in Amazon India and Flipkart fee structures — not US equivalents.",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Tier 1–3 City Demand Intelligence",
                desc: "Demand signals from all-India activity — not just Delhi/Mumbai/Bengaluru.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <MessageCircle className="w-6 h-6" />,
                title: "Review Gap Analysis",
                desc: "AI reads competitor reviews to surface product differentiation brief (250,000+ reviews analysed daily).",
                color: "from-purple-500 to-pink-500",
              },
            ].map((adv, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 flex items-start gap-4 hover:border-blue-400 transition-all">
                <div className={`w-12 h-12 bg-gradient-to-br ${adv.color} rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md`}>
                  {adv.icon}
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white mb-1">{adv.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: ROI EXAMPLE ────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              The Cost of Launching Without
              <br />
              <span className="text-red-600">Product Profitability Analysis</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Two sellers launch in the same category on Amazon India. Both invest ₹3L in initial inventory. The only difference: one uses Insydz's <strong>product opportunity finder</strong>. One doesn't.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Without */}
            <div className="rounded-2xl border-2 border-red-300 dark:border-red-700 overflow-hidden shadow-lg">
              <div className="bg-red-50 dark:bg-red-900/30 px-6 py-4">
                <p className="font-bold text-red-700 dark:text-red-400 text-lg">❌ Without Insydz — 6-Month Launch Outcome</p>
              </div>
              <div className="bg-white dark:bg-gray-900">
                {roiWithout.map((row, i) => (
                  <div key={i} className={`flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800 ${i % 2 !== 0 ? "bg-gray-50 dark:bg-gray-800/50" : ""}`}>
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 pr-2">{row.label}</p>
                    <p className="text-sm font-bold text-red-600 whitespace-nowrap">{row.value}</p>
                  </div>
                ))}
                <div className="flex items-center justify-between px-6 py-4 bg-red-50 dark:bg-red-900/20">
                  <p className="font-bold text-gray-900 dark:text-white">Total Cost of Wrong Product Selection</p>
                  <p className="font-black text-red-700 text-lg whitespace-nowrap ml-2">−₹1,05,000</p>
                </div>
              </div>
            </div>

            {/* With */}
            <div className="rounded-2xl border-2 border-green-300 dark:border-green-700 overflow-hidden shadow-lg">
              <div className="bg-green-50 dark:bg-green-900/30 px-6 py-4">
                <p className="font-bold text-green-700 dark:text-green-400 text-lg">✅ With Insydz — Same 6-Month Period</p>
              </div>
              <div className="bg-white dark:bg-gray-900">
                {roiWith.map((row, i) => (
                  <div key={i} className={`flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800 ${i % 2 !== 0 ? "bg-gray-50 dark:bg-gray-800/50" : ""}`}>
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 pr-2">{row.label}</p>
                    <p className="text-sm font-bold text-green-600 whitespace-nowrap">{row.value}</p>
                  </div>
                ))}
                <div className="flex items-center justify-between px-6 py-4 bg-green-50 dark:bg-green-900/20">
                  <p className="font-bold text-gray-900 dark:text-white">6-Month Net Revenue</p>
                  <p className="font-black text-green-700 text-lg whitespace-nowrap ml-2">+₹10,62,000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 border-2 border-blue-400 rounded-2xl p-6 text-center">
            <p className="text-2xl font-black text-gray-900 dark:text-white mb-2">
              ₹11.67L difference between a validated product launch and a gut-feel launch
            </p>
            <p className="text-gray-600 dark:text-gray-400">Same budget. Same category. Same marketplaces. The only variable: whether you used <strong>product profitability analysis software</strong> before you sourced.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FREE PLAN ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
            Start Free.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">See Real Opportunities.</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">Free Plan — ₹0 / Forever — No credit card required</p>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-3xl p-8 mb-8 text-left shadow-xl">
            <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-6 text-center">Free Plan Includes:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Product opportunity discovery on Amazon India and Flipkart",
                "AI opportunity scores (1–100) for every product",
                "Competition analysis & gaps",
                "Profit margin estimates in INR",
                "Search volume & demand data",
                "Save products to watchlist",
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 mb-8 text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
              <span><strong className="text-gray-900 dark:text-white">Upgrade teaser:</strong> Paid plans unlock unlimited product research, full 90-day demand history, advanced margin modelling, review gap deep-dives, and real-time opportunity alerts for your saved categories.</span>
            </p>
          </div>

          <Button onClick={handleGetStarted} size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
          >
            👉 Discover Profitable Products Free
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* ── SECTION 9: ICP-BASED CTAs ─────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
            Stop Guessing.
            <br />Start Selling Winners.
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Join sellers who find profitable products with AI-powered research, not luck.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                emoji: "🆕",
                label: "New Sellers (Free Plan)",
                desc: "The free plan validates your first product idea before you spend a rupee on inventory. No experience needed — the AI does the analysis, you make the call.",
                cta: "Start Free — No Card Needed →",
                action: handleGetStarted,
              },
              {
                emoji: "📈",
                label: "Growing Sellers (Growth Plan)",
                desc: "Doing ₹5L+ monthly and planning your next SKU? The Growth Plan unlocks unlimited research, full demand history, advanced margin modelling, and automated alerts for your categories.",
                cta: "Try Growth Plan →",
                action: () => setLocation("/pricing"),
              },
              {
                emoji: "🏢",
                label: "D2C Brands / Agencies (Demo)",
                desc: "Managing multiple product launches? Custom workflows, white-label opportunity reports, API access, and dedicated account support.",
                cta: "Book a Demo →",
                action: () => setLocation("/demo"),
              },
            ].map((card, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-left">
                <p className="text-2xl mb-2">{card.emoji}</p>
                <p className="font-bold text-white mb-2">{card.label}</p>
                <p className="text-white/80 text-sm mb-4">{card.desc}</p>
                <button onClick={card.action} className="text-blue-200 font-semibold text-sm hover:text-white transition-colors underline">{card.cta}</button>
              </div>
            ))}
          </div>

          <Button onClick={handleGetStarted} size="lg"
            className="bg-white hover:bg-gray-100 text-blue-700 font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
          >
            👉 Discover Profitable Products Free
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-white/80 mt-6 text-sm">✓ No credit card required  ✓ Setup in 2 minutes  ✓ Cancel anytime</p>
        </div>
      </section>

      {/* ── SECTION 10: FAQ ───────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-black mb-4 text-center text-gray-900 dark:text-white">
            Product Research — FAQs
          </h2>
          <p className="text-center text-gray-500 mb-12 text-lg">About Finding Profitable Products on Amazon & Flipkart India</p>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-blue-300 transition-all">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <span className="font-bold text-gray-900 dark:text-white pr-4 text-lg">{faq.q}</span>
                  {expandedFaq === faq.id
                    ? <ChevronDown className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    : <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  }
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-5 bg-gray-50 dark:bg-gray-700/30">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STICKY MOBILE CTA ─────────────────────────────────────────────────── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t-2 border-blue-300 dark:border-blue-700 p-4 shadow-2xl z-40">
        <Button onClick={handleGetStarted}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 rounded-full shadow-xl"
        >
          👉 Find Profitable Products Free
        </Button>
      </div>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer className="bg-[#0a0f1e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-14">
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="Insydz Logo" className="w-10 h-10 rounded-xl object-contain" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Insydz</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">India's most powerful product profitability analysis software for Amazon and Flipkart sellers.</p>
              <button onClick={() => setLocation("/signup")}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all transform hover:scale-105 shadow-lg"
              >Start Free →</button>
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
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Use Cases</h4>
              <ul className="space-y-3">
                {[
                  { label: "Find Profitable Products", route: "/use-cases/find-profitable-products" },
                  { label: "Track Competitor Prices", route: "/use-cases/track-competitor-prices" },
                  { label: "Analyze Reviews", route: "/use-cases/analyze-customer-reviews" },
                  { label: "Improve SEO", route: "/use-cases/improve-seo" },
                ].map((item, i) => (
                  <li key={i}><button onClick={() => setLocation(item.route)} className="text-sm text-gray-400 hover:text-white transition-colors text-left">{item.label}</button></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Resources</h4>
              <ul className="space-y-3">
                {[
                  { label: "Blog", route: "/resources/expert-blog" },
                  { label: "E-commerce Guides", route: "/resources/guides" },
                  { label: "Video Tutorials", route: "/resources/videos" },
                  { label: "Case Studies", route: "/resources/case-studies" },
                  { label: "Free Product Analyzer", route: "/free-tools/free-amazon-product-analyzer" },
                ].map((item, i) => (
                  <li key={i}><button onClick={() => setLocation(item.route)} className="text-sm text-gray-400 hover:text-white transition-colors text-left">{item.label}</button></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Company</h4>
              <ul className="space-y-3">
                {[
                  { label: "About", action: () => scrollToSection("About") },
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
              <p className="text-gray-500 text-sm">© 2025 <span className="text-blue-400 font-semibold">Insydz</span>. All rights reserved. Built for Indian sellers 🇮🇳</p>
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