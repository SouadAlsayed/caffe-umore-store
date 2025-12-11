import { getProductsByCategory } from '../_lib/data-service';
import Card from './Card';

async function Cards() {
  const regularProducts = await getProductsByCategory('regular');

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {regularProducts.map((p) => (
        <Card product={p} key={p.id} />
      ))}
    </div>
  );
}

export default Cards;
