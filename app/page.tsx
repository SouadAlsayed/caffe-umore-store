import { MoveRight } from "lucide-react";
import Cards from "./_components/Cards";
import HeroSection from "./_components/HeroSection";
import Section from "./_components/Section";
import CategoryCards from "./_components/CategoryCards";
import { Bodoni_Moda } from "next/font/google";
import SectionHeading from "./_components/SectionHeading";
import SectionP from "./_components/SectionP";

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
    </>
  );
}
