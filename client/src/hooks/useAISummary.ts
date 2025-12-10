
// import { useEffect, useState } from "react";

// export function useAISummary(question: string, source: string, data: any[], triggerKey: number) {
//   const [summary, setSummary] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     console.log("🔍 useAISummary called:", { question, source, dataLength: data?.length });

//     if (!data || data.length === 0) {
//       console.log("⚠️ No data available");
//       setSummary("");
//       setLoading(false);
//       return;
//     }

//     const fetchSummary = async () => {
//       setLoading(true);
//       try {
//         // ✅ DON'T send full data - let backend fetch it
//         // Just send the question and let /ai/query endpoint handle the data
//         const payload = {
//           question: question,
//           source: source,
//           limit: null  // ✅ Use all available data
//         };

//         console.log("📤 Sending AI request:", payload);

//         const res = await fetch("http://localhost:8000/ai/query", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//         });

//         console.log("📥 Response status:", res.status);

//         if (!res.ok) {
//           const errorText = await res.text();
//           console.error("❌ API Error:", res.status, errorText);
//           throw new Error(`API returned ${res.status}: ${errorText}`);
//         }

//         const json = await res.json();
//         console.log("✅ AI Response:", json);

//         if (json.answer) {
//           setSummary(json.answer);
//         } else {
//           console.warn("⚠️ No answer in response");
//           setSummary("No insights available.");
//         }
//       } catch (err) {
//         console.error("❌ AI summary error:", err);
//         setSummary("Unable to generate summary.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     // Add small delay to avoid too many simultaneous requests
//     const timer = setTimeout(() => {
//       fetchSummary();
//     }, 100);

//     return () => clearTimeout(timer);
//   }, [question, source, data.length, triggerKey]);

//   return { summary, loading };
// }

// import { useEffect, useState } from "react";

// export function useAISummary(question: string, source: string, data: any[], triggerKey: number) {
//   const [summary, setSummary] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     console.log("🔍 useAISummary called:", { question, source, dataLength: data?.length });

//     if (!data || data.length === 0) {
//       console.log("⚠️ No data available");
//       setSummary("");
//       setLoading(false);
//       return;
//     }

//     const fetchSummary = async () => {
//       setLoading(true);

//       const controller = new AbortController();
//       const timeoutId = setTimeout(() => controller.abort(), 60000); // ⏳ 60-second timeout

//       try {
//         const payload = {
//           question: question,
//           source: source,
//           limit: null,
//         };

//         console.log("📤 Sending AI request:", payload);

//         const res = await fetch("http://localhost:8000/ai/query", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//           signal: controller.signal, // 🔥 Important for timeout!
//         });

//         clearTimeout(timeoutId);

//         console.log("📥 Response status:", res.status);

//         if (!res.ok) {
//           const errorText = await res.text();
//           console.error("❌ API Error:", res.status, errorText);
//           throw new Error(`API returned ${res.status}: ${errorText}`);
//         }

//         const json = await res.json();
//         console.log("✅ AI Response:", json);

//         if (json.answer) {
//           setSummary(json.answer);
//         } else {
//           console.warn("⚠️ No answer in response");
//           setSummary("No insights available.");
//         }
//       } catch (err: any) {
//         clearTimeout(timeoutId);

//         if (err.name === "AbortError") {
//           console.error("⏳ ❌ AI request timed out (60s)");
//           setSummary("AI response timed out. Please try again.");
//         } else {
//           console.error("❌ AI summary error:", err);
//           setSummary("Unable to generate summary.");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     const timer = setTimeout(() => {
//       fetchSummary();
//     }, 100);

//     return () => clearTimeout(timer);
//   }, [question, source, data.length, triggerKey]);

//   return { summary, loading };
// }


// import { useEffect, useState } from "react";

// interface Filters {
//   table: string;
//   category: string;
//   priceRange: [number, number];
//   rating: number;
//   dateRange: string;
//   showTrendingOnly: boolean;
//   sortBy: string;
// }

// export function useAISummary(
//   question: string, 
//   source: string, 
//   data: any[], 
//   triggerKey: number,
//   filters: Filters  // ✅ Add filters parameter
// ) {
//   const [summary, setSummary] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     console.log("🔍 useAISummary called:", { question, source, dataLength: data?.length, filters });

//     if (!data || data.length === 0) {
//       console.log("⚠️ No data available");
//       setSummary("");
//       setLoading(false);
//       return;
//     }

//     const fetchSummary = async () => {
//       setLoading(true);

//       const controller = new AbortController();
//       const timeoutId = setTimeout(() => controller.abort(), 60000);

//       try {
//         // ✅ Build payload with filters
//         const payload = {
//           question: question,
//           source: source,
//           limit: null,
//           filters: {
//             category: filters.category,
//             priceRange: filters.priceRange,
//             rating: filters.rating,
//             dateRange: filters.dateRange,
//             showTrendingOnly: filters.showTrendingOnly,
//             sortBy: filters.sortBy
//           }
//         };

//         console.log("📤 Sending AI request with filters:", payload);

//         const res = await fetch("http://localhost:8000/ai/query", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//           signal: controller.signal,
//         });

//         clearTimeout(timeoutId);

//         console.log("📥 Response status:", res.status);

//         if (!res.ok) {
//           const errorText = await res.text();
//           console.error("❌ API Error:", res.status, errorText);
//           throw new Error(`API returned ${res.status}: ${errorText}`);
//         }

//         const json = await res.json();
//         console.log("✅ AI Response:", json);

//         if (json.answer) {
//           setSummary(json.answer);
//         } else {
//           console.warn("⚠️ No answer in response");
//           setSummary("No insights available.");
//         }
//       } catch (err: any) {
//         clearTimeout(timeoutId);

//         if (err.name === "AbortError") {
//           console.error("⏳ ❌ AI request timed out (60s)");
//           setSummary("AI response timed out. Please try again.");
//         } else {
//           console.error("❌ AI summary error:", err);
//           setSummary("Unable to generate summary.");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     const timer = setTimeout(() => {
//       fetchSummary();
//     }, 100);

//     return () => clearTimeout(timer);
//   }, [question, source, data.length, triggerKey, filters.category, filters.priceRange[0], filters.priceRange[1], filters.rating, filters.dateRange, filters.showTrendingOnly, filters.sortBy]); // ✅ Add filter dependencies

//   return { summary, loading };
// }

// import { useEffect, useState } from "react";

// interface Filters {
//   table: string;
//   category: string;
//   priceRange: [number, number];
//   rating: number;
//   dateRange: string;
//   showTrendingOnly: boolean;
//   sortBy: string;
//   topN: number;  // ✅ Add topN
// }

// export function useAISummary(
//   question: string, 
//   source: string, 
//   data: any[], 
//   triggerKey: number,
//   filters: Filters
// ) {
//   const [summary, setSummary] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     console.log("🔍 useAISummary called:", { question, source, dataLength: data?.length, filters });

//     if (!data || data.length === 0) {
//       console.log("⚠️ No data available");
//       setSummary("");
//       setLoading(false);
//       return;
//     }

//     const fetchSummary = async () => {
//       setLoading(true);

//       const controller = new AbortController();
//       const timeoutId = setTimeout(() => controller.abort(), 60000);

//       try {
//         // ✅ Build payload with filters including topN
//         const payload = {
//           question: question,
//           source: source,
//           limit: null,
//           filters: {
//             category: filters.category,
//             priceRange: filters.priceRange,
//             rating: filters.rating,
//             dateRange: filters.dateRange,
//             showTrendingOnly: filters.showTrendingOnly,
//             sortBy: filters.sortBy,
//             topN: filters.topN  // ✅ Include topN
//           }
//         };

//         console.log("📤 Sending AI request with filters:", payload);

//         const res = await fetch("http://localhost:8000/ai/query", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//           signal: controller.signal,
//         });

//         clearTimeout(timeoutId);

//         console.log("📥 Response status:", res.status);

//         if (!res.ok) {
//           const errorText = await res.text();
//           console.error("❌ API Error:", res.status, errorText);
//           throw new Error(`API returned ${res.status}: ${errorText}`);
//         }

//         const json = await res.json();
//         console.log("✅ AI Response:", json);

//         if (json.answer) {
//           setSummary(json.answer);
//         } else {
//           console.warn("⚠️ No answer in response");
//           setSummary("No insights available.");
//         }
//       } catch (err: any) {
//         clearTimeout(timeoutId);

//         if (err.name === "AbortError") {
//           console.error("⏳ ❌ AI request timed out (60s)");
//           setSummary("AI response timed out. Please try again.");
//         } else {
//           console.error("❌ AI summary error:", err);
//           setSummary("Unable to generate summary.");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     const timer = setTimeout(() => {
//       fetchSummary();
//     }, 100);

//     return () => clearTimeout(timer);
//   }, [
//     question, 
//     source, 
//     data.length, 
//     triggerKey, 
//     filters.category, 
//     filters.priceRange[0], 
//     filters.priceRange[1], 
//     filters.rating, 
//     filters.dateRange, 
//     filters.showTrendingOnly, 
//     filters.sortBy,
//     filters.topN  // ✅ Add topN to dependencies
//   ]);

//   return { summary, loading };
// }

import { useEffect, useState } from "react";

interface Filters {
  table?: string;
  category?: string;
  priceRange?: [number, number];
  rating?: number;
  dateRange?: string;
  showTrendingOnly?: boolean;
  sortBy?: string;
  topN?: number;
}

export function useAISummary(
  question: string, 
  source: string, 
  data: any[],  // ✅ The ACTUAL chart data
  triggerKey: number,
  filters?: Filters
) {
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log("🔍 useAISummary called:", { 
      question, 
      source, 
      actualDataCount: data?.length,
      filters 
    });

    if (!data || data.length === 0) {
      setSummary("");
      setLoading(false);
      return;
    }

    const fetchSummary = async () => {
      setLoading(true);

      try {
        // ✅ CRITICAL: Send the ACTUAL chart data
        const payload = {
          question: question,
          source: source,
          chartData: data,  // ✅ Send exact data from charts
          filters: filters || {}
        };

        console.log("📤 Sending chart data to AI:", {
          dataCount: data.length,
          sampleItem: data[0]
        });

        const res = await fetch("http://localhost:8000/ai/analyze-chart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          throw new Error(`API returned ${res.status}`);
        }

        const json = await res.json();

        if (json.answer) {
          setSummary(json.answer);
        } else {
          setSummary("No insights available.");
        }
      } catch (err: any) {
        console.error("❌ AI summary error:", err);
        setSummary("Unable to generate summary.");
      } finally {
        setLoading(false);
      }
    };

    // Small delay to batch requests
    const timer = setTimeout(fetchSummary, 100);
    return () => clearTimeout(timer);
  }, [
    question, 
    source, 
    JSON.stringify(data),  // ✅ Re-run when data changes
    triggerKey
  ]);

  return { summary, loading };
}