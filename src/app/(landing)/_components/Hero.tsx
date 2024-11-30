"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/authContext";
import { GitHubLogoIcon, ReaderIcon } from "@radix-ui/react-icons";
import { PenBox } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const { token } = useAuth();
  return (
    <section className="container flex flex-col items-center gap-2 text-center text-foreground">
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Lokendrakushwah12/myth-arc"
      >
        <div
          className="inline-flex items-center gap-2 rounded-full border border-transparent bg-secondary px-3.5 py-1.5 text-sm font-normal text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-hidden="true"
        >
          <GitHubLogoIcon />
          Stars on GitHub
        </div>
      </Link>

      <h1 className="text-4xl font-semibold tracking-tighter md:text-6xl lg:leading-[1.1]">
        Shape Your Story, One Arc at a Time
      </h1>

      <p className="max-w-xl text-balance text-base text-muted-foreground sm:text-xl md:text-wrap">
        myth-arc is an open-source platform designed to help you create
        immersive, interactive stories.
      </p>

      <div className="flex w-full items-center justify-center space-x-4 py-4">
        <Link href={token ? "/feed" : "/auth/login"}>
          <Button variant="outline" size="lg" className="text-foreground">
            {token ? (
              <span className="flex items-center justify-center gap-2">
                Read <ReaderIcon />
              </span>
            ) : (
              <span>Log in</span>
            )}
          </Button>
        </Link>
        <Link href={token ? "/" : "/auth/join"}>
          <Button size="lg">
            {token ? (
              <span className="flex items-center justify-center gap-2">
                Write <PenBox />
              </span>
            ) : (
              <span>Join now</span>
            )}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
