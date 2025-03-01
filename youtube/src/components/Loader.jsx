import React from "react"
import MoonLoader from "react-spinners/MoonLoader"

const Loader = ({ size = 40 }) => {
    return (
        <>
            <div className="w-full h-full bg-opacity-40 bg-black flex justify-center items-center z-50">
                <MoonLoader
                color={"#ff0000"}
                loading={true}
                size={size}/>
            </div>
        </>
    )
}

export default Loader