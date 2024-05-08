"use client";
import pb from "@/services/pocketbase";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    async function logout() {
      router.push("/login");
      pb.authStore.clear();
    }
    logout();
  }, [router]);

  return (
    <div>
      <h1>Logout</h1>
    </div>
  );
}
