import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Target, Trophy, Users, BookOpen, Calculator, FlaskConical } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Programs() {
  const programs = [
    {
      icon: Target,
      title: "IIT Foundation",
      description: "Comprehensive preparation for IIT-JEE with expert faculty and proven methodology.",
      features: ["Physics, Chemistry, Mathematics", "Mock Tests & Analysis", "Doubt Clearing Sessions"],
      color: "school-orange",
    },
    {
      icon: FlaskConical,
      title: "NEET Foundation",
      description: "Medical entrance preparation covering Biology, Physics, and Chemistry thoroughly.",
      features: ["Biology, Physics, Chemistry", "Previous Year Papers", "Medical Career Guidance"],
      color: "school-blue",
    },
    {
      icon: BookOpen,
      title: "CLAT Preparation",
      description: "Legal aptitude and reasoning skills development for law entrance examinations.",
      features: ["Legal Reasoning", "General Knowledge", "English Language"],
      color: "school-orange",
    },
    {
      icon: Users,
      title: "RIMC Coaching",
      description: "Specialized training for Rashtriya Indian Military College entrance.",
      features: ["Mathematics", "English", "General Knowledge"],
      color: "school-blue",
    },
    {
      icon: Trophy,
      title: "OLYMPIAD Training",
      description: "Excellence in Mathematics, Science, and Computer Science Olympiads.",
      features: ["Mathematical Olympiad", "Science Olympiad", "Computer Science"],
      color: "school-orange",
    },
    {
      icon: Calculator,
      title: "NTSE Preparation",
      description: "National Talent Search Examination preparation with comprehensive coverage.",
      features: ["Mental Ability Test", "Scholastic Aptitude Test", "State & National Level"],
      color: "school-blue",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-school-blue to-school-blue-light text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Foundation courses for IIT, NEET, CLAT, RIMC, OLYMPIAD & NTSE - Building tomorrow's achievers
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Excellence in <span className="text-school-orange">Competitive Preparation</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive foundation programs designed to build strong fundamentals and 
                achieve success in India's most competitive examinations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 bg-${program.color} bg-opacity-10 rounded-lg flex items-center justify-center mb-6`}>
                        <IconComponent className={`text-${program.color} w-8 h-8`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                      <p className="text-gray-600 mb-4">{program.description}</p>
                      <ul className="text-sm text-gray-600 space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-school-orange rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose DRS */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-school-orange">DRS Institutes?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-school-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-school-orange w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Faculty</h3>
                <p className="text-gray-600">Experienced teachers with proven track record in competitive exams</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-school-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-school-blue w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Study Material</h3>
                <p className="text-gray-600">Well-researched and updated content covering complete syllabus</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-school-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-school-orange w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Regular Assessment</h3>
                <p className="text-gray-600">Mock tests and performance analysis to track progress</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-school-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="text-school-blue w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Consistent success rate in competitive examinations</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}