import Footer from "@/components/landing/footer";
import Navbar from "@/components/landing/navbar";
import ProfileHeader from "./_components/ProfileHeader";
import ProfileTabs from "./_components/ProfileTabs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="mx-auto min-h-screen max-w-3xl px-4 pt-8 sm:px-8">
        <ProfileHeader />
        <ProfileTabs />
        <div className="mt-6">{children}</div>
      </div>
      <Footer />
    </>
  );
}
