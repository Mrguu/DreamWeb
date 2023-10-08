import Link from "next/link";
import React from "react";

const Button = ({ title, url }) => {
  return (
    <Link href={url}>
      <button className="font-mono bg-blue-700 p-3 text-sm font-bold hover:bg-blue-500 rounded-md drop-shadow-5xl">
        {title}
      </button>
    </Link>
  );
};

export default Button;
