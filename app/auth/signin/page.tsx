import SignInForm from "@/components/auth/SignInForm";

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
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
