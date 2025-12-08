import Link from "next/link";
import Section from "./_components/Section";
import SectionHeading from "./_components/SectionHeading";

function NotFound() {
  return (
    <main className="h-screen flex justify-center items-center">
      <Section>
        <SectionHeading heading="Oops! Page Not Found" />
        <p className="text-gray-600 text-center mb-12 md:px-40">
          We can&apos;t seem to find the page you&apos;re looking for. The link
          may be broken, or the page may have been removed.Let&apos;s get you
          back on track.
        </p>
        <Link href="/">
          <button className="w-fit flex items-center justify-between px-12 py-3 rounded-3xl text-white sm:text-lg font-medium bg-button-accent hover:bg-button-accent-hover transition-all duration-300 hover:scale-105">
            Go to Home Page
          </button>
        </Link>
      </Section>
    </main>
  );
}

export default NotFound;
