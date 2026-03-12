// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'wouter';
// import { 
//   ChevronDown, ChevronRight, Check, ArrowRight,
//   CheckCircle2, DollarSign, Globe, Bell, Zap, 
//   TrendingUp, Users, Target, AlertCircle, IndianRupee,
//   Mail, Smartphone, BarChart3, Package, Shield
// } from 'lucide-react';
// import { Button } from "@/components/ui/button";

// export default function InsydzVsViralLaunchPage() {
//   const [, setLocation] = useLocation();
//   const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleGetStarted = () => {
//     setLocation("/signup");
//   };

//   const comparisonFeatures = [
//     {
//       area: 'Marketplace Coverage',
//       insydz: 'Amazon + Flipkart',
//       competitor: 'Amazon only',
//       insydzIcon: <Globe className="w-5 h-5 text-green-600" />,
//       competitorIcon: <Package className="w-5 h-5 text-gray-500" />
//     },
//     {
//       area: 'Pricing',
//       insydz: '₹999–₹1,999/month',
//       competitor: '$69–$199/month',
//       insydzIcon: <IndianRupee className="w-5 h-5 text-green-600" />,
//       competitorIcon: <DollarSign className="w-5 h-5 text-gray-500" />
//     },
//     {
//       area: 'Free Plan',
//       insydz: 'Free forever',
//       competitor: '14-day trial',
//       insydzIcon: <CheckCircle2 className="w-5 h-5 text-green-600" />,
//       competitorIcon: <AlertCircle className="w-5 h-5 text-gray-500" />
//     },
//     {
//       area: 'Alerts',
//       insydz: 'WhatsApp + Dashboard',
//       competitor: 'Email',
//       insydzIcon: <Smartphone className="w-5 h-5 text-green-600" />,
//       competitorIcon: <Mail className="w-5 h-5 text-gray-500" />
//     },
//     {
//       area: 'Ease of Use',
//       insydz: 'Action-driven',
//       competitor: 'Tool-heavy',
//       insydzIcon: <Zap className="w-5 h-5 text-green-600" />,
//       competitorIcon: <BarChart3 className="w-5 h-5 text-gray-500" />
//     },
//     {
//       area: 'Language',
//       insydz: 'Hindi + English',
//       competitor: 'English only',
//       insydzIcon: <Users className="w-5 h-5 text-green-600" />,
//       competitorIcon: <Globe className="w-5 h-5 text-gray-500" />
//     }
//   ];

//   const comparisonReasons = [
//     'Viral Launch pricing becomes expensive quickly',
//     'Flipkart marketplace is not supported',
//     'Advanced features you may not need yet',
//     'Dollar-based pricing adds complexity for Indian sellers'
//   ];

//   const globalToolLimitations = [
//     'High dollar pricing for Indian market budgets',
//     'No Flipkart insights or data',
//     'Email-only alerts often missed',
//     'Optimized for US/EU sellers, not Indian workflows'
//   ];

//   const insydzFitReasons = [
//     'Sell on Amazon India + Flipkart',
//     'Need affordable rupee-based pricing',
//     'Want instant WhatsApp notifications',
//     'Prefer simple, actionable recommendations'
//   ];

//   const competitorFitReasons = [
//     'You focus exclusively on US/EU Amazon markets',
//     'You need advanced product launch features',
//     'You prefer comprehensive market intelligence tools'
//   ];

//   const whyIndianSellersExplore = [
//     'Significantly more affordable than dollar tools',
//     'Get Flipkart data alongside Amazon',
//     'WhatsApp alerts they actually see',
//     'Action-focused insights over complex dashboards'
//   ];

//   const decisionCards = [
//     {
//       title: 'New or Growing Indian Sellers',
//       recommendation: 'Insydz',
//       reason: 'Lower cost, multi-marketplace, clearer actions',
//       color: 'from-blue-500 to-cyan-500',
//       icon: <TrendingUp className="w-8 h-8" />
//     },
//     {
//       title: 'Global / US-Focused Sellers',
//       recommendation: 'Viral Launch',
//       reason: 'Better suited for international Amazon focus',
//       color: 'from-purple-500 to-pink-500',
//       icon: <Globe className="w-8 h-8" />
//     },
//     {
//       title: 'Multi-Marketplace Sellers',
//       recommendation: 'Insydz',
//       reason: 'Only solution covering both major Indian platforms',
//       color: 'from-green-500 to-emerald-500',
//       icon: <Package className="w-8 h-8" />
//     }
//   ];

//   const faqs = [
//     {
//       id: 'faq-1',
//       question: 'Is Insydz a replacement for Viral Launch?',
//       answer: 'Insydz is built specifically for Indian sellers and multi-marketplace needs. If you primarily sell in India across Amazon and Flipkart, Insydz offers better value and relevance. However, if you focus on US/EU markets with advanced Amazon launch strategies, Viral Launch may still be appropriate.'
//     },
//     {
//       id: 'faq-2',
//       question: 'Why is Insydz cheaper than Viral Launch?',
//       answer: 'Insydz is priced in rupees and built for the Indian market, which allows us to offer affordable pricing. We focus on clear, actionable insights rather than overwhelming toolsets, keeping costs lower while delivering what Indian sellers actually need.'
//     },
//     {
//       id: 'faq-3',
//       question: 'Does Insydz offer product research and launch tools?',
//       answer: 'Yes. Insydz provides keyword tracking, competitor analysis, and product insights tailored to Indian marketplaces including Amazon and Flipkart. Our approach focuses on actionable recommendations to help you make better decisions faster.'
//     },
//     {
//       id: 'faq-4',
//       question: 'Can I use Insydz and Viral Launch together?',
//       answer: 'Absolutely. Many sellers run Insydz alongside Viral Launch to compare insights and value before making a decision. Insydz is designed to coexist — not force an immediate switch.'
//     },
//     {
//       id: 'faq-5',
//       question: 'Which tool is better for Indian sellers?',
//       answer: 'For sellers focused on Indian marketplaces (Amazon India, Flipkart) with budget considerations, Insydz is purpose-built for your needs. For sellers targeting US/EU markets exclusively, Viral Launch may offer more international-focused features.'
//     },
//     {
//       id: 'faq-6',
//       question: 'Is Insydz a cheaper alternative to Viral Launch for Indian sellers?',
//       answer: 'Insydz is built specifically for Indian pricing realities and offers similar intelligence at a significantly lower cost. It\'s not just cheaper — it\'s designed for how Indian sellers actually work, with features like Flipkart coverage and WhatsApp alerts.'
//     },
//     {
//       id: 'faq-7',
//       question: 'Will switching tools affect my Amazon account?',
//       answer: 'No. Insydz uses read-only access and does not modify listings, prices, or ads. Your Amazon account remains completely safe during and after any transition.'
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
//               <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
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
//                 className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all"
//               >
//                 Start Free
//               </Button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section - Intent Match */}
//       <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
//           <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 rounded-full px-4 py-2 mb-8">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
//               </span>
//               <span className="text-sm font-medium text-blue-700">Built for Indian sellers 🇮🇳</span>
//             </div>

//             <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 mb-6">
//               Insydz vs Viral Launch —
//               <br />
//               <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
//                 Which Tool Fits Indian Sellers Better?
//               </span>
//             </h1>

//             <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
//               Both tools help sellers grow on Amazon. The difference is who they're built for.
//               <br />
//               Compare pricing, marketplaces, alerts, and usability — then decide confidently.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
//               <Button
//                 onClick={handleGetStarted}
//                 size="lg"
//                 className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all group"
//               >
//                 👉 Start Free with Insydz
//                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//               </Button>
//               <Button
//                 onClick={() => document.getElementById('comparison-table')?.scrollIntoView({ behavior: 'smooth' })}
//                 size="lg"
//                 variant="outline"
//                 className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 font-semibold px-8 py-6 text-lg rounded-full"
//               >
//                 Compare Features Below →
//               </Button>
//             </div>

//             {/* Trust Signals */}
//             <div className="flex flex-wrap items-center justify-center gap-6">
//               <div className="flex items-center gap-2 text-sm text-gray-600">
//                 <CheckCircle2 className="w-5 h-5 text-green-600" />
//                 <span>Built for Indian sellers 🇮🇳</span>
//               </div>
//               <div className="flex items-center gap-2 text-sm text-gray-600">
//                 <CheckCircle2 className="w-5 h-5 text-green-600" />
//                 <span>₹ pricing, not dollars</span>
//               </div>
//               <div className="flex items-center gap-2 text-sm text-gray-600">
//                 <CheckCircle2 className="w-5 h-5 text-green-600" />
//                 <span>Free plan available</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* When Sellers Compare These Tools */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-center text-gray-900">
//             Why Sellers Compare
//             <br />
//             <span className="text-blue-600">Insydz and Viral Launch</span>
//           </h2>

//           <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
//             Sellers usually compare these tools when:
//           </p>

//           <div className="grid md:grid-cols-2 gap-6 mb-12">
//             {comparisonReasons.map((reason, index) => (
//               <div 
//                 key={index}
//                 className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
//                     <AlertCircle className="w-6 h-6 text-white" />
//                   </div>
//                   <p className="text-gray-700 font-medium leading-relaxed pt-2">{reason}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-3xl p-8 text-center shadow-lg">
//             <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
//             <p className="text-2xl font-bold text-gray-900">
//               Choosing the wrong tool at this stage can slow growth and hurt margins.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Why Indian Sellers Explore Insydz - MICRO PROOF */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-4xl lg:text-5xl font-black mb-12 text-center text-gray-900">
//             Why Indian Sellers
//             <br />
//             <span className="text-blue-600">Explore Insydz</span>
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             {whyIndianSellersExplore.map((reason, index) => (
//               <div 
//                 key={index}
//                 className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all group"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
//                     <Check className="w-6 h-6 text-white" />
//                   </div>
//                   <p className="text-gray-700 font-medium leading-relaxed pt-1.5">{reason}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* High-Level Positioning */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-4xl lg:text-5xl font-black mb-12 text-center text-gray-900">
//             How Insydz and Viral Launch
//             <br />
//             <span className="text-blue-600">Are Different at the Core</span>
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Viral Launch */}
//             <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-300 rounded-3xl p-8 hover:shadow-xl transition-all">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-16 h-16 bg-gray-600 rounded-2xl flex items-center justify-center shadow-lg">
//                   <Globe className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Viral Launch</h3>
//               </div>
//               <p className="text-gray-700 leading-relaxed text-lg">
//                 Built primarily for <span className="font-bold">US & global Amazon sellers.</span>
//                 <br /><br />
//                 Advanced launch tools, but assumes higher budgets and Amazon-only operations.
//               </p>
//             </div>

//             {/* Insydz */}
//             <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-400 rounded-3xl p-8 hover:shadow-xl transition-all relative">
//               <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl px-4 py-2 shadow-xl">
//                 <p className="text-white font-bold text-sm">India-First 🇮🇳</p>
//               </div>
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
//                   <Target className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Insydz</h3>
//               </div>
//               <p className="text-gray-700 leading-relaxed text-lg">
//                 Built specifically for <span className="font-bold">Indian sellers.</span>
//                 <br /><br />
//                 Focuses on affordability, multi-marketplace support, and clear actions.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Feature Comparison Table */}
//       <section id="comparison-table" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-center text-gray-900">
//             Insydz vs Viral Launch —
//             <br />
//             <span className="text-blue-600">Feature Comparison</span>
//           </h2>

//           <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-2xl">
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gradient-to-r from-blue-500 to-cyan-500">
//                     <th className="px-6 py-4 text-left text-white font-bold text-lg">Area</th>
//                     <th className="px-6 py-4 text-left text-white font-bold text-lg">Insydz</th>
//                     <th className="px-6 py-4 text-left text-white font-bold text-lg">Viral Launch</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {comparisonFeatures.map((feature, index) => (
//                     <tr 
//                       key={index}
//                       className={`border-b border-gray-200 hover:bg-blue-50 transition-colors ${
//                         index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
//                       }`}
//                     >
//                       <td className="px-6 py-5 font-bold text-gray-900">{feature.area}</td>
//                       <td className="px-6 py-5">
//                         <div className="flex items-center gap-3">
//                           {feature.insydzIcon}
//                           <span className="text-gray-700 font-medium">{feature.insydz}</span>
//                         </div>
//                       </td>
//                       <td className="px-6 py-5">
//                         <div className="flex items-center gap-3">
//                           {feature.competitorIcon}
//                           <span className="text-gray-600">{feature.competitor}</span>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <p className="text-center text-gray-600 mt-6 text-lg">
//             This comparison focuses on what matters most to Indian sellers.
//           </p>
//         </div>
//       </section>

//       {/* The Real Cost Difference - COST REALITY SECTION */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-4xl lg:text-5xl font-black mb-12 text-center text-gray-900">
//             The Real Cost Difference
//             <br />
//             <span className="text-blue-600">for Indian Sellers</span>
//           </h2>

//           <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-3xl p-8 mb-8 shadow-lg">
//             <p className="text-xl text-gray-700 leading-relaxed mb-8">
//               Viral Launch pricing may seem competitive globally, but for Indian sellers the real cost adds up due to dollar pricing, GST, and subscription commitments.
//             </p>

//             <div className="grid md:grid-cols-2 gap-6 mb-8">
//               {/* Viral Launch Cost */}
//               <div className="bg-white border-2 border-red-300 rounded-2xl p-6">
//                 <div className="flex items-center gap-3 mb-4">
//                   <DollarSign className="w-8 h-8 text-red-600" />
//                   <h3 className="text-xl font-bold text-gray-900">Viral Launch</h3>
//                 </div>
//                 <p className="text-3xl font-black text-red-600 mb-2">$69–$199/month</p>
//                 <p className="text-2xl font-bold text-gray-700">≈ ₹5,700–₹16,500+/month</p>
//               </div>

//               {/* Insydz Cost */}
//               <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 rounded-2xl p-6">
//                 <div className="flex items-center gap-3 mb-4">
//                   <IndianRupee className="w-8 h-8 text-green-600" />
//                   <h3 className="text-xl font-bold text-gray-900">Insydz</h3>
//                 </div>
//                 <p className="text-3xl font-black text-green-600 mb-2">₹999–₹1,999/month</p>
//                 <p className="text-lg font-semibold text-gray-700">with a free plan to start</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gradient-to-r from-blue-100 to-cyan-100 border-2 border-blue-400 rounded-3xl p-8 text-center shadow-lg">
//             <p className="text-2xl font-bold text-gray-900">
//               For most Indian sellers, <span className="text-blue-600">affordability directly impacts consistency</span> and long-term usage.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* India-First Reality Check */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-4xl lg:text-5xl font-black mb-12 text-center text-gray-900">
//             Why Global Tools
//             <br />
//             <span className="text-blue-600">Don't Always Fit Indian Sellers</span>
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6 mb-8">
//             {globalToolLimitations.map((limitation, index) => (
//               <div 
//                 key={index}
//                 className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all group"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
//                     <AlertCircle className="w-6 h-6 text-white" />
//                   </div>
//                   <p className="text-gray-700 font-medium leading-relaxed pt-1.5">{limitation}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-gradient-to-r from-blue-100 to-cyan-100 border-2 border-blue-400 rounded-3xl p-8 text-center shadow-lg">
//             <p className="text-2xl font-bold text-gray-900">
//               That's why many Indian sellers look for <span className="text-blue-600">alternatives built closer to home.</span>
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* When Insydz Is a Better Fit */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-4xl lg:text-5xl font-black mb-12 text-center text-gray-900">
//             Choose Insydz
//             <br />
//             <span className="text-blue-600">If You…</span>
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6 mb-8">
//             {insydzFitReasons.map((reason, index) => (
//               <div 
//                 key={index}
//                 className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-2xl p-6 hover:border-blue-500 hover:shadow-lg transition-all group"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
//                     <Check className="w-7 h-7 text-white" />
//                   </div>
//                   <p className="text-gray-900 font-semibold leading-relaxed pt-2.5 text-lg">{reason}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all group"
//             >
//               👉 Try Insydz Free
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* When Viral Launch May Make More Sense */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-4xl lg:text-5xl font-black mb-12 text-center text-gray-900">
//             When Viral Launch
//             <br />
//             <span className="text-gray-600">Might Be a Better Choice</span>
//           </h2>

//           <div className="grid md:grid-cols-3 gap-6 mb-8">
//             {competitorFitReasons.map((reason, index) => (
//               <div 
//                 key={index}
//                 className="bg-white border-2 border-gray-300 rounded-2xl p-6 hover:border-gray-400 hover:shadow-lg transition-all"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
//                     <Check className="w-6 h-6 text-white" />
//                   </div>
//                   <p className="text-gray-700 font-medium leading-relaxed pt-1.5">{reason}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-gray-400 rounded-3xl p-8 text-center shadow-lg">
//             <Shield className="w-12 h-12 text-gray-700 mx-auto mb-4" />
//             <p className="text-2xl font-bold text-gray-900">
//               The best tool depends on <span className="text-gray-700">your selling model</span> — not hype.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Already Using Viral Launch - SWITCHING & COEXISTENCE */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-4xl lg:text-5xl font-black mb-12 text-center text-gray-900">
//             Already Using Viral Launch?
//             <br />
//             <span className="text-blue-600">You Don't Have to Switch Overnight.</span>
//           </h2>

//           <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-3xl p-8 mb-8 shadow-lg">
//             <p className="text-xl text-gray-700 leading-relaxed mb-6">
//               Many sellers start with Insydz alongside Viral Launch to:
//             </p>

//             <div className="space-y-4">
//               {[
//                 'Compare insights using real data',
//                 'Reduce dependence on expensive plans',
//                 'Gradually move to a simpler, more affordable workflow'
//               ].map((benefit, index) => (
//                 <div key={index} className="flex items-start gap-4">
//                   <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
//                     <Check className="w-5 h-5 text-white" />
//                   </div>
//                   <p className="text-gray-900 font-semibold text-lg pt-1">{benefit}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-400 rounded-3xl p-8 text-center shadow-lg">
//             <p className="text-2xl font-bold text-gray-900">
//               Insydz is designed to <span className="text-green-600">coexist</span> — not force a risky switch.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Real-World Decision Framework - DECISION SUMMARY */}
//       <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-center text-gray-900">
//             Which Tool
//             <br />
//             <span className="text-blue-600">Should You Choose?</span>
//           </h2>

//           <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
//             Quick Decision Guide
//           </p>

//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             {decisionCards.map((card, index) => (
//               <div 
//                 key={index}
//                 className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-blue-400 hover:shadow-xl transition-all group"
//               >
//                 <div className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-lg`}>
//                   {card.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
//                 <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-4 mb-4">
//                   <p className="text-sm font-semibold text-blue-700 mb-1">Recommended:</p>
//                   <p className="text-lg font-black text-blue-900">{card.recommendation}</p>
//                 </div>
//                 <p className="text-gray-600 leading-relaxed">{card.reason}</p>
//               </div>
//             ))}
//           </div>

//           <div className="bg-white border-2 border-blue-300 rounded-3xl p-8 shadow-lg">
//             <div className="space-y-4 mb-6">
//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
//                   <Check className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <p className="font-bold text-gray-900 text-lg mb-1">Choose Insydz if:</p>
//                   <p className="text-gray-700 leading-relaxed">
//                     You're an Indian seller who values affordability, multi-marketplace coverage, and clear actions.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
//                   <Check className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <p className="font-bold text-gray-900 text-lg mb-1">Choose Viral Launch if:</p>
//                   <p className="text-gray-700 leading-relaxed">
//                     You sell primarily in US/EU markets and need advanced Amazon launch tooling.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gradient-to-r from-blue-100 to-cyan-100 border-2 border-blue-300 rounded-2xl p-6 text-center">
//               <p className="text-xl font-bold text-gray-900">
//                 The right tool depends on <span className="text-blue-600">where and how you sell.</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Free-First CTA */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <Zap className="w-16 h-16 text-blue-500 mx-auto mb-6" />
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//             Try Before
//             <br />
//             <span className="text-blue-600">You Decide</span>
//           </h2>
//           <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
//             You don't need to switch blindly. Start free with Insydz and compare using real data from your own products.
//           </p>
//           <Button
//             onClick={handleGetStarted}
//             size="lg"
//             className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all group"
//           >
//             👉 Start Free with Insydz
//             <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//           </Button>
//           <p className="text-sm text-gray-500 mt-6">
//             Start free. Compare with your own data before deciding.
//           </p>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-4xl lg:text-5xl font-black mb-12 text-center text-gray-900">
//             Insydz vs Viral Launch – <span className="text-blue-600">FAQs</span>
//           </h2>

//           <div className="space-y-4">
//             {faqs.map((faq) => (
//               <div key={faq.id} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-all">
//                 <button
//                   onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
//                   className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
//                 >
//                   <span className="font-bold text-gray-900 pr-4 text-lg">{faq.question}</span>
//                   {expandedFaq === faq.id ? (
//                     <ChevronDown className="w-5 h-5 text-blue-500 flex-shrink-0" />
//                   ) : (
//                     <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
//                   )}
//                 </button>
//                 {expandedFaq === faq.id && (
//                   <div className="px-6 pb-5 bg-gray-50">
//                     <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA Section */}
//       <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
//             Compare Clearly.
//             <br />
//             <span className="text-blue-100">Choose What Fits Your Business.</span>
//           </h2>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-white hover:bg-gray-100 text-blue-700 font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
//             >
//               👉 Start Free with Insydz
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//             <Button
//               onClick={() => setLocation("/pricing")}
//               size="lg"
//               className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-12 py-6 text-lg rounded-full border-2 border-blue-400"
//             >
//               View Pricing →
//             </Button>
//           </div>
//           <p className="text-white/80 text-sm">
//             ✓ No credit card required  ✓ Free plan forever  ✓ Compare with real data
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
//                 <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                   Insydz
//                 </span>
//               </div>
//               <p className="text-gray-400 text-sm">
//                 AI-powered intelligence for Indian sellers
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


// import { useState, useEffect, useRef } from 'react';
// import { useLocation } from 'wouter';
// import { 
//   ChevronDown, ChevronRight, Check, ArrowRight,
//   CheckCircle2, DollarSign, Globe, Bell, Zap, 
//   TrendingUp, Users, Target, AlertCircle, IndianRupee,
//   Mail, Smartphone, BarChart3, Package, Shield,
//   Menu, Sun, Moon, ShoppingBag, Store, Briefcase,
//   Code, Trophy, ArrowLeft, BookOpen, Video, FileText,
//   Search, MessageCircle, TrendingDown, X,
//   Flame,
//   Presentation
// } from 'lucide-react';
// import { Button } from "@/components/ui/button";

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

// export default function InsydzVsViralLaunchPage() {
//   const [, setLocation] = useLocation();
//   const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
//   const [scrolled, setScrolled] = useState(false);
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

//   const handleGetStarted = () => setLocation("/signup");
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
//     setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
//   };

//   const comparisonFeatures = [
//     { area: 'Marketplace Coverage', insydz: 'Amazon + Flipkart', competitor: 'Amazon only', insydzIcon: <Globe className="w-5 h-5 text-green-600" />, competitorIcon: <Package className="w-5 h-5 text-gray-500" /> },
//     { area: 'Pricing', insydz: '₹1,999–₹2,999/month', competitor: '$69–$199/month', insydzIcon: <IndianRupee className="w-5 h-5 text-green-600" />, competitorIcon: <DollarSign className="w-5 h-5 text-gray-500" /> },
//     { area: 'Free Plan', insydz: 'Free forever', competitor: '14-day trial', insydzIcon: <CheckCircle2 className="w-5 h-5 text-green-600" />, competitorIcon: <AlertCircle className="w-5 h-5 text-gray-500" /> },
//     { area: 'Alerts', insydz: 'WhatsApp + Dashboard', competitor: 'Email', insydzIcon: <Smartphone className="w-5 h-5 text-green-600" />, competitorIcon: <Mail className="w-5 h-5 text-gray-500" /> },
//     { area: 'Ease of Use', insydz: 'Action-driven', competitor: 'Tool-heavy', insydzIcon: <Zap className="w-5 h-5 text-green-600" />, competitorIcon: <BarChart3 className="w-5 h-5 text-gray-500" /> },
//     { area: 'Language', insydz: 'Hindi + English', competitor: 'English only', insydzIcon: <Users className="w-5 h-5 text-green-600" />, competitorIcon: <Globe className="w-5 h-5 text-gray-500" /> }
//   ];

//   const faqs = [
//     { id: 'faq-1', question: 'Is Insydz a replacement for Viral Launch?', answer: 'Insydz is built specifically for Indian sellers and multi-marketplace needs. If you primarily sell in India across Amazon and Flipkart, Insydz offers better value and relevance. However, if you focus on US/EU markets with advanced Amazon launch strategies, Viral Launch may still be appropriate.' },
//     { id: 'faq-2', question: 'Why is Insydz cheaper than Viral Launch?', answer: 'Insydz is priced in rupees and built for the Indian market, which allows us to offer affordable pricing. We focus on clear, actionable insights rather than overwhelming toolsets, keeping costs lower while delivering what Indian sellers actually need.' },
//     { id: 'faq-3', question: 'Can I use Insydz and Viral Launch together?', answer: 'Absolutely. Many sellers run Insydz alongside Viral Launch to compare insights and value before making a decision. Insydz is designed to coexist — not force an immediate switch.' }
//   ];

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-950">
//       {/* Navigation */}
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg" : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
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
//                 <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Insydz</span>
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
//                                           <div className="relative">
//                                             <button
//                                               onMouseEnter={() => setActiveDropdown('Compare')}
//                                               className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1"
//                                             >
//                                               Compare
//                                               <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Compare' ? 'rotate-180' : ''}`} />
//                                             </button>
//                                             {activeDropdown === 'Compare' && (
//                                               <div 
//                                                 onMouseLeave={() => setActiveDropdown(null)}
//                                                 className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
//                                               >
//                                                 {navigationMenu.Compare.map((item, i) => (
//                                                   <button
//                                                     key={i}
//                                                     onClick={() => handleMenuItemClick(item)}
//                                                     className="w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-3 group"
//                                                   >
//                                                     <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
//                                                       {item.icon}
//                                                     </span>
//                                                     <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex-1">
//                                                       {item.name}
//                                                     </span>
//                                                   </button>
//                                                 ))}
//                                               </div>
//                                             )}
//                                           </div>

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
//               {/* Mobile Use Cases */}
//                                           <div>
//                                             <button 
//                                               onClick={() => toggleMobileMenu('Use Cases')}
//                                               className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                                             >
//                                               Use Cases
//                                               <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Use Cases' ? 'rotate-180' : ''}`} />
//                                             </button>
//                                             {mobileActiveMenu === 'Use Cases' && (
//                                               <div className="ml-4 mt-2 space-y-1">
//                                                 {navigationMenu["Use Cases"].map((item, i) => (
//                                                   <button 
//                                                     key={i} 
//                                                     onClick={() => handleMenuItemClick(item)}
//                                                     className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
//                                                   >
//                                                     {item.icon}
//                                                     {item.name}
//                                                   </button>
//                                                 ))}
//                                               </div>
//                                             )}
//                                           </div>
                            
//                                           {/* Mobile Features */}
//                                           <div>
//                                             <button 
//                                               onClick={() => toggleMobileMenu('Features')}
//                                               className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                                             >
//                                               Features
//                                               <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Features' ? 'rotate-180' : ''}`} />
//                                             </button>
//                                             {mobileActiveMenu === 'Features' && (
//                                               <div className="ml-4 mt-2 space-y-1">
//                                                 {navigationMenu.Features.map((item, i) => (
//                                                   <button 
//                                                     key={i} 
//                                                     onClick={() => handleMenuItemClick(item)}
//                                                     className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
//                                                   >
//                                                     {item.icon}
//                                                     {item.name}
//                                                     {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
//                                                   </button>
//                                                 ))}
//                                               </div>
//                                             )}
//                                           </div>

//               <button onClick={() => setLocation('/pricing')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
//                 Pricing
//               </button>
//               {/* Mobile Free Tools */}
//                                           <div>
//                                             <button 
//                                               onClick={() => toggleMobileMenu('Free Tools')}
//                                               className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                                             >
//                                               Free Tools
//                                               <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Free Tools' ? 'rotate-180' : ''}`} />
//                                             </button>
//                                             {mobileActiveMenu === 'Free Tools' && (
//                                               <div className="ml-4 mt-2 space-y-1">
//                                                 {navigationMenu["Free Tools"].map((item, i) => (
//                                                   <button 
//                                                     key={i} 
//                                                     onClick={() => handleMenuItemClick(item)}
//                                                     className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
//                                                   >
//                                                     {item.icon}
//                                                     {item.name}
//                                                     {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
//                                                   </button>
//                                                 ))}
//                                               </div>
//                                             )}
//                                           </div>
                            
//                                          {/* Mobile Compare */}
//                                                        <div>
//                                                          <button 
//                                                            onClick={() => toggleMobileMenu('Compare')}
//                                                            className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                                                          >
//                                                            Compare
//                                                            <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Compare' ? 'rotate-180' : ''}`} />
//                                                          </button>
//                                                          {mobileActiveMenu === 'Compare' && (
//                                                            <div className="ml-4 mt-2 space-y-1">
//                                                              {navigationMenu.Compare.map((item, i) => (
//                                                                <button 
//                                                                  key={i} 
//                                                                  onClick={() => handleMenuItemClick(item)}
//                                                                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
//                                                                >
//                                                                  {item.icon}
//                                                                  {item.name}
//                                                                </button>
//                                                              ))}
//                                                            </div>
//                                                          )}
//                                                        </div>
                            
//                                            {/* Mobile Resources */}
//                                           <div>
//                                             <button 
//                                               onClick={() => toggleMobileMenu('Resources')}
//                                               className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                                             >
//                                               Resources
//                                               <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Resources' ? 'rotate-180' : ''}`} />
//                                             </button>
//                                             {mobileActiveMenu === 'Resources' && (
//                                               <div className="ml-4 mt-2 space-y-1">
//                                                 {navigationMenu.Resources.map((item, i) => (
//                                                   <button 
//                                                     key={i} 
//                                                     onClick={() => handleMenuItemClick(item)}
//                                                     className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
//                                                   >
//                                                     {item.icon}
//                                                     {item.name}
//                                                     {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
//                                                   </button>
//                                                 ))}
//                                               </div>
//                                             )}
//                                           </div>



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

//       {/* Hero */}
//       <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
//           <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
//         </div>
//         <div className="relative max-w-6xl mx-auto text-center">
//           <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 rounded-full px-4 py-2 mb-8">
//             <span className="text-sm font-medium text-blue-700">Built for Indian sellers 🇮🇳</span>
//           </div>
//           <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white mb-6">
//             Insydz vs Viral Launch —
//             <br />
//             <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Which Tool Fits Indian Sellers Better?</span>
//           </h1>
//           <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
//             Both tools help sellers grow on Amazon. The difference is who they're built for. Compare pricing, marketplaces, alerts, and usability — then decide confidently.
//           </p>
//           <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold px-8 py-6 rounded-full shadow-2xl group">
//             👉 Start Free with Insydz <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//           </Button>
//         </div>
//       </section>

//       {/* Comparison Table */}
//       <section id="comparison-table" className="py-20 px-4 bg-white dark:bg-gray-950">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-black mb-12 text-center text-gray-900 dark:text-white">Feature Comparison</h2>
//           <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200 dark:border-gray-700">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gradient-to-r from-blue-500 to-cyan-500">
//                   <th className="px-6 py-4 text-left text-white font-bold">Area</th>
//                   <th className="px-6 py-4 text-left text-white font-bold">Insydz</th>
//                   <th className="px-6 py-4 text-left text-white font-bold">Viral Launch</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {comparisonFeatures.map((feature, i) => (
//                   <tr key={i} className={`border-b border-gray-200 dark:border-gray-700 ${i % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : ''}`}>
//                     <td className="px-6 py-5 font-bold text-gray-900 dark:text-white">{feature.area}</td>
//                     <td className="px-6 py-5">
//                       <div className="flex items-center gap-3">
//                         {feature.insydzIcon}
//                         <span className="text-gray-700 dark:text-gray-300">{feature.insydz}</span>
//                       </div>
//                     </td>
//                     <td className="px-6 py-5">
//                       <div className="flex items-center gap-3">
//                         {feature.competitorIcon}
//                         <span className="text-gray-600 dark:text-gray-400">{feature.competitor}</span>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-4xl font-black mb-12 text-center text-gray-900 dark:text-white">FAQs</h2>
//           <div className="space-y-4">
//             {faqs.map((faq) => (
//               <div key={faq.id} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
//                 <button onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)} className="w-full px-6 py-5 flex items-center justify-between text-left">
//                   <span className="font-bold text-gray-900 dark:text-white pr-4">{faq.question}</span>
//                   {expandedFaq === faq.id ? <ChevronDown className="w-5 h-5 text-blue-500" /> : <ChevronRight className="w-5 h-5 text-gray-400" />}
//                 </button>
//                 {expandedFaq === faq.id && (
//                   <div className="px-6 pb-5">
//                     <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-600">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl font-black mb-6 text-white">Compare Clearly. Choose What Fits.</h2>
//           <Button onClick={handleGetStarted} size="lg" className="bg-white text-blue-700 font-bold px-12 py-6 rounded-full shadow-2xl group">
//             👉 Start Free with Insydz <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//           </Button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 py-12 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <p className="text-gray-500 text-sm">© 2025 Insydz. Built for Indian sellers 🇮🇳</p>
//         </div>
//       </footer>
//     </div>
//   );
// }



import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { 
  ChevronDown, ChevronRight, Check, ArrowRight,
  CheckCircle2, DollarSign, Globe, Bell, Zap, 
  TrendingUp, Users, Target, AlertCircle, IndianRupee,
  Mail, Smartphone, BarChart3, Package, Shield,
  Menu, Sun, Moon, ShoppingBag, Store, Briefcase,
  Code, Trophy, ArrowLeft, BookOpen, Video, FileText,
  Search, MessageCircle, TrendingDown, X,
  Flame,
  Presentation
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Helmet } from 'react-helmet-async';


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
    { name: "Our Vision", icon: <Presentation className="w-4 h-4" />, route: "/about/our-vision" },
    { name: "Careers", icon: <Globe className="w-4 h-4" />, route: "/about/careers" },
    { name: "Contact Us", icon: <Users className="w-4 h-4" />, route: "/about/contact-us" },
  ],
};

export default function InsydzVsViralLaunchPage() {
  const [, setLocation] = useLocation();
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
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

  const handleGetStarted = () => setLocation("/signup");
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
    setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };

  // Updated from DOCX
  const comparisonFeatures = [
    { area: 'Marketplace Coverage', insydz: 'Amazon India + Flipkart + Meesho', competitor: 'Amazon.com only — no Amazon.in, no Flipkart, no Meesho', insydzIcon: <Globe className="w-5 h-5 text-green-600" />, competitorIcon: <Package className="w-5 h-5 text-gray-500" /> },
    { area: 'Pricing', insydz: '₹0 / ₹1,999 / ₹2,999/month in INR', competitor: '$69–$199/month (~₹5,800–₹16,700). Billed in USD.', insydzIcon: <IndianRupee className="w-5 h-5 text-green-600" />, competitorIcon: <DollarSign className="w-5 h-5 text-gray-500" /> },
    { area: 'Free Plan', insydz: 'Free forever — 25 products, no credit card', competitor: 'No free plan. 14-day trial. Credit card required upfront.', insydzIcon: <CheckCircle2 className="w-5 h-5 text-green-600" />, competitorIcon: <AlertCircle className="w-5 h-5 text-gray-500" /> },
    { area: 'Alert Channel', insydz: 'WhatsApp + Dashboard', competitor: 'Email + Dashboard only', insydzIcon: <Smartphone className="w-5 h-5 text-green-600" />, competitorIcon: <Mail className="w-5 h-5 text-gray-500" /> },
    { area: 'Language Support', insydz: 'Hindi + Hinglish + English review analysis', competitor: 'English only', insydzIcon: <Users className="w-5 h-5 text-green-600" />, competitorIcon: <Globe className="w-5 h-5 text-gray-500" /> },
    { area: 'Keyword Research', insydz: 'Amazon.in + Flipkart data in Indian volumes', competitor: 'Amazon.com keyword data — not calibrated for Indian search', insydzIcon: <Search className="w-5 h-5 text-green-600" />, competitorIcon: <BarChart3 className="w-5 h-5 text-gray-500" /> },
    { area: 'Competitor Price Tracking', insydz: 'Real-time, WhatsApp alert, AI reprice in INR', competitor: 'Competitor tracking on Amazon.com only', insydzIcon: <TrendingDown className="w-5 h-5 text-green-600" />, competitorIcon: <AlertCircle className="w-5 h-5 text-gray-500" /> },
    { area: 'Review Analysis', insydz: 'AI clustering in Hindi & English', competitor: 'English only', insydzIcon: <MessageCircle className="w-5 h-5 text-green-600" />, competitorIcon: <Globe className="w-5 h-5 text-gray-500" /> },
    { area: 'Inventory Management', insydz: 'AI stockout prediction with Indian festive demand multipliers', competitor: 'Not a core Viral Launch feature', insydzIcon: <Package className="w-5 h-5 text-green-600" />, competitorIcon: <AlertCircle className="w-5 h-5 text-gray-500" /> },
    { area: 'Festive Demand Intelligence', insydz: 'Diwali, Big Billion Days, GIF, Republic Day forecasting', competitor: 'Not available — built for US market', insydzIcon: <Flame className="w-5 h-5 text-green-600" />, competitorIcon: <AlertCircle className="w-5 h-5 text-gray-500" /> },
    { area: 'Data Accuracy for India', insydz: 'Built from Amazon.in + Flipkart data directly', competitor: 'US-calibrated data — directional but not India-accurate', insydzIcon: <CheckCircle2 className="w-5 h-5 text-green-600" />, competitorIcon: <AlertCircle className="w-5 h-5 text-orange-500" /> },
    { area: 'Ease of Use', insydz: 'Action-driven — every alert includes next step', competitor: 'Tool-heavy — requires setup and interpretation', insydzIcon: <Zap className="w-5 h-5 text-green-600" />, competitorIcon: <BarChart3 className="w-5 h-5 text-gray-500" /> },
    { area: 'Customer Support', insydz: 'Hindi + English support', competitor: 'English only', insydzIcon: <CheckCircle2 className="w-5 h-5 text-green-600" />, competitorIcon: <Globe className="w-5 h-5 text-gray-500" /> },
    { area: 'Product Launch Tools', insydz: 'Product research for Indian markets — no launch sequencing', competitor: 'Launch sequences, PPC automation, Kinetic Ads — for Amazon.com', insydzIcon: <AlertCircle className="w-5 h-5 text-gray-400" />, competitorIcon: <CheckCircle2 className="w-5 h-5 text-green-600" /> },
    { area: 'Amazon PPC Management', insydz: 'Not available (focus: organic intelligence)', competitor: 'Kinetic PPC — automated Amazon Ads for Amazon.com', insydzIcon: <AlertCircle className="w-5 h-5 text-gray-400" />, competitorIcon: <CheckCircle2 className="w-5 h-5 text-green-600" /> },
  ];

  const faqs = [
    {
      id: 'faq-1',
      question: 'Is Insydz a replacement for Viral Launch?',
      answer: "For Indian sellers on Amazon India, Flipkart, or Meesho — yes. Insydz covers Flipkart data, WhatsApp alerts, Hindi review analysis, INR pricing, and Indian festive demand intelligence that Viral Launch cannot provide. If you sell on Amazon.com and rely on Viral Launch's Kinetic PPC automation and US launch sequences, those capabilities don't have a direct equivalent in Insydz — you'd want to keep Viral Launch for that specific use case."
    },
    {
      id: 'faq-2',
      question: 'Why is Insydz cheaper than Viral Launch?',
      answer: "Insydz is priced in INR starting at ₹1,999/month vs Viral Launch's $69/month (~₹5,800). The difference reflects both currency and scope: Viral Launch is a broad platform built for Amazon.com sellers globally with 15+ tools. Insydz focuses on five high-value intelligence use cases built for Indian marketplace sellers. Lower cost, faster onboarding, and features calibrated for India — not adapted from US data."
    },
    {
      id: 'faq-3',
      question: 'Can I use Insydz and Viral Launch together?',
      answer: "Yes — sellers with cross-border operations do exactly this. Viral Launch for Amazon.com PPC automation and US market product launches. Insydz for Indian marketplace intelligence: Flipkart tracking, Hindi review analysis, WhatsApp alerts, and festive demand forecasting. If India and USA are both active channels, this combination covers the full picture without compromise."
    },
    {
      id: 'faq-4',
      question: 'Does Viral Launch work for Amazon India sellers?',
      answer: "Viral Launch supports Amazon India to a limited extent — product research and keyword tracking on Amazon.in are possible. However, the data is calibrated for Amazon.com dynamics. Keyword volumes, demand projections, and revenue estimates are not India-specific. There is no Flipkart support, no WhatsApp alerts, no Hindi review analysis, and no Indian festive demand modelling. For precision India-market decisions, Amazon.in-native data from Insydz is significantly more accurate."
    },
    {
      id: 'faq-5',
      question: 'What is the best Viral Launch alternative for India?',
      answer: "Insydz is the most purpose-built Viral Launch alternative for Indian sellers — covering Amazon India, Flipkart, and Meesho with WhatsApp alerts, Hindi review analysis, INR pricing, and Indian festive demand intelligence. A permanent free plan is available — no credit card required. SellerApp covers some Amazon India use cases but has no Flipkart support. Helium 10 is USD-priced and Amazon.com-focused. For India-first sellers, Insydz is the only purpose-built option of the three."
    },
    {
      id: 'faq-6',
      question: 'How much does Viral Launch cost in India in INR?',
      answer: "Viral Launch pricing in India converts to approximately: Essentials at $69/month (~₹5,800), Pro at $99/month (~₹8,300), and Pro Plus at $199/month (~₹16,700) at current USD/INR rates. Since billing is in USD, your actual INR cost changes every month with currency movements. Over 12 months on Viral Launch Pro, you'd pay ~₹99,600 — compared to Insydz Premium at ₹35,988/year for a tool that covers Amazon India, Flipkart, and Meesho."
    },
    {
      id: 'faq-7',
      question: 'Does Insydz work for Flipkart sellers?',
      answer: "Yes. Insydz provides competitor price tracking, keyword rank monitoring, review sentiment analysis, and inventory management for Flipkart sellers. Viral Launch has no Flipkart support. If Flipkart is part of your business, Insydz is the only tool in this comparison that covers it."
    },
    {
      id: 'faq-8',
      question: 'Is there a free plan for Insydz?',
      answer: "Yes. Insydz has a permanent free plan — not a trial. Covers up to 25 products with competitor price monitoring, keyword rank tracking, review analysis, and inventory alerts. No credit card required, no expiry. Viral Launch has no free plan — only a 14-day trial that requires a credit card upfront."
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Helmet>
        <link rel="canonical" href="https://insydz.com/compare/insydzvsvirallaunch" />
        <title>Insydz vs Viral Launch — Features & India Pricing</title>
        <meta name="description" content="Insydz vs Viral Launch. Compare pricing, features, and India market support. See which tool gives Amazon & Flipkart sellers a stronger advantage in 2026." />
      </Helmet>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg" : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              
              <div className="flex items-center space-x-1 group cursor-pointer" onClick={() => setLocation('/')}>
                <div className="relative">
                  <img src="/logo.png" alt="Insydz Logo" className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Insydz</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-3" ref={dropdownRef}>
             

              {/* Solutions Dropdown - HIGHLIGHTED */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Solutions')} className="px-3 py-2 text-sm text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 font-semibold rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all flex items-center gap-1">
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
                <button onMouseEnter={() => setActiveDropdown('Use Cases')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1">
                  Use Cases <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Use Cases' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Use Cases' && (
                  <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navigationMenu["Use Cases"].map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-3 group">
                        <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">{item.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Features Dropdown */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Features')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1">
                  Features <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Features' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Features' && (
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

              <button onClick={() => setLocation('/pricing')} onMouseEnter={() => setActiveDropdown(null)} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all">Pricing</button>

              {/* Free Tools Dropdown */}
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

              {/* Compare Dropdown */}
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

              {/* Resources Dropdown */}
              <div className="relative">
                <button onMouseEnter={() => setActiveDropdown('Resources')} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1">
                  Resources <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Resources' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Resources' && (
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

              {/* About Dropdown */}
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
                        {item.badge && <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Button onClick={() => setLocation('/login')} onMouseEnter={() => setActiveDropdown(null)} className="ml-2 text-sm bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">Login</Button>
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
              <button onClick={() => { setLocation('/'); setIsMenuOpen(false); }} className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>

              {/* Mobile Solutions */}
              <div>
                <button onClick={() => toggleMobileMenu('Solutions')} className="flex items-center justify-between w-full px-4 py-2 text-orange-600 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg font-semibold">
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
                <button onClick={() => toggleMobileMenu('Use Cases')} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                  Use Cases <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Use Cases' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'Use Cases' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu["Use Cases"].map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
                        {item.icon}{item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Features */}
              <div>
                <button onClick={() => toggleMobileMenu('Features')} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                  Features <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Features' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'Features' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu.Features.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
                        {item.icon}{item.name}
                        {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => setLocation('/pricing')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">Pricing</button>

              {/* Mobile Free Tools */}
              <div>
                <button onClick={() => toggleMobileMenu('Free Tools')} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                  Free Tools <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Free Tools' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'Free Tools' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu["Free Tools"].map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
                        {item.icon}{item.name}
                        {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Compare */}
              <div>
                <button onClick={() => toggleMobileMenu('Compare')} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                  Compare <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Compare' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'Compare' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu.Compare.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
                        {item.icon}{item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Resources */}
              <div>
                <button onClick={() => toggleMobileMenu('Resources')} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                  Resources <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Resources' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'Resources' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu.Resources.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
                        {item.icon}{item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile About */}
              <div>
                <button onClick={() => toggleMobileMenu('About')} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                  About <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'About' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'About' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu.About.map((item, i) => (
                      <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
                        {item.icon}{item.name}
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

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 rounded-full px-4 py-2 mb-8">
            <span className="text-sm font-medium text-blue-700">🇮🇳 Built for Indian Sellers</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white mb-6">
            Insydz vs Viral Launch —
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Which Tool Fits Indian Sellers Better?</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
            Both tools help sellers grow on Amazon. The difference is who they're built for. Compare pricing, marketplaces, alerts, and usability — then decide confidently.
          </p>

          {/* Verdict Strip */}
          <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-6 mb-10 max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left text-gray-400 font-medium pb-3 pr-6">Metric</th>
                  <th className="text-center text-blue-400 font-bold pb-3 pr-6">Insydz</th>
                  <th className="text-center text-gray-400 font-medium pb-3">Viral Launch</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {[
                  { label: 'Starting Price', insydz: '₹0/month forever', competitor: '~₹5,800+/month ($69)' },
                  { label: 'Flipkart Support', insydz: '✅ Yes', competitor: '✗ No' },
                  { label: 'WhatsApp Alerts', insydz: '✅ Yes', competitor: '✗ No' },
                  { label: 'Hindi Review Analysis', insydz: '✅ Yes', competitor: '✗ No' },
                  { label: 'Free Plan (Permanent)', insydz: '✅ Yes, no credit card', competitor: '✗ 14-day trial only' },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="text-gray-400 py-2.5 pr-6 text-left">{row.label}</td>
                    <td className="text-green-400 font-semibold py-2.5 pr-6 text-center">{row.insydz}</td>
                    <td className="text-gray-500 py-2.5 text-center">{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold px-8 py-6 rounded-full shadow-2xl group">
              🚀 Start Free with Insydz <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => document.getElementById('comparison-table')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="border-2 border-blue-400 text-blue-600 dark:text-blue-400 font-bold px-8 py-6 rounded-full"
            >
              See Full Comparison ↓
            </Button>
          </div>
        </div>
      </section>

      {/* Why Indian Sellers Struggle with Viral Launch */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-4 text-center text-gray-900 dark:text-white">
            Why Indian Sellers Struggle with Viral Launch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-14 max-w-3xl mx-auto">
            Viral Launch was built to help Amazon sellers launch and rank products. It does that well — for Amazon.com. Here's where Indian sellers run into walls, fast.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                number: '01',
                title: 'Entry price is ₹5,800 — with no free plan',
                desc: "Viral Launch's cheapest plan is $69/month (~₹5,800 at current rates). There's no free tier at all — just a 14-day trial. For a seller still validating their niche or managing tight working capital, paying ₹5,800 before seeing a single result is a steep ask.",
                color: 'from-red-500 to-orange-500',
              },
              {
                number: '02',
                title: 'Built for Amazon.com — not Amazon.in or Flipkart',
                desc: "Viral Launch is designed for Amazon.com. Its market intelligence, keyword data, and competitor tracking are calibrated for US market dynamics — not Indian search behaviour, INR margins, or the Flipkart sellers competing alongside you for the same Indian buyer.",
                color: 'from-orange-500 to-yellow-500',
              },
              {
                number: '03',
                title: 'Tool-heavy, dashboard-first — not mobile-ready',
                desc: "Viral Launch is a desktop-first platform that delivers alerts by email. Indian sellers operate from phones, manage WhatsApp with suppliers, and make decisions on the move. A tool that requires logging into a dashboard to see what's happening isn't built for how India works.",
                color: 'from-yellow-500 to-green-500',
              },
              {
                number: '04',
                title: 'No festive season intelligence for Indian calendars',
                desc: "Viral Launch has no concept of Diwali demand spikes, Big Billion Days inventory pressure, or Great Indian Festival keyword surges. For Indian sellers, these 4–6 week windows can make or break the entire year. A tool blind to that seasonality is flying you into peak season without a map.",
                color: 'from-blue-500 to-cyan-500',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white font-black text-lg mb-5`}>
                  {item.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 max-w-3xl mx-auto text-center">
            <p className="text-blue-800 dark:text-blue-300 text-sm leading-relaxed">
              <strong>A fair note:</strong> Viral Launch has strong product launch and rank-tracking tools for Amazon.com sellers. If Amazon USA is your primary market, it has real strengths. This comparison is specifically for Indian sellers operating on Amazon India, Flipkart, or Meesho — where the platform gap is stark.
            </p>
          </div>
        </div>
      </section>

      {/* Full Comparison Table */}
      <section id="comparison-table" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-4 text-center text-gray-900 dark:text-white">
            Insydz vs Viral Launch — Every Dimension That Matters for Indian Sellers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            A complete comparison including areas where Viral Launch has a real edge — no cherry-picking.
          </p>
          <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200 dark:border-gray-700">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-cyan-500">
                  <th className="px-6 py-4 text-left text-white font-bold">Feature Area</th>
                  <th className="px-6 py-4 text-left text-white font-bold">🇮🇳 Insydz</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Viral Launch</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <tr key={i} className={`border-b border-gray-200 dark:border-gray-700 ${i % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : ''}`}>
                    <td className="px-6 py-5 font-bold text-gray-900 dark:text-white">{feature.area}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        {feature.insydzIcon}
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature.insydz}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        {feature.competitorIcon}
                        <span className="text-gray-600 dark:text-gray-400 text-sm">{feature.competitor}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-4 text-center text-gray-900 dark:text-white">
            Insydz vs Viral Launch Pricing — Viral Launch Costs ₹5,800 Before You've Sold a Single Unit
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-14 max-w-3xl mx-auto">
            Viral Launch pricing in India translates to $69–$199/month once the rupee conversion happens. Every month, that number shifts with the exchange rate.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Insydz Pricing */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-8 border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🇮🇳</span>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">Insydz Pricing</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { plan: 'Free Plan', price: '₹0/month always', desc: '25 products, no credit card, no expiry date' },
                  { plan: 'Basic', price: '₹1,999/month', desc: 'Competitor price tracking, keyword monitoring, review analysis' },
                  { plan: 'Premium', price: '₹2,999/month', desc: 'All features, all three marketplaces, priority support' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-900 dark:text-white">{item.plan}: </span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{item.price}</span>
                      <span className="text-gray-600 dark:text-gray-400"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Billed in INR. No USD conversion surprises month to month. Upgrade only when you're seeing real value.</span>
                </li>
              </ul>
            </div>

            {/* Viral Launch Pricing */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🌐</span>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">Viral Launch Pricing (India Reality)</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { plan: 'Essentials', price: '$69/month (~₹5,800)', desc: 'Basic research tools' },
                  { plan: 'Pro', price: '$99/month (~₹8,300)', desc: 'Core research + keyword tracking' },
                  { plan: 'Pro Plus', price: '$199/month (~₹16,700)', desc: 'Full suite including PPC tools' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-900 dark:text-white">{item.plan}: </span>
                      <span className="font-semibold text-orange-600 dark:text-orange-400">{item.price}</span>
                      <span className="text-gray-600 dark:text-gray-400"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
                {[
                  'No free plan. 14-day trial — credit card required upfront.',
                  'Billing in USD means your INR cost rises whenever the rupee weakens.',
                  'All plans cover Amazon.com only — not Amazon.in or Flipkart.',
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ROI Callout */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-black mb-3">12-Month Real Cost Comparison</h3>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              A seller on Viral Launch Pro pays ~<strong>₹99,600/year</strong>. Insydz Premium is <strong>₹35,988/year</strong> — covering Amazon India, Flipkart, AND Meesho, with WhatsApp alerts and Hindi review analysis.
            </p>
            <p className="text-white font-black text-3xl mt-4">That's ₹63,612 per year back into inventory or ads.</p>
          </div>
        </div>
      </section>

      {/* Real Seller Scenario */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-4 text-center text-gray-900 dark:text-white">
            What Most Tools Don't Tell You — The Launch That Nearly Went Wrong
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-14 max-w-3xl mx-auto">
            Viral Launch is built around product launches. So is every Indian seller's plan going into festive season. Here's where the data gap bites hardest.
          </p>
          <div className="bg-white dark:bg-gray-950 rounded-3xl p-8 shadow-2xl border-2 border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">
              Deepa's Great Indian Festival Launch — Baby Products Category, Amazon India
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {[
                    { label: 'The situation', value: "Launching baby bottles, ₹599 price point, targeting Great Indian Festival for initial ranking boost" },
                    { label: 'What went wrong', value: "Launched 3 weeks before GIF. 'BPA free baby bottle' had 4× search volume spike during festival. Out of stock on Day 6 of a 14-day launch window." },
                    { label: 'Why it happened', value: "Viral Launch data showed keyword volume — but not the Indian festive demand multiplier. No WhatsApp alert. Dashboard showed stockout after it had already happened." },
                    { label: 'The cost', value: '₹1.8L in missed GIF revenue. Launch ranking reset. Spent ₹42,000 on PPC to recover position.' },
                    { label: 'With Insydz (same scenario)', value: 'Festive demand alert 16 days before GIF. Insydz flagged 3.8× demand multiplier for category. Deepa doubled launch stock to 380 units.', highlight: true },
                    { label: 'Outcome difference', value: 'Completed 14-day launch window. Achieved Page 1 ranking. ₹2.7L GIF revenue — zero ranking recovery spend.', highlight: true },
                  ].map((row, i) => (
                    <tr key={i} className={row.highlight ? 'bg-green-50 dark:bg-green-900/20' : ''}>
                      <td className="py-4 pr-6 font-bold text-gray-700 dark:text-gray-300 w-1/3">{row.label}</td>
                      <td className={`py-4 ${row.highlight ? 'text-green-700 dark:text-green-400 font-semibold' : 'text-gray-600 dark:text-gray-400'}`}>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-gray-500 dark:text-gray-400 italic text-sm">
              The launch strategy was right. The keyword research was solid. What was missing was a tool that knew Indian festive demand patterns — and sent the alert to her phone, not her inbox.
            </p>
          </div>
        </div>
      </section>

      {/* Honest Assessment */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-4 text-center text-gray-900 dark:text-white">
            Insydz vs Viral Launch — Where Each Tool Actually Wins
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-14 max-w-3xl mx-auto">
            No cherry-picking. A straight honest take on which tool fits which seller.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-8 border-2 border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">🇮🇳 Choose Insydz if you...</h3>
              <ul className="space-y-3">
                {[
                  'Sell on Flipkart or Meesho alongside Amazon India',
                  'Want WhatsApp alerts — not email digests you check tomorrow',
                  'Need pricing in INR with no USD exchange rate risk',
                  'Have customers who review in Hindi or Hinglish',
                  'Need festive demand intelligence (Diwali, BBD, GIF, Republic Day)',
                  'Are building or launching a product on Indian marketplaces',
                  'Want action-driven recommendations — not data to interpret',
                  'Are a new, growing, or D2C seller who needs value before scale',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">🌐 Choose Viral Launch if you...</h3>
              <ul className="space-y-3">
                {[
                  'Sell on Amazon.com (US marketplace) as your primary channel',
                  'Need structured Amazon.com product launch sequences',
                  'Run Amazon US PPC and want Kinetic campaign automation',
                  'Are an experienced Amazon US seller scaling to 7–8 figures',
                  'Want AI-assisted Amazon.com listing optimisation',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-gray-500 dark:text-gray-400 italic text-sm">
                Viral Launch has strong Amazon.com tools for US sellers. But if your customers are Indian — and your inventory planning needs Diwali in the model — the tool you need was built here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Alerts */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-4 text-center text-gray-900 dark:text-white">
            The Alert That Gets Read in 4 Minutes, Not 4 Hours
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-14 max-w-3xl mx-auto">
            Viral Launch sends alerts to your email. Insydz sends them to WhatsApp — with the action already calculated, the moment the data changes.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                type: 'Competitor Price Drop',
                icon: <IndianRupee className="w-6 h-6" />,
                color: 'from-green-500 to-emerald-500',
                message: "Competitor dropped price on Baby Bottles (250ml). Their new price: ₹499 (was ₹599). Your price: ₹599. Suggested response: ₹539 — above your ₹490 margin floor.",
              },
              {
                type: 'Festive Launch Warning',
                icon: <Flame className="w-6 h-6" />,
                color: 'from-orange-500 to-amber-500',
                message: "Great Indian Festival in 16 days. Category demand multiplier: 3.8×. Current launch stock: 200 units (covers 5.3 days at festive velocity). Recommended reorder: 560 units before Day 1.",
              },
              {
                type: 'Ranking Drop',
                icon: <TrendingDown className="w-6 h-6" />,
                color: 'from-red-500 to-rose-500',
                message: '"BPA free baby bottle 250ml" dropped from #8 → #19. Competitor updated primary image 4 days ago — higher CTR likely. Suggested fix: A/B test infographic main image.',
              },
            ].map((alert, i) => (
              <div key={i} className="bg-white dark:bg-gray-950 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className={`bg-gradient-to-r ${alert.color} p-4 flex items-center gap-3`}>
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white">{alert.icon}</div>
                  <span className="font-bold text-white text-sm">WhatsApp Alert — {alert.type}</span>
                </div>
                <div className="p-5">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{alert.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center text-gray-900 dark:text-white">
            FAQs — Insydz vs Viral Launch
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
                <button onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)} className="w-full px-6 py-5 flex items-center justify-between text-left">
                  <span className="font-bold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                  {expandedFaq === faq.id ? <ChevronDown className="w-5 h-5 text-blue-500 flex-shrink-0" /> : <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4 text-white">Compare Clearly. Choose What Fits.</h2>
          <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
            Start with the free plan — no credit card, no 14-day expiry. See Insydz vs Viral Launch on your own products, with your own data, before spending a rupee.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { icp: 'New Seller', headline: 'Just starting on Amazon India or Flipkart', cta: 'Start Free →', action: () => setLocation('/signup') },
              { icp: 'Growing Seller', headline: 'Scaling to ₹5L+ monthly on Indian marketplaces', cta: 'Try Growth Plan →', action: () => setLocation('/pricing') },
              { icp: 'Agency', headline: 'Managing multiple seller accounts across platforms', cta: 'Book Demo →', action: () => setLocation('/about/contact-us') },
            ].map((card, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white border border-white/20">
                <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">{card.icp}</p>
                <p className="text-sm mb-4 text-white/90">{card.headline}</p>
                <button onClick={card.action} className="w-full bg-white text-blue-700 font-bold py-2 px-4 rounded-full text-sm hover:bg-blue-50 transition-colors">
                  {card.cta}
                </button>
              </div>
            ))}
          </div>
          <Button onClick={handleGetStarted} size="lg" className="bg-white text-blue-700 font-bold px-12 py-6 rounded-full shadow-2xl group">
            🚀 Start Free with Insydz <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

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

