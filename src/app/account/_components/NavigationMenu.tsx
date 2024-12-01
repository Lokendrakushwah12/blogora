import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { AvatarIcon } from "@radix-ui/react-icons";
import { LockIcon, Settings } from "lucide-react";
import AccountCard from "./AccountCard";
import EditProfile from "./EditProfile";
import PasswordCard from "./PasswordCard";
import Preferences from "./Preferences";
import SubMenu from "./SubMenu";

export function NavigationMenu() {
  const userSettingsData = [
    {
      id: 1,
      icon: <Settings className="w-4" />,
      label: "Account",
      value: "account",
    },
    {
      id: 2,
      icon: <LockIcon className="w-4" />,
      label: "Password",
      value: "password",
    },
    {
      id: 3,
      icon: <AvatarIcon width={16} height={16} />,
      label: "Edit profile",
      value: "edit",
    },
  ];
  const appData = [
    {
      id: 1,
      icon: <Settings className="w-4" />,
      label: "Preferences",
      value: "preferences",
    },
  ];
  return (
    <Tabs defaultValue="account" className="-mt-2 flex w-full">
      <TabsList className="flex h-full w-fit flex-col gap-12 pt-7">
        <SubMenu settingType="User Settings" data={userSettingsData} />
        <SubMenu settingType="App" data={appData} />
      </TabsList>
      <TabsContent value="account" className="w-full">
        <AccountCard />
      </TabsContent>
      <TabsContent value="password" className="w-full">
        <PasswordCard />
      </TabsContent>
      <TabsContent value="edit" className="w-full">
        <EditProfile />
      </TabsContent>
      <TabsContent value="preferences" className="w-full">
        <Preferences />
      </TabsContent>
    </Tabs>
  );
}
