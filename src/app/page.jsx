import Button from "@/components/button/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="gap-10 flex w-full h-screen py-5 md:py-10 justify-center items-center md:p-10 p-2 relative">
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center text-center gap-10">
        <div className="md:text-5xl text-3xl font-serif font-bold text-gradient bg-gradient-to-t from-blue-400 to-gray-700 bg-clip-text text-transparent">
          Transforming Dreams into Digital Realities
        </div>
        <div className="text-sm text-blue-400 font-mono">
          We specialize in turning your dream website into a tangible digital
          reality. Our web design team is dedicated to crafting online platforms
          that not only fulfill your wishes but exceed your expectations.
        </div>
        <Button title="Let's get started" url="/portfolio" />
      </div>
      <span className="drop-shadow-5xl absolute left-20 bottom-10 animate-floating sm:inline hidden">
        <Image src="/item1.png" alt="" width={100} height={100} />
      </span>
      <span className="drop-shadow-5xl absolute right-10 top-10 animate-floating sm:inline hidden">
        <Image src="/item2.png" alt="" width={100} height={100} />
      </span>
      <span className="drop-shadow-5xl absolute animate-moving durtion-1000 sm:inline hidden">
        <Image src="/item3.png" alt="" width={100} height={100} />
      </span>
    </main>
  );
}
