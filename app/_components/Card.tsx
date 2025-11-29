import { Product } from "@/types/Product";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";

interface CardProps {
  product: Product;
}

function Card({ product }: CardProps) {
  const { name, description, image_url: image } = product;

  return (
    <div className="w-full max-w-[300px] mx-auto bg-white rounded-2xl py-6 px-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative">
      <button className="absolute top-3 right-3 transition group">
        <Heart
          size={20}
          className="font-bold stroke-current fill-transparent 
      group-hover:fill-error-text group-hover:stroke-error-text 
      transition-colors duration-200"
        />
      </button>

      <div className="relative w-full h-70 md:h-90 rounded-xl overflow-hidden mb-4">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="flex flex-col justify-between items-center text-center gap-2 px-2">
        <h3 className="font-semibold text-lg ">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>

        <p className="font-semibold text-gray-800">120.00 LE</p>
        <button className="w-full flex items-center justify-center gap-2 bg-button-accent hover:bg-button-accent-hover text-white px-4 py-2 rounded-xl transition">
          <ShoppingCart size={20} />
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Card;
