import Navbar from "@/components/landing/navbar";
import { Tabs, TabsList } from "@/components/ui/tabs";
import React from "react";
import { LockIcon, Settings } from "lucide-react";
import { AvatarIcon } from "@radix-ui/react-icons";
import SubMenu from "./_components/SubMenu";

interface Props {
  children: React.ReactNode;
}

const AccountLayout = ({ children }: Props) => {
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
      icon: <AvatarIcon width={16} height={16} />,
      label: "Edit profile",
      value: "/account/edit",
    },
  ];

  const appData = [
    {
      id: 1,
      icon: <Settings className="w-4" />,
      label: "Preferences",
      value: "/account/preferences",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="relative z-40 container mx-auto flex w-full">
        <Tabs>
          <TabsList className="flex h-full w-fit flex-col gap-12 pt-5">
            <SubMenu settingType="User Settings" data={userSettingsData} />
            <SubMenu settingType="App" data={appData} />
          </TabsList>
        </Tabs>
        <div className="flex-1">{children}</div>
      </main>
    </>
  );
};

export default AccountLayout;
