import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function DeveloperHero() {
  return (
    <div className="h-full w-full flex flex-col-reverse  lg:flex-row">
      <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex flex-col justify-start lg:justify-center text-center items-center relative gap-2">
        <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight">
          Hey! I&apos;m Juan!
        </h1>
        <p className="max-w-sm">
          I like to develop websites, take photos, and learn new things
        </p>
        <ul className="flex flex-row justify-evenly w-1/2 items-center">
          <li>
            <Link href="https://github.com/JuanRamirez2000" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="h-16 w-16 bg-primary text-primary-content p-2 rounded-lg hover:bg-secondary hover:text-secondary-content hover:scale-105 transition duration-150 "
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/juanramirez2000/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="h-16 w-16 bg-primary text-primary-content p-2 rounded-lg hover:bg-secondary hover:text-secondary-content hover:scale-105 transition duration-150 "
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex flex-col items-center justify-center">
        <div className="relative h-64 w-64 md:h-96 md:w-96">
          <Image
            src={"/assets/hero-content/hero-image.webp"}
            className="aspect-square object-cover rounded-full"
            alt="Programming hero icon"
            fill
          />
        </div>
      </div>
    </div>
  );
}
