import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Link href="/mainlayout/home">home</Link>
      <Link href="/mainlayout/contact">contact</Link>
      <Link href="/mainlayout/about">about</Link>
    </div>
  );
};

export default Navbar;