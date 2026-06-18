"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from 'react'
  
const Navbar = () => {
  const pathname = usePathname()

  const links = [
    { name: "home", href: "/home" },
    { name: "about", href: "/about" },
    { name: "contact", href: "/contact" },
    { name: "products", href: "/products" },
  ]

  return (
    <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-100 dark:border-zinc-900 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <h1 className="font-bold text-2xl bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">e-com</h1>
        <div className="relative flex gap-6 items-center">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative py-1 text-sm font-medium transition-colors duration-200 ${
                    isActive 
                      ? "text-zinc-900 dark:text-white" 
                      : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 h-[2px] bg-zinc-900 dark:bg-white rounded-full animate-expand-underline" />
                  )}
                </Link>
              )
            })}
        </div>
        <div>
            <button className="px-5 py-2 text-sm font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-200 active:scale-95 shadow-sm cursor-pointer">
              Login
            </button>
        </div>
    </div>
  )
}

export default Navbar