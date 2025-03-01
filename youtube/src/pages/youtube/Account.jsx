import React, { useEffect, useState } from "react"
// import Sidebar from "../../components/Sidebar/youtube/Sidebar.jsx"
// import SettingSidebar from "../../components/Sidebar/youtube/SettingSidebar.jsx"
// import { useDispatch, useSelector } from "react-redux"
// import shieldImg from "../../assets/shield.svg"
// import CreateChannel from "../../models/CreateChannel.jsx"
// import { useNavigate } from "react-router-dom"
// import { setSidebarState, toggleSidebarState } from "../../features/sidebar/sidebarSlice.js"
// import YoutubeNavbar from "../../components/Navbar/YoutubeNavbar.jsx"
// import ExpandedSidebar from "../../components/Sidebar/youtube/ExpandedSidebar.jsx"
// import CollapsedSidebar from "../../components/Sidebar/youtube/CollapsedSidebar.jsx"

const Account = () => {
    // const userData = useSelector((state) => state.user.data || "")
    // const authState = useSelector((state) => state.auth.isAuthenticated)
    // const sidebarState = useSelector((state) => state.sidebar.isExpanded)
    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const [isOpen, setIsOpen] = useState(false)

    // useEffect(() => {
    //     if(!authState) {
    //         navigate("/login")
    //     }
    // }, [authState])

    // const toggleCreateChannelState = () => {
    //     setIsOpen(!isOpen)
    // }

    // useEffect(() => {
    //     dispatch(setSidebarState(false))
    // }, [])

    return (
        <>
            {/* {
                isOpen ? (
                    <CreateChannel setIsOpen={setIsOpen}/>
                ) : (
                    ""
                )
            }
            <div className="h-screen flex flex-col">
                <YoutubeNavbar />
                {
                    sidebarState ? (
                        <>
                            <div className="z-40 absolute translate-x-0 transition-all duration-200">
                                <ExpandedSidebar />
                            </div>

                            <div 
                            onClick={() => dispatch(toggleSidebarState())}
                            className="z-30 absolute bg-black opacity-50 w-screen h-screen"></div>

                            <div className="z-10 absolute">
                                <CollapsedSidebar />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="z-30 absolute -translate-x-full transition-all duration-200">
                                <ExpandedSidebar />
                            </div>
                            <div className="z-10 absolute">
                                <CollapsedSidebar />
                            </div>
                        </>
                    )
                }
                <div className="flex-grow w-screen flex bg-zinc-950">
                    <div className="z-20 bg-zinc-950">
                        <SettingSidebar />
                    </div>
                    <div className="flex-grow">
                        <div className="pt-14 px-20 w-full h-full text-white flex flex-col gap-10">
                            <div className=" w-full flex justify-between">
                                <div className="h-full flex flex-col justify-start items-start gap-10">
                                    <p className="font-semibold text-lg">
                                        Account
                                    </p>
                                    <div>
                                        <p className="mb-1 text-2xl">
                                            Choose how you appear and what you see on YouTube
                                        </p>
                                        <p className="text-[#afaeaefe]">
                                            {
                                                userData ? (
                                                    `Signed in as ${ userData.data.email }`
                                                ) : (
                                                    ""
                                                )
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="h-full flex justify-center items-start">
                                    <img 
                                    className="w-40 h-40"
                                    src={shieldImg} />
                                </div>
                            </div>
                            
                            <div className="h-0.5 bg-[#8080803e]"></div>

                            <div className=" w-full flex flex-col gap-3">
                                <div className="text-xl font-bold">
                                    Your Youtube channel
                                    <p className="mt-1 text-sm font-normal text-[#afaeaefe]">
                                        This is your public presence on YouTube. You need a channel to upload your own videos, comment on videos or create playlists.
                                    </p>
                                </div>
                                <div >
                                </div>
                                <div className="flex items-center gap-40 font-semibold">
                                    Your channel
                                    <div 
                                    onClick={() => toggleCreateChannelState()}
                                    className="text-sky-400 font-normal cursor-pointer">
                                        Create a channel
                                    </div>
                                </div>
                            </div>

                            <div className="h-0.5 bg-[#8080803e]"></div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    )
}

export default Account