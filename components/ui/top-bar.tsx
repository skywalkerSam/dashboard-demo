"use client";

import Link from "next/link";
// import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import "@/app/styles/starboy-logo.css";
import type { JSX } from "react";
import { Button } from "./button";
// import { ModeToggle } from "./theme-toggle";

export default function TopBar(): JSX.Element {
  return (
    <div>
      <div className="flex flex-row-reverse gap-3 p-3">
        <div>
          <UserButton></UserButton>
        </div>
        <div>
          <Link href={"/dashboard"}>
            <Button variant="ghost">Dashboard</Button>
          </Link>
        </div>
      </div>
      {/* <div className="flex flex-row">
        <Link href="/">
          <Image
            src="/icon.svg"
            alt="Starboy Logo"
            width={90}
            height={60}
            className="starboy-logo p-3"
            priority
          ></Image>
        </Link>
      </div> */}
    </div>
  );
}
