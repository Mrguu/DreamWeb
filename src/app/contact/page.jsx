import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col-reverse md:flex-col justify-center items-center md:p-20 p-5 gap-10 bg-transparent font-mono">
      <div className=" relative flex justify-center items-center">
        <Image
          className="drop-shadow-5xl"
          src="/contact1.png"
          alt=""
          width={200}
          height={300}
        />
      </div>
      <div className="flex drop-shadow-5xl bg-black flex-1 flex-col gap-5 border border-1 border-blue-600 rounded-2xl md:p-10 p-4">
        <h3 className="text-xl font-bold text-blue-600">
          Look like you need some help!
        </h3>
        <h1 className="md:text-5xl text-3xl font-bold text-blue-600">
          Reach Out!
        </h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-md font-bold text-blue-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="eg:Jack Doe"
              required
              className="border rounded-xl border-1 border-blue-600 p-2 bg-transparent text-xs outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-md font-bold text-blue-600">
              Email
            </label>
            <input
              className="border rounded-xl border-1 border-blue-600 p-2 bg-transparent text-xs outline-none"
              type="text"
              name="email"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-md font-bold text-blue-600">
              Message
            </label>
            <textarea
              className="border rounded-xl border-1 border-blue-600 p-2 bg-transparent text-xs outline-none"
              name="message"
              cols="30"
              rows="10"
              placeholder="your messages ...."></textarea>
          </div>
          <Button title="Submit" url="#" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
