import { useState } from "react";
import { Link, useLocation } from "wouter";
import { GraduationCap, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const NavLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => (
    <Link href={href} className={`text-gray-700 hover:text-school-orange transition-colors font-medium ${
      isActive(href) ? "text-school-orange" : ""
    } ${className}`}>
      {children}
    </Link>
  );

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-school-orange rounded-full flex items-center justify-center">
              <GraduationCap className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-school-blue">DRS Institutes</h1>
              <p className="text-sm text-gray-600">HRD School of Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            
            <NavLink href="/about">About</NavLink>
            <NavLink href="/programs">Programs</NavLink>
            <NavLink href="/facilities">Facilities</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <NavLink href="/" className="block py-2">Home</NavLink>
                <NavLink href="/about" className="block py-2">About</NavLink>
                <NavLink href="/programs" className="block py-2">Programs</NavLink>
                <NavLink href="/facilities" className="block py-2">Facilities</NavLink>
                <NavLink href="/contact" className="block py-2">Contact</NavLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
