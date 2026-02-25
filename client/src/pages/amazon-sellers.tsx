// import { useState, useEffect } from "react";
// import { useLocation } from "wouter";
// import { 
//   TrendingDown, ArrowRight, CheckCircle2, Target, Zap, 
//   Bell, TrendingUp, MessageCircle, Search, Package, 
//   BarChart3, ChevronRight, Star, AlertCircle, Clock,
//   ShoppingBag, IndianRupee, Smartphone, Play, X
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function AmazonSellersPage() {
//   const [, setLocation] = useLocation();
//   const [scrolled, setScrolled] = useState(false);

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

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
//       {/* Navigation */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white/95 backdrop-blur-xl border-b border-orange-200 shadow-lg"
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
//                 className="text-gray-300 hover:text-white hover:bg-white/10"
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
//       <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
//         {/* Background Effects */}
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black"></div>
//         <div className="absolute top-0 left-0 w-full h-full">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
//           <div className="absolute top-40 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="space-y-8">
//               <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
//                 </span>
//                 <span className="text-sm font-medium text-orange-400">Built for Indian Amazon Sellers 🇮🇳</span>
//               </div>

//               <h1 className="text-5xl lg:text-6xl font-black leading-tight">
//                 Stop Guessing on Amazon.
//                 <br />
//                 <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
//                   Sell Smarter
//                 </span>
//                 <br />
//                 with Real-Time Seller Intelligence.
//               </h1>

//               <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
//                 Insydz helps Indian Amazon sellers track competitors, optimize pricing, decode reviews, and rank higher — 
//                 <span className="text-orange-400 font-semibold"> without expensive foreign tools or manual Excel work.</span>
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button
//                   onClick={handleGetStarted}
//                   size="lg"
//                   className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group"
//                 >
//                   👉 Start Free for Amazon Sellers
//                   <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//                 <Button
//                   onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
//                   size="lg"
//                   variant="outline"
//                   className="border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10 font-semibold px-8 py-6 text-lg rounded-full"
//                 >
//                   See How It Works →
//                 </Button>
//               </div>

//               {/* Trust Signals */}
//               <div className="flex flex-wrap items-center gap-6 pt-4">
//                 <div className="flex items-center gap-2 text-sm text-gray-400">
//                   <CheckCircle2 className="w-5 h-5 text-green-500" />
//                   <span>Works with Indian pricing & categories</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-400">
//                   <CheckCircle2 className="w-5 h-5 text-green-500" />
//                   <span>WhatsApp alerts (not ignored emails)</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-400">
//                   <CheckCircle2 className="w-5 h-5 text-green-500" />
//                   <span>No credit card required</span>
//                 </div>
//               </div>
//             </div>

//             {/* Right Visual */}
//             <div className="relative">
//               <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/30 rounded-3xl p-8 shadow-2xl">
//                 {/* Mock Dashboard */}
//                 <div className="space-y-4">
//                   {/* Amazon Product Card */}
//                   <div className="bg-black/50 border border-gray-800 rounded-2xl p-4">
//                     <div className="flex items-start gap-4">
//                       <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center">
//                         <ShoppingBag className="w-10 h-10 text-orange-500" />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="font-bold text-white mb-1">Premium Wireless Earbuds</h3>
//                         <div className="flex items-center gap-2">
//                           <div className="flex items-center">
//                             {[...Array(5)].map((_, i) => (
//                               <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
//                             ))}
//                           </div>
//                           <span className="text-sm text-gray-400">4.5 (2,341)</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Price Alert */}
//                   <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-l-4 border-red-500 rounded-r-2xl p-4 animate-pulse">
//                     <div className="flex items-start gap-3">
//                       <TrendingDown className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
//                       <div>
//                         <p className="font-bold text-white">Competitor Price Drop Alert!</p>
//                         <p className="text-sm text-gray-300">Top competitor reduced price by <span className="text-red-400 font-bold">12%</span></p>
//                         <p className="text-xs text-gray-400 mt-1">₹1,999 → ₹1,759</p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* WhatsApp Alert */}
//                   <div className="bg-green-500/10 border-2 border-green-500/30 rounded-2xl p-4">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
//                         <Smartphone className="w-5 h-5 text-white" />
//                       </div>
//                       <div>
//                         <p className="font-bold text-white text-sm">WhatsApp Alert Sent</p>
//                         <p className="text-xs text-gray-400">Instant notification on your phone</p>
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

//       {/* Problem Agitation Section */}
//       <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl lg:text-5xl font-black mb-4">
//               Why Most Amazon Sellers
//               <br />
//               <span className="text-red-500">Lose Money</span> (Without Realising It)
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {[
//               {
//                 icon: <TrendingDown className="w-8 h-8" />,
//                 title: "You don't know when competitors change prices",
//                 color: "from-red-500 to-orange-500"
//               },
//               {
//                 icon: <MessageCircle className="w-8 h-8" />,
//                 title: "You discover bad reviews after sales drop",
//                 color: "from-orange-500 to-yellow-500"
//               },
//               {
//                 icon: <Search className="w-8 h-8" />,
//                 title: "You guess keywords instead of tracking rankings",
//                 color: "from-yellow-500 to-orange-500"
//               },
//               {
//                 icon: <Clock className="w-8 h-8" />,
//                 title: "Manual tracking wastes hours every week",
//                 color: "from-orange-500 to-red-500"
//               }
//             ].map((pain, i) => (
//               <div key={i} className="bg-black border-2 border-gray-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all group">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
//                   {pain.icon}
//                 </div>
//                 <p className="text-gray-300 font-medium leading-relaxed">{pain.title}</p>
//               </div>
//             ))}
//           </div>

//           {/* Highlight Box */}
//           <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-red-500/50 rounded-3xl p-8 text-center">
//             <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
//             <p className="text-2xl font-bold text-white mb-2">
//               Most Amazon sellers lose <span className="text-red-500">15-30% profit</span>
//             </p>
//             <p className="text-gray-400 text-lg">
//               due to late pricing decisions, ignored reviews, and poor keyword visibility.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Solution Introduction */}
//       <section className="py-20 px-4 bg-gray-900">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6">
//               Meet Insydz —
//               <br />
//               Your <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Amazon Seller Intelligence Brain</span>
//             </h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
//               Insydz is an AI-powered intelligence platform built specifically for Indian Amazon sellers. 
//               <span className="text-orange-400 font-semibold"> It doesn't just show dashboards — it tells you exactly what to do to sell more and protect margins.</span>
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 icon: <Target className="w-10 h-10" />,
//                 title: "Automatic Competitor Tracking",
//                 desc: "Monitor 100+ competitors without lifting a finger",
//                 color: "from-blue-500 to-cyan-500"
//               },
//               {
//                 icon: <MessageCircle className="w-10 h-10" />,
//                 title: "AI-Powered Review Insights",
//                 desc: "Understand what customers really want",
//                 color: "from-purple-500 to-pink-500"
//               },
//               {
//                 icon: <TrendingUp className="w-10 h-10" />,
//                 title: "Pricing & SEO Recommendations",
//                 desc: "AI tells you the exact price & keywords to use",
//                 color: "from-orange-500 to-red-500"
//               },
//               {
//                 icon: <Bell className="w-10 h-10" />,
//                 title: "Instant WhatsApp Alerts",
//                 desc: "Get notified on your phone, not buried emails",
//                 color: "from-green-500 to-emerald-500"
//               }
//             ].map((benefit, i) => (
//               <div key={i} className="bg-black border-2 border-gray-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all group">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
//                   {benefit.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
//                 <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section id="how-it-works" className="py-20 px-4 bg-black">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6">
//               How Insydz Works
//               <br />
//               <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">for Amazon Sellers</span>
//             </h2>
//           </div>

//           <div className="relative">
//             {/* Connection Line */}
//             <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 -translate-y-1/2"></div>

//             <div className="grid lg:grid-cols-3 gap-12 relative">
//               {/* Step 1 */}
//               <div className="relative">
//                 <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/30 rounded-3xl p-8 text-center relative z-10">
//                   <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white">
//                     1
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-4">Connect Amazon Store</h3>
//                   <p className="text-gray-400 leading-relaxed mb-6">
//                     Connect your Amazon seller account or ASINs. Insydz automatically tracks your products, competitors, and category.
//                   </p>
//                   <div className="bg-orange-500/10 rounded-2xl p-4">
//                     <ShoppingBag className="w-12 h-12 text-orange-500 mx-auto" />
//                   </div>
//                 </div>
//               </div>

//               {/* Step 2 */}
//               <div className="relative">
//                 <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/30 rounded-3xl p-8 text-center relative z-10">
//                   <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white">
//                     2
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-4">AI Analyses Everything</h3>
//                   <p className="text-gray-400 leading-relaxed mb-6">
//                     Our AI scans prices, reviews, rankings, and trends across Amazon India.
//                   </p>
//                   <div className="bg-purple-500/10 rounded-2xl p-4">
//                     <BarChart3 className="w-12 h-12 text-purple-500 mx-auto animate-pulse" />
//                   </div>
//                 </div>
//               </div>

//               {/* Step 3 */}
//               <div className="relative">
//                 <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/30 rounded-3xl p-8 text-center relative z-10">
//                   <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white">
//                     3
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-4">You Get Clear Actions</h3>
//                   <div className="space-y-3 text-left">
//                     <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/30 rounded-lg p-3">
//                       <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
//                       <span className="text-sm text-gray-300">"Competitor dropped price by 12%"</span>
//                     </div>
//                     <div className="flex items-start gap-2 bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
//                       <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
//                       <span className="text-sm text-gray-300">"Keyword ranking fell from #8 to #21"</span>
//                     </div>
//                     <div className="flex items-start gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
//                       <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
//                       <span className="text-sm text-gray-300">"342 reviews mention packaging issue"</span>
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
//               👉 Start Free & See Your First Insights
//               <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Social Proof / Stats */}
//       <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { stat: "250K+", label: "Reviews Analyzed", icon: <MessageCircle className="w-8 h-8" /> },
//               { stat: "24/7", label: "Real-Time Tracking", icon: <Clock className="w-8 h-8" /> },
//               { stat: "15-30%", label: "Average Profit Saved", icon: <TrendingUp className="w-8 h-8" /> }
//             ].map((item, i) => (
//               <div key={i} className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/30 rounded-2xl p-8 text-center hover:scale-105 transition-transform">
//                 <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
//                   {item.icon}
//                 </div>
//                 <div className="text-5xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
//                   {item.stat}
//                 </div>
//                 <div className="text-gray-400 text-lg font-medium">{item.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA Section */}
//       <section className="py-20 px-4 bg-gradient-to-br from-orange-500 via-red-500 to-orange-500">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
//             Ready to Stop Losing Money on Amazon?
//           </h2>
//           <p className="text-xl text-white/90 mb-8 leading-relaxed">
//             Join Indian Amazon sellers who've stopped guessing and started winning with real-time intelligence.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-black hover:bg-gray-900 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
//             >
//               Start Free for Amazon Sellers
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//           <p className="text-white/70 mt-6 text-sm">
//             ✓ No credit card required  ✓ Setup in 2 minutes  ✓ Cancel anytime
//           </p>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black border-t border-gray-800 py-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-8 mb-8">
//             <div>
//               <div className="flex items-center space-x-3 mb-4">
//                 <img 
//                   src="/logo.png" 
//                   alt="Insydz Logo" 
//                   className="w-10 h-10 rounded-xl object-contain"
//                 />
//                 <span className="text-lg font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
//                   Insydz
//                 </span>
//               </div>
//               <p className="text-gray-400 text-sm">
//                 AI-powered intelligence for Indian Amazon sellers
//               </p>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4 text-white">Quick Links</h4>
//               <div className="space-y-2">
//                 <button onClick={() => setLocation("/")} className="block text-gray-400 hover:text-orange-500 transition-colors text-sm">
//                   Home
//                 </button>
//                 <button onClick={() => setLocation("/pricing")} className="block text-gray-400 hover:text-orange-500 transition-colors text-sm">
//                   Pricing
//                 </button>
//                 <button onClick={handleGetStarted} className="block text-gray-400 hover:text-orange-500 transition-colors text-sm">
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



// import { useState, useEffect } from "react";
// import { useLocation } from "wouter";
// import { 
//   TrendingDown, ArrowRight, CheckCircle2, Target, Zap, 
//   Bell, TrendingUp, MessageCircle, Search, Package, 
//   BarChart3, ChevronRight, Star, AlertCircle, Clock,
//   ShoppingBag, IndianRupee, Smartphone
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function AmazonSellersPage() {
//   const [, setLocation] = useLocation();
//   const [scrolled, setScrolled] = useState(false);

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
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
//                 </span>
//                 <span className="text-sm font-medium text-orange-700">Built for Indian Amazon Sellers 🇮🇳</span>
//               </div>

//               <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
//                 Stop Guessing on Amazon.
//                 <br />
//                 <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
//                   Sell Smarter
//                 </span>
//                 <br />
//                 with Real-Time Seller Intelligence.
//               </h1>

//               <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
//                 Insydz helps Indian Amazon sellers track competitors, optimize pricing, decode reviews, and rank higher — 
//                 <span className="text-orange-700 font-semibold"> without expensive foreign tools or manual Excel work.</span>
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button
//                   onClick={handleGetStarted}
//                   size="lg"
//                   className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group"
//                 >
//                   👉 Start Free for Amazon Sellers
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
//                   <span>Works with Indian pricing & categories</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>WhatsApp alerts (not ignored emails)</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>No credit card required</span>
//                 </div>
//               </div>
//             </div>

//             {/* Right Visual */}
//             <div className="relative">
//               <div className="relative bg-white border-2 border-orange-200 rounded-3xl p-8 shadow-2xl">
//                 <div className="space-y-4">
//                   {/* Amazon Product Card */}
//                   <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-4">
//                     <div className="flex items-start gap-4">
//                       <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
//                         <ShoppingBag className="w-10 h-10 text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="font-bold text-gray-900 mb-1">Premium Wireless Earbuds</h3>
//                         <div className="flex items-center gap-2">
//                           <div className="flex items-center">
//                             {[...Array(5)].map((_, i) => (
//                               <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
//                             ))}
//                           </div>
//                           <span className="text-sm text-gray-600">4.5 (2,341)</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Price Alert */}
//                   <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl p-4 shadow-md">
//                     <div className="flex items-start gap-3">
//                       <TrendingDown className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
//                       <div>
//                         <p className="font-bold text-gray-900">Competitor Price Drop Alert!</p>
//                         <p className="text-sm text-gray-700">Top competitor reduced price by <span className="text-red-600 font-bold">12%</span></p>
//                         <p className="text-xs text-gray-500 mt-1">₹1,999 → ₹1,759</p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* WhatsApp Alert */}
//                   <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-2xl p-4">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
//                         <Smartphone className="w-5 h-5 text-white" />
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-900 text-sm">WhatsApp Alert Sent</p>
//                         <p className="text-xs text-gray-600">Instant notification on your phone</p>
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

//       {/* Problem Agitation Section */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900">
//               Why Most Amazon Sellers
//               <br />
//               <span className="text-red-600">Lose Money</span> (Without Realising It)
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {[
//               {
//                 icon: <TrendingDown className="w-8 h-8" />,
//                 title: "You don't know when competitors change prices",
//                 color: "from-red-500 to-orange-500"
//               },
//               {
//                 icon: <MessageCircle className="w-8 h-8" />,
//                 title: "You discover bad reviews after sales drop",
//                 color: "from-orange-500 to-yellow-500"
//               },
//               {
//                 icon: <Search className="w-8 h-8" />,
//                 title: "You guess keywords instead of tracking rankings",
//                 color: "from-yellow-500 to-orange-500"
//               },
//               {
//                 icon: <Clock className="w-8 h-8" />,
//                 title: "Manual tracking wastes hours every week",
//                 color: "from-orange-500 to-red-500"
//               }
//             ].map((pain, i) => (
//               <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-orange-400 hover:shadow-lg transition-all group">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
//                   {pain.icon}
//                 </div>
//                 <p className="text-gray-700 font-medium leading-relaxed">{pain.title}</p>
//               </div>
//             ))}
//           </div>

//           {/* Highlight Box */}
//           <div className="bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-400 rounded-3xl p-8 text-center shadow-lg">
//             <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
//             <p className="text-2xl font-bold text-gray-900 mb-2">
//               Most Amazon sellers lose <span className="text-red-600">15-30% profit</span>
//             </p>
//             <p className="text-gray-700 text-lg">
//               due to late pricing decisions, ignored reviews, and poor keyword visibility.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Solution Introduction */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//               Meet Insydz —
//               <br />
//               Your <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Amazon Seller Intelligence Brain</span>
//             </h2>
//             <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
//               Insydz is an AI-powered intelligence platform built specifically for Indian Amazon sellers. 
//               <span className="text-orange-700 font-semibold"> It doesn't just show dashboards — it tells you exactly what to do to sell more and protect margins.</span>
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 icon: <Target className="w-10 h-10" />,
//                 title: "Automatic Competitor Tracking",
//                 desc: "Monitor 100+ competitors without lifting a finger",
//                 color: "from-blue-500 to-cyan-500"
//               },
//               {
//                 icon: <MessageCircle className="w-10 h-10" />,
//                 title: "AI-Powered Review Insights",
//                 desc: "Understand what customers really want",
//                 color: "from-purple-500 to-pink-500"
//               },
//               {
//                 icon: <TrendingUp className="w-10 h-10" />,
//                 title: "Pricing & SEO Recommendations",
//                 desc: "AI tells you the exact price & keywords to use",
//                 color: "from-orange-500 to-red-500"
//               },
//               {
//                 icon: <Bell className="w-10 h-10" />,
//                 title: "Instant WhatsApp Alerts",
//                 desc: "Get notified on your phone, not buried emails",
//                 color: "from-green-500 to-emerald-500"
//               }
//             ].map((benefit, i) => (
//               <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 hover:border-orange-400 hover:shadow-xl transition-all group">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-lg`}>
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
//       <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//               How Insydz Works
//               <br />
//               <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">for Amazon Sellers</span>
//             </h2>
//           </div>

//           <div className="relative">
//             <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 -translate-y-1/2"></div>

//             <div className="grid lg:grid-cols-3 gap-12 relative">
//               {/* Step 1 */}
//               <div className="relative">
//                 <div className="bg-white border-2 border-orange-300 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
//                   <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
//                     1
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect Amazon Store</h3>
//                   <p className="text-gray-700 leading-relaxed mb-6">
//                     Connect your Amazon seller account or ASINs. Insydz automatically tracks your products, competitors, and category.
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
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Analyses Everything</h3>
//                   <p className="text-gray-700 leading-relaxed mb-6">
//                     Our AI scans prices, reviews, rankings, and trends across Amazon India.
//                   </p>
//                   <div className="bg-purple-100 rounded-2xl p-4">
//                     <BarChart3 className="w-12 h-12 text-purple-600 mx-auto animate-pulse" />
//                   </div>
//                 </div>
//               </div>

//               {/* Step 3 */}
//               <div className="relative">
//                 <div className="bg-white border-2 border-orange-300 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
//                   <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
//                     3
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">You Get Clear Actions</h3>
//                   <div className="space-y-3 text-left">
//                     <div className="flex items-start gap-2 bg-red-50 border border-red-300 rounded-lg p-3">
//                       <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
//                       <span className="text-sm text-gray-800">"Competitor dropped price by 12%"</span>
//                     </div>
//                     <div className="flex items-start gap-2 bg-orange-50 border border-orange-300 rounded-lg p-3">
//                       <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
//                       <span className="text-sm text-gray-800">"Keyword ranking fell from #8 to #21"</span>
//                     </div>
//                     <div className="flex items-start gap-2 bg-yellow-50 border border-yellow-300 rounded-lg p-3">
//                       <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
//                       <span className="text-sm text-gray-800">"342 reviews mention packaging issue"</span>
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
//               👉 Start Free & See Your First Insights
//               <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Social Proof / Stats */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { stat: "250K+", label: "Reviews Analyzed", icon: <MessageCircle className="w-8 h-8" /> },
//               { stat: "24/7", label: "Real-Time Tracking", icon: <Clock className="w-8 h-8" /> },
//               { stat: "15-30%", label: "Average Profit Saved", icon: <TrendingUp className="w-8 h-8" /> }
//             ].map((item, i) => (
//               <div key={i} className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-8 text-center hover:scale-105 hover:shadow-2xl transition-all">
//                 <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
//                   {item.icon}
//                 </div>
//                 <div className="text-5xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
//                   {item.stat}
//                 </div>
//                 <div className="text-gray-700 text-lg font-medium">{item.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA Section */}
//       <section className="py-20 px-4 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
//             Ready to Stop Losing Money on Amazon?
//           </h2>
//           <p className="text-xl text-white/90 mb-8 leading-relaxed">
//             Join Indian Amazon sellers who've stopped guessing and started winning with real-time intelligence.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-white hover:bg-gray-100 text-orange-700 font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
//             >
//               Start Free for Amazon Sellers
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//           <p className="text-white/80 mt-6 text-sm">
//             ✓ No credit card required  ✓ Setup in 2 minutes  ✓ Cancel anytime
//           </p>
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
//                 <span className="text-lg font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
//                   Insydz
//                 </span>
//               </div>
//               <p className="text-gray-400 text-sm">
//                 AI-powered intelligence for Indian Amazon sellers
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
//   ShoppingBag, IndianRupee, Smartphone, Menu, X, Sun, Moon,
//   ChevronDown, Store, Briefcase, Users, Code, Globe, Trophy,
//   ArrowLeft, BookOpen, Video, FileText
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
//   ],
//   "Free Tools": [
//     { name: "Free Amazon Product Analyzer", icon: <BarChart3 className="w-4 h-4" /> },
//     { name: "Free Review Sentiment Checker", icon: <MessageCircle className="w-4 h-4" /> },
//     { name: "Free Competitor Price Checker", icon: <TrendingDown className="w-4 h-4" /> },
//     { name: "Free Keyword Rank Checker", icon: <Search className="w-4 h-4" />, badge: "NEW" },
//   ],
//   Resources: [
//     { name: "Expert Blog", icon: <BookOpen className="w-4 h-4" />, route: "resources/expert-blog" },
//     { name: "Success Stories", icon: <FileText className="w-4 h-4" />, route: "/case-studies" },
//     { name: "Video Masterclasses", icon: <Video className="w-4 h-4" />, route: "/videos" },
//     { name: "Strategic Playbooks", icon: <BookOpen className="w-4 h-4" />, route: "/guides" },
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
// };

// export default function AmazonSellersPage() {
//   const [, setLocation] = useLocation();
//   const [scrolled, setScrolled] = useState(false);
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
//             <div className="flex items-center space-x-4">
//               <button
//                 onClick={() => setLocation('/')}
//                 className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
//               >
//                 <ArrowLeft className="w-4 h-4" />
//                 <span className="hidden sm:inline">Back</span>
//               </button>
              
//               <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => setLocation('/')}>
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
//             <div className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
//               <button 
//                 onClick={() => setLocation('/')} 
//                 className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
//               >
//                 Home
//               </button>

//               {/* Solutions Dropdown - HIGHLIGHTED */}
//               <div className="relative">
//                 <button
//                   onMouseEnter={() => setActiveDropdown('Solutions')}
//                   className="px-3 py-2 text-sm text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 font-semibold rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all flex items-center gap-1"
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
//                         className="w-full px-4 py-3 text-left hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors flex items-center gap-3 group"
//                       >
//                         <span className="text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
//                           {item.icon}
//                         </span>
//                         <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 flex-1">
//                           {item.name}
//                         </span>
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Use Cases Dropdown */}
//               <div className="relative">
//                 <button
//                   onMouseEnter={() => setActiveDropdown('Use Cases')}
//                   className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1"
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

//               <button 
//                 onClick={() => scrollToSection('About')} 
//                 className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
//               >
//                 About
//               </button>

//               <Button onClick={() => scrollToSection('Contact')} className="ml-2 text-sm bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
//                 Contact Us
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
//                   className="flex items-center justify-between w-full px-4 py-2 text-orange-600 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg font-semibold"
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
//                         className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg"
//                       >
//                         {item.icon}
//                         {item.name}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <button onClick={() => setLocation('/pricing')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
//                 Pricing
//               </button>

//               <button onClick={() => { scrollToSection('About'); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
//                 About
//               </button>

//               <Button onClick={() => { scrollToSection('Contact'); setIsMenuOpen(false); }} className="w-full mt-2 bg-gradient-to-r from-pink-500 to-rose-500">
//                 Contact Us
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
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
//                 </span>
//                 <span className="text-sm font-medium text-orange-700">Built for Indian Amazon Sellers 🇮🇳</span>
//               </div>

//               <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
//                 Stop Guessing on Amazon.
//                 <br />
//                 <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
//                   Sell Smarter
//                 </span>
//                 <br />
//                 with Real-Time Seller Intelligence.
//               </h1>

//               <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
//                 Insydz helps Indian Amazon sellers track competitors, optimize pricing, decode reviews, and rank higher — 
//                 <span className="text-orange-700 font-semibold"> without expensive foreign tools or manual Excel work.</span>
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button
//                   onClick={handleGetStarted}
//                   size="lg"
//                   className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group"
//                 >
//                   👉 Start Free for Amazon Sellers
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
//                   <span>Works with Indian pricing & categories</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>WhatsApp alerts (not ignored emails)</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>No credit card required</span>
//                 </div>
//               </div>
//             </div>

//             {/* Right Visual */}
//             <div className="relative">
//               <div className="relative bg-white dark:bg-gray-900 border-2 border-orange-200 dark:border-orange-800 rounded-3xl p-8 shadow-2xl">
//                 <div className="space-y-4">
//                   {/* Amazon Product Card */}
//                   <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-700 rounded-2xl p-4">
//                     <div className="flex items-start gap-4">
//                       <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
//                         <ShoppingBag className="w-10 h-10 text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="font-bold text-gray-900 dark:text-white mb-1">Premium Wireless Earbuds</h3>
//                         <div className="flex items-center gap-2">
//                           <div className="flex items-center">
//                             {[...Array(5)].map((_, i) => (
//                               <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
//                             ))}
//                           </div>
//                           <span className="text-sm text-gray-600 dark:text-gray-400">4.5 (2,341)</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Price Alert */}
//                   <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-l-4 border-red-500 rounded-r-2xl p-4 shadow-md">
//                     <div className="flex items-start gap-3">
//                       <TrendingDown className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
//                       <div>
//                         <p className="font-bold text-gray-900 dark:text-white">Competitor Price Drop Alert!</p>
//                         <p className="text-sm text-gray-700 dark:text-gray-300">Top competitor reduced price by <span className="text-red-600 font-bold">12%</span></p>
//                         <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">₹1,999 → ₹1,759</p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* WhatsApp Alert */}
//                   <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-400 rounded-2xl p-4">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
//                         <Smartphone className="w-5 h-5 text-white" />
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-900 dark:text-white text-sm">WhatsApp Alert Sent</p>
//                         <p className="text-xs text-gray-600 dark:text-gray-400">Instant notification on your phone</p>
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

//       {/* Problem Agitation Section */}
//       <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
//               Why Most Amazon Sellers
//               <br />
//               <span className="text-red-600">Lose Money</span> (Without Realising It)
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {[
//               {
//                 icon: <TrendingDown className="w-8 h-8" />,
//                 title: "You don't know when competitors change prices",
//                 color: "from-red-500 to-orange-500"
//               },
//               {
//                 icon: <MessageCircle className="w-8 h-8" />,
//                 title: "You discover bad reviews after sales drop",
//                 color: "from-orange-500 to-yellow-500"
//               },
//               {
//                 icon: <Search className="w-8 h-8" />,
//                 title: "You guess keywords instead of tracking rankings",
//                 color: "from-yellow-500 to-orange-500"
//               },
//               {
//                 icon: <Clock className="w-8 h-8" />,
//                 title: "Manual tracking wastes hours every week",
//                 color: "from-orange-500 to-red-500"
//               }
//             ].map((pain, i) => (
//               <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-orange-400 hover:shadow-lg transition-all group">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
//                   {pain.icon}
//                 </div>
//                 <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{pain.title}</p>
//               </div>
//             ))}
//           </div>

//           {/* Highlight Box */}
//           <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-400 dark:border-red-600 rounded-3xl p-8 text-center shadow-lg">
//             <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
//             <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
//               Most Amazon sellers lose <span className="text-red-600">15-30% profit</span>
//             </p>
//             <p className="text-gray-700 dark:text-gray-300 text-lg">
//               due to late pricing decisions, ignored reviews, and poor keyword visibility.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Solution Introduction */}
//       <section className="py-20 px-4 bg-white dark:bg-gray-950">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
//               Meet Insydz —
//               <br />
//               Your <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Amazon Seller Intelligence Brain</span>
//             </h2>
//             <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
//               Insydz is an AI-powered intelligence platform built specifically for Indian Amazon sellers. 
//               <span className="text-orange-700 font-semibold"> It doesn't just show dashboards — it tells you exactly what to do to sell more and protect margins.</span>
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 icon: <Target className="w-10 h-10" />,
//                 title: "Automatic Competitor Tracking",
//                 desc: "Monitor 100+ competitors without lifting a finger",
//                 color: "from-blue-500 to-cyan-500"
//               },
//               {
//                 icon: <MessageCircle className="w-10 h-10" />,
//                 title: "AI-Powered Review Insights",
//                 desc: "Understand what customers really want",
//                 color: "from-purple-500 to-pink-500"
//               },
//               {
//                 icon: <TrendingUp className="w-10 h-10" />,
//                 title: "Pricing & SEO Recommendations",
//                 desc: "AI tells you the exact price & keywords to use",
//                 color: "from-orange-500 to-red-500"
//               },
//               {
//                 icon: <Bell className="w-10 h-10" />,
//                 title: "Instant WhatsApp Alerts",
//                 desc: "Get notified on your phone, not buried emails",
//                 color: "from-green-500 to-emerald-500"
//               }
//             ].map((benefit, i) => (
//               <div key={i} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-orange-400 hover:shadow-xl transition-all group">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-lg`}>
//                   {benefit.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{benefit.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
//               How Insydz Works
//               <br />
//               <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">for Amazon Sellers</span>
//             </h2>
//           </div>

//           <div className="relative">
//             <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 -translate-y-1/2"></div>

//             <div className="grid lg:grid-cols-3 gap-12 relative">
//               {/* Step 1 */}
//               <div className="relative">
//                 <div className="bg-white dark:bg-gray-900 border-2 border-orange-300 dark:border-orange-700 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
//                   <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
//                     1
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Connect Amazon Store</h3>
//                   <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
//                     Connect your Amazon seller account or ASINs. Insydz automatically tracks your products, competitors, and category.
//                   </p>
//                   <div className="bg-orange-100 dark:bg-orange-900/20 rounded-2xl p-4">
//                     <ShoppingBag className="w-12 h-12 text-orange-600 mx-auto" />
//                   </div>
//                 </div>
//               </div>

//               {/* Step 2 */}
//               <div className="relative">
//                 <div className="bg-white dark:bg-gray-900 border-2 border-orange-300 dark:border-orange-700 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
//                   <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
//                     2
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">AI Analyses Everything</h3>
//                   <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
//                     Our AI scans prices, reviews, rankings, and trends across Amazon India.
//                   </p>
//                   <div className="bg-purple-100 dark:bg-purple-900/20 rounded-2xl p-4">
//                     <BarChart3 className="w-12 h-12 text-purple-600 mx-auto animate-pulse" />
//                   </div>
//                 </div>
//               </div>

//               {/* Step 3 */}
//               <div className="relative">
//                 <div className="bg-white dark:bg-gray-900 border-2 border-orange-300 dark:border-orange-700 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
//                   <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
//                     3
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">You Get Clear Actions</h3>
//                   <div className="space-y-3 text-left">
//                     <div className="flex items-start gap-2 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg p-3">
//                       <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
//                       <span className="text-sm text-gray-800 dark:text-gray-300">"Competitor dropped price by 12%"</span>
//                     </div>
//                     <div className="flex items-start gap-2 bg-orange-50 dark:bg-orange-900/20 border border-orange-300 dark:border-orange-700 rounded-lg p-3">
//                       <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
//                       <span className="text-sm text-gray-800 dark:text-gray-300">"Keyword ranking fell from #8 to #21"</span>
//                     </div>
//                     <div className="flex items-start gap-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-lg p-3">
//                       <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
//                       <span className="text-sm text-gray-800 dark:text-gray-300">"342 reviews mention packaging issue"</span>
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
//               👉 Start Free & See Your First Insights
//               <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Social Proof / Stats */}
//       <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { stat: "250K+", label: "Reviews Analyzed", icon: <MessageCircle className="w-8 h-8" /> },
//               { stat: "24/7", label: "Real-Time Tracking", icon: <Clock className="w-8 h-8" /> },
//               { stat: "15-30%", label: "Average Profit Saved", icon: <TrendingUp className="w-8 h-8" /> }
//             ].map((item, i) => (
//               <div key={i} className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-2 border-orange-200 dark:border-orange-700 rounded-2xl p-8 text-center hover:scale-105 hover:shadow-2xl transition-all">
//                 <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
//                   {item.icon}
//                 </div>
//                 <div className="text-5xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
//                   {item.stat}
//                 </div>
//                 <div className="text-gray-700 dark:text-gray-300 text-lg font-medium">{item.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA Section */}
//       <section className="py-20 px-4 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
//             Ready to Stop Losing Money on Amazon?
//           </h2>
//           <p className="text-xl text-white/90 mb-8 leading-relaxed">
//             Join Indian Amazon sellers who've stopped guessing and started winning with real-time intelligence.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-white hover:bg-gray-100 text-orange-700 font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
//             >
//               Start Free for Amazon Sellers
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//           <p className="text-white/80 mt-6 text-sm">
//             ✓ No credit card required  ✓ Setup in 2 minutes  ✓ Cancel anytime
//           </p>
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
//                 <span className="text-lg font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
//                   Insydz
//                 </span>
//               </div>
//               <p className="text-gray-400 text-sm">
//                 AI-powered intelligence for Indian Amazon sellers
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
  BarChart3, ChevronRight, Star, AlertCircle, Clock,
  ShoppingBag, IndianRupee, Smartphone, Menu, X, Sun, Moon,
  ChevronDown, Store, Briefcase, Users, Code, Globe, Trophy,
  ArrowLeft, BookOpen, Video, FileText,
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

export default function AmazonSellersPage() {
  const [, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);
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
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 rounded-full px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                </span>
                <span className="text-sm font-medium text-orange-700">Built for Indian Amazon Sellers 🇮🇳</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
                Stop Guessing on Amazon.
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
                  Sell Smarter
                </span>
                <br />
                with Real-Time Seller Intelligence.
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                Insydz helps Indian Amazon sellers track competitors, optimize pricing, decode reviews, and rank higher — 
                <span className="text-orange-700 font-semibold"> without expensive foreign tools or manual Excel work.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group"
                >
                  👉 Start Free for Amazon Sellers
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-600 text-orange-700 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-semibold px-8 py-6 text-lg rounded-full"
                >
                  See How It Works →
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Works with Indian pricing & categories</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>WhatsApp alerts (not ignored emails)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative bg-white dark:bg-gray-900 border-2 border-orange-200 dark:border-orange-800 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-4">
                  {/* Amazon Product Card */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-700 rounded-2xl p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <ShoppingBag className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">Premium Wireless Earbuds</h3>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">4.5 (2,341)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price Alert */}
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-l-4 border-red-500 rounded-r-2xl p-4 shadow-md">
                    <div className="flex items-start gap-3">
                      <TrendingDown className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">Competitor Price Drop Alert!</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Top competitor reduced price by <span className="text-red-600 font-bold">12%</span></p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">₹1,999 → ₹1,759</p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Alert */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-400 rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white text-sm">WhatsApp Alert Sent</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Instant notification on your phone</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl px-4 py-2 shadow-xl">
                  <p className="text-white font-bold text-sm">Live Tracking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              Why Most Amazon Sellers
              <br />
              <span className="text-red-600">Lose Money</span> (Without Realising It)
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <TrendingDown className="w-8 h-8" />,
                title: "You don't know when competitors change prices",
                color: "from-red-500 to-orange-500"
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "You discover bad reviews after sales drop",
                color: "from-orange-500 to-yellow-500"
              },
              {
                icon: <Search className="w-8 h-8" />,
                title: "You guess keywords instead of tracking rankings",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Manual tracking wastes hours every week",
                color: "from-orange-500 to-red-500"
              }
            ].map((pain, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-orange-400 hover:shadow-lg transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
                  {pain.icon}
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{pain.title}</p>
              </div>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-400 dark:border-red-600 rounded-3xl p-8 text-center shadow-lg">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Most Amazon sellers lose <span className="text-red-600">15-30% profit</span>
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              due to late pricing decisions, ignored reviews, and poor keyword visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Introduction */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              Meet Insydz —
              <br />
              Your <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Amazon Seller Intelligence Brain</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Insydz is an AI-powered intelligence platform built specifically for Indian Amazon sellers. 
              <span className="text-orange-700 font-semibold"> It doesn't just show dashboards — it tells you exactly what to do to sell more and protect margins.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Target className="w-10 h-10" />,
                title: "Automatic Competitor Tracking",
                desc: "Monitor 100+ competitors without lifting a finger",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <MessageCircle className="w-10 h-10" />,
                title: "AI-Powered Review Insights",
                desc: "Understand what customers really want",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "Pricing & SEO Recommendations",
                desc: "AI tells you the exact price & keywords to use",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: <Bell className="w-10 h-10" />,
                title: "Instant WhatsApp Alerts",
                desc: "Get notified on your phone, not buried emails",
                color: "from-green-500 to-emerald-500"
              }
            ].map((benefit, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-orange-400 hover:shadow-xl transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-lg`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              How Insydz Works
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">for Amazon Sellers</span>
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-3 gap-12 relative">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-white dark:bg-gray-900 border-2 border-orange-300 dark:border-orange-700 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Connect Amazon Store</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Connect your Amazon seller account or ASINs. Insydz automatically tracks your products, competitors, and category.
                  </p>
                  <div className="bg-orange-100 dark:bg-orange-900/20 rounded-2xl p-4">
                    <ShoppingBag className="w-12 h-12 text-orange-600 mx-auto" />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-white dark:bg-gray-900 border-2 border-orange-300 dark:border-orange-700 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">AI Analyses Everything</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Our AI scans prices, reviews, rankings, and trends across Amazon India.
                  </p>
                  <div className="bg-purple-100 dark:bg-purple-900/20 rounded-2xl p-4">
                    <BarChart3 className="w-12 h-12 text-purple-600 mx-auto animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-white dark:bg-gray-900 border-2 border-orange-300 dark:border-orange-700 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">You Get Clear Actions</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start gap-2 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg p-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-800 dark:text-gray-300">"Competitor dropped price by 12%"</span>
                    </div>
                    <div className="flex items-start gap-2 bg-orange-50 dark:bg-orange-900/20 border border-orange-300 dark:border-orange-700 rounded-lg p-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-800 dark:text-gray-300">"Keyword ranking fell from #8 to #21"</span>
                    </div>
                    <div className="flex items-start gap-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-lg p-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-800 dark:text-gray-300">"342 reviews mention packaging issue"</span>
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
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group"
            >
              👉 Start Free & See Your First Insights
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "250K+", label: "Reviews Analyzed", icon: <MessageCircle className="w-8 h-8" /> },
              { stat: "24/7", label: "Real-Time Tracking", icon: <Clock className="w-8 h-8" /> },
              { stat: "15-30%", label: "Average Profit Saved", icon: <TrendingUp className="w-8 h-8" /> }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-2 border-orange-200 dark:border-orange-700 rounded-2xl p-8 text-center hover:scale-105 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                  {item.icon}
                </div>
                <div className="text-5xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                  {item.stat}
                </div>
                <div className="text-gray-700 dark:text-gray-300 text-lg font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
            Ready to Stop Losing Money on Amazon?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join Indian Amazon sellers who've stopped guessing and started winning with real-time intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-white hover:bg-gray-100 text-orange-700 font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
            >
              Start Free for Amazon Sellers
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <p className="text-white/80 mt-6 text-sm">
            ✓ No credit card required  ✓ Setup in 2 minutes  ✓ Cancel anytime
          </p>
        </div>
      </section>

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
                <span className="text-lg font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Insydz
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered intelligence for Indian Amazon sellers
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => setLocation("/")} className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Home
                </button>
                <button onClick={() => setLocation("/pricing")} className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Pricing
                </button>
                <button onClick={handleGetStarted} className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
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