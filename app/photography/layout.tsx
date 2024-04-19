import NavSection from "./NavSection";

export default function PhotographyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className="w-screen min-h-screen h-fit lg:h-screen flex flex-col lg:flex-row"
      data-theme="pastel"
    >
      <NavSection />
      {children}
    </main>
  );
}
