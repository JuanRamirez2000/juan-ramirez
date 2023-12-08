"use client";

import {
  CodeBracketIcon,
  CameraIcon,
  EnvelopeIcon,
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
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Bars3CenterLeftIcon className="w-6 h-6" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-16"
          >
            <li>
              <Link
                href={"/developer"}
                className={`${pathName === "/developer" ? "bg-secondary" : ""}`}
              >
                <CodeBracketIcon className={"w-6 h-6"} />
              </Link>
            </li>
            <li>
              <Link
                href={"/photographer"}
                className={`${
                  pathName === "/photographer" ? "bg-secondary" : ""
                }`}
              >
                <CameraIcon className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <EnvelopeIcon className="w-6 h-6" />
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-3xl font-medium">Juan Ramirez</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href={"/developer"}
              className={`${pathName === "/developer" ? "bg-secondary" : ""}`}
            >
              <CodeBracketIcon className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link
              href={"/photographer"}
              className={`${
                pathName === "/photographer" ? "bg-secondary" : ""
              }`}
            >
              <CameraIcon className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <EnvelopeIcon className="w-6 h-6" />
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
