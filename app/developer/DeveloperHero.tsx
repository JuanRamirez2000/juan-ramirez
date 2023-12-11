import Image from "next/image";

export default function DeveloperHero() {
  return (
    <div className="h-full w-full flex flex-col-reverse  lg:flex-row">
      <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex flex-col justify-start lg:justify-center text-center items-center relative">
        <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight">
          Hey! I&apos;m Juan!
        </h1>
        <p className="max-w-sm">
          I like to develop websites, take photos, and learn new things
        </p>
      </div>
      <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex flex-col items-center justify-center">
        <div className="relative h-4/6 w-4/6">
          <Image
            src={"/assets/hero-content/hero-developer.svg"}
            alt="Programming hero icon"
            fill={true}
          />
        </div>
      </div>
    </div>
  );
}
