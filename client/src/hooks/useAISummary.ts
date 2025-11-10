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

import { useEffect, useState } from "react";

export function useAISummary(question: string, source: string, data: any[], limit: number) {
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!data || data.length === 0) {
      setSummary("");
      setLoading(false);
      return;
    }

    const fetchSummary = async () => {
      setLoading(true);
      try {
        // Simple 2-line question for better AI response
        const simpleQuestion = `${question} Give answer in maximum 2 lines.`;

        const res = await fetch("http://localhost:8000/ai/query", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            question: simpleQuestion, 
            source: source, 
            limit: limit 
          }),
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const json = await res.json();
        setSummary(json.answer || "No insights available.");
      } catch (err) {
        console.error("AI summary error:", err);
        setSummary("");
      } finally {
        setLoading(false);
      }
    };

    // Small delay to prevent too many simultaneous calls
    const timer = setTimeout(fetchSummary, 200);
    return () => clearTimeout(timer);
  }, [question, source, data.length, limit]);

  return { summary, loading };
}