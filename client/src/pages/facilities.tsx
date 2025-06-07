import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FacilitiesSection from "@/components/sections/facilities-section";
import { Wifi, Shield, Bus, Utensils } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Facilities() {
  const amenities = [
    {
      icon: Wifi,
      title: "WiFi Campus",
      description: "High-speed internet connectivity throughout the campus for digital learning.",
    },
    {
      icon: Shield,
      title: "Security",
      description: "24/7 security with CCTV monitoring to ensure student safety.",
    },
    {
      icon: Bus,
      title: "Transportation",
      description: "Safe and reliable school bus service covering major areas of the city.",
    },
    {
      icon: Utensils,
      title: "Cafeteria",
      description: "Nutritious and hygienic meals prepared by experienced staff.",
    },
  ];

  const facilities = [
    {
      title: "Academic Facilities",
      items: [
        "50+ Smart Classrooms with Interactive Boards",
        "Well-equipped Science Laboratories",
        "Computer Labs with Latest Technology",
        "Comprehensive Library with 10,000+ Books",
        "Mathematics and Language Labs",
        "Audio-Visual Rooms for Presentations",
      ],
    },
    {
      title: "Sports & Recreation",
      items: [
        "Multi-purpose Sports Complex",
        "Basketball and Volleyball Courts",
        "Football and Cricket Grounds",
        "Swimming Pool (Olympic Size)",
        "Indoor Games Room",
        "Yoga and Meditation Hall",
      ],
    },
    {
      title: "Infrastructure",
      items: [
        "Air-conditioned Classrooms",
        "Modern Auditorium (500 Capacity)",
        "Medical Room with Trained Nurse",
        "Counseling Room",
        "Art and Craft Studios",
        "Music and Dance Rooms",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-school-blue to-school-blue-light text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Facilities</h1>
            <p className="text-xl max-w-3xl mx-auto">
              State-of-the-art infrastructure designed to enhance learning and development
            </p>
          </div>
        </section>

        {/* Campus Amenities */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Campus <span className="text-school-orange">Amenities</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Essential facilities that make our campus a safe and conducive learning environment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {amenities.map((amenity, index) => {
                const IconComponent = amenity.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-school-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="text-school-orange w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{amenity.title}</h3>
                      <p className="text-gray-600">{amenity.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Facilities Gallery */}
        <FacilitiesSection />

        {/* Detailed Facilities List */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Complete <span className="text-school-orange">Facilities List</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive overview of all facilities available at VVyasa School
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {facilities.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{category.title}</h3>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-school-orange rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Virtual Tour CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-school-blue rounded-2xl p-12 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Experience Our Campus
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Take a virtual tour of our facilities or schedule a visit to see our campus in person.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-school-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  Schedule Campus Visit
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-school-blue px-8 py-4 rounded-lg font-semibold transition-all">
                  Virtual Tour
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
