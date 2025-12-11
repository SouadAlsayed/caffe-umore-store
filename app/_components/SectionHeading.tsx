import { Bodoni_Moda } from 'next/font/google';

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
});

function SectionHeading({ heading }: { heading: string }) {
  return (
    <h2 className={`${bodoniModa.className} py-6 text-center text-4xl font-bold`}>{heading}</h2>
  );
}

export default SectionHeading;
