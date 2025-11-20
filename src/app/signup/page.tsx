"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";
// import bcrypt from "bcrypt"

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e: any) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    // In real app, call your API to save user to DB
    // const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Register user:", { name, email, password });

    setSuccess("Account created successfully!");
    setError("");

    setTimeout(() => {
      router.push("/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 text-center mb-4">{success}</p>
        )}

        <form className="space-y-4" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 space-y-3">
          <button
            onClick={() =>
              signIn("github", {
                callbackUrl: "/",
              })
            }
            className="w-full flex justify-center items-center gap-2 border py-2 rounded-xl hover:bg-gray-100 transition"
          >
            <FaGithub className="w-5 h-5" />
            Sign in with GitHub
          </button>

          <button
            onClick={() => signIn("google")}
            className="w-full flex justify-center items-center gap-2 border py-2 rounded-xl hover:bg-gray-100 transition"
          >
            <FaGoogle className="w-5 h-5" />
            Sign in with Google
          </button>
        </div>
        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
