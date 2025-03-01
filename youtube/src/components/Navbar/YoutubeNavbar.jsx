import React, { useState, Suspense, useRef, useEffect } from "react"
import YoutubeLogo from "../../assets/YoutubeLogo.svg"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import CreateChannel from "../../models/CreateChannel.jsx"
import SignIn from "../Button/SignIn Button/SignIn.jsx"
import SearchHistoryModel from "../../models/searchHistoryModel.jsx"
const ProfileComponent = React.lazy(() => import("../../models/userModel.jsx"))
import { Bell, Menu, Search, EllipsisVertical, Plus } from "lucide-react"
import Loader from "../Loader.jsx"
import axios from "axios"
import MoonLoader from "react-spinners/MoonLoader"
import SearchIcon from '@mui/icons-material/Search'
import MicIcon from '@mui/icons-material/Mic'
import { toggleYoutubeSidebar } from "../../features/sidebar/sidebarSlice.js"
import ClearIcon from '@mui/icons-material/Clear'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

const YoutubeNavbar = () => {
    // const authState = useSelector((state) => state.auth.isAuthenticated)
    const userData = useSelector((state) => state.user.data)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const [showCreateChannelModel, setShowCreateChannelModel] = useState(false)
    // const [searchHistoryModelState, setSearchHistoryModelState] = useState(false)
    // const [showUserModel, setShowUserModel] = useState(false)
    const [search, setSearch] = useState("")
    const [isSearchClicked, setIsSearchClicked] = useState(false)
    const [authState, setAuthState] = useState(false)

    const inputRef = useRef(null)

    const handleCreateClick = () => {
        if(!userData.data?.creator) {
            setShowCreateChannelModel(true)
        } else {
            navigate("/content")
        }
    }

    const handleSearchClick = () => {
        setIsSearchClicked(true)
    }

    const handleCrossClick = (e) => {
        setSearch("")
        inputRef.current?.focus()
    }

    useEffect(() => {
        if(isSearchClicked) {
            inputRef.current.focus()
        }
    }, [isSearchClicked])

    return (
        <>
            {/* {
                showCreateChannelModel ? (
                    <CreateChannel />
                ) : (
                    ""
                )
            }
            {
                showUserModel && (
                    <Suspense fallback={
                        <>
                            <div className="absolute w-screen h-screen pt-[80px] pl-[75vw]">
                                <div className="bg-zinc-900 min-w-[350px min-h-[320px] flex justify-center items-center">
                                    <MoonLoader
                                    color={"#ff0000"}
                                    loading={true}
                                    size={40}/>
                                </div>
                            </div>
                        </>
                    }>
                        <div className="w-screen h-screen absolute pt-[80px] pl-[75vw]">
                            <ProfileComponent />
                        </div>
                    </Suspense>
                )
            } */}
            <div className={`
                w-full h-[56px] flex justify-between items-center
                sm:h-[60px] sm:text-[1rem] md:pr-3
                lg:h-[65px] lg:pr-2
            `}> 
                <div className={`
                    h-full overflow-hidden ${isSearchClicked ? 'hidden' : 'flex justify-center items-center'}
                    md:pl-5 lg:pl-8 md:gap-6 lg:gap-8 
                `}>
                    <button 
                    onClick={() => dispatch(toggleYoutubeSidebar())}
                    className={`
                        rounded-full hover:bg-lightGray hidden
                        md:block
                    `}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-lightWhite size-[1.8rem]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <a href="/">
                        <img 
                        className={`
                            size-[6rem]
                        `}
                        src={YoutubeLogo} 
                        alt="YouTube" />
                    </a>
                </div>
                
                <div className={`
                    flex gap-2 items-center ${isSearchClicked ? 'hidden' : ''}
                    md:hidden
                `}>
                <button className={`
                    p-2 rounded-full hover:bg-lightGray
                `}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-white size-[1.5rem]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                </button>
                <button 
                onClick={() => handleSearchClick()}
                className={`
                    p-2 rounded-full hover:bg-lightGray
                `}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-white sm:size-6 size-[1.5rem]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
                </div>

                <div className={`
                    w-full h-full ${isSearchClicked ? 'flex justify-between items-center' : 'hidden'}
                    md:hidden
                `}>
                    <button 
                    onClick={() => setIsSearchClicked(false)}
                    className="rounded-full p-1 hover:bg-zinc-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white size-[1.5rem]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                    <div className="relative w-[70vw] h-[35px] rounded-3xl bg-zinc-800 flex justify-between overflow-hidden">
                        <input
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        ref={inputRef}
                        placeholder="Search YouTube"
                        className="px-3 w-[85%] bg-transparent text-white outline-none"
                        type="text" />
                        {
                            search && (
                                <button
                                onClick={() => handleCrossClick()}
                                className="w-[15%] h-full flex justify-center items-center">
                                    <ClearIcon className="text-lightWhite"/>
                                </button>
                            )
                        }
                    </div>
                    <button className={`
                        bg-zinc-800 p-1 rounded-full
                    `}>
                        <MicIcon className="text-white" />
                    </button>
                </div>

                <div className={`
                    hidden
                    md:flex items-center w-[50vw] gap-2
                `}>
                    <div className={`
                        relative p-[1px] mx-auto w-full h-[43px] bg-lightGray flex items-center rounded-3xl overflow-hidden
                    `}>
                        <input 
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            ref={inputRef}
                            placeholder="Search"
                            className={`bg-lightDark text-white h-full px-2 w-[85%] rounded-l-3xl outline-none border border-transparent focus:border-sky-700
                                lg:w-[90%] md:px-5
                            `}
                            type="text" 
                        />
                        {
                            search && (
                                <button
                                onClick={() => handleCrossClick()}
                                className="absolute md:right-[15k%] lg:right-[10%]" >
                                    <ClearIcon style={{ fontSize: "2rem" }} className="text-lightWhite " />
                                </button>
                            )
                        }
                        <button className={`
                            w-[15%] h-full bg-lightGray flex justify-center items-center
                            lg:w-[10%]
 
                        `}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-lightWhite sm:size-[1.8rem] size-[1.5rem]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>
                    <button className={`
                        bg-lightGray p-2 rounded-full
                        md:p-2
                        lg:p-3
                    
                    `}>
                        <MicIcon className="text-white"/>
                    </button>
                </div>
                    
                {
                    authState ? (
                        <>
                            <div className={`
                                hidden h-full
                                md:flex items-center gap-3
                                lg:gap-6
                            `}>
                                <button className={`
                                    px-[14px] py-[7px] rounded-3xl flex justify-center items-center gap-0.5 bg-grayAccent text-white hover:bg-[#80808095]
                                `}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[1.5rem]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    <p className="font-semibold">
                                        Create
                                    </p>
                                </button>
                                <button className={`
                                    relative
                                `}>
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                    className="text-white size-[1.8rem]">
                                        <path 
                                        strokeLinecap="round" strokeLinejoin="round" 
                                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                    </svg>
                                    <span className="absolute top-0 right-0 -translate-y-2 flex items-center justify-center w-[1.2rem] h-[1.2rem] text-[0.85rem] font-semibold text-white bg-red-600 rounded-full">
                                        5
                                    </span>
                                </button>
                                <button className={`
                                    bg-red-500 w-[2rem] h-[2rem] rounded-full
                                    md:w-[2.5rem] md:h-[2.5rem]
                                `}>

                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <button className="border-2 border-[#ffffff5d] px-2 py-2 flex items-center gap-2 rounded-3xl font-semibold text-white hover:bg-[#ffffff15]"> 
                                <AccountCircleOutlinedIcon />
                                <p>
                                    Sign in
                                </p>
                            </button>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default YoutubeNavbar