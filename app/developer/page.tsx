import DeveloperHero from "./DeveloperHero";
import ProjectSection from "./ProjectSection";
import WorkTimeline from "./WorkTimeline";

export default function Developer() {
  return (
    <main>
      <section className="h-screen ">
        <div className="h-full w-full">
          <DeveloperHero />
        </div>
        <div className="md:h-full w-full h-fit">
          <WorkTimeline />
        </div>
        <div className="h-full w-full">
          <ProjectSection />
        </div>
      </section>
    </main>
  );
}
