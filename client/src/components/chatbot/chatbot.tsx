import { useState, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bot,
  Send,
  X,
  MessageCircle,
  Sparkles,
  TrendingUp,
  DollarSign,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";
 
interface ChatMessage {
  id: string;
  message: string;
  isUser: boolean;
  timestamp: Date;
  suggestions?: string[];
}
 
const QUICK_QUESTIONS = [
  "What products are trending now?",
  "Best profit margins?",
  "How to improve sales?",
  "Competitor analysis?",
  "Market opportunities?",
  "Price optimization tips?",
];
 
const SUGGESTION_ICONS = {
  trending: <TrendingUp className="h-3 w-3" />,
  profit: <DollarSign className="h-3 w-3" />,
  sales: <BarChart3 className="h-3 w-3" />,
  default: <Sparkles className="h-3 w-3" />,
};
 
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      message:
        "👋 Hi! I'm your AI Assistant.\n\nSelect a data source below (Flipkart or Amazon), and ask me anything like:\n• What products are trending?\n• Which category has the best ratings?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedSource, setSelectedSource] = useState("flipkart"); // 🔹 user selection
 
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
 
  // ----------------- Mutation -----------------
  const chatMutation = useMutation({
    mutationFn: async (message: string) => {
      const response = await fetch("http://localhost:8000/ai/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: message,
          source: selectedSource, // 🔹 connect to chosen table
          limit: 50,
        }),
      });
      return response.json();
    },
    onSuccess: (data) => {
      const aiMessage: ChatMessage = {
        id: Date.now().toString(),
        message: data.answer,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    },
    onError: () => {
      const errorMessage: ChatMessage = {
        id: Date.now().toString(),
        message:
          "⚠️ I'm having trouble fetching data. Please make sure your FastAPI server is running.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      setIsTyping(false);
    },
  });
 
  // ----------------- Scrolling -----------------
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
 
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);
 
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
 
  // ----------------- Send Message -----------------
  const sendMessage = (messageText?: string) => {
    const text = messageText || inputMessage.trim();
    if (!text) return;
 
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      message: text,
      isUser: true,
      timestamp: new Date(),
    };
 
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);
    chatMutation.mutate(text);
  };
 
  const formatTime = (date: Date) =>
    date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
 
  const getSuggestionIcon = (suggestion: string) => {
    const lower = suggestion.toLowerCase();
    if (lower.includes("trend")) return SUGGESTION_ICONS.trending;
    if (lower.includes("profit")) return SUGGESTION_ICONS.profit;
    if (lower.includes("sales")) return SUGGESTION_ICONS.sales;
    return SUGGESTION_ICONS.default;
  };
 
  // ----------------- Render -----------------
  return (
    <div className="fixed bottom-6 right-6 z-50 w-80">
      {/* Floating Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full text-white flex items-center justify-center",
          "bg-gradient-to-r from-primary to-purple-600 hover:scale-105 transition-all shadow-lg"
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
 
      {/* Chat Window */}
      {isOpen && (
        <Card className="absolute bottom-16 right-0 h-[26rem] shadow-2xl border border-gray-200 overflow-hidden flex flex-col rounded-2xl">
          {/* Header */}
          <CardHeader className="bg-gradient-to-r from-primary to-purple-600 text-white p-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-white/20 text-white">
                  <Bot className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <CardTitle className="text-sm font-medium">
                  Insydz Assistant
                </CardTitle>
                <Badge
                  variant="secondary"
                  className="text-xs bg-white/20 border-0 text-white"
                >
                  AI Powered
                </Badge>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
 
          {/* Messages */}
          <CardContent className="flex-1 flex flex-col overflow-hidden">
            <ScrollArea className="flex-1 p-3" ref={scrollContainerRef}>
              <div className="space-y-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "flex",
                      msg.isUser ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[75%] rounded-lg p-2 text-sm break-words whitespace-pre-wrap",
                        msg.isUser
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-900"
                      )}
                    >
                      <p>{msg.message}</p>
                      <p className="text-xs mt-1 opacity-70 text-right">
                        {formatTime(msg.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
 
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-2 flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">
                        AI is thinking...
                      </span>
                    </div>
                  </div>
                )}
 
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
 
            {/* Input Section */}
            <div className="border-t bg-background p-3 space-y-2">
              {/* Source Selector */}
              <Select
                value={selectedSource}
                onValueChange={setSelectedSource}
              >
                <SelectTrigger className="w-full text-xs">
                  <SelectValue placeholder="Select data source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flipkart">🛍 Flipkart</SelectItem>
                  <SelectItem value="rapidapi_amazon_products">
                    💬 Amazon
                  </SelectItem>
                </SelectContent>
              </Select>
 
              <div className="flex space-x-2">
                <Input
                  ref={inputRef}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask about trends, prices, or reviews..."
                  className="flex-1 text-sm"
                  disabled={chatMutation.isPending}
                />
                <Button
                  onClick={() => sendMessage()}
                  disabled={!inputMessage.trim() || chatMutation.isPending}
                  size="sm"
                  className="px-3"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
 
 