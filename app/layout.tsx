import "@/app/ui/global.css";
import { ubuntu } from "@/app/ui/fonts";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";

// https://nextjs.org/learn/dashboard-app/adding-metadata
export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "ASAI Inc.",
  },
  description:
    "ASAI Inc dashboard demo built with NEXT.js + Vercel by @skywalkerSam",
  metadataBase: new URL("https://dashboard-demo-umber.vercel.app/"),
  icons: [{ rel: "icon", url: "/icon.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ubuntu.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
