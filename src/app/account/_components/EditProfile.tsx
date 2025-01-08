"use client";
import { useUserDetails } from "@/api/userDetailsApi";
import { useUpdateDetails } from "@/api/userDetailsUpdateApi";
import ImageUpload from "@/components/image-upload";
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
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/context/authContext";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const EditProfile = () => {
  const { token } = useAuth();
  const { data: user } = useUserDetails(token);
  const { updateDetails } = useUpdateDetails();

  const [updatedUserData, setUpdatedUserData] = useState({
    name: "",
    email: "",
    bio: "",
    profilePhoto: "/svg/Avatar.svg",
  });

  useEffect(() => {
    if (user) {
      setUpdatedUserData({
        name: user?.name ?? "",
        email: user?.email ?? "",
        bio: user?.bio ?? "",
        profilePhoto: user?.profilePhoto ?? "/svg/Avatar.svg",
      });
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setUpdatedUserData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedUserData((prevState) => ({
          ...prevState,
          profilePhoto: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const mutation = useMutation({
    mutationFn: updateDetails,
    onSuccess() {
      toast.success("Profile updated successfully! 🎉");
    },
  });
  const { status, error } = mutation;
  const handleSaveChanges = async () => {
    try {
      mutation.mutate(updatedUserData);
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  return (
    <Card className="flex flex-col items-center justify-start">
      <div className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Edit profile</CardTitle>
          <CardDescription>
            Update your profile information here. Click save when you&apos;re
            done.
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full space-y-2">
          <div className="place-items-start space-y-1">
            <Label htmlFor="profilePhoto">Avatar</Label>
            <div className="flex items-center justify-center gap-8">
              <Image
                src={updatedUserData.profilePhoto ?? "/svg/Avatar.svg"}
                alt="Profile"
                width={80}
                height={80}
                className="mt-2 h-20 w-20 rounded-full"
              />
              <Input
                id="profilePhoto"
                type="file"
                onChange={handleFileChange}
                className="cursor-pointer"
              />
            </div>
            <ImageUpload/>
          </div>
          <div className="place-items-start space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Name"
              value={updatedUserData.name}
              onChange={handleChange}
            />
          </div>
          <div className="place-items-start space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Email"
              value={updatedUserData.email}
              onChange={handleChange}
            />
          </div>
          <div className="place-items-start space-y-1">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={updatedUserData.bio}
              onChange={handleChange}
              placeholder="Tell us a little about yourself"
            />
          </div>
          {status === "error" && (
            <p className="text-sm text-red-500">
              {error instanceof Error
                ? error.message
                : "Failed to update user details."}
            </p>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveChanges} disabled={status === "pending"}>
            {status === "pending" ? (
              <>
                Saving...
                <Spinner />
              </>
            ) : (
              "Save changes"
            )}
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default EditProfile;
