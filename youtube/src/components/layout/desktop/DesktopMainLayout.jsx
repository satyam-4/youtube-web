import DesktopNavbar from "../../navbar/desktop/DesktopNavbar.jsx"
import { Outlet } from "react-router-dom"
import ExpandedSidebar from "../../sidebars/web/ExpandedSidebar.jsx"
import CollapsedSidebar from "../../sidebars/web/CollapsedSidebar.jsx"
import { COLLAPSED_SIDEBAR, EXPANDED_SIDEBAR, NAVBAR } from "../../../constants/styles/constants.js"
import { useTheme } from "../../../contexts/ThemeContext.jsx"

const DesktopMainLayout = () => {
    const { theme } = useTheme()
    const themeClass = theme === "light" ? 'bg-white text-black' : 'bg-black text-white'
    return (
        <div className={`${theme === "light" ? 'bg-white text-black' : 'bg-black text-white'} relative flex h-screen`}>
            {
                isSidebarExpanded === true
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

            <div className="w-screen relative">
              <div 
              style={{ width: NAVBAR.width, left: COLLAPSED_SIDEBAR.width }}
              className={`${themeClass} fixed z-20`}>
                  <DesktopNavbar />
              </div>
              <div 
              style={{ 
                width: `calc(100% - ${isSidebarExpanded ? EXPANDED_SIDEBAR.width : COLLAPSED_SIDEBAR.width})`,
                left: isSidebarExpanded ? EXPANDED_SIDEBAR.width : COLLAPSED_SIDEBAR.width,
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