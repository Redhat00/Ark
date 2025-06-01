export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen h-full bg-white w-full">
        {children}
    </main>
  )
}
