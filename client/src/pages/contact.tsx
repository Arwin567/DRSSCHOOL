import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ContactSection from "@/components/sections/contact-section";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-school-blue to-school-blue-light text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get in touch with us for admissions, inquiries, or to schedule a campus visit
            </p>
          </div>
        </section>

        {/* Quick Contact Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-school-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-school-orange w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">
                  DRS INSTITUTES<br />
                  HRD School of Excellence<br />
                  Dindi Rd, Devarakonda, Kacharam Agraharam,<br />
                  Telangana 508248
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-school-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-school-blue w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">
                  +91 8686 123456<br />
                  +91 8686 654321
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-school-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-school-orange w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">
                  info@drsinstitutions.com<br />
                  admissions@drsinstitutions.com
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-school-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-school-blue w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
                <p className="text-gray-600">
                  Mon-Fri: 8:00 AM - 4:00 PM<br />
                  Sat: 9:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <ContactSection />

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Find <span className="text-school-orange">Us</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Located in the heart of Knowledge City, easily accessible by public transport
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-gray-400 w-16 h-16 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Interactive Map</p>
                  <p className="text-gray-400">VVyasa School Campus Location</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Department <span className="text-school-orange">Contacts</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Admissions Office</h3>
                <div className="space-y-2">
                  <p className="text-gray-600"><strong>Phone:</strong> +91 8686 123456</p>
                  <p className="text-gray-600"><strong>Email:</strong> admissions@drsinstitutions.com</p>
                  <p className="text-gray-600"><strong>Hours:</strong> 9:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Office</h3>
                <div className="space-y-2">
                  <p className="text-gray-600"><strong>Phone:</strong> +91 8686 654321</p>
                  <p className="text-gray-600"><strong>Email:</strong> academics@drsinstitutions.com</p>
                  <p className="text-gray-600"><strong>Hours:</strong> 8:00 AM - 4:00 PM</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Program Coordinator</h3>
                <div className="space-y-2">
                  <p className="text-gray-600"><strong>Phone:</strong> +91 8686 789012</p>
                  <p className="text-gray-600"><strong>Email:</strong> programs@drsinstitutions.com</p>
                  <p className="text-gray-600"><strong>Hours:</strong> 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
