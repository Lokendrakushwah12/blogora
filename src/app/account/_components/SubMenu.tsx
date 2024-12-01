import { TabsTrigger } from "@/components/ui/tabs";
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
  return (
    <div className="flex flex-col items-start justify-start">
      <p className="text-sm font-medium text-muted-foreground">{settingType}</p>
      {data.map((setting) => (
        <TabsTrigger
          key={setting.id}
          value={setting.value}
          className="flex items-center gap-2"
        >
          {setting.icon}
          <span className="text-sm">{setting.label}</span>
        </TabsTrigger>
      ))}
    </div>
  );
};

export default SubMenu;
