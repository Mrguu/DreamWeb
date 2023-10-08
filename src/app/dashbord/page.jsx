"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import useSWR from "swr";
import Image from "next/image";
import { DELETE } from "../api/posts/[id]/route";

const Dashbord = () => {
  const session = useSession();

  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?.username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashbord/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className="flex flex-col md:p-10 p-2 gap-10">
        <form
          className="flex flex-col gap-10 bg-slate-900  w-full h-full p-5 border-1 border-solid border-blue-700 rounded-2xl drop-shadow-4xl font-mono"
          onSubmit={handleSubmit}>
          <h1 className="text-3xl text-center font-bold text-blue-600">
            New Post
          </h1>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col md:w-1/2 w-full gap-10">
              <input
                type="text"
                placeholder="Title"
                className="border rounded-xl border-2 border-blue-600 p-4 bg-transparent text-xs outline-none"
              />
              <input
                type="text"
                placeholder="Description"
                className="border rounded-xl border-2 border-blue-600 p-4 bg-transparent text-xs outline-none"
              />
              <input
                type="text"
                placeholder="Image URL"
                className="border rounded-xl border-2 border-blue-600 p-4 bg-transparent text-xs outline-none"
              />
            </div>
            <textarea
              className="border rounded-xl border-2 md:w-1/2 w-full border-blue-600 p-4 bg-transparent text-xs outline-none"
              cols="30"
              rows="10"
              placeholder="Write your content"></textarea>
          </div>
          <button className="bg-blue-700 p-4 rounded-xl font-bold  hover:bg-blue-800 drop-shadow-4xl">
            Send
          </button>
        </form>
        <div className="flex flex-col">
          {isLoading
            ? "loading"
            : data?.map((post) => {
                return (
                  <div
                    key={post._id}
                    className="flex md:flex-row flex-col p-2 items-center justify-between gap-10 mb-10 w-full bg-black bg-opacity-80 rounded-xl">
                    <div className="md:w-[400px] md:h-[300px] w-[300px] h-[200px] relative drop-shadow-5xl">
                      <Image
                        src={post.img}
                        alt=""
                        fill={true}
                        className="rounded-xl"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center items-start gap-5">
                      <div className="text-blue-700 font-bold md:text-2xl text-xl">
                        {post.title}
                      </div>
                      <div className="text-blue-500 line-clamp-4 text-xs md:text-sm">
                        {post.desc}
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => handleDelete(post._id)}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-blue-700 absolute right-3 cursor-pointer hover:text-blue-100">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
};

export default Dashbord;
