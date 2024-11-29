import { ThemeToggle } from "@/components/layouts/theme-toggle";

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <div className="w-full mx-auto px-8 flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-foreground text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </h1>
        <ThemeToggle />
      </div>
    </main>
  );
};

export default HomePage;
