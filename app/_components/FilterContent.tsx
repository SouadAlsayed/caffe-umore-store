"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const coffeeTypes = [
  "Regular",
  "Espresso",
  "Italian",
  "Arabic",
  "Chocolate",
  "Milk",
  "Caffeine-free",
  "Fruit",
];

const roastLevel = ["Dark", "Medium", "Light"];

function FilterContent() {
  const [coffeeTypeOpen, setCoffeeTypeOpen] = useState(true);
  const [roastLevelOpen, setRoastLevelOpen] = useState(true);

  return (
    <>
      {/* Coffee Type */}
      <div className="md:border-b border-gray-200 pb-4">
        <button
          onClick={() => setCoffeeTypeOpen(!coffeeTypeOpen)}
          className="flex justify-between items-center w-full text-left font-semibold mb-3"
        >
          Coffee Type
          {coffeeTypeOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {coffeeTypeOpen && (
          <div className="space-y-2">
            {coffeeTypes.map((type) => (
              <label
                key={type}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input type="checkbox" className="h-4 w-4 accent-coffee-700" />
                <span>{type}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Roast Level */}
      <div className="md:border-b border-gray-200 pb-4">
        <button
          onClick={() => setRoastLevelOpen(!roastLevelOpen)}
          className="flex justify-between items-center w-full text-left font-semibold mb-3"
        >
          Roast Level
          {roastLevelOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {roastLevelOpen && (
          <div className="space-y-2">
            {roastLevel.map((level) => (
              <label
                key={level}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input type="checkbox" className="h-4 w-4 accent-coffee-700" />
                <span>{level}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default FilterContent;
