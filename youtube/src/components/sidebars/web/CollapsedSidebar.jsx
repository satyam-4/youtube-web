import React from "react"
import { NavLink } from "react-router-dom"
import { COLLAPSED_SIDEBAR_CONFIG } from "../../../config/desktop/sidebarConfig/CollapsedSidebarConfig"
import { COLLAPSED_SIDEBAR } from "../../../constants/styles/constants.js"
import { useSidebar } from "@contexts/SidebarContext.jsx"
import { useTheme } from "@contexts/ThemeContext.jsx"
import CollapsedSidebarItem from "./sidebarItems/CollapsedSidebarItem.jsx"

const CollapsedSidebar = () => {
    const { theme } = useTheme()
    const { toggleSidebarState } = useSidebar()

    const handleMenuClick = (action) => {
        console.log("clicked button")
        if(action === "TOGGLE_SIDEBAR") {
            toggleSidebarState()
        }
    }

    const renderSidebarItems = () => (
        COLLAPSED_SIDEBAR_CONFIG.map((sidebarItem) => (
            sidebarItem.id === "menu"
            ? (
                <div className="h-[65px] flex justify-center items-center">
                    <button
                    onClick={() => handleMenuClick(sidebarItem.action)}>
                        {
                            sidebarItem.icon()
                        }
                    </button>
                </div>
            )
            : (
                <CollapsedSidebarItem
                to={sidebarItem.link}
                activeIcon={sidebarItem.activeIcon()}
                inactiveIcon={sidebarItem.inactiveIcon()}
                label={sidebarItem.label} />
            )
        ))
    )

    return (
        <div className={`w-[${COLLAPSED_SIDEBAR.width}] h-[${COLLAPSED_SIDEBAR.height}]`}>
            <ul className="w-full h-full">
                {
                    renderSidebarItems()
                }
            </ul>
        </div>
    )
}

export default CollapsedSidebar