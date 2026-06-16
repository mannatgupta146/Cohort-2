import Link from 'next/link'
import React from 'react'

const AuthNavbar = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Link href="/authlayout/register">register</Link>
      <Link href="/authlayout/login">login</Link>
    </div>
  );
};

export default AuthNavbar;