import React from 'react'
import Link from "next/link"
import {AiFillBug} from "react-icons/ai"

const Navbar = () => {
    const links = [
     {label: 'Dashboard', href: '/'},
     {label: 'Issues', href: '/issues'},
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href='/'><AiFillBug /></Link>
        <ul className='flex space-x-6'>
	    {links.map(link => <Link key={link.href} className='text-zinc-800 hover:text-zinc-500 transition-colors' href = {link.href}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default Navbar


