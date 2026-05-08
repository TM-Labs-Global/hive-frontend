"use client"

import * as React from "react"
import { SidebarNav } from "@/components/ui/patterns"
import { LayoutGrid, CheckSquare, Calendar, BarChart2, Settings, Bell, Search, Globe, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#FDFDFD]">
      {/* Client Sidebar - Focused on Brand Dashboard */}
      <SidebarNav 
        logo={<>The <span className="text-brand">Hive</span></>}
        sections={[
          {
            label: "",
            items: [
              { label: "Home", href: "/portal", icon: <LayoutGrid size={18} />, active: true },
              { label: "Approvals", href: "/portal/approvals", icon: <CheckSquare size={18} />, count: 3 }
            ]
          },
          {
            label: "Content",
            items: [
              { label: "Calendar", href: "/portal/calendar", icon: <Calendar size={18} /> },
              { label: "Analytics", href: "/portal/analytics", icon: <BarChart2 size={18} /> }
            ]
          }
        ]}
        className="w-64 border-r border-border bg-white fixed h-screen"
      />

      <div className="flex-1 ml-64">
        {/* Top bar - Simpler */}
        <header className="h-16 border-b border-border bg-white/80 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-40">
           <div className="flex items-center gap-6">
              {/* Brand Switcher Placeholder */}
              <div className="flex items-center gap-3 py-1 px-3 rounded-lg hover:bg-muted cursor-pointer transition-colors border border-transparent hover:border-border">
                 <div className="h-8 w-8 rounded-md bg-brand/10 flex items-center justify-center text-brand font-black text-xs">JB</div>
                 <div className="font-bold text-sm">Jaiz Bank</div>
                 <ChevronDown size={14} className="text-muted-foreground" />
              </div>
              <Badge variant="default" className="bg-brand-bg text-brand border-brand/10">Professional Plan</Badge>
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
