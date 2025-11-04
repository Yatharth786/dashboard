
// // ============================================
// // FILE 1: src/components/dashboard/charts-grid.tsx (UPDATED WITH AI)
// // ============================================
// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Skeleton } from "@/components/ui/skeleton";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
// import { Bar, Doughnut } from "react-chartjs-2";
// import { useAISummary } from "@/hooks/useAISummary";

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
//   chartData?: any[];
//   chartType?: string;
// }

// function ChartCard({ title, children, isLoading, chartData, chartType }: ChartCardProps) {
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

// export default function ChartsGrid({ selectedSource }: { selectedSource: string }) {
//   const BASE_URL = "http://localhost:8000";

//   const [flipkartProducts, setFlipkartProducts] = useState<any[]>([]);
//   const [amazonProducts, setAmazonProducts] = useState<any[]>([]);
//   const [flipkartCategories, setFlipkartCategories] = useState<any[]>([]);
//   const [amazonCategories, setAmazonCategories] = useState<any[]>([]);
//   const [ratings, setRatings] = useState<any[]>([]);
//   const [sentiments, setSentiments] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
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
//           fetch(`${BASE_URL}/flipkart/categories`), // ✅ Updated endpoint
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
//         setFlipkartCategories(Array.isArray(flipkartCatJson) ? flipkartCatJson : []);
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
//           fetch(`${BASE_URL}/flipkart/categories`), // ✅ Updated endpoint
//         ]);

//         const [productsJson, categoryJson] = await Promise.all([
//           productsRes.json(),
//           categoryRes.json(),
//         ]);

//         console.log("Flipkart Category Response:", categoryJson);

//         setFlipkartProducts(Array.isArray(productsJson.data) ? productsJson.data : []);
//         setAmazonProducts([]);
//         setFlipkartCategories(Array.isArray(categoryJson) ? categoryJson : []);
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

//   // useEffect(() => {
//   //   const fetchAll = async () => {
//   //     setIsLoading(true);
//   //     try {
//   //       if (selectedSource === "both") {
//   //         // Fetch data from BOTH sources in parallel
//   //         const [
//   //           flipkartRes,
//   //           amazonRes,
//   //           flipkartCatRes,
//   //           amazonCatRes,
//   //           ratingsRes,
//   //           sentimentRes
//   //         ] = await Promise.all([
//   //           fetch(`${BASE_URL}/top?table=flipkart&n=10`),
//   //           fetch(`${BASE_URL}/top?table=amazon_reviews&n=10`),
//   //           fetch(`${BASE_URL}/analytics/category`),
//   //           fetch(`${BASE_URL}/Amazon_Reviews/categories`),
//   //           fetch(`${BASE_URL}/Amazon_Reviews/ratings`),
//   //           fetch(`${BASE_URL}/Amazon_Reviews/sentiment`),
//   //         ]);

//   //         const [
//   //           flipkartJson,
//   //           amazonJson,
//   //           flipkartCatJson,
//   //           amazonCatJson,
//   //           ratingsJson,
//   //           sentimentJson
//   //         ] = await Promise.all([
//   //           flipkartRes.json(),
//   //           amazonRes.json(),
//   //           flipkartCatRes.json(),
//   //           amazonCatRes.json(),
//   //           ratingsRes.json(),
//   //           sentimentRes.json(),
//   //         ]);

//   //         console.log("Flipkart Categories Response:", flipkartCatJson);
//   //         console.log("Amazon Categories Response:", amazonCatJson);

//   //         setFlipkartProducts(Array.isArray(flipkartJson.data) ? flipkartJson.data : []);
//   //         setAmazonProducts(Array.isArray(amazonJson.data) ? amazonJson.data : []);
          
//   //         // Handle Flipkart categories
//   //         const fCats = flipkartCatJson.categories || flipkartCatJson;
//   //         setFlipkartCategories(Array.isArray(fCats) ? fCats : []);
          
//   //         // Handle Amazon categories
//   //         setAmazonCategories(Array.isArray(amazonCatJson) ? amazonCatJson : []);
          
//   //         setRatings(Array.isArray(ratingsJson) ? ratingsJson : []);
//   //         setSentiments(Array.isArray(sentimentJson) ? sentimentJson : []);

//   //       } else if (selectedSource === "amazon_reviews") {
//   //         // Fetch Amazon data only
//   //         const [productsRes, categoriesRes, ratingsRes, sentimentRes] = await Promise.all([
//   //           fetch(`${BASE_URL}/top?table=amazon_reviews&n=10`),
//   //           fetch(`${BASE_URL}/Amazon_Reviews/categories`),
//   //           fetch(`${BASE_URL}/Amazon_Reviews/ratings`),
//   //           fetch(`${BASE_URL}/Amazon_Reviews/sentiment`),
//   //         ]);

//   //         const [productsJson, categoriesJson, ratingsJson, sentimentJson] = await Promise.all([
//   //           productsRes.json(),
//   //           categoriesRes.json(),
//   //           ratingsRes.json(),
//   //           sentimentRes.json(),
//   //         ]);

//   //         setFlipkartProducts([]);
//   //         setAmazonProducts(Array.isArray(productsJson.data) ? productsJson.data : []);
//   //         setFlipkartCategories([]);
//   //         setAmazonCategories(Array.isArray(categoriesJson) ? categoriesJson : []);
//   //         setRatings(Array.isArray(ratingsJson) ? ratingsJson : []);
//   //         setSentiments(Array.isArray(sentimentJson) ? sentimentJson : []);

//   //       } else {
//   //         // Fetch Flipkart data only
//   //         const [productsRes, categoryRes] = await Promise.all([
//   //           fetch(`${BASE_URL}/top?table=flipkart&n=10`),
//   //           fetch(`${BASE_URL}/analytics/category`),
//   //         ]);

//   //         const [productsJson, categoryJson] = await Promise.all([
//   //           productsRes.json(),
//   //           categoryRes.json(),
//   //         ]);

//   //         console.log("Flipkart Category Response:", categoryJson);

//   //         setFlipkartProducts(Array.isArray(productsJson.data) ? productsJson.data : []);
//   //         setAmazonProducts([]);
          
//   //         // Handle Flipkart categories - try both formats
//   //         const fCats = categoryJson.categories || categoryJson;
//   //         setFlipkartCategories(Array.isArray(fCats) ? fCats : []);
          
//   //         setAmazonCategories([]);
//   //         setRatings([]);
//   //         setSentiments([]);
//   //       }
//   //     } catch (error) {
//   //       console.error("Error fetching chart data:", error);
//   //       setFlipkartProducts([]);
//   //       setAmazonProducts([]);
//   //       setFlipkartCategories([]);
//   //       setAmazonCategories([]);
//   //       setRatings([]);
//   //       setSentiments([]);
//   //     } finally {
//   //       setIsLoading(false);
//   //     }
//   //   };

//   //   fetchAll();
//   // }, [selectedSource]);

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

//   // Determine display mode
//   const showBoth = selectedSource === "both";
//   const isAmazon = selectedSource === "amazon_reviews";
//   const isFlipkart = !isAmazon && !showBoth;

//   // Helper function to truncate names
//   const truncateName = (name: string) => {
//     const cleaned = name.replace(/"/g, "");
//     return cleaned.substring(0, 30) + (cleaned.length > 30 ? "..." : "");
//   };

//   // Flipkart Products Chart
//   const flipkartProductsChart = {
//     labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
//     datasets: [
//       { 
//         label: "Flipkart Rating", 
//         data: flipkartProducts.map((p) => p.rating || 0), 
//         backgroundColor: "hsl(142,76%,36%)" 
//       }
//     ],
//   };

//   const flipkartReviewsChart = {
//     labels: flipkartProducts.map((p) => truncateName(p.title || "Unknown")),
//     datasets: [
//       { 
//         label: "Flipkart Reviews", 
//         data: flipkartProducts.map((p) => p.reviews || 0), 
//         backgroundColor: "hsl(221,83%,53%)" 
//       }
//     ],
//   };

//   // Amazon Products Chart
//   const amazonProductsChart = {
//     labels: amazonProducts.map((p) => truncateName(p.product_title || p.product_name || "Unknown")),
//     datasets: [
//       { 
//         label: "Amazon Rating", 
//         data: amazonProducts.map((p) => p.avg_rating || p.star_rating || 0), 
//         backgroundColor: "hsl(45,84%,60%)" 
//       }
//     ],
//   };

//   const amazonReviewsChart = {
//     labels: amazonProducts.map((p) => truncateName(p.product_title || p.product_name || "Unknown")),
//     datasets: [
//       { 
//         label: "Amazon Reviews", 
//         data: amazonProducts.map((p) => p.review_count || 0), 
//         backgroundColor: "hsl(280,80%,55%)" 
//       }
//     ],
//   };

//   // Combined Charts (for "Both" option)
//   const combinedProductsChart = {
//     labels: [
//       ...flipkartProducts.map((p) => `F: ${truncateName(p.title || "Unknown")}`),
//       ...amazonProducts.map((p) => `A: ${truncateName(p.product_title || p.product_name || "Unknown")}`)
//     ],
//     datasets: [
//       { 
//         label: "Rating", 
//         data: [
//           ...flipkartProducts.map((p) => p.rating || 0),
//           ...amazonProducts.map((p) => p.avg_rating || p.star_rating || 0)
//         ], 
//         backgroundColor: [
//           ...flipkartProducts.map(() => "hsl(142,76%,36%)"),
//           ...amazonProducts.map(() => "hsl(45,84%,60%)")
//         ]
//       }
//     ],
//   };

//   const combinedReviewsChart = {
//     labels: [
//       ...flipkartProducts.map((p) => `F: ${truncateName(p.title || "Unknown")}`),
//       ...amazonProducts.map((p) => `A: ${truncateName(p.product_title || p.product_name || "Unknown")}`)
//     ],
//     datasets: [
//       { 
//         label: "Reviews", 
//         data: [
//           ...flipkartProducts.map((p) => p.reviews || 0),
//           ...amazonProducts.map((p) => p.review_count || 0)
//         ], 
//         backgroundColor: [
//           ...flipkartProducts.map(() => "hsl(221,83%,53%)"),
//           ...amazonProducts.map(() => "hsl(280,80%,55%)")
//         ]
//       }
//     ],
//   };

//   // Categories Charts - Fixed to handle proper data structure
//   const flipkartCategoriesChart = {
//     labels: flipkartCategories.map((c) => {
//       // Handle both {category: "name", count: 123} and {category_name: "name", product_count: 123}
//       const catName = c.category || c.category_name || c.name || "Unknown";
//       return catName.replace(/"/g, "");
//     }),
//     datasets: [
//       { 
//         label: "Flipkart Products", 
//         data: flipkartCategories.map((c) => {
//           // Handle both count fields
//           return c.count || c.product_count || c.total_products || 0;
//         }), 
//         backgroundColor: "hsl(142,76%,36%)" 
//       },
//     ],
//   };

//   const amazonCategoriesChart = {
//     labels: amazonCategories.map((c) => {
//       const catName = c.category || c.category_name || "Unknown";
//       return catName.replace(/"/g, "");
//     }),
//     datasets: [
//       { 
//         label: "Amazon Products", 
//         data: amazonCategories.map((c) => c.count || c.product_count || 0), 
//         backgroundColor: "hsl(45,84%,60%)" 
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

//   // AI Summaries - Only create when data exists
//   const { summary: flipkartProductsSummary, loading: flipkartProductsLoading } = useAISummary(
//     "Summarize top Flipkart products by rating",
//     "flipkart",
//     flipkartProducts,
//     flipkartProducts.length
//   );

//   const { summary: amazonProductsSummary, loading: amazonProductsLoading } = useAISummary(
//     "Summarize top Amazon products by rating",
//     "amazon_reviews",
//     amazonProducts,
//     amazonProducts.length
//   );

//   const { summary: flipkartCategoriesSummary, loading: flipkartCategoriesLoading } = useAISummary(
//     "Summarize Flipkart category distribution",
//     "flipkart",
//     flipkartCategories,
//     flipkartCategories.length
//   );

//   const { summary: amazonCategoriesSummary, loading: amazonCategoriesLoading } = useAISummary(
//     "Summarize Amazon category distribution",
//     "amazon_reviews",
//     amazonCategories,
//     amazonCategories.length
//   );

//   const { summary: ratingsSummary, loading: ratingsLoading } = useAISummary(
//     "Summarize rating distribution",
//     "amazon_reviews",
//     ratings,
//     ratings.length
//   );

//   const { summary: sentimentsSummary, loading: sentimentsLoading } = useAISummary(
//     "Summarize sentiment distribution",
//     "amazon_reviews",
//     sentiments,
//     sentiments.length
//   );

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//       {/* Products by Rating */}
//       {showBoth ? (
//         <ChartCard 
//           title="Top Products by Rating (Both Sources)"
//           isLoading={isLoading} 
//           summary={flipkartProductsSummary || amazonProductsSummary} 
//           summaryLoading={flipkartProductsLoading || amazonProductsLoading}
//         >
//           <Bar data={combinedProductsChart} options={commonOptions} />
//         </ChartCard>
//       ) : isFlipkart ? (
//         flipkartProducts.length > 0 && (
//           <ChartCard 
//             title="Top Flipkart Products by Rating"
//             isLoading={isLoading} 
//             summary={flipkartProductsSummary} 
//             summaryLoading={flipkartProductsLoading}
//           >
//             <Bar data={flipkartProductsChart} options={commonOptions} />
//           </ChartCard>
//         )
//       ) : (
//         amazonProducts.length > 0 && (
//           <ChartCard 
//             title="Top Amazon Products by Rating"
//             isLoading={isLoading} 
//             summary={amazonProductsSummary} 
//             summaryLoading={amazonProductsLoading}
//           >
//             <Bar data={amazonProductsChart} options={commonOptions} />
//           </ChartCard>
//         )
//       )}

//       {/* Products with Most Reviews */}
//       {showBoth ? (
//         <ChartCard 
//           title="Products with Most Reviews (Both Sources)"
//           isLoading={isLoading} 
//           summary={flipkartProductsSummary || amazonProductsSummary} 
//           summaryLoading={flipkartProductsLoading || amazonProductsLoading}
//         >
//           <Bar data={combinedReviewsChart} options={commonOptions} />
//         </ChartCard>
//       ) : isFlipkart ? (
//         flipkartProducts.length > 0 && (
//           <ChartCard 
//             title="Flipkart Products with Most Reviews"
//             isLoading={isLoading} 
//             summary={flipkartProductsSummary} 
//             summaryLoading={flipkartProductsLoading}
//           >
//             <Bar data={flipkartReviewsChart} options={commonOptions} />
//           </ChartCard>
//         )
//       ) : (
//         amazonProducts.length > 0 && (
//           <ChartCard 
//             title="Amazon Products with Most Reviews"
//             isLoading={isLoading} 
//             summary={amazonProductsSummary} 
//             summaryLoading={amazonProductsLoading}
//           >
//             <Bar data={amazonReviewsChart} options={commonOptions} />
//           </ChartCard>
//         )
//       )}

//       {/* Flipkart Categories */}
//       {(showBoth || isFlipkart) && flipkartCategories.length > 0 && (
//         <ChartCard 
//           title="Flipkart Categories Distribution"
//           isLoading={isLoading} 
//           summary={flipkartCategoriesSummary} 
//           summaryLoading={flipkartCategoriesLoading}
//         >
//           <Bar data={flipkartCategoriesChart} options={commonOptions} />
//         </ChartCard>
//       )}

//       {/* Amazon Categories */}
//       {(showBoth || isAmazon) && amazonCategories.length > 0 && (
//         <ChartCard 
//           title="Amazon Categories Distribution"
//           isLoading={isLoading} 
//           summary={amazonCategoriesSummary} 
//           summaryLoading={amazonCategoriesLoading}
//         >
//           <Bar data={amazonCategoriesChart} options={commonOptions} />
//         </ChartCard>
//       )}

//       {/* Rating Distribution - Amazon Only or Both */}
//       {(showBoth || isAmazon) && ratings.length > 0 && (
//         <ChartCard 
//           title="Rating Distribution (Amazon)"
//           isLoading={isLoading} 
//           summary={ratingsSummary} 
//           summaryLoading={ratingsLoading}
//         >
//           <Bar data={ratingsChart} options={commonOptions} />
//         </ChartCard>
//       )}

//       {/* Sentiment Distribution - Amazon Only or Both */}
//       {(showBoth || isAmazon) && sentiments.length > 0 && (
//         <ChartCard 
//           title="Sentiment Distribution (Amazon)"
//           isLoading={isLoading} 
//           summary={sentimentsSummary} 
//           summaryLoading={sentimentsLoading}
//         >
//           <Doughnut data={sentimentsChart} options={commonOptions} />
//         </ChartCard>
//       )}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
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
  const [rapidApiProducts, setRapidApiProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    const fetchAll = async () => {
      setIsLoading(true);
      try {
        if (selectedSource === "both") {
          const [
            flipkartRes,
            amazonRes,
            flipkartCatRes,
            amazonCatRes,
            ratingsRes,
            sentimentRes,
            rapidApiRes,
          ] = await Promise.all([
            fetch(`${BASE_URL}/top?table=flipkart&n=10`),
            fetch(`${BASE_URL}/top?table=amazon_reviews&n=10`),
            fetch(`${BASE_URL}/flipkart/categories`),
            fetch(`${BASE_URL}/rapidapi_amazon_products/categories`),
            fetch(`${BASE_URL}/rapidapi_amazon_products/ratings`),
            fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment`),
            fetch(`${BASE_URL}/rapidapi/top-sales?limit=10`),
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
        } else if (selectedSource === "amazon_reviews") {
          const [productsRes, categoriesRes, ratingsRes, sentimentRes, rapidApiRes] =
            await Promise.all([
              fetch(`${BASE_URL}/top?table=amazon_reviews&n=10`),
              fetch(`${BASE_URL}/rapidapi_amazon_products/categories`),
              fetch(`${BASE_URL}/rapidapi_amazon_products/ratings`),
              fetch(`${BASE_URL}/rapidapi_amazon_products/sentiment`),
              fetch(`${BASE_URL}/rapidapi/top-sales?limit=10`),
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
            fetch(`${BASE_URL}/top?table=flipkart&n=10`),
            fetch(`${BASE_URL}/flipkart/categories`),
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
  }, [selectedSource]);
 
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: true, position: "bottom" as const } },
  };
 
  const truncateName = (name: string) => {
    const cleaned = name.replace(/"/g, "");
    return cleaned.substring(0, 30) + (cleaned.length > 30 ? "..." : "");
  };
 
  // 🔹 Flipkart Charts
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
 
  // 🔹 Amazon Categories (enhanced)
  const amazonCategoriesChart = {
    labels: amazonCategories.map((c) => c.category || c.category_name || "Unknown"),
    datasets: [
      {
        label: "Amazon Products",
        data: amazonCategories.map((c) => c.count || c.product_count || 0),
        borderRadius: 8,
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return "rgba(245, 158, 11, 0.7)";
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, "rgba(253, 224, 71, 0.9)");
          gradient.addColorStop(1, "rgba(202, 138, 4, 0.9)");
          return gradient;
        },
      },
    ],
  };
 
  const amazonCategoriesOptions = {
    ...commonOptions,
    scales: {
      x: {
        ticks: { autoSkip: false, maxRotation: 45, minRotation: 0 },
      },
      y: { beginAtZero: true, grace: "10%" },
    },
  };
 
  // 🔹 Rating Distribution
  const ratingsChart = {
    labels: ratings.map((r) => `${r.rating}★`),
    datasets: [
      {
        label: "Number of Products",
        data: ratings.map((r) => r.count || 0),
        backgroundColor: "rgba(59,130,246,0.7)",
      },
      {
        label: "Total User Ratings",
        data: ratings.map((r) => r.total_user_ratings || 0),
        backgroundColor: "rgba(96,165,250,0.5)",
      },
    ],
  };
 
  // 🔹 Sentiments (improved design)
  const sentimentsChart = {
    labels: sentiments.map((s) => s.sentiment || "Unknown"),
    datasets: [
      {
        label: "Sentiment Count",
        data: sentiments.map((s) => s.count || 0),
        backgroundColor: [
          "rgba(34,197,94,0.9)", // Positive
          "rgba(234,179,8,0.9)", // Neutral
          "rgba(239,68,68,0.9)", // Negative
        ],
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 2,
        hoverOffset: 8,
      },
    ],
  };
 
  const sentimentsOptions = {
    ...commonOptions,
    cutout: "65%",
    plugins: {
      ...commonOptions.plugins,
      tooltip: { enabled: true },
    },
  };
 
  // 🔹 RapidAPI Top Sales
  const gradientBlue = (ctx: any) => {
    const chart = ctx.chart;
    const { ctx: canvasCtx, chartArea } = chart;
    if (!chartArea) return "rgba(59,130,246,0.6)";
    const gradient = canvasCtx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, "rgba(191,219,254,0.8)");
    gradient.addColorStop(1, "rgba(59,130,246,0.9)");
    return gradient;
  };
 
  const rapidApiSalesChart = {
    labels: rapidApiProducts.map((p) => truncateName(p.product_title || "Unknown")),
    datasets: [
      {
        label: "Daily Sales",
        data: rapidApiProducts.map((p) => p.daily_sales || 0),
        backgroundColor: gradientBlue,
        borderRadius: 10,
      },
    ],
  };
 
  const rapidApiSalesOptions = {
    ...commonOptions,
    plugins: {
      ...commonOptions.plugins,
      tooltip: {
        callbacks: {
          label: (ctx: any) => {
            const item = rapidApiProducts[ctx.dataIndex];
            return [
              `Daily Sales: ${item.daily_sales || 0}`,
              `Category: ${item.category_name || "N/A"}`,
              `Rating: ${item.product_star_rating || "N/A"}`,
              `Variants: ${item.variant_count || 0}`,
            ];
          },
        },
      },
    },
  };
 
  // 🔹 AI summaries
  const { summary: amazonCategoriesSummary, loading: amazonCategoriesLoading } =
    useAISummary("Summarize Amazon category distribution", "rapidapi_amazon_products", amazonCategories, amazonCategories.length);
 
  const { summary: ratingsSummary, loading: ratingsLoading } =
    useAISummary("Summarize rating distribution", "rapidapi_amazon_products", ratings, ratings.length);
 
  const { summary: sentimentsSummary, loading: sentimentsLoading } =
    useAISummary("Summarize sentiment distribution", "rapidapi_amazon_products", sentiments, sentiments.length);
 
  const { summary: rapidApiSalesSummary, loading: rapidApiSalesLoading } =
    useAISummary("Summarize top selling products by daily sales volume from RapidAPI data",
      "rapidapi_amazon_products",
      rapidApiProducts,
      rapidApiProducts.length);
 
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {flipkartProducts.length > 0 && (
        <>
          <ChartCard title="Top Flipkart Products by Rating" isLoading={isLoading}>
            <Bar data={flipkartProductsChart} options={commonOptions} />
          </ChartCard>
 
          <ChartCard title="Flipkart Products with Most Reviews" isLoading={isLoading}>
            <Bar data={flipkartReviewsChart} options={commonOptions} />
          </ChartCard>
 
          <ChartCard title="Flipkart Categories Distribution" isLoading={isLoading}>
            <Bar data={flipkartCategoriesChart} options={commonOptions} />
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
          <Bar data={amazonCategoriesChart} options={amazonCategoriesOptions} />
        </ChartCard>
      )}
 
      {ratings.length > 0 && (
        <ChartCard
          title="Rating Distribution (Amazon)"
          isLoading={isLoading}
          summary={ratingsSummary}
          summaryLoading={ratingsLoading}
        >
          <Bar data={ratingsChart} options={commonOptions} />
        </ChartCard>
      )}
 
      {sentiments.length > 0 && (
        <ChartCard
          title="Sentiment Distribution (Amazon)"
          isLoading={isLoading}
          summary={sentimentsSummary}
          summaryLoading={sentimentsLoading}
        >
          <Doughnut data={sentimentsChart} options={sentimentsOptions} />
        </ChartCard>
      )}
 
      {rapidApiProducts.length > 0 && (
        <ChartCard
          title="Top Products by Daily Sales"
          isLoading={isLoading}
          summary={rapidApiSalesSummary}
          summaryLoading={rapidApiSalesLoading}
        >
          <Bar data={rapidApiSalesChart} options={rapidApiSalesOptions} />
        </ChartCard>
      )}
    </div>
  );
}
 
 