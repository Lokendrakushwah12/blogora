"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Pen } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useSignIn } from "@/api/authApi";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import Spinner from "@/components/ui/spinner";
import { useRouter } from "next/navigation";

const Login = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signIn } = useSignIn();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      toast.success("Successfully logged in! 🎉");
      router.push("/");
    },
    // onError: (err) => {
    // const errorMessage =
    //   err instanceof Error ? err.message : "Login failed, please try again.";
    // toast.error(errorMessage);
    // },
  });

  const { status, error } = mutation;

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const handleSubmit = async () => {
    if (!email || !password) {
      toast.error("Please fill in both fields.");
      return;
    }

    mutation.mutate({ email, password });
  };

  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-sm flex-col items-center justify-center gap-12 text-center text-foreground">
        <Link rel="noreferrer" href="/">
          <div className="flex items-center gap-2">
            <Pen className="h-5 w-5" />
            <span className="text-xl font-medium">myth-arc</span>
          </div>
        </Link>

        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex w-full flex-col items-start justify-start space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex w-full flex-col items-start justify-start space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative w-full">
              <Input
                id="password"
                className="pe-9"
                placeholder="Password"
                type={isVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                type="button"
                onClick={toggleVisibility}
                aria-label={isVisible ? "Hide password" : "Show password"}
                aria-pressed={isVisible}
                aria-controls="password"
              >
                {isVisible ? (
                  <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
                ) : (
                  <Eye size={16} strokeWidth={2} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
          <Button
            className="w-full"
            size="sm"
            onClick={handleSubmit}
            disabled={status === "pending"}
          >
            {status === "pending" ? (
              <>
                <Spinner />
              </>
            ) : (
              "Log in"
            )}
          </Button>

          <Link href="/auth/forgot-password">
            <p className="cursor-pointer text-sm text-muted-foreground hover:text-foreground hover:underline">
              Forgot password?
            </p>
          </Link>
          {status === "error" && (
            <p className="text-sm text-red-500">
              {error instanceof Error ? error.message : "Sign-up failed."}
            </p>
          )}
        </div>

        <hr className="w-full" />

        <div className="flex w-full items-center justify-center space-x-4 py-4">
          <div className="text-sm text-muted-foreground">
            New to myth-arc?&nbsp;
            <Link
              className="hover:text-foreground hover:underline"
              href="/auth/join"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
