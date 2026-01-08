// import { Switch, Route } from "wouter";
// import { queryClient } from "./lib/queryClient";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { useState, useEffect, createContext, useContext } from "react";

// // Pages
// import Login from "@/pages/login";
// import Signup from "@/pages/signup";
// import Dashboard from "@/pages/dashboard";
// import Subscription from "@/pages/subscription";
// import About from "@/pages/about";
// import Settings from "@/pages/settings";
// import NotFound from "@/pages/not-found";

// // Context for user authentication
// interface User {
//   id: string;
//   email: string;
//   firstName: string;
//   lastName: string;
//   businessName?: string;
//   location?: string;
//   subscriptionTier: string;
// }

// interface AuthContextType {
//   user: User | null;
//   login: (user: User) => void;
//   logout: () => void;
//   isAuthenticated: boolean;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     // Check for stored user session
//     const storedUser = localStorage.getItem('ecomai_user');
//     if (storedUser) {
//       try {
//         setUser(JSON.parse(storedUser));
//       } catch (error) {
//         localStorage.removeItem('ecomai_user');
//       }
//     }
//   }, []);

//   const login = (userData: User) => {
//     setUser(userData);
//     localStorage.setItem('ecomai_user', JSON.stringify(userData));
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('ecomai_user');
//   };

//   const isAuthenticated = !!user;

//   return (
//     <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// function Router() {
//   return (
//     <Switch>
//       <Route path="/" component={Dashboard} />
//       <Route path="/dashboard" component={Dashboard} />
//       <Route path="/subscription" component={Subscription} />
//       <Route path="/about" component={About} />
//       <Route path="/settings" component={Settings} />
//       <Route path="/login" component={Login} />
//       <Route path="/signup" component={Signup} />
//       <Route component={NotFound} />
//     </Switch>
//   );
// }

// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <AuthProvider>
//           <Toaster />
//           <Router />
//         </AuthProvider>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// }

// export default App;



// import { Switch, Route } from "wouter";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { queryClient } from "./lib/queryClient";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { useState, useEffect, createContext, useContext } from "react";

// // Pages
// import Landing from "@/pages/landing";
// import PrivacyPolicy from "@/pages/privacy-policy";
// import TermsOfService from "@/pages/terms-service";
// import Login from "@/pages/login";
// import Signup from "@/pages/signup";
// import Dashboard from "@/pages/dashboard";
// import Subscription from "@/pages/subscription";
// import About from "@/pages/about";
// import Settings from "@/pages/settings";
// import NotFound from "@/pages/not-found";

// // Analytics Pages
// import Sales from "@/pages/sales";
// import Overview from "@/pages/overview";
// import Categories from "@/pages/categories";
// import CategoryProducts from "@/pages/category-products";
// import ProductDetails from "@/pages/product-details";
// import SentimentProducts from "@/pages/sentiment-products"; 
// import ProductTracker from "@/pages/product-tracker";
// import ProductTrackerHistory from "@/pages/ProductTrackerHistory";


// // Auth Context
// interface User {
//   id: string;
//   email: string;
//   firstName: string;
//   lastName: string;
//   businessName?: string;
//   location?: string;
//   subscriptionTier: string;
// }

// interface AuthContextType {
//   user: User | null;
//   login: (user: User) => void;
//   logout: () => void;
//   isAuthenticated: boolean;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within an AuthProvider");
//   return context;
// };

// function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("ecomai_user");
//     if (storedUser) {
//       try {
//         setUser(JSON.parse(storedUser));
//       } catch {
//         localStorage.removeItem("ecomai_user");
//       }
//     }
//   }, []);

//   const login = (userData: User) => {
//     setUser(userData);
//     localStorage.setItem("ecomai_user", JSON.stringify(userData));
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("ecomai_user");
//   };

//   const isAuthenticated = !!user;

//   return (
//     <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// function Router() {
//   return (
//     <Switch>
//       {/* Landing Page - ROOT */}
//       <Route path="/" component={Landing} />

//       {/* Analytics Pages */}
//       {/* <Route path="/" component={Dashboard} /> */}
//       <Route path="/dashboard" component={Dashboard} />
//       <Route path="/sales" component={Sales} />
//       <Route path="/overview" component={Overview} />
//       <Route path="/categories" component={Categories} />
//       {/* /* <Route path="/category-products/:category" component={CategoryProducts} />  */}
//       <Route path="/category-products/:source/:category" component={CategoryProducts} />
//       <Route path="/product/:productName" component={ProductDetails} /> 
//       <Route path="/product-tracker" component={ProductTracker} />
//       <Route path="/product-tracker/history" component={ProductTrackerHistory} />

//       <Route path="/sentiment-products/:source/:sentiment" component={SentimentProducts} />

//       {/* Tools Pages */}
//       <Route path="/subscription" component={Subscription} />
//       <Route path="/about" component={About} />
//       <Route path="/privacy-policy" component={PrivacyPolicy} />
//       <Route path="/terms-service" component={TermsOfService} />
//       <Route path="/settings" component={Settings} />

//       {/* Auth Pages */}
//       <Route path="/login" component={Login} />
//       <Route path="/signup" component={Signup} />

//       {/* 404 Fallback */}
//       <Route component={NotFound} />
//     </Switch>
//   );
// }


// export default function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <AuthProvider>
//           <Toaster />
//           <Router />
//         </AuthProvider>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// }









import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect, createContext, useContext } from "react";

// Pages
import Landing from "@/pages/landing";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-service";
import Login from "@/pages/login";
import Signup from "@/pages/signup";
import Dashboard from "@/pages/dashboard";
import Subscription from "@/pages/subscription";
import About from "@/pages/about";
import Settings from "@/pages/settings";
import NotFound from "@/pages/not-found";

// Analytics Pages
import Sales from "@/pages/sales";
import Overview from "@/pages/overview";
import Categories from "@/pages/categories";
import CategoryProducts from "@/pages/category-products";
import ProductDetails from "@/pages/product-details";
import SentimentProducts from "@/pages/sentiment-products"; 
import ProductTracker from "@/pages/product-tracker";
import ProductTrackerHistory from "@/pages/ProductTrackerHistory";


// Auth Context
interface User {
  id: number; // ✅ Changed from string to number to match database
  email: string;
  name?: string; // ✅ Added optional name
  firstName?: string;
  lastName?: string;
  businessName?: string;
  location?: string;
  subscriptionTier: string; // ✅ Made required
  aiChatUsed?: number; // ✅ Added AI tracking
  aiChatMonth?: string; // ✅ Added AI tracking
  businessInterests?: string[];
  loggedIn?: boolean;
  createdAt?: string;
}

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // ✅ FIXED: Use "user" instead of "ecomai_user" to match Login/Signup
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        console.log("✅ AuthProvider loaded user:", parsed);
        setUser(parsed);
      } catch (err) {
        console.error("Error parsing user from localStorage:", err);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const login = (userData: User) => {
    console.log("✅ AuthProvider: User logged in", userData);
    setUser(userData);
    // ✅ FIXED: Use "user" instead of "ecomai_user"
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    console.log("✅ AuthProvider: User logged out");
    setUser(null);
    // ✅ FIXED: Use "user" instead of "ecomai_user"
    localStorage.removeItem("user");
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

function Router() {
  return (
    <Switch>
      {/* Landing Page - ROOT */}
      <Route path="/" component={Landing} />

      {/* Analytics Pages */}
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/sales" component={Sales} />
      <Route path="/overview" component={Overview} />
      <Route path="/categories" component={Categories} />
      <Route path="/category-products/:source/:category" component={CategoryProducts} />
      <Route path="/product/:productName" component={ProductDetails} /> 
      <Route path="/product-tracker" component={ProductTracker} />
      <Route path="/product-tracker/history" component={ProductTrackerHistory} />
      <Route path="/sentiment-products/:source/:sentiment" component={SentimentProducts} />

      {/* Tools Pages */}
      <Route path="/subscription" component={Subscription} />
      <Route path="/about" component={About} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-service" component={TermsOfService} />
      <Route path="/settings" component={Settings} />

      {/* Auth Pages */}
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />

      {/* 404 Fallback */}
      <Route component={NotFound} />
    </Switch>
  );
}


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Router />
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}












