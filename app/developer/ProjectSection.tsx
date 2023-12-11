"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

type BadgeVariants = "Frontend" | "Backend" | "Infra";

type Badge = {
  name: string;
  variant: BadgeVariants;
};

type ProjectType = {
  id: number;
  name: string;
  description: string;
  badges?: Badge[];
  links?: string;
};

type Projects = ProjectType[];

export default function ProjectSection() {
  const [largeCardID, setLardCardID] = useState<number>(1);

  const largeCard = projectsData.find((project) => project.id === largeCardID);
  const smallCards = projectsData.filter(
    (project) => project.id !== largeCardID
  );

  return (
    <div className="flex flex-col gap-6 w-full h-full relative items-center justify-center">
      <h2 className="text-4xl md:text-5xl">
        Some <span className="text-primary">projects</span> that I am working on
      </h2>
      <div className="w-4/5 h-4/5 flex flex-row justify-center">
        <ul className="grid grid-cols-1 grid-rows-5 md:grid-cols-2 md:grid-rows-3 w-full h-full max-w-8xl gap-6">
          <li className="md:row-span-3 row-span-2 col-span-1  p-8 bg-primary rounded-lg text-primary-content">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-3xl font-semibold underline decoration-secondary">
                {largeCard?.name}
              </h1>
              <Link href={""} target="_blank">
                <ArrowTopRightOnSquareIcon className="h-10 w-10 bg-secondary p-2 rounded-lg hover:text-secondary-content hover:scale-125 transition duration-150 " />
              </Link>
            </div>
          </li>
          {smallCards.map((project) => {
            return (
              <li
                className="row-span-1 col-span-1 bg-neutral text-netrual-content rounded-lg p-8 cursor-pointer hover:text-secondary-content hover:bg-secondary transition-all hover:scale-105"
                key={project.id}
                onClick={() => setLardCardID(project.id)}
              >
                {project.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const projectsData: Projects = [
  {
    id: 1,
    name: "Roadtrip Music",
    description:
      "A tool that combines Google Maps data alongside the Spotify Web API to generate songs based on the time it takes to get from point A to point B",
    badges: [
      {
        name: "ReactJS",
        variant: "Frontend",
      },
      {
        name: "TailwindCSS",
        variant: "Frontend",
      },
      {
        name: "DaisyUI",
        variant: "Frontend",
      },
      {
        name: "NextJS",
        variant: "Backend",
      },
      {
        name: "Google Maps API",
        variant: "Infra",
      },
      {
        name: "Spotify Web API",
        variant: "Infra",
      },
      {
        name: "Vercel",
        variant: "Infra",
      },
    ],
  },
  {
    id: 4,
    name: "Couple's Dashboard",
    description:
      "A website to bring together couples by giving them a dashboard to store notes such as date plans, events, gift ideas, and bucket lists (currently refactoring to a different backend)",
    badges: [
      {
        name: "ReactJS",
        variant: "Frontend",
      },
      {
        name: "TailwindCSS",
        variant: "Frontend",
      },
      {
        name: "NextJS",
        variant: "Backend",
      },
      {
        name: "Vercel",
        variant: "Infra",
      },
    ],
  },
  {
    id: 2,
    name: "Tina's Website",
    description: "A website built for the amazing model Tina",
    badges: [
      {
        name: "ReactJS",
        variant: "Frontend",
      },
      {
        name: "TailwindCSS",
        variant: "Frontend",
      },
      {
        name: "NextJS",
        variant: "Backend",
      },
      {
        name: "Vercel",
        variant: "Infra",
      },
    ],
  },
  {
    id: 3,
    name: "Spotify Landscapes",
    description:
      "A website to showcase your music taste as a beautiful landscape gradient",
    badges: [
      {
        name: "ReactJS",
        variant: "Frontend",
      },
      {
        name: "TailwindCSS",
        variant: "Frontend",
      },
      {
        name: "NextJS",
        variant: "Backend",
      },
      {
        name: "Spotify Web API",
        variant: "Infra",
      },
      {
        name: "Vercel",
        variant: "Infra",
      },
    ],
  },
];
