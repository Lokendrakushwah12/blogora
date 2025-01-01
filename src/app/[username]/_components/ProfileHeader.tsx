"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

const ProfileHeader = () => {
  const { username } = useParams();
  const email = username + "@gmail.com";
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-xl font-bold">{username}</h1>
          <p className="text-muted-foreground">{email}</p>
        </div>
        <Image
          src="/favicon.svg"
          alt=""
          width={80}
          height={80}
          className="rounded-full bg-muted-foreground"
        />
      </div>
      <p className="mt-4 text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </p>
    </>
  );
};

export default ProfileHeader;
