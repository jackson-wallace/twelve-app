"use client";

import { useState } from "react";

import { auth } from "@/firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/Icons";

/**
 * SignInForm component to facilitate user login.
 * This form collects the user's email and password and
 * communicates with Firebase for authentication.
 */
const SignInForm = () => {
  // State variables for loading indication, email and password
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Handle the form submission.
   *
   * @param {React.SyntheticEvent} event - The form submission event
   */
  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true); // Set loading state true before API call

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // If successful login
        const user = userCredential.user;
        console.log(user.uid);
        // Add more success handling logic here...
      })
      .catch((error) => {
        // Handle any login errors
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
      });
  };

  // Render the sign-in form
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
      </div>
      <div className="py-4">
        {/* Sign in button with loading spinner */}
        <Button className="w-full" disabled={isLoading}>
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Sign in
        </Button>
      </div>
    </form>
  );
};

// Export the SignInForm component for use in other files
export default SignInForm;
