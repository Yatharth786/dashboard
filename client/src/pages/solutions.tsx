// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'wouter';
// import { 
//   ChevronDown, ChevronRight, Check, Users, Store, TrendingUp, 
//   ShoppingBag, Briefcase, Target, Zap, AlertCircle, ArrowRight,
//   CheckCircle2, Package, BarChart3, Smartphone, IndianRupee
// } from 'lucide-react';
// import { Button } from "@/components/ui/button";

// export default function SolutionsPage() {
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

//   const solutions = [
//     {
//       id: 'amazon-sellers',
//       icon: <ShoppingBag className="w-10 h-10" />,
//       title: 'Amazon Sellers',
//       subtitle: 'For Amazon Sellers (India)',
//       whoItsFor: 'Private label & reseller sellers on Amazon India',
//       problems: [
//         'Competitor price tracking',
//         'Keyword & rank visibility',
//         'Review analysis',
//         'Pricing decisions'
//       ],
//       outcome: 'Sell smarter, react faster, protect margins.',
//       link: '/solutions/amazon-sellers',
//       visual: '🛒',
//       color: 'from-orange-500 to-red-500'
//     },
//     {
//       id: 'flipkart-sellers',
//       icon: <Store className="w-10 h-10" />,
//       title: 'Flipkart Sellers',
//       subtitle: 'For Flipkart Sellers',
//       whoItsFor: 'Sellers primarily operating on Flipkart',
//       problems: [
//         'Price wars',
//         'SEO & visibility gaps',
//         'Competitor monitoring'
//       ],
//       outcome: 'Better visibility and faster reactions on Flipkart.',
//       link: '/solutions/flipkart-sellers',
//       visual: '🏪',
//       color: 'from-blue-500 to-cyan-500'
//     },
//     {
//       id: 'd2c-brands',
//       icon: <TrendingUp className="w-10 h-10" />,
//       title: 'D2C Brands',
//       subtitle: 'For Shopify / D2C Brands',
//       whoItsFor: 'D2C brands selling via Shopify + marketplaces',
//       problems: [
//         'Market demand validation',
//         'Competitive benchmarking',
//         'Product positioning'
//       ],
//       outcome: 'Smarter launches and better positioning.',
//       link: '/solutions/d2c-brands',
//       visual: '🚀',
//       color: 'from-purple-500 to-pink-500'
//     },
//     {
//       id: 'ecommerce-agencies',
//       icon: <Briefcase className="w-10 h-10" />,
//       title: 'E-commerce Agencies',
//       subtitle: 'For E-commerce Agencies',
//       whoItsFor: 'Agencies managing multiple seller accounts',
//       problems: [
//         'Manual reporting',
//         'Data collection across clients',
//         'Scaling insights'
//       ],
//       outcome: 'Save time, scale clients, show impact.',
//       link: '/solutions/ecommerce-agencies',
//       visual: '💼',
//       color: 'from-green-500 to-emerald-500'
//     },
//     {
//       id: 'brand-managers',
//       icon: <Target className="w-10 h-10" />,
//       title: 'Brand Managers',
//       subtitle: 'For Brand Managers',
//       whoItsFor: 'Category managers, growth & brand teams',
//       problems: [
//         'Market intelligence',
//         'Competitive positioning',
//         'Performance tracking'
//       ],
//       outcome: 'Better strategic decisions with data.',
//       link: '/solutions/brand-managers',
//       visual: '📊',
//       color: 'from-yellow-500 to-orange-500'
//     }
//   ];

//   const caseStudies = [
//     {
//       type: 'Amazon Seller',
//       problem: 'Losing Buy Box due to sudden competitor price drops',
//       outcome: 'Reacted faster with alerts and protected margins',
//       icon: <ShoppingBag className="w-8 h-8" />,
//       color: 'from-orange-500 to-red-500'
//     },
//     {
//       type: 'D2C Brand',
//       problem: 'Launching products without knowing real marketplace demand',
//       outcome: 'Validated demand before launch and reduced risk',
//       icon: <TrendingUp className="w-8 h-8" />,
//       color: 'from-purple-500 to-pink-500'
//     },
//     {
//       type: 'E-commerce Agency',
//       problem: 'Manual reporting across multiple client accounts',
//       outcome: 'Centralised insights and saved hours every week',
//       icon: <Briefcase className="w-8 h-8" />,
//       color: 'from-green-500 to-emerald-500'
//     }
//   ];

//   const quickGuide = [
//     { condition: 'Selling on Amazon', solution: 'Amazon Seller Solution', link: '/solutions/amazon-sellers' },
//     { condition: 'Selling on Flipkart', solution: 'Flipkart Seller Solution', link: '/solutions/flipkart-sellers' },
//     { condition: 'Own brand / Shopify', solution: 'D2C Solution', link: '/solutions/d2c-brands' },
//     { condition: 'Managing clients', solution: 'Agency Solution', link: '/solutions/ecommerce-agencies' }
//   ];

//   const faqs = [
//     {
//       id: 'faq-1',
//       question: 'Can I switch between solutions later?',
//       answer: 'Yes! Insydz is flexible. You can start with one solution and switch or add more as your business evolves. Your data stays with you.'
//     },
//     {
//       id: 'faq-2',
//       question: 'Do solutions work across multiple platforms?',
//       answer: 'Absolutely. While each solution is optimized for specific platforms (Amazon, Flipkart), you can track data across multiple marketplaces from one account.'
//     },
//     {
//       id: 'faq-3',
//       question: 'Is pricing different for each solution?',
//       answer: 'No. Pricing is based on features and usage, not on which solution you choose. All solutions are available across all pricing tiers.'
//     },
//     {
//       id: 'faq-4',
//       question: 'Can agencies access multiple solutions?',
//       answer: 'Yes! Agencies can manage multiple client accounts, each with different solutions. The Agency Solution is designed specifically for this use case.'
//     },
//     {
//       id: 'faq-5',
//       question: 'Is the free plan available for all solutions?',
//       answer: 'Yes. Every solution is accessible on the free plan with core features, so you can explore what works best for your business before upgrading.'
//     },
//     {
//       id: 'faq-6',
//       question: 'Which solution is best for Amazon vs Flipkart sellers?',
//       answer: 'Each solution is tailored to platform-specific seller behavior. Amazon and Flipkart sellers get different insights even from the same data.'
//     },
//     {
//       id: 'faq-7',
//       question: 'Can I use more than one solution at the same time?',
//       answer: 'Yes. Insydz is designed to support multiple selling models within the same account.'
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
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
//                 </span>
//                 <span className="text-sm font-medium text-orange-700">Built for Indian Marketplaces 🇮🇳</span>
//               </div>

//               <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
//                 Solutions Built for
//                 <br />
//                 <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
//                   Every Type of
//                 </span>
//                 <br />
//                 Indian Seller
//               </h1>

//               <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
//                 Whether you sell on Amazon, Flipkart, run a D2C brand, or manage an agency — 
//                 <span className="text-orange-700 font-semibold"> Insydz adapts to exactly how you sell.</span>
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button
//                   onClick={handleGetStarted}
//                   size="lg"
//                   className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group"
//                 >
//                   👉 Start Free
//                   <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//                 <Button
//                   onClick={() => document.getElementById('solutions-grid')?.scrollIntoView({ behavior: 'smooth' })}
//                   size="lg"
//                   variant="outline"
//                   className="border-2 border-orange-600 text-orange-700 hover:bg-orange-50 font-semibold px-8 py-6 text-lg rounded-full"
//                 >
//                   Find My Solution →
//                 </Button>
//               </div>

//               {/* Trust Signals */}
//               <div className="flex flex-wrap items-center gap-6 pt-4">
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>Amazon & Flipkart ready</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <CheckCircle2 className="w-5 h-5 text-green-600" />
//                   <span>Works for all seller types</span>
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
//                   {/* Solution Cards Preview */}
//                   <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-4">
//                     <div className="flex items-start gap-4">
//                       <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
//                         <ShoppingBag className="w-8 h-8 text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="font-bold text-gray-900 mb-1">Amazon Seller Solution</h3>
//                         <p className="text-sm text-gray-600">Price tracking • Review insights</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-4">
//                     <div className="flex items-start gap-4">
//                       <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
//                         <Store className="w-8 h-8 text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="font-bold text-gray-900 mb-1">Flipkart Seller Solution</h3>
//                         <p className="text-sm text-gray-600">SEO monitoring • Competition</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-4">
//                     <div className="flex items-start gap-4">
//                       <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
//                         <TrendingUp className="w-8 h-8 text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="font-bold text-gray-900 mb-1">D2C Brand Solution</h3>
//                         <p className="text-sm text-gray-600">Market validation • Positioning</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating Badge */}
//                 <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl px-4 py-2 shadow-xl">
//                   <p className="text-white font-bold text-sm">5 Solutions</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Solutions Are Segmented */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900">
//               Different Sellers.
//               <br />
//               <span className="text-orange-600">Different Problems.</span>
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//             {[
//               {
//                 icon: <ShoppingBag className="w-8 h-8" />,
//                 title: "Amazon sellers need pricing alerts",
//                 color: "from-orange-500 to-red-500"
//               },
//               {
//                 icon: <Store className="w-8 h-8" />,
//                 title: "Flipkart sellers need SEO insights",
//                 color: "from-blue-500 to-cyan-500"
//               },
//               {
//                 icon: <TrendingUp className="w-8 h-8" />,
//                 title: "D2C brands need market validation",
//                 color: "from-purple-500 to-pink-500"
//               },
//               {
//                 icon: <Briefcase className="w-8 h-8" />,
//                 title: "Agencies need centralized reporting",
//                 color: "from-green-500 to-emerald-500"
//               },
//               {
//                 icon: <Target className="w-8 h-8" />,
//                 title: "Brand managers need competitive intel",
//                 color: "from-yellow-500 to-orange-500"
//               },
//               {
//                 icon: <Zap className="w-8 h-8" />,
//                 title: "Everyone needs it tailored to them",
//                 color: "from-red-500 to-pink-500"
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
//           <div className="bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-400 rounded-3xl p-8 text-center shadow-lg">
//             <AlertCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
//             <p className="text-2xl font-bold text-gray-900 mb-2">
//               That's why Insydz offers <span className="text-orange-600">solutions tailored</span> to how each seller operates.
//             </p>
//             <p className="text-gray-700 text-lg">
//               Same intelligence engine. Different insights for different roles.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Solutions Grid */}
//       <section id="solutions-grid" className="py-20 px-4 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//               Explore Solutions
//               <br />
//               <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">by Seller Type</span>
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {solutions.map((solution) => (
//               <div 
//                 key={solution.id}
//                 className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-400 hover:shadow-xl transition-all group"
//               >
//                 <div className="flex items-start justify-between mb-6">
//                   <div className="flex items-start gap-4">
//                     <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg`}>
//                       {solution.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-2xl font-bold text-gray-900 mb-1">{solution.subtitle}</h3>
//                       <p className="text-sm text-gray-600">{solution.whoItsFor}</p>
//                     </div>
//                   </div>
//                   <span className="text-4xl">{solution.visual}</span>
//                 </div>

//                 <div className="space-y-4 mb-6">
//                   <div>
//                     <p className="text-sm font-semibold text-gray-500 uppercase mb-2">Key Problems Solved</p>
//                     <ul className="space-y-2">
//                       {solution.problems.map((problem, i) => (
//                         <li key={i} className="flex items-start gap-2">
//                           <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
//                           <span className="text-gray-700 text-sm">{problem}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 rounded-xl p-4">
//                     <p className="text-sm font-semibold text-gray-500 uppercase mb-1">Outcome</p>
//                     <p className="text-gray-900 font-bold leading-relaxed">{solution.outcome}</p>
//                   </div>
//                 </div>

//                 <Link href={solution.link}>
//                   <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-6 rounded-xl group">
//                     View {solution.title} Solution
//                     <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                   </Button>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How Different Sellers Use Insydz */}
//       <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//               How Different Sellers
//               <br />
//               <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Use Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Real sellers use Insydz differently based on how they sell. Here are common examples.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {caseStudies.map((study, index) => (
//               <div 
//                 key={index}
//                 className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-400 hover:shadow-xl transition-all group"
//               >
//                 <div className={`w-16 h-16 bg-gradient-to-br ${study.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-lg`}>
//                   {study.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{study.type}</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Problem</p>
//                     <p className="text-sm text-gray-700 leading-relaxed">{study.problem}</p>
//                   </div>
//                   <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 rounded-xl p-3">
//                     <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Outcome</p>
//                     <p className="text-sm font-bold text-green-700">{study.outcome}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How All Solutions Connect */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//               One Platform.
//               <br />
//               <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Multiple Solutions.</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               No matter your role or platform, Insydz uses the same intelligence engine — customized to your selling model.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <Target className="w-10 h-10" />,
//                 title: "Same competitor data",
//                 desc: "Different insights",
//                 color: "from-blue-500 to-cyan-500"
//               },
//               {
//                 icon: <Users className="w-10 h-10" />,
//                 title: "Same reviews",
//                 desc: "Different actions",
//                 color: "from-purple-500 to-pink-500"
//               },
//               {
//                 icon: <TrendingUp className="w-10 h-10" />,
//                 title: "Same trends",
//                 desc: "Role-specific decisions",
//                 color: "from-green-500 to-emerald-500"
//               }
//             ].map((item, i) => (
//               <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-orange-400 hover:shadow-xl transition-all group">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform shadow-lg`}>
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
//                 <p className="text-gray-600 text-lg">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Which Solution Is Right For Me */}
//       <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <AlertCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//               Not Sure Which
//               <br />
//               <span className="text-orange-600">Solution Fits You?</span>
//             </h2>
//             <p className="text-xl text-gray-600">
//               Here's a quick guide to help you choose:
//             </p>
//           </div>

//           <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 mb-8 shadow-xl">
//             <div className="space-y-4">
//               {quickGuide.map((guide, index) => (
//                 <div key={index} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0 hover:bg-orange-50 px-4 rounded-lg transition-all">
//                   <div className="flex items-center gap-3">
//                     <ChevronRight className="w-5 h-5 text-orange-500" />
//                     <span className="text-gray-700 font-medium text-lg">{guide.condition}</span>
//                   </div>
//                   <Link href={guide.link}>
//                     <span className="text-orange-600 font-bold hover:text-orange-700 cursor-pointer">
//                       {guide.solution} →
//                     </span>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="text-center">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group"
//             >
//               <span>👉</span> Start Free & Choose Inside the Product
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Free-First CTA */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-3xl mx-auto text-center">
//           <Zap className="w-16 h-16 text-orange-500 mx-auto mb-6" />
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//             Start Free.
//             <br />
//             <span className="text-orange-600">Pick Your Solution Later.</span>
//           </h2>
//           <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
//             You don't need to decide upfront. Start free and Insydz will adapt to how you sell.
//           </p>
//           <Button
//             onClick={handleGetStarted}
//             size="lg"
//             className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group"
//           >
//             <span>👉</span> Start Free
//             <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//           </Button>
//           <div className="mt-6 space-y-2">
//             <p className="text-sm text-gray-500">No credit card required.</p>
//             <p className="text-sm text-gray-600">Start free — choose your solution inside the product.</p>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-4xl lg:text-5xl font-black mb-12 text-center text-gray-900">
//             Solutions – <span className="text-orange-600">FAQs</span>
//           </h2>

//           <div className="space-y-4">
//             {faqs.map((faq) => (
//               <div key={faq.id} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-orange-300 transition-all">
//                 <button
//                   onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
//                   className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
//                 >
//                   <span className="font-bold text-gray-900 pr-4 text-lg">{faq.question}</span>
//                   {expandedFaq === faq.id ? (
//                     <ChevronDown className="w-5 h-5 text-orange-500 flex-shrink-0" />
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
//       <section className="py-20 px-4 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
//             Whatever You Sell.
//             <br />
//             However You Sell.
//             <br />
//             <span className="text-orange-100">Insydz Fits.</span>
//           </h2>
//           <p className="text-xl text-white/90 mb-8 leading-relaxed">
//             Start free — choose your solution inside the product.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-white hover:bg-gray-100 text-orange-700 font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
//             >
//               <span>👉</span> Start Free
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//             <Button
//               onClick={() => document.getElementById('solutions-grid')?.scrollIntoView({ behavior: 'smooth' })}
//               size="lg"
//               className="bg-orange-700 hover:bg-orange-800 text-white font-bold px-12 py-6 text-lg rounded-full border-2 border-orange-400"
//             >
//               Explore Use Cases →
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
//                 AI-powered intelligence for Indian sellers
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





import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { 
  ChevronDown, ChevronRight, Check, Users, Store, TrendingUp, 
  ShoppingBag, Briefcase, Target, Zap, AlertCircle, ArrowRight,
  CheckCircle2, Package, BarChart3, Smartphone, IndianRupee,
  Menu, X, Sun, Moon, Code, Globe, Trophy, ArrowLeft, BookOpen,
  Video, FileText, MessageCircle, Bell, Search, TrendingDown,
  Flame,
  Presentation
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { navigate } from 'wouter/use-browser-location';

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

export default function SolutionsPage() {
  const [, setLocation] = useLocation();
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
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
    setLocation("/signup");
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

  const solutions = [
    {
      id: 'amazon-sellers',
      icon: <ShoppingBag className="w-10 h-10" />,
      title: 'Amazon Sellers',
      subtitle: 'For Amazon Sellers (India)',
      whoItsFor: 'Private label & reseller sellers on Amazon India',
      problems: [
        'Competitor price tracking',
        'Keyword & rank visibility',
        'Review analysis',
        'Pricing decisions'
      ],
      outcome: 'Sell smarter, react faster, protect margins.',
      link: '/solutions/amazon-sellers',
      visual: '🛒',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'flipkart-sellers',
      icon: <Store className="w-10 h-10" />,
      title: 'Flipkart Sellers',
      subtitle: 'For Flipkart Sellers',
      whoItsFor: 'Sellers primarily operating on Flipkart',
      problems: [
        'Price wars',
        'SEO & visibility gaps',
        'Competitor monitoring'
      ],
      outcome: 'Better visibility and faster reactions on Flipkart.',
      link: '/solutions/flipkart-sellers',
      visual: '🏪',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'd2c-brands',
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'D2C Brands',
      subtitle: 'For Shopify / D2C Brands',
      whoItsFor: 'D2C brands selling via Shopify + marketplaces',
      problems: [
        'Market demand validation',
        'Competitive benchmarking',
        'Product positioning'
      ],
      outcome: 'Smarter launches and better positioning.',
      link: '/solutions/d2c-brands',
      visual: '🚀',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ecommerce-agencies',
      icon: <Briefcase className="w-10 h-10" />,
      title: 'E-commerce Agencies',
      subtitle: 'For E-commerce Agencies',
      whoItsFor: 'Agencies managing multiple seller accounts',
      problems: [
        'Manual reporting',
        'Data collection across clients',
        'Scaling insights'
      ],
      outcome: 'Save time, scale clients, show impact.',
      link: '/solutions/ecommerce-agencies',
      visual: '💼',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'brand-managers',
      icon: <Target className="w-10 h-10" />,
      title: 'Brand Managers',
      subtitle: 'For Brand Managers',
      whoItsFor: 'Category managers, growth & brand teams',
      problems: [
        'Market intelligence',
        'Competitive positioning',
        'Performance tracking'
      ],
      outcome: 'Better strategic decisions with data.',
      link: '/solutions/brand-managers',
      visual: '📊',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const caseStudies = [
    {
      type: 'Amazon Seller',
      problem: 'Losing Buy Box due to sudden competitor price drops',
      outcome: 'Reacted faster with alerts and protected margins',
      icon: <ShoppingBag className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      type: 'D2C Brand',
      problem: 'Launching products without knowing real marketplace demand',
      outcome: 'Validated demand before launch and reduced risk',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      type: 'E-commerce Agency',
      problem: 'Manual reporting across multiple client accounts',
      outcome: 'Centralised insights and saved hours every week',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const quickGuide = [
    { condition: 'Selling on Amazon', solution: 'Amazon Seller Solution', link: '/solutions/amazon-sellers' },
    { condition: 'Selling on Flipkart', solution: 'Flipkart Seller Solution', link: '/solutions/flipkart-sellers' },
    { condition: 'Own brand / Shopify', solution: 'D2C Solution', link: '/solutions/d2c-brands' },
    { condition: 'Managing clients', solution: 'Agency Solution', link: '/solutions/ecommerce-agencies' }
  ];

  const faqs = [
    {
      id: 'faq-1',
      question: 'Can I switch between solutions later?',
      answer: 'Yes! Insydz is flexible. You can start with one solution and switch or add more as your business evolves. Your data stays with you.'
    },
    {
      id: 'faq-2',
      question: 'Do solutions work across multiple platforms?',
      answer: 'Absolutely. While each solution is optimized for specific platforms (Amazon, Flipkart), you can track data across multiple marketplaces from one account.'
    },
    {
      id: 'faq-3',
      question: 'Is pricing different for each solution?',
      answer: 'No. Pricing is based on features and usage, not on which solution you choose. All solutions are available across all pricing tiers.'
    },
    {
      id: 'faq-4',
      question: 'Can agencies access multiple solutions?',
      answer: 'Yes! Agencies can manage multiple client accounts, each with different solutions. The Agency Solution is designed specifically for this use case.'
    },
    {
      id: 'faq-5',
      question: 'Is the free plan available for all solutions?',
      answer: 'Yes. Every solution is accessible on the free plan with core features, so you can explore what works best for your business before upgrading.'
    },
    {
      id: 'faq-6',
      question: 'Which solution is best for Amazon vs Flipkart sellers?',
      answer: 'Each solution is tailored to platform-specific seller behavior. Amazon and Flipkart sellers get different insights even from the same data.'
    },
    {
      id: 'faq-7',
      question: 'Can I use more than one solution at the same time?',
      answer: 'Yes. Insydz is designed to support multiple selling models within the same account.'
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
            <div className="flex items-center space-x-3">
              {/* <button
                onClick={() => setLocation('/')}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </button> */}
              
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
            <div className="hidden lg:flex items-center space-x-3" ref={dropdownRef}>
              {/* <button 
                onClick={() => setLocation('/')} 
                className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
              >
                Home
              </button> */}

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
                <span className="text-sm font-medium text-orange-700">Built for Indian Marketplaces 🇮🇳</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
                Solutions Built for
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
                  Every Type of
                </span>
                <br />
                Indian Seller
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                Whether you sell on Amazon, Flipkart, run a D2C brand, or manage an agency — 
                <span className="text-orange-700 font-semibold"> Insydz adapts to exactly how you sell.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group"
                >
                  👉 Start Free
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => document.getElementById('solutions-grid')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-600 text-orange-700 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-semibold px-8 py-6 text-lg rounded-full"
                >
                  Find My Solution →
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Amazon & Flipkart ready</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Works for all seller types</span>
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
                  {/* Solution Cards Preview */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-700 rounded-2xl p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <ShoppingBag className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">Amazon Seller Solution</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Price tracking • Review insights</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700 rounded-2xl p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <Store className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">Flipkart Seller Solution</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">SEO monitoring • Competition</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 rounded-2xl p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">D2C Brand Solution</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Market validation • Positioning</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl px-4 py-2 shadow-xl">
                  <p className="text-white font-bold text-sm">5 Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      {/* Why Solutions Are Segmented */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900">
              Different Sellers.
              <br />
              <span className="text-orange-600">Different Problems.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <ShoppingBag className="w-8 h-8" />,
                title: "Amazon sellers need pricing alerts",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: <Store className="w-8 h-8" />,
                title: "Flipkart sellers need SEO insights",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "D2C brands need market validation",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Agencies need centralized reporting",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Brand managers need competitive intel",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Everyone needs it tailored to them",
                color: "from-red-500 to-pink-500"
              }
            ].map((pain, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-orange-400 hover:shadow-lg transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
                  {pain.icon}
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{pain.title}</p>
              </div>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-400 rounded-3xl p-8 text-center shadow-lg">
            <AlertCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <p className="text-2xl font-bold text-gray-900 mb-2">
              That's why Insydz offers <span className="text-orange-600">solutions tailored</span> to how each seller operates.
            </p>
            <p className="text-gray-700 text-lg">
              Same intelligence engine. Different insights for different roles.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions-grid" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Explore Solutions
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">by Seller Type</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div 
                key={solution.id}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-400 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg`}>
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{solution.subtitle}</h3>
                      <p className="text-sm text-gray-600">{solution.whoItsFor}</p>
                    </div>
                  </div>
                  <span className="text-4xl">{solution.visual}</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase mb-2">Key Problems Solved</p>
                    <ul className="space-y-2">
                      {solution.problems.map((problem, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 rounded-xl p-4">
                    <p className="text-sm font-semibold text-gray-500 uppercase mb-1">Outcome</p>
                    <p className="text-gray-900 font-bold leading-relaxed">{solution.outcome}</p>
                  </div>
                </div>

                <Link href={solution.link}>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-6 rounded-xl group">
                    View {solution.title} Solution
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Different Sellers Use Insydz */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              How Different Sellers
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Use Insydz</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real sellers use Insydz differently based on how they sell. Here are common examples.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-400 hover:shadow-xl transition-all group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${study.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-lg`}>
                  {study.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{study.type}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Problem</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{study.problem}</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 rounded-xl p-3">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Outcome</p>
                    <p className="text-sm font-bold text-green-700">{study.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How All Solutions Connect */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              One Platform.
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Multiple Solutions.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              No matter your role or platform, Insydz uses the same intelligence engine — customized to your selling model.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-10 h-10" />,
                title: "Same competitor data",
                desc: "Different insights",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Same reviews",
                desc: "Different actions",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "Same trends",
                desc: "Role-specific decisions",
                color: "from-green-500 to-emerald-500"
              }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-orange-400 hover:shadow-xl transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Which Solution Is Right For Me */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <AlertCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Not Sure Which
              <br />
              <span className="text-orange-600">Solution Fits You?</span>
            </h2>
            <p className="text-xl text-gray-600">
              Here's a quick guide to help you choose:
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 mb-8 shadow-xl">
            <div className="space-y-4">
              {quickGuide.map((guide, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0 hover:bg-orange-50 px-4 rounded-lg transition-all">
                  <div className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700 font-medium text-lg">{guide.condition}</span>
                  </div>
                  <Link href={guide.link}>
                    <span className="text-orange-600 font-bold hover:text-orange-700 cursor-pointer">
                      {guide.solution} →
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group"
            >
              <span>👉</span> Start Free & Choose Inside the Product
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Free-First CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Zap className="w-16 h-16 text-orange-500 mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
            Start Free.
            <br />
            <span className="text-orange-600">Pick Your Solution Later.</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            You don't need to decide upfront. Start free and Insydz will adapt to how you sell.
          </p>
          <Button
            onClick={handleGetStarted}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group"
          >
            <span>👉</span> Start Free
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <div className="mt-6 space-y-2">
            <p className="text-sm text-gray-500">No credit card required.</p>
            <p className="text-sm text-gray-600">Start free — choose your solution inside the product.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-black mb-12 text-center text-gray-900">
            Solutions – <span className="text-orange-600">FAQs</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-orange-300 transition-all">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 pr-4 text-lg">{faq.question}</span>
                  {expandedFaq === faq.id ? (
                    <ChevronDown className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-5 bg-gray-50">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
            Whatever You Sell.
            <br />
            However You Sell.
            <br />
            <span className="text-orange-100">Insydz Fits.</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Start free — choose your solution inside the product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-white hover:bg-gray-100 text-orange-700 font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
            >
              <span>👉</span> Start Free
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => document.getElementById('solutions-grid')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-orange-700 hover:bg-orange-800 text-white font-bold px-12 py-6 text-lg rounded-full border-2 border-orange-400"
            >
              Explore Use Cases →
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
                AI-powered intelligence for Indian sellers
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