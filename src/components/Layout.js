import { Inconsolata } from "next/font/google";
import Navbar from "./Navbar";

export const font = Inconsolata({
  subsets: ["latin"],
  display: "swap",
});

export default function Layout({ children }) {
  return (
    <div
      className={`relative flex justify-center bg-[#fbe4d8] ${font.className}`}
    >
      <Navbar />
      <main className="overflow-y-auto h-screen w-full bg-gradient-to-r from-[#DFD3C3] to-[#F8EDE3] background-animate">
        {children}
      </main>
    </div>
  );
}
