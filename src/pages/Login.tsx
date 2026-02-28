import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/components/auth/AuthProvider";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";
import { HelpCircle, Mail, Phone, Eye, EyeOff } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [resetEmailLoading, setResetEmailLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, signInWithGoogle, resetPassword, user } = useAuth();
  const router = useRouter();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Redirect if user is already authenticated
  useEffect(() => {
    // Don't redirect if this is a password recovery flow
    const isRecovery = typeof window !== 'undefined' && window.location.hash.includes("type=recovery");

    if (user && !isRecovery) {
      console.log("User already authenticated, redirecting to dashboard");
      router.replace("/");
    }
  }, [user, router]);

  const handleSubmit = async (data: LoginFormData) => {
    setLoading(true);

    try {
      await signIn(data.email, data.password);
      // The AuthProvider will handle the success message and navigation
    } catch (error: any) {
      console.error("Email/password sign in error:", error);
      if (error.message.includes("Invalid login credentials")) {
        toast.error("Invalid email or password. Please try again.");
      } else {
        toast.error(`Login failed: ${error?.message || "Unknown error"}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    toast.loading("Redirecting to Google...");

    try {
      await signInWithGoogle();
      // Don't set loading to false here - the page will redirect
    } catch (error: any) {
      console.error("Google sign-in error:", error);
      toast.dismiss();
      toast.error(
        `Google sign-in failed: ${error?.message || "Unknown error"}`,
      );
      setGoogleLoading(false);
    }
  };

  const handleResetPassword = async () => {
    const email = form.getValues("email");

    if (!email) {
      toast.error("Please enter your email address first");
      return;
    }

    setResetEmailLoading(true);
    try {
      await resetPassword(email);
      setResetEmailSent(true);
      toast.success("Password reset email sent! Check your inbox.");
    } catch (error: any) {
      console.error("Password reset error:", error);
      toast.error(
        `Failed to send reset email: ${error?.message || "Unknown error"}`,
      );
    } finally {
      setResetEmailLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/lovable-uploads/2fca69a3-fd1f-4833-bb84-fd7f5764059f.png')`,
      }}>
      <div className="mb-6">
        <img
          src="/lovable-uploads/798d07d7-1db7-498c-92f3-6f6346827d59.png"
          alt="Gonzo Systems"
          className="h-16 md:h-20 object-contain"
        />
      </div>
      <Card className="w-full max-w-md border-primary/10 shadow-lg bg-white/90">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-primary">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center">
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Enter your email"
                        className="border-input focus:border-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="border-input focus:border-primary pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      variant="link"
                      className="text-sm text-primary p-0 h-auto">
                      <HelpCircle className="w-4 h-4 mr-1" />
                      Need Help?
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Need Help?</DialogTitle>
                      <DialogDescription>
                        If you need assistance with logging in or have any other
                        questions, please contact our support team.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <p>Common issues:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Forgot your password? Use the "Forgot password?" link.
                        </li>
                        <li>New user? Click on "Create Account" to sign up.</li>
                        <li>
                          Having trouble with Google Sign-in? Make sure you have
                          a valid Google account.
                        </li>
                      </ul>
                      <div className="p-4 border rounded-md mt-4">
                        <h3 className="font-medium mb-2">Contact Support</h3>
                        <p className="text-sm mb-2 flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <a
                            href="mailto:gonzabrands@gmail.com"
                            className="text-primary hover:underline">
                            gonzabrands@gmail.com
                          </a>
                        </p>
                        <p className="text-sm flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          <a
                            href="tel:+256758519696"
                            className="text-primary hover:underline">
                            +256 758519696
                          </a>
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button
                  type="button"
                  variant="link"
                  className="text-sm text-primary p-0 h-auto"
                  onClick={handleResetPassword}
                  disabled={resetEmailLoading}>
                  {resetEmailLoading
                    ? "Sending..."
                    : resetEmailSent
                    ? "Email sent!"
                    : "Forgot password?"}
                </Button>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </Form>

          <div className="relative my-4">
            <Separator />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-2 text-sm text-gray-500">OR</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full flex items-center justify-center gap-2 border-gray-300 hover:bg-gray-50"
            onClick={handleGoogleSignIn}
            disabled={googleLoading || loading}>
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            {googleLoading
              ? "Connecting with Google..."
              : "Sign in with Google"}
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full border-primary/20 hover:bg-primary/5 mt-4"
            onClick={() => router.push("/signup")}
            disabled={loading || googleLoading}>
            Create Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
