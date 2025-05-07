import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { useTheme } from "@contexts/ThemeContext"

const ExpandedSidebarItem = ({ to, activeIcon, inactiveIcon, label }) => {
    const { theme } = useTheme()

    return (
        <>
            <li>
                <NavLink
                className={({ isActive }) => 
                    `bg-green- rounded-lg py-3 flex items-center
                    ${theme === "light" ? 
                        (isActive ? 'bg-[#ff000025] hover:bg-[#ff00003c]' : 'hover:bg-[#ff000025]') : 
                        (isActive ? 'bg-[#bababa21] hover:bg-[#bababa38]' : 'hover:bg-[#8080802a]')
                    }`  
                }
                to={to}>
                    {
                        ({ isActive }) => (
                            <>
                                <div className="w-[70px] flex items-center justify-center">
                                    { isActive ? activeIcon : inactiveIcon }
                                </div>
                                <span className={`font-semibold pl-1 text-[1rem] ${theme === "light" ? 'text-black' : 'text-[#fffffff8]'}`}>
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

export default ExpandedSidebarItem