import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import {
  Search, Clock, TrendingUp, Target, DollarSign, BarChart3,
  MessageCircle, Package, Trophy, Zap, BookOpen, Video, FileText,
  Menu, X, Sun, Moon, ChevronDown, ShoppingBag, Store, Briefcase,
  Users, Bell, Code, Globe, ArrowLeft, Facebook, Twitter, Linkedin,
  Instagram, Flame, Presentation, LayoutGrid
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
    { name:"For Amazon Sellers (India)",     icon:<ShoppingBag className="w-4 h-4"/>, route:"/solutions/amazon-sellers" },
    { name:"For Flipkart Sellers",           icon:<Store     className="w-4 h-4"/>, route:"/solutions/flipkart-sellers" },
    { name:"For E-commerce Agencies",        icon:<Briefcase className="w-4 h-4"/>, route:"/solutions/ecommerce-agencies" },
    { name:"For Brand Managers",             icon:<Users     className="w-4 h-4"/>, route:"/solutions/brand-managers" },
  ],
  "Use Cases": [
    { name:"All Use Cases",                  icon:<TrendingUp    className="w-4 h-4"/>, route:"/use-cases" },
    { name:"Track Competitor Prices",        icon:<TrendingUp    className="w-4 h-4"/>, route:"/use-cases/track-competitor-prices" },
    { name:"Find Profitable Products",       icon:<Target        className="w-4 h-4"/>, route:"/use-cases/find-profitable-products" },
    { name:"Analyze Customer Reviews",       icon:<MessageCircle className="w-4 h-4"/>, route:"/use-cases/analyze-customer-reviews" },
    { name:"Improve Amazon & Flipkart SEO",  icon:<Search        className="w-4 h-4"/>, route:"/use-cases/improve-seo" },
    { name:"Avoid Stockouts & Missed Sales", icon:<Package       className="w-4 h-4"/>, route:"/use-cases/avoid-stockouts" },
  ],
  Features: [
    { name: "All Features", icon: <LayoutGrid className="w-4 h-4" />, route: "/features" },
    { name:"Competitor Price Tracking",      icon:<DollarSign    className="w-4 h-4"/>, route:"/features/competitor-price-tracking-feature" },
    { name:"Review Analytics",               icon:<MessageCircle className="w-4 h-4"/>, route:"/features/review-analytics-feature" },
    { name:"Price Optimization",             icon:<TrendingUp    className="w-4 h-4"/>, route:"/features/price-optimization-feature" },
    { name:"Keyword & Rank Tracking",        icon:<Search        className="w-4 h-4"/>, route:"/features/keyword-rank-tracking-feature" },
    { name:"Product Research",               icon:<Package       className="w-4 h-4"/>, route:"/features/product-research-feature" },
    { name:"AI Recommendations",             icon:<Zap           className="w-4 h-4"/>, route:"/features/ai-recommendations-feature" },
    { name:"WhatsApp Alerts",                icon:<Bell          className="w-4 h-4"/>, badge:"NEW",      route:"/features/whatsapp-alerts-feature" },
    { name:"Festive Trend Intelligence",     icon:<Flame         className="w-4 h-4"/>, badge:"UPCOMING", route:"/features/festive-trend-feature" },
  ],
  "Free Tools": [
    { name:"Free Amazon Product Analyzer",   icon:<BarChart3     className="w-4 h-4"/>, route:"/free-tools/free-amazon-product-analyzer" },
    { name:"Free Review Sentiment Checker",  icon:<MessageCircle className="w-4 h-4"/>, route:"/free-tools/free-review-sentiment-checker" },
    { name:"Free Competitor Price Checker",  icon:<DollarSign    className="w-4 h-4"/>, route:"/free-tools/free-competitor-price-checker" },
    { name:"Free Keyword Rank Checker",      icon:<Search        className="w-4 h-4"/>, badge:"NEW", route:"/free-tools/free-keyword-rank-checker" },
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
  { id:"intro",         label:"Why Review Intelligence Matters" },
  { id:"hinglish",      label:"India-Specific Review Analysis" },
  { id:"competitor",    label:"Competitor Review Mining" },
  { id:"how-it-works",  label:"How the Tool Works" },
  { id:"signals",       label:"7 Core Review Signals" },
  { id:"comparison",    label:"Manual vs Tool vs AI Comparison" },
  { id:"mistakes",      label:"5 Mistakes Sellers Make" },
  { id:"workflow",      label:"Weekly Execution Model" },
  { id:"best-tools",    label:"Best Tools for India 2026" },
  { id:"faq",           label:"Frequently Asked Questions" },
];

const FAQS = [
  { q:"What is an Amazon review analysis tool and why do Indian sellers need one?",
    a:"An Amazon review analysis tool automatically reads and classifies customer reviews on your Amazon.in and Flipkart listings — and your competitors' listings — to surface patterns, sentiment signals, and product intelligence you couldn't extract manually. Indian sellers need one because: (a) the volume of reviews across 10 to 20 SKUs makes manual reading impractical; (b) patterns only become visible at scale — you can't spot that 22% of your negative reviews share a root cause by reading 5 reviews a week; and (c) global tools don't process the Hindi and Hinglish reviews that make up a significant share of Indian marketplace feedback." },
  { q:"How is review sentiment analysis different from just reading the star rating?",
    a:"Star ratings tell you an aggregate satisfaction score. Sentiment analysis tells you why. A product at 4.1 stars with 25% of negative reviews mentioning a single fixable defect has a very different problem than a product at 4.1 stars with complaints spread across 10 unrelated issues. Sentiment analysis identifies specific complaint clusters, their share of negative reviews, and whether they're growing or shrinking — giving sellers an actionable fix, not just a score. For Indian sellers, India-calibrated sentiment analysis also detects negative and positive signals in Hindi and Hinglish." },
  { q:"Can I analyse competitor reviews — not just my own?",
    a:"Yes — and this is where the highest-value intelligence typically lives. AI review analysis tools allow you to add competitor ASINs and Flipkart listings to your tracking dashboard. The tool processes their reviews the same way it processes yours, surfacing complaint clusters, positive themes, and feature gaps from their customer base. For Indian sellers in competitive categories, competitor review mining consistently surfaces the 2 to 3 product improvements or positioning angles that would have the highest impact on conversion." },
  { q:"How long does it take to see results from acting on review intelligence?",
    a:"It depends on the type of action. Listing copy changes based on review vocabulary typically show measurable CTR and CVR improvement within 3 to 5 weeks. Product defect fixes, escalated to suppliers and reflected in new inventory, take 4 to 10 weeks to flow through to improved ratings. Competitor positioning counter-messaging in listings shows conversion lift within 2 to 4 weeks in most categories." },
  { q:"Does review analysis work for Flipkart and Meesho, or just Amazon?",
    a:"Most global review tools cover Amazon exclusively — and even then, their primary data quality is for Amazon.com rather than Amazon.in. India-first platforms like Insydz cover Amazon.in, Flipkart, and Meesho simultaneously. This matters because complaint patterns differ meaningfully across platforms: Flipkart buyers tend to focus on delivery and packaging issues; Amazon.in buyers engage more with product functionality and specification accuracy; Meesho buyers frequently flag value-for-money concerns." },
  { q:"Is there a free option for review analysis for Indian sellers?",
    a:"Basic manual analysis is always possible — reading your top 20 negative reviews and your competitors' top 20 negative reviews gives a rough directional signal without any tool cost. For systematic, automated review intelligence, Insydz offers a forever-free plan that includes entry-level review sentiment tracking across Amazon.in and Flipkart. The Starter plan at ₹1,999/month covers full review analytics for sellers managing 5 to 10 SKUs — the most accessible entry point for Indian D2C sellers who want structured review intelligence without a significant tool budget." },
];

function ArticleImg({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{ margin:"28px 0 0" }}>
      <div style={{ position:"relative", borderRadius:12, overflow:"hidden", background:"#f1f5f9", minHeight:300 }}>
        {!loaded && (
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(90deg,#f1f5f9 25%,#e2e8f0 50%,#f1f5f9 75%)", backgroundSize:"200% 100%", animation:"imgShimmer 1.5s infinite" }} />
        )}
        <img src={src} alt={alt} onLoad={() => setLoaded(true)} style={{ width:"100%", display:"block", opacity: loaded ? 1 : 0, transition:"opacity .3s" }} />
      </div>
      <p className="art-img-cap">{caption}</p>
    </div>
  );
}

export default function AmazonReviewAnalysisToolIndia() {
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

  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" }); setTocOpen(false); };
  const handleMenuItemClick = (item: MenuItemWithBadge) => { if (item.route) { setLocation(item.route); setActiveDropdown(null); setIsMenuOpen(false); } };
  const toggleMobileMenu   = (name: string) => setMobileActiveMenu(p => p === name ? null : name);

  const DesktopDropdown = ({ label, menuKey, accent = "purple" }: { label:string; menuKey:keyof NavigationMenu; accent?:"purple"|"orange" }) => {
    const items = navigationMenu[menuKey];
    const isActive = activeDropdown === label;
    const ac = accent === "orange";
    return (
      <div className="relative">
        <button onMouseEnter={() => setActiveDropdown(label)} className={`px-3 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1 ${isActive?(ac?"text-orange-600 font-semibold":"text-purple-600 font-semibold"):(ac?"text-orange-600 dark:text-orange-500 hover:bg-orange-50":"text-gray-700 dark:text-gray-300 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20")}`}>
          {label}<ChevronDown className={`w-3.5 h-3.5 transition-transform ${isActive?"rotate-180":""}`} />
        </button>
        {isActive && (
          <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 z-50">
            {items.map((item, i) => (
              <button key={i} onClick={() => handleMenuItemClick(item)} className={`w-full px-4 py-3 text-left flex items-center gap-3 group ${ac?"hover:bg-orange-50":"hover:bg-purple-50 dark:hover:bg-purple-900/20"}`}>
                <span className={ac?"text-orange-600":"text-purple-600 dark:text-purple-400"}>{item.icon}</span>
                <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">{item.name}</span>
                {item.badge && <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  // ── Review signal rows ────────────────────────────────────────────────────
  const reviewSignals = [
    { icon:"⚙️", signal:"Durability Complaints",   detect:"Products flagged as breaking, malfunctioning, or failing early",                       action:"Source stronger materials; update listing to address objection proactively",            impact:"Reduces return rate 8–15%" },
    { icon:"📏", signal:"Size / Fit Inaccuracy",    detect:"'Smaller than expected', 'not as described', 'sizing wrong'",                           action:"Update size chart; add dimensions callout image; revise bullet points",                impact:"Cuts negative reviews 20–30%" },
    { icon:"📦", signal:"Packaging Damage",         detect:"Reviews mentioning damaged on arrival, poor packing, crushed box",                      action:"Flag to logistics team; upgrade packaging materials",                                  impact:"Protects 4-star average" },
    { icon:"🔧", signal:"Missing Feature Mentions", detect:"Buyers asking for a feature a competitor offers",                                        action:"Product roadmap input; or highlight existing feature they missed in listing copy",       impact:"Conversion rate uplift 5–12%" },
    { icon:"🎯", signal:"Competitor Pain Points",   detect:"Your rival's reviews: what their customers hate most",                                   action:"Your counter-messaging in listing; or source a better version of that product",        impact:"Category market share gain" },
    { icon:"⭐", signal:"Positive Theme Clusters",  detect:"What buyers love most — in their exact words",                                          action:"Mirror that language in title, bullets, A+ content",                                  impact:"CTR and CVR improvement" },
    { icon:"📉", signal:"Review Velocity Drops",    detect:"Sudden slowdown in new review rate",                                                    action:"Trigger review request campaign; check if reviews are being suppressed",              impact:"Maintains ranking momentum" },
  ];

  // ── Comparison rows ──────────────────────────────────────────────────────
  const compRows = [
    { cap:"Amazon.in Review Data",     manual:"Manual only",       global:"Limited India data",      insydz:"Native Amazon.in" },
    { cap:"Flipkart Review Analysis",  manual:"Manual only",       global:"Not supported",           insydz:"Full coverage" },
    { cap:"Meesho Reviews",            manual:"Manual only",       global:"Not supported",           insydz:"Included" },
    { cap:"Sentiment Scoring",         manual:"No — subjective",   global:"English only",            insydz:"Hindi + Hinglish + English" },
    { cap:"Competitor Review Mining",  manual:"1–2 hrs/product",   global:"Amazon.com focused",      insydz:"Automated, all 3 platforms" },
    { cap:"Feature Gap Detection",     manual:"No systematic method", global:"Basic topic clusters", insydz:"AI-tagged issue categories" },
    { cap:"Negative Feedback Alerts",  manual:"Not available",     global:"Email only",              insydz:"WhatsApp within 60 min" },
    { cap:"Recurring Complaint Trends",manual:"Manual reading only",global:"Limited",                insydz:"Weekly digest, auto-flagged" },
    { cap:"Listing Copy Suggestions",  manual:"Not available",     global:"Not available",           insydz:"Bullet rewrites from reviews" },
    { cap:"Review Velocity Tracking",  manual:"Not available",     global:"Amazon.com only",         insydz:"Daily, WhatsApp alerts" },
    { cap:"Language of Insights",      manual:"Your language only", global:"English only",           insydz:"Hindi / English / Hinglish" },
    { cap:"Pricing",                   manual:"Your time (4–6 hrs/wk)", global:"₹3,300–8,300/month", insydz:"₹499–2,999/mo (free tier)" },
  ];

  // ── Tool table rows ────────────────────────────────────────────────────────
  const toolRows = [
    { tool:"Manual Excel",              review:"None",          platforms:"Any (manual)",          hinglish:"No",  wa:"No",  price:"Free (your time)" },
    { tool:"Helium 10 (Review Insights)",review:"Amazon.com only",platforms:"Amazon only",         hinglish:"No",  wa:"No",  price:"₹3,300–8,300" },
    { tool:"Jungle Scout",              review:"Limited",       platforms:"Amazon only",            hinglish:"No",  wa:"No",  price:"₹3,800–8,000" },
    { tool:"Trustpilot / Bazaarvoice",  review:"Website reviews", platforms:"Not marketplace-native", hinglish:"No", wa:"No", price:"₹8,000–25,000" },
    { tool:"Insydz",                    review:"AI-powered",    platforms:"Amazon.in + Flipkart + Meesho", hinglish:"Yes", wa:"Yes", price:"₹499–2,999" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800;900&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
        *,*::before,*::after{box-sizing:border-box}
        html{scroll-behavior:smooth}
        @keyframes imgShimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
        .read-progress{position:fixed;top:80px;left:0;height:3px;background:linear-gradient(90deg,#db2777,#7c3aed);z-index:200;transition:width .1s linear;border-radius:0 2px 2px 0}
        .article-layout{max-width:1240px;margin:0 auto;padding:48px 24px 80px;display:grid;grid-template-columns:308px 1fr;gap:52px;align-items:start}
        @media(max-width:1024px){.article-layout{grid-template-columns:220px 1fr;gap:32px}}
        @media(max-width:768px){.article-layout{grid-template-columns:1fr;padding:24px 16px 60px}}
        .toc-sidebar{position:sticky;top:80px;background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:22px;box-shadow:0 1px 3px rgba(0,0,0,.07),0 4px 12px rgba(0,0,0,.05)}
        .dark .toc-sidebar{background:#111827;border-color:#1f2937}
        @media(max-width:768px){.toc-sidebar{display:none}}
        .mobile-toc-btn{display:none;width:100%;background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:14px 18px;font-family:'Sora',sans-serif;font-size:14px;font-weight:600;color:#111;cursor:pointer;align-items:center;justify-content:space-between;margin-bottom:16px}
        .dark .mobile-toc-btn{background:#111827;border-color:#1f2937;color:#f9fafb}
        @media(max-width:768px){.mobile-toc-btn{display:flex}}
        .mobile-toc-panel{display:none;background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:16px;margin-bottom:24px}
        .dark .mobile-toc-panel{background:#111827;border-color:#1f2937}
        .mobile-toc-panel.open{display:block}
        .article-body{font-family:'Lora',serif;font-size:clamp(15px,2vw,16px);line-height:1.78;color:#1E293B}
        .dark .article-body{color:#d1d5db}
        .article-body h2{font-family:'Sora',sans-serif;font-size:22px;font-weight:800;color:#0D1B2A;margin:52px 0 14px;padding-bottom:12px;border-bottom:2px solid #e5e7eb;letter-spacing:-.3px;line-height:1.3;scroll-margin-top:84px}
        .dark .article-body h2{color:#f9fafb;border-color:#1f2937}
        .article-body h2:first-child{margin-top:0}
        .article-body h3{font-family:'Sora',sans-serif;font-size:17px;font-weight:700;color:#0D1B2A;margin:32px 0 10px;letter-spacing:-.2px;scroll-margin-top:84px}
        .dark .article-body h3{color:#f3f4f6}
        .article-body p{margin-bottom:16px;font-size:15.5px;line-height:1.78}
        .article-body ul,ol{margin:4px 0 18px 22px}
        .article-body li{font-size:15px;line-height:1.72;margin-bottom:8px}
        .article-body li::marker{color:#F97316}
        .article-body strong{font-weight:700;color:#0D1B2A}
        .dark .article-body strong{color:#f9fafb}
        .art-img-cap{font-size:12px;color:#94A3B8;font-style:italic;text-align:center;margin-bottom:28px;padding:8px 12px}
        .box{border-radius:10px;padding:20px 22px;margin:24px 0}
        .box-label{font-size:11px;font-weight:700;letter-spacing:.7px;text-transform:uppercase;margin-bottom:8px;display:flex;align-items:center;gap:6px;font-family:'Sora',sans-serif}
        .box p{margin:0;font-size:14.5px;line-height:1.72;font-family:'Lora',serif}
        .box p+p{margin-top:10px}
        .box-teal{background:#F0FDFA;border-left:4px solid #0D9488}
        .box-teal .box-label{color:#0D9488}
        .box-amber{background:#FFFBEB;border-left:4px solid #D97706}
        .box-amber .box-label{color:#D97706}
        .box-green{background:#F0FDF4;border-left:4px solid #16A34A}
        .box-green .box-label{color:#16A34A}
        .box-pink{background:#FDF2F8;border-left:4px solid #DB2777}
        .box-pink .box-label{color:#DB2777}
        .box-indigo{background:#EEF2FF;border:1px solid #C7D2FE;border-radius:10px}
        .box-indigo .box-label{color:#4F46E5}
        .dark .box-teal{background:#042f2e;border-color:#134e4a}
        .dark .box-amber{background:#1c1507;border-color:#78350f}
        .dark .box-green{background:#052e16;border-color:#166534}
        .dark .box-pink{background:#500724;border-color:#9d174d}
        .dark .box-indigo{background:#1e1b4b;border-color:#3730a3}
        .steps{display:flex;flex-direction:column;gap:12px;margin:20px 0 28px}
        .step{display:flex;gap:16px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:18px 20px}
        .dark .step{background:#111827;border-color:#1f2937}
        .step-n{flex-shrink:0;width:34px;height:34px;background:#F97316;color:white;border-radius:50%;font-weight:800;font-size:15px;display:flex;align-items:center;justify-content:center;font-family:'Sora',sans-serif}
        .step-body strong{display:block;font-size:14.5px;color:#0D1B2A;margin-bottom:3px;font-family:'Sora',sans-serif}
        .dark .step-body strong{color:#f9fafb}
        .step-body p{margin:0;font-size:13.5px;color:#64748B;line-height:1.6;font-family:'Sora',sans-serif}
        .tbl-wrap{overflow-x:auto;border-radius:10px;box-shadow:0 4px 16px rgba(0,0,0,.09);margin:24px 0 32px}
        table.dt{width:100%;border-collapse:collapse;font-size:13px;font-family:'Sora',sans-serif;min-width:560px}
        table.dt thead tr{background:#0D1B2A}
        table.dt th{padding:13px 16px;color:white;font-weight:700;text-align:left;font-size:12px;letter-spacing:.2px;white-space:nowrap}
        table.dt tbody tr{border-bottom:1px solid #E2E8F0;transition:background .15s}
        table.dt tbody tr:nth-child(even) td{background:#F8FAFC}
        table.dt tbody tr:hover td{background:#FFF7ED}
        table.dt td{padding:12px 16px;vertical-align:middle;color:#1E293B;font-size:13px}
        .dark table.dt td{color:#d1d5db}
        .dark table.dt tbody tr{border-color:#1f2937}
        .dark table.dt tbody tr:nth-child(even) td{background:#0f172a}
        table.dt tr.hl td{background:#FFF7ED!important;border-left:3px solid #F97316}
        table.dt tr.hl td:first-child{font-weight:700;color:#F97316}
        .bg{background:#DCFCE7;color:#15803D;font-weight:700;padding:2px 8px;border-radius:20px;font-size:11.5px;display:inline-block}
        .br{background:#FEE2E2;color:#B91C1C;font-weight:700;padding:2px 8px;border-radius:20px;font-size:11.5px;display:inline-block}
        .bo{background:#FFF7ED;color:#C2410C;font-weight:700;padding:2px 8px;border-radius:20px;font-size:11.5px;display:inline-block}
        .mistakes{display:flex;flex-direction:column;gap:10px;margin:20px 0 28px}
        .mistake{border:1px solid #E2E8F0;border-radius:10px;display:flex;overflow:hidden}
        .dark .mistake{border-color:#1f2937}
        .mistake-n{flex-shrink:0;width:46px;background:#0D1B2A;color:white;font-weight:800;font-size:17px;display:flex;align-items:center;justify-content:center;font-family:'Sora',sans-serif}
        .mistake-body{padding:16px 18px}
        .mistake-body strong{display:block;font-size:14.5px;color:#0D1B2A;margin-bottom:5px;font-family:'Sora',sans-serif}
        .dark .mistake-body strong{color:#f9fafb}
        .mistake-body p{margin:0;font-size:13.5px;color:#64748B;line-height:1.65;font-family:'Sora',sans-serif}
        .mid-cta{background:linear-gradient(135deg,#0D1B2A 0%,#1A2E42 100%);border-radius:10px;padding:28px 32px;margin:40px 0;display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap}
        .mid-cta h3{font-size:18px;font-weight:800;color:white;margin-bottom:6px;letter-spacing:-.2px;font-family:'Sora',sans-serif}
        .mid-cta p{color:#94A3B8;font-size:13.5px;margin:0;font-family:'Sora',sans-serif}
        .faq-item{border:1px solid #E2E8F0;border-radius:10px;margin-bottom:10px;overflow:hidden;background:#fff;transition:border-color .2s}
        .dark .faq-item{background:#111827;border-color:#1f2937}
        .faq-item.open{border-color:#F97316}
        .faq-q{padding:16px 20px;font-size:14.5px;font-weight:700;color:#0D1B2A;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:12px;user-select:none;font-family:'Sora',sans-serif}
        .dark .faq-q{color:#f9fafb}
        .faq-q:hover{background:#F8FAFC}
        .dark .faq-q:hover{background:#1f2937}
        .faq-icon{flex-shrink:0;width:22px;height:22px;border-radius:50%;background:#FFEDD5;color:#F97316;display:flex;align-items:center;justify-content:center;font-size:16px;transition:transform .2s}
        .faq-icon.open{transform:rotate(45deg);background:#F97316;color:white}
        .faq-a{padding:0 20px 16px;font-size:14px;color:#64748B;line-height:1.75;font-family:'Lora',serif}
        .dark .faq-a{color:#9ca3af}
        .related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        @media(max-width:768px){.related-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:540px){.related-grid{grid-template-columns:1fr}}
        .rel-card{border:1px solid #E2E8F0;border-radius:10px;overflow:hidden;cursor:pointer;transition:box-shadow .2s,transform .2s;background:#fff}
        .dark .rel-card{background:#111827;border-color:#1f2937}
        .rel-card:hover{box-shadow:0 4px 16px rgba(0,0,0,.09);transform:translateY(-2px)}
        .rel-thumb{width:100%;height:128px;display:flex;align-items:center;justify-content:center;font-size:28px}
        .rel-body{padding:14px}
        .rel-tag{font-size:10.5px;font-weight:700;color:#F97316;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;font-family:'Sora',sans-serif}
        .rel-title{font-size:13px;font-weight:700;color:#0D1B2A;line-height:1.4;font-family:'Sora',sans-serif}
        .dark .rel-title{color:#f9fafb}
        .toc-link{display:block;font-size:12.5px;font-weight:500;color:#64748B;padding:6px 10px;border-radius:6px;cursor:pointer;border:none;background:none;text-align:left;width:100%;transition:all .15s;margin-bottom:2px;line-height:1.4;border-left:2px solid transparent}
        .toc-link:hover,.toc-link.active{color:#F97316;background:#FFF7ED;border-left-color:#F97316}
        .dark .toc-link{color:#9ca3af}
        .dark .toc-link:hover,.dark .toc-link.active{background:#431407;color:#fb923c}
        .stat-strip{display:flex;flex-wrap:wrap;border:1px solid #E2E8F0;border-radius:10px;overflow:hidden;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.07)}
        .dark .stat-strip{border-color:#1f2937;background:#111827}
        .stat-item{flex:1;min-width:140px;padding:18px 24px;border-right:1px solid #E2E8F0;text-align:center}
        .dark .stat-item{border-color:#1f2937}
        .stat-item:last-child{border-right:none}
        @media(max-width:580px){.stat-item{min-width:50%;border-bottom:1px solid #E2E8F0}}
        .takeaway-box{background:#0D1B2A;border-radius:10px;padding:28px 30px;margin:28px 0}
        .takeaway-box h3{font-family:'Sora',sans-serif;font-size:18px;font-weight:800;color:white;margin:0 0 16px}
        .takeaway-item{display:flex;align-items:flex-start;gap:10px;margin-bottom:10px}
        .takeaway-dot{flex-shrink:0;width:18px;height:18px;border-radius:50%;background:#F97316;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:white;margin-top:3px}
        .takeaway-text{font-family:'Lora',serif;font-size:14.5px;color:#CBD5E1;line-height:1.6}
        .metrics{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:20px 0 28px}
        @media(max-width:580px){.metrics{grid-template-columns:1fr}}
        .metric{background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:18px;display:flex;gap:14px;align-items:flex-start}
        .dark .metric{background:#111827;border-color:#1f2937}
        .metric-icon{flex-shrink:0;width:38px;height:38px;border-radius:9px;background:#FFEDD5;display:flex;align-items:center;justify-content:center;font-size:18px}
        .metric-t{font-size:13.5px;font-weight:700;color:#0D1B2A;margin-bottom:3px;font-family:'Sora',sans-serif}
        .dark .metric-t{color:#f9fafb}
        .metric-d{font-size:12.5px;color:#64748B;line-height:1.5;font-family:'Sora',sans-serif}
        .fc-block{background:linear-gradient(135deg,#DB2777 0%,#7C3AED 100%);padding:80px 24px;text-align:center}
        .fc-inner{max-width:640px;margin:0 auto}
        .fc-inner h2{font-family:'Sora',sans-serif;font-size:clamp(24px,4vw,36px);font-weight:800;color:white;margin-bottom:14px;line-height:1.2;letter-spacing:-.4px}
        .fc-inner p{color:rgba(255,255,255,.75);font-size:16px;max-width:520px;margin:0 auto 28px;line-height:1.7;font-family:'Lora',serif}
        .fc-points{display:flex;justify-content:center;flex-wrap:wrap;gap:8px 24px;margin-bottom:32px}
        .fc-pt{color:rgba(255,255,255,.85);font-size:13.5px;display:flex;align-items:center;gap:7px;font-family:'Sora',sans-serif}
        .fc-pt::before{content:'✓';color:white;font-weight:800}
        .fc-btn{background:white;color:#DB2777;padding:16px 36px;border-radius:10px;font-size:15px;font-weight:800;border:none;cursor:pointer;transition:transform .2s}
        .fc-btn:hover{transform:translateY(-2px)}
        .fc-sub{color:rgba(255,255,255,.5);font-size:12.5px;margin-top:14px}
        .verdict-banner{background:linear-gradient(135deg,#FFF7ED 0%,#FFEDD5 100%);border:2px solid #FED7AA;border-radius:12px;padding:22px 24px;margin:28px 0;display:flex;gap:16px;align-items:flex-start}
        .dark .verdict-banner{background:#431407;border-color:#78350f}
      `}</style>

      <div className="read-progress" style={{ width:`${scrollPct}%` }} />

      {/* ═══ NAV ════════════════════════════════════════════════════════════ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled?"bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg":"bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-1 group cursor-pointer" onClick={() => setLocation("/")}>
              <div className="relative">
                <img src="/logo.png" alt="Insydz Logo" className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 object-contain" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ml-2">Insydz</span>
            </div>
            <div className="hidden lg:flex items-center space-x-3" ref={dropdownRef}>
              <DesktopDropdown label="Solutions"  menuKey="Solutions" />
              <DesktopDropdown label="Use Cases"  menuKey="Use Cases" />
              <DesktopDropdown label="Features"   menuKey="Features" />
              <button onClick={() => setLocation("/pricing")} onMouseEnter={() => setActiveDropdown(null)} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all">Pricing</button>
              <DesktopDropdown label="Free Tools" menuKey="Free Tools" />
              <DesktopDropdown label="Compare"    menuKey="Compare" />
              <DesktopDropdown label="Resources"  menuKey="Resources" accent="orange" />
              <DesktopDropdown label="About"      menuKey="About" />
              <Button onClick={() => setLocation("/login")} onMouseEnter={() => setActiveDropdown(null)} className="ml-2 text-sm bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">Login</Button>
              <button className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" onClick={() => setIsDarkMode(!isDarkMode)}>
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
              <button onClick={() => { setLocation("/resources/expert-blog"); setIsMenuOpen(false); }} className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 rounded-lg font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </button>
              {([["Solutions","Solutions","purple"],["Use Cases","Use Cases","purple"],["Features","Features","purple"],["Free Tools","Free Tools","purple"],["Compare","Compare","purple"],["Resources","Resources","orange"],["About","About","purple"]] as [string,keyof NavigationMenu,string][]).map(([label,key,accent]) => (
                <div key={label}>
                  <button onClick={() => toggleMobileMenu(label)} className={`flex items-center justify-between w-full px-4 py-2 rounded-lg font-medium ${accent==="orange"?"text-orange-600 hover:bg-orange-50":"text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"}`}>
                    {label}<ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveMenu===label?"rotate-180":""}`} />
                  </button>
                  {mobileActiveMenu===label && (
                    <div className="ml-4 mt-1 space-y-1">
                      {navigationMenu[key].map((item,i) => (
                        <button key={i} onClick={() => handleMenuItemClick(item)} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-purple-50 rounded-lg">
                          {item.icon}{item.name}
                          {item.badge && <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button onClick={() => setLocation("/pricing")} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 rounded-lg font-medium">Pricing</button>
              <Button onClick={() => { setLocation("/login"); setIsMenuOpen(false); }} className="w-full mt-2 bg-gradient-to-r from-pink-500 to-rose-500">Login</Button>
              <button className="mt-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700 w-full flex justify-center" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* BREADCRUMB */}
      <div style={{ background:"#F8FAFC", borderBottom:"1px solid #E2E8F0", padding:"10px 0", marginTop:80 }}>
        <div style={{ maxWidth:1240, margin:"0 auto", padding:"0 24px", display:"flex", alignItems:"center", gap:6, fontSize:12.5, color:"#94A3B8", flexWrap:"wrap" as const }}>
          <button onClick={() => setLocation("/")} style={{ color:"#64748B", fontWeight:500, background:"none", border:"none", cursor:"pointer" }}>Home</button>
          <span>›</span>
          <button onClick={() => setLocation("/resources/expert-blog")} style={{ color:"#64748B", fontWeight:500, background:"none", border:"none", cursor:"pointer" }}>Blog</button>
          <span>›</span>
          <button onClick={() => setLocation("/features/review-analytics-feature")} style={{ color:"#64748B", fontWeight:500, background:"none", border:"none", cursor:"pointer" }}>Review Intelligence</button>
          <span>›</span>
          <span>Amazon Review Analysis Tool India</span>
        </div>
      </div>

      {/* HERO */}
      <div style={{ maxWidth:1240, margin:"0 auto", padding:"48px 24px 0" }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:7, background:"#F0FDF4", color:"#16A34A", fontSize:11.5, fontWeight:700, letterSpacing:.6, textTransform:"uppercase" as const, padding:"5px 14px", borderRadius:20, marginBottom:18 }}>
          <MessageCircle className="w-3.5 h-3.5" />
          Review Intelligence Pillar
        </div>
        <h1 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(26px,3.8vw,40px)", fontWeight:800, lineHeight:1.18, color:"#0D1B2A", letterSpacing:"-.5px", marginBottom:18, maxWidth:820 }} className="dark:text-white">
          AI <span style={{ color:"#16A34A" }}>Review Intelligence Tool</span> for Amazon &amp; Flipkart Sellers: The Complete Guide (2026)
        </h1>
        <div style={{ display:"flex", alignItems:"center", flexWrap:"wrap" as const, gap:"5px 18px", marginBottom:28 }}>
          <div style={{ display:"flex", alignItems:"center", gap:6, fontSize:13, color:"#64748B" }}><Users className="w-3.5 h-3.5" /><strong style={{ color:"#0D1B2A" }}>INSYDZ Research Team</strong></div>
          <div style={{ display:"flex", alignItems:"center", gap:6, fontSize:13, color:"#64748B" }}><Clock className="w-3.5 h-3.5" />January 2026</div>
          <div style={{ display:"flex", alignItems:"center", gap:6, fontSize:13, color:"#64748B" }}><Clock className="w-3.5 h-3.5" /><strong>13 min read</strong></div>
          <span style={{ background:"#FFEDD5", color:"#F97316", fontSize:11, fontWeight:700, padding:"2px 8px", borderRadius:4 }}>Updated for 2026</span>
          <span style={{ background:"#F0FDF4", color:"#16A34A", fontSize:11, fontWeight:700, padding:"2px 8px", borderRadius:4 }}>BOFU Guide</span>
        </div>

        <div className="stat-strip" style={{ marginBottom:32 }}>
          {[
            ["500–2,000",  "New Reviews/Month for a Mid-Sized 20-SKU Seller"],
            ["6–10 hrs",   "Per Week Wasted Reading Reviews Manually"],
            ["44%",        "Organic Sales Growth Driven by Review Intelligence"],
            ["₹499/mo",    "Insydz Starter — Full Review Analytics"],
          ].map(([num, lbl]) => (
            <div className="stat-item" key={num}>
              <span style={{ display:"block", fontSize:26, fontWeight:800, color:"#16A34A", fontFamily:"'Sora',sans-serif", lineHeight:1 }}>{num}</span>
              <span style={{ display:"block", fontSize:11.5, color:"#64748B", marginTop:5, lineHeight:1.4, fontWeight:500 }}>{lbl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* IMG 1 — Hero */}
      <div style={{ maxWidth:1240, margin:"0 auto", padding:"0 24px" }}>
        <ArticleImg
          src="/eighteen.png"
          alt="AI review analysis tool for Amazon India and Flipkart sellers — sentiment dashboard"
          caption="Insydz AI review intelligence — automatically surfaces complaint clusters, competitor gaps, and listing opportunities across Amazon.in, Flipkart, and Meesho"
        />
      </div>

      {/* KEY TAKEAWAYS */}
      <div style={{ maxWidth:1240, margin:"0 auto", padding:"0 24px 40px" }}>
        <div className="takeaway-box">
          <h3>✅ Key Takeaways</h3>
          {[
            "Reviews are your most underused intelligence asset. Every 1-star review is a paid customer telling you precisely what went wrong. Every competitor's 2-star review is a product opportunity waiting to be acted on.",
            "Sentiment analysis for Indian e-commerce requires Hinglish processing. A tool that only reads English reviews is missing a large share of what Indian buyers on Amazon.in and Flipkart are actually saying.",
            "Competitor review mining is the highest-ROI use of review analysis — and the most consistently overlooked. Your rivals' negative reviews tell you exactly what product improvements and positioning angles will resonate right now.",
            "Patterns beat individual reviews every time. Reacting to individual 1-star reviews is customer service. Detecting that 28% of your negative reviews share a single fixable root cause is product strategy.",
            "Review language is keyword data. The words buyers use in 5-star reviews are the exact phrases your next buyer will search for. Putting that vocabulary into your listing title and bullets improves CTR and CVR simultaneously.",
            "A 4.1-star average is not a health metric. Complaint cluster percentage and trend direction are the signals that predict whether your rating rises or falls over the next 90 days.",
            "WhatsApp delivery of review alerts converts to action significantly faster than email — for Indian SMB sellers who check WhatsApp 50+ times a day, the alert channel determines whether intelligence becomes action or history.",
          ].map(t => (
            <div className="takeaway-item" key={t}>
              <div className="takeaway-dot">✓</div>
              <div className="takeaway-text">{t}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ARTICLE LAYOUT */}
      <div className="article-layout">

        {/* SIDEBAR */}
        <aside className="toc-sidebar">
          <h4 style={{ fontFamily:"'Sora',sans-serif", fontSize:11, fontWeight:700, textTransform:"uppercase" as const, letterSpacing:1, color:"#94A3B8", marginBottom:14 }}>Table of Contents</h4>
          <ul style={{ listStyle:"none", padding:0, margin:0 }}>
            {TOC.map(t => (
              <li key={t.id}><button className={`toc-link${activeSection===t.id?" active":""}`} onClick={() => go(t.id)}>{t.label}</button></li>
            ))}
          </ul>
          <div style={{ background:"linear-gradient(160deg,#0D1B2A 0%,#162B45 100%)", borderRadius:10, padding:24, marginTop:20 }}>
            <h4 style={{ fontFamily:"'Sora',sans-serif", fontSize:16, fontWeight:800, color:"white", marginBottom:10, lineHeight:1.35 }}>
              Mine Reviews Like a Pro — Free
            </h4>
            <p style={{ fontSize:12.5, color:"#94A3B8", marginBottom:16, lineHeight:1.6, fontFamily:"'Sora',sans-serif" }}>AI-powered review intelligence for Amazon.in, Flipkart &amp; Meesho. Hindi + Hinglish + English.</p>
            <ul style={{ listStyle:"none", padding:0, margin:"0 0 18px" }}>
              {["Competitor review mining — automated","Hinglish + Hindi sentiment processing","WhatsApp alerts for critical reviews","From ₹1,999/mo — or free forever"].map(f => (
                <li key={f} style={{ fontSize:12.5, color:"#CBD5E1", marginBottom:8, display:"flex", alignItems:"flex-start", gap:7, lineHeight:1.4, fontFamily:"'Sora',sans-serif" }}>
                  <span style={{ color:"#16A34A", fontWeight:800, flexShrink:0 }}>✓</span>{f}
                </li>
              ))}
            </ul>
            <button onClick={() => setLocation("/login")} style={{ display:"block", background:"#16A34A", color:"white", textAlign:"center" as const, padding:12, borderRadius:8, fontWeight:700, fontSize:13.5, width:"100%", cursor:"pointer", border:"none", fontFamily:"'Sora',sans-serif" }}>
              Start Free — No Card Needed
            </button>
          </div>
          <div style={{ background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:10, padding:18, marginTop:20 }}>
            <h4 style={{ fontFamily:"'Sora',sans-serif", fontSize:11, fontWeight:700, textTransform:"uppercase" as const, letterSpacing:1, color:"#94A3B8", marginBottom:12 }}>Share This Guide</h4>
            <div style={{ display:"flex", gap:8 }}>
              {[{l:"WhatsApp",bg:"#25D366"},{l:"LinkedIn",bg:"#0A66C2"},{l:"Twitter",bg:"#1DA1F2"}].map(s => (
                <div key={s.l} style={{ flex:1, textAlign:"center" as const, padding:"9px 6px", borderRadius:7, fontSize:12, fontWeight:700, color:"white", background:s.bg, cursor:"pointer", fontFamily:"'Sora',sans-serif" }}>{s.l}</div>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main>
          <button className="mobile-toc-btn" onClick={() => setTocOpen(!tocOpen)}>
            📋 Table of Contents <span>{tocOpen?"▲":"▼"}</span>
          </button>
          <div className={`mobile-toc-panel${tocOpen?" open":""}`}>
            {TOC.map(t => (
              <button key={t.id} className="toc-link" style={{ display:"block", marginBottom:4 }} onClick={() => go(t.id)}>{t.label}</button>
            ))}
          </div>

          <article className="article-body">

            {/* In Simple Terms */}
            <div className="box box-indigo" style={{ margin:"0 0 32px" }}>
              <div className="box-label">💡 In Simple Terms</div>
              <p>An Amazon review analysis tool reads every customer review on your listings and your competitors' listings — then tells you in plain language: what buyers consistently love, what they consistently complain about, which product features are causing returns, and what your rivals' customers wish was better. It turns 10,000 reviews you'd never have time to read into 5 specific actions you can take this week.</p>
            </div>

            {/* S1 */}
            <h2 id="intro">Why Review Intelligence Matters More Than Ever for Indian Sellers</h2>
            <h3>Your Reviews Are Talking. Most Sellers Aren't Listening.</h3>
            <p>Amazon.in and Flipkart together process hundreds of millions of product reviews across categories from electronics to kirana goods. A mid-sized seller with 20 SKUs might accumulate <strong>500 to 2,000 new reviews per month</strong> across all listings. Reading them manually takes 6 to 10 hours a week. Pattern-detecting across them takes skills most sellers don't have and time most sellers can't spare.</p>
            <p>The result: most Indian sellers operate on a lagging, impressionistic understanding of what their customers think. They notice when a product drops to 3.8 stars. They don't notice that 34% of their 2-star reviews in the past 30 days mention 'packaging damaged' — a supply chain fix that would cost ₹12 per unit to solve and recover 0.4 rating points over 90 days.</p>

            {/* S2 */}
            <h2 id="hinglish">Indian Buyers Review Differently — And That Requires India-Specific Analysis</h2>
            <p>Indian buyers write reviews in a mix of Hindi, English, and Hinglish — often in the same sentence. 'Product achha hai but quality thodi weak lagti hai' is a negative signal. A US-trained sentiment engine will either mistranslate it or simply not process it. An India-first review tool understands that 'bilkul bakwas' means the customer is furious and 'ekdum mast product hai' means they're delighted — and classifies accordingly.</p>
            <p>Beyond language, Indian buyers review specific concerns that global databases don't capture well: courier partner complaints common on Flipkart, festive gifting suitability, size accuracy for Indian body types in apparel, and compatibility with Indian electrical standards in electronics. Review intelligence built for India flags these patterns — global tools built for Amazon.com do not.</p>

            {/* IMG 2 — Hinglish sentiment processing */}
            {/* <ArticleImg
              src="/twenty two.png"
              alt="Hinglish and Hindi review sentiment processing for Amazon India sellers"
              caption="India-first review intelligence processes Hindi, Hinglish, and English reviews — not just English translations"
            /> */}

            {/* S3 */}
            <h2 id="competitor">Competitor Review Mining: The Biggest Untapped Advantage</h2>
            <p>Most sellers track their own reviews. Almost none systematically mine competitor reviews for product and positioning intelligence. This is a significant missed opportunity — because your competitors' reviews are telling you exactly what problems exist in your category that no current product is solving well.</p>
            <p>A competitor with 800 reviews and a 3.9-star rating isn't your enemy. They're <strong>a free focus group</strong> that has already told 800 real buyers what's wrong with the current category standard. If 22% of those reviews mention 'cable too short' and your product has a longer cable, you have a positioning advantage sitting in plain sight — waiting for someone to put it in their listing title.</p>

            <div className="box box-amber">
              <div className="box-label">📌 Real Seller: Hyderabad Kitchen Appliances Seller</div>
              <p>A Hyderabad-based seller of electric kettles was doing ₹3.8 lakh/month on Amazon.in with a 4.1-star average. After running an AI review analysis on her top-selling ASIN and 3 closest competitors, three patterns emerged: (1) Her own reviews flagged 'lid doesn't seal properly' in 19% of 1-star reviews. (2) Competitor A's reviews mentioned 'auto-shutoff doesn't work' in 28% of negative reviews — she added 'reliable auto-shutoff with safety certification' to her listing title. (3) Competitor B's buyers repeatedly mentioned 'wish it had a temperature display' — she sourced a temperature-display variant and launched it as a new SKU.</p>
              <p>Within 12 weeks: her primary listing's rating recovered from 4.1 to 4.5 stars. The 'auto-shutoff' positioning upgrade lifted conversion rate by 11%. The temperature-display variant became her highest-margin SKU within 60 days. <strong>Total revenue moved from ₹3.8 lakh to ₹5.6 lakh/month.</strong></p>
            </div>

            <div className="box box-indigo">
              <div className="box-label">🤖 AI Overview Summary</div>
              <p>AI review analysis tools for Amazon.in and Flipkart automatically process customer reviews to surface sentiment patterns, product defect signals, competitor weaknesses, and listing optimisation opportunities. For Indian D2C and growth sellers, tools built specifically for the Indian market process Hindi, Hinglish, and English reviews — delivering actionable intelligence in plain language via WhatsApp, not complex dashboards.</p>
            </div>

            {/* S4 */}
            <h2 id="how-it-works">How an AI Review Analysis Tool Works</h2>
            <p>Modern review intelligence tools have replaced the 'read and hope you notice a pattern' workflow with a five-step automated intelligence loop:</p>
            {/* IMG 2 — Hinglish sentiment processing */}
            <ArticleImg
              src="/twenty two.png"
              alt="Hinglish and Hindi review sentiment processing for Amazon India sellers"
              caption="India-first review intelligence processes Hindi, Hinglish, and English reviews — not just English translations"
            />
            <div className="steps">
              {[
                { n:1, t:"Ingest & Language Detection",         d:"Reviews are pulled from Amazon.in, Flipkart, and Meesho listings — yours and your competitors'. Each review is language-detected and processed natively in Hindi, Hinglish, or English. No forced translation that loses meaning before analysis begins." },
                { n:2, t:"Sentiment Classification",    d:"" },
                { n:3, t:"Complaint Cluster Detection",   d:"Reviews are automatically sorted into issue clusters: Packaging, Durability, Value for Money, Size Accuracy, Delivery, Customer Service, Feature Request. You see exactly which cluster is driving your 1-star and 2-star reviews." },
                { n:4, t:"Trend & Velocity Scoring",     d:"The tool runs the same process on your top 3 to 5 competitors. You see their recurring complaint patterns — the exact pain points their customers are experiencing. This is where product opportunity lives." },
                { n:5, t:"Actionable Recommendations",     d:"New negative reviews — yours or a competitor's — are flagged via WhatsApp within 60 minutes. Weekly digest: top 3 sentiment shifts across all tracked products, with specific action recommendations." },
              ].map(s => (
                <div className="step" key={s.n}>
                  <div className="step-n">{s.n}</div>
                  <div className="step-body"><strong>{s.t}</strong><p>{s.d}</p></div>
                </div>
              ))}
            </div>

            <div className="box box-green">
              <div className="box-label">⚡ Reading vs Analysing</div>
              <p>Reading reviews tells you what one buyer said. AI analysis tells you that 34% of your negative reviews share the same root cause — and that fixing it will measurably improve your rating within 8 weeks.</p>
            </div>

            {/* IMG 3 — How tool works pipeline */}
            {/* <ArticleImg
              src="/twenty one.png"
              alt="5-step AI review analysis pipeline for Amazon India and Flipkart sellers"
              caption="The 5-step automated review intelligence pipeline — from raw reviews to WhatsApp-delivered action recommendations"
            /> */}

            {/* S5 */}
            <h2 id="signals">Core Review Signals Indian Sellers Should Be Tracking</h2>
            <p>Not all review data is equally actionable. Here are the seven signals that consistently drive the highest-impact decisions for Amazon.in and Flipkart sellers:</p>
            <ArticleImg
              src="/twenty one.png"
              alt="5-step AI review analysis pipeline for Amazon India and Flipkart sellers"
              caption="The 5-step automated review intelligence pipeline — from raw reviews to WhatsApp-delivered action recommendations"
            />
            <div className="tbl-wrap">
              <table className="dt">
                <thead>
                  <tr>
                    <th>Review Signal</th>
                    <th>What the AI Detects</th>
                    <th>What You Do With It</th>
                    <th>Revenue Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewSignals.map((r, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight:700, whiteSpace:"nowrap" as const }}><span style={{ marginRight:6 }}>{r.icon}</span>{r.signal}</td>
                      <td style={{ color:"#475569", fontSize:12.5 }}>{r.detect}</td>
                      <td style={{ color:"#475569", fontSize:12.5 }}>{r.action}</td>
                      <td><span className="bg">{r.impact}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* IMG 4 — Review signals dashboard */}
            {/* <ArticleImg
              src="/twenty.png"
              alt="Review signal categories and complaint clusters in Insydz review intelligence dashboard"
              caption="Seven review signal categories automatically detected and prioritised by Insydz AI — with action recommendations per cluster"
            /> */}

            {/* S6 */}
            <h2 id="comparison">Manual vs. Tool vs. India-First AI: How the Options Compare</h2>

            <div className="tbl-wrap">
              <table className="dt">
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th>Manual Review Reading</th>
                    <th>Global Tools (US)</th>
                    <th style={{ background:"#16A34A" }}>Insydz AI Review Intelligence</th>
                  </tr>
                </thead>
                <tbody>
                  {compRows.map((r, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight:600, background:"#F8FAFC" }}>{r.cap}</td>
                      <td style={{ color:"#94A3B8", fontSize:12.5 }}>{r.manual}</td>
                      <td style={{ color:"#94A3B8", fontSize:12.5 }}>{r.global}</td>
                      <td style={{ fontWeight:700, color:"#15803D", fontSize:12.5 }}>{r.insydz}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* S7 */}
            <h2 id="mistakes">5 Mistakes Indian Sellers Make With Customer Review Data</h2>
            <div className="mistakes">
              {[
                { n:1, t:"Using Star Rating as a Proxy for Product Health",          b:"A 4.1-star average tells you nothing actionable. The number that matters isn't your average rating — it's the percentage of reviews in your worst issue category, and whether that percentage is growing. A product at 4.2 stars with 28% of negative reviews mentioning a single fixable defect is a product with a very clear, solvable problem. You can't tell the difference by looking at the number alone." },
                { n:2, t:"Only Reading Your Own Reviews and Ignoring Competitors'",   b:"Indian sellers consistently overlook the richest source of free product intelligence: their competitors' negative reviews. Every 1-star and 2-star review on a competing product is a buyer telling the market what they wish was different. Sellers who read those reviews systematically can position against known pain points, source improved product variants, and write listing copy that directly addresses the category's most common complaints." },
                { n:3, t:"Reacting to Individual Reviews Instead of Patterns",        b:"A single 1-star review saying 'stopped working after 3 days' is one data point — possibly an outlier. Thirty reviews in 90 days saying variants of 'stopped working early' is a product defect signal that requires supply chain intervention. Sellers who track patterns spend energy on the root causes that generate those responses in the first place." },
                { n:4, t:"Not Connecting Review Intelligence to Listing Copy",        b:"The most direct application of review analysis is consistently under-used: mining your positive reviews for the exact language your buyers use to describe what they love, then putting that language back into your listing title, bullet points, and A+ content. Global tools built for Amazon.com miss this entirely for Indian sellers — because they don't process Hinglish review language." },
                { n:5, t:"Treating Review Analysis as a One-Time Audit",              b:"Many sellers who engage with review data do a one-time audit — clean up their worst issues, update their listing, and move on. This misses the compounding value of continuous tracking. Competitor products change. New sellers enter with different defect patterns. Seasonal usage creates new complaint clusters: monsoon-related issues in apparel, AC compatibility in electronics, gifting suitability during Diwali season." },
              ].map(m => (
                <div className="mistake" key={m.n}>
                  <div className="mistake-n">{m.n}</div>
                  <div className="mistake-body"><strong>{m.t}</strong><p>{m.b}</p></div>
                </div>
              ))}
            </div>
            <ArticleImg
              src="/twenty.png"
              alt="Review signal categories and complaint clusters in Insydz review intelligence dashboard"
              caption="Seven review signal categories automatically detected and prioritised by Insydz AI — with action recommendations per cluster"
            />

            <div className="verdict-banner">
              <div style={{ fontSize:22, flexShrink:0 }}>🎯</div>
              <p style={{ margin:0, fontFamily:"'Lora',serif", fontSize:15, color:"#92400E", lineHeight:1.7 }} className="dark:text-amber-300">
                The goal of review analysis isn't to respond to buyers faster. <strong>It's to eliminate the reasons they write negative reviews at all.</strong>
              </p>
            </div>

            {/* S8 */}
            <h2 id="workflow">Best Practices: Weekly Review Intelligence Execution Model</h2>

            {/* IMG 5 — Workflow */}
            <ArticleImg
              src="/nineteen.png"
              alt="Weekly review intelligence execution model for Amazon India and Flipkart sellers"
              caption="Three-phase review intelligence workflow — one-time setup, weekly monitoring, and monthly strategic review"
            />

            <div style={{ display:"flex", flexDirection:"column" as const, gap:14, margin:"20px 0 28px" }}>
              {[
                { phase:"One-Time Setup (Do This First — 2 Hours)", color:"#4F46E5", items:[
                  "Connect your Amazon.in and Flipkart seller accounts and add your top 10 SKUs for review monitoring",
                  "Add your top 3 to 5 direct competitors per product — their ASINs and Flipkart listing URLs",
                  "Configure WhatsApp alerts for: any new 1-star or 2-star review on your listings; new negative reviews mentioning keywords like 'broken', 'stopped working', 'wrong size'",
                  "Run an initial review audit on your top 3 SKUs — identify your top 2 complaint clusters per product",
                  "Run the same audit on your top competitors — identify their top 2 complaint clusters",
                ]},
                { phase:"Weekly (20-Minute Review Session)", color:"#0D9488", items:[
                  "Review your weekly sentiment digest — flag any complaint category that increased by more than 3 percentage points",
                  "Check competitor review velocity — is any rival accumulating reviews unusually fast? A new product launch or viral moment incoming",
                  "Review any 1-star and 2-star reviews on your listings that came in this week — is there a new pattern emerging?",
                  "Update your listing copy if a new positive theme cluster emerged — mirror the buyer vocabulary back into your bullets",
                ]},
                { phase:"Monthly (Strategic Review — 45 Minutes)", color:"#DB2777", items:[
                  "Full competitor review analysis: have their complaint clusters shifted? Have they fixed the issues you were counter-positioning against?",
                  "Identify the single highest-impact product improvement from this month's review data — escalate to supplier or in-house team",
                  "Compare your listing copy against your current top positive review themes — are they aligned, or has buyer language drifted?",
                  "Plan listing updates for the upcoming festive season based on review language trends — what did buyers say after last Diwali, Big Billion Days, or Republic Day Sale?",
                ]},
              ].map((section, si) => (
                <div key={si} style={{ background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:10, padding:"18px 20px" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                    <div style={{ width:26, height:26, borderRadius:"50%", background:section.color, color:"white", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:800, flexShrink:0, fontFamily:"'Sora',sans-serif" }}>{si+1}</div>
                    <span style={{ fontFamily:"'Sora',sans-serif", fontSize:14, fontWeight:700, color:"#0D1B2A" }}>{section.phase}</span>
                  </div>
                  <ul style={{ margin:0, padding:0, listStyle:"none", display:"flex", flexDirection:"column" as const, gap:7 }}>
                    {section.items.map((item, ii) => (
                      <li key={ii} style={{ fontFamily:"'Sora',sans-serif", fontSize:13, color:"#475569", lineHeight:1.6, display:"flex", alignItems:"flex-start", gap:8 }}>
                        <span style={{ color:section.color, fontWeight:800, fontSize:12, flexShrink:0, marginTop:2 }}>✓</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3>Key Metrics to Track</h3>
            <div className="metrics">
              {[
                { icon:"📊", t:"Negative Review Rate by Category",     d:"Percentage of 1–2 star reviews mentioning each issue cluster (target: below 8% per cluster)" },
                { icon:"📈", t:"Complaint Cluster Trend",               d:"Is your top complaint category growing or shrinking month-over-month?" },
                { icon:"🎯", t:"Competitor Pain Point Coverage",        d:"What percentage of your competitors' top complaints does your listing directly address?" },
                { icon:"📝", t:"Review Vocabulary Adoption",            d:"How much of your 5-star review language appears in your listing title and bullets?" },
                { icon:"⭐", t:"Rating Trend (Weekly)",                  d:"Not the absolute number, but the direction. A product at 4.1 trending to 4.3 is healthier than one at 4.4 trending to 4.2." },
                { icon:"🚀", t:"Review Velocity per SKU",               d:"Sudden drops in review rate may indicate suppression — trigger a review request campaign immediately." },
              ].map(m => (
                <div className="metric" key={m.t}>
                  <div className="metric-icon">{m.icon}</div>
                  <div><div className="metric-t">{m.t}</div><div className="metric-d">{m.d}</div></div>
                </div>
              ))}
            </div>

            <div className="mid-cta">
              <div>
                <h3>Start Mining Reviews Like a Pro — Free</h3>
                <p>AI review intelligence for Amazon.in, Flipkart &amp; Meesho. WhatsApp alerts. Hinglish-ready. Setup in under 30 minutes.</p>
              </div>
              <button onClick={() => setLocation("/login")} style={{ flexShrink:0, background:"#16A34A", color:"white", padding:"12px 26px", borderRadius:8, fontWeight:700, fontSize:14.5, whiteSpace:"nowrap" as const, cursor:"pointer", border:"none", fontFamily:"'Sora',sans-serif" }}>Try Insydz Free →</button>
            </div>

            {/* S9 */}
            <h2 id="best-tools">Best Review Analysis Tools for Indian Sellers in 2026</h2>
            <h3>Global Tools: What They Offer and Where They Stop</h3>
            <p>Several established platforms offer review analysis as part of their broader Amazon intelligence suites — Helium 10's Review Insights, Jungle Scout's Review Automation, and dedicated sentiment platforms like Bazaarvoice and Trustpilot. For Indian sellers, an honest assessment:</p>

            <div className="tbl-wrap">
              <table className="dt">
                <thead>
                  <tr>
                    <th>Tool</th>
                    <th>Review Analysis</th>
                    <th>India Platforms</th>
                    <th>Hinglish Support</th>
                    <th>WhatsApp Alerts</th>
                    <th style={{ background:"#16A34A" }}>Price (INR/mo)</th>
                  </tr>
                </thead>
                <tbody>
                  {toolRows.map((r, i) => (
                    <tr key={i} className={r.tool==="Insydz"?"hl":""}>
                      <td style={{ fontWeight:r.tool==="Insydz"?800:600 }}>{r.tool}</td>
                      <td>{r.review}</td>
                      <td>{r.platforms}</td>
                      <td>{r.hinglish==="Yes"?<span className="bg">Yes</span>:<span className="br">No</span>}</td>
                      <td>{r.wa==="Yes"?<span className="bg">Yes</span>:<span className="br">No</span>}</td>
                      <td style={{ fontWeight:r.tool==="Insydz"?700:400, color:r.tool==="Insydz"?"#15803D":"inherit" }}>{r.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3>Insydz: Review Intelligence Built for Amazon.in and Flipkart</h3>
            <p>Insydz approaches review analysis as a connected intelligence function — not an isolated feature. Review signals feed into the same platform as competitor pricing, keyword rankings, and market trends, so sellers see the full picture in one place rather than triangulating across tools.</p>

            <div style={{ display:"flex", flexDirection:"column" as const, gap:10, margin:"16px 0 28px" }}>
              {[
                { icon:"🗣️", title:"Hindi, Hinglish, and English review processing",       body:"Reviews are understood in the language they were written, not force-translated into English before analysis." },
                { icon:"🏪", title:"Issue cluster detection across all 3 platforms",       body:"Platform-specific complaint patterns are tracked separately — what buyers complain about on Flipkart often differs from Amazon.in." },
                { icon:"🔍", title:"Competitor review mining — automated",                  body:"Automated analysis of your top competitors' reviews, with gap identification and counter-positioning recommendations." },
                { icon:"📲", title:"WhatsApp alerts for critical negative reviews",        body:"Your own 1-star and 2-star reviews are flagged within 60 minutes — not buried in an email digest opened three days later." },
                { icon:"✍️", title:"Listing copy recommendations from review data",        body:"Specific bullet point rewrites based on positive review language and competitor complaint counter-messaging." },
                { icon:"🎉", title:"Festive trend tracking",                                body:"Review sentiment analysis contextualised for Indian seasonal patterns: post-Diwali product reviews, Big Billion Days delivery feedback, Republic Day Sale return rates." },
              ].map(f => (
                <div key={f.title} style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:10, padding:"14px 18px", display:"flex", gap:12 }}>
                  <span style={{ fontSize:20, flexShrink:0, marginTop:2 }}>{f.icon}</span>
                  <div>
                    <strong style={{ display:"block", fontSize:14, color:"#0D1B2A", marginBottom:3, fontFamily:"'Sora',sans-serif" }}>{f.title}</strong>
                    <p style={{ margin:0, fontSize:13.5, color:"#374151", lineHeight:1.6, fontFamily:"'Sora',sans-serif" }}>{f.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* IMG 6 — Insydz review dashboard */}
            {/* <ArticleImg
              src="/twenty two.png"
              alt="Insydz review intelligence dashboard — competitor mining, sentiment clusters, WhatsApp alerts"
              caption="Insydz review intelligence — connected to pricing, rank tracking, and competitor data in one unified India-first platform"
            /> */}

            <div className="box box-pink">
              <div className="box-label">📌 No Aggressive Pitch Here</div>
              <p>A review intelligence tool is only valuable if it processes the language your buyers actually write in and covers the platforms they actually buy from. For Indian sellers, that test eliminates most global options immediately.</p>
            </div>

            {/* S10 — FAQ */}
            <h2 id="faq">Frequently Asked Questions</h2>
            <div style={{ marginTop:20 }}>
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item${openFaq===i?" open":""}`}>
                  <div className="faq-q" onClick={() => setOpenFaq(openFaq===i?null:i)}>
                    {faq.q}
                    <span className={`faq-icon${openFaq===i?" open":""}`}>+</span>
                  </div>
                  {openFaq===i && <div className="faq-a"><p>{faq.a}</p></div>}
                </div>
              ))}
            </div>

            {/* Related */}
            <div style={{ marginTop:56, paddingTop:36, borderTop:"2px solid #E2E8F0" }}>
              <h2 style={{ fontSize:20, fontWeight:800, color:"#0D1B2A", margin:"0 0 22px", border:"none", padding:0, fontFamily:"'Sora',sans-serif" }} className="dark:text-white">Related Guides</h2>
              <div className="related-grid">
                {[
                  { t:"Best Competitor Price Tracking Tools for Indian Sellers: The 2026 Guide", tag:"Price Tracking",  bg:"linear-gradient(135deg,#F97316,#EA580C)", em:"📊", r:"/features/competitor-price-tracking-feature" },
                  { t:"Insydz vs Helium 10: Which is the Right Tool for Indian Sellers?",        tag:"Compare",         bg:"linear-gradient(135deg,#4F46E5,#7C3AED)", em:"⚔️", r:"/compare/insydzvshelium" },
                  { t:"Amazon SEO Tool India: The Complete 2026 Guide for Indian Sellers",       tag:"SEO Guide",       bg:"linear-gradient(135deg,#0D9488,#0891B2)", em:"🔍", r:"/use-cases/improve-seo" },
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

      {/* FINAL CTA */}
      <div className="fc-block">
        <div className="fc-inner">
          <h2>Your Reviews Are Already Telling You What to Fix. You Just Haven't Listened at Scale.</h2>
          <p>Every week you spend without review intelligence is a week your competitors are learning from your buyers — and theirs. Insydz processes reviews across Amazon.in, Flipkart, and Meesho in Hindi, Hinglish, and English — and delivers specific, actionable insights via WhatsApp.</p>
          <div className="fc-points">
            <div className="fc-pt">Forever free plan</div>
            <div className="fc-pt">No credit card</div>
            <div className="fc-pt">Hindi + Hinglish + English</div>
            <div className="fc-pt">WhatsApp alerts in 60 min</div>
          </div>
          <button className="fc-btn" onClick={() => setLocation("/login")}>
            → Start Free at insydz.com — See Your Review Intelligence Dashboard in Minutes
          </button>
          <p className="fc-sub">Forever free plan · No credit card · No English-only analysis</p>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background:"#0D1B2A", padding:"56px 24px 28px" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:40, marginBottom:44 }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:0 }}>
                <img src="/logo.png" alt="Insydz Logo" style={{ width:34, height:34, borderRadius:8, objectFit:"contain" }} />
                <span style={{ fontFamily:"'Sora',sans-serif", fontWeight:800, fontSize:19, color:"white", letterSpacing:"-.4px" }}>insydz</span>
              </div>
              <p style={{ fontSize:13, color:"#475569", lineHeight:1.7, marginTop:12, maxWidth:260, fontFamily:"'Sora',sans-serif" }}>India's first AI-powered ecommerce analytics platform for Amazon, Flipkart, and Meesho sellers.</p>
              <div style={{ display:"flex", gap:12, marginTop:16 }}>
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
              { h:"Features",       l:[["Review Analytics","/features/review-analytics-feature"],["Competitor Price Tracking","/features/competitor-price-tracking-feature"],["WhatsApp Alerts","/features/whatsapp-alerts-feature"],["AI Recommendations","/features/ai-recommendations-feature"]] },
              { h:"Compare & More", l:[["Insydz vs Helium 10","/compare/insydzvshelium"],["Insydz vs Jungle Scout","/compare/insydzvsjunglescout"],["Pricing Plans","/pricing"],["Blog","/resources/expert-blog"]] },
            ].map(col => (
              <div key={col.h}>
                <h5 style={{ color:"white", fontSize:12, fontWeight:700, textTransform:"uppercase" as const, letterSpacing:.8, marginBottom:14, fontFamily:"'Sora',sans-serif" }}>{col.h}</h5>
                <ul style={{ listStyle:"none", padding:0 }}>
                  {col.l.map(([label, route]) => (
                    <li key={label} style={{ marginBottom:9 }}>
                      <button onClick={() => setLocation(route)} style={{ color:"#475569", fontSize:13, background:"none", border:"none", cursor:"pointer", fontFamily:"'Sora',sans-serif", fontWeight:500 }}>{label}</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ borderTop:"1px solid #162032", paddingTop:22, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap" as const, gap:10, fontSize:12, color:"#334155", fontFamily:"'Sora',sans-serif" }}>
            <span>© 2026 Insydz Technologies. All rights reserved.</span>
            <span>Privacy Policy · Terms of Service · Sitemap</span>
          </div>
        </div>
      </footer>
    </div>
  );
}