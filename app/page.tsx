import { Layouts } from "react-grid-layout";
import ReactGridLayoutComponent from "./ReactGridLayoutComponent";

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
        <section key={"a"} className="bg-white rounded-xl p-3 h-full w-full">
          <h1>Header</h1>
        </section>
        <section key={"b"} className="bg-white rounded-xl p-3 h-full w-full">
          <ul>
            <li>
              <a href="https://github.com/JuanRamirez2000" target="_blank"></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </section>
        <section key={"c"} className="bg-white rounded-xl p-3 h-full w-full">
          <h1>Work</h1>
        </section>
        <section key={"d"} className="bg-white rounded-xl p-3 h-full w-full">
          <h1>Projects</h1>
        </section>
        <section key={"e"} className="bg-white rounded-xl p-3 h-full w-full">
          <h1>Tech</h1>
        </section>
        <section key={"f"} className="bg-white rounded-xl p-3 h-full w-full">
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
  { i: "a", x: 0, y: 0, w: 2, h: 6 },
  { i: "b", x: 0, y: 1, w: 2, h: 2 },
  { i: "c", x: 0, y: 2, w: 1, h: 8 },
  { i: "d", x: 1, y: 2, w: 1, h: 8 },
  { i: "e", x: 0, y: 3, w: 2, h: 6 },
  { i: "f", x: 0, y: 4, w: 2, h: 4 },
];

const mdLayout = [
  { i: "a", x: 0, y: 0, w: 3, h: 6 },
  { i: "b", x: 3, y: 0, w: 1, h: 6 },
  { i: "c", x: 0, y: 1, w: 2, h: 12 },
  { i: "d", x: 2, y: 1, w: 2, h: 6 },
  { i: "e", x: 2, y: 2, w: 2, h: 6 },
  { i: "f", x: 0, y: 3, w: 4, h: 6 },
];

const lgLayout = [
  { i: "a", x: 0, y: 0, w: 4, h: 6 },
  { i: "b", x: 4, y: 0, w: 2, h: 6 },
  { i: "c", x: 0, y: 1, w: 3, h: 12 },
  { i: "d", x: 3, y: 1, w: 3, h: 10 },
  { i: "f", x: 3, y: 3, w: 3, h: 6 },
  { i: "e", x: 0, y: 3, w: 3, h: 4 },
];
const xlLayout = [
  { i: "a", x: 0, y: 0, w: 5, h: 6 },
  { i: "b", x: 6, y: 0, w: 3, h: 6 },
  { i: "c", x: 0, y: 1, w: 3, h: 10 },
  { i: "d", x: 3, y: 1, w: 3, h: 6 },
  { i: "e", x: 7, y: 1, w: 2, h: 10 },
  { i: "f", x: 3, y: 1, w: 3, h: 4 },
];
