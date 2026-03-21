"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabaseClient"
import Input from "@/components/Input"
import Select from "@/components/Select"
import Button from "@/components/Button"
import { UploadCloud } from "lucide-react"

type Step = "form" | "uploading"

export default function UploadPage() {
  const [step, setStep] = useState<Step>("form")

  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")

  const [subjectId, setSubjectId] = useState("")
  const [levelId, setLevelId] = useState("")
  const [typeId, setTypeId] = useState("")

  const [subjects, setSubjects] = useState<any[]>([])
  const [levels, setLevels] = useState<any[]>([])
  const [types, setTypes] = useState<any[]>([])

  const [user, setUser] = useState<any>(null)

  const [message, setMessage] = useState("")
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadingFileName, setUploadingFileName] = useState("")

  // SCHOOL (optional)
  const [addSchool, setAddSchool] = useState(false)
  const [school, setSchool] = useState("")
  const [district, setDistrict] = useState("")
  const [region, setRegion] = useState("")

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getSession()
      setUser(data.session?.user || null)
    }

    getUser()

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null)
      }
    )

    fetchOptions()

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  const fetchOptions = async () => {
    const [{ data: subjectsData }, { data: levelsData }, { data: typesData }] =
      await Promise.all([
        supabase.from("subjects").select("*"),
        supabase.from("levels").select("*"),
        supabase.from("types").select("*"),
      ])

    setSubjects(subjectsData || [])
    setLevels(levelsData || [])
    setTypes(typesData || [])
  }

  const handleUpload = async () => {
    setMessage("")

    if (!user) return setMessage("❌ You must be logged in")
    if (!file) return setMessage("❌ Select a file")
    if (!title || !subjectId || !levelId || !typeId) {
      return setMessage("❌ Fill required fields")
    }

    setStep("uploading")
    setUploadProgress(5)
    setUploadingFileName(file.name)

    try {
      const fileExt = file.name.split(".").pop()
      const filePath = `${user.id}/${Date.now()}.${fileExt}`

      // Upload file
      const { error: uploadError } = await supabase.storage
        .from("resources")
        .upload(filePath, file)

      if (uploadError) throw uploadError

      setUploadProgress(50)

      const { data } = supabase.storage
        .from("resources")
        .getPublicUrl(filePath)

      const fileUrl = data.publicUrl

      // HANDLE SCHOOL
      let schoolId = null

      if (addSchool && school) {
        const { data: existingSchool } = await supabase
          .from("schools")
          .select("*")
          .eq("name", school)
          .maybeSingle()

        if (existingSchool) {
          schoolId = existingSchool.id
        } else {
          const { data: newSchool, error } = await supabase
            .from("schools")
            .insert([
              {
                name: school,
                district,
                region,
              },
            ])
            .select()
            .single()

          if (error) throw error
          schoolId = newSchool.id
        }
      }

      // INSERT RESOURCE
      const { error: dbError } = await supabase.from("resources").insert([
        {
          title,
          subject_id: subjectId,
          level_id: levelId,
          type_id: typeId,
          year: year ? parseInt(year) : null,
          school_id: schoolId,
          uploaded_by: user.id,
          file_url: fileUrl,
        },
      ])

      if (dbError) throw dbError

      setUploadProgress(100)
      setMessage("✅ Upload successful!")

    } catch (err: any) {
      setMessage("❌ " + err.message)
    }
  }

  const resetForm = () => {
    setStep("form")
    setFile(null)
    setTitle("")
    setYear("")
    setSubjectId("")
    setLevelId("")
    setTypeId("")
    setSchool("")
    setDistrict("")
    setRegion("")
    setAddSchool(false)
    setUploadProgress(0)
    setMessage("")
  }

  return (
    <div className="px-4 pt-5 pb-24 space-y-5 max-w-md mx-auto">

      {/* ================= FORM ================= */}
      {step === "form" && (
        <>
          <div className="space-y-1">
            <h1 className="text-lg font-semibold">Upload Resource</h1>
            <p className="text-sm text-[var(--text-secondary)]">
              Share notes, past papers, and study materials
            </p>
          </div>

          {/* FILE */}
          <label className="block cursor-pointer">
            <div className="card flex flex-col items-center justify-center text-center py-10 px-4">
              {!file ? (
                <>
                  <UploadCloud size={30} className="text-[var(--text-tertiary)] mb-3" />
                  <p className="text-sm">Tap to upload file</p>
                  <p className="text-xs text-[var(--text-tertiary)]">
                    PDF, DOC, DOCX
                  </p>
                </>
              ) : (
                <>
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-[var(--text-tertiary)]">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </>
              )}
            </div>

            <input
              type="file"
              className="hidden"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </label>

          {/* FORM */}
          <div className="card p-4 space-y-4">

            <Input
              placeholder="Resource title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <Select
              label="Subject"
              value={subjectId}
              onChange={(e) => setSubjectId(e.target.value)}
              options={subjects.map(s => ({ label: s.name, value: s.id }))}
            />

            <Select
              label="Level"
              value={levelId}
              onChange={(e) => setLevelId(e.target.value)}
              options={levels.map(l => ({ label: l.name, value: l.id }))}
            />

            <Select
              label="Type"
              value={typeId}
              onChange={(e) => setTypeId(e.target.value)}
              options={types.map(t => ({ label: t.name, value: t.id }))}
            />

            <Input
              placeholder="Year (optional)"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />

            {/* SCHOOL TOGGLE */}
            <div
              onClick={() => setAddSchool(!addSchool)}
              className={`
                flex items-center justify-between p-3 rounded-md border cursor-pointer
                ${addSchool
                  ? "border-[var(--primary)] bg-[var(--primary)]/5"
                  : "border-[var(--border)]"}
              `}
            >
              <span className="text-sm">Add school details</span>
              <span className="text-sm">{addSchool ? "✓" : ""}</span>
            </div>

            {addSchool && (
              <div className="space-y-3 pt-2">
                <Input
                  placeholder="School name"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                />
                <Input
                  placeholder="District"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
                <Input
                  placeholder="Region"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                />
              </div>
            )}

          </div>

          <Button size="full" onClick={handleUpload}>
            Upload Resource
          </Button>
        </>
      )}

      {/* ================= UPLOADING ================= */}
      {step === "uploading" && (
        <div className="card p-6 space-y-4 text-center">

          <h2 className="text-lg font-semibold">
            Uploading...
          </h2>

          <p className="text-sm text-[var(--text-secondary)]">
            {uploadingFileName}
          </p>

          <div className="w-full h-2 bg-[var(--surface-2)] rounded overflow-hidden">
            <div
              className="h-full bg-[var(--primary)] transition-all"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>

          <p className="text-xs text-[var(--text-tertiary)]">
            {uploadProgress}%
          </p>

          {message && (
            <p className="text-sm">{message}</p>
          )}

          <div className="space-y-2 pt-3">
            <Button size="full" onClick={resetForm}>
              Upload another
            </Button>

            <Button size="full" variant="secondary">
              View my uploads
            </Button>
          </div>

        </div>
      )}

    </div>
  )
}