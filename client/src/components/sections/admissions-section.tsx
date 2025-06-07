import { useState } from "react";
import { Calendar, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function AdmissionsSection() {
  const [formData, setFormData] = useState({
    studentName: "",
    class: "",
    academicYear: "",
    parentName: "",
    phoneNumber: "",
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "Thank you for your submission! We will get back to you soon.",
    });
    setFormData({
      studentName: "",
      class: "",
      academicYear: "",
      parentName: "",
      phoneNumber: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="admissions" className="bg-school-blue text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Join Our <span className="text-school-orange">Community</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We welcome applications from students who are eager to learn, grow, and contribute 
              to our vibrant school community. Our admission process is designed to identify 
              students who will thrive in our academic environment.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-school-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Calendar className="text-white w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Application Period</h3>
                  <p className="text-blue-100">Admissions open from November to February for the next academic year.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-school-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FileText className="text-white w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Required Documents</h3>
                  <p className="text-blue-100">Birth certificate, previous academic records, and passport-sized photographs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-school-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="text-white w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Interview Process</h3>
                  <p className="text-blue-100">Interaction with students and parents to understand aspirations and goals.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Application Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label className="text-white">Student Name</Label>
                  <Input 
                    type="text" 
                    value={formData.studentName}
                    onChange={(e) => handleInputChange("studentName", e.target.value)}
                    className="bg-white bg-opacity-20 border-white border-opacity-30 text-white placeholder-blue-200"
                    placeholder="Enter student name"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white">Class</Label>
                    <Select value={formData.class} onValueChange={(value) => handleInputChange("class", value)}>
                      <SelectTrigger className="bg-white bg-opacity-20 border-white border-opacity-30 text-white">
                        <SelectValue placeholder="Select Class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nursery">Nursery</SelectItem>
                        <SelectItem value="lkg">LKG</SelectItem>
                        <SelectItem value="ukg">UKG</SelectItem>
                        <SelectItem value="1">Class I</SelectItem>
                        <SelectItem value="2">Class II</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-white">Academic Year</Label>
                    <Select value={formData.academicYear} onValueChange={(value) => handleInputChange("academicYear", value)}>
                      <SelectTrigger className="bg-white bg-opacity-20 border-white border-opacity-30 text-white">
                        <SelectValue placeholder="Select Year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024-25">2024-25</SelectItem>
                        <SelectItem value="2025-26">2025-26</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label className="text-white">Parent Name</Label>
                  <Input 
                    type="text" 
                    value={formData.parentName}
                    onChange={(e) => handleInputChange("parentName", e.target.value)}
                    className="bg-white bg-opacity-20 border-white border-opacity-30 text-white placeholder-blue-200"
                    placeholder="Enter parent name"
                    required
                  />
                </div>
                <div>
                  <Label className="text-white">Phone Number</Label>
                  <Input 
                    type="tel" 
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    className="bg-white bg-opacity-20 border-white border-opacity-30 text-white placeholder-blue-200"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-school-orange hover:bg-orange-600 text-white py-3 font-semibold">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
