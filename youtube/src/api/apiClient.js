import axios from "axios"

// creating a reusable axios instance
// we will not hardcode the content-type, because different req can have different content-type
const apiClient = axios.create({
    baseURL: "http://localhost:8000/api",
    timeout: 300000,  // this is time in ms and this means that if the server will not respond in 5 min then the client can show a user friendly error mssg, that will reduce the long-hanging req's when there is high network traffics or high load on server.
    withCredentials: true
})

// adding a response interceptor to refresh the access token
// let isRefreshingFailed = false
// apiClient.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const originalRequest = error.config
        
//         // Stop retrying if refresh token has already failed
//         if (isRefreshingFailed) {
//             return Promise.reject(error);
//         }

//         if(error.response && error.response.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true

//             try {
//                 // call the refresh token endpoint to refresh the access token
//                 const response = await apiClient.post("/v1/users/refreshAccessToken")
                
//                 if(response.status === 401) {
//                     isRefreshingFailed = true
//                     return Promise.reject(response)
//                 }

//                 // after refreshing, retry the original req
//                 return apiClient(originalRequest)
//             } catch (errorWhileRefreshing) {
//                 console.log("Failed to refresh access token : ", errorWhileRefreshing)
//                 return Promise.reject(errorWhileRefreshing)  // reject id token refresh fails
//             }
//         }
//         // reject any other errors
//         return Promise.reject(error)
//     }
// )

apiClient.interceptors.request.use(
    (config) => {
        if(!config.headers["Content-Type"]) {
            config.headers["Content-Type"] = "application/json"  // default content-type
        }

        return config
    },

    (error) => {
        return Promise.reject(error)
    }
)

export default apiClient