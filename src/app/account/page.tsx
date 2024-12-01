"use client";
import { NavigationMenu } from "./_components/NavigationMenu";

const Page = () => {
  return (
    <section className="container flex w-full flex-col items-center gap-2 text-center text-foreground">
      <NavigationMenu />
    </section>
  );
};

export default Page;
