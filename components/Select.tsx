"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  options: Option[];
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
};

export default function Select({
  options,
  placeholder = "Select",
  value,
  onChange,
  label,
}: SelectProps) {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="text-[11px] font-semibold tracking-widest uppercase text-[var(--text-tertiary)] ml-1">
          {label}
        </label>
      )}

      <div className="relative w-full group">
        <select
          value={value}
          onChange={onChange}
          className="
            w-full
            appearance-none
            pl-4 pr-10 py-3
            rounded-md

            text-[var(--text-primary)]
            bg-[var(--surface-2)]
            border border-[var(--border)]

            outline-none
            cursor-pointer

            transition-colors duration-200

            hover:bg-[var(--surface-3)]

            focus:border-[var(--primary)]
            focus:ring-2 focus:ring-[var(--ring)]
          "
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Chevron Icon */}
        <div className="
          absolute right-3 top-1/2 -translate-y-1/2
          pointer-events-none
          text-[var(--text-tertiary)]
          group-focus-within:text-[var(--primary)]
          transition-colors
        ">
          <ChevronDown size={18} />
        </div>
      </div>
    </div>
  );
}