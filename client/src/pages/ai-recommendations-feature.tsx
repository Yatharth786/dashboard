import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { 
  ArrowRight, CheckCircle2, Target, Zap, 
  Bell, TrendingUp, TrendingDown, Shield,
  BarChart3, ChevronRight, AlertCircle,
  Search, X, Check, RefreshCw, Eye, 
  Sparkles, ChevronDown, LineChart, Award,
  Lightbulb, Package, DollarSign, Users,
  Brain, ShoppingCart, Filter, Layers,
  ThumbsUp, MessageCircle, Star, Activity,
  Clock, Crosshair, List, Maximize2, Gauge
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AIRecommendationsFeaturePage() {
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
      question: "How does AI generate recommendations?",
      answer: "Insydz AI analyzes your product data, competitor behavior, market trends, and sales patterns to provide actionable recommendations tailored to your specific products and goals."
    },
    {
      question: "Are recommendations updated automatically?",
      answer: "Yes! AI continuously monitors your products and market conditions, updating recommendations as situations change. You'll get fresh insights daily."
    },
    {
      question: "Can I implement recommendations with one click?",
      answer: "Many recommendations can be applied directly from the dashboard. For others, we provide step-by-step guidance to make implementation easy."
    },
    {
      question: "What types of recommendations will I get?",
      answer: "You'll get recommendations for pricing, keywords to add/remove, inventory management, listing optimization, competitor response, and more."
    },
    {
      question: "Is this available on the free plan?",
      answer: "Yes! The free plan includes basic AI recommendations. Upgrade for advanced recommendations, priority actions, and automated implementation."
    },
    {
      question: "How accurate are the AI recommendations?",
      answer: "Our AI is trained on millions of successful seller actions. Recommendations are data-backed and proven to increase sales and profit when implemented."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-pink-200 shadow-lg"
            : "bg-white/80 backdrop-blur-md border-b border-pink-100"
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
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
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
                className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-pink-500/50 transition-all"
              >
                Start Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-rose-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-pink-100 border border-pink-300 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-pink-600" />
                <span className="text-sm font-medium text-pink-700">Feature Spotlight</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                AI Recommendations —
                <br />
                <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 bg-clip-text text-transparent">
                  Get Smart Actions,
                </span>
                <br />
                Not Just Data
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed">
                AI analyzes your products and tells you exactly what to do next. 
                <span className="text-pink-700 font-semibold"> Pricing, keywords, inventory, listing optimization — all personalized to your business.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all group"
                >
                  ✨ Get AI Recommendations Free
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  variant="outline"
                  className="border-2 border-pink-600 text-pink-700 hover:bg-pink-50 font-semibold px-8 py-6 text-lg rounded-full"
                >
                  See How It Works →
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-pink-600" />
                  <span>Actionable insights daily</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-pink-600" />
                  <span>Personalized to your products</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-pink-600" />
                  <span>One-click implementation</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative bg-white border-2 border-pink-200 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900">AI Recommendations</h3>
                    <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                      <Brain className="w-3 h-3" />
                      AI Active
                    </span>
                  </div>

                  {/* Recommendation Cards */}
                  <div className="space-y-3">
                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-400 rounded-lg p-4 animate-pulse">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                            <Zap className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">Price Adjustment Needed</p>
                            <p className="text-xs text-gray-600">Wireless Earbuds Pro</p>
                          </div>
                        </div>
                        <span className="text-xs bg-pink-500 text-white px-2 py-1 rounded-full font-bold">High Priority</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Lower price to ₹1,349 to win Buy Box. Expected impact: +42% sales
                      </p>
                      <Button className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white text-sm py-2 rounded-lg">
                        Apply Price Change →
                      </Button>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                            <Search className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">Add Missing Keywords</p>
                            <p className="text-xs text-gray-600">Gaming Mouse X1</p>
                          </div>
                        </div>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">Medium</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        Add "rgb gaming mouse" to backend keywords
                      </p>
                      <div className="text-xs text-blue-600 font-semibold">+15K monthly searches</div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                            <Package className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">Restock Alert</p>
                            <p className="text-xs text-gray-600">Phone Case Bundle</p>
                          </div>
                        </div>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">Low Stock</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        Order 500 units by Feb 10 to avoid stockout
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-600">12</div>
                      <div className="text-xs text-gray-600">Active Recommendations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">8</div>
                      <div className="text-xs text-gray-600">Implemented Today</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl px-4 py-2 shadow-xl">
                  <p className="text-white font-bold text-sm flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    AI Powered
                  </p>
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
              Why Sellers Drown
              <br />
              <span className="text-red-600">in Data Without Action</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Too much data, no clear actions",
                color: "from-red-500 to-orange-500"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Hours analyzing what to do next",
                color: "from-orange-500 to-yellow-500"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Missing opportunities hidden in data",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "No idea what to prioritize",
                color: "from-orange-500 to-red-500"
              }
            ].map((pain, i) => (
              <div key={i} className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:border-pink-400 hover:shadow-lg transition-all group">
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
              Sellers waste <span className="text-red-600">10+ hours weekly</span> analyzing data
            </p>
            <p className="text-gray-700 text-lg">
              Instead of taking action that grows their business.
            </p>
          </div>

          {/* Visual Comparison */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Without AI Recommendations</h3>
              <p className="text-gray-700 text-sm mb-4">Analysis paralysis, missed opportunities</p>
              <div className="space-y-2 text-left">
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Hours spent analyzing dashboards</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Unclear what action to take</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Opportunities slip away</span>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 border-2 border-pink-300 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">With AI Recommendations</h3>
              <p className="text-gray-700 text-sm mb-4">Clear actions, fast execution, results</p>
              <div className="space-y-2 text-left">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-pink-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">AI tells you exactly what to do</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-pink-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Prioritized by impact & urgency</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-pink-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">One-click implementation</span>
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
              How AI Recommendations Work
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Insydz AI continuously analyzes your business and surfaces actionable recommendations — 
              <span className="text-pink-700 font-semibold"> ranked by priority, with clear next steps.</span>
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-4 gap-8 relative">
              {[
                {
                  step: "1",
                  title: "AI monitors your business",
                  detail: "Products, competitors, market trends",
                  icon: <Eye className="w-12 h-12" />
                },
                {
                  step: "2",
                  title: "Identifies opportunities",
                  detail: "Price changes, keywords, inventory",
                  icon: <Brain className="w-12 h-12" />
                },
                {
                  step: "3",
                  title: "Generates recommendations",
                  detail: "Ranked by impact & urgency",
                  icon: <List className="w-12 h-12" />
                },
                {
                  step: "4",
                  title: "You implement fast",
                  detail: "One-click or simple steps",
                  icon: <Zap className="w-12 h-12" />
                }
              ].map((item, i) => (
                <div key={i} className="bg-white border-2 border-pink-300 rounded-2xl p-6 text-center relative z-10 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-black text-white">
                    {item.step}
                  </div>
                  <div className="bg-pink-100 rounded-xl p-4 mb-4 text-pink-600">
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
              className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
            >
              ✨ Get Your First Recommendations Free
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
              What You Can Do with AI Recommendations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Zap />, title: "Take action in minutes, not hours", detail: "AI does the analysis for you", color: "text-pink-600" },
              { icon: <Target />, title: "Focus on what matters most", detail: "Prioritized by impact", color: "text-purple-600" },
              { icon: <TrendingUp />, title: "Boost sales automatically", detail: "AI finds hidden opportunities", color: "text-green-600" },
              { icon: <Shield />, title: "Prevent costly mistakes", detail: "Alerts before problems happen", color: "text-blue-600" },
              { icon: <Lightbulb />, title: "Learn from AI insights", detail: "Understand what works & why", color: "text-orange-600" },
              { icon: <Maximize2 />, title: "Scale without complexity", detail: "AI handles analysis at scale", color: "text-cyan-600" }
            ].map((outcome, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-pink-400 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center ${outcome.color}`}>
                    {outcome.icon}
                  </div>
                  <ThumbsUp className="w-6 h-6 text-pink-500" />
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
              Smart AI-Powered Insights
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                feature: "Price Recommendations",
                benefit: "Win Buy Box without losing margin",
                icon: <DollarSign className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                feature: "Keyword Optimization",
                benefit: "Add high-impact keywords",
                icon: <Search className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                feature: "Inventory Alerts",
                benefit: "Avoid stockouts & overstocking",
                icon: <Package className="w-8 h-8" />,
                color: "from-orange-500 to-red-500"
              },
              {
                feature: "Listing Improvements",
                benefit: "Boost conversion with better copy",
                icon: <Star className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500"
              },
              {
                feature: "Competitor Responses",
                benefit: "React to competitor moves",
                icon: <Users className="w-8 h-8" />,
                color: "from-red-500 to-orange-500"
              },
              {
                feature: "Priority Actions",
                benefit: "Know what to do first",
                icon: <Gauge className="w-8 h-8" />,
                color: "from-indigo-500 to-purple-500"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-pink-400 hover:shadow-xl transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.feature}</h3>
                <p className="text-gray-600 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-pink-600" />
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
              Manual Analysis vs AI Recommendations
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Aspect</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">Manual Analysis</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-pink-700 bg-pink-50">AI Recommendations</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: "Time to Insights", manual: "Hours daily", insydz: "Instant & automatic" },
                  { aspect: "Action Clarity", manual: "Unclear what to do", insydz: "Exact next steps provided" },
                  { aspect: "Prioritization", manual: "Guessing importance", insydz: "Ranked by impact" },
                  { aspect: "Opportunity Detection", manual: "Easy to miss", insydz: "AI finds hidden gems" },
                  { aspect: "Implementation", manual: "Complex & manual", insydz: "One-click or simple steps" }
                ].map((row, i) => (
                  <tr key={i} className="border-t border-gray-200">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.aspect}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-red-500" />
                        <span className="text-sm text-gray-600">{row.manual}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center bg-pink-50">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-pink-600" />
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
              className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl"
            >
              ✨ Get AI-Powered Insights
            </Button>
          </div>
        </div>
      </section>

      {/* PLG Entry Point */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Start Free. Get Smarter Recommendations.
            </h2>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-300 rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-black text-pink-600">₹0</span>
                <span className="text-2xl text-gray-600">/ Forever</span>
              </div>
              <p className="text-lg text-gray-700">Free Plan Includes:</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Basic AI recommendations",
                "Daily priority actions",
                "Simple implementation guides",
                "Amazon & Flipkart support"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-4">
                  <CheckCircle2 className="w-6 h-6 text-pink-600 flex-shrink-0" />
                  <span className="text-gray-900 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 mb-6">
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-bold text-pink-600">Upgrade Teaser:</span> Unlock advanced recommendations, one-click implementation, and unlimited insights on paid plans.
              </p>
            </div>

            <div className="text-center">
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl"
              >
                ✨ Start Getting AI Recommendations Free
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
              Is AI Recommendations Right for You?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-pink-50 border-2 border-pink-300 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Perfect For</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Busy sellers wanting clear next steps",
                  "Those overwhelmed by data & dashboards",
                  "Sellers wanting to act faster than competitors",
                  "Agencies managing multiple accounts",
                  "Anyone tired of analysis paralysis"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
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
                  "Sellers who prefer manual control over everything",
                  "Those who don't want AI assistance",
                  "Completely passive sellers"
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
              AI Recommendations – FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-pink-400 transition-all">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-pink-600 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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
              { title: "Price Optimization", icon: <DollarSign />, color: "from-green-500 to-emerald-500" },
              { title: "Keyword Tracking", icon: <Search />, color: "from-blue-500 to-cyan-500" },
              { title: "Product Research", icon: <Target />, color: "from-indigo-500 to-purple-500" },
              { title: "Competitor Tracking", icon: <Users />, color: "from-orange-500 to-red-500" },
              { title: "Review Analytics", icon: <MessageCircle />, color: "from-purple-500 to-pink-500" },
              { title: "WhatsApp Alerts", icon: <Bell />, color: "from-emerald-500 to-green-500" }
            ].map((feature, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-pink-400 hover:shadow-lg transition-all cursor-pointer group">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors">{feature.title}</h3>
                <ArrowRight className="w-5 h-5 text-pink-600 mt-2 group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
            Stop Analyzing Data.
            <br />
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Start Taking Smart Actions.
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
            >
              ✨ Get AI Recommendations Free
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => setLocation("/")}
              size="lg"
              variant="outline"
              className="border-2 border-pink-600 text-pink-700 hover:bg-pink-50 font-semibold px-12 py-6 text-lg rounded-full"
            >
              Explore All Features →
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-pink-300 p-4 shadow-2xl z-40">
        <Button
          onClick={handleGetStarted}
          className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-bold py-4 rounded-full shadow-xl"
        >
          ✨ Get AI Recommendations Free
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