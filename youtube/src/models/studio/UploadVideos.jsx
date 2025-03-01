import React, { useEffect, useRef, useState } from "react"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined'
import UploadIcon from '@mui/icons-material/Upload'
import { updateTitle, uploadVideo } from "../../api/videoAPI"
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'

const UploadVideos = ({ setShowUploadModel }) => {
    const [videoFile, setVideoFile] = useState(null)
    const [videoTitle, setVideoTitle] = useState("")
    const [videoDescription, setVideoDescription] = useState("")
    const [isUploading, setIsUploading] = useState(false)
    const [isTitleFocused, setIsTitleFocused] = useState(false)
    const [isDescriptionFocused, setIsDescriptionFocused] = useState(false)
    const [isSaving, setIsSaving] = useState(false)
    const [uploadedVideo, setUploadedVideo] = useState(null)
    const [progress, setProgress] = useState(0)

    const titleRef = useRef(null)
    const descriptionRef = useRef(null)

    const handleUploadVideoChange = (e) => {
        const file = e.target.files[0]
        if(file) {
            setVideoFile(file)
        }
    }

    useEffect(() => {
        (async () => {
            if(videoFile) {
                console.log("uploading...")
                const formdata = new FormData()
                formdata.append("video", videoFile)
                const fileName = videoFile.name
                setIsUploading(true)        
                setVideoTitle(fileName.substring(0, fileName.lastIndexOf(".")))   
                const response = await uploadVideo(formdata, (progressEvent) => {
                    const percentCompleted = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    )
                    setProgress(percentCompleted)
                })  
                
                if(response.status === 200) {
                    console.log("Response : ", response)
                    setUploadedVideo(response.data.data.videoFile)
                    console.log("url : ", response.data.data.videoFile)
                }
            }
        })()
    }, [videoFile])

    useEffect(() => {
        if(titleRef.current) {
            console.log("textarea: ", titleRef)
            console.log("current: ", titleRef.current)
            console.log("scrollheight: ", titleRef.current.scrollHeight)
            titleRef.current.style.height = "auto"
            titleRef.current.style.height = titleRef.current.scrollHeight + "px"
        }

        if(descriptionRef.current) {
            descriptionRef.current.style.height = "auto"
            descriptionRef.current.style.height = descriptionRef.current.scrollHeight + "px"
        }
    }, [videoTitle, videoDescription])

    useEffect(() => {
        if(isUploading && titleRef.current) {
            titleRef.current.focus()
        }
    }, [isUploading])

    // useEffect(() => {
    //     if(videoTitle.trim() !== "") {
    //         const videoDetails =  {
    //             videoTitle,
    //         }

    //         const timer = setTimeout(() => {
    //             setIsSaving(true)
    //             updateTitle(videoTitle)
    //             setIsSaving(false)
    //         }, 5000)

    //         return () => clearTimeout(timer)
    //     }
    // }, [videoTitle])

    return (
        <>
            <div className="z-20 absolute w-screen h-screen bg-black bg-opacity-25 flex justify-center items-center">
                <div className="w-[60vw] h-[80vh] rounded-lg overflow-hidden text-white bg-zinc-800 flex flex-col">
                    <div className="h-[10%] border-b-2 border-[#80808032] flex justify-between items-center px-5 py-2">
                        <span className="font-semibold text-[1.2vw]">
                            {
                                isUploading ? (
                                    videoTitle.length > 65 ? (
                                        videoTitle.slice(0, 65) + "..."
                                    ) : (
                                        videoTitle
                                    )
                                ) : (
                                    "Upload videos"
                                )
                            }
                        </span>
                        <div className="flex items-center gap-3">
                            {
                                isSaving ? (
                                    <>
                                        <div className="px-2 py-1 text-xs bg-[#80808088] font-semibold rounded-md">
                                            Saving...
                                        </div>
                                    </>
                                ) : (
                                    ''
                                )
                            }
                            <button className="p-2 rounded-full hover:bg-[#80808054]">
                                <FeedbackOutlinedIcon />
                            </button>
                            <button 
                            onClick={() => setShowUploadModel(false)}
                            className="p-2 rounded-full hover:bg-[#80808054]">
                                <CloseOutlinedIcon />
                            </button>
                        </div>
                    </div>
                    {
                        isUploading ? (
                            <>  
                                <div className="px-10 flex flex-col flex-grow overflow-y-auto">
                                    <span className="font-semibold text-[1.2vw]">
                                        Details
                                    </span>
                                    <div className="mt-2 h-full flex">
                                        <div className="w-[60%] flex flex-col gap-5">
                                            <div 
                                            onClick={() => titleRef.current?.focus()}
                                            className={`relative py-1 px-2 w-full h-fit ${ isTitleFocused ? 'border-2 border-[#ffff]' : 'border-2 border-[#dadada54]'} flex flex-col justify-between cursor-text rounded-lg`}>
                                                <label 
                                                className="pointer-events-none text-zinc-400 text-xs"
                                                htmlFor="title">
                                                    Title (required)
                                                </label>
                                                <textarea 
                                                rows={1}
                                                onBlur={() => setIsTitleFocused(false)}
                                                onFocus={() => setIsTitleFocused(true)}
                                                ref={titleRef}
                                                value={videoTitle}
                                                name="title"
                                                onChange={(e) => setVideoTitle(e.target.value)}
                                                maxLength={100}
                                                className="bg-transparent outline-none h-fit resize-none overflow-hidden"
                                                type="text" />
                                                <span className="min-h-4 text-zinc-400 text-xs text-right">
                                                    {
                                                        isTitleFocused ? (
                                                            `${videoTitle.length} / 100`
                                                        ) : (
                                                            ``
                                                        )
                                                    }
                                                </span>
                                            </div>
                                            <div 
                                            onClick={() => descriptionRef.current?.focus()}
                                            className={`relative py-1 px-2 w-full h-fit ${ isDescriptionFocused ? 'border-2 border-[#ffff]' : 'border-2 border-[#dadada54]'} flex flex-col justify-between cursor-text rounded-lg`}>
                                                <label 
                                                className="pointer-events-none text-zinc-400 text-xs"
                                                htmlFor="description">
                                                    Description
                                                </label>
                                                <textarea 
                                                placeholder="Tell viewers about your video (type @ to mention a channel)"
                                                rows={5}
                                                ref={descriptionRef}
                                                value={videoDescription}
                                                name="description"
                                                onBlur={() => setIsDescriptionFocused(false)}
                                                onFocus={() => setIsDescriptionFocused(true)}
                                                onChange={(e) => setVideoDescription(e.target.value)}
                                                maxLength={2000}
                                                className="bg-transparent outline-none h-fit resize-none overflow-hidden placeholder:text-[#808080aa]"
                                                type="text" />
                                                <span className="h-4 text-zinc-400 text-xs text-right">
                                                    {
                                                        isDescriptionFocused ? (
                                                            `${videoDescription.length} / 2000`
                                                        ) : (
                                                            ''
                                                        )
                                                    }
                                                </span>
                                            </div>
                                            <div>
                                                <span className="font-semibold text-[1.2vw]">
                                                    Thumbnail
                                                    <p className="font-normal text-zinc-400 text-sm">
                                                        Set a thumbnail that stands out and draws viewers attention
                                                    </p>
                                                </span>
                                                <div className="mt-2 relative w-40 h-20 overflow-hidden">
                                                    <input 
                                                    className="absolute opacity-0 w-full h-full"
                                                    type="file" />
                                                    <div className="w-full h-full border-dashed border-2 border-zinc-400 flex flex-col justify-center items-center pointer-events-none">
                                                        <DriveFolderUploadOutlinedIcon />
                                                        <p className="text-sm text-zinc-300">
                                                            Upload file
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-5 w-[40%]">
                                            <div className=" fixed w-80 h-72 rounded-lg overflow-hidden">
                                                <div className="h-[60%] flex justify-center items-center bg-black text-zinc-400 text-sm">
                                                    Uploading video...
                                                </div>
                                                <div className="h-[40%] bg-zinc-900 px-2 py-2 flex flex-col justify-between">
                                                    <div className="">
                                                        <p className="text-xs text-zinc-400">
                                                            Video link
                                                        </p>
                                                        <p className="text-sm text-zinc-400">
                                                            Creating link..
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <p className="text-xs text-zinc-400">
                                                            Filename
                                                        </p>
                                                        <p>
                                                            {
                                                                videoFile.name
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-5 py-2 h-[10%] flex items-center border-t-2 border-[#80808032] ">
                                    {
                                        `Uploading ${progress}%...`
                                    }
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex-grow flex flex-col justify-center items-center gap-8">
                                    <div className="p-8 bg-[#1f1f1f] rounded-full overflow-hidden">
                                        <UploadIcon
                                        style={{fontSize: "5vw"}} 
                                        className="text-gray-500" />  
                                    </div>
                                    <div className="flex flex-col gap-1 text-center text-sm">
                                        <span>
                                            Drag and drop video files to upload
                                        </span>
                                        <span className="text-zinc-400">
                                            Your videos will be private until you publish them.
                                        </span>
                                    </div>
                                    <button className="w-[8vw] h-10 flex justify-center items-center overflow-hidden font-semibold text-black bg-white rounded-3xl hover:bg-[#d8d8d8]">
                                        <span className="w-[8vw] h-10 absolute pointer-events-none flex justify-center items-center">
                                            Select file
                                        </span>
                                        <input 
                                        className="px-2 py-1 w-full h-full opacity-0"
                                        type="file"
                                        accept="video/*"
                                        name="video"
                                        onChange={handleUploadVideoChange} />
                                    </button>
                                </div>
                                <div className="px-20 py-5 text-xs text-center flex flex-col gap-2 text-zinc-400">
                                    <span>
                                        By submitting your videos to YouTube, you acknowledge that you agree to YouTube's <a className="text-sky-500" href="/">Terms of Service</a> and <a className="text-sky-500" href="/">Community Guidelines</a>.
                                    </span>
                                    <span>
                                        Please make sure that you do not violate others' copyright or privacy rights. <a className="text-sky-500" href="/">Learn more</a>
                                    </span>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default UploadVideos