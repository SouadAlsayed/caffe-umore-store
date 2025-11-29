import Cards from "./_components/Cards";
import HeroSection from "./_components/HeroSection";
import Section from "./_components/Section";
import { Bodoni_Moda } from "next/font/google";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  return (
    <>
      <HeroSection />

      {/* Shop Section */}
      <Section>
        <h2 className={`${bodoniModa.className} font-bold text-4xl py-6`}>
          Shop
        </h2>

        <p className="text-gray-600 text-center mb-12">
          Browse our full selection of freshly roasted coffee in all flavors and
          roast levels
        </p>

        <Cards />
      </Section>
    </>
  );
}
