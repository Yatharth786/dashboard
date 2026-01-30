// import { useState, useEffect } from "react";
// import { useLocation } from "wouter";
// import { ArrowRight, CheckCircle2, MessageCircle, ThumbsUp, ThumbsDown, TrendingUp, Star, Heart, ChevronDown, Sparkles } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function ReviewAnalyticsFeaturePage() {
//   const [, setLocation] = useLocation();
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-white">
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "bg-white/95 backdrop-blur-xl border-b border-purple-200 shadow-lg" : "bg-white/80 backdrop-blur-md border-b border-purple-100"}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setLocation("/")}>
//               <img src="/logo.png" alt="Insydz" className="w-12 h-12 rounded-2xl shadow-lg object-contain" />
//               <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <Button onClick={() => setLocation("/")} variant="ghost">← Back</Button>
//               <Button onClick={() => setLocation("/login")} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full">Start Free</Button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50">
//         <div className="relative max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
//                 Review Analytics —
//                 <br />
//                 <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Understand Customers</span>
//                 <br />
//                 Without Reading 1000s of Reviews
//               </h1>
//               <p className="text-xl text-gray-700">AI analyzes every review to show you what customers love, hate, and want improved — <span className="text-purple-700 font-semibold">so you can fix issues before ratings drop.</span></p>
//               <Button onClick={() => setLocation("/login")} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl group">
//                 👉 Start Free Review Analysis <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </div>
//             <div className="bg-white border-2 border-purple-200 rounded-3xl p-8 shadow-2xl">
//               <h3 className="font-bold text-gray-900 mb-4">Sentiment Analysis</h3>
//               <div className="grid grid-cols-3 gap-4 mb-6">
//                 {[
//                   { label: "Positive", value: "68%", icon: <ThumbsUp />, color: "green" },
//                   { label: "Neutral", value: "22%", icon: <Heart />, color: "yellow" },
//                   { label: "Negative", value: "10%", icon: <ThumbsDown />, color: "red" }
//                 ].map((s, i) => (
//                   <div key={i} className={`text-center p-4 bg-${s.color}-50 border border-${s.color}-200 rounded-xl`}>
//                     <div className={`w-8 h-8 text-${s.color}-600 mx-auto mb-2`}>{s.icon}</div>
//                     <div className={`text-2xl font-bold text-${s.color}-600`}>{s.value}</div>
//                     <div className="text-xs text-gray-600">{s.label}</div>
//                   </div>
//                 ))}
//               </div>
//               <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
//                 <p className="text-sm font-bold text-gray-900 mb-2">Top Issue:</p>
//                 <p className="text-sm text-gray-700">"Packaging quality" - mentioned 342 times</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 px-4 bg-white text-center">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-black mb-6">Stop Losing Sales to <span className="text-red-600">Ignored Feedback</span></h2>
//           <p className="text-xl text-gray-700 mb-8">Thousands of reviews hide critical insights. AI finds them for you.</p>
//           <Button onClick={() => setLocation("/login")} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-12 py-6 rounded-full shadow-2xl">
//             👉 Analyze Reviews Free
//           </Button>
//         </div>
//       </section>

//       <footer className="bg-gray-900 py-12 text-center">
//         <p className="text-gray-500 text-sm">© 2025 Insydz. 🇮🇳</p>
//       </footer>
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { 
  ArrowRight, CheckCircle2, MessageCircle, ThumbsUp, ThumbsDown, 
  TrendingUp, Star, Heart, ChevronDown, Sparkles, Eye, Bell, Clock, Target 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ReviewAnalyticsFeaturePage() {
  const [, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetStarted = () => setLocation("/login");
  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const faqs = [
    { question: "How does AI analyze reviews?", answer: "Our AI uses NLP to extract sentiments, key complaints, and praise from every review." },
    { question: "Can I track multiple products at once?", answer: "Yes, track all your listings in one dashboard for instant insights." },
    { question: "Does it work for Amazon India & Flipkart?", answer: "Absolutely! Both marketplaces are fully supported." },
    { question: "Can I get alerts for negative trends?", answer: "Yes, you receive instant notifications for negative reviews or low ratings." },
    { question: "Is there a free plan?", answer: "Yes, our free plan includes basic review analysis for limited products." },
    { question: "Can I export insights?", answer: "Yes, you can export summaries and charts for reporting or team sharing." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-purple-200 shadow-lg"
          : "bg-white/80 backdrop-blur-md border-b border-purple-100"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setLocation("/")}>
              <img src="/logo.png" alt="Insydz Logo" className="w-12 h-12 rounded-2xl shadow-lg object-contain" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insydz</span>
            </div>
            <div className="flex items-center gap-4">
              <Button onClick={() => setLocation("/")} variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">← Back to Home</Button>
              <Button onClick={handleGetStarted} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg">Start Free</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                Review Analytics —
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Understand Customers</span>
                <br />
                Without Reading 1000s of Reviews
              </h1>
              <p className="text-xl text-gray-700">
                AI analyzes every review to show you what customers love, hate, and want improved — 
                <span className="text-purple-700 font-semibold"> so you can fix issues before ratings drop.</span>
              </p>
              <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl group">
                👉 Start Free Review Analysis <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Hero Visual */}
            <div className="bg-white border-2 border-purple-200 rounded-3xl p-8 shadow-2xl">
              <h3 className="font-bold text-gray-900 mb-4">Sentiment Analysis</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Positive", value: "68%", icon: <ThumbsUp className="w-6 h-6 text-green-600 mx-auto"/>, color: "green" },
                  { label: "Neutral", value: "22%", icon: <Heart className="w-6 h-6 text-yellow-500 mx-auto"/>, color: "yellow" },
                  { label: "Negative", value: "10%", icon: <ThumbsDown className="w-6 h-6 text-red-600 mx-auto"/>, color: "red" }
                ].map((s, i) => (
                  <div key={i} className={`text-center p-4 bg-${s.color}-50 border border-${s.color}-200 rounded-xl`}>
                    {s.icon}
                    <p className="mt-2 font-semibold text-gray-900">{s.label}</p>
                    <p className={`text-${s.color}-600 font-bold text-lg`}>{s.value}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-2xl p-4 text-center">
                <MessageCircle className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <p className="text-gray-900 font-semibold">Customer Highlight</p>
                <p className="text-sm text-gray-600">"Great quality but packaging could improve."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900">Why Sellers Miss Key Insights</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: <Clock className="w-8 h-8"/>, title: "Manually reading 1000s of reviews" },
            { icon: <ThumbsDown className="w-8 h-8"/>, title: "Negative trends are missed" },
            { icon: <TrendingUp className="w-8 h-8"/>, title: "Opportunity to improve ratings is delayed" },
            { icon: <Star className="w-8 h-8"/>, title: "Poor prioritization of improvements" }
          ].map((item,i)=>(
            <div key={i} className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-400 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4 text-white shadow-md">{item.icon}</div>
              <p className="text-gray-700 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Depth */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Built for Smart Review Intelligence</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { feature: "Real-Time Sentiment Analysis", benefit: "Identify negative trends immediately", icon: <Eye className="w-8 h-8"/>, color: "from-purple-600 to-pink-600" },
            { feature: "Customer Highlight Extraction", benefit: "See key points at a glance", icon: <Sparkles className="w-8 h-8"/>, color: "from-indigo-500 to-purple-500" },
            { feature: "Automated Alerts", benefit: "Never miss critical feedback", icon: <Bell className="w-8 h-8"/>, color: "from-red-500 to-pink-500" }
          ].map((item,i)=>(
            <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-400 hover:shadow-xl transition-all">
              <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}>{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.feature}</h3>
              <p className="text-gray-600 flex items-center gap-2"><ArrowRight className="w-4 h-4 text-purple-600"/>{item.benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Review Analytics – FAQs</h2>
        </div>
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq,i)=>(
            <div key={i} className="bg-gray-50 border-2 border-gray-200 rounded-xl overflow-hidden hover:border-purple-400 transition-all">
              <button className="w-full px-6 py-4 flex items-center justify-between text-left" onClick={()=>toggleFaq(i)}>
                <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-purple-600 transition-transform ${openFaq===i?'rotate-180':''}`} />
              </button>
              {openFaq===i && <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
            Stop Guessing Customer Feedback.
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Act Before Ratings Drop</span>
          </h2>
          <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl group">
            👉 Start Free Review Analysis <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">© 2025 Insydz. All rights reserved. Built for Indian sellers 🇮🇳</p>
        </div>
      </footer>
    </div>
  );
}
