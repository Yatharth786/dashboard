


// import { useState, useEffect } from "react";
// import Sidebar from "@/components/layout/sidebar";
// import FiltersPanel from "@/components/dashboard/filters-panel";
// import MetricsCards from "@/components/dashboard/metrics-cards";
// import ChartsGrid from "@/components/dashboard/charts-grid";
// import ProductRankings from "@/components/dashboard/product-rankings";
// import AIRecommendations from "@/components/dashboard/ai-recommendations";
// import Chatbot from "@/components/chatbot/chatbot";
// import { Button } from "@/components/ui/button";
// import { Bell, Filter } from "lucide-react";
// import { FiltersProvider } from "@/components/dashboard/FiltersContext";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// export default function Dashboard() {
//   const [showFilters, setShowFilters] = useState(false);
//   const [notifications, setNotifications] = useState<
//     { id: number; message: string; time: string }[]
//   >([]);
//   const [selectedSource, setSelectedSource] = useState("Amazon_Reviews");

//   const BASE_URL = "http://localhost:8000"; // 🔹 Change if deploying to remote FastAPI

//   // Fetch notifications from FastAPI
//   const fetchNotifications = async (source = selectedSource) => {
//     try {
//       const res = await fetch(`${BASE_URL}/notifications?table=${source}`);
//       const data = await res.json();
//       if (data?.data) {
//         setNotifications(data.data);
//       } else {
//         setNotifications([]);
//       }
//     } catch (error) {
//       console.error("Error fetching notifications:", error);
//     }
//   };

//   useEffect(() => {
//     fetchNotifications();
//     const interval = setInterval(fetchNotifications, 30000); // auto-refresh every 30s
//     return () => clearInterval(interval);
//   }, [selectedSource]);

//   return (
//     <FiltersProvider> {/* ✅ Wrap everything that uses filters */}
//       <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 flex">
//         {/* Sidebar */}
//         <Sidebar />

//         {/* Main Content */}
//         <div className="flex-1 ml-64 min-h-screen flex flex-col">
//           {/* Header Bar */}
//           <header className="bg-white/70 backdrop-blur-xl border border-sky-100 shadow-lg rounded-2xl px-8 py-5 mb-6 flex items-center justify-between sticky top-4 z-20 mx-6">
//             <div>
//               <h2 className="text-2xl font-bold text-sky-900 flex items-center gap-2">Dashboard <span className="w-6 h-4 inline-block"><img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"alt="Indian Flag"className="w-full h-full object-cover"/></span></h2>
//               <p className="text-slate-600 text-sm">
//                 Real-time analytics from your review database
//               </p>
//             </div>

//             <div className="flex items-center space-x-2">
//               {/* Filter Toggle */}
//               <Button
//                 variant="outline"
//                 size="sm"
//                 className="flex items-center gap-1"
//                 onClick={() => setShowFilters((prev) => !prev)}
//               >
//                 <Filter className="w-4 h-4" /> Filters
//               </Button>

//               {/* Select Table Source */}
//               <select
//                 className="border border-slate-300 rounded px-2 py-1 text-sm bg-white/60 backdrop-blur-sm"
//                 value={selectedSource}
//                 onChange={(e) => {
//                   const newSource = e.target.value;
//                   setSelectedSource(newSource);
//                   fetchNotifications(newSource);
//                 }}
//               >
//                 <option value="flipkart">Flipkart</option>
//                 <option value="amazon_reviews">Amazon</option>
//                 <option value="both">All</option>
//               </select>

//               {/* Notifications Dropdown */}
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="ghost" size="sm" className="relative">
//                     <Bell className="w-4 h-4" />
//                     {notifications.length > 0 && (
//                       <span className="absolute top-0 right-0 inline-flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
//                     )}
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent
//                   align="end"
//                   className="w-80 rounded-2xl shadow-lg bg-white/90 backdrop-blur-md"
//                 >
//                   <DropdownMenuLabel className="font-semibold text-slate-800">
//                     Notifications ({selectedSource})
//                   </DropdownMenuLabel>
//                   <DropdownMenuSeparator />
//                   {notifications.length === 0 ? (
//                     <DropdownMenuItem className="text-sm text-slate-500">
//                       No new notifications
//                     </DropdownMenuItem>
//                   ) : (
//                     notifications.map((n) => (
//                       <DropdownMenuItem
//                         key={n.id}
//                         className="flex flex-col items-start py-2 border-b last:border-none border-slate-200"
//                       >
//                         <p className="text-sm truncate w-full text-slate-700">
//                           {n.message}
//                         </p>
//                         <span className="text-xs text-slate-400">{n.time}</span>
//                       </DropdownMenuItem>
//                     ))
//                   )}
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem
//                     onClick={() => setNotifications([])}
//                     className="text-sm text-blue-600 cursor-pointer"
//                   >
//                     Clear all
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//           </header>

//           {/* Filters Panel */}
//           {showFilters && (
//             <div className="px-6 py-4 border border-sky-100 rounded-2xl bg-white/70 backdrop-blur-xl mx-6 mb-6 transition-all duration-300">
//               <FiltersPanel selectedSource={selectedSource} />
//             </div>
//           )}

//           {/* Dashboard Main Section */}
//           <main className="px-6 space-y-6 flex-1 overflow-y-auto">
//             <MetricsCards selectedSource={selectedSource} />
//             <ChartsGrid selectedSource={selectedSource} />
//             <AIRecommendations selectedSource={selectedSource} />
//             <ProductRankings selectedSource={selectedSource} />
//           </main>
//         </div>

//         {/* Floating Chatbot */}
//         <Chatbot />
//       </div>
//     </FiltersProvider>
//   );
// }

import { useState, useEffect } from "react";
import Sidebar from "@/components/layout/sidebar";
import FiltersPanel from "@/components/dashboard/filters-panel";
import MetricsCards from "@/components/dashboard/metrics-cards";
import ChartsGrid from "@/components/dashboard/charts-grid";
import ProductRankings from "@/components/dashboard/product-rankings";
import AIRecommendations from "@/components/dashboard/ai-recommendations";
import Chatbot from "@/components/chatbot/chatbot";
import { Button } from "@/components/ui/button";
import { Bell, Filter } from "lucide-react";
import { FiltersProvider, useFilters } from "@/components/dashboard/FiltersContext"; // ✅ import useFilters
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// ✅ Wrap dashboard content inside FiltersProvider for global filter access
function DashboardContent() {
  const [showFilters, setShowFilters] = useState(false);
  const [notifications, setNotifications] = useState<
    { id: number; message: string; time: string }[]
  >([]);
  const [selectedSource, setSelectedSource] = useState("amazon_reviews"); // ✅ consistent lowercase

  const { filters, setFilters } = useFilters(); // ✅ get global filters context
  const BASE_URL = "http://localhost:8000"; // ⚙️ your FastAPI base URL

  // 🔹 Fetch notifications from FastAPI
  const fetchNotifications = async (source = selectedSource) => {
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
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 30000); // Auto-refresh every 30s
    return () => clearInterval(interval);
  }, [selectedSource]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* Header Bar */}
        <header className="bg-white/70 backdrop-blur-xl border border-sky-100 shadow-lg rounded-2xl px-8 py-5 mb-6 flex items-center justify-between sticky top-4 z-20 mx-6">
          <div>
            <h2 className="text-2xl font-bold text-sky-900 flex items-center gap-2">
              Dashboard{" "}
              <span className="w-6 h-4 inline-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                  alt="Indian Flag"
                  className="w-full h-full object-cover"
                />
              </span>
            </h2>
            <p className="text-slate-600 text-sm">
              Real-time analytics from your review database
            </p>
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center space-x-2">
            {/* Filter Toggle */}
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
              onClick={() => setShowFilters((prev) => !prev)}
            >
              <Filter className="w-4 h-4" /> Filters
            </Button>

            {/* Select Data Source */}
            <select
              className="border border-slate-300 rounded px-2 py-1 text-sm bg-white/60 backdrop-blur-sm"
              value={selectedSource}
              onChange={(e) => {
                const newSource = e.target.value;
                setSelectedSource(newSource);
                setFilters({ ...filters, table: newSource }); // ✅ sync with FiltersContext
                fetchNotifications(newSource);
              }}
            >
              <option value="flipkart">Flipkart</option>
              <option value="amazon_reviews">Amazon</option>
              <option value="both">All</option>
            </select>

            {/* Notifications Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="w-4 h-4" />
                  {notifications.length > 0 && (
                    <span className="absolute top-0 right-0 inline-flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                  )}
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-80 rounded-2xl shadow-lg bg-white/90 backdrop-blur-md"
              >
                <DropdownMenuLabel className="font-semibold text-slate-800">
                  Notifications ({selectedSource})
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                {notifications.length === 0 ? (
                  <DropdownMenuItem className="text-sm text-slate-500">
                    No new notifications
                  </DropdownMenuItem>
                ) : (
                  notifications.map((n) => (
                    <DropdownMenuItem
                      key={n.id}
                      className="flex flex-col items-start py-2 border-b last:border-none border-slate-200"
                    >
                      <p className="text-sm truncate w-full text-slate-700">
                        {n.message}
                      </p>
                      <span className="text-xs text-slate-400">{n.time}</span>
                    </DropdownMenuItem>
                  ))
                )}

                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => setNotifications([])}
                  className="text-sm text-blue-600 cursor-pointer"
                >
                  Clear all
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Filters Panel */}
        {showFilters && (
          <div className="px-6 py-4 border border-sky-100 rounded-2xl bg-white/70 backdrop-blur-xl mx-6 mb-6 transition-all duration-300">
            <FiltersPanel selectedSource={selectedSource} />
          </div>
        )}

        {/* Dashboard Main Section */}
        <main className="px-6 space-y-6 flex-1 overflow-y-auto">
          <MetricsCards selectedSource={selectedSource} />
          <ChartsGrid selectedSource={selectedSource} />
          <AIRecommendations selectedSource={selectedSource} />
          <ProductRankings selectedSource={selectedSource} />
        </main>
      </div>

      {/* Floating Chatbot */}
      <Chatbot />
    </div>
  );
}

// ✅ Wrap everything with FiltersProvider for global state
export default function Dashboard() {
  return (
    <FiltersProvider>
      <DashboardContent />
    </FiltersProvider>
  );
}
