
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
}
 
function ChartCard({ title, children, isLoading, summary }: ChartCardProps) {
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
            fetch(`${BASE_URL}/top?table=flipkart&n=10&${flipkartParams}`),
            fetch(`${BASE_URL}/top?table=amazon_reviews&n=10&${amazonParams}`),
            fetch(`${BASE_URL}/flipkart/categories?${flipkartParams}`),
            fetch(`${BASE_URL}/rapidapi_amazon_products/categories?${amazonParams}`),
            fetch(`${BASE_URL}/rapidapi_amazon_products/ratings?${amazonParams}`),
            fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment?${amazonParams}`),
            fetch(`${BASE_URL}/rapidapi/top-sales?limit=10&${amazonParams}`),
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
              fetch(`${BASE_URL}/top?table=amazon_reviews&n=10&${queryParams}`),
              fetch(`${BASE_URL}/rapidapi_amazon_products/categories?${queryParams}`),
              fetch(`${BASE_URL}/rapidapi_amazon_products/ratings?${queryParams}`),
              fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment?${queryParams}`),
              fetch(`${BASE_URL}/rapidapi/top-sales?limit=10&${queryParams}`),
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
            fetch(`${BASE_URL}/top?table=flipkart&n=10&${queryParams}`),
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
  // 1. Flipkart Products by Rating
  const { summary: flipkartProductsSummary, loading: flipkartProductsLoading } =
    useAISummary("Summarize Flipkart top products by rating", "flipkart", flipkartProducts, flipkartProducts.length, filters);

  // 2. Flipkart Reviews
  const { summary: flipkartReviewsSummary, loading: flipkartReviewsLoading } =
    useAISummary("Summarize Flipkart products with most reviews", "flipkart", flipkartProducts, flipkartProducts.length, filters);

  // 3. Flipkart Categories
  const { summary: flipkartCategoriesSummary, loading: flipkartCategoriesLoading } =
    useAISummary("Summarize Flipkart category distribution", "flipkart", flipkartCategories, flipkartCategories.length, filters);

  // 4. Amazon Categories
  const { summary: amazonCategoriesSummary, loading: amazonCategoriesLoading } =
    useAISummary("Summarize Amazon category distribution", "rapidapi_amazon_products", amazonCategories, amazonCategories.length, filters);

  // 5. Ratings Distribution
  const { summary: ratingsSummary, loading: ratingsLoading } =
    useAISummary("Summarize rating distribution", "rapidapi_amazon_products", ratings, ratings.length, filters);

  // 6. Sentiments Distribution
  const { summary: sentimentsSummary, loading: sentimentsLoading } =
    useAISummary("Summarize sentiment distribution", "rapidapi_amazon_products", sentiments, sentiments.length, filters);

  // 7. RapidAPI Sales
  const { summary: rapidApiSalesSummary, loading: rapidApiSalesLoading } =
    useAISummary("Summarize top selling products by daily sales volume from RapidAPI data", "rapidapi_amazon_products", rapidApiProducts, rapidApiProducts.length, filters);
  // const { summary: flipkartProductsSummary, loading: flipkartProductsLoading } =
  //   useAISummary("Summarize Flipkart top products by rating", "flipkart", flipkartProducts, flipkartProducts.length);

  // const { summary: flipkartReviewsSummary, loading: flipkartReviewsLoading } =
  //   useAISummary("Summarize Flipkart products with most reviews", "flipkart", flipkartProducts, flipkartProducts.length);

  // const { summary: flipkartCategoriesSummary, loading: flipkartCategoriesLoading } =
  //   useAISummary("Summarize Flipkart category distribution", "flipkart", flipkartCategories, flipkartCategories.length);

  // const { summary: amazonCategoriesSummary, loading: amazonCategoriesLoading } =
  //   useAISummary("Summarize Amazon category distribution", "rapidapi_amazon_products", amazonCategories, amazonCategories.length);

  // const { summary: ratingsSummary, loading: ratingsLoading } =
  //   useAISummary("Summarize rating distribution", "rapidapi_amazon_products", ratings, ratings.length);

  // const { summary: sentimentsSummary, loading: sentimentsLoading } =
  //   useAISummary("Summarize sentiment distribution", "rapidapi_amazon_products", sentiments, sentiments.length);

  // const { summary: rapidApiSalesSummary, loading: rapidApiSalesLoading } =
  //   useAISummary("Summarize top selling products by daily sales volume from RapidAPI data", "rapidapi_amazon_products", rapidApiProducts, rapidApiProducts.length);

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
