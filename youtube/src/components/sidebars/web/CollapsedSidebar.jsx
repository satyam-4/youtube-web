import React from "react"
import { NavLink } from "react-router-dom"
import { COLLAPSED_SIDEBAR_CONFIG } from "../../../config/desktop/sidebarConfig/CollapsedSidebarConfig"
import getTheme from "../../../services/theme/getTheme.js"
import { COLLAPSED_SIDEBAR } from "../../../constants/styles/constants.js"
import { useDispatch } from "react-redux"
import { toggleYoutubeSidebar } from "../../../features/sidebar/sidebarSlice"

const CollapsedSidebar = () => {
    const dispatch = useDispatch()
    const theme = getTheme()

    const handleMenuClick = (action) => {
        console.log("clicked button")
        if(action === "TOGGLE_SIDEBAR") {
            dispatch(toggleYoutubeSidebar())
        }
    }

    const renderSidebarItems = () => (
        COLLAPSED_SIDEBAR_CONFIG.map((sidebarItem) => (
            sidebarItem.id === "menu"
            ? (
                <div className="h-[65px] bg-dark flex justify-center items-center">
                    <button
                    onClick={() => handleMenuClick(sidebarItem.action)}>
                        {
                            sidebarItem.icon()
                        }
                    </button>
                </div>
            )
            : (
                <NavLink
                className={({ isActive }) => 
                    `py-5 rounded-md flex flex-col items-center gap-2
                    ${theme === "light" ? 
                        (isActive ? 'bg-[#ff000025] hover:bg-[#ff00003c]' : 'hover:bg-[#ff000025]') : 
                        (isActive ? 'bg-[#bababa21] hover:bg-[#bababa38]' : 'hover:bg-[#8080802a]')
                    }`  
                }
                to={sidebarItem.link}>
                    {
                        ({ isActive }) => (
                            <>

                                    <div 
                                    className="flex justify-center">
                                        {
                                            isActive ? sidebarItem.activeIcon() : sidebarItem.inactiveIcon()
                                        }
                                    </div>

                                <span className="text-[0.6rem]">
                                    { sidebarItem.label }
                                </span>
                            </>
                        )
                    }
                </NavLink>
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