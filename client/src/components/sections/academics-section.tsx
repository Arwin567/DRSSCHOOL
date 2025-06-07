import { Baby, Book, GraduationCap, University, Palette, Laptop, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AcademicsSection() {
  const programs = [
    {
      icon: Baby,
      title: "Pre-Primary",
      description: "Foundation years focusing on play-based learning, creativity, and social development through interactive activities and personalized attention.",
      features: ["Nursery to UKG", "Play-based Learning", "Skill Development"],
      color: "school-orange",
    },
    {
      icon: Book,
      title: "Primary",
      description: "Building strong academic foundations with emphasis on literacy, numeracy, and critical thinking skills through engaging teaching methods.",
      features: ["Class I to V", "Core Subjects Focus", "Activity-based Learning"],
      color: "school-blue",
    },
    {
      icon: GraduationCap,
      title: "Secondary",
      description: "Comprehensive secondary education preparing students for board examinations with focus on conceptual understanding and practical application.",
      features: ["Class VI to X", "CBSE Curriculum", "Board Preparation"],
      color: "school-orange",
    },
    {
      icon: University,
      title: "Senior Secondary",
      description: "Specialized streams in Science, Commerce, and Humanities with career guidance and college preparation support for future academic pursuits.",
      features: ["Class XI & XII", "Multiple Streams", "Career Guidance"],
      color: "school-blue",
    },
    {
      icon: Palette,
      title: "Extra-Curricular",
      description: "Wide range of activities including sports, arts, music, and clubs to ensure holistic development and discovery of individual talents.",
      features: ["Sports & Games", "Arts & Music", "Special Clubs"],
      color: "school-orange",
    },
    {
      icon: Laptop,
      title: "Technology",
      description: "Modern technology integration with smart classrooms, computer labs, and digital learning tools to enhance the educational experience.",
      features: ["Smart Classrooms", "Computer Labs", "Digital Learning"],
      color: "school-blue",
    },
  ];

  return (
    <section id="academics" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Academic <span className="text-school-orange">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum combines traditional academic rigor with modern teaching 
            methodologies to prepare students for future success.
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
                        <Check className="text-school-orange w-4 h-4 mr-2" />
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
  );
}
