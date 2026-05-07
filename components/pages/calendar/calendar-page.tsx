"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Instagram, 
  Linkedin, 
  Facebook, 
  Twitter,
  Search,
  Filter,
  Calendar as CalendarIcon,
  LayoutGrid,
  MoreHorizontal
} from "lucide-react"
import { cn } from "@/lib/utils"

// --- Mock Data ---

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const MONTHS = ["May 2026"]

const CALENDAR_POSTS = [
  { day: 12, title: "Brand Launch", platform: "instagram", status: "scheduled", type: "Reel" },
  { day: 12, title: "Identity Reveal", platform: "linkedin", status: "scheduled", type: "Post" },
  { day: 14, title: "Client Quote", platform: "facebook", status: "published", type: "Carousel" },
  { day: 18, title: "Tech Stack", platform: "twitter", status: "draft", type: "Thread" },
  { day: 22, title: "Meet the Team", platform: "instagram", status: "scheduled", type: "Story" },
]

// --- Sub-components ---

function CalendarCell({ day, posts, isToday }: { day: number | null, posts: any[], isToday?: boolean }) {
  if (!day) return <div className="h-40 bg-muted/20 border-b border-r border-border" />

  return (
    <div className={cn(
      "h-40 p-3 bg-white border-b border-r border-border group hover:bg-muted/30 transition-colors relative",
      isToday && "bg-brand/5"
    )}>
      <div className="flex items-center justify-between mb-2">
         <span className={cn(
            "text-xs font-bold",
            isToday ? "h-6 w-6 rounded-full bg-brand text-white flex items-center justify-center -ml-1.5" : "text-muted-foreground"
         )}>
            {day}
         </span>
         <button className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-muted transition-opacity">
            <Plus size={14} className="text-muted-foreground" />
         </button>
      </div>

      <div className="space-y-1.5">
         {posts.map((post, i) => (
            <div 
               key={i}
               className={cn(
                  "p-1.5 rounded-lg border flex items-center gap-2 shadow-sm cursor-pointer transition-all hover:scale-[1.02] active:scale-95",
                  post.status === 'published' ? "bg-success/5 border-success/20 text-success" :
                  post.status === 'scheduled' ? "bg-brand/5 border-brand/20 text-brand" :
                  "bg-muted border-border text-muted-foreground"
               )}
            >
               <div className="shrink-0">
                  {post.platform === 'instagram' && <Instagram size={12} />}
                  {post.platform === 'linkedin' && <Linkedin size={12} />}
                  {post.platform === 'facebook' && <Facebook size={12} />}
                  {post.platform === 'twitter' && <Twitter size={12} />}
               </div>
               <span className="text-[0.625rem] font-bold truncate leading-none">{post.title}</span>
            </div>
         ))}
      </div>
    </div>
  )
}

// --- Main Page ---

export default function CalendarPage({ isAdmin = false }: { isAdmin?: boolean }) {
  // Simple grid generation for May 2026 (starts on Friday = index 4)
  const emptyDays = 4
  const daysInMonth = 31
  const grid = Array.from({ length: 42 }, (_, i) => {
    const day = i - emptyDays + 1
    return (day > 0 && day <= daysInMonth) ? day : null
  })

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
         <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-white border border-border rounded-lg p-1">
               <Button variant="ghost" size="sm" className="h-8 px-4 font-bold text-xs bg-muted">Monthly</Button>
               <Button variant="ghost" size="sm" className="h-8 px-4 font-bold text-xs">Weekly</Button>
            </div>
            <div className="flex items-center gap-4">
               <Button variant="ghost" size="icon" className="h-10 w-10 border border-border"><ChevronLeft size={18} /></Button>
               <h2 className="font-display text-2xl font-black tracking-tight">{MONTHS[0]}</h2>
               <Button variant="ghost" size="icon" className="h-10 w-10 border border-border"><ChevronRight size={18} /></Button>
            </div>
         </div>

         <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 h-10 bg-white border border-border rounded-lg mr-4">
               <Search size={16} className="text-muted-foreground" />
               <input placeholder="Filter posts..." className="bg-transparent border-none text-xs font-medium outline-none w-32" />
            </div>
            <Button variant="secondary" className="border-border">
               <Filter className="mr-2" size={16} /> Filters
            </Button>
            {isAdmin && (
              <Button className="shadow-brand font-bold">
                 <Plus className="mr-2" size={18} /> New Post
              </Button>
            )}
         </div>
      </div>

      <Card className="border-border overflow-hidden bg-white shadow-sm">
         <div className="grid grid-cols-7 bg-muted/30 border-b border-border">
            {DAYS.map(day => (
               <div key={day} className="py-3 text-center text-[0.625rem] font-black uppercase tracking-widest text-muted-foreground border-r border-border last:border-r-0">
                  {day}
               </div>
            ))}
         </div>
         <div className="grid grid-cols-7">
            {grid.map((day, i) => (
               <CalendarCell 
                  key={i} 
                  day={day} 
                  isToday={day === 12}
                  posts={CALENDAR_POSTS.filter(p => p.day === day)} 
               />
            ))}
         </div>
      </Card>
    </div>
  )
}
