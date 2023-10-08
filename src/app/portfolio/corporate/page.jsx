"use client";
import Image from "next/image";
import React, { useState } from "react";

const Corporate = () => {
  const projects = [
    {
      title: "",
      src: "https://cdn.dribbble.com/users/1550571/screenshots/10444782/media/81b97390ac0bbe11e1928ab9fa783fbf.png?resize=1200x1000&vertical=center",
    },
    {
      title: "",
      src: "https://cdn.dribbble.com/users/155866/screenshots/2476330/velmont.jpg?resize=1200x1000&vertical=center",
    },
    {
      title: "",
      src: "https://cdn.dribbble.com/userupload/4242489/file/original-4acf9d11f1d08d97d6e35d66c9462d4a.png?resize=1200x1000&vertical=center",
    },
    {
      title: "",
      src: "https://cdn.dribbble.com/userupload/3781845/file/original-c4c4f7cdae109a43b275cd11dc4b7701.jpg?resize=1200x1000&vertical=center",
    },
    {
      title: "",
      src: "https://cdn.dribbble.com/users/1563697/screenshots/5671601/media/0b97beced805ab65385ba71ef22a9f69.jpg?resize=1200x1000&vertical=center",
    },
    {
      title: "",
      src: "https://cdn.dribbble.com/users/407288/screenshots/6291493/demo.png?resize=1200x1000&vertical=center",
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
        Corporate Website
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
          className="md:w-6 w-4 md:h-6 h-4 cursor-pointer">
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
          className="md:w-6 w-4 md:h-6 h-4 cursor-pointer">
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

export default Corporate;
