import React from "react"
import { CircleUserIcon } from "lucide-react"

const SignIn = ({ onClick, elementColor, borderColor, hoverColor }) => {
    return (
        <>
            <button 
                onClick={onClick}
                className={`p-2 rounded-3xl ${elementColor} flex items-center gap-2 font-semibold border-2 ${borderColor} ${hoverColor}`}>
                <CircleUserIcon className={`text-${elementColor}`} />
                <p>
                    Sign in
                </p>
            </button>
        </>
    )
}

export default SignIn