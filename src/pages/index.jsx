import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [dark, setDark] = useState(false);
  return (
    <main className="bg-yellow-100 dark:bg-blue-900 h-screen w-screen flex flex-col mx-auto justify-center">
      <button
        onClick={() => {
          setDark(!dark);
          document.body.classList.toggle("dark");
        }}
      >
        {!dark ? "Dark" : "Light"}
      </button>
    </main>
  );
}
