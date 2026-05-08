"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { motion } from "framer-motion"
import { Upload, ChevronRight, ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react"
import MotionTrailHero from "./motion-trail-hero"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white selection:bg-brand/30">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/20 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-20 flex items-center">
          <div className="flex-1 flex items-center gap-2">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
               <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
            </div>
            <span className="font-display text-2xl font-bold tracking-tighter">
              The <span className="text-brand">Hive</span>
            </span>
          </div>
          
          <div className="hidden md:flex flex-1 items-center justify-center gap-8 text-sm font-medium text-white/60">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#clients" className="hover:text-white transition-colors">Clients</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
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

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <MotionTrailHero>
            <div className="relative pt-40 pb-24">
              {/* Background Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-brand/10 blur-[120px] rounded-full -z-10" />
              
              <div className="container mx-auto px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand mb-8">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                    </span>
                    Now in Private Beta
                  </span>
                  
                  <h1 className="font-display text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                    Import Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-[#FF7A50] to-[#FF9E80]">
                      Brand DNA
                    </span>
                  </h1>
                  
                  <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-sans">
                    The ultimate operating system for modern brands. 
                    Upload your brand identity once, and let the Hive automate your creative workflows, 
                    approvals, and content pipelines.
                  </p>

                  {/* Import Action */}
                  <div className="max-w-xl mx-auto relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand/50 to-orange-500/50 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative flex p-1.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm shadow-2xl">
                      <div className="flex-1 flex items-center px-4">
                        <Upload className="w-5 h-5 text-white/30 mr-3" />
                        <Input 
                          type="text" 
                          placeholder="Paste your brand URL or name..." 
                          className="bg-transparent border-none outline-none text-white placeholder:text-white/20 w-full text-sm ring-0 focus:ring-0 focus-visible:ring-0 shadow-none"
                        />
                      </div>
                      <Button className="bg-brand hover:bg-brand-hover text-white px-8 rounded-xl h-12 gap-2 shadow-lg shadow-brand/20">
                        Import <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/40">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-brand" />
                      Enterprise Security
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-brand" />
                      AI Powered Insights
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </MotionTrailHero>
        </section>

        {/* Trusted By Section (Logos) */}
        <section id="clients" className="py-24 border-y border-white/5 bg-white/[0.02]">
          <div className="container mx-auto px-6 mb-12 text-center">
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-white/30">
              Trusted by leading brands and agencies
            </h2>
          </div>
          
          <div className="relative flex overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap py-4">
               {[...Array(2)].map((_, i) => (
                 <div key={i} className="flex shrink-0 items-center gap-20 px-10">
                   {[
                     "cosgrove.png",
                     "taj-bank.png",
                     "digital-native-africa.png",
                     "getly.png",
                     "ingene.png",
                     "nis-2026-logo-v2-whitenis-2026.png",
                     "design-teem.png",
                     "takeout-media.png",
                     "tm-africa.png",
                     "tm-global.png"
                   ].map((logo) => (
                     <img 
                       key={logo}
                       src={`/brand-logos/${logo}`} 
                       alt={logo.replace(".png", "").replace(/-/g, " ")} 
                       className="h-8 md:h-10 w-auto opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer brightness-0 invert" 
                     />
                   ))}
                 </div>
               ))}
            </div>
            
            {/* Gradient Mask for Fade Effect */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10" />
          </div>
        </section>

        {/* Floating Visual Element (Optional Wow Factor) */}
        <section id="features" className="py-32 container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand/30 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors">
                  <Zap className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">Instant Onboarding</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Connect your existing brand assets and the Hive automatically configures your workspace.
                </p>
             </div>
             <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand/30 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors">
                  <ShieldCheck className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">Brand Guardian</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Maintain consistency across all channels with automated approval workflows.
                </p>
             </div>
             <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand/30 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors">
                  <Globe className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">Multi-Tenant</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Manage multiple brands under one account with isolated data and custom permissions.
                </p>
             </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-white/20 text-xs">
        <p>The Hive © 2026. All rights reserved. Built for creators by the Hive team.</p>
      </footer>

      {/* Marquee Keyframes */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  )
}
