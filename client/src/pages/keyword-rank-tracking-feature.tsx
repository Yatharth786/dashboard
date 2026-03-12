// import { useState, useEffect } from "react";
// import { useLocation } from "wouter";
// import { 
//   ArrowRight, CheckCircle2, Target, Zap, 
//   Bell, TrendingUp, TrendingDown, Shield,
//   BarChart3, ChevronRight, AlertCircle,
//   Search, X, Check, RefreshCw, Eye, 
//   Sparkles, ChevronDown, LineChart, Award,
//   Filter, Hash, MapPin, Crosshair, Gauge,
//   ThumbsUp, MessageCircle, DollarSign, 
//   Package, Activity, List, Clock, Users
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function KeywordRankTrackingFeaturePage() {
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
//       question: "How often are keyword rankings updated?",
//       answer: "Rankings are updated daily for all tracked keywords. Premium plans offer hourly updates for competitive keywords to catch changes immediately."
//     },
//     {
//       question: "Can I track competitor keywords too?",
//       answer: "Yes! Insydz automatically identifies high-performing keywords your competitors rank for, so you can optimize for the same opportunities."
//     },
//     {
//       question: "Does this work for both Amazon & Flipkart?",
//       answer: "Absolutely! Track keyword rankings across both Amazon India and Flipkart with marketplace-specific insights and recommendations."
//     },
//     {
//       question: "What if my product doesn't rank yet?",
//       answer: "Insydz shows you which keywords you should target based on relevance, search volume, and competition — helping you rank faster."
//     },
//     {
//       question: "Is keyword tracking available on the free plan?",
//       answer: "Yes! The free plan includes basic keyword tracking for limited keywords. Upgrade for unlimited tracking and advanced competitor analysis."
//     },
//     {
//       question: "How does this help improve sales?",
//       answer: "Higher rankings = more visibility = more sales. By tracking and optimizing for the right keywords, you increase organic traffic and conversions without ads."
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
//               <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
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
//                 className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all"
//               >
//                 Start Free
//               </Button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
//           <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 rounded-full px-4 py-2">
//                 <Search className="w-4 h-4 text-blue-600" />
//                 <span className="text-sm font-medium text-blue-700">Feature Spotlight</span>
//               </div>

//               <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
//                 Keyword & Rank Tracking —
//                 <br />
//                 <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
//                   Know Where You Rank
//                 </span>
//                 <br />
//                 for Every Keyword
//               </h1>

//               <p className="text-xl text-gray-700 leading-relaxed">
//                 Track rankings for target keywords across Amazon & Flipkart automatically. 
//                 <span className="text-blue-700 font-semibold"> See what's working, find opportunities, and optimize for maximum visibility.</span>
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button
//                   onClick={handleGetStarted}
//                   size="lg"
//                   className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all group"
//                 >
//                   🔍 Start Tracking Rankings Free
//                   <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//                 <Button
//                   onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
//                   size="lg"
//                   variant="outline"
//                   className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 font-semibold px-8 py-6 text-lg rounded-full"
//                 >
//                   See How It Works →
//                 </Button>
//               </div>

//               <div className="flex flex-wrap items-center gap-6 pt-4">
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <CheckCircle2 className="w-5 h-5 text-blue-600" />
//                   <span>Daily rank updates</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <CheckCircle2 className="w-5 h-5 text-blue-600" />
//                   <span>Competitor keyword analysis</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <CheckCircle2 className="w-5 h-5 text-blue-600" />
//                   <span>Amazon & Flipkart support</span>
//                 </div>
//               </div>
//             </div>

//             {/* Hero Visual */}
//             <div className="relative">
//               <div className="relative bg-white border-2 border-blue-200 rounded-3xl p-8 shadow-2xl">
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between pb-4 border-b border-gray-200">
//                     <h3 className="font-bold text-gray-900">Keyword Rankings</h3>
//                     <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
//                       <Activity className="w-3 h-3" />
//                       Live Tracking
//                     </span>
//                   </div>

//                   {/* Ranking List */}
//                   <div className="space-y-3">
//                     <div className="bg-green-50 border border-green-200 rounded-lg p-3">
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="text-sm font-medium text-gray-700">wireless earbuds bluetooth</span>
//                         <div className="flex items-center gap-2">
//                           <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-semibold">Rank #3</span>
//                           <TrendingUp className="w-4 h-4 text-green-600" />
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-4 text-xs text-gray-500">
//                         <span>Volume: 45K/mo</span>
//                         <span className="text-green-600 font-semibold">↑ 5 positions</span>
//                       </div>
//                     </div>

//                     <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="text-sm font-medium text-gray-700">noise cancelling headphones</span>
//                         <div className="flex items-center gap-2">
//                           <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded font-semibold">Rank #12</span>
//                           <Activity className="w-4 h-4 text-yellow-600" />
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-4 text-xs text-gray-500">
//                         <span>Volume: 28K/mo</span>
//                         <span className="text-gray-600">No change</span>
//                       </div>
//                     </div>

//                     <div className="bg-red-50 border-2 border-red-400 rounded-lg p-3 animate-pulse">
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="text-sm font-medium text-gray-700">true wireless earbuds</span>
//                         <div className="flex items-center gap-2">
//                           <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded font-semibold">Rank #28</span>
//                           <TrendingDown className="w-4 h-4 text-red-600" />
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-4 text-xs">
//                         <span className="text-gray-500">Volume: 52K/mo</span>
//                         <span className="text-red-600 font-semibold">↓ 8 positions</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Opportunity Alert */}
//                   <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-400 rounded-2xl p-4 mt-4">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
//                         <Sparkles className="w-5 h-5 text-white" />
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-900 text-sm">Opportunity Found</p>
//                         <p className="text-xs text-gray-600">"budget earbuds" - Low competition, 18K searches</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl px-4 py-2 shadow-xl">
//                   <p className="text-white font-bold text-sm">Tracking 47</p>
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
//               Why Sellers Struggle
//               <br />
//               <span className="text-red-600">Without Rank Tracking</span>
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {[
//               {
//                 icon: <Eye className="w-8 h-8" />,
//                 title: "No idea where products actually rank",
//                 color: "from-red-500 to-orange-500"
//               },
//               {
//                 icon: <Clock className="w-8 h-8" />,
//                 title: "Manually checking rankings wastes hours",
//                 color: "from-orange-500 to-yellow-500"
//               },
//               {
//                 icon: <TrendingDown className="w-8 h-8" />,
//                 title: "Miss ranking drops until sales crash",
//                 color: "from-yellow-500 to-orange-500"
//               },
//               {
//                 icon: <Search className="w-8 h-8" />,
//                 title: "Don't know which keywords to target",
//                 color: "from-orange-500 to-red-500"
//               }
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
//               Products lose <span className="text-red-600">60-80% of organic traffic</span> when rankings drop
//             </p>
//             <p className="text-gray-700 text-lg">
//               And most sellers don't notice until it's too late.
//             </p>
//           </div>

//           {/* Visual Comparison */}
//           <div className="mt-12 grid md:grid-cols-2 gap-8">
//             <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8 text-center">
//               <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <X className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Manual Checking</h3>
//               <p className="text-gray-700 text-sm mb-4">Hours wasted, data already outdated</p>
//               <div className="space-y-2 text-left">
//                 <div className="flex items-start gap-2">
//                   <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
//                   <span className="text-sm text-gray-600">Time-consuming daily checks</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
//                   <span className="text-sm text-gray-600">No historical data or trends</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
//                   <span className="text-sm text-gray-600">Limited to few keywords</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8 text-center">
//               <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Check className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Tracking</h3>
//               <p className="text-gray-700 text-sm mb-4">Real-time insights, always accurate</p>
//               <div className="space-y-2 text-left">
//                 <div className="flex items-start gap-2">
//                   <Check className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
//                   <span className="text-sm text-gray-600">Daily automatic updates</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <Check className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
//                   <span className="text-sm text-gray-600">Historical trends & insights</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <Check className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
//                   <span className="text-sm text-gray-600">Unlimited keyword tracking</span>
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
//               How Keyword Rank Tracking Works
//             </h2>
//             <p className="text-xl text-gray-700 max-w-3xl mx-auto">
//               Insydz automatically tracks your keyword rankings daily and alerts you to changes — 
//               <span className="text-blue-700 font-semibold"> so you can optimize before rankings drop and traffic disappears.</span>
//             </p>
//           </div>

//           <div className="relative">
//             <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 -translate-y-1/2"></div>

//             <div className="grid lg:grid-cols-4 gap-8 relative">
//               {[
//                 {
//                   step: "1",
//                   title: "Add target keywords",
//                   detail: "Or let AI suggest high-opportunity keywords",
//                   icon: <Hash className="w-12 h-12" />
//                 },
//                 {
//                   step: "2",
//                   title: "Insydz tracks rankings daily",
//                   detail: "Across Amazon & Flipkart automatically",
//                   icon: <RefreshCw className="w-12 h-12" />
//                 },
//                 {
//                   step: "3",
//                   title: "Monitor rank changes",
//                   detail: "See what's improving or dropping",
//                   icon: <BarChart3 className="w-12 h-12" />
//                 },
//                 {
//                   step: "4",
//                   title: "Get alerts & insights",
//                   detail: "Dashboard + WhatsApp notifications",
//                   icon: <Bell className="w-12 h-12" />
//                 }
//               ].map((item, i) => (
//                 <div key={i} className="bg-white border-2 border-blue-300 rounded-2xl p-6 text-center relative z-10 shadow-lg hover:shadow-xl transition-all">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-black text-white">
//                     {item.step}
//                   </div>
//                   <div className="bg-blue-100 rounded-xl p-4 mb-4 text-blue-600">
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
//               className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
//             >
//               🔍 Track Your First Keyword Free
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
//               What You Can Do with Keyword Tracking
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               { icon: <TrendingUp />, title: "Improve organic rankings", detail: "Optimize for keywords that matter", color: "text-blue-600" },
//               { icon: <Eye />, title: "Catch ranking drops early", detail: "Fix issues before sales suffer", color: "text-red-600" },
//               { icon: <Sparkles />, title: "Find new keyword opportunities", detail: "AI suggests untapped keywords", color: "text-purple-600" },
//               { icon: <Users />, title: "Spy on competitor keywords", detail: "See what's working for them", color: "text-orange-600" },
//               { icon: <Target />, title: "Track SEO improvements", detail: "Measure listing optimization impact", color: "text-green-600" },
//               { icon: <Award />, title: "Increase organic traffic", detail: "More visibility without ad spend", color: "text-cyan-600" }
//             ].map((outcome, i) => (
//               <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className={`w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center ${outcome.color}`}>
//                     {outcome.icon}
//                   </div>
//                   <ThumbsUp className="w-6 h-6 text-blue-500" />
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
//               Advanced Keyword Intelligence
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 feature: "Daily Rank Updates",
//                 benefit: "Never miss a ranking change",
//                 icon: <RefreshCw className="w-8 h-8" />,
//                 color: "from-blue-500 to-cyan-500"
//               },
//               {
//                 feature: "Historical Rank Data",
//                 benefit: "Track trends over weeks & months",
//                 icon: <LineChart className="w-8 h-8" />,
//                 color: "from-purple-500 to-pink-500"
//               },
//               {
//                 feature: "Competitor Keyword Analysis",
//                 benefit: "See what keywords they rank for",
//                 icon: <Users className="w-8 h-8" />,
//                 color: "from-red-500 to-orange-500"
//               },
//               {
//                 feature: "Search Volume Insights",
//                 benefit: "Prioritize high-traffic keywords",
//                 icon: <BarChart3 className="w-8 h-8" />,
//                 color: "from-green-500 to-emerald-500"
//               },
//               {
//                 feature: "Keyword Opportunity Finder",
//                 benefit: "AI suggests low-competition keywords",
//                 icon: <Sparkles className="w-8 h-8" />,
//                 color: "from-orange-500 to-red-500"
//               },
//               {
//                 feature: "Rank Change Alerts",
//                 benefit: "Get notified of big movements",
//                 icon: <Bell className="w-8 h-8" />,
//                 color: "from-indigo-500 to-purple-500"
//               }
//             ].map((item, i) => (
//               <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-xl transition-all">
//                 <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>
//                   {item.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">{item.feature}</h3>
//                 <p className="text-gray-600 flex items-center gap-2">
//                   <ArrowRight className="w-4 h-4 text-blue-600" />
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
//               Manual Tracking vs Insydz
//             </h2>
//           </div>

//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Aspect</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">Manual Tracking</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold text-blue-700 bg-blue-50">With Insydz</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {[
//                   { aspect: "Update Frequency", manual: "When you remember", insydz: "Automatic daily tracking" },
//                   { aspect: "Keywords Tracked", manual: "5-10 max", insydz: "Unlimited keywords" },
//                   { aspect: "Historical Data", manual: "None or manual logs", insydz: "Full history & trends" },
//                   { aspect: "Competitor Insights", manual: "Impossible to track", insydz: "Competitor keyword analysis" },
//                   { aspect: "Time Investment", manual: "2-3 hours weekly", insydz: "5 minutes monthly" }
//                 ].map((row, i) => (
//                   <tr key={i} className="border-t border-gray-200">
//                     <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.aspect}</td>
//                     <td className="px-6 py-4 text-center">
//                       <div className="flex items-center justify-center gap-2">
//                         <X className="w-5 h-5 text-red-500" />
//                         <span className="text-sm text-gray-600">{row.manual}</span>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 text-center bg-blue-50">
//                       <div className="flex items-center justify-center gap-2">
//                         <Check className="w-5 h-5 text-blue-600" />
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
//               className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl"
//             >
//               🔍 Switch to Automated Tracking
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* PLG Entry Point */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Start Free. Track Rankings Today.
//             </h2>
//           </div>

//           <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-3xl p-8 shadow-xl">
//             <div className="text-center mb-8">
//               <div className="inline-flex items-baseline gap-2 mb-4">
//                 <span className="text-6xl font-black text-blue-600">₹0</span>
//                 <span className="text-2xl text-gray-600">/ Forever</span>
//               </div>
//               <p className="text-lg text-gray-700">Free Plan Includes:</p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-4 mb-8">
//               {[
//                 "Track limited keywords",
//                 "Daily rank updates",
//                 "Amazon & Flipkart support",
//                 "Basic keyword suggestions"
//               ].map((feature, i) => (
//                 <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-4">
//                   <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
//                   <span className="text-gray-900 font-medium">{feature}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="bg-white rounded-2xl p-6 mb-6">
//               <p className="text-sm text-gray-700 mb-2">
//                 <span className="font-bold text-blue-600">Upgrade Teaser:</span> Unlock unlimited keywords, hourly updates, and competitor analysis on paid plans.
//               </p>
//             </div>

//             <div className="text-center">
//               <Button
//                 onClick={handleGetStarted}
//                 size="lg"
//                 className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl"
//               >
//                 🔍 Start Tracking Keywords Free
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
//               Is Keyword Tracking Right for You?
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
//                   <Check className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Perfect For</h3>
//               </div>
//               <ul className="space-y-4">
//                 {[
//                   "Sellers optimizing listings for organic traffic",
//                   "Brands tracking SEO performance",
//                   "Competitive categories where rank matters",
//                   "Agencies managing multiple accounts",
//                   "Sellers wanting to reduce ad dependency"
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
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
//                   "100% PPC-dependent sellers",
//                   "Products with no search demand",
//                   "Sellers who don't optimize listings"
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
//               Keyword Tracking – FAQs
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
//               { title: "Product Research", icon: <Target />, color: "from-indigo-500 to-purple-500" },
//               { title: "Review Analytics", icon: <MessageCircle />, color: "from-purple-500 to-pink-500" },
//               { title: "Price Optimization", icon: <DollarSign />, color: "from-green-500 to-emerald-500" },
//               { title: "Competitor Tracking", icon: <Users />, color: "from-orange-500 to-red-500" },
//               { title: "AI Recommendations", icon: <Sparkles />, color: "from-cyan-500 to-blue-500" },
//               { title: "WhatsApp Alerts", icon: <Bell />, color: "from-emerald-500 to-green-500" }
//             ].map((feature, i) => (
//               <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer group">
//                 <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
//                 <ArrowRight className="w-5 h-5 text-blue-600 mt-2 group-hover:translate-x-1 transition-transform" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//             Stop Guessing Rankings.
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//               Track Every Keyword Automatically.
//             </span>
//           </h2>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
//             >
//               🔍 Start Keyword Tracking Free
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//             <Button
//               onClick={() => setLocation("/")}
//               size="lg"
//               variant="outline"
//               className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 font-semibold px-12 py-6 text-lg rounded-full"
//             >
//               Explore All Features →
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Sticky Mobile CTA */}
//       <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-blue-300 p-4 shadow-2xl z-40">
//         <Button
//           onClick={handleGetStarted}
//           className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 rounded-full shadow-xl"
//         >
//           🔍 Start Keyword Tracking Free
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
//   Search, X, Check, RefreshCw, Eye, 
//   Sparkles, ChevronDown, LineChart, Award,
//   Filter, Hash, MapPin, Crosshair, Gauge,
//   ThumbsUp, MessageCircle, DollarSign, 
//   Package, Activity, List, Clock, Users,
//   Menu, Sun, Moon, ShoppingBag, Store,
//   Briefcase, Code, Globe, Trophy, ArrowLeft,
//   BookOpen, Video, FileText,
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

// export default function KeywordRankTrackingFeaturePage() {
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
//     { question: "How often are keyword rankings updated?", answer: "Rankings are updated daily for all tracked keywords. Premium plans offer hourly updates for competitive keywords to catch changes immediately." },
//     { question: "Can I track competitor keywords too?", answer: "Yes! Insydz automatically identifies high-performing keywords your competitors rank for, so you can optimize for the same opportunities." },
//     { question: "Does this work for both Amazon & Flipkart?", answer: "Absolutely! Track keyword rankings across both Amazon India and Flipkart with marketplace-specific insights and recommendations." },
//     { question: "What if my product doesn't rank yet?", answer: "Insydz shows you which keywords you should target based on relevance, search volume, and competition — helping you rank faster." },
//     { question: "Is keyword tracking available on the free plan?", answer: "Yes! The free plan includes basic keyword tracking for limited keywords. Upgrade for unlimited tracking and advanced competitor analysis." },
//     { question: "How does this help improve sales?", answer: "Higher rankings = more visibility = more sales. By tracking and optimizing for the right keywords, you increase organic traffic and conversions without ads." }
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
//               <button onClick={() => setLocation('/')} className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all">
//                 <ArrowLeft className="w-4 h-4" />
//                 <span className="hidden sm:inline">Back</span>
//               </button>
//               <div className="flex items-center space-x-1 group cursor-pointer" onClick={() => setLocation('/')}>
//                 <div className="relative">
//                   <img src="/logo.png" alt="Insydz Logo" className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain" />
//                   <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
//                 </div>
//                 <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Insydz</span>
//               </div>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex items-center space-x-2" ref={dropdownRef}>
//               <button onClick={() => setLocation('/')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all">Home</button>

//               {/* Solutions Dropdown */}
//               <div className="relative">
//                 <button onMouseEnter={() => setActiveDropdown('Solutions')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all flex items-center gap-1">
//                   Solutions <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Solutions' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {activeDropdown === 'Solutions' && (
//                   <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
//                     {navigationMenu.Solutions.map((item, i) => (
//                       <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center gap-3 group">
//                         <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">{item.icon}</span>
//                         <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-1">{item.name}</span>
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Use Cases Dropdown */}
//               <div className="relative">
//                 <button onMouseEnter={() => setActiveDropdown('Use Cases')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all flex items-center gap-1">
//                   Use Cases <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Use Cases' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {activeDropdown === 'Use Cases' && (
//                   <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
//                     {navigationMenu["Use Cases"].map((item, i) => (
//                       <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center gap-3 group">
//                         <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">{item.icon}</span>
//                         <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">{item.name}</span>
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Features Dropdown - HIGHLIGHTED */}
//               <div className="relative">
//                 <button onMouseEnter={() => setActiveDropdown('Features')} className="px-3 py-2 text-sm text-blue-600 dark:text-blue-500 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all flex items-center gap-1">
//                   Features <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Features' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {activeDropdown === 'Features' && (
//                   <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
//                     {navigationMenu.Features.map((item, i) => (
//                       <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center gap-3 group">
//                         <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">{item.icon}</span>
//                         <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-1">{item.name}</span>
//                         {item.badge && <span className="text-xs bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <button onClick={() => setLocation('/pricing')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all">Pricing</button>
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
//                 <button onMouseEnter={() => setActiveDropdown('Resources')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all flex items-center gap-1">
//                   Resources <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Resources' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {activeDropdown === 'Resources' && (
//                   <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
//                     {navigationMenu.Resources.map((item, i) => (
//                       <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center gap-3 group">
//                         <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">{item.icon}</span>
//                         <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-1">{item.name}</span>
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//              {/* About Dropdown */}
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
//               <button onClick={() => { setLocation('/'); setIsMenuOpen(false); }} className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-medium">
//                 <ArrowLeft className="w-4 h-4" /> Back to Home
//               </button>

//               <div>
//                 <button onClick={() => toggleMobileMenu('Solutions')} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-medium">
//                   Solutions <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Solutions' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {mobileActiveMenu === 'Solutions' && (
//                   <div className="ml-4 mt-2 space-y-1">
//                     {navigationMenu.Solutions.map((item, i) => (
//                       <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg">
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
//                 <button onClick={() => toggleMobileMenu('Features')} className="flex items-center justify-between w-full px-4 py-2 text-blue-600 dark:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-semibold">
//                   Features <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Features' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {mobileActiveMenu === 'Features' && (
//                   <div className="ml-4 mt-2 space-y-1">
//                     {navigationMenu.Features.map((item, i) => (
//                       <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg">
//                         {item.icon}{item.name}
//                         {item.badge && <span className="text-xs bg-blue-500 text-white px-1.5 py-0.5 rounded-full">{item.badge}</span>}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <button onClick={() => setLocation('/pricing')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-medium">Pricing</button>
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
//              {/* Mobile About */}
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
//       <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
//           <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
//         </div>
//         <div className="relative max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 rounded-full px-4 py-2">
//                 <Search className="w-4 h-4 text-blue-600" />
//                 <span className="text-sm font-medium text-blue-700">Feature Spotlight</span>
//               </div>
//               <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
//                 Keyword & Rank Tracking —
//                 <br />
//                 <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">Know Where You Rank</span>
//                 <br />
//                 for Every Keyword
//               </h1>
//               <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
//                 Track rankings for target keywords across Amazon & Flipkart automatically.
//                 <span className="text-blue-700 font-semibold"> See what's working, find opportunities, and optimize for maximum visibility.</span>
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all group">
//                   🔍 Start Tracking Rankings Free
//                   <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//                 <Button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} size="lg" variant="outline" className="border-2 border-blue-600 text-blue-700 dark:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold px-8 py-6 text-lg rounded-full">
//                   See How It Works →
//                 </Button>
//               </div>
//               <div className="flex flex-wrap items-center gap-6 pt-4">
//                 {["Daily rank updates", "Competitor keyword analysis", "Amazon & Flipkart support"].map((item, i) => (
//                   <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
//                     <CheckCircle2 className="w-5 h-5 text-blue-600" />
//                     <span>{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Hero Visual */}
//             <div className="relative">
//               <div className="relative bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-blue-800 rounded-3xl p-8 shadow-2xl">
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
//                     <h3 className="font-bold text-gray-900 dark:text-white">Keyword Rankings</h3>
//                     <span className="text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
//                       <Activity className="w-3 h-3" /> Live Tracking
//                     </span>
//                   </div>
//                   <div className="space-y-3">
//                     <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-3">
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="text-sm font-medium text-gray-700 dark:text-gray-300">wireless earbuds bluetooth</span>
//                         <div className="flex items-center gap-2">
//                           <span className="text-xs bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 px-2 py-1 rounded font-semibold">Rank #3</span>
//                           <TrendingUp className="w-4 h-4 text-green-600" />
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
//                         <span>Volume: 45K/mo</span>
//                         <span className="text-green-600 font-semibold">↑ 5 positions</span>
//                       </div>
//                     </div>
//                     <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-3">
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="text-sm font-medium text-gray-700 dark:text-gray-300">noise cancelling headphones</span>
//                         <div className="flex items-center gap-2">
//                           <span className="text-xs bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400 px-2 py-1 rounded font-semibold">Rank #12</span>
//                           <Activity className="w-4 h-4 text-yellow-600" />
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
//                         <span>Volume: 28K/mo</span>
//                         <span>No change</span>
//                       </div>
//                     </div>
//                     <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-600 rounded-lg p-3 animate-pulse">
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="text-sm font-medium text-gray-700 dark:text-gray-300">true wireless earbuds</span>
//                         <div className="flex items-center gap-2">
//                           <span className="text-xs bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400 px-2 py-1 rounded font-semibold">Rank #28</span>
//                           <TrendingDown className="w-4 h-4 text-red-600" />
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-4 text-xs">
//                         <span className="text-gray-500 dark:text-gray-400">Volume: 52K/mo</span>
//                         <span className="text-red-600 font-semibold">↓ 8 positions</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-400 dark:border-blue-600 rounded-2xl p-4 mt-4">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
//                         <Sparkles className="w-5 h-5 text-white" />
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-900 dark:text-white text-sm">Opportunity Found</p>
//                         <p className="text-xs text-gray-600 dark:text-gray-400">"budget earbuds" - Low competition, 18K searches</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl px-4 py-2 shadow-xl">
//                   <p className="text-white font-bold text-sm">Tracking 47</p>
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
//               Why Sellers Struggle <br /><span className="text-red-600">Without Rank Tracking</span>
//             </h2>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {[
//               { icon: <Eye className="w-8 h-8" />, title: "No idea where products actually rank", color: "from-red-500 to-orange-500" },
//               { icon: <Clock className="w-8 h-8" />, title: "Manually checking rankings wastes hours", color: "from-orange-500 to-yellow-500" },
//               { icon: <TrendingDown className="w-8 h-8" />, title: "Miss ranking drops until sales crash", color: "from-yellow-500 to-orange-500" },
//               { icon: <Search className="w-8 h-8" />, title: "Don't know which keywords to target", color: "from-orange-500 to-red-500" }
//             ].map((pain, i) => (
//               <div key={i} className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all group">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>{pain.icon}</div>
//                 <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{pain.title}</p>
//               </div>
//             ))}
//           </div>
//           <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-400 dark:border-red-600 rounded-3xl p-8 text-center shadow-lg">
//             <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
//             <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Products lose <span className="text-red-600">60-80% of organic traffic</span> when rankings drop</p>
//             <p className="text-gray-700 dark:text-gray-300 text-lg">And most sellers don't notice until it's too late.</p>
//           </div>
//           <div className="mt-12 grid md:grid-cols-2 gap-8">
//             <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-2xl p-8 text-center">
//               <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4"><X className="w-10 h-10 text-white" /></div>
//               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Manual Checking</h3>
//               <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">Hours wasted, data already outdated</p>
//               <div className="space-y-2 text-left">
//                 {["Time-consuming daily checks", "No historical data or trends", "Limited to few keywords"].map((item, i) => (
//                   <div key={i} className="flex items-start gap-2">
//                     <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
//                     <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-2xl p-8 text-center">
//               <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"><Check className="w-10 h-10 text-white" /></div>
//               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Automated Tracking</h3>
//               <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">Real-time insights, always accurate</p>
//               <div className="space-y-2 text-left">
//                 {["Daily automatic updates", "Historical trends & insights", "Unlimited keyword tracking"].map((item, i) => (
//                   <div key={i} className="flex items-start gap-2">
//                     <Check className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
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
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">How Keyword Rank Tracking Works</h2>
//             <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
//               Insydz automatically tracks your keyword rankings daily and alerts you to changes —
//               <span className="text-blue-700 font-semibold"> so you can optimize before rankings drop and traffic disappears.</span>
//             </p>
//           </div>
//           <div className="relative">
//             <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 -translate-y-1/2"></div>
//             <div className="grid lg:grid-cols-4 gap-8 relative">
//               {[
//                 { step: "1", title: "Add target keywords", detail: "Or let AI suggest high-opportunity keywords", icon: <Hash className="w-12 h-12" /> },
//                 { step: "2", title: "Insydz tracks rankings daily", detail: "Across Amazon & Flipkart automatically", icon: <RefreshCw className="w-12 h-12" /> },
//                 { step: "3", title: "Monitor rank changes", detail: "See what's improving or dropping", icon: <BarChart3 className="w-12 h-12" /> },
//                 { step: "4", title: "Get alerts & insights", detail: "Dashboard + WhatsApp notifications", icon: <Bell className="w-12 h-12" /> }
//               ].map((item, i) => (
//                 <div key={i} className="bg-white dark:bg-gray-800 border-2 border-blue-300 dark:border-blue-700 rounded-2xl p-6 text-center relative z-10 shadow-lg hover:shadow-xl transition-all">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-black text-white">{item.step}</div>
//                   <div className="bg-blue-100 dark:bg-blue-900/20 rounded-xl p-4 mb-4 text-blue-600">{item.icon}</div>
//                   <p className="text-gray-900 dark:text-white font-semibold mb-2">{item.title}</p>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">{item.detail}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="text-center mt-12">
//             <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group">
//               🔍 Track Your First Keyword Free
//               <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* What This Feature Helps You Do */}
//       <section className="py-20 px-4 bg-white dark:bg-gray-950">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">What You Can Do with Keyword Tracking</h2>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               { icon: <TrendingUp />, title: "Improve organic rankings", detail: "Optimize for keywords that matter", color: "text-blue-600" },
//               { icon: <Eye />, title: "Catch ranking drops early", detail: "Fix issues before sales suffer", color: "text-red-600" },
//               { icon: <Sparkles />, title: "Find new keyword opportunities", detail: "AI suggests untapped keywords", color: "text-purple-600" },
//               { icon: <Users />, title: "Spy on competitor keywords", detail: "See what's working for them", color: "text-orange-600" },
//               { icon: <Target />, title: "Track SEO improvements", detail: "Measure listing optimization impact", color: "text-green-600" },
//               { icon: <Award />, title: "Increase organic traffic", detail: "More visibility without ad spend", color: "text-cyan-600" }
//             ].map((outcome, i) => (
//               <div key={i} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className={`w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center ${outcome.color}`}>{outcome.icon}</div>
//                   <ThumbsUp className="w-6 h-6 text-blue-500" />
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
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Advanced Keyword Intelligence</h2>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { feature: "Daily Rank Updates", benefit: "Never miss a ranking change", icon: <RefreshCw className="w-8 h-8" />, color: "from-blue-500 to-cyan-500" },
//               { feature: "Historical Rank Data", benefit: "Track trends over weeks & months", icon: <LineChart className="w-8 h-8" />, color: "from-purple-500 to-pink-500" },
//               { feature: "Competitor Keyword Analysis", benefit: "See what keywords they rank for", icon: <Users className="w-8 h-8" />, color: "from-red-500 to-orange-500" },
//               { feature: "Search Volume Insights", benefit: "Prioritize high-traffic keywords", icon: <BarChart3 className="w-8 h-8" />, color: "from-green-500 to-emerald-500" },
//               { feature: "Keyword Opportunity Finder", benefit: "AI suggests low-competition keywords", icon: <Sparkles className="w-8 h-8" />, color: "from-orange-500 to-red-500" },
//               { feature: "Rank Change Alerts", benefit: "Get notified of big movements", icon: <Bell className="w-8 h-8" />, color: "from-indigo-500 to-purple-500" }
//             ].map((item, i) => (
//               <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-blue-400 hover:shadow-xl transition-all">
//                 <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>{item.icon}</div>
//                 <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.feature}</h3>
//                 <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
//                   <ArrowRight className="w-4 h-4 text-blue-600" />{item.benefit}
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
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Manual Tracking vs Insydz</h2>
//           </div>
//           <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gray-100 dark:bg-gray-800">
//                   <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-300">Aspect</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 dark:text-gray-300">Manual Tracking</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20">With Insydz</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {[
//                   { aspect: "Update Frequency", manual: "When you remember", insydz: "Automatic daily tracking" },
//                   { aspect: "Keywords Tracked", manual: "5-10 max", insydz: "Unlimited keywords" },
//                   { aspect: "Historical Data", manual: "None or manual logs", insydz: "Full history & trends" },
//                   { aspect: "Competitor Insights", manual: "Impossible to track", insydz: "Competitor keyword analysis" },
//                   { aspect: "Time Investment", manual: "2-3 hours weekly", insydz: "5 minutes monthly" }
//                 ].map((row, i) => (
//                   <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
//                     <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{row.aspect}</td>
//                     <td className="px-6 py-4 text-center">
//                       <div className="flex items-center justify-center gap-2">
//                         <X className="w-5 h-5 text-red-500" />
//                         <span className="text-sm text-gray-600 dark:text-gray-400">{row.manual}</span>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 text-center bg-blue-50 dark:bg-blue-900/20">
//                       <div className="flex items-center justify-center gap-2">
//                         <Check className="w-5 h-5 text-blue-600" />
//                         <span className="text-sm text-gray-900 dark:text-white font-medium">{row.insydz}</span>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="text-center mt-8">
//             <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl">
//               🔍 Switch to Automated Tracking
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* PLG Entry Point */}
//       <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Start Free. Track Rankings Today.</h2>
//           </div>
//           <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-3xl p-8 shadow-xl">
//             <div className="text-center mb-8">
//               <div className="inline-flex items-baseline gap-2 mb-4">
//                 <span className="text-6xl font-black text-blue-600">₹0</span>
//                 <span className="text-2xl text-gray-600 dark:text-gray-400">/ Forever</span>
//               </div>
//               <p className="text-lg text-gray-700 dark:text-gray-300">Free Plan Includes:</p>
//             </div>
//             <div className="grid md:grid-cols-2 gap-4 mb-8">
//               {["Track limited keywords", "Daily rank updates", "Amazon & Flipkart support", "Basic keyword suggestions"].map((feature, i) => (
//                 <div key={i} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-4">
//                   <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
//                   <span className="text-gray-900 dark:text-white font-medium">{feature}</span>
//                 </div>
//               ))}
//             </div>
//             <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6">
//               <p className="text-sm text-gray-700 dark:text-gray-300">
//                 <span className="font-bold text-blue-600">Upgrade Teaser:</span> Unlock unlimited keywords, hourly updates, and competitor analysis on paid plans.
//               </p>
//             </div>
//             <div className="text-center">
//               <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl">
//                 🔍 Start Tracking Keywords Free
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Who This Feature Is For */}
//       <section className="py-20 px-4 bg-white dark:bg-gray-950">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Is Keyword Tracking Right for You?</h2>
//           </div>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-2xl p-8">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center"><Check className="w-6 h-6 text-white" /></div>
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Perfect For</h3>
//               </div>
//               <ul className="space-y-4">
//                 {["Sellers optimizing listings for organic traffic", "Brands tracking SEO performance", "Competitive categories where rank matters", "Agencies managing multiple accounts", "Sellers wanting to reduce ad dependency"].map((item, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
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
//                 {["100% PPC-dependent sellers", "Products with no search demand", "Sellers who don't optimize listings"].map((item, i) => (
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
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Keyword Tracking – FAQs</h2>
//           </div>
//           <div className="space-y-4">
//             {faqs.map((faq, i) => (
//               <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-blue-400 transition-all">
//                 <button onClick={() => toggleFaq(i)} className="w-full px-6 py-4 flex items-center justify-between text-left">
//                   <span className="font-bold text-gray-900 dark:text-white pr-4">{faq.question}</span>
//                   <ChevronDown className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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
//               { title: "Product Research", icon: <Target />, color: "from-indigo-500 to-purple-500", route: "/features/product-research-feature" },
//               { title: "Review Analytics", icon: <MessageCircle />, color: "from-purple-500 to-pink-500", route: "/features/review-analytics-feature" },
//               { title: "Price Optimization", icon: <DollarSign />, color: "from-green-500 to-emerald-500", route: "/features/price-optimization-feature" },
//               { title: "Competitor Tracking", icon: <Users />, color: "from-orange-500 to-red-500", route: "/features/competitor-price-tracking-feature" },
//               { title: "AI Recommendations", icon: <Sparkles />, color: "from-cyan-500 to-blue-500", route: "/features/ai-recommendations-feature" },
//               { title: "WhatsApp Alerts", icon: <Bell />, color: "from-emerald-500 to-green-500", route: "/features/whatsapp-alerts-feature" }
//             ].map((feature, i) => (
//               <div key={i} onClick={() => feature.route && setLocation(feature.route)} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer group">
//                 <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>{feature.icon}</div>
//                 <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{feature.title}</h3>
//                 <ArrowRight className="w-5 h-5 text-blue-600 mt-2 group-hover:translate-x-1 transition-transform" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
//             Stop Guessing Rankings.
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Track Every Keyword Automatically.</span>
//           </h2>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group">
//               🔍 Start Keyword Tracking Free
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//             <Button onClick={() => setLocation("/")} size="lg" variant="outline" className="border-2 border-blue-600 text-blue-700 dark:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold px-12 py-6 text-lg rounded-full">
//               Explore All Features →
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Sticky Mobile CTA */}
//       <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t-2 border-blue-300 dark:border-blue-700 p-4 shadow-2xl z-40">
//         <Button onClick={handleGetStarted} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 rounded-full shadow-xl">
//           🔍 Start Keyword Tracking Free
//         </Button>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-8 mb-8">
//             <div>
//               <div className="flex items-center space-x-3 mb-4">
//                 <img src="/logo.png" alt="Insydz Logo" className="w-10 h-10 rounded-xl object-contain" />
//                 <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Insydz</span>
//               </div>
//               <p className="text-gray-400 text-sm">AI-powered intelligence for Indian sellers</p>
//             </div>
//             <div>
//               <h4 className="font-bold mb-4 text-white">Quick Links</h4>
//               <div className="space-y-2">
//                 <button onClick={() => setLocation("/")} className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">Home</button>
//                 <button onClick={() => setLocation("/pricing")} className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">Pricing</button>
//                 <button onClick={handleGetStarted} className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">Login</button>
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
  Search, X, Check, Eye,
  ChevronDown, DollarSign, Users,
  Package, ThumbsUp, MessageCircle,
  Clock, Smartphone, Menu, Sun, Moon,
  ShoppingBag, Store, Briefcase, Code,
  Globe, Trophy, ArrowLeft, BookOpen,
  Video, FileText, Star, RefreshCw,
  Presentation, Flame, Building2,
  MapPin, LineChart, Layers, Radio
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

export default function KeywordRankTrackingFeaturePage() {
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

  const faqs = [
    {
      question: "How often are keyword rankings updated?",
      answer: "Insydz updates keyword rankings once every 24 hours on the free plan and hourly on paid plans (₹1,999/month and ₹2,999/month). Rankings are tracked across both Amazon India and Flipkart automatically. When a significant ranking change occurs (configurable threshold), you receive a WhatsApp notification with the keyword, the change, and a suggested listing fix."
    },
    {
      question: "Can I track competitor keywords too?",
      answer: "Yes. Enter any competitor's ASIN and Insydz shows every keyword they currently rank for on Amazon India or Flipkart — including search volume, their rank position, and whether you rank for the same keyword. This makes it easy to identify keyword gaps: high-traffic keywords your competitor dominates that you're not targeting yet. Competitor keyword analysis is available on paid plans."
    },
    {
      question: "Does this work for both Amazon India and Flipkart?",
      answer: "Yes — Insydz is one of the very few keyword rank tracking tools that covers both Amazon India and Flipkart from a single dashboard. Most global keyword tools only support Amazon.com or Google. Insydz tracks rank positions, search volumes, and keyword opportunities specifically calibrated for Indian marketplace buyers."
    },
    {
      question: "What if my product doesn't rank yet?",
      answer: "That's exactly the right time to start tracking. Insydz will record your current position (even if it's page 10+) and track it daily — so you can see ranking momentum as you optimize your listing. The Keyword Opportunity Finder also surfaces keywords with lower competition where a new listing can rank faster, giving you a roadmap for which keywords to optimize for first."
    },
    {
      question: "Is keyword tracking available on the free plan?",
      answer: "Yes. The free plan includes keyword rank tracking for a limited number of keywords, daily rank updates, Amazon India and Flipkart support, and basic keyword suggestions — permanently, with no credit card required and no expiry date. Paid plans (₹1,999/month and ₹2,999/month) unlock unlimited keywords, hourly updates, full historical rank data, and competitor keyword analysis."
    },
    {
      question: "How does keyword rank tracking help improve sales?",
      answer: "Keyword rank tracking improves sales in three specific ways: first, by catching ranking drops before they cause a sales decline — so you fix listing issues proactively; second, by identifying high-traffic keywords where a small optimization can move you from page 2 to page 1; and third, by revealing competitor keywords you're not targeting — adding these increases discoverability for searches you're currently invisible for. Sellers using Insydz report 15–40% increases in organic traffic within 60 days."
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">

      {/* ── NAVIGATION ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg" : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              
              <div className="flex items-center space-x-1 group cursor-pointer" onClick={() => setLocation('/')}>
                <div className="relative">
                  <img src="/logo.png" alt="Insydz Logo" className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Insydz</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-3" ref={dropdownRef}>

              {(["Solutions", "Use Cases"] as const).map((menu) => (
                <div key={menu} className="relative">
                  <button onMouseEnter={() => setActiveDropdown(menu)} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all flex items-center gap-1">
                    {menu} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === menu ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === menu && (
                    <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {navigationMenu[menu].map((item, i) => (
                        <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center gap-3 group">
                          <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                          <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-1">{item.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Features — highlighted */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Features')} className="px-3 py-2 text-sm text-blue-600 dark:text-blue-500 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all flex items-center gap-1">
                  Features <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Features' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Features' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu.Features.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-1">{item.name}</span>
                        {item.badge && <span className="text-xs bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => setLocation('/pricing')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all">Pricing</button>

              {/* Free Tools */}
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

              {/* Compare */}
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

              {/* Resources */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Resources')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all flex items-center gap-1">
                  Resources <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Resources' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Resources' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu.Resources.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-1">{item.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* About */}
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
              <button onClick={() => { setLocation('/'); setIsMenuOpen(false); }} className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>
              {(["Solutions", "Use Cases"] as const).map((menu) => (
                <div key={menu}>
                  <button onClick={() => toggleMobileMenu(menu)} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-medium">
                    {menu} <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === menu ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileActiveMenu === menu && (
                    <div className="ml-4 mt-2 space-y-1">
                      {navigationMenu[menu].map((item, i) => (
                        <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg">
                          {item.icon}{item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div>
                <button onClick={() => toggleMobileMenu('Features')} className="flex items-center justify-between w-full px-4 py-2 text-blue-600 dark:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-semibold">
                  Features <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Features' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'Features' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu.Features.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg">
                        {item.icon}{item.name}
                        {item.badge && <span className="text-xs bg-blue-500 text-white px-1.5 py-0.5 rounded-full">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button onClick={() => setLocation('/pricing')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-medium">Pricing</button>
              {(["Free Tools", "Compare", "Resources"] as const).map((menu) => (
                <div key={menu}>
                  <button onClick={() => toggleMobileMenu(menu)} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                    {menu} <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === menu ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileActiveMenu === menu && (
                    <div className="ml-4 mt-2 space-y-1">
                      {navigationMenu[menu].map((item, i) => (
                        <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
                          {item.icon}{item.name}
                          {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div>
                <button onClick={() => toggleMobileMenu('About')} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                  About <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'About' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'About' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu.About.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
                        {item.icon}{item.name}
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

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 rounded-full px-4 py-2">
                <Search className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Feature Spotlight</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
                Keyword & Rank Tracking —
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">Know Where You Rank</span>
                <br />
                for Every Keyword
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Track rankings for every target keyword across Amazon India and Flipkart automatically — every single day. See what's working, find opportunities, and optimize for maximum visibility
                <span className="text-blue-700 font-semibold"> before rankings drop and traffic disappears.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all group">
                  📍 Start Tracking Rankings Free
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} size="lg" variant="outline" className="border-2 border-blue-600 text-blue-700 dark:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold px-8 py-6 text-lg rounded-full">
                  See How It Works →
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                {["Daily rank updates", "Competitor keyword analysis", "Amazon & Flipkart support"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Widget — Keyword Rankings Panel */}
            <div className="relative">
              <div className="relative bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-blue-800 rounded-3xl p-6 shadow-2xl max-w-md mx-auto">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200 dark:border-gray-700 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-sm">Keyword Rankings</p>
                    <p className="text-xs text-blue-600">Live tracking — Amazon India</p>
                  </div>
                  <span className="ml-auto text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-0.5 rounded-full font-semibold">Today</span>
                </div>

                {/* Rankings Table */}
                <div className="space-y-2 mb-4">
                  <div className="grid grid-cols-4 gap-2 text-xs text-gray-500 dark:text-gray-400 px-2 pb-1 border-b border-gray-100 dark:border-gray-800">
                    <span className="col-span-2">Keyword</span>
                    <span className="text-center">Rank</span>
                    <span className="text-right">Change</span>
                  </div>
                  {[
                    { keyword: "wireless earbuds bluetooth", volume: "45K/mo", rank: "#3", change: "↑5", status: "up" },
                    { keyword: "noise cancelling headphones", volume: "28K/mo", rank: "#12", change: "—", status: "stable" },
                    { keyword: "true wireless earbuds", volume: "52K/mo", rank: "#28", change: "↓8", status: "down" },
                  ].map((row, i) => (
                    <div key={i} className={`grid grid-cols-4 gap-2 items-center px-3 py-2.5 rounded-xl text-sm ${
                      row.status === 'down' ? 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800' :
                      row.status === 'up' ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' :
                      'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                    }`}>
                      <div className="col-span-2">
                        <p className="font-medium text-gray-900 dark:text-white text-xs leading-tight">{row.keyword}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{row.volume}</p>
                      </div>
                      <p className={`text-center font-bold text-sm ${
                        row.status === 'up' ? 'text-green-600' : row.status === 'down' ? 'text-red-600' : 'text-gray-700 dark:text-gray-300'
                      }`}>{row.rank}</p>
                      <p className={`text-right font-semibold text-sm ${
                        row.status === 'up' ? 'text-green-600' : row.status === 'down' ? 'text-red-500' : 'text-gray-500'
                      }`}>{row.change}</p>
                    </div>
                  ))}
                </div>

                {/* Opportunity card */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-400">Opportunity Found</span>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">"budget earbuds" — Low competition, 18K searches/mo. <span className="font-semibold text-blue-600">You're not ranking yet.</span></p>
                </div>

                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl px-4 py-2 shadow-xl">
                  <p className="text-white font-bold text-sm flex items-center gap-1"><LineChart className="w-4 h-4" /> Rank Tracker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SELLERS STRUGGLE ── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              Why Sellers Struggle<br /><span className="text-red-600">Without Rank Tracking</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Not knowing your keyword positions isn't just a data gap — it's a revenue gap. Every day you don't track rankings is a day a ranking drop can silently wipe out 60–80% of your organic traffic without a single notification.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 mt-10">
            {[
              { icon: <Eye className="w-8 h-8" />, title: "No idea where products actually rank", detail: "No idea for any keyword, on any day — visibility is a complete unknown.", color: "from-red-500 to-orange-500" },
              { icon: <Clock className="w-8 h-8" />, title: "Manually checking rankings wastes hours", detail: "And the data is stale the moment you record it — products move daily.", color: "from-orange-500 to-yellow-500" },
              { icon: <TrendingDown className="w-8 h-8" />, title: "Miss ranking drops until sales crash", detail: "By the time the sales decline is noticed, 4–6 weeks of revenue have already been lost.", color: "from-yellow-500 to-orange-500" },
              { icon: <AlertCircle className="w-8 h-8" />, title: "Don't know which keywords to target", detail: "Or which keywords competitors are winning — strategy is based on guesswork.", color: "from-orange-500 to-red-500" },
            ].map((pain, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>{pain.icon}</div>
                <p className="text-gray-900 dark:text-white font-semibold mb-1">{pain.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{pain.detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-2 border-orange-400 dark:border-orange-600 rounded-3xl p-8 text-center shadow-lg mb-12">
            <TrendingDown className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Products lose <span className="text-red-600">60–80% of organic traffic</span> when rankings drop</p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">And most Indian sellers don't notice until it's too late — when sales have fallen and ad spend has doubled to compensate.</p>
          </div>

          {/* Manual vs Automated comparison */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-300">Aspect</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 dark:text-gray-300">Manual Checking</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20">Automated Tracking</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: "Data Quality", manual: "Hours wasted, data already outdated", automated: "Real-time insights, always accurate" },
                  { aspect: "Update Frequency", manual: "Time-consuming daily checks", automated: "Daily automatic updates" },
                  { aspect: "Historical Data", manual: "No historical data or trends", automated: "Historical trends & insights" },
                  { aspect: "Scale", manual: "Limited to 5–10 keywords", automated: "Unlimited keyword tracking" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{row.aspect}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{row.manual}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center bg-blue-50 dark:bg-blue-900/20">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-gray-900 dark:text-white font-medium">{row.automated}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">How Keyword Rank Tracking Works</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Insydz automatically tracks your keyword rankings daily and alerts you to changes —
              <span className="text-blue-700 font-semibold"> so you can optimize before rankings drop and traffic disappears.</span>
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 -translate-y-1/2"></div>
            <div className="grid lg:grid-cols-4 gap-8 relative">
              {[
                { step: "1", title: "Add target keywords", detail: "Enter your target keywords, or let Insydz AI suggest high-opportunity keywords for your category and product automatically.", icon: <Search className="w-12 h-12" /> },
                { step: "2", title: "Insydz tracks rankings daily", detail: "Across Amazon India and Flipkart simultaneously — automated, no manual checking required. Hourly tracking on paid plans.", icon: <RefreshCw className="w-12 h-12" /> },
                { step: "3", title: "Monitor rank changes", detail: "See what's improving, dropping, or stagnating — with trend graphs over days and weeks. Historical data shows the full picture.", icon: <LineChart className="w-12 h-12" /> },
                { step: "4", title: "Get alerts & insights", detail: "Dashboard updates + WhatsApp notifications for significant rank movements — act the same day with a suggested listing fix.", icon: <Bell className="w-12 h-12" /> },
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 border-2 border-blue-300 dark:border-blue-700 rounded-2xl p-6 text-center relative z-10 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-black text-white">{item.step}</div>
                  <div className="bg-blue-100 dark:bg-blue-900/20 rounded-xl p-4 mb-4 text-blue-600">{item.icon}</div>
                  <p className="text-gray-900 dark:text-white font-semibold mb-2">{item.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group">
              📍 Track Your First Keyword Free
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU CAN DO ── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">What You Can Do with Keyword Tracking</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Six outcomes Indian sellers unlock when they stop guessing and start knowing their keyword positions every day.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { icon: <TrendingUp />, title: "Improve organic rankings", detail: "Optimize for keywords that matter — see which changes move you up, and double down on what works.", color: "text-blue-600" },
              { icon: <Shield />, title: "Catch ranking drops early", detail: "Fix listing issues before sales crash and before PPC spend needs to spike to compensate.", color: "text-red-600" },
              { icon: <Zap />, title: "Find new keyword opportunities", detail: "AI surfaces untapped keywords with high volume and low competition — before competitors find them.", color: "text-cyan-600" },
              { icon: <Eye />, title: "Spy on competitor keywords", detail: "See exactly what keywords competitors rank for — then build a strategy to outrank them organically.", color: "text-purple-600" },
              { icon: <BarChart3 />, title: "Track SEO improvements", detail: "Measure impact of every listing change — title updates, bullet points, backend keywords — with data.", color: "text-emerald-600" },
              { icon: <Target />, title: "Increase organic traffic", detail: "More visibility for the right keywords = more sales without ad spend. Organic traffic compounds.", color: "text-orange-600" },
            ].map((outcome, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center ${outcome.color}`}>{outcome.icon}</div>
                  <ThumbsUp className="w-6 h-6 text-blue-500" />
                </div>
                <p className="text-gray-900 dark:text-white font-semibold leading-relaxed mb-2">{outcome.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{outcome.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY INDIAN SELLERS STRUGGLE ── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Indian Sellers Struggle to Track Keywords — Even When They Know It Matters
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Most sellers know keyword ranking matters. Few track it correctly — because the tools built for it weren't designed with Indian marketplaces, Indian languages, or Indian seller workflows in mind.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Most keyword tools track Google, not Amazon India",
                detail: "The ranking algorithm on Amazon India is entirely different from Google. Volume estimates, competition scores, and rank positions from Google-focused keyword research tools mean nothing for your Amazon listing. Insydz tracks positions on Amazon.in and Flipkart — the actual platforms where your customers are searching.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Indian buyers search differently — and most tools miss it",
                detail: "Search queries on Amazon India frequently include regional product terms, Hinglish phrases, and category-specific patterns unique to Indian buying behaviour. A keyword tool calibrated for US Amazon shoppers produces volume estimates and keyword suggestions that are consistently wrong for Indian sellers.",
                color: "from-cyan-500 to-teal-500",
              },
              {
                icon: <Store className="w-8 h-8" />,
                title: "Flipkart keyword ranking is never tracked — because most tools can't",
                detail: "Most Amazon keyword tools cover Amazon.com or Amazon.in only. Sellers listing on both Amazon India and Flipkart are flying blind on one of India's two largest marketplaces — with no data on which keywords drive visibility or which positions are slipping.",
                color: "from-indigo-500 to-blue-500",
              },
              {
                icon: <Flame className="w-8 h-8" />,
                title: "Ranking drops during festive season are invisible — until it's too late",
                detail: "Amazon India's algorithm moves fast during high-traffic events. A listing ranked #4 for a high-volume keyword can drop to #18 by 3pm on Big Billion Days as competitors run sponsored ads and boost velocity. Daily rank tracking is the only way to see this in time to respond.",
                color: "from-orange-500 to-amber-500",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVANCED KEYWORD INTELLIGENCE ── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Advanced Keyword Intelligence</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Six tracking and research modules working together — so you always know where you rank, where you're slipping, and where your next growth opportunity is hiding.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                icon: <RefreshCw className="w-7 h-7" />,
                title: "Daily Rank Updates",
                result: "Rankings checked every day automatically — across every keyword and both marketplaces.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <LineChart className="w-7 h-7" />,
                title: "Historical Rank Data",
                result: "See ranking trajectory over weeks and months — understand whether position is stable or declining.",
                color: "from-cyan-500 to-teal-500",
              },
              {
                icon: <Eye className="w-7 h-7" />,
                title: "Competitor Keyword Analysis",
                result: "Enter competitor ASIN — see every keyword they rank for, including ones you're not targeting.",
                color: "from-indigo-500 to-purple-500",
              },
              {
                icon: <BarChart3 className="w-7 h-7" />,
                title: "Search Volume Insights",
                result: "Volume data calibrated for Amazon India and Flipkart — not US Amazon, not Google.",
                color: "from-blue-500 to-indigo-500",
              },
              {
                icon: <Zap className="w-7 h-7" />,
                title: "Keyword Opportunity Finder",
                result: "AI surfaces keywords with high volume and low competition you're not yet ranking for.",
                color: "from-amber-500 to-orange-500",
              },
              {
                icon: <Bell className="w-7 h-7" />,
                title: "Rank Change Alerts",
                result: "Set alert thresholds — get WhatsApp notification when significant rank movement occurs.",
                color: "from-green-500 to-emerald-500",
              },
            ].map((module, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all group">
                <div className={`w-14 h-14 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center text-white shadow-md mb-4 group-hover:scale-110 transition-transform`}>{module.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{module.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{module.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELLER SCENARIO (RAHUL) ── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Most Keyword Rank Tracking Tools Don't Tell You</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Most keyword position checkers tell you where you rank. Insydz tells you where you're slipping before sales drop — and which untapped keywords can double your organic traffic without more ad spend.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border-2 border-blue-300 dark:border-blue-700 rounded-3xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-blue-200" />
                <span className="text-blue-100 text-sm">Consumer Electronics, Amazon India</span>
              </div>
              <h3 className="text-2xl font-black text-white">Rahul's Earphones — The Keyword That Was Losing 800 Sales/Month in Silence</h3>
            </div>

            <div className="p-8">
              {/* Scenario table */}
              <div className="space-y-4 mb-8">
                {[
                  { label: "The product", detail: "Wireless earphones at ₹999. Good sales, good reviews. PPC spend steady at ₹18,000/month.", icon: <Package className="w-5 h-5" />, color: "text-gray-600" },
                  { label: "What he didn't see", detail: "His #4 ranking for 'earphones under 1000' (62K/mo searches) had silently slipped to #22 over 6 weeks. No notification. No data.", icon: <Eye className="w-5 h-5" />, color: "text-red-600" },
                  { label: "What he assumed", detail: "Attributed the sales decline to 'seasonal slowdown' — a common misdiagnosis that cost 6 weeks of revenue.", icon: <AlertCircle className="w-5 h-5" />, color: "text-orange-600" },
                  { label: "What Insydz found", detail: "The ranking drop was caused by a listing title change 7 weeks ago — removing the exact phrase 'under 1000' from the title. Historical rank data showed the exact day it started sliding.", icon: <Search className="w-5 h-5" />, color: "text-blue-600" },
                  { label: "The fix", detail: "Restored phrase to title. Added 'earphones under 1000 rupees' to bullet points. Ranking recovered to #5 within 18 days.", icon: <Check className="w-5 h-5" />, color: "text-green-600" },
                ].map((row, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                    <div className={`w-9 h-9 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center flex-shrink-0 ${row.color}`}>{row.icon}</div>
                    <div>
                      <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">{row.label}</span>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mt-0.5">{row.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Revenue impact */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { metric: "₹2.23L", label: "Additional monthly revenue from ranking recovery" },
                  { metric: "18 days", label: "Time to recover ranking after listing fix" },
                  { metric: "+₹38K", label: "Incremental monthly revenue from new keyword" },
                ].map((stat, i) => (
                  <div key={i} className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center border border-blue-200 dark:border-blue-800">
                    <div className="text-2xl font-black text-blue-600">{stat.metric}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-300 dark:border-blue-700 rounded-xl p-4">
                <p className="text-sm italic text-gray-700 dark:text-gray-300 mb-2">"He thought it was a seasonal slowdown. It was a 6-week ranking drop on his highest-traffic keyword — caused by a single title edit. The historical rank data showed exactly when it started. No other tool he'd used had ever surfaced this."</p>
                <p className="text-sm font-bold text-blue-700 dark:text-blue-400">
                  ROI: Insydz at ₹1,999/month. Ranking recovery returned ₹2.23L/month + keyword opportunity added ₹38,000/month = ₹2.61L/month combined. <span className="text-lg">130× return on his monthly subscription.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL COMPARISON TABLE ── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Manual Tracking vs Insydz</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">The honest side-by-side — every dimension that determines whether a keyword tracking approach actually improves your rankings or just burns your time.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 mt-10">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-300">Aspect</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 dark:text-gray-300">Manual Tracking</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20">With Insydz</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: "Update Frequency", manual: "When you remember", insydz: "Automatic daily tracking" },
                  { aspect: "Keywords Tracked", manual: "5–10 max before unmanageable", insydz: "Unlimited keywords simultaneously" },
                  { aspect: "Historical Data", manual: "None or manual spreadsheet logs", insydz: "Full history & trends — months back" },
                  { aspect: "Competitor Insights", manual: "Impossible to track at scale", insydz: "Competitor keyword analysis built in" },
                  { aspect: "Time Investment", manual: "2–3 hours weekly minimum", insydz: "5 minutes monthly to review" },
                  { aspect: "Flipkart Support", manual: "No tool covers this", insydz: "Amazon India + Flipkart simultaneously" },
                  { aspect: "Alert on Drop", manual: "You find out when sales crash", insydz: "WhatsApp alert before sales are affected" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{row.aspect}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{row.manual}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center bg-blue-50 dark:bg-blue-900/20">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-gray-900 dark:text-white font-medium">{row.insydz}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl">
              📍 Switch to Automated Tracking →
            </Button>
          </div>
        </div>
      </section>

      {/* ── FREE PLAN ── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Start Free. Track Rankings Today.</h2>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-black text-blue-600">₹0</span>
                <span className="text-2xl text-gray-600 dark:text-gray-400">/ Forever</span>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">Free Plan Includes:</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {["Track limited keywords", "Daily rank updates", "Amazon & Flipkart support", "Basic keyword suggestions"].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-bold text-blue-600">Upgrade Teaser:</span> Unlock unlimited keywords, hourly updates, full historical rank data, and competitor keyword analysis on paid plans (₹1,999/month and ₹2,999/month).
              </p>
            </div>
            <div className="text-center">
              <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl">
                📍 Start Tracking Keywords Free
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDIA-FIRST ADVANTAGE ── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How Insydz Keyword Tracking Is Built for Indian Marketplaces
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Global keyword tools — SEMrush, Mangools KWFinder, SERPstat — are excellent for Google SEO. But Amazon India and Flipkart have entirely different search algorithms, buyer vocabularies, and ranking signals. A keyword rank tracking tool built for Google is the wrong tool for an Indian marketplace seller.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Layers className="w-8 h-8" />,
                title: "Amazon India + Flipkart in one dashboard",
                detail: "Track keyword positions on both major Indian marketplaces simultaneously — separate rank data and opportunities for each. The only keyword position checker that covers both.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Search volume calibrated for Indian buyers",
                detail: "Volume estimates built on Amazon India and Flipkart data — not US Amazon, not Google India. Know which keywords your actual buyers use, not which ones rank on Google.",
                color: "from-cyan-500 to-teal-500",
              },
              {
                icon: <Bell className="w-8 h-8" />,
                title: "WhatsApp rank alerts — not email reports",
                detail: "Rank change alerts arrive on WhatsApp with the keyword, the drop, and a suggested fix — not a weekly PDF you open on Friday when it's already too late to respond.",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <Flame className="w-8 h-8" />,
                title: "Festive season rank monitoring built in",
                detail: "During Diwali, Big Billion Days, and GIF, monitoring frequency increases — so you catch ranking drops the same day, not the day after. When velocity is highest, you're fastest to respond.",
                color: "from-orange-500 to-amber-500",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 dark:border-blue-600 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-blue-700 dark:text-blue-400 mb-2">What most keyword tools don't tell you:</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Ranking position on Amazon India is not just about keyword density in your listing. It's about sales velocity, review recency, click-through rate from search, and conversion rate — all measured at the keyword level. Insydz connects rank data with sales and conversion data — so you can see which keyword positions are actually generating revenue, not just traffic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Indian Sellers Who Stopped Flying Blind on Keywords</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Priyanka S.",
                context: "Home textiles, Surat · Amazon India + Flipkart",
                quote: "I was spending ₹25,000/month on PPC for a keyword I was already ranking #6 for organically. I didn't know because I never tracked it. Insydz showed me this in the first week. I reallocated the budget to keywords where I actually needed the boost. PPC ACOS dropped from 38% to 19%.",
                stars: 5,
              },
              {
                name: "Aditya K.",
                context: "D2C personal care brand, Pune · Amazon India",
                quote: "The competitor keyword analysis completely changed how I optimise listings. I could see the exact keywords my #1 competitor ranked for that I wasn't targeting. Two months of adding those keywords to my titles and bullets — and I've taken their #3 position on 4 of their top keywords.",
                stars: 5,
              },
              {
                name: "Rohit M.",
                context: "E-commerce agency, Chennai · 18 seller accounts",
                quote: "Managing 18 seller accounts, keyword tracking used to be the thing we always said we'd do properly but never did. Insydz tracks all 18 accounts daily, WhatsApps us when anything significant moves, and frees us to focus on strategy instead of spreadsheets.",
                stars: 5,
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.stars }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="font-bold text-gray-900 dark:text-white text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IS IT RIGHT FOR YOU ── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Is Keyword Tracking Right for You?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center"><Check className="w-6 h-6 text-white" /></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Perfect For</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Sellers optimizing listings to reduce ad dependency",
                  "D2C brands tracking SEO performance across categories",
                  "Competitive categories where rank position is the difference between page 1 and page 2",
                  "Agencies managing multiple accounts who need automated rank monitoring",
                  "Sellers wanting to reduce PPC spend by winning more organic positions",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-2xl p-8 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center"><AlertCircle className="w-6 h-6 text-white" /></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Less Useful For</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "100% PPC-dependent sellers with no interest in organic optimization",
                    "Products with no meaningful search demand in their category",
                    "Sellers who never optimize listings based on data",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-300 dark:border-amber-700 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300"><span className="font-bold text-amber-700 dark:text-amber-400">Note:</span> If you run PPC, keyword rank tracking helps you stop bidding on keywords you already rank for organically. The free plan alone pays for itself in one campaign audit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Keyword Tracking — FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-blue-400 transition-all">
                <button onClick={() => toggleFaq(i)} className="w-full px-6 py-4 flex items-center justify-between text-left">
                  <span className="font-bold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <div className="px-6 pb-4 text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED FEATURES ── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Related Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Product Research", icon: <Target />, color: "from-indigo-500 to-purple-500", route: "/features/product-research-feature" },
              { title: "Review Analytics", icon: <MessageCircle />, color: "from-purple-500 to-pink-500", route: "/features/review-analytics-feature" },
              { title: "Price Optimization", icon: <DollarSign />, color: "from-green-500 to-emerald-500", route: "/features/price-optimization-feature" },
              { title: "Competitor Price Tracking", icon: <TrendingDown />, color: "from-orange-500 to-red-500", route: "/features/competitor-price-tracking-feature" },
              { title: "AI Recommendations", icon: <Zap />, color: "from-pink-500 to-rose-500", route: "/features/ai-recommendations-feature" },
              { title: "WhatsApp Alerts", icon: <Bell />, color: "from-green-500 to-teal-500", route: "/features/whatsapp-alerts-feature" },
            ].map((feature, i) => (
              <div key={i} onClick={() => feature.route && setLocation(feature.route)} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer group">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <ArrowRight className="w-5 h-5 text-blue-600 mt-2 group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA — ICP SPLIT ── */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
            Stop Guessing Rankings.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Track Every Keyword Automatically.</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">AI-powered keyword rank tracking for Amazon India and Flipkart sellers — start free in 2 minutes.</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* New Seller */}
            <div className="bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-8 text-left">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">For New Sellers</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Know your first keyword positions from day one — start optimizing before competitors get ahead.</p>
              <Button onClick={handleGetStarted} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full">
                🚀 Start Free →
              </Button>
            </div>

            {/* Growing Seller */}
            <div className="bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-blue-600 rounded-2xl p-8 text-left shadow-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">For Growing Sellers</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Cut PPC spend by growing organic rankings — unlimited keywords, hourly updates, competitor analysis.</p>
              <Button onClick={() => setLocation('/pricing')} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full shadow-lg">
                📈 Try Growth Plan →
              </Button>
            </div>

            {/* Agency */}
            <div className="bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-8 text-left">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">For Agencies</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Automated keyword tracking for every client — daily alerts, no manual checking, full rank history.</p>
              <Button onClick={() => setLocation('/contact')} className="w-full bg-white dark:bg-gray-700 border-2 border-blue-600 text-blue-700 dark:text-blue-400 font-bold rounded-full hover:bg-blue-50">
                🏢 Book Demo →
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            {["No credit card required", "Setup in 2 minutes", "Cancel anytime"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STICKY MOBILE CTA ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t-2 border-blue-300 dark:border-blue-700 p-4 shadow-2xl z-40">
        <Button onClick={handleGetStarted} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 rounded-full shadow-xl">
          📍 Start Tracking Rankings Free
        </Button>
      </div>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="Insydz Logo" className="w-10 h-10 rounded-xl object-contain" />
                <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Insydz</span>
              </div>
              <p className="text-gray-400 text-sm">AI-powered intelligence for Indian sellers</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => setLocation("/")} className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">Home</button>
                <button onClick={() => setLocation("/pricing")} className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">Pricing</button>
                <button onClick={handleGetStarted} className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">Login</button>
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