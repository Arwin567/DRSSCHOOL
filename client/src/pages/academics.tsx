import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import AcademicsSection from "@/components/sections/academics-section";
import { BookOpen, Users, Trophy, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Academics() {
  const features = [
    {
      icon: BookOpen,
      title: "CBSE Curriculum",
      description: "Following the comprehensive CBSE curriculum with modern pedagogical approaches.",
    },
    {
      icon: Users,
      title: "Qualified Faculty",
      description: "Experienced and trained teachers committed to student success.",
    },
    {
      icon: Trophy,
      title: "Academic Excellence",
      description: "Consistently high board results and competitive exam performance.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Preparing students for international opportunities and global citizenship.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-school-blue to-school-blue-light text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Academic Programs</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive education from pre-primary to senior secondary with focus on excellence
            </p>
          </div>
        </section>

        {/* Academic Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our <span className="text-school-orange">Academics</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our academic program is designed to nurture critical thinking and prepare students for future challenges
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-school-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="text-school-orange w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Academics Section */}
        <AcademicsSection />

        {/* Assessment & Evaluation */}
        <section id="assessment" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Assessment" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Assessment & <span className="text-school-orange">Evaluation</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our assessment system is designed to be comprehensive and supportive, focusing on 
                  continuous evaluation rather than just final examinations. We believe in measuring 
                  not just academic achievement but also personal growth and development.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-school-orange rounded-full mt-2"></div>
                    <p className="text-gray-600">Continuous and Comprehensive Evaluation (CCE)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-school-orange rounded-full mt-2"></div>
                    <p className="text-gray-600">Regular progress reports and parent-teacher meetings</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-school-orange rounded-full mt-2"></div>
                    <p className="text-gray-600">Project-based learning and practical assessments</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-school-orange rounded-full mt-2"></div>
                    <p className="text-gray-600">Personalized feedback and improvement plans</p>
                  </div>
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
