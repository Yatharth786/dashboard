// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'wouter';
// import { 
//   ChevronDown, ChevronRight, Check, Zap, TrendingUp, Star, Search, 
//   Package, DollarSign, BarChart3, AlertCircle, ArrowRight, CheckCircle2,
//   Target, Users, Briefcase, Clock, TrendingDown, MessageCircle
// } from 'lucide-react';
// import { Button } from "@/components/ui/button";

// const UseCasesPage = () => {
//   const [, setLocation] = useLocation();
//   const [expandedCase, setExpandedCase] = useState<string | null>(null);
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

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   const useCases = [
//     {
//       id: 'track-competitor-prices',
//       icon: <DollarSign className="w-10 h-10" />,
//       title: 'Track Competitor Prices',
//       category: 'pricing',
//       isPrimary: true,
//       tag: 'Most Common',
//       problem: 'Competitors change prices suddenly and steal sales before you can react.',
//       solution: 'Track competitor price changes in real time and get instant alerts before Buy Box or sales are lost.',
//       outcomes: ['Faster reactions', 'Protected margins', 'No panic discounting'],
//       context: 'Common in price-sensitive categories',
//       link: '/use-cases/track-competitor-prices',
//       example: {
//         insight: 'Competitor dropped price to ₹899 (was ₹1,299)',
//         action: 'WhatsApp alert sent within 2 minutes',
//         result: 'Seller adjusted price to ₹949 & retained Buy Box'
//       },
//       visual: '📊',
//       color: 'from-orange-500 to-red-500'
//     },
//     {
//       id: 'find-profitable-products',
//       icon: <TrendingUp className="w-10 h-10" />,
//       title: 'Find Profitable Products',
//       category: 'product',
//       isPrimary: true,
//       tag: 'Popular',
//       problem: 'Launching products without knowing real demand leads to losses.',
//       solution: 'Identify high-demand, low-competition product opportunities using real marketplace data.',
//       outcomes: ['Smarter launches', 'Lower risk', 'Better margins'],
//       context: 'Ideal for seasonal & festive sellers',
//       link: '/use-cases/find-profitable-products',
//       example: {
//         insight: 'High demand keyword with 45% competition gap',
//         action: 'Product opportunity score: 8.2/10',
//         result: 'Launched with 3x margin vs. initial estimate'
//       },
//       visual: '🎯',
//       color: 'from-blue-500 to-cyan-500'
//     },
//     {
//       id: 'improve-amazon-flipkart-seo',
//       icon: <Search className="w-10 h-10" />,
//       title: 'Improve Amazon & Flipkart SEO',
//       category: 'seo',
//       isPrimary: true,
//       tag: 'Popular',
//       problem: 'Your products don\'t rank for the keywords that actually drive sales.',
//       solution: 'Track keyword rankings, discover competitor keywords, and optimise listings based on real data.',
//       outcomes: ['Higher visibility', 'More organic sales', 'Faster SEO decisions'],
//       context: 'Best for high-competition keywords',
//       link: '/use-cases/improve-seo',
//       example: {
//         insight: 'Competitor ranking #3 for "wireless earbuds under 2000"',
//         action: 'Title & backend keywords optimized',
//         result: 'Moved from page 4 to page 1 in 2 weeks'
//       },
//       visual: '🔍',
//       color: 'from-purple-500 to-pink-500'
//     },
//     {
//       id: 'analyze-customer-reviews',
//       icon: <Star className="w-10 h-10" />,
//       title: 'Analyze Customer Reviews',
//       category: 'product',
//       problem: 'Thousands of reviews hide insights you don\'t have time to read.',
//       solution: 'Analyse reviews at scale to uncover pain points, feature gaps, and improvement opportunities.',
//       outcomes: ['Better ratings', 'Fewer returns', 'Smarter product improvements'],
//       context: 'Critical for listings with 100+ reviews',
//       link: '/use-cases/analyze-customer-reviews',
//       example: {
//         insight: '67% of 1-star reviews mention "charging cable quality"',
//         action: 'Updated product with better cable',
//         result: 'Rating improved from 3.8 to 4.4 stars'
//       },
//       visual: '⭐',
//       color: 'from-yellow-500 to-orange-500'
//     },
//     {
//       id: 'avoid-stockouts-missed-sales',
//       icon: <Package className="w-10 h-10" />,
//       title: 'Avoid Stockouts & Missed Sales',
//       category: 'inventory',
//       problem: 'Stockouts during high demand kill momentum and rankings.',
//       solution: 'Monitor demand signals, competitor stock status, and sales trends to plan inventory better.',
//       outcomes: ['Fewer stockouts', 'Better inventory planning', 'Protected rankings'],
//       context: 'Essential during festive & sale periods',
//       link: '/use-cases/avoid-stockouts',
//       example: {
//         insight: 'Demand spike detected 5 days before Diwali',
//         action: 'Early restock alert triggered',
//         result: 'Zero stockouts during peak season'
//       },
//       visual: '📦',
//       color: 'from-green-500 to-emerald-500'
//     }
//   ];

//   const categories = [
//     { id: 'pricing', label: 'Pricing & Competition', icon: <DollarSign className="w-4 h-4" />, color: 'from-orange-500 to-red-500' },
//     { id: 'product', label: 'Product & Demand', icon: <TrendingUp className="w-4 h-4" />, color: 'from-blue-500 to-cyan-500' },
//     { id: 'seo', label: 'SEO & Visibility', icon: <Search className="w-4 h-4" />, color: 'from-purple-500 to-pink-500' },
//     { id: 'inventory', label: 'Inventory & Operations', icon: <Package className="w-4 h-4" />, color: 'from-green-500 to-emerald-500' }
//   ];

//   const faqs = [
//     {
//       id: 'faq-1',
//       question: 'Can I access multiple use cases on the free plan?',
//       answer: 'Yes! The free plan gives you access to core features across multiple use cases so you can explore what works for your business before upgrading.'
//     },
//     {
//       id: 'faq-2',
//       question: 'Do these use cases work for Amazon India & Flipkart?',
//       answer: 'Absolutely. Insydz is built specifically for Indian marketplaces including Amazon India and Flipkart.'
//     },
//     {
//       id: 'faq-3',
//       question: 'Are these separate tools or one platform?',
//       answer: 'One unified platform. All use cases work together and share the same data, so insights flow seamlessly across different problems you\'re solving.'
//     },
//     {
//       id: 'faq-4',
//       question: 'Which use case should I start with?',
//       answer: 'It depends on your situation: New sellers should start with Find Profitable Products. Active sellers benefit most from Track Competitor Prices. If you\'re struggling with visibility, start with SEO & Reviews.'
//     },
//     {
//       id: 'faq-5',
//       question: 'Can agencies use these use cases for clients?',
//       answer: 'Yes! Many agencies use Insydz to manage multiple client accounts and deliver data-driven insights across all use cases.'
//     },
//     {
//       id: 'faq-6',
//       question: 'Which use case gives the fastest ROI?',
//       answer: 'Track Competitor Prices typically delivers the fastest ROI as it helps you respond to market changes immediately and protect your margins.'
//     },
//     {
//       id: 'faq-7',
//       question: 'Do I need to use all use cases together?',
//       answer: 'Not at all. Start with the problem that\'s most urgent for you. Many sellers begin with one use case and gradually add more as they grow.'
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
//                 <span className="text-sm font-medium text-orange-700">Built for Indian Sellers 🇮🇳</span>
//               </div>

//               <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
//                 How Sellers Use Insydz to
//                 <br />
//                 <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
//                   Make Better
//                 </span>
//                 <br />
//                 Decisions
//               </h1>

//               <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
//                 From tracking competitors to avoiding stockouts, Insydz helps Indian sellers solve real, everyday marketplace problems — 
//                 <span className="text-orange-700 font-semibold"> not just analyse data.</span>
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
//                   onClick={() => document.getElementById('use-cases-grid')?.scrollIntoView({ behavior: 'smooth' })}
//                   size="lg"
//                   variant="outline"
//                   className="border-2 border-orange-600 text-orange-700 hover:bg-orange-50 font-semibold px-8 py-6 text-lg rounded-full"
//                 >
//                   Explore Use Cases →
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
//                   <span>Real seller problems solved</span>
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
//                   {/* Use Case Cards Preview */}
//                   <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-4">
//                     <div className="flex items-start gap-4">
//                       <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
//                         <DollarSign className="w-8 h-8 text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="font-bold text-gray-900 mb-1">Track Competitor Prices</h3>
//                         <p className="text-sm text-gray-600">Real-time alerts • Margin protection</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-4">
//                     <div className="flex items-start gap-4">
//                       <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
//                         <TrendingUp className="w-8 h-8 text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="font-bold text-gray-900 mb-1">Find Profitable Products</h3>
//                         <p className="text-sm text-gray-600">Demand analysis • Low competition</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-4">
//                     <div className="flex items-start gap-4">
//                       <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
//                         <Search className="w-8 h-8 text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="font-bold text-gray-900 mb-1">Improve SEO Rankings</h3>
//                         <p className="text-sm text-gray-600">Keyword tracking • Listing optimization</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating Badge */}
//                 <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl px-4 py-2 shadow-xl">
//                   <p className="text-white font-bold text-sm">5 Use Cases</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Use Cases Matter */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900">
//               Different Problems.
//               <br />
//               <span className="text-orange-600">One Intelligence Platform.</span>
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {[
//               {
//                 icon: <TrendingDown className="w-8 h-8" />,
//                 title: "Competitors change prices without warning",
//                 color: "from-orange-500 to-red-500"
//               },
//               {
//                 icon: <MessageCircle className="w-8 h-8" />,
//                 title: "Reviews hide critical product issues",
//                 color: "from-purple-500 to-pink-500"
//               },
//               {
//                 icon: <Search className="w-8 h-8" />,
//                 title: "Products don't rank for the right keywords",
//                 color: "from-blue-500 to-cyan-500"
//               },
//               {
//                 icon: <Clock className="w-8 h-8" />,
//                 title: "Stockouts happen during peak demand",
//                 color: "from-green-500 to-emerald-500"
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
//               Sellers don't wake up looking for <span className="text-orange-600">"features"</span>
//             </p>
//             <p className="text-gray-700 text-lg">
//               They look for answers to specific problems. Insydz is designed around how sellers actually think and operate.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Category Pills */}
//       <section className="py-8 px-4 bg-white border-y border-gray-100">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-wrap gap-3 justify-center">
//             {categories.map((cat) => (
//               <button
//                 key={cat.id}
//                 onClick={() => scrollToSection(cat.id)}
//                 className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-semibold hover:bg-orange-50 hover:border-orange-500 transition-all group"
//               >
//                 <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${cat.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
//                   {cat.icon}
//                 </div>
//                 <span>{cat.label}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Use Cases Grid */}
//       <section id="use-cases-grid" className="py-20 px-4 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//               Explore Seller
//               <br />
//               <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Use Cases</span>
//             </h2>
//           </div>

//           <div className="space-y-8">
//             {useCases.map((useCase) => (
//               <div key={useCase.id} id={useCase.category}>
//                 <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-400 hover:shadow-xl transition-all group">
//                   <div className="flex items-start justify-between mb-6">
//                     <div className="flex items-start gap-4 flex-1">
//                       <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg`}>
//                         {useCase.icon}
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex items-center gap-3 mb-2">
//                           <h3 className="text-2xl font-bold text-gray-900">{useCase.title}</h3>
//                           {useCase.tag && (
//                             <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
//                               {useCase.tag}
//                             </span>
//                           )}
//                         </div>
//                         <p className="text-sm text-gray-600 italic mb-4">{useCase.context}</p>
//                       </div>
//                     </div>
//                     <span className="text-4xl">{useCase.visual}</span>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                       <p className="text-sm font-semibold text-gray-500 uppercase mb-2">Problem</p>
//                       <p className="text-gray-700 leading-relaxed">{useCase.problem}</p>
//                     </div>

//                     <div>
//                       <p className="text-sm font-semibold text-gray-500 uppercase mb-2">How Insydz Helps</p>
//                       <p className="text-gray-900 font-medium leading-relaxed">{useCase.solution}</p>
//                     </div>
//                   </div>

//                   <div className="mb-6">
//                     <p className="text-sm font-semibold text-gray-500 uppercase mb-3">Key Outcomes</p>
//                     <div className="flex flex-wrap gap-2">
//                       {useCase.outcomes.map((outcome, i) => (
//                         <span key={i} className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 text-green-700 rounded-xl text-sm font-semibold">
//                           <CheckCircle2 className="w-4 h-4" /> {outcome}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* See Example Toggle */}
//                   <div className="border-t border-gray-200 pt-6">
//                     <button
//                       onClick={() => setExpandedCase(expandedCase === useCase.id ? null : useCase.id)}
//                       className="flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors mb-4"
//                     >
//                       {expandedCase === useCase.id ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
//                       <span>See Real Example</span>
//                     </button>

//                     {expandedCase === useCase.id && (
//                       <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-6 mb-6">
//                         <div className="grid md:grid-cols-3 gap-6">
//                           <div>
//                             <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Insight Detected</p>
//                             <p className="text-sm text-gray-900 font-medium">{useCase.example.insight}</p>
//                           </div>
//                           <div>
//                             <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Action Taken</p>
//                             <p className="text-sm text-gray-900 font-medium">{useCase.example.action}</p>
//                           </div>
//                           <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 rounded-xl p-4">
//                             <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Result</p>
//                             <p className="text-sm font-bold text-green-700">{useCase.example.result}</p>
//                           </div>
//                         </div>
//                       </div>
//                     )}

//                     <Link href={useCase.link}>
//                       <Button className="w-full md:w-auto bg-gray-900 hover:bg-gray-800 text-white font-semibold py-6 px-8 rounded-xl group">
//                         Learn More About This Use Case
//                         <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                       </Button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Where Should I Start Section */}
//       <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <AlertCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//               Not Sure Which
//               <br />
//               <span className="text-orange-600">Use Case to Start With?</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Here's what we recommend based on where you are in your seller journey:
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             {[
//               {
//                 icon: <TrendingUp className="w-10 h-10" />,
//                 title: "New Sellers",
//                 desc: "Start with Find Profitable Products to launch smart and avoid costly mistakes.",
//                 link: "/use-cases/find-profitable-products",
//                 color: "from-blue-500 to-cyan-500"
//               },
//               {
//                 icon: <DollarSign className="w-10 h-10" />,
//                 title: "Active Sellers",
//                 desc: "Track Competitor Prices to protect margins and respond to market changes instantly.",
//                 link: "/use-cases/track-competitor-prices",
//                 color: "from-orange-500 to-red-500"
//               },
//               {
//                 icon: <Search className="w-10 h-10" />,
//                 title: "Struggling Listings",
//                 desc: "Improve SEO & Reviews to boost visibility and convert more browsers into buyers.",
//                 link: "/use-cases/improve-seo",
//                 color: "from-purple-500 to-pink-500"
//               }
//             ].map((item, i) => (
//               <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-400 hover:shadow-xl transition-all group">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-lg`}>
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
//                 <p className="text-gray-600 mb-6 leading-relaxed">{item.desc}</p>
//                 <Link href={item.link}>
//                   <Button variant="ghost" className="text-orange-600 hover:text-orange-700 font-semibold p-0 h-auto group">
//                     Explore This Use Case
//                     <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </Button>
//                 </Link>
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group"
//             >
//               <span>👉</span> Start Free & Explore
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* How Use Cases Connect */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
//               Use Cases That
//               <br />
//               <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Work Better Together</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Most sellers face more than one problem at the same time. Insydz connects insights across use cases so decisions are faster and clearer.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 from: { icon: <TrendingUp className="w-6 h-6" />, text: "Profitable product", color: "blue" },
//                 to: { icon: <DollarSign className="w-6 h-6" />, text: "Price tracking", color: "orange" },
//                 desc: "Launch smart, then stay competitive",
//                 gradient: "from-blue-50 to-orange-50",
//                 border: "border-blue-200"
//               },
//               {
//                 from: { icon: <Star className="w-6 h-6" />, text: "Review issues", color: "purple" },
//                 to: { icon: <Search className="w-6 h-6" />, text: "SEO & listing fixes", color: "green" },
//                 desc: "Fix problems, improve visibility",
//                 gradient: "from-purple-50 to-green-50",
//                 border: "border-purple-200"
//               },
//               {
//                 from: { icon: <BarChart3 className="w-6 h-6" />, text: "Demand spike", color: "green" },
//                 to: { icon: <Package className="w-6 h-6" />, text: "Inventory planning", color: "blue" },
//                 desc: "Catch trends before stockouts",
//                 gradient: "from-green-50 to-blue-50",
//                 border: "border-green-200"
//               }
//             ].map((item, i) => (
//               <div key={i} className={`bg-gradient-to-br ${item.gradient} border-2 ${item.border} rounded-2xl p-8 hover:shadow-xl transition-all`}>
//                 <div className="flex items-center justify-center gap-3 mb-6">
//                   <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
//                     {item.from.icon}
//                   </div>
//                   <ChevronRight className="w-5 h-5 text-gray-400" />
//                   <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
//                     {item.to.icon}
//                   </div>
//                 </div>
//                 <p className="text-gray-900 font-bold text-center mb-2">
//                   <span className={`text-${item.from.color}-600`}>{item.from.text}</span> → <span className={`text-${item.to.color}-600`}>{item.to.text}</span>
//                 </p>
//                 <p className="text-sm text-gray-600 text-center">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Who This Is For */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl lg:text-5xl font-black mb-12 text-center text-gray-900">
//             Is Insydz <span className="text-orange-600">Right for You?</span>
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
//                   <Check className="w-7 h-7 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Best For</h3>
//               </div>
//               <ul className="space-y-4">
//                 {[
//                   'Active marketplace sellers',
//                   'Competitive categories',
//                   'Sellers making data-driven decisions'
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
//                     <span className="text-gray-700 text-lg">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
//                   <span className="text-gray-700 text-2xl">⚠️</span>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Not Ideal For</h3>
//               </div>
//               <ul className="space-y-4">
//                 {[
//                   'One-time sellers',
//                   'Non-ecommerce businesses'
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <span className="w-6 h-6 text-gray-400 mt-0.5 flex-shrink-0 text-xl">•</span>
//                     <span className="text-gray-600 text-lg">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-4xl lg:text-5xl font-black mb-12 text-center text-gray-900">
//             Use Cases – <span className="text-orange-600">FAQs</span>
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
//             Solve Real Seller Problems
//             <br />
//             <span className="text-orange-100">with Insydz</span>
//           </h2>
//           <p className="text-xl text-white/90 mb-8 leading-relaxed">
//             Start with one use case. Expand as you grow.
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
//               onClick={() => document.getElementById('use-cases-grid')?.scrollIntoView({ behavior: 'smooth' })}
//               size="lg"
//               className="bg-orange-700 hover:bg-orange-800 text-white font-bold px-12 py-6 text-lg rounded-full border-2 border-orange-400"
//             >
//               Explore Features →
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
// };

// export default UseCasesPage;



import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { 
  ChevronDown, ChevronRight, Check, Zap, TrendingUp, Star, Search, 
  Package, DollarSign, BarChart3, AlertCircle, ArrowRight, CheckCircle2,
  Target, Users, Briefcase, Clock, TrendingDown, MessageCircle, Menu, X,
  Sun, Moon, ArrowLeft, BookOpen, Video, FileText, Bell, ShoppingBag, Store,
  Code, Globe, Trophy,
  Flame,
  Presentation
} from 'lucide-react';
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

const UseCasesPage = () => {
  const [, setLocation] = useLocation();
  const [expandedCase, setExpandedCase] = useState<string | null>(null);
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

  const useCases = [
    {
      id: 'track-competitor-prices',
      icon: <DollarSign className="w-10 h-10" />,
      title: 'Track Competitor Prices',
      category: 'pricing',
      isPrimary: true,
      tag: 'Most Common',
      problem: 'Competitors change prices suddenly and steal sales before you can react.',
      solution: 'Track competitor price changes in real time and get instant alerts before Buy Box or sales are lost.',
      outcomes: ['Faster reactions', 'Protected margins', 'No panic discounting'],
      context: 'Common in price-sensitive categories',
      link: '/use-cases/track-competitor-prices',
      example: {
        insight: 'Competitor dropped price to ₹899 (was ₹1,299)',
        action: 'WhatsApp alert sent within 2 minutes',
        result: 'Seller adjusted price to ₹949 & retained Buy Box'
      },
      visual: '📊',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'find-profitable-products',
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Find Profitable Products',
      category: 'product',
      isPrimary: true,
      tag: 'Popular',
      problem: 'Launching products without knowing real demand leads to losses.',
      solution: 'Identify high-demand, low-competition product opportunities using real marketplace data.',
      outcomes: ['Smarter launches', 'Lower risk', 'Better margins'],
      context: 'Ideal for seasonal & festive sellers',
      link: '/use-cases/find-profitable-products',
      example: {
        insight: 'High demand keyword with 45% competition gap',
        action: 'Product opportunity score: 8.2/10',
        result: 'Launched with 3x margin vs. initial estimate'
      },
      visual: '🎯',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'improve-amazon-flipkart-seo',
      icon: <Search className="w-10 h-10" />,
      title: 'Improve Amazon & Flipkart SEO',
      category: 'seo',
      isPrimary: true,
      tag: 'Popular',
      problem: 'Your products don\'t rank for the keywords that actually drive sales.',
      solution: 'Track keyword rankings, discover competitor keywords, and optimise listings based on real data.',
      outcomes: ['Higher visibility', 'More organic sales', 'Faster SEO decisions'],
      context: 'Best for high-competition keywords',
      link: '/use-cases/improve-seo',
      example: {
        insight: 'Competitor ranking #3 for "wireless earbuds under 2000"',
        action: 'Title & backend keywords optimized',
        result: 'Moved from page 4 to page 1 in 2 weeks'
      },
      visual: '🔍',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'analyze-customer-reviews',
      icon: <Star className="w-10 h-10" />,
      title: 'Analyze Customer Reviews',
      category: 'product',
      problem: 'Thousands of reviews hide insights you don\'t have time to read.',
      solution: 'Analyse reviews at scale to uncover pain points, feature gaps, and improvement opportunities.',
      outcomes: ['Better ratings', 'Fewer returns', 'Smarter product improvements'],
      context: 'Critical for listings with 100+ reviews',
      link: '/use-cases/analyze-customer-reviews',
      example: {
        insight: '67% of 1-star reviews mention "charging cable quality"',
        action: 'Updated product with better cable',
        result: 'Rating improved from 3.8 to 4.4 stars'
      },
      visual: '⭐',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'avoid-stockouts-missed-sales',
      icon: <Package className="w-10 h-10" />,
      title: 'Avoid Stockouts & Missed Sales',
      category: 'inventory',
      problem: 'Stockouts during high demand kill momentum and rankings.',
      solution: 'Monitor demand signals, competitor stock status, and sales trends to plan inventory better.',
      outcomes: ['Fewer stockouts', 'Better inventory planning', 'Protected rankings'],
      context: 'Essential during festive & sale periods',
      link: '/use-cases/avoid-stockouts',
      example: {
        insight: 'Demand spike detected 5 days before Diwali',
        action: 'Early restock alert triggered',
        result: 'Zero stockouts during peak season'
      },
      visual: '📦',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const categories = [
    { id: 'pricing', label: 'Pricing & Competition', icon: <DollarSign className="w-4 h-4" />, color: 'from-orange-500 to-red-500' },
    { id: 'product', label: 'Product & Demand', icon: <TrendingUp className="w-4 h-4" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'seo', label: 'SEO & Visibility', icon: <Search className="w-4 h-4" />, color: 'from-purple-500 to-pink-500' },
    { id: 'inventory', label: 'Inventory & Operations', icon: <Package className="w-4 h-4" />, color: 'from-green-500 to-emerald-500' }
  ];

  const faqs = [
    {
      id: 'faq-1',
      question: 'Can I access multiple use cases on the free plan?',
      answer: 'Yes! The free plan gives you access to core features across multiple use cases so you can explore what works for your business before upgrading.'
    },
    {
      id: 'faq-2',
      question: 'Do these use cases work for Amazon India & Flipkart?',
      answer: 'Absolutely. Insydz is built specifically for Indian marketplaces including Amazon India and Flipkart.'
    },
    {
      id: 'faq-3',
      question: 'Are these separate tools or one platform?',
      answer: 'One unified platform. All use cases work together and share the same data, so insights flow seamlessly across different problems you\'re solving.'
    },
    {
      id: 'faq-4',
      question: 'Which use case should I start with?',
      answer: 'It depends on your situation: New sellers should start with Find Profitable Products. Active sellers benefit most from Track Competitor Prices. If you\'re struggling with visibility, start with SEO & Reviews.'
    },
    {
      id: 'faq-5',
      question: 'Can agencies use these use cases for clients?',
      answer: 'Yes! Many agencies use Insydz to manage multiple client accounts and deliver data-driven insights across all use cases.'
    },
    {
      id: 'faq-6',
      question: 'Which use case gives the fastest ROI?',
      answer: 'Track Competitor Prices typically delivers the fastest ROI as it helps you respond to market changes immediately and protect your margins.'
    },
    {
      id: 'faq-7',
      question: 'Do I need to use all use cases together?',
      answer: 'Not at all. Start with the problem that\'s most urgent for you. Many sellers begin with one use case and gradually add more as they grow.'
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
                  className="px-3 py-2 text-sm text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 font-semibold rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all flex items-center gap-1"
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
                        className="w-full px-4 py-3 text-left hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors flex items-center gap-3 group"
                      >
                        <span className="text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                          {item.icon}
                        </span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400">
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
                  className="flex items-center justify-between w-full px-4 py-2 text-orange-600 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg font-semibold"
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
                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg"
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
                <span className="text-sm font-medium text-orange-700">Built for Indian Sellers 🇮🇳</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
                How Sellers Use Insydz to
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
                  Make Better
                </span>
                <br />
                Decisions
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                From tracking competitors to avoiding stockouts, Insydz helps Indian sellers solve real, everyday marketplace problems — 
                <span className="text-orange-700 font-semibold"> not just analyse data.</span>
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
                  onClick={() => document.getElementById('use-cases-grid')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-600 text-orange-700 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-semibold px-8 py-6 text-lg rounded-full"
                >
                  Explore Use Cases →
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
                  <span>Real seller problems solved</span>
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
                  {/* Use Case Cards Preview */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-700 rounded-2xl p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">Track Competitor Prices</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Real-time alerts • Margin protection</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700 rounded-2xl p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">Find Profitable Products</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Demand analysis • Low competition</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 rounded-2xl p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Search className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">Improve SEO Rankings</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Keyword tracking • Listing optimization</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl px-4 py-2 shadow-xl">
                  <p className="text-white font-bold text-sm">5 Use Cases</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use Cases Matter */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              Different Problems.
              <br />
              <span className="text-orange-600 dark:text-orange-500">One Intelligence Platform.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <TrendingDown className="w-8 h-8" />,
                title: "Competitors change prices without warning",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Reviews hide critical product issues",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Search className="w-8 h-8" />,
                title: "Products don't rank for the right keywords",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Stockouts happen during peak demand",
                color: "from-green-500 to-emerald-500"
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
          <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 border-2 border-orange-400 dark:border-orange-600 rounded-3xl p-8 text-center shadow-lg">
            <AlertCircle className="w-12 h-12 text-orange-600 dark:text-orange-500 mx-auto mb-4" />
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Sellers don't wake up looking for <span className="text-orange-600 dark:text-orange-500">"features"</span>
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              They look for answers to specific problems. Insydz is designed around how sellers actually think and operate.
            </p>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-8 px-4 bg-white dark:bg-gray-950 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 font-semibold hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:border-orange-500 transition-all group"
              >
                <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${cat.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section id="use-cases-grid" className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              Explore Seller
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Use Cases</span>
            </h2>
          </div>

          <div className="space-y-8">
            {useCases.map((useCase) => (
              <div key={useCase.id} id={useCase.category}>
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-orange-400 hover:shadow-xl transition-all group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg`}>
                        {useCase.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{useCase.title}</h3>
                          {useCase.tag && (
                            <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                              {useCase.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-4">{useCase.context}</p>
                      </div>
                    </div>
                    <span className="text-4xl">{useCase.visual}</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Problem</p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{useCase.problem}</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">How Insydz Helps</p>
                      <p className="text-gray-900 dark:text-white font-medium leading-relaxed">{useCase.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-3">Key Outcomes</p>
                    <div className="flex flex-wrap gap-2">
                      {useCase.outcomes.map((outcome, i) => (
                        <span key={i} className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-300 dark:border-green-700 text-green-700 dark:text-green-400 rounded-xl text-sm font-semibold">
                          <CheckCircle2 className="w-4 h-4" /> {outcome}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* See Example Toggle */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <button
                      onClick={() => setExpandedCase(expandedCase === useCase.id ? null : useCase.id)}
                      className="flex items-center gap-2 text-orange-600 dark:text-orange-500 font-bold hover:text-orange-700 dark:hover:text-orange-400 transition-colors mb-4"
                    >
                      {expandedCase === useCase.id ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                      <span>See Real Example</span>
                    </button>

                    {expandedCase === useCase.id && (
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-2 border-orange-200 dark:border-orange-700 rounded-2xl p-6 mb-6">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Insight Detected</p>
                            <p className="text-sm text-gray-900 dark:text-white font-medium">{useCase.example.insight}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Action Taken</p>
                            <p className="text-sm text-gray-900 dark:text-white font-medium">{useCase.example.action}</p>
                          </div>
                          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-300 dark:border-green-700 rounded-xl p-4">
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Result</p>
                            <p className="text-sm font-bold text-green-700 dark:text-green-400">{useCase.example.result}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <Link href={useCase.link}>
                      <Button className="w-full md:w-auto bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white font-semibold py-6 px-8 rounded-xl group">
                        Learn More About This Use Case
                        <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where Should I Start Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <AlertCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              Not Sure Which
              <br />
              <span className="text-orange-600 dark:text-orange-500">Use Case to Start With?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here's what we recommend based on where you are in your seller journey:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "New Sellers",
                desc: "Start with Find Profitable Products to launch smart and avoid costly mistakes.",
                link: "/use-cases/find-profitable-products",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <DollarSign className="w-10 h-10" />,
                title: "Active Sellers",
                desc: "Track Competitor Prices to protect margins and respond to market changes instantly.",
                link: "/use-cases/track-competitor-prices",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: <Search className="w-10 h-10" />,
                title: "Struggling Listings",
                desc: "Improve SEO & Reviews to boost visibility and convert more browsers into buyers.",
                link: "/use-cases/improve-seo",
                color: "from-purple-500 to-pink-500"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-orange-400 hover:shadow-xl transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{item.desc}</p>
                <Link href={item.link}>
                  <Button variant="ghost" className="text-orange-600 dark:text-orange-500 hover:text-orange-700 font-semibold p-0 h-auto group">
                    Explore This Use Case
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group"
            >
              <span>👉</span> Start Free & Explore
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* How Use Cases Connect */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              Use Cases That
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Work Better Together</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Most sellers face more than one problem at the same time. Insydz connects insights across use cases so decisions are faster and clearer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                from: { icon: <TrendingUp className="w-6 h-6" />, text: "Profitable product", color: "blue" },
                to: { icon: <DollarSign className="w-6 h-6" />, text: "Price tracking", color: "orange" },
                desc: "Launch smart, then stay competitive",
                gradient: "from-blue-50 to-orange-50 dark:from-blue-900/20 dark:to-orange-900/20",
                border: "border-blue-200 dark:border-blue-700"
              },
              {
                from: { icon: <Star className="w-6 h-6" />, text: "Review issues", color: "purple" },
                to: { icon: <Search className="w-6 h-6" />, text: "SEO & listing fixes", color: "green" },
                desc: "Fix problems, improve visibility",
                gradient: "from-purple-50 to-green-50 dark:from-purple-900/20 dark:to-green-900/20",
                border: "border-purple-200 dark:border-purple-700"
              },
              {
                from: { icon: <BarChart3 className="w-6 h-6" />, text: "Demand spike", color: "green" },
                to: { icon: <Package className="w-6 h-6" />, text: "Inventory planning", color: "blue" },
                desc: "Catch trends before stockouts",
                gradient: "from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20",
                border: "border-green-200 dark:border-green-700"
              }
            ].map((item, i) => (
              <div key={i} className={`bg-gradient-to-br ${item.gradient} border-2 ${item.border} rounded-2xl p-8 hover:shadow-xl transition-all`}>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-xl flex items-center justify-center shadow-md">
                    {item.from.icon}
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                  <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-xl flex items-center justify-center shadow-md">
                    {item.to.icon}
                  </div>
                </div>
                <p className="text-gray-900 dark:text-white font-bold text-center mb-2">
                  {item.from.text} → {item.to.text}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-black mb-12 text-center text-gray-900 dark:text-white">
            Is Insydz <span className="text-orange-600 dark:text-orange-500">Right for You?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-300 dark:border-green-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Best For</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Active marketplace sellers',
                  'Competitive categories',
                  'Sellers making data-driven decisions'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-gray-700 dark:text-gray-300 text-2xl">⚠️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Not Ideal For</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'One-time sellers',
                  'Non-ecommerce businesses'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 text-gray-400 mt-0.5 flex-shrink-0 text-xl">•</span>
                    <span className="text-gray-600 dark:text-gray-400 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-black mb-12 text-center text-gray-900 dark:text-white">
            Use Cases – <span className="text-orange-600 dark:text-orange-500">FAQs</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="font-bold text-gray-900 dark:text-white pr-4 text-lg">{faq.question}</span>
                  {expandedFaq === faq.id ? (
                    <ChevronDown className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-5 bg-gray-50 dark:bg-gray-800">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
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
            Solve Real Seller Problems
            <br />
            <span className="text-orange-100">with Insydz</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Start with one use case. Expand as you grow.
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
              onClick={() => document.getElementById('use-cases-grid')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-orange-700 hover:bg-orange-800 text-white font-bold px-12 py-6 text-lg rounded-full border-2 border-orange-400"
            >
              Explore Features →
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
};

export default UseCasesPage;