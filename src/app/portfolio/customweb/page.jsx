"use client";
import Image from "next/image";
import React, { useState } from "react";

const Custom = () => {
  const projects = [
    {
      title: "",
      src: "https://cdn.dribbble.com/users/969953/screenshots/6022882/media/92d165d05f2a21808f6bd3376624c131.png?resize=1200x1000&vertical=center",
    },
    {
      title: "",
      src: "https://cdn.dribbble.com/users/10972945/screenshots/17655398/media/427618fed2bdf94b4f7f68b5569861f6.png?resize=1200x1000&vertical=center",
    },
    {
      title: "",
      src: "https://cdn.dribbble.com/users/7768122/screenshots/15597830/media/28d1db118592717c5b83d6b2ff0cd97e.png?resize=1200x1000&vertical=center",
    },
    {
      title: "",
      src: "https://cdn.dribbble.com/userupload/8822260/file/original-e631ba93ba785cce173f999145ca875d.png?resize=1200x1000&vertical=center",
    },
    {
      title: "",
      src: "https://cdn.dribbble.com/users/2327513/screenshots/18036167/media/a4b59d208be1dfc8a9670988b7e707df.png?resize=1200x1000&vertical=center",
    },
    {
      title: "",
      src: "https://cdn.dribbble.com/users/13231799/screenshots/19476262/media/3bc52fe5e4819d3304740e78071e912f.png?resize=1200x1000&vertical=center",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const lastSlide = currentIndex === projects.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl mt-5 font-bold text-blue-500 drop-shadow-5xl">
        Custom Web Application
      </h1>
      <div className="md:max-w-[800px] md:h-[600px] max:w-[300px] h-[300px] w-full m-auto py-16 px-10 relative drop-shadow-4xl">
        <div
          style={{ backgroundImage: `url(${projects[currentIndex].src})` }}
          className="w-full h-full bg-center rounded-2xl  bg-cover duration-1000 ease-in-out"></div>
      </div>
      <div
        onClick={prevSlide}
        className="bg-blue-700 drop-shadow-4xl p-1 rounded-full  absolute md:top-[70%] top-[85%] left-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <div
        onClick={nextSlide}
        className="bg-blue-700 drop-shadow-4xl p-1 rounded-full  absolute md:top-[70%] top-[85%] right-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Custom;
