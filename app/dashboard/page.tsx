"use client"
import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from "./data.json"
import { useRouter } from "next/navigation"
import { useSession } from "@/lib/auth-client"
import { useEffect } from "react"

export default function Page() {

  const router = useRouter()
      const {data: session, isPending} = useSession()
      
      useEffect(() => {
          if (!isPending && !session) {
              router.push("/login")
          }
      }, [session, isPending, router])
  
      if (isPending) {
          return (
              <div className="flex min-h-screen items-center justify-center">
                  <p>
                      Loading...
                  </p>
              </div>
          )
      }
  
      if (!session) {
          return null
      }
  

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
