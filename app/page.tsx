import {
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main className="w-screen lg:w-[64rem] lg:h-screen h-fit flex flex-col-reverse lg:flex-row ">
      <section className="w-full lg:w-3/5 h-full flex flex-col gap-2.5 px-4 py-8 lg:py-0">
        <article>
          <h2 className="text-2xl font-medium flex items-center">
            Education
            <span className="inline-flex px-2">
              <AcademicCapIcon className="size-7" />
            </span>
          </h2>
          <div className="pt-2">
            <h3 className="text-lg font-medium text-primary">
              Bachelors in Science, Computer Science
            </h3>
            <p>California State University - Fullerton / 2018 - 2022</p>
          </div>
        </article>
        <article>
          <h2 className="text-2xl font-medium flex items-center">
            Experience
            <span className="inline-flex px-2">
              <BriefcaseIcon className="size-7" />
            </span>
          </h2>
          <ul className="pt-2 flex flex-col gap-4 w-4/5">
            <li>
              <h3 className="text-lg font-medium text-primary">
                Lead Frontend Web Developer
              </h3>
              <p>TeammateMe / Oct 2023 - Current </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis dolorem odio dolores adipisci culpa exercitationem
                deserunt deleniti rem quod aperiam.
              </p>
              <ul className="flex flex-row gap-1 flex-wrap">
                <li className="badge badge-outline badge-primary">NextJS</li>
                <li className="badge badge-outline badge-primary">ReactJS</li>
                <li className="badge badge-outline badge-primary">ExpressJS</li>
                <li className="badge badge-outline badge-primary">
                  Google Analytics
                </li>
                <li className="badge badge-outline badge-primary">Sequelize</li>
                <li className="badge badge-outline badge-primary">
                  Material UI
                </li>
                <li className="badge badge-outline badge-primary">
                  Digital Ocean
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-lg font-medium text-primary">
                Full Stack Developer
              </h3>
              <p>Relion / Jan 2023 - Oct 2023</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis dolorem odio dolores adipisci culpa exercitationem
                deserunt deleniti rem quod aperiam.
              </p>
              <ul className="flex flex-row gap-1 flex-wrap">
                <li className="badge badge-outline badge-primary">NextJS</li>
                <li className="badge badge-outline badge-primary">ReactJS</li>
                <li className="badge badge-outline badge-primary">
                  TypescriptJS
                </li>
                <li className="badge badge-outline badge-primary">PrismaDB</li>
                <li className="badge badge-outline badge-primary">tRPC</li>
                <li className="badge badge-outline badge-primary">
                  HeadlessUI
                </li>
                <li className="badge badge-outline badge-primary">Zustand</li>
                <li className="badge badge-outline badge-primary">Vercel</li>
              </ul>
            </li>
            <li>
              <h3 className="text-lg font-medium text-primary">
                Research Assistant
              </h3>
              <p>
                California State University - Fullerton / Jan 2021 - Sept 2022
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis dolorem odio dolores adipisci culpa exercitationem
                deserunt deleniti rem quod aperiam.
              </p>
              <ul className="flex flex-row gap-1 flex-wrap">
                <li className="badge badge-outline badge-primary">MATLAB</li>
                <li className="badge badge-outline badge-primary">Python</li>
                <li className="badge badge-outline badge-primary">ArcGIS</li>
                <li className="badge badge-outline badge-primary">
                  OpenStreetMaps
                </li>
              </ul>
            </li>
          </ul>
        </article>
        <article>
          <h2 className="text-2xl font-medium flex items-center">
            Projects
            <span className="inline-flex px-2">
              <CodeBracketIcon className="size-7" />
            </span>
          </h2>
          <ul className="flex flex-col gap-4 w-4/5 pt-2">
            <li>
              <h3 className="text-lg font-medium text-primary">
                Roadtrip Music
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis dolorem odio dolores adipisci culpa exercitationem
                deserunt deleniti rem quod aperiam.
              </p>
              <ul className="flex flex-row gap-1 flex-wrap">
                <li className="badge badge-outline badge-primary">NextJS</li>
                <li className="badge badge-outline badge-primary">ReactJS</li>
                <li className="badge badge-outline badge-primary">
                  TypescriptJS
                </li>
                <li className="badge badge-outline badge-primary">
                  TailwdinCSS
                </li>
                <li className="badge badge-outline badge-primary">AuthJS</li>
                <li className="badge badge-outline badge-primary">Mapbox</li>
                <li className="badge badge-outline badge-primary">DeckGL</li>
                <li className="badge badge-outline badge-primary">
                  SpotifyWebAPI
                </li>
                <li className="badge badge-outline badge-primary">Vercel</li>
              </ul>
            </li>
            <li>
              <h3 className="text-lg font-medium text-primary">
                Tina Portfolio
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis dolorem odio dolores adipisci culpa exercitationem
                deserunt deleniti rem quod aperiam.
              </p>
              <ul className="flex flex-row gap-1 flex-wrap">
                <li className="badge badge-outline badge-primary">NextJS</li>
                <li className="badge badge-outline badge-primary">ReactJS</li>
                <li className="badge badge-outline badge-primary">
                  TypescriptJS
                </li>
                <li className="badge badge-outline badge-primary">
                  TailwdinCSS
                </li>
                <li className="badge badge-outline badge-primary">
                  Cloudinary
                </li>
                <li className="badge badge-outline badge-primary">Vercel</li>
              </ul>
            </li>
          </ul>
        </article>
      </section>
      <section className="w-full lg:w-2/5 h-full flex flex-col gap-4 bg-neutral text-neutral-content px-4 py-8 lg:py-0">
        <article className="flex flex-col w-full justify-center">
          <h1 className="text-7xl font-light">
            Juan <br /> Ramirez
          </h1>
          <h2 className="text-accent text-4xl font-bold tracking-tight">
            Frontend Web Developer
          </h2>
          <div className="w-full h-fill py-10 flex items-center justify-center">
            <div className="size-64 bg-secondary rounded-full" />
          </div>
          <div className="w-full flex flex-col items-center">
            <ul className="flex flex-row gap-12">
              <li>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="size-10 text-accent"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faGithub}
                  className="size-10 text-accent"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="size-10 text-accent"
                />
              </li>
            </ul>
          </div>
        </article>
        <article className="text-center w-full flex flex-col items-center">
          <div className="w-3/4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              aut a quisquam eaque voluptatibus deleniti at iure quia quidem
              labore sit quibusdam nostrum adipisci nesciunt praesentium
              pariatur assumenda quis neque?
            </p>
          </div>
        </article>
        <article className="flex flex-col gap-1">
          <h3 className="text-2xl text-accent">Languages</h3>
          <ul>
            <li>
              <p>English</p>
            </li>
            <li>
              <p>Spanish</p>
            </li>
          </ul>
        </article>
        <article className="flex flex-col gap-1">
          <h3 className="text-2xl text-accent">Hobbies</h3>
          <ul>
            <li>
              <p>Chess</p>
            </li>
            <li>
              <p>Photography</p>
            </li>
            <li>
              <p>Programming</p>
            </li>
            <li>
              <p>Powerlifting</p>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
