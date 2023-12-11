import DeveloperHero from "./DeveloperHero";
import WorkTimeline from "./WorkTimeline";

export default function Developer() {
  return (
    <main>
      <section className="h-screen">
        <div className="h-full w-full flex flex-col items-center justify-center">
          <DeveloperHero />
        </div>
        <WorkTimeline />
      </section>
    </main>
  );
}
