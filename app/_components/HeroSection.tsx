import Image from 'next/image';
import homeImg from '@/public/homeImg.jpg';
import { ArrowRight, Coffee, Star, Users } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative right-1/2 left-1/2 -mr-[50vw] -ml-[50vw] flex h-screen w-screen gap-36 overflow-hidden shadow-lg xl:gap-48">
      {/* Left Content Section */}
      <div className="flex flex-1 items-center justify-center px-8 pt-[73px] text-center sm:text-start">
        <div className="flex w-full max-w-[520px] flex-col justify-center gap-5 leading-[1.1] sm:gap-10">
          <h1 className="text-4xl font-bold sm:text-6xl">
            The best coffee bean for your every cup of your coffee
          </h1>

          <p className="leading-relaxed text-gray-600 sm:text-lg">
            Discover rich flavors and fresh aroma in every cup. Our beans are crafted with care for
            true coffee lovers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:justify-start">
            <button className="group bg-button-primary hover:bg-button-primary-hover text-coffee-50 flex items-center gap-2 rounded-3xl px-12 py-3 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg sm:text-lg">
              Order Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="text-button-primary border-button-primary hover:bg-coffee-200 rounded-3xl border-2 px-12 py-3 font-medium transition-all duration-300 hover:scale-105 sm:text-lg">
              Explore More
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
            <div className="hover:border-button-primary flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-gray-300 px-4 py-3 transition-colors duration-300">
              <Coffee className="text-button-primary h-5 w-5" />
              <span className="text-sm font-semibold text-gray-800">Quality Taste</span>
            </div>
            <div className="hover:border-button-primary flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-gray-300 px-4 py-3 transition-colors duration-300">
              <Star className="text-button-primary h-5 w-5" />
              <span className="text-sm font-semibold text-gray-800">Top Rated</span>
            </div>
            <div className="hover:border-button-primary flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-gray-300 px-4 py-3 transition-colors duration-300">
              <Users className="text-button-primary h-5 w-5" />
              <span className="text-sm font-semibold text-gray-800">Community</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <aside className="bg-coffee-600 sticky top-0 right-0 -z-10 hidden h-screen w-[300px] lg:block xl:w-[400px]">
        <div className="absolute top-[calc(50%-175px+36px)] left-[calc(50%-175px-150px)] w-[350px] xl:top-[calc(50%-225px+36px)] xl:left-[calc(50%-225px-200px)] xl:w-[450px]">
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <Image
              className="rounded-xl"
              src={homeImg}
              quality={100}
              alt="Premium coffee cup with latte art on wooden table"
              priority
              placeholder="blur"
            />
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/40 pt-2">
              <div className="h-2 w-1.5 rounded-full bg-white/60" />
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}

export default HeroSection;
