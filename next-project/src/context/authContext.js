"use client"

import { api } from "@/lib/api";

const { createContext, useState, useEffect, useContext } = require("react");

const Auth = createContext()

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const hydrateUser = async () => {
        try {
            const res = await api.get("/api/auth/me")
            console.log(res)
            setLoading(false)
            setUser(res.data.user)
        } catch (error) {
            setLoading(false)
            setUser(null)
            console.log("error in hydration", error)
        }
    }

    useEffect(() => {
      hydrateUser()
    }, [])

    return <Auth.Provider value={{user, setUser, hydrateUser}}> {children} </Auth.Provider>
}

export const useAuth = () => useContext(Auth)