"use client";

import NextLogo from "../../app/ui/next-logo";
import { footerStyles } from "../../app/styles/styles";
import { ModeToggle } from "./theme-toggle";

export default function Footer() {
  return (
    <div className={footerStyles.centeredFooter}>
      <div className="mr-2">
      <ModeToggle></ModeToggle>
      </div>
      <footer>
        <div>
          <p className="text-slate-600">Built w/</p>
          <NextLogo></NextLogo>
          <p className="text-slate-600">
            &copy; 12025,{" "}
            <a
              href="https://github.com/skywalkerSam/"
              className={footerStyles.skywalkerSam}
              target="_blank"
              rel="noopener noreferrer"
            >
              @skywalkerSam
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
