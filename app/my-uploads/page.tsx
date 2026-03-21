"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function MyUploadsPage() {
  const [user, setUser] = useState<any>(null)
  const [uploads, setUploads] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const { data } = await supabase.auth.getSession()
    const currentUser = data.session?.user || null

    setUser(currentUser)

    if (currentUser) {
      fetchMyUploads(currentUser.id)
    } else {
      setLoading(false)
    }
  }

  const fetchMyUploads = async (userId: string) => {
    setLoading(true)

    const { data, error } = await supabase
      .from("resources")
      .select(`
        id,
        title,
        file_url,
        created_at,
        subjects(name),
        levels(name),
        types(name)
      `)
      .eq("uploaded_by", userId)
      .order("created_at", { ascending: false })

    if (!error) {
      setUploads(data || [])
    }

    setLoading(false)
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6">
      <h1 className="text-2xl font-bold mb-6">📁 My Uploads</h1>

      {!user && <p>Please login first.</p>}

      {loading && <p>Loading...</p>}

      {!loading && uploads.length === 0 && user && (
        <p>You haven't uploaded anything yet.</p>
      )}

      <div className="space-y-4">
        {uploads.map((r) => (
          <div key={r.id} className="border p-4 rounded shadow-sm">
            <h2 className="font-semibold">{r.title}</h2>

            <p className="text-sm text-gray-600">
              Subject: {r.subjects?.name} | Level: {r.levels?.name} | Type: {r.types?.name}
            </p>

            <a
              href={r.file_url}
              target="_blank"
              className="text-blue-500 underline mt-2 inline-block"
            >
              View File
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}