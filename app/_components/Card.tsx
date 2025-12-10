import { Product } from "@/types/Product";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";

interface CardProps {
  product: Product;
}

function Card({ product }: CardProps) {
  const {
    name,
    image_url: image,
    description,
    product_variants: variants,
  } = product;

  const [{ price }] = variants;

  return (
    <div className="w-full max-w-[300px] mx-auto bg-white rounded-2xl py-6 px-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative">
      {/* Image */}
      <div className="relative w-full h-70 md:h-90 rounded-xl overflow-hidden mb-4">
        <Image
          src={image}
          alt={name}
          fill
          quality={100}
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between items-center text-center gap-2 px-2">
        <h3 className="font-semibold text-lg ">{name}</h3>
        <p className="text-sm text-gray-600">
          {description.split(" ").slice(0, 7).join(" ") + "..."}
        </p>
        <div className="mt-auto w-full flex justify-around items-center gap-2">
          <p className="font-semibold text-coffee-800">{price}.00 LE</p>

          {/* Favourite */}
          <button className="group">
            <div className="p-1.5 rounded-lg border border-gray-300 bg-gray-50">
              <Heart
                size={20}
                className="font-bold stroke-current fill-transparent text-coffee-600
                group-hover:fill-color-red group-hover:stroke-color-red 
                transition-colors duration-200"
              />
            </div>
          </button>
        </div>

        <button className="w-full flex items-center justify-center bg-button-primary hover:bg-button-primary-hover rounded-lg text-white py-2 transition">
          Select Options
        </button>
      </div>
    </div>
  );
}

export default Card;
