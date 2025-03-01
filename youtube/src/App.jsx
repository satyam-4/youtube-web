import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { loginSuccess } from "./features/auth/authSlice.js"
import Loader from "./components/Loader.jsx"
import { setUser } from "./features/user/userSlice.js"
import { getUserInfo } from "./api/userAPI.js"
import YoutubeNavbar from "./components/Navbar/YoutubeNavbar"
import CollapsedSidebarItem from "./components/Sidebar/CollapsedSidebarItem"
import MobileSidebar from "./components/Sidebar/mobile/MobileSidebar"
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import ExpandedSidebar from "./components/Sidebar/youtube/ExpandedSidebar.jsx"

const App = () => {
    const youtubeSidebarState = useSelector((state) => state.sidebar.isExpanded)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        ;( async () => {
            try {
                const response = await getUserInfo()
                if(response.status === 200) {
                    dispatch(setUser(response.data))
                    dispatch(loginSuccess())
                }
            } catch (error) {
                console.log("User is not authenticated ", error)
            } finally {
                setLoading(false)
            }
        })()
    })

    if(loading) {
        return (
            <div className="w-screen h-screen"> 
                <Loader/>
            </div>
        )
    }

    return (
        <>
            <div className="relative flex flex-col items-center h-100vh bg-dark">
                <div className={`
                    bg-dark
                    w-[95vw] h-[56px] top-0 fixed
                    md:w-full sm:h-[60px]
                    lg:h-[65px]
                    z-20
                `}>
                    <YoutubeNavbar />
                </div>
                <div className={`
                    md:flex md:w-full
                `}>
                    <div className={`
                        hidden z-10 fixed
                        md:block
                    `}>
                        <ul className="md:mt-[60px] lg:mt-[65px] md:w-[70px] lg:w-[90px] bg-zinc-950">    
                            <CollapsedSidebarItem
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

                            <div className="relative">
                                <CollapsedSidebarItem
                                to={"/subscriptions"}
                                activeIcon={<SubscriptionsIcon style={{ fontSize: "1.5rem" }} />}
                                inactiveIcon={<SubscriptionsOutlinedIcon style={{ fontSize: "1.5rem" }} />}
                                label={"Subscriptions"} />

                                <span className="absolute md:top-5 md:right-4 lg:top-5 lg:right-7 w-3 h-3 bg-red-500 rounded-full border-2 border-dark">
                                </span>
                            </div>

                            <CollapsedSidebarItem
                            to={"/you"}
                            activeIcon={<AccountCircleIcon style={{ fontSize: "1.5rem" }} />}
                            inactiveIcon={<AccountCircleOutlinedIcon style={{ fontSize: "1.5rem" }} />}
                            label={"You"} />
                        </ul>

                        <div className={`
                            sm:transition-transform duration-500
                            lg:transition-none
                            top-0 absolute  
                            ${youtubeSidebarState ? '-translate-x-0' : '-translate-x-full'}
                        `}>
                            <ExpandedSidebar />
                        </div>
                    </div>
                    <div className={`
                        bg-dark
                        mt-[56px] mb-[60px] w-full text-white 
                        sm:mt-[60px]  
                        md:ml-[70px]
                        lg:mt-[65px] ${youtubeSidebarState ? 'lg:ml-[250px]' : 'lg:ml-[90px]'}
                    `}>
                        <Outlet />
                    </div>
                </div>
                <div className={`
                    fixed bottom-0 w-full h-[56px] bg-zinc-950
                    md:hidden
                `}>
                    <MobileSidebar />
                </div>
            </div>
        </>
    )
}

export default App