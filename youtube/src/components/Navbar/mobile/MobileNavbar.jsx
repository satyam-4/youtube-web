import { MOBILE_NAVBAR_CONFIG } from "../../../config/mobile/mobileNavbarConfig.js"
import { Link } from "react-router-dom"
import { MOBILE_NAVBAR } from "../../../constants/styles/constants.js"
import { useTheme } from "@contexts/ThemeContext.jsx"

const MobileNavbar = () => {
    const { theme } = useTheme()
    
    const renderNavbarButtons = () => {
        return MOBILE_NAVBAR_CONFIG.buttons.map((button) => (
            <>
                <button
                key={button.id}
                className={button.className}>
                    {
                        button.activeIcon()
                    }
                    {
                        button.badge && (
                            <span className="bg-red-600 top-2 -right-1 absolute w-[1.1rem] text-xs  h-[1.1rem] rounded-full flex items-center justify-center">
                                { button.badge }
                            </span>
                        )
                    }
                </button>
            </>
        ))
    }

    return (
        <nav 
        style={{ width: MOBILE_NAVBAR.width, height: MOBILE_NAVBAR.height }}
        className="px-2 flex items-center justify-between">
            <Link
            to={MOBILE_NAVBAR_CONFIG.logo.link}>
                {   
                    <img
                    className="size-[6rem]"
                    src={theme === "light" ? MOBILE_NAVBAR_CONFIG.logo.light : MOBILE_NAVBAR_CONFIG.logo.dark}
                    alt={MOBILE_NAVBAR_CONFIG.logo.alt} />
                }
            </Link>
            <div className="flex gap-5 h-full">
                {
                    renderNavbarButtons()
                }
            </div>
        </nav>
    )
}

export default MobileNavbar