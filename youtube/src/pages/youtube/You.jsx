import { useState } from "react"
// import YoutubeNavbar from "../../components/Navbar/YoutubeNavbar.jsx"
// import Sidebar from "../../components/Sidebar/youtube/Sidebar"
// import { useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import SignIn from "../../components/Button/SignIn Button/SignIn.jsx"
// import { useNavigate } from "react-router-dom"
// import Loader from "../../components/Loader.jsx"
// import { setUser } from "../../features/user/userSlice.js"

const You = () => {
    // // const userData = useSelector((state) => state.user.data)
    // // const authState = useSelector((state) => state.auth.isAuthenticated)
    // const [authState, setAuthState] = useState(false)
    // const navigate = useNavigate()
    // // const [coverImage, setCoverImage] = useState(userData.data.coverImage)
    // const [isLoading, setIsLoading] = useState(false)
    // const dispatch = useDispatch()

    // const handleCoverImgChange = async (e) => {
    //     const file = e.target.files[0]
    //     if (file) {
    //         const formData = new FormData()
    //         formData.append("coverImage", file)

    //         try {
    //             setIsLoading(true)
    //             const response = await axios.post("http://localhost:8000/api/v1/users/updateUserCoverImage",
    //                 formData,
    //                 {
    //                     withCredentials: true,
    //                     headers: {
    //                         'Content-Type': 'multipart/form-data',
    //                     }
    //                 })

    //         } catch (error) {
    //             console.log("Error while uploading: ", error)
    //         } finally {
    //             setIsLoading(false)
    //         }
    //     }
    // }

    // const handleSubscribeClick = () => {

    // }

    return (
        <>
            {/* <div className="relative h-full">
                <div className="absolute w-full">
                    <YoutubeNavbar />
                </div>
                <div className="w-full flex">
                    <div className="z-20">
                        <Sidebar />  
                    </div>
                    <div className="pt-[60px] w-full h-[calc(100vh - 60px)] bg-zinc-950 text-white">
                        {
                            authState ? (
                                <div className="w-full bg-zinc-950">
                                    <div className="relative rounded-lg overflow-hidden mt-2 mx-16 h-[18rem] bg-gray-100">
                                        <input 
                                            type="file" 
                                            accept="image/*" 
                                            className="absolute inset-0 opacity-0 cursor-pointer" 
                                            name="coverImage"
                                            onChange={handleCoverImgChange} />
            
                                            <div className="w-full h-full">
                                                {
                                                    isLoading ? (
                                                        <div className="relative w-full h-full">
                                                            <Loader/>
                                                        </div>
                                                    ) : (
                                                        userData? (
                                                            <img 
                                                                src={coverImage} 
                                                                alt="Cover Image" 
                                                                className="w-full h-full object-cover"/>
                                                        ) : (
                                                            <div className="w-full h-full flex justify-center items-center">
                                                                <img 
                                                                className=" w-[20%] h-[20%] object-contain"
                                                                src="https://www.svgrepo.com/show/379458/image-wide.svg" />
                                                            </div>
                                                        )
                                                    )
                                                }
                                            </div>
                                    </div>
                                    <div className="mt-4 mx-16 h-[10rem] flex items-center gap-5">
                                        <div className="w-40 h-40 rounded-full overflow-hidden">
                                            <img 
                                            className="w-full h-full object-cover"
                                            src={userData.data.avatar} />
                                        </div>
                                        <div>
                                            <div className="text-white flex flex-col gap-2">
                                                <p className="font-bold text-5xl">
                                                    CodeStorywithMik
                                                </p>
                                                <div>
                                                    <ul className="flex items-center gap-8">
                                                        <li className="font-semibold">
                                                            @CodeStorywithMik
                                                        </li>
                                                        <li className="list-disc text-gray-400">
                                                            78.9K subscribers
                                                        </li>
                                                        <li className="list-disc text-gray-400">
                                                            1k videos   
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="text-gray-400">
                                                    this is description
                                                </div>
                                                <div>
                                                    <button 
                                                    onClick={() => handleSubscribeClick()}
                                                    className="px-4 py-2 rounded-3xl bg-gray-100 font-semibold text-black hover:bg-gray-400">
                                                        Subscribe
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full h-full bg-zinc-950 flex justify-center items-center">
                                    <SignIn
                                    elementColor = "text-blue-500"
                                    borderColor = "border-[#ffffff41]"
                                    hoverColor = "hover:bg-[#9494941c]"
                                    onClick={() => navigate("/login")}/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default You