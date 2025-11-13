// import { useEffect, useState } from "react";

// export function useAISummary(question: string, source: string, data: any[], limit: number) {
//   const [summary, setSummary] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     if (!data || data.length === 0) {
//       setSummary("");
//       setLoading(false);
//       return;
//     }

//     const fetchSummary = async () => {
//       setLoading(true);
//       try {
//         // Add "in two concise lines" to the question
//         const prompt = `Summarize the following data in **maximum two lines** for quick insights:\n\nData: ${JSON.stringify(
//           data
//         )}\n\nQuestion: ${question}`;

//         const res = await fetch("http://localhost:8000/ai/query", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ question: prompt, source, limit }),
//         });

//         const json = await res.json();
//         setSummary(json.answer || "");
//       } catch (err) {
//         console.error("AI summary error:", err);
//         setSummary("Unable to generate summary.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSummary();
//   }, [question, source, data, limit]);

//   return { summary, loading };
// }


// Replace your src/hooks/useAISummary.ts with this

// import { useEffect, useState } from "react";

// export function useAISummary(question: string, source: string, data: any[], limit: number) {
//   const [summary, setSummary] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     if (!data || data.length === 0) {
//       setSummary("");
//       setLoading(false);
//       return;
//     }

//     const fetchSummary = async () => {
//       setLoading(true);
//       try {
//         // Simple 2-line question for better AI response
//         const simpleQuestion = `${question} Give answer in maximum 2 lines.`;

//         const res = await fetch("http://localhost:8000/ai/query", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ 
//             question: simpleQuestion, 
//             source: source, 
//             limit: limit 
//           }),
//         });

//         if (!res.ok) {
//           throw new Error(`HTTP ${res.status}`);
//         }

//         const json = await res.json();
//         setSummary(json.answer || "No insights available.");
//       } catch (err) {
//         console.error("AI summary error:", err);
//         setSummary("");
//       } finally {
//         setLoading(false);
//       }
//     };

//     // Small delay to prevent too many simultaneous calls
//     const timer = setTimeout(fetchSummary, 200);
//     return () => clearTimeout(timer);
//   }, [question, source, data.length, limit]);

//   return { summary, loading };
// }

// Replace your src/hooks/useAISummary.ts with this

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
      try {
        // ✅ DON'T send full data - let backend fetch it
        // Just send the question and let /ai/query endpoint handle the data
        const payload = {
          question: question,
          source: source,
          limit: null  // ✅ Use all available data
        };

        console.log("📤 Sending AI request:", payload);

        const res = await fetch("http://localhost:8000/ai/query", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

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
      } catch (err) {
        console.error("❌ AI summary error:", err);
        setSummary("Unable to generate summary.");
      } finally {
        setLoading(false);
      }
    };

    // Add small delay to avoid too many simultaneous requests
    const timer = setTimeout(() => {
      fetchSummary();
    }, 100);

    return () => clearTimeout(timer);
  }, [question, source, data.length, triggerKey]);

  return { summary, loading };
}