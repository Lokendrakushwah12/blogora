"use client";

import { useAuth } from "@/context/authContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const useAuthRedirect = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { token } = useAuth();

  useEffect(() => {
    if (typeof window !== "undefined" && token) {
      const authRoutes = ["/auth/login", "/auth/join"];
      if (authRoutes.includes(pathname)) {
        router.push("/");
      }
    }
  }, [pathname, token, router]);
};

export default useAuthRedirect;
