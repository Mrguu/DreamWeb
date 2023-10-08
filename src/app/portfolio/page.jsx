import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <div className=" font-mono w-full h-full">
      <h1 className="md:text-5xl text-2xl font-bold text-center p-5 text-blue-600 drop-shadow-5xl">
        Our Work
      </h1>
      <div className="flex flex-wrap md:p-10 p-2 items-center justify-center gap-20">
        <Link
          href="/portfolio/ecommerce"
          className="w-60 h-auto md:p-3 p-0 cursor-pointer hover:scale-105 duration-500 ">
          <div className="bg-[url('/work1.jpg')] bg-cover bg-center w-60 h-72 drop-shadow-5xl mb-3"></div>
          <h1 className="text-blue-600 font-bold text-center">
            E-commerce Website Development
          </h1>
        </Link>
        <Link
          href="/portfolio/corporate"
          className="w-60 h-auto md:p-3 p-0 cursor-pointer hover:scale-105 duration-500 ">
          <div className="bg-[url('/work2.jpg')] bg-cover bg-center w-60 h-72 drop-shadow-5xl mb-3"></div>
          <h1 className="text-blue-600 font-bold text-center">
            Corporate Website Development
          </h1>
        </Link>
        <Link
          href="/portfolio/customweb"
          className="w-60 h-auto md:p-3 p-0 cursor-pointer hover:scale-105 duration-500 ">
          <div className="bg-[url('/work3.jpg')] bg-cover bg-center w-60 h-72 drop-shadow-5xl mb-3"></div>
          <h1 className="text-blue-600 font-bold text-center">
            Custom Web Application Development
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;

//
