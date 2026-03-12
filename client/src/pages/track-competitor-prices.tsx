// import { useState, useEffect } from "react";
// import { useLocation } from "wouter";
// import { 
//   TrendingDown, ArrowRight, CheckCircle2, Target, Zap, 
//   Bell, TrendingUp, MessageCircle, Search, Package, 
//   BarChart3, ChevronRight, Star, AlertCircle, Clock,
//   ShoppingBag, IndianRupee, Smartphone, X, Check,
//   RefreshCw, FileSpreadsheet, Shield, Eye, Sparkles,
//   ChevronDown
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function TrackCompetitorPricesPage() {
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
//       question: "How often does Insydz track competitor prices?",
//       answer: "Insydz monitors competitor prices 24/7 in real-time. Price changes are detected within minutes and alerts are sent instantly via WhatsApp or email."
//     },
//     {
//       question: "Does this work for Amazon India & Flipkart only?",
//       answer: "Yes, currently Insydz is optimized for Amazon India and Flipkart, with support for Indian pricing (₹) and marketplace-specific features like Buy Box tracking."
//     },
//     {
//       question: "Will constant price changes hurt my margins?",
//       answer: "No. Insydz helps you make smart pricing decisions, not panic changes. You'll see when competitors are doing temporary promotions vs real price drops, so you protect margins while staying competitive."
//     },
//     {
//       question: "Can I track multiple competitors per product?",
//       answer: "Yes. You can track unlimited competitors per product on paid plans. Free plan allows tracking of key competitors to get started."
//     },
//     {
//       question: "Is the free plan limited?",
//       answer: "The free plan includes basic competitor price tracking for a limited number of products. It's designed to show you the value before you upgrade for unlimited tracking."
//     },
//     {
//       question: "Do I get WhatsApp alerts?",
//       answer: "Yes! WhatsApp alerts are available on all plans. Get instant notifications on your phone when competitor prices change."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white/95 backdrop-blur-xl border-b border-orange-200 shadow-lg"
//             : "bg-white/80 backdrop-blur-md border-b border-orange-100"
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
//                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border-2 border-white animate-pulse"></div>
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
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
//                 className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-orange-500/50 transition-all"
//               >
//                 Start Free
//               </Button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50">
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
//           <div className="absolute top-40 right-10 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="space-y-8">
//               <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 rounded-full px-4 py-2">
//                 <TrendingDown className="w-4 h-4 text-orange-600" />
//                 <span className="text-sm font-medium text-orange-700">Real-Time Price Intelligence</span>
//               </div>

//               <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
//                 Track Competitor Prices in Real Time.
//                 <br />
//                 <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
//                   Never Lose Sales
//                 </span>
//                 <br />
//                 to Sudden Price Drops.
//               </h1>

//               <p className="text-xl text-gray-700 leading-relaxed">
//                 Insydz helps Amazon & Flipkart sellers monitor competitor price changes automatically and react instantly — 
//                 <span className="text-orange-700 font-semibold"> without manual tracking or Excel chaos.</span>
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button
//                   onClick={handleGetStarted}
//                   size="lg"
//                   className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group"
//                 >
//                   👉 Start Free Price Tracking
//                   <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//                 <Button
//                   onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
//                   size="lg"
//                   variant="outline"
//                   className="border-2 border-orange-600 text-orange-700 hover:bg-orange-50 font-semibold px-8 py-6 text-lg rounded-full"
//                 >
//                   See How It Works →
//                 </Button>
//               </div>

//               {/* Trust Signals */}
//               <div className="flex flex-wrap items-center gap-6 pt-4">
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>Built for Indian marketplaces 🇮🇳</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>Amazon & Flipkart supported</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>WhatsApp price alerts</span>
//                 </div>
//               </div>
//             </div>

//             {/* Right Visual */}
//             <div className="relative">
//               <div className="relative bg-white border-2 border-orange-200 rounded-3xl p-8 shadow-2xl">
//                 {/* Price Comparison Mockup */}
//                 <div className="space-y-4">
//                   {/* Product Header */}
//                   <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
//                     <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
//                       <ShoppingBag className="w-6 h-6 text-orange-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-gray-900">Premium Wireless Earbuds</h3>
//                       <p className="text-xs text-gray-500">Tracking 5 competitors</p>
//                     </div>
//                   </div>

//                   {/* Price Comparison */}
//                   <div className="space-y-3">
//                     <div className="bg-green-50 border border-green-200 rounded-lg p-3">
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm font-medium text-gray-700">Your Price</span>
//                         <span className="text-lg font-bold text-green-700">₹1,199</span>
//                       </div>
//                     </div>

//                     <div className="bg-red-50 border-2 border-red-400 rounded-lg p-3 animate-pulse">
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="text-sm font-medium text-gray-700">Competitor A</span>
//                         <div className="flex items-center gap-2">
//                           <span className="text-sm text-gray-400 line-through">₹1,199</span>
//                           <TrendingDown className="w-4 h-4 text-red-600" />
//                           <span className="text-lg font-bold text-red-600">₹999</span>
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <AlertCircle className="w-3 h-3 text-red-600" />
//                         <p className="text-xs text-red-600 font-semibold">Price dropped by 17%</p>
//                       </div>
//                     </div>

//                     <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm font-medium text-gray-700">Competitor B</span>
//                         <span className="text-lg font-bold text-gray-700">₹1,299</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* WhatsApp Alert */}
//                   <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-2xl p-4 mt-4">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
//                         <Smartphone className="w-5 h-5 text-white" />
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-900 text-sm">WhatsApp Alert Sent</p>
//                         <p className="text-xs text-gray-600">"Competitor A dropped to ₹999"</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating Badge */}
//                 <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl px-4 py-2 shadow-xl">
//                   <p className="text-white font-bold text-sm">Live Tracking</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Problem Awareness Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900">
//               Why Manual Price Tracking
//               <br />
//               <span className="text-red-600">Is Killing Your Profits</span>
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {[
//               {
//                 icon: <RefreshCw className="w-8 h-8" />,
//                 title: "Competitors change prices multiple times a day",
//                 color: "from-red-500 to-orange-500"
//               },
//               {
//                 icon: <Clock className="w-8 h-8" />,
//                 title: "You notice price drops too late",
//                 color: "from-orange-500 to-yellow-500"
//               },
//               {
//                 icon: <FileSpreadsheet className="w-8 h-8" />,
//                 title: "Excel tracking is outdated within hours",
//                 color: "from-yellow-500 to-orange-500"
//               },
//               {
//                 icon: <TrendingDown className="w-8 h-8" />,
//                 title: "Price wars silently eat margins",
//                 color: "from-orange-500 to-red-500"
//               }
//             ].map((pain, i) => (
//               <div key={i} className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:border-orange-400 hover:shadow-lg transition-all group">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
//                   {pain.icon}
//                 </div>
//                 <p className="text-gray-700 font-medium leading-relaxed">{pain.title}</p>
//               </div>
//             ))}
//           </div>

//           {/* Reality Highlight */}
//           <div className="bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-400 rounded-3xl p-8 text-center shadow-lg">
//             <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
//             <p className="text-2xl font-bold text-gray-900 mb-2">
//               Most sellers lose <span className="text-red-600">20-40% potential revenue</span>
//             </p>
//             <p className="text-gray-700 text-lg">
//               because they react late to competitor price changes.
//             </p>
//           </div>

//           {/* Visual Illustration */}
//           <div className="mt-12 grid md:grid-cols-2 gap-8">
//             <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8 text-center">
//               <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <X className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Manual Tracking</h3>
//               <ul className="space-y-2 text-gray-700 text-sm">
//                 <li className="flex items-center gap-2">
//                   <RefreshCw className="w-4 h-4 text-red-600" />
//                   <span>Constantly refreshing listings</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <FileSpreadsheet className="w-4 h-4 text-red-600" />
//                   <span>Excel sheets chaos</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <TrendingDown className="w-4 h-4 text-red-600" />
//                   <span>Missed Buy Box opportunities</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8 text-center">
//               <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Check className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">With Insydz</h3>
//               <ul className="space-y-2 text-gray-700 text-sm">
//                 <li className="flex items-center gap-2">
//                   <Zap className="w-4 h-4 text-green-600" />
//                   <span>Automatic 24/7 monitoring</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Bell className="w-4 h-4 text-green-600" />
//                   <span>Instant WhatsApp alerts</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <TrendingUp className="w-4 h-4 text-green-600" />
//                   <span>Never miss a price change</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Use Case Intro */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//               Competitor Price Tracking —
//               <br />
//               <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Done Automatically</span>
//             </h2>
//             <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
//               Insydz continuously tracks competitor prices across Amazon & Flipkart and alerts you the moment something changes — 
//               <span className="text-orange-700 font-semibold"> so you can act before sales drop.</span>
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <RefreshCw className="w-10 h-10" />,
//                 title: "No manual checking",
//                 desc: "Set it once, monitor forever",
//                 color: "from-blue-500 to-cyan-500"
//               },
//               {
//                 icon: <Zap className="w-10 h-10" />,
//                 title: "No delayed reactions",
//                 desc: "Instant alerts when prices change",
//                 color: "from-orange-500 to-red-500"
//               },
//               {
//                 icon: <Shield className="w-10 h-10" />,
//                 title: "No blind price wars",
//                 desc: "Make informed pricing decisions",
//                 color: "from-green-500 to-emerald-500"
//               }
//             ].map((benefit, i) => (
//               <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-400 hover:shadow-xl transition-all group text-center">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform shadow-lg`}>
//                   {benefit.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section id="how-it-works" className="py-20 px-4 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//               How Price Tracking Works
//               <br />
//               <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">with Insydz</span>
//             </h2>
//           </div>

//           <div className="relative">
//             {/* Connection Line */}
//             <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 -translate-y-1/2"></div>

//             <div className="grid lg:grid-cols-3 gap-12 relative">
//               {/* Step 1 */}
//               <div className="relative">
//                 <div className="bg-white border-2 border-orange-300 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
//                   <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
//                     1
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">Add Your Product</h3>
//                   <p className="text-gray-700 leading-relaxed mb-6">
//                     Add your product or ASIN. Insydz automatically identifies key competitors.
//                   </p>
//                   <div className="bg-orange-100 rounded-2xl p-4">
//                     <ShoppingBag className="w-12 h-12 text-orange-600 mx-auto" />
//                   </div>
//                 </div>
//               </div>

//               {/* Step 2 */}
//               <div className="relative">
//                 <div className="bg-white border-2 border-orange-300 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
//                   <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
//                     2
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Monitors Prices 24/7</h3>
//                   <p className="text-gray-700 leading-relaxed mb-6">
//                     We track competitor price changes, discounts, and stock signals.
//                   </p>
//                   <div className="bg-purple-100 rounded-2xl p-4">
//                     <Eye className="w-12 h-12 text-purple-600 mx-auto animate-pulse" />
//                   </div>
//                 </div>
//               </div>

//               {/* Step 3 */}
//               <div className="relative">
//                 <div className="bg-white border-2 border-orange-300 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
//                   <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
//                     3
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Instant Alerts & Actions</h3>
//                   <div className="space-y-3 text-left">
//                     <div className="flex items-start gap-2 bg-red-50 border border-red-300 rounded-lg p-3">
//                       <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
//                       <span className="text-sm text-gray-800">"Competitor dropped price by 11%"</span>
//                     </div>
//                     <div className="flex items-start gap-2 bg-orange-50 border border-orange-300 rounded-lg p-3">
//                       <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
//                       <span className="text-sm text-gray-800">"Lowest price changed — Buy Box at risk"</span>
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
//               className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group"
//             >
//               👉 Track Your First Competitor Free
//               <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* What You Can Do Section */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               What Sellers Do with Competitor Price Insights
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               {
//                 icon: <Zap className="w-8 h-8" />,
//                 title: "React instantly to price drops",
//                 trend: <TrendingDown className="w-6 h-6 text-red-500" />
//               },
//               {
//                 icon: <Shield className="w-8 h-8" />,
//                 title: "Protect Buy Box without panic discounting",
//                 trend: <Shield className="w-6 h-6 text-green-500" />
//               },
//               {
//                 icon: <Eye className="w-8 h-8" />,
//                 title: "Identify fake price wars",
//                 trend: <AlertCircle className="w-6 h-6 text-orange-500" />
//               },
//               {
//                 icon: <Clock className="w-8 h-8" />,
//                 title: "Time discounts intelligently",
//                 trend: <Clock className="w-6 h-6 text-blue-500" />
//               },
//               {
//                 icon: <TrendingUp className="w-8 h-8" />,
//                 title: "Increase profit without losing volume",
//                 trend: <TrendingUp className="w-6 h-6 text-green-500" />
//               },
//               {
//                 icon: <Target className="w-8 h-8" />,
//                 title: "Stay competitive in your category",
//                 trend: <Target className="w-6 h-6 text-purple-500" />
//               }
//             ].map((useCase, i) => (
//               <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
//                     {useCase.icon}
//                   </div>
//                   {useCase.trend}
//                 </div>
//                 <p className="text-gray-900 font-semibold leading-relaxed">{useCase.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Feature → Result Mapping */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Built for Serious Price Intelligence
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               {
//                 feature: "Real-Time Price Monitoring",
//                 result: "Faster reaction than competitors",
//                 icon: <Eye className="w-8 h-8" />,
//                 color: "from-blue-500 to-cyan-500"
//               },
//               {
//                 feature: "Historical Price Trends",
//                 result: "Smarter pricing decisions",
//                 icon: <BarChart3 className="w-8 h-8" />,
//                 color: "from-purple-500 to-pink-500"
//               },
//               {
//                 feature: "Buy Box Risk Alerts",
//                 result: "Prevent sudden sales drops",
//                 icon: <Shield className="w-8 h-8" />,
//                 color: "from-red-500 to-orange-500"
//               },
//               {
//                 feature: "WhatsApp Notifications",
//                 result: "Instant action",
//                 icon: <Bell className="w-8 h-8" />,
//                 color: "from-green-500 to-emerald-500"
//               }
//             ].map((item, i) => (
//               <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-400 hover:shadow-xl transition-all">
//                 <div className="flex items-start gap-4">
//                   <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">{item.feature}</h3>
//                     <p className="text-gray-600 flex items-center gap-2">
//                       <ArrowRight className="w-4 h-4 text-orange-500" />
//                       {item.result}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Comparison Section */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Manual Price Tracking vs Insydz
//             </h2>
//           </div>

//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-100">
//                     <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Task</th>
//                     <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">Manual Tracking</th>
//                     <th className="px-6 py-4 text-center text-sm font-bold text-orange-700 bg-orange-50">With Insydz</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {[
//                     { task: "Monitoring", manual: "Checking listings manually", insydz: "Automatic 24/7 tracking" },
//                     { task: "Response Time", manual: "Late reactions", insydz: "Instant alerts" },
//                     { task: "Data Management", manual: "Excel sheets", insydz: "Live dashboards" },
//                     { task: "Decision Quality", manual: "Panic discounts", insydz: "Smart pricing decisions" },
//                     { task: "Time Investment", manual: "Hours wasted", insydz: "Minutes per day" }
//                   ].map((row, i) => (
//                     <tr key={i} className="border-t border-gray-200">
//                       <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.task}</td>
//                       <td className="px-6 py-4 text-center">
//                         <div className="flex items-center justify-center gap-2">
//                           <X className="w-5 h-5 text-red-500" />
//                           <span className="text-sm text-gray-600">{row.manual}</span>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-center bg-orange-50">
//                         <div className="flex items-center justify-center gap-2">
//                           <Check className="w-5 h-5 text-green-600" />
//                           <span className="text-sm text-gray-900 font-medium">{row.insydz}</span>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className="text-center mt-8">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl"
//             >
//               👉 Switch to Smart Price Tracking
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Free Plan Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Start Free. See Real Price Movements.
//             </h2>
//           </div>

//           <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-3xl p-8 shadow-xl">
//             <div className="text-center mb-8">
//               <div className="inline-flex items-baseline gap-2 mb-4">
//                 <span className="text-6xl font-black text-orange-600">₹0</span>
//                 <span className="text-2xl text-gray-600">/ Forever</span>
//               </div>
//               <p className="text-lg text-gray-700">Free Plan Includes:</p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-4 mb-8">
//               {[
//                 "Track limited products",
//                 "Competitor price alerts",
//                 "Amazon & Flipkart data",
//                 "No credit card required"
//               ].map((feature, i) => (
//                 <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-4">
//                   <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
//                   <span className="text-gray-900 font-medium">{feature}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="bg-white rounded-2xl p-6 mb-6">
//               <p className="text-sm text-gray-700 mb-4">
//                 <span className="font-bold text-orange-600">Upgrade Teaser:</span> Paid plans unlock deeper tracking, more competitors, and automation.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-600">
//                 <div className="flex items-center gap-2">
//                   <CheckCircle2 className="w-4 h-4 text-green-600" />
//                   <span>No credit card required</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <CheckCircle2 className="w-4 h-4 text-green-600" />
//                   <span>Upgrade only when you see value</span>
//                 </div>
//               </div>
//             </div>

//             <div className="text-center">
//               <Button
//                 onClick={handleGetStarted}
//                 size="lg"
//                 className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl"
//               >
//                 👉 Start Free Price Tracking
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Who This Is For Section */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Who Should Use Competitor Price Tracking?
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Best For */}
//             <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
//                   <Check className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Best For</h3>
//               </div>
//               <ul className="space-y-4">
//                 {[
//                   "Amazon & Flipkart sellers",
//                   "Competitive categories",
//                   "Buy Box-sensitive products",
//                   "Sellers protecting margins"
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-700 font-medium">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Not Ideal For */}
//             <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
//                   <X className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Not Ideal For</h3>
//               </div>
//               <ul className="space-y-4">
//                 {[
//                   "One-time sellers",
//                   "Fixed-price government categories",
//                   "Sellers not monitoring competition"
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-700 font-medium">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Competitor Price Tracking – FAQs
//             </h2>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, i) => (
//               <div key={i} className="bg-gray-50 border-2 border-gray-200 rounded-xl overflow-hidden hover:border-orange-400 transition-all">
//                 <button
//                   onClick={() => toggleFaq(i)}
//                   className="w-full px-6 py-4 flex items-center justify-between text-left"
//                 >
//                   <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
//                   <ChevronDown className={`w-5 h-5 text-orange-600 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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

//       {/* Internal Linking Section */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Related Seller Use Cases
//             </h2>
//             <p className="text-gray-600">Explore more ways to grow your e-commerce business</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { title: "Find Profitable Products", icon: <Target className="w-8 h-8" />, color: "from-blue-500 to-cyan-500" },
//               { title: "Analyze Customer Reviews", icon: <MessageCircle className="w-8 h-8" />, color: "from-purple-500 to-pink-500" },
//               { title: "Improve Amazon & Flipkart SEO", icon: <Search className="w-8 h-8" />, color: "from-green-500 to-emerald-500" },
//               { title: "Avoid Stockouts & Missed Sales", icon: <Package className="w-8 h-8" />, color: "from-orange-500 to-red-500" }
//             ].map((useCase, i) => (
//               <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all cursor-pointer group">
//                 <div className={`w-14 h-14 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
//                   {useCase.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{useCase.title}</h3>
//                 <ArrowRight className="w-5 h-5 text-orange-600 mt-2 group-hover:translate-x-1 transition-transform" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA Section */}
//       <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//             Stop Reacting Late.
//             <br />
//             <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
//               Track Competitor Prices in Real Time.
//             </span>
//           </h2>
//           <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
//             Join thousands of sellers who never miss a price change and protect their margins with smart automation.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
//             >
//               👉 Start Free Price Tracking
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//             <Button
//               onClick={() => setLocation("/")}
//               size="lg"
//               variant="outline"
//               className="border-2 border-orange-600 text-orange-700 hover:bg-orange-50 font-semibold px-12 py-6 text-lg rounded-full"
//             >
//               Explore All Use Cases →
//             </Button>
//           </div>
//           <p className="text-gray-600 mt-6 text-sm">
//             ✓ No credit card required  ✓ Setup in 2 minutes  ✓ Cancel anytime
//           </p>
//         </div>
//       </section>

//       {/* Sticky Mobile CTA */}
//       <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-orange-300 p-4 shadow-2xl z-40">
//         <Button
//           onClick={handleGetStarted}
//           className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-full shadow-xl"
//         >
//           👉 Start Free Price Tracking
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
//                 <span className="text-lg font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
//                   Insydz
//                 </span>
//               </div>
//               <p className="text-gray-400 text-sm">
//                 Real-time price intelligence for smart sellers
//               </p>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4 text-white">Quick Links</h4>
//               <div className="space-y-2">
//                 <button onClick={() => setLocation("/")} className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
//                   Home
//                 </button>
//                 <button onClick={() => setLocation("/pricing")} className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
//                   Pricing
//                 </button>
//                 <button onClick={handleGetStarted} className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
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
//   RefreshCw, FileSpreadsheet, Shield, Eye, Sparkles,
//   ChevronDown, Menu, Sun, Moon, ArrowLeft, BookOpen, 
//   Video, FileText, Store, Briefcase, Users, Code, Globe, Trophy,
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

// export default function TrackCompetitorPricesPage() {
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
//       question: "How often does Insydz track competitor prices?",
//       answer: "Insydz monitors competitor prices 24/7 in real-time. Price changes are detected within minutes and alerts are sent instantly via WhatsApp or email."
//     },
//     {
//       question: "Does this work for Amazon India & Flipkart only?",
//       answer: "Yes, currently Insydz is optimized for Amazon India and Flipkart, with support for Indian pricing (₹) and marketplace-specific features like Buy Box tracking."
//     },
//     {
//       question: "Will constant price changes hurt my margins?",
//       answer: "No. Insydz helps you make smart pricing decisions, not panic changes. You'll see when competitors are doing temporary promotions vs real price drops, so you protect margins while staying competitive."
//     },
//     {
//       question: "Can I track multiple competitors per product?",
//       answer: "Yes. You can track unlimited competitors per product on paid plans. Free plan allows tracking of key competitors to get started."
//     },
//     {
//       question: "Is the free plan limited?",
//       answer: "The free plan includes basic competitor price tracking for a limited number of products. It's designed to show you the value before you upgrade for unlimited tracking."
//     },
//     {
//       question: "Do I get WhatsApp alerts?",
//       answer: "Yes! WhatsApp alerts are available on all plans. Get instant notifications on your phone when competitor prices change."
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
//                   className="px-3 py-2 text-sm text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 font-semibold rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all flex items-center gap-1"
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
//                         className="w-full px-4 py-3 text-left hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors flex items-center gap-3 group"
//                       >
//                         <span className="text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
//                           {item.icon}
//                         </span>
//                         <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400">
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
//                   className="flex items-center justify-between w-full px-4 py-2 text-orange-600 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg font-semibold"
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
//                         className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg"
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
//       <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
//           <div className="absolute top-40 right-10 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="space-y-8">
//               <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 rounded-full px-4 py-2">
//                 <TrendingDown className="w-4 h-4 text-orange-600" />
//                 <span className="text-sm font-medium text-orange-700">Real-Time Price Intelligence</span>
//               </div>

//               <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
//                 Track Competitor Prices in Real Time.
//                 <br />
//                 <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
//                   Never Lose Sales
//                 </span>
//                 <br />
//                 to Sudden Price Drops.
//               </h1>

//               <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
//                 Insydz helps Amazon & Flipkart sellers monitor competitor price changes automatically and react instantly — 
//                 <span className="text-orange-700 font-semibold"> without manual tracking or Excel chaos.</span>
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button
//                   onClick={handleGetStarted}
//                   size="lg"
//                   className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group"
//                 >
//                   👉 Start Free Price Tracking
//                   <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//                 <Button
//                   onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
//                   size="lg"
//                   variant="outline"
//                   className="border-2 border-orange-600 text-orange-700 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-semibold px-8 py-6 text-lg rounded-full"
//                 >
//                   See How It Works →
//                 </Button>
//               </div>

//               {/* Trust Signals */}
//               <div className="flex flex-wrap items-center gap-6 pt-4">
//                 <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>Built for Indian marketplaces 🇮🇳</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>Amazon & Flipkart supported</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>WhatsApp price alerts</span>
//                 </div>
//               </div>
//             </div>

//             {/* Right Visual */}
//             <div className="relative">
//               <div className="relative bg-white dark:bg-gray-900 border-2 border-orange-200 dark:border-orange-800 rounded-3xl p-8 shadow-2xl">
//                 {/* Price Comparison Mockup */}
//                 <div className="space-y-4">
//                   {/* Product Header */}
//                   <div className="flex items-center gap-3 pb-4 border-b border-gray-200 dark:border-gray-700">
//                     <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
//                       <ShoppingBag className="w-6 h-6 text-orange-600 dark:text-orange-400" />
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-gray-900 dark:text-white">Premium Wireless Earbuds</h3>
//                       <p className="text-xs text-gray-500 dark:text-gray-400">Tracking 5 competitors</p>
//                     </div>
//                   </div>

//                   {/* Price Comparison */}
//                   <div className="space-y-3">
//                     <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-3">
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Price</span>
//                         <span className="text-lg font-bold text-green-700 dark:text-green-400">₹1,199</span>
//                       </div>
//                     </div>

//                     <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-600 rounded-lg p-3 animate-pulse">
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Competitor A</span>
//                         <div className="flex items-center gap-2">
//                           <span className="text-sm text-gray-400 line-through">₹1,199</span>
//                           <TrendingDown className="w-4 h-4 text-red-600 dark:text-red-400" />
//                           <span className="text-lg font-bold text-red-600 dark:text-red-400">₹999</span>
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <AlertCircle className="w-3 h-3 text-red-600 dark:text-red-400" />
//                         <p className="text-xs text-red-600 dark:text-red-400 font-semibold">Price dropped by 17%</p>
//                       </div>
//                     </div>

//                     <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Competitor B</span>
//                         <span className="text-lg font-bold text-gray-700 dark:text-gray-300">₹1,299</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* WhatsApp Alert */}
//                   <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-400 dark:border-green-600 rounded-2xl p-4 mt-4">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
//                         <Smartphone className="w-5 h-5 text-white" />
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-900 dark:text-white text-sm">WhatsApp Alert Sent</p>
//                         <p className="text-xs text-gray-600 dark:text-gray-400">"Competitor A dropped to ₹999"</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating Badge */}
//                 <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl px-4 py-2 shadow-xl">
//                   <p className="text-white font-bold text-sm">Live Tracking</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Problem Awareness Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900">
//               Why Manual Price Tracking
//               <br />
//               <span className="text-red-600">Is Killing Your Profits</span>
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {[
//               {
//                 icon: <RefreshCw className="w-8 h-8" />,
//                 title: "Competitors change prices multiple times a day",
//                 color: "from-red-500 to-orange-500"
//               },
//               {
//                 icon: <Clock className="w-8 h-8" />,
//                 title: "You notice price drops too late",
//                 color: "from-orange-500 to-yellow-500"
//               },
//               {
//                 icon: <FileSpreadsheet className="w-8 h-8" />,
//                 title: "Excel tracking is outdated within hours",
//                 color: "from-yellow-500 to-orange-500"
//               },
//               {
//                 icon: <TrendingDown className="w-8 h-8" />,
//                 title: "Price wars silently eat margins",
//                 color: "from-orange-500 to-red-500"
//               }
//             ].map((pain, i) => (
//               <div key={i} className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:border-orange-400 hover:shadow-lg transition-all group">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
//                   {pain.icon}
//                 </div>
//                 <p className="text-gray-700 font-medium leading-relaxed">{pain.title}</p>
//               </div>
//             ))}
//           </div>

//           {/* Reality Highlight */}
//           <div className="bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-400 rounded-3xl p-8 text-center shadow-lg">
//             <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
//             <p className="text-2xl font-bold text-gray-900 mb-2">
//               Most sellers lose <span className="text-red-600">20-40% potential revenue</span>
//             </p>
//             <p className="text-gray-700 text-lg">
//               because they react late to competitor price changes.
//             </p>
//           </div>

//           {/* Visual Illustration */}
//           <div className="mt-12 grid md:grid-cols-2 gap-8">
//             <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8 text-center">
//               <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <X className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Manual Tracking</h3>
//               <ul className="space-y-2 text-gray-700 text-sm">
//                 <li className="flex items-center gap-2">
//                   <RefreshCw className="w-4 h-4 text-red-600" />
//                   <span>Constantly refreshing listings</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <FileSpreadsheet className="w-4 h-4 text-red-600" />
//                   <span>Excel sheets chaos</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <TrendingDown className="w-4 h-4 text-red-600" />
//                   <span>Missed Buy Box opportunities</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8 text-center">
//               <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Check className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">With Insydz</h3>
//               <ul className="space-y-2 text-gray-700 text-sm">
//                 <li className="flex items-center gap-2">
//                   <Zap className="w-4 h-4 text-green-600" />
//                   <span>Automatic 24/7 monitoring</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Bell className="w-4 h-4 text-green-600" />
//                   <span>Instant WhatsApp alerts</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <TrendingUp className="w-4 h-4 text-green-600" />
//                   <span>Never miss a price change</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Use Case Intro */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//               Competitor Price Tracking —
//               <br />
//               <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Done Automatically</span>
//             </h2>
//             <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
//               Insydz continuously tracks competitor prices across Amazon & Flipkart and alerts you the moment something changes — 
//               <span className="text-orange-700 font-semibold"> so you can act before sales drop.</span>
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <RefreshCw className="w-10 h-10" />,
//                 title: "No manual checking",
//                 desc: "Set it once, monitor forever",
//                 color: "from-blue-500 to-cyan-500"
//               },
//               {
//                 icon: <Zap className="w-10 h-10" />,
//                 title: "No delayed reactions",
//                 desc: "Instant alerts when prices change",
//                 color: "from-orange-500 to-red-500"
//               },
//               {
//                 icon: <Shield className="w-10 h-10" />,
//                 title: "No blind price wars",
//                 desc: "Make informed pricing decisions",
//                 color: "from-green-500 to-emerald-500"
//               }
//             ].map((benefit, i) => (
//               <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-400 hover:shadow-xl transition-all group text-center">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform shadow-lg`}>
//                   {benefit.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section id="how-it-works" className="py-20 px-4 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//               How Price Tracking Works
//               <br />
//               <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">with Insydz</span>
//             </h2>
//           </div>

//           <div className="relative">
//             {/* Connection Line */}
//             <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 -translate-y-1/2"></div>

//             <div className="grid lg:grid-cols-3 gap-12 relative">
//               {/* Step 1 */}
//               <div className="relative">
//                 <div className="bg-white border-2 border-orange-300 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
//                   <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
//                     1
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">Add Your Product</h3>
//                   <p className="text-gray-700 leading-relaxed mb-6">
//                     Add your product or ASIN. Insydz automatically identifies key competitors.
//                   </p>
//                   <div className="bg-orange-100 rounded-2xl p-4">
//                     <ShoppingBag className="w-12 h-12 text-orange-600 mx-auto" />
//                   </div>
//                 </div>
//               </div>

//               {/* Step 2 */}
//               <div className="relative">
//                 <div className="bg-white border-2 border-orange-300 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
//                   <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
//                     2
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Monitors Prices 24/7</h3>
//                   <p className="text-gray-700 leading-relaxed mb-6">
//                     We track competitor price changes, discounts, and stock signals.
//                   </p>
//                   <div className="bg-purple-100 rounded-2xl p-4">
//                     <Eye className="w-12 h-12 text-purple-600 mx-auto animate-pulse" />
//                   </div>
//                 </div>
//               </div>

//               {/* Step 3 */}
//               <div className="relative">
//                 <div className="bg-white border-2 border-orange-300 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
//                   <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
//                     3
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Instant Alerts & Actions</h3>
//                   <div className="space-y-3 text-left">
//                     <div className="flex items-start gap-2 bg-red-50 border border-red-300 rounded-lg p-3">
//                       <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
//                       <span className="text-sm text-gray-800">"Competitor dropped price by 11%"</span>
//                     </div>
//                     <div className="flex items-start gap-2 bg-orange-50 border border-orange-300 rounded-lg p-3">
//                       <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
//                       <span className="text-sm text-gray-800">"Lowest price changed — Buy Box at risk"</span>
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
//               className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group"
//             >
//               👉 Track Your First Competitor Free
//               <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* What You Can Do Section */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               What Sellers Do with Competitor Price Insights
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               {
//                 icon: <Zap className="w-8 h-8" />,
//                 title: "React instantly to price drops",
//                 trend: <TrendingDown className="w-6 h-6 text-red-500" />
//               },
//               {
//                 icon: <Shield className="w-8 h-8" />,
//                 title: "Protect Buy Box without panic discounting",
//                 trend: <Shield className="w-6 h-6 text-green-500" />
//               },
//               {
//                 icon: <Eye className="w-8 h-8" />,
//                 title: "Identify fake price wars",
//                 trend: <AlertCircle className="w-6 h-6 text-orange-500" />
//               },
//               {
//                 icon: <Clock className="w-8 h-8" />,
//                 title: "Time discounts intelligently",
//                 trend: <Clock className="w-6 h-6 text-blue-500" />
//               },
//               {
//                 icon: <TrendingUp className="w-8 h-8" />,
//                 title: "Increase profit without losing volume",
//                 trend: <TrendingUp className="w-6 h-6 text-green-500" />
//               },
//               {
//                 icon: <Target className="w-8 h-8" />,
//                 title: "Stay competitive in your category",
//                 trend: <Target className="w-6 h-6 text-purple-500" />
//               }
//             ].map((useCase, i) => (
//               <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
//                     {useCase.icon}
//                   </div>
//                   {useCase.trend}
//                 </div>
//                 <p className="text-gray-900 font-semibold leading-relaxed">{useCase.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Feature → Result Mapping */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Built for Serious Price Intelligence
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               {
//                 feature: "Real-Time Price Monitoring",
//                 result: "Faster reaction than competitors",
//                 icon: <Eye className="w-8 h-8" />,
//                 color: "from-blue-500 to-cyan-500"
//               },
//               {
//                 feature: "Historical Price Trends",
//                 result: "Smarter pricing decisions",
//                 icon: <BarChart3 className="w-8 h-8" />,
//                 color: "from-purple-500 to-pink-500"
//               },
//               {
//                 feature: "Buy Box Risk Alerts",
//                 result: "Prevent sudden sales drops",
//                 icon: <Shield className="w-8 h-8" />,
//                 color: "from-red-500 to-orange-500"
//               },
//               {
//                 feature: "WhatsApp Notifications",
//                 result: "Instant action",
//                 icon: <Bell className="w-8 h-8" />,
//                 color: "from-green-500 to-emerald-500"
//               }
//             ].map((item, i) => (
//               <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-400 hover:shadow-xl transition-all">
//                 <div className="flex items-start gap-4">
//                   <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">{item.feature}</h3>
//                     <p className="text-gray-600 flex items-center gap-2">
//                       <ArrowRight className="w-4 h-4 text-orange-500" />
//                       {item.result}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Comparison Section */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Manual Price Tracking vs Insydz
//             </h2>
//           </div>

//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-100">
//                     <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Task</th>
//                     <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">Manual Tracking</th>
//                     <th className="px-6 py-4 text-center text-sm font-bold text-orange-700 bg-orange-50">With Insydz</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {[
//                     { task: "Monitoring", manual: "Checking listings manually", insydz: "Automatic 24/7 tracking" },
//                     { task: "Response Time", manual: "Late reactions", insydz: "Instant alerts" },
//                     { task: "Data Management", manual: "Excel sheets", insydz: "Live dashboards" },
//                     { task: "Decision Quality", manual: "Panic discounts", insydz: "Smart pricing decisions" },
//                     { task: "Time Investment", manual: "Hours wasted", insydz: "Minutes per day" }
//                   ].map((row, i) => (
//                     <tr key={i} className="border-t border-gray-200">
//                       <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.task}</td>
//                       <td className="px-6 py-4 text-center">
//                         <div className="flex items-center justify-center gap-2">
//                           <X className="w-5 h-5 text-red-500" />
//                           <span className="text-sm text-gray-600">{row.manual}</span>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-center bg-orange-50">
//                         <div className="flex items-center justify-center gap-2">
//                           <Check className="w-5 h-5 text-green-600" />
//                           <span className="text-sm text-gray-900 font-medium">{row.insydz}</span>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className="text-center mt-8">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl"
//             >
//               👉 Switch to Smart Price Tracking
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Free Plan Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Start Free. See Real Price Movements.
//             </h2>
//           </div>

//           <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-3xl p-8 shadow-xl">
//             <div className="text-center mb-8">
//               <div className="inline-flex items-baseline gap-2 mb-4">
//                 <span className="text-6xl font-black text-orange-600">₹0</span>
//                 <span className="text-2xl text-gray-600">/ Forever</span>
//               </div>
//               <p className="text-lg text-gray-700">Free Plan Includes:</p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-4 mb-8">
//               {[
//                 "Track limited products",
//                 "Competitor price alerts",
//                 "Amazon & Flipkart data",
//                 "No credit card required"
//               ].map((feature, i) => (
//                 <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-4">
//                   <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
//                   <span className="text-gray-900 font-medium">{feature}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="bg-white rounded-2xl p-6 mb-6">
//               <p className="text-sm text-gray-700 mb-4">
//                 <span className="font-bold text-orange-600">Upgrade Teaser:</span> Paid plans unlock deeper tracking, more competitors, and automation.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-600">
//                 <div className="flex items-center gap-2">
//                   <CheckCircle2 className="w-4 h-4 text-green-600" />
//                   <span>No credit card required</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <CheckCircle2 className="w-4 h-4 text-green-600" />
//                   <span>Upgrade only when you see value</span>
//                 </div>
//               </div>
//             </div>

//             <div className="text-center">
//               <Button
//                 onClick={handleGetStarted}
//                 size="lg"
//                 className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl"
//               >
//                 👉 Start Free Price Tracking
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Who This Is For Section */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Who Should Use Competitor Price Tracking?
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Best For */}
//             <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
//                   <Check className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Best For</h3>
//               </div>
//               <ul className="space-y-4">
//                 {[
//                   "Amazon & Flipkart sellers",
//                   "Competitive categories",
//                   "Buy Box-sensitive products",
//                   "Sellers protecting margins"
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-700 font-medium">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Not Ideal For */}
//             <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
//                   <X className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Not Ideal For</h3>
//               </div>
//               <ul className="space-y-4">
//                 {[
//                   "One-time sellers",
//                   "Fixed-price government categories",
//                   "Sellers not monitoring competition"
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-700 font-medium">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Competitor Price Tracking – FAQs
//             </h2>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, i) => (
//               <div key={i} className="bg-gray-50 border-2 border-gray-200 rounded-xl overflow-hidden hover:border-orange-400 transition-all">
//                 <button
//                   onClick={() => toggleFaq(i)}
//                   className="w-full px-6 py-4 flex items-center justify-between text-left"
//                 >
//                   <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
//                   <ChevronDown className={`w-5 h-5 text-orange-600 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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

//       {/* Internal Linking Section */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Related Seller Use Cases
//             </h2>
//             <p className="text-gray-600">Explore more ways to grow your e-commerce business</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { title: "Find Profitable Products", icon: <Target className="w-8 h-8" />, color: "from-blue-500 to-cyan-500" },
//               { title: "Analyze Customer Reviews", icon: <MessageCircle className="w-8 h-8" />, color: "from-purple-500 to-pink-500" },
//               { title: "Improve Amazon & Flipkart SEO", icon: <Search className="w-8 h-8" />, color: "from-green-500 to-emerald-500" },
//               { title: "Avoid Stockouts & Missed Sales", icon: <Package className="w-8 h-8" />, color: "from-orange-500 to-red-500" }
//             ].map((useCase, i) => (
//               <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all cursor-pointer group">
//                 <div className={`w-14 h-14 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
//                   {useCase.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{useCase.title}</h3>
//                 <ArrowRight className="w-5 h-5 text-orange-600 mt-2 group-hover:translate-x-1 transition-transform" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA Section */}
//       <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//             Stop Reacting Late.
//             <br />
//             <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
//               Track Competitor Prices in Real Time.
//             </span>
//           </h2>
//           <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
//             Join thousands of sellers who never miss a price change and protect their margins with smart automation.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
//             >
//               👉 Start Free Price Tracking
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//             <Button
//               onClick={() => setLocation("/")}
//               size="lg"
//               variant="outline"
//               className="border-2 border-orange-600 text-orange-700 hover:bg-orange-50 font-semibold px-12 py-6 text-lg rounded-full"
//             >
//               Explore All Use Cases →
//             </Button>
//           </div>
//           <p className="text-gray-600 mt-6 text-sm">
//             ✓ No credit card required  ✓ Setup in 2 minutes  ✓ Cancel anytime
//           </p>
//         </div>
//       </section>

//       {/* Sticky Mobile CTA */}
//       <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-orange-300 p-4 shadow-2xl z-40">
//         <Button
//           onClick={handleGetStarted}
//           className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-full shadow-xl"
//         >
//           👉 Start Free Price Tracking
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
//                 <span className="text-lg font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
//                   Insydz
//                 </span>
//               </div>
//               <p className="text-gray-400 text-sm">
//                 Real-time price intelligence for smart sellers
//               </p>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4 text-white">Quick Links</h4>
//               <div className="space-y-2">
//                 <button onClick={() => setLocation("/")} className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
//                   Home
//                 </button>
//                 <button onClick={() => setLocation("/pricing")} className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
//                   Pricing
//                 </button>
//                 <button onClick={handleGetStarted} className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
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
  BarChart3, ChevronRight, AlertCircle, Clock,
  ShoppingBag, Smartphone, X, Check,
  RefreshCw, FileSpreadsheet, Shield, Eye,
  ChevronDown, Menu, Sun, Moon, ArrowLeft, BookOpen, 
  Video, FileText, Store, Briefcase, Users, Code, Globe, Trophy,
  Flame, Presentation, DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from 'react-helmet-async';


// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────
const SCHEMAS = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Insydz Competitor Price Tracker",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
    "description": "India's most powerful competitor price tracking tool for Amazon and Flipkart sellers. Get real-time WhatsApp alerts when rivals drop prices, protect your Buy Box, and never react late to a price war again.",
    "url": "https://insydz.com/use-cases/track-competitor-prices"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://insydz.com" },
      { "@type": "ListItem", "position": 2, "name": "Use Cases", "item": "https://insydz.com/use-cases" },
      { "@type": "ListItem", "position": 3, "name": "Track Competitor Prices", "item": "https://insydz.com/use-cases/track-competitor-prices" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Track Competitor Prices on Amazon India and Flipkart",
    "description": "Set up automatic competitor price tracking with real-time WhatsApp alerts in under 2 minutes using Insydz.",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Add Your Product", "text": "Enter your ASIN or Flipkart listing. Insydz automatically identifies 100+ competitors in your category. Setup: under 2 minutes." },
      { "@type": "HowToStep", "position": 2, "name": "AI Monitors Prices 24/7", "text": "Insydz tracks competitor price changes, discounts, and stock signals continuously — overnight, weekends, and during festive sale events." },
      { "@type": "HowToStep", "position": 3, "name": "Get Instant Alerts & Actions", "text": "WhatsApp alert includes competitor name, old price, new price, % drop, and AI-suggested response price in INR." }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How often does Insydz track competitor prices?",
        "acceptedAnswer": { "@type": "Answer", "text": "Insydz monitors competitor prices continuously — with checks running multiple times per hour on high-velocity products. During Flipkart Big Billion Days and Amazon Great Indian Festival, monitoring frequency increases automatically. You receive a WhatsApp alert within minutes of any competitor price change that crosses your set threshold." }
      },
      {
        "@type": "Question",
        "name": "Does this competitor price tracking work for Amazon India and Flipkart only?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Insydz is built specifically for Indian marketplaces — Amazon.in and Flipkart. All pricing data is in INR, all competitor tracking covers Indian marketplace listings, and all Buy Box risk alerts are calibrated for how Indian marketplaces determine Buy Box eligibility." }
      },
      {
        "@type": "Question",
        "name": "Will constant price changes hurt my margins?",
        "acceptedAnswer": { "@type": "Answer", "text": "Not with Insydz. The platform shows your margin floor alongside every competitor price drop alert, so you always know the minimum price you can go to without selling at a loss. The AI recommends a response price that protects your Buy Box while keeping your margin intact." }
      },
      {
        "@type": "Question",
        "name": "Can I track multiple competitors per product?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Insydz tracks up to 100+ competitors per product. You can monitor all sellers in your product category simultaneously — including new entrants. You'll be alerted when any seller makes a significant price change, not just the top 3." }
      },
      {
        "@type": "Question",
        "name": "Is the free plan limited for competitor price tracking?",
        "acceptedAnswer": { "@type": "Answer", "text": "The free plan lets you track a limited number of products with real-time competitor price alerts and Amazon & Flipkart data — no credit card required. Paid plans unlock tracking across your full catalogue, more competitors per product, 90-day historical price trends, advanced Buy Box monitoring, and AI pricing recommendations." }
      },
      {
        "@type": "Question",
        "name": "Do I get WhatsApp alerts for competitor price changes?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every significant competitor price change triggers an instant WhatsApp notification with the competitor name, their old price, new price, percentage drop, and an AI-suggested response price for your product in INR." }
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
  { feature: "Monitoring", manual: "Checking listings manually", insydz: "Automatic 24/7 tracking" },
  { feature: "Response Time", manual: "Late reactions (hours/days)", insydz: "Instant alerts (minutes)" },
  { feature: "Data Management", manual: "Excel sheets, constantly stale", insydz: "Live dashboard, always current" },
  { feature: "Decision Quality", manual: "Panic discounts without margin data", insydz: "AI-guided, margin-aware repricing" },
  { feature: "Time Investment", manual: "8–12 hours wasted per week", insydz: "Minutes per day — set and forget" },
  { feature: "Historical Data", manual: "No pattern detection", insydz: "90-day price history per competitor" },
];

const roiWithout = [
  { label: "Competitor drops Friday 9pm — discovered Monday morning", value: "−₹22,000" },
  { label: "Panic discounting below margin floor to recover Buy Box", value: "−₹8,000" },
  { label: "Hours spent manually checking 8 competitors, 3× per week", value: "−14 hrs/month" },
  { label: "Missed upward pricing opportunity (all rivals raised prices)", value: "−₹12,000" },
];

const roiWith = [
  { label: "Friday 9:04pm WhatsApp alert — repriced by 9:07pm", value: "+₹19,000" },
  { label: "AI margin floor shown — no panic discounting", value: "+₹7,500" },
  { label: "Zero manual checking — 14 hours freed", value: "+₹14,000" },
  { label: "Spot rival price increases early — raised own price by ₹80", value: "+₹11,200" },
];

const faqs = [
  {
    id: "faq-1",
    q: "How often does Insydz track competitor prices?",
    a: "Insydz monitors competitor prices continuously — with checks running multiple times per hour on high-velocity products. During Flipkart Big Billion Days and Amazon Great Indian Festival, monitoring frequency increases automatically. You receive a WhatsApp alert within minutes of any competitor price change that crosses your set threshold.",
  },
  {
    id: "faq-2",
    q: "Does this competitor price tracking work for Amazon India and Flipkart only?",
    a: "Yes. Insydz is built specifically for Indian marketplaces — Amazon.in and Flipkart. All pricing data is in INR, all competitor tracking covers Indian marketplace listings, and all Buy Box risk alerts are calibrated for how Indian marketplaces determine Buy Box eligibility — which differs from global marketplace behaviour.",
  },
  {
    id: "faq-3",
    q: "Will constant price changes hurt my margins?",
    a: "Not with Insydz. The platform shows your margin floor alongside every competitor price drop alert, so you always know the minimum price you can go to without selling at a loss. The AI recommends a response price that protects your Buy Box while keeping your margin intact — not just matching the lowest price blindly.",
  },
  {
    id: "faq-4",
    q: "Can I track multiple competitors per product?",
    a: "Yes. Insydz tracks up to 100+ competitors per product. You can monitor all sellers in your product category simultaneously — including new entrants. You'll be alerted when any seller makes a significant price change, not just the top 3.",
  },
  {
    id: "faq-5",
    q: "Is the free plan limited for competitor price tracking?",
    a: "The free plan lets you track a limited number of products with real-time competitor price alerts and Amazon & Flipkart data — no credit card required. Paid plans unlock tracking across your full catalogue, more competitors per product, 90-day historical price trends, advanced Buy Box monitoring, and AI pricing recommendations.",
  },
  {
    id: "faq-6",
    q: "Do I get WhatsApp alerts for competitor price changes?",
    a: "Yes. Every significant competitor price change triggers an instant WhatsApp notification with the competitor name, their old price, new price, percentage drop, and an AI-suggested response price for your product in INR. Indian sellers respond to WhatsApp — so Insydz delivers intelligence where you'll actually act on it.",
  },
];

export default function TrackCompetitorPricesPage() {
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
      const id = `insydz-price-schema-${i}`;
      if (document.getElementById(id)) return;
      const script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
    return () => {
      SCHEMAS.forEach((_, i) => {
        const el = document.getElementById(`insydz-price-schema-${i}`);
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
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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

              {/* Use Cases — highlighted orange */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown("Use Cases")} className="px-3 py-2 text-sm text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 font-semibold rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all flex items-center gap-1">
                  Use Cases <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "Use Cases" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "Use Cases" && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu["Use Cases"].map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400">{item.name}</span>
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
                        ? "text-orange-600 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-semibold"
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
                            key === "Use Cases" ? "hover:bg-orange-50 dark:hover:bg-orange-900/20" : "hover:bg-purple-50 dark:hover:bg-purple-900/20"
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
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 rounded-full px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                </span>
                <span className="text-sm font-medium text-orange-700">India's #1 Competitor Price Tracking Tool 🇮🇳</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
                Track Competitor Prices in Real Time.
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
                  Never Lose Sales
                </span>
                <br />
                to Sudden Price Drops.
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                India's most powerful <strong>competitor price tracking tool</strong> for Amazon and Flipkart sellers. Monitor rival pricing automatically and react instantly —
                <span className="text-orange-700 font-semibold"> without manual tracking or Excel chaos.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleGetStarted} size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group"
                >
                  👉 Start Free Price Tracking
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                  size="lg" variant="outline"
                  className="border-2 border-orange-600 text-orange-700 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-semibold px-8 py-6 text-lg rounded-full"
                >
                  See How It Works →
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                {[
                  "Built for Indian marketplaces — all data in INR",
                  "Amazon & Flipkart supported simultaneously",
                  "WhatsApp price alerts — no credit card required",
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
              <div className="relative bg-white dark:bg-gray-900 border-2 border-orange-200 dark:border-orange-800 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                      <ShoppingBag className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Premium Wireless Earbuds</h3>
                      <p className="text-xs text-gray-500">Tracking 5 competitors</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Price</span>
                        <span className="text-lg font-bold text-green-700 dark:text-green-400">₹1,199</span>
                      </div>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-600 rounded-lg p-3 animate-pulse">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Competitor A</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400 line-through">₹1,199</span>
                          <TrendingDown className="w-4 h-4 text-red-600" />
                          <span className="text-lg font-bold text-red-600">₹999</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 text-red-600" />
                        <p className="text-xs text-red-600 font-semibold">Price dropped 17% — Buy Box at risk</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Competitor B</span>
                        <span className="text-lg font-bold text-gray-700 dark:text-gray-300">₹1,299</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-400 dark:border-green-600 rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white text-sm">WhatsApp Alert Sent — 9:04pm</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">"Competitor A dropped to ₹999 — AI suggests ₹1,049"</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl px-4 py-2 shadow-xl">
                  <p className="text-white font-bold text-sm">Live Tracking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHY MANUAL TRACKING FAILS ─────────────────────────────── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              Why Manual Price Tracking
              <br />
              <span className="text-red-600">Is Killing Your Profits</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Most Amazon and Flipkart sellers still check competitor prices by hand — refreshing listings, copying numbers into spreadsheets, hoping they catch changes before sales drop. Here's why that approach fails, every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: <RefreshCw className="w-8 h-8" />, title: "Competitors change prices multiple times a day — you can't keep up manually", color: "from-red-500 to-orange-500" },
              { icon: <Clock className="w-8 h-8" />, title: "You notice price drops too late — after your Buy Box rank has already fallen", color: "from-orange-500 to-yellow-500" },
              { icon: <FileSpreadsheet className="w-8 h-8" />, title: "Excel tracking is outdated within hours — the data is stale before you use it", color: "from-yellow-500 to-orange-500" },
              { icon: <TrendingDown className="w-8 h-8" />, title: "Price wars silently eat your margins — panic discounting costs more than the lost sale", color: "from-orange-500 to-red-500" },
            ].map((pain, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-orange-400 hover:shadow-lg transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
                  {pain.icon}
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{pain.title}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-400 dark:border-red-600 rounded-3xl p-8 text-center shadow-lg mb-12">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Most sellers lose <span className="text-red-600">20–40% of potential revenue annually</span>
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              ...because they react late to competitor price changes — or don't react at all until the damage is already visible in their sales report.
            </p>
          </div>

          {/* Manual vs Insydz side-by-side */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 dark:bg-red-900/10 border-2 border-red-300 dark:border-red-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Manual Tracking</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Constantly refreshing product listings to check prices",
                  "Excel sheets become chaos within days",
                  "Missed Buy Box opportunities every night",
                  "No margin data available when repricing",
                  "Hours wasted every single week",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/10 border-2 border-green-300 dark:border-green-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">With Insydz</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Automatic 24/7 competitor monitoring — no manual checks needed",
                  "Instant WhatsApp alerts when any competitor changes price",
                  "Never miss a price change — even at 2am during Big Billion Days",
                  "AI shows your margin floor before you reprice",
                  "Set it once — monitor forever",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHAT MOST TOOLS DON'T TELL YOU ────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              Tracking Prices Is Only Half the Job.
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">The Other Half Is Knowing How to React.</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Most competitor price tracking tools give you a spreadsheet of price changes. Insydz gives you the price change — and the recommended response — with your margin floor already calculated.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Real-Time Price Monitoring",
                desc: "Insydz tracks competitor pricing across Amazon India and Flipkart continuously. Price changes are detected within minutes — not at the end of the day when you check your dashboard.",
                link: "/features/price-tracker",
                linkLabel: "marketplace price tracking dashboard",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Historical Price Trends",
                desc: "See how competitor prices have moved over the last 30, 60, or 90 days. Spot recurring pricing patterns — like weekend flash drops or pre-sale inflation — before they catch you off guard again.",
                link: "/features/price-history",
                linkLabel: "historical price tracker",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Buy Box Risk Alerts",
                desc: "Insydz monitors Buy Box eligibility signals in real time. When a competitor's price drops close to your threshold, you get an alert before you lose the Buy Box — not after your sales velocity has already dropped.",
                link: "/features/buy-box-alerts",
                linkLabel: "buy box monitoring software",
                color: "from-red-500 to-orange-500",
              },
              {
                icon: <Bell className="w-8 h-8" />,
                title: "WhatsApp Notifications",
                desc: "Indian sellers don't monitor email dashboards. Insydz delivers every critical price alert directly to your WhatsApp — with the competitor name, old price, new price, percentage drop, and an AI-suggested response price in INR.",
                link: "/features/whatsapp-alerts-feature",
                linkLabel: "WhatsApp price alerts",
                color: "from-green-500 to-emerald-500",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-orange-400 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">{item.desc}</p>
                    <button onClick={() => setLocation(item.link)} className="text-xs font-semibold text-orange-600 hover:text-orange-700 underline">
                      See {item.linkLabel} →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: HOW IT WORKS ───────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              Competitor Price Tracking —
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Done Automatically</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Insydz continuously tracks competitor prices across Amazon & Flipkart and alerts you the moment something changes — so you can act before sales drop.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 -translate-y-1/2"></div>
            <div className="grid lg:grid-cols-3 gap-12 relative">
              {[
                {
                  step: 1,
                  title: "Add Your Product",
                  desc: "Enter your ASIN or Flipkart listing. Insydz automatically identifies 100+ competitors in your category. Setup: under 2 minutes.",
                  visual: <ShoppingBag className="w-12 h-12 text-orange-600 mx-auto" />,
                  bg: "bg-orange-100 dark:bg-orange-900/20",
                },
                {
                  step: 2,
                  title: "AI Monitors Prices 24/7",
                  desc: "We track competitor price changes, discounts, and stock signals continuously — overnight, weekends, and during festive sale events.",
                  visual: <Eye className="w-12 h-12 text-purple-600 mx-auto animate-pulse" />,
                  bg: "bg-purple-100 dark:bg-purple-900/20",
                },
                {
                  step: 3,
                  title: "Get Instant Alerts & Actions",
                  isAlerts: true,
                },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-white dark:bg-gray-800 border-2 border-orange-300 dark:border-orange-700 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">{step.step}</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{step.title}</h3>
                    {step.isAlerts ? (
                      <div className="space-y-3 text-left">
                        <div className="flex items-start gap-2 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg p-3">
                          <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-800 dark:text-gray-300">"Competitor dropped price by 11%"</span>
                        </div>
                        <div className="flex items-start gap-2 bg-orange-50 dark:bg-orange-900/20 border border-orange-300 dark:border-orange-700 rounded-lg p-3">
                          <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-800 dark:text-gray-300">"Lowest price changed — Buy Box at risk"</span>
                        </div>
                        <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg p-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-800 dark:text-gray-300">"AI suggests: ₹1,049 — protects margin & Buy Box"</span>
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
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group"
            >
              👉 Track Your First Competitor Free
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: WHAT SELLERS DO WITH INSIGHTS ─────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              What Sellers Do with
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Competitor Price Insights</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real-time pricing intelligence is only valuable if it drives action. Here's what Indian sellers actually do once they have it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-7 h-7" />,
                title: "React Instantly to Price Drops",
                desc: "WhatsApp alert arrives within minutes of a competitor drop. Reprice from your phone before your Buy Box rank slips — even at 11pm during sale season.",
                trend: <TrendingDown className="w-5 h-5 text-red-500" />,
              },
              {
                icon: <Shield className="w-7 h-7" />,
                title: "Protect Buy Box Without Panic Discounting",
                desc: "See your margin floor alongside every alert. Make informed price decisions — not desperate ones — knowing exactly how low you can go without selling at a loss.",
                trend: <Shield className="w-5 h-5 text-green-500" />,
              },
              {
                icon: <Eye className="w-7 h-7" />,
                title: "Identify Fake Price Wars",
                desc: "Historical price trend data reveals which competitor drops are temporary tactics and which represent a real market shift — so you don't cut prices unnecessarily.",
                trend: <AlertCircle className="w-5 h-5 text-orange-500" />,
              },
              {
                icon: <Clock className="w-7 h-7" />,
                title: "Time Discounts Intelligently",
                desc: "Spot recurring competitor pricing patterns — weekend drops, pre-sale inflation — and time your own promotional pricing to maximise impact and margin.",
                trend: <Clock className="w-5 h-5 text-blue-500" />,
              },
              {
                icon: <TrendingUp className="w-7 h-7" />,
                title: "Increase Profit Without Losing Volume",
                desc: "When all competitors raise prices, you see it immediately and can adjust upward with confidence — capturing higher margins without losing market share.",
                trend: <TrendingUp className="w-5 h-5 text-green-500" />,
              },
              {
                icon: <Target className="w-7 h-7" />,
                title: "Stay Competitive in Your Category",
                desc: "Never be the seller who finds out about a price war on Monday morning after losing the whole weekend's orders.",
                trend: <Target className="w-5 h-5 text-purple-500" />,
              },
            ].map((useCase, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400">
                    {useCase.icon}
                  </div>
                  {useCase.trend}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: INDIA-FIRST + REAL SELLER SCENARIO ────────────────────── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              How Insydz Is Different —
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Built for Indian Marketplace Sellers</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Global price tracking tools weren't designed for the way Indian marketplaces work. Insydz is built specifically for Amazon.in and Flipkart — with Indian seller behaviour, INR data, and WhatsApp-first alerts at its core.
            </p>
          </div>

          {/* Real Seller Scenario */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-2 border-orange-300 dark:border-orange-700 rounded-3xl p-8 mb-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">📌</span>
              <div>
                <p className="text-sm font-bold text-orange-700 dark:text-orange-400 uppercase tracking-wider">Real Seller Scenario</p>
                <p className="font-bold text-gray-900 dark:text-white">Kitchenware Seller, Noida</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Ravi sells premium non-stick cookware on Amazon India. Every Monday his sales would inexplicably drop — but by Tuesday, they were back. For months, he assumed it was an algorithm issue.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              When he started using Insydz, the pattern revealed itself immediately: a competitor was running a Sunday-night-to-Monday-morning flash price drop — going from ₹1,299 to ₹899 at 10pm on Sundays and reverting by Tuesday morning. Ravi was losing his Buy Box every Monday without knowing why.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              With Insydz, he set a price alert for that competitor. The next Sunday at 10:07pm, his WhatsApp buzzed. He repriced from his phone in 3 minutes. By Monday morning, his Buy Box was secure.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Saved in First Month", value: "₹18,000" },
                { label: "Response Time", value: "3 minutes" },
                { label: "Alert Received", value: "10:07pm Sunday" },
              ].map((stat, i) => (
                <div key={i} className="bg-white dark:bg-gray-900 border border-orange-200 dark:border-orange-700 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-orange-600 dark:text-orange-400">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-hidden rounded-2xl border-2 border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="grid grid-cols-3">
              <div className="bg-gray-100 dark:bg-gray-800 px-6 py-4 border-b-2 border-gray-200 dark:border-gray-700">
                <p className="font-bold text-gray-700 dark:text-gray-300 text-sm">Task</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 px-6 py-4 border-b-2 border-gray-200 dark:border-gray-700">
                <p className="font-bold text-gray-500 text-sm text-center">Manual Tracking</p>
              </div>
              <div className="bg-orange-500 px-6 py-4 border-b-2 border-orange-400">
                <p className="font-bold text-white text-sm text-center">✓ Insydz</p>
              </div>

              {comparisonRows.map((row, i) => (
                <>
                  <div key={`f-${i}`} className={`px-6 py-4 border-b border-gray-100 dark:border-gray-800 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800/50"}`}>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{row.feature}</p>
                  </div>
                  <div key={`m-${i}`} className={`px-6 py-4 border-b border-gray-100 dark:border-gray-800 text-center ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800/50"}`}>
                    <p className="text-sm text-gray-500 flex items-center justify-center gap-1"><X className="w-3 h-3 text-red-500 flex-shrink-0" />{row.manual}</p>
                  </div>
                  <div key={`s-${i}`} className={`px-6 py-4 border-b border-gray-100 dark:border-gray-800 ${i % 2 === 0 ? "bg-orange-50 dark:bg-orange-900/10" : "bg-orange-50/50 dark:bg-orange-900/10"}`}>
                    <p className="text-sm text-orange-700 dark:text-orange-400 font-semibold flex items-center justify-center gap-1"><Check className="w-3 h-3 text-green-600 flex-shrink-0" />{row.insydz}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: ROI EXAMPLE ────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              What Real-Time Price Tracking
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Is Worth to Your Business</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Two sellers in the same Flipkart category. Same products. Same pricing. The only difference: one has Insydz, one doesn't.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Without */}
            <div className="rounded-2xl border-2 border-red-300 dark:border-red-700 overflow-hidden shadow-lg">
              <div className="bg-red-50 dark:bg-red-900/30 px-6 py-4">
                <p className="font-bold text-red-700 dark:text-red-400 text-lg">❌ Without Insydz — Monthly Cost</p>
              </div>
              <div className="bg-white dark:bg-gray-900">
                {roiWithout.map((row, i) => (
                  <div key={i} className={`flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800 ${i % 2 !== 0 ? "bg-gray-50 dark:bg-gray-800/50" : ""}`}>
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 pr-2">{row.label}</p>
                    <p className="text-sm font-bold text-red-600 whitespace-nowrap">{row.value}</p>
                  </div>
                ))}
                <div className="flex items-center justify-between px-6 py-4 bg-red-50 dark:bg-red-900/20">
                  <p className="font-bold text-gray-900 dark:text-white">Total Monthly Cost of Slow Reactions</p>
                  <p className="font-black text-red-700 text-lg ml-2 whitespace-nowrap">−₹42,000</p>
                </div>
              </div>
            </div>

            {/* With */}
            <div className="rounded-2xl border-2 border-green-300 dark:border-green-700 overflow-hidden shadow-lg">
              <div className="bg-green-50 dark:bg-green-900/30 px-6 py-4">
                <p className="font-bold text-green-700 dark:text-green-400 text-lg">✅ With Insydz — Same Month</p>
              </div>
              <div className="bg-white dark:bg-gray-900">
                {roiWith.map((row, i) => (
                  <div key={i} className={`flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800 ${i % 2 !== 0 ? "bg-gray-50 dark:bg-gray-800/50" : ""}`}>
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 pr-2">{row.label}</p>
                    <p className="text-sm font-bold text-green-600 whitespace-nowrap">{row.value}</p>
                  </div>
                ))}
                <div className="flex items-center justify-between px-6 py-4 bg-green-50 dark:bg-green-900/20">
                  <p className="font-bold text-gray-900 dark:text-white">Net Monthly Value with Insydz</p>
                  <p className="font-black text-green-700 text-lg ml-2 whitespace-nowrap">+₹51,700</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 border-2 border-orange-400 rounded-2xl p-6 text-center">
            <p className="text-2xl font-black text-gray-900 dark:text-white mb-2">
              ₹93,700/month difference between a seller with real-time price intelligence and one without it
            </p>
            <p className="text-gray-600 dark:text-gray-400">Same category. Same products. The only variable: whether you have a <strong>competitor price tracking tool</strong> working for you 24/7.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FREE PLAN ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
            Start Free.
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">See Real Price Movements.</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">Free Plan — ₹0 / Forever — No credit card required</p>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-2 border-orange-300 dark:border-orange-700 rounded-3xl p-8 mb-8 text-left shadow-xl">
            <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-6 text-center">Free Plan Includes:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                "Track limited products on Amazon India and Flipkart",
                "Competitor price alerts via WhatsApp",
                "Amazon & Flipkart data in INR",
                "No credit card required",
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3 bg-white dark:bg-gray-900 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-white dark:bg-gray-900 border border-orange-200 dark:border-orange-700 rounded-xl p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-bold text-orange-600">Upgrade teaser:</span> Paid plans unlock deeper tracking, more competitors per product, 90-day historical price trends, advanced <button onClick={() => setLocation("/features/buy-box-alerts")} className="underline font-semibold hover:text-orange-700">Buy Box monitoring</button>, and AI pricing recommendations. Upgrade only when you see value.
              </p>
            </div>
          </div>

          <Button onClick={handleGetStarted} size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
          >
            👉 Start Free Price Tracking
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* ── SECTION 9: WHO SHOULD USE IT ─────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-black mb-12 text-center text-gray-900 dark:text-white">
            Who Should Use
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Competitor Price Tracking?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 dark:bg-green-900/10 border-2 border-green-300 dark:border-green-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"><Check className="w-6 h-6 text-white" /></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Best For</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Amazon India and Flipkart active sellers in any category",
                  "Sellers in competitive, price-sensitive product categories",
                  "Sellers with Buy Box-sensitive products (electronics, personal care, home goods)",
                  "Sellers actively protecting their margins during sale events",
                  "D2C brands tracking category price positioning on Indian marketplaces",
                  "Agencies managing multiple Amazon/Flipkart client accounts",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/10 border-2 border-red-300 dark:border-red-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center"><X className="w-6 h-6 text-white" /></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Not Ideal For</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "One-time sellers with no growth plan",
                  "Fixed-price government or regulated categories",
                  "Sellers not actively monitoring competition",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FAQ ───────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-black mb-4 text-center text-gray-900 dark:text-white">
            Competitor Price Tracking — FAQs
          </h2>
          <p className="text-center text-gray-500 mb-12 text-lg">Everything about tracking rival pricing on Amazon India & Flipkart</p>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-orange-300 transition-all">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <span className="font-bold text-gray-900 dark:text-white pr-4 text-lg">{faq.q}</span>
                  {expandedFaq === faq.id
                    ? <ChevronDown className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    : <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  }
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-5 bg-white dark:bg-gray-700/30">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11: ICP-BASED CTAs ────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-4 text-white">Three Paths —</h2>
          <p className="text-xl text-white/90 mb-12">Based on Where You Are Now</p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                emoji: "🆕",
                label: "New Sellers (Free Plan)",
                desc: "The free plan gives you real competitor pricing data from day one — so you launch knowing what price the market will actually bear, not just what you guessed. No credit card required.",
                cta: "Start Free Price Tracking →",
                action: handleGetStarted,
              },
              {
                emoji: "📈",
                label: "Growing Sellers (Growth Plan)",
                desc: "Doing ₹5L+ monthly? Every day of slow price reaction is costing you measurable revenue. The Growth Plan gives you full competitor tracking across your entire catalogue, 90-day price history, Buy Box monitoring, and AI pricing recommendations.",
                cta: "Try Growth Plan →",
                action: () => setLocation("/pricing"),
              },
              {
                emoji: "🏢",
                label: "Agencies & Brand Managers (Demo)",
                desc: "Managing multiple seller accounts? Run competitor price tracking across all clients from one dashboard — with white-label reporting showing pricing wins, Buy Box recovery, and margin protection per account.",
                cta: "Book a Demo →",
                action: () => setLocation("/demo"),
              },
            ].map((card, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-left">
                <p className="text-2xl mb-2">{card.emoji}</p>
                <p className="font-bold text-white mb-2">{card.label}</p>
                <p className="text-white/80 text-sm mb-4">{card.desc}</p>
                <button onClick={card.action} className="text-orange-100 font-semibold text-sm hover:text-white transition-colors underline">{card.cta}</button>
              </div>
            ))}
          </div>

          <Button onClick={handleGetStarted} size="lg"
            className="bg-white hover:bg-gray-100 text-orange-700 font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
          >
            👉 Start Free Price Tracking
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-white/80 mt-6 text-sm">✓ No credit card required  ✓ Setup in 2 minutes  ✓ Cancel anytime</p>
        </div>
      </section>

      {/* ── RELATED USE CASES ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Related Seller Use Cases</h2>
            <p className="text-gray-600 dark:text-gray-400">Explore more ways to grow your ecommerce business</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Find Profitable Products", icon: <Target className="w-8 h-8" />, color: "from-blue-500 to-cyan-500", route: "/use-cases/find-profitable-products" },
              { title: "Analyse Customer Reviews", icon: <MessageCircle className="w-8 h-8" />, color: "from-purple-500 to-pink-500", route: "/use-cases/analyze-customer-reviews" },
              { title: "Improve Amazon & Flipkart SEO", icon: <Search className="w-8 h-8" />, color: "from-green-500 to-emerald-500", route: "/use-cases/improve-seo" },
              { title: "Avoid Stockouts & Missed Sales", icon: <Package className="w-8 h-8" />, color: "from-orange-500 to-red-500", route: "/use-cases/avoid-stockouts" },
            ].map((uc, i) => (
              <div key={i} onClick={() => setLocation(uc.route)} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all cursor-pointer group">
                <div className={`w-14 h-14 bg-gradient-to-br ${uc.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
                  {uc.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors">{uc.title}</h3>
                <ArrowRight className="w-5 h-5 text-orange-600 mt-2 group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STICKY MOBILE CTA ─────────────────────────────────────────────────── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t-2 border-orange-300 dark:border-orange-700 p-4 shadow-2xl z-40">
        <Button onClick={handleGetStarted}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-full shadow-xl"
        >
          👉 Start Free Price Tracking
        </Button>
      </div>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer className="bg-[#0a0f1e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-14">
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="Insydz Logo" className="w-10 h-10 rounded-xl object-contain" />
                <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Insydz</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">India's most powerful competitor price tracking tool for Amazon and Flipkart sellers.</p>
              <button onClick={() => setLocation("/signup")} className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all transform hover:scale-105 shadow-lg">Start Free →</button>
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
                  { label: "Track Competitor Prices", route: "/use-cases/track-competitor-prices" },
                  { label: "Find Profitable Products", route: "/use-cases/find-profitable-products" },
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
                  { label: "Free Price Checker", route: "/free-tools/free-competitor-price-checker" },
                ].map((item, i) => (
                  <li key={i}><button onClick={() => setLocation(item.route)} className="text-sm text-gray-400 hover:text-white transition-colors text-left">{item.label}</button></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Company</h4>
              <ul className="space-y-3">
                {[
                  { label: "About", action: () => setLocation("/about/about-us") },
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
              <p className="text-gray-500 text-sm">© 2025 <span className="text-orange-400 font-semibold">Insydz</span>. All rights reserved. Built for Indian sellers 🇮🇳</p>
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