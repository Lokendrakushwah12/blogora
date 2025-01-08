"use client";
import { TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import React from "react";

interface data {
  id: number;
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface SubMenuProps {
  settingType: string;
  data: data[];
}

const SubMenu: React.FC<SubMenuProps> = ({ settingType, data }) => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };
  return (
    <div className="flex w-full flex-row items-start justify-start md:flex-col">
      <p className="hidden w-full text-sm font-medium text-muted-foreground md:block">
        {settingType}
      </p>
      {data.map((setting) => (
        <TabsTrigger
          key={setting.id}
          value={setting.value}
          className="flex w-full flex-col items-center justify-center gap-2 data-[state=active]:bg-muted/50 md:flex-row md:data-[state=active]:bg-muted/0"
          onClick={() => handleNavigation(setting.value)}
        >
          {setting.icon}
          <span className="text-sm">{setting.label}</span>
        </TabsTrigger>
      ))}
    </div>
  );
};

export default SubMenu;
