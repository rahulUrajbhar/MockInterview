import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/header/Header";
import { Toaster } from "sonner";

const monaSans = Mona_Sans({
  variable: "--font-mona-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interview You",
  description: "Practice job interview with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ scrollbarWidth: "none"}}>
      <body
        className={`${monaSans.className} antialiased overflow-auto bg-[#222c70] bg-[linear-gradient(180deg,rgba(34,44,112,1)0%,rgba(50,52,79,1)20%,rgba(27,31,29,1)99%)] min-h-screen`}
      >
        <div className="sticky w-full top-0">
          <Header />
        </div>

        {children}
        <Toaster />
      </body>
    </html>
  );
}
