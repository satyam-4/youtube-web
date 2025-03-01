import apiClient from "./apiClient"

const uploadVideo = async (videoFile, onUploadProgress) => {
    const response = await apiClient.post(
        "v1/video/uploadVideo",
        videoFile,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            onUploadProgress   // passing the progress callback here
        }
    )
    return response
}

const updateTitle = async (videoDetails) => {
    const response = await apiClient.post(
        "v1/video/updateVideoTitle",
        videoDetails
    )
    return response
}

export {
    uploadVideo,
    updateTitle
}