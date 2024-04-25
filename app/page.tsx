import {
  AcademicCapIcon,
  BriefcaseIcon,
  CameraIcon,
  CodeBracketIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import ThemeToggleSwitch from "./components/ThemeToggleSwitch";

export default function Home() {
  return (
    <main className="w-screen lg:w-[64rem] lg:h-screen h-fit flex flex-col-reverse lg:flex-row  justify-center items-center">
      <section className="w-full lg:w-3/5 h-full flex flex-col gap-2.5 px-4 py-8 lg:py-0 lg:pt-10">
        <article>
          <h2 className="text-3xl font-medium flex items-center">
            Education
            <span className="inline-flex ml-2">
              <AcademicCapIcon className="size-7" />
            </span>
          </h2>
          <div>
            <h3 className="text-lg font-medium text-primary">
              Bachelors in Science, Computer Science
            </h3>
            <p>California State University - Fullerton / 2018 - 2022</p>
          </div>
        </article>
        <article>
          <h2 className="text-3xl font-medium flex items-center pt-4">
            Experience
            <span className="inline-flex ml-2">
              <BriefcaseIcon className="size-7" />
            </span>
          </h2>
          <ul className="flex flex-col gap-3 w-4/5">
            <li>
              <h3 className="text-lg font-medium text-primary">
                Lead Frontend Web Developer
              </h3>
              <p>TeammateMe / Oct 2023 - Current </p>
              <p>
                At TeammateMe I fixed UI bugs, implemented features mainly
                revolving around user analytics, and helped refactor a code base
                to use modern tooling.
              </p>
              <ul className="flex flex-row gap-1 flex-wrap pt-1">
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
                Relion was where I got to showcase my fullstack skills. I helped
                develop tools for the helpdesk team to resolve tickets more
                efficiently. Most of my work was focused on creating a smart
                search feature that pulled info from a ticket and presented
                relevant tickets, notes, and information saved by the company.
              </p>
              <ul className="flex flex-row gap-1 flex-wrap pt-1">
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
                At CSUF I created a code base that gathered OpenStreetMap data
                to create an evolutionary algorithm focused on placing heat
                sensor nodes within any region of the US.
              </p>
              <ul className="flex flex-row gap-1 flex-wrap pt-1">
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
          <h2 className="text-3xl font-medium flex items-center pt-4">
            Projects
            <span className="inline-flex ml-2">
              <CodeBracketIcon className="size-7" />
            </span>
          </h2>
          <ul className="flex flex-col gap-4 w-4/5 ">
            <li>
              <h3 className="text-lg font-medium text-primary inline-flex items-center gap-1">
                Roadtrip Music
                <Link
                  href={"https://github.com/JuanRamirez2000/RoadtripMusic"}
                  className="hover:scale-125 transition-all duration-150"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="size-6 text-accent"
                  />
                </Link>
                <Link
                  href={"https://roadtrip-music.vercel.app/"}
                  className="hover:scale-125 transition-all duration-150"
                  target="_blank"
                >
                  <GlobeAltIcon className="size-6 text-accent" />
                </Link>
              </h3>
              <p>
                A web app that connects the Mapbox Directions API with the
                Spotify Web API to create a playlist that fits the time taken to
                go from a starting point towards a destination.
              </p>
              <ul className="flex flex-row gap-1 flex-wrap pt-1">
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
              <h3 className="text-lg font-medium text-primary inline-flex items-center gap-1">
                Tina Portfolio
                <Link
                  href={"https://github.com/JuanRamirez2000/Tina-Website"}
                  className="hover:scale-125 transition-all duration-150"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="size-6 text-accent"
                  />
                </Link>
                <Link
                  href={"https://tinamodeling.net"}
                  target="_blank"
                  className="hover:scale-125 transition-all duration-150"
                >
                  <GlobeAltIcon className="size-6 text-accent" />
                </Link>
                <Link
                  href={"https://tinamodeling.net/links"}
                  target="_blank"
                  className="hover:scale-125 transition-all duration-150"
                >
                  <GlobeAltIcon className="size-6 text-accent" />
                </Link>
              </h3>
              <p>
                A modeling portfolio and custom &apos;LinkTree&apos; for a model
                local to Southern California. The site also includes a custom
                admin dashboard used to add, remove, change, and edit site
                images to the model&apos;s liking.
              </p>
              <ul className="flex flex-row gap-1 flex-wrap pt-1">
                <li className="badge badge-outline badge-primary">NextJS</li>
                <li className="badge badge-outline badge-primary">ReactJS</li>
                <li className="badge badge-outline badge-primary">
                  TypescriptJS
                </li>
                <li className="badge badge-outline badge-primary">
                  TailwdinCSS
                </li>
                <li className="badge badge-outline badge-primary">ShadCnUI</li>
                <li className="badge badge-outline badge-primary">
                  Cloudinary
                </li>
                <li className="badge badge-outline badge-primary">
                  DrizzleORM
                </li>
                <li className="badge badge-outline badge-primary">Vercel</li>
                <li className="badge badge-outline badge-primary">
                  Vercel Postgres
                </li>
              </ul>
            </li>
          </ul>
        </article>
      </section>
      <section className="w-full lg:w-2/5 h-full flex flex-col gap-4 bg-neutral text-neutral-content px-4 py-8 lg:py-0 lg:pt-10 bg-repeat heropattern-rain-current/10">
        <article className="flex flex-col w-full justify-center text-center lg:text-start relative">
          <div className="z-50 relative">
            <ThemeToggleSwitch />
          </div>
          <h1 className="text-7xl font-light">
            Juan <br /> Ramirez
          </h1>
          <h2 className="text-accent text-4xl font-bold tracking-tight">
            Frontend Web Developer
          </h2>
          <div className="w-full h-fill py-10 flex items-center justify-center">
            <div className="size-64 relative">
              <Image
                src={"/assets/Me.jpg"}
                alt="profile picture"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <ul className="flex flex-row gap-12">
              <li className="hover:scale-125 transition-all duration-150">
                <Link
                  href={"https://www.linkedin.com/in/juanramirez2000/"}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="size-10 text-accent"
                  />
                </Link>
              </li>
              <li className="hover:scale-125 transition-all duration-150">
                <Link
                  href={"https://github.com/JuanRamirez2000"}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="size-10 text-accent"
                  />
                </Link>
              </li>
              <li className="hover:scale-125 transition-all duration-150">
                <Link
                  href={"https://www.instagram.com/juan_r_photos/"}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="size-10 text-accent"
                  />
                </Link>
              </li>
              <li className="hover:scale-125 transition-all duration-150">
                <Link href={"/photography"} target="_blank">
                  <CameraIcon className="size-10 text-accent" />
                </Link>
              </li>
            </ul>
          </div>
        </article>
        <article className="text-center w-full flex flex-col items-center">
          <div className="w-3/4">
            <p>
              I like to code websites for fun. Beyond that I enjoy chess,
              powerlifting, and photography.
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
            <li>
              <p>Vietnamese (Learning)</p>
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
            <li>
              <p>Crochet</p>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
