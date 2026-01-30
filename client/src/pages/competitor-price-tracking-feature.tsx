import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { 
  TrendingDown, ArrowRight, CheckCircle2, Target, Zap, 
  Bell, TrendingUp, MessageCircle, Search, Package, 
  BarChart3, ChevronRight, Star, AlertCircle, Clock,
  ShoppingBag, IndianRupee, Smartphone, X, Check,
  RefreshCw, FileSpreadsheet, Shield, Eye, Sparkles,
  ChevronDown, DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CompetitorPriceTrackingFeaturePage() {
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
      question: "How often are competitor prices tracked?",
      answer: "Insydz tracks competitor prices 24/7 in real-time. Changes are detected within minutes and alerts are sent instantly."
    },
    {
      question: "Does this work for Amazon India & Flipkart?",
      answer: "Yes, competitor price tracking works seamlessly across both Amazon India and Flipkart with full support for ₹ pricing."
    },
    {
      question: "Can I track multiple competitors per product?",
      answer: "Absolutely. You can track unlimited competitors per product on paid plans. Free plan includes key competitors."
    },
    {
      question: "Will constant price changes hurt margins?",
      answer: "No. Insydz helps you make informed decisions, not reactive ones. You'll see patterns and avoid panic discounting."
    },
    {
      question: "Is this available on the free plan?",
      answer: "Yes! The free plan includes basic competitor price tracking for limited products. Upgrade for unlimited tracking."
    },
    {
      question: "Do I get WhatsApp alerts?",
      answer: "Yes! WhatsApp alerts are available on all plans, ensuring you never miss critical price changes."
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
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 rounded-full px-4 py-2">
                <TrendingDown className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-700">Feature Spotlight</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                Competitor Price Tracking —
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
                  Know Every Price Move
                </span>
                <br />
                Before It Hurts Your Sales
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed">
                Track competitor prices across Amazon & Flipkart automatically. 
                <span className="text-orange-700 font-semibold"> Get instant alerts when prices change, Buy Box is at risk, or discounts appear.</span>
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
                  See It in Action →
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Works for Amazon & Flipkart India</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Real-time alerts</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>No manual tracking</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative bg-white border-2 border-orange-200 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900">Live Price Comparison</h3>
                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">Tracking 5</span>
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
                        <p className="text-xs text-red-600 font-semibold">Price dropped by 17% — Buy Box at risk!</p>
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

                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl px-4 py-2 shadow-xl">
                  <p className="text-white font-bold text-sm">Live</p>
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
              <span className="text-red-600">Lose Money on Pricing</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <RefreshCw className="w-8 h-8" />,
                title: "Competitors change prices multiple times daily",
                color: "from-red-500 to-orange-500"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Manual checks are always late",
                color: "from-orange-500 to-yellow-500"
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Price wars destroy margins",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Buy Box is lost silently",
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

          <div className="bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-400 rounded-3xl p-8 text-center shadow-lg">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <p className="text-2xl font-bold text-gray-900 mb-2">
              Late price reactions cause <span className="text-red-600">20-40% revenue leakage</span>
            </p>
            <p className="text-gray-700 text-lg">
              in competitive categories.
            </p>
          </div>

          {/* Visual Comparison */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manual Tracking</h3>
              <p className="text-gray-700 text-sm">Seller manually checking listings, missing changes</p>
            </div>

            <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Alerts</h3>
              <p className="text-gray-700 text-sm">Instant notifications, never miss a change</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Explanation */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              How Competitor Price Tracking Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Insydz automatically monitors competitor prices for your products and alerts you the moment something changes — 
              <span className="text-orange-700 font-semibold"> so you can react instantly, not emotionally.</span>
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-4 gap-8 relative">
              {[
                {
                  step: "1",
                  title: "Add your product or ASIN",
                  icon: <ShoppingBag className="w-12 h-12" />
                },
                {
                  step: "2",
                  title: "Insydz identifies key competitors",
                  icon: <Eye className="w-12 h-12" />
                },
                {
                  step: "3",
                  title: "Prices are tracked 24/7",
                  icon: <RefreshCw className="w-12 h-12" />
                },
                {
                  step: "4",
                  title: "Alerts sent instantly via dashboard & WhatsApp",
                  icon: <Bell className="w-12 h-12" />
                }
              ].map((item, i) => (
                <div key={i} className="bg-white border-2 border-orange-300 rounded-2xl p-6 text-center relative z-10 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-black text-white">
                    {item.step}
                  </div>
                  <div className="bg-orange-100 rounded-xl p-4 mb-4 text-orange-600">
                    {item.icon}
                  </div>
                  <p className="text-gray-900 font-semibold">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
            >
              👉 Track Your First Competitor Free
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
              What You Can Do with Competitor Price Tracking
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Zap />, title: "React before sales drop", arrow: <TrendingDown className="w-6 h-6 text-red-500" /> },
              { icon: <Shield />, title: "Protect Buy Box without panic discounts", arrow: <Shield className="w-6 h-6 text-green-500" /> },
              { icon: <Eye />, title: "Identify fake price wars", arrow: <AlertCircle className="w-6 h-6 text-orange-500" /> },
              { icon: <Clock />, title: "Time discounts smartly", arrow: <Clock className="w-6 h-6 text-blue-500" /> },
              { icon: <TrendingUp />, title: "Increase profit without losing volume", arrow: <TrendingUp className="w-6 h-6 text-green-500" /> },
              { icon: <Target />, title: "Stay competitive always", arrow: <Target className="w-6 h-6 text-purple-500" /> }
            ].map((outcome, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                    {outcome.icon}
                  </div>
                  {outcome.arrow}
                </div>
                <p className="text-gray-900 font-semibold leading-relaxed">{outcome.title}</p>
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
              Built for Real Price Intelligence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                feature: "Real-Time Price Monitoring",
                benefit: "Faster reaction than competitors",
                icon: <Eye className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                feature: "Historical Price Trends",
                benefit: "Smarter pricing decisions",
                icon: <BarChart3 className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500"
              },
              {
                feature: "Buy Box Risk Alerts",
                benefit: "Prevent sudden sales drops",
                icon: <Shield className="w-8 h-8" />,
                color: "from-red-500 to-orange-500"
              },
              {
                feature: "Multi-Competitor Tracking",
                benefit: "Complete market visibility",
                icon: <Target className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                feature: "WhatsApp Price Alerts",
                benefit: "Instant action on your phone",
                icon: <Bell className="w-8 h-8" />,
                color: "from-orange-500 to-red-500"
              },
              {
                feature: "Price History Analysis",
                benefit: "Identify patterns & trends",
                icon: <TrendingUp className="w-8 h-8" />,
                color: "from-indigo-500 to-purple-500"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-orange-400 hover:shadow-xl transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.feature}</h3>
                <p className="text-gray-600 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-orange-500" />
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
              Manual Price Tracking vs Insydz
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
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
                  { task: "Data Management", manual: "Excel sheets", insydz: "Live price dashboards" },
                  { task: "Decision Quality", manual: "Panic discounting", insydz: "Smart pricing decisions" },
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

      {/* PLG Entry Point */}
      <section className="py-20 px-4 bg-gray-50">
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
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-bold text-orange-600">Upgrade Teaser:</span> Unlock deeper tracking, more competitors, and automation on paid plans.
              </p>
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

      {/* Who This Feature Is For */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Is Competitor Price Tracking Right for You?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Best For</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Competitive categories",
                  "Buy Box-sensitive products",
                  "Sellers protecting margins",
                  "Agencies managing multiple brands"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Not Ideal For</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Fixed-price categories",
                  "One-time sellers",
                  "Sellers ignoring competitor behavior"
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Competitor Price Tracking – FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-orange-400 transition-all">
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
              { title: "Review Analytics", icon: <MessageCircle />, color: "from-purple-500 to-pink-500" },
              { title: "Price Optimization", icon: <DollarSign />, color: "from-green-500 to-emerald-500" },
              { title: "Keyword & Rank Tracking", icon: <Search />, color: "from-blue-500 to-cyan-500" },
              { title: "Product Research", icon: <Target />, color: "from-orange-500 to-red-500" },
              { title: "AI Recommendations", icon: <Sparkles />, color: "from-indigo-500 to-purple-500" },
              { title: "WhatsApp Alerts", icon: <Bell />, color: "from-green-500 to-emerald-500" }
            ].map((feature, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all cursor-pointer group">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{feature.title}</h3>
                <ArrowRight className="w-5 h-5 text-orange-600 mt-2 group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
            Stop Guessing Prices.
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Track Competitors Automatically.
            </span>
          </h2>
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
              Explore All Features →
            </Button>
          </div>
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
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">© 2025 Insydz. All rights reserved. Built for Indian sellers 🇮🇳</p>
        </div>
      </footer>
    </div>
  );
}