"use client";
import UserAvatar from "@/components/UserAvatar";
import pb from "@/services/pocketbase";
import React, { useEffect, useState } from "react";
type User = {
  username: string;
  email: string;
  avatar: string;
};

export default function ProfilePage() {
  const [user, setUser] = useState<User>(null!);
  async function getUser() {
    const record = await pb
      .collection("users")
      .getOne(pb!.authStore!.model!.id);
    const user: User = {
      username: record.username,
      email: record.email,
      avatar: record.avatar,
    };
    setUser(user);
    console.log(record);
  }
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center border-2 bg-violet-800 text-white p-10">
      <UserAvatar />
      <br />
      <div>Username: {user?.username}</div>
      <div>Email: {user?.email}</div>
    </div>
  );
}
