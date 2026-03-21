"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import Button from "@/components/Button"

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [resources, setResources] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getSession()
      const currentUser = data.session?.user

      if (!currentUser) {
        setLoading(false)
        return
      }

      setUser(currentUser)

      // fetch profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", currentUser.id)
        .single()

      setProfile(profileData)

      // fetch user uploads
      const { data: resourcesData } = await supabase
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
        .eq("uploaded_by", currentUser.id)
        .order("created_at", { ascending: false })

      setResources(resourcesData || [])
      setLoading(false)
    }

    init()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = "/login"
  }

  if (loading) {
    return (
      <div className="px-4 pt-6 text-sm text-[var(--text-secondary)]">
        Loading profile...
      </div>
    )
  }

  if (!user) {
    return (
      <div className="px-4 pt-6 text-sm text-[var(--text-secondary)]">
        You are not logged in.
      </div>
    )
  }

  return (
    <div className="px-4 pt-5 pb-24 space-y-6 max-w-md mx-auto">

      {/* ================= USER INFO ================= */}
      <div className="card p-4 space-y-2">
        <h2 className="text-sm text-[var(--text-tertiary)] uppercase tracking-wide">
          Profile
        </h2>

        <p className="text-base font-medium">
          {profile?.name || "Student"}
        </p>

        <p className="text-sm text-[var(--text-secondary)]">
          {user.email}
        </p>
      </div>

      {/* ================= MY UPLOADS ================= */}
      <div className="space-y-3">
        <h2 className="text-sm text-[var(--text-tertiary)] uppercase tracking-wide">
          My Uploads
        </h2>

        {resources.length === 0 ? (
          <div className="card p-4 text-center space-y-2">
            <p className="text-sm text-[var(--text-secondary)]">
              You haven’t uploaded anything yet
            </p>

            <Button size="full" onClick={() => (window.location.href = "/upload")}>
              Upload your first resource
            </Button>
          </div>
        ) : (
          <div className="space-y-2">
            {resources.map((res) => (
              <div
                key={res.id}
                className="card p-3 space-y-1"
              >
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  {res.title}
                </p>

                <div className="text-xs text-[var(--text-tertiary)] flex flex-wrap gap-2">
                  <span>{res.subjects?.name}</span>
                  <span>•</span>
                  <span>{res.levels?.name}</span>
                  <span>•</span>
                  <span>{res.types?.name}</span>
                </div>

                <a
                  href={res.file_url}
                  target="_blank"
                  className="text-xs text-[var(--primary)]"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= LOGOUT ================= */}
      <div className="pt-2">
        <Button variant="secondary" size="full" onClick={handleLogout}>
          Logout
        </Button>
      </div>

    </div>
  )
}