import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Lightbulb, RefreshCw, Target, TrendingUp } from "lucide-react";
 
interface RecommendationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}
 
function RecommendationCard({ icon, title, description, gradient }: RecommendationCardProps) {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-lg p-4 text-white`}>
      <div className="flex items-center mb-2">
        {icon}
        <h4 className="font-semibold ml-2">{title}</h4>
      </div>
      <p className="text-sm text-white/90">{description}</p>
    </div>
  );
}
 
export default function AIRecommendations({ selectedSource }: { selectedSource: string }) {
  const [summary, setSummary] = useState<string>("");
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
 
  const BASE_URL = "http://localhost:8000";
 
  const fetchAIRecommendations = async () => {
    setLoading(true);
    try {
      // 🔹 Prompts per source (amazon_reviews replaced by rapidapi_amazon_products)
      const prompts: Record<string, string> = {
        flipkart: `Provide a concise summary and 2 actionable recommendations for the Flipkart table based on sales, ratings, and price trends. Format the first line as summary and next two lines as separate recommendations.`,
        rapidapi_amazon_products: `Provide a concise summary and 2 actionable recommendations for the rapidapi_amazon_products table based on product_price, product_star_rating, product_num_ratings, and daily_sales. Format the first line as summary and next two lines as separate recommendations.`,
        both: `Provide a concise combined summary and 2 actionable recommendations comparing Flipkart and rapidapi_amazon_products data based on price, rating, and sales trends.`,
      };
 
      // 🔹 Select sources dynamically
      const sources =
        selectedSource === "both"
          ? ["flipkart", "rapidapi_amazon_products"]
          : [selectedSource];
 
      const aiAnswers = await Promise.all(
        sources.map(async (source) => {
          const res = await fetch(`${BASE_URL}/ai/query`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              question: prompts[source],
              source,
              limit: 50,
            }),
          });
          const json = await res.json();
          return json.answer || "";
        })
      );
 
      // 🔹 Combine results
      const allText = aiAnswers.filter(Boolean).join("\n");
      const lines = allText.split("\n").filter((line) => line.trim() !== "");
 
      setSummary(lines[0] || "No summary available.");
      setRecommendations(lines.slice(1, 3));
    } catch (err) {
      console.error("AI recommendation error:", err);
      setSummary("Unable to generate summary.");
      setRecommendations([]);
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    fetchAIRecommendations();
  }, [selectedSource]);
 
  const cardStyles = [
    {
      icon: <Target className="h-5 w-5" />,
      gradient: "from-green-500 to-emerald-600",
      title: "Top Opportunity",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      gradient: "from-blue-500 to-cyan-600",
      title: "Price Optimization",
    },
  ];
 
  return (
    <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-xl p-6 border">
      <CardHeader className="flex flex-row items-center justify-between mb-4 p-0">
        <div className="flex items-center">
          <div className="p-3 bg-primary rounded-xl mr-4">
            <Bot className="text-primary-foreground h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-lg font-semibold">AI Recommendations</CardTitle>
            <p className="text-sm text-muted-foreground">
              Personalized insights for{" "}
              {selectedSource === "both"
                ? "both tables"
                : selectedSource === "rapidapi_amazon_products"
                ? "Amazon Products"
                : selectedSource}
            </p>
          </div>
        </div>
 
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="ai-badge">
            AI Powered
          </Badge>
 
          <Button
            variant="ghost"
            size="sm"
            onClick={fetchAIRecommendations}
            disabled={loading}
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          </Button>
        </div>
      </CardHeader>
 
      <CardContent className="p-0">
        {/* Summary */}
        <div className="mb-6 p-4 bg-white/70 dark:bg-black/20 rounded-lg">
          <h3 className="font-semibold mb-2 flex items-center">
            <Lightbulb className="h-4 w-4 mr-2 text-yellow-600" />
            Business Health Summary
          </h3>
          {loading ? (
            <Skeleton className="h-4 w-full" />
          ) : (
            <p className="text-sm text-muted-foreground">{summary}</p>
          )}
        </div>
 
        {/* Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {loading
            ? Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="bg-white/70 rounded-lg p-4">
                  <Skeleton className="h-5 w-5 mb-2" />
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-3 w-full" />
                </div>
              ))
            : recommendations.map((rec, index) => (
                <RecommendationCard
                  key={index}
                  icon={cardStyles[index]?.icon || <Target className="h-5 w-5" />}
                  title={cardStyles[index]?.title || `Recommendation ${index + 1}`}
                  description={rec}
                  gradient={cardStyles[index]?.gradient || "from-gray-400 to-gray-500"}
                />
              ))}
        </div>
      </CardContent>
    </Card>
  );
}
 