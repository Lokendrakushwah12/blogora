"use client";

import { useUpdatePassword } from "@/api/userPasswordUpdateApi";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Spinner from "@/components/ui/spinner";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const PasswordCard = () => {
  const [isOldPasswordVisible, setIsOldPasswordVisible] =
    useState<boolean>(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] =
    useState<boolean>(false);
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");

  const toggleOldPasswordVisibility = () =>
    setIsOldPasswordVisible((prev) => !prev);
  const toggleNewPasswordVisibility = () =>
    setIsNewPasswordVisible((prev) => !prev);

  const { updatePassword } = useUpdatePassword();

  const mutation = useMutation({
    mutationFn: updatePassword,
    onSuccess() {
      toast.success("Password updated successfully! 🎉");
    },
  });
  const { status, error } = mutation;

  const handleSavePassword = () => {
    mutation.mutate({ oldPassword, newPassword });
  };

  return (
    <Card className="flex flex-col items-center justify-start">
      <div className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>
            Change your password here. After saving, you&apos;ll be logged out.
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full space-y-2">
          {/* Old Password Field */}
          <div className="flex flex-col items-start space-y-2 pt-1">
            <Label htmlFor="old-password">Current Password</Label>
            <div className="relative w-full">
              <Input
                id="old-password"
                className="pe-9"
                placeholder="Current password"
                type={isOldPasswordVisible ? "text" : "password"}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <button
                className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
                type="button"
                onClick={toggleOldPasswordVisibility}
                aria-label={
                  isOldPasswordVisible ? "Hide password" : "Show password"
                }
                aria-pressed={isOldPasswordVisible}
                aria-controls="old-password"
              >
                {isOldPasswordVisible ? (
                  <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
                ) : (
                  <Eye size={16} strokeWidth={2} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* New Password Field */}
          <div className="flex flex-col items-start space-y-2 pt-1">
            <Label htmlFor="new-password">New Password</Label>
            <div className="relative w-full">
              <Input
                id="new-password"
                className="pe-9"
                placeholder="New password"
                type={isNewPasswordVisible ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
                type="button"
                onClick={toggleNewPasswordVisibility}
                aria-label={
                  isNewPasswordVisible ? "Hide password" : "Show password"
                }
                aria-pressed={isNewPasswordVisible}
                aria-controls="new-password"
              >
                {isNewPasswordVisible ? (
                  <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
                ) : (
                  <Eye size={16} strokeWidth={2} aria-hidden="true" />
                )}
              </button>
            </div>
            {status === "error" && (
              <p className="text-sm text-red-500">
                {error instanceof Error ? error.message : "Sign-up failed."}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleSavePassword}
            disabled={!oldPassword || !newPassword || status === "pending"}
          >
            {status === "pending" ? (
              <>
                Updating Password
                <Spinner />
              </>
            ) : (
              "Update Password"
            )}
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default PasswordCard;
