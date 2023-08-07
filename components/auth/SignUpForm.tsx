"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { auth } from "@/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/Icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

/**
 * SignUpForm component to facilitate user registration.
 * This form collects the user's email and password, checks if the
 * re-typed password matches and then communicates with Firebase
 * to create a new user account.
 */
const SignUpForm = () => {
  // State variables for loading indication, email, password, and retyped password
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");

  // Hook for Next.js routing
  const router = useRouter();

  /**
   * Handle the form submission.
   *
   * @param {React.SyntheticEvent} event - The form submission event
   */
  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    // Ensure that passwords match before proceeding
    if (password !== retypedPassword) {
      alert("Password fields do not match");
      return; // Exit early if the passwords don't match
    }

    setIsLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Account created successfully
        const user = userCredential.user;
        console.log(user);
        // Route to user profile or another desired page...
      })
      .catch((error) => {
        // Handle any registration errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      })
      .finally(() => {
        // Reset the form and loading state
        setIsLoading(false);
        setEmail("");
        setPassword("");
        setRetypedPassword("");
      });
  };

  // Render the sign-up form
  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-4">
        <div className="grid gap-2">
          {/* Email input */}
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            autoComplete="off"
            disabled={isLoading}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          {/* Password input */}
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            disabled={isLoading}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          {/* Retyped password input */}
          <Label htmlFor="retypedpassword">Re-type Password</Label>
          <Input
            id="retypedpassword"
            type="password"
            disabled={isLoading}
            value={retypedPassword}
            onChange={(e) => setRetypedPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="py-4">
        {/* Create account button with potential loading spinner */}
        <Button className="w-full" disabled={isLoading}>
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Create account
        </Button>
      </div>
    </form>
  );
};

// Export the SignUpForm component for use in other files
export default SignUpForm;
