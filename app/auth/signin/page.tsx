"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignInPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>
        <div className="py-4">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
            Sign in to your account
          </h1>
          <p className="text-md text-muted-foreground">
            Enter your info below to sign in
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </div>
        <div className="py-4">
          <Button className="w-full">Sign In</Button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
