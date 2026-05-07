"use client"

import * as React from "react"
import DashboardLayout from "@/components/pages/dashboard/dashboard-layout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ToolsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
        <div>
          <Badge variant="brand" className="mb-4">Creative Suite</Badge>
          <h1 className="font-display text-4xl font-black tracking-tight text-foreground">
            Brand <span className="text-brand">Tools</span>
          </h1>
          <p className="text-muted-foreground mt-2 text-lg max-w-2xl">
            Everything you need to scale your brand presence with AI-powered creativity.
          </p>
        </div>
        <div className="bg-white border border-border rounded-2xl p-4 flex items-center gap-4 shadow-sm h-fit">
           <div className="h-10 w-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
              <Sparkles size={20} />
           </div>
           <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Credits</div>
              <div className="text-sm font-bold">24 Free Remaining</div>
           </div>
        </div>
      </div>

      <div className="space-y-20 pb-20">
        {/* Section: Brand Essentials */}
        <section>
          <h2 className="font-display text-3xl font-bold mb-8">Brand Essentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <EssentialCard 
              title="Business Cards"
              label="Business cards"
              image="/tools/business-cards.png"
            />
            <EssentialCard 
              title="Branding Mockups"
              label="Branding mockups"
              image="/tools/branding-mockups.png"
            />
            <EssentialCard 
              title="Email Signature"
              label="Email signature"
              image="/tools/email-signature.png"
            />
            <EssentialCard 
              title="Brand Theme"
              label="Brand themes"
              image="/tools/brand-theme.png"
            />
          </div>
        </section>

        {/* Section: Brand Design Tools */}
        <section>
          <h2 className="font-display text-3xl font-bold mb-12">Brand Design Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <DesignToolCard 
              label="AI Logo Generator"
              image="/tools/ai-logo.png"
              tilt="left"
            />
            <DesignToolCard 
              label="AI Mockup Generator"
              image="/tools/ai-mockup.png"
              tilt="right"
            />
            <DesignToolCard 
              label="Brand Video Generator"
              image="/tools/ai-video.png"
              tilt="left"
            />
            <DesignToolCard 
              label="AI Social Post"
              image="/tools/ai-social.png"
              tilt="right"
            />
            <DesignToolCard 
              label="AI Pitch Deck"
              image="/tools/ai-pitch.png"
              tilt="left"
            />
          </div>
        </section>
      </div>
    </DashboardLayout>
  )
}

function EssentialCard({ title, label, image }: any) {
  return (
    <Card className="group border-none shadow-sm hover:shadow-md transition-all duration-300 bg-white overflow-hidden flex flex-col">
       <CardContent className="p-0 flex flex-col flex-1">
          <div className="p-5">
             <h4 className="font-bold text-sm text-foreground">{title}</h4>
          </div>
          <div className="px-5 pb-5 flex-1">
             <div className="aspect-[3/2] bg-[#F3F4F6] rounded-lg overflow-hidden flex items-center justify-center p-2">
                <img src={image} className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition-transform duration-500" />
             </div>
          </div>
          <div className="p-5 pt-0 mt-auto border-t border-muted flex items-center justify-between">
             <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{label}</span>
             <button className="flex items-center gap-1 text-brand font-black text-[10px] uppercase tracking-widest group-hover:gap-2 transition-all">
                Open <ArrowUpRight size={14} />
             </button>
          </div>
       </CardContent>
    </Card>
  )
}

function DesignToolCard({ label, image, tilt }: any) {
  return (
    <div className="flex flex-col items-center group cursor-pointer">
       <div className={cn(
         "aspect-square w-full rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2",
         tilt === 'left' ? "rotate-[-3deg] group-hover:rotate-0" : "rotate-[3deg] group-hover:rotate-0"
       )}>
          <img src={image} className="w-full h-full object-cover" />
       </div>
       <div className="mt-8">
          <span className="font-bold text-sm text-foreground transition-colors group-hover:text-brand">{label}</span>
       </div>
    </div>
  )
}
