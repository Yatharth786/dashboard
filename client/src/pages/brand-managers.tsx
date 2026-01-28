import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { 
  TrendingDown, ArrowRight, CheckCircle2, Target, Zap, 
  Bell, TrendingUp, MessageCircle, Search, Package, 
  BarChart3, ChevronRight, Star, AlertCircle, Clock,
  Users, IndianRupee, Smartphone, Award, Eye, Brain,
  Shield, Sparkles, LineChart, Layers, PieChart
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BrandManagersPage() {
  const [, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-purple-200 shadow-lg"
            : "bg-white/80 backdrop-blur-md border-b border-purple-100"
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
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Start Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-300 rounded-full px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                </span>
                <span className="text-sm font-medium text-purple-700">Built for Strategic Brand Leaders</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                Make Confident
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">
                  Data-Backed
                </span>
                <br />
                Brand Decisions.
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                Insydz gives brand managers complete market intelligence on Amazon & Flipkart — 
                <span className="text-purple-700 font-semibold"> so you can protect market share, optimize pricing strategies, and outmaneuver competitors with confidence.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all group"
                >
                  👉 Start Free for Brand Managers
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-700 hover:bg-purple-50 font-semibold px-8 py-6 text-lg rounded-full"
                >
                  See How It Works →
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Multi-brand portfolio tracking</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Executive-ready reports</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative bg-white border-2 border-purple-200 rounded-3xl p-8 shadow-2xl">
                {/* Mock Dashboard */}
                <div className="space-y-4">
                  {/* Brand Performance Card */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <Award className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">Premium Brand Portfolio</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl font-bold text-purple-600">₹2.4Cr</span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">+18%</span>
                        </div>
                        <p className="text-xs text-gray-600">Monthly GMV across 3 brands</p>
                      </div>
                    </div>
                  </div>

                  {/* Market Share Alert */}
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 rounded-r-2xl p-4 shadow-md">
                    <div className="flex items-start gap-3">
                      <Eye className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-gray-900">Market Share Alert</p>
                        <p className="text-sm text-gray-700">Competitor launched similar product at <span className="text-orange-600 font-bold">23% lower price</span></p>
                        <p className="text-xs text-gray-500 mt-1">Category: Premium Skincare</p>
                      </div>
                    </div>
                  </div>

                  {/* AI Insight */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">AI Recommendation</p>
                        <p className="text-xs text-gray-600">Optimize pricing on Brand X by 8-12%</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl px-4 py-2 shadow-xl">
                  <p className="text-white font-bold text-sm">Live Intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900">
              Why Brand Managers Struggle
              <br />
              <span className="text-red-600">Without Real-Time Intelligence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Managing brands on e-commerce without data is like driving blind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Competitors move faster than your reporting cycle",
                color: "from-red-500 to-orange-500"
              },
              {
                icon: <TrendingDown className="w-8 h-8" />,
                title: "Market share erosion goes unnoticed for weeks",
                color: "from-orange-500 to-yellow-500"
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Customer feedback gets lost in spreadsheets",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Manual analysis delays strategic decisions",
                color: "from-pink-500 to-red-500"
              }
            ].map((pain, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-400 hover:shadow-xl transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-lg`}>
                  {pain.icon}
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{pain.title}</p>
              </div>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-400 rounded-3xl p-8 text-center shadow-lg">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <p className="text-2xl font-bold text-gray-900 mb-2">
              Brands lose <span className="text-red-600">20-40% market share</span> annually
            </p>
            <p className="text-gray-700 text-lg">
              due to slow competitive response, delayed pricing decisions, and missed customer sentiment signals.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Introduction */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Meet Insydz —
              <br />
              Your <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Strategic Brand Intelligence Platform</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Built for brand managers who need to make fast, confident decisions. 
              <span className="text-purple-700 font-semibold"> Get complete market visibility across Amazon & Flipkart in one unified dashboard.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Layers className="w-10 h-10" />,
                title: "Multi-Brand Portfolio View",
                desc: "Monitor all your brands & competitors simultaneously",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Brain className="w-10 h-10" />,
                title: "AI-Powered Market Intelligence",
                desc: "Get strategic recommendations, not just data",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <LineChart className="w-10 h-10" />,
                title: "Executive Reporting",
                desc: "One-click reports ready for leadership meetings",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Competitive Defense Alerts",
                desc: "Real-time notifications on competitive threats",
                color: "from-green-500 to-emerald-500"
              }
            ].map((benefit, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-400 hover:shadow-xl transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-lg`}>
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
      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              How Insydz Works
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">for Brand Managers</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-3 gap-12 relative">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-white border-2 border-purple-300 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect Your Brand Portfolio</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Add your brands and key competitors across Amazon & Flipkart. Insydz automatically tracks pricing, reviews, rankings, and market trends.
                  </p>
                  <div className="bg-purple-100 rounded-2xl p-4">
                    <Layers className="w-12 h-12 text-purple-600 mx-auto" />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-white border-2 border-purple-300 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Analyzes Market Dynamics</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our AI continuously monitors market share shifts, pricing strategies, customer sentiment, and competitive positioning across categories.
                  </p>
                  <div className="bg-pink-100 rounded-2xl p-4">
                    <Brain className="w-12 h-12 text-pink-600 mx-auto animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-white border-2 border-purple-300 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Strategic Recommendations</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start gap-2 bg-red-50 border border-red-300 rounded-lg p-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-800">"Competitor X launched at 25% discount"</span>
                    </div>
                    <div className="flex items-start gap-2 bg-orange-50 border border-orange-300 rounded-lg p-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-800">"Brand Y market share up 12% this month"</span>
                    </div>
                    <div className="flex items-start gap-2 bg-blue-50 border border-blue-300 rounded-lg p-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-800">"Recommend 10% price adjustment on SKU Z"</span>
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
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all group"
            >
              👉 Start Free & Get Brand Intelligence
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features for Brand Managers */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Manage Your Brand Portfolio
            </h2>
            <p className="text-lg text-gray-600">Comprehensive tools built for strategic decision-making</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <PieChart className="w-8 h-8" />,
                title: "Market Share Tracking",
                desc: "Monitor your position vs. competitors in real-time across categories"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Price Elasticity Analysis",
                desc: "Understand how pricing affects sales and market positioning"
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Sentiment Analytics",
                desc: "Track brand perception through AI-powered review analysis"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Competitive Benchmarking",
                desc: "Compare your brands against key competitors on 20+ metrics"
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Product Performance",
                desc: "Identify star performers and underperformers in your portfolio"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Custom Dashboards",
                desc: "Build executive views tailored to your KPIs and reporting needs"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 text-white shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Trusted by Leading Brand Teams</h2>
            <p className="text-gray-600">Making confident decisions with real-time intelligence</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "250K+", label: "Reviews Analyzed Daily", icon: <MessageCircle className="w-8 h-8" /> },
              { stat: "24/7", label: "Market Monitoring", icon: <Eye className="w-8 h-8" /> },
              { stat: "20-40%", label: "Market Share Protected", icon: <Shield className="w-8 h-8" /> }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8 text-center hover:scale-105 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                  {item.icon}
                </div>
                <div className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {item.stat}
                </div>
                <div className="text-gray-700 text-lg font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
            Ready to Manage Your Brands with Confidence?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join brand managers who make strategic decisions backed by real-time market intelligence, not delayed reports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-white hover:bg-gray-100 text-purple-700 font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
            >
              Start Free for Brand Managers
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <p className="text-white/80 mt-6 text-sm">
            ✓ No credit card required  ✓ Setup in 5 minutes  ✓ Cancel anytime
          </p>
        </div>
      </section>

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
                <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Insydz
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Strategic brand intelligence for e-commerce leaders
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => setLocation("/")} className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Home
                </button>
                <button onClick={() => setLocation("/pricing")} className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Pricing
                </button>
                <button onClick={handleGetStarted} className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
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
              © 2025 Insydz. All rights reserved. Built for brand leaders 🇮🇳
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}