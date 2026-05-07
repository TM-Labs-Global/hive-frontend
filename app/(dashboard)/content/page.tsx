import DashboardLayout from "@/components/pages/dashboard/dashboard-layout"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <DashboardLayout>
      <Badge variant="brand" className="mb-4">Archive</Badge>
      <h1 className="font-display text-5xl font-black tracking-tight text-foreground">
        Brand <span className="text-brand">Content</span>
      </h1>
      <p className="text-muted-foreground mt-2 text-lg">Historical record of all generated and published content.</p>
    </DashboardLayout>
  )
}
