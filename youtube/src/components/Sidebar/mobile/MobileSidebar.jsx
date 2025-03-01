import MobileSidebarItem from "./MobileSidebarItem"
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'
import { useNavigate } from "react-router-dom"

const MobileSidebar = () => {
    const navigate = useNavigate()
    return (
        <>
            <ul className="w-full h-full flex justify-around items-center">
                <MobileSidebarItem
                to={"/"}
                activeIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-[1.5rem]">
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

                <MobileSidebarItem
                to={"/subscriptions"}
                activeIcon={
                    <SubscriptionsIcon />
              }
                inactiveIcon={
                    <SubscriptionsOutlinedIcon />
                }
                label={"Subscriptions"} />

                <button 
                onClick={() => navigate("/content")}
                className="bg-zinc-800 w-[40px] h-[40px] flex items-center justify-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" strokeWidth={0.5} stroke="currentColor" className="text-white size-[1.5rem]">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>
                </button>

                <MobileSidebarItem
                to={"/playlists"}
                activeIcon={
                    <PlaylistPlayIcon style={{ fontSize: "1.8rem" }}/>
              }
                inactiveIcon={
                    <PlaylistPlayIcon style={{ fontSize: "1.9rem" }}/>
                }
                label={"Playlists"} />

                <MobileSidebarItem
                to={"/you"}
                activeIcon={
                    <>
                        <div className="bg-yellow-500 w-[25px] h-[25px] rounded-full">

                        </div>
                    </>
              }
                inactiveIcon={
                    <>
                        <div className="bg-yellow-500 w-[25px] h-[24px] rounded-full">

                        </div>
                    </>
                }
                label={"You"} />  
            </ul>
        </>
    )
}

export default MobileSidebar