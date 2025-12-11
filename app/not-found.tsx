import Link from 'next/link';
import Section from './_components/Section';
import SectionHeading from './_components/SectionHeading';

function NotFound() {
  return (
    <main className="flex h-screen items-center justify-center">
      <Section>
        <SectionHeading heading="Oops! Page Not Found" />
        <p className="mb-12 text-center text-gray-600 md:px-40">
          We can&apos;t seem to find the page you&apos;re looking for. The link may be broken, or
          the page may have been removed.Let&apos;s get you back on track.
        </p>
        <Link href="/">
          <button className="bg-button-accent hover:bg-button-accent-hover flex w-fit items-center justify-between rounded-3xl px-12 py-3 font-medium text-white transition-all duration-300 hover:scale-105 sm:text-lg">
            Go to Home Page
          </button>
        </Link>
      </Section>
    </main>
  );
}

export default NotFound;
