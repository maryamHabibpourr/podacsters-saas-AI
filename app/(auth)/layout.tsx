
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="relative flex bg-black-3">
          {children}
      </main>
    );
  }
  