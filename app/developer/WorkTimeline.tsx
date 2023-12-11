import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function WorkTimeline() {
  return (
    <>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <CheckCircleIcon className="h-6 w-6 text-primary" />
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">Jan 2021 - Sep 2022</time>
            <div className="text-xl font-black underline decoration-secondary">
              Research Assistant - CSUF
            </div>
            <p className="max-w-md">
              At California State University - Fullerton (CSUF) I was in charge
              of creating and maintaining a code base to handle tasks such as
              downloading and validating data, testing different evolutionary
              models, analyzing the performance of these models, and visualize
              the team&apos;s research findings
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <CheckCircleIcon className="h-6 w-6 text-primary" />
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">Jan 2023 - October 2023</time>
            <div className="text-xl font-black underline decoration-secondary">
              Fullstack Developer - Relion
            </div>
            <p className="max-w-md">
              At Relion I helped design and develop a custom dashboard
              connecting 3rd party APIs alongside a database the company had. I
              also built the foundations for a smart-search method that
              retrieves relevant ticket history based on the tags that are
              associated with a current ticket. Allowing helpdesk to see
              possible solutions and relevant notes based on previous solved
              tickets.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <CheckCircleIcon className="h-6 w-6 text-primary" />
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">October 2023 - Present</time>
            <div className="text-xl font-black underline decoration-secondary">
              Frontend Web Developer - TeammateMe
            </div>
            <p className="max-w-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              culpa nisi reprehenderit adipisci, iste provident consequatur!
              Neque suscipit voluptas sunt vitae ex, rem facere fugit voluptates
              veniam, at, accusamus repellat?
            </p>
          </div>
        </li>
      </ul>
    </>
  );
}
