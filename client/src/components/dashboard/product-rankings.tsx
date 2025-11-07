import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFilters } from "@/components/dashboard/FiltersContext";

interface TrendingProduct {
  product_title?: string;
  title?: string;
  avg_rating?: number;
  rating?: number;
  star_rating?: number;
  review_count?: number;
  reviews?: number;
  price?: number;
  product_price_numeric?: number;
  category?: string;
  category_name?: string;
}

function ProductCard({
  product,
  index,
  source,
}: {
  product: TrendingProduct;
  index: number;
  source: string;
}) {
  const colors = ["bg-green-500", "bg-blue-500", "bg-purple-500"];
  const gradients = [
    "from-green-50 to-green-100",
    "from-blue-50 to-blue-100",
    "from-purple-50 to-purple-100",
  ];

  const productName = product.product_title || product.title || "Unknown Product";
  const reviewCount = product.review_count || product.reviews || 0;
  const rating = product.avg_rating || product.rating || product.star_rating || 0;
  const price = product.price || product.product_price_numeric || 0;
  const category = product.category || product.category_name || "N/A";

  return (
    <div
      className={cn(
        "flex items-center justify-between p-3 rounded-lg bg-gradient-to-r",
        gradients[index % gradients.length]
      )}
    >
      <div className="flex items-center space-x-3 flex-1">
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0",
            colors[index % colors.length]
          )}
        >
          {index + 1}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm truncate">
            {productName.replace(/"/g, "")}
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{reviewCount.toLocaleString()} reviews</span>
            <span>•</span>
            <span>⭐ {rating.toFixed(1)}</span>
            <span>•</span>
            <span>₹{price.toLocaleString()}</span>
            <span>•</span>
            <span className="truncate">{category}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <Badge variant="outline" className="text-xs">
          {source === "flipkart" ? "Flipkart" : "Amazon"}
        </Badge>
        <TrendingUp className="h-5 w-5 text-green-600" />
      </div>
    </div>
  );
}

export default function ProductRankings({
  selectedSource,
}: {
  selectedSource: string;
}) {
  const BASE_URL = "http://localhost:8000";
  const { filters } = useFilters(); // ✅ Get filters from context

  const [flipkartProducts, setFlipkartProducts] = useState<TrendingProduct[]>([]);
  const [amazonProducts, setAmazonProducts] = useState<TrendingProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Build query params from filters
  const buildQueryParams = () => {
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
    const fetchTrendingProducts = async () => {
      setIsLoading(true);
      try {
        const table = filters.table || selectedSource;
        const queryParams = buildQueryParams();
       
        if (table === "both") {
          const [flipkartRes, amazonRes] = await Promise.all([
            fetch(`${BASE_URL}/top?table=flipkart&n=5&${queryParams}`),
            fetch(`${BASE_URL}/top?table=rapidapi_amazon_products&n=5&${queryParams}`),
          ]);

          const [flipkartJson, amazonJson] = await Promise.all([
            flipkartRes.json(),
            amazonRes.json(),
          ]);

          setFlipkartProducts(flipkartJson.data || []);
          setAmazonProducts(amazonJson.data || []);
        } else if (table === "amazon_reviews") {
          const res = await fetch(`${BASE_URL}/top?table=rapidapi_amazon_products&n=10&${queryParams}`);
          const json = await res.json();
          setFlipkartProducts([]);
          setAmazonProducts(json.data || []);
        } else {
          const res = await fetch(`${BASE_URL}/top?table=flipkart&n=10&${queryParams}`);
          const json = await res.json();
          setFlipkartProducts(json.data || []);
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
  }, [selectedSource, filters]); // ✅ Re-fetch when filters change

  const table = filters.table || selectedSource;
  const showBoth = table === "both";
  const isAmazon = table === "amazon_reviews";

  const allProducts = showBoth
    ? [...flipkartProducts, ...amazonProducts]
    : isAmazon
    ? amazonProducts
    : flipkartProducts;

  return (
    <div className="grid grid-cols-1 gap-6 mb-8">
      <Card className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between mb-4 p-0">
          <CardTitle className="text-lg font-semibold">
            {showBoth
              ? "Top Trending Products (Both Sources)"
              : isAmazon
              ? "Top Trending Products (Amazon)"
              : "Top Trending Products (Flipkart)"}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              Live Data
            </Badge>
            {/* ✅ Show active filter count */}
            {(filters.category !== "All Categories" ||
              filters.priceRange[0] > 0 ||
              filters.priceRange[1] < 5000000 ||
              filters.rating > 0) && (
              <Badge variant="outline" className="text-xs bg-blue-50">
                Filtered
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {/* ✅ Show active filters summary */}
          {(filters.category !== "All Categories" ||
            filters.rating > 0 ||
            filters.priceRange[0] > 0 ||
            filters.priceRange[1] < 5000000) && (
            <div className="mb-4 p-3 bg-blue-50 rounded-lg text-sm">
              <p className="font-medium mb-1">Active Filters:</p>
              <div className="flex flex-wrap gap-2">
                {filters.category !== "All Categories" && (
                  <Badge variant="secondary" className="text-xs">
                    Category: {filters.category}
                  </Badge>
                )}
                {filters.rating > 0 && (
                  <Badge variant="secondary" className="text-xs">
                    Rating: {filters.rating}+ ⭐
                  </Badge>
                )}
                {(filters.priceRange[0] > 0 || filters.priceRange[1] < 5000000) && (
                  <Badge variant="secondary" className="text-xs">
                    Price: ₹{filters.priceRange[0].toLocaleString()} - ₹{filters.priceRange[1].toLocaleString()}
                  </Badge>
                )}
              </div>
            </div>
          )}

          <div className="space-y-4">
            {isLoading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg"
                >
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
                {flipkartProducts.length > 0 && (
                  <>
                    <h3 className="text-sm font-semibold text-muted-foreground mt-4 mb-2">
                      Flipkart Top 5
                    </h3>
                    {flipkartProducts.map((product, index) => (
                      <ProductCard
                        key={`flipkart-${index}`}
                        product={product}
                        index={index}
                        source="flipkart"
                      />
                    ))}
                  </>
                )}

                {amazonProducts.length > 0 && (
                  <>
                    <h3 className="text-sm font-semibold text-muted-foreground mt-4 mb-2">
                      Amazon Top 5
                    </h3>
                    {amazonProducts.map((product, index) => (
                      <ProductCard
                        key={`amazon-${index}`}
                        product={product}
                        index={index}
                        source="amazon"
                      />
                    ))}
                  </>
                )}

                {flipkartProducts.length === 0 && amazonProducts.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <p className="text-lg font-medium">No products found</p>
                    <p className="text-sm mt-2">Try adjusting your filters</p>
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
                <p className="text-lg font-medium">No products found</p>
                <p className="text-sm mt-2">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}