

import { useState, useEffect } from "react";
import Sidebar from "@/components/layout/sidebar";
import FiltersPanel from "@/components/dashboard/filters-panel";
import MetricsCards from "@/components/dashboard/metrics-cards";
import ChartsGrid from "@/components/dashboard/charts-grid";
import ProductRankings from "@/components/dashboard/product-rankings";
import AIRecommendations from "@/components/dashboard/ai-recommendations";
import Chatbot from "@/components/chatbot/chatbot";
import { Button } from "@/components/ui/button";
import { Bell, Filter, Menu, X } from "lucide-react";
import { FiltersProvider, useFilters } from "@/components/dashboard/FiltersContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function DashboardContent() {
  const [showFilters, setShowFilters] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState<
    { id: number; message: string; time: string }[]
  >([]);

  const { filters, setFilters } = useFilters();
  const BASE_URL = "http://localhost:8000";

  const selectedSource = filters.table || "amazon";

  const fetchNotifications = async (source: string) => {
    try {
      const res = await fetch(`${BASE_URL}/notifications?table=${source}`);
      const data = await res.json();
      if (data?.data) setNotifications(data.data);
      else setNotifications([]);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  useEffect(() => {
    fetchNotifications(selectedSource);
    const interval = setInterval(() => fetchNotifications(selectedSource), 30000);
    return () => clearInterval(interval);
  }, [selectedSource]);

  const handleSourceChange = (newSource: string) => {
    setFilters({ ...filters, table: newSource });
    fetchNotifications(newSource);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 flex flex-col lg:flex-row">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 w-64 bg-white z-50 lg:hidden transform transition-transform shadow-2xl">
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <Sidebar />
          </aside>
        </>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block lg:w-64 fixed h-full z-30">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 w-full lg:ml-64 min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white/70 backdrop-blur-xl border border-sky-100 shadow-lg 
          rounded-none sm:rounded-2xl 
          px-4 sm:px-6 lg:px-8 
          py-4 sm:py-5 
          mb-4 sm:mb-6 
          flex flex-col sm:flex-row items-start sm:items-center 
          justify-between gap-4 sm:gap-0 
          sticky top-0 sm:top-4 
          z-20 mx-0 sm:mx-6">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-sky-100 transition-colors"
            >
              <Menu className="w-5 h-5 text-sky-900" />
            </button>

            <div className="flex-1 sm:flex-none">
              <h2 className="text-xl sm:text-2xl font-bold text-sky-900 flex items-center gap-2">
                Dashboard{" "}
                <span className="w-5 h-3 sm:w-6 sm:h-4 inline-block">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                    alt="Indian Flag"
                    className="w-full h-full object-cover"
                  />
                </span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Real-time analytics from your review database
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 sm:flex-none flex items-center justify-center gap-1 text-xs sm:text-sm"
              onClick={() => setShowFilters((prev) => !prev)}
            >
              <Filter className="w-3 h-3 sm:w-4 sm:h-4" /> 
              <span className="hidden sm:inline">Filters</span>
              <span className="sm:hidden">Filter</span>
            </Button>

            <select
              className="flex-1 sm:flex-none border border-slate-300 rounded px-2 py-1 text-xs sm:text-sm bg-white/60 backdrop-blur-sm"
              value={selectedSource}
              onChange={(e) => handleSourceChange(e.target.value)}
            >
              <option value="flipkart">Flipkart</option>
              <option value="amazon">Amazon</option>
              <option value="both">All</option>
            </select>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="w-3 h-3 sm:w-4 sm:h-4" />
                  {notifications.length > 0 && (
                    <span className="absolute top-0 right-0 inline-flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                  )}
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-72 sm:w-80 rounded-2xl shadow-lg bg-white/90 backdrop-blur-md"
              >
                <DropdownMenuLabel className="font-semibold text-slate-800 text-sm">
                  Notifications ({selectedSource})
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                {notifications.length === 0 ? (
                  <DropdownMenuItem className="text-xs sm:text-sm text-slate-500">
                    No new notifications
                  </DropdownMenuItem>
                ) : (
                  notifications.map((n) => (
                    <DropdownMenuItem
                      key={n.id}
                      className="flex flex-col items-start py-2 border-b last:border-none border-slate-200"
                    >
                      <p className="text-xs sm:text-sm truncate w-full text-slate-700">
                        {n.message}
                      </p>
                      <span className="text-xs text-slate-400">{n.time}</span>
                    </DropdownMenuItem>
                  ))
                )}

                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => setNotifications([])}
                  className="text-xs sm:text-sm text-blue-600 cursor-pointer"
                >
                  Clear all
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Filters Panel */}
        {showFilters && (
          <div className="px-4 sm:px-6 py-4 border border-sky-100 rounded-xl sm:rounded-2xl 
            bg-white/70 backdrop-blur-xl mx-4 sm:mx-6 mb-4 sm:mb-6 transition-all duration-300"> 
            <FiltersPanel selectedSource={selectedSource} />
          </div>
        )}

        {/* Main Content */}
        <main className="px-4 sm:px-6 space-y-4 sm:space-y-6 flex-1 overflow-y-auto pb-6">
          <MetricsCards selectedSource={selectedSource} />
          <ChartsGrid selectedSource={selectedSource} />
          <AIRecommendations selectedSource={selectedSource} />
          <ProductRankings selectedSource={selectedSource} />
        </main>
      </div>

      {/* Chatbot - Hidden on very small screens */}
      <div className="hidden sm:block">
        <Chatbot />
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <FiltersProvider>
      <DashboardContent />
    </FiltersProvider>
  );
}

