
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

import { useEffect, useState } from "react";

export function useAISummary(question: string, source: string, data: any[], triggerKey: number) {
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
 
  useEffect(() => {
    console.log("🔍 useAISummary called:", { question, source, dataLength: data?.length });

    if (!data || data.length === 0) {
      console.log("⚠️ No data available");
      setSummary("");
      setLoading(false);
      return;
    }
 
    const fetchSummary = async () => {
      setLoading(true);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 60000); // ⏳ 60-second timeout

      try {
        const payload = {
          question: question,
          source: source,
          limit: null,
        };

        console.log("📤 Sending AI request:", payload);

        const res = await fetch("http://localhost:8000/ai/query", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal, // 🔥 Important for timeout!
        });

        clearTimeout(timeoutId);

        console.log("📥 Response status:", res.status);

        if (!res.ok) {
          const errorText = await res.text();
          console.error("❌ API Error:", res.status, errorText);
          throw new Error(`API returned ${res.status}: ${errorText}`);
        }

        const json = await res.json();
        console.log("✅ AI Response:", json);

        if (json.answer) {
          setSummary(json.answer);
        } else {
          console.warn("⚠️ No answer in response");
          setSummary("No insights available.");
        }
      } catch (err: any) {
        clearTimeout(timeoutId);

        if (err.name === "AbortError") {
          console.error("⏳ ❌ AI request timed out (60s)");
          setSummary("AI response timed out. Please try again.");
        } else {
          console.error("❌ AI summary error:", err);
          setSummary("Unable to generate summary.");
        }
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchSummary();
    }, 100);

    return () => clearTimeout(timer);
  }, [question, source, data.length, triggerKey]);

  return { summary, loading };
}
