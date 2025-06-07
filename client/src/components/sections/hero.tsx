import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-school-blue to-school-blue-light text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Foundation for IIT NEET CLAT RIMC OLYMPIAD NTSE
            <span className="text-school-orange"> For Your Kids</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-200">
            Education is the most powerful weapon which you can use to change the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-school-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
              Read More
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-school-blue px-8 py-4 text-lg font-semibold">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
