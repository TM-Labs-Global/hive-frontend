"use client"

import * as React from "react"
import DashboardLayout from "../dashboard/dashboard-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { 
  Check, 
  X, 
  MessageSquare, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Calendar, 
  Clock, 
  History, 
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Send,
  Music2
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

// Custom TikTok Icon
const TiktokIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

// --- Sub-components ---

function PlatformToggle({ active, icon: Icon, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "p-2 rounded-lg transition-all border",
        active ? "bg-brand/10 border-brand text-brand" : "bg-white border-border text-muted-foreground hover:bg-muted"
      )}
    >
      {typeof Icon === 'function' && Icon.name === 'TiktokIcon' ? <Icon size={18} /> : <Icon size={18} />}
    </button>
  )
}

function SocialPreview({ platform, content }: any) {
  return (
    <div className="bg-[#F3F4F6] rounded-2xl p-8 flex items-center justify-center min-h-[500px]">
      <Card className="w-full max-w-[400px] overflow-hidden shadow-2xl border-none">
        <div className="bg-white p-4 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/images/social-media-approval-icon.jpg" />
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-xs font-bold leading-none">Jaiz Bank</div>
              <div className="text-[0.625rem] text-muted-foreground">Sponsored</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className={cn("p-1.5 rounded-md", platform === 'instagram' ? "bg-pink-600/10 text-pink-600" : "bg-muted text-muted-foreground")}>
               <Instagram size={12} />
            </div>
            <div className={cn("p-1.5 rounded-md", platform === 'tiktok' ? "bg-black text-white" : "bg-muted text-muted-foreground")}>
               <TiktokIcon size={12} />
            </div>
          </div>
        </div>
        
        <div className="aspect-square bg-muted relative">
           <img 
            src="/images/approval-images.png" 
            alt="Post content"
            className="w-full h-full object-cover"
           />
        </div>

        <div className="p-4 bg-white space-y-3">
          <div className="flex items-center gap-4 text-muted-foreground">
             {platform === 'tiktok' ? (
                <>
                   <Music2 size={18} />
                   <MessageSquare size={18} />
                   <Send size={18} />
                </>
             ) : (
                <>
                   <Instagram size={18} />
                   <MessageSquare size={18} />
                   <Send size={18} />
                </>
             )}
          </div>
          <div className="text-[0.8rem] leading-snug">
             <span className="font-bold mr-2">jaizbankplc</span>
             {content.caption}
          </div>
          <div className="text-[0.7rem] text-brand font-medium">#jaizbank #ethicalbanking #noninterest</div>
        </div>
      </Card>
    </div>
  )
}

// --- Main Page ---

export default function ApprovalsPage() {
  const [activePlatform, setActivePlatform] = React.useState("instagram")
  const [showRevisions, setShowRevisions] = React.useState(false)

  const postContent = {
    title: "Ethical Banking Campaign",
    caption: "Jaiz Bank Plc’s Executive Management Team, led by the Managing Director, Haruna Musa, PhD, paid a working visit to the National Sugar Development Council, where they were received by the Executive Secretary, Kamar Bakrin, as part of ongoing efforts to create more value for our stakeholders.",
    scheduledFor: "May 12, 2026 - 10:00 AM",
    revisionCount: 2
  }

  return (
    <DashboardLayout>
      <div className="mb-8 flex items-center justify-between">
         <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-10 w-10 border border-border bg-white" onClick={() => window.history.back()}>
               <ChevronLeft size={20} />
            </Button>
            <div>
               <div className="flex items-center gap-3 mb-1">
                  <Badge variant="brand" className="text-[0.625rem]">M-07 / Stage 4</Badge>
                  <h1 className="font-display text-4xl font-black tracking-tight">{postContent.title}</h1>
               </div>
               <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar size={12} /> May 12, 2026</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> 10:00 AM</span>
                  <span className="flex items-center gap-1"><History size={12} /> {postContent.revisionCount} Revisions</span>
               </div>
            </div>
         </div>
         
         <div className="flex items-center gap-3">
            <Button variant="secondary" className="border-border">
               <Maximize2 className="mr-2" size={16} /> Fullscreen
            </Button>
            <Button variant="secondary" className="border-destructive text-destructive hover:bg-destructive/5">
               <X className="mr-2" size={16} /> Reject
            </Button>
            <Button variant="secondary" className="bg-brand-bg text-brand border-brand/20">
               <MessageSquare className="mr-2" size={16} /> Request Changes
            </Button>
            <Button className="shadow-brand font-bold px-8">
               <Check className="mr-2" size={18} /> Approve Post
            </Button>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         {/* Left: Preview & Platform Toggle */}
         <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-center gap-2 mb-2">
               <PlatformToggle active={activePlatform === "instagram"} icon={Instagram} onClick={() => setActivePlatform("instagram")} />
               <PlatformToggle active={activePlatform === "tiktok"} icon={TiktokIcon} onClick={() => setActivePlatform("tiktok")} />
               <PlatformToggle active={activePlatform === "facebook"} icon={Facebook} onClick={() => setActivePlatform("facebook")} />
               <PlatformToggle active={activePlatform === "linkedin"} icon={Linkedin} onClick={() => setActivePlatform("linkedin")} />
               <PlatformToggle active={activePlatform === "twitter"} icon={Twitter} onClick={() => setActivePlatform("twitter")} />
            </div>

            <SocialPreview platform={activePlatform} content={postContent} />

            <div className="grid grid-cols-2 gap-6">
               <Card className="bg-white border-border shadow-sm">
                  <CardContent className="p-6">
                     <h4 className="text-[0.625rem] font-black text-muted-foreground uppercase tracking-widest mb-4">Caption</h4>
                     <p className="text-sm leading-relaxed text-foreground font-medium">
                        {postContent.caption}
                     </p>
                  </CardContent>
               </Card>
               <Card className="bg-white border-border shadow-sm">
                  <CardContent className="p-6">
                     <h4 className="text-[0.625rem] font-black text-muted-foreground uppercase tracking-widest mb-4">Hashtags</h4>
                     <div className="flex flex-wrap gap-2">
                        {["#jaizbank", "#ethicalbanking", "#noninterest", "#financialfreedom"].map(h => (
                           <Badge key={h} variant="default" className="text-brand bg-brand-bg border-brand/10">{h}</Badge>
                        ))}
                     </div>
                  </CardContent>
               </Card>
            </div>
            
            {/* New: Brand Intelligence Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <Card className="md:col-span-1 bg-white border-border shadow-sm overflow-hidden group">
                  <div className="p-1 bg-brand" />
                  <CardContent className="p-6">
                     <div className="flex items-center justify-between mb-4">
                        <h4 className="text-[0.625rem] font-black text-muted-foreground uppercase tracking-widest">Brand Sync</h4>
                        <div className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                           <Check size={10} /> 98% Match
                        </div>
                     </div>
                     <div className="space-y-4">
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-2">
                              <div className="h-4 w-4 rounded-full bg-[#008751]" />
                              <span className="text-[10px] font-bold">#008751</span>
                           </div>
                           <Badge variant="success" className="text-[9px] h-5 px-1.5 border-green-200 text-green-600 bg-green-50">Primary</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-2">
                              <div className="h-4 w-4 rounded-full bg-white border border-border" />
                              <span className="text-[10px] font-bold">#FFFFFF</span>
                           </div>
                           <Badge variant="success" className="text-[9px] h-5 px-1.5 border-green-200 text-green-600 bg-green-50">Secondary</Badge>
                        </div>
                        <div className="pt-2 border-t border-border mt-2">
                           <div className="flex items-center justify-between text-[10px]">
                              <span className="text-muted-foreground">Logo Variant</span>
                              <span className="font-bold">Full Color</span>
                           </div>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               <Card className="md:col-span-2 bg-white border-border shadow-sm overflow-hidden">
                  <CardContent className="p-6">
                     <h4 className="text-[0.625rem] font-black text-muted-foreground uppercase tracking-widest mb-4">Post Strategy</h4>
                     <div className="grid grid-cols-2 gap-8">
                        <div>
                           <span className="text-[9px] font-bold text-muted-foreground uppercase block mb-1">Objective</span>
                           <p className="text-xs font-medium leading-relaxed">Increase ethical banking awareness and drive traffic to the Sharia-compliant investment portal.</p>
                        </div>
                        <div>
                           <span className="text-[9px] font-bold text-muted-foreground uppercase block mb-1">Target Audience</span>
                           <p className="text-xs font-medium leading-relaxed">Young professionals (25-40) interested in ethical and sustainable finance.</p>
                        </div>
                     </div>
                  </CardContent>
               </Card>
            </div>
         </div>

         {/* Right: Feedback & History */}
         <div className="lg:col-span-4 space-y-8">
            <section className="bg-white rounded-2xl border border-border overflow-hidden flex flex-col h-[700px]">
               <div className="p-6 border-b border-border bg-muted/20 flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold">Review History</h3>
                  <Badge variant="success" className="text-[0.625rem]">INTERNAL APPROVED</Badge>
               </div>
               
               <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  <Comment 
                     author="Michealla Ezima" 
                     role="Account Manager" 
                     time="2h ago" 
                     content="Internal review complete. Captions look great. @Client, please review for brand alignment."
                     type="system"
                  />
                  <Comment 
                     author="Chiamaka" 
                     role="Designer" 
                     time="4h ago" 
                     content="Updated the color grade on the second slide as requested. Ready for review."
                  />
                  <Comment 
                     author="Michealla Ezima" 
                     role="Account Manager" 
                     time="5h ago" 
                     content="The orange feels a bit muted in the shadows. Can we boost the saturation slightly?"
                     type="revision"
                  />
               </div>

               <div className="p-6 border-t border-border bg-white">
                  <div className="relative">
                     <Input placeholder="Leave a feedback or request change..." className="pr-12 h-12 bg-muted/30 border-none" />
                     <Button size="icon" className="absolute right-1.5 top-1.5 h-9 w-9">
                        <Send size={16} />
                     </Button>
                  </div>
               </div>
            </section>
         </div>
      </div>
    </DashboardLayout>
  )
}

function Comment({ author, role, time, content, type = "message" }: any) {
  const initials = author.split(' ').map((n: any) => n[0]).join('')
  
  return (
    <div className="flex gap-4 group">
       <Avatar className="h-8 w-8 border border-border shrink-0">
          <AvatarFallback className="text-[10px] font-black bg-muted/50">{initials}</AvatarFallback>
       </Avatar>
       <div className="space-y-2 flex-1">
          <div className="flex items-center justify-between">
             <div className="flex items-center gap-2">
                <div className="font-bold text-xs group-hover:text-brand transition-colors">{author}</div>
                <div className="text-[0.625rem] text-muted-foreground uppercase font-black tracking-tighter">{role}</div>
             </div>
             <div className="text-[0.625rem] text-muted-foreground">{time}</div>
          </div>
          <div className={cn(
             "p-4 rounded-2xl text-xs leading-relaxed shadow-sm",
             type === "system" ? "bg-brand/5 border border-brand/10 text-foreground" : 
             type === "revision" ? "bg-destructive/5 border border-destructive/10 text-destructive-foreground" : 
             "bg-white border border-border text-foreground"
          )}>
             {content}
          </div>
       </div>
    </div>
  )
}
