"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Card from "@/components/Card";
import FilterBar from "@/components/FilterBar";
import Navbar from "@/components/Navbar";

export default function UIShowcase() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      
      <Navbar />

      <div className="p-4 space-y-10 max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="space-y-1">
          <h1 className="text-xl font-bold tracking-tight">
            Design System
          </h1>

          <p className="text-sm text-[var(--text-tertiary)]">
            NoteHub UI components preview (compact dark system)
          </p>
        </div>

        {/* BUTTONS */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
            Buttons
          </h2>

          <div className="flex gap-3 flex-wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </section>

        {/* INPUTS */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
            Inputs
          </h2>

          <Input placeholder="Search resources..." />
        </section>

        {/* SELECT */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
            Select
          </h2>

          <Select
            options={[
              { label: "Option 1", value: "1" },
              { label: "Option 2", value: "2" },
            ]}
          />
        </section>

        {/* FILTER BAR */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
            Filters
          </h2>

          <FilterBar />
        </section>

        {/* CARD */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
            Resource Card
          </h2>

          <div className="max-w-md">
<Card
  title="MSCE Math Paper 2023"
  subject="Math"
  level="MSCE"
  type="Past Paper"
  year="2023"
  fileSize="2.4MB"
  fileUrl="/files/math-paper.pdf"
/>
          </div>
        </section>

      </div>
    </div>
  );
}