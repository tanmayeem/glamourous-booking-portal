import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-glamour-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-serif text-2xl text-glamour-dark">
              GlamConnect
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-sans text-glamour-dark hover:text-glamour-pink transition-colors">
              Home
            </Link>
            <Link to="/search" className="font-sans text-glamour-dark hover:text-glamour-pink transition-colors">
              Book Artists
            </Link>
            <Link to="/masterclasses" className="font-sans text-glamour-dark hover:text-glamour-pink transition-colors">
              Masterclasses
            </Link>
            <Link to="/login" className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-2 rounded-full font-sans transition-all duration-300">
              Sign In
            </Link>
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
            <Link
              to="/"
              className="block px-3 py-2 text-glamour-dark hover:text-glamour-pink font-sans"
            >
              Home
            </Link>
            <Link
              to="/search"
              className="block px-3 py-2 text-glamour-dark hover:text-glamour-pink font-sans"
            >
              Book Artists
            </Link>
            <Link
              to="/masterclasses"
              className="block px-3 py-2 text-glamour-dark hover:text-glamour-pink font-sans"
            >
              Masterclasses
            </Link>
            <Link
              to="/login"
              className="block w-full mt-4 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-2 rounded-full font-sans text-center"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;