"use client";
import { useUserDetails } from "@/api/userDetailsApi";
import { useAuth } from "@/context/authContext";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProfileHeader = () => {
  const { username } = useParams();
  const usernameString = Array.isArray(username) ? username.join("") : username;
  const email = usernameString + "@gmail.com";
  const token = useAuth().token;
  const { data: user, isLoading } = useUserDetails(token);

  const [userData, setUserData] = useState({
    name: user?.name ?? "",
    email: user?.email ?? "",
    bio: user?.bio ?? "",
    profilePhoto: user?.profilePhoto ?? "/svg/Avatar.svg",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (user) {
      setUserData({
        name: user?.name ?? "",
        email: user?.email ?? "",
        bio: user?.bio ?? "",
        profilePhoto: user?.profilePhoto ?? "/svg/Avatar.svg",
      });
    }
  }, [user]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-xl font-bold">{username}</h1>
          <p className="text-muted-foreground">{email}</p>
        </div>
        <Image
          src={userData.profilePhoto}
          alt="Profile"
          width={80}
          height={80}
          className="w-20 cursor-pointer rounded-full"
          onClick={openModal}
        />
      </div>

      {isLoading ? (
        <div className="mt-4 flex flex-col gap-1">
          <div className="h-5 w-full animate-pulse rounded-md bg-muted" />
          <div className="h-5 w-1/2 animate-pulse rounded-md bg-muted" />
        </div>
      ) : userData.bio ? (
        <p className="mt-4 text-muted-foreground">{userData.bio}</p>
      ) : null}

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex select-none items-center justify-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 1000,
                damping: 90,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={userData.profilePhoto ?? "/svg/Avatar.svg"}
                alt="Profile"
                width={400}
                height={400}
                className="rounded-full"
              />
              <button
                className="absolute right-2 top-2 text-2xl font-bold text-white"
                onClick={closeModal}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileHeader;
