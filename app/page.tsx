"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ResourcesPage() {
  const [resources, setResources] = useState<any[]>([]);

  const [search, setSearch] = useState("");
  const [mode, setMode] = useState<"trending" | "new">("trending");

  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [type, setType] = useState("");

  // ✅ ONLY FETCH WHEN USER APPLIES OR MODE CHANGES
  useEffect(() => {
    fetchResources();
  }, [mode]);

  async function fetchResources() {
    let query = supabase
      .from("resources")
      .select("*");

    if (search) query = query.ilike("title", `%${search}%`);
    if (subject) query = query.eq("subject_id", subject);
    if (level) query = query.eq("level_id", level);
    if (type) query = query.eq("type_id", type);

    query = query.order(
      mode === "trending" ? "downloads" : "created_at",
      { ascending: false }
    );

    const { data, error } = await query;

    if (error) {
      console.error("Supabase error:", error);
      setResources([]);
      return;
    }

    setResources(data || []);
  }

  function applyFilters() {
    fetchResources();
  }

  return (
    <div className="container space-y-3 pb-24">

      {/* SEARCH */}
      <input
        className="input"
        placeholder="Search resources..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* MODE */}
      <div className="flex gap-2">
        {["trending", "new"].map((m) => (
          <button
            key={m}
            onClick={() => setMode(m as any)}
            className={`chip ${mode === m ? "chip-active" : ""}`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* FILTERS */}
      <div className="grid grid-cols-3 gap-2">

        <input
          className="input"
          placeholder="Subject ID"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <input
          className="input"
          placeholder="Level ID"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />

        <input
          className="input"
          placeholder="Type ID"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />

      </div>

      <button className="chip chip-active w-full" onClick={applyFilters}>
        Apply Filters
      </button>

      {/* FEED */}
      <div className="space-y-2">
        {resources.length === 0 ? (
          <p className="text-sm text-gray-500">No resources found</p>
        ) : (
          resources.map((r) => (
            <Link
              key={r.id}
              href={`/resources/${r.id}`}
              className="card block p-3 space-y-2"
            >
              <div className="font-semibold text-[15px]">
                {r.title}
              </div>

              <div className="text-xs text-gray-500 flex gap-2">
                <span>Downloads: {r.downloads || 0}</span>
                <span>•</span>
                <span>
                  {r.created_at ? r.created_at.slice(0, 10) : ""}
                </span>
              </div>

              <div className="flex justify-between pt-2">
                <span className="text-xs text-blue-500">
                  Open →
                </span>

                {r.file_url && (
                  <a
                    href={r.file_url}
                    target="_blank"
                    className="text-xs text-green-600"
                  >
                    Download ⬇
                  </a>
                )}
              </div>
            </Link>
          ))
        )}
      </div>

    </div>
  );
}