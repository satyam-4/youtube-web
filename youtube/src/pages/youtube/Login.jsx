import React, { useEffect, useState } from "react"
import youtubeLogo from "../../icons/youtube.svg"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Loader from "../../components/Loader.jsx"
import { setUser } from "../../features/user/userSlice.js"
import { loginSuccess } from "../../features/auth/authSlice.js"
import { makeLoginReq } from "../../api/authAPI.js"
import { getUserInfo } from "../../api/userAPI.js"
// import { scheduleNextRefresh } from "../../utils/auth/tokenManager.js"

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const credentials = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        
        try {
            setIsLoading(true)
            const response = await makeLoginReq(credentials)
            if(response.status === 200) {
                const userData = await getUserInfo()
                dispatch(setUser(userData.data))
                dispatch(loginSuccess())
                navigate("/")
            }
        } catch (error) {
            console.log("Login failed : ", error)
        } finally {
            setIsLoading(false)
        }

        // try {
        //     setIsLoading(true)
        //     const response = await axios.post("http://localhost:8000/api/v1/users/login", userData, { withCredentials: true })
        //     if(response.status === 200) {
        //         // console.log(response.data.data.accessTokenExpiry)
        //         // const tokenData = {
        //         //     bufferTime: 15 * 1000,  // 2 minutes in ms
        //         //     expiryTime: response.data.data.accessTokenExpiry // already in ms
        //         // }
        //         // scheduleNextRefresh(tokenData)
                
        //         // const userData = await axios.get("http://localhost:8000/api/v1/users/getCurrentUser", { withCredentials: true })
        //         // dispatch(setUser(userData.data))  // userData contains headers, we want data

        //         let userData
        //         try {
        //             userData = await axios.get(
        //                 "http://localhost:8000/api/v1/users/getCurrentUser",
        //                 { withCredentials: true }
        //             )
        //             dispatch(setUser(userData.data))

        //             if(userData.status === 401) {
        //                 console.log(userData)
        //             }
        //         } catch (error) {
        //             console.log("There was an error while getting the user data: ", error)
        //         }
        //         dispatch(loginSuccess())
        //         navigate("/")
        //     }
        // } catch (error) {
        //     console.log("Login failed: ", error)
        // } finally {
        //     setIsLoading(false)
        // }
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/")
        } else {
            setIsLoading(false)
        }
    }, [isAuthenticated, navigate])

    if(isLoading) {
        return (
            <>
                <div className="w-screen h-screen">
                    <Loader/>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="h-screen w-screen bg-slate-200">
                <div className="pl-2 w-full h-[10%]">
                    <img 
                    style={{width: "4rem"}}
                    src={youtubeLogo} 
                    alt="Youtube" 
                    />
                </div>
                <div className="w-full h-[90%] flex justify-center items-center">
                    <div className="w-[35%] p-5 bg-white rounded-lg flex flex-col justify-center shadow-md shadow-[#36363631] items-center">
                        <div className="mb-10 w-[80%] text-3xl font-bold">
                            Welcome Back,
                        </div>
                        <form 
                        onSubmit={handleSubmit}
                        className="w-[80%] flex flex-col gap-5"
                        action="">
                            <input 
                            className="p-2 rounded-md text-xl border-2 border-[#00000049] focus:outline-blue-500 focus:outline focus:outline-4 focus:border-transparent"
                            type="text" 
                            placeholder="Email"
                            name="email"/>

                            <input 
                            className="p-2 rounded-md text-xl border-2 border-[#00000049] focus:outline-blue-500 focus:outline focus:outline-4 focus:border-transparent"
                            type="password" 
                            placeholder="Password"
                            name="password"/>

                            <button
                            className="bg-red-500 font-bold text-xl p-3 rounded-2xl text-white hover:bg-red-600"
                            type="submit">
                                Login
                            </button>
                        </form>
                        <span className="mt-2 font-semibold">
                            Don't have an account?{` `}
                            <a 
                            className="font-bold"
                            href="/register">
                                Create new account
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login