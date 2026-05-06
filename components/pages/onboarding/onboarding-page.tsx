"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Check, ArrowRight, Instagram, Facebook, Linkedin, Twitter, CloudUpload, LayoutGrid, Calendar, CheckSquare, BarChart2, Settings, UserPlus, Mail, Shield } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// --- Sub-components ---

function PackageCard({ 
  title, 
  price, 
  features, 
  selected, 
  onSelect 
}: { 
  title: string, 
  price: string, 
  features: string[], 
  selected: boolean, 
  onSelect: () => void 
}) {
  return (
    <Card 
      className={cn(
        "relative cursor-pointer transition-all hover:shadow-md",
        selected ? "border-brand border-2 ring-1 ring-brand/20 bg-brand-bg" : "border-border hover:border-brand/40"
      )}
      onClick={onSelect}
    >
      {selected && (
        <div className="absolute top-4 right-4 bg-brand text-white rounded-full p-1">
          <Check size={12} strokeWidth={4} />
        </div>
      )}
      <CardContent className="pt-8 pb-6">
        <div className="mb-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">{title}</div>
        <div className="mb-6 flex items-baseline gap-1">
          <span className="text-3xl font-display font-black text-foreground">{price}</span>
          <span className="text-sm text-muted-foreground">/mo</span>
        </div>
        <ul className="space-y-3">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-snug">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
              {f}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

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
    <Card className={cn("transition-all", connected ? "bg-brand-bg border-brand/30" : "bg-white")}>
      <CardContent className="flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <div className={cn("p-3 rounded-xl", connected ? "bg-brand text-white" : "bg-muted text-muted-foreground")}>
            <Icon size={24} />
          </div>
          <div>
            <div className="font-bold text-sm">{name}</div>
            <div className="text-xs text-muted-foreground">{connected ? "Account linked" : "Not connected"}</div>
          </div>
        </div>
        <Button 
          variant={connected ? "outline" : "secondary"} 
          size="sm"
          onClick={onConnect}
          className={cn(connected && "border-brand text-brand hover:bg-brand/5")}
        >
          {connected ? "Disconnect" : "Connect"}
        </Button>
      </CardContent>
    </Card>
  )
}

// --- Main Page ---

export default function OnboardingPage() {
  const [step, setStep] = React.useState(1)
  const [selectedPackage, setSelectedPackage] = React.useState<string | null>(null)
  const [connections, setConnections] = React.useState({
    instagram: false,
    facebook: false,
    linkedin: false,
    twitter: false
  })

  const nextStep = () => setStep(s => s + 1)
  const prevStep = () => setStep(s => s - 1)

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans">
      {/* Onboarding Header */}
      <header className="border-b border-border bg-white px-8 py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="font-display text-xl font-extrabold tracking-tight">
            The <span className="text-brand">Hive</span> Onboarding
          </div>
          
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i}
                className={cn(
                  "h-1.5 w-12 rounded-full transition-all duration-500",
                  i <= step ? "bg-brand" : "bg-muted"
                )}
              />
            ))}
            <span className="ml-4 text-[0.625rem] font-bold text-muted-foreground uppercase tracking-widest">
              Step {step} of 4
            </span>
          </div>

          <Button variant="ghost" className="text-xs">Save & Exit</Button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-20 px-8">
        {/* Step 1: Packages */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-12 text-center">
              <Badge variant="brand" className="mb-4">M-01 / Phase 1</Badge>
              <h1 className="font-display text-5xl font-black tracking-tight mb-4 text-foreground">
                Choose Your <span className="text-brand">Package</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Select the service tier that fits your brand's growth goals. You can upgrade at any time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <PackageCard 
                title="Basic" price="$499" selected={selectedPackage === "basic"}
                onSelect={() => setSelectedPackage("basic")}
                features={["2 Platforms Managed", "8 Posts per Month", "Basic Analytics"]}
              />
              <PackageCard 
                title="Professional" price="$999" selected={selectedPackage === "pro"}
                onSelect={() => setSelectedPackage("pro")}
                features={["4 Platforms Managed", "16 Posts per Month", "Strategy Session", "48h Approval"]}
              />
              <PackageCard 
                title="Enterprise" price="$1,999" selected={selectedPackage === "enterprise"}
                onSelect={() => setSelectedPackage("enterprise")}
                features={["Unlimited Platforms", "Daily Publishing", "Full Video Prod", "Dedicated AM"]}
              />
            </div>

            <div className="flex justify-center">
              <Button size="lg" className="px-12 h-14 text-lg font-bold shadow-brand" disabled={!selectedPackage} onClick={nextStep}>
                Continue to Brand Setup <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Brand Configuration */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="mb-12">
              <Button variant="ghost" onClick={prevStep} className="-ml-4 mb-4 text-muted-foreground">
                ← Back to Packages
              </Button>
              <Badge variant="brand" className="mb-4">M-02</Badge>
              <h1 className="font-display text-5xl font-black tracking-tight mb-4 text-foreground">
                Tell us about your <span className="text-brand">Brand</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                This helps our content team understand your voice, goals, and visual identity.
              </p>
            </div>

            <Card className="bg-white border-border shadow-sm">
              <CardContent className="p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Brand Name</label>
                      <Input placeholder="e.g. Takeout Media" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Industry</label>
                      <Input placeholder="e.g. Creative Agency" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Tone of Voice</label>
                      <Input placeholder="e.g. Bold, Professional, Witty" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Brand Logo</label>
                      <div className="border-2 border-dashed border-muted rounded-xl p-8 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-muted/30 transition-colors">
                        <CloudUpload className="text-muted-foreground" size={32} />
                        <div className="text-sm font-semibold">Click to upload</div>
                        <div className="text-[0.625rem] text-muted-foreground uppercase">SVG, PNG, JPG (MAX. 5MB)</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Primary Color</label>
                      <div className="flex gap-3">
                        {["#E84210", "#0D0D0D", "#2563EB", "#16A34A", "#CA8A04"].map((c) => (
                          <div key={c} className="h-10 w-10 rounded-full cursor-pointer ring-offset-2 hover:ring-2 hover:ring-brand" style={{ backgroundColor: c }} />
                        ))}
                        <div className="h-10 w-10 rounded-full border-2 border-dashed border-muted flex items-center justify-center text-muted-foreground text-xs font-bold cursor-pointer hover:bg-muted/30">+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 flex justify-end">
              <Button size="lg" className="px-12 h-14 text-lg font-bold shadow-brand" onClick={nextStep}>
                Connect Social Accounts <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Social Connection */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="mb-12">
              <Button variant="ghost" onClick={prevStep} className="-ml-4 mb-4 text-muted-foreground">
                ← Back to Brand Setup
              </Button>
              <Badge variant="brand" className="mb-4">M-03</Badge>
              <h1 className="font-display text-5xl font-black tracking-tight mb-4 text-foreground">
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
            </div>

            <div className="flex justify-center">
              <Button 
                size="lg" className="px-12 h-14 text-lg font-bold shadow-brand" 
                onClick={nextStep}
                disabled={!Object.values(connections).some(Boolean)}
              >
                Finalize Onboarding <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Completion */}
        {step === 4 && (
          <div className="animate-in zoom-in duration-500 text-center max-w-2xl mx-auto">
             <div className="mb-8 flex justify-center">
                <div className="h-24 w-24 bg-brand rounded-full flex items-center justify-center text-white shadow-brand animate-bounce">
                   <Check size={48} strokeWidth={3} />
                </div>
             </div>
             <h1 className="font-display text-6xl font-black tracking-tighter mb-6">
                You're all <span className="text-brand">set!</span>
             </h1>
             <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Welcome to The Hive. Your brand is configured, accounts are linked, and our content team has been notified. We'll start drafting your first deliverables shortly.
             </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button size="lg" className="h-14 px-8 font-bold text-lg" onClick={() => window.location.href = "/dashboard"}>
                    Go to Dashboard
                 </Button>
                 
                 <Dialog>
                    <DialogTrigger asChild>
                       <Button variant="outline" size="lg" className="h-14 px-8 font-bold text-lg border-brand text-brand hover:bg-brand/5">
                          Invite Team Members
                       </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] border-none shadow-2xl rounded-2xl p-8">
                       <DialogHeader className="mb-6">
                          <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                             <UserPlus size={24} />
                          </div>
                          <DialogTitle className="font-display text-2xl font-bold">Invite Your Team</DialogTitle>
                          <DialogDescription className="text-muted-foreground">
                             Add your marketing managers or comms team to review content and leave comments.
                          </DialogDescription>
                       </DialogHeader>
                       <div className="space-y-4">
                          <div className="space-y-2">
                             <label className="text-[0.625rem] font-black text-muted-foreground uppercase tracking-widest">Team Member Email</label>
                             <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50" size={18} />
                                <Input placeholder="colleague@company.com" className="pl-10 h-12 bg-muted/30 border-none focus:ring-brand" />
                             </div>
                          </div>
                          <div className="p-4 rounded-xl border border-brand/20 bg-brand/5 flex items-start gap-3">
                             <Shield size={16} className="text-brand mt-0.5" />
                             <div>
                                <div className="text-xs font-bold">Viewer Access</div>
                                <div className="text-[0.625rem] text-muted-foreground">Team members can see content and comment, but cannot change brand settings.</div>
                             </div>
                          </div>
                       </div>
                       <DialogFooter className="mt-8">
                          <Button className="w-full h-12 font-bold shadow-brand">
                             Send Invite
                          </Button>
                       </DialogFooter>
                    </DialogContent>
                 </Dialog>
              </div>
          </div>
        )}
      </main>
    </div>
  )
}
