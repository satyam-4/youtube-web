import React from "react"
import { NavLink } from "react-router-dom"

const ExpandedSidebarItem = ({ to, activeIcon, inactiveIcon, label }) => {
    return (
        <>
            <li>
                <NavLink
                className={({ isActive }) =>
                    `md:pl-[1.4rem] lg:pl-8 rounded-lg py-3 flex items-center md:gap-7 lg:gap-8 ${isActive ? 'bg-[#bababa21] hover:bg-[#bababa38]' : 'hover:bg-[#8080802a]'}`
                }
                to={to}>
                    {
                        ({ isActive }) => (
                            <>
                                <div>
                                    { isActive ? activeIcon : inactiveIcon }
                                </div>
                                <div className="text-[1rem] text-[#fffffff8]">
                                    { label }
                                </div>
                            </>
                        )
                    }
                </NavLink>
            </li>
        </>
    )
}

export default ExpandedSidebarItem