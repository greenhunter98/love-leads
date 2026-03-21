"use client";

import { Heart, Users, TrendingUp, Clock, Download } from "lucide-react";

// Mock data
const mockResources = [
  {
    id: 1,
    title: "MSCE Mathematics Paper 1 (2005)",
    uploader: "Chikondi Banda",
    role: "Teacher",
    time: "2h ago",
    likes: 12,
    comments: 3,
    downloads: 45,
  },
  {
    id: 2,
    title: "Biology Notes Form 4",
    uploader: "Peter Mbewe",
    role: "Student",
    time: "5h ago",
    likes: 8,
    comments: 1,
    downloads: 28,
  },
  {
    id: 3,
    title: "English Paper 2 (2019)",
    uploader: "Agnes Phiri",
    role: "Teacher",
    time: "1d ago",
    likes: 20,
    comments: 5,
    downloads: 67,
  },
  {
    id: 4,
    title: "Physics Practical Guide",
    uploader: "John Kalisto",
    role: "Teacher",
    time: "6h ago",
    likes: 15,
    comments: 2,
    downloads: 32,
  },
];

const topContributors = [
  { name: "Chikondi Banda", role: "Teacher", resources: 12, avatarId: 1 },
  { name: "Peter Mbewe", role: "Student", resources: 8, avatarId: 2 },
  { name: "Agnes Phiri", role: "Teacher", resources: 7, avatarId: 3 },
];

const getAvatarUrl = (id: number) => `https://i.pravatar.cc/150?img=${id % 70}`;

export default function CommunityPage() {
  const trending = [...mockResources].sort((a, b) => b.downloads - a.downloads).slice(0, 3);
  const recent = [...mockResources].sort((a, b) => {
    const getHours = (t: string) => parseInt(t);
    return getHours(a.time) - getHours(b.time);
  }).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#141414] text-[#E5E7EB]">
      <div className="max-w-2xl mx-auto px-4 py-5 pb-20">
        <header className="mb-6">
          <h1 className="text-xl font-bold tracking-tight text-[#F3F4F6]">Community</h1>
        </header>

        {/* Top Contributors */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-4 h-4 text-[#9CA3AF]" />
            <h2 className="text-sm font-semibold">Top contributors</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {topContributors.map((contributor) => (
              <div key={contributor.name} className="flex items-center gap-2 border-b border-[#2A2A2A] pb-1.5">
                <img
                  src={getAvatarUrl(contributor.avatarId)}
                  alt={contributor.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs font-medium">{contributor.name}</p>
                  <p className="text-[10px] text-[#9CA3AF]">
                    {contributor.role} • {contributor.resources} resources
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Resources */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-[#9CA3AF]" />
            <h2 className="text-sm font-semibold">Trending this week</h2>
          </div>
          <div className="space-y-3">
            {trending.map((r) => (
              <div key={r.id} className="p-3 rounded-md bg-[#161616] border border-[#2A2A2A]">
                <p className="font-medium text-sm">{r.title}</p>
                <div className="flex items-center gap-3 mt-1 text-[10px] text-[#9CA3AF]">
                  <span>{r.downloads} downloads</span>
                  <span>{r.likes} likes</span>
                  <span>{r.comments} comments</span>
                </div>
                <button className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-[#222222] border border-[#2A2A2A] hover:bg-[#2A2A2A] text-[#8AB4F8]">
                  <Download className="w-3.5 h-3.5" /> Download
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Uploads */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-[#9CA3AF]" />
            <h2 className="text-sm font-semibold">Latest uploads</h2>
          </div>
          <div className="space-y-3">
            {recent.map((r) => (
              <div key={r.id} className="p-3 rounded-md bg-[#161616] border border-[#2A2A2A]">
                <p className="font-medium text-sm">{r.title}</p>
                <p className="text-[10px] text-[#9CA3AF] mt-0.5">
                  by {r.uploader} • {r.time}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}