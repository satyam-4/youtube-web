import React from "react"
import { useSelector } from "react-redux"
import getTheme from "../../services/theme/getTheme"

const SkeletonLoader = () => {
    const youtubeSidebarState = useSelector((state) => state.sidebar.isExpanded)
    const theme = getTheme()
    const bgClass = theme === "light"? "bg-zinc-200" : "bg-zinc-800"
    const containerWidth = "w-[95vw] md:w-[43vw] lg:w-[29vw]"
    const xlContainerWidth = youtubeSidebarState ? "xl:w-[27vw]" : "xl:w-[22.5vw]"

    return (
        <>
            <div className={`${containerWidth} ${xlContainerWidth}`}>
                <div className={`
                    mx-auto rounded-lg
                    ${bgClass}
                    w-full
                    aspect-[16/9]
                `}></div> 
                <div className="mt-2 px-1 flex gap-2 w-full">
                    <div>
                        <div className={`
                            w-[3rem] h-[3rem] rounded-full
                            ${bgClass}
                        `}></div>
                    </div>
                    <div className="w-full flex justify-center flex-col gap-2">
                        <div className={`
                            w-[80%] h-[1rem] rounded-sm
                            ${bgClass}
                        `}></div>
                        <div className={`
                            w-[60%] h-[1rem] rounded-sm
                            ${bgClass}
                        `}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkeletonLoader