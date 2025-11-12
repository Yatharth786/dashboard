// // ============================================
// // FILE: src/pages/login.tsx (UPDATED TO MATCH SIGNUP)
// // ============================================
// import { useState } from "react";
// import { Link, useLocation } from "wouter";
// import { useToast } from "@/hooks/use-toast";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { Checkbox } from "@/components/ui/checkbox";
// import { ChartLine } from "lucide-react";
 
// export default function Login() {
//   const [, setLocation] = useLocation();
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
 
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
   
//     if (!formData.email || !formData.password) {
//       toast({
//         title: "Missing fields",
//         description: "Please fill in all required fields.",
//         variant: "destructive",
//       });
//       return;
//     }
 
//     setIsLoading(true);
 
//     // Simulate login
//     setTimeout(() => {
//       // Check if user exists in localStorage (from signup)
//       const existingProfile = localStorage.getItem('userProfile');
     
//       let user;
//       if (existingProfile) {
//         const profile = JSON.parse(existingProfile);
//         user = {
//           name: `${profile.firstName} ${profile.lastName}`,
//           email: formData.email,
//           businessName: profile.businessName,
//           location: profile.location,
//           businessInterests: profile.businessInterests || [],
//           loggedIn: true
//         };
//       } else {
//         // New user logging in
//         user = {
//           email: formData.email,
//           name: formData.email.split('@')[0],
//           loggedIn: true
//         };
//       }
     
//       localStorage.setItem('user', JSON.stringify(user));
     
//       if (rememberMe) {
//         localStorage.setItem('rememberMe', 'true');
//       }
 
//       toast({
//         title: "Welcome back!",
//         description: "Successfully logged in to Amazon Reviews Analytics.",
//       });
     
//       setIsLoading(false);
//       setLocation("/dashboard");
//     }, 800);
//   };
 
//   const handleInputChange = (field: string) => (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setFormData(prev => ({ ...prev, [field]: e.target.value }));
//   };
 
//   const handleDemoLogin = () => {
//     const user = {
//       email: "demo@example.com",
//       name: "Demo User",
//       businessName: "Demo Business",
//       location: "mumbai",
//       businessInterests: ["electronics", "fashion", "home"],
//       loggedIn: true
//     };
//     localStorage.setItem('user', JSON.stringify(user));
   
//     toast({
//       title: "Demo Login",
//       description: "Logged in as demo user",
//     });
   
//     setLocation("/dashboard");
//   };
 
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-gray-900 dark:via-background dark:to-gray-900 flex items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         {/* Logo and Header */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4 shadow-lg">
//             <ChartLine className="text-primary-foreground h-8 w-8" />
//           </div>
//           <h1 className="text-3xl font-bold text-foreground mb-2">Amazon Reviews Analytics</h1>
//           <p className="text-muted-foreground">Real-time insights from your review data</p>
//         </div>
 
//         <Card className="border shadow-xl">
//           <CardHeader className="text-center">
//             <CardTitle className="text-2xl">Welcome Back</CardTitle>
//             <CardDescription>
//               Sign in to access your analytics dashboard
//             </CardDescription>
//           </CardHeader>
         
//           <CardContent className="space-y-6">
//             {/* Demo Login Button */}
//             <Button
//               variant="outline"
//               className="w-full border-2 border-primary/50 hover:bg-primary/10"
//               onClick={handleDemoLogin}
//             >
//               <ChartLine className="mr-2 h-4 w-4" />
//               Continue as Demo User
//             </Button>
 
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <Separator className="w-full" />
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="bg-card px-4 text-muted-foreground">
//                   or continue with email
//                 </span>
//               </div>
//             </div>
 
//             {/* Login Form */}
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email Address</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="your@email.com"
//                   value={formData.email}
//                   onChange={handleInputChange("email")}
//                   required
//                 />
//               </div>
             
//               <div className="space-y-2">
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="••••••••"
//                   value={formData.password}
//                   onChange={handleInputChange("password")}
//                   required
//                 />
//               </div>
 
//               <div className="flex items-center justify-between text-sm">
//                 <div className="flex items-center space-x-2">
//                   <Checkbox
//                     id="remember"
//                     checked={rememberMe}
//                     onCheckedChange={(checked) => setRememberMe(checked === true)}
//                   />
//                   <Label htmlFor="remember" className="cursor-pointer">
//                     Remember me
//                   </Label>
//                 </div>
//                 <Button variant="link" className="p-0 h-auto text-primary text-sm">
//                   Forgot password?
//                 </Button>
//               </div>
 
//               <Button
//                 type="submit"
//                 className="w-full"
//                 disabled={isLoading}
//                 size="lg"
//               >
//                 {isLoading ? "Signing in..." : "Sign In"}
//               </Button>
//             </form>
 
//             {/* Signup Link */}
//             <div className="text-center">
//               <p className="text-sm text-muted-foreground">
//                 Don't have an account?{" "}
//                 <Link href="/signup">
//                   <Button variant="link" className="p-0 h-auto text-primary font-medium">
//                     Create account
//                   </Button>
//                 </Link>
//               </p>
//             </div>
 
//             {/* Info Note */}
//             <div className="text-center pt-4 border-t">
//               <p className="text-xs text-muted-foreground">
//                 This is a demo. Any credentials work for testing, or use the demo button above.
//               </p>
//             </div>
//           </CardContent>
//         </Card>
 
//         {/* Footer Links */}
//         <div className="text-center mt-6 text-sm text-muted-foreground">
//           <p>Powered by Amazon Reviews Database</p>
//           <p className="mt-2">
//             <Link href="/about">
//               <Button variant="link" className="p-0 h-auto text-xs">About</Button>
//             </Link>
//             {" • "}
//             <Button
//               variant="link"
//               className="p-0 h-auto text-xs"
//               onClick={() => window.open('http://localhost:8000/docs', '_blank')}
//             >
//               API Docs
//             </Button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
 
// ============================================
// FILE: src/pages/login.tsx (FIXED FOR YOUR ALERT COMPONENT)
// ============================================
// import { useState } from "react";
// import { Link, useLocation } from "wouter";
// import { useToast } from "@/hooks/use-toast";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { Checkbox } from "@/components/ui/checkbox";
// import { ChartLine, AlertCircle } from "lucide-react";
// import { Alert } from "@/components/ui/alert";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
 
// export default function Login() {
//   const [, setLocation] = useLocation();
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [showResetDialog, setShowResetDialog] = useState(false);
//   const [resetEmail, setResetEmail] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [isResetting, setIsResetting] = useState(false);
 
//   // UPDATE THIS TO YOUR SERVER IP
//   const API_BASE_URL = "http://localhost:8000";
 
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrorMessage("");
   
//     if (!formData.email || !formData.password) {
//       setErrorMessage("Please fill in all required fields.");
//       return;
//     }
 
//     setIsLoading(true);
 
//     try {
//       console.log("🔍 Attempting login for:", formData.email);
     
//       const response = await fetch(`${API_BASE_URL}/users/login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password
//         }),
//       });
 
//       console.log("📥 Response status:", response.status);
 
//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error("❌ Login error:", errorData);
       
//         // Handle different error types
//         if (response.status === 404) {
//           setErrorMessage("No account found with this email. Please sign up first.");
//         } else if (response.status === 401) {
//           setErrorMessage("Incorrect password. Click 'Forgot Password' to reset.");
//           setResetEmail(formData.email);
//         } else if (response.status === 403) {
//           setErrorMessage("Account is deactivated. Please contact support.");
//         } else {
//           setErrorMessage(errorData.detail || "Login failed. Please try again.");
//         }
       
//         setIsLoading(false);
//         return;
//       }
 
//       const data = await response.json();
//       console.log("✅ Login successful:", data);
 
//       // Store user data
//       const user = {
//         id: data.user.id,
//         name: `${data.user.first_name} ${data.user.last_name}`,
//         email: data.user.email,
//         businessName: data.user.business_name,
//         location: data.user.location,
//         businessInterests: data.user.business_interests,
//         loggedIn: true,
//         createdAt: data.user.created_at
//       };
     
//       localStorage.setItem('user', JSON.stringify(user));
     
//       if (rememberMe) {
//         localStorage.setItem('rememberMe', 'true');
//         localStorage.setItem('savedEmail', formData.email);
//       }
 
//       toast({
//         title: "Welcome back!",
//         description: `Successfully logged in as ${user.name}`,
//       });
     
//       setIsLoading(false);
//       setLocation("/dashboard");
 
//     } catch (error: any) {
//       console.error("❌ Network error:", error);
//       setErrorMessage("Network error. Please check your connection and try again.");
//       setIsLoading(false);
//     }
//   };
 
//   const handlePasswordReset = async () => {
//     if (!resetEmail) {
//       toast({
//         title: "Email required",
//         description: "Please enter your email address",
//         variant: "destructive"
//       });
//       return;
//     }
 
//     if (!newPassword || !confirmPassword) {
//       toast({
//         title: "Password required",
//         description: "Please enter and confirm your new password",
//         variant: "destructive"
//       });
//       return;
//     }
 
//     if (newPassword !== confirmPassword) {
//       toast({
//         title: "Passwords don't match",
//         description: "Please make sure both passwords match",
//         variant: "destructive"
//       });
//       return;
//     }
 
//     if (newPassword.length < 6) {
//       toast({
//         title: "Password too short",
//         description: "Password must be at least 6 characters",
//         variant: "destructive"
//       });
//       return;
//     }
 
//     setIsResetting(true);
 
//     try {
//       const response = await fetch(`${API_BASE_URL}/users/reset-password`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: resetEmail,
//           new_password: newPassword
//         }),
//       });
 
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.detail || "Password reset failed");
//       }
 
//       const data = await response.json();
     
//       toast({
//         title: "Password updated!",
//         description: "Your password has been successfully reset. Please login with your new password.",
//       });
 
//       setShowResetDialog(false);
//       setResetEmail("");
//       setNewPassword("");
//       setConfirmPassword("");
//       setFormData({ ...formData, password: "" });
 
//     } catch (error: any) {
//       toast({
//         title: "Reset failed",
//         description: error.message,
//         variant: "destructive"
//       });
//     } finally {
//       setIsResetting(false);
//     }
//   };
 
//   const handleInputChange = (field: string) => (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setFormData(prev => ({ ...prev, [field]: e.target.value }));
//     setErrorMessage(""); // Clear error when user types
//   };
 
//   const handleDemoLogin = () => {
//     const user = {
//       email: "demo@example.com",
//       name: "Demo User",
//       businessName: "Demo Business",
//       location: "mumbai",
//       businessInterests: ["electronics", "fashion", "home"],
//       loggedIn: true
//     };
//     localStorage.setItem('user', JSON.stringify(user));
   
//     toast({
//       title: "Demo Login",
//       description: "Logged in as demo user",
//     });
   
//     setLocation("/dashboard");
//   };
 
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-gray-900 dark:via-background dark:to-gray-900 flex items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         {/* Logo and Header */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4 shadow-lg">
//             <ChartLine className="text-primary-foreground h-8 w-8" />
//           </div>
//           <h1 className="text-3xl font-bold text-foreground mb-2">Insydz</h1>
//           <p className="text-muted-foreground">Real-time insights from your review data</p>
//         </div>
 
//         <Card className="border shadow-xl">
//           <CardHeader className="text-center">
//             <CardTitle className="text-2xl">Welcome Back</CardTitle>
//             <CardDescription>
//               Sign in to access your analytics dashboard
//             </CardDescription>
//           </CardHeader>
         
//           <CardContent className="space-y-6">
//             {/* Error Alert - FIXED to use description prop */}
//             {errorMessage && (
//               <Alert
//                 variant="destructive"
//                 icon={<AlertCircle className="h-4 w-4" />}
//                 description={errorMessage}
//               />
//             )}
 
//             {/* Demo Login Button */}
//             <Button
//               variant="outline"
//               className="w-full border-2 border-primary/50 hover:bg-primary/10"
//               onClick={handleDemoLogin}
//             >
//               <ChartLine className="mr-2 h-4 w-4" />
//               Continue as Demo User
//             </Button>
 
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <Separator className="w-full" />
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="bg-card px-4 text-muted-foreground">
//                   or continue with email
//                 </span>
//               </div>
//             </div>
 
//             {/* Login Form */}
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email Address</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="your@email.com"
//                   value={formData.email}
//                   onChange={handleInputChange("email")}
//                   required
//                 />
//               </div>
             
//               <div className="space-y-2">
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="••••••••"
//                   value={formData.password}
//                   onChange={handleInputChange("password")}
//                   required
//                 />
//               </div>
 
//               <div className="flex items-center justify-between text-sm">
//                 <div className="flex items-center space-x-2">
//                   <Checkbox
//                     id="remember"
//                     checked={rememberMe}
//                     onCheckedChange={(checked) => setRememberMe(checked === true)}
//                   />
//                   <Label htmlFor="remember" className="cursor-pointer">
//                     Remember me
//                   </Label>
//                 </div>
//                 <Button
//                   type="button"
//                   variant="link"
//                   className="p-0 h-auto text-primary text-sm"
//                   onClick={() => {
//                     setResetEmail(formData.email);
//                     setShowResetDialog(true);
//                   }}
//                 >
//                   Forgot password?
//                 </Button>
//               </div>
 
//               <Button
//                 type="submit"
//                 className="w-full"
//                 disabled={isLoading}
//                 size="lg"
//               >
//                 {isLoading ? "Signing in..." : "Sign In"}
//               </Button>
//             </form>
 
//             {/* Signup Link */}
//             <div className="text-center">
//               <p className="text-sm text-muted-foreground">
//                 Don't have an account?{" "}
//                 <Link href="/signup">
//                   <Button variant="link" className="p-0 h-auto text-primary font-medium">
//                     Create account
//                   </Button>
//                 </Link>
//               </p>
//             </div>
 
//             {/* Info Note */}
//             <div className="text-center pt-4 border-t">
//               <p className="text-xs text-muted-foreground">
//                 Secure authentication with password validation
//               </p>
//             </div>
//           </CardContent>
//         </Card>
 
//         {/* Footer Links */}
//         <div className="text-center mt-6 text-sm text-muted-foreground">
//           <p>Powered by Amazon Reviews Database</p>
//           <p className="mt-2">
//             <Link href="/about">
//               <Button variant="link" className="p-0 h-auto text-xs">About</Button>
//             </Link>
//             {" • "}
//             <Button
//               variant="link"
//               className="p-0 h-auto text-xs"
//               onClick={() => window.open('http://localhost:8000/docs', '_blank')}
//             >
//               API Docs
//             </Button>
//           </p>
//         </div>
//       </div>
 
//       {/* Password Reset Dialog */}
//       <Dialog open={showResetDialog} onOpenChange={setShowResetDialog}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Reset Password</DialogTitle>
//             <DialogDescription>
//               Enter your email and new password to reset your account password
//             </DialogDescription>
//           </DialogHeader>
         
//           <div className="space-y-4 py-4">
//             <div className="space-y-2">
//               <Label htmlFor="reset-email">Email Address</Label>
//               <Input
//                 id="reset-email"
//                 type="email"
//                 placeholder="your@email.com"
//                 value={resetEmail}
//                 onChange={(e) => setResetEmail(e.target.value)}
//               />
//             </div>
           
//             <div className="space-y-2">
//               <Label htmlFor="new-password">New Password</Label>
//               <Input
//                 id="new-password"
//                 type="password"
//                 placeholder="Enter new password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 minLength={6}
//               />
//             </div>
           
//             <div className="space-y-2">
//               <Label htmlFor="confirm-password">Confirm Password</Label>
//               <Input
//                 id="confirm-password"
//                 type="password"
//                 placeholder="Confirm new password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 minLength={6}
//               />
//             </div>
//           </div>
 
//           <DialogFooter>
//             <Button
//               variant="outline"
//               onClick={() => setShowResetDialog(false)}
//               disabled={isResetting}
//             >
//               Cancel
//             </Button>
//             <Button
//               onClick={handlePasswordReset}
//               disabled={isResetting}
//             >
//               {isResetting ? "Resetting..." : "Reset Password"}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
 
import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { TrendingUp, AlertCircle, ArrowLeft, Sparkles } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
 
export default function Login() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showResetDialog, setShowResetDialog] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isResetting, setIsResetting] = useState(false);
 
  const API_BASE_URL = "http://localhost:8000";
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
   
    if (!formData.email || !formData.password) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }
 
    setIsLoading(true);
 
    try {
      const response = await fetch(`${API_BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });
 
      if (!response.ok) {
        const errorData = await response.json();
       
        if (response.status === 404) {
          setErrorMessage("No account found with this email. Please sign up first.");
        } else if (response.status === 401) {
          setErrorMessage("Incorrect password. Click 'Forgot Password' to reset.");
          setResetEmail(formData.email);
        } else if (response.status === 403) {
          setErrorMessage("Account is deactivated. Please contact support.");
        } else {
          setErrorMessage(errorData.detail || "Login failed. Please try again.");
        }
       
        setIsLoading(false);
        return;
      }
 
      const data = await response.json();
 
      const user = {
        id: data.user.id,
        name: `${data.user.first_name} ${data.user.last_name}`,
        email: data.user.email,
        businessName: data.user.business_name,
        location: data.user.location,
        businessInterests: data.user.business_interests,
        loggedIn: true,
        createdAt: data.user.created_at
      };
     
      localStorage.setItem('user', JSON.stringify(user));
     
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
        localStorage.setItem('savedEmail', formData.email);
      }
     
      setIsLoading(false);
      setLocation("/dashboard");
 
    } catch (error: any) {
      setErrorMessage("Network error. Please check your connection and try again.");
      setIsLoading(false);
    }
  };
 
  const handlePasswordReset = async () => {
    if (!resetEmail || !newPassword || !confirmPassword) return;
    if (newPassword !== confirmPassword) return;
    if (newPassword.length < 6) return;
 
    setIsResetting(true);
 
    try {
      const response = await fetch(`${API_BASE_URL}/users/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: resetEmail,
          new_password: newPassword
        }),
      });
 
      if (response.ok) {
        setShowResetDialog(false);
        setResetEmail("");
        setNewPassword("");
        setConfirmPassword("");
        setFormData({ ...formData, password: "" });
      }
    } catch (error: any) {
      // Handle error
    } finally {
      setIsResetting(false);
    }
  };
 
  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    setErrorMessage("");
  };
 
  const handleDemoLogin = () => {
    const user = {
      email: "demo@example.com",
      name: "Demo User",
      businessName: "Demo Business",
      location: "mumbai",
      businessInterests: ["electronics", "fashion", "home"],
      loggedIn: true
    };
    localStorage.setItem('user', JSON.stringify(user));
    setLocation("/dashboard");
  };
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-gray-900 dark:via-background dark:to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }}></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Back Button - Responsive Design */}
        {/* Mobile: Fixed top-left with icon only */}
        <button
          onClick={() => setLocation("/")}
          className="md:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-full flex items-center justify-center shadow-lg hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-all hover:scale-110"
        >
          <ArrowLeft className="w-5 h-5 text-purple-600" />
        </button>

        {/* Tablet: Fixed top with text */}
        <button
          onClick={() => setLocation("/")}
          className="hidden md:flex lg:hidden fixed top-6 left-6 z-50 items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-full shadow-lg hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-all hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Back to Home</span>
        </button>

        {/* Desktop: Static inline with full styling */}
        <button
          onClick={() => setLocation("/")}
          className="hidden lg:flex mb-6 items-center space-x-3 px-5 py-3 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all group"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <ArrowLeft className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Back to Home</span>
        </button>

        {/* Logo Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-4 shadow-lg transform hover:scale-110 transition-transform">
            <TrendingUp className="text-white h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
            Welcome to Insydz
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Sign in to access your analytics dashboard</p>
        </div>
 
        <Card className="border-0 shadow-2xl backdrop-blur-xl bg-white/70 dark:bg-gray-900/70">
          <CardHeader className="text-center space-y-2 pb-4">
            <CardTitle className="text-2xl">Sign In</CardTitle>
            <CardDescription className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-500" />
              Continue your analytics journey
            </CardDescription>
          </CardHeader>
         
          <CardContent className="space-y-6">
            {errorMessage && (
              <Alert variant="destructive" className="border-red-200 bg-red-50 dark:bg-red-900/20">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{errorMessage}</AlertDescription>
              </Alert>
            )}
 
            <Button
              variant="outline"
              className="w-full border-2 border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-400 transition-all"
              onClick={handleDemoLogin}
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              Try Demo Account
            </Button>
 
            <div className="relative">
              <Separator className="w-full" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 px-4 text-sm text-gray-500">
                or sign in with email
              </span>
            </div>
 
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  className="h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
             
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange("password")}
                  className="h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
 
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked === true)}
                  />
                  <Label htmlFor="remember" className="cursor-pointer text-gray-600 dark:text-gray-400">
                    Remember me
                  </Label>
                </div>
                <Button
                  type="button"
                  variant="link"
                  className="p-0 h-auto text-purple-600 hover:text-purple-700 text-sm font-medium"
                  onClick={() => {
                    setResetEmail(formData.email);
                    setShowResetDialog(true);
                  }}
                >
                  Forgot password?
                </Button>
              </div>
 
              <Button
                onClick={handleSubmit}
                className="w-full h-11 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02]"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Signing in...
                  </span>
                ) : "Sign In"}
              </Button>
            </div>
 
            <div className="text-center pt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?{" "}
                <button
                  onClick={() => setLocation("/signup")}
                  className="text-purple-600 hover:text-purple-700 font-semibold hover:underline"
                >
                  Create account
                </button>
              </p>
            </div>
 
            <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-800">
              <p className="text-xs text-gray-500">
                🔒 Secure authentication with end-to-end encryption
              </p>
            </div>
          </CardContent>
        </Card>
 
        <div className="text-center mt-6 text-sm text-gray-600 dark:text-gray-400">
          <p className="font-medium">Powered by Insydz Analytics</p>
        </div>
      </div>
 
      <Dialog open={showResetDialog} onOpenChange={setShowResetDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Reset Password</DialogTitle>
            <DialogDescription>
              Enter your email and new password to reset your account
            </DialogDescription>
          </DialogHeader>
         
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="reset-email">Email Address</Label>
              <Input
                id="reset-email"
                type="email"
                placeholder="your@email.com"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                className="h-11"
              />
            </div>
           
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                minLength={6}
                className="h-11"
              />
            </div>
           
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                minLength={6}
                className="h-11"
              />
            </div>
          </div>
 
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowResetDialog(false)}
              disabled={isResetting}
            >
              Cancel
            </Button>
            <Button
              onClick={handlePasswordReset}
              disabled={isResetting}
              className="bg-gradient-to-r from-purple-600 to-pink-600"
            >
              {isResetting ? "Resetting..." : "Reset Password"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}