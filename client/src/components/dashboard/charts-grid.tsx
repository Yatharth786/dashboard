
// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Skeleton } from "@/components/ui/skeleton";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar, Doughnut } from "react-chartjs-2";
// import { useAISummary } from "@/hooks/useAISummary";

// ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// interface ChartCardProps {
//   title: string;
//   children: React.ReactNode;
//   isLoading?: boolean;
//   summary?: string;
//   summaryLoading?: boolean;
// }

// function ChartCard({ title, children, isLoading, summary, summaryLoading }: ChartCardProps) {
//   return (
//     <Card className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
//       <CardHeader className="flex flex-row items-center justify-between pb-4">
//         <CardTitle className="text-lg font-semibold">{title}</CardTitle>
//         <Badge variant="secondary" className="text-xs">
//           Live Data
//         </Badge>
//       </CardHeader>
//       <CardContent className="p-0">
//         <div className="chart-container relative h-80 w-full">
//           {isLoading ? <Skeleton className="w-full h-full" /> : children}
//         </div>
//         {summary && (
//           <div className="mt-3 text-sm text-muted-foreground">
//             {summaryLoading ? "Generating Smart summary..." : summary}
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   );
// }

// export default function ChartsGrid({ selectedSource }: { selectedSource: string }) {
//   const BASE_URL = "http://localhost:8000";

//   const [flipkartProducts, setFlipkartProducts] = useState<any[]>([]);
//   const [amazonProducts, setAmazonProducts] = useState<any[]>([]);
//   const [flipkartCategories, setFlipkartCategories] = useState<any[]>([]);
//   const [amazonCategories, setAmazonCategories] = useState<any[]>([]);
//   const [ratings, setRatings] = useState<any[]>([]);
//   const [sentiments, setSentiments] = useState<any[]>([]);
//   const [rapidApiProducts, setRapidApiProducts] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchAll = async () => {
//       setIsLoading(true);
//       try {
//         if (selectedSource === "both") {
//           const [
//             flipkartRes,
//             amazonRes,
//             flipkartCatRes,
//             amazonCatRes,
//             ratingsRes,
//             sentimentRes,
//             rapidApiRes,
//           ] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=flipkart&n=10`),
//             fetch(`${BASE_URL}/top?table=amazon_reviews&n=10`),
//             fetch(`${BASE_URL}/flipkart/categories`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/categories`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/ratings`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment`),
//             fetch(`${BASE_URL}/rapidapi/top-sales?limit=10`),
//           ]);

//           const [
//             flipkartJson,
//             amazonJson,
//             flipkartCatJson,
//             amazonCatJson,
//             ratingsJson,
//             sentimentJson,
//             rapidApiJson,
//           ] = await Promise.all([
//             flipkartRes.json(),
//             amazonRes.json(),
//             flipkartCatRes.json(),
//             amazonCatRes.json(),
//             ratingsRes.json(),
//             sentimentRes.json(),
//             rapidApiRes.json(),
//           ]);

//           setFlipkartProducts(flipkartJson.data || []);
//           setAmazonProducts(amazonJson.data || []);
//           setFlipkartCategories(flipkartCatJson || []);
//           setAmazonCategories(amazonCatJson || []);
//           setRatings(ratingsJson || []);
//           setSentiments(sentimentJson || []);
//           setRapidApiProducts(rapidApiJson.data || []);
//         } else if (selectedSource === "amazon_reviews") {
//           const [productsRes, categoriesRes, ratingsRes, sentimentRes, rapidApiRes] =
//             await Promise.all([
//               fetch(`${BASE_URL}/top?table=amazon_reviews&n=10`),
//               fetch(`${BASE_URL}/rapidapi_amazon_products/categories`),
//               fetch(`${BASE_URL}/rapidapi_amazon_products/ratings`),
//               fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment`),
//               fetch(`${BASE_URL}/rapidapi/top-sales?limit=10`),
//             ]);

//           const [productsJson, categoriesJson, ratingsJson, sentimentJson, rapidApiJson] =
//             await Promise.all([
//               productsRes.json(),
//               categoriesRes.json(),
//               ratingsRes.json(),
//               sentimentRes.json(),
//               rapidApiRes.json(),
//             ]);

//           setFlipkartProducts([]);
//           setAmazonProducts(productsJson.data || []);
//           setFlipkartCategories([]);
//           setAmazonCategories(categoriesJson || []);
//           setRatings(ratingsJson || []);
//           setSentiments(sentimentJson || []);
//           setRapidApiProducts(rapidApiJson.data || []);
//         } else {
//           const [productsRes, categoryRes] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=flipkart&n=10`),
//             fetch(`${BASE_URL}/flipkart/categories`),
//           ]);

//           const [productsJson, categoryJson] = await Promise.all([
//             productsRes.json(),
//             categoryRes.json(),
//           ]);

//           setFlipkartProducts(productsJson.data || []);
//           setAmazonProducts([]);
//           setFlipkartCategories(categoryJson || []);
//           setAmazonCategories([]);
//           setRatings([]);
//           setSentiments([]);
//           setRapidApiProducts([]);
//         }
//       } catch (error) {
//         console.error("Error fetching chart data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchAll();
//   }, [selectedSource]);

//   const commonOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: { legend: { display: true, position: "bottom" as const } },
//   };

//   const truncateName = (name: string) => {
//     const cleaned = name.replace(/"/g, "");
//     return cleaned.substring(0, 30) + (cleaned.length > 30 ? "..." : "");
//   };

//   // 🔹 Flipkart Charts
//   const flipkartProductsChart = {
//     labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
//     datasets: [
//       {
//         label: "Flipkart Rating",
//         data: flipkartProducts.map((p) => p.rating || 0),
//         backgroundColor: "hsl(142,76%,36%)",
//       },
//     ],
//   };

//   const flipkartReviewsChart = {
//     labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
//     datasets: [
//       {
//         label: "Flipkart Reviews",
//         data: flipkartProducts.map((p) => p.reviews || 0),
//         backgroundColor: "hsl(221,83%,53%)",
//       },
//     ],
//   };

//   const flipkartCategoriesChart = {
//     labels: flipkartCategories.map((c) => c.category || "Unknown"),
//     datasets: [
//       {
//         label: "Flipkart Products",
//         data: flipkartCategories.map((c) => c.count || 0),
//         backgroundColor: "hsl(142,76%,36%)",
//       },
//     ],
//   };

//   // 🔹 Amazon Charts
//   const amazonCategoriesChart = {
//     labels: amazonCategories.map((c) => c.category || c.category_name || "Unknown"),
//     datasets: [
//       {
//         label: "Amazon Products",
//         data: amazonCategories.map((c) => c.count || c.product_count || 0),
//         borderRadius: 8,
//         backgroundColor: (context: any) => {
//           const chart = context.chart;
//           const { ctx, chartArea } = chart;
//           if (!chartArea) return "rgba(245, 158, 11, 0.7)";
//           const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
//           gradient.addColorStop(0, "rgba(253, 224, 71, 0.9)");
//           gradient.addColorStop(1, "rgba(202, 138, 4, 0.9)");
//           return gradient;
//         },
//       },
//     ],
//   };

//   const amazonCategoriesOptions = {
//     ...commonOptions,
//     scales: {
//       x: { ticks: { autoSkip: false, maxRotation: 45, minRotation: 0 } },
//       y: { beginAtZero: true, grace: "10%" },
//     },
//   };

//   // 🔹 Ratings & Sentiments
//   const ratingsChart = {
//     labels: ratings.map((r) => `${r.rating}★`),
//     datasets: [
//       {
//         label: "Number of Products",
//         data: ratings.map((r) => r.count || 0),
//         backgroundColor: "rgba(59,130,246,0.7)",
//       },
//       {
//         label: "Total User Ratings",
//         data: ratings.map((r) => r.total_user_ratings || 0),
//         backgroundColor: "rgba(96,165,250,0.5)",
//       },
//     ],
//   };

//   const sentimentsChart = {
//     labels: sentiments.map((s) => s.sentiment || "Unknown"),
//     datasets: [
//       {
//         label: "Sentiment Count",
//         data: sentiments.map((s) => s.count || 0),
//         backgroundColor: [
//           "rgba(34,197,94,0.9)",
//           "rgba(234,179,8,0.9)",
//           "rgba(239,68,68,0.9)",
//         ],
//         borderColor: "rgba(255,255,255,1)",
//         borderWidth: 2,
//         hoverOffset: 8,
//       },
//     ],
//   };

//   const sentimentsOptions = {
//     ...commonOptions,
//     cutout: "65%",
//     plugins: { ...commonOptions.plugins, tooltip: { enabled: true } },
//   };

//   // 🔹 RapidAPI Top Sales
//   const gradientBlue = (ctx: any) => {
//     const chart = ctx.chart;
//     const { ctx: canvasCtx, chartArea } = chart;
//     if (!chartArea) return "rgba(59,130,246,0.6)";
//     const gradient = canvasCtx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
//     gradient.addColorStop(0, "rgba(191,219,254,0.8)");
//     gradient.addColorStop(1, "rgba(59,130,246,0.9)");
//     return gradient;
//   };

//   const rapidApiSalesChart = {
//     labels: rapidApiProducts.map((p) => truncateName(p.product_title || "Unknown")),
//     datasets: [
//       {
//         label: "Daily Sales",
//         data: rapidApiProducts.map((p) => p.daily_sales || 0),
//         backgroundColor: gradientBlue,
//         borderRadius: 10,
//       },
//     ],
//   };

//   const rapidApiSalesOptions = {
//     ...commonOptions,
//     plugins: {
//       ...commonOptions.plugins,
//       tooltip: {
//         callbacks: {
//           label: (ctx: any) => {
//             const item = rapidApiProducts[ctx.dataIndex];
//             return [
//               `Daily Sales: ${item.daily_sales || 0}`,
//               `Category: ${item.category_name || "N/A"}`,
//               `Rating: ${item.product_star_rating || "N/A"}`,
//               `Variants: ${item.variant_count || 0}`,
//             ];
//           },
//         },
//       },
//     },
//   };

//   // 🔹 AI Summaries
//   const { summary: flipkartProductsSummary, loading: flipkartProductsLoading } =
//     useAISummary("Summarize Flipkart top products by rating", "flipkart", flipkartProducts, flipkartProducts.length);

//   const { summary: flipkartReviewsSummary, loading: flipkartReviewsLoading } =
//     useAISummary("Summarize Flipkart products with most reviews", "flipkart", flipkartProducts, flipkartProducts.length);

//   const { summary: flipkartCategoriesSummary, loading: flipkartCategoriesLoading } =
//     useAISummary("Summarize Flipkart category distribution", "flipkart", flipkartCategories, flipkartCategories.length);

//   const { summary: amazonCategoriesSummary, loading: amazonCategoriesLoading } =
//     useAISummary("Summarize Amazon category distribution", "rapidapi_amazon_products", amazonCategories, amazonCategories.length);

//   const { summary: ratingsSummary, loading: ratingsLoading } =
//     useAISummary("Summarize rating distribution", "rapidapi_amazon_products", ratings, ratings.length);

//   const { summary: sentimentsSummary, loading: sentimentsLoading } =
//     useAISummary("Summarize sentiment distribution", "rapidapi_amazon_products", sentiments, sentiments.length);

//   const { summary: rapidApiSalesSummary, loading: rapidApiSalesLoading } =
//     useAISummary("Summarize top selling products by daily sales volume from RapidAPI data", "rapidapi_amazon_products", rapidApiProducts, rapidApiProducts.length);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//       {flipkartProducts.length > 0 && (
//         <>
//           <ChartCard
//             title="Top Flipkart Products by Rating"
//             isLoading={isLoading}
//             summary={flipkartProductsSummary}
//             summaryLoading={flipkartProductsLoading}
//           >
//             <Bar data={flipkartProductsChart} options={commonOptions} />
//           </ChartCard>

//           <ChartCard
//             title="Flipkart Products with Most Reviews"
//             isLoading={isLoading}
//             summary={flipkartReviewsSummary}
//             summaryLoading={flipkartReviewsLoading}
//           >
//             <Bar data={flipkartReviewsChart} options={commonOptions} />
//           </ChartCard>

//           <ChartCard
//             title="Flipkart Categories Distribution"
//             isLoading={isLoading}
//             summary={flipkartCategoriesSummary}
//             summaryLoading={flipkartCategoriesLoading}
//           >
//             <Bar data={flipkartCategoriesChart} options={commonOptions} />
//           </ChartCard>
//         </>
//       )}

//       {amazonCategories.length > 0 && (
//         <ChartCard
//           title="Amazon Categories Distribution"
//           isLoading={isLoading}
//           summary={amazonCategoriesSummary}
//           summaryLoading={amazonCategoriesLoading}
//         >
//           <Bar data={amazonCategoriesChart} options={amazonCategoriesOptions} />
//         </ChartCard>
//       )}

//       {ratings.length > 0 && (
//         <ChartCard
//           title="Rating Distribution (Amazon)"
//           isLoading={isLoading}
//           summary={ratingsSummary}
//           summaryLoading={ratingsLoading}
//         >
//           <Bar data={ratingsChart} options={commonOptions} />
//         </ChartCard>
//       )}

//       {sentiments.length > 0 && (
//         <ChartCard
//           title="Sentiment Distribution (Amazon)"
//           isLoading={isLoading}
//           summary={sentimentsSummary}
//           summaryLoading={sentimentsLoading}
//         >
//           <Doughnut data={sentimentsChart} options={sentimentsOptions} />
//         </ChartCard>
//       )}

//       {rapidApiProducts.length > 0 && (
//         <ChartCard
//           title="Top Products by Daily Sales"
//           isLoading={isLoading}
//           summary={rapidApiSalesSummary}
//           summaryLoading={rapidApiSalesLoading}
//         >
//           <Bar data={rapidApiSalesChart} options={rapidApiSalesOptions} />
//         </ChartCard>
//       )}
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Skeleton } from "@/components/ui/skeleton";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar, Doughnut } from "react-chartjs-2";
// import { useFilters } from "@/components/dashboard/FiltersContext";

// ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// interface ChartCardProps {
//   title: string;
//   children: React.ReactNode;
//   isLoading?: boolean;
//   summary?: string;
// }

// function ChartCard({ title, children, isLoading, summary }: ChartCardProps) {
//   return (
//     <Card className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
//       <CardHeader className="flex flex-row items-center justify-between pb-4">
//         <CardTitle className="text-lg font-semibold">{title}</CardTitle>
//         <Badge variant="secondary" className="text-xs">
//           Live Data
//         </Badge>
//       </CardHeader>
//       <CardContent className="p-0">
//         <div className="chart-container relative h-80 w-full">
//           {isLoading ? <Skeleton className="w-full h-full" /> : children}
//         </div>
//         {summary && (
//           <div className="mt-3 text-sm text-muted-foreground">{summary}</div>
//         )}
//       </CardContent>
//     </Card>
//   );
// }

// export default function ChartsGrid({ selectedSource }: { selectedSource: string }) {
//   const BASE_URL = "http://localhost:8000";
//   const { filters } = useFilters(); // ✅ Get filters from context

//   const [flipkartProducts, setFlipkartProducts] = useState<any[]>([]);
//   const [amazonProducts, setAmazonProducts] = useState<any[]>([]);
//   const [flipkartCategories, setFlipkartCategories] = useState<any[]>([]);
//   const [amazonCategories, setAmazonCategories] = useState<any[]>([]);
//   const [ratings, setRatings] = useState<any[]>([]);
//   const [sentiments, setSentiments] = useState<any[]>([]);
//   const [rapidApiProducts, setRapidApiProducts] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   // ✅ Build query params from filters
//   const buildQueryParams = (table: string) => {
//     const params = new URLSearchParams();
    
//     // Category filter
//     if (filters.category && filters.category !== "All Categories") {
//       params.append("category", filters.category);
//     }
    
//     // Price range filter
//     if (filters.priceRange[0] > 0) {
//       params.append("min_price", filters.priceRange[0].toString());
//     }
//     if (filters.priceRange[1] < 5000000) {
//       params.append("max_price", filters.priceRange[1].toString());
//     }
    
//     // Rating filter
//     if (filters.rating > 0) {
//       params.append("min_rating", filters.rating.toString());
//     }
    
//     // Date range filter
//     if (filters.dateRange !== "all") {
//       params.append("date_range", filters.dateRange);
//     }
    
//     // Trending filter
//     if (filters.showTrendingOnly) {
//       params.append("trending_only", "true");
//     }
    
//     // Sort filter
//     if (filters.sortBy) {
//       params.append("sort_by", filters.sortBy);
//     }
    
//     return params.toString();
//   };

//   useEffect(() => {
//     const fetchAll = async () => {
//       setIsLoading(true);
//       try {
//         const table = filters.table || selectedSource;
//         const queryParams = buildQueryParams(table);
        
//         if (selectedSource === "both" || table === "both") {
//           const flipkartParams = buildQueryParams("flipkart");
//           const amazonParams = buildQueryParams("amazon_reviews");
          
//           const [
//             flipkartRes,
//             amazonRes,
//             flipkartCatRes,
//             amazonCatRes,
//             ratingsRes,
//             sentimentRes,
//             rapidApiRes,
//           ] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=flipkart&n=10&${flipkartParams}`),
//             fetch(`${BASE_URL}/top?table=amazon_reviews&n=10&${amazonParams}`),
//             fetch(`${BASE_URL}/flipkart/categories?${flipkartParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/categories?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/ratings?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi/top-sales?limit=10&${amazonParams}`),
//           ]);

//           const [
//             flipkartJson,
//             amazonJson,
//             flipkartCatJson,
//             amazonCatJson,
//             ratingsJson,
//             sentimentJson,
//             rapidApiJson,
//           ] = await Promise.all([
//             flipkartRes.json(),
//             amazonRes.json(),
//             flipkartCatRes.json(),
//             amazonCatRes.json(),
//             ratingsRes.json(),
//             sentimentRes.json(),
//             rapidApiRes.json(),
//           ]);

//           setFlipkartProducts(flipkartJson.data || []);
//           setAmazonProducts(amazonJson.data || []);
//           setFlipkartCategories(flipkartCatJson || []);
//           setAmazonCategories(amazonCatJson || []);
//           setRatings(ratingsJson || []);
//           setSentiments(sentimentJson || []);
//           setRapidApiProducts(rapidApiJson.data || []);
//         } else if (table === "amazon_reviews") {
//           const [productsRes, categoriesRes, ratingsRes, sentimentRes, rapidApiRes] =
//             await Promise.all([
//               fetch(`${BASE_URL}/top?table=amazon_reviews&n=10&${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi_amazon_products/categories?${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi_amazon_products/ratings?${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment?${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi/top-sales?limit=10&${queryParams}`),
//             ]);

//           const [productsJson, categoriesJson, ratingsJson, sentimentJson, rapidApiJson] =
//             await Promise.all([
//               productsRes.json(),
//               categoriesRes.json(),
//               ratingsRes.json(),
//               sentimentRes.json(),
//               rapidApiRes.json(),
//             ]);

//           setFlipkartProducts([]);
//           setAmazonProducts(productsJson.data || []);
//           setFlipkartCategories([]);
//           setAmazonCategories(categoriesJson || []);
//           setRatings(ratingsJson || []);
//           setSentiments(sentimentJson || []);
//           setRapidApiProducts(rapidApiJson.data || []);
//         } else {
//           const [productsRes, categoryRes] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=flipkart&n=10&${queryParams}`),
//             fetch(`${BASE_URL}/flipkart/categories?${queryParams}`),
//           ]);

//           const [productsJson, categoryJson] = await Promise.all([
//             productsRes.json(),
//             categoryRes.json(),
//           ]);

//           setFlipkartProducts(productsJson.data || []);
//           setAmazonProducts([]);
//           setFlipkartCategories(categoryJson || []);
//           setAmazonCategories([]);
//           setRatings([]);
//           setSentiments([]);
//           setRapidApiProducts([]);
//         }
//       } catch (error) {
//         console.error("Error fetching chart data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchAll();
//   }, [selectedSource, filters]); // ✅ Re-fetch when filters change

//   const commonOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: { legend: { display: true, position: "bottom" as const } },
//   };

//   const truncateName = (name: string) => {
//     const cleaned = name.replace(/"/g, "");
//     return cleaned.substring(0, 30) + (cleaned.length > 30 ? "..." : "");
//   };

//   // Chart data configurations remain the same...
//   const flipkartProductsChart = {
//     labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
//     datasets: [
//       {
//         label: "Flipkart Rating",
//         data: flipkartProducts.map((p) => p.rating || 0),
//         backgroundColor: "hsl(142,76%,36%)",
//       },
//     ],
//   };

//   const flipkartReviewsChart = {
//     labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
//     datasets: [
//       {
//         label: "Flipkart Reviews",
//         data: flipkartProducts.map((p) => p.reviews || 0),
//         backgroundColor: "hsl(221,83%,53%)",
//       },
//     ],
//   };

//   const flipkartCategoriesChart = {
//     labels: flipkartCategories.map((c) => c.category || "Unknown"),
//     datasets: [
//       {
//         label: "Flipkart Products",
//         data: flipkartCategories.map((c) => c.count || 0),
//         backgroundColor: "hsl(142,76%,36%)",
//       },
//     ],
//   };

//   const amazonCategoriesChart = {
//     labels: amazonCategories.map((c) => c.category || c.category_name || "Unknown"),
//     datasets: [
//       {
//         label: "Amazon Products",
//         data: amazonCategories.map((c) => c.count || c.product_count || 0),
//         borderRadius: 8,
//         backgroundColor: "rgba(245, 158, 11, 0.7)",
//       },
//     ],
//   };

//   const ratingsChart = {
//     labels: ratings.map((r) => `${r.rating}★`),
//     datasets: [
//       {
//         label: "Number of Products",
//         data: ratings.map((r) => r.count || 0),
//         backgroundColor: "rgba(59,130,246,0.7)",
//       },
//     ],
//   };

//   const sentimentsChart = {
//     labels: sentiments.map((s) => s.sentiment || "Unknown"),
//     datasets: [
//       {
//         label: "Sentiment Count",
//         data: sentiments.map((s) => s.count || 0),
//         backgroundColor: [
//           "rgba(34,197,94,0.9)",
//           "rgba(234,179,8,0.9)",
//           "rgba(239,68,68,0.9)",
//         ],
//         borderColor: "rgba(255,255,255,1)",
//         borderWidth: 2,
//       },
//     ],
//   };

//   const rapidApiSalesChart = {
//     labels: rapidApiProducts.map((p) => truncateName(p.product_title || "Unknown")),
//     datasets: [
//       {
//         label: "Daily Sales",
//         data: rapidApiProducts.map((p) => p.daily_sales || 0),
//         backgroundColor: "rgba(59,130,246,0.8)",
//         borderRadius: 10,
//       },
//     ],
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//       {flipkartProducts.length > 0 && (
//         <>
//           <ChartCard title="Top Flipkart Products by Rating" isLoading={isLoading}>
//             <Bar data={flipkartProductsChart} options={commonOptions} />
//           </ChartCard>

//           <ChartCard title="Flipkart Products with Most Reviews" isLoading={isLoading}>
//             <Bar data={flipkartReviewsChart} options={commonOptions} />
//           </ChartCard>

//           <ChartCard title="Flipkart Categories Distribution" isLoading={isLoading}>
//             <Bar data={flipkartCategoriesChart} options={commonOptions} />
//           </ChartCard>
//         </>
//       )}

//       {amazonCategories.length > 0 && (
//         <ChartCard title="Amazon Categories Distribution" isLoading={isLoading}>
//           <Bar data={amazonCategoriesChart} options={commonOptions} />
//         </ChartCard>
//       )}

//       {ratings.length > 0 && (
//         <ChartCard title="Rating Distribution (Amazon)" isLoading={isLoading}>
//           <Bar data={ratingsChart} options={commonOptions} />
//         </ChartCard>
//       )}

//       {sentiments.length > 0 && (
//         <ChartCard title="Sentiment Distribution (Amazon)" isLoading={isLoading}>
//           <Doughnut data={sentimentsChart} options={commonOptions} />
//         </ChartCard>
//       )}

//       {rapidApiProducts.length > 0 && (
//         <ChartCard title="Top Products by Daily Sales" isLoading={isLoading}>
//           <Bar data={rapidApiSalesChart} options={commonOptions} />
//         </ChartCard>
//       )}
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Skeleton } from "@/components/ui/skeleton";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar, Doughnut } from "react-chartjs-2";
// import { useFilters } from "@/components/dashboard/FiltersContext";

// ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// interface ChartCardProps {
//   title: string;
//   children: React.ReactNode;
//   isLoading?: boolean;
//   summary?: string;
//   summaryLoading?: boolean;
// }

// function ChartCard({ title, children, isLoading, summary, summaryLoading }: ChartCardProps) {
//   return (
//     <Card className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
//       <CardHeader className="flex flex-row items-center justify-between pb-4">
//         <CardTitle className="text-lg font-semibold">{title}</CardTitle>
//         <Badge variant="secondary" className="text-xs">
//           Live Data
//         </Badge>
//       </CardHeader>
//       <CardContent className="p-0">
//         <div className="chart-container relative h-80 w-full">
//           {isLoading ? <Skeleton className="w-full h-full" /> : children}
//         </div>
//         {summaryLoading ? (
//           <div className="mt-3 text-sm text-muted-foreground italic">
//             Generating Smart summary...
//           </div>
//         ) : summary ? (
//           <div className="mt-3 text-sm font-medium p-3 bg-muted/50 rounded-lg">
//             {summary}
//           </div>
//         ) : null}
//       </CardContent>
//     </Card>
//   );
// }

// export default function ChartsGrid({ selectedSource }: { selectedSource: string }) {
//   const BASE_URL = "http://localhost:8000";
//   const { filters } = useFilters(); // ✅ Get filters from context

//   const [flipkartProducts, setFlipkartProducts] = useState<any[]>([]);
//   const [amazonProducts, setAmazonProducts] = useState<any[]>([]);
//   const [flipkartCategories, setFlipkartCategories] = useState<any[]>([]);
//   const [amazonCategories, setAmazonCategories] = useState<any[]>([]);
//   const [ratings, setRatings] = useState<any[]>([]);
//   const [sentiments, setSentiments] = useState<any[]>([]);
//   const [rapidApiProducts, setRapidApiProducts] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   // ✅ Build query params from filters
//   const buildQueryParams = (table: string) => {
//     const params = new URLSearchParams();
    
//     // Category filter
//     if (filters.category && filters.category !== "All Categories") {
//       params.append("category", filters.category);
//     }
    
//     // Price range filter
//     if (filters.priceRange[0] > 0) {
//       params.append("min_price", filters.priceRange[0].toString());
//     }
//     if (filters.priceRange[1] < 5000000) {
//       params.append("max_price", filters.priceRange[1].toString());
//     }
    
//     // Rating filter
//     if (filters.rating > 0) {
//       params.append("min_rating", filters.rating.toString());
//     }
    
//     // Date range filter
//     if (filters.dateRange !== "all") {
//       params.append("date_range", filters.dateRange);
//     }
    
//     // Trending filter
//     if (filters.showTrendingOnly) {
//       params.append("trending_only", "true");
//     }
    
//     // Sort filter
//     if (filters.sortBy) {
//       params.append("sort_by", filters.sortBy);
//     }
    
//     return params.toString();
//   };

//   useEffect(() => {
//     const fetchAll = async () => {
//       setIsLoading(true);
//       try {
//         const table = filters.table || selectedSource;
//         const queryParams = buildQueryParams(table);
        
//         if (selectedSource === "both" || table === "both") {
//           const flipkartParams = buildQueryParams("flipkart");
//           const amazonParams = buildQueryParams("amazon_reviews");
          
//           const [
//             flipkartRes,
//             amazonRes,
//             flipkartCatRes,
//             amazonCatRes,
//             ratingsRes,
//             sentimentRes,
//             rapidApiRes,
//           ] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=flipkart&n=10&${flipkartParams}`),
//             fetch(`${BASE_URL}/top?table=amazon_reviews&n=10&${amazonParams}`),
//             fetch(`${BASE_URL}/flipkart/categories?${flipkartParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/categories?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/ratings?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi/top-sales?limit=10&${amazonParams}`),
//           ]);

//           const [
//             flipkartJson,
//             amazonJson,
//             flipkartCatJson,
//             amazonCatJson,
//             ratingsJson,
//             sentimentJson,
//             rapidApiJson,
//           ] = await Promise.all([
//             flipkartRes.json(),
//             amazonRes.json(),
//             flipkartCatRes.json(),
//             amazonCatRes.json(),
//             ratingsRes.json(),
//             sentimentRes.json(),
//             rapidApiRes.json(),
//           ]);

//           setFlipkartProducts(flipkartJson.data || []);
//           setAmazonProducts(amazonJson.data || []);
//           setFlipkartCategories(flipkartCatJson || []);
//           setAmazonCategories(amazonCatJson || []);
//           setRatings(ratingsJson || []);
//           setSentiments(sentimentJson || []);
//           setRapidApiProducts(rapidApiJson.data || []);
//         } else if (table === "amazon_reviews") {
//           const [productsRes, categoriesRes, ratingsRes, sentimentRes, rapidApiRes] =
//             await Promise.all([
//               fetch(`${BASE_URL}/top?table=amazon_reviews&n=10&${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi_amazon_products/categories?${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi_amazon_products/ratings?${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment?${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi/top-sales?limit=10&${queryParams}`),
//             ]);

//           const [productsJson, categoriesJson, ratingsJson, sentimentJson, rapidApiJson] =
//             await Promise.all([
//               productsRes.json(),
//               categoriesRes.json(),
//               ratingsRes.json(),
//               sentimentRes.json(),
//               rapidApiRes.json(),
//             ]);

//           setFlipkartProducts([]);
//           setAmazonProducts(productsJson.data || []);
//           setFlipkartCategories([]);
//           setAmazonCategories(categoriesJson || []);
//           setRatings(ratingsJson || []);
//           setSentiments(sentimentJson || []);
//           setRapidApiProducts(rapidApiJson.data || []);
//         } else {
//           const [productsRes, categoryRes] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=flipkart&n=10&${queryParams}`),
//             fetch(`${BASE_URL}/flipkart/categories?${queryParams}`),
//           ]);

//           const [productsJson, categoryJson] = await Promise.all([
//             productsRes.json(),
//             categoryRes.json(),
//           ]);

//           setFlipkartProducts(productsJson.data || []);
//           setAmazonProducts([]);
//           setFlipkartCategories(categoryJson || []);
//           setAmazonCategories([]);
//           setRatings([]);
//           setSentiments([]);
//           setRapidApiProducts([]);
//         }
//       } catch (error) {
//         console.error("Error fetching chart data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchAll();
//   }, [selectedSource, filters]); // ✅ Re-fetch when filters change

//   const commonOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: { legend: { display: true, position: "bottom" as const } },
//   };

//   const truncateName = (name: string) => {
//     const cleaned = name.replace(/"/g, "");
//     return cleaned.substring(0, 30) + (cleaned.length > 30 ? "..." : "");
//   };

//   // Chart data configurations remain the same...
//   const flipkartProductsChart = {
//     labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
//     datasets: [
//       {
//         label: "Flipkart Rating",
//         data: flipkartProducts.map((p) => p.rating || 0),
//         backgroundColor: "hsl(142,76%,36%)",
//       },
//     ],
//   };

//   const flipkartReviewsChart = {
//     labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
//     datasets: [
//       {
//         label: "Flipkart Reviews",
//         data: flipkartProducts.map((p) => p.reviews || 0),
//         backgroundColor: "hsl(221,83%,53%)",
//       },
//     ],
//   };

//   const flipkartCategoriesChart = {
//     labels: flipkartCategories.map((c) => c.category || "Unknown"),
//     datasets: [
//       {
//         label: "Flipkart Products",
//         data: flipkartCategories.map((c) => c.count || 0),
//         backgroundColor: "hsl(142,76%,36%)",
//       },
//     ],
//   };

//   const amazonCategoriesChart = {
//     labels: amazonCategories.map((c) => c.category || c.category_name || "Unknown"),
//     datasets: [
//       {
//         label: "Amazon Products",
//         data: amazonCategories.map((c) => c.count || c.product_count || 0),
//         borderRadius: 8,
//         backgroundColor: "rgba(245, 158, 11, 0.7)",
//       },
//     ],
//   };

//   const ratingsChart = {
//     labels: ratings.map((r) => `${r.rating}★`),
//     datasets: [
//       {
//         label: "Number of Products",
//         data: ratings.map((r) => r.count || 0),
//         backgroundColor: "rgba(59,130,246,0.7)",
//       },
//     ],
//   };

//   const sentimentsChart = {
//     labels: sentiments.map((s) => s.sentiment || "Unknown"),
//     datasets: [
//       {
//         label: "Sentiment Count",
//         data: sentiments.map((s) => s.count || 0),
//         backgroundColor: [
//           "rgba(34,197,94,0.9)",
//           "rgba(234,179,8,0.9)",
//           "rgba(239,68,68,0.9)",
//         ],
//         borderColor: "rgba(255,255,255,1)",
//         borderWidth: 2,
//       },
//     ],
//   };

//   const rapidApiSalesChart = {
//     labels: rapidApiProducts.map((p) => truncateName(p.product_title || "Unknown")),
//     datasets: [
//       {
//         label: "Daily Sales",
//         data: rapidApiProducts.map((p) => p.daily_sales || 0),
//         backgroundColor: "rgba(59,130,246,0.8)",
//         borderRadius: 10,
//       },
//     ],
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//       {flipkartProducts.length > 0 && (
//         <>
//           <ChartCard title="Top Flipkart Products by Rating" isLoading={isLoading}>
//             <Bar data={flipkartProductsChart} options={commonOptions} />
//           </ChartCard>

//           <ChartCard title="Flipkart Products with Most Reviews" isLoading={isLoading}>
//             <Bar data={flipkartReviewsChart} options={commonOptions} />
//           </ChartCard>

//           <ChartCard title="Flipkart Categories Distribution" isLoading={isLoading}>
//             <Bar data={flipkartCategoriesChart} options={commonOptions} />
//           </ChartCard>
//         </>
//       )}

//       {amazonCategories.length > 0 && (
//         <ChartCard title="Amazon Categories Distribution" isLoading={isLoading}>
//           <Bar data={amazonCategoriesChart} options={commonOptions} />
//         </ChartCard>
//       )}

//       {ratings.length > 0 && (
//         <ChartCard title="Rating Distribution (Amazon)" isLoading={isLoading}>
//           <Bar data={ratingsChart} options={commonOptions} />
//         </ChartCard>
//       )}

//       {sentiments.length > 0 && (
//         <ChartCard title="Sentiment Distribution (Amazon)" isLoading={isLoading}>
//           <Doughnut data={sentimentsChart} options={commonOptions} />
//         </ChartCard>
//       )}

//       {rapidApiProducts.length > 0 && (
//         <ChartCard title="Top Products by Daily Sales" isLoading={isLoading}>
//           <Bar data={rapidApiSalesChart} options={commonOptions} />
//         </ChartCard>
//       )}
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Skeleton } from "@/components/ui/skeleton";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar, Doughnut } from "react-chartjs-2";
// import { useFilters } from "@/components/dashboard/FiltersContext";
// import { useAISummary } from "@/hooks/useAISummary";

// ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// interface ChartCardProps {
//   title: string;
//   children: React.ReactNode;
//   isLoading?: boolean;
//   summary?: string;
//   summaryLoading?: boolean;
// }

// function ChartCard({ title, children, isLoading, summary, summaryLoading }: ChartCardProps) {
//   return (
//     <Card className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
//       <CardHeader className="flex flex-row items-center justify-between pb-4">
//         <CardTitle className="text-lg font-semibold">{title}</CardTitle>
//         <Badge variant="secondary" className="text-xs">
//           Live Data
//         </Badge>
//       </CardHeader>
//       <CardContent className="p-0">
//         <div className="chart-container relative h-80 w-full">
//           {isLoading ? <Skeleton className="w-full h-full" /> : children}
//         </div>
//         {summaryLoading ? (
//           <div className="mt-3 text-sm text-muted-foreground italic">
//             Generating Smart summary...
//           </div>
//         ) : summary ? (
//           <div className="mt-3 text-sm font-medium p-3 bg-muted/50 rounded-lg">
//             {summary}
//           </div>
//         ) : null}
//       </CardContent>
//     </Card>
//   );
// }

// export default function ChartsGrid({ selectedSource }: { selectedSource: string }) {
//   const BASE_URL = "http://localhost:8000";
//   const { filters } = useFilters();

//   const [flipkartProducts, setFlipkartProducts] = useState<any[]>([]);
//   const [amazonProducts, setAmazonProducts] = useState<any[]>([]);
//   const [flipkartCategories, setFlipkartCategories] = useState<any[]>([]);
//   const [amazonCategories, setAmazonCategories] = useState<any[]>([]);
//   const [ratings, setRatings] = useState<any[]>([]);
//   const [sentiments, setSentiments] = useState<any[]>([]);
//   const [rapidApiProducts, setRapidApiProducts] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const buildQueryParams = (table: string) => {
//     const params = new URLSearchParams();
    
//     if (filters.category && filters.category !== "All Categories") {
//       params.append("category", filters.category);
//     }
    
//     if (filters.priceRange[0] > 0) {
//       params.append("min_price", filters.priceRange[0].toString());
//     }
//     if (filters.priceRange[1] < 5000000) {
//       params.append("max_price", filters.priceRange[1].toString());
//     }
    
//     if (filters.rating > 0) {
//       params.append("min_rating", filters.rating.toString());
//     }
    
//     if (filters.dateRange !== "all") {
//       params.append("date_range", filters.dateRange);
//     }
    
//     if (filters.showTrendingOnly) {
//       params.append("trending_only", "true");
//     }
    
//     if (filters.sortBy) {
//       params.append("sort_by", filters.sortBy);
//     }
    
//     return params.toString();
//   };

//   useEffect(() => {
//     const fetchAll = async () => {
//       setIsLoading(true);
//       try {
//         const table = filters.table || selectedSource;
//         const queryParams = buildQueryParams(table);
        
//         if (selectedSource === "both" || table === "both") {
//           const flipkartParams = buildQueryParams("flipkart");
//           const amazonParams = buildQueryParams("amazon_reviews");
          
//           const [
//             flipkartRes,
//             amazonRes,
//             flipkartCatRes,
//             amazonCatRes,
//             ratingsRes,
//             sentimentRes,
//             rapidApiRes,
//           ] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=flipkart&n=10&${flipkartParams}`),
//             fetch(`${BASE_URL}/top?table=amazon_reviews&n=10&${amazonParams}`),
//             fetch(`${BASE_URL}/flipkart/categories?${flipkartParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/categories?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/ratings?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi/top-sales?limit=10&${amazonParams}`),
//           ]);

//           const [
//             flipkartJson,
//             amazonJson,
//             flipkartCatJson,
//             amazonCatJson,
//             ratingsJson,
//             sentimentJson,
//             rapidApiJson,
//           ] = await Promise.all([
//             flipkartRes.json(),
//             amazonRes.json(),
//             flipkartCatRes.json(),
//             amazonCatRes.json(),
//             ratingsRes.json(),
//             sentimentRes.json(),
//             rapidApiRes.json(),
//           ]);

//           setFlipkartProducts(flipkartJson.data || []);
//           setAmazonProducts(amazonJson.data || []);
//           setFlipkartCategories(flipkartCatJson || []);
//           setAmazonCategories(amazonCatJson || []);
//           setRatings(ratingsJson || []);
//           setSentiments(sentimentJson || []);
//           setRapidApiProducts(rapidApiJson.data || []);
//         } else if (table === "amazon_reviews") {
//           const [productsRes, categoriesRes, ratingsRes, sentimentRes, rapidApiRes] =
//             await Promise.all([
//               fetch(`${BASE_URL}/top?table=amazon_reviews&n=10&${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi_amazon_products/categories?${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi_amazon_products/ratings?${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment?${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi/top-sales?limit=10&${queryParams}`),
//             ]);

//           const [productsJson, categoriesJson, ratingsJson, sentimentJson, rapidApiJson] =
//             await Promise.all([
//               productsRes.json(),
//               categoriesRes.json(),
//               ratingsRes.json(),
//               sentimentRes.json(),
//               rapidApiRes.json(),
//             ]);

//           setFlipkartProducts([]);
//           setAmazonProducts(productsJson.data || []);
//           setFlipkartCategories([]);
//           setAmazonCategories(categoriesJson || []);
//           setRatings(ratingsJson || []);
//           setSentiments(sentimentJson || []);
//           setRapidApiProducts(rapidApiJson.data || []);
//         } else {
//           const [productsRes, categoryRes] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=flipkart&n=10&${queryParams}`),
//             fetch(`${BASE_URL}/flipkart/categories?${queryParams}`),
//           ]);

//           const [productsJson, categoryJson] = await Promise.all([
//             productsRes.json(),
//             categoryRes.json(),
//           ]);

//           setFlipkartProducts(productsJson.data || []);
//           setAmazonProducts([]);
//           setFlipkartCategories(categoryJson || []);
//           setAmazonCategories([]);
//           setRatings([]);
//           setSentiments([]);
//           setRapidApiProducts([]);
//         }
//       } catch (error) {
//         console.error("Error fetching chart data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchAll();
//   }, [selectedSource, filters]);

//   // 🔹 AI Summaries - Same as first code
//   const { summary: flipkartProductsSummary, loading: flipkartProductsLoading } =
//     useAISummary("Summarize Flipkart top products by rating", "flipkart", flipkartProducts, flipkartProducts.length);

//   const { summary: flipkartReviewsSummary, loading: flipkartReviewsLoading } =
//     useAISummary("Summarize Flipkart products with most reviews", "flipkart", flipkartProducts, flipkartProducts.length);

//   const { summary: flipkartCategoriesSummary, loading: flipkartCategoriesLoading } =
//     useAISummary("Summarize Flipkart category distribution", "flipkart", flipkartCategories, flipkartCategories.length);

//   const { summary: amazonCategoriesSummary, loading: amazonCategoriesLoading } =
//     useAISummary("Summarize Amazon category distribution", "rapidapi_amazon_products", amazonCategories, amazonCategories.length);

//   const { summary: ratingsSummary, loading: ratingsLoading } =
//     useAISummary("Summarize rating distribution", "rapidapi_amazon_products", ratings, ratings.length);

//   const { summary: sentimentsSummary, loading: sentimentsLoading } =
//     useAISummary("Summarize sentiment distribution", "rapidapi_amazon_products", sentiments, sentiments.length);

//   const { summary: rapidApiSalesSummary, loading: rapidApiSalesLoading } =
//     useAISummary("Summarize top selling products by daily sales volume from RapidAPI data", "rapidapi_amazon_products", rapidApiProducts, rapidApiProducts.length);

//   const commonOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: { legend: { display: true, position: "bottom" as const } },
//   };

//   const truncateName = (name: string) => {
//     const cleaned = name.replace(/"/g, "");
//     return cleaned.substring(0, 30) + (cleaned.length > 30 ? "..." : "");
//   };

//   const flipkartProductsChart = {
//     labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
//     datasets: [
//       {
//         label: "Flipkart Rating",
//         data: flipkartProducts.map((p) => p.rating || 0),
//         backgroundColor: "hsl(142,76%,36%)",
//       },
//     ],
//   };

//   const flipkartReviewsChart = {
//     labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
//     datasets: [
//       {
//         label: "Flipkart Reviews",
//         data: flipkartProducts.map((p) => p.reviews || 0),
//         backgroundColor: "hsl(221,83%,53%)",
//       },
//     ],
//   };

//   const flipkartCategoriesChart = {
//     labels: flipkartCategories.map((c) => c.category || "Unknown"),
//     datasets: [
//       {
//         label: "Flipkart Products",
//         data: flipkartCategories.map((c) => c.count || 0),
//         backgroundColor: "hsl(142,76%,36%)",
//       },
//     ],
//   };

//   const amazonCategoriesChart = {
//     labels: amazonCategories.map((c) => c.category || c.category_name || "Unknown"),
//     datasets: [
//       {
//         label: "Amazon Products",
//         data: amazonCategories.map((c) => c.count || c.product_count || 0),
//         borderRadius: 8,
//         backgroundColor: "rgba(245, 158, 11, 0.7)",
//       },
//     ],
//   };

//   const ratingsChart = {
//     labels: ratings.map((r) => `${r.rating}★`),
//     datasets: [
//       {
//         label: "Number of Products",
//         data: ratings.map((r) => r.count || 0),
//         backgroundColor: "rgba(59,130,246,0.7)",
//       },
//     ],
//   };

//   const sentimentsChart = {
//     labels: sentiments.map((s) => s.sentiment || "Unknown"),
//     datasets: [
//       {
//         label: "Sentiment Count",
//         data: sentiments.map((s) => s.count || 0),
//         backgroundColor: [
//           "rgba(34,197,94,0.9)",
//           "rgba(234,179,8,0.9)",
//           "rgba(239,68,68,0.9)",
//         ],
//         borderColor: "rgba(255,255,255,1)",
//         borderWidth: 2,
//       },
//     ],
//   };

//   const rapidApiSalesChart = {
//     labels: rapidApiProducts.map((p) => truncateName(p.product_title || "Unknown")),
//     datasets: [
//       {
//         label: "Daily Sales",
//         data: rapidApiProducts.map((p) => p.daily_sales || 0),
//         backgroundColor: "rgba(59,130,246,0.8)",
//         borderRadius: 10,
//       },
//     ],
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//       {flipkartProducts.length > 0 && (
//         <>
//           <ChartCard 
//             title="Top Flipkart Products by Rating" 
//             isLoading={isLoading}
//             summary={flipkartProductsSummary}
//             summaryLoading={flipkartProductsLoading}
//           >
//             <Bar data={flipkartProductsChart} options={commonOptions} />
//           </ChartCard>

//           <ChartCard 
//             title="Flipkart Products with Most Reviews" 
//             isLoading={isLoading}
//             summary={flipkartReviewsSummary}
//             summaryLoading={flipkartReviewsLoading}
//           >
//             <Bar data={flipkartReviewsChart} options={commonOptions} />
//           </ChartCard>

//           <ChartCard 
//             title="Flipkart Categories Distribution" 
//             isLoading={isLoading}
//             summary={flipkartCategoriesSummary}
//             summaryLoading={flipkartCategoriesLoading}
//           >
//             <Bar data={flipkartCategoriesChart} options={commonOptions} />
//           </ChartCard>
//         </>
//       )}

//       {amazonCategories.length > 0 && (
//         <ChartCard 
//           title="Amazon Categories Distribution" 
//           isLoading={isLoading}
//           summary={amazonCategoriesSummary}
//           summaryLoading={amazonCategoriesLoading}
//         >
//           <Bar data={amazonCategoriesChart} options={commonOptions} />
//         </ChartCard>
//       )}

//       {ratings.length > 0 && (
//         <ChartCard 
//           title="Rating Distribution (Amazon)" 
//           isLoading={isLoading}
//           summary={ratingsSummary}
//           summaryLoading={ratingsLoading}
//         >
//           <Bar data={ratingsChart} options={commonOptions} />
//         </ChartCard>
//       )}

//       {sentiments.length > 0 && (
//         <ChartCard 
//           title="Sentiment Distribution (Amazon)" 
//           isLoading={isLoading}
//           summary={sentimentsSummary}
//           summaryLoading={sentimentsLoading}
//         >
//           <Doughnut data={sentimentsChart} options={commonOptions} />
//         </ChartCard>
//       )}

//       {rapidApiProducts.length > 0 && (
//         <ChartCard 
//           title="Top Products by Daily Sales" 
//           isLoading={isLoading}
//           summary={rapidApiSalesSummary}
//           summaryLoading={rapidApiSalesLoading}
//         >
//           <Bar data={rapidApiSalesChart} options={commonOptions} />
//         </ChartCard>
//       )}
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { useLocation } from "wouter";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Skeleton } from "@/components/ui/skeleton";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar, Doughnut } from "react-chartjs-2";
// import { useFilters } from "@/components/dashboard/FiltersContext";
// import { useAISummary } from "@/hooks/useAISummary";

// ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// interface ChartCardProps {
//   title: string;
//   children: React.ReactNode;
//   isLoading?: boolean;
//   summary?: string;
//   summaryLoading?: boolean;
// }

// function ChartCard({ title, children, isLoading, summary, summaryLoading }: ChartCardProps) {
//   return (
//     <Card className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
//       <CardHeader className="flex flex-row items-center justify-between pb-4">
//         <CardTitle className="text-lg font-semibold">{title}</CardTitle>
//         <Badge variant="secondary" className="text-xs">
//           Live Data
//         </Badge>
//       </CardHeader>
//       <CardContent className="p-0">
//         <div className="chart-container relative h-80 w-full">
//           {isLoading ? <Skeleton className="w-full h-full" /> : children}
//         </div>
//         {summaryLoading ? (
//           <div className="mt-3 text-sm text-muted-foreground italic">
//             Generating Smart summary...
//           </div>
//         ) : summary ? (
//           <div className="mt-3 text-sm font-medium p-3 bg-muted/50 rounded-lg">
//             {summary}
//           </div>
//         ) : null}
//       </CardContent>
//     </Card>
//   );
// }

// export default function ChartsGrid({ selectedSource }: { selectedSource: string }) {
//   const BASE_URL = "http://localhost:8000";
//   const { filters } = useFilters();
//   const [, setLocation] = useLocation();

//   const [flipkartProducts, setFlipkartProducts] = useState<any[]>([]);
//   const [amazonProducts, setAmazonProducts] = useState<any[]>([]);
//   const [flipkartCategories, setFlipkartCategories] = useState<any[]>([]);
//   const [amazonCategories, setAmazonCategories] = useState<any[]>([]);
//   const [ratings, setRatings] = useState<any[]>([]);
//   const [sentiments, setSentiments] = useState<any[]>([]);
//   const [rapidApiProducts, setRapidApiProducts] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const buildQueryParams = (table: string) => {
//     const params = new URLSearchParams();
    
//     if (filters.category && filters.category !== "All Categories") {
//       params.append("category", filters.category);
//     }
    
//     if (filters.priceRange[0] > 0) {
//       params.append("min_price", filters.priceRange[0].toString());
//     }
//     if (filters.priceRange[1] < 5000000) {
//       params.append("max_price", filters.priceRange[1].toString());
//     }
    
//     if (filters.rating > 0) {
//       params.append("min_rating", filters.rating.toString());
//     }
    
//     if (filters.dateRange !== "all") {
//       params.append("date_range", filters.dateRange);
//     }
    
//     if (filters.showTrendingOnly) {
//       params.append("trending_only", "true");
//     }
    
//     if (filters.sortBy) {
//       params.append("sort_by", filters.sortBy);
//     }
    
//     return params.toString();
//   };

//   useEffect(() => {
//     const fetchAll = async () => {
//       setIsLoading(true);
//       try {
//         const table = filters.table || selectedSource;
//         const queryParams = buildQueryParams(table);
        
//         if (selectedSource === "both" || table === "both") {
//           const flipkartParams = buildQueryParams("flipkart");
//           const amazonParams = buildQueryParams("amazon_reviews");
          
//           const [
//             flipkartRes,
//             amazonRes,
//             flipkartCatRes,
//             amazonCatRes,
//             ratingsRes,
//             sentimentRes,
//             rapidApiRes,
//           ] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=flipkart&n=10&${flipkartParams}`),
//             fetch(`${BASE_URL}/top?table=amazon_reviews&n=10&${amazonParams}`),
//             fetch(`${BASE_URL}/flipkart/categories?${flipkartParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/categories?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/ratings?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi/top-sales?limit=10&${amazonParams}`),
//           ]);

//           const [
//             flipkartJson,
//             amazonJson,
//             flipkartCatJson,
//             amazonCatJson,
//             ratingsJson,
//             sentimentJson,
//             rapidApiJson,
//           ] = await Promise.all([
//             flipkartRes.json(),
//             amazonRes.json(),
//             flipkartCatRes.json(),
//             amazonCatRes.json(),
//             ratingsRes.json(),
//             sentimentRes.json(),
//             rapidApiRes.json(),
//           ]);

//           setFlipkartProducts(flipkartJson.data || []);
//           setAmazonProducts(amazonJson.data || []);
//           setFlipkartCategories(flipkartCatJson || []);
//           setAmazonCategories(amazonCatJson || []);
//           setRatings(ratingsJson || []);
//           setSentiments(sentimentJson || []);
//           setRapidApiProducts(rapidApiJson.data || []);
//         } else if (table === "amazon_reviews") {
//           const [productsRes, categoriesRes, ratingsRes, sentimentRes, rapidApiRes] =
//             await Promise.all([
//               fetch(`${BASE_URL}/top?table=amazon_reviews&n=10&${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi_amazon_products/categories?${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi_amazon_products/ratings?${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment?${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi/top-sales?limit=10&${queryParams}`),
//             ]);

//           const [productsJson, categoriesJson, ratingsJson, sentimentJson, rapidApiJson] =
//             await Promise.all([
//               productsRes.json(),
//               categoriesRes.json(),
//               ratingsRes.json(),
//               sentimentRes.json(),
//               rapidApiRes.json(),
//             ]);

//           setFlipkartProducts([]);
//           setAmazonProducts(productsJson.data || []);
//           setFlipkartCategories([]);
//           setAmazonCategories(categoriesJson || []);
//           setRatings(ratingsJson || []);
//           setSentiments(sentimentJson || []);
//           setRapidApiProducts(rapidApiJson.data || []);
//         } else {
//           const [productsRes, categoryRes] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=flipkart&n=10&${queryParams}`),
//             fetch(`${BASE_URL}/flipkart/categories?${queryParams}`),
//           ]);

//           const [productsJson, categoryJson] = await Promise.all([
//             productsRes.json(),
//             categoryRes.json(),
//           ]);

//           setFlipkartProducts(productsJson.data || []);
//           setAmazonProducts([]);
//           setFlipkartCategories(categoryJson || []);
//           setAmazonCategories([]);
//           setRatings([]);
//           setSentiments([]);
//           setRapidApiProducts([]);
//         }
//       } catch (error) {
//         console.error("Error fetching chart data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchAll();
//   }, [selectedSource, filters]);

//   // 🔹 AI Summaries
//   const { summary: flipkartProductsSummary, loading: flipkartProductsLoading } =
//     useAISummary("Summarize Flipkart top products by rating", "flipkart", flipkartProducts, flipkartProducts.length);

//   const { summary: flipkartReviewsSummary, loading: flipkartReviewsLoading } =
//     useAISummary("Summarize Flipkart products with most reviews", "flipkart", flipkartProducts, flipkartProducts.length);

//   const { summary: flipkartCategoriesSummary, loading: flipkartCategoriesLoading } =
//     useAISummary("Summarize Flipkart category distribution", "flipkart", flipkartCategories, flipkartCategories.length);

//   const { summary: amazonCategoriesSummary, loading: amazonCategoriesLoading } =
//     useAISummary("Summarize Amazon category distribution", "rapidapi_amazon_products", amazonCategories, amazonCategories.length);

//   const { summary: ratingsSummary, loading: ratingsLoading } =
//     useAISummary("Summarize rating distribution", "rapidapi_amazon_products", ratings, ratings.length);

//   const { summary: sentimentsSummary, loading: sentimentsLoading } =
//     useAISummary("Summarize sentiment distribution", "rapidapi_amazon_products", sentiments, sentiments.length);

//   const { summary: rapidApiSalesSummary, loading: rapidApiSalesLoading } =
//     useAISummary("Summarize top selling products by daily sales volume from RapidAPI data", "rapidapi_amazon_products", rapidApiProducts, rapidApiProducts.length);

//   // 🔹 Click Handlers for Navigation
//   const handleFlipkartProductClick = (index: number) => {
//     const product = flipkartProducts[index];
//     if (product && product.title) {
//       const productName = encodeURIComponent(product.title);
//       // ✅ Dashboard se aa rahe hain, toh from=dashboard add karo
//       setLocation(`/product/${productName}?from=dashboard&source=flipkart`);
//     }
//   };

//   const handleFlipkartCategoryClick = (index: number) => {
//     const category = flipkartCategories[index];
//     if (category && category.category) {
//       const categoryName = encodeURIComponent(category.category);
//       setLocation(`/category-products/flipkart/${categoryName}?page=1`);
//     }
//   };

//   const handleAmazonCategoryClick = (index: number) => {
//     const category = amazonCategories[index];
//     if (category && (category.category || category.category_name)) {
//       const categoryName = encodeURIComponent(category.category || category.category_name);
//       setLocation(`/category-products/amazon/${categoryName}?page=1`);
//     }
//   };

//   const handleRapidApiProductClick = (index: number) => {
//     const product = rapidApiProducts[index];
//     if (product && product.product_title) {
//       const productName = encodeURIComponent(product.product_title);
//       // ✅ Dashboard se aa rahe hain, toh from=dashboard add karo
//       setLocation(`/product/${productName}?from=dashboard&source=amazon`);
//     }
//   };

//   // 🔹 Common Chart Options with Click Events
//   const createBarOptions = (clickHandler: (index: number) => void) => ({
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: { 
//       legend: { display: true, position: "bottom" as const },
//       tooltip: {
//         callbacks: {
//           afterLabel: () => "Click to view details"
//         }
//       }
//     },
//     onClick: (_event: any, elements: any[]) => {
//       if (elements.length > 0) {
//         const index = elements[0].index;
//         clickHandler(index);
//       }
//     },
//     onHover: (event: any, elements: any[]) => {
//       const canvas = event.native?.target;
//       if (canvas) {
//         canvas.style.cursor = elements.length > 0 ? 'pointer' : 'default';
//       }
//     }
//   });

//   const createDoughnutOptions = (clickHandler?: (index: number) => void) => ({
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: { 
//       legend: { display: true, position: "bottom" as const },
//       tooltip: clickHandler ? {
//         callbacks: {
//           afterLabel: () => "Click to view details"
//         }
//       } : undefined
//     },
//     onClick: clickHandler ? (_event: any, elements: any[]) => {
//       if (elements.length > 0) {
//         const index = elements[0].index;
//         clickHandler(index);
//       }
//     } : undefined,
//     onHover: clickHandler ? (event: any, elements: any[]) => {
//       const canvas = event.native?.target;
//       if (canvas) {
//         canvas.style.cursor = elements.length > 0 ? 'pointer' : 'default';
//       }
//     } : undefined
//   });

//   const truncateName = (name: string) => {
//     const cleaned = name.replace(/"/g, "");
//     return cleaned.substring(0, 30) + (cleaned.length > 30 ? "..." : "");
//   };

//   const flipkartProductsChart = {
//     labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
//     datasets: [
//       {
//         label: "Flipkart Rating",
//         data: flipkartProducts.map((p) => p.rating || 0),
//         backgroundColor: "hsl(142,76%,36%)",
//       },
//     ],
//   };

//   const flipkartReviewsChart = {
//     labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
//     datasets: [
//       {
//         label: "Flipkart Reviews",
//         data: flipkartProducts.map((p) => p.reviews || 0),
//         backgroundColor: "hsl(221,83%,53%)",
//       },
//     ],
//   };

//   const flipkartCategoriesChart = {
//     labels: flipkartCategories.map((c) => c.category || "Unknown"),
//     datasets: [
//       {
//         label: "Flipkart Products",
//         data: flipkartCategories.map((c) => c.count || 0),
//         backgroundColor: "hsl(142,76%,36%)",
//       },
//     ],
//   };

//   const amazonCategoriesChart = {
//     labels: amazonCategories.map((c) => c.category || c.category_name || "Unknown"),
//     datasets: [
//       {
//         label: "Amazon Products",
//         data: amazonCategories.map((c) => c.count || c.product_count || 0),
//         borderRadius: 8,
//         backgroundColor: "rgba(245, 158, 11, 0.7)",
//       },
//     ],
//   };

//   const ratingsChart = {
//     labels: ratings.map((r) => `${r.rating}★`),
//     datasets: [
//       {
//         label: "Number of Products",
//         data: ratings.map((r) => r.count || 0),
//         backgroundColor: "rgba(59,130,246,0.7)",
//       },
//     ],
//   };

//   const sentimentsChart = {
//     labels: sentiments.map((s) => s.sentiment || "Unknown"),
//     datasets: [
//       {
//         label: "Sentiment Count",
//         data: sentiments.map((s) => s.count || 0),
//         backgroundColor: [
//           "rgba(34,197,94,0.9)",
//           "rgba(234,179,8,0.9)",
//           "rgba(239,68,68,0.9)",
//         ],
//         borderColor: "rgba(255,255,255,1)",
//         borderWidth: 2,
//       },
//     ],
//   };

//   const rapidApiSalesChart = {
//     labels: rapidApiProducts.map((p) => truncateName(p.product_title || "Unknown")),
//     datasets: [
//       {
//         label: "Daily Sales",
//         data: rapidApiProducts.map((p) => p.daily_sales || 0),
//         backgroundColor: "rgba(59,130,246,0.8)",
//         borderRadius: 10,
//       },
//     ],
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//       {flipkartProducts.length > 0 && (
//         <>
//           <ChartCard 
//             title="Top Flipkart Products by Rating" 
//             isLoading={isLoading}
//             summary={flipkartProductsSummary}
//             summaryLoading={flipkartProductsLoading}
//           >
//             <Bar data={flipkartProductsChart} options={createBarOptions(handleFlipkartProductClick)} />
//           </ChartCard>

//           <ChartCard 
//             title="Flipkart Products with Most Reviews" 
//             isLoading={isLoading}
//             summary={flipkartReviewsSummary}
//             summaryLoading={flipkartReviewsLoading}
//           >
//             <Bar data={flipkartReviewsChart} options={createBarOptions(handleFlipkartProductClick)} />
//           </ChartCard>

//           <ChartCard 
//             title="Flipkart Categories Distribution" 
//             isLoading={isLoading}
//             summary={flipkartCategoriesSummary}
//             summaryLoading={flipkartCategoriesLoading}
//           >
//             <Bar data={flipkartCategoriesChart} options={createBarOptions(handleFlipkartCategoryClick)} />
//           </ChartCard>
//         </>
//       )}

//       {amazonCategories.length > 0 && (
//         <ChartCard 
//           title="Amazon Categories Distribution" 
//           isLoading={isLoading}
//           summary={amazonCategoriesSummary}
//           summaryLoading={amazonCategoriesLoading}
//         >
//           <Bar data={amazonCategoriesChart} options={createBarOptions(handleAmazonCategoryClick)} />
//         </ChartCard>
//       )}

//       {ratings.length > 0 && (
//         <ChartCard 
//           title="Rating Distribution (Amazon)" 
//           isLoading={isLoading}
//           summary={ratingsSummary}
//           summaryLoading={ratingsLoading}
//         >
//           <Bar data={ratingsChart} options={createBarOptions(() => {})} />
//         </ChartCard>
//       )}

//       {sentiments.length > 0 && (
//         <ChartCard 
//           title="Sentiment Distribution (Amazon)" 
//           isLoading={isLoading}
//           summary={sentimentsSummary}
//           summaryLoading={sentimentsLoading}
//         >
//           <Doughnut data={sentimentsChart} options={createDoughnutOptions()} />
//         </ChartCard>
//       )}

//       {rapidApiProducts.length > 0 && (
//         <ChartCard 
//           title="Top Products by Daily Sales" 
//           isLoading={isLoading}
//           summary={rapidApiSalesSummary}
//           summaryLoading={rapidApiSalesLoading}
//         >
//           <Bar data={rapidApiSalesChart} options={createBarOptions(handleRapidApiProductClick)} />
//         </ChartCard>
//       )}
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { useLocation } from "wouter";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Skeleton } from "@/components/ui/skeleton";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar, Doughnut } from "react-chartjs-2";
// import { useFilters } from "@/components/dashboard/FiltersContext";
// import { useAISummary } from "@/hooks/useAISummary";

// ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// interface ChartCardProps {
//   title: string;
//   children: React.ReactNode;
//   isLoading?: boolean;
//   summary?: string;
//   summaryLoading?: boolean;
// }

// function ChartCard({ title, children, isLoading, summary, summaryLoading }: ChartCardProps) {
//   return (
//     <Card className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
//       <CardHeader className="flex flex-row items-center justify-between pb-4">
//         <CardTitle className="text-lg font-semibold">{title}</CardTitle>
//         <Badge variant="secondary" className="text-xs">
//           Live Data
//         </Badge>
//       </CardHeader>
//       <CardContent className="p-0">
//         <div className="chart-container relative h-80 w-full">
//           {isLoading ? <Skeleton className="w-full h-full" /> : children}
//         </div>
//         {summaryLoading ? (
//           <div className="mt-3 text-sm text-muted-foreground italic">
//             Generating Smart summary...
//           </div>
//         ) : summary ? (
//           <div className="mt-3 text-sm font-medium p-3 bg-muted/50 rounded-lg">
//             {summary}
//           </div>
//         ) : null}
//       </CardContent>
//     </Card>
//   );
// }

// export default function ChartsGrid({ selectedSource }: { selectedSource: string }) {
//   const BASE_URL = "http://localhost:8000";
//   const { filters } = useFilters();
//   const [, setLocation] = useLocation();

//   const [flipkartProducts, setFlipkartProducts] = useState<any[]>([]);
//   const [amazonProducts, setAmazonProducts] = useState<any[]>([]);
//   const [flipkartCategories, setFlipkartCategories] = useState<any[]>([]);
//   const [amazonCategories, setAmazonCategories] = useState<any[]>([]);
//   const [ratings, setRatings] = useState<any[]>([]);
//   const [sentiments, setSentiments] = useState<any[]>([]);
//   const [rapidApiProducts, setRapidApiProducts] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const buildQueryParams = (table: string) => {
//     const params = new URLSearchParams();
    
//     if (filters.category && filters.category !== "All Categories") {
//       params.append("category", filters.category);
//     }
    
//     if (filters.priceRange[0] > 0) {
//       params.append("min_price", filters.priceRange[0].toString());
//     }
//     if (filters.priceRange[1] < 5000000) {
//       params.append("max_price", filters.priceRange[1].toString());
//     }
    
//     if (filters.rating > 0) {
//       params.append("min_rating", filters.rating.toString());
//     }
    
//     if (filters.dateRange !== "all") {
//       params.append("date_range", filters.dateRange);
//     }
    
//     if (filters.showTrendingOnly) {
//       params.append("trending_only", "true");
//     }
    
//     if (filters.sortBy) {
//       params.append("sort_by", filters.sortBy);
//     }
    
//     return params.toString();
//   };

//   useEffect(() => {
//     const fetchAll = async () => {
//       setIsLoading(true);
//       try {
//         const table = filters.table || selectedSource;
//         const queryParams = buildQueryParams(table);
        
//         if (selectedSource === "both" || table === "both") {
//           const flipkartParams = buildQueryParams("flipkart");
//           const amazonParams = buildQueryParams("amazon_reviews");
          
//           const [
//             flipkartRes,
//             amazonRes,
//             flipkartCatRes,
//             amazonCatRes,
//             ratingsRes,
//             sentimentRes,
//             rapidApiRes,
//           ] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=flipkart&n=10&${flipkartParams}`),
//             fetch(`${BASE_URL}/top?table=amazon_reviews&n=10&${amazonParams}`),
//             fetch(`${BASE_URL}/flipkart/categories?${flipkartParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/categories?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/ratings?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi/top-sales?limit=10&${amazonParams}`),
//           ]);

//           const [
//             flipkartJson,
//             amazonJson,
//             flipkartCatJson,
//             amazonCatJson,
//             ratingsJson,
//             sentimentJson,
//             rapidApiJson,
//           ] = await Promise.all([
//             flipkartRes.json(),
//             amazonRes.json(),
//             flipkartCatRes.json(),
//             amazonCatRes.json(),
//             ratingsRes.json(),
//             sentimentRes.json(),
//             rapidApiRes.json(),
//           ]);

//           setFlipkartProducts(flipkartJson.data || []);
//           setAmazonProducts(amazonJson.data || []);
//           setFlipkartCategories(flipkartCatJson || []);
//           setAmazonCategories(amazonCatJson || []);
//           setRatings(ratingsJson || []);
//           setSentiments(sentimentJson || []);
//           setRapidApiProducts(rapidApiJson.data || []);
//         } else if (table === "amazon_reviews") {
//           const [productsRes, categoriesRes, ratingsRes, sentimentRes, rapidApiRes] =
//             await Promise.all([
//               fetch(`${BASE_URL}/top?table=amazon_reviews&n=10&${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi_amazon_products/categories?${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi_amazon_products/ratings?${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment?${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi/top-sales?limit=10&${queryParams}`),
//             ]);

//           const [productsJson, categoriesJson, ratingsJson, sentimentJson, rapidApiJson] =
//             await Promise.all([
//               productsRes.json(),
//               categoriesRes.json(),
//               ratingsRes.json(),
//               sentimentRes.json(),
//               rapidApiRes.json(),
//             ]);

//           setFlipkartProducts([]);
//           setAmazonProducts(productsJson.data || []);
//           setFlipkartCategories([]);
//           setAmazonCategories(categoriesJson || []);
//           setRatings(ratingsJson || []);
//           setSentiments(sentimentJson || []);
//           setRapidApiProducts(rapidApiJson.data || []);
//         } else {
//           const [productsRes, categoryRes] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=flipkart&n=10&${queryParams}`),
//             fetch(`${BASE_URL}/flipkart/categories?${queryParams}`),
//           ]);

//           const [productsJson, categoryJson] = await Promise.all([
//             productsRes.json(),
//             categoryRes.json(),
//           ]);

//           setFlipkartProducts(productsJson.data || []);
//           setAmazonProducts([]);
//           setFlipkartCategories(categoryJson || []);
//           setAmazonCategories([]);
//           setRatings([]);
//           setSentiments([]);
//           setRapidApiProducts([]);
//         }
//       } catch (error) {
//         console.error("Error fetching chart data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchAll();
//   }, [selectedSource, filters]);

//   // 🔹 AI Summaries
//   const { summary: flipkartProductsSummary, loading: flipkartProductsLoading } =
//     useAISummary("Summarize Flipkart top products by rating", "flipkart", flipkartProducts, flipkartProducts.length);

//   const { summary: flipkartReviewsSummary, loading: flipkartReviewsLoading } =
//     useAISummary("Summarize Flipkart products with most reviews", "flipkart", flipkartProducts, flipkartProducts.length);

//   const { summary: flipkartCategoriesSummary, loading: flipkartCategoriesLoading } =
//     useAISummary("Summarize Flipkart category distribution", "flipkart", flipkartCategories, flipkartCategories.length);

//   const { summary: amazonCategoriesSummary, loading: amazonCategoriesLoading } =
//     useAISummary("Summarize Amazon category distribution", "rapidapi_amazon_products", amazonCategories, amazonCategories.length);

//   const { summary: ratingsSummary, loading: ratingsLoading } =
//     useAISummary("Summarize rating distribution", "rapidapi_amazon_products", ratings, ratings.length);

//   const { summary: sentimentsSummary, loading: sentimentsLoading } =
//     useAISummary("Summarize sentiment distribution", "rapidapi_amazon_products", sentiments, sentiments.length);

//   const { summary: rapidApiSalesSummary, loading: rapidApiSalesLoading } =
//     useAISummary("Summarize top selling products by daily sales volume from RapidAPI data", "rapidapi_amazon_products", rapidApiProducts, rapidApiProducts.length);

//   // 🔹 Click Handlers for Navigation
//   const handleFlipkartProductClick = (index: number) => {
//     const product = flipkartProducts[index];
//     if (product && product.title) {
//       const productName = encodeURIComponent(product.title);
//       // ✅ Dashboard se aa rahe hain, toh from=dashboard add karo
//       console.log("Navigating to Flipkart product:", productName);
//       setLocation(`/product/${productName}?from=dashboard&source=flipkart`);
//     }
//   };

//   const handleFlipkartCategoryClick = (index: number) => {
//     const category = flipkartCategories[index];
//     if (category && category.category) {
//       const categoryName = encodeURIComponent(category.category);
//       setLocation(`/category-products/flipkart/${categoryName}?page=1`);
//     }
//   };

//   const handleAmazonCategoryClick = (index: number) => {
//     const category = amazonCategories[index];
//     if (category && (category.category || category.category_name)) {
//       const categoryName = encodeURIComponent(category.category || category.category_name);
//       setLocation(`/category-products/amazon/${categoryName}?page=1`);
//     }
//   };

//   const handleRapidApiProductClick = (index: number) => {
//     const product = rapidApiProducts[index];
//     if (product && product.product_title) {
//       const productName = encodeURIComponent(product.product_title);
//       // ✅ Dashboard se aa rahe hain, toh from=dashboard add karo
//       console.log("Navigating to Amazon product:", productName);
//       setLocation(`/product/${productName}?from=dashboard&source=amazon`);
//     }
//   };

//   // 🔹 Common Chart Options with Click Events
//   const createBarOptions = (clickHandler: (index: number) => void) => ({
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: { 
//       legend: { display: true, position: "bottom" as const },
//       tooltip: {
//         callbacks: {
//           afterLabel: () => "Click to view details"
//         }
//       }
//     },
//     onClick: (_event: any, elements: any[]) => {
//       if (elements.length > 0) {
//         const index = elements[0].index;
//         clickHandler(index);
//       }
//     },
//     onHover: (event: any, elements: any[]) => {
//       const canvas = event.native?.target;
//       if (canvas) {
//         canvas.style.cursor = elements.length > 0 ? 'pointer' : 'default';
//       }
//     }
//   });

//   const createDoughnutOptions = (clickHandler?: (index: number) => void) => ({
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: { 
//       legend: { display: true, position: "bottom" as const },
//       tooltip: clickHandler ? {
//         callbacks: {
//           afterLabel: () => "Click to view details"
//         }
//       } : undefined
//     },
//     onClick: clickHandler ? (_event: any, elements: any[]) => {
//       if (elements.length > 0) {
//         const index = elements[0].index;
//         clickHandler(index);
//       }
//     } : undefined,
//     onHover: clickHandler ? (event: any, elements: any[]) => {
//       const canvas = event.native?.target;
//       if (canvas) {
//         canvas.style.cursor = elements.length > 0 ? 'pointer' : 'default';
//       }
//     } : undefined
//   });

//   const truncateName = (name: string) => {
//     const cleaned = name.replace(/"/g, "");
//     return cleaned.substring(0, 30) + (cleaned.length > 30 ? "..." : "");
//   };

//   const flipkartProductsChart = {
//     labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
//     datasets: [
//       {
//         label: "Flipkart Rating",
//         data: flipkartProducts.map((p) => p.rating || 0),
//         backgroundColor: "hsl(142,76%,36%)",
//       },
//     ],
//   };

//   const flipkartReviewsChart = {
//     labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
//     datasets: [
//       {
//         label: "Flipkart Reviews",
//         data: flipkartProducts.map((p) => p.reviews || 0),
//         backgroundColor: "hsl(221,83%,53%)",
//       },
//     ],
//   };

//   const flipkartCategoriesChart = {
//     labels: flipkartCategories.map((c) => c.category || "Unknown"),
//     datasets: [
//       {
//         label: "Flipkart Products",
//         data: flipkartCategories.map((c) => c.count || 0),
//         backgroundColor: "hsl(142,76%,36%)",
//       },
//     ],
//   };

//   const amazonCategoriesChart = {
//     labels: amazonCategories.map((c) => c.category || c.category_name || "Unknown"),
//     datasets: [
//       {
//         label: "Amazon Products",
//         data: amazonCategories.map((c) => c.count || c.product_count || 0),
//         borderRadius: 8,
//         backgroundColor: "rgba(245, 158, 11, 0.7)",
//       },
//     ],
//   };

//   const ratingsChart = {
//     labels: ratings.map((r) => `${r.rating}★`),
//     datasets: [
//       {
//         label: "Number of Products",
//         data: ratings.map((r) => r.count || 0),
//         backgroundColor: "rgba(59,130,246,0.7)",
//       },
//     ],
//   };

//   const sentimentsChart = {
//     labels: sentiments.map((s) => s.sentiment || "Unknown"),
//     datasets: [
//       {
//         label: "Sentiment Count",
//         data: sentiments.map((s) => s.count || 0),
//         backgroundColor: [
//           "rgba(34,197,94,0.9)",
//           "rgba(234,179,8,0.9)",
//           "rgba(239,68,68,0.9)",
//         ],
//         borderColor: "rgba(255,255,255,1)",
//         borderWidth: 2,
//       },
//     ],
//   };

//   const rapidApiSalesChart = {
//     labels: rapidApiProducts.map((p) => truncateName(p.product_title || "Unknown")),
//     datasets: [
//       {
//         label: "Daily Sales",
//         data: rapidApiProducts.map((p) => p.daily_sales || 0),
//         backgroundColor: "rgba(59,130,246,0.8)",
//         borderRadius: 10,
//       },
//     ],
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//       {flipkartProducts.length > 0 && (
//         <>
//           <ChartCard 
//             title="Top Flipkart Products by Rating" 
//             isLoading={isLoading}
//             summary={flipkartProductsSummary}
//             summaryLoading={flipkartProductsLoading}
//           >
//             <Bar data={flipkartProductsChart} options={createBarOptions(handleFlipkartProductClick)} />
//           </ChartCard>

//           <ChartCard 
//             title="Flipkart Products with Most Reviews" 
//             isLoading={isLoading}
//             summary={flipkartReviewsSummary}
//             summaryLoading={flipkartReviewsLoading}
//           >
//             <Bar data={flipkartReviewsChart} options={createBarOptions(handleFlipkartProductClick)} />
//           </ChartCard>

//           <ChartCard 
//             title="Flipkart Categories Distribution" 
//             isLoading={isLoading}
//             summary={flipkartCategoriesSummary}
//             summaryLoading={flipkartCategoriesLoading}
//           >
//             <Bar data={flipkartCategoriesChart} options={createBarOptions(handleFlipkartCategoryClick)} />
//           </ChartCard>
//         </>
//       )}

//       {amazonCategories.length > 0 && (
//         <ChartCard 
//           title="Amazon Categories Distribution" 
//           isLoading={isLoading}
//           summary={amazonCategoriesSummary}
//           summaryLoading={amazonCategoriesLoading}
//         >
//           <Bar data={amazonCategoriesChart} options={createBarOptions(handleAmazonCategoryClick)} />
//         </ChartCard>
//       )}

//       {ratings.length > 0 && (
//         <ChartCard 
//           title="Rating Distribution (Amazon)" 
//           isLoading={isLoading}
//           summary={ratingsSummary}
//           summaryLoading={ratingsLoading}
//         >
//           <Bar data={ratingsChart} options={createBarOptions(() => {})} />
//         </ChartCard>
//       )}

//       {sentiments.length > 0 && (
//         <ChartCard 
//           title="Sentiment Distribution (Amazon)" 
//           isLoading={isLoading}
//           summary={sentimentsSummary}
//           summaryLoading={sentimentsLoading}
//         >
//           <Doughnut data={sentimentsChart} options={createDoughnutOptions()} />
//         </ChartCard>
//       )}

//       {rapidApiProducts.length > 0 && (
//         <ChartCard 
//           title="Top Products by Daily Sales" 
//           isLoading={isLoading}
//           summary={rapidApiSalesSummary}
//           summaryLoading={rapidApiSalesLoading}
//         >
//           <Bar data={rapidApiSalesChart} options={createBarOptions(handleRapidApiProductClick)} />
//         </ChartCard>
//       )}
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { useLocation } from "wouter";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Skeleton } from "@/components/ui/skeleton";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar, Doughnut } from "react-chartjs-2";
// import { useFilters } from "@/components/dashboard/FiltersContext";
// import { useAISummary } from "@/hooks/useAISummary";

// ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// interface ChartCardProps {
//   title: string;
//   children: React.ReactNode;
//   isLoading?: boolean;
//   summary?: string;
//   summaryLoading?: boolean;
// }

// function ChartCard({ title, children, isLoading, summary, summaryLoading }: ChartCardProps) {
//   return (
//     <Card className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
//       <CardHeader className="flex flex-row items-center justify-between pb-4">
//         <CardTitle className="text-lg font-semibold">{title}</CardTitle>
//         <Badge variant="secondary" className="text-xs">
//           Live Data
//         </Badge>
//       </CardHeader>
//       <CardContent className="p-0">
//         <div className="chart-container relative h-80 w-full">
//           {isLoading ? <Skeleton className="w-full h-full" /> : children}
//         </div>
//         {summaryLoading ? (
//           <div className="mt-3 text-sm text-muted-foreground italic">
//             Generating Smart summary...
//           </div>
//         ) : summary ? (
//           <div className="mt-3 text-sm font-medium p-3 bg-muted/50 rounded-lg">
//             {summary}
//           </div>
//         ) : null}
//       </CardContent>
//     </Card>
//   );
// }

// export default function ChartsGrid({ selectedSource }: { selectedSource: string }) {
//   const BASE_URL = "http://localhost:8000";
//   const { filters } = useFilters();
//   const [, setLocation] = useLocation();

//   const [flipkartProducts, setFlipkartProducts] = useState<any[]>([]);
//   const [amazonProducts, setAmazonProducts] = useState<any[]>([]);
//   const [flipkartCategories, setFlipkartCategories] = useState<any[]>([]);
//   const [amazonCategories, setAmazonCategories] = useState<any[]>([]);
//   const [ratings, setRatings] = useState<any[]>([]);
//   const [sentiments, setSentiments] = useState<any[]>([]);
//   const [rapidApiProducts, setRapidApiProducts] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const buildQueryParams = (table: string) => {
//     const params = new URLSearchParams();
    
//     if (filters.category && filters.category !== "All Categories") {
//       params.append("category", filters.category);
//     }
    
//     if (filters.priceRange[0] > 0) {
//       params.append("min_price", filters.priceRange[0].toString());
//     }
//     if (filters.priceRange[1] < 5000000) {
//       params.append("max_price", filters.priceRange[1].toString());
//     }
    
//     if (filters.rating > 0) {
//       params.append("min_rating", filters.rating.toString());
//     }
    
//     if (filters.dateRange !== "all") {
//       params.append("date_range", filters.dateRange);
//     }
    
//     if (filters.showTrendingOnly) {
//       params.append("trending_only", "true");
//     }
    
//     if (filters.sortBy) {
//       params.append("sort_by", filters.sortBy);
//     }
    
//     return params.toString();
//   };

//   useEffect(() => {
//     const fetchAll = async () => {
//       setIsLoading(true);
//       try {
//         const table = filters.table || selectedSource;
//         const queryParams = buildQueryParams(table);
        
//         if (selectedSource === "both" || table === "both") {
//           const flipkartParams = buildQueryParams("flipkart");
//           const amazonParams = buildQueryParams("amazon_reviews");
          
//           const [
//             flipkartRes,
//             amazonRes,
//             flipkartCatRes,
//             amazonCatRes,
//             ratingsRes,
//             sentimentRes,
//             rapidApiRes,
//           ] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=flipkart&n=10&${flipkartParams}`),
//             fetch(`${BASE_URL}/top?table=amazon_reviews&n=10&${amazonParams}`),
//             fetch(`${BASE_URL}/flipkart/categories?${flipkartParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/categories?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/ratings?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi/top-sales?limit=10&${amazonParams}`),
//           ]);

//           const [
//             flipkartJson,
//             amazonJson,
//             flipkartCatJson,
//             amazonCatJson,
//             ratingsJson,
//             sentimentJson,
//             rapidApiJson,
//           ] = await Promise.all([
//             flipkartRes.json(),
//             amazonRes.json(),
//             flipkartCatRes.json(),
//             amazonCatRes.json(),
//             ratingsRes.json(),
//             sentimentRes.json(),
//             rapidApiRes.json(),
//           ]);

//           setFlipkartProducts(flipkartJson.data || []);
//           setAmazonProducts(amazonJson.data || []);
//           setFlipkartCategories(flipkartCatJson || []);
//           setAmazonCategories(amazonCatJson || []);
//           setRatings(ratingsJson || []);
//           setSentiments(sentimentJson || []);
//           setRapidApiProducts(rapidApiJson.data || []);
//         } else if (table === "amazon_reviews") {
//           const [productsRes, categoriesRes, ratingsRes, sentimentRes, rapidApiRes] =
//             await Promise.all([
//               fetch(`${BASE_URL}/top?table=amazon_reviews&n=10&${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi_amazon_products/categories?${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi_amazon_products/ratings?${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment?${queryParams}`),
//               fetch(`${BASE_URL}/rapidapi/top-sales?limit=10&${queryParams}`),
//             ]);

//           const [productsJson, categoriesJson, ratingsJson, sentimentJson, rapidApiJson] =
//             await Promise.all([
//               productsRes.json(),
//               categoriesRes.json(),
//               ratingsRes.json(),
//               sentimentRes.json(),
//               rapidApiRes.json(),
//             ]);

//           setFlipkartProducts([]);
//           setAmazonProducts(productsJson.data || []);
//           setFlipkartCategories([]);
//           setAmazonCategories(categoriesJson || []);
//           setRatings(ratingsJson || []);
//           setSentiments(sentimentJson || []);
//           setRapidApiProducts(rapidApiJson.data || []);
//         } else {
//           const [productsRes, categoryRes] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=flipkart&n=10&${queryParams}`),
//             fetch(`${BASE_URL}/flipkart/categories?${queryParams}`),
//           ]);

//           const [productsJson, categoryJson] = await Promise.all([
//             productsRes.json(),
//             categoryRes.json(),
//           ]);

//           setFlipkartProducts(productsJson.data || []);
//           setAmazonProducts([]);
//           setFlipkartCategories(categoryJson || []);
//           setAmazonCategories([]);
//           setRatings([]);
//           setSentiments([]);
//           setRapidApiProducts([]);
//         }
//       } catch (error) {
//         console.error("Error fetching chart data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchAll();
//   }, [selectedSource, filters]);

//   // 🔹 AI Summaries
//   // 1. Flipkart Products by Rating
//   const { summary: flipkartProductsSummary, loading: flipkartProductsLoading } =
//     useAISummary("Summarize Flipkart top products by rating", "flipkart", flipkartProducts, flipkartProducts.length, filters);

//   // 2. Flipkart Reviews
//   const { summary: flipkartReviewsSummary, loading: flipkartReviewsLoading } =
//     useAISummary("Summarize Flipkart products with most reviews", "flipkart", flipkartProducts, flipkartProducts.length, filters);

//   // 3. Flipkart Categories
//   const { summary: flipkartCategoriesSummary, loading: flipkartCategoriesLoading } =
//     useAISummary("Summarize Flipkart category distribution", "flipkart", flipkartCategories, flipkartCategories.length, filters);

//   // 4. Amazon Categories
//   const { summary: amazonCategoriesSummary, loading: amazonCategoriesLoading } =
//     useAISummary("Summarize Amazon category distribution", "rapidapi_amazon_products", amazonCategories, amazonCategories.length, filters);

//   // 5. Ratings Distribution
//   const { summary: ratingsSummary, loading: ratingsLoading } =
//     useAISummary("Summarize rating distribution", "rapidapi_amazon_products", ratings, ratings.length, filters);

//   // 6. Sentiments Distribution
//   const { summary: sentimentsSummary, loading: sentimentsLoading } =
//     useAISummary("Summarize sentiment distribution", "rapidapi_amazon_products", sentiments, sentiments.length, filters);

//   // 7. RapidAPI Sales
//   const { summary: rapidApiSalesSummary, loading: rapidApiSalesLoading } =
//     useAISummary("Summarize top selling products by daily sales volume from RapidAPI data", "rapidapi_amazon_products", rapidApiProducts, rapidApiProducts.length, filters);
//   // const { summary: flipkartProductsSummary, loading: flipkartProductsLoading } =
//   //   useAISummary("Summarize Flipkart top products by rating", "flipkart", flipkartProducts, flipkartProducts.length);

//   // const { summary: flipkartReviewsSummary, loading: flipkartReviewsLoading } =
//   //   useAISummary("Summarize Flipkart products with most reviews", "flipkart", flipkartProducts, flipkartProducts.length);

//   // const { summary: flipkartCategoriesSummary, loading: flipkartCategoriesLoading } =
//   //   useAISummary("Summarize Flipkart category distribution", "flipkart", flipkartCategories, flipkartCategories.length);

//   // const { summary: amazonCategoriesSummary, loading: amazonCategoriesLoading } =
//   //   useAISummary("Summarize Amazon category distribution", "rapidapi_amazon_products", amazonCategories, amazonCategories.length);

//   // const { summary: ratingsSummary, loading: ratingsLoading } =
//   //   useAISummary("Summarize rating distribution", "rapidapi_amazon_products", ratings, ratings.length);

//   // const { summary: sentimentsSummary, loading: sentimentsLoading } =
//   //   useAISummary("Summarize sentiment distribution", "rapidapi_amazon_products", sentiments, sentiments.length);

//   // const { summary: rapidApiSalesSummary, loading: rapidApiSalesLoading } =
//   //   useAISummary("Summarize top selling products by daily sales volume from RapidAPI data", "rapidapi_amazon_products", rapidApiProducts, rapidApiProducts.length);

//   // 🔹 Click Handlers for Navigation
//   const handleFlipkartProductClick = (index: number) => {
//     const product = flipkartProducts[index];
//     if (product && product.title) {
//       const productName = encodeURIComponent(product.title);
//       console.log("Navigating to Flipkart product:", productName);
//       setLocation(`/product/${productName}?from=dashboard&source=flipkart`);
//     }
//   };

//   const handleFlipkartCategoryClick = (index: number) => {
//     const category = flipkartCategories[index];
//     if (category && category.category) {
//       const categoryName = encodeURIComponent(category.category);
//       console.log("Navigating to Flipkart category:", categoryName);
//       setLocation(`/category-products/flipkart/${categoryName}?page=1&from=dashboard`);
//     }
//   };

//   const handleAmazonCategoryClick = (index: number) => {
//     const category = amazonCategories[index];
//     if (category && (category.category || category.category_name)) {
//       const categoryName = encodeURIComponent(category.category || category.category_name);
//       console.log("Navigating to Amazon category:", categoryName);
//       setLocation(`/category-products/amazon/${categoryName}?page=1&from=dashboard`);
//     }
//   };

//   const handleRapidApiProductClick = (index: number) => {
//     const product = rapidApiProducts[index];
//     if (product && product.product_title) {
//       const productName = encodeURIComponent(product.product_title);
//       console.log("Navigating to Amazon product:", productName);
//       setLocation(`/product/${productName}?from=dashboard&source=amazon`);
//     }
//   };

//   // 🔹 Common Chart Options with Click Events
//   const createBarOptions = (clickHandler: (index: number) => void) => ({
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: { 
//       legend: { display: true, position: "bottom" as const },
//       tooltip: {
//         callbacks: {
//           afterLabel: () => "Click to view details"
//         }
//       }
//     },
//     onClick: (_event: any, elements: any[]) => {
//       if (elements.length > 0) {
//         const index = elements[0].index;
//         clickHandler(index);
//       }
//     },
//     onHover: (event: any, elements: any[]) => {
//       const canvas = event.native?.target;
//       if (canvas) {
//         canvas.style.cursor = elements.length > 0 ? 'pointer' : 'default';
//       }
//     }
//   });

//   const createDoughnutOptions = (clickHandler?: (index: number) => void) => ({
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: { 
//       legend: { display: true, position: "bottom" as const },
//       tooltip: clickHandler ? {
//         callbacks: {
//           afterLabel: () => "Click to view details"
//         }
//       } : undefined
//     },
//     onClick: clickHandler ? (_event: any, elements: any[]) => {
//       if (elements.length > 0) {
//         const index = elements[0].index;
//         clickHandler(index);
//       }
//     } : undefined,
//     onHover: clickHandler ? (event: any, elements: any[]) => {
//       const canvas = event.native?.target;
//       if (canvas) {
//         canvas.style.cursor = elements.length > 0 ? 'pointer' : 'default';
//       }
//     } : undefined
//   });

//   const truncateName = (name: string) => {
//     const cleaned = name.replace(/"/g, "");
//     return cleaned.substring(0, 30) + (cleaned.length > 30 ? "..." : "");
//   };

//   const flipkartProductsChart = {
//     labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
//     datasets: [
//       {
//         label: "Flipkart Rating",
//         data: flipkartProducts.map((p) => p.rating || 0),
//         backgroundColor: "hsl(142,76%,36%)",
//       },
//     ],
//   };

//   const flipkartReviewsChart = {
//     labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
//     datasets: [
//       {
//         label: "Flipkart Reviews",
//         data: flipkartProducts.map((p) => p.reviews || 0),
//         backgroundColor: "hsl(221,83%,53%)",
//       },
//     ],
//   };

//   const flipkartCategoriesChart = {
//     labels: flipkartCategories.map((c) => c.category || "Unknown"),
//     datasets: [
//       {
//         label: "Flipkart Products",
//         data: flipkartCategories.map((c) => c.count || 0),
//         backgroundColor: "hsl(142,76%,36%)",
//       },
//     ],
//   };

//   const amazonCategoriesChart = {
//     labels: amazonCategories.map((c) => c.category || c.category_name || "Unknown"),
//     datasets: [
//       {
//         label: "Amazon Products",
//         data: amazonCategories.map((c) => c.count || c.product_count || 0),
//         borderRadius: 8,
//         backgroundColor: "rgba(245, 158, 11, 0.7)",
//       },
//     ],
//   };

//   const ratingsChart = {
//     labels: ratings.map((r) => `${r.rating}★`),
//     datasets: [
//       {
//         label: "Number of Products",
//         data: ratings.map((r) => r.count || 0),
//         backgroundColor: "rgba(59,130,246,0.7)",
//       },
//     ],
//   };

//   const sentimentsChart = {
//     labels: sentiments.map((s) => s.sentiment || "Unknown"),
//     datasets: [
//       {
//         label: "Sentiment Count",
//         data: sentiments.map((s) => s.count || 0),
//         backgroundColor: [
//           "rgba(34,197,94,0.9)",
//           "rgba(234,179,8,0.9)",
//           "rgba(239,68,68,0.9)",
//         ],
//         borderColor: "rgba(255,255,255,1)",
//         borderWidth: 2,
//       },
//     ],
//   };

//   const rapidApiSalesChart = {
//     labels: rapidApiProducts.map((p) => truncateName(p.product_title || "Unknown")),
//     datasets: [
//       {
//         label: "Daily Sales",
//         data: rapidApiProducts.map((p) => p.daily_sales || 0),
//         backgroundColor: "rgba(59,130,246,0.8)",
//         borderRadius: 10,
//       },
//     ],
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//       {flipkartProducts.length > 0 && (
//         <>
//           <ChartCard 
//             title="Top Flipkart Products by Rating" 
//             isLoading={isLoading}
//             summary={flipkartProductsSummary}
//             summaryLoading={flipkartProductsLoading}
//           >
//             <Bar data={flipkartProductsChart} options={createBarOptions(handleFlipkartProductClick)} />
//           </ChartCard>

//           <ChartCard 
//             title="Flipkart Products with Most Reviews" 
//             isLoading={isLoading}
//             summary={flipkartReviewsSummary}
//             summaryLoading={flipkartReviewsLoading}
//           >
//             <Bar data={flipkartReviewsChart} options={createBarOptions(handleFlipkartProductClick)} />
//           </ChartCard>

//           <ChartCard 
//             title="Flipkart Categories Distribution" 
//             isLoading={isLoading}
//             summary={flipkartCategoriesSummary}
//             summaryLoading={flipkartCategoriesLoading}
//           >
//             <Bar data={flipkartCategoriesChart} options={createBarOptions(handleFlipkartCategoryClick)} />
//           </ChartCard>
//         </>
//       )}

//       {amazonCategories.length > 0 && (
//         <ChartCard 
//           title="Amazon Categories Distribution" 
//           isLoading={isLoading}
//           summary={amazonCategoriesSummary}
//           summaryLoading={amazonCategoriesLoading}
//         >
//           <Bar data={amazonCategoriesChart} options={createBarOptions(handleAmazonCategoryClick)} />
//         </ChartCard>
//       )}

//       {ratings.length > 0 && (
//         <ChartCard 
//           title="Rating Distribution (Amazon)" 
//           isLoading={isLoading}
//           summary={ratingsSummary}
//           summaryLoading={ratingsLoading}
//         >
//           <Bar data={ratingsChart} options={createBarOptions(() => {})} />
//         </ChartCard>
//       )}

//       {sentiments.length > 0 && (
//         <ChartCard 
//           title="Sentiment Distribution (Amazon)" 
//           isLoading={isLoading}
//           summary={sentimentsSummary}
//           summaryLoading={sentimentsLoading}
//         >
//           <Doughnut data={sentimentsChart} options={createDoughnutOptions()} />
//         </ChartCard>
//       )}

//       {rapidApiProducts.length > 0 && (
//         <ChartCard 
//           title="Top Products by Daily Sales" 
//           isLoading={isLoading}
//           summary={rapidApiSalesSummary}
//           summaryLoading={rapidApiSalesLoading}
//         >
//           <Bar data={rapidApiSalesChart} options={createBarOptions(handleRapidApiProductClick)} />
//         </ChartCard>
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { useFilters } from "@/components/dashboard/FiltersContext";
import { useAISummary } from "@/hooks/useAISummary";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  isLoading?: boolean;
  summary?: string;
  summaryLoading?: boolean;
}

function ChartCard({ title, children, isLoading, summary, summaryLoading }: ChartCardProps) {
  return (
    <Card className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <Badge variant="secondary" className="text-xs">
          Live Data
        </Badge>
      </CardHeader>
      <CardContent className="p-0">
        <div className="chart-container relative h-80 w-full">
          {isLoading ? <Skeleton className="w-full h-full" /> : children}
        </div>
        {summaryLoading ? (
          <div className="mt-3 text-sm text-muted-foreground italic">
            Generating Smart summary...
          </div>
        ) : summary ? (
          <div className="mt-3 text-sm font-medium p-3 bg-muted/50 rounded-lg">
            {summary}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

export default function ChartsGrid({ selectedSource }: { selectedSource: string }) {
  const BASE_URL = "http://localhost:8000";
  const { filters } = useFilters();
  const [, setLocation] = useLocation();

  const [flipkartProducts, setFlipkartProducts] = useState<any[]>([]);
  const [amazonProducts, setAmazonProducts] = useState<any[]>([]);
  const [flipkartCategories, setFlipkartCategories] = useState<any[]>([]);
  const [amazonCategories, setAmazonCategories] = useState<any[]>([]);
  const [ratings, setRatings] = useState<any[]>([]);
  const [sentiments, setSentiments] = useState<any[]>([]);
  const [rapidApiProducts, setRapidApiProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const buildQueryParams = (table: string) => {
    const params = new URLSearchParams();
    
    if (filters.category && filters.category !== "All Categories") {
      params.append("category", filters.category);
    }
    
    if (filters.priceRange[0] > 0) {
      params.append("min_price", filters.priceRange[0].toString());
    }
    if (filters.priceRange[1] < 5000000) {
      params.append("max_price", filters.priceRange[1].toString());
    }
    
    if (filters.rating > 0) {
      params.append("min_rating", filters.rating.toString());
    }
    
    if (filters.dateRange !== "all") {
      params.append("date_range", filters.dateRange);
    }
    
    if (filters.showTrendingOnly) {
      params.append("trending_only", "true");
    }
    
    if (filters.sortBy) {
      params.append("sort_by", filters.sortBy);
    }
    
    return params.toString();
  };

  useEffect(() => {
    const fetchAll = async () => {
      setIsLoading(true);
      try {
        const table = filters.table || selectedSource;
        const queryParams = buildQueryParams(table);
        const topN = filters.topN || 10; // Use topN from filters
        
        if (selectedSource === "both" || table === "both") {
          const flipkartParams = buildQueryParams("flipkart");
          const amazonParams = buildQueryParams("amazon_reviews");
          
          const [
            flipkartRes,
            amazonRes,
            flipkartCatRes,
            amazonCatRes,
            ratingsRes,
            sentimentRes,
            rapidApiRes,
          ] = await Promise.all([
            fetch(`${BASE_URL}/top?table=flipkart&n=${topN}&${flipkartParams}`),
            fetch(`${BASE_URL}/top?table=amazon_reviews&n=${topN}&${amazonParams}`),
            fetch(`${BASE_URL}/flipkart/categories?${flipkartParams}`),
            fetch(`${BASE_URL}/rapidapi_amazon_products/categories?${amazonParams}`),
            fetch(`${BASE_URL}/rapidapi_amazon_products/ratings?${amazonParams}`),
            fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment?${amazonParams}`),
            fetch(`${BASE_URL}/rapidapi/top-sales?limit=${topN}&${amazonParams}`),
          ]);

          const [
            flipkartJson,
            amazonJson,
            flipkartCatJson,
            amazonCatJson,
            ratingsJson,
            sentimentJson,
            rapidApiJson,
          ] = await Promise.all([
            flipkartRes.json(),
            amazonRes.json(),
            flipkartCatRes.json(),
            amazonCatRes.json(),
            ratingsRes.json(),
            sentimentRes.json(),
            rapidApiRes.json(),
          ]);

          setFlipkartProducts(flipkartJson.data || []);
          setAmazonProducts(amazonJson.data || []);
          setFlipkartCategories(flipkartCatJson || []);
          setAmazonCategories(amazonCatJson || []);
          setRatings(ratingsJson || []);
          setSentiments(sentimentJson || []);
          setRapidApiProducts(rapidApiJson.data || []);
        } else if (table === "amazon_reviews") {
          const [productsRes, categoriesRes, ratingsRes, sentimentRes, rapidApiRes] =
            await Promise.all([
              fetch(`${BASE_URL}/top?table=amazon_reviews&n=${topN}&${queryParams}`),
              fetch(`${BASE_URL}/rapidapi_amazon_products/categories?${queryParams}`),
              fetch(`${BASE_URL}/rapidapi_amazon_products/ratings?${queryParams}`),
              fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment?${queryParams}`),
              fetch(`${BASE_URL}/rapidapi/top-sales?limit=${topN}&${queryParams}`),
            ]);

          const [productsJson, categoriesJson, ratingsJson, sentimentJson, rapidApiJson] =
            await Promise.all([
              productsRes.json(),
              categoriesRes.json(),
              ratingsRes.json(),
              sentimentRes.json(),
              rapidApiRes.json(),
            ]);

          setFlipkartProducts([]);
          setAmazonProducts(productsJson.data || []);
          setFlipkartCategories([]);
          setAmazonCategories(categoriesJson || []);
          setRatings(ratingsJson || []);
          setSentiments(sentimentJson || []);
          setRapidApiProducts(rapidApiJson.data || []);
        } else {
          const [productsRes, categoryRes] = await Promise.all([
            fetch(`${BASE_URL}/top?table=flipkart&n=${topN}&${queryParams}`),
            fetch(`${BASE_URL}/flipkart/categories?${queryParams}`),
          ]);

          const [productsJson, categoryJson] = await Promise.all([
            productsRes.json(),
            categoryRes.json(),
          ]);

          setFlipkartProducts(productsJson.data || []);
          setAmazonProducts([]);
          setFlipkartCategories(categoryJson || []);
          setAmazonCategories([]);
          setRatings([]);
          setSentiments([]);
          setRapidApiProducts([]);
        }
      } catch (error) {
        console.error("Error fetching chart data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAll();
  }, [selectedSource, filters]);

  // 🔹 AI Summaries
  const { summary: flipkartProductsSummary, loading: flipkartProductsLoading } =
    useAISummary("Summarize Flipkart top products by rating", "flipkart", flipkartProducts, flipkartProducts.length, filters);

  const { summary: flipkartReviewsSummary, loading: flipkartReviewsLoading } =
    useAISummary("Summarize Flipkart products with most reviews", "flipkart", flipkartProducts, flipkartProducts.length, filters);

  const { summary: flipkartCategoriesSummary, loading: flipkartCategoriesLoading } =
    useAISummary("Summarize Flipkart category distribution", "flipkart", flipkartCategories, flipkartCategories.length, filters);

  const { summary: amazonCategoriesSummary, loading: amazonCategoriesLoading } =
    useAISummary("Summarize Amazon category distribution", "rapidapi_amazon_products", amazonCategories, amazonCategories.length, filters);

  const { summary: ratingsSummary, loading: ratingsLoading } =
    useAISummary("Summarize rating distribution", "rapidapi_amazon_products", ratings, ratings.length, filters);

  const { summary: sentimentsSummary, loading: sentimentsLoading } =
    useAISummary("Summarize sentiment distribution", "rapidapi_amazon_products", sentiments, sentiments.length, filters);

  const { summary: rapidApiSalesSummary, loading: rapidApiSalesLoading } =
    useAISummary("Summarize top selling products by daily sales volume from RapidAPI data", "rapidapi_amazon_products", rapidApiProducts, rapidApiProducts.length, filters);

  // 🔹 Click Handlers for Navigation
  const handleFlipkartProductClick = (index: number) => {
    const product = flipkartProducts[index];
    if (product && product.title) {
      const productName = encodeURIComponent(product.title);
      console.log("Navigating to Flipkart product:", productName);
      setLocation(`/product/${productName}?from=dashboard&source=flipkart`);
    }
  };

  const handleFlipkartCategoryClick = (index: number) => {
    const category = flipkartCategories[index];
    if (category && category.category) {
      const categoryName = encodeURIComponent(category.category);
      console.log("Navigating to Flipkart category:", categoryName);
      setLocation(`/category-products/flipkart/${categoryName}?page=1&from=dashboard`);
    }
  };

  const handleAmazonCategoryClick = (index: number) => {
    const category = amazonCategories[index];
    if (category && (category.category || category.category_name)) {
      const categoryName = encodeURIComponent(category.category || category.category_name);
      console.log("Navigating to Amazon category:", categoryName);
      setLocation(`/category-products/amazon/${categoryName}?page=1&from=dashboard`);
    }
  };

  const handleRapidApiProductClick = (index: number) => {
    const product = rapidApiProducts[index];
    if (product && product.product_title) {
      const productName = encodeURIComponent(product.product_title);
      console.log("Navigating to Amazon product:", productName);
      setLocation(`/product/${productName}?from=dashboard&source=amazon`);
    }
  };

  // 🔹 Common Chart Options with Click Events
  const createBarOptions = (clickHandler: (index: number) => void) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: { 
      legend: { display: true, position: "bottom" as const },
      tooltip: {
        callbacks: {
          afterLabel: () => "Click to view details"
        }
      }
    },
    onClick: (_event: any, elements: any[]) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        clickHandler(index);
      }
    },
    onHover: (event: any, elements: any[]) => {
      const canvas = event.native?.target;
      if (canvas) {
        canvas.style.cursor = elements.length > 0 ? 'pointer' : 'default';
      }
    }
  });

  const createDoughnutOptions = (clickHandler?: (index: number) => void) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: { 
      legend: { display: true, position: "bottom" as const },
      tooltip: clickHandler ? {
        callbacks: {
          afterLabel: () => "Click to view details"
        }
      } : undefined
    },
    onClick: clickHandler ? (_event: any, elements: any[]) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        clickHandler(index);
      }
    } : undefined,
    onHover: clickHandler ? (event: any, elements: any[]) => {
      const canvas = event.native?.target;
      if (canvas) {
        canvas.style.cursor = elements.length > 0 ? 'pointer' : 'default';
      }
    } : undefined
  });

  const truncateName = (name: string) => {
    const cleaned = name.replace(/"/g, "");
    return cleaned.substring(0, 30) + (cleaned.length > 30 ? "..." : "");
  };

  const flipkartProductsChart = {
    labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
    datasets: [
      {
        label: "Flipkart Rating",
        data: flipkartProducts.map((p) => p.rating || 0),
        backgroundColor: "hsl(142,76%,36%)",
      },
    ],
  };

  const flipkartReviewsChart = {
    labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
    datasets: [
      {
        label: "Flipkart Reviews",
        data: flipkartProducts.map((p) => p.reviews || 0),
        backgroundColor: "hsl(221,83%,53%)",
      },
    ],
  };

  const flipkartCategoriesChart = {
    labels: flipkartCategories.map((c) => c.category || "Unknown"),
    datasets: [
      {
        label: "Flipkart Products",
        data: flipkartCategories.map((c) => c.count || 0),
        backgroundColor: "hsl(142,76%,36%)",
      },
    ],
  };

  const amazonCategoriesChart = {
    labels: amazonCategories.map((c) => c.category || c.category_name || "Unknown"),
    datasets: [
      {
        label: "Amazon Products",
        data: amazonCategories.map((c) => c.count || c.product_count || 0),
        borderRadius: 8,
        backgroundColor: "rgba(245, 158, 11, 0.7)",
      },
    ],
  };

  const ratingsChart = {
    labels: ratings.map((r) => `${r.rating}★`),
    datasets: [
      {
        label: "Number of Products",
        data: ratings.map((r) => r.count || 0),
        backgroundColor: "rgba(59,130,246,0.7)",
      },
    ],
  };

  const sentimentsChart = {
    labels: sentiments.map((s) => s.sentiment || "Unknown"),
    datasets: [
      {
        label: "Sentiment Count",
        data: sentiments.map((s) => s.count || 0),
        backgroundColor: [
          "rgba(34,197,94,0.9)",
          "rgba(234,179,8,0.9)",
          "rgba(239,68,68,0.9)",
        ],
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 2,
      },
    ],
  };

  const rapidApiSalesChart = {
    labels: rapidApiProducts.map((p) => truncateName(p.product_title || "Unknown")),
    datasets: [
      {
        label: "Daily Sales",
        data: rapidApiProducts.map((p) => p.daily_sales || 0),
        backgroundColor: "rgba(59,130,246,0.8)",
        borderRadius: 10,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {flipkartProducts.length > 0 && (
        <>
          <ChartCard 
            title="Top Flipkart Products by Rating" 
            isLoading={isLoading}
            summary={flipkartProductsSummary}
            summaryLoading={flipkartProductsLoading}
          >
            <Bar data={flipkartProductsChart} options={createBarOptions(handleFlipkartProductClick)} />
          </ChartCard>

          <ChartCard 
            title="Flipkart Products with Most Reviews" 
            isLoading={isLoading}
            summary={flipkartReviewsSummary}
            summaryLoading={flipkartReviewsLoading}
          >
            <Bar data={flipkartReviewsChart} options={createBarOptions(handleFlipkartProductClick)} />
          </ChartCard>

          <ChartCard 
            title="Flipkart Categories Distribution" 
            isLoading={isLoading}
            summary={flipkartCategoriesSummary}
            summaryLoading={flipkartCategoriesLoading}
          >
            <Bar data={flipkartCategoriesChart} options={createBarOptions(handleFlipkartCategoryClick)} />
          </ChartCard>
        </>
      )}

      {amazonCategories.length > 0 && (
        <ChartCard 
          title="Amazon Categories Distribution" 
          isLoading={isLoading}
          summary={amazonCategoriesSummary}
          summaryLoading={amazonCategoriesLoading}
        >
          <Bar data={amazonCategoriesChart} options={createBarOptions(handleAmazonCategoryClick)} />
        </ChartCard>
      )}

      {ratings.length > 0 && (
        <ChartCard 
          title="Rating Distribution (Amazon)" 
          isLoading={isLoading}
          summary={ratingsSummary}
          summaryLoading={ratingsLoading}
        >
          <Bar data={ratingsChart} options={createBarOptions(() => {})} />
        </ChartCard>
      )}

      {sentiments.length > 0 && (
        <ChartCard 
          title="Sentiment Distribution (Amazon)" 
          isLoading={isLoading}
          summary={sentimentsSummary}
          summaryLoading={sentimentsLoading}
        >
          <Doughnut data={sentimentsChart} options={createDoughnutOptions()} />
        </ChartCard>
      )}

      {rapidApiProducts.length > 0 && (
        <ChartCard 
          title="Top Products by Daily Sales" 
          isLoading={isLoading}
          summary={rapidApiSalesSummary}
          summaryLoading={rapidApiSalesLoading}
        >
          <Bar data={rapidApiSalesChart} options={createBarOptions(handleRapidApiProductClick)} />
        </ChartCard>
      )}
    </div>
  );
}

// import { useEffect, useState } from "react";
// import { useLocation } from "wouter";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Skeleton } from "@/components/ui/skeleton";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar, Doughnut } from "react-chartjs-2";
// import { useFilters } from "@/components/dashboard/FiltersContext";
// import { useAISummary } from "@/hooks/useAISummary";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// interface ChartCardProps {
//   title: string;
//   description?: string;
//   children: React.ReactNode;
//   isLoading?: boolean;
//   summary?: string;
//   summaryLoading?: boolean;
// }

// function ChartCard({ title, description, children, isLoading, summary, summaryLoading }: ChartCardProps) {
//   return (
//     <Card className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
//       <CardHeader className="flex flex-row items-center justify-between pb-4">
//         <div>
//           <CardTitle className="text-lg font-semibold">{title}</CardTitle>
//           {description && (
//             <p className="text-sm text-muted-foreground mt-1">{description}</p>
//           )}
//         </div>
//         <Badge variant="secondary" className="text-xs">
//           Live Data
//         </Badge>
//       </CardHeader>
//       <CardContent className="p-0">
//         <div className="chart-container relative h-80 w-full">
//           {isLoading ? <Skeleton className="w-full h-full" /> : children}
//         </div>
//         {summaryLoading ? (
//           <div className="mt-3 text-sm text-muted-foreground italic">
//             Generating AI summary...
//           </div>
//         ) : summary ? (
//           <div className="mt-3 text-sm font-medium p-3 bg-muted/50 rounded-lg">
//             💡 {summary}
//           </div>
//         ) : null}
//       </CardContent>
//     </Card>
//   );
// }

// export default function ChartsGrid({ selectedSource }: { selectedSource: string }) {
//   const BASE_URL = "http://localhost:8000";
//   const { filters } = useFilters();
//   const [, setLocation] = useLocation();

//   // Existing states
//   const [flipkartProducts, setFlipkartProducts] = useState<any[]>([]);
//   const [amazonProducts, setAmazonProducts] = useState<any[]>([]);
//   const [flipkartCategories, setFlipkartCategories] = useState<any[]>([]);
//   const [amazonCategories, setAmazonCategories] = useState<any[]>([]);
//   const [ratings, setRatings] = useState<any[]>([]);
//   const [sentiments, setSentiments] = useState<any[]>([]);
//   const [rapidApiProducts, setRapidApiProducts] = useState<any[]>([]);
  
//   // New Amazon-specific states
//   const [priceDistribution, setPriceDistribution] = useState<any[]>([]);
//   const [salesVsPrice, setSalesVsPrice] = useState<any[]>([]);
//   const [bestsellerCount, setBestsellerCount] = useState<any[]>([]);
//   const [salesEfficiency, setSalesEfficiency] = useState<any[]>([]);
  
//   const [isLoading, setIsLoading] = useState(true);

//   const buildQueryParams = (table: string) => {
//     const params = new URLSearchParams();
    
//     if (filters.category && filters.category !== "All Categories") {
//       params.append("category", filters.category);
//     }
    
//     if (filters.priceRange[0] > 0) {
//       params.append("min_price", filters.priceRange[0].toString());
//     }
//     if (filters.priceRange[1] < 5000000) {
//       params.append("max_price", filters.priceRange[1].toString());
//     }
    
//     if (filters.rating > 0) {
//       params.append("min_rating", filters.rating.toString());
//     }
    
//     if (filters.dateRange !== "all") {
//       params.append("date_range", filters.dateRange);
//     }
    
//     if (filters.showTrendingOnly) {
//       params.append("trending_only", "true");
//     }
    
//     if (filters.sortBy) {
//       params.append("sort_by", filters.sortBy);
//     }
    
//     return params.toString();
//   };

//   useEffect(() => {
//     const fetchAll = async () => {
//       setIsLoading(true);
//       try {
//         const table = filters.table || selectedSource;
//         const queryParams = buildQueryParams(table);
//         const topN = filters.topN || 10;
        
//         if (selectedSource === "both" || table === "both") {
//           const flipkartParams = buildQueryParams("flipkart");
//           const amazonParams = buildQueryParams("amazon_reviews");
          
//           const [
//             flipkartRes,
//             amazonRes,
//             flipkartCatRes,
//             amazonCatRes,
//             ratingsRes,
//             sentimentRes,
//             rapidApiRes,
//             priceDistRes,
//             salesVsPriceRes,
//             bestsellerRes,
//             salesEffRes,
//           ] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=flipkart&n=${topN}&${flipkartParams}`),
//             fetch(`${BASE_URL}/top?table=amazon_reviews&n=${topN}&${amazonParams}`),
//             fetch(`${BASE_URL}/flipkart/categories?${flipkartParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/categories?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/ratings?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi/top-sales?limit=${topN}&${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/price_distribution?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/sales_vs_price_daily?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/bestseller_count?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/sales-efficiency?top_n=10&${amazonParams}`),
//           ]);

//           const [
//             flipkartJson,
//             amazonJson,
//             flipkartCatJson,
//             amazonCatJson,
//             ratingsJson,
//             sentimentJson,
//             rapidApiJson,
//             priceDistJson,
//             salesVsPriceJson,
//             bestsellerJson,
//             salesEffJson,
//           ] = await Promise.all([
//             flipkartRes.json(),
//             amazonRes.json(),
//             flipkartCatRes.json(),
//             amazonCatRes.json(),
//             ratingsRes.json(),
//             sentimentRes.json(),
//             rapidApiRes.json(),
//             priceDistRes.json(),
//             salesVsPriceRes.json(),
//             bestsellerRes.json(),
//             salesEffRes.json(),
//           ]);

//           setFlipkartProducts(flipkartJson.data || []);
//           setAmazonProducts(amazonJson.data || []);
//           setFlipkartCategories(flipkartCatJson || []);
//           setAmazonCategories(amazonCatJson || []);
//           setRatings(ratingsJson || []);
//           setSentiments(sentimentJson || []);
//           setRapidApiProducts(rapidApiJson.data || []);
//           setPriceDistribution(priceDistJson.data || []);
//           setSalesVsPrice(salesVsPriceJson.data || []);
//           setBestsellerCount(bestsellerJson.data || []);
//           setSalesEfficiency(salesEffJson || []);
//         } else if (table === "amazon_reviews") {
//           const [
//             productsRes,
//             categoriesRes,
//             ratingsRes,
//             sentimentRes,
//             rapidApiRes,
//             priceDistRes,
//             salesVsPriceRes,
//             bestsellerRes,
//             salesEffRes,
//           ] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=amazon_reviews&n=${topN}&${queryParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/categories?${queryParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/ratings?${queryParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment?${queryParams}`),
//             fetch(`${BASE_URL}/rapidapi/top-sales?limit=${topN}&${queryParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/price_distribution?${queryParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/sales_vs_price_daily?${queryParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/bestseller_count?${queryParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/sales-efficiency?top_n=10&${queryParams}`),
//           ]);

//           const [
//             productsJson,
//             categoriesJson,
//             ratingsJson,
//             sentimentJson,
//             rapidApiJson,
//             priceDistJson,
//             salesVsPriceJson,
//             bestsellerJson,
//             salesEffJson,
//           ] = await Promise.all([
//             productsRes.json(),
//             categoriesRes.json(),
//             ratingsRes.json(),
//             sentimentRes.json(),
//             rapidApiRes.json(),
//             priceDistRes.json(),
//             salesVsPriceRes.json(),
//             bestsellerRes.json(),
//             salesEffRes.json(),
//           ]);

//           setFlipkartProducts([]);
//           setAmazonProducts(productsJson.data || []);
//           setFlipkartCategories([]);
//           setAmazonCategories(categoriesJson || []);
//           setRatings(ratingsJson || []);
//           setSentiments(sentimentJson || []);
//           setRapidApiProducts(rapidApiJson.data || []);
//           setPriceDistribution(priceDistJson.data || []);
//           setSalesVsPrice(salesVsPriceJson.data || []);
//           setBestsellerCount(bestsellerJson.data || []);
//           setSalesEfficiency(salesEffJson || []);
//         } else {
//           const [productsRes, categoryRes] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=flipkart&n=${topN}&${queryParams}`),
//             fetch(`${BASE_URL}/flipkart/categories?${queryParams}`),
//           ]);

//           const [productsJson, categoryJson] = await Promise.all([
//             productsRes.json(),
//             categoryRes.json(),
//           ]);

//           setFlipkartProducts(productsJson.data || []);
//           setAmazonProducts([]);
//           setFlipkartCategories(categoryJson || []);
//           setAmazonCategories([]);
//           setRatings([]);
//           setSentiments([]);
//           setRapidApiProducts([]);
//           setPriceDistribution([]);
//           setSalesVsPrice([]);
//           setBestsellerCount([]);
//           setSalesEfficiency([]);
//         }
//       } catch (error) {
//         console.error("Error fetching chart data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchAll();
//   }, [selectedSource, filters]);

//   // AI Summaries for existing charts
//   const { summary: flipkartProductsSummary, loading: flipkartProductsLoading } =
//     useAISummary("Summarize Flipkart top products by rating", "flipkart", flipkartProducts, flipkartProducts.length, filters);

//   const { summary: flipkartReviewsSummary, loading: flipkartReviewsLoading } =
//     useAISummary("Summarize Flipkart products with most reviews", "flipkart", flipkartProducts, flipkartProducts.length, filters);

//   const { summary: flipkartCategoriesSummary, loading: flipkartCategoriesLoading } =
//     useAISummary("Summarize Flipkart category distribution", "flipkart", flipkartCategories, flipkartCategories.length, filters);

//   const { summary: amazonCategoriesSummary, loading: amazonCategoriesLoading } =
//     useAISummary("Summarize Amazon category distribution", "rapidapi_amazon_products", amazonCategories, amazonCategories.length, filters);

//   const { summary: ratingsSummary, loading: ratingsLoading } =
//     useAISummary("Summarize rating distribution", "rapidapi_amazon_products", ratings, ratings.length, filters);

//   const { summary: sentimentsSummary, loading: sentimentsLoading } =
//     useAISummary("Summarize sentiment distribution", "rapidapi_amazon_products", sentiments, sentiments.length, filters);

//   const { summary: rapidApiSalesSummary, loading: rapidApiSalesLoading } =
//     useAISummary("Summarize top selling products by daily sales volume", "rapidapi_amazon_products", rapidApiProducts, rapidApiProducts.length, filters);

//   // AI Summaries for new Amazon charts
//   const { summary: priceDistSummary, loading: priceDistLoading } =
//     useAISummary("Analyze price distribution across categories", "rapidapi_amazon_products", priceDistribution, priceDistribution.length, filters);

//   const { summary: salesVsPriceSummary, loading: salesVsPriceLoading } =
//     useAISummary("Analyze relationship between price ranges and daily sales", "rapidapi_amazon_products", salesVsPrice, salesVsPrice.length, filters);

//   const { summary: bestsellerSummary, loading: bestsellerLoading } =
//     useAISummary("Summarize bestseller and Amazon Choice products by category", "rapidapi_amazon_products", bestsellerCount, bestsellerCount.length, filters);

//   const { summary: salesEffSummary, loading: salesEffLoading } =
//     useAISummary("Analyze sales efficiency (sales per review) for top products", "rapidapi_amazon_products", salesEfficiency, salesEfficiency.length, filters);

//   // Click Handlers
//   const handleFlipkartProductClick = (index: number) => {
//     const product = flipkartProducts[index];
//     if (product && product.title) {
//       const productName = encodeURIComponent(product.title);
//       setLocation(`/product/${productName}?from=dashboard&source=flipkart`);
//     }
//   };

//   const handleFlipkartCategoryClick = (index: number) => {
//     const category = flipkartCategories[index];
//     if (category && category.category) {
//       const categoryName = encodeURIComponent(category.category);
//       setLocation(`/category-products/flipkart/${categoryName}?page=1&from=dashboard`);
//     }
//   };

//   const handleAmazonCategoryClick = (index: number) => {
//     const category = amazonCategories[index];
//     if (category && (category.category || category.category_name)) {
//       const categoryName = encodeURIComponent(category.category || category.category_name);
//       setLocation(`/category-products/amazon/${categoryName}?page=1&from=dashboard`);
//     }
//   };

//   const handleRapidApiProductClick = (index: number) => {
//     const product = rapidApiProducts[index];
//     if (product && product.product_title) {
//       const productName = encodeURIComponent(product.product_title);
//       setLocation(`/product/${productName}?from=dashboard&source=amazon`);
//     }
//   };

//   const handleSalesEfficiencyClick = (index: number) => {
//     const product = salesEfficiency[index];
//     if (product && product.product_title) {
//       const productName = encodeURIComponent(product.product_title);
//       setLocation(`/product/${productName}?from=dashboard&source=amazon`);
//     }
//   };

//   // Chart Options
//   const createBarOptions = (clickHandler: (index: number) => void) => ({
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: { 
//       legend: { display: true, position: "bottom" as const },
//       tooltip: {
//         callbacks: {
//           afterLabel: () => "Click to view details"
//         }
//       }
//     },
//     onClick: (_event: any, elements: any[]) => {
//       if (elements.length > 0) {
//         const index = elements[0].index;
//         clickHandler(index);
//       }
//     },
//     onHover: (event: any, elements: any[]) => {
//       const canvas = event.native?.target;
//       if (canvas) {
//         canvas.style.cursor = elements.length > 0 ? 'pointer' : 'default';
//       }
//     }
//   });

//   const createDoughnutOptions = (clickHandler?: (index: number) => void) => ({
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: { 
//       legend: { display: true, position: "bottom" as const },
//       tooltip: clickHandler ? {
//         callbacks: {
//           afterLabel: () => "Click to view details"
//         }
//       } : undefined
//     },
//     onClick: clickHandler ? (_event: any, elements: any[]) => {
//       if (elements.length > 0) {
//         const index = elements[0].index;
//         clickHandler(index);
//       }
//     } : undefined,
//     onHover: clickHandler ? (event: any, elements: any[]) => {
//       const canvas = event.native?.target;
//       if (canvas) {
//         canvas.style.cursor = elements.length > 0 ? 'pointer' : 'default';
//       }
//     } : undefined
//   });

//   const truncateName = (name: string) => {
//     const cleaned = name.replace(/"/g, "");
//     return cleaned.substring(0, 30) + (cleaned.length > 30 ? "..." : "");
//   };

//   // Chart Data Configurations
//   const flipkartProductsChart = {
//     labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
//     datasets: [
//       {
//         label: "Flipkart Rating",
//         data: flipkartProducts.map((p) => p.rating || 0),
//         backgroundColor: "hsl(142,76%,36%)",
//       },
//     ],
//   };

//   const flipkartReviewsChart = {
//     labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
//     datasets: [
//       {
//         label: "Flipkart Reviews",
//         data: flipkartProducts.map((p) => p.reviews || 0),
//         backgroundColor: "hsl(221,83%,53%)",
//       },
//     ],
//   };

//   const flipkartCategoriesChart = {
//     labels: flipkartCategories.map((c) => c.category || "Unknown"),
//     datasets: [
//       {
//         label: "Flipkart Products",
//         data: flipkartCategories.map((c) => c.count || 0),
//         backgroundColor: "hsl(142,76%,36%)",
//       },
//     ],
//   };

//   const amazonCategoriesChart = {
//     labels: amazonCategories.map((c) => c.category || c.category_name || "Unknown"),
//     datasets: [
//       {
//         label: "Amazon Products",
//         data: amazonCategories.map((c) => c.count || c.product_count || 0),
//         borderRadius: 8,
//         backgroundColor: "rgba(245, 158, 11, 0.7)",
//       },
//     ],
//   };

//   const ratingsChart = {
//     labels: ratings.map((r) => `${r.rating}★`),
//     datasets: [
//       {
//         label: "Number of Products",
//         data: ratings.map((r) => r.count || 0),
//         backgroundColor: "rgba(59,130,246,0.7)",
//       },
//     ],
//   };

//   const sentimentsChart = {
//     labels: sentiments.map((s) => s.sentiment || "Unknown"),
//     datasets: [
//       {
//         label: "Sentiment Count",
//         data: sentiments.map((s) => s.count || 0),
//         backgroundColor: [
//           "rgba(34,197,94,0.9)",
//           "rgba(234,179,8,0.9)",
//           "rgba(239,68,68,0.9)",
//         ],
//         borderColor: "rgba(255,255,255,1)",
//         borderWidth: 2,
//       },
//     ],
//   };

//   const rapidApiSalesChart = {
//     labels: rapidApiProducts.map((p) => truncateName(p.product_title || "Unknown")),
//     datasets: [
//       {
//         label: "Daily Sales",
//         data: rapidApiProducts.map((p) => p.daily_sales || 0),
//         backgroundColor: "rgba(59,130,246,0.8)",
//         borderRadius: 10,
//       },
//     ],
//   };

//   // New Amazon Chart Configurations
  
//   // 1. Price Distribution - Group by category and show average price
//   const priceDistChartData = () => {
//     const categoryPrices: { [key: string]: number[] } = {};
    
//     priceDistribution.forEach((item) => {
//       if (!categoryPrices[item.category]) {
//         categoryPrices[item.category] = [];
//       }
//       for (let i = 0; i < item.count; i++) {
//         categoryPrices[item.category].push(item.price);
//       }
//     });

//     const categories = Object.keys(categoryPrices).slice(0, 10);
//     const avgPrices = categories.map(cat => {
//       const prices = categoryPrices[cat];
//       return prices.reduce((a, b) => a + b, 0) / prices.length;
//     });

//     return {
//       labels: categories,
//       datasets: [
//         {
//           label: "Average Price (₹)",
//           data: avgPrices,
//           backgroundColor: "rgba(168, 85, 247, 0.7)",
//           borderRadius: 8,
//         },
//       ],
//     };
//   };

//   // 2. Sales vs Price - Grouped Bar Chart (Price Ranges)
//   const salesVsPriceChartData = () => {
//     // Group products into price ranges
//     const priceRanges = [
//       { label: "Under ₹500", min: 0, max: 500 },
//       { label: "₹500-₹1000", min: 500, max: 1000 },
//       { label: "₹1000-₹2000", min: 1000, max: 2000 },
//       { label: "₹2000-₹5000", min: 2000, max: 5000 },
//       { label: "₹5000-₹10000", min: 5000, max: 10000 },
//       { label: "Above ₹10000", min: 10000, max: Infinity },
//     ];

//     const rangeData = priceRanges.map(range => {
//       const productsInRange = salesVsPrice.filter(
//         item => item.price >= range.min && item.price < range.max
//       );
      
//       const avgSales = productsInRange.length > 0
//         ? productsInRange.reduce((sum, item) => sum + item.daily_sales, 0) / productsInRange.length
//         : 0;
      
//       return {
//         range: range.label,
//         avgSales: avgSales,
//         count: productsInRange.length
//       };
//     }).filter(item => item.count > 0); // Only show ranges with products

//     return {
//       labels: rangeData.map(item => item.range),
//       datasets: [
//         {
//           label: "Average Daily Sales",
//           data: rangeData.map(item => item.avgSales),
//           backgroundColor: "rgba(59, 130, 246, 0.7)",
//           borderRadius: 8,
//         },
//         {
//           label: "Number of Products",
//           data: rangeData.map(item => item.count),
//           backgroundColor: "rgba(16, 185, 129, 0.7)",
//           borderRadius: 8,
//         },
//       ],
//     };
//   };

//   // 3. Bestseller & Amazon Choice Count
//   const bestsellerChartData = {
//     labels: bestsellerCount.map((item) => item.category),
//     datasets: [
//       {
//         label: "Featured Products Count",
//         data: bestsellerCount.map((item) => item.count),
//         backgroundColor: [
//           "rgba(245, 158, 11, 0.8)",
//           "rgba(239, 68, 68, 0.8)",
//           "rgba(34, 197, 94, 0.8)",
//           "rgba(59, 130, 246, 0.8)",
//           "rgba(168, 85, 247, 0.8)",
//         ],
//         borderColor: "rgba(255, 255, 255, 1)",
//         borderWidth: 2,
//       },
//     ],
//   };

//   // 4. Sales Efficiency
//   const salesEfficiencyChartData = {
//     labels: salesEfficiency.slice(0, 10).map((p) => truncateName(p.product_title || "Unknown")),
//     datasets: [
//       {
//         label: "Sales per Review",
//         data: salesEfficiency.slice(0, 10).map((p) => p.efficiency_score || 0),
//         backgroundColor: "rgba(34, 197, 94, 0.7)",
//         borderRadius: 10,
//       },
//     ],
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//       {/* FLIPKART SECTION */}
//       {flipkartProducts.length > 0 && (
//         <>
//           <ChartCard 
//             title="Top Flipkart Products by Rating" 
//             description="Highest rated products on Flipkart"
//             isLoading={isLoading}
//             summary={flipkartProductsSummary}
//             summaryLoading={flipkartProductsLoading}
//           >
//             <Bar data={flipkartProductsChart} options={createBarOptions(handleFlipkartProductClick)} />
//           </ChartCard>

//           <ChartCard 
//             title="Flipkart Products with Most Reviews" 
//             description="Most reviewed products indicating popularity"
//             isLoading={isLoading}
//             summary={flipkartReviewsSummary}
//             summaryLoading={flipkartReviewsLoading}
//           >
//             <Bar data={flipkartReviewsChart} options={createBarOptions(handleFlipkartProductClick)} />
//           </ChartCard>

//           <ChartCard 
//             title="Flipkart Categories Distribution" 
//             description="Product count across different categories"
//             isLoading={isLoading}
//             summary={flipkartCategoriesSummary}
//             summaryLoading={flipkartCategoriesLoading}
//           >
//             <Bar data={flipkartCategoriesChart} options={createBarOptions(handleFlipkartCategoryClick)} />
//           </ChartCard>
//         </>
//       )}

//       {/* AMAZON SECTION */}
//       {amazonCategories.length > 0 && (
//         <>
//           <ChartCard 
//             title="Amazon Categories Distribution" 
//             description="Product inventory across Amazon categories"
//             isLoading={isLoading}
//             summary={amazonCategoriesSummary}
//             summaryLoading={amazonCategoriesLoading}
//           >
//             <Bar data={amazonCategoriesChart} options={createBarOptions(handleAmazonCategoryClick)} />
//           </ChartCard>

//           {ratings.length > 0 && (
//             <ChartCard 
//               title="Rating Distribution" 
//               description="How customers rate Amazon products"
//               isLoading={isLoading}
//               summary={ratingsSummary}
//               summaryLoading={ratingsLoading}
//             >
//               <Bar data={ratingsChart} options={createBarOptions(() => {})} />
//             </ChartCard>
//           )}

//           {sentiments.length > 0 && (
//             <ChartCard 
//               title="Customer Sentiment Analysis" 
//               description="Overall sentiment from customer reviews"
//               isLoading={isLoading}
//               summary={sentimentsSummary}
//               summaryLoading={sentimentsLoading}
//             >
//               <Doughnut data={sentimentsChart} options={createDoughnutOptions()} />
//             </ChartCard>
//           )}

//           {rapidApiProducts.length > 0 && (
//             <ChartCard 
//               title="Top Daily Bestsellers" 
//               description="Products with highest daily sales volume"
//               isLoading={isLoading}
//               summary={rapidApiSalesSummary}
//               summaryLoading={rapidApiSalesLoading}
//             >
//               <Bar data={rapidApiSalesChart} options={createBarOptions(handleRapidApiProductClick)} />
//             </ChartCard>
//           )}

//           {/* NEW AMAZON CHARTS */}
//           {priceDistribution.length > 0 && (
//             <ChartCard 
//               title="Average Price by Category" 
//               description="Compare average prices across different categories"
//               isLoading={isLoading}
//               summary={priceDistSummary}
//               summaryLoading={priceDistLoading}
//             >
//               <Bar data={priceDistChartData()} options={createBarOptions(() => {})} />
//             </ChartCard>
//           )}

//           {salesVsPrice.length > 0 && (
//             <ChartCard 
//               title="Sales Performance by Price Range" 
//               description="Average daily sales and product count in each price bracket"
//               isLoading={isLoading}
//               summary={salesVsPriceSummary}
//               summaryLoading={salesVsPriceLoading}
//             >
//               <Bar data={salesVsPriceChartData()} options={createBarOptions(() => {})} />
//             </ChartCard>
//           )}

//           {bestsellerCount.length > 0 && (
//             <ChartCard 
//               title="Bestseller & Amazon Choice Products" 
//               description="Featured products count by category"
//               isLoading={isLoading}
//               summary={bestsellerSummary}
//               summaryLoading={bestsellerLoading}
//             >
//               <Doughnut data={bestsellerChartData} options={createDoughnutOptions()} />
//             </ChartCard>
//           )}

//           {salesEfficiency.length > 0 && (
//             <ChartCard 
//               title="Most Efficient Products" 
//               description="Products with best sales-to-review ratio"
//               isLoading={isLoading}
//               summary={salesEffSummary}
//               summaryLoading={salesEffLoading}
//             >
//               <Bar data={salesEfficiencyChartData} options={createBarOptions(handleSalesEfficiencyClick)} />
//             </ChartCard>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { useLocation } from "wouter";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Skeleton } from "@/components/ui/skeleton";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar, Doughnut } from "react-chartjs-2";
// import { useFilters } from "@/components/dashboard/FiltersContext";
// import { useAISummary } from "@/hooks/useAISummary";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// interface ChartCardProps {
//   title: string;
//   description?: string;
//   children: React.ReactNode;
//   isLoading?: boolean;
//   summary?: string;
//   summaryLoading?: boolean;
// }

// function ChartCard({ title, description, children, isLoading, summary, summaryLoading }: ChartCardProps) {
//   return (
//     <Card className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
//       <CardHeader className="flex flex-row items-center justify-between pb-4">
//         <div>
//           <CardTitle className="text-lg font-semibold">{title}</CardTitle>
//           {description && (
//             <p className="text-sm text-muted-foreground mt-1">{description}</p>
//           )}
//         </div>
//         <Badge variant="secondary" className="text-xs">
//           Live Data
//         </Badge>
//       </CardHeader>
//       <CardContent className="p-0">
//         <div className="chart-container relative h-80 w-full">
//           {isLoading ? <Skeleton className="w-full h-full" /> : children}
//         </div>
//         {summaryLoading ? (
//           <div className="mt-3 text-sm text-muted-foreground italic">
//             Generating AI summary...
//           </div>
//         ) : summary ? (
//           <div className="mt-3 text-sm font-medium p-3 bg-muted/50 rounded-lg">
//             💡 {summary}
//           </div>
//         ) : null}
//       </CardContent>
//     </Card>
//   );
// }

// export default function ChartsGrid({ selectedSource }: { selectedSource: string }) {
//   const BASE_URL = "http://localhost:8000";
//   const { filters } = useFilters();
//   const [, setLocation] = useLocation();

//   // Existing states
//   const [flipkartProducts, setFlipkartProducts] = useState<any[]>([]);
//   const [amazonProducts, setAmazonProducts] = useState<any[]>([]);
//   const [flipkartCategories, setFlipkartCategories] = useState<any[]>([]);
//   const [amazonCategories, setAmazonCategories] = useState<any[]>([]);
//   const [ratings, setRatings] = useState<any[]>([]);
//   const [sentiments, setSentiments] = useState<any[]>([]);
//   const [rapidApiProducts, setRapidApiProducts] = useState<any[]>([]);
  
//   // New Amazon-specific states
//   const [priceDistribution, setPriceDistribution] = useState<any[]>([]);
//   const [salesVsPrice, setSalesVsPrice] = useState<any[]>([]);
//   const [bestsellerCount, setBestsellerCount] = useState<any[]>([]);
//   const [salesEfficiency, setSalesEfficiency] = useState<any[]>([]);
  
//   const [isLoading, setIsLoading] = useState(true);

//   const buildQueryParams = (table: string) => {
//     const params = new URLSearchParams();
    
//     // Important: Only add category if it's not "All Categories"
//     if (filters.category && filters.category !== "All Categories") {
//       params.append("category", filters.category);
//       console.log("🔍 Category filter applied:", filters.category);
//     } else {
//       console.log("🔍 No category filter (All Categories selected)");
//     }
    
//     if (filters.priceRange[0] > 0) {
//       params.append("min_price", filters.priceRange[0].toString());
//     }
//     if (filters.priceRange[1] < 5000000) {
//       params.append("max_price", filters.priceRange[1].toString());
//     }
    
//     if (filters.rating > 0) {
//       params.append("min_rating", filters.rating.toString());
//     }
    
//     if (filters.dateRange !== "all") {
//       params.append("date_range", filters.dateRange);
//     }
    
//     if (filters.showTrendingOnly) {
//       params.append("trending_only", "true");
//     }
    
//     if (filters.sortBy) {
//       params.append("sort_by", filters.sortBy);
//     }
    
//     console.log("🔍 Built query params:", params.toString());
    
//     return params.toString();
//   };

//   useEffect(() => {
//     const fetchAll = async () => {
//       setIsLoading(true);
//       try {
//         const table = filters.table || selectedSource;
//         const queryParams = buildQueryParams(table);
//         const topN = filters.topN || 10;
        
//         console.log("=== FETCH START ===");
//         console.log("Selected Source:", selectedSource);
//         console.log("Filters Table:", filters.table);
//         console.log("Filters Category:", filters.category);
//         console.log("Query Params:", queryParams);
//         console.log("==================");
        
//         if (selectedSource === "both" || table === "both") {
//           const flipkartParams = buildQueryParams("flipkart");
//           const amazonParams = buildQueryParams("amazon_reviews");
          
//           const [
//             flipkartRes,
//             amazonRes,
//             flipkartCatRes,
//             amazonCatRes,
//             ratingsRes,
//             sentimentRes,
//             rapidApiRes,
//             priceDistRes,
//             salesVsPriceRes,
//             bestsellerRes,
//             salesEffRes,
//           ] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=flipkart&n=${topN}&${flipkartParams}`),
//             fetch(`${BASE_URL}/top?table=amazon_reviews&n=${topN}&${amazonParams}`),
//             fetch(`${BASE_URL}/flipkart/categories?${flipkartParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/categories?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/ratings?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi/top-sales?limit=${topN}&${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/price_distribution?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/sales_vs_price_daily?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/bestseller_count?${amazonParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/sales-efficiency?top_n=10&${amazonParams}`),
//           ]);

//           const [
//             flipkartJson,
//             amazonJson,
//             flipkartCatJson,
//             amazonCatJson,
//             ratingsJson,
//             sentimentJson,
//             rapidApiJson,
//             priceDistJson,
//             salesVsPriceJson,
//             bestsellerJson,
//             salesEffJson,
//           ] = await Promise.all([
//             flipkartRes.json(),
//             amazonRes.json(),
//             flipkartCatRes.json(),
//             amazonCatRes.json(),
//             ratingsRes.json(),
//             sentimentRes.json(),
//             rapidApiRes.json(),
//             priceDistRes.json(),
//             salesVsPriceRes.json(),
//             bestsellerRes.json(),
//             salesEffRes.json(),
//           ]);

//           setFlipkartProducts(flipkartJson.data || []);
//           setAmazonProducts(amazonJson.data || []);
//           setFlipkartCategories(flipkartCatJson || []);
//           setAmazonCategories(amazonCatJson || []);
//           setRatings(ratingsJson || []);
//           setSentiments(sentimentJson || []);
//           setRapidApiProducts(rapidApiJson.data || []);
//           setPriceDistribution(priceDistJson.data || []);
//           setSalesVsPrice(salesVsPriceJson.data || []);
//           setBestsellerCount(bestsellerJson.data || []);
//           setSalesEfficiency(salesEffJson || []);
          
//           console.log("📊 Bestseller Count Data:", bestsellerJson.data);
//           console.log("📊 Sales Efficiency Data:", salesEffJson);
//         } else if (table === "amazon_reviews") {
//           const [
//             productsRes,
//             categoriesRes,
//             ratingsRes,
//             sentimentRes,
//             rapidApiRes,
//             priceDistRes,
//             salesVsPriceRes,
//             bestsellerRes,
//             salesEffRes,
//           ] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=amazon_reviews&n=${topN}&${queryParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/categories?${queryParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/ratings?${queryParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment?${queryParams}`),
//             fetch(`${BASE_URL}/rapidapi/top-sales?limit=${topN}&${queryParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/price_distribution?${queryParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/sales_vs_price_daily?${queryParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/bestseller_count?${queryParams}`),
//             fetch(`${BASE_URL}/rapidapi_amazon_products/sales-efficiency?top_n=10&${queryParams}`),
//           ]);

//           const [
//             productsJson,
//             categoriesJson,
//             ratingsJson,
//             sentimentJson,
//             rapidApiJson,
//             priceDistJson,
//             salesVsPriceJson,
//             bestsellerJson,
//             salesEffJson,
//           ] = await Promise.all([
//             productsRes.json(),
//             categoriesRes.json(),
//             ratingsRes.json(),
//             sentimentRes.json(),
//             rapidApiRes.json(),
//             priceDistRes.json(),
//             salesVsPriceRes.json(),
//             bestsellerRes.json(),
//             salesEffRes.json(),
//           ]);

//           setFlipkartProducts([]);
//           setAmazonProducts(productsJson.data || []);
//           setFlipkartCategories([]);
//           setAmazonCategories(categoriesJson || []);
//           setRatings(ratingsJson || []);
//           setSentiments(sentimentJson || []);
//           setRapidApiProducts(rapidApiJson.data || []);
//           setPriceDistribution(priceDistJson.data || []);
//           setSalesVsPrice(salesVsPriceJson.data || []);
//           setBestsellerCount(bestsellerJson.data || []);
//           setSalesEfficiency(salesEffJson || []);
          
//           console.log("📊 Bestseller Count Data:", bestsellerJson.data);
//           console.log("📊 Sales Efficiency Data:", salesEffJson);
//         } else {
//           const [productsRes, categoryRes] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=flipkart&n=${topN}&${queryParams}`),
//             fetch(`${BASE_URL}/flipkart/categories?${queryParams}`),
//           ]);

//           const [productsJson, categoryJson] = await Promise.all([
//             productsRes.json(),
//             categoryRes.json(),
//           ]);

//           setFlipkartProducts(productsJson.data || []);
//           setAmazonProducts([]);
//           setFlipkartCategories(categoryJson || []);
//           setAmazonCategories([]);
//           setRatings([]);
//           setSentiments([]);
//           setRapidApiProducts([]);
//           setPriceDistribution([]);
//           setSalesVsPrice([]);
//           setBestsellerCount([]);
//           setSalesEfficiency([]);
//         }
//       } catch (error) {
//         console.error("Error fetching chart data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchAll();
//   }, [selectedSource, filters]);

//   // AI Summaries for existing charts
//   const { summary: flipkartProductsSummary, loading: flipkartProductsLoading } =
//     useAISummary("Summarize Flipkart top products by rating", "flipkart", flipkartProducts, flipkartProducts.length, filters);

//   const { summary: flipkartReviewsSummary, loading: flipkartReviewsLoading } =
//     useAISummary("Summarize Flipkart products with most reviews", "flipkart", flipkartProducts, flipkartProducts.length, filters);

//   const { summary: flipkartCategoriesSummary, loading: flipkartCategoriesLoading } =
//     useAISummary("Summarize Flipkart category distribution", "flipkart", flipkartCategories, flipkartCategories.length, filters);

//   const { summary: amazonCategoriesSummary, loading: amazonCategoriesLoading } =
//     useAISummary("Summarize Amazon category distribution", "rapidapi_amazon_products", amazonCategories, amazonCategories.length, filters);

//   const { summary: ratingsSummary, loading: ratingsLoading } =
//     useAISummary("Summarize rating distribution", "rapidapi_amazon_products", ratings, ratings.length, filters);

//   const { summary: sentimentsSummary, loading: sentimentsLoading } =
//     useAISummary("Summarize sentiment distribution", "rapidapi_amazon_products", sentiments, sentiments.length, filters);

//   const { summary: rapidApiSalesSummary, loading: rapidApiSalesLoading } =
//     useAISummary("Summarize top selling products by daily sales volume", "rapidapi_amazon_products", rapidApiProducts, rapidApiProducts.length, filters);

//   // AI Summaries for new Amazon charts
//   const { summary: priceDistSummary, loading: priceDistLoading } =
//     useAISummary("Analyze price distribution across categories", "rapidapi_amazon_products", priceDistribution, priceDistribution.length, filters);

//   const { summary: salesVsPriceSummary, loading: salesVsPriceLoading } =
//     useAISummary("Analyze relationship between price ranges and daily sales", "rapidapi_amazon_products", salesVsPrice, salesVsPrice.length, filters);

//   const { summary: bestsellerSummary, loading: bestsellerLoading } =
//     useAISummary("Summarize bestseller and Amazon Choice products by category", "rapidapi_amazon_products", bestsellerCount, bestsellerCount.length, filters);

//   const { summary: salesEffSummary, loading: salesEffLoading } =
//     useAISummary("Analyze sales efficiency (sales per review) for top products", "rapidapi_amazon_products", salesEfficiency, salesEfficiency.length, filters);

//   // Click Handlers
//   const handleFlipkartProductClick = (index: number) => {
//     const product = flipkartProducts[index];
//     if (product && product.title) {
//       const productName = encodeURIComponent(product.title);
//       setLocation(`/product/${productName}?from=dashboard&source=flipkart`);
//     }
//   };

//   const handleFlipkartCategoryClick = (index: number) => {
//     const category = flipkartCategories[index];
//     if (category && category.category) {
//       const categoryName = encodeURIComponent(category.category);
//       setLocation(`/category-products/flipkart/${categoryName}?page=1&from=dashboard`);
//     }
//   };

//   const handleAmazonCategoryClick = (index: number) => {
//     const category = amazonCategories[index];
//     if (category && (category.category || category.category_name)) {
//       const categoryName = encodeURIComponent(category.category || category.category_name);
//       setLocation(`/category-products/amazon/${categoryName}?page=1&from=dashboard`);
//     }
//   };

//   const handleRapidApiProductClick = (index: number) => {
//     const product = rapidApiProducts[index];
//     if (product && product.product_title) {
//       const productName = encodeURIComponent(product.product_title);
//       setLocation(`/product/${productName}?from=dashboard&source=amazon`);
//     }
//   };

//   const handleSalesEfficiencyClick = (index: number) => {
//     const product = salesEfficiency[index];
//     if (product && product.product_title) {
//       const productName = encodeURIComponent(product.product_title);
//       setLocation(`/product/${productName}?from=dashboard&source=amazon`);
//     }
//   };

//   // Chart Options
//   const createBarOptions = (clickHandler: (index: number) => void) => ({
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: { 
//       legend: { display: true, position: "bottom" as const },
//       tooltip: {
//         callbacks: {
//           afterLabel: () => "Click to view details"
//         }
//       }
//     },
//     onClick: (_event: any, elements: any[]) => {
//       if (elements.length > 0) {
//         const index = elements[0].index;
//         clickHandler(index);
//       }
//     },
//     onHover: (event: any, elements: any[]) => {
//       const canvas = event.native?.target;
//       if (canvas) {
//         canvas.style.cursor = elements.length > 0 ? 'pointer' : 'default';
//       }
//     }
//   });

//   const createDoughnutOptions = (clickHandler?: (index: number) => void) => ({
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: { 
//       legend: { display: true, position: "bottom" as const },
//       tooltip: clickHandler ? {
//         callbacks: {
//           afterLabel: () => "Click to view details"
//         }
//       } : undefined
//     },
//     onClick: clickHandler ? (_event: any, elements: any[]) => {
//       if (elements.length > 0) {
//         const index = elements[0].index;
//         clickHandler(index);
//       }
//     } : undefined,
//     onHover: clickHandler ? (event: any, elements: any[]) => {
//       const canvas = event.native?.target;
//       if (canvas) {
//         canvas.style.cursor = elements.length > 0 ? 'pointer' : 'default';
//       }
//     } : undefined
//   });

//   const truncateName = (name: string) => {
//     const cleaned = name.replace(/"/g, "");
//     return cleaned.substring(0, 30) + (cleaned.length > 30 ? "..." : "");
//   };

//   // Chart Data Configurations
//   const flipkartProductsChart = {
//     labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
//     datasets: [
//       {
//         label: "Flipkart Rating",
//         data: flipkartProducts.map((p) => p.rating || 0),
//         backgroundColor: "hsl(142,76%,36%)",
//       },
//     ],
//   };

//   const flipkartReviewsChart = {
//     labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
//     datasets: [
//       {
//         label: "Flipkart Reviews",
//         data: flipkartProducts.map((p) => p.reviews || 0),
//         backgroundColor: "hsl(221,83%,53%)",
//       },
//     ],
//   };

//   const flipkartCategoriesChart = {
//     labels: flipkartCategories.map((c) => c.category || "Unknown"),
//     datasets: [
//       {
//         label: "Flipkart Products",
//         data: flipkartCategories.map((c) => c.count || 0),
//         backgroundColor: "hsl(142,76%,36%)",
//       },
//     ],
//   };

//   const amazonCategoriesChart = {
//     labels: amazonCategories.map((c) => c.category || c.category_name || "Unknown"),
//     datasets: [
//       {
//         label: "Amazon Products",
//         data: amazonCategories.map((c) => c.count || c.product_count || 0),
//         borderRadius: 8,
//         backgroundColor: "rgba(245, 158, 11, 0.7)",
//       },
//     ],
//   };

//   const ratingsChart = {
//     labels: ratings.map((r) => `${r.rating}★`),
//     datasets: [
//       {
//         label: "Number of Products",
//         data: ratings.map((r) => r.count || 0),
//         backgroundColor: "rgba(59,130,246,0.7)",
//       },
//     ],
//   };

//   const sentimentsChart = {
//     labels: sentiments.map((s) => s.sentiment || "Unknown"),
//     datasets: [
//       {
//         label: "Sentiment Count",
//         data: sentiments.map((s) => s.count || 0),
//         backgroundColor: [
//           "rgba(34,197,94,0.9)",
//           "rgba(234,179,8,0.9)",
//           "rgba(239,68,68,0.9)",
//         ],
//         borderColor: "rgba(255,255,255,1)",
//         borderWidth: 2,
//       },
//     ],
//   };

//   const rapidApiSalesChart = {
//     labels: rapidApiProducts.map((p) => truncateName(p.product_title || "Unknown")),
//     datasets: [
//       {
//         label: "Daily Sales",
//         data: rapidApiProducts.map((p) => p.daily_sales || 0),
//         backgroundColor: "rgba(59,130,246,0.8)",
//         borderRadius: 10,
//       },
//     ],
//   };

//   // New Amazon Chart Configurations
  
//   // 1. Price Distribution - Group by category and show average price
//   const priceDistChartData = () => {
//     const categoryPrices: { [key: string]: number[] } = {};
    
//     priceDistribution.forEach((item) => {
//       if (!categoryPrices[item.category]) {
//         categoryPrices[item.category] = [];
//       }
//       for (let i = 0; i < item.count; i++) {
//         categoryPrices[item.category].push(item.price);
//       }
//     });

//     const categories = Object.keys(categoryPrices).slice(0, 10);
//     const avgPrices = categories.map(cat => {
//       const prices = categoryPrices[cat];
//       return prices.reduce((a, b) => a + b, 0) / prices.length;
//     });

//     return {
//       labels: categories,
//       datasets: [
//         {
//           label: "Average Price (₹)",
//           data: avgPrices,
//           backgroundColor: "rgba(168, 85, 247, 0.7)",
//           borderRadius: 8,
//         },
//       ],
//     };
//   };

//   // 2. Sales vs Price - Grouped Bar Chart (Price Ranges)
//   const salesVsPriceChartData = () => {
//     // Group products into price ranges
//     const priceRanges = [
//       { label: "Under ₹500", min: 0, max: 500 },
//       { label: "₹500-₹1000", min: 500, max: 1000 },
//       { label: "₹1000-₹2000", min: 1000, max: 2000 },
//       { label: "₹2000-₹5000", min: 2000, max: 5000 },
//       { label: "₹5000-₹10000", min: 5000, max: 10000 },
//       { label: "Above ₹10000", min: 10000, max: Infinity },
//     ];

//     const rangeData = priceRanges.map(range => {
//       const productsInRange = salesVsPrice.filter(
//         item => item.price >= range.min && item.price < range.max
//       );
      
//       const avgSales = productsInRange.length > 0
//         ? productsInRange.reduce((sum, item) => sum + item.daily_sales, 0) / productsInRange.length
//         : 0;
      
//       return {
//         range: range.label,
//         avgSales: avgSales,
//         count: productsInRange.length
//       };
//     }).filter(item => item.count > 0); // Only show ranges with products

//     return {
//       labels: rangeData.map(item => item.range),
//       datasets: [
//         {
//           label: "Average Daily Sales",
//           data: rangeData.map(item => item.avgSales),
//           backgroundColor: "rgba(59, 130, 246, 0.7)",
//           borderRadius: 8,
//         },
//         {
//           label: "Number of Products",
//           data: rangeData.map(item => item.count),
//           backgroundColor: "rgba(16, 185, 129, 0.7)",
//           borderRadius: 8,
//         },
//       ],
//     };
//   };

//   // 3. Bestseller & Amazon Choice Count
//   const bestsellerChartData = () => {
//     // Generate dynamic colors based on number of categories
//     const generateColors = (count: number) => {
//       const baseColors = [
//         "rgba(245, 158, 11, 0.8)",   // Orange
//         "rgba(239, 68, 68, 0.8)",    // Red
//         "rgba(34, 197, 94, 0.8)",    // Green
//         "rgba(59, 130, 246, 0.8)",   // Blue
//         "rgba(168, 85, 247, 0.8)",   // Purple
//         "rgba(236, 72, 153, 0.8)",   // Pink
//         "rgba(20, 184, 166, 0.8)",   // Teal
//         "rgba(251, 146, 60, 0.8)",   // Orange-Red
//         "rgba(16, 185, 129, 0.8)",   // Emerald
//         "rgba(139, 92, 246, 0.8)",   // Violet
//         "rgba(244, 63, 94, 0.8)",    // Rose
//         "rgba(249, 115, 22, 0.8)",   // Orange-Dark
//         "rgba(14, 165, 233, 0.8)",   // Sky
//         "rgba(168, 162, 158, 0.8)",  // Stone
//         "rgba(132, 204, 22, 0.8)",   // Lime
//       ];
      
//       // If we need more colors than base colors, generate random ones
//       if (count <= baseColors.length) {
//         return baseColors.slice(0, count);
//       }
      
//       const colors = [...baseColors];
//       for (let i = baseColors.length; i < count; i++) {
//         const hue = (i * 137.508) % 360; // Golden angle approximation
//         colors.push(`hsla(${hue}, 70%, 60%, 0.8)`);
//       }
//       return colors;
//     };

//     const colors = generateColors(bestsellerCount.length);

//     return {
//       labels: bestsellerCount.map((item) => item.category),
//       datasets: [
//         {
//           label: "Featured Products Count",
//           data: bestsellerCount.map((item) => item.count),
//           backgroundColor: colors,
//           borderColor: "rgba(255, 255, 255, 1)",
//           borderWidth: 2,
//         },
//       ],
//     };
//   };

//   // 4. Sales Efficiency
//   const salesEfficiencyChartData = {
//     labels: salesEfficiency.slice(0, filters.topN || 10).map((p) => truncateName(p.product_title || "Unknown")),
//     datasets: [
//       {
//         label: "Sales per Review",
//         data: salesEfficiency.slice(0, filters.topN || 10).map((p) => p.efficiency_score || 0),
//         backgroundColor: "rgba(34, 197, 94, 0.7)",
//         borderRadius: 10,
//       },
//     ],
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//       {/* FLIPKART SECTION */}
//       {flipkartProducts.length > 0 && (
//         <>
//           <ChartCard 
//             title="Top Flipkart Products by Rating" 
//             description="Highest rated products on Flipkart"
//             isLoading={isLoading}
//             summary={flipkartProductsSummary}
//             summaryLoading={flipkartProductsLoading}
//           >
//             <Bar data={flipkartProductsChart} options={createBarOptions(handleFlipkartProductClick)} />
//           </ChartCard>

//           <ChartCard 
//             title="Flipkart Products with Most Reviews" 
//             description="Most reviewed products indicating popularity"
//             isLoading={isLoading}
//             summary={flipkartReviewsSummary}
//             summaryLoading={flipkartReviewsLoading}
//           >
//             <Bar data={flipkartReviewsChart} options={createBarOptions(handleFlipkartProductClick)} />
//           </ChartCard>

//           <ChartCard 
//             title="Flipkart Categories Distribution" 
//             description="Product count across different categories"
//             isLoading={isLoading}
//             summary={flipkartCategoriesSummary}
//             summaryLoading={flipkartCategoriesLoading}
//           >
//             <Bar data={flipkartCategoriesChart} options={createBarOptions(handleFlipkartCategoryClick)} />
//           </ChartCard>
//         </>
//       )}

//       {/* AMAZON SECTION */}
//       {amazonCategories.length > 0 && (
//         <>
//           <ChartCard 
//             title="Amazon Categories Distribution" 
//             description="Product inventory across Amazon categories"
//             isLoading={isLoading}
//             summary={amazonCategoriesSummary}
//             summaryLoading={amazonCategoriesLoading}
//           >
//             <Bar data={amazonCategoriesChart} options={createBarOptions(handleAmazonCategoryClick)} />
//           </ChartCard>

//           {ratings.length > 0 && (
//             <ChartCard 
//               title="Rating Distribution" 
//               description="How customers rate Amazon products"
//               isLoading={isLoading}
//               summary={ratingsSummary}
//               summaryLoading={ratingsLoading}
//             >
//               <Bar data={ratingsChart} options={createBarOptions(() => {})} />
//             </ChartCard>
//           )}

//           {sentiments.length > 0 && (
//             <ChartCard 
//               title="Customer Sentiment Analysis" 
//               description="Overall sentiment from customer reviews"
//               isLoading={isLoading}
//               summary={sentimentsSummary}
//               summaryLoading={sentimentsLoading}
//             >
//               <Doughnut data={sentimentsChart} options={createDoughnutOptions()} />
//             </ChartCard>
//           )}

//           {rapidApiProducts.length > 0 && (
//             <ChartCard 
//               title="Top Daily Bestsellers" 
//               description="Products with highest daily sales volume"
//               isLoading={isLoading}
//               summary={rapidApiSalesSummary}
//               summaryLoading={rapidApiSalesLoading}
//             >
//               <Bar data={rapidApiSalesChart} options={createBarOptions(handleRapidApiProductClick)} />
//             </ChartCard>
//           )}

//           {/* NEW AMAZON CHARTS */}
//           {priceDistribution.length > 0 && (
//             <ChartCard 
//               title="Average Price by Category" 
//               description="Compare average prices across different categories"
//               isLoading={isLoading}
//               summary={priceDistSummary}
//               summaryLoading={priceDistLoading}
//             >
//               <Bar data={priceDistChartData()} options={createBarOptions(() => {})} />
//             </ChartCard>
//           )}

//           {salesVsPrice.length > 0 && (
//             <ChartCard 
//               title="Sales Performance by Price Range" 
//               description="Average daily sales and product count in each price bracket"
//               isLoading={isLoading}
//               summary={salesVsPriceSummary}
//               summaryLoading={salesVsPriceLoading}
//             >
//               <Bar data={salesVsPriceChartData()} options={createBarOptions(() => {})} />
//             </ChartCard>
//           )}

//           {bestsellerCount.length > 0 ? (
//             <ChartCard 
//               title="Bestseller & Amazon Choice Products" 
//               description={
//                 filters.category && filters.category !== "All Categories" 
//                   ? `Featured products in ${filters.category}` 
//                   : "Featured products count by category"
//               }
//               isLoading={isLoading}
//               summary={bestsellerSummary}
//               summaryLoading={bestsellerLoading}
//             >
//               <Doughnut data={bestsellerChartData()} options={createDoughnutOptions()} />
//             </ChartCard>
//           ) : (
//             !isLoading && filters.category && filters.category !== "All Categories" && (
//               <ChartCard 
//                 title="Bestseller & Amazon Choice Products" 
//                 description={`No featured products found in ${filters.category}`}
//                 isLoading={false}
//               >
//                 <div className="flex items-center justify-center h-full text-muted-foreground">
//                   <div className="text-center">
//                     <p className="text-lg font-medium mb-2">No Data Available</p>
//                     <p className="text-sm">
//                       No Bestseller or Amazon Choice products found in this category.
//                     </p>
//                   </div>
//                 </div>
//               </ChartCard>
//             )
//           )}

//           {salesEfficiency.length > 0 && (
//             <ChartCard 
//               title="Most Efficient Products" 
//               description="Products with best sales-to-review ratio"
//               isLoading={isLoading}
//               summary={salesEffSummary}
//               summaryLoading={salesEffLoading}
//             >
//               <Bar data={salesEfficiencyChartData} options={createBarOptions(handleSalesEfficiencyClick)} />
//             </ChartCard>
//           )}
//         </>
//       )}
//     </div>
//   );
// }