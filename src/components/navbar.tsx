"use client"
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
 



export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='sticky top-0 z-50'>
          {/* Header */}
            <header className="bg-gray-200 py-4 relative">
                <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between">
                    <div className="text-xl md:text-2xl font-bold text-gray-800" >Light House Baptive Church - Bronx</div>
                    {/* Mobile Menu Button */}
                    <button 
                    className="md:hidden bg-darkgray text-white p-2 rounded-md hover:bg-gray-900 transition duration-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6">
                    <li><Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link></li>
                    <li><Link href="#About" className="text-gray-700 hover:text-gray-900">About</Link></li>
                    <li><Link href="#services" className="text-gray-700 hover:text-gray-900">Services</Link></li>
                    <li><Link href="#events" className="text-gray-700 hover:text-gray-900">Events</Link></li>
                    <li><Link href="#contact" className="text-gray-700 hover:text-gray-900">Contact</Link></li>
                    {/* <li><a href="#" className="text-gray-700 hover:text-gray-900">History</a></li> */}
                    </ul>
                </nav>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-gray-200 py-4 px-4 shadow-lg">
                    <ul className="flex flex-col space-y-4">
                        <li><a href="#home" className="text-gray-700 hover:text-gray-900 block">Home</a></li>
                        <li><a href="#about" className="text-gray-700 hover:text-gray-900 block">About</a></li>
                        <li><a href="#services" className="text-gray-700 hover:text-gray-900 block">Services</a></li>
                        <li><a href="#events" className="text-gray-700 hover:text-gray-900 block">Events</a></li>
                        <li><a href="#contact" className="text-gray-700 hover:text-gray-900 block">Contact</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900 block">History</a></li>
                    </ul>
                    </div>
                )}
                </div>
            </header>
        </div>
           
 
    )
}