import { getProductsByCategory } from "../_lib/data-service";
import Card from "./Card";

async function Cards() {
  const regularProducts = await getProductsByCategory("regular");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {regularProducts.map((p) => (
        <Card product={p} key={p.id} />
      ))}
    </div>
  );
}

export default Cards;
