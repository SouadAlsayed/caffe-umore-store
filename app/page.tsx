import Image from "next/image";
import homeImg from "@/public/homeImg.jpg";
import { ArrowRight, Coffee, Star, Users } from "lucide-react";

export default function Page() {
  return (
    <section className="flex gap-36 xl:gap-48 relative right-1/2 left-1/2 -ml-[50vw] -mr-[50vw] w-screen h-screen overflow-hidden">
      {/* Left Content Section */}
      <div className="flex-1 flex items-center justify-center px-8 pt-[73px] text-center sm:text-start">
        <div className="w-full max-w-[520px] flex justify-center flex-col gap-10 leading-[1.1]">
          <h1 className="font-bold text-4xl sm:text-6xl">
            The best coffee bean for your every cup of your coffee
          </h1>

          <p className="text-gray-600 sm:text-lg leading-relaxed">
            Discover rich flavors and fresh aroma in every cup. Our beans are
            crafted with care for true coffee lovers.
          </p>

          <div className="flex items-center justify-center  sm:justify-start gap-6 flex-wrap">
            <button className="group px-12 py-3 rounded-3xl bg-button-primary hover:bg-button-primary-hover text-coffee-50 sm:text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2">
              Order Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-12 py-3 rounded-3xl text-button-primary border-button-primary border-2 sm:text-lg font-medium hover:bg-coffee-200 transition-all duration-300 hover:scale-105">
              Explore More
            </button>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border-2 border-gray-300 hover:border-button-primary transition-colors duration-300 cursor-pointer">
              <Coffee className="w-5 h-5 text-button-primary" />
              <span className="text-sm font-semibold text-gray-800">
                Quality Taste
              </span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border-2 border-gray-300 hover:border-button-primary transition-colors duration-300 cursor-pointer">
              <Star className="w-5 h-5 text-button-primary" />
              <span className="text-sm font-semibold text-gray-800">
                Top Rated
              </span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border-2 border-gray-300 hover:border-button-primary transition-colors duration-300 cursor-pointer">
              <Users className="w-5 h-5 text-button-primary" />
              <span className="text-sm font-semibold text-gray-800">
                Community
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <aside className="w-[300px] xl:w-[400px] h-screen bg-coffee-600 sticky top-0 right-0 -z-10 hidden lg:block">
        <div
          className="absolute top-[calc(50%-175px+36px)] left-[calc(50%-175px-150px)] w-[350px]
        xl:top-[calc(50%-225px+36px)] xl:left-[calc(50%-225px-200px)] xl:w-[450px]"
        >
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
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-2 bg-white/60 rounded-full" />
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}
