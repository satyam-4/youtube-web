import MobileNavbar from "@components/navbar/mobile/MobileNavbar.jsx"
import MobileSidebar from "@components/sidebars/mobile/MobileSidebar.jsx"
import { Outlet } from "react-router-dom"
import { useTheme } from "@contexts/ThemeContext.jsx"

const MobileMainLayout = () => {
    const { theme } = useTheme()
    const themeClass = theme === "light" ? 'bg-white text-black' : 'bg-black text-white'

    return (
        <div className={`${themeClass} relative w-screen h-screen`}>
            <div className={`${themeClass} fixed top-0 z-20`}>
                <MobileNavbar />
            </div>
            <div className="w-full fixed top-[56px] bottom-[56px] overflow-y-scroll">
                <Outlet />
            </div>
            <div className={`${themeClass} fixed w-full h-[56px] bottom-0`}>
                <MobileSidebar />
            </div>
        </div>
    )
}

export default MobileMainLayout