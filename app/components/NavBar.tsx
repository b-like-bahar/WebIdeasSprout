import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex, justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="website logo" width={160} height={40} />
                </Link>
            </nav>
        
        </header>
    )
}

export default NavBar