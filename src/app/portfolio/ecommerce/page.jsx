"use client";
import Image from "next/image";
import React, { useState } from "react";

const Ecommerce = () => {
  const projects = [
    {
      title: "",
      src: "https://cdn.dribbble.com/users/2443329/screenshots/18176728/media/822d242dbb97c7a8f621c1a9a4f19127.jpg?resize=1200x1000&vertical=center",
    },
    {
      title: "",
      src: "https://cdn.dribbble.com/users/2012607/screenshots/6055307/nike_ecommerce_site_4x.png?resize=1200x1000&vertical=center",
    },
    {
      title: "",
      src: "https://cdn.dribbble.com/users/2460951/screenshots/7146792/media/4121f936a03d9f0316fa3f85b955ecaa.jpg?resize=1200x1000&vertical=center",
    },
    {
      title: "",
      src: "https://cdn.dribbble.com/users/4458653/screenshots/18115899/media/6c40c06a3eda5779b8963f4ed4c975b2.png?resize=1200x1000&vertical=center",
    },
    {
      title: "",
      src: "https://cdn.dribbble.com/users/1726280/screenshots/10607776/media/64d3cae2e98e170922fdac9d0986b52a.jpg?resize=1200x1000&vertical=center",
    },
    {
      title: "",
      src: "https://cdn.dribbble.com/users/874761/screenshots/2483218/promotion_countdown.jpg?resize=1200x1000&vertical=center",
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
        E-commerce Website
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

export default Ecommerce;
