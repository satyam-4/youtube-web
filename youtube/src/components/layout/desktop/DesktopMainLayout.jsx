import DesktopNavbar from "../../navbar/desktop/DesktopNavbar.jsx"
import { Outlet } from "react-router-dom"
import ExpandedSidebar from "../../sidebars/web/ExpandedSidebar.jsx"
import CollapsedSidebar from "../../sidebars/web/CollapsedSidebar.jsx"
import { COLLAPSED_SIDEBAR, EXPANDED_SIDEBAR, NAVBAR } from "../../../constants/styles/constants.js"
import { useTheme } from "@contexts/ThemeContext.jsx"
import { useSidebar } from "@contexts/SidebarContext.jsx"

const DesktopMainLayout = () => {
    const { theme } = useTheme()
    const { isExpanded } = useSidebar()

    const themeClass = theme === "light" ? 'bg-white text-black' : 'bg-black text-white'

    return (
        <div className={`relative ${theme === "light" ? 'bg-white text-black' : 'bg-dark text-white'} flex`}>
            {
                isExpanded
                ? (
                    <div 
                    style={{ width: EXPANDED_SIDEBAR.width }}
                    className={`${themeClass} fixed z-20`}>
                        <ExpandedSidebar />
                    </div>
                )
                : (
                    <div 
                    style={{ width: COLLAPSED_SIDEBAR.width }}
                    className={`${themeClass} fixed z-20`}>
                        <CollapsedSidebar />
                    </div>
                )
            }

            <div className="w-full relative">
              <div 
              style={{ width: `calc(100% - ${COLLAPSED_SIDEBAR.width})`, left: COLLAPSED_SIDEBAR.width }}
              className={`${themeClass} fixed z-20`}>
                  <DesktopNavbar />
              </div>
              <div 
              style={{ 
                width: `calc(100% - ${isExpanded ? EXPANDED_SIDEBAR.width : COLLAPSED_SIDEBAR.width})`,
                left: isExpanded ? EXPANDED_SIDEBAR.width : COLLAPSED_SIDEBAR.width,
                top: NAVBAR.height
            }}
              className={`${themeClass} relative`}>
                  <Outlet />
              </div>
            </div>
        </div>
    )
}

export default DesktopMainLayout