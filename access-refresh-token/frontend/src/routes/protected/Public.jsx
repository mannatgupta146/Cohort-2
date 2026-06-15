import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router'

const Public = () => {

    const { user } = useSelector(state => state.auth)

    if(user){
        return <Navigate to="/home" />
    }

  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Public