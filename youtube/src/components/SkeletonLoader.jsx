import React from "react"
import { useSelector } from "react-redux"

const SkeletonLoader = () => {
    const youtubeSidebarState = useSelector((state) => state.sidebar.isExpanded)
    
    return (
        <>
            <div className={`
                w-[95vw] flex flex-col gap-1
                md:w-[43vw]
                ${youtubeSidebarState ? 'lg:w-[27vw]' : 'lg:w-[22.5vw]'}
            `}>
                <div className={`
                    mx-auto rounded-lg bg-zinc-800 w-full h-[calc(95vw*9/16)]
                    md:h-[calc(45vw*9/16)]
                    ${youtubeSidebarState ? 'lg:h-[calc(27vw*9/16)]' : 'lg:h-[calc(22.5vw*9/16)]'}
            
                `}></div> 
                <div className="px-1 flex gap-2 w-full">
                    <div>
                        <div className={`
                            w-[3rem] h-[3rem] bg-zinc-800 rounded-full
                            sm
                        `}></div>
                    </div>
                    <div className="w-full flex justify-center flex-col gap-2">
                        <div className={`
                            w-[80%] h-[1rem] bg-zinc-800 rounded-sm
                            sm:
                        `}></div>
                        <div className={`
                            w-[60%] h-[1rem] bg-zinc-800 rounded-sm
                            sm:
                        `}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkeletonLoader