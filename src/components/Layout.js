import { Inconsolata } from "next/font/google";
import Navbar from "./Navbar";

export const font = Inconsolata({
  subsets: ["latin"],
  display: "swap",
});

export default function Layout({ children }) {
  return (
    <div
      className={`relative flex justify-center bg-primary-500 ${font.className}`}
    >
      <Navbar />
      <main className="overflow-y-auto h-screen w-full mx-auto">
        {children}
      </main>
    </div>
  );
}
