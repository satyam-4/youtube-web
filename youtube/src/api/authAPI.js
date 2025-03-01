import apiClient from "./apiClient.js"

const makeLoginReq = async (credentials) => {
    const response = await apiClient.post(
        "/v1/users/login",
        credentials
    )
    return response
}

const makeRegisterReq = async (userDetails) => {
    const response = await apiClient.post(
        "/v1/users/register",
        userDetails,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    )
    return response
}

export {
    makeLoginReq,
    makeRegisterReq
}