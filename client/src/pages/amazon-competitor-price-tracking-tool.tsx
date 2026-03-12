// import { useState, useEffect, useRef } from "react";
// import { useLocation } from "wouter";
// import {
//   Search, Clock, ArrowRight, TrendingUp, Target, DollarSign, BarChart3,
//   MessageCircle, Package, Trophy, Zap, BookOpen, Video, FileText,
//   Menu, X, Sun, Moon, ChevronDown, ShoppingBag, Store, Briefcase,
//   Users, Bell, Code, Globe, ArrowLeft, Facebook, Twitter, Linkedin,
//   Instagram, Flame, Presentation, CheckCircle2,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// // ─── Navigation data (identical to ExpertBlog) ────────────────────────────────
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
//     { name: "Track Competitor Prices", icon: <TrendingUp className="w-4 h-4" />, route: "/use-cases/track-competitor-prices" },
//     { name: "Find Profitable Products", icon: <Target className="w-4 h-4" />, route: "/use-cases/find-profitable-products" },
//     { name: "Analyze Customer Reviews", icon: <MessageCircle className="w-4 h-4" />, route: "/use-cases/analyze-customer-reviews" },
//     { name: "Improve Amazon & Flipkart SEO", icon: <Search className="w-4 h-4" />, route: "/use-cases/improve-seo" },
//     { name: "Avoid Stockouts & Missed Sales", icon: <Package className="w-4 h-4" />, route: "/use-cases/avoid-stockouts" },
//   ],
//   Features: [
//     { name: "Competitor Price Tracking", icon: <DollarSign className="w-4 h-4" />, route: "/features/competitor-price-tracking-feature" },
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
//     { name: "Free Competitor Price Checker", icon: <DollarSign className="w-4 h-4" />, route: "/free-tools/free-competitor-price-checker" },
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

// // ─── Article content data ──────────────────────────────────────────────────────
// const TOC = [
//   { id: "what-is",     label: "What Is the Buy Box?" },
//   { id: "why-matters", label: "Why It Matters for Indian Sellers" },
//   { id: "key-factors", label: "Key Ranking Factors" },
//   { id: "step-by-step",label: "Step-by-Step Strategy" },
//   { id: "mistakes",    label: "Common Mistakes to Avoid" },
//   { id: "advanced",    label: "Advanced Strategies" },
//   { id: "tools",       label: "Tools & Data" },
//   { id: "faq",         label: "FAQs" },
//   { id: "conclusion",  label: "Final Thoughts" },
// ];

// const FAQS = [
//   { q: "What is the Amazon Buy Box?", a: "The Buy Box is the primary 'Add to Cart' button on an Amazon product listing. When multiple sellers offer the same product, only one wins the Buy Box at any given time — that seller gets the majority of sales." },
//   { q: "Is winning the Buy Box necessary for Amazon India sellers?", a: "Yes. Research shows that over 82% of Amazon sales go through the Buy Box. For competitive categories on Amazon India, not owning the Buy Box means near-zero organic conversions." },
//   { q: "How do beginners start optimizing for the Buy Box?", a: "Start by enrolling in FBA or ensuring SFP eligibility, set competitive prices with a repricer or manual monitoring, and focus on maintaining a seller rating above 4.7 stars with a defect rate below 1%." },
//   { q: "What tools help track Buy Box status?", a: "Insydz provides real-time Buy Box monitoring, price gap alerts, and competitor fulfillment tracking — all calibrated for Amazon India and Flipkart." },
//   { q: "How does pricing impact Buy Box eligibility?", a: "Price is one of the top three signals. Amazon factors in landed price (product + shipping). Being 2–5% below the current Buy Box holder, while maintaining healthy margins, is typically the sweet spot for Indian marketplace dynamics." },
//   { q: "Can FBM sellers win the Buy Box on Amazon India?", a: "Yes, but it's harder. FBM sellers need exceptional metrics: shipping time under 2 days, defect rate under 1%, and cancellation rate below 0.5%. FBA gives an inherent advantage in fulfillment scoring." },
// ];

// const IMAGES = {
//   hero:        { src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80", alt: "Ecommerce seller working on laptop", caption: "Indian e-commerce sellers who systematically track Buy Box data outperform competitors by 3–5× on conversion rates during peak periods." },
//   mobile:      { src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&q=80",  alt: "Mobile phone showing online shopping", caption: "Over 78% of Amazon India orders come from mobile — where the Buy Box is the only visible purchase action. Losing it means zero mobile conversion." },
//   festive:     { src: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1100&q=80", alt: "Festive sale shopping bags", caption: "During Big Billion Days and Great Indian Festival, 40–60% of annual e-commerce revenue is concentrated into just 4–7 days." },
//   rating:      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1100&q=80", alt: "Analytics dashboard with metrics", caption: "Seller rating (≥ 4.7 stars) and Order Defect Rate (< 1%) are hard entry gates — not soft signals. No repricing strategy can compensate for poor account health." },
//   pricing:     { src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1100&q=80", alt: "Financial charts on screen", caption: "Competitive pricing analytics: knowing where your landed price sits relative to the Buy Box holder across all ASINs is the foundation of a winning strategy." },
//   fulfillment: { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1100&q=80", alt: "Warehouse boxes for shipping", caption: "FBA gives sellers a structural Buy Box advantage — Amazon's algorithm treats its own logistics network as a top-tier fulfillment trust signal." },
// };

// // ─── ArticleImg ───────────────────────────────────────────────────────────────
// interface ArticleImgProps { src: string; alt: string; caption?: string; }
// function ArticleImg({ src, alt, caption }: ArticleImgProps) {
//   const [loaded, setLoaded] = useState(false);
//   return (
//     <figure className="article-img-wrap">
//       {!loaded && <div className="img-shimmer" />}
//       <img src={src} alt={alt} onLoad={() => setLoaded(true)} style={{ width: "100%", display: loaded ? "block" : "none", objectFit: "cover", maxHeight: 400 }} />
//       {caption && <figcaption className="img-caption">{caption}</figcaption>}
//     </figure>
//   );
// }

// // ─── Main Component ────────────────────────────────────────────────────────────
// export default function AmazonBuyBoxArticle() {
//   const [, setLocation] = useLocation();
//   const [activeSection, setActiveSection]     = useState("what-is");
//   const [scrollPct, setScrollPct]             = useState(0);
//   const [tocOpen, setTocOpen]                 = useState(false);
//   const [openFaq, setOpenFaq]                 = useState<number | null>(null);
//   const [isMenuOpen, setIsMenuOpen]           = useState(false);
//   const [scrolled, setScrolled]               = useState(false);
//   const [isDarkMode, setIsDarkMode]           = useState(false);
//   const [activeDropdown, setActiveDropdown]   = useState<string | null>(null);
//   const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Dark mode
//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", isDarkMode);
//   }, [isDarkMode]);

//   // Scroll effects
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
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setActiveDropdown(null);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const go = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
//     setTocOpen(false);
//   };

//   const handleMenuItemClick = (item: MenuItemWithBadge) => {
//     if (item.route) { setLocation(item.route); setActiveDropdown(null); setIsMenuOpen(false); }
//   };

//   const toggleMobileMenu = (name: string) => setMobileActiveMenu(prev => prev === name ? null : name);

//   const scrollToSection = (sectionId: string) => {
//     setLocation("/");
//     setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
//   };

//   // Reusable desktop dropdown
//   const DesktopDropdown = ({ label, menuKey, accent = "purple" }: { label: string; menuKey: keyof NavigationMenu; accent?: "purple" | "orange" }) => {
//     const items = navigationMenu[menuKey];
//     const isActive = activeDropdown === label;
//     const accentCls = accent === "orange"
//       ? "text-orange-600 dark:text-orange-500 hover:text-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900/20"
//       : "text-gray-700 dark:text-gray-300 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20";
//     const dropHoverCls = accent === "orange"
//       ? "hover:bg-orange-50 dark:hover:bg-orange-900/20 group-hover:text-orange-600"
//       : "hover:bg-purple-50 dark:hover:bg-purple-900/20 group-hover:text-purple-600";
//     const iconCls = accent === "orange" ? "text-orange-600 dark:text-orange-400" : "text-purple-600 dark:text-purple-400";

//     return (
//       <div className="relative">
//         <button
//           onMouseEnter={() => setActiveDropdown(label)}
//           className={`px-3 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1 ${isActive ? (accent === "orange" ? "text-orange-600 font-semibold" : "text-purple-600 font-semibold") : accentCls}`}
//         >
//           {label}
//           <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isActive ? "rotate-180" : ""}`} />
//         </button>
//         {isActive && (
//           <div
//             onMouseLeave={() => setActiveDropdown(null)}
//             className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 z-50"
//           >
//             {items.map((item, i) => (
//               <button
//                 key={i}
//                 onClick={() => handleMenuItemClick(item)}
//                 className={`w-full px-4 py-3 text-left transition-colors flex items-center gap-3 group ${dropHoverCls}`}
//               >
//                 <span className={`${iconCls} group-hover:scale-110 transition-transform`}>{item.icon}</span>
//                 <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">{item.name}</span>
//                 {item.badge && (
//                   <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>
//                 )}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">

//       {/* ── Global styles ─────────────────────────────────────────────────────── */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
//         *, *::before, *::after { box-sizing: border-box; }
//         html { scroll-behavior: smooth; }

//         @keyframes imgShimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }

//         /* progress */
//         .read-progress { position: fixed; top: 80px; left: 0; height: 3px; background: linear-gradient(90deg,#f97316,#ef4444); z-index: 200; transition: width .1s linear; border-radius: 0 2px 2px 0; }

//         /* article layout */
//         .article-layout { max-width: 1200px; margin: 0 auto; padding: 48px 24px 80px; display: grid; grid-template-columns: 240px 1fr; gap: 48px; align-items: start; }
//         @media(max-width:1024px){ .article-layout { grid-template-columns: 200px 1fr; gap: 32px; } }
//         @media(max-width:768px){ .article-layout { grid-template-columns: 1fr; padding: 24px 16px 60px; } }

//         /* toc sidebar */
//         .toc-sidebar { position: sticky; top: 96px; background: #fff; border: 1px solid #e5e7eb; border-radius: 16px; padding: 24px; box-shadow: 0 2px 12px rgba(0,0,0,.05); }
//         .dark .toc-sidebar { background: #111827; border-color: #1f2937; }
//         @media(max-width:768px){ .toc-sidebar { display: none; } }

//         /* mobile toc */
//         .mobile-toc-btn { display: none; width: 100%; background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; font-family: 'Sora',sans-serif; font-size: 14px; font-weight: 600; color: #111; cursor: pointer; align-items: center; justify-content: space-between; margin-bottom: 16px; }
//         .dark .mobile-toc-btn { background: #111827; border-color: #1f2937; color: #f9fafb; }
//         @media(max-width:768px){ .mobile-toc-btn { display: flex; } }
//         .mobile-toc-panel { display: none; background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; margin-bottom: 24px; }
//         .dark .mobile-toc-panel { background: #111827; border-color: #1f2937; }
//         .mobile-toc-panel.open { display: block; }

//         /* article body */
//         .article-body { font-family: 'Lora', serif; font-size: clamp(15px,2vw,17px); line-height: 1.8; color: #374151; }
//         .dark .article-body { color: #d1d5db; }
//         .article-body h2 { font-family: 'Sora',sans-serif; font-size: clamp(20px,3vw,28px); font-weight: 800; color: #111; letter-spacing: -.4px; margin: 52px 0 16px; line-height: 1.25; }
//         .dark .article-body h2 { color: #f9fafb; }
//         .article-body h3 { font-family: 'Sora',sans-serif; font-size: clamp(16px,2vw,19px); font-weight: 700; color: #111; margin: 32px 0 10px; }
//         .dark .article-body h3 { color: #f3f4f6; }
//         .article-body p { margin-bottom: 20px; }
//         .article-body ul,.article-body ol { padding-left: 22px; margin-bottom: 20px; }
//         .article-body li { margin-bottom: 8px; }
//         .article-body strong { font-weight: 700; color: #111; }
//         .dark .article-body strong { color: #f9fafb; }

//         /* callout boxes */
//         .callout { border-radius: 12px; padding: 18px 20px; margin: 28px 0; }
//         .callout.pro  { background: #f0fdf4; border: 1px solid #86efac; border-left: 4px solid #16a34a; }
//         .callout.warn { background: #fffbeb; border: 1px solid #fcd34d; border-left: 4px solid #d97706; }
//         .callout.info { background: #eff6ff; border: 1px solid #93c5fd; border-left: 4px solid #2563eb; }
//         .dark .callout.pro  { background: #052e16; border-color: #166534; }
//         .dark .callout.warn { background: #1c1507; border-color: #78350f; }
//         .dark .callout.info { background: #0c1a2e; border-color: #1e3a5f; }
//         .callout-label { font-family:'Sora',sans-serif; font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase; margin-bottom:8px; }
//         .callout.pro  .callout-label { color:#16a34a; }
//         .callout.warn .callout-label { color:#d97706; }
//         .callout.info .callout-label { color:#2563eb; }
//         .callout-text { font-family:'Lora',serif; font-size:15px; color:#374151; }
//         .dark .callout-text { color:#d1d5db; }

//         /* inline cta */
//         .inline-cta { background: linear-gradient(135deg,#fff7ed,#ffedd5); border: 1px solid #fed7aa; border-radius: 16px; padding: clamp(20px,4vw,28px) clamp(16px,4vw,32px); margin: 40px 0; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
//         .dark .inline-cta { background: linear-gradient(135deg,#1c0a00,#2d1500); border-color: #7c2d12; }
//         .inline-cta h4 { font-family:'Sora',sans-serif; font-size:16px; font-weight:800; color:#111; margin-bottom:4px; }
//         .dark .inline-cta h4 { color:#f9fafb; }
//         .inline-cta p  { font-family:'Sora',sans-serif; font-size:14px; color:#6b7280; margin:0; }
//         .dark .inline-cta p { color:#9ca3af; }

//         /* data table */
//         .dt-wrap { overflow-x: auto; margin: 24px 0; border-radius: 12px; border: 1px solid #e5e7eb; }
//         .dark .dt-wrap { border-color: #1f2937; }
//         table.dt { width: 100%; border-collapse: collapse; font-family:'Sora',sans-serif; font-size:13px; min-width: 520px; }
//         table.dt th { background:#111827; color:white; padding:12px 16px; text-align:left; font-size:11px; letter-spacing:.5px; text-transform:uppercase; }
//         table.dt td { padding:12px 16px; border-bottom:1px solid #e5e7eb; color:#374151; vertical-align:middle; }
//         .dark table.dt td { border-color:#1f2937; color:#d1d5db; }
//         table.dt tr:last-child td { border-bottom:none; }
//         table.dt tr:nth-child(even) td { background:#f9fafb; }
//         .dark table.dt tr:nth-child(even) td { background:#0f172a; }
//         .bg { background:#dcfce7; color:#15803d; font-weight:700; padding:3px 10px; border-radius:20px; font-size:11px; white-space:nowrap; }
//         .bo { background:#fff7ed; color:#ea580c; font-weight:700; padding:3px 10px; border-radius:20px; font-size:11px; white-space:nowrap; }
//         .br { background:#fef2f2; color:#dc2626; font-weight:700; padding:3px 10px; border-radius:20px; font-size:11px; white-space:nowrap; }

//         /* steps */
//         .step { display:flex; gap:16px; margin-bottom:24px; }
//         .step-num { flex-shrink:0; width:36px; height:36px; background:linear-gradient(135deg,#f97316,#ef4444); color:white; font-family:'Sora',sans-serif; font-weight:800; font-size:15px; border-radius:50%; display:flex; align-items:center; justify-content:center; margin-top:3px; }
//         .step-content h4 { font-family:'Sora',sans-serif; font-size:15px; font-weight:700; color:#111; margin-bottom:6px; }
//         .dark .step-content h4 { color:#f9fafb; }
//         .step-content p { font-size:15px; margin:0; }

//         /* related cards */
//         .related-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; margin-top:20px; }
//         @media(max-width:540px){ .related-grid { grid-template-columns:1fr; } }
//         .related-card { background:#fff; border:1px solid #e5e7eb; border-radius:14px; padding:18px; cursor:pointer; transition:all .2s; }
//         .dark .related-card { background:#111827; border-color:#1f2937; }
//         .related-card:hover { border-color:#f97316; box-shadow:0 4px 16px rgba(249,115,22,.12); transform:translateY(-2px); }

//         /* faq */
//         .faq-item { border:1px solid #e5e7eb; border-radius:12px; margin-bottom:12px; overflow:hidden; background:#fff; transition:border-color .2s; }
//         .dark .faq-item { background:#111827; border-color:#1f2937; }
//         .faq-item.open { border-color:#f97316; }
//         .faq-q { display:flex; justify-content:space-between; align-items:center; padding:18px 20px; cursor:pointer; font-family:'Sora',sans-serif; font-size:clamp(13px,2vw,15px); font-weight:600; color:#111; gap:12px; }
//         .dark .faq-q { color:#f9fafb; }
//         .faq-icon { flex-shrink:0; width:24px; height:24px; background:#fff7ed; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#f97316; font-size:16px; font-weight:700; transition:transform .2s; }
//         .faq-icon.open { transform:rotate(45deg); background:#f97316; color:white; }
//         .faq-a { font-family:'Lora',serif; font-size:15px; line-height:1.7; color:#374151; padding:0 20px 18px; }
//         .dark .faq-a { color:#d1d5db; }

//         /* article images */
//         .article-img-wrap { margin:36px 0; border-radius:14px; overflow:hidden; border:1px solid #e5e7eb; background:#f9fafb; box-shadow:0 4px 20px rgba(0,0,0,.06); }
//         .dark .article-img-wrap { border-color:#1f2937; background:#111827; }
//         .img-shimmer { height:300px; background:linear-gradient(90deg,#f3f4f6 25%,#e5e7eb 50%,#f3f4f6 75%); background-size:400% 100%; animation:imgShimmer 1.6s ease infinite; }
//         .img-caption { padding:10px 16px 12px; font-family:'Sora',sans-serif; font-size:12px; color:#9ca3af; line-height:1.5; border-top:1px solid #e5e7eb; background:#f9fafb; }
//         .dark .img-caption { background:#111827; border-color:#1f2937; }

//         /* stat strip */
//         .stat-strip { display:flex; flex-wrap:wrap; border:1px solid #e5e7eb; border-radius:14px; overflow:hidden; margin-top:32px; }
//         .dark .stat-strip { border-color:#1f2937; }
//         .stat-item { flex:1; min-width:140px; padding:16px; text-align:center; border-right:1px solid #e5e7eb; }
//         .dark .stat-item { border-color:#1f2937; }
//         .stat-item:last-child { border-right:none; }
//         @media(max-width:480px){ .stat-item { min-width:50%; } }

//         /* hero */
//         .article-hero { background:#fff; border-bottom:1px solid #e5e7eb; padding: clamp(32px,5vw,56px) clamp(16px,4vw,32px) 0; }
//         .dark .article-hero { background:#0f172a; border-color:#1f2937; }
//         .hero-inner { max-width:820px; margin:0 auto; padding-bottom:40px; }

//         /* final cta */
//         .final-cta-block { background:linear-gradient(135deg,#111827,#1f2937); border-radius:20px; padding:clamp(32px,6vw,56px) clamp(24px,5vw,48px); text-align:center; margin:60px 0 0; }

//         /* toc link */
//         .toc-link { display:block; font-size:13px; font-weight:500; color:#6b7280; padding:7px 10px; border-radius:8px; cursor:pointer; border:none; background:none; text-align:left; width:100%; transition:all .15s; margin-bottom:2px; line-height:1.4; }
//         .toc-link:hover { background:#fff7ed; color:#ea580c; }
//         .toc-link.active { background:#fff7ed; color:#ea580c; font-weight:700; border-left:3px solid #f97316; padding-left:8px; }
//         .dark .toc-link { color:#9ca3af; }
//         .dark .toc-link:hover,.dark .toc-link.active { background:#1c0a00; color:#fb923c; }

//         /* scrollbar hide for nav */
//         .scrollbar-hide::-webkit-scrollbar { display:none; }
//         .scrollbar-hide { -ms-overflow-style:none; scrollbar-width:none; }
//       `}</style>

//       {/* ── Reading progress bar ─────────────────────────────────────────────── */}
//       <div className="read-progress" style={{ width: `${scrollPct}%` }} />

//       {/* ═══════════════════════════════════════════════════════════════════════
//           NAV — exact copy from ExpertBlog
//       ═══════════════════════════════════════════════════════════════════════ */}
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg" : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">

//             {/* Logo + Back */}
//             <div className="flex items-center space-x-1">
//               <button
//                 onClick={() => setLocation("/resources/expert-blog")}
//                 className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
//               >
//                 <ArrowLeft className="w-4 h-4" />
//                 <span className="hidden sm:inline">Back</span>
//               </button>
//               <div className="flex items-center space-x-1 group cursor-pointer" onClick={() => setLocation("/")}>
//                 <div className="relative">
//                   <img src="/logo.png" alt="Insydz Logo" className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain" />
//                   <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
//                 </div>
//                 <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//               </div>
//             </div>

//             {/* Desktop nav */}
//             <div className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
//               <button onClick={() => setLocation("/")} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all">Home</button>
//               <DesktopDropdown label="Solutions"  menuKey="Solutions" />
//               <DesktopDropdown label="Use Cases"  menuKey="Use Cases" />
//               <DesktopDropdown label="Features"   menuKey="Features" />
//               <button onClick={() => setLocation("/pricing")} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all">Pricing</button>
//               <DesktopDropdown label="Free Tools" menuKey="Free Tools" />
//               <DesktopDropdown label="Compare"    menuKey="Compare" />
//               <DesktopDropdown label="Resources"  menuKey="Resources" accent="orange" />
//               <DesktopDropdown label="About"      menuKey="About" />

//               <Button onClick={() => setLocation("/login")} className="ml-2 text-sm bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
//                 Login
//               </Button>
//               <button className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" onClick={() => setIsDarkMode(!isDarkMode)}>
//                 {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
//               </button>
//             </div>

//             {/* Mobile toggle */}
//             <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* ── Mobile menu ── */}
//         {isMenuOpen && (
//           <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 max-h-[calc(100vh-5rem)] overflow-y-auto">
//             <div className="px-4 py-4 space-y-2">
//               <button onClick={() => { setLocation("/resources/expert-blog"); setIsMenuOpen(false); }} className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium">
//                 <ArrowLeft className="w-4 h-4" /> Back to Blog
//               </button>

//               {/* Mobile accordion items */}
//               {(
//                 [
//                   ["Solutions",  "Solutions",  "purple"],
//                   ["Use Cases",  "Use Cases",  "purple"],
//                   ["Features",   "Features",   "purple"],
//                   ["Free Tools", "Free Tools", "purple"],
//                   ["Compare",    "Compare",    "purple"],
//                   ["Resources",  "Resources",  "orange"],
//                   ["About",      "About",      "purple"],
//                 ] as [string, keyof NavigationMenu, string][]
//               ).map(([label, key, accent]) => (
//                 <div key={label}>
//                   <button
//                     onClick={() => toggleMobileMenu(label)}
//                     className={`flex items-center justify-between w-full px-4 py-2 rounded-lg font-medium ${accent === "orange" ? "text-orange-600 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-semibold" : "text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"}`}
//                   >
//                     {label}
//                     <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === label ? "rotate-180" : ""}`} />
//                   </button>
//                   {mobileActiveMenu === label && (
//                     <div className="ml-4 mt-1 space-y-1">
//                       {navigationMenu[key].map((item, i) => (
//                         <button key={i} onClick={() => handleMenuItemClick(item)} className={`flex items-center gap-2 w-full px-4 py-2 text-sm rounded-lg ${accent === "orange" ? "text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-orange-900/20" : "text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20"}`}>
//                           {item.icon} {item.name}
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

//       {/* ═══════════════════════════════════════════════════════════════════════
//           HERO
//       ═══════════════════════════════════════════════════════════════════════ */}
//       <section className="article-hero" style={{ paddingTop: 100 }}>
//         <div className="hero-inner">
//           {/* Breadcrumb */}
//           <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6 flex-wrap">
//             <button onClick={() => setLocation("/")} className="hover:text-orange-500 transition-colors">Home</button>
//             <span>/</span>
//             <button onClick={() => setLocation("/resources/expert-blog")} className="hover:text-orange-500 transition-colors">Expert Blog</button>
//             <span>/</span>
//             <span className="text-orange-500 font-medium">Amazon Buy Box</span>
//           </div>

//           {/* Category tag */}
//           <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
//             <div className="w-2 h-2 bg-orange-500 rounded-full" />
//             Competitor Tracking
//           </div>

//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white mb-5">
//             How to <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Win the Amazon Buy Box</span>: A Data-Driven Strategy for Indian Sellers
//           </h1>

//           <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-7" style={{ fontFamily: "'Lora', serif" }}>
//             Master the Buy Box algorithm with proven strategies based on 10,000+ seller data points. Learn how pricing, fulfillment, and ratings impact your eligibility — with an India-first lens.
//           </p>

//           {/* Meta row */}
//           <div className="flex flex-wrap items-center gap-4 pb-7 border-b border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
//             <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><strong className="text-gray-800 dark:text-gray-200">Insydz Research Team</strong></div>
//             <span className="text-gray-300 dark:text-gray-700">·</span>
//             <span>Last updated: <strong className="text-gray-700 dark:text-gray-300">March 2026</strong></span>
//             <span className="text-gray-300 dark:text-gray-700">·</span>
//             <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><strong className="text-gray-700 dark:text-gray-300">11 min read</strong></div>
//           </div>

//           {/* Stat strip */}
//           <div className="stat-strip">
//             {[["10,000+","Seller data points"],["82%","Sales via Buy Box"],["3–5%","Avg price gap to win"],["4.7★","Min seller rating"]].map(([num, lbl]) => (
//               <div className="stat-item" key={num}>
//                 <div className="text-2xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">{num}</div>
//                 <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">{lbl}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Hero image */}
//         <div style={{ maxWidth: 820, margin: "0 auto", borderTop: "1px solid #e5e7eb" }}>
//           <ArticleImg {...IMAGES.hero} />
//         </div>
//       </section>

//       {/* ═══════════════════════════════════════════════════════════════════════
//           ARTICLE LAYOUT
//       ═══════════════════════════════════════════════════════════════════════ */}
//       <div className="article-layout">

//         {/* ── Sidebar TOC ── */}
//         <aside className="toc-sidebar">
//           <div className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">Table of Contents</div>
//           {TOC.map(t => (
//             <button key={t.id} className={`toc-link${activeSection === t.id ? " active" : ""}`} onClick={() => go(t.id)}>{t.label}</button>
//           ))}
//           <div className="mt-5 pt-5 border-t border-gray-200 dark:border-gray-800">
//             <button
//               onClick={() => setLocation("/login")}
//               className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-sm font-bold py-2.5 rounded-xl transition-all"
//             >
//               👉 Start Free with Insydz
//             </button>
//             <p className="text-center text-xs text-gray-400 mt-2">No credit card required</p>
//           </div>
//         </aside>

//         {/* ── Article body ── */}
//         <main>
//           {/* Mobile TOC toggle */}
//           <button className="mobile-toc-btn" onClick={() => setTocOpen(!tocOpen)}>
//             📋 Table of Contents <span>{tocOpen ? "▲" : "▼"}</span>
//           </button>
//           <div className={`mobile-toc-panel${tocOpen ? " open" : ""}`}>
//             {TOC.map(t => <button key={t.id} className="toc-link" style={{ display: "block", marginBottom: 4 }} onClick={() => go(t.id)}>{t.label}</button>)}
//           </div>

//           <article className="article-body">

//             <p>Most Indian sellers don't lose the Buy Box because of bad products. They lose it because they're treating Amazon like a static storefront — instead of a dynamic, algorithmic marketplace that continuously reallocates visibility.</p>
//             <p>The Buy Box on Amazon India isn't just a button. It's the difference between being a category leader and being invisible. With competition intensifying across electronics, home goods, and FMCG on both Amazon and Flipkart, understanding exactly how the algorithm works — and how to consistently position yourself ahead of it — is now a non-negotiable skill.</p>
//             <p>This guide breaks down every Buy Box factor with data from 10,000+ Indian seller accounts, and gives you an actionable framework to win — and keep — it.</p>

//             {/* S1 */}
//             <h2 id="what-is">What Is the Amazon Buy Box?</h2>
//             <p>The Buy Box is the primary purchase interface on an Amazon product detail page — the white box on the right side containing "Add to Cart" and "Buy Now" buttons. When multiple third-party sellers offer the same ASIN, Amazon dynamically assigns the Buy Box to one seller at a time based on a combination of performance signals.</p>

//             <div className="callout info">
//               <div className="callout-label">📊 Example Insight</div>
//               <div className="callout-text">On a competitive ASIN like a boAt speaker listing with 12 active sellers, the Buy Box rotates among the top 3 eligible sellers based on price, FBA status, and metrics — often switching 4–8 times per day.</div>
//             </div>

//             <ArticleImg {...IMAGES.mobile} />

//             <p>Sellers who don't own the Buy Box can still be found under "Other Sellers on Amazon" — but conversion rates drop by over 70% there. The Buy Box is where intent converts to purchase.</p>

//             <h3>Buy Box vs. Suppressed Listing</h3>
//             <p>A listing can lose its Buy Box entirely if no seller meets Amazon's minimum thresholds — called a "suppressed" Buy Box. In this state, customers must click through to compare sellers manually. This often happens with new ASINs, flagged accounts, or pricing anomalies.</p>

//             {/* S2 */}
//             <h2 id="why-matters">Why It Matters for Indian Sellers</h2>
//             <p>In India's e-commerce landscape, the Buy Box stakes are higher than in most other markets. Here's why:</p>
//             <ul>
//               <li><strong>Price sensitivity is extreme.</strong> Indian shoppers are highly price-conscious. Even a ₹20–₹50 difference pushes buyers to alternate sellers — Buy Box rotation is more aggressive here than in the US or Europe.</li>
//               <li><strong>Mobile-first behaviour.</strong> Over 78% of Amazon India orders come from mobile. On mobile, there's no "Other Sellers" sidebar — there's just the Buy Box. If you don't have it, you don't exist on mobile.</li>
//               <li><strong>Flipkart dynamic creates cross-platform pricing pressure.</strong> Sellers price-match across Amazon and Flipkart simultaneously. If your Amazon price is ₹100 higher than Flipkart, Amazon may suppress your Buy Box for being "not competitively priced."</li>
//               <li><strong>Festive season concentration.</strong> During Big Billion Days and Great Indian Festival, 40–60% of annual sales happen in 4–7 days. Missing the Buy Box during these windows is a category-level loss.</li>
//             </ul>

//             <ArticleImg {...IMAGES.festive} />

//             <div className="callout warn">
//               <div className="callout-label">⚠️ Common Mistake</div>
//               <div className="callout-text">Setting a static price at the start of a festive sale and not monitoring Buy Box rotation. Competitors reprice in real-time; you lose the box within hours and never recover during the peak window.</div>
//             </div>

//             {/* S3 */}
//             <h2 id="key-factors">Key Buy Box Ranking Factors</h2>
//             <p>Amazon does not publish the Buy Box algorithm. But through analysis of 10,000+ Indian seller accounts, we've identified the primary signals and their approximate weight:</p>

//             <div className="dt-wrap">
//               <table className="dt">
//                 <thead><tr><th>Factor</th><th>Weight</th><th>Your Target</th><th>Status</th></tr></thead>
//                 <tbody>
//                   {([
//                     ["Fulfillment Method",             "Very High", "FBA or SFP",           "g"],
//                     ["Landed Price (Price + Shipping)", "Very High", "Within 2–5% of lowest","g"],
//                     ["Seller Rating",                  "High",      "≥ 4.7 stars",           "o"],
//                     ["Order Defect Rate (ODR)",         "High",      "< 1%",                  "o"],
//                     ["Late Shipment Rate",              "High",      "< 4%",                  "o"],
//                     ["Cancellation Rate",               "Medium",    "< 0.5%",                "o"],
//                     ["Response Time to Messages",       "Medium",    "< 24 hours",            "o"],
//                     ["Account Health Score",            "Medium",    "Good standing",         "o"],
//                     ["Feedback Count (volume)",         "Low",       "Higher = better",       "g"],
//                     ["Inventory Availability",          "Medium",    "In stock always",       "r"],
//                   ] as [string,string,string,string][]).map(([f,w,t,b]) => (
//                     <tr key={f}>
//                       <td><strong>{f}</strong></td><td>{w}</td><td>{t}</td>
//                       <td><span className={b==="g"?"bg":b==="o"?"bo":"br"}>{b==="g"?"Advantage":b==="o"?"Monitor":"Critical"}</span></td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <ArticleImg {...IMAGES.rating} />

//             <div className="callout pro">
//               <div className="callout-label">💡 Pro Tip</div>
//               <div className="callout-text">Fulfillment method is the single highest-weighted factor. FBA sellers get a structural advantage — Amazon treats its own logistics as a trust signal. FBM sellers need significantly better pricing and metrics to compete equally.</div>
//             </div>

//             <div className="inline-cta">
//               <div>
//                 <h4>Want to Apply This with Real Data?</h4>
//                 <p>Use Insydz to track competitors, monitor Buy Box ownership, pricing trends, and review insights for your ASINs.</p>
//               </div>
//               <button
//                 onClick={() => setLocation("/login")}
//                 className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all whitespace-nowrap"
//               >
//                 👉 Start Free
//               </button>
//             </div>

//             {/* S4 */}
//             <h2 id="step-by-step">Step-by-Step Buy Box Strategy</h2>
//             <ArticleImg {...IMAGES.pricing} />

//             <div>
//               {([
//                 ["Check Your Current Eligibility",  "Before optimising, confirm you're Buy Box eligible. Go to Seller Central → Inventory → Manage Inventory → look for the Buy Box column. New accounts and accounts with major policy violations may be ineligible regardless of pricing."],
//                 ["Audit Fulfillment Setup",          "If you're FBM, evaluate whether FBA makes sense for your top 5 ASINs. Even partial FBA adoption on high-velocity SKUs can dramatically improve Buy Box win rate. For sellers who need FBM, ensure you qualify for Seller Fulfilled Prime (SFP)."],
//                 ["Set a Competitive Pricing Band",   "Identify the current Buy Box price for each ASIN. Price within 2–5% below the current winner. Avoid going more than 8–10% below — Amazon may flag your listing as potentially suspicious or low-quality."],
//                 ["Fix Metric Red Flags First",       "No repricing strategy will work if your ODR is 3%, your late shipment rate is 8%, or you have active policy violations. Clean up account health before competing on price. These are hard gates, not soft signals."],
//                 ["Implement Dynamic Repricing",      "Manual repricing isn't scalable beyond 20–30 SKUs. Use algorithmic repricing with rules like 'Stay 3% below competitor, but not below ₹X margin floor.' Insydz provides pricing alerts that trigger before you lose the box."],
//                 ["Monitor Buy Box Rotation Daily",   "Track which competitor holds the Buy Box on your key ASINs, and at what price. During high-traffic periods (evenings, weekends, festive sales), check every 2–4 hours. Patterns reveal repricing strategies you can counter."],
//               ] as [string,string][]).map(([title, desc], i) => (
//                 <div className="step" key={i}>
//                   <div className="step-num">{i + 1}</div>
//                   <div className="step-content"><h4>{title}</h4><p>{desc}</p></div>
//                 </div>
//               ))}
//             </div>

//             {/* S5 */}
//             <h2 id="mistakes">Common Mistakes to Avoid</h2>
//             <ul>
//               <li><strong>Racing to the bottom on price.</strong> Cutting price aggressively kills margins without guaranteeing Buy Box ownership. Amazon weights multiple factors — price alone doesn't win if your metrics are weak.</li>
//               <li><strong>Ignoring mobile rendering.</strong> On mobile, the Buy Box is the entire purchase interface. Missing it means zero mobile conversion.</li>
//               <li><strong>Stockouts during festive periods.</strong> Running out of inventory is an instant Buy Box disqualification. FBA sellers should stock 3–4 weeks ahead of festive events.</li>
//               <li><strong>Neglecting response time.</strong> Slow response to buyer messages (over 24 hours) degrades your seller score — compounding over months, it costs Buy Box share.</li>
//               <li><strong>Identical pricing to the Buy Box holder.</strong> Price matching doesn't guarantee you win the rotation — you need slightly better pricing or better metrics to actually rotate in.</li>
//             </ul>

//             <div className="callout warn">
//               <div className="callout-label">⚠️ Common Mistake</div>
//               <div className="callout-text">Treating Buy Box optimisation as a one-time task. This is a continuous process. Competitor metrics change, Amazon updates its algorithm, and festive dynamics shift pricing daily. Set a weekly review cadence at minimum.</div>
//             </div>

//             {/* S6 */}
//             <h2 id="advanced">Advanced Strategies for High-Volume Sellers</h2>
//             <p>Once you've stabilised Buy Box win rate above 60–70% on core ASINs, these advanced tactics can push it further:</p>
//             <ul>
//               <li><strong>Time-based repricing.</strong> Amazon traffic peaks between 7–11 PM IST. Set pricing to be most aggressive during these windows while being more margin-protective at off-peak hours.</li>
//               <li><strong>ASIN-level Buy Box analysis.</strong> Identify which SKUs have 3+ active FBA competitors versus those where you're the only FBA seller — and allocate repricing resources accordingly.</li>
//               <li><strong>Bundling strategy.</strong> Create unique bundles to own a unique ASIN where you're the sole Buy Box holder by default. Especially effective in home goods and accessories.</li>
//               <li><strong>Pre-emptive festive inventory planning.</strong> Cross-reference Insydz trend data with your category to stock 25–40% more than normal on your top 10 ASINs before festive season. Competitors who stock out hand you their Buy Box share.</li>
//             </ul>

//             <div className="callout pro">
//               <div className="callout-label">💡 Pro Tip</div>
//               <div className="callout-text">Sellers who win the Buy Box consistently during festive events often do so because they pre-positioned 6–8 weeks earlier — not because they reacted faster during the sale.</div>
//             </div>

//             {/* S7 */}
//             <h2 id="tools">Tools & Data Sources</h2>
//             <p>Winning the Buy Box at scale requires data, not gut feel. Here's the toolset serious Indian sellers use:</p>
//             <ArticleImg {...IMAGES.fulfillment} />

//             <div className="dt-wrap">
//               <table className="dt">
//                 <thead><tr><th>Tool / Method</th><th>What It Tracks</th><th>Best For</th></tr></thead>
//                 <tbody>
//                   {([
//                     ["Insydz",                       "Buy Box ownership, competitor pricing, review signals, festive trends", "Indian marketplace sellers (Amazon + Flipkart)"],
//                     ["Amazon Seller Central Reports", "Your own ODR, defect rate, late shipments",                           "Self-monitoring account health"],
//                     ["Manual ASIN Monitoring",        "Real-time Buy Box holder check",                                      "Small catalogues (< 20 SKUs)"],
//                     ["Repricing Software",            "Auto-adjust price within set rules",                                  "Sellers with 50+ SKUs"],
//                     ["Insydz WhatsApp Alerts",        "Instant Buy Box loss notifications",                                  "High-velocity sellers needing real-time response"],
//                   ] as [string,string,string][]).map(([t,w,b]) => (
//                     <tr key={t}><td><strong>{t}</strong></td><td>{w}</td><td>{b}</td></tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="inline-cta">
//               <div>
//                 <h4>Track Buy Box in Real-Time</h4>
//                 <p>Insydz monitors your ASINs and alerts you the moment a competitor takes your Buy Box — so you can respond before you lose sales.</p>
//               </div>
//               <button
//                 onClick={() => setLocation("/login")}
//                 className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all whitespace-nowrap"
//               >
//                 👉 Start Free
//               </button>
//             </div>

//             {/* Related */}
//             <h2 style={{ marginTop: 48 }}>Related Guides</h2>
//             <div className="related-grid">
//               {[
//                 { title: "Product Research Blueprint", tag: "Product Research", time: "15 min", route: "/resources/expert-blog" },
//                 { title: "Competitor Price Tracking: Advanced Tactics", tag: "Competitor Tracking", time: "9 min", route: "/resources/expert-blog" },
//                 { title: "Dynamic Pricing Strategy", tag: "Pricing Strategy", time: "10 min", route: "/resources/expert-blog" },
//                 { title: "Festive Season Q4 2025 Trends", tag: "Festive Trends", time: "11 min", route: "/resources/expert-blog" },
//               ].map(r => (
//                 <div className="related-card" key={r.title} onClick={() => setLocation(r.route)}>
//                   <div className="text-xs font-bold uppercase tracking-wider text-orange-500 mb-2">{r.tag}</div>
//                   <div className="font-bold text-gray-900 dark:text-white text-sm leading-snug mb-2">{r.title}</div>
//                   <div className="flex items-center gap-1 text-xs text-gray-400"><Clock className="w-3 h-3" /> {r.time}</div>
//                 </div>
//               ))}
//             </div>

//             {/* FAQ */}
//             <h2 id="faq">Frequently Asked Questions</h2>
//             {FAQS.map((faq, i) => (
//               <div className={`faq-item${openFaq === i ? " open" : ""}`} key={i}>
//                 <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
//                   {faq.q}
//                   <div className={`faq-icon${openFaq === i ? " open" : ""}`}>+</div>
//                 </div>
//                 {openFaq === i && <div className="faq-a">{faq.a}</div>}
//               </div>
//             ))}

//             {/* Conclusion */}
//             <h2 id="conclusion">Final Thoughts</h2>
//             <p>Winning the Amazon Buy Box on India's competitive marketplaces isn't a hack — it's a system. Fulfillment quality, pricing discipline, metric hygiene, and real-time monitoring working together consistently produce results.</p>
//             <p>Sellers who treat Buy Box as a set-and-forget metric lose it within days. Sellers who track it continuously, reprice intelligently, and watch competitor moves in real-time keep it — and convert it into compounding revenue growth quarter over quarter.</p>
//             <p>The data is clear: <strong>Buy Box ownership is the single highest-leverage variable in your Amazon India P&L.</strong> Start treating it that way.</p>

//             {/* Final CTA */}
//             <div className="final-cta-block">
//               <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Ready to Make Data-Driven Decisions?</h2>
//               <p className="text-gray-400 mb-8 text-base md:text-lg" style={{ fontFamily: "'Lora', serif" }}>Monitor Buy Box ownership, competitor pricing, and review insights — all built for Indian marketplace sellers.</p>
//               <button
//                 onClick={() => setLocation("/login")}
//                 className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-base px-10 py-4 rounded-full shadow-xl transition-all transform hover:scale-105"
//               >
//                 <Zap className="w-5 h-5 inline mr-2" />
//                 Start Free with Insydz
//               </button>
//               <p className="text-gray-500 text-xs mt-4">No credit card required · Amazon India & Flipkart supported</p>
//             </div>

//           </article>
//         </main>
//       </div>

//       {/* ═══════════════════════════════════════════════════════════════════════
//           FOOTER — exact copy from ExpertBlog
//       ═══════════════════════════════════════════════════════════════════════ */}
//       <footer className="bg-[#0a0f1e] text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-14">

//             {/* Brand */}
//             <div className="col-span-2 md:col-span-3 lg:col-span-1">
//               <div className="flex items-center space-x-3 mb-4">
//                 <img src="/logo.png" alt="Insydz Logo" className="w-10 h-10 rounded-xl object-contain" />
//                 <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Insydz</span>
//               </div>
//               <p className="text-gray-400 text-sm leading-relaxed mb-6">AI-powered e-commerce intelligence for Indian marketplace sellers.</p>
//               <button onClick={() => setLocation("/login")} className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all transform hover:scale-105 shadow-lg">Start Free →</button>
//               <div className="flex space-x-3 mt-6">
//                 {[
//                   { title: "Facebook",  href: "https://www.facebook.com/profile.php?id=61586202582209", icon: <Facebook className="w-4 h-4" /> },
//                   { title: "Twitter",   href: "https://x.com/growwithinsydz", icon: <Twitter className="w-4 h-4" /> },
//                   { title: "Instagram", href: "https://www.instagram.com/growwithinsydz/", icon: <Instagram className="w-4 h-4" /> },
//                   { title: "LinkedIn",  href: "https://www.linkedin.com/company/insydz/?viewAsMember=true", icon: <Linkedin className="w-4 h-4" /> },
//                 ].map(s => (
//                   <a key={s.title} title={s.title} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">{s.icon}</a>
//                 ))}
//               </div>
//             </div>

//             {/* Solutions */}
//             <div>
//               <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Solutions</h4>
//               <ul className="space-y-3">
//                 {[["Amazon Sellers","/solutions/amazon-sellers"],["Flipkart Sellers","/solutions/flipkart-sellers"],["Agencies","/solutions/ecommerce-agencies"],["Brand Managers","/solutions/brand-managers"]].map(([l,r])=>(
//                   <li key={l}><button onClick={() => setLocation(r)} className="text-sm text-gray-400 hover:text-white transition-colors text-left">{l}</button></li>
//                 ))}
//               </ul>
//             </div>

//             {/* Product */}
//             <div>
//               <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Product</h4>
//               <ul className="space-y-3">
//                 {[["Features","/features/competitor-price-tracking-feature"],["Pricing","/pricing"],["Festive Trends","/features/festive-trend-feature"],["Compare","/compare/insydzvshelium"]].map(([l,r])=>(
//                   <li key={l}><button onClick={() => setLocation(r)} className="text-sm text-gray-400 hover:text-white transition-colors text-left">{l}</button></li>
//                 ))}
//               </ul>
//             </div>

//             {/* Resources */}
//             <div>
//               <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Resources</h4>
//               <ul className="space-y-3">
//                 {[["Blog","/resources/expert-blog"],["E-commerce Guides","/resources/guides"],["Video Tutorials","/resources/videos"],["Case Studies","/resources/case-studies"],["Free Tools","/free-tools/free-amazon-product-analyzer"]].map(([l,r])=>(
//                   <li key={l}><button onClick={() => setLocation(r)} className="text-sm text-gray-400 hover:text-white transition-colors text-left">{l}</button></li>
//                 ))}
//               </ul>
//             </div>

//             {/* Company */}
//             <div>
//               <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Company</h4>
//               <ul className="space-y-3">
//                 {[["About",() => scrollToSection("About")],["Our Vision",() => setLocation("/about/our-vision")],["Careers",() => setLocation("/about/careers")],["Contact",() => setLocation("/about/careers")]].map(([l,a])=>(
//                   <li key={l as string}><button onClick={a as ()=>void} className="text-sm text-gray-400 hover:text-white transition-colors text-left">{l as string}</button></li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
//             <p className="text-gray-500 text-sm">© 2025 <span className="text-purple-400 font-semibold">Insydz</span>. All rights reserved. Designed & Developed in India 🇮🇳</p>
//             <div className="flex items-center gap-3 text-sm text-gray-500">
//               <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
//               <span className="text-gray-700">·</span>
//               <a href="/terms-service" className="hover:text-white transition-colors">Terms of Service</a>
//               <span className="text-gray-700">·</span>
//               <a href="/privacy-policy" className="hover:text-white transition-colors">Data Disclaimer</a>
//             </div>
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

// // ─── Navigation data ───────────────────────────────────────────────────────────
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
//     { name: "Track Competitor Prices", icon: <TrendingUp className="w-4 h-4" />, route: "/use-cases/track-competitor-prices" },
//     { name: "Find Profitable Products", icon: <Target className="w-4 h-4" />, route: "/use-cases/find-profitable-products" },
//     { name: "Analyze Customer Reviews", icon: <MessageCircle className="w-4 h-4" />, route: "/use-cases/analyze-customer-reviews" },
//     { name: "Improve Amazon & Flipkart SEO", icon: <Search className="w-4 h-4" />, route: "/use-cases/improve-seo" },
//     { name: "Avoid Stockouts & Missed Sales", icon: <Package className="w-4 h-4" />, route: "/use-cases/avoid-stockouts" },
//   ],
//   Features: [
//     { name: "Competitor Price Tracking", icon: <DollarSign className="w-4 h-4" />, route: "/features/competitor-price-tracking-feature" },
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
//     { name: "Free Competitor Price Checker", icon: <DollarSign className="w-4 h-4" />, route: "/free-tools/free-competitor-price-checker" },
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

// // ─── TOC ──────────────────────────────────────────────────────────────────────
// const TOC = [
//   { id: "what-is",        label: "What is Price Tracking?" },
//   { id: "why-critical",   label: "Why It's Critical for India" },
//   { id: "how-it-works",   label: "How It Works (5 Steps)" },
//   { id: "comparison",     label: "Tracking Methods Compared" },
//   { id: "mistakes",       label: "5 Common Mistakes" },
//   { id: "best-practices", label: "Best Practices & Execution" },
//   { id: "best-tools",     label: "Best Tools for India" },
//   { id: "faq",            label: "FAQs" },
//   { id: "conclusion",     label: "Final Thoughts" },
// ];

// // ─── FAQ data ─────────────────────────────────────────────────────────────────
// const FAQS = [
//   {
//     q: "What is the best Amazon competitor price tracking tool for India?",
//     a: "For Indian sellers, the best tool covers Amazon.in AND Flipkart/Meesho, sends WhatsApp alerts, and fits within the ₹500–3,000/month budget range that Indian SMBs can justify. Insydz is purpose-built for this — it's the only platform offering AI-powered price intelligence for all three major Indian marketplaces at this price point.",
//   },
//   {
//     q: "How often does a price tracking tool check competitor prices?",
//     a: "Basic free tools may check every 12–24 hours — which is too slow for competitive categories. AI-powered tools like Insydz check prices multiple times per hour, ensuring you're alerted within 60 minutes of any significant competitor price movement. For high-velocity categories like electronics or FMCG, faster tracking directly translates to Buy Box retention.",
//   },
//   {
//     q: "Can I track competitor prices on Flipkart — not just Amazon?",
//     a: "Most global tools (Helium 10, Jungle Scout) only cover Amazon. Since 60% of tier-2 and tier-3 city sellers in India do their primary business on Flipkart, this is a major gap. Insydz covers Flipkart and Meesho alongside Amazon.in, making it the only complete solution for multi-platform Indian sellers.",
//   },
//   {
//     q: "Will automating price tracking lead to price wars?",
//     a: "Only if done poorly. Blind automation — matching any competitor drop instantly — does cause price wars. Smart tools like Insydz calculate the minimum adjustment needed to stay competitive (e.g., 'Adjust from ₹999 to ₹979 — not ₹899') based on ratings, delivery, and margin data. This protects your margins while recovering the Buy Box.",
//   },
//   {
//     q: "How much do Indian e-commerce price tracking tools cost?",
//     a: "Global tools like Helium 10 run ₹4,000–8,000/month. India-first platforms like Insydz offer plans from ₹499/month (Starter) to ₹2,999/month (Professional), with a forever-free plan for new sellers. Most Indian sellers find the Growth plan at ₹1,299/month the right balance of features and price.",
//   },
//   {
//     q: "Do I need technical skills to use a price tracking tool?",
//     a: "No. Platforms like Insydz are designed specifically for Indian sellers who don't have tech backgrounds. You connect your Amazon/Flipkart store with a few clicks, add the competitor ASINs you want to track, and receive WhatsApp alerts with plain-language recommendations. No dashboards to learn, no CSV exports to analyse.",
//   },
// ];

// // ─── Images — same Unsplash URLs as the original HTML file ───────────────────
// const IMAGES = {
//   hero: {
//     src: "/one.png",
//     alt: "Indian ecommerce seller working on laptop with Amazon analytics",
//     caption: "Indian e-commerce sellers who implement AI-powered competitor price tracking recover an average of ₹45,000/month in revenue previously lost to unmonitored price changes.",
//   },
//   tracking: {
//     src: "/two.png",
//     alt: "Real-time price tracking analytics dashboard on screen",
//     caption: "AI-powered price tracking dashboards convert raw competitor data into actionable decisions — showing you exactly what price to set, and why, for each ASIN.",
//   },
//   mobile: {
//     src: "/three.png",
//     alt: "Mobile online shopping in India",
//     caption: "Over 78% of Amazon India orders originate from mobile. A competitor who undercuts you by ₹50 captures every one of those buyers — without you ever knowing it happened.",
//   },
//   festive: {
//     src: "/four.png",
//     alt: "Festive season ecommerce shopping bags",
//     caption: "During Big Billion Days and Great Indian Festival, 40–60% of annual e-commerce revenue concentrates into 4–7 days. Real-time price tracking is your only defence against losing the Buy Box during these windows.",
//   },
//   warehouse: {
//     src: "/five.png",
//     alt: "Ecommerce warehouse fulfillment and shipping",
//     caption: "India-first tools like Insydz cover Amazon.in, Flipkart, and Meesho simultaneously — closing the multi-platform gap that global tools leave open for Indian sellers.",
//   },
// };

// // ─── ArticleImg — identical to Buy Box article ────────────────────────────────
// interface ArticleImgProps { src: string; alt: string; caption?: string; }
// function ArticleImg({ src, alt, caption }: ArticleImgProps) {
//   const [loaded, setLoaded] = useState(false);
//   return (
//     <figure className="article-img-wrap">
//       {!loaded && <div className="img-shimmer" />}
//       <img
//         src={src}
//         alt={alt}
//         onLoad={() => setLoaded(true)}
//         style={{ width: "100%", display: loaded ? "block" : "none", objectFit: "cover", maxHeight: 400 }}
//       />
//       {caption && <figcaption className="img-caption">{caption}</figcaption>}
//     </figure>
//   );
// }

// // ─── Main Component ────────────────────────────────────────────────────────────
// export default function AmazonCompetitorPriceTrackingTool() {
//   const [, setLocation] = useLocation();
//   const [activeSection, setActiveSection]       = useState("what-is");
//   const [scrollPct, setScrollPct]               = useState(0);
//   const [tocOpen, setTocOpen]                   = useState(false);
//   const [openFaq, setOpenFaq]                   = useState<number | null>(null);
//   const [isMenuOpen, setIsMenuOpen]             = useState(false);
//   const [scrolled, setScrolled]                 = useState(false);
//   const [isDarkMode, setIsDarkMode]             = useState(false);
//   const [activeDropdown, setActiveDropdown]     = useState<string | null>(null);
//   const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", isDarkMode);
//   }, [isDarkMode]);

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
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setActiveDropdown(null);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const go = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
//     setTocOpen(false);
//   };

//   const handleMenuItemClick = (item: MenuItemWithBadge) => {
//     if (item.route) { setLocation(item.route); setActiveDropdown(null); setIsMenuOpen(false); }
//   };

//   const toggleMobileMenu = (name: string) => setMobileActiveMenu(prev => prev === name ? null : name);

//   const scrollToSection = (sectionId: string) => {
//     setLocation("/");
//     setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
//   };

//   // Reusable desktop dropdown — exact copy from Buy Box article
//   const DesktopDropdown = ({
//     label,
//     menuKey,
//     accent = "purple",
//   }: {
//     label: string;
//     menuKey: keyof NavigationMenu;
//     accent?: "purple" | "orange";
//   }) => {
//     const items = navigationMenu[menuKey];
//     const isActive = activeDropdown === label;
//     const accentCls =
//       accent === "orange"
//         ? "text-orange-600 dark:text-orange-500 hover:text-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900/20"
//         : "text-gray-700 dark:text-gray-300 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20";
//     const dropHoverCls =
//       accent === "orange"
//         ? "hover:bg-orange-50 dark:hover:bg-orange-900/20 group-hover:text-orange-600"
//         : "hover:bg-purple-50 dark:hover:bg-purple-900/20 group-hover:text-purple-600";
//     const iconCls =
//       accent === "orange" ? "text-orange-600 dark:text-orange-400" : "text-purple-600 dark:text-purple-400";

//     return (
//       <div className="relative">
//         <button
//           onMouseEnter={() => setActiveDropdown(label)}
//           className={`px-3 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1 ${
//             isActive
//               ? accent === "orange"
//                 ? "text-orange-600 font-semibold"
//                 : "text-purple-600 font-semibold"
//               : accentCls
//           }`}
//         >
//           {label}
//           <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isActive ? "rotate-180" : ""}`} />
//         </button>
//         {isActive && (
//           <div
//             onMouseLeave={() => setActiveDropdown(null)}
//             className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 z-50"
//           >
//             {items.map((item, i) => (
//               <button
//                 key={i}
//                 onClick={() => handleMenuItemClick(item)}
//                 className={`w-full px-4 py-3 text-left transition-colors flex items-center gap-3 group ${dropHoverCls}`}
//               >
//                 <span className={`${iconCls} group-hover:scale-110 transition-transform`}>{item.icon}</span>
//                 <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">{item.name}</span>
//                 {item.badge && (
//                   <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded-full font-semibold">
//                     {item.badge}
//                   </span>
//                 )}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">

//       {/* ── Global styles — exact copy from Buy Box article ─────────────────── */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
//         *, *::before, *::after { box-sizing: border-box; }
//         html { scroll-behavior: smooth; }

//         @keyframes imgShimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }

//         .read-progress { position:fixed; top:80px; left:0; height:3px; background:linear-gradient(90deg,#f97316,#ef4444); z-index:200; transition:width .1s linear; border-radius:0 2px 2px 0; }

//         .article-layout { max-width:1200px; margin:0 auto; padding:48px 24px 80px; display:grid; grid-template-columns:240px 1fr; gap:48px; align-items:start; }
//         @media(max-width:1024px){ .article-layout { grid-template-columns:200px 1fr; gap:32px; } }
//         @media(max-width:768px){ .article-layout { grid-template-columns:1fr; padding:24px 16px 60px; } }

//         .toc-sidebar { position:sticky; top:96px; background:#fff; border:1px solid #e5e7eb; border-radius:16px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,.05); }
//         .dark .toc-sidebar { background:#111827; border-color:#1f2937; }
//         @media(max-width:768px){ .toc-sidebar { display:none; } }

//         .mobile-toc-btn { display:none; width:100%; background:#fff; border:1px solid #e5e7eb; border-radius:12px; padding:14px 18px; font-family:'Sora',sans-serif; font-size:14px; font-weight:600; color:#111; cursor:pointer; align-items:center; justify-content:space-between; margin-bottom:16px; }
//         .dark .mobile-toc-btn { background:#111827; border-color:#1f2937; color:#f9fafb; }
//         @media(max-width:768px){ .mobile-toc-btn { display:flex; } }
//         .mobile-toc-panel { display:none; background:#fff; border:1px solid #e5e7eb; border-radius:12px; padding:16px; margin-bottom:24px; }
//         .dark .mobile-toc-panel { background:#111827; border-color:#1f2937; }
//         .mobile-toc-panel.open { display:block; }

//         .article-body { font-family:'Lora',serif; font-size:clamp(15px,2vw,17px); line-height:1.8; color:#374151; }
//         .dark .article-body { color:#d1d5db; }
//         .article-body h2 { font-family:'Sora',sans-serif; font-size:clamp(20px,3vw,28px); font-weight:800; color:#111; letter-spacing:-.4px; margin:52px 0 16px; line-height:1.25; scroll-margin-top:100px; }
//         .dark .article-body h2 { color:#f9fafb; }
//         .article-body h3 { font-family:'Sora',sans-serif; font-size:clamp(16px,2vw,19px); font-weight:700; color:#111; margin:32px 0 10px; scroll-margin-top:100px; }
//         .dark .article-body h3 { color:#f3f4f6; }
//         .article-body p { margin-bottom:20px; }
//         .article-body ul,.article-body ol { padding-left:22px; margin-bottom:20px; }
//         .article-body li { margin-bottom:8px; }
//         .article-body strong { font-weight:700; color:#111; }
//         .dark .article-body strong { color:#f9fafb; }

//         .callout { border-radius:12px; padding:18px 20px; margin:28px 0; }
//         .callout.pro  { background:#f0fdf4; border:1px solid #86efac; border-left:4px solid #16a34a; }
//         .callout.warn { background:#fffbeb; border:1px solid #fcd34d; border-left:4px solid #d97706; }
//         .callout.info { background:#eff6ff; border:1px solid #93c5fd; border-left:4px solid #2563eb; }
//         .callout.teal { background:#f0fdfa; border:1px solid #99f6e4; border-left:4px solid #0d9488; }
//         .dark .callout.pro  { background:#052e16; border-color:#166534; }
//         .dark .callout.warn { background:#1c1507; border-color:#78350f; }
//         .dark .callout.info { background:#0c1a2e; border-color:#1e3a5f; }
//         .dark .callout.teal { background:#042f2e; border-color:#134e4a; }
//         .callout-label { font-family:'Sora',sans-serif; font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase; margin-bottom:8px; }
//         .callout.pro  .callout-label { color:#16a34a; }
//         .callout.warn .callout-label { color:#d97706; }
//         .callout.info .callout-label { color:#2563eb; }
//         .callout.teal .callout-label { color:#0d9488; }
//         .callout-text { font-family:'Lora',serif; font-size:15px; color:#374151; line-height:1.72; }
//         .dark .callout-text { color:#d1d5db; }

//         .inline-cta { background:linear-gradient(135deg,#fff7ed,#ffedd5); border:1px solid #fed7aa; border-radius:16px; padding:clamp(20px,4vw,28px) clamp(16px,4vw,32px); margin:40px 0; display:flex; align-items:center; justify-content:space-between; gap:20px; flex-wrap:wrap; }
//         .dark .inline-cta { background:linear-gradient(135deg,#1c0a00,#2d1500); border-color:#7c2d12; }
//         .inline-cta h4 { font-family:'Sora',sans-serif; font-size:16px; font-weight:800; color:#111; margin-bottom:4px; }
//         .dark .inline-cta h4 { color:#f9fafb; }
//         .inline-cta p  { font-family:'Sora',sans-serif; font-size:14px; color:#6b7280; margin:0; }
//         .dark .inline-cta p { color:#9ca3af; }

//         .dt-wrap { overflow-x:auto; margin:24px 0; border-radius:12px; border:1px solid #e5e7eb; }
//         .dark .dt-wrap { border-color:#1f2937; }
//         table.dt { width:100%; border-collapse:collapse; font-family:'Sora',sans-serif; font-size:13px; min-width:520px; }
//         table.dt th { background:#111827; color:white; padding:12px 16px; text-align:left; font-size:11px; letter-spacing:.5px; text-transform:uppercase; }
//         table.dt td { padding:12px 16px; border-bottom:1px solid #e5e7eb; color:#374151; vertical-align:middle; }
//         .dark table.dt td { border-color:#1f2937; color:#d1d5db; }
//         table.dt tr:last-child td { border-bottom:none; }
//         table.dt tr:nth-child(even) td { background:#f9fafb; }
//         .dark table.dt tr:nth-child(even) td { background:#0f172a; }
//         .bg { background:#dcfce7; color:#15803d; font-weight:700; padding:3px 10px; border-radius:20px; font-size:11px; white-space:nowrap; }
//         .bo { background:#fff7ed; color:#ea580c; font-weight:700; padding:3px 10px; border-radius:20px; font-size:11px; white-space:nowrap; }
//         .br { background:#fef2f2; color:#dc2626; font-weight:700; padding:3px 10px; border-radius:20px; font-size:11px; white-space:nowrap; }
//         .bb { background:#dbeafe; color:#1e40af; font-weight:700; padding:3px 10px; border-radius:20px; font-size:11px; white-space:nowrap; }

//         .step { display:flex; gap:16px; margin-bottom:24px; }
//         .step-num { flex-shrink:0; width:36px; height:36px; background:linear-gradient(135deg,#f97316,#ef4444); color:white; font-family:'Sora',sans-serif; font-weight:800; font-size:15px; border-radius:50%; display:flex; align-items:center; justify-content:center; margin-top:3px; }
//         .step-content h4 { font-family:'Sora',sans-serif; font-size:15px; font-weight:700; color:#111; margin-bottom:6px; }
//         .dark .step-content h4 { color:#f9fafb; }
//         .step-content p { font-size:15px; margin:0; font-family:'Lora',serif; }

//         .related-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; margin-top:20px; }
//         @media(max-width:540px){ .related-grid { grid-template-columns:1fr; } }
//         .related-card { background:#fff; border:1px solid #e5e7eb; border-radius:14px; padding:18px; cursor:pointer; transition:all .2s; }
//         .dark .related-card { background:#111827; border-color:#1f2937; }
//         .related-card:hover { border-color:#f97316; box-shadow:0 4px 16px rgba(249,115,22,.12); transform:translateY(-2px); }

//         .faq-item { border:1px solid #e5e7eb; border-radius:12px; margin-bottom:12px; overflow:hidden; background:#fff; transition:border-color .2s; }
//         .dark .faq-item { background:#111827; border-color:#1f2937; }
//         .faq-item.open { border-color:#f97316; }
//         .faq-q { display:flex; justify-content:space-between; align-items:center; padding:18px 20px; cursor:pointer; font-family:'Sora',sans-serif; font-size:clamp(13px,2vw,15px); font-weight:600; color:#111; gap:12px; }
//         .dark .faq-q { color:#f9fafb; }
//         .faq-icon { flex-shrink:0; width:24px; height:24px; background:#fff7ed; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#f97316; font-size:16px; font-weight:700; transition:transform .2s; }
//         .faq-icon.open { transform:rotate(45deg); background:#f97316; color:white; }
//         .faq-a { font-family:'Lora',serif; font-size:15px; line-height:1.7; color:#374151; padding:0 20px 18px; }
//         .dark .faq-a { color:#d1d5db; }

//         .article-img-wrap { margin:36px 0; border-radius:14px; overflow:hidden; border:1px solid #e5e7eb; background:#f9fafb; box-shadow:0 4px 20px rgba(0,0,0,.06); }
//         .dark .article-img-wrap { border-color:#1f2937; background:#111827; }
//         .img-shimmer { height:300px; background:linear-gradient(90deg,#f3f4f6 25%,#e5e7eb 50%,#f3f4f6 75%); background-size:400% 100%; animation:imgShimmer 1.6s ease infinite; }
//         .img-caption { padding:10px 16px 12px; font-family:'Sora',sans-serif; font-size:12px; color:#9ca3af; line-height:1.5; border-top:1px solid #e5e7eb; background:#f9fafb; }
//         .dark .img-caption { background:#111827; border-color:#1f2937; }

//         .stat-strip { display:flex; flex-wrap:wrap; border:1px solid #e5e7eb; border-radius:14px; overflow:hidden; margin-top:32px; }
//         .dark .stat-strip { border-color:#1f2937; }
//         .stat-item { flex:1; min-width:140px; padding:16px; text-align:center; border-right:1px solid #e5e7eb; }
//         .dark .stat-item { border-color:#1f2937; }
//         .stat-item:last-child { border-right:none; }
//         @media(max-width:480px){ .stat-item { min-width:50%; } }

//         .article-hero { background:#fff; border-bottom:1px solid #e5e7eb; padding:clamp(32px,5vw,56px) clamp(16px,4vw,32px) 0; }
//         .dark .article-hero { background:#0f172a; border-color:#1f2937; }
//         .hero-inner { max-width:820px; margin:0 auto; padding-bottom:40px; }

//         .final-cta-block { background:linear-gradient(135deg,#111827,#1f2937); border-radius:20px; padding:clamp(32px,6vw,56px) clamp(24px,5vw,48px); text-align:center; margin:60px 0 0; }

//         .toc-link { display:block; font-size:13px; font-weight:500; color:#6b7280; padding:7px 10px; border-radius:8px; cursor:pointer; border:none; background:none; text-align:left; width:100%; transition:all .15s; margin-bottom:2px; line-height:1.4; }
//         .toc-link:hover { background:#fff7ed; color:#ea580c; }
//         .toc-link.active { background:#fff7ed; color:#ea580c; font-weight:700; border-left:3px solid #f97316; padding-left:8px; }
//         .dark .toc-link { color:#9ca3af; }
//         .dark .toc-link:hover,.dark .toc-link.active { background:#1c0a00; color:#fb923c; }

//         .mistake-card { display:flex; gap:0; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden; margin-bottom:12px; }
//         .dark .mistake-card { border-color:#1f2937; }
//         .mistake-num { flex-shrink:0; width:52px; background:#111827; color:white; font-family:'Sora',sans-serif; font-size:20px; font-weight:800; display:flex; align-items:center; justify-content:center; }
//         .mistake-body { padding:16px 20px; }
//         .mistake-body strong { display:block; font-family:'Sora',sans-serif; font-size:14px; font-weight:700; color:#111; margin-bottom:5px; }
//         .dark .mistake-body strong { color:#f9fafb; }
//         .mistake-body p { font-family:'Sora',sans-serif; font-size:13.5px; color:#6b7280; line-height:1.6; margin:0; }
//         .dark .mistake-body p { color:#9ca3af; }

//         .bp-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin:20px 0 32px; }
//         @media(max-width:640px){ .bp-grid { grid-template-columns:1fr; } }
//         .bp-card { border:1px solid #e5e7eb; border-radius:12px; overflow:hidden; }
//         .dark .bp-card { border-color:#1f2937; }
//         .bp-head { padding:12px 16px; font-family:'Sora',sans-serif; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.5px; color:white; }
//         .bp-body { padding:14px 16px; }
//         .bp-body ul { list-style:none; padding:0; margin:0; }
//         .bp-body li { font-family:'Sora',sans-serif; font-size:12.5px; color:#374151; line-height:1.5; margin-bottom:8px; padding-left:16px; position:relative; }
//         .bp-body li::before { content:"✓"; position:absolute; left:0; color:#f97316; font-weight:700; font-size:11px; top:1px; }
//         .dark .bp-body li { color:#d1d5db; }

//         .metrics-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:20px 0 32px; }
//         @media(max-width:540px){ .metrics-grid { grid-template-columns:1fr; } }
//         .metric-card { border:1px solid #e5e7eb; border-radius:12px; padding:18px; display:flex; gap:14px; align-items:flex-start; background:#fff; }
//         .dark .metric-card { border-color:#1f2937; background:#111827; }
//         .metric-icon { flex-shrink:0; width:40px; height:40px; border-radius:10px; background:#fff7ed; display:flex; align-items:center; justify-content:center; font-size:20px; }
//         .metric-title { font-family:'Sora',sans-serif; font-size:13.5px; font-weight:700; color:#111; margin-bottom:4px; }
//         .dark .metric-title { color:#f9fafb; }
//         .metric-desc { font-family:'Sora',sans-serif; font-size:12.5px; color:#6b7280; line-height:1.5; }
//         .dark .metric-desc { color:#9ca3af; }

//         .takeaway-box { background:#111827; border-radius:16px; padding:28px 30px; margin:28px 0; }
//         .takeaway-box h3 { font-family:'Sora',sans-serif; font-size:17px; font-weight:800; color:white; margin:0 0 16px; display:flex; align-items:center; gap:10px; }
//         .takeaway-item { display:flex; align-items:flex-start; gap:10px; margin-bottom:10px; }
//         .takeaway-dot { flex-shrink:0; width:20px; height:20px; border-radius:50%; background:#f97316; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:800; color:white; margin-top:2px; }
//         .takeaway-text { font-family:'Lora',serif; font-size:14.5px; color:#cbd5e1; line-height:1.6; }
//       `}</style>

//       {/* Reading progress bar */}
//       <div className="read-progress" style={{ width: `${scrollPct}%` }} />

//       {/* ══════════════════════════════════════════════════════════════════════
//           NAV — exact copy from Buy Box article
//       ══════════════════════════════════════════════════════════════════════ */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg"
//             : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">

//             {/* Logo + Back */}
//             <div className="flex items-center space-x-3">
//               <div className="flex items-center space-x-1 group cursor-pointer" onClick={() => setLocation("/")}>
//                 <div className="relative">
//                   <img
//                     src="/logo.png"
//                     alt="Insydz Logo"
//                     className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain"
//                   />
//                   <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
//                 </div>
//                 <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                   Insydz
//                 </span>
//               </div>
//             </div>

//             {/* Desktop nav */}
//             <div className="hidden lg:flex items-center space-x-3" ref={dropdownRef}>
//               <DesktopDropdown label="Solutions"  menuKey="Solutions" />
//               <DesktopDropdown label="Use Cases"  menuKey="Use Cases" />
//               <DesktopDropdown label="Features"   menuKey="Features" />
//               <button
//                 onClick={() => setLocation("/pricing")} onMouseEnter={() => setActiveDropdown(null)}
//                 className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
//               >
//                 Pricing
//               </button>
//               <DesktopDropdown label="Free Tools" menuKey="Free Tools" />
//               <DesktopDropdown label="Compare"    menuKey="Compare" />
//               <DesktopDropdown label="Resources"  menuKey="Resources" accent="orange" />
//               <DesktopDropdown label="About"      menuKey="About" />
//               <Button
//                 onClick={() => setLocation("/login")} onMouseEnter={() => setActiveDropdown(null)}
//                 className="ml-2 text-sm bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
//               >
//                 Login
//               </Button>
//               <button
//                 className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
//                 onClick={() => setIsDarkMode(!isDarkMode)}
//               >
//                 {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
//               </button>
//             </div>

//             {/* Mobile toggle */}
//             <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 max-h-[calc(100vh-5rem)] overflow-y-auto">
//             <div className="px-4 py-4 space-y-2">
//               <button
//                 onClick={() => { setLocation("/resources/expert-blog"); setIsMenuOpen(false); }}
//                 className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//               >
//                 <ArrowLeft className="w-4 h-4" /> Back to Blog
//               </button>
//               {(
//                 [
//                   ["Solutions",  "Solutions",  "purple"],
//                   ["Use Cases",  "Use Cases",  "purple"],
//                   ["Features",   "Features",   "purple"],
//                   ["Free Tools", "Free Tools", "purple"],
//                   ["Compare",    "Compare",    "purple"],
//                   ["Resources",  "Resources",  "orange"],
//                   ["About",      "About",      "purple"],
//                 ] as [string, keyof NavigationMenu, string][]
//               ).map(([label, key, accent]) => (
//                 <div key={label}>
//                   <button
//                     onClick={() => toggleMobileMenu(label)}
//                     className={`flex items-center justify-between w-full px-4 py-2 rounded-lg font-medium ${
//                       accent === "orange"
//                         ? "text-orange-600 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20"
//                         : "text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"
//                     }`}
//                   >
//                     {label}
//                     <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === label ? "rotate-180" : ""}`} />
//                   </button>
//                   {mobileActiveMenu === label && (
//                     <div className="ml-4 mt-1 space-y-1">
//                       {navigationMenu[key].map((item, i) => (
//                         <button
//                           key={i}
//                           onClick={() => handleMenuItemClick(item)}
//                           className={`flex items-center gap-2 w-full px-4 py-2 text-sm rounded-lg ${
//                             accent === "orange"
//                               ? "text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-orange-900/20"
//                               : "text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20"
//                           }`}
//                         >
//                           {item.icon} {item.name}
//                           {item.badge && (
//                             <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">
//                               {item.badge}
//                             </span>
//                           )}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//               <button
//                 onClick={() => setLocation("/pricing")}
//                 className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
//               >
//                 Pricing
//               </button>
//               <Button
//                 onClick={() => { setLocation("/login"); setIsMenuOpen(false); }}
//                 className="w-full mt-2 bg-gradient-to-r from-pink-500 to-rose-500"
//               >
//                 Login
//               </Button>
//               <button
//                 className="mt-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700 w-full flex justify-center"
//                 onClick={() => setIsDarkMode(!isDarkMode)}
//               >
//                 {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* ══════════════════════════════════════════════════════════════════════
//           HERO
//       ══════════════════════════════════════════════════════════════════════ */}
//       <section className="article-hero" style={{ paddingTop: 100 }}>
//         <div className="hero-inner">

//           {/* Breadcrumb */}
//           <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6 flex-wrap">
//             <button onClick={() => setLocation("/")} className="hover:text-orange-500 transition-colors">Home</button>
//             <span>/</span>
//             <button onClick={() => setLocation("/resources/expert-blog")} className="hover:text-orange-500 transition-colors">Expert Blog</button>
//             <span>/</span>
//             <button onClick={() => setLocation("/solutions/amazon-sellers")} className="hover:text-orange-500 transition-colors">Seller Tools</button>
//             <span>/</span>
//             <span className="text-orange-500 font-medium">Amazon Competitor Price Tracking</span>
//           </div>

//           {/* Category tag */}
//           <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
//             <div className="w-2 h-2 bg-orange-500 rounded-full" />
//             Seller Tools &amp; Strategy
//           </div>

//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white mb-5">
//             Amazon{" "}
//             <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
//               Competitor Price Tracking Tool
//             </span>{" "}
//             India: Complete Guide for Sellers (2026)
//           </h1>

//           <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-7" style={{ fontFamily: "'Lora', serif" }}>
//             Track competitor prices on Amazon.in, Flipkart, and Meesho in real time. Discover how Indian sellers use
//             AI-powered tools to protect margins, win the Buy Box, and outsell rivals — with a complete 2026 playbook.
//           </p>

//           {/* Meta row */}
//           <div className="flex flex-wrap items-center gap-4 pb-7 border-b border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
//             <div className="flex items-center gap-2">
//               <Clock className="w-4 h-4" />
//               <strong className="text-gray-800 dark:text-gray-200">Insydz Research Team</strong>
//             </div>
//             <span className="text-gray-300 dark:text-gray-700">·</span>
//             <span>Last updated: <strong className="text-gray-700 dark:text-gray-300">January 2026</strong></span>
//             <span className="text-gray-300 dark:text-gray-700">·</span>
//             <div className="flex items-center gap-1">
//               <Clock className="w-4 h-4" />
//               <strong className="text-gray-700 dark:text-gray-300">14 min read</strong>
//             </div>
//             <span className="bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400 text-xs font-bold px-2 py-0.5 rounded">
//               Updated for 2026
//             </span>
//           </div>

//           {/* Stat strip */}
//           <div className="stat-strip">
//             {[
//               ["15–30%", "Monthly Profit Lost to Reactive Pricing"],
//               ["70–80%", "Buy Box = Share of Category Sales"],
//               ["₹45K",   "Avg. Revenue Lost Per Seller / Month"],
//               ["<1 hr",  "AI Price Alert Response Time (Insydz)"],
//             ].map(([num, lbl]) => (
//               <div className="stat-item" key={num}>
//                 <div className="text-2xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">{num}</div>
//                 <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">{lbl}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Hero image */}
//         <div style={{ maxWidth: 820, margin: "0 auto", borderTop: "1px solid #e5e7eb" }}>
//           <ArticleImg {...IMAGES.hero} />
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════════════════════════════════
//           ARTICLE LAYOUT
//       ══════════════════════════════════════════════════════════════════════ */}
//       <div className="article-layout">

//         {/* Sidebar TOC */}
//         <aside className="toc-sidebar">
//           <div className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
//             Table of Contents
//           </div>
//           {TOC.map(t => (
//             <button
//               key={t.id}
//               className={`toc-link${activeSection === t.id ? " active" : ""}`}
//               onClick={() => go(t.id)}
//             >
//               {t.label}
//             </button>
//           ))}
//           <div className="mt-5 pt-5 border-t border-gray-200 dark:border-gray-800">
//             <button
//               onClick={() => setLocation("/login")}
//               className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-sm font-bold py-2.5 rounded-xl transition-all"
//             >
//               👉 Start Free with Insydz
//             </button>
//             <p className="text-center text-xs text-gray-400 mt-2">No credit card required</p>
//           </div>
//         </aside>

//         {/* Article body */}
//         <main>
//           {/* Mobile TOC */}
//           <button className="mobile-toc-btn" onClick={() => setTocOpen(!tocOpen)}>
//             📋 Table of Contents <span>{tocOpen ? "▲" : "▼"}</span>
//           </button>
//           <div className={`mobile-toc-panel${tocOpen ? " open" : ""}`}>
//             {TOC.map(t => (
//               <button key={t.id} className="toc-link" style={{ display: "block", marginBottom: 4 }} onClick={() => go(t.id)}>
//                 {t.label}
//               </button>
//             ))}
//           </div>

//           <article className="article-body">

//             {/* ── S1: What is Price Tracking ───────────────────────────────── */}
//             <h2 id="what-is">What is an Amazon Competitor Price Tracking Tool for India?</h2>
//             <p>
//               An <strong>Amazon competitor price tracking tool for India</strong> is software that automatically monitors
//               your rivals' product prices, stock availability, and listing changes on Amazon.in, Flipkart, and Meesho —
//               in real time, without any manual effort. Unlike generic global tools built for US or European marketplaces,
//               India-focused platforms account for the pricing dynamics, seller behaviour, and platform nuances unique to
//               Indian e-commerce.
//             </p>
//             <p>
//               Here's the scale of the problem: Indian sellers on Amazon.in collectively lose an estimated{" "}
//               <strong>15–30% of potential monthly profit</strong> due to reactive — rather than proactive — pricing
//               decisions.
//             </p>

//             <div className="callout teal">
//               <div className="callout-label">💡 In Simple Terms</div>
//               <div className="callout-text">
//                 Instead of manually checking 10 competitor listings every morning on Amazon.in (which takes 2–3 hours),
//                 a price tracking tool does it automatically, 24×7, and{" "}
//                 <strong>alerts you on WhatsApp the moment a competitor drops their price or goes out of stock</strong>{" "}
//                 — so you can act first.
//               </div>
//             </div>

//             <ArticleImg {...IMAGES.tracking} />

//             {/* ── S2: Why Critical ─────────────────────────────────────────── */}
//             <h2 id="why-critical">Why is Competitor Price Tracking Critical for Indian Sellers?</h2>
//             <p>
//               Indian e-commerce is one of the most price-sensitive markets in the world. Shoppers compare prices across
//               3–5 sellers before purchasing. A <strong>₹50 difference on a ₹500 product</strong> can shift the Buy Box
//               — and with it, 70–80% of the category's sales volume.
//             </p>

//             <h3>Revenue Leakage is Silent and Compounding</h3>
//             <p>
//               Most Indian sellers price once and forget. When a competitor drops their price by ₹100 overnight, your
//               product slides off the first page of Amazon search results. You don't even know it happened. Three weeks
//               later, you've lost <strong>₹45,000 in revenue you never even tracked</strong>.
//             </p>

//             <ArticleImg {...IMAGES.mobile} />

//             <h3>Amazon &amp; Flipkart Algorithm Penalises Stale Pricing</h3>
//             <p>
//               Both Amazon and Flipkart factor in price competitiveness when deciding which products to feature in search
//               results and 'Recommended' carousels. A product that's ₹200 more expensive than the category median gets
//               suppressed — even if your reviews are better.
//             </p>

//             <h3>The Festive Season Window is Unforgiving</h3>
//             <p>
//               During Big Billion Days and Great Indian Festival, 40–60% of annual e-commerce revenue concentrates into
//               4–7 days. A seller who loses the Buy Box on Day 1 of a festive event often can't recover — the algorithm
//               has already reallocated visibility to competitors.
//             </p>

//             <ArticleImg {...IMAGES.festive} />

//             <div className="callout warn">
//               <div className="callout-label">⚠️ Real Seller Example</div>
//               <div className="callout-text">
//                 A Delhi-based electronics accessories seller was doing ₹3.2 lakh/month on Amazon. A new competitor
//                 entered with a ₹30 lower price. Sales dropped to ₹1.8 lakh within 6 weeks. The seller found out via a
//                 customer message — not a tool. Had they tracked prices in real time, they could have matched the
//                 competitor within an hour and retained the Buy Box.
//               </div>
//             </div>

//             {/* ── S3: How It Works ─────────────────────────────────────────── */}
//             <h2 id="how-it-works">How Does Amazon Competitor Price Tracking Work?</h2>
//             <p>
//               Modern tools have replaced the manual spreadsheet workflow with a{" "}
//               <strong>5-step automated intelligence loop:</strong>
//             </p>

//             {(
//               [
//                 ["Connect Your Seller Account",       "Link your Amazon/Flipkart seller account and add your top 5–10 competitor ASINs to start monitoring immediately."],
//                 ["Automated Live Data Crawling",       "The tool's crawler or API pulls live price data from product listings at frequent intervals — every 15–60 minutes for AI-powered tools like Insydz."],
//                 ["AI Engine Analysis",                 "The AI engine compares your price against the category benchmark and competitor prices, factoring in ratings, delivery speed, and stock levels."],
//                 ["WhatsApp / Email Alert Triggered",   "You receive a WhatsApp or email alert the moment a competitor changes price by more than your defined threshold (e.g., ±5%)."],
//                 ["Actionable AI Recommendation",       `The platform gives a decision, not just data: "Competitor A dropped to ₹899. Recommend adjusting to ₹919 to stay competitive while protecting ₹42 more margin."`],
//               ] as [string, string][]
//             ).map(([title, desc], i) => (
//               <div className="step" key={i}>
//                 <div className="step-num">{i + 1}</div>
//                 <div className="step-content">
//                   <h4>{title}</h4>
//                   <p>{desc}</p>
//                 </div>
//               </div>
//             ))}

//             <div className="callout pro">
//               <div className="callout-label">🔑 Key Insight</div>
//               <div className="callout-text">
//                 <strong>Manual tracking gives you data points. AI-powered intelligence gives you decisions.</strong>{" "}
//                 That gap is the difference between reacting tomorrow and winning today.
//               </div>
//             </div>

//             {/* ── S4: Comparison Table ─────────────────────────────────────── */}
//             <h2 id="comparison">Types of Amazon Price Tracking Approaches (Comparison)</h2>

//             <div className="dt-wrap">
//               <table className="dt">
//                 <thead>
//                   <tr>
//                     <th>Method</th>
//                     <th>Speed</th>
//                     <th>Accuracy</th>
//                     <th>Actionability</th>
//                     <th>Cost</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td><strong>Manual Excel Tracking</strong></td>
//                     <td><span className="br">24–48 hours</span></td>
//                     <td>Low (human error)</td>
//                     <td>None</td>
//                     <td>3–5 hrs/day labour</td>
//                   </tr>
//                   <tr>
//                     <td><strong>Basic Free Alert Tools</strong></td>
//                     <td><span className="bo">2–6 hours</span></td>
//                     <td>Medium</td>
//                     <td>Low (alerts only)</td>
//                     <td>Free – ₹200/mo</td>
//                   </tr>
//                   <tr>
//                     <td><strong>Global SaaS (Helium 10)</strong></td>
//                     <td><span className="bb">1–2 hours</span></td>
//                     <td>High</td>
//                     <td>Medium (US-focused)</td>
//                     <td>₹4,000–8,000/mo</td>
//                   </tr>
//                   <tr>
//                     <td><strong style={{ color: "#ea580c" }}>India-First AI Tool (Insydz)</strong></td>
//                     <td><span className="bg">&lt; 1 hour</span></td>
//                     <td>High</td>
//                     <td><span className="bg">High — Actionable AI</span></td>
//                     <td><strong>₹499–2,999/mo</strong></td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             <div className="inline-cta">
//               <div>
//                 <h4>Start Tracking Competitor Prices — Free</h4>
//                 <p>WhatsApp alerts. No credit card. No dashboards to learn. Set up in 5 minutes.</p>
//               </div>
//               <button
//                 onClick={() => setLocation("/login")}
//                 className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all whitespace-nowrap"
//               >
//                 👉 Try Insydz Free
//               </button>
//             </div>

//             {/* ── S5: Common Mistakes ──────────────────────────────────────── */}
//             <h2 id="mistakes">5 Common Mistakes Indian Sellers Make with Price Tracking</h2>

//             {(
//               [
//                 ["Tracking Prices in Excel Every Morning",
//                   "If you're opening 10 competitor tabs every morning and copying prices into a spreadsheet — you're already 24 hours behind. The competitor changed their price at 11 PM last night. You found out at 9 AM today. You lost the Buy Box for 10 hours."],
//                 ["Ignoring Email Alerts (and Missing WhatsApp)",
//                   "Most Indian SMB sellers check email 2–3 times a day at most. They check WhatsApp 50+ times. A price alert sent to an email that's opened 4 hours later is not an alert — it's a history lesson."],
//                 ["Over-Discounting in a Panic",
//                   "When sellers notice a competitor undercutting, the instinct is to slash prices immediately. This starts price wars that destroy margins across the entire category. Smart sellers use AI to find the minimum adjustment that recovers the Buy Box — not the maximum cut."],
//                 ["Not Tracking Competitor Reviews Alongside Prices",
//                   "Price is one signal. But a competitor with 500 reviews and 4.6 stars can charge ₹150 more than you and still win. Sellers who only track price miss the full picture. Review velocity and sentiment tracking should run alongside price tracking."],
//                 ["Setting Prices Once at Launch and Never Revisiting",
//                   "Seasonal demand on Flipkart for electronics, apparel, and home goods swings 40–60% during festive periods. A seller who doesn't adjust pricing dynamically for Diwali, Republic Day Sale, or Big Billion Days leaves significant profit on the table."],
//               ] as [string, string][]
//             ).map(([title, desc], i) => (
//               <div className="mistake-card" key={i}>
//                 <div className="mistake-num">{i + 1}</div>
//                 <div className="mistake-body">
//                   <strong>{title}</strong>
//                   <p>{desc}</p>
//                 </div>
//               </div>
//             ))}

//             {/* ── S6: Best Practices ───────────────────────────────────────── */}
//             <h2 id="best-practices">Best Practices for Indian Sellers: Weekly Execution Model</h2>
//             <p>
//               The most successful Indian sellers don't react to pricing changes — they run a structured weekly rhythm
//               that keeps them consistently competitive without manual effort.
//             </p>

//             <div className="bp-grid">
//               {[
//                 {
//                   head: "Daily — Automated",
//                   color: "#0D9488",
//                   items: [
//                     "Morning WhatsApp digest: top 3 competitor price movements overnight",
//                     "Review Buy Box status for your top 10 SKUs",
//                     "Act on any 'Critical Alert' (competitor dropped >10%)",
//                   ],
//                 },
//                 {
//                   head: "Weekly — 30 Min Review",
//                   color: "#111827",
//                   items: [
//                     "Review competitor review sentiment — recurring pain points?",
//                     "Check keyword rank movements for top 5 keywords",
//                     "Identify competitors that went out of stock (opportunity)",
//                     "Adjust 1–2 product prices based on AI recommendations",
//                   ],
//                 },
//                 {
//                   head: "Monthly — Strategic",
//                   color: "#f97316",
//                   items: [
//                     "Audit pricing for upcoming festive season or sale events",
//                     "Identify 1 new product from AI gap analysis report",
//                     "Review revenue impact of pricing changes (before vs. after)",
//                   ],
//                 },
//               ].map(col => (
//                 <div className="bp-card" key={col.head}>
//                   <div className="bp-head" style={{ background: col.color }}>{col.head}</div>
//                   <div className="bp-body">
//                     <ul>{col.items.map(it => <li key={it}>{it}</li>)}</ul>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <h3>Key Metrics to Track</h3>
//             <div className="metrics-grid">
//               {[
//                 { icon: "📈", title: "Buy Box Win Rate",              desc: "Target: >70% for your top SKUs. The single most important pricing health metric." },
//                 { icon: "₹",  title: "Price Competitiveness Index",   desc: "Are you within 5% of the category median price at all times?" },
//                 { icon: "📊", title: "Revenue per SKU (Monthly Trend)",desc: "Track individual SKU revenue to catch silent revenue leakage early." },
//                 { icon: "✅", title: "Competitor Stock-Out Capture",   desc: "Did you gain sales when a rival went OOS? Often a 3–5× revenue opportunity." },
//               ].map(m => (
//                 <div className="metric-card" key={m.title}>
//                   <div className="metric-icon">{m.icon}</div>
//                   <div>
//                     <div className="metric-title">{m.title}</div>
//                     <div className="metric-desc">{m.desc}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* ── S7: Best Tools ───────────────────────────────────────────── */}
//             <h2 id="best-tools">Best Tools for Amazon Competitor Price Tracking in India</h2>
//             <p>
//               Not all tools are built equally — and for Indian sellers, the platform choice is critical. Here's an
//               honest, side-by-side comparison.
//             </p>

//             <ArticleImg {...IMAGES.warehouse} />

//             <div className="dt-wrap">
//               <table className="dt">
//                 <thead>
//                   <tr>
//                     <th>Tool</th>
//                     <th>Amazon.in</th>
//                     <th>Flipkart</th>
//                     <th>Meesho</th>
//                     <th>WhatsApp Alerts</th>
//                     <th>Price</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td><strong>Helium 10</strong></td>
//                     <td><span className="bg">Yes</span></td>
//                     <td><span className="br">No</span></td>
//                     <td><span className="br">No</span></td>
//                     <td><span className="br">No</span></td>
//                     <td>₹4,000–8,000/mo</td>
//                   </tr>
//                   <tr>
//                     <td><strong>Jungle Scout</strong></td>
//                     <td><span className="bg">Yes</span></td>
//                     <td><span className="br">No</span></td>
//                     <td><span className="br">No</span></td>
//                     <td><span className="br">No</span></td>
//                     <td>₹4,500–7,000/mo</td>
//                   </tr>
//                   <tr>
//                     <td><strong style={{ color: "#ea580c" }}>Insydz ⚡</strong></td>
//                     <td><span className="bg">Yes</span></td>
//                     <td><span className="bg">Yes</span></td>
//                     <td><span className="bg">Yes</span></td>
//                     <td><span className="bg">Yes</span></td>
//                     <td><strong>₹499/mo + Free plan</strong></td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             <div className="callout pro">
//               <div className="callout-label">📌 Bottom Line</div>
//               <div className="callout-text">
//                 If you're an Indian seller on Amazon.in or Flipkart and you're not tracking competitor prices with AI,
//                 you're operating on guesswork. The question isn't whether you need a tool — it's which one fits your
//                 budget and platforms.
//               </div>
//             </div>

//             <div className="inline-cta">
//               <div>
//                 <h4>Track Buy Box &amp; Competitor Prices in Real-Time</h4>
//                 <p>Insydz monitors Amazon.in, Flipkart &amp; Meesho and alerts you on WhatsApp — before you lose sales.</p>
//               </div>
//               <button
//                 onClick={() => setLocation("/login")}
//                 className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all whitespace-nowrap"
//               >
//                 👉 Start Free
//               </button>
//             </div>

//             {/* Key Takeaways */}
//             <div className="takeaway-box">
//               <h3><span style={{ color: "#f97316" }}>✓</span> Key Takeaways</h3>
//               {[
//                 "Amazon competitor price tracking tools automate what currently takes Indian sellers 3–5 hours daily in manual Excel work.",
//                 "Price changes affect your Amazon/Flipkart search rank and Buy Box eligibility — not just your revenue.",
//                 "Real-time WhatsApp alerts (not email) are critical for Indian SMB sellers to act within minutes, not hours.",
//                 "AI-powered tools provide actionable recommendations — not just data dumps — which is the difference between insight and action.",
//                 "Global tools like Helium 10 don't cover Flipkart or Meesho and are priced out of reach for most Indian sellers.",
//                 "India-first platforms like Insydz cover Amazon, Flipkart, and Meesho at 60–85% lower cost, with WhatsApp alerts.",
//                 "Combining price tracking with review intelligence and keyword tracking gives Indian sellers a complete competitive picture.",
//               ].map(t => (
//                 <div className="takeaway-item" key={t}>
//                   <div className="takeaway-dot">✓</div>
//                   <div className="takeaway-text">{t}</div>
//                 </div>
//               ))}
//             </div>

//             {/* Related Guides */}
//             <h2 style={{ marginTop: 48 }}>Related Guides</h2>
//             <div className="related-grid">
//               {[
//                 { title: "Flipkart Price Tracker: Monitor & Beat Competitor Prices in 2026", tag: "Flipkart Sellers",    time: "10 min", route: "/solutions/flipkart-sellers" },
//                 { title: "How to Win the Amazon Buy Box Consistently as an Indian Seller",   tag: "Buy Box Strategy",    time: "11 min", route: "/use-cases/track-competitor-prices" },
//                 { title: "Amazon Keyword Research India: Step-by-Step Guide for 2026",       tag: "Keyword Research",    time: "12 min", route: "/features/keyword-rank-tracking-feature" },
//                 { title: "Review Analytics: Turn Customer Feedback into Competitive Edge",   tag: "Review Intelligence", time: "9 min",  route: "/features/review-analytics-feature" },
//               ].map(r => (
//                 <div className="related-card" key={r.title} onClick={() => setLocation(r.route)}>
//                   <div className="text-xs font-bold uppercase tracking-wider text-orange-500 mb-2">{r.tag}</div>
//                   <div className="font-bold text-gray-900 dark:text-white text-sm leading-snug mb-2">{r.title}</div>
//                   <div className="flex items-center gap-1 text-xs text-gray-400">
//                     <Clock className="w-3 h-3" /> {r.time}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* FAQ */}
//             <h2 id="faq">Frequently Asked Questions</h2>
//             {FAQS.map((faq, i) => (
//               <div className={`faq-item${openFaq === i ? " open" : ""}`} key={i}>
//                 <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
//                   {faq.q}
//                   <div className={`faq-icon${openFaq === i ? " open" : ""}`}>+</div>
//                 </div>
//                 {openFaq === i && <div className="faq-a">{faq.a}</div>}
//               </div>
//             ))}

//             {/* Conclusion */}
//             <h2 id="conclusion">Final Thoughts</h2>
//             <p>
//               Winning on Amazon India and Flipkart in 2026 isn't about having the best product — it's about having the
//               best intelligence. Competitor price tracking is the foundation of that intelligence layer.
//             </p>
//             <p>
//               Sellers who implement real-time AI-powered price monitoring stop reacting to the market and start leading
//               it. They know when a rival goes out of stock before buyers do. They know when a competitor undercuts them
//               within 45 minutes, not 45 hours. And they recover their Buy Box with a precise price adjustment, not a
//               panicked discount.
//             </p>
//             <p>
//               <strong>The data is clear: every hour without price tracking is an hour of revenue being silently
//               redirected to a competitor who does.</strong>
//             </p>

//             {/* Final CTA */}
//             <div className="final-cta-block">
//               <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
//                 Stop Guessing. Start Knowing.
//               </h2>
//               <p className="text-gray-400 mb-8 text-base md:text-lg" style={{ fontFamily: "'Lora', serif" }}>
//                 Every hour you wait is an hour a competitor is adjusting their price and taking your Buy Box. Insydz
//                 gives Indian sellers on Amazon, Flipkart, and Meesho real-time price intelligence — with AI
//                 recommendations delivered on WhatsApp.
//               </p>
//               <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "8px 28px", marginBottom: 28 }}>
//                 {["No dashboards to learn", "No credit card needed", "WhatsApp alerts from day one", "Amazon.in + Flipkart + Meesho"].map(t => (
//                   <div key={t} style={{ color: "#cbd5e1", fontSize: 13.5, display: "flex", alignItems: "center", gap: 7, fontFamily: "'Sora',sans-serif" }}>
//                     <span style={{ color: "#f97316", fontWeight: 800 }}>✓</span> {t}
//                   </div>
//                 ))}
//               </div>
//               <button
//                 onClick={() => setLocation("/login")}
//                 className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-base px-10 py-4 rounded-full shadow-xl transition-all transform hover:scale-105"
//               >
//                 <Zap className="w-5 h-5 inline mr-2" />
//                 Try Insydz Free — insydz.com
//               </button>
//               <p className="text-gray-500 text-xs mt-4">
//                 No setup required · Amazon India, Flipkart &amp; Meesho supported
//               </p>
//             </div>

//           </article>
//         </main>
//       </div>

//       {/* ══════════════════════════════════════════════════════════════════════
//           FOOTER — exact copy from Buy Box article
//       ══════════════════════════════════════════════════════════════════════ */}
//       <footer className="bg-[#0a0f1e] text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-14">

//             {/* Brand */}
//             <div className="col-span-2 md:col-span-3 lg:col-span-1">
//               <div className="flex items-center space-x-3 mb-4">
//                 <img src="/logo.png" alt="Insydz Logo" className="w-10 h-10 rounded-xl object-contain" />
//                 <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Insydz</span>
//               </div>
//               <p className="text-gray-400 text-sm leading-relaxed mb-6">
//                 AI-powered e-commerce intelligence for Indian marketplace sellers.
//               </p>
//               <button
//                 onClick={() => setLocation("/login")}
//                 className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all transform hover:scale-105 shadow-lg"
//               >
//                 Start Free →
//               </button>
//               <div className="flex space-x-3 mt-6">
//                 {[
//                   { title: "Facebook",  href: "https://www.facebook.com/profile.php?id=61586202582209", icon: <Facebook className="w-4 h-4" /> },
//                   { title: "Twitter",   href: "https://x.com/growwithinsydz",                           icon: <Twitter className="w-4 h-4" /> },
//                   { title: "Instagram", href: "https://www.instagram.com/growwithinsydz/",               icon: <Instagram className="w-4 h-4" /> },
//                   { title: "LinkedIn",  href: "https://www.linkedin.com/company/insydz/?viewAsMember=true", icon: <Linkedin className="w-4 h-4" /> },
//                 ].map(s => (
//                   <a key={s.title} title={s.title} href={s.href} target="_blank" rel="noopener noreferrer"
//                     className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
//                     {s.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Solutions */}
//             <div>
//               <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Solutions</h4>
//               <ul className="space-y-3">
//                 {[
//                   ["Amazon Sellers",  "/solutions/amazon-sellers"],
//                   ["Flipkart Sellers","/solutions/flipkart-sellers"],
//                   ["Agencies",        "/solutions/ecommerce-agencies"],
//                   ["Brand Managers",  "/solutions/brand-managers"],
//                 ].map(([l, r]) => (
//                   <li key={l}><button onClick={() => setLocation(r)} className="text-sm text-gray-400 hover:text-white transition-colors text-left">{l}</button></li>
//                 ))}
//               </ul>
//             </div>

//             {/* Product */}
//             <div>
//               <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Product</h4>
//               <ul className="space-y-3">
//                 {[
//                   ["Features",       "/features/competitor-price-tracking-feature"],
//                   ["Pricing",        "/pricing"],
//                   ["Festive Trends", "/features/festive-trend-feature"],
//                   ["Compare",        "/compare/insydzvshelium"],
//                 ].map(([l, r]) => (
//                   <li key={l}><button onClick={() => setLocation(r)} className="text-sm text-gray-400 hover:text-white transition-colors text-left">{l}</button></li>
//                 ))}
//               </ul>
//             </div>

//             {/* Resources */}
//             <div>
//               <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Resources</h4>
//               <ul className="space-y-3">
//                 {[
//                   ["Blog",              "/resources/expert-blog"],
//                   ["E-commerce Guides", "/resources/guides"],
//                   ["Video Tutorials",   "/resources/videos"],
//                   ["Case Studies",      "/resources/case-studies"],
//                   ["Free Tools",        "/free-tools/free-amazon-product-analyzer"],
//                 ].map(([l, r]) => (
//                   <li key={l}><button onClick={() => setLocation(r)} className="text-sm text-gray-400 hover:text-white transition-colors text-left">{l}</button></li>
//                 ))}
//               </ul>
//             </div>

//             {/* Company */}
//             <div>
//               <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Company</h4>
//               <ul className="space-y-3">
//                 {[
//                   ["About",       () => scrollToSection("About")],
//                   ["Our Vision",  () => setLocation("/about/our-vision")],
//                   ["Careers",     () => setLocation("/about/careers")],
//                   ["Contact",     () => setLocation("/about/careers")],
//                 ].map(([l, a]) => (
//                   <li key={l as string}>
//                     <button onClick={a as () => void} className="text-sm text-gray-400 hover:text-white transition-colors text-left">
//                       {l as string}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
//             <p className="text-gray-500 text-sm">
//               © 2025 <span className="text-purple-400 font-semibold">Insydz</span>. All rights reserved. Designed &amp; Developed in India 🇮🇳
//             </p>
//             <div className="flex items-center gap-3 text-sm text-gray-500">
//               <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
//               <span className="text-gray-700">·</span>
//               <a href="/terms-service" className="hover:text-white transition-colors">Terms of Service</a>
//               <span className="text-gray-700">·</span>
//               <a href="/privacy-policy" className="hover:text-white transition-colors">Data Disclaimer</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }



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
    { name: "Competitor Price Tracking", icon: <DollarSign className="w-4 h-4" />, route: "/features/competitor-price-tracking-feature" },
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
    { name: "Free Competitor Price Checker", icon: <DollarSign className="w-4 h-4" />, route: "/free-tools/free-competitor-price-checker" },
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

const TOC = [
  { id: "what-is",        label: "What is Price Tracking?" },
  { id: "why-critical",   label: "Why It's Critical for India" },
  { id: "how-it-works",   label: "How It Works (5 Steps)" },
  { id: "comparison",     label: "Tracking Methods Compared" },
  { id: "mistakes",       label: "5 Common Mistakes" },
  { id: "best-practices", label: "Best Practices & Execution" },
  { id: "best-tools",     label: "Best Tools for India" },
  { id: "faq",            label: "FAQs" },
  { id: "conclusion",     label: "Final Thoughts" },
];

const FAQS = [
  {
    q: "What is the best Amazon competitor price tracking tool for India?",
    a: "For Indian sellers, the best tool covers Amazon.in AND Flipkart/Meesho, sends WhatsApp alerts, and fits within the ₹500–3,000/month budget range that Indian SMBs can justify. Insydz is purpose-built for this — it's the only platform offering AI-powered price intelligence for all three major Indian marketplaces at this price point.",
  },
  {
    q: "How often does a price tracking tool check competitor prices?",
    a: "Basic free tools may check every 12–24 hours — which is too slow for competitive categories. AI-powered tools like Insydz check prices multiple times per hour, ensuring you're alerted within 60 minutes of any significant competitor price movement. For high-velocity categories like electronics or FMCG, faster tracking directly translates to Buy Box retention.",
  },
  {
    q: "Can I track competitor prices on Flipkart — not just Amazon?",
    a: "Most global tools (Helium 10, Jungle Scout) only cover Amazon. Since 60% of tier-2 and tier-3 city sellers in India do their primary business on Flipkart, this is a major gap. Insydz covers Flipkart and Meesho alongside Amazon.in, making it the only complete solution for multi-platform Indian sellers.",
  },
  {
    q: "Will automating price tracking lead to price wars?",
    a: "Only if done poorly. Blind automation — matching any competitor drop instantly — does cause price wars. Smart tools like Insydz calculate the minimum adjustment needed to stay competitive (e.g., 'Adjust from ₹999 to ₹979 — not ₹899') based on ratings, delivery, and margin data. This protects your margins while recovering the Buy Box.",
  },
  {
    q: "How much do Indian e-commerce price tracking tools cost?",
    a: "Global tools like Helium 10 run ₹4,000–8,000/month. India-first platforms like Insydz offer plans from ₹1,999/month (Starter) to ₹2,999/month (Professional), with a forever-free plan for new sellers. Most Indian sellers find the Growth plan at ₹1,299/month the right balance of features and price.",
  },
  {
    q: "Do I need technical skills to use a price tracking tool?",
    a: "No. Platforms like Insydz are designed specifically for Indian sellers who don't have tech backgrounds. You connect your Amazon/Flipkart store with a few clicks, add the competitor ASINs you want to track, and receive WhatsApp alerts with plain-language recommendations. No dashboards to learn, no CSV exports to analyse.",
  },
];

const IMAGES = {
  hero: {
    src: "/one.png",
    alt: "Indian ecommerce seller working on laptop with Amazon analytics",
    caption: "Indian e-commerce sellers who implement AI-powered competitor price tracking recover an average of ₹45,000/month in revenue previously lost to unmonitored price changes.",
  },
  tracking: {
    src: "/two.png",
    alt: "Real-time price tracking analytics dashboard on screen",
    caption: "AI-powered price tracking dashboards convert raw competitor data into actionable decisions — showing you exactly what price to set, and why, for each ASIN.",
  },
  mobile: {
    src: "/three.png",
    alt: "Mobile online shopping in India",
    caption: "Over 78% of Amazon India orders originate from mobile. A competitor who undercuts you by ₹50 captures every one of those buyers — without you ever knowing it happened.",
  },
  festive: {
    src: "/Amazon Competitor Price Tracking Tool India-Blog1_image4.png",
    alt: "Festive season ecommerce shopping bags",
    caption: "During Big Billion Days and Great Indian Festival, 40–60% of annual e-commerce revenue concentrates into 4–7 days. Real-time price tracking is your only defence against losing the Buy Box during these windows.",
  },
  warehouse: {
    src: "/Amazon Competitor Price Tracking Tool India-Blog1_image5.png",
    alt: "Ecommerce warehouse fulfillment and shipping",
    caption: "India-first tools like Insydz cover Amazon.in, Flipkart, and Meesho simultaneously — closing the multi-platform gap that global tools leave open for Indian sellers.",
  },
};

interface ArticleImgProps { src: string; alt: string; caption?: string; }
function ArticleImg({ src, alt, caption }: ArticleImgProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <figure className="article-img-wrap">
      {!loaded && <div className="img-shimmer" />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{ width: "100%", display: loaded ? "block" : "none", objectFit: "cover", maxHeight: 400 }}
      />
      {caption && <figcaption className="img-caption">{caption}</figcaption>}
    </figure>
  );
}

export default function AmazonCompetitorPriceTrackingTool() {
  const [, setLocation] = useLocation();
  const [activeSection, setActiveSection]       = useState("what-is");
  const [scrollPct, setScrollPct]               = useState(0);
  const [tocOpen, setTocOpen]                   = useState(false);
  const [openFaq, setOpenFaq]                   = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen]             = useState(false);
  const [scrolled, setScrolled]                 = useState(false);
  const [isDarkMode, setIsDarkMode]             = useState(false);
  const [activeDropdown, setActiveDropdown]     = useState<string | null>(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

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
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setActiveDropdown(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setIsMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTocOpen(false);
  };

  const handleMenuItemClick = (item: MenuItemWithBadge) => {
    if (item.route) { setLocation(item.route); setActiveDropdown(null); setIsMenuOpen(false); }
  };

  const toggleMobileMenu = (name: string) => setMobileActiveMenu(prev => prev === name ? null : name);

  const scrollToSection = (sectionId: string) => {
    setLocation("/");
    setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const DesktopDropdown = ({
    label,
    menuKey,
    accent = "purple",
  }: {
    label: string;
    menuKey: keyof NavigationMenu;
    accent?: "purple" | "orange";
  }) => {
    const items = navigationMenu[menuKey];
    const isActive = activeDropdown === label;
    const accentCls =
      accent === "orange"
        ? "text-orange-600 dark:text-orange-500 hover:text-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900/20"
        : "text-gray-700 dark:text-gray-300 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20";
    const dropHoverCls =
      accent === "orange"
        ? "hover:bg-orange-50 dark:hover:bg-orange-900/20 group-hover:text-orange-600"
        : "hover:bg-purple-50 dark:hover:bg-purple-900/20 group-hover:text-purple-600";
    const iconCls =
      accent === "orange" ? "text-orange-600 dark:text-orange-400" : "text-purple-600 dark:text-purple-400";

    return (
      <div className="relative">
        <button
          onMouseEnter={() => setActiveDropdown(label)}
          className={`px-2 xl:px-3 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1 ${
            isActive
              ? accent === "orange" ? "text-orange-600 font-semibold" : "text-purple-600 font-semibold"
              : accentCls
          }`}
        >
          {label}
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isActive ? "rotate-180" : ""}`} />
        </button>
        {isActive && (
          <div
            onMouseLeave={() => setActiveDropdown(null)}
            className="absolute top-full left-0 mt-2 w-64 xl:w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 z-50"
          >
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => handleMenuItemClick(item)}
                className={`w-full px-4 py-2.5 text-left transition-colors flex items-center gap-3 group ${dropHoverCls}`}
              >
                <span className={`${iconCls} group-hover:scale-110 transition-transform flex-shrink-0`}>{item.icon}</span>
                <span className="text-sm text-gray-700 dark:text-gray-300 flex-1 text-left">{item.name}</span>
                {item.badge && (
                  <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded-full font-semibold flex-shrink-0">
                    {item.badge}
                  </span>
                )}
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
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        @keyframes imgShimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }

        /* ── Reading progress ─────────────────────────────────── */
        .read-progress {
          position: fixed; top: 0; left: 0; height: 3px;
          background: linear-gradient(90deg,#f97316,#ef4444);
          z-index: 9999; transition: width .1s linear;
          border-radius: 0 2px 2px 0;
        }

        /* ── Nav height token (used everywhere) ──────────────── */
        :root { --nav-h: 72px; }
        @media(min-width:1024px){ :root { --nav-h: 80px; } }

        /* ── Article layout ──────────────────────────────────── */
        .article-layout {
          max-width: 1200px; margin: 0 auto;
          padding: 40px 16px 80px;
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 40px;
          align-items: start;
        }
        @media(min-width:1280px){
          .article-layout { padding: 48px 24px 80px; grid-template-columns: 240px 1fr; gap: 48px; }
        }
        @media(max-width:1023px){
          .article-layout { grid-template-columns: 1fr; gap: 0; padding: 24px 16px 60px; }
        }
        @media(max-width:480px){
          .article-layout { padding: 16px 12px 48px; }
        }

        /* ── Sidebar TOC ─────────────────────────────────────── */
        .toc-sidebar {
          position: sticky; top: calc(var(--nav-h) + 16px);
          background: #fff; border: 1px solid #e5e7eb;
          border-radius: 16px; padding: 20px;
          box-shadow: 0 2px 12px rgba(0,0,0,.05);
          max-height: calc(100vh - var(--nav-h) - 32px);
          overflow-y: auto;
        }
        .dark .toc-sidebar { background: #111827; border-color: #1f2937; }
        @media(max-width:1023px){ .toc-sidebar { display: none !important; } }

        /* ── Mobile TOC ──────────────────────────────────────── */
        .mobile-toc-btn {
          display: none; width: 100%;
          background: #fff; border: 1px solid #e5e7eb;
          border-radius: 12px; padding: 13px 16px;
          font-family: 'Sora', sans-serif; font-size: 14px;
          font-weight: 600; color: #111; cursor: pointer;
          align-items: center; justify-content: space-between;
          margin-bottom: 16px; touch-action: manipulation;
        }
        .dark .mobile-toc-btn { background: #111827; border-color: #1f2937; color: #f9fafb; }
        @media(max-width:1023px){ .mobile-toc-btn { display: flex; } }

        .mobile-toc-panel {
          display: none; background: #fff;
          border: 1px solid #e5e7eb; border-radius: 12px;
          padding: 12px; margin-bottom: 24px;
        }
        .dark .mobile-toc-panel { background: #111827; border-color: #1f2937; }
        .mobile-toc-panel.open { display: block; }

        /* ── Article body typography ─────────────────────────── */
        .article-body {
          font-family: 'Lora', serif;
          font-size: clamp(15px, 1.8vw, 17px);
          line-height: 1.8; color: #374151;
        }
        .dark .article-body { color: #d1d5db; }
        .article-body h2 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(19px, 2.8vw, 28px);
          font-weight: 800; color: #111;
          letter-spacing: -.4px; margin: 48px 0 14px;
          line-height: 1.25; scroll-margin-top: calc(var(--nav-h) + 16px);
        }
        .dark .article-body h2 { color: #f9fafb; }
        .article-body h3 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(15px, 1.9vw, 19px);
          font-weight: 700; color: #111;
          margin: 28px 0 10px;
          scroll-margin-top: calc(var(--nav-h) + 16px);
        }
        .dark .article-body h3 { color: #f3f4f6; }
        .article-body p { margin-bottom: 18px; }
        .article-body ul, .article-body ol { padding-left: 20px; margin-bottom: 18px; }
        .article-body li { margin-bottom: 8px; }
        .article-body strong { font-weight: 700; color: #111; }
        .dark .article-body strong { color: #f9fafb; }

        /* ── Callout boxes ───────────────────────────────────── */
        .callout { border-radius: 12px; padding: 16px 18px; margin: 24px 0; }
        .callout.pro  { background: #f0fdf4; border: 1px solid #86efac; border-left: 4px solid #16a34a; }
        .callout.warn { background: #fffbeb; border: 1px solid #fcd34d; border-left: 4px solid #d97706; }
        .callout.info { background: #eff6ff; border: 1px solid #93c5fd; border-left: 4px solid #2563eb; }
        .callout.teal { background: #f0fdfa; border: 1px solid #99f6e4; border-left: 4px solid #0d9488; }
        .dark .callout.pro  { background: #052e16; border-color: #166534; }
        .dark .callout.warn { background: #1c1507; border-color: #78350f; }
        .dark .callout.info { background: #0c1a2e; border-color: #1e3a5f; }
        .dark .callout.teal { background: #042f2e; border-color: #134e4a; }
        .callout-label {
          font-family: 'Sora', sans-serif; font-size: 11px;
          font-weight: 700; letter-spacing: 1px;
          text-transform: uppercase; margin-bottom: 7px;
        }
        .callout.pro  .callout-label { color: #16a34a; }
        .callout.warn .callout-label { color: #d97706; }
        .callout.info .callout-label { color: #2563eb; }
        .callout.teal .callout-label { color: #0d9488; }
        .callout-text {
          font-family: 'Lora', serif;
          font-size: clamp(14px, 1.6vw, 15px);
          color: #374151; line-height: 1.72;
        }
        .dark .callout-text { color: #d1d5db; }

        /* ── Inline CTA ──────────────────────────────────────── */
        .inline-cta {
          background: linear-gradient(135deg,#fff7ed,#ffedd5);
          border: 1px solid #fed7aa; border-radius: 16px;
          padding: clamp(16px,3vw,28px) clamp(16px,4vw,32px);
          margin: 36px 0; display: flex;
          align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap;
        }
        .dark .inline-cta { background: linear-gradient(135deg,#1c0a00,#2d1500); border-color: #7c2d12; }
        .inline-cta h4 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(14px, 1.6vw, 16px);
          font-weight: 800; color: #111; margin-bottom: 4px;
        }
        .dark .inline-cta h4 { color: #f9fafb; }
        .inline-cta p {
          font-family: 'Sora', sans-serif;
          font-size: clamp(12px, 1.4vw, 14px);
          color: #6b7280; margin: 0;
        }
        .dark .inline-cta p { color: #9ca3af; }
        .inline-cta-btn {
          background: linear-gradient(135deg,#f97316,#ef4444);
          color: white; font-family: 'Sora', sans-serif;
          font-weight: 700; font-size: 14px;
          padding: 12px 20px; border-radius: 12px;
          border: none; cursor: pointer; white-space: nowrap;
          transition: all .2s; touch-action: manipulation;
          min-height: 44px;
        }
        .inline-cta-btn:hover { opacity: .9; transform: translateY(-1px); }
        @media(max-width:480px){
          .inline-cta { flex-direction: column; align-items: stretch; }
          .inline-cta-btn { width: 100%; text-align: center; }
        }

        /* ── Data tables ─────────────────────────────────────── */
        .dt-wrap {
          overflow-x: auto; margin: 20px 0;
          border-radius: 12px; border: 1px solid #e5e7eb;
          -webkit-overflow-scrolling: touch;
        }
        .dark .dt-wrap { border-color: #1f2937; }
        table.dt {
          width: 100%; border-collapse: collapse;
          font-family: 'Sora', sans-serif;
          font-size: clamp(11px, 1.3vw, 13px);
          min-width: 480px;
        }
        table.dt th {
          background: #111827; color: white;
          padding: 11px 14px; text-align: left;
          font-size: clamp(10px, 1.1vw, 11px);
          letter-spacing: .5px; text-transform: uppercase;
          white-space: nowrap;
        }
        table.dt td {
          padding: 11px 14px; border-bottom: 1px solid #e5e7eb;
          color: #374151; vertical-align: middle;
        }
        .dark table.dt td { border-color: #1f2937; color: #d1d5db; }
        table.dt tr:last-child td { border-bottom: none; }
        table.dt tr:nth-child(even) td { background: #f9fafb; }
        .dark table.dt tr:nth-child(even) td { background: #0f172a; }
        .bg { background: #dcfce7; color: #15803d; font-weight: 700; padding: 3px 8px; border-radius: 20px; font-size: 11px; white-space: nowrap; }
        .bo { background: #fff7ed; color: #ea580c; font-weight: 700; padding: 3px 8px; border-radius: 20px; font-size: 11px; white-space: nowrap; }
        .br { background: #fef2f2; color: #dc2626; font-weight: 700; padding: 3px 8px; border-radius: 20px; font-size: 11px; white-space: nowrap; }
        .bb { background: #dbeafe; color: #1e40af; font-weight: 700; padding: 3px 8px; border-radius: 20px; font-size: 11px; white-space: nowrap; }

        /* ── Steps ───────────────────────────────────────────── */
        .step { display: flex; gap: 14px; margin-bottom: 20px; }
        .step-num {
          flex-shrink: 0; width: 34px; height: 34px;
          background: linear-gradient(135deg,#f97316,#ef4444);
          color: white; font-family: 'Sora', sans-serif;
          font-weight: 800; font-size: 14px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin-top: 3px;
        }
        .step-content h4 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(14px, 1.5vw, 15px);
          font-weight: 700; color: #111; margin-bottom: 5px;
        }
        .dark .step-content h4 { color: #f9fafb; }
        .step-content p {
          font-size: clamp(14px, 1.5vw, 15px);
          margin: 0; font-family: 'Lora', serif;
        }

        /* ── Related grid ────────────────────────────────────── */
        .related-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 14px; margin-top: 16px;
        }
        @media(max-width:600px){ .related-grid { grid-template-columns: 1fr; } }
        .related-card {
          background: #fff; border: 1px solid #e5e7eb;
          border-radius: 14px; padding: 16px; cursor: pointer;
          transition: all .2s; touch-action: manipulation;
        }
        .dark .related-card { background: #111827; border-color: #1f2937; }
        .related-card:hover { border-color: #f97316; box-shadow: 0 4px 16px rgba(249,115,22,.12); transform: translateY(-2px); }
        @media(hover:none){ .related-card:hover { transform: none; } }

        /* ── FAQ ─────────────────────────────────────────────── */
        .faq-item {
          border: 1px solid #e5e7eb; border-radius: 12px;
          margin-bottom: 10px; overflow: hidden;
          background: #fff; transition: border-color .2s;
        }
        .dark .faq-item { background: #111827; border-color: #1f2937; }
        .faq-item.open { border-color: #f97316; }
        .faq-q {
          display: flex; justify-content: space-between;
          align-items: center; padding: 16px 18px;
          cursor: pointer; font-family: 'Sora', sans-serif;
          font-size: clamp(13px, 1.5vw, 15px);
          font-weight: 600; color: #111; gap: 12px;
          touch-action: manipulation; min-height: 44px;
          -webkit-tap-highlight-color: transparent;
        }
        .dark .faq-q { color: #f9fafb; }
        .faq-icon {
          flex-shrink: 0; width: 24px; height: 24px;
          background: #fff7ed; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #f97316; font-size: 16px; font-weight: 700;
          transition: transform .2s;
        }
        .faq-icon.open { transform: rotate(45deg); background: #f97316; color: white; }
        .faq-a {
          font-family: 'Lora', serif;
          font-size: clamp(14px, 1.5vw, 15px);
          line-height: 1.7; color: #374151;
          padding: 0 18px 16px;
        }
        .dark .faq-a { color: #d1d5db; }

        /* ── Article image ───────────────────────────────────── */
        .article-img-wrap {
          margin: 28px 0; border-radius: 12px;
          overflow: hidden; border: 1px solid #e5e7eb;
          background: #f9fafb;
          box-shadow: 0 4px 20px rgba(0,0,0,.06);
        }
        .dark .article-img-wrap { border-color: #1f2937; background: #111827; }
        .img-shimmer {
          height: clamp(180px, 30vw, 300px);
          background: linear-gradient(90deg,#f3f4f6 25%,#e5e7eb 50%,#f3f4f6 75%);
          background-size: 400% 100%;
          animation: imgShimmer 1.6s ease infinite;
        }
        .img-caption {
          padding: 9px 14px 11px;
          font-family: 'Sora', sans-serif; font-size: 12px;
          color: #9ca3af; line-height: 1.5;
          border-top: 1px solid #e5e7eb; background: #f9fafb;
        }
        .dark .img-caption { background: #111827; border-color: #1f2937; }

        /* ── Stat strip ──────────────────────────────────────── */
        .stat-strip {
          display: flex; flex-wrap: wrap;
          border: 1px solid #e5e7eb; border-radius: 14px;
          overflow: hidden; margin-top: 28px;
        }
        .dark .stat-strip { border-color: #1f2937; }
        .stat-item {
          flex: 1; min-width: 130px;
          padding: clamp(12px,2vw,16px);
          text-align: center; border-right: 1px solid #e5e7eb;
        }
        .dark .stat-item { border-color: #1f2937; }
        .stat-item:last-child { border-right: none; }
        @media(max-width:480px){
          .stat-item { min-width: 50%; }
          .stat-item:nth-child(2) { border-right: none; }
          .stat-item:nth-child(1), .stat-item:nth-child(2) { border-bottom: 1px solid #e5e7eb; }
          .dark .stat-item:nth-child(1), .dark .stat-item:nth-child(2) { border-bottom-color: #1f2937; }
        }

        /* ── Article hero ────────────────────────────────────── */
        .article-hero {
          background: #fff; border-bottom: 1px solid #e5e7eb;
          padding: 0 clamp(12px,4vw,32px);
          padding-top: calc(var(--nav-h) + clamp(24px,4vw,40px));
        }
        .dark .article-hero { background: #0f172a; border-color: #1f2937; }
        .hero-inner { max-width: 820px; margin: 0 auto; padding-bottom: 32px; }

        /* ── Final CTA ───────────────────────────────────────── */
        .final-cta-block {
          background: linear-gradient(135deg,#111827,#1f2937);
          border-radius: 20px;
          padding: clamp(28px,5vw,56px) clamp(20px,5vw,48px);
          text-align: center; margin: 48px 0 0;
        }
        .final-cta-benefits {
          display: flex; justify-content: center;
          flex-wrap: wrap; gap: 8px 20px; margin-bottom: 28px;
        }
        .final-cta-benefit {
          color: #cbd5e1; font-size: clamp(12px,1.4vw,13.5px);
          display: flex; align-items: center; gap: 6px;
          font-family: 'Sora', sans-serif;
        }
        .final-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg,#f97316,#ef4444);
          color: white; font-family: 'Sora', sans-serif;
          font-weight: 700; font-size: clamp(14px,1.6vw,16px);
          padding: clamp(14px,2vw,16px) clamp(28px,4vw,40px);
          border-radius: 50px; border: none; cursor: pointer;
          transition: all .2s; touch-action: manipulation;
          min-height: 52px;
        }
        .final-cta-btn:hover { opacity: .9; transform: scale(1.04); }
        @media(hover:none){ .final-cta-btn:hover { transform: none; } }
        @media(max-width:400px){ .final-cta-btn { width: 100%; justify-content: center; } }

        /* ── TOC link ────────────────────────────────────────── */
        .toc-link {
          display: block; font-size: clamp(12px,1.3vw,13px);
          font-weight: 500; color: #6b7280;
          padding: 7px 10px; border-radius: 8px;
          cursor: pointer; border: none; background: none;
          text-align: left; width: 100%; transition: all .15s;
          margin-bottom: 2px; line-height: 1.4;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }
        .toc-link:hover { background: #fff7ed; color: #ea580c; }
        .toc-link.active {
          background: #fff7ed; color: #ea580c;
          font-weight: 700; border-left: 3px solid #f97316;
          padding-left: 8px;
        }
        .dark .toc-link { color: #9ca3af; }
        .dark .toc-link:hover, .dark .toc-link.active { background: #1c0a00; color: #fb923c; }

        /* ── Mistake cards ───────────────────────────────────── */
        .mistake-card {
          display: flex; border: 1px solid #e5e7eb;
          border-radius: 12px; overflow: hidden; margin-bottom: 12px;
        }
        .dark .mistake-card { border-color: #1f2937; }
        .mistake-num {
          flex-shrink: 0; width: 48px;
          background: #111827; color: white;
          font-family: 'Sora', sans-serif;
          font-size: clamp(16px,2vw,20px);
          font-weight: 800; display: flex;
          align-items: center; justify-content: center;
        }
        .mistake-body { padding: 14px 16px; }
        .mistake-body strong {
          display: block; font-family: 'Sora', sans-serif;
          font-size: clamp(13px,1.4vw,14px);
          font-weight: 700; color: #111; margin-bottom: 5px;
        }
        .dark .mistake-body strong { color: #f9fafb; }
        .mistake-body p {
          font-family: 'Sora', sans-serif;
          font-size: clamp(12px,1.3vw,13.5px);
          color: #6b7280; line-height: 1.6; margin: 0;
        }
        .dark .mistake-body p { color: #9ca3af; }

        /* ── Best-practice grid ──────────────────────────────── */
        .bp-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 14px; margin: 16px 0 28px;
        }
        @media(max-width:768px){ .bp-grid { grid-template-columns: 1fr; } }
        @media(min-width:640px) and (max-width:767px){ .bp-grid { grid-template-columns: repeat(2,1fr); } }
        .bp-card { border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; }
        .dark .bp-card { border-color: #1f2937; }
        .bp-head {
          padding: 11px 14px;
          font-family: 'Sora', sans-serif; font-size: 12px;
          font-weight: 700; text-transform: uppercase;
          letter-spacing: .5px; color: white;
        }
        .bp-body { padding: 12px 14px; }
        .bp-body ul { list-style: none; padding: 0; margin: 0; }
        .bp-body li {
          font-family: 'Sora', sans-serif;
          font-size: clamp(11.5px, 1.2vw, 12.5px);
          color: #374151; line-height: 1.5;
          margin-bottom: 8px; padding-left: 16px;
          position: relative;
        }
        .bp-body li::before {
          content: "✓"; position: absolute; left: 0;
          color: #f97316; font-weight: 700; font-size: 11px; top: 1px;
        }
        .dark .bp-body li { color: #d1d5db; }

        /* ── Metrics grid ────────────────────────────────────── */
        .metrics-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin: 16px 0 28px;
        }
        @media(max-width:540px){ .metrics-grid { grid-template-columns: 1fr; } }
        .metric-card {
          border: 1px solid #e5e7eb; border-radius: 12px;
          padding: 16px; display: flex; gap: 12px;
          align-items: flex-start; background: #fff;
        }
        .dark .metric-card { border-color: #1f2937; background: #111827; }
        .metric-icon {
          flex-shrink: 0; width: 38px; height: 38px;
          border-radius: 10px; background: #fff7ed;
          display: flex; align-items: center;
          justify-content: center; font-size: 18px;
        }
        .metric-title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(12.5px,1.4vw,13.5px);
          font-weight: 700; color: #111; margin-bottom: 4px;
        }
        .dark .metric-title { color: #f9fafb; }
        .metric-desc {
          font-family: 'Sora', sans-serif;
          font-size: clamp(11.5px,1.2vw,12.5px);
          color: #6b7280; line-height: 1.5;
        }
        .dark .metric-desc { color: #9ca3af; }

        /* ── Takeaway box ────────────────────────────────────── */
        .takeaway-box {
          background: #111827; border-radius: 16px;
          padding: clamp(20px,3vw,28px) clamp(18px,3vw,30px);
          margin: 24px 0;
        }
        .takeaway-box h3 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(15px,1.7vw,17px);
          font-weight: 800; color: white; margin: 0 0 14px;
          display: flex; align-items: center; gap: 10px;
        }
        .takeaway-item {
          display: flex; align-items: flex-start;
          gap: 10px; margin-bottom: 10px;
        }
        .takeaway-dot {
          flex-shrink: 0; width: 20px; height: 20px;
          border-radius: 50%; background: #f97316;
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 800; color: white; margin-top: 2px;
        }
        .takeaway-text {
          font-family: 'Lora', serif;
          font-size: clamp(13.5px,1.5vw,14.5px);
          color: #cbd5e1; line-height: 1.6;
        }

        /* ── Nav button tap targets ──────────────────────────── */
        nav button { -webkit-tap-highlight-color: transparent; }

        /* ── Scrollbar for TOC sidebar ───────────────────────── */
        .toc-sidebar::-webkit-scrollbar { width: 4px; }
        .toc-sidebar::-webkit-scrollbar-track { background: transparent; }
        .toc-sidebar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 4px; }
        .dark .toc-sidebar::-webkit-scrollbar-thumb { background: #374151; }

        /* ── Footer link tap size ────────────────────────────── */
        footer button, footer a { min-height: 36px; display: inline-flex; align-items: center; }
      `}</style>

      {/* Reading progress */}
      <div className="read-progress" style={{ width: `${scrollPct}%` }} />

      {/* ════════════════════════════════════════════ NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg"
            : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">
          <div className="flex items-center justify-between h-[72px] lg:h-20">

            {/* Logo */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <div className="flex items-center space-x-1 group cursor-pointer" onClick={() => setLocation("/")}>
                <div className="relative">
                  <img
                    src="/logo.png"
                    alt="Insydz Logo"
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain"
                  />
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
                </div>
                <span className="text-lg lg:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Insydz
                </span>
              </div>
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1" ref={dropdownRef}>
              <DesktopDropdown label="Solutions"  menuKey="Solutions" />
              <DesktopDropdown label="Use Cases"  menuKey="Use Cases" />
              <DesktopDropdown label="Features"   menuKey="Features" />
              <button
                onClick={() => setLocation("/pricing")}
                onMouseEnter={() => setActiveDropdown(null)}
                className="px-2 xl:px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
              >
                Pricing
              </button>
              <DesktopDropdown label="Free Tools" menuKey="Free Tools" />
              <DesktopDropdown label="Compare"    menuKey="Compare" />
              <DesktopDropdown label="Resources"  menuKey="Resources" accent="orange" />
              <DesktopDropdown label="About"      menuKey="About" />
              <Button
                onClick={() => setLocation("/login")}
                onMouseEnter={() => setActiveDropdown(null)}
                className="ml-2 text-sm bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-4 xl:px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Login
              </Button>
              <button
                className="ml-1 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                onClick={() => setIsDarkMode(!isDarkMode)}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-gray-800" />}
              </button>
            </div>

            {/* Mobile right controls */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
                onClick={() => setIsDarkMode(!isDarkMode)}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-gray-700 dark:text-gray-200" />}
              </button>
              <button
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6 text-gray-700 dark:text-gray-200" /> : <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 max-h-[calc(100dvh-72px)] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              <button
                onClick={() => { setLocation("/resources/expert-blog"); setIsMenuOpen(false); }}
                className="flex items-center gap-2 w-full px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium text-sm"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </button>
              {(
                [
                  ["Solutions",  "Solutions",  "purple"],
                  ["Use Cases",  "Use Cases",  "purple"],
                  ["Features",   "Features",   "purple"],
                  ["Free Tools", "Free Tools", "purple"],
                  ["Compare",    "Compare",    "purple"],
                  ["Resources",  "Resources",  "orange"],
                  ["About",      "About",      "purple"],
                ] as [string, keyof NavigationMenu, string][]
              ).map(([label, key, accent]) => (
                <div key={label}>
                  <button
                    onClick={() => toggleMobileMenu(label)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg font-medium text-sm ${
                      accent === "orange"
                        ? "text-orange-600 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                        : "text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                    }`}
                  >
                    {label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileActiveMenu === label && (
                    <div className="ml-4 mt-1 space-y-0.5 pb-1">
                      {navigationMenu[key].map((item, i) => (
                        <button
                          key={i}
                          onClick={() => handleMenuItemClick(item)}
                          className={`flex items-center gap-2 w-full px-4 py-2.5 text-sm rounded-lg ${
                            accent === "orange"
                              ? "text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                              : "text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                          }`}
                        >
                          <span className="flex-shrink-0">{item.icon}</span>
                          <span className="flex-1 text-left">{item.name}</span>
                          {item.badge && (
                            <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full flex-shrink-0">
                              {item.badge}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={() => { setLocation("/pricing"); setIsMenuOpen(false); }}
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium text-sm"
              >
                Pricing
              </button>
              <div className="pt-2">
                <Button
                  onClick={() => { setLocation("/login"); setIsMenuOpen(false); }}
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold py-3 rounded-xl"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ════════════════════════════════════════════ HERO */}
      <section className="article-hero">
        <div className="hero-inner" style={{marginLeft: "150px", marginRight: "auto"}}>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-5 flex-wrap" aria-label="Breadcrumb">
            <button onClick={() => setLocation("/")} className="hover:text-orange-500 transition-colors">Home</button>
            <span>/</span>
            <button onClick={() => setLocation("/resources/expert-blog")} className="hover:text-orange-500 transition-colors">Expert Blog</button>
            <span>/</span>
            <button onClick={() => setLocation("/solutions/amazon-sellers")} className="hover:text-orange-500 transition-colors hidden sm:inline">Seller Tools</button>
            <span className="hidden sm:inline">/</span>
            <span className="text-orange-500 font-medium">Price Tracking</span>
          </nav>

          {/* Category tag */}
          <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full" />
            Seller Tools &amp; Strategy
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white mb-4">
            Amazon{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Competitor Price Tracking Tool
            </span>{" "}
            India: Complete Guide for Sellers (2026)
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-6" style={{ fontFamily: "'Lora', serif" }}>
            Track competitor prices on Amazon.in, Flipkart, and Meesho in real time. Discover how Indian sellers use
            AI-powered tools to protect margins, win the Buy Box, and outsell rivals — with a complete 2026 playbook.
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-gray-200 dark:border-gray-800 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 flex-shrink-0" />
              <strong className="text-gray-800 dark:text-gray-200">Insydz Research Team</strong>
            </div>
            <span className="text-gray-300 dark:text-gray-700 hidden sm:inline">·</span>
            <span className="hidden sm:inline">Last updated: <strong className="text-gray-700 dark:text-gray-300">January 2026</strong></span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <strong className="text-gray-700 dark:text-gray-300">14 min read</strong>
            </div>
            <span className="bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400 text-xs font-bold px-2 py-0.5 rounded">
              Updated for 2026
            </span>
          </div>

          {/* Stat strip */}
          <div className="stat-strip" style={{ width: "140%" }}>
            {[
              ["15–30%", "Monthly Profit Lost to Reactive Pricing"],
              ["70–80%", "Buy Box = Share of Category Sales"],
              ["₹45K",   "Avg. Revenue Lost Per Seller / Month"],
              ["<1 hr",  "AI Price Alert Response Time"],
            ].map(([num, lbl]) => (
              <div className="stat-item" key={num}>
                <div className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">{num}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium leading-tight">{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image */}
        {/* <div style={{ maxWidth: 820, margin: "0 auto", borderTop: "1px solid #e5e7eb" }}>
          <ArticleImg {...IMAGES.hero} />
        </div>
      </section> */}
      <div
  style={{
    width: "80%",
    margin: "0 auto",
    borderTop: "1px solid #e5e7eb"
  }}
>
  <ArticleImg {...IMAGES.hero} />
</div>
</section>
{/* Key Takeaways */}
            <div className="takeaway-box" style={{ maxWidth: "1170px", margin: "40px auto" }}>
              <h3><span style={{ color: "#f97316" }}>✓</span> Key Takeaways</h3>
              {[
                "Amazon competitor price tracking tools automate what currently takes Indian sellers 3–5 hours daily in manual Excel work.",
                "Price changes affect your Amazon/Flipkart search rank and Buy Box eligibility — not just your revenue.",
                "Real-time WhatsApp alerts (not email) are critical for Indian SMB sellers to act within minutes, not hours.",
                "AI-powered tools provide actionable recommendations — not just data dumps — which is the difference between insight and action.",
                "Global tools like Helium 10 don't cover Flipkart or Meesho and are priced out of reach for most Indian sellers.",
                "India-first platforms like Insydz cover Amazon, Flipkart, and Meesho at 60–85% lower cost, with WhatsApp alerts.",
                "Combining price tracking with review intelligence and keyword tracking gives Indian sellers a complete competitive picture.",
              ].map(t => (
                <div className="takeaway-item" key={t}>
                  <div className="takeaway-dot">✓</div>
                  <div className="takeaway-text">{t}</div>
                </div>
              ))}
            </div>


      {/* ════════════════════════════════════════════ ARTICLE LAYOUT */}
      <div className="article-layout">

        {/* Sidebar TOC */}
        <aside className="toc-sidebar" aria-label="Table of contents">
          <div className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
            Table of Contents
          </div>
          {TOC.map(t => (
            <button
              key={t.id}
              className={`toc-link${activeSection === t.id ? " active" : ""}`}
              onClick={() => go(t.id)}
            >
              {t.label}
            </button>
          ))}
          <div className="mt-5 pt-5 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={() => setLocation("/login")}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-sm font-bold py-2.5 rounded-xl transition-all"
            >
              👉 Start Free with Insydz
            </button>
            <p className="text-center text-xs text-gray-400 mt-2">No credit card required</p>
          </div>
        </aside>

        {/* Article body */}
        <main>
          {/* Mobile TOC */}
          <button className="mobile-toc-btn" onClick={() => setTocOpen(!tocOpen)} aria-expanded={tocOpen}>
            📋 Table of Contents <span>{tocOpen ? "▲" : "▼"}</span>
          </button>
          <div className={`mobile-toc-panel${tocOpen ? " open" : ""}`} role="navigation">
            {TOC.map(t => (
              <button key={t.id} className="toc-link" style={{ display: "block", marginBottom: 4 }} onClick={() => go(t.id)}>
                {t.label}
              </button>
            ))}
          </div>

          <article className="article-body">

            {/* S1 */}
            <h2 id="what-is">What is an Amazon Competitor Price Tracking Tool for India?</h2>
            <p>
              An <strong>Amazon competitor price tracking tool for India</strong> is software that automatically monitors
              your rivals' product prices, stock availability, and listing changes on Amazon.in, Flipkart, and Meesho —
              in real time, without any manual effort. Unlike generic global tools built for US or European marketplaces,
              India-focused platforms account for the pricing dynamics, seller behaviour, and platform nuances unique to
              Indian e-commerce.
            </p>
            <p>
              Here's the scale of the problem: Indian sellers on Amazon.in collectively lose an estimated{" "}
              <strong>15–30% of potential monthly profit</strong> due to reactive — rather than proactive — pricing
              decisions.
            </p>

            <div className="callout teal">
              <div className="callout-label">💡 In Simple Terms</div>
              <div className="callout-text">
                Instead of manually checking 10 competitor listings every morning on Amazon.in (which takes 2–3 hours),
                a price tracking tool does it automatically, 24×7, and{" "}
                <strong>alerts you on WhatsApp the moment a competitor drops their price or goes out of stock</strong>{" "}
                — so you can act first.
              </div>
            </div>

            <ArticleImg {...IMAGES.tracking} />

            {/* S2 */}
            <h2 id="why-critical">Why is Competitor Price Tracking Critical for Indian Sellers?</h2>
            <p>
              Indian e-commerce is one of the most price-sensitive markets in the world. Shoppers compare prices across
              3–5 sellers before purchasing. A <strong>₹50 difference on a ₹500 product</strong> can shift the Buy Box
              — and with it, 70–80% of the category's sales volume.
            </p>

            <h3>Revenue Leakage is Silent and Compounding</h3>
            <p>
              Most Indian sellers price once and forget. When a competitor drops their price by ₹100 overnight, your
              product slides off the first page of Amazon search results. You don't even know it happened. Three weeks
              later, you've lost <strong>₹45,000 in revenue you never even tracked</strong>.
            </p>

            {/* <ArticleImg {...IMAGES.mobile} /> */}

            <h3>Amazon &amp; Flipkart Algorithm Penalises Stale Pricing</h3>
            <p>
              Both Amazon and Flipkart factor in price competitiveness when deciding which products to feature in search
              results and 'Recommended' carousels. A product that's ₹200 more expensive than the category median gets
              suppressed — even if your reviews are better.
            </p>

            <div className="callout warn">
              <div className="callout-label">⚠️ Real Seller Example</div>
              <div className="callout-text">
                A Delhi-based electronics accessories seller was doing ₹3.2 lakh/month on Amazon. A new competitor
                entered with a ₹30 lower price. Sales dropped to ₹1.8 lakh within 6 weeks. The seller found out via a
                customer message — not a tool. Had they tracked prices in real time, they could have matched the
                competitor within an hour and retained the Buy Box.
              </div>
            </div>

            <div 
  className="callout warn"
  style={{
    backgroundColor: "#eef0f6",
    border: "1px solid #d9dce6",
    borderRadius: "12px",
    padding: "18px"
  }}
>
  <div
    className="callout-label"
    style={{
      color: "#4f46e5",
      fontWeight: "700",
      fontSize: "14px",
      letterSpacing: "0.5px",
      marginBottom: "8px"
    }}
  >
    AI OVERVIEW SUMMARY
  </div>

  <div
    className="callout-text"
    style={{
      color: "#1f2937",
      fontSize: "16px",
      lineHeight: "1.6"
    }}
  >
    Amazon competitor price tracking tools help Indian sellers monitor rival prices on Amazon.in, Flipkart, and Meesho in real time. They reduce revenue leakage caused by reactive pricing, protect Buy Box position, and enable faster, smarter decisions — especially for sellers managing 10–50 SKUs without a full-time analyst.
  </div>
</div>

            <h3>The Festive Season Window is Unforgiving</h3>
            <p>
              During Big Billion Days and Great Indian Festival, 40–60% of annual e-commerce revenue concentrates into
              4–7 days. A seller who loses the Buy Box on Day 1 of a festive event often can't recover — the algorithm
              has already reallocated visibility to competitors.
            </p>

            {/* <ArticleImg {...IMAGES.festive} /> */}

            {/* <div className="callout warn">
              <div className="callout-label">⚠️ Real Seller Example</div>
              <div className="callout-text">
                A Delhi-based electronics accessories seller was doing ₹3.2 lakh/month on Amazon. A new competitor
                entered with a ₹30 lower price. Sales dropped to ₹1.8 lakh within 6 weeks. The seller found out via a
                customer message — not a tool. Had they tracked prices in real time, they could have matched the
                competitor within an hour and retained the Buy Box.
              </div>
            </div> */}

            {/* S3 */}
            <h2 id="how-it-works">How Does Amazon Competitor Price Tracking Work?</h2>
            <p>
              Modern tools have replaced the manual spreadsheet workflow with a{" "}
              <strong>5-step automated intelligence loop:</strong>
            </p>

            {(
              [
                ["Connect Your Seller Account",       "Link your Amazon/Flipkart seller account and add your top 5–10 competitor ASINs to start monitoring immediately."],
                ["Automated Live Data Crawling",       "The tool's crawler or API pulls live price data from product listings at frequent intervals — every 15–60 minutes for AI-powered tools like Insydz."],
                ["AI Engine Analysis",                 "The AI engine compares your price against the category benchmark and competitor prices, factoring in ratings, delivery speed, and stock levels."],
                ["WhatsApp / Email Alert Triggered",   "You receive a WhatsApp or email alert the moment a competitor changes price by more than your defined threshold (e.g., ±5%)."],
                ["Actionable AI Recommendation",       `The platform gives a decision, not just data: "Competitor A dropped to ₹899. Recommend adjusting to ₹919 to stay competitive while protecting ₹42 more margin."`],
              ] as [string, string][]
            ).map(([title, desc], i) => (
              <div className="step" key={i}>
                <div className="step-num">{i + 1}</div>
                <div className="step-content">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}

            <div className="callout pro">
              <div className="callout-label">🔑 Key Insight</div>
              <div className="callout-text">
                <strong>Manual tracking gives you data points. AI-powered intelligence gives you decisions.</strong>{" "}
                That gap is the difference between reacting tomorrow and winning today.
              </div>
            </div>

            {/* S4 */}
            <h2 id="comparison">Types of Amazon Price Tracking Approaches (Comparison)</h2>

           <figure style={{ margin: "24px 0", overflow: "hidden", borderRadius: "12px" }}>
  
  <img
    src="/Amazon Competitor Price Tracking Tool India-Blog1_image3.png"
    alt="Ecommerce pricing execution model"
    style={{
      width: "100%",
      display: "block"
    }}
  />

  <div
    style={{
      background: "#f1f5f9",
      padding: "14px 18px",
      fontSize: "13.5px",
      lineHeight: "1.6",
      color: "#64748b",
      borderTop: "1px solid #e2e8f0"
    }}
  >
    AI-powered price tracking dashboards surface the exact adjustments needed to protect Buy Box position — no manual analysis required.
  </div>

</figure>

            <div className="dt-wrap">
              <table className="dt">
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Speed</th>
                    <th>Accuracy</th>
                    <th>Actionability</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Manual Excel Tracking</strong></td>
                    <td><span className="br">24–48 hours</span></td>
                    <td>Low (human error)</td>
                    <td>None</td>
                    <td>3–5 hrs/day labour</td>
                  </tr>
                  <tr>
                    <td><strong>Basic Free Alert Tools</strong></td>
                    <td><span className="bo">2–6 hours</span></td>
                    <td>Medium</td>
                    <td>Low (alerts only)</td>
                    <td>Free – ₹200/mo</td>
                  </tr>
                  <tr>
                    <td><strong>Global SaaS (Helium 10)</strong></td>
                    <td><span className="bb">1–2 hours</span></td>
                    <td>High</td>
                    <td>Medium (US-focused)</td>
                    <td>₹4,000–8,000/mo</td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: "#ea580c" }}>India-First AI Tool (Insydz)</strong></td>
                    <td><span className="bg">&lt; 1 hour</span></td>
                    <td>High</td>
                    <td><span className="bg">High — Actionable AI</span></td>
                    <td><strong>₹1,999–2,999/mo</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="inline-cta">
              <div style={{ flex: 1, minWidth: 0 }}>
                <h4>Start Tracking Competitor Prices — Free</h4>
                <p>WhatsApp alerts. No credit card. No dashboards to learn. Set up in 5 minutes.</p>
              </div>
              <button className="inline-cta-btn" onClick={() => setLocation("/login")}>
                👉 Try Insydz Free
              </button>
            </div>

            {/* S5 */}
            <h2 id="mistakes">5 Common Mistakes Indian Sellers Make with Price Tracking</h2>

            {(
              [
                ["Tracking Prices in Excel Every Morning",
                  "If you're opening 10 competitor tabs every morning and copying prices into a spreadsheet — you're already 24 hours behind. The competitor changed their price at 11 PM last night. You found out at 9 AM today. You lost the Buy Box for 10 hours."],
                ["Ignoring Email Alerts (and Missing WhatsApp)",
                  "Most Indian SMB sellers check email 2–3 times a day at most. They check WhatsApp 50+ times. A price alert sent to an email that's opened 4 hours later is not an alert — it's a history lesson."],
                ["Over-Discounting in a Panic",
                  "When sellers notice a competitor undercutting, the instinct is to slash prices immediately. This starts price wars that destroy margins across the entire category. Smart sellers use AI to find the minimum adjustment that recovers the Buy Box — not the maximum cut."],
                ["Not Tracking Competitor Reviews Alongside Prices",
                  "Price is one signal. But a competitor with 500 reviews and 4.6 stars can charge ₹150 more than you and still win. Sellers who only track price miss the full picture. Review velocity and sentiment tracking should run alongside price tracking."],
                ["Setting Prices Once at Launch and Never Revisiting",
                  "Seasonal demand on Flipkart for electronics, apparel, and home goods swings 40–60% during festive periods. A seller who doesn't adjust pricing dynamically for Diwali, Republic Day Sale, or Big Billion Days leaves significant profit on the table."],
              ] as [string, string][]
            ).map(([title, desc], i) => (
              <div className="mistake-card" key={i}>
                <div className="mistake-num">{i + 1}</div>
                <div className="mistake-body">
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </div>
              </div>
            ))}

            {/* S6 */}
            <h2 id="best-practices">Best Practices for Indian Sellers: Weekly Execution Model</h2>
            <p>
              The most successful Indian sellers don't react to pricing changes — they run a structured weekly rhythm
              that keeps them consistently competitive without manual effort.
            </p>

            <div className="bp-grid">
              {[
                {
                  head: "Daily — Automated",
                  color: "#0D9488",
                  items: [
                    "Morning WhatsApp digest: top 3 competitor price movements overnight",
                    "Review Buy Box status for your top 10 SKUs",
                    "Act on any 'Critical Alert' (competitor dropped >10%)",
                  ],
                },
                {
                  head: "Weekly — 30 Min Review",
                  color: "#111827",
                  items: [
                    "Review competitor review sentiment — recurring pain points?",
                    "Check keyword rank movements for top 5 keywords",
                    "Identify competitors that went out of stock (opportunity)",
                    "Adjust 1–2 product prices based on AI recommendations",
                  ],
                },
                {
                  head: "Monthly — Strategic",
                  color: "#f97316",
                  items: [
                    "Audit pricing for upcoming festive season or sale events",
                    "Identify 1 new product from AI gap analysis report",
                    "Review revenue impact of pricing changes (before vs. after)",
                  ],
                },
              ].map(col => (
                <div className="bp-card" key={col.head}>
                  <div className="bp-head" style={{ background: col.color }}>{col.head}</div>
                  <div className="bp-body">
                    <ul>{col.items.map(it => <li key={it}>{it}</li>)}</ul>
                  </div>
                </div>
              ))}
            </div>

            <ArticleImg {...IMAGES.festive} />

            <h3>Key Metrics to Track</h3>
            <div className="metrics-grid">
              {[
                { icon: "📈", title: "Buy Box Win Rate",               desc: "Target: >70% for your top SKUs. The single most important pricing health metric." },
                { icon: "₹",  title: "Price Competitiveness Index",    desc: "Are you within 5% of the category median price at all times?" },
                { icon: "📊", title: "Revenue per SKU (Monthly Trend)", desc: "Track individual SKU revenue to catch silent revenue leakage early." },
                { icon: "✅", title: "Competitor Stock-Out Capture",    desc: "Did you gain sales when a rival went OOS? Often a 3–5× revenue opportunity." },
              ].map(m => (
                <div className="metric-card" key={m.title}>
                  <div className="metric-icon">{m.icon}</div>
                  <div>
                    <div className="metric-title">{m.title}</div>
                    <div className="metric-desc">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* S7 */}
            <h2 id="best-tools">Best Tools for Amazon Competitor Price Tracking in India</h2>
            <p>
              Not all tools are built equally — and for Indian sellers, the platform choice is critical. Here's an
              honest, side-by-side comparison.
            </p>

            {/* <ArticleImg {...IMAGES.warehouse} /> */}

            <div className="dt-wrap">
              <table className="dt">
                <thead>
                  <tr>
                    <th>Tool</th>
                    <th>Amazon.in</th>
                    <th>Flipkart</th>
                    <th>Meesho</th>
                    <th>WhatsApp</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Helium 10</strong></td>
                    <td><span className="bg">Yes</span></td>
                    <td><span className="br">No</span></td>
                    <td><span className="br">No</span></td>
                    <td><span className="br">No</span></td>
                    <td>₹4,000–8,000/mo</td>
                  </tr>
                  <tr>
                    <td><strong>Jungle Scout</strong></td>
                    <td><span className="bg">Yes</span></td>
                    <td><span className="br">No</span></td>
                    <td><span className="br">No</span></td>
                    <td><span className="br">No</span></td>
                    <td>₹4,500–7,000/mo</td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: "#ea580c" }}>Insydz ⚡</strong></td>
                    <td><span className="bg">Yes</span></td>
                    <td><span className="bg">Yes</span></td>
                    <td><span className="bg">Yes</span></td>
                    <td><span className="bg">Yes</span></td>
                    <td><strong>₹1,999/mo + Free plan</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* ---------- Comparison Section ---------- */}

<h3 style={{ marginTop: "40px" }}>
  Global Tools: Powerful but Mismatched for India
</h3>

<p>
  Helium 10 and Jungle Scout are industry standards for Amazon sellers in the US and Europe. 
  They offer deep keyword research, product research, and price tracking capabilities. 
  However, for Indian sellers, they come with significant limitations.
</p>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
    marginTop: "24px"
  }}
>

  {/* Helium / Jungle Card */}
  <div
    style={{
      background: "#f3f4f6",
      borderRadius: "12px",
      border: "1px solid #e5e7eb"
    }}
  >

    <div
      style={{
        padding: "16px",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <strong>Helium 10 / Jungle Scout</strong>

      <span
        style={{
          background: "#e5e7eb",
          padding: "4px 10px",
          borderRadius: "20px",
          fontSize: "12px"
        }}
      >
        US / Europe
      </span>
    </div>

    <div style={{ padding: "18px" }}>
      <p>
        Industry standard globally — but significant gaps for Indian sellers:
      </p>

      <ul style={{ marginTop: "10px", lineHeight: "1.8" }}>
        <li>❌ ₹4,000–8,000/month — too expensive for most SMB sellers</li>
        <li>❌ No Flipkart or Meesho coverage</li>
        <li>❌ English-only dashboards</li>
        <li>❌ Email alerts only</li>
      </ul>
    </div>
  </div>


  {/* Insydz Card */}
  <div
    style={{
      borderRadius: "12px",
      border: "1px solid #fdba74"
    }}
  >

    <div
      style={{
        background: "#f97316",
        color: "white",
        padding: "16px",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <strong>Insydz</strong>

      <span
        style={{
          background: "#fb923c",
          padding: "4px 10px",
          borderRadius: "20px",
          fontSize: "12px"
        }}
      >
        India-First AI
      </span>
    </div>

    <div style={{ padding: "18px" }}>
      <p>
        Built ground-up for how Indian sellers actually work:
      </p>

      <ul style={{ marginTop: "10px", lineHeight: "1.8" }}>
        <li>✅ Real-time WhatsApp alerts</li>
        <li>✅ AI price recommendations</li>
        <li>✅ Amazon + Flipkart + Meesho coverage</li>
        <li>✅ ₹1,999–2,999/month pricing</li>
      </ul>
    </div>
  </div>

</div>

            <div className="callout pro">
              <div className="callout-label">📌  No Aggressive Pitch</div>
              <div className="callout-text">
                If you're an Indian seller on Amazon.in or Flipkart and you're not tracking competitor prices with AI,
                you're operating on guesswork. The question isn't whether you need a tool — it's which one fits your
                budget and platforms.
              </div>
            </div>

            <ArticleImg {...IMAGES.warehouse} />

            {/* <div className="inline-cta">
              <div style={{ flex: 1, minWidth: 0 }}>
                <h4>Track Buy Box &amp; Competitor Prices in Real-Time</h4>
                <p>Insydz monitors Amazon.in, Flipkart &amp; Meesho and alerts you on WhatsApp — before you lose sales.</p>
              </div>
              <button className="inline-cta-btn" onClick={() => setLocation("/login")}>
                👉 Start Free
              </button>
            </div> */}

            {/* Key Takeaways */}
            {/* <div className="takeaway-box">
              <h3><span style={{ color: "#f97316" }}>✓</span> Key Takeaways</h3>
              {[
                "Amazon competitor price tracking tools automate what currently takes Indian sellers 3–5 hours daily in manual Excel work.",
                "Price changes affect your Amazon/Flipkart search rank and Buy Box eligibility — not just your revenue.",
                "Real-time WhatsApp alerts (not email) are critical for Indian SMB sellers to act within minutes, not hours.",
                "AI-powered tools provide actionable recommendations — not just data dumps — which is the difference between insight and action.",
                "Global tools like Helium 10 don't cover Flipkart or Meesho and are priced out of reach for most Indian sellers.",
                "India-first platforms like Insydz cover Amazon, Flipkart, and Meesho at 60–85% lower cost, with WhatsApp alerts.",
                "Combining price tracking with review intelligence and keyword tracking gives Indian sellers a complete competitive picture.",
              ].map(t => (
                <div className="takeaway-item" key={t}>
                  <div className="takeaway-dot">✓</div>
                  <div className="takeaway-text">{t}</div>
                </div>
              ))}
            </div> */}

            {/* Related Guides */}
            <h2 style={{ marginTop: 40 }}>Related Guides</h2>
            <div className="related-grid">
              {[
                { title: "Flipkart Price Tracker: Monitor & Beat Competitor Prices in 2026", tag: "Flipkart Sellers",    time: "10 min", route: "/solutions/flipkart-sellers" },
                { title: "How to Win the Amazon Buy Box Consistently as an Indian Seller",   tag: "Buy Box Strategy",    time: "11 min", route: "/use-cases/track-competitor-prices" },
                { title: "Amazon Keyword Research India: Step-by-Step Guide for 2026",       tag: "Keyword Research",    time: "12 min", route: "/features/keyword-rank-tracking-feature" },
                { title: "Review Analytics: Turn Customer Feedback into Competitive Edge",   tag: "Review Intelligence", time: "9 min",  route: "/features/review-analytics-feature" },
              ].map(r => (
                <div className="related-card" key={r.title} onClick={() => setLocation(r.route)}>
                  <div className="text-xs font-bold uppercase tracking-wider text-orange-500 mb-1.5">{r.tag}</div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm leading-snug mb-2">{r.title}</div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="w-3 h-3" /> {r.time}
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <h2 id="faq">Frequently Asked Questions</h2>
            {FAQS.map((faq, i) => (
              <div className={`faq-item${openFaq === i ? " open" : ""}`} key={i}>
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)} role="button" tabIndex={0}
                  onKeyDown={e => e.key === "Enter" && setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <div className={`faq-icon${openFaq === i ? " open" : ""}`} aria-hidden="true">+</div>
                </div>
                {openFaq === i && <div className="faq-a">{faq.a}</div>}
              </div>
            ))}

            {/* Conclusion */}
            <h2 id="conclusion">Final Thoughts</h2>
            <p>
              Winning on Amazon India and Flipkart in 2026 isn't about having the best product — it's about having the
              best intelligence. Competitor price tracking is the foundation of that intelligence layer.
            </p>
            <p>
              Sellers who implement real-time AI-powered price monitoring stop reacting to the market and start leading
              it. They know when a rival goes out of stock before buyers do. They know when a competitor undercuts them
              within 45 minutes, not 45 hours. And they recover their Buy Box with a precise price adjustment, not a
              panicked discount.
            </p>
            <p>
              <strong>The data is clear: every hour without price tracking is an hour of revenue being silently
              redirected to a competitor who does.</strong>
            </p>

            {/* Final CTA */}
            <div className="final-cta-block">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-3">
                Stop Guessing. Start Knowing.
              </h2>
              <p className="text-gray-400 mb-6 text-sm sm:text-base md:text-lg" style={{ fontFamily: "'Lora', serif" }}>
                Every hour you wait is an hour a competitor is adjusting their price and taking your Buy Box. Insydz
                gives Indian sellers on Amazon, Flipkart, and Meesho real-time price intelligence — with AI
                recommendations delivered on WhatsApp.
              </p>
              <div className="final-cta-benefits">
                {["No dashboards to learn", "No credit card needed", "WhatsApp alerts from day one", "Amazon.in + Flipkart + Meesho"].map(t => (
                  <div key={t} className="final-cta-benefit">
                    <span style={{ color: "#f97316", fontWeight: 800 }}>✓</span> {t}
                  </div>
                ))}
              </div>
              <button className="final-cta-btn" onClick={() => setLocation("/login")}>
                <Zap className="w-5 h-5" />
                Try Insydz Free — insydz.com
              </button>
              <p className="text-gray-500 text-xs mt-4">
                No setup required · Amazon India, Flipkart &amp; Meesho supported
              </p>
            </div>

          </article>
        </main>
      </div>

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

