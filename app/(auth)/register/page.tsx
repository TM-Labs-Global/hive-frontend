"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mail, Lock, User, Sparkles } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex bg-white font-sans">
      {/* Left Side: Branding/Visual */}
      <div className="hidden lg:flex w-1/2 bg-surface-dark p-16 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand rounded-full blur-[120px]" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-brand rounded-full blur-[100px]" />
        </div>
        
        <div className="relative z-10">
          <div className="font-display text-3xl font-black text-white tracking-tighter mb-2">
            The <span className="text-brand">Hive</span>
          </div>
          <Badge variant="brand" className="text-[0.625rem] px-2 py-0.5">Agency OS v1.1</Badge>
        </div>

        <div className="relative z-10">
           <h2 className="font-display text-6xl font-black text-white tracking-tight leading-[0.9] mb-8">
              Transform your <br />
              <span className="text-brand">brand presence</span> <br />
              from one place.
           </h2>
           <p className="text-xl text-white/50 max-w-md leading-relaxed">
              Join the most efficient workflow between brands and creative teams. 
              Sign up to start your journey with Takeout Media.
           </p>
        </div>

        <div className="relative z-10 text-white/30 text-xs font-medium uppercase tracking-widest">
           © 2026 Takeout Media Global
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-20">
        <div className="w-full max-w-[420px] space-y-10">
          <div>
            <h1 className="font-display text-4xl font-black tracking-tight text-foreground mb-3">
              Create an <span className="text-brand">Account</span>
            </h1>
            <p className="text-muted-foreground">
              Enter your details to begin your onboarding journey.
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[0.625rem] font-black text-muted-foreground uppercase tracking-widest">Full Name</label>
              <div className="relative">
                 <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50" size={18} />
                 <Input placeholder="John Doe" className="pl-10 h-12 border-border focus:ring-brand" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[0.625rem] font-black text-muted-foreground uppercase tracking-widest">Email Address</label>
              <div className="relative">
                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50" size={18} />
                 <Input type="email" placeholder="john@company.com" className="pl-10 h-12 border-border focus:ring-brand" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[0.625rem] font-black text-muted-foreground uppercase tracking-widest">Password</label>
              <div className="relative">
                 <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50" size={18} />
                 <Input type="password" placeholder="••••••••" className="pl-10 h-12 border-border focus:ring-brand" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button className="w-full h-14 text-lg font-bold shadow-brand group" asChild>
               <Link href="/onboarding">
                  Get Started <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
               </Link>
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Already have an account? <Link href="/login" className="text-brand font-bold hover:underline">Sign in</Link>
            </p>
          </div>

          <div className="pt-8 border-t border-border">
             <div className="flex items-center gap-3 text-xs text-muted-foreground leading-relaxed italic">
                <Sparkles size={14} className="text-brand shrink-0" />
                <span>By signing up, you agree to Takeout Media's terms of service and privacy policy.</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
