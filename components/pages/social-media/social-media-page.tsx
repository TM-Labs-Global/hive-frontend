"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Sparkles, 
  ArrowLeft, 
  Check, 
  Download, 
  Share2, 
  Image as ImageIcon,
  Layout,
  Zap,
  MousePointer2,
  ChevronRight,
  ShieldCheck,
  RefreshCw,
  Plus,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import DashboardLayout from "../dashboard/dashboard-layout"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"

// Mock templates
const TEMPLATES = [
  {
    id: "1",
    name: "Brand Story",
    desc: "Clean typography focused on your mission.",
    category: "Corporate",
    image: "/images/brand-launch-phase-1.jpg",
  },
  {
    id: "2",
    name: "Product Showcase",
    desc: "Highlight features with premium layouts.",
    category: "Sales",
    image: "/images/weekly-trategy-rief.jpg",
  },
  {
    id: "3",
    name: "Customer Spotlight",
    desc: "Trust-building testimonial designs.",
    category: "Social",
    image: "/images/social-media-approval-icon.jpg",
  },
  {
    id: "4",
    name: "Event Promotion",
    desc: "High-impact graphics for upcoming events.",
    category: "Marketing",
    image: "/images/brand-launch-phase-1.jpg",
  }
]

export default function SocialMediaPage() {
  const [step, setStep] = React.useState<'selection' | 'generating' | 'result'>('selection')
  const [selectedTemplate, setSelectedTemplate] = React.useState<typeof TEMPLATES[0] | null>(null)
  const [showLogoModal, setShowLogoModal] = React.useState(false)
  const [useCustomLogo, setUseCustomLogo] = React.useState(false)

  const handleTemplateSelect = (template: typeof TEMPLATES[0]) => {
    setSelectedTemplate(template)
    setShowLogoModal(true)
  }

  const startGeneration = () => {
    setShowLogoModal(false)
    setStep('generating')
    
    // Simulate generation time
    setTimeout(() => {
      setStep('result')
    }, 4000)
  }

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <Button 
              variant="ghost" 
              className="mb-4 -ml-4 text-muted-foreground hover:text-brand"
              onClick={() => step === 'result' ? setStep('selection') : window.history.back()}
            >
              <ArrowLeft className="mr-2" size={16} /> 
              {step === 'result' ? 'Back to Templates' : 'Back to Dashboard'}
            </Button>
            <h1 className="text-4xl font-black tracking-tight text-foreground">
              Social Media <span className="text-brand">Generator</span>
            </h1>
            <p className="text-muted-foreground mt-2 font-medium">
              Create platform-ready designs optimized for your brand DNA.
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
             <div className="flex flex-col items-end">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Credits Left</span>
                <span className="text-xl font-black text-brand">24</span>
             </div>
             <div className="h-10 w-[2px] bg-border mx-2" />
             <Button variant="secondary" className="rounded-xl font-bold border-brand/20 text-brand">
                Buy More
             </Button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 'selection' && (
            <motion.div 
              key="selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              {/* Filter Tabs - UI Simulation */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                {['All Directions', 'Corporate', 'Sales', 'Social', 'Events'].map((tab, i) => (
                  <Button 
                    key={tab} 
                    variant={i === 0 ? "primary" : "secondary"}
                    className={cn(
                      "rounded-full px-6 font-black text-xs uppercase tracking-widest h-10",
                      i === 0 ? "bg-brand hover:bg-brand-dark" : "border-brand/10 hover:border-brand/30"
                    )}
                  >
                    {tab}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {TEMPLATES.map((template) => (
                  <Card 
                    key={template.id}
                    className="group border-2 border-transparent hover:border-brand/20 transition-all overflow-hidden rounded-[2rem] bg-white cursor-pointer shadow-xl shadow-black/5"
                    onClick={() => handleTemplateSelect(template)}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img 
                        src={template.image} 
                        alt={template.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 backdrop-blur-md text-black border-none font-black text-[10px] px-3">
                          {template.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <Button className="w-full bg-brand hover:bg-brand-dark font-black text-xs uppercase tracking-widest rounded-xl">
                          Select Direction
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-black text-lg mb-1 group-hover:text-brand transition-colors">{template.name}</h4>
                      <p className="text-xs text-muted-foreground font-medium leading-relaxed">{template.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Custom Prompt Input */}
              <div className="mt-16 bg-surface-dark rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <Sparkles size={180} />
                 </div>
                 <div className="relative z-10 max-w-2xl">
                    <Badge className="bg-brand text-white border-none mb-6">Pro Feature</Badge>
                    <h3 className="text-3xl font-black mb-4 tracking-tight leading-tight">Can't find what you need? <br /><span className="text-brand">Describe it to the AI.</span></h3>
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                       <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                          <Zap size={20} className="text-brand" />
                          <input 
                            placeholder="e.g. A LinkedIn post announcing our new branch in Lagos..." 
                            className="bg-transparent border-none outline-none text-white placeholder:text-white/40 flex-1 font-medium"
                          />
                       </div>
                       <Button className="bg-brand hover:bg-brand-dark h-14 px-8 rounded-2xl font-black text-sm uppercase tracking-widest">
                          Generate
                       </Button>
                    </div>
                 </div>
              </div>
            </motion.div>
          )}

          {step === 'generating' && (
            <motion.div 
              key="generating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-[60vh] flex flex-col items-center justify-center text-center"
            >
              <div className="relative w-48 h-48 mb-12">
                {/* Spinning Rings */}
                <motion.div 
                  className="absolute inset-0 border-4 border-brand/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute inset-4 border-4 border-t-brand border-r-transparent border-b-transparent border-l-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute inset-8 border-2 border-brand/40 border-dashed rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles size={48} className="text-brand animate-pulse" />
                </div>
              </div>

              <h2 className="text-3xl font-black mb-4 tracking-tight">Generating Post...</h2>
              
              <div className="flex flex-col gap-3 max-w-sm mx-auto">
                <LoadingStep label="Analyzing Jaiz Bank DNA" delay={0} />
                <LoadingStep label="Selecting optimal template layout" delay={1000} />
                <LoadingStep label="Applying brand colors and typography" delay={2000} />
                <LoadingStep label="Finalizing high-res export" delay={3000} />
              </div>
            </motion.div>
          )}

          {step === 'result' && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            >
              {/* Preview Side */}
              <div className="space-y-8">
                <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl shadow-black/10 border-8 border-white group relative overflow-hidden">
                   {/* This is where the Jaiz Bank image will go */}
                   <img 
                    src={selectedTemplate?.image || "/images/brand-launch-phase-1.jpg"} 
                    className="w-full h-full object-cover rounded-[1.8rem] aspect-square"
                   />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <Button className="bg-white text-black hover:bg-white/90 rounded-xl font-black">
                         <Download size={18} className="mr-2" /> Download
                      </Button>
                      <Button className="bg-brand text-white hover:bg-brand-dark rounded-xl font-black">
                         <Share2 size={18} className="mr-2" /> Share
                      </Button>
                   </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1 bg-brand/5 border border-brand/10 p-6 rounded-3xl">
                     <span className="text-[10px] font-black uppercase tracking-widest text-brand mb-2 block">Post Copy Suggestion</span>
                     <p className="text-sm font-medium leading-relaxed italic">
                        "Empowering your future with ethical banking. Discover how Jaiz Bank is redefining financial growth. 🏦✨ #JaizBank #EthicalBanking #Growth"
                     </p>
                  </div>
                </div>
              </div>

              {/* Actions Side */}
              <div className="space-y-10">
                <div>
                   <Badge className="bg-green-500/10 text-green-600 border-none mb-4 uppercase tracking-widest font-black text-[10px]">Generation Success</Badge>
                   <h2 className="text-4xl font-black tracking-tight mb-4">Your design is ready!</h2>
                   <p className="text-muted-foreground font-medium text-lg leading-relaxed">
                      We've created a custom {selectedTemplate?.name} post for Instagram, optimized with your brand guidelines and the chosen logo direction.
                   </p>
                </div>

                <div className="space-y-4">
                   <h4 className="font-black text-sm uppercase tracking-widest text-muted-foreground">Adjustments</h4>
                   <div className="grid grid-cols-2 gap-4">
                      <Button variant="secondary" className="h-16 rounded-2xl border-brand/10 hover:border-brand/30 font-black justify-start px-6 gap-3">
                         <RefreshCw size={18} className="text-brand" /> Regenerate
                      </Button>
                      <Button variant="secondary" className="h-16 rounded-2xl border-brand/10 hover:border-brand/30 font-black justify-start px-6 gap-3">
                         <Layout size={18} className="text-brand" /> Switch Layout
                      </Button>
                   </div>
                </div>

                <div className="pt-8 border-t border-border space-y-6">
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                            <ShieldCheck size={20} />
                         </div>
                         <div>
                            <p className="text-sm font-black">Brand Safety Check</p>
                            <p className="text-xs text-muted-foreground font-medium">Verified against Jaiz Bank DNA</p>
                         </div>
                      </div>
                      <Badge className="bg-green-500 text-white rounded-full h-6 px-3">Pass</Badge>
                   </div>

                   <div className="flex flex-col gap-3">
                      <Button className="w-full h-14 bg-brand hover:bg-brand-dark rounded-2xl font-black text-base uppercase tracking-widest shadow-xl shadow-brand/20">
                         Export to Assets
                      </Button>
                      <Button variant="ghost" className="w-full h-14 rounded-2xl font-black text-muted-foreground hover:text-foreground">
                         Schedule for Social Media
                      </Button>
                   </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Logo Selection Modal */}
        <Dialog open={showLogoModal} onOpenChange={setShowLogoModal}>
           <DialogContent className="sm:max-w-[500px] rounded-[2.5rem] border-none shadow-2xl p-0 overflow-hidden bg-white">
              <div className="bg-surface-dark p-8 text-white relative">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                    <ImageIcon size={64} />
                 </div>
                 <DialogHeader className="relative z-10">
                    <DialogTitle className="text-2xl font-black tracking-tight text-white">Logo Preference</DialogTitle>
                    <DialogDescription className="text-white/60 font-medium pt-2">
                       Should we use the default Jaiz Bank logo from your Brand DNA or a different one for this post?
                    </DialogDescription>
                 </DialogHeader>
              </div>
              
              <div className="p-8 space-y-6">
                 <div className="grid grid-cols-2 gap-4">
                    <div 
                      className={cn(
                        "p-6 rounded-3xl border-2 cursor-pointer transition-all flex flex-col items-center text-center gap-4",
                        !useCustomLogo ? "border-brand bg-brand/5 shadow-lg shadow-brand/5" : "border-border hover:border-brand/40"
                      )}
                      onClick={() => setUseCustomLogo(false)}
                    >
                       <div className="h-16 w-16 bg-white rounded-2xl shadow-sm flex items-center justify-center p-2 border border-border overflow-hidden">
                          <img src="/images/default-brand/JAIZ BANK PNG.png" className="w-full h-auto" />
                       </div>
                       <div>
                          <p className="font-black text-sm">Default Logo</p>
                          <p className="text-[10px] text-muted-foreground font-medium mt-1">From Brand DNA</p>
                       </div>
                       {!useCustomLogo && <div className="h-6 w-6 bg-brand rounded-full flex items-center justify-center text-white"><Check size={14} /></div>}
                    </div>

                    <div 
                      className={cn(
                        "p-6 rounded-3xl border-2 cursor-pointer transition-all flex flex-col items-center text-center gap-4",
                        useCustomLogo ? "border-brand bg-brand/5 shadow-lg shadow-brand/5" : "border-border hover:border-brand/40"
                      )}
                      onClick={() => setUseCustomLogo(true)}
                    >
                       <div className="h-16 w-16 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-border">
                          <Plus size={24} className="text-muted-foreground" />
                       </div>
                       <div>
                          <p className="font-black text-sm">Custom Logo</p>
                          <p className="text-[10px] text-muted-foreground font-medium mt-1">Upload new asset</p>
                       </div>
                       {useCustomLogo && <div className="h-6 w-6 bg-brand rounded-full flex items-center justify-center text-white"><Check size={14} /></div>}
                    </div>
                 </div>

                 {useCustomLogo && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="bg-muted/50 border border-dashed border-border rounded-2xl p-8 flex flex-col items-center gap-3"
                    >
                       <ImageIcon className="text-muted-foreground" size={24} />
                       <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">Drop or click to upload</p>
                    </motion.div>
                 )}
              </div>

              <div className="px-8 pb-8 flex gap-3">
                 <Button variant="ghost" className="flex-1 h-12 rounded-xl font-black text-xs uppercase tracking-widest" onClick={() => setShowLogoModal(false)}>
                    Cancel
                 </Button>
                 <Button className="flex-1 h-12 bg-brand hover:bg-brand-dark rounded-xl font-black text-xs uppercase tracking-widest" onClick={startGeneration}>
                    Generate Post
                 </Button>
              </div>
           </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  )
}

function LoadingStep({ label, delay }: { label: string, delay: number }) {
  const [status, setStatus] = React.useState<'pending' | 'loading' | 'done'>('pending')

  React.useEffect(() => {
    const timer = setTimeout(() => setStatus('loading'), delay)
    const doneTimer = setTimeout(() => setStatus('done'), delay + 2000)
    return () => {
      clearTimeout(timer)
      clearTimeout(doneTimer)
    }
  }, [delay])

  return (
    <div className="flex items-center gap-3">
      <div className={cn(
        "h-5 w-5 rounded-full flex items-center justify-center transition-colors",
        status === 'done' ? "bg-green-500 text-white" : status === 'loading' ? "bg-brand/20 text-brand" : "bg-muted text-muted-foreground"
      )}>
        {status === 'done' ? <Check size={12} /> : status === 'loading' ? <RefreshCw size={12} className="animate-spin" /> : <div className="h-1.5 w-1.5 rounded-full bg-current" />}
      </div>
      <span className={cn(
        "text-sm font-medium transition-colors",
        status === 'done' ? "text-foreground" : status === 'loading' ? "text-brand font-black" : "text-muted-foreground"
      )}>
        {label}
      </span>
    </div>
  )
}
