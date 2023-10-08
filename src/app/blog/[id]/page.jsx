import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const Post = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className="md:p-10 p-2 flex flex-col gap-10 font-mono">
      <div className="flex md:flex-row flex-col gap-10">
        <div className="flex flex-1 flex-col justify-center items-start gap-5">
          <div className="text-blue-500 font-bold md:text-3xl text-xl">
            {data.title}
          </div>
          <div className="text-blue-500 text-xs md:text-sm">{data.desc}</div>
          <div className="flex gap-3 items-center">
            <div className="relative w-[50px] h-[50px] border-2 rounded-full border-blue-200">
              <Image
                src="/item1.png"
                className="rounded-full"
                fill={true}
                alt=""
              />
            </div>
            <div className="text-xl font-bold text-blue-400">
              {data.username}
            </div>
          </div>
        </div>
        <div className="md:w-[400px] md:h-[300px] w-[300px] h-[200px] relative drop-shadow-5xl">
          <Image className="rounded-xl" fill={true} src={data.img} alt="" />
        </div>
      </div>
      <p className="text-justify text-blue-500 text-xs md:text-sm">
        {data.content}
      </p>
    </div>
  );
};

export default Post;
