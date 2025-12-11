import { MoveRight } from 'lucide-react';
import Cards from './_components/Cards';
import HeroSection from './_components/HeroSection';
import Section from './_components/Section';
import CategoryCards from './_components/CategoryCards';
import { Bodoni_Moda } from 'next/font/google';
import SectionHeading from './_components/SectionHeading';
import SectionP from './_components/SectionP';
import Image from 'next/image';
import QualityCards from './_components/QualityCards';
import Link from 'next/link';

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
});

export default function Page() {
  return (
    <>
      <HeroSection />

      {/* Category Section */}
      <Section fullScreen>
        <SectionHeading heading="Our Coffee Categories" />

        <SectionP
          p=" A seamless introduction to our coffee categories, each offering a
          distinct experience"
        />

        <CategoryCards fontFamily={bodoniModa.className} />
      </Section>

      {/* Shop Section */}
      <Section>
        <SectionHeading heading="Our Coffee Selection" />

        <SectionP
          p=" Browse our full selection of freshly roasted coffee in all flavors and
          roast levels"
        />

        <Cards />

        <Link href="/shop">
          <button className="text-button-primary border-button-primary hover:bg-coffee-200 mt-12 flex items-center justify-between gap-4 rounded-3xl border-2 px-12 py-3 font-medium transition-all duration-300 hover:scale-105 sm:text-lg">
            View All Products
            <MoveRight size={20} />
          </button>
        </Link>
      </Section>

      {/* Quality Section */}
      <Section>
        <div className="flex justify-center gap-10 lg:gap-20">
          <div className="flex flex-col justify-center">
            <h2
              className={`${bodoniModa.className} py-6 text-center text-4xl font-bold md:text-start`}
            >
              We care about the quality of our products
            </h2>
            <p className="mb-12 text-center text-gray-600 md:text-start">
              Drinking coffee is one of the things you do every day. Here, you can spend a long and
              comfortable time with our workspace facilities.
            </p>

            <QualityCards />

            <button className="bg-button-accent hover:bg-button-accent-hover mt-12 flex w-fit items-center justify-between gap-4 rounded-3xl px-12 py-3 font-medium text-white transition-all duration-300 hover:scale-105 sm:text-lg">
              Discover Our Story
              <MoveRight size={20} />
            </button>
          </div>

          <div className="relative hidden h-screen w-[300px] md:block">
            <Image
              src="/q3.jpg"
              alt="Quality Section Image"
              fill
              quality={100}
              className="object-cover"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
