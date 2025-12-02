import { Product } from "@/types/Product";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import IconCircle from "./IconCircle";

interface CardProps {
  product: Product;
}

function Card({ product }: CardProps) {
  const { name, image_url: image } = product;

  return (
    <div className="w-full max-w-[300px] mx-auto bg-white rounded-2xl py-6 px-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative">
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

        <div className="mt-auto w-full flex justify-around items-center ">
          <p className="font-semibold text-gray-800">120.00 LE</p>

          {/* Favourite */}
          <button className="group">
            <IconCircle>
              <Heart
                size={20}
                className="font-bold stroke-current fill-transparent 
              group-hover:fill-color-red group-hover:stroke-color-red 
              transition-colors duration-200"
              />
            </IconCircle>
          </button>
        </div>

        <button className="w-full flex items-center justify-center gap-2 bg-button-accent hover:bg-button-accent-hover rounded-xl text-white px-4 py-2 transition">
          <ShoppingCart size={20} />
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Card;
