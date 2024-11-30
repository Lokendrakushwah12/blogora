import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Pen } from "lucide-react";
import Link from "next/link";
import { Shell } from "../shell";
import { Button } from "../ui/button";
import { ThemeToggle } from "../layouts/theme-toggle";
const Footer = () => {
  const FOOTER_LINKS = [
    {
      title: "Quick links",
      links: [
        { name: "Community", href: "/community" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Social",
      links: [
        { name: "X", href: "/" },
        { name: "GitHub", href: "/" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];
  return (
    <footer className="w-full border-t bg-background">
      <Shell>
        <div className="footer relative flex w-full flex-col justify-between overflow-hidden md:flex-row">
          {/* logo */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <Pen className="h-4 w-auto" />
              <span className="text-base font-medium">myth-arc</span>
            </div>
            <p className="max-w mt-4 text-base">
              Shape Your Story, One Arc at a Time
            </p>
            <Link className="mt-10" href="/auth/join">
              <Button size="sm">Join now</Button>
            </Link>
          </div>
          {/* links */}
          <div className="mt-10 grid w-full max-w-sm grid-cols-2 gap-2 md:mt-0 lg:grid-cols-3">
            {FOOTER_LINKS?.map((section, index) => (
              <div key={index} className="flex w-full flex-col gap-4">
                <h4 className="text-base font-medium">{section.title}</h4>
                <ul className="w-full space-y-4">
                  {section.links.map((link, index) => (
                    <li
                      key={index}
                      className="w-full text-sm text-muted-foreground transition-all hover:text-foreground"
                    >
                      <Link href={link.href} className="w-full">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="w-full" />
        <div className="relative flex items-center justify-between">
          <p className="text-sm font-[400] text-muted-foreground">
            Built by&nbsp;
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://x.com/lokendratwt"
              className="font-[500] text-muted-foreground hover:text-secondary-foreground"
            >
              Lokendra.
            </Link>
          </p>
          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://github.com/lokendrakushwah12"
              className="p-1"
            >
              <GitHubLogoIcon className="h-5 w-5 text-muted-foreground hover:text-secondary-foreground" />
            </Link>
            <ThemeToggle />
            {/* <Link href="#" className="p-1">
              <TwitterLogoIcon className="h-5 w-5 text-muted-foreground hover:text-secondary-foreground" />
            </Link>
            <Link href="#" className="p-1">
              <DiscordLogoIcon className="h-5 w-5 text-muted-foreground hover:text-secondary-foreground" />
            </Link> */}
          </div>
        </div>
      </Shell>
    </footer>
  );
};

export default Footer;
