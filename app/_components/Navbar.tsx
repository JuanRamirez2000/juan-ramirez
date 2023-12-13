"use client";

import {
  CodeBracketIcon,
  CameraIcon,
  DocumentTextIcon,
  Bars3CenterLeftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <Bars3CenterLeftIcon className="w-8 h-8" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral text-neutral-content rounded-box w-fit"
          >
            <li>
              <Link
                href={"/developer"}
                className={`flex flex-row ${
                  pathName === "/developer"
                    ? "border-l-2 border-secondary rounded-l-none"
                    : ""
                }`}
              >
                <CodeBracketIcon className={"w-6 h-6"} />
                <p className="text-lg">Developer</p>
              </Link>
            </li>
            <li>
              <Link
                href={"/photographer"}
                className={`flex flex-row ${
                  pathName === "/photographer"
                    ? "border-l-2 border-secondary rounded-l-none"
                    : ""
                }`}
              >
                <CameraIcon className="w-6 h-6" />
                <p className="text-lg">Photographer</p>
              </Link>
            </li>
            <li>
              <Link
                href={"/assets/files/resume.pdf"}
                className="flex flex-row"
                target="_blank"
              >
                <DocumentTextIcon className="w-6 h-6" />
                <p className="text-lg">Resume</p>
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-xl md:text-3xl font-medium">Juan Ramirez</p>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 rounded-box bg-base-300 text-base-content">
          <li>
            <Link
              href={"/developer"}
              className={`tooltip tooltip-bottom ${
                pathName === "/developer"
                  ? "border-b-2 border-secondary rounded-b-none"
                  : ""
              }`}
              data-tip="developer"
            >
              <CodeBracketIcon className="w-6 h-6" />
            </Link>
          </li>
          <li className="relative">
            <Link
              href={"/photographer"}
              className={`tooltip tooltip-bottom ${
                pathName === "/photographer"
                  ? "border-b-2 border-secondary rounded-b-none"
                  : ""
              }`}
              data-tip="photographer"
            >
              <CameraIcon className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link
              href={"/assets/files/resume.pdf"}
              className="tooltip tooltip-bottom"
              data-tip="resume"
              target="_blank"
            >
              <DocumentTextIcon className="w-6 h-6" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
