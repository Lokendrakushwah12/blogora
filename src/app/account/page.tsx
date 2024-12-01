"use client";
import { useAuth } from "@/context/authContext";
import { NavigationMenu } from "./_components/NavigationMenu";

const Page = () => {
  const { token } = useAuth();
  return (
    <section className="container flex w-full flex-col items-center gap-2 text-center text-foreground">
      <NavigationMenu />
    </section>
  );
};

export default Page;
