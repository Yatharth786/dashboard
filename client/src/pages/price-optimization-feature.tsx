import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { 
  ArrowRight, CheckCircle2, Target, Zap, 
  Bell, TrendingUp, TrendingDown, Shield,
  BarChart3, ChevronRight, AlertCircle,
  DollarSign, X, Check, RefreshCw, Eye, 
  Sparkles, ChevronDown, LineChart, Percent, 
  ShoppingCart, Award, Calculator, Maximize2, 
  Brain, ThumbsUp, MessageCircle, Search, 
  Package, Clock, Users
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PriceOptimizationFeaturePage() {
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
      question: "How does AI price optimization work?",
      answer: "Insydz AI analyzes competitor prices, Buy Box dynamics, demand patterns, and your margin targets to recommend optimal prices that maximize both sales volume and profit."
    },
    {
      question: "Will I lose the Buy Box if prices are optimized?",
      answer: "No! Our AI specifically factors in Buy Box requirements and recommends prices that keep you competitive while protecting margins. You win more, not less."
    },
    {
      question: "Can I set minimum profit margins?",
      answer: "Absolutely. Set your floor prices and margin targets, and our AI will never recommend prices below your thresholds."
    },
    {
      question: "Does this work for seasonal products?",
      answer: "Yes! The AI detects seasonal demand patterns and adjusts pricing strategies accordingly to maximize revenue during peak seasons."
    },
    {
      question: "Is price optimization available on the free plan?",
      answer: "Yes! The free plan includes basic price optimization for limited products. Upgrade for AI-powered automation and unlimited products."
    },
    {
      question: "How is this different from competitor price tracking?",
      answer: "Price tracking shows you what competitors are doing. Price optimization tells you what YOU should do based on AI analysis of market dynamics, demand, and your goals."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-green-200 shadow-lg"
            : "bg-white/80 backdrop-blur-md border-b border-green-100"
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
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
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
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-green-500/50 transition-all"
              >
                Start Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 rounded-full px-4 py-2">
                <DollarSign className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">Feature Spotlight</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                AI Price Optimization —
                <br />
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">
                  Maximize Profit
                </span>
                <br />
                Without Losing Sales
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed">
                AI-powered pricing engine that finds the perfect price point. 
                <span className="text-green-700 font-semibold"> Win Buy Box, protect margins, and increase revenue — all at once.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-green-500/50 transition-all group"
                >
                  🎯 Start Optimizing Prices Free
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  variant="outline"
                  className="border-2 border-green-600 text-green-700 hover:bg-green-50 font-semibold px-8 py-6 text-lg rounded-full"
                >
                  See How It Works →
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>AI-powered recommendations</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Margin protection built-in</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Buy Box optimization</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative bg-white border-2 border-green-200 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900">AI Price Recommendation</h3>
                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                      <Brain className="w-3 h-3" />
                      AI Active
                    </span>
                  </div>

                  {/* Current vs Recommended */}
                  <div className="space-y-3">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-600">Current Price</span>
                        <span className="text-2xl font-bold text-gray-700">₹1,499</span>
                      </div>
                      <div className="text-xs text-gray-500">Buy Box: 45% | Margin: 18%</div>
                    </div>

                    <div className="flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-green-600" />
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 rounded-lg p-4 animate-pulse">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-green-700">AI Recommended</span>
                        <span className="text-2xl font-bold text-green-700">₹1,349</span>
                      </div>
                      <div className="text-xs text-green-600 font-semibold">Buy Box: 78% ↑ | Margin: 22% ↑</div>
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                      <div className="text-xs text-gray-600 mb-1">Revenue Impact</div>
                      <div className="text-xl font-bold text-green-600">+32%</div>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-center">
                      <div className="text-xs text-gray-600 mb-1">Profit Impact</div>
                      <div className="text-xl font-bold text-emerald-600">+18%</div>
                    </div>
                  </div>

                  {/* Action Button in Visual */}
                  <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-lg">
                    Apply Recommended Price →
                  </Button>
                </div>

                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl px-4 py-2 shadow-xl">
                  <p className="text-white font-bold text-sm flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    AI Optimized
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
              Why Most Sellers
              <br />
              <span className="text-red-600">Leave Money on the Table</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <Calculator className="w-8 h-8" />,
                title: "Guessing prices based on gut feeling",
                color: "from-red-500 to-orange-500"
              },
              {
                icon: <TrendingDown className="w-8 h-8" />,
                title: "Panic discounting kills margins",
                color: "from-orange-500 to-yellow-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Losing Buy Box to cheaper competitors",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Percent className="w-8 h-8" />,
                title: "Overpricing = zero sales",
                color: "from-orange-500 to-red-500"
              }
            ].map((pain, i) => (
              <div key={i} className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:border-green-400 hover:shadow-lg transition-all group">
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
              Wrong pricing costs sellers <span className="text-red-600">15-35% of potential revenue</span>
            </p>
            <p className="text-gray-700 text-lg">
              Every day, across categories.
            </p>
          </div>

          {/* Visual Comparison */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manual Pricing</h3>
              <p className="text-gray-700 text-sm mb-4">Guesswork + delayed reactions = lost profit</p>
              <div className="space-y-2 text-left">
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">No data-driven insights</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Emotional pricing decisions</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Constant monitoring needed</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Optimization</h3>
              <p className="text-gray-700 text-sm mb-4">Smart pricing = maximum profit + sales</p>
              <div className="space-y-2 text-left">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">AI analyzes market dynamics</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Data-driven recommendations</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Automated price optimization</span>
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
              How AI Price Optimization Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Insydz AI analyzes thousands of data points every hour to recommend the perfect price — 
              <span className="text-green-700 font-semibold"> balancing competitiveness, margins, and Buy Box probability.</span>
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-4 gap-8 relative">
              {[
                {
                  step: "1",
                  title: "AI scans market data",
                  detail: "Competitor prices, demand, seasonality",
                  icon: <Eye className="w-12 h-12" />
                },
                {
                  step: "2",
                  title: "Analyzes Buy Box dynamics",
                  detail: "Win probability at different price points",
                  icon: <Brain className="w-12 h-12" />
                },
                {
                  step: "3",
                  title: "Calculates optimal price",
                  detail: "Maximum profit while staying competitive",
                  icon: <Calculator className="w-12 h-12" />
                },
                {
                  step: "4",
                  title: "Recommends & alerts you",
                  detail: "Dashboard + WhatsApp notifications",
                  icon: <Bell className="w-12 h-12" />
                }
              ].map((item, i) => (
                <div key={i} className="bg-white border-2 border-green-300 rounded-2xl p-6 text-center relative z-10 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-black text-white">
                    {item.step}
                  </div>
                  <div className="bg-green-100 rounded-xl p-4 mb-4 text-green-600">
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
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
            >
              🎯 Get AI Price Recommendations Free
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
              What You Can Do with Price Optimization
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <DollarSign />, title: "Increase profit per sale", detail: "AI finds the highest profitable price", color: "text-green-600" },
              { icon: <ShoppingCart />, title: "Win more Buy Boxes", detail: "Competitive without panic discounting", color: "text-blue-600" },
              { icon: <TrendingUp />, title: "Boost revenue 15-30%", detail: "Smart pricing = more conversions", color: "text-emerald-600" },
              { icon: <Shield />, title: "Protect margins automatically", detail: "Set floors, AI respects them", color: "text-purple-600" },
              { icon: <Award />, title: "Beat competitors strategically", detail: "Data wins over guesswork", color: "text-orange-600" },
              { icon: <Maximize2 />, title: "Scale without manual work", detail: "AI optimizes 24/7", color: "text-indigo-600" }
            ].map((outcome, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center ${outcome.color}`}>
                    {outcome.icon}
                  </div>
                  <ThumbsUp className="w-6 h-6 text-green-500" />
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
              Advanced AI Pricing Intelligence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                feature: "Dynamic Price Recommendations",
                benefit: "AI adjusts to market changes hourly",
                icon: <RefreshCw className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                feature: "Buy Box Win Probability",
                benefit: "Know your chances before pricing",
                icon: <Percent className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500"
              },
              {
                feature: "Margin Protection Rules",
                benefit: "Never sell below profit targets",
                icon: <Shield className="w-8 h-8" />,
                color: "from-red-500 to-orange-500"
              },
              {
                feature: "Competitor Price Analysis",
                benefit: "Beat them smartly, not blindly",
                icon: <Eye className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                feature: "Seasonal Demand Detection",
                benefit: "Optimize for high & low seasons",
                icon: <LineChart className="w-8 h-8" />,
                color: "from-orange-500 to-red-500"
              },
              {
                feature: "A/B Price Testing",
                benefit: "Test prices, find winners",
                icon: <BarChart3 className="w-8 h-8" />,
                color: "from-indigo-500 to-purple-500"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-green-400 hover:shadow-xl transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.feature}</h3>
                <p className="text-gray-600 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-green-600" />
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
              Manual Pricing vs AI Optimization
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Aspect</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">Manual Pricing</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-green-700 bg-green-50">AI Optimization</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: "Data Analysis", manual: "Gut feeling, limited data", insydz: "Thousands of data points analyzed" },
                  { aspect: "Speed", manual: "Hours to days", insydz: "Recommendations in seconds" },
                  { aspect: "Accuracy", manual: "Hit or miss", insydz: "Proven 15-30% revenue increase" },
                  { aspect: "Margin Safety", manual: "Manual calculations, errors", insydz: "Automated margin protection" },
                  { aspect: "Scalability", manual: "Impossible for 100+ products", insydz: "Works for unlimited products" }
                ].map((row, i) => (
                  <tr key={i} className="border-t border-gray-200">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.aspect}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-red-500" />
                        <span className="text-sm text-gray-600">{row.manual}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center bg-green-50">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-green-600" />
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
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl"
            >
              🎯 Switch to AI Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* PLG Entry Point */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Start Free. Optimize Prices Instantly.
            </h2>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-black text-green-600">₹0</span>
                <span className="text-2xl text-gray-600">/ Forever</span>
              </div>
              <p className="text-lg text-gray-700">Free Plan Includes:</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "AI price recommendations for limited products",
                "Buy Box probability analysis",
                "Margin protection settings",
                "Basic optimization alerts"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-900 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 mb-6">
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-bold text-green-600">Upgrade Teaser:</span> Unlock automated price changes, unlimited products, and advanced A/B testing on paid plans.
              </p>
            </div>

            <div className="text-center">
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl"
              >
                🎯 Start AI Price Optimization Free
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
              Is AI Price Optimization Right for You?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Perfect For</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Sellers in competitive categories",
                  "Brands protecting margins",
                  "High-volume sellers (50+ SKUs)",
                  "Agencies managing multiple accounts",
                  "Sellers tired of manual pricing"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
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
                  "Fixed-price/MRP-only products",
                  "One-time sellers with 1-2 products",
                  "Sellers who never check analytics"
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
              Price Optimization – FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-green-400 transition-all">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-green-600 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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
              { title: "Competitor Price Tracking", icon: <TrendingDown />, color: "from-orange-500 to-red-500" },
              { title: "Review Analytics", icon: <MessageCircle />, color: "from-purple-500 to-pink-500" },
              { title: "Keyword & Rank Tracking", icon: <Search />, color: "from-blue-500 to-cyan-500" },
              { title: "Product Research", icon: <Target />, color: "from-indigo-500 to-purple-500" },
              { title: "AI Recommendations", icon: <Sparkles />, color: "from-green-500 to-emerald-500" },
              { title: "WhatsApp Alerts", icon: <Bell />, color: "from-emerald-500 to-green-500" }
            ].map((feature, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all cursor-pointer group">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">{feature.title}</h3>
                <ArrowRight className="w-5 h-5 text-green-600 mt-2 group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
            Stop Guessing Prices.
            <br />
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Let AI Maximize Your Profit.
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
            >
              🎯 Start AI Pricing Free
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => setLocation("/")}
              size="lg"
              variant="outline"
              className="border-2 border-green-600 text-green-700 hover:bg-green-50 font-semibold px-12 py-6 text-lg rounded-full"
            >
              Explore All Features →
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-green-300 p-4 shadow-2xl z-40">
        <Button
          onClick={handleGetStarted}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 rounded-full shadow-xl"
        >
          🎯 Start AI Pricing Free
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