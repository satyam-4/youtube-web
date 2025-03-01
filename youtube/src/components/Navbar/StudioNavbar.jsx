import React from "react"
import MenuIcon from '@mui/icons-material/Menu'
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined'
import { useDispatch, useSelector } from "react-redux"
import { toggleStudioSidebar } from "../../features/sidebar/sidebarSlice"

const StudioNavbar = () => {
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.user.data)

    return (
        <>
            <div className="w-screen h-[80px] bg-zinc-800 border-b-2 border-[#00000063] text-white flex items-center">
                <div className="w-[5vw] h-[80px] flex justify-center items-center">
                    <button 
                    onClick={() => dispatch(toggleStudioSidebar())}
                    className="bg-red-500 p-2 rounded-full">
                        <MenuIcon />
                    </button>
                </div>
                
                <div className="flex-grow h-full flex items-center justify-between">
                    <a 
                    href="/dashboard">
                        <img 
                        className="w-[6vw]"
                        src="https://www.gstatic.com/youtube/img/creator/yt_studio_logo_v2_darkmode.svg" />
                    </a>

                    <div className="bg-zinc-950 w-[40vw] h-10 rounded-3xl">

                    </div>
                    
                    <div className="mr-2 h-full flex items-center gap-3">
                        <button className="px-3 py-2 rounded-3xl border-2 border-[#ffffff25] flex items-center gap-2 ">
                            <VideoCallOutlinedIcon />
                            <span>
                                Create
                            </span>
                        </button>

                        <button className="w-[2.5vw] h-[2.5vw] rounded-full overflow-hidden">
                            <img 
                            className="w-full h-full object-cover"
                            src={userData?.data.avatar} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudioNavbar