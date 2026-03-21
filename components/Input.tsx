"use client";

import React from "react";

type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  type?: string;
};

export default function Input({
  placeholder,
  value,
  onChange,
  icon,
  type = "text",
}: InputProps) {
  return (
    <div className="relative w-full group">
      
      {/* ICON */}
      {icon && (
        <div className="
          absolute left-3 top-1/2 -translate-y-1/2
          text-[var(--text-tertiary)]
          group-focus-within:text-[var(--primary)]
          transition-colors
        ">
          {icon}
        </div>
      )}

      {/* INPUT */}
      <input
        type={type}
        className={`
          w-full
          ${icon ? "pl-9" : "px-3"} pr-3 py-2.5

          text-[var(--text-primary)]
          text-sm

          bg-[var(--surface-2)]
          border border-[var(--border)]

          rounded-md

          outline-none
          transition-colors

          placeholder:text-[var(--text-tertiary)]

          hover:bg-[var(--surface-3)]

          focus:border-[var(--primary)]
          focus:ring-2 focus:ring-[var(--ring)]
        `}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  );
}