import NavSection from "./NavSection";

export default function PhotographyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className="w-screen h-screen flex flex-col lg:flex-row"
      data-theme="pastel"
    >
      <NavSection />
      <div className="h-full py-24 lg:py-12 w-full grow flex flex-col items-center overflow-auto">
        {children}
      </div>
    </main>
  );
}
