import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { 
  ArrowRight, CheckCircle2, Target, Zap, 
  Bell, TrendingUp, TrendingDown, Shield,
  BarChart3, ChevronRight, AlertCircle,
  Search, X, Check, RefreshCw, Eye, 
  Sparkles, ChevronDown, LineChart, Award,
  Lightbulb, Package, DollarSign, Users,
  Percent, ShoppingCart, Filter, Layers,
  ThumbsUp, MessageCircle, Star, TrendingUp as Trending,
  Clock, Activity, Crosshair, Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductResearchFeaturePage() {
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
      question: "How does AI product research work?",
      answer: "Insydz AI analyzes millions of products across Amazon & Flipkart, evaluating demand, competition, pricing trends, and profit margins to surface high-potential opportunities you can capitalize on."
    },
    {
      question: "Will I find products that aren't already saturated?",
      answer: "Yes! Our AI identifies emerging trends and underserved niches before they become oversaturated. You get early access to opportunities competitors haven't discovered yet."
    },
    {
      question: "Can I filter by specific criteria?",
      answer: "Absolutely. Filter by category, price range, competition level, profit margin, search volume, and more. Find products that match your exact business goals."
    },
    {
      question: "Does this work for private label sellers?",
      answer: "Yes! Product research is perfect for private label sellers looking for their next winning product. See what's selling, what margins look like, and where white space exists."
    },
    {
      question: "Is product research available on the free plan?",
      answer: "Yes! The free plan includes limited product research queries. Upgrade for unlimited searches, advanced filters, and AI-powered opportunity scoring."
    },
    {
      question: "How is this different from manual research?",
      answer: "Manual research takes weeks and misses hidden gems. Our AI analyzes thousands of data points in seconds, revealing opportunities you'd never find manually."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-indigo-200 shadow-lg"
            : "bg-white/80 backdrop-blur-md border-b border-indigo-100"
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
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
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
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-indigo-500/50 transition-all"
              >
                Start Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-indigo-100 border border-indigo-300 rounded-full px-4 py-2">
                <Target className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-700">Feature Spotlight</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                AI Product Research —
                <br />
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                  Find Winners
                </span>
                <br />
                Before Competitors Do
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed">
                AI discovers high-demand, low-competition products with real profit potential. 
                <span className="text-indigo-700 font-semibold"> Stop guessing. Start selling products that actually make money.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-indigo-500/50 transition-all group"
                >
                  💡 Discover Products Free
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  variant="outline"
                  className="border-2 border-indigo-600 text-indigo-700 hover:bg-indigo-50 font-semibold px-8 py-6 text-lg rounded-full"
                >
                  See How It Works →
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  <span>AI opportunity scoring</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  <span>Profit margin analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  <span>Trend detection</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative bg-white border-2 border-indigo-200 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900">Product Opportunities</h3>
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      AI Analyzed
                    </span>
                  </div>

                  {/* Product Opportunities */}
                  <div className="space-y-3">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 rounded-lg p-4 animate-pulse">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <p className="font-bold text-gray-900 text-sm mb-1">Wireless Phone Chargers</p>
                          <p className="text-xs text-gray-600">Electronics › Mobile Accessories</p>
                        </div>
                        <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Score: 94
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="bg-white rounded px-2 py-1.5">
                          <p className="text-gray-500">Demand</p>
                          <p className="font-bold text-green-600">High</p>
                        </div>
                        <div className="bg-white rounded px-2 py-1.5">
                          <p className="text-gray-500">Competition</p>
                          <p className="font-bold text-green-600">Low</p>
                        </div>
                        <div className="bg-white rounded px-2 py-1.5">
                          <p className="text-gray-500">Margin</p>
                          <p className="font-bold text-green-600">45%</p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-1.5">
                        <TrendingUp className="w-3 h-3 text-green-600" />
                        <p className="text-xs text-green-600 font-semibold">Growing trend - Act fast!</p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <p className="font-bold text-gray-900 text-sm mb-1">Eco-Friendly Water Bottles</p>
                          <p className="text-xs text-gray-600">Home & Kitchen › Drinkware</p>
                        </div>
                        <div className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Score: 78
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="bg-white rounded px-2 py-1.5">
                          <p className="text-gray-500">Demand</p>
                          <p className="font-bold text-yellow-600">Medium</p>
                        </div>
                        <div className="bg-white rounded px-2 py-1.5">
                          <p className="text-gray-500">Competition</p>
                          <p className="font-bold text-green-600">Low</p>
                        </div>
                        <div className="bg-white rounded px-2 py-1.5">
                          <p className="text-gray-500">Margin</p>
                          <p className="font-bold text-yellow-600">38%</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 opacity-75">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <p className="font-bold text-gray-900 text-sm mb-1">LED Desk Lamps</p>
                          <p className="text-xs text-gray-600">Home Improvement › Lighting</p>
                        </div>
                        <div className="bg-gray-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Score: 62
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="bg-white rounded px-2 py-1.5">
                          <p className="text-gray-500">Demand</p>
                          <p className="font-bold text-yellow-600">Medium</p>
                        </div>
                        <div className="bg-white rounded px-2 py-1.5">
                          <p className="text-gray-500">Competition</p>
                          <p className="font-bold text-orange-600">Medium</p>
                        </div>
                        <div className="bg-white rounded px-2 py-1.5">
                          <p className="text-gray-500">Margin</p>
                          <p className="font-bold text-gray-600">32%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl px-4 py-2 shadow-xl">
                  <p className="text-white font-bold text-sm flex items-center gap-1">
                    <Lightbulb className="w-4 h-4" />
                    1,247 Found
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
              Why Most Product Launches
              <br />
              <span className="text-red-600">Fail Within 6 Months</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <Search className="w-8 h-8" />,
                title: "Picking products based on gut feeling",
                color: "from-red-500 to-orange-500"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Entering oversaturated markets",
                color: "from-orange-500 to-yellow-500"
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Low margins kill profitability",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Weeks wasted on manual research",
                color: "from-orange-500 to-red-500"
              }
            ].map((pain, i) => (
              <div key={i} className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:border-indigo-400 hover:shadow-lg transition-all group">
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
              <span className="text-red-600">70% of new products fail</span> in their first year
            </p>
            <p className="text-gray-700 text-lg">
              Because sellers pick products without data.
            </p>
          </div>

          {/* Visual Comparison */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manual Research</h3>
              <p className="text-gray-700 text-sm mb-4">Weeks of guessing, high failure rate</p>
              <div className="space-y-2 text-left">
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Limited to surface-level data</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Miss emerging opportunities</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Can't analyze at scale</span>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 border-2 border-indigo-300 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Research</h3>
              <p className="text-gray-700 text-sm mb-4">Minutes to find winners, data-backed success</p>
              <div className="space-y-2 text-left">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-indigo-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Deep market analysis in seconds</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-indigo-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Spot trends before competitors</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-indigo-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Analyze thousands of products</span>
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
              How AI Product Research Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Insydz AI scans millions of products to find opportunities with high demand and low competition — 
              <span className="text-indigo-700 font-semibold"> so you launch products that actually sell.</span>
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-4 gap-8 relative">
              {[
                {
                  step: "1",
                  title: "Set your criteria",
                  detail: "Category, budget, margin goals",
                  icon: <Filter className="w-12 h-12" />
                },
                {
                  step: "2",
                  title: "AI analyzes market data",
                  detail: "Demand, competition, trends, pricing",
                  icon: <Brain className="w-12 h-12" />
                },
                {
                  step: "3",
                  title: "Opportunities ranked",
                  detail: "Scored by profit potential",
                  icon: <Target className="w-12 h-12" />
                },
                {
                  step: "4",
                  title: "Launch with confidence",
                  detail: "Data-backed product decisions",
                  icon: <Award className="w-12 h-12" />
                }
              ].map((item, i) => (
                <div key={i} className="bg-white border-2 border-indigo-300 rounded-2xl p-6 text-center relative z-10 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-black text-white">
                    {item.step}
                  </div>
                  <div className="bg-indigo-100 rounded-xl p-4 mb-4 text-indigo-600">
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
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
            >
              💡 Find Your Next Product Free
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
              What You Can Do with Product Research
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Lightbulb />, title: "Discover untapped niches", detail: "Find markets competitors missed", color: "text-indigo-600" },
              { icon: <TrendingUp />, title: "Spot trends early", detail: "Launch before market saturation", color: "text-green-600" },
              { icon: <DollarSign />, title: "Maximize profit margins", detail: "Focus on high-margin opportunities", color: "text-emerald-600" },
              { icon: <Shield />, title: "Reduce launch risk", detail: "Data-backed product decisions", color: "text-blue-600" },
              { icon: <Target />, title: "Beat competition", detail: "Enter markets with advantage", color: "text-purple-600" },
              { icon: <Award />, title: "Scale faster", detail: "Find multiple winners quickly", color: "text-orange-600" }
            ].map((outcome, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center ${outcome.color}`}>
                    {outcome.icon}
                  </div>
                  <ThumbsUp className="w-6 h-6 text-indigo-500" />
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
              Powerful Product Intelligence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                feature: "AI Opportunity Scoring",
                benefit: "Every product ranked by potential",
                icon: <Star className="w-8 h-8" />,
                color: "from-indigo-500 to-purple-500"
              },
              {
                feature: "Demand Analysis",
                benefit: "See actual search volume & trends",
                icon: <BarChart3 className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500"
              },
              {
                feature: "Competition Assessment",
                benefit: "Identify low-competition niches",
                icon: <Users className="w-8 h-8" />,
                color: "from-red-500 to-orange-500"
              },
              {
                feature: "Profit Margin Calculator",
                benefit: "Know profitability before launch",
                icon: <DollarSign className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                feature: "Trend Detection",
                benefit: "Catch rising products early",
                icon: <TrendingUp className="w-8 h-8" />,
                color: "from-orange-500 to-red-500"
              },
              {
                feature: "Category Insights",
                benefit: "Best-performing categories revealed",
                icon: <Layers className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-indigo-400 hover:shadow-xl transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.feature}</h3>
                <p className="text-gray-600 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-indigo-600" />
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
              Manual Research vs AI Research
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Aspect</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">Manual Research</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-indigo-700 bg-indigo-50">AI Research</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: "Time Required", manual: "2-4 weeks", insydz: "5 minutes" },
                  { aspect: "Products Analyzed", manual: "20-50 products", insydz: "Thousands of products" },
                  { aspect: "Data Accuracy", manual: "Often outdated", insydz: "Real-time market data" },
                  { aspect: "Trend Detection", manual: "Too late", insydz: "Spot trends as they emerge" },
                  { aspect: "Success Rate", manual: "30% or less", insydz: "70%+ with data validation" }
                ].map((row, i) => (
                  <tr key={i} className="border-t border-gray-200">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.aspect}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-red-500" />
                        <span className="text-sm text-gray-600">{row.manual}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center bg-indigo-50">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-indigo-600" />
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
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl"
            >
              💡 Switch to AI Research
            </Button>
          </div>
        </div>
      </section>

      {/* PLG Entry Point */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Start Free. Find Winning Products.
            </h2>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-300 rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-black text-indigo-600">₹0</span>
                <span className="text-2xl text-gray-600">/ Forever</span>
              </div>
              <p className="text-lg text-gray-700">Free Plan Includes:</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Limited product research queries",
                "AI opportunity scoring",
                "Basic demand & competition data",
                "Amazon & Flipkart coverage"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-4">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                  <span className="text-gray-900 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 mb-6">
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-bold text-indigo-600">Upgrade Teaser:</span> Unlock unlimited searches, advanced filters, and trend alerts on paid plans.
              </p>
            </div>

            <div className="text-center">
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl"
              >
                💡 Start Product Research Free
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
              Is Product Research Right for You?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-indigo-50 border-2 border-indigo-300 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Perfect For</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Private label sellers finding new products",
                  "New sellers entering e-commerce",
                  "Brands expanding product lines",
                  "Agencies researching for clients",
                  "Sellers tired of failed launches"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
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
                  "Sellers with fixed product catalogs",
                  "Single-product businesses",
                  "Those not looking to expand"
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
              Product Research – FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-indigo-400 transition-all">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-indigo-600 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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
              { title: "Keyword Tracking", icon: <Search />, color: "from-blue-500 to-cyan-500" },
              { title: "Price Optimization", icon: <DollarSign />, color: "from-green-500 to-emerald-500" },
              { title: "Competitor Analysis", icon: <Users />, color: "from-orange-500 to-red-500" },
              { title: "Review Analytics", icon: <MessageCircle />, color: "from-purple-500 to-pink-500" },
              { title: "AI Recommendations", icon: <Sparkles />, color: "from-cyan-500 to-blue-500" },
              { title: "WhatsApp Alerts", icon: <Bell />, color: "from-emerald-500 to-green-500" }
            ].map((feature, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 hover:shadow-lg transition-all cursor-pointer group">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{feature.title}</h3>
                <ArrowRight className="w-5 h-5 text-indigo-600 mt-2 group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
            Stop Guessing Products.
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Find Winners with AI.
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
            >
              💡 Start Product Research Free
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => setLocation("/")}
              size="lg"
              variant="outline"
              className="border-2 border-indigo-600 text-indigo-700 hover:bg-indigo-50 font-semibold px-12 py-6 text-lg rounded-full"
            >
              Explore All Features →
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-indigo-300 p-4 shadow-2xl z-40">
        <Button
          onClick={handleGetStarted}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 rounded-full shadow-xl"
        >
          💡 Start Product Research Free
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