import Navbar from '@/components/Navbar'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <html
      lang="en"
      className="dark h-full antialiased"
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="px-6 py-4 flex-1 flex flex-col">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

export default Layout