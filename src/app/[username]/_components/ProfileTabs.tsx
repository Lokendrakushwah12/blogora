"use client";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { ReaderIcon } from "@radix-ui/react-icons";
import { Bookmark, Heart } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function ProfileTabs() {
  const { username } = useParams();
  const usernameString = Array.isArray(username)
    ? username.join("")
    : username || "";
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { label: "Stories", icon: <ReaderIcon className="" /> },
    { label: "Likes", icon: <Heart size={18} /> },
    { label: "Bookmarks", icon: <Bookmark size={18} /> },
  ];

  const getCurrentTab = useCallback(() => {
    if (pathname.endsWith("/likes")) return "Likes";
    if (pathname.endsWith("/bookmarks")) return "Bookmarks";
    return "Stories";
  }, [pathname]);

  const [activeTab, setActiveTab] = useState(getCurrentTab());

  useEffect(() => {
    setActiveTab(getCurrentTab());
  }, [getCurrentTab]);

  const handleTabChange = (newActiveId: string | null) => {
    if (!newActiveId) return;
    let route = `/${usernameString}`;
    if (newActiveId === "Likes") route += "/likes";
    if (newActiveId === "Bookmarks") route += "/bookmarks";
    router.push(route);
  };

  return (
    <div className="mt-6 flex w-full border-b">
      <AnimatedBackground
        defaultValue={activeTab}
        className="border-b-2 border-foreground"
        transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 1000,
          damping: 90,
          mass: 3,
        }}
        onValueChange={handleTabChange}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            type="button"
            data-id={tab.label}
            aria-label={`${tab.label} view`}
            className={`flex w-full items-center justify-center py-2 transition-all hover:text-foreground ${
              activeTab === tab.label
                ? "text-foreground"
                : "text-muted-foreground"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              {tab.icon}
              {tab.label}
            </div>
          </button>
        ))}
      </AnimatedBackground>
    </div>
  );
}
