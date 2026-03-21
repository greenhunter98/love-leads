import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function ResourcePage({ params }: any) {
  const { data } = await supabase
    .from("resources")
    .select(`
      id,
      title,
      file_url,
      downloads,
      created_at,
      year,
      subjects(name),
      levels(name),
      types(name)
    `)
    .eq("id", params.id)
    .single();

  if (!data) return <div className="container">Not found</div>;

  return (
    <div className="container space-y-3 pb-24">

      <div className="card resource-card">

        <h1 className="resource-title text-lg">
          {data.title}
        </h1>

        <div className="text-xs text-gray-500 flex gap-2">
          <span>{data.subjects?.name}</span>
          <span>•</span>
          <span>{data.levels?.name}</span>
          <span>•</span>
          <span>{data.types?.name}</span>
        </div>

        <div className="text-sm text-gray-500">
          Year: {data.year}
        </div>

        <div className="resource-footer">
          <span className="meta-btn">
            ⬇ {data.downloads} downloads
          </span>

          <a
            href={data.file_url}
            target="_blank"
            className="download-btn"
          >
            Download
          </a>
        </div>

      </div>

    </div>
  );
}