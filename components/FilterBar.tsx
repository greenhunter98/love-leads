"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export default function FilterBar() {
  const [activeLevel, setActiveLevel] = useState("All");

  const levels = ["All", "Primary", "JCE", "MSCE", "Tertiary"];

  return (
    <div className="sticky top-0 z-10 bg-[var(--background)] pt-3 pb-2 space-y-3 px-3">

      {/* SEARCH (mobile-first) */}
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-ghost)]"
          size={18}
        />

        <input
          type="text"
          placeholder="Search notes..."
          className="
            w-full pl-10 pr-4 py-2.5
            bg-[var(--surface)]
            border border-[var(--border)]
            rounded-md
            text-[var(--text-primary)]
            text-sm
            outline-none
            focus:border-[var(--primary)]
          "
        />
      </div>

      {/* FILTER ACTION BAR */}
      <div className="flex items-center gap-2">

        {/* FILTER BUTTON (opens modal later) */}
        <button className="
          flex items-center gap-2 px-3 py-2
          bg-[var(--surface)]
          border border-[var(--border)]
          rounded-md
          text-xs font-medium
          text-[var(--text-secondary)]
        ">
          <SlidersHorizontal size={16} />
          Filters
        </button>

        {/* ACTIVE FILTER DISPLAY (NOT segmented control) */}
        <div className="
          flex-1
          px-3 py-2
          bg-[var(--surface)]
          border border-[var(--border)]
          rounded-md
          text-xs
          text-[var(--text-secondary)]
          truncate
        ">
          Level: {activeLevel}
        </div>

        {/* QUICK CYCLE BUTTON */}
        <button
          onClick={() => {
            const currentIndex = levels.indexOf(activeLevel);
            const next = levels[(currentIndex + 1) % levels.length];
            setActiveLevel(next);
          }}
          className="
            px-3 py-2
            bg-[var(--primary)]
            text-white
            rounded-md
            text-xs font-medium
          "
        >
          Change
        </button>

      </div>
    </div>
  );
}