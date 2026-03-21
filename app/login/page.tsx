"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabaseClient"
import Input from "@/components/Input"
import Button from "@/components/Button"

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login")

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<any>(null)

  // -----------------------------
  // SESSION HANDLER
  // -----------------------------
  useEffect(() => {
    const initAuth = async () => {
      const { data } = await supabase.auth.getSession()
      setUser(data.session?.user || null)

      // clean email redirect hash
      if (window.location.hash.includes("access_token")) {
        window.history.replaceState(null, "", window.location.pathname)
      }
    }

    initAuth()

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null)
      }
    )

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  // -----------------------------
  // AUTH ACTION
  // -----------------------------
  const handleAuth = async () => {
    setMessage("")

    const trimmedEmail = email.trim()
    const trimmedPassword = password.trim()

    if (!trimmedEmail || !trimmedPassword) {
      setMessage("Email and password are required")
      return
    }

    setLoading(true)

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email: trimmedEmail,
          password: trimmedPassword,
          options: {
            data: {
              name: trimmedEmail.split("@")[0],
            },
          },
        })

        if (error) throw error

        setMessage("Check your email to confirm your account")
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: trimmedEmail,
          password: trimmedPassword,
        })

        if (error) throw error

        setMessage("Logged in successfully!")
        window.location.href = "/resources"
      }
    } catch (err: any) {
      setMessage(err.message)
    } finally {
      setLoading(false)
    }
  }

  // -----------------------------
  // LOGOUT
  // -----------------------------
  const handleLogout = async () => {
    setLoading(true)
    await supabase.auth.signOut()
    setLoading(false)
  }

  // -----------------------------
  // UI
  // -----------------------------
  return (
    <div className="px-4 pt-10 pb-24 max-w-md mx-auto space-y-6">

      {/* HEADER */}
      <div className="space-y-1 text-center">
        <h1 className="text-xl font-semibold">
          {mode === "login" ? "Welcome back" : "Create account"}
        </h1>

        <p className="text-sm text-[var(--text-secondary)]">
          {mode === "login"
            ? "Login to continue using NoteHub"
            : "Start sharing and accessing resources"}
        </p>
      </div>

      {/* FORM */}
      {!user ? (
        <div className="card p-4 space-y-4">

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            size="full"
            onClick={handleAuth}
            isLoading={loading}
          >
            {mode === "login" ? "Log In" : "Create Account"}
          </Button>

          {/* TOGGLE */}
          <div className="text-center text-sm text-[var(--text-secondary)]">
            {mode === "login" ? (
              <>
                Don’t have an account?{" "}
                <button
                  onClick={() => setMode("signup")}
                  className="text-[var(--primary)]"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setMode("login")}
                  className="text-[var(--primary)]"
                >
                  Log in
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        /* LOGGED IN STATE */
        <div className="card p-4 space-y-3 text-center">
          <p className="text-sm text-[var(--text-secondary)]">
            Logged in as
          </p>

          <p className="text-sm font-medium">
            {user.email}
          </p>

          <Button
            variant="secondary"
            size="full"
            onClick={handleLogout}
            isLoading={loading}
          >
            Log Out
          </Button>
        </div>
      )}

      {/* MESSAGE */}
      {message && (
        <div className="text-center text-sm text-[var(--text-secondary)]">
          {message}
        </div>
      )}
    </div>
  )
}