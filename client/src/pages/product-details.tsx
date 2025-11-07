
import { useEffect, useState } from "react";
import { useLocation, useRoute } from "wouter";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
  Filler,
} from "chart.js";
import Sidebar from "@/components/layout/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
  Filler
);

interface ProductData {
  product_name: string;
  product_id?: string | null;
  avg_price: number | null;
  avg_rating: number | null;
  total_reviews: number | null;
  source?: string;
  min_price?: number | null;
  max_price?: number | null;
}

interface ForecastData {
  forecast: number[];
  dates: string[];
}

interface Tab {
  key: string;
  label: string;
}

export default function ProductDetails() {
  const [match, params] = useRoute("/product/:productName");
  const productName = params?.productName ? decodeURIComponent(params.productName) : "";
  const [, setLocation] = useLocation();

  const [fromCategory, setFromCategory] = useState("");
  const [fromPage, setFromPage] = useState(1);
  const [source, setSource] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      setFromCategory(urlParams.get("category") || "");
      setFromPage(parseInt(urlParams.get("page") || "1"));
      setSource(urlParams.get("source") || "");
    }
  }, []);

  const [data, setData] = useState<ProductData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("1y");
  const [isAmazon, setIsAmazon] = useState(false);

  const BASE_URL = "http://localhost:8000";

  useEffect(() => {
    if (!productName) return;
    setLoading(true);
    setError("");

    axios
      .get<ProductData>(`${BASE_URL}/product/${encodeURIComponent(productName)}`)
      .then((res) => {
        setData(res.data);
        const productSource = res.data.source || "";
        const isAmazonProduct =
          productSource.toLowerCase() === "amazon" ||
          fromCategory.toLowerCase().includes("amazon");

        setIsAmazon(isAmazonProduct);
      })
      .catch(() => setError("Failed to fetch product details"))
      .finally(() => setLoading(false));
  }, [productName, fromCategory]);

  useEffect(() => {
    if (!productName || !data) return;

    let endpoint = "";
    const cleanProductName = productName.replace(/['"%]/g, "").trim();

    if (isAmazon && data.product_id) {
      endpoint = `${BASE_URL}/lstm_forecast/amazon/${encodeURIComponent(data.product_id)}`;
    } else if (isAmazon) {
      endpoint = `${BASE_URL}/lstm_forecast/amazon/${encodeURIComponent(cleanProductName)}`;
    } else {
      endpoint = `${BASE_URL}/lstm_forecast/flipkart/${encodeURIComponent(cleanProductName)}`;

    }

    axios
  .get(endpoint)
  .then((res) => {
    if (isAmazon) {
      // ✅ Amazon: merge historical + forecast
      if (
        res.data.forecast &&
        Array.isArray(res.data.forecast.forecast_dates) &&
        Array.isArray(res.data.forecast.forecast_sales)
      ) {
        

        // Forecast data
        const forecastDates = res.data.forecast.forecast_dates;
        const forecastSales = res.data.forecast.forecast_sales;

        // Merge both
        const allDates = [ ...forecastDates];
        const allSales = [ ...forecastSales];

        setForecast({ dates: allDates, forecast: allSales });
      } else {
        setForecast(null);
      }
    } else {
      // Flipkart
      if (res.data && Array.isArray(res.data.forecast_dates) && Array.isArray(res.data.forecast_sales)) {
        setForecast({
          dates: res.data.forecast_dates,
          forecast: res.data.forecast_sales,
        });
      } else {
        setForecast(null);
      }
    }
  })
  .catch(() => setForecast(null));

    // axios
    //   .get(endpoint)
    //   .then((res) => {
    //     if (isAmazon && res.data && res.data.forecast) {
    //       // ✅ Amazon: use forecast_dates + forecast_sales
    //       setForecast({
    //         dates: res.data.forecast.forecast_dates,
    //         forecast: res.data.forecast.forecast_sales,
    //       });
    //     } else if (!isAmazon && res.data && Array.isArray(res.data.forecast) && Array.isArray(res.data.dates)) {
    //       // Flipkart: already correct format
    //       setForecast(res.data);
    //     } else {
    //       setForecast(null);
    //     }
    //   })
    //   .catch(() => setForecast(null));
  }, [productName, isAmazon, data]);

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center text-sky-600 bg-gradient-to-br from-sky-50 via-white to-sky-100">
        Loading product details...
      </div>
    );

  if (error)
    return (
      <div className="flex h-screen items-center justify-center text-red-600 bg-gradient-to-br from-sky-50 via-white to-sky-100">
        {error}
      </div>
    );

  if (!data)
    return (
      <div className="flex h-screen items-center justify-center text-gray-500 bg-gradient-to-br from-sky-50 via-white to-sky-100">
        No data available for this product.
      </div>
    );

  let displayedForecast: number[] = [];
  let displayedDates: string[] = [];

  if (forecast?.forecast && forecast?.dates) {
    switch (activeTab) {
      case "1w":
        displayedForecast = forecast.forecast.slice(0, 7);
        displayedDates = forecast.dates.slice(0, 7);
        break;
      case "1m":
        displayedForecast = forecast.forecast.slice(0, 30);
        displayedDates = forecast.dates.slice(0, 30);
        break;
      case "3m":
        displayedForecast = forecast.forecast.slice(0, 90);
        displayedDates = forecast.dates.slice(0, 90);
        break;
      case "6m":
        displayedForecast = forecast.forecast.slice(0, 180);
        displayedDates = forecast.dates.slice(0, 180);
        break;
      case "1y":
      default:
        displayedForecast = forecast.forecast.slice(0, 365);
        displayedDates = forecast.dates.slice(0, 365);
        break;
    }
  }

  const chartData = {
    labels: displayedDates,
    datasets: [
      {
        label: isAmazon ? "Amazon Forecast (Sales)" : "Flipkart Forecast (Price ₹)",
        data: displayedForecast,
        borderColor: isAmazon ? "rgba(54,162,235,1)" : "rgba(255,99,132,1)",
        backgroundColor: isAmazon
          ? "rgba(54,162,235,0.2)"
          : "rgba(255,99,132,0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" as const },
      title: {
        display: true,
        text: isAmazon
          ? "Amazon Forecast (Next 1 Year)"
          : "Flipkart Forecast (Next 1 Year)",
      },
    },
    scales: {
      x: { title: { display: true, text: "Date" } },
      y: { title: { display: true, text: isAmazon ? "Rating" : "Price (₹)" } },
    },
  };

  const tabs: Tab[] = [
    { key: "1w", label: "1 Week" },
    { key: "1m", label: "1 Month" },
    { key: "3m", label: "3 Months" },
    { key: "6m", label: "6 Months" },
    { key: "1y", label: "1 Year" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 text-gray-900 transition-all">
      <Sidebar />
      <div className="ml-64 p-8">
        <header className="backdrop-blur-xl bg-white/70 border border-sky-100 shadow-lg rounded-2xl px-8 py-5 mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-sky-900">{data.product_name}</h2>
            <p className="text-sm text-gray-500 mt-1">
              Source: {isAmazon ? "Amazon" : "Flipkart"}
            </p>
          </div>
          <button
            onClick={() =>
              fromCategory && source
                ? setLocation(
                    `/category-products/${encodeURIComponent(
                      source
                    )}/${encodeURIComponent(fromCategory)}?page=${fromPage}`
                  )
                : setLocation("/categories")
            }
            className="text-sm font-medium bg-gradient-to-r from-sky-400 to-sky-600 text-white px-4 py-2 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-all"
          >
            ← Back
          </button>
        </header>

        <div className="mb-6">
          <span
            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
              isAmazon ? "bg-blue-100 text-blue-800" : "bg-orange-100 text-orange-800"
            }`}
          >
            {isAmazon ? "🛒 Amazon Product" : "🛍️ Flipkart Product"}
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="backdrop-blur-xl bg-white/80 border border-sky-100 shadow-xl rounded-3xl hover:shadow-2xl hover:scale-[1.01] transition-all">
            <CardHeader className="border-b border-sky-100 bg-gradient-to-r from-sky-50 to-white rounded-t-3xl">
              <CardTitle className="text-sky-900 font-semibold">Average Price</CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center">
              <p className="text-4xl font-bold text-sky-600">
                {data.avg_price != null ? `₹${data.avg_price.toFixed(2)}` : "N/A"}
              </p>
              <p className="text-sm text-gray-500 mt-1">Based on market data</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-xl bg-white/80 border border-sky-100 shadow-xl rounded-3xl hover:shadow-2xl hover:scale-[1.01] transition-all">
            <CardHeader className="border-b border-sky-100 bg-gradient-to-r from-sky-50 to-white rounded-t-3xl">
              <CardTitle className="text-sky-900 font-semibold">Minimum Price</CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center">
              <p className="text-4xl font-bold text-emerald-500">
                {data.min_price != null ? `₹${data.min_price.toFixed(2)}` : "N/A"}
              </p>
              <p className="text-sm text-gray-500 mt-1">Lowest observed</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-xl bg-white/80 border border-sky-100 shadow-xl rounded-3xl hover:shadow-2xl hover:scale-[1.01] transition-all">
            <CardHeader className="border-b border-sky-100 bg-gradient-to-r from-sky-50 to-white rounded-t-3xl">
              <CardTitle className="text-sky-900 font-semibold">Maximum Price</CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center">
              <p className="text-4xl font-bold text-rose-500">
                {data.max_price != null ? `₹${data.max_price.toFixed(2)}` : "N/A"}
              </p>
              <p className="text-sm text-gray-500 mt-1">Highest observed</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-xl bg-white/80 border border-sky-100 shadow-xl rounded-3xl hover:shadow-2xl hover:scale-[1.01] transition-all">
            <CardHeader className="border-b border-sky-100 bg-gradient-to-r from-sky-50 to-white rounded-t-3xl">
              <CardTitle className="text-sky-900 font-semibold">Average Rating</CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center">
              <p className="text-4xl font-bold text-emerald-500">
                {data.avg_rating != null ? data.avg_rating.toFixed(1) : "N/A"}
              </p>
              <p className="text-sm text-gray-500 mt-1">Customer satisfaction</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-xl bg-white/80 border border-sky-100 shadow-xl rounded-3xl hover:shadow-2xl hover:scale-[1.01] transition-all">
            <CardHeader className="border-b border-sky-100 bg-gradient-to-r from-sky-50 to-white rounded-t-3xl">
              <CardTitle className="text-sky-900 font-semibold">Total Reviews</CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center">
              <p className="text-4xl font-bold text-orange-500">
                {data.total_reviews ?? 0}
              </p>
              <p className="text-sm text-gray-500 mt-1">Across all platforms</p>
            </CardContent>
          </Card>
        </div>

        {/* Line Chart */}
        <Card className="backdrop-blur-xl bg-white/90 border border-sky-100 shadow-xl rounded-3xl">
          <CardHeader className="border-b border-sky-100 bg-gradient-to-r from-sky-50 to-white rounded-t-3xl flex justify-between items-center">
            <CardTitle className="text-sky-900 font-semibold">Forecast Trend</CardTitle>
            <div className="flex space-x-2">
              {tabs.map((tab: Tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.key
                      ? "bg-sky-500 text-white shadow"
                      : "bg-sky-100 text-sky-700 hover:bg-sky-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </CardHeader>

          <CardContent className="p-6">
            {forecast && displayedForecast.length > 0 ? (
              <div style={{ height: "400px" }}>
                <Line data={chartData} options={chartOptions} />
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-2">No forecast data available for this product.</p>
                <p className="text-sm text-gray-400">
                  {isAmazon
                    ? "Amazon forecast endpoint may not have data for this product."
                    : "Flipkart forecast endpoint may not have data for this product."}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
