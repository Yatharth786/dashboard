import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { ArrowRight, CheckCircle2, Search, TrendingUp, ChevronRight, Award, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ImproveSEOPage() {
  const [, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-xl border-b border-green-200 shadow-lg" : "bg-white/80 backdrop-blur-md border-b border-green-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setLocation("/")}>
              <img src="/logo.png" alt="Insydz" className="w-12 h-12 rounded-2xl shadow-lg object-contain" />
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Insydz</span>
            </div>
            <div className="flex items-center gap-4">
              <Button onClick={() => setLocation("/")} variant="ghost">← Back</Button>
              <Button onClick={() => setLocation("/login")} className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full">Start Free</Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                Rank Higher on Amazon & Flipkart <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">With Smart SEO</span>
              </h1>
              <p className="text-xl text-gray-700">Insydz shows you exactly which keywords to target, how to optimize listings, and where you rank — <span className="text-green-700 font-semibold">so more customers find your products.</span></p>
              <Button onClick={() => setLocation("/login")} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl group">
                👉 Improve Your SEO Free <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="bg-white border-2 border-green-200 rounded-3xl p-8 shadow-2xl">
              <h3 className="font-bold text-gray-900 mb-4">Keyword Performance</h3>
              <div className="space-y-3">
                {[
                  { keyword: "wireless earbuds", rank: "#8", searches: "45K/mo", trend: "↑" },
                  { keyword: "bluetooth headphones", rank: "#15", searches: "32K/mo", trend: "↑" },
                  { keyword: "noise cancelling", rank: "#23", searches: "28K/mo", trend: "↓" }
                ].map((kw, i) => (
                  <div key={i} className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm text-gray-900">{kw.keyword}</p>
                      <p className="text-xs text-gray-600">{kw.searches} searches</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">{kw.rank}</p>
                      <p className="text-lg">{kw.trend}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-12 text-gray-900">Why Your Products <span className="text-red-600">Don't Rank</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Wrong keywords in titles", icon: <Search /> },
              { title: "Competitors outrank you", icon: <TrendingUp /> },
              { title: "No tracking = no improvement", icon: <Target /> }
            ].map((p, i) => (
              <div key={i} className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 text-white mx-auto">{p.icon}</div>
                <p className="font-bold text-gray-900">{p.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">How SEO Optimization Works <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">with Insydz</span></h2>
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { step: "1", title: "Find High-Value Keywords", desc: "Discover what customers actually search for" },
              { step: "2", title: "Track Your Rankings", desc: "Monitor where you rank vs competitors" },
              { step: "3", title: "Optimize & Improve", desc: "Get specific recommendations to rank higher" }
            ].map((s, i) => (
              <div key={i} className="bg-white border-2 border-green-300 rounded-3xl p-8 text-center shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white">{s.step}</div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-700">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button onClick={() => setLocation("/login")} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold px-12 py-6 rounded-full shadow-2xl">
              👉 Start Ranking Higher Free <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">Stop Being Invisible. <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Get Found.</span></h2>
          <Button onClick={() => setLocation("/login")} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold px-12 py-6 rounded-full shadow-2xl">
            👉 Improve SEO Free <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      <footer className="bg-gray-900 py-12 text-center">
        <p className="text-gray-500 text-sm">© 2025 Insydz. 🇮🇳</p>
      </footer>
    </div>
  );
}