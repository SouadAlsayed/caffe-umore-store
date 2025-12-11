import { Product } from '@/types/Product';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import { formatPrice } from '../_lib/helper';

interface CardProps {
  product: Product;
}

function Card({ product }: CardProps) {
  const { name, image_url: image, description, product_variants: variants } = product;

  const [{ price }] = variants;

  return (
    <div className="relative mx-auto w-full max-w-[300px] transform rounded-2xl bg-white px-6 py-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative mb-4 h-70 w-full overflow-hidden rounded-xl md:h-90">
        <Image src={image} alt={name} fill quality={100} className="object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-between gap-2 px-2 text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">
          {description.split(' ').slice(0, 7).join(' ') + '...'}
        </p>
        <div className="mt-auto flex w-full items-center justify-around gap-2">
          <p className="text-coffee-800 font-semibold">{formatPrice(price)}.00</p>

          {/* Favourite */}
          <button className="group">
            <div className="rounded-lg border border-gray-300 bg-gray-50 p-1.5">
              <Heart
                size={20}
                className="text-coffee-600 group-hover:fill-color-red group-hover:stroke-color-red fill-transparent stroke-current font-bold transition-colors duration-200"
              />
            </div>
          </button>
        </div>

        <button className="bg-button-primary hover:bg-button-primary-hover flex w-full items-center justify-center rounded-lg py-2 text-white transition">
          Select Options
        </button>
      </div>
    </div>
  );
}

export default Card;
