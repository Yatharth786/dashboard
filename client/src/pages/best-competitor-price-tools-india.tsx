// import { useState, useEffect, useRef } from "react";
// import { useLocation } from "wouter";
// import {
//   Search, Clock, TrendingUp, Target, DollarSign, BarChart3,
//   MessageCircle, Package, Trophy, Zap, BookOpen, Video, FileText,
//   Menu, X, Sun, Moon, ChevronDown, ShoppingBag, Store, Briefcase,
//   Users, Bell, Code, Globe, ArrowLeft, Facebook, Twitter, Linkedin,
//   Instagram, Flame, Presentation,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// type MenuItemWithBadge = { name: string; icon: JSX.Element; badge?: string; route?: string; };
// type NavigationMenu = {
//   Solutions: MenuItemWithBadge[]; "Use Cases": MenuItemWithBadge[]; Features: MenuItemWithBadge[];
//   "Free Tools": MenuItemWithBadge[]; Resources: MenuItemWithBadge[]; Integrations: MenuItemWithBadge[];
//   Compare: MenuItemWithBadge[]; About: MenuItemWithBadge[];
// };

// const navigationMenu: NavigationMenu = {
//   Solutions: [
//     { name:"All Solutions (Overview)",      icon:<ShoppingBag className="w-4 h-4"/>, route:"/solutions" },
//     { name:"For Amazon Sellers (India)",     icon:<ShoppingBag className="w-4 h-4"/>, route:"/solutions/amazon-sellers" },
//     { name:"For Flipkart Sellers",           icon:<Store     className="w-4 h-4"/>, route:"/solutions/flipkart-sellers" },
//     { name:"For E-commerce Agencies",        icon:<Briefcase className="w-4 h-4"/>, route:"/solutions/ecommerce-agencies" },
//     { name:"For Brand Managers",             icon:<Users     className="w-4 h-4"/>, route:"/solutions/brand-managers" },
//   ],
//   "Use Cases": [
//     { name:"All Use Cases",                  icon:<TrendingUp    className="w-4 h-4"/>, route:"/use-cases" },
//     { name:"Track Competitor Prices",        icon:<TrendingUp    className="w-4 h-4"/>, route:"/use-cases/track-competitor-prices" },
//     { name:"Find Profitable Products",       icon:<Target        className="w-4 h-4"/>, route:"/use-cases/find-profitable-products" },
//     { name:"Analyze Customer Reviews",       icon:<MessageCircle className="w-4 h-4"/>, route:"/use-cases/analyze-customer-reviews" },
//     { name:"Improve Amazon & Flipkart SEO",  icon:<Search        className="w-4 h-4"/>, route:"/use-cases/improve-seo" },
//     { name:"Avoid Stockouts & Missed Sales", icon:<Package       className="w-4 h-4"/>, route:"/use-cases/avoid-stockouts" },
//   ],
//   Features: [
//     { name:"Competitor Price Tracking",      icon:<DollarSign    className="w-4 h-4"/>, route:"/features/competitor-price-tracking-feature" },
//     { name:"Review Analytics",               icon:<MessageCircle className="w-4 h-4"/>, route:"/features/review-analytics-feature" },
//     { name:"Price Optimization",             icon:<TrendingUp    className="w-4 h-4"/>, route:"/features/price-optimization-feature" },
//     { name:"Keyword & Rank Tracking",        icon:<Search        className="w-4 h-4"/>, route:"/features/keyword-rank-tracking-feature" },
//     { name:"Product Research",               icon:<Package       className="w-4 h-4"/>, route:"/features/product-research-feature" },
//     { name:"AI Recommendations",             icon:<Zap           className="w-4 h-4"/>, route:"/features/ai-recommendations-feature" },
//     { name:"WhatsApp Alerts",                icon:<Bell          className="w-4 h-4"/>, badge:"NEW",      route:"/features/whatsapp-alerts-feature" },
//     { name:"Festive Trend Intelligence",     icon:<Flame         className="w-4 h-4"/>, badge:"UPCOMING", route:"/features/festive-trend-feature" },
//   ],
//   "Free Tools": [
//     { name:"Free Amazon Product Analyzer",   icon:<BarChart3     className="w-4 h-4"/>, route:"/free-tools/free-amazon-product-analyzer" },
//     { name:"Free Review Sentiment Checker",  icon:<MessageCircle className="w-4 h-4"/>, route:"/free-tools/free-review-sentiment-checker" },
//     { name:"Free Competitor Price Checker",  icon:<DollarSign    className="w-4 h-4"/>, route:"/free-tools/free-competitor-price-checker" },
//     { name:"Free Keyword Rank Checker",      icon:<Search        className="w-4 h-4"/>, badge:"NEW", route:"/free-tools/free-keyword-rank-checker" },
//   ],
//   Resources: [
//     { name:"Expert Blog",         icon:<BookOpen  className="w-4 h-4"/>, route:"/resources/expert-blog" },
//     { name:"Success Stories",     icon:<FileText  className="w-4 h-4"/>, route:"/resources/case-studies" },
//     { name:"Video Masterclasses", icon:<Video     className="w-4 h-4"/>, route:"/resources/videos" },
//     { name:"Strategic Playbooks", icon:<BookOpen  className="w-4 h-4"/>, route:"/resources/guides" },
//   ],
//   Integrations: [
//     { name:"Amazon",            icon:<ShoppingBag className="w-4 h-4"/> },
//     { name:"Flipkart",          icon:<Store       className="w-4 h-4"/> },
//     { name:"Shopify",           icon:<Globe       className="w-4 h-4"/> },
//     { name:"API Documentation", icon:<Code        className="w-4 h-4"/> },
//   ],
//   Compare: [
//     { name:"Insydz vs Helium 10",    icon:<Trophy className="w-4 h-4"/>, route:"/compare/insydzvshelium" },
//     { name:"Insydz vs Jungle Scout", icon:<Trophy className="w-4 h-4"/>, route:"/compare/insydzvsjunglescout" },
//     { name:"Insydz vs Viral Launch", icon:<Trophy className="w-4 h-4"/>, route:"/compare/insydzvsvirallaunch" },
//   ],
//   About: [
//     { name:"About Us",   icon:<Presentation className="w-4 h-4"/>, route:"/about/about-us" },
//     { name:"Our Vision", icon:<Globe        className="w-4 h-4"/>, route:"/about/our-vision" },
//     { name:"Careers",    icon:<Users        className="w-4 h-4"/>, route:"/about/careers" },
//   ],
// };

// const TOC = [
//   { id:"intro",        label:"What Actually Matters" },
//   { id:"why-matters",  label:"Why the Right Tool Matters" },
//   { id:"how-it-works", label:"How Tracking Tools Work" },
//   { id:"types",        label:"Types of Tracking Tools" },
//   { id:"mistakes",     label:"5 Common Mistakes" },
//   { id:"workflow",     label:"Best Practices & Workflow" },
//   { id:"best-tools",   label:"Best Tools for India 2026" },
//   { id:"faq",          label:"Frequently Asked Questions" },
// ];

// const FAQS = [
//   { q:"What is the best competitor price tracking tool for Amazon.in sellers in India?",
//     a:"For Indian sellers on Amazon.in, the best tool covers Amazon.in specifically (not Amazon.com), sends WhatsApp alerts, and provides AI-powered recommendations rather than raw data alone. Insydz is built specifically for this — it covers Amazon.in, Flipkart, and Meesho simultaneously at ₹499–2,999/month, making it the most complete India-first option currently available." },
//   { q:"Can I track competitor prices on Flipkart and Meesho — not just Amazon?",
//     a:"Most global tools only cover Amazon. For multi-platform Indian sellers, this is a significant gap — especially since Flipkart is the primary platform for 60% of tier-2 and tier-3 city sellers. India-first platforms like Insydz cover all three major Indian marketplaces in one system, so you're not managing separate tools for each platform." },
//   { q:"How often should competitor prices be tracked?",
//     a:"For high-competition categories (electronics, mobile accessories, FMCG, home appliances), price checks every 30–60 minutes are ideal. For slower-moving categories (furniture, specialty products, B2B items), hourly to every 4-hour checks are sufficient. The key is ensuring your alert threshold is set appropriately — a 5%+ drop should reach you within an hour." },
//   { q:"Will automated price tracking lead to price wars that destroy my margins?",
//     a:"Only if you respond to every alert with a matching price cut — which is the wrong approach. Smart use of price tracking means understanding why a competitor changed their price and calculating the minimum response needed to protect your Buy Box position and margin. AI-powered tools do this calculation for you. The goal is informed response, not reflexive reaction." },
//   { q:"Is there a free competitor price tracking tool for Indian sellers?",
//     a:"Basic free options exist — Keepa offers limited free Amazon price history, and some Chrome extensions provide basic alerts. However, these don't cover Flipkart or Meesho, don't provide AI recommendations, and typically have significant delays. Insydz offers a forever-free plan that gives Indian sellers entry-level price tracking across Amazon.in and Flipkart — enough to experience the value before upgrading." },
//   { q:"How do I set up competitor price tracking without technical knowledge?",
//     a:"Modern India-first platforms are designed for sellers who aren't technical. The setup process typically takes under 30 minutes: connect your Amazon or Flipkart seller account, add your competitor product URLs or ASINs, set your alert preferences and thresholds, and enter your WhatsApp number for notifications. No coding, no integrations, no IT support required." },
// ];

// export default function BestCompetitorPriceTrackingToolsIndia() {
//   const [, setLocation] = useLocation();
//   const [activeSection, setActiveSection] = useState("intro");
//   const [scrollPct, setScrollPct]   = useState(0);
//   const [tocOpen, setTocOpen]       = useState(false);
//   const [openFaq, setOpenFaq]       = useState<number | null>(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled]     = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [activeDropdown, setActiveDropdown]     = useState<string | null>(null);
//   const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => { document.documentElement.classList.toggle("dark", isDarkMode); }, [isDarkMode]);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 20);
//       const total = document.documentElement.scrollHeight - window.innerHeight;
//       setScrollPct(Math.min((window.scrollY / total) * 100, 100));
//       for (let i = TOC.length - 1; i >= 0; i--) {
//         const el = document.getElementById(TOC[i].id);
//         if (el && window.scrollY >= el.offsetTop - 130) { setActiveSection(TOC[i].id); break; }
//       }
//     };
//     window.addEventListener("scroll", onScroll, { passive:true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     const h = (e: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setActiveDropdown(null);
//     };
//     document.addEventListener("mousedown", h);
//     return () => document.removeEventListener("mousedown", h);
//   }, []);

//   const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" }); setTocOpen(false); };
//   const handleMenuItemClick = (item: MenuItemWithBadge) => { if (item.route) { setLocation(item.route); setActiveDropdown(null); setIsMenuOpen(false); } };
//   const toggleMobileMenu = (name: string) => setMobileActiveMenu(p => p === name ? null : name);

//   const DesktopDropdown = ({ label, menuKey, accent = "purple" }: { label:string; menuKey:keyof NavigationMenu; accent?:"purple"|"orange" }) => {
//     const items = navigationMenu[menuKey];
//     const isActive = activeDropdown === label;
//     const ac = accent==="orange";
//     return (
//       <div className="relative">
//         <button onMouseEnter={() => setActiveDropdown(label)} className={`px-3 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1 ${isActive?(ac?"text-orange-600 font-semibold":"text-purple-600 font-semibold"):(ac?"text-orange-600 dark:text-orange-500 hover:bg-orange-50":"text-gray-700 dark:text-gray-300 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20")}`}>
//           {label}<ChevronDown className={`w-3.5 h-3.5 transition-transform ${isActive?"rotate-180":""}`} />
//         </button>
//         {isActive && (
//           <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 z-50">
//             {items.map((item, i) => (
//               <button key={i} onClick={() => handleMenuItemClick(item)} className={`w-full px-4 py-3 text-left flex items-center gap-3 group ${ac?"hover:bg-orange-50":"hover:bg-purple-50 dark:hover:bg-purple-900/20"}`}>
//                 <span className={ac?"text-orange-600":"text-purple-600 dark:text-purple-400"}>{item.icon}</span>
//                 <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">{item.name}</span>
//                 {item.badge && <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800;900&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
//         *,*::before,*::after{box-sizing:border-box}
//         html{scroll-behavior:smooth}
//         .read-progress{position:fixed;top:80px;left:0;height:3px;background:linear-gradient(90deg,#db2777,#7c3aed);z-index:200;transition:width .1s linear;border-radius:0 2px 2px 0}
//         .article-layout{max-width:1240px;margin:0 auto;padding:48px 24px 80px;display:grid;grid-template-columns:308px 1fr;gap:52px;align-items:start}
//         @media(max-width:1024px){.article-layout{grid-template-columns:220px 1fr;gap:32px}}
//         @media(max-width:768px){.article-layout{grid-template-columns:1fr;padding:24px 16px 60px}}
//         .toc-sidebar{position:sticky;top:80px;background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:22px;box-shadow:0 1px 3px rgba(0,0,0,.07),0 4px 12px rgba(0,0,0,.05)}
//         .dark .toc-sidebar{background:#111827;border-color:#1f2937}
//         @media(max-width:768px){.toc-sidebar{display:none}}
//         .mobile-toc-btn{display:none;width:100%;background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:14px 18px;font-family:'Sora',sans-serif;font-size:14px;font-weight:600;color:#111;cursor:pointer;align-items:center;justify-content:space-between;margin-bottom:16px}
//         .dark .mobile-toc-btn{background:#111827;border-color:#1f2937;color:#f9fafb}
//         @media(max-width:768px){.mobile-toc-btn{display:flex}}
//         .mobile-toc-panel{display:none;background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:16px;margin-bottom:24px}
//         .dark .mobile-toc-panel{background:#111827;border-color:#1f2937}
//         .mobile-toc-panel.open{display:block}
//         .article-body{font-family:'Lora',serif;font-size:clamp(15px,2vw,16px);line-height:1.78;color:#1E293B}
//         .dark .article-body{color:#d1d5db}
//         .article-body h2{font-family:'Sora',sans-serif;font-size:22px;font-weight:800;color:#0D1B2A;margin:52px 0 14px;padding-bottom:12px;border-bottom:2px solid #e5e7eb;letter-spacing:-.3px;line-height:1.3;scroll-margin-top:84px}
//         .dark .article-body h2{color:#f9fafb;border-color:#1f2937}
//         .article-body h2:first-child{margin-top:0}
//         .article-body h3{font-family:'Sora',sans-serif;font-size:17px;font-weight:700;color:#0D1B2A;margin:32px 0 10px;letter-spacing:-.2px;scroll-margin-top:84px}
//         .dark .article-body h3{color:#f3f4f6}
//         .article-body p{margin-bottom:16px;font-size:15.5px;line-height:1.78}
//         .article-body ul,ol{margin:4px 0 18px 22px}
//         .article-body li{font-size:15px;line-height:1.72;margin-bottom:8px}
//         .article-body li::marker{color:#F97316}
//         .article-body strong{font-weight:700;color:#0D1B2A}
//         .dark .article-body strong{color:#f9fafb}
//         .art-img-cap{font-size:12px;color:#94A3B8;font-style:italic;text-align:center;margin-bottom:28px;padding:8px 12px}
//         .box{border-radius:10px;padding:20px 22px;margin:24px 0}
//         .box-label{font-size:11px;font-weight:700;letter-spacing:.7px;text-transform:uppercase;margin-bottom:8px;display:flex;align-items:center;gap:6px}
//         .box p{margin:0;font-size:14.5px;line-height:1.72}
//         .box-teal{background:#F0FDFA;border-left:4px solid #0D9488}
//         .box-teal .box-label{color:#0D9488}
//         .box-amber{background:#FFFBEB;border-left:4px solid #D97706}
//         .box-amber .box-label{color:#D97706}
//         .box-green{background:#F0FDF4;border-left:4px solid #16A34A}
//         .box-green .box-label{color:#16A34A}
//         .box-pink{background:#FDF2F8;border-left:4px solid #DB2777}
//         .box-pink .box-label{color:#DB2777}
//         .box-indigo{background:#EEF2FF;border:1px solid #C7D2FE;border-radius:10px}
//         .box-indigo .box-label{color:#4F46E5}
//         .dark .box-teal{background:#042f2e;border-color:#134e4a}
//         .dark .box-amber{background:#1c1507;border-color:#78350f}
//         .dark .box-green{background:#052e16;border-color:#166534}
//         .dark .box-pink{background:#500724;border-color:#9d174d}
//         .dark .box-indigo{background:#1e1b4b;border-color:#3730a3}
//         .steps{display:flex;flex-direction:column;gap:12px;margin:20px 0 28px}
//         .step{display:flex;gap:16px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:18px 20px;transition:box-shadow .2s}
//         .step:hover{box-shadow:0 4px 16px rgba(0,0,0,.09)}
//         .dark .step{background:#111827;border-color:#1f2937}
//         .step-n{flex-shrink:0;width:34px;height:34px;background:#F97316;color:white;border-radius:50%;font-weight:800;font-size:15px;display:flex;align-items:center;justify-content:center;font-family:'Sora',sans-serif}
//         .step-body strong{display:block;font-size:14.5px;color:#0D1B2A;margin-bottom:3px;font-family:'Sora',sans-serif}
//         .dark .step-body strong{color:#f9fafb}
//         .step-body p{margin:0;font-size:13.5px;color:#64748B;line-height:1.6;font-family:'Sora',sans-serif}
//         .tbl-wrap{overflow-x:auto;border-radius:10px;box-shadow:0 4px 16px rgba(0,0,0,.09);margin:24px 0 32px}
//         table.dt{width:100%;border-collapse:collapse;font-size:13.5px;font-family:'Sora',sans-serif;min-width:480px}
//         table.dt thead tr{background:#0D1B2A}
//         table.dt th{padding:13px 16px;color:white;font-weight:700;text-align:left;font-size:12.5px;letter-spacing:.2px;white-space:nowrap}
//         table.dt tbody tr{border-bottom:1px solid #E2E8F0;transition:background .15s}
//         table.dt tbody tr:nth-child(even) td{background:#F8FAFC}
//         table.dt tbody tr:hover td{background:#FFF7ED}
//         table.dt td{padding:13px 16px;vertical-align:middle;color:#1E293B}
//         .dark table.dt td{color:#d1d5db}
//         .dark table.dt tbody tr:nth-child(even) td{background:#0f172a}
//         table.dt tr.hl td{background:#FFF7ED!important;border-left:3px solid #F97316}
//         table.dt tr.hl td:first-child{font-weight:700;color:#F97316}
//         .bg{background:#DCFCE7;color:#15803D;font-weight:700;padding:3px 10px;border-radius:20px;font-size:11.5px}
//         .br{background:#FEE2E2;color:#B91C1C;font-weight:700;padding:3px 10px;border-radius:20px;font-size:11.5px}
//         .ba{background:#FEF3C7;color:#92400E;font-weight:700;padding:3px 10px;border-radius:20px;font-size:11.5px}
//         .bb{background:#DBEAFE;color:#1E40AF;font-weight:700;padding:3px 10px;border-radius:20px;font-size:11.5px}
//         .mistake-list{display:flex;flex-direction:column;gap:10px;margin:20px 0 28px}
//         .mistake{border:1px solid #E2E8F0;border-radius:10px;display:flex;overflow:hidden}
//         .dark .mistake{border-color:#1f2937}
//         .mistake-num{flex-shrink:0;width:46px;background:#0D1B2A;color:white;font-weight:800;font-size:17px;display:flex;align-items:center;justify-content:center;font-family:'Sora',sans-serif}
//         .mistake-body{padding:16px 18px}
//         .mistake-body strong{display:block;font-size:14.5px;color:#0D1B2A;margin-bottom:5px;font-family:'Sora',sans-serif}
//         .dark .mistake-body strong{color:#f9fafb}
//         .mistake-body p{margin:0;font-size:13.5px;color:#64748B;line-height:1.65;font-family:'Sora',sans-serif}
//         .metrics{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:20px 0 28px}
//         @media(max-width:580px){.metrics{grid-template-columns:1fr}}
//         .metric{background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:18px;display:flex;gap:14px;align-items:flex-start}
//         .dark .metric{background:#111827;border-color:#1f2937}
//         .metric-icon{flex-shrink:0;width:38px;height:38px;border-radius:9px;background:#FFEDD5;display:flex;align-items:center;justify-content:center}
//         .metric-t{font-size:13.5px;font-weight:700;color:#0D1B2A;margin-bottom:3px;font-family:'Sora',sans-serif}
//         .dark .metric-t{color:#f9fafb}
//         .metric-d{font-size:12.5px;color:#64748B;line-height:1.5;font-family:'Sora',sans-serif}
//         .mid-cta{background:linear-gradient(135deg,#0D1B2A 0%,#1A2E42 100%);border-radius:10px;padding:28px 32px;margin:40px 0;display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap}
//         .mid-cta h3{font-size:18px;font-weight:800;color:white;margin-bottom:6px;letter-spacing:-.2px;font-family:'Sora',sans-serif}
//         .mid-cta p{color:#94A3B8;font-size:13.5px;margin:0;font-family:'Sora',sans-serif}
//         .faq-item{border:1px solid #E2E8F0;border-radius:10px;margin-bottom:10px;overflow:hidden;background:#fff;transition:border-color .2s}
//         .dark .faq-item{background:#111827;border-color:#1f2937}
//         .faq-item.open{border-color:#F97316}
//         .faq-q{padding:16px 20px;font-size:14.5px;font-weight:700;color:#0D1B2A;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:12px;user-select:none;transition:background .15s;font-family:'Sora',sans-serif}
//         .dark .faq-q{color:#f9fafb}
//         .faq-q:hover{background:#F8FAFC}
//         .dark .faq-q:hover{background:#1f2937}
//         .faq-icon{flex-shrink:0;width:22px;height:22px;border-radius:50%;background:#FFEDD5;color:#F97316;display:flex;align-items:center;justify-content:center;font-size:16px;transition:transform .2s}
//         .faq-icon.open{transform:rotate(45deg);background:#F97316;color:white}
//         .faq-a{padding:0 20px 16px;font-size:14px;color:#64748B;line-height:1.75;font-family:'Lora',serif}
//         .dark .faq-a{color:#9ca3af}
//         .related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
//         @media(max-width:768px){.related-grid{grid-template-columns:1fr 1fr}}
//         @media(max-width:540px){.related-grid{grid-template-columns:1fr}}
//         .rel-card{border:1px solid #E2E8F0;border-radius:10px;overflow:hidden;cursor:pointer;transition:box-shadow .2s,transform .2s;text-decoration:none;color:inherit;display:block;background:#fff}
//         .dark .rel-card{background:#111827;border-color:#1f2937}
//         .rel-card:hover{box-shadow:0 4px 16px rgba(0,0,0,.09);transform:translateY(-2px)}
//         .rel-thumb{width:100%;height:128px;display:flex;align-items:center;justify-content:center;font-size:28px}
//         .rel-body{padding:14px}
//         .rel-tag{font-size:10.5px;font-weight:700;color:#F97316;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;font-family:'Sora',sans-serif}
//         .rel-title{font-size:13px;font-weight:700;color:#0D1B2A;line-height:1.4;font-family:'Sora',sans-serif}
//         .dark .rel-title{color:#f9fafb}
//         .toc-link{display:block;font-size:12.5px;font-weight:500;color:#64748B;padding:6px 10px;border-radius:6px;cursor:pointer;border:none;background:none;text-align:left;width:100%;transition:all .15s;margin-bottom:2px;line-height:1.4;border-left:2px solid transparent;text-decoration:none}
//         .toc-link:hover,.toc-link.active{color:#F97316;background:#FFF7ED;border-left-color:#F97316;text-decoration:none}
//         .dark .toc-link{color:#9ca3af}
//         .dark .toc-link:hover,.dark .toc-link.active{background:#431407;color:#fb923c}
//         .stat-strip{display:flex;flex-wrap:wrap;border:1px solid #E2E8F0;border-radius:10px;overflow:hidden;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.07)}
//         .dark .stat-strip{border-color:#1f2937;background:#111827}
//         .stat-item{flex:1;min-width:140px;padding:18px 24px;border-right:1px solid #E2E8F0;text-align:center}
//         .dark .stat-item{border-color:#1f2937}
//         .stat-item:last-child{border-right:none}
//         @media(max-width:580px){.stat-item{min-width:50%;border-right:1px solid #E2E8F0;border-bottom:1px solid #E2E8F0}}
//         .takeaway-box{background:#0D1B2A;border-radius:10px;padding:28px 30px;margin:28px 0}
//         .takeaway-box h3{font-family:'Sora',sans-serif;font-size:18px;font-weight:800;color:white;margin:0 0 16px;display:flex;align-items:center;gap:10px}
//         .takeaway-item{display:flex;align-items:flex-start;gap:10px;margin-bottom:10px}
//         .takeaway-dot{flex-shrink:0;width:18px;height:18px;border-radius:50%;background:#F97316;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:white;margin-top:3px}
//         .takeaway-text{font-family:'Lora',serif;font-size:14.5px;color:#CBD5E1;line-height:1.6}
//         .blog-graphic{width:100%;border-radius:12px;overflow:hidden;margin:28px 0 0;box-shadow:0 24px 64px rgba(0,0,0,.28);display:block;position:relative}
//         .blog-graphic-hero{margin-bottom:0;border-radius:0}
//         .fc-block{background:linear-gradient(135deg,#DB2777 0%,#7C3AED 100%);padding:80px 24px;text-align:center}
//         .fc-inner{max-width:640px;margin:0 auto}
//         .fc-inner h2{font-family:'Sora',sans-serif;font-size:clamp(26px,4vw,38px);font-weight:800;color:white;margin-bottom:14px;line-height:1.2;letter-spacing:-.4px}
//         .fc-inner p{color:rgba(255,255,255,.75);font-size:16px;max-width:520px;margin:0 auto 28px;line-height:1.7;font-family:'Lora',serif}
//         .fc-points{display:flex;justify-content:center;flex-wrap:wrap;gap:8px 24px;margin-bottom:32px}
//         .fc-pt{color:rgba(255,255,255,.85);font-size:13.5px;display:flex;align-items:center;gap:7px;font-family:'Sora',sans-serif}
//         .fc-pt::before{content:'✓';color:white;font-weight:800}
//         .fc-btn{background:white;color:#DB2777;padding:16px 40px;border-radius:10px;font-size:16px;font-weight:800;border:none;cursor:pointer;transition:transform .2s;letter-spacing:-.2px}
//         .fc-btn:hover{transform:translateY(-2px)}
//         .fc-sub{color:rgba(255,255,255,.5);font-size:12.5px;margin-top:14px}
//       `}</style>

//       <div className="read-progress" style={{ width:`${scrollPct}%` }} />

//       {/* NAV */}
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled?"bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg":"bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex items-center space-x-1 group cursor-pointer" onClick={() => setLocation("/")}>
//               <div className="relative">
//                 <img src="/logo.png" alt="Insydz Logo" className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain" />
//                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ml-2">Insydz</span>
//             </div>
//             <div className="hidden lg:flex items-center space-x-3" ref={dropdownRef}>
//               <DesktopDropdown label="Solutions"  menuKey="Solutions" />
//               <DesktopDropdown label="Use Cases"  menuKey="Use Cases" />
//               <DesktopDropdown label="Features"   menuKey="Features" />
//               <button onClick={() => setLocation("/pricing")} onMouseEnter={() => setActiveDropdown(null)} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all">Pricing</button>
//               <DesktopDropdown label="Free Tools" menuKey="Free Tools" />
//               <DesktopDropdown label="Compare"    menuKey="Compare" />
//               <DesktopDropdown label="Resources"  menuKey="Resources" accent="orange" />
//               <DesktopDropdown label="About"      menuKey="About" />
//               <Button onClick={() => setLocation("/login")} onMouseEnter={() => setActiveDropdown(null)} className="ml-2 text-sm bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">Login</Button>
//               <button className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" onClick={() => setIsDarkMode(!isDarkMode)}>
//                 {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
//               </button>
//             </div>
//             <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//         {isMenuOpen && (
//           <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 max-h-[calc(100vh-5rem)] overflow-y-auto">
//             <div className="px-4 py-4 space-y-2">
//               <button onClick={() => { setLocation("/resources/expert-blog"); setIsMenuOpen(false); }} className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
//                 <ArrowLeft className="w-4 h-4" /> Back to Blog
//               </button>
//               {([["Solutions","Solutions","purple"],["Use Cases","Use Cases","purple"],["Features","Features","purple"],["Free Tools","Free Tools","purple"],["Compare","Compare","purple"],["Resources","Resources","orange"],["About","About","purple"]] as [string, keyof NavigationMenu, string][]).map(([label,key,accent]) => (
//                 <div key={label}>
//                   <button onClick={() => toggleMobileMenu(label)} className={`flex items-center justify-between w-full px-4 py-2 rounded-lg font-medium ${accent==="orange"?"text-orange-600 dark:text-orange-500 hover:bg-orange-50":"text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"}`}>
//                     {label}<ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu===label?"rotate-180":""}`} />
//                   </button>
//                   {mobileActiveMenu===label && (
//                     <div className="ml-4 mt-1 space-y-1">
//                       {navigationMenu[key].map((item,i) => (
//                         <button key={i} onClick={() => handleMenuItemClick(item)} className={`flex items-center gap-2 w-full px-4 py-2 text-sm rounded-lg ${accent==="orange"?"text-gray-600 hover:bg-orange-50":"text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20"}`}>
//                           {item.icon}{item.name}
//                           {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//               <button onClick={() => setLocation("/pricing")} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">Pricing</button>
//               <Button onClick={() => { setLocation("/login"); setIsMenuOpen(false); }} className="w-full mt-2 bg-gradient-to-r from-pink-500 to-rose-500">Login</Button>
//               <button className="mt-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700 w-full flex justify-center" onClick={() => setIsDarkMode(!isDarkMode)}>
//                 {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* BREADCRUMB */}
//       <div style={{ background:"#F8FAFC", borderBottom:"1px solid #E2E8F0", padding:"10px 0", marginTop:80 }}>
//         <div style={{ maxWidth:1240, margin:"0 auto", padding:"0 24px", display:"flex", alignItems:"center", gap:6, fontSize:12.5, color:"#94A3B8", flexWrap:"wrap" as const }}>
//           <button onClick={() => setLocation("/")} style={{ color:"#64748B", fontWeight:500, background:"none", border:"none", cursor:"pointer" }}>Home</button>
//           <span style={{ color:"#E2E8F0" }}>›</span>
//           <button onClick={() => setLocation("/resources/expert-blog")} style={{ color:"#64748B", fontWeight:500, background:"none", border:"none", cursor:"pointer" }}>Blog</button>
//           <span style={{ color:"#E2E8F0" }}>›</span>
//           <button onClick={() => setLocation("/features/competitor-price-tracking-feature")} style={{ color:"#64748B", fontWeight:500, background:"none", border:"none", cursor:"pointer" }}>Seller Tools</button>
//           <span style={{ color:"#E2E8F0" }}>›</span>
//           <span>Best Competitor Price Tracking Tools India</span>
//         </div>
//       </div>

//       {/* HERO */}
//       <div style={{ maxWidth:1240, margin:"0 auto", padding:"48px 24px 0" }}>
//         <div style={{ display:"inline-flex", alignItems:"center", gap:7, background:"#FFEDD5", color:"#F97316", fontSize:11.5, fontWeight:700, letterSpacing:.6, textTransform:"uppercase" as const, padding:"5px 14px", borderRadius:20, marginBottom:18 }}>
//           <div style={{ width:7, height:7, borderRadius:"50%", background:"#F97316" }} />
//           Tool Comparison &amp; Reviews
//         </div>
//         <h1 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(26px,3.8vw,40px)", fontWeight:800, lineHeight:1.18, color:"#0D1B2A", letterSpacing:"-.5px", marginBottom:18, maxWidth:820 }} className="dark:text-white">
//           Best <span style={{ color:"#F97316" }}>Competitor Price Tracking Tools</span> for Indian Sellers: The 2026 Guide
//         </h1>
//         <div style={{ display:"flex", alignItems:"center", flexWrap:"wrap" as const, gap:"5px 18px", marginBottom:28 }}>
//           {[
//             <><Users className="w-3.5 h-3.5 inline mr-1 text-gray-400" /><strong style={{ color:"#0D1B2A" }}>INSYDZ Research Team</strong></>,
//             <><Clock className="w-3.5 h-3.5 inline mr-1 text-gray-400" />January 2026</>,
//             <><Clock className="w-3.5 h-3.5 inline mr-1 text-gray-400" /><strong>12 min read</strong></>,
//           ].map((item, i) => (
//             <div key={i} style={{ display:"flex", alignItems:"center", gap:6, fontSize:13, color:"#64748B" }}>{item}</div>
//           ))}
//           <span style={{ background:"#FFEDD5", color:"#F97316", fontSize:11, fontWeight:700, padding:"2px 8px", borderRadius:4 }}>Updated for 2026</span>
//           <span style={{ background:"#EEF2FF", color:"#4F46E5", fontSize:11, fontWeight:700, padding:"2px 8px", borderRadius:4 }}>BOFU Guide</span>
//         </div>

//         {/* Stats bar */}
//         <div className="stat-strip" style={{ marginBottom:32 }}>
//           {[
//             ["1.7M+",   "Active Sellers Competing on Indian Marketplaces"],
//             ["30–40%",  "More Demand Captured With Real-Time Tracking"],
//             ["60–85%",  "Cost Savings vs Global Tools Like Helium 10"],
//             ["<60 min", "WhatsApp Alert Response Time with Insydz AI"],
//           ].map(([num, lbl]) => (
//             <div className="stat-item" key={num}>
//               <span style={{ display:"block", fontSize:26, fontWeight:800, color:"#F97316", fontFamily:"'Sora',sans-serif", lineHeight:1 }}>{num}</span>
//               <span style={{ display:"block", fontSize:11.5, color:"#64748B", marginTop:5, lineHeight:1.4, fontWeight:500 }}>{lbl}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ═══ IMG 1 — HERO: Pink→Purple gradient, Performance Overview + Category cards ═══ */}
//       <div className="blog-graphic-hero" id="b2img1" style={{ width:"100%", height:500, background:"linear-gradient(135deg,#EC4899 0%,#A855F7 55%,#6366F1 100%)", position:"relative", overflow:"hidden" }}>
//         {/* Radial overlay */}
//         <div style={{ position:"absolute", inset:0, background:"radial-gradient(circle at 35% 50%,rgba(255,255,255,.08) 0%,transparent 55%)", pointerEvents:"none" }} />
//         {/* Left text */}
//         <div style={{ position:"absolute", left:52, top:"50%", transform:"translateY(-50%)", maxWidth:320 }}>
//           <div style={{ fontSize:10.5, fontWeight:700, letterSpacing:2, textTransform:"uppercase" as const, color:"rgba(255,255,255,.6)", marginBottom:14, display:"flex", alignItems:"center", gap:10 }}>
//             <div style={{ width:28, height:2, background:"rgba(255,255,255,.4)", borderRadius:1 }} />Insydz · 2026 Guide
//           </div>
//           <div style={{ fontFamily:"'Sora',sans-serif", fontSize:60, fontWeight:900, color:"white", lineHeight:.9, letterSpacing:-4, marginBottom:20 }}>
//             Best<br /><span style={{ color:"#FDE68A" }}>Price</span><br />Trackers
//           </div>
//           <p style={{ fontSize:13.5, color:"rgba(255,255,255,.65)", lineHeight:1.65, maxWidth:270 }}>
//             Compare all competitor price tracking tools for Indian sellers — one honest, complete guide.
//           </p>
//         </div>
//         {/* Card A — Performance Overview (tilted left, behind) */}
//         <div style={{ position:"absolute", background:"white", borderRadius:12, overflow:"hidden", boxShadow:"0 16px 48px rgba(0,0,0,.22)", fontFamily:"'Sora',sans-serif", width:278, top:38, right:175, transform:"rotate(-3deg)", zIndex:5 }}>
//           <div style={{ background:"#f8fafc", borderBottom:"1px solid #eef1f6", padding:"8px 12px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
//             <span style={{ fontSize:9.5, fontWeight:700, color:"#1a2438" }}>Performance Overview</span>
//             <span style={{ fontSize:8, fontWeight:700, padding:"2px 7px", borderRadius:8, background:"#DCFCE7", color:"#166534" }}>● Live</span>
//           </div>
//           <div style={{ padding:"11px 13px" }}>
//             <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:7 }}>
//               {[
//                 { v:"11,906",l:"Total Products",bg:"#EFF6FF",vc:"#1D4ED8" },
//                 { v:"₹9,801", l:"Avg Price",     bg:"#F0FDF4",vc:"#15803D" },
//                 { v:"4.13",   l:"Avg Rating",    bg:"#FFFBEB",vc:"#B45309" },
//                 { v:"8.2M",   l:"Total Reviews", bg:"#F5F3FF",vc:"#7C3AED" },
//               ].map(s => (
//                 <div key={s.l} style={{ borderRadius:8, padding:"8px 10px", textAlign:"center" as const, background:s.bg }}>
//                   <span style={{ display:"block", fontSize:15, fontWeight:800, lineHeight:1, color:s.vc }}>{s.v}</span>
//                   <span style={{ display:"block", fontSize:7.5, fontWeight:600, marginTop:3, opacity:.75, color:s.vc }}>{s.l}</span>
//                 </div>
//               ))}
//             </div>
//             <div style={{ background:"#F8FAFC", borderRadius:7, padding:"8px 10px", marginTop:8, fontSize:8.5, color:"#475569", lineHeight:1.55 }}>
//               <strong style={{ color:"#0D1B2A", display:"block", marginBottom:2 }}>AI Insight</strong>
//               Your Flipkart store is performing steadily. Continue optimizing product pricing to improve average margins.
//             </div>
//             <div style={{ background:"linear-gradient(90deg,#06B6D4,#3B82F6)", color:"white", borderRadius:6, padding:"6px 0", fontSize:9.5, fontWeight:700, textAlign:"center" as const, marginTop:8, letterSpacing:.3 }}>View Full Dashboard →</div>
//           </div>
//         </div>
//         {/* Card B — Category list (tilted right, front) */}
//         <div style={{ position:"absolute", background:"white", borderRadius:12, overflow:"hidden", boxShadow:"0 16px 48px rgba(0,0,0,.22)", fontFamily:"'Sora',sans-serif", width:224, top:200, right:28, transform:"rotate(2.5deg)", zIndex:6 }}>
//           <div style={{ background:"#f8fafc", borderBottom:"1px solid #eef1f6", padding:"8px 12px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
//             <span style={{ fontSize:9.5, fontWeight:700, color:"#1a2438" }}>Product Categories</span>
//             <span style={{ fontSize:8, fontWeight:700, padding:"2px 7px", borderRadius:8, background:"#FEF3C7", color:"#92400E" }}>Flipkart</span>
//           </div>
//           <div style={{ padding:"11px 13px" }}>
//             {[
//               { n:"Electronics",    p:"₹1,254", s:"★4.1" },
//               { n:"Beauty",         p:"₹342",   s:"★4.2" },
//               { n:"Cell Phones",    p:"₹1,451", s:"★4.1" },
//               { n:"Home Appliances",p:"₹10,931",s:"★4.2" },
//             ].map((r, i) => (
//               <div key={r.n} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 0", borderBottom: i<3?"1px solid #f1f5f9":"none", fontSize:9.5 }}>
//                 <span style={{ fontWeight:600, color:"#1e293b" }}>{r.n}</span>
//                 <span style={{ color:"#0891B2", fontWeight:700 }}>{r.p}</span>
//                 <span style={{ color:"#F59E0B", fontSize:8.5 }}>{r.s}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* KEY TAKEAWAYS */}
//       <div style={{ maxWidth:1240, margin:"0 auto", padding:"0 24px 40px" }}>
//         <div className="takeaway-box">
//           <h3>
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
//             Key Takeaways
//           </h3>
//           {[
//             "Real-time competitor price tracking — not daily or manual — is the standard for competitive Indian sellers in 2026. A 12-hour information lag is a revenue gap.",
//             "India-specific tools matter because Indian sellers operate across Amazon.in, Flipkart, and Meesho simultaneously. A tool covering only Amazon solves 60% of the problem at best.",
//             "Price tracking without stock monitoring is incomplete intelligence. The most profitable decisions come from knowing when a competitor is about to go OOS, not just their current price.",
//             "WhatsApp alerts convert to action significantly faster than email alerts for Indian SMB sellers — alert delivery channel is a critical, underrated feature.",
//             "AI-powered recommendations outperform raw alerts. The goal isn't to know what happened — it's to know what to do next and why.",
//             "Global tools like Helium 10 and Jungle Scout are excellent for Amazon.com but overpriced for Indian sellers and don't cover Flipkart or Meesho.",
//             "Price wars are avoidable. Smart tools calculate minimum necessary adjustments — not maximum reactive discounts — protecting margins while recovering Buy Box.",
//           ].map(t => (
//             <div className="takeaway-item" key={t}>
//               <div className="takeaway-dot">✓</div>
//               <div className="takeaway-text">{t}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ARTICLE LAYOUT */}
//       <div className="article-layout">
//         {/* SIDEBAR */}
//         <aside className="toc-sidebar">
//           <h4 style={{ fontFamily:"'Sora',sans-serif", fontSize:11, fontWeight:700, textTransform:"uppercase" as const, letterSpacing:1, color:"#94A3B8", marginBottom:14 }}>Table of Contents</h4>
//           <ul style={{ listStyle:"none", padding:0, margin:0 }}>
//             {TOC.map(t => (
//               <li key={t.id}><button className={`toc-link${activeSection===t.id?" active":""}`} onClick={() => go(t.id)}>{t.label}</button></li>
//             ))}
//           </ul>
//           {/* Sidebar CTA */}
//           <div style={{ background:"linear-gradient(160deg,#0D1B2A 0%,#162B45 100%)", borderRadius:10, padding:24, marginTop:20 }}>
//             <h4 style={{ fontFamily:"'Sora',sans-serif", fontSize:16, fontWeight:800, color:"white", marginBottom:10, lineHeight:1.35, letterSpacing:"-.2px" }}>
//               Track Competitor Prices Across All 3 Indian Platforms
//             </h4>
//             <p style={{ fontSize:12.5, color:"#94A3B8", marginBottom:16, lineHeight:1.6, fontFamily:"'Sora',sans-serif" }}>India's only AI-powered price tracker with WhatsApp alerts. Built for Indian sellers from day one.</p>
//             <ul style={{ listStyle:"none", padding:0, margin:"0 0 18px" }}>
//               {["Amazon.in + Flipkart + Meesho coverage","WhatsApp alerts in under 60 minutes","AI recommendations — not just raw data","From ₹499/mo — or free forever"].map(f => (
//                 <li key={f} style={{ fontSize:12.5, color:"#CBD5E1", marginBottom:8, display:"flex", alignItems:"flex-start", gap:7, lineHeight:1.4, fontFamily:"'Sora',sans-serif" }}>
//                   <span style={{ color:"#F97316", fontWeight:800, flexShrink:0, fontSize:12, lineHeight:1.3 }}>✓</span>{f}
//                 </li>
//               ))}
//             </ul>
//             <button onClick={() => setLocation("/login")} style={{ display:"block", background:"#F97316", color:"white", textAlign:"center" as const, padding:12, borderRadius:8, fontWeight:700, fontSize:13.5, width:"100%", cursor:"pointer", border:"none", fontFamily:"'Sora',sans-serif" }}>
//               Start Free — No Card Needed
//             </button>
//           </div>
//           {/* Share */}
//           <div style={{ background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:10, padding:18, marginTop:20 }}>
//             <h4 style={{ fontFamily:"'Sora',sans-serif", fontSize:11, fontWeight:700, textTransform:"uppercase" as const, letterSpacing:1, color:"#94A3B8", marginBottom:12 }}>Share This Guide</h4>
//             <div style={{ display:"flex", gap:8 }}>
//               {[{l:"WhatsApp",bg:"#25D366"},{l:"LinkedIn",bg:"#0A66C2"},{l:"Twitter",bg:"#1DA1F2"}].map(s => (
//                 <div key={s.l} style={{ flex:1, textAlign:"center" as const, padding:"9px 6px", borderRadius:7, fontSize:12, fontWeight:700, color:"white", background:s.bg, cursor:"pointer", fontFamily:"'Sora',sans-serif" }}>{s.l}</div>
//               ))}
//             </div>
//           </div>
//         </aside>

//         {/* MAIN */}
//         <main>
//           <button className="mobile-toc-btn" onClick={() => setTocOpen(!tocOpen)}>
//             📋 Table of Contents <span>{tocOpen?"▲":"▼"}</span>
//           </button>
//           <div className={`mobile-toc-panel${tocOpen?" open":""}`}>
//             {TOC.map(t => (
//               <button key={t.id} className="toc-link" style={{ display:"block", marginBottom:4 }} onClick={() => go(t.id)}>{t.label}</button>
//             ))}
//           </div>

//           <article className="article-body">

//             {/* S1 */}
//             <h2 id="intro">The Best Competitor Price Tracking Tool for India — What Actually Matters</h2>
//             <p>The best competitor price tracking tool for India is one that monitors rival prices across Amazon.in, Flipkart, and Meesho in real time — and tells you exactly what to do, not just what happened. With over <strong>1.7 million active sellers competing</strong> on Indian marketplaces, pricing intelligence has moved from a "nice to have" to a survival tool.</p>
//             <p>Indian e-commerce is growing at 25% annually, which means new competitors enter your category every week — and most of them are watching your prices even if you aren't watching theirs. This guide cuts through the noise. We review what actually matters in a price tracking tool for the Indian market, what global tools miss, and which platforms are genuinely worth your ₹499–3,000/month.</p>
//             <div className="box box-teal">
//               <div className="box-label">💡 In Simple Terms</div>
//               <p>A competitor price tracking tool watches your rivals' product prices 24×7 so you don't have to. When a competitor drops their price on Amazon.in or Flipkart, you get an alert — with a recommendation on what to do next. It's the difference between reacting in 5 minutes versus finding out 2 days later.</p>
//             </div>

//             {/* S2 */}
//             <h2 id="why-matters">Why Choosing the Right Tool Matters for Indian Sellers</h2>
//             <h3>The Cost of Being One Step Behind</h3>
//             <p>Price changes on Amazon.in happen constantly — sometimes 5–8 times per day in high-competition categories like electronics, home appliances, and FMCG. A seller who finds out about a competitor's price drop 12 hours later has already lost Buy Box position, potentially dropped in search rankings, and surrendered sales to a faster-reacting rival.</p>
//             <p>The numbers are stark: sellers who track competitor prices in real time <strong>capture 30–40% more demand during competitor stock-outs</strong> and respond to price changes within an hour instead of a day. Over a month, that's a measurable revenue difference — not a marginal one.</p>
//             <h3>Platform Coverage Is Non-Negotiable in India</h3>
//             <p>Unlike the US where Amazon dominates, Indian sellers typically operate across 2–3 platforms simultaneously. A seller doing ₹5 lakh/month might earn ₹3 lakh on Amazon.in, ₹1.5 lakh on Flipkart, and ₹50,000 on Meesho. A price tracking tool that only covers Amazon is only solving 60% of their problem. This is the fundamental gap in most globally-built tools — and it's the clearest reason Indian sellers need an India-first solution.</p>
//             <div className="box box-amber">
//               <div className="box-label">📌 Real Seller Example</div>
//               <p>A Jaipur-based seller of home décor products was manually checking 8 competitors on Flipkart every morning using the browser. It took 90 minutes daily and was still missing overnight price changes. After switching to an automated price tracking tool, she caught a competitor's 22% price drop at 2 AM on a Friday — and adjusted her price by 9 AM Saturday, before the weekend shopping rush. That one response was worth an estimated <strong>₹28,000 in recovered weekend sales</strong>.</p>
//             </div>

//             {/* ═══ IMG 2 — Multi-Platform: Coral→Pink→Purple, 3 stacked platform cards ═══ */}
//             <div className="blog-graphic" id="b2img2" style={{ height:420, background:"linear-gradient(135deg,#F43F5E 0%,#EC4899 45%,#8B5CF6 100%)" }}>
//               {/* Circle rings */}
//               <div style={{ position:"absolute", width:380, height:380, borderRadius:"50%", border:"1px solid rgba(255,255,255,.1)", top:-100, right:210, pointerEvents:"none" }} />
//               <div style={{ position:"absolute", width:220, height:220, borderRadius:"50%", border:"1px solid rgba(255,255,255,.07)", bottom:-50, right:90, pointerEvents:"none" }} />
//               {/* Dot grid */}
//               <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle,rgba(255,255,255,.07) 1px,transparent 1px)", backgroundSize:"30px 30px", pointerEvents:"none" }} />
//               {/* Left text */}
//               <div style={{ position:"absolute", left:52, top:"50%", transform:"translateY(-50%)", maxWidth:295, zIndex:2 }}>
//                 <div style={{ display:"inline-block", background:"rgba(255,255,255,.15)", color:"white", fontSize:11, fontWeight:700, letterSpacing:.7, textTransform:"uppercase" as const, padding:"5px 12px", borderRadius:20, marginBottom:16 }}>Multi-Platform</div>
//                 <div style={{ fontFamily:"'Sora',sans-serif", fontSize:54, fontWeight:900, color:"white", lineHeight:.9, letterSpacing:-3, marginBottom:18 }}>
//                   3<br /><span style={{ color:"#FDE68A" }}>Markets.</span><br />1 Tool.
//                 </div>
//                 <p style={{ fontSize:13, color:"rgba(255,255,255,.7)", lineHeight:1.6, marginBottom:18 }}>
//                   Amazon.in, Flipkart &amp; Meesho tracked live from one dashboard — no switching tools.
//                 </p>
//                 <div style={{ background:"rgba(0,0,0,.2)", border:"1px solid rgba(255,255,255,.15)", borderRadius:10, padding:"10px 14px", display:"flex", alignItems:"center", gap:8 }}>
//                   <div style={{ width:7, height:7, borderRadius:"50%", background:"#FDE68A", boxShadow:"0 0 8px #FDE68A", flexShrink:0 }} />
//                   <span style={{ fontSize:11.5, color:"rgba(255,255,255,.8)", fontWeight:500, fontFamily:"'Sora',sans-serif" }}>Prices updating in real time across all 3 platforms</span>
//                 </div>
//               </div>
//               {/* 3 stacked platform cards */}
//               <div style={{ position:"absolute", right:40, top:"50%", transform:"translateY(-50%)", display:"flex", flexDirection:"column" as const, gap:11 }}>
//                 {[
//                   { name:"Amazon.in",  dot:"#06B6D4", prod:"12,450", badge:"↑ Live",  bBg:"#DCFCE7", bC:"#15803D", chg:"+12%", cBg:"#DCFCE7", cC:"#15803D" },
//                   { name:"Flipkart",   dot:"#F59E0B", prod:"11,906", badge:"↑ Live",  bBg:"#DCFCE7", bC:"#15803D", chg:"+8%",  cBg:"#DCFCE7", cC:"#15803D" },
//                   { name:"Meesho",     dot:"#8B5CF6", prod:"9,234",  badge:"↑ Live",  bBg:"#DCFCE7", bC:"#15803D", chg:"−3%",  cBg:"#FEE2E2", cC:"#DC2626" },
//                 ].map(p => (
//                   <div key={p.name} style={{ background:"white", borderRadius:12, padding:"13px 16px", width:290, boxShadow:"0 8px 28px rgba(0,0,0,.25)", fontFamily:"'Sora',sans-serif" }}>
//                     <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
//                       <div style={{ display:"flex", alignItems:"center", gap:7 }}>
//                         <div style={{ width:8, height:8, borderRadius:"50%", background:p.dot, boxShadow:`0 0 6px ${p.dot}` }} />
//                         <span style={{ fontSize:12, fontWeight:800, color:"#0D1B2A", textTransform:"uppercase" as const, letterSpacing:.4 }}>{p.name}</span>
//                       </div>
//                       <span style={{ fontSize:9.5, fontWeight:700, padding:"2px 8px", borderRadius:4, background:p.bBg, color:p.bC }}>{p.badge}</span>
//                     </div>
//                     <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
//                       <div style={{ textAlign:"center" as const }}>
//                         <span style={{ fontFamily:"'Sora',sans-serif", fontSize:18, fontWeight:900, color:"#0D1B2A", display:"block", lineHeight:1 }}>{p.prod}</span>
//                         <span style={{ fontSize:9, color:"#94A3B8", fontWeight:600, textTransform:"uppercase" as const, letterSpacing:.3, marginTop:2, display:"block" }}>Products</span>
//                       </div>
//                       <div style={{ width:1, height:32, background:"#E2E8F0" }} />
//                       <div style={{ textAlign:"center" as const }}>
//                         <span style={{ fontFamily:"'Sora',sans-serif", fontSize:18, fontWeight:900, color:"#0D1B2A", display:"block", lineHeight:1 }}>4.1★</span>
//                         <span style={{ fontSize:9, color:"#94A3B8", fontWeight:600, textTransform:"uppercase" as const, letterSpacing:.3, marginTop:2, display:"block" }}>Avg Rating</span>
//                       </div>
//                       <div style={{ width:1, height:32, background:"#E2E8F0" }} />
//                       <span style={{ fontSize:11, fontWeight:700, padding:"4px 9px", borderRadius:5, background:p.cBg, color:p.cC }}>{p.chg}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <p className="art-img-cap">India-first tools like Insydz track Amazon.in, Flipkart, and Meesho simultaneously — the only complete multi-platform solution for Indian sellers</p>

//             <div className="box box-indigo" style={{ padding:"20px 22px", margin:"24px 0" }}>
//               <div className="box-label">
//                 <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ flexShrink:0 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>
//                 AI Overview Summary
//               </div>
//               <p style={{ fontSize:14.5, margin:0, lineHeight:1.72 }}>The best competitor price tracking tools for Indian sellers monitor prices on Amazon.in, Flipkart, and Meesho simultaneously, deliver alerts via WhatsApp rather than email, and provide AI-powered recommendations — not just raw data. For Indian SMBs who can't afford ₹4,000–8,000/month global tools, India-first platforms offer equivalent or better functionality at 60–85% lower cost.</p>
//             </div>

//             {/* S3 */}
//             <h2 id="how-it-works">How Competitor Price Tracking Tools Work</h2>
//             <p>Understanding the mechanics behind price tracking tools helps you evaluate which platform is genuinely real-time versus which claims real-time but runs on hourly batch jobs. Here's what a properly built tool does:</p>
//             <div className="steps">
//               {[
//                 { n:1, t:"Setup & Integration",       d:"Connect your Amazon/Flipkart seller account and input the ASINs or product URLs of competitors you want to monitor. Good tools allow you to add 10–50 competitors per product." },
//                 { n:2, t:"Continuous Crawling",       d:"The tool's engine checks competitor listing prices at regular intervals — anywhere from every 15 minutes to every few hours. AI-powered tools also track stock availability, ratings, and review velocity alongside price." },
//                 { n:3, t:"Anomaly Detection",         d:"When a competitor changes their price beyond your set threshold (e.g., drops more than 5%), the system flags it as a significant event requiring your attention." },
//                 { n:4, t:"WhatsApp Alert Delivery",   d:"You receive an alert via WhatsApp, email, or in-app notification with the specifics: which competitor, which product, what the old price was, what the new price is, and how it compares to your current price." },
//                 { n:5, t:"AI Recommendation Engine",  d:'Advanced tools go beyond the alert: "Competitor A dropped to ₹849. Recommend adjusting to ₹869 — you\'ll recapture Buy Box while protecting ₹47 more margin than a full match."' },
//               ].map(s => (
//                 <div className="step" key={s.n}>
//                   <div className="step-n">{s.n}</div>
//                   <div className="step-body"><strong>{s.t}</strong><p>{s.d}</p></div>
//                 </div>
//               ))}
//             </div>
//             <div className="box box-green">
//               <div className="box-label">⚡ Manual vs Automated</div>
//               <p>Manually tracking 10 competitors across 20 SKUs on 2 platforms requires checking <strong>400 data points daily</strong>. At 30 seconds per check, that's 3.3 hours every single day — just watching prices. Automated tools do this in milliseconds, continuously, without breaks.</p>
//             </div>

//             {/* ═══ IMG 3 — Dark Navy→Indigo, 5-step pipeline panel ═══ */}
//             <div className="blog-graphic" id="b2img3" style={{ height:400, background:"linear-gradient(135deg,#0F172A 0%,#1E1B4B 55%,#0F172A 100%)" }}>
//               {/* Grid bg */}
//               <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)", backgroundSize:"44px 44px", pointerEvents:"none" }} />
//               <div style={{ position:"absolute", width:340, height:340, borderRadius:"50%", background:"radial-gradient(circle,rgba(147,51,234,.12) 0%,transparent 70%)", top:-80, left:40, pointerEvents:"none" }} />
//               <div style={{ position:"absolute", width:280, height:280, borderRadius:"50%", background:"radial-gradient(circle,rgba(219,39,119,.09) 0%,transparent 70%)", bottom:-60, right:100, pointerEvents:"none" }} />
//               {/* Inner frosted panel */}
//               <div style={{ position:"absolute", left:36, top:28, right:36, bottom:28, background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.07)", borderRadius:16, padding:"22px 24px", display:"flex", flexDirection:"column" as const }}>
//                 <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:18 }}>
//                   <span style={{ fontFamily:"'Sora',sans-serif", fontSize:15, fontWeight:800, color:"white", letterSpacing:"-.3px" }}>How Insydz Price Tracking Works</span>
//                   <span style={{ fontSize:10, fontWeight:700, padding:"4px 10px", borderRadius:20, background:"rgba(219,39,119,.2)", color:"#F9A8D4", border:"1px solid rgba(219,39,119,.3)" }}>5-Step Pipeline</span>
//                 </div>
//                 <div style={{ display:"flex", flexDirection:"column" as const, gap:8, flex:1 }}>
//                   {[
//                     { n:1, c:"#DB2777", t:"Setup & Integration",     d:"Connect seller account · Add competitor ASINs · Set alert thresholds",    tag:"Done",    tBg:"rgba(74,222,128,.15)",  tC:"#4ADE80" },
//                     { n:2, c:"#9333EA", t:"Continuous Crawling",     d:"Checks prices every 15–60 min · Tracks stock, ratings, review velocity", tag:"Auto",    tBg:"rgba(147,51,234,.2)",   tC:"#C4B5FD" },
//                     { n:3, c:"#4F46E5", t:"Anomaly Detection",       d:"Flags significant price changes beyond your 3–5% threshold",              tag:"Auto",    tBg:"rgba(147,51,234,.2)",   tC:"#C4B5FD" },
//                     { n:4, c:"#0D9488", t:"WhatsApp Alert Delivery",  d:"Instant notification: which product, old price, new price, your gap",    tag:"<60 min", tBg:"rgba(74,222,128,.15)",  tC:"#4ADE80" },
//                     { n:5, c:"#16A34A", t:"AI Recommendation Engine", d:'e.g. "Adjust to ₹869 — recapture Buy Box, protect ₹47 margin"',         tag:"AI",      tBg:"rgba(219,39,119,.15)",  tC:"#F9A8D4" },
//                   ].map(step => (
//                     <div key={step.n} style={{ display:"flex", alignItems:"center", gap:12, background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", borderRadius:10, padding:"10px 14px" }}>
//                       <div style={{ width:26, height:26, borderRadius:"50%", background:step.c, display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:800, color:"white", flexShrink:0, fontFamily:"'Sora',sans-serif" }}>{step.n}</div>
//                       <div style={{ flex:1 }}>
//                         <div style={{ fontFamily:"'Sora',sans-serif", fontSize:12, fontWeight:700, color:"white", marginBottom:1 }}>{step.t}</div>
//                         <div style={{ fontSize:10.5, color:"rgba(255,255,255,.5)", fontWeight:500, fontFamily:"'Sora',sans-serif" }}>{step.d}</div>
//                       </div>
//                       <span style={{ fontSize:10, fontWeight:700, padding:"2px 8px", borderRadius:4, background:step.tBg, color:step.tC, whiteSpace:"nowrap" as const, fontFamily:"'Sora',sans-serif" }}>{step.tag}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <div style={{ display:"flex", gap:10, marginTop:10 }}>
//                   {[{v:"15 min",l:"Fastest Check"},{v:"<60 min",l:"Alert Delivery"},{v:"3 Platforms",l:"India Coverage"},{v:"AI-First",l:"Recommendations"}].map(s => (
//                     <div key={s.l} style={{ flex:1, background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.08)", borderRadius:10, padding:"10px 12px", textAlign:"center" as const }}>
//                       <span style={{ fontFamily:"'Sora',sans-serif", fontSize:16, fontWeight:900, color:"white", display:"block", lineHeight:1 }}>{s.v}</span>
//                       <span style={{ fontSize:9, color:"rgba(255,255,255,.4)", fontWeight:600, textTransform:"uppercase" as const, letterSpacing:.4, marginTop:3, display:"block", fontFamily:"'Sora',sans-serif" }}>{s.l}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <p className="art-img-cap">Insydz automates the full 5-step pricing intelligence pipeline — from crawling to WhatsApp alerts to AI-powered recommendations</p>

//             {/* S4 */}
//             <h2 id="types">Types of Competitor Price Tracking Tools: Which Category Fits You?</h2>
//             <div className="tbl-wrap">
//               <table className="dt">
//                 <thead><tr><th>Tool Type</th><th>Best For</th><th>Speed</th><th>India Fit</th><th>Price Range</th></tr></thead>
//                 <tbody>
//                   <tr><td><strong>Manual Excel / Browser</strong></td><td>0–5 SKUs, early stage</td><td><span className="br">24–48 hrs</span></td><td>Poor</td><td>Free (your time)</td></tr>
//                   <tr><td><strong>Basic Scrapers / Chrome Extensions</strong></td><td>5–20 SKUs, budget-conscious</td><td><span className="ba">4–12 hrs</span></td><td>Partial</td><td>Free – ₹500/mo</td></tr>
//                   <tr><td><strong>Global SaaS (Helium 10, Keepa)</strong></td><td>Amazon-heavy, 20+ SKUs</td><td><span className="bb">1–4 hrs</span></td><td>Limited</td><td>₹3,300–8,300/mo</td></tr>
//                   <tr className="hl"><td><strong>India-First AI Platform (Insydz)</strong></td><td>Any size, multi-platform</td><td><span className="bg">{"<"} 1 hour</span></td><td><span className="bg">Built for India</span></td><td><strong>₹499–2,999/mo</strong></td></tr>
//                   <tr><td><strong>Enterprise Custom Tools</strong></td><td>D2C brands, agencies, 100+ SKUs</td><td><span className="bb">Real-time</span></td><td>Custom</td><td>₹15K–75K/mo</td></tr>
//                 </tbody>
//               </table>
//             </div>

//             <div className="mid-cta">
//               <div className="mid-cta-t">
//                 <h3>Start Tracking Competitor Prices — Free</h3>
//                 <p>Setup in under 30 minutes. WhatsApp alerts from day one. No credit card required.</p>
//               </div>
//               <button onClick={() => setLocation("/login")} style={{ flexShrink:0, background:"#F97316", color:"white", padding:"12px 26px", borderRadius:8, fontWeight:700, fontSize:14.5, whiteSpace:"nowrap" as const, cursor:"pointer", border:"none", textDecoration:"none", fontFamily:"'Sora',sans-serif" }}>Try Insydz Free →</button>
//             </div>

//             {/* S5 */}
//             <h2 id="mistakes">5 Mistakes Indian Sellers Make When Tracking Competitor Prices</h2>
//             <div className="mistake-list">
//               {[
//                 { n:1, t:"Using WhatsApp Screenshots Instead of Actual Tools",   d:"A surprisingly common practice in Indian seller communities: someone in a WhatsApp group notices a competitor's price change and shares a screenshot. By the time it circulates and you act — 6–8 hours have passed. This is community intelligence, not pricing intelligence." },
//                 { n:2, t:"Tracking Only Amazon and Ignoring Flipkart",            d:"Indian sellers who sell on both platforms often apply Amazon-derived pricing to Flipkart without checking Flipkart-specific competitor pricing. Flipkart's competitive dynamics differ — different sellers dominate, price gaps are different, and the Buy Box equivalent works differently." },
//                 { n:3, t:"Setting Alerts Too Wide (Missing the Real Moves)",      d:"Setting a 15% threshold before you get alerted means a competitor dropping from ₹999 to ₹859 — a 14% drop — goes unnoticed. In competitive categories, a ₹50 gap is enough to lose Buy Box. Set alerts at 3–5% for high-competition categories." },
//                 { n:4, t:"Reacting to Every Price Change Without Strategy",       d:"Some sellers match every competitor price drop within minutes. This triggers retaliatory drops, creates category-wide price compression, and erodes everyone's margins including yours. Smart tracking tools calculate the minimum response needed, not the maximum reaction." },
//                 { n:5, t:"Not Connecting Price Tracking to Stock Monitoring",     d:"Price and stock are inseparable signals. When a competitor drops their price, it might mean they're overstocked — and will be out of stock in 3 weeks. If you know they're about to go OOS, you don't need to match their discount. You need to hold your price and prepare for the demand surge." },
//               ].map(m => (
//                 <div className="mistake" key={m.n}>
//                   <div className="mistake-num">{m.n}</div>
//                   <div className="mistake-body"><strong>{m.t}</strong><p>{m.d}</p></div>
//                 </div>
//               ))}
//             </div>
//             <div className="box box-pink">
//               <div className="box-label">💬 Key Insight</div>
//               <p>The biggest pricing mistake isn't being too expensive — it's being reactive without context. A price change is a signal, not a command. <strong>Understanding why a competitor changed their price is as important as knowing that they did.</strong></p>
//             </div>

//             {/* S6 */}
//             <h2 id="workflow">Best Practices: A Practical Pricing Intelligence Workflow</h2>
//             <p>The most successful Indian sellers don't react to pricing changes — they run a structured workflow that keeps them consistently competitive without manual effort. Here's the framework that works:</p>

//             {/* ═══ IMG 4 — Teal→Blue gradient, left text + 3 frosted workflow cards ═══ */}
//             <div className="blog-graphic" id="b2img4" style={{ height:380, background:"linear-gradient(135deg,#0F766E 0%,#0369A1 50%,#1E1B4B 100%)" }}>
//               <div style={{ position:"absolute", inset:0, backgroundImage:"repeating-linear-gradient(90deg,rgba(255,255,255,.03) 0px,rgba(255,255,255,.03) 1px,transparent 1px,transparent 60px)", pointerEvents:"none" }} />
//               {/* Left text */}
//               <div style={{ position:"absolute", left:52, top:"50%", transform:"translateY(-50%)", width:224, zIndex:2 }}>
//                 <div style={{ display:"inline-block", background:"rgba(255,255,255,.15)", color:"white", fontSize:11, fontWeight:700, letterSpacing:.7, textTransform:"uppercase" as const, padding:"5px 12px", borderRadius:20, marginBottom:14, fontFamily:"'Sora',sans-serif" }}>Workflow</div>
//                 <div style={{ fontFamily:"'Sora',sans-serif", fontSize:30, fontWeight:900, color:"white", lineHeight:1.15, letterSpacing:-1, marginBottom:12 }}>
//                   Smart.<br /><span style={{ color:"#A5F3FC" }}>Structured.</span><br />Scalable.
//                 </div>
//                 <p style={{ fontSize:12.5, color:"rgba(255,255,255,.65)", lineHeight:1.6, marginBottom:14, fontFamily:"'Sora',sans-serif" }}>Replace 3+ hours of daily manual work with a 40-minute weekly discipline.</p>
//                 <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,.12)", border:"1px solid rgba(255,255,255,.2)", borderRadius:8, padding:"8px 12px" }}>
//                   <span style={{ fontFamily:"'Sora',sans-serif", fontSize:20, fontWeight:900, color:"#A5F3FC" }}>40</span>
//                   <span style={{ fontSize:10, color:"rgba(255,255,255,.65)", fontWeight:600, lineHeight:1.3, fontFamily:"'Sora',sans-serif" }}>min/week<br />total discipline</span>
//                 </div>
//               </div>
//               {/* Vertical divider */}
//               <div style={{ position:"absolute", left:306, top:36, bottom:36, width:1, background:"rgba(255,255,255,.14)" }} />
//               {/* 3 frosted cards */}
//               <div style={{ position:"absolute", left:330, right:28, top:"50%", transform:"translateY(-50%)", display:"flex", gap:12 }}>
//                 {[
//                   { icon:"🔧", iconBg:"rgba(13,148,136,.25)", head:"Setup (Once)",    freq:"~30 min", items:[
//                     { done:true,  t:"Connect seller account to tool" },
//                     { done:true,  t:"Add 5–10 top competitors per SKU" },
//                     { done:true,  t:"Set 3–5% alert threshold" },
//                     { done:false, t:"Configure WhatsApp notifications" },
//                   ]},
//                   { icon:"📊", iconBg:"rgba(3,105,161,.3)",  head:"Daily (Automated)",freq:"<5 min", items:[
//                     { done:true,  t:"Review WhatsApp alerts on phone" },
//                     { done:true,  t:"Act on flagged price changes only" },
//                     { done:false, t:"Note any stock-out opportunities" },
//                     { done:false, t:"Log responsive actions taken" },
//                   ]},
//                   { icon:"📅", iconBg:"rgba(30,27,75,.4)",   head:"Weekly (Strategic)",freq:"35 min", items:[
//                     { done:true,  t:"Review Buy Box win rate per SKU" },
//                     { done:false, t:"Check competitor new entrants" },
//                     { done:false, t:"Analyse margin trend by category" },
//                     { done:false, t:"Update watchlist competitors" },
//                   ]},
//                 ].map(card => (
//                   <div key={card.head} style={{ flex:1, background:"rgba(255,255,255,.1)", backdropFilter:"blur(16px)", border:"1px solid rgba(255,255,255,.16)", borderRadius:13, padding:"14px 12px", boxShadow:"0 8px 24px rgba(0,0,0,.2)" }}>
//                     <div style={{ display:"flex", alignItems:"center", gap:7, marginBottom:10, paddingBottom:9, borderBottom:"1px solid rgba(255,255,255,.1)" }}>
//                       <div style={{ width:26, height:26, borderRadius:7, background:card.iconBg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, flexShrink:0 }}>{card.icon}</div>
//                       <div>
//                         <div style={{ fontFamily:"'Sora',sans-serif", fontSize:10, fontWeight:800, color:"white", textTransform:"uppercase" as const, letterSpacing:.4, lineHeight:1.25 }}>{card.head}</div>
//                         <div style={{ fontFamily:"'Sora',sans-serif", fontSize:9, color:"rgba(255,255,255,.5)", fontWeight:600, marginTop:1 }}>{card.freq}</div>
//                       </div>
//                     </div>
//                     <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column" as const, gap:6 }}>
//                       {card.items.map(item => (
//                         <li key={item.t} style={{ display:"flex", alignItems:"flex-start", gap:6, fontSize:10.5, color:"rgba(255,255,255,.72)", lineHeight:1.4, fontWeight:500, fontFamily:"'Sora',sans-serif" }}>
//                           <div style={{ width:13, height:13, borderRadius:3, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1, ...(item.done?{background:"rgba(74,222,128,.22)",border:"1px solid rgba(74,222,128,.4)"}:{background:"rgba(255,255,255,.07)",border:"1px solid rgba(255,255,255,.14)"}) }}>
//                             {item.done && <span style={{ fontSize:8, color:"#4ADE80", fontWeight:800 }}>✓</span>}
//                           </div>
//                           {item.t}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <p className="art-img-cap">A structured pricing intelligence workflow replaces 3+ hours of daily manual work with a 40-minute weekly discipline — powered by automation</p>

//             <h3>Key Metrics to Track</h3>
//             <div className="metrics">
//               {[
//                 { svg:<svg viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, t:"Buy Box Win Rate per SKU",           d:"Target: >65% for primary products. The single most important pricing health metric." },
//                 { svg:<svg viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, t:"Average Time-to-Response",           d:"Target: <2 hours when a competitor changes price in a high-velocity category." },
//                 { svg:<svg viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>, t:"Revenue Captured During OOS Events",  d:"Measure separately — competitor stock-out is often a 3–5× revenue opportunity." },
//                 { svg:<svg viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>, t:"Gross Margin Trend",                  d:"Are you maintaining margin or eroding it with reactive pricing? Track monthly." },
//               ].map(m => (
//                 <div className="metric" key={m.t}>
//                   <div className="metric-icon">{m.svg}</div>
//                   <div><div className="metric-t">{m.t}</div><div className="metric-d">{m.d}</div></div>
//                 </div>
//               ))}
//             </div>

//             {/* S7 */}
//             <h2 id="best-tools">Best Competitor Price Tracking Tools for India in 2026</h2>
//             <h3>Global Tools: Honest Assessment for Indian Sellers</h3>
//             <p>Several well-established tools serve Amazon sellers globally — Keepa, Helium 10's competitor tools, and Jungle Scout's market tracker among them. For Indian sellers, here's an honest, direct assessment:</p>
//             <div className="tbl-wrap">
//               <table className="dt">
//                 <thead><tr><th>Tool</th><th>Strengths</th><th>India Limitations</th><th>Price (INR/mo)</th></tr></thead>
//                 <tbody>
//                   <tr><td><strong>Keepa</strong></td><td>Deep Amazon price history, free tier</td><td>Amazon.com only, no recommendations</td><td>Free – ₹1,700</td></tr>
//                   <tr><td><strong>Helium 10</strong></td><td>Comprehensive Amazon suite</td><td>Amazon.com-focused, no India platform coverage</td><td>₹3,300 – ₹8,300</td></tr>
//                   <tr><td><strong>Jungle Scout</strong></td><td>Strong product research + tracking</td><td>No Flipkart/Meesho, India data limited</td><td>₹3,800 – ₹8,000</td></tr>
//                   <tr><td><strong>Price2Spy</strong></td><td>Multi-website tracking</td><td>Not marketplace-native, no AI recommendations</td><td>₹2,500 – ₹7,000</td></tr>
//                   <tr className="hl"><td><strong>Insydz</strong></td><td>Amazon.in + Flipkart + Meesho, WhatsApp AI</td><td>India-first — purpose-built, no limitations</td><td><strong>Free – ₹2,999</strong></td></tr>
//                 </tbody>
//               </table>
//             </div>

//             <h3>Insydz: Built Ground-Up for Indian Marketplace Sellers</h3>
//             <p>Insydz isn't a US tool adapted for India — it's the other way around. Built specifically for how Indian sellers operate across Amazon.in, Flipkart, and Meesho, the platform combines competitor price tracking with review intelligence, SEO rank tracking, and stock monitoring in one connected system.</p>

//             {/* ═══ IMG 5 — Deep blue→purple→pink, 4-feature grid ═══ */}
//             <div className="blog-graphic" id="b2img5" style={{ height:380, background:"linear-gradient(135deg,#1E1B4B 0%,#3730A3 45%,#DB2777 100%)" }}>
//               <div style={{ position:"absolute", inset:0, backgroundImage:"repeating-linear-gradient(135deg,rgba(255,255,255,.02) 0px,rgba(255,255,255,.02) 1px,transparent 1px,transparent 22px)", pointerEvents:"none" }} />
//               <div style={{ position:"absolute", width:280, height:280, borderRadius:"50%", background:"radial-gradient(circle,rgba(219,39,119,.15) 0%,transparent 70%)", bottom:-80, left:180, pointerEvents:"none" }} />
//               {/* Left text */}
//               <div style={{ position:"absolute", left:52, top:"50%", transform:"translateY(-50%)", maxWidth:240, zIndex:2 }}>
//                 <div style={{ display:"inline-block", background:"rgba(255,255,255,.15)", color:"white", fontSize:11, fontWeight:700, letterSpacing:.7, textTransform:"uppercase" as const, padding:"5px 12px", borderRadius:20, marginBottom:14, fontFamily:"'Sora',sans-serif" }}>Platform Features</div>
//                 <div style={{ fontFamily:"'Sora',sans-serif", fontSize:46, fontWeight:900, color:"white", lineHeight:.95, letterSpacing:-2, marginBottom:16 }}>
//                   All<br /><span style={{ color:"#FDE68A" }}>Features.</span><br />One Tool.
//                 </div>
//                 <p style={{ fontSize:12.5, color:"rgba(255,255,255,.65)", lineHeight:1.6, marginBottom:16, fontFamily:"'Sora',sans-serif" }}>
//                   Price tracking, review intelligence, rank tracking and AI recommendations — built for India.
//                 </p>
//                 <div style={{ display:"inline-flex", alignItems:"center", gap:7, background:"rgba(74,222,128,.15)", border:"1px solid rgba(74,222,128,.3)", borderRadius:8, padding:"8px 12px" }}>
//                   <span style={{ fontSize:12, fontWeight:700, color:"#4ADE80", fontFamily:"'Sora',sans-serif" }}>✓ Free Forever Plan</span>
//                 </div>
//               </div>
//               {/* 4-feature grid */}
//               <div style={{ position:"absolute", right:36, top:"50%", transform:"translateY(-50%)", display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, width:400, zIndex:5 }}>
//                 {[
//                   { icon:"💰", bg:"rgba(219,39,119,.2)",  t:"Competitor Price Tracking", d:"Real-time price alerts across Amazon.in, Flipkart, Meesho. WhatsApp delivery.", hi:true },
//                   { icon:"📱", bg:"rgba(55,48,163,.3)",   t:"WhatsApp AI Alerts",         d:"Instant alerts with AI recommendations — not just raw data. Act in <60 min." },
//                   { icon:"⭐", bg:"rgba(22,163,74,.2)",   t:"Review Analytics",           d:"Track competitor review velocity, star distribution, sentiment by feature." },
//                   { icon:"📈", bg:"rgba(217,119,6,.2)",   t:"Rank & SEO Tracking",        d:"Monitor your keyword rankings daily. Catch drops before they hurt revenue." },
//                 ].map(f => (
//                   <div key={f.t} style={{ background: f.hi?"rgba(255,255,255,.14)":"rgba(255,255,255,.08)", backdropFilter:"blur(12px)", border: f.hi?"1px solid rgba(253,230,138,.25)":"1px solid rgba(255,255,255,.12)", borderRadius:12, padding:"13px 14px", display:"flex", gap:10, alignItems:"flex-start" }}>
//                     <div style={{ width:30, height:30, borderRadius:8, background:f.bg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, flexShrink:0 }}>{f.icon}</div>
//                     <div>
//                       <span style={{ display:"block", fontFamily:"'Sora',sans-serif", fontSize:11.5, fontWeight:700, color:"white", marginBottom:3 }}>{f.t}</span>
//                       <span style={{ fontSize:10, color:"rgba(255,255,255,.5)", fontWeight:500, lineHeight:1.4, fontFamily:"'Sora',sans-serif" }}>{f.d}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <p className="art-img-cap">Insydz combines price tracking, stock monitoring, review intelligence and AI recommendations in one India-first platform — built for how Indian sellers actually work</p>

//             <div className="box box-green">
//               <div className="box-label">📌 A Note on Tool Selection</div>
//               <p>Don't choose a tool based on the longest feature list. <strong>Choose based on how quickly you'll act on what it tells you.</strong> A tool that sends you a WhatsApp message at 8 AM is more valuable than a tool that generates a beautiful dashboard you open once a week.</p>
//             </div>

//             {/* S8 FAQ */}
//             <h2 id="faq">Frequently Asked Questions</h2>
//             <div style={{ marginTop:20 }}>
//               {FAQS.map((faq, i) => (
//                 <div key={i} className={`faq-item${openFaq===i?" open":""}`}>
//                   <div className="faq-q" onClick={() => setOpenFaq(openFaq===i?null:i)}>
//                     {faq.q}
//                     <span className={`faq-icon${openFaq===i?" open":""}`}>+</span>
//                   </div>
//                   {openFaq===i && <div className="faq-a"><p>{faq.a}</p></div>}
//                 </div>
//               ))}
//             </div>

//             {/* Related */}
//             <div style={{ marginTop:56, paddingTop:36, borderTop:"2px solid #E2E8F0" }}>
//               <h2 style={{ fontSize:20, fontWeight:800, color:"#0D1B2A", margin:"0 0 22px", border:"none", padding:0, fontFamily:"'Sora',sans-serif" }} className="dark:text-white">Related Guides</h2>
//               <div className="related-grid">
//                 {[
//                   { t:"Amazon Competitor Price Tracking Tool India: Complete Guide (2026)", tag:"Price Tracking",  bg:"linear-gradient(135deg,#F97316,#EA580C)", em:"📊", r:"/features/competitor-price-tracking-feature" },
//                   { t:"Flipkart Price Tracker: Monitor & Beat Competitor Prices in 2026",   tag:"Flipkart Sellers",bg:"linear-gradient(135deg,#0D9488,#0891B2)", em:"🛍️", r:"/solutions/flipkart-sellers" },
//                   { t:"How to Win the Amazon Buy Box Consistently as an Indian Seller",     tag:"Buy Box Strategy",bg:"linear-gradient(135deg,#4F46E5,#7C3AED)", em:"🏆", r:"/use-cases/track-competitor-prices" },
//                 ].map(rc => (
//                   <div key={rc.t} className="rel-card" onClick={() => setLocation(rc.r)}>
//                     <div className="rel-thumb" style={{ background:rc.bg }}><span style={{ fontSize:28 }}>{rc.em}</span></div>
//                     <div className="rel-body">
//                       <div className="rel-tag">{rc.tag}</div>
//                       <div className="rel-title">{rc.t}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </article>
//         </main>
//       </div>

//       {/* FINAL CTA */}
//       <div className="fc-block">
//         <div className="fc-inner">
//           <h2>Your Competitors Are Already Tracking Your Prices.</h2>
//           <p>The question isn't whether you should track competitor prices. It's whether you'll be the one acting on the information — or the one reacting to it. Insydz monitors your rivals on Amazon.in, Flipkart, and Meesho around the clock.</p>
//           <div className="fc-points">
//             <div className="fc-pt">No dashboards to learn</div>
//             <div className="fc-pt">No credit card needed</div>
//             <div className="fc-pt">WhatsApp alerts from day one</div>
//             <div className="fc-pt">Setup in under 30 minutes</div>
//           </div>
//           <button className="fc-btn" onClick={() => setLocation("/login")}>Start Tracking Free at insydz.com →</button>
//           <p className="fc-sub">Forever free plan · No credit card · Cancel anytime</p>
//         </div>
//       </div>

//       {/* FOOTER */}
//       <footer style={{ background:"#0D1B2A", padding:"56px 24px 28px" }}>
//         <div style={{ maxWidth:1240, margin:"0 auto" }}>
//           <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:40, marginBottom:44 }}>
//             <div>
//               <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:0 }}>
//                 <img src="/logo.png" alt="Insydz Logo" style={{ width:34, height:34, borderRadius:8, objectFit:"contain" }} />
//                 <span style={{ fontFamily:"'Sora',sans-serif", fontWeight:800, fontSize:19, color:"white", letterSpacing:"-.4px" }}>insydz</span>
//               </div>
//               <p style={{ fontSize:13, color:"#475569", lineHeight:1.7, marginTop:12, maxWidth:260, fontFamily:"'Sora',sans-serif" }}>India's first AI-powered ecommerce analytics platform for Amazon, Flipkart, and Meesho sellers.</p>
//               <div style={{ display:"flex", gap:12, marginTop:16 }}>
//                 {[
//                   { title:"Facebook",  href:"https://www.facebook.com/profile.php?id=61586202582209", icon:<Facebook className="w-4 h-4" /> },
//                   { title:"Twitter",   href:"https://x.com/growwithinsydz",                             icon:<Twitter className="w-4 h-4" /> },
//                   { title:"Instagram", href:"https://www.instagram.com/growwithinsydz/",                icon:<Instagram className="w-4 h-4" /> },
//                   { title:"LinkedIn",  href:"https://www.linkedin.com/company/insydz/?viewAsMember=true",icon:<Linkedin className="w-4 h-4" /> },
//                 ].map(s => (
//                   <a key={s.title} title={s.title} href={s.href} target="_blank" rel="noopener noreferrer" style={{ width:34, height:34, borderRadius:"50%", background:"rgba(255,255,255,.1)", display:"flex", alignItems:"center", justifyContent:"center", color:"white" }}>{s.icon}</a>
//                 ))}
//               </div>
//             </div>
//             {[
//               { h:"Solutions",      l:[["Amazon Sellers","/solutions/amazon-sellers"],["Flipkart Sellers","/solutions/flipkart-sellers"],["Meesho Sellers","/solutions/amazon-sellers"],["Ecommerce Agencies","/solutions/ecommerce-agencies"]] },
//               { h:"Features",       l:[["Competitor Price Tracking","/features/competitor-price-tracking-feature"],["WhatsApp Alerts","/features/whatsapp-alerts-feature"],["Review Analytics","/features/review-analytics-feature"],["Stock Monitoring","/features/product-research-feature"],["AI Recommendations","/features/ai-recommendations-feature"]] },
//               { h:"Compare & More", l:[["Insydz vs Helium 10","/compare/insydzvshelium"],["Insydz vs Jungle Scout","/compare/insydzvsjunglescout"],["Insydz vs Keepa","/compare/insydzvshelium"],["Pricing Plans","/pricing"],["Blog","/resources/expert-blog"]] },
//             ].map(col => (
//               <div key={col.h}>
//                 <h5 style={{ color:"white", fontSize:12, fontWeight:700, textTransform:"uppercase" as const, letterSpacing:.8, marginBottom:14, fontFamily:"'Sora',sans-serif" }}>{col.h}</h5>
//                 <ul style={{ listStyle:"none", padding:0 }}>
//                   {col.l.map(([label, route]) => (
//                     <li key={label} style={{ marginBottom:9 }}>
//                       <button onClick={() => setLocation(route)} style={{ color:"#475569", fontSize:13, background:"none", border:"none", cursor:"pointer", fontFamily:"'Sora',sans-serif", fontWeight:500 }}>{label}</button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//           <div style={{ borderTop:"1px solid #162032", paddingTop:22, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap" as const, gap:10, fontSize:12, color:"#334155", fontFamily:"'Sora',sans-serif" }}>
//             <span>© 2026 Insydz Technologies. All rights reserved.</span>
//             <span>Privacy Policy · Terms of Service · Sitemap</span>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }






// import { useState, useEffect, useRef } from "react";
// import { useLocation } from "wouter";
// import {
//   Search, Clock, TrendingUp, Target, DollarSign, BarChart3,
//   MessageCircle, Package, Trophy, Zap, BookOpen, Video, FileText,
//   Menu, X, Sun, Moon, ChevronDown, ShoppingBag, Store, Briefcase,
//   Users, Bell, Code, Globe, ArrowLeft, Facebook, Twitter, Linkedin,
//   Instagram, Flame, Presentation,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// type MenuItemWithBadge = { name: string; icon: JSX.Element; badge?: string; route?: string; };
// type NavigationMenu = {
//   Solutions: MenuItemWithBadge[]; "Use Cases": MenuItemWithBadge[]; Features: MenuItemWithBadge[];
//   "Free Tools": MenuItemWithBadge[]; Resources: MenuItemWithBadge[]; Integrations: MenuItemWithBadge[];
//   Compare: MenuItemWithBadge[]; About: MenuItemWithBadge[];
// };

// const navigationMenu: NavigationMenu = {
//   Solutions: [
//     { name:"All Solutions (Overview)",      icon:<ShoppingBag className="w-4 h-4"/>, route:"/solutions" },
//     { name:"For Amazon Sellers (India)",    icon:<ShoppingBag className="w-4 h-4"/>, route:"/solutions/amazon-sellers" },
//     { name:"For Flipkart Sellers",          icon:<Store     className="w-4 h-4"/>, route:"/solutions/flipkart-sellers" },
//     { name:"For E-commerce Agencies",       icon:<Briefcase className="w-4 h-4"/>, route:"/solutions/ecommerce-agencies" },
//     { name:"For Brand Managers",            icon:<Users     className="w-4 h-4"/>, route:"/solutions/brand-managers" },
//   ],
//   "Use Cases": [
//     { name:"All Use Cases",                 icon:<TrendingUp    className="w-4 h-4"/>, route:"/use-cases" },
//     { name:"Track Competitor Prices",       icon:<TrendingUp    className="w-4 h-4"/>, route:"/use-cases/track-competitor-prices" },
//     { name:"Find Profitable Products",      icon:<Target        className="w-4 h-4"/>, route:"/use-cases/find-profitable-products" },
//     { name:"Analyze Customer Reviews",      icon:<MessageCircle className="w-4 h-4"/>, route:"/use-cases/analyze-customer-reviews" },
//     { name:"Improve Amazon & Flipkart SEO", icon:<Search        className="w-4 h-4"/>, route:"/use-cases/improve-seo" },
//     { name:"Avoid Stockouts & Missed Sales",icon:<Package       className="w-4 h-4"/>, route:"/use-cases/avoid-stockouts" },
//   ],
//   Features: [
//     { name:"Competitor Price Tracking",     icon:<DollarSign    className="w-4 h-4"/>, route:"/features/competitor-price-tracking-feature" },
//     { name:"Review Analytics",              icon:<MessageCircle className="w-4 h-4"/>, route:"/features/review-analytics-feature" },
//     { name:"Price Optimization",            icon:<TrendingUp    className="w-4 h-4"/>, route:"/features/price-optimization-feature" },
//     { name:"Keyword & Rank Tracking",       icon:<Search        className="w-4 h-4"/>, route:"/features/keyword-rank-tracking-feature" },
//     { name:"Product Research",              icon:<Package       className="w-4 h-4"/>, route:"/features/product-research-feature" },
//     { name:"AI Recommendations",            icon:<Zap           className="w-4 h-4"/>, route:"/features/ai-recommendations-feature" },
//     { name:"WhatsApp Alerts",               icon:<Bell          className="w-4 h-4"/>, badge:"NEW",      route:"/features/whatsapp-alerts-feature" },
//     { name:"Festive Trend Intelligence",    icon:<Flame         className="w-4 h-4"/>, badge:"UPCOMING", route:"/features/festive-trend-feature" },
//   ],
//   "Free Tools": [
//     { name:"Free Amazon Product Analyzer",  icon:<BarChart3     className="w-4 h-4"/>, route:"/free-tools/free-amazon-product-analyzer" },
//     { name:"Free Review Sentiment Checker", icon:<MessageCircle className="w-4 h-4"/>, route:"/free-tools/free-review-sentiment-checker" },
//     { name:"Free Competitor Price Checker", icon:<DollarSign    className="w-4 h-4"/>, route:"/free-tools/free-competitor-price-checker" },
//     { name:"Free Keyword Rank Checker",     icon:<Search        className="w-4 h-4"/>, badge:"NEW", route:"/free-tools/free-keyword-rank-checker" },
//   ],
//   Resources: [
//     { name:"Expert Blog",         icon:<BookOpen  className="w-4 h-4"/>, route:"/resources/expert-blog" },
//     { name:"Success Stories",     icon:<FileText  className="w-4 h-4"/>, route:"/resources/case-studies" },
//     { name:"Video Masterclasses", icon:<Video     className="w-4 h-4"/>, route:"/resources/videos" },
//     { name:"Strategic Playbooks", icon:<BookOpen  className="w-4 h-4"/>, route:"/resources/guides" },
//   ],
//   Integrations: [
//     { name:"Amazon",            icon:<ShoppingBag className="w-4 h-4"/> },
//     { name:"Flipkart",          icon:<Store       className="w-4 h-4"/> },
//     { name:"Shopify",           icon:<Globe       className="w-4 h-4"/> },
//     { name:"API Documentation", icon:<Code        className="w-4 h-4"/> },
//   ],
//   Compare: [
//     { name:"Insydz vs Helium 10",    icon:<Trophy className="w-4 h-4"/>, route:"/compare/insydzvshelium" },
//     { name:"Insydz vs Jungle Scout", icon:<Trophy className="w-4 h-4"/>, route:"/compare/insydzvsjunglescout" },
//     { name:"Insydz vs Viral Launch", icon:<Trophy className="w-4 h-4"/>, route:"/compare/insydzvsvirallaunch" },
//   ],
//   About: [
//     { name:"About Us",   icon:<Presentation className="w-4 h-4"/>, route:"/about/about-us" },
//     { name:"Our Vision", icon:<Globe        className="w-4 h-4"/>, route:"/about/our-vision" },
//     { name:"Careers",    icon:<Users        className="w-4 h-4"/>, route:"/about/careers" },
//   ],
// };

// const TOC = [
//   { id:"intro",        label:"What Actually Matters" },
//   { id:"why-matters",  label:"Why the Right Tool Matters" },
//   { id:"how-it-works", label:"How Tracking Tools Work" },
//   { id:"types",        label:"Types of Tracking Tools" },
//   { id:"mistakes",     label:"5 Common Mistakes" },
//   { id:"workflow",     label:"Best Practices & Workflow" },
//   { id:"best-tools",   label:"Best Tools for India 2026" },
//   { id:"faq",          label:"Frequently Asked Questions" },
// ];

// const FAQS = [
//   { q:"What is the best competitor price tracking tool for Amazon.in sellers in India?",
//     a:"For Indian sellers on Amazon.in, the best tool covers Amazon.in specifically (not Amazon.com), sends WhatsApp alerts, and provides AI-powered recommendations rather than raw data alone. Insydz is built specifically for this — it covers Amazon.in, Flipkart, and Meesho simultaneously at ₹499–2,999/month, making it the most complete India-first option currently available." },
//   { q:"Can I track competitor prices on Flipkart and Meesho — not just Amazon?",
//     a:"Most global tools only cover Amazon. For multi-platform Indian sellers, this is a significant gap — especially since Flipkart is the primary platform for 60% of tier-2 and tier-3 city sellers. India-first platforms like Insydz cover all three major Indian marketplaces in one system, so you're not managing separate tools for each platform." },
//   { q:"How often should competitor prices be tracked?",
//     a:"For high-competition categories (electronics, mobile accessories, FMCG, home appliances), price checks every 30–60 minutes are ideal. For slower-moving categories (furniture, specialty products, B2B items), hourly to every 4-hour checks are sufficient. The key is ensuring your alert threshold is set appropriately — a 5%+ drop should reach you within an hour." },
//   { q:"Will automated price tracking lead to price wars that destroy my margins?",
//     a:"Only if you respond to every alert with a matching price cut — which is the wrong approach. Smart use of price tracking means understanding why a competitor changed their price and calculating the minimum response needed to protect your Buy Box position and margin. AI-powered tools do this calculation for you. The goal is informed response, not reflexive reaction." },
//   { q:"Is there a free competitor price tracking tool for Indian sellers?",
//     a:"Basic free options exist — Keepa offers limited free Amazon price history, and some Chrome extensions provide basic alerts. However, these don't cover Flipkart or Meesho, don't provide AI recommendations, and typically have significant delays. Insydz offers a forever-free plan that gives Indian sellers entry-level price tracking across Amazon.in and Flipkart — enough to experience the value before upgrading." },
//   { q:"How do I set up competitor price tracking without technical knowledge?",
//     a:"Modern India-first platforms are designed for sellers who aren't technical. The setup process typically takes under 30 minutes: connect your Amazon or Flipkart seller account, add your competitor product URLs or ASINs, set your alert preferences and thresholds, and enter your WhatsApp number for notifications. No coding, no integrations, no IT support required." },
// ];

// export default function BestCompetitorPriceTrackingToolsIndia() {
//   const [, setLocation] = useLocation();
//   const [activeSection, setActiveSection] = useState("intro");
//   const [scrollPct, setScrollPct]   = useState(0);
//   const [tocOpen, setTocOpen]       = useState(false);
//   const [openFaq, setOpenFaq]       = useState<number | null>(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled]     = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [activeDropdown, setActiveDropdown]     = useState<string | null>(null);
//   const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => { document.documentElement.classList.toggle("dark", isDarkMode); }, [isDarkMode]);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 20);
//       const total = document.documentElement.scrollHeight - window.innerHeight;
//       setScrollPct(Math.min((window.scrollY / total) * 100, 100));
//       for (let i = TOC.length - 1; i >= 0; i--) {
//         const el = document.getElementById(TOC[i].id);
//         if (el && window.scrollY >= el.offsetTop - 130) { setActiveSection(TOC[i].id); break; }
//       }
//     };
//     window.addEventListener("scroll", onScroll, { passive:true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     const h = (e: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setActiveDropdown(null);
//     };
//     document.addEventListener("mousedown", h);
//     return () => document.removeEventListener("mousedown", h);
//   }, []);

//   useEffect(() => {
//     const onResize = () => { if (window.innerWidth >= 1024) setIsMenuOpen(false); };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   const go = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" });
//     setTocOpen(false);
//   };
//   const handleMenuItemClick = (item: MenuItemWithBadge) => {
//     if (item.route) { setLocation(item.route); setActiveDropdown(null); setIsMenuOpen(false); }
//   };
//   const toggleMobileMenu = (name: string) => setMobileActiveMenu(p => p === name ? null : name);

//   const DesktopDropdown = ({ label, menuKey, accent = "purple" }: { label:string; menuKey:keyof NavigationMenu; accent?:"purple"|"orange" }) => {
//     const items = navigationMenu[menuKey];
//     const isActive = activeDropdown === label;
//     const ac = accent === "orange";
//     return (
//       <div className="relative">
//         <button
//           onMouseEnter={() => setActiveDropdown(label)}
//           className={`px-2 xl:px-3 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1 ${isActive?(ac?"text-orange-600 font-semibold":"text-purple-600 font-semibold"):(ac?"text-orange-600 dark:text-orange-500 hover:bg-orange-50":"text-gray-700 dark:text-gray-300 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20")}`}
//         >
//           {label}<ChevronDown className={`w-3.5 h-3.5 transition-transform ${isActive?"rotate-180":""}`} />
//         </button>
//         {isActive && (
//           <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-64 xl:w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 z-50">
//             {items.map((item, i) => (
//               <button key={i} onClick={() => handleMenuItemClick(item)} className={`w-full px-4 py-2.5 text-left flex items-center gap-3 group ${ac?"hover:bg-orange-50":"hover:bg-purple-50 dark:hover:bg-purple-900/20"}`}>
//                 <span className={`flex-shrink-0 ${ac?"text-orange-600":"text-purple-600 dark:text-purple-400"}`}>{item.icon}</span>
//                 <span className="text-sm text-gray-700 dark:text-gray-300 flex-1 text-left">{item.name}</span>
//                 {item.badge && <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded-full font-semibold flex-shrink-0">{item.badge}</span>}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800;900&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
//         *,*::before,*::after { box-sizing: border-box; }
//         html { scroll-behavior: smooth; }

//         /* ── CSS tokens ───────────────────────────────────────── */
//         :root { --nav-h: 72px; }
//         @media(min-width:1024px) { :root { --nav-h: 80px; } }

//         /* ── Reading progress ─────────────────────────────────── */
//         .read-progress {
//           position: fixed; top: 0; left: 0; height: 3px;
//           background: linear-gradient(90deg,#db2777,#7c3aed);
//           z-index: 9999; transition: width .1s linear;
//           border-radius: 0 2px 2px 0;
//         }

//         /* ── Article layout ──────────────────────────────────── */
//         .article-layout {
//           max-width: 1240px; margin: 0 auto;
//           padding: 36px 16px 80px;
//           display: grid;
//           grid-template-columns: 300px 1fr;
//           gap: 48px; align-items: start;
//         }
//         @media(min-width:1280px) { .article-layout { padding: 48px 24px 80px; } }
//         @media(max-width:1200px) { .article-layout { grid-template-columns: 240px 1fr; gap: 32px; } }
//         @media(max-width:1023px) { .article-layout { grid-template-columns: 1fr; gap: 0; padding: 24px 16px 60px; } }
//         @media(max-width:480px)  { .article-layout { padding: 16px 12px 48px; } }

//         /* ── Sidebar TOC ─────────────────────────────────────── */
//         .toc-sidebar {
//           position: sticky; top: calc(var(--nav-h) + 16px);
//           background: #fff; border: 1px solid #e5e7eb;
//           border-radius: 12px; padding: 20px;
//           box-shadow: 0 1px 3px rgba(0,0,0,.07),0 4px 12px rgba(0,0,0,.05);
//           max-height: calc(100vh - var(--nav-h) - 32px);
//           overflow-y: auto;
//         }
//         .dark .toc-sidebar { background: #111827; border-color: #1f2937; }
//         @media(max-width:1023px) { .toc-sidebar { display: none !important; } }
//         .toc-sidebar::-webkit-scrollbar { width: 4px; }
//         .toc-sidebar::-webkit-scrollbar-track { background: transparent; }
//         .toc-sidebar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 4px; }
//         .dark .toc-sidebar::-webkit-scrollbar-thumb { background: #374151; }

//         /* ── Mobile TOC ──────────────────────────────────────── */
//         .mobile-toc-btn {
//           display: none; width: 100%;
//           background: #fff; border: 1px solid #e5e7eb;
//           border-radius: 12px; padding: 13px 16px;
//           font-family: 'Sora',sans-serif; font-size: 14px;
//           font-weight: 600; color: #111; cursor: pointer;
//           align-items: center; justify-content: space-between;
//           margin-bottom: 16px; touch-action: manipulation;
//           -webkit-tap-highlight-color: transparent;
//         }
//         .dark .mobile-toc-btn { background: #111827; border-color: #1f2937; color: #f9fafb; }
//         @media(max-width:1023px) { .mobile-toc-btn { display: flex; } }
//         .mobile-toc-panel {
//           display: none; background: #fff;
//           border: 1px solid #e5e7eb; border-radius: 12px;
//           padding: 12px; margin-bottom: 24px;
//         }
//         .dark .mobile-toc-panel { background: #111827; border-color: #1f2937; }
//         .mobile-toc-panel.open { display: block; }

//         /* ── Article body ────────────────────────────────────── */
//         .article-body {
//           font-family: 'Lora',serif;
//           font-size: clamp(15px,1.8vw,16px);
//           line-height: 1.78; color: #1E293B;
//         }
//         .dark .article-body { color: #d1d5db; }
//         .article-body h2 {
//           font-family: 'Sora',sans-serif;
//           font-size: clamp(18px,2.4vw,22px);
//           font-weight: 800; color: #0D1B2A;
//           margin: 48px 0 14px; padding-bottom: 12px;
//           border-bottom: 2px solid #e5e7eb;
//           letter-spacing: -.3px; line-height: 1.3;
//           scroll-margin-top: calc(var(--nav-h) + 16px);
//         }
//         .dark .article-body h2 { color: #f9fafb; border-color: #1f2937; }
//         .article-body h2:first-child { margin-top: 0; }
//         .article-body h3 {
//           font-family: 'Sora',sans-serif;
//           font-size: clamp(15px,1.8vw,17px);
//           font-weight: 700; color: #0D1B2A;
//           margin: 28px 0 10px; letter-spacing: -.2px;
//           scroll-margin-top: calc(var(--nav-h) + 16px);
//         }
//         .dark .article-body h3 { color: #f3f4f6; }
//         .article-body p { margin-bottom: 16px; font-size: clamp(14.5px,1.7vw,15.5px); line-height: 1.78; }
//         .article-body ul,ol { margin: 4px 0 18px 20px; }
//         .article-body li { font-size: clamp(14px,1.6vw,15px); line-height: 1.72; margin-bottom: 8px; }
//         .article-body li::marker { color: #F97316; }
//         .article-body strong { font-weight: 700; color: #0D1B2A; }
//         .dark .article-body strong { color: #f9fafb; }

//         /* ── Image caption ───────────────────────────────────── */
//         .art-img-cap {
//           font-size: 12px; color: #94A3B8; font-style: italic;
//           text-align: center; margin-bottom: 28px; padding: 8px 12px;
//         }

//         /* ── Callout boxes ───────────────────────────────────── */
//         .box { border-radius: 10px; padding: clamp(16px,2.5vw,20px) clamp(16px,2.5vw,22px); margin: 20px 0; }
//         .box-label {
//           font-size: 11px; font-weight: 700; letter-spacing: .7px;
//           text-transform: uppercase; margin-bottom: 8px;
//           display: flex; align-items: center; gap: 6px;
//         }
//         .box p { margin: 0; font-size: clamp(13.5px,1.5vw,14.5px); line-height: 1.72; }
//         .box-teal  { background: #F0FDFA; border-left: 4px solid #0D9488; }
//         .box-teal .box-label  { color: #0D9488; }
//         .box-amber { background: #FFFBEB; border-left: 4px solid #D97706; }
//         .box-amber .box-label { color: #D97706; }
//         .box-green { background: #F0FDF4; border-left: 4px solid #16A34A; }
//         .box-green .box-label { color: #16A34A; }
//         .box-pink  { background: #FDF2F8; border-left: 4px solid #DB2777; }
//         .box-pink .box-label  { color: #DB2777; }
//         .box-indigo { background: #EEF2FF; border: 1px solid #C7D2FE; border-radius: 10px; }
//         .box-indigo .box-label { color: #4F46E5; }
//         .dark .box-teal   { background: #042f2e; border-color: #134e4a; }
//         .dark .box-amber  { background: #1c1507; border-color: #78350f; }
//         .dark .box-green  { background: #052e16; border-color: #166534; }
//         .dark .box-pink   { background: #500724; border-color: #9d174d; }
//         .dark .box-indigo { background: #1e1b4b; border-color: #3730a3; }

//         /* ── Steps ───────────────────────────────────────────── */
//         .steps { display: flex; flex-direction: column; gap: 10px; margin: 16px 0 24px; }
//         .step {
//           display: flex; gap: 14px; background: #F8FAFC;
//           border: 1px solid #E2E8F0; border-radius: 10px;
//           padding: clamp(14px,2vw,18px) clamp(14px,2vw,20px);
//           transition: box-shadow .2s;
//         }
//         .step:hover { box-shadow: 0 4px 16px rgba(0,0,0,.09); }
//         .dark .step { background: #111827; border-color: #1f2937; }
//         .step-n {
//           flex-shrink: 0; width: 32px; height: 32px;
//           background: #F97316; color: white; border-radius: 50%;
//           font-weight: 800; font-size: 14px; display: flex;
//           align-items: center; justify-content: center;
//           font-family: 'Sora',sans-serif;
//         }
//         .step-body strong {
//           display: block; font-size: clamp(13px,1.5vw,14.5px);
//           color: #0D1B2A; margin-bottom: 3px; font-family: 'Sora',sans-serif;
//         }
//         .dark .step-body strong { color: #f9fafb; }
//         .step-body p {
//           margin: 0; font-size: clamp(12.5px,1.4vw,13.5px);
//           color: #64748B; line-height: 1.6; font-family: 'Sora',sans-serif;
//         }

//         /* ── Data tables ─────────────────────────────────────── */
//         .tbl-wrap {
//           overflow-x: auto; border-radius: 10px;
//           box-shadow: 0 4px 16px rgba(0,0,0,.09);
//           margin: 20px 0 28px;
//           -webkit-overflow-scrolling: touch;
//         }
//         table.dt {
//           width: 100%; border-collapse: collapse;
//           font-size: clamp(11px,1.3vw,13.5px);
//           font-family: 'Sora',sans-serif; min-width: 460px;
//         }
//         table.dt thead tr { background: #0D1B2A; }
//         table.dt th {
//           padding: clamp(10px,1.5vw,13px) clamp(12px,1.5vw,16px);
//           color: white; font-weight: 700; text-align: left;
//           font-size: clamp(10px,1.2vw,12.5px); letter-spacing: .2px;
//           white-space: nowrap;
//         }
//         table.dt tbody tr { border-bottom: 1px solid #E2E8F0; transition: background .15s; }
//         table.dt tbody tr:nth-child(even) td { background: #F8FAFC; }
//         table.dt tbody tr:hover td { background: #FFF7ED; }
//         table.dt td {
//           padding: clamp(10px,1.5vw,13px) clamp(12px,1.5vw,16px);
//           vertical-align: middle; color: #1E293B;
//         }
//         .dark table.dt td { color: #d1d5db; }
//         .dark table.dt tbody tr:nth-child(even) td { background: #0f172a; }
//         table.dt tr.hl td { background: #FFF7ED !important; border-left: 3px solid #F97316; }
//         table.dt tr.hl td:first-child { font-weight: 700; color: #F97316; }
//         .bg { background:#DCFCE7;color:#15803D;font-weight:700;padding:3px 8px;border-radius:20px;font-size:11px;white-space:nowrap; }
//         .br { background:#FEE2E2;color:#B91C1C;font-weight:700;padding:3px 8px;border-radius:20px;font-size:11px;white-space:nowrap; }
//         .ba { background:#FEF3C7;color:#92400E;font-weight:700;padding:3px 8px;border-radius:20px;font-size:11px;white-space:nowrap; }
//         .bb { background:#DBEAFE;color:#1E40AF;font-weight:700;padding:3px 8px;border-radius:20px;font-size:11px;white-space:nowrap; }

//         /* ── Mistakes ────────────────────────────────────────── */
//         .mistake-list { display: flex; flex-direction: column; gap: 10px; margin: 16px 0 24px; }
//         .mistake { border: 1px solid #E2E8F0; border-radius: 10px; display: flex; overflow: hidden; }
//         .dark .mistake { border-color: #1f2937; }
//         .mistake-num {
//           flex-shrink: 0; width: 44px; background: #0D1B2A;
//           color: white; font-weight: 800; font-size: clamp(15px,2vw,17px);
//           display: flex; align-items: center; justify-content: center;
//           font-family: 'Sora',sans-serif;
//         }
//         .mistake-body { padding: clamp(12px,2vw,16px) clamp(14px,2vw,18px); }
//         .mistake-body strong {
//           display: block; font-size: clamp(13px,1.5vw,14.5px);
//           color: #0D1B2A; margin-bottom: 5px; font-family: 'Sora',sans-serif;
//         }
//         .dark .mistake-body strong { color: #f9fafb; }
//         .mistake-body p {
//           margin: 0; font-size: clamp(12px,1.3vw,13.5px);
//           color: #64748B; line-height: 1.65; font-family: 'Sora',sans-serif;
//         }
//         .dark .mistake-body p { color: #9ca3af; }

//         /* ── Metrics grid ────────────────────────────────────── */
//         .metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 16px 0 24px; }
//         @media(max-width:580px) { .metrics { grid-template-columns: 1fr; } }
//         .metric {
//           background: #F8FAFC; border: 1px solid #E2E8F0;
//           border-radius: 10px; padding: clamp(14px,2vw,18px);
//           display: flex; gap: 12px; align-items: flex-start;
//         }
//         .dark .metric { background: #111827; border-color: #1f2937; }
//         .metric-icon {
//           flex-shrink: 0; width: 36px; height: 36px;
//           border-radius: 9px; background: #FFEDD5;
//           display: flex; align-items: center; justify-content: center;
//         }
//         .metric-t { font-size: clamp(12.5px,1.4vw,13.5px); font-weight: 700; color: #0D1B2A; margin-bottom: 3px; font-family: 'Sora',sans-serif; }
//         .dark .metric-t { color: #f9fafb; }
//         .metric-d { font-size: clamp(11.5px,1.2vw,12.5px); color: #64748B; line-height: 1.5; font-family: 'Sora',sans-serif; }
//         .dark .metric-d { color: #9ca3af; }

//         /* ── Mid-CTA ─────────────────────────────────────────── */
//         .mid-cta {
//           background: linear-gradient(135deg,#0D1B2A 0%,#1A2E42 100%);
//           border-radius: 10px; padding: clamp(20px,3vw,28px) clamp(20px,3vw,32px);
//           margin: 36px 0; display: flex;
//           align-items: center; justify-content: space-between;
//           gap: 16px; flex-wrap: wrap;
//         }
//         .mid-cta h3 {
//           font-size: clamp(15px,1.8vw,18px); font-weight: 800;
//           color: white; margin-bottom: 5px; letter-spacing: -.2px;
//           font-family: 'Sora',sans-serif;
//         }
//         .mid-cta p { color: #94A3B8; font-size: clamp(12px,1.3vw,13.5px); margin: 0; font-family: 'Sora',sans-serif; }
//         .mid-cta-btn {
//           flex-shrink: 0; background: #F97316; color: white;
//           padding: 12px 22px; border-radius: 8px;
//           font-weight: 700; font-size: clamp(13px,1.5vw,14.5px);
//           white-space: nowrap; cursor: pointer; border: none;
//           font-family: 'Sora',sans-serif; touch-action: manipulation;
//           min-height: 44px;
//         }
//         @media(max-width:480px) {
//           .mid-cta { flex-direction: column; align-items: stretch; }
//           .mid-cta-btn { width: 100%; text-align: center; }
//         }

//         /* ── FAQ ─────────────────────────────────────────────── */
//         .faq-item {
//           border: 1px solid #E2E8F0; border-radius: 10px;
//           margin-bottom: 10px; overflow: hidden;
//           background: #fff; transition: border-color .2s;
//         }
//         .dark .faq-item { background: #111827; border-color: #1f2937; }
//         .faq-item.open { border-color: #F97316; }
//         .faq-q {
//           padding: clamp(13px,2vw,16px) clamp(14px,2vw,20px);
//           font-size: clamp(13px,1.5vw,14.5px); font-weight: 700;
//           color: #0D1B2A; cursor: pointer;
//           display: flex; justify-content: space-between;
//           align-items: center; gap: 12px;
//           font-family: 'Sora',sans-serif;
//           transition: background .15s; min-height: 44px;
//           -webkit-tap-highlight-color: transparent;
//           touch-action: manipulation;
//         }
//         .dark .faq-q { color: #f9fafb; }
//         .faq-q:hover { background: #F8FAFC; }
//         .dark .faq-q:hover { background: #1f2937; }
//         .faq-icon {
//           flex-shrink: 0; width: 22px; height: 22px;
//           border-radius: 50%; background: #FFEDD5; color: #F97316;
//           display: flex; align-items: center; justify-content: center;
//           font-size: 16px; transition: transform .2s;
//         }
//         .faq-icon.open { transform: rotate(45deg); background: #F97316; color: white; }
//         .faq-a {
//           padding: 0 clamp(14px,2vw,20px) clamp(12px,2vw,16px);
//           font-size: clamp(13.5px,1.5vw,14px); color: #64748B;
//           line-height: 1.75; font-family: 'Lora',serif;
//         }
//         .dark .faq-a { color: #9ca3af; }

//         /* ── Related grid ────────────────────────────────────── */
//         .related-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; }
//         @media(max-width:768px) { .related-grid { grid-template-columns: 1fr 1fr; } }
//         @media(max-width:480px) { .related-grid { grid-template-columns: 1fr; } }
//         .rel-card {
//           border: 1px solid #E2E8F0; border-radius: 10px;
//           overflow: hidden; cursor: pointer; transition: box-shadow .2s,transform .2s;
//           background: #fff; touch-action: manipulation;
//           -webkit-tap-highlight-color: transparent;
//         }
//         .dark .rel-card { background: #111827; border-color: #1f2937; }
//         .rel-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,.09); transform: translateY(-2px); }
//         @media(hover:none) { .rel-card:hover { transform: none; } }
//         .rel-thumb { width: 100%; height: clamp(90px,15vw,128px); display: flex; align-items: center; justify-content: center; font-size: clamp(22px,3vw,28px); }
//         .rel-body { padding: 12px 14px; }
//         .rel-tag { font-size: 10.5px; font-weight: 700; color: #F97316; text-transform: uppercase; letter-spacing: .5px; margin-bottom: 5px; font-family: 'Sora',sans-serif; }
//         .rel-title { font-size: clamp(12px,1.3vw,13px); font-weight: 700; color: #0D1B2A; line-height: 1.4; font-family: 'Sora',sans-serif; }
//         .dark .rel-title { color: #f9fafb; }

//         /* ── TOC link ────────────────────────────────────────── */
//         .toc-link {
//           display: block; font-size: clamp(12px,1.2vw,12.5px);
//           font-weight: 500; color: #64748B; padding: 6px 10px;
//           border-radius: 6px; cursor: pointer; border: none;
//           background: none; text-align: left; width: 100%;
//           transition: all .15s; margin-bottom: 2px; line-height: 1.4;
//           border-left: 2px solid transparent;
//           touch-action: manipulation; -webkit-tap-highlight-color: transparent;
//         }
//         .toc-link:hover, .toc-link.active {
//           color: #F97316; background: #FFF7ED; border-left-color: #F97316;
//         }
//         .dark .toc-link { color: #9ca3af; }
//         .dark .toc-link:hover, .dark .toc-link.active { background: #431407; color: #fb923c; }

//         /* ── Stat strip ──────────────────────────────────────── */
//         .stat-strip {
//           display: flex; flex-wrap: wrap;
//           border: 1px solid #E2E8F0; border-radius: 10px;
//           overflow: hidden; background: #fff;
//           box-shadow: 0 1px 3px rgba(0,0,0,.07);
//         }
//         .dark .stat-strip { border-color: #1f2937; background: #111827; }
//         .stat-item {
//           flex: 1; min-width: 130px;
//           padding: clamp(12px,2vw,18px) clamp(14px,2.5vw,24px);
//           border-right: 1px solid #E2E8F0; text-align: center;
//         }
//         .dark .stat-item { border-color: #1f2937; }
//         .stat-item:last-child { border-right: none; }
//         @media(max-width:580px) {
//           .stat-item { min-width: 50%; }
//           .stat-item:nth-child(2) { border-right: none; }
//           .stat-item:nth-child(1),.stat-item:nth-child(2) { border-bottom: 1px solid #E2E8F0; }
//           .dark .stat-item:nth-child(1),.dark .stat-item:nth-child(2) { border-bottom-color: #1f2937; }
//         }

//         /* ── Takeaway box ────────────────────────────────────── */
//         .takeaway-box {
//           background: #0D1B2A; border-radius: 10px;
//           padding: clamp(20px,3vw,28px) clamp(18px,3vw,30px); margin: 24px 0;
//         }
//         .takeaway-box h3 {
//           font-family: 'Sora',sans-serif;
//           font-size: clamp(15px,1.8vw,18px);
//           font-weight: 800; color: white; margin: 0 0 14px;
//           display: flex; align-items: center; gap: 10px;
//         }
//         .takeaway-item { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px; }
//         .takeaway-dot {
//           flex-shrink: 0; width: 18px; height: 18px;
//           border-radius: 50%; background: #F97316;
//           display: flex; align-items: center; justify-content: center;
//           font-size: 10px; font-weight: 800; color: white; margin-top: 3px;
//         }
//         .takeaway-text {
//           font-family: 'Lora',serif;
//           font-size: clamp(13.5px,1.5vw,14.5px);
//           color: #CBD5E1; line-height: 1.6;
//         }

//         /* ── Graphic containers ──────────────────────────────── */
//         .blog-graphic {
//           width: 100%; border-radius: 12px; overflow: hidden;
//           margin: 24px 0 0; box-shadow: 0 24px 64px rgba(0,0,0,.28);
//           display: block; position: relative;
//         }

//         /* ── Hero graphic — same as other graphics, not full-bleed */
//         .blog-graphic-hero { border-radius: 12px; margin: 24px 0 0; }

//         /* ── Graphic height — responsive ─────────────────────── */
//         .gh-hero   { height: clamp(240px,40vw,420px); }
//         .gh-medium { height: clamp(240px,40vw,420px); }
//         .gh-short  { height: clamp(220px,36vw,400px); }
//         .gh-steps  { height: clamp(260px,42vw,400px); }
//         .gh-wflow  { height: clamp(260px,40vw,380px); }

//         /* ── On very small screens, hide complex absolute cards ─ */
//         @media(max-width:540px) {
//           .hero-cards-wrap   { display: none; }
//           .platform-cards-wrap { display: none; }
//           .steps-panel-inner { display: none; }
//           .wflow-cards       { display: none; }
//           .feat-grid-wrap    { display: none; }
//         }

//         /* ── Final CTA ───────────────────────────────────────── */
//         .fc-block {
//           background: linear-gradient(135deg,#DB2777 0%,#7C3AED 100%);
//           padding: clamp(48px,8vw,80px) clamp(16px,4vw,24px);
//           text-align: center;
//         }
//         .fc-inner { max-width: 640px; margin: 0 auto; }
//         .fc-inner h2 {
//           font-family: 'Sora',sans-serif;
//           font-size: clamp(22px,4vw,38px);
//           font-weight: 800; color: white; margin-bottom: 14px;
//           line-height: 1.2; letter-spacing: -.4px;
//         }
//         .fc-inner p {
//           color: rgba(255,255,255,.75);
//           font-size: clamp(14px,1.6vw,16px);
//           max-width: 520px; margin: 0 auto 24px;
//           line-height: 1.7; font-family: 'Lora',serif;
//         }
//         .fc-points {
//           display: flex; justify-content: center;
//           flex-wrap: wrap; gap: 8px 20px; margin-bottom: 28px;
//         }
//         .fc-pt {
//           color: rgba(255,255,255,.85); font-size: clamp(12px,1.4vw,13.5px);
//           display: flex; align-items: center; gap: 7px;
//           font-family: 'Sora',sans-serif;
//         }
//         .fc-pt::before { content: '✓'; color: white; font-weight: 800; }
//         .fc-btn {
//           background: white; color: #DB2777;
//           padding: clamp(13px,2vw,16px) clamp(24px,4vw,40px);
//           border-radius: 10px; font-size: clamp(14px,1.6vw,16px);
//           font-weight: 800; border: none; cursor: pointer;
//           transition: transform .2s; letter-spacing: -.2px;
//           min-height: 52px; touch-action: manipulation;
//         }
//         .fc-btn:hover { transform: translateY(-2px); }
//         @media(hover:none) { .fc-btn:hover { transform: none; } }
//         @media(max-width:400px) { .fc-btn { width: 100%; } }
//         .fc-sub { color: rgba(255,255,255,.5); font-size: 12.5px; margin-top: 14px; }

//         /* ── Breadcrumb ──────────────────────────────────────── */
//         .breadcrumb-bar {
//           background: #F8FAFC; border-bottom: 1px solid #E2E8F0;
//           padding: 10px 0;
//           margin-top: var(--nav-h);
//         }
//         .breadcrumb-inner {
//           max-width: 1240px; margin: 0 auto;
//           padding: 0 clamp(12px,3vw,24px);
//           display: flex; align-items: center; gap: 6px;
//           font-size: clamp(11px,1.2vw,12.5px); color: #94A3B8;
//           flex-wrap: wrap;
//         }
//         .breadcrumb-btn {
//           color: #64748B; font-weight: 500;
//           background: none; border: none; cursor: pointer;
//           font-family: 'Sora',sans-serif;
//           padding: 2px 0; touch-action: manipulation;
//           -webkit-tap-highlight-color: transparent;
//         }

//         /* ── Hero section ────────────────────────────────────── */
//         .hero-section {
//           max-width: 1240px; margin: 0 auto;
//           padding: clamp(28px,4vw,48px) clamp(12px,3vw,24px) clamp(24px,3vw,36px);
//         }

//         /* ── Footer grid ─────────────────────────────────────── */
//         .footer-grid {
//           display: grid;
//           grid-template-columns: 2fr 1fr 1fr 1fr;
//           gap: 36px; margin-bottom: 40px;
//         }
//         @media(max-width:900px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
//         @media(max-width:480px) { .footer-grid { grid-template-columns: 1fr; } }
//         .footer-bottom {
//           border-top: 1px solid #162032; padding-top: 20px;
//           display: flex; justify-content: space-between;
//           align-items: center; flex-wrap: wrap; gap: 10px;
//           font-size: 12px; color: #334155;
//           font-family: 'Sora',sans-serif;
//         }

//         /* ── Sidebar CTA card ────────────────────────────────── */
//         .sidebar-cta {
//           background: linear-gradient(160deg,#0D1B2A 0%,#162B45 100%);
//           border-radius: 10px; padding: clamp(18px,2vw,24px); margin-top: 18px;
//         }
//         .sidebar-share {
//           background: #F8FAFC; border: 1px solid #E2E8F0;
//           border-radius: 10px; padding: 16px; margin-top: 18px;
//         }
//         .dark .sidebar-share { background: #111827; border-color: #1f2937; }

//         /* ── Nav buttons tap areas ───────────────────────────── */
//         nav button { -webkit-tap-highlight-color: transparent; }

//         /* ── Footer buttons min tap target ───────────────────── */
//         footer button, footer a { min-height: 36px; display: inline-flex; align-items: center; }
//       `}</style>

//       <div className="read-progress" style={{ width:`${scrollPct}%` }} />

//       {/* ════════════════════════════════ NAV */}
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled?"bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg":"bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"}`}>
//         <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">
//           <div className="flex items-center justify-between h-[72px] lg:h-20">

//             {/* Logo */}
//             <div className="flex items-center space-x-1 group cursor-pointer flex-shrink-0" onClick={() => setLocation("/")}>
//               <div className="relative">
//                 <img src="/logo.png" alt="Insydz Logo" className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain" />
//                 <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
//               </div>
//               <span className="text-lg lg:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ml-1.5">Insydz</span>
//             </div>

//             {/* Desktop nav */}
//             <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1" ref={dropdownRef}>
//               <DesktopDropdown label="Solutions"  menuKey="Solutions" />
//               <DesktopDropdown label="Use Cases"  menuKey="Use Cases" />
//               <DesktopDropdown label="Features"   menuKey="Features" />
//               <button onClick={() => setLocation("/pricing")} onMouseEnter={() => setActiveDropdown(null)} className="px-2 xl:px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all">Pricing</button>
//               <DesktopDropdown label="Free Tools" menuKey="Free Tools" />
//               <DesktopDropdown label="Compare"    menuKey="Compare" />
//               <DesktopDropdown label="Resources"  menuKey="Resources" accent="orange" />
//               <DesktopDropdown label="About"      menuKey="About" />
//               <Button onClick={() => setLocation("/login")} onMouseEnter={() => setActiveDropdown(null)} className="ml-2 text-sm bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-4 xl:px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">Login</Button>
//               <button className="ml-1 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle dark mode">
//                 {isDarkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-gray-800" />}
//               </button>
//             </div>

//             {/* Mobile controls */}
//             <div className="lg:hidden flex items-center gap-2">
//               <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors" onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle dark mode">
//                 {isDarkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-gray-700 dark:text-gray-200" />}
//               </button>
//               <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
//                 {isMenuOpen ? <X className="w-6 h-6 text-gray-700 dark:text-gray-200" /> : <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 max-h-[calc(100dvh-72px)] overflow-y-auto">
//             <div className="px-4 py-3 space-y-1">
//               <button onClick={() => { setLocation("/resources/expert-blog"); setIsMenuOpen(false); }} className="flex items-center gap-2 w-full px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium text-sm">
//                 <ArrowLeft className="w-4 h-4" /> Back to Blog
//               </button>
//               {([["Solutions","Solutions","purple"],["Use Cases","Use Cases","purple"],["Features","Features","purple"],["Free Tools","Free Tools","purple"],["Compare","Compare","purple"],["Resources","Resources","orange"],["About","About","purple"]] as [string, keyof NavigationMenu, string][]).map(([label,key,accent]) => (
//                 <div key={label}>
//                   <button onClick={() => toggleMobileMenu(label)} className={`flex items-center justify-between w-full px-4 py-3 rounded-lg font-medium text-sm ${accent==="orange"?"text-orange-600 dark:text-orange-500 hover:bg-orange-50":"text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"}`}>
//                     {label}<ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu===label?"rotate-180":""}`} />
//                   </button>
//                   {mobileActiveMenu===label && (
//                     <div className="ml-4 mt-1 space-y-0.5 pb-1">
//                       {navigationMenu[key].map((item,i) => (
//                         <button key={i} onClick={() => handleMenuItemClick(item)} className={`flex items-center gap-2 w-full px-4 py-2.5 text-sm rounded-lg ${accent==="orange"?"text-gray-600 hover:bg-orange-50":"text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20"}`}>
//                           <span className="flex-shrink-0">{item.icon}</span>
//                           <span className="flex-1 text-left">{item.name}</span>
//                           {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full flex-shrink-0">{item.badge}</span>}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//               <button onClick={() => { setLocation("/pricing"); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium text-sm">Pricing</button>
//               <div className="pt-2">
//                 <Button onClick={() => { setLocation("/login"); setIsMenuOpen(false); }} className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold py-3 rounded-xl">Login</Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* ════════════════════════════════ BREADCRUMB */}
//       <div className="breadcrumb-bar">
//         <div className="breadcrumb-inner">
//           <button className="breadcrumb-btn" onClick={() => setLocation("/")}>Home</button>
//           <span style={{ color:"#E2E8F0" }}>›</span>
//           <button className="breadcrumb-btn" onClick={() => setLocation("/resources/expert-blog")}>Blog</button>
//           <span style={{ color:"#E2E8F0" }}>›</span>
//           <button className="breadcrumb-btn hidden sm:inline" onClick={() => setLocation("/features/competitor-price-tracking-feature")}>Seller Tools</button>
//           <span className="hidden sm:inline" style={{ color:"#E2E8F0" }}>›</span>
//           <span>Best Price Tracking Tools India</span>
//         </div>
//       </div>

//       {/* ════════════════════════════════ HERO */}
//       <div className="hero-section">
//         <div style={{ display:"inline-flex", alignItems:"center", gap:7, background:"#FFEDD5", color:"#F97316", fontSize:11.5, fontWeight:700, letterSpacing:.6, textTransform:"uppercase", padding:"5px 14px", borderRadius:20, marginBottom:16 }}>
//           <div style={{ width:7, height:7, borderRadius:"50%", background:"#F97316" }} />
//           Tool Comparison &amp; Reviews
//         </div>

//         <h1 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(22px,3.8vw,40px)", fontWeight:800, lineHeight:1.18, color:"#0D1B2A", letterSpacing:"-.5px", marginBottom:16, maxWidth:820 }} className="dark:text-white">
//           Best <span style={{ color:"#F97316" }}>Competitor Price Tracking Tools</span> for Indian Sellers: The 2026 Guide
//         </h1>

//         <div style={{ display:"flex", alignItems:"center", flexWrap:"wrap", gap:"5px 16px", marginBottom:24 }}>
//           {[
//             <><Users className="w-3.5 h-3.5 inline mr-1 text-gray-400" /><strong style={{ color:"#0D1B2A" }}>INSYDZ Research Team</strong></>,
//             <><Clock className="w-3.5 h-3.5 inline mr-1 text-gray-400" />January 2026</>,
//             <><Clock className="w-3.5 h-3.5 inline mr-1 text-gray-400" /><strong>12 min read</strong></>,
//           ].map((item, i) => (
//             <div key={i} style={{ display:"flex", alignItems:"center", gap:6, fontSize:clamp13, color:"#64748B" }}>{item}</div>
//           ))}
//           <span style={{ background:"#FFEDD5", color:"#F97316", fontSize:11, fontWeight:700, padding:"2px 8px", borderRadius:4 }}>Updated for 2026</span>
//           <span style={{ background:"#EEF2FF", color:"#4F46E5", fontSize:11, fontWeight:700, padding:"2px 8px", borderRadius:4 }}>BOFU Guide</span>
//         </div>

//         {/* Stats bar */}
//         <div className="stat-strip" style={{ marginBottom:28 }}>
//           {[
//             ["1.7M+",   "Active Sellers Competing on Indian Marketplaces"],
//             ["30–40%",  "More Demand Captured With Real-Time Tracking"],
//             ["60–85%",  "Cost Savings vs Global Tools Like Helium 10"],
//             ["<60 min", "WhatsApp Alert Response Time with Insydz AI"],
//           ].map(([num, lbl]) => (
//             <div className="stat-item" key={num}>
//               <span style={{ display:"block", fontSize:"clamp(20px,3.5vw,26px)", fontWeight:800, color:"#F97316", fontFamily:"'Sora',sans-serif", lineHeight:1 }}>{num}</span>
//               <span style={{ display:"block", fontSize:"clamp(10px,1.2vw,11.5px)", color:"#64748B", marginTop:5, lineHeight:1.4, fontWeight:500 }}>{lbl}</span>
//             </div>
//           ))}
//         </div>

//         {/* ── Hero Graphic — contained inside hero section ── */}
//         <div className="blog-graphic blog-graphic-hero gh-hero" id="b2img1" style={{ background:"linear-gradient(135deg,#EC4899 0%,#A855F7 55%,#6366F1 100%)" }}>
//         <div style={{ position:"absolute", inset:0, background:"radial-gradient(circle at 35% 50%,rgba(255,255,255,.08) 0%,transparent 55%)", pointerEvents:"none" }} />
//         {/* Left text — always visible */}
//         <div style={{ position:"absolute", left:"clamp(20px,5vw,52px)", top:"50%", transform:"translateY(-50%)", maxWidth:"clamp(200px,30vw,320px)", zIndex:2 }}>
//           <div style={{ fontSize:10.5, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:"rgba(255,255,255,.6)", marginBottom:12, display:"flex", alignItems:"center", gap:8 }}>
//             <div style={{ width:24, height:2, background:"rgba(255,255,255,.4)", borderRadius:1 }} />Insydz · 2026 Guide
//           </div>
//           <div style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(32px,6vw,60px)", fontWeight:900, color:"white", lineHeight:.9, letterSpacing:"clamp(-2px,-0.4vw,-4px)", marginBottom:16 }}>
//             Best<br /><span style={{ color:"#FDE68A" }}>Price</span><br />Trackers
//           </div>
//           <p style={{ fontSize:"clamp(11px,1.4vw,13.5px)", color:"rgba(255,255,255,.65)", lineHeight:1.65, maxWidth:270 }}>
//             Compare all competitor price tracking tools for Indian sellers — one honest, complete guide.
//           </p>
//         </div>
//         {/* Dashboard cards — hidden on small screens via CSS */}
//         <div className="hero-cards-wrap" style={{ position:"absolute", right:"clamp(20px,3vw,40px)", top:0, bottom:0, display:"flex", alignItems:"center", gap:16 }}>
//           {/* Card A */}
//           <div style={{ position:"relative", background:"white", borderRadius:12, overflow:"hidden", boxShadow:"0 16px 48px rgba(0,0,0,.22)", fontFamily:"'Sora',sans-serif", width:278, transform:"rotate(-3deg)", zIndex:5 }}>
//             <div style={{ background:"#f8fafc", borderBottom:"1px solid #eef1f6", padding:"8px 12px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
//               <span style={{ fontSize:9.5, fontWeight:700, color:"#1a2438" }}>Performance Overview</span>
//               <span style={{ fontSize:8, fontWeight:700, padding:"2px 7px", borderRadius:8, background:"#DCFCE7", color:"#166534" }}>● Live</span>
//             </div>
//             <div style={{ padding:"11px 13px" }}>
//               <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:7 }}>
//                 {[
//                   { v:"11,906",l:"Total Products",bg:"#EFF6FF",vc:"#1D4ED8" },
//                   { v:"₹9,801", l:"Avg Price",     bg:"#F0FDF4",vc:"#15803D" },
//                   { v:"4.13",   l:"Avg Rating",    bg:"#FFFBEB",vc:"#B45309" },
//                   { v:"8.2M",   l:"Total Reviews", bg:"#F5F3FF",vc:"#7C3AED" },
//                 ].map(s => (
//                   <div key={s.l} style={{ borderRadius:8, padding:"8px 10px", textAlign:"center", background:s.bg }}>
//                     <span style={{ display:"block", fontSize:15, fontWeight:800, lineHeight:1, color:s.vc }}>{s.v}</span>
//                     <span style={{ display:"block", fontSize:7.5, fontWeight:600, marginTop:3, opacity:.75, color:s.vc }}>{s.l}</span>
//                   </div>
//                 ))}
//               </div>
//               <div style={{ background:"#F8FAFC", borderRadius:7, padding:"8px 10px", marginTop:8, fontSize:8.5, color:"#475569", lineHeight:1.55 }}>
//                 <strong style={{ color:"#0D1B2A", display:"block", marginBottom:2 }}>AI Insight</strong>
//                 Your Flipkart store is performing steadily. Continue optimizing product pricing to improve average margins.
//               </div>
//               <div style={{ background:"linear-gradient(90deg,#06B6D4,#3B82F6)", color:"white", borderRadius:6, padding:"6px 0", fontSize:9.5, fontWeight:700, textAlign:"center", marginTop:8, letterSpacing:.3 }}>View Full Dashboard →</div>
//             </div>
//           </div>
//           {/* Card B */}
//           <div style={{ position:"relative", background:"white", borderRadius:12, overflow:"hidden", boxShadow:"0 16px 48px rgba(0,0,0,.22)", fontFamily:"'Sora',sans-serif", width:224, transform:"rotate(2.5deg)", zIndex:6, marginTop:80 }}>
//             <div style={{ background:"#f8fafc", borderBottom:"1px solid #eef1f6", padding:"8px 12px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
//               <span style={{ fontSize:9.5, fontWeight:700, color:"#1a2438" }}>Product Categories</span>
//               <span style={{ fontSize:8, fontWeight:700, padding:"2px 7px", borderRadius:8, background:"#FEF3C7", color:"#92400E" }}>Flipkart</span>
//             </div>
//             <div style={{ padding:"11px 13px" }}>
//               {[
//                 { n:"Electronics",    p:"₹1,254", s:"★4.1" },
//                 { n:"Beauty",         p:"₹342",   s:"★4.2" },
//                 { n:"Cell Phones",    p:"₹1,451", s:"★4.1" },
//                 { n:"Home Appliances",p:"₹10,931",s:"★4.2" },
//               ].map((r, i) => (
//                 <div key={r.n} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 0", borderBottom:i<3?"1px solid #f1f5f9":"none", fontSize:9.5 }}>
//                   <span style={{ fontWeight:600, color:"#1e293b" }}>{r.n}</span>
//                   <span style={{ color:"#0891B2", fontWeight:700 }}>{r.p}</span>
//                   <span style={{ color:"#F59E0B", fontSize:8.5 }}>{r.s}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         </div>{/* end hero graphic */}
//       </div>{/* end hero-section */}

//       {/* ════════════════════════════════ TAKEAWAYS */}
//       <div style={{ maxWidth:1240, margin:"0 auto", padding:"0 clamp(12px,3vw,24px) 36px" }}>
//         <div className="takeaway-box">
//           <h3>
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
//             Key Takeaways
//           </h3>
//           {[
//             "Real-time competitor price tracking — not daily or manual — is the standard for competitive Indian sellers in 2026. A 12-hour information lag is a revenue gap.",
//             "India-specific tools matter because Indian sellers operate across Amazon.in, Flipkart, and Meesho simultaneously. A tool covering only Amazon solves 60% of the problem at best.",
//             "Price tracking without stock monitoring is incomplete intelligence. The most profitable decisions come from knowing when a competitor is about to go OOS, not just their current price.",
//             "WhatsApp alerts convert to action significantly faster than email alerts for Indian SMB sellers — alert delivery channel is a critical, underrated feature.",
//             "AI-powered recommendations outperform raw alerts. The goal isn't to know what happened — it's to know what to do next and why.",
//             "Global tools like Helium 10 and Jungle Scout are excellent for Amazon.com but overpriced for Indian sellers and don't cover Flipkart or Meesho.",
//             "Price wars are avoidable. Smart tools calculate minimum necessary adjustments — not maximum reactive discounts — protecting margins while recovering Buy Box.",
//           ].map(t => (
//             <div className="takeaway-item" key={t}>
//               <div className="takeaway-dot">✓</div>
//               <div className="takeaway-text">{t}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ════════════════════════════════ ARTICLE LAYOUT */}
//       <div className="article-layout">

//         {/* SIDEBAR */}
//         <aside className="toc-sidebar" aria-label="Table of contents">
//           <h4 style={{ fontFamily:"'Sora',sans-serif", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:1, color:"#94A3B8", marginBottom:14 }}>Table of Contents</h4>
//           <ul style={{ listStyle:"none", padding:0, margin:0 }}>
//             {TOC.map(t => (
//               <li key={t.id}><button className={`toc-link${activeSection===t.id?" active":""}`} onClick={() => go(t.id)}>{t.label}</button></li>
//             ))}
//           </ul>
//           <div className="sidebar-cta">
//             <h4 style={{ fontFamily:"'Sora',sans-serif", fontSize:clamp15, fontWeight:800, color:"white", marginBottom:10, lineHeight:1.35, letterSpacing:"-.2px" }}>
//               Track Competitor Prices Across All 3 Indian Platforms
//             </h4>
//             <p style={{ fontSize:"clamp(11.5px,1.3vw,12.5px)", color:"#94A3B8", marginBottom:14, lineHeight:1.6, fontFamily:"'Sora',sans-serif" }}>India's only AI-powered price tracker with WhatsApp alerts.</p>
//             <ul style={{ listStyle:"none", padding:0, margin:"0 0 16px" }}>
//               {["Amazon.in + Flipkart + Meesho coverage","WhatsApp alerts in under 60 minutes","AI recommendations — not just raw data","From ₹499/mo — or free forever"].map(f => (
//                 <li key={f} style={{ fontSize:"clamp(11.5px,1.2vw,12.5px)", color:"#CBD5E1", marginBottom:8, display:"flex", alignItems:"flex-start", gap:7, lineHeight:1.4, fontFamily:"'Sora',sans-serif" }}>
//                   <span style={{ color:"#F97316", fontWeight:800, flexShrink:0, fontSize:12, lineHeight:1.3 }}>✓</span>{f}
//                 </li>
//               ))}
//             </ul>
//             <button onClick={() => setLocation("/login")} style={{ display:"block", background:"#F97316", color:"white", textAlign:"center", padding:"11px 0", borderRadius:8, fontWeight:700, fontSize:13.5, width:"100%", cursor:"pointer", border:"none", fontFamily:"'Sora',sans-serif", minHeight:44 }}>
//               Start Free — No Card Needed
//             </button>
//           </div>
//           <div className="sidebar-share">
//             <h4 style={{ fontFamily:"'Sora',sans-serif", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:1, color:"#94A3B8", marginBottom:12 }}>Share This Guide</h4>
//             <div style={{ display:"flex", gap:8 }}>
//               {[{l:"WhatsApp",bg:"#25D366"},{l:"LinkedIn",bg:"#0A66C2"},{l:"Twitter",bg:"#1DA1F2"}].map(s => (
//                 <div key={s.l} style={{ flex:1, textAlign:"center", padding:"9px 4px", borderRadius:7, fontSize:11.5, fontWeight:700, color:"white", background:s.bg, cursor:"pointer", fontFamily:"'Sora',sans-serif", minHeight:36 }}>{s.l}</div>
//               ))}
//             </div>
//           </div>
//         </aside>

//         {/* MAIN */}
//         <main>
//           <button className="mobile-toc-btn" onClick={() => setTocOpen(!tocOpen)} aria-expanded={tocOpen}>
//             📋 Table of Contents <span>{tocOpen?"▲":"▼"}</span>
//           </button>
//           <div className={`mobile-toc-panel${tocOpen?" open":""}`} role="navigation">
//             {TOC.map(t => (
//               <button key={t.id} className="toc-link" style={{ display:"block", marginBottom:4 }} onClick={() => go(t.id)}>{t.label}</button>
//             ))}
//           </div>

//           <article className="article-body">

//             {/* S1 */}
//             <h2 id="intro">The Best Competitor Price Tracking Tool for India — What Actually Matters</h2>
//             <p>The best competitor price tracking tool for India is one that monitors rival prices across Amazon.in, Flipkart, and Meesho in real time — and tells you exactly what to do, not just what happened. With over <strong>1.7 million active sellers competing</strong> on Indian marketplaces, pricing intelligence has moved from a "nice to have" to a survival tool.</p>
//             <p>Indian e-commerce is growing at 25% annually, which means new competitors enter your category every week — and most of them are watching your prices even if you aren't watching theirs. This guide cuts through the noise. We review what actually matters in a price tracking tool for the Indian market, what global tools miss, and which platforms are genuinely worth your ₹499–3,000/month.</p>
//             <div className="box box-teal">
//               <div className="box-label">💡 In Simple Terms</div>
//               <p>A competitor price tracking tool watches your rivals' product prices 24×7 so you don't have to. When a competitor drops their price on Amazon.in or Flipkart, you get an alert — with a recommendation on what to do next. It's the difference between reacting in 5 minutes versus finding out 2 days later.</p>
//             </div>

//             {/* S2 */}
//             <h2 id="why-matters">Why Choosing the Right Tool Matters for Indian Sellers</h2>
//             <h3>The Cost of Being One Step Behind</h3>
//             <p>Price changes on Amazon.in happen constantly — sometimes 5–8 times per day in high-competition categories like electronics, home appliances, and FMCG. A seller who finds out about a competitor's price drop 12 hours later has already lost Buy Box position, potentially dropped in search rankings, and surrendered sales to a faster-reacting rival.</p>
//             <p>The numbers are stark: sellers who track competitor prices in real time <strong>capture 30–40% more demand during competitor stock-outs</strong> and respond to price changes within an hour instead of a day. Over a month, that's a measurable revenue difference — not a marginal one.</p>
//             <h3>Platform Coverage Is Non-Negotiable in India</h3>
//             <p>Unlike the US where Amazon dominates, Indian sellers typically operate across 2–3 platforms simultaneously. A seller doing ₹5 lakh/month might earn ₹3 lakh on Amazon.in, ₹1.5 lakh on Flipkart, and ₹50,000 on Meesho. A price tracking tool that only covers Amazon is only solving 60% of their problem. This is the fundamental gap in most globally-built tools — and it's the clearest reason Indian sellers need an India-first solution.</p>
//             <div className="box box-amber">
//               <div className="box-label">📌 Real Seller Example</div>
//               <p>A Jaipur-based seller of home décor products was manually checking 8 competitors on Flipkart every morning using the browser. It took 90 minutes daily and was still missing overnight price changes. After switching to an automated price tracking tool, she caught a competitor's 22% price drop at 2 AM on a Friday — and adjusted her price by 9 AM Saturday, before the weekend shopping rush. That one response was worth an estimated <strong>₹28,000 in recovered weekend sales</strong>.</p>
//             </div>

//             {/* Graphic 2 */}
//             <div className="blog-graphic gh-medium" id="b2img2" style={{ background:"linear-gradient(135deg,#F43F5E 0%,#EC4899 45%,#8B5CF6 100%)" }}>
//               <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle,rgba(255,255,255,.07) 1px,transparent 1px)", backgroundSize:"30px 30px", pointerEvents:"none" }} />
//               {/* Left text */}
//               <div style={{ position:"absolute", left:"clamp(20px,5vw,52px)", top:"50%", transform:"translateY(-50%)", maxWidth:"clamp(180px,28vw,295px)", zIndex:2 }}>
//                 <div style={{ display:"inline-block", background:"rgba(255,255,255,.15)", color:"white", fontSize:11, fontWeight:700, letterSpacing:.7, textTransform:"uppercase", padding:"5px 12px", borderRadius:20, marginBottom:14 }}>Multi-Platform</div>
//                 <div style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(28px,5.5vw,54px)", fontWeight:900, color:"white", lineHeight:.9, letterSpacing:"clamp(-2px,-0.3vw,-3px)", marginBottom:16 }}>
//                   3<br /><span style={{ color:"#FDE68A" }}>Markets.</span><br />1 Tool.
//                 </div>
//                 <p style={{ fontSize:"clamp(11px,1.3vw,13px)", color:"rgba(255,255,255,.7)", lineHeight:1.6, marginBottom:16 }}>
//                   Amazon.in, Flipkart &amp; Meesho tracked live from one dashboard.
//                 </p>
//                 <div style={{ background:"rgba(0,0,0,.2)", border:"1px solid rgba(255,255,255,.15)", borderRadius:10, padding:"9px 12px", display:"flex", alignItems:"center", gap:8 }}>
//                   <div style={{ width:7, height:7, borderRadius:"50%", background:"#FDE68A", boxShadow:"0 0 8px #FDE68A", flexShrink:0 }} />
//                   <span style={{ fontSize:"clamp(10px,1.2vw,11.5px)", color:"rgba(255,255,255,.8)", fontWeight:500, fontFamily:"'Sora',sans-serif" }}>Prices updating in real time across all 3 platforms</span>
//                 </div>
//               </div>
//               {/* Platform cards — hidden on mobile */}
//               <div className="platform-cards-wrap" style={{ position:"absolute", right:"clamp(16px,3vw,40px)", top:"50%", transform:"translateY(-50%)", display:"flex", flexDirection:"column", gap:10, zIndex:5 }}>
//                 {[
//                   { name:"Amazon.in",  dot:"#06B6D4", prod:"12,450", chg:"+12%", cBg:"#DCFCE7", cC:"#15803D" },
//                   { name:"Flipkart",   dot:"#F59E0B", prod:"11,906", chg:"+8%",  cBg:"#DCFCE7", cC:"#15803D" },
//                   { name:"Meesho",     dot:"#8B5CF6", prod:"9,234",  chg:"−3%",  cBg:"#FEE2E2", cC:"#DC2626" },
//                 ].map(p => (
//                   <div key={p.name} style={{ background:"white", borderRadius:12, padding:"12px 14px", width:270, boxShadow:"0 8px 28px rgba(0,0,0,.25)", fontFamily:"'Sora',sans-serif" }}>
//                     <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
//                       <div style={{ display:"flex", alignItems:"center", gap:7 }}>
//                         <div style={{ width:8, height:8, borderRadius:"50%", background:p.dot, boxShadow:`0 0 6px ${p.dot}` }} />
//                         <span style={{ fontSize:12, fontWeight:800, color:"#0D1B2A", textTransform:"uppercase", letterSpacing:.4 }}>{p.name}</span>
//                       </div>
//                       <span style={{ fontSize:9.5, fontWeight:700, padding:"2px 8px", borderRadius:4, background:"#DCFCE7", color:"#166534" }}>↑ Live</span>
//                     </div>
//                     <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
//                       <div style={{ textAlign:"center" }}>
//                         <span style={{ fontSize:17, fontWeight:900, color:"#0D1B2A", display:"block", lineHeight:1 }}>{p.prod}</span>
//                         <span style={{ fontSize:9, color:"#94A3B8", fontWeight:600, textTransform:"uppercase", letterSpacing:.3, marginTop:2, display:"block" }}>Products</span>
//                       </div>
//                       <div style={{ width:1, height:28, background:"#E2E8F0" }} />
//                       <div style={{ textAlign:"center" }}>
//                         <span style={{ fontSize:17, fontWeight:900, color:"#0D1B2A", display:"block", lineHeight:1 }}>4.1★</span>
//                         <span style={{ fontSize:9, color:"#94A3B8", fontWeight:600, textTransform:"uppercase", letterSpacing:.3, marginTop:2, display:"block" }}>Avg Rating</span>
//                       </div>
//                       <div style={{ width:1, height:28, background:"#E2E8F0" }} />
//                       <span style={{ fontSize:11, fontWeight:700, padding:"4px 9px", borderRadius:5, background:p.cBg, color:p.cC }}>{p.chg}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <p className="art-img-cap">India-first tools like Insydz track Amazon.in, Flipkart, and Meesho simultaneously — the only complete multi-platform solution for Indian sellers</p>

//             <div className="box box-indigo" style={{ padding:"18px 20px", margin:"20px 0" }}>
//               <div className="box-label">
//                 <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ flexShrink:0 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>
//                 AI Overview Summary
//               </div>
//               <p style={{ fontSize:"clamp(13.5px,1.5vw,14.5px)", margin:0, lineHeight:1.72 }}>The best competitor price tracking tools for Indian sellers monitor prices on Amazon.in, Flipkart, and Meesho simultaneously, deliver alerts via WhatsApp rather than email, and provide AI-powered recommendations — not just raw data. For Indian SMBs who can't afford ₹4,000–8,000/month global tools, India-first platforms offer equivalent or better functionality at 60–85% lower cost.</p>
//             </div>

//             {/* S3 */}
//             <h2 id="how-it-works">How Competitor Price Tracking Tools Work</h2>
//             <p>Understanding the mechanics behind price tracking tools helps you evaluate which platform is genuinely real-time versus which claims real-time but runs on hourly batch jobs. Here's what a properly built tool does:</p>
//             <div className="steps">
//               {[
//                 { n:1, t:"Setup & Integration",       d:"Connect your Amazon/Flipkart seller account and input the ASINs or product URLs of competitors you want to monitor. Good tools allow you to add 10–50 competitors per product." },
//                 { n:2, t:"Continuous Crawling",       d:"The tool's engine checks competitor listing prices at regular intervals — anywhere from every 15 minutes to every few hours. AI-powered tools also track stock availability, ratings, and review velocity alongside price." },
//                 { n:3, t:"Anomaly Detection",         d:"When a competitor changes their price beyond your set threshold (e.g., drops more than 5%), the system flags it as a significant event requiring your attention." },
//                 { n:4, t:"WhatsApp Alert Delivery",   d:"You receive an alert via WhatsApp, email, or in-app notification with the specifics: which competitor, which product, what the old price was, what the new price is, and how it compares to your current price." },
//                 { n:5, t:"AI Recommendation Engine",  d:'Advanced tools go beyond the alert: "Competitor A dropped to ₹849. Recommend adjusting to ₹869 — you\'ll recapture Buy Box while protecting ₹47 more margin than a full match."' },
//               ].map(s => (
//                 <div className="step" key={s.n}>
//                   <div className="step-n">{s.n}</div>
//                   <div className="step-body"><strong>{s.t}</strong><p>{s.d}</p></div>
//                 </div>
//               ))}
//             </div>
//             <div className="box box-green">
//               <div className="box-label">⚡ Manual vs Automated</div>
//               <p>Manually tracking 10 competitors across 20 SKUs on 2 platforms requires checking <strong>400 data points daily</strong>. At 30 seconds per check, that's 3.3 hours every single day — just watching prices. Automated tools do this in milliseconds, continuously, without breaks.</p>
//             </div>

//             {/* Graphic 3 */}
// <figure style={{ margin: "24px 0", overflow: "hidden", borderRadius: "12px" }}>
  
//   <img
//     src="/Best_Price_Tracer-Blog2_image3.png"
//     alt="How Insydz price tracking works 5 step pipeline"
//     style={{
//       width: "100%",
//       display: "block",
//       borderRadius: "12px"
//     }}
//   />

//   <figcaption
//     style={{
//       background: "#f1f5f9",
//       padding: "14px 18px",
//       fontSize: "13.5px",
//       lineHeight: "1.6",
//       color: "#64748b",
//       borderTop: "1px solid #e2e8f0"
//     }}
//   >
//     Insydz automates the full 5-step pricing intelligence pipeline — from crawling to WhatsApp alerts to AI-powered recommendations.
//   </figcaption>

// </figure>

//             {/* S4 */}
//             <h2 id="types">Types of Competitor Price Tracking Tools: Which Category Fits You?</h2>
//             <div className="tbl-wrap">
//               <table className="dt">
//                 <thead><tr><th>Tool Type</th><th>Best For</th><th>Speed</th><th>India Fit</th><th>Price Range</th></tr></thead>
//                 <tbody>
//                   <tr><td><strong>Manual Excel / Browser</strong></td><td>0–5 SKUs, early stage</td><td><span className="br">24–48 hrs</span></td><td>Poor</td><td>Free (your time)</td></tr>
//                   <tr><td><strong>Basic Scrapers / Chrome Extensions</strong></td><td>5–20 SKUs, budget-conscious</td><td><span className="ba">4–12 hrs</span></td><td>Partial</td><td>Free – ₹500/mo</td></tr>
//                   <tr><td><strong>Global SaaS (Helium 10, Keepa)</strong></td><td>Amazon-heavy, 20+ SKUs</td><td><span className="bb">1–4 hrs</span></td><td>Limited</td><td>₹3,300–8,300/mo</td></tr>
//                   <tr className="hl"><td><strong>India-First AI Platform (Insydz)</strong></td><td>Any size, multi-platform</td><td><span className="bg">{"<"} 1 hour</span></td><td><span className="bg">Built for India</span></td><td><strong>₹499–2,999/mo</strong></td></tr>
//                   <tr><td><strong>Enterprise Custom Tools</strong></td><td>D2C brands, agencies, 100+ SKUs</td><td><span className="bb">Real-time</span></td><td>Custom</td><td>₹15K–75K/mo</td></tr>
//                 </tbody>
//               </table>
//             </div>

//             <div className="mid-cta">
//               <div style={{ flex:1, minWidth:0 }}>
//                 <h3>Start Tracking Competitor Prices — Free</h3>
//                 <p>Setup in under 30 minutes. WhatsApp alerts from day one. No credit card required.</p>
//               </div>
//               <button className="mid-cta-btn" onClick={() => setLocation("/login")}>Try Insydz Free →</button>
//             </div>

//             {/* S5 */}
//             <h2 id="mistakes">5 Mistakes Indian Sellers Make When Tracking Competitor Prices</h2>
//             <div className="mistake-list">
//               {[
//                 { n:1, t:"Using WhatsApp Screenshots Instead of Actual Tools",   d:"A surprisingly common practice in Indian seller communities: someone in a WhatsApp group notices a competitor's price change and shares a screenshot. By the time it circulates and you act — 6–8 hours have passed. This is community intelligence, not pricing intelligence." },
//                 { n:2, t:"Tracking Only Amazon and Ignoring Flipkart",            d:"Indian sellers who sell on both platforms often apply Amazon-derived pricing to Flipkart without checking Flipkart-specific competitor pricing. Flipkart's competitive dynamics differ — different sellers dominate, price gaps are different, and the Buy Box equivalent works differently." },
//                 { n:3, t:"Setting Alerts Too Wide (Missing the Real Moves)",      d:"Setting a 15% threshold before you get alerted means a competitor dropping from ₹999 to ₹859 — a 14% drop — goes unnoticed. In competitive categories, a ₹50 gap is enough to lose Buy Box. Set alerts at 3–5% for high-competition categories." },
//                 { n:4, t:"Reacting to Every Price Change Without Strategy",       d:"Some sellers match every competitor price drop within minutes. This triggers retaliatory drops, creates category-wide price compression, and erodes everyone's margins including yours. Smart tracking tools calculate the minimum response needed, not the maximum reaction." },
//                 { n:5, t:"Not Connecting Price Tracking to Stock Monitoring",     d:"Price and stock are inseparable signals. When a competitor drops their price, it might mean they're overstocked — and will be out of stock in 3 weeks. If you know they're about to go OOS, you don't need to match their discount. You need to hold your price and prepare for the demand surge." },
//               ].map(m => (
//                 <div className="mistake" key={m.n}>
//                   <div className="mistake-num">{m.n}</div>
//                   <div className="mistake-body"><strong>{m.t}</strong><p>{m.d}</p></div>
//                 </div>
//               ))}
//             </div>
//             <div className="box box-pink">
//               <div className="box-label">💬 Key Insight</div>
//               <p>The biggest pricing mistake isn't being too expensive — it's being reactive without context. A price change is a signal, not a command. <strong>Understanding why a competitor changed their price is as important as knowing that they did.</strong></p>
//             </div>

//             {/* S6 */}
//             <h2 id="workflow">Best Practices: A Practical Pricing Intelligence Workflow</h2>
//             <p>The most successful Indian sellers don't react to pricing changes — they run a structured workflow that keeps them consistently competitive without manual effort. Here's the framework that works:</p>

//             {/* Graphic 4 */}
// <figure style={{ margin: "24px 0", overflow: "hidden", borderRadius: "12px" }}>
  
//   <img
//     src="/Best_Price_Tracer-Blog2_image4.png"
//     alt="How Insydz price tracking works 5 step pipeline"
//     style={{
//       width: "100%",
//       display: "block",
//       borderRadius: "12px"
//     }}
//   />

//   <figcaption
//     style={{
//       background: "#f1f5f9",
//       padding: "14px 18px",
//       fontSize: "13.5px",
//       lineHeight: "1.6",
//       color: "#64748b",
//       borderTop: "1px solid #e2e8f0"
//     }}
//   >
//     A structured pricing intelligence workflow replaces 3+ hours of daily manual work with a 40-minute weekly discipline — powered by automation.
//   </figcaption>

// </figure>

//             <h3>Key Metrics to Track</h3>
//             <div className="metrics">
//               {[
//                 { svg:<svg viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, t:"Buy Box Win Rate per SKU",           d:"Target: >65% for primary products. The single most important pricing health metric." },
//                 { svg:<svg viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, t:"Average Time-to-Response",           d:"Target: <2 hours when a competitor changes price in a high-velocity category." },
//                 { svg:<svg viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>, t:"Revenue Captured During OOS Events",  d:"Measure separately — competitor stock-out is often a 3–5× revenue opportunity." },
//                 { svg:<svg viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>, t:"Gross Margin Trend",                  d:"Are you maintaining margin or eroding it with reactive pricing? Track monthly." },
//               ].map(m => (
//                 <div className="metric" key={m.t}>
//                   <div className="metric-icon">{m.svg}</div>
//                   <div><div className="metric-t">{m.t}</div><div className="metric-d">{m.d}</div></div>
//                 </div>
//               ))}
//             </div>

//             {/* S7 */}
//             <h2 id="best-tools">Best Competitor Price Tracking Tools for India in 2026</h2>
//             <h3>Global Tools: Honest Assessment for Indian Sellers</h3>
//             <p>Several well-established tools serve Amazon sellers globally — Keepa, Helium 10's competitor tools, and Jungle Scout's market tracker among them. For Indian sellers, here's an honest, direct assessment:</p>
//             <div className="tbl-wrap">
//               <table className="dt">
//                 <thead><tr><th>Tool</th><th>Strengths</th><th>India Limitations</th><th>Price (INR/mo)</th></tr></thead>
//                 <tbody>
//                   <tr><td><strong>Keepa</strong></td><td>Deep Amazon price history, free tier</td><td>Amazon.com only, no recommendations</td><td>Free – ₹1,700</td></tr>
//                   <tr><td><strong>Helium 10</strong></td><td>Comprehensive Amazon suite</td><td>Amazon.com-focused, no India platform coverage</td><td>₹3,300 – ₹8,300</td></tr>
//                   <tr><td><strong>Jungle Scout</strong></td><td>Strong product research + tracking</td><td>No Flipkart/Meesho, India data limited</td><td>₹3,800 – ₹8,000</td></tr>
//                   <tr><td><strong>Price2Spy</strong></td><td>Multi-website tracking</td><td>Not marketplace-native, no AI recommendations</td><td>₹2,500 – ₹7,000</td></tr>
//                   <tr className="hl"><td><strong>Insydz</strong></td><td>Amazon.in + Flipkart + Meesho, WhatsApp AI</td><td>India-first — purpose-built, no limitations</td><td><strong>Free – ₹2,999</strong></td></tr>
//                 </tbody>
//               </table>
//             </div>

//             <h3>Insydz: Built Ground-Up for Indian Marketplace Sellers</h3>
//             <p>Insydz isn't a US tool adapted for India — it's the other way around. Built specifically for how Indian sellers operate across Amazon.in, Flipkart, and Meesho, the platform combines competitor price tracking with review intelligence, SEO rank tracking, and stock monitoring in one connected system.</p>

//             {/* Graphic 5 */}
//             <div className="blog-graphic gh-short" id="b2img5" style={{ background:"linear-gradient(135deg,#1E1B4B 0%,#3730A3 45%,#DB2777 100%)" }}>
//               <div style={{ position:"absolute", inset:0, backgroundImage:"repeating-linear-gradient(135deg,rgba(255,255,255,.02) 0px,rgba(255,255,255,.02) 1px,transparent 1px,transparent 22px)", pointerEvents:"none" }} />
//               {/* Left text */}
//               <div style={{ position:"absolute", left:"clamp(20px,5vw,52px)", top:"50%", transform:"translateY(-50%)", maxWidth:"clamp(160px,25vw,240px)", zIndex:2 }}>
//                 <div style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(28px,5vw,46px)", fontWeight:900, color:"white", lineHeight:.95, letterSpacing:"clamp(-1px,-0.2vw,-2px)", marginBottom:14 }}>
//                   All<br /><span style={{ color:"#FDE68A" }}>Features.</span><br />One Tool.
//                 </div>
//                 <p style={{ fontSize:"clamp(11px,1.3vw,12.5px)", color:"rgba(255,255,255,.65)", lineHeight:1.6, marginBottom:14, fontFamily:"'Sora',sans-serif" }}>
//                   Price tracking, review intelligence, rank tracking and AI recommendations — built for India.
//                 </p>
//                 <div style={{ display:"inline-flex", alignItems:"center", gap:7, background:"rgba(74,222,128,.15)", border:"1px solid rgba(74,222,128,.3)", borderRadius:8, padding:"8px 12px" }}>
//                   <span style={{ fontSize:12, fontWeight:700, color:"#4ADE80", fontFamily:"'Sora',sans-serif" }}>✓ Free Forever Plan</span>
//                 </div>
//               </div>
//               {/* Feature grid — hidden on mobile */}
//               <div className="feat-grid-wrap" style={{ position:"absolute", right:"clamp(16px,3vw,36px)", top:"50%", transform:"translateY(-50%)", display:"grid", gridTemplateColumns:"1fr 1fr", gap:9, width:"clamp(260px,35vw,400px)", zIndex:5 }}>
//                 {[
//                   { icon:"💰", bg:"rgba(219,39,119,.2)",  t:"Competitor Price Tracking", d:"Real-time price alerts across Amazon.in, Flipkart, Meesho. WhatsApp delivery.", hi:true },
//                   { icon:"📱", bg:"rgba(55,48,163,.3)",   t:"WhatsApp AI Alerts",         d:"Instant alerts with AI recommendations — not just raw data. Act in <60 min." },
//                   { icon:"⭐", bg:"rgba(22,163,74,.2)",   t:"Review Analytics",           d:"Track competitor review velocity, star distribution, sentiment by feature." },
//                   { icon:"📈", bg:"rgba(217,119,6,.2)",   t:"Rank & SEO Tracking",        d:"Monitor your keyword rankings daily. Catch drops before they hurt revenue." },
//                 ].map(f => (
//                   <div key={f.t} style={{ background:f.hi?"rgba(255,255,255,.14)":"rgba(255,255,255,.08)", backdropFilter:"blur(12px)", border:f.hi?"1px solid rgba(253,230,138,.25)":"1px solid rgba(255,255,255,.12)", borderRadius:12, padding:"12px 13px", display:"flex", gap:9, alignItems:"flex-start" }}>
//                     <div style={{ width:28, height:28, borderRadius:8, background:f.bg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, flexShrink:0 }}>{f.icon}</div>
//                     <div style={{ minWidth:0 }}>
//                       <span style={{ display:"block", fontFamily:"'Sora',sans-serif", fontSize:"clamp(10px,1.2vw,11.5px)", fontWeight:700, color:"white", marginBottom:3 }}>{f.t}</span>
//                       <span style={{ fontSize:"clamp(9px,1vw,10px)", color:"rgba(255,255,255,.5)", fontWeight:500, lineHeight:1.4, fontFamily:"'Sora',sans-serif" }}>{f.d}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <p className="art-img-cap">Insydz combines price tracking, stock monitoring, review intelligence and AI recommendations in one India-first platform</p>

//             <div className="box box-green">
//               <div className="box-label">📌 A Note on Tool Selection</div>
//               <p>Don't choose a tool based on the longest feature list. <strong>Choose based on how quickly you'll act on what it tells you.</strong> A tool that sends you a WhatsApp message at 8 AM is more valuable than a tool that generates a beautiful dashboard you open once a week.</p>
//             </div>

//             {/* S8 FAQ */}
//             <h2 id="faq">Frequently Asked Questions</h2>
//             <div style={{ marginTop:16 }}>
//               {FAQS.map((faq, i) => (
//                 <div key={i} className={`faq-item${openFaq===i?" open":""}`}>
//                   <div className="faq-q" onClick={() => setOpenFaq(openFaq===i?null:i)} role="button" tabIndex={0} onKeyDown={e => e.key==="Enter" && setOpenFaq(openFaq===i?null:i)}>
//                     <span>{faq.q}</span>
//                     <span className={`faq-icon${openFaq===i?" open":""}`} aria-hidden="true">+</span>
//                   </div>
//                   {openFaq===i && <div className="faq-a"><p>{faq.a}</p></div>}
//                 </div>
//               ))}
//             </div>

//             {/* Related */}
//             <div style={{ marginTop:48, paddingTop:32, borderTop:"2px solid #E2E8F0" }}>
//               <h2 style={{ fontSize:"clamp(17px,2.2vw,20px)", fontWeight:800, color:"#0D1B2A", margin:"0 0 20px", border:"none", padding:0, fontFamily:"'Sora',sans-serif" }} className="dark:text-white">Related Guides</h2>
//               <div className="related-grid">
//                 {[
//                   { t:"Amazon Competitor Price Tracking Tool India: Complete Guide (2026)", tag:"Price Tracking",  bg:"linear-gradient(135deg,#F97316,#EA580C)", em:"📊", r:"/features/competitor-price-tracking-feature" },
//                   { t:"Flipkart Price Tracker: Monitor & Beat Competitor Prices in 2026",   tag:"Flipkart Sellers",bg:"linear-gradient(135deg,#0D9488,#0891B2)", em:"🛍️", r:"/solutions/flipkart-sellers" },
//                   { t:"How to Win the Amazon Buy Box Consistently as an Indian Seller",     tag:"Buy Box Strategy",bg:"linear-gradient(135deg,#4F46E5,#7C3AED)", em:"🏆", r:"/use-cases/track-competitor-prices" },
//                 ].map(rc => (
//                   <div key={rc.t} className="rel-card" onClick={() => setLocation(rc.r)}>
//                     <div className="rel-thumb" style={{ background:rc.bg }}><span>{rc.em}</span></div>
//                     <div className="rel-body">
//                       <div className="rel-tag">{rc.tag}</div>
//                       <div className="rel-title">{rc.t}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </article>
//         </main>
//       </div>

//       {/* ════════════════════════════════ FINAL CTA */}
//       <div className="fc-block">
//         <div className="fc-inner">
//           <h2>Your Competitors Are Already Tracking Your Prices.</h2>
//           <p>The question isn't whether you should track competitor prices. It's whether you'll be the one acting on the information — or the one reacting to it. Insydz monitors your rivals on Amazon.in, Flipkart, and Meesho around the clock.</p>
//           <div className="fc-points">
//             <div className="fc-pt">No dashboards to learn</div>
//             <div className="fc-pt">No credit card needed</div>
//             <div className="fc-pt">WhatsApp alerts from day one</div>
//             <div className="fc-pt">Setup in under 30 minutes</div>
//           </div>
//           <button className="fc-btn" onClick={() => setLocation("/login")}>Start Tracking Free at insydz.com →</button>
//           <p className="fc-sub">Forever free plan · No credit card · Cancel anytime</p>
//         </div>
//       </div>

//       {/* ════════════════════════════════ FOOTER */}
//       <footer style={{ background:"#0D1B2A", padding:"clamp(36px,6vw,56px) clamp(12px,3vw,24px) clamp(20px,3vw,28px)" }}>
//         <div style={{ maxWidth:1240, margin:"0 auto" }}>
//           <div className="footer-grid">
//             <div>
//               <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
//                 <img src="/logo.png" alt="Insydz Logo" style={{ width:32, height:32, borderRadius:8, objectFit:"contain" }} />
//                 <span style={{ fontFamily:"'Sora',sans-serif", fontWeight:800, fontSize:18, color:"white", letterSpacing:"-.4px" }}>insydz</span>
//               </div>
//               <p style={{ fontSize:13, color:"#475569", lineHeight:1.7, maxWidth:260, fontFamily:"'Sora',sans-serif" }}>India's first AI-powered ecommerce analytics platform for Amazon, Flipkart, and Meesho sellers.</p>
//               <div style={{ display:"flex", gap:10, marginTop:14 }}>
//                 {[
//                   { title:"Facebook",  href:"https://www.facebook.com/profile.php?id=61586202582209", icon:<Facebook className="w-4 h-4" /> },
//                   { title:"Twitter",   href:"https://x.com/growwithinsydz",                             icon:<Twitter className="w-4 h-4" /> },
//                   { title:"Instagram", href:"https://www.instagram.com/growwithinsydz/",                icon:<Instagram className="w-4 h-4" /> },
//                   { title:"LinkedIn",  href:"https://www.linkedin.com/company/insydz/?viewAsMember=true",icon:<Linkedin className="w-4 h-4" /> },
//                 ].map(s => (
//                   <a key={s.title} title={s.title} href={s.href} target="_blank" rel="noopener noreferrer" style={{ width:34, height:34, borderRadius:"50%", background:"rgba(255,255,255,.1)", display:"flex", alignItems:"center", justifyContent:"center", color:"white" }}>{s.icon}</a>
//                 ))}
//               </div>
//             </div>
//             {[
//               { h:"Solutions",      l:[["Amazon Sellers","/solutions/amazon-sellers"],["Flipkart Sellers","/solutions/flipkart-sellers"],["Meesho Sellers","/solutions/amazon-sellers"],["Ecommerce Agencies","/solutions/ecommerce-agencies"]] },
//               { h:"Features",       l:[["Competitor Price Tracking","/features/competitor-price-tracking-feature"],["WhatsApp Alerts","/features/whatsapp-alerts-feature"],["Review Analytics","/features/review-analytics-feature"],["Stock Monitoring","/features/product-research-feature"],["AI Recommendations","/features/ai-recommendations-feature"]] },
//               { h:"Compare & More", l:[["Insydz vs Helium 10","/compare/insydzvshelium"],["Insydz vs Jungle Scout","/compare/insydzvsjunglescout"],["Pricing Plans","/pricing"],["Blog","/resources/expert-blog"]] },
//             ].map(col => (
//               <div key={col.h}>
//                 <h5 style={{ color:"white", fontSize:12, fontWeight:700, textTransform:"uppercase", letterSpacing:.8, marginBottom:14, fontFamily:"'Sora',sans-serif" }}>{col.h}</h5>
//                 <ul style={{ listStyle:"none", padding:0 }}>
//                   {col.l.map(([label, route]) => (
//                     <li key={label} style={{ marginBottom:9 }}>
//                       <button onClick={() => setLocation(route)} style={{ color:"#475569", fontSize:13, background:"none", border:"none", cursor:"pointer", fontFamily:"'Sora',sans-serif", fontWeight:500, minHeight:32, display:"inline-flex", alignItems:"center" }}>{label}</button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//           <div className="footer-bottom">
//             <span>© 2026 Insydz Technologies. All rights reserved.</span>
//             <span>Privacy Policy · Terms of Service · Sitemap</span>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// // Helper constants to avoid TS "expression too complex" issues
// const clamp13 = "clamp(12px,1.4vw,13px)" as const;
// const clamp15 = "clamp(13px,1.6vw,15px)" as const;


import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import {
  Search, Clock, TrendingUp, Target, DollarSign, BarChart3,
  MessageCircle, Package, Trophy, Zap, BookOpen, Video, FileText,
  Menu, X, Sun, Moon, ChevronDown, ShoppingBag, Store, Briefcase,
  Users, Bell, Code, Globe, ArrowLeft, Facebook, Twitter, Linkedin,
  Instagram, Flame, Presentation,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type MenuItemWithBadge = { name: string; icon: JSX.Element; badge?: string; route?: string; };
type NavigationMenu = {
  Solutions: MenuItemWithBadge[]; "Use Cases": MenuItemWithBadge[]; Features: MenuItemWithBadge[];
  "Free Tools": MenuItemWithBadge[]; Resources: MenuItemWithBadge[]; Integrations: MenuItemWithBadge[];
  Compare: MenuItemWithBadge[]; About: MenuItemWithBadge[];
};

const navigationMenu: NavigationMenu = {
  Solutions: [
    { name:"All Solutions (Overview)",      icon:<ShoppingBag className="w-4 h-4"/>, route:"/solutions" },
    { name:"For Amazon Sellers (India)",    icon:<ShoppingBag className="w-4 h-4"/>, route:"/solutions/amazon-sellers" },
    { name:"For Flipkart Sellers",          icon:<Store     className="w-4 h-4"/>, route:"/solutions/flipkart-sellers" },
    { name:"For E-commerce Agencies",       icon:<Briefcase className="w-4 h-4"/>, route:"/solutions/ecommerce-agencies" },
    { name:"For Brand Managers",            icon:<Users     className="w-4 h-4"/>, route:"/solutions/brand-managers" },
  ],
  "Use Cases": [
    { name:"All Use Cases",                 icon:<TrendingUp    className="w-4 h-4"/>, route:"/use-cases" },
    { name:"Track Competitor Prices",       icon:<TrendingUp    className="w-4 h-4"/>, route:"/use-cases/track-competitor-prices" },
    { name:"Find Profitable Products",      icon:<Target        className="w-4 h-4"/>, route:"/use-cases/find-profitable-products" },
    { name:"Analyze Customer Reviews",      icon:<MessageCircle className="w-4 h-4"/>, route:"/use-cases/analyze-customer-reviews" },
    { name:"Improve Amazon & Flipkart SEO", icon:<Search        className="w-4 h-4"/>, route:"/use-cases/improve-seo" },
    { name:"Avoid Stockouts & Missed Sales",icon:<Package       className="w-4 h-4"/>, route:"/use-cases/avoid-stockouts" },
  ],
  Features: [
    { name:"Competitor Price Tracking",     icon:<DollarSign    className="w-4 h-4"/>, route:"/features/competitor-price-tracking-feature" },
    { name:"Review Analytics",              icon:<MessageCircle className="w-4 h-4"/>, route:"/features/review-analytics-feature" },
    { name:"Price Optimization",            icon:<TrendingUp    className="w-4 h-4"/>, route:"/features/price-optimization-feature" },
    { name:"Keyword & Rank Tracking",       icon:<Search        className="w-4 h-4"/>, route:"/features/keyword-rank-tracking-feature" },
    { name:"Product Research",              icon:<Package       className="w-4 h-4"/>, route:"/features/product-research-feature" },
    { name:"AI Recommendations",            icon:<Zap           className="w-4 h-4"/>, route:"/features/ai-recommendations-feature" },
    { name:"WhatsApp Alerts",               icon:<Bell          className="w-4 h-4"/>, badge:"NEW",      route:"/features/whatsapp-alerts-feature" },
    { name:"Festive Trend Intelligence",    icon:<Flame         className="w-4 h-4"/>, badge:"UPCOMING", route:"/features/festive-trend-feature" },
  ],
  "Free Tools": [
    { name:"Free Amazon Product Analyzer",  icon:<BarChart3     className="w-4 h-4"/>, route:"/free-tools/free-amazon-product-analyzer" },
    { name:"Free Review Sentiment Checker", icon:<MessageCircle className="w-4 h-4"/>, route:"/free-tools/free-review-sentiment-checker" },
    { name:"Free Competitor Price Checker", icon:<DollarSign    className="w-4 h-4"/>, route:"/free-tools/free-competitor-price-checker" },
    { name:"Free Keyword Rank Checker",     icon:<Search        className="w-4 h-4"/>, badge:"NEW", route:"/free-tools/free-keyword-rank-checker" },
  ],
  Resources: [
    { name:"Expert Blog",         icon:<BookOpen  className="w-4 h-4"/>, route:"/resources/expert-blog" },
    { name:"Success Stories",     icon:<FileText  className="w-4 h-4"/>, route:"/resources/case-studies" },
    { name:"Video Masterclasses", icon:<Video     className="w-4 h-4"/>, route:"/resources/videos" },
    { name:"Strategic Playbooks", icon:<BookOpen  className="w-4 h-4"/>, route:"/resources/guides" },
  ],
  Integrations: [
    { name:"Amazon",            icon:<ShoppingBag className="w-4 h-4"/> },
    { name:"Flipkart",          icon:<Store       className="w-4 h-4"/> },
    { name:"Shopify",           icon:<Globe       className="w-4 h-4"/> },
    { name:"API Documentation", icon:<Code        className="w-4 h-4"/> },
  ],
  Compare: [
    { name:"Insydz vs Helium 10",    icon:<Trophy className="w-4 h-4"/>, route:"/compare/insydzvshelium" },
    { name:"Insydz vs Jungle Scout", icon:<Trophy className="w-4 h-4"/>, route:"/compare/insydzvsjunglescout" },
    { name:"Insydz vs Viral Launch", icon:<Trophy className="w-4 h-4"/>, route:"/compare/insydzvsvirallaunch" },
  ],
  About: [
    { name:"About Us",   icon:<Presentation className="w-4 h-4"/>, route:"/about/about-us" },
    { name:"Our Vision", icon:<Globe        className="w-4 h-4"/>, route:"/about/our-vision" },
    { name:"Careers",    icon:<Users        className="w-4 h-4"/>, route:"/about/careers" },
  ],
};

const TOC = [
  { id:"intro",        label:"What Actually Matters" },
  { id:"why-matters",  label:"Why the Right Tool Matters" },
  { id:"how-it-works", label:"How Tracking Tools Work" },
  { id:"types",        label:"Types of Tracking Tools" },
  { id:"mistakes",     label:"5 Common Mistakes" },
  { id:"workflow",     label:"Best Practices & Workflow" },
  { id:"best-tools",   label:"Best Tools for India 2026" },
  { id:"faq",          label:"Frequently Asked Questions" },
];

const FAQS = [
  { q:"What is the best competitor price tracking tool for Amazon.in sellers in India?",
    a:"For Indian sellers on Amazon.in, the best tool covers Amazon.in specifically (not Amazon.com), sends WhatsApp alerts, and provides AI-powered recommendations rather than raw data alone. Insydz is built specifically for this — it covers Amazon.in, Flipkart, and Meesho simultaneously at ₹499–2,999/month, making it the most complete India-first option currently available." },
  { q:"Can I track competitor prices on Flipkart and Meesho — not just Amazon?",
    a:"Most global tools only cover Amazon. For multi-platform Indian sellers, this is a significant gap — especially since Flipkart is the primary platform for 60% of tier-2 and tier-3 city sellers. India-first platforms like Insydz cover all three major Indian marketplaces in one system, so you're not managing separate tools for each platform." },
  { q:"How often should competitor prices be tracked?",
    a:"For high-competition categories (electronics, mobile accessories, FMCG, home appliances), price checks every 30–60 minutes are ideal. For slower-moving categories (furniture, specialty products, B2B items), hourly to every 4-hour checks are sufficient. The key is ensuring your alert threshold is set appropriately — a 5%+ drop should reach you within an hour." },
  { q:"Will automated price tracking lead to price wars that destroy my margins?",
    a:"Only if you respond to every alert with a matching price cut — which is the wrong approach. Smart use of price tracking means understanding why a competitor changed their price and calculating the minimum response needed to protect your Buy Box position and margin. AI-powered tools do this calculation for you. The goal is informed response, not reflexive reaction." },
  { q:"Is there a free competitor price tracking tool for Indian sellers?",
    a:"Basic free options exist — Keepa offers limited free Amazon price history, and some Chrome extensions provide basic alerts. However, these don't cover Flipkart or Meesho, don't provide AI recommendations, and typically have significant delays. Insydz offers a forever-free plan that gives Indian sellers entry-level price tracking across Amazon.in and Flipkart — enough to experience the value before upgrading." },
  { q:"How do I set up competitor price tracking without technical knowledge?",
    a:"Modern India-first platforms are designed for sellers who aren't technical. The setup process typically takes under 30 minutes: connect your Amazon or Flipkart seller account, add your competitor product URLs or ASINs, set your alert preferences and thresholds, and enter your WhatsApp number for notifications. No coding, no integrations, no IT support required." },
];

export default function BestCompetitorPriceTrackingToolsIndia() {
  const [, setLocation] = useLocation();
  const [activeSection, setActiveSection] = useState("intro");
  const [scrollPct, setScrollPct]   = useState(0);
  const [tocOpen, setTocOpen]       = useState(false);
  const [openFaq, setOpenFaq]       = useState<number | null>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeDropdown, setActiveDropdown]     = useState<string | null>(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => { document.documentElement.classList.toggle("dark", isDarkMode); }, [isDarkMode]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(Math.min((window.scrollY / total) * 100, 100));
      for (let i = TOC.length - 1; i >= 0; i--) {
        const el = document.getElementById(TOC[i].id);
        if (el && window.scrollY >= el.offsetTop - 130) { setActiveSection(TOC[i].id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive:true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setActiveDropdown(null);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setIsMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" });
    setTocOpen(false);
  };
  const handleMenuItemClick = (item: MenuItemWithBadge) => {
    if (item.route) { setLocation(item.route); setActiveDropdown(null); setIsMenuOpen(false); }
  };
  const toggleMobileMenu = (name: string) => setMobileActiveMenu(p => p === name ? null : name);

  const DesktopDropdown = ({ label, menuKey, accent = "purple" }: { label:string; menuKey:keyof NavigationMenu; accent?:"purple"|"orange" }) => {
    const items = navigationMenu[menuKey];
    const isActive = activeDropdown === label;
    const ac = accent === "orange";
    return (
      <div className="relative">
        <button
          onMouseEnter={() => setActiveDropdown(label)}
          className={`px-2 xl:px-3 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1 ${isActive?(ac?"text-orange-600 font-semibold":"text-purple-600 font-semibold"):(ac?"text-orange-600 dark:text-orange-500 hover:bg-orange-50":"text-gray-700 dark:text-gray-300 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20")}`}
        >
          {label}<ChevronDown className={`w-3.5 h-3.5 transition-transform ${isActive?"rotate-180":""}`} />
        </button>
        {isActive && (
          <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-64 xl:w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 z-50">
            {items.map((item, i) => (
              <button key={i} onClick={() => handleMenuItemClick(item)} className={`w-full px-4 py-2.5 text-left flex items-center gap-3 group ${ac?"hover:bg-orange-50":"hover:bg-purple-50 dark:hover:bg-purple-900/20"}`}>
                <span className={`flex-shrink-0 ${ac?"text-orange-600":"text-purple-600 dark:text-purple-400"}`}>{item.icon}</span>
                <span className="text-sm text-gray-700 dark:text-gray-300 flex-1 text-left">{item.name}</span>
                {item.badge && <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded-full font-semibold flex-shrink-0">{item.badge}</span>}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800;900&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
        *,*::before,*::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        /* ── CSS tokens ───────────────────────────────────────── */
        :root { --nav-h: 72px; }
        @media(min-width:1024px) { :root { --nav-h: 80px; } }

        /* ── Reading progress ─────────────────────────────────── */
        .read-progress {
          position: fixed; top: 0; left: 0; height: 3px;
          background: linear-gradient(90deg,#db2777,#7c3aed);
          z-index: 9999; transition: width .1s linear;
          border-radius: 0 2px 2px 0;
        }

        /* ── Article layout ──────────────────────────────────── */
        .article-layout {
          max-width: 1240px; margin: 0 auto;
          padding: 36px 16px 80px;
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 48px; align-items: start;
        }
        @media(min-width:1280px) { .article-layout { padding: 48px 24px 80px; } }
        @media(max-width:1200px) { .article-layout { grid-template-columns: 240px 1fr; gap: 32px; } }
        @media(max-width:1023px) { .article-layout { grid-template-columns: 1fr; gap: 0; padding: 24px 16px 60px; } }
        @media(max-width:480px)  { .article-layout { padding: 16px 12px 48px; } }

        /* ── Sidebar TOC ─────────────────────────────────────── */
        .toc-sidebar {
          position: sticky; top: calc(var(--nav-h) + 16px);
          background: #fff; border: 1px solid #e5e7eb;
          border-radius: 12px; padding: 20px;
          box-shadow: 0 1px 3px rgba(0,0,0,.07),0 4px 12px rgba(0,0,0,.05);
          max-height: calc(100vh - var(--nav-h) - 32px);
          overflow-y: auto;
        }
        .dark .toc-sidebar { background: #111827; border-color: #1f2937; }
        @media(max-width:1023px) { .toc-sidebar { display: none !important; } }
        .toc-sidebar::-webkit-scrollbar { width: 4px; }
        .toc-sidebar::-webkit-scrollbar-track { background: transparent; }
        .toc-sidebar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 4px; }
        .dark .toc-sidebar::-webkit-scrollbar-thumb { background: #374151; }

        /* ── Mobile TOC ──────────────────────────────────────── */
        .mobile-toc-btn {
          display: none; width: 100%;
          background: #fff; border: 1px solid #e5e7eb;
          border-radius: 12px; padding: 13px 16px;
          font-family: 'Sora',sans-serif; font-size: 14px;
          font-weight: 600; color: #111; cursor: pointer;
          align-items: center; justify-content: space-between;
          margin-bottom: 16px; touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }
        .dark .mobile-toc-btn { background: #111827; border-color: #1f2937; color: #f9fafb; }
        @media(max-width:1023px) { .mobile-toc-btn { display: flex; } }
        .mobile-toc-panel {
          display: none; background: #fff;
          border: 1px solid #e5e7eb; border-radius: 12px;
          padding: 12px; margin-bottom: 24px;
        }
        .dark .mobile-toc-panel { background: #111827; border-color: #1f2937; }
        .mobile-toc-panel.open { display: block; }

        /* ── Article body ────────────────────────────────────── */
        .article-body {
          font-family: 'Lora',serif;
          font-size: clamp(15px,1.8vw,16px);
          line-height: 1.78; color: #1E293B;
        }
        .dark .article-body { color: #d1d5db; }
        .article-body h2 {
          font-family: 'Sora',sans-serif;
          font-size: clamp(18px,2.4vw,22px);
          font-weight: 800; color: #0D1B2A;
          margin: 48px 0 14px; padding-bottom: 12px;
          border-bottom: 2px solid #e5e7eb;
          letter-spacing: -.3px; line-height: 1.3;
          scroll-margin-top: calc(var(--nav-h) + 16px);
        }
        .dark .article-body h2 { color: #f9fafb; border-color: #1f2937; }
        .article-body h2:first-child { margin-top: 0; }
        .article-body h3 {
          font-family: 'Sora',sans-serif;
          font-size: clamp(15px,1.8vw,17px);
          font-weight: 700; color: #0D1B2A;
          margin: 28px 0 10px; letter-spacing: -.2px;
          scroll-margin-top: calc(var(--nav-h) + 16px);
        }
        .dark .article-body h3 { color: #f3f4f6; }
        .article-body p { margin-bottom: 16px; font-size: clamp(14.5px,1.7vw,15.5px); line-height: 1.78; }
        .article-body ul,ol { margin: 4px 0 18px 20px; }
        .article-body li { font-size: clamp(14px,1.6vw,15px); line-height: 1.72; margin-bottom: 8px; }
        .article-body li::marker { color: #F97316; }
        .article-body strong { font-weight: 700; color: #0D1B2A; }
        .dark .article-body strong { color: #f9fafb; }

        /* ── Image caption ───────────────────────────────────── */
        .art-img-cap {
          font-size: 12px; color: #94A3B8; font-style: italic;
          text-align: center; margin-bottom: 28px; padding: 8px 12px;
        }

        /* ── Callout boxes ───────────────────────────────────── */
        .box { border-radius: 10px; padding: clamp(16px,2.5vw,20px) clamp(16px,2.5vw,22px); margin: 20px 0; }
        .box-label {
          font-size: 11px; font-weight: 700; letter-spacing: .7px;
          text-transform: uppercase; margin-bottom: 8px;
          display: flex; align-items: center; gap: 6px;
        }
        .box p { margin: 0; font-size: clamp(13.5px,1.5vw,14.5px); line-height: 1.72; }
        .box-teal  { background: #F0FDFA; border-left: 4px solid #0D9488; }
        .box-teal .box-label  { color: #0D9488; }
        .box-amber { background: #FFFBEB; border-left: 4px solid #D97706; }
        .box-amber .box-label { color: #D97706; }
        .box-green { background: #F0FDF4; border-left: 4px solid #16A34A; }
        .box-green .box-label { color: #16A34A; }
        .box-pink  { background: #FDF2F8; border-left: 4px solid #DB2777; }
        .box-pink .box-label  { color: #DB2777; }
        .box-indigo { background: #EEF2FF; border: 1px solid #C7D2FE; border-radius: 10px; }
        .box-indigo .box-label { color: #4F46E5; }
        .dark .box-teal   { background: #042f2e; border-color: #134e4a; }
        .dark .box-amber  { background: #1c1507; border-color: #78350f; }
        .dark .box-green  { background: #052e16; border-color: #166534; }
        .dark .box-pink   { background: #500724; border-color: #9d174d; }
        .dark .box-indigo { background: #1e1b4b; border-color: #3730a3; }

        /* ── Steps ───────────────────────────────────────────── */
        .steps { display: flex; flex-direction: column; gap: 10px; margin: 16px 0 24px; }
        .step {
          display: flex; gap: 14px; background: #F8FAFC;
          border: 1px solid #E2E8F0; border-radius: 10px;
          padding: clamp(14px,2vw,18px) clamp(14px,2vw,20px);
          transition: box-shadow .2s;
        }
        .step:hover { box-shadow: 0 4px 16px rgba(0,0,0,.09); }
        .dark .step { background: #111827; border-color: #1f2937; }
        .step-n {
          flex-shrink: 0; width: 32px; height: 32px;
          background: #F97316; color: white; border-radius: 50%;
          font-weight: 800; font-size: 14px; display: flex;
          align-items: center; justify-content: center;
          font-family: 'Sora',sans-serif;
        }
        .step-body strong {
          display: block; font-size: clamp(13px,1.5vw,14.5px);
          color: #0D1B2A; margin-bottom: 3px; font-family: 'Sora',sans-serif;
        }
        .dark .step-body strong { color: #f9fafb; }
        .step-body p {
          margin: 0; font-size: clamp(12.5px,1.4vw,13.5px);
          color: #64748B; line-height: 1.6; font-family: 'Sora',sans-serif;
        }

        /* ── Data tables ─────────────────────────────────────── */
        .tbl-wrap {
          overflow-x: auto; border-radius: 10px;
          box-shadow: 0 4px 16px rgba(0,0,0,.09);
          margin: 20px 0 28px;
          -webkit-overflow-scrolling: touch;
        }
        table.dt {
          width: 100%; border-collapse: collapse;
          font-size: clamp(11px,1.3vw,13.5px);
          font-family: 'Sora',sans-serif; min-width: 460px;
        }
        table.dt thead tr { background: #0D1B2A; }
        table.dt th {
          padding: clamp(10px,1.5vw,13px) clamp(12px,1.5vw,16px);
          color: white; font-weight: 700; text-align: left;
          font-size: clamp(10px,1.2vw,12.5px); letter-spacing: .2px;
          white-space: nowrap;
        }
        table.dt tbody tr { border-bottom: 1px solid #E2E8F0; transition: background .15s; }
        table.dt tbody tr:nth-child(even) td { background: #F8FAFC; }
        table.dt tbody tr:hover td { background: #FFF7ED; }
        table.dt td {
          padding: clamp(10px,1.5vw,13px) clamp(12px,1.5vw,16px);
          vertical-align: middle; color: #1E293B;
        }
        .dark table.dt td { color: #d1d5db; }
        .dark table.dt tbody tr:nth-child(even) td { background: #0f172a; }
        table.dt tr.hl td { background: #FFF7ED !important; border-left: 3px solid #F97316; }
        table.dt tr.hl td:first-child { font-weight: 700; color: #F97316; }
        .bg { background:#DCFCE7;color:#15803D;font-weight:700;padding:3px 8px;border-radius:20px;font-size:11px;white-space:nowrap; }
        .br { background:#FEE2E2;color:#B91C1C;font-weight:700;padding:3px 8px;border-radius:20px;font-size:11px;white-space:nowrap; }
        .ba { background:#FEF3C7;color:#92400E;font-weight:700;padding:3px 8px;border-radius:20px;font-size:11px;white-space:nowrap; }
        .bb { background:#DBEAFE;color:#1E40AF;font-weight:700;padding:3px 8px;border-radius:20px;font-size:11px;white-space:nowrap; }

        /* ── Mistakes ────────────────────────────────────────── */
        .mistake-list { display: flex; flex-direction: column; gap: 10px; margin: 16px 0 24px; }
        .mistake { border: 1px solid #E2E8F0; border-radius: 10px; display: flex; overflow: hidden; }
        .dark .mistake { border-color: #1f2937; }
        .mistake-num {
          flex-shrink: 0; width: 44px; background: #0D1B2A;
          color: white; font-weight: 800; font-size: clamp(15px,2vw,17px);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Sora',sans-serif;
        }
        .mistake-body { padding: clamp(12px,2vw,16px) clamp(14px,2vw,18px); }
        .mistake-body strong {
          display: block; font-size: clamp(13px,1.5vw,14.5px);
          color: #0D1B2A; margin-bottom: 5px; font-family: 'Sora',sans-serif;
        }
        .dark .mistake-body strong { color: #f9fafb; }
        .mistake-body p {
          margin: 0; font-size: clamp(12px,1.3vw,13.5px);
          color: #64748B; line-height: 1.65; font-family: 'Sora',sans-serif;
        }
        .dark .mistake-body p { color: #9ca3af; }

        /* ── Metrics grid ────────────────────────────────────── */
        .metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 16px 0 24px; }
        @media(max-width:580px) { .metrics { grid-template-columns: 1fr; } }
        .metric {
          background: #F8FAFC; border: 1px solid #E2E8F0;
          border-radius: 10px; padding: clamp(14px,2vw,18px);
          display: flex; gap: 12px; align-items: flex-start;
        }
        .dark .metric { background: #111827; border-color: #1f2937; }
        .metric-icon {
          flex-shrink: 0; width: 36px; height: 36px;
          border-radius: 9px; background: #FFEDD5;
          display: flex; align-items: center; justify-content: center;
        }
        .metric-t { font-size: clamp(12.5px,1.4vw,13.5px); font-weight: 700; color: #0D1B2A; margin-bottom: 3px; font-family: 'Sora',sans-serif; }
        .dark .metric-t { color: #f9fafb; }
        .metric-d { font-size: clamp(11.5px,1.2vw,12.5px); color: #64748B; line-height: 1.5; font-family: 'Sora',sans-serif; }
        .dark .metric-d { color: #9ca3af; }

        /* ── Mid-CTA ─────────────────────────────────────────── */
        .mid-cta {
          background: linear-gradient(135deg,#0D1B2A 0%,#1A2E42 100%);
          border-radius: 10px; padding: clamp(20px,3vw,28px) clamp(20px,3vw,32px);
          margin: 36px 0; display: flex;
          align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap;
        }
        .mid-cta h3 {
          font-size: clamp(15px,1.8vw,18px); font-weight: 800;
          color: white; margin-bottom: 5px; letter-spacing: -.2px;
          font-family: 'Sora',sans-serif;
        }
        .mid-cta p { color: #94A3B8; font-size: clamp(12px,1.3vw,13.5px); margin: 0; font-family: 'Sora',sans-serif; }
        .mid-cta-btn {
          flex-shrink: 0; background: #F97316; color: white;
          padding: 12px 22px; border-radius: 8px;
          font-weight: 700; font-size: clamp(13px,1.5vw,14.5px);
          white-space: nowrap; cursor: pointer; border: none;
          font-family: 'Sora',sans-serif; touch-action: manipulation;
          min-height: 44px;
        }
        @media(max-width:480px) {
          .mid-cta { flex-direction: column; align-items: stretch; }
          .mid-cta-btn { width: 100%; text-align: center; }
        }

        /* ── FAQ ─────────────────────────────────────────────── */
        .faq-item {
          border: 1px solid #E2E8F0; border-radius: 10px;
          margin-bottom: 10px; overflow: hidden;
          background: #fff; transition: border-color .2s;
        }
        .dark .faq-item { background: #111827; border-color: #1f2937; }
        .faq-item.open { border-color: #F97316; }
        .faq-q {
          padding: clamp(13px,2vw,16px) clamp(14px,2vw,20px);
          font-size: clamp(13px,1.5vw,14.5px); font-weight: 700;
          color: #0D1B2A; cursor: pointer;
          display: flex; justify-content: space-between;
          align-items: center; gap: 12px;
          font-family: 'Sora',sans-serif;
          transition: background .15s; min-height: 44px;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        .dark .faq-q { color: #f9fafb; }
        .faq-q:hover { background: #F8FAFC; }
        .dark .faq-q:hover { background: #1f2937; }
        .faq-icon {
          flex-shrink: 0; width: 22px; height: 22px;
          border-radius: 50%; background: #FFEDD5; color: #F97316;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; transition: transform .2s;
        }
        .faq-icon.open { transform: rotate(45deg); background: #F97316; color: white; }
        .faq-a {
          padding: 0 clamp(14px,2vw,20px) clamp(12px,2vw,16px);
          font-size: clamp(13.5px,1.5vw,14px); color: #64748B;
          line-height: 1.75; font-family: 'Lora',serif;
        }
        .dark .faq-a { color: #9ca3af; }

        /* ── Related grid ────────────────────────────────────── */
        .related-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; }
        @media(max-width:768px) { .related-grid { grid-template-columns: 1fr 1fr; } }
        @media(max-width:480px) { .related-grid { grid-template-columns: 1fr; } }
        .rel-card {
          border: 1px solid #E2E8F0; border-radius: 10px;
          overflow: hidden; cursor: pointer; transition: box-shadow .2s,transform .2s;
          background: #fff; touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }
        .dark .rel-card { background: #111827; border-color: #1f2937; }
        .rel-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,.09); transform: translateY(-2px); }
        @media(hover:none) { .rel-card:hover { transform: none; } }
        .rel-thumb { width: 100%; height: clamp(90px,15vw,128px); display: flex; align-items: center; justify-content: center; font-size: clamp(22px,3vw,28px); }
        .rel-body { padding: 12px 14px; }
        .rel-tag { font-size: 10.5px; font-weight: 700; color: #F97316; text-transform: uppercase; letter-spacing: .5px; margin-bottom: 5px; font-family: 'Sora',sans-serif; }
        .rel-title { font-size: clamp(12px,1.3vw,13px); font-weight: 700; color: #0D1B2A; line-height: 1.4; font-family: 'Sora',sans-serif; }
        .dark .rel-title { color: #f9fafb; }

        /* ── TOC link ────────────────────────────────────────── */
        .toc-link {
          display: block; font-size: clamp(12px,1.2vw,12.5px);
          font-weight: 500; color: #64748B; padding: 6px 10px;
          border-radius: 6px; cursor: pointer; border: none;
          background: none; text-align: left; width: 100%;
          transition: all .15s; margin-bottom: 2px; line-height: 1.4;
          border-left: 2px solid transparent;
          touch-action: manipulation; -webkit-tap-highlight-color: transparent;
        }
        .toc-link:hover, .toc-link.active {
          color: #F97316; background: #FFF7ED; border-left-color: #F97316;
        }
        .dark .toc-link { color: #9ca3af; }
        .dark .toc-link:hover, .dark .toc-link.active { background: #431407; color: #fb923c; }

        /* ── Stat strip ──────────────────────────────────────── */
        .stat-strip {
          display: flex; flex-wrap: wrap;
          border: 1px solid #E2E8F0; border-radius: 10px;
          overflow: hidden; background: #fff;
          box-shadow: 0 1px 3px rgba(0,0,0,.07);
        }
        .dark .stat-strip { border-color: #1f2937; background: #111827; }
        .stat-item {
          flex: 1; min-width: 130px;
          padding: clamp(12px,2vw,18px) clamp(14px,2.5vw,24px);
          border-right: 1px solid #E2E8F0; text-align: center;
        }
        .dark .stat-item { border-color: #1f2937; }
        .stat-item:last-child { border-right: none; }
        @media(max-width:580px) {
          .stat-item { min-width: 50%; }
          .stat-item:nth-child(2) { border-right: none; }
          .stat-item:nth-child(1),.stat-item:nth-child(2) { border-bottom: 1px solid #E2E8F0; }
          .dark .stat-item:nth-child(1),.dark .stat-item:nth-child(2) { border-bottom-color: #1f2937; }
        }

        /* ── Takeaway box ────────────────────────────────────── */
        .takeaway-box {
          background: #0D1B2A; border-radius: 10px;
          padding: clamp(20px,3vw,28px) clamp(18px,3vw,30px); margin: 24px 0;
        }
        .takeaway-box h3 {
          font-family: 'Sora',sans-serif;
          font-size: clamp(15px,1.8vw,18px);
          font-weight: 800; color: white; margin: 0 0 14px;
          display: flex; align-items: center; gap: 10px;
        }
        .takeaway-item { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px; }
        .takeaway-dot {
          flex-shrink: 0; width: 18px; height: 18px;
          border-radius: 50%; background: #F97316;
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 800; color: white; margin-top: 3px;
        }
        .takeaway-text {
          font-family: 'Lora',serif;
          font-size: clamp(13.5px,1.5vw,14.5px);
          color: #CBD5E1; line-height: 1.6;
        }

        /* ── Blog image wrapper ──────────────────────────────── */
        .blog-img-wrap {
          width: 100%; border-radius: 12px; overflow: hidden;
          margin: 24px 0; box-shadow: 0 24px 64px rgba(0,0,0,.18);
        }
        .blog-img-wrap img {
          width: 100%; display: block;
        }

        /* ── Final CTA ───────────────────────────────────────── */
        .fc-block {
          background: linear-gradient(135deg,#DB2777 0%,#7C3AED 100%);
          padding: clamp(48px,8vw,80px) clamp(16px,4vw,24px);
          text-align: center;
        }
        .fc-inner { max-width: 640px; margin: 0 auto; }
        .fc-inner h2 {
          font-family: 'Sora',sans-serif;
          font-size: clamp(22px,4vw,38px);
          font-weight: 800; color: white; margin-bottom: 14px;
          line-height: 1.2; letter-spacing: -.4px;
        }
        .fc-inner p {
          color: rgba(255,255,255,.75);
          font-size: clamp(14px,1.6vw,16px);
          max-width: 520px; margin: 0 auto 24px;
          line-height: 1.7; font-family: 'Lora',serif;
        }
        .fc-points {
          display: flex; justify-content: center;
          flex-wrap: wrap; gap: 8px 20px; margin-bottom: 28px;
        }
        .fc-pt {
          color: rgba(255,255,255,.85); font-size: clamp(12px,1.4vw,13.5px);
          display: flex; align-items: center; gap: 7px;
          font-family: 'Sora',sans-serif;
        }
        .fc-pt::before { content: '✓'; color: white; font-weight: 800; }
        .fc-btn {
          background: white; color: #DB2777;
          padding: clamp(13px,2vw,16px) clamp(24px,4vw,40px);
          border-radius: 10px; font-size: clamp(14px,1.6vw,16px);
          font-weight: 800; border: none; cursor: pointer;
          transition: transform .2s; letter-spacing: -.2px;
          min-height: 52px; touch-action: manipulation;
        }
        .fc-btn:hover { transform: translateY(-2px); }
        @media(hover:none) { .fc-btn:hover { transform: none; } }
        @media(max-width:400px) { .fc-btn { width: 100%; } }
        .fc-sub { color: rgba(255,255,255,.5); font-size: 12.5px; margin-top: 14px; }

        /* ── Breadcrumb ──────────────────────────────────────── */
        .breadcrumb-bar {
          background: #F8FAFC; border-bottom: 1px solid #E2E8F0;
          padding: 10px 0;
          margin-top: var(--nav-h);
        }
        .breadcrumb-inner {
          max-width: 1240px; margin: 0 auto;
          padding: 0 clamp(12px,3vw,24px);
          display: flex; align-items: center; gap: 6px;
          font-size: clamp(11px,1.2vw,12.5px); color: #94A3B8;
          flex-wrap: wrap;
        }
        .breadcrumb-btn {
          color: #64748B; font-weight: 500;
          background: none; border: none; cursor: pointer;
          font-family: 'Sora',sans-serif;
          padding: 2px 0; touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }

        /* ── Hero section ────────────────────────────────────── */
        .hero-section {
          max-width: 1240px; margin: 0 auto;
          padding: clamp(28px,4vw,48px) clamp(12px,3vw,24px) clamp(24px,3vw,36px);
        }

        /* ── Footer grid ─────────────────────────────────────── */
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 36px; margin-bottom: 40px;
        }
        @media(max-width:900px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
        @media(max-width:480px) { .footer-grid { grid-template-columns: 1fr; } }
        .footer-bottom {
          border-top: 1px solid #162032; padding-top: 20px;
          display: flex; justify-content: space-between;
          align-items: center; flex-wrap: wrap; gap: 10px;
          font-size: 12px; color: #334155;
          font-family: 'Sora',sans-serif;
        }

        /* ── Sidebar CTA card ────────────────────────────────── */
        .sidebar-cta {
          background: linear-gradient(160deg,#0D1B2A 0%,#162B45 100%);
          border-radius: 10px; padding: clamp(18px,2vw,24px); margin-top: 18px;
        }
        .sidebar-share {
          background: #F8FAFC; border: 1px solid #E2E8F0;
          border-radius: 10px; padding: 16px; margin-top: 18px;
        }
        .dark .sidebar-share { background: #111827; border-color: #1f2937; }

        /* ── Nav buttons tap areas ───────────────────────────── */
        nav button { -webkit-tap-highlight-color: transparent; }

        /* ── Footer buttons min tap target ───────────────────── */
        footer button, footer a { min-height: 36px; display: inline-flex; align-items: center; }
      `}</style>

      <div className="read-progress" style={{ width:`${scrollPct}%` }} />

      {/* ════════════════════════════════ NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled?"bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg":"bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">
          <div className="flex items-center justify-between h-[72px] lg:h-20">

            {/* Logo */}
            <div className="flex items-center space-x-1 group cursor-pointer flex-shrink-0" onClick={() => setLocation("/")}>
              <div className="relative">
                <img src="/logo.png" alt="Insydz Logo" className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
              </div>
              <span className="text-lg lg:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ml-1.5">Insydz</span>
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1" ref={dropdownRef}>
              <DesktopDropdown label="Solutions"  menuKey="Solutions" />
              <DesktopDropdown label="Use Cases"  menuKey="Use Cases" />
              <DesktopDropdown label="Features"   menuKey="Features" />
              <button onClick={() => setLocation("/pricing")} onMouseEnter={() => setActiveDropdown(null)} className="px-2 xl:px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all">Pricing</button>
              <DesktopDropdown label="Free Tools" menuKey="Free Tools" />
              <DesktopDropdown label="Compare"    menuKey="Compare" />
              <DesktopDropdown label="Resources"  menuKey="Resources" accent="orange" />
              <DesktopDropdown label="About"      menuKey="About" />
              <Button onClick={() => setLocation("/login")} onMouseEnter={() => setActiveDropdown(null)} className="ml-2 text-sm bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-4 xl:px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">Login</Button>
              <button className="ml-1 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle dark mode">
                {isDarkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-gray-800" />}
              </button>
            </div>

            {/* Mobile controls */}
            <div className="lg:hidden flex items-center gap-2">
              <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors" onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle dark mode">
                {isDarkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-gray-700 dark:text-gray-200" />}
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? <X className="w-6 h-6 text-gray-700 dark:text-gray-200" /> : <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 max-h-[calc(100dvh-72px)] overflow-y-auto">
            <div className="px-4 py-3 space-y-1">
              <button onClick={() => { setLocation("/resources/expert-blog"); setIsMenuOpen(false); }} className="flex items-center gap-2 w-full px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium text-sm">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </button>
              {([["Solutions","Solutions","purple"],["Use Cases","Use Cases","purple"],["Features","Features","purple"],["Free Tools","Free Tools","purple"],["Compare","Compare","purple"],["Resources","Resources","orange"],["About","About","purple"]] as [string, keyof NavigationMenu, string][]).map(([label,key,accent]) => (
                <div key={label}>
                  <button onClick={() => toggleMobileMenu(label)} className={`flex items-center justify-between w-full px-4 py-3 rounded-lg font-medium text-sm ${accent==="orange"?"text-orange-600 dark:text-orange-500 hover:bg-orange-50":"text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"}`}>
                    {label}<ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu===label?"rotate-180":""}`} />
                  </button>
                  {mobileActiveMenu===label && (
                    <div className="ml-4 mt-1 space-y-0.5 pb-1">
                      {navigationMenu[key].map((item,i) => (
                        <button key={i} onClick={() => handleMenuItemClick(item)} className={`flex items-center gap-2 w-full px-4 py-2.5 text-sm rounded-lg ${accent==="orange"?"text-gray-600 hover:bg-orange-50":"text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20"}`}>
                          <span className="flex-shrink-0">{item.icon}</span>
                          <span className="flex-1 text-left">{item.name}</span>
                          {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full flex-shrink-0">{item.badge}</span>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button onClick={() => { setLocation("/pricing"); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium text-sm">Pricing</button>
              <div className="pt-2">
                <Button onClick={() => { setLocation("/login"); setIsMenuOpen(false); }} className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold py-3 rounded-xl">Login</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ════════════════════════════════ BREADCRUMB */}
      <div className="breadcrumb-bar">
        <div className="breadcrumb-inner">
          <button className="breadcrumb-btn" onClick={() => setLocation("/")}>Home</button>
          <span style={{ color:"#E2E8F0" }}>›</span>
          <button className="breadcrumb-btn" onClick={() => setLocation("/resources/expert-blog")}>Blog</button>
          <span style={{ color:"#E2E8F0" }}>›</span>
          <button className="breadcrumb-btn hidden sm:inline" onClick={() => setLocation("/features/competitor-price-tracking-feature")}>Seller Tools</button>
          <span className="hidden sm:inline" style={{ color:"#E2E8F0" }}>›</span>
          <span>Best Price Tracking Tools India</span>
        </div>
      </div>

      {/* ════════════════════════════════ HERO */}
      <div className="hero-section">
        <div style={{ display:"inline-flex", alignItems:"center", gap:7, background:"#FFEDD5", color:"#F97316", fontSize:11.5, fontWeight:700, letterSpacing:.6, textTransform:"uppercase", padding:"5px 14px", borderRadius:20, marginBottom:16 }}>
          <div style={{ width:7, height:7, borderRadius:"50%", background:"#F97316" }} />
          Tool Comparison &amp; Reviews
        </div>

        <h1 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(22px,3.8vw,40px)", fontWeight:800, lineHeight:1.18, color:"#0D1B2A", letterSpacing:"-.5px", marginBottom:16, maxWidth:820 }} className="dark:text-white">
          Best <span style={{ color:"#F97316" }}>Competitor Price Tracking Tools</span> for Indian Sellers: The 2026 Guide
        </h1>

        <div style={{ display:"flex", alignItems:"center", flexWrap:"wrap", gap:"5px 16px", marginBottom:24 }}>
          {[
            <><Users className="w-3.5 h-3.5 inline mr-1 text-gray-400" /><strong style={{ color:"#0D1B2A" }}>INSYDZ Research Team</strong></>,
            <><Clock className="w-3.5 h-3.5 inline mr-1 text-gray-400" />January 2026</>,
            <><Clock className="w-3.5 h-3.5 inline mr-1 text-gray-400" /><strong>12 min read</strong></>,
          ].map((item, i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:6, fontSize:clamp13, color:"#64748B" }}>{item}</div>
          ))}
          <span style={{ background:"#FFEDD5", color:"#F97316", fontSize:11, fontWeight:700, padding:"2px 8px", borderRadius:4 }}>Updated for 2026</span>
          <span style={{ background:"#EEF2FF", color:"#4F46E5", fontSize:11, fontWeight:700, padding:"2px 8px", borderRadius:4 }}>BOFU Guide</span>
        </div>

        {/* Stats bar */}
        <div className="stat-strip" style={{ marginBottom:28 }}>
          {[
            ["1.7M+",   "Active Sellers Competing on Indian Marketplaces"],
            ["30–40%",  "More Demand Captured With Real-Time Tracking"],
            ["60–85%",  "Cost Savings vs Global Tools Like Helium 10"],
            ["<60 min", "WhatsApp Alert Response Time with Insydz AI"],
          ].map(([num, lbl]) => (
            <div className="stat-item" key={num}>
              <span style={{ display:"block", fontSize:"clamp(20px,3.5vw,26px)", fontWeight:800, color:"#F97316", fontFamily:"'Sora',sans-serif", lineHeight:1 }}>{num}</span>
              <span style={{ display:"block", fontSize:"clamp(10px,1.2vw,11.5px)", color:"#64748B", marginTop:5, lineHeight:1.4, fontWeight:500 }}>{lbl}</span>
            </div>
          ))}
        </div>

        {/* ── Hero Graphic — .png image */}
        <figure className="blog-img-wrap" style={{ marginBottom:0 }}>
          <img
            src="/Best_Price_Tracer-blog2_image1.png"
            alt="Best Competitor Price Tracking Tools for Indian Sellers 2026 — Insydz hero graphic"
            style={{ width:"100%", display:"block", borderRadius:12 }}
          />
        </figure>
      </div>{/* end hero-section */}

      {/* ════════════════════════════════ TAKEAWAYS */}
      <div style={{ maxWidth:1240, margin:"0 auto", padding:"0 clamp(12px,3vw,24px) 36px" }}>
        <div className="takeaway-box">
          <h3>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Key Takeaways
          </h3>
          {[
            "Real-time competitor price tracking — not daily or manual — is the standard for competitive Indian sellers in 2026. A 12-hour information lag is a revenue gap.",
            "India-specific tools matter because Indian sellers operate across Amazon.in, Flipkart, and Meesho simultaneously. A tool covering only Amazon solves 60% of the problem at best.",
            "Price tracking without stock monitoring is incomplete intelligence. The most profitable decisions come from knowing when a competitor is about to go OOS, not just their current price.",
            "WhatsApp alerts convert to action significantly faster than email alerts for Indian SMB sellers — alert delivery channel is a critical, underrated feature.",
            "AI-powered recommendations outperform raw alerts. The goal isn't to know what happened — it's to know what to do next and why.",
            "Global tools like Helium 10 and Jungle Scout are excellent for Amazon.com but overpriced for Indian sellers and don't cover Flipkart or Meesho.",
            "Price wars are avoidable. Smart tools calculate minimum necessary adjustments — not maximum reactive discounts — protecting margins while recovering Buy Box.",
          ].map(t => (
            <div className="takeaway-item" key={t}>
              <div className="takeaway-dot">✓</div>
              <div className="takeaway-text">{t}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════ ARTICLE LAYOUT */}
      <div className="article-layout">

        {/* SIDEBAR */}
        <aside className="toc-sidebar" aria-label="Table of contents">
          <h4 style={{ fontFamily:"'Sora',sans-serif", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:1, color:"#94A3B8", marginBottom:14 }}>Table of Contents</h4>
          <ul style={{ listStyle:"none", padding:0, margin:0 }}>
            {TOC.map(t => (
              <li key={t.id}><button className={`toc-link${activeSection===t.id?" active":""}`} onClick={() => go(t.id)}>{t.label}</button></li>
            ))}
          </ul>
          <div className="sidebar-cta">
            <h4 style={{ fontFamily:"'Sora',sans-serif", fontSize:clamp15, fontWeight:800, color:"white", marginBottom:10, lineHeight:1.35, letterSpacing:"-.2px" }}>
              Track Competitor Prices Across All 3 Indian Platforms
            </h4>
            <p style={{ fontSize:"clamp(11.5px,1.3vw,12.5px)", color:"#94A3B8", marginBottom:14, lineHeight:1.6, fontFamily:"'Sora',sans-serif" }}>India's only AI-powered price tracker with WhatsApp alerts.</p>
            <ul style={{ listStyle:"none", padding:0, margin:"0 0 16px" }}>
              {["Amazon.in + Flipkart + Meesho coverage","WhatsApp alerts in under 60 minutes","AI recommendations — not just raw data","From ₹499/mo — or free forever"].map(f => (
                <li key={f} style={{ fontSize:"clamp(11.5px,1.2vw,12.5px)", color:"#CBD5E1", marginBottom:8, display:"flex", alignItems:"flex-start", gap:7, lineHeight:1.4, fontFamily:"'Sora',sans-serif" }}>
                  <span style={{ color:"#F97316", fontWeight:800, flexShrink:0, fontSize:12, lineHeight:1.3 }}>✓</span>{f}
                </li>
              ))}
            </ul>
            <button onClick={() => setLocation("/login")} style={{ display:"block", background:"#F97316", color:"white", textAlign:"center", padding:"11px 0", borderRadius:8, fontWeight:700, fontSize:13.5, width:"100%", cursor:"pointer", border:"none", fontFamily:"'Sora',sans-serif", minHeight:44 }}>
              Start Free — No Card Needed
            </button>
          </div>
          <div className="sidebar-share">
            <h4 style={{ fontFamily:"'Sora',sans-serif", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:1, color:"#94A3B8", marginBottom:12 }}>Share This Guide</h4>
            <div style={{ display:"flex", gap:8 }}>
              {[{l:"WhatsApp",bg:"#25D366"},{l:"LinkedIn",bg:"#0A66C2"},{l:"Twitter",bg:"#1DA1F2"}].map(s => (
                <div key={s.l} style={{ flex:1, textAlign:"center", padding:"9px 4px", borderRadius:7, fontSize:11.5, fontWeight:700, color:"white", background:s.bg, cursor:"pointer", fontFamily:"'Sora',sans-serif", minHeight:36 }}>{s.l}</div>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main>
          <button className="mobile-toc-btn" onClick={() => setTocOpen(!tocOpen)} aria-expanded={tocOpen}>
            📋 Table of Contents <span>{tocOpen?"▲":"▼"}</span>
          </button>
          <div className={`mobile-toc-panel${tocOpen?" open":""}`} role="navigation">
            {TOC.map(t => (
              <button key={t.id} className="toc-link" style={{ display:"block", marginBottom:4 }} onClick={() => go(t.id)}>{t.label}</button>
            ))}
          </div>

          <article className="article-body">

            {/* S1 */}
            <h2 id="intro">The Best Competitor Price Tracking Tool for India — What Actually Matters</h2>
            <p>The best competitor price tracking tool for India is one that monitors rival prices across Amazon.in, Flipkart, and Meesho in real time — and tells you exactly what to do, not just what happened. With over <strong>1.7 million active sellers competing</strong> on Indian marketplaces, pricing intelligence has moved from a "nice to have" to a survival tool.</p>
            <p>Indian e-commerce is growing at 25% annually, which means new competitors enter your category every week — and most of them are watching your prices even if you aren't watching theirs. This guide cuts through the noise. We review what actually matters in a price tracking tool for the Indian market, what global tools miss, and which platforms are genuinely worth your ₹499–3,000/month.</p>
            <div className="box box-teal">
              <div className="box-label">💡 In Simple Terms</div>
              <p>A competitor price tracking tool watches your rivals' product prices 24×7 so you don't have to. When a competitor drops their price on Amazon.in or Flipkart, you get an alert — with a recommendation on what to do next. It's the difference between reacting in 5 minutes versus finding out 2 days later.</p>
            </div>

            {/* S2 */}
            <h2 id="why-matters">Why Choosing the Right Tool Matters for Indian Sellers</h2>
            <h3>The Cost of Being One Step Behind</h3>
            <p>Price changes on Amazon.in happen constantly — sometimes 5–8 times per day in high-competition categories like electronics, home appliances, and FMCG. A seller who finds out about a competitor's price drop 12 hours later has already lost Buy Box position, potentially dropped in search rankings, and surrendered sales to a faster-reacting rival.</p>
            <p>The numbers are stark: sellers who track competitor prices in real time <strong>capture 30–40% more demand during competitor stock-outs</strong> and respond to price changes within an hour instead of a day. Over a month, that's a measurable revenue difference — not a marginal one.</p>
            <h3>Platform Coverage Is Non-Negotiable in India</h3>
            <p>Unlike the US where Amazon dominates, Indian sellers typically operate across 2–3 platforms simultaneously. A seller doing ₹5 lakh/month might earn ₹3 lakh on Amazon.in, ₹1.5 lakh on Flipkart, and ₹50,000 on Meesho. A price tracking tool that only covers Amazon is only solving 60% of their problem. This is the fundamental gap in most globally-built tools — and it's the clearest reason Indian sellers need an India-first solution.</p>
            <div className="box box-amber">
              <div className="box-label">📌 Real Seller Example</div>
              <p>A Jaipur-based seller of home décor products was manually checking 8 competitors on Flipkart every morning using the browser. It took 90 minutes daily and was still missing overnight price changes. After switching to an automated price tracking tool, she caught a competitor's 22% price drop at 2 AM on a Friday — and adjusted her price by 9 AM Saturday, before the weekend shopping rush. That one response was worth an estimated <strong>₹28,000 in recovered weekend sales</strong>.</p>
            </div>

            {/* Graphic 2 — .png image */}
            <figure className="blog-img-wrap">
              <img
                src="/Best_Price_Tracer-Blog2_image2.png"
                alt="3 Markets. 1 Tool. — Amazon.in, Flipkart and Meesho tracked live from one dashboard"
                style={{ width:"100%", display:"block" }}
              />
            </figure>
            <p className="art-img-cap">India-first tools like Insydz track Amazon.in, Flipkart, and Meesho simultaneously — the only complete multi-platform solution for Indian sellers</p>

            <div className="box box-indigo" style={{ padding:"18px 20px", margin:"20px 0" }}>
              <div className="box-label">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ flexShrink:0 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>
                AI Overview Summary
              </div>
              <p style={{ fontSize:"clamp(13.5px,1.5vw,14.5px)", margin:0, lineHeight:1.72 }}>The best competitor price tracking tools for Indian sellers monitor prices on Amazon.in, Flipkart, and Meesho simultaneously, deliver alerts via WhatsApp rather than email, and provide AI-powered recommendations — not just raw data. For Indian SMBs who can't afford ₹4,000–8,000/month global tools, India-first platforms offer equivalent or better functionality at 60–85% lower cost.</p>
            </div>

            {/* S3 */}
            <h2 id="how-it-works">How Competitor Price Tracking Tools Work</h2>
            <p>Understanding the mechanics behind price tracking tools helps you evaluate which platform is genuinely real-time versus which claims real-time but runs on hourly batch jobs. Here's what a properly built tool does:</p>
            <div className="steps">
              {[
                { n:1, t:"Setup & Integration",       d:"Connect your Amazon/Flipkart seller account and input the ASINs or product URLs of competitors you want to monitor. Good tools allow you to add 10–50 competitors per product." },
                { n:2, t:"Continuous Crawling",       d:"The tool's engine checks competitor listing prices at regular intervals — anywhere from every 15 minutes to every few hours. AI-powered tools also track stock availability, ratings, and review velocity alongside price." },
                { n:3, t:"Anomaly Detection",         d:"When a competitor changes their price beyond your set threshold (e.g., drops more than 5%), the system flags it as a significant event requiring your attention." },
                { n:4, t:"WhatsApp Alert Delivery",   d:"You receive an alert via WhatsApp, email, or in-app notification with the specifics: which competitor, which product, what the old price was, what the new price is, and how it compares to your current price." },
                { n:5, t:"AI Recommendation Engine",  d:'Advanced tools go beyond the alert: "Competitor A dropped to ₹849. Recommend adjusting to ₹869 — you\'ll recapture Buy Box while protecting ₹47 more margin than a full match."' },
              ].map(s => (
                <div className="step" key={s.n}>
                  <div className="step-n">{s.n}</div>
                  <div className="step-body"><strong>{s.t}</strong><p>{s.d}</p></div>
                </div>
              ))}
            </div>
            <div className="box box-green">
              <div className="box-label">⚡ Manual vs Automated</div>
              <p>Manually tracking 10 competitors across 20 SKUs on 2 platforms requires checking <strong>400 data points daily</strong>. At 30 seconds per check, that's 3.3 hours every single day — just watching prices. Automated tools do this in milliseconds, continuously, without breaks.</p>
            </div>

            {/* Graphic 3 — already .png, unchanged */}
            <figure style={{ margin: "24px 0", overflow: "hidden", borderRadius: "12px" }}>
              <img
                src="/Best_Price_Tracer-Blog2_image3.png"
                alt="How Insydz price tracking works 5 step pipeline"
                style={{ width: "100%", display: "block", borderRadius: "12px" }}
              />
              <figcaption style={{ background: "#f1f5f9", padding: "14px 18px", fontSize: "13.5px", lineHeight: "1.6", color: "#64748b", borderTop: "1px solid #e2e8f0" }}>
                Insydz automates the full 5-step pricing intelligence pipeline — from crawling to WhatsApp alerts to AI-powered recommendations.
              </figcaption>
            </figure>

            {/* S4 */}
            <h2 id="types">Types of Competitor Price Tracking Tools: Which Category Fits You?</h2>
            <div className="tbl-wrap">
              <table className="dt">
                <thead><tr><th>Tool Type</th><th>Best For</th><th>Speed</th><th>India Fit</th><th>Price Range</th></tr></thead>
                <tbody>
                  <tr><td><strong>Manual Excel / Browser</strong></td><td>0–5 SKUs, early stage</td><td><span className="br">24–48 hrs</span></td><td>Poor</td><td>Free (your time)</td></tr>
                  <tr><td><strong>Basic Scrapers / Chrome Extensions</strong></td><td>5–20 SKUs, budget-conscious</td><td><span className="ba">4–12 hrs</span></td><td>Partial</td><td>Free – ₹500/mo</td></tr>
                  <tr><td><strong>Global SaaS (Helium 10, Keepa)</strong></td><td>Amazon-heavy, 20+ SKUs</td><td><span className="bb">1–4 hrs</span></td><td>Limited</td><td>₹3,300–8,300/mo</td></tr>
                  <tr className="hl"><td><strong>India-First AI Platform (Insydz)</strong></td><td>Any size, multi-platform</td><td><span className="bg">{"<"} 1 hour</span></td><td><span className="bg">Built for India</span></td><td><strong>₹499–2,999/mo</strong></td></tr>
                  <tr><td><strong>Enterprise Custom Tools</strong></td><td>D2C brands, agencies, 100+ SKUs</td><td><span className="bb">Real-time</span></td><td>Custom</td><td>₹15K–75K/mo</td></tr>
                </tbody>
              </table>
            </div>

            <div className="mid-cta">
              <div style={{ flex:1, minWidth:0 }}>
                <h3>Start Tracking Competitor Prices — Free</h3>
                <p>Setup in under 30 minutes. WhatsApp alerts from day one. No credit card required.</p>
              </div>
              <button className="mid-cta-btn" onClick={() => setLocation("/login")}>Try Insydz Free →</button>
            </div>

            {/* S5 */}
            <h2 id="mistakes">5 Mistakes Indian Sellers Make When Tracking Competitor Prices</h2>
            <div className="mistake-list">
              {[
                { n:1, t:"Using WhatsApp Screenshots Instead of Actual Tools",   d:"A surprisingly common practice in Indian seller communities: someone in a WhatsApp group notices a competitor's price change and shares a screenshot. By the time it circulates and you act — 6–8 hours have passed. This is community intelligence, not pricing intelligence." },
                { n:2, t:"Tracking Only Amazon and Ignoring Flipkart",            d:"Indian sellers who sell on both platforms often apply Amazon-derived pricing to Flipkart without checking Flipkart-specific competitor pricing. Flipkart's competitive dynamics differ — different sellers dominate, price gaps are different, and the Buy Box equivalent works differently." },
                { n:3, t:"Setting Alerts Too Wide (Missing the Real Moves)",      d:"Setting a 15% threshold before you get alerted means a competitor dropping from ₹999 to ₹859 — a 14% drop — goes unnoticed. In competitive categories, a ₹50 gap is enough to lose Buy Box. Set alerts at 3–5% for high-competition categories." },
                { n:4, t:"Reacting to Every Price Change Without Strategy",       d:"Some sellers match every competitor price drop within minutes. This triggers retaliatory drops, creates category-wide price compression, and erodes everyone's margins including yours. Smart tracking tools calculate the minimum response needed, not the maximum reaction." },
                { n:5, t:"Not Connecting Price Tracking to Stock Monitoring",     d:"Price and stock are inseparable signals. When a competitor drops their price, it might mean they're overstocked — and will be out of stock in 3 weeks. If you know they're about to go OOS, you don't need to match their discount. You need to hold your price and prepare for the demand surge." },
              ].map(m => (
                <div className="mistake" key={m.n}>
                  <div className="mistake-num">{m.n}</div>
                  <div className="mistake-body"><strong>{m.t}</strong><p>{m.d}</p></div>
                </div>
              ))}
            </div>
            <div className="box box-pink">
              <div className="box-label">💬 Key Insight</div>
              <p>The biggest pricing mistake isn't being too expensive — it's being reactive without context. A price change is a signal, not a command. <strong>Understanding why a competitor changed their price is as important as knowing that they did.</strong></p>
            </div>

            {/* S6 */}
            <h2 id="workflow">Best Practices: A Practical Pricing Intelligence Workflow</h2>
            <p>The most successful Indian sellers don't react to pricing changes — they run a structured workflow that keeps them consistently competitive without manual effort. Here's the framework that works:</p>

            {/* Graphic 4 — already .png, unchanged */}
            <figure style={{ margin: "24px 0", overflow: "hidden", borderRadius: "12px" }}>
              <img
                src="/Best_Price_Tracer-Blog2_image4.png"
                alt="Pricing intelligence workflow for Indian sellers"
                style={{ width: "100%", display: "block", borderRadius: "12px" }}
              />
              <figcaption style={{ background: "#f1f5f9", padding: "14px 18px", fontSize: "13.5px", lineHeight: "1.6", color: "#64748b", borderTop: "1px solid #e2e8f0" }}>
                A structured pricing intelligence workflow replaces 3+ hours of daily manual work with a 40-minute weekly discipline — powered by automation.
              </figcaption>
            </figure>

            <h3>Key Metrics to Track</h3>
            <div className="metrics">
              {[
                { svg:<svg viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, t:"Buy Box Win Rate per SKU",           d:"Target: >65% for primary products. The single most important pricing health metric." },
                { svg:<svg viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, t:"Average Time-to-Response",           d:"Target: <2 hours when a competitor changes price in a high-velocity category." },
                { svg:<svg viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>, t:"Revenue Captured During OOS Events",  d:"Measure separately — competitor stock-out is often a 3–5× revenue opportunity." },
                { svg:<svg viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>, t:"Gross Margin Trend",                  d:"Are you maintaining margin or eroding it with reactive pricing? Track monthly." },
              ].map(m => (
                <div className="metric" key={m.t}>
                  <div className="metric-icon">{m.svg}</div>
                  <div><div className="metric-t">{m.t}</div><div className="metric-d">{m.d}</div></div>
                </div>
              ))}
            </div>

            {/* S7 */}
            <h2 id="best-tools">Best Competitor Price Tracking Tools for India in 2026</h2>
            <h3>Global Tools: Honest Assessment for Indian Sellers</h3>
            <p>Several well-established tools serve Amazon sellers globally — Keepa, Helium 10's competitor tools, and Jungle Scout's market tracker among them. For Indian sellers, here's an honest, direct assessment:</p>
            <div className="tbl-wrap">
              <table className="dt">
                <thead><tr><th>Tool</th><th>Strengths</th><th>India Limitations</th><th>Price (INR/mo)</th></tr></thead>
                <tbody>
                  <tr><td><strong>Keepa</strong></td><td>Deep Amazon price history, free tier</td><td>Amazon.com only, no recommendations</td><td>Free – ₹1,700</td></tr>
                  <tr><td><strong>Helium 10</strong></td><td>Comprehensive Amazon suite</td><td>Amazon.com-focused, no India platform coverage</td><td>₹3,300 – ₹8,300</td></tr>
                  <tr><td><strong>Jungle Scout</strong></td><td>Strong product research + tracking</td><td>No Flipkart/Meesho, India data limited</td><td>₹3,800 – ₹8,000</td></tr>
                  <tr><td><strong>Price2Spy</strong></td><td>Multi-website tracking</td><td>Not marketplace-native, no AI recommendations</td><td>₹2,500 – ₹7,000</td></tr>
                  <tr className="hl"><td><strong>Insydz</strong></td><td>Amazon.in + Flipkart + Meesho, WhatsApp AI</td><td>India-first — purpose-built, no limitations</td><td><strong>Free – ₹2,999</strong></td></tr>
                </tbody>
              </table>
            </div>

            <h3>Insydz: Built Ground-Up for Indian Marketplace Sellers</h3>
            <p>Insydz isn't a US tool adapted for India — it's the other way around. Built specifically for how Indian sellers operate across Amazon.in, Flipkart, and Meesho, the platform combines competitor price tracking with review intelligence, SEO rank tracking, and stock monitoring in one connected system.</p>

            {/* Graphic 5 — .png image */}
            <figure className="blog-img-wrap">
              <img
                src="/Best_Price_Tracer-Blog2_image5.png"
                alt="All Features. One Tool. — Insydz price tracking, review analytics, rank tracking and AI recommendations for India"
                style={{ width:"100%", display:"block" }}
              />
            </figure>
            <p className="art-img-cap">Insydz combines price tracking, stock monitoring, review intelligence and AI recommendations in one India-first platform</p>

            <div className="box box-green">
              <div className="box-label">📌 A Note on Tool Selection</div>
              <p>Don't choose a tool based on the longest feature list. <strong>Choose based on how quickly you'll act on what it tells you.</strong> A tool that sends you a WhatsApp message at 8 AM is more valuable than a tool that generates a beautiful dashboard you open once a week.</p>
            </div>

            {/* S8 FAQ */}
            <h2 id="faq">Frequently Asked Questions</h2>
            <div style={{ marginTop:16 }}>
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item${openFaq===i?" open":""}`}>
                  <div className="faq-q" onClick={() => setOpenFaq(openFaq===i?null:i)} role="button" tabIndex={0} onKeyDown={e => e.key==="Enter" && setOpenFaq(openFaq===i?null:i)}>
                    <span>{faq.q}</span>
                    <span className={`faq-icon${openFaq===i?" open":""}`} aria-hidden="true">+</span>
                  </div>
                  {openFaq===i && <div className="faq-a"><p>{faq.a}</p></div>}
                </div>
              ))}
            </div>

            {/* Related */}
            <div style={{ marginTop:48, paddingTop:32, borderTop:"2px solid #E2E8F0" }}>
              <h2 style={{ fontSize:"clamp(17px,2.2vw,20px)", fontWeight:800, color:"#0D1B2A", margin:"0 0 20px", border:"none", padding:0, fontFamily:"'Sora',sans-serif" }} className="dark:text-white">Related Guides</h2>
              <div className="related-grid">
                {[
                  { t:"Amazon Competitor Price Tracking Tool India: Complete Guide (2026)", tag:"Price Tracking",  bg:"linear-gradient(135deg,#F97316,#EA580C)", em:"📊", r:"/features/competitor-price-tracking-feature" },
                  { t:"Flipkart Price Tracker: Monitor & Beat Competitor Prices in 2026",   tag:"Flipkart Sellers",bg:"linear-gradient(135deg,#0D9488,#0891B2)", em:"🛍️", r:"/solutions/flipkart-sellers" },
                  { t:"How to Win the Amazon Buy Box Consistently as an Indian Seller",     tag:"Buy Box Strategy",bg:"linear-gradient(135deg,#4F46E5,#7C3AED)", em:"🏆", r:"/use-cases/track-competitor-prices" },
                ].map(rc => (
                  <div key={rc.t} className="rel-card" onClick={() => setLocation(rc.r)}>
                    <div className="rel-thumb" style={{ background:rc.bg }}><span>{rc.em}</span></div>
                    <div className="rel-body">
                      <div className="rel-tag">{rc.tag}</div>
                      <div className="rel-title">{rc.t}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </main>
      </div>

      {/* ════════════════════════════════ FINAL CTA */}
      <div className="fc-block">
        <div className="fc-inner">
          <h2>Your Competitors Are Already Tracking Your Prices.</h2>
          <p>The question isn't whether you should track competitor prices. It's whether you'll be the one acting on the information — or the one reacting to it. Insydz monitors your rivals on Amazon.in, Flipkart, and Meesho around the clock.</p>
          <div className="fc-points">
            <div className="fc-pt">No dashboards to learn</div>
            <div className="fc-pt">No credit card needed</div>
            <div className="fc-pt">WhatsApp alerts from day one</div>
            <div className="fc-pt">Setup in under 30 minutes</div>
          </div>
          <button className="fc-btn" onClick={() => setLocation("/login")}>Start Tracking Free at insydz.com →</button>
          <p className="fc-sub">Forever free plan · No credit card · Cancel anytime</p>
        </div>
      </div>

      {/* ════════════════════════════════ FOOTER */}
      <footer style={{ background:"#0D1B2A", padding:"clamp(36px,6vw,56px) clamp(12px,3vw,24px) clamp(20px,3vw,28px)" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div className="footer-grid">
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                <img src="/logo.png" alt="Insydz Logo" style={{ width:32, height:32, borderRadius:8, objectFit:"contain" }} />
                <span style={{ fontFamily:"'Sora',sans-serif", fontWeight:800, fontSize:18, color:"white", letterSpacing:"-.4px" }}>insydz</span>
              </div>
              <p style={{ fontSize:13, color:"#475569", lineHeight:1.7, maxWidth:260, fontFamily:"'Sora',sans-serif" }}>India's first AI-powered ecommerce analytics platform for Amazon, Flipkart, and Meesho sellers.</p>
              <div style={{ display:"flex", gap:10, marginTop:14 }}>
                {[
                  { title:"Facebook",  href:"https://www.facebook.com/profile.php?id=61586202582209", icon:<Facebook className="w-4 h-4" /> },
                  { title:"Twitter",   href:"https://x.com/growwithinsydz",                             icon:<Twitter className="w-4 h-4" /> },
                  { title:"Instagram", href:"https://www.instagram.com/growwithinsydz/",                icon:<Instagram className="w-4 h-4" /> },
                  { title:"LinkedIn",  href:"https://www.linkedin.com/company/insydz/?viewAsMember=true",icon:<Linkedin className="w-4 h-4" /> },
                ].map(s => (
                  <a key={s.title} title={s.title} href={s.href} target="_blank" rel="noopener noreferrer" style={{ width:34, height:34, borderRadius:"50%", background:"rgba(255,255,255,.1)", display:"flex", alignItems:"center", justifyContent:"center", color:"white" }}>{s.icon}</a>
                ))}
              </div>
            </div>
            {[
              { h:"Solutions",      l:[["Amazon Sellers","/solutions/amazon-sellers"],["Flipkart Sellers","/solutions/flipkart-sellers"],["Meesho Sellers","/solutions/amazon-sellers"],["Ecommerce Agencies","/solutions/ecommerce-agencies"]] },
              { h:"Features",       l:[["Competitor Price Tracking","/features/competitor-price-tracking-feature"],["WhatsApp Alerts","/features/whatsapp-alerts-feature"],["Review Analytics","/features/review-analytics-feature"],["Stock Monitoring","/features/product-research-feature"],["AI Recommendations","/features/ai-recommendations-feature"]] },
              { h:"Compare & More", l:[["Insydz vs Helium 10","/compare/insydzvshelium"],["Insydz vs Jungle Scout","/compare/insydzvsjunglescout"],["Pricing Plans","/pricing"],["Blog","/resources/expert-blog"]] },
            ].map(col => (
              <div key={col.h}>
                <h5 style={{ color:"white", fontSize:12, fontWeight:700, textTransform:"uppercase", letterSpacing:.8, marginBottom:14, fontFamily:"'Sora',sans-serif" }}>{col.h}</h5>
                <ul style={{ listStyle:"none", padding:0 }}>
                  {col.l.map(([label, route]) => (
                    <li key={label} style={{ marginBottom:9 }}>
                      <button onClick={() => setLocation(route)} style={{ color:"#475569", fontSize:13, background:"none", border:"none", cursor:"pointer", fontFamily:"'Sora',sans-serif", fontWeight:500, minHeight:32, display:"inline-flex", alignItems:"center" }}>{label}</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <span>© 2026 Insydz Technologies. All rights reserved.</span>
            <span>Privacy Policy · Terms of Service · Sitemap</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper constants to avoid TS "expression too complex" issues
const clamp13 = "clamp(12px,1.4vw,13px)" as const;
const clamp15 = "clamp(13px,1.6vw,15px)" as const;