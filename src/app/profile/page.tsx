"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";

function page() {
  const { data } = useSession();
  console.log(data);
  if (!data) return <p>loading</p>;
  const { email, name, image }:any = data.user;
  if (!email) return <p>loading</p>;

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-purple-600"
      />
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-500 mb-4">{email}</p>
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 transition"
      >
        Logout
      </button>
    </div>
  );
}

export default page;
