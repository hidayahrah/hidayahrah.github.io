import Link from "next/link";

export default function Navbar({ className = "" }) {
  const paths = [
    {
      name: "Work",
      link: "/work",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Education",
      link: "/education",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div
      className={`flex flex-row gap-4 mt-8 py-1 md:py-2 px-2 md:px-4 w-fit fixed backdrop-blur-md bg-[#DFD3C3]/30 rounded-full ${className}`}
    >
      {paths.map(({ name, link }, i) => (
        <Link
          className="py-1 md:py-2 px-2 md:px-4 font-semibold text-md md:text-xl text-[#85586F] hover:bg-[#DFD3C3]/70 hover:rounded-full"
          href={link}
        >
          {name}
        </Link>
      ))}
    </div>
  );
}
