import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faChess } from "@fortawesome/free-solid-svg-icons";
import CldImageWrapper from "../components/CldImageWrapper";
import Link from "next/link";
import {
  HeartIcon,
  CommandLineIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";

const HERO_PAGE_IMAGE_ID = "Juan/d3ygc4wdl9alwjybf4w1";

export default function Links() {
  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-br from-indigo-300 to-sky-300">
      <section className="flex flex-col items-center justify-center w-full max-w-lg min-h-screen gap-2 py-20 overflow-y-auto md:py-0 h-fit">
        <figure className="relative w-2/3 h-[30rem] grow-0">
          <CldImageWrapper
            src={HERO_PAGE_IMAGE_ID}
            alt="Tina Hero Section photo"
            fill={true}
            className="object-cover rounded-xl"
          />
        </figure>
        <div className="flex flex-col items-center w-full gap-5 h-fit">
          <h1 className="text-4xl font-semibold tracking-tight">
            Juan Ramirez
          </h1>
          <ul className="flex flex-col w-3/4 max-w-5xl gap-4 text-2xl">
            <li className="px-3 py-1 transition-all rounded-2xl bg-slate-100 hover:scale-105">
              <Link
                href={"https://www.instagram.com/juan_r_photos/"}
                className="flex flex-row items-center justify-between text-center "
                aria-label="Instagram Link"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-10 h-10 p-1.5 rounded-xl text-slate-50 bg-gradient-to-bl from-purple-500 via-red-600 to-amber-400"
                />
                <div className="flex flex-col grow">
                  <p className="text-xl font-semibold">Instagram</p>
                  <p className="text-sm text-slate-600">
                    Photography Instagram
                  </p>
                </div>
              </Link>
            </li>
            <li className="px-3 py-1 transition-all rounded-2xl bg-slate-100 hover:scale-105">
              <Link
                href={"https://www.juanr.dev"}
                className="flex flex-row items-center justify-between text-center "
                aria-label="Coding Link"
                target="_blank"
              >
                <CommandLineIcon className="w-10 h-10 p-1.5 rounded-xl bg-cyan-400 text-white" />
                <div className="flex flex-col grow">
                  <p className="text-xl font-semibold">
                    Professional Portfolio
                  </p>
                  <p className="text-sm text-slate-600">My coding portfolio</p>
                </div>
              </Link>
            </li>
            <li className="px-3 py-1 transition-all rounded-2xl bg-slate-100 hover:scale-105">
              <Link
                href={"https://www.juanr.dev/photography"}
                className="flex flex-row items-center justify-between text-center "
                aria-label="Photography Link"
                target="_blank"
              >
                <CameraIcon className="w-10 h-10 p-1.5 rounded-xl bg-cyan-400 text-white" />
                <div className="flex flex-col grow">
                  <p className="text-xl font-semibold">Creative Portfolio</p>
                  <p className="text-sm text-slate-600">
                    My photography portfolio
                  </p>
                </div>
              </Link>
            </li>
            <li className="px-3 py-1 transition-all rounded-2xl bg-slate-100 hover:scale-105">
              <Link
                href={"https://www.linkedin.com/in/juanramirez2000/"}
                className="flex flex-row items-center justify-between text-center "
                aria-label="LinkedIn Link"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="w-10 h-10 p-1.5 rounded-xl text-slate-50 bg-sky-400 "
                />
                <div className="flex flex-col grow">
                  <p className="text-xl font-semibold">LinkedIn</p>
                  <p className="text-sm text-slate-600">Lets connect!</p>
                </div>
              </Link>
            </li>
            <li className="px-3 py-1 transition-all rounded-2xl bg-slate-100 hover:scale-105">
              <Link
                href={"https://github.com/JuanRamirez2000"}
                className="flex flex-row items-center justify-between text-center "
                aria-label="Github Link"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-10 h-10 p-1.5 rounded-xl text-slate-50 bg-slate-800 "
                />
                <div className="flex flex-col grow">
                  <p className="text-xl font-semibold">Github</p>
                  <p className="text-sm text-slate-600">
                    Coding struggles ahead D:
                  </p>
                </div>
              </Link>
            </li>
            <li className="px-3 py-1 transition-all rounded-2xl bg-slate-100 hover:scale-105">
              <Link
                href={
                  "https://open.spotify.com/user/12139070956?si=d527f68a3af14078"
                }
                className="flex flex-row items-center justify-between text-center "
                aria-label="Spotify Link"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faSpotify}
                  className="w-10 h-10 p-1.5 rounded-xl text-slate-50 bg-emerald-400 "
                />
                <div className="flex flex-col grow">
                  <p className="text-xl font-semibold">Spotify</p>
                  <p className="text-sm text-slate-600">Come jam with me!</p>
                </div>
              </Link>
            </li>
            <li className="px-3 py-1 transition-all rounded-2xl bg-slate-100 hover:scale-105">
              <Link
                href={"https://www.chess.com/member/promking2000"}
                className="flex flex-row items-center justify-between text-center "
                aria-label="Chess Link"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faChess}
                  className="w-10 h-10 p-1.5 rounded-xl text-slate-50 bg-emerald-400"
                />
                <div className="flex flex-col grow">
                  <p className="text-xl font-semibold">Chess</p>
                  <p className="text-sm text-slate-600">Chess.com Account</p>
                </div>
              </Link>
            </li>
          </ul>
          <h2 className="text-sm text-slate-700">
            Made with{" "}
            <HeartIcon className="inline w-5 h-5 text-pink-400 fill-pink-400" />{" "}
            by{" "}
            <Link href={"https://www.juanr.dev"} className="text-pink-400">
              @Juan
            </Link>
          </h2>
        </div>
      </section>
    </main>
  );
}
