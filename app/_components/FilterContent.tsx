"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const coffeeTypes = [
  "regular",
  "espresso",
  "italian",
  "arabic",
  "chocolate",
  "milk",
  "decaf",
  "fruit",
];

const roastLevel = ["dark", "medium", "light"];

interface FilterContentProps {
  selectedTypes: string[];
  setSelectedTypes: React.Dispatch<React.SetStateAction<string[]>>;
  selectedRoasts: string[];
  setSelectedRoasts: React.Dispatch<React.SetStateAction<string[]>>;
}

function FilterContent({
  selectedTypes,
  setSelectedTypes,
  selectedRoasts,
  setSelectedRoasts,
}: FilterContentProps) {
  const [coffeeTypeOpen, setCoffeeTypeOpen] = useState(true);
  const [roastLevelOpen, setRoastLevelOpen] = useState(true);

  function toggleType(type: string) {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  function toggleRoast(level: string) {
    setSelectedRoasts((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  }

  return (
    <>
      {/* Coffee Type */}
      <div className="md:border-b border-gray-200 pb-4 capitalize">
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
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => toggleType(type)}
                  className="h-4 w-4 accent-coffee-700"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Roast Level */}
      <div className="md:border-b border-gray-200 pb-4 capitalize">
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
                <input
                  type="checkbox"
                  checked={selectedRoasts.includes(level)}
                  onChange={() => toggleRoast(level)}
                  className="h-4 w-4 accent-coffee-700"
                />
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
