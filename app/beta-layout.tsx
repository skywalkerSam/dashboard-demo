import "@/app/ui/global.css";
import { ubuntu } from "@/app/ui/fonts";
import { Metadata } from "next";
// import Image from "next/image";

export const metadata: Metadata = {
  title: {
    template: "%s | ASAI Dashboard",
    default: "ASAI Dashboard",
  },
  description: "ASAI Inc. dashboard demo built w/ NEXT.js utilizing the new App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} antialiased min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-800 relative overflow-x-hidden`}
      >
        {children}

        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0)_50%)]" />
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>
      </body>
    </html>
  );
}
