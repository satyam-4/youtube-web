import DesktopNavbar from "../../navbar/desktop/DesktopNavbar.jsx"
import { useLocation, Outlet } from "react-router-dom"
import CollapsedSidebarItem from "../../sidebars/web/sidebarItems/CollapsedSidebarItem.jsx"
import MobileSidebar from "../../sidebars/mobile/MobileSidebar.jsx"
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import ExpandedSidebar from "../../sidebars/web/ExpandedSidebar.jsx"
import getTheme from "../../../services/theme/getTheme.js"
import { shouldShowComponent } from "../../../utils/shouldShowComponent.js"
import { useSelector } from "react-redux"
import YoutubeNavbar from "../../navbar/YoutubeNavbar.jsx"
import CollapsedSidebar from "../../sidebars/web/CollapsedSidebar.jsx"
import { COLLAPSED_SIDEBAR, NAVBAR } from "../../../constants/styles/constants.js"

const DesktopMainLayout = () => {
    const youtubeSidebarState = useSelector((state) => state.sidebar.isExpanded)

    return (
        <div className={`flex h-screen`}>
            <div 
            style={{ width: COLLAPSED_SIDEBAR.width }}
            className="fixed">
                <CollapsedSidebar />
            </div>
            <div 
            style={{ width: NAVBAR.width, left: COLLAPSED_SIDEBAR.width }}
            className="relative">
              <div 
              style={{ width: NAVBAR.width, left: COLLAPSED_SIDEBAR.width }}
              className="fixed z-20">
                  <DesktopNavbar />
              </div>
              <div 
              style={{ top: NAVBAR.height }}
              className="relative w-full">
                  <Outlet />
              </div>
            </div>
        </div>
    )
}

export default DesktopMainLayout