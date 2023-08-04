"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter(); // Get the router object

  return (
    <div className="flex flex-col items-center justify-center min-h-screen border-2">
      <h1 className="scroll-m-20 text-9xl mb-10">12</h1>
      <div className="flex flex-col w-full gap-3 py-3 px-6">
        <Button
          onClick={() => {
            router.push("/login");
          }}
        >
          Sign In
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            router.push("/register");
          }}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
