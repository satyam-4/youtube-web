import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom"
import { useTheme } from "@contexts/ThemeContext.jsx"

const CollapsedSidebarItem = ({ to, activeIcon, inactiveIcon, label }) => {
    const { theme } = useTheme()

    return (
        <>
            <li>
                <NavLink
                className={({ isActive }) => 
                    `py-5 rounded-md flex flex-col items-center gap-1
                    ${theme === "light" ? 'hover:bg-[#ff000025]' : 'hover:bg-[#8080802a]'}`  
                }
                to={to}>
                    {
                        ({ isActive }) => (
                            <>
                                <div>
                                    {
                                        isActive ? activeIcon : inactiveIcon
                                    }
                                </div>
                                <span className="font-semibold text-[0.65em]">
                                    { label }
                                </span>
                            </>
                        )
                    }
                </NavLink>
            </li>
        </>
    )
}

export default CollapsedSidebarItem