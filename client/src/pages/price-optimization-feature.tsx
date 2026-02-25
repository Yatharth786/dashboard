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
    { question: "How does AI price optimization work?", answer: "Insydz AI analyzes competitor prices, Buy Box dynamics, demand patterns, and your margin targets to recommend optimal prices that maximize both sales volume and profit." },
    { question: "Will I lose the Buy Box if prices are optimized?", answer: "No! Our AI specifically factors in Buy Box requirements and recommends prices that keep you competitive while protecting margins. You win more, not less." },
    { question: "Can I set minimum profit margins?", answer: "Absolutely. Set your floor prices and margin targets, and our AI will never recommend prices below your thresholds." },
    { question: "Does this work for seasonal products?", answer: "Yes! The AI detects seasonal demand patterns and adjusts pricing strategies accordingly to maximize revenue during peak seasons." },
    { question: "Is price optimization available on the free plan?", answer: "Yes! The free plan includes basic price optimization for limited products. Upgrade for AI-powered automation and unlimited products." },
    { question: "How is this different from competitor price tracking?", answer: "Price tracking shows you what competitors are doing. Price optimization tells you what YOU should do based on AI analysis of market dynamics, demand, and your goals." }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg" : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Back Button */}
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

              {/* Solutions Dropdown */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Solutions')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all flex items-center gap-1">
                  Solutions <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Solutions' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Solutions' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu.Solutions.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 flex-1">{item.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Use Cases Dropdown */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Use Cases')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all flex items-center gap-1">
                  Use Cases <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Use Cases' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Use Cases' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu["Use Cases"].map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400">{item.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

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

              {/* Resources Dropdown */}
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


              <Button onClick={() => setLocation('/login')} className="ml-2 text-sm bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Login
              </Button>

              <button className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
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
              <button onClick={() => { setLocation('/'); setIsMenuOpen(false); }} className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>

              <div>
                <button onClick={() => toggleMobileMenu('Solutions')} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg font-medium">
                  Solutions <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Solutions' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'Solutions' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu.Solutions.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg">
                        {item.icon}{item.name}
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 rounded-full px-4 py-2">
                <DollarSign className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">Feature Spotlight</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
                AI Price Optimization —
                <br />
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">Maximize Profit</span>
                <br />
                Without Losing Sales
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                AI-powered pricing engine that finds the perfect price point.
                <span className="text-green-700 font-semibold"> Win Buy Box, protect margins, and increase revenue — all at once.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-green-500/50 transition-all group">
                  🎯 Start Optimizing Prices Free
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} size="lg" variant="outline" className="border-2 border-green-600 text-green-700 dark:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 font-semibold px-8 py-6 text-lg rounded-full">
                  See How It Works →
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                {["AI-powered recommendations", "Margin protection built-in", "Buy Box optimization"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual */}
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
                      <div className="text-xs text-gray-500 dark:text-gray-500">Buy Box: 45% | Margin: 18%</div>
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-400 dark:border-green-600 rounded-lg p-4 animate-pulse">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-green-700 dark:text-green-400">AI Recommended</span>
                        <span className="text-2xl font-bold text-green-700 dark:text-green-400">₹1,349</span>
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-500 font-semibold">Buy Box: 78% ↑ | Margin: 22% ↑</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-4">
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
                  <p className="text-white font-bold text-sm flex items-center gap-1"><Sparkles className="w-4 h-4" /> AI Optimized</p>
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
              Why Most Sellers <br /><span className="text-red-600">Leave Money on the Table</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: <Calculator className="w-8 h-8" />, title: "Guessing prices based on gut feeling", color: "from-red-500 to-orange-500" },
              { icon: <TrendingDown className="w-8 h-8" />, title: "Panic discounting kills margins", color: "from-orange-500 to-yellow-500" },
              { icon: <Shield className="w-8 h-8" />, title: "Losing Buy Box to cheaper competitors", color: "from-yellow-500 to-orange-500" },
              { icon: <Percent className="w-8 h-8" />, title: "Overpricing = zero sales", color: "from-orange-500 to-red-500" }
            ].map((pain, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-green-400 hover:shadow-lg transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>{pain.icon}</div>
                <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{pain.title}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-400 dark:border-red-600 rounded-3xl p-8 text-center shadow-lg">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Wrong pricing costs sellers <span className="text-red-600">15-35% of potential revenue</span></p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">Every day, across categories.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4"><X className="w-10 h-10 text-white" /></div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Manual Pricing</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">Guesswork + delayed reactions = lost profit</p>
              <div className="space-y-2 text-left">
                {["No data-driven insights", "Emotional pricing decisions", "Constant monitoring needed"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"><Check className="w-10 h-10 text-white" /></div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AI Optimization</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">Smart pricing = maximum profit + sales</p>
              <div className="space-y-2 text-left">
                {["AI analyzes market dynamics", "Data-driven recommendations", "Automated price optimization"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">How AI Price Optimization Works</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Insydz AI analyzes thousands of data points every hour to recommend the perfect price —
              <span className="text-green-700 font-semibold"> balancing competitiveness, margins, and Buy Box probability.</span>
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 -translate-y-1/2"></div>
            <div className="grid lg:grid-cols-4 gap-8 relative">
              {[
                { step: "1", title: "AI scans market data", detail: "Competitor prices, demand, seasonality", icon: <Eye className="w-12 h-12" /> },
                { step: "2", title: "Analyzes Buy Box dynamics", detail: "Win probability at different price points", icon: <Brain className="w-12 h-12" /> },
                { step: "3", title: "Calculates optimal price", detail: "Maximum profit while staying competitive", icon: <Calculator className="w-12 h-12" /> },
                { step: "4", title: "Recommends & alerts you", detail: "Dashboard + WhatsApp notifications", icon: <Bell className="w-12 h-12" /> }
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
              🎯 Get AI Price Recommendations Free
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* What This Feature Helps You Do */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">What You Can Do with Price Optimization</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <DollarSign />, title: "Increase profit per sale", detail: "AI finds the highest profitable price", color: "text-green-600" },
              { icon: <ShoppingCart />, title: "Win more Buy Boxes", detail: "Competitive without panic discounting", color: "text-blue-600" },
              { icon: <TrendingUp />, title: "Boost revenue 15-30%", detail: "Smart pricing = more conversions", color: "text-emerald-600" },
              { icon: <Shield />, title: "Protect margins automatically", detail: "Set floors, AI respects them", color: "text-purple-600" },
              { icon: <Award />, title: "Beat competitors strategically", detail: "Data wins over guesswork", color: "text-orange-600" },
              { icon: <Maximize2 />, title: "Scale without manual work", detail: "AI optimizes 24/7", color: "text-indigo-600" }
            ].map((outcome, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all">
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

      {/* Feature Depth */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Advanced AI Pricing Intelligence</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { feature: "Dynamic Price Recommendations", benefit: "AI adjusts to market changes hourly", icon: <RefreshCw className="w-8 h-8" />, color: "from-blue-500 to-cyan-500" },
              { feature: "Buy Box Win Probability", benefit: "Know your chances before pricing", icon: <Percent className="w-8 h-8" />, color: "from-purple-500 to-pink-500" },
              { feature: "Margin Protection Rules", benefit: "Never sell below profit targets", icon: <Shield className="w-8 h-8" />, color: "from-red-500 to-orange-500" },
              { feature: "Competitor Price Analysis", benefit: "Beat them smartly, not blindly", icon: <Eye className="w-8 h-8" />, color: "from-green-500 to-emerald-500" },
              { feature: "Seasonal Demand Detection", benefit: "Optimize for high & low seasons", icon: <LineChart className="w-8 h-8" />, color: "from-orange-500 to-red-500" },
              { feature: "A/B Price Testing", benefit: "Test prices, find winners", icon: <BarChart3 className="w-8 h-8" />, color: "from-indigo-500 to-purple-500" }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-green-400 hover:shadow-xl transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.feature}</h3>
                <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-green-600" />{item.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Manual Pricing vs AI Optimization</h2>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-300">Aspect</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 dark:text-gray-300">Manual Pricing</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20">AI Optimization</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: "Data Analysis", manual: "Gut feeling, limited data", insydz: "Thousands of data points analyzed" },
                  { aspect: "Speed", manual: "Hours to days", insydz: "Recommendations in seconds" },
                  { aspect: "Accuracy", manual: "Hit or miss", insydz: "Proven 15-30% revenue increase" },
                  { aspect: "Margin Safety", manual: "Manual calculations, errors", insydz: "Automated margin protection" },
                  { aspect: "Scalability", manual: "Impossible for 100+ products", insydz: "Works for unlimited products" }
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
              🎯 Switch to AI Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* PLG Entry Point */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Start Free. Optimize Prices Instantly.</h2>
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
              {["AI price recommendations for limited products", "Buy Box probability analysis", "Margin protection settings", "Basic optimization alerts"].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-bold text-green-600">Upgrade Teaser:</span> Unlock automated price changes, unlimited products, and advanced A/B testing on paid plans.
              </p>
            </div>
            <div className="text-center">
              <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl">
                🎯 Start AI Price Optimization Free
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Feature Is For */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Is AI Price Optimization Right for You?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"><Check className="w-6 h-6 text-white" /></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Perfect For</h3>
              </div>
              <ul className="space-y-4">
                {["Sellers in competitive categories", "Brands protecting margins", "High-volume sellers (50+ SKUs)", "Agencies managing multiple accounts", "Sellers tired of manual pricing"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-300 dark:border-orange-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center"><AlertCircle className="w-6 h-6 text-white" /></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Less Useful For</h3>
              </div>
              <ul className="space-y-4">
                {["Fixed-price/MRP-only products", "One-time sellers with 1-2 products", "Sellers who never check analytics"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Price Optimization – FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-green-400 transition-all">
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
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Related Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Competitor Price Tracking", icon: <TrendingDown />, color: "from-orange-500 to-red-500", route: "/features/competitor-price-tracking-feature" },
              { title: "Review Analytics", icon: <MessageCircle />, color: "from-purple-500 to-pink-500", route: "/features/review-analytics-feature" },
              { title: "Keyword & Rank Tracking", icon: <Search />, color: "from-blue-500 to-cyan-500", route: "/features/keyword-rank-tracking-feature" },
              { title: "Product Research", icon: <Target />, color: "from-indigo-500 to-purple-500", route: "/features/product-research-feature" },
              { title: "AI Recommendations", icon: <Sparkles />, color: "from-green-500 to-emerald-500", route: "/features/ai-recommendations-feature" },
              { title: "WhatsApp Alerts", icon: <Bell />, color: "from-emerald-500 to-green-500", route: "/features/whatsapp-alerts-feature" }
            ].map((feature, i) => (
              <div key={i} onClick={() => feature.route && setLocation(feature.route)} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all cursor-pointer group">
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
            Stop Guessing Prices.
            <br />
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Let AI Maximize Your Profit.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group">
              🎯 Start AI Pricing Free
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
        <Button onClick={handleGetStarted} className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 rounded-full shadow-xl">
          🎯 Start AI Pricing Free
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