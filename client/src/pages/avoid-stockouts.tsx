import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { ArrowRight, Package, AlertCircle, TrendingUp, ChevronRight, Bell, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AvoidStockoutsPage() {
  const [, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "bg-white/95 backdrop-blur-xl border-b border-red-200 shadow-lg" : "bg-white/80 backdrop-blur-md border-b border-red-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setLocation("/")}>
              <img src="/logo.png" alt="Insydz" className="w-12 h-12 rounded-2xl shadow-lg object-contain" />
              <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Insydz</span>
            </div>
            <div className="flex items-center gap-4">
              <Button onClick={() => setLocation("/")} variant="ghost">← Back</Button>
              <Button onClick={() => setLocation("/login")} className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full">Start Free</Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                Never Run Out of Stock <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">& Miss Sales Again</span>
              </h1>
              <p className="text-xl text-gray-700">Insydz predicts when you'll run out of stock and alerts you before it's too late — <span className="text-red-700 font-semibold">so you never lose sales to stockouts.</span></p>
              <Button onClick={() => setLocation("/login")} size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl group">
                👉 Prevent Stockouts Free <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="bg-white border-2 border-red-200 rounded-3xl p-8 shadow-2xl">
              <h3 className="font-bold text-gray-900 mb-4">Inventory Alerts</h3>
              <div className="space-y-4">
                <div className="bg-red-50 border-2 border-red-400 rounded-xl p-4 animate-pulse">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Critical Stock Alert</p>
                      <p className="text-sm text-gray-700">Premium Earbuds - Only 12 units left</p>
                      <p className="text-xs text-red-600 font-semibold mt-1">Will run out in 3 days at current sales rate</p>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Low Stock Warning</p>
                      <p className="text-sm text-gray-700">Smart Watch - 45 units remaining</p>
                      <p className="text-xs text-yellow-600 font-semibold mt-1">Restock in 7 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-12">Why Stockouts <span className="text-red-600">Kill Your Business</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Lost sales & revenue", icon: <TrendingUp /> },
              { title: "Rankings drop instantly", icon: <AlertCircle /> },
              { title: "Customers buy from competitors", icon: <Package /> }
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
          <h2 className="text-4xl font-black text-center mb-12">How Stock Monitoring Works <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">with Insydz</span></h2>
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { step: "1", title: "Connect Inventory", desc: "Link your Amazon & Flipkart inventory automatically" },
              { step: "2", title: "AI Predicts Stockouts", desc: "We calculate when you'll run out based on sales velocity" },
              { step: "3", title: "Get Early Alerts", desc: "Receive WhatsApp alerts days before you run out" }
            ].map((s, i) => (
              <div key={i} className="bg-white border-2 border-red-300 rounded-3xl p-8 text-center shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white">{s.step}</div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-700">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button onClick={() => setLocation("/login")} size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold px-12 py-6 rounded-full shadow-2xl">
              👉 Never Miss Sales Again <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">Stop Losing Sales to Stockouts. <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Stay Ahead.</span></h2>
          <Button onClick={() => setLocation("/login")} size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold px-12 py-6 rounded-full shadow-2xl">
            👉 Prevent Stockouts Free <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      <footer className="bg-gray-900 py-12 text-center">
        <p className="text-gray-500 text-sm">© 2025 Insydz. 🇮🇳</p>
      </footer>
    </div>
  );
}