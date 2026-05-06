"use client"

import * as React from "react"
import { SidebarNav } from "@/components/ui/patterns"
import { LayoutGrid, CheckSquare, Calendar, BarChart2, Bell, ChevronDown, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { usePathname } from "next/navigation"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen bg-[#FDFDFD]">
      {/* Client Sidebar - Focused on Brand Space */}
      <SidebarNav 
        logo={<span className="text-white">The <span className="text-brand">Hive</span></span>}
        sections={[
          {
            label: "Brand Space",
            items: [
              { label: "Dashboard", href: "/dashboard", icon: <LayoutGrid size={18} />, active: pathname === "/dashboard" },
              { label: "Approvals", href: "/approvals", icon: <CheckSquare size={18} />, active: pathname === "/approvals", count: 3 },
              { label: "Team", href: "/team", icon: <Users size={18} />, active: pathname === "/team" }
            ]
          },
          {
            label: "Content",
            items: [
              { label: "Calendar", href: "/calendar", icon: <Calendar size={18} />, active: pathname === "/calendar" },
              { label: "Analytics", href: "/analytics", icon: <BarChart2 size={18} />, active: pathname === "/analytics" }
            ]
          }
        ]}
        className="w-64 fixed h-screen"
      />

      <div className="flex-1 ml-64">
        {/* Top bar - Client Focused */}
        <header className="h-16 border-b border-border bg-white/80 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-40">
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 py-1 px-3 rounded-lg hover:bg-muted cursor-pointer transition-colors border border-transparent hover:border-border">
                 <div className="h-8 w-8 rounded-md bg-brand/10 flex items-center justify-center text-brand font-black text-xs">TM</div>
                 <div className="font-bold text-sm">Takeout Media</div>
                 <ChevronDown size={14} className="text-muted-foreground" />
              </div>
              <Badge variant="secondary" className="bg-brand-bg text-brand border-brand/10">Professional Plan</Badge>
           </div>
           
           <div className="flex items-center gap-4">
              <Button size="icon" variant="ghost" className="relative text-muted-foreground hover:text-brand">
                 <Bell size={20} />
                 <span className="absolute top-2 right-2 h-2 w-2 bg-brand rounded-full border-2 border-white" />
              </Button>
              <div className="h-8 w-px bg-border mx-2" />
              <div className="flex items-center gap-3">
                 <Avatar className="h-9 w-9 border border-border">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=36&h=36&fit=crop" />
                    <AvatarFallback>SJ</AvatarFallback>
                 </Avatar>
              </div>
           </div>
        </header>

        {/* Content Area */}
        <main className="p-8 max-w-6xl">
           {children}
        </main>
      </div>
    </div>
  )
}
