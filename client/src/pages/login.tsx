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
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { ChartLine, AlertCircle } from "lucide-react";
import { Alert } from "@/components/ui/alert";
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
  const { toast } = useToast();
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
 
  // UPDATE THIS TO YOUR SERVER IP
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
      console.log("🔍 Attempting login for:", formData.email);
     
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
 
      console.log("📥 Response status:", response.status);
 
      if (!response.ok) {
        const errorData = await response.json();
        console.error("❌ Login error:", errorData);
       
        // Handle different error types
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
      console.log("✅ Login successful:", data);
 
      // Store user data
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
 
      toast({
        title: "Welcome back!",
        description: `Successfully logged in as ${user.name}`,
      });
     
      setIsLoading(false);
      setLocation("/dashboard");
 
    } catch (error: any) {
      console.error("❌ Network error:", error);
      setErrorMessage("Network error. Please check your connection and try again.");
      setIsLoading(false);
    }
  };
 
  const handlePasswordReset = async () => {
    if (!resetEmail) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
 
    if (!newPassword || !confirmPassword) {
      toast({
        title: "Password required",
        description: "Please enter and confirm your new password",
        variant: "destructive"
      });
      return;
    }
 
    if (newPassword !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure both passwords match",
        variant: "destructive"
      });
      return;
    }
 
    if (newPassword.length < 6) {
      toast({
        title: "Password too short",
        description: "Password must be at least 6 characters",
        variant: "destructive"
      });
      return;
    }
 
    setIsResetting(true);
 
    try {
      const response = await fetch(`${API_BASE_URL}/users/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: resetEmail,
          new_password: newPassword
        }),
      });
 
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Password reset failed");
      }
 
      const data = await response.json();
     
      toast({
        title: "Password updated!",
        description: "Your password has been successfully reset. Please login with your new password.",
      });
 
      setShowResetDialog(false);
      setResetEmail("");
      setNewPassword("");
      setConfirmPassword("");
      setFormData({ ...formData, password: "" });
 
    } catch (error: any) {
      toast({
        title: "Reset failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsResetting(false);
    }
  };
 
  const handleInputChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    setErrorMessage(""); // Clear error when user types
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
   
    toast({
      title: "Demo Login",
      description: "Logged in as demo user",
    });
   
    setLocation("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-gray-900 dark:via-background dark:to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4 shadow-lg">
            <ChartLine className="text-primary-foreground h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Insydz</h1>
          <p className="text-muted-foreground">Real-time insights from your review data</p>
        </div>
 
        <Card className="border shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription>
              Sign in to access your analytics dashboard
            </CardDescription>
          </CardHeader>
         
          <CardContent className="space-y-6">
            {/* Error Alert - FIXED to use description prop */}
            {errorMessage && (
              <Alert
                variant="destructive"
                icon={<AlertCircle className="h-4 w-4" />}
                description={errorMessage}
              />
            )}
 
            {/* Demo Login Button */}
            <Button
              variant="outline"
              className="w-full border-2 border-primary/50 hover:bg-primary/10"
              onClick={handleDemoLogin}
            >
              <ChartLine className="mr-2 h-4 w-4" />
              Continue as Demo User
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-card px-4 text-muted-foreground">
                  or continue with email
                </span>
              </div>
            </div>
 
            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  required
                />
              </div>
             
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange("password")}
                  required
                />
              </div>
 
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember" 
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked === true)}
                  />
                  <Label htmlFor="remember" className="cursor-pointer">
                    Remember me
                  </Label>
                </div>
                <Button
                  type="button"
                  variant="link"
                  className="p-0 h-auto text-primary text-sm"
                  onClick={() => {
                    setResetEmail(formData.email);
                    setShowResetDialog(true);
                  }}
                >
                  Forgot password?
                </Button>
              </div>
 
              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
                size="lg"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
 
            {/* Signup Link */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link href="/signup">
                  <Button variant="link" className="p-0 h-auto text-primary font-medium">
                    Create account
                  </Button>
                </Link>
              </p>
            </div>
 
            {/* Info Note */}
            <div className="text-center pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                Secure authentication with password validation
              </p>
            </div>
          </CardContent>
        </Card>
 
        {/* Footer Links */}
        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>Powered by Amazon Reviews Database</p>
          <p className="mt-2">
            <Link href="/about">
              <Button variant="link" className="p-0 h-auto text-xs">About</Button>
            </Link>
            {" • "}
            <Button
              variant="link"
              className="p-0 h-auto text-xs"
              onClick={() => window.open('http://localhost:8000/docs', '_blank')}
            >
              API Docs
            </Button>
          </p>
        </div>
      </div>
 
      {/* Password Reset Dialog */}
      <Dialog open={showResetDialog} onOpenChange={setShowResetDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reset Password</DialogTitle>
            <DialogDescription>
              Enter your email and new password to reset your account password
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
            >
              {isResetting ? "Resetting..." : "Reset Password"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
 
