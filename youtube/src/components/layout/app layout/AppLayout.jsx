import React from "react"
import { lazy, Suspense } from "react"
import { useMediaQuery } from "react-responsive"
import { ThemeProvider } from "@contexts/ThemeContext.jsx"
import { SidebarProvider } from "@contexts/SidebarContext.jsx"

const MobileMainLayout = lazy(() => import("../mobile/MobileMainLayout")) 
const DesktopMainLayout = lazy(() => import("../desktop/DesktopMainLayout")) 

const AppLayout = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 })

    const Layout = isMobile ? MobileMainLayout : DesktopMainLayout

    return (
        <ThemeProvider>
            <SidebarProvider>
                <Suspense fallback={<> </>}>
                    <Layout />
                </Suspense>
            </SidebarProvider>
        </ThemeProvider>
    )
}

export default AppLayout