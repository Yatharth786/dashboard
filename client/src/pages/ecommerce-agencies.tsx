import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { 
  TrendingDown, ArrowRight, CheckCircle2, Target, Zap, 
  Bell, TrendingUp, MessageCircle, Search, Package, 
  BarChart3, ChevronRight, Star, AlertCircle, Clock,
  Users, IndianRupee, Smartphone, Award, Eye, Brain,
  Shield, Sparkles, LineChart, Layers, PieChart, Briefcase,
  Globe, Rocket, Settings, FileText, Layout, Workflow
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EcommerceAgenciesPage() {
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
            ? "bg-white/95 backdrop-blur-xl border-b border-cyan-200 shadow-lg"
            : "bg-white/80 backdrop-blur-md border-b border-cyan-100"
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
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
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
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                Start Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-cyan-100 border border-cyan-300 rounded-full px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-600"></span>
                </span>
                <span className="text-sm font-medium text-cyan-700">Built for High-Performance Agencies</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                Scale Your Agency.
                <br />
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 bg-clip-text text-transparent">
                  Deliver Results
                </span>
                <br />
                That Wow Clients.
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                Insydz gives e-commerce agencies a white-label intelligence platform to manage multiple clients effortlessly — 
                <span className="text-cyan-700 font-semibold"> deliver data-driven strategies that drive real ROI and keep clients coming back.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all group"
                >
                  👉 Start Free for Agencies
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-600 text-cyan-700 hover:bg-cyan-50 font-semibold px-8 py-6 text-lg rounded-full"
                >
                  See How It Works →
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Multi-client dashboard</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>White-label reports</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Agency pricing available</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative bg-white border-2 border-cyan-200 rounded-3xl p-8 shadow-2xl">
                {/* Mock Dashboard */}
                <div className="space-y-4">
                  {/* Multi-Client Overview */}
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">Agency Dashboard</h3>
                        <div className="grid grid-cols-2 gap-2 mb-2">
                          <div>
                            <p className="text-xs text-gray-600">Active Clients</p>
                            <p className="text-lg font-bold text-cyan-600">12</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Total GMV</p>
                            <p className="text-lg font-bold text-blue-600">₹8.2Cr</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Client Performance Alert */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-2xl p-4 shadow-md">
                    <div className="flex items-start gap-3">
                      <Rocket className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-gray-900">Client Success Alert</p>
                        <p className="text-sm text-gray-700">Client "XYZ Brand" sales up <span className="text-green-600 font-bold">34%</span> this month</p>
                        <p className="text-xs text-gray-500 mt-1">Your optimization strategy is working!</p>
                      </div>
                    </div>
                  </div>

                  {/* Report Ready */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">White-Label Report Ready</p>
                        <p className="text-xs text-gray-600">Monthly performance report generated</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl px-4 py-2 shadow-xl">
                  <p className="text-white font-bold text-sm">Multi-Client</p>
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
              Why E-commerce Agencies
              <br />
              <span className="text-red-600">Struggle to Scale</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Managing multiple clients without the right tools is a recipe for burnout
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Hours wasted on manual reporting for each client",
                color: "from-red-500 to-orange-500"
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Can't track all clients' competitors in real-time",
                color: "from-orange-500 to-yellow-500"
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: "Switching between 5+ different tools per client",
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: <TrendingDown className="w-8 h-8" />,
                title: "Client churn when results aren't communicated well",
                color: "from-blue-500 to-indigo-500"
              }
            ].map((pain, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-cyan-400 hover:shadow-xl transition-all group">
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
              Agencies waste <span className="text-red-600">40-60 hours/month</span> on manual work
            </p>
            <p className="text-gray-700 text-lg">
              Time that could be spent acquiring new clients, optimizing campaigns, or developing strategies.
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
              Your <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Agency Growth Engine</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The only platform built specifically for e-commerce agencies managing multiple clients. 
              <span className="text-cyan-700 font-semibold"> Deliver premium intelligence without premium overhead.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Layout className="w-10 h-10" />,
                title: "Unified Multi-Client Dashboard",
                desc: "Manage all clients from one central hub",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <FileText className="w-10 h-10" />,
                title: "White-Label Reporting",
                desc: "Auto-generated branded reports for clients",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Workflow className="w-10 h-10" />,
                title: "Automated Client Workflows",
                desc: "Set it once, monitor across all accounts",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Team Collaboration Tools",
                desc: "Assign clients, share insights, track tasks",
                color: "from-green-500 to-emerald-500"
              }
            ].map((benefit, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 hover:border-cyan-400 hover:shadow-xl transition-all group">
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
      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              How Insydz Works
              <br />
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">for E-commerce Agencies</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-3 gap-12 relative">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-white border-2 border-cyan-300 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Onboard All Your Clients</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Add unlimited clients to your agency dashboard. Each gets their own workspace with tracking for Amazon, Flipkart, and competitors.
                  </p>
                  <div className="bg-cyan-100 rounded-2xl p-4">
                    <Users className="w-12 h-12 text-cyan-600 mx-auto" />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-white border-2 border-cyan-300 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated Intelligence Gathering</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Insydz monitors all clients 24/7 — tracking competitors, prices, reviews, rankings, and market trends automatically.
                  </p>
                  <div className="bg-blue-100 rounded-2xl p-4">
                    <Brain className="w-12 h-12 text-blue-600 mx-auto animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-white border-2 border-cyan-300 rounded-3xl p-8 text-center relative z-10 shadow-xl hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Deliver White-Label Reports</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start gap-2 bg-green-50 border border-green-300 rounded-lg p-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-800">One-click branded reports for clients</span>
                    </div>
                    <div className="flex items-start gap-2 bg-blue-50 border border-blue-300 rounded-lg p-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-800">Automated alerts on client performance</span>
                    </div>
                    <div className="flex items-start gap-2 bg-purple-50 border border-purple-300 rounded-lg p-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-800">Actionable recommendations to share</span>
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
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all group"
            >
              👉 Start Free Agency Account
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features for Agencies */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything Your Agency Needs to Scale
            </h2>
            <p className="text-lg text-gray-600">Built for agencies, not adapted for them</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Layout className="w-8 h-8" />,
                title: "Client Management Dashboard",
                desc: "Bird's-eye view of all client accounts, performance, and alerts"
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Branded White-Label Reports",
                desc: "Auto-generated monthly/weekly reports with your agency branding"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Team Access Controls",
                desc: "Assign team members to specific clients with role permissions"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Custom Client KPIs",
                desc: "Set and track unique success metrics for each client"
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "API Access",
                desc: "Integrate Insydz data into your existing agency tech stack"
              },
              {
                icon: <IndianRupee className="w-8 h-8" />,
                title: "Agency Pricing Tiers",
                desc: "Volume discounts and flexible billing for growing agencies"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 text-white shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Agencies Choose Insydz
            </h2>
            <p className="text-lg text-gray-600">More clients. Less overhead. Better results.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-12 h-12" />,
                title: "Scale Without Hiring",
                desc: "Manage 20+ clients with the same team size. Our automation handles the heavy lifting.",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Impress & Retain Clients",
                desc: "Deliver professional, data-backed insights that make you indispensable.",
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Prove ROI Instantly",
                desc: "Show clients measurable improvements in rankings, pricing, and market share.",
                color: "from-green-500 to-emerald-500"
              }
            ].map((benefit, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-xl transition-all text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Trusted by Growing Agencies</h2>
            <p className="text-gray-600">Real efficiency gains for real agencies</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "40-60hrs", label: "Saved Per Month", icon: <Clock className="w-8 h-8" /> },
              { stat: "10x", label: "Faster Client Reporting", icon: <FileText className="w-8 h-8" /> },
              { stat: "85%", label: "Client Retention Rate", icon: <Award className="w-8 h-8" /> }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-2xl p-8 text-center hover:scale-105 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                  {item.icon}
                </div>
                <div className="text-5xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {item.stat}
                </div>
                <div className="text-gray-700 text-lg font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
            Ready to Scale Your Agency?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join e-commerce agencies delivering premium intelligence to clients without the premium overhead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-white hover:bg-gray-100 text-cyan-700 font-bold px-12 py-6 text-lg rounded-full shadow-2xl group"
            >
              Start Free Agency Account
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <p className="text-white/80 mt-6 text-sm">
            ✓ No credit card required  ✓ Unlimited clients on paid plans  ✓ Cancel anytime
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
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Insydz
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                E-commerce intelligence for high-performance agencies
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => setLocation("/")} className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Home
                </button>
                <button onClick={() => setLocation("/pricing")} className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Agency Pricing
                </button>
                <button onClick={handleGetStarted} className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Login
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>agencies@insydz.com</p>
                <p>+91 98765 43210</p>
                <p>New Delhi, India</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Insydz. All rights reserved. Built for agencies that scale 🚀
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}