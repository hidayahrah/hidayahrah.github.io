import Link from "next/link";

export default function Navbar({ className = "" }) {
  const paths = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Play",
      link: "/play",
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
      className={`flex flex-row gap-4 mt-8 py-1 md:py-2 px-2 md:px-4 w-fit z-50 fixed backdrop-blur-xl bg-primary-100/30 rounded-full border border-primary-100/30 ${className}`}
    >
      {paths.map(({ name, link }, i) => (
        <Link
          key={i}
          className="py-1 md:py-2 px-2 md:px-4 font-light text-md text-white hover:bg-primary-200/70 hover:rounded-full"
          href={link}
        >
          {name}
        </Link>
      ))}
    </div>
  );
}
