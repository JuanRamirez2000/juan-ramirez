export default function AboutMe() {
  return (
    <>
      <div className="flex flex-row w-full ">
        <h1 className="text-5xl">Juan Ramirez</h1>
      </div>
      <div className="flex flex-row gap-2">
        <button className="px-3 py-2 rounded-lg bg-sky-400 border-2 border-sky-800 transition-transform hover:scale-105 hover:bg-sky-600">
          Full Stack Engineer
        </button>
        <button className="px-3 py-2 rounded-lg bg-emerald-400 border-2 border-emerald-800 transition-transform hover:scale-105 hover:bg-emerald-600">
          Photographer
        </button>
      </div>
      <p className="text-2xl w-full md:w-4/5 lg:w-2/3">
        I like to play with websites, take pretty pics, and mess around with
        things
      </p>
    </>
  );
}
