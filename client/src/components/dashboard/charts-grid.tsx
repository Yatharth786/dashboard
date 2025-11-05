// // // ============================================
// // // FILE: src/components/dashboard/charts-grid.tsx (CORRECTED)
// // // ============================================

// // import { useEffect, useState } from "react";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { Skeleton } from "@/components/ui/skeleton";
// // import {
// //   Chart as ChartJS,
// //   CategoryScale,
// //   LinearScale,
// //   BarElement,
// //   ArcElement,
// //   Title,
// //   Tooltip,
// //   Legend,
// // } from 'chart.js';
// // import { Bar, Doughnut } from 'react-chartjs-2';
// // import { api, SentimentData, RatingData, CategoryData } from "@/lib/api";

// // ChartJS.register(
// //   CategoryScale,
// //   LinearScale,
// //   BarElement,
// //   ArcElement,
// //   Title,
// //   Tooltip,
// //   Legend
// // );

// // interface ChartCardProps {
// //   title: string;
// //   children: React.ReactNode;
// //   isLoading?: boolean;
// // }

// // function ChartCard({ title, children, isLoading }: ChartCardProps) {
// //   return (
// //     <Card className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
// //       <CardHeader className="flex flex-row items-center justify-between pb-4">
// //         <CardTitle className="text-lg font-semibold">{title}</CardTitle>
// //         <Badge variant="secondary" className="text-xs">Live Data</Badge>
// //       </CardHeader>
      
// //       <CardContent className="p-0">
// //         <div className="chart-container relative h-80 w-full">
// //           {isLoading ? <Skeleton className="w-full h-full" /> : children}
// //         </div>
// //       </CardContent>
// //     </Card>
// //   );
// // }

// // export default function ChartsGrid() {
// //   const [sentimentData, setSentimentData] = useState<SentimentData[]>([]);
// //   const [ratingData, setRatingData] = useState<RatingData[]>([]);
// //   const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const [sentiment, ratings, categories] = await Promise.all([
// //           api.getSentimentDistribution(),
// //           api.getRatingDistribution(),
// //           api.getCategoryStatistics()
// //         ]);
// //         setSentimentData(sentiment);
// //         setRatingData(ratings);
// //         setCategoryData(categories);
// //       } catch (error) {
// //         console.error('Error fetching chart data:', error);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const commonOptions = {
// //     responsive: true,
// //     maintainAspectRatio: false,
// //     plugins: {
// //       legend: {
// //         display: true,
// //         position: 'bottom' as const,
// //       },
// //     },
// //   };

// //   // Sentiment chart
// //   const sentimentChartData = {
// //     labels: sentimentData.map(d => d.sentiment),
// //     datasets: [{
// //       data: sentimentData.map(d => d.count),
// //       backgroundColor: [
// //         'hsl(142.1 76.2% 36.3%)', // Positive - green
// //         'hsl(24.6 95% 53.1%)',    // Negative - orange
// //         'hsl(221.2 83.2% 53.3%)', // Neutral - blue
// //       ],
// //       borderWidth: 2,
// //       borderColor: 'hsl(var(--background))',
// //     }],
// //   };

// //   // Rating distribution chart
// //   const ratingChartData = {
// //     labels: ratingData.map(d => `${d.rating} Star`),
// //     datasets: [{
// //       label: 'Number of Reviews',
// //       data: ratingData.map(d => d.count),
// //       backgroundColor: [
// //         'hsl(0 84% 60%)',      // 1 star - red
// //         'hsl(24 84% 60%)',     // 2 stars - orange
// //         'hsl(45 84% 60%)',     // 3 stars - yellow
// //         'hsl(142 71% 45%)',    // 4 stars - light green
// //         'hsl(142 76% 36%)',    // 5 stars - dark green
// //       ],
// //     }],
// //   };

// //   // Category chart
// //   const categoryChartData = {
// //     labels: categoryData.slice(0, 6).map(d => d.category),
// //     datasets: [{
// //       label: 'Reviews by Category',
// //       data: categoryData.slice(0, 6).map(d => d.review_count),
// //       backgroundColor: [
// //         'hsl(221.2 83.2% 53.3%)',
// //         'hsl(142.1 76.2% 36.3%)',
// //         'hsl(24.6 95% 53.1%)',
// //         'hsl(280 80% 55%)',
// //         'hsl(38.7 92% 50%)',
// //         'hsl(200 80% 55%)',
// //       ],
// //     }],
// //   };

// //   return (
// //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
// //       <ChartCard title="Sentiment Distribution" isLoading={isLoading}>
// //         <Doughnut data={sentimentChartData} options={commonOptions} />
// //       </ChartCard>

// //       <ChartCard title="Rating Distribution" isLoading={isLoading}>
// //         <Bar data={ratingChartData} options={commonOptions} />
// //       </ChartCard>

// //       <ChartCard title="Top Categories" isLoading={isLoading}>
// //         <Bar data={categoryChartData} options={commonOptions} />
// //       </ChartCard>
// //     </div>
// //   );
// // }

// // ============================================
// // FILE: src/components/dashboard/charts-grid.tsx
// // ============================================

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

// ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);
 
// interface ChartCardProps {
//   title: string;
//   children: React.ReactNode;
//   isLoading?: boolean;
//   summary?: string;
//   summaryLoading?: boolean;
// }

// function ChartCard({ title, children, isLoading }: ChartCardProps) {
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
//         <div className="mt-3 text-sm text-muted-foreground">
//           {summaryLoading ? "Generating AI summary..." : summary}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// export default function ChartsGrid() {
//   const BASE_URL = "http://122.176.108.253:9002"; // your remote server IP

//   const [topProducts, setTopProducts] = useState<any[]>([]);
//   const [topReviews, setTopReviews] = useState<any[]>([]);
//   const [categories, setCategories] = useState<any[]>([]);
//   const [ratings, setRatings] = useState<any[]>([]);
//   const [sentiments, setSentiments] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
 
//   useEffect(() => {
//     const fetchAll = async () => {
//       try {
//         const [
//           productsRes,
//           reviewsRes,
//           categoriesRes,
//           ratingsRes,
//           sentimentRes,
//         ] = await Promise.all([
//           fetch(`${BASE_URL}/top?table=flipkart&n=10`), // <-- updated table name
//           fetch(`${BASE_URL}/top?table=amazon_reviews&n=10`),
//           fetch(`${BASE_URL}/Amazon_Reviews/categories`),
//           fetch(`${BASE_URL}/Amazon_Reviews/ratings`),
//           fetch(`${BASE_URL}/Amazon_Reviews/sentiment`),
//         ]);
 
//         const productsJson = await productsRes.json();
//         const reviewsJson = await reviewsRes.json();
//         const categoriesJson = await categoriesRes.json();
//         const ratingsJson = await ratingsRes.json();
//         const sentimentJson = await sentimentRes.json();

//         // Map data correctly based on your backend JSON structure
//         setTopProducts(Array.isArray(productsJson.data) ? productsJson.data : []);
//         setTopReviews(Array.isArray(reviewsJson.data) ? reviewsJson.data : []);
//         setCategories(Array.isArray(categoriesJson) ? categoriesJson : []);
//         setRatings(Array.isArray(ratingsJson) ? ratingsJson : []);
//         setSentiments(Array.isArray(sentimentJson) ? sentimentJson : []);
//       } catch (error) {
//         console.error("Error fetching chart data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
 
//     fetchAll();
//   }, []);
 
//   const commonOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: { legend: { display: true, position: "bottom" as const } },
//   };

//   // Charts

//   const topProductsChart = {
//     labels: topProducts.map((p) => p.title.replace(/"/g, "")),
//     datasets: [{ label: "Rating", data: topProducts.map((p) => p.rating), backgroundColor: "hsl(142,76%,36%)" }],
//   };

//   const topReviewsChart = {
//     labels: topReviews.map((r) => r.product_title.replace(/"/g, "")),
//     datasets: [
//       { label: "Average Rating", data: topReviews.map((r) => r.avg_rating), backgroundColor: "hsl(221,83%,53%)" },
//     ],
//   };

//   const trendingChart = {
//     labels: topReviews.map((r) => r.product_title.replace(/"/g, "")),
//     datasets: [
//       { label: "Review Count", data: topReviews.map((r) => r.review_count), backgroundColor: "hsl(45,84%,60%)" },
//     ],
//   };

//   const categoriesChart = {
//     labels: categories.map((c) => c.category.replace(/"/g, "")),
//     datasets: [
//       { label: "Number of Products", data: categories.map((c) => c.count), backgroundColor: "hsl(280,80%,55%)" },
//     ],
//   };

//   const ratingsChart = {
//     labels: ratings.map((r) => `${r.rating} Star`),
//     datasets: [
//       {
//         label: "Number of Reviews",
//         data: ratings.map((r) => r.count),
//         backgroundColor: ["hsl(0,84%,60%)","hsl(24,84%,60%)","hsl(45,84%,60%)","hsl(142,71%,45%)","hsl(142,76%,36%)"],
//       },
//     ],
//   };

//   const sentimentsChart = {
//     labels: sentiments.map((s) => s.sentiment),
//     datasets: [
//       { label: "Count", data: sentiments.map((s) => s.count), backgroundColor: ["hsl(142,76%,36%)","hsl(24,95%,53%)","hsl(221,83%,53%)"] },
//     ],
//   };

//   // AI Summaries
//   const { summary: topProductsSummary, loading: topProductsSummaryLoading } = useAISummary(
//     "Summarize insights of top products by rating",
//     "flipkart", // <-- updated table name
//     topProducts,
//     topProducts.length
//   );

//   const { summary: topReviewsSummary, loading: topReviewsSummaryLoading } = useAISummary(
//     "Summarize insights of top reviews (average rating)",
//     "amazon_reviews",
//     topReviews,
//     topReviews.length
//   );

//   const { summary: trendingSummary, loading: trendingSummaryLoading } = useAISummary(
//     "Summarize trending products based on reviews",
//     "amazon_reviews",
//     topReviews,
//     topReviews.length
//   );

//   const { summary: categoriesSummary, loading: categoriesSummaryLoading } = useAISummary(
//     "Summarize products by categories",
//     "flipkart", // <-- updated table name
//     categories,
//     categories.length
//   );

//   const { summary: ratingsSummary, loading: ratingsSummaryLoading } = useAISummary(
//     "Summarize rating distribution insights",
//     "amazon_reviews",
//     ratings,
//     ratings.length
//   );

//   const { summary: sentimentsSummary, loading: sentimentsSummaryLoading } = useAISummary(
//     "Summarize sentiment distribution insights",
//     "amazon_reviews",
//     sentiments,
//     sentiments.length
//   );

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//       <ChartCard title="Top Products by Rating" isLoading={isLoading} summary={topProductsSummary} summaryLoading={topProductsSummaryLoading}>
//         <Bar data={topProductsChart} options={commonOptions} />
//       </ChartCard>

//       <ChartCard title="Top Reviews (Average Rating)" isLoading={isLoading} summary={topReviewsSummary} summaryLoading={topReviewsSummaryLoading}>
//         <Bar data={topReviewsChart} options={commonOptions} />
//       </ChartCard>

//       <ChartCard title="Top Trending Products" isLoading={isLoading} summary={trendingSummary} summaryLoading={trendingSummaryLoading}>
//         <Bar data={trendingChart} options={commonOptions} />
//       </ChartCard>

//       <ChartCard title="Products by Category" isLoading={isLoading} summary={categoriesSummary} summaryLoading={categoriesSummaryLoading}>
//         <Bar data={categoriesChart} options={commonOptions} />
//       </ChartCard>

//       <ChartCard title="Rating Distribution" isLoading={isLoading} summary={ratingsSummary} summaryLoading={ratingsSummaryLoading}>
//         <Bar data={ratingsChart} options={commonOptions} />
//       </ChartCard>

//       <ChartCard title="Sentiment Distribution" isLoading={isLoading} summary={sentimentsSummary} summaryLoading={sentimentsSummaryLoading}>
//         <Doughnut data={sentimentsChart} options={commonOptions} />
//       </ChartCard>
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
// import { useAISummary } from "@/hooks/useAISummary"; // AI hook

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
//         <div className="mt-3 text-sm text-muted-foreground">
//           {summaryLoading ? "Generating AI summary..." : summary}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// export default function ChartsGrid({ selectedSource }: { selectedSource: string }) {
//   const BASE_URL = "http://localhost:8000"; // replace with your remote FastAPI URL

//   const [topProducts, setTopProducts] = useState<any[]>([]);
//   const [topReviews, setTopReviews] = useState<any[]>([]);
//   const [categories, setCategories] = useState<any[]>([]);
//   const [ratings, setRatings] = useState<any[]>([]);
//   const [sentiments, setSentiments] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
  

//   useEffect(() => {
//     const fetchAll = async () => {
//       try {
//         const [
//           productsRes,
//           reviewsRes,
//           categoriesRes,
//           ratingsRes,
//           sentimentRes,
//         ] = await Promise.all([
//           fetch(`${BASE_URL}/top?table=flipkart&n=10`), // <-- updated table name
//           fetch(`${BASE_URL}/top?table=amazon_reviews&n=10`),
//           fetch(`${BASE_URL}/Amazon_Reviews/categories`),
//           fetch(`${BASE_URL}/Amazon_Reviews/ratings`),
//           fetch(`${BASE_URL}/Amazon_Reviews/sentiment`),
//         ]);

//         const productsJson = await productsRes.json();
//         const reviewsJson = await reviewsRes.json();
//         const categoriesJson = await categoriesRes.json();
//         const ratingsJson = await ratingsRes.json();
//         const sentimentJson = await sentimentRes.json();

//         setTopProducts(Array.isArray(productsJson.data) ? productsJson.data : []);
//         setTopReviews(Array.isArray(reviewsJson.data) ? reviewsJson.data : []);
//         setCategories(Array.isArray(categoriesJson) ? categoriesJson : []);
//         setRatings(Array.isArray(ratingsJson) ? ratingsJson : []);
//         setSentiments(Array.isArray(sentimentJson) ? sentimentJson : []);
//       } catch (error) {
//         console.error("Error fetching chart data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchAll();
//   }, []);

//   const commonOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: { legend: { display: true, position: "bottom" as const } },
//   };

//   // Chart Data
//   const topProductsChart = {
//     labels: topProducts.map((p) => p.title.replace(/"/g, "")),
//     datasets: [{ label: "Rating", data: topProducts.map((p) => p.rating), backgroundColor: "hsl(142,76%,36%)" }],
//   };
 
//   const topReviewsChart = {
//     labels: topReviews.map((r) => r.product_title.replace(/"/g, "")),
//     datasets: [
//       { label: "Average Rating", data: topReviews.map((r) => r.avg_rating), backgroundColor: "hsl(221,83%,53%)" },
//     ],
//   };
 
//   const trendingChart = {
//     labels: topReviews.map((r) => r.product_title.replace(/"/g, "")),
//     datasets: [
//       { label: "Review Count", data: topReviews.map((r) => r.review_count), backgroundColor: "hsl(45,84%,60%)" },
//     ],
//   };
 
//   const categoriesChart = {
//     labels: categories.map((c) => c.category.replace(/"/g, "")),
//     datasets: [
//       { label: "Number of Products", data: categories.map((c) => c.count), backgroundColor: "hsl(280,80%,55%)" },
//     ],
//   };
 
//   const ratingsChart = {
//     labels: ratings.map((r) => `${r.rating} Star`),
//     datasets: [
//       {
//         label: "Number of Reviews",
//         data: ratings.map((r) => r.count),
//         backgroundColor: ["hsl(0,84%,60%)","hsl(24,84%,60%)","hsl(45,84%,60%)","hsl(142,71%,45%)","hsl(142,76%,36%)"],
//       },
//     ],
//   };
 
//   const sentimentsChart = {
//     labels: sentiments.map((s) => s.sentiment),
//     datasets: [
//       { label: "Count", data: sentiments.map((s) => s.count), backgroundColor: ["hsl(142,76%,36%)","hsl(24,95%,53%)","hsl(221,83%,53%)"] },
//     ],
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//       <ChartCard title="Top Products by Rating" isLoading={isLoading} summary={topProductsSummary} summaryLoading={topProductsSummaryLoading}>
//         <Bar data={topProductsChart} options={commonOptions} />
//       </ChartCard>

//       <ChartCard title="Top Reviews (Average Rating)" isLoading={isLoading} summary={topReviewsSummary} summaryLoading={topReviewsSummaryLoading}>
//         <Bar data={topReviewsChart} options={commonOptions} />
//       </ChartCard>

//       <ChartCard title="Top Trending Products" isLoading={isLoading} summary={trendingSummary} summaryLoading={trendingSummaryLoading}>
//         <Bar data={trendingChart} options={commonOptions} />
//       </ChartCard>

//       <ChartCard title="Products by Category" isLoading={isLoading} summary={categoriesSummary} summaryLoading={categoriesSummaryLoading}>
//         <Bar data={categoriesChart} options={commonOptions} />
//       </ChartCard>

//       <ChartCard title="Rating Distribution" isLoading={isLoading} summary={ratingsSummary} summaryLoading={ratingsSummaryLoading}>
//         <Bar data={ratingsChart} options={commonOptions} />
//       </ChartCard>

//       <ChartCard title="Sentiment Distribution" isLoading={isLoading} summary={sentimentsSummary} summaryLoading={sentimentsSummaryLoading}>
//         <Doughnut data={sentimentsChart} options={commonOptions} />
//       </ChartCard>
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
//         <div className="mt-3 text-sm text-muted-foreground">
//           {summaryLoading ? "Generating AI summary..." : summary}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// export default function ChartsGrid({ selectedSource }: { selectedSource: string }) {
//   const BASE_URL = "http://localhost:8000";

//   const [topProducts, setTopProducts] = useState<any[]>([]);
//   const [topReviews, setTopReviews] = useState<any[]>([]);
//   const [categories, setCategories] = useState<any[]>([]);
//   const [ratings, setRatings] = useState<any[]>([]);
//   const [sentiments, setSentiments] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchAll = async () => {
//       setIsLoading(true);
//       try {
//         const table = selectedSource === "amazon_reviews" ? "amazon_reviews" : "flipkart";
        
//         // Always fetch these
//         const productsRes = await fetch(`${BASE_URL}/top?table=${table}&n=10`);
//         const productsJson = await productsRes.json();
        
//         setTopProducts(Array.isArray(productsJson.data) ? productsJson.data : []);
//         setTopReviews(Array.isArray(productsJson.data) ? productsJson.data : []);

//         // Only fetch Amazon-specific stats if Amazon is selected
//         if (table === "amazon_reviews") {
//           const [catRes, ratRes, sentRes] = await Promise.all([
//             fetch(`${BASE_URL}/Amazon_Reviews/categories`),
//             fetch(`${BASE_URL}/Amazon_Reviews/ratings`),
//             fetch(`${BASE_URL}/Amazon_Reviews/sentiment`),
//           ]);

//           const categoriesJson = await catRes.json();
//           const ratingsJson = await ratRes.json();
//           const sentimentJson = await sentRes.json();

//           setCategories(Array.isArray(categoriesJson) ? categoriesJson : []);
//           setRatings(Array.isArray(ratingsJson) ? ratingsJson : []);
//           setSentiments(Array.isArray(sentimentJson) ? sentimentJson : []);
//         } else {
//           // For Flipkart, fetch category analytics
//           const catRes = await fetch(`${BASE_URL}/analytics/category`);
//           const categoryJson = await catRes.json();
          
//           setCategories(Array.isArray(categoryJson.categories) ? categoryJson.categories : []);
//           setRatings([]); // Empty for Flipkart
//           setSentiments([]); // Empty for Flipkart
//         }
//       } catch (error) {
//         console.error("Error fetching chart data:", error);
//         setTopProducts([]);
//         setTopReviews([]);
//         setCategories([]);
//         setRatings([]);
//         setSentiments([]);
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

//   // Chart Data - handles both Flipkart and Amazon data structures
//   const topProductsChart = {
//     labels: topProducts.map((p) => {
//       const name = p.title || p.product_title || p.product_name || "Unknown";
//       return name.replace(/"/g, "");
//     }),
//     datasets: [
//       { 
//         label: "Rating", 
//         data: topProducts.map((p) => p.rating || p.avg_rating || p.star_rating || 0), 
//         backgroundColor: "hsl(142,76%,36%)" 
//       }
//     ],
//   };

//   const topReviewsChart = {
//     labels: topReviews.map((r) => {
//       const name = r.product_title || r.title || r.product_name || "Unknown";
//       return name.replace(/"/g, "");
//     }),
//     datasets: [
//       { 
//         label: "Average Rating", 
//         data: topReviews.map((r) => r.avg_rating || r.rating || r.star_rating || 0), 
//         backgroundColor: "hsl(221,83%,53%)" 
//       },
//     ],
//   };

//   const trendingChart = {
//     labels: topReviews.map((r) => {
//       const name = r.product_title || r.title || r.product_name || "Unknown";
//       return name.replace(/"/g, "");
//     }),
//     datasets: [
//       { 
//         label: "Review Count", 
//         data: topReviews.map((r) => r.review_count || r.reviews || 0), 
//         backgroundColor: "hsl(45,84%,60%)" 
//       },
//     ],
//   };

//   const categoriesChart = {
//     labels: categories.map((c) => (c.category || "Unknown").replace(/"/g, "")),
//     datasets: [
//       { 
//         label: "Number of Products", 
//         data: categories.map((c) => c.count || 0), 
//         backgroundColor: "hsl(280,80%,55%)" 
//       },
//     ],
//   };

//   const ratingsChart = {
//     labels: ratings.map((r) => `${r.rating || 0} Star`),
//     datasets: [
//       {
//         label: "Number of Reviews",
//         data: ratings.map((r) => r.count || 0),
//         backgroundColor: [
//           "hsl(0,84%,60%)",
//           "hsl(24,84%,60%)",
//           "hsl(45,84%,60%)",
//           "hsl(142,71%,45%)",
//           "hsl(142,76%,36%)"
//         ],
//       },
//     ],
//   };

//   const sentimentsChart = {
//     labels: sentiments.map((s) => s.sentiment || "Unknown"),
//     datasets: [
//       { 
//         label: "Count", 
//         data: sentiments.map((s) => s.count || 0), 
//         backgroundColor: [
//           "hsl(142,76%,36%)",
//           "hsl(24,95%,53%)",
//           "hsl(221,83%,53%)"
//         ] 
//       },
//     ],
//   };

//   // AI Summaries - uses selectedSource dynamically
//   const { summary: topProductsSummary, loading: topProductsSummaryLoading } = useAISummary(
//     "Summarize insights of top products by rating",
//     selectedSource,
//     topProducts,
//     topProducts.length
//   );

//   const { summary: topReviewsSummary, loading: topReviewsSummaryLoading } = useAISummary(
//     "Summarize insights of top reviews (average rating)",
//     selectedSource,
//     topReviews,
//     topReviews.length
//   );

//   const { summary: trendingSummary, loading: trendingSummaryLoading } = useAISummary(
//     "Summarize trending products based on reviews",
//     selectedSource,
//     topReviews,
//     topReviews.length
//   );

//   const { summary: categoriesSummary, loading: categoriesSummaryLoading } = useAISummary(
//     "Summarize products by categories",
//     selectedSource,
//     categories,
//     categories.length
//   );

//   const { summary: ratingsSummary, loading: ratingsSummaryLoading } = useAISummary(
//     "Summarize rating distribution insights",
//     selectedSource,
//     ratings,
//     ratings.length
//   );

//   const { summary: sentimentsSummary, loading: sentimentsSummaryLoading } = useAISummary(
//     "Summarize sentiment distribution insights",
//     selectedSource,
//     sentiments,
//     sentiments.length
//   );

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//       <ChartCard 
//         title="Top Products by Rating" 
//         isLoading={isLoading} 
//         summary={topProductsSummary} 
//         summaryLoading={topProductsSummaryLoading}
//       >
//         <Bar data={topProductsChart} options={commonOptions} />
//       </ChartCard>

//       <ChartCard 
//         title="Top Reviews (Average Rating)" 
//         isLoading={isLoading} 
//         summary={topReviewsSummary} 
//         summaryLoading={topReviewsSummaryLoading}
//       >
//         <Bar data={topReviewsChart} options={commonOptions} />
//       </ChartCard>

//       <ChartCard 
//         title="Top Trending Products" 
//         isLoading={isLoading} 
//         summary={trendingSummary} 
//         summaryLoading={trendingSummaryLoading}
//       >
//         <Bar data={trendingChart} options={commonOptions} />
//       </ChartCard>

//       {categories.length > 0 && (
//         <ChartCard 
//           title="Products by Category" 
//           isLoading={isLoading} 
//           summary={categoriesSummary} 
//           summaryLoading={categoriesSummaryLoading}
//         >
//           <Bar data={categoriesChart} options={commonOptions} />
//         </ChartCard>
//       )}

//       {ratings.length > 0 && (
//         <ChartCard 
//           title="Rating Distribution" 
//           isLoading={isLoading} 
//           summary={ratingsSummary} 
//           summaryLoading={ratingsSummaryLoading}
//         >
//           <Bar data={ratingsChart} options={commonOptions} />
//         </ChartCard>
//       )}

//       {sentiments.length > 0 && (
//         <ChartCard 
//           title="Sentiment Distribution" 
//           isLoading={isLoading} 
//           summary={sentimentsSummary} 
//           summaryLoading={sentimentsSummaryLoading}
//         >
//           <Doughnut data={sentimentsChart} options={commonOptions} />
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
//         <div className="mt-3 text-sm text-muted-foreground">
//           {summaryLoading ? "Generating AI summary..." : summary}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// export default function ChartsGrid({ selectedSource }: { selectedSource: string }) {
//   const BASE_URL = "http://localhost:8000";

//   const [topProducts, setTopProducts] = useState<any[]>([]);
//   const [categories, setCategories] = useState<any[]>([]);
//   const [ratings, setRatings] = useState<any[]>([]);
//   const [sentiments, setSentiments] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchAll = async () => {
//       setIsLoading(true);
//       try {
//         const table = selectedSource === "amazon_reviews" ? "amazon_reviews" : "flipkart";
        
//         if (table === "amazon_reviews") {
//           // Fetch Amazon data in parallel
//           const [productsRes, categoriesRes, ratingsRes, sentimentRes] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=amazon_reviews&n=10`),
//             fetch(`${BASE_URL}/Amazon_Reviews/categories`),
//             fetch(`${BASE_URL}/Amazon_Reviews/ratings`),
//             fetch(`${BASE_URL}/Amazon_Reviews/sentiment`),
//           ]);

//           const [productsJson, categoriesJson, ratingsJson, sentimentJson] = await Promise.all([
//             productsRes.json(),
//             categoriesRes.json(),
//             ratingsRes.json(),
//             sentimentRes.json(),
//           ]);

//           setTopProducts(Array.isArray(productsJson.data) ? productsJson.data : []);
//           setCategories(Array.isArray(categoriesJson) ? categoriesJson : []);
//           setRatings(Array.isArray(ratingsJson) ? ratingsJson : []);
//           setSentiments(Array.isArray(sentimentJson) ? sentimentJson : []);
//         } else {
//           // Fetch Flipkart data in parallel
//           const [productsRes, categoryRes] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=flipkart&n=10`),
//             fetch(`${BASE_URL}/analytics/category`),
//           ]);

//           const [productsJson, categoryJson] = await Promise.all([
//             productsRes.json(),
//             categoryRes.json(),
//           ]);

//           setTopProducts(Array.isArray(productsJson.data) ? productsJson.data : []);
//           setCategories(Array.isArray(categoryJson.categories) ? categoryJson.categories : []);
//           setRatings([]);
//           setSentiments([]);
//         }
//       } catch (error) {
//         console.error("Error fetching chart data:", error);
//         setTopProducts([]);
//         setCategories([]);
//         setRatings([]);
//         setSentiments([]);
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

//   // Determine which source we're showing
//   const isAmazon = selectedSource === "amazon_reviews";
//   const isFlipkart = !isAmazon;

//   // Chart Data - handles both Flipkart and Amazon data structures
//   const topProductsChart = {
//     labels: topProducts.map((p) => {
//       const name = p.title || p.product_title || p.product_name || "Unknown";
//       return name.replace(/"/g, "").substring(0, 30) + (name.length > 30 ? "..." : "");
//     }),
//     datasets: [
//       { 
//         label: isAmazon ? "Average Rating" : "Rating", 
//         data: topProducts.map((p) => p.avg_rating || p.rating || p.star_rating || 0), 
//         backgroundColor: "hsl(142,76%,36%)" 
//       }
//     ],
//   };

//   const topReviewsChart = {
//     labels: topProducts.map((r) => {
//       const name = r.product_title || r.title || r.product_name || "Unknown";
//       return name.replace(/"/g, "").substring(0, 30) + (name.length > 30 ? "..." : "");
//     }),
//     datasets: [
//       { 
//         label: isAmazon ? "Review Count" : "Reviews", 
//         data: topProducts.map((r) => r.review_count || r.reviews || 0), 
//         backgroundColor: "hsl(221,83%,53%)" 
//       },
//     ],
//   };

//   const categoriesChart = {
//     labels: categories.map((c) => (c.category || "Unknown").replace(/"/g, "")),
//     datasets: [
//       { 
//         label: "Number of Products", 
//         data: categories.map((c) => c.count || 0), 
//         backgroundColor: "hsl(280,80%,55%)" 
//       },
//     ],
//   };

//   const ratingsChart = {
//     labels: ratings.map((r) => `${r.rating || 0} Star`),
//     datasets: [
//       {
//         label: "Number of Reviews",
//         data: ratings.map((r) => r.count || 0),
//         backgroundColor: [
//           "hsl(0,84%,60%)",
//           "hsl(24,84%,60%)",
//           "hsl(45,84%,60%)",
//           "hsl(142,71%,45%)",
//           "hsl(142,76%,36%)"
//         ],
//       },
//     ],
//   };

//   const sentimentsChart = {
//     labels: sentiments.map((s) => s.sentiment || "Unknown"),
//     datasets: [
//       { 
//         label: "Count", 
//         data: sentiments.map((s) => s.count || 0), 
//         backgroundColor: [
//           "hsl(142,76%,36%)",
//           "hsl(24,95%,53%)",
//           "hsl(221,83%,53%)"
//         ] 
//       },
//     ],
//   };

//   // AI Summaries - only generate for visible charts
//   const { summary: topProductsSummary, loading: topProductsSummaryLoading } = useAISummary(
//     isAmazon ? "Summarize insights of top Amazon products by rating" : "Summarize insights of top Flipkart products by rating",
//     selectedSource,
//     topProducts,
//     topProducts.length
//   );

//   const { summary: topReviewsSummary, loading: topReviewsSummaryLoading } = useAISummary(
//     isAmazon ? "Summarize Amazon products with most reviews" : "Summarize Flipkart products with most reviews",
//     selectedSource,
//     topProducts,
//     topProducts.length
//   );

//   const { summary: categoriesSummary, loading: categoriesSummaryLoading } = useAISummary(
//     "Summarize products by categories",
//     selectedSource,
//     categories,
//     categories.length
//   );

//   const { summary: ratingsSummary, loading: ratingsSummaryLoading } = useAISummary(
//     "Summarize rating distribution insights",
//     selectedSource,
//     ratings,
//     ratings.length
//   );

//   const { summary: sentimentsSummary, loading: sentimentsSummaryLoading } = useAISummary(
//     "Summarize sentiment distribution insights",
//     selectedSource,
//     sentiments,
//     sentiments.length
//   );

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//       {/* Top Products by Rating - Show for BOTH */}
//       <ChartCard 
//         title={isAmazon ? "Top Amazon Products by Rating" : "Top Flipkart Products by Rating"}
//         isLoading={isLoading} 
//         summary={topProductsSummary} 
//         summaryLoading={topProductsSummaryLoading}
//       >
//         <Bar data={topProductsChart} options={commonOptions} />
//       </ChartCard>

//       {/* Top Reviews/Products Count - Show for BOTH */}
//       <ChartCard 
//         title={isAmazon ? "Products with Most Reviews" : "Products with Most Reviews"}
//         isLoading={isLoading} 
//         summary={topReviewsSummary} 
//         summaryLoading={topReviewsSummaryLoading}
//       >
//         <Bar data={topReviewsChart} options={commonOptions} />
//       </ChartCard>

//       {/* Products by Category - Show for BOTH */}
//       {categories.length > 0 && (
//         <ChartCard 
//           title={isAmazon ? "Amazon Categories Distribution" : "Flipkart Categories Distribution"}
//           isLoading={isLoading} 
//           summary={categoriesSummary} 
//           summaryLoading={categoriesSummaryLoading}
//         >
//           <Bar data={categoriesChart} options={commonOptions} />
//         </ChartCard>
//       )}

//       {/* Rating Distribution - Show ONLY for Amazon */}
//       {isAmazon && ratings.length > 0 && (
//         <ChartCard 
//           title="Rating Distribution (Amazon)"
//           isLoading={isLoading} 
//           summary={ratingsSummary} 
//           summaryLoading={ratingsSummaryLoading}
//         >
//           <Bar data={ratingsChart} options={commonOptions} />
//         </ChartCard>
//       )}

//       {/* Sentiment Distribution - Show ONLY for Amazon */}
//       {isAmazon && sentiments.length > 0 && (
//         <ChartCard 
//           title="Sentiment Distribution (Amazon)"
//           isLoading={isLoading} 
//           summary={sentimentsSummary} 
//           summaryLoading={sentimentsSummaryLoading}
//         >
//           <Doughnut data={sentimentsChart} options={commonOptions} />
//         </ChartCard>
//       )}
//     </div>
//   );
// }
 
 
// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Skeleton } from "@/components/ui/skeleton";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
// import { Bar, Doughnut } from "react-chartjs-2";
// import { useChartInsight } from "@/hooks/useChartInsight";

// ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// interface ChartCardProps {
//   title: string;
//   children: React.ReactNode;
//   isLoading?: boolean;
//   summary?: string | null;
//   summaryLoading?: boolean;
// }

// function ChartCard({ title, children, isLoading, summary, summaryLoading }: ChartCardProps) {
//   return (
//     <Card className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
//       <CardHeader className="flex flex-row items-center justify-between pb-4">
//         <CardTitle className="text-lg font-semibold">{title}</CardTitle>
//         <Badge variant="secondary" className="text-xs">Live Data</Badge>
//       </CardHeader>
//       <CardContent className="p-0">
//         <div className="chart-container relative h-80 w-full">
//           {isLoading ? <Skeleton className="w-full h-full" /> : children}
//         </div>
//         {summary && (
//           <div className="mt-3 text-sm text-muted-foreground">
//             {summaryLoading ? "Generating AI summary..." : summary}
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   );
// }

// export default function ChartsGrid() {
//   const BASE_URL = "http://localhost:8000";
//   const [topProducts, setTopProducts] = useState<any[]>([]);
//   const [topReviews, setTopReviews] = useState<any[]>([]);
//   const [categories, setCategories] = useState<any[]>([]);
//   const [ratings, setRatings] = useState<any[]>([]);
//   const [sentiments, setSentiments] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchAll = async () => {
//       try {
//         const [productsRes, reviewsRes, categoriesRes, ratingsRes, sentimentRes] = await Promise.all([
//           fetch(`${BASE_URL}/top?table=products&n=10`),
//           fetch(`${BASE_URL}/top?table=amazon_reviews&n=10`),
//           fetch(`${BASE_URL}/Amazon_Reviews/categories`),
//           fetch(`${BASE_URL}/Amazon_Reviews/ratings`),
//           fetch(`${BASE_URL}/Amazon_Reviews/sentiment`),
//         ]);

//         const productsJson = await productsRes.json();
//         const reviewsJson = await reviewsRes.json();
//         const categoriesJson = await categoriesRes.json();
//         const ratingsJson = await ratingsRes.json();
//         const sentimentJson = await sentimentRes.json();

//         setTopProducts(Array.isArray(productsJson.data) ? productsJson.data : []);
//         setTopReviews(Array.isArray(reviewsJson.data) ? reviewsJson.data : []);
//         setCategories(Array.isArray(categoriesJson) ? categoriesJson : []);
//         setRatings(Array.isArray(ratingsJson) ? ratingsJson : []);
//         setSentiments(Array.isArray(sentimentJson) ? sentimentJson : []);
//       } catch (error) {
//         console.error("Error fetching chart data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchAll();
//   }, []);

//   const commonOptions = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: true, position: "bottom" as const } } };

//   const truncateTitle = (title: string, maxLength: number = 30) => {
//     if (!title) return "Unknown";
//     return title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
//   };

//   // Chart data
//   const topProductsChart = { labels: topProducts.map(p => truncateTitle(p.title)), datasets: [{ label: "Rating", data: topProducts.map(p => p.rating), backgroundColor: "hsl(142,76%,36%)" }] };
//   const topReviewsChart = { labels: topReviews.map(r => truncateTitle(r.product_title)), datasets: [{ label: "Average Rating", data: topReviews.map(r => r.avg_rating), backgroundColor: "hsl(221,83%,53%)" }] };
//   const categoriesChart = { labels: categories.map(c => c.category || "Unknown"), datasets: [{ label: "Number of Products", data: categories.map(c => c.count), backgroundColor: "hsl(280,80%,55%)" }] };
//   const ratingsChart = { labels: ratings.map(r => `${r.rating} Star`), datasets: [{ label: "Number of Reviews", data: ratings.map(r => r.count), backgroundColor: ["hsl(0,84%,60%)","hsl(24,84%,60%)","hsl(45,84%,60%)","hsl(142,71%,45%)","hsl(142,76%,36%)"] }] };
//   const sentimentsChart = { labels: sentiments.map(s => s.sentiment || "Unknown"), datasets: [{ label: "Count", data: sentiments.map(s => s.count), backgroundColor: ["hsl(142,76%,36%)","hsl(24,95%,53%)","hsl(221,83%,53%)"] }] };

//   // AI Summaries via Ollama
//   const topProductsInsight = useChartInsight("Bar", topProductsChart);
//   const topReviewsInsight = useChartInsight("Bar", topReviewsChart);
//   const categoriesInsight = useChartInsight("Bar", categoriesChart);
//   const ratingsInsight = useChartInsight("Bar", ratingsChart);
//   const sentimentsInsight = useChartInsight("Doughnut", sentimentsChart);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//       <ChartCard title="Top Products by Rating" isLoading={isLoading} summary={topProductsInsight.insight} summaryLoading={topProductsInsight.loading}><Bar data={topProductsChart} options={commonOptions} /></ChartCard>
//       <ChartCard title="Top Reviews (Average Rating)" isLoading={isLoading} summary={topReviewsInsight.insight} summaryLoading={topReviewsInsight.loading}><Bar data={topReviewsChart} options={commonOptions} /></ChartCard>
//       <ChartCard title="Products by Category" isLoading={isLoading} summary={categoriesInsight.insight} summaryLoading={categoriesInsight.loading}><Bar data={categoriesChart} options={commonOptions} /></ChartCard>
//       <ChartCard title="Rating Distribution" isLoading={isLoading} summary={ratingsInsight.insight} summaryLoading={ratingsInsight.loading}><Bar data={ratingsChart} options={commonOptions} /></ChartCard>
//       <ChartCard title="Sentiment Distribution" isLoading={isLoading} summary={sentimentsInsight.insight} summaryLoading={sentimentsInsight.loading}><Doughnut data={sentimentsChart} options={commonOptions} /></ChartCard>
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Skeleton } from "@/components/ui/skeleton";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
// import { Bar, Doughnut } from "react-chartjs-2";

// ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// interface FilterState {
//   category: string;
//   priceRange: [number, number];
//   rating: number;
//   dateRange: string;
//   showTrendingOnly: boolean;
//   sortBy: string;
// }

// interface ChartsGridProps {
//   filters?: FilterState | null;
// }

// interface ChartCardProps {
//   title: string;
//   children: React.ReactNode;
//   isLoading?: boolean;
// }

// function ChartCard({ title, children, isLoading }: ChartCardProps) {
//   return (
//     <Card className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
//       <CardHeader className="flex flex-row items-center justify-between pb-4">
//         <CardTitle className="text-lg font-semibold">{title}</CardTitle>
//         <Badge variant="secondary" className="text-xs">Live Data</Badge>
//       </CardHeader>
//       <CardContent className="p-0">
//         <div className="chart-container relative h-80 w-full">
//           {isLoading ? <Skeleton className="w-full h-full" /> : children}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// export default function ChartsGrid({ filters }: ChartsGridProps) {
//   const BASE_URL = "http://localhost:8000";
//   const [topProducts, setTopProducts] = useState<any[]>([]);
//   const [topReviews, setTopReviews] = useState<any[]>([]);
//   const [categories, setCategories] = useState<any[]>([]);
//   const [ratings, setRatings] = useState<any[]>([]);
//   const [sentiments, setSentiments] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchAll = async () => {
//       setIsLoading(true);
//       try {
//         // If filters are applied, use the filtered endpoint
//         if (filters && (filters.category !== "All Categories" || filters.rating > 0)) {
//           // Build query params
//           const params = new URLSearchParams();
//           if (filters.category && filters.category !== "All Categories") {
//             params.append("category", filters.category);
//           }
//           if (filters.rating > 0) {
//             params.append("min_rating", filters.rating.toString());
//           }
//           if (filters.dateRange) {
//             params.append("date_range", filters.dateRange);
//           }

//           // Fetch filtered analytics
//           const analyticsRes = await fetch(`${BASE_URL}/Amazon_Reviews/analytics/filtered?${params.toString()}`);
//           const analyticsData = await analyticsRes.json();

//           console.log("Filtered analytics data:", analyticsData);

//           // Set data from filtered response
//           setCategories(analyticsData.category_stats || []);
//           setRatings(analyticsData.rating_distribution || []);
//           setSentiments(analyticsData.sentiment_distribution || []);
//           setTopReviews(analyticsData.top_products || []);

//           // Still fetch top products from products table
//           const productsRes = await fetch(`${BASE_URL}/top?table=products&n=10`);
//           const productsJson = await productsRes.json();
//           setTopProducts(Array.isArray(productsJson.data) ? productsJson.data : []);

//         } else {
//           // No filters applied - fetch all data normally
//           const [productsRes, reviewsRes, categoriesRes, ratingsRes, sentimentRes] = await Promise.all([
//             fetch(`${BASE_URL}/top?table=products&n=10`),
//             fetch(`${BASE_URL}/top?table=amazon_reviews&n=10`),
//             fetch(`${BASE_URL}/Amazon_Reviews/categories`),
//             fetch(`${BASE_URL}/Amazon_Reviews/ratings`),
//             fetch(`${BASE_URL}/Amazon_Reviews/sentiment`),
//           ]);

//           const productsJson = await productsRes.json();
//           const reviewsJson = await reviewsRes.json();
//           const categoriesJson = await categoriesRes.json();
//           const ratingsJson = await ratingsRes.json();
//           const sentimentJson = await sentimentRes.json();

//           setTopProducts(Array.isArray(productsJson.data) ? productsJson.data : []);
//           setTopReviews(Array.isArray(reviewsJson.data) ? reviewsJson.data : []);
//           setCategories(Array.isArray(categoriesJson) ? categoriesJson : []);
//           setRatings(Array.isArray(ratingsJson) ? ratingsJson : []);
//           setSentiments(Array.isArray(sentimentJson) ? sentimentJson : []);
//         }
//       } catch (error) {
//         console.error("Error fetching chart data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchAll();
//   }, [filters]); // Re-fetch when filters change

//   const commonOptions = { 
//     responsive: true, 
//     maintainAspectRatio: false, 
//     plugins: { 
//       legend: { 
//         display: true, 
//         position: "bottom" as const 
//       } 
//     } 
//   };

//   const truncateTitle = (title: string, maxLength: number = 30) => {
//     if (!title) return "Unknown";
//     return title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
//   };

//   // Chart data
//   const topProductsChart = { 
//     labels: topProducts.map(p => truncateTitle(p.title || p.product_title)), 
//     datasets: [{ 
//       label: "Rating", 
//       data: topProducts.map(p => p.rating || p.avg_rating), 
//       backgroundColor: "hsl(142,76%,36%)" 
//     }] 
//   };

//   const topReviewsChart = { 
//     labels: topReviews.map(r => truncateTitle(r.product_title)), 
//     datasets: [{ 
//       label: "Average Rating", 
//       data: topReviews.map(r => r.avg_rating), 
//       backgroundColor: "hsl(221,83%,53%)" 
//     }] 
//   };

//   const categoriesChart = { 
//     labels: categories.map(c => c.category || "Unknown"), 
//     datasets: [{ 
//       label: "Number of Products", 
//       data: categories.map(c => c.count), 
//       backgroundColor: "hsl(280,80%,55%)" 
//     }] 
//   };

//   const ratingsChart = { 
//     labels: ratings.map(r => `${r.rating} Star`), 
//     datasets: [{ 
//       label: "Number of Reviews", 
//       data: ratings.map(r => r.count), 
//       backgroundColor: [
//         "hsl(0,84%,60%)",
//         "hsl(24,84%,60%)",
//         "hsl(45,84%,60%)",
//         "hsl(142,71%,45%)",
//         "hsl(142,76%,36%)"
//       ] 
//     }] 
//   };

//   const sentimentsChart = { 
//     labels: sentiments.map(s => s.sentiment || "Unknown"), 
//     datasets: [{ 
//       label: "Count", 
//       data: sentiments.map(s => s.count), 
//       backgroundColor: [
//         "hsl(142,76%,36%)",
//         "hsl(24,95%,53%)",
//         "hsl(221,83%,53%)"
//       ] 
//     }] 
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//       <ChartCard title="Top Products by Rating" isLoading={isLoading}>
//         <Bar data={topProductsChart} options={commonOptions} />
//       </ChartCard>
      
//       <ChartCard title="Top Reviews (Average Rating)" isLoading={isLoading}>
//         <Bar data={topReviewsChart} options={commonOptions} />
//       </ChartCard>
      
//       <ChartCard title="Products by Category" isLoading={isLoading}>
//         <Bar data={categoriesChart} options={commonOptions} />
//       </ChartCard>
      
//       <ChartCard title="Rating Distribution" isLoading={isLoading}>
//         <Bar data={ratingsChart} options={commonOptions} />
//       </ChartCard>
      
//       <ChartCard title="Sentiment Distribution" isLoading={isLoading}>
//         <Doughnut data={sentimentsChart} options={commonOptions} />
//       </ChartCard>
//     </div>
//   );
// }

// ============================================
// FILE 1: src/components/dashboard/charts-grid.tsx (UPDATED WITH AI)
// ============================================
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { useAISummary } from "@/hooks/useAISummary";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

interface FilterState {
  category: string;
  priceRange: [number, number];
  rating: number;
  dateRange: string;
  showTrendingOnly: boolean;
  sortBy: string;
}

interface ChartsGridProps {
  filters?: FilterState | null;
}

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  isLoading?: boolean;
  chartData?: any[];
  chartType?: string;
}

function ChartCard({ title, children, isLoading, chartData, chartType }: ChartCardProps) {
  return (
    <Card className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <Badge variant="secondary" className="text-xs">Live Data</Badge>
      </CardHeader>
      <CardContent className="p-0">
        <div className="chart-container relative h-80 w-full">
          {isLoading ? <Skeleton className="w-full h-full" /> : children}
        </div>
        {summary && (
          <div className="mt-3 text-sm text-muted-foreground">
            {summaryLoading ? "Generating AI summary..." : summary}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function ChartsGrid({ selectedSource }: { selectedSource: string }) {
  const BASE_URL = "http://localhost:8000";

  const [flipkartProducts, setFlipkartProducts] = useState<any[]>([]);
  const [amazonProducts, setAmazonProducts] = useState<any[]>([]);
  const [flipkartCategories, setFlipkartCategories] = useState<any[]>([]);
  const [amazonCategories, setAmazonCategories] = useState<any[]>([]);
  const [ratings, setRatings] = useState<any[]>([]);
  const [sentiments, setSentiments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
  const fetchAll = async () => {
    setIsLoading(true);
    try {
      if (selectedSource === "both") {
        // Fetch data from BOTH sources in parallel
        const [
          flipkartRes,
          amazonRes,
          flipkartCatRes,
          amazonCatRes,
          ratingsRes,
          sentimentRes
        ] = await Promise.all([
          fetch(`${BASE_URL}/top?table=flipkart&n=10`),
          fetch(`${BASE_URL}/top?table=amazon_reviews&n=10`),
          fetch(`${BASE_URL}/flipkart/categories`), // ✅ Updated endpoint
          fetch(`${BASE_URL}/Amazon_Reviews/categories`),
          fetch(`${BASE_URL}/Amazon_Reviews/ratings`),
          fetch(`${BASE_URL}/Amazon_Reviews/sentiment`),
        ]);

        const [
          flipkartJson,
          amazonJson,
          flipkartCatJson,
          amazonCatJson,
          ratingsJson,
          sentimentJson
        ] = await Promise.all([
          flipkartRes.json(),
          amazonRes.json(),
          flipkartCatRes.json(),
          amazonCatRes.json(),
          ratingsRes.json(),
          sentimentRes.json(),
        ]);

        console.log("Flipkart Categories Response:", flipkartCatJson);
        console.log("Amazon Categories Response:", amazonCatJson);

        setFlipkartProducts(Array.isArray(flipkartJson.data) ? flipkartJson.data : []);
        setAmazonProducts(Array.isArray(amazonJson.data) ? amazonJson.data : []);
        setFlipkartCategories(Array.isArray(flipkartCatJson) ? flipkartCatJson : []);
        setAmazonCategories(Array.isArray(amazonCatJson) ? amazonCatJson : []);
        setRatings(Array.isArray(ratingsJson) ? ratingsJson : []);
        setSentiments(Array.isArray(sentimentJson) ? sentimentJson : []);

      } else if (selectedSource === "amazon_reviews") {
        // Fetch Amazon data only
        const [productsRes, categoriesRes, ratingsRes, sentimentRes] = await Promise.all([
          fetch(`${BASE_URL}/top?table=amazon_reviews&n=10`),
          fetch(`${BASE_URL}/Amazon_Reviews/categories`),
          fetch(`${BASE_URL}/Amazon_Reviews/ratings`),
          fetch(`${BASE_URL}/Amazon_Reviews/sentiment`),
        ]);

        const [productsJson, categoriesJson, ratingsJson, sentimentJson] = await Promise.all([
          productsRes.json(),
          categoriesRes.json(),
          ratingsRes.json(),
          sentimentRes.json(),
        ]);

        setFlipkartProducts([]);
        setAmazonProducts(Array.isArray(productsJson.data) ? productsJson.data : []);
        setFlipkartCategories([]);
        setAmazonCategories(Array.isArray(categoriesJson) ? categoriesJson : []);
        setRatings(Array.isArray(ratingsJson) ? ratingsJson : []);
        setSentiments(Array.isArray(sentimentJson) ? sentimentJson : []);

      } else {
        // Fetch Flipkart data only
        const [productsRes, categoryRes] = await Promise.all([
          fetch(`${BASE_URL}/top?table=flipkart&n=10`),
          fetch(`${BASE_URL}/flipkart/categories`), // ✅ Updated endpoint
        ]);

        const [productsJson, categoryJson] = await Promise.all([
          productsRes.json(),
          categoryRes.json(),
        ]);

        console.log("Flipkart Category Response:", categoryJson);

        setFlipkartProducts(Array.isArray(productsJson.data) ? productsJson.data : []);
        setAmazonProducts([]);
        setFlipkartCategories(Array.isArray(categoryJson) ? categoryJson : []);
        setAmazonCategories([]);
        setRatings([]);
        setSentiments([]);
      }
    } catch (error) {
      console.error("Error fetching chart data:", error);
      setFlipkartProducts([]);
      setAmazonProducts([]);
      setFlipkartCategories([]);
      setAmazonCategories([]);
      setRatings([]);
      setSentiments([]);
    } finally {
      setIsLoading(false);
    }
  };

  fetchAll();
}, [selectedSource]);

  // useEffect(() => {
  //   const fetchAll = async () => {
  //     setIsLoading(true);
  //     try {
  //       if (selectedSource === "both") {
  //         // Fetch data from BOTH sources in parallel
  //         const [
  //           flipkartRes,
  //           amazonRes,
  //           flipkartCatRes,
  //           amazonCatRes,
  //           ratingsRes,
  //           sentimentRes
  //         ] = await Promise.all([
  //           fetch(`${BASE_URL}/top?table=flipkart&n=10`),
  //           fetch(`${BASE_URL}/top?table=amazon_reviews&n=10`),
  //           fetch(`${BASE_URL}/analytics/category`),
  //           fetch(`${BASE_URL}/Amazon_Reviews/categories`),
  //           fetch(`${BASE_URL}/Amazon_Reviews/ratings`),
  //           fetch(`${BASE_URL}/Amazon_Reviews/sentiment`),
  //         ]);

  //         const [
  //           flipkartJson,
  //           amazonJson,
  //           flipkartCatJson,
  //           amazonCatJson,
  //           ratingsJson,
  //           sentimentJson
  //         ] = await Promise.all([
  //           flipkartRes.json(),
  //           amazonRes.json(),
  //           flipkartCatRes.json(),
  //           amazonCatRes.json(),
  //           ratingsRes.json(),
  //           sentimentRes.json(),
  //         ]);

  //         console.log("Flipkart Categories Response:", flipkartCatJson);
  //         console.log("Amazon Categories Response:", amazonCatJson);

  //         setFlipkartProducts(Array.isArray(flipkartJson.data) ? flipkartJson.data : []);
  //         setAmazonProducts(Array.isArray(amazonJson.data) ? amazonJson.data : []);
          
  //         // Handle Flipkart categories
  //         const fCats = flipkartCatJson.categories || flipkartCatJson;
  //         setFlipkartCategories(Array.isArray(fCats) ? fCats : []);
          
  //         // Handle Amazon categories
  //         setAmazonCategories(Array.isArray(amazonCatJson) ? amazonCatJson : []);
          
  //         setRatings(Array.isArray(ratingsJson) ? ratingsJson : []);
  //         setSentiments(Array.isArray(sentimentJson) ? sentimentJson : []);

  //       } else if (selectedSource === "amazon_reviews") {
  //         // Fetch Amazon data only
  //         const [productsRes, categoriesRes, ratingsRes, sentimentRes] = await Promise.all([
  //           fetch(`${BASE_URL}/top?table=amazon_reviews&n=10`),
  //           fetch(`${BASE_URL}/Amazon_Reviews/categories`),
  //           fetch(`${BASE_URL}/Amazon_Reviews/ratings`),
  //           fetch(`${BASE_URL}/Amazon_Reviews/sentiment`),
  //         ]);

  //         const [productsJson, categoriesJson, ratingsJson, sentimentJson] = await Promise.all([
  //           productsRes.json(),
  //           categoriesRes.json(),
  //           ratingsRes.json(),
  //           sentimentRes.json(),
  //         ]);

  //         setFlipkartProducts([]);
  //         setAmazonProducts(Array.isArray(productsJson.data) ? productsJson.data : []);
  //         setFlipkartCategories([]);
  //         setAmazonCategories(Array.isArray(categoriesJson) ? categoriesJson : []);
  //         setRatings(Array.isArray(ratingsJson) ? ratingsJson : []);
  //         setSentiments(Array.isArray(sentimentJson) ? sentimentJson : []);

  //       } else {
  //         // Fetch Flipkart data only
  //         const [productsRes, categoryRes] = await Promise.all([
  //           fetch(`${BASE_URL}/top?table=flipkart&n=10`),
  //           fetch(`${BASE_URL}/analytics/category`),
  //         ]);

  //         const [productsJson, categoryJson] = await Promise.all([
  //           productsRes.json(),
  //           categoryRes.json(),
  //         ]);

  //         console.log("Flipkart Category Response:", categoryJson);

  //         setFlipkartProducts(Array.isArray(productsJson.data) ? productsJson.data : []);
  //         setAmazonProducts([]);
          
  //         // Handle Flipkart categories - try both formats
  //         const fCats = categoryJson.categories || categoryJson;
  //         setFlipkartCategories(Array.isArray(fCats) ? fCats : []);
          
  //         setAmazonCategories([]);
  //         setRatings([]);
  //         setSentiments([]);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching chart data:", error);
  //       setFlipkartProducts([]);
  //       setAmazonProducts([]);
  //       setFlipkartCategories([]);
  //       setAmazonCategories([]);
  //       setRatings([]);
  //       setSentiments([]);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchAll();
  // }, [selectedSource]);

  const commonOptions = { 
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: { 
      legend: { 
        display: true, 
        position: "bottom" as const 
      } 
    } 
  };

  const truncateTitle = (title: string, maxLength: number = 30) => {
    if (!title) return "Unknown";
    return title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
  };

  // Determine display mode
  const showBoth = selectedSource === "both";
  const isAmazon = selectedSource === "amazon_reviews";
  const isFlipkart = !isAmazon && !showBoth;

  // Helper function to truncate names
  const truncateName = (name: string) => {
    const cleaned = name.replace(/"/g, "");
    return cleaned.substring(0, 30) + (cleaned.length > 30 ? "..." : "");
  };

  // Flipkart Products Chart
  const flipkartProductsChart = {
    labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
    datasets: [
      { 
        label: "Flipkart Rating", 
        data: flipkartProducts.map((p) => p.rating || 0), 
        backgroundColor: "hsl(142,76%,36%)" 
      }
    ],
  };

  const flipkartReviewsChart = {
    labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
    datasets: [
      { 
        label: "Flipkart Reviews", 
        data: flipkartProducts.map((p) => p.reviews || 0), 
        backgroundColor: "hsl(221,83%,53%)" 
      }
    ],
  };

  // Amazon Products Chart
  const amazonProductsChart = {
    labels: amazonProducts.map((p) => truncateName(p.product_title || p.product_name || "Unknown")),
    datasets: [
      { 
        label: "Amazon Rating", 
        data: amazonProducts.map((p) => p.avg_rating || p.star_rating || 0), 
        backgroundColor: "hsl(45,84%,60%)" 
      }
    ],
  };

  const amazonReviewsChart = {
    labels: amazonProducts.map((p) => truncateName(p.product_title || p.product_name || "Unknown")),
    datasets: [
      { 
        label: "Amazon Reviews", 
        data: amazonProducts.map((p) => p.review_count || 0), 
        backgroundColor: "hsl(280,80%,55%)" 
      }
    ],
  };

  // Combined Charts (for "Both" option)
  const combinedProductsChart = {
    labels: [
      ...flipkartProducts.map((p) => `F: ${truncateName(p.title || "Unknown")}`),
      ...amazonProducts.map((p) => `A: ${truncateName(p.product_title || p.product_name || "Unknown")}`)
    ],
    datasets: [
      { 
        label: "Rating", 
        data: [
          ...flipkartProducts.map((p) => p.rating || 0),
          ...amazonProducts.map((p) => p.avg_rating || p.star_rating || 0)
        ], 
        backgroundColor: [
          ...flipkartProducts.map(() => "hsl(142,76%,36%)"),
          ...amazonProducts.map(() => "hsl(45,84%,60%)")
        ]
      }
    ],
  };

  const combinedReviewsChart = {
    labels: [
      ...flipkartProducts.map((p) => `F: ${truncateName(p.title || "Unknown")}`),
      ...amazonProducts.map((p) => `A: ${truncateName(p.product_title || p.product_name || "Unknown")}`)
    ],
    datasets: [
      { 
        label: "Reviews", 
        data: [
          ...flipkartProducts.map((p) => p.reviews || 0),
          ...amazonProducts.map((p) => p.review_count || 0)
        ], 
        backgroundColor: [
          ...flipkartProducts.map(() => "hsl(221,83%,53%)"),
          ...amazonProducts.map(() => "hsl(280,80%,55%)")
        ]
      }
    ],
  };

  // Categories Charts - Fixed to handle proper data structure
  const flipkartCategoriesChart = {
    labels: flipkartCategories.map((c) => {
      // Handle both {category: "name", count: 123} and {category_name: "name", product_count: 123}
      const catName = c.category || c.category_name || c.name || "Unknown";
      return catName.replace(/"/g, "");
    }),
    datasets: [
      { 
        label: "Flipkart Products", 
        data: flipkartCategories.map((c) => {
          // Handle both count fields
          return c.count || c.product_count || c.total_products || 0;
        }), 
        backgroundColor: "hsl(142,76%,36%)" 
      },
    ],
  };

  const amazonCategoriesChart = {
    labels: amazonCategories.map((c) => {
      const catName = c.category || c.category_name || "Unknown";
      return catName.replace(/"/g, "");
    }),
    datasets: [
      { 
        label: "Amazon Products", 
        data: amazonCategories.map((c) => c.count || c.product_count || 0), 
        backgroundColor: "hsl(45,84%,60%)" 
      },
    ],
  };

  const ratingsChart = {
    labels: ratings.map((r) => `${r.rating || 0} Star`),
    datasets: [
      {
        label: "Number of Reviews",
        data: ratings.map((r) => r.count || 0),
        backgroundColor: [
          "hsl(0,84%,60%)",
          "hsl(24,84%,60%)",
          "hsl(45,84%,60%)",
          "hsl(142,71%,45%)",
          "hsl(142,76%,36%)"
        ],
      },
    ],
  };

  const sentimentsChart = {
    labels: sentiments.map((s) => s.sentiment || "Unknown"),
    datasets: [
      { 
        label: "Count", 
        data: sentiments.map((s) => s.count || 0), 
        backgroundColor: [
          "hsl(142,76%,36%)",
          "hsl(24,95%,53%)",
          "hsl(221,83%,53%)"
        ] 
      },
    ],
  };

  // AI Summaries - Only create when data exists
  const { summary: flipkartProductsSummary, loading: flipkartProductsLoading } = useAISummary(
    "Summarize top Flipkart products by rating",
    "flipkart",
    flipkartProducts,
    flipkartProducts.length
  );

  const { summary: amazonProductsSummary, loading: amazonProductsLoading } = useAISummary(
    "Summarize top Amazon products by rating",
    "amazon_reviews",
    amazonProducts,
    amazonProducts.length
  );

  const { summary: flipkartCategoriesSummary, loading: flipkartCategoriesLoading } = useAISummary(
    "Summarize Flipkart category distribution",
    "flipkart",
    flipkartCategories,
    flipkartCategories.length
  );

  const { summary: amazonCategoriesSummary, loading: amazonCategoriesLoading } = useAISummary(
    "Summarize Amazon category distribution",
    "amazon_reviews",
    amazonCategories,
    amazonCategories.length
  );

  const { summary: ratingsSummary, loading: ratingsLoading } = useAISummary(
    "Summarize rating distribution",
    "amazon_reviews",
    ratings,
    ratings.length
  );

  const { summary: sentimentsSummary, loading: sentimentsLoading } = useAISummary(
    "Summarize sentiment distribution",
    "amazon_reviews",
    sentiments,
    sentiments.length
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Products by Rating */}
      {showBoth ? (
        <ChartCard 
          title="Top Products by Rating (Both Sources)"
          isLoading={isLoading} 
          summary={flipkartProductsSummary || amazonProductsSummary} 
          summaryLoading={flipkartProductsLoading || amazonProductsLoading}
        >
          <Bar data={combinedProductsChart} options={commonOptions} />
        </ChartCard>
      ) : isFlipkart ? (
        flipkartProducts.length > 0 && (
          <ChartCard 
            title="Top Flipkart Products by Rating"
            isLoading={isLoading} 
            summary={flipkartProductsSummary} 
            summaryLoading={flipkartProductsLoading}
          >
            <Bar data={flipkartProductsChart} options={commonOptions} />
          </ChartCard>
        )
      ) : (
        amazonProducts.length > 0 && (
          <ChartCard 
            title="Top Amazon Products by Rating"
            isLoading={isLoading} 
            summary={amazonProductsSummary} 
            summaryLoading={amazonProductsLoading}
          >
            <Bar data={amazonProductsChart} options={commonOptions} />
          </ChartCard>
        )
      )}

      {/* Products with Most Reviews */}
      {showBoth ? (
        <ChartCard 
          title="Products with Most Reviews (Both Sources)"
          isLoading={isLoading} 
          summary={flipkartProductsSummary || amazonProductsSummary} 
          summaryLoading={flipkartProductsLoading || amazonProductsLoading}
        >
          <Bar data={combinedReviewsChart} options={commonOptions} />
        </ChartCard>
      ) : isFlipkart ? (
        flipkartProducts.length > 0 && (
          <ChartCard 
            title="Flipkart Products with Most Reviews"
            isLoading={isLoading} 
            summary={flipkartProductsSummary} 
            summaryLoading={flipkartProductsLoading}
          >
            <Bar data={flipkartReviewsChart} options={commonOptions} />
          </ChartCard>
        )
      ) : (
        amazonProducts.length > 0 && (
          <ChartCard 
            title="Amazon Products with Most Reviews"
            isLoading={isLoading} 
            summary={amazonProductsSummary} 
            summaryLoading={amazonProductsLoading}
          >
            <Bar data={amazonReviewsChart} options={commonOptions} />
          </ChartCard>
        )
      )}

      {/* Flipkart Categories */}
      {(showBoth || isFlipkart) && flipkartCategories.length > 0 && (
        <ChartCard 
          title="Flipkart Categories Distribution"
          isLoading={isLoading} 
          summary={flipkartCategoriesSummary} 
          summaryLoading={flipkartCategoriesLoading}
        >
          <Bar data={flipkartCategoriesChart} options={commonOptions} />
        </ChartCard>
      )}

      {/* Amazon Categories */}
      {(showBoth || isAmazon) && amazonCategories.length > 0 && (
        <ChartCard 
          title="Amazon Categories Distribution"
          isLoading={isLoading} 
          summary={amazonCategoriesSummary} 
          summaryLoading={amazonCategoriesLoading}
        >
          <Bar data={amazonCategoriesChart} options={commonOptions} />
        </ChartCard>
      )}

      {/* Rating Distribution - Amazon Only or Both */}
      {(showBoth || isAmazon) && ratings.length > 0 && (
        <ChartCard 
          title="Rating Distribution (Amazon)"
          isLoading={isLoading} 
          summary={ratingsSummary} 
          summaryLoading={ratingsLoading}
        >
          <Bar data={ratingsChart} options={commonOptions} />
        </ChartCard>
      )}

      {/* Sentiment Distribution - Amazon Only or Both */}
      {(showBoth || isAmazon) && sentiments.length > 0 && (
        <ChartCard 
          title="Sentiment Distribution (Amazon)"
          isLoading={isLoading} 
          summary={sentimentsSummary} 
          summaryLoading={sentimentsLoading}
        >
          <Doughnut data={sentimentsChart} options={commonOptions} />
        </ChartCard>
      )}
    </div>
  );
}
