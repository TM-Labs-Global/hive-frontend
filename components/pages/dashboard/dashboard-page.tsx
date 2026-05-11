"use client"

import * as React from "react"
import DashboardLayout from "./dashboard-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Check, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Clock, 
  Sparkles, 
  Zap, 
  Layout, 
  CheckSquare, 
  Plus, 
  FolderOpen,
  ArrowUpRight,
  TrendingUp,
  Brain,
  Presentation
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Mesh Gradient Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 left-20 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="mb-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
         <div>
            <div className="flex items-center gap-2 mb-4">
               <Badge className="bg-brand/10 text-brand border-none px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-widest">Brand Dashboard</Badge>
               <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-600 rounded-full font-bold text-[10px] uppercase tracking-widest">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  Live Sync
               </div>
            </div>
            <h1 className="font-display text-4xl font-black tracking-tight text-foreground leading-[1.1]">
               Welcome back, <br />
               <span className="text-brand">Jaiz Bank</span>
            </h1>
            <p className="text-muted-foreground mt-4 text-lg max-w-xl font-medium">
               Your brand identity is synced across 4 platforms. Here's your weekly intelligence report.
            </p>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <HeaderStat label="Storage Usage" value="65%" progress={65} />
            <HeaderStat 
               label="Hive Credits" 
               value="24" 
               sub="Free generations left" 
               icon={<Sparkles size={14} className="text-brand" />} 
            />
         </div>
      </div>

      {/* Quick Actions Grid - Glassmorphic Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16 items-stretch">
         <ActionCard 
            title="Social Media Post" 
            desc="AI-generated posts tuned to your voice."
            icon={<Zap size={22} />}
            href="/social-media"
            variant="brand"
         />
         <ActionCard 
            title="Create Mockup" 
            desc="Reality-grade mockups in one click."
            icon={<Layout size={22} />}
            href="/tools?tab=mockups"
            variant="blue"
         />
         <ActionCard 
            title="Approvals Waiting" 
            desc="Review 3 new items from your team."
            icon={<CheckSquare size={22} />}
            href="/approvals"
            variant="orange"
            badge={3}
         />
         <ActionCard 
            title="Create Pitch Deck" 
            desc="AI-generated presentations in your voice."
            icon={<Presentation size={22} />}
            href="/tools?tab=pitch"
            variant="purple"
         />
         <ActionCard 
            title="Upload to Assets" 
            desc="Sync logos, fonts, and brand assets."
            icon={<Plus size={22} />}
            href="/assets"
            variant="black"
         />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
         {/* Main Column */}
         <div className="lg:col-span-2 space-y-16">
            {/* Pending Approvals with Refined Cards */}
            <section>
               <div className="flex items-center justify-between mb-8">
                  <h3 className="font-display text-3xl font-black tracking-tight">Pending Approvals</h3>
                  <Button variant="ghost" className="text-brand font-black text-xs uppercase tracking-widest hover:bg-brand/5" asChild>
                     <Link href="/approvals">View All <ArrowRight className="ml-2" size={16} /></Link>
                  </Button>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Link href="/approvals" className="block">
                     <ApprovalCard 
                        title="Brand Launch Phase 1" 
                        platforms={["instagram", "linkedin"]}
                        deadline="2d left"
                        author="Michealla Ezima"
                        image="/images/brand-launch-phase-1.jpg"
                     />
                  </Link>
                  <Link href="/approvals" className="block">
                     <ApprovalCard 
                        title="Weekly Strategy Brief" 
                        platforms={["facebook"]}
                        deadline="4d left"
                        author="Chiamaka"
                        image="/images/weekly-trategy-rief.jpg"
                     />
                  </Link>
                </div>
            </section>

            {/* Smart Recommendation Section */}
            <section className="bg-surface-dark rounded-[2.5rem] p-10 text-white overflow-hidden relative shadow-2xl shadow-black/10">
               <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                  <Brain size={160} />
               </div>
               <div className="relative z-10">
                  <Badge className="bg-brand text-white border-none mb-6">AI Suggestion</Badge>
                  <h3 className="font-display text-3xl font-black mb-4 tracking-tight">Boost your Engagement</h3>
                  <p className="text-white/60 mb-8 max-w-lg text-lg leading-relaxed">
                     Based on your recent <span className="text-white font-bold">Jaiz Bank</span> DNA updates, we recommend generating a set of LinkedIn banner mockups to keep your profile fresh.
                  </p>
                  <Button className="bg-brand hover:bg-brand-dark h-12 px-8 font-black rounded-xl">
                     Generate Now <Sparkles className="ml-2" size={18} />
                  </Button>
               </div>
            </section>

            {/* Activity List */}
            <section>
               <h3 className="font-display text-2xl font-black mb-8 tracking-tight">Brand Activity</h3>
               <div className="space-y-4">
                  <ActivityTile 
                     user="Michealla Ezima"
                     action="synced 4 new documents to"
                     target="Internal Docs"
                     time="2h ago"
                     icon={<FolderOpen size={16} />}
                  />
                  <ActivityTile 
                     user="System"
                     action="auto-optimized DNA for"
                     target="Tone of Voice"
                     time="5h ago"
                     icon={<Sparkles size={16} />}
                     isSystem
                  />
               </div>
            </section>
         </div>

         {/* Sidebar */}
         <div className="space-y-12">
            {/* Intelligence / Pulse */}
            <section>
               <h3 className="font-display text-2xl font-black mb-8 tracking-tight">Intelligence</h3>
               <div className="space-y-4">
                  <PulseCard label="Weekly Reach" value="+12.4%" trend="up" data={[30, 45, 35, 50, 40, 60]} />
                  <PulseCard label="Engagements" value="4.8k" trend="up" data={[20, 25, 22, 30, 28, 35]} />
                  <PulseCard label="Brand Sentiment" value="98%" trend="neutral" data={[95, 96, 98, 97, 98, 98]} />
               </div>
            </section>

            {/* DNA Status Card */}
            <section>
               <Card className="bg-white border-2 border-brand/10 p-8 rounded-[2.5rem] shadow-xl shadow-brand/5 relative overflow-hidden group hover:border-brand/30 transition-all">
                  <div className="absolute -top-4 -right-4 h-24 w-24 bg-brand/5 rounded-full blur-2xl group-hover:bg-brand/10 transition-colors" />
                  <div className="relative z-10">
                     <div className="h-8 w-8 rounded-md bg-brand/10 flex items-center justify-center text-brand font-black text-xs mb-4">YB</div>
                     <h3 className="font-display text-lg font-black tracking-tight text-foreground">Your Brand</h3>
                     <p className="text-xs text-muted-foreground font-medium mb-8">contact@yourbrand.com</p>
                     <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                        Your identity guidelines are fully integrated. AI tools are now context-aware.
                     </p>
                     <Button variant="secondary" className="w-full border-brand/20 text-brand font-black hover:bg-brand hover:text-white transition-all rounded-xl" asChild>
                        <Link href="/brand-dna">Open Brain Box <ArrowRight size={16} className="ml-2" /></Link>
                     </Button>
                  </div>
               </Card>
            </section>
         </div>
      </div>
    </DashboardLayout>
  )
}

function HeaderStat({ label, value, progress, sub, icon }: any) {
   return (
      <div className="bg-white/80 backdrop-blur-md border border-white/50 shadow-xl shadow-black/5 rounded-3xl p-5 min-w-[200px]">
         <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-2 block">{label}</span>
         <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
               {icon}
               <span className="text-2xl font-black tracking-tighter text-foreground">{value}</span>
            </div>
            {sub && <span className="text-[10px] font-bold text-muted-foreground">{sub}</span>}
         </div>
         {progress !== undefined && (
            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
               <div className="h-full bg-brand transition-all duration-1000 ease-out" style={{ width: `${progress}%` }} />
            </div>
         )}
      </div>
   )
}

function ActionCard({ title, desc, icon, href, variant, badge }: any) {
   const variants: any = {
      brand: "bg-brand/10 text-brand",
      blue: "bg-blue-500/10 text-blue-600",
      orange: "bg-orange-500/10 text-orange-600",
      black: "bg-black/5 text-black",
      purple: "bg-purple-500/10 text-purple-600"
   }

   return (
      <Link href={href} className="h-full flex">
         <Card className="group flex-1 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 cursor-pointer border border-transparent hover:border-brand/10 bg-white rounded-3xl p-7 flex flex-col relative overflow-hidden min-h-[220px]">
            <div className="flex items-center justify-between mb-8">
               <div className={cn("h-14 w-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110", variants[variant])}>
                  {React.cloneElement(icon as React.ReactElement<any>, { size: 24 })}
               </div>
               {badge && (
                  <div className="h-7 w-7 bg-brand text-white rounded-xl flex items-center justify-center text-[11px] font-black shadow-lg shadow-brand/40">
                     {badge}
                  </div>
               )}
            </div>
            
            <div className="mt-auto">
               <div className="flex items-center gap-2 mb-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand" />
                  <span className="text-xs font-bold text-foreground group-hover:text-brand">Your Brand</span>
               </div>
               <h4 className="font-black text-base mb-1.5 group-hover:text-brand transition-colors tracking-tight">{title}</h4>
               <p className="text-[12px] text-muted-foreground leading-relaxed font-medium opacity-80">{desc}</p>
            </div>

            {/* Subtle Background Pattern */}
            <div className={cn("absolute -bottom-6 -right-6 h-24 w-24 opacity-0 group-hover:opacity-10 transition-all duration-500 blur-2xl rounded-full", variants[variant])} />
         </Card>
      </Link>
   )
}

function ApprovalCard({ title, platforms, deadline, author, image }: any) {
   return (
      <div className="group cursor-pointer flex flex-col h-full">
         <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10 mb-5">
            <img src={image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute top-4 left-4 flex gap-2">
               {platforms.map((p: any) => (
                  <div key={p} className="h-8 w-8 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/50">
                     {p === 'instagram' && <Instagram size={14} className="text-pink-600" />}
                     {p === 'linkedin' && <Linkedin size={14} className="text-blue-600" />}
                     {p === 'facebook' && <Facebook size={14} className="text-blue-800" />}
                  </div>
               ))}
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
               <Button className="bg-white text-black hover:bg-white/90 rounded-xl h-10 px-6 font-black text-xs uppercase tracking-widest shadow-xl">
                  Review Now
               </Button>
               <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full border-2 border-white overflow-hidden shadow-lg">
                     <img src={`https://i.pravatar.cc/100?u=${author}`} className="w-full h-full object-cover" />
                  </div>
               </div>
            </div>
         </div>
         <div className="flex items-start justify-between px-2 flex-1">
            <div className="flex-1 pr-4">
               <h4 className="font-black text-base group-hover:text-brand transition-colors line-clamp-1">{title}</h4>
               <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest block mt-0.5">Requested by {author}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-orange-500/10 text-orange-600 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
               <Clock size={12} /> {deadline}
            </div>
         </div>
      </div>
   )
}

function PulseCard({ label, value, trend, data }: any) {
   return (
      <div className="bg-white border-none shadow-xl shadow-black/5 rounded-3xl p-6 hover:shadow-2xl transition-all group">
         <div className="flex items-center justify-between mb-4">
            <div>
               <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block mb-1">{label}</span>
               <div className="flex items-center gap-2">
                  <span className="text-2xl font-black tracking-tight text-foreground">{value}</span>
                  <div className={cn(
                     "flex items-center gap-0.5 text-[10px] font-black uppercase",
                     trend === 'up' ? "text-green-500" : "text-muted-foreground"
                  )}>
                     {trend === 'up' && <TrendingUp size={12} />}
                     {trend === 'up' ? "+12%" : "stable"}
                  </div>
               </div>
            </div>
            {/* Mock Sparkline */}
            <div className="flex items-end gap-1 h-8">
               {data.map((h: number, i: number) => (
                  <div 
                     key={i} 
                     className="w-1.5 bg-brand/10 rounded-full group-hover:bg-brand/30 transition-colors" 
                     style={{ height: `${h}%` }} 
                  />
               ))}
            </div>
         </div>
      </div>
   )
}

function ActivityTile({ user, action, target, time, icon, isSystem }: any) {
   return (
      <div className="flex items-center justify-between p-4 rounded-2xl border-none bg-white shadow-sm hover:shadow-md transition-all group">
         <div className="flex items-center gap-4">
            <div className={cn(
               "h-12 w-12 rounded-xl flex items-center justify-center transition-colors",
               isSystem ? "bg-brand/10 text-brand" : "bg-muted text-muted-foreground"
            )}>
               {icon}
            </div>
            <div className="text-sm">
               <span className="font-black text-foreground">{user}</span>
               <span className="text-muted-foreground mx-1">{action}</span>
               <span className="font-black text-brand">{target}</span>
               <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-black mt-1">
                  {time}
               </div>
            </div>
         </div>
         <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground group-hover:text-brand transition-colors rounded-xl">
            <ArrowUpRight size={18} />
         </Button>
      </div>
   )
}
