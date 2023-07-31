"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { app } from "@/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/Icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");

  const auth = getAuth(app);
  const router = useRouter;

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    if (password !== retypedPassword) {
      alert("Password fields do not match");
    } else {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in -> route to profile
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        })
        .finally(() => {
          setIsLoading(false);
          setEmail("");
          setPassword("");
          setRetypedPassword("");
        });
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-4">
        <div className="grid gap-2">
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
          <Label htmlFor="password">Re-type Password</Label>
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
        <Button className="w-full" disabled={isLoading}>
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Create account
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
