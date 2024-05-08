"use client";
import React, { useState, FormEvent } from "react";
import pb from "@/services/pocketbase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
      router.push("/dashboard/profile");
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-center text-xl mb-4 font-bold">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
              className="border-2 border-gray-400 rounded-md p-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              required
              className="border-2 border-gray-400 rounded-md p-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          >
            Login
          </button>
        </form>
        <br />
        <Link className="ml-2 text-end" href="/register">
          Sign Up!
        </Link>
        {error && <div className="text-red-500 text-xs mt-2">{error}</div>}
      </div>
    </div>
  );
}
