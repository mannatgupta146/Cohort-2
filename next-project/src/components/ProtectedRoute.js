"use client"

import { useAuth } from "@/context/authContext"
import { useRouter } from "next/navigation"
import React, { useEffect } from 'react'

const ProtectedRoute = ({children}) => {

    const { user, loading} = useAuth()

    if(loading){
        return <div>Loading...</div>
    }

    
    const router = useRouter()

    useEffect(() => {
        if(!user && !loading){
            router.push("/login")
        }
    }, [user, router, loading])

  return children
}

export default ProtectedRoute