import Image from "next/image";
import { Inconsolata, Mr_Dafoe } from "next/font/google";
import { useEffect, useState } from "react";
import { profile } from "@/content/profile";
import Github from "@/components/icons/socials/Github";
import Linkedin from "@/components/icons/socials/linkedin";
import Gmail from "@/components/icons/socials/Gmail";

const marck = Mr_Dafoe({ weight: "400", subsets: ["latin"] });
const kleeOne = Inconsolata({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [dark, setDark] = useState(false);
  const [isOpenChat, setIsOpenChat] = useState(true);
  const [isLightMode, setIsLightMode] = useState(true);
  const [selectedExp, setSelectedExp] = useState(0);
  const [openExp, setOpenExp] = useState(false);

  const skillsets = () => {
    return profile.skills.map(({ src, alt }, i) => (
      <li key={i} className="p-1 md:p-4">
        <div className="w-24 h-24 md:w-28 md:h-28 flex items-center">
          <Image
            src={src}
            alt={alt}
            className="w-full h-auto rounded-lg drop-shadow-xl"
            priority
            width={0}
            height={0}
            sizes="100vh"
          />
        </div>
      </li>
    ));
  };

  useEffect(() => {
    if (!openExp) setTimeout(() => setOpenExp(true), 50);
    setTimeout(() => setIsOpenChat(dark ? false : true), 50);
  }, [selectedExp, dark]);

  return (
    <main
      className={`relative bg-[#F1EEDC] dark:bg-[#040D12] dark:text-white text-black overflow-auto min-h-screen min-w-screen flex flex-col mx-auto justify-start ${kleeOne.className}`}
    >
      <div className="fixed top-8 right-8 md:top-10 md:right-10 grid grid-flow-col items-center gap-4">
        <div
          className={`${!isLightMode && "invisible"} ${
            isOpenChat
              ? "animate-fade-left animate-duration-700"
              : "animate-fade-right animate-duration-500"
          } animate-once animate-ease-linear animate-normal relative hidden md:flex flex-row justify-between items-center w-full rounded-lg p-2 dark:bg-[#183D3D] bg-neutral-50`}
        >
          <span className="text-xs md:text-sm">
            {dark ? "This is cool!" : "Too bright?"}
          </span>
          <div className="h-3 w-3 rotate-45 rounded-sm absolute -right-1 dark:bg-[#183D3D] bg-neutral-50"></div>
        </div>
        <button
          className="w-auto h-8"
          onClick={() => {
            setDark(!dark);
            setTimeout(() => setIsLightMode(!!dark), 2000);
            document.body.classList.toggle("dark");
          }}
        >
          {!dark ? (
            <Image
              className="w-auto h-full"
              priority
              src="/img/emojis/sunglasses.png"
              alt="light mode"
              width={0}
              height={0}
              sizes="100vh"
            />
          ) : (
            <Image
              className="w-auto h-full"
              priority
              src="/img/emojis/heart-eyes.png"
              alt="dark mode"
              width={0}
              height={0}
              sizes="100vh"
            />
          )}
        </button>
      </div>

      {/* Hero section/Intro */}
      <Container className="flex flex-row gap-28 items-center justify-center">
        <div className="flex flex-col gap-12 my-28 w-full md:w-1/2 items-center text-center md:p-0 px-4">
          <p className="text-lg font-semibold">{profile.role}</p>
          <div className="flex flex-col gap-8">
            <p
              className={`animate-fade-left animate-once animate-delay-150 text-5xl md:text-7xl whitespace-pre-line font-bold ${marck.className}`}
            >
              {profile.name}
            </p>
            <p className="text-sm md:text-lg animate-fade-right animate-once animate-delay-150">
              {profile.pitch}
            </p>
          </div>
          <div className="animate-wiggle animate-infinite animate-duration-[2000ms] text-sm md:text-md flex flex-row justify-between">
            <a
              href="mailto:hidayahrah97@gmail.com"
              target="yes"
              className="bg-[#E5DDC5] dark:bg-[#183D3D] rounded-3xl p-6 outline dark:outline-none outline-[#E5DDC5]/20 dark:shadow-none shadow-md shadow-neutral-100"
            >
              Email me
            </a>
          </div>
        </div>
      </Container>

      {/* Body of work */}
      <Container className="bg-[#F1F8E8] dark:bg-[#183D3D]/40 flex flex-col gap-10 items-center justify-center">
        <Subtitle title="Body of work" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-3/4">
          {profile.works.map(({ desc, name, url }, i) => (
            <div
              key={i}
              onClick={() => (location.href = url)}
              className="cursor-pointer drop-shadow-lg transition-all duration-300 ease-out hover:-translate-y-4 h-40 flex flex-col items-center justify-center bg-[#E5DDC5] dark:bg-[#183D3D] rounded-xl"
            >
              <p className="text-md md:text-lg font-bold">{name}</p>
              <p className="text-sm md:text-md">{desc}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* About me */}
      <Container className="flex flex-col gap-4 md:gap-16 items-center justify-center">
        <Subtitle title="About me" />
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 md:p-0 px-4">
          <Image
            className="w-auto h-full drop-shadow-xl"
            priority
            src="/img/hidayahrah.png"
            alt="light mode"
            width={0}
            height={0}
            sizes="100vh"
          />
          <p className="text-center w-full md:w-1/2 text-sm md:text-lg whitespace-pre-line">
            {profile.bio}
          </p>
        </div>
      </Container>

      {/* Skillsets */}
      <Container className="bg-[#F1F8E8] dark:bg-[#183D3D]/40 flex flex-col gap-20 items-center justify-center">
        <Subtitle title="Skillsets" />
        <div
          x-data="{}"
          x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul
            x-ref="logos"
            className="flex gap-0 md:gap-4 items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          >
            {skillsets()}
          </ul>
          <ul
            x-ref="logos"
            className="flex gap-0 md:gap-4 items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            {skillsets()}
          </ul>
        </div>
      </Container>

      {/* Experiences */}
      <Container className="flex flex-col gap-16 items-center justify-center">
        <Subtitle title="Experiences" />
        <div className="w-4/5 flex flex-col md:flex-row gap-28">
          <div className="flex flex-col gap-4">
            {profile.experiences.map(({ period, role, company }, k) => (
              <div
                key={k}
                className="group cursor-pointer text-lg flex flex-row gap-8 items-start w-full"
                onClick={() => {
                  setOpenExp(false);
                  setSelectedExp(k);
                }}
              >
                <div className="flex flex-col items-center gap-4">
                  <Image
                    className="rounded-full bg-[#183D3D]/30 h-8 w-8 group-hover:animate-wiggle-more animate-infinite animate-duration-700 animate-ease-linear animate-normal"
                    priority
                    src="/img/emojis/bolt.png"
                    alt="bolt"
                    width={0}
                    height={0}
                    sizes="100vh"
                    style={{
                      boxShadow:
                        k === selectedExp &&
                        "5px 5px 10px #2a323e, -5px -5px 10px #7288a8",
                    }}
                  />
                  {k !== profile.experiences?.length - 1 && (
                    <div className="w-px h-[62px] dark:bg-[#E5DDC5] bg-neutral-300"></div>
                  )}
                </div>
                <div>
                  <span className="font-semibold text-xl">{role}</span>
                  <p>{company}</p>
                  <p>{period}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`hidden lg:flex w-3/5 items-center bg-neutral-100 dark:bg-[#183D3D] rounded-xl drop-shadow-md p-8 animate-once animate-ease-linear animate-normal ${
              openExp
                ? "animate-fade-right animate-duration-700"
                : "animate-fade-left animate-duration-50"
            }`}
          >
            <ul className="list-inside list-disc flex flex-col gap-6 items-start">
              <div className="flex flex-row gap-2">
                {profile.experiences[selectedExp]?.skillsTag.map((tag, t) => (
                  <div
                    key={t}
                    className="dark:border-[#E5DDC5] border-[#183D3D] dark:bg-transparent bg-[#183D3D]/10 rounded-md px-2 border-[1px] text-xs"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start">
                {profile.experiences[selectedExp]?.desc.map((item, d) => (
                  <li key={d} className="text-md whitespace-pre-line">
                    {item}
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </Container>

      <Container className="bg-[#F1F8E8] dark:bg-[#183D3D]/40 flex flex-col gap-10 items-center justify-center">
        <Subtitle title="Educations" />
        <div className="w-4/5 flex flex-col md:flex-row gap-6 justify-center">
          {profile.educations.map(({ period, program, school }, j) => (
            <div
              key={j}
              className="text-center w-full md:w-1/2 flex flex-col justify-center items-center gap-2 p-8 rounded-xl bg-neutral-50 dark:bg-[#183D3D] drop-shadow-lg"
            >
              <span className="text-lg font-bold">{program}</span>
              <p>{school}</p>
              <p>{period}</p>
            </div>
          ))}
        </div>
      </Container>
      <Container className="flex flex-col gap-16 items-center justify-center md:p-0 px-4">
        <Subtitle title="Drop me a line whenever!" className="text-center" />
        <div className="flex flex-col gap-4 items-start">
          <div className="flex flex-row items-center gap-4">
            <div className="w-8 h-8">
              <Gmail />
            </div>
            <a
              className="text-md md:text-lg"
              target="_blank"
              href="mailto:hidayahrah97@gmail.com"
            >
              {profile.email}
            </a>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="w-8 h-8 dark:fill-white fill-black">
              <Github />
            </div>
            <a
              className="text-md md:text-lg"
              target="_blank"
              href={profile.github}
            >
              @hidayahrah
            </a>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="w-8 h-8">
              <Linkedin />
            </div>
            <a
              className="text-md md:text-lg"
              target="_blank"
              href={profile.linkedin}
            >
              @hidayahrah
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}

const Subtitle = ({ title, className = "" }) => (
  <p
    className={`text-5xl whitespace-pre-line font-bold ${className} ${marck.className}`}
  >
    {title}
  </p>
);

const Container = ({ children, className = "" }) => {
  return <div className={`min-h-screen w-full ${className}`}>{children}</div>;
};
