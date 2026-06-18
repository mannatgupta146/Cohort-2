"use client"

import Link from "next/link"
import React, { useState } from 'react'
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { api } from "@/lib/api"
import { useRouter } from "next/navigation"

export default function LoginPage() {

    const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
        let res = await api.post("/api/auth/login", {email, password})
        console.log("res from login", res.data)
        setEmail("")
        setPassword("")
        router.push("/layout/home")
    } catch (error) {
        console.log("error in handleSubmit", error)
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4 py-8 animate-in fade-in duration-500">
      <div className="w-full max-w-md bg-card/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-border/80 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mb-8 text-center relative z-10">
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Enter your credentials to access your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 h-11 bg-background/50 border-border/70 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </Label>
              <Link 
                href="/forgot-password" 
                className="text-xs text-muted-foreground hover:text-foreground hover:underline transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10 h-11 bg-background/50 border-border/70 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1 cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full h-11 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/95 transition-all shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 group">
            Sign In
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-8 relative z-10">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-primary font-semibold hover:underline transition-colors"
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  )
}