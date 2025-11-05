// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Skeleton } from "@/components/ui/skeleton";
// import { TrendingUp } from "lucide-react";
// import { cn } from "@/lib/utils";
 
// interface TrendingProduct {
//   product_title: string;
//   avg_rating: number;
//   review_count: number;
// }
 
// function ProductCard({ product, index }: { product: TrendingProduct; index: number }) {
//   const colors = ['bg-green-500', 'bg-blue-500', 'bg-purple-500'];
//   const gradients = [
//     'from-green-50 to-green-100',
//     'from-blue-50 to-blue-100',
//     'from-purple-50 to-purple-100'
//   ];
 
//   return (
//     <div
//       className={cn(
//         "flex items-center justify-between p-3 rounded-lg bg-gradient-to-r",
//         gradients[index % gradients.length]
//       )}
//     >
//       <div className="flex items-center space-x-3">
//         <div className={cn(
//           "w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold",
//           colors[index % colors.length]
//         )}>
//           {index + 1}
//         </div>
//         <div>
//           <p className="font-medium text-sm">{product.product_title.replace(/"/g, '')}</p>
//           <p className="text-xs text-muted-foreground">
//             {product.review_count} reviews
//           </p>
//         </div>
//       </div>
//       <TrendingUp className="h-5 w-5 text-green-600" />
//     </div>
//   );
// }
 
// export default function ProductRankings() {
//   const BASE_URL = "http://localhost:8000"; // Remote server IP
//   const [trending, setTrending] = useState<TrendingProduct[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
 
//   useEffect(() => {
//     const fetchTrendingProducts = async () => {
//       try {
//         const res = await fetch(`${BASE_URL}/top?table=amazon_reviews&n=10`);
//         const json = await res.json();
//         if (json && json.data) {
//           setTrending(json.data);
//         }
//       } catch (error) {
//         console.error("Error fetching trending products:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
 
//     fetchTrendingProducts();
//   }, []);
 
//   return (
//     <div className="grid grid-cols-1 gap-6 mb-8">
//       <Card className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
//         <CardHeader className="flex flex-row items-center justify-between mb-4 p-0">
//           <CardTitle className="text-lg font-semibold">Top Trending Products</CardTitle>
//           <Badge variant="secondary" className="text-xs">By Reviews</Badge>
//         </CardHeader>
 
//         <CardContent className="p-0">
//           <div className="space-y-4">
//             {isLoading ? (
//               Array.from({ length: 5 }).map((_, index) => (
//                 <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
//                   <div className="flex items-center space-x-3">
//                     <Skeleton className="w-8 h-8 rounded-full" />
//                     <div>
//                       <Skeleton className="h-4 w-32 mb-1" />
//                       <Skeleton className="h-3 w-20" />
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : trending.length > 0 ? (
//               trending.map((product, index) => (
//                 <ProductCard key={index} product={product} index={index} />
//               ))
//             ) : (
//               <div className="text-center py-8 text-muted-foreground">
//                 <p>No trending products available</p>
//               </div>
//             )}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Skeleton } from "@/components/ui/skeleton";
// import { TrendingUp } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { useAISummary } from "@/hooks/useAISummary";

// interface TrendingProduct {
//   product_title: string;
//   avg_rating: number;
//   review_count: number;
// }

// function ProductCard({ product, index }: { product: TrendingProduct; index: number }) {
//   const colors = ['bg-green-500', 'bg-blue-500', 'bg-purple-500'];
//   const gradients = [
//     'from-green-50 to-green-100',
//     'from-blue-50 to-blue-100',
//     'from-purple-50 to-purple-100'
//   ];

//   return (
//     <div
//       className={cn(
//         "flex items-center justify-between p-3 rounded-lg bg-gradient-to-r",
//         gradients[index % gradients.length]
//       )}
//     >
//       <div className="flex items-center space-x-3">
//         <div className={cn(
//           "w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold",
//           colors[index % colors.length]
//         )}>
//           {index + 1}
//         </div>
//         <div>
//           <p className="font-medium text-sm">{product.product_title.replace(/"/g, '')}</p>
//           <p className="text-xs text-muted-foreground">
//             {product.review_count} reviews
//           </p>
//         </div>
//       </div>
//       <TrendingUp className="h-5 w-5 text-green-600" />
//     </div>
//   );
// }

// export default function ProductRankings({ selectedSource }: { selectedSource: string }) {
//   const BASE_URL = "http://localhost:8000"; // Replace with your FastAPI server IP if needed
//   const [trending, setTrending] = useState<TrendingProduct[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   // Fetch trending products
//   useEffect(() => {
//     const fetchTrendingProducts = async () => {
//       try {
//         const res = await fetch(`${BASE_URL}/top?table=amazon_reviews&n=10`);
//         const json = await res.json();
//         if (json && json.data) setTrending(json.data);
//       } catch (error) {
//         console.error("Error fetching trending products:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchTrendingProducts();
//   }, []);

//   // AI summarization
//   const question = "Give me a concise summary of the top trending products"; 
//   const { summary, loading: summaryLoading } = useAISummary(question, "products", trending, 10);

//   return (
//     <div className="grid grid-cols-1 gap-6 mb-8">
//       <Card className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
//         <CardHeader className="flex flex-row items-center justify-between mb-4 p-0">
//           <CardTitle className="text-lg font-semibold">Top Trending Products</CardTitle>
//           <Badge variant="secondary" className="text-xs">Live Data</Badge>
//         </CardHeader>

//         <CardContent className="p-0">
//           {/* AI Summary */}
//           {summaryLoading ? (
//             <p className="text-sm text-muted-foreground mb-3">Generating AI summary...</p>
//           ) : summary ? (
//             <p className="text-sm font-medium mb-3">{summary}</p>
//           ) : null}

//           <div className="space-y-4">
//             {isLoading ? (
//               Array.from({ length: 5 }).map((_, index) => (
//                 <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
//                   <div className="flex items-center space-x-3">
//                     <Skeleton className="w-8 h-8 rounded-full" />
//                     <div>
//                       <Skeleton className="h-4 w-32 mb-1" />
//                       <Skeleton className="h-3 w-20" />
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : trending.length > 0 ? (
//               trending.map((product, index) => (
//                 <ProductCard key={index} product={product} index={index} />
//               ))
//             ) : (
//               <div className="text-center py-8 text-muted-foreground">
//                 <p>No trending products available</p>
//               </div>
//             )}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAISummary } from "@/hooks/useAISummary";

interface FilterState {
  category: string;
  priceRange: [number, number];
  rating: number;
  dateRange: string;
  showTrendingOnly: boolean;
  sortBy: string;
}

interface ProductRankingsProps {
  filters?: FilterState | null;
}

interface TrendingProduct {
  product_title?: string;
  title?: string;
  avg_rating?: number;
  rating?: number;
  star_rating?: number;
  review_count?: number;
  reviews?: number;
}

function ProductCard({ product, index, source }: { product: TrendingProduct; index: number; source: string }) {
  const colors = ['bg-green-500', 'bg-blue-500', 'bg-purple-500'];
  const gradients = [
    'from-green-50 to-green-100',
    'from-blue-50 to-blue-100',
    'from-purple-50 to-purple-100'
  ];

  const productName = product.product_title || product.title || "Unknown Product";
  const reviewCount = product.review_count || product.reviews || 0;
  const rating = product.avg_rating || product.rating || product.star_rating || 0;

  return (
    <div
      className={cn(
        "flex items-center justify-between p-3 rounded-lg bg-gradient-to-r",
        gradients[index % gradients.length]
      )}
    >
      <div className="flex items-center space-x-3">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold",
          colors[index % colors.length]
        )}>
          {index + 1}
        </div>
        <div>
          <p className="font-medium text-sm">{productName.replace(/"/g, '').substring(0, 50)}</p>
          <p className="text-xs text-muted-foreground">
            {reviewCount} reviews • ⭐ {rating.toFixed(1)}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="text-xs">
          {source === "flipkart" ? "Flipkart" : "Amazon"}
        </Badge>
        <TrendingUp className="h-5 w-5 text-green-600" />
      </div>
    </div>
  );
}

export default function ProductRankings({ selectedSource }: { selectedSource: string }) {
  const BASE_URL = "http://localhost:8000";
  
  const [flipkartProducts, setFlipkartProducts] = useState<TrendingProduct[]>([]);
  const [amazonProducts, setAmazonProducts] = useState<TrendingProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch trending products based on selected source
  useEffect(() => {
    const fetchTrendingProducts = async () => {
      setIsLoading(true);
      try {
        if (selectedSource === "both") {
          // Fetch from BOTH sources
          const [flipkartRes, amazonRes] = await Promise.all([
            fetch(`${BASE_URL}/top?table=flipkart&n=5`),
            fetch(`${BASE_URL}/top?table=amazon_reviews&n=5`),
          ]);

          const [flipkartJson, amazonJson] = await Promise.all([
            flipkartRes.json(),
            amazonRes.json(),
          ]);

          setFlipkartProducts(Array.isArray(flipkartJson.data) ? flipkartJson.data : []);
          setAmazonProducts(Array.isArray(amazonJson.data) ? amazonJson.data : []);

        } else if (selectedSource === "amazon_reviews") {
          // Fetch Amazon only
          const res = await fetch(`${BASE_URL}/top?table=amazon_reviews&n=10`);
          const json = await res.json();
          
          setFlipkartProducts([]);
          setAmazonProducts(Array.isArray(json.data) ? json.data : []);

        } else {
          // Fetch Flipkart only
          const res = await fetch(`${BASE_URL}/top?table=flipkart&n=10`);
          const json = await res.json();
          
          setFlipkartProducts(Array.isArray(json.data) ? json.data : []);
          setAmazonProducts([]);
        }
      } catch (error) {
        console.error("Error fetching trending products:", error);
        setFlipkartProducts([]);
        setAmazonProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingProducts();
  }, [selectedSource]); // ✅ Refetch when selectedSource changes

  // Determine display mode
  const showBoth = selectedSource === "both";
  const isAmazon = selectedSource === "amazon_reviews";
  const isFlipkart = !isAmazon && !showBoth;

  // Combine products for "both" mode
  const allProducts = showBoth 
    ? [...flipkartProducts, ...amazonProducts]
    : isAmazon 
    ? amazonProducts 
    : flipkartProducts;

  // AI summarization
  const question = showBoth 
    ? "Give me a concise summary comparing top trending products from Flipkart and Amazon"
    : isAmazon
    ? "Give me a concise summary of top trending Amazon products"
    : "Give me a concise summary of top trending Flipkart products";

  const { summary, loading: summaryLoading } = useAISummary(
    question, 
    selectedSource, 
    allProducts, 
    allProducts.length
  );

  return (
    <div className="grid grid-cols-1 gap-6 mb-8">
      <Card className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between mb-4 p-0">
          <CardTitle className="text-lg font-semibold">
            {showBoth ? "Top Trending Products (Both Sources)" : 
             isAmazon ? "Top Trending Products (Amazon)" : 
             "Top Trending Products (Flipkart)"}
          </CardTitle>
          <Badge variant="secondary" className="text-xs">Live Data</Badge>
        </CardHeader>

        <CardContent className="p-0">
          {/* AI Summary */}
          {summaryLoading ? (
            <p className="text-sm text-muted-foreground mb-3">Generating AI summary...</p>
          ) : summary ? (
            <p className="text-sm font-medium mb-3 p-3 bg-muted/50 rounded-lg">{summary}</p>
          ) : null}

          <div className="space-y-4">
            {isLoading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Skeleton className="w-8 h-8 rounded-full" />
                    <div>
                      <Skeleton className="h-4 w-32 mb-1" />
                      <Skeleton className="h-3 w-20" />
                    </div>
                  </div>
                </div>
              ))
            ) : showBoth ? (
              <>
                {/* Flipkart Products */}
                {flipkartProducts.length > 0 && (
                  <>
                    <h3 className="text-sm font-semibold text-muted-foreground mt-4 mb-2">Flipkart Top 5</h3>
                    {flipkartProducts.map((product, index) => (
                      <ProductCard key={`flipkart-${index}`} product={product} index={index} source="flipkart" />
                    ))}
                  </>
                )}
                
                {/* Amazon Products */}
                {amazonProducts.length > 0 && (
                  <>
                    <h3 className="text-sm font-semibold text-muted-foreground mt-4 mb-2">Amazon Top 5</h3>
                    {amazonProducts.map((product, index) => (
                      <ProductCard key={`amazon-${index}`} product={product} index={index} source="amazon" />
                    ))}
                  </>
                )}

                {flipkartProducts.length === 0 && amazonProducts.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <p>No trending products available</p>
                  </div>
                )}
              </>
            ) : allProducts.length > 0 ? (
              allProducts.map((product, index) => (
                <ProductCard 
                  key={index} 
                  product={product} 
                  index={index} 
                  source={isAmazon ? "amazon" : "flipkart"}
                />
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>No trending products available with current filters</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}