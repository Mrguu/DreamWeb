"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const session = useSession();

  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashbord");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };
  return (
    <div className="flex flex-col justify-center items-center h-full p-5 mt-4 w-full font-mono">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-8 md:p-10 p-2 backdrop-blur-md border-2 rounded-xl border-solid border-blue-700">
        <h1 className="text-4xl font-bold text-blue-700 text-center drop-shadow-5xl">
          Login
        </h1>
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
        <button className="w-[300px] p-3 font-bold drop-shadow-5xl hover:bg-blue-800 text-xl bg-blue-700 rounded-md">
          Login
        </button>
        <Link
          href="/dashbord/register"
          className="text-xs text-blue-800 underline hover:text-blue-900">
          Don't has an account!Register here
        </Link>
      </form>
      <span className="text-blue-600 m-4">OR</span>
      <button
        onClick={() => signIn("google")}
        className="bg-white text-black text-md  p-3 rounded-xl hover:bg-blue-100 flex gap-3 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 48 48">
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
        </svg>
        <p>Login with google</p>
      </button>
    </div>
  );
};

export default Login;
