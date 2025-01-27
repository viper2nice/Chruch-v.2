"use client"
import Image from 'next/image'
import { Calendar, Clock, MapPin, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function ChurchLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-200 py-4 relative">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <div className="text-xl md:text-2xl font-bold text-gray-800">Light House Baptive Church - Bronx</div>
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6">
              <li><a href="#home" className="text-gray-700 hover:text-gray-900">Home</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-gray-900">About</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-gray-900">Services</a></li>
              <li><a href="#events" className="text-gray-700 hover:text-gray-900">Events</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">History</a></li>
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

      {/* Hero Section */}
      <section id="home" className="py-12 md:py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Welcome to Light House Baptive Church - Bronx</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">A place of worship, community, and spiritual growth</p>
          <a href="#contact" className="bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition duration-300">Join Us</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">About Us</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image src="/placeholder.svg" alt="Church" width={500} height={300} className="rounded-lg shadow-lg w-full" />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <p className="text-gray-600 mb-4">
                Light House Baptive Church is a welcoming community dedicated to spreading the love of Christ. 
                We believe in fostering a supportive environment where everyone can grow in their faith journey.
              </p>
              <p className="text-gray-600">
                Our mission is to serve our community, provide spiritual guidance, and create a place where all feel welcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <Clock className="w-12 h-12 text-gray-700 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Sunday Worship</h3>
              <p className="text-gray-600">Join us every Sunday at 10:00 AM for our Sunday school follow by 11:00 AM worship service.</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <Calendar className="w-12 h-12 text-gray-700 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Bible Study</h3>
              <p className="text-gray-600">Wednesday evenings at 7:00 PM, we gather for in-depth Bible study.</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <MapPin className="w-12 h-12 text-gray-700 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Community Outreach</h3>
              <p className="text-gray-600">We regularly organize community service events to help those in need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-12 md:py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Summer Bible Camp</h3>
              <p className="text-gray-600 mb-2">Join us for a week of fun and learning at our annual Summer Bible Camp.</p>
              <p className="text-gray-700">Date: July 15-20, 2023</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Community Outreach Day</h3>
              <p className="text-gray-600 mb-2">Help us make a difference in our community.</p>
              <p className="text-gray-700">Date: August 5, 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>123 Church Street</p>
              <p>Anytown, ST 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@gracechurch.com</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul>
                <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                <li><a href="#about" className="hover:text-gray-300">About</a></li>
                <li><a href="#services" className="hover:text-gray-300">Services</a></li>
                <li><a href="#events" className="hover:text-gray-300">Events</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <p>Follow us on social media for updates and inspiration.</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-gray-300">Facebook</a>
                <a href="#" className="text-white hover:text-gray-300">Twitter</a>
                <a href="https://www.youtube.com/channel/UCw7lzOsSQWCvuvlXN1p9m1A" className="text-white hover:text-gray-300">Youtube</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 Lighthouse Baptist Church - Bronx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
