"use client"

import * as React from "react"
import DashboardLayout from "@/components/pages/dashboard/dashboard-layout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Plus, 
  Search, 
  Filter, 
  Grid, 
  List, 
  MoreVertical, 
  Download, 
  Trash2, 
  FileText,
  Image as ImageIcon,
  Users,
  Layout as LayoutIcon,
  Video,
  Compass,
  Box,
  ChevronRight,
  Edit3,
  Target
} from "lucide-react"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const CATEGORIES = [
  { id: 'logos', label: 'Logos', icon: <Box size={18} />, count: 12, color: 'bg-blue-50 text-blue-600' },
  { id: 'images', label: 'Images', icon: <ImageIcon size={18} />, count: 45, color: 'bg-purple-50 text-purple-600' },
  { id: 'models', label: 'Models', icon: <Users size={18} />, count: 8, color: 'bg-green-50 text-green-600' },
  { id: 'social-designs', label: 'Social Designs', icon: <LayoutIcon size={18} />, count: 24, color: 'bg-orange-50 text-orange-600' },
  { id: 'videos', label: 'Videos', icon: <Video size={18} />, count: 5, color: 'bg-red-50 text-red-600' },
  { id: 'directions', label: 'Directions', icon: <Compass size={18} />, count: 3, color: 'bg-cyan-50 text-cyan-600' },
]

export default function AssetsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('all')

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
        <div>
          <Badge variant="brand" className="mb-4">Media Library</Badge>
          <h1 className="font-display text-5xl font-black tracking-tight text-foreground">
            Brand <span className="text-brand">Assets</span>
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">Manage all your brand's visual and document resources.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="font-bold h-12 px-6">
             Create Folder
          </Button>
          <Button className="bg-brand hover:bg-brand-dark font-black shadow-lg shadow-brand/20 h-12 px-6">
            <Plus size={18} className="mr-2" /> Upload Assets
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
         {/* Categories Sidebar */}
         <div className="lg:col-span-1 space-y-2">
            <button 
              onClick={() => setSelectedCategory('all')}
              className={cn(
                "w-full flex items-center justify-between p-3 rounded-xl transition-all font-bold text-sm",
                selectedCategory === 'all' ? "bg-brand text-white shadow-lg shadow-brand/20" : "hover:bg-muted"
              )}
            >
               <div className="flex items-center gap-3">
                  <Grid size={18} />
                  <span>All Assets</span>
               </div>
               <span className={cn("text-[10px] px-2 py-0.5 rounded-full", selectedCategory === 'all' ? "bg-white/20" : "bg-muted text-muted-foreground")}>104</span>
            </button>
            <div className="py-4 px-2">
               <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4">Categories</div>
               <div className="space-y-1">
                  {CATEGORIES.map(cat => (
                    <button 
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={cn(
                        "w-full flex items-center justify-between p-3 rounded-xl transition-all font-bold text-sm",
                        selectedCategory === cat.id ? "bg-brand text-white shadow-lg shadow-brand/20" : "hover:bg-muted"
                      )}
                    >
                      <div className="flex items-center gap-3">
                         <div className={cn("h-8 w-8 rounded-lg flex items-center justify-center", selectedCategory === cat.id ? "bg-white/20 text-white" : cat.color)}>
                            {cat.icon}
                         </div>
                         <span>{cat.label}</span>
                      </div>
                      <span className={cn("text-[10px] px-2 py-0.5 rounded-full", selectedCategory === cat.id ? "bg-white/20" : "bg-muted text-muted-foreground")}>{cat.count}</span>
                    </button>
                  ))}
               </div>
            </div>

            <Card className="bg-brand/5 border-brand/10 p-4 mt-10">
               <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand">Storage Usage</span>
                  <span className="text-[10px] font-bold text-brand">65%</span>
               </div>
               <div className="h-1.5 w-full bg-brand/10 rounded-full overflow-hidden">
                  <div className="h-full bg-brand w-[65%] rounded-full" />
               </div>
               <p className="text-[9px] text-brand/60 mt-2 font-medium">1.2GB of 2GB used. <span className="underline cursor-pointer">Upgrade Plan</span></p>
            </Card>
         </div>

         {/* Assets Grid */}
         <div className="lg:col-span-3 space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-2 rounded-2xl border border-border">
               <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input 
                    placeholder="Search assets by name, tag, or category..." 
                    className="pl-12 h-12 bg-transparent border-none focus-visible:ring-0 text-base"
                  />
               </div>
               <div className="flex items-center gap-2 pr-2">
                  <Button variant="ghost" size="icon" className="h-10 w-10">
                     <Filter size={18} className="text-muted-foreground" />
                  </Button>
                  <div className="h-6 w-px bg-border mx-2" />
                  <div className="flex bg-muted/50 p-1 rounded-lg">
                     <Button variant="ghost" size="icon" className="h-8 w-8 bg-white shadow-sm text-brand">
                        <Grid size={16} />
                     </Button>
                     <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                        <List size={16} />
                     </Button>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <AssetCard 
                 name="Logo Primary Vector" 
                 type="SVG" 
                 category="Logos" 
                 preview="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop"
               />
               <AssetCard 
                 name="Summer Campaign 01" 
                 type="JPG" 
                 category="Images" 
                 preview="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop"
               />
               <AssetCard 
                 name="Brand Guidelines v2" 
                 type="PDF" 
                 category="Documents" 
                 isDocument
               />
               <AssetCard 
                 name="Office Lifestyle Shots" 
                 type="PNG" 
                 category="Images" 
                 preview="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop"
               />
               <AssetCard 
                 name="Product Explainer" 
                 type="MP4" 
                 category="Videos" 
                 isVideo
               />
               <AssetCard 
                 name="Model Casting Profile" 
                 type="JPG" 
                 category="Models" 
                 preview="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop"
               />
            </div>

            <div className="flex items-center justify-center pt-10">
               <Button variant="secondary" className="font-bold rounded-full px-8">
                  Load More Assets
               </Button>
            </div>
         </div>
      </div>
    </DashboardLayout>
  )
}

function AssetCard({ name, type, category, preview, isDocument, isVideo }: any) {
  return (
    <Card className="group border-border hover:border-brand/40 transition-all shadow-sm overflow-hidden cursor-pointer">
       <div className="aspect-square bg-muted relative overflow-hidden flex items-center justify-center">
          {preview ? (
             <img src={preview} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : isDocument ? (
             <FileText size={48} className="text-muted-foreground opacity-20" />
          ) : isVideo ? (
             <div className="relative w-full h-full">
                <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=400&fit=crop" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
                      <Video size={24} />
                   </div>
                </div>
             </div>
          ) : (
             <Box size={48} className="text-muted-foreground opacity-20" />
          )}
          
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
             <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-white text-black hover:bg-brand hover:text-white border-none">
                <Download size={18} />
             </Button>
             <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-white text-black hover:bg-red-500 hover:text-white border-none">
                <Trash2 size={18} />
             </Button>
          </div>

          <div className="absolute top-3 left-3">
             <Badge className="bg-white/90 backdrop-blur-sm text-black border-none text-[9px] font-black tracking-widest shadow-sm">
                {type}
             </Badge>
          </div>
       </div>
       <CardContent className="p-4">
          <div className="flex items-start justify-between gap-2">
             <div className="min-w-0">
                <h4 className="font-bold text-sm truncate mb-1">{name}</h4>
                <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter flex items-center gap-1">
                   {category} • 2.4 MB
                </div>
             </div>
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                   <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2">
                      <MoreVertical size={14} />
                   </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                   <DropdownMenuItem className="font-medium"><Download size={14} className="mr-2" /> Download</DropdownMenuItem>
                   <DropdownMenuItem className="font-medium"><Edit3 size={14} className="mr-2" /> Rename</DropdownMenuItem>
                   <DropdownMenuItem className="font-medium"><Target size={14} className="mr-2" /> Move to Folder</DropdownMenuItem>
                   <div className="h-px bg-border my-1" />
                   <DropdownMenuItem className="font-medium text-red-600"><Trash2 size={14} className="mr-2" /> Delete</DropdownMenuItem>
                </DropdownMenuContent>
             </DropdownMenu>
          </div>
       </CardContent>
    </Card>
  )
}

