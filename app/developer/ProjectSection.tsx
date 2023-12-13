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
    <div className="flex flex-col gap-6 w-full h-full items-center justify-center">
      <h2 className="text-center md:text-left text-3xl md:text-5xl">
        Some <span className="text-primary">projects</span> that I am working on
      </h2>
      <div className="w-4/5 h-4/6 flex flex-row justify-center">
        <ul className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-3 w-full h-full max-w-6xl gap-6">
          {projectsData.map((project) => (
            <motion.li
              key={project.id}
              className={`rounded-xl p-6 flex flex-col gap-4
                ${
                  selectedProject.id === project.id
                    ? "bg-primary text-primary-content md:col-span-1 md:row-span-full grow"
                    : "hover:bg-secondary hover:text-secondary-content bg-neutral text-neutral-content md:col-start-2 md:col-span-1 md:row-span-1 cursor-pointer grow-0"
                }
                `}
              onClick={() => setSelectedProject(project)}
              layout
            >
              <h1
                className={
                  selectedProject.id === project.id
                    ? "text-xl md:text-4xl tracking-tight font-semibold underline decoration-secondary"
                    : "md:text-2xl"
                }
              >
                {project.name}
              </h1>
              <p
                className={
                  selectedProject.id === project.id ? "md:text-lg" : "hidden"
                }
              >
                {project.description}
              </p>
              <ul className="flex flex-row flex-wrap items-center gap-1">
                {project.badges?.map((badge, index) => (
                  <p
                    key={index}
                    className={`text-sm md:text-base px-1.5 py-0.5 rounded-2xl ${grabBadgeColorFromVariant(
                      badge.variant
                    )}`}
                  >
                    {badge.name}
                  </p>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const grabBadgeColorFromVariant = (variant: string) => {
  switch (variant) {
    case "Frontend":
      return "bg-info text-info-content";
    case "Backend":
      return "bg-warning text-warning-content";
    case "Infra":
      return "bg-error text-error-content";
  }
};

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
        name: "TypeScript",
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
        name: "AuthJS",
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
        name: "TypeScript",
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
        name: "AuthJS",
        variant: "Backend",
      },
      {
        name: "Vercel",
        variant: "Infra",
      },
      {
        name: "PrismaORM",
        variant: "Infra",
      },
      {
        name: "Supabase",
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
        name: "TypeScript",
        variant: "Frontend",
      },
      {
        name: "TailwindCSS",
        variant: "Frontend",
      },
      {
        name: "Framer Motion",
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
    name: "Frontend Mentor Challenges",
    description:
      "A website to showcase your music taste as a beautiful landscape gradient",
    badges: [
      {
        name: "ReactJS",
        variant: "Frontend",
      },
      {
        name: "TypeScript",
        variant: "Frontend",
      },
      {
        name: "Svelte",
        variant: "Frontend",
      },
      {
        name: "SCSS",
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
];
