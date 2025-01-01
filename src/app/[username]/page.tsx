"use client";
import { useParams, usePathname, useRouter } from "next/navigation";

export default function Page() {
  const { username } = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const email = username + "@gmail.com";

  const handleTabChange = (route: string) => {
    router.push(route);
  };

  return <>stories </>;
}
