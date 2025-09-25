export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header>
        <h1 className="text-2xl font-bold">Product Details</h1>
      </header>
      {children}

    </div>
  );
}
