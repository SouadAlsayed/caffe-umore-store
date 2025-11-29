function Section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="my-32 flex flex-col items-center">{children}</section>
  );
}

export default Section;
