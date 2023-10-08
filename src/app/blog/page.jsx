import React from "react";
import Image from "next/image";
import Button from "@/components/button/Button";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className="md:p-10 p-2 font-mono">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col md:flex-row p-2 items-center justify-between gap-10 mb-10 w-full bg-black bg-opacity-80 rounded-xl">
            <div className="md:w-[400px] md:h-[300px] w-[300px] h-[300px]  relative drop-shadow-5xl">
              <Image src={item.img} alt="" fill={true} className="rounded-xl" />
            </div>
            <div className="flex flex-1 flex-col justify-center items-start gap-5">
              <div className="text-blue-700 font-bold md:text-2xl text-xl">
                {item.title}
              </div>
              <div className="text-blue-500 text-xs md:text-sm line-clamp-4">
                {item.desc}
              </div>
              <Button title="learn more" url={`/blog/${item._id}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
