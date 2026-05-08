"use client"

import * as React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Check, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Upload, 
  Sparkles, 
  Link as LinkIcon, 
  X,
  Youtube,
  Globe,
  UserPlus,
  Mail,
  Shield,
  Camera,
  Plus,
  ChevronDown,
  Save,
  Users,
  Music2
} from "lucide-react"

// Custom TikTok Icon if lucide version is old
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

function SocialCard({ 
  name, 
  icon: Icon, 
  connected, 
  onConnect 
}: { 
  name: string, 
  icon: any, 
  connected: boolean, 
  onConnect: () => void 
}) {
  return (
    <Card className={cn("transition-all shadow-sm", connected ? "bg-brand/5 border-brand/30" : "bg-white border-border")}>
      <CardContent className="flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <div className={cn("p-3 rounded-xl", connected ? "bg-brand text-white" : "bg-muted text-muted-foreground")}>
            {typeof Icon === 'function' && Icon.name === 'TiktokIcon' ? <Icon size={24} /> : <Icon size={24} />}
          </div>
          <div>
            <div className="font-bold text-sm">{name}</div>
            <div className="text-xs text-muted-foreground">{connected ? "Account linked" : "Not connected"}</div>
          </div>
        </div>
        <Button 
          variant="secondary" 
          size="sm"
          onClick={onConnect}
          className={cn("h-9 rounded-xl font-bold", connected && "border-brand text-brand hover:bg-brand/5")}
        >
          {connected ? "Disconnect" : "Connect"}
        </Button>
      </CardContent>
    </Card>
  )
}

function SocialIcon({ icon, color }: any) {
   return (
     <div className={cn("h-6 w-6 rounded-md flex items-center justify-center text-white", color)}>
        {icon}
     </div>
   )
 }

// --- Main Page ---

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1) 
  const [setupView, setSetupView] = useState<'import' | 'manual' | 'manual-details' | 'summary'>('import')
  const [url, setUrl] = useState('https://jaizbankplc.com/')
  const [brandName, setBrandName] = useState('Jaiz Bank')
  const [brandDesc, setBrandDesc] = useState('The first non-interest bank in Nigeria, providing ethical and transparent financial services.')
  const [logo, setLogo] = useState<string | null>('/images/default-brand/Jaiz Favicon.png')
  
  const [connections, setConnections] = useState({
    instagram: false,
    facebook: false,
    linkedin: false,
    twitter: false,
    tiktok: false
  })

  const nextStep = () => setStep(s => s + 1)
  const prevStep = () => setStep(s => s - 1)

  const handleManualUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
     const file = e.target.files?.[0]
     if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
           setLogo(e.target?.result as string)
           setSetupView('manual-details')
        }
        reader.readAsDataURL(file)
     }
  }

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans flex flex-col">
      {/* Onboarding Header */}
      <header className="border-b border-border bg-white px-8 py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="font-display text-xl font-extrabold tracking-tight">
            The <span className="text-brand">Hive</span> Onboarding
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className={cn(
                  "h-1.5 w-12 rounded-full transition-all duration-500",
                  i <= step ? "bg-brand" : "bg-muted"
                )}
              />
            ))}
            <span className="ml-4 text-[0.625rem] font-bold text-muted-foreground uppercase tracking-widest">
              Step {step} of 3
            </span>
          </div>

          <Button variant="ghost" className="text-xs font-bold" onClick={() => router.push('/dashboard')}>Save & Exit</Button>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center py-20 px-8">
         <div className="w-full max-w-5xl">
            <AnimatePresence mode="wait">
               {step === 1 && (
                  <motion.div 
                     key="step1"
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.95 }}
                     className="flex flex-col items-center w-full"
                  >
                     {/* Trusted Badge */}
                     {['import', 'manual', 'manual-details'].includes(setupView) && (
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
                     )}

                     {setupView === 'import' && (
                        <Card className="bg-white rounded-[2.5rem] p-12 shadow-2xl shadow-black/5 border-none w-full max-w-2xl relative">
                           <div className="text-center mb-10">
                              <h2 className="text-3xl font-black mb-2 tracking-tight">Let's import your brand</h2>
                              <p className="text-muted-foreground text-sm">Enter brand website or social link to setup your brand quickly</p>
                           </div>

                           <div className="flex items-center justify-center gap-3 mb-8">
                              <SocialIcon icon={<Facebook size={14} />} color="bg-blue-600" />
                              <SocialIcon icon={<Instagram size={14} />} color="bg-pink-600" />
                              <SocialIcon icon={<Linkedin size={14} />} color="bg-blue-700" />
                              <div className="h-6 w-6 rounded-md bg-black text-white flex items-center justify-center text-[10px] font-bold italic">𝕏</div>
                              <SocialIcon icon={<Youtube size={14} />} color="bg-red-600" />
                              <SocialIcon icon={<TiktokIcon size={14} />} color="bg-black" />
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
                                    onClick={() => setSetupView('summary')}
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
                                 onClick={() => setSetupView('manual')}
                                 className="h-14 px-8 border-2 border-brand/20 text-brand font-black rounded-2xl hover:bg-brand hover:text-white hover:border-brand transition-all flex items-center gap-2"
                              >
                                 <Plus size={20} /> Add Brand Manually
                              </Button>
                           </div>
                        </Card>
                     )}

                     {setupView === 'manual' && (
                        <Card className="bg-white rounded-[2.5rem] p-12 shadow-2xl shadow-black/5 border-none w-full max-w-2xl relative">
                           <div className="text-center mb-10">
                              <h2 className="text-3xl font-black mb-2 tracking-tight">Add your brand manually</h2>
                              <p className="text-muted-foreground text-sm">Upload your logo or AI-generate a new design to get started</p>
                           </div>

                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="flex flex-col items-center">
                                 <div className="w-full aspect-square rounded-[2rem] border-2 border-dashed border-muted hover:border-brand/40 transition-colors flex flex-col items-center justify-center p-8 bg-muted/5 cursor-pointer group relative overflow-hidden">
                                    <div className="h-12 w-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 text-brand group-hover:scale-110 transition-transform">
                                       <Upload size={24} />
                                    </div>
                                    <span className="font-bold text-sm">Your Logo</span>
                                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1 text-center">PNG, SVG, JPG - Max 5MB</span>
                                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleManualUpload} />
                                 </div>
                              </div>

                              <div className="flex flex-col items-center">
                                 <div className="w-full aspect-square rounded-[2rem] border border-border flex flex-col items-center justify-center p-10 bg-[#F9F9F9]">
                                    <h3 className="font-bold text-sm mb-2 text-center">Don't have a logo?</h3>
                                    <p className="text-[10px] text-muted-foreground text-center mb-6 leading-relaxed">
                                       AI-generate a professional logo in seconds!
                                    </p>
                                    <Button 
                                       onClick={() => setSetupView('manual-details')}
                                       className="bg-white border border-border text-foreground hover:bg-muted font-bold text-xs px-6 py-2 h-auto rounded-xl flex items-center gap-2 shadow-sm"
                                    >
                                       AI Logo Maker <ArrowRight size={14} />
                                    </Button>
                                 </div>
                              </div>
                           </div>

                           <div className="mt-10 flex justify-center">
                              <button onClick={() => setSetupView('import')} className="text-xs font-bold text-muted-foreground hover:text-brand transition-colors">
                                 ← Back to Import Link
                              </button>
                           </div>
                        </Card>
                     )}

                     {setupView === 'manual-details' && (
                        <Card className="bg-white rounded-[2.5rem] p-12 shadow-2xl shadow-black/10 border-none w-full max-w-2xl relative">
                           <div className="text-center mb-10">
                              <h2 className="text-3xl font-black mb-2 tracking-tight">Add your brand manually</h2>
                              <p className="text-muted-foreground text-sm">👇 Complete brand name and description to create your brand</p>
                           </div>

                           <div className="flex flex-col md:flex-row gap-10">
                              <div className="w-full md:w-1/3">
                                 <div className="aspect-square rounded-[2rem] bg-white border border-border flex items-center justify-center p-6 relative group overflow-hidden shadow-sm">
                                    {logo ? (
                                       <img src={logo} className="w-full h-full object-contain" />
                                    ) : (
                                       <div className="bg-brand/10 w-full h-full rounded-2xl flex items-center justify-center text-brand font-black text-2xl uppercase">
                                          {brandName?.charAt(0) || "H"}
                                       </div>
                                    )}
                                    <button 
                                       onClick={() => setLogo(null)}
                                       className="absolute top-2 right-2 h-6 w-6 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                       <X size={12} />
                                    </button>
                                 </div>
                              </div>
                              <div className="flex-1 space-y-6">
                                 <div>
                                    <label className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-2 block">Brand Name*</label>
                                    <input 
                                       className="w-full bg-white border-2 border-border rounded-xl px-4 py-3 text-sm focus:border-brand outline-none transition-all"
                                       placeholder="Enter your brand name"
                                       value={brandName}
                                       onChange={(e) => setBrandName(e.target.value)}
                                    />
                                 </div>
                                 <div>
                                    <label className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-2 block">Description*</label>
                                    <textarea 
                                       className="w-full bg-white border-2 border-border rounded-xl px-4 py-3 text-sm focus:border-brand outline-none transition-all resize-none"
                                       placeholder="One-sentence description of your brand..."
                                       rows={3}
                                       value={brandDesc}
                                       onChange={(e) => setBrandDesc(e.target.value)}
                                    />
                                 </div>
                                 <Button 
                                    onClick={() => setSetupView('summary')}
                                    disabled={!brandName || !brandDesc}
                                    className="w-full h-12 bg-brand hover:bg-brand-dark text-white font-black rounded-xl shadow-lg shadow-brand/20 flex items-center justify-center gap-2"
                                 >
                                    Add brand <ArrowRight size={18} />
                                 </Button>
                              </div>
                           </div>
                        </Card>
                     )}

                     {setupView === 'summary' && (
                        <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                           <div className="mb-10 text-left">
                              <h2 className="text-3xl font-black tracking-tight mb-2">Jaiz Bank DNA</h2>
                              <p className="text-muted-foreground text-sm flex items-center gap-2">
                                 Please feel free to edit and make changes
                              </p>
                           </div>
                           
                           <BrandDNASummary 
                              logo={logo}
                              name={brandName || "Jaiz Bank"} 
                              desc={brandDesc || "Jaiz Bank: The first non-interest bank in Nigeria, providing financial services under Islamic banking principles."}
                              url={url || "jaizbank.com"}
                           />

                           <div className="mt-12 flex flex-col items-center gap-6">
                              <p className="text-muted-foreground text-sm flex items-center gap-2">
                                 Checkout your brand DNA and click Save to continue
                              </p>
                              <Button 
                                 size="lg" 
                                 onClick={nextStep}
                                 className="h-16 px-16 bg-brand hover:bg-brand-dark text-white font-black text-lg rounded-2xl shadow-2xl shadow-brand/20 flex items-center gap-3 transition-all active:scale-95"
                              >
                                 <Save size={20} /> Save Brand DNA <ArrowRight size={20} />
                              </Button>
                           </div>
                        </div>
                     )}
                  </motion.div>
               )}

               {step === 2 && (
                  <motion.div 
                     key="step2"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     className="w-full max-w-4xl mx-auto"
                  >
                    <div className="mb-12">
                      <Button variant="ghost" onClick={prevStep} className="-ml-4 mb-4 text-muted-foreground font-bold">
                        ← Back to Brand Setup
                      </Button>
                      <Badge className="bg-brand/10 text-brand border-none mb-4">M-03</Badge>
                      <h1 className="font-display text-4xl font-black tracking-tight mb-4 text-foreground">
                        Securely <span className="text-brand">Connect</span>
                      </h1>
                      <p className="text-lg text-muted-foreground max-w-xl">
                        Link your social accounts so we can schedule and publish content. No passwords are ever shared.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                      <SocialCard 
                        name="Instagram" icon={Instagram} connected={connections.instagram} 
                        onConnect={() => setConnections(c => ({...c, instagram: !c.instagram}))} 
                      />
                      <SocialCard 
                        name="Facebook" icon={Facebook} connected={connections.facebook} 
                        onConnect={() => setConnections(c => ({...c, facebook: !c.facebook}))} 
                      />
                      <SocialCard 
                        name="LinkedIn" icon={Linkedin} connected={connections.linkedin} 
                        onConnect={() => setConnections(c => ({...c, linkedin: !c.linkedin}))} 
                      />
                      <SocialCard 
                        name="X (Twitter)" icon={Twitter} connected={connections.twitter} 
                        onConnect={() => setConnections(c => ({...c, twitter: !c.twitter}))} 
                      />
                      <SocialCard 
                        name="TikTok" icon={TiktokIcon} connected={connections.tiktok} 
                        onConnect={() => setConnections(c => ({...c, tiktok: !c.tiktok}))} 
                      />
                    </div>

                    <div className="flex flex-col items-center gap-4">
                      <Button 
                        size="lg" 
                        className="px-12 h-14 text-lg font-black bg-brand hover:bg-brand-dark shadow-xl shadow-brand/20 transition-all active:scale-95" 
                        onClick={nextStep}
                      >
                        Finalize Onboarding <ArrowRight className="ml-2" size={18} />
                      </Button>
                      <button onClick={nextStep} className="text-sm font-bold text-muted-foreground hover:text-brand transition-colors underline underline-offset-4">Skip or do this later</button>
                    </div>
                  </motion.div>
               )}

               {step === 3 && (
                  <motion.div 
                     key="step3"
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="w-full max-w-xl mx-auto"
                  >
                     <div className="mb-12 text-center">
                        <div className="h-20 w-20 bg-brand/10 text-brand rounded-[2rem] flex items-center justify-center mx-auto mb-6">
                           <Users size={32} />
                        </div>
                        <h1 className="font-display text-4xl font-black tracking-tight mb-4">Invite your Team</h1>
                        <p className="text-muted-foreground leading-relaxed">
                           Add your marketing managers or comms team to review content and leave comments.
                        </p>
                     </div>

                     <Card className="bg-white border-none shadow-2xl shadow-black/5 rounded-[2.5rem] p-10 mb-8">
                        <div className="space-y-6">
                           <div className="space-y-2">
                              <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Team Member Email</label>
                              <div className="relative">
                                 <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50" size={18} />
                                 <input 
                                    className="w-full pl-12 pr-4 h-14 bg-muted/30 border-none focus:ring-2 ring-brand rounded-2xl outline-none transition-all text-sm"
                                    placeholder="colleague@company.com" 
                                 />
                              </div>
                           </div>
                           
                           <div className="p-5 rounded-2xl border border-brand/10 bg-brand/5 flex items-start gap-4">
                              <Shield size={20} className="text-brand mt-0.5" />
                              <div>
                                 <div className="text-sm font-bold text-foreground mb-1">Viewer Access</div>
                                 <div className="text-xs text-muted-foreground leading-relaxed">Team members can see content and comment, but cannot change brand settings.</div>
                              </div>
                           </div>
                        </div>
                     </Card>

                     <div className="flex flex-col items-center gap-4">
                        <Button 
                           onClick={() => router.push('/dashboard')}
                           className="w-full h-14 text-lg font-black bg-brand hover:bg-brand-dark shadow-xl shadow-brand/20 transition-all active:scale-95"
                        >
                           Send Invite & Go to Dashboard <ArrowRight className="ml-2" size={20} />
                        </Button>
                        <button 
                           onClick={() => router.push('/dashboard')}
                           className="text-sm font-bold text-muted-foreground hover:text-brand transition-colors underline underline-offset-4"
                        >
                           Skip for now
                        </button>
                     </div>
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
      </main>
    </div>
  )
}

function BrandDNASummary({ logo, name, desc, url }: any) {
   return (
      <div className="space-y-6">
         {/* Hero Card */}
         <Card className="border-none bg-white p-10 rounded-[2rem] shadow-sm">
          <CardContent className="p-0 flex flex-col md:flex-row gap-12 items-center">
            <div className="h-44 w-44 rounded-[1.5rem] bg-[#003B5C] flex items-center justify-center p-8 shadow-sm">
               {logo ? (
                  <img src={logo} className="w-full h-full object-contain" />
               ) : (
                  <div className="flex flex-col items-center text-white">
                     <span className="font-display text-2xl font-black tracking-tighter leading-none mb-1">Jaiz</span>
                     <span className="font-display text-2xl font-black tracking-tighter leading-none">Bank</span>
                  </div>
               )}
            </div>
            <div className="flex-1">
               <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display text-5xl font-black tracking-tight">{name}</h2>
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-widest">{url}</span>
               </div>
               <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                  {desc}
               </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
             <DNAGridCard title="Fonts">
                <div className="flex flex-wrap gap-4">
                   <div className="bg-white rounded-full py-3 px-6 flex items-center justify-between border border-border flex-1 min-w-[180px]">
                      <div>
                         <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-0.5">Headline</div>
                         <div className="font-display text-base font-black">Roboto Serif</div>
                      </div>
                      <ChevronDown size={14} className="text-muted-foreground" />
                   </div>
                   <div className="bg-white rounded-full py-3 px-6 flex items-center justify-between border border-border flex-1 min-w-[180px]">
                      <div>
                         <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-0.5">Body</div>
                         <div className="font-sans text-base font-bold">Open Sans</div>
                      </div>
                      <ChevronDown size={14} className="text-muted-foreground" />
                   </div>
                </div>
             </DNAGridCard>
          </div>
          <div className="lg:col-span-1">
             <DNAGridCard title="Colors">
                <div className="flex items-center gap-6">
                   <div className="flex flex-col items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-white border border-border" />
                      <span className="text-[9px] font-mono font-bold">#FFFFFF</span>
                   </div>
                   <div className="flex flex-col items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-[#008751]" />
                      <span className="text-[9px] font-mono font-bold">#008751</span>
                   </div>
                </div>
             </DNAGridCard>
          </div>
          <div className="lg:col-span-2 lg:row-span-2">
             <DNAGridCard title="About Us">
                <p className="text-muted-foreground leading-relaxed text-sm">
                   Jaiz Bank Plc is a bank in Nigeria operating under Islamic banking principles and is a non-interest bank. It is the first non-interest bank established in Nigeria and is headquartered in Abuja, the capital city of the country.
                </p>
             </DNAGridCard>
          </div>
          <div className="lg:col-span-1">
             <DNAGridCard title="Mission">
                <p className="text-muted-foreground leading-relaxed text-sm">
                   To provide innovative, ethical and value-driven financial services to our customers.
                </p>
             </DNAGridCard>
          </div>
          <div className="lg:col-span-1">
             <DNAGridCard title="Vision">
                <p className="text-muted-foreground leading-relaxed text-sm">
                   To be the leading ethical financial institution in Sub-Saharan Africa.
                </p>
             </DNAGridCard>
          </div>
          <div className="lg:col-span-1">
             <DNAGridCard title="Values">
                <div className="flex flex-col gap-2">
                   {["Reliability", "Efficiency", "Customer-Centric"].map(val => (
                      <div key={val} className="bg-white border border-border py-1.5 px-4 rounded-lg font-bold text-foreground text-xs w-fit">
                         {val}
                      </div>
                   ))}
                </div>
             </DNAGridCard>
          </div>
          <div className="lg:col-span-1">
             <DNAGridCard title="Voice Tone">
                <div className="space-y-1.5 text-sm">
                   <div className="flex gap-2 text-muted-foreground font-bold">1. Professional</div>
                   <div className="flex gap-2 text-muted-foreground font-bold">2. Reliable</div>
                   <div className="flex gap-2 text-muted-foreground font-bold">3. Clear</div>
                </div>
             </DNAGridCard>
          </div>
          <div className="lg:col-span-1">
             <DNAGridCard title="Slogan">
                <p className="italic font-display text-xl font-bold tracking-tight text-foreground/80 mt-4">
                   Connecting Journeys, Nationwide Excellence.
                </p>
             </DNAGridCard>
          </div>
        </div>
      </div>
   )
}

function DNAGridCard({ title, children }: any) {
   return (
     <Card className="border-none bg-white p-6 h-full rounded-2xl">
        <CardContent className="p-0 flex flex-col h-full">
           <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4">{title}</h3>
           <div className="flex-1">
              {children}
           </div>
        </CardContent>
     </Card>
   )
 }
