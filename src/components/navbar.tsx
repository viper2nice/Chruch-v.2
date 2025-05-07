"use client"
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    if (pathname !== '/') {
      router.push(`/#${sectionId}`)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className='sticky top-0 z-50'>
      {/* Header */}
      <header className="bg-gray-200 py-4 relative">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-xl md:text-2xl font-bold text-gray-800 hover:text-gray-900 transition-colors">
              Light House Baptive Church - Bronx
            </Link>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden bg-darkgray text-white p-2 rounded-md hover:bg-gray-900 transition duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6">
              <li><Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">Home</Link></li>
              <li><Link href="/About" className="text-gray-700 hover:text-gray-900 transition-colors">About</Link></li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSectionClick(e, 'services')}
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  onClick={(e) => handleSectionClick(e, 'events')}
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleSectionClick(e, 'contact')}
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </li>
              {/* <li><a href="#" className="text-gray-700 hover:text-gray-900">History</a></li> */}
            </ul>
          </nav>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-gray-200 py-4 px-4 shadow-lg">
              <ul className="flex flex-col space-y-4">
                <li><Link href="/" className="text-gray-700 hover:text-gray-900 block transition-colors">Home</Link></li>
                <li><Link href="/About" className="text-gray-700 hover:text-gray-900 block transition-colors">About</Link></li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleSectionClick(e, 'services')}
                    className="text-gray-700 hover:text-gray-900 block transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#events"
                    onClick={(e) => handleSectionClick(e, 'events')}
                    className="text-gray-700 hover:text-gray-900 block transition-colors"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleSectionClick(e, 'contact')}
                    className="text-gray-700 hover:text-gray-900 block transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900 block">History</a></li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}