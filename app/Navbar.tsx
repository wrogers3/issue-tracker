import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
        <Link href='/'>Logo</Link>
        <ul>
            <li><Link href = '/'>Dashboard</Link></li>
            <li><Link href = '/issues'>Issues</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar


