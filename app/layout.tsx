import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juan Ramirez",
  description: "A super simple site to showcase the work by Juan Ramirez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-base-200">
      <body
        className={
          "w-screen h-screen flex justify-center items-center" + inter.className
        }
      >
        {children}
      </body>
    </html>
  );
}
