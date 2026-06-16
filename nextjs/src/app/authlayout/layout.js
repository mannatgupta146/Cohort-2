import React from 'react'
import AuthNavbar from '@/components/AuthNavbar'

const layout = ({children}) => {
  return (
    <html lang="en" className= {"h-full antialiased"} >
      <body className="min-h-full flex flex-col">
        <AuthNavbar />
        {children}
      </body>
    </html>
  )
}

export default layout