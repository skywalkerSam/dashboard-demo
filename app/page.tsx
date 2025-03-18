// import AcmeLogo from "@/app/ui/acme-logo";
// import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
// import { ubuntu } from "@/app/ui/fonts";
// import Image from "next/image";
// import { ModeToggle } from "@/components/ui/theme-toggle";
// import AcmeLogo from "./ui/asai-logo";
// import Footer from "../components/ui/footer";
// import { Button } from "@/components/ui/button";

// import MainTitle from "@/components/ui/main-title";
import TopBar from "@/components/ui/top-bar";
import { centeredDivStyle, mainPageStyles } from "./styles/styles";
import MainTitle from "@/components/ui/main-title";
import StarboyLogo from "@/components/ui/starboy-logo";

// import MainTitle from "@/components/ui/main-title";
// import { centeredDivStyle } from "./styles/styles";

export default function Page() {
  return (
    <div>
      <div className="p-3">
        <TopBar></TopBar>
      </div>
      <div className={centeredDivStyle}>
        <Link
          href={"/dashboard"}
          className={mainPageStyles.linkStyle}
          aria-label="Navigate to the dashboard"
        >
          {/* Visit Image Gallery → */}
          <span className="hover:underline">Navigate to Dashboard</span>
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </Link>
      </div>
      <div className={centeredDivStyle}>
        <MainTitle></MainTitle>
      </div>
    </div>
  );
  // return (
  //   <main>
  //     {/* <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-800 relative overflow-hidden"> */}
  //     {/* Animated background elements */}
  //     {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0)_50%)]" />
  //     <div className="absolute inset-0">
  //       <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
  //       <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
  //       <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
  //     </div> */}

  //     {/* Content */}
  //     {/* <div className="flex flex-row-reverse p-3">
  //       <Link href={"/dashboard"}>
  //         <Button variant="ghost">Dashboard</Button>
  //       </Link>
  //     </div> */}
  //     <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  //       <div className="grid h-screen place-items-center">
  //         {/* <AcmeLogo></AcmeLogo> */}
  //         <MainTitle></MainTitle>
  //       </div>
  //     </div>
  //   </main>
  // );
}
