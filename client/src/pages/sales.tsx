 
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "@/components/layout/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, IndianRupee, ArrowUpDown } from "lucide-react";
 
// ✅ Unified interface for both Flipkart & Amazon
interface TrendingProduct {
  id?: number;
  title?: string;             // Flipkart
  product_title?: string;      // Amazon
  category?: string;          // Flipkart
  category_name?: string;     // Amazon
  price?: number;             // Flipkart
  avg_price?: number;         // Amazon
  rating?: number;            // Flipkart
  avg_rating?: number;        // Amazon
  reviews?: number;           // Flipkart
  total_reviews?: number;     // Amazon
  total_ratings?: number;     // Amazon
  source?: string;
  product_price?: string;     // Amazon formatted price
}
 
export default function Sales() {
  const [products, setProducts] = useState<TrendingProduct[]>([]);
  const [source, setSource] = useState<"flipkart" | "amazon">("flipkart");
  const [sortField, setSortField] = useState<"reviews" | "price" | "rating">("reviews");
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
 
  useEffect(() => {
    fetchData();
  }, [source]);
 
  const fetchData = () => {
    setLoading(true);
    const url =
      source === "flipkart"
        ? "http://122.176.108.253:9001/top?table=flipkart&n=500"
        : "http://122.176.108.253:9001/rapidapi/top-sales?limit=500";
 
    axios
      .get(url)
      .then((res) => {
        const data = res.data.data || res.data;
        setProducts(Array.isArray(data) ? data : []);
      })
      .catch(() => setError("Failed to fetch top products"))
      .finally(() => setLoading(false));
  };
 
  // --- Sorting Logic ---
  const getFieldValue = (p: TrendingProduct, field: string) => {
    switch (field) {
      case "reviews":
        return p.reviews ?? p.total_reviews ?? p.total_ratings ?? 0;
      case "price":
        return p.price ?? p.avg_price ?? 0;
      case "rating":
        return p.rating ?? p.avg_rating ?? 0;
      default:
        return 0;
    }
  };
 
  const sortedProducts = [...products].sort((a, b) => {
    const factor = sortOrder === "asc" ? 1 : -1;
    return (getFieldValue(a, sortField) - getFieldValue(b, sortField)) * factor;
  });
 
  // --- Pagination Logic ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
 
  const toggleSort = (field: "reviews" | "price" | "rating") => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("desc");
    }
  };
 
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
 
  if (loading)
    return (
      <div className="flex h-screen items-center justify-center text-slate-400">
        Loading {source} top product data...
      </div>
    );
 
  if (error)
    return (
      <div className="flex h-screen items-center justify-center text-red-500">
        {error}
      </div>
    );
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FBFF] via-[#ECF5FF] to-[#E0F2FE]">
      <Sidebar />
 
      <div className="ml-64 min-h-screen transition-all">
        {/* Header */}
        <header className="bg-white/70 backdrop-blur-md border-b border-slate-200 px-6 py-4 sticky top-0 z-10 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-800">Top Products</h2>
            <p className="text-sm text-slate-500">
              Showing {source.charAt(0).toUpperCase() + source.slice(1)} Data
            </p>
          </div>
 
          {/* Source Dropdown */}
          <select
            value={source}
            onChange={(e) => setSource(e.target.value as "flipkart" | "amazon")}
            className="border border-slate-300 bg-white px-3 py-2 rounded-md text-slate-700 font-medium shadow-sm hover:bg-slate-50"
          >
            <option value="flipkart">Flipkart</option>
            <option value="amazon">Amazon</option>
          </select>
        </header>
 
        {/* Main Content */}
        <div className="p-6">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Title */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">
                Product Performance Overview ({source})
              </h1>
              <p className="text-slate-500 text-lg">
                Analyze and sort by reviews, price, or rating for data-driven decisions.
              </p>
            </div>
 
            {/* Sort Buttons */}
            <div className="flex justify-end gap-3">
              {["reviews", "price", "rating"].map((field) => (
                <Button
                  key={field}
                  variant={sortField === field ? "default" : "outline"}
                  className={`flex items-center gap-2 ${
                    sortField === field
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "text-slate-700 border-slate-300 hover:bg-slate-100"
                  }`}
                  onClick={() => toggleSort(field as "reviews" | "price" | "rating")}
                >
                  <ArrowUpDown className="w-4 h-4" />
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                  {sortField === field ? ` (${sortOrder === "asc" ? "↑" : "↓"})` : ""}
                </Button>
              ))}
            </div>
 
            {/* Product Table */}
            <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/80">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-700">
                  Showing Page {currentPage} of {totalPages} — Sorted by{" "}
                  {sortField.charAt(0).toUpperCase() + sortField.slice(1)}{" "}
                  ({sortOrder === "asc" ? "Low → High" : "High → Low"})
                </CardTitle>
              </CardHeader>
 
              <CardContent className="overflow-x-auto">
                <table className="w-full text-sm text-slate-700">
                  <thead className="bg-slate-100 text-slate-700 uppercase text-xs font-semibold">
                    <tr>
                      <th className="py-3 px-4 text-left">#</th>
                      <th className="py-3 px-4 text-left">Product</th>
                      <th className="py-3 px-4 text-left">Category</th>
                      <th className="py-3 px-4 text-right">Price (₹)</th>
                      <th className="py-3 px-4 text-right">Rating</th>
                      <th className="py-3 px-4 text-right">Reviews</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentProducts.map((p, i) => (
                      <tr
                        key={i}
                        className="border-b border-slate-200 hover:bg-gradient-to-r hover:from-[#E0F2FE] hover:to-[#F0F9FF] transition-colors"
                      >
                        <td className="py-3 px-4 font-medium text-slate-600">
                          {(currentPage - 1) * itemsPerPage + i + 1}
                        </td>
                        <td className="py-3 px-4 font-medium text-slate-800 truncate max-w-xs">
                          {p.title || p.product_title}
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          {p.category || p.category_name || source}
                        </td>
                        <td className="py-3 px-4 text-right text-emerald-600 font-semibold">
                          <IndianRupee className="inline w-4 h-4" />
                          {(p.price ?? p.avg_price ?? 0).toFixed(2)}
                        </td>
                        <td className="py-3 px-4 text-right text-yellow-500 font-medium">
                          <Star className="inline w-4 h-4 mr-1" />
                          {(p.rating ?? p.avg_rating ?? 0).toFixed(1)}
                        </td>
                        <td className="py-3 px-4 text-right text-blue-600 font-semibold">
                          {(p.reviews ?? p.total_reviews ?? p.total_ratings ?? 0).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
 
            {/* Pagination */}
            <div className="flex justify-center items-center gap-3 mt-6">
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
              >
                Previous
              </Button>
              <span className="text-slate-600 font-medium">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
 