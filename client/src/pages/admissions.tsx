import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import AdmissionsSection from "@/components/sections/admissions-section";
import { Calendar, FileText, Users, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Admissions() {
  const steps = [
    {
      icon: FileText,
      title: "Application Form",
      description: "Fill out the online application form with all required details.",
    },
    {
      icon: FileText,
      title: "Document Submission",
      description: "Submit all required documents including certificates and photographs.",
    },
    {
      icon: Users,
      title: "Interaction",
      description: "Attend the student and parent interaction session.",
    },
    {
      icon: CreditCard,
      title: "Fee Payment",
      description: "Complete the admission process with fee payment.",
    },
  ];

  const feeStructure = [
    { grade: "Pre-Primary (Nursery - UKG)", admissionFee: "₹25,000", annualFee: "₹85,000" },
    { grade: "Primary (Class I - V)", admissionFee: "₹30,000", annualFee: "₹95,000" },
    { grade: "Secondary (Class VI - X)", admissionFee: "₹35,000", annualFee: "₹1,05,000" },
    { grade: "Senior Secondary (Class XI - XII)", admissionFee: "₹40,000", annualFee: "₹1,15,000" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-school-blue to-school-blue-light text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Admissions</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join our community of learners and begin your journey to excellence
            </p>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Admission <span className="text-school-orange">Process</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple and transparent admission process to welcome new students
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-school-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="text-school-orange w-8 h-8" />
                      </div>
                      <div className="w-8 h-8 bg-school-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Fee <span className="text-school-orange">Structure</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transparent fee structure for academic year 2024-25
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-school-blue text-white">
                        <tr>
                          <th className="text-left p-4">Grade</th>
                          <th className="text-left p-4">Admission Fee</th>
                          <th className="text-left p-4">Annual Fee</th>
                        </tr>
                      </thead>
                      <tbody>
                        {feeStructure.map((fee, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="p-4 font-medium">{fee.grade}</td>
                            <td className="p-4">{fee.admissionFee}</td>
                            <td className="p-4">{fee.annualFee}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              <p className="text-sm text-gray-600 mt-4 text-center">
                * Fees are subject to annual revision. Additional charges may apply for optional activities.
              </p>
            </div>
          </div>
        </section>

        {/* Main Admissions Section */}
        <AdmissionsSection />

        {/* Important Dates */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Important <span className="text-school-orange">Dates</span>
              </h2>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-6 border-l-4 border-school-orange bg-gray-50 rounded-r-lg">
                  <Calendar className="text-school-orange w-6 h-6" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Application Opens</h3>
                    <p className="text-gray-600">November 1, 2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-6 border-l-4 border-school-blue bg-gray-50 rounded-r-lg">
                  <Calendar className="text-school-blue w-6 h-6" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Application Deadline</h3>
                    <p className="text-gray-600">February 28, 2025</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-6 border-l-4 border-school-orange bg-gray-50 rounded-r-lg">
                  <Calendar className="text-school-orange w-6 h-6" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Interaction Sessions</h3>
                    <p className="text-gray-600">March 1-31, 2025</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-6 border-l-4 border-school-blue bg-gray-50 rounded-r-lg">
                  <Calendar className="text-school-blue w-6 h-6" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Admission Confirmation</h3>
                    <p className="text-gray-600">April 1-15, 2025</p>
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
