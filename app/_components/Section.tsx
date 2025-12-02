interface SectionProps {
  children: React.ReactNode;
  fullScreen?: boolean;
}

function Section({ children, fullScreen = false }: SectionProps) {
  return (
    <section
      className={
        fullScreen
          ? "my-32 flex flex-col items-center relative right-1/2 left-1/2 -ml-[50vw] -mr-[50vw] w-screen h-screen overflow-hidden "
          : "my-32 flex flex-col items-center "
      }
    >
      {children}
    </section>
  );
}

export default Section;
