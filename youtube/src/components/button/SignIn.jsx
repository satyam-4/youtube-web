import react from "react"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import { useNavigate } from "react-router-dom"
import { paths } from "../../config/paths.js"

const SignIn = ({ currentPath }) => {
    const navigate = useNavigate()

    const handleSignInClick = () => {
        navigate(paths.auth.login.getHref(currentPath))
    }

    return (
        <button 
        onClick={() => handleSignInClick()}
        className="border-2 border-[#ffffff5d] text-[1rem] px-2 py-2 flex items-center gap-2 rounded-3xl font-semibold hover:bg-[#ffffff15]"> 
            <AccountCircleOutlinedIcon />
            <p>
                Sign in
            </p>
        </button>
    )
}

export default SignIn