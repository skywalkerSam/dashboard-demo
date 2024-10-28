import "@/app/ui/global.css";
import { ubuntu } from "@/app/ui/fonts";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    template: "%s | ASAI Dashboard",
    default: "ASAI Dashboard",
  },
  description:
    "ASAI Inc. dashboard demo built w/ NEXT.js utilizing the new App Router.",
  metadataBase: new URL("https://dashboard-demo-umber.vercel.app/"),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} antialiased bg-gray-600`}>{children}</body>
    </html>
  );
}
