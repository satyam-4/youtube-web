import React, { useEffect, useState } from "react"
import StudioNavbar from "../../components/Navbar/StudioNavbar"
import StudioSidebar from "../../components/Sidebar/StudioSidebar"
import no_content_illustration from "../../assets/no_content_illustration.svg"
import UploadVideos from "../../models/studio/UploadVideos"

const Content = () => {
    const [showUploadModel, setShowUploadModel] = useState(false)

    return (
        <>
            <div className="h-screen flex flex-col">
                {
                    showUploadModel ? <UploadVideos setShowUploadModel={setShowUploadModel} /> : ""
                }
                <div>
                    <StudioNavbar />
                </div>
                <div className="flex h-full">
                    <StudioSidebar />
                    <div className="flex-grow bg-zinc-800 text-white flex flex-col justify-center items-center gap-5">
                        <img src={no_content_illustration} />
                        <span className="text-[#a2a2a2ef]">
                            No content available
                        </span>
                        <button 
                        onClick={() => setShowUploadModel(true)}
                        className="bg-white font-semibold text-black py-2 px-4 rounded-3xl hover:bg-[#d8d8d8]">
                            Upload videos
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content