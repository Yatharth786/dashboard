// import { useState, useEffect } from "react";
// import { useLocation } from "wouter";
// import { 
//   ArrowRight, CheckCircle2, Target, Zap, 
//   Bell, TrendingUp, TrendingDown, Shield,
//   BarChart3, ChevronRight, AlertCircle,
//   DollarSign, X, Check, RefreshCw, Eye, 
//   Sparkles, ChevronDown, LineChart, Percent, 
//   ShoppingCart, Award, Calculator, Maximize2, 
//   Brain, ThumbsUp, MessageCircle, Search, 
//   Package, Clock, Users
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function PriceOptimizationFeaturePage() {
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
//       question: "How does AI price optimization work?",
//       answer: "Insydz AI analyzes competitor prices, Buy Box dynamics, demand patterns, and your margin targets to recommend optimal prices that maximize both sales volume and profit."
//     },
//     {
//       question: "Will I lose the Buy Box if prices are optimized?",
//       answer: "No! Our AI specifically factors in Buy Box requirements and recommends prices that keep you competitive while protecting margins. You win more, not less."
//     },
//     {
//       question: "Can I set minimum profit margins?",
//       answer: "Absolutely. Set your floor prices and margin targets, and our AI will never recommend prices below your thresholds."
//     },
//     {
//       question: "Does this work for seasonal products?",
//       answer: "Yes! The AI detects seasonal demand patterns and adjusts pricing strategies accordingly to maximize revenue during peak seasons."
//     },
//     {
//       question: "Is price optimization available on the free plan?",
//       answer: "Yes! The free plan includes basic price optimization for limited products. Upgrade for AI-powered automation and unlimited products."
//     },
//     {
//       question: "How is this different from competitor price tracking?",
//       answer: "Price tracking shows you what competitors are doing. Price optimization tells you what YOU should do based on AI analysis of market dynamics, demand, and your goals."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white/95 backdrop-blur-xl border-b border-green-200 shadow-lg"
//             : "bg-white/80 backdrop-blur-md border-b border-green-100"
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
//                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
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
//                 className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-green-500/50 transition-all"
//               >
//                 Start Free
//               </Button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
//           <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 rounded-full px-4 py-2">
//                 <DollarSign className="w-4 h-4 text-green-600" />
//                 <span className="text-sm font-medium text-green-700">Feature Spotlight</span>
//               </div>

//               <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
//                 AI Price Optimization —
//                 <br />
//                 <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">
//                   Maximize Profit
//                 </span>
//                 <br />
//                 Without Losing Sales
//               </h1>

//               <p className="text-xl text-gray-700 leading-relaxed">
//                 AI-powered pricing engine that finds the perfect price point. 
//                 <span className="text-green-700 font-semibold"> Win Buy Box, protect margins, and increase revenue — all at once.</span>
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button
//                   onClick={handleGetStarted}
//                   size="lg"
//                   className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-green-500/50 transition-all group"
//                 >
//                   🎯 Start Optimizing Prices Free
//                   <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//                 <Button
//                   onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
//                   size="lg"
//                   variant="outline"
//                   className="border-2 border-green-600 text-green-700 hover:bg-green-50 font-semibold px-8 py-6 text-lg rounded-full"
//                 >
//                   See How It Works →
//                 </Button>
//               </div>

//               <div className="flex flex-wrap items-center gap-6 pt-4">
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>AI-powered recommendations</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>Margin protection built-in</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>Buy Box optimization</span>
//                 </div>
//               </div>
//             </div>

//             {/* Hero Visual */}
//             <div className="relative">
//               <div className="relative bg-white border-2 border-green-200 rounded-3xl p-8 shadow-2xl">
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between pb-4 border-b border-gray-200">
//                     <h3 className="font-bold text-gray-900">AI Price Recommendation</h3>
//                     <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
//                       <Brain className="w-3 h-3" />
//                       AI Active
//                     </span>
//                   </div>

//                   {/* Current vs Recommended */}
//                   <div className="space-y-3">
//                     <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="text-sm font-medium text-gray-600">Current Price</span>
//                         <span className="text-2xl font-bold text-gray-700">₹1,499</span>
//                       </div>
//                       <div className="text-xs text-gray-500">Buy Box: 45% | Margin: 18%</div>
//                     </div>

//                     <div className="flex items-center justify-center">
//                       <ArrowRight className="w-6 h-6 text-green-600" />
//                     </div>

//                     <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 rounded-lg p-4 animate-pulse">
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="text-sm font-medium text-green-700">AI Recommended</span>
//                         <span className="text-2xl font-bold text-green-700">₹1,349</span>
//                       </div>
//                       <div className="text-xs text-green-600 font-semibold">Buy Box: 78% ↑ | Margin: 22% ↑</div>
//                     </div>
//                   </div>

//                   {/* Impact Metrics */}
//                   <div className="grid grid-cols-2 gap-3 pt-4">
//                     <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
//                       <div className="text-xs text-gray-600 mb-1">Revenue Impact</div>
//                       <div className="text-xl font-bold text-green-600">+32%</div>
//                     </div>
//                     <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-center">
//                       <div className="text-xs text-gray-600 mb-1">Profit Impact</div>
//                       <div className="text-xl font-bold text-emerald-600">+18%</div>
//                     </div>
//                   </div>

//                   {/* Action Button in Visual */}
//                   <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-lg">
//                     Apply Recommended Price →
//                   </Button>
//                 </div>

//                 <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl px-4 py-2 shadow-xl">
//                   <p className="text-white font-bold text-sm flex items-center gap-1">
//                     <Sparkles className="w-4 h-4" />
//                     AI Optimized
//                   </p>
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
//               Why Most Sellers
//               <br />
//               <span className="text-red-600">Leave Money on the Table</span>
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {[
//               {
//                 icon: <Calculator className="w-8 h-8" />,
//                 title: "Guessing prices based on gut feeling",
//                 color: "from-red-500 to-orange-500"
//               },
//               {
//                 icon: <TrendingDown className="w-8 h-8" />,
//                 title: "Panic discounting kills margins",
//                 color: "from-orange-500 to-yellow-500"
//               },
//               {
//                 icon: <Shield className="w-8 h-8" />,
//                 title: "Losing Buy Box to cheaper competitors",
//                 color: "from-yellow-500 to-orange-500"
//               },
//               {
//                 icon: <Percent className="w-8 h-8" />,
//                 title: "Overpricing = zero sales",
//                 color: "from-orange-500 to-red-500"
//               }
//             ].map((pain, i) => (
//               <div key={i} className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:border-green-400 hover:shadow-lg transition-all group">
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
//               Wrong pricing costs sellers <span className="text-red-600">15-35% of potential revenue</span>
//             </p>
//             <p className="text-gray-700 text-lg">
//               Every day, across categories.
//             </p>
//           </div>

//           {/* Visual Comparison */}
//           <div className="mt-12 grid md:grid-cols-2 gap-8">
//             <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8 text-center">
//               <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <X className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Manual Pricing</h3>
//               <p className="text-gray-700 text-sm mb-4">Guesswork + delayed reactions = lost profit</p>
//               <div className="space-y-2 text-left">
//                 <div className="flex items-start gap-2">
//                   <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
//                   <span className="text-sm text-gray-600">No data-driven insights</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
//                   <span className="text-sm text-gray-600">Emotional pricing decisions</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
//                   <span className="text-sm text-gray-600">Constant monitoring needed</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8 text-center">
//               <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Check className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">AI Optimization</h3>
//               <p className="text-gray-700 text-sm mb-4">Smart pricing = maximum profit + sales</p>
//               <div className="space-y-2 text-left">
//                 <div className="flex items-start gap-2">
//                   <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
//                   <span className="text-sm text-gray-600">AI analyzes market dynamics</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
//                   <span className="text-sm text-gray-600">Data-driven recommendations</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
//                   <span className="text-sm text-gray-600">Automated price optimization</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Feature Explanation */}
//       <section id="how-it-works" className="py-20 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//               How AI Price Optimization Works
//             </h2>
//             <p className="text-xl text-gray-700 max-w-3xl mx-auto">
//               Insydz AI analyzes thousands of data points every hour to recommend the perfect price — 
//               <span className="text-green-700 font-semibold"> balancing competitiveness, margins, and Buy Box probability.</span>
//             </p>
//           </div>

//           <div className="relative">
//             <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 -translate-y-1/2"></div>

//             <div className="grid lg:grid-cols-4 gap-8 relative">
//               {[
//                 {
//                   step: "1",
//                   title: "AI scans market data",
//                   detail: "Competitor prices, demand, seasonality",
//                   icon: <Eye className="w-12 h-12" />
//                 },
//                 {
//                   step: "2",
//                   title: "Analyzes Buy Box dynamics",
//                   detail: "Win probability at different price points",
//                   icon: <Brain className="w-12 h-12" />
//                 },
//                 {
//                   step: "3",
//                   title: "Calculates optimal price",
//                   detail: "Maximum profit while staying competitive",
//                   icon: <Calculator className="w-12 h-12" />
//                 },
//                 {
//                   step: "4",
//                   title: "Recommends & alerts you",
//                   detail: "Dashboard + WhatsApp notifications",
//                   icon: <Bell className="w-12 h-12" />
//                 }
//               ].map((item, i) => (
//                 <div key={i} className="bg-white border-2 border-green-300 rounded-2xl p-6 text-center relative z-10 shadow-lg hover:shadow-xl transition-all">
//                   <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-black text-white">
//                     {item.step}
//                   </div>
//                   <div className="bg-green-100 rounded-xl p-4 mb-4 text-green-600">
//                     {item.icon}
//                   </div>
//                   <p className="text-gray-900 font-semibold mb-2">{item.title}</p>
//                   <p className="text-sm text-gray-600">{item.detail}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="text-center mt-12">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
//             >
//               🎯 Get AI Price Recommendations Free
//               <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* What This Feature Helps You Do */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               What You Can Do with Price Optimization
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               { icon: <DollarSign />, title: "Increase profit per sale", detail: "AI finds the highest profitable price", color: "text-green-600" },
//               { icon: <ShoppingCart />, title: "Win more Buy Boxes", detail: "Competitive without panic discounting", color: "text-blue-600" },
//               { icon: <TrendingUp />, title: "Boost revenue 15-30%", detail: "Smart pricing = more conversions", color: "text-emerald-600" },
//               { icon: <Shield />, title: "Protect margins automatically", detail: "Set floors, AI respects them", color: "text-purple-600" },
//               { icon: <Award />, title: "Beat competitors strategically", detail: "Data wins over guesswork", color: "text-orange-600" },
//               { icon: <Maximize2 />, title: "Scale without manual work", detail: "AI optimizes 24/7", color: "text-indigo-600" }
//             ].map((outcome, i) => (
//               <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className={`w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center ${outcome.color}`}>
//                     {outcome.icon}
//                   </div>
//                   <ThumbsUp className="w-6 h-6 text-green-500" />
//                 </div>
//                 <p className="text-gray-900 font-semibold leading-relaxed mb-1">{outcome.title}</p>
//                 <p className="text-sm text-gray-600">{outcome.detail}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Feature Depth */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Advanced AI Pricing Intelligence
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 feature: "Dynamic Price Recommendations",
//                 benefit: "AI adjusts to market changes hourly",
//                 icon: <RefreshCw className="w-8 h-8" />,
//                 color: "from-blue-500 to-cyan-500"
//               },
//               {
//                 feature: "Buy Box Win Probability",
//                 benefit: "Know your chances before pricing",
//                 icon: <Percent className="w-8 h-8" />,
//                 color: "from-purple-500 to-pink-500"
//               },
//               {
//                 feature: "Margin Protection Rules",
//                 benefit: "Never sell below profit targets",
//                 icon: <Shield className="w-8 h-8" />,
//                 color: "from-red-500 to-orange-500"
//               },
//               {
//                 feature: "Competitor Price Analysis",
//                 benefit: "Beat them smartly, not blindly",
//                 icon: <Eye className="w-8 h-8" />,
//                 color: "from-green-500 to-emerald-500"
//               },
//               {
//                 feature: "Seasonal Demand Detection",
//                 benefit: "Optimize for high & low seasons",
//                 icon: <LineChart className="w-8 h-8" />,
//                 color: "from-orange-500 to-red-500"
//               },
//               {
//                 feature: "A/B Price Testing",
//                 benefit: "Test prices, find winners",
//                 icon: <BarChart3 className="w-8 h-8" />,
//                 color: "from-indigo-500 to-purple-500"
//               }
//             ].map((item, i) => (
//               <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-green-400 hover:shadow-xl transition-all">
//                 <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>
//                   {item.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">{item.feature}</h3>
//                 <p className="text-gray-600 flex items-center gap-2">
//                   <ArrowRight className="w-4 h-4 text-green-600" />
//                   {item.benefit}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Comparison Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Manual Pricing vs AI Optimization
//             </h2>
//           </div>

//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Aspect</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">Manual Pricing</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold text-green-700 bg-green-50">AI Optimization</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {[
//                   { aspect: "Data Analysis", manual: "Gut feeling, limited data", insydz: "Thousands of data points analyzed" },
//                   { aspect: "Speed", manual: "Hours to days", insydz: "Recommendations in seconds" },
//                   { aspect: "Accuracy", manual: "Hit or miss", insydz: "Proven 15-30% revenue increase" },
//                   { aspect: "Margin Safety", manual: "Manual calculations, errors", insydz: "Automated margin protection" },
//                   { aspect: "Scalability", manual: "Impossible for 100+ products", insydz: "Works for unlimited products" }
//                 ].map((row, i) => (
//                   <tr key={i} className="border-t border-gray-200">
//                     <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.aspect}</td>
//                     <td className="px-6 py-4 text-center">
//                       <div className="flex items-center justify-center gap-2">
//                         <X className="w-5 h-5 text-red-500" />
//                         <span className="text-sm text-gray-600">{row.manual}</span>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 text-center bg-green-50">
//                       <div className="flex items-center justify-center gap-2">
//                         <Check className="w-5 h-5 text-green-600" />
//                         <span className="text-sm text-gray-900 font-medium">{row.insydz}</span>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="text-center mt-8">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl"
//             >
//               🎯 Switch to AI Pricing
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* PLG Entry Point */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Start Free. Optimize Prices Instantly.
//             </h2>
//           </div>

//           <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-3xl p-8 shadow-xl">
//             <div className="text-center mb-8">
//               <div className="inline-flex items-baseline gap-2 mb-4">
//                 <span className="text-6xl font-black text-green-600">₹0</span>
//                 <span className="text-2xl text-gray-600">/ Forever</span>
//               </div>
//               <p className="text-lg text-gray-700">Free Plan Includes:</p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-4 mb-8">
//               {[
//                 "AI price recommendations for limited products",
//                 "Buy Box probability analysis",
//                 "Margin protection settings",
//                 "Basic optimization alerts"
//               ].map((feature, i) => (
//                 <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-4">
//                   <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
//                   <span className="text-gray-900 font-medium">{feature}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="bg-white rounded-2xl p-6 mb-6">
//               <p className="text-sm text-gray-700 mb-2">
//                 <span className="font-bold text-green-600">Upgrade Teaser:</span> Unlock automated price changes, unlimited products, and advanced A/B testing on paid plans.
//               </p>
//             </div>

//             <div className="text-center">
//               <Button
//                 onClick={handleGetStarted}
//                 size="lg"
//                 className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl"
//               >
//                 🎯 Start AI Price Optimization Free
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Who This Feature Is For */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Is AI Price Optimization Right for You?
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
//                   <Check className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Perfect For</h3>
//               </div>
//               <ul className="space-y-4">
//                 {[
//                   "Sellers in competitive categories",
//                   "Brands protecting margins",
//                   "High-volume sellers (50+ SKUs)",
//                   "Agencies managing multiple accounts",
//                   "Sellers tired of manual pricing"
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-700 font-medium">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="bg-orange-50 border-2 border-orange-300 rounded-2xl p-8">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
//                   <AlertCircle className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Less Useful For</h3>
//               </div>
//               <ul className="space-y-4">
//                 {[
//                   "Fixed-price/MRP-only products",
//                   "One-time sellers with 1-2 products",
//                   "Sellers who never check analytics"
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-700 font-medium">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Price Optimization – FAQs
//             </h2>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, i) => (
//               <div key={i} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-green-400 transition-all">
//                 <button
//                   onClick={() => toggleFaq(i)}
//                   className="w-full px-6 py-4 flex items-center justify-between text-left"
//                 >
//                   <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
//                   <ChevronDown className={`w-5 h-5 text-green-600 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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

//       {/* Internal Linking */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Related Features
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               { title: "Competitor Price Tracking", icon: <TrendingDown />, color: "from-orange-500 to-red-500" },
//               { title: "Review Analytics", icon: <MessageCircle />, color: "from-purple-500 to-pink-500" },
//               { title: "Keyword & Rank Tracking", icon: <Search />, color: "from-blue-500 to-cyan-500" },
//               { title: "Product Research", icon: <Target />, color: "from-indigo-500 to-purple-500" },
//               { title: "AI Recommendations", icon: <Sparkles />, color: "from-green-500 to-emerald-500" },
//               { title: "WhatsApp Alerts", icon: <Bell />, color: "from-emerald-500 to-green-500" }
//             ].map((feature, i) => (
//               <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all cursor-pointer group">
//                 <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">{feature.title}</h3>
//                 <ArrowRight className="w-5 h-5 text-green-600 mt-2 group-hover:translate-x-1 transition-transform" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//             Stop Guessing Prices.
//             <br />
//             <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//               Let AI Maximize Your Profit.
//             </span>
//           </h2>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
//             >
//               🎯 Start AI Pricing Free
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//             <Button
//               onClick={() => setLocation("/")}
//               size="lg"
//               variant="outline"
//               className="border-2 border-green-600 text-green-700 hover:bg-green-50 font-semibold px-12 py-6 text-lg rounded-full"
//             >
//               Explore All Features →
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Sticky Mobile CTA */}
//       <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-green-300 p-4 shadow-2xl z-40">
//         <Button
//           onClick={handleGetStarted}
//           className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 rounded-full shadow-xl"
//         >
//           🎯 Start AI Pricing Free
//         </Button>
//       </div>

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
//   ArrowRight, CheckCircle2, Target, Zap, 
//   Bell, TrendingUp, TrendingDown, Shield,
//   BarChart3, ChevronRight, AlertCircle,
//   DollarSign, X, Check, RefreshCw, Eye, 
//   Sparkles, ChevronDown, LineChart, Percent, 
//   ShoppingCart, Award, Calculator, Maximize2, 
//   Brain, ThumbsUp, MessageCircle, Search, 
//   Package, Clock, Users, Menu, Sun, Moon,
//   ShoppingBag, Store, Briefcase, Code, Globe,
//   Trophy, ArrowLeft, BookOpen, Video, FileText,
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
//     { name: "All Solutions (Overview)", icon: <ShoppingBag className="w-4 h-4" />, route: "/solutions/solutions" },
//     { name: "For Amazon Sellers (India)", icon: <ShoppingBag className="w-4 h-4" />, route: "/solutions/amazon-sellers" },
//     { name: "For Flipkart Sellers", icon: <Store className="w-4 h-4" />, route: "/solutions/flipkart-sellers" },
//     { name: "For E-commerce Agencies", icon: <Briefcase className="w-4 h-4" />, route: "/solutions/ecommerce-agencies" },
//     { name: "For Brand Managers", icon: <Users className="w-4 h-4" />, route: "/solutions/brand-managers" },
//   ],
//   "Use Cases": [
//     { name: "All Use Cases", icon: <TrendingUp className="w-4 h-4" />, route: "/use-cases" },
//     { name: "Track Competitor Prices", icon: <TrendingUp className="w-4 h-4" />, route: "/use-cases/track-competitor-prices" },
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
//     { name: "Free Amazon Product Analyzer", icon: <BarChart3 className="w-4 h-4" />, route: "/free-tools/free-amazon-product-analyzer" },
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

// export default function PriceOptimizationFeaturePage() {
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
//     isDarkMode ? html.classList.add("dark") : html.classList.remove("dark");
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
//   const toggleMobileMenu = (menuName: string) => setMobileActiveMenu(mobileActiveMenu === menuName ? null : menuName);

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
//       document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }, 100);
//   };

//   const faqs = [
//     { question: "How does AI price optimization work?", answer: "Insydz AI analyzes competitor prices, Buy Box dynamics, demand patterns, and your margin targets to recommend optimal prices that maximize both sales volume and profit." },
//     { question: "Will I lose the Buy Box if prices are optimized?", answer: "No! Our AI specifically factors in Buy Box requirements and recommends prices that keep you competitive while protecting margins. You win more, not less." },
//     { question: "Can I set minimum profit margins?", answer: "Absolutely. Set your floor prices and margin targets, and our AI will never recommend prices below your thresholds." },
//     { question: "Does this work for seasonal products?", answer: "Yes! The AI detects seasonal demand patterns and adjusts pricing strategies accordingly to maximize revenue during peak seasons." },
//     { question: "Is price optimization available on the free plan?", answer: "Yes! The free plan includes basic price optimization for limited products. Upgrade for AI-powered automation and unlimited products." },
//     { question: "How is this different from competitor price tracking?", answer: "Price tracking shows you what competitors are doing. Price optimization tells you what YOU should do based on AI analysis of market dynamics, demand, and your goals." }
//   ];

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-950">
//       {/* Navigation */}
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg" : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
//       }`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo and Back Button */}
//             <div className="flex items-center space-x-1">
//               <button onClick={() => setLocation('/')} className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all">
//                 <ArrowLeft className="w-4 h-4" />
//                 <span className="hidden sm:inline">Back</span>
//               </button>
//               <div className="flex items-center space-x-1 group cursor-pointer" onClick={() => setLocation('/')}>
//                 <div className="relative">
//                   <img src="/logo.png" alt="Insydz Logo" className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain" />
//                   <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
//                 </div>
//                 <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Insydz</span>
//               </div>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex items-center space-x-2" ref={dropdownRef}>
//               <button onClick={() => setLocation('/')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all">Home</button>

//               {/* Solutions Dropdown */}
//               <div className="relative">
//                 <button onMouseEnter={() => setActiveDropdown('Solutions')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all flex items-center gap-1">
//                   Solutions <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Solutions' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {activeDropdown === 'Solutions' && (
//                   <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
//                     {navigationMenu.Solutions.map((item, i) => (
//                       <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors flex items-center gap-3 group">
//                         <span className="text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">{item.icon}</span>
//                         <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 flex-1">{item.name}</span>
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Use Cases Dropdown */}
//               <div className="relative">
//                 <button onMouseEnter={() => setActiveDropdown('Use Cases')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all flex items-center gap-1">
//                   Use Cases <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Use Cases' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {activeDropdown === 'Use Cases' && (
//                   <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
//                     {navigationMenu["Use Cases"].map((item, i) => (
//                       <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors flex items-center gap-3 group">
//                         <span className="text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">{item.icon}</span>
//                         <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400">{item.name}</span>
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Features Dropdown - HIGHLIGHTED */}
//               <div className="relative">
//                 <button onMouseEnter={() => setActiveDropdown('Features')} className="px-3 py-2 text-sm text-green-600 dark:text-green-500 font-semibold rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all flex items-center gap-1">
//                   Features <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Features' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {activeDropdown === 'Features' && (
//                   <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
//                     {navigationMenu.Features.map((item, i) => (
//                       <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors flex items-center gap-3 group">
//                         <span className="text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">{item.icon}</span>
//                         <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 flex-1">{item.name}</span>
//                         {item.badge && <span className="text-xs bg-gradient-to-r from-green-600 to-emerald-600 text-white px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <button onClick={() => setLocation('/pricing')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all">Pricing</button>
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
//                 <button onMouseEnter={() => setActiveDropdown('Resources')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all flex items-center gap-1">
//                   Resources <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Resources' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {activeDropdown === 'Resources' && (
//                   <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
//                     {navigationMenu.Resources.map((item, i) => (
//                       <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors flex items-center gap-3 group">
//                         <span className="text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">{item.icon}</span>
//                         <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 flex-1">{item.name}</span>
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

//               <button className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" onClick={() => setIsDarkMode(!isDarkMode)}>
//                 {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
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
//               <button onClick={() => { setLocation('/'); setIsMenuOpen(false); }} className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg font-medium">
//                 <ArrowLeft className="w-4 h-4" /> Back to Home
//               </button>

//               <div>
//                 <button onClick={() => toggleMobileMenu('Solutions')} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg font-medium">
//                   Solutions <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Solutions' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {mobileActiveMenu === 'Solutions' && (
//                   <div className="ml-4 mt-2 space-y-1">
//                     {navigationMenu.Solutions.map((item, i) => (
//                       <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg">
//                         {item.icon}{item.name}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               {/* Mobile Use Cases */}
//                                                         <div>
//                                                           <button 
//                                                             onClick={() => toggleMobileMenu('Use Cases')}
//                                                             className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                                                           >
//                                                             Use Cases
//                                                             <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Use Cases' ? 'rotate-180' : ''}`} />
//                                                           </button>
//                                                           {mobileActiveMenu === 'Use Cases' && (
//                                                             <div className="ml-4 mt-2 space-y-1">
//                                                               {navigationMenu["Use Cases"].map((item, i) => (
//                                                                 <button 
//                                                                   key={i} 
//                                                                   onClick={() => handleMenuItemClick(item)}
//                                                                   className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
//                                                                 >
//                                                                   {item.icon}
//                                                                   {item.name}
//                                                                 </button>
//                                                               ))}
//                                                             </div>
//                                                           )}
//                                                         </div>

//               {/* Features - highlighted */}
//               <div>
//                 <button onClick={() => toggleMobileMenu('Features')} className="flex items-center justify-between w-full px-4 py-2 text-green-600 dark:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg font-semibold">
//                   Features <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Features' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {mobileActiveMenu === 'Features' && (
//                   <div className="ml-4 mt-2 space-y-1">
//                     {navigationMenu.Features.map((item, i) => (
//                       <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg">
//                         {item.icon}{item.name}
//                         {item.badge && <span className="text-xs bg-green-500 text-white px-1.5 py-0.5 rounded-full">{item.badge}</span>}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <button onClick={() => setLocation('/pricing')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg font-medium">Pricing</button>
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

//               <Button onClick={() => { setLocation('/login'); setIsMenuOpen(false); }} className="w-full mt-2 bg-gradient-to-r from-pink-500 to-rose-500">Login</Button>
//               <button className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 w-full flex justify-center items-center" onClick={() => setIsDarkMode(!isDarkMode)}>
//                 {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
//           <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
//         </div>
//         <div className="relative max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 rounded-full px-4 py-2">
//                 <DollarSign className="w-4 h-4 text-green-600" />
//                 <span className="text-sm font-medium text-green-700">Feature Spotlight</span>
//               </div>
//               <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
//                 AI Price Optimization —
//                 <br />
//                 <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">Maximize Profit</span>
//                 <br />
//                 Without Losing Sales
//               </h1>
//               <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
//                 AI-powered pricing engine that finds the perfect price point.
//                 <span className="text-green-700 font-semibold"> Win Buy Box, protect margins, and increase revenue — all at once.</span>
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-green-500/50 transition-all group">
//                   🎯 Start Optimizing Prices Free
//                   <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//                 <Button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} size="lg" variant="outline" className="border-2 border-green-600 text-green-700 dark:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 font-semibold px-8 py-6 text-lg rounded-full">
//                   See How It Works →
//                 </Button>
//               </div>
//               <div className="flex flex-wrap items-center gap-6 pt-4">
//                 {["AI-powered recommendations", "Margin protection built-in", "Buy Box optimization"].map((item, i) => (
//                   <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
//                     <CheckCircle2 className="w-5 h-5 text-green-600" />
//                     <span>{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Hero Visual */}
//             <div className="relative">
//               <div className="relative bg-white dark:bg-gray-900 border-2 border-green-200 dark:border-green-800 rounded-3xl p-8 shadow-2xl">
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
//                     <h3 className="font-bold text-gray-900 dark:text-white">AI Price Recommendation</h3>
//                     <span className="text-xs bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
//                       <Brain className="w-3 h-3" /> AI Active
//                     </span>
//                   </div>
//                   <div className="space-y-3">
//                     <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Current Price</span>
//                         <span className="text-2xl font-bold text-gray-700 dark:text-gray-300">₹1,499</span>
//                       </div>
//                       <div className="text-xs text-gray-500 dark:text-gray-500">Buy Box: 45% | Margin: 18%</div>
//                     </div>
//                     <div className="flex items-center justify-center">
//                       <ArrowRight className="w-6 h-6 text-green-600" />
//                     </div>
//                     <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-400 dark:border-green-600 rounded-lg p-4 animate-pulse">
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="text-sm font-medium text-green-700 dark:text-green-400">AI Recommended</span>
//                         <span className="text-2xl font-bold text-green-700 dark:text-green-400">₹1,349</span>
//                       </div>
//                       <div className="text-xs text-green-600 dark:text-green-500 font-semibold">Buy Box: 78% ↑ | Margin: 22% ↑</div>
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-3 pt-4">
//                     <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-3 text-center">
//                       <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Revenue Impact</div>
//                       <div className="text-xl font-bold text-green-600">+32%</div>
//                     </div>
//                     <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 rounded-lg p-3 text-center">
//                       <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Profit Impact</div>
//                       <div className="text-xl font-bold text-emerald-600">+18%</div>
//                     </div>
//                   </div>
//                   <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-lg">
//                     Apply Recommended Price →
//                   </Button>
//                 </div>
//                 <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl px-4 py-2 shadow-xl">
//                   <p className="text-white font-bold text-sm flex items-center gap-1"><Sparkles className="w-4 h-4" /> AI Optimized</p>
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
//               Why Most Sellers <br /><span className="text-red-600">Leave Money on the Table</span>
//             </h2>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {[
//               { icon: <Calculator className="w-8 h-8" />, title: "Guessing prices based on gut feeling", color: "from-red-500 to-orange-500" },
//               { icon: <TrendingDown className="w-8 h-8" />, title: "Panic discounting kills margins", color: "from-orange-500 to-yellow-500" },
//               { icon: <Shield className="w-8 h-8" />, title: "Losing Buy Box to cheaper competitors", color: "from-yellow-500 to-orange-500" },
//               { icon: <Percent className="w-8 h-8" />, title: "Overpricing = zero sales", color: "from-orange-500 to-red-500" }
//             ].map((pain, i) => (
//               <div key={i} className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-green-400 hover:shadow-lg transition-all group">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>{pain.icon}</div>
//                 <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{pain.title}</p>
//               </div>
//             ))}
//           </div>
//           <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-400 dark:border-red-600 rounded-3xl p-8 text-center shadow-lg">
//             <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
//             <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Wrong pricing costs sellers <span className="text-red-600">15-35% of potential revenue</span></p>
//             <p className="text-gray-700 dark:text-gray-300 text-lg">Every day, across categories.</p>
//           </div>
//           <div className="mt-12 grid md:grid-cols-2 gap-8">
//             <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-2xl p-8 text-center">
//               <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4"><X className="w-10 h-10 text-white" /></div>
//               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Manual Pricing</h3>
//               <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">Guesswork + delayed reactions = lost profit</p>
//               <div className="space-y-2 text-left">
//                 {["No data-driven insights", "Emotional pricing decisions", "Constant monitoring needed"].map((item, i) => (
//                   <div key={i} className="flex items-start gap-2">
//                     <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
//                     <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-2xl p-8 text-center">
//               <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"><Check className="w-10 h-10 text-white" /></div>
//               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AI Optimization</h3>
//               <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">Smart pricing = maximum profit + sales</p>
//               <div className="space-y-2 text-left">
//                 {["AI analyzes market dynamics", "Data-driven recommendations", "Automated price optimization"].map((item, i) => (
//                   <div key={i} className="flex items-start gap-2">
//                     <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
//                     <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section id="how-it-works" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">How AI Price Optimization Works</h2>
//             <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
//               Insydz AI analyzes thousands of data points every hour to recommend the perfect price —
//               <span className="text-green-700 font-semibold"> balancing competitiveness, margins, and Buy Box probability.</span>
//             </p>
//           </div>
//           <div className="relative">
//             <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 -translate-y-1/2"></div>
//             <div className="grid lg:grid-cols-4 gap-8 relative">
//               {[
//                 { step: "1", title: "AI scans market data", detail: "Competitor prices, demand, seasonality", icon: <Eye className="w-12 h-12" /> },
//                 { step: "2", title: "Analyzes Buy Box dynamics", detail: "Win probability at different price points", icon: <Brain className="w-12 h-12" /> },
//                 { step: "3", title: "Calculates optimal price", detail: "Maximum profit while staying competitive", icon: <Calculator className="w-12 h-12" /> },
//                 { step: "4", title: "Recommends & alerts you", detail: "Dashboard + WhatsApp notifications", icon: <Bell className="w-12 h-12" /> }
//               ].map((item, i) => (
//                 <div key={i} className="bg-white dark:bg-gray-800 border-2 border-green-300 dark:border-green-700 rounded-2xl p-6 text-center relative z-10 shadow-lg hover:shadow-xl transition-all">
//                   <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-black text-white">{item.step}</div>
//                   <div className="bg-green-100 dark:bg-green-900/20 rounded-xl p-4 mb-4 text-green-600">{item.icon}</div>
//                   <p className="text-gray-900 dark:text-white font-semibold mb-2">{item.title}</p>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">{item.detail}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="text-center mt-12">
//             <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group">
//               🎯 Get AI Price Recommendations Free
//               <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* What This Feature Helps You Do */}
//       <section className="py-20 px-4 bg-white dark:bg-gray-950">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">What You Can Do with Price Optimization</h2>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               { icon: <DollarSign />, title: "Increase profit per sale", detail: "AI finds the highest profitable price", color: "text-green-600" },
//               { icon: <ShoppingCart />, title: "Win more Buy Boxes", detail: "Competitive without panic discounting", color: "text-blue-600" },
//               { icon: <TrendingUp />, title: "Boost revenue 15-30%", detail: "Smart pricing = more conversions", color: "text-emerald-600" },
//               { icon: <Shield />, title: "Protect margins automatically", detail: "Set floors, AI respects them", color: "text-purple-600" },
//               { icon: <Award />, title: "Beat competitors strategically", detail: "Data wins over guesswork", color: "text-orange-600" },
//               { icon: <Maximize2 />, title: "Scale without manual work", detail: "AI optimizes 24/7", color: "text-indigo-600" }
//             ].map((outcome, i) => (
//               <div key={i} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className={`w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center ${outcome.color}`}>{outcome.icon}</div>
//                   <ThumbsUp className="w-6 h-6 text-green-500" />
//                 </div>
//                 <p className="text-gray-900 dark:text-white font-semibold leading-relaxed mb-1">{outcome.title}</p>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">{outcome.detail}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Feature Depth */}
//       <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Advanced AI Pricing Intelligence</h2>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { feature: "Dynamic Price Recommendations", benefit: "AI adjusts to market changes hourly", icon: <RefreshCw className="w-8 h-8" />, color: "from-blue-500 to-cyan-500" },
//               { feature: "Buy Box Win Probability", benefit: "Know your chances before pricing", icon: <Percent className="w-8 h-8" />, color: "from-purple-500 to-pink-500" },
//               { feature: "Margin Protection Rules", benefit: "Never sell below profit targets", icon: <Shield className="w-8 h-8" />, color: "from-red-500 to-orange-500" },
//               { feature: "Competitor Price Analysis", benefit: "Beat them smartly, not blindly", icon: <Eye className="w-8 h-8" />, color: "from-green-500 to-emerald-500" },
//               { feature: "Seasonal Demand Detection", benefit: "Optimize for high & low seasons", icon: <LineChart className="w-8 h-8" />, color: "from-orange-500 to-red-500" },
//               { feature: "A/B Price Testing", benefit: "Test prices, find winners", icon: <BarChart3 className="w-8 h-8" />, color: "from-indigo-500 to-purple-500" }
//             ].map((item, i) => (
//               <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-green-400 hover:shadow-xl transition-all">
//                 <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>{item.icon}</div>
//                 <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.feature}</h3>
//                 <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
//                   <ArrowRight className="w-4 h-4 text-green-600" />{item.benefit}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Comparison Table */}
//       <section className="py-20 px-4 bg-white dark:bg-gray-950">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Manual Pricing vs AI Optimization</h2>
//           </div>
//           <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gray-100 dark:bg-gray-800">
//                   <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-300">Aspect</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 dark:text-gray-300">Manual Pricing</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20">AI Optimization</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {[
//                   { aspect: "Data Analysis", manual: "Gut feeling, limited data", insydz: "Thousands of data points analyzed" },
//                   { aspect: "Speed", manual: "Hours to days", insydz: "Recommendations in seconds" },
//                   { aspect: "Accuracy", manual: "Hit or miss", insydz: "Proven 15-30% revenue increase" },
//                   { aspect: "Margin Safety", manual: "Manual calculations, errors", insydz: "Automated margin protection" },
//                   { aspect: "Scalability", manual: "Impossible for 100+ products", insydz: "Works for unlimited products" }
//                 ].map((row, i) => (
//                   <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
//                     <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{row.aspect}</td>
//                     <td className="px-6 py-4 text-center">
//                       <div className="flex items-center justify-center gap-2">
//                         <X className="w-5 h-5 text-red-500" />
//                         <span className="text-sm text-gray-600 dark:text-gray-400">{row.manual}</span>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 text-center bg-green-50 dark:bg-green-900/20">
//                       <div className="flex items-center justify-center gap-2">
//                         <Check className="w-5 h-5 text-green-600" />
//                         <span className="text-sm text-gray-900 dark:text-white font-medium">{row.insydz}</span>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="text-center mt-8">
//             <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl">
//               🎯 Switch to AI Pricing
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* PLG Entry Point */}
//       <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Start Free. Optimize Prices Instantly.</h2>
//           </div>
//           <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-300 dark:border-green-700 rounded-3xl p-8 shadow-xl">
//             <div className="text-center mb-8">
//               <div className="inline-flex items-baseline gap-2 mb-4">
//                 <span className="text-6xl font-black text-green-600">₹0</span>
//                 <span className="text-2xl text-gray-600 dark:text-gray-400">/ Forever</span>
//               </div>
//               <p className="text-lg text-gray-700 dark:text-gray-300">Free Plan Includes:</p>
//             </div>
//             <div className="grid md:grid-cols-2 gap-4 mb-8">
//               {["AI price recommendations for limited products", "Buy Box probability analysis", "Margin protection settings", "Basic optimization alerts"].map((feature, i) => (
//                 <div key={i} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-4">
//                   <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
//                   <span className="text-gray-900 dark:text-white font-medium">{feature}</span>
//                 </div>
//               ))}
//             </div>
//             <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6">
//               <p className="text-sm text-gray-700 dark:text-gray-300">
//                 <span className="font-bold text-green-600">Upgrade Teaser:</span> Unlock automated price changes, unlimited products, and advanced A/B testing on paid plans.
//               </p>
//             </div>
//             <div className="text-center">
//               <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl">
//                 🎯 Start AI Price Optimization Free
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Who This Feature Is For */}
//       <section className="py-20 px-4 bg-white dark:bg-gray-950">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Is AI Price Optimization Right for You?</h2>
//           </div>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-2xl p-8">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"><Check className="w-6 h-6 text-white" /></div>
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Perfect For</h3>
//               </div>
//               <ul className="space-y-4">
//                 {["Sellers in competitive categories", "Brands protecting margins", "High-volume sellers (50+ SKUs)", "Agencies managing multiple accounts", "Sellers tired of manual pricing"].map((item, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-300 dark:border-orange-700 rounded-2xl p-8">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center"><AlertCircle className="w-6 h-6 text-white" /></div>
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Less Useful For</h3>
//               </div>
//               <ul className="space-y-4">
//                 {["Fixed-price/MRP-only products", "One-time sellers with 1-2 products", "Sellers who never check analytics"].map((item, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Price Optimization – FAQs</h2>
//           </div>
//           <div className="space-y-4">
//             {faqs.map((faq, i) => (
//               <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-green-400 transition-all">
//                 <button onClick={() => toggleFaq(i)} className="w-full px-6 py-4 flex items-center justify-between text-left">
//                   <span className="font-bold text-gray-900 dark:text-white pr-4">{faq.question}</span>
//                   <ChevronDown className={`w-5 h-5 text-green-600 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
//                 </button>
//                 {openFaq === i && <div className="px-6 pb-4 text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</div>}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Related Features */}
//       <section className="py-20 px-4 bg-white dark:bg-gray-950">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Related Features</h2>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               { title: "Competitor Price Tracking", icon: <TrendingDown />, color: "from-orange-500 to-red-500", route: "/features/competitor-price-tracking-feature" },
//               { title: "Review Analytics", icon: <MessageCircle />, color: "from-purple-500 to-pink-500", route: "/features/review-analytics-feature" },
//               { title: "Keyword & Rank Tracking", icon: <Search />, color: "from-blue-500 to-cyan-500", route: "/features/keyword-rank-tracking-feature" },
//               { title: "Product Research", icon: <Target />, color: "from-indigo-500 to-purple-500", route: "/features/product-research-feature" },
//               { title: "AI Recommendations", icon: <Sparkles />, color: "from-green-500 to-emerald-500", route: "/features/ai-recommendations-feature" },
//               { title: "WhatsApp Alerts", icon: <Bell />, color: "from-emerald-500 to-green-500", route: "/features/whatsapp-alerts-feature" }
//             ].map((feature, i) => (
//               <div key={i} onClick={() => feature.route && setLocation(feature.route)} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all cursor-pointer group">
//                 <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>{feature.icon}</div>
//                 <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 transition-colors">{feature.title}</h3>
//                 <ArrowRight className="w-5 h-5 text-green-600 mt-2 group-hover:translate-x-1 transition-transform" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
//             Stop Guessing Prices.
//             <br />
//             <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Let AI Maximize Your Profit.</span>
//           </h2>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group">
//               🎯 Start AI Pricing Free
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//             <Button onClick={() => setLocation("/")} size="lg" variant="outline" className="border-2 border-green-600 text-green-700 dark:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 font-semibold px-12 py-6 text-lg rounded-full">
//               Explore All Features →
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Sticky Mobile CTA */}
//       <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t-2 border-green-300 dark:border-green-700 p-4 shadow-2xl z-40">
//         <Button onClick={handleGetStarted} className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 rounded-full shadow-xl">
//           🎯 Start AI Pricing Free
//         </Button>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-8 mb-8">
//             <div>
//               <div className="flex items-center space-x-3 mb-4">
//                 <img src="/logo.png" alt="Insydz Logo" className="w-10 h-10 rounded-xl object-contain" />
//                 <span className="text-lg font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Insydz</span>
//               </div>
//               <p className="text-gray-400 text-sm">AI-powered intelligence for Indian sellers</p>
//             </div>
//             <div>
//               <h4 className="font-bold mb-4 text-white">Quick Links</h4>
//               <div className="space-y-2">
//                 <button onClick={() => setLocation("/")} className="block text-gray-400 hover:text-green-400 transition-colors text-sm">Home</button>
//                 <button onClick={() => setLocation("/pricing")} className="block text-gray-400 hover:text-green-400 transition-colors text-sm">Pricing</button>
//                 <button onClick={handleGetStarted} className="block text-gray-400 hover:text-green-400 transition-colors text-sm">Login</button>
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
//             <p className="text-gray-500 text-sm">© 2025 Insydz. All rights reserved. Built for Indian sellers 🇮🇳</p>
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
  Bell, TrendingUp, TrendingDown, Shield,
  BarChart3, ChevronRight, AlertCircle,
  DollarSign, X, Check, RefreshCw, Eye,
  Sparkles, ChevronDown, LineChart, Percent,
  ShoppingCart, Award, Calculator, Maximize2,
  Brain, ThumbsUp, MessageCircle, Search,
  Package, Clock, Users, Menu, Sun, Moon,
  ShoppingBag, Store, Briefcase, Code, Globe,
  Trophy, ArrowLeft, BookOpen, Video, FileText,
  Flame, Presentation,
  LayoutGrid
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── SEO METADATA ────────────────────────────────────────────────────────────
// Page URL:        https://insydz.com/features/price-optimization-feature
// Meta Title:      AI Price Optimization Software for Amazon India & Flipkart — Insydz
// Meta Description: AI-powered price optimization software for Amazon India and Flipkart sellers.
//                  Win Buy Box, protect margins, and boost revenue 15-30% — without manual repricing.
//                  Free plan available. No credit card.
// Primary Keyword: Price optimization software
// Secondary:       Price optimization tool, Amazon price optimizer, dynamic pricing platform,
//                  ecommerce price optimization tool, AI price optimization tool,
//                  Flipkart price optimization tool, Amazon price optimization software
// Long-tail:       AI price optimization for Amazon India sellers, best price optimization tool
//                  for Flipkart, how to win Buy Box on Amazon India, dynamic pricing software
//                  India ecommerce
// Schema Required: FAQPage + SoftwareApplication + HowTo
// Page accent:     Green (#16A34A) — distinct from Review Analytics (violet) and Price Tracking (orange)
// ─────────────────────────────────────────────────────────────────────────────

// ─── SCHEMA MARKUP (inject in <head> via Helmet or equivalent) ───────────────
export const schemaFAQPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does AI price optimization work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Insydz AI scans competitor prices, demand signals, Buy Box win probability at different price points, seasonal demand multipliers, and your margin floor — every hour, then recommends the optimal price via dashboard and WhatsApp."
      }
    },
    {
      "@type": "Question",
      "name": "Will I lose the Buy Box if prices are optimized?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — Insydz AI maximizes Buy Box win probability while protecting your margin floor. Indian sellers saw Buy Box rates rise from 51% to 74% over 45 days with Insydz."
      }
    },
    {
      "@type": "Question",
      "name": "Is price optimization free for Amazon India sellers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Insydz has a permanent free plan with AI price recommendations, Buy Box probability, and margin protection. No credit card required."
      }
    }
  ]
};

export const schemaSoftwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Insydz — AI Price Optimization Software for Indian Sellers",
  "url": "https://insydz.com/features/price-optimization-feature",
  "description": "AI-powered price optimization software for Amazon India and Flipkart sellers. Win Buy Box, protect margins, boost revenue 15-30%. Hourly recommendations via WhatsApp. Built for India.",
  "applicationCategory": "BusinessApplication",
  "offers": [
    { "@type": "Offer", "price": "0", "priceCurrency": "INR", "name": "Free — permanent, limited products" },
    { "@type": "Offer", "price": "1999", "priceCurrency": "INR", "billingIncrement": "P1M", "name": "Basic" },
    { "@type": "Offer", "price": "2999", "priceCurrency": "INR", "billingIncrement": "P1M", "name": "Premium" }
  ]
};

export const schemaHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Optimize Product Prices on Amazon India Automatically",
  "step": [
    { "@type": "HowToStep", "position": "1", "name": "Connect your Amazon India or Flipkart listings", "text": "Add your ASINs or connect Seller Central. Insydz imports competitor pricing and demand data automatically." },
    { "@type": "HowToStep", "position": "2", "name": "Set your margin floor", "text": "Enter your cost price. Insydz calculates your true floor including Amazon.in fees, GST, and fulfilment costs." },
    { "@type": "HowToStep", "position": "3", "name": "Review your first AI price recommendation", "text": "The dashboard shows your current price, recommended price, and Buy Box win probability at each level." },
    { "@type": "HowToStep", "position": "4", "name": "Apply and monitor via WhatsApp", "text": "Apply the recommendation with one click. Receive hourly WhatsApp alerts when market conditions shift and a new recommendation is ready." }
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
    { name: "Track Competitor Prices", icon: <TrendingUp className="w-4 h-4" />, route: "/use-cases/track-competitor-prices" },
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
    { name: "Our Vision", icon: <Presentation className="w-4 h-4" />, route: "/about/our-vision" },
    { name: "Careers", icon: <Globe className="w-4 h-4" />, route: "/about/careers" },
    { name: "Contact Us", icon: <Users className="w-4 h-4" />, route: "/about/contact-us" },
  ],
};
// ─────────────────────────────────────────────────────────────────────────────

export default function PriceOptimizationFeaturePage() {
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

  // Section 2: Pain point cards with supporting copy
  const painPoints = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Guessing prices based on gut feeling",
      description: "Without data on competitor movements, Buy Box probability, or demand velocity, every pricing decision is a bet.",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Panic discounting kills margins",
      description: "Sellers who see Buy Box drop immediately cut price — often below their own cost, especially after Amazon fees.",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Losing Buy Box to a competitor who priced ₹10 smarter",
      description: "The Buy Box isn't won by the cheapest seller. It's won by the seller who understands the algorithm.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Percent className="w-8 h-8" />,
      title: "Overpricing = zero sales",
      description: "Hold too high during a demand dip and you're invisible. No clicks, no sales, no data — and a ranking that slides.",
      color: "from-orange-500 to-red-500",
    },
  ];

  // Section 4: Outcome cards
  const outcomes = [
    { icon: <DollarSign />, title: "Increase profit per sale", detail: "AI finds the highest profitable price point the market will bear — without losing sales velocity.", color: "text-green-600" },
    { icon: <ShoppingCart />, title: "Win more Buy Boxes", detail: "Competitive without panic discounting — because the AI knows exactly how low to go and no lower.", color: "text-blue-600" },
    { icon: <TrendingUp />, title: "Boost revenue 15–30%", detail: "Smart pricing means more conversions at better margins. Revenue compounds faster than manual pricing.", color: "text-emerald-600" },
    { icon: <Shield />, title: "Protect margins automatically", detail: "Set your floor price once. AI respects it — always. Never sell below your profit target again.", color: "text-purple-600" },
    { icon: <Award />, title: "Beat competitors strategically", detail: "Data wins over guesswork. Know when a competitor has priced themselves out of the Buy Box.", color: "text-orange-600" },
    { icon: <Maximize2 />, title: "Scale without manual work", detail: "AI optimizes pricing 24/7 — for 10 products or 500. Your time scales. The results don't drop.", color: "text-indigo-600" },
  ];

  // Section 5: India-specific pain points
  const indiaPains = [
    {
      title: "Most Indian sellers price by watching one competitor",
      description: "The real Buy Box is won by understanding all active competitors, demand velocity, your category's price elasticity, and Buy Box probability — simultaneously. Watching one ASIN manually misses 80% of what's actually driving the algorithm.",
    },
    {
      title: "Festive season pricing is the hardest to get right manually",
      description: "During Diwali, Big Billion Days, and Great Indian Festival, demand multipliers shift category dynamics hourly. A price that wins Buy Box at 2pm can lose it by 6pm as competitors stack discounts. Manual pricing can't keep pace with hourly shifts.",
    },
    {
      title: "Margin floor calculations are done wrong — or not at all",
      description: "Most sellers know their purchase cost. Few correctly account for Amazon commission (8–15%), GST implications, fulfilment fees, return rates, and ad spend before setting a margin floor. AI does all of this automatically — in INR, every time.",
    },
    {
      title: "Global pricing tools don't understand Flipkart or Indian demand signals",
      description: "Western dynamic pricing platforms are calibrated for Amazon.com and European retail. They don't model Flipkart Buy Box mechanics, Indian festive demand multipliers, or INR fee structures. An Indian seller using them is optimizing against the wrong market.",
    },
  ];

  // Section 6: Advanced AI intelligence modules
  const intelligenceModules = [
    { feature: "Dynamic Price Recommendations", result: "AI adjusts to market changes hourly — not when you remember to check", icon: <RefreshCw className="w-8 h-8" />, color: "from-blue-500 to-cyan-500" },
    { feature: "Buy Box Win Probability", result: "See exact Buy Box win probability at any price point before committing", icon: <Percent className="w-8 h-8" />, color: "from-purple-500 to-pink-500" },
    { feature: "Margin Protection Rules", result: "Set floor once. AI respects it unconditionally — even during a 2am flash sale", icon: <Shield className="w-8 h-8" />, color: "from-red-500 to-orange-500" },
    { feature: "Competitor Price Analysis", result: "Track all active competitors simultaneously — not just the one you last checked", icon: <Eye className="w-8 h-8" />, color: "from-green-500 to-emerald-500" },
    { feature: "Seasonal Demand Detection", result: "Diwali, Big Billion Days, GIF — demand multipliers built into every recommendation", icon: <LineChart className="w-8 h-8" />, color: "from-orange-500 to-red-500" },
    { feature: "A/B Price Testing", result: "Test two price points simultaneously — find the winner with data, not instinct", icon: <BarChart3 className="w-8 h-8" />, color: "from-indigo-500 to-purple-500" },
  ];

  // Section 8: Full comparison table rows
  const comparisonRows = [
    { aspect: "Data Analysis", manual: "Gut feeling, limited data", ai: "Thousands of data points analyzed hourly" },
    { aspect: "Speed", manual: "Hours to days", ai: "Recommendations in seconds" },
    { aspect: "Accuracy", manual: "Hit or miss", ai: "Proven 15–30% revenue increase" },
    { aspect: "Margin Safety", manual: "Manual calculations, errors common", ai: "Automated margin protection — floor never breached" },
    { aspect: "Scalability", manual: "Impossible for 100+ products", ai: "Works for unlimited products simultaneously" },
    { aspect: "Festive Demand", manual: "Priced the same as off-season", ai: "Demand multipliers built in — Diwali, BBD, GIF" },
    { aspect: "Flipkart Support", manual: "Separate process, usually skipped", ai: "Amazon India + Flipkart in one recommendation" },
  ];

  // Section 10: India-first table
  const indiaFirstFeatures = [
    { feature: "Amazon India + Flipkart optimization", meaning: "Price recommendations account for both marketplace Buy Box mechanics simultaneously." },
    { feature: "Indian festive demand multipliers", meaning: "Diwali, Big Billion Days, Great Indian Festival, Republic Day — built into every hourly recommendation." },
    { feature: "Amazon.in fee structure built in", meaning: "Commission rates, fulfilment fees, GST, and return rates factored into every margin floor calculation — in INR." },
    { feature: "WhatsApp recommendations, not dashboards", meaning: "Price recommendations arrive on WhatsApp with suggested price, Buy Box probability, and one-tap apply." },
  ];

  // Section 11: Testimonials
  const testimonials = [
    {
      quote: "Before Insydz I was repricing manually twice a day during Big Billion Days. I was always reactive — seeing what competitors did and matching it. Insydz showed me the Buy Box win probability at each price before I moved. I stopped following and started leading.",
      name: "Sanjay M.",
      role: "Electronics accessories, Hyderabad · Amazon India + Flipkart",
    },
    {
      quote: "The margin protection feature alone is worth the subscription. I used to panic discount below my own cost during sale events without realising it. Insydz set the floor, and now I know every recommendation is already profitable before I apply it.",
      name: "Divya R.",
      role: "D2C home decor brand, Jaipur · Amazon India",
    },
    {
      quote: "We manage 22 seller accounts. Manual pricing at scale was impossible — especially across Amazon and Flipkart simultaneously. Our clients average Buy Box rate went from 51% to 74% in 45 days.",
      name: "Karan T.",
      role: "E-commerce agency, Delhi · 22 seller accounts",
    },
  ];

  // Section 13: SEO-optimised FAQs from docx
  const faqs = [
    {
      question: "How does AI price optimization work?",
      answer: "Insydz AI scans competitor prices, demand signals, Buy Box win probability at different price points, seasonal demand multipliers, and your margin floor — every hour. It then recommends the price that maximizes revenue and Buy Box probability while staying above your profit threshold. The recommendation appears on your dashboard and as a WhatsApp notification. The AI recalculates automatically as market conditions change — no manual intervention required.",
    },
    {
      question: "Will I lose the Buy Box if prices are optimized?",
      answer: "No — the AI is specifically designed to maximize Buy Box win probability, not just lower your price. Every recommendation includes the predicted Buy Box probability at that price point. In testing with Indian sellers, Insydz-optimized pricing increased Buy Box win rates from an average of 51% to 74% over 45 days — while maintaining or improving margins — because the AI found the optimal competitive position rather than blindly following competitors down.",
    },
    {
      question: "Can I set minimum profit margins?",
      answer: "Yes — margin floor protection is core to how Insydz price optimization works. You set your minimum acceptable margin or absolute floor price per product. Insydz automatically accounts for Amazon.in commission, fulfilment fees, and your purchase cost when calculating this floor. No recommendation will ever suggest a price below your floor — even during a competitor price war or a flash sale at 2am when you're asleep.",
    },
    {
      question: "Does this work for seasonal products?",
      answer: "Yes — Indian festive demand multipliers (Diwali, Big Billion Days, Great Indian Festival, Republic Day, Holi) are built into every hourly recommendation. During high-demand seasons, the AI recognizes that higher prices can still win the Buy Box because all sellers are operating at elevated demand — and recommends the most profitable price accordingly, not a conservative one based on off-season dynamics.",
    },
    {
      question: "Is price optimization available on the free plan?",
      answer: "Yes. The free plan includes AI price recommendations for a limited number of products, Buy Box probability analysis, margin protection settings, and basic optimization alerts — permanently, with no credit card required and no expiry date. Paid plans (₹1,999/month and ₹2,999/month) unlock automated price changes, unlimited products, A/B price testing, and advanced seasonal demand detection.",
    },
    {
      question: "How is this different from competitor price tracking?",
      answer: "Competitor price tracking tells you what competitors are charging. AI price optimization tells you what you should charge — accounting for your margin, Buy Box probability, demand signals, and competitive position simultaneously. Price tracking is reactive. Price optimization is proactive. For Indian sellers on Amazon India and Flipkart, both are useful — but optimization drives revenue. Tracking alone does not.",
    },
  ];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </button>
              <div className="flex items-center space-x-1 group cursor-pointer" onClick={() => setLocation("/")}>
                <div className="relative">
                  <img src="/logo.png" alt="Insydz Logo" className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Insydz</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-2" ref={dropdownRef}>
              <button
                onClick={() => setLocation("/")}
                className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all"
              >
                Home
              </button>

              {(["Solutions", "Use Cases", "Features", "Free Tools", "Compare", "Resources", "About"] as const).map((menuKey) => (
                <div className="relative" key={menuKey}>
                  <button
                    onMouseEnter={() => setActiveDropdown(menuKey)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1 ${
                      menuKey === "Features"
                        ? "text-green-600 dark:text-green-500 font-semibold hover:bg-green-50 dark:hover:bg-green-900/20"
                        : "text-gray-700 dark:text-gray-300 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20"
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
                          className="w-full px-4 py-3 text-left hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors flex items-center gap-3 group"
                        >
                          <span className="text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                          <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 flex-1">{item.name}</span>
                          {item.badge && (
                            <span className="text-xs bg-gradient-to-r from-green-600 to-emerald-600 text-white px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <button
                onClick={() => setLocation("/pricing")}
                className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 font-medium rounded-lg hover:bg-green-50 transition-all"
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
                className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg font-medium"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>

              {(["Solutions", "Use Cases", "Features", "Free Tools", "Compare", "Resources", "About"] as const).map((menuKey) => (
                <div key={menuKey}>
                  <button
                    onClick={() => toggleMobileMenu(menuKey)}
                    className={`flex items-center justify-between w-full px-4 py-2 rounded-lg font-medium ${
                      menuKey === "Features"
                        ? "text-green-600 dark:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20"
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
                          className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg"
                        >
                          {item.icon}
                          {item.name}
                          {item.badge && <span className="ml-auto text-xs bg-green-600 text-white px-1.5 py-0.5 rounded-full">{item.badge}</span>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <button
                onClick={() => setLocation("/pricing")}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg font-medium"
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
      {/* H1 targets "price optimization software" keyword in first 100 words */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 rounded-full px-4 py-2">
                <DollarSign className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">Feature Spotlight</span>
              </div>

              {/* H1 — primary keyword "price optimization software" in opening copy */}
              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
                AI Price Optimization —
                <br />
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">
                  Maximize Profit
                </span>
                <br />
                Without Losing Sales
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                AI-powered <strong>price optimization software</strong> that finds the perfect price
                point for every product, every hour. Win Buy Box, protect margins, and increase
                revenue — all at once.{" "}
                <span className="text-green-700 dark:text-green-400 font-semibold">
                  No manual repricing. No gut feeling. No panic discounting.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-green-500/50 transition-all group"
                >
                  💰 Start Optimizing Prices Free
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                  size="lg"
                  variant="outline"
                  className="border-2 border-green-600 text-green-700 dark:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 font-semibold px-8 py-6 text-lg rounded-full"
                >
                  See How It Works →
                </Button>
              </div>

              {/* Trust strip */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                {["AI-powered recommendations", "Margin protection built-in", "Buy Box optimization"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: AI Price Recommendation Widget */}
            <div className="relative">
              <div className="relative bg-white dark:bg-gray-900 border-2 border-green-200 dark:border-green-800 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="font-bold text-gray-900 dark:text-white">AI Price Recommendation</h3>
                    <span className="text-xs bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                      <Brain className="w-3 h-3" /> AI Active
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Current Price</span>
                        <span className="text-2xl font-bold text-gray-700 dark:text-gray-300">₹1,499</span>
                      </div>
                      <div className="text-xs text-gray-500">Buy Box: 45% | Margin: 18%</div>
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-400 dark:border-green-600 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-green-700 dark:text-green-400">AI Recommended</span>
                        <span className="text-2xl font-bold text-green-700 dark:text-green-400">₹1,349</span>
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-500 font-semibold">Buy Box: 78% ↑ | Margin: 22% ↑</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-3 text-center">
                      <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Revenue Impact</div>
                      <div className="text-xl font-bold text-green-600">+32%</div>
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 rounded-lg p-3 text-center">
                      <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Profit Impact</div>
                      <div className="text-xl font-bold text-emerald-600">+18%</div>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-lg">
                    Apply Recommended Price →
                  </Button>
                </div>
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl px-4 py-2 shadow-xl">
                  <p className="text-white font-bold text-sm flex items-center gap-1">
                    <Sparkles className="w-4 h-4" /> AI Optimized
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 2: WHY MOST SELLERS LEAVE MONEY ON THE TABLE ───────────── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              Why Most Sellers <br />
              <span className="text-red-600">Leave Money on the Table</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Wrong pricing isn't just about being too expensive. It's about every rupee of margin
              lost to panic discounting, every Buy Box lost to a competitor who priced ₹10 smarter,
              and every sale missed because you held the price too high during a demand surge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {painPoints.map((pain, i) => (
              <div
                key={i}
                className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-green-400 hover:shadow-lg transition-all group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
                  {pain.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm leading-snug">{pain.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{pain.description}</p>
              </div>
            ))}
          </div>

          {/* Stat callout */}
          <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-400 dark:border-red-600 rounded-3xl p-8 text-center shadow-lg mb-12">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Wrong pricing costs sellers{" "}
              <span className="text-red-600">15–35% of potential revenue</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400">Every day, across every category on Amazon India and Flipkart.</p>
          </div>

          {/* Manual vs AI comparison cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <X className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Manual Pricing</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Guesswork + delayed reactions = lost profit</p>
                </div>
              </div>
              <div className="space-y-3">
                {["No data-driven insights", "Emotional pricing decisions", "Constant manual monitoring needed", "Can't keep pace with festive demand shifts"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI Optimization</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Smart pricing = maximum profit + sales</p>
                </div>
              </div>
              <div className="space-y-3">
                {["AI analyzes market dynamics hourly", "Data-driven recommendations", "Automated price optimization 24/7", "Indian festive demand multipliers built in"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 3: HOW AI PRICE OPTIMIZATION WORKS (4-STEP FLOW) ───────── */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              How AI Price Optimization Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Insydz AI analyzes thousands of data points every hour to recommend the perfect price —
              balancing competitiveness, margins, and{" "}
              <a href="/features/price-optimization-feature#buybox" className="text-green-600 underline">
                Buy Box win probability
              </a>.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 -translate-y-1/2 z-0" />
            <div className="grid lg:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "1", title: "AI scans market data", detail: "Competitor prices, demand signals, and seasonality — updated every hour, not once a day.", icon: <Eye className="w-10 h-10" /> },
                { step: "2", title: "Analyzes Buy Box dynamics", detail: "Win probability calculated at multiple price points — showing the optimal competitive position.", icon: <Brain className="w-10 h-10" /> },
                { step: "3", title: "Calculates optimal price", detail: "Maximum profit while staying competitive — margin floor built into every calculation.", icon: <Calculator className="w-10 h-10" /> },
                { step: "4", title: "Recommends & alerts you", detail: "Dashboard recommendation + WhatsApp notification — act in seconds from anywhere.", icon: <Bell className="w-10 h-10" /> },
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 border-2 border-green-300 dark:border-green-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-black text-white">
                    {item.step}
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/20 rounded-xl p-4 mb-4 text-green-600 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <p className="text-gray-900 dark:text-white font-bold mb-2">{item.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
            >
              💰 Get AI Price Recommendations Free
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 4: WHAT YOU CAN DO WITH PRICE OPTIMIZATION (6 OUTCOMES) ── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
              What You Can Do with Price Optimization
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Six outcomes Indian sellers get from switching to AI-powered pricing — in the first 30 days.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center ${outcome.color}`}>
                    {outcome.icon}
                  </div>
                  <ThumbsUp className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{outcome.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{outcome.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 5: WHY INDIAN SELLERS STRUGGLE WITH PRICING ────────────── */}
      {/* Internal links: /solutions/flipkart-sellers, /features/price-optimization-feature#margin */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Why Indian Sellers Struggle with Pricing — Even When They Have the Right Product
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A seller with a 4.5-star product, good reviews, and a competitive landing cost can
              still lose 30% of potential revenue to pricing decisions made on gut feel. Here's why
              it keeps happening.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {indiaPains.map((pain, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-green-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0 mt-1">
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

      {/* ─── SECTION 6: ADVANCED AI PRICING INTELLIGENCE (6 MODULES) ────────── */}
      {/* Internal link: /features/price-optimization-feature#buybox */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Advanced AI Pricing Intelligence
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Six intelligence modules working simultaneously — so every price recommendation is
              built on the full picture, not a single data point.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {intelligenceModules.map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-green-400 hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.feature}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2 leading-relaxed">
                  <ArrowRight className="w-4 h-4 text-green-600 flex-shrink-0" /> {item.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 7: REAL SELLER SCENARIO — RIYA'S DIWALI ────────────────── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
              What Most Price Optimization Tools Don't Tell You
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Most <strong>ecommerce price optimization tools</strong> optimize for the Buy Box.
              Insydz optimizes for the Buy Box <em>and</em> your margin — simultaneously. There's a
              difference worth ₹2.4L.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden shadow-xl mb-8">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4">
              <h3 className="text-white font-bold text-lg">
                Riya's Diwali Pricing — The ₹10 Decision That Changed Everything
              </h3>
              <p className="text-green-200 text-sm">Fashion Accessories, Amazon India + Flipkart</p>
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
                    { scenario: "Product", without: "Ethnic jewellery set at ₹1,499. 4.3 stars, 180+ reviews. Diwali approaching.", with: "Same product, same season" },
                    { scenario: "Pricing decision", without: "Dropped to ₹1,199 to stay competitive — ₹300/unit margin lost", with: "Insydz showed Buy Box at ₹1,349 was 74% — nearly same as ₹1,199 at 71%" },
                    { scenario: "What happened next", without: "Competitors matched. Price war to ₹999. Margin fell below cost after Amazon fees.", with: "Held ₹1,349. Margin protected. Competitors raced to the bottom around her." },
                    { scenario: "Diwali revenue", without: "Below cost at scale — unrecoverable during sale window", with: "₹21.6L Diwali revenue at 22% margin" },
                    { scenario: "The ₹150 difference per unit", without: "N/A", with: "1,600 units × ₹150 = ₹2,40,000 more revenue vs ₹1,199 pricing" },
                    { scenario: "Post-Diwali position", without: "Depleted margin, ranking fell after sale event", with: "Ranked #2 in category. Held position for next sale cycle." },
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
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-900 dark:text-white font-medium text-left">{row.with}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ROI callout */}
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-400 rounded-3xl p-8 text-center">
            <p className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Riya pays ₹2,999/month for Insydz. The single Diwali pricing decision returned
              ₹2,40,000 in recovered revenue — an{" "}
              <span className="text-green-600">80x return</span> on her monthly subscription in one
              sale season.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm italic">
              "The difference wasn't the price. It was knowing that ₹1,349 had 74% Buy Box win
              probability — nearly identical to ₹1,199 — before making the decision. That's what
              AI price optimization software does that gut instinct cannot."
            </p>
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 8: FULL COMPARISON TABLE ───────────────────────────────── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Manual Pricing vs AI Optimization
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              The honest comparison — every dimension that matters for an Indian marketplace seller
              trying to grow profitably.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase">Aspect</th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-red-600 uppercase">Manual Pricing</th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-green-600 uppercase bg-green-50 dark:bg-green-900/20">AI Optimization</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{row.aspect}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-start justify-center gap-2">
                        <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-600 dark:text-gray-400 text-left">{row.manual}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center bg-green-50 dark:bg-green-900/10">
                      <div className="flex items-start justify-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-900 dark:text-white font-medium text-left">{row.ai}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl group"
            >
              💰 Switch to AI Pricing
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 9: START FREE PLG BOX ──────────────────────────────────── */}
      {/* Internal link: /pricing */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Start Free. Optimize Prices Instantly.
            </h2>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-300 dark:border-green-700 rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-baseline gap-2 mb-2">
                <span className="text-6xl font-black text-green-600">₹0</span>
                <span className="text-2xl text-gray-600 dark:text-gray-400">/ Forever</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">Free Plan Includes:</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "AI price recommendations for limited products",
                "Buy Box probability analysis",
                "Margin protection settings",
                "Basic optimization alerts",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-white font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 mb-6 border border-green-200 dark:border-green-700">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-bold text-green-600">Upgrade:</span> Unlock automated price
                changes, unlimited products, and advanced A/B testing on paid plans —{" "}
                <a href="/pricing" className="text-green-600 underline">₹1,999/month and ₹2,999/month</a>.
              </p>
            </div>
            <div className="text-center">
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl"
              >
                💰 Start AI Price Optimization Free
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 10: INDIA-FIRST ADVANTAGE ──────────────────────────────── */}
      {/* Internal links: /solutions/flipkart-sellers, /use-cases/festive-trends */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
              How Insydz Price Optimization Is Built for India
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Global <strong>dynamic pricing platforms</strong> — Competera, PriceLabs, Intelligence
              Node — are powerful for Western retail. But they're not calibrated for{" "}
              <a href="/solutions/flipkart-sellers" className="text-green-600 underline">Flipkart Buy Box mechanics</a>,
              Indian festive demand, or INR margin calculations with Amazon.in's specific fee structure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {indiaFirstFeatures.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-green-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0 mt-1">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.feature}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.meaning}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 dark:bg-gray-800 rounded-3xl p-8 text-center">
            <p className="text-gray-300 text-lg">
              <span className="text-green-400 font-bold">What most ecommerce price optimization tools don't tell you:</span>{" "}
              Buy Box probability isn't linear. Dropping price 10% doesn't increase Buy Box win
              probability by 10% — it depends on who else is competing, at what price, and what
              Amazon's current weighting factors are. Insydz models this in real time.
            </p>
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 11: TESTIMONIALS ────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Indian Sellers Who Stopped Guessing Prices
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-green-400 hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <TrendingUp key={s} className="w-4 h-4 text-green-500" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed italic mb-5">"{t.quote}"</p>
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

      {/* ─── SECTION 12: IS AI PRICE OPTIMIZATION RIGHT FOR YOU? ────────────── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Is AI Price Optimization Right for You?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Perfect For</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Sellers in competitive categories (electronics, home, fashion)",
                  "D2C brands protecting margins while scaling",
                  "High-volume sellers with 10+ SKUs",
                  "Agencies managing multiple seller accounts",
                  "Sellers tired of manual repricing during sale seasons",
                  "Anyone who has ever panic-discounted below cost",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-300 dark:border-orange-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Less Useful For</h3>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "Products sold at fixed MRP with no pricing flexibility",
                  "One-time sellers with 1–2 products, minimal competition",
                  "Sellers who never check analytics or act on recommendations",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-orange-200 dark:border-orange-700">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-bold text-orange-600">Note:</span> Even with 1–2 products,
                  the free plan costs nothing. The Buy Box probability data alone is useful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 13: FAQ — Schema-optimised ─────────────────────────────── */}
      {/* FAQPage schema exported at top of file */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Price Optimization — FAQs
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Each answer leads with a direct response for Google Featured Snippet and AI Overview extraction.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-green-400 transition-all"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-bold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-green-600 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
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

      {/* ─── SECTION 15: RELATED FEATURES ───────────────────────────────────── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Related Features
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Competitor Price Tracking", desc: "Monitor competitor price movements in real time", icon: <TrendingDown />, color: "from-orange-500 to-red-500", route: "/features/competitor-price-tracking-feature" },
              { title: "Review Analytics", desc: "AI review clustering — Hindi + English", icon: <MessageCircle />, color: "from-purple-500 to-pink-500", route: "/features/review-analytics-feature" },
              { title: "Keyword & Rank Tracking", desc: "Track organic position and keyword movement", icon: <Search />, color: "from-blue-500 to-cyan-500", route: "/features/keyword-rank-tracking-feature" },
              { title: "Product Research", desc: "Find profitable products before launch", icon: <Target />, color: "from-indigo-500 to-purple-500", route: "/features/product-research-feature" },
              { title: "AI Recommendations", desc: "Unified AI-driven growth suggestions", icon: <Sparkles />, color: "from-green-500 to-emerald-500", route: "/features/ai-recommendations-feature" },
              { title: "WhatsApp Alerts", desc: "Real-time alerts to WhatsApp — not email", icon: <Bell />, color: "from-emerald-500 to-green-500", route: "/features/whatsapp-alerts-feature" },
            ].map((feature, i) => (
              <div
                key={i}
                onClick={() => setLocation(feature.route)}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 transition-colors mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{feature.desc}</p>
                <ArrowRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── SECTION 16: FINAL CTA — ICP-Segmented ──────────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              Stop Guessing Prices.
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Let AI Maximize Your Profit.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icp: "New Seller", headline: "Start free — AI pricing for your first products", cta: "Start Free →", action: handleGetStarted, style: "from-green-600 to-emerald-600" },
              { icp: "Growing Seller", headline: "Protect margins while scaling to ₹10L+/month", cta: "Try Growth Plan →", action: () => setLocation("/pricing"), style: "from-emerald-600 to-green-700" },
              { icp: "Agency", headline: "AI pricing for every account you manage", cta: "Book Demo →", action: handleGetStarted, style: "from-teal-600 to-green-600" },
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
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {["No credit card required", "Setup in 2 minutes", "Cancel anytime"].map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>{t}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
            >
              💰 Start AI Pricing Free
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => setLocation("/")}
              size="lg"
              variant="outline"
              className="border-2 border-green-600 text-green-700 dark:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 font-semibold px-12 py-6 text-lg rounded-full"
            >
              Explore All Features →
            </Button>
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────────── */}

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t-2 border-green-300 dark:border-green-700 p-4 shadow-2xl z-40">
        <Button
          onClick={handleGetStarted}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 rounded-full shadow-xl"
        >
          💰 Start AI Pricing Free
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

