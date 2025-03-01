import apiClient from "./apiClient.js"

const getUserInfo = async () => {
    const response = await apiClient.get("/v1/users/getCurrentUser")
    return response
}

export {
    getUserInfo
}