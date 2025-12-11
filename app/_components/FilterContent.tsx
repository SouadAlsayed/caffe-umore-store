'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const coffeeTypes = [
  'regular',
  'espresso',
  'italian',
  'arabic',
  'chocolate',
  'milk',
  'decaf',
  'fruit',
];

const roastLevel = ['dark', 'medium', 'light'];

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
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  }

  function toggleRoast(level: string) {
    setSelectedRoasts((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level],
    );
  }

  return (
    <>
      {/* Coffee Type */}
      <div className="border-gray-200 pb-4 capitalize md:border-b">
        <button
          onClick={() => setCoffeeTypeOpen(!coffeeTypeOpen)}
          className="mb-3 flex w-full items-center justify-between text-left font-semibold"
        >
          Coffee Type
          {coffeeTypeOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {coffeeTypeOpen && (
          <div className="space-y-2">
            {coffeeTypes.map((type) => (
              <label key={type} className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => toggleType(type)}
                  className="accent-coffee-700 h-4 w-4"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Roast Level */}
      <div className="border-gray-200 pb-4 capitalize md:border-b">
        <button
          onClick={() => setRoastLevelOpen(!roastLevelOpen)}
          className="mb-3 flex w-full items-center justify-between text-left font-semibold"
        >
          Roast Level
          {roastLevelOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {roastLevelOpen && (
          <div className="space-y-2">
            {roastLevel.map((level) => (
              <label key={level} className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedRoasts.includes(level)}
                  onChange={() => toggleRoast(level)}
                  className="accent-coffee-700 h-4 w-4"
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
