"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const links = [
    {
      id: "1",
      title: "Home",
      url: "/",
    },
    {
      id: "2",
      title: "About",
      url: "/about",
    },
    {
      id: "3",
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: "4",
      title: "Blog",
      url: "/blog",
    },
    {
      id: "5",
      title: "Contact",
      url: "/contact",
    },
    {
      id: "6",
      title: "Dashbord",
      url: "/dashbord",
    },
  ];

  const session = useSession();
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center md:py-0 py-5 bg-transparent font-mono relative px-5">
      <Link href="/" className="text-xl font-bold text-blue-300">
        DreamWeb
      </Link>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer absolute top-6 text-blue-500">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              open
                ? "M6 18L18 6M6 6l12 12"
                : "M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            }
          />
        </svg>
      </div>
      <div
        className={`flex flex-col md:flex-row items-center z-30 md:transition-none transition-all ease-in duration-700 right-1 w-full md:w-auto gap-7 bg-black bg-opacity-80 p-7 px-10 rounded-xl  md:rounded-b-full border-none md:border-b-4 md:border-solid border-blue-700 md:static absolute opacity-100 md:opacity-100 ${
          open ? "top-16 opacity-0" : "top-[-500px]"
        }`}>
        {links.map((link) => {
          return (
            <Link
              className="text-sm font-bold text-blue-700 hover:text-blue-500"
              key={link.id}
              href={link.url}>
              {link.title}
            </Link>
          );
        })}
      </div>
      {session.status === "authenticated" ? (
        <button
          onClick={signOut}
          className="text-md py-1 font-bold bg-blue-700 md:p-4 p-2 rounded-xl hover:bg-blue-900">
          Log Out
        </button>
      ) : (
        <Link href="/dashbord/login">
          <button className="text-md py-1 font-bold bg-blue-700 p-4 rounded-xl hover:bg-blue-900">
            Log In
          </button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
