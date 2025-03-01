import React from "react"
// import Sidebar from "../../components/Sidebar/youtube/Sidebar"
// import YoutubeNavbar from "../../components/Navbar/YoutubeNavbar"
import SkeletonLoader from "../../components/SkeletonLoader"
import { useSelector } from "react-redux"
// import MobileSidebar from "../../components/Sidebar/mobile/MobileSidebar"
// import CollapsedSidebarItem from "../../components/Sidebar/CollapsedSidebarItem"
// import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
// import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle'
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

const Home = () => {
    const youtubeSidebarState = useSelector((state) => state.sidebar.isExpanded)

    const skeletonLoaders = () => {
        const loaders = []
        for(let i = 0; i < 15; i++) {
            loaders.push(
                <SkeletonLoader key={i} />
            )
        }
        return loaders
    }

    return (
        <>
            {/* <div className="relative flex flex-col items-center h-100vh">
                <div className={`
                    w-[95vw] h-[56px] top-0 fixed
                    sm:w-full sm:h-[60px]
                    lg:h-[65px]
                `}>
                    <YoutubeNavbar />
                </div>
                <div className={`
                    sm:flex sm:w-full
                `}>
                    <div className={`
                        hidden z-10
                        sm:block sm:w-[60px] 
                        md:w-[70px]
                        lg:w-[90px]
                    `}>
                        <ul className="w-full px-1">    
                            <li className={`
                                sm:h-[60px] flex justify-center items-center
                                lg:h-[65px]

                            `}>
                                <button className={`
                                    p-1 rounded-full hover:bg-lightGray hidden
                                    sm:block
                                `}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-lightWhite size-[1.8rem]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>
                            </li>

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

                            <CollapsedSidebarItem
                            to={"/subscriptions"}
                            activeIcon={<SubscriptionsIcon style={{ fontSize: "1.5rem" }} />}
                            inactiveIcon={<SubscriptionsOutlinedIcon style={{ fontSize: "1.5rem" }} />}
                            label={"Subscriptions"} />

                            <CollapsedSidebarItem
                            to={"/you"}
                            activeIcon={<AccountCircleIcon style={{ fontSize: "1.5rem" }} />}
                            inactiveIcon={<AccountCircleOutlinedIcon style={{ fontSize: "1.5rem" }} />}
                            label={"You"} />
                        </ul>
                    </div>
                    <div className={`
                        mt-[56px] mb-[60px] w-full grid grid-cols-1 gap-8 text-white
                        sm:mt-[60px] sm:mb-0 sm:grid-cols-4 sm:gap-3
                        lg:mt-[65px]

                    `}>
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                    </div>
                </div>
                <div className={`
                    fixed bottom-0 w-full h-[56px] bg-zinc-950
                    sm:hidden
                `}>
                    <MobileSidebar />
                </div>
            </div> */}
            <div className={`
                px-1
                gap-x-1 gap-y-8
                grid grid-cols-1
                md:grid-cols-2
                ${youtubeSidebarState ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}
            `}>
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
            </div>
        </>
    )
}

export default Home