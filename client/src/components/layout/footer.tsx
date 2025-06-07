import { Link } from "wouter";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-school-orange rounded-full flex items-center justify-center">
                <GraduationCap className="text-white text-lg" />
              </div>
              <div>
                <h3 className="text-xl font-bold">DRS Institutes</h3>
                <p className="text-sm text-gray-400">HRD School of Excellence</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Foundation courses for competitive examinations - IIT, NEET, CLAT, RIMC, OLYMPIAD & NTSE. 
              Building tomorrow's achievers with expert guidance and proven methodology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-school-orange transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-school-orange transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-school-orange transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-school-orange transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-white transition-colors">Programs</Link>
              </li>
              <li>
                <Link href="/facilities" className="text-gray-400 hover:text-white transition-colors">Facilities</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Programs</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">IIT Foundation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">NEET Preparation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">CLAT Coaching</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">RIMC Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">OLYMPIAD & NTSE</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-school-orange mt-1 w-5 h-5" />
                <div className="text-gray-400">
                  DRS INSTITUTES<br />
                  HRD School of Excellence<br />
                  Dindi Rd, Devarakonda, Kacharam Agraharam,<br />
                  Telangana 508248
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-school-orange w-5 h-5" />
                <span className="text-gray-400">+91 8686 123456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-school-orange w-5 h-5" />
                <span className="text-gray-400">info@drsinstitutions.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 VVyasa School. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
