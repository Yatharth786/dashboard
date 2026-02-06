

// import { useState, useEffect } from "react";
// import { useLocation } from "wouter";
// import { TrendingUp, Menu, X, Facebook, Twitter, Instagram, BarChart3, Zap, Shield, Mail, Phone, MapPin, Check, Crown, Building2, Sun, Moon } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function LandingPage() {
//   const [, setLocation] = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);


//   // Dark mode toggle
//   useEffect(() => {
//     const html = document.documentElement;
//     if (isDarkMode) {
//       html.classList.add("dark");
//     } else {
//       html.classList.remove("dark");
//     }
//   }, [isDarkMode]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleGetStarted = () => {
//     const user = localStorage.getItem('user');
//     if (user) {
//       setLocation("/dashboard");
//     } else {
//       setLocation("/login");
//     }
//   };

//   const handlePlanSelect = (planId: string) => {
//     const user = localStorage.getItem('user');
//     localStorage.setItem('selectedPlan', planId);

//     if (user) {
//       try {
//         const userData = JSON.parse(user);
//         userData.subscriptionTier = planId;
//         localStorage.setItem('user', JSON.stringify(userData));
//       } catch (error) {
//         console.error('Error updating user:', error);
//       }
//       window.location.href = '/dashboard';
//     } else {
//       setLocation("/login");
//     }
//   };

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-background dark:to-gray-900 overflow-hidden">
//       {/* Navigation */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
//   <div className="relative">
//     <img 
//       src="/logo.png" 
//       alt="Insydz Logo" 
//       className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain"
//     />
//     <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
//   </div>
//   <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//     Insydz
//   </span>
// </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-4">
//               <button onClick={() => scrollToSection('home')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">home</button>
//               <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">about</button>
//               <button onClick={() => scrollToSection('work')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">work</button>
//               <button onClick={() => scrollToSection('subscription')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">subscription</button>

//               <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">contact</Button>

//               {/* Dark Mode Toggle */}
//               <button 
//                 className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
//                 onClick={() => setIsDarkMode(!isDarkMode)}
//               >
//                 {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400"/> : <Moon className="w-5 h-5 text-gray-800"/>}
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
//             <div className="px-4 py-4 space-y-3">
//               <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">home</button>
//               <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">about</button>
//               <button onClick={() => scrollToSection('work')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">work</button>
//               <button onClick={() => scrollToSection('subscription')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">subscription</button>
//               <Button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-pink-500 to-rose-500">contact</Button>

//               {/* Mobile Dark Mode Toggle */}
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
// <section
//   id="home"
//   className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-background dark:to-gray-900 overflow-hidden"
// >
//   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center justify-center space-y-6 mt-20">
//     {/* Tagline */}
//     <p className="text-gray-600 dark:text-gray-400 text-lg font-medium tracking-wide">
//       Intelligent and Responsive
//     </p>

//     {/* Main Heading */}
//     <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
//       Data-Driven
//       <br />
//       <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
//         Analytics
//       </span>
//     </h1>

//     {/* Subheading */}
//     <p className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-700 dark:text-gray-300">
//       Smart & Powerful
//     </p>

//     {/* Call to Action */}
//     <Button
//       onClick={handleGetStarted}
//       size="lg"
//       className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105"
//     >
//       Get Started
//     </Button>

//     {/* Stats */}
//     <div className="grid grid-cols-3 gap-6 pt-8 text-center">
//       <div className="space-y-1">
//         <div className="text-3xl font-bold text-purple-600">500K+</div>
//         <div className="text-sm text-gray-600 dark:text-gray-400">
//           Reviews Analyzed
//         </div>
//       </div>
//       <div className="space-y-1">
//         <div className="text-3xl font-bold text-pink-600">98%</div>
//         <div className="text-sm text-gray-600 dark:text-gray-400">
//           Accuracy Rate
//         </div>
//       </div>
//       <div className="space-y-1">
//         <div className="text-3xl font-bold text-rose-600">24/7</div>
//         <div className="text-sm text-gray-600 dark:text-gray-400">
//           Real-time Data
//         </div>
//       </div>
//     </div>

//     {/* Trusted by Businesses */}
//     <div className="pt-12 max-w-2xl">
//       <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
//         Trusted by Businesses
//       </p>
//       <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
//         Join thousands of businesses making smarter decisions with our analytics platform
//       </p>
//     </div>
//   </div>
// </section>

//       {/* About Section */}
//       <section id="about" className="py-24 bg-white/50 dark:bg-gray-800/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               We're democratizing e-commerce intelligence by making advanced analytics and AI-powered insights accessible to businesses of all sizes
//             </p>
//           </div>

//           {/* Mission Statement */}
//           <div className="mb-16 max-w-4xl mx-auto">
//             <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl text-center border border-purple-200 dark:border-purple-800">
//               <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 To democratize e-commerce intelligence by making advanced analytics and AI-powered insights accessible to businesses of all sizes, helping them compete and thrive in the digital marketplace.
//               </p>
//             </div>
//           </div>

//           {/* Features Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <BarChart3 className="w-10 h-10" />,
//                 title: "AI-Powered Analytics",
//                 desc: "Advanced machine learning algorithms analyze millions of data points to provide actionable insights",
//                 color: "from-blue-500 to-blue-600",
//               },
//               {
//                 icon: <Zap className="w-10 h-10" />,
//                 title: "Real-Time Insights",
//                 desc: "Get instant updates on market trends, competitor pricing, and product performance",
//                 color: "from-green-500 to-green-600",
//               },
//               {
//                 icon: <Shield className="w-10 h-10" />,
//                 title: "Secure & Private",
//                 desc: "Enterprise-grade security and encrypted storage. We never share your information",
//                 color: "from-orange-500 to-orange-600",
//               },
//               {
//                 icon: <TrendingUp className="w-10 h-10" />,
//                 title: "Multi-Platform Support",
//                 desc: "Aggregate data from Amazon, Flipkart, and Shopify for comprehensive analysis",
//                 color: "from-purple-500 to-purple-600",
//               },
//             ].map((feature, i) => (
//               <div
//                 key={i}
//                 className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
//               >
//                 <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
//               </div>
//             ))}
//           </div>

//           {/* Values Section */}
//           <div className="mt-20">
//             <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   icon: <Zap className="w-8 h-8 text-yellow-500" />,
//                   title: "Innovation",
//                   desc: "We constantly push the boundaries of what's possible with AI and data analytics",
//                 },
//                 {
//                   icon: <Shield className="w-8 h-8 text-blue-500" />,
//                   title: "Transparency",
//                   desc: "We believe in clear, honest communication and transparent business practices",
//                 },
//                 {
//                   icon: <BarChart3 className="w-8 h-8 text-green-500" />,
//                   title: "Customer Success",
//                   desc: "Your success is our success. We're dedicated to helping you achieve your goals",
//                 },
//               ].map((value, i) => (
//                 <div key={i} className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
//                   <div className="flex justify-center mb-4">{value.icon}</div>
//                   <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
//                   <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Work Section */}
//       <section id="work" className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Work</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Powering data-driven decisions for businesses worldwide
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               { stat: "500K+", label: "Reviews Processed Daily" },
//               { stat: "98%", label: "Accuracy in Sentiment Analysis" },
//               { stat: "1000+", label: "Active Business Users" },
//               { stat: "50+", label: "Product Categories Covered" },
//             ].map((item, i) => (
//               <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform">
//                 <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
//                   {item.stat}
//                 </div>
//                 <div className="text-gray-600 dark:text-gray-400 text-lg">{item.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Subscription Plans Section */}
//       <section id="subscription" className="py-24 bg-white dark:bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Subscription</span>
//             </h2>
//             <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
//               Choose a plan and get started instantly
//             </p>
//             <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Turn data into decisions with our powerful, business-ready insights
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {/* Free Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
//                   <Zap className="h-7 w-7 text-blue-600 dark:text-blue-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Free</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹0</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Perfect for getting started</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Basic dashboard access</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">100 product tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Basic AI insights</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Weekly reports</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('free')}
//                 variant="outline" 
//                 className="w-full"
//               >
//                 Get Started
//               </Button>
//             </div>

//             {/* Basic Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-purple-500 relative">
//               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                 <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
//                   Popular
//                 </span>
//               </div>
              
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
//                   <Crown className="h-7 w-7 text-purple-600 dark:text-purple-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Basic</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹499</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Ideal for growing businesses</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Free features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">1,000 product tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Advanced AI insights</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Daily reports</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('basic')}
//                 className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
//               >
//                 Upgrade to Basic
//               </Button>
//             </div>

//             {/* Premium Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
//                   <Crown className="h-7 w-7 text-yellow-600 dark:text-yellow-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Premium</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹1999</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">For serious professionals</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Basic features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Unlimited product tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Advanced AI chatbot</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Real-time data & alerts</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('premium')}
//                 className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
//               >
//                 Upgrade to Premium
//               </Button>
//             </div>

//             {/* Enterprise Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
//                   <Building2 className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Enterprise</h3>
//               <div className="text-center mb-4">
//                 <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Custom</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Tailored for SMBs</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Premium features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Dedicated account manager</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Custom integrations</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">24/7 premium support</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('enterprise')}
//                 variant="outline"
//                 className="w-full"
//               >
//                 Contact Sales
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <h2 className="text-4xl md:text-5xl font-bold">
//                 Let's Get Started
//               </h2>
//               <p className="text-xl text-white/90">
//                 Ready to transform your business with data-driven insights? Join us today!
//               </p>
//               <Button
//                 onClick={handleGetStarted}
//                 size="lg"
//                 className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-12 py-6 text-lg rounded-full shadow-2xl"
//               >
//                 Start Free Trial
//               </Button>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <Mail className="w-6 h-6" />
//                 <span className="text-lg">contact@analytics.com</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Phone className="w-6 h-6" />
//                 <span className="text-lg">+91 98765 43210</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <MapPin className="w-6 h-6" />
//                 <span className="text-lg">Mumbai, Maharashtra, India</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 dark:bg-black text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8 mb-8">
//             <div>
//               <div className="flex items-center space-x-3 mb-4">
//   <img 
//     src="/logo.png" 
//     alt="Insydz Logo" 
//     className="w-10 h-10 rounded-xl object-contain"
//   />
//   <span className="text-lg font-bold">Analytics Platform</span>
// </div>
//               <p className="text-gray-400">
//                 Empowering businesses with intelligent data analytics
//               </p>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Quick Links</h4>
//               <div className="space-y-2">
//                 <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">About</button>
//                 <button onClick={() => scrollToSection('work')} className="block text-gray-400 hover:text-white transition-colors">Work</button>
//                 <button onClick={() => scrollToSection('subscription')} className="block text-gray-400 hover:text-white transition-colors">Subscription</button>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Connect</h4>
//               <div className="flex space-x-4">
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
//                   <Facebook className="w-5 h-5" />
//                 </div>
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
//                   <Twitter className="w-5 h-5" />
//                 </div>
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
//                   <Instagram className="w-5 h-5" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8 text-center">
//             <p className="text-gray-400">
//               © 2024 <span className="text-purple-400 font-bold">Insydz</span>
//             </p>
//             <p className="text-gray-500 text-sm mt-2">
//               Designed & Developed in India
//             </p>
//           </div>
//         </div>
//       </footer>

//       <style>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 1s ease-out;
//         }
//         .delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { useLocation } from "wouter";
// import { TrendingUp, Menu, X, Facebook, Twitter, Instagram, BarChart3, Zap, Shield, Mail, Phone, MapPin, Check, Crown, Building2, Sun, Moon } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function LandingPage() {
//   const [, setLocation] = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const html = document.documentElement;
//     if (isDarkMode) {
//       html.classList.add("dark");
//     } else {
//       html.classList.remove("dark");
//     }
//   }, [isDarkMode]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleGetStarted = () => {
//     const user = localStorage.getItem('user');
//     if (user) {
//       setLocation("/dashboard");
//     } else {
//       setLocation("/login");
//     }
//   };

//   const handlePlanSelect = (planId: string) => {
//     const user = localStorage.getItem('user');
//     localStorage.setItem('selectedPlan', planId);

//     if (user) {
//       try {
//         const userData = JSON.parse(user);
//         userData.subscriptionTier = planId;
//         localStorage.setItem('user', JSON.stringify(userData));
//       } catch (error) {
//         console.error('Error updating user:', error);
//       }
//       window.location.href = '/dashboard';
//     } else {
//       setLocation("/login");
//     }
//   };

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-background dark:to-gray-900 overflow-hidden">
//       {/* Navigation */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
//               <div className="relative">
//                 <img 
//                   src="/logo.png" 
//                   alt="Insydz Logo" 
//                   className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain"
//                 />
//                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 Insydz
//               </span>
//             </div>

//             <div className="hidden md:flex items-center space-x-4">
//               <button onClick={() => scrollToSection('home')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">home</button>
//               <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">about</button>
//               <button onClick={() => scrollToSection('work')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">work</button>
//               <button onClick={() => scrollToSection('subscription')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">subscription</button>
//               <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">contact</Button>
//               <button 
//                 className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
//                 onClick={() => setIsDarkMode(!isDarkMode)}
//               >
//                 {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400"/> : <Moon className="w-5 h-5 text-gray-800"/>}
//               </button>
//             </div>

//             <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
//             <div className="px-4 py-4 space-y-3">
//               <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">home</button>
//               <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">about</button>
//               <button onClick={() => scrollToSection('work')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">work</button>
//               <button onClick={() => scrollToSection('subscription')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">subscription</button>
//               <Button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-pink-500 to-rose-500">contact</Button>
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
//       <section
//         id="home"
//         className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-background dark:to-gray-900 overflow-hidden"
//       >
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center justify-center space-y-6 mt-20">
//           <p className="text-gray-600 dark:text-gray-400 text-lg font-medium tracking-wide">
//             Intelligent and Responsive
//           </p>

//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
//             Data-Driven
//             <br />
//             <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
//               Analytics
//             </span>
//           </h1>

//           <p className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-700 dark:text-gray-300">
//             Smart & Powerful
//           </p>

//           <Button
//             onClick={handleGetStarted}
//             size="lg"
//             className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105"
//           >
//             Get Started
//           </Button>

//           <div className="grid grid-cols-3 gap-6 pt-8 text-center">
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-purple-600">500K+</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Reviews Analyzed
//               </div>
//             </div>
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-pink-600">98%*</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Accuracy Rate
//               </div>
//             </div>
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-rose-600">24/7</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Real-time Data
//               </div>
//             </div>
//           </div>

//           <div className="pt-12 max-w-2xl">
//             <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
//               Trusted by Businesses
//             </p>
//             <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
//               Join thousands of businesses making smarter decisions with our analytics platform
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-24 bg-white/50 dark:bg-gray-800/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               We aim to democratize e-commerce intelligence by making advanced analytics and AI-powered insights accessible to businesses of all sizes
//             </p>
//           </div>

//           <div className="mb-16 max-w-4xl mx-auto">
//             <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl text-center border border-purple-200 dark:border-purple-800">
//               <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 To democratize e-commerce intelligence by making advanced analytics and AI-powered insights accessible to businesses of all sizes, helping them compete and thrive in the digital marketplace.
//               </p>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <BarChart3 className="w-10 h-10" />,
//                 title: "AI-Powered Analytics",
//                 desc: "Machine learning algorithms designed to analyze data points and provide insights for business decisions",
//                 color: "from-blue-500 to-blue-600",
//               },
//               {
//                 icon: <Zap className="w-10 h-10" />,
//                 title: "Real-Time Insights",
//                 desc: "Access updates on market trends, competitor pricing, and product performance as data becomes available",
//                 color: "from-green-500 to-green-600",
//               },
//               {
//                 icon: <Shield className="w-10 h-10" />,
//                 title: "Secure & Private",
//                 desc: "Industry-standard security measures and encrypted storage to protect your business information",
//                 color: "from-orange-500 to-orange-600",
//               },
//               {
//                 icon: <TrendingUp className="w-10 h-10" />,
//                 title: "Multi-Platform Support",
//                 desc: "Aggregate data from multiple e-commerce platforms for comprehensive market analysis",
//                 color: "from-purple-500 to-purple-600",
//               },
//             ].map((feature, i) => (
//               <div
//                 key={i}
//                 className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
//               >
//                 <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-20">
//             <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   icon: <Zap className="w-8 h-8 text-yellow-500" />,
//                   title: "Innovation",
//                   desc: "We strive to push the boundaries of what's possible with AI and data analytics technology",
//                 },
//                 {
//                   icon: <Shield className="w-8 h-8 text-blue-500" />,
//                   title: "Transparency",
//                   desc: "We believe in clear, honest communication and transparent business practices with our users",
//                 },
//                 {
//                   icon: <BarChart3 className="w-8 h-8 text-green-500" />,
//                   title: "Customer Success",
//                   desc: "We're dedicated to supporting our customers in achieving their business objectives",
//                 },
//               ].map((value, i) => (
//                 <div key={i} className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
//                   <div className="flex justify-center mb-4">{value.icon}</div>
//                   <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
//                   <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Work Section */}
//       <section id="work" className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Work</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Supporting data-driven decisions for businesses worldwide
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               { stat: "500K+", label: "Reviews Processed Daily*" },
//               { stat: "98%", label: "Typical Accuracy in Sentiment Analysis*" },
//               { stat: "1000+", label: "Active Business Users" },
//               { stat: "50+", label: "Product Categories Covered" },
//             ].map((item, i) => (
//               <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform">
//                 <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
//                   {item.stat}
//                 </div>
//                 <div className="text-gray-600 dark:text-gray-400 text-lg">{item.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Subscription Plans Section */}
//       <section id="subscription" className="py-24 bg-white dark:bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Subscription Plans</span>
//             </h2>
//             <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
//               Choose a plan that fits your business needs
//             </p>
//             <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Transform data into actionable insights with our analytics platform
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {/* Free Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
//                   <Zap className="h-7 w-7 text-blue-600 dark:text-blue-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Free</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹0</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Perfect for getting started</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Basic dashboard access</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Up to 100 products tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Basic AI insights</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Weekly reports</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('free')}
//                 variant="outline" 
//                 className="w-full"
//               >
//                 Get Started
//               </Button>
//             </div>

//             {/* Basic Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-purple-500 relative">
//               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                 <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
//                   Popular
//                 </span>
//               </div>
              
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
//                   <Crown className="h-7 w-7 text-purple-600 dark:text-purple-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Basic</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹499</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Ideal for growing businesses</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Free plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Up to 1,000 products tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Advanced AI insights</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Daily reports</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('basic')}
//                 className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
//               >
//                 Upgrade to Basic
//               </Button>
//             </div>

//             {/* Premium Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
//                   <Crown className="h-7 w-7 text-yellow-600 dark:text-yellow-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Premium</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹1999</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">For serious professionals</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Basic plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Unlimited product tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Advanced AI chatbot access</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Real-time data & alerts</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('premium')}
//                 className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
//               >
//                 Upgrade to Premium
//               </Button>
//             </div>

//             {/* Enterprise Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
//                   <Building2 className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Enterprise</h3>
//               <div className="text-center mb-4">
//                 <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Custom Pricing</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Tailored for SMBs</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Premium plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Dedicated account manager</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Custom integrations available</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Priority support</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('enterprise')}
//                 variant="outline"
//                 className="w-full"
//               >
//                 Contact Sales
//               </Button>
//             </div>
//           </div>

//           {/* Subscription Disclaimer */}
//           <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
//             <p className="text-xs text-center text-gray-500 dark:text-gray-400 max-w-4xl mx-auto">
//               <strong>Subscription Terms:</strong> All subscription plans are billed monthly and can be cancelled at any time. Features and pricing are subject to change with prior notice. By subscribing, you agree to our Terms of Service and Privacy Policy. Refunds are available within 7 days of initial purchase only. Free trial (if applicable) is limited to one per customer. Premium features may have additional usage limits as specified in the plan details.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <h2 className="text-4xl md:text-5xl font-bold">
//                 Let's Get Started
//               </h2>
//               <p className="text-xl text-white/90">
//                 Ready to explore data-driven insights for your business? Join us today!
//               </p>
//               <Button
//                 onClick={handleGetStarted}
//                 size="lg"
//                 className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-12 py-6 text-lg rounded-full shadow-2xl"
//               >
//                 Start Free Trial
//               </Button>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <Mail className="w-6 h-6" />
//                 <span className="text-lg">contact@insydz.com</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Phone className="w-6 h-6" />
//                 <span className="text-lg">+91 98765 43210</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <MapPin className="w-6 h-6" />
//                 <span className="text-lg">New Delhi, India</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 dark:bg-black text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8 mb-8">
//             <div>
//               <div className="flex items-center space-x-3 mb-4">
//                 <img 
//                   src="/logo.png" 
//                   alt="Insydz Logo" 
//                   className="w-10 h-10 rounded-xl object-contain"
//                 />
//                 <span className="text-lg font-bold">Insydz Analytics</span>
//               </div>
//               <p className="text-gray-400">
//                 Supporting businesses with intelligent data analytics solutions
//               </p>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Quick Links</h4>
//               <div className="space-y-2">
//                 <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">About</button>
//                 <button onClick={() => scrollToSection('work')} className="block text-gray-400 hover:text-white transition-colors">Work</button>
//                 <button onClick={() => scrollToSection('subscription')} className="block text-gray-400 hover:text-white transition-colors">Subscription</button>
//                 <a href="/terms-service" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
//                 <a href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Connect</h4>
//               <div className="flex space-x-4">
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
//                   <Facebook className="w-5 h-5" />
//                 </div>
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
//                   <Twitter className="w-5 h-5" />
//                 </div>
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
//                   <Instagram className="w-5 h-5" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8">
//             <div className="text-center mb-6">
//               <p className="text-gray-400 mb-2">
//                 © 2025 <span className="text-purple-400 font-bold">Insydz</span>. All rights reserved.
//               </p>
//               <p className="text-gray-500 text-sm">
//                 Designed & Developed in India
//               </p>
//             </div>

//             {/* Legal Disclaimer Section */}
//             <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-gray-800">
//               <div className="flex items-center justify-center space-x-2 mb-6">
//               {/* AlertTriangle icon from lucide-react adds visual weight */}
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 width="20" 
//                 height="20" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 strokeWidth="2" 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 className="text-amber-500"
//               >
//                 <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
//                 <line x1="12" x2="12" y1="9" y2="13" />
//                 <line x1="12" x2="12.01" y1="17" y2="17" />
//               </svg>
//               <h5 className="text-sm font-bold text-gray-200 uppercase tracking-wider">
//                 Important Legal Disclosures
//               </h5>
//             </div>

//             <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-800">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <h6 className="text-xs font-bold text-gray-300 mb-2">No Professional Advice</h6>
//                   <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                     The analytics, insights, and forecasts provided are for informational purposes only. They should not be construed as professional financial, investment, or legal advice.
//                   </p>

//                   <h6 className="text-xs font-bold text-gray-300 mb-2">Data Accuracy</h6>
//                   <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                     While we strive for precision, our AI algorithms depend on market conditions and third-party sources. We cannot guarantee 100% accuracy in all scenarios.
//                   </p>
//                 </div>

//                 <div>
//                   <h6 className="text-xs font-bold text-gray-300 mb-2">Limitation of Liability</h6>
//                   <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                     Insydz is not liable for business losses, lost profits, or decisions made based on our data. Users assume full responsibility for their business strategies.
//                   </p>
//                   <h6 className="text-xs font-bold text-gray-300 mb-2">Jurisdiction</h6>
//          <p className="text-xs text-gray-500 leading-relaxed">
//                     Disputes are governed by the laws of India and subject to the exclusive jurisdiction of courts in New Delhi.
//                   </p>
//                 </div>
//               </div>
//             </div>
//     <p className="text-[10px] text-gray-600 mt-4 text-center border-t border-gray-700/50 pt-4">
//       *Statistics and accuracy rates mentioned on this page are approximate and based on internal testing. Actual results may vary.
//     </p>
//   </div>
// </div>
//         </div>
//       </footer>

//       <style>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 1s ease-out;
//         }
//         .delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </div>
//   );
// }








// import { useState, useEffect } from "react";
// import { useLocation } from "wouter";
// import { TrendingUp, Menu, X, Facebook, Twitter, Instagram, BarChart3, Zap, Shield, Mail, Phone, MapPin, Check, Crown, Building2, Sun, Moon, Trophy, Target, DollarSign, Globe, BookOpen, Video, FileText, Users, Presentation } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function LandingPage() {
//   const [, setLocation] = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const html = document.documentElement;
//     if (isDarkMode) {
//       html.classList.add("dark");
//     } else {
//       html.classList.remove("dark");
//     }
//   }, [isDarkMode]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleGetStarted = () => {
//     const user = localStorage.getItem('user');
//     if (user) {
//       setLocation("/dashboard");
//     } else {
//       setLocation("/login");
//     }
//   };

//   const handlePlanSelect = (planId: string) => {
//     const user = localStorage.getItem('user');
//     localStorage.setItem('selectedPlan', planId);

//     if (user) {
//       try {
//         const userData = JSON.parse(user);
//         userData.subscriptionTier = planId;
//         localStorage.setItem('user', JSON.stringify(userData));
//       } catch (error) {
//         console.error('Error updating user:', error);
//       }
//       window.location.href = '/dashboard';
//     } else {
//       setLocation("/login");
//     }
//   };

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-background dark:to-gray-900 overflow-hidden">
//       {/* Navigation */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('Home')}>
//               <div className="relative">
//                 <img 
//                   src="/logo.png" 
//                   alt="Insydz Logo" 
//                   className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain"
//                 />
//                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 Insydz
//               </span>
//             </div>

//             <div className="hidden md:flex items-center space-x-4">
//               <button onClick={() => scrollToSection('Home')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Home</button>
//               <button onClick={() => scrollToSection('Compare')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Compare</button>
//               <button onClick={() => scrollToSection('Resources')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Resources</button>
//               <button onClick={() => scrollToSection('About')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">About</button>
//               <button onClick={() => scrollToSection('Work')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Work</button>
//               <button onClick={() => scrollToSection('Subscription')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Subscription</button>
//               <Button onClick={() => scrollToSection('Contact')} className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">Contact</Button>
//               <button 
//                 className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
//                 onClick={() => setIsDarkMode(!isDarkMode)}
//               >
//                 {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400"/> : <Moon className="w-5 h-5 text-gray-800"/>}
//               </button>
//             </div>

//             <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
//             <div className="px-4 py-4 space-y-3">
//               <button onClick={() => scrollToSection('Home')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Home</button>
//               <button onClick={() => scrollToSection('Compare')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Compare</button>
//               <button onClick={() => scrollToSection('Resources')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Resources</button>
//               <button onClick={() => scrollToSection('About')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">About</button>
//               <button onClick={() => scrollToSection('Work')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Work</button>
//               <button onClick={() => scrollToSection('Subscription')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Subscription</button>
//               <Button onClick={() => scrollToSection('Contact')} className="w-full bg-gradient-to-r from-pink-500 to-rose-500">Contact</Button>
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
//       <section
//         id="Home"
//         className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-background dark:to-gray-900 overflow-hidden"
//       >
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center justify-center space-y-6 mt-20">
//           <p className="text-gray-600 dark:text-gray-400 text-lg font-medium tracking-wide">
//             Intelligent and Responsive
//           </p>

//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
//             Data-Driven
//             <br />
//             <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
//               Analytics
//             </span>
//           </h1>

//           <p className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-700 dark:text-gray-300">
//             Smart & Powerful
//           </p>

//           <Button
//             onClick={handleGetStarted}
//             size="lg"
//             className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105"
//           >
//             Get Started
//           </Button>

//           <div className="grid grid-cols-3 gap-6 pt-8 text-center">
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-purple-600">500K+</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Reviews Analyzed
//               </div>
//             </div>
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-pink-600">98%*</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Accuracy Rate
//               </div>
//             </div>
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-rose-600">24/7</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Real-time Data
//               </div>
//             </div>
//           </div>

//           <div className="pt-12 max-w-2xl">
//             <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
//               Trusted by Businesses
//             </p>
//             <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
//               Join thousands of businesses making smarter decisions with our analytics platform
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Compare Section - NEW */}
//       <section id="Compare" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Why Sellers Choose <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               See how Insydz stacks up against the competition
//             </p>
//           </div>

//           {/* Key Advantages */}
//           <div className="grid md:grid-cols-4 gap-6 mb-16">
//             {[
//               { icon: <Target className="w-8 h-8" />, text: "Easier to use", color: "from-blue-500 to-blue-600" },
//               { icon: <Zap className="w-8 h-8" />, text: "Better AI insights", color: "from-purple-500 to-purple-600" },
//               { icon: <DollarSign className="w-8 h-8" />, text: "More affordable", color: "from-green-500 to-green-600" },
//               { icon: <Globe className="w-8 h-8" />, text: "Built for Indian + Global sellers", color: "from-orange-500 to-orange-600" },
//             ].map((item, i) => (
//               <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white`}>
//                   {item.icon}
//                 </div>
//                 <p className="font-semibold text-gray-800 dark:text-white">{item.text}</p>
//               </div>
//             ))}
//           </div>

//           {/* Comparison Cards */}
//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Insydz vs Helium 10 */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-purple-200 dark:border-purple-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Insydz</h3>
//                     <p className="text-sm text-gray-500">vs Helium 10</p>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Better India & Flipkart support</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">More affordable pricing</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Simpler interface</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Insydz vs Jungle Scout */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-blue-200 dark:border-blue-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Insydz</h3>
//                     <p className="text-sm text-gray-500">vs Jungle Scout</p>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Multi-marketplace support</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Real-time competitor tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">AI-powered insights</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Insydz vs Viral Launch */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-green-200 dark:border-green-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Insydz</h3>
//                     <p className="text-sm text-gray-500">vs Viral Launch</p>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Better for agencies</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">More accurate data</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Local market expertise</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="text-center mt-12">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-10 py-6 text-lg rounded-full shadow-xl"
//             >
//               Start Free Trial
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Resources Section - NEW */}
//       <section id="Resources" className="py-24 bg-white dark:bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Learn & Grow With <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Access free resources to level up your e-commerce game
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Blog */}
//             <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-blue-200 dark:border-blue-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
//                 <BookOpen className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Blog</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Latest insights on e-commerce strategy
//               </p>
//               <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
//                 Read Articles →
//               </button>
//             </div>

//             {/* Case Studies */}
//             <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-purple-200 dark:border-purple-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
//                 <FileText className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Case Studies</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Real success stories from our users
//               </p>
//               <button className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
//                 View Stories →
//               </button>
//             </div>

//             {/* Video Tutorials */}
//             <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-pink-200 dark:border-pink-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
//                 <Video className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Video Tutorials</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Step-by-step guides to master Insydz
//               </p>
//               <button className="text-pink-600 dark:text-pink-400 font-semibold hover:underline">
//                 Watch Now →
//               </button>
//             </div>

//             {/* E-commerce Guides */}
//             <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-green-200 dark:border-green-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
//                 <BookOpen className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">E-commerce Guides</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Deep-dive resources for growth
//               </p>
//               <button className="text-green-600 dark:text-green-400 font-semibold hover:underline">
//                 Explore Guides →
//               </button>
//             </div>

//             {/* Webinars */}
//             <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-orange-200 dark:border-orange-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
//                 <Presentation className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Webinars</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Live sessions with industry experts
//               </p>
//               <button className="text-orange-600 dark:text-orange-400 font-semibold hover:underline">
//                 Join Sessions →
//               </button>
//             </div>

//             {/* Community */}
//             <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-indigo-200 dark:border-indigo-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
//                 <Users className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Community</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Connect with fellow sellers
//               </p>
//               <button className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
//                 Join Community →
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="About" className="py-24 bg-white/50 dark:bg-gray-800/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               We aim to democratize e-commerce intelligence by making advanced analytics and AI-powered insights accessible to businesses of all sizes
//             </p>
//           </div>

//           <div className="mb-16 max-w-4xl mx-auto">
//             <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl text-center border border-purple-200 dark:border-purple-800">
//               <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 To democratize e-commerce intelligence by making advanced analytics and AI-powered insights accessible to businesses of all sizes, helping them compete and thrive in the digital marketplace.
//               </p>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <BarChart3 className="w-10 h-10" />,
//                 title: "AI-Powered Analytics",
//                 desc: "Machine learning algorithms designed to analyze data points and provide insights for business decisions",
//                 color: "from-blue-500 to-blue-600",
//               },
//               {
//                 icon: <Zap className="w-10 h-10" />,
//                 title: "Real-Time Insights",
//                 desc: "Access updates on market trends, competitor pricing, and product performance as data becomes available",
//                 color: "from-green-500 to-green-600",
//               },
//               {
//                 icon: <Shield className="w-10 h-10" />,
//                 title: "Secure & Private",
//                 desc: "Industry-standard security measures and encrypted storage to protect your business information",
//                 color: "from-orange-500 to-orange-600",
//               },
//               {
//                 icon: <TrendingUp className="w-10 h-10" />,
//                 title: "Multi-Platform Support",
//                 desc: "Aggregate data from multiple e-commerce platforms for comprehensive market analysis",
//                 color: "from-purple-500 to-purple-600",
//               },
//             ].map((feature, i) => (
//               <div
//                 key={i}
//                 className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
//               >
//                 <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-20">
//             <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   icon: <Zap className="w-8 h-8 text-yellow-500" />,
//                   title: "Innovation",
//                   desc: "We strive to push the boundaries of what's possible with AI and data analytics technology",
//                 },
//                 {
//                   icon: <Shield className="w-8 h-8 text-blue-500" />,
//                   title: "Transparency",
//                   desc: "We believe in clear, honest communication and transparent business practices with our users",
//                 },
//                 {
//                   icon: <BarChart3 className="w-8 h-8 text-green-500" />,
//                   title: "Customer Success",
//                   desc: "We're dedicated to supporting our customers in achieving their business objectives",
//                 },
//               ].map((value, i) => (
//                 <div key={i} className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
//                   <div className="flex justify-center mb-4">{value.icon}</div>
//                   <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
//                   <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Work Section */}
//       <section id="Work" className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Work</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Supporting data-driven decisions for businesses worldwide
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               { stat: "500K+", label: "Reviews Processed Daily*" },
//               { stat: "98%", label: "Typical Accuracy in Sentiment Analysis*" },
//               { stat: "1000+", label: "Active Business Users" },
//               { stat: "50+", label: "Product Categories Covered" },
//             ].map((item, i) => (
//               <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform">
//                 <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
//                   {item.stat}
//                 </div>
//                 <div className="text-gray-600 dark:text-gray-400 text-lg">{item.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Subscription Plans Section */}
//       <section id="Subscription" className="py-24 bg-white dark:bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Subscription Plans</span>
//             </h2>
//             <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
//               Choose a plan that fits your business needs
//             </p>
//             <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Transform data into actionable insights with our analytics platform
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {/* Free Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
//                   <Zap className="h-7 w-7 text-blue-600 dark:text-blue-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Free</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹0</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Perfect for getting started</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Basic dashboard access</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Up to 100 products tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Basic AI insights</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Weekly reports</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('free')}
//                 variant="outline" 
//                 className="w-full"
//               >
//                 Get Started
//               </Button>
//             </div>

//             {/* Basic Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-purple-500 relative">
//               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                 <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
//                   Popular
//                 </span>
//               </div>
              
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
//                   <Crown className="h-7 w-7 text-purple-600 dark:text-purple-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Basic</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹499</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Ideal for growing businesses</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Free plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Up to 1,000 products tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Advanced AI insights</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Daily reports</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('basic')}
//                 className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
//               >
//                 Upgrade to Basic
//               </Button>
//             </div>

//             {/* Premium Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
//                   <Crown className="h-7 w-7 text-yellow-600 dark:text-yellow-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Premium</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹1999</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">For serious professionals</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Basic plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Unlimited product tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Advanced AI chatbot access</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Real-time data & alerts</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('premium')}
//                 className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
//               >
//                 Upgrade to Premium
//               </Button>
//             </div>

//             {/* Enterprise Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
//                   <Building2 className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Enterprise</h3>
//               <div className="text-center mb-4">
//                 <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Custom Pricing</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Tailored for SMBs</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Premium plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Dedicated account manager</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Custom integrations available</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Priority support</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('enterprise')}
//                 variant="outline"
//                 className="w-full"
//               >
//                 Contact Sales
//               </Button>
//             </div>
//           </div>

//           {/* Subscription Disclaimer */}
//           <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
//             <p className="text-xs text-center text-gray-500 dark:text-gray-400 max-w-4xl mx-auto">
//               <strong>Subscription Terms:</strong> All subscription plans are billed monthly and can be cancelled at any time. Features and pricing are subject to change with prior notice. By subscribing, you agree to our Terms of Service and Privacy Policy. Refunds are available within 7 days of initial purchase only. Free trial (if applicable) is limited to one per customer. Premium features may have additional usage limits as specified in the plan details.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="Contact" className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <h2 className="text-4xl md:text-5xl font-bold">
//                 Let's Get Started
//               </h2>
//               <p className="text-xl text-white/90">
//                 Ready to explore data-driven insights for your business? Join us today!
//               </p>
//               <Button
//                 onClick={handleGetStarted}
//                 size="lg"
//                 className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-12 py-6 text-lg rounded-full shadow-2xl"
//               >
//                 Start Free Trial
//               </Button>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <Mail className="w-6 h-6" />
//                 <span className="text-lg">contact@insydz.com</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Phone className="w-6 h-6" />
//                 <span className="text-lg">+91 98765 43210</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <MapPin className="w-6 h-6" />
//                 <span className="text-lg">New Delhi, India</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 dark:bg-black text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8 mb-8">
//             <div>
//               <div className="flex items-center space-x-3 mb-4">
//                 <img 
//                   src="/logo.png" 
//                   alt="Insydz Logo" 
//                   className="w-10 h-10 rounded-xl object-contain"
//                 />
//                 <span className="text-lg font-bold">Insydz Analytics</span>
//               </div>
//               <p className="text-gray-400">
//                 Supporting businesses with intelligent data analytics solutions
//               </p>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Quick Links</h4>
//               <div className="space-y-2">
//                 <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">About</button>
//                 <button onClick={() => scrollToSection('work')} className="block text-gray-400 hover:text-white transition-colors">Work</button>
//                 <button onClick={() => scrollToSection('subscription')} className="block text-gray-400 hover:text-white transition-colors">Subscription</button>
//                 <a href="/terms-service" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
//                 <a href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Connect</h4>
//               <div className="flex space-x-4">
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
//                   <Facebook className="w-5 h-5" />
//                 </div>
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
//                   <Twitter className="w-5 h-5" />
//                 </div>
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
//                   <Instagram className="w-5 h-5" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8">
//             <div className="text-center mb-6">
//               <p className="text-gray-400 mb-2">
//                 © 2025 <span className="text-purple-400 font-bold">Insydz</span>. All rights reserved.
//               </p>
//               <p className="text-gray-500 text-sm">
//                 Designed & Developed in India
//               </p>
//             </div>

//             {/* Legal Disclaimer Section */}
//             <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-gray-800">
//               <div className="flex items-center justify-center space-x-2 mb-6">
//               {/* AlertTriangle icon from lucide-react adds visual weight */}
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 width="20" 
//                 height="20" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 strokeWidth="2" 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 className="text-amber-500"
//               >
//                 <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
//                 <line x1="12" x2="12" y1="9" y2="13" />
//                 <line x1="12" x2="12.01" y1="17" y2="17" />
//               </svg>
//               <h5 className="text-sm font-bold text-gray-200 uppercase tracking-wider">
//                 Important Legal Disclosures
//               </h5>
//             </div>

//             <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-800">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <h6 className="text-xs font-bold text-gray-300 mb-2">No Professional Advice</h6>
//                   <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                     The analytics, insights, and forecasts provided are for informational purposes only. They should not be construed as professional financial, investment, or legal advice.
//                   </p>

//                   <h6 className="text-xs font-bold text-gray-300 mb-2">Data Accuracy</h6>
//                   <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                     While we strive for precision, our AI algorithms depend on market conditions and third-party sources. We cannot guarantee 100% accuracy in all scenarios.
//                   </p>
//                 </div>

//                 <div>
//                   <h6 className="text-xs font-bold text-gray-300 mb-2">Limitation of Liability</h6>
//                   <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                     Insydz is not liable for business losses, lost profits, or decisions made based on our data. Users assume full responsibility for their business strategies.
//                   </p>
//                   <h6 className="text-xs font-bold text-gray-300 mb-2">Jurisdiction</h6>
//          <p className="text-xs text-gray-500 leading-relaxed">
//                     Disputes are governed by the laws of India and subject to the exclusive jurisdiction of courts in New Delhi.
//                   </p>
//                 </div>
//               </div>
//             </div>
//     <p className="text-[10px] text-gray-600 mt-4 text-center border-t border-gray-700/50 pt-4">
//       *Statistics and accuracy rates mentioned on this page are approximate and based on internal testing. Actual results may vary.
//     </p>
//   </div>
// </div>
//         </div>
//       </footer>

//       <style>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 1s ease-out;
//         }
//         .delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </div>
//   );
// }









// import { useState, useEffect } from "react";
// import { useLocation } from "wouter";
// import { TrendingUp, Menu, X, Facebook, Twitter, Instagram, BarChart3, Zap, Shield, Mail, Phone, MapPin, Check, Crown, Building2, Sun, Moon, Trophy, Target, DollarSign, Globe, BookOpen, Video, FileText, Users, Presentation } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function LandingPage() {
//   const [, setLocation] = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const html = document.documentElement;
//     if (isDarkMode) {
//       html.classList.add("dark");
//     } else {
//       html.classList.remove("dark");
//     }
//   }, [isDarkMode]);

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

//   const handlePlanSelect = (planId: string) => {
//     setLocation("/login");
//   };

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-background dark:to-gray-900 overflow-hidden">
//       {/* Navigation */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('Home')}>
//               <div className="relative">
//                 <img 
//                   src="/logo.png" 
//                   alt="Insydz Logo" 
//                   className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain"
//                 />
//                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 Insydz
//               </span>
//             </div>

//             <div className="hidden md:flex items-center space-x-4">
//               <button onClick={() => scrollToSection('Home')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Home</button>
//               <button onClick={() => scrollToSection('Compare')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Compare</button>
//               <button onClick={() => scrollToSection('Resources')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Resources</button>
//               <button onClick={() => scrollToSection('About')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">About</button>
//               <button onClick={() => scrollToSection('Work')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Portfolio</button>
//               <button onClick={() => scrollToSection('Subscription')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Pricing</button>
//               <Button onClick={() => scrollToSection('Contact')} className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">Contact Us</Button>
//               <button 
//                 className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
//                 onClick={() => setIsDarkMode(!isDarkMode)}
//               >
//                 {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400"/> : <Moon className="w-5 h-5 text-gray-800"/>}
//               </button>
//             </div>

//             <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
//             <div className="px-4 py-4 space-y-3">
//               <button onClick={() => scrollToSection('Home')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Home</button>
//               <button onClick={() => scrollToSection('Compare')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Compare</button>
//               <button onClick={() => scrollToSection('Resources')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Resources</button>
//               <button onClick={() => scrollToSection('About')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">About</button>
//               <button onClick={() => scrollToSection('Work')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Portfolio</button>
//               <button onClick={() => scrollToSection('Subscription')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Pricing</button>
//               <Button onClick={() => scrollToSection('Contact')} className="w-full bg-gradient-to-r from-pink-500 to-rose-500">Contact Us</Button>
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
//       <section
//         id="Home"
//         className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-background dark:to-gray-900 overflow-hidden"
//       >
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center justify-center space-y-6 mt-20">
//           <p className="text-gray-600 dark:text-gray-400 text-lg font-medium tracking-wide">
//             Intelligent & Lightning-Fast
//           </p>

//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
//             Data-Driven
//             <br />
//             <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
//               Analytics
//             </span>
//           </h1>

//           <p className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-700 dark:text-gray-300">
//             Revolutionary & Powerful
//           </p>

//           <Button
//             onClick={handleGetStarted}
//             size="lg"
//             className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105"
//           >
//             Get Started Free
//           </Button>

//           <div className="grid grid-cols-3 gap-6 pt-8 text-center">
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-purple-600">250K+</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Reviews Analyzed*
//               </div>
//             </div>
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-pink-600">AI-Powered</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Market Intelligence
//               </div>
//             </div>
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-rose-600">24/7</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Platform Access
//               </div>
//             </div>
//           </div>

//           <div className="pt-12 max-w-2xl">
//             <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
//               Trusted by Leading Enterprises
//             </p>
//             <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
//               Join thousands of forward-thinking businesses leveraging cutting-edge analytics to drive unprecedented growth
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Compare Section */}
//       <section id="Compare" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Why Sellers Choose <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Discover how Insydz outperforms the competition across key metrics
//             </p>
//           </div>

//           {/* Key Advantages */}
//           <div className="grid md:grid-cols-4 gap-6 mb-16">
//             {[
//               { icon: <Target className="w-8 h-8" />, text: "Streamlined UX", color: "from-blue-500 to-blue-600" },
//               { icon: <Zap className="w-8 h-8" />, text: "Superior AI Intelligence", color: "from-purple-500 to-purple-600" },
//               { icon: <DollarSign className="w-8 h-8" />, text: "Exceptional Value", color: "from-green-500 to-green-600" },
//               { icon: <Globe className="w-8 h-8" />, text: "Localized Expertise", color: "from-orange-500 to-orange-600" },
//             ].map((item, i) => (
//               <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white`}>
//                   {item.icon}
//                 </div>
//                 <p className="font-semibold text-gray-800 dark:text-white">{item.text}</p>
//               </div>
//             ))}
//           </div>

//           {/* Comparison Cards */}
//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Insydz vs Helium 10 */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-purple-200 dark:border-purple-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Insydz</h3>
//                     <p className="text-sm text-gray-500">vs Helium 10</p>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Enhanced Indian & Flipkart integration</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Premium features at competitive rates</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Intuitive, user-centric interface</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Insydz vs Jungle Scout */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-blue-200 dark:border-blue-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Insydz</h3>
//                     <p className="text-sm text-gray-500">vs Jungle Scout</p>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Comprehensive multi-marketplace coverage</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Real-time competitive intelligence</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Next-generation AI insights</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Insydz vs Viral Launch */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-green-200 dark:border-green-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Insydz</h3>
//                     <p className="text-sm text-gray-500">vs Viral Launch</p>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Agency-optimized workflows</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Superior data precision</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Localized market intelligence</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="text-center mt-12">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-10 py-6 text-lg rounded-full shadow-xl"
//             >
//               Start Your Free Trial
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Resources Section */}
//       <section id="Resources" className="py-24 bg-white dark:bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Accelerate Your Growth With <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Access premium resources to elevate your e-commerce mastery
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
//             {/* Blog */}
//             <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-blue-200 dark:border-blue-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
//                 <BookOpen className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Expert Blog</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Cutting-edge e-commerce strategies & insights
//               </p>
//               <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
//                 Explore Articles →
//               </button>
//             </div>

//             {/* Case Studies */}
//             <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-purple-200 dark:border-purple-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
//                 <FileText className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Success Stories</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Proven results from industry leaders
//               </p>
//               <button className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
//                 View Case Studies →
//               </button>
//             </div>

//             {/* Video Tutorials */}
//             <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-pink-200 dark:border-pink-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
//                 <Video className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Video Masterclasses</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Comprehensive platform walkthroughs
//               </p>
//               <button className="text-pink-600 dark:text-pink-400 font-semibold hover:underline">
//                 Start Learning →
//               </button>
//             </div>

//             {/* E-commerce Guides */}
//             <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-green-200 dark:border-green-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
//                 <BookOpen className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Strategic Playbooks</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 In-depth growth frameworks & methodologies
//               </p>
//               <button className="text-green-600 dark:text-green-400 font-semibold hover:underline">
//                 Access Guides →
//               </button>
//             </div>

//             {/* Webinars */}
//             {/* <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-orange-200 dark:border-orange-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
//                 <Presentation className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Live Webinars</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Interactive sessions with top-tier experts
//               </p>
//               <button className="text-orange-600 dark:text-orange-400 font-semibold hover:underline">
//                 Register Now →
//               </button>
//             </div> */}

//             {/* Community */}
//             <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-indigo-200 dark:border-indigo-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
//                 <Users className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Elite Community</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Network with high-performing sellers
//               </p>
//               <button className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
//                 Join Community →
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="About" className="py-24 bg-white/50 dark:bg-gray-800/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               We're revolutionizing e-commerce intelligence by democratizing advanced analytics and AI-powered insights for businesses worldwide
//             </p>
//           </div>

//           <div className="mb-16 max-w-4xl mx-auto">
//             <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl text-center border border-purple-200 dark:border-purple-800">
//               <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 To democratize e-commerce intelligence by delivering enterprise-grade analytics and AI-powered insights to businesses of all scales, empowering them to compete effectively and thrive in the dynamic digital marketplace.
//               </p>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <BarChart3 className="w-10 h-10" />,
//                 title: "AI-Powered Analytics",
//                 desc: "Sophisticated machine learning algorithms engineered to extract actionable insights and drive strategic business decisions",
//                 color: "from-blue-500 to-blue-600",
//               },
//               {
//                 icon: <Zap className="w-10 h-10" />,
//                 title: "Real-Time Intelligence",
//                 desc: "Instantaneous updates on market trends, competitive dynamics, and product performance metrics as they unfold",
//                 color: "from-green-500 to-green-600",
//               },
//               {
//                 icon: <Shield className="w-10 h-10" />,
//                 title: "Enterprise Security",
//                 desc: "Bank-grade security protocols and encrypted infrastructure safeguarding your proprietary business intelligence",
//                 color: "from-orange-500 to-orange-600",
//               },
//               {
//                 icon: <TrendingUp className="w-10 h-10" />,
//                 title: "Multi-Platform Support",
//                 desc: "Aggregate data from multiple e-commerce platforms for comprehensive market analysis",
//                 color: "from-purple-500 to-purple-600",
//               },
//             ].map((feature, i) => (
//               <div
//                 key={i}
//                 className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
//               >
//                 <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-20">
//             <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   icon: <Zap className="w-8 h-8 text-yellow-500" />,
//                   title: "Innovation",
//                   desc: "We strive to push the boundaries of what's possible with AI and data analytics technology",
//                 },
//                 {
//                   icon: <Shield className="w-8 h-8 text-blue-500" />,
//                   title: "Transparency",
//                   desc: "We believe in clear, honest communication and transparent business practices with our users",
//                 },
//                 {
//                   icon: <BarChart3 className="w-8 h-8 text-green-500" />,
//                   title: "Customer Success",
//                   desc: "We're dedicated to supporting our customers in achieving their business objectives",
//                 },
//               ].map((value, i) => (
//                 <div key={i} className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
//                   <div className="flex justify-center mb-4">{value.icon}</div>
//                   <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
//                   <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Work Section */}
//       <section id="Work" className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Work</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Supporting data-driven decisions for businesses worldwide
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               { stat: "Early", label: "Product Stage" },
//               { stat: "India", label: "Primary Market" },
//               { stat: "Multiple", label: "Marketplaces Supported" },
//               { stat: "Growing", label: "Seller Adoption" },
//             ].map((item, i) => (
//               <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform">
//                 <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
//                   {item.stat}
//                 </div>
//                 <div className="text-gray-600 dark:text-gray-400 text-lg">{item.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Subscription Plans Section */}
//       <section id="Subscription" className="py-24 bg-white dark:bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Subscription Plans</span>
//             </h2>
//             <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
//               Choose a plan that fits your business needs
//             </p>
//             <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Transform data into actionable insights with our analytics platform
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {/* Free Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
//                   <Zap className="h-7 w-7 text-blue-600 dark:text-blue-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Free</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹0</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Perfect for getting started</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Basic dashboard access</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Up to 50 products tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Limited AI insights</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Monthly summary reports</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('free')}
//                 variant="outline" 
//                 className="w-full"
//               >
//                 Get Started
//               </Button>
//             </div>

//             {/* Basic Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-purple-500 relative">
//               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                 <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
//                   Popular
//                 </span>
//               </div>
              
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
//                   <Crown className="h-7 w-7 text-purple-600 dark:text-purple-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Basic</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹499</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Ideal for growing businesses</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Free plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Up to 500 products tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Enhanced AI insights</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Weekly detailed reports</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('basic')}
//                 className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
//               >
//                 Upgrade to Basic
//               </Button>
//             </div>

//             {/* Premium Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
//                   <Crown className="h-7 w-7 text-yellow-600 dark:text-yellow-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Premium</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹1999</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">For serious professionals</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Basic plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Up to 2,000 products tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Advanced AI analytics</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Daily reports & alerts</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('premium')}
//                 className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
//               >
//                 Upgrade to Premium
//               </Button>
//             </div>

//             {/* Enterprise Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
//                   <Building2 className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Enterprise</h3>
//               <div className="text-center mb-4">
//                 <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Custom Pricing</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Tailored for SMBs</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Premium plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Custom tracking limits</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">API access & integrations</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Dedicated support & training</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('enterprise')}
//                 variant="outline"
//                 className="w-full"
//               >
//                 Contact Sales
//               </Button>
//             </div>
//           </div>

//           {/* Subscription Disclaimer */}
//           <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
//             <p className="text-xs text-center text-gray-500 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
//               <strong>Subscription Terms & Conditions:</strong> All subscription plans are billed monthly in advance. Payments are non-refundable except as required by applicable law or within 7 days of initial purchase for first-time subscribers only. You may cancel your subscription at any time through your account settings, with cancellation taking effect at the end of the current billing period. No partial refunds will be provided for unused time within a billing cycle. Features, pricing, and plan details are subject to change with 30 days' prior notice to active subscribers. By subscribing, you agree to our <a href="/terms-service" className="underline hover:text-purple-600">Terms of Service</a> and <a href="/privacy-policy" className="underline hover:text-purple-600">Privacy Policy</a>. Free trial (where applicable) is limited to one per user and requires valid payment information. Promotional pricing may be available for limited periods. Usage limits and feature availability vary by plan tier as specified above. Service availability is subject to our Service Level Agreement. We reserve the right to suspend or terminate accounts for violation of terms. Enterprise plans require a minimum contract period and separate service agreement.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="Contact" className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <h2 className="text-4xl md:text-5xl font-bold">
//                 Let's Get Started
//               </h2>
//               <p className="text-xl text-white/90">
//                 Ready to explore data-driven insights for your business? Join us today!
//               </p>
//               <Button
//                 onClick={handleGetStarted}
//                 size="lg"
//                 className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-12 py-6 text-lg rounded-full shadow-2xl"
//               >
//                 Start Free Trial
//               </Button>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <Mail className="w-6 h-6" />
//                 <span className="text-lg">contact@insydz.com</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Phone className="w-6 h-6" />
//                 <span className="text-lg">+91 98765 43210</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <MapPin className="w-6 h-6" />
//                 <span className="text-lg">New Delhi, India</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 dark:bg-black text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8 mb-8">
//             <div>
//               <div className="flex items-center space-x-3 mb-4">
//                 <img 
//                   src="/logo.png" 
//                   alt="Insydz Logo" 
//                   className="w-10 h-10 rounded-xl object-contain"
//                 />
//                 <span className="text-lg font-bold">Insydz Analytics</span>
//               </div>
//               <p className="text-gray-400">
//                 Supporting businesses with intelligent data analytics solutions
//               </p>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Quick Links</h4>
//               <div className="space-y-2">
//                 <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">About</button>
//                 <button onClick={() => scrollToSection('work')} className="block text-gray-400 hover:text-white transition-colors">Work</button>
//                 <button onClick={() => scrollToSection('subscription')} className="block text-gray-400 hover:text-white transition-colors">Subscription</button>
//                 <a href="/terms-service" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
//                 <a href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Connect</h4>
//               <div className="flex space-x-4">
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
//                   <Facebook className="w-5 h-5" />
//                 </div>
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
//                   <Twitter className="w-5 h-5" />
//                 </div>
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
//                   <Instagram className="w-5 h-5" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8">
//             <div className="text-center mb-6">
//               <p className="text-gray-400 mb-2">
//                 © 2025 <span className="text-purple-400 font-bold">Insydz</span>. All rights reserved.
//               </p>
//               <p className="text-gray-500 text-sm">
//                 Designed & Developed in India
//               </p>
//             </div>

//             {/* Legal Disclaimer Section */}
//             <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-gray-800">
//               <div className="flex items-center justify-center space-x-2 mb-6">
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 width="20" 
//                 height="20" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 strokeWidth="2" 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 className="text-amber-500"
//               >
//                 <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
//                 <line x1="12" x2="12" y1="9" y2="13" />
//                 <line x1="12" x2="12.01" y1="17" y2="17" />
//               </svg>
//               <h5 className="text-sm font-bold text-gray-200 uppercase tracking-wider">
//                 Important Legal Disclosures
//               </h5>
//             </div>

//             <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-800">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <h6 className="text-xs font-bold text-gray-300 mb-2">No Professional Advice</h6>
//                   <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                     The analytics, insights, data, and forecasts provided through this platform are for general informational purposes only and should not be construed as professional financial, investment, legal, tax, or business advice. Users should consult with qualified professionals before making business decisions. Insydz does not provide personalized recommendations and is not responsible for any actions taken based on information from this platform.
//                   </p>

//                   <h6 className="text-xs font-bold text-gray-300 mb-2">Data Accuracy & Limitations</h6>
//                   <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                     While we employ reasonable efforts to maintain data accuracy, our AI algorithms and analytics depend on third-party data sources, market conditions, and algorithmic processing which may contain errors or delays. We make no warranties or guarantees regarding the accuracy, completeness, timeliness, or reliability of any data, insights, or predictions. Accuracy rates mentioned are approximations based on internal testing under specific conditions and may not reflect performance in all use cases. Past performance does not guarantee future results.
//                   </p>

//                   <h6 className="text-xs font-bold text-gray-300 mb-2">Service Availability</h6>
//                   <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                     We strive to maintain continuous service availability but do not guarantee uninterrupted or error-free access. Scheduled maintenance, updates, or unforeseen technical issues may cause temporary service disruptions. We are not liable for any losses resulting from service downtime or unavailability.
//                   </p>
//                 </div>

//                 <div>
//                   <h6 className="text-xs font-bold text-gray-300 mb-2">Limitation of Liability</h6>
//                   <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                     To the maximum extent permitted by law, Insydz, its affiliates, officers, directors, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages including but not limited to loss of profits, revenue, data, business opportunities, or goodwill arising from or related to your use of or inability to use this service, even if advised of the possibility of such damages. Users assume full responsibility and risk for business decisions, strategies, and outcomes based on information obtained through this platform. Our total liability shall not exceed the amount paid by you for the service in the 12 months preceding the claim.
//                   </p>

//                   <h6 className="text-xs font-bold text-gray-300 mb-2">Third-Party Content & Links</h6>
//                   <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                     Our platform may contain links to third-party websites, data sources, or services. We do not endorse, control, or assume responsibility for any third-party content. Your interactions with third parties are solely between you and such third parties.
//                   </p>

//                   <h6 className="text-xs font-bold text-gray-300 mb-2">Governing Law & Jurisdiction</h6>
//          <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                     These terms and any disputes arising from or relating to this service shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any legal action or proceeding shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India. By using this service, you consent to the personal jurisdiction of such courts.
//                   </p>

//                   <h6 className="text-xs font-bold text-gray-300 mb-2">Indemnification</h6>
//                   <p className="text-xs text-gray-500 leading-relaxed">
//                     You agree to indemnify, defend, and hold harmless Insydz and its affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the service, violation of these terms, or infringement of any rights of another party.
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-6 pt-6 border-t border-gray-700">
//                 <h6 className="text-xs font-bold text-gray-300 mb-2">Changes to Service & Terms</h6>
//                 <p className="text-xs text-gray-500 leading-relaxed">
//                   We reserve the right to modify, suspend, or discontinue any aspect of the service at any time without prior notice. We may also update these terms and policies periodically. Continued use of the service after changes constitutes acceptance of modified terms. Material changes will be communicated through email or platform notifications where reasonably practicable.
//                 </p>
//               </div>
//             </div>
//     <p className="text-[10px] text-gray-600 mt-4 text-center border-t border-gray-700/50 pt-4">
//       *All statistics, metrics, and performance indicators mentioned throughout this website are approximate estimates based on internal testing, historical data, and aggregated user information as of January 2025. Actual results may vary significantly based on individual use cases, market conditions, data quality, and other factors. These figures are provided for illustrative purposes only and should not be considered guaranteed outcomes. "Reviews Analyzed" represents cumulative processed volume since platform inception. Accuracy percentages are averaged across multiple test scenarios and may differ in production environments. Active user counts are estimates and subject to change. Product categories represent supported classification types and may not reflect all available options.
//     </p>
//   </div>
// </div>
//         </div>
//       </footer>

//       <style>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 1s ease-out;
//         }
//         .delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </div>
//   );
// }














// import { useState, useEffect } from "react";
// import { useLocation } from "wouter";
// import { TrendingUp, Menu, X, Facebook, Twitter, Instagram, BarChart3, Zap, Shield, Mail, Phone, MapPin, Check, Crown, Building2, Sun, Moon, Trophy, Target, DollarSign, Globe, BookOpen, Video, FileText, Users, Presentation } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function LandingPage() {
//   const [, setLocation] = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const html = document.documentElement;
//     if (isDarkMode) {
//       html.classList.add("dark");
//     } else {
//       html.classList.remove("dark");
//     }
//   }, [isDarkMode]);

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

//   const handlePlanSelect = (planId: string) => {
//     setLocation("/login");
//   };

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-background dark:to-gray-900 overflow-hidden">
//       {/* Navigation */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('Home')}>
//               <div className="relative">
//                 <img 
//                   src="/logo.png" 
//                   alt="Insydz Logo" 
//                   className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain"
//                 />
//                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 Insydz
//               </span>
//             </div>

//             <div className="hidden md:flex items-center space-x-4">
//               <button onClick={() => scrollToSection('Home')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Home</button>
//               <button onClick={() => scrollToSection('Compare')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Compare</button>
//               <button onClick={() => scrollToSection('Resources')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Resources</button>
//               <button onClick={() => scrollToSection('About')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">About</button>
//               <button onClick={() => scrollToSection('Work')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Portfolio</button>
//               <button onClick={() => scrollToSection('Subscription')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Pricing</button>
//               <Button onClick={() => scrollToSection('Contact')} className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">Contact Us</Button>
//               <button 
//                 className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
//                 onClick={() => setIsDarkMode(!isDarkMode)}
//               >
//                 {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400"/> : <Moon className="w-5 h-5 text-gray-800"/>}
//               </button>
//             </div>

//             <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
//             <div className="px-4 py-4 space-y-3">
//               <button onClick={() => scrollToSection('Home')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Home</button>
//               <button onClick={() => scrollToSection('Compare')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Compare</button>
//               <button onClick={() => scrollToSection('Resources')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Resources</button>
//               <button onClick={() => scrollToSection('About')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">About</button>
//               <button onClick={() => scrollToSection('Work')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Portfolio</button>
//               <button onClick={() => scrollToSection('Subscription')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Pricing</button>
//               <Button onClick={() => scrollToSection('Contact')} className="w-full bg-gradient-to-r from-pink-500 to-rose-500">Contact Us</Button>
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
//       <section
//         id="Home"
//         className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-background dark:to-gray-900 overflow-hidden"
//       >
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center justify-center space-y-6 mt-20">
//           <p className="text-gray-600 dark:text-gray-400 text-lg font-medium tracking-wide">
//             Intelligent & Lightning-Fast
//           </p>

//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
//             Data-Driven
//             <br />
//             <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
//               Analytics
//             </span>
//           </h1>

//           <p className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-700 dark:text-gray-300">
//             Revolutionary & Powerful
//           </p>

//           <Button
//             onClick={handleGetStarted}
//             size="lg"
//             className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105"
//           >
//             Get Started Free
//           </Button>

//           <div className="grid grid-cols-3 gap-6 pt-8 text-center">
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-purple-600">250K+</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Reviews Analyzed*
//               </div>
//             </div>
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-pink-600">AI-Powered</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Market Intelligence
//               </div>
//             </div>
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-rose-600">24/7</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Platform Access
//               </div>
//             </div>
//           </div>

//           <div className="pt-12 max-w-2xl">
//             <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
//               Trusted by Leading Enterprises
//             </p>
//             <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
//               Join thousands of forward-thinking businesses leveraging cutting-edge analytics to drive unprecedented growth
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Compare Section */}
//       <section id="Compare" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Why Sellers Choose <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Discover how Insydz outperforms the competition across key metrics
//             </p>
//           </div>

//           {/* Key Advantages */}
//           <div className="grid md:grid-cols-4 gap-6 mb-16">
//             {[
//               { icon: <Target className="w-8 h-8" />, text: "Streamlined UX", color: "from-blue-500 to-blue-600" },
//               { icon: <Zap className="w-8 h-8" />, text: "Superior AI Intelligence", color: "from-purple-500 to-purple-600" },
//               { icon: <DollarSign className="w-8 h-8" />, text: "Exceptional Value", color: "from-green-500 to-green-600" },
//               { icon: <Globe className="w-8 h-8" />, text: "Localized Expertise", color: "from-orange-500 to-orange-600" },
//             ].map((item, i) => (
//               <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white`}>
//                   {item.icon}
//                 </div>
//                 <p className="font-semibold text-gray-800 dark:text-white">{item.text}</p>
//               </div>
//             ))}
//           </div>

//           {/* Comparison Cards */}
//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Insydz vs Helium 10 */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-purple-200 dark:border-purple-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Insydz</h3>
//                     <p className="text-sm text-gray-500">vs Helium 10</p>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Enhanced Indian & Flipkart integration</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Premium features at competitive rates</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Intuitive, user-centric interface</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Insydz vs Jungle Scout */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-blue-200 dark:border-blue-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Insydz</h3>
//                     <p className="text-sm text-gray-500">vs Jungle Scout</p>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Comprehensive multi-marketplace coverage</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Real-time competitive intelligence</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Next-generation AI insights</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Insydz vs Viral Launch */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-green-200 dark:border-green-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Insydz</h3>
//                     <p className="text-sm text-gray-500">vs Viral Launch</p>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Agency-optimized workflows</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Superior data precision</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Localized market intelligence</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="text-center mt-12">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-10 py-6 text-lg rounded-full shadow-xl"
//             >
//               Start Your Free Trial
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Resources Section */}
//       <section id="Resources" className="py-24 bg-white dark:bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Accelerate Your Growth With <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Access premium resources to elevate your e-commerce mastery
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Blog */}
//             <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-blue-200 dark:border-blue-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
//                 <BookOpen className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Expert Blog</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Cutting-edge e-commerce strategies & insights
//               </p>
//               <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
//                 Explore Articles →
//               </button>
//             </div>

//             {/* Case Studies */}
//             <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-purple-200 dark:border-purple-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
//                 <FileText className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Success Stories</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Proven results from industry leaders
//               </p>
//               <button className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
//                 View Case Studies →
//               </button>
//             </div>

//             {/* Video Tutorials */}
//             <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-pink-200 dark:border-pink-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
//                 <Video className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Video Masterclasses</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Comprehensive platform walkthroughs
//               </p>
//               <button className="text-pink-600 dark:text-pink-400 font-semibold hover:underline">
//                 Start Learning →
//               </button>
//             </div>

//             {/* E-commerce Guides */}
//             <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-green-200 dark:border-green-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
//                 <BookOpen className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Strategic Playbooks</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 In-depth growth frameworks & methodologies
//               </p>
//               <button className="text-green-600 dark:text-green-400 font-semibold hover:underline">
//                 Access Guides →
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="About" className="py-24 bg-white/50 dark:bg-gray-800/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               We're revolutionizing e-commerce intelligence by democratizing advanced analytics and AI-powered insights for businesses worldwide
//             </p>
//           </div>

//           <div className="mb-16 max-w-4xl mx-auto">
//             <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl text-center border border-purple-200 dark:border-purple-800">
//               <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 To democratize e-commerce intelligence by delivering enterprise-grade analytics and AI-powered insights to businesses of all scales, empowering them to compete effectively and thrive in the dynamic digital marketplace.
//               </p>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <BarChart3 className="w-10 h-10" />,
//                 title: "AI-Powered Analytics",
//                 desc: "Sophisticated machine learning algorithms engineered to extract actionable insights and drive strategic business decisions",
//                 color: "from-blue-500 to-blue-600",
//               },
//               {
//                 icon: <Zap className="w-10 h-10" />,
//                 title: "Real-Time Intelligence",
//                 desc: "Instantaneous updates on market trends, competitive dynamics, and product performance metrics as they unfold",
//                 color: "from-green-500 to-green-600",
//               },
//               {
//                 icon: <Shield className="w-10 h-10" />,
//                 title: "Enterprise Security",
//                 desc: "Bank-grade security protocols and encrypted infrastructure safeguarding your proprietary business intelligence",
//                 color: "from-orange-500 to-orange-600",
//               },
//               {
//                 icon: <TrendingUp className="w-10 h-10" />,
//                 title: "Multi-Platform Support",
//                 desc: "Aggregate data from multiple e-commerce platforms for comprehensive market analysis",
//                 color: "from-purple-500 to-purple-600",
//               },
//             ].map((feature, i) => (
//               <div
//                 key={i}
//                 className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
//               >
//                 <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-20">
//             <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   icon: <Zap className="w-8 h-8 text-yellow-500" />,
//                   title: "Innovation",
//                   desc: "We strive to push the boundaries of what's possible with AI and data analytics technology",
//                 },
//                 {
//                   icon: <Shield className="w-8 h-8 text-blue-500" />,
//                   title: "Transparency",
//                   desc: "We believe in clear, honest communication and transparent business practices with our users",
//                 },
//                 {
//                   icon: <BarChart3 className="w-8 h-8 text-green-500" />,
//                   title: "Customer Success",
//                   desc: "We're dedicated to supporting our customers in achieving their business objectives",
//                 },
//               ].map((value, i) => (
//                 <div key={i} className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
//                   <div className="flex justify-center mb-4">{value.icon}</div>
//                   <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
//                   <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Work Section */}
//       <section id="Work" className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Work</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Supporting data-driven decisions for businesses worldwide
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               { stat: "Early", label: "Product Stage" },
//               { stat: "India", label: "Primary Market" },
//               { stat: "Multiple", label: "Marketplaces Supported" },
//               { stat: "Growing", label: "Seller Adoption" },
//             ].map((item, i) => (
//               <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform">
//                 <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
//                   {item.stat}
//                 </div>
//                 <div className="text-gray-600 dark:text-gray-400 text-lg">{item.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Subscription Plans Section */}
//       <section id="Subscription" className="py-24 bg-white dark:bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Subscription Plans</span>
//             </h2>
//             <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
//               Choose a plan that fits your business needs
//             </p>
//             <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Transform data into actionable insights with our analytics platform
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {/* Free Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
//                   <Zap className="h-7 w-7 text-blue-600 dark:text-blue-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Free</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹0</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Perfect for getting started</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Basic dashboard access</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Up to 25 products tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Top 5 products filter</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">5 AI chat messages/month</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">5 notifications</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Weekly reports</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('free')}
//                 variant="outline" 
//                 className="w-full"
//               >
//                 Get Started
//               </Button>
//             </div>

//             {/* Basic Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-purple-500 relative">
//               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                 <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
//                   Popular
//                 </span>
//               </div>
              
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
//                   <Crown className="h-7 w-7 text-purple-600 dark:text-purple-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Basic</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹999</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Ideal for growing businesses</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Free plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Up to 500 products tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Top 20 products filter</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">20 AI chat messages/month</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">15 notifications</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">AI Chart Summaries</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Basic competitor alerts</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Daily reports</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Email support</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('basic')}
//                 className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
//               >
//                 Upgrade to Basic
//               </Button>
//             </div>

//             {/* Premium Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
//                   <Crown className="h-7 w-7 text-yellow-600 dark:text-yellow-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Premium</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹1999</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">For serious professionals</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Basic plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Unlimited product tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Top 100 products filter</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Unlimited AI chat</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Unlimited notifications</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Advanced AI chatbot</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Real-time data & alerts</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Priority support</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Advanced analytics</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('premium')}
//                 className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
//               >
//                 Upgrade to Premium
//               </Button>
//             </div>

//             {/* Enterprise Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
//                   <Building2 className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Enterprise</h3>
//               <div className="text-center mb-4">
//                 <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Custom Pricing</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Tailored for SMBs</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Premium plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">White-label options</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">24/7 premium support</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('enterprise')}
//                 variant="outline"
//                 className="w-full"
//               >
//                 Contact Sales
//               </Button>
//             </div>
//           </div>

//           {/* Subscription Disclaimer */}
//           <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
//             <p className="text-xs text-center text-gray-500 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
//               <strong>Subscription Terms:</strong> All plans are billed monthly. You may cancel anytime through your account settings. Cancellation takes effect at the end of the current billing period. Refunds are available within 7 days of initial purchase for first-time subscribers only. Features and pricing subject to change with 30 days' notice. By subscribing, you agree to our <a href="/terms-service" className="underline hover:text-purple-600">Terms of Service</a> and <a href="/privacy-policy" className="underline hover:text-purple-600">Privacy Policy</a>. Free trial (where applicable) limited to one per user and requires valid payment information.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="Contact" className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <h2 className="text-4xl md:text-5xl font-bold">
//                 Let's Get Started
//               </h2>
//               <p className="text-xl text-white/90">
//                 Ready to explore data-driven insights for your business? Join us today!
//               </p>
//               <Button
//                 onClick={handleGetStarted}
//                 size="lg"
//                 className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-12 py-6 text-lg rounded-full shadow-2xl"
//               >
//                 Start Free Trial
//               </Button>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <Mail className="w-6 h-6" />
//                 <span className="text-lg">contact@insydz.com</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Phone className="w-6 h-6" />
//                 <span className="text-lg">+91 98765 43210</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <MapPin className="w-6 h-6" />
//                 <span className="text-lg">New Delhi, India</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 dark:bg-black text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8 mb-8">
//             <div>
//               <div className="flex items-center space-x-3 mb-4">
//                 <img 
//                   src="/logo.png" 
//                   alt="Insydz Logo" 
//                   className="w-10 h-10 rounded-xl object-contain"
//                 />
//                 <span className="text-lg font-bold">Insydz Analytics</span>
//               </div>
//               <p className="text-gray-400">
//                 Supporting businesses with intelligent data analytics solutions
//               </p>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Quick Links</h4>
//               <div className="space-y-2">
//                 <button onClick={() => scrollToSection('About')} className="block text-gray-400 hover:text-white transition-colors">About</button>
//                 <button onClick={() => scrollToSection('Work')} className="block text-gray-400 hover:text-white transition-colors">Work</button>
//                 <button onClick={() => scrollToSection('Subscription')} className="block text-gray-400 hover:text-white transition-colors">Pricing</button>
//                 <a href="/terms-service" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
//                 <a href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Connect</h4>
//               <div className="flex space-x-4">
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
//                   <Facebook className="w-5 h-5" />
//                 </div>
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
//                   <Twitter className="w-5 h-5" />
//                 </div>
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
//                   <Instagram className="w-5 h-5" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8">
//             <div className="text-center mb-6">
//               <p className="text-gray-400 mb-2">
//                 © 2025 <span className="text-purple-400 font-bold">Insydz</span>. All rights reserved.
//               </p>
//               <p className="text-gray-500 text-sm">
//                 Designed & Developed in India
//               </p>
//             </div>

//             {/* Legal Disclaimer Section */}
//             <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-gray-800">
//               <div className="flex items-center justify-center space-x-2 mb-6">
//                 <svg 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   width="20" 
//                   height="20" 
//                   viewBox="0 0 24 24" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   strokeWidth="2" 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   className="text-amber-500"
//                 >
//                   <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
//                   <line x1="12" x2="12" y1="9" y2="13" />
//                   <line x1="12" x2="12.01" y1="17" y2="17" />
//                 </svg>
//                 <h5 className="text-sm font-bold text-gray-200 uppercase tracking-wider">
//                   Important Information
//                 </h5>
//               </div>

//               <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-800">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Informational Purposes</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       The analytics and insights provided by Insydz are for informational purposes only. While we strive to provide valuable data-driven insights, they should not be considered financial, legal, or professional business advice. We recommend consulting with qualified professionals before making significant business decisions.
//                     </p>

//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Data Accuracy</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       We work hard to ensure data accuracy, but our platform relies on third-party sources and AI algorithms that may occasionally contain errors or delays. Statistics and metrics shown are based on internal testing and may vary in real-world use. We encourage users to verify critical information through multiple sources.
//                     </p>

//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Service Availability</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       While we aim for 24/7 availability, occasional maintenance or technical issues may temporarily affect service access. We'll do our best to minimize disruptions and notify users when possible.
//                     </p>
//                   </div>

//                   <div>
//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Liability</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       Users are responsible for their own business decisions. While we provide useful tools and data, Insydz is not liable for business outcomes, lost profits, or other damages related to your use of our service. Our liability is limited to the amount you've paid for the service in the past 12 months.
//                     </p>

//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Third-Party Content</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       Our platform may link to third-party websites or data sources. We don't control or endorse these external resources. Your interactions with third parties are between you and them.
//                     </p>

//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Governing Law</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed">
//                       These terms are governed by the laws of India. Any disputes will be handled in the courts of New Delhi, India. By using this service, you agree to this jurisdiction.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-6 pt-6 border-t border-gray-700">
//                   <h6 className="text-xs font-bold text-gray-300 mb-2">Changes & Updates</h6>
//                   <p className="text-xs text-gray-500 leading-relaxed">
//                     We may modify features, pricing, or terms with reasonable notice to users. Continued use after changes means you accept the updated terms. We'll communicate significant changes through email or platform notifications.
//                   </p>
//                 </div>
//               </div>

//               <p className="text-[10px] text-gray-600 mt-4 text-center border-t border-gray-700/50 pt-4">
//                 *Statistics and metrics mentioned on this website are approximate estimates based on internal testing and historical data as of January 2025. Actual results may vary based on individual use cases and market conditions. These figures are for illustrative purposes and should not be considered guaranteed outcomes. "Reviews Analyzed" represents cumulative processed volume since platform inception. Accuracy percentages are averaged across test scenarios and may differ in production. User counts and features are subject to change.
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>

//       <style>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 1s ease-out;
//         }
//         .delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </div>
//   );
// }




// import { useState, useEffect } from "react";
// import { useLocation } from "wouter";
// import { TrendingUp, Menu, X, Facebook, Twitter, Instagram, BarChart3, Zap, Shield, Mail, Phone, MapPin, Check, Crown, Building2, Sun, Moon, Trophy, Target, DollarSign, Globe, BookOpen, Video, FileText, Users, Presentation } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function LandingPage() {
//   const [, setLocation] = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const html = document.documentElement;
//     if (isDarkMode) {
//       html.classList.add("dark");
//     } else {
//       html.classList.remove("dark");
//     }
//   }, [isDarkMode]);

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

//   const handlePlanSelect = (planId: string) => {
//     setLocation("/login");
//   };

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-background dark:to-gray-900 overflow-hidden">
//       {/* Navigation */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('Home')}>
//               <div className="relative">
//                 <img 
//                   src="/logo.png" 
//                   alt="Insydz Logo" 
//                   className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain"
//                 />
//                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 Insydz
//               </span>
//             </div>

//             <div className="hidden md:flex items-center space-x-4">
//               <button onClick={() => scrollToSection('Home')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Home</button>
//               <button onClick={() => scrollToSection('Compare')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Compare</button>
//               <button onClick={() => scrollToSection('Resources')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Resources</button>
//               <button onClick={() => scrollToSection('About')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">About</button>
//               <button onClick={() => scrollToSection('Work')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Portfolio</button>
//               <button onClick={() => scrollToSection('Subscription')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Pricing</button>
//               <Button onClick={() => scrollToSection('Contact')} className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">Contact Us</Button>
//               <button 
//                 className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
//                 onClick={() => setIsDarkMode(!isDarkMode)}
//               >
//                 {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400"/> : <Moon className="w-5 h-5 text-gray-800"/>}
//               </button>
//             </div>

//             <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
//             <div className="px-4 py-4 space-y-3">
//               <button onClick={() => scrollToSection('Home')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Home</button>
//               <button onClick={() => scrollToSection('Compare')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Compare</button>
//               <button onClick={() => scrollToSection('Resources')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Resources</button>
//               <button onClick={() => scrollToSection('About')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">About</button>
//               <button onClick={() => scrollToSection('Work')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Portfolio</button>
//               <button onClick={() => scrollToSection('Subscription')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Pricing</button>
//               <Button onClick={() => scrollToSection('Contact')} className="w-full bg-gradient-to-r from-pink-500 to-rose-500">Contact Us</Button>
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
//       <section
//         id="Home"
//         className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-background dark:to-gray-900 overflow-hidden"
//       >
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center justify-center space-y-6 mt-20">
//           <p className="text-gray-600 dark:text-gray-400 text-lg font-medium tracking-wide">
//             Intelligent & Lightning-Fast
//           </p>

//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
//             Data-Driven
//             <br />
//             <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
//               Analytics
//             </span>
//           </h1>

//           <p className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-700 dark:text-gray-300">
//             Revolutionary & Powerful
//           </p>

//           <Button
//             onClick={handleGetStarted}
//             size="lg"
//             className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105"
//           >
//             Get Started Free
//           </Button>

//           <div className="grid grid-cols-3 gap-6 pt-8 text-center">
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-purple-600">250K+</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Reviews Analyzed*
//               </div>
//             </div>
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-pink-600">AI-Powered</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Market Intelligence
//               </div>
//             </div>
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-rose-600">24/7</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Platform Access
//               </div>
//             </div>
//           </div>

//           <div className="pt-12 max-w-2xl">
//             <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
//               Trusted by Leading Enterprises
//             </p>
//             <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
//               Join thousands of forward-thinking businesses leveraging cutting-edge analytics to drive unprecedented growth
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Compare Section */}
//       <section id="Compare" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Why Sellers Choose <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Discover how Insydz outperforms the competition across key metrics
//             </p>
//           </div>

//           {/* Key Advantages */}
//           <div className="grid md:grid-cols-4 gap-6 mb-16">
//             {[
//               { icon: <Target className="w-8 h-8" />, text: "Streamlined UX", color: "from-blue-500 to-blue-600" },
//               { icon: <Zap className="w-8 h-8" />, text: "Superior AI Intelligence", color: "from-purple-500 to-purple-600" },
//               { icon: <DollarSign className="w-8 h-8" />, text: "Exceptional Value", color: "from-green-500 to-green-600" },
//               { icon: <Globe className="w-8 h-8" />, text: "Localized Expertise", color: "from-orange-500 to-orange-600" },
//             ].map((item, i) => (
//               <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white`}>
//                   {item.icon}
//                 </div>
//                 <p className="font-semibold text-gray-800 dark:text-white">{item.text}</p>
//               </div>
//             ))}
//           </div>

//           {/* Comparison Cards */}
//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Insydz vs Helium 10 */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-purple-200 dark:border-purple-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Insydz</h3>
//                     <p className="text-sm text-gray-500">vs Helium 10</p>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Enhanced Indian & Flipkart integration</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Premium features at competitive rates</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Intuitive, user-centric interface</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Insydz vs Jungle Scout */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-blue-200 dark:border-blue-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Insydz</h3>
//                     <p className="text-sm text-gray-500">vs Jungle Scout</p>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Comprehensive multi-marketplace coverage</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Real-time competitive intelligence</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Next-generation AI insights</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Insydz vs Viral Launch */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-green-200 dark:border-green-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Insydz</h3>
//                     <p className="text-sm text-gray-500">vs Viral Launch</p>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Agency-optimized workflows</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Superior data precision</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Localized market intelligence</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="text-center mt-12">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-10 py-6 text-lg rounded-full shadow-xl"
//             >
//               Start Your Free Trial
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Resources Section */}
//       <section id="Resources" className="py-24 bg-white dark:bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Accelerate Your Growth With <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Access premium resources to elevate your e-commerce mastery
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Blog */}
//             <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-blue-200 dark:border-blue-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
//                 <BookOpen className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Expert Blog</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Cutting-edge e-commerce strategies & insights
//               </p>
//               <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
//                 Explore Articles →
//               </button>
//             </div>

//             {/* Case Studies */}
//             <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-purple-200 dark:border-purple-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
//                 <FileText className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Success Stories</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Proven results from industry leaders
//               </p>
//               <button className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
//                 View Case Studies →
//               </button>
//             </div>

//             {/* Video Tutorials */}
//             <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-pink-200 dark:border-pink-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
//                 <Video className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Video Masterclasses</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Comprehensive platform walkthroughs
//               </p>
//               <button className="text-pink-600 dark:text-pink-400 font-semibold hover:underline">
//                 Start Learning →
//               </button>
//             </div>

//             {/* E-commerce Guides */}
//             <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-green-200 dark:border-green-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
//                 <BookOpen className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Strategic Playbooks</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 In-depth growth frameworks & methodologies
//               </p>
//               <button className="text-green-600 dark:text-green-400 font-semibold hover:underline">
//                 Access Guides →
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="About" className="py-24 bg-white/50 dark:bg-gray-800/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               We're revolutionizing e-commerce intelligence by democratizing advanced analytics and AI-powered insights for businesses worldwide
//             </p>
//           </div>

//           <div className="mb-16 max-w-4xl mx-auto">
//             <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl text-center border border-purple-200 dark:border-purple-800">
//               <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 To democratize e-commerce intelligence by delivering enterprise-grade analytics and AI-powered insights to businesses of all scales, empowering them to compete effectively and thrive in the dynamic digital marketplace.
//               </p>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <BarChart3 className="w-10 h-10" />,
//                 title: "AI-Powered Analytics",
//                 desc: "Sophisticated machine learning algorithms engineered to extract actionable insights and drive strategic business decisions",
//                 color: "from-blue-500 to-blue-600",
//               },
//               {
//                 icon: <Zap className="w-10 h-10" />,
//                 title: "Real-Time Intelligence",
//                 desc: "Instantaneous updates on market trends, competitive dynamics, and product performance metrics as they unfold",
//                 color: "from-green-500 to-green-600",
//               },
//               {
//                 icon: <Shield className="w-10 h-10" />,
//                 title: "Enterprise Security",
//                 desc: "Bank-grade security protocols and encrypted infrastructure safeguarding your proprietary business intelligence",
//                 color: "from-orange-500 to-orange-600",
//               },
//               {
//                 icon: <TrendingUp className="w-10 h-10" />,
//                 title: "Multi-Platform Support",
//                 desc: "Aggregate data from multiple e-commerce platforms for comprehensive market analysis",
//                 color: "from-purple-500 to-purple-600",
//               },
//             ].map((feature, i) => (
//               <div
//                 key={i}
//                 className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
//               >
//                 <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-20">
//             <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   icon: <Zap className="w-8 h-8 text-yellow-500" />,
//                   title: "Innovation",
//                   desc: "We strive to push the boundaries of what's possible with AI and data analytics technology",
//                 },
//                 {
//                   icon: <Shield className="w-8 h-8 text-blue-500" />,
//                   title: "Transparency",
//                   desc: "We believe in clear, honest communication and transparent business practices with our users",
//                 },
//                 {
//                   icon: <BarChart3 className="w-8 h-8 text-green-500" />,
//                   title: "Customer Success",
//                   desc: "We're dedicated to supporting our customers in achieving their business objectives",
//                 },
//               ].map((value, i) => (
//                 <div key={i} className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
//                   <div className="flex justify-center mb-4">{value.icon}</div>
//                   <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
//                   <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Work Section */}
//       <section id="Work" className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Work</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Supporting data-driven decisions for businesses worldwide
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               { stat: "Early", label: "Product Stage" },
//               { stat: "India", label: "Primary Market" },
//               { stat: "Multiple", label: "Marketplaces Supported" },
//               { stat: "Growing", label: "Seller Adoption" },
//             ].map((item, i) => (
//               <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform">
//                 <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
//                   {item.stat}
//                 </div>
//                 <div className="text-gray-600 dark:text-gray-400 text-lg">{item.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Subscription Plans Section */}
//       <section id="Subscription" className="py-24 bg-white dark:bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Subscription Plans</span>
//             </h2>
//             <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
//               Choose a plan that fits your business needs
//             </p>
//             <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Transform data into actionable insights with our analytics platform
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {/* Free Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
//                   <Zap className="h-7 w-7 text-blue-600 dark:text-blue-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Free</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹0</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Perfect for getting started</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Basic dashboard access</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Up to 25 products tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Top 5 products filter</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">5 AI chat messages/month</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">5 notifications</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Weekly reports</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('free')}
//                 variant="outline" 
//                 className="w-full"
//               >
//                 Get Started
//               </Button>
//             </div>

//             {/* Basic Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-purple-500 relative">
//               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                 <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
//                   Popular
//                 </span>
//               </div>
              
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
//                   <Crown className="h-7 w-7 text-purple-600 dark:text-purple-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Basic</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹999</span>
//                 <span className="text-1xl text-gray-400 dark:text-gray-500 line-through">₹3999</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Ideal for growing businesses</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Free plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Up to 500 products tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Top 20 products filter</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">20 AI chat messages/month</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">15 notifications</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">AI Chart Summaries</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Basic competitor alerts</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Daily reports</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Email support</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('basic')}
//                 className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
//               >
//                 Upgrade to Basic
//               </Button>
//             </div>

//             {/* Premium Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
//                   <Crown className="h-7 w-7 text-yellow-600 dark:text-yellow-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Premium</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹1999</span>
//                 <span className="text-1xl text-gray-400 dark:text-gray-500 line-through">₹7999</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">For serious professionals</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Basic plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Unlimited product tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Top 100 products filter</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Unlimited AI chat</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Unlimited notifications</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Advanced AI chatbot</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Real-time data & alerts</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Priority support</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Advanced analytics</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('premium')}
//                 className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
//               >
//                 Upgrade to Premium
//               </Button>
//             </div>

//             {/* Enterprise Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
//                   <Building2 className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Enterprise</h3>
//               <div className="text-center mb-4">
//                 <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Custom Pricing</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Tailored for SMBs</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Premium plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">White-label options</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">24/7 premium support</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('enterprise')}
//                 variant="outline"
//                 className="w-full"
//               >
//                 Contact Sales
//               </Button>
//             </div>
//           </div>

//           {/* Subscription Disclaimer */}
//           <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
//             <p className="text-xs text-center text-gray-500 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
//               <strong>Subscription Terms:</strong> All plans are billed monthly. You may cancel anytime through your account settings. Cancellation takes effect at the end of the current billing period. Refunds are available within 7 days of initial purchase for first-time subscribers only. Features and pricing subject to change with 30 days' notice. By subscribing, you agree to our <a href="/terms-service" className="underline hover:text-purple-600">Terms of Service</a> and <a href="/privacy-policy" className="underline hover:text-purple-600">Privacy Policy</a>. Free trial (where applicable) limited to one per user and requires valid payment information.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="Contact" className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <h2 className="text-4xl md:text-5xl font-bold">
//                 Let's Get Started
//               </h2>
//               <p className="text-xl text-white/90">
//                 Ready to explore data-driven insights for your business? Join us today!
//               </p>
//               <Button
//                 onClick={handleGetStarted}
//                 size="lg"
//                 className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-12 py-6 text-lg rounded-full shadow-2xl"
//               >
//                 Start Free Trial
//               </Button>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <Mail className="w-6 h-6" />
//                 <span className="text-lg">contact@insydz.com</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Phone className="w-6 h-6" />
//                 <span className="text-lg">+91 98765 43210</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <MapPin className="w-6 h-6" />
//                 <span className="text-lg">New Delhi, India</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 dark:bg-black text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8 mb-8">
//             <div>
//               <div className="flex items-center space-x-3 mb-4">
//                 <img 
//                   src="/logo.png" 
//                   alt="Insydz Logo" 
//                   className="w-10 h-10 rounded-xl object-contain"
//                 />
//                 <span className="text-lg font-bold">Insydz Analytics</span>
//               </div>
//               <p className="text-gray-400">
//                 Supporting businesses with intelligent data analytics solutions
//               </p>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Quick Links</h4>
//               <div className="space-y-2">
//                 <button onClick={() => scrollToSection('About')} className="block text-gray-400 hover:text-white transition-colors">About</button>
//                 <button onClick={() => scrollToSection('Work')} className="block text-gray-400 hover:text-white transition-colors">Work</button>
//                 <button onClick={() => scrollToSection('Subscription')} className="block text-gray-400 hover:text-white transition-colors">Pricing</button>
//                 <a href="/terms-service" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
//                 <a href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Connect</h4>
//               <div className="flex space-x-4">
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
//                   <Facebook className="w-5 h-5" />
//                 </div>
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
//                   <Twitter className="w-5 h-5" />
//                 </div>
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
//                   <Instagram className="w-5 h-5" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8">
//             <div className="text-center mb-6">
//               <p className="text-gray-400 mb-2">
//                 © 2025 <span className="text-purple-400 font-bold">Insydz</span>. All rights reserved.
//               </p>
//               <p className="text-gray-500 text-sm">
//                 Designed & Developed in India
//               </p>
//             </div>

//             {/* Legal Disclaimer Section */}
//             <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-gray-800">
//               <div className="flex items-center justify-center space-x-2 mb-6">
//                 <svg 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   width="20" 
//                   height="20" 
//                   viewBox="0 0 24 24" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   strokeWidth="2" 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   className="text-amber-500"
//                 >
//                   <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
//                   <line x1="12" x2="12" y1="9" y2="13" />
//                   <line x1="12" x2="12.01" y1="17" y2="17" />
//                 </svg>
//                 <h5 className="text-sm font-bold text-gray-200 uppercase tracking-wider">
//                   Important Information
//                 </h5>
//               </div>

//               <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-800">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Informational Purposes</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       The analytics and insights provided by Insydz are for informational purposes only. While we strive to provide valuable data-driven insights, they should not be considered financial, legal, or professional business advice. We recommend consulting with qualified professionals before making significant business decisions.
//                     </p>

//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Data Accuracy</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       We work hard to ensure data accuracy, but our platform relies on third-party sources and AI algorithms that may occasionally contain errors or delays. Statistics and metrics shown are based on internal testing and may vary in real-world use. We encourage users to verify critical information through multiple sources.
//                     </p>

//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Service Availability</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       While we aim for 24/7 availability, occasional maintenance or technical issues may temporarily affect service access. We'll do our best to minimize disruptions and notify users when possible.
//                     </p>
//                   </div>

//                   <div>
//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Liability</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       Users are responsible for their own business decisions. While we provide useful tools and data, Insydz is not liable for business outcomes, lost profits, or other damages related to your use of our service. Our liability is limited to the amount you've paid for the service in the past 12 months.
//                     </p>

//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Third-Party Content</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       Our platform may link to third-party websites or data sources. We don't control or endorse these external resources. Your interactions with third parties are between you and them.
//                     </p>

//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Governing Law</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed">
//                       These terms are governed by the laws of India. Any disputes will be handled in the courts of New Delhi, India. By using this service, you agree to this jurisdiction.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-6 pt-6 border-t border-gray-700">
//                   <h6 className="text-xs font-bold text-gray-300 mb-2">Changes & Updates</h6>
//                   <p className="text-xs text-gray-500 leading-relaxed">
//                     We may modify features, pricing, or terms with reasonable notice to users. Continued use after changes means you accept the updated terms. We'll communicate significant changes through email or platform notifications.
//                   </p>
//                 </div>
//               </div>

//               <p className="text-[10px] text-gray-600 mt-4 text-center border-t border-gray-700/50 pt-4">
//                 *Statistics and metrics mentioned on this website are approximate estimates based on internal testing and historical data as of January 2025. Actual results may vary based on individual use cases and market conditions. These figures are for illustrative purposes and should not be considered guaranteed outcomes. "Reviews Analyzed" represents cumulative processed volume since platform inception. Accuracy percentages are averaged across test scenarios and may differ in production. User counts and features are subject to change.
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>

//       <style>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 1s ease-out;
//         }
//         .delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </div>
//   );
// }






// import { useState, useEffect } from "react";
// import { useLocation } from "wouter";
// import { TrendingUp, Menu, X, Facebook, Twitter, Instagram, BarChart3, Zap, Shield, Mail, Phone, MapPin, Check, Crown, Building2, Sun, Moon, Trophy, Target, DollarSign, Globe, BookOpen, Video, FileText, Users, Presentation, Linkedin } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function LandingPage() {
//   const [, setLocation] = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const html = document.documentElement;
//     if (isDarkMode) {
//       html.classList.add("dark");
//     } else {
//       html.classList.remove("dark");
//     }
//   }, [isDarkMode]);

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

//   const handlePlanSelect = (planId: string) => {
//     setLocation("/login");
//   };

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-background dark:to-gray-900 overflow-hidden">
//       {/* Navigation */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('Home')}>
//               <div className="relative">
//                 <img 
//                   src="/logo.png" 
//                   alt="Insydz Logo" 
//                   className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain"
//                 />
//                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 Insydz
//               </span>
//             </div>

//             <div className="hidden md:flex items-center space-x-4">
//               <button onClick={() => scrollToSection('Home')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Home</button>
//               <button onClick={() => scrollToSection('Compare')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Compare</button>
//               <button onClick={() => scrollToSection('Resources')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Resources</button>
//               <button onClick={() => scrollToSection('About')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">About</button>
//               <button onClick={() => scrollToSection('Work')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Portfolio</button>
//               <button onClick={() => scrollToSection('Subscription')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium">Pricing</button>
//               <Button onClick={() => scrollToSection('Contact')} className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">Contact Us</Button>
//               <button 
//                 className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
//                 onClick={() => setIsDarkMode(!isDarkMode)}
//               >
//                 {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400"/> : <Moon className="w-5 h-5 text-gray-800"/>}
//               </button>
//             </div>

//             <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
//             <div className="px-4 py-4 space-y-3">
//               <button onClick={() => scrollToSection('Home')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Home</button>
//               <button onClick={() => scrollToSection('Compare')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Compare</button>
//               <button onClick={() => scrollToSection('Resources')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Resources</button>
//               <button onClick={() => scrollToSection('About')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">About</button>
//               <button onClick={() => scrollToSection('Work')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Portfolio</button>
//               <button onClick={() => scrollToSection('Subscription')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium">Pricing</button>
//               <Button onClick={() => scrollToSection('Contact')} className="w-full bg-gradient-to-r from-pink-500 to-rose-500">Contact Us</Button>
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
//       <section
//         id="Home"
//         className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-background dark:to-gray-900 overflow-hidden"
//       >
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center justify-center space-y-6 mt-20">
//           <p className="text-gray-600 dark:text-gray-400 text-lg font-medium tracking-wide">
//             Intelligent & Lightning-Fast
//           </p>

//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
//             Data-Driven
//             <br />
//             <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
//               Analytics
//             </span>
//           </h1>

//           <p className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-700 dark:text-gray-300">
//             Revolutionary & Powerful
//           </p>

//           <Button
//             onClick={handleGetStarted}
//             size="lg"
//             className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105"
//           >
//             Get Started Free
//           </Button>

//           <div className="grid grid-cols-3 gap-6 pt-8 text-center">
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-purple-600">250K+</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Reviews Analyzed*
//               </div>
//             </div>
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-pink-600">AI-Powered</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Market Intelligence
//               </div>
//             </div>
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-rose-600">24/7</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Platform Access
//               </div>
//             </div>
//           </div>

//           <div className="pt-12 max-w-2xl">
//             <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
//               Trusted by Leading Enterprises
//             </p>
//             <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
//               Join thousands of forward-thinking businesses leveraging cutting-edge analytics to drive unprecedented growth
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Compare Section */}
//       <section id="Compare" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Why Sellers Choose <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Discover how Insydz outperforms the competition across key metrics
//             </p>
//           </div>

//           {/* Key Advantages */}
//           <div className="grid md:grid-cols-4 gap-6 mb-16">
//             {[
//               { icon: <Target className="w-8 h-8" />, text: "Streamlined UX", color: "from-blue-500 to-blue-600" },
//               { icon: <Zap className="w-8 h-8" />, text: "Superior AI Intelligence", color: "from-purple-500 to-purple-600" },
//               { icon: <DollarSign className="w-8 h-8" />, text: "Exceptional Value", color: "from-green-500 to-green-600" },
//               { icon: <Globe className="w-8 h-8" />, text: "Localized Expertise", color: "from-orange-500 to-orange-600" },
//             ].map((item, i) => (
//               <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white`}>
//                   {item.icon}
//                 </div>
//                 <p className="font-semibold text-gray-800 dark:text-white">{item.text}</p>
//               </div>
//             ))}
//           </div>

//           {/* Comparison Cards */}
//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Insydz vs Helium 10 */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-purple-200 dark:border-purple-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Insydz</h3>
//                     <p className="text-sm text-gray-500">vs Helium 10</p>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Enhanced Indian & Flipkart integration</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Premium features at competitive rates</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Intuitive, user-centric interface</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Insydz vs Jungle Scout */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-blue-200 dark:border-blue-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Insydz</h3>
//                     <p className="text-sm text-gray-500">vs Jungle Scout</p>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Comprehensive multi-marketplace coverage</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Real-time competitive intelligence</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Next-generation AI insights</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Insydz vs Viral Launch */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-green-200 dark:border-green-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Insydz</h3>
//                     <p className="text-sm text-gray-500">vs Viral Launch</p>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Agency-optimized workflows</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Superior data precision</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Localized market intelligence</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="text-center mt-12">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-10 py-6 text-lg rounded-full shadow-xl"
//             >
//               Start Your Free Trial
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Resources Section */}
//       <section id="Resources" className="py-24 bg-white dark:bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Accelerate Your Growth With <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Access premium resources to elevate your e-commerce mastery
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Blog */}
//             <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-blue-200 dark:border-blue-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
//                 <BookOpen className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Expert Blog</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Cutting-edge e-commerce strategies & insights
//               </p>
//               <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
//                 Explore Articles →
//               </button>
//             </div>

//             {/* Case Studies */}
//             <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-purple-200 dark:border-purple-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
//                 <FileText className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Success Stories</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Proven results from industry leaders
//               </p>
//               <button className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
//                 View Case Studies →
//               </button>
//             </div>

//             {/* Video Tutorials */}
//             <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-pink-200 dark:border-pink-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
//                 <Video className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Video Masterclasses</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Comprehensive platform walkthroughs
//               </p>
//               <button className="text-pink-600 dark:text-pink-400 font-semibold hover:underline">
//                 Start Learning →
//               </button>
//             </div>

//             {/* E-commerce Guides */}
//             <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-green-200 dark:border-green-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
//                 <BookOpen className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Strategic Playbooks</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 In-depth growth frameworks & methodologies
//               </p>
//               <button className="text-green-600 dark:text-green-400 font-semibold hover:underline">
//                 Access Guides →
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="About" className="py-24 bg-white/50 dark:bg-gray-800/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               We're revolutionizing e-commerce intelligence by democratizing advanced analytics and AI-powered insights for businesses worldwide
//             </p>
//           </div>

//           <div className="mb-16 max-w-4xl mx-auto">
//             <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl text-center border border-purple-200 dark:border-purple-800">
//               <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 To democratize e-commerce intelligence by delivering enterprise-grade analytics and AI-powered insights to businesses of all scales, empowering them to compete effectively and thrive in the dynamic digital marketplace.
//               </p>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <BarChart3 className="w-10 h-10" />,
//                 title: "AI-Powered Analytics",
//                 desc: "Sophisticated machine learning algorithms engineered to extract actionable insights and drive strategic business decisions",
//                 color: "from-blue-500 to-blue-600",
//               },
//               {
//                 icon: <Zap className="w-10 h-10" />,
//                 title: "Real-Time Intelligence",
//                 desc: "Instantaneous updates on market trends, competitive dynamics, and product performance metrics as they unfold",
//                 color: "from-green-500 to-green-600",
//               },
//               {
//                 icon: <Shield className="w-10 h-10" />,
//                 title: "Enterprise Security",
//                 desc: "Bank-grade security protocols and encrypted infrastructure safeguarding your proprietary business intelligence",
//                 color: "from-orange-500 to-orange-600",
//               },
//               {
//                 icon: <TrendingUp className="w-10 h-10" />,
//                 title: "Multi-Platform Support",
//                 desc: "Aggregate data from multiple e-commerce platforms for comprehensive market analysis",
//                 color: "from-purple-500 to-purple-600",
//               },
//             ].map((feature, i) => (
//               <div
//                 key={i}
//                 className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
//               >
//                 <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-20">
//             <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   icon: <Zap className="w-8 h-8 text-yellow-500" />,
//                   title: "Innovation",
//                   desc: "We strive to push the boundaries of what's possible with AI and data analytics technology",
//                 },
//                 {
//                   icon: <Shield className="w-8 h-8 text-blue-500" />,
//                   title: "Transparency",
//                   desc: "We believe in clear, honest communication and transparent business practices with our users",
//                 },
//                 {
//                   icon: <BarChart3 className="w-8 h-8 text-green-500" />,
//                   title: "Customer Success",
//                   desc: "We're dedicated to supporting our customers in achieving their business objectives",
//                 },
//               ].map((value, i) => (
//                 <div key={i} className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
//                   <div className="flex justify-center mb-4">{value.icon}</div>
//                   <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
//                   <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Work Section */}
//       <section id="Work" className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Work</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Supporting data-driven decisions for businesses worldwide
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               { stat: "Early", label: "Product Stage" },
//               { stat: "India", label: "Primary Market" },
//               { stat: "Multiple", label: "Marketplaces Supported" },
//               { stat: "Growing", label: "Seller Adoption" },
//             ].map((item, i) => (
//               <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform">
//                 <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
//                   {item.stat}
//                 </div>
//                 <div className="text-gray-600 dark:text-gray-400 text-lg">{item.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Subscription Plans Section */}
//       <section id="Subscription" className="py-24 bg-white dark:bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Subscription Plans</span>
//             </h2>
//             <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
//               Choose a plan that fits your business needs
//             </p>
//             <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Transform data into actionable insights with our analytics platform
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {/* Free Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
//                   <Zap className="h-7 w-7 text-blue-600 dark:text-blue-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Free</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹0</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Perfect for getting started</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Basic dashboard access</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Up to 25 products tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Top 5 products filter</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">5 AI chat messages/month</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">5 notifications</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Weekly reports</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('free')}
//                 variant="outline" 
//                 className="w-full"
//               >
//                 Get Started
//               </Button>
//             </div>

//             {/* Basic Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-purple-500 relative">
//               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                 <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
//                   Popular
//                 </span>
//               </div>
              
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
//                   <Crown className="h-7 w-7 text-purple-600 dark:text-purple-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Basic</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹999</span>
//                 <span className="text-1xl text-gray-400 dark:text-gray-500 line-through">₹3999</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Ideal for growing businesses</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Free plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Up to 500 products tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Top 20 products filter</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">20 AI chat messages/month</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">15 notifications</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">AI Chart Summaries</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Basic competitor alerts</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Daily reports</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Email support</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('basic')}
//                 className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
//               >
//                 Upgrade to Basic
//               </Button>
//             </div>

//             {/* Premium Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
//                   <Crown className="h-7 w-7 text-yellow-600 dark:text-yellow-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Premium</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹1999</span>
//                 <span className="text-1xl text-gray-400 dark:text-gray-500 line-through">₹7999</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">For serious professionals</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Basic plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Unlimited product tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Top 100 products filter</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Unlimited AI chat</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Unlimited notifications</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Advanced AI chatbot</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Real-time data & alerts</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Priority support</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Advanced analytics</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('premium')}
//                 className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
//               >
//                 Upgrade to Premium
//               </Button>
//             </div>

//             {/* Enterprise Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
//                   <Building2 className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Enterprise</h3>
//               <div className="text-center mb-4">
//                 <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Custom Pricing</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Tailored for SMBs</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Premium plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">White-label options</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">24/7 premium support</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('enterprise')}
//                 variant="outline"
//                 className="w-full"
//               >
//                 Contact Sales
//               </Button>
//             </div>
//           </div>

//           {/* Subscription Disclaimer */}
//           <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
//             <p className="text-xs text-center text-gray-500 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
//               <strong>Subscription Terms:</strong> All plans are billed monthly. You may cancel anytime through your account settings. Cancellation takes effect at the end of the current billing period. Refunds are available within 7 days of initial purchase for first-time subscribers only. Features and pricing subject to change with 30 days' notice. By subscribing, you agree to our <a href="/terms-service" className="underline hover:text-purple-600">Terms of Service</a> and <a href="/privacy-policy" className="underline hover:text-purple-600">Privacy Policy</a>. Free trial (where applicable) limited to one per user and requires valid payment information.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="Contact" className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <h2 className="text-4xl md:text-5xl font-bold">
//                 Let's Get Started
//               </h2>
//               <p className="text-xl text-white/90">
//                 Ready to explore data-driven insights for your business? Join us today!
//               </p>
//               <Button
//                 onClick={handleGetStarted}
//                 size="lg"
//                 className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-12 py-6 text-lg rounded-full shadow-2xl"
//               >
//                 Start Free Trial
//               </Button>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <Mail className="w-6 h-6" />
//                 <span className="text-lg">contact@insydz.com</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Phone className="w-6 h-6" />
//                 <span className="text-lg">+91 98765 43210</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <MapPin className="w-6 h-6" />
//                 <span className="text-lg">New Delhi, India</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 dark:bg-black text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8 mb-8">
//             <div>
//               <div className="flex items-center space-x-3 mb-4">
//                 <img 
//                   src="/logo.png" 
//                   alt="Insydz Logo" 
//                   className="w-10 h-10 rounded-xl object-contain"
//                 />
//                 <span className="text-lg font-bold">Insydz Analytics</span>
//               </div>
//               <p className="text-gray-400">
//                 Supporting businesses with intelligent data analytics solutions
//               </p>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Quick Links</h4>
//               <div className="space-y-2">
//                 <button onClick={() => scrollToSection('About')} className="block text-gray-400 hover:text-white transition-colors">About</button>
//                 <button onClick={() => scrollToSection('Work')} className="block text-gray-400 hover:text-white transition-colors">Work</button>
//                 <button onClick={() => scrollToSection('Subscription')} className="block text-gray-400 hover:text-white transition-colors">Pricing</button>
//                 <a href="/terms-service" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
//                 <a href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Connect</h4>
//               <div className="flex space-x-4">
//                 <div className="flex space-x-4">
//   <a title="Follow us on Facebook"
//     href="https://www.facebook.com/profile.php?id=61586202582209"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
//   >
//     <Facebook className="w-5 h-5" />
//   </a>

//   <a title="Follow us on Twitter"
//     href=""
//     target="_blank"
//     rel="noopener noreferrer"
//     className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
//   >
//     <Twitter className="w-5 h-5" />
//   </a>

//   <a title="Follow us on Instagram"
//     href=""
//     target="_blank"
//     rel="noopener noreferrer"
//     className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
//   >
//     <Instagram className="w-5 h-5" />
//   </a>

//   <a title="Follow us on Linkedin"
//     href=""
//     target="_blank"
//     rel="noopener noreferrer"
//     className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
//   >
//     <Linkedin className="w-5 h-5" />
  
//   </a>  
// </div>

//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8">
//             <div className="text-center mb-6">
//               <p className="text-gray-400 mb-2">
//                 © 2025 <span className="text-purple-400 font-bold">Insydz</span>. All rights reserved.
//               </p>
//               <p className="text-gray-500 text-sm">
//                 Designed & Developed in India
//               </p>
//             </div>

//             {/* Legal Disclaimer Section */}
//             <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-gray-800">
//               <div className="flex items-center justify-center space-x-2 mb-6">
//                 <svg 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   width="20" 
//                   height="20" 
//                   viewBox="0 0 24 24" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   strokeWidth="2" 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   className="text-amber-500"
//                 >
//                   <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
//                   <line x1="12" x2="12" y1="9" y2="13" />
//                   <line x1="12" x2="12.01" y1="17" y2="17" />
//                 </svg>
//                 <h5 className="text-sm font-bold text-gray-200 uppercase tracking-wider">
//                   Important Information
//                 </h5>
//               </div>

//               <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-800">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Informational Purposes</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       The analytics and insights provided by Insydz are for informational purposes only. While we strive to provide valuable data-driven insights, they should not be considered financial, legal, or professional business advice. We recommend consulting with qualified professionals before making significant business decisions.
//                     </p>

//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Data Accuracy</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       We work hard to ensure data accuracy, but our platform relies on third-party sources and AI algorithms that may occasionally contain errors or delays. Statistics and metrics shown are based on internal testing and may vary in real-world use. We encourage users to verify critical information through multiple sources.
//                     </p>

//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Service Availability</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       While we aim for 24/7 availability, occasional maintenance or technical issues may temporarily affect service access. We'll do our best to minimize disruptions and notify users when possible.
//                     </p>
//                   </div>

//                   <div>
//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Liability</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       Users are responsible for their own business decisions. While we provide useful tools and data, Insydz is not liable for business outcomes, lost profits, or other damages related to your use of our service. Our liability is limited to the amount you've paid for the service in the past 12 months.
//                     </p>

//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Third-Party Content</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       Our platform may link to third-party websites or data sources. We don't control or endorse these external resources. Your interactions with third parties are between you and them.
//                     </p>

//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Governing Law</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed">
//                       These terms are governed by the laws of India. Any disputes will be handled in the courts of New Delhi, India. By using this service, you agree to this jurisdiction.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-6 pt-6 border-t border-gray-700">
//                   <h6 className="text-xs font-bold text-gray-300 mb-2">Changes & Updates</h6>
//                   <p className="text-xs text-gray-500 leading-relaxed">
//                     We may modify features, pricing, or terms with reasonable notice to users. Continued use after changes means you accept the updated terms. We'll communicate significant changes through email or platform notifications.
//                   </p>
//                 </div>
//               </div>

//               <p className="text-[10px] text-gray-600 mt-4 text-center border-t border-gray-700/50 pt-4">
//                 *Statistics and metrics mentioned on this website are approximate estimates based on internal testing and historical data as of January 2025. Actual results may vary based on individual use cases and market conditions. These figures are for illustrative purposes and should not be considered guaranteed outcomes. "Reviews Analyzed" represents cumulative processed volume since platform inception. Accuracy percentages are averaged across test scenarios and may differ in production. User counts and features are subject to change.
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>

//       <style>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 1s ease-out;
//         }
//         .delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </div>
//   );
// }




// import { useState, useEffect, useRef } from "react";
// import { useLocation } from "wouter";
// import { TrendingUp, Menu, X, Facebook, Twitter, Instagram, BarChart3, Zap, Shield, Mail, Phone, MapPin, Check, Crown, Building2, Sun, Moon, Trophy, Target, DollarSign, Globe, BookOpen, Video, FileText, Users, Presentation, Linkedin, ChevronDown, ShoppingBag, TrendingDown, MessageCircle, Search, Package, Bell, Code, BarChart, Briefcase, Store, ShoppingCart } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const navigationMenu = {
//   Solutions: [
//     { name: "For Amazon Sellers (India)", icon: <ShoppingBag className="w-4 h-4" /> },
//     { name: "For Flipkart Sellers", icon: <Store className="w-4 h-4" /> },
//     { name: "For E-commerce Agencies", icon: <Briefcase className="w-4 h-4" /> },
//     { name: "For Brand Managers", icon: <Users className="w-4 h-4" /> },
//   ],
//   "Use Cases": [
//     { name: "Track Competitor Prices", icon: <TrendingDown className="w-4 h-4" /> },
//     { name: "Find Profitable Products", icon: <Target className="w-4 h-4" /> },
//     { name: "Analyze Customer Reviews", icon: <MessageCircle className="w-4 h-4" /> },
//     { name: "Improve Amazon & Flipkart SEO", icon: <Search className="w-4 h-4" /> },
//     { name: "Avoid Stockouts & Missed Sales", icon: <Package className="w-4 h-4" /> },
//   ],
//   Features: [
//     { name: "Competitor Price Tracking", icon: <DollarSign className="w-4 h-4" /> },
//     { name: "Review Analytics", icon: <MessageCircle className="w-4 h-4" /> },
//     { name: "Price Optimization", icon: <TrendingUp className="w-4 h-4" /> },
//     { name: "Keyword & Rank Tracking", icon: <Search className="w-4 h-4" /> },
//     { name: "Product Research", icon: <Package className="w-4 h-4" /> },
//     { name: "AI Recommendations", icon: <Zap className="w-4 h-4" /> },
//     { name: "WhatsApp Alerts", icon: <Bell className="w-4 h-4" />, badge: "NEW" },
//   ],
//   "Free Tools": [
//     { name: "Free Amazon Product Analyzer", icon: <BarChart className="w-4 h-4" /> },
//     { name: "Free Review Sentiment Checker", icon: <MessageCircle className="w-4 h-4" /> },
//     { name: "Free Competitor Price Checker", icon: <DollarSign className="w-4 h-4" /> },
//     { name: "Free Keyword Rank Checker", icon: <Search className="w-4 h-4" />, badge: "NEW" },
//   ],
//   Integrations: [
//     { name: "Amazon", icon: <ShoppingBag className="w-4 h-4" /> },
//     { name: "Flipkart", icon: <Store className="w-4 h-4" /> },
//     { name: "Meesho", icon: <ShoppingCart className="w-4 h-4" />, badge: "NEW" },
//     { name: "Shopify", icon: <Globe className="w-4 h-4" /> },
//     { name: "API Documentation", icon: <Code className="w-4 h-4" /> },
//   ],
// };

// export default function LandingPage() {
//   const [, setLocation] = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const html = document.documentElement;
//     if (isDarkMode) {
//       html.classList.add("dark");
//     } else {
//       html.classList.remove("dark");
//     }
//   }, [isDarkMode]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

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

//   const handlePlanSelect = (planId: string) => {
//     setLocation("/login");
//   };

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       setIsMenuOpen(false);
//       setActiveDropdown(null);
//     }
//   };

//   const toggleMobileMenu = (menuName: string) => {
//     setMobileActiveMenu(mobileActiveMenu === menuName ? null : menuName);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-background dark:to-gray-900 overflow-hidden">
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
//             <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('Home')}>
//               <div className="relative">
//                 <img 
//                   src="/logo.png" 
//                   alt="Insydz Logo" 
//                   className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain"
//                 />
//                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 Insydz
//               </span>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
//               <button 
//                 onClick={() => scrollToSection('Home')} 
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
//                 onClick={() => scrollToSection('Subscription')} 
//                 className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
//               >
//                 Pricing
//               </button>

//               {/* Free Tools Dropdown */}
//               <div className="relative">
//                 <button
//                   onMouseEnter={() => setActiveDropdown('Free Tools')}
//                   className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1"
//                 >
//                   Free Tools
//                   <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Free Tools' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {activeDropdown === 'Free Tools' && (
//                   <div 
//                     onMouseLeave={() => setActiveDropdown(null)}
//                     className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
//                   >
//                     {navigationMenu["Free Tools"].map((item, i) => (
//                       <button
//                         key={i}
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
//                 onClick={() => scrollToSection('Compare')} 
//                 className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
//               >
//                 Compare
//               </button>

//               <button 
//                 onClick={() => scrollToSection('Resources')} 
//                 className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
//               >
//                 Resources
//               </button>

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
//               <button onClick={() => scrollToSection('Home')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
//                 Home
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
//                       <button key={i} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
//                         {item.icon}
//                         {item.name}
//                         {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Use Cases */}
//               <div>
//                 <button 
//                   onClick={() => toggleMobileMenu('Use Cases')}
//                   className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                 >
//                   Use Cases
//                   <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Use Cases' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {mobileActiveMenu === 'Use Cases' && (
//                   <div className="ml-4 mt-2 space-y-1">
//                     {navigationMenu["Use Cases"].map((item, i) => (
//                       <button key={i} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
//                         {item.icon}
//                         {item.name}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Features */}
//               <div>
//                 <button 
//                   onClick={() => toggleMobileMenu('Features')}
//                   className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                 >
//                   Features
//                   <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Features' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {mobileActiveMenu === 'Features' && (
//                   <div className="ml-4 mt-2 space-y-1">
//                     {navigationMenu.Features.map((item, i) => (
//                       <button key={i} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
//                         {item.icon}
//                         {item.name}
//                         {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <button onClick={() => scrollToSection('Subscription')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
//                 Pricing
//               </button>

//               {/* Mobile Free Tools */}
//               <div>
//                 <button 
//                   onClick={() => toggleMobileMenu('Free Tools')}
//                   className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                 >
//                   Free Tools
//                   <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Free Tools' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {mobileActiveMenu === 'Free Tools' && (
//                   <div className="ml-4 mt-2 space-y-1">
//                     {navigationMenu["Free Tools"].map((item, i) => (
//                       <button key={i} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
//                         {item.icon}
//                         {item.name}
//                         {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Integrations */}
//               <div>
//                 <button 
//                   onClick={() => toggleMobileMenu('Integrations')}
//                   className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                 >
//                   Integrations
//                   <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Integrations' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {mobileActiveMenu === 'Integrations' && (
//                   <div className="ml-4 mt-2 space-y-1">
//                     {navigationMenu.Integrations.map((item, i) => (
//                       <button key={i} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
//                         {item.icon}
//                         {item.name}
//                         {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <button onClick={() => scrollToSection('Compare')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
//                 Compare
//               </button>

//               <button onClick={() => scrollToSection('Resources')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
//                 Resources
//               </button>

//               <button onClick={() => scrollToSection('About')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
//                 About
//               </button>

//               <Button onClick={() => scrollToSection('Contact')} className="w-full mt-2 bg-gradient-to-r from-pink-500 to-rose-500">
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
//       <section
//         id="Home"
//         className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-background dark:to-gray-900 overflow-hidden"
//       >
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center justify-center space-y-2 mt-20">
//           <p className="text-gray-600 dark:text-gray-400 text-lg font-medium tracking-wide">
//             AI-Powered E-commerce Intelligence
//           </p>

//           <h1 className="text-5xl sm:text-6xl lg:text-4xl font-bold text-gray-600 dark:text-white leading-tight">
//             Turn E-commerce Data Into
//             <br />
//             <span className="lg:text-6xl bg-gradient-to-r from-purple-900 via-pink-600 to-rose-700 bg-clip-text text-transparent">
//               Profitable Decisions 
//             </span> <br />
//             <span className="text-5xl sm:text-6xl lg:text-4xl font-bold text-gray-700 dark:text-white leading-tight">
//               Faster 
//             </span>
//           </h1>

//           <p className="text-gray-600 dark:text-gray-400 text-lg font-medium tracking-wide">
//             Insydz gives Amazon, and Flipkart sellers AI-powered insights on competitors, pricing, keywords, reviews, and products — all in one platform.
//           </p><br></br>
//           <div className="flex flex-wrap items-center justify-center gap-8 mt-6">
//           <Button
//             onClick={handleGetStarted}
//             size="sm"
//             className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105"
//           >
//             Book a Free Demo
//           </Button>

//           <Button
//             onClick={handleGetStarted}
//             size="sm"
//             className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105"
//           >
//             Start Free - No Credit Card Required
//           </Button>
//           </div>

//           <div className="grid grid-cols-3 gap-6 pt-8 text-center">
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-purple-600">250K+</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Reviews Analyzed*
//               </div>
//             </div>
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-pink-600">AI-Powered</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Market Intelligence
//               </div>
//             </div>
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-rose-600">24/7</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Platform Access
//               </div>
//             </div>
//           </div>

//           <div className="pt-12 max-w-2xl">
//             <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
//               Trusted by Leading Enterprises
//             </p>
//             <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
//               Join thousands of forward-thinking businesses leveraging cutting-edge analytics to drive unprecedented growth
//             </p>
//           </div>
//         </div>
//       </section>

// {/* Compare Section */}
//       <section id="" className="py-24 bg-gradient-to-br from-white-50 to-white-50 dark:from-gray-800 dark:to-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Built for Every E-commerce Growth Team <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Whether you're a solo seller or managing a portfolio of brands, Insydz adapts to your needs.
//             </p>
//           </div>

//           {/* Comparison Cards */}
//           <div className="grid md:grid-cols-4 gap-8">
//             {/* Amazon Sellers */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-purple-200 dark:border-purple-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Amazon Seller</h3>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Win Buy Box, optimize keywords & pricing</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Flipkart Sellers */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-purple-200 dark:border-purple-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Flipkart Sellers</h3>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Track competitors & reviews effortlessly</span>
//                 </li>
//               </ul>
//             </div>

//             {/* E-commerce Agencies */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-blue-200 dark:border-blue-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">E-commerce Agencies</h3>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Manage muliple clients with clarity</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Brand Managers */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-green-200 dark:border-green-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Brand Managers</h3>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Make confident data-backed decisions</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>






//       {/* Compare Section */}
//       <section id="Compare" className="py-24 bg-gradient-to-br from-pink-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Why Sellers Choose <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Discover how Insydz outperforms the competition across key metrics
//             </p>
//           </div>

//           {/* Key Advantages */}
//           <div className="grid md:grid-cols-4 gap-6 mb-16">
//             {[
//               { icon: <Target className="w-8 h-8" />, text: "Streamlined UX", color: "from-blue-500 to-blue-600" },
//               { icon: <Zap className="w-8 h-8" />, text: "Superior AI Intelligence", color: "from-purple-500 to-purple-600" },
//               { icon: <DollarSign className="w-8 h-8" />, text: "Exceptional Value", color: "from-green-500 to-green-600" },
//               { icon: <Globe className="w-8 h-8" />, text: "Localized Expertise", color: "from-orange-500 to-orange-600" },
//             ].map((item, i) => (
//               <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white`}>
//                   {item.icon}
//                 </div>
//                 <p className="font-semibold text-gray-800 dark:text-white">{item.text}</p>
//               </div>
//             ))}
//           </div>

//           {/* Comparison Cards */}
//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Insydz vs Helium 10 */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-purple-200 dark:border-purple-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Insydz</h3>
//                     <p className="text-sm text-gray-500">vs Helium 10</p>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Enhanced Indian & Flipkart integration</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Premium features at competitive rates</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Intuitive, user-centric interface</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Insydz vs Jungle Scout */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-blue-200 dark:border-blue-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Insydz</h3>
//                     <p className="text-sm text-gray-500">vs Jungle Scout</p>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Comprehensive multi-marketplace coverage</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Real-time competitive intelligence</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Next-generation AI insights</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Insydz vs Viral Launch */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-green-200 dark:border-green-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Insydz</h3>
//                     <p className="text-sm text-gray-500">vs Viral Launch</p>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Agency-optimized workflows</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Superior data precision</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Localized market intelligence</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="text-center mt-12">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-10 py-6 text-lg rounded-full shadow-xl"
//             >
//               Start Your Free Trial
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Resources Section */}
//       <section id="Resources" className="py-24 bg-white dark:bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Accelerate Your Growth With <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Access premium resources to elevate your e-commerce mastery
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Blog */}
//             <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-blue-200 dark:border-blue-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
//                 <BookOpen className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Expert Blog</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Cutting-edge e-commerce strategies & insights
//               </p>
//               <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
//                 Explore Articles →
//               </button>
//             </div>

//             {/* Case Studies */}
//             <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-purple-200 dark:border-purple-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
//                 <FileText className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Success Stories</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Proven results from industry leaders
//               </p>
//               <button className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
//                 View Case Studies →
//               </button>
//             </div>

//             {/* Video Tutorials */}
//             <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-pink-200 dark:border-pink-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
//                 <Video className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Video Masterclasses</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Comprehensive platform walkthroughs
//               </p>
//               <button className="text-pink-600 dark:text-pink-400 font-semibold hover:underline">
//                 Start Learning →
//               </button>
//             </div>

//             {/* E-commerce Guides */}
//             <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-green-200 dark:border-green-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
//                 <BookOpen className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Strategic Playbooks</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 In-depth growth frameworks & methodologies
//               </p>
//               <button className="text-green-600 dark:text-green-400 font-semibold hover:underline">
//                 Access Guides →
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="About" className="py-24 bg-white/50 dark:bg-gray-800/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               We're revolutionizing e-commerce intelligence by democratizing advanced analytics and AI-powered insights for businesses worldwide
//             </p>
//           </div>

//           <div className="mb-16 max-w-4xl mx-auto">
//             <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl text-center border border-purple-200 dark:border-purple-800">
//               <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 To democratize e-commerce intelligence by delivering enterprise-grade analytics and AI-powered insights to businesses of all scales, empowering them to compete effectively and thrive in the dynamic digital marketplace.
//               </p>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <BarChart3 className="w-10 h-10" />,
//                 title: "AI-Powered Analytics",
//                 desc: "Sophisticated machine learning algorithms engineered to extract actionable insights and drive strategic business decisions",
//                 color: "from-blue-500 to-blue-600",
//                 badge: undefined,
//               },
//               {
//                 icon: <Zap className="w-10 h-10" />,
//                 title: "Real-Time Intelligence",
//                 desc: "Instantaneous updates on market trends, competitive dynamics, and product performance metrics as they unfold",
//                 color: "from-green-500 to-green-600",
//                 badge: undefined,
//               },
//               {
//                 icon: <Shield className="w-10 h-10" />,
//                 title: "Enterprise Security",
//                 desc: "Bank-grade security protocols and encrypted infrastructure safeguarding your proprietary business intelligence",
//                 color: "from-orange-500 to-orange-600",
//                 badge: undefined,
//               },
//               {
//                 icon: <TrendingUp className="w-10 h-10" />,
//                 title: "Multi-Platform Support",
//                 desc: "Aggregate data from multiple e-commerce platforms for comprehensive market analysis",
//                 color: "from-purple-500 to-purple-600",
//                 badge: undefined,
//               },
//             ].map((feature, i) => (
//               <div
//                 key={i}
//                 className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
//               >
//                 <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-20">
//             <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   icon: <Zap className="w-8 h-8 text-yellow-500" />,
//                   title: "Innovation",
//                   desc: "We strive to push the boundaries of what's possible with AI and data analytics technology",
//                 },
//                 {
//                   icon: <Shield className="w-8 h-8 text-blue-500" />,
//                   title: "Transparency",
//                   desc: "We believe in clear, honest communication and transparent business practices with our users",
//                 },
//                 {
//                   icon: <BarChart3 className="w-8 h-8 text-green-500" />,
//                   title: "Customer Success",
//                   desc: "We're dedicated to supporting our customers in achieving their business objectives",
//                 },
//               ].map((value, i) => (
//                 <div key={i} className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
//                   <div className="flex justify-center mb-4">{value.icon}</div>
//                   <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
//                   <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Work Section */}
//       <section id="Work" className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Work</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Supporting data-driven decisions for businesses worldwide
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               { stat: "Early", label: "Product Stage" },
//               { stat: "India", label: "Primary Market" },
//               { stat: "Multiple", label: "Marketplaces Supported" },
//               { stat: "Growing", label: "Seller Adoption" },
//             ].map((item, i) => (
//               <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform">
//                 <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
//                   {item.stat}
//                 </div>
//                 <div className="text-gray-600 dark:text-gray-400 text-lg">{item.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Subscription Plans Section */}
//       <section id="Subscription" className="py-24 bg-white dark:bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Subscription Plans</span>
//             </h2>
//             <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
//               Choose a plan that fits your business needs
//             </p>
//             <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Transform data into actionable insights with our analytics platform
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {/* Free Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
//                   <Zap className="h-7 w-7 text-blue-600 dark:text-blue-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Free</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹0</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Perfect for getting started</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Basic dashboard access</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Up to 25 products tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Top 5 products filter</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">5 AI chat messages/month</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">5 notifications</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Weekly reports</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('free')}
//                 variant="outline" 
//                 className="w-full"
//               >
//                 Get Started
//               </Button>
//             </div>

//             {/* Basic Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-purple-500 relative">
//               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                 <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
//                   Popular
//                 </span>
//               </div>
              
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
//                   <Crown className="h-7 w-7 text-purple-600 dark:text-purple-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Basic</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹999</span>
//                 <span className="text-1xl text-gray-400 dark:text-gray-500 line-through">₹3999</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Ideal for growing businesses</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Free plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Up to 500 products tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Top 20 products filter</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">20 AI chat messages/month</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">15 notifications</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">AI Chart Summaries</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Basic competitor alerts</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Daily reports</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Email support</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('basic')}
//                 className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
//               >
//                 Upgrade to Basic
//               </Button>
//             </div>

//             {/* Premium Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
//                   <Crown className="h-7 w-7 text-yellow-600 dark:text-yellow-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Premium</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹1999</span>
//                 <span className="text-1xl text-gray-400 dark:text-gray-500 line-through">₹7999</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">For serious professionals</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Basic plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Unlimited product tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Top 100 products filter</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Unlimited AI chat</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Unlimited notifications</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Advanced AI chatbot</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Real-time data & alerts</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Priority support</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Advanced analytics</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('premium')}
//                 className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
//               >
//                 Upgrade to Premium
//               </Button>
//             </div>

//             {/* Enterprise Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
//                   <Building2 className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Enterprise</h3>
//               <div className="text-center mb-4">
//                 <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Custom Pricing</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Tailored for SMBs</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Premium plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">White-label options</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">24/7 premium support</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('enterprise')}
//                 variant="outline"
//                 className="w-full"
//               >
//                 Contact Sales
//               </Button>
//             </div>
//           </div>

//           {/* Subscription Disclaimer */}
//           <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
//             <p className="text-xs text-center text-gray-500 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
//               <strong>Subscription Terms:</strong> All plans are billed monthly. You may cancel anytime through your account settings. Cancellation takes effect at the end of the current billing period. Refunds are available within 7 days of initial purchase for first-time subscribers only. Features and pricing subject to change with 30 days' notice. By subscribing, you agree to our <a href="/terms-service" className="underline hover:text-purple-600">Terms of Service</a> and <a href="/privacy-policy" className="underline hover:text-purple-600">Privacy Policy</a>. Free trial (where applicable) limited to one per user and requires valid payment information.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="Contact" className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <h2 className="text-4xl md:text-5xl font-bold">
//                 Let's Get Started
//               </h2>
//               <p className="text-xl text-white/90">
//                 Ready to explore data-driven insights for your business? Join us today!
//               </p>
//               <Button
//                 onClick={handleGetStarted}
//                 size="lg"
//                 className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-12 py-6 text-lg rounded-full shadow-2xl"
//               >
//                 Start Free Trial
//               </Button>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <Mail className="w-6 h-6" />
//                 <span className="text-lg">contact@insydz.com</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Phone className="w-6 h-6" />
//                 <span className="text-lg">+91 98765 43210</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <MapPin className="w-6 h-6" />
//                 <span className="text-lg">New Delhi, India</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 dark:bg-black text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8 mb-8">
//             <div>
//               <div className="flex items-center space-x-3 mb-4">
//                 <img 
//                   src="/logo.png" 
//                   alt="Insydz Logo" 
//                   className="w-10 h-10 rounded-xl object-contain"
//                 />
//                 <span className="text-lg font-bold">Insydz Analytics</span>
//               </div>
//               <p className="text-gray-400">
//                 Supporting businesses with intelligent data analytics solutions
//               </p>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Quick Links</h4>
//               <div className="space-y-2">
//                 <button onClick={() => scrollToSection('About')} className="block text-gray-400 hover:text-white transition-colors">About</button>
//                 <button onClick={() => scrollToSection('Work')} className="block text-gray-400 hover:text-white transition-colors">Work</button>
//                 <button onClick={() => scrollToSection('Subscription')} className="block text-gray-400 hover:text-white transition-colors">Pricing</button>
//                 <a href="/terms-service" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
//                 <a href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Connect</h4>
//               <div className="flex space-x-4">
//                 <a title="Follow us on Facebook"
//                   href="https://www.facebook.com/profile.php?id=61586202582209"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
//                 >
//                   <Facebook className="w-5 h-5" />
//                 </a>

//                 <a title="Follow us on Twitter"
//                   href=""
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
//                 >
//                   <Twitter className="w-5 h-5" />
//                 </a>

//                 <a title="Follow us on Instagram"
//                   href=""
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
//                 >
//                   <Instagram className="w-5 h-5" />
//                 </a>

//                 <a title="Follow us on Linkedin"
//                   href=""
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
//                 >
//                   <Linkedin className="w-5 h-5" />
//                 </a>  
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8">
//             <div className="text-center mb-6">
//               <p className="text-gray-400 mb-2">
//                 © 2025 <span className="text-purple-400 font-bold">Insydz</span>. All rights reserved.
//               </p>
//               <p className="text-gray-500 text-sm">
//                 Designed & Developed in India
//               </p>
//             </div>

//             {/* Legal Disclaimer Section */}
//             <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-gray-800">
//               <div className="flex items-center justify-center space-x-2 mb-6">
//                 <svg 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   width="20" 
//                   height="20" 
//                   viewBox="0 0 24 24" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   strokeWidth="2" 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   className="text-amber-500"
//                 >
//                   <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
//                   <line x1="12" x2="12" y1="9" y2="13" />
//                   <line x1="12" x2="12.01" y1="17" y2="17" />
//                 </svg>
//                 <h5 className="text-sm font-bold text-gray-200 uppercase tracking-wider">
//                   Important Information
//                 </h5>
//               </div>

//               <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-800">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Informational Purposes</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       The analytics and insights provided by Insydz are for informational purposes only. While we strive to provide valuable data-driven insights, they should not be considered financial, legal, or professional business advice. We recommend consulting with qualified professionals before making significant business decisions.
//                     </p>

//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Data Accuracy</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       We work hard to ensure data accuracy, but our platform relies on third-party sources and AI algorithms that may occasionally contain errors or delays. Statistics and metrics shown are based on internal testing and may vary in real-world use. We encourage users to verify critical information through multiple sources.
//                     </p>

//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Service Availability</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       While we aim for 24/7 availability, occasional maintenance or technical issues may temporarily affect service access. We'll do our best to minimize disruptions and notify users when possible.
//                     </p>
//                   </div>

//                   <div>
//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Liability</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       Users are responsible for their own business decisions. While we provide useful tools and data, Insydz is not liable for business outcomes, lost profits, or other damages related to your use of our service. Our liability is limited to the amount you've paid for the service in the past 12 months.
//                     </p>

//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Third-Party Content</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       Our platform may link to third-party websites or data sources. We don't control or endorse these external resources. Your interactions with third parties are between you and them.
//                     </p>

//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Governing Law</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed">
//                       These terms are governed by the laws of India. Any disputes will be handled in the courts of New Delhi, India. By using this service, you agree to this jurisdiction.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-6 pt-6 border-t border-gray-700">
//                   <h6 className="text-xs font-bold text-gray-300 mb-2">Changes & Updates</h6>
//                   <p className="text-xs text-gray-500 leading-relaxed">
//                     We may modify features, pricing, or terms with reasonable notice to users. Continued use after changes means you accept the updated terms. We'll communicate significant changes through email or platform notifications.
//                   </p>
//                 </div>
//               </div>

//               <p className="text-[10px] text-gray-600 mt-4 text-center border-t border-gray-700/50 pt-4">
//                 *Statistics and metrics mentioned on this website are approximate estimates based on internal testing and historical data as of January 2025. Actual results may vary based on individual use cases and market conditions. These figures are for illustrative purposes and should not be considered guaranteed outcomes. "Reviews Analyzed" represents cumulative processed volume since platform inception. Accuracy percentages are averaged across test scenarios and may differ in production. User counts and features are subject to change.
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>

//       <style>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 1s ease-out;
//         }
//         .delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </div>
//   );
// }



// import { useState, useEffect, useRef } from "react";
// import { useLocation } from "wouter";
// import { TrendingUp, Menu, X, Facebook, Twitter, Instagram, BarChart3, Zap, Shield, Mail, Phone, MapPin, Check, Crown, Building2, Sun, Moon, Trophy, Target, DollarSign, Globe, BookOpen, Video, FileText, Users, Presentation, Linkedin, ChevronDown, ShoppingBag, TrendingDown, MessageCircle, Search, Package, Bell, Code, BarChart, Briefcase, Store, ShoppingCart } from "lucide-react";
// import { Button } from "@/components/ui/button";

// // Define types for menu items
// type MenuItemWithBadge = {
//   name: string;
//   icon: JSX.Element;
//   badge?: string;
// };

// type NavigationMenu = {
//   Solutions: MenuItemWithBadge[];
//   "Use Cases": MenuItemWithBadge[];
//   Features: MenuItemWithBadge[];
//   "Free Tools": MenuItemWithBadge[];
//   Integrations: MenuItemWithBadge[];
// };

// const navigationMenu: NavigationMenu = {
//   Solutions: [
//     { name: "For Amazon Sellers (India)", icon: <ShoppingBag className="w-4 h-4" /> },
//     { name: "For Flipkart Sellers", icon: <Store className="w-4 h-4" /> },
//     { name: "For E-commerce Agencies", icon: <Briefcase className="w-4 h-4" /> },
//     { name: "For Brand Managers", icon: <Users className="w-4 h-4" /> },
//   ],
//   "Use Cases": [
//     { name: "Track Competitor Prices", icon: <TrendingDown className="w-4 h-4" /> },
//     { name: "Find Profitable Products", icon: <Target className="w-4 h-4" /> },
//     { name: "Analyze Customer Reviews", icon: <MessageCircle className="w-4 h-4" /> },
//     { name: "Improve Amazon & Flipkart SEO", icon: <Search className="w-4 h-4" /> },
//     { name: "Avoid Stockouts & Missed Sales", icon: <Package className="w-4 h-4" /> },
//   ],
//   Features: [
//     { name: "Competitor Price Tracking", icon: <DollarSign className="w-4 h-4" /> },
//     { name: "Review Analytics", icon: <MessageCircle className="w-4 h-4" /> },
//     { name: "Price Optimization", icon: <TrendingUp className="w-4 h-4" /> },
//     { name: "Keyword & Rank Tracking", icon: <Search className="w-4 h-4" /> },
//     { name: "Product Research", icon: <Package className="w-4 h-4" /> },
//     { name: "AI Recommendations", icon: <Zap className="w-4 h-4" /> },
//     { name: "WhatsApp Alerts", icon: <Bell className="w-4 h-4" />, badge: "NEW" },
//   ],
//   "Free Tools": [
//     { name: "Free Amazon Product Analyzer", icon: <BarChart className="w-4 h-4" /> },
//     { name: "Free Review Sentiment Checker", icon: <MessageCircle className="w-4 h-4" /> },
//     { name: "Free Competitor Price Checker", icon: <DollarSign className="w-4 h-4" /> },
//     { name: "Free Keyword Rank Checker", icon: <Search className="w-4 h-4" />, badge: "NEW" },
//   ],
//   Integrations: [
//     { name: "Amazon", icon: <ShoppingBag className="w-4 h-4" /> },
//     { name: "Flipkart", icon: <Store className="w-4 h-4" /> },
//     { name: "Meesho", icon: <ShoppingCart className="w-4 h-4" />, badge: "NEW" },
//     { name: "Shopify", icon: <Globe className="w-4 h-4" /> },
//     { name: "API Documentation", icon: <Code className="w-4 h-4" /> },
//   ],
// };

// export default function LandingPage() {
//   const [, setLocation] = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const html = document.documentElement;
//     if (isDarkMode) {
//       html.classList.add("dark");
//     } else {
//       html.classList.remove("dark");
//     }
//   }, [isDarkMode]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

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

//   const handlePlanSelect = (planId: string) => {
//     setLocation("/login");
//   };

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       setIsMenuOpen(false);
//       setActiveDropdown(null);
//     }
//   };

//   const toggleMobileMenu = (menuName: string) => {
//     setMobileActiveMenu(mobileActiveMenu === menuName ? null : menuName);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-background dark:to-gray-900 overflow-hidden">
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
//             <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('Home')}>
//               <div className="relative">
//                 <img 
//                   src="/logo.png" 
//                   alt="Insydz Logo" 
//                   className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain"
//                 />
//                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 Insydz
//               </span>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
//               <button 
//                 onClick={() => scrollToSection('Home')} 
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
//                 onClick={() => scrollToSection('Subscription')} 
//                 className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
//               >
//                 Pricing
//               </button>

//               {/* Free Tools Dropdown */}
//               <div className="relative">
//                 <button
//                   onMouseEnter={() => setActiveDropdown('Free Tools')}
//                   className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-1"
//                 >
//                   Free Tools
//                   <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Free Tools' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {activeDropdown === 'Free Tools' && (
//                   <div 
//                     onMouseLeave={() => setActiveDropdown(null)}
//                     className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
//                   >
//                     {navigationMenu["Free Tools"].map((item, i) => (
//                       <button
//                         key={i}
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
//                 onClick={() => scrollToSection('Compare')} 
//                 className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
//               >
//                 Compare
//               </button>

//               <button 
//                 onClick={() => scrollToSection('Resources')} 
//                 className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
//               >
//                 Resources
//               </button>

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
//               <button onClick={() => scrollToSection('Home')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
//                 Home
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
//                       <button key={i} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
//                         {item.icon}
//                         {item.name}
//                         {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Use Cases */}
//               <div>
//                 <button 
//                   onClick={() => toggleMobileMenu('Use Cases')}
//                   className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                 >
//                   Use Cases
//                   <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Use Cases' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {mobileActiveMenu === 'Use Cases' && (
//                   <div className="ml-4 mt-2 space-y-1">
//                     {navigationMenu["Use Cases"].map((item, i) => (
//                       <button key={i} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
//                         {item.icon}
//                         {item.name}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Features */}
//               <div>
//                 <button 
//                   onClick={() => toggleMobileMenu('Features')}
//                   className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                 >
//                   Features
//                   <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Features' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {mobileActiveMenu === 'Features' && (
//                   <div className="ml-4 mt-2 space-y-1">
//                     {navigationMenu.Features.map((item, i) => (
//                       <button key={i} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
//                         {item.icon}
//                         {item.name}
//                         {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <button onClick={() => scrollToSection('Subscription')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
//                 Pricing
//               </button>

//               {/* Mobile Free Tools */}
//               <div>
//                 <button 
//                   onClick={() => toggleMobileMenu('Free Tools')}
//                   className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                 >
//                   Free Tools
//                   <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Free Tools' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {mobileActiveMenu === 'Free Tools' && (
//                   <div className="ml-4 mt-2 space-y-1">
//                     {navigationMenu["Free Tools"].map((item, i) => (
//                       <button key={i} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
//                         {item.icon}
//                         {item.name}
//                         {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Integrations */}
//               <div>
//                 <button 
//                   onClick={() => toggleMobileMenu('Integrations')}
//                   className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//                 >
//                   Integrations
//                   <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Integrations' ? 'rotate-180' : ''}`} />
//                 </button>
//                 {mobileActiveMenu === 'Integrations' && (
//                   <div className="ml-4 mt-2 space-y-1">
//                     {navigationMenu.Integrations.map((item, i) => (
//                       <button key={i} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg">
//                         {item.icon}
//                         {item.name}
//                         {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <button onClick={() => scrollToSection('Compare')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
//                 Compare
//               </button>

//               <button onClick={() => scrollToSection('Resources')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
//                 Resources
//               </button>

//               <button onClick={() => scrollToSection('About')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
//                 About
//               </button>

//               <Button onClick={() => scrollToSection('Contact')} className="w-full mt-2 bg-gradient-to-r from-pink-500 to-rose-500">
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
//       <section
//         id="Home"
//         className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-background dark:to-gray-900 overflow-hidden"
//       >
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center justify-center space-y-2 mt-20">
//           <p className="text-gray-600 dark:text-gray-400 text-lg font-medium tracking-wide">
//             AI-Powered E-commerce Intelligence
//           </p>

//           <h1 className="text-5xl sm:text-6xl lg:text-4xl font-bold text-gray-600 dark:text-white leading-tight">
//             Turn E-commerce Data Into
//             <br />
//             <span className="lg:text-6xl bg-gradient-to-r from-purple-900 via-pink-600 to-rose-700 bg-clip-text text-transparent">
//               Profitable Decisions 
//             </span> <br />
//             <span className="text-5xl sm:text-6xl lg:text-4xl font-bold text-gray-700 dark:text-white leading-tight">
//               Faster 
//             </span>
//           </h1>

//           <p className="text-gray-600 dark:text-gray-400 text-lg font-medium tracking-wide">
//             Insydz gives Amazon, and Flipkart sellers AI-powered insights on competitors, pricing, keywords, reviews, and products — all in one platform.
//           </p><br></br>
//           <div className="flex flex-wrap items-center justify-center gap-8 mt-6">
//           <Button
//             onClick={handleGetStarted}
//             size="sm"
//             className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105"
//           >
//             Book a Free Demo
//           </Button>

//           <Button
//             onClick={handleGetStarted}
//             size="sm"
//             className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105"
//           >
//             Start Free - No Credit Card Required
//           </Button>
//           </div>

//           <div className="grid grid-cols-3 gap-6 pt-8 text-center">
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-purple-600">250K+</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Reviews Analyzed*
//               </div>
//             </div>
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-pink-600">AI-Powered</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Market Intelligence
//               </div>
//             </div>
//             <div className="space-y-1">
//               <div className="text-3xl font-bold text-rose-600">24/7</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Platform Access
//               </div>
//             </div>
//           </div>

//           <div className="pt-12 max-w-2xl">
//             <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
//               Trusted by Leading Enterprises
//             </p>
//             <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
//               Join thousands of forward-thinking businesses leveraging cutting-edge analytics to drive unprecedented growth
//             </p>
//           </div>
//         </div>
//       </section>

// {/* Compare Section */}
//       <section id="" className="py-24 bg-gradient-to-br from-white-50 to-white-50 dark:from-gray-800 dark:to-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Built for Every E-commerce Growth Team <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Whether you're a solo seller or managing a portfolio of brands, Insydz adapts to your needs.
//             </p>
//           </div>

//           {/* Comparison Cards */}
//           <div className="grid md:grid-cols-4 gap-8">
//             {/* Amazon Sellers */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-purple-200 dark:border-purple-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Amazon Seller</h3>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Win Buy Box, optimize keywords & pricing</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Flipkart Sellers */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-purple-200 dark:border-purple-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Flipkart Sellers</h3>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Track competitors & reviews effortlessly</span>
//                 </li>
//               </ul>
//             </div>

//             {/* E-commerce Agencies */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-blue-200 dark:border-blue-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">E-commerce Agencies</h3>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Manage muliple clients with clarity</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Brand Managers */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-green-200 dark:border-green-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Brand Managers</h3>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Make confident data-backed decisions</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>






//       {/* Compare Section */}
//       <section id="Compare" className="py-24 bg-gradient-to-br from-pink-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Why Sellers Choose <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Discover how Insydz outperforms the competition across key metrics
//             </p>
//           </div>

//           {/* Key Advantages */}
//           <div className="grid md:grid-cols-4 gap-6 mb-16">
//             {[
//               { icon: <Target className="w-8 h-8" />, text: "Streamlined UX", color: "from-blue-500 to-blue-600" },
//               { icon: <Zap className="w-8 h-8" />, text: "Superior AI Intelligence", color: "from-purple-500 to-purple-600" },
//               { icon: <DollarSign className="w-8 h-8" />, text: "Exceptional Value", color: "from-green-500 to-green-600" },
//               { icon: <Globe className="w-8 h-8" />, text: "Localized Expertise", color: "from-orange-500 to-orange-600" },
//             ].map((item, i) => (
//               <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white`}>
//                   {item.icon}
//                 </div>
//                 <p className="font-semibold text-gray-800 dark:text-white">{item.text}</p>
//               </div>
//             ))}
//           </div>

//           {/* Comparison Cards */}
//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Insydz vs Helium 10 */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-purple-200 dark:border-purple-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Insydz</h3>
//                     <p className="text-sm text-gray-500">vs Helium 10</p>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Enhanced Indian & Flipkart integration</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Premium features at competitive rates</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Intuitive, user-centric interface</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Insydz vs Jungle Scout */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-blue-200 dark:border-blue-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Insydz</h3>
//                     <p className="text-sm text-gray-500">vs Jungle Scout</p>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Comprehensive multi-marketplace coverage</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Real-time competitive intelligence</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Next-generation AI insights</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Insydz vs Viral Launch */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-green-200 dark:border-green-900 hover:shadow-2xl transition-all">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
//                     <Trophy className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Insydz</h3>
//                     <p className="text-sm text-gray-500">vs Viral Launch</p>
//                   </div>
//                 </div>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Agency-optimized workflows</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Superior data precision</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">Localized market intelligence</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="text-center mt-12">
//             <Button
//               onClick={handleGetStarted}
//               size="lg"
//               className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-10 py-6 text-lg rounded-full shadow-xl"
//             >
//               Start Your Free Trial
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Resources Section */}
//       <section id="Resources" className="py-24 bg-white dark:bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Accelerate Your Growth With <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Access premium resources to elevate your e-commerce mastery
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Blog */}
//             <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-blue-200 dark:border-blue-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
//                 <BookOpen className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Expert Blog</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Cutting-edge e-commerce strategies & insights
//               </p>
//               <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
//                 Explore Articles →
//               </button>
//             </div>

//             {/* Case Studies */}
//             <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-purple-200 dark:border-purple-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
//                 <FileText className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Success Stories</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Proven results from industry leaders
//               </p>
//               <button className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
//                 View Case Studies →
//               </button>
//             </div>

//             {/* Video Tutorials */}
//             <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-pink-200 dark:border-pink-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
//                 <Video className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Video Masterclasses</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 Comprehensive platform walkthroughs
//               </p>
//               <button className="text-pink-600 dark:text-pink-400 font-semibold hover:underline">
//                 Start Learning →
//               </button>
//             </div>

//             {/* E-commerce Guides */}
//             <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-green-200 dark:border-green-800">
//               <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
//                 <BookOpen className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Strategic Playbooks</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 In-depth growth frameworks & methodologies
//               </p>
//               <button className="text-green-600 dark:text-green-400 font-semibold hover:underline">
//                 Access Guides →
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="About" className="py-24 bg-white/50 dark:bg-gray-800/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               We're revolutionizing e-commerce intelligence by democratizing advanced analytics and AI-powered insights for businesses worldwide
//             </p>
//           </div>

//           <div className="mb-16 max-w-4xl mx-auto">
//             <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl text-center border border-purple-200 dark:border-purple-800">
//               <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 To democratize e-commerce intelligence by delivering enterprise-grade analytics and AI-powered insights to businesses of all scales, empowering them to compete effectively and thrive in the dynamic digital marketplace.
//               </p>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <BarChart3 className="w-10 h-10" />,
//                 title: "AI-Powered Analytics",
//                 desc: "Sophisticated machine learning algorithms engineered to extract actionable insights and drive strategic business decisions",
//                 color: "from-blue-500 to-blue-600",
//                 badge: undefined,
//               },
//               {
//                 icon: <Zap className="w-10 h-10" />,
//                 title: "Real-Time Intelligence",
//                 desc: "Instantaneous updates on market trends, competitive dynamics, and product performance metrics as they unfold",
//                 color: "from-green-500 to-green-600",
//                 badge: undefined,
//               },
//               {
//                 icon: <Shield className="w-10 h-10" />,
//                 title: "Enterprise Security",
//                 desc: "Bank-grade security protocols and encrypted infrastructure safeguarding your proprietary business intelligence",
//                 color: "from-orange-500 to-orange-600",
//                 badge: undefined,
//               },
//               {
//                 icon: <TrendingUp className="w-10 h-10" />,
//                 title: "Multi-Platform Support",
//                 desc: "Aggregate data from multiple e-commerce platforms for comprehensive market analysis",
//                 color: "from-purple-500 to-purple-600",
//                 badge: undefined,
//               },
//             ].map((feature, i) => (
//               <div
//                 key={i}
//                 className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
//               >
//                 <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-20">
//             <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   icon: <Zap className="w-8 h-8 text-yellow-500" />,
//                   title: "Innovation",
//                   desc: "We strive to push the boundaries of what's possible with AI and data analytics technology",
//                 },
//                 {
//                   icon: <Shield className="w-8 h-8 text-blue-500" />,
//                   title: "Transparency",
//                   desc: "We believe in clear, honest communication and transparent business practices with our users",
//                 },
//                 {
//                   icon: <BarChart3 className="w-8 h-8 text-green-500" />,
//                   title: "Customer Success",
//                   desc: "We're dedicated to supporting our customers in achieving their business objectives",
//                 },
//               ].map((value, i) => (
//                 <div key={i} className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
//                   <div className="flex justify-center mb-4">{value.icon}</div>
//                   <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
//                   <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Work Section */}
//       <section id="Work" className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Work</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Supporting data-driven decisions for businesses worldwide
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               { stat: "Early", label: "Product Stage" },
//               { stat: "India", label: "Primary Market" },
//               { stat: "Multiple", label: "Marketplaces Supported" },
//               { stat: "Growing", label: "Seller Adoption" },
//             ].map((item, i) => (
//               <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform">
//                 <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
//                   {item.stat}
//                 </div>
//                 <div className="text-gray-600 dark:text-gray-400 text-lg">{item.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Subscription Plans Section */}
//       <section id="Subscription" className="py-24 bg-white dark:bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Subscription Plans</span>
//             </h2>
//             <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
//               Choose a plan that fits your business needs
//             </p>
//             <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Transform data into actionable insights with our analytics platform
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {/* Free Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
//                   <Zap className="h-7 w-7 text-blue-600 dark:text-blue-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Free</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹0</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Perfect for getting started</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Basic dashboard access</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Up to 25 products tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Top 5 products filter</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">5 AI chat messages/month</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">5 notifications</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Weekly reports</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('free')}
//                 variant="outline" 
//                 className="w-full"
//               >
//                 Get Started
//               </Button>
//             </div>

//             {/* Basic Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-purple-500 relative">
//               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                 <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
//                   Popular
//                 </span>
//               </div>
              
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
//                   <Crown className="h-7 w-7 text-purple-600 dark:text-purple-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Basic</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹999</span>
//                 <span className="text-1xl text-gray-400 dark:text-gray-500 line-through">₹3999</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Ideal for growing businesses</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Free plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Up to 500 products tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Top 20 products filter</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">20 AI chat messages/month</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">15 notifications</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">AI Chart Summaries</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Basic competitor alerts</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Daily reports</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Email support</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('basic')}
//                 className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
//               >
//                 Upgrade to Basic
//               </Button>
//             </div>

//             {/* Premium Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
//                   <Crown className="h-7 w-7 text-yellow-600 dark:text-yellow-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Premium</h3>
//               <div className="text-center mb-4">
//                 <span className="text-4xl font-bold">₹1999</span>
//                 <span className="text-1xl text-gray-400 dark:text-gray-500 line-through">₹7999</span>
//                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">For serious professionals</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Basic plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Unlimited product tracking</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Top 100 products filter</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Unlimited AI chat</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Unlimited notifications</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Advanced AI chatbot</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Real-time data & alerts</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Priority support</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">Advanced analytics</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('premium')}
//                 className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
//               >
//                 Upgrade to Premium
//               </Button>
//             </div>

//             {/* Enterprise Plan */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
//               <div className="flex justify-center mb-4">
//                 <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
//                   <Building2 className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">Enterprise</h3>
//               <div className="text-center mb-4">
//                 <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Custom Pricing</span>
//               </div>
//               <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Tailored for SMBs</p>
              
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">All Premium plan features</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">White-label options</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">24/7 premium support</span>
//                 </li>
//               </ul>
              
//               <Button 
//                 onClick={() => handlePlanSelect('enterprise')}
//                 variant="outline"
//                 className="w-full"
//               >
//                 Contact Sales
//               </Button>
//             </div>
//           </div>

//           {/* Subscription Disclaimer */}
//           <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
//             <p className="text-xs text-center text-gray-500 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
//               <strong>Subscription Terms:</strong> All plans are billed monthly. You may cancel anytime through your account settings. Cancellation takes effect at the end of the current billing period. Refunds are available within 7 days of initial purchase for first-time subscribers only. Features and pricing subject to change with 30 days' notice. By subscribing, you agree to our <a href="/terms-service" className="underline hover:text-purple-600">Terms of Service</a> and <a href="/privacy-policy" className="underline hover:text-purple-600">Privacy Policy</a>. Free trial (where applicable) limited to one per user and requires valid payment information.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="Contact" className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <h2 className="text-4xl md:text-5xl font-bold">
//                 Let's Get Started
//               </h2>
//               <p className="text-xl text-white/90">
//                 Ready to explore data-driven insights for your business? Join us today!
//               </p>
//               <Button
//                 onClick={handleGetStarted}
//                 size="lg"
//                 className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-12 py-6 text-lg rounded-full shadow-2xl"
//               >
//                 Start Free Trial
//               </Button>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <Mail className="w-6 h-6" />
//                 <span className="text-lg">contact@insydz.com</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Phone className="w-6 h-6" />
//                 <span className="text-lg">+91 98765 43210</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <MapPin className="w-6 h-6" />
//                 <span className="text-lg">New Delhi, India</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 dark:bg-black text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8 mb-8">
//             <div>
//               <div className="flex items-center space-x-3 mb-4">
//                 <img 
//                   src="/logo.png" 
//                   alt="Insydz Logo" 
//                   className="w-10 h-10 rounded-xl object-contain"
//                 />
//                 <span className="text-lg font-bold">Insydz Analytics</span>
//               </div>
//               <p className="text-gray-400">
//                 Supporting businesses with intelligent data analytics solutions
//               </p>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Quick Links</h4>
//               <div className="space-y-2">
//                 <button onClick={() => scrollToSection('About')} className="block text-gray-400 hover:text-white transition-colors">About</button>
//                 <button onClick={() => scrollToSection('Work')} className="block text-gray-400 hover:text-white transition-colors">Work</button>
//                 <button onClick={() => scrollToSection('Subscription')} className="block text-gray-400 hover:text-white transition-colors">Pricing</button>
//                 <a href="/terms-service" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
//                 <a href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Connect</h4>
//               <div className="flex space-x-4">
//                 <a title="Follow us on Facebook"
//                   href="https://www.facebook.com/profile.php?id=61586202582209"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
//                 >
//                   <Facebook className="w-5 h-5" />
//                 </a>

//                 <a title="Follow us on Twitter"
//                   href=""
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
//                 >
//                   <Twitter className="w-5 h-5" />
//                 </a>

//                 <a title="Follow us on Instagram"
//                   href=""
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
//                 >
//                   <Instagram className="w-5 h-5" />
//                 </a>

//                 <a title="Follow us on Linkedin"
//                   href=""
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
//                 >
//                   <Linkedin className="w-5 h-5" />
//                 </a>  
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8">
//             <div className="text-center mb-6">
//               <p className="text-gray-400 mb-2">
//                 © 2025 <span className="text-purple-400 font-bold">Insydz</span>. All rights reserved.
//               </p>
//               <p className="text-gray-500 text-sm">
//                 Designed & Developed in India
//               </p>
//             </div>

//             {/* Legal Disclaimer Section */}
//             <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-gray-800">
//               <div className="flex items-center justify-center space-x-2 mb-6">
//                 <svg 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   width="20" 
//                   height="20" 
//                   viewBox="0 0 24 24" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   strokeWidth="2" 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   className="text-amber-500"
//                 >
//                   <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
//                   <line x1="12" x2="12" y1="9" y2="13" />
//                   <line x1="12" x2="12.01" y1="17" y2="17" />
//                 </svg>
//                 <h5 className="text-sm font-bold text-gray-200 uppercase tracking-wider">
//                   Important Information
//                 </h5>
//               </div>

//               <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-800">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Informational Purposes</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       The analytics and insights provided by Insydz are for informational purposes only. While we strive to provide valuable data-driven insights, they should not be considered financial, legal, or professional business advice. We recommend consulting with qualified professionals before making significant business decisions.
//                     </p>

//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Data Accuracy</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       We work hard to ensure data accuracy, but our platform relies on third-party sources and AI algorithms that may occasionally contain errors or delays. Statistics and metrics shown are based on internal testing and may vary in real-world use. We encourage users to verify critical information through multiple sources.
//                     </p>

//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Service Availability</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       While we aim for 24/7 availability, occasional maintenance or technical issues may temporarily affect service access. We'll do our best to minimize disruptions and notify users when possible.
//                     </p>
//                   </div>

//                   <div>
//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Liability</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       Users are responsible for their own business decisions. While we provide useful tools and data, Insydz is not liable for business outcomes, lost profits, or other damages related to your use of our service. Our liability is limited to the amount you've paid for the service in the past 12 months.
//                     </p>

//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Third-Party Content</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed mb-4">
//                       Our platform may link to third-party websites or data sources. We don't control or endorse these external resources. Your interactions with third parties are between you and them.
//                     </p>

//                     <h6 className="text-xs font-bold text-gray-300 mb-2">Governing Law</h6>
//                     <p className="text-xs text-gray-500 leading-relaxed">
//                       These terms are governed by the laws of India. Any disputes will be handled in the courts of New Delhi, India. By using this service, you agree to this jurisdiction.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-6 pt-6 border-t border-gray-700">
//                   <h6 className="text-xs font-bold text-gray-300 mb-2">Changes & Updates</h6>
//                   <p className="text-xs text-gray-500 leading-relaxed">
//                     We may modify features, pricing, or terms with reasonable notice to users. Continued use after changes means you accept the updated terms. We'll communicate significant changes through email or platform notifications.
//                   </p>
//                 </div>
//               </div>

//               <p className="text-[10px] text-gray-600 mt-4 text-center border-t border-gray-700/50 pt-4">
//                 *Statistics and metrics mentioned on this website are approximate estimates based on internal testing and historical data as of January 2025. Actual results may vary based on individual use cases and market conditions. These figures are for illustrative purposes and should not be considered guaranteed outcomes. "Reviews Analyzed" represents cumulative processed volume since platform inception. Accuracy percentages are averaged across test scenarios and may differ in production. User counts and features are subject to change.
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>

//       <style>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 1s ease-out;
//         }
//         .delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </div>
//   );
// }





























import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { TrendingUp, Menu, X, Facebook, Twitter, Instagram, BarChart3, Zap, Shield, Mail, Phone, MapPin, Check, Crown, Building2, Sun, Moon, Trophy, Target, DollarSign, Globe, BookOpen, Video, FileText, Users, Presentation, Linkedin, ChevronDown, ShoppingBag, TrendingDown, MessageCircle, Search, Package, Bell, Code, BarChart, Briefcase, Store, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define types for menu items
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
  Integrations: MenuItemWithBadge[];
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
    { name: "All Use Cases", icon: <TrendingDown className="w-4 h-4" />, route: "/use-cases" },
    { name: "Track Competitor Prices", icon: <TrendingDown className="w-4 h-4" />, route: "/use-cases/track-competitor-prices" },
    { name: "Find Profitable Products", icon: <Target className="w-4 h-4" />, route: "/use-cases/find-profitable-products" },
    { name: "Analyze Customer Reviews", icon: <MessageCircle className="w-4 h-4" />, route: "/use-cases/analyze-customer-reviews" },
    { name: "Improve Amazon & Flipkart SEO", icon: <Search className="w-4 h-4" />, route: "/use-cases/improve-seo" },
    { name: "Avoid Stockouts & Missed Sales", icon: <Package className="w-4 h-4" />, route: "/use-cases/avoid-stockouts" },
  ],
  Features: [
    { name: "Competitor Price Tracking", icon: <DollarSign className="w-4 h-4" />, route: "/features/competitor-price-tracking-feature" },
    { name: "Review Analytics", icon: <MessageCircle className="w-4 h-4" />, route: "/features/review-analytics-feature" },
    { name: "Price Optimization", icon: <TrendingUp className="w-4 h-4" />, route: "/features/price-optimization-feature" },
    { name: "Keyword & Rank Tracking", icon: <Search className="w-4 h-4" />, route: "/features/keyword-rank-tracking-feature" },
    { name: "Product Research", icon: <Package className="w-4 h-4" />, route: "/features/product-research-feature" },
    { name: "AI Recommendations", icon: <Zap className="w-4 h-4" />, route: "/features/ai-recommendations-feature" },
    { name: "WhatsApp Alerts", icon: <Bell className="w-4 h-4" />, badge: "NEW", route: "/features/whatsapp-alerts-feature" },
  ],
  "Free Tools": [
    { name: "Free Amazon Product Analyzer", icon: <BarChart className="w-4 h-4" /> },
    { name: "Free Review Sentiment Checker", icon: <MessageCircle className="w-4 h-4" /> },
    { name: "Free Competitor Price Checker", icon: <DollarSign className="w-4 h-4" /> },
    { name: "Free Keyword Rank Checker", icon: <Search className="w-4 h-4" />, badge: "NEW" },
  ],
  Integrations: [
    { name: "Amazon", icon: <ShoppingBag className="w-4 h-4" /> },
    { name: "Flipkart", icon: <Store className="w-4 h-4" /> },
    // { name: "Meesho", icon: <ShoppingCart className="w-4 h-4" />, badge: "NEW" },
    { name: "Shopify", icon: <Globe className="w-4 h-4" /> },
    { name: "API Documentation", icon: <Code className="w-4 h-4" /> },
  ],
};

export default function LandingPage() {
  const [, setLocation] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handlePlanSelect = (planId: string) => {
    setLocation("/login");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
      setActiveDropdown(null);
    }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-background dark:to-gray-900 overflow-hidden">
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
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('Home')}>
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

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
              <button 
                onClick={() => scrollToSection('Home')} 
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
                onClick={() => scrollToSection('Subscription')} 
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


              <button 
                onClick={() => scrollToSection('Compare')} 
                className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
              >
                Compare
              </button>

              <button 
                onClick={() => scrollToSection('Resources')} 
                className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
              >
                Resources
              </button>

              <button 
                onClick={() => scrollToSection('About')} 
                className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
              >
                About
              </button>

              <Button onClick={() => scrollToSection('Contact')} className="ml-2 text-sm bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Contact Us
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
              <button onClick={() => scrollToSection('Home')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                Home
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
                        {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
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

              <button onClick={() => scrollToSection('Subscription')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
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

              {/* Mobile Integrations */}
              <div>
                <button 
                  onClick={() => toggleMobileMenu('Integrations')}
                  className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
                >
                  Integrations
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === 'Integrations' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveMenu === 'Integrations' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {navigationMenu.Integrations.map((item, i) => (
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

              <button onClick={() => scrollToSection('Compare')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                Compare
              </button>

              <button onClick={() => scrollToSection('Resources')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                Resources
              </button>

              <button onClick={() => scrollToSection('About')} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
                About
              </button>

              <Button onClick={() => scrollToSection('Contact')} className="w-full mt-2 bg-gradient-to-r from-pink-500 to-rose-500">
                Contact Us
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
      <section
        id="Home"
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-background dark:to-gray-900 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center justify-center space-y-2 mt-20">
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium tracking-wide">
            AI-Powered E-commerce Intelligence
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-4xl font-bold text-gray-600 dark:text-white leading-tight">
            Turn E-commerce Data Into
            <br />
            <span className="lg:text-6xl bg-gradient-to-r from-purple-900 via-pink-600 to-rose-700 bg-clip-text text-transparent">
              Profitable Decisions 
            </span> <br />
            <span className="text-5xl sm:text-6xl lg:text-4xl font-bold text-gray-700 dark:text-white leading-tight">
              Faster 
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium tracking-wide">
            Insydz gives Amazon, and Flipkart sellers AI-powered insights on competitors, pricing, keywords, reviews, and products — all in one platform.
          </p><br></br>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-6">
          <Button
            onClick={handleGetStarted}
            size="sm"
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105"
          >
            Book a Free Demo
          </Button>

          <Button
            onClick={handleGetStarted}
            size="sm"
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105"
          >
            Start Free - No Credit Card Required
          </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 text-center">
            <div className="space-y-1">
              <div className="text-3xl font-bold text-purple-600">250K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Reviews Analyzed*
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-pink-600">AI-Powered</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Market Intelligence
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-rose-600">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Platform Access
              </div>
            </div>
          </div>

          <div className="pt-12 max-w-2xl">
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Trusted by Leading Enterprises
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Join thousands of forward-thinking businesses leveraging cutting-edge analytics to drive unprecedented growth
            </p>
          </div>
        </div>
      </section>

{/* Compare Section */}
      <section id="" className="py-24 bg-gradient-to-br from-white-50 to-white-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for Every E-commerce Growth Team <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Whether you're a solo seller or managing a portfolio of brands, Insydz adapts to your needs.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-4 gap-8">
            {/* Amazon Sellers */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-purple-200 dark:border-purple-900 hover:shadow-2xl transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Amazon Seller</h3>
                  </div>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Win Buy Box, optimize keywords & pricing</span>
                </li>
              </ul>
            </div>

            {/* Flipkart Sellers */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-purple-200 dark:border-purple-900 hover:shadow-2xl transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Flipkart Sellers</h3>
                  </div>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Track competitors & reviews effortlessly</span>
                </li>
              </ul>
            </div>

            {/* E-commerce Agencies */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-blue-200 dark:border-blue-900 hover:shadow-2xl transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">E-commerce Agencies</h3>
                  </div>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Manage muliple clients with clarity</span>
                </li>
              </ul>
            </div>

            {/* Brand Managers */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-green-200 dark:border-green-900 hover:shadow-2xl transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Brand Managers</h3>
                  </div>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Make confident data-backed decisions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>






      {/* Compare Section */}
      <section id="Compare" className="py-24 bg-gradient-to-br from-pink-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Sellers Choose <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover how Insydz outperforms the competition across key metrics
            </p>
          </div>

          {/* Key Advantages */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <Target className="w-8 h-8" />, text: "Streamlined UX", color: "from-blue-500 to-blue-600" },
              { icon: <Zap className="w-8 h-8" />, text: "Superior AI Intelligence", color: "from-purple-500 to-purple-600" },
              { icon: <DollarSign className="w-8 h-8" />, text: "Exceptional Value", color: "from-green-500 to-green-600" },
              { icon: <Globe className="w-8 h-8" />, text: "Localized Expertise", color: "from-orange-500 to-orange-600" },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white`}>
                  {item.icon}
                </div>
                <p className="font-semibold text-gray-800 dark:text-white">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Insydz vs Helium 10 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-purple-200 dark:border-purple-900 hover:shadow-2xl transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Insydz</h3>
                    <p className="text-sm text-gray-500">vs Helium 10</p>
                  </div>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Enhanced Indian & Flipkart integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Premium features at competitive rates</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Intuitive, user-centric interface</span>
                </li>
              </ul>
            </div>

            {/* Insydz vs Jungle Scout */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-blue-200 dark:border-blue-900 hover:shadow-2xl transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Insydz</h3>
                    <p className="text-sm text-gray-500">vs Jungle Scout</p>
                  </div>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Comprehensive multi-marketplace coverage</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Real-time competitive intelligence</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Next-generation AI insights</span>
                </li>
              </ul>
            </div>

            {/* Insydz vs Viral Launch */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-green-200 dark:border-green-900 hover:shadow-2xl transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Insydz</h3>
                    <p className="text-sm text-gray-500">vs Viral Launch</p>
                  </div>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Agency-optimized workflows</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Superior data precision</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Localized market intelligence</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-10 py-6 text-lg rounded-full shadow-xl"
            >
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="Resources" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Accelerate Your Growth With <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Access premium resources to elevate your e-commerce mastery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Blog */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-blue-200 dark:border-blue-800">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Expert Blog</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Cutting-edge e-commerce strategies & insights
              </p>
              <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Explore Articles →
              </button>
            </div>

            {/* Case Studies */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-purple-200 dark:border-purple-800">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Success Stories</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Proven results from industry leaders
              </p>
              <button className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                View Case Studies →
              </button>
            </div>

            {/* Video Tutorials */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-pink-200 dark:border-pink-800">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Video Masterclasses</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Comprehensive platform walkthroughs
              </p>
              <button className="text-pink-600 dark:text-pink-400 font-semibold hover:underline">
                Start Learning →
              </button>
            </div>

            {/* E-commerce Guides */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-green-200 dark:border-green-800">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Strategic Playbooks</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                In-depth growth frameworks & methodologies
              </p>
              <button className="text-green-600 dark:text-green-400 font-semibold hover:underline">
                Access Guides →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="About" className="py-24 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We're revolutionizing e-commerce intelligence by democratizing advanced analytics and AI-powered insights for businesses worldwide
            </p>
          </div>

          <div className="mb-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl text-center border border-purple-200 dark:border-purple-800">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                To democratize e-commerce intelligence by delivering enterprise-grade analytics and AI-powered insights to businesses of all scales, empowering them to compete effectively and thrive in the dynamic digital marketplace.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BarChart3 className="w-10 h-10" />,
                title: "AI-Powered Analytics",
                desc: "Sophisticated machine learning algorithms engineered to extract actionable insights and drive strategic business decisions",
                color: "from-blue-500 to-blue-600",
                badge: undefined,
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Real-Time Intelligence",
                desc: "Instantaneous updates on market trends, competitive dynamics, and product performance metrics as they unfold",
                color: "from-green-500 to-green-600",
                badge: undefined,
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Enterprise Security",
                desc: "Bank-grade security protocols and encrypted infrastructure safeguarding your proprietary business intelligence",
                color: "from-orange-500 to-orange-600",
                badge: undefined,
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "Multi-Platform Support",
                desc: "Aggregate data from multiple e-commerce platforms for comprehensive market analysis",
                color: "from-purple-500 to-purple-600",
                badge: undefined,
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8 text-yellow-500" />,
                  title: "Innovation",
                  desc: "We strive to push the boundaries of what's possible with AI and data analytics technology",
                },
                {
                  icon: <Shield className="w-8 h-8 text-blue-500" />,
                  title: "Transparency",
                  desc: "We believe in clear, honest communication and transparent business practices with our users",
                },
                {
                  icon: <BarChart3 className="w-8 h-8 text-green-500" />,
                  title: "Customer Success",
                  desc: "We're dedicated to supporting our customers in achieving their business objectives",
                },
              ].map((value, i) => (
                <div key={i} className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="Work" className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Supporting data-driven decisions for businesses worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { stat: "Early", label: "Product Stage" },
              { stat: "India", label: "Primary Market" },
              { stat: "Multiple", label: "Marketplaces Supported" },
              { stat: "Growing", label: "Seller Adoption" },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {item.stat}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-lg">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section id="Subscription" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Subscription Plans</span>
            </h2>
            <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Choose a plan that fits your business needs
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Transform data into actionable insights with our analytics platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free Plan */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  <Zap className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Free</h3>
              <div className="text-center mb-4">
                <span className="text-4xl font-bold">₹0</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Perfect for getting started</p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Basic dashboard access</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Up to 25 products tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Top 5 products filter</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">5 AI chat messages/month</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">5 notifications</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Weekly reports</span>
                </li>
              </ul>
              
              <Button 
                onClick={() => handlePlanSelect('free')}
                variant="outline" 
                className="w-full"
              >
                Get Started
              </Button>
            </div>

            {/* Basic Plan */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Popular
                </span>
              </div>
              
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                  <Crown className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Basic</h3>
              <div className="text-center mb-4">
                <span className="text-4xl font-bold">₹999</span>
                <span className="text-1xl text-gray-400 dark:text-gray-500 line-through">₹3999</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Ideal for growing businesses</p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">All Free plan features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Up to 500 products tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Top 20 products filter</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">20 AI chat messages/month</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">15 notifications</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">AI Chart Summaries</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Basic competitor alerts</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Daily reports</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Email support</span>
                </li>
              </ul>
              
              <Button 
                onClick={() => handlePlanSelect('basic')}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Upgrade to Basic
              </Button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
                  <Crown className="h-7 w-7 text-yellow-600 dark:text-yellow-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Premium</h3>
              <div className="text-center mb-4">
                <span className="text-4xl font-bold">₹1999</span>
                <span className="text-1xl text-gray-400 dark:text-gray-500 line-through">₹7999</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-6">For serious professionals</p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">All Basic plan features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited product tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Top 100 products filter</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited AI chat</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited notifications</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced AI chatbot</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Real-time data & alerts</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Priority support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced analytics</span>
                </li>
              </ul>
              
              <Button 
                onClick={() => handlePlanSelect('premium')}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
              >
                Upgrade to Premium
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                  <Building2 className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Enterprise</h3>
              <div className="text-center mb-4">
                <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Custom Pricing</span>
              </div>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Tailored for SMBs</p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">All Premium plan features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">White-label options</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">24/7 premium support</span>
                </li>
              </ul>
              
              <Button 
                onClick={() => handlePlanSelect('enterprise')}
                variant="outline"
                className="w-full"
              >
                Contact Sales
              </Button>
            </div>
          </div>

          {/* Subscription Disclaimer */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              <strong>Subscription Terms:</strong> All plans are billed monthly. You may cancel anytime through your account settings. Cancellation takes effect at the end of the current billing period. Refunds are available within 7 days of initial purchase for first-time subscribers only. Features and pricing subject to change with 30 days' notice. By subscribing, you agree to our <a href="/terms-service" className="underline hover:text-purple-600">Terms of Service</a> and <a href="/privacy-policy" className="underline hover:text-purple-600">Privacy Policy</a>. Free trial (where applicable) limited to one per user and requires valid payment information.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="Contact" className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Let's Get Started
              </h2>
              <p className="text-xl text-white/90">
                Ready to explore data-driven insights for your business? Join us today!
              </p>
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-12 py-6 text-lg rounded-full shadow-2xl"
              >
                Start Free Trial
              </Button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6" />
                <span className="text-lg">contact@insydz.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6" />
                <span className="text-lg">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6" />
                <span className="text-lg">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="Insydz Logo" 
                  className="w-10 h-10 rounded-xl object-contain"
                />
                <span className="text-lg font-bold">Insydz Analytics</span>
              </div>
              <p className="text-gray-400">
                Supporting businesses with intelligent data analytics solutions
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('About')} className="block text-gray-400 hover:text-white transition-colors">About</button>
                <button onClick={() => scrollToSection('Work')} className="block text-gray-400 hover:text-white transition-colors">Work</button>
                <button onClick={() => scrollToSection('Subscription')} className="block text-gray-400 hover:text-white transition-colors">Pricing</button>
                <a href="/terms-service" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a title="Follow us on Facebook"
                  href="https://www.facebook.com/profile.php?id=61586202582209"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a title="Follow us on Twitter"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>

                <a title="Follow us on Instagram"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a title="Follow us on Linkedin"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>  
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="text-center mb-6">
              <p className="text-gray-400 mb-2">
                © 2025 <span className="text-purple-400 font-bold">Insydz</span>. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Designed & Developed in India
              </p>
            </div>

            {/* Legal Disclaimer Section */}
            <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-gray-800">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-amber-500"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <line x1="12" x2="12" y1="9" y2="13" />
                  <line x1="12" x2="12.01" y1="17" y2="17" />
                </svg>
                <h5 className="text-sm font-bold text-gray-200 uppercase tracking-wider">
                  Important Information
                </h5>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-800">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h6 className="text-xs font-bold text-gray-300 mb-2">Informational Purposes</h6>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">
                      The analytics and insights provided by Insydz are for informational purposes only. While we strive to provide valuable data-driven insights, they should not be considered financial, legal, or professional business advice. We recommend consulting with qualified professionals before making significant business decisions.
                    </p>

                    <h6 className="text-xs font-bold text-gray-300 mb-2">Data Accuracy</h6>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">
                      We work hard to ensure data accuracy, but our platform relies on third-party sources and AI algorithms that may occasionally contain errors or delays. Statistics and metrics shown are based on internal testing and may vary in real-world use. We encourage users to verify critical information through multiple sources.
                    </p>

                    <h6 className="text-xs font-bold text-gray-300 mb-2">Service Availability</h6>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">
                      While we aim for 24/7 availability, occasional maintenance or technical issues may temporarily affect service access. We'll do our best to minimize disruptions and notify users when possible.
                    </p>
                  </div>

                  <div>
                    <h6 className="text-xs font-bold text-gray-300 mb-2">Liability</h6>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">
                      Users are responsible for their own business decisions. While we provide useful tools and data, Insydz is not liable for business outcomes, lost profits, or other damages related to your use of our service. Our liability is limited to the amount you've paid for the service in the past 12 months.
                    </p>

                    <h6 className="text-xs font-bold text-gray-300 mb-2">Third-Party Content</h6>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">
                      Our platform may link to third-party websites or data sources. We don't control or endorse these external resources. Your interactions with third parties are between you and them.
                    </p>

                    <h6 className="text-xs font-bold text-gray-300 mb-2">Governing Law</h6>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      These terms are governed by the laws of India. Any disputes will be handled in the courts of New Delhi, India. By using this service, you agree to this jurisdiction.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <h6 className="text-xs font-bold text-gray-300 mb-2">Changes & Updates</h6>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    We may modify features, pricing, or terms with reasonable notice to users. Continued use after changes means you accept the updated terms. We'll communicate significant changes through email or platform notifications.
                  </p>
                </div>
              </div>

              <p className="text-[10px] text-gray-600 mt-4 text-center border-t border-gray-700/50 pt-4">
                *Statistics and metrics mentioned on this website are approximate estimates based on internal testing and historical data as of January 2025. Actual results may vary based on individual use cases and market conditions. These figures are for illustrative purposes and should not be considered guaranteed outcomes. "Reviews Analyzed" represents cumulative processed volume since platform inception. Accuracy percentages are averaged across test scenarios and may differ in production. User counts and features are subject to change.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}







