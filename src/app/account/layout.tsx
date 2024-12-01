import Navbar from "@/components/landing/navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const AccountLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="relative z-40 mx-auto w-full">{children}</main>
    </>
  );
};

export default AccountLayout;
