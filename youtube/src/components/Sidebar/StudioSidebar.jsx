import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined'
import AssessmentIcon from '@mui/icons-material/Assessment'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import GroupsIcon from '@mui/icons-material/Groups'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined'

const StudioSidebar = () => {
    const userData = useSelector((state) => state.user.data)
    const studioSidebarState = useSelector((state) => state.sidebar.studioSidebar)
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (studioSidebarState) {
            const timeout = setTimeout(() => setShowContent(true), 500); // Render after 500ms
            return () => clearTimeout(timeout); // Cleanup
        } else {
            setShowContent(false); // Hide immediately when collapsing
        }
    }, [studioSidebarState]);

    return (
        <>  
            {/* {
                studioSidebarState ? (
                    <div className="w-[250px] h-full bg-zinc-800 text-white flex flex-col border-r-2 border-[#ffffff15] transition-all duration-300">
                        <div className="h-[30%] flex flex-col justify-center items-center gap-3 p-10">
                            <div>
                                <img 
                                className={
                                    studioSidebarState ? (
                                        `w-[8vw] h-[8vw] object-cover rounded-full transition-all duration-200`
                                    ) : (
                                        `w-[2vw] h-[2vw] object-cover rounded-full transition-all duration-200`
                                    )
                                }
                                src={userData.data.avatar} />
                            </div>
                            <div className="h-full w-full text-center">
                                <p className="font-semibold">
                                    Your channel
                                </p>
                                <p className="text-[0.8rem] text-[#e3e1e185]">
                                    {
                                        userData.data.fullName
                                    }
                                </p>
                            </div>
                        </div>                
                        <ul className="h-[45%] flex flex-col gap-1 overflow-y-auto">
                            <li className="mx-auto w-[90%] text-lg">
                                <NavLink 
                                to="/dashboard"
                                className={({ isActive }) => `py-3 w-full pl-2 rounded-lg flex items-center gap-5 hover:bg-zinc-950 ${isActive ? 'bg-zinc-950 font-semibold' : ''}`}>
                                    {
                                        ({ isActive }) => (
                                            <>
                                                { isActive ? <DashboardIcon /> : <DashboardOutlinedIcon /> }
                                                <span>
                                                    Dashboard
                                                </span>
                                            </>
                                        )
                                    }
                                </NavLink>
                            </li>
                            <li className="mx-auto w-[90%] text-lg">
                                <NavLink 
                                to="/Content"
                                className={({ isActive }) => `py-3 w-full pl-2 rounded-lg flex items-center gap-5 hover:bg-zinc-950 ${isActive ? 'bg-zinc-950 font-semibold' : ''}`}>
                                    {
                                        ({ isActive }) => (
                                            <>
                                                { isActive ? <VideoLibraryIcon /> : <VideoLibraryOutlinedIcon /> }
                                                <span>
                                                    Content
                                                </span>
                                            </>
                                        )
                                    }
                                </NavLink>
                            </li>
                            <li className="mx-auto w-[90%] text-lg">
                                <NavLink 
                                to="/analytics"
                                className={({ isActive }) => `py-3 w-full pl-2 rounded-lg flex items-center gap-5 hover:bg-zinc-950 ${isActive ? 'bg-zinc-950 font-semibold' : ''}`}>
                                    {
                                        ({ isActive }) => (
                                            <>
                                                { isActive ? <AssessmentIcon /> : <AssessmentOutlinedIcon /> }
                                                <span>
                                                    Analytics
                                                </span>
                                            </>
                                        )
                                    }
                                </NavLink>
                            </li>
                            <li className="mx-auto w-[90%] text-lg">
                                <NavLink 
                                to="/community"
                                className={({ isActive }) => `py-3 w-full pl-2 rounded-lg flex items-center gap-5 hover:bg-zinc-950 ${isActive ? 'bg-zinc-950 font-semibold' : ''}`}>
                                    {
                                        ({ isActive }) => (
                                            <>
                                                { isActive ? <GroupsIcon /> : <GroupsOutlinedIcon /> }
                                                <span>
                                                    Community
                                                </span>
                                            </>
                                        )
                                    }
                                </NavLink>
                            </li>
                            <li className="mx-auto w-[90%] text-lg">
                                <NavLink 
                                to="/customization"
                                className={({ isActive }) => `py-3 w-full pl-2 rounded-lg flex items-center gap-5 hover:bg-zinc-950 ${isActive ? 'bg-zinc-950 font-semibold' : ''}`}>
                                    {
                                        ({ isActive }) => (
                                            <>
                                                { isActive ? <AutoFixHighIcon /> : <AutoFixHighOutlinedIcon /> }
                                                <span>
                                                    Customization
                                                </span>
                                            </>
                                        )
                                    }
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="mt-2 pt-2 h-[25%] flex flex-col gap-1 border-t-2 border-[#ffffff15]">
                            <li className="mx-auto w-[90%] text-lg">
                                <button 
                                className={`py-3 w-full pl-2 rounded-lg flex items-center gap-5 hover:bg-zinc-950`}>
                                    <SettingsOutlinedIcon/>
                                    <span>
                                        Settings
                                    </span>
                                </button>
                            </li>
                            <li className="mx-auto w-[90%] text-lg">
                                <button 
                                className={`py-3 w-full pl-2 rounded-lg flex items-center gap-5 hover:bg-zinc-950`}>
                                    <FeedbackOutlinedIcon/>
                                    <span>
                                        Send feedback
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="w-[80px] bg-zinc-800 text-white flex flex-col justify-between items-center border-r-2 border-[#ffffff15] transition-all duration-300">
                        <div className="flex flex-col items-center">
                            <img 
                            className={
                                studioSidebarState ? (
                                    `w-[8vw] h-[8vw] object-cover rounded-full transition-all duration-200`
                                ) : (
                                    `w-[2vw] h-[2vw] object-cover rounded-full transition-all duration-200`
                                )
                            }
                            src={userData.data.avatar} />        
                            <ul className="mt-2 flex flex-col items-center gap-1 overflow-y-auto">
                                <li className="text-lg">
                                    <NavLink 
                                    to="/dashboard"
                                    className={({ isActive }) => `p-2 rounded-lg flex justify-center items-center hover:bg-zinc-950 ${isActive ? 'bg-zinc-950 font-semibold' : ''}`}>
                                        {
                                            ({ isActive }) => (
                                                <>
                                                    { isActive ? <DashboardIcon /> : <DashboardOutlinedIcon /> }
                                                </>
                                            )
                                        }
                                    </NavLink>
                                </li>
                                <li className="text-lg">
                                    <NavLink 
                                    to="/Content"
                                    className={({ isActive }) => `p-2 rounded-lg flex items-center gap-5 hover:bg-zinc-950 ${isActive ? 'bg-zinc-950 font-semibold' : ''}`}>
                                        {
                                            ({ isActive }) => (
                                                <>
                                                    { isActive ? <VideoLibraryIcon /> : <VideoLibraryOutlinedIcon /> }
                                                </>
                                            )
                                        }
                                    </NavLink>
                                </li>
                                <li className="text-lg">
                                    <NavLink 
                                    to="/analytics"
                                    className={({ isActive }) => `p-2 rounded-lg flex items-center gap-5 hover:bg-zinc-950 ${isActive ? 'bg-zinc-950 font-semibold' : ''}`}>
                                        {
                                            ({ isActive }) => (
                                                <>
                                                    { isActive ? <AssessmentIcon /> : <AssessmentOutlinedIcon /> }
                                                </>
                                            )
                                        }
                                    </NavLink>
                                </li>
                                <li className="text-lg">
                                    <NavLink 
                                    to="/community"
                                    className={({ isActive }) => `p-2 rounded-lg flex items-center gap-5 hover:bg-zinc-950 ${isActive ? 'bg-zinc-950 font-semibold' : ''}`}>
                                        {
                                            ({ isActive }) => (
                                                <>
                                                    { isActive ? <GroupsIcon /> : <GroupsOutlinedIcon /> }
                                                </>
                                            )
                                        }
                                    </NavLink>
                                </li>
                                <li className="text-lg">
                                    <NavLink 
                                    to="/customization"
                                    className={({ isActive }) => `p-2 rounded-lg flex items-center gap-5 hover:bg-zinc-950 ${isActive ? 'bg-zinc-950 font-semibold' : ''}`}>
                                        {
                                            ({ isActive }) => (
                                                <>
                                                    { isActive ? <AutoFixHighIcon /> : <AutoFixHighOutlinedIcon /> }
                                                </>
                                            )
                                        }
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <ul className="mt-2 pt-2 flex flex-col justify-center items-center gap-1 border-t-2 border-[#ffffff15]">
                            <li className="text-lg flex justify-center items-center">
                                <button 
                                className={`p-2 rounded-lg flex items-center gap-5 hover:bg-zinc-950`}>
                                    <SettingsOutlinedIcon/>
                                </button>
                            </li>
                            <li className="text-lg">
                                <button 
                                className={`p-2 rounded-lg flex items-center gap-5 hover:bg-zinc-950`}>
                                    <FeedbackOutlinedIcon/>
                                </button>
                            </li>
                        </ul>
                    </div>
                )
            } */}

            <div className={
                studioSidebarState ? (
                    `bg-zinc-800 w-[15vw] h-full text-white  border-r-2 border-[#ffffff15] transition-all duration-500`
                ) : (
                    `bg-zinc-800 w-[5vw] h-full text-white  border-r-2 border-[#ffffff15] transition-all duration-500`
                )
            }>
                <div className="py-3 bg-red-400 flex flex-col items-center justify-center">
                    <img 
                    className={
                        studioSidebarState ? (
                            `bg-red-400 w-[8vw] h-[8vw] object-cover rounded-full transition-all duration-500`
                        ) : (
                            `bg-red-400 w-[2vw] h-[2vw] object-cover rounded-full transition-all duration-500`
                        )
                    }
                    src={userData.data.avatar} />  
                    {
                        showContent && (
                            <div className={`
                                bg-green-400 overflow-hidden transition-[max-height,opacity] duration-1000 ease-in-out 
                                ${studioSidebarState ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0"}
                            `}>
                                <p className={`
                                    font-semibold transition-all duration-500 delay-500
                                    ${studioSidebarState ? "scale-100" : "scale-0"}
                                `}>
                                    Your channel
                                </p>
                                <p className={`
                                    text-[0.8rem] text-[#e3e1e185] transition-all duration-500 delay-500
                                    ${studioSidebarState ? "scale-100" : "scale-0"}
                                `}>
                                    {userData.data.fullName}
                                </p>
                            </div>
                        )
                    }
                </div>
                <ul className="h-[45%] flex flex-col gap-1 overflow-y-auto">
                    <li className="mx-auto w-[90%] text-lg">
                        <NavLink 
                        to="/dashboard"
                        className={({ isActive }) => `py-3 w-full pl-2 rounded-lg flex items-center gap-5 hover:bg-zinc-950 ${isActive ? 'bg-zinc-950 font-semibold' : ''}`}>
                            {
                                ({ isActive }) => (
                                    <>
                                        { isActive ? <DashboardIcon /> : <DashboardOutlinedIcon /> }
                                        <span
                                        className={`
                                            transition-opacity duration-75 delay-75
                                            ${studioSidebarState ? "opacity-100 visible" : "opacity-0 invisible"}
                                        `}>
                                            Dashboard
                                        </span>
                                    </>
                                )
                            }
                        </NavLink>
                    </li>
                    <li className="mx-auto w-[90%] text-lg">
                        <NavLink 
                        to="/content"
                        className={({ isActive }) => `py-3 w-full pl-2 rounded-lg flex items-center gap-5 hover:bg-zinc-950 ${isActive ? 'bg-zinc-950 font-semibold' : ''}`}>
                            {
                                ({ isActive }) => (
                                    <>
                                        { isActive ? <VideoLibraryIcon /> : <VideoLibraryOutlinedIcon /> }
                                        <span>
                                            Content
                                        </span>
                                    </>
                                )
                            }
                        </NavLink>
                    </li>
                    <li className="mx-auto w-[90%] text-lg">
                        <NavLink 
                        to="/analytics"
                        className={({ isActive }) => `py-3 w-full pl-2 rounded-lg flex items-center gap-5 hover:bg-zinc-950 ${isActive ? 'bg-zinc-950 font-semibold' : ''}`}>
                            {
                                ({ isActive }) => (
                                    <>
                                        { isActive ? <AssessmentIcon /> : <AssessmentOutlinedIcon /> }
                                        <span>
                                            Analytics
                                        </span>
                                    </>
                                )
                            }
                        </NavLink>
                    </li>
                    <li className="mx-auto w-[90%] text-lg">
                        <NavLink 
                        to="/community"
                        className={({ isActive }) => `py-3 w-full pl-2 rounded-lg flex items-center gap-5 hover:bg-zinc-950 ${isActive ? 'bg-zinc-950 font-semibold' : ''}`}>
                            {
                                ({ isActive }) => (
                                    <>
                                        { isActive ? <GroupsIcon /> : <GroupsOutlinedIcon /> }
                                        <span>
                                            Community
                                        </span>
                                    </>
                                )
                            }
                        </NavLink>
                    </li>
                    <li className="mx-auto w-[90%] text-lg">
                        <NavLink 
                        to="/customization"
                        className={({ isActive }) => `py-3 w-full pl-2 rounded-lg flex items-center gap-5 hover:bg-zinc-950 ${isActive ? 'bg-zinc-950 font-semibold' : ''}`}>
                            {
                                ({ isActive }) => (
                                    <>
                                        { isActive ? <AutoFixHighIcon /> : <AutoFixHighOutlinedIcon /> }
                                        <span>
                                            Customization
                                        </span>
                                    </>
                                )
                            }
                        </NavLink>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default StudioSidebar