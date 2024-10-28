import "@/app/ui/global.css";
import { ubuntu } from "@/app/ui/fonts";
import { Metadata } from "next";

// https://nextjs.org/learn/dashboard-app/adding-metadata
export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "ASAI Inc.",
  },
  description:
    "ASAI Inc dashboard demo built with NEXT.js + Vercel by @skywalkerSam",
  metadataBase: new URL("https://dashboard-demo-umber.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} antialiased bg-gray-600`}>
        {children}
      </body>
    </html>
  );
}
