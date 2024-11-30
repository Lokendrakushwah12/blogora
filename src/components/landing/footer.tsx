import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Pen } from "lucide-react";
import Link from "next/link";
import { Shell } from "../shell";
import { Button } from "../ui/button";
const Footer = () => {
  const FOOTER_LINKS = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Integrations", href: "/integrations" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Help Center", href: "/help" },
        { name: "Documentation", href: "/docs" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Security", href: "/security" },
        { name: "Extra", href: "/security" },
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
              <Pen className="h-5 w-5" />
              <span className="text-xl font-medium">Blogora</span>
            </div>
            <p className="max-w mt-4 text-base">
              Build the Blog You&apos;ve Always Wanted.
            </p>
            <Link className="mt-10" href="/write">
              <Button size="sm">Start Writing</Button>
            </Link>
          </div>
          {/* links */}
          <div className="mt-10 grid w-full max-w-lg grid-cols-2 gap-8 md:mt-0 lg:grid-cols-4">
            {FOOTER_LINKS?.map((section, index) => (
              <div key={index} className="flex flex-col gap-4">
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
