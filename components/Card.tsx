"use client";

import { Download, FileText, CheckCircle2, HardDrive } from "lucide-react";

type ResourceProps = {
  title: string;
  subject: string;
  level: string;
  type: string;
  year: string;
  fileSize: string;
  fileUrl?: string;
};

export default function MobileResourceRow({
  title,
  subject,
  level,
  type,
  year,
  fileSize,
  fileUrl,
}: ResourceProps) {
  return (
    <div
      className="
        flex flex-col
        p-4 mb-3
        bg-[var(--surface-1)]
        border border-[var(--border)]
        rounded-lg
        active:bg-[var(--surface-2)]
        active:scale-[0.98]
        transition-all
      "
    >
      {/* TOP */}
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-md bg-[var(--surface-2)] text-[var(--primary)]">
          <FileText size={18} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-[15px] font-semibold text-[var(--text-primary)] leading-tight truncate">
              {title}
            </h3>

            <CheckCircle2
              size={14}
              className="text-[var(--text-tertiary)] shrink-0"
            />
          </div>

          <p className="text-[13px] text-[var(--text-secondary)] mt-0.5">
            {subject} • {year}
          </p>
        </div>
      </div>

      {/* MIDDLE */}
      <div className="flex flex-wrap gap-2 mt-3">
        <span className="px-2 py-1 rounded-md bg-[var(--surface-2)] text-[var(--text-secondary)] text-[11px] font-medium uppercase tracking-wide">
          {level}
        </span>

        <span className="px-2 py-1 rounded-md bg-[var(--surface-2)] text-[var(--text-secondary)] text-[11px] font-medium uppercase tracking-wide">
          {type}
        </span>

        <div className="flex items-center gap-1 ml-auto text-[11px] text-[var(--text-tertiary)] font-mono">
          <HardDrive size={12} />
          {fileSize}
        </div>
      </div>

      {/* ACTION */}
      <a
        href={fileUrl}
        className="
          mt-4 w-full
          flex items-center justify-center gap-2
          bg-[var(--primary)]
          text-white
          py-2.5
          rounded-md
          text-sm font-semibold
          hover:bg-[var(--primary-hover)]
          transition-colors
        "
      >
        <Download size={16} strokeWidth={2.5} />
        Download PDF
      </a>
    </div>
  );
}