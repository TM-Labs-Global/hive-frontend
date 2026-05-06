"use client"

import * as React from "react"
import PortalLayout from "./portal-layout"
import { StatCard } from "@/components/ui/stat-card"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertItem } from "@/components/ui/alert-item"
import { Check, ArrowRight, Instagram, Facebook, Linkedin, Clock, Sparkles, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function PortalPage() {
  return (
    <PortalLayout>
      <div className="mb-12">
         <Badge variant="brand" className="mb-4">Brand Dashboard</Badge>
         <h1 className="font-display text-5xl font-black tracking-tight text-foreground">
            Welcome back, <span className="text-brand">Takeout Media</span>
         </h1>
         <p className="text-muted-foreground mt-2 text-lg">Here's what's happening with your brand this week.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Actionable Column: Approvals */}
         <div className="lg:col-span-2 space-y-8">
            <section>
               <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-2xl font-bold flex items-center gap-2">
                     Waiting for Approval <span className="h-6 w-6 bg-brand text-white rounded-full flex items-center justify-center text-[0.625rem] font-black">3</span>
                  </h3>
                  <Button variant="ghost" className="text-brand font-bold" asChild>
                     <Link href="/portal/approvals">View All Approvals <ArrowRight className="ml-2" size={16} /></Link>
                  </Button>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ApprovalPreviewCard 
                     title="Brand Launch Phase 1" 
                     platforms={["instagram", "linkedin"]}
                     daysLeft={2}
                     image="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=400&fit=crop"
                  />
                  <ApprovalPreviewCard 
                     title="Weekly Strategy Brief" 
                     platforms={["facebook"]}
                     daysLeft={4}
                     image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop"
                  />
               </div>
            </section>

            <section>
               <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-2xl font-bold">Upcoming Scheduled</h3>
                  <Button variant="ghost" className="text-muted-foreground font-bold" asChild>
                     <Link href="/portal/calendar">Full Calendar <ArrowRight className="ml-2" size={16} /></Link>
                  </Button>
               </div>
               <div className="space-y-4">
                  <ScheduledItem 
                     title="Product Showcase Reel" 
                     platform="Instagram" 
                     date="Tomorrow, 10:00 AM" 
                     type="Video"
                  />
                  <ScheduledItem 
                     title="Client Testimonial Series" 
                     platform="LinkedIn" 
                     date="Wed, May 14" 
                     type="Carousel"
                  />
               </div>
            </section>
         </div>

         {/* Insight Column: Analytics & Team */}
         <div className="space-y-10">
            <section>
               <h3 className="font-display text-2xl font-bold mb-6">Brand Pulse</h3>
               <div className="grid grid-cols-1 gap-4">
                  <StatCard value="+12.4%" label="Weekly Reach" />
                  <StatCard value="4.8k" label="Engagements" />
                  <StatCard value="128" label="New Followers" />
               </div>
            </section>

            <section>
               <Card className="bg-brand text-white border-none shadow-brand overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                     <Sparkles size={80} />
                  </div>
                  <CardContent className="pt-8">
                     <h4 className="font-display text-lg font-bold mb-2">Team Strategy</h4>
                     <p className="text-xs text-white/80 mb-6 leading-relaxed">
                        Your dedicated Account Manager, **Alex Karev**, is working on next month's strategy document.
                     </p>
                     <Button variant="ghost-dark" className="w-full justify-between bg-white/10 hover:bg-white/20 border-none">
                        View Team <ArrowRight size={16} />
                     </Button>
                  </CardContent>
               </Card>
            </section>

            <section>
               <h3 className="font-display text-lg font-bold mb-4">Recent Notes</h3>
               <div className="space-y-3">
                  <AlertItem 
                     title="Caption Update" 
                     description="Alex updated the caption for #442." 
                     icon={<MessageCircle size={14} />}
                  />
               </div>
            </section>
         </div>
      </div>
    </PortalLayout>
  )
}

function ApprovalPreviewCard({ title, platforms, daysLeft, image }: any) {
  return (
    <Card className="group cursor-pointer border-border hover:border-brand/40 transition-all shadow-sm overflow-hidden">
      <div className="aspect-video bg-muted relative overflow-hidden">
         <img src={image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
         <div className="absolute top-3 left-3 flex gap-1">
            {platforms.includes("instagram") && <div className="h-6 w-6 rounded-md bg-white/90 backdrop-blur flex items-center justify-center shadow-sm"><Instagram size={12} className="text-pink-600" /></div>}
            {platforms.includes("linkedin") && <div className="h-6 w-6 rounded-md bg-white/90 backdrop-blur flex items-center justify-center shadow-sm"><Linkedin size={12} className="text-blue-600" /></div>}
            {platforms.includes("facebook") && <div className="h-6 w-6 rounded-md bg-white/90 backdrop-blur flex items-center justify-center shadow-sm"><Facebook size={12} className="text-blue-800" /></div>}
         </div>
      </div>
      <CardContent className="p-4">
         <div className="flex items-center justify-between mb-1">
            <h4 className="font-bold text-sm truncate pr-4">{title}</h4>
            <div className="flex items-center gap-1 text-[0.625rem] text-orange font-black uppercase tracking-tighter">
               <Clock size={10} /> {daysLeft}d left
            </div>
         </div>
         <Button variant="ghost" size="sm" className="w-full mt-2 h-8 text-[0.625rem] font-black uppercase tracking-widest border border-border group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-colors">
            Review Content
         </Button>
      </CardContent>
    </Card>
  )
}

function ScheduledItem({ title, platform, date, type }: any) {
   return (
      <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-white hover:bg-muted/30 transition-colors">
         <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
               {platform === 'Instagram' ? <Instagram size={20} /> : platform === 'LinkedIn' ? <Linkedin size={20} /> : <Facebook size={20} />}
            </div>
            <div>
               <div className="font-bold text-sm">{title}</div>
               <div className="text-[0.625rem] text-muted-foreground uppercase tracking-widest font-bold">
                  {platform} • {type}
               </div>
            </div>
         </div>
         <div className="text-right">
            <div className="text-[0.625rem] text-muted-foreground uppercase tracking-widest font-bold mb-1">Scheduled</div>
            <div className="text-xs font-bold">{date}</div>
         </div>
      </div>
   )
}
