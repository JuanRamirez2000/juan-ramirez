import {
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="w-screen lg:w-[64rem] h-screen bg-neutral flex flex-col-reverse lg:flex-row p-6">
      <section className="w-3/5 h-full">
        <article>
          <h2 className="text-4xl font-medium">
            <span className="inline-flex px-2">
              <AcademicCapIcon className="size-8" />
            </span>
            Education
          </h2>
          <div>
            <h3 className="text-xl font-medium">
              Bachelors in Science, Computer Science
            </h3>
            <p>California State University - Fullerton / 2018 - 2022</p>
          </div>
        </article>
        <article>
          <h2 className="text-4xl font-medium">
            <span className="inline-flex px-2">
              <BriefcaseIcon className="size-8" />
            </span>
            Experience
          </h2>
          <ul>
            <li>
              <h3 className="text-lg font-medium">TeammateME</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                consectetur eius quae, totam earum dolor.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-medium">Relion</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                consectetur eius quae, totam earum dolor.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-medium">CSUF</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                consectetur eius quae, totam earum dolor.
              </p>
            </li>
          </ul>
        </article>
        <article>
          <h2 className="text-4xl font-medium">
            <span className="inline-flex px-2">
              <CodeBracketIcon className="size-8" />
            </span>
            Projects
          </h2>
          <ul>
            <li>
              <h3>Roadtrip Music</h3>
              <p></p>
            </li>
            <li>
              <h3>Tina Portfolio</h3>
              <p></p>
            </li>
          </ul>
        </article>
      </section>
      <section className="w-2/5 h-full flex flex-col">
        <article className="flex flex-col w-full justify-center">
          <h1>Juan Ramirez</h1>
          <h2>Frontend Web Developer</h2>
          <div className="size-32" />
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aut
            a quisquam eaque voluptatibus deleniti at iure quia quidem labore
            sit quibusdam nostrum adipisci nesciunt praesentium pariatur
            assumenda quis neque?
          </p>
        </article>
        <article>
          <h3>Languages</h3>
          <ul>
            <li>
              <p>English</p>
            </li>
            <li>
              <p>Spanish</p>
            </li>
          </ul>
        </article>
        <article>
          <h3>Hobbies</h3>
          <ul>
            <li>
              <p>Chess</p>
            </li>
            <li>
              <p>Photography</p>
            </li>
            <li>
              <p>Programming</p>
            </li>
            <li>
              <p>Powerlifting</p>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
