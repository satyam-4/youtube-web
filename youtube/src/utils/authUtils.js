import axios from "axios"

const checkAuth = async () => {
    console.log("first")
    try {
        const response = await axios.post(`http://localhost:8000/api/v1/users/checkUserAuth`, {}, { withCredentials: true })
        return response
    } catch (error) {
        return error
    } 
}

export { checkAuth }