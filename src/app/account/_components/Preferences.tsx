"use client";
import { useTheme } from "next-themes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect } from "react";

const Preferences = () => {
  const { theme, setTheme } = useTheme();

  const items = [
    { id: "radio-11-r1", value: "light", label: "Light", Icon: Sun },
    { id: "radio-11-r2", value: "dark", label: "Dark", Icon: Moon },
    // { id: "radio-11-r3", value: "system", label: "System", Icon: Monitor },
  ];

  useEffect(() => {
    if (theme === "system") {
      const isSystemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setTheme(isSystemDark ? "dark" : "light");
    }
  }, [theme, setTheme]);

  const handleThemeChange = (value: string) => {
    setTheme(value);
  };

  return (
    <Card className="flex flex-col items-center justify-start">
      <div className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>Update your preferences here.</CardDescription>
        </CardHeader>
        <CardContent className="w-full space-y-2">
          <div className="place-items-start space-y-1">
            <Label htmlFor="theme">Theme</Label>

            <RadioGroup
              className="flex w-full flex-col"
              value={theme || "light"}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  className="relative flex cursor-pointer justify-between rounded-lg border border-input p-4 shadow-sm shadow-black/5"
                  onClick={() => handleThemeChange(item.value)}
                >
                  <div className="flex items-center justify-between gap-2">
                    <item.Icon
                      className="opacity-60"
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>
                  <Label htmlFor={item.id} className="cursor-pointer">
                    {item.label}
                  </Label>
                  <RadioGroupItem id={item.id} value={item.value} />
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default Preferences;
