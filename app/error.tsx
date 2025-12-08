"use client";
import Section from "./_components/Section";
import SectionHeading from "./_components/SectionHeading";
interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="h-screen flex justify-center items-center">
      <Section>
        <SectionHeading heading="Something went wrong!" />
        <p className="text-gray-600 text-center mb-12 md:px-40">
          {error.message}
        </p>

        <button
          className="w-fit flex items-center justify-between px-12 py-3 rounded-3xl text-white sm:text-lg font-medium bg-button-accent hover:bg-button-accent-hover transition-all duration-300 hover:scale-105"
          onClick={reset}
        >
          Try again
        </button>
      </Section>
    </main>
  );
}
