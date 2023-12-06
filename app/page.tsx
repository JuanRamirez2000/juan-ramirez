import { Layouts } from "react-grid-layout";
import ReactGridLayoutComponent from "./ReactGridLayoutComponent";

import AboutMe from "./_components/AboutMeSection";
import Socials from "./_components/SocialsSection";

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
    <main className="min-h-screen  bg-gradient-to-br from-pink-400/75 to-amber-400/75 w-screen">
      <div className=" w-full h-full flex flex-col items-center justify-center">
        <ReactGridLayoutComponent
          layouts={layouts}
          className="layout max-w-screen-2xl w-full h-full"
          cols={cols}
          rowHeight={60}
          breakpoints={breakpoints}
          width={1080}
          isResizable={false}
        >
          <section
            key={"header"}
            className="bg-stone-100 drop-shadow-xl shadow-xl rounded-xl p-3 h-full w-full flex flex-col gap-6"
          >
            <AboutMe />
          </section>
          <section
            key={"socials"}
            className="bg-stone-100 drop-shadow-xl shadow-xl rounded-xl p-3 h-full w-full"
          >
            <Socials />
          </section>
          <section
            key={"work"}
            className="bg-stone-100 drop-shadow-xl shadow-xl rounded-xl p-3 h-full w-full"
          >
            <h1>Work</h1>
          </section>
          <section
            key={"projects"}
            className="bg-stone-100 drop-shadow-xl shadow-xl rounded-xl p-3 h-full w-full"
          >
            <h1>Projects</h1>
          </section>
          <section
            key={"tech"}
            className="bg-stone-100 drop-shadow-xl shadow-xl rounded-xl p-3 h-full w-full"
          >
            <h1>Tech</h1>
          </section>
          <section
            key={"contact"}
            className="bg-stone-100 drop-shadow-xl shadow-xl rounded-xl p-3 h-full w-full"
          >
            <h1>Contact</h1>
          </section>
        </ReactGridLayoutComponent>
      </div>
    </main>
  );
}

//Note on layout
//x (left -> right colms)
//y (up -> down rows)
const smLayout = [
  { i: "header", x: 0, y: 0, w: 2, h: 6, static: true },
  { i: "socials", x: 0, y: 0, w: 2, h: 2 },
  { i: "work", x: 0, y: 2, w: 1, h: 8 },
  { i: "projects", x: 1, y: 2, w: 1, h: 8 },
  { i: "tech", x: 0, y: 3, w: 2, h: 6 },
  { i: "contact", x: 0, y: 4, w: 2, h: 4 },
];

const mdLayout = [
  { i: "header", x: 0, y: 0, w: 3, h: 6, static: true },
  { i: "socials", x: 3, y: 0, w: 1, h: 6, static: true },
  { i: "work", x: 0, y: 1, w: 2, h: 12 },
  { i: "projects", x: 2, y: 1, w: 2, h: 6 },
  { i: "tech", x: 2, y: 2, w: 2, h: 6 },
  { i: "contact", x: 0, y: 3, w: 4, h: 6 },
];

const lgLayout = [
  { i: "header", x: 0, y: 0, w: 4, h: 6, static: true },
  { i: "socials", x: 4, y: 0, w: 2, h: 6, static: true },
  { i: "work", x: 0, y: 1, w: 3, h: 12 },
  { i: "projects", x: 3, y: 1, w: 3, h: 10 },
  { i: "contact", x: 3, y: 3, w: 3, h: 6 },
  { i: "tech", x: 0, y: 3, w: 3, h: 4 },
];
const xlLayout = [
  { i: "header", x: 0, y: 0, w: 6, h: 6, static: true },
  { i: "socials", x: 6, y: 0, w: 2, h: 4, static: true },
  { i: "work", x: 0, y: 1, w: 3, h: 12 },
  { i: "projects", x: 3, y: 1, w: 3, h: 8 },
  { i: "tech", x: 7, y: 1, w: 2, h: 10 },
  { i: "contact", x: 3, y: 2, w: 5, h: 4 },
];
