"use client";

import { cn } from "@/lib/utils";
import { ReaderIcon } from "@radix-ui/react-icons";
import { ChevronDown, ChevronUp, Menu, Pen, PenBox, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const MENU_ITEMS = [
    { name: "Community", href: "/stories" },
    {
      name: "Features",
      href: "/features",
      subItems: [
        {
          name: "Feature 1",
          href: "/features/feature1",
          description: "Description of Feature 1",
        },
        {
          name: "Feature 2",
          href: "/features/feature2",
          description: "Description of Feature 2",
        },
        {
          name: "Feature 3",
          href: "/features/feature3",
          description: "Description of Feature 3",
        },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleSubMenu = (name: string) => {
    setOpenSubMenu((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="relative h-full w-full">
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transform border-b bg-background/90 backdrop-blur-lg",
          isOpen ? "h-[calc(100%-24px)]" : "h-16",
        )}
      >
        <div className="container flex h-16 w-full items-center justify-center">
          <div className="sticky inset-x-0 flex w-full items-center justify-between">
            <div className="flex items-center gap-6 lg:flex-none">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold text-foreground"
              >
                <Pen className="h-4 w-auto" />
                <span className="text-base font-medium">myth-arc</span>
              </Link>
              <div className="ml-4 hidden items-center lg:flex">
                <NavigationMenu>
                  <NavigationMenuList>
                    {MENU_ITEMS.map((item) => (
                      <NavigationMenuItem key={item.name}>
                        {item.subItems ? (
                          <NavigationMenuTrigger className="h-auto font-medium text-muted-foreground transition-all hover:text-foreground">
                            {item.name}
                          </NavigationMenuTrigger>
                        ) : (
                          <Link
                            href={item.href}
                            className="mx-2 h-auto bg-transparent text-sm font-medium text-muted-foreground transition-all hover:text-foreground"
                          >
                            {item.name}
                          </Link>
                        )}
                        {item.subItems && (
                          <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                              {item.subItems.map((subItem) => (
                                <li className="row-span-3" key={subItem.name}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={subItem.href}
                                      className="flex size-full select-none flex-col justify-end rounded-md bg-muted/20 p-6 no-underline outline-none transition-all hover:bg-muted/50 focus:shadow-md"
                                    >
                                      <div className="flex flex-col">
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                          {subItem.name}
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                          {subItem.description}
                                        </p>
                                      </div>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 py-4">
            <Link href="/auth/login">
              <Button variant="outline" size="sm" className="text-foreground">
                <span className="hidden sm:block">Log in</span>
                <span className="block sm:hidden">
                  <ReaderIcon />
                </span>
              </Button>
            </Link>
            <Link href="/auth/join">
              <Button size="sm">
                <span className="hidden sm:block">Join now</span>
                <span className="block sm:hidden">
                  <PenBox />
                </span>
              </Button>
            </Link>
            <Button
              className="lg:hidden"
              size="sm"
              variant="secondary"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? (
                <XIcon className="h-5 w-5 duration-300" />
              ) : (
                <Menu className="h-5 w-5 duration-300" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-[199] border-t bg-background/90 p-4 backdrop-blur-lg lg:hidden">
          <div className="flex flex-col items-start gap-4">
            {MENU_ITEMS.map((item) => (
              <div className="flex w-full flex-col gap-4" key={item.name}>
                {/* Accordion for sub-items */}
                {!item.subItems ? (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-foreground transition-all hover:text-primary hover:underline"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="link"
                      className="flex w-full items-center justify-between p-0 text-sm text-foreground"
                      onClick={() => toggleSubMenu(item.name)}
                    >
                      <span>{item.name}</span>
                      {openSubMenu === item.name ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Button>

                    {/* Show sub-items if the submenu is open */}
                    {openSubMenu === item.name && (
                      <div className="ml-4 flex w-[300px] flex-col gap-2">
                        {item.subItems.map((subItem) => (
                          <div
                            key={subItem.name}
                            className="flex w-full flex-col"
                          >
                            <Link
                              href={subItem.href}
                              className="text-sm text-muted-foreground hover:text-primary"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                <hr />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
