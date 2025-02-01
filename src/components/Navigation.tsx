import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-glamour-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="font-serif text-2xl text-glamour-dark">
              GlamConnect
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-sans text-glamour-dark hover:text-glamour-pink transition-colors">
              Home
            </a>
            <a href="#" className="font-sans text-glamour-dark hover:text-glamour-pink transition-colors">
              Book Artists
            </a>
            <a href="#" className="font-sans text-glamour-dark hover:text-glamour-pink transition-colors">
              Masterclasses
            </a>
            <button className="bg-gradient-glamour text-white px-6 py-2 rounded-full font-sans hover:opacity-90 transition-opacity">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-glamour-dark hover:text-glamour-pink"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a
              href="#"
              className="block px-3 py-2 text-glamour-dark hover:text-glamour-pink font-sans"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-glamour-dark hover:text-glamour-pink font-sans"
            >
              Book Artists
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-glamour-dark hover:text-glamour-pink font-sans"
            >
              Masterclasses
            </a>
            <button className="w-full mt-4 bg-gradient-glamour text-white px-6 py-2 rounded-full font-sans hover:opacity-90 transition-opacity">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;