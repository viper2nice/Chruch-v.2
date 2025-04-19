"use client"
import Image from 'next/image'
import { Calendar, Clock, MapPin} from 'lucide-react'
import { useState } from 'react'
import CalendarEvents from '@/components/CalendarEvents'




export default function ChurchLandingPage() {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
       
      <div className= {`max-md:flex max-md:justify-center transition-all delay-[.3s] duration-[.8s] opacity-0 ease-in ${isImageLoaded ? 'opacity-100' : ''}`}>   
        <Image src="/images/Resized_Lighthouse_Baptist_Church.jpg" alt="Church" width={500} height={300}  className=" shadow-lg w-full max-md:w-full  " 
        onLoad={() => setIsImageLoaded(true)}
        />
      </div>
      {/* Hero Section */}
      <section id="home" className="py-12 md:py-20 text-center"> 
        <div className="container mx-auto px-4 ">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Welcome to Light House Baptive Church - Bronx</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">A place of worship, community, and spiritual growth</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 py-8">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <Clock className="w-12 h-12 text-gray-700 mb-4"/>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Sunday Worship</h3>
              <p className="text-gray-600">Join us every Sunday at 10:00 AM for our Sunday school follow by 11:00 AM worship service.</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <Calendar className="w-12 h-12 text-gray-700 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Bible Study</h3>
              <p className="text-gray-600">Wednesday evenings at 7:00 PM and Bi-weekly Prayer service at 8:30-10:00 PM we gather for in-depth Bible study.</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <MapPin className="w-12 h-12 text-gray-700 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Community Outreach</h3>
              <p className="text-gray-600">We regularly organize community service event every third Saturday to help those in need.</p>
            </div>
          </div>
          <a href="#contact" className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-900 transition duration-300">Join Us</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">About Us</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center items-center ">
              <Image src="/images/Pastor.jpg" alt="Church" width={500} height={300}  className="rounded-lg shadow-lg w-full max-md:w-1/2  " />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <p className="text-gray-600 mb-4">
                Light House Baptive Church is a welcoming community dedicated to spreading the love of Christ. 
                We believe in fostering a supportive environment where everyone can grow in their faith journey.
              </p>
              <p className="text-gray-600">
                Our mission is to serve our community, provide spiritual  guidance, and create a place where all feel welcome.
              </p>
            </div>
          </div>
        </div>
      </section>


      <div>
        
      </div>
      {/* Services Section */}
      {/* <section id="services" className="py-12 md:py-20">
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
              <p className="text-gray-600">Wednesday evenings at 7:00 PM and Bi-weekly Prayer service at 8:30-10:00 PM we gather for in-depth Bible study.</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <MapPin className="w-12 h-12 text-gray-700 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Community Outreach</h3>
              <p className="text-gray-600">We regularly organize community service event every third Saturday to help those in need.</p>
            </div>
          </div>
        </div>
      </section> */} 

      {/* Events Section */}
      <section id="events" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Upcoming Events</h2>
          <div className="container mx-auto px-4 flex justify-center py-4">
            <div className="w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
              <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=anVkaXRoLmJyb3duODFAZ21haWwuY29t&color=%230B8043" 
                className="w-full h-[600px] border-0">
              </iframe>
            </div>
          </div>
          <CalendarEvents />
        </div>
      </section>


      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>3721 White plain road</p>
              <p>Bronx, NY 10467</p>
              <p>Phone: (718) 652-6812</p>
              {/* <p>Email: </p> */}
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
                <a href="https://www.facebook.com/lighthouse.baptistchurch.bronx" className="text-white hover:text-gray-300">Facebook</a>
                {/* <a href="#" className="text-white hover:text-gray-300">Twitter</a> */}
                <a href="https://www.youtube.com/channel/UCw7lzOsSQWCvuvlXN1p9m1A" className="text-white hover:text-gray-300">YouTube</a>
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
