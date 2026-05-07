"use client"

import * as React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Plus, 
  X,
  Upload,
  Sparkles,
  Link as LinkIcon,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type SetupView = 'import' | 'manual'

export default function BrandDNASetupPage() {
  const router = useRouter()
  const [view, setView] = useState<SetupView>('import')
  const [url, setUrl] = useState('')

  return (
    <div className="min-h-screen bg-neutral-900/10 relative flex items-center justify-center p-6">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
         <div className="absolute top-[20%] left-1/2 -translate-x-1/2 text-[15vw] font-black text-black/5 whitespace-nowrap pointer-events-none select-none">
            Import your Brand
         </div>
      </div>

      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
         {/* Trusted Badge */}
         <div className="flex flex-col items-center mb-8">
            <div className="flex -space-x-2 mb-2">
               {[1,2,3,4].map(i => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-white overflow-hidden bg-muted">
                     <img src={`https://i.pravatar.cc/100?u=${i}`} className="w-full h-full object-cover" />
                  </div>
               ))}
            </div>
            <div className="flex flex-col items-center">
               <div className="flex items-center gap-2">
                  <div className="h-px w-8 bg-black/10" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Trusted By</span>
                  <div className="h-px w-8 bg-black/10" />
               </div>
               <span className="text-sm font-bold">2,000+ Brands</span>
            </div>
         </div>

         <AnimatePresence mode="wait">
            {view === 'import' ? (
               <motion.div 
                  key="import"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-[2.5rem] p-12 shadow-2xl shadow-black/10 w-full relative"
               >
                  <button className="absolute top-8 right-8 text-muted-foreground hover:text-foreground transition-colors">
                     <X size={20} />
                  </button>

                  <div className="text-center mb-10">
                     <h2 className="text-3xl font-bold mb-2">Let's import your brand</h2>
                     <p className="text-muted-foreground text-sm">Enter brand website or social link to setup your brand quickly</p>
                  </div>

                  <div className="flex items-center justify-center gap-3 mb-8">
                     <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mr-2">Supports</span>
                     <SocialIcon icon={<Facebook size={14} />} color="bg-blue-600" />
                     <SocialIcon icon={<Instagram size={14} />} color="bg-pink-600" />
                     <SocialIcon icon={<Linkedin size={14} />} color="bg-blue-700" />
                     <div className="h-6 w-6 rounded-md bg-black text-white flex items-center justify-center text-[10px] font-bold italic">𝕏</div>
                     <SocialIcon icon={<Youtube size={14} />} color="bg-red-600" />
                     <div className="h-6 w-6 rounded-md bg-black text-white flex items-center justify-center">
                        <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-3.3 2.97-5.92 6.18-5.93.88-.04 1.77.16 2.58.5V11.2c-1.1-.58-2.45-.66-3.62-.11-1.57.7-2.52 2.37-2.3 4.07.09 1.11.75 2.15 1.71 2.71 1.05.65 2.45.65 3.5-.02.83-.51 1.34-1.44 1.39-2.42V0h-.28z"/></svg>
                     </div>
                     <div className="h-6 w-6 rounded-md bg-blue-500 text-white flex items-center justify-center">
                        <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                     </div>
                  </div>

                  <div className="relative mb-10">
                     <div className="flex items-center gap-2 p-1.5 border-2 border-brand/20 rounded-2xl focus-within:border-brand transition-all bg-white shadow-sm">
                        <div className="pl-4 pr-2 text-muted-foreground">
                           <LinkIcon size={18} />
                        </div>
                        <input 
                           className="flex-1 bg-transparent border-none outline-none text-sm py-2"
                           placeholder="Enter your website or social link..."
                           value={url}
                           onChange={(e) => setUrl(e.target.value)}
                        />
                        <Button 
                           onClick={() => router.push('/dashboard')}
                           className="bg-brand hover:bg-brand-dark text-white font-bold h-10 px-6 rounded-xl"
                        >
                           Import
                        </Button>
                     </div>
                  </div>

                  <div className="flex items-center gap-4 mb-10">
                     <div className="h-px bg-black/5 flex-1" />
                     <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Or</span>
                     <div className="h-px bg-black/5 flex-1" />
                  </div>

                  <div className="flex justify-center">
                     <Button 
                        variant="secondary" 
                        onClick={() => setView('manual')}
                        className="h-14 px-8 border-2 border-brand/20 text-brand font-bold rounded-2xl hover:bg-brand hover:text-white hover:border-brand transition-all flex items-center gap-2"
                     >
                        <Plus size={20} /> Add Brand Manually
                     </Button>
                  </div>
               </motion.div>
            ) : (
               <motion.div 
                  key="manual"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-[2.5rem] p-12 shadow-2xl shadow-black/10 w-full relative"
               >
                  <button 
                     onClick={() => setView('import')}
                     className="absolute top-8 right-8 text-muted-foreground hover:text-foreground transition-colors"
                  >
                     <X size={20} />
                  </button>

                  <div className="text-center mb-10">
                     <h2 className="text-3xl font-bold mb-2">Add your brand manually</h2>
                     <p className="text-muted-foreground text-sm">Upload your logo or AI-generate a new design to get started</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="flex flex-col items-center">
                        <div className="w-full aspect-square rounded-[2rem] border-2 border-dashed border-muted hover:border-brand/40 transition-colors flex flex-col items-center justify-center p-8 bg-muted/5 cursor-pointer group relative overflow-hidden">
                           <div className="h-12 w-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 text-brand group-hover:scale-110 transition-transform">
                              <Upload size={24} />
                           </div>
                           <span className="font-bold text-sm">Your Logo</span>
                           <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">PNG, SVG, JPG - Max 5MB</span>
                           <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                        </div>
                     </div>

                     <div className="flex flex-col items-center">
                        <div className="w-full aspect-square rounded-[2rem] border border-border flex flex-col items-center justify-center p-10 bg-[#F9F9F9]">
                           <h3 className="font-bold text-sm mb-2 text-center">Don't have a logo?</h3>
                           <p className="text-[10px] text-muted-foreground text-center mb-6 leading-relaxed">
                              AI-generate a professional logo in seconds!
                           </p>
                           <Button 
                              onClick={() => router.push('/dashboard')}
                              className="bg-white border border-border text-foreground hover:bg-muted font-bold text-xs px-6 py-2 h-auto rounded-xl flex items-center gap-2 shadow-sm"
                           >
                              AI Logo Maker <ArrowRight size={14} />
                           </Button>
                        </div>
                     </div>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>

         <div className="mt-20 text-center">
            <h3 className="text-2xl font-black mb-4">Import your Brand to<br />Generate viral brand contents</h3>
            <div className="flex items-center gap-2 p-1 border border-border rounded-2xl bg-white/50 backdrop-blur shadow-sm w-full max-w-lg mx-auto">
               <div className="pl-4 pr-2 text-muted-foreground"><LinkIcon size={16} /></div>
               <input className="flex-1 bg-transparent outline-none text-xs" placeholder="Enter Your Website or Social Link" />
               <Button className="bg-blue-900 hover:bg-blue-800 text-white font-bold h-10 px-6 rounded-xl flex items-center gap-2">
                  Import Brand <ArrowRight size={14} />
               </Button>
            </div>
         </div>
      </div>
    </div>
  )
}

function SocialIcon({ icon, color }: any) {
  return (
    <div className={cn("h-6 w-6 rounded-md flex items-center justify-center text-white", color)}>
       {icon}
    </div>
  )
}
