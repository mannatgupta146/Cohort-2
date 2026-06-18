import Navbar from '@/components/Navbar'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="px-6 py-4 flex-1 flex flex-col">
        {children}
      </main>
    </div>
  )
}

export default Layout