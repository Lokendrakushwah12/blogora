import { ThemeToggle } from "@/components/layouts/theme-toggle";
import Hero from "./_components/Hero";

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <Hero />
      <ThemeToggle />
    </main>
  );
};

export default HomePage;
