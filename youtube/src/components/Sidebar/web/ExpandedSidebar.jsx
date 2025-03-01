import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { toggleYoutubeSidebar } from "../../../features/sidebar/sidebarSlice"
import { useDispatch } from "react-redux"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import YoutubeLogo from "../../../assets/YoutubeLogo.svg"
import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined'
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined'
import PlaylistPlayRoundedIcon from '@mui/icons-material/PlaylistPlayRounded'
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import SettingsIcon from '@mui/icons-material/Settings'
import FeedbackIcon from '@mui/icons-material/Feedback'
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined'
import ExpandedSidebarItem from "../ExpandedSidebarItem"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

const ExpandedSidebar = () => {
    const dispatch = useDispatch()

    const [authState, setAuthState] = useState(true)

    return (
        <>
            <div className={`
                w-[250px] h-[100vh] bg-zinc-950 text-white transition-all duration-100 overflow-y-auto custom-scrollbar

            `}>
                <ul className={`                     
                    flex items-center 
                    sm:h-[60px]
                    lg:h-[65px]
                `}>
                    <li className={`
                        md:pl-5 lg:pl-8 md:gap-6 lg:gap-8 h-full flex justify-center items-center
                        
                    `}>
                        <button 
                        onClick={() => dispatch(toggleYoutubeSidebar())}
                        className={`
                            rounded-full hover:bg-lightGray hidden
                            sm:block
                        `}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-lightWhite size-[1.8rem]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                        <div className="overflow-hidden h-full flex items-center">
                            <a href="/">
                                <img 
                                className={`
                                    size-[6rem]
                                `}
                                src={YoutubeLogo} 
                                alt="YouTube" />
                            </a>
                        </div>
                    </li>
                </ul>
                <ul className="border-b-2 border-[#80808043]"> 
                    <ExpandedSidebarItem 
                    to={"/"}
                    activeIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white size-6">
                            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>
                    }
                    inactiveIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white size-[1.5rem]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    }
                    label={"Home"} />

                    <ExpandedSidebarItem 
                    to={"/subscriptions"}
                    activeIcon={<SubscriptionsIcon />}
                    inactiveIcon={<SubscriptionsOutlinedIcon />}
                    label={"Subscriptions"} />
                </ul>
                <ul className="border-b-2 border-[#80808043]"> 
                    <li>
                        <NavLink
                        className={({ isActive }) =>
                            `md:pl-[1.4rem] lg:pl-8 rounded-lg py-3 flex items-center md:gap-7 lg:gap-8 ${isActive ? 'bg-[#bababa21] hover:bg-[#bababa38]' : 'hover:bg-[#8080802a]'}`
                        }
                        to="/you">
                            <div>
                                You
                            </div>
                            <div>
                                <KeyboardArrowRightOutlinedIcon />
                            </div>
                        </NavLink>
                    </li>

                    <ExpandedSidebarItem 
                    to={"/history"}
                    activeIcon={<HistoryOutlinedIcon />}
                    inactiveIcon={<HistoryOutlinedIcon />}
                    label={"History"} />

                    <ExpandedSidebarItem 
                    to={"/playlist"}
                    activeIcon={<PlaylistPlayRoundedIcon />}
                    inactiveIcon={<PlaylistPlayRoundedIcon />}
                    label={"Playlist"} />
                    
                    <ExpandedSidebarItem 
                    to={"/watchLater"}
                    activeIcon={<WatchLaterIcon />}
                    inactiveIcon={<WatchLaterOutlinedIcon />}
                    label={"Watch later"} />

                    <ExpandedSidebarItem 
                    to={"/likedVideos"}
                    activeIcon={<ThumbUpIcon />}
                    inactiveIcon={<ThumbUpOutlinedIcon />}
                    label={"Liked videos"} />
                </ul>
                <ul className="md:pl-[1.4rem] lg:pl-8 border-b-2 border-[#80808043]">
                    {
                        authState ? (
                            <>
                                <p className="my-3 font-semibold text-[1.1rem] text-[#fffffff8]">
                                    Subscriptions
                                </p>
                                <div className="mb-3 flex flex-col gap-3">
                                    <div className="flex items-center md:gap-5 lg:gap-6">
                                        <div className="w-8 h-8 rounded-full bg-red-500"></div>
                                        <span>
                                            Code with harry
                                        </span>
                                    </div>
                                    <div className="flex items-center md:gap-5 lg:gap-6">
                                        <div className="w-8 h-8 rounded-full bg-red-500"></div>
                                        <span>
                                            Code with harry
                                        </span>
                                    </div>
                                    <div className="flex items-center md:gap-5 lg:gap-6">
                                        <div className="w-8 h-8 rounded-full bg-red-500"></div>
                                        <span>
                                            Code with harry
                                        </span>
                                    </div>
                                    <div className="flex items-center md:gap-5 lg:gap-6">
                                        <div className="w-8 h-8 rounded-full bg-red-500"></div>
                                        <span>
                                            Code with harry
                                        </span>
                                    </div>
                                    <div className="flex items-center md:gap-5 lg:gap-6">
                                        <div className="w-8 h-8 rounded-full bg-red-500"></div>
                                        <span>
                                            Code with harry
                                        </span>
                                    </div>
                                    <div className="flex items-center md:gap-5 lg:gap-6">
                                        <div className="w-8 h-8 rounded-full bg-red-500"></div>
                                        <span>
                                            Code with harry
                                        </span>
                                    </div>
                                    <div className="flex items-center md:gap-5 lg:gap-6">
                                        <div className="w-8 h-8 rounded-full bg-red-500"></div>
                                        <span>
                                            Code with harry
                                        </span>
                                    </div>
                                    <div className="flex items-center md:gap-5 lg:gap-6">
                                        <div className="w-8 h-8 rounded-full bg-red-500"></div>
                                        <span>
                                            Code with harry
                                        </span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="py-3 flex flex-col gap-3 items-start">
                                    <p>
                                        Sign in to like videos, comment, and subscribe.
                                    </p>
                                    <button className="border-2 border-[#ffffff5d] px-2 py-2 flex items-center gap-2 rounded-3xl font-semibold text-sky-600 hover:bg-[#ffffff15]"> 
                                        <AccountCircleOutlinedIcon />
                                        <p>
                                            Sign in
                                        </p>
                                    </button>
                                </div>
                            </>
                        )
                    }

                </ul>
                <ul className="border-b-2 border-[#80808043]"> 
                    <ExpandedSidebarItem 
                    to={"/account"}
                    activeIcon={<SettingsIcon />}
                    inactiveIcon={<SettingsOutlinedIcon />}
                    label={"Settings"} />

                    <ExpandedSidebarItem 
                    to={"/feedback"}
                    activeIcon={<FeedbackIcon />}
                    inactiveIcon={<FeedbackOutlinedIcon />}
                    label={"Feedback"} />
                </ul>
            </div>
        </>
    )
}

export default ExpandedSidebar