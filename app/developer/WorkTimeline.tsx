import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function WorkTimeline() {
  return (
    <div className="flex flex-col gap-12 items-center h-full w-full relative">
      <h2 className="text-center md:text-left text-3xl md:text-5xl">
        My <span className="text-primary">work experience</span> in a nutshell
      </h2>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <CheckCircleIcon className="h-6 w-6 text-primary" />
          </div>
          <div className="timeline-start md:text-end bg-neutral text-neutral-content rounded-xl p-4">
            <time className="font-mono italic">Jan 2021 - Sep 2022</time>
            <div className="text-lg md:text-2xl font-black underline decoration-secondary">
              Research Assistant - CSUF
            </div>
            <p className="max-w-md md:text-lg ">
              At California State University - Fullerton (CSUF) I was in charge
              of creating and maintaining a code base to handle tasks such as
              downloading and validating data, testing different evolutionary
              models, analyzing the performance of these models, and visualize
              the team&apos;s research findings
            </p>
          </div>
          <hr className="bg-secondary" />
        </li>
        <li>
          <hr className="bg-secondary" />
          <div className="timeline-middle">
            <CheckCircleIcon className="h-6 w-6 text-primary" />
          </div>
          <div className="timeline-end md:text-end bg-neutral text-neutral-content rounded-xl p-4">
            <time className="font-mono italic">Jan 2023 - October 2023</time>
            <div className="text-lg md:text-2xl font-black underline decoration-secondary">
              Fullstack Developer - Relion
            </div>
            <p className="max-w-md md:text-lg">
              At Relion I helped design and develop a custom dashboard
              connecting 3rd party APIs alongside a database the company had. I
              also built the foundations for a smart-search method that
              retrieves relevant ticket history based on the tags that are
              associated with a current ticket. Allowing helpdesk to see
              possible solutions and relevant notes based on previously solved
              tickets.
            </p>
          </div>
          <hr className="bg-secondary" />
        </li>
        <li>
          <hr className="bg-secondary" />
          <div className="timeline-middle">
            <CheckCircleIcon className="h-6 w-6 text-primary" />
          </div>
          <div className="timeline-start md:text-end bg-primary text-primary-content rounded-xl p-4 ">
            <time className="font-mono italic">October 2023 - Present</time>
            <div className="text-lg md:text-2xl font-black underline">
              Frontend Web Developer - TeammateMe
            </div>
            <p className="max-w-md md:text-lg">
              My focus with TeammateMe was to help develop new features for the
              company. I focused mainly on technical problems while implementing
              UI designed by the design team. Currently, my most impactful
              projects were setting up Mixpanel to track users across the app
              for AB testing and creating features for an internal admin panel
              used by the company to interface with their production database.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
