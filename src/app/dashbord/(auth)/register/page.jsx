"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      res.status === 201 &&
        router.push("/dashbord/login?success=Account has been created");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="flex justify-center items-center h-full p-5 w-full font-mono">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-8 md:p-10 p-2 backdrop-blur-md border-2 rounded-xl border-solid border-blue-700">
        <h1 className="text-4xl font-bold text-blue-700 text-center drop-shadow-5xl">
          Register
        </h1>
        <input
          type="text"
          placeholder="Username"
          required
          className="border rounded-xl border-1 border-blue-600 p-2 bg-transparent text-sm outline-none w-[300px]"
        />
        <input
          className="border rounded-xl border-1 border-blue-600 p-2 bg-transparent text-sm outline-none w-[300px]"
          type="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="border rounded-xl border-1 border-blue-600 p-2 bg-transparent text-sm outline-none w-[300px]"
        />
        {err && "something wrong!"}
        <button className="w-[300px] p-3 font-bold drop-shadow-5xl hover:bg-blue-800 text-xl bg-blue-700 rounded-md">
          Register
        </button>
        <Link
          href="/dashbord/login"
          className="text-xs text-blue-800 underline hover:text-blue-900">
          Already has an account
        </Link>
      </form>
    </div>
  );
};

export default Register;
