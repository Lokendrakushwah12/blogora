"use client";
import { useUserDetails } from "@/api/userDetailsApi";
import { useAuth } from "@/context/authContext";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProfileHeader = () => {
  const { username } = useParams();
  const usernameString = Array.isArray(username) ? username.join("") : username;
  const email = usernameString + "@gmail.com";
  const token = useAuth().token;
  const { data: user } = useUserDetails(token);
  const [userData, setUserData] = useState({
    name: user?.name ?? "",
    email: user?.email ?? "",
    bio: user?.bio ?? "",
    profilePhoto: user?.profilePhoto ?? "",
  });

  useEffect(() => {
    if (user) {
      setUserData({
        name: user?.name ?? "",
        email: user?.email ?? "",
        bio: user?.bio ?? "",
        profilePhoto: user?.profilePhoto ?? "",
      });
    }
  }, [user]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-xl font-bold">{username}</h1>
          <p className="text-muted-foreground">{email}</p>
        </div>
        <Image
          src={"/svg/Avatar.svg"}
          alt=""
          width={80}
          height={80}
          className="rounded-full bg-muted-foreground"
        />
      </div>
      {userData.bio ? (
        <p className="mt-4 text-muted-foreground">{userData.bio}</p>
      ) : (
        <span className="flex flex-col gap-1">
          <div className="h-5 w-full animate-pulse rounded-md bg-muted" />
          <div className="h-5 w-1/2 animate-pulse rounded-md bg-muted" />
        </span>
      )}
    </div>
  );
};

export default ProfileHeader;
