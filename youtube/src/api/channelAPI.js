import apiClient from "./apiClient"

const createChannel = async (channelDetails) => {
    const response = await apiClient.post(
        "v1/users/become-creator",
        channelDetails
    )
    return response
}

export {
    createChannel
}