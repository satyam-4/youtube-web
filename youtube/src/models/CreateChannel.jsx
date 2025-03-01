import React, { useState } from "react"
import { useSelector } from "react-redux"
import { createChannel } from "../api/channelApi.js"
import { useNavigate } from "react-router-dom"
import MoonLoader from "react-spinners/MoonLoader"

const CreateChannel = () => {
    const userData = useSelector((state) => state.user.data)
    const navigate = useNavigate()
    const [isNameFocused, setNameIsFocused] = useState(false)
    const [isHandleFocused, setHandleIsFocused] = useState(false)
    const [channelName, setChannelName] = useState(userData.data.fullName)
    const [channelHandle, setChannelHandle] = useState(userData.data.username.trim())
    const [avatar, setAvatar] = useState(userData?.data.avatar)
    const [avatarFile, setAvatarFile] = useState(userData?.data.avatar)
    const [loading, setLoading] = useState(false)

    const handleAvatarChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setAvatar(URL.createObjectURL(file))
            setAvatarFile(file)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const channelDetails = {
            channelName,
            channelHandle,
            avatar: avatarFile
        }

        try {
            setLoading(true)
            const response = await createChannel(channelDetails)
            if(response.status === 200) {
                navigate("/dashboard")
            }
        } catch (error) {
            setLoading(false)
            console.log("Error while creating channel : ", error)
        } finally {
            setLoading(false)
        }
    }

    console.log(userData.data.avatar)
    return (
        <>
            <div className="z-50 absolute w-screen h-screen flex justify-center items-center bg-[#00000063] text-white overflow-hidden">
                <form 
                onSubmit={handleSubmit}
                className="p-5 rounded-md w-1/2 bg-zinc-900">
                    <p className="font-bold text-2xl">
                        How you'll appear 
                    </p>
                    <div className="p-10 flex flex-col justify-center items-center gap-5">
                        <div className="w-36 h-36 rounded-full border-4 border-white flex justify-center items-center">
                            <img 
                            className="w-32 h-32 rounded-full object-cover"
                            src={avatar} />
                        </div>
                        <button className="w-[8vw] text-sky-500 flex justify-center items-center font-semibold cursor-pointer hover:bg-[#008cff31] rounded-3xl overflow-hidden">
                            <span className="absolute pointer-events-none">
                                Select Picture
                            </span>
                            <input 
                            className="px-2 py-1 opacity-0 w-full"
                            type="file"
                            accept="image/*"
                            name="avatar"
                            onChange={handleAvatarChange} /> 
                        </button>
                    </div>
                    <div 
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center items-center gap-3">
                        <div className="w-[50%]">
                            <label 
                            className={`w-full px-3 absolute ${ isNameFocused ? `text-sky-400` : `text-[#808080c6]` } pointer-events-none`}
                            htmlFor="channelName">
                                Name
                            </label>
                            <input 
                            onChange={(e) => setChannelName(e.target.value)}
                            onFocus={() => setNameIsFocused(true)}
                            onBlur={() => setNameIsFocused(false)}
                            value={channelName}
                            className={`w-full px-3 pb-2 pt-6 rounded-lg bg-transparent border-2 ${ isNameFocused ? 'border-transparent outline outline-2 outline-sky-600' : `border-[#8080806b]` }`}
                            type="text" 
                            name="channelName"/>
                        </div>
                        <div className="w-[50%]">
                            <label 
                            className={`w-full px-3 absolute ${ isHandleFocused ? `text-sky-400` : `text-[#808080c6]` } pointer-events-none`}
                            htmlFor="channelHandle">
                                Handle
                            </label>
                            <input 
                            onChange={(e) => setChannelHandle(e.target.value)}
                            onFocus={() => setHandleIsFocused(true)}
                            onBlur={() => setHandleIsFocused(false)}
                            value={channelHandle}
                            className={`w-full px-3 pb-2 pt-6 rounded-lg bg-transparent border-2 ${ isHandleFocused ? 'border-transparent outline outline-2 outline-sky-600' : `border-[#8080806b]` }`}
                            type="text" 
                            name="channelHandle"/>
                        </div>
                    </div>
                    <div className="mt-10 mx-auto w-1/2 text-[0.65rem] text-[#dfdfdfc6]">
                        By clicking Create channel, you agree to 
                        <a 
                        className="text-blue-500"
                        href="">
                           {` YouTube's Terms of Service. `}
                        </a>
                        Changes made to your name and profile picture are visible only on YouTube and not other Google services.
                        <a 
                        className="text-blue-500"
                        href="">
                            {` Learn more`}    
                        </a>
                    </div>
                    <div className="flex justify-end items-center gap-3">
                        <button 
                        onClick={() => setIsOpen(false)}
                        className="py-2 px-4 rounded-3xl font-semibold hover:bg-[#80808062]">
                            Cancel
                        </button>
                        <div className="w-[10vw] h-10 flex justify-center items-center">
                            {
                                loading ? (
                                    <MoonLoader 
                                    size={20}
                                    loading={true}
                                    color={"#e6e6e6"} />
                                ) : (
                                    <button 
                                    type="submit"
                                    className="py-2 px-4 rounded-3xl font-semibold text-sky-500 hover:bg-[#008cff31]">
                                        Create channel
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateChannel