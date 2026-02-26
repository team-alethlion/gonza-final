import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/components/auth/AuthProvider';
import { toast } from 'sonner';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Separator } from '@/components/ui/separator';
import { HelpCircle, Mail, Phone, Eye, EyeOff } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const signUpSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Please confirm your password")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [signupError, setSignupError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const { signUp, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const handleSubmit = async (data: SignUpFormData) => {
    setLoading(true);
    setSignupError(null);

    try {
      console.log('Starting signup process with data:', {
        email: data.email
      });

      // Sign up with empty metadata for now, business info collected during onboarding
      const { error, user } = await signUp(data.email, data.password, {
        data: {
          onboarding_started: true
        },
      });

      if (error) {
        console.error('Signup error details:', error);

        if (error.message.includes('already registered')) {
          toast.error("This email is already registered. Please sign in instead.");
          setSignupError("This email is already registered. Please sign in instead.");
        } else {
          toast.error(`Signup failed: ${error.message}`);
          setSignupError(error.message);
        }

        setLoading(false);
        return;
      }

      // Successful signup
      console.log('Account created successfully:', user);
      toast.success('Registration successful!');

      // If email confirmation is required, Supabase won't sign them in automatically.
      // If not required, we can go straight to onboarding.
      // Based on previous logs, most users are redirected to login for verification.
      // However, the user requested "after that should redirect to the onboarding page".
      // We'll try to navigate to onboarding, which is protected by RequiredSetupGate.
      navigate('/onboarding');

    } catch (error: any) {
      console.error('Error during signup:', error);
      toast.error(`Failed to sign up: ${error?.message || 'Unknown error'}`);
      setSignupError(error?.message || 'Unknown error occurred during signup');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      await signInWithGoogle();
      // No need for success toast here as the page will redirect
    } catch (error: any) {
      console.error('Google sign-in error:', error);
      toast.error(`Google sign-in failed: ${error?.message || 'Unknown error'}`);
      setGoogleLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/lovable-uploads/2fca69a3-fd1f-4833-bb84-fd7f5764059f.png')`,
      }}
    >
      <div className="mb-6">
        <img
          src="/lovable-uploads/798d07d7-1db7-498c-92f3-6f6346827d59.png"
          alt="Gonzo Systems"
          className="h-16 md:h-20 object-contain"
        />
      </div>
      <Card className="w-full max-w-md border-primary/10 shadow-lg bg-white/90">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-primary">Create Account</CardTitle>
          <CardDescription className="text-center">Sign up for a new account</CardDescription>
        </CardHeader>
        <CardContent>
          {signupError && (
            <Alert variant="destructive" className="mb-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{signupError}</AlertDescription>
            </Alert>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
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
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-500" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-500" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="border-input focus:border-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-start">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      variant="link"
                      className="text-sm text-primary p-0 h-auto"
                    >
                      <HelpCircle className="w-4 h-4 mr-1" />
                      Need Help?
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Need Help?</DialogTitle>
                      <DialogDescription>
                        If you need assistance with creating an account or have any other questions, please contact our support team.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <p>Registration guide:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Ensure your email is correct for account verification.</li>
                        <li>Your password must be at least 6 characters long.</li>
                        <li>Passwords must match exactly.</li>
                      </ul>
                      <div className="p-4 border rounded-md mt-4">
                        <h3 className="font-medium mb-2">Contact Support</h3>
                        <p className="text-sm mb-2 flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <a href="mailto:gonzabrands@gmail.com" className="text-primary hover:underline">
                            gonzabrands@gmail.com
                          </a>
                        </p>
                        <p className="text-sm flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          <a href="tel:+256758519696" className="text-primary hover:underline">
                            +256 758519696
                          </a>
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
                {loading ? 'Creating account...' : 'Create Account'}
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
            disabled={googleLoading}
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
            {googleLoading ? 'Connecting...' : 'Sign in with Google'}
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full border-primary/20 hover:bg-primary/5 mt-4"
            onClick={() => navigate('/login')}
          >
            Already have an account? Sign In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
