import Link from 'next/link';
import { getProducts } from '../_lib/data-service';

import { Bodoni_Moda } from 'next/font/google';
import ShopCollection from '../_components/ShopCollection';

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
});

export default async function Page() {
  const products = await getProducts();

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
        <h2 className={`${bodoniModa.className} py-6 text-4xl font-bold`}>Our Coffee Collection</h2>

        <p className="mb-2 text-gray-600">
          Explore our curated selection of premium coffee crafted for every taste.
        </p>

        <p className="text-warning-text mb-12 text-sm italic">
          *All products and displayed prices are for 250g size.
        </p>
      </div>

      {/* Shop */}
      <ShopCollection products={products} />
    </>
  );
}
