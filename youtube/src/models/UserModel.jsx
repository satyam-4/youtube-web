import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { LogOut, Moon, Settings } from "lucide-react"
import axios from "axios"
import { logoutSuccess } from "../features/auth/authSlice.js"
import { data, useNavigate } from "react-router-dom"
import { io } from "socket.io-client"

const UserModel = () => {

    const socket = io("http://localhost:8000")  // connection established

    // when connected then this event trigger and the callback will be executed
    socket.on("connect", () => {
        console.log("connected")

        socket.on("give mssg", (data) => {
            console.log(data.message)
        })

        socket.emit("chitthi aayi hai", "this is chitthi that i've sent from client")
    })

    socket.on("disconnect", () => {
        console.log("disconnected")
    })

    const userData = useSelector((state) => state.user.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const response = await axios.post("http://localhost:8000/api/v1/users/logout", {}, { withCredentials: true })
            if(response.status === 200) {
                dispatch(logoutSuccess())
                // navigate("/login")
            }
        } catch (error) {
            
        }
    }

    const handleSettingClick = () => {
        navigate("/account")
    }

    return (
        <>
            <div className="w-[350px] h-[320px] p-2 rounded-xl bg-zinc-900 text-white z-10">
                <ul className="m-3 pb-5 border-b-2 border-[#ffffff4d]">
                    <li className="flex items-center gap-4">
                        <div className="w-[4vw] h-[4vw] rounded-full overflow-hidden">
                            <img
                            className="w-full h-full object-cover"
                            src={userData.data.avatar}/>
                        </div>
                        <div>
                            <p className="text-[1.3vw] font-semibold">
                                {userData.data.fullName}
                            </p>
                            <p className="text-[0.9vw]">
                                {userData.data.email}
                            </p>
                        </div>
                    </li>
                </ul>
                <ul className="m-3 p-3 flex flex-col gap-3">
                    <li>
                        <button 
                        onClick={() => handleLogout()}
                        className="px-4 py-2 rounded-xl w-full h-full flex justify-start items-center gap-4 hover:bg-[#80808074] text-[1vw]">
                            <LogOut/>
                            <p>
                                Sign out
                            </p>
                        </button>
                    </li>
                    <li className="px-4 py-2 rounded-xl flex justify-start items-center gap-4 hover:bg-[#80808074]">
                        <Moon/>
                        <p>
                            Appearance
                        </p>
                    </li>
                    <li className="rounded-xl overflow-hidden">
                        <button 
                        onClick={handleSettingClick}
                        className="w-full px-4 py-2 rounded-xl flex justify-start items-center gap-4 hover:bg-[#80808074]">
                            <Settings/>
                            Settings
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default UserModel