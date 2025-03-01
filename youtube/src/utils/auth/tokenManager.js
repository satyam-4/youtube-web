import axios from "axios"

// // this file includes functions to handle tokens

// // Scheduling token refresh : a function that schedules when to refresh access token
// const scheduleNextRefresh = (tokenData) => {
//     console.log("came here in the schedule function")
//     const currentTime = Date.now()
//     const timeUntilRefresh = tokenData.expiryTime - tokenData.bufferTime - currentTime
//     if(timeUntilRefresh > 0) {
//         setTimeout(() => refreshAccessToken(tokenData), timeUntilRefresh)
//     } else {
//         refreshAccessToken(tokenData)
//     }
// }

// const refreshAccessToken = async (tokenData) => {
//     try {
//         console.log("refreshing.....")
//         console.log("token data in refresh access token: ", tokenData)
//         const response = await axios.post(
//             "http://localhost:8000/api/v1/users/refreshAccessToken",
//             {},
//             { withCredentials: true }
//         )
//         if(response.status === 200) {
//             console.log("access token refreshed successfully")
//             tokenData.expiryTime = response.data.data.newAccessTokenExpiry  // update the old token expiry time 
//             scheduleNextRefresh(tokenData)
//         }
//     } catch (error) {   
//         console.log("Error while refreshing the access token", error)
//     }
// }

const refreshAccessToken = async () => {
    try {
        console.log("refreshing the access token....")
        await axios.post(
            "http://localhost:8000/api/v1/users/refreshAccessToken",
            {},
            { withCredentials: true }
        ) 
    } catch (error) {
        console.log("Error while refreshing the access token", error)
    }
}

export {
    // scheduleNextRefresh,
    refreshAccessToken
}