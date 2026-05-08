"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Check, Zap, Shield, Rocket, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

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
    cta: "Get Started Free",
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
    cta: "Go Pro Now",
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

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white selection:bg-brand/30">
      {/* Header (Simplified from HomePage) */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/20 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-20 flex items-center">
          <Link href="/" className="flex-1 flex items-center gap-2">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
               <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
            </div>
            <span className="font-display text-2xl font-bold tracking-tighter">
              The <span className="text-brand">Hive</span>
            </span>
          </Link>
          
          <div className="hidden md:flex flex-1 items-center justify-center gap-8 text-sm font-medium text-white/60">
            <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/#clients" className="hover:text-white transition-colors">Clients</Link>
            <Link href="/pricing" className="text-white transition-colors">Pricing</Link>
          </div>

          <div className="flex-1 flex items-center justify-end gap-4">
            <Button variant="ghost" className="text-white/60 hover:text-white" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button className="bg-brand hover:bg-brand-hover text-white rounded-full px-6" asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-40 pb-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-brand/10 blur-[120px] rounded-full -z-10" />

        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Badge variant="default" className="mb-6 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-black border-brand/30 text-brand bg-brand/5">Pricing Plans</Badge>
            <h1 className="font-display text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Predictable pricing for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-[#FF7A50] to-[#FF9E80]">
                Creative Excellence
              </span>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
              Choose the perfect plan to automate your brand intelligence and creative operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {PLANS.map((plan) => (
              <Card 
                key={plan.name} 
                className={cn(
                  "relative flex flex-col p-8 rounded-[2.5rem] transition-all duration-500 border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 group",
                  plan.popular ? "border-brand shadow-2xl shadow-brand/10 scale-105 z-10" : "hover:border-white/20"
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
                    plan.variant === 'brand' ? "bg-brand text-white" : "bg-white/10 text-white/60"
                  )}>
                    {plan.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-black tracking-tighter text-white">{plan.price}</span>
                    {plan.period && <span className="text-white/40 font-bold text-sm">{plan.period}</span>}
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed font-medium min-h-[48px]">
                    {plan.desc}
                  </p>
                </div>

                <div className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium">
                      <div className={cn(
                        "h-5 w-5 rounded-full flex items-center justify-center shrink-0",
                        plan.variant === 'brand' ? "bg-brand/20 text-brand" : "bg-white/10 text-white/40"
                      )}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-white/70">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={cn(
                    "w-full h-14 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg transition-all",
                    plan.variant === 'brand' ? "bg-brand hover:bg-brand-hover text-white shadow-brand/20" : 
                    plan.variant === 'dark' ? "bg-white text-black hover:bg-white/90" : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                  )}
                  asChild
                >
                  <Link href="/register">
                    {plan.cta} {plan.variant === 'brand' && <ArrowRight className="ml-2 w-4 h-4" />}
                  </Link>
                </Button>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">Enterprise-grade security included</h2>
            <p className="text-white/40 mb-8 max-w-2xl mx-auto">
              All plans come with SSO, data encryption at rest, and 99.9% uptime SLA as standard. We take your brand's security as seriously as you do.
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-30 grayscale contrast-125">
               {/* Add some mock trust badges or text */}
               <span className="font-black tracking-widest text-sm">SOC2 TYPE II</span>
               <span className="font-black tracking-widest text-sm">GDPR COMPLIANT</span>
               <span className="font-black tracking-widest text-sm">ISO 27001</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-white/20 text-xs">
        <p>The Hive © 2026. All rights reserved. Built for creators by the Hive team.</p>
      </footer>
    </div>
  )
}
