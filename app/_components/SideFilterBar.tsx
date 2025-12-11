"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

function SideFilterBar({ children }: { children: React.ReactNode }) {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <aside>
      {/* Desktop Filter */}
      <div className="space-y-6 hidden md:block w-48">
        <h3 className="text-lg font-bold">Filter By</h3>
        {children}
      </div>

      {/* Mobile */}
      <button
        onClick={() => setFilterOpen(!filterOpen)}
        className="md:hidden text-lg font-bold flex justify-between items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 bg-white"
      >
        {filterOpen ? <X size={20} /> : <SlidersHorizontal size={20} />}
        Fitler By
      </button>

      {filterOpen && (
        <div className="md:hidden space-y-6 w-full flex justify-around py-8 border-b border-gray-200">
          {children}
        </div>
      )}
    </aside>
  );
}

export default SideFilterBar;
