"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { StatCard } from "@/components/ui/stat-card"
import { Workflow, WorkflowStep } from "@/components/ui/workflow"
import { ModuleCard, ModulePanel } from "@/components/ui/module-components"
import { RoleCard, RoleBullet } from "@/components/ui/role-card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BulletList, SectionHeader } from "@/components/ui/section-patterns"
import { AlertItem } from "@/components/ui/alert-item"
import { Callout } from "@/components/ui/callout"
import { Hero, SidebarNav } from "@/components/ui/patterns"
import { 
  LayoutGrid, 
  Users, 
  Calendar, 
  CheckSquare, 
  BarChart2, 
  Settings, 
  User, 
  Building, 
  Check, 
  FileText, 
  AlertTriangle, 
  Sparkles, 
  MessageCircle,
  Plus,
  ArrowRight
} from "lucide-react"

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans text-foreground pb-20">
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-white/5 bg-surface-dark px-8">
        <div className="font-display text-lg font-extrabold text-white tracking-tight">
          The <span className="text-brand">Hive</span> Design System
        </div>
        <Badge variant="brand">PRD v1.1</Badge>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="sticky top-14 h-[calc(100vh-3.5rem)] w-64 flex-shrink-0 overflow-y-auto border-r border-white/5 bg-surface-dark p-6">
          <div className="mb-6">
            <div className="mb-2 text-[0.625rem] font-bold tracking-[0.14em] text-white/25 uppercase">
              Foundations
            </div>
            <nav className="space-y-1">
              <SidebarLink href="#colors">Colors</SidebarLink>
              <SidebarLink href="#typography">Typography</SidebarLink>
              <SidebarLink href="#spacing">Spacing & Radius</SidebarLink>
            </nav>
          </div>
          <div>
            <div className="mb-2 text-[0.625rem] font-bold tracking-[0.14em] text-white/25 uppercase">
              Components
            </div>
            <nav className="space-y-1">
              <SidebarLink href="#buttons">Buttons</SidebarLink>
              <SidebarLink href="#badges">Badges</SidebarLink>
              <SidebarLink href="#cards">Cards</SidebarLink>
              <SidebarLink href="#stats">Stat Cards</SidebarLink>
              <SidebarLink href="#workflow">Workflow</SidebarLink>
              <SidebarLink href="#modules">Module Cards</SidebarLink>
              <SidebarLink href="#roles">Role Cards</SidebarLink>
              <SidebarLink href="#forms">Form Inputs</SidebarLink>
              <SidebarLink href="#lists">Bullet Lists</SidebarLink>
              <SidebarLink href="#callouts">Callouts</SidebarLink>
            </nav>
          </div>
          <div className="mt-6">
            <div className="mb-2 text-[0.625rem] font-bold tracking-[0.14em] text-white/25 uppercase">
              Patterns
            </div>
            <nav className="space-y-1">
              <SidebarLink href="#hero">Hero / Nav</SidebarLink>
              <SidebarLink href="#sidebar-pattern">Sidebar Nav</SidebarLink>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-5xl p-12">
          {/* Colors Section */}
          <section id="colors" className="mb-20">
            <SectionHeader number="01" title="Colors" />
            <div className="mb-8">
              <h3 className="mb-4 text-xs font-semibold tracking-wider text-muted-foreground uppercase">Brand</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ColorSwatch name="Brand" value="#E84210" variable="--brand" />
                <ColorSwatch name="Brand Hover" value="#CC3A0C" variable="--brand-hover" />
                <ColorSwatch name="Brand Light" value="#FF5A2C" variable="--brand-light" />
                <ColorSwatch name="Brand Soft" value="#FFF3EE" variable="--brand-bg" />
              </div>
            </div>
          </section>

          {/* Typography Section */}
          <section id="typography" className="mb-20">
            <SectionHeader number="02" title="Typography" />
            <Card className="mb-8 overflow-hidden">
               <div className="bg-muted px-6 py-3 border-b border-border">
                  <span className="text-[0.625rem] font-bold text-muted-foreground uppercase tracking-widest">Type Scale</span>
               </div>
              <CardContent className="space-y-12 pt-10">
                <div>
                  <span className="text-[0.625rem] text-tertiary mb-2 block uppercase font-mono tracking-wider font-semibold">Display · Bricolage · 800</span>
                  <p className="font-display text-7xl font-extrabold tracking-tighter">The <span className="text-brand">Hive</span></p>
                </div>
                <div>
                  <span className="text-[0.625rem] text-tertiary mb-2 block uppercase font-mono tracking-wider font-semibold">H1 · Bricolage · 700 · 48px</span>
                  <h1 className="font-display text-[3rem] font-bold tracking-tight">Client & Brand OS</h1>
                </div>
                <div>
                  <span className="text-[0.625rem] text-tertiary mb-2 block uppercase font-mono tracking-wider font-semibold">H2 · Bricolage · 700 · 36px</span>
                  <h2 className="font-display text-[2.25rem] font-bold tracking-tight">Platform Modules — What Gets Built</h2>
                </div>
                <div>
                   <span className="text-[0.625rem] text-tertiary mb-2 block uppercase font-mono tracking-wider font-semibold">Body LG · DM Sans · 400 · 18px</span>
                  <p className="text-lg leading-relaxed text-muted-foreground">The Hive is a custom-built web platform that runs Takeout Media's operations from end to end.</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Spacing Section */}
          <section id="spacing" className="mb-20">
             <SectionHeader number="03" title="Spacing & Radius" />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                   <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Radius</h4>
                   <div className="flex flex-wrap gap-4">
                      <div className="h-12 w-12 rounded-sm bg-brand/80" title="radius-sm" />
                      <div className="h-12 w-12 rounded-md bg-brand/80" title="radius-md" />
                      <div className="h-12 w-12 rounded-lg bg-brand/80" title="radius-lg" />
                      <div className="h-12 w-12 rounded-xl bg-brand/80" title="radius-xl" />
                      <div className="h-12 w-24 rounded-full bg-brand/80" title="radius-full" />
                   </div>
                </div>
                <div className="space-y-4">
                   <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Shadows</h4>
                   <div className="flex flex-wrap gap-6">
                      <div className="h-16 w-16 rounded-xl bg-white shadow-sm border border-border" />
                      <div className="h-16 w-16 rounded-xl bg-white shadow-md border border-border" />
                      <div className="h-16 w-16 rounded-xl bg-white shadow-brand" />
                   </div>
                </div>
             </div>
          </section>

          {/* Buttons Section */}
          <section id="buttons" className="mb-20">
             <SectionHeader number="04" title="Buttons" />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                 <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Variants</h4>
                 <div className="flex flex-wrap gap-4 items-center">
                    <Button>Primary Action</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                 </div>
              </div>
              <div className="space-y-4">
                 <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Dark Context</h4>
                 <div className="p-6 bg-surface-dark border border-white/5 rounded-xl flex flex-wrap gap-4 items-center">
                    <Button>Sign Up Free</Button>
                    <Button variant="ghost-dark">Learn More</Button>
                 </div>
              </div>
            </div>
          </section>

          {/* Badges Section */}
          <section id="badges" className="mb-20">
             <SectionHeader number="05" title="Badges & Stages" />
             <div className="space-y-8">
                <div className="space-y-4">
                   <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Status Badges</h4>
                   <div className="flex flex-wrap gap-3">
                      <Badge variant="brand">Takeout Media</Badge>
                      <Badge variant="dark">Takeout Media</Badge>
                      <Badge variant="success">Active</Badge>
                      <Badge variant="warning">Pending</Badge>
                      <Badge variant="danger">Disconnected</Badge>
                   </div>
                </div>
                <div className="space-y-4">
                   <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Content Stages</h4>
                   <div className="flex flex-wrap gap-3">
                      <Badge variant="draft">Draft</Badge>
                      <Badge variant="warning">Review</Badge>
                      <Badge variant="brand">Awaiting Approval</Badge>
                      <Badge variant="success">Approved</Badge>
                   </div>
                </div>
             </div>
          </section>

          {/* Cards Section */}
          <section id="cards" className="mb-20">
             <SectionHeader number="06" title="Cards" />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card><CardContent className="pt-6">White Card (Default)</CardContent></Card>
                <Card className="bg-muted border-none shadow-none"><CardContent className="pt-6">Gray Card</CardContent></Card>
                <Card className="bg-surface-dark border-2 border-brand text-white"><CardContent className="pt-6">Dark Card</CardContent></Card>
                <Card className="bg-brand-bg border-brand/20"><CardContent className="pt-6">Brand Soft Card</CardContent></Card>
             </div>
          </section>

          {/* Callouts Section */}
          <section id="callouts" className="mb-20">
             <SectionHeader number="07" title="Callouts" />
             <div className="space-y-4">
                <Callout label="The simple version:">
                  Clients sign up, pick a plan, connect their social accounts, and review content Takeout uploads for them.
                </Callout>
                <Callout variant="success" label="Key rule:">
                  The Account Manager is the gatekeeper — no content reaches the client without their review first.
                </Callout>
                <Callout variant="dark" label="What The Hive adds:">
                  A complete pipeline — from a new client discovering Takeout Media, picking a package, to seeing their published content.
                </Callout>
             </div>
          </section>

          {/* Stats Section */}
          <section id="stats" className="mb-20">
             <SectionHeader number="08" title="Stat Cards" />
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <StatCard value="48h" label="Max time a client approval should sit" />
                <StatCard value="100%" label="Content tracked — no deliverables lost" />
                <StatCard value="<5min" label="For a client to sign up and understand" />
             </div>
          </section>

          {/* Workflow Section */}
          <section id="workflow" className="mb-20">
            <SectionHeader number="09" title="Workflow" />
            <Card>
              <CardContent className="pt-8">
                <Workflow>
                  <WorkflowStep number={1} label="Drafting" status="done" />
                  <WorkflowStep number={2} label="Internal Review" status="done" />
                  <WorkflowStep number={3} label="Client Approval" sublabel="Waiting for feedback" status="active" />
                  <WorkflowStep number={4} label="Scheduled" status="todo" />
                  <WorkflowStep number={5} label="Published" status="todo" />
                </Workflow>
              </CardContent>
            </Card>
          </section>

          {/* Modules Section */}
          <section id="modules" className="mb-20">
             <SectionHeader number="10" title="Module Cards" />
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <ModuleCard id="M-01" title="Client Sign-Up" description="How new clients join and pick a plan." />
                <ModuleCard id="M-05" title="Team Dashboard" description="Where the team sees all clients." />
                <ModuleCard id="M-07" title="Approval System" description="The review-and-approve flow." />
             </div>
             <ModulePanel id="M-08 + M-09" title="Content Calendar & Publishing">
                Once content is approved, it gets placed on a calendar and published automatically.
             </ModulePanel>
          </section>

          {/* Roles Section */}
          <section id="roles" className="mb-20">
             <SectionHeader number="11" title="Role Cards" />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RoleCard 
                  title="Account Manager" 
                  icon={<User size={20} />} 
                  badgeText="Takeout Media"
                  variant="dark"
                >
                  <RoleBullet variant="brand">Create brands and invite clients</RoleBullet>
                  <RoleBullet variant="brand">Manage subscription and billing</RoleBullet>
                  <RoleBullet variant="brand">Full analytics visibility</RoleBullet>
                </RoleCard>

                <RoleCard 
                  title="Client Admin" 
                  icon={<Building size={20} />} 
                  badgeText="Client Side"
                  variant="client"
                >
                  <RoleBullet>Approve or reject content deliverables</RoleBullet>
                  <RoleBullet>View brand-specific calendars</RoleBullet>
                  <RoleBullet>Invite team members to review</RoleBullet>
                </RoleCard>
             </div>
          </section>

          {/* Alert Items Section */}
          <section id="alerts" className="mb-20">
             <SectionHeader number="12" title="Alert Items" />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AlertItem 
                  title="Post Approved" 
                  description="Your recent content for Takeout Media has been approved by the client." 
                  icon={<Check size={14} />}
                />
                <AlertItem 
                  title="Changes Requested" 
                  description="A client has requested changes on the 'M-02 Brand Settings' deliverable." 
                  icon={<FileText size={14} />}
                />
             </div>
          </section>

          {/* Forms Section */}
          <section id="forms" className="mb-20">
             <SectionHeader number="13" title="Form Inputs" />
             <div className="max-w-md space-y-6">
                <div className="space-y-2">
                   <label className="text-sm font-medium">Brand Name</label>
                   <Input placeholder="e.g. Takeout Media" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-medium">Tone of Voice</label>
                   <Input placeholder="e.g. Bold, conversational" />
                </div>
             </div>
          </section>

          {/* Status Section */}
          <section id="status" className="mb-20">
             <SectionHeader number="14" title="Status" />
             <div className="flex gap-6">
                <div className="flex items-center gap-2 text-sm">
                   <div className="h-2 w-2 rounded-full bg-success" />
                   Connected
                </div>
                <div className="flex items-center gap-2 text-sm">
                   <div className="h-2 w-2 rounded-full bg-warning" />
                   Pending setup
                </div>
                <div className="flex items-center gap-2 text-sm">
                   <div className="h-2 w-2 rounded-full bg-destructive" />
                   Disconnected
                </div>
             </div>
          </section>

          {/* Avatars Section */}
          <section id="avatars" className="mb-20">
             <SectionHeader number="15" title="Avatars" />
             <div className="flex items-center gap-6">
                <Avatar><AvatarFallback>TM</AvatarFallback></Avatar>
                <Avatar className="h-12 w-12"><AvatarFallback>AK</AvatarFallback></Avatar>
                <div className="flex -space-x-3">
                   <Avatar className="border-2 border-white"><AvatarFallback>JD</AvatarFallback></Avatar>
                   <Avatar className="border-2 border-white"><AvatarFallback>NB</AvatarFallback></Avatar>
                   <Avatar className="border-2 border-white bg-muted text-muted-foreground"><AvatarFallback>+4</AvatarFallback></Avatar>
                </div>
             </div>
          </section>

          {/* Lists Section */}
          <section id="lists" className="mb-20">
             <SectionHeader number="16" title="Bullet Lists" />
             <div className="max-w-md">
                <BulletList 
                  items={[
                    "Content tracked — no deliverables lost",
                    "Max time a client approval should sit",
                    "Visual calendar and pipeline for all social media",
                    "Configure brand guidelines and color palettes"
                  ]} 
                />
             </div>
          </section>

          {/* Hero Pattern Section */}
          <section id="hero" className="mb-20">
             <SectionHeader number="17" title="Hero / Nav" />
             <Hero 
                eyebrow="Product Requirements Document — Takeout Media Internal"
                title={<>The <span className="text-brand">Hive</span> —<br/>Takeout Media's<br/>Client & Brand OS</>}
                description="A web platform for Takeout Media to manage every client relationship — from the moment they sign up and pick a plan, all the way to published content and analytics."
                primaryAction={{ label: "Get Started" }}
                secondaryAction={{ label: "Learn More" }}
             />
          </section>

          {/* Sidebar Pattern Section */}
          <section id="sidebar-pattern" className="mb-20">
             <SectionHeader number="18" title="Sidebar Nav" />
             <div className="flex gap-12 items-start">
                <SidebarNav 
                  logo={<>The <span className="text-brand">Hive</span></>}
                  sections={[
                    {
                      label: "Overview",
                      items: [
                        { label: "Dashboard", href: "#", icon: <LayoutGrid size={16} />, active: true },
                        { label: "Clients", href: "#", icon: <Users size={16} />, count: 3 }
                      ]
                    },
                    {
                      label: "Content",
                      items: [
                        { label: "Calendar", href: "#", icon: <Calendar size={16} /> },
                        { label: "Approvals", href: "#", icon: <CheckSquare size={16} />, count: 7 }
                      ]
                    }
                  ]}
                  className="rounded-xl overflow-hidden"
                />
                <div className="flex-1 space-y-4 text-sm text-muted-foreground leading-relaxed pt-4">
                   <p><strong className="text-foreground">Sidebar Navigation</strong> is used in both the Takeout Team Dashboard and the Client Portal.</p>
                </div>
             </div>
          </section>

          {/* Section Headers Section */}
          <section id="section-header" className="mb-20">
             <SectionHeader number="19" title="Section Headers" />
             <div className="p-8 bg-white border border-border rounded-xl">
                <SectionHeader number="08" title="Platform Modules — What Gets Built" className="mb-0 border-none pb-0" />
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

function ColorSwatch({ name, value, variable }: { name: string, value: string, variable: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all hover:shadow-md">
      <div className="h-24 w-full" style={{ backgroundColor: value }} />
      <div className="p-4">
        <div className="text-[0.75rem] font-bold text-foreground">{name}</div>
        <div className="font-mono text-[0.625rem] text-tertiary mt-1">{variable} · {value}</div>
      </div>
    </div>
  )
}
