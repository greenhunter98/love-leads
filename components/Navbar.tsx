"use client";

export default function Navbar() {
  return (
    <div
      className="
        flex justify-between items-center
        py-3 px-6
        border-b border-[var(--border)]
        bg-[var(--background)]
      "
    >
      {/* BRAND */}
      <h1 className="font-bold text-lg text-[var(--text-primary)]">
        NoteHub
      </h1>

      {/* NAV LINKS */}
      <div className="flex gap-2 text-sm">
        <a
          href="/resources"
          className="
            px-3 py-1.5 rounded-md
            text-[var(--text-secondary)]
            hover:text-[var(--text-primary)]
            hover:bg-[var(--surface-2)]
            transition-colors
          "
        >
          Resources
        </a>

        <a
          href="/upload"
          className="
            px-3 py-1.5 rounded-md
            text-[var(--text-secondary)]
            hover:text-[var(--text-primary)]
            hover:bg-[var(--surface-2)]
            transition-colors
          "
        >
          Upload
        </a>

        <a
          href="/my-uploads"
          className="
            px-3 py-1.5 rounded-md
            text-[var(--text-secondary)]
            hover:text-[var(--text-primary)]
            hover:bg-[var(--surface-2)]
            transition-colors
          "
        >
          My Uploads
        </a>
      </div>
    </div>
  );
}