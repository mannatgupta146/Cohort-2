import { useState } from "react"
import { useForm } from "react-hook-form"
import { axiosInstance } from "../config/axiosInstance"

export const useAuth = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })

    const onLoginSubmit = async (data) => {
        try {
            let res = await axiosInstance.post("/api/auth/login", data)
            console.log("response from login", res)
            reset()
        } catch (error) {
            console.log("error in login", error)
        }
    }

    const onRegisterSubmit = async (data) => {
        try {
            let res = await axiosInstance.post("/api/auth/register", data)
            console.log("response from register", res)
            reset()
        } catch (error) {
            console.log("error in register", error)
        }
    }

    return { register, onLoginSubmit, onRegisterSubmit, errors, isSubmitting, showPassword, setShowPassword, handleSubmit, reset }
}