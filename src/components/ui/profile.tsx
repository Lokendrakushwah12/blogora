"use client";
import { useUserDetails } from "@/api/userDetailsApi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/authContext";
import { ReaderIcon } from "@radix-ui/react-icons";
import { Bookmark, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

export function Profile() {
  const { logout, token } = useAuth();
  const { data: user } = useUserDetails(token);

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="h-9 w-9 cursor-pointer rounded-full bg-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[299] w-44">
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer text-muted-foreground">
            <Image
              className="h-4 w-4 overflow-hidden rounded-full bg-foreground/50"
              src="/favicon.svg"
              alt=""
              width={15}
              height={15}
            />{" "}
            {user?.name || "Anonymous"}
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled
            className="cursor-pointer text-muted-foreground"
          >
            <ReaderIcon /> Stories
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled
            className="cursor-pointer text-muted-foreground"
          >
            <Heart /> Liked
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled
            className="cursor-pointer text-muted-foreground"
          >
            <Bookmark /> Bookmarks
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            href="/account"
            className="cursor-pointer text-muted-foreground/60"
          >
            Account
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/account"
            className="cursor-pointer text-muted-foreground/60"
          >
            Edit Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer text-muted-foreground/60"
          onClick={handleLogout}
        >
          Log out
        </DropdownMenuItem>
        {/* <DropdownMenuItem disabled>API</DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
