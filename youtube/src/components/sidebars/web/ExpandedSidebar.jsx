import React from "react"
import { EXPANDED_SIDEBAR_CONFIG } from "../../../config/desktop/sidebarConfig/ExpandedSidebarConfig.js"
import ExpandedSidebarItem from "./sidebarItems/ExpandedSidebarItem.jsx"
import { EXPANDED_SIDEBAR } from "../../../constants/styles/constants.js"
import { MenuIcon } from "../../icons/MenuIcon.jsx"
import { useSidebar } from "@contexts/SidebarContext.jsx"

const ExpandedSidebar = () => {
    const { toggleSidebarState } = useSidebar()

    const handleMenuClick = (action) => {
        if(action === "TOGGLE_SIDEBAR") {
            toggleSidebarState()
        }
    }

    const renderSidebarItems = () => (
        EXPANDED_SIDEBAR_CONFIG.map((sidebarSections, index) => (
            sidebarSections.id === "header" 
            ?  (
                <div className="w-full h-[65px] flex">
                    <div className="w-[70px] h-full flex justify-center items-center">
                        <button 
                        onClick={() => handleMenuClick(sidebarSections.options.menu.action)}
                        className="">
                            <MenuIcon />
                        </button>
                    </div>
                    <div className="px-1 flex-grow flex items-center">
                        <img 
                        src={sidebarSections.options.logo.dark} 
                        alt={sidebarSections.options.logo.alt}
                        className="size-[6rem]" />
                    </div>
                </div>
            )
            : (
                sidebarSections.id === "subscriptions" 
                ? (
                    <>
                        <h1 className="pl-[20px] text-xl font-bold">
                            {
                                sidebarSections.title
                            }
                        </h1>
                        {
                            sidebarSections.subscriptions.map((channel) => (
                                <div className="my-2 flex items-center">
                                    <div className="w-[70px] flex items-center justify-center">
                                        <div 
                                        style={{ backgroundColor: `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`}}
                                        className={`w-6 h-6 rounded-full`}></div>
                                    </div>
                                    <span className="font-semibold">
                                        {
                                            channel.channelName
                                        }
                                    </span>
                                </div>
                            ))
                        }
                    </>
                )
                : (
                    <>
                        {
                            sidebarSections.options.map((sidebarItem) => (
                                <ExpandedSidebarItem
                                key={index}
                                to={sidebarItem.link}
                                activeIcon={sidebarItem.activeIcon()}
                                inactiveIcon={sidebarItem.inactiveIcon()}
                                label={sidebarItem.label} />
                            ))
                        }
                        {
                            index !== EXPANDED_SIDEBAR_CONFIG.length - 1 && (
                                <div className="my-2 bg-[#80808088] h-[1px] w-full"></div>
                            )
                        }
                    </>
                )
            )
        ))
    )


    return (
        <>
            {/* <div className={`
                w-[250px] h-[100vh] transition-all duration-100 overflow-y-auto custom-scrollbar

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
                                src={youtubeLight} 
                                alt="YouTube" />
                            </a>
                        </div>
                    </li>
                </ul>
                <ul className="border-b-2 border-[#80808043]"> 
                    <ExpandedSidebarItem 
                    to={"/"}
                    activeIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>
                    }
                    inactiveIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[1.5rem]">
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
                                <p className="my-3 font-semibold text-[1.1rem]">
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
            </div> */}
            <div 
            style={{ width: EXPANDED_SIDEBAR.width, height: EXPANDED_SIDEBAR.height }}
            className="transition-all duration-300">
                <ul>
                    {
                        renderSidebarItems()
                    }
                </ul>
            </div>
        </>
    )
}

export default ExpandedSidebar