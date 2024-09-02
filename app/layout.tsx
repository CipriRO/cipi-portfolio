import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { cn } from "./lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Cipi Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-background text-copy" lang="en">
      <body className={cn(poppins.className, "mx-16")}>
        <div className="max-w-[1300px] mx-auto space-y-28">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
