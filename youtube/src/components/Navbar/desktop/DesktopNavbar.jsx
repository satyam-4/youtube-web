import { Link } from "react-router-dom"
import { DESKTOP_NAVBAR_CONFIG } from "../../../config/desktop/desktopNavbarConfig.js"
import { useRef, useState } from "react"
import getTheme from "../../../services/theme/getTheme.js" 
import { NAVBAR } from "../../../constants/styles/constants.js"

const DesktopNavbar = () => {
    const [authState, setAuthState] = useState(true)
    const [search, setSearch] = useState("")
    const inputRef = useRef()
    const theme = getTheme()
    
    const searchBarHeight = "43px"

    const renderSearchBar = () => (
        <div className={`
            hidden
            md:flex items-center w-[45vw] lg:w-[50vw] gap-2
        `}>
            <div className={`
                relative p-[1px] mx-auto w-full h-[${searchBarHeight}] flex items-center rounded-3xl overflow-hidden
                ${theme === "light" ? 'bg-[#dad9d982]' : 'bg-[#39393982]'}
            `}>
                <input 
                ref={inputRef}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type={DESKTOP_NAVBAR_CONFIG.searchbar.searchInput.type}
                placeholder={DESKTOP_NAVBAR_CONFIG.searchbar.searchInput.placeholder}
                className={DESKTOP_NAVBAR_CONFIG.searchbar.searchInput.className} />
                {
                    search && (
                        <button
                        className={DESKTOP_NAVBAR_CONFIG.searchbar.buttons.cross.className}
                        onClick={DESKTOP_NAVBAR_CONFIG.searchbar.buttons.cross.action()}>
                            {   
                                DESKTOP_NAVBAR_CONFIG.searchbar.buttons.cross.icon()
                            }
                        </button>
                    )
                }
                <button
                className={DESKTOP_NAVBAR_CONFIG.searchbar.buttons.search.className}
                onClick={DESKTOP_NAVBAR_CONFIG.searchbar.buttons.search.action()}>
                    {
                        DESKTOP_NAVBAR_CONFIG.searchbar.buttons.search.icon()
                    }
                </button>
            </div>
            <button
            className={DESKTOP_NAVBAR_CONFIG.searchbar.buttons.mic.className}
            onClick={DESKTOP_NAVBAR_CONFIG.searchbar.buttons.mic.action()}>
                {
                    DESKTOP_NAVBAR_CONFIG.searchbar.buttons.mic.icon()
                }
            </button>
        </div>
    )

    const renderNavbarButtons = () => {
        if(authState) {
            return DESKTOP_NAVBAR_CONFIG.authenticated.buttons.map((button) => {
                return (
                    <button
                    key={button.id}
                    id={button.id}
                    className={button.className}
                    onClick={button.action}>
                        { 
                            button.id === "profile"
                            ? (
                                button.defaultProfilePic()
                            ) 
                            : (
                                button.activeIcon()
                            )
                        }
                        { 
                            button.label && (
                                <p className="font-semibold">
                                    { button.label }
                                </p>
                            )
                        }
                        {
                            button.badge && (
                                <span className="w-[1.2rem] h-[1.2rem] text-white absolute top-0 right-0 -translate-y-2 flex items-center justify-center text-[0.85rem] bg-red-600 rounded-full">
                                    { button.badge }
                                </span>
                            )
                        }
                    </button>
                )
            })
        } else {
            DESKTOP_NAVBAR_CONFIG.unauthenticated.buttons.map((button) => {
                return (
                    button.type === "component" 
                    ? (
                        button.signIn
                    )
                    : (
                        ''
                    )
                )
            })
        }
    }

    return (
        <div 
        className={`
        relstive pr-2
        w-[${NAVBAR.weight}] h-[${NAVBAR.height}]
        flex items-center justify-between
        ${theme === "light" ? "bg-white" : "bg-black"}`}>
            <Link
            to={DESKTOP_NAVBAR_CONFIG.logo.link}>
                <img
                src={theme === "light" ? DESKTOP_NAVBAR_CONFIG.logo.light : DESKTOP_NAVBAR_CONFIG.logo.dark}
                className="size-[6rem]"
                alt={DESKTOP_NAVBAR_CONFIG.logo.alt} />
            </Link>
            <div>
                {
                    renderSearchBar()
                }
            </div>
            <div className="h-full flex items-center gap-5">
                {
                    renderNavbarButtons()
                }
            </div>
        </div>
    )
}

export default DesktopNavbar