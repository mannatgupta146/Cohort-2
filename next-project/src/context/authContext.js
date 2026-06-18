"use client"

import { api } from "@/lib/api";
import { useRouter } from "next/navigation";


const { createContext, useState, useEffect, useContext } = require("react");

const Auth = createContext()

export const AuthProvider = ({children}) => {

    const router = useRouter()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const hydrateUser = async () => {
        try {
            const res = await api.get("/api/auth/me")
            console.log(res)
            setUser(res.data.user)
            router.push("/layout/home")
        } catch (error) {
            setUser(null)
            console.log("error in hydration", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
      hydrateUser()
    }, [])

    return <Auth.Provider value={{user, setUser, hydrateUser, loading}}> {children} </Auth.Provider>
}

export const useAuth = () => useContext(Auth)