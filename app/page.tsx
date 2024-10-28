// import AcmeLogo from "@/app/ui/acme-logo";
// import { ArrowRightIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";
// import { ubuntu } from "@/app/ui/fonts";
import Image from "next/image";
import AcmeLogo from "./ui/asai-logo";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0)_50%)]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid h-screen place-items-center">
          <AcmeLogo></AcmeLogo>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 mb-8">
            ASAI Inc.
          </h1>

          <p
            // className={`${ubuntu.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto"
          >
            <strong>Welcome!</strong> This is the example of{" "}
            <a
              href="https://github.com/skywalkerSam/dashboard-demo/"
              target="_blank"
              className="text-violet-500"
            >
              dashboard-demo
            </a>
            , brought to you by{" "}
            <a
              href="https://github.com/skywalkerSam"
              target="_blank"
              className="text-cyan-600"
            >
              @skywalkerSam
            </a>{" "}
            w/{" "}
            <a
              href="https://nextjs.org/learn/"
              target="_blank"
              className="text-black"
            >
              {/* <Image src="https://github.com/vercel.png" alt="The almighty triangle" width={30} height={30}></Image> */}
              {/* <img src="https://github.com/vercel.png" alt="The almighty triangle" width={30}></img> */}
              <strong className="text-xl">Vercel</strong>
            </a>
          </p>
        </div>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div>
          <small className=" text-gray-500">Built with</small>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              //   className="dark:invert"
              src="https://nextjs.org/icons/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </a>
          <br />
          {/* <small className="text-gray-500 mb-6">
            &copy; Copyright 12024,{" "}
            <a
              href="https://github.com/skywalkerSam/"
              className="text-cyan-500"
              target="_blank"
            >
              @skywalkerSam
            </a>
          </small> */}
          <small className="text-gray-500 mr-6">
            &copy; Copyright 12024, ASAI Inc.
          </small>
        </div>
      </footer>
    </main>
  );
}
