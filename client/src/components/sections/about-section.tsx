import { Check } from "lucide-react";

/**
 * Renders the "About" section with details about DRS Institutes.
 */
export default function AboutSection() {
  const features = [
    "IIT-JEE Foundation",
    "NEET Preparation",
    "Expert Faculty",
    "Proven Results",
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-school-orange">DRS Institutes</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              DRS Institutes - HRD School of Excellence is a premier educational institution dedicated to 
              providing foundation courses for competitive examinations. Located in Devarakonda, Telangana, 
              we specialize in preparing students for IIT-JEE, NEET, CLAT, RIMC, OLYMPIAD, and NTSE examinations.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our institute believes that "Education is the most powerful weapon which you can use to change the world." 
              We are committed to building strong foundations in Mathematics, Physics, Chemistry, and Biology, 
              ensuring students are well-prepared for India's most competitive entrance examinations.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="text-school-orange w-5 h-5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Students studying together" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
