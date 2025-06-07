import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Users, Target, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To provide quality education that nurtures academic excellence, character development, and global citizenship.",
    },
    {
      icon: Heart,
      title: "Vision",
      description: "To be a leading educational institution that prepares students for success in an interconnected world.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to maintaining the highest standards in education, infrastructure, and student development.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a strong school community that supports and encourages every student to reach their potential.",
    },
  ];

  const leadership = [
    {
      name: "Dr. Priya Sharma",
      position: "Principal",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b17c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      description: "With over 20 years in education, Dr. Sharma brings vision and innovation to VVyasa School.",
    },
    {
      name: "Mr. Rajesh Kumar",
      position: "Vice Principal",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      description: "A dedicated educator focused on academic excellence and student welfare.",
    },
    {
      name: "Ms. Anita Reddy",
      position: "Academic Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      description: "Leading curriculum development and ensuring quality teaching across all grades.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-school-blue to-school-blue-light text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About VVyasa School</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover our rich history, values, and commitment to educational excellence
            </p>
          </div>
        </section>

        {/* School Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 1999, VVyasa School began as a vision to create an educational institution 
                  that would nurture not just academic excellence but also character, creativity, and 
                  global citizenship. What started with 50 students has grown into a thriving community 
                  of over 1200 students.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our journey has been marked by continuous innovation in teaching methodologies, 
                  investment in world-class infrastructure, and a commitment to holistic development. 
                  We have consistently maintained our position as one of the leading educational 
                  institutions in the region.
                </p>
                <p className="text-lg text-gray-600">
                  Today, VVyasa School stands as a testament to the power of quality education, 
                  with our alumni making their mark in various fields across the globe.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="School History" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section id="mission" className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Mission & <span className="text-school-orange">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Guiding principles that shape our educational philosophy and daily practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-school-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="text-school-orange w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-school-orange">Leadership</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced educators committed to excellence in education
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                    <p className="text-school-orange font-semibold mb-4">{leader.position}</p>
                    <p className="text-gray-600">{leader.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
