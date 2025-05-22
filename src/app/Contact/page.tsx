import { Facebook, Youtube, MapPin, Phone, Mail, Video } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Title Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 mb-12">Get in touch with us at Lighthouse Baptist Church</p>
      </div>

      {/* Welcome and Service Information */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Our Church</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join us for Sunday School at 10:00 AM via Zoom or YouTube
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://us02web.zoom.us/j/7277802191?pwd=R1BTeHNoWjRZQnFrUmxWZld4c2tMZz09"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <Video className="w-5 h-5 mr-2" />
                Join Zoom Meeting
              </a>
              <a
                href="https://www.youtube.com/channel/UCw7lzOsSQWCvuvlXN1p9m1A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
              >
                <Youtube className="w-5 h-5 mr-2" />
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information and Map Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-gray-700 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">Lighthouse Baptist Church<br />Bronx, New York</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-gray-700 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">(718) 231-1234</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-gray-700 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@lighthousebaptistchurch.org</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/lighthouse.baptistchurch.bronx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCw7lzOsSQWCvuvlXN1p9m1A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors duration-300"
                    >
                      <Youtube className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.5300653903923!2d-73.86385539999999!3d40.8821861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f33dea3411c7%3A0x776528b5ca83bf01!2sLighthouse%20Baptist%20Church!5e0!3m2!1sen!2sus!4v1747930121020!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}