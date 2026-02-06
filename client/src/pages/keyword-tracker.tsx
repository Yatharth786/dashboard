// import { useState, useEffect } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useAuth } from "@/App";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import { Badge } from "@/components/ui/badge";
// import {
//   Loader2,
//   Search,
//   TrendingUp,
//   Package,
//   Menu,
//   X,
//   Plus,
//   Trash2,
//   RefreshCw,
//   CheckCircle2,
//   XCircle,
//   Target,
//   BarChart3,
//   Clock,
// } from "lucide-react";
// import Sidebar from "@/components/layout/sidebar";

// interface TrackedProduct {
//   id: number;
//   seller_id: string;
//   asin: string;
//   product_title: string;
//   product_photo: string;
//   country: string;
// }

// interface KeywordRank {
//   keyword: string;
//   rank: number;
//   checked_at: string;
// }

// interface Toast {
//   id: number;
//   title: string;
//   description: string;
//   variant: "success" | "error";
// }

// export default function KeywordTracker() {
//   const { user } = useAuth();
//   const userEmail = user?.email || "";

//   const [sellerId, setSellerId] = useState("");
//   const [country, setCountry] = useState("US");
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [products, setProducts] = useState<TrackedProduct[]>([]);
//   const [selectedProduct, setSelectedProduct] = useState<TrackedProduct | null>(null);
//   const [keywords, setKeywords] = useState<string[]>([""]);
//   const [keywordInput, setKeywordInput] = useState("");
//   const [rankHistory, setRankHistory] = useState<KeywordRank[]>([]);
//   const [loadingRanks, setLoadingRanks] = useState(false);
//   const [updatingRanks, setUpdatingRanks] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [toasts, setToasts] = useState<Toast[]>([]);

//   // Toast handler
//   const showToast = (title: string, description: string, variant: "success" | "error" = "success") => {
//     const id = Date.now();
//     setToasts(prev => [...prev, { id, title, description, variant }]);
//     setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 5000);
//   };

//   const removeToast = (id: number) => setToasts(prev => prev.filter(t => t.id !== id));

//   // 1️⃣ Fetch and store seller products
//   const handleFetchProducts = async () => {
//     if (!sellerId.trim()) {
//       showToast("Missing Information", "Please enter a seller ID", "error");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch(
//         `http://localhost:8000/keyword_tracker/fetch_and_store_products/${sellerId}?country=${country}&page=${page}`
//       );

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.detail || "Failed to fetch products");
//       }

//       const data = await response.json();
//       setProducts(data);
//       showToast("Success!", `Found ${data.length} products for seller ${sellerId}`, "success");
//     } catch (error: any) {
//       console.error("Fetch error:", error);
//       showToast("Fetch Failed", error.message, "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 2️⃣ Add keyword to tracking
//   const handleAddKeyword = () => {
//     if (!keywordInput.trim()) return;
//     if (!keywords.includes(keywordInput.trim())) {
//       setKeywords([...keywords, keywordInput.trim()]);
//       setKeywordInput("");
//     }
//   };

//   const handleRemoveKeyword = (index: number) => {
//     setKeywords(keywords.filter((_, i) => i !== index));
//   };

//   // 3️⃣ Save keywords for product
//   const handleTrackKeywords = async () => {
//     if (!selectedProduct) {
//       showToast("No Product Selected", "Please select a product first", "error");
//       return;
//     }

//     const validKeywords = keywords.filter(k => k.trim() !== "");
//     if (validKeywords.length === 0) {
//       showToast("No Keywords", "Please add at least one keyword", "error");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8000/keyword_tracker/track_keywords", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           tracked_product_id: selectedProduct.id,
//           keywords: validKeywords,
//         }),
//       });

//       if (!response.ok) throw new Error("Failed to track keywords");

//       showToast("Keywords Tracked!", `${validKeywords.length} keywords added for tracking`, "success");
//       await fetchRankHistory(selectedProduct.id);
//     } catch (error: any) {
//       console.error("Track keywords error:", error);
//       showToast("Tracking Failed", error.message, "error");
//     }
//   };

//   // 4️⃣ Fetch rank history for a product
//   const fetchRankHistory = async (productId: number) => {
//     setLoadingRanks(true);
//     try {
//       const response = await fetch(`http://localhost:8000/keyword_tracker/rank_history/${productId}`);
//       if (!response.ok) throw new Error("Failed to fetch rank history");
//       const data = await response.json();
//       setRankHistory(data);
//     } catch (error: any) {
//       console.error("Fetch rank history error:", error);
//       showToast("Failed to Load History", error.message, "error");
//     } finally {
//       setLoadingRanks(false);
//     }
//   };

//   // 5️⃣ Update daily ranks
//   const handleUpdateRanks = async () => {
//     setUpdatingRanks(true);
//     try {
//       const response = await fetch("http://localhost:8000/keyword_tracker/update_daily_ranks", {
//         method: "POST",
//       });

//       if (!response.ok) throw new Error("Failed to update ranks");

//       showToast("Ranks Updated!", "All keyword ranks have been refreshed", "success");
//       if (selectedProduct) {
//         await fetchRankHistory(selectedProduct.id);
//       }
//     } catch (error: any) {
//       console.error("Update ranks error:", error);
//       showToast("Update Failed", error.message, "error");
//     } finally {
//       setUpdatingRanks(false);
//     }
//   };

//   // Auto-load rank history when product is selected
//   useEffect(() => {
//     if (selectedProduct) {
//       fetchRankHistory(selectedProduct.id);
//     }
//   }, [selectedProduct]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#F8FBFF] via-[#ECF5FF] to-[#E0F2FE] overflow-x-hidden">
//       {/* Toasts */}
//       <div className="fixed bottom-4 right-4 z-50 space-y-2 max-w-md">
//         {toasts.map(t => (
//           <div
//             key={t.id}
//             className={`flex items-start gap-3 p-4 rounded-lg shadow-lg border-2 backdrop-blur-md animate-in slide-in-from-right ${
//               t.variant === "success" ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300"
//             }`}
//           >
//             {t.variant === "success" ? (
//               <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
//             ) : (
//               <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
//             )}
//             <div className="flex-1 min-w-0">
//               <p className={`font-semibold text-sm ${t.variant === "success" ? "text-green-900" : "text-red-900"}`}>
//                 {t.title}
//               </p>
//               <p className={`text-sm mt-1 ${t.variant === "success" ? "text-green-700" : "text-red-700"}`}>
//                 {t.description}
//               </p>
//             </div>
//             <button
//               onClick={() => removeToast(t.id)}
//               className={`${t.variant === "success" ? "text-green-600 hover:text-green-800" : "text-red-600 hover:text-red-800"}`}
//             >
//               <X className="h-4 w-4" />
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Mobile Menu Button */}
//       <button
//         className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white/90 rounded-xl shadow-md"
//         onClick={() => setIsMobileMenuOpen(true)}
//       >
//         <Menu className="w-6 h-6 text-slate-700" />
//       </button>

//       {/* Desktop Sidebar */}
//       <aside className="hidden lg:block fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-40">
//         <Sidebar />
//       </aside>

//       {/* Mobile Sidebar Overlay */}
//       {isMobileMenuOpen && (
//         <>
//           <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
//           <aside className="fixed inset-y-0 left-0 w-64 bg-white z-50 lg:hidden shadow-2xl transform transition-transform duration-300">
//             <div className="flex justify-end p-4">
//               <button onClick={() => setIsMobileMenuOpen(false)}>
//                 <X className="w-6 h-6" />
//               </button>
//             </div>
//             <Sidebar />
//           </aside>
//         </>
//       )}

//       {/* MAIN CONTENT */}
//       <div className="lg:ml-64 transition-all min-h-screen">
//         {/* Header */}
//         <header className="bg-white/70 backdrop-blur-md border-b border-slate-200 px-6 py-4 sticky top-0 z-10">
//           <div className="flex items-center gap-3">
//             <Target className="h-8 w-8 text-purple-600" />
//             <div>
//               <h2 className="text-2xl font-semibold text-slate-800">Keyword Rank Tracker</h2>
//               <p className="text-sm text-slate-500">Monitor your Amazon product rankings for specific keywords</p>
//             </div>
//           </div>
//         </header>

//         <div className="p-6">
//           <div className="max-w-7xl mx-auto space-y-6">
//             {/* Title Section */}
//             <div className="text-center space-y-4">
//               <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-red-400 text-transparent bg-clip-text">
//                 Track Your Keyword Rankings
//               </h1>
//               <p className="text-slate-500 text-lg">
//                 Monitor how your products rank for important search keywords on Amazon
//               </p>
//               {userEmail && (
//                 <p className="text-sm text-green-600 font-medium">✓ Logged in as: {userEmail}</p>
//               )}
//             </div>

//             {/* Step 1: Fetch Products */}
//             <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/80">
//               <CardHeader>
//                 <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
//                   <Package className="h-5 w-5 text-blue-600" />
//                   Step 1: Fetch Your Products
//                 </CardTitle>
//                 <CardDescription className="text-slate-500">
//                   Enter your Amazon Seller ID to load your products
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="seller-id">Seller ID</Label>
//                     <Input
//                       id="seller-id"
//                       value={sellerId}
//                       onChange={e => setSellerId(e.target.value)}
//                       placeholder="e.g., A02211013Q5HP3OMSZC7W"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="country">Country</Label>
//                     <select
//                       id="country"
//                       value={country}
//                       onChange={e => setCountry(e.target.value)}
//                       className="w-full h-10 px-3 rounded-md border border-slate-300 bg-white"
//                     >
//                       <option value="US">United States</option>
//                       <option value="IN">India</option>
//                       <option value="UK">United Kingdom</option>
//                       <option value="CA">Canada</option>
//                     </select>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="page">Page</Label>
//                     <Input
//                       id="page"
//                       type="number"
//                       value={page}
//                       onChange={e => setPage(parseInt(e.target.value) || 1)}
//                       placeholder="1"
//                       min="1"
//                     />
//                   </div>
//                 </div>

//                 <Button onClick={handleFetchProducts} disabled={loading} className="w-full bg-blue-500 hover:bg-blue-600">
//                   {loading ? (
//                     <>
//                       <Loader2 className="h-4 w-4 animate-spin mr-2" />
//                       Fetching Products...
//                     </>
//                   ) : (
//                     <>
//                       <Search className="h-4 w-4 mr-2" />
//                       Fetch Products
//                     </>
//                   )}
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Products List */}
//             {products.length > 0 && (
//               <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/80">
//                 <CardHeader>
//                   <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
//                     <Package className="h-5 w-5 text-green-600" />
//                     Your Products ({products.length})
//                   </CardTitle>
//                   <CardDescription className="text-slate-500">
//                     Click on a product to start tracking keywords
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {products.map(product => (
//                       <div
//                         key={product.id}
//                         onClick={() => setSelectedProduct(product)}
//                         className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
//                           selectedProduct?.id === product.id
//                             ? "border-purple-500 bg-purple-50"
//                             : "border-slate-200 bg-white hover:border-purple-300"
//                         }`}
//                       >
//                         <div className="flex gap-3">
//                           {product.product_photo && (
//                             <img
//                               src={product.product_photo}
//                               alt={product.product_title}
//                               className="w-16 h-16 object-cover rounded"
//                             />
//                           )}
//                           <div className="flex-1 min-w-0">
//                             <p className="text-sm font-semibold text-slate-900 truncate">{product.product_title}</p>
//                             <p className="text-xs text-slate-500 mt-1">ASIN: {product.asin}</p>
//                             <Badge variant="outline" className="mt-2 text-xs">
//                               {product.country}
//                             </Badge>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Step 2: Add Keywords */}
//             {selectedProduct && (
//               <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/80">
//                 <CardHeader>
//                   <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
//                     <Search className="h-5 w-5 text-purple-600" />
//                     Step 2: Track Keywords for "{selectedProduct.product_title}"
//                   </CardTitle>
//                   <CardDescription className="text-slate-500">
//                     Add keywords you want to track rankings for
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="flex gap-2">
//                     <Input
//                       value={keywordInput}
//                       onChange={e => setKeywordInput(e.target.value)}
//                       placeholder="e.g., wireless headphones"
//                       onKeyPress={e => e.key === "Enter" && handleAddKeyword()}
//                     />
//                     <Button onClick={handleAddKeyword} className="bg-purple-500 hover:bg-purple-600">
//                       <Plus className="h-4 w-4" />
//                     </Button>
//                   </div>

//                   {keywords.filter(k => k.trim()).length > 0 && (
//                     <div className="space-y-2">
//                       <Label>Keywords to Track:</Label>
//                       <div className="flex flex-wrap gap-2">
//                         {keywords
//                           .filter(k => k.trim())
//                           .map((keyword, index) => (
//                             <Badge key={index} className="bg-purple-100 text-purple-800 border-purple-300 flex items-center gap-2">
//                               {keyword}
//                               <button onClick={() => handleRemoveKeyword(index)} className="hover:text-purple-900">
//                                 <X className="h-3 w-3" />
//                               </button>
//                             </Badge>
//                           ))}
//                       </div>
//                     </div>
//                   )}

//                   <Button onClick={handleTrackKeywords} className="w-full bg-purple-500 hover:bg-purple-600">
//                     <Target className="h-4 w-4 mr-2" />
//                     Start Tracking Keywords
//                   </Button>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Step 3: Rank History */}
//             {selectedProduct && (
//               <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/80">
//                 <CardHeader>
//                   <div className="flex items-center justify-between">
//                     <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
//                       <BarChart3 className="h-5 w-5 text-orange-600" />
//                       Keyword Rank History
//                     </CardTitle>
//                     <Button
//                       onClick={handleUpdateRanks}
//                       disabled={updatingRanks}
//                       size="sm"
//                       className="bg-orange-500 hover:bg-orange-600"
//                     >
//                       {updatingRanks ? (
//                         <>
//                           <Loader2 className="h-4 w-4 animate-spin mr-2" />
//                           Updating...
//                         </>
//                       ) : (
//                         <>
//                           <RefreshCw className="h-4 w-4 mr-2" />
//                           Update Ranks
//                         </>
//                       )}
//                     </Button>
//                   </div>
//                   <CardDescription className="text-slate-500">
//                     View current rankings for tracked keywords
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   {loadingRanks ? (
//                     <div className="flex justify-center py-8">
//                       <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
//                     </div>
//                   ) : rankHistory.length === 0 ? (
//                     <Alert className="border-blue-300 bg-blue-50">
//                       <AlertDescription className="text-blue-700">
//                         No rank data yet. Add keywords and update ranks to start tracking!
//                       </AlertDescription>
//                     </Alert>
//                   ) : (
//                     <div className="space-y-3">
//                       {rankHistory.map((item, index) => (
//                         <div
//                           key={index}
//                           className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-purple-50 rounded-lg border border-slate-200"
//                         >
//                           <div className="flex-1">
//                             <p className="font-semibold text-slate-900">{item.keyword}</p>
//                             <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
//                               <Clock className="h-3 w-3" />
//                               {new Date(item.checked_at).toLocaleString()}
//                             </p>
//                           </div>
//                           <div className="text-right">
//                             <div
//                               className={`text-2xl font-bold ${
//                                 item.rank <= 10
//                                   ? "text-green-600"
//                                   : item.rank <= 50
//                                   ? "text-yellow-600"
//                                   : "text-red-600"
//                               }`}
//                             >
//                               #{item.rank}
//                             </div>
//                             <p className="text-xs text-slate-500">Rank</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// import { useState, useEffect } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useAuth } from "@/App";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import { Badge } from "@/components/ui/badge";
// import {
//   Loader2,
//   Search,
//   TrendingUp,
//   Package,
//   Menu,
//   X,
//   Plus,
//   Trash2,
//   RefreshCw,
//   CheckCircle2,
//   XCircle,
//   Target,
//   BarChart3,
//   Clock,
// } from "lucide-react";
// import Sidebar from "@/components/layout/sidebar";

// interface TrackedProduct {
//   id: number;
//   seller_id: string;
//   asin: string;
//   product_title: string;
//   product_photo: string;
//   country: string;
// }

// interface KeywordRank {
//   keyword: string;
//   rank: number | null;
//   checked_at: string;
// }

// interface Toast {
//   id: number;
//   title: string;
//   description: string;
//   variant: "success" | "error";
// }

// interface AIAnalysis {
//   product_title: string;
//   asin: string;
//   total_keywords: number;
//   analysis: {
//     why_changed: string;
//     what_to_do: string;
//     which_keywords_matter: string;
//     future_prediction: string;
//     product_optimization: string;
//     roadmap: string;
//   };
// }

// export default function KeywordTracker() {
//   const { user } = useAuth();
//   const userEmail = user?.email || "";

//   const [sellerId, setSellerId] = useState("");
//   const [country, setCountry] = useState("US");
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [products, setProducts] = useState<TrackedProduct[]>([]);
//   const [selectedProduct, setSelectedProduct] = useState<TrackedProduct | null>(null);
//   const [keywords, setKeywords] = useState<string[]>([""]);
//   const [keywordInput, setKeywordInput] = useState("");
//   const [rankHistory, setRankHistory] = useState<KeywordRank[]>([]);
//   const [loadingRanks, setLoadingRanks] = useState(false);
//   const [updatingRanks, setUpdatingRanks] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [toasts, setToasts] = useState<Toast[]>([]);
//   const [aiAnalysis, setAiAnalysis] = useState<AIAnalysis | null>(null);
//   const [loadingAI, setLoadingAI] = useState(false);

//   // Toast handler
//   const showToast = (title: string, description: string, variant: "success" | "error" = "success") => {
//     const id = Date.now();
//     setToasts(prev => [...prev, { id, title, description, variant }]);
//     setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 5000);
//   };

//   const removeToast = (id: number) => setToasts(prev => prev.filter(t => t.id !== id));

//   // 1️⃣ Fetch and store seller products
//   const handleFetchProducts = async () => {
//     if (!sellerId.trim()) {
//       showToast("Missing Information", "Please enter a seller ID", "error");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch(
//         `http://localhost:8000/keyword_tracker/fetch_and_store_products/${sellerId}?country=${country}&page=${page}`
//       );

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.detail || "Failed to fetch products");
//       }

//       const data = await response.json();
//       setProducts(data);
//       showToast("Success!", `Found ${data.length} products for seller ${sellerId}`, "success");
//     } catch (error: any) {
//       console.error("Fetch error:", error);
//       showToast("Fetch Failed", error.message, "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 2️⃣ Add keyword to tracking
//   const handleAddKeyword = () => {
//     if (!keywordInput.trim()) return;
//     if (!keywords.includes(keywordInput.trim())) {
//       setKeywords([...keywords, keywordInput.trim()]);
//       setKeywordInput("");
//     }
//   };

//   const handleRemoveKeyword = (index: number) => {
//     setKeywords(keywords.filter((_, i) => i !== index));
//   };

//   // 3️⃣ Save keywords for product
//   const handleTrackKeywords = async () => {
//     if (!selectedProduct) {
//       showToast("No Product Selected", "Please select a product first", "error");
//       return;
//     }

//     const validKeywords = keywords.filter(k => k.trim() !== "");
//     if (validKeywords.length === 0) {
//       showToast("No Keywords", "Please add at least one keyword", "error");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8000/keyword_tracker/track_keywords", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           tracked_product_id: selectedProduct.id,
//           keywords: validKeywords,
//         }),
//       });

//       if (!response.ok) throw new Error("Failed to track keywords");

//       showToast("Keywords Tracked!", `${validKeywords.length} keywords added for tracking`, "success");
//       await fetchRankHistory(selectedProduct.id);
//     } catch (error: any) {
//       console.error("Track keywords error:", error);
//       showToast("Tracking Failed", error.message, "error");
//     }
//   };

//   // 4️⃣ Fetch rank history for a product
//   const fetchRankHistory = async (productId: number) => {
//     setLoadingRanks(true);
//     try {
//       const response = await fetch(`http://localhost:8000/keyword_tracker/rank_history/${productId}`);
//       if (!response.ok) throw new Error("Failed to fetch rank history");
//       const data = await response.json();
//       setRankHistory(data);
//     } catch (error: any) {
//       console.error("Fetch rank history error:", error);
//       showToast("Failed to Load History", error.message, "error");
//     } finally {
//       setLoadingRanks(false);
//     }
//   };

//   // 5️⃣ Update daily ranks
//   const handleUpdateRanks = async () => {
//     setUpdatingRanks(true);
//     try {
//       const response = await fetch("http://localhost:8000/keyword_tracker/update_daily_ranks", {
//         method: "POST",
//       });

//       if (!response.ok) throw new Error("Failed to update ranks");

//       showToast("Ranks Updated!", "All keyword ranks have been refreshed", "success");
//       if (selectedProduct) {
//         await fetchRankHistory(selectedProduct.id);
//       }
//     } catch (error: any) {
//       console.error("Update ranks error:", error);
//       showToast("Update Failed", error.message, "error");
//     } finally {
//       setUpdatingRanks(false);
//     }
//   };

//   // 6️⃣ Get AI Analysis
//   const handleGetAIAnalysis = async () => {
//     if (!selectedProduct) {
//       showToast("No Product Selected", "Please select a product first", "error");
//       return;
//     }

//     setLoadingAI(true);
//     try {
//       const response = await fetch(
//         `http://localhost:8000/keyword_tracker/ai_analysis/${selectedProduct.id}`
//       );

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.detail || "Failed to get AI analysis");
//       }

//       const data = await response.json();
//       setAiAnalysis(data);
//       showToast("AI Analysis Complete!", "Your keyword insights are ready", "success");
//     } catch (error: any) {
//       console.error("AI analysis error:", error);
//       showToast("Analysis Failed", error.message, "error");
//     } finally {
//       setLoadingAI(false);
//     }
//   };

//   // Helper function to format AI response (handles both strings and objects)
//   const formatAIResponse = (content: any): string => {
//     if (typeof content === 'string') {
//       return content;
//     }
//     if (Array.isArray(content)) {
//       return content.map((item, idx) => {
//         if (typeof item === 'object') {
//           return `${idx + 1}. ${Object.entries(item).map(([k, v]) => `${k}: ${v}`).join(' - ')}`;
//         }
//         return `${idx + 1}. ${item}`;
//       }).join('\n\n');
//     }
//     if (typeof content === 'object' && content !== null) {
//       return Object.entries(content).map(([key, value]) => {
//         return `• ${key}: ${value}`;
//       }).join('\n\n');
//     }
//     return String(content);
//   };

//   // Auto-load rank history when product is selected
//   useEffect(() => {
//     if (selectedProduct) {
//       fetchRankHistory(selectedProduct.id);
//       setAiAnalysis(null); // Reset AI analysis when product changes
//     }
//   }, [selectedProduct]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#F8FBFF] via-[#ECF5FF] to-[#E0F2FE] overflow-x-hidden">
//       {/* Toasts */}
//       <div className="fixed bottom-4 right-4 z-50 space-y-2 max-w-md">
//         {toasts.map(t => (
//           <div
//             key={t.id}
//             className={`flex items-start gap-3 p-4 rounded-lg shadow-lg border-2 backdrop-blur-md animate-in slide-in-from-right ${
//               t.variant === "success" ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300"
//             }`}
//           >
//             {t.variant === "success" ? (
//               <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
//             ) : (
//               <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
//             )}
//             <div className="flex-1 min-w-0">
//               <p className={`font-semibold text-sm ${t.variant === "success" ? "text-green-900" : "text-red-900"}`}>
//                 {t.title}
//               </p>
//               <p className={`text-sm mt-1 ${t.variant === "success" ? "text-green-700" : "text-red-700"}`}>
//                 {t.description}
//               </p>
//             </div>
//             <button
//               onClick={() => removeToast(t.id)}
//               className={`${t.variant === "success" ? "text-green-600 hover:text-green-800" : "text-red-600 hover:text-red-800"}`}
//             >
//               <X className="h-4 w-4" />
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Mobile Menu Button */}
//       <button
//         className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white/90 rounded-xl shadow-md"
//         onClick={() => setIsMobileMenuOpen(true)}
//       >
//         <Menu className="w-6 h-6 text-slate-700" />
//       </button>

//       {/* Desktop Sidebar */}
//       <aside className="hidden lg:block fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-40">
//         <Sidebar />
//       </aside>

//       {/* Mobile Sidebar Overlay */}
//       {isMobileMenuOpen && (
//         <>
//           <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
//           <aside className="fixed inset-y-0 left-0 w-64 bg-white z-50 lg:hidden shadow-2xl transform transition-transform duration-300">
//             <div className="flex justify-end p-4">
//               <button onClick={() => setIsMobileMenuOpen(false)}>
//                 <X className="w-6 h-6" />
//               </button>
//             </div>
//             <Sidebar />
//           </aside>
//         </>
//       )}

//       {/* MAIN CONTENT */}
//       <div className="lg:ml-64 transition-all min-h-screen">
//         {/* Header */}
//         <header className="bg-white/70 backdrop-blur-md border-b border-slate-200 px-6 py-4 sticky top-0 z-10">
//           <div className="flex items-center gap-3">
//             <Target className="h-8 w-8 text-purple-600" />
//             <div>
//               <h2 className="text-2xl font-semibold text-slate-800">Keyword Rank Tracker</h2>
//               <p className="text-sm text-slate-500">Monitor your Amazon product rankings for specific keywords</p>
//             </div>
//           </div>
//         </header>

//         <div className="p-6">
//           <div className="max-w-7xl mx-auto space-y-6">
//             {/* Title Section */}
//             <div className="text-center space-y-4">
//               <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-red-400 text-transparent bg-clip-text">
//                 Track Your Keyword Rankings
//               </h1>
//               <p className="text-slate-500 text-lg">
//                 Monitor how your products rank for important search keywords on Amazon
//               </p>
//               {userEmail && (
//                 <p className="text-sm text-green-600 font-medium">✓ Logged in as: {userEmail}</p>
//               )}
//             </div>

//             {/* Step 1: Fetch Products */}
//             <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/80">
//               <CardHeader>
//                 <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
//                   <Package className="h-5 w-5 text-blue-600" />
//                   Step 1: Fetch Your Products
//                 </CardTitle>
//                 <CardDescription className="text-slate-500">
//                   Enter your Amazon Seller ID to load your products
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="seller-id">Seller ID</Label>
//                     <Input
//                       id="seller-id"
//                       value={sellerId}
//                       onChange={e => setSellerId(e.target.value)}
//                       placeholder="e.g., A02211013Q5HP3OMSZC7W"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="country">Country</Label>
//                     <select
//                       id="country"
//                       value={country}
//                       onChange={e => setCountry(e.target.value)}
//                       className="w-full h-10 px-3 rounded-md border border-slate-300 bg-white"
//                     >
//                       <option value="US">United States</option>
//                       <option value="IN">India</option>
//                       <option value="UK">United Kingdom</option>
//                       <option value="CA">Canada</option>
//                     </select>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="page">Page</Label>
//                     <Input
//                       id="page"
//                       type="number"
//                       value={page}
//                       onChange={e => setPage(parseInt(e.target.value) || 1)}
//                       placeholder="1"
//                       min="1"
//                     />
//                   </div>
//                 </div>

//                 <Button onClick={handleFetchProducts} disabled={loading} className="w-full bg-blue-500 hover:bg-blue-600">
//                   {loading ? (
//                     <>
//                       <Loader2 className="h-4 w-4 animate-spin mr-2" />
//                       Fetching Products...
//                     </>
//                   ) : (
//                     <>
//                       <Search className="h-4 w-4 mr-2" />
//                       Fetch Products
//                     </>
//                   )}
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Products List */}
//             {products.length > 0 && (
//               <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/80">
//                 <CardHeader>
//                   <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
//                     <Package className="h-5 w-5 text-green-600" />
//                     Your Products ({products.length})
//                   </CardTitle>
//                   <CardDescription className="text-slate-500">
//                     Click on a product to start tracking keywords
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {products.map(product => (
//                       <div
//                         key={product.id}
//                         onClick={() => setSelectedProduct(product)}
//                         className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
//                           selectedProduct?.id === product.id
//                             ? "border-purple-500 bg-purple-50"
//                             : "border-slate-200 bg-white hover:border-purple-300"
//                         }`}
//                       >
//                         <div className="flex gap-3">
//                           {product.product_photo && (
//                             <img
//                               src={product.product_photo}
//                               alt={product.product_title}
//                               className="w-16 h-16 object-cover rounded"
//                             />
//                           )}
//                           <div className="flex-1 min-w-0">
//                             <p className="text-sm font-semibold text-slate-900 truncate">{product.product_title}</p>
//                             <p className="text-xs text-slate-500 mt-1">ASIN: {product.asin}</p>
//                             <Badge variant="outline" className="mt-2 text-xs">
//                               {product.country}
//                             </Badge>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Step 2: Add Keywords */}
//             {selectedProduct && (
//               <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/80">
//                 <CardHeader>
//                   <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
//                     <Search className="h-5 w-5 text-purple-600" />
//                     Step 2: Track Keywords for "{selectedProduct.product_title}"
//                   </CardTitle>
//                   <CardDescription className="text-slate-500">
//                     Add keywords you want to track rankings for
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="flex gap-2">
//                     <Input
//                       value={keywordInput}
//                       onChange={e => setKeywordInput(e.target.value)}
//                       placeholder="e.g., wireless headphones"
//                       onKeyPress={e => e.key === "Enter" && handleAddKeyword()}
//                     />
//                     <Button onClick={handleAddKeyword} className="bg-purple-500 hover:bg-purple-600">
//                       <Plus className="h-4 w-4" />
//                     </Button>
//                   </div>

//                   {keywords.filter(k => k.trim()).length > 0 && (
//                     <div className="space-y-2">
//                       <Label>Keywords to Track:</Label>
//                       <div className="flex flex-wrap gap-2">
//                         {keywords
//                           .filter(k => k.trim())
//                           .map((keyword, index) => (
//                             <Badge key={index} className="bg-purple-100 text-purple-800 border-purple-300 flex items-center gap-2">
//                               {keyword}
//                               <button onClick={() => handleRemoveKeyword(index)} className="hover:text-purple-900">
//                                 <X className="h-3 w-3" />
//                               </button>
//                             </Badge>
//                           ))}
//                       </div>
//                     </div>
//                   )}

//                   <Button onClick={handleTrackKeywords} className="w-full bg-purple-500 hover:bg-purple-600">
//                     <Target className="h-4 w-4 mr-2" />
//                     Start Tracking Keywords
//                   </Button>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Step 3: Rank History */}
//             {selectedProduct && (
//               <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/80">
//                 <CardHeader>
//                   <div className="flex items-center justify-between">
//                     <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
//                       <BarChart3 className="h-5 w-5 text-orange-600" />
//                       Keyword Rank History
//                     </CardTitle>
//                     <Button
//                       onClick={handleUpdateRanks}
//                       disabled={updatingRanks}
//                       size="sm"
//                       className="bg-orange-500 hover:bg-orange-600"
//                     >
//                       {updatingRanks ? (
//                         <>
//                           <Loader2 className="h-4 w-4 animate-spin mr-2" />
//                           Updating...
//                         </>
//                       ) : (
//                         <>
//                           <RefreshCw className="h-4 w-4 mr-2" />
//                           Update Ranks
//                         </>
//                       )}
//                     </Button>
//                   </div>
//                   <CardDescription className="text-slate-500">
//                     View current rankings for tracked keywords
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   {loadingRanks ? (
//                     <div className="flex justify-center py-8">
//                       <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
//                     </div>
//                   ) : rankHistory.length === 0 ? (
//                     <Alert className="border-blue-300 bg-blue-50">
//                       <AlertDescription className="text-blue-700">
//                         No rank data yet. Add keywords and update ranks to start tracking!
//                       </AlertDescription>
//                     </Alert>
//                   ) : (
//                     <div className="space-y-3">
//                       {rankHistory.map((item, index) => (
//                         <div
//                           key={index}
//                           className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-purple-50 rounded-lg border border-slate-200"
//                         >
//                           <div className="flex-1">
//                             <p className="font-semibold text-slate-900">{item.keyword}</p>
//                             <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
//                               <Clock className="h-3 w-3" />
//                               {new Date(item.checked_at).toLocaleString()}
//                             </p>
//                           </div>
//                           <div className="text-right">
//                             <div
//                               className={`text-2xl font-bold ${
//                                 item.rank === null || item.rank === 0
//                                   ? "text-slate-400"
//                                   : item.rank <= 10
//                                   ? "text-green-600"
//                                   : item.rank <= 50
//                                   ? "text-yellow-600"
//                                   : "text-red-600"
//                               }`}
//                             >
//                               {item.rank === null || item.rank === 0 ? "—" : `#${item.rank}`}
//                             </div>
//                             <p className="text-xs text-slate-500">
//                               {item.rank === null || item.rank === 0 ? "Pending" : "Rank"}
//                             </p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
//             )}

//             {/* Step 4: AI-Powered Insights */}
//             {selectedProduct && rankHistory.length > 0 && (
//               <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-blue-50 to-purple-50">
//                 <CardHeader>
//                   <div className="flex items-center justify-between">
//                     <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
//                       <svg
//                         className="h-6 w-6 text-purple-600"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
//                         />
//                       </svg>
//                       AI-Powered Strategic Insights
//                     </CardTitle>
//                     <Button
//                       onClick={handleGetAIAnalysis}
//                       disabled={loadingAI}
//                       size="sm"
//                       className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
//                     >
//                       {loadingAI ? (
//                         <>
//                           <Loader2 className="h-4 w-4 animate-spin mr-2" />
//                           Analyzing...
//                         </>
//                       ) : (
//                         <>
//                           <svg
//                             className="h-4 w-4 mr-2"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M13 10V3L4 14h7v7l9-11h-7z"
//                             />
//                           </svg>
//                           Get AI Analysis
//                         </>
//                       )}
//                     </Button>
//                   </div>
//                   <CardDescription className="text-slate-600">
//                     AI-powered insights powered by Mistral analyzing your keyword performance
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   {loadingAI ? (
//                     <div className="flex flex-col items-center justify-center py-12">
//                       <Loader2 className="h-12 w-12 animate-spin text-purple-500 mb-4" />
//                       <p className="text-slate-600 text-sm">AI is analyzing your keyword data...</p>
//                       <p className="text-slate-400 text-xs mt-2">This may take 20-30 seconds</p>
//                     </div>
//                   ) : aiAnalysis ? (
//                     <div className="space-y-6">
//                       {/* Header Stats */}
//                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                         <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
//                           <p className="text-sm text-slate-600 mb-1">Product</p>
//                           <p className="text-lg font-bold text-purple-600 truncate">{aiAnalysis.product_title}</p>
//                         </div>
//                         <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
//                           <p className="text-sm text-slate-600 mb-1">ASIN</p>
//                           <p className="text-lg font-bold text-blue-600">{aiAnalysis.asin}</p>
//                         </div>
//                         <div className="bg-white p-4 rounded-lg border-2 border-pink-200">
//                           <p className="text-sm text-slate-600 mb-1">Keywords Tracked</p>
//                           <p className="text-lg font-bold text-pink-600">{aiAnalysis.total_keywords}</p>
//                         </div>
//                       </div>

//                       {/* Why Changed */}
//                       <div className="bg-white p-6 rounded-xl border-2 border-blue-200 shadow-sm">
//                         <div className="flex items-start gap-3 mb-3">
//                           <div className="bg-blue-100 p-2 rounded-lg">
//                             <TrendingUp className="h-5 w-5 text-blue-600" />
//                           </div>
//                           <div>
//                             <h3 className="text-lg font-bold text-slate-800">Why Rankings Changed</h3>
//                             <p className="text-xs text-slate-500">Understanding the factors behind your rank movements</p>
//                           </div>
//                         </div>
//                         <p className="text-slate-700 leading-relaxed whitespace-pre-line">{formatAIResponse(aiAnalysis.analysis.why_changed)}</p>
//                       </div>

//                       {/* What To Do */}
//                       <div className="bg-white p-6 rounded-xl border-2 border-green-200 shadow-sm">
//                         <div className="flex items-start gap-3 mb-3">
//                           <div className="bg-green-100 p-2 rounded-lg">
//                             <CheckCircle2 className="h-5 w-5 text-green-600" />
//                           </div>
//                           <div>
//                             <h3 className="text-lg font-bold text-slate-800">What You Should Do</h3>
//                             <p className="text-xs text-slate-500">Immediate action items for improvement</p>
//                           </div>
//                         </div>
//                         <div className="text-slate-700 leading-relaxed whitespace-pre-line">
//                           {formatAIResponse(aiAnalysis.analysis.what_to_do)}
//                         </div>
//                       </div>

//                       {/* Which Keywords Matter */}
//                       <div className="bg-white p-6 rounded-xl border-2 border-yellow-200 shadow-sm">
//                         <div className="flex items-start gap-3 mb-3">
//                           <div className="bg-yellow-100 p-2 rounded-lg">
//                             <Target className="h-5 w-5 text-yellow-600" />
//                           </div>
//                           <div>
//                             <h3 className="text-lg font-bold text-slate-800">Which Keywords Matter Most</h3>
//                             <p className="text-xs text-slate-500">Priority keywords to focus your efforts on</p>
//                           </div>
//                         </div>
//                         <div className="text-slate-700 leading-relaxed whitespace-pre-line">
//                           {formatAIResponse(aiAnalysis.analysis.which_keywords_matter)}
//                         </div>
//                       </div>

//                       {/* Future Prediction */}
//                       <div className="bg-white p-6 rounded-xl border-2 border-purple-200 shadow-sm">
//                         <div className="flex items-start gap-3 mb-3">
//                           <div className="bg-purple-100 p-2 rounded-lg">
//                             <svg
//                               className="h-5 w-5 text-purple-600"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//                               />
//                             </svg>
//                           </div>
//                           <div>
//                             <h3 className="text-lg font-bold text-slate-800">Future Prediction</h3>
//                             <p className="text-xs text-slate-500">Expected ranking trends for the next 30 days</p>
//                           </div>
//                         </div>
//                         <p className="text-slate-700 leading-relaxed whitespace-pre-line">{formatAIResponse(aiAnalysis.analysis.future_prediction)}</p>
//                       </div>

//                       {/* Product Optimization */}
//                       <div className="bg-white p-6 rounded-xl border-2 border-orange-200 shadow-sm">
//                         <div className="flex items-start gap-3 mb-3">
//                           <div className="bg-orange-100 p-2 rounded-lg">
//                             <Package className="h-5 w-5 text-orange-600" />
//                           </div>
//                           <div>
//                             <h3 className="text-lg font-bold text-slate-800">Product Optimization</h3>
//                             <p className="text-xs text-slate-500">Listing improvements to boost visibility</p>
//                           </div>
//                         </div>
//                         <div className="text-slate-700 leading-relaxed whitespace-pre-line">
//                           {formatAIResponse(aiAnalysis.analysis.product_optimization)}
//                         </div>
//                       </div>

//                       {/* Roadmap */}
//                       <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl border-2 border-slate-300 shadow-sm">
//                         <div className="flex items-start gap-3 mb-3">
//                           <div className="bg-slate-700 p-2 rounded-lg">
//                             <svg
//                               className="h-5 w-5 text-white"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
//                               />
//                             </svg>
//                           </div>
//                           <div>
//                             <h3 className="text-lg font-bold text-slate-800">30-60-90 Day Roadmap</h3>
//                             <p className="text-xs text-slate-500">Strategic plan for sustained growth</p>
//                           </div>
//                         </div>
//                         <div className="text-slate-700 leading-relaxed whitespace-pre-line font-medium">
//                           {formatAIResponse(aiAnalysis.analysis.roadmap)}
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <Alert className="border-purple-300 bg-purple-50">
//                       <AlertDescription className="text-purple-700 flex items-center gap-2">
//                         <svg
//                           className="h-5 w-5"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                           />
//                         </svg>
//                         Click "Get AI Analysis" to receive AI-powered insights about your keyword rankings and optimization strategies.
//                       </AlertDescription>
//                     </Alert>
//                   )}
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import { useState, useEffect } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useAuth } from "@/App";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import { Badge } from "@/components/ui/badge";
// import {
//   Loader2,
//   Search,
//   TrendingUp,
//   Package,
//   Menu,
//   X,
//   Plus,
//   Trash2,
//   RefreshCw,
//   CheckCircle2,
//   XCircle,
//   Target,
//   BarChart3,
//   Clock,
// } from "lucide-react";
// import Sidebar from "@/components/layout/sidebar";

// interface TrackedProduct {
//   id: number;
//   seller_id: string;
//   asin: string;
//   product_title: string;
//   product_photo: string;
//   country: string;
//   user_email: string; // ✅ Added user_email
// }

// interface KeywordRank {
//   keyword: string;
//   rank: number | null;
//   checked_at: string;
//   user_email: string; // ✅ Added user_email
// }

// interface Toast {
//   id: number;
//   title: string;
//   description: string;
//   variant: "success" | "error";
// }

// interface AIAnalysis {
//   product_title: string;
//   asin: string;
//   total_keywords: number;
//   analysis: {
//     why_changed: string;
//     what_to_do: string;
//     which_keywords_matter: string;
//     future_prediction: string;
//     product_optimization: string;
//     roadmap: string;
//   };
// }

// export default function KeywordTracker() {
//   const { user, isLoading } = useAuth(); // ✅ Added isLoading
//   const userEmail = user?.email || "";
//   const userId = user?.id;

//   const [sellerId, setSellerId] = useState("");
//   const [country, setCountry] = useState("US");
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [products, setProducts] = useState<TrackedProduct[]>([]);
//   const [selectedProduct, setSelectedProduct] = useState<TrackedProduct | null>(null);
//   const [keywords, setKeywords] = useState<string[]>([""]);
//   const [keywordInput, setKeywordInput] = useState("");
//   const [rankHistory, setRankHistory] = useState<KeywordRank[]>([]);
//   const [loadingRanks, setLoadingRanks] = useState(false);
//   const [updatingRanks, setUpdatingRanks] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [toasts, setToasts] = useState<Toast[]>([]);
//   const [aiAnalysis, setAiAnalysis] = useState<AIAnalysis | null>(null);
//   const [loadingAI, setLoadingAI] = useState(false);

//   // Toast handler
//   const showToast = (title: string, description: string, variant: "success" | "error" = "success") => {
//     const id = Date.now();
//     setToasts(prev => [...prev, { id, title, description, variant }]);
//     setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 5000);
//   };

//   const removeToast = (id: number) => setToasts(prev => prev.filter(t => t.id !== id));

//   // 1️⃣ Fetch and store seller products
//   const handleFetchProducts = async () => {
//     if (!sellerId.trim()) {
//       showToast("Missing Information", "Please enter a seller ID", "error");
//       return;
//     }

//     // ✅ Check if user is logged in
//     if (!userEmail) {
//       showToast("Login Required", "Please login to track products", "error");
//       return;
//     }

//     setLoading(true);
//     try {
//       // ✅ Pass user_email in query params
//       const response = await fetch(
//         `http://localhost:8000/keyword_tracker/fetch_and_store_products/${sellerId}?country=${country}&page=${page}&user_email=${encodeURIComponent(userEmail)}`,
//         {
//           credentials: 'include', // ✅ Include credentials for session
//         }
//       );

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.detail || "Failed to fetch products");
//       }

//       const data = await response.json();
//       setProducts(data);
//       showToast("Success!", `Found ${data.length} products for seller ${sellerId}`, "success");
//     } catch (error: any) {
//       console.error("Fetch error:", error);
//       showToast("Fetch Failed", error.message, "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 2️⃣ Add keyword to tracking
//   const handleAddKeyword = () => {
//     if (!keywordInput.trim()) return;
//     if (!keywords.includes(keywordInput.trim())) {
//       setKeywords([...keywords, keywordInput.trim()]);
//       setKeywordInput("");
//     }
//   };

//   const handleRemoveKeyword = (index: number) => {
//     setKeywords(keywords.filter((_, i) => i !== index));
//   };

//   // 3️⃣ Save keywords for product
//   const handleTrackKeywords = async () => {
//     if (!selectedProduct) {
//       showToast("No Product Selected", "Please select a product first", "error");
//       return;
//     }

//     // ✅ Check if user is logged in
//     if (!userEmail) {
//       showToast("Login Required", "Please login to track keywords", "error");
//       return;
//     }

//     const validKeywords = keywords.filter(k => k.trim() !== "");
//     if (validKeywords.length === 0) {
//       showToast("No Keywords", "Please add at least one keyword", "error");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8000/keyword_tracker/track_keywords", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: 'include', // ✅ Include credentials
//         body: JSON.stringify({
//           tracked_product_id: selectedProduct.id,
//           keywords: validKeywords,
//           user_email: userEmail, // ✅ Pass user_email
//         }),
//       });

//       if (!response.ok) throw new Error("Failed to track keywords");

//       showToast("Keywords Tracked!", `${validKeywords.length} keywords added for tracking`, "success");
//       await fetchRankHistory(selectedProduct.id);
//     } catch (error: any) {
//       console.error("Track keywords error:", error);
//       showToast("Tracking Failed", error.message, "error");
//     }
//   };

//   // 4️⃣ Fetch rank history for a product
//   const fetchRankHistory = async (productId: number) => {
//     setLoadingRanks(true);
//     try {
//       const response = await fetch(
//         `http://localhost:8000/keyword_tracker/rank_history/${productId}`,
//         {
//           credentials: 'include', // ✅ Include credentials
//         }
//       );
//       if (!response.ok) throw new Error("Failed to fetch rank history");
//       const data = await response.json();
//       setRankHistory(data);
//     } catch (error: any) {
//       console.error("Fetch rank history error:", error);
//       showToast("Failed to Load History", error.message, "error");
//     } finally {
//       setLoadingRanks(false);
//     }
//   };

//   // 5️⃣ Update daily ranks
//   const handleUpdateRanks = async () => {
//     // ✅ Check if user is logged in
//     if (!userEmail) {
//       showToast("Login Required", "Please login to update ranks", "error");
//       return;
//     }

//     setUpdatingRanks(true);
//     try {
//       const response = await fetch("http://localhost:8000/keyword_tracker/update_daily_ranks", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: 'include', // ✅ Include credentials
//         body: JSON.stringify({
//           user_email: userEmail, // ✅ Pass user_email
//         }),
//       });

//       if (!response.ok) throw new Error("Failed to update ranks");

//       showToast("Ranks Updated!", "All keyword ranks have been refreshed", "success");
//       if (selectedProduct) {
//         await fetchRankHistory(selectedProduct.id);
//       }
//     } catch (error: any) {
//       console.error("Update ranks error:", error);
//       showToast("Update Failed", error.message, "error");
//     } finally {
//       setUpdatingRanks(false);
//     }
//   };

//   // 6️⃣ Get AI Analysis
//   const handleGetAIAnalysis = async () => {
//     if (!selectedProduct) {
//       showToast("No Product Selected", "Please select a product first", "error");
//       return;
//     }

//     setLoadingAI(true);
//     try {
//       const response = await fetch(
//         `http://localhost:8000/keyword_tracker/ai_analysis/${selectedProduct.id}`,
//         {
//           credentials: 'include', // ✅ Include credentials
//         }
//       );

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.detail || "Failed to get AI analysis");
//       }

//       const data = await response.json();
//       setAiAnalysis(data);
//       showToast("AI Analysis Complete!", "Your keyword insights are ready", "success");
//     } catch (error: any) {
//       console.error("AI analysis error:", error);
//       showToast("Analysis Failed", error.message, "error");
//     } finally {
//       setLoadingAI(false);
//     }
//   };

//   // Helper function to format AI response (handles both strings and objects)
//   const formatAIResponse = (content: any): string => {
//     if (typeof content === 'string') {
//       return content;
//     }
//     if (Array.isArray(content)) {
//       return content.map((item, idx) => {
//         if (typeof item === 'object') {
//           return `${idx + 1}. ${Object.entries(item).map(([k, v]) => `${k}: ${v}`).join(' - ')}`;
//         }
//         return `${idx + 1}. ${item}`;
//       }).join('\n\n');
//     }
//     if (typeof content === 'object' && content !== null) {
//       return Object.entries(content).map(([key, value]) => {
//         return `• ${key}: ${value}`;
//       }).join('\n\n');
//     }
//     return String(content);
//   };

//   // Auto-load rank history when product is selected
//   useEffect(() => {
//     if (selectedProduct) {
//       fetchRankHistory(selectedProduct.id);
//       setAiAnalysis(null); // Reset AI analysis when product changes
//     }
//   }, [selectedProduct]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#F8FBFF] via-[#ECF5FF] to-[#E0F2FE] overflow-x-hidden">
//       {/* Toasts */}
//       <div className="fixed bottom-4 right-4 z-50 space-y-2 max-w-md">
//         {toasts.map(t => (
//           <div
//             key={t.id}
//             className={`flex items-start gap-3 p-4 rounded-lg shadow-lg border-2 backdrop-blur-md animate-in slide-in-from-right ${
//               t.variant === "success" ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300"
//             }`}
//           >
//             {t.variant === "success" ? (
//               <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
//             ) : (
//               <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
//             )}
//             <div className="flex-1 min-w-0">
//               <p className={`font-semibold text-sm ${t.variant === "success" ? "text-green-900" : "text-red-900"}`}>
//                 {t.title}
//               </p>
//               <p className={`text-sm mt-1 ${t.variant === "success" ? "text-green-700" : "text-red-700"}`}>
//                 {t.description}
//               </p>
//             </div>
//             <button
//               onClick={() => removeToast(t.id)}
//               className={`${t.variant === "success" ? "text-green-600 hover:text-green-800" : "text-red-600 hover:text-red-800"}`}
//             >
//               <X className="h-4 w-4" />
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Mobile Menu Button */}
//       <button
//         className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white/90 rounded-xl shadow-md"
//         onClick={() => setIsMobileMenuOpen(true)}
//       >
//         <Menu className="w-6 h-6 text-slate-700" />
//       </button>

//       {/* Desktop Sidebar */}
//       <aside className="hidden lg:block fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-40">
//         <Sidebar />
//       </aside>

//       {/* Mobile Sidebar Overlay */}
//       {isMobileMenuOpen && (
//         <>
//           <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
//           <aside className="fixed inset-y-0 left-0 w-64 bg-white z-50 lg:hidden shadow-2xl transform transition-transform duration-300">
//             <div className="flex justify-end p-4">
//               <button onClick={() => setIsMobileMenuOpen(false)}>
//                 <X className="w-6 h-6" />
//               </button>
//             </div>
//             <Sidebar />
//           </aside>
//         </>
//       )}

//       {/* MAIN CONTENT */}
//       <div className="lg:ml-64 transition-all min-h-screen">
//         {/* Header */}
//         <header className="bg-white/70 backdrop-blur-md border-b border-slate-200 px-6 py-4 sticky top-0 z-10">
//           <div className="flex items-center gap-3">
//             <Target className="h-8 w-8 text-purple-600" />
//             <div>
//               <h2 className="text-2xl font-semibold text-slate-800">Keyword Rank Tracker</h2>
//               <p className="text-sm text-slate-500">Monitor your Amazon product rankings for specific keywords</p>
//             </div>
//           </div>
//         </header>

//         <div className="p-6">
//           <div className="max-w-7xl mx-auto space-y-6">
//             {/* Title Section */}
//             <div className="text-center space-y-4">
//               <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-red-400 text-transparent bg-clip-text">
//                 Track Your Keyword Rankings
//               </h1>
//               <p className="text-slate-500 text-lg">
//                 Monitor how your products rank for important search keywords on Amazon
//               </p>
              
//               {/* ✅ User Status Display */}
//               {isLoading ? (
//                 <p className="text-sm text-gray-500 font-medium">Checking session...</p>
//               ) : userEmail ? (
//                 <p className="text-sm text-green-600 font-medium">
//                   ✓ Logged in as: {userEmail} (Data will be saved to your account)
//                 </p>
//               ) : (
//                 <p className="text-sm text-orange-600 font-medium">
//                   ⚠️ Not logged in - Please login to track products and keywords
//                 </p>
//               )}
//             </div>

//             {/* Step 1: Fetch Products */}
//             <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/80">
//               <CardHeader>
//                 <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
//                   <Package className="h-5 w-5 text-blue-600" />
//                   Step 1: Fetch Your Products
//                 </CardTitle>
//                 <CardDescription className="text-slate-500">
//                   Enter your Amazon Seller ID to load your products
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="seller-id">Seller ID</Label>
//                     <Input
//                       id="seller-id"
//                       value={sellerId}
//                       onChange={e => setSellerId(e.target.value)}
//                       placeholder="e.g., A02211013Q5HP3OMSZC7W"
//                       disabled={!userEmail} // ✅ Disable if not logged in
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="country">Country</Label>
//                     <select
//                       id="country"
//                       value={country}
//                       onChange={e => setCountry(e.target.value)}
//                       className="w-full h-10 px-3 rounded-md border border-slate-300 bg-white"
//                       disabled={!userEmail} // ✅ Disable if not logged in
//                     >
//                       <option value="US">United States</option>
//                       <option value="IN">India</option>
//                       <option value="UK">United Kingdom</option>
//                       <option value="CA">Canada</option>
//                     </select>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="page">Page</Label>
//                     <Input
//                       id="page"
//                       type="number"
//                       value={page}
//                       onChange={e => setPage(parseInt(e.target.value) || 1)}
//                       placeholder="1"
//                       min="1"
//                       disabled={!userEmail} // ✅ Disable if not logged in
//                     />
//                   </div>
//                 </div>

//                 <Button 
//                   onClick={handleFetchProducts} 
//                   disabled={loading || !userEmail} // ✅ Disable if not logged in
//                   className="w-full bg-blue-500 hover:bg-blue-600"
//                 >
//                   {loading ? (
//                     <>
//                       <Loader2 className="h-4 w-4 animate-spin mr-2" />
//                       Fetching Products...
//                     </>
//                   ) : (
//                     <>
//                       <Search className="h-4 w-4 mr-2" />
//                       Fetch Products
//                     </>
//                   )}
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Products List */}
//             {products.length > 0 && (
//               <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/80">
//                 <CardHeader>
//                   <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
//                     <Package className="h-5 w-5 text-green-600" />
//                     Your Products ({products.length})
//                   </CardTitle>
//                   <CardDescription className="text-slate-500">
//                     Click on a product to start tracking keywords
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {products.map(product => (
//                       <div
//                         key={product.id}
//                         onClick={() => setSelectedProduct(product)}
//                         className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
//                           selectedProduct?.id === product.id
//                             ? "border-purple-500 bg-purple-50"
//                             : "border-slate-200 bg-white hover:border-purple-300"
//                         }`}
//                       >
//                         <div className="flex gap-3">
//                           {product.product_photo && (
//                             <img
//                               src={product.product_photo}
//                               alt={product.product_title}
//                               className="w-16 h-16 object-cover rounded"
//                             />
//                           )}
//                           <div className="flex-1 min-w-0">
//                             <p className="text-sm font-semibold text-slate-900 truncate">{product.product_title}</p>
//                             <p className="text-xs text-slate-500 mt-1">ASIN: {product.asin}</p>
//                             <div className="flex gap-2 mt-2">
//                               <Badge variant="outline" className="text-xs">
//                                 {product.country}
//                               </Badge>
//                               {/* ✅ Show user email badge */}
//                               <Badge className="text-xs bg-green-100 text-green-800">
//                                 {product.user_email}
//                               </Badge>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Step 2: Add Keywords */}
//             {selectedProduct && (
//               <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/80">
//                 <CardHeader>
//                   <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
//                     <Search className="h-5 w-5 text-purple-600" />
//                     Step 2: Track Keywords for "{selectedProduct.product_title}"
//                   </CardTitle>
//                   <CardDescription className="text-slate-500">
//                     Add keywords you want to track rankings for
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="flex gap-2">
//                     <Input
//                       value={keywordInput}
//                       onChange={e => setKeywordInput(e.target.value)}
//                       placeholder="e.g., wireless headphones"
//                       onKeyPress={e => e.key === "Enter" && handleAddKeyword()}
//                       disabled={!userEmail} // ✅ Disable if not logged in
//                     />
//                     <Button 
//                       onClick={handleAddKeyword} 
//                       className="bg-purple-500 hover:bg-purple-600"
//                       disabled={!userEmail} // ✅ Disable if not logged in
//                     >
//                       <Plus className="h-4 w-4" />
//                     </Button>
//                   </div>

//                   {keywords.filter(k => k.trim()).length > 0 && (
//                     <div className="space-y-2">
//                       <Label>Keywords to Track:</Label>
//                       <div className="flex flex-wrap gap-2">
//                         {keywords
//                           .filter(k => k.trim())
//                           .map((keyword, index) => (
//                             <Badge key={index} className="bg-purple-100 text-purple-800 border-purple-300 flex items-center gap-2">
//                               {keyword}
//                               <button onClick={() => handleRemoveKeyword(index)} className="hover:text-purple-900">
//                                 <X className="h-3 w-3" />
//                               </button>
//                             </Badge>
//                           ))}
//                       </div>
//                     </div>
//                   )}

//                   <Button 
//                     onClick={handleTrackKeywords} 
//                     className="w-full bg-purple-500 hover:bg-purple-600"
//                     disabled={!userEmail} // ✅ Disable if not logged in
//                   >
//                     <Target className="h-4 w-4 mr-2" />
//                     Start Tracking Keywords
//                   </Button>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Step 3: Rank History */}
//             {selectedProduct && (
//               <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/80">
//                 <CardHeader>
//                   <div className="flex items-center justify-between">
//                     <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
//                       <BarChart3 className="h-5 w-5 text-orange-600" />
//                       Keyword Rank History
//                     </CardTitle>
//                     <Button
//                       onClick={handleUpdateRanks}
//                       disabled={updatingRanks || !userEmail} // ✅ Disable if not logged in
//                       size="sm"
//                       className="bg-orange-500 hover:bg-orange-600"
//                     >
//                       {updatingRanks ? (
//                         <>
//                           <Loader2 className="h-4 w-4 animate-spin mr-2" />
//                           Updating...
//                         </>
//                       ) : (
//                         <>
//                           <RefreshCw className="h-4 w-4 mr-2" />
//                           Update Ranks
//                         </>
//                       )}
//                     </Button>
//                   </div>
//                   <CardDescription className="text-slate-500">
//                     View current rankings for tracked keywords
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   {loadingRanks ? (
//                     <div className="flex justify-center py-8">
//                       <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
//                     </div>
//                   ) : rankHistory.length === 0 ? (
//                     <Alert className="border-blue-300 bg-blue-50">
//                       <AlertDescription className="text-blue-700">
//                         No rank data yet. Add keywords and update ranks to start tracking!
//                       </AlertDescription>
//                     </Alert>
//                   ) : (
//                     <div className="space-y-3">
//                       {rankHistory.map((item, index) => (
//                         <div
//                           key={index}
//                           className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-purple-50 rounded-lg border border-slate-200"
//                         >
//                           <div className="flex-1">
//                             <p className="font-semibold text-slate-900">{item.keyword}</p>
//                             <div className="flex items-center gap-3 mt-1">
//                               <p className="text-xs text-slate-500 flex items-center gap-1">
//                                 <Clock className="h-3 w-3" />
//                                 {new Date(item.checked_at).toLocaleString()}
//                               </p>
//                               {/* ✅ Show user email */}
//                               <Badge className="text-xs bg-blue-100 text-blue-800">
//                                 {item.user_email}
//                               </Badge>
//                             </div>
//                           </div>
//                           <div className="text-right">
//                             <div
//                               className={`text-2xl font-bold ${
//                                 item.rank === null || item.rank === 0
//                                   ? "text-slate-400"
//                                   : item.rank <= 10
//                                   ? "text-green-600"
//                                   : item.rank <= 50
//                                   ? "text-yellow-600"
//                                   : "text-red-600"
//                               }`}
//                             >
//                               {item.rank === null || item.rank === 0 ? "—" : `#${item.rank}`}
//                             </div>
//                             <p className="text-xs text-slate-500">
//                               {item.rank === null || item.rank === 0 ? "Pending" : "Rank"}
//                             </p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
//             )}

//             {/* Step 4: AI-Powered Insights */}
//             {selectedProduct && rankHistory.length > 0 && (
//               <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-blue-50 to-purple-50">
//                 <CardHeader>
//                   <div className="flex items-center justify-between">
//                     <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
//                       <svg
//                         className="h-6 w-6 text-purple-600"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
//                         />
//                       </svg>
//                       AI-Powered Strategic Insights
//                     </CardTitle>
//                     <Button
//                       onClick={handleGetAIAnalysis}
//                       disabled={loadingAI || !userEmail} // ✅ Disable if not logged in
//                       size="sm"
//                       className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
//                     >
//                       {loadingAI ? (
//                         <>
//                           <Loader2 className="h-4 w-4 animate-spin mr-2" />
//                           Analyzing...
//                         </>
//                       ) : (
//                         <>
//                           <svg
//                             className="h-4 w-4 mr-2"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M13 10V3L4 14h7v7l9-11h-7z"
//                             />
//                           </svg>
//                           Get AI Analysis
//                         </>
//                       )}
//                     </Button>
//                   </div>
//                   <CardDescription className="text-slate-600">
//                     AI-powered insights powered by Mistral analyzing your keyword performance
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   {loadingAI ? (
//                     <div className="flex flex-col items-center justify-center py-12">
//                       <Loader2 className="h-12 w-12 animate-spin text-purple-500 mb-4" />
//                       <p className="text-slate-600 text-sm">AI is analyzing your keyword data...</p>
//                       <p className="text-slate-400 text-xs mt-2">This may take 20-30 seconds</p>
//                     </div>
//                   ) : aiAnalysis ? (
//                     <div className="space-y-6">
//                       {/* Header Stats */}
//                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                         <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
//                           <p className="text-sm text-slate-600 mb-1">Product</p>
//                           <p className="text-lg font-bold text-purple-600 truncate">{aiAnalysis.product_title}</p>
//                         </div>
//                         <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
//                           <p className="text-sm text-slate-600 mb-1">ASIN</p>
//                           <p className="text-lg font-bold text-blue-600">{aiAnalysis.asin}</p>
//                         </div>
//                         <div className="bg-white p-4 rounded-lg border-2 border-pink-200">
//                           <p className="text-sm text-slate-600 mb-1">Keywords Tracked</p>
//                           <p className="text-lg font-bold text-pink-600">{aiAnalysis.total_keywords}</p>
//                         </div>
//                       </div>

//                       {/* Why Changed */}
//                       <div className="bg-white p-6 rounded-xl border-2 border-blue-200 shadow-sm">
//                         <div className="flex items-start gap-3 mb-3">
//                           <div className="bg-blue-100 p-2 rounded-lg">
//                             <TrendingUp className="h-5 w-5 text-blue-600" />
//                           </div>
//                           <div>
//                             <h3 className="text-lg font-bold text-slate-800">Why Rankings Changed</h3>
//                             <p className="text-xs text-slate-500">Understanding the factors behind your rank movements</p>
//                           </div>
//                         </div>
//                         <p className="text-slate-700 leading-relaxed whitespace-pre-line">{formatAIResponse(aiAnalysis.analysis.why_changed)}</p>
//                       </div>

//                       {/* What To Do */}
//                       <div className="bg-white p-6 rounded-xl border-2 border-green-200 shadow-sm">
//                         <div className="flex items-start gap-3 mb-3">
//                           <div className="bg-green-100 p-2 rounded-lg">
//                             <CheckCircle2 className="h-5 w-5 text-green-600" />
//                           </div>
//                           <div>
//                             <h3 className="text-lg font-bold text-slate-800">What You Should Do</h3>
//                             <p className="text-xs text-slate-500">Immediate action items for improvement</p>
//                           </div>
//                         </div>
//                         <div className="text-slate-700 leading-relaxed whitespace-pre-line">
//                           {formatAIResponse(aiAnalysis.analysis.what_to_do)}
//                         </div>
//                       </div>

//                       {/* Which Keywords Matter */}
//                       <div className="bg-white p-6 rounded-xl border-2 border-yellow-200 shadow-sm">
//                         <div className="flex items-start gap-3 mb-3">
//                           <div className="bg-yellow-100 p-2 rounded-lg">
//                             <Target className="h-5 w-5 text-yellow-600" />
//                           </div>
//                           <div>
//                             <h3 className="text-lg font-bold text-slate-800">Which Keywords Matter Most</h3>
//                             <p className="text-xs text-slate-500">Priority keywords to focus your efforts on</p>
//                           </div>
//                         </div>
//                         <div className="text-slate-700 leading-relaxed whitespace-pre-line">
//                           {formatAIResponse(aiAnalysis.analysis.which_keywords_matter)}
//                         </div>
//                       </div>

//                       {/* Future Prediction */}
//                       <div className="bg-white p-6 rounded-xl border-2 border-purple-200 shadow-sm">
//                         <div className="flex items-start gap-3 mb-3">
//                           <div className="bg-purple-100 p-2 rounded-lg">
//                             <svg
//                               className="h-5 w-5 text-purple-600"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//                               />
//                             </svg>
//                           </div>
//                           <div>
//                             <h3 className="text-lg font-bold text-slate-800">Future Prediction</h3>
//                             <p className="text-xs text-slate-500">Expected ranking trends for the next 30 days</p>
//                           </div>
//                         </div>
//                         <p className="text-slate-700 leading-relaxed whitespace-pre-line">{formatAIResponse(aiAnalysis.analysis.future_prediction)}</p>
//                       </div>

//                       {/* Product Optimization */}
//                       <div className="bg-white p-6 rounded-xl border-2 border-orange-200 shadow-sm">
//                         <div className="flex items-start gap-3 mb-3">
//                           <div className="bg-orange-100 p-2 rounded-lg">
//                             <Package className="h-5 w-5 text-orange-600" />
//                           </div>
//                           <div>
//                             <h3 className="text-lg font-bold text-slate-800">Product Optimization</h3>
//                             <p className="text-xs text-slate-500">Listing improvements to boost visibility</p>
//                           </div>
//                         </div>
//                         <div className="text-slate-700 leading-relaxed whitespace-pre-line">
//                           {formatAIResponse(aiAnalysis.analysis.product_optimization)}
//                         </div>
//                       </div>

//                       {/* Roadmap */}
//                       <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl border-2 border-slate-300 shadow-sm">
//                         <div className="flex items-start gap-3 mb-3">
//                           <div className="bg-slate-700 p-2 rounded-lg">
//                             <svg
//                               className="h-5 w-5 text-white"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
//                               />
//                             </svg>
//                           </div>
//                           <div>
//                             <h3 className="text-lg font-bold text-slate-800">30-60-90 Day Roadmap</h3>
//                             <p className="text-xs text-slate-500">Strategic plan for sustained growth</p>
//                           </div>
//                         </div>
//                         <div className="text-slate-700 leading-relaxed whitespace-pre-line font-medium">
//                           {formatAIResponse(aiAnalysis.analysis.roadmap)}
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <Alert className="border-purple-300 bg-purple-50">
//                       <AlertDescription className="text-purple-700 flex items-center gap-2">
//                         <svg
//                           className="h-5 w-5"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                           />
//                         </svg>
//                         Click "Get AI Analysis" to receive AI-powered insights about your keyword rankings and optimization strategies.
//                       </AlertDescription>
//                     </Alert>
//                   )}
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






// import { useState, useEffect } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useAuth } from "@/App";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import { Badge } from "@/components/ui/badge";
// import {
//   Loader2,
//   Search,
//   TrendingUp,
//   Package,
//   Menu,
//   X,
//   Plus,
//   Trash2,
//   RefreshCw,
//   CheckCircle2,
//   XCircle,
//   Target,
//   BarChart3,
//   Clock,
//   Star,
//   MessageSquare,
//   ThumbsUp,
// } from "lucide-react";
// import Sidebar from "@/components/layout/sidebar";

// interface TrackedProduct {
//   id: number;
//   seller_id: string;
//   asin: string;
//   product_title: string;
//   product_photo: string;
//   country: string;
//   user_email: string;
//   review_comments: string[]; // ✅ Added
//   review_ratings: number[];   // ✅ Added
// }

// interface KeywordRank {
//   keyword: string;
//   rank: number | null;
//   checked_at: string;
//   user_email: string;
// }

// interface Toast {
//   id: number;
//   title: string;
//   description: string;
//   variant: "success" | "error";
// }

// interface AIAnalysis {
//   product_title: string;
//   asin: string;
//   total_keywords: number;
//   analysis: {
//     why_changed: string;
//     what_to_do: string;
//     which_keywords_matter: string;
//     future_prediction: string;
//     product_optimization: string;
//     roadmap: string;
//   };
// }

// export default function KeywordTracker() {
//   const { user, isLoading } = useAuth();
//   const userEmail = user?.email || "";
//   const userId = user?.id;

//   const [sellerId, setSellerId] = useState("");
//   const [country, setCountry] = useState("US");
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [products, setProducts] = useState<TrackedProduct[]>([]);
//   const [selectedProduct, setSelectedProduct] = useState<TrackedProduct | null>(null);
//   const [keywords, setKeywords] = useState<string[]>([""]);
//   const [keywordInput, setKeywordInput] = useState("");
//   const [rankHistory, setRankHistory] = useState<KeywordRank[]>([]);
//   const [loadingRanks, setLoadingRanks] = useState(false);
//   const [updatingRanks, setUpdatingRanks] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [toasts, setToasts] = useState<Toast[]>([]);
//   const [aiAnalysis, setAiAnalysis] = useState<AIAnalysis | null>(null);
//   const [loadingAI, setLoadingAI] = useState(false);

//   // Toast handler
//   const showToast = (title: string, description: string, variant: "success" | "error" = "success") => {
//     const id = Date.now();
//     setToasts(prev => [...prev, { id, title, description, variant }]);
//     setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 5000);
//   };

//   const removeToast = (id: number) => setToasts(prev => prev.filter(t => t.id !== id));

//   // ✅ Calculate average rating
//   const calculateAverageRating = (ratings: number[]): number => {
//     if (!ratings || ratings.length === 0) return 0;
//     const sum = ratings.reduce((acc, rating) => acc + rating, 0);
//     return sum / ratings.length;
//   };

//   // ✅ Get rating distribution
//   const getRatingDistribution = (ratings: number[]) => {
//     const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
//     ratings.forEach(rating => {
//       if (rating >= 1 && rating <= 5) {
//         distribution[rating as keyof typeof distribution]++;
//       }
//     });
//     return distribution;
//   };

//   // 1️⃣ Fetch and store seller products
//   const handleFetchProducts = async () => {
//     if (!sellerId.trim()) {
//       showToast("Missing Information", "Please enter a seller ID", "error");
//       return;
//     }

//     if (!userEmail) {
//       showToast("Login Required", "Please login to track products", "error");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch(
//         `http://localhost:8000/keyword_tracker/fetch_and_store_products/${sellerId}?country=${country}&page=${page}&user_email=${encodeURIComponent(userEmail)}`,
//         {
//           credentials: 'include',
//         }
//       );

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.detail || "Failed to fetch products");
//       }

//       const data = await response.json();
//       setProducts(data);
//       showToast("Success!", `Found ${data.length} products with reviews for seller ${sellerId}`, "success");
//     } catch (error: any) {
//       console.error("Fetch error:", error);
//       showToast("Fetch Failed", error.message, "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 2️⃣ Add keyword to tracking
//   const handleAddKeyword = () => {
//     if (!keywordInput.trim()) return;
//     if (!keywords.includes(keywordInput.trim())) {
//       setKeywords([...keywords, keywordInput.trim()]);
//       setKeywordInput("");
//     }
//   };

//   const handleRemoveKeyword = (index: number) => {
//     setKeywords(keywords.filter((_, i) => i !== index));
//   };

//   // 3️⃣ Save keywords for product
//   const handleTrackKeywords = async () => {
//     if (!selectedProduct) {
//       showToast("No Product Selected", "Please select a product first", "error");
//       return;
//     }

//     if (!userEmail) {
//       showToast("Login Required", "Please login to track keywords", "error");
//       return;
//     }

//     const validKeywords = keywords.filter(k => k.trim() !== "");
//     if (validKeywords.length === 0) {
//       showToast("No Keywords", "Please add at least one keyword", "error");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8000/keyword_tracker/track_keywords", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: 'include',
//         body: JSON.stringify({
//           tracked_product_id: selectedProduct.id,
//           keywords: validKeywords,
//           user_email: userEmail,
//         }),
//       });

//       if (!response.ok) throw new Error("Failed to track keywords");

//       showToast("Keywords Tracked!", `${validKeywords.length} keywords added for tracking`, "success");
//       await fetchRankHistory(selectedProduct.id);
//     } catch (error: any) {
//       console.error("Track keywords error:", error);
//       showToast("Tracking Failed", error.message, "error");
//     }
//   };

//   // 4️⃣ Fetch rank history for a product
//   const fetchRankHistory = async (productId: number) => {
//     setLoadingRanks(true);
//     try {
//       const response = await fetch(
//         `http://localhost:8000/keyword_tracker/rank_history/${productId}`,
//         {
//           credentials: 'include',
//         }
//       );
//       if (!response.ok) throw new Error("Failed to fetch rank history");
//       const data = await response.json();
//       setRankHistory(data);
//     } catch (error: any) {
//       console.error("Fetch rank history error:", error);
//       showToast("Failed to Load History", error.message, "error");
//     } finally {
//       setLoadingRanks(false);
//     }
//   };

//   // 5️⃣ Update daily ranks
//   const handleUpdateRanks = async () => {
//     if (!userEmail) {
//       showToast("Login Required", "Please login to update ranks", "error");
//       return;
//     }

//     setUpdatingRanks(true);
//     try {
//       const response = await fetch("http://localhost:8000/keyword_tracker/update_daily_ranks", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: 'include',
//         body: JSON.stringify({
//           user_email: userEmail,
//         }),
//       });

//       if (!response.ok) throw new Error("Failed to update ranks");

//       showToast("Ranks Updated!", "All keyword ranks have been refreshed", "success");
//       if (selectedProduct) {
//         await fetchRankHistory(selectedProduct.id);
//       }
//     } catch (error: any) {
//       console.error("Update ranks error:", error);
//       showToast("Update Failed", error.message, "error");
//     } finally {
//       setUpdatingRanks(false);
//     }
//   };

//   // 6️⃣ Get AI Analysis
//   const handleGetAIAnalysis = async () => {
//     if (!selectedProduct) {
//       showToast("No Product Selected", "Please select a product first", "error");
//       return;
//     }

//     setLoadingAI(true);
//     try {
//       const response = await fetch(
//         `http://localhost:8000/keyword_tracker/ai_analysis/${selectedProduct.id}`,
//         {
//           credentials: 'include',
//         }
//       );

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.detail || "Failed to get AI analysis");
//       }

//       const data = await response.json();
//       setAiAnalysis(data);
//       showToast("AI Analysis Complete!", "Your keyword insights are ready", "success");
//     } catch (error: any) {
//       console.error("AI analysis error:", error);
//       showToast("Analysis Failed", error.message, "error");
//     } finally {
//       setLoadingAI(false);
//     }
//   };

//   // Helper function to format AI response
//   const formatAIResponse = (content: any): string => {
//     if (typeof content === 'string') {
//       return content;
//     }
//     if (Array.isArray(content)) {
//       return content.map((item, idx) => {
//         if (typeof item === 'object') {
//           return `${idx + 1}. ${Object.entries(item).map(([k, v]) => `${k}: ${v}`).join(' - ')}`;
//         }
//         return `${idx + 1}. ${item}`;
//       }).join('\n\n');
//     }
//     if (typeof content === 'object' && content !== null) {
//       return Object.entries(content).map(([key, value]) => {
//         return `• ${key}: ${value}`;
//       }).join('\n\n');
//     }
//     return String(content);
//   };

//   // Auto-load rank history when product is selected
//   useEffect(() => {
//     if (selectedProduct) {
//       fetchRankHistory(selectedProduct.id);
//       setAiAnalysis(null);
//     }
//   }, [selectedProduct]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#F8FBFF] via-[#ECF5FF] to-[#E0F2FE] overflow-x-hidden">
//       {/* Toasts */}
//       <div className="fixed bottom-4 right-4 z-50 space-y-2 max-w-md">
//         {toasts.map(t => (
//           <div
//             key={t.id}
//             className={`flex items-start gap-3 p-4 rounded-lg shadow-lg border-2 backdrop-blur-md animate-in slide-in-from-right ${
//               t.variant === "success" ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300"
//             }`}
//           >
//             {t.variant === "success" ? (
//               <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
//             ) : (
//               <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
//             )}
//             <div className="flex-1 min-w-0">
//               <p className={`font-semibold text-sm ${t.variant === "success" ? "text-green-900" : "text-red-900"}`}>
//                 {t.title}
//               </p>
//               <p className={`text-sm mt-1 ${t.variant === "success" ? "text-green-700" : "text-red-700"}`}>
//                 {t.description}
//               </p>
//             </div>
//             <button
//               onClick={() => removeToast(t.id)}
//               className={`${t.variant === "success" ? "text-green-600 hover:text-green-800" : "text-red-600 hover:text-red-800"}`}
//             >
//               <X className="h-4 w-4" />
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Mobile Menu Button */}
//       <button
//         className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white/90 rounded-xl shadow-md"
//         onClick={() => setIsMobileMenuOpen(true)}
//       >
//         <Menu className="w-6 h-6 text-slate-700" />
//       </button>

//       {/* Desktop Sidebar */}
//       <aside className="hidden lg:block fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-40">
//         <Sidebar />
//       </aside>

//       {/* Mobile Sidebar Overlay */}
//       {isMobileMenuOpen && (
//         <>
//           <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
//           <aside className="fixed inset-y-0 left-0 w-64 bg-white z-50 lg:hidden shadow-2xl transform transition-transform duration-300">
//             <div className="flex justify-end p-4">
//               <button onClick={() => setIsMobileMenuOpen(false)}>
//                 <X className="w-6 h-6" />
//               </button>
//             </div>
//             <Sidebar />
//           </aside>
//         </>
//       )}

//       {/* MAIN CONTENT */}
//       <div className="lg:ml-64 transition-all min-h-screen">
//         {/* Header */}
//         <header className="bg-white/70 backdrop-blur-md border-b border-slate-200 px-6 py-4 sticky top-0 z-10">
//           <div className="flex items-center gap-3">
//             <Target className="h-8 w-8 text-purple-600" />
//             <div>
//               <h2 className="text-2xl font-semibold text-slate-800">Keyword Rank Tracker</h2>
//               <p className="text-sm text-slate-500">Monitor your Amazon product rankings for specific keywords</p>
//             </div>
//           </div>
//         </header>

//         <div className="p-6">
//           <div className="max-w-7xl mx-auto space-y-6">
//             {/* Title Section */}
//             <div className="text-center space-y-4">
//               <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-red-400 text-transparent bg-clip-text">
//                 Track Your Keyword Rankings
//               </h1>
//               <p className="text-slate-500 text-lg">
//                 Monitor how your products rank for important search keywords on Amazon
//               </p>
              
//               {isLoading ? (
//                 <p className="text-sm text-gray-500 font-medium">Checking session...</p>
//               ) : userEmail ? (
//                 <p className="text-sm text-green-600 font-medium">
//                   ✓ Logged in as: {userEmail} (Data will be saved to your account)
//                 </p>
//               ) : (
//                 <p className="text-sm text-orange-600 font-medium">
//                   ⚠️ Not logged in - Please login to track products and keywords
//                 </p>
//               )}
//             </div>

//             {/* Step 1: Fetch Products */}
//             <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/80">
//               <CardHeader>
//                 <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
//                   <Package className="h-5 w-5 text-blue-600" />
//                   Step 1: Fetch Your Products
//                 </CardTitle>
//                 <CardDescription className="text-slate-500">
//                   Enter your Amazon Seller ID to load your products with reviews
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="seller-id">Seller ID</Label>
//                     <Input
//                       id="seller-id"
//                       value={sellerId}
//                       onChange={e => setSellerId(e.target.value)}
//                       placeholder="e.g., A02211013Q5HP3OMSZC7W"
//                       disabled={!userEmail}
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="country">Country</Label>
//                     <select
//                       id="country"
//                       value={country}
//                       onChange={e => setCountry(e.target.value)}
//                       className="w-full h-10 px-3 rounded-md border border-slate-300 bg-white"
//                       disabled={!userEmail}
//                     >
//                       <option value="US">United States</option>
//                       <option value="IN">India</option>
//                       <option value="UK">United Kingdom</option>
//                       <option value="CA">Canada</option>
//                     </select>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="page">Page</Label>
//                     <Input
//                       id="page"
//                       type="number"
//                       value={page}
//                       onChange={e => setPage(parseInt(e.target.value) || 1)}
//                       placeholder="1"
//                       min="1"
//                       disabled={!userEmail}
//                     />
//                   </div>
//                 </div>

//                 <Button 
//                   onClick={handleFetchProducts} 
//                   disabled={loading || !userEmail}
//                   className="w-full bg-blue-500 hover:bg-blue-600"
//                 >
//                   {loading ? (
//                     <>
//                       <Loader2 className="h-4 w-4 animate-spin mr-2" />
//                       Fetching Products & Reviews...
//                     </>
//                   ) : (
//                     <>
//                       <Search className="h-4 w-4 mr-2" />
//                       Fetch Products & Reviews
//                     </>
//                   )}
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Products List */}
//             {products.length > 0 && (
//               <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/80">
//                 <CardHeader>
//                   <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
//                     <Package className="h-5 w-5 text-green-600" />
//                     Your Products ({products.length})
//                   </CardTitle>
//                   <CardDescription className="text-slate-500">
//                     Click on a product to view reviews and start tracking keywords
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {products.map(product => (
//                       <div
//                         key={product.id}
//                         onClick={() => setSelectedProduct(product)}
//                         className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
//                           selectedProduct?.id === product.id
//                             ? "border-purple-500 bg-purple-50"
//                             : "border-slate-200 bg-white hover:border-purple-300"
//                         }`}
//                       >
//                         <div className="flex gap-3">
//                           {product.product_photo && (
//                             <img
//                               src={product.product_photo}
//                               alt={product.product_title}
//                               className="w-16 h-16 object-cover rounded"
//                             />
//                           )}
//                           <div className="flex-1 min-w-0">
//                             <p className="text-sm font-semibold text-slate-900 truncate">{product.product_title}</p>
//                             <p className="text-xs text-slate-500 mt-1">ASIN: {product.asin}</p>
//                             <div className="flex gap-2 mt-2 flex-wrap">
//                               <Badge variant="outline" className="text-xs">
//                                 {product.country}
//                               </Badge>
//                               {/* ✅ Show review count */}
//                               {product.review_comments && product.review_comments.length > 0 && (
//                                 <Badge className="text-xs bg-blue-100 text-blue-800 flex items-center gap-1">
//                                   <MessageSquare className="h-3 w-3" />
//                                   {product.review_comments.length} reviews
//                                 </Badge>
//                               )}
//                               {/* ✅ Show average rating */}
//                               {product.review_ratings && product.review_ratings.length > 0 && (
//                                 <Badge className="text-xs bg-yellow-100 text-yellow-800 flex items-center gap-1">
//                                   <Star className="h-3 w-3 fill-yellow-500" />
//                                   {calculateAverageRating(product.review_ratings).toFixed(1)}
//                                 </Badge>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             )}

//             {/* ✅ NEW: Customer Reviews Section */}
//             {selectedProduct && selectedProduct.review_comments && selectedProduct.review_comments.length > 0 && (
//               <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-white to-blue-50">
//                 <CardHeader>
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
//                         <MessageSquare className="h-5 w-5 text-blue-600" />
//                         Customer Reviews Analysis
//                       </CardTitle>
//                       <CardDescription className="text-slate-600 mt-2">
//                         <span className="font-semibold">The Problem:</span> Thousands of reviews hide insights you don't have time to read.
//                       </CardDescription>
//                       <CardDescription className="text-slate-600">
//                         <span className="font-semibold">How This Helps:</span> Analyze reviews at scale to uncover pain points, feature gaps, and improvement opportunities.
//                       </CardDescription>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="space-y-6">
//                   {/* Review Statistics */}
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     {/* Total Reviews */}
//                     <div className="bg-white p-4 rounded-xl border-2 border-blue-200 shadow-sm">
//                       <div className="flex items-center gap-3">
//                         <div className="bg-blue-100 p-3 rounded-lg">
//                           <MessageSquare className="h-6 w-6 text-blue-600" />
//                         </div>
//                         <div>
//                           <p className="text-sm text-slate-600">Total Reviews</p>
//                           <p className="text-2xl font-bold text-blue-600">
//                             {selectedProduct.review_comments.length}
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Average Rating */}
//                     <div className="bg-white p-4 rounded-xl border-2 border-yellow-200 shadow-sm">
//                       <div className="flex items-center gap-3">
//                         <div className="bg-yellow-100 p-3 rounded-lg">
//                           <Star className="h-6 w-6 text-yellow-600 fill-yellow-600" />
//                         </div>
//                         <div>
//                           <p className="text-sm text-slate-600">Average Rating</p>
//                           <p className="text-2xl font-bold text-yellow-600">
//                             {calculateAverageRating(selectedProduct.review_ratings).toFixed(1)} ⭐
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Positive Reviews */}
//                     <div className="bg-white p-4 rounded-xl border-2 border-green-200 shadow-sm">
//                       <div className="flex items-center gap-3">
//                         <div className="bg-green-100 p-3 rounded-lg">
//                           <ThumbsUp className="h-6 w-6 text-green-600" />
//                         </div>
//                         <div>
//                           <p className="text-sm text-slate-600">Positive Reviews</p>
//                           <p className="text-2xl font-bold text-green-600">
//                             {selectedProduct.review_ratings.filter(r => r >= 4).length}
//                           </p>
//                           <p className="text-xs text-slate-500">
//                             ({((selectedProduct.review_ratings.filter(r => r >= 4).length / selectedProduct.review_ratings.length) * 100).toFixed(0)}%)
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Rating Distribution */}
//                   <div className="bg-white p-6 rounded-xl border-2 border-slate-200 shadow-sm">
//                     <h3 className="text-lg font-bold text-slate-800 mb-4">Rating Distribution</h3>
//                     {(() => {
//                       const distribution = getRatingDistribution(selectedProduct.review_ratings);
//                       const total = selectedProduct.review_ratings.length;
//                       return (
//                         <div className="space-y-3">
//                           {[5, 4, 3, 2, 1].map(rating => {
//                             const count = distribution[rating as keyof typeof distribution];
//                             const percentage = total > 0 ? (count / total) * 100 : 0;
//                             return (
//                               <div key={rating} className="flex items-center gap-3">
//                                 <div className="flex items-center gap-1 w-16">
//                                   <span className="text-sm font-semibold text-slate-700">{rating}</span>
//                                   <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
//                                 </div>
//                                 <div className="flex-1 bg-slate-200 rounded-full h-3 overflow-hidden">
//                                   <div
//                                     className={`h-full rounded-full transition-all ${
//                                       rating === 5 ? "bg-green-500" :
//                                       rating === 4 ? "bg-lime-500" :
//                                       rating === 3 ? "bg-yellow-500" :
//                                       rating === 2 ? "bg-orange-500" :
//                                       "bg-red-500"
//                                     }`}
//                                     style={{ width: `${percentage}%` }}
//                                   />
//                                 </div>
//                                 <span className="text-sm text-slate-600 w-12 text-right">
//                                   {count}
//                                 </span>
//                                 <span className="text-xs text-slate-500 w-12 text-right">
//                                   ({percentage.toFixed(0)}%)
//                                 </span>
//                               </div>
//                             );
//                           })}
//                         </div>
//                       );
//                     })()}
//                   </div>

//                   {/* Individual Reviews */}
//                   <div className="bg-white p-6 rounded-xl border-2 border-slate-200 shadow-sm">
//                     <h3 className="text-lg font-bold text-slate-800 mb-4">Recent Reviews</h3>
//                     <div className="space-y-4 max-h-96 overflow-y-auto">
//                       {selectedProduct.review_comments.map((comment, index) => {
//                         const rating = selectedProduct.review_ratings[index];
//                         return (
//                           <div
//                             key={index}
//                             className="p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border border-slate-200"
//                           >
//                             <div className="flex items-center gap-2 mb-2">
//                               <div className="flex items-center gap-1">
//                                 {[...Array(5)].map((_, i) => (
//                                   <Star
//                                     key={i}
//                                     className={`h-4 w-4 ${
//                                       i < rating
//                                         ? "text-yellow-500 fill-yellow-500"
//                                         : "text-slate-300"
//                                     }`}
//                                   />
//                                 ))}
//                               </div>
//                               <Badge
//                                 className={`text-xs ${
//                                   rating === 5 ? "bg-green-100 text-green-800" :
//                                   rating === 4 ? "bg-lime-100 text-lime-800" :
//                                   rating === 3 ? "bg-yellow-100 text-yellow-800" :
//                                   rating === 2 ? "bg-orange-100 text-orange-800" :
//                                   "bg-red-100 text-red-800"
//                                 }`}
//                               >
//                                 {rating} Star{rating !== 1 ? 's' : ''}
//                               </Badge>
//                             </div>
//                             <p className="text-slate-700 leading-relaxed">{comment}</p>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Step 2: Add Keywords */}
//             {selectedProduct && (
//               <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/80">
//                 <CardHeader>
//                   <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
//                     <Search className="h-5 w-5 text-purple-600" />
//                     Step 2: Track Keywords for "{selectedProduct.product_title}"
//                   </CardTitle>
//                   <CardDescription className="text-slate-500">
//                     Add keywords you want to track rankings for
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="flex gap-2">
//                     <Input
//                       value={keywordInput}
//                       onChange={e => setKeywordInput(e.target.value)}
//                       placeholder="e.g., wireless headphones"
//                       onKeyPress={e => e.key === "Enter" && handleAddKeyword()}
//                       disabled={!userEmail}
//                     />
//                     <Button 
//                       onClick={handleAddKeyword} 
//                       className="bg-purple-500 hover:bg-purple-600"
//                       disabled={!userEmail}
//                     >
//                       <Plus className="h-4 w-4" />
//                     </Button>
//                   </div>

//                   {keywords.filter(k => k.trim()).length > 0 && (
//                     <div className="space-y-2">
//                       <Label>Keywords to Track:</Label>
//                       <div className="flex flex-wrap gap-2">
//                         {keywords
//                           .filter(k => k.trim())
//                           .map((keyword, index) => (
//                             <Badge key={index} className="bg-purple-100 text-purple-800 border-purple-300 flex items-center gap-2">
//                               {keyword}
//                               <button onClick={() => handleRemoveKeyword(index)} className="hover:text-purple-900">
//                                 <X className="h-3 w-3" />
//                               </button>
//                             </Badge>
//                           ))}
//                       </div>
//                     </div>
//                   )}

//                   <Button 
//                     onClick={handleTrackKeywords} 
//                     className="w-full bg-purple-500 hover:bg-purple-600"
//                     disabled={!userEmail}
//                   >
//                     <Target className="h-4 w-4 mr-2" />
//                     Start Tracking Keywords
//                   </Button>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Step 3: Rank History */}
//             {selectedProduct && (
//               <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/80">
//                 <CardHeader>
//                   <div className="flex items-center justify-between">
//                     <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
//                       <BarChart3 className="h-5 w-5 text-orange-600" />
//                       Keyword Rank History
//                     </CardTitle>
//                     <Button
//                       onClick={handleUpdateRanks}
//                       disabled={updatingRanks || !userEmail}
//                       size="sm"
//                       className="bg-orange-500 hover:bg-orange-600"
//                     >
//                       {updatingRanks ? (
//                         <>
//                           <Loader2 className="h-4 w-4 animate-spin mr-2" />
//                           Updating...
//                         </>
//                       ) : (
//                         <>
//                           <RefreshCw className="h-4 w-4 mr-2" />
//                           Update Ranks
//                         </>
//                       )}
//                     </Button>
//                   </div>
//                   <CardDescription className="text-slate-500">
//                     View current rankings for tracked keywords
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   {loadingRanks ? (
//                     <div className="flex justify-center py-8">
//                       <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
//                     </div>
//                   ) : rankHistory.length === 0 ? (
//                     <Alert className="border-blue-300 bg-blue-50">
//                       <AlertDescription className="text-blue-700">
//                         No rank data yet. Add keywords and update ranks to start tracking!
//                       </AlertDescription>
//                     </Alert>
//                   ) : (
//                     <div className="space-y-3">
//                       {rankHistory.map((item, index) => (
//                         <div
//                           key={index}
//                           className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-purple-50 rounded-lg border border-slate-200"
//                         >
//                           <div className="flex-1">
//                             <p className="font-semibold text-slate-900">{item.keyword}</p>
//                             <div className="flex items-center gap-3 mt-1">
//                               <p className="text-xs text-slate-500 flex items-center gap-1">
//                                 <Clock className="h-3 w-3" />
//                                 {new Date(item.checked_at).toLocaleString()}
//                               </p>
//                               <Badge className="text-xs bg-blue-100 text-blue-800">
//                                 {item.user_email}
//                               </Badge>
//                             </div>
//                           </div>
//                           <div className="text-right">
//                             <div
//                               className={`text-2xl font-bold ${
//                                 item.rank === null || item.rank === 0
//                                   ? "text-slate-400"
//                                   : item.rank <= 10
//                                   ? "text-green-600"
//                                   : item.rank <= 50
//                                   ? "text-yellow-600"
//                                   : "text-red-600"
//                               }`}
//                             >
//                               {item.rank === null || item.rank === 0 ? "—" : `#${item.rank}`}
//                             </div>
//                             <p className="text-xs text-slate-500">
//                               {item.rank === null || item.rank === 0 ? "Pending" : "Rank"}
//                             </p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
//             )}

//             {/* AI Analysis remains the same... */}
//             {selectedProduct && rankHistory.length > 0 && (
//               <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-blue-50 to-purple-50">
//                 <CardHeader>
//                   <div className="flex items-center justify-between">
//                     <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
//                       <svg
//                         className="h-6 w-6 text-purple-600"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
//                         />
//                       </svg>
//                       AI-Powered Strategic Insights
//                     </CardTitle>
//                     <Button
//                       onClick={handleGetAIAnalysis}
//                       disabled={loadingAI || !userEmail}
//                       size="sm"
//                       className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
//                     >
//                       {loadingAI ? (
//                         <>
//                           <Loader2 className="h-4 w-4 animate-spin mr-2" />
//                           Analyzing...
//                         </>
//                       ) : (
//                         <>
//                           <svg
//                             className="h-4 w-4 mr-2"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M13 10V3L4 14h7v7l9-11h-7z"
//                             />
//                           </svg>
//                           Get AI Analysis
//                         </>
//                       )}
//                     </Button>
//                   </div>
//                   <CardDescription className="text-slate-600">
//                     AI-powered insights powered by Mistral analyzing your keyword performance
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   {loadingAI ? (
//                     <div className="flex flex-col items-center justify-center py-12">
//                       <Loader2 className="h-12 w-12 animate-spin text-purple-500 mb-4" />
//                       <p className="text-slate-600 text-sm">AI is analyzing your keyword data...</p>
//                       <p className="text-slate-400 text-xs mt-2">This may take 20-30 seconds</p>
//                     </div>
//                   ) : aiAnalysis ? (
//                     <div className="space-y-6">
//                       {/* AI Analysis sections... (keeping existing code) */}
//                       <Alert className="border-purple-300 bg-purple-50">
//                         <AlertDescription className="text-purple-700">
//                           AI Analysis content goes here (keeping your existing implementation)
//                         </AlertDescription>
//                       </Alert>
//                     </div>
//                   ) : (
//                     <Alert className="border-purple-300 bg-purple-50">
//                       <AlertDescription className="text-purple-700 flex items-center gap-2">
//                         <svg
//                           className="h-5 w-5"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                           />
//                         </svg>
//                         Click "Get AI Analysis" to receive AI-powered insights about your keyword rankings and optimization strategies.
//                       </AlertDescription>
//                     </Alert>
//                   )}
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }














import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/App";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Loader2,
  Search,
  TrendingUp,
  Package,
  Menu,
  X,
  Plus,
  Trash2,
  RefreshCw,
  CheckCircle2,
  XCircle,
  Target,
  BarChart3,
  Clock,
  Star,
  MessageSquare,
  ThumbsUp,
  Lock,
  Crown,
  AlertCircle,
} from "lucide-react";
import Sidebar from "@/components/layout/sidebar";

interface TrackedProduct {
  id: number;
  seller_id: string;
  asin: string;
  product_title: string;
  product_photo: string;
  country: string;
  user_email: string;
  review_comments: string[];
  review_ratings: number[];
}

interface KeywordRank {
  keyword: string;
  rank: number | null;
  checked_at: string;
  user_email: string;
}

interface Toast {
  id: number;
  title: string;
  description: string;
  variant: "success" | "error";
}

interface AIAnalysis {
  product_title: string;
  asin: string;
  total_keywords: number;
  analysis: {
    why_changed: string | any;
    what_to_do: string | string[] | any;
    which_keywords_matter: string | any[] | any;
    future_prediction: string | any;
    product_optimization: string | string[] | any;
    roadmap: string | any[] | any;
  };
}

interface UsageLimits {
  count: number;
  limit: number;
  remaining: number;
  subscription_tier: string;
}

export default function KeywordTracker() {
  const { user, isLoading } = useAuth();
  const userEmail = user?.email || "";
  const userId = user?.id;

  const [sellerId, setSellerId] = useState("");
  const [country, setCountry] = useState("US");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<TrackedProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<TrackedProduct | null>(null);
  const [keywords, setKeywords] = useState<string[]>([""]);
  const [keywordInput, setKeywordInput] = useState("");
  const [rankHistory, setRankHistory] = useState<KeywordRank[]>([]);
  const [loadingRanks, setLoadingRanks] = useState(false);
  const [updatingRanks, setUpdatingRanks] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [aiAnalysis, setAiAnalysis] = useState<AIAnalysis | null>(null);
  const [loadingAI, setLoadingAI] = useState(false);

  // ✅ Usage tracking states
  const [usageLimits, setUsageLimits] = useState<UsageLimits | null>(null);
  const [loadingUsage, setLoadingUsage] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const API_BASE_URL = "http://localhost:8000";

  // ✅ Fetch usage limits on component mount
  useEffect(() => {
    if (userId) {
      fetchUsageLimits();
    }
  }, [userId]);

  // ✅ Fetch current usage limits
  const fetchUsageLimits = async () => {
    if (!userId) return;
    
    setLoadingUsage(true);
    try {
      const response = await fetch(`${API_BASE_URL}/users/${userId}/keyword-tracker-usage`, {
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
      console.error("Failed to fetch keyword tracker usage limits:", error);
    } finally {
      setLoadingUsage(false);
    }
  };

  // ✅ Check if user can track more products
  const canTrack = usageLimits 
    ? usageLimits.limit === Infinity || usageLimits.count < usageLimits.limit
    : true;

  // ✅ Get upgrade message
  const getUpgradeMessage = () => {
    if (!usageLimits) return "";
    
    const tier = usageLimits.subscription_tier.toLowerCase();
    if (tier === 'free') {
      return "Upgrade to Basic for 10 product trackings per month";
    } else if (tier === 'basic') {
      return "Upgrade to Premium for unlimited product trackings";
    }
    return "Upgrade for more features";
  };

  // Toast handler
  const showToast = (title: string, description: string, variant: "success" | "error" = "success") => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, title, description, variant }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 5000);
  };

  const removeToast = (id: number) => setToasts(prev => prev.filter(t => t.id !== id));

  // ✅ Calculate average rating
  const calculateAverageRating = (ratings: number[]): number => {
    if (!ratings || ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    return sum / ratings.length;
  };

  // ✅ Get rating distribution
  const getRatingDistribution = (ratings: number[]) => {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    ratings.forEach(rating => {
      if (rating >= 1 && rating <= 5) {
        distribution[rating as keyof typeof distribution]++;
      }
    });
    return distribution;
  };

  // 1️⃣ Fetch and store seller products
  const handleFetchProducts = async () => {
    // ✅ Check if user has reached limit
    if (userId && !canTrack) {
      setShowUpgradeModal(true);
      showToast(
        "Tracking Limit Reached", 
        `You've used all ${usageLimits?.limit} product trackings this month. Upgrade for more!`,
        "error"
      );
      return;
    }

    if (!sellerId.trim()) {
      showToast("Missing Information", "Please enter a seller ID", "error");
      return;
    }

    if (!userEmail) {
      showToast("Login Required", "Please login to track products", "error");
      return;
    }

    setLoading(true);
    try {
      const url = `${API_BASE_URL}/keyword_tracker/fetch_and_store_products/${sellerId}?country=${country}&page=${page}&user_email=${encodeURIComponent(userEmail)}${userId ? `&user_id=${userId}` : ''}`;
      
      const response = await fetch(url, {
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        
        // ✅ Check if it's a limit error
        if (response.status === 403 && errorData.detail?.includes("limit")) {
          setShowUpgradeModal(true);
          showToast("Tracking Limit Reached", errorData.detail, "error");
        } else {
          throw new Error(errorData.detail || "Failed to fetch products");
        }
        return;
      }

      const data = await response.json();
      setProducts(data);
      
      // ✅ Refresh usage limits after successful fetch
      if (userId) {
        await fetchUsageLimits();
      }
      
      showToast("Success!", `Found ${data.length} products with reviews for seller ${sellerId}${userId ? ' and tracked' : ''}`, "success");
    } catch (error: any) {
      console.error("Fetch error:", error);
      showToast("Fetch Failed", error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  // 2️⃣ Add keyword to tracking
  const handleAddKeyword = () => {
    if (!keywordInput.trim()) return;
    if (!keywords.includes(keywordInput.trim())) {
      setKeywords([...keywords, keywordInput.trim()]);
      setKeywordInput("");
    }
  };

  const handleRemoveKeyword = (index: number) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  // 3️⃣ Save keywords for product
  const handleTrackKeywords = async () => {
    if (!selectedProduct) {
      showToast("No Product Selected", "Please select a product first", "error");
      return;
    }

    if (!userEmail) {
      showToast("Login Required", "Please login to track keywords", "error");
      return;
    }

    const validKeywords = keywords.filter(k => k.trim() !== "");
    if (validKeywords.length === 0) {
      showToast("No Keywords", "Please add at least one keyword", "error");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/keyword_tracker/track_keywords`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: 'include',
        body: JSON.stringify({
          tracked_product_id: selectedProduct.id,
          keywords: validKeywords,
          user_email: userEmail,
        }),
      });

      if (!response.ok) throw new Error("Failed to track keywords");

      showToast("Keywords Tracked!", `${validKeywords.length} keywords added for tracking`, "success");
      await fetchRankHistory(selectedProduct.id);
    } catch (error: any) {
      console.error("Track keywords error:", error);
      showToast("Tracking Failed", error.message, "error");
    }
  };

  // 4️⃣ Fetch rank history for a product
  const fetchRankHistory = async (productId: number) => {
    setLoadingRanks(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/keyword_tracker/rank_history/${productId}`,
        {
          credentials: 'include',
        }
      );
      if (!response.ok) throw new Error("Failed to fetch rank history");
      const data = await response.json();
      setRankHistory(data);
    } catch (error: any) {
      console.error("Fetch rank history error:", error);
      showToast("Failed to Load History", error.message, "error");
    } finally {
      setLoadingRanks(false);
    }
  };

  // 5️⃣ Update daily ranks
  const handleUpdateRanks = async () => {
    if (!userEmail) {
      showToast("Login Required", "Please login to update ranks", "error");
      return;
    }

    setUpdatingRanks(true);
    try {
      const response = await fetch(`${API_BASE_URL}/keyword_tracker/update_daily_ranks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: 'include',
        body: JSON.stringify({
          user_email: userEmail,
        }),
      });

      if (!response.ok) throw new Error("Failed to update ranks");

      showToast("Ranks Updated!", "All keyword ranks have been refreshed", "success");
      if (selectedProduct) {
        await fetchRankHistory(selectedProduct.id);
      }
    } catch (error: any) {
      console.error("Update ranks error:", error);
      showToast("Update Failed", error.message, "error");
    } finally {
      setUpdatingRanks(false);
    }
  };

  // 6️⃣ Get AI Analysis
  const handleGetAIAnalysis = async () => {
    if (!selectedProduct) {
      showToast("No Product Selected", "Please select a product first", "error");
      return;
    }

    setLoadingAI(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/keyword_tracker/ai_analysis/${selectedProduct.id}`,
        {
          credentials: 'include',
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to get AI analysis");
      }

      const data = await response.json();
      setAiAnalysis(data);
      showToast("AI Analysis Complete!", "Your keyword insights are ready", "success");
    } catch (error: any) {
      console.error("AI analysis error:", error);
      showToast("Analysis Failed", error.message, "error");
    } finally {
      setLoadingAI(false);
    }
  };

  // Auto-load rank history when product is selected
  useEffect(() => {
    if (selectedProduct) {
      fetchRankHistory(selectedProduct.id);
      setAiAnalysis(null);
    }
  }, [selectedProduct]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FBFF] via-[#ECF5FF] to-[#E0F2FE] overflow-x-hidden">
      {/* ✅ Upgrade Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-4">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Product Tracking Limit Reached</h3>
              <p className="text-slate-600 mb-4">
                You've used all <span className="font-bold text-red-600">{usageLimits?.limit}</span> product trackings this month on the <span className="font-semibold">{usageLimits?.subscription_tier.toUpperCase()}</span> plan.
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
          <div
            key={t.id}
            className={`flex items-start gap-3 p-4 rounded-lg shadow-lg border-2 backdrop-blur-md animate-in slide-in-from-right ${
              t.variant === "success" ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300"
            }`}
          >
            {t.variant === "success" ? (
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
            ) : (
              <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
            )}
            <div className="flex-1 min-w-0">
              <p className={`font-semibold text-sm ${t.variant === "success" ? "text-green-900" : "text-red-900"}`}>
                {t.title}
              </p>
              <p className={`text-sm mt-1 ${t.variant === "success" ? "text-green-700" : "text-red-700"}`}>
                {t.description}
              </p>
            </div>
            <button
              onClick={() => removeToast(t.id)}
              className={`${t.variant === "success" ? "text-green-600 hover:text-green-800" : "text-red-600 hover:text-red-800"}`}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white/90 rounded-xl shadow-md"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <Menu className="w-6 h-6 text-slate-700" />
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-40">
        <Sidebar />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
          <aside className="fixed inset-y-0 left-0 w-64 bg-white z-50 lg:hidden shadow-2xl transform transition-transform duration-300">
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <Sidebar />
          </aside>
        </>
      )}

      {/* MAIN CONTENT */}
      <div className="lg:ml-64 transition-all min-h-screen">
        {/* Header */}
        <header className="bg-white/70 backdrop-blur-md border-b border-slate-200 px-6 py-4 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <Target className="h-8 w-8 text-purple-600" />
            <div>
              <h2 className="text-2xl font-semibold text-slate-800">Keyword Rank Tracker</h2>
              <p className="text-sm text-slate-500">Monitor your Amazon product rankings for specific keywords</p>
            </div>
          </div>
        </header>

        <div className="p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Title Section */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-red-400 text-transparent bg-clip-text">
                Track Your Keyword Rankings
              </h1>
              <p className="text-slate-500 text-lg">
                Monitor how your products rank for important search keywords on Amazon
              </p>
              
              {isLoading ? (
                <p className="text-sm text-gray-500 font-medium">Checking session...</p>
              ) : userEmail ? (
                <div className="space-y-2">
                  <p className="text-sm text-green-600 font-medium">
                    ✓ Logged in as: {userEmail} (Product tracking will be saved)
                  </p>
                  
                  {/* ✅ Usage Stats Card */}
                  {usageLimits && (
                    <div className="bg-white rounded-xl p-4 max-w-md mx-auto border border-slate-200 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-slate-600 font-medium">Products Tracked This Month</p>
                        <Badge className="bg-purple-100 text-purple-800">
                          {usageLimits.subscription_tier.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex-1 bg-slate-200 rounded-full h-3 mr-3">
                          <div 
                            className={`h-3 rounded-full transition-all ${
                              !canTrack ? 'bg-red-500' : 'bg-gradient-to-r from-purple-500 to-pink-500'
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
                      
                      {!canTrack && usageLimits.limit !== Infinity && (
                        <Alert className="border-red-300 bg-red-50 mt-3">
                          <AlertCircle className="h-4 w-4 text-red-600" />
                          <AlertDescription className="text-xs text-red-700">
                            Limit reached! <a href="/subscription" className="underline font-semibold">Upgrade</a> for more product trackings.
                          </AlertDescription>
                        </Alert>
                      )}
                      
                      {canTrack && usageLimits.remaining !== Infinity && usageLimits.remaining <= 2 && (
                        <p className="text-xs text-orange-600 font-medium mt-2">
                          ⚠️ Only {usageLimits.remaining} product trackings remaining
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-sm text-orange-600 font-medium">
                  ⚠️ Not logged in - Please login to track products and keywords
                </p>
              )}
            </div>

            {/* Step 1: Fetch Products */}
            <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/80">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
                  <Package className="h-5 w-5 text-blue-600" />
                  Step 1: Fetch Your Products
                </CardTitle>
                <CardDescription className="text-slate-500">
                  Enter your Amazon Seller ID to load your products with reviews
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="seller-id">Seller ID</Label>
                    <Input
                      id="seller-id"
                      value={sellerId}
                      onChange={e => setSellerId(e.target.value)}
                      placeholder="e.g., A02211013Q5HP3OMSZC7W"
                      disabled={!userEmail || (!!userId && !canTrack)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <select
                      id="country"
                      value={country}
                      onChange={e => setCountry(e.target.value)}
                      className="w-full h-10 px-3 rounded-md border border-slate-300 bg-white"
                      disabled={!userEmail || (!!userId && !canTrack)}
                    >
                      <option value="US">United States</option>
                      <option value="IN">India</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="page">Page</Label>
                    <Input
                      id="page"
                      type="number"
                      value={page}
                      onChange={e => setPage(parseInt(e.target.value) || 1)}
                      placeholder="1"
                      min="1"
                      disabled={!userEmail || (!!userId && !canTrack)}
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleFetchProducts} 
                  disabled={loading || !userEmail || (!!userId && !canTrack)}
                  className={`w-full ${
                    userId && !canTrack
                      ? 'bg-slate-300 cursor-not-allowed'
                      : 'bg-blue-500 hover:bg-blue-600'
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Fetching Products & Reviews...
                    </>
                  ) : userId && !canTrack ? (
                    <>
                      <Lock className="h-4 w-4 mr-2" />
                      Limit Reached
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4 mr-2" />
                      Fetch Products & Reviews
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Products List */}
            {products.length > 0 && (
              <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/80">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
                    <Package className="h-5 w-5 text-green-600" />
                    Your Products ({products.length})
                  </CardTitle>
                  <CardDescription className="text-slate-500">
                    Click on a product to view reviews and start tracking keywords
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map(product => (
                      <div
                        key={product.id}
                        onClick={() => setSelectedProduct(product)}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedProduct?.id === product.id
                            ? "border-purple-500 bg-purple-50"
                            : "border-slate-200 bg-white hover:border-purple-300"
                        }`}
                      >
                        <div className="flex gap-3">
                          {product.product_photo && (
                            <img
                              src={product.product_photo}
                              alt={product.product_title}
                              className="w-16 h-16 object-cover rounded"
                            />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-slate-900 truncate">{product.product_title}</p>
                            <p className="text-xs text-slate-500 mt-1">ASIN: {product.asin}</p>
                            <div className="flex gap-2 mt-2 flex-wrap">
                              <Badge variant="outline" className="text-xs">
                                {product.country}
                              </Badge>
                              {product.review_comments && product.review_comments.length > 0 && (
                                <Badge className="text-xs bg-blue-100 text-blue-800 flex items-center gap-1">
                                  <MessageSquare className="h-3 w-3" />
                                  {product.review_comments.length} reviews
                                </Badge>
                              )}
                              {product.review_ratings && product.review_ratings.length > 0 && (
                                <Badge className="text-xs bg-yellow-100 text-yellow-800 flex items-center gap-1">
                                  <Star className="h-3 w-3 fill-yellow-500" />
                                  {calculateAverageRating(product.review_ratings).toFixed(1)}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Customer Reviews Section */}
            {selectedProduct && selectedProduct.review_comments && selectedProduct.review_comments.length > 0 && (
              <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-white to-blue-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-blue-600" />
                        Customer Reviews Analysis
                      </CardTitle>
                      <CardDescription className="text-slate-600 mt-2">
                        <span className="font-semibold">The Problem:</span> Thousands of reviews hide insights you don't have time to read.
                      </CardDescription>
                      <CardDescription className="text-slate-600">
                        <span className="font-semibold">How This Helps:</span> Analyze reviews at scale to uncover pain points, feature gaps, and improvement opportunities.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Review Statistics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Total Reviews */}
                    <div className="bg-white p-4 rounded-xl border-2 border-blue-200 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <MessageSquare className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">Total Reviews</p>
                          <p className="text-2xl font-bold text-blue-600">
                            {selectedProduct.review_comments.length}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Average Rating */}
                    <div className="bg-white p-4 rounded-xl border-2 border-yellow-200 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="bg-yellow-100 p-3 rounded-lg">
                          <Star className="h-6 w-6 text-yellow-600 fill-yellow-600" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">Average Rating</p>
                          <p className="text-2xl font-bold text-yellow-600">
                            {calculateAverageRating(selectedProduct.review_ratings).toFixed(1)} ⭐
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Positive Reviews */}
                    <div className="bg-white p-4 rounded-xl border-2 border-green-200 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-3 rounded-lg">
                          <ThumbsUp className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">Positive Reviews</p>
                          <p className="text-2xl font-bold text-green-600">
                            {selectedProduct.review_ratings.filter(r => r >= 4).length}
                          </p>
                          <p className="text-xs text-slate-500">
                            ({((selectedProduct.review_ratings.filter(r => r >= 4).length / selectedProduct.review_ratings.length) * 100).toFixed(0)}%)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rating Distribution */}
                  <div className="bg-white p-6 rounded-xl border-2 border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">Rating Distribution</h3>
                    {(() => {
                      const distribution = getRatingDistribution(selectedProduct.review_ratings);
                      const total = selectedProduct.review_ratings.length;
                      return (
                        <div className="space-y-3">
                          {[5, 4, 3, 2, 1].map(rating => {
                            const count = distribution[rating as keyof typeof distribution];
                            const percentage = total > 0 ? (count / total) * 100 : 0;
                            return (
                              <div key={rating} className="flex items-center gap-3">
                                <div className="flex items-center gap-1 w-16">
                                  <span className="text-sm font-semibold text-slate-700">{rating}</span>
                                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                </div>
                                <div className="flex-1 bg-slate-200 rounded-full h-3 overflow-hidden">
                                  <div
                                    className={`h-full rounded-full transition-all ${
                                      rating === 5 ? "bg-green-500" :
                                      rating === 4 ? "bg-lime-500" :
                                      rating === 3 ? "bg-yellow-500" :
                                      rating === 2 ? "bg-orange-500" :
                                      "bg-red-500"
                                    }`}
                                    style={{ width: `${percentage}%` }}
                                  />
                                </div>
                                <span className="text-sm text-slate-600 w-12 text-right">
                                  {count}
                                </span>
                                <span className="text-xs text-slate-500 w-12 text-right">
                                  ({percentage.toFixed(0)}%)
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })()}
                  </div>

                  {/* Individual Reviews */}
                  <div className="bg-white p-6 rounded-xl border-2 border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">Recent Reviews</h3>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {selectedProduct.review_comments.slice(0, 5).map((comment, index) => {
                        const rating = selectedProduct.review_ratings[index];
                        return (
                          <div
                            key={index}
                            className="p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border border-slate-200"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < rating
                                        ? "text-yellow-500 fill-yellow-500"
                                        : "text-slate-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <Badge
                                className={`text-xs ${
                                  rating === 5 ? "bg-green-100 text-green-800" :
                                  rating === 4 ? "bg-lime-100 text-lime-800" :
                                  rating === 3 ? "bg-yellow-100 text-yellow-800" :
                                  rating === 2 ? "bg-orange-100 text-orange-800" :
                                  "bg-red-100 text-red-800"
                                }`}
                              >
                                {rating} Star{rating !== 1 ? 's' : ''}
                              </Badge>
                            </div>
                            <p className="text-slate-700 leading-relaxed">{comment}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Add Keywords */}
            {selectedProduct && (
              <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/80">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
                    <Search className="h-5 w-5 text-purple-600" />
                    Step 2: Track Keywords for "{selectedProduct.product_title}"
                  </CardTitle>
                  <CardDescription className="text-slate-500">
                    Add keywords you want to track rankings for
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      value={keywordInput}
                      onChange={e => setKeywordInput(e.target.value)}
                      placeholder="e.g., wireless headphones"
                      onKeyPress={e => e.key === "Enter" && handleAddKeyword()}
                      disabled={!userEmail}
                    />
                    <Button 
                      onClick={handleAddKeyword} 
                      className="bg-purple-500 hover:bg-purple-600"
                      disabled={!userEmail}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {keywords.filter(k => k.trim()).length > 0 && (
                    <div className="space-y-2">
                      <Label>Keywords to Track:</Label>
                      <div className="flex flex-wrap gap-2">
                        {keywords
                          .filter(k => k.trim())
                          .map((keyword, index) => (
                            <Badge key={index} className="bg-purple-100 text-purple-800 border-purple-300 flex items-center gap-2">
                              {keyword}
                              <button onClick={() => handleRemoveKeyword(index)} className="hover:text-purple-900">
                                <X className="h-3 w-3" />
                              </button>
                            </Badge>
                          ))}
                      </div>
                    </div>
                  )}

                  <Button 
                    onClick={handleTrackKeywords} 
                    className="w-full bg-purple-500 hover:bg-purple-600"
                    disabled={!userEmail}
                  >
                    <Target className="h-4 w-4 mr-2" />
                    Start Tracking Keywords
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Rank History */}
            {selectedProduct && (
              <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/80">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-orange-600" />
                      Keyword Rank History
                    </CardTitle>
                    <Button
                      onClick={handleUpdateRanks}
                      disabled={updatingRanks || !userEmail}
                      size="sm"
                      className="bg-orange-500 hover:bg-orange-600"
                    >
                      {updatingRanks ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin mr-2" />
                          Updating...
                        </>
                      ) : (
                        <>
                          <RefreshCw className="h-4 w-4 mr-2" />
                          Update Ranks
                        </>
                      )}
                    </Button>
                  </div>
                  <CardDescription className="text-slate-500">
                    View current rankings for tracked keywords
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {loadingRanks ? (
                    <div className="flex justify-center py-8">
                      <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
                    </div>
                  ) : rankHistory.length === 0 ? (
                    <Alert className="border-blue-300 bg-blue-50">
                      <AlertDescription className="text-blue-700">
                        No rank data yet. Add keywords and update ranks to start tracking!
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <div className="space-y-3">
                      {rankHistory.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-purple-50 rounded-lg border border-slate-200"
                        >
                          <div className="flex-1">
                            <p className="font-semibold text-slate-900">{item.keyword}</p>
                            <div className="flex items-center gap-3 mt-1">
                              <p className="text-xs text-slate-500 flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {new Date(item.checked_at).toLocaleString()}
                              </p>
                              <Badge className="text-xs bg-blue-100 text-blue-800">
                                {item.user_email}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div
                              className={`text-2xl font-bold ${
                                item.rank === null || item.rank === 0
                                  ? "text-slate-400"
                                  : item.rank <= 10
                                  ? "text-green-600"
                                  : item.rank <= 50
                                  ? "text-yellow-600"
                                  : "text-red-600"
                              }`}
                            >
                              {item.rank === null || item.rank === 0 ? "—" : `#${item.rank}`}
                            </div>
                            <p className="text-xs text-slate-500">
                              {item.rank === null || item.rank === 0 ? "Pending" : "Rank"}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* AI Analysis Section - Simple Text Format */}
{selectedProduct && rankHistory.length > 0 && (
  <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-blue-50 to-purple-50">
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-lg font-semibold text-slate-700 flex items-center gap-2">
          <svg
            className="h-6 w-6 text-purple-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          AI-Powered Strategic Insights
        </CardTitle>
        <Button
          onClick={handleGetAIAnalysis}
          disabled={loadingAI || !userEmail}
          size="sm"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
        >
          {loadingAI ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
              Analyzing...
            </>
          ) : (
            <>
              <svg
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Get AI Analysis
            </>
          )}
        </Button>
      </div>
      <CardDescription className="text-slate-600">
        AI-powered insights powered by Mistral analyzing your keyword performance
      </CardDescription>
    </CardHeader>
    <CardContent>
      {loadingAI ? (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="h-12 w-12 animate-spin text-purple-500 mb-4" />
          <p className="text-slate-600 text-sm">AI is analyzing your keyword data...</p>
          <p className="text-slate-400 text-xs mt-2">This may take 20-30 seconds</p>
        </div>
      ) : aiAnalysis ? (
        <div className="space-y-6">
          {/* Header with product info */}
          <div className="bg-white rounded-xl p-4 border-2 border-purple-200">
            <h3 className="font-bold text-lg text-slate-800">{aiAnalysis.product_title}</h3>
            <p className="text-sm text-slate-600">ASIN: {aiAnalysis.asin}</p>
            <p className="text-sm text-slate-600">Total Keywords Tracked: {aiAnalysis.total_keywords}</p>
          </div>

          {/* Why Rankings Changed */}
          <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
            <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Why Rankings Changed
            </h4>
            <div className="text-slate-700 leading-relaxed whitespace-pre-line">
              {typeof aiAnalysis.analysis.why_changed === 'string' 
                ? aiAnalysis.analysis.why_changed 
                : JSON.stringify(aiAnalysis.analysis.why_changed, null, 2)}
            </div>
          </div>

          {/* What to Do */}
          <div className="bg-white rounded-xl p-6 border-2 border-green-200">
            <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Immediate Action Steps
            </h4>
            <div className="text-slate-700 leading-relaxed whitespace-pre-line">
              {typeof aiAnalysis.analysis.what_to_do === 'string' 
                ? aiAnalysis.analysis.what_to_do 
                : Array.isArray(aiAnalysis.analysis.what_to_do)
                ? (aiAnalysis.analysis.what_to_do as any[]).map((item: any, idx: number) => {
                    if (typeof item === 'object') {
                      return `${idx + 1}. ${Object.entries(item).map(([k, v]) => `${k}: ${v}`).join(' - ')}`;
                    }
                    return `${idx + 1}. ${item}`;
                  }).join('\n\n')
                : typeof aiAnalysis.analysis.what_to_do === 'object' && aiAnalysis.analysis.what_to_do !== null
                ? Object.entries(aiAnalysis.analysis.what_to_do as Record<string, any>).map(([key, value]: [string, any]) => {
                    return `• ${key}: ${value}`;
                  }).join('\n\n')
                : String(aiAnalysis.analysis.what_to_do)}
            </div>
          </div>

          {/* Which Keywords Matter */}
          <div className="bg-white rounded-xl p-6 border-2 border-yellow-200">
            <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <Target className="h-5 w-5 text-yellow-600" />
              Priority Keywords
            </h4>
            <div className="text-slate-700 leading-relaxed whitespace-pre-line">
              {typeof aiAnalysis.analysis.which_keywords_matter === 'string' 
                ? aiAnalysis.analysis.which_keywords_matter 
                : Array.isArray(aiAnalysis.analysis.which_keywords_matter)
                ? (aiAnalysis.analysis.which_keywords_matter as any[]).map((item: any, idx: number) => {
                    if (typeof item === 'object') {
                      return `${idx + 1}. ${Object.entries(item).map(([k, v]) => `${k}: ${v}`).join(' - ')}`;
                    }
                    return `${idx + 1}. ${item}`;
                  }).join('\n\n')
                : typeof aiAnalysis.analysis.which_keywords_matter === 'object' && aiAnalysis.analysis.which_keywords_matter !== null
                ? Object.entries(aiAnalysis.analysis.which_keywords_matter as Record<string, any>).map(([key, value]: [string, any]) => {
                    return `• ${key}: ${value}`;
                  }).join('\n\n')
                : String(aiAnalysis.analysis.which_keywords_matter)}
            </div>
          </div>

          {/* Future Prediction */}
          <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
            <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <Clock className="h-5 w-5 text-purple-600" />
              30-Day Forecast
            </h4>
            <div className="text-slate-700 leading-relaxed whitespace-pre-line">
              {typeof aiAnalysis.analysis.future_prediction === 'string' 
                ? aiAnalysis.analysis.future_prediction 
                : JSON.stringify(aiAnalysis.analysis.future_prediction, null, 2)}
            </div>
          </div>

          {/* Product Optimization */}
          <div className="bg-white rounded-xl p-6 border-2 border-orange-200">
            <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <Package className="h-5 w-5 text-orange-600" />
              Listing Optimization
            </h4>
            <div className="text-slate-700 leading-relaxed whitespace-pre-line">
              {typeof aiAnalysis.analysis.product_optimization === 'string' 
                ? aiAnalysis.analysis.product_optimization 
                : Array.isArray(aiAnalysis.analysis.product_optimization)
                ? (aiAnalysis.analysis.product_optimization as any[]).map((item: any, idx: number) => {
                    if (typeof item === 'object') {
                      return `${idx + 1}. ${Object.entries(item).map(([k, v]) => `${k}: ${v}`).join(' - ')}`;
                    }
                    return `${idx + 1}. ${item}`;
                  }).join('\n\n')
                : typeof aiAnalysis.analysis.product_optimization === 'object' && aiAnalysis.analysis.product_optimization !== null
                ? Object.entries(aiAnalysis.analysis.product_optimization as Record<string, any>).map(([key, value]: [string, any]) => {
                    return `• ${key}: ${value}`;
                  }).join('\n\n')
                : String(aiAnalysis.analysis.product_optimization)}
            </div>
          </div>

          {/* Strategic Roadmap */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300">
            <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-purple-600" />
              30-60-90 Day Roadmap
            </h4>
            <div className="text-slate-700 leading-relaxed whitespace-pre-line">
              {typeof aiAnalysis.analysis.roadmap === 'string' 
                ? aiAnalysis.analysis.roadmap 
                : Array.isArray(aiAnalysis.analysis.roadmap)
                ? (aiAnalysis.analysis.roadmap as any[]).map((item: any, idx: number) => {
                    if (typeof item === 'object') {
                      return `${idx + 1}. ${Object.entries(item).map(([k, v]) => `${k}: ${v}`).join(' - ')}`;
                    }
                    return `${idx + 1}. ${item}`;
                  }).join('\n\n')
                : typeof aiAnalysis.analysis.roadmap === 'object' && aiAnalysis.analysis.roadmap !== null
                ? Object.entries(aiAnalysis.analysis.roadmap as Record<string, any>).map(([key, value]: [string, any]) => {
                    return `• ${key}: ${value}`;
                  }).join('\n\n')
                : String(aiAnalysis.analysis.roadmap)}
            </div>
          </div>
        </div>
      ) : (
        <Alert className="border-purple-300 bg-purple-50">
          <AlertDescription className="text-purple-700 flex items-center gap-2">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Click "Get AI Analysis" to receive AI-powered insights about your keyword rankings and optimization strategies.
          </AlertDescription>
        </Alert>
      )}
    </CardContent>
  </Card>
)}
          </div>
        </div>
      </div>
    </div>
  );
}