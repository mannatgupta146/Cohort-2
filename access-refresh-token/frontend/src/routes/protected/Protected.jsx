import React from 'react'
import { Outlet, Navigate } from 'react-router'
import { useSelector } from 'react-redux'

const Protected = () => {
    
    const { user } = useSelector((state) => state.auth)

    if(user){
        return <Outlet />
    }else{
        return <Navigate to="/" />
    }
  
}

export default Protected