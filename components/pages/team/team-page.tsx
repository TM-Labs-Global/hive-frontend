"use client"

import * as React from "react"
import DashboardLayout from "../dashboard/dashboard-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Plus, 
  Mail, 
  Shield, 
  MoreHorizontal, 
  UserPlus, 
  Trash2,
  Check,
  X
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// --- Mock Data ---

const TEAM_MEMBERS = [
  { name: "Sarah Jenkins", email: "sarah@jaizbank.com", role: "Client Admin", status: "Active", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop" },
  { name: "Mark Wilson", email: "mark@jaizbank.com", role: "Team Member", status: "Active", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop" },
  { name: "Jessica Lee", email: "jess@jaizbank.com", role: "Team Member", status: "Pending", avatar: "" },
]

export default function TeamPage() {
  const [inviteEmail, setInviteEmail] = React.useState("")
  const [isInviting, setIsInviting] = React.useState(false)

  const handleInvite = () => {
     setIsInviting(true)
     setTimeout(() => {
        setIsInviting(false)
        setInviteEmail("")
        // Mock success
     }, 1000)
  }

  return (
    <DashboardLayout>
      <div className="mb-10 flex items-end justify-between">
         <div>
            <Badge variant="brand" className="mb-4">Brand Team</Badge>
            <h1 className="font-display text-4xl font-black tracking-tight text-foreground">
               Team <span className="text-brand">Management</span>
            </h1>
            <p className="text-muted-foreground mt-2">Manage who has access to the Jaiz Bank portal.</p>
         </div>

         <Dialog>
            <DialogTrigger asChild>
               <Button size="lg" className="h-12 px-6 font-bold shadow-brand">
                  <UserPlus className="mr-2" size={18} /> Invite Member
               </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] border-none shadow-2xl rounded-2xl p-8">
               <DialogHeader className="mb-6">
                  <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                     <UserPlus size={24} />
                  </div>
                  <DialogTitle className="font-display text-2xl font-bold">Invite Team Member</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                     Invite your marketing or comms team to review and comment on content.
                  </DialogDescription>
               </DialogHeader>
               <div className="space-y-6">
                  <div className="space-y-2">
                     <label className="text-[0.625rem] font-black text-muted-foreground uppercase tracking-widest">Email Address</label>
                     <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50" size={18} />
                        <Input 
                           placeholder="colleague@company.com" 
                           className="pl-10 h-12 bg-muted/30 border-none focus:ring-brand"
                           value={inviteEmail}
                           onChange={(e) => setInviteEmail(e.target.value)}
                        />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[0.625rem] font-black text-muted-foreground uppercase tracking-widest">Role</label>
                     <div className="grid grid-cols-2 gap-3">
                        <RoleOption 
                           active={true} 
                           title="Member" 
                           desc="Can review & comment" 
                           icon={<Check size={14} />} 
                        />
                        <RoleOption 
                           active={false} 
                           title="Admin" 
                           desc="Full brand control" 
                           icon={<Shield size={14} />} 
                        />
                     </div>
                  </div>
               </div>
               <DialogFooter className="mt-8">
                  <Button className="w-full h-12 font-bold shadow-brand" onClick={handleInvite} disabled={!inviteEmail || isInviting}>
                     {isInviting ? "Sending Invitation..." : "Send Invitation"}
                  </Button>
               </DialogFooter>
            </DialogContent>
         </Dialog>
      </div>

      <Card className="border-border bg-white shadow-sm overflow-hidden">
         <CardContent className="p-0">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-muted/30 border-b border-border">
                     <th className="p-6 text-[0.625rem] font-black text-muted-foreground uppercase tracking-widest">Team Member</th>
                     <th className="p-6 text-[0.625rem] font-black text-muted-foreground uppercase tracking-widest">Role</th>
                     <th className="p-6 text-[0.625rem] font-black text-muted-foreground uppercase tracking-widest">Status</th>
                     <th className="p-6 text-[0.625rem] font-black text-muted-foreground uppercase tracking-widest text-right">Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {TEAM_MEMBERS.map((member, i) => (
                     <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/10 transition-colors">
                        <td className="p-6">
                           <div className="flex items-center gap-3">
                              <Avatar className="h-10 w-10 border border-border">
                                 <AvatarImage src={member.avatar} />
                                 <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                 <div className="font-bold text-sm">{member.name}</div>
                                 <div className="text-xs text-muted-foreground">{member.email}</div>
                              </div>
                           </div>
                        </td>
                        <td className="p-6">
                           <div className="flex items-center gap-2 text-xs font-medium">
                              <Shield size={14} className="text-brand" />
                              {member.role}
                           </div>
                        </td>
                        <td className="p-6">
                           <Badge variant={member.status === 'Active' ? 'success' : 'default'} className="text-[0.625rem]">
                              {member.status}
                           </Badge>
                        </td>
                        <td className="p-6 text-right">
                           <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal size={16} />
                           </Button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </CardContent>
      </Card>
    </DashboardLayout>
  )
}

function RoleOption({ title, desc, active, icon }: any) {
   return (
      <div className={cn(
         "p-4 rounded-xl border transition-all cursor-pointer",
         active ? "border-brand bg-brand/5" : "border-border bg-white hover:bg-muted/50"
      )}>
         <div className="flex items-center justify-between mb-1">
            <div className="text-xs font-bold">{title}</div>
            {active && <div className="text-brand">{icon}</div>}
         </div>
         <div className="text-[0.625rem] text-muted-foreground leading-relaxed">{desc}</div>
      </div>
   )
}

function cn(...inputs: any[]) {
   return inputs.filter(Boolean).join(" ")
}
