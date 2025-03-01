import React from "react"
import { NavLink } from "react-router-dom"

const SettingSidebar = () => {
    return (
        <>
            <div className="p-4 w-[270px] h-full text-white">
                <div className="px-2 py-2 mb-2 text-[1.35vw] font-bold text-gray-400">
                    Settings
                </div>
                <ul className="w-[13vw] text-[0.9vw]">
                    <li className="overflow-hidden rounded-lg">
                        <NavLink 
                        to="/account"
                        end
                        className={({ isActive }) => 
                            `px-5 py-2 w-full h-full block ${isActive ? 'bg-[#bababa55] hover:bg-[#bababa55]' : 'hover:bg-[#80808048]'}`
                        }>
                           Account 
                        </NavLink>
                    </li>
                    <li className="overflow-hidden rounded-lg ">
                        <NavLink 
                        to="/account/notifications"
                        className={({ isActive }) => 
                            `px-5 py-2 w-full h-full block ${isActive ? 'bg-[#bababa55] hover:bg-[#bababa55]' : 'hover:bg-[#80808048]'}`
                        }>
                           Notifications 
                        </NavLink>
                    </li>
                    <li className="overflow-hidden rounded-lg ">
                        <NavLink 
                        to="/account/downloads"
                        className={({ isActive }) => 
                            `px-5 py-2 w-full h-full block ${isActive ? 'bg-[#bababa55] hover:bg-[#bababa55]' : 'hover:bg-[#80808048]'}`
                        }>
                           Downloads
                        </NavLink>
                    </li>
                    <li className="overflow-hidden rounded-lg ">
                        <NavLink 
                        to="/account/privacy"
                        className={({ isActive }) => 
                            `px-5 py-2 w-full h-full block ${isActive ? 'bg-[#bababa55] hover:bg-[#bababa55]' : 'hover:bg-[#80808048]'}`
                        }>
                           Privacy
                        </NavLink>
                    </li>
                    <li className="overflow-hidden rounded-lg ">
                        <NavLink 
                        to="/account/advanced"
                        className={({ isActive }) => 
                                `px-5 py-2 w-full h-full block ${isActive ? 'bg-[#bababa55] hover:bg-[#bababa55]' : 'hover:bg-[#80808048]'}`
                        }>
                           Advanced settings 
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SettingSidebar