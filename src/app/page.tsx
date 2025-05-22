"use client"
import Image from 'next/image'
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import CalendarEvents from '@/components/CalendarEvents'

export default function ChurchLandingPage() {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image with Overlay */}
      <div className="relative">
        <div className={`relative h-[50vh] md:h-screen w-full transition-all duration-1000 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src="/images/Resized_Lighthouse_Baptist_Church.jpg"
            alt="Lighthouse Baptist Church"
            fill
            priority
            className="object-contain md:object-cover brightness-75"
            onLoad={() => setIsImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-2 md:mb-4">Lighthouse Baptist Church</h1>
              <p className="text-lg sm:text-xl md:text-2xl font-light">Bronx, New York</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Join us in worship and fellowship as we grow together in faith</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-gray-50 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">Sunday Worship</h3>
              <p className="text-gray-600 mb-6">Join us every Sunday at 10:00 AM for Sunday school followed by 11:00 AM worship service.</p>
              <a href="#contact" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-gray-50 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">Bible Study</h3>
              <p className="text-gray-600 mb-6">Wednesday evenings at 7:00 PM and bi-weekly Prayer service at 8:30-10:00 PM for in-depth Bible study.</p>
              <a href="#contact" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-gray-50 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">Community Outreach</h3>
              <p className="text-gray-600 mb-6">We organize community service events every third Saturday to help those in need.</p>
              <a href="#contact" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/Pastor.jpg"
                alt="Pastor"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">About Our Church</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Lighthouse Baptist Church is a welcoming community dedicated to spreading the love of Christ.
                  We believe in fostering a supportive environment where everyone can grow in their faith journey.
                </p>
                <p>
                  Our mission is to serve our community, provide spiritual guidance, and create a place where all feel welcome.
                </p>
              </div>
              <a href="/Contact" className="mt-8 inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Join us for our upcoming services and community events</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="w-full">
              <div className="rounded-xl shadow-lg overflow-hidden">
                <iframe
                  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=anVkaXRoLmJyb3duODFAZ21haWwuY29t&color=%230B8043"
                  className="w-full h-[600px] border-0"
                />
              </div>
            </div>
            <div className="w-full">
              <CalendarEvents />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
