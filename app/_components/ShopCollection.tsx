"use client";

import { Product } from "@/types/Product";
import Card from "./Card";
import SideFilterBar from "./SideFilterBar";
import SortSelection from "./SortSelection";
import { useState } from "react";
import FilterContent from "./FilterContent";
import { filterProducts } from "../_lib/helper";

interface ShopCollectionProps {
  products: Product[];
}

function ShopCollection({ products }: ShopCollectionProps) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedRoasts, setSelectedRoasts] = useState<string[]>([]);

  // helper function
  const filteredProducts = filterProducts(
    products,
    selectedTypes,
    selectedRoasts
  );

  return (
    <div className="mb-32">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <SideFilterBar>
          <FilterContent
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
            selectedRoasts={selectedRoasts}
            setSelectedRoasts={setSelectedRoasts}
          />
        </SideFilterBar>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Sort */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {products.length} results
            </p>

            <SortSelection />
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((p) => (
              <Card product={p} key={p.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCollection;
