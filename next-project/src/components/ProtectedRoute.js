"use client"

import { useAuth } from "@/context/authContext"
import { useRouter } from "next/navigation"
import React, { useEffect } from 'react'

const ProtectedRoute = ({children}) => {

    const { user } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if(!user){
            router.replace("/login")
        }
    }, [user, router])

  return children
}

export default ProtectedRoute