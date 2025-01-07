import Footer from "@/components/landing/footer";
import Navbar from "@/components/landing/navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const FeedLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="relative z-40 mx-auto min-h-screen w-full">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default FeedLayout;
