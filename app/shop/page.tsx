import Link from "next/link";
import SideFilterBar from "../_components/SideFilterBar";
import { getProducts } from "../_lib/data-service";
import Card from "../_components/Card";

import { Bodoni_Moda } from "next/font/google";
import SortSelection from "../_components/SortSelection";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
});

export default async function Page() {
  const products = await getProducts();
  const regularProducts = products.filter((p) => p.category == "regular");

  return (
    <>
      {/* Path */}
      <div className="mt-8 pt-[73px]">
        <Link href="/">Home</Link>
        <span> / </span>
        <Link href="/shop">Shop</Link>
      </div>

      {/* Heading */}
      <div>
        <h2 className={`${bodoniModa.className} font-bold text-4xl py-6`}>
          Our Coffee Collection
        </h2>

        <p className="text-gray-600 mb-12">
          Explore our curated selection of premium coffee crafted for every
          taste.
        </p>
      </div>

      {/* Shop */}
      <div className="mb-32">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <SideFilterBar />

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
              <p className="text-gray-600">
                Showing 1-3 of {regularProducts.length} results
              </p>

              <SortSelection />
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {regularProducts.map((p) => (
                <Card product={p} key={p.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
