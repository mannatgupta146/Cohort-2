import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Link href="/home">home</Link>
      <Link href="/contact">contact</Link>
      <Link href="/about">about</Link>
    </div>
  );
};

export default Navbar;