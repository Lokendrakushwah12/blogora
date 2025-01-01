"use client";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function ProfileTabs() {
  const { username } = useParams();
  const usernameString = Array.isArray(username)
    ? username.join("")
    : username || "";
  const router = useRouter();
  const pathname = usePathname();

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
    <div className="mt-6 flex w-full">
      <AnimatedBackground
        defaultValue={activeTab}
        className="flex w-full border-b-2"
        transition={{
          ease: "easeInOut",
          duration: 0.2,
        }}
        onValueChange={handleTabChange}
      >
        {["Stories", "Likes", "Bookmarks"].map((label, index) => (
          <button
            key={index}
            type="button"
            data-id={label}
            aria-label={`${label} view`}
            className={`w-full items-center justify-center py-2 text-center transition-all hover:text-foreground ${
              activeTab === label ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </AnimatedBackground>
    </div>
  );
}
