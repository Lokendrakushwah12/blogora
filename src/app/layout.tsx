import { ThemeProvider } from "@/components/layouts/theme-provider";
import { AuthProvider } from "@/context/authContext";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Provider from "./_provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "myth-arc: Shape Your Story, One Arc at a Time",
  description:
    "myth-arc is an open-source platform designed to help you create immersive, interactive stories.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.variable,
        )}
      >
        <Provider>
          <AuthProvider>
            <ThemeProvider>
              <Toaster />
              {children}{" "}
            </ThemeProvider>
          </AuthProvider>
        </Provider>
      </body>
    </html>
  );
}
