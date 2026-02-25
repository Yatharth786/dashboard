// import { useState, useEffect } from "react";
// import { useLocation } from "wouter";
// import { 
//   TrendingDown, ArrowRight, CheckCircle2, Target, Zap, 
//   Bell, TrendingUp, MessageCircle, Search, Package, 
//   BarChart3, ChevronRight, Star, AlertCircle, Clock,
//   ShoppingBag, IndianRupee, Smartphone, X, Check,
//   RefreshCw, FileSpreadsheet, Shield, Eye, Sparkles,
//   ChevronDown, DollarSign
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function CompetitorPriceTrackingFeaturePage() {
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
//       question: "How often are competitor prices tracked?",
//       answer: "Insydz tracks competitor prices 24/7 in real-time. Changes are detected within minutes and alerts are sent instantly."
//     },
//     {
//       question: "Does this work for Amazon India & Flipkart?",
//       answer: "Yes, competitor price tracking works seamlessly across both Amazon India and Flipkart with full support for ₹ pricing."
//     },
//     {
//       question: "Can I track multiple competitors per product?",
//       answer: "Absolutely. You can track unlimited competitors per product on paid plans. Free plan includes key competitors."
//     },
//     {
//       question: "Will constant price changes hurt margins?",
//       answer: "No. Insydz helps you make informed decisions, not reactive ones. You'll see patterns and avoid panic discounting."
//     },
//     {
//       question: "Is this available on the free plan?",
//       answer: "Yes! The free plan includes basic competitor price tracking for limited products. Upgrade for unlimited tracking."
//     },
//     {
//       question: "Do I get WhatsApp alerts?",
//       answer: "Yes! WhatsApp alerts are available on all plans, ensuring you never miss critical price changes."
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
//             <div className="space-y-8">
//               <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 rounded-full px-4 py-2">
//                 <TrendingDown className="w-4 h-4 text-orange-600" />
//                 <span className="text-sm font-medium text-orange-700">Feature Spotlight</span>
//               </div>

//               <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
//                 Competitor Price Tracking —
//                 <br />
//                 <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
//                   Know Every Price Move
//                 </span>
//                 <br />
//                 Before It Hurts Your Sales
//               </h1>

//               <p className="text-xl text-gray-700 leading-relaxed">
//                 Track competitor prices across Amazon & Flipkart automatically. 
//                 <span className="text-orange-700 font-semibold"> Get instant alerts when prices change, Buy Box is at risk, or discounts appear.</span>
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
//                   See It in Action →
//                 </Button>
//               </div>

//               <div className="flex flex-wrap items-center gap-6 pt-4">
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>Works for Amazon & Flipkart India</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>Real-time alerts</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>No manual tracking</span>
//                 </div>
//               </div>
//             </div>

//             {/* Hero Visual */}
//             <div className="relative">
//               <div className="relative bg-white border-2 border-orange-200 rounded-3xl p-8 shadow-2xl">
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between pb-4 border-b border-gray-200">
//                     <h3 className="font-bold text-gray-900">Live Price Comparison</h3>
//                     <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">Tracking 5</span>
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
//                         <p className="text-xs text-red-600 font-semibold">Price dropped by 17% — Buy Box at risk!</p>
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

//                 <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl px-4 py-2 shadow-xl">
//                   <p className="text-white font-bold text-sm">Live</p>
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
//               <span className="text-red-600">Lose Money on Pricing</span>
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {[
//               {
//                 icon: <RefreshCw className="w-8 h-8" />,
//                 title: "Competitors change prices multiple times daily",
//                 color: "from-red-500 to-orange-500"
//               },
//               {
//                 icon: <Clock className="w-8 h-8" />,
//                 title: "Manual checks are always late",
//                 color: "from-orange-500 to-yellow-500"
//               },
//               {
//                 icon: <DollarSign className="w-8 h-8" />,
//                 title: "Price wars destroy margins",
//                 color: "from-yellow-500 to-orange-500"
//               },
//               {
//                 icon: <Shield className="w-8 h-8" />,
//                 title: "Buy Box is lost silently",
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

//           <div className="bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-400 rounded-3xl p-8 text-center shadow-lg">
//             <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
//             <p className="text-2xl font-bold text-gray-900 mb-2">
//               Late price reactions cause <span className="text-red-600">20-40% revenue leakage</span>
//             </p>
//             <p className="text-gray-700 text-lg">
//               in competitive categories.
//             </p>
//           </div>

//           {/* Visual Comparison */}
//           <div className="mt-12 grid md:grid-cols-2 gap-8">
//             <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8 text-center">
//               <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <X className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Manual Tracking</h3>
//               <p className="text-gray-700 text-sm">Seller manually checking listings, missing changes</p>
//             </div>

//             <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8 text-center">
//               <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Check className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Alerts</h3>
//               <p className="text-gray-700 text-sm">Instant notifications, never miss a change</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Feature Explanation */}
//       <section id="how-it-works" className="py-20 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//               How Competitor Price Tracking Works
//             </h2>
//             <p className="text-xl text-gray-700 max-w-3xl mx-auto">
//               Insydz automatically monitors competitor prices for your products and alerts you the moment something changes — 
//               <span className="text-orange-700 font-semibold"> so you can react instantly, not emotionally.</span>
//             </p>
//           </div>

//           <div className="relative">
//             <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 -translate-y-1/2"></div>

//             <div className="grid lg:grid-cols-4 gap-8 relative">
//               {[
//                 {
//                   step: "1",
//                   title: "Add your product or ASIN",
//                   icon: <ShoppingBag className="w-12 h-12" />
//                 },
//                 {
//                   step: "2",
//                   title: "Insydz identifies key competitors",
//                   icon: <Eye className="w-12 h-12" />
//                 },
//                 {
//                   step: "3",
//                   title: "Prices are tracked 24/7",
//                   icon: <RefreshCw className="w-12 h-12" />
//                 },
//                 {
//                   step: "4",
//                   title: "Alerts sent instantly via dashboard & WhatsApp",
//                   icon: <Bell className="w-12 h-12" />
//                 }
//               ].map((item, i) => (
//                 <div key={i} className="bg-white border-2 border-orange-300 rounded-2xl p-6 text-center relative z-10 shadow-lg hover:shadow-xl transition-all">
//                   <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-black text-white">
//                     {item.step}
//                   </div>
//                   <div className="bg-orange-100 rounded-xl p-4 mb-4 text-orange-600">
//                     {item.icon}
//                   </div>
//                   <p className="text-gray-900 font-semibold">{item.title}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="text-center mt-12">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
//             >
//               👉 Track Your First Competitor Free
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
//               What You Can Do with Competitor Price Tracking
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               { icon: <Zap />, title: "React before sales drop", arrow: <TrendingDown className="w-6 h-6 text-red-500" /> },
//               { icon: <Shield />, title: "Protect Buy Box without panic discounts", arrow: <Shield className="w-6 h-6 text-green-500" /> },
//               { icon: <Eye />, title: "Identify fake price wars", arrow: <AlertCircle className="w-6 h-6 text-orange-500" /> },
//               { icon: <Clock />, title: "Time discounts smartly", arrow: <Clock className="w-6 h-6 text-blue-500" /> },
//               { icon: <TrendingUp />, title: "Increase profit without losing volume", arrow: <TrendingUp className="w-6 h-6 text-green-500" /> },
//               { icon: <Target />, title: "Stay competitive always", arrow: <Target className="w-6 h-6 text-purple-500" /> }
//             ].map((outcome, i) => (
//               <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
//                     {outcome.icon}
//                   </div>
//                   {outcome.arrow}
//                 </div>
//                 <p className="text-gray-900 font-semibold leading-relaxed">{outcome.title}</p>
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
//               Built for Real Price Intelligence
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 feature: "Real-Time Price Monitoring",
//                 benefit: "Faster reaction than competitors",
//                 icon: <Eye className="w-8 h-8" />,
//                 color: "from-blue-500 to-cyan-500"
//               },
//               {
//                 feature: "Historical Price Trends",
//                 benefit: "Smarter pricing decisions",
//                 icon: <BarChart3 className="w-8 h-8" />,
//                 color: "from-purple-500 to-pink-500"
//               },
//               {
//                 feature: "Buy Box Risk Alerts",
//                 benefit: "Prevent sudden sales drops",
//                 icon: <Shield className="w-8 h-8" />,
//                 color: "from-red-500 to-orange-500"
//               },
//               {
//                 feature: "Multi-Competitor Tracking",
//                 benefit: "Complete market visibility",
//                 icon: <Target className="w-8 h-8" />,
//                 color: "from-green-500 to-emerald-500"
//               },
//               {
//                 feature: "WhatsApp Price Alerts",
//                 benefit: "Instant action on your phone",
//                 icon: <Bell className="w-8 h-8" />,
//                 color: "from-orange-500 to-red-500"
//               },
//               {
//                 feature: "Price History Analysis",
//                 benefit: "Identify patterns & trends",
//                 icon: <TrendingUp className="w-8 h-8" />,
//                 color: "from-indigo-500 to-purple-500"
//               }
//             ].map((item, i) => (
//               <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-orange-400 hover:shadow-xl transition-all">
//                 <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>
//                   {item.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">{item.feature}</h3>
//                 <p className="text-gray-600 flex items-center gap-2">
//                   <ArrowRight className="w-4 h-4 text-orange-500" />
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
//               Manual Price Tracking vs Insydz
//             </h2>
//           </div>

//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Task</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">Manual Tracking</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold text-orange-700 bg-orange-50">With Insydz</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {[
//                   { task: "Monitoring", manual: "Checking listings manually", insydz: "Automatic 24/7 tracking" },
//                   { task: "Response Time", manual: "Late reactions", insydz: "Instant alerts" },
//                   { task: "Data Management", manual: "Excel sheets", insydz: "Live price dashboards" },
//                   { task: "Decision Quality", manual: "Panic discounting", insydz: "Smart pricing decisions" },
//                   { task: "Time Investment", manual: "Hours wasted", insydz: "Minutes per day" }
//                 ].map((row, i) => (
//                   <tr key={i} className="border-t border-gray-200">
//                     <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.task}</td>
//                     <td className="px-6 py-4 text-center">
//                       <div className="flex items-center justify-center gap-2">
//                         <X className="w-5 h-5 text-red-500" />
//                         <span className="text-sm text-gray-600">{row.manual}</span>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 text-center bg-orange-50">
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
//               className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl"
//             >
//               👉 Switch to Smart Price Tracking
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* PLG Entry Point */}
//       <section className="py-20 px-4 bg-gray-50">
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
//               <p className="text-sm text-gray-700 mb-2">
//                 <span className="font-bold text-orange-600">Upgrade Teaser:</span> Unlock deeper tracking, more competitors, and automation on paid plans.
//               </p>
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

//       {/* Who This Feature Is For */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Is Competitor Price Tracking Right for You?
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
//                   <Check className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Best For</h3>
//               </div>
//               <ul className="space-y-4">
//                 {[
//                   "Competitive categories",
//                   "Buy Box-sensitive products",
//                   "Sellers protecting margins",
//                   "Agencies managing multiple brands"
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-700 font-medium">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
//                   <X className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Not Ideal For</h3>
//               </div>
//               <ul className="space-y-4">
//                 {[
//                   "Fixed-price categories",
//                   "One-time sellers",
//                   "Sellers ignoring competitor behavior"
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
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Competitor Price Tracking – FAQs
//             </h2>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, i) => (
//               <div key={i} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-orange-400 transition-all">
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
//               { title: "Review Analytics", icon: <MessageCircle />, color: "from-purple-500 to-pink-500" },
//               { title: "Price Optimization", icon: <DollarSign />, color: "from-green-500 to-emerald-500" },
//               { title: "Keyword & Rank Tracking", icon: <Search />, color: "from-blue-500 to-cyan-500" },
//               { title: "Product Research", icon: <Target />, color: "from-orange-500 to-red-500" },
//               { title: "AI Recommendations", icon: <Sparkles />, color: "from-indigo-500 to-purple-500" },
//               { title: "WhatsApp Alerts", icon: <Bell />, color: "from-green-500 to-emerald-500" }
//             ].map((feature, i) => (
//               <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all cursor-pointer group">
//                 <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{feature.title}</h3>
//                 <ArrowRight className="w-5 h-5 text-orange-600 mt-2 group-hover:translate-x-1 transition-transform" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//             Stop Guessing Prices.
//             <br />
//             <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
//               Track Competitors Automatically.
//             </span>
//           </h2>
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
//               Explore All Features →
//             </Button>
//           </div>
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
  TrendingDown, ArrowRight, CheckCircle2, Target, Zap, 
  Bell, TrendingUp, MessageCircle, Search, Package, 
  BarChart3, ChevronRight, Star, AlertCircle, Clock,
  ShoppingBag, IndianRupee, Smartphone, X, Check,
  RefreshCw, FileSpreadsheet, Shield, Eye, Sparkles,
  ChevronDown, DollarSign, Menu, Sun, Moon, Store,
  Briefcase, Users, Code, Globe, Trophy, ArrowLeft,
  BookOpen, Video, FileText,
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
    { name: "Expert Blog", icon: <BookOpen className="w-4 h-4" />, route: "/expert-blog" },
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

export default function CompetitorPriceTrackingFeaturePage() {
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
    { question: "How often are competitor prices tracked?", answer: "Insydz tracks competitor prices 24/7 in real-time. Changes are detected within minutes and alerts are sent instantly." },
    { question: "Does this work for Amazon India & Flipkart?", answer: "Yes, competitor price tracking works seamlessly across both Amazon India and Flipkart with full support for ₹ pricing." },
    { question: "Can I track multiple competitors per product?", answer: "Absolutely. You can track unlimited competitors per product on paid plans. Free plan includes key competitors." },
    { question: "Will constant price changes hurt margins?", answer: "No. Insydz helps you make informed decisions, not reactive ones. You'll see patterns and avoid panic discounting." },
    { question: "Is this available on the free plan?", answer: "Yes! The free plan includes basic competitor price tracking for limited products. Upgrade for unlimited tracking." },
    { question: "Do I get WhatsApp alerts?", answer: "Yes! WhatsApp alerts are available on all plans, ensuring you never miss critical price changes." }
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
              <button
                onClick={() => setLocation('/')}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </button>
              <div className="flex items-center space-x-1 group cursor-pointer" onClick={() => setLocation('/')}>
                <div className="relative">
                  <img src="/logo.png" alt="Insydz Logo" className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Insydz</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2" ref={dropdownRef}>
              <button onClick={() => setLocation('/')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all">Home</button>

              {/* Solutions Dropdown */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Solutions')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all flex items-center gap-1">
                  Solutions <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Solutions' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Solutions' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu.Solutions.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 flex-1">{item.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Use Cases Dropdown */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Use Cases')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all flex items-center gap-1">
                  Use Cases <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Use Cases' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Use Cases' && (
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

              {/* Features Dropdown - HIGHLIGHTED (current page) */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Features')} className="px-3 py-2 text-sm text-orange-600 dark:text-orange-500 font-semibold rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all flex items-center gap-1">
                  Features <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Features' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Features' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu.Features.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 flex-1">{item.name}</span>
                        {item.badge && <span className="text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => setLocation('/pricing')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all">Pricing</button>
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
                <button onMouseEnter={() => setActiveDropdown('Resources')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all flex items-center gap-1">
                  Resources <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Resources' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Resources' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu.Resources.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 flex-1">{item.name}</span>
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
              <button onClick={() => { setLocation('/'); setIsMenuOpen(false); }} className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>

              <div>
                <button onClick={() => toggleMobileMenu('Solutions')} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg font-medium">
                  Solutions <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Solutions' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'Solutions' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu.Solutions.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg">
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
                <button onClick={() => toggleMobileMenu('Features')} className="flex items-center justify-between w-full px-4 py-2 text-orange-600 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg font-semibold">
                  Features <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Features' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'Features' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu.Features.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg">
                        {item.icon}{item.name}
                        {item.badge && <span className="text-xs bg-orange-500 text-white px-1.5 py-0.5 rounded-full">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => setLocation('/pricing')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg font-medium">Pricing</button>
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

              <button className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors w-full flex justify-center items-center" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 rounded-full px-4 py-2">
                <TrendingDown className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-700">Feature Spotlight</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
                Competitor Price Tracking —
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
                  Know Every Price Move
                </span>
                <br />
                Before It Hurts Your Sales
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Track competitor prices across Amazon & Flipkart automatically.
                <span className="text-orange-700 font-semibold"> Get instant alerts when prices change, Buy Box is at risk, or discounts appear.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group">
                  👉 Start Free Price Tracking
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} size="lg" variant="outline" className="border-2 border-orange-600 text-orange-700 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-semibold px-8 py-6 text-lg rounded-full">
                  See It in Action →
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                {["Works for Amazon & Flipkart India", "Real-time alerts", "No manual tracking"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative bg-white dark:bg-gray-900 border-2 border-orange-200 dark:border-orange-800 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="font-bold text-gray-900 dark:text-white">Live Price Comparison</h3>
                    <span className="text-xs bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1 rounded-full font-semibold">Tracking 5</span>
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
                        <p className="text-xs text-red-600 font-semibold">Price dropped by 17% — Buy Box at risk!</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Competitor B</span>
                        <span className="text-lg font-bold text-gray-700 dark:text-gray-300">₹1,299</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-400 dark:border-green-600 rounded-2xl p-4 mt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white text-sm">WhatsApp Alert Sent</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">"Competitor A dropped to ₹999"</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl px-4 py-2 shadow-xl">
                  <p className="text-white font-bold text-sm">Live</p>
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
              Why Most Sellers
              <br />
              <span className="text-red-600">Lose Money on Pricing</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: <RefreshCw className="w-8 h-8" />, title: "Competitors change prices multiple times daily", color: "from-red-500 to-orange-500" },
              { icon: <Clock className="w-8 h-8" />, title: "Manual checks are always late", color: "from-orange-500 to-yellow-500" },
              { icon: <DollarSign className="w-8 h-8" />, title: "Price wars destroy margins", color: "from-yellow-500 to-orange-500" },
              { icon: <Shield className="w-8 h-8" />, title: "Buy Box is lost silently", color: "from-orange-500 to-red-500" }
            ].map((pain, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-orange-400 hover:shadow-lg transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>{pain.icon}</div>
                <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{pain.title}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-400 dark:border-red-600 rounded-3xl p-8 text-center shadow-lg">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Late price reactions cause <span className="text-red-600">20-40% revenue leakage</span>
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">in competitive categories.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Manual Tracking</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Seller manually checking listings, missing changes</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Automated Alerts</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Instant notifications, never miss a change</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">How Competitor Price Tracking Works</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Insydz automatically monitors competitor prices for your products and alerts you the moment something changes —
              <span className="text-orange-700 font-semibold"> so you can react instantly, not emotionally.</span>
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 -translate-y-1/2"></div>
            <div className="grid lg:grid-cols-4 gap-8 relative">
              {[
                { step: "1", title: "Add your product or ASIN", icon: <ShoppingBag className="w-12 h-12" /> },
                { step: "2", title: "Insydz identifies key competitors", icon: <Eye className="w-12 h-12" /> },
                { step: "3", title: "Prices are tracked 24/7", icon: <RefreshCw className="w-12 h-12" /> },
                { step: "4", title: "Alerts sent instantly via dashboard & WhatsApp", icon: <Bell className="w-12 h-12" /> }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 border-2 border-orange-300 dark:border-orange-700 rounded-2xl p-6 text-center relative z-10 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-black text-white">{item.step}</div>
                  <div className="bg-orange-100 dark:bg-orange-900/20 rounded-xl p-4 mb-4 text-orange-600">{item.icon}</div>
                  <p className="text-gray-900 dark:text-white font-semibold">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group">
              👉 Track Your First Competitor Free
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* What This Feature Helps You Do */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">What You Can Do with Competitor Price Tracking</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Zap />, title: "React before sales drop", arrow: <TrendingDown className="w-6 h-6 text-red-500" /> },
              { icon: <Shield />, title: "Protect Buy Box without panic discounts", arrow: <Shield className="w-6 h-6 text-green-500" /> },
              { icon: <Eye />, title: "Identify fake price wars", arrow: <AlertCircle className="w-6 h-6 text-orange-500" /> },
              { icon: <Clock />, title: "Time discounts smartly", arrow: <Clock className="w-6 h-6 text-blue-500" /> },
              { icon: <TrendingUp />, title: "Increase profit without losing volume", arrow: <TrendingUp className="w-6 h-6 text-green-500" /> },
              { icon: <Target />, title: "Stay competitive always", arrow: <Target className="w-6 h-6 text-purple-500" /> }
            ].map((outcome, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center text-orange-600">{outcome.icon}</div>
                  {outcome.arrow}
                </div>
                <p className="text-gray-900 dark:text-white font-semibold leading-relaxed">{outcome.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Depth */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Built for Real Price Intelligence</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { feature: "Real-Time Price Monitoring", benefit: "Faster reaction than competitors", icon: <Eye className="w-8 h-8" />, color: "from-blue-500 to-cyan-500" },
              { feature: "Historical Price Trends", benefit: "Smarter pricing decisions", icon: <BarChart3 className="w-8 h-8" />, color: "from-purple-500 to-pink-500" },
              { feature: "Buy Box Risk Alerts", benefit: "Prevent sudden sales drops", icon: <Shield className="w-8 h-8" />, color: "from-red-500 to-orange-500" },
              { feature: "Multi-Competitor Tracking", benefit: "Complete market visibility", icon: <Target className="w-8 h-8" />, color: "from-green-500 to-emerald-500" },
              { feature: "WhatsApp Price Alerts", benefit: "Instant action on your phone", icon: <Bell className="w-8 h-8" />, color: "from-orange-500 to-red-500" },
              { feature: "Price History Analysis", benefit: "Identify patterns & trends", icon: <TrendingUp className="w-8 h-8" />, color: "from-indigo-500 to-purple-500" }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-orange-400 hover:shadow-xl transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.feature}</h3>
                <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-orange-500" />{item.benefit}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Manual Price Tracking vs Insydz</h2>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-300">Task</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 dark:text-gray-300">Manual Tracking</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-orange-700 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20">With Insydz</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { task: "Monitoring", manual: "Checking listings manually", insydz: "Automatic 24/7 tracking" },
                  { task: "Response Time", manual: "Late reactions", insydz: "Instant alerts" },
                  { task: "Data Management", manual: "Excel sheets", insydz: "Live price dashboards" },
                  { task: "Decision Quality", manual: "Panic discounting", insydz: "Smart pricing decisions" },
                  { task: "Time Investment", manual: "Hours wasted", insydz: "Minutes per day" }
                ].map((row, i) => (
                  <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{row.task}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-red-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{row.manual}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center bg-orange-50 dark:bg-orange-900/20">
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
            <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl">
              👉 Switch to Smart Price Tracking
            </Button>
          </div>
        </div>
      </section>

      {/* PLG Entry Point */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Start Free. See Real Price Movements.</h2>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-2 border-orange-300 dark:border-orange-700 rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-black text-orange-600">₹0</span>
                <span className="text-2xl text-gray-600 dark:text-gray-400">/ Forever</span>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">Free Plan Includes:</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {["Track limited products", "Competitor price alerts", "Amazon & Flipkart data", "No credit card required"].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <span className="font-bold text-orange-600">Upgrade Teaser:</span> Unlock deeper tracking, more competitors, and automation on paid plans.
              </p>
            </div>
            <div className="text-center">
              <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl">
                👉 Start Free Price Tracking
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Feature Is For */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Is Competitor Price Tracking Right for You?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"><Check className="w-6 h-6 text-white" /></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Best For</h3>
              </div>
              <ul className="space-y-4">
                {["Competitive categories", "Buy Box-sensitive products", "Sellers protecting margins", "Agencies managing multiple brands"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center"><X className="w-6 h-6 text-white" /></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Not Ideal For</h3>
              </div>
              <ul className="space-y-4">
                {["Fixed-price categories", "One-time sellers", "Sellers ignoring competitor behavior"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Competitor Price Tracking – FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-orange-400 transition-all">
                <button onClick={() => toggleFaq(i)} className="w-full px-6 py-4 flex items-center justify-between text-left">
                  <span className="font-bold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-orange-600 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</div>
                )}
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
              { title: "Review Analytics", icon: <MessageCircle />, color: "from-purple-500 to-pink-500", route: "/features/review-analytics-feature" },
              { title: "Price Optimization", icon: <DollarSign />, color: "from-green-500 to-emerald-500", route: "/features/price-optimization-feature" },
              { title: "Keyword & Rank Tracking", icon: <Search />, color: "from-blue-500 to-cyan-500", route: "/features/keyword-rank-tracking-feature" },
              { title: "Product Research", icon: <Target />, color: "from-orange-500 to-red-500", route: "/features/product-research-feature" },
              { title: "AI Recommendations", icon: <Sparkles />, color: "from-indigo-500 to-purple-500", route: "/features/ai-recommendations-feature" },
              { title: "WhatsApp Alerts", icon: <Bell />, color: "from-green-500 to-emerald-500", route: "/features/whatsapp-alerts-feature" }
            ].map((feature, i) => (
              <div key={i} onClick={() => feature.route && setLocation(feature.route)} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all cursor-pointer group">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors">{feature.title}</h3>
                <ArrowRight className="w-5 h-5 text-orange-600 mt-2 group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
            Stop Guessing Prices.
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Track Competitors Automatically.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group">
              👉 Start Free Price Tracking
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button onClick={() => setLocation("/")} size="lg" variant="outline" className="border-2 border-orange-600 text-orange-700 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-semibold px-12 py-6 text-lg rounded-full">
              Explore All Features →
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t-2 border-orange-300 dark:border-orange-700 p-4 shadow-2xl z-40">
        <Button onClick={handleGetStarted} className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-full shadow-xl">
          👉 Start Free Price Tracking
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="Insydz Logo" className="w-10 h-10 rounded-xl object-contain" />
                <span className="text-lg font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Insydz</span>
              </div>
              <p className="text-gray-400 text-sm">AI-powered intelligence for Indian sellers</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => setLocation("/")} className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">Home</button>
                <button onClick={() => setLocation("/pricing")} className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">Pricing</button>
                <button onClick={handleGetStarted} className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">Login</button>
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