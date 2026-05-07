"use client"

import * as React from "react"
import DashboardLayout from "../dashboard/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  AreaChart, 
  Area,
  PieChart,
  Pie,
  Cell
} from "recharts"
import { 
  ArrowUpRight, 
  TrendingUp, 
  Users, 
  MousePointer2, 
  Eye,
  Calendar,
  Download,
  Share2,
  Instagram,
  Linkedin,
  Facebook,
  Twitter
} from "lucide-react"

// --- Mock Data ---

const GROWTH_DATA = [
  { name: "Mon", reach: 400, engagement: 240 },
  { name: "Tue", reach: 300, engagement: 139 },
  { name: "Wed", reach: 200, engagement: 980 },
  { name: "Thu", reach: 278, engagement: 390 },
  { name: "Fri", reach: 189, engagement: 480 },
  { name: "Sat", reach: 239, engagement: 380 },
  { name: "Sun", reach: 349, engagement: 430 },
]

const PLATFORM_DATA = [
  { name: "Instagram", value: 400, color: "#EA580C" },
  { name: "LinkedIn", value: 300, color: "#0077B5" },
  { name: "Facebook", value: 300, color: "#1877F2" },
]

const TOP_POSTS = [
  { title: "Brand Launch Reel", platform: "Instagram", reach: "12.4k", engagement: "8%", date: "May 12" },
  { title: "Strategy Brief", platform: "LinkedIn", reach: "8.2k", engagement: "5.4%", date: "May 10" },
  { title: "Product Showcase", platform: "Instagram", reach: "6.1k", engagement: "12%", date: "May 08" },
]

// --- Sub-components ---

function MetricCard({ label, value, trend, icon: Icon }: any) {
  return (
    <Card className="border-border bg-white shadow-sm overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
           <div className="p-2 rounded-lg bg-brand/5 text-brand">
              <Icon size={20} />
           </div>
           <div className="flex items-center gap-1 text-xs font-bold text-success">
              <TrendingUp size={14} /> {trend}
           </div>
        </div>
        <div className="text-3xl font-black tracking-tight mb-1">{value}</div>
        <div className="text-[0.625rem] font-black text-muted-foreground uppercase tracking-widest">{label}</div>
      </CardContent>
    </Card>
  )
}

// --- Main Page ---

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="mb-10 flex items-end justify-between">
         <div>
            <Badge variant="brand" className="mb-4">M-11 / Growth Pulse</Badge>
            <h1 className="font-display text-5xl font-black tracking-tight text-foreground">
               Brand <span className="text-brand">Analytics</span>
            </h1>
         </div>
         <div className="flex items-center gap-3">
            <Button variant="secondary" className="border-border">
               <Calendar className="mr-2" size={16} /> Last 7 Days
            </Button>
            <Button variant="secondary" className="border-border">
               <Download className="mr-2" size={16} /> Export CSV
            </Button>
         </div>
      </div>

      {/* High-Level Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
         <MetricCard label="Total Reach" value="48.2k" trend="+14.2%" icon={Eye} />
         <MetricCard label="Engagement" value="5.8%" trend="+2.1%" icon={MousePointer2} />
         <MetricCard label="New Followers" value="1,242" trend="+8.4%" icon={Users} />
         <MetricCard label="Posts Published" value="24" trend="0%" icon={Share2} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
         {/* Reach Over Time Chart */}
         <Card className="lg:col-span-8 border-border bg-white shadow-sm overflow-hidden">
            <CardContent className="p-8">
               <div className="flex items-center justify-between mb-8">
                  <h3 className="font-display text-xl font-bold">Reach vs Engagement</h3>
                  <div className="flex items-center gap-4">
                     <div className="flex items-center gap-2 text-xs font-bold">
                        <div className="h-3 w-3 rounded-full bg-brand" /> Reach
                     </div>
                     <div className="flex items-center gap-2 text-xs font-bold">
                        <div className="h-3 w-3 rounded-full bg-brand/30" /> Engagement
                     </div>
                  </div>
               </div>
               
               <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={GROWTH_DATA}>
                        <defs>
                           <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#EA580C" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#EA580C" stopOpacity={0}/>
                           </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis 
                           dataKey="name" 
                           axisLine={false} 
                           tickLine={false} 
                           tick={{ fontSize: 10, fontWeight: 700, fill: '#9CA3AF' }}
                           dy={10}
                        />
                        <YAxis 
                           axisLine={false} 
                           tickLine={false} 
                           tick={{ fontSize: 10, fontWeight: 700, fill: '#9CA3AF' }}
                        />
                        <Tooltip 
                           contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                        />
                        <Area type="monotone" dataKey="reach" stroke="#EA580C" strokeWidth={3} fillOpacity={1} fill="url(#colorReach)" />
                        <Area type="monotone" dataKey="engagement" stroke="#EA580C" strokeWidth={2} strokeDasharray="5 5" fill="transparent" />
                     </AreaChart>
                  </ResponsiveContainer>
               </div>
            </CardContent>
         </Card>

         {/* Platform Breakdown */}
         <Card className="lg:col-span-4 border-border bg-white shadow-sm overflow-hidden">
            <CardContent className="p-8">
               <h3 className="font-display text-xl font-bold mb-8">Platform Split</h3>
               <div className="h-[250px] w-full mb-8">
                  <ResponsiveContainer width="100%" height="100%">
                     <PieChart>
                        <Pie
                           data={PLATFORM_DATA}
                           innerRadius={60}
                           outerRadius={80}
                           paddingAngle={5}
                           dataKey="value"
                        >
                           {PLATFORM_DATA.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                           ))}
                        </Pie>
                        <Tooltip />
                     </PieChart>
                  </ResponsiveContainer>
               </div>
               <div className="space-y-4">
                  {PLATFORM_DATA.map(p => (
                     <div key={p.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <div className="h-2 w-2 rounded-full" style={{ backgroundColor: p.color }} />
                           <span className="text-xs font-bold">{p.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground font-bold">{Math.round((p.value/1000)*100)}%</span>
                     </div>
                  ))}
               </div>
            </CardContent>
         </Card>
      </div>

      {/* Top Performing Content */}
      <section>
         <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-2xl font-bold">Top Performing Content</h3>
            <Button variant="ghost" className="text-brand font-bold">Full Content Report <ArrowUpRight className="ml-2" size={16} /></Button>
         </div>
         <div className="grid grid-cols-1 gap-4">
            {TOP_POSTS.map((post, i) => (
               <div key={i} className="flex items-center justify-between p-6 bg-white border border-border rounded-2xl hover:border-brand/40 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                     <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                        {post.platform === 'Instagram' ? <Instagram size={24} /> : <Linkedin size={24} />}
                     </div>
                     <div>
                        <div className="font-bold text-lg">{post.title}</div>
                        <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest">{post.platform} • {post.date}</div>
                     </div>
                  </div>
                  <div className="flex items-center gap-12">
                     <div className="text-right">
                        <div className="text-[0.625rem] font-black text-muted-foreground uppercase tracking-widest mb-1">Reach</div>
                        <div className="font-bold">{post.reach}</div>
                     </div>
                     <div className="text-right">
                        <div className="text-[0.625rem] font-black text-muted-foreground uppercase tracking-widest mb-1">Engagement</div>
                        <div className="font-bold text-brand">{post.engagement}</div>
                     </div>
                     <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={20} />
                     </Button>
                  </div>
               </div>
            ))}
         </div>
      </section>
    </DashboardLayout>
  )
}
