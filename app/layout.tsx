import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juan Ramirez",
  description: "A simple site to showcase what I do",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen h-screen bg-gradient-to-br from-pink-400/75 to-amber-400/75 w-screen flex flex-col items-center justify-center">
          <section className="grid grid-cols-12 grid-rows-8 md:h-4/5 md:w-4/5 h-5/6 w-5/6 bg-red-500 min-h-fit max-w-7xl">
            <ul className="row-span-1 col-span-12 bg-red-200 flex flex-row justify-evenly items-center">
              <li>
                <Link
                  href={"https://www.instagram.com/juan_r_photos/"}
                  target="_blank"
                >
                  <Image
                    src={"/assets/instagram_logo.svg"}
                    width={64}
                    height={64}
                    alt="Instagram Logo"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={"https://github.com/JuanRamirez2000"}
                  target="_blank"
                >
                  <Image
                    src={"/assets/github_logo.svg"}
                    width={64}
                    height={64}
                    alt="Github Logo"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.linkedin.com/in/juanramirez2000/"}
                  target="_blank"
                >
                  <Image
                    src={"/assets/linkedIn_logo.svg"}
                    width={64}
                    height={64}
                    alt="Linked In Logo"
                  />
                </Link>
              </li>
              <li>DarkMode</li>
            </ul>

            <div className="row-span-2 col-span-12 bg-green-200">
              <h1 className="">Juan Ramirez</h1>
            </div>
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
