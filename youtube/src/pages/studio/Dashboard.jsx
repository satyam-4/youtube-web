import React, { useEffect } from "react"
import StudioNavbar from "../../components/Navbar/StudioNavbar"
import StudioSidebar from "../../components/Sidebar/StudioSidebar"

const Dashboard = () => {
    useEffect(() => {
        document.title = "Channel dashboard - YouTube Studio"
    }, [])

    return (
        <>
            <div className="h-screen flex flex-col">
                <div>
                    <StudioNavbar />
                </div>
                <div className="flex h-full">
                    <StudioSidebar />
                    <div className="flex-grow bg-zinc-800 text-white text-2xl fonte-bold flex justify-center items-center">
                        main content
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard