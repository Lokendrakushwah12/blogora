"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Pen } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Join = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-sm flex-col items-center justify-center gap-12 px-4 text-center text-foreground sm:px-0">
        <Link rel="noreferrer" href="/">
          <div className="flex items-center gap-2">
            <Pen className="h-5 w-5" />
            <span className="text-xl font-medium">Mytharc</span>
          </div>
        </Link>

        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex w-full flex-col items-start justify-start space-y-2">
            <Label htmlFor="input-01">Name</Label>
            <Input id="input-01" placeholder="Full Name" type="text" />
          </div>
          <div className="flex w-full flex-col items-start justify-start space-y-2">
            <Label htmlFor="input-01">Email</Label>
            <Input id="input-01" placeholder="Email" type="email" />
          </div>
          <div className="flex w-full flex-col items-start justify-start space-y-2">
            <Label htmlFor="input-23">Password</Label>
            <div className="relative w-full">
              <Input
                id="input-23"
                className="pe-9"
                placeholder="Password"
                type={isVisible ? "text" : "password"}
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
          <Button className="w-full" size="sm">
            Create account
          </Button>
          <div className="cursor-pointer text-sm text-muted-foreground">
            By joining you agree to the&nbsp;
            <Link
              href="/legal/terms"
              className="hover:text-foreground hover:underline"
            >
              Terms and Conditions
            </Link>
            &nbsp;and&nbsp;
            <Link
              href="/legal/privacy"
              className="hover:text-foreground hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex w-full items-center justify-center space-x-4 py-4">
          <div className="text-sm text-muted-foreground">
            Have an account?&nbsp;
            <Link
              className="hover:text-foreground hover:underline"
              href="/auth/login"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
