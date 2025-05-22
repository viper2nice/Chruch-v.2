"use client"
import Link from 'next/link'

export default function Footer() {


  return (
    <div className="sticky top-[100vh]">
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold mb-6 border-b border-gray-700 pb-2">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  3721 White Plain Road
                </p>
                <p className="ml-7">Bronx, NY 10467</p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (718) 652-6812
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="hover:text-gray-300 transition duration-300">Home</Link></li>
                <li><Link href="/About" className="hover:text-gray-300 transition duration-300">About</Link></li>
                <li><Link href="/Contact" className="hover:text-gray-300 transition duration-300">Contact</Link></li>
              </ul>
            </div>
            {/* Connect With Us */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold mb-6 border-b border-gray-700 pb-2">Connect With Us</h3>
              <p className="text-gray-300">Follow us on social media for updates and inspiration.</p>
              <div className="flex space-x-6 mt-4">
                <a
                  href="https://www.facebook.com/lighthouse.baptistchurch.bronx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition duration-300 flex items-center"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
                <a
                  href="https://www.youtube.com/channel/UCw7lzOsSQWCvuvlXN1p9m1A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition duration-300 flex items-center"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Lighthouse Baptist Church - Bronx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}