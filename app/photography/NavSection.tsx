"use client";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment } from "react";

export default function NavSection() {
  return (
    <nav className="fixed z-20 flex flex-row lg:static lg:flex-col w-full lg:w-1/4 lg:h-full p-4 px-8 lg:px-0 lg:pl-20 bg-neutral lg:bg-neutral text-neutral-content max-w-full">
      <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight grow lg:grow-0">
        Juan Ramirez
      </h1>
      <ul className="flex-col hidden lg:flex">
        <Link
          href={"/photography"}
          className="py-2 transition-all hover:scale-105 duration-300  text-lg"
        >
          <li>Home</li>
        </Link>

        <Link
          href={"https://www.instagram.com/juan_r_photos/"}
          target="_blank"
          className="py-2 transition-all hover:scale-105 duration-300 text-lg"
        >
          <li>Contact</li>
        </Link>
      </ul>
      <Menu as="div" className="lg:hidden ">
        <Menu.Button>
          <Bars3Icon className="size-7" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transform transition ease-in duration-200"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-out duration-200"
          leaveFrom="-translate-x-0 "
          leaveTo="-translate-x-full"
        >
          <Menu.Items className="absolute left-0 z-10 w-1/3 h-screen pl-8  text-neutral-content bg-neutral">
            <Menu.Item>
              <Link
                href={"/photography"}
                className="flex items-center w-full text-lg py-2"
              >
                Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                href={"https://www.instagram.com/juan_r_photos/"}
                className="flex items-center w-full text-lg py-2"
                target="_blank"
              >
                Contact
              </Link>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
}
