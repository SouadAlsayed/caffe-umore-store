function IconCircle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-coffee-200 hover:bg-coffee-300 flex h-8 w-8 items-center justify-center rounded-full p-1 transition-colors">
      {children}
    </div>
  );
}

export default IconCircle;
