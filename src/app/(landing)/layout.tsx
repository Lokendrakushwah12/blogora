import Footer from "@/components/landing/footer";
import Navbar from "@/components/landing/navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: Props) => {
  return (
    <>
      <div
        id="home"
        className="mt-[63px absolute inset-0 h-full bg-[linear-gradient(to_right,rgba(119,119,119,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(119,119,119,0.1)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />
      <Navbar />
      <main className="relative z-40 mx-auto w-full">{children}</main>
      <Footer />
    </>
  );
};

export default LandingLayout;
