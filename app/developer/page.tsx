import DeveloperHero from "./DeveloperHero";
import WorkTimeline from "./WorkTimeline";

export default function Developer() {
  return (
    <main>
      <section className="h-screen">
        <DeveloperHero />
        <WorkTimeline />
      </section>
    </main>
  );
}
