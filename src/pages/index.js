import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen mt-36 pb-32 md:my-30 px-56 text-white">
        <div className="grid grid-cols-4 grid-flow-row gap-4">
          <a
            className="row-span-3 bg-primary-400/60 p-6 rounded-3xl border border-primary-100/30 drop-shadow-lg"
            href="https://hidayahrah-dadjokes.netlify.app/"
          >
            Location
          </a>
          <a
            className="col-span-1 bg-primary-400/60 cursor-pointer rounded-3xl border border-primary-100/30 drop-shadow-lg p-6 flex flex-col gap-4 justify-center"
            href="https://hidayahrah-notes.netlify.app/"
          >
            <p className="text-md">A note app project built with ReactJS</p>
            <Image
              alt="Notes App"
              src="/img/notes.png"
              width={0}
              height={0}
              sizes="100vh"
              className="w-auto h-auto"
            />
          </a>

          <div className="col-span-2 bg-primary-400/60 cursor-pointer p-6 rounded-3xl border border-primary-100/30 drop-shadow-lg flex flex-row items-center justify-center">
            <p className="text-3xl">
              Hello, I'm Hidayah. A Full Stack Engineer.
            </p>
            <Image
              alt="Hidayah"
              src="/img/noglasses.png"
              width={0}
              height={0}
              sizes="100vh"
              className="w-auto h-28 scale-150"
            />
          </div>

          <div className="col-span-1 bg-primary-400/60 cursor-pointer rounded-3xl border border-primary-100/30 drop-shadow-lg p-6 flex justify-center">
            <a href="https://www.linkedin.com/in/hidayahrah/">
              <Image
                alt="Hidayah's LinkedIn"
                src="/img/linkedin.png"
                width={0}
                height={0}
                sizes="100vh"
                className="w-auto h-auto"
              />
            </a>
          </div>

          <div className="col-span-1 bg-primary-400/60 cursor-pointer rounded-3xl border border-primary-100/30 drop-shadow-lg p-6 flex justify-center">
            <a href="https://github.com/hidayahrah">
              <Image
                alt="Hidayah's Github"
                src="/img/github.png"
                width={0}
                height={0}
                sizes="100vh"
                className="w-auto h-auto"
              />
            </a>
          </div>
          <a
            className="row-span-2 col-span-1 bg-primary-400/60 cursor-pointer p-10 rounded-3xl border border-primary-100/30 drop-shadow-lg flex flex-col gap-4 justify-center"
            href="https://hidayahrah-dadjokes.netlify.app/"
          >
            <p className="text-md">
              A VueJS project with icanhazdadjoke API integration
            </p>
            <Image
              alt="Dad Jokes"
              src="/img/clown-hat.png"
              width={0}
              height={0}
              sizes="100vh"
              className="w-auto h-auto"
            />
          </a>
          <div className="col-span-2 bg-primary-400/60 p-10 rounded-3xl border border-primary-100/30 drop-shadow-lg text-center">
            "I love crafting digital excellence with full-stack prowess in
            JavaScript & Typescript for business innovation."
          </div>
        </div>
      </div>
    </>
  );
}
