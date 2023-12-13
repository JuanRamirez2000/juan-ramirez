import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

export default function DeveloperHero() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div className="h-full w-full flex flex-col-reverse lg:flex-row max-w-7xl gap-4">
        <div className="w-full h-2/3 lg:w-1/2 lg:h-full flex flex-col justify-start lg:justify-center text-center items-center relative gap-6">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tight">
            Hey! <br />
            I&apos;m <span className="text-primary">Juan</span>!
          </h1>
          <p className="max-w-md text-xl md:text-2xl">
            I like to develop websites, take photos, and learn new things
          </p>
          <ul className="flex flex-row justify-evenly w-full md:w-1/2 items-center">
            <li>
              <Link
                href="https://github.com/JuanRamirez2000"
                target="_blank"
                className="tooltip tooltip-bottom tooltip-info"
                data-tip="Github"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="h-16 w-16 bg-primary text-primary-content p-2 rounded-lg hover:bg-secondary hover:text-secondary-content hover:scale-105 transition duration-150"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/juanramirez2000/"
                target="_blank"
                className="tooltip tooltip-bottom tooltip-info"
                data-tip="LinkedIn"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-16 w-16 bg-primary text-primary-content p-2 rounded-lg hover:bg-secondary hover:text-secondary-content hover:scale-105 transition duration-150"
                />
              </Link>
            </li>
            <li>
              <Link
                href=""
                target="_blank"
                className="tooltip tooltip-bottom tooltip-info"
                data-tip="Resume"
              >
                <DocumentTextIcon className="h-16 w-16 bg-primary text-primary-content p-2 rounded-lg hover:bg-secondary hover:text-secondary-content hover:scale-105 transition duration-150" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full h-1/3 lg:w-1/2 lg:h-full flex flex-col items-center justify-center">
          <div className="relative h-48 w-48 md:h-96 md:w-96">
            <Image
              src={"/assets/hero-content/hero-image.webp"}
              className="aspect-square object-cover rounded-full"
              alt="Programming hero icon"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}
