import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen border-2">
      <h1 className="scroll-m-20 text-9xl mb-10">12</h1>
      <div className="flex flex-col w-full gap-3 py-3 px-6">
        <Button>Sign In</Button>
        <Button variant="outline">Sign Up</Button>
      </div>
    </div>
  );
}
