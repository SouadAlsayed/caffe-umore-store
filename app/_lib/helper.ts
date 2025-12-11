import { Product } from "@/types/Product";

export function formatPrice(value: number): string {
  if (isNaN(value)) return "—";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EGP",
    minimumFractionDigits: 0,
  }).format(value);
}

export function filterProducts(
  products: Product[],
  types: string[],
  roasts: string[]
) {
  return products.filter((product) => {
    const typeMatch = types.length === 0 || types.includes(product.category);

    const roastMatch =
      roasts.length === 0 ||
      product.product_variants.some((v) => roasts.includes(v.roast));

    return typeMatch && roastMatch;
  });
}
