export default function LinksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-screen  lg:h-screen" data-theme="pastel">
      {children}
    </main>
  );
}
