"use client";
import React from "react";
import Image from "next/image";
import pb from "@/services/pocketbase";
import { useState } from "react";

export default function UserAvatar() {
  const [avatar, setAvatar] = useState<string>("@/public/user-icon.svg");
  async function getAvatar() {
    console.log(pb.authStore.model);
  }
  return (
    <img
      className="border-2 text-white rounded-full flex justify-center items-center h-10 w-10"
      src={`http://localhost:8090/api/files/_pb_users_auth_/${pb.authStore.model.id}/${pb.authStore.model.avatar}`}
      alt=""
    />
    // <Image
    //   src=
    //   width="100"
    //   height="100"
    //   alt=""
    //   className="border-2 text-white rounded-full flex justify-center items-center"
    // />
  );
}
