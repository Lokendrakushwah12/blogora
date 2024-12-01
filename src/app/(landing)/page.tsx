"use client";
import ContentForm from "@/components/editor/content-form";
import { useAuth } from "@/context/authContext";
import Hero from "./_components/Hero";

const HomePage = () => {
  const { token } = useAuth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-24 text-white">
      {token ? <ContentForm /> : <Hero />}
    </main>
  );
};

export default HomePage;
