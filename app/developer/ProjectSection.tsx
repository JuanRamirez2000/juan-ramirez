"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
  const [selectedProject, setSelectedProject] = useState<ProjectType>(
    projectsData[0]
  );

  return (
    <div className="flex flex-col gap-6 w-full h-full relative items-center justify-center">
      <h2 className="text-4xl md:text-5xl">
        Some <span className="text-primary">projects</span> that I am working on
      </h2>
      <div className="w-4/5 h-4/6 flex flex-row justify-center">
        <ul className="grid grid-cols-1 grid-rows-5 md:grid-cols-2 md:grid-rows-3 w-full h-full max-w-6xl gap-6">
          {projectsData.map((project) => (
            <motion.li
              key={project.id}
              className={`rounded-xl p-6 flex flex-col gap-4
                ${
                  selectedProject.id === project.id
                    ? "bg-primary text-primary-content row-span-2 col-span-1 md:row-span-full"
                    : "bg-neutral text-neutral-content md:col-start-2 col-span-1 row-span-1 "
                }
                `}
              onClick={() => setSelectedProject(project)}
              layout
            >
              <h1
                className={
                  selectedProject.id === project.id
                    ? "text-4xl tracking-tight font-semibold underline decoration-secondary"
                    : "text-xl"
                }
              >
                {project.name}
              </h1>
              <p
                className={
                  selectedProject.id === project.id ? "text-lg" : "hidden"
                }
              >
                {project.description}
              </p>
            </motion.li>
          ))}
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
