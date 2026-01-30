import { useState } from "react";
import { useLocation } from "wouter";
import { ArrowRight, Bell, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppAlertsFeaturePage() {
  const [, setLocation] = useLocation();
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-green-200">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setLocation("/")}>
            <img src="/logo.png" alt="Insydz" className="w-12 h-12 rounded-2xl" />
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Insydz</span>
          </div>
          <Button onClick={() => setLocation("/login")} className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full">Start Free</Button>
        </div>
      </nav>
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-black mb-6">WhatsApp Alerts — <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Get Notified</span> Where You Actually Look</h1>
          <p className="text-xl text-gray-700 mb-8">Instant WhatsApp alerts for price changes, stockouts, reviews, and more — because you don't check emails.</p>
          <Button onClick={() => setLocation("/login")} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold px-12 py-6 rounded-full shadow-2xl">
            👉 Enable WhatsApp Alerts Free <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
      <footer className="bg-gray-900 py-12 text-center">
        <p className="text-gray-500 text-sm">© 2025 Insydz. 🇮🇳</p>
      </footer>
    </div>
  );
}