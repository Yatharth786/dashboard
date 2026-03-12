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

// ─── Navigation data ───────────────────────────────────────────────────────────
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

// ─── TOC ──────────────────────────────────────────────────────────────────────
const TOC = [
  { id: "s1", label: "What is an Amazon SEO Tool?" },
  { id: "s2", label: "Why It Matters for Indian Sellers" },
  { id: "s3", label: "How an Amazon SEO Tool Works" },
  { id: "s4", label: "Core SEO Components" },
  { id: "s5", label: "5 Critical SEO Mistakes" },
  { id: "s6", label: "Weekly SEO Execution Model" },
  { id: "s7", label: "Best Tools for Indian Sellers" },
  { id: "s8", label: "Key Takeaways" },
  { id: "s9", label: "FAQ" },
];

// ─── FAQ data ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "What is an Amazon SEO tool and do Indian sellers really need one?",
    a: "An Amazon SEO tool is software that helps you find the right keywords, optimise your product listing, and track your ranking on Amazon search results. Indian sellers who rely on gut feel for keyword selection typically rank on page 3–5 for their target terms — invisible to most buyers. A tool replaces guesswork with data derived from actual Amazon.in search behaviour, directly impacting organic visibility and sales.",
  },
  {
    q: "How is Amazon SEO different from Google SEO?",
    a: "Google SEO is about ranking web pages for information queries. Amazon SEO is about ranking product listings for purchase queries. Amazon's A9 algorithm weighs keyword relevance, sales velocity, pricing competitiveness, reviews, and conversion rate — not backlinks or domain authority. A standard website SEO tool is useless for Amazon — you need a marketplace-specific tool that understands e-commerce ranking signals.",
  },
  {
    q: "Which keywords should I prioritise first as an Indian seller?",
    a: "Start with high-intent, mid-competition keywords — not the most popular terms in your category. For example, 'buy yoga mat online' has enormous competition. 'Anti-slip yoga mat 6mm for women' has lower competition and higher purchase intent. An Amazon keyword research tool for India will show you search volume, competition level, and estimated conversion rate — so you can prioritise intelligently rather than going after the hardest keywords first.",
  },
  {
    q: "How long does it take to see results from Amazon listing optimisation?",
    a: "Most sellers see measurable ranking improvement within 3–6 weeks of a well-executed listing optimisation. Organic ranking changes aren't instant — Amazon needs time to index changes and measure their impact on conversion rate. Combining listing optimisation with a targeted Sponsored Products campaign on your new keywords accelerates the timeline significantly. Track weekly, not daily, for accurate progress assessment.",
  },
  {
    q: "Can I do Amazon SEO without paid tools if I'm just starting out?",
    a: "Yes — with limitations. You can use Amazon's autocomplete, competitor listing analysis, and Seller Central's search term reports to build a basic keyword strategy. But this process is slow, incomplete, and hard to scale past 5–10 SKUs. Most sellers who try to do this manually spend 8–12 hours per product and still miss high-volume keywords that a tool would surface in minutes. A forever-free plan on platforms like Insydz lets you start with tool-level intelligence at zero cost.",
  },
  {
    q: "Does Amazon SEO work differently on Flipkart?",
    a: "Yes — Flipkart uses its own search algorithm, which weighs factors like listing completeness, sales velocity, price competitiveness, and customer ratings somewhat differently from Amazon's A9. Keywords that rank well on Amazon.in don't automatically transfer to Flipkart. Sellers running multi-platform businesses need separate keyword strategies for each marketplace — or a unified tool that handles both simultaneously.",
  },
];

// ─── ArticleImg ───────────────────────────────────────────────────────────────
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
        style={{ width: "100%", display: loaded ? "block" : "none", objectFit: "cover", maxHeight: 460 }}
      />
      {caption && <figcaption className="img-caption">{caption}</figcaption>}
    </figure>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function AmazonSeoToolIndia() {
  const [, setLocation] = useLocation();
  const [activeSection, setActiveSection] = useState("s1");
  const [scrollPct, setScrollPct] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
          className={`px-3 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1 ${
            isActive
              ? accent === "orange"
                ? "text-orange-600 font-semibold"
                : "text-purple-600 font-semibold"
              : accentCls
          }`}
        >
          {label}
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isActive ? "rotate-180" : ""}`} />
        </button>
        {isActive && (
          <div
            onMouseLeave={() => setActiveDropdown(null)}
            className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 z-50"
          >
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => handleMenuItemClick(item)}
                className={`w-full px-4 py-3 text-left transition-colors flex items-center gap-3 group ${dropHoverCls}`}
              >
                <span className={`${iconCls} group-hover:scale-110 transition-transform`}>{item.icon}</span>
                <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">{item.name}</span>
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
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">

      {/* ── Global styles ─────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800;900&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        @keyframes imgShimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }

        .read-progress { position:fixed; top:80px; left:0; height:3px; background:linear-gradient(90deg,#f97316,#ef4444); z-index:200; transition:width .1s linear; border-radius:0 2px 2px 0; }

        .article-layout { max-width:1200px; margin:0 auto; padding:48px 24px 80px; display:grid; grid-template-columns:240px 1fr; gap:48px; align-items:start; }
        @media(max-width:1024px){ .article-layout { grid-template-columns:200px 1fr; gap:32px; } }
        @media(max-width:768px){ .article-layout { grid-template-columns:1fr; padding:24px 16px 60px; } }

        .toc-sidebar { position:sticky; top:96px; background:#fff; border:1px solid #e5e7eb; border-radius:16px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,.05); }
        .dark .toc-sidebar { background:#111827; border-color:#1f2937; }
        @media(max-width:768px){ .toc-sidebar { display:none; } }

        .mobile-toc-btn { display:none; width:100%; background:#fff; border:1px solid #e5e7eb; border-radius:12px; padding:14px 18px; font-family:'Sora',sans-serif; font-size:14px; font-weight:600; color:#111; cursor:pointer; align-items:center; justify-content:space-between; margin-bottom:16px; }
        .dark .mobile-toc-btn { background:#111827; border-color:#1f2937; color:#f9fafb; }
        @media(max-width:768px){ .mobile-toc-btn { display:flex; } }
        .mobile-toc-panel { display:none; background:#fff; border:1px solid #e5e7eb; border-radius:12px; padding:16px; margin-bottom:24px; }
        .dark .mobile-toc-panel { background:#111827; border-color:#1f2937; }
        .mobile-toc-panel.open { display:block; }

        .article-body { font-family:'Lora',serif; font-size:clamp(15px,2vw,17px); line-height:1.8; color:#374151; }
        .dark .article-body { color:#d1d5db; }
        .article-body h2 { font-family:'Sora',sans-serif; font-size:clamp(20px,3vw,26px); font-weight:800; color:#111; letter-spacing:-.4px; margin:52px 0 16px; line-height:1.25; scroll-margin-top:100px; border-bottom:2px solid #e5e7eb; padding-bottom:12px; }
        .dark .article-body h2 { color:#f9fafb; border-color:#1f2937; }
        .article-body h2:first-child { margin-top:0; }
        .article-body h3 { font-family:'Sora',sans-serif; font-size:clamp(15px,2vw,18px); font-weight:700; color:#111; margin:32px 0 10px; scroll-margin-top:100px; }
        .dark .article-body h3 { color:#f3f4f6; }
        .article-body p { margin-bottom:20px; }
        .article-body ul,.article-body ol { padding-left:22px; margin-bottom:20px; }
        .article-body li { margin-bottom:8px; }
        .article-body li::marker { color:#f97316; }
        .article-body strong { font-weight:700; color:#111; }
        .dark .article-body strong { color:#f9fafb; }

        /* Callouts */
        .callout { border-radius:12px; padding:18px 20px; margin:28px 0; }
        .callout.teal  { background:#f0fdfa; border:1px solid #99f6e4; border-left:4px solid #0d9488; }
        .callout.warn  { background:#fffbeb; border:1px solid #fcd34d; border-left:4px solid #d97706; }
        .callout.pro   { background:#f0fdf4; border:1px solid #86efac; border-left:4px solid #16a34a; }
        .callout.info  { background:#eff6ff; border:1px solid #93c5fd; border-left:4px solid #2563eb; }
        .callout.indigo{ background:#eef2ff; border:1px solid #c7d2fe; border-radius:10px; }
        .callout.pink  { background:#fdf2f8; border-left:4px solid #db2777; }
        .dark .callout.teal  { background:#042f2e; border-color:#134e4a; }
        .dark .callout.warn  { background:#1c1507; border-color:#78350f; }
        .dark .callout.pro   { background:#052e16; border-color:#166534; }
        .dark .callout.info  { background:#0c1a2e; border-color:#1e3a5f; }
        .dark .callout.indigo{ background:#1e1b4b; border-color:#3730a3; }
        .dark .callout.pink  { background:#500724; border-color:#9d174d; }
        .callout-label { font-family:'Sora',sans-serif; font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase; margin-bottom:8px; display:flex; align-items:center; gap:6px; }
        .callout.teal  .callout-label { color:#0d9488; }
        .callout.warn  .callout-label { color:#d97706; }
        .callout.pro   .callout-label { color:#16a34a; }
        .callout.info  .callout-label { color:#2563eb; }
        .callout.indigo .callout-label { color:#4f46e5; }
        .callout.pink  .callout-label { color:#db2777; }
        .callout-text { font-family:'Lora',serif; font-size:15px; color:#374151; line-height:1.72; }
        .dark .callout-text { color:#d1d5db; }

        /* Comparison table */
        .dt-wrap { overflow-x:auto; margin:24px 0; border-radius:12px; border:1px solid #e5e7eb; box-shadow:0 4px 16px rgba(0,0,0,.09); }
        .dark .dt-wrap { border-color:#1f2937; }
        table.dt { width:100%; border-collapse:collapse; font-family:'Sora',sans-serif; font-size:13px; min-width:520px; }
        table.dt th { background:#0d1b2a; color:white; padding:12px 16px; text-align:left; font-size:11px; letter-spacing:.5px; text-transform:uppercase; }
        table.dt td { padding:12px 16px; border-bottom:1px solid #e5e7eb; color:#374151; vertical-align:middle; }
        .dark table.dt td { border-color:#1f2937; color:#d1d5db; }
        table.dt tr:last-child td { border-bottom:none; }
        table.dt tr:nth-child(even) td { background:#f8fafc; }
        .dark table.dt tr:nth-child(even) td { background:#0f172a; }
        table.dt tr:hover td { background:#fff7ed; }
        .dark table.dt tr:hover td { background:#1c0a00; }
        .tr-highlight td:first-child { font-weight:700; color:#f97316; }
        .bg { background:#dcfce7; color:#15803d; font-weight:700; padding:3px 10px; border-radius:20px; font-size:11px; white-space:nowrap; }
        .bo { background:#fff7ed; color:#ea580c; font-weight:700; padding:3px 10px; border-radius:20px; font-size:11px; white-space:nowrap; }
        .br { background:#fef2f2; color:#dc2626; font-weight:700; padding:3px 10px; border-radius:20px; font-size:11px; white-space:nowrap; }
        .bb { background:#dbeafe; color:#1e40af; font-weight:700; padding:3px 10px; border-radius:20px; font-size:11px; white-space:nowrap; }

        /* Steps */
        .step { display:flex; gap:16px; background:#f8fafc; border:1px solid #e5e7eb; border-radius:10px; padding:18px 20px; margin-bottom:12px; transition:box-shadow .2s; }
        .step:hover { box-shadow:0 4px 16px rgba(0,0,0,.09); }
        .dark .step { background:#111827; border-color:#1f2937; }
        .step-num { flex-shrink:0; width:34px; height:34px; background:#f97316; color:white; font-family:'Sora',sans-serif; font-weight:800; font-size:15px; border-radius:50%; display:flex; align-items:center; justify-content:center; margin-top:3px; }
        .step-content h4 { font-family:'Sora',sans-serif; font-size:14.5px; font-weight:700; color:#111; margin-bottom:4px; }
        .dark .step-content h4 { color:#f9fafb; }
        .step-content p { font-size:13.5px; margin:0; font-family:'Sora',sans-serif; color:#64748b; line-height:1.6; }
        .dark .step-content p { color:#9ca3af; }

        /* Mistakes */
        .mistake-card { display:flex; gap:0; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden; margin-bottom:12px; }
        .dark .mistake-card { border-color:#1f2937; }
        .mistake-num { flex-shrink:0; width:52px; background:#0d1b2a; color:white; font-family:'Sora',sans-serif; font-size:20px; font-weight:800; display:flex; align-items:center; justify-content:center; }
        .mistake-body { padding:16px 20px; }
        .mistake-body strong { display:block; font-family:'Sora',sans-serif; font-size:14px; font-weight:700; color:#111; margin-bottom:5px; }
        .dark .mistake-body strong { color:#f9fafb; }
        .mistake-body p { font-family:'Sora',sans-serif; font-size:13.5px; color:#6b7280; line-height:1.65; margin:0; }
        .dark .mistake-body p { color:#9ca3af; }

        /* Best practices grid */
        .bp-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin:20px 0 32px; }
        @media(max-width:640px){ .bp-grid { grid-template-columns:1fr; } }
        .bp-card { border:1px solid #e5e7eb; border-radius:12px; overflow:hidden; }
        .dark .bp-card { border-color:#1f2937; }
        .bp-head { padding:12px 16px; font-family:'Sora',sans-serif; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.5px; color:white; }
        .bp-body { padding:14px 16px; }
        .bp-body ul { list-style:none; padding:0; margin:0; }
        .bp-body li { font-family:'Sora',sans-serif; font-size:12.5px; color:#374151; line-height:1.5; margin-bottom:8px; padding-left:16px; position:relative; }
        .bp-body li::before { content:"✓"; position:absolute; left:0; color:#f97316; font-weight:700; font-size:11px; top:1px; }
        .dark .bp-body li { color:#d1d5db; }

        /* Metrics grid */
        .metrics-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin:20px 0 32px; }
        @media(max-width:768px){ .metrics-grid { grid-template-columns:repeat(2,1fr); } }
        @media(max-width:480px){ .metrics-grid { grid-template-columns:1fr 1fr; } }
        .metric-card { background:#f8fafc; border:1px solid #e5e7eb; border-radius:10px; padding:18px 16px; text-align:center; }
        .dark .metric-card { background:#111827; border-color:#1f2937; }
        .metric-num { font-family:'Sora',sans-serif; font-size:22px; font-weight:800; color:#f97316; line-height:1; display:block; }
        .metric-lbl { font-size:12px; font-weight:600; color:#64748b; margin-top:5px; display:block; line-height:1.4; }
        .dark .metric-lbl { color:#9ca3af; }

        /* Tools comparison grid */
        .tools-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; margin:24px 0; }
        @media(max-width:640px){ .tools-grid { grid-template-columns:1fr; } }
        .tool-card { border:1px solid #e5e7eb; border-radius:10px; padding:22px; transition:box-shadow .2s; background:#fff; }
        .dark .tool-card { background:#111827; border-color:#1f2937; }
        .tool-card:hover { box-shadow:0 4px 16px rgba(0,0,0,.09); }
        .tool-card.featured { border-color:#f97316; background:#fff7ed; }
        .dark .tool-card.featured { background:#1c0a00; border-color:#ea580c; }
        .tc-head { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px; }
        .tc-name { font-size:15px; font-weight:800; color:#0d1b2a; font-family:'Sora',sans-serif; }
        .dark .tc-name { color:#f9fafb; }
        .tc-tag { font-size:11px; font-weight:700; padding:3px 9px; border-radius:20px; }
        .tc-tag.rec  { background:#dcfce7; color:#15803d; }
        .tc-tag.not  { background:#fee2e2; color:#b91c1c; }
        .tc-items { list-style:none; padding:0; margin:0 0 12px; }
        .tc-item { display:flex; align-items:flex-start; gap:7px; font-size:13px; color:#64748b; margin-bottom:7px; line-height:1.4; font-family:'Sora',sans-serif; }
        .dark .tc-item { color:#9ca3af; }
        .tc-item .ck { color:#16a34a; font-weight:700; flex-shrink:0; }
        .tc-item .xm { color:#dc2626; font-weight:700; flex-shrink:0; }
        .tc-price { font-size:13px; font-weight:700; color:#0d1b2a; padding-top:10px; border-top:1px solid #e5e7eb; font-family:'Sora',sans-serif; }
        .dark .tc-price { color:#f9fafb; border-color:#1f2937; }

        /* Related */
        .related-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:20px; }
        @media(max-width:768px){ .related-grid { grid-template-columns:1fr 1fr; } }
        @media(max-width:540px){ .related-grid { grid-template-columns:1fr; } }
        .related-card { background:#fff; border:1px solid #e5e7eb; border-radius:14px; overflow:hidden; cursor:pointer; transition:all .2s; text-decoration:none; color:inherit; display:block; }
        .dark .related-card { background:#111827; border-color:#1f2937; }
        .related-card:hover { border-color:#f97316; box-shadow:0 4px 16px rgba(249,115,22,.12); transform:translateY(-2px); }
        .related-thumb { width:100%; height:110px; display:flex; align-items:center; justify-content:center; }
        .related-body { padding:14px; }
        .related-tag { font-size:10.5px; font-weight:700; color:#f97316; text-transform:uppercase; letter-spacing:.5px; margin-bottom:6px; }
        .related-title { font-size:13px; font-weight:700; color:#0d1b2a; line-height:1.4; font-family:'Sora',sans-serif; }
        .dark .related-title { color:#f9fafb; }

        /* FAQ */
        .faq-item { border:1px solid #e5e7eb; border-radius:12px; margin-bottom:8px; overflow:hidden; background:#fff; transition:border-color .2s, box-shadow .2s; }
        .dark .faq-item { background:#111827; border-color:#1f2937; }
        .faq-item:hover { box-shadow:0 1px 6px rgba(0,0,0,.07); }
        .faq-item.open { border-color:#f97316; }
        .faq-q { display:flex; justify-content:space-between; align-items:center; padding:16px 20px; cursor:pointer; font-family:'Sora',sans-serif; font-size:14.5px; font-weight:700; color:#111; gap:12px; user-select:none; }
        .dark .faq-q { color:#f9fafb; }
        .faq-q:hover { background:#f8fafc; }
        .dark .faq-q:hover { background:#1f2937; }
        .faq-icon { flex-shrink:0; width:22px; height:22px; background:#fff7ed; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#f97316; font-size:16px; font-weight:400; line-height:1; transition:transform .2s; }
        .faq-icon.open { transform:rotate(45deg); background:#f97316; color:white; }
        .faq-a { font-family:'Lora',serif; font-size:14px; line-height:1.75; color:#64748b; padding:0 20px 16px; }
        .dark .faq-a { color:#9ca3af; }

        /* Images */
        .article-img-wrap { margin:28px 0 8px; border-radius:10px; overflow:hidden; border:1px solid #e5e7eb; background:#f9fafb; box-shadow:0 4px 20px rgba(0,0,0,.06); }
        .dark .article-img-wrap { border-color:#1f2937; background:#111827; }
        .img-shimmer { height:300px; background:linear-gradient(90deg,#f3f4f6 25%,#e5e7eb 50%,#f3f4f6 75%); background-size:400% 100%; animation:imgShimmer 1.6s ease infinite; }
        .img-caption { padding:10px 16px 12px; font-family:'Sora',sans-serif; font-size:12px; color:#9ca3af; line-height:1.5; border-top:1px solid #e5e7eb; background:#f9fafb; font-style:italic; text-align:center; }
        .dark .img-caption { background:#111827; border-color:#1f2937; }

        /* Stat strip */
        .stat-strip { display:flex; flex-wrap:wrap; border:1px solid #e5e7eb; border-radius:14px; overflow:hidden; margin-top:32px; box-shadow:0 1px 3px rgba(0,0,0,.07); background:#fff; }
        .dark .stat-strip { border-color:#1f2937; background:#111827; }
        .stat-item { flex:1; min-width:140px; padding:18px 24px; text-align:center; border-right:1px solid #e5e7eb; }
        .dark .stat-item { border-color:#1f2937; }
        .stat-item:last-child { border-right:none; }
        @media(max-width:580px){ .stat-item { min-width:50%; border-bottom:1px solid #e5e7eb; } }

        /* Article hero */
        .article-hero { background:#fff; border-bottom:1px solid #e5e7eb; padding:clamp(32px,5vw,56px) clamp(16px,4vw,32px) 0; }
        .dark .article-hero { background:#0f172a; border-color:#1f2937; }
        .hero-inner { max-width:820px; margin:0 auto; padding-bottom:40px; }

        /* Inline CTA */
        .inline-cta { background:linear-gradient(135deg,#0d1b2a 0%,#1e3a5f 100%); border-radius:16px; padding:clamp(20px,4vw,28px) clamp(16px,4vw,32px); margin:40px 0; display:flex; align-items:center; justify-content:space-between; gap:20px; flex-wrap:wrap; box-shadow:0 8px 32px rgba(0,0,0,.12); }
        .inline-cta h4 { font-family:'Sora',sans-serif; font-size:17px; font-weight:800; color:white; margin-bottom:6px; }
        .inline-cta p  { font-family:'Sora',sans-serif; font-size:13.5px; color:#94a3b8; margin:0; line-height:1.6; }

        /* Key Takeaways box */
        .takeaway-box { background:#0d1b2a; border-radius:16px; padding:28px 30px; margin:28px 0; }
        .takeaway-box h3 { font-family:'Sora',sans-serif; font-size:18px; font-weight:800; color:white; margin:0 0 16px; display:flex; align-items:center; gap:10px; }
        .takeaway-item { display:flex; align-items:flex-start; gap:10px; margin-bottom:10px; }
        .takeaway-dot { flex-shrink:0; width:18px; height:18px; border-radius:50%; background:#f97316; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:800; color:white; margin-top:3px; }
        .takeaway-text { font-family:'Lora',serif; font-size:14.5px; color:#cbd5e1; line-height:1.6; }

        /* Final CTA */
        .final-cta-block { background:linear-gradient(135deg,#0d1b2a 0%,#4f46e5 100%); border-radius:20px; padding:clamp(32px,6vw,56px) clamp(24px,5vw,48px); text-align:center; margin:60px 0 0; }

        /* TOC link */
        .toc-link { display:block; font-size:12.5px; font-weight:500; color:#6b7280; padding:6px 10px; border-radius:8px; cursor:pointer; border:none; background:none; text-align:left; width:100%; transition:all .15s; margin-bottom:2px; line-height:1.4; border-left:2px solid transparent; }
        .toc-link:hover { background:#fff7ed; color:#ea580c; }
        .toc-link.active { background:#fff7ed; color:#ea580c; font-weight:700; border-left-color:#f97316; padding-left:8px; }
        .dark .toc-link { color:#9ca3af; }
        .dark .toc-link:hover,.dark .toc-link.active { background:#1c0a00; color:#fb923c; }

        /* Graphic cards (for the hero/section visual blocks) */
        .seo-graphic { width:100%; border-radius:10px; overflow:hidden; margin:28px 0 8px; box-shadow:0 8px 32px rgba(0,0,0,.12); }

        /* Pipeline card in image section */
        .pipe-visual { background:linear-gradient(135deg,#F43F5E 0%,#EC4899 42%,#8B5CF6 100%); padding:36px; border-radius:10px; margin:28px 0 8px; box-shadow:0 8px 32px rgba(0,0,0,.12); display:flex; gap:32px; align-items:flex-start; flex-wrap:wrap; }
        @media(max-width:640px){ .pipe-visual { flex-direction:column; } }
        .pipe-left { max-width:280px; }
        .pipe-left h3 { font-family:'Sora',sans-serif; font-size:42px; font-weight:900; color:white; line-height:1; letter-spacing:-2px; margin-bottom:12px; }
        .pipe-left h3 span { color:#FDE68A; }
        .pipe-left p { font-size:13px; color:rgba(255,255,255,.65); line-height:1.6; }
        .pipe-card { background:white; border-radius:14px; overflow:hidden; box-shadow:0 12px 40px rgba(0,0,0,.28); flex:1; min-width:260px; max-width:360px; }
        .pipe-card-bar { background:#f8fafc; border-bottom:1px solid #e5e7eb; padding:9px 13px; display:flex; align-items:center; gap:5px; }
        .pip-dot { width:8px; height:8px; border-radius:50%; }
        .pipe-card-title { font-size:10px; font-weight:700; color:#6b7280; margin-left:5px; }
        .live-badge { margin-left:auto; background:#dcfce7; color:#15803d; font-size:8.5px; font-weight:800; padding:2px 8px; border-radius:20px; }
        .pipe-step { display:flex; align-items:flex-start; gap:10px; padding:9px 14px; border-bottom:1px solid #f8fafc; }
        .pipe-step:last-child { border-bottom:none; }
        .pipe-step-n { width:22px; height:22px; border-radius:50%; color:white; font-size:10px; font-weight:800; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px; }
        .pipe-step-name { font-size:11px; font-weight:700; color:#0d1b2a; display:block; }
        .pipe-step-desc { font-size:10px; color:#94a3b8; display:block; margin-top:1px; }
        .pipe-step-tag { font-size:8.5px; font-weight:700; padding:1px 7px; border-radius:3px; display:inline-block; margin-top:3px; }
        .auto-tag   { background:#dbeafe; color:#1d4ed8; }
        .ai-tag     { background:#ede9fe; color:#6d28d9; }
        .green-tag  { background:#dcfce7; color:#15803d; }

        /* Dashboard dark card for section 4 */
        .dash-dark { background:#0f172a; border-radius:16px; overflow:hidden; box-shadow:0 28px 64px rgba(0,0,0,.5); }
        .dash-bar  { background:#1e293b; border-bottom:1px solid rgba(255,255,255,.06); padding:9px 13px; display:flex; align-items:center; gap:5px; }
        .dash-title{ font-size:10px; font-weight:700; color:rgba(255,255,255,.65); margin-left:5px; }
        .dash-live  { margin-left:auto; font-size:8.5px; font-weight:800; background:rgba(74,222,128,.15); color:#4ade80; border:1px solid rgba(74,222,128,.25); padding:2px 8px; border-radius:20px; }
        .kw-row-dark { display:flex; align-items:center; gap:8px; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.07); border-radius:7px; padding:7px 10px; margin-bottom:5px; }
        .kw-term    { font-size:10.5px; font-weight:600; color:rgba(255,255,255,.8); flex:1; }
        .kw-vol     { font-size:9px; color:rgba(255,255,255,.3); min-width:48px; text-align:right; }
        .kw-pos     { font-size:10px; font-weight:800; min-width:28px; text-align:center; padding:2px 5px; border-radius:4px; }
        .kp-g { background:rgba(74,222,128,.18); color:#4ade80; }
        .kp-a { background:rgba(251,191,36,.18); color:#fcd34d; }
        .kp-r { background:rgba(248,113,113,.18); color:#f87171; }
        .alert-bar { margin:0 10px 10px; background:rgba(249,115,22,.08); border:1px solid rgba(249,115,22,.2); border-radius:8px; padding:8px 11px; display:flex; align-items:center; gap:7px; }
        .alert-dot { width:6px; height:6px; border-radius:50%; background:#fb923c; box-shadow:0 0 6px #fb923c; flex-shrink:0; }
        .alert-txt  { font-size:10px; color:rgba(255,255,255,.65); font-weight:500; flex:1; }
        .alert-act  { font-size:9.5px; font-weight:700; color:#fb923c; white-space:nowrap; }
      `}</style>

      {/* Reading progress bar */}
      <div className="read-progress" style={{ width: `${scrollPct}%` }} />

      {/* ══════════════════════════════════════════════════════════════════════
          NAV
      ══════════════════════════════════════════════════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg"
            : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1 group cursor-pointer" onClick={() => setLocation("/")}>
                <div className="relative">
                  <img
                    src="/logo.png"
                    alt="Insydz Logo"
                    className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain"
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Insydz
                </span>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-3" ref={dropdownRef}>
              <DesktopDropdown label="Solutions"  menuKey="Solutions" />
              <DesktopDropdown label="Use Cases"  menuKey="Use Cases" />
              <DesktopDropdown label="Features"   menuKey="Features" />
              <button
                onClick={() => setLocation("/pricing")} onMouseEnter={() => setActiveDropdown(null)}
                className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
              >
                Pricing
              </button>
              <DesktopDropdown label="Free Tools" menuKey="Free Tools" />
              <DesktopDropdown label="Compare"    menuKey="Compare" />
              <DesktopDropdown label="Resources"  menuKey="Resources" accent="orange" />
              <DesktopDropdown label="About"      menuKey="About" />
              <Button
                onClick={() => setLocation("/login")} onMouseEnter={() => setActiveDropdown(null)}
                className="ml-2 text-sm bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Login
              </Button>
              <button
                className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
              </button>
            </div>

            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              <button
                onClick={() => { setLocation("/resources/expert-blog"); setIsMenuOpen(false); }}
                className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
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
                    className={`flex items-center justify-between w-full px-4 py-2 rounded-lg font-medium ${
                      accent === "orange"
                        ? "text-orange-600 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                        : "text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                    }`}
                  >
                    {label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu === label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileActiveMenu === label && (
                    <div className="ml-4 mt-1 space-y-1">
                      {navigationMenu[key].map((item, i) => (
                        <button
                          key={i}
                          onClick={() => handleMenuItemClick(item)}
                          className={`flex items-center gap-2 w-full px-4 py-2 text-sm rounded-lg ${
                            accent === "orange"
                              ? "text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                              : "text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                          }`}
                        >
                          {item.icon} {item.name}
                          {item.badge && (
                            <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">
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
                onClick={() => setLocation("/pricing")}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium"
              >
                Pricing
              </button>
              <Button
                onClick={() => { setLocation("/login"); setIsMenuOpen(false); }}
                className="w-full mt-2 bg-gradient-to-r from-pink-500 to-rose-500"
              >
                Login
              </Button>
              <button
                className="mt-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700 w-full flex justify-center"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="article-hero" style={{ paddingTop: 100 }}>
        <div className="hero-inner" style={{marginLeft: "150px", marginRight: "auto"}}>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6 flex-wrap">
            <button onClick={() => setLocation("/")} className="hover:text-orange-500 transition-colors">Home</button>
            <span>/</span>
            <button onClick={() => setLocation("/resources/expert-blog")} className="hover:text-orange-500 transition-colors">Expert Blog</button>
            <span>/</span>
            <button onClick={() => setLocation("/solutions/amazon-sellers")} className="hover:text-orange-500 transition-colors">Seller Tools</button>
            <span>/</span>
            <span className="text-orange-500 font-medium">Amazon SEO Tool India</span>
          </div>

          {/* Category tag */}
          <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
            <div className="w-2 h-2 bg-orange-500 rounded-full" />
            SEO &amp; Keyword Intelligence
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white mb-5">
            Amazon{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              SEO Tool India:
            </span>{" "}
            Keyword Research &amp; Rank Tracking Guide for Sellers (2026)
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-7" style={{ fontFamily: "'Lora', serif" }}>
            Discover how an Amazon SEO tool built for India helps sellers rank higher, find buying keywords, and grow
            sales on Amazon.in — with India-specific keyword data, daily rank tracking, and AI-powered listing
            recommendations.
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 pb-7 border-b border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <strong className="text-gray-800 dark:text-gray-200">INSYDZ Research Team</strong>
            </div>
            <span className="text-gray-300 dark:text-gray-700">·</span>
            <span>Last updated: <strong className="text-gray-700 dark:text-gray-300">January 2026</strong></span>
            <span className="text-gray-300 dark:text-gray-700">·</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <strong className="text-gray-700 dark:text-gray-300">13 min read</strong>
            </div>
            <span className="bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400 text-xs font-bold px-2 py-0.5 rounded">
              Updated for 2026
            </span>
            <span className="bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-bold px-2 py-0.5 rounded">
              BOFU Guide
            </span>
          </div>

          {/* Stat strip */}
          <div className="stat-strip" style={{ width: "140%" }}>
            {[
              ["70%",     "of Amazon.in buyers never scroll past page 1"],
              ["72%",     "revenue growth achieved by optimising one keyword gap"],
              ["3–6 wks", "to see measurable rank improvement after listing optimisation"],
              ["₹1999",    "Insydz plans from — with a forever-free tier"],
            ].map(([num, lbl]) => (
              <div className="stat-item" key={num}>
                <div className="text-2xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">{num}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium leading-tight">{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div style={{ width:"80%" , margin: "0 auto", borderTop: "1px solid #e5e7eb" }}>
          <ArticleImg
            src="/six.png"
            alt="Insydz Keyword Tracker — real-time keyword ranking and AI-powered listing recommendations for Amazon.in sellers"
            caption="Insydz Keyword Tracker — real-time keyword ranking and AI-powered listing recommendations for Amazon.in sellers"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          KEY TAKEAWAYS (full-width, before two-col layout)
      ══════════════════════════════════════════════════════════════════════ */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px 0" }}>
        <div className="takeaway-box">
          <h3>📋 Key Takeaways for Indian Amazon Sellers</h3>
          {[
            "70% of Amazon.in buyers never scroll past page 1 — if you're not ranking, you're invisible, regardless of your product quality.",
            "Amazon's A9 algorithm ranks products based on keyword relevance AND conversion performance — poor SEO leads to wasted ad spend, not just low organic rank.",
            "Indian buyers use Hinglish and regional search patterns that US-centric tools miss — India-specific keyword data is a fundamental competitive advantage.",
            "The biggest SEO opportunity for most Indian sellers is competitor keyword gap analysis — ranking for terms your rivals use that you don't even have in your listing.",
            "Listing optimisation is a one-time effort that compounds over time — unlike ad spend, which stops the moment you pause it.",
            "Running Sponsored Products without optimising organic SEO first is burning ad budget with one hand while blocking the other.",
            "Weekly rank tracking catches ranking drops before they become revenue drops — the earlier you act, the less you lose.",
          ].map(t => (
            <div className="takeaway-item" key={t}>
              <div className="takeaway-dot">✓</div>
              <div className="takeaway-text">{t}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          ARTICLE LAYOUT
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="article-layout">

        {/* Sidebar TOC */}
        <aside className="toc-sidebar">
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
              👉 Start Free at insydz.com
            </button>
            <p className="text-center text-xs text-gray-400 mt-2">No credit card required</p>
          </div>
        </aside>

        {/* Article body */}
        <main>
          {/* Mobile TOC */}
          <button className="mobile-toc-btn" onClick={() => setTocOpen(!tocOpen)}>
            📋 Table of Contents <span>{tocOpen ? "▲" : "▼"}</span>
          </button>
          <div className={`mobile-toc-panel${tocOpen ? " open" : ""}`}>
            {TOC.map(t => (
              <button key={t.id} className="toc-link" style={{ display: "block", marginBottom: 4 }} onClick={() => go(t.id)}>
                {t.label}
              </button>
            ))}
          </div>

          <article className="article-body">

            {/* ── S1: What is Amazon SEO Tool ─────────────────────────────── */}
            <h2 id="s1">What is an Amazon SEO Tool for India? (And Why Most Sellers Don't Have One)</h2>

            <p>
              An <strong>Amazon SEO tool for India</strong> is a software platform that helps Indian sellers find the
              right keywords, track their product rankings, and optimise listings on Amazon.in — so their products
              appear higher in search results and in front of buyers who are ready to purchase. Unlike general SEO tools
              built for websites, Amazon-specific SEO tools understand the A9 algorithm, the Buy Box logic, and the
              search ranking factors unique to e-commerce marketplaces.
            </p>

            <p>
              Here's the reality check: <strong>70% of Amazon.in customers never scroll past the first page</strong>{" "}
              of search results. If your product isn't ranking for the keywords your buyers are actually using, you're
              essentially invisible — regardless of how good your product is.
            </p>

            <div className="callout teal">
              <div className="callout-label">💡 In Simple Terms</div>
              <div className="callout-text">
                Amazon SEO means making your product show up when buyers search on Amazon.in. An Amazon SEO tool tells
                you exactly which words buyers are using, how well your product ranks for those words today, and what
                you need to fix in your listing to rank higher — and sell more — tomorrow.
              </div>
            </div>

            {/* ── S2: Why It Matters ──────────────────────────────────────── */}
            <h2 id="s2">Why Does an Amazon SEO Tool Matter for Indian Sellers?</h2>

            <h3>Search Visibility = Sales. No Visibility = No Sales.</h3>
            <p>
              On Amazon.in, the search bar is where the purchase decision begins. Buyers type "cotton bedsheet king
              size" or "protein powder chocolate 1kg" — they don't browse categories. If your listing isn't optimised
              for these exact phrases, Amazon's A9 algorithm will rank you below competitors who are. The gap between
              page 1 and page 3 isn't inconvenient — it's a <strong>90% drop in potential clicks</strong>.
            </p>

            <h3>Indian Buyers Search Differently</h3>
            <p>
              This is where India-specific keyword intelligence matters. Indian buyers search in a mix of English and
              Hinglish — "kitchen chimney under 5000", "best mobile under 15000", "cricket bat for beginners". A
              US-centric tool trained on American search behaviour will miss these patterns entirely. An Amazon SEO tool
              built for India understands this language nuance and surfaces keywords that actually convert on Amazon.in.
            </p>

            <h3>The Algorithm Gap: Most Sellers Are Guessing</h3>
            <p>
              Amazon's A9 algorithm ranks products based on relevance (do your keywords match the query?) and
              performance (do buyers who see your product actually buy it?). Most Indian sellers write their product
              titles and descriptions based on gut feel. They miss high-volume keywords, stuff irrelevant terms, or
              ignore backend search terms entirely. The result: poor ranking, low conversions, wasted ad spend.
            </p>

            {/* <ArticleImg
              src="/seven.png"
              alt="Indian seller analysing Amazon keyword data on laptop"
              caption="A Pune-based water bottle seller grew revenue 72% simply by discovering and ranking for one high-intent keyword their listing was missing."
            /> */}

            <div className="callout warn">
              <div className="callout-label">📦 Real Seller Example — Pune Water Bottle Seller</div>
              <div className="callout-text">
                A Pune-based seller of stainless steel water bottles was doing ₹1.8 lakh/month on Amazon. After an SEO
                audit, they discovered their listing wasn't ranking for "leak proof water bottle office" — a keyword
                with strong buy intent. They updated their listing and ran a small Sponsored Products campaign on that
                keyword. Within 45 days,{" "}
                <strong>revenue grew to ₹3.1 lakh/month — a 72% jump</strong> without changing their product or price.
              </div>
            </div>

            <div className="callout indigo">
              <div className="callout-label">🤖 AI Overview Summary</div>
              <div className="callout-text">
                Amazon SEO tools for India help sellers identify high-converting keywords, track daily ranking
                positions, and optimise product listings to rank higher on Amazon.in's A9 algorithm. For Indian sellers,
                tools built specifically for the Indian market surface Hinglish search patterns and Amazon.in-specific
                buying keywords that global tools miss — directly impacting product visibility and sales conversion.
              </div>
            </div>

            {/* ── S3: How It Works ────────────────────────────────────────── */}
            <h2 id="s3">How Does an Amazon SEO Tool Work? (Step-by-Step)</h2>

            <p>
              Understanding what happens inside an Amazon SEO tool helps you use it more effectively. Here's the
              5-step intelligence pipeline:
            </p>

            {/* Pipeline visual */}
            <div className="pipe-visual">
              <div className="pipe-left">
                <h3>5 Steps.<br /><span>Rank #1.</span></h3>
                <p>From keyword gap to page-one ranking — automated, 24×7, on Amazon.in.</p>
              </div>
              <div className="pipe-card">
                <div className="pipe-card-bar">
                  <div className="pip-dot" style={{ background: "#ff5f57" }} />
                  <div className="pip-dot" style={{ background: "#febc2e" }} />
                  <div className="pip-dot" style={{ background: "#28c840" }} />
                  <span className="pipe-card-title">Insydz SEO Pipeline</span>
                  <span className="live-badge">● Active</span>
                </div>
                {[
                  { n: 1, color: "#EC4899", name: "Keyword Discovery",               desc: "Pulls Amazon.in queries from your category",      tag: "auto-tag", label: "Automated" },
                  { n: 2, color: "#7C3AED", name: "Competitor Keyword Gap",           desc: "Reveals what rivals rank for — you don't",        tag: "ai-tag",   label: "AI-Powered" },
                  { n: 3, color: "#2563EB", name: "Listing Health Audit",             desc: "Scores title, bullets, backend 0–100",            tag: "ai-tag",   label: "AI-Powered" },
                  { n: 4, color: "#0D9488", name: "Daily Rank Tracking",              desc: "WhatsApp alert if you drop positions",            tag: "auto-tag", label: "Automated" },
                  { n: 5, color: "#16A34A", name: "AI Optimisation Recommendations",  desc: '"Add this phrase — 22K monthly searches"',        tag: "green-tag",label: "AI Decision" },
                ].map(s => (
                  <div className="pipe-step" key={s.n}>
                    <div className="pipe-step-n" style={{ background: s.color }}>{s.n}</div>
                    <div>
                      <span className="pipe-step-name">{s.name}</span>
                      <span className="pipe-step-desc">{s.desc}</span>
                      <span className={`pipe-step-tag ${s.tag}`}>{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="img-caption" style={{ textAlign: "center", marginTop: -16, marginBottom: 8 }}>
              Insydz 5-step SEO intelligence pipeline — from keyword discovery to actionable listing recommendations
            </p>

            <div className="callout pro">
              <div className="callout-label">⚖️ Guesswork vs. Intelligence</div>
              <div className="callout-text">
                <strong>Guesswork</strong> means writing your listing based on what sounds right to you.{" "}
                <strong>Intelligence</strong> means writing it based on what 50,000 actual Amazon buyers searched for
                last month. The difference is the gap between page 3 and page 1.
              </div>
            </div>

            {/* ── S4: Core Components ─────────────────────────────────────── */}
            <h2 id="s4">Core Components of Amazon SEO for Indian Sellers</h2>

            <p>
              A complete Amazon SEO strategy covers six interconnected components. Missing any one of them leaves a gap
              your competitors will exploit.
            </p>

            {/* Dark dashboard visual */}
            <div className="seo-graphic" style={{ background: "linear-gradient(135deg,#0f172a 0%,#1e1b4b 42%,#4c1d95 100%)", padding: "28px" }}>
              <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
                {/* Left text */}
                <div style={{ maxWidth: 220, flexShrink: 0 }}>
                  <div style={{ display: "inline-block", background: "rgba(124,58,237,.2)", border: "1px solid rgba(124,58,237,.3)", color: "#C4B5FD", fontSize: 11, fontWeight: 700, letterSpacing: ".7px", textTransform: "uppercase", padding: "5px 12px", borderRadius: 20, marginBottom: 16 }}>
                    Six Pillars
                  </div>
                  <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 26, fontWeight: 900, color: "white", lineHeight: 1.18, letterSpacing: -1, marginBottom: 12 }}>
                    Complete<br />Amazon<br />
                    <span style={{ color: "#FDE68A" }}>SEO System</span>
                  </div>
                  <p style={{ fontSize: 12.5, color: "rgba(255,255,255,.5)", lineHeight: 1.6, margin: 0 }}>
                    Every SEO component tracked in one dashboard — gaps, rank, health score, all live.
                  </p>
                </div>
                {/* Dark dashboard card */}
                <div className="dash-dark" style={{ flex: 1, minWidth: 280, maxWidth: 400 }}>
                  <div className="dash-bar">
                    <div className="pip-dot" style={{ background: "#ff5f57" }} />
                    <div className="pip-dot" style={{ background: "#febc2e" }} />
                    <div className="pip-dot" style={{ background: "#28c840" }} />
                    <span className="dash-title">Keyword Intelligence — Amazon.in</span>
                    <span className="dash-live">● Live</span>
                  </div>
                  {/* Metric row */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
                    {[
                      { lbl: "Keywords", val: "248",  color: "#f9a8d4", delta: "↑ 34 this week",  dc: "#4ade80" },
                      { lbl: "Avg Rank", val: "#8.4", color: "#c4b5fd", delta: "↑ from #12",       dc: "#4ade80" },
                      { lbl: "Health",   val: "84",   color: "#4ade80", delta: "↑ from 61",         dc: "#4ade80" },
                      { lbl: "KW Gaps",  val: "17",   color: "#fb923c", delta: "⚠ Fix now",         dc: "#f87171" },
                    ].map(m => (
                      <div key={m.lbl} style={{ padding: "11px 8px", borderRight: "1px solid rgba(255,255,255,.05)", textAlign: "center" }}>
                        <div style={{ fontSize: 8, fontWeight: 700, color: "rgba(255,255,255,.3)", textTransform: "uppercase", letterSpacing: .4, marginBottom: 4 }}>{m.lbl}</div>
                        <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 18, fontWeight: 900, color: m.color, lineHeight: 1 }}>{m.val}</div>
                        <div style={{ fontSize: 8.5, fontWeight: 600, marginTop: 2, color: m.dc }}>{m.delta}</div>
                      </div>
                    ))}
                  </div>
                  {/* KW rows */}
                  <div style={{ padding: "10px 13px" }}>
                    {[
                      { term: "mixer grinder 750 watt induction", vol: "31.2K/mo", pos: "#4",  cls: "kp-g" },
                      { term: "juicer mixer grinder 3 jar",        vol: "28.7K/mo", pos: "#9",  cls: "kp-a" },
                      { term: "best mixer under 3000",             vol: "19.4K/mo", pos: "#6",  cls: "kp-g" },
                      { term: "mixer grinder for home use",        vol: "14.1K/mo", pos: "#19", cls: "kp-r" },
                    ].map(k => (
                      <div className="kw-row-dark" key={k.term}>
                        <span className="kw-term">{k.term}</span>
                        <span className="kw-vol">{k.vol}</span>
                        <span className={`kw-pos ${k.cls}`}>{k.pos}</span>
                      </div>
                    ))}
                  </div>
                  <div className="alert-bar">
                    <div className="alert-dot" />
                    <span className="alert-txt">Gap: "chapati maker electric 1500w" — 26K searches, 0 ranking</span>
                    <span className="alert-act">Fix →</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="img-caption">
              Insydz Keyword Intelligence Dashboard — tracking 248 keywords with live gap detection and rank movement alerts
            </p>

            <div className="dt-wrap">
              <table className="dt">
                <thead>
                  <tr>
                    <th>SEO Component</th>
                    <th>What It Is</th>
                    <th>Why It Matters</th>
                    <th>Manual vs. Tool</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Keyword Research</strong></td>
                    <td>Finding search terms buyers actually use</td>
                    <td>Wrong keywords = zero visibility</td>
                    <td>Manual: 3–5 hrs, incomplete | <span className="bg">Tool: minutes, data-backed</span></td>
                  </tr>
                  <tr>
                    <td><strong>Title Optimisation</strong></td>
                    <td>Structuring product title with primary keywords</td>
                    <td>Title has highest SEO weight in A9</td>
                    <td>Manual: guesswork | <span className="bg">Tool: scored suggestions</span></td>
                  </tr>
                  <tr>
                    <td><strong>Backend Keywords</strong></td>
                    <td>Hidden keywords in Seller Central</td>
                    <td>Extra ranking signals without cluttering listing</td>
                    <td>Manual: often forgotten | <span className="bb">Tool: AI-generated list</span></td>
                  </tr>
                  <tr>
                    <td><strong>Rank Tracking</strong></td>
                    <td>Daily ranking position for target keywords</td>
                    <td>Catch ranking drops before sales drop</td>
                    <td>Manual: impossible at scale | <span className="bg">Tool: automated daily</span></td>
                  </tr>
                  <tr>
                    <td><strong>Competitor Keyword Gap</strong></td>
                    <td>Keywords rivals rank for that you don't</td>
                    <td>Biggest source of untapped traffic</td>
                    <td>Manual: hours per competitor | <span className="bg">Tool: instant audit</span></td>
                  </tr>
                  <tr>
                    <td><strong>Listing Health Score</strong></td>
                    <td>Overall SEO quality of your listing</td>
                    <td>Identifies weakest link in your ranking</td>
                    <td>Manual: no benchmark | <span className="bb">Tool: 0–100 score with fixes</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ── S5: Mistakes ─────────────────────────────────────────────── */}
            <h2 id="s5">5 Critical Amazon SEO Mistakes Indian Sellers Make</h2>

            <p>
              These five mistakes are costing Indian sellers ranking positions, organic traffic, and sales — often
              without them realising it. Each one is preventable with the right tool and workflow.
            </p>

            {[
              {
                n: 1,
                title: "Writing Listings for Themselves, Not for Buyers",
                body: "A seller who makes \"premium handcrafted artisanal wooden phone stand\" when buyers are searching \"wooden mobile stand for desk\" has a listing that will never rank. The vocabulary you use to describe your product and the vocabulary your buyers use to find it are often completely different. An Amazon SEO tool bridges this gap with actual search data.",
              },
              {
                n: 2,
                title: "Ignoring Hinglish and Regional Search Patterns",
                body: "Buyers in smaller cities search differently from metro buyers. \"Mixer grinder\" vs \"juicer mixer grinder\", \"chapati maker\" vs \"roti maker\", \"pressure cooker induction\" vs \"induction pressure cooker\". Missing regional search variants costs sellers in tier-2 and tier-3 cities — the fastest-growing e-commerce segments in India right now.",
              },
              {
                n: 3,
                title: "Keyword Stuffing (The Old Way That Now Hurts You)",
                body: "Amazon's A9 algorithm has gotten smarter. Stuffing 15 keywords into your title doesn't improve ranking — it reduces click-through rate because the title reads like gibberish. Amazon penalises poor conversion rates, which feeds back into lower ranking. Smart keyword placement in title, bullets, and backend is more effective than volume stuffing.",
              },
              {
                n: 4,
                title: "Running Ads Without an Organic SEO Foundation",
                body: "Many Indian sellers jump straight to Sponsored Products without fixing their organic listing first. If your listing isn't converting organically, your ad spend will also convert poorly — and Amazon's ad algorithm will throttle your ad visibility as a result. Every rupee spent on ads performs better when the underlying listing is SEO-optimised.",
              },
              {
                n: 5,
                title: "Setting Up a Listing Once and Never Revisiting It",
                body: "Amazon search trends shift. New competitors enter. Seasonal keywords spike. A listing optimised in January may be significantly underperforming by July if you haven't tracked and updated it. Rank tracking tools catch this drift early — before it becomes a revenue problem.",
              },
            ].map(m => (
              <div className="mistake-card" key={m.n}>
                <div className="mistake-num">{m.n}</div>
                <div className="mistake-body">
                  <strong>{m.title}</strong>
                  <p>{m.body}</p>
                </div>
              </div>
            ))}

            {/* Mid article CTA */}
            <div className="inline-cta">
              <div>
                <h4>See Your Keyword Gaps in Minutes</h4>
                <p>Free forever plan. No credit card. No jargon. Just clearer decisions for your Amazon.in listings.</p>
              </div>
              <button
                onClick={() => setLocation("/login")}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all whitespace-nowrap"
              >
                Start Free at insydz.com →
              </button>
            </div>

            {/* ── S6: Best Practices ──────────────────────────────────────── */}
            <h2 id="s6">Best Practices: Weekly Amazon SEO Execution Model</h2>

            <p>
              The most effective Amazon SEO isn't a one-time project — it's a repeatable weekly workflow. Here's the
              model that high-performing Indian sellers follow to maintain and grow organic rank consistently.
            </p>

            <ArticleImg
              src="/eight.png"
              alt="Weekly Amazon SEO execution model for Indian sellers"
              caption="Insydz weekly SEO execution model — a structured workflow for sustained organic rank growth on Amazon.in"
            />

            {/* <div className="bp-grid">
              {[
                {
                  head: "Daily — Automated",
                  color: "#0D9488",
                  items: [
                    "Morning WhatsApp digest: top 3 competitor price movements overnight",
                    "Review keyword rank status for your top 10 SKUs",
                    "Act on any 'Critical Alert' (rank dropped 5+ positions)",
                  ],
                },
                {
                  head: "Weekly — 30 Min Review",
                  color: "#111827",
                  items: [
                    "Review competitor keyword gap report — new opportunities?",
                    "Check keyword rank movements for top 5 target terms",
                    "Update backend search terms with new AI suggestions",
                    "Adjust listing copy for 1 underperforming SKU",
                  ],
                },
                {
                  head: "Monthly — Strategic",
                  color: "#f97316",
                  items: [
                    "Full listing health audit — identify weakest components",
                    "Identify seasonal keyword opportunities (festive, sale events)",
                    "Review revenue impact of listing changes (before vs. after)",
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
            </div> */}

            <h3>Key Metrics to Track</h3>
            <div className="metrics-grid">
              {[
                { num: "Top 10",       lbl: "Organic rank for target keywords (track daily)" },
                { num: "CTR",          lbl: "Click-through rate — low CTR signals poor title or image" },
                { num: "CVR",          lbl: "Conversion rate — low CVR means listing isn't convincing buyers" },
                { num: "Organic Split",lbl: "Keyword-level organic vs. paid sales breakdown" },
              ].map(m => (
                <div className="metric-card" key={m.num}>
                  <span className="metric-num">{m.num}</span>
                  <span className="metric-lbl">{m.lbl}</span>
                </div>
              ))}
            </div>

            {/* ── S7: Best Tools ───────────────────────────────────────────── */}
            <h2 id="s7">Best Amazon SEO Tools for Indian Sellers</h2>

            <h3>Global Tools: Powerful, But Built for a Different Market</h3>
            <p>
              Semrush, Helium 10's Cerebro, and Jungle Scout's keyword tools are the industry standard for Amazon
              sellers in the US and UK. They offer sophisticated keyword research, reverse ASIN lookup, and rank
              tracking — capabilities that genuinely work. But for Indian sellers, three gaps make them a poor fit:
            </p>
            <ul>
              <li><strong>Price:</strong> Helium 10's plans start at $39–99/month (₹3,300–8,300). For a seller doing ₹3–5 lakh/month, this is a significant cost for one tool out of many you need.</li>
              <li><strong>Data:</strong> Their keyword databases are built primarily on Amazon.com (US). Amazon.in search volumes, Hinglish patterns, and Indian buying intent keywords are significantly underrepresented.</li>
              <li><strong>Platform:</strong> None of these tools support Flipkart or Meesho SEO — which matters enormously for sellers who run multi-platform businesses.</li>
            </ul>

            <h3>Insydz: Amazon SEO Intelligence Built for India</h3>
            <p>
              Insydz approaches Amazon SEO differently — not as a standalone keyword tool, but as a{" "}
              <strong>connected intelligence layer</strong> that ties SEO to competitor pricing, review sentiment, and
              market trends simultaneously.
            </p>

            <ArticleImg
              src="/nine.png"
              alt="Tool comparison: Insydz vs global SEO tools for Indian sellers"
              caption="Tool comparison: Insydz vs. global SEO tools — India-specific keyword data, Flipkart coverage, and WhatsApp alerts make the difference"
            />

            {/* <div className="tools-grid">
              <div className="tool-card">
                <div className="tc-head">
                  <div className="tc-name">Helium 10 / Jungle Scout</div>
                  <span className="tc-tag not">US-First</span>
                </div>
                <ul className="tc-items">
                  <li className="tc-item"><span className="xm">✕</span>No Hinglish keyword data</li>
                  <li className="tc-item"><span className="xm">✕</span>Amazon.com database only</li>
                  <li className="tc-item"><span className="xm">✕</span>No Flipkart / Meesho SEO</li>
                  <li className="tc-item"><span className="xm">✕</span>No WhatsApp rank alerts</li>
                </ul>
                <div className="tc-price">Monthly Cost: <span style={{ color: "#dc2626" }}>₹3,300 – 8,300</span></div>
              </div>
              <div className="tool-card featured">
                <div className="tc-head">
                  <div className="tc-name">⚡ Insydz — Built for India</div>
                  <span className="tc-tag rec">Recommended</span>
                </div>
                <ul className="tc-items">
                  <li className="tc-item"><span className="ck">✓</span>Amazon.in + Hinglish keywords</li>
                  <li className="tc-item"><span className="ck">✓</span>Flipkart SEO alongside Amazon</li>
                  <li className="tc-item"><span className="ck">✓</span>Daily rank tracking + WhatsApp alerts</li>
                  <li className="tc-item"><span className="ck">✓</span>AI listing optimisation recommendations</li>
                </ul>
                <div className="tc-price">Monthly Cost: <span style={{ color: "#16a34a" }}>₹1,999–2,999 + Free plan</span></div>
              </div>
            </div> */}

            <div className="callout pink">
              <div className="callout-label">🇮🇳 The India Advantage</div>
              <div className="callout-text">
                The real advantage of an India-first tool isn't just affordability — it's that the data actually
                reflects how Indian buyers search. A keyword tool that doesn't understand "best laptop under 40000" or
                "mixer grinder 750 watt" as high-intent queries on Amazon.in is only giving you half the picture.
              </div>
            </div>

            {/* ── S8: Key Takeaways (in article) ───────────────────────────── */}
            {/* <h2 id="s8">Key Takeaways</h2>

            <div className="takeaway-box">
              <h3>📋 Key Takeaways for Indian Amazon Sellers</h3>
              {[
                "70% of Amazon.in buyers never scroll past page 1 — if you're not ranking, you're invisible, regardless of your product quality.",
                "Amazon's A9 algorithm ranks products based on keyword relevance AND conversion performance — poor SEO leads to wasted ad spend, not just low organic rank.",
                "Indian buyers use Hinglish and regional search patterns that US-centric tools miss — India-specific keyword data is a fundamental competitive advantage.",
                "The biggest SEO opportunity for most Indian sellers is competitor keyword gap analysis — ranking for terms your rivals use that you don't even have in your listing.",
                "Listing optimisation is a one-time effort that compounds over time — unlike ad spend, which stops the moment you pause it.",
                "Running Sponsored Products without optimising organic SEO first is burning ad budget with one hand while blocking the other.",
                "Weekly rank tracking catches ranking drops before they become revenue drops — the earlier you act, the less you lose.",
              ].map(t => (
                <div className="takeaway-item" key={t}>
                  <div className="takeaway-dot">✓</div>
                  <div className="takeaway-text">{t}</div>
                </div>
              ))}
            </div> */}

            {/* ── S9: FAQ ──────────────────────────────────────────────────── */}
            <h2 id="s9">Frequently Asked Questions</h2>

            {FAQS.map((faq, i) => (
              <div className={`faq-item${openFaq === i ? " open" : ""}`} key={i}>
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  <div className={`faq-icon${openFaq === i ? " open" : ""}`}>+</div>
                </div>
                {openFaq === i && <div className="faq-a">{faq.a}</div>}
              </div>
            ))}

            {/* Related Guides */}
            <h2 style={{ marginTop: 56 }}>Related Guides</h2>
            <div className="related-grid">
              {[
                { title: "Amazon Competitor Price Tracking Tool India: Complete Guide (2026)", tag: "Price Tracking",    bg: "linear-gradient(135deg,#F97316,#EA580C)", route: "/features/competitor-price-tracking-feature" },
                { title: "Best Competitor Price Tracking Tools for Indian Sellers: 2026 Guide", tag: "Tool Comparison",   bg: "linear-gradient(135deg,#0D9488,#0891B2)", route: "/compare/insydzvshelium" },
                { title: "How to Win the Amazon Buy Box in India: Seller's Pricing Guide",      tag: "Buy Box Strategy",  bg: "linear-gradient(135deg,#4F46E5,#7C3AED)", route: "/use-cases/track-competitor-prices" },
              ].map(r => (
                <div
                  key={r.title}
                  className="related-card"
                  onClick={() => setLocation(r.route)}
                >
                  <div className="related-thumb" style={{ background: r.bg }}>
                    <span style={{ fontFamily: "'Sora',sans-serif", fontSize: 13, fontWeight: 900, color: "white", textAlign: "center", padding: "12px 16px", lineHeight: 1.3 }}>{r.tag}</span>
                  </div>
                  <div className="related-body">
                    <div className="related-tag">{r.tag}</div>
                    <div className="related-title">{r.title}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Final CTA block */}
            <div className="final-cta-block">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3" style={{ fontFamily: "'Sora',sans-serif" }}>
                Your Competitors Are Ranking. You Should Be Too.
              </h2>
              <p className="text-gray-400 mb-8 text-base md:text-lg" style={{ fontFamily: "'Lora', serif", maxWidth: 520, margin: "0 auto 28px" }}>
                Every day your listing isn't keyword-optimised is a day your competitors are capturing buyers who should
                have found you first.
              </p>
              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "8px 28px", marginBottom: 28 }}>
                {["AI-powered keyword intelligence", "Daily rank tracking", "WhatsApp alerts", "Forever free plan"].map(t => (
                  <div key={t} style={{ color: "#cbd5e1", fontSize: 13.5, display: "flex", alignItems: "center", gap: 7, fontFamily: "'Sora',sans-serif" }}>
                    <span style={{ color: "#f97316", fontWeight: 800 }}>✓</span> {t}
                  </div>
                ))}
              </div>
              <button
                onClick={() => setLocation("/login")}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-base px-10 py-4 rounded-full shadow-xl transition-all transform hover:scale-105"
              >
                <Zap className="w-5 h-5 inline mr-2" />
                Start Free at insydz.com →
              </button>
              <p className="text-gray-500 text-xs mt-4">No credit card · No jargon · See your keyword gaps in minutes</p>
            </div>

          </article>
        </main>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════════════════════ */}
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
                AI-powered ecommerce intelligence for Indian sellers on Amazon.in, Flipkart, and Meesho. Plans from ₹1,999/month.
              </p>
              <button
                onClick={() => setLocation("/login")}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                Start Free →
              </button>
              <div className="flex space-x-3 mt-6">
                {[
                  { title: "Facebook",  href: "https://www.facebook.com/profile.php?id=61586202582209", icon: <Facebook className="w-4 h-4" /> },
                  { title: "Twitter",   href: "https://x.com/growwithinsydz",                           icon: <Twitter className="w-4 h-4" /> },
                  { title: "Instagram", href: "https://www.instagram.com/growwithinsydz/",               icon: <Instagram className="w-4 h-4" /> },
                  { title: "LinkedIn",  href: "https://www.linkedin.com/company/insydz/?viewAsMember=true", icon: <Linkedin className="w-4 h-4" /> },
                ].map(s => (
                  <a key={s.title} title={s.title} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
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
                  ["Amazon Sellers",   "/solutions/amazon-sellers"],
                  ["Flipkart Sellers", "/solutions/flipkart-sellers"],
                  ["Agencies",         "/solutions/ecommerce-agencies"],
                  ["Brand Managers",   "/solutions/brand-managers"],
                ].map(([l, r]) => (
                  <li key={l}><button onClick={() => setLocation(r)} className="text-sm text-gray-400 hover:text-white transition-colors text-left">{l}</button></li>
                ))}
              </ul>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Product</h4>
              <ul className="space-y-3">
                {[
                  ["Features",            "/features/keyword-rank-tracking-feature"],
                  ["Pricing",             "/pricing"],
                  ["SEO & Keywords",      "/features/keyword-rank-tracking-feature"],
                  ["Compare",             "/compare/insydzvshelium"],
                ].map(([l, r]) => (
                  <li key={l}><button onClick={() => setLocation(r)} className="text-sm text-gray-400 hover:text-white transition-colors text-left">{l}</button></li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Resources</h4>
              <ul className="space-y-3">
                {[
                  ["Blog",              "/resources/expert-blog"],
                  ["E-commerce Guides", "/resources/guides"],
                  ["Video Tutorials",   "/resources/videos"],
                  ["Case Studies",      "/resources/case-studies"],
                  ["Free Tools",        "/free-tools/free-keyword-rank-checker"],
                ].map(([l, r]) => (
                  <li key={l}><button onClick={() => setLocation(r)} className="text-sm text-gray-400 hover:text-white transition-colors text-left">{l}</button></li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Company</h4>
              <ul className="space-y-3">
                {[
                  ["About",      () => setLocation("/about/about-us")],
                  ["Our Vision", () => setLocation("/about/our-vision")],
                  ["Careers",    () => setLocation("/about/careers")],
                  ["Contact",    () => setLocation("/about/careers")],
                ].map(([l, a]) => (
                  <li key={l as string}>
                    <button onClick={a as () => void} className="text-sm text-gray-400 hover:text-white transition-colors text-left">
                      {l as string}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 <span className="text-purple-400 font-semibold">Insydz</span>. All rights reserved. Built for Indian Sellers 🇮🇳
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span>Amazon.in · Flipkart · Meesho</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}