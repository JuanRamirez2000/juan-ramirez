import NavSection from "./NavSection";

export default function PhotographyLayout({
  children,
  photoModal,
}: Readonly<{
  children: React.ReactNode;
  photoModal: React.ReactNode;
}>) {
  return (
    <main
      className="w-screen min-h-screen h-fit lg:h-screen flex flex-col lg:flex-row"
      data-theme="pastel"
    >
      <NavSection />
      {children}
      {photoModal}
    </main>
  );
}
