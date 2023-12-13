import DeveloperHero from "./DeveloperHero";
import ProjectSection from "./ProjectSection";
import WorkTimeline from "./WorkTimeline";

export default function Developer() {
  return (
    <main className="h-fit bg-base-200">
      <div className=" h-screen w-full">
        <DeveloperHero />
      </div>
      <div className="md:h-screen w-full h-fit">
        <WorkTimeline />
      </div>
      <div className="h-screen w-full">
        <ProjectSection />
      </div>
    </main>
  );
}
