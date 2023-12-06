import Link from "next/link";
import Image from "next/image";

export default function Socials() {
  return (
    <>
      <ul className="h-full w-full grid grid-cols-3 grid-rows-1 md:grid-cols-1 md:grid-rows-3 lg:grid-cols-2 lg:grid-rows-2  gap-2">
        <li className=" flex flex-col items-center justify-center">
          <Link
            className="p-4 rounded-2xl border-[3px] bg-sky-500 shadow-lg shadow-sky-600/50  border-sky-800 skew-y-12 transition-transform duration-100 hover:skew-y-0 hover:scale-105"
            href="https://github.com/JuanRamirez2000"
            target="_blank"
          >
            <Image
              src={"/assets/github_logo.svg"}
              alt="github logo"
              width={64}
              height={64}
            />
          </Link>
        </li>
        <li className="flex flex-col items-center justify-center">
          <Link
            href="https://www.instagram.com/juan_r_photos/"
            className="p-4 rounded-2xl border-[3px] bg-sky-500 shadow-lg shadow-sky-600/50  border-sky-800 skew-y-12 transition-transform duration-100 hover:skew-y-0 hover:scale-105"
            target="_blank"
          >
            <Image
              src={"/assets/instagram_logo.svg"}
              alt="instagram logo"
              width={64}
              height={64}
            />
          </Link>
        </li>
        <li className="flex flex-col items-center justify-center">
          <Link
            className="p-4 rounded-2xl border-[3px] bg-sky-500 shadow-lg shadow-sky-600/50  border-sky-800 skew-y-12 transition-transform duration-100 hover:skew-y-0 hover:scale-105"
            href="https://www.linkedin.com/in/juanramirez2000/"
            target="_blank"
          >
            <Image
              src={"/assets/linkedIn_logo.svg"}
              alt="linkedIn logo"
              width={64}
              height={64}
            />
          </Link>
        </li>
      </ul>
    </>
  );
}
