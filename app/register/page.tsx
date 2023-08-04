import SignUpForm from "@/components/auth/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>
        <div className="py-4">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
            Create an account
          </h1>
          <p className="text-md text-muted-foreground">
            Enter your info below to create your account
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
