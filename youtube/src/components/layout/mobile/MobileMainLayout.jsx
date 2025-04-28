import MobileNavbar from "../../navbar/mobile/MobileNavbar.jsx"
import MobileSidebar from "../../sidebars/mobile/MobileSidebar.jsx"
import { Outlet } from "react-router-dom"

const MobileMainLayout = () => {
    return (
        <div className="relative w-screen h-screen">
            <div className="fixed top-0 bg-black z-20">
                <MobileNavbar />
            </div>
            <div className="w-full fixed top-[56px] bottom-[56px] overflow-y-scroll">
                <Outlet />
            </div>
            <div className="fixed w-full h-[56px] bottom-0 bg-black">
                <MobileSidebar />
            </div>
        </div>
    )
}

export default MobileMainLayout