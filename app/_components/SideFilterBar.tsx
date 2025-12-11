'use client';

import { SlidersHorizontal, X } from 'lucide-react';
import { useState } from 'react';

function SideFilterBar({ children }: { children: React.ReactNode }) {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <aside>
      {/* Desktop Filter */}
      <div className="hidden w-48 space-y-6 md:block">
        <h3 className="text-lg font-bold">Filter By</h3>
        {children}
      </div>

      {/* Mobile */}
      <button
        onClick={() => setFilterOpen(!filterOpen)}
        className="flex items-center justify-between gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-lg font-bold md:hidden"
      >
        {filterOpen ? <X size={20} /> : <SlidersHorizontal size={20} />}
        Fitler By
      </button>

      {filterOpen && (
        <div className="flex w-full justify-around space-y-6 border-b border-gray-200 py-8 md:hidden">
          {children}
        </div>
      )}
    </aside>
  );
}

export default SideFilterBar;
