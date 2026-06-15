import axios from "axios"

export let axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

/* axiosInstance.interceptors.request.use() */

axiosInstance.interceptors.response.use(
    (res) => {
        console.log("axios instance response ", res)
        return res
    },
    async (error) => {
        let originalReq = error.config

        if(error.response.status === 401 || !originalReq.retry){

            originalReq.retry = true

            try {
                let res = await axiosInstance.get("/api/auth/get-accessToken")
                console.log(res)
                return axiosInstance(originalReq)

            } catch (error) {
                window.location.href = "/"
                return Promise.reject(error)
            }
        }
    }
)

