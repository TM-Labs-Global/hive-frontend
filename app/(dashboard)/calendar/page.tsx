import CalendarPage from "@/components/pages/calendar/calendar-page"
import DashboardLayout from "@/components/pages/dashboard/dashboard-layout"

export default function Page() {
  return (
    <DashboardLayout>
       <CalendarPage isAdmin={false} />
    </DashboardLayout>
  )
}
