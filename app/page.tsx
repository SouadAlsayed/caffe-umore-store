import { MoveRight } from "lucide-react";
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
          Our Coffee Selection
        </h2>

        <p className="text-gray-600 text-center mb-12">
          Browse our full selection of freshly roasted coffee in all flavors and
          roast levels
        </p>

        <Cards />

        <button className="mt-12 flex items-center justify-between gap-4 px-12 py-3 rounded-3xl text-button-primary border-button-primary border-2 sm:text-lg font-medium hover:bg-coffee-200 transition-all duration-300 hover:scale-105">
          View All Products
          <MoveRight size={20} />
        </button>
      </Section>
    </>
  );
}
