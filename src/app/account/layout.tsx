"use client";
import Navbar from "@/components/landing/navbar";
import { Tabs, TabsList } from "@/components/ui/tabs";
import React from "react";
import { LockIcon, Settings } from "lucide-react";
import { AvatarIcon } from "@radix-ui/react-icons";
import SubMenu from "./_components/SubMenu";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const AccountLayout = ({ children }: Props) => {
  const pathname = usePathname();

  const userSettingsData = [
    {
      id: 1,
      icon: <Settings className="w-4" />,
      label: "Account",
      value: "/account",
    },
    {
      id: 2,
      icon: <LockIcon className="w-4" />,
      label: "Password",
      value: "/account/password",
    },
    {
      id: 3,
      icon: <AvatarIcon width={16} height={16} className="h-[24px]" />,
      label: "Edit profile",
      value: "/account/edit",
    },
    {
      id: 4,
      icon: <Settings className="w-4" />,
      label: "Preferences",
      value: "/account/preferences",
    },
  ];

  // const appData = [
  // {
  //   id: 1,
  //   icon: <Settings className="w-4" />,
  //   label: "Preferences",
  //   value: "/account/preferences",
  // },
  // ];

  return (
    <>
      <Navbar />
      <main className="overflow- relative z-40 flex w-full md:container">
        <Tabs
          value={pathname}
          className="absolute bottom-0 overflow-x-auto border-t md:static"
        >
          <TabsList className="flex h-full w-screen flex-row md:w-fit md:flex-col md:gap-12 md:pt-5">
            <SubMenu settingType="User Settings" data={userSettingsData} />
            {/* <SubMenu settingType="App" data={appData} /> */}
          </TabsList>
        </Tabs>
        <div className="mx-auto flex-1">{children}</div>
      </main>
    </>
  );
};

export default AccountLayout;
