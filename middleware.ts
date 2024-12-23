import { useAuth } from "@/context/authContext";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { token } = useAuth();
  const { pathname } = req.nextUrl;

  const publicRoutes = [
    "/feed",
    "/auth/login",
    "/auth/join",
    "auth/forgot-password",
    "about",
    "contact",
  ];
  const privateRoutes = ["/account", "/profile"];

  if (privateRoutes.includes(pathname)) {
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/auth/login";
      return NextResponse.redirect(url);
    }
  }

  if (publicRoutes.includes(pathname)) {
    if (token && pathname.startsWith("/auth")) {
      const url = req.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/feed", "/auth/:path*", "/account", "/profile"],
};
