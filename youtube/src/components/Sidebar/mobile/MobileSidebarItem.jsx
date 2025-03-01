import React from 'react'
import { NavLink } from 'react-router-dom'

const MobileSidebarItem = ({to, label, activeIcon, inactiveIcon}) => {
    return (
        <>
            <li className='w-[65px] h-[45px] rounded-md hover:bg-lightGray text-white'>
                <NavLink
                className="w-full h-full flex flex-col  items-center"
                to={to}>
                    {
                        ({ isActive }) => (
                            <>
                                <div className='h-[60%] overflow-hidden flex justify-center items-center'>
                                    {
                                        isActive ? activeIcon : inactiveIcon
                                    }
                                </div>
                                <p className="h-[40%] text-[0.6rem] font-semibold">
                                    { label }
                                </p>
                            </>
                        )
                    }
                </NavLink>
            </li>
        </>
    )
}

export default MobileSidebarItem