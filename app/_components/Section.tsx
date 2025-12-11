interface SectionProps {
  children: React.ReactNode;
  fullScreen?: boolean;
}

function Section({ children, fullScreen = false }: SectionProps) {
  return (
    <section
      className={
        fullScreen
          ? 'relative right-1/2 left-1/2 my-32 -mr-[50vw] -ml-[50vw] flex h-screen w-screen flex-col items-center overflow-hidden'
          : 'my-32 flex flex-col items-center'
      }
    >
      {children}
    </section>
  );
}

export default Section;
