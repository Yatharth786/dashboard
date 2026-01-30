import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { 
  TrendingDown, ArrowRight, CheckCircle2, Target, Zap, 
  Bell, TrendingUp, MessageCircle, Search, Package, 
  BarChart3, ChevronRight, Star, AlertCircle, Clock,
  ShoppingBag, IndianRupee, Smartphone, X, Check,
  RefreshCw, FileSpreadsheet, Shield, Eye, Sparkles,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TrackCompetitorPricesPage() {
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
      question: "How often does Insydz track competitor prices?",
      answer: "Insydz monitors competitor prices 24/7 in real-time. Price changes are detected within minutes and alerts are sent instantly via WhatsApp or email."
    },
    {
      question: "Does this work for Amazon India & Flipkart only?",
      answer: "Yes, currently Insydz is optimized for Amazon India and Flipkart, with support for Indian pricing (₹) and marketplace-specific features like Buy Box tracking."
    },
    {
      question: "Will constant price changes hurt my margins?",
      answer: "No. Insydz helps you make smart pricing decisions, not panic changes. You'll see when competitors are doing temporary promotions vs real price drops, so you protect margins while staying competitive."
    },
    {
      question: "Can I track multiple competitors per product?",
      answer: "Yes. You can track unlimited competitors per product on paid plans. Free plan allows tracking of key competitors to get started."
    },
    {
      question: "Is the free plan limited?",
      answer: "The free plan includes basic competitor price tracking for a limited number of products. It's designed to show you the value before you upgrade for unlimited tracking."
    },
    {
      question: "Do I get WhatsApp alerts?",
      answer: "Yes! WhatsApp alerts are available on all plans. Get instant notifications on your phone when competitor prices change."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-orange-200 shadow-lg"
            : "bg-white/80 backdrop-blur-md border-b border-orange-100"
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
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
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
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-orange-500/50 transition-all"
              >
                Start Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 rounded-full px-4 py-2">
                <TrendingDown className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-700">Real-Time Price Intelligence</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                Track Competitor Prices in Real Time.
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
                  Never Lose Sales
                </span>
                <br />
                to Sudden Price Drops.
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed">
                Insydz helps Amazon & Flipkart sellers monitor competitor price changes automatically and react instantly — 
                <span className="text-orange-700 font-semibold"> without manual tracking or Excel chaos.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group"
                >
                  👉 Start Free Price Tracking
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-600 text-orange-700 hover:bg-orange-50 font-semibold px-8 py-6 text-lg rounded-full"
                >
                  See How It Works →
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Built for Indian marketplaces 🇮🇳</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Amazon & Flipkart supported</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>WhatsApp price alerts</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative bg-white border-2 border-orange-200 rounded-3xl p-8 shadow-2xl">
                {/* Price Comparison Mockup */}
                <div className="space-y-4">
                  {/* Product Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <ShoppingBag className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Premium Wireless Earbuds</h3>
                      <p className="text-xs text-gray-500">Tracking 5 competitors</p>
                    </div>
                  </div>

                  {/* Price Comparison */}
                  <div className="space-y-3">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Your Price</span>
                        <span className="text-lg font-bold text-green-700">₹1,199</span>
                      </div>
                    </div>

                    <div className="bg-red-50 border-2 border-red-400 rounded-lg p-3 animate-pulse">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Competitor A</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400 line-through">₹1,199</span>
                          <TrendingDown className="w-4 h-4 text-red-600" />
                          <span className="text-lg font-bold text-red-600">₹999</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 text-red-600" />
                        <p className="text-xs text-red-600 font-semibold">Price dropped by 17%</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Competitor B</span>
                        <span className="text-lg font-bold text-gray-700">₹1,299</span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Alert */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-2xl p-4 mt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">WhatsApp Alert Sent</p>
                        <p className="text-xs text-gray-600">"Competitor A dropped to ₹999"</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl px-4 py-2 shadow-xl">
                  <p className="text-white font-bold text-sm">Live Tracking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Awareness Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900">
              Why Manual Price Tracking
              <br />
              <span className="text-red-600">Is Killing Your Profits</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <RefreshCw className="w-8 h-8" />,
                title: "Competitors change prices multiple times a day",
                color: "from-red-500 to-orange-500"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "You notice price drops too late",
                color: "from-orange-500 to-yellow-500"
              },
              {
                icon: <FileSpreadsheet className="w-8 h-8" />,
                title: "Excel tracking is outdated within hours",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <TrendingDown className="w-8 h-8" />,
                title: "Price wars silently eat margins",
                color: "from-orange-500 to-red-500"
              }
            ].map((pain, i) => (
              <div key={i} className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:border-orange-400 hover:shadow-lg transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
                  {pain.icon}
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{pain.title}</p>
              </div>
            ))}
          </div>

          {/* Reality Highlight */}
          <div className="bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-400 rounded-3xl p-8 text-center shadow-lg">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <p className="text-2xl font-bold text-gray-900 mb-2">
              Most sellers lose <span className="text-red-600">20-40% potential revenue</span>
            </p>
            <p className="text-gray-700 text-lg">
              because they react late to competitor price changes.
            </p>
          </div>

          {/* Visual Illustration */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manual Tracking</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-red-600" />
                  <span>Constantly refreshing listings</span>
                </li>
                <li className="flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-red-600" />
                  <span>Excel sheets chaos</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-red-600" />
                  <span>Missed Buy Box opportunities</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">With Insydz</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-green-600" />
                  <span>Automatic 24/7 monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-green-600" />
                  <span>Instant WhatsApp alerts</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span>Never miss a price change</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Intro */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Competitor Price Tracking —
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Done Automatically</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Insydz continuously tracks competitor prices across Amazon & Flipkart and alerts you the moment something changes — 
              <span className="text-orange-700 font-semibold"> so you can act before sales drop.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <RefreshCw className="w-10 h-10" />,
                title: "No manual checking",
                desc: "Set it once, monitor forever",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: "No delayed reactions",
                desc: "Instant alerts when prices change",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "No blind price wars",
                desc: "Make informed pricing decisions",
                color: "from-green-500 to-emerald-500"
              }
            ].map((benefit, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-400 hover:shadow-xl transition-all group text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform shadow-lg`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              How Price Tracking Works
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">with Insydz</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-3 gap-12 relative">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-white border-2 border-orange-300 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Add Your Product</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Add your product or ASIN. Insydz automatically identifies key competitors.
                  </p>
                  <div className="bg-orange-100 rounded-2xl p-4">
                    <ShoppingBag className="w-12 h-12 text-orange-600 mx-auto" />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-white border-2 border-orange-300 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Monitors Prices 24/7</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We track competitor price changes, discounts, and stock signals.
                  </p>
                  <div className="bg-purple-100 rounded-2xl p-4">
                    <Eye className="w-12 h-12 text-purple-600 mx-auto animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-white border-2 border-orange-300 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Instant Alerts & Actions</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start gap-2 bg-red-50 border border-red-300 rounded-lg p-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-800">"Competitor dropped price by 11%"</span>
                    </div>
                    <div className="flex items-start gap-2 bg-orange-50 border border-orange-300 rounded-lg p-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-800">"Lowest price changed — Buy Box at risk"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all group"
            >
              👉 Track Your First Competitor Free
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* What You Can Do Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Sellers Do with Competitor Price Insights
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "React instantly to price drops",
                trend: <TrendingDown className="w-6 h-6 text-red-500" />
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Protect Buy Box without panic discounting",
                trend: <Shield className="w-6 h-6 text-green-500" />
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Identify fake price wars",
                trend: <AlertCircle className="w-6 h-6 text-orange-500" />
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Time discounts intelligently",
                trend: <Clock className="w-6 h-6 text-blue-500" />
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Increase profit without losing volume",
                trend: <TrendingUp className="w-6 h-6 text-green-500" />
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Stay competitive in your category",
                trend: <Target className="w-6 h-6 text-purple-500" />
              }
            ].map((useCase, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                    {useCase.icon}
                  </div>
                  {useCase.trend}
                </div>
                <p className="text-gray-900 font-semibold leading-relaxed">{useCase.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature → Result Mapping */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Built for Serious Price Intelligence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                feature: "Real-Time Price Monitoring",
                result: "Faster reaction than competitors",
                icon: <Eye className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                feature: "Historical Price Trends",
                result: "Smarter pricing decisions",
                icon: <BarChart3 className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500"
              },
              {
                feature: "Buy Box Risk Alerts",
                result: "Prevent sudden sales drops",
                icon: <Shield className="w-8 h-8" />,
                color: "from-red-500 to-orange-500"
              },
              {
                feature: "WhatsApp Notifications",
                result: "Instant action",
                icon: <Bell className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-400 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.feature}</h3>
                    <p className="text-gray-600 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-orange-500" />
                      {item.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Manual Price Tracking vs Insydz
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Task</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">Manual Tracking</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-orange-700 bg-orange-50">With Insydz</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { task: "Monitoring", manual: "Checking listings manually", insydz: "Automatic 24/7 tracking" },
                    { task: "Response Time", manual: "Late reactions", insydz: "Instant alerts" },
                    { task: "Data Management", manual: "Excel sheets", insydz: "Live dashboards" },
                    { task: "Decision Quality", manual: "Panic discounts", insydz: "Smart pricing decisions" },
                    { task: "Time Investment", manual: "Hours wasted", insydz: "Minutes per day" }
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-gray-200">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.task}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <X className="w-5 h-5 text-red-500" />
                          <span className="text-sm text-gray-600">{row.manual}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center bg-orange-50">
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
          </div>

          <div className="text-center mt-8">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl"
            >
              👉 Switch to Smart Price Tracking
            </Button>
          </div>
        </div>
      </section>

      {/* Free Plan Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Start Free. See Real Price Movements.
            </h2>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-black text-orange-600">₹0</span>
                <span className="text-2xl text-gray-600">/ Forever</span>
              </div>
              <p className="text-lg text-gray-700">Free Plan Includes:</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Track limited products",
                "Competitor price alerts",
                "Amazon & Flipkart data",
                "No credit card required"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-900 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 mb-6">
              <p className="text-sm text-gray-700 mb-4">
                <span className="font-bold text-orange-600">Upgrade Teaser:</span> Paid plans unlock deeper tracking, more competitors, and automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Upgrade only when you see value</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl"
              >
                👉 Start Free Price Tracking
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Who Should Use Competitor Price Tracking?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Best For */}
            <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Best For</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Amazon & Flipkart sellers",
                  "Competitive categories",
                  "Buy Box-sensitive products",
                  "Sellers protecting margins"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Ideal For */}
            <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Not Ideal For</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "One-time sellers",
                  "Fixed-price government categories",
                  "Sellers not monitoring competition"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Competitor Price Tracking – FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 border-2 border-gray-200 rounded-xl overflow-hidden hover:border-orange-400 transition-all">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-orange-600 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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

      {/* Internal Linking Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Related Seller Use Cases
            </h2>
            <p className="text-gray-600">Explore more ways to grow your e-commerce business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Find Profitable Products", icon: <Target className="w-8 h-8" />, color: "from-blue-500 to-cyan-500" },
              { title: "Analyze Customer Reviews", icon: <MessageCircle className="w-8 h-8" />, color: "from-purple-500 to-pink-500" },
              { title: "Improve Amazon & Flipkart SEO", icon: <Search className="w-8 h-8" />, color: "from-green-500 to-emerald-500" },
              { title: "Avoid Stockouts & Missed Sales", icon: <Package className="w-8 h-8" />, color: "from-orange-500 to-red-500" }
            ].map((useCase, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all cursor-pointer group">
                <div className={`w-14 h-14 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{useCase.title}</h3>
                <ArrowRight className="w-5 h-5 text-orange-600 mt-2 group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
            Stop Reacting Late.
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Track Competitor Prices in Real Time.
            </span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            Join thousands of sellers who never miss a price change and protect their margins with smart automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
            >
              👉 Start Free Price Tracking
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => setLocation("/")}
              size="lg"
              variant="outline"
              className="border-2 border-orange-600 text-orange-700 hover:bg-orange-50 font-semibold px-12 py-6 text-lg rounded-full"
            >
              Explore All Use Cases →
            </Button>
          </div>
          <p className="text-gray-600 mt-6 text-sm">
            ✓ No credit card required  ✓ Setup in 2 minutes  ✓ Cancel anytime
          </p>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-orange-300 p-4 shadow-2xl z-40">
        <Button
          onClick={handleGetStarted}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-full shadow-xl"
        >
          👉 Start Free Price Tracking
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="Insydz Logo" 
                  className="w-10 h-10 rounded-xl object-contain"
                />
                <span className="text-lg font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Insydz
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Real-time price intelligence for smart sellers
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => setLocation("/")} className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Home
                </button>
                <button onClick={() => setLocation("/pricing")} className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Pricing
                </button>
                <button onClick={handleGetStarted} className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Login
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>contact@insydz.com</p>
                <p>+91 98765 43210</p>
                <p>New Delhi, India</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Insydz. All rights reserved. Built for Indian sellers 🇮🇳
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}