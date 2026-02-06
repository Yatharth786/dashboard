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
//   id: number; // ✅ Changed from string to number to match database
//   email: string;
//   name?: string; // ✅ Added optional name
//   firstName?: string;
//   lastName?: string;
//   businessName?: string;
//   location?: string;
//   subscriptionTier: string; // ✅ Made required
//   aiChatUsed?: number; // ✅ Added AI tracking
//   aiChatMonth?: string; // ✅ Added AI tracking
//   businessInterests?: string[];
//   loggedIn?: boolean;
//   createdAt?: string;
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
//     // ✅ FIXED: Use "user" instead of "ecomai_user" to match Login/Signup
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       try {
//         const parsed = JSON.parse(storedUser);
//         console.log("✅ AuthProvider loaded user:", parsed);
//         setUser(parsed);
//       } catch (err) {
//         console.error("Error parsing user from localStorage:", err);
//         localStorage.removeItem("user");
//       }
//     }
//   }, []);

//   const login = (userData: User) => {
//     console.log("✅ AuthProvider: User logged in", userData);
//     setUser(userData);
//     // ✅ FIXED: Use "user" instead of "ecomai_user"
//     localStorage.setItem("user", JSON.stringify(userData));
//   };

//   const logout = () => {
//     console.log("✅ AuthProvider: User logged out");
//     setUser(null);
//     // ✅ FIXED: Use "user" instead of "ecomai_user"
//     localStorage.removeItem("user");
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
//       <Route path="/dashboard" component={Dashboard} />
//       <Route path="/sales" component={Sales} />
//       <Route path="/overview" component={Overview} />
//       <Route path="/categories" component={Categories} />
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





















// import { Switch, Route, useLocation } from "wouter";
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
//   id: number;
//   email: string;
//   name?: string;
//   firstName?: string;
//   lastName?: string;
//   businessName?: string;
//   location?: string;
//   subscriptionTier: string;
//   aiChatUsed?: number;
//   aiChatMonth?: string;
//   businessInterests?: string[];
//   createdAt?: string;
// }

// interface AuthContextType {
//   user: User | null;
//   login: (user: User) => void;
//   logout: () => void;
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   refreshUser: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within an AuthProvider");
//   return context;
// };

// function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   // Fetch current user session from backend
//   const fetchCurrentUser = async () => {
//     try {
//       const response = await fetch("http://localhost:8000/api/auth/me", {

//         method: "GET",
//         credentials: "include", // Include HTTP-only cookies
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.ok) {
//         const userData = await response.json();
//         console.log("✅ User session loaded:", userData);
//         setUser(userData);
//       } else {
//         // Not authenticated or session expired
//         setUser(null);
//       }
//     } catch (error) {
//       console.error("Error fetching user session:", error);
//       setUser(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Check authentication on mount
//   useEffect(() => {
//     fetchCurrentUser();
//   }, []);

//   const login = (userData: User) => {
//     console.log("✅ User logged in:", userData);
//     setUser(userData);
//   };

//   const logout = async () => {
//     try {
//       // Call backend logout endpoint to clear session
//       await fetch("http://localhost:8000/api/auth/logout", {

//         method: "POST",
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       console.log("✅ User logged out");
//       setUser(null);
//     } catch (error) {
//       console.error("Error during logout:", error);
//       // Still clear user state even if request fails
//       setUser(null);
//     }
//   };

//   const refreshUser = async () => {
//     await fetchCurrentUser();
//   };

//   const isAuthenticated = !!user;

//   return (
//     <AuthContext.Provider value={{ user, login, logout, isAuthenticated, isLoading, refreshUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
// function ProtectedRoute({ component: Component, ...rest }: any) {
//   const { isAuthenticated, isLoading } = useAuth();
//   const [, setLocation] = useLocation();

//   // While checking session, show a loading state
//   if (isLoading) {
//     return (
//       <div className="flex h-screen items-center justify-center text-lg font-semibold">
//         Checking session...
//       </div>
//     );
//   }

//   // If not logged in → redirect to /login
//   if (!isAuthenticated) {
//     setLocation("/login");
//     return null;
//   }

//   // If logged in → show page
//   return <Component {...rest} />;
// }

// // function Router() {
// //   return (
// //     <Switch>
// //       {/* Landing Page - ROOT */}
// //       <Route path="/" component={Landing} />

// //       {/* Analytics Pages */}
// //       <Route path="/dashboard" component={Dashboard} />
// //       <Route path="/sales" component={Sales} />
// //       <Route path="/overview" component={Overview} />
// //       <Route path="/categories" component={Categories} />
// //       <Route path="/category-products/:source/:category" component={CategoryProducts} />
// //       <Route path="/product/:productName" component={ProductDetails} /> 
// //       <Route path="/product-tracker" component={ProductTracker} />
// //       <Route path="/product-tracker/history" component={ProductTrackerHistory} />
// //       <Route path="/sentiment-products/:source/:sentiment" component={SentimentProducts} />

// //       {/* Tools Pages */}
// //       <Route path="/subscription" component={Subscription} />
// //       <Route path="/about" component={About} />
// //       <Route path="/privacy-policy" component={PrivacyPolicy} />
// //       <Route path="/terms-service" component={TermsOfService} />
// //       <Route path="/settings" component={Settings} />

// //       {/* Auth Pages */}
// //       <Route path="/login" component={Login} />
// //       <Route path="/signup" component={Signup} />

// //       {/* 404 Fallback */}
// //       <Route component={NotFound} />
// //     </Switch>
// //   );
// // }

// function Router() {
//   return (
//     <Switch>
//       {/* Public Pages */}
//       <Route path="/" component={Landing} />
//       <Route path="/login" component={Login} />
//       <Route path="/signup" component={Signup} />
//       <Route path="/about" component={About} />
//       <Route path="/privacy-policy" component={PrivacyPolicy} />
//       <Route path="/terms-service" component={TermsOfService} />

//       {/* Protected Pages */}
//       <ProtectedRoute path="/dashboard" component={Dashboard} />
//       <ProtectedRoute path="/sales" component={Sales} />
//       <ProtectedRoute path="/overview" component={Overview} />
//       <ProtectedRoute path="/categories" component={Categories} />
//       <ProtectedRoute path="/category-products/:source/:category" component={CategoryProducts} />
//       <ProtectedRoute path="/product/:productName" component={ProductDetails} />
//       <ProtectedRoute path="/product-tracker" component={ProductTracker} />
//       <ProtectedRoute path="/product-tracker/history" component={ProductTrackerHistory} />
//       <ProtectedRoute path="/sentiment-products/:source/:sentiment" component={SentimentProducts} />
//       <ProtectedRoute path="/subscription" component={Subscription} />
//       <ProtectedRoute path="/settings" component={Settings} />

//       {/* 404 */}
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




// import { Switch, Route, useLocation } from "wouter";
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
// import ShareOfVoice from "@/pages/ShareOfVoice";

// // ==================
// // Auth Context
// // ==================
// interface User {
//   id: number;
//   email: string;
//   name?: string;
//   firstName?: string;
//   lastName?: string;
//   businessName?: string;
//   location?: string;
//   subscriptionTier: string;
//   aiChatUsed?: number;
//   aiChatMonth?: string;
//   businessInterests?: string[];
//   createdAt?: string;
// }

// interface AuthContextType {
//   user: User | null;
//   login: (user: User) => void;
//   logout: () => void;
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   refreshUser: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within an AuthProvider");
//   return context;
// };

// // ==================
// // AuthProvider
// // ==================
// function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   const fetchCurrentUser = async () => {
//     try {
//       const res = await fetch("http://localhost:8000/api/auth/me", {
//         credentials: "include",
//       });

//       if (res.ok) {
//         const data = await res.json();
//         setUser({
//           id: data.id,
//           email: data.email,
//           name: `${data.first_name} ${data.last_name}`,
//           firstName: data.first_name,
//           lastName: data.last_name,
//           businessName: data.business_name,
//           location: data.location,
//           subscriptionTier: data.subscription_tier || "free",
//           aiChatUsed: data.ai_chat_used,
//           aiChatMonth: data.ai_chat_month,
//           businessInterests: data.business_interests,
//           createdAt: data.created_at,
//         });
//       } else {
//         setUser(null);
//       }
//     } catch (err) {
//       console.error("Error fetching user session:", err);
//       setUser(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCurrentUser();
//   }, []);

//   const login = (userData: User) => {
//     setUser(userData);
//   };

//   const logout = async () => {
//     try {
//       await fetch("http://localhost:8000/api/auth/logout", {
//         method: "POST",
//         credentials: "include",
//       });
//     } catch (err) {
//       console.error("Logout failed:", err);
//     } finally {
//       setUser(null);
//     }
//   };

//   const refreshUser = async () => {
//     await fetchCurrentUser();
//   };

//   const isAuthenticated = !!user;

//   return (
//     <AuthContext.Provider
//       value={{ user, login, logout, isAuthenticated, isLoading, refreshUser }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // ==================
// // ProtectedRoute
// // ==================
// function ProtectedRoute({ component: Component, ...rest }: any) {
//   const { isAuthenticated, isLoading } = useAuth();
//   const [, setLocation] = useLocation();

//   if (isLoading) {
//     return (
//       <div className="flex h-screen items-center justify-center text-lg font-semibold">
//         Checking session...
//       </div>
//     );
//   }

//   if (!isAuthenticated) {
//     setLocation("/login");
//     return null;
//   }

//   return <Component {...rest} />;
// }

// // ==================
// // Router
// // ==================
// function Router() {
//   return (
//     <Switch>
//       {/* Public Pages */}
//       <Route path="/" component={Landing} />
//       <Route path="/login" component={Login} />
//       <Route path="/signup" component={Signup} />
//       <Route path="/about" component={About} />
//       <Route path="/privacy-policy" component={PrivacyPolicy} />
//       <Route path="/terms-service" component={TermsOfService} />

//       {/* Protected Pages */}
//       <ProtectedRoute path="/dashboard" component={Dashboard} />
//       <ProtectedRoute path="/sales" component={Sales} />
//       <ProtectedRoute path="/overview" component={Overview} />
//       <ProtectedRoute path="/categories" component={Categories} />
//       <ProtectedRoute
//         path="/category-products/:source/:category"
//         component={CategoryProducts}
//       />
//       <ProtectedRoute path="/product/:productName" component={ProductDetails} />
//       <ProtectedRoute path="/product-tracker" component={ProductTracker} />
//       <ProtectedRoute
//         path="/product-tracker/history"
//         component={ProductTrackerHistory}
//       />
//       <ProtectedRoute
//         path="/sentiment-products/:source/:sentiment"
//         component={SentimentProducts}
//       />
//       <ProtectedRoute path="/subscription" component={Subscription} />
//       <ProtectedRoute path="/settings" component={Settings} />
//       <ProtectedRoute path="/share-of-voice" component={ShareOfVoice} />

//       {/* 404 Fallback */}
//       <Route component={NotFound} />
//     </Switch>
//   );
// }

// // ==================
// // App
// // ==================
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




import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect, createContext, useContext } from "react";

// Pages
import Landing from "@/pages/landing";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-service";
import AmazonSellersPage from "@/pages/amazon-sellers";
import FlipkartSellersPage from "@/pages/flipkart-sellers";
import BrandManagersPage from "@/pages/brand-managers";
import EcommerceAgenciesPage from "@/pages/ecommerce-agencies";
import TrackCompetitorPricesPage from "@/pages/track-competitor-prices";
import FindProfitableProductsPage from "@/pages/find-profitable-products";
import AnalyzeCustomerReviewsPage from "@/pages/analyze-customer-reviews";
import ImproveSEOPage from "@/pages/improve-seo";
import AvoidStockoutsPage from "@/pages/avoid-stockouts";
import CompetitorPriceTrackingFeaturePage from "@/pages/competitor-price-tracking-feature";
import ReviewAnalyticsFeaturePage from "@/pages/review-analytics-feature";
import PriceOptimizationFeaturePage from "@/pages/price-optimization-feature";
import KeywordRankTrackingFeaturePage from "@/pages/keyword-rank-tracking-feature";
import ProductResearchFeaturePage from "@/pages/product-research-feature";
import AIRecommendationsFeaturePage from "@/pages/ai-recommendations-feature";
import WhatsAppAlertsFeaturePage from "@/pages/whatsapp-alerts-feature";

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
import ShareOfVoice from "@/pages/ShareOfVoice";
import KeywordTracker from "@/pages/keyword-tracker";


// ==================
// Environment Config
// ==================
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

// ==================
// Auth Context
// ==================
interface User {
  id: number;
  email: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  businessName?: string;
  location?: string;
  subscriptionTier: string;
  aiChatUsed?: number;
  aiChatMonth?: string;
  businessInterests?: string[];
  createdAt?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  refreshUser: () => Promise<void>;
  logout: () => Promise<void>; // ✅ Added logout function
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

// ==================
// AuthProvider
// ==================
function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCurrentUser = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/me`, {
        credentials: "include",
        headers: {
          "Accept": "application/json",
        },
      });

      if (res.ok) {
        const data = await res.json();
        setUser({
          id: data.id,
          email: data.email,
          name: `${data.first_name} ${data.last_name}`,
          firstName: data.first_name,
          lastName: data.last_name,
          businessName: data.business_name,
          location: data.location,
          subscriptionTier: data.subscription_tier || "free",
          aiChatUsed: data.ai_chat_used,
          aiChatMonth: data.ai_chat_month,
          businessInterests: data.business_interests,
          createdAt: data.created_at,
        });
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error("Error fetching user session:", err);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const refreshUser = async () => {
    setIsLoading(true);
    await fetchCurrentUser();
  };

  // ✅ NEW: Logout function
  const logout = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
        method: "POST",
        credentials: "include", // Important: sends the session cookie
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      // Clear user state
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
      throw error; // Re-throw so the component can handle it
    }
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, refreshUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ==================
// ProtectedRoute
// ==================
function ProtectedRoute({ component: Component, ...rest }: any) {
  const { isAuthenticated, isLoading } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Only redirect after loading is complete and user is not authenticated
    if (!isLoading && !isAuthenticated) {
      setLocation("/login");
    }
  }, [isLoading, isAuthenticated, setLocation]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg font-semibold text-muted-foreground">
            Verifying session...
          </p>
        </div>
      </div>
    );
  }

  // Don't render anything while redirecting
  if (!isAuthenticated) {
    return null;
  }

  // Render protected component
  return <Component {...rest} />;
}

// ==================
// PublicRoute (redirects to dashboard if already logged in)
// ==================
function PublicRoute({ component: Component, ...rest }: any) {
  const { isAuthenticated, isLoading } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Redirect to dashboard if already authenticated
    if (!isLoading && isAuthenticated) {
      setLocation("/dashboard");
    }
  }, [isLoading, isAuthenticated, setLocation]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg font-semibold text-muted-foreground">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  // Render public component if not authenticated
  return <Component {...rest} />;
}

// ==================
// Router
// ==================
function Router() {
  return (
    <Switch>
      {/* Public Pages (always accessible) */}
      <Route path="/" component={Landing} />
      <Route path="/about" component={About} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-service" component={TermsOfService} />
      <Route path="/amazon-sellers" component={AmazonSellersPage} />
      <Route path="/flipkart-sellers" component={FlipkartSellersPage} />
      <Route path="/brand-managers" component={BrandManagersPage} />
      <Route path="/ecommerce-agencies" component={EcommerceAgenciesPage} />
      <Route path="/track-competitor-prices" component={TrackCompetitorPricesPage} />
      <Route path="/find-profitable-products" component={FindProfitableProductsPage} />
      <Route path="/analyze-customer-reviews" component={AnalyzeCustomerReviewsPage} />
      <Route path="/improve-seo" component={ImproveSEOPage} />
      <Route path="/avoid-stockouts" component={AvoidStockoutsPage} />
      <Route path="/competitor-price-tracking-feature" component={CompetitorPriceTrackingFeaturePage} />
      <Route path="/review-analytics-feature" component={ReviewAnalyticsFeaturePage} />
      <Route path="/price-optimization-feature" component={PriceOptimizationFeaturePage} />
      <Route path="/keyword-rank-tracking-feature" component={KeywordRankTrackingFeaturePage} />
      <Route path="/product-research-feature" component={ProductResearchFeaturePage} />
      <Route path="/ai-recommendations-feature" component={AIRecommendationsFeaturePage} />
      <Route path="/whatsapp-alerts-feature" component={WhatsAppAlertsFeaturePage} />

      {/* Auth Pages (redirect to dashboard if already logged in) */}
      <PublicRoute path="/login" component={Login} />
      <PublicRoute path="/signup" component={Signup} />

      {/* Protected Pages */}
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <ProtectedRoute path="/sales" component={Sales} />
      <ProtectedRoute path="/overview" component={Overview} />
      <ProtectedRoute path="/categories" component={Categories} />
      <ProtectedRoute
        path="/category-products/:source/:category"
        component={CategoryProducts}
      />
      <ProtectedRoute path="/product/:productName" component={ProductDetails} />
      <ProtectedRoute path="/product-tracker" component={ProductTracker} />
      <ProtectedRoute
        path="/product-tracker/history"
        component={ProductTrackerHistory}
      />
      <ProtectedRoute
        path="/sentiment-products/:source/:sentiment"
        component={SentimentProducts}
      />
      <ProtectedRoute path="/subscription" component={Subscription} />
      <ProtectedRoute path="/settings" component={Settings} />
      <ProtectedRoute path="/share-of-voice" component={ShareOfVoice} />
      <ProtectedRoute path="/keyword-tracker" component={KeywordTracker} />

      {/* 404 Fallback */}
      <Route component={NotFound} />
    </Switch>
  );
}

// ==================
// App
// ==================
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