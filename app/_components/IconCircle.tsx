function IconCircle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-8 h-8 bg-coffee-200 hover:bg-coffee-300 transition-colors p-1 rounded-full flex justify-center items-center">
      {children}
    </div>
  );
}

export default IconCircle;
