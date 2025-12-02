import { MoveRight } from "lucide-react";
import Cards from "./_components/Cards";
import HeroSection from "./_components/HeroSection";
import Section from "./_components/Section";
import CategoryCards from "./_components/CategoryCards";
import { Bodoni_Moda } from "next/font/google";
import SectionHeading from "./_components/SectionHeading";
import SectionP from "./_components/SectionP";
import Image from "next/image";
import QualityCards from "./_components/QualityCards";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
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

        <button className="mt-12 flex items-center justify-between gap-4 px-12 py-3 rounded-3xl text-button-primary border-button-primary border-2 sm:text-lg font-medium hover:bg-coffee-200 transition-all duration-300 hover:scale-105">
          View All Products
          <MoveRight size={20} />
        </button>
      </Section>

      {/* Quality Section */}
      <Section>
        <div className="flex justify-center gap-10 lg:gap-20">
          <div className="flex flex-col justify-center">
            <h2
              className={`${bodoniModa.className} font-bold text-4xl py-6 text-center md:text-start`}
            >
              We care about the quality of our products
            </h2>
            <p className="text-gray-600 mb-12 text-center md:text-start">
              Drinking coffee is one of the things you do every day. Here, you
              can spend a long and comfortable time with our workspace
              facilities.
            </p>

            <QualityCards />

            <button className="w-fit mt-12 flex items-center justify-between gap-4 px-12 py-3 rounded-3xl text-white sm:text-lg font-medium bg-button-accent hover:bg-button-accent-hover transition-all duration-300 hover:scale-105">
              Discover Our Story
              <MoveRight size={20} />
            </button>
          </div>

          <div className="relative w-[300px] h-screen hidden md:block">
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
