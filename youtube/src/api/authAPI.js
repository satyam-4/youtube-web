import apiClient from "./apiClient.js"

export const loginUser = async (credentials) => {
    const response = await apiClient.post(
        "/api/v1/auth/login",
        credentials,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    return response
}

export const registerUser = async (userDetails) => {
    const response = await apiClient.post(
        "api/v1/auth/register",
        userDetails,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    return response
}