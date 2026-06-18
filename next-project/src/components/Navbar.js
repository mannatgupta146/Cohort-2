"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from 'react'
import ModeToggle from "./toggleTheme"
  
const Navbar = () => {
  const pathname = usePathname()

  const links = [
    { name: "home", href: "/home" },
    { name: "about", href: "/about" },
    { name: "contact", href: "/contact" },
    { name: "products", href: "/products" },
  ]

  return (
    <div className="flex justify-between items-center px-6 py-4 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <h1 className="font-bold text-2xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">e-com</h1>
        <div className="relative flex gap-6 items-center">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative py-1 text-sm font-medium transition-colors duration-200 ${
                    isActive 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 h-[2px] bg-primary rounded-full animate-expand-underline" />
                  )}
                </Link>
              )
            })}
        </div>
        <div className="flex items-center gap-4">
            <ModeToggle />
            <button className="px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-200 active:scale-95 shadow-sm cursor-pointer">
              Login
            </button>
        </div>
    </div>
  )
}

export default Navbar