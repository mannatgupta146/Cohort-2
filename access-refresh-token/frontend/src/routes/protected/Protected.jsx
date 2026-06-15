import React from 'react'
import { Outlet } from 'react-router'

const Protected = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Protected