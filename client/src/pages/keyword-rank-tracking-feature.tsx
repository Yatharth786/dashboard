import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { 
  ArrowRight, CheckCircle2, Target, Zap, 
  Bell, TrendingUp, TrendingDown, Shield,
  BarChart3, ChevronRight, AlertCircle,
  Search, X, Check, RefreshCw, Eye, 
  Sparkles, ChevronDown, LineChart, Award,
  Filter, Hash, MapPin, Crosshair, Gauge,
  ThumbsUp, MessageCircle, DollarSign, 
  Package, Activity, List, Clock, Users
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function KeywordRankTrackingFeaturePage() {
  const [, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetStarted = () => {
    setLocation("/login");
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How often are keyword rankings updated?",
      answer: "Rankings are updated daily for all tracked keywords. Premium plans offer hourly updates for competitive keywords to catch changes immediately."
    },
    {
      question: "Can I track competitor keywords too?",
      answer: "Yes! Insydz automatically identifies high-performing keywords your competitors rank for, so you can optimize for the same opportunities."
    },
    {
      question: "Does this work for both Amazon & Flipkart?",
      answer: "Absolutely! Track keyword rankings across both Amazon India and Flipkart with marketplace-specific insights and recommendations."
    },
    {
      question: "What if my product doesn't rank yet?",
      answer: "Insydz shows you which keywords you should target based on relevance, search volume, and competition — helping you rank faster."
    },
    {
      question: "Is keyword tracking available on the free plan?",
      answer: "Yes! The free plan includes basic keyword tracking for limited keywords. Upgrade for unlimited tracking and advanced competitor analysis."
    },
    {
      question: "How does this help improve sales?",
      answer: "Higher rankings = more visibility = more sales. By tracking and optimizing for the right keywords, you increase organic traffic and conversions without ads."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-blue-200 shadow-lg"
            : "bg-white/80 backdrop-blur-md border-b border-blue-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => setLocation("/")}
            >
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="Insydz Logo" 
                  className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 object-contain"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Insydz
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Button
                onClick={() => setLocation("/")}
                variant="ghost"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                ← Back to Home
              </Button>
              <Button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Start Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 rounded-full px-4 py-2">
                <Search className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Feature Spotlight</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                Keyword & Rank Tracking —
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                  Know Where You Rank
                </span>
                <br />
                for Every Keyword
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed">
                Track rankings for target keywords across Amazon & Flipkart automatically. 
                <span className="text-blue-700 font-semibold"> See what's working, find opportunities, and optimize for maximum visibility.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all group"
                >
                  🔍 Start Tracking Rankings Free
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 font-semibold px-8 py-6 text-lg rounded-full"
                >
                  See How It Works →
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span>Daily rank updates</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span>Competitor keyword analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span>Amazon & Flipkart support</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative bg-white border-2 border-blue-200 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900">Keyword Rankings</h3>
                    <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                      <Activity className="w-3 h-3" />
                      Live Tracking
                    </span>
                  </div>

                  {/* Ranking List */}
                  <div className="space-y-3">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">wireless earbuds bluetooth</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-semibold">Rank #3</span>
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Volume: 45K/mo</span>
                        <span className="text-green-600 font-semibold">↑ 5 positions</span>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">noise cancelling headphones</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded font-semibold">Rank #12</span>
                          <Activity className="w-4 h-4 text-yellow-600" />
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Volume: 28K/mo</span>
                        <span className="text-gray-600">No change</span>
                      </div>
                    </div>

                    <div className="bg-red-50 border-2 border-red-400 rounded-lg p-3 animate-pulse">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">true wireless earbuds</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded font-semibold">Rank #28</span>
                          <TrendingDown className="w-4 h-4 text-red-600" />
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-gray-500">Volume: 52K/mo</span>
                        <span className="text-red-600 font-semibold">↓ 8 positions</span>
                      </div>
                    </div>
                  </div>

                  {/* Opportunity Alert */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-400 rounded-2xl p-4 mt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">Opportunity Found</p>
                        <p className="text-xs text-gray-600">"budget earbuds" - Low competition, 18K searches</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl px-4 py-2 shadow-xl">
                  <p className="text-white font-bold text-sm">Tracking 47</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900">
              Why Sellers Struggle
              <br />
              <span className="text-red-600">Without Rank Tracking</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <Eye className="w-8 h-8" />,
                title: "No idea where products actually rank",
                color: "from-red-500 to-orange-500"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Manually checking rankings wastes hours",
                color: "from-orange-500 to-yellow-500"
              },
              {
                icon: <TrendingDown className="w-8 h-8" />,
                title: "Miss ranking drops until sales crash",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Search className="w-8 h-8" />,
                title: "Don't know which keywords to target",
                color: "from-orange-500 to-red-500"
              }
            ].map((pain, i) => (
              <div key={i} className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
                  {pain.icon}
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{pain.title}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-400 rounded-3xl p-8 text-center shadow-lg">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <p className="text-2xl font-bold text-gray-900 mb-2">
              Products lose <span className="text-red-600">60-80% of organic traffic</span> when rankings drop
            </p>
            <p className="text-gray-700 text-lg">
              And most sellers don't notice until it's too late.
            </p>
          </div>

          {/* Visual Comparison */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manual Checking</h3>
              <p className="text-gray-700 text-sm mb-4">Hours wasted, data already outdated</p>
              <div className="space-y-2 text-left">
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Time-consuming daily checks</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">No historical data or trends</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Limited to few keywords</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Tracking</h3>
              <p className="text-gray-700 text-sm mb-4">Real-time insights, always accurate</p>
              <div className="space-y-2 text-left">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Daily automatic updates</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Historical trends & insights</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Unlimited keyword tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Explanation */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              How Keyword Rank Tracking Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Insydz automatically tracks your keyword rankings daily and alerts you to changes — 
              <span className="text-blue-700 font-semibold"> so you can optimize before rankings drop and traffic disappears.</span>
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-4 gap-8 relative">
              {[
                {
                  step: "1",
                  title: "Add target keywords",
                  detail: "Or let AI suggest high-opportunity keywords",
                  icon: <Hash className="w-12 h-12" />
                },
                {
                  step: "2",
                  title: "Insydz tracks rankings daily",
                  detail: "Across Amazon & Flipkart automatically",
                  icon: <RefreshCw className="w-12 h-12" />
                },
                {
                  step: "3",
                  title: "Monitor rank changes",
                  detail: "See what's improving or dropping",
                  icon: <BarChart3 className="w-12 h-12" />
                },
                {
                  step: "4",
                  title: "Get alerts & insights",
                  detail: "Dashboard + WhatsApp notifications",
                  icon: <Bell className="w-12 h-12" />
                }
              ].map((item, i) => (
                <div key={i} className="bg-white border-2 border-blue-300 rounded-2xl p-6 text-center relative z-10 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-black text-white">
                    {item.step}
                  </div>
                  <div className="bg-blue-100 rounded-xl p-4 mb-4 text-blue-600">
                    {item.icon}
                  </div>
                  <p className="text-gray-900 font-semibold mb-2">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
            >
              🔍 Track Your First Keyword Free
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* What This Feature Helps You Do */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What You Can Do with Keyword Tracking
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <TrendingUp />, title: "Improve organic rankings", detail: "Optimize for keywords that matter", color: "text-blue-600" },
              { icon: <Eye />, title: "Catch ranking drops early", detail: "Fix issues before sales suffer", color: "text-red-600" },
              { icon: <Sparkles />, title: "Find new keyword opportunities", detail: "AI suggests untapped keywords", color: "text-purple-600" },
              { icon: <Users />, title: "Spy on competitor keywords", detail: "See what's working for them", color: "text-orange-600" },
              { icon: <Target />, title: "Track SEO improvements", detail: "Measure listing optimization impact", color: "text-green-600" },
              { icon: <Award />, title: "Increase organic traffic", detail: "More visibility without ad spend", color: "text-cyan-600" }
            ].map((outcome, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center ${outcome.color}`}>
                    {outcome.icon}
                  </div>
                  <ThumbsUp className="w-6 h-6 text-blue-500" />
                </div>
                <p className="text-gray-900 font-semibold leading-relaxed mb-1">{outcome.title}</p>
                <p className="text-sm text-gray-600">{outcome.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Depth */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Advanced Keyword Intelligence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                feature: "Daily Rank Updates",
                benefit: "Never miss a ranking change",
                icon: <RefreshCw className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                feature: "Historical Rank Data",
                benefit: "Track trends over weeks & months",
                icon: <LineChart className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500"
              },
              {
                feature: "Competitor Keyword Analysis",
                benefit: "See what keywords they rank for",
                icon: <Users className="w-8 h-8" />,
                color: "from-red-500 to-orange-500"
              },
              {
                feature: "Search Volume Insights",
                benefit: "Prioritize high-traffic keywords",
                icon: <BarChart3 className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                feature: "Keyword Opportunity Finder",
                benefit: "AI suggests low-competition keywords",
                icon: <Sparkles className="w-8 h-8" />,
                color: "from-orange-500 to-red-500"
              },
              {
                feature: "Rank Change Alerts",
                benefit: "Get notified of big movements",
                icon: <Bell className="w-8 h-8" />,
                color: "from-indigo-500 to-purple-500"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-xl transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.feature}</h3>
                <p className="text-gray-600 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  {item.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Manual Tracking vs Insydz
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Aspect</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">Manual Tracking</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-blue-700 bg-blue-50">With Insydz</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: "Update Frequency", manual: "When you remember", insydz: "Automatic daily tracking" },
                  { aspect: "Keywords Tracked", manual: "5-10 max", insydz: "Unlimited keywords" },
                  { aspect: "Historical Data", manual: "None or manual logs", insydz: "Full history & trends" },
                  { aspect: "Competitor Insights", manual: "Impossible to track", insydz: "Competitor keyword analysis" },
                  { aspect: "Time Investment", manual: "2-3 hours weekly", insydz: "5 minutes monthly" }
                ].map((row, i) => (
                  <tr key={i} className="border-t border-gray-200">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.aspect}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-red-500" />
                        <span className="text-sm text-gray-600">{row.manual}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center bg-blue-50">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-gray-900 font-medium">{row.insydz}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl"
            >
              🔍 Switch to Automated Tracking
            </Button>
          </div>
        </div>
      </section>

      {/* PLG Entry Point */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Start Free. Track Rankings Today.
            </h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-black text-blue-600">₹0</span>
                <span className="text-2xl text-gray-600">/ Forever</span>
              </div>
              <p className="text-lg text-gray-700">Free Plan Includes:</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Track limited keywords",
                "Daily rank updates",
                "Amazon & Flipkart support",
                "Basic keyword suggestions"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-900 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 mb-6">
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-bold text-blue-600">Upgrade Teaser:</span> Unlock unlimited keywords, hourly updates, and competitor analysis on paid plans.
              </p>
            </div>

            <div className="text-center">
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl"
              >
                🔍 Start Tracking Keywords Free
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Feature Is For */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Is Keyword Tracking Right for You?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Perfect For</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Sellers optimizing listings for organic traffic",
                  "Brands tracking SEO performance",
                  "Competitive categories where rank matters",
                  "Agencies managing multiple accounts",
                  "Sellers wanting to reduce ad dependency"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-50 border-2 border-orange-300 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Less Useful For</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "100% PPC-dependent sellers",
                  "Products with no search demand",
                  "Sellers who don't optimize listings"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Keyword Tracking – FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 transition-all">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Linking */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Related Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Product Research", icon: <Target />, color: "from-indigo-500 to-purple-500" },
              { title: "Review Analytics", icon: <MessageCircle />, color: "from-purple-500 to-pink-500" },
              { title: "Price Optimization", icon: <DollarSign />, color: "from-green-500 to-emerald-500" },
              { title: "Competitor Tracking", icon: <Users />, color: "from-orange-500 to-red-500" },
              { title: "AI Recommendations", icon: <Sparkles />, color: "from-cyan-500 to-blue-500" },
              { title: "WhatsApp Alerts", icon: <Bell />, color: "from-emerald-500 to-green-500" }
            ].map((feature, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer group">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <ArrowRight className="w-5 h-5 text-blue-600 mt-2 group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
            Stop Guessing Rankings.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Track Every Keyword Automatically.
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
            >
              🔍 Start Keyword Tracking Free
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => setLocation("/")}
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 font-semibold px-12 py-6 text-lg rounded-full"
            >
              Explore All Features →
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-blue-300 p-4 shadow-2xl z-40">
        <Button
          onClick={handleGetStarted}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 rounded-full shadow-xl"
        >
          🔍 Start Keyword Tracking Free
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">© 2025 Insydz. All rights reserved. Built for Indian sellers 🇮🇳</p>
        </div>
      </footer>
    </div>
  );
}