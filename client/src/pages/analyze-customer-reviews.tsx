import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { 
  ArrowRight, CheckCircle2, Target, Zap, 
  Bell, TrendingUp, MessageCircle, Search,
  ChevronRight, Star, AlertCircle, ChevronDown,
  ThumbsUp, ThumbsDown, Award, TrendingDown, Heart, Frown
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AnalyzeCustomerReviewsPage() {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-xl border-b border-purple-200 shadow-lg" : "bg-white/80 backdrop-blur-md border-b border-purple-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => setLocation("/")}>
              <div className="relative">
                <img src="/logo.png" alt="Insydz Logo" className="w-12 h-12 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 object-contain" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
            </div>
            <div className="flex items-center gap-4">
              <Button onClick={() => setLocation("/")} variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">← Back to Home</Button>
              <Button onClick={handleGetStarted} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all">Start Free</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                Turn Customer Reviews Into
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">Actionable Insights</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Insydz analyzes thousands of reviews with AI to show you what customers really want — 
                <span className="text-purple-700 font-semibold"> so you can improve products, fix issues, and boost ratings.</span>
              </p>
              <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all group">
                👉 Analyze Reviews Free <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative bg-white border-2 border-purple-200 rounded-3xl p-8 shadow-2xl">
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 mb-4">Review Sentiment Analysis</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 border border-green-200 rounded-xl">
                    <ThumbsUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">68%</div>
                    <div className="text-xs text-gray-600">Positive</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <Heart className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-yellow-600">22%</div>
                    <div className="text-xs text-gray-600">Neutral</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 border border-red-200 rounded-xl">
                    <ThumbsDown className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-red-600">10%</div>
                    <div className="text-xs text-gray-600">Negative</div>
                  </div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mt-4">
                  <p className="text-sm font-bold text-gray-900 mb-2">Top Complaint:</p>
                  <p className="text-sm text-gray-700">"Packaging could be better" - mentioned in 342 reviews</p>
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
              Why Reading Reviews Manually <span className="text-red-600">Is Impossible</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: <MessageCircle />, title: "Thousands of reviews to read", color: "from-red-500 to-orange-500" },
              { icon: <TrendingDown />, title: "Critical issues buried in noise", color: "from-orange-500 to-yellow-500" },
              { icon: <Search />, title: "No way to spot patterns", color: "from-purple-500 to-pink-500" },
              { icon: <AlertCircle />, title: "Competitors learn faster", color: "from-pink-500 to-red-500" }
            ].map((pain, i) => (
              <div key={i} className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-400 hover:shadow-lg transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${pain.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-md`}>
                  {pain.icon}
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{pain.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              How Review Analysis Works <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">with Insydz</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { step: "1", title: "Connect Your Products", desc: "Add your Amazon & Flipkart products. We pull all reviews automatically.", icon: <Target /> },
              { step: "2", title: "AI Analyzes Everything", desc: "Our AI reads every review, identifies sentiment, complaints, and patterns.", icon: <Zap /> },
              { step: "3", title: "Get Clear Insights", desc: "See what customers love, hate, and want improved in simple dashboards.", icon: <Award /> }
            ].map((item, i) => (
              <div key={i} className="bg-white border-2 border-purple-300 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white shadow-lg">{item.step}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group">
              👉 Analyze Your First Product Free <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
            Stop Guessing What Customers Want. <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Know for Sure.</span>
          </h2>
          <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group">
            👉 Analyze Reviews Free <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">© 2025 Insydz. All rights reserved. 🇮🇳</p>
        </div>
      </footer>
    </div>
  );
}