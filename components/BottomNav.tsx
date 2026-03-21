"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Upload,
  UserRound,
} from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const tabs = [
    {
      label: "Home",
      icon: Home,
      path: "/resources",
    },
    {
      label: "Community",
      icon: Users,
      path: "/community",
    },
    {
      label: "Upload",
      icon: Upload,
      path: "/upload",
    },
    {
      label: "Profile",
      icon: UserRound,
      path: "/profile",
    },
  ];

  return (
    <div
      className="
        fixed bottom-0 left-0 right-0
        bg-[var(--surface-1)]
        border-t border-[var(--border)]
        flex justify-between
        px-2 py-2
        z-50
      "
    >
      {tabs.map((tab) => {
        const isActive = pathname === tab.path;
        const Icon = tab.icon;

        return (
          <Link
            key={tab.path}
            href={tab.path}
            className="
              flex flex-col items-center justify-center
              flex-1
              py-1
              relative
              transition
            "
          >
            {/* ICON */}
            <Icon
              size={20}
              className={`
                transition
                ${
                  isActive
                    ? "text-[var(--primary)]"
                    : "text-[var(--text-tertiary)]"
                }
              `}
            />

            {/* LABEL */}
            <span
              className={`
                text-[10px] mt-1 font-medium
                ${
                  isActive
                    ? "text-[var(--primary)]"
                    : "text-[var(--text-tertiary)]"
                }
              `}
            >
              {tab.label}
            </span>

            {/* ACTIVE DOT */}
            {isActive && (
              <div className="absolute -top-1 w-1 h-1 rounded-full bg-[var(--primary)]" />
            )}
          </Link>
        );
      })}
    </div>
  );
}