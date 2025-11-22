function IconCircle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-7 h-7 bg-coffee-200 hover:bg-coffee-300 p-1 rounded-full flex justify-center items-center">
      {children}
    </div>
  );
}

export default IconCircle;
