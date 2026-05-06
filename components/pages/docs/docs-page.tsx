"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/ui/section-patterns"
import { Callout } from "@/components/ui/callout"
import { Card, CardContent } from "@/components/ui/card"
import { Hero } from "@/components/ui/patterns"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans text-foreground">
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-white/5 bg-surface-dark px-8">
        <div className="font-display text-lg font-extrabold text-white tracking-tight">
          The <span className="text-brand">Hive</span> Documentation
        </div>
        <div className="flex items-center gap-4">
           <a href="/design-system" className="text-xs font-semibold text-white/70 hover:text-white transition-colors">Design System</a>
           <Badge variant="brand">Eng v1.0</Badge>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="sticky top-14 h-[calc(100vh-3.5rem)] w-64 flex-shrink-0 overflow-y-auto border-r border-white/5 bg-surface-dark p-6">
          <div className="mb-6">
            <div className="mb-2 text-[0.625rem] font-bold tracking-[0.14em] text-white/25 uppercase">
              Introduction
            </div>
            <nav className="space-y-1">
              <SidebarLink href="#overview">Architecture</SidebarLink>
              <SidebarLink href="#division">Division of Labor</SidebarLink>
            </nav>
          </div>
          <div>
            <div className="mb-2 text-[0.625rem] font-bold tracking-[0.14em] text-white/25 uppercase">
              Engineering Guide
            </div>
            <nav className="space-y-1">
              <SidebarLink href="#hooks">Integrating Hooks</SidebarLink>
              <SidebarLink href="#state">Handling State</SidebarLink>
              <SidebarLink href="#naming">Naming Standards</SidebarLink>
            </nav>
          </div>
          <div className="mt-6">
            <div className="mb-2 text-[0.625rem] font-bold tracking-[0.14em] text-white/25 uppercase">
              Module Maps
            </div>
            <nav className="space-y-1">
              <SidebarLink href="#m01">M-01: Onboarding</SidebarLink>
              <SidebarLink href="#m05">M-05: Dashboard</SidebarLink>
              <SidebarLink href="#m07">M-07: Approvals</SidebarLink>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl p-12 overflow-y-auto">
          <header className="mb-16">
            <h1 className="font-display text-6xl font-extrabold tracking-tighter mb-6">
              Engineering <span className="text-brand">Handover</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              This guide explains the architecture of the Hive frontend and how the Logic Engineer should integrate data hooks into the UI components.
            </p>
          </header>

          {/* Architecture Section */}
          <section id="overview" className="mb-24">
            <SectionHeader number="01" title="Architecture" />
            <div className="space-y-6">
              <p className="text-muted-foreground">The project follows a strict separation between <strong>Routing</strong>, <strong>UI Composition</strong>, and <strong>Business Logic</strong>.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <Card className="bg-white border-border">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2 text-sm">app/*</h4>
                    <p className="text-xs text-muted-foreground">Route entries only. These are thin wrappers that render a Page Component.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-border">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2 text-sm">components/pages/*</h4>
                    <p className="text-xs text-muted-foreground">UI Composition. This is where layouts are built and hooks are consumed.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-border">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2 text-sm">hooks/*</h4>
                    <p className="text-xs text-muted-foreground">Logic ownership. This is where API calls and mutations live.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Division of Labor */}
          <section id="division" className="mb-24">
            <SectionHeader number="02" title="Division of Labor" />
            <div className="space-y-6">
              <Callout variant="dark" label="UI Engineer (Me):">
                Responsible for pixel-perfect UI, responsive layouts, animations, and visual transitions using mock data.
              </Callout>
              <Callout variant="brand" label="Logic Engineer (You):">
                Responsible for replacing mock data with React Query hooks, handling form submissions, and API error states.
              </Callout>
            </div>
          </section>

          {/* Integrating Hooks */}
          <section id="hooks" className="mb-24">
            <SectionHeader number="03" title="Integrating Hooks" />
            <div className="space-y-6">
              <p className="text-muted-foreground">Every page component is designed to be "logic-ready". Look for the following patterns to integrate your hooks:</p>
              
              <div className="bg-surface-dark rounded-xl p-6 font-mono text-sm text-white/80 overflow-x-auto">
                <pre>{`// 1. Find the Page Component (e.g., dashboard-page.tsx)
export default function DashboardPage() {
  // PLACEHOLDER: Logic Engineer adds hooks here
  // const { data, isLoading } = useGetDashboardStats()

  return (
    <DashboardLayout>
       {/* 2. Replace static props with dynamic data */}
       <StatCard value={data?.totalClients ?? "..."} />
    </DashboardLayout>
  )
}`}</pre>
              </div>
              
              <Callout variant="success" label="Best Practice:">
                Always maintain the TypeScript interfaces defined in the component props to ensure type safety during integration.
              </Callout>
            </div>
          </section>

          {/* Naming Standards */}
          <section id="naming" className="mb-24">
            <SectionHeader number="04" title="Naming Standards" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Props</h4>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li><code className="text-brand">on[Action]</code>: For event handlers (e.g. <code className="text-foreground">onSave</code>)</li>
                  <li><code className="text-brand">is[State]</code>: For booleans (e.g. <code className="text-foreground">isLoading</code>)</li>
                  <li><code className="text-brand">data</code>: For primary object payloads</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Placeholders</h4>
                <p className="text-sm text-muted-foreground italic">
                  "I use '...' or '00' for numeric placeholders in components that are waiting for actual data counts."
                </p>
              </div>
            </div>
          </section>

          {/* Module Reference */}
          <section id="m01" className="mb-24">
            <SectionHeader number="05" title="M-01: Onboarding" />
            <div className="p-8 bg-white border border-border rounded-2xl">
              <h3 className="font-display text-2xl font-bold mb-4">Flow Logic</h3>
              <p className="text-muted-foreground mb-6">The onboarding flow is a step-based configuration. The UI handles the transitions, but the Logic Engineer must manage the persistence of each step.</p>
              <div className="flex gap-2">
                <Badge variant="outline">Step 1: Packages</Badge>
                <Badge variant="outline">Step 2: Brand Info</Badge>
                <Badge variant="outline">Step 3: Connect Accounts</Badge>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

function SidebarLink({ href, children }: { href: string, children: React.ReactNode }) {
  const [isActive, setIsActive] = React.useState(false)

  React.useEffect(() => {
    const handleHashChange = () => {
      setIsActive(window.location.hash === href)
    }
    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [href])

  return (
    <a 
      href={href} 
      className={cn(
        "block rounded-md px-3 py-2 text-sm transition-colors",
        isActive 
          ? "bg-brand/10 text-brand font-semibold" 
          : "text-white/55 hover:text-white/85 hover:bg-white/5"
      )}
    >
      {children}
    </a>
  )
}
