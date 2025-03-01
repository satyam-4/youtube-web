import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom"

const CollapsedSidebarItem = ({ to, activeIcon, inactiveIcon, label }) => {
    const youtubeSidebarState = useSelector((state) => state.sidebar.isExpanded)

    return (
        <>
            <li>
                <NavLink
                className={`
                    py-5 rounded-md flex flex-col items-center gap-2 hover:bg-[#bababa38] text-white
                `}
                to={to}>
                    {
                        ({ isActive }) => (
                            <>

                                    <div 
                                    className={`
                                        flex justify-center

                                    `}>
                                        {
                                            isActive ? activeIcon : inactiveIcon
                                        }
                                    </div>

                                <span className="text-[0.6rem]">
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