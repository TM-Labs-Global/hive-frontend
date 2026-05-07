"use client"

import * as React from "react"
import DashboardLayout from "@/components/pages/dashboard/dashboard-layout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Sparkles, 
  ArrowUpRight, 
  ChevronDown,
  Globe,
  Camera,
  Search,
  Upload,
  Check
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function BrandDNAPage() {
  const [activePicker, setActivePicker] = React.useState<string | null>(null)
  const [isEditingText, setIsEditingText] = React.useState<string | null>(null)

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
        <div>
          <h1 className="font-display text-4xl font-black tracking-tight text-foreground">
            Your Brand DNA
          </h1>
          <p className="text-muted-foreground mt-1 flex items-center gap-2">
            Please feel free to edit and make changes
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="font-bold border-brand/20 text-brand hover:bg-brand/5">
            <Sparkles size={16} className="mr-2" /> Regenerate with AI
          </Button>
          <Button className="bg-brand hover:bg-brand-dark font-black shadow-lg shadow-brand/20">
            Brand Guideline <ArrowUpRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>

      <div className="space-y-6 max-w-6xl relative">
        {/* Hero Card */}
        <Card className="border-none bg-[#F9F9F9] p-10 rounded-[2.5rem]">
          <CardContent className="p-0 flex flex-col md:flex-row gap-12 items-center">
            <div className="group relative h-48 w-48 rounded-[2rem] bg-[#003B5C] flex items-center justify-center p-8 shadow-sm cursor-pointer overflow-hidden">
               <img src="/images/default-brand/Jaiz Favicon.png" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-2">
                  <Camera size={24} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Change</span>
               </div>
            </div>
            <div className="flex-1">
               <div className="flex items-center justify-between mb-4">
                  <EditableHeading value="Jaiz Bank" />
                  <span className="text-muted-foreground text-sm flex items-center gap-2 cursor-pointer hover:text-brand transition-colors">
                     jaizbank.com <Globe size={14} />
                  </span>
               </div>
               <EditableParagraph 
                  value="Jaiz Bank: The first non-interest bank in Nigeria, providing financial services under Islamic banking principles."
                  className="text-xl leading-relaxed max-w-3xl"
               />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Row 1: Fonts & Colors */}
          <div className="lg:col-span-2">
             <DNAGridCard title="Fonts">
                <div className="flex flex-wrap gap-4 relative">
                   <div 
                      className="bg-white rounded-full py-4 px-8 flex items-center justify-between border border-border flex-1 min-w-[200px] cursor-pointer hover:border-brand/40 transition-all"
                      onClick={() => setActivePicker(activePicker === 'font-headline' ? null : 'font-headline')}
                   >
                      <div>
                         <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Headline</div>
                         <div className="font-display text-xl font-bold">Bricolage-regular</div>
                      </div>
                      <ChevronDown size={16} className={cn("text-muted-foreground transition-transform", activePicker === 'font-headline' && "rotate-180")} />
                   </div>
                   
                   <div 
                      className="bg-white rounded-full py-4 px-8 flex items-center justify-between border border-border flex-1 min-w-[200px] cursor-pointer hover:border-brand/40 transition-all"
                      onClick={() => setActivePicker(activePicker === 'font-body' ? null : 'font-body')}
                   >
                      <div>
                         <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Body</div>
                         <div className="font-sans text-xl font-bold">Albert Sans</div>
                      </div>
                      <ChevronDown size={16} className={cn("text-muted-foreground transition-transform", activePicker === 'font-body' && "rotate-180")} />
                   </div>

                   {/* Mock Font Picker */}
                   {activePicker?.startsWith('font-') && (
                      <div className="absolute top-full left-0 mt-4 w-72 bg-white rounded-2xl shadow-2xl border border-border z-50 p-4 animate-in fade-in slide-in-from-top-2">
                         <div className="relative mb-4">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={14} />
                            <input className="w-full pl-9 pr-4 py-2 bg-muted/50 rounded-lg text-xs outline-none" placeholder="Search fonts..." />
                         </div>
                         <div className="space-y-1">
                            {['Albert Sans', 'Inter', 'Outfit', 'Plus Jakarta', 'Satoshi'].map(font => (
                               <div key={font} className="flex items-center justify-between p-3 hover:bg-brand/5 rounded-xl cursor-pointer group">
                                  <span className="font-bold text-sm">{font}</span>
                                  {font === 'Albert Sans' && <Check size={14} className="text-brand" />}
                               </div>
                            ))}
                         </div>
                         <div className="mt-4 pt-4 border-t border-border">
                            <Button variant="ghost" size="sm" className="w-full text-xs font-bold gap-2">
                               <Upload size={14} /> Upload your font
                            </Button>
                         </div>
                      </div>
                   )}
                </div>
             </DNAGridCard>
          </div>
          <div className="lg:col-span-1">
             <DNAGridCard title="Colors">
                <div className="relative">
                   <div 
                      className="flex items-center gap-4 cursor-pointer group"
                      onClick={() => setActivePicker(activePicker === 'color' ? null : 'color')}
                   >
                      <div className="h-16 w-16 rounded-full bg-brand shadow-lg ring-offset-2 ring-transparent group-hover:ring-brand/20 transition-all ring-4" />
                      <div>
                         <div className="font-mono font-bold text-lg group-hover:text-brand transition-colors">#008751</div>
                         <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Primary Color</div>
                      </div>
                   </div>

                   {/* Mock Color Picker */}
                   {activePicker === 'color' && (
                      <div className="absolute top-full right-0 mt-4 w-64 bg-white rounded-2xl shadow-2xl border border-border z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                         <div className="h-32 bg-gradient-to-br from-brand via-orange-400 to-red-500 relative">
                            <div className="absolute top-4 right-4 h-4 w-4 rounded-full border-2 border-white shadow-md" />
                         </div>
                         <div className="p-4 space-y-4">
                            <div className="flex items-center gap-2">
                               <div className="h-8 w-8 rounded-lg bg-brand border border-border" />
                               <input className="flex-1 bg-muted/50 px-3 py-1.5 rounded-lg font-mono text-xs outline-none" defaultValue="#FF4D00" />
                            </div>
                            <div className="grid grid-cols-6 gap-2">
                               {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                                  <div key={i} className={cn("h-6 w-6 rounded-md cursor-pointer", i === 1 ? "bg-brand" : "bg-muted")} />
                               ))}
                            </div>
                            <Button className="w-full bg-brand text-white text-xs font-black h-9">Save Color</Button>
                         </div>
                      </div>
                   )}
                </div>
             </DNAGridCard>
          </div>

          {/* Row 2: About Us & Mission */}
          <div className="lg:col-span-2 lg:row-span-2">
             <DNAGridCard title="About Us">
                <EditableParagraph 
                   value="Jaiz Bank Plc is a bank in Nigeria operating under Islamic banking principles and is a non-interest bank. It is the first non-interest bank established in Nigeria and is headquartered in Abuja, the capital city of the country. Jaiz Bank provides a wide range of financial services to individuals and businesses, focusing on ethical and transparent banking solutions."
                   className="text-muted-foreground leading-relaxed text-lg"
                   editMode
                />
             </DNAGridCard>
          </div>
          <div className="lg:col-span-1">
             <DNAGridCard title="Mission">
                <EditableParagraph 
                   value="To provide innovative, ethical and value-driven financial services to our customers through a committed and professional workforce."
                   className="text-muted-foreground leading-relaxed"
                   editMode
                />
             </DNAGridCard>
          </div>

          {/* Row 3: Vision (next to About Us) */}
          <div className="lg:col-span-1">
             <DNAGridCard title="Vision">
                <EditableParagraph 
                   value="To be the leading ethical financial institution in Sub-Saharan Africa, providing world-class services while staying true to our values."
                   className="text-muted-foreground leading-relaxed"
                   editMode
                />
             </DNAGridCard>
          </div>

          {/* Row 4: Values, Voice Tone, Slogan */}
          <div className="lg:col-span-1">
             <DNAGridCard title="Values">
                <div className="flex flex-col gap-2">
                   {["Ethical Banking", "Innovation", "Customer-Centric", "Transparency"].map(val => (
                      <div key={val} className="bg-white border border-border py-2 px-4 rounded-xl font-bold text-foreground w-fit hover:border-brand cursor-pointer transition-colors">
                         {val}
                      </div>
                   ))}
                   <button className="text-[10px] font-black uppercase tracking-widest text-brand mt-2 flex items-center gap-1 hover:gap-2 transition-all">+ Add Value</button>
                </div>
             </DNAGridCard>
          </div>
          <div className="lg:col-span-1">
             <DNAGridCard title="Voice Tone">
                <div className="space-y-2 cursor-pointer group">
                   <div className="flex gap-2 text-muted-foreground font-bold group-hover:text-brand transition-colors">1. Bold</div>
                   <div className="flex gap-2 text-muted-foreground font-bold group-hover:text-brand transition-colors">2. Professional</div>
                   <div className="flex gap-2 text-muted-foreground font-bold group-hover:text-brand transition-colors">3. Visionary</div>
                </div>
             </DNAGridCard>
          </div>
          <div className="lg:col-span-1">
             <DNAGridCard title="Slogan">
                <EditableParagraph 
                   value="Storytelling, Simplified."
                   className="italic font-display text-2xl font-bold tracking-tight text-foreground/80 mt-4"
                   editMode
                />
             </DNAGridCard>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

function DNAGridCard({ title, children }: any) {
  return (
    <Card className="border-none bg-[#F9F9F9] p-8 h-full rounded-[2.5rem] group/card transition-all">
       <CardContent className="p-0 flex flex-col h-full">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-6">{title}</h3>
          <div className="flex-1">
             {children}
          </div>
       </CardContent>
    </Card>
  )
}

function EditableParagraph({ value, className, editMode = false }: any) {
  const [isEditing, setIsEditing] = React.useState(false)
  const [text, setText] = React.useState(value)

  if (isEditing) {
     return (
        <textarea 
           autoFocus
           onBlur={() => setIsEditing(false)}
           onChange={(e) => setText(e.target.value)}
           value={text}
           className={cn(
              "w-full bg-white border-2 border-brand/40 rounded-2xl p-4 outline-none focus:ring-4 ring-brand/10 transition-all",
              className
           )}
           rows={4}
        />
     )
  }

  return (
     <div 
        onClick={() => editMode && setIsEditing(true)}
        className={cn(
           "relative cursor-text rounded-2xl transition-all",
           editMode && "hover:border-dashed hover:border-2 hover:border-brand/20 hover:p-1 -m-1",
           className
        )}
     >
        {text}
        {editMode && (
           <div className="absolute -right-2 -bottom-2 h-2 w-2 bg-brand rounded-full opacity-0 group-hover/card:opacity-100" />
        )}
     </div>
  )
}

function EditableHeading({ value }: any) {
   const [isEditing, setIsEditing] = React.useState(false)
   const [text, setText] = React.useState(value)
 
   if (isEditing) {
      return (
         <input 
            autoFocus
            onBlur={() => setIsEditing(false)}
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="font-display text-5xl font-black tracking-tight outline-none border-b-2 border-brand text-foreground bg-transparent w-full"
         />
      )
   }
 
   return (
      <h2 
         onClick={() => setIsEditing(true)}
         className="font-display text-5xl font-black tracking-tight cursor-text hover:text-brand transition-colors"
      >
         {text}
      </h2>
   )
 }
