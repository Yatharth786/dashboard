// import { useState, useEffect } from "react";
// import { useLocation } from "wouter";
// import { TrendingUp, Menu, X, Facebook, Twitter, Instagram } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function LandingPage() {
//   const [, setLocation] = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

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
//             <div className="flex items-center space-x-3 group cursor-pointer">
//               <div className="relative">
//                 <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg">
//                   <TrendingUp className="text-white h-6 w-6" />
//                 </div>
//                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 Insydz
//               </span>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               <a
//                 href="#home"
//                 className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
//               >
//                 home
//               </a>
//               <a
//                 href="#about"
//                 className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
//               >
//                 about
//               </a>
//               <a
//                 href="#work"
//                 className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
//               >
//                 work
//               </a>
//               <a
//                 href="#clients"
//                 className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
//               >
//                 clients
//               </a>
//               <Button
//                 onClick={handleGetStarted}
//                 className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
//               >
//                 contact
//               </Button>
//             </div>

//             {/* Social Icons */}
//             <div className="hidden lg:flex items-center space-x-3">
//               <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
//                 <Facebook className="w-5 h-5 text-white dark:text-black" />
//               </div>
//               <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
//                 <Twitter className="w-5 h-5 text-white dark:text-black" />
//               </div>
//               <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
//                 <Instagram className="w-5 h-5 text-white dark:text-black" />
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
//             <div className="px-4 py-4 space-y-3">
//               <a
//                 href="#home"
//                 className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium"
//               >
//                 home
//               </a>
//               <a
//                 href="#about"
//                 className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium"
//               >
//                 about
//               </a>
//               <a
//                 href="#work"
//                 className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium"
//               >
//                 work
//               </a>
//               <a
//                 href="#clients"
//                 className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium"
//               >
//                 clients
//               </a>
//               <Button
//                 onClick={handleGetStarted}
//                 className="w-full bg-gradient-to-r from-pink-500 to-rose-500"
//               >
//                 contact
//               </Button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <div className="relative min-h-screen flex items-center pt-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="space-y-8 animate-fade-in">
//               <div className="space-y-4">
//                 <p className="text-gray-600 dark:text-gray-400 text-lg font-medium tracking-wide">
//                   Intelligent and Responsive
//                 </p>
//                 <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
//                   Data-Driven
//                   <br />
//                   <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
//                     Analytics
//                   </span>
//                 </h1>
//                 <p className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-700 dark:text-gray-300">
//                   Smart & Powerful
//                 </p>
//               </div>

//               <Button
//                 onClick={handleGetStarted}
//                 size="lg"
//                 className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105"
//               >
//                 Get Started
//               </Button>

//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-6 pt-8">
//                 <div className="space-y-1">
//                   <div className="text-3xl font-bold text-purple-600">500K+</div>
//                   <div className="text-sm text-gray-600 dark:text-gray-400">
//                     Reviews Analyzed
//                   </div>
//                 </div>
//                 <div className="space-y-1">
//                   <div className="text-3xl font-bold text-pink-600">98%</div>
//                   <div className="text-sm text-gray-600 dark:text-gray-400">
//                     Accuracy Rate
//                   </div>
//                 </div>
//                 <div className="space-y-1">
//                   <div className="text-3xl font-bold text-rose-600">24/7</div>
//                   <div className="text-sm text-gray-600 dark:text-gray-400">
//                     Real-time Data
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Content - Decorative */}
//             <div className="relative hidden lg:block">
//               {/* Large Circle with Gradient */}
//               <div className="relative w-full aspect-square">
//                 <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-500 to-yellow-500 rounded-full transform rotate-12 shadow-2xl">
//                   {/* Inner logo watermark */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="text-[20rem] font-bold text-white/10 select-none">
//                       AA
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating plant decoration */}
//                 <div className="absolute bottom-0 right-0 w-48 h-48 transform translate-x-8 translate-y-8">
//                   <div className="relative w-full h-full">
//                     {/* Pot */}
//                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-20 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-t-xl rounded-b-3xl shadow-xl"></div>
//                     {/* Plant leaves */}
//                     <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-40 h-32">
//                       <div className="absolute top-0 left-8 w-16 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-full transform -rotate-12 shadow-lg"></div>
//                       <div className="absolute top-2 right-8 w-16 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full transform rotate-12 shadow-lg"></div>
//                       <div className="absolute top-6 left-12 w-14 h-18 bg-gradient-to-br from-green-600 to-green-800 rounded-full shadow-lg"></div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating elements */}
//                 <div className="absolute top-10 -left-10 w-20 h-20 bg-purple-400/30 rounded-full blur-xl animate-pulse"></div>
//                 <div className="absolute bottom-20 -right-10 w-32 h-32 bg-pink-400/30 rounded-full blur-xl animate-pulse delay-1000"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="py-20 bg-white/50 dark:bg-gray-800/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Real-time Insights",
//                 desc: "Get instant analytics from Amazon reviews",
//                 color: "from-purple-500 to-pink-500",
//               },
//               {
//                 title: "Smart Filtering",
//                 desc: "Advanced filters for precise data analysis",
//                 color: "from-pink-500 to-rose-500",
//               },
//               {
//                 title: "Custom Reports",
//                 desc: "Generate detailed reports on demand",
//                 color: "from-rose-500 to-orange-500",
//               },
//             ].map((feature, i) => (
//               <div
//                 key={i}
//                 className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
//               >
//                 <div
//                   className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4`}
//                 >
//                   <TrendingUp className="text-white h-8 w-8" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

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
// import { TrendingUp, Menu, X, Facebook, Twitter, Instagram, BarChart3, Zap, Shield, Mail, Phone, MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function LandingPage() {
//   const [, setLocation] = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

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
//               <div className="relative">
//                 <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg">
//                   <TrendingUp className="text-white h-6 w-6" />
//                 </div>
//                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 Analytics
//               </span>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               <button
//                 onClick={() => scrollToSection('home')}
//                 className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
//               >
//                 home
//               </button>
//               <button
//                 onClick={() => scrollToSection('about')}
//                 className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
//               >
//                 about
//               </button>
//               <button
//                 onClick={() => scrollToSection('work')}
//                 className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
//               >
//                 work
//               </button>
//               <button
//                 onClick={() => scrollToSection('clients')}
//                 className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
//               >
//                 clients
//               </button>
//               <Button
//                 onClick={() => scrollToSection('contact')}
//                 className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
//               >
//                 contact
//               </Button>
//             </div>

//             {/* Social Icons */}
//             <div className="hidden lg:flex items-center space-x-3">
//               <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
//                 <Facebook className="w-5 h-5 text-white dark:text-black" />
//               </div>
//               <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
//                 <Twitter className="w-5 h-5 text-white dark:text-black" />
//               </div>
//               <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
//                 <Instagram className="w-5 h-5 text-white dark:text-black" />
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
//             <div className="px-4 py-4 space-y-3">
//               <button
//                 onClick={() => scrollToSection('home')}
//                 className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium"
//               >
//                 home
//               </button>
//               <button
//                 onClick={() => scrollToSection('about')}
//                 className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium"
//               >
//                 about
//               </button>
//               <button
//                 onClick={() => scrollToSection('work')}
//                 className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium"
//               >
//                 work
//               </button>
//               <button
//                 onClick={() => scrollToSection('clients')}
//                 className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium"
//               >
//                 clients
//               </button>
//               <Button
//                 onClick={() => scrollToSection('contact')}
//                 className="w-full bg-gradient-to-r from-pink-500 to-rose-500"
//               >
//                 contact
//               </Button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="relative min-h-screen flex items-center pt-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="space-y-8 animate-fade-in">
//               <div className="space-y-4">
//                 <p className="text-gray-600 dark:text-gray-400 text-lg font-medium tracking-wide">
//                   Intelligent and Responsive
//                 </p>
//                 <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
//                   Data-Driven
//                   <br />
//                   <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
//                     Analytics
//                   </span>
//                 </h1>
//                 <p className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-700 dark:text-gray-300">
//                   Smart & Powerful
//                 </p>
//               </div>

//               <Button
//                 onClick={handleGetStarted}
//                 size="lg"
//                 className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105"
//               >
//                 Get Started
//               </Button>

//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-6 pt-8">
//                 <div className="space-y-1">
//                   <div className="text-3xl font-bold text-purple-600">500K+</div>
//                   <div className="text-sm text-gray-600 dark:text-gray-400">
//                     Reviews Analyzed
//                   </div>
//                 </div>
//                 <div className="space-y-1">
//                   <div className="text-3xl font-bold text-pink-600">98%</div>
//                   <div className="text-sm text-gray-600 dark:text-gray-400">
//                     Accuracy Rate
//                   </div>
//                 </div>
//                 <div className="space-y-1">
//                   <div className="text-3xl font-bold text-rose-600">24/7</div>
//                   <div className="text-sm text-gray-600 dark:text-gray-400">
//                     Real-time Data
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Content - Decorative */}
//             <div className="relative hidden lg:block">
//               <div className="relative w-full aspect-square">
//                 <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-500 to-yellow-500 rounded-full transform rotate-12 shadow-2xl">
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="text-[20rem] font-bold text-white/10 select-none">
//                       AA
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute bottom-0 right-0 w-48 h-48 transform translate-x-8 translate-y-8">
//                   <div className="relative w-full h-full">
//                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-20 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-t-xl rounded-b-3xl shadow-xl"></div>
//                     <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-40 h-32">
//                       <div className="absolute top-0 left-8 w-16 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-full transform -rotate-12 shadow-lg"></div>
//                       <div className="absolute top-2 right-8 w-16 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full transform rotate-12 shadow-lg"></div>
//                       <div className="absolute top-6 left-12 w-14 h-18 bg-gradient-to-br from-green-600 to-green-800 rounded-full shadow-lg"></div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute top-10 -left-10 w-20 h-20 bg-purple-400/30 rounded-full blur-xl animate-pulse"></div>
//                 <div className="absolute bottom-20 -right-10 w-32 h-32 bg-pink-400/30 rounded-full blur-xl animate-pulse delay-1000"></div>
//               </div>
//             </div>
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

//       {/* Clients Section */}
//       <section id="clients" className="py-24 bg-white dark:bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Trusted by <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Businesses</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Join thousands of businesses making smarter decisions with our analytics platform
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-12 items-center justify-items-center opacity-60">
//             {[1, 2, 3, 4, 5, 6].map((i) => (
//               <div key={i} className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center">
//                 <span className="text-4xl font-bold text-gray-400 dark:text-gray-600">Logo</span>
//               </div>
//             ))}
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
//                 <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
//                   <TrendingUp className="text-white h-5 w-5" />
//                 </div>
//                 <span className="text-lg font-bold">Analytics Platform</span>
//               </div>
//               <p className="text-gray-400">
//                 Empowering businesses with intelligent data analytics
//               </p>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Quick Links</h4>
//               <div className="space-y-2">
//                 <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">About</button>
//                 <button onClick={() => scrollToSection('work')} className="block text-gray-400 hover:text-white transition-colors">Work</button>
//                 <button onClick={() => scrollToSection('clients')} className="block text-gray-400 hover:text-white transition-colors">Clients</button>
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
//               © 2024 Amazon Reviews Analytics Platform. Created by <span className="text-purple-400 font-semibold">Your Name</span>
//             </p>
//             <p className="text-gray-500 text-sm mt-2">
//               Designed & Developed with ❤️ in India
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

import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { TrendingUp, Menu, X, Facebook, Twitter, Instagram, BarChart3, Zap, Shield, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const [, setLocation] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetStarted = () => {
    const user = localStorage.getItem('user');
    if (user) {
      setLocation("/dashboard");
    } else {
      setLocation("/login");
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-background dark:to-gray-900 overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                  <TrendingUp className="text-white h-6 w-6" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Insydz
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
              >
                home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
              >
                about
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
              >
                work
              </button>
              <button
                onClick={() => scrollToSection('clients')}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
              >
                clients
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                contact
              </Button>
            </div>

            {/* Social Icons */}
            <div className="hidden lg:flex items-center space-x-3">
              <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Facebook className="w-5 h-5 text-white dark:text-black" />
              </div>
              <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Twitter className="w-5 h-5 text-white dark:text-black" />
              </div>
              <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Instagram className="w-5 h-5 text-white dark:text-black" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium"
              >
                home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium"
              >
                about
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium"
              >
                work
              </button>
              <button
                onClick={() => scrollToSection('clients')}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium"
              >
                clients
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500"
              >
                contact
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 text-lg font-medium tracking-wide">
                  Intelligent and Responsive
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                  Data-Driven
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                    Analytics
                  </span>
                </h1>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-700 dark:text-gray-300">
                  Smart & Powerful
                </p>
              </div>

              <Button
                onClick={handleGetStarted}
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105"
              >
                Get Started
              </Button>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-purple-600">500K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Reviews Analyzed
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-pink-600">98%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Accuracy Rate
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-rose-600">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Real-time Data
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Decorative */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-500 to-yellow-500 rounded-full transform rotate-12 shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[20rem] font-bold text-white/10 select-none">
                      AA
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 w-48 h-48 transform translate-x-8 translate-y-8">
                  <div className="relative w-full h-full">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-20 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-t-xl rounded-b-3xl shadow-xl"></div>
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-40 h-32">
                      <div className="absolute top-0 left-8 w-16 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-full transform -rotate-12 shadow-lg"></div>
                      <div className="absolute top-2 right-8 w-16 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full transform rotate-12 shadow-lg"></div>
                      <div className="absolute top-6 left-12 w-14 h-18 bg-gradient-to-br from-green-600 to-green-800 rounded-full shadow-lg"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-10 -left-10 w-20 h-20 bg-purple-400/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 -right-10 w-32 h-32 bg-pink-400/30 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We're democratizing e-commerce intelligence by making advanced analytics and AI-powered insights accessible to businesses of all sizes
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl text-center border border-purple-200 dark:border-purple-800">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                To democratize e-commerce intelligence by making advanced analytics and AI-powered insights accessible to businesses of all sizes, helping them compete and thrive in the digital marketplace.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BarChart3 className="w-10 h-10" />,
                title: "AI-Powered Analytics",
                desc: "Advanced machine learning algorithms analyze millions of data points to provide actionable insights",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Real-Time Insights",
                desc: "Get instant updates on market trends, competitor pricing, and product performance",
                color: "from-green-500 to-green-600",
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Secure & Private",
                desc: "Enterprise-grade security and encrypted storage. We never share your information",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "Multi-Platform Support",
                desc: "Aggregate data from Amazon, Flipkart, and Shopify for comprehensive analysis",
                color: "from-purple-500 to-purple-600",
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

          {/* Values Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8 text-yellow-500" />,
                  title: "Innovation",
                  desc: "We constantly push the boundaries of what's possible with AI and data analytics",
                },
                {
                  icon: <Shield className="w-8 h-8 text-blue-500" />,
                  title: "Transparency",
                  desc: "We believe in clear, honest communication and transparent business practices",
                },
                {
                  icon: <BarChart3 className="w-8 h-8 text-green-500" />,
                  title: "Customer Success",
                  desc: "Your success is our success. We're dedicated to helping you achieve your goals",
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
      <section id="work" className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Powering data-driven decisions for businesses worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { stat: "500K+", label: "Reviews Processed Daily" },
              { stat: "98%", label: "Accuracy in Sentiment Analysis" },
              { stat: "1000+", label: "Active Business Users" },
              { stat: "50+", label: "Product Categories Covered" },
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

      {/* Clients Section */}
      <section id="clients" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Businesses</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Join thousands of businesses making smarter decisions with our analytics platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-center justify-items-center opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-400 dark:text-gray-600">Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Let's Get Started
              </h2>
              <p className="text-xl text-white/90">
                Ready to transform your business with data-driven insights? Join us today!
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
                <span className="text-lg">contact@analytics.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6" />
                <span className="text-lg">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6" />
                <span className="text-lg">Mumbai, Maharashtra, India</span>
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
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="text-white h-5 w-5" />
                </div>
                <span className="text-lg font-bold">Analytics Platform</span>
              </div>
              <p className="text-gray-400">
                Empowering businesses with intelligent data analytics
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">About</button>
                <button onClick={() => scrollToSection('work')} className="block text-gray-400 hover:text-white transition-colors">Work</button>
                <button onClick={() => scrollToSection('clients')} className="block text-gray-400 hover:text-white transition-colors">Clients</button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 <span className="text-purple-400 font-bold">Insydz</span>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Designed & Developed with ❤️ in India
            </p>
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