'use client';
import Section from './_components/Section';
import SectionHeading from './_components/SectionHeading';
interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="flex h-screen items-center justify-center">
      <Section>
        <SectionHeading heading="Something went wrong!" />
        <p className="mb-12 text-center text-gray-600 md:px-40">{error.message}</p>

        <button
          className="bg-button-accent hover:bg-button-accent-hover flex w-fit items-center justify-between rounded-3xl px-12 py-3 font-medium text-white transition-all duration-300 hover:scale-105 sm:text-lg"
          onClick={reset}
        >
          Try again
        </button>
      </Section>
    </main>
  );
}
