"use client";

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg" | "full";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  onClick,
  type = "button",
}: ButtonProps) {
  // BASE
  const base =
    "inline-flex items-center justify-center font-medium transition-colors duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  // VARIANTS (TOKEN-BASED SYSTEM)
  const variants = {
    primary:
      "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-sm",

    secondary:
      "bg-[var(--surface-2)] text-[var(--text-primary)] border border-[var(--border)] hover:bg-[var(--surface-3)]",

    ghost:
      "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-2)]",

    danger:
      "bg-red-500 text-white hover:bg-red-600",
  };

  // SIZES (more consistent system)
  const sizes = {
    sm: "px-3 py-1.5 text-xs rounded-[var(--radius-sm)]",
    md: "px-4 py-2 text-sm rounded-[var(--radius-md)]",
    lg: "px-5 py-3 text-base rounded-[var(--radius-lg)]",
    full: "w-full py-3 text-sm rounded-[var(--radius-lg)]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={`${base} ${variants[variant]} ${sizes[size]}`}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4 text-current"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Loading...</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          {children}
        </div>
      )}
    </button>
  );
}