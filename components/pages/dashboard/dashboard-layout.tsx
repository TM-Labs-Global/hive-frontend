"use client"

import * as React from "react"
import { SidebarNav } from "@/components/ui/patterns"
import { 
  LayoutGrid, 
  CheckSquare, 
  Calendar, 
  BarChart2, 
  Settings, 
  Bell, 
  Search, 
  ChevronDown, 
  Sparkles, 
  FolderOpen, 
  Zap, 
  Box,
  Users,
  FileText,
  Clock
} from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Plus, LogOut } from "lucide-react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen bg-[#FDFDFD]">
      {/* Client Sidebar - Focused on Brand Dashboard */}
      <SidebarNav 
        logo={<span className="text-white">The <span className="text-brand">Hive</span></span>}
        sections={[
          {
            label: "Management",
            items: [
              { label: "Dashboard", href: "/dashboard", icon: <LayoutGrid size={18} />, active: pathname === "/dashboard" },
              { label: "Brand DNA", href: "/brand-dna", icon: <Sparkles size={18} />, active: pathname.startsWith("/brand-dna") },
              { label: "Assets", href: "/assets", icon: <FolderOpen size={18} />, active: pathname === "/assets" },
              { label: "Tools", href: "/tools", icon: <Zap size={18} />, active: pathname === "/tools" }
            ]
          },
          {
            label: "Workflow",
            items: [
              { label: "Approvals", href: "/approvals", icon: <CheckSquare size={18} />, active: pathname === "/approvals", count: 3 },
              { label: "Team", href: "/team", icon: <Users size={18} />, active: pathname === "/team" },
              { label: "Content", href: "/content", icon: <FileText size={18} />, active: pathname === "/content" }
            ]
          },
          {
            label: "Insights",
            items: [
              { label: "Calendar", href: "/calendar", icon: <Calendar size={18} />, active: pathname === "/calendar" },
              { label: "Analytics", href: "/analytics", icon: <BarChart2 size={18} />, active: pathname === "/analytics" }
            ]
          }
        ]}
        footer={
           <div className="p-4 space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                 <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Brand Storage</span>
                    <span className="text-[10px] font-bold text-brand">65%</span>
                 </div>
                 <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-brand w-[65%] rounded-full" />
                 </div>
                 <p className="text-[9px] text-white/30 mt-2 font-medium">1.2GB of 2GB used.</p>
              </div>
           </div>
        }
        className="w-64 border-r border-white/10 bg-[#0A0A0A] text-white fixed h-screen"
      />

      <div className="flex-1 ml-64">
        <header className="h-16 border-b border-border bg-white/80 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-40">
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 py-1 px-3 rounded-lg hover:bg-muted cursor-pointer transition-colors border border-transparent hover:border-border">
                 <div className="h-8 w-8 rounded-md bg-brand/10 flex items-center justify-center text-brand font-black text-xs">JB</div>
                 <div className="font-bold text-sm">Jaiz Bank</div>
                 <ChevronDown size={14} className="text-muted-foreground" />
              </div>
           </div>
           
           <div className="flex items-center gap-4">
              <Button size="icon" variant="ghost" className="relative text-muted-foreground hover:text-brand">
                 <Bell size={20} />
                 <span className="absolute top-2 right-2 h-2 w-2 bg-brand rounded-full border-2 border-white" />
              </Button>
              <div className="h-8 w-px bg-border mx-2" />
              
              <DropdownMenu>
                 <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-3 cursor-pointer group">
                       <Avatar className="h-9 w-9 border border-border group-hover:border-blue-500/50 transition-colors bg-blue-600">
                          <AvatarImage src="/images/default-brand/Jaiz Favicon.png" className="p-1.5" />
                          <AvatarFallback className="bg-blue-600 text-white">JB</AvatarFallback>
                       </Avatar>
                    </div>
                 </DropdownMenuTrigger>
                 <DropdownMenuContent className="w-72 p-0 rounded-[1.25rem] border-border shadow-2xl overflow-hidden mt-2" align="end">
                    <div className="p-6 text-center bg-white">
                       <div className="flex justify-center mb-3">
                          <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20 overflow-hidden p-3">
                             <img src="/images/default-brand/Jaiz Favicon.png" alt="Jaiz Bank" className="w-full h-full object-contain" />
                          </div>
                       </div>
                       <h3 className="font-display text-lg font-black tracking-tight text-foreground">Jaiz Bank</h3>
                       <p className="text-xs text-muted-foreground font-medium">contact@jaizbank.com</p>
                    </div>

                    <div className="px-5 pb-5 bg-white border-b border-border">
                       <Button className="w-full h-10 bg-brand hover:bg-brand-dark text-white font-black rounded-lg text-xs shadow-md shadow-brand/10" asChild>
                          <Link href="/billing">Upgrade</Link>
                       </Button>
                    </div>

                    <div className="bg-white">
                       <Link href="/dashboard" className="px-5 py-3.5 flex items-center gap-3 hover:bg-muted/50 cursor-pointer transition-colors group">
                          <div className="h-1.5 w-1.5 rounded-full bg-brand" />
                          <span className="text-xs font-bold text-foreground group-hover:text-brand">Jaiz Bank</span>
                       </Link>
                       
                       <DropdownMenuSeparator className="mx-0" />
                       
                       <Link href="/brand-dna/setup" className="px-5 py-3.5 flex items-center gap-3 hover:bg-muted/50 cursor-pointer transition-colors group">
                          <Plus size={16} className="text-muted-foreground group-hover:text-brand" />
                          <span className="text-xs font-bold text-foreground group-hover:text-brand">Create Brand</span>
                       </Link>

                       <DropdownMenuSeparator className="mx-0" />

                       <Link href="/login" className="px-5 py-3.5 flex items-center gap-3 hover:bg-muted/50 cursor-pointer transition-colors group">
                          <LogOut size={16} className="text-muted-foreground group-hover:text-destructive" />
                          <span className="text-xs font-bold text-foreground group-hover:text-destructive">Logging out</span>
                       </Link>
                    </div>
                 </DropdownMenuContent>
              </DropdownMenu>
           </div>
        </header>

        <main className="p-10 bg-[#FDFDFD] min-h-[calc(100vh-64px)]">
           {children}
        </main>
      </div>
    </div>
  )
}
