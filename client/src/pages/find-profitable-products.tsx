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



import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { 
  TrendingDown, ArrowRight, CheckCircle2, Target, Zap, 
  Bell, TrendingUp, MessageCircle, Search, Package, 
  BarChart3, ChevronRight, Star, AlertCircle, Clock,
  ShoppingBag, IndianRupee, Smartphone, X, Check,
  DollarSign, TrendingDownIcon, Eye, Sparkles,
  ChevronDown, Filter, Lightbulb, Award, Menu, Sun, Moon, 
  ArrowLeft, BookOpen, Video, FileText, Store, Briefcase, 
  Users, Code, Globe, Trophy,
  Flame,
  Presentation
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
    { name: "Free Amazon Product Analyzer", icon: <BarChart3 className="w-4 h-4" /> , route: "/free-tools/free-amazon-product-analyzer" },
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

export default function FindProfitableProductsPage() {
  const [, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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

  const handleGetStarted = () => {
    setLocation("/login");
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
    {
      question: "How does Insydz find profitable products?",
      answer: "Insydz analyzes sales data, competition levels, pricing trends, and demand patterns across Amazon & Flipkart to identify products with high profit potential and low competition."
    },
    {
      question: "Can I find products for both Amazon and Flipkart?",
      answer: "Yes! Insydz covers both Amazon India and Flipkart, helping you discover profitable opportunities across both major Indian marketplaces."
    },
    {
      question: "What makes a product 'profitable'?",
      answer: "We look at demand (search volume), competition (number of sellers), margins (price vs cost), and sales velocity to identify products that balance profitability with market opportunity."
    },
    {
      question: "Do I need product research experience?",
      answer: "No. Insydz simplifies product research with AI-powered recommendations and clear metrics. You don't need to be an expert to find winning products."
    },
    {
      question: "How often is product data updated?",
      answer: "Product opportunity data is refreshed daily, with real-time updates on pricing and competition to ensure you're always seeing current market conditions."
    },
    {
      question: "Can I save products I'm interested in?",
      answer: "Yes. You can save products to your watchlist, add notes, and track them over time to see if they remain profitable opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navigation */}
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
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setLocation('/')}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </button>
              
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
            <div className="hidden lg:flex items-center space-x-2" ref={dropdownRef}>
              <button 
                onClick={() => setLocation('/')} 
                className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
              >
                Home
              </button>

              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown('Solutions')}
                  className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1"
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

              {/* Use Cases Dropdown - HIGHLIGHTED */}
              <div className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown('Use Cases')}
                  className="px-3 py-2 text-sm text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all flex items-center gap-1"
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
                        className="w-full px-4 py-3 text-left hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center gap-3 group"
                      >
                        <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                          {item.icon}
                        </span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {item.name}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Features Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown('Features')}
                  className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1"
                >
                  Features
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Features' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Features' && (
                  <div 
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    {navigationMenu.Features.map((item, i) => (
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

              <button 
                onClick={() => setLocation('/pricing')}  
                className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
              >
                Pricing
              </button>
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
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </button>

              {/* Mobile Solutions */}
              <div>
                <button 
                  onClick={() => toggleMobileMenu('Solutions')}
                  className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
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
                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
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
                  className="flex items-center justify-between w-full px-4 py-2 text-blue-600 dark:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-semibold"
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
                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg"
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
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 rounded-full px-4 py-2">
                <Target className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">AI-Powered Product Discovery</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
                Find Profitable Products
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  Before Your Competitors Do
                </span>
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Insydz uncovers high-demand, low-competition products on Amazon & Flipkart — 
                <span className="text-blue-700 dark:text-blue-400 font-semibold"> with AI-powered insights that show you exactly what to sell next.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all group"
                >
                  👉 Discover Profitable Products Free
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Amazon & Flipkart data 🇮🇳</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>AI profit predictions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Real-time opportunity alerts</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-blue-800 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="font-bold text-gray-900 dark:text-white">Top Opportunities Today</h3>
                    <span className="text-xs bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1 rounded-full font-semibold">12 New</span>
                  </div>

                  {[
                    { name: "Smart Kitchen Gadgets", demand: "High", competition: "Low", profit: "₹450", trend: "up" },
                    { name: "Eco-Friendly Home Decor", demand: "Medium", competition: "Low", profit: "₹380", trend: "up" },
                    { name: "Tech Accessories", demand: "High", competition: "Medium", profit: "₹290", trend: "stable" }
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
                        <span className="text-xs text-gray-600 dark:text-gray-400">Avg. Profit/Unit:</span>
                        <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{product.profit}</span>
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

      {/* Problem Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              Why Most Sellers Pick
              <br />
              <span className="text-red-600 dark:text-red-500">The Wrong Products</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: <Eye className="w-8 h-8" />, title: "Guessing based on gut feeling, not data", color: "from-red-500 to-orange-500" },
              { icon: <TrendingDown className="w-8 h-8" />, title: "Entering oversaturated markets too late", color: "from-orange-500 to-yellow-500" },
              { icon: <DollarSign className="w-8 h-8" />, title: "Missing hidden profit opportunities", color: "from-blue-500 to-indigo-500" },
              { icon: <Clock className="w-8 h-8" />, title: "Wasting weeks on manual research", color: "from-indigo-500 to-purple-500" }
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
            <AlertCircle className="w-12 h-12 text-red-600 dark:text-red-500 mx-auto mb-4" />
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              <span className="text-red-600 dark:text-red-500">67% of new sellers</span> fail in their first year
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              because they launch products without proper market research.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              How Product Discovery Works
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">with Insydz</span>
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-3 gap-12 relative">
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 border-2 border-blue-300 dark:border-blue-700 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Set Your Criteria</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Tell us your budget, target margins, and preferred categories. AI filters millions of products instantly.
                  </p>
                  <div className="bg-blue-100 dark:bg-blue-900/20 rounded-2xl p-4">
                    <Filter className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white dark:bg-gray-800 border-2 border-blue-300 dark:border-blue-700 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">AI Analyzes Market Data</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    We analyze demand, competition, pricing trends, and profitability across Amazon & Flipkart.
                  </p>
                  <div className="bg-purple-100 dark:bg-purple-900/20 rounded-2xl p-4">
                    <BarChart3 className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white dark:bg-gray-800 border-2 border-blue-300 dark:border-blue-700 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Get Winning Products</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg p-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-800 dark:text-gray-300">"High demand, low competition product found"</span>
                    </div>
                    <div className="flex items-start gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700 rounded-lg p-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-800 dark:text-gray-300">"Estimated profit: ₹450/unit"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all group"
            >
              👉 Find Your First Profitable Product Free
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What You Discover with Product Research
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <TrendingUp className="w-8 h-8" />, title: "Trending products before saturation", color: "from-green-500 to-emerald-500" },
              { icon: <DollarSign className="w-8 h-8" />, title: "Profit margin estimates per unit", color: "from-blue-500 to-cyan-500" },
              { icon: <Target className="w-8 h-8" />, title: "Competition analysis & gaps", color: "from-purple-500 to-pink-500" },
              { icon: <Search className="w-8 h-8" />, title: "Search volume & demand data", color: "from-orange-500 to-red-500" },
              { icon: <Award className="w-8 h-8" />, title: "Best-selling categories", color: "from-indigo-500 to-purple-500" },
              { icon: <Sparkles className="w-8 h-8" />, title: "AI opportunity score (1-100)", color: "from-yellow-500 to-orange-500" }
            ].map((benefit, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 text-white shadow-md`}>
                  {benefit.icon}
                </div>
                <p className="text-gray-900 dark:text-white font-semibold leading-relaxed">{benefit.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Product Research – FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-blue-400 transition-all">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-bold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
            Stop Guessing.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Start Selling Winners.
            </span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Join sellers who find profitable products with AI-powered research, not luck.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
            >
              👉 Discover Profitable Products Free
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t-2 border-blue-300 dark:border-blue-700 p-4 shadow-2xl z-40">
        <Button
          onClick={handleGetStarted}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 rounded-full shadow-xl"
        >
          👉 Find Profitable Products Free
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="Insydz Logo" 
                  className="w-10 h-10 rounded-xl object-contain"
                />
                <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Insydz
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered product discovery for smart sellers
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => setLocation("/")} className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Home
                </button>
                <button onClick={() => setLocation("/pricing")} className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Pricing
                </button>
                <button onClick={handleGetStarted} className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Login
                </button>
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
            <p className="text-gray-500 text-sm">
              © 2025 Insydz. All rights reserved. Built for Indian sellers 🇮🇳
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}