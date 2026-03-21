"use client";

import {
  Heart,
  MessageCircle,
  Download,
  Share2,
  Bookmark,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";

// mock single resource
const resource = {
  id: 1,
  title: "MSCE Mathematics Paper 1 (2005)",
  subject: "Mathematics",
  level: "MSCE",
  type: "Past Paper",
  year: 2005,
  school: "Blantyre Secondary",
  uploader: {
    name: "Chikondi Banda",
    role: "Teacher",
  },
  likes: 12,
  comments: 3,
  downloads: 145,
  description:
    "This past paper contains MSCE Mathematics Paper 1 from 2005. Useful for revision and exam preparation.",
};

const related = [
  {
    id: 2,
    title: "MSCE Mathematics Paper 2 (2005)",
    downloads: 98,
  },
  {
    id: 3,
    title: "MSCE Mathematics Revision Notes",
    downloads: 210,
  },
];

export default function ResourcePreviewPage() {
  const [saved, setSaved] = useState(false);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <div className="max-w-xl mx-auto px-4 py-4 pb-28">

        {/* HEADER */}
        <header className="flex items-center justify-between mb-4">
          <button className="p-2 rounded-md bg-[var(--surface-1)] cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-2">
            <button className="p-2 rounded-md bg-[var(--surface-1)] cursor-pointer">
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={() => setSaved(!saved)}
              className="p-2 rounded-md bg-[var(--surface-1)] cursor-pointer"
            >
              <Bookmark
                className={`w-4 h-4 ${
                  saved ? "text-[var(--primary)]" : ""
                }`}
              />
            </button>
          </div>
        </header>

        {/* TITLE */}
        <h1 className="text-lg font-semibold leading-snug">
          {resource.title}
        </h1>

        {/* META */}
        <div className="mt-2 text-xs text-[var(--text-secondary)] flex flex-wrap gap-2">
          <span>{resource.subject}</span>
          <span>•</span>
          <span>{resource.level}</span>
          <span>•</span>
          <span>{resource.type}</span>
          <span>•</span>
          <span>{resource.year}</span>
        </div>

        <p className="text-xs text-[var(--text-secondary)] mt-1">
          {resource.school}
        </p>

        {/* PREVIEW AREA */}
        <div className="mt-4 rounded-md bg-[var(--surface-1)] p-4 min-h-[180px] flex items-center justify-center text-sm text-[var(--text-secondary)]">
          Preview not available in mock mode
        </div>

        {/* DESCRIPTION */}
        <div className="mt-4">
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {resource.description}
          </p>
        </div>

        {/* STATS */}
        <div className="flex gap-4 mt-4 text-xs text-[var(--text-secondary)]">
          <span className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5" /> {resource.likes}
          </span>

          <span className="flex items-center gap-1">
            <MessageCircle className="w-3.5 h-3.5" /> {resource.comments}
          </span>

          <span className="flex items-center gap-1">
            <Download className="w-3.5 h-3.5" /> {resource.downloads}
          </span>
        </div>

        {/* UPLOADER */}
        <div className="mt-6 p-3 rounded-md bg-[var(--surface-1)]">
          <p className="text-xs text-[var(--text-secondary)]">
            Uploaded by
          </p>

          <p className="text-sm font-medium mt-1">
            {resource.uploader.name}
          </p>

          <p className="text-xs text-[var(--text-secondary)]">
            {resource.uploader.role}
          </p>

          <button className="mt-2 text-xs text-[var(--primary)] cursor-pointer">
            View more from this user
          </button>
        </div>

        {/* RELATED */}
        <div className="mt-6">
          <h2 className="text-xs text-[var(--text-secondary)] uppercase tracking-wide mb-2">
            Related resources
          </h2>

          <div className="space-y-2">
            {related.map((r) => (
              <div
                key={r.id}
                className="p-3 rounded-md bg-[var(--surface-1)] cursor-pointer"
              >
                <p className="text-sm">{r.title}</p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  {r.downloads} downloads
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STICKY BOTTOM ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-[var(--surface-1)] border-t border-[var(--border)] p-3 flex justify-between items-center">
        <div className="flex gap-3">
          <button className="flex items-center gap-1 text-xs text-[var(--text-secondary)] cursor-pointer">
            <Heart className="w-4 h-4" />
            Like
          </button>

          <button className="flex items-center gap-1 text-xs text-[var(--text-secondary)] cursor-pointer">
            <MessageCircle className="w-4 h-4" />
            Comment
          </button>
        </div>

        <button className="flex items-center gap-1 px-4 py-2 bg-[var(--primary)] text-white text-sm rounded-md cursor-pointer">
          <Download className="w-4 h-4" />
          Download
        </button>
      </div>
    </main>
  );
}