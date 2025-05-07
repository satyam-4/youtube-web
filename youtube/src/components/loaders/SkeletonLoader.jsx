import React from "react"
import { useTheme } from "@contexts/ThemeContext"

const SkeletonLoader = () => {
    const { theme } = useTheme()
    const bgClass = theme === "light"? "bg-zinc-200" : "bg-zinc-800"

    return (
        <>
            <div>
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