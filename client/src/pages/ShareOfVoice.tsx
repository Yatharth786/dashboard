
// import { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import Sidebar from "@/components/layout/sidebar";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import {
//   TrendingUp,
//   Target,
//   BarChart3,
//   Search,
//   RefreshCw,
//   AlertCircle,
//   CheckCircle,
//   Users,
//   Award,
//   TrendingDown,
//   Filter,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import {
//   BarChart,
//   Bar,
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// interface BrandShareData {
//   brand: string;
//   share_percentage: number;
//   total_reviews: number;
//   total_sales: number;
//   avg_rating: number | null;
//   avg_price: number | null;
//   product_count: number;
// }

// interface CategorySOVResponse {
//   category_name: string;
//   total_products: number;
//   total_reviews: number;
//   total_sales: number;
//   brands: BrandShareData[];
//   your_brand_share: number | null;
//   market_leader: string | null;
//   marketplace: string;
// }

// interface ProgressTrackingData {
//   date: string;
//   share_percentage: number;
//   reviews: number;
//   sales: number;
// }

// interface ProgressTrackingResponse {
//   category_name: string;
//   your_brand: string;
//   current_share: number;
//   target_share: number;
//   start_date: string;
//   target_date: string;
//   days_elapsed: number;
//   days_remaining: number;
//   is_on_track: boolean;
//   required_growth_rate: number;
//   actual_growth_rate: number;
//   weekly_progress: ProgressTrackingData[];
// }

// interface CompetitorAnalysis {
//   competitor_name: string;
//   market_share: number;
//   avg_price: number;
//   total_products: number;
//   avg_rating: number | null;
//   total_reviews: number;
//   total_sales: number;
// }

// interface KeywordSOVResponse {
//   keyword: string;
//   total_products: number;
//   total_reviews: number;
//   brands: BrandShareData[];
//   price_range: {
//     min: number;
//     max: number;
//   };
//   marketplace: string;
// }

// export default function ShareOfVoice() {
//   const [categories, setCategories] = useState<string[]>([]);
//   const [brands, setBrands] = useState<string[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [marketplace, setMarketplace] = useState<"flipkart" | "amazon">("flipkart");
//   const [yourBrand, setYourBrand] = useState("");
//   const [sovData, setSovData] = useState<CategorySOVResponse | null>(null);
//   const [progressData, setProgressData] = useState<ProgressTrackingResponse | null>(null);
//   const [competitors, setCompetitors] = useState<CompetitorAnalysis[]>([]);
//   const [keywordSearch, setKeywordSearch] = useState("");
//   const [keywordData, setKeywordData] = useState<KeywordSOVResponse | null>(null);
//   const [targetShare, setTargetShare] = useState(20);
//   const [targetDays, setTargetDays] = useState(90);
//   const [priceMin, setPriceMin] = useState("");
//   const [priceMax, setPriceMax] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [activeTab, setActiveTab] = useState<"category" | "keyword">("category");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Pagination states
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(10);
//   const [competitorPage, setCompetitorPage] = useState(1);
//   const [competitorsPerPage] = useState(6);

//   // AI Insights state
//   const [aiInsights, setAiInsights] = useState<any>(null);
//   const [loadingInsights, setLoadingInsights] = useState(false);

//   const API_BASE_URL = "http://localhost:8000";
//   const COLORS = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899", "#14b8a6", "#f97316"];

//   useEffect(() => {
//     fetchCategories();
//     fetchBrands();
//   }, [marketplace]);

//   // Reset pagination when data changes
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [sovData, keywordData]);

//   useEffect(() => {
//     setCompetitorPage(1);
//   }, [competitors]);

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/sov/categories?marketplace=${marketplace}`);
//       if (response.data.categories) {
//         setCategories(response.data.categories);
//       }
//     } catch (err) {
//       console.error("Error fetching categories:", err);
//     }
//   };

//   const fetchBrands = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/sov/brands?marketplace=${marketplace}`);
//       if (response.data.brands) {
//         setBrands(response.data.brands);
//       }
//     } catch (err) {
//       console.error("Error fetching brands:", err);
//     }
//   };

//   const analyzeCategorySov = async () => {
//     if (!selectedCategory) {
//       setError("Please select a category");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     setSovData(null);
//     setProgressData(null);
//     setCompetitors([]);

//     try {
//       const url = `${API_BASE_URL}/sov/category/${encodeURIComponent(selectedCategory)}?marketplace=${marketplace}${
//         yourBrand ? `&your_brand=${encodeURIComponent(yourBrand)}` : ""
//       }`;
//       const response = await axios.get(url);

//       if (response.data.error) {
//         setError(response.data.error);
//       } else {
//         setSovData(response.data);

//         if (yourBrand && response.data.your_brand_share !== null) {
//           await fetchCompetitors();
//           await fetchProgress();
//           await fetchAIInsights();
//         }
//       }
//     } catch (err) {
//       setError("Failed to fetch SOV data");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const analyzeKeywordSov = async () => {
//     if (!keywordSearch) {
//       setError("Please enter a keyword");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     setKeywordData(null);

//     try {
//       let url = `${API_BASE_URL}/sov/keyword/${encodeURIComponent(keywordSearch)}?marketplace=${marketplace}`;
//       if (priceMin) url += `&price_min=${priceMin}`;
//       if (priceMax) url += `&price_max=${priceMax}`;

//       const response = await axios.get(url);

//       if (response.data.error) {
//         setError(response.data.error);
//       } else {
//         setKeywordData(response.data);
//       }
//     } catch (err) {
//       setError("Failed to fetch keyword SOV data");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchCompetitors = async () => {
//     try {
//       const url = `${API_BASE_URL}/sov/competitors/${encodeURIComponent(selectedCategory)}?your_brand=${encodeURIComponent(
//         yourBrand
//       )}&marketplace=${marketplace}&limit=20`;
//       const response = await axios.get(url);

//       if (response.data.competitors) {
//         setCompetitors(response.data.competitors);
//       }
//     } catch (err) {
//       console.error("Error fetching competitors:", err);
//     }
//   };

//   const fetchProgress = async () => {
//     try {
//       const url = `${API_BASE_URL}/sov/progress/${encodeURIComponent(
//         selectedCategory
//       )}?your_brand=${encodeURIComponent(yourBrand)}&target_share=${targetShare}&target_days=${targetDays}&marketplace=${marketplace}`;
//       const response = await axios.get(url);

//       if (!response.data.error) {
//         setProgressData(response.data);
//       }
//     } catch (err) {
//       console.error("Error fetching progress:", err);
//     }
//   };

//   const fetchAIInsights = async () => {
//     if (!yourBrand || !selectedCategory) return;
    
//     setLoadingInsights(true);
//     try {
//       const url = `${API_BASE_URL}/sov/ai-insights?category_name=${encodeURIComponent(
//         selectedCategory
//       )}&your_brand=${encodeURIComponent(yourBrand)}&target_share=${targetShare}&target_days=${targetDays}&marketplace=${marketplace}`;
//       const response = await axios.post(url);

//       if (!response.data.error) {
//         setAiInsights(response.data);
//       }
//     } catch (err) {
//       console.error("Error fetching AI insights:", err);
//     } finally {
//       setLoadingInsights(false);
//     }
//   };

//   // Pagination logic for main table
//   const paginatedBrands = useMemo(() => {
//     const brands = activeTab === "category" ? sovData?.brands || [] : keywordData?.brands || [];
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     return brands.slice(indexOfFirstItem, indexOfLastItem);
//   }, [sovData, keywordData, currentPage, itemsPerPage, activeTab]);

//   const totalPages = useMemo(() => {
//     const brands = activeTab === "category" ? sovData?.brands || [] : keywordData?.brands || [];
//     return Math.ceil(brands.length / itemsPerPage);
//   }, [sovData, keywordData, itemsPerPage, activeTab]);

//   // Pagination logic for competitors
//   const paginatedCompetitors = useMemo(() => {
//     const indexOfLastItem = competitorPage * competitorsPerPage;
//     const indexOfFirstItem = indexOfLastItem - competitorsPerPage;
//     return competitors.slice(indexOfFirstItem, indexOfLastItem);
//   }, [competitors, competitorPage, competitorsPerPage]);

//   const totalCompetitorPages = useMemo(() => {
//     return Math.ceil(competitors.length / competitorsPerPage);
//   }, [competitors, competitorsPerPage]);

//   const handlePageChange = (newPage: number) => {
//     setCurrentPage(newPage);
//     // Smooth scroll to table
//     const tableElement = document.getElementById('brands-table');
//     if (tableElement) {
//       tableElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   const handleCompetitorPageChange = (newPage: number) => {
//     setCompetitorPage(newPage);
//     const competitorElement = document.getElementById('competitor-section');
//     if (competitorElement) {
//       competitorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   const Pagination = ({ currentPage, totalPages, onPageChange }: { currentPage: number; totalPages: number; onPageChange: (page: number) => void }) => {
//     const pageNumbers = [];
//     const maxVisiblePages = 5;
    
//     let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
//     let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
//     if (endPage - startPage < maxVisiblePages - 1) {
//       startPage = Math.max(1, endPage - maxVisiblePages + 1);
//     }
    
//     for (let i = startPage; i <= endPage; i++) {
//       pageNumbers.push(i);
//     }

//     return (
//       <div className="flex items-center justify-center gap-2 mt-6">
//         <button
//           onClick={() => onPageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="p-2 rounded-lg border border-slate-300 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </button>

//         {startPage > 1 && (
//           <>
//             <button
//               onClick={() => onPageChange(1)}
//               className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-blue-50 transition-colors"
//             >
//               1
//             </button>
//             {startPage > 2 && <span className="px-2">...</span>}
//           </>
//         )}

//         {pageNumbers.map((page) => (
//           <button
//             key={page}
//             onClick={() => onPageChange(page)}
//             className={`px-4 py-2 rounded-lg border transition-colors ${
//               currentPage === page
//                 ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-blue-500"
//                 : "border-slate-300 hover:bg-blue-50"
//             }`}
//           >
//             {page}
//           </button>
//         ))}

//         {endPage < totalPages && (
//           <>
//             {endPage < totalPages - 1 && <span className="px-2">...</span>}
//             <button
//               onClick={() => onPageChange(totalPages)}
//               className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-blue-50 transition-colors"
//             >
//               {totalPages}
//             </button>
//           </>
//         )}

//         <button
//           onClick={() => onPageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="p-2 rounded-lg border border-slate-300 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>

//         <span className="ml-4 text-sm text-gray-600">
//           Page {currentPage} of {totalPages}
//         </span>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#F8FBFF] via-[#E3F2FD] to-[#DFF5FF] flex flex-col lg:flex-row">
//       {/* Mobile Sidebar */}
//       {isMobileMenuOpen && (
//         <>
//           <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
//           <aside className="fixed inset-y-0 left-0 w-64 bg-white z-50 lg:hidden shadow-2xl transform transition-transform">
//             <div className="flex justify-end p-4">
//               <button onClick={() => setIsMobileMenuOpen(false)}>X</button>
//             </div>
//             <Sidebar />
//           </aside>
//         </>
//       )}

//       {/* Desktop Sidebar */}
//       <aside className="hidden lg:block lg:w-64 fixed h-full z-30">
//         <Sidebar />
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 w-full lg:ml-64 min-h-screen flex flex-col">
//         {/* Header */}
//         <header className="bg-white/70 backdrop-blur-xl border border-sky-100 shadow-lg rounded-2xl px-6 sm:px-12 py-4 sm:py-6 mb-6 flex items-center justify-between sticky top-4 z-20 mx-0 sm:mx-6">
//           <div className="flex items-center gap-3 w-full sm:w-auto">
//             <button
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden p-2 rounded-lg hover:bg-sky-100 transition-colors"
//             >
//               <span className="text-xl font-bold">☰</span>
//             </button>
//             <div>
//               <h2 className="text-3xl font-bold text-sky-900">Market Visibility Score</h2>
//               <p className="text-slate-600 text-sm sm:text-base mt-1">
//                 Track your market share and competitor insights
//               </p>
//             </div>
//           </div>
//         </header>

//         {/* Scrollable Content */}
//         <main className="px-4 sm:px-6 flex-1 overflow-y-auto pb-6 space-y-6">
//           {/* Hero Section */}
//           <div className="text-center space-y-6">
//             <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl mb-4 shadow-inner">
//               <BarChart3 className="h-10 w-10 text-blue-500" />
//             </div>
//             <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">
//               Market Share Intelligence
//             </h1>
//             <p className="text-lg text-slate-500 max-w-2xl mx-auto">
//               Analyze your brand's market position, track competitors, and monitor progress toward your goals
//             </p>
//           </div>

//           {/* Tab Navigation */}
//           <Card className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg">
//             <CardContent className="p-0">
//               <div className="flex border-b border-slate-200">
//                 <button
//                   onClick={() => {
//                     setActiveTab("category");
//                     setCurrentPage(1);
//                   }}
//                   className={`flex-1 py-4 px-6 font-medium transition-all ${
//                     activeTab === "category"
//                       ? "border-b-2 border-blue-500 text-blue-600 bg-blue-50/50"
//                       : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
//                   }`}
//                 >
//                   <div className="flex items-center justify-center gap-2">
//                     <BarChart3 className="w-5 h-5" />
//                     Category Analysis
//                   </div>
//                 </button>
//                 <button
//                   onClick={() => {
//                     setActiveTab("keyword");
//                     setCurrentPage(1);
//                   }}
//                   className={`flex-1 py-4 px-6 font-medium transition-all ${
//                     activeTab === "keyword"
//                       ? "border-b-2 border-blue-500 text-blue-600 bg-blue-50/50"
//                       : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
//                   }`}
//                 >
//                   <div className="flex items-center justify-center gap-2">
//                     <Search className="w-5 h-5" />
//                     Keyword Search
//                   </div>
//                 </button>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Controls Panel */}
//           <Card className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <Filter className="w-5 h-5 text-blue-600" />
//                 Search Parameters
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Marketplace</label>
//                   <select
//                     value={marketplace}
//                     onChange={(e) => setMarketplace(e.target.value as "flipkart" | "amazon")}
//                     className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all"
//                   >
//                     <option value="flipkart">Flipkart</option>
//                     <option value="amazon">Amazon</option>
//                   </select>
//                 </div>

//                 {activeTab === "category" ? (
//                   <>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
//                       <select
//                         value={selectedCategory}
//                         onChange={(e) => setSelectedCategory(e.target.value)}
//                         className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all"
//                       >
//                         <option value="">Select Category</option>
//                         {categories.map((cat, idx) => (
//                           <option key={idx} value={cat}>
//                             {cat}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Your Brand <span className="text-gray-500 text-xs">(Optional)</span>
//                       </label>
//                       <input
//                         type="text"
//                         value={yourBrand}
//                         onChange={(e) => setYourBrand(e.target.value)}
//                         placeholder="Enter your brand name"
//                         className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                       />
//                     </div>
//                     <div className="flex items-end">
//                       <button
//                         onClick={analyzeCategorySov}
//                         disabled={loading}
//                         className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-cyan-600 disabled:from-gray-400 disabled:to-gray-400 shadow-md transition-all flex items-center justify-center gap-2"
//                       >
//                         {loading ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
//                         Analyze
//                       </button>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Keyword</label>
//                       <input
//                         type="text"
//                         value={keywordSearch}
//                         onChange={(e) => setKeywordSearch(e.target.value)}
//                         placeholder="e.g., wireless earbuds"
//                         className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Price Min (₹)</label>
//                       <input
//                         type="number"
//                         value={priceMin}
//                         onChange={(e) => setPriceMin(e.target.value)}
//                         placeholder="Min price"
//                         className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Price Max (₹)</label>
//                       <input
//                         type="number"
//                         value={priceMax}
//                         onChange={(e) => setPriceMax(e.target.value)}
//                         placeholder="Max price"
//                         className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                       />
//                     </div>
//                     <div className="flex items-end">
//                       <button
//                         onClick={analyzeKeywordSov}
//                         disabled={loading}
//                         className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-cyan-600 disabled:from-gray-400 disabled:to-gray-400 shadow-md transition-all flex items-center justify-center gap-2"
//                       >
//                         {loading ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
//                         Search
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </div>

//               {activeTab === "category" && yourBrand && (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Target Share (%)
//                     </label>
//                     <input
//                       type="number"
//                       value={targetShare}
//                       onChange={(e) => setTargetShare(Number(e.target.value))}
//                       className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                       min="0"
//                       max="100"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Target Days</label>
//                     <input
//                       type="number"
//                       value={targetDays}
//                       onChange={(e) => setTargetDays(Number(e.target.value))}
//                       className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                       min="1"
//                     />
//                   </div>
//                 </div>
//               )}
//             </CardContent>
//           </Card>

//           {/* Error Message */}
//           {error && (
//             <Card className="bg-red-50/70 backdrop-blur-md border-l-4 border-red-500 rounded-2xl shadow-lg">
//               <CardContent className="p-4">
//                 <div className="flex items-center gap-2 text-red-700">
//                   <AlertCircle className="w-5 h-5" />
//                   <span className="font-medium">{error}</span>
//                 </div>
//               </CardContent>
//             </Card>
//           )}

//           {/* Loading State */}
//           {loading && (
//             <Card className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg">
//               <CardContent className="p-12">
//                 <div className="flex flex-col items-center justify-center gap-4">
//                   <RefreshCw className="w-12 h-12 text-blue-500 animate-spin" />
//                   <p className="text-gray-600 font-medium">Analyzing data...</p>
//                 </div>
//               </CardContent>
//             </Card>
//           )}

//           {/* Category Analysis Results */}
//           {!loading && activeTab === "category" && sovData && (
//             <>
//               {/* Summary Cards */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 <Card className="relative bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group">
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
//                   <CardContent className="p-6 relative">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-blue-100 text-sm font-medium mb-1">Total Products</p>
//                         <p className="text-4xl font-black">{sovData.total_products.toLocaleString()}</p>
//                         <p className="text-blue-200 text-xs mt-2">In this category</p>
//                       </div>
//                       <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
//                         <BarChart3 className="w-8 h-8 text-white" />
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="relative bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group">
//                   <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
//                   <CardContent className="p-6 relative">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-green-100 text-sm font-medium mb-1">Total Reviews</p>
//                         <p className="text-4xl font-black">{sovData.total_reviews.toLocaleString()}</p>
//                         <p className="text-green-200 text-xs mt-2">Customer feedback</p>
//                       </div>
//                       <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
//                         <Users className="w-8 h-8 text-white" />
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="relative bg-gradient-to-br from-purple-500 to-pink-600 text-white border-0 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group">
//                   <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
//                   <CardContent className="p-6 relative">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-purple-100 text-sm font-medium mb-1">Market Leader</p>
//                         <p className="text-2xl font-black truncate">{sovData.market_leader}</p>
//                         <p className="text-purple-200 text-xs mt-2">Top performing brand</p>
//                       </div>
//                       <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
//                         <Award className="w-8 h-8 text-white" />
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {sovData.your_brand_share !== null && (
//                   <Card className="relative bg-gradient-to-br from-orange-500 to-red-600 text-white border-0 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group">
//                     <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
//                     <CardContent className="p-6 relative">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <p className="text-orange-100 text-sm font-medium mb-1">Your Share</p>
//                           <p className="text-4xl font-black">{sovData.your_brand_share}%</p>
//                           <p className="text-orange-200 text-xs mt-2">Market position</p>
//                         </div>
//                         <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
//                           <Target className="w-8 h-8 text-white" />
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 )}
//               </div>

//               {/* Market Share Distribution */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 <Card className="bg-gradient-to-br from-white/90 via-blue-50/30 to-cyan-50/30 backdrop-blur-md border-2 border-blue-200/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-2xl"></div>
//                   <CardHeader className="relative">
//                     <CardTitle className="flex items-center gap-2 text-xl">
//                       <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
//                         <BarChart3 className="w-5 h-5 text-white" />
//                       </div>
//                       Market Share Distribution
//                     </CardTitle>
//                     <CardDescription className="text-gray-600">Top 8 brands by market dominance</CardDescription>
//                   </CardHeader>
//                   <CardContent className="relative">
//                     <ResponsiveContainer width="100%" height={320}>
//                       <PieChart>
//                         <defs>
//                           {COLORS.map((color, idx) => (
//                             <linearGradient key={idx} id={`gradient-${idx}`} x1="0" y1="0" x2="0" y2="1">
//                               <stop offset="0%" stopColor={color} stopOpacity={0.8}/>
//                               <stop offset="100%" stopColor={color} stopOpacity={1}/>
//                             </linearGradient>
//                           ))}
//                         </defs>
//                         <Pie
//                           data={sovData.brands.slice(0, 8).map((brand, idx) => ({
//                             name: brand.brand,
//                             value: brand.share_percentage,
//                           }))}
//                           cx="50%"
//                           cy="50%"
//                           labelLine={true}
//                           label={({ name, value }) => `${value}%`}
//                           outerRadius={110}
//                           innerRadius={60}
//                           fill="#8884d8"
//                           dataKey="value"
//                           paddingAngle={2}
//                         >
//                           {sovData.brands.slice(0, 8).map((entry, index) => (
//                             <Cell 
//                               key={`cell-${index}`} 
//                               fill={`url(#gradient-${index % COLORS.length})`}
//                               strokeWidth={2}
//                               stroke="#fff"
//                             />
//                           ))}
//                         </Pie>
//                         <Tooltip 
//                           contentStyle={{ 
//                             backgroundColor: 'rgba(255, 255, 255, 0.95)', 
//                             borderRadius: '12px',
//                             border: '2px solid #e2e8f0',
//                             boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//                           }}
//                         />
//                         <Legend 
//                           verticalAlign="bottom" 
//                           height={36}
//                           formatter={(value) => <span className="text-sm font-medium">{value}</span>}
//                         />
//                       </PieChart>
//                     </ResponsiveContainer>
//                   </CardContent>
//                 </Card>

//                 <Card className="bg-gradient-to-br from-white/90 via-purple-50/30 to-pink-50/30 backdrop-blur-md border-2 border-purple-200/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
//                   <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-2xl"></div>
//                   <CardHeader className="relative">
//                     <CardTitle className="flex items-center gap-2 text-xl">
//                       <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
//                         <TrendingUp className="w-5 h-5 text-white" />
//                       </div>
//                       Top Brands by Reviews
//                     </CardTitle>
//                     <CardDescription className="text-gray-600">Customer engagement metrics</CardDescription>
//                   </CardHeader>
//                   <CardContent className="relative">
//                     <ResponsiveContainer width="100%" height={320}>
//                       <BarChart data={sovData.brands.slice(0, 8)} barGap={8}>
//                         <defs>
//                           <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
//                             <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.8}/>
//                             <stop offset="100%" stopColor="#ec4899" stopOpacity={1}/>
//                           </linearGradient>
//                         </defs>
//                         <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
//                         <XAxis 
//                           dataKey="brand" 
//                           angle={-45} 
//                           textAnchor="end" 
//                           height={100} 
//                           fontSize={11}
//                           stroke="#64748b"
//                         />
//                         <YAxis stroke="#64748b" />
//                         <Tooltip 
//                           contentStyle={{ 
//                             backgroundColor: 'rgba(255, 255, 255, 0.95)', 
//                             borderRadius: '12px',
//                             border: '2px solid #e2e8f0',
//                             boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//                           }}
//                           cursor={{fill: 'rgba(139, 92, 246, 0.1)'}}
//                         />
//                         <Bar 
//                           dataKey="total_reviews" 
//                           fill="url(#barGradient)" 
//                           name="Total Reviews"
//                           radius={[8, 8, 0, 0]}
//                           animationDuration={800}
//                         />
//                       </BarChart>
//                     </ResponsiveContainer>
//                   </CardContent>
//                 </Card>
//               </div>

//               {/* Detailed Brand Table */}
//               <Card id="brands-table" className="bg-gradient-to-br from-white/95 via-slate-50/50 to-blue-50/30 backdrop-blur-md border-2 border-slate-200/60 rounded-3xl shadow-2xl overflow-hidden">
//                 <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-transparent rounded-full blur-3xl"></div>
//                 <CardHeader className="relative bg-gradient-to-r from-slate-50 to-blue-50/50 border-b-2 border-slate-200/50">
//                   <CardTitle className="flex items-center gap-3 text-2xl">
//                     <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
//                       <Users className="w-6 h-6 text-white" />
//                     </div>
//                     Detailed Brand Analysis
//                   </CardTitle>
//                   <CardDescription className="text-gray-600 text-base mt-2">
//                     Showing {paginatedBrands.length} of {sovData.brands.length} brands • {yourBrand && <span className="text-blue-600 font-semibold">Your brand highlighted</span>}
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="relative p-0">
//                   <div className="overflow-x-auto">
//                     <table className="w-full text-sm">
//                       <thead className="bg-gradient-to-r from-slate-100 via-blue-50 to-cyan-50 sticky top-0 z-10">
//                         <tr className="border-b-2 border-slate-200">
//                           <th className="p-4 text-left font-bold text-gray-800 uppercase tracking-wide text-xs">
//                             <div className="flex items-center gap-2">
//                               <Award className="w-4 h-4 text-blue-600" />
//                               Brand
//                             </div>
//                           </th>
//                           <th className="p-4 text-right font-bold text-gray-800 uppercase tracking-wide text-xs">
//                             <div className="flex items-center justify-end gap-2">
//                               <Target className="w-4 h-4 text-purple-600" />
//                               Share %
//                             </div>
//                           </th>
//                           <th className="p-4 text-right font-bold text-gray-800 uppercase tracking-wide text-xs">
//                             <div className="flex items-center justify-end gap-2">
//                               <Users className="w-4 h-4 text-green-600" />
//                               Reviews
//                             </div>
//                           </th>
//                           <th className="p-4 text-right font-bold text-gray-800 uppercase tracking-wide text-xs">Sales</th>
//                           <th className="p-4 text-right font-bold text-gray-800 uppercase tracking-wide text-xs">Products</th>
//                           <th className="p-4 text-right font-bold text-gray-800 uppercase tracking-wide text-xs">
//                             <div className="flex items-center justify-end gap-2">
//                               ⭐ Rating
//                             </div>
//                           </th>
//                           <th className="p-4 text-right font-bold text-gray-800 uppercase tracking-wide text-xs">Avg Price</th>
//                         </tr>
//                       </thead>
//                       <tbody className="bg-white/60">
//                         {paginatedBrands.map((brand, idx) => (
//                           <tr
//                             key={idx}
//                             className={`border-b border-slate-200/60 hover:bg-gradient-to-r hover:from-blue-50/70 hover:to-cyan-50/50 transition-all duration-200 group ${
//                               brand.brand.toLowerCase() === yourBrand.toLowerCase() 
//                                 ? "bg-gradient-to-r from-blue-100/70 to-cyan-100/50 border-l-4 border-l-blue-500 font-semibold shadow-sm" 
//                                 : ""
//                             }`}
//                           >
//                             <td className="p-4">
//                               <div className="flex items-center gap-3">
//                                 <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-md ${
//                                   idx === 0 ? "bg-gradient-to-br from-yellow-400 to-yellow-600" :
//                                   idx === 1 ? "bg-gradient-to-br from-gray-300 to-gray-500" :
//                                   idx === 2 ? "bg-gradient-to-br from-orange-400 to-orange-600" :
//                                   "bg-gradient-to-br from-blue-400 to-blue-600"
//                                 }`}>
//                                   {(currentPage - 1) * itemsPerPage + idx + 1}
//                                 </div>
//                                 <span className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors">
//                                   {brand.brand}
//                                 </span>
//                               </div>
//                             </td>
//                             <td className="p-4 text-right">
//                               <div className="flex items-center justify-end gap-2">
//                                 <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
//                                   <div 
//                                     className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-300"
//                                     style={{ width: `${Math.min(brand.share_percentage * 2, 100)}%` }}
//                                   ></div>
//                                 </div>
//                                 <span className="font-bold text-blue-700 min-w-[3rem]">{brand.share_percentage}%</span>
//                               </div>
//                             </td>
//                             <td className="p-4 text-right">
//                               <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full font-semibold text-xs">
//                                 {brand.total_reviews.toLocaleString()}
//                               </span>
//                             </td>
//                             <td className="p-4 text-right font-medium text-gray-700">{brand.total_sales.toLocaleString()}</td>
//                             <td className="p-4 text-right">
//                               <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-800 rounded-lg font-medium text-xs">
//                                 {brand.product_count}
//                               </span>
//                             </td>
//                             <td className="p-4 text-right">
//                               <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full font-semibold text-xs">
//                                 ⭐ {brand.avg_rating}
//                               </span>
//                             </td>
//                             <td className="p-4 text-right">
//                               <span className="font-bold text-emerald-700">₹{brand.avg_price?.toLocaleString()}</span>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                   {totalPages > 1 && (
//                     <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-50/30 border-t-2 border-slate-200/50">
//                       <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>

//               {/* Progress Tracking */}
//               {yourBrand && progressData && (
//                 <>
//                   <div className="text-center space-y-2">
//                     <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 text-transparent bg-clip-text flex items-center justify-center gap-2">
//                       <Target className="w-8 h-8 text-blue-500" />
//                       Progress Tracking
//                     </h2>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <Card
//                       className={`bg-white/70 backdrop-blur-md border-l-4 ${
//                         progressData.is_on_track ? "border-green-500" : "border-red-500"
//                       } rounded-2xl shadow-lg`}
//                     >
//                       <CardContent className="p-6">
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="text-sm text-gray-600">Status</p>
//                             <p className="text-2xl font-bold">{progressData.is_on_track ? "On Track" : "Behind"}</p>
//                           </div>
//                           {progressData.is_on_track ? (
//                             <CheckCircle className="w-10 h-10 text-green-500" />
//                           ) : (
//                             <AlertCircle className="w-10 h-10 text-red-500" />
//                           )}
//                         </div>
//                       </CardContent>
//                     </Card>

//                     <Card className="bg-white/70 backdrop-blur-md border-l-4 border-blue-500 rounded-2xl shadow-lg">
//                       <CardContent className="p-6">
//                         <div>
//                           <p className="text-sm text-gray-600">Current Share</p>
//                           <p className="text-3xl font-bold text-blue-600">{progressData.current_share}%</p>
//                           <p className="text-xs text-gray-500 mt-1">Target: {progressData.target_share}%</p>
//                         </div>
//                       </CardContent>
//                     </Card>

//                     <Card className="bg-white/70 backdrop-blur-md border-l-4 border-purple-500 rounded-2xl shadow-lg">
//                       <CardContent className="p-6">
//                         <div>
//                           <p className="text-sm text-gray-600">Days Remaining</p>
//                           <p className="text-3xl font-bold text-purple-600">{progressData.days_remaining}</p>
//                           <p className="text-xs text-gray-500 mt-1">Target: {progressData.target_date}</p>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </div>

//                   <Card className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg">
//                     <CardHeader>
//                       <CardTitle>Growth Rate Analysis</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="grid grid-cols-2 gap-6">
//                         <div>
//                           <p className="text-sm text-gray-600 mb-2">Required Growth Rate</p>
//                           <div className="flex items-baseline">
//                             <span className="text-4xl font-bold text-blue-600">
//                               {(progressData.required_growth_rate * 100).toFixed(2)}%
//                             </span>
//                             <span className="text-sm ml-2 text-gray-500">per day</span>
//                           </div>
//                         </div>
//                         <div>
//                           <p className="text-sm text-gray-600 mb-2">Actual Growth Rate</p>
//                           <div className="flex items-baseline">
//                             <span
//                               className={`text-4xl font-bold ${
//                                 progressData.actual_growth_rate >= progressData.required_growth_rate
//                                   ? "text-green-600"
//                                   : "text-red-600"
//                               }`}
//                             >
//                               {(progressData.actual_growth_rate * 100).toFixed(2)}%
//                             </span>
//                             <span className="text-sm ml-2 text-gray-500">per day</span>
//                           </div>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>

//                   <Card className="bg-gradient-to-br from-white/90 via-green-50/30 to-emerald-50/30 backdrop-blur-md border-2 border-green-200/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
//                     <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-400/10 to-transparent rounded-full blur-3xl"></div>
//                     <CardHeader className="relative">
//                       <CardTitle className="flex items-center gap-2 text-xl">
//                         <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
//                           <TrendingUp className="w-5 h-5 text-white" />
//                         </div>
//                         Weekly Progress Projection
//                       </CardTitle>
//                       <CardDescription className="text-gray-600">Track your growth trajectory</CardDescription>
//                     </CardHeader>
//                     <CardContent className="relative">
//                       <ResponsiveContainer width="100%" height={320}>
//                         <LineChart data={progressData.weekly_progress}>
//                           <defs>
//                             <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
//                               <stop offset="0%" stopColor="#10b981" stopOpacity={0.8}/>
//                               <stop offset="100%" stopColor="#059669" stopOpacity={0.3}/>
//                             </linearGradient>
//                           </defs>
//                           <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
//                           <XAxis dataKey="date" stroke="#64748b" fontSize={11} />
//                           <YAxis stroke="#64748b" />
//                           <Tooltip 
//                             contentStyle={{ 
//                               backgroundColor: 'rgba(255, 255, 255, 0.95)', 
//                               borderRadius: '12px',
//                               border: '2px solid #e2e8f0',
//                               boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//                             }}
//                           />
//                           <Legend />
//                           <Line
//                             type="monotone"
//                             dataKey="share_percentage"
//                             stroke="#10b981"
//                             strokeWidth={3}
//                             name="Market Share %"
//                             dot={{ fill: '#10b981', r: 5 }}
//                             activeDot={{ r: 8, fill: '#059669' }}
//                             fill="url(#lineGradient)"
//                           />
//                         </LineChart>
//                       </ResponsiveContainer>
//                     </CardContent>
//                   </Card>
//                 </>
//               )}

//               {/* AI Brain - Insights & Recommendations */}
//               {yourBrand && aiInsights && (
//                 <>
//                   <div className="text-center space-y-2 mt-12">
//                     <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl mb-4 shadow-lg">
//                       <span className="text-4xl">🧠</span>
//                     </div>
//                     <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 text-transparent bg-clip-text">
//                       AI-Powered Insights
//                     </h2>
//                     <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//                       Strategic recommendations powered by Insydz
//                     </p>
//                   </div>

//                   {/* AI Generated Insights - Mistral Analysis */}
//                   {aiInsights.ai_generated_insights && (
//                     <Card className="relative bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 text-white border-0 rounded-3xl shadow-2xl overflow-hidden">
//                       <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
//                       <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
//                       <CardHeader className="relative">
//                         <CardTitle className="text-3xl flex items-center gap-3">
//                           <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl">
//                             <span className="text-3xl">🤖</span>
//                           </div>
//                           Insydz Strategic Analysis
//                         </CardTitle>
//                         <CardDescription className="text-purple-100 text-base">
//                           {loadingInsights ? "Analyzing market data..." : "Deep learning insights from your market position"}
//                         </CardDescription>
//                       </CardHeader>
//                       <CardContent className="relative">
//                         {loadingInsights ? (
//                           <div className="flex flex-col items-center justify-center py-12 gap-4">
//                             <RefreshCw className="w-12 h-12 text-white animate-spin" />
//                             <p className="text-white/80 text-lg">AI is analyzing your competitive landscape...</p>
//                           </div>
//                         ) : (
//                           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
//                             <pre className="whitespace-pre-wrap text-white font-mono text-sm leading-relaxed">
//                               {aiInsights.ai_generated_insights}
//                             </pre>
//                           </div>
//                         )}
//                       </CardContent>
//                     </Card>
//                   )}

//                   {/* Current Analysis Overview */}
//                   <Card className="bg-gradient-to-br from-violet-500 to-purple-600 text-white border-0 rounded-3xl shadow-2xl overflow-hidden">
//                     <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
//                     <CardHeader className="relative">
//                       <CardTitle className="text-2xl flex items-center gap-3">
//                         <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
//                           <Target className="w-6 h-6" />
//                         </div>
//                         Strategic Analysis
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="relative">
//                       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//                         <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
//                           <p className="text-violet-100 text-sm mb-2">Current Position</p>
//                           <p className="text-4xl font-black">{aiInsights.current_analysis.current_share}%</p>
//                           <p className="text-violet-200 text-xs mt-2">Rank #{aiInsights.market_position.rank}</p>
//                         </div>
//                         <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
//                           <p className="text-violet-100 text-sm mb-2">Target Goal</p>
//                           <p className="text-4xl font-black">{aiInsights.current_analysis.target_share}%</p>
//                           <p className="text-violet-200 text-xs mt-2">In {aiInsights.current_analysis.days_to_target} days</p>
//                         </div>
//                         <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
//                           <p className="text-violet-100 text-sm mb-2">Gap to Close</p>
//                           <p className="text-4xl font-black">{aiInsights.current_analysis.gap}%</p>
//                           <p className="text-violet-200 text-xs mt-2">Market share needed</p>
//                         </div>
//                         <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
//                           <p className="text-violet-100 text-sm mb-2">Daily Growth Needed</p>
//                           <p className="text-4xl font-black">{(aiInsights.current_analysis.required_daily_growth * 100).toFixed(3)}%</p>
//                           <p className="text-violet-200 text-xs mt-2">Per day</p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>

//                   {/* Actionable Recommendations */}
//                   {aiInsights.actionable_recommendations.length > 0 && (
//                     <Card className="bg-gradient-to-br from-white/95 via-orange-50/50 to-red-50/30 backdrop-blur-md border-2 border-orange-200/60 rounded-3xl shadow-2xl overflow-hidden">
//                       <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-3xl"></div>
//                       <CardHeader className="relative">
//                         <CardTitle className="text-2xl flex items-center gap-3">
//                           <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
//                             <span className="text-2xl">💡</span>
//                           </div>
//                           Actionable Recommendations
//                         </CardTitle>
//                         <CardDescription className="text-gray-600 text-base">
//                           Prioritized actions to reach your target
//                         </CardDescription>
//                       </CardHeader>
//                       <CardContent className="relative">
//                         <div className="space-y-4">
//                           {aiInsights.actionable_recommendations.map((rec: any, idx: number) => (
//                             <div
//                               key={idx}
//                               className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border-2 border-orange-200/50 hover:shadow-xl transition-all duration-300 group"
//                             >
//                               <div className="flex items-start justify-between mb-4">
//                                 <div className="flex items-center gap-3">
//                                   <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold shadow-md ${
//                                     rec.priority === 'High' ? 'bg-gradient-to-br from-red-500 to-red-600' :
//                                     rec.priority === 'Medium' ? 'bg-gradient-to-br from-yellow-500 to-orange-500' :
//                                     'bg-gradient-to-br from-blue-500 to-blue-600'
//                                   }`}>
//                                     {idx + 1}
//                                   </div>
//                                   <div>
//                                     <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors">
//                                       {rec.type}
//                                     </h4>
//                                     <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
//                                       rec.priority === 'High' ? 'bg-red-100 text-red-700' :
//                                       rec.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
//                                       'bg-blue-100 text-blue-700'
//                                     }`}>
//                                       {rec.priority} Priority
//                                     </span>
//                                   </div>
//                                 </div>
//                                 <div className="text-right">
//                                   <p className="text-sm text-gray-600">Current</p>
//                                   <p className="text-2xl font-bold text-gray-900">{rec.current}</p>
//                                   <p className="text-xs text-gray-500">Target: {rec.benchmark}</p>
//                                 </div>
//                               </div>
//                               <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl mb-3">
//                                 <p className="text-gray-800 font-medium">📋 Action: {rec.action}</p>
//                               </div>
//                               <div className="flex items-center gap-2 text-sm">
//                                 <TrendingUp className="w-4 h-4 text-green-600" />
//                                 <span className="text-green-700 font-semibold">Impact: {rec.impact}</span>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </CardContent>
//                     </Card>
//                   )}

//                   {/* Growth Strategy */}
//                   {aiInsights.growth_strategy.length > 0 && (
//                     <Card className="bg-gradient-to-br from-white/95 via-green-50/50 to-emerald-50/30 backdrop-blur-md border-2 border-green-200/60 rounded-3xl shadow-2xl overflow-hidden">
//                       <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-green-400/10 to-transparent rounded-full blur-3xl"></div>
//                       <CardHeader className="relative">
//                         <CardTitle className="text-2xl flex items-center gap-3">
//                           <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
//                             <span className="text-2xl">🚀</span>
//                           </div>
//                           Growth Strategy Roadmap
//                         </CardTitle>
//                         <CardDescription className="text-gray-600 text-base">
//                           Phased approach to reach {aiInsights.current_analysis.target_share}% market share
//                         </CardDescription>
//                       </CardHeader>
//                       <CardContent className="relative">
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                           {aiInsights.growth_strategy.map((phase: any, idx: number) => (
//                             <div
//                               key={idx}
//                               className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border-2 border-green-200/50 hover:shadow-xl transition-all duration-300"
//                             >
//                               <div className="flex items-center gap-3 mb-4">
//                                 <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-lg">
//                                   {idx + 1}
//                                 </div>
//                                 <div>
//                                   <h4 className="font-bold text-gray-900">{phase.phase}</h4>
//                                   <p className="text-sm text-green-600 font-semibold">{phase.focus}</p>
//                                 </div>
//                               </div>
//                               <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl mb-4">
//                                 <p className="text-sm font-bold text-gray-700 mb-2">Actions:</p>
//                                 <ul className="space-y-2">
//                                   {phase.actions.map((action: string, i: number) => (
//                                     <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
//                                       <span className="text-green-600 font-bold">✓</span>
//                                       <span>{action}</span>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </div>
//                               <div className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl">
//                                 <Target className="w-4 h-4" />
//                                 <span className="font-bold text-sm">{phase.target}</span>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </CardContent>
//                     </Card>
//                   )}

//                   {/* Product Gaps */}
//                   {aiInsights.product_gaps.length > 0 && (
//                     <Card className="bg-gradient-to-br from-white/95 via-blue-50/50 to-cyan-50/30 backdrop-blur-md border-2 border-blue-200/60 rounded-3xl shadow-2xl overflow-hidden">
//                       <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
//                       <CardHeader className="relative">
//                         <CardTitle className="text-2xl flex items-center gap-3">
//                           <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
//                             <span className="text-2xl">🔍</span>
//                           </div>
//                           Top Product Gaps
//                         </CardTitle>
//                         <CardDescription className="text-gray-600 text-base">
//                           High-demand products your competitors offer but you don't
//                         </CardDescription>
//                       </CardHeader>
//                       <CardContent className="relative">
//                         <div className="overflow-x-auto">
//                           <table className="w-full text-sm">
//                             <thead className="bg-gradient-to-r from-blue-100 to-cyan-100">
//                               <tr>
//                                 <th className="p-4 text-left font-bold text-gray-800">Product Type</th>
//                                 <th className="p-4 text-right font-bold text-gray-800">Competitors</th>
//                                 <th className="p-4 text-right font-bold text-gray-800">Avg Price</th>
//                                 <th className="p-4 text-right font-bold text-gray-800">Rating</th>
//                                 <th className="p-4 text-right font-bold text-gray-800">Demand</th>
//                                 <th className="p-4 text-center font-bold text-gray-800">Opportunity</th>
//                               </tr>
//                             </thead>
//                             <tbody className="bg-white/60">
//                               {aiInsights.product_gaps.map((gap: any, idx: number) => (
//                                 <tr key={idx} className="border-b border-slate-200 hover:bg-blue-50/50 transition-colors">
//                                   <td className="p-4 font-medium text-gray-900">{gap.product_type}</td>
//                                   <td className="p-4 text-right">
//                                     <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold">
//                                       {gap.competitors_offering}
//                                     </span>
//                                   </td>
//                                   <td className="p-4 text-right font-bold text-emerald-700">₹{gap.avg_price.toLocaleString()}</td>
//                                   <td className="p-4 text-right">
//                                     <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full font-semibold">
//                                       ⭐ {gap.avg_rating}
//                                     </span>
//                                   </td>
//                                   <td className="p-4 text-right font-bold text-gray-700">{gap.total_demand.toLocaleString()}</td>
//                                   <td className="p-4 text-center">
//                                     <span className={`inline-block px-4 py-2 rounded-full font-bold text-sm ${
//                                       gap.opportunity === 'High' ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white' :
//                                       gap.opportunity === 'Medium' ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white' :
//                                       'bg-gradient-to-r from-blue-400 to-cyan-400 text-white'
//                                     }`}>
//                                       {gap.opportunity}
//                                     </span>
//                                   </td>
//                                 </tr>
//                               ))}
//                             </tbody>
//                           </table>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   )}

//                   {/* Pricing Insights */}
//                   {aiInsights.pricing_insights && Object.keys(aiInsights.pricing_insights).length > 0 && (
//                     <Card className="bg-gradient-to-br from-white/95 via-purple-50/50 to-pink-50/30 backdrop-blur-md border-2 border-purple-200/60 rounded-3xl shadow-2xl overflow-hidden">
//                       <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-3xl"></div>
//                       <CardHeader className="relative">
//                         <CardTitle className="text-2xl flex items-center gap-3">
//                           <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
//                             <span className="text-2xl">💰</span>
//                           </div>
//                           Pricing Intelligence
//                         </CardTitle>
//                       </CardHeader>
//                       <CardContent className="relative">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                           <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border-2 border-purple-200/50">
//                             <h4 className="font-bold text-gray-900 mb-4">Price Positioning</h4>
//                             <div className="space-y-3">
//                               <div className="flex justify-between items-center">
//                                 <span className="text-gray-600">Your Price:</span>
//                                 <span className="text-2xl font-black text-purple-700">₹{aiInsights.pricing_insights.your_price}</span>
//                               </div>
//                               <div className="flex justify-between items-center">
//                                 <span className="text-gray-600">Market Avg:</span>
//                                 <span className="text-xl font-bold text-gray-700">₹{aiInsights.pricing_insights.market_average}</span>
//                               </div>
//                               <div className="mt-4 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
//                                 <p className="text-sm font-bold text-gray-800">Category: {aiInsights.pricing_insights.price_positioning}</p>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border-2 border-purple-200/50">
//                             <h4 className="font-bold text-gray-900 mb-4">Competitive Landscape</h4>
//                             <div className="space-y-3">
//                               <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
//                                 <span className="text-gray-700 font-medium">Budget Competitors:</span>
//                                 <span className="text-xl font-bold text-blue-700">{aiInsights.pricing_insights.budget_competitors}</span>
//                               </div>
//                               <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
//                                 <span className="text-gray-700 font-medium">Similar Price:</span>
//                                 <span className="text-xl font-bold text-green-700">{aiInsights.pricing_insights.similar_price_competitors}</span>
//                               </div>
//                               <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
//                                 <span className="text-gray-700 font-medium">Premium:</span>
//                                 <span className="text-xl font-bold text-purple-700">{aiInsights.pricing_insights.premium_competitors}</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="mt-6 p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl">
//                           <p className="text-lg font-bold">💡 {aiInsights.pricing_insights.recommendation}</p>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   )}
//                 </>
//               )}

//               {/* Competitor Analysis */}
//               {competitors.length > 0 && (
//                 <div id="competitor-section">
//                   <div className="text-center space-y-2 mb-6">
//                     <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 text-transparent bg-clip-text flex items-center justify-center gap-2">
//                       <Users className="w-8 h-8 text-blue-500" />
//                       Competitor Analysis
//                     </h2>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {paginatedCompetitors.map((competitor, idx) => (
//                       <Card
//                         key={idx}
//                         className="relative bg-gradient-to-br from-white via-slate-50 to-blue-50/30 backdrop-blur-md border-2 border-slate-200/60 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden group"
//                       >
//                         <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                        
//                         {/* Rank Badge */}
//                         <div className="absolute top-4 left-4 z-10">
//                           <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg ${
//                             idx === 0 ? "bg-gradient-to-br from-yellow-400 to-yellow-600" :
//                             idx === 1 ? "bg-gradient-to-br from-gray-300 to-gray-500" :
//                             idx === 2 ? "bg-gradient-to-br from-orange-400 to-orange-600" :
//                             "bg-gradient-to-br from-blue-500 to-blue-700"
//                           }`}>
//                             {(competitorPage - 1) * competitorsPerPage + idx + 1}
//                           </div>
//                         </div>

//                         <CardContent className="p-6 pt-20 relative">
//                           <div className="flex justify-between items-start mb-6">
//                             <div>
//                               <h4 className="text-2xl font-black text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
//                                 {competitor.competitor_name}
//                               </h4>
//                               <p className="text-sm text-gray-500 font-medium">Competitor Analysis</p>
//                             </div>
//                             <div className="text-right bg-gradient-to-br from-blue-500 to-cyan-500 text-white px-4 py-3 rounded-2xl shadow-lg">
//                               <p className="text-3xl font-black">{competitor.market_share}%</p>
//                               <p className="text-xs opacity-90">Share</p>
//                             </div>
//                           </div>

//                           <div className="grid grid-cols-2 gap-3">
//                             <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-2xl border border-blue-200/50 hover:shadow-md transition-shadow">
//                               <div className="flex items-center gap-2 mb-2">
//                                 <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
//                                   <BarChart3 className="w-4 h-4 text-white" />
//                                 </div>
//                                 <p className="text-xs text-gray-600 font-semibold uppercase">Products</p>
//                               </div>
//                               <p className="text-2xl font-black text-blue-700">{competitor.total_products}</p>
//                             </div>

//                             <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-4 rounded-2xl border border-green-200/50 hover:shadow-md transition-shadow">
//                               <div className="flex items-center gap-2 mb-2">
//                                 <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
//                                   <Users className="w-4 h-4 text-white" />
//                                 </div>
//                                 <p className="text-xs text-gray-600 font-semibold uppercase">Reviews</p>
//                               </div>
//                               <p className="text-2xl font-black text-green-700">{competitor.total_reviews.toLocaleString()}</p>
//                             </div>

//                             <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 p-4 rounded-2xl border border-yellow-200/50 hover:shadow-md transition-shadow">
//                               <div className="flex items-center gap-2 mb-2">
//                                 <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
//                                   <span className="text-white text-sm">⭐</span>
//                                 </div>
//                                 <p className="text-xs text-gray-600 font-semibold uppercase">Rating</p>
//                               </div>
//                               <p className="text-2xl font-black text-yellow-700">{competitor.avg_rating}</p>
//                             </div>

//                             <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-4 rounded-2xl border border-purple-200/50 hover:shadow-md transition-shadow">
//                               <div className="flex items-center gap-2 mb-2">
//                                 <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
//                                   <span className="text-white text-sm font-bold">₹</span>
//                                 </div>
//                                 <p className="text-xs text-gray-600 font-semibold uppercase">Avg Price</p>
//                               </div>
//                               <p className="text-xl font-black text-purple-700">₹{competitor.avg_price.toLocaleString()}</p>
//                             </div>
//                           </div>
//                         </CardContent>
//                       </Card>
//                     ))}
//                   </div>
//                   {totalCompetitorPages > 1 && (
//                     <Pagination 
//                       currentPage={competitorPage} 
//                       totalPages={totalCompetitorPages} 
//                       onPageChange={handleCompetitorPageChange} 
//                     />
//                   )}
//                 </div>
//               )}
//             </>
//           )}

//           {/* Keyword Analysis Results */}
//           {!loading && activeTab === "keyword" && keywordData && (
//             <>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <Card className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
//                   <CardContent className="p-6">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm text-gray-600">Total Products</p>
//                         <p className="text-3xl font-bold text-blue-600">{keywordData.total_products.toLocaleString()}</p>
//                       </div>
//                       <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                         <BarChart3 className="w-6 h-6 text-blue-600" />
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
//                   <CardContent className="p-6">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm text-gray-600">Total Reviews</p>
//                         <p className="text-3xl font-bold text-green-600">{keywordData.total_reviews.toLocaleString()}</p>
//                       </div>
//                       <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                         <Users className="w-6 h-6 text-green-600" />
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
//                   <CardContent className="p-6">
//                     <div>
//                       <p className="text-sm text-gray-600 mb-2">Price Range</p>
//                       <p className="text-lg font-bold text-purple-600">
//                         ₹{keywordData.price_range.min.toLocaleString()} - ₹{keywordData.price_range.max.toLocaleString()}
//                       </p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>

//               <Card className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg">
//                 <CardHeader>
//                   <CardTitle>Brand Distribution for "{keywordData.keyword}"</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <ResponsiveContainer width="100%" height={400}>
//                     <BarChart data={keywordData.brands.slice(0, 10)}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="brand" angle={-45} textAnchor="end" height={100} fontSize={12} />
//                       <YAxis />
//                       <Tooltip />
//                       <Legend />
//                       <Bar dataKey="share_percentage" fill="#3b82f6" name="Market Share %" />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </CardContent>
//               </Card>

//               <Card id="brands-table" className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg">
//                 <CardHeader>
//                   <CardTitle>Brand Details</CardTitle>
//                   <CardDescription>
//                     Showing {paginatedBrands.length} of {keywordData.brands.length} brands
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="overflow-x-auto">
//                     <table className="w-full text-sm">
//                       <thead className="bg-gradient-to-r from-blue-50 to-cyan-50 sticky top-0">
//                         <tr>
//                           <th className="p-3 text-left font-semibold text-gray-700">Brand</th>
//                           <th className="p-3 text-right font-semibold text-gray-700">Share</th>
//                           <th className="p-3 text-right font-semibold text-gray-700">Reviews</th>
//                           <th className="p-3 text-right font-semibold text-gray-700">Products</th>
//                           <th className="p-3 text-right font-semibold text-gray-700">Avg Rating</th>
//                           <th className="p-3 text-right font-semibold text-gray-700">Avg Price</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {paginatedBrands.map((brand, idx) => (
//                           <tr key={idx} className="border-b border-slate-200 hover:bg-blue-50/50 transition-colors">
//                             <td className="p-3">{brand.brand}</td>
//                             <td className="p-3 text-right">{brand.share_percentage}%</td>
//                             <td className="p-3 text-right">{brand.total_reviews.toLocaleString()}</td>
//                             <td className="p-3 text-right">{brand.product_count}</td>
//                             <td className="p-3 text-right">{brand.avg_rating}</td>
//                             <td className="p-3 text-right">₹{brand.avg_price?.toLocaleString()}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                   {totalPages > 1 && (
//                     <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
//                   )}
//                 </CardContent>
//               </Card>
//             </>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }




















import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Sidebar from "@/components/layout/sidebar";
import { useAuth } from "@/App";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Target,
  BarChart3,
  Search,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Users,
  Award,
  TrendingDown,
  Filter,
  ChevronLeft,
  ChevronRight,
  Lock,
  Crown,
  XCircle,
  X,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface BrandShareData {
  brand: string;
  share_percentage: number;
  total_reviews: number;
  total_sales: number;
  avg_rating: number | null;
  avg_price: number | null;
  product_count: number;
}

interface CategorySOVResponse {
  category_name: string;
  total_products: number;
  total_reviews: number;
  total_sales: number;
  brands: BrandShareData[];
  your_brand_share: number | null;
  market_leader: string | null;
  marketplace: string;
}

interface ProgressTrackingData {
  date: string;
  share_percentage: number;
  reviews: number;
  sales: number;
}

interface ProgressTrackingResponse {
  category_name: string;
  your_brand: string;
  current_share: number;
  target_share: number;
  start_date: string;
  target_date: string;
  days_elapsed: number;
  days_remaining: number;
  is_on_track: boolean;
  required_growth_rate: number;
  actual_growth_rate: number;
  weekly_progress: ProgressTrackingData[];
}

interface CompetitorAnalysis {
  competitor_name: string;
  market_share: number;
  avg_price: number;
  total_products: number;
  avg_rating: number | null;
  total_reviews: number;
  total_sales: number;
}

interface KeywordSOVResponse {
  keyword: string;
  total_products: number;
  total_reviews: number;
  brands: BrandShareData[];
  price_range: {
    min: number;
    max: number;
  };
  marketplace: string;
}

interface Toast {
  id: number;
  title: string;
  description: string;
  variant: "success" | "error";
}

interface UsageLimits {
  count: number;
  limit: number;
  remaining: number;
  subscription_tier: string;
}

export default function ShareOfVoice() {
  const { user, isLoading } = useAuth();
  const userEmail = user?.email || "";
  const userId = user?.id;

  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [marketplace, setMarketplace] = useState<"flipkart" | "amazon">("flipkart");
  const [yourBrand, setYourBrand] = useState("");
  const [sovData, setSovData] = useState<CategorySOVResponse | null>(null);
  const [progressData, setProgressData] = useState<ProgressTrackingResponse | null>(null);
  const [competitors, setCompetitors] = useState<CompetitorAnalysis[]>([]);
  const [keywordSearch, setKeywordSearch] = useState("");
  const [keywordData, setKeywordData] = useState<KeywordSOVResponse | null>(null);
  const [targetShare, setTargetShare] = useState(20);
  const [targetDays, setTargetDays] = useState(90);
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"category" | "keyword">("category");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [competitorPage, setCompetitorPage] = useState(1);
  const [competitorsPerPage] = useState(6);

  // AI Insights state
  const [aiInsights, setAiInsights] = useState<any>(null);
  const [loadingInsights, setLoadingInsights] = useState(false);

  // ✅ NEW: Usage tracking states
  const [usageLimits, setUsageLimits] = useState<UsageLimits | null>(null);
  const [loadingUsage, setLoadingUsage] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const API_BASE_URL = "http://localhost:8000";
  const COLORS = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899", "#14b8a6", "#f97316"];

  // ✅ Fetch usage limits on component mount
  useEffect(() => {
    if (userId) {
      fetchUsageLimits();
    }
  }, [userId]);

  useEffect(() => {
    fetchCategories();
    fetchBrands();
  }, [marketplace]);

  // Reset pagination when data changes
  useEffect(() => {
    setCurrentPage(1);
  }, [sovData, keywordData]);

  useEffect(() => {
    setCompetitorPage(1);
  }, [competitors]);

  // ✅ Fetch current usage limits for SOV analyses
  const fetchUsageLimits = async () => {
    if (!userId) return;
    
    setLoadingUsage(true);
    try {
      const response = await fetch(`${API_BASE_URL}/users/${userId}/sov-usage`, {
        credentials: 'include',
      });
      
      if (response.ok) {
        const data = await response.json();
        setUsageLimits({
          count: data.count,
          limit: data.limit === -1 ? Infinity : data.limit,
          remaining: data.remaining === -1 ? Infinity : data.remaining,
          subscription_tier: data.subscription_tier
        });
      }
    } catch (error) {
      console.error("Failed to fetch SOV usage limits:", error);
    } finally {
      setLoadingUsage(false);
    }
  };

  // ✅ Check if user can perform SOV analysis
  const canAnalyze = usageLimits 
    ? usageLimits.limit === Infinity || usageLimits.count < usageLimits.limit
    : true; // Allow if not logged in

  // ✅ Get tier-based limits for display
  const getTierLimits = (tier: string) => {
    const limits: Record<string, number> = {
      'free': 3,
      'basic': 15,
      'premium': Infinity,
      'enterprise': Infinity
    };
    return limits[tier.toLowerCase()] || 3;
  };

  // ✅ Get upgrade message
  const getUpgradeMessage = () => {
    if (!usageLimits) return "";
    
    const tier = usageLimits.subscription_tier.toLowerCase();
    if (tier === 'free') {
      return "Upgrade to Basic for 15 SOV analyses per month";
    } else if (tier === 'basic') {
      return "Upgrade to Premium for unlimited SOV analyses";
    }
    return "Upgrade for more features";
  };

  // Toasts
  const showToast = (title: string, description: string, variant: "success" | "error" = "success") => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, title, description, variant }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 5000);
  };

  const removeToast = (id: number) => setToasts(prev => prev.filter(t => t.id !== id));

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/sov/categories?marketplace=${marketplace}`);
      if (response.data.categories) {
        setCategories(response.data.categories);
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  const fetchBrands = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/sov/brands?marketplace=${marketplace}`);
      if (response.data.brands) {
        setBrands(response.data.brands);
      }
    } catch (err) {
      console.error("Error fetching brands:", err);
    }
  };

  const analyzeCategorySov = async () => {
    // ✅ Check if user has reached limit
    if (userId && !canAnalyze) {
      setShowUpgradeModal(true);
      showToast(
        "SOV Analysis Limit Reached", 
        `You've used all ${usageLimits?.limit} SOV analyses this month. Upgrade for more!`,
        "error"
      );
      return;
    }

    if (!selectedCategory) {
      setError("Please select a category");
      showToast("Missing Information", "Please select a category to analyze.", "error");
      return;
    }

    setLoading(true);
    setError("");
    setSovData(null);
    setProgressData(null);
    setCompetitors([]);

    try {
      const url = `${API_BASE_URL}/sov/category/${encodeURIComponent(selectedCategory)}?marketplace=${marketplace}${
        yourBrand ? `&your_brand=${encodeURIComponent(yourBrand)}` : ""
      }${userId ? `&user_id=${userId}` : ""}`;
      
      const response = await axios.get(url);

      if (response.data.error) {
        // ✅ Check if it's a limit error
        if (response.data.error.includes("limit") || response.data.error.includes("Limit")) {
          setShowUpgradeModal(true);
          showToast("Analysis Limit Reached", response.data.error, "error");
        } else {
          setError(response.data.error);
          showToast("Analysis Failed", response.data.error, "error");
        }
      } else {
        setSovData(response.data);

        // ✅ Refresh usage limits after successful analysis
        if (userId) {
          await fetchUsageLimits();
        }

        if (yourBrand && response.data.your_brand_share !== null) {
          await fetchCompetitors();
          await fetchProgress();
          await fetchAIInsights();
        }

        showToast(
          "Analysis Complete!", 
          `${marketplace} SOV analysis completed successfully${userId ? ' and saved' : ''}`, 
          "success"
        );

        setTimeout(() => window.scrollTo({ top: 500, behavior: 'smooth' }), 100);
      }
    } catch (err: any) {
      const errorMsg = err.response?.data?.detail || "Failed to fetch SOV data";
      
      // ✅ Check if it's a limit error
      if (err.response?.status === 403 && errorMsg.includes("limit")) {
        setShowUpgradeModal(true);
      }
      
      setError(errorMsg);
      showToast("Analysis Failed", errorMsg, "error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const analyzeKeywordSov = async () => {
    // ✅ Check if user has reached limit
    if (userId && !canAnalyze) {
      setShowUpgradeModal(true);
      showToast(
        "SOV Analysis Limit Reached", 
        `You've used all ${usageLimits?.limit} SOV analyses this month. Upgrade for more!`,
        "error"
      );
      return;
    }

    if (!keywordSearch) {
      setError("Please enter a keyword");
      showToast("Missing Information", "Please enter a keyword to search.", "error");
      return;
    }

    setLoading(true);
    setError("");
    setKeywordData(null);

    try {
      let url = `${API_BASE_URL}/sov/keyword/${encodeURIComponent(keywordSearch)}?marketplace=${marketplace}`;
      if (priceMin) url += `&price_min=${priceMin}`;
      if (priceMax) url += `&price_max=${priceMax}`;
      if (userId) url += `&user_id=${userId}`;

      const response = await axios.get(url);

      if (response.data.error) {
        // ✅ Check if it's a limit error
        if (response.data.error.includes("limit") || response.data.error.includes("Limit")) {
          setShowUpgradeModal(true);
          showToast("Analysis Limit Reached", response.data.error, "error");
        } else {
          setError(response.data.error);
          showToast("Search Failed", response.data.error, "error");
        }
      } else {
        setKeywordData(response.data);

        // ✅ Refresh usage limits after successful analysis
        if (userId) {
          await fetchUsageLimits();
        }

        showToast(
          "Search Complete!", 
          `Keyword "${keywordSearch}" analyzed successfully${userId ? ' and saved' : ''}`, 
          "success"
        );

        setTimeout(() => window.scrollTo({ top: 500, behavior: 'smooth' }), 100);
      }
    } catch (err: any) {
      const errorMsg = err.response?.data?.detail || "Failed to fetch keyword SOV data";
      
      // ✅ Check if it's a limit error
      if (err.response?.status === 403 && errorMsg.includes("limit")) {
        setShowUpgradeModal(true);
      }
      
      setError(errorMsg);
      showToast("Search Failed", errorMsg, "error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCompetitors = async () => {
    try {
      const url = `${API_BASE_URL}/sov/competitors/${encodeURIComponent(selectedCategory)}?your_brand=${encodeURIComponent(
        yourBrand
      )}&marketplace=${marketplace}&limit=20`;
      const response = await axios.get(url);

      if (response.data.competitors) {
        setCompetitors(response.data.competitors);
      }
    } catch (err) {
      console.error("Error fetching competitors:", err);
    }
  };

  const fetchProgress = async () => {
    try {
      const url = `${API_BASE_URL}/sov/progress/${encodeURIComponent(
        selectedCategory
      )}?your_brand=${encodeURIComponent(yourBrand)}&target_share=${targetShare}&target_days=${targetDays}&marketplace=${marketplace}`;
      const response = await axios.get(url);

      if (!response.data.error) {
        setProgressData(response.data);
      }
    } catch (err) {
      console.error("Error fetching progress:", err);
    }
  };

  const fetchAIInsights = async () => {
    if (!yourBrand || !selectedCategory) return;
    
    setLoadingInsights(true);
    try {
      const url = `${API_BASE_URL}/sov/ai-insights?category_name=${encodeURIComponent(
        selectedCategory
      )}&your_brand=${encodeURIComponent(yourBrand)}&target_share=${targetShare}&target_days=${targetDays}&marketplace=${marketplace}`;
      const response = await axios.post(url);

      if (!response.data.error) {
        setAiInsights(response.data);
      }
    } catch (err) {
      console.error("Error fetching AI insights:", err);
    } finally {
      setLoadingInsights(false);
    }
  };

  // Pagination logic for main table
  const paginatedBrands = useMemo(() => {
    const brands = activeTab === "category" ? sovData?.brands || [] : keywordData?.brands || [];
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return brands.slice(indexOfFirstItem, indexOfLastItem);
  }, [sovData, keywordData, currentPage, itemsPerPage, activeTab]);

  const totalPages = useMemo(() => {
    const brands = activeTab === "category" ? sovData?.brands || [] : keywordData?.brands || [];
    return Math.ceil(brands.length / itemsPerPage);
  }, [sovData, keywordData, itemsPerPage, activeTab]);

  // Pagination logic for competitors
  const paginatedCompetitors = useMemo(() => {
    const indexOfLastItem = competitorPage * competitorsPerPage;
    const indexOfFirstItem = indexOfLastItem - competitorsPerPage;
    return competitors.slice(indexOfFirstItem, indexOfLastItem);
  }, [competitors, competitorPage, competitorsPerPage]);

  const totalCompetitorPages = useMemo(() => {
    return Math.ceil(competitors.length / competitorsPerPage);
  }, [competitors, competitorsPerPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const tableElement = document.getElementById('brands-table');
    if (tableElement) {
      tableElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCompetitorPageChange = (newPage: number) => {
    setCompetitorPage(newPage);
    const competitorElement = document.getElementById('competitor-section');
    if (competitorElement) {
      competitorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const Pagination = ({ currentPage, totalPages, onPageChange }: { currentPage: number; totalPages: number; onPageChange: (page: number) => void }) => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex items-center justify-center gap-2 mt-6">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg border border-slate-300 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {startPage > 1 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-blue-50 transition-colors"
            >
              1
            </button>
            {startPage > 2 && <span className="px-2">...</span>}
          </>
        )}

        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded-lg border transition-colors ${
              currentPage === page
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-blue-500"
                : "border-slate-300 hover:bg-blue-50"
            }`}
          >
            {page}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="px-2">...</span>}
            <button
              onClick={() => onPageChange(totalPages)}
              className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-blue-50 transition-colors"
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg border border-slate-300 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <span className="ml-4 text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FBFF] via-[#E3F2FD] to-[#DFF5FF] flex flex-col lg:flex-row">
      {/* ✅ Upgrade Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-4">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">SOV Analysis Limit Reached</h3>
              <p className="text-slate-600 mb-4">
                You've used all <span className="font-bold text-red-600">{usageLimits?.limit}</span> Share of Voice analyses this month on the <span className="font-semibold">{usageLimits?.subscription_tier.toUpperCase()}</span> plan.
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 mb-6 border-2 border-blue-200">
                <Crown className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-slate-700">
                  {getUpgradeMessage()}
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowUpgradeModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => window.location.href = "/subscription"}
                >
                  Upgrade Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toasts */}
      <div className="fixed bottom-4 right-4 z-50 space-y-2 max-w-md">
        {toasts.map(t => (
          <div key={t.id} className={`flex items-start gap-3 p-4 rounded-lg shadow-lg border-2 backdrop-blur-md animate-in slide-in-from-right ${
            t.variant === "success" ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300"
          }`}>
            {t.variant === "success" ? <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" /> : <XCircle className="h-5 w-5 text-red-600 mt-0.5" />}
            <div className="flex-1 min-w-0">
              <p className={`font-semibold text-sm ${t.variant === "success" ? "text-green-900" : "text-red-900"}`}>{t.title}</p>
              <p className={`text-sm mt-1 ${t.variant === "success" ? "text-green-700" : "text-red-700"}`}>{t.description}</p>
            </div>
            <button onClick={() => removeToast(t.id)} className={`${t.variant === "success" ? "text-green-600 hover:text-green-800" : "text-red-600 hover:text-red-800"}`}>
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
          <aside className="fixed inset-y-0 left-0 w-64 bg-white z-50 lg:hidden shadow-2xl transform transition-transform">
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMobileMenuOpen(false)}>X</button>
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
        <header className="bg-white/70 backdrop-blur-xl border border-sky-100 shadow-lg rounded-2xl px-6 sm:px-12 py-4 sm:py-6 mb-6 flex items-center justify-between sticky top-4 z-20 mx-0 sm:mx-6">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-sky-100 transition-colors"
            >
              <span className="text-xl font-bold">☰</span>
            </button>
            <div>
              <h2 className="text-3xl font-bold text-sky-900">Market Visibility Score</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Track your market share and competitor insights
              </p>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="px-4 sm:px-6 flex-1 overflow-y-auto pb-6 space-y-6">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl mb-4 shadow-inner">
              <BarChart3 className="h-10 w-10 text-blue-500" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">
              Market Share Intelligence
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Analyze your brand's market position, track competitors, and monitor progress toward your goals
            </p>

            {/* ✅ User Status & Usage Display */}
            {isLoading ? (
              <p className="text-sm text-gray-500 font-medium">Checking session...</p>
            ) : userEmail ? (
              <div className="space-y-2">
                <p className="text-sm text-green-600 font-medium">
                  ✓ Logged in as: {userEmail} (SOV Analysis will be tracked)
                </p>
                
                {/* ✅ Usage Stats Card */}
                {usageLimits && (
                  <div className="bg-white rounded-xl p-4 max-w-md mx-auto border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-slate-600 font-medium">SOV Analyses This Month</p>
                      <Badge className="bg-blue-100 text-blue-800">
                        {usageLimits.subscription_tier.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex-1 bg-slate-200 rounded-full h-3 mr-3">
                        <div 
                          className={`h-3 rounded-full transition-all ${
                            !canAnalyze ? 'bg-red-500' : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                          }`}
                          style={{ 
                            width: usageLimits.limit === Infinity 
                              ? '100%' 
                              : `${Math.min((usageLimits.count / usageLimits.limit) * 100, 100)}%` 
                          }}
                        />
                      </div>
                      <span className="text-sm font-bold text-slate-700">
                        {usageLimits.count} / {usageLimits.limit === Infinity ? '∞' : usageLimits.limit}
                      </span>
                    </div>
                    
                    {!canAnalyze && usageLimits.limit !== Infinity && (
                      <Alert className="border-red-300 bg-red-50 mt-3">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                        <AlertDescription className="text-xs text-red-700">
                          Limit reached! <a href="/subscription" className="underline font-semibold">Upgrade</a> for more SOV analyses.
                        </AlertDescription>
                      </Alert>
                    )}
                    
                    {canAnalyze && usageLimits.remaining !== Infinity && usageLimits.remaining <= 2 && (
                      <p className="text-xs text-orange-600 font-medium mt-2">
                        ⚠️ Only {usageLimits.remaining} SOV analyses remaining
                      </p>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <p className="text-sm text-orange-600 font-medium">
                ⚠️ Not logged in - SOV Analysis won't be tracked
              </p>
            )}
          </div>

          {/* Tab Navigation */}
          <Card className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg">
            <CardContent className="p-0">
              <div className="flex border-b border-slate-200">
                <button
                  onClick={() => {
                    setActiveTab("category");
                    setCurrentPage(1);
                  }}
                  className={`flex-1 py-4 px-6 font-medium transition-all ${
                    activeTab === "category"
                      ? "border-b-2 border-blue-500 text-blue-600 bg-blue-50/50"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Category Analysis
                  </div>
                </button>
                <button
                  onClick={() => {
                    setActiveTab("keyword");
                    setCurrentPage(1);
                  }}
                  className={`flex-1 py-4 px-6 font-medium transition-all ${
                    activeTab === "keyword"
                      ? "border-b-2 border-blue-500 text-blue-600 bg-blue-50/50"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Search className="w-5 h-5" />
                    Keyword Search
                  </div>
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Controls Panel */}
          <Card className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-blue-600" />
                Search Parameters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Marketplace</label>
                  <select
                    value={marketplace}
                    onChange={(e) => setMarketplace(e.target.value as "flipkart" | "amazon")}
                    disabled={!!userId && !canAnalyze}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="flipkart">Flipkart</option>
                    <option value="amazon">Amazon</option>
                  </select>
                </div>

                {activeTab === "category" ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        disabled={!!userId && !canAnalyze}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      >
                        <option value="">Select Category</option>
                        {categories.map((cat, idx) => (
                          <option key={idx} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Brand <span className="text-gray-500 text-xs">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={yourBrand}
                        onChange={(e) => setYourBrand(e.target.value)}
                        placeholder="Enter your brand name"
                        disabled={!!userId && !canAnalyze}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                    </div>
                    <div className="flex items-end">
                      <Button
                        onClick={analyzeCategorySov}
                        disabled={loading || (!!userId && !canAnalyze)}
                        className={`w-full ${
                          userId && !canAnalyze
                            ? 'bg-slate-300 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
                        } text-white py-3 px-4 rounded-lg shadow-md transition-all flex items-center justify-center gap-2`}
                      >
                        {loading ? (
                          <><RefreshCw className="w-5 h-5 animate-spin" /> Analyzing...</>
                        ) : userId && !canAnalyze ? (
                          <><Lock className="w-5 h-5" /> Limit Reached</>
                        ) : (
                          <><Search className="w-5 h-5" /> Analyze</>
                        )}
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Keyword</label>
                      <input
                        type="text"
                        value={keywordSearch}
                        onChange={(e) => setKeywordSearch(e.target.value)}
                        placeholder="e.g., wireless earbuds"
                        disabled={!!userId && !canAnalyze}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Price Min (₹)</label>
                      <input
                        type="number"
                        value={priceMin}
                        onChange={(e) => setPriceMin(e.target.value)}
                        placeholder="Min price"
                        disabled={!!userId && !canAnalyze}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Price Max (₹)</label>
                      <input
                        type="number"
                        value={priceMax}
                        onChange={(e) => setPriceMax(e.target.value)}
                        placeholder="Max price"
                        disabled={!!userId && !canAnalyze}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                    </div>
                    <div className="flex items-end">
                      <Button
                        onClick={analyzeKeywordSov}
                        disabled={loading || (!!userId && !canAnalyze)}
                        className={`w-full ${
                          userId && !canAnalyze
                            ? 'bg-slate-300 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
                        } text-white py-3 px-4 rounded-lg shadow-md transition-all flex items-center justify-center gap-2`}
                      >
                        {loading ? (
                          <><RefreshCw className="w-5 h-5 animate-spin" /> Searching...</>
                        ) : userId && !canAnalyze ? (
                          <><Lock className="w-5 h-5" /> Limit Reached</>
                        ) : (
                          <><Search className="w-5 h-5" /> Search</>
                        )}
                      </Button>
                    </div>
                  </>
                )}
              </div>

              {activeTab === "category" && yourBrand && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target Share (%)
                    </label>
                    <input
                      type="number"
                      value={targetShare}
                      onChange={(e) => setTargetShare(Number(e.target.value))}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      min="0"
                      max="100"
                      disabled={!!userId && !canAnalyze}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Days</label>
                    <input
                      type="number"
                      value={targetDays}
                      onChange={(e) => setTargetDays(Number(e.target.value))}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      min="1"
                      disabled={!!userId && !canAnalyze}
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Error Message */}
          {error && (
            <Card className="bg-red-50/70 backdrop-blur-md border-l-4 border-red-500 rounded-2xl shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-red-700">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-medium">{error}</span>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Loading State */}
          {loading && (
            <Card className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg">
              <CardContent className="p-12">
                <div className="flex flex-col items-center justify-center gap-4">
                  <RefreshCw className="w-12 h-12 text-blue-500 animate-spin" />
                  <p className="text-gray-600 font-medium">Analyzing data...</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Category Analysis Results */}
          {!loading && activeTab === "category" && sovData && (
            <>
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="relative bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                  <CardContent className="p-6 relative">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100 text-sm font-medium mb-1">Total Products</p>
                        <p className="text-4xl font-black">{sovData.total_products.toLocaleString()}</p>
                        <p className="text-blue-200 text-xs mt-2">In this category</p>
                      </div>
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <BarChart3 className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="relative bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group">
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                  <CardContent className="p-6 relative">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-100 text-sm font-medium mb-1">Total Reviews</p>
                        <p className="text-4xl font-black">{sovData.total_reviews.toLocaleString()}</p>
                        <p className="text-green-200 text-xs mt-2">Customer feedback</p>
                      </div>
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="relative bg-gradient-to-br from-purple-500 to-pink-600 text-white border-0 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                  <CardContent className="p-6 relative">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-purple-100 text-sm font-medium mb-1">Market Leader</p>
                        <p className="text-2xl font-black truncate">{sovData.market_leader}</p>
                        <p className="text-purple-200 text-xs mt-2">Top performing brand</p>
                      </div>
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {sovData.your_brand_share !== null && (
                  <Card className="relative bg-gradient-to-br from-orange-500 to-red-600 text-white border-0 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group">
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                    <CardContent className="p-6 relative">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-orange-100 text-sm font-medium mb-1">Your Share</p>
                          <p className="text-4xl font-black">{sovData.your_brand_share}%</p>
                          <p className="text-orange-200 text-xs mt-2">Market position</p>
                        </div>
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                          <Target className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Market Share Distribution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-white/90 via-blue-50/30 to-cyan-50/30 backdrop-blur-md border-2 border-blue-200/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-2xl"></div>
                  <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                        <BarChart3 className="w-5 h-5 text-white" />
                      </div>
                      Market Share Distribution
                    </CardTitle>
                    <CardDescription className="text-gray-600">Top 8 brands by market dominance</CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <ResponsiveContainer width="100%" height={320}>
                      <PieChart>
                        <defs>
                          {COLORS.map((color, idx) => (
                            <linearGradient key={idx} id={`gradient-${idx}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor={color} stopOpacity={0.8}/>
                              <stop offset="100%" stopColor={color} stopOpacity={1}/>
                            </linearGradient>
                          ))}
                        </defs>
                        <Pie
                          data={sovData.brands.slice(0, 8).map((brand, idx) => ({
                            name: brand.brand,
                            value: brand.share_percentage,
                          }))}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          label={({ name, value }) => `${value}%`}
                          outerRadius={110}
                          innerRadius={60}
                          fill="#8884d8"
                          dataKey="value"
                          paddingAngle={2}
                        >
                          {sovData.brands.slice(0, 8).map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={`url(#gradient-${index % COLORS.length})`}
                              strokeWidth={2}
                              stroke="#fff"
                            />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                            borderRadius: '12px',
                            border: '2px solid #e2e8f0',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                          }}
                        />
                        <Legend 
                          verticalAlign="bottom" 
                          height={36}
                          formatter={(value) => <span className="text-sm font-medium">{value}</span>}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-white/90 via-purple-50/30 to-pink-50/30 backdrop-blur-md border-2 border-purple-200/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-2xl"></div>
                  <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      Top Brands by Reviews
                    </CardTitle>
                    <CardDescription className="text-gray-600">Customer engagement metrics</CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <ResponsiveContainer width="100%" height={320}>
                      <BarChart data={sovData.brands.slice(0, 8)} barGap={8}>
                        <defs>
                          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                            <stop offset="100%" stopColor="#ec4899" stopOpacity={1}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis 
                          dataKey="brand" 
                          angle={-45} 
                          textAnchor="end" 
                          height={100} 
                          fontSize={11}
                          stroke="#64748b"
                        />
                        <YAxis stroke="#64748b" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                            borderRadius: '12px',
                            border: '2px solid #e2e8f0',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                          }}
                          cursor={{fill: 'rgba(139, 92, 246, 0.1)'}}
                        />
                        <Bar 
                          dataKey="total_reviews" 
                          fill="url(#barGradient)" 
                          name="Total Reviews"
                          radius={[8, 8, 0, 0]}
                          animationDuration={800}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Brand Table */}
              <Card id="brands-table" className="bg-gradient-to-br from-white/95 via-slate-50/50 to-blue-50/30 backdrop-blur-md border-2 border-slate-200/60 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-transparent rounded-full blur-3xl"></div>
                <CardHeader className="relative bg-gradient-to-r from-slate-50 to-blue-50/50 border-b-2 border-slate-200/50">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    Detailed Brand Analysis
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base mt-2">
                    Showing {paginatedBrands.length} of {sovData.brands.length} brands • {yourBrand && <span className="text-blue-600 font-semibold">Your brand highlighted</span>}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gradient-to-r from-slate-100 via-blue-50 to-cyan-50 sticky top-0 z-10">
                        <tr className="border-b-2 border-slate-200">
                          <th className="p-4 text-left font-bold text-gray-800 uppercase tracking-wide text-xs">
                            <div className="flex items-center gap-2">
                              <Award className="w-4 h-4 text-blue-600" />
                              Brand
                            </div>
                          </th>
                          <th className="p-4 text-right font-bold text-gray-800 uppercase tracking-wide text-xs">
                            <div className="flex items-center justify-end gap-2">
                              <Target className="w-4 h-4 text-purple-600" />
                              Share %
                            </div>
                          </th>
                          <th className="p-4 text-right font-bold text-gray-800 uppercase tracking-wide text-xs">
                            <div className="flex items-center justify-end gap-2">
                              <Users className="w-4 h-4 text-green-600" />
                              Reviews
                            </div>
                          </th>
                          <th className="p-4 text-right font-bold text-gray-800 uppercase tracking-wide text-xs">Sales</th>
                          <th className="p-4 text-right font-bold text-gray-800 uppercase tracking-wide text-xs">Products</th>
                          <th className="p-4 text-right font-bold text-gray-800 uppercase tracking-wide text-xs">
                            <div className="flex items-center justify-end gap-2">
                              ⭐ Rating
                            </div>
                          </th>
                          <th className="p-4 text-right font-bold text-gray-800 uppercase tracking-wide text-xs">Avg Price</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white/60">
                        {paginatedBrands.map((brand, idx) => (
                          <tr
                            key={idx}
                            className={`border-b border-slate-200/60 hover:bg-gradient-to-r hover:from-blue-50/70 hover:to-cyan-50/50 transition-all duration-200 group ${
                              brand.brand.toLowerCase() === yourBrand.toLowerCase() 
                                ? "bg-gradient-to-r from-blue-100/70 to-cyan-100/50 border-l-4 border-l-blue-500 font-semibold shadow-sm" 
                                : ""
                            }`}
                          >
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-md ${
                                  idx === 0 ? "bg-gradient-to-br from-yellow-400 to-yellow-600" :
                                  idx === 1 ? "bg-gradient-to-br from-gray-300 to-gray-500" :
                                  idx === 2 ? "bg-gradient-to-br from-orange-400 to-orange-600" :
                                  "bg-gradient-to-br from-blue-400 to-blue-600"
                                }`}>
                                  {(currentPage - 1) * itemsPerPage + idx + 1}
                                </div>
                                <span className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors">
                                  {brand.brand}
                                </span>
                              </div>
                            </td>
                            <td className="p-4 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-300"
                                    style={{ width: `${Math.min(brand.share_percentage * 2, 100)}%` }}
                                  ></div>
                                </div>
                                <span className="font-bold text-blue-700 min-w-[3rem]">{brand.share_percentage}%</span>
                              </div>
                            </td>
                            <td className="p-4 text-right">
                              <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full font-semibold text-xs">
                                {brand.total_reviews.toLocaleString()}
                              </span>
                            </td>
                            <td className="p-4 text-right font-medium text-gray-700">{brand.total_sales.toLocaleString()}</td>
                            <td className="p-4 text-right">
                              <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-800 rounded-lg font-medium text-xs">
                                {brand.product_count}
                              </span>
                            </td>
                            <td className="p-4 text-right">
                              <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full font-semibold text-xs">
                                ⭐ {brand.avg_rating}
                              </span>
                            </td>
                            <td className="p-4 text-right">
                              <span className="font-bold text-emerald-700">₹{brand.avg_price?.toLocaleString()}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {totalPages > 1 && (
                    <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-50/30 border-t-2 border-slate-200/50">
                      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Progress Tracking */}
              {yourBrand && progressData && (
                <>
                  <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 text-transparent bg-clip-text flex items-center justify-center gap-2">
                      <Target className="w-8 h-8 text-blue-500" />
                      Progress Tracking
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card
                      className={`bg-white/70 backdrop-blur-md border-l-4 ${
                        progressData.is_on_track ? "border-green-500" : "border-red-500"
                      } rounded-2xl shadow-lg`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">Status</p>
                            <p className="text-2xl font-bold">{progressData.is_on_track ? "On Track" : "Behind"}</p>
                          </div>
                          {progressData.is_on_track ? (
                            <CheckCircle className="w-10 h-10 text-green-500" />
                          ) : (
                            <AlertCircle className="w-10 h-10 text-red-500" />
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/70 backdrop-blur-md border-l-4 border-blue-500 rounded-2xl shadow-lg">
                      <CardContent className="p-6">
                        <div>
                          <p className="text-sm text-gray-600">Current Share</p>
                          <p className="text-3xl font-bold text-blue-600">{progressData.current_share}%</p>
                          <p className="text-xs text-gray-500 mt-1">Target: {progressData.target_share}%</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/70 backdrop-blur-md border-l-4 border-purple-500 rounded-2xl shadow-lg">
                      <CardContent className="p-6">
                        <div>
                          <p className="text-sm text-gray-600">Days Remaining</p>
                          <p className="text-3xl font-bold text-purple-600">{progressData.days_remaining}</p>
                          <p className="text-xs text-gray-500 mt-1">Target: {progressData.target_date}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg">
                    <CardHeader>
                      <CardTitle>Growth Rate Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm text-gray-600 mb-2">Required Growth Rate</p>
                          <div className="flex items-baseline">
                            <span className="text-4xl font-bold text-blue-600">
                              {(progressData.required_growth_rate * 100).toFixed(2)}%
                            </span>
                            <span className="text-sm ml-2 text-gray-500">per day</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-2">Actual Growth Rate</p>
                          <div className="flex items-baseline">
                            <span
                              className={`text-4xl font-bold ${
                                progressData.actual_growth_rate >= progressData.required_growth_rate
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {(progressData.actual_growth_rate * 100).toFixed(2)}%
                            </span>
                            <span className="text-sm ml-2 text-gray-500">per day</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-white/90 via-green-50/30 to-emerald-50/30 backdrop-blur-md border-2 border-green-200/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-400/10 to-transparent rounded-full blur-3xl"></div>
                    <CardHeader className="relative">
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        Weekly Progress Projection
                      </CardTitle>
                      <CardDescription className="text-gray-600">Track your growth trajectory</CardDescription>
                    </CardHeader>
                    <CardContent className="relative">
                      <ResponsiveContainer width="100%" height={320}>
                        <LineChart data={progressData.weekly_progress}>
                          <defs>
                            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#10b981" stopOpacity={0.8}/>
                              <stop offset="100%" stopColor="#059669" stopOpacity={0.3}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis dataKey="date" stroke="#64748b" fontSize={11} />
                          <YAxis stroke="#64748b" />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                              borderRadius: '12px',
                              border: '2px solid #e2e8f0',
                              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }}
                          />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="share_percentage"
                            stroke="#10b981"
                            strokeWidth={3}
                            name="Market Share %"
                            dot={{ fill: '#10b981', r: 5 }}
                            activeDot={{ r: 8, fill: '#059669' }}
                            fill="url(#lineGradient)"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </>
              )}

              {/* AI Brain - Insights & Recommendations */}
              {yourBrand && aiInsights && (
                <>
                  <div className="text-center space-y-2 mt-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl mb-4 shadow-lg">
                      <span className="text-4xl">🧠</span>
                    </div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 text-transparent bg-clip-text">
                      AI-Powered Insights
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                      Strategic recommendations powered by Insydz
                    </p>
                  </div>

                  {/* AI Generated Insights - Mistral Analysis */}
                  {aiInsights.ai_generated_insights && (
                    <Card className="relative bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 text-white border-0 rounded-3xl shadow-2xl overflow-hidden">
                      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
                      <CardHeader className="relative">
                        <CardTitle className="text-3xl flex items-center gap-3">
                          <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl">
                            <span className="text-3xl">🤖</span>
                          </div>
                          Insydz Strategic Analysis
                        </CardTitle>
                        <CardDescription className="text-purple-100 text-base">
                          {loadingInsights ? "Analyzing market data..." : "Deep learning insights from your market position"}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="relative">
                        {loadingInsights ? (
                          <div className="flex flex-col items-center justify-center py-12 gap-4">
                            <RefreshCw className="w-12 h-12 text-white animate-spin" />
                            <p className="text-white/80 text-lg">AI is analyzing your competitive landscape...</p>
                          </div>
                        ) : (
                          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                            <pre className="whitespace-pre-wrap text-white font-mono text-sm leading-relaxed">
                              {aiInsights.ai_generated_insights}
                            </pre>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}

                  {/* Current Analysis Overview */}
                  <Card className="bg-gradient-to-br from-violet-500 to-purple-600 text-white border-0 rounded-3xl shadow-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <CardHeader className="relative">
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          <Target className="w-6 h-6" />
                        </div>
                        Strategic Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                          <p className="text-violet-100 text-sm mb-2">Current Position</p>
                          <p className="text-4xl font-black">{aiInsights.current_analysis.current_share}%</p>
                          <p className="text-violet-200 text-xs mt-2">Rank #{aiInsights.market_position.rank}</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                          <p className="text-violet-100 text-sm mb-2">Target Goal</p>
                          <p className="text-4xl font-black">{aiInsights.current_analysis.target_share}%</p>
                          <p className="text-violet-200 text-xs mt-2">In {aiInsights.current_analysis.days_to_target} days</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                          <p className="text-violet-100 text-sm mb-2">Gap to Close</p>
                          <p className="text-4xl font-black">{aiInsights.current_analysis.gap}%</p>
                          <p className="text-violet-200 text-xs mt-2">Market share needed</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                          <p className="text-violet-100 text-sm mb-2">Daily Growth Needed</p>
                          <p className="text-4xl font-black">{(aiInsights.current_analysis.required_daily_growth * 100).toFixed(3)}%</p>
                          <p className="text-violet-200 text-xs mt-2">Per day</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Actionable Recommendations */}
                  {aiInsights.actionable_recommendations.length > 0 && (
                    <Card className="bg-gradient-to-br from-white/95 via-orange-50/50 to-red-50/30 backdrop-blur-md border-2 border-orange-200/60 rounded-3xl shadow-2xl overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-3xl"></div>
                      <CardHeader className="relative">
                        <CardTitle className="text-2xl flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-2xl">💡</span>
                          </div>
                          Actionable Recommendations
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-base">
                          Prioritized actions to reach your target
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="relative">
                        <div className="space-y-4">
                          {aiInsights.actionable_recommendations.map((rec: any, idx: number) => (
                            <div
                              key={idx}
                              className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border-2 border-orange-200/50 hover:shadow-xl transition-all duration-300 group"
                            >
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold shadow-md ${
                                    rec.priority === 'High' ? 'bg-gradient-to-br from-red-500 to-red-600' :
                                    rec.priority === 'Medium' ? 'bg-gradient-to-br from-yellow-500 to-orange-500' :
                                    'bg-gradient-to-br from-blue-500 to-blue-600'
                                  }`}>
                                    {idx + 1}
                                  </div>
                                  <div>
                                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors">
                                      {rec.type}
                                    </h4>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                                      rec.priority === 'High' ? 'bg-red-100 text-red-700' :
                                      rec.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                      'bg-blue-100 text-blue-700'
                                    }`}>
                                      {rec.priority} Priority
                                    </span>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm text-gray-600">Current</p>
                                  <p className="text-2xl font-bold text-gray-900">{rec.current}</p>
                                  <p className="text-xs text-gray-500">Target: {rec.benchmark}</p>
                                </div>
                              </div>
                              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl mb-3">
                                <p className="text-gray-800 font-medium">📋 Action: {rec.action}</p>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <TrendingUp className="w-4 h-4 text-green-600" />
                                <span className="text-green-700 font-semibold">Impact: {rec.impact}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Growth Strategy */}
                  {aiInsights.growth_strategy.length > 0 && (
                    <Card className="bg-gradient-to-br from-white/95 via-green-50/50 to-emerald-50/30 backdrop-blur-md border-2 border-green-200/60 rounded-3xl shadow-2xl overflow-hidden">
                      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-green-400/10 to-transparent rounded-full blur-3xl"></div>
                      <CardHeader className="relative">
                        <CardTitle className="text-2xl flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-2xl">🚀</span>
                          </div>
                          Growth Strategy Roadmap
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-base">
                          Phased approach to reach {aiInsights.current_analysis.target_share}% market share
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {aiInsights.growth_strategy.map((phase: any, idx: number) => (
                            <div
                              key={idx}
                              className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border-2 border-green-200/50 hover:shadow-xl transition-all duration-300"
                            >
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-lg">
                                  {idx + 1}
                                </div>
                                <div>
                                  <h4 className="font-bold text-gray-900">{phase.phase}</h4>
                                  <p className="text-sm text-green-600 font-semibold">{phase.focus}</p>
                                </div>
                              </div>
                              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl mb-4">
                                <p className="text-sm font-bold text-gray-700 mb-2">Actions:</p>
                                <ul className="space-y-2">
                                  {phase.actions.map((action: string, i: number) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                      <span className="text-green-600 font-bold">✓</span>
                                      <span>{action}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl">
                                <Target className="w-4 h-4" />
                                <span className="font-bold text-sm">{phase.target}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Product Gaps */}
                  {aiInsights.product_gaps.length > 0 && (
                    <Card className="bg-gradient-to-br from-white/95 via-blue-50/50 to-cyan-50/30 backdrop-blur-md border-2 border-blue-200/60 rounded-3xl shadow-2xl overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
                      <CardHeader className="relative">
                        <CardTitle className="text-2xl flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-2xl">🔍</span>
                          </div>
                          Top Product Gaps
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-base">
                          High-demand products your competitors offer but you don't
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="relative">
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead className="bg-gradient-to-r from-blue-100 to-cyan-100">
                              <tr>
                                <th className="p-4 text-left font-bold text-gray-800">Product Type</th>
                                <th className="p-4 text-right font-bold text-gray-800">Competitors</th>
                                <th className="p-4 text-right font-bold text-gray-800">Avg Price</th>
                                <th className="p-4 text-right font-bold text-gray-800">Rating</th>
                                <th className="p-4 text-right font-bold text-gray-800">Demand</th>
                                <th className="p-4 text-center font-bold text-gray-800">Opportunity</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white/60">
                              {aiInsights.product_gaps.map((gap: any, idx: number) => (
                                <tr key={idx} className="border-b border-slate-200 hover:bg-blue-50/50 transition-colors">
                                  <td className="p-4 font-medium text-gray-900">{gap.product_type}</td>
                                  <td className="p-4 text-right">
                                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold">
                                      {gap.competitors_offering}
                                    </span>
                                  </td>
                                  <td className="p-4 text-right font-bold text-emerald-700">₹{gap.avg_price.toLocaleString()}</td>
                                  <td className="p-4 text-right">
                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full font-semibold">
                                      ⭐ {gap.avg_rating}
                                    </span>
                                  </td>
                                  <td className="p-4 text-right font-bold text-gray-700">{gap.total_demand.toLocaleString()}</td>
                                  <td className="p-4 text-center">
                                    <span className={`inline-block px-4 py-2 rounded-full font-bold text-sm ${
                                      gap.opportunity === 'High' ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white' :
                                      gap.opportunity === 'Medium' ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white' :
                                      'bg-gradient-to-r from-blue-400 to-cyan-400 text-white'
                                    }`}>
                                      {gap.opportunity}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Pricing Insights */}
                  {aiInsights.pricing_insights && Object.keys(aiInsights.pricing_insights).length > 0 && (
                    <Card className="bg-gradient-to-br from-white/95 via-purple-50/50 to-pink-50/30 backdrop-blur-md border-2 border-purple-200/60 rounded-3xl shadow-2xl overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-3xl"></div>
                      <CardHeader className="relative">
                        <CardTitle className="text-2xl flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-2xl">💰</span>
                          </div>
                          Pricing Intelligence
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border-2 border-purple-200/50">
                            <h4 className="font-bold text-gray-900 mb-4">Price Positioning</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-gray-600">Your Price:</span>
                                <span className="text-2xl font-black text-purple-700">₹{aiInsights.pricing_insights.your_price}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-gray-600">Market Avg:</span>
                                <span className="text-xl font-bold text-gray-700">₹{aiInsights.pricing_insights.market_average}</span>
                              </div>
                              <div className="mt-4 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                                <p className="text-sm font-bold text-gray-800">Category: {aiInsights.pricing_insights.price_positioning}</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border-2 border-purple-200/50">
                            <h4 className="font-bold text-gray-900 mb-4">Competitive Landscape</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                                <span className="text-gray-700 font-medium">Budget Competitors:</span>
                                <span className="text-xl font-bold text-blue-700">{aiInsights.pricing_insights.budget_competitors}</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                                <span className="text-gray-700 font-medium">Similar Price:</span>
                                <span className="text-xl font-bold text-green-700">{aiInsights.pricing_insights.similar_price_competitors}</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                                <span className="text-gray-700 font-medium">Premium:</span>
                                <span className="text-xl font-bold text-purple-700">{aiInsights.pricing_insights.premium_competitors}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl">
                          <p className="text-lg font-bold">💡 {aiInsights.pricing_insights.recommendation}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </>
              )}

              {/* Competitor Analysis */}
              {competitors.length > 0 && (
                <div id="competitor-section">
                  <div className="text-center space-y-2 mb-6">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 text-transparent bg-clip-text flex items-center justify-center gap-2">
                      <Users className="w-8 h-8 text-blue-500" />
                      Competitor Analysis
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {paginatedCompetitors.map((competitor, idx) => (
                      <Card
                        key={idx}
                        className="relative bg-gradient-to-br from-white via-slate-50 to-blue-50/30 backdrop-blur-md border-2 border-slate-200/60 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden group"
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                        
                        {/* Rank Badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg ${
                            idx === 0 ? "bg-gradient-to-br from-yellow-400 to-yellow-600" :
                            idx === 1 ? "bg-gradient-to-br from-gray-300 to-gray-500" :
                            idx === 2 ? "bg-gradient-to-br from-orange-400 to-orange-600" :
                            "bg-gradient-to-br from-blue-500 to-blue-700"
                          }`}>
                            {(competitorPage - 1) * competitorsPerPage + idx + 1}
                          </div>
                        </div>

                        <CardContent className="p-6 pt-20 relative">
                          <div className="flex justify-between items-start mb-6">
                            <div>
                              <h4 className="text-2xl font-black text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
                                {competitor.competitor_name}
                              </h4>
                              <p className="text-sm text-gray-500 font-medium">Competitor Analysis</p>
                            </div>
                            <div className="text-right bg-gradient-to-br from-blue-500 to-cyan-500 text-white px-4 py-3 rounded-2xl shadow-lg">
                              <p className="text-3xl font-black">{competitor.market_share}%</p>
                              <p className="text-xs opacity-90">Share</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-2xl border border-blue-200/50 hover:shadow-md transition-shadow">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                                  <BarChart3 className="w-4 h-4 text-white" />
                                </div>
                                <p className="text-xs text-gray-600 font-semibold uppercase">Products</p>
                              </div>
                              <p className="text-2xl font-black text-blue-700">{competitor.total_products}</p>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-4 rounded-2xl border border-green-200/50 hover:shadow-md transition-shadow">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                                  <Users className="w-4 h-4 text-white" />
                                </div>
                                <p className="text-xs text-gray-600 font-semibold uppercase">Reviews</p>
                              </div>
                              <p className="text-2xl font-black text-green-700">{competitor.total_reviews.toLocaleString()}</p>
                            </div>

                            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 p-4 rounded-2xl border border-yellow-200/50 hover:shadow-md transition-shadow">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                                  <span className="text-white text-sm">⭐</span>
                                </div>
                                <p className="text-xs text-gray-600 font-semibold uppercase">Rating</p>
                              </div>
                              <p className="text-2xl font-black text-yellow-700">{competitor.avg_rating}</p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-4 rounded-2xl border border-purple-200/50 hover:shadow-md transition-shadow">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                                  <span className="text-white text-sm font-bold">₹</span>
                                </div>
                                <p className="text-xs text-gray-600 font-semibold uppercase">Avg Price</p>
                              </div>
                              <p className="text-xl font-black text-purple-700">₹{competitor.avg_price.toLocaleString()}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  {totalCompetitorPages > 1 && (
                    <Pagination 
                      currentPage={competitorPage} 
                      totalPages={totalCompetitorPages} 
                      onPageChange={handleCompetitorPageChange} 
                    />
                  )}
                </div>
              )}
            </>
          )}

          {/* Keyword Analysis Results */}
          {!loading && activeTab === "keyword" && keywordData && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Total Products</p>
                        <p className="text-3xl font-bold text-blue-600">{keywordData.total_products.toLocaleString()}</p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Total Reviews</p>
                        <p className="text-3xl font-bold text-green-600">{keywordData.total_reviews.toLocaleString()}</p>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Price Range</p>
                      <p className="text-lg font-bold text-purple-600">
                        ₹{keywordData.price_range.min.toLocaleString()} - ₹{keywordData.price_range.max.toLocaleString()}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg">
                <CardHeader>
                  <CardTitle>Brand Distribution for "{keywordData.keyword}"</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={keywordData.brands.slice(0, 10)}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="brand" angle={-45} textAnchor="end" height={100} fontSize={12} />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="share_percentage" fill="#3b82f6" name="Market Share %" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card id="brands-table" className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg">
                <CardHeader>
                  <CardTitle>Brand Details</CardTitle>
                  <CardDescription>
                    Showing {paginatedBrands.length} of {keywordData.brands.length} brands
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gradient-to-r from-blue-50 to-cyan-50 sticky top-0">
                        <tr>
                          <th className="p-3 text-left font-semibold text-gray-700">Brand</th>
                          <th className="p-3 text-right font-semibold text-gray-700">Share</th>
                          <th className="p-3 text-right font-semibold text-gray-700">Reviews</th>
                          <th className="p-3 text-right font-semibold text-gray-700">Products</th>
                          <th className="p-3 text-right font-semibold text-gray-700">Avg Rating</th>
                          <th className="p-3 text-right font-semibold text-gray-700">Avg Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedBrands.map((brand, idx) => (
                          <tr key={idx} className="border-b border-slate-200 hover:bg-blue-50/50 transition-colors">
                            <td className="p-3">{brand.brand}</td>
                            <td className="p-3 text-right">{brand.share_percentage}%</td>
                            <td className="p-3 text-right">{brand.total_reviews.toLocaleString()}</td>
                            <td className="p-3 text-right">{brand.product_count}</td>
                            <td className="p-3 text-right">{brand.avg_rating}</td>
                            <td className="p-3 text-right">₹{brand.avg_price?.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {totalPages > 1 && (
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                  )}
                </CardContent>
              </Card>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
