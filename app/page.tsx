import { Layouts } from "react-grid-layout";
import ReactGridLayoutComponent from "./ReactGridLayoutComponent";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const layouts: Layouts = {
    sm: smLayout,
    md: mdLayout,
    lg: lgLayout,
    xl: xlLayout,
  };

  const breakpoints: { [P: string]: number } | undefined = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  };
  const cols: { [P: string]: number } | undefined = {
    sm: 2,
    md: 4,
    lg: 6,
    xl: 8,
  };

  return (
    <main className="min-h-screen  bg-gradient-to-br from-pink-400/75 to-amber-400/75 flex flex-col justify-center ">
      <ReactGridLayoutComponent
        layouts={layouts}
        className="layout max-w-screen-2xl"
        cols={cols}
        rowHeight={60}
        breakpoints={breakpoints}
        isResizable={false}
      >
        <section
          key={"a"}
          className="bg-stone-100 drop-shadow-xl shadow-xl rounded-xl p-3 h-full w-full flex flex-col gap-4"
        >
          <div className="flex flex-row w-full ">
            <h1 className="text-5xl">Juan Ramirez</h1>
          </div>
          <div className="flex flex-row gap-2">
            <button className="px-3 py-2 rounded-lg bg-sky-400 border-2 border-sky-800 transition-transform hover:scale-105 hover:bg-sky-600">
              Full Stack Engineer
            </button>
            <button className="px-3 py-2 rounded-lg bg-emerald-400 border-2 border-emerald-800 transition-transform hover:scale-105 hover:bg-emerald-600">
              Photographer
            </button>
          </div>
          <p className="text-2xl w-full md:w-4/5 lg:w-2/3">
            I like to play with websites, take pretty pics, and mess around with
            things
          </p>
        </section>
        <section
          key={"b"}
          className="bg-stone-100 drop-shadow-xl shadow-xl rounded-xl p-3 h-full w-full"
        >
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
        </section>
        <section
          key={"c"}
          className="bg-stone-100 drop-shadow-xl shadow-xl rounded-xl p-3 h-full w-full"
        >
          <h1>Work</h1>
        </section>
        <section
          key={"d"}
          className="bg-stone-100 drop-shadow-xl shadow-xl rounded-xl p-3 h-full w-full"
        >
          <h1>Projects</h1>
        </section>
        <section
          key={"e"}
          className="bg-stone-100 drop-shadow-xl shadow-xl rounded-xl p-3 h-full w-full"
        >
          <h1>Tech</h1>
        </section>
        <section
          key={"f"}
          className="bg-stone-100 drop-shadow-xl shadow-xl rounded-xl p-3 h-full w-full"
        >
          <h1>Contact</h1>
        </section>
      </ReactGridLayoutComponent>
    </main>
  );
}

//Note on layout
//x (left -> right colms)
//y (up -> down rows)
const smLayout = [
  { i: "a", x: 0, y: 0, w: 2, h: 6, static: true },
  { i: "b", x: 0, y: 0, w: 2, h: 2 },
  { i: "c", x: 0, y: 2, w: 1, h: 8 },
  { i: "d", x: 1, y: 2, w: 1, h: 8 },
  { i: "e", x: 0, y: 3, w: 2, h: 6 },
  { i: "f", x: 0, y: 4, w: 2, h: 4 },
];

const mdLayout = [
  { i: "a", x: 0, y: 0, w: 3, h: 6, static: true },
  { i: "b", x: 3, y: 0, w: 1, h: 6, static: true },
  { i: "c", x: 0, y: 1, w: 2, h: 12 },
  { i: "d", x: 2, y: 1, w: 2, h: 6 },
  { i: "e", x: 2, y: 2, w: 2, h: 6 },
  { i: "f", x: 0, y: 3, w: 4, h: 6 },
];

const lgLayout = [
  { i: "a", x: 0, y: 0, w: 4, h: 6, static: true },
  { i: "b", x: 4, y: 0, w: 2, h: 6, static: true },
  { i: "c", x: 0, y: 1, w: 3, h: 12 },
  { i: "d", x: 3, y: 1, w: 3, h: 10 },
  { i: "f", x: 3, y: 3, w: 3, h: 6 },
  { i: "e", x: 0, y: 3, w: 3, h: 4 },
];
const xlLayout = [
  { i: "a", x: 0, y: 0, w: 6, h: 6, static: true },
  { i: "b", x: 6, y: 0, w: 2, h: 4, static: true },
  { i: "c", x: 0, y: 1, w: 3, h: 10 },
  { i: "d", x: 3, y: 1, w: 3, h: 6 },
  { i: "e", x: 7, y: 1, w: 2, h: 12 },
  { i: "f", x: 3, y: 1, w: 3, h: 4 },
];
