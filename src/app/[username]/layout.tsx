import Image from "next/image";
import ProfileTabs from "./_components/ProfileTabs";
import Footer from "@/components/landing/footer";
import Navbar from "@/components/landing/navbar";
import ProfileHeader from "./_components/ProfileHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="mx-auto min-h-screen max-w-3xl pt-8">
        <ProfileHeader />
        <ProfileTabs />
        <div className="mt-6">{children}</div>
      </div>
      <Footer />
    </>
  );
}
