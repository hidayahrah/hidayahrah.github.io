import { Montez, Oregano } from "next/font/google";
import Image from "next/image";

export const font = Montez({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Home() {
  return (
    <>
      <div className="h-screen py-32 md:py-56 px-8 text-[#85586F] flex inset-0 flex-col text-center justify-center gap-4 items-center">
        <p className={`md:text-[60px] text-[40px] ${font.className}`}>
          Hello, I'm Hidayah. A Full Stack Engineer.
        </p>
        <p className="text-2xl pt-4">
          I love crafting digital excellence with full-stack prowess in
          JavaScript & Typescript for business innovation.
        </p>
      </div>
      <div className="h-screen">
        <div className="py-32 md:py-56 px-8 text-[#85586F] flex inset-0 flex-col text-center justify-center gap-4 items-center">
          {/* TODO: Portfolio */}
        </div>
      </div>
    </>
  );
}
