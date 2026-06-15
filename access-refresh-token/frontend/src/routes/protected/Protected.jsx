import React from "react"
import { Outlet, Navigate } from "react-router"
import { useSelector } from "react-redux"

const Protected = () => {
  const { user, isLoading } = useSelector((state) => state.auth)

  if(isLoading){
    return <div>Loading...</div>
  }

  if (user) {
    return <Outlet />
  } else {
    return <Navigate to="/" />
  }
}

export default Protected
