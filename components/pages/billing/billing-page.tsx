"use client"

import * as React from "react"
import DashboardLayout from "@/components/pages/dashboard/dashboard-layout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Sparkles, Zap, Shield, Rocket, CreditCard } from "lucide-react"
import { cn } from "@/lib/utils"

const PLANS = [
  {
    name: "Starter",
    price: "$0",
    desc: "Perfect for testing the waters with AI-driven brand management.",
    features: [
      "1 Brand DNA Profile",
      "5 AI Content Generations / mo",
      "2GB Asset Storage",
      "Standard Support",
      "Basic Analytics"
    ],
    cta: "Current Plan",
    variant: "secondary",
    icon: <Zap size={20} />
  },
  {
    name: "Pro",
    price: "$499",
    period: "/mo",
    desc: "For fast-growing brands that need high-volume, premium content.",
    features: [
      "3 Brand DNA Profiles",
      "Unlimited AI Content Generations",
      "20GB Asset Storage",
      "Priority Review Pipeline",
      "Advanced Intelligence Reports",
      "Custom Brand Voices"
    ],
    cta: "Upgrade to Pro",
    variant: "brand",
    popular: true,
    icon: <Rocket size={20} />
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Bespoke solutions for large-scale agencies and global brands.",
    features: [
      "Unlimited Brand Profiles",
      "Dedicated Account Manager",
      "Unlimited Storage",
      "API Access & Custom Integrations",
      "On-premise Deployment Options",
      "White-label Reports"
    ],
    cta: "Contact Sales",
    variant: "dark",
    icon: <Shield size={20} />
  }
]

export default function BillingPage() {
  return (
    <DashboardLayout>
      <div className="relative mb-16">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/5 blur-[100px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[80px] rounded-full pointer-events-none -z-10" />

        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="brand" className="mb-4 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-black">Plans & Billing</Badge>
          <h1 className="font-display text-5xl font-black tracking-tight text-foreground mb-6 leading-tight">
            Scale your brand with <br />
            <span className="text-brand">The Hive Intelligence</span>
          </h1>
          <p className="text-muted-foreground text-lg font-medium leading-relaxed">
            Choose the perfect plan for your business. Whether you're a startup or a global enterprise, we have the tools to power your growth.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {PLANS.map((plan) => (
            <Card 
              key={plan.name} 
              className={cn(
                "relative flex flex-col p-8 rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 group border-2",
                plan.popular ? "border-brand shadow-xl shadow-brand/5 scale-105 z-10" : "border-border hover:border-brand/20"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-brand/20">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className={cn(
                  "h-12 w-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                  plan.variant === 'brand' ? "bg-brand text-white shadow-lg shadow-brand/20" : "bg-muted text-muted-foreground"
                )}>
                  {plan.icon}
                </div>
                <h3 className="font-display text-2xl font-black mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black tracking-tighter">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground font-bold text-sm">{plan.period}</span>}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed font-medium min-h-[48px]">
                  {plan.desc}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-medium">
                    <div className={cn(
                      "h-5 w-5 rounded-full flex items-center justify-center shrink-0",
                      plan.variant === 'brand' ? "bg-brand/10 text-brand" : "bg-green-500/10 text-green-600"
                    )}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.variant as any} 
                className={cn(
                  "w-full h-14 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg transition-all",
                  plan.variant === 'brand' ? "bg-brand hover:bg-brand-dark shadow-brand/20" : 
                  plan.variant === 'dark' ? "bg-surface-dark hover:bg-black" : "bg-white border-2 border-border hover:border-brand/20 text-foreground"
                )}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* Billing Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <Card className="p-8 rounded-[2rem] border-2 border-border bg-white shadow-xl shadow-black/5">
              <div className="flex items-center gap-4 mb-8">
                 <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center">
                    <CreditCard size={24} />
                 </div>
                 <div>
                    <h4 className="font-display text-xl font-black">Payment Method</h4>
                    <p className="text-sm text-muted-foreground font-medium">Manage your linked cards and payment history.</p>
                 </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-muted/30 border border-border flex items-center justify-between mb-6">
                 <div className="flex items-center gap-4">
                    <div className="h-10 w-14 bg-white border border-border rounded-lg flex items-center justify-center">
                       <span className="font-black italic text-blue-800">VISA</span>
                    </div>
                    <div>
                       <div className="text-sm font-black">•••• •••• •••• 4242</div>
                       <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Expires 12/28</div>
                    </div>
                 </div>
                 <Badge variant="success" className="bg-green-500/10 text-green-600 border-none">Primary</Badge>
              </div>

              <Button variant="ghost" className="text-brand font-black text-xs uppercase tracking-widest hover:bg-brand/5">
                 Add New Card <Plus size={16} className="ml-2" />
              </Button>
           </Card>

           <Card className="p-8 rounded-[2rem] border-2 border-border bg-surface-dark text-white shadow-xl shadow-black/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <Sparkles size={120} />
              </div>
              <div className="relative z-10">
                 <h4 className="font-display text-2xl font-black mb-4">Need a custom plan?</h4>
                 <p className="text-white/60 mb-8 max-w-sm leading-relaxed">
                    If you have unique requirements or need to manage 10+ brands, our team can build a custom package for you.
                 </p>
                 <Button className="bg-brand hover:bg-brand-dark h-12 px-8 font-black rounded-xl">
                    Talk to an Expert
                 </Button>
              </div>
           </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

function Plus({ size, className }: any) {
   return (
      <svg 
         width={size} 
         height={size} 
         viewBox="0 0 24 24" 
         fill="none" 
         stroke="currentColor" 
         strokeWidth="3" 
         strokeLinecap="round" 
         strokeLinejoin="round" 
         className={className}
      >
         <line x1="12" y1="5" x2="12" y2="19"></line>
         <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
   )
}
