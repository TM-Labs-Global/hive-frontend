"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface-dark flex flex-col items-center justify-center p-8 text-center">
      <div className="mb-12">
         <h1 className="font-display text-8xl font-extrabold tracking-tighter text-white mb-6">
           The <span className="text-brand">Hive</span>
         </h1>
         <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-sans">
           The custom-built operating system for Takeout Media. 
           Manage brand relationships, content pipelines, and publishing workflows in one premium interface.
         </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button size="lg" asChild>
          <Link href="/register">Get Started</Link>
        </Button>
        <Button variant="secondary" size="lg" className="border-white/10 text-white hover:bg-white/5" asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mt-6">
        <Button variant="ghost-dark" size="sm" asChild>
          <Link href="/design-system">Design System</Link>
        </Button>
        <Button variant="ghost-dark" size="sm" asChild>
          <Link href="/docs">Documentation</Link>
        </Button>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <FeatureItem title="Tokens First" desc="A robust theme built on Tailwind v4 and OKLCH color spaces." />
        <FeatureItem title="Role-Based" desc="Custom interfaces for Account Managers, Content Teams, and Clients." />
        <FeatureItem title="Integrated" desc="Seamlessly connects with Takeout Media's existing publishing tools." />
      </div>
    </div>
  )
}

function FeatureItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-8 rounded-2xl border border-white/10 bg-white/5 text-left">
      <h3 className="font-display text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
    </div>
  )
}
